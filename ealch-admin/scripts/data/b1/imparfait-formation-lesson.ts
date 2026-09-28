// b1.01.l1 « L'imparfait : la formation » — the lesson. REBUILD v2, DRAFT.
//
// Built to RICH-LESSON-STANDARD.md (binding) on top of B1-PILOT-BRIEF.md.
// Not imported, not merged into seed.json, not published. The pilot v1 Paul
// saw on the phone is in `_pilot-v1/`. The `task` section is the draft type in
// `_task-section.ts`, not in schema.ts, so `sections` is `DraftSection[]`.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · new corpus rows released at checkpoint)
// ══════════════════════════════════════════════════════════════════════════
//
//   Default rhythm per act: meet (reading / story / scene), name (cardDeck /
//   examples / tapTable), build (groupDrill, gated), choose (listening with
//   meaning questions, hideLines), trap (trapDrill stepped + gated, or
//   commonErrors), check (groupDrill of control pages, gated).
//
//   1  Le souvenir                 6   scene, goals, reading, spot, why (preview), check
//   2  La base : nous au présent   7   -er, -ir (-iss-), -re; cut -ons
//   3  Les six terminaisons        7   -ais -ais -ait -ions -iez -aient; [ɛ] x4, [jɔ̃], [je]
//                                      (the lesson's ONE tapTable lives here)
//   4  Irréguliers au présent,     8   faire [fə], prendre, boire, voir, croire, dire,
//      réguliers ici                   écrire, lire, venir, devoir, pouvoir, vouloir,
//                                      savoir, avoir, aller, mettre, connaître, sortir,
//                                      dormir, vivre
//   5  Être, la seule exception    6   ét-, all persons, c'était
//   6  -ger                        6   mangeais / mangions; nager, voyager, partager,
//                                      changer, bouger, ranger
//   7  -cer                        6   commençais / commencions; lancer, placer,
//                                      avancer, prononcer, annoncer
//   8  Le double i                 7   étudiions, oubliiez, riions, criions; voyions,
//                                      croyions, payions, envoyions; dictée
//   9  Les impersonnels            7   il y avait, il fallait, il pleuvait, il neigeait,
//                                      il faisait beau/froid/chaud, il valait mieux
//  10  Pronominaux et négation     7   je me levais, on se voyait, je ne savais pas,
//                                      il n'y avait personne
//  11  L'orthographe contre le son 8   parler / parlé / parlais / parlait / parlaient;
//                                      « j'ai parlé » vs « je parlais » by ear; dictée
//  12  Tout ensemble               10  long reading, focus, scenario, TASK, speaking,
//                                      recap, progressCheck, QUIZ, reviewDeck, roundup
//
//   TOTAL 85 missions. Row counts per act are asserted by the scratch
//   validator (corpus ROWS_BY_ACT), not typed here.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (unchanged; b1.02-b1.04 import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Pars de nous, coupe -ons, ajoute la fin. »
//   EN: Start from nous, cut -ons, add the ending.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the imparfait's FORMATION and SPELLING, act by act above.
//   QUOTES  a2.01 REFRAME (act 3), a2.01 NOUS_ON (act 2), a2.09 REFRAME
//           (acts 6, 7), all imported, never retyped.
//   LEAVES  usage (b1.02) and the passé composé contrast (b1.03, b1.04). Act 1
//           previews usage in one useCases screen; act 11 hears « j'ai parlé »
//           against « je parlais » as sound and spelling only.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED (Paul, 2026-09-22)
// ══════════════════════════════════════════════════════════════════════════
//
//   tu everywhere in instruction and coach copy; characters use what the
//   situation needs. Every learner-facing French string that is not a title,
//   a label or an answer carries English (`en` field, or a final « EN: »
//   sentence). Every `say` is French and spoken fr-FR; no English in `say`.
//   Theme `recits-au-passe`. A2 citations use the English trail label.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. Titles, frSub, group labels, stat keys and card heads carry NO « EN: »
//      tail (they are labels; the parallel lessons do the same). Tail them too?
//   2. The brief allows ONE tapTable in the flow; with 85 missions the other
//      paradigm screens use examples and cardDeck. Keep the one-tapTable rule
//      for 100-mission lessons?
//   3. The present `nous` of boire, voir, croire, écrire, dormir, vivre,
//      étudier and oublier is authored here as présent conjugation cards,
//      because no A2 row publishes them.
//   4. verbCheck uses tense 'imparfait' (and 'présent' on 8 cards), and
//      infinitives like 'se lever' for pronominals. Not yet run through verbecc.
//   5. 'coach-fr-FR' is a proposed voice id.
//   6. Story bubbles avoid « ? » and « ! » like scene bubbles (same renderer
//      risk assumed). Scenario and listening lines keep French punctuation.
//   7. Validators run with the task filtered out and its id removed from its
//      act (lessonWithoutTask). When `task` enters the schema, that goes.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet, SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import type { DraftSection, TaskSection } from './_task-section.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  A201_REFRAME, NOUS_ON, A209_REFRAME,
  PRESENT_ER_UNIT, PRESENT_IR_UNIT, PRESENT_RE_UNIT, ER_EXC_UNIT, FAIRE_UNIT, PRENDRE_UNIT, ALLER_UNIT,
  MODAUX_UNIT, SAVOIR_UNIT, PRONOMINAUX_UNIT, PC_UNIT,
  PRESENT_ER_REF, ER_EXC_REF, FAIRE_REF, PRESENT_IR_REF, PRONOMINAUX_REF, PC_REF,
} from './imparfait-formation-corpus.ts';
import { IMPARFAIT_FORMATION_TERMS } from './imparfait-formation-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r]));

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so a
 *  section can never name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.01: no item ${id}`);
  return r;
}

/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A listening line copied from its row. */
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
/** A control page: a label and a gating question, no words. */
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return { type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause', groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE SOUVENIR
 * ══════════════════════════════════════════════════════════════════════════ */

/** BREAKDOWN, NOT RUDENESS. Awa knows the verb and the present comes out,
 *  which tells Julien her grandmother still lives there. The resolve plants
 *  the -ger spelling question that act 6 answers. NO « ? » OR « ! » IN ANY
 *  BUBBLE (brief). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'La maison sur la photo',
  frSub: 'Elle habite là... ou elle habitait là',
  setting: { place: 'Un bureau, à Montréal', city: 'Montréal', time: '12 h 30', ambience: 'un open space calme, la pause de midi' },
  beats: [
    {
      kind: 'narration',
      text: 'Montréal, la pause de midi. Awa montre une vieille photo à son collègue Julien : une maison basse, une cour, un grand arbre. C’est Dakar, il y a vingt-cinq ans. EN: Awa shows Julien an old photo of a house in Dakar.',
      size: 'md',
      audio: AUDIO,
    },
    { kind: 'bubble', from: 'them', speaker: 'Julien', fr: 'Belle photo. Raconte-moi.', en: 'Nice photo. Tell me about it.', respell: '[bel foh-TOH · rah-kohⁿt-MWAH]', stage: 'Il approche sa chaise. EN: He pulls his chair closer.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Awa', fr: 'C’est la maison de ma grand-mère, à Dakar. Elle habite là.', en: 'It’s my grandmother’s house, in Dakar. She lives there.', respell: '[seh lah meh-zohⁿ duh mah grahⁿ-MEHR ah dah-KAR · eh-lah-beet LAH]', stage: 'Elle veut parler d’avant. Le verbe sort au présent. EN: She means the past; the verb comes out in the present.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Julien', fr: 'Ah, elle vit encore à Dakar, alors.', en: 'Oh, so she still lives in Dakar.', respell: '[ah · el vee tahⁿ-kor ah dah-KAR ah-LOR]', stage: 'Julien sourit. Awa, non. La maison est vendue depuis longtemps. EN: The house was sold long ago.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Awa', fr: 'Non... elle habite... elle a habité...', en: 'No... she lives... she has lived...', respell: '[nohⁿ · eh-lah-BEET · eh-lah-ah-bee-TAY]', stage: 'Elle cherche une forme qui dit : avant, pendant des années. EN: She looks for a form that means back then, for years.', size: 'md', audio: AUDIO },
    {
      kind: 'choice',
      prompt: 'Awa recommence. Elle parle de la vie sur la photo, pas d’aujourd’hui. Quelle phrase dit ça ? EN: Which sentence talks about life in the photo?',
      size: 'lg',
      options: [
        { fr: 'Ma grand-mère habite là.', respell: '[mah grahⁿ-meh-rah-beet LAH]', en: 'My grandmother lives there.', outcome: 'breaks', audio: AUDIO },
        { fr: 'Ma grand-mère habitait là.', respell: '[mah grahⁿ-meh-rah-bee-teh LAH]', en: 'My grandmother used to live there.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Julien regarde encore la photo. Il comprend : c’était avant. EN: Julien understands: that was before.',
        breaks: 'Julien hoche la tête. Il pense toujours qu’Awa peut aller la voir cet été. EN: Julien still thinks she can visit her grandmother there.',
      },
    },
    {
      kind: 'break',
      heading: 'Le présent dit : c’est encore vrai',
      body: 'habite parle d’aujourd’hui. Pour la vie sur la photo, il faut habitait. Tu le fabriques en trois gestes, avec un verbe que tu connais déjà. EN: the present says it is still true; the photo needs habitait.',
      wrong: { fr: 'Ma grand-mère habite là.', ipa: '/ma ɡʁɑ̃.mɛ.ʁa.bit la/', respell: '[mah grahⁿ-meh-rah-beet LAH]', en: 'My grandmother lives there.' },
      right: { fr: 'Ma grand-mère habitait là.', ipa: '/ma ɡʁɑ̃.mɛ.ʁa.bi.tɛ la/', respell: '[mah grahⁿ-meh-rah-bee-teh LAH]', en: 'My grandmother used to live there.' },
      coach: `${REFRAME} nous habitons, habit-, elle habitait. EN: ${REFRAME_EN}`,
      size: 'lg',
      audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: 'Le soir, Awa écrit sous la photo : « Chez Mame, à Dakar. Le dimanche, nous mangions dans la cour. » Elle hésite : mangions, avec un e ou sans e ? EN: She hesitates over the spelling of mangions.',
      size: 'md',
    },
  ],
  closing: { text: 'Une recette, et des cas à surveiller. Douze étapes. EN: One recipe, some cases to watch, twelve stages.', size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['base', 'fins'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Fabriquer l’imparfait de n’importe quel verbe', s: 'Actes 2 à 5 : la base nous, six fins, les irréguliers, être. EN: build the imparfait of any verb.' },
    { t: 'Écrire sans faute ce qu’on n’entend pas', s: 'Actes 3, 6, 7, 8, 11 : -ais/-ait/-aient, -ger, -cer, deux i. EN: spell what you cannot hear.' },
    { t: 'Dire le temps qu’il faisait, et ce qu’on ne faisait pas', s: 'Actes 9 et 10 : il y avait, je me levais, je ne savais pas. EN: impersonal, reflexive and negative forms.' },
    { t: 'Écrire un souvenir d’enfance', s: 'Acte 12 : un texte de 50 à 80 mots, corrigé. EN: write a graded childhood memory.' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** NOTICING BEFORE THE RULE. Glossary keys appear verbatim in `text`. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Chez Mame, à Dakar',
  frSub: 'Lis d’abord. La règle vient après.',
  text: "Sur la photo, on voit la maison de Mame, ma grand-mère, à Dakar. J'y passais toutes mes vacances quand j'étais petite. La maison n'était pas grande, mais il y avait une cour avec un manguier. Ma grand-mère commençait sa journée avant le soleil. Elle allait au marché, puis elle préparait le repas. À midi, nous mangions tous ensemble dans la cour. Nous étions souvent dix autour du plat. Mes cousins parlaient wolof avec elle, et moi, je répondais en français. L'après-midi, il faisait très chaud. Il fallait rester à l'ombre, alors nous jouions aux cartes. En août, il pleuvait fort, et la cour devenait une petite rivière. Aujourd'hui, j'habite à Montréal. La maison n'existe plus, mais j'ai encore la photo.",
  glossary: [
    { word: 'Mame', en: 'grandma', note: 'Mot wolof pour grand-mère, très courant au Sénégal. EN: Wolof word for grandmother.' },
    { word: 'un manguier', en: 'a mango tree', note: 'L’arbre qui donne les mangues. EN: the tree that bears mangoes.' },
    { word: 'avant le soleil', en: 'before sunrise', note: 'Très tôt, quand il fait encore nuit. EN: very early, still dark.' },
    { word: 'autour du plat', en: 'around the dish', note: 'Au Sénégal, on mange souvent ensemble dans un grand plat. EN: a shared dish is common in Senegal.' },
    { word: 'wolof', en: 'Wolof', note: 'La langue la plus parlée au Sénégal. EN: the most spoken language in Senegal.' },
    { word: "à l'ombre", en: 'in the shade', note: 'Là où le soleil ne tape pas. EN: out of the sun.' },
    { word: 'devenait', en: 'turned into', note: 'devenir : nous devenons, donc deven- + -ait. EN: from nous devenons.' },
  ],
  questions: [
    { q: 'Trouve trois verbes qui finissent par -ait. Qui fait l’action ? EN: Find three verbs ending in -ait. Who does the action?', a: "Par exemple : était (la maison), commençait, allait, préparait (ma grand-mère). Chaque fois, une seule personne ou une seule chose. EN: always one person or thing." },
    { q: 'Trouve les verbes avec nous. Comment finissent-ils ? EN: Find the verbs with nous. How do they end?', a: 'nous mangions, nous étions, nous jouions. Tous finissent par -ions. EN: all end in -ions.' },
    { q: 'mangions et commençait : un des deux a une lettre spéciale. Laquelle ? EN: Which one has a special letter?', a: 'commençait a un ç, pour garder le son [s] devant a. Les actes 6 et 7 expliquent tout. EN: the ç keeps the [s] sound before a.' },
    { q: 'Les deux dernières phrases sont au présent. Pourquoi ? EN: Why are the last two sentences in the present?', a: "Elles parlent d'aujourd'hui : Awa habite à Montréal maintenant. Tout le reste parle d'avant. EN: they are about today." },
  ],
  audio: REC('rec-b1-01-lecture'),
  say: 'Lis le souvenir d’Awa. Regarde la fin des verbes.',
  terms: ['base', 'fins'],
};

/** BUILD, act-1 flavour: spot the forms before anyone names them. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Repère l’imparfait',
  frSub: 'Avant, maintenant',
  groups: [
    grp('Dans le souvenir d’Awa', [
      it(E(1441), 'habitait'), it(E(1460), 'était'), it(E(1440), 'étais, habitais'), it('fr.a2.salutations.043', 'étais, disais'),
    ], chk('Ces quatre phrases parlent de quand ? EN: When are these four sentences set?', ['de maintenant', 'de demain', 'd’avant'], 2, 'D’avant : la vie de l’enfance, qui n’existe plus. EN: before, a life that is over.')),
    grp('Avant, ou maintenant', [
      it(E(1461), 'avant'), it(E(1462), 'maintenant'), it('fr.b1.routines.059', 'les deux'), it('fr.a2.heure-et-date.109', 'avant'),
    ], chk('Quelle phrase parle de ta vie maintenant ? EN: Which sentence is about now?', [src(E(1461)).fr, src(E(1462)).fr, src('fr.a2.heure-et-date.109').fr], 1, 'j’habite : présent, sans -ais. EN: j’habite is the present.')),
    ctl('Et la forme ?', 'Regarde les verbes d’avant. Quelle fin revient ? EN: Which ending keeps coming back?', ['-é', '-ons', '-ais, -ait'], 2, 'habitais, habitait, était, disais : -ais et -ait. EN: the endings -ais and -ait.'),
  ],
  audio: AUDIO,
  say: 'Trouve les verbes d’avant.',
  terms: ['fins'],
};

/** USAGE PREVIEW ONLY. One screen that makes the forms mean something;
 *  b1.02 owns the uses. */
const A1_POURQUOI: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-pourquoi',
  layer: 'core',
  title: 'À quoi ça sert, en bref',
  frSub: 'La leçon suivante en dit plus',
  cases: [
    { situation: 'Décrire une photo, un lieu d’avant. EN: describing a photo or a place from the past.', fr: "C'était la maison de ma grand-mère.", en: 'It was my grandmother’s house.' },
    { situation: 'Dire une habitude d’enfance. EN: a childhood habit.', fr: 'Le dimanche, nous mangions du thiéboudienne.', en: 'On Sundays, we used to eat thiéboudienne.' },
    { situation: 'Comparer avant et maintenant. EN: comparing then and now.', fr: "Avant, j'habitais à Dakar. Maintenant, j'habite à Montréal.", en: 'I used to live in Dakar. Now I live in Montreal.' },
    { situation: 'Dire comment on était. EN: saying how you were.', fr: "J'étais très timide à l'école.", en: 'I was very shy at school.' },
  ],
  audio: AUDIO,
  say: 'Ici, tu apprends à fabriquer les formes. La leçon suivante t’explique quand les utiliser.',
  terms: ['base'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le sens', 'Une photo de 1998. « Ma grand-mère ... là. » Elle n’y habite plus. EN: She no longer lives there.', ['habitait', 'habite', 'habitaient'], 0, 'habitait : la vie d’avant, une personne. habitaient, c’est pour ils. EN: past life, one person.'),
  ctl('La forme', 'Dans « nous mangions », quelle partie change avec la personne ? EN: Which part changes with the person?', ['mang-', 'nous mang-', '-ions'], 2, 'La fin. La base mang- reste. EN: the ending changes, the stem stays.'),
  ctl('Attention', '« Avant de dormir, je lis. » Ce verbe est au présent ou à l’imparfait ? EN: Present or imparfait?', ['au présent', 'à l’imparfait'], 0, 'Au présent : c’est une habitude d’aujourd’hui. Le mot avant ne décide rien. EN: « avant » is not a switch.'),
], ['base', 'fins']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le souvenir',
    opener: { line: 'Une photo, une phrase au présent, et un malentendu : tu vas voir pourquoi le français a besoin d’un autre passé. EN: A photo, a present-tense sentence and a misunderstanding: why French needs another past tense.', imageRef: 'lessons/imparfait/act01.jpg' },
    sections: [],
    milestone: 'Tu as vu le présent casser une histoire, et repéré l’imparfait avant la règle. EN: You saw the present break a story and spotted the imparfait.',
    estScreens: 26, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_POURQUOI, A1_CHECK],
  imports: ['fr.a2.heure-et-date.109', 'fr.b1.routines.059', 'fr.a2.salutations.043', 'fr.b1.sports-et-loisirs.076'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LA BASE : NOUS AU PRÉSENT
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Léa (9) interviews her father for homework. The present nous and the
 *  imparfait nous sit side by side, so the stem is visible before it is named.
 *  No « ? » in bubbles: Léa's questions are « dis-moi » statements. */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Le devoir de Léa',
  frSub: 'Papa, à mon âge...',
  setting: 'Rosemont, Montréal, le soir. Léa, neuf ans, doit interroger un parent sur son enfance. Julien répond. EN: Léa, nine, interviews her father Julien for homework.',
  bubbles: [
    { from: 'user', fr: 'Papa, dis-moi : à mon âge, toi et tes frères, vous regardiez la télé.', en: 'Dad, tell me: at my age, you and your brothers watched TV.' },
    { from: 'coach', fr: 'Oui, nous regardions la télé le samedi. Le reste du temps, nous restions dehors.', en: 'Yes, we watched TV on Saturdays. The rest of the time, we stayed outside.' },
    { from: 'user', fr: 'Et l’école, vous finissiez tard.', en: 'And school, you finished late.' },
    { from: 'coach', fr: 'Non, nous finissions à trois heures. Après, j’attendais le bus devant l’école.', en: 'No, we finished at three. Then I waited for the bus outside the school.' },
    { from: 'user', fr: 'Grand-papa vendait des journaux, c’est vrai.', en: 'Grandpa sold newspapers, that’s true.' },
    { from: 'coach', fr: 'Oui. Il vendait des journaux, et nous cherchions toujours un appartement plus grand.', en: 'Yes. He sold newspapers, and we were always looking for a bigger apartment.' },
    { from: 'user', fr: 'Aujourd’hui, nous regardons la télé tous les soirs.', en: 'Today, we watch TV every evening.' },
    { from: 'narrator', fr: 'Julien sourit. regardons, c’est aujourd’hui. regardions, c’était avant. Une seule syllabe de différence.', en: 'Julien smiles. regardons is today, regardions was then. One syllable apart.' },
  ],
  closing: { fr: 'Regarde bien : nous regardons, nous regardions. La base ne bouge pas.', en: 'Look closely: regardons, regardions. The stem does not move.' },
  audio: REC('rec-b1-01-lea'),
  say: 'Écoute Léa et son père. Compare regardons et regardions.',
  terms: ['base'],
};

/** NAME. The recipe, one idea per card. a2.01's NOUS_ON is quoted verbatim. */
const A2_RECETTE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-recette',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'La recette en trois gestes',
  frSub: 'Pars de nous',
  sheetId: 'sheet-recette',
  hint: 'Six cartes. Les trois premières sont la recette entière. EN: Six cards; the first three are the whole recipe.',
  audio: REC('rec-b1-01-recette'),
  say: REFRAME,
  terms: ['base', 'fins'],
  cards: [
    { head: '1. Pars de nous', label: 'le présent, que tu connais', fr: 'nous parlons', sub: '[noo par-LOHⁿ]', body: 'Prends le verbe au présent, avec nous. Tu connais cette forme depuis l’A2. EN: start from the present tense nous form.' },
    { head: '2. Coupe -ons', label: 'ce qui reste, c’est la base', fr: 'parl-', sub: '[parl]', body: 'Enlève -ons. Ce qui reste est la base de l’imparfait. EN: remove -ons; what is left is the stem.' },
    { head: '3. Ajoute la fin', label: 'une fin pour chaque personne', fr: 'je parlais · nous parlions', sub: '[zhuh par-LEH] · [noo par-LYOHⁿ]', body: 'Ajoute la fin de la personne : -ais pour je, -ions pour nous. L’acte 3 montre les six. EN: add the ending for the person.' },
    { head: 'les verbes en -ir', label: 'la base garde -iss-', fr: 'nous finissons · je finissais', sub: '[noo fee-nee-SOHⁿ] · [zhuh fee-nee-SEH]', body: `finiss- garde le -iss- de ${PRESENT_IR_REF}. Ne pars pas de l’infinitif finir. EN: the stem keeps -iss-; never start from the infinitive.` },
    { head: 'les verbes en -re', label: 'la base garde le d', fr: 'nous vendons · je vendais', sub: '[noo vahⁿ-DOHⁿ] · [zhuh vahⁿ-DEH]', body: 'vend-, attend-, répond-, perd- : le d du présent reste. EN: the d of the present stays in the stem.' },
    { head: 'nous, juste un outil', label: PRESENT_ER_REF, fr: 'on parlait', sub: '[ohⁿ par-LEH]', body: `« ${NOUS_ON} » Ici, nous sert à trouver la base. À l’oral, tu diras souvent on parlait. EN: nous is the tool; in speech you will often say on.` },
  ],
};

/** NAME, the stems laid out: present nous on the left, stem on the right.
 *  examples (not a tapTable: the lesson's one tapTable is act 3's). */
const A2_BASES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-bases',
  layer: 'core',
  title: 'De nous à la base',
  frSub: 'Huit verbes réguliers',
  examples: [
    { fr: 'nous regardons → regard- → je regardais', en: 'we watch → I used to watch', note: 'verbe en -er. EN: -er verb.' },
    { fr: 'nous cherchons → cherch- → nous cherchions', en: 'we look for → we used to look for', note: 'verbe en -er. EN: -er verb.' },
    { fr: 'nous restons → rest- → ils restaient', en: 'we stay → they used to stay', note: 'verbe en -er. EN: -er verb.' },
    { fr: 'nous choisissons → choisiss- → je choisissais', en: 'we choose → I used to choose', note: '-ir avec -iss-. EN: -ir verb, keeps -iss-.' },
    { fr: 'nous réfléchissons → réfléchiss- → nous réfléchissions', en: 'we think it over → we used to think it over', note: '-ir avec -iss-. EN: keeps -iss-.' },
    { fr: 'nous vendons → vend- → je vendais', en: 'we sell → I used to sell', note: 'verbe en -re. EN: -re verb.' },
    { fr: 'nous attendons → attend- → j’attendais', en: 'we wait → I used to wait', note: 'je devient j’ devant une voyelle. EN: je elides before a vowel.' },
    { fr: 'nous répondons → répond- → tu répondais', en: 'we answer → you used to answer', note: 'verbe en -re. EN: -re verb.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['base'],
};

/** BUILD. Present row, then its imparfait row, three families, a gate each. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis la forme',
  frSub: '-er, -ir, -re',
  sheetId: 'sheet-recette',
  groups: [
    grp('Verbes en -er', [
      it('fr.a2.verbes.106', 'regard-'), it(E(416), 'regard- + ions'), it('fr.a2.verbes.119', 'rest-'), it(E(417), 'rest- + ions'), it('fr.a2.verbes.114', 'cherch-'), it(E(402), 'cherch- + ions'),
    ], chk('nous chantons. Avec je, à l’imparfait : EN: With je, in the imparfait:', ['je chantait', 'je chantonsais', 'je chantais'], 2, 'chant- + ais. Pas de -ons, et je prend -ais. EN: no -ons, and je takes -ais.')),
    grp('Verbes en -ir (-iss-)', [
      it('fr.a2.verbes.184', 'finiss-'), it(E(1445), 'finiss- + ions'), it('fr.a2.verbes.196', 'réfléchiss-'), it(E(406), 'réfléchiss- + ions'), it('fr.a2.marche.004', 'choisiss-'), it(E(404), 'choisiss- + ais'),
    ], chk('nous grandissons. Avec nous : EN: With nous:', ['nous grandions', 'nous grandissions', 'nous grandissons'], 1, 'grandiss- + ions. La troisième est le présent. EN: the third one is the present.')),
    grp('Verbes en -re', [
      it('fr.a2.verbes.244', 'vend-'), it(E(408), 'vend- + ions'), it('fr.a2.verbes.239', 'perd-'), it(E(411), 'perd- + ait'), it(E(409), 'attend- + ais'), it(E(410), 'répond- + ais'),
    ], chk('nous descendons. Avec ils : EN: With ils:', ['ils descendaient', 'ils descendait', 'ils descendent'], 0, 'descend- + aient. descendent, c’est le présent. EN: descendent is the present.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['base', 'fins'],
};

/** CHOOSE, by meaning: now or before, heard. Julien's mother on the phone.
 *  hideLines, or it is a reading exercise with a play button. */
const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Grand-maman Lise au téléphone',
  frSub: 'Avant ou maintenant ?',
  lines: [
    { fr: 'Quand ton père était petit, nous habitions à Rosemont.', en: 'When your dad was little, we lived in Rosemont.' },
    { fr: 'Nous cherchions toujours un appartement plus grand.', en: 'We were always looking for a bigger apartment.' },
    { fr: "Aujourd'hui, nous habitons à Laval.", en: 'Today we live in Laval.' },
    { fr: 'Ton grand-père vendait des journaux le matin.', en: 'Your grandfather sold newspapers in the morning.' },
    { fr: 'Moi, je finissais le travail à cinq heures.', en: 'I finished work at five.' },
    { fr: 'Le samedi, nous regardions le hockey à la télé.', en: 'On Saturdays, we watched hockey on TV.' },
    { fr: 'Maintenant, nous regardons les matchs sur la tablette.', en: 'Now we watch the games on the tablet.' },
    { fr: "Toi et tes amis, vous choisissiez vos activités à l'école ?", en: 'Did you and your friends choose your activities at school?' },
  ],
  questions: [
    { q: 'Ligne 3 : Lise parle de maintenant ou d’avant ? EN: Line 3: now or before?', opts: ['d’avant', 'de maintenant'], correct: 1, why: 'habitons : [ɔ̃], sans i. C’est le présent. EN: no i sound, present.' },
    { q: 'Lignes 6 et 7 : laquelle parle d’avant ? EN: Which one is about before?', opts: ['la 6', 'la 7'], correct: 0, why: 'regardions, avec le son [jɔ̃]. EN: you hear [jɔ̃].' },
    { q: 'Qui vendait des journaux ? EN: Who sold newspapers?', opts: ['la grand-mère', 'le grand-père', 'Léa'], correct: 1, why: 'Ton grand-père vendait. EN: the grandfather.' },
    { q: 'Ligne 5 : finissais vient de quelle forme ? EN: Where does finissais come from?', opts: ['je finis', 'finir', 'nous finissons'], correct: 2, why: 'La base vient de nous finissons : finiss-. EN: from the nous form.' },
  ],
  audio: REC('rec-b1-01-lise'),
  say: 'Écoute Lise. Avant, ou maintenant ?',
  terms: ['base'],
};

/** TRAP, stepped and gated. The wrong reading is in promptSound only; every
 *  card's `fr` is correct French, because the audio step plays it. */
const A2_PIEGES: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-pieges',
  layer: 'core',
  swipe: true,
  title: 'Les pièges de la base',
  frSub: 'L’infinitif, le présent, le conditionnel',
  rule: {
    title: 'La base vient de nous, jamais de l’infinitif',
    body: 'finir ne donne pas fin-, vendre ne donne pas vendr-. Pars toujours de nous : finiss-, vend-. EN: never build from the infinitive; always from nous.',
  },
  cards: [
    { promptLabel: 'finir, je', promptSound: 'je finais', fr: 'je finissais', ipa: '/ʒə fi.ni.sɛ/', tip: 'nous finissons : la base est finiss-. EN: the stem keeps -iss-.' },
    { promptLabel: 'choisir, nous', promptSound: 'nous choisions', fr: 'nous choisissions', ipa: '/nu ʃwa.zi.sjɔ̃/', tip: 'nous choisissons, donc choisiss- + ions. EN: choisiss- plus -ions.' },
    { promptLabel: 'parler, je', promptSound: 'je parlonsais', fr: 'je parlais', ipa: '/ʒə paʁ.lɛ/', tip: 'Coupe -ons avant d’ajouter la fin. EN: cut -ons first.' },
    { promptLabel: 'remplir, il', promptSound: 'il remplait', fr: 'il remplissait', ipa: '/il ʁɑ̃.pli.sɛ/', tip: 'nous remplissons : -iss- reste. EN: -iss- stays.' },
    { promptLabel: 'vendre, je', promptSound: 'je vendrais', fr: 'je vendais', ipa: '/ʒə vɑ̃.dɛ/', tip: 'vendrais est un autre temps. La base de l’imparfait n’a pas de r. EN: no r; vendrais is another tense.' },
    { promptLabel: 'attendre, ils', promptSound: 'ils attendent', fr: 'ils attendaient', ipa: '/il.za.tɑ̃.dɛ/', tip: 'attendent, c’est le présent. Pour avant : attend- + aient. EN: attendent is the present.' },
  ],
  drill: [
    { promptSay: 'nous finissons → je ...', opts: ['finais', 'finissais'], correct: 1 },
    { promptSay: 'nous choisissons → nous ...', opts: ['choisissions', 'choisions'], correct: 0 },
    { promptSay: 'nous vendons → je ...', opts: ['vendrais', 'vendais'], correct: 1 },
    { promptSay: 'nous parlons → ils ...', opts: ['parlaient', 'parlonsaient'], correct: 0 },
    { promptSay: 'nous remplissons → il ...', opts: ['remplait', 'remplissait'], correct: 1 },
    { promptSay: 'nous regardons → tu ...', opts: ['regardais', 'regardait'], correct: 0 },
    { promptSay: 'nous attendons → vous ...', opts: ['attendez', 'attendiez'], correct: 1 },
    { promptSay: 'nous perdons → elle ...', opts: ['perdait', 'perdais'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'La base vient de nous' },
    { label: 'Six pièges', kind: 'cards', title: 'Le faux, puis le vrai' },
    { label: 'Écoute', kind: 'audio', title: 'Les bonnes formes' },
    { label: 'À toi', kind: 'drill', title: 'Huit de suite', gate: true },
  ],
  audio: REC('rec-b1-01-pieges-base'),
  say: REFRAME,
  terms: ['base'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('-ir', 'nous grandissons. Avec je, à l’imparfait : EN: With je:', ['je grandissais', 'je grandais', 'je grandirais'], 0, 'grandiss- + ais. EN: keep -iss-.'),
  ctl('-re', 'nous répondons. Avec ils : EN: With ils:', ['ils répondait', 'ils répondaient', 'ils répondent'], 1, 'répond- + aient. EN: plural ending -aient.'),
  ctl('La base', 'Quelle est la base de réfléchir à l’imparfait ? EN: What is the stem of réfléchir?', ['réfléch-', 'réfléchir-', 'réfléchiss-'], 2, 'nous réfléchissons, moins -ons. EN: nous form minus -ons.'),
], ['base']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La base : nous au présent',
    opener: { line: 'Tu connais déjà la forme qui sert à tout fabriquer : le présent avec nous. Ici, elle devient ton point de départ. EN: You already know the form that builds everything: the present with nous. Here it becomes your starting point.', imageRef: 'lessons/imparfait/act02.jpg' },
    sections: [],
    milestone: 'Tu trouves la base de n’importe quel verbe régulier à partir de nous. EN: You find the stem of any regular verb from nous.',
    estScreens: 34, restPoints: ['a2-bases', 'a2-ecoute'],
  },
  sections: [A2_HISTOIRE, A2_RECETTE, A2_BASES, A2_CONSTRUIRE, A2_ECOUTE, A2_PIEGES, A2_CHECK],
  imports: [...IMPORTED.presentNous, 'fr.a2.marche.004'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LES SIX TERMINAISONS
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Koffi's building in Abidjan: every person of parler in one text,
 *  so the learner sees six endings before the table names them. */
const A3_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La cour de l’immeuble, à Abidjan',
  frSub: 'Six personnes, six fins',
  text: "Quand j'étais petit, j'habitais à Abidjan, dans le quartier de Cocody. Dans notre immeuble, tout le monde parlait avec tout le monde. Le soir, les enfants jouaient dans la cour. Ma sœur Aya parlait avec les voisines, et moi, je regardais les grands jouer au foot. À l'école, nous parlions français, et à la maison, baoulé. Ma mère me disait souvent : « Tu parlais encore avec Didier ? » Les parents de Didier, eux, parlaient dioula. Quand ils venaient chez nous, on mangeait tous ensemble. Le lendemain, la voisine d'en face riait : « Vous parliez fort, hier soir ! »",
  glossary: [
    { word: 'Cocody', en: 'Cocody (district)', note: 'Un quartier d’Abidjan, en Côte d’Ivoire. EN: a district of Abidjan.' },
    { word: 'les grands', en: 'the older kids', note: 'Ici : les enfants plus âgés. EN: the older children.' },
    { word: 'baoulé', en: 'Baoulé', note: 'Une langue de Côte d’Ivoire. EN: a language of Côte d’Ivoire.' },
    { word: 'dioula', en: 'Dioula', note: 'Une autre langue très parlée en Côte d’Ivoire. EN: another widely spoken language there.' },
    { word: "d'en face", en: 'across the way', note: 'Qui habite de l’autre côté. EN: living opposite.' },
  ],
  questions: [
    { q: 'Trouve parler avec six sujets différents. EN: Find parler with six different subjects.', a: 'tout le monde parlait, Aya parlait, nous parlions, tu parlais, ils parlaient, vous parliez. EN: six subjects, six spellings.' },
    { q: 'parlait, parlais, parlaient : à l’oral, tu entends une différence ? EN: Do you hear a difference?', a: 'Non. Les trois se disent [paʁ.lɛ]. Seul le sujet dit qui parle. EN: no; only the subject tells you.' },
    { q: 'Quelles formes de parler ont un son différent ? EN: Which forms sound different?', a: 'nous parlions et vous parliez : on entend le i. EN: the i is audible with nous and vous.' },
    { q: '« on mangeait » : on prend la fin de quelle personne ? EN: Which person’s ending does on take?', a: 'La fin de il : -ait. EN: the il ending, -ait.' },
  ],
  audio: REC('rec-b1-01-cocody'),
  say: 'Lis le souvenir de Koffi. Cherche le verbe parler.',
  terms: ['fins', 'son'],
};

/** NAME. The lesson's ONE tapTable (brief: one in the flow, six rows max). */
const A3_FINS: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-fins',
  layer: 'core',
  title: 'Six fins pour tous les verbes',
  frSub: 'Touche une ligne pour l’écouter',
  sheetId: 'sheet-recette',
  cols: ['Qui', 'Fin', 'parler'],
  rows: [
    { cells: ['je', '-ais', 'je parlais'], say: 'je parlais', detail: { title: '-ais, son [ɛ]', body: 'Le s ne se dit pas. EN: the s is silent.', say: 'Je parlais français.' } },
    { cells: ['tu', '-ais', 'tu parlais'], say: 'tu parlais', detail: { title: '-ais, comme je', body: 'Même fin, même son que je. EN: same ending and sound as je.', say: 'Tu parlais français.' } },
    { cells: ['il, elle, on', '-ait', 'il parlait'], say: 'il parlait', detail: { title: 'encore [ɛ]', body: 'Le t ne se dit pas. on prend aussi -ait. EN: silent t; on takes -ait too.', say: 'On parlait français.' } },
    { cells: ['nous', '-ions', 'nous parlions'], say: 'nous parlions', detail: { title: '[jɔ̃], un son à part', body: 'On entend le i. C’est la seule différence avec nous parlons. EN: the i is the only difference from the present.', say: 'Nous parlions français.' } },
    { cells: ['vous', '-iez', 'vous parliez'], say: 'vous parliez', detail: { title: '[je], un son à part', body: 'Lui aussi, on l’entend : parliez contre parlez. EN: audible too, parliez against parlez.', say: 'Vous parliez français.' } },
    { cells: ['ils, elles', '-aient', 'ils parlaient'], say: 'ils parlaient', detail: { title: 'six lettres, un son [ɛ]', body: '-aient se dit comme -ais. Tu l’écris, tu ne l’entends pas. EN: six letters, one sound.', say: 'Ils parlaient français.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fins', 'son'],
};

/** NAME, the sound side. a2.01's REFRAME is quoted verbatim on card 1. */
const A3_SON: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-son',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Ce qu’on entend, ce qu’on écrit',
  frSub: 'Quatre formes, un son',
  hint: 'Cinq cartes. Écoute chaque carte deux fois. EN: Five cards; listen to each one twice.',
  audio: REC('rec-b1-01-son'),
  say: 'Quatre formes, un seul son. Le sujet dit qui.',
  terms: ['son', 'fins'],
  cards: [
    { head: 'quatre formes, un son', label: '[ɛ]', fr: 'je parlais · tu parlais · il parlait · ils parlaient', sub: '[par-LEH] x 4', body: `${Cap(PRESENT_ER_REF)} disait : « ${A201_REFRAME} » C’est encore vrai à l’imparfait. EN: the subject carries the person here too.` },
    { head: 'on = il', label: 'on prend -ait', fr: 'on parlait', sub: '[ohⁿ par-LEH]', body: 'À l’oral, on remplace souvent nous. Il prend la fin de il : on parlait, jamais on parlions. EN: on takes the il ending.' },
    { head: 'nous : on entend le i', label: '[jɔ̃]', fr: 'nous parlons · nous parlions', sub: '[noo par-LOHⁿ] · [noo par-LYOHⁿ]', body: 'Présent : [ɔ̃]. Imparfait : [jɔ̃]. Ce petit i est la seule différence. Écoute-le. EN: the i sound is the only difference.' },
    { head: 'vous : pareil', label: '[je]', fr: 'vous parlez · vous parliez', sub: '[voo par-LAY] · [voo par-LYAY]', body: 'Présent : [e]. Imparfait : [je]. Encore le i. EN: again, only the i sound.' },
    { head: 'ils : six lettres muettes', label: '-aient = [ɛ]', fr: 'ils parlaient', sub: '[eel par-LEH]', body: 'Pas de [ɑ̃], pas de t : -aient se dit [ɛ]. Seul le sujet ils te dit que c’est pluriel. EN: -aient is just [ɛ].' },
  ],
};

/** BUILD. The subject picks the ending; three gates. */
const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le sujet choisit la fin',
  frSub: 'je, tu, il, nous, vous, ils',
  sheetId: 'sheet-recette',
  groups: [
    grp('je et tu : -ais', [it(E(1401)), it(E(414)), it(E(1436)), it(E(424))],
      chk('Mes cousins ... wolof. EN: My cousins spoke Wolof.', ['parlaient', 'parlait', 'parlais'], 0, 'Mes cousins = ils : -aient. EN: plural subject, -aient.')),
    grp('il, elle, on : -ait', [it(E(1402)), it(E(421)), it(E(422)), it(E(425))],
      chk('On ... dehors tout l’après-midi. EN: We played outside all afternoon.', ['jouions', 'jouait', 'jouaient'], 1, 'on prend la fin de il : -ait. EN: on takes -ait.')),
    grp('nous, vous, ils : -ions, -iez, -aient', [it(E(1403)), it(E(1404)), it(E(426)), it(E(1405)), it(E(423)), it(E(1459)), it(E(1470))],
      chk('Toi et ta sœur, vous ... créole. EN: You and your sister spoke Creole.', ['parlais', 'parlait', 'parliez'], 2, 'vous : -iez. EN: vous takes -iez.')),
  ],
  audio: AUDIO,
  say: 'Regarde le sujet, puis écris sa fin.',
  terms: ['fins', 'son'],
};

/** CHOOSE, by ear: who is doing it, when the ending cannot tell you. Julien's
 *  Rosemont. hideLines. Lines 3 and 4 must be read identically (studio). */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le quartier de Julien',
  frSub: 'Qui fait quoi ?',
  lines: [
    { fr: "Moi, j'habitais à Rosemont, un quartier de Montréal.", en: 'I used to live in Rosemont, a Montreal neighbourhood.' },
    { fr: 'Mes parents avaient un petit dépanneur au coin de la rue.', en: 'My parents had a little corner store at the end of the street.' },
    { fr: 'Le samedi, je travaillais là, et ma sœur travaillait avec moi.', en: 'On Saturdays I worked there, and my sister worked with me.' },
    { fr: 'Mes parents, eux, travaillaient tous les jours, même le dimanche.', en: 'My parents worked every day, even Sunday.' },
    { fr: "L'hiver, nous faisions du patin au parc, à côté de l'école.", en: 'In winter, we skated in the park next to the school.' },
    { fr: 'On rentrait tard, et ma mère criait un peu.', en: 'We came home late, and my mother shouted a bit.' },
    { fr: 'Et toi, Awa, tes cousins et toi, vous jouiez dehors aussi ?', en: 'And you, Awa, did you and your cousins play outside too?' },
    { fr: "C'était froid, mais c'était beau.", en: 'It was cold, but it was beautiful.' },
  ],
  questions: [
    { q: 'Lignes 3 et 4 : travaillais, travaillait, travaillaient. Combien de fins différentes tu entends ? EN: How many different endings do you hear?', opts: ['une seule', 'deux', 'trois'], correct: 0, why: 'Une seule : [ɛ]. Trois orthographes, un son. EN: three spellings, one sound.' },
    { q: 'Qui travaillait tous les jours ? Comment tu le sais ? EN: Who worked every day, and how do you know?', opts: ['Julien, par la fin', 'ses parents, par le sujet', 'sa sœur, par la fin'], correct: 1, why: 'La fin ne dit rien. Le sujet, mes parents, dit qui. EN: the subject tells you, not the ending.' },
    { q: 'Quelle forme a une fin qu’on entend vraiment ? EN: Which form has an ending you can hear?', opts: ['ils travaillaient', 'je travaillais', 'nous faisions'], correct: 2, why: '-ions se dit [jɔ̃]. EN: -ions is audible.' },
    { q: 'Ligne 7 : Julien parle à qui ? EN: Line 7: who is Julien talking to?', opts: ['à Awa et à ses cousins', 'à Awa seule', 'à ses parents'], correct: 0, why: 'vous jouiez : -iez, plusieurs personnes. EN: -iez, several people.' },
  ],
  audio: REC('rec-b1-01-julien'),
  say: 'Écoute Julien. Qui fait quoi ?',
  terms: ['son'],
};

/** TRAP. The spelling errors the ear cannot catch. */
const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Même son, mauvaise fin',
  errors: [
    { wrong: 'Mes cousins parlait wolof.', right: 'Mes cousins parlaient wolof.', why: 'Normal : tu entends [ɛ]. Mais le sujet est pluriel, donc -aient. EN: plural subject, -aient.' },
    { wrong: 'Je parlait avec ma sœur.', right: 'Je parlais avec ma sœur.', why: 'je prend toujours -ais, jamais -ait. EN: je always takes -ais.' },
    { wrong: 'Tu parlait trop vite.', right: 'Tu parlais trop vite.', why: 'tu, comme je : -ais. EN: tu takes -ais, like je.' },
    { wrong: 'On parlaient français.', right: 'On parlait français.', why: 'on veut dire nous, mais il se conjugue comme il. EN: on means we but takes the il form.' },
    { wrong: 'En 1990, nous parlons baoulé.', right: 'En 1990, nous parlions baoulé.', why: 'Pour avant, il faut le i : parlions. EN: the past needs the i.' },
    { wrong: 'À l’époque, vous parlez créole.', right: 'À l’époque, vous parliez créole.', why: 'Même chose avec vous : parliez. EN: same with vous.' },
  ],
  audio: AUDIO,
  say: 'Six erreurs. On ne les entend pas, on les voit.',
  terms: ['fins', 'son'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('ils', 'regarder, avec ils : EN: regarder, with ils:', ['ils regardait', 'ils regardaient', 'ils regardais'], 1, '-aient pour ils et elles. EN: -aient for ils/elles.'),
  ctl('on', 'On ... tous ensemble. EN: We all ate together.', ['mangions', 'mangeaient', 'mangeait'], 2, 'on + -ait. EN: on takes -ait.'),
  ctl('à l’oreille', 'Quelles deux personnes ont une fin qu’on entend ? EN: Which two persons have an audible ending?', ['nous et vous', 'je et tu', 'il et ils'], 0, '-ions [jɔ̃] et -iez [je]. EN: nous and vous.'),
], ['fins', 'son']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Les six terminaisons',
    opener: { line: 'Six terminaisons, et quatre qui sonnent exactement pareil : ton oreille ne suffit pas, alors tu apprends à les écrire. EN: Six endings, four of them identical to the ear, so you learn to write them.', imageRef: 'lessons/imparfait/act03.jpg' },
    sections: [],
    milestone: 'Tu mets la bonne fin, même quand ton oreille entend la même chose. EN: You write the right ending even when it sounds the same.',
    estScreens: 32, restPoints: ['a3-son', 'a3-ecoute'],
  },
  sections: [A3_LECTURE, A3_FINS, A3_SON, A3_CONSTRUIRE, A3_ECOUTE, A3_ERREURS, A3_CHECK],
  imports: [],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — IRRÉGULIERS AU PRÉSENT, RÉGULIERS ICI
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Bernard, 72, in Lausanne: his baker's apprenticeship. Twenty verbs
 *  that are irregular in the present, all built from nous. No negation and no
 *  pronominal verb in the imparfait here (act 10 owns them). */
const A4_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a4-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le boulanger de Lausanne',
  frSub: 'Bernard, soixante-douze ans, raconte',
  text: "À seize ans, je vivais chez mes parents, à Lausanne, et je voulais devenir boulanger. Je devais commencer à trois heures du matin. Je prenais mon vélo, je mettais un gros pull, et j'allais à la boulangerie de monsieur Perret. Il faisait encore nuit, et je dormais peu. Monsieur Perret savait tout faire. Il connaissait chaque client par son prénom, et les gens venaient de loin pour son pain. Moi, je voyais comment il travaillait, et je disais : « Un jour, ce sera moi. » Il croyait en moi. Le soir, je lisais des livres de cuisine et j'écrivais des recettes dans un carnet. Le dimanche, je sortais avec mes amis : nous buvions un verre au bord du lac. J'avais peu d'argent, mais je pouvais faire ce que j'aimais.",
  glossary: [
    { word: 'boulanger', en: 'baker', note: 'La personne qui fait le pain. EN: the person who makes bread.' },
    { word: 'un gros pull', en: 'a thick sweater', note: 'Un vêtement chaud. EN: a warm jumper.' },
    { word: 'par son prénom', en: 'by first name', note: 'Marie, Paul... EN: by their first name.' },
    { word: 'un carnet', en: 'a notebook', note: 'Un petit cahier. EN: a small notebook.' },
    { word: 'au bord du lac', en: 'by the lake', note: 'Le lac Léman, à Lausanne. EN: Lake Geneva.' },
  ],
  questions: [
    { q: 'Trouve cinq verbes irréguliers au présent. EN: Find five verbs that are irregular in the present.', a: 'Par exemple : vivais (vivre), voulais (vouloir), devais (devoir), prenais (prendre), mettais (mettre), faisait (faire), savait (savoir). EN: all irregular now, regular here.' },
    { q: 'prenais et buvions : d’où vient la base ? EN: Where do the stems come from?', a: 'De nous prenons (pren-) et de nous buvons (buv-). EN: from the present nous forms.' },
    { q: 'Comment se dit faisait ? EN: How is faisait pronounced?', a: 'Avec [ə] : [fə.zɛ], comme nous faisons. EN: with [ə], like faisons.' },
    { q: 'Quelle phrase n’est pas à l’imparfait ? EN: Which sentence is not in the imparfait?', a: '« Un jour, ce sera moi. » C’est le futur, dans la bouche du jeune Bernard. EN: that is the future, quoted.' },
  ],
  audio: REC('rec-b1-01-bernard'),
  say: 'Lis le souvenir de Bernard. Cherche les verbes irréguliers.',
  terms: ['irreg', 'base'],
};

/** NAME. One family per card. */
const A4_IDEE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-idee',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Irrégulier ? Pas ici.',
  frSub: 'La recette marche encore',
  sheetId: 'sheet-irreg',
  hint: 'Huit cartes, une famille par carte. EN: Eight cards, one verb family each.',
  audio: REC('rec-b1-01-irreg'),
  say: REFRAME,
  terms: ['irreg', 'base'],
  cards: [
    { head: 'l’idée', label: 'irrégulier au présent', fr: 'nous faisons, nous prenons, nous buvons', sub: '[noo fuh-ZOHⁿ] · [noo pruh-NOHⁿ] · [noo bü-VOHⁿ]', body: 'Ces verbes sont difficiles au présent. Mais ils ont une forme nous, et c’est tout ce qu’il te faut. EN: they all have a nous form, which is all you need.' },
    { head: 'faire', label: 'on écrit ai, on dit [ə]', fr: 'nous faisons · je faisais', sub: '[noo fuh-ZOHⁿ] · [zhuh fuh-ZEH]', body: `Comme dans nous faisons (${FAIRE_REF}), le ai de fais- se dit [ə]. EN: faisais is said with [ə] and spelled with ai.` },
    { head: 'prendre, venir', label: 'un seul n', fr: 'je prenais · je venais', sub: '[zhuh pruh-NEH] · [zhuh vuh-NEH]', body: 'nous prenons, nous venons : un seul n. Pas de d, pas de nn. EN: one n, no d.' },
    { head: 'boire, voir, croire', label: 'buv-, voy-, croy-', fr: 'je buvais · je voyais · je croyais', sub: '[zhuh bü-VEH] · [zhuh vwah-YEH] · [zhuh krwah-YEH]', body: 'La base de nous change beaucoup : buv-, pas boi-. EN: the nous stem is very different from the infinitive.' },
    { head: 'dire, écrire, lire', label: 'un s ou un v apparaît', fr: 'je disais · j’écrivais · je lisais', sub: '[zhuh dee-ZEH] · [zhay-kree-VEH] · [zhuh lee-ZEH]', body: 'nous disons, écrivons, lisons : le s ou le v de nous reste. EN: the s or v of nous stays.' },
    { head: 'devoir, pouvoir, vouloir, savoir', label: 'dev-, pouv-, voul-, sav-', fr: 'je devais · je pouvais · je voulais · je savais', sub: '[duh-VEH] · [poo-VEH] · [voo-LEH] · [sah-VEH]', body: 'Au présent : je dois, je peux, je veux, je sais. Ici, pas de surprise. EN: no surprises in the imparfait.' },
    { head: 'avoir, aller', label: 'av-, all-', fr: 'j’avais · j’allais', sub: '[zhah-VEH] · [zhah-LEH]', body: 'nous avons, nous allons. Pas de v-, pas de ir- : av- et all-. EN: av- and all-, from the nous forms.' },
    { head: 'mettre, connaître, sortir, dormir, vivre', label: 'mett-, connaiss-, sort-, dorm-, viv-', fr: 'je mettais · je connaissais · je sortais', sub: '[meh-TEH] · [koh-neh-SEH] · [sor-TEH]', body: 'Même recette : je dormais, je vivais. Aucun accent sur connaissais. EN: same recipe; no circumflex in connaissais.' },
  ],
};

/** The paradigm table for act 4: one tap per verb, present nous to imparfait.
 *  The full twenty are in a4-exemples and in the reference sheet. */
const A4_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a4-tableau',
  layer: 'core',
  title: 'Six irréguliers, à écouter',
  frSub: 'Touche une ligne',
  cols: ['Infinitif', 'nous (présent)', 'je (imparfait)'],
  rows: [
    { cells: ['faire', 'nous faisons', 'je faisais'], say: 'je faisais', detail: { title: 'faire', body: 'On dit [fə], on écrit ai. EN: said [fə], spelled ai.', say: 'Nous faisions le lit.' } },
    { cells: ['prendre', 'nous prenons', 'je prenais'], say: 'je prenais', detail: { title: 'prendre', body: 'Un seul n, pas de d. EN: one n, no d.', say: "Nous prenions le bus pour aller à l'école." } },
    { cells: ['boire', 'nous buvons', 'je buvais'], say: 'je buvais', detail: { title: 'boire', body: 'La base ne ressemble pas à je bois. EN: the stem is nothing like bois.', say: 'Je buvais du lait tous les matins.' } },
    { cells: ['voir', 'nous voyons', 'je voyais'], say: 'je voyais', detail: { title: 'voir', body: 'La base finit par y : voy-. EN: the stem ends in y.', say: 'Nous voyions la mer.' } },
    { cells: ['dire', 'nous disons', 'je disais'], say: 'je disais', detail: { title: 'dire', body: 'Le s de nous disons reste. EN: the s of disons stays.', say: 'Nous disions bonjour.' } },
    { cells: ['venir', 'nous venons', 'je venais'], say: 'je venais', detail: { title: 'venir', body: 'Un seul n, comme nous venons. EN: one n, as in venons.', say: 'Je venais ici tous les étés.' } },
  ],
  audio: AUDIO,
  say: 'Touche une ligne pour écouter le présent et l’imparfait.',
  terms: ['irreg'],
};

/** NAME, the full list: twenty verbs, present nous to imparfait je. */
const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  title: 'Vingt verbes, une recette',
  frSub: 'De nous à je',
  sheetId: 'sheet-irreg',
  examples: [
    { fr: 'nous faisons → je faisais', en: 'we do → I used to do', note: '[fə]' },
    { fr: 'nous prenons → je prenais', en: 'we take → I used to take' },
    { fr: 'nous buvons → je buvais', en: 'we drink → I used to drink' },
    { fr: 'nous voyons → je voyais', en: 'we see → I used to see' },
    { fr: 'nous croyons → je croyais', en: 'we believe → I used to believe' },
    { fr: 'nous disons → je disais', en: 'we say → I used to say' },
    { fr: 'nous écrivons → j’écrivais', en: 'we write → I used to write' },
    { fr: 'nous lisons → je lisais', en: 'we read → I used to read' },
    { fr: 'nous venons → je venais', en: 'we come → I used to come' },
    { fr: 'nous devons → je devais', en: 'we must → I had to' },
    { fr: 'nous pouvons → je pouvais', en: 'we can → I could' },
    { fr: 'nous voulons → je voulais', en: 'we want → I wanted' },
    { fr: 'nous savons → je savais', en: 'we know → I knew' },
    { fr: 'nous avons → j’avais', en: 'we have → I had' },
    { fr: 'nous allons → j’allais', en: 'we go → I used to go' },
    { fr: 'nous mettons → je mettais', en: 'we put → I used to put' },
    { fr: 'nous connaissons → je connaissais', en: 'we know → I knew' },
    { fr: 'nous sortons → je sortais', en: 'we go out → I used to go out' },
    { fr: 'nous dormons → je dormais', en: 'we sleep → I used to sleep' },
    { fr: 'nous vivons → je vivais', en: 'we live → I used to live' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['irreg'],
};

/** BUILD. Five families, present row then imparfait rows, a gate each.
 *  Gate indices 0, 1, 0, 0, 2: never three in a row. */
const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis les irréguliers',
  frSub: 'Cinq familles',
  sheetId: 'sheet-irreg',
  groups: [
    grp('faire, prendre, venir', [
      it('fr.a2.verbes.304', 'fais-'), it(E(1446)), it('fr.a2.verbes.427', 'pren-'), it(E(440)), it(E(1469)), it('fr.a2.verbes.270', 'ven-'), it(E(430)), it(E(447)),
    ], chk('nous revenons. Avec je : EN: With je:', ['je revienais', 'je revenais', 'je reviendais'], 1, 'reven- + ais, un seul n. EN: one n, no d.')),
    grp('boire, voir, croire', [
      it(E(459), 'buv-'), it(E(1409)), it(E(1468)), it(E(460), 'voy-'), it(E(1410)), it(E(461), 'croy-'), it(E(1412)),
    ], chk('nous buvons. Avec ils : EN: With ils:', ['ils boivaient', 'ils buvait', 'ils buvaient'], 2, 'buv- + aient. EN: buv- plus -aient.')),
    grp('dire, écrire, lire, mettre', [
      it('fr.a2.verbes.310', 'dis-'), it(E(1414)), it(E(458)), it(E(462), 'écriv-'), it(E(1415)), it(E(1467)), it('fr.a2.verbes.316', 'lis-'), it(E(1435)), it('fr.a2.verbes.433', 'mett-'), it(E(435)),
    ], chk('nous écrivons. Avec nous : EN: With nous:', ['nous écrivions', 'nous écrions', 'nous écrivons'], 0, 'écriv- + ions. La troisième est le présent. EN: the third is the present.')),
    grp('devoir, pouvoir, vouloir, savoir, connaître', [
      it('fr.a2.verbes.356', 'dev-'), it(E(431)), it(E(448)), it('fr.a2.verbes.350', 'pouv-'), it(E(443)), it('fr.a2.verbes.344', 'voul-'), it(E(450)), it('fr.a2.verbes.384', 'sav-'), it(E(434)), it('fr.a2.verbes.390', 'connaiss-'), it(E(436)),
    ], chk('nous connaissons. Avec tu : EN: With tu:', ['tu connaissais', 'tu connais', 'tu connaîtais'], 0, 'connaiss- + ais. tu connais, c’est le présent. EN: tu connais is the present.')),
    grp('aller, avoir, sortir, dormir, vivre', [
      it('fr.a2.verbes.264', 'all-'), it(E(1433)), it(E(1437)), it('fr.a2.verbes.481', 'sort-'), it(E(437)), it(E(454)), it(E(463), 'dorm-'), it(E(438)), it(E(464), 'viv-'), it(E(439)), it(E(456)), it(E(1419)),
    ], chk('nous allons. Avec vous : EN: With vous:', ['vous iriez', 'vous alliez', 'vous allez'], 1, 'all- + iez. vous allez, c’est le présent. EN: all- plus -iez.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['irreg', 'base'],
};

/** CHOOSE: Bernard answers his granddaughter. Which verb, and when. */
const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Bernard et sa petite-fille',
  frSub: 'Quel verbe ? Quand ?',
  lines: [
    { fr: 'Quand je vivais à Lausanne, je connaissais tout le monde.', en: 'When I lived in Lausanne, I knew everyone.' },
    { fr: 'Nous sortions le samedi soir, au bord du lac.', en: 'We went out on Saturday nights, by the lake.' },
    { fr: 'Je devais rentrer avant minuit.', en: 'I had to be home before midnight.' },
    { fr: "Mon père voulait savoir où j'allais.", en: 'My father wanted to know where I was going.' },
    { fr: "Aujourd'hui, je vis à Genève, et je sors beaucoup moins.", en: 'Today I live in Geneva, and I go out much less.' },
    { fr: 'Avant, je buvais du café toute la journée.', en: 'Before, I drank coffee all day long.' },
    { fr: 'Maintenant, je bois du thé.', en: 'Now I drink tea.' },
    { fr: 'Et toi, tu savais nager à dix ans ?', en: 'And you, could you swim at ten?' },
  ],
  questions: [
    { q: 'Ligne 1 : vivais vient de quel verbe ? EN: Which verb is vivais from?', opts: ['voir', 'venir', 'vivre'], correct: 2, why: 'nous vivons, donc viv-. EN: from nous vivons.' },
    { q: 'Ligne 5 : Bernard parle d’avant ou de maintenant ? EN: Line 5: before or now?', opts: ['d’avant', 'de maintenant'], correct: 1, why: 'je vis, je sors : présent. EN: present tense.' },
    { q: 'Lignes 6 et 7 : laquelle est au présent ? EN: Which one is present?', opts: ['la 7', 'la 6'], correct: 0, why: 'je bois : présent. je buvais : imparfait. EN: bois is present.' },
    { q: 'Ligne 4 : qui voulait savoir ? EN: Who wanted to know?', opts: ['son père', 'Bernard', 'sa petite-fille'], correct: 0, why: 'Mon père voulait. EN: his father.' },
  ],
  audio: REC('rec-b1-01-bernard-ecoute'),
  say: 'Écoute Bernard. Quel verbe, et quand ?',
  terms: ['irreg'],
};

const A4_PIEGES: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-pieges',
  layer: 'core',
  swipe: true,
  title: 'Les pièges des irréguliers',
  frSub: 'je bois, donc je boivais ?',
  rule: {
    title: 'Pas de je, pas d’infinitif : nous',
    body: 'Le piège, c’est de partir de je bois ou de prendre. Pars de nous buvons, nous prenons. EN: do not build from je or the infinitive; build from nous.',
  },
  cards: [
    { promptLabel: 'boire, je', promptSound: 'je boivais', fr: 'je buvais', ipa: '/ʒə by.vɛ/', tip: 'nous buvons : buv-. EN: from buvons, not bois.' },
    { promptLabel: 'prendre, je', promptSound: 'je prendais', fr: 'je prenais', ipa: '/ʒə pʁə.nɛ/', tip: 'nous prenons : pren-, sans d. EN: no d.' },
    { promptLabel: 'faire, je', promptSound: 'je fesais', fr: 'je faisais', ipa: '/ʒə fə.zɛ/', tip: 'On dit [fə], on écrit ai. EN: said [fə], spelled ai.' },
    { promptLabel: 'venir, nous', promptSound: 'nous viennions', fr: 'nous venions', ipa: '/nu və.njɔ̃/', tip: 'nous venons : ven-, un seul n. EN: one n.' },
    { promptLabel: 'écrire, il', promptSound: 'il écrisait', fr: 'il écrivait', ipa: '/i.le.kʁi.vɛ/', tip: 'nous écrivons : écriv-. EN: the v comes from écrivons.' },
    { promptLabel: 'connaître, je', promptSound: 'je connaîtais', fr: 'je connaissais', ipa: '/ʒə kɔ.nɛ.sɛ/', tip: 'nous connaissons : connaiss-. EN: from connaissons.' },
    { promptLabel: 'savoir, ils', promptSound: 'ils sachaient', fr: 'ils savaient', ipa: '/il sa.vɛ/', tip: 'nous savons : sav-. EN: sav-, not sach-.' },
  ],
  drill: [
    { promptSay: 'nous buvons → je ...', opts: ['boivais', 'buvais'], correct: 1 },
    { promptSay: 'nous prenons → tu ...', opts: ['prenais', 'prendais'], correct: 0 },
    { promptSay: 'nous faisons → il ...', opts: ['fesait', 'faisait'], correct: 1 },
    { promptSay: 'nous venons → nous ...', opts: ['venions', 'viennions'], correct: 0 },
    { promptSay: 'nous écrivons → elle ...', opts: ['écrisait', 'écrivait'], correct: 1 },
    { promptSay: 'nous voulons → je ...', opts: ['voulais', 'veulais'], correct: 0 },
    { promptSay: 'nous savons → ils ...', opts: ['sachaient', 'savaient'], correct: 1 },
    { promptSay: 'nous dormons → tu ...', opts: ['dormais', 'dorsais'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Pars de nous' },
    { label: 'Sept pièges', kind: 'cards', title: 'Le faux, puis le vrai' },
    { label: 'Écoute', kind: 'audio', title: 'Les bonnes formes' },
    { label: 'À toi', kind: 'drill', title: 'Huit de suite', gate: true },
  ],
  audio: REC('rec-b1-01-pieges-irreg'),
  say: REFRAME,
  terms: ['irreg'],
};

/** RECALL in the production direction: infinitive + person -> form. */
const A4_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a4-flash',
  layer: 'core',
  title: 'Fabrique la forme',
  frSub: 'Le verbe, la personne, puis la forme',
  sheetId: 'sheet-irreg',
  cards: [
    { front: 'faire · je', back: 'je faisais', say: 'je faisais' },
    { front: 'prendre · nous', back: 'nous prenions', say: 'nous prenions' },
    { front: 'boire · je', back: 'je buvais', say: 'je buvais' },
    { front: 'voir · je', back: 'je voyais', say: 'je voyais' },
    { front: 'dire · je', back: 'je disais', say: 'je disais' },
    { front: 'écrire · je', back: 'j’écrivais', say: 'j’écrivais' },
    { front: 'venir · ils', back: 'ils venaient', say: 'ils venaient' },
    { front: 'pouvoir · nous', back: 'nous pouvions', say: 'nous pouvions' },
    { front: 'vouloir · vous', back: 'vous vouliez', say: 'vous vouliez' },
    { front: 'savoir · ils', back: 'ils savaient', say: 'ils savaient' },
    { front: 'connaître · je', back: 'je connaissais', say: 'je connaissais' },
    { front: 'aller · vous', back: 'vous alliez', say: 'vous alliez' },
  ],
  audio: AUDIO,
  say: 'Lis le verbe et la personne. Dis la forme, puis retourne la carte.',
  terms: ['irreg'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('vivre', 'vivre, avec nous : EN: vivre, with nous:', ['nous vivrions', 'nous vivions', 'nous vivons'], 1, 'viv- + ions. EN: viv- plus -ions.'),
  ctl('croire', 'croire, avec je : EN: croire, with je:', ['je croiais', 'je croirais', 'je croyais'], 2, 'nous croyons : croy-. EN: from croyons.'),
  ctl('l’exception', 'Quel verbe ne suit pas la recette ? EN: Which verb does not follow the recipe?', ['être', 'avoir', 'aller'], 0, 'être : nous sommes n’a pas de -ons. L’acte 5 en parle. EN: être, next act.'),
], ['irreg']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Irréguliers au présent, réguliers ici',
    opener: { line: 'Faire, prendre, boire, vouloir : les verbes les plus difficiles du présent deviennent les plus simples à l’imparfait. EN: The hardest verbs in the present become the easiest in the imparfait.', imageRef: 'lessons/imparfait/act04.jpg' },
    sections: [],
    milestone: 'Vingt verbes irréguliers au présent, et tous réguliers à l’imparfait. EN: Twenty verbs irregular in the present, all regular here.',
    estScreens: 47, restPoints: ['a4-exemples', 'a4-ecoute'],
  },
  sections: [A4_LECTURE, A4_IDEE, A4_TABLEAU, A4_EXEMPLES, A4_CONSTRUIRE, A4_ECOUTE, A4_PIEGES, A4_FLASH, A4_CHECK],
  imports: [...IMPORTED.presentIrregular, 'fr.a1.deplacements.009', 'fr.a1.ecole.008', 'fr.a2.animaux.010', 'fr.b1.cafe.079'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — ÊTRE, LA SEULE EXCEPTION
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Julien's 1994 class photo: être at every person, and c'était. */
const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'La photo de classe',
  frSub: 'Rosemont, 1994',
  setting: 'Le lendemain, Julien apporte sa photo de classe. Awa la regarde avec lui. EN: The next day, Julien brings his class photo.',
  bubbles: [
    { from: 'coach', fr: 'Là, au premier rang, c’est moi. J’étais petit et très timide.', en: 'There, in the front row, that’s me. I was small and very shy.' },
    { from: 'user', fr: 'Et la dame à côté, c’était ta maîtresse.', en: 'And the lady next to you was your teacher.' },
    { from: 'coach', fr: 'Oui, madame Tremblay. Elle était sévère, mais nous étions contents avec elle.', en: 'Yes, Mrs Tremblay. She was strict, but we were happy with her.' },
    { from: 'user', fr: 'Dis-moi combien vous étiez dans la classe.', en: 'Tell me how many of you there were in the class.' },
    { from: 'coach', fr: 'Nous étions vingt-huit. Mes parents étaient fiers de cette école.', en: 'There were twenty-eight of us. My parents were proud of that school.' },
    { from: 'user', fr: 'Et toi, tu étais toujours en retard, je parie.', en: 'And you were always late, I bet.' },
    { from: 'coach', fr: 'Toujours. Il y avait un grand escalier, et j’étais toujours le dernier.', en: 'Always. There was a big staircase, and I was always the last one.' },
  ],
  closing: { fr: 'étais, était, étions, étiez, étaient : une base qui ne vient pas de nous sommes.', en: 'A stem that does not come from nous sommes.' },
  audio: REC('rec-b1-01-classe'),
  say: 'Regarde la photo de classe avec Awa et Julien.',
  terms: ['etre'],
};

const A5_ETRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-etre',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Un seul verbe différent',
  frSub: 'être : ét-',
  hint: 'Cinq cartes. La première est la seule vraie exception de la leçon. EN: Five cards; the first is the lesson’s only real exception.',
  audio: REC('rec-b1-01-etre'),
  say: 'être est le seul verbe à part. Sa base est ét-.',
  terms: ['etre', 'fins'],
  cards: [
    { head: 'pas de -ons à couper', label: 'nous sommes', fr: "nous sommes · j'étais", sub: '[noo SOM] · [zhay-TEH]', body: 'nous sommes ne finit pas par -ons. Alors être prend sa propre base : ét-. C’est le seul verbe comme ça. EN: être is the only verb whose stem is not its nous form.' },
    { head: 'les fins ne changent pas', label: 'ét- + la fin normale', fr: "j'étais · tu étais · il était", sub: '[zhay-TEH] · [tü ay-TEH] · [ee-lay-TEH]', body: 'Seule la base est spéciale. Les fins sont les six fins habituelles. EN: only the stem is special.' },
    { head: 'au pluriel', label: 'on entend le z', fr: 'nous étions · vous étiez · ils étaient', sub: '[noo zay-TYOHⁿ] · [voo zay-TYAY] · [eel zay-TEH]', body: 'Devant é, le s de nous, vous, ils se prononce [z]. EN: liaison: the s is said [z] before é.' },
    { head: 'c’était', label: 'la forme la plus fréquente', fr: "c'était", sub: '[say-TEH]', body: 'ce + était = c’était. Tu vas l’entendre partout : c’était beau, c’était loin. EN: ce plus était, the most common imparfait form in French.' },
    { head: 'é, pas ê', label: 'un accent aigu', fr: 'être → étais', sub: '[ay-TEH]', body: 'L’infinitif a un ê. L’imparfait a un é : j’étais, jamais j’êtais. EN: acute é in the imparfait, not the circumflex.' },
  ],
};

/** être in all six persons, tap to hear. The liaison z is the point. */
const A5_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-tableau',
  layer: 'core',
  title: 'être, les six formes',
  frSub: 'Touche pour écouter le z',
  sheetId: 'sheet-recette',
  cols: ['Qui', 'être'],
  rows: [
    { cells: ['je', "j'étais"], say: "j'étais", detail: { title: 'je', body: 'j’ devant la voyelle. EN: elision before the vowel.', say: "J'étais très timide à l'école." } },
    { cells: ['tu', 'tu étais'], say: 'tu étais', detail: { title: 'tu', body: 'Même son que j’étais. EN: same sound as j’étais.', say: 'Tu étais toujours en retard.' } },
    { cells: ['il, elle, on', 'il était'], say: 'il était', detail: { title: 'il, elle, on', body: 'c’était vient d’ici. EN: c’était comes from this form.', say: "C'était la maison de ma grand-mère." } },
    { cells: ['nous', 'nous étions'], say: 'nous étions', detail: { title: 'nous', body: 'On entend le z. EN: the liaison z is audible.', say: 'Nous étions six à la maison.' } },
    { cells: ['vous', 'vous étiez'], say: 'vous étiez', detail: { title: 'vous', body: 'Encore le z, puis [je]. EN: liaison z, then [je].', say: 'Vous étiez voisins à Rosemont.' } },
    { cells: ['ils, elles', 'ils étaient'], say: 'ils étaient', detail: { title: 'ils, elles', body: 'Le z s’entend, la fin -aient non. EN: the z is heard, -aient is not.', say: 'Mes parents étaient contents.' } },
  ],
  audio: AUDIO,
  say: 'Touche chaque ligne. Écoute le z devant é.',
  terms: ['etre'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis être',
  frSub: 'ét- + la fin',
  groups: [
    grp('je, tu, il, elle', [it(E(1416)), it(E(465)), it(E(466)), it(E(468)), it(E(469)), it(E(473))],
      chk('Ma maîtresse ... sévère. EN: My teacher was strict.', ['étais', 'était', 'étaient'], 1, 'Une personne, elle : -ait. EN: one person, -ait.')),
    grp('nous, vous, ils', [it(E(1417)), it(E(467)), it(E(1418)), it(E(1466)), it(E(471)), it(E(472))],
      chk('Mes parents ... fiers. EN: My parents were proud.', ['était', 'étiez', 'étaient'], 2, 'Mes parents = ils : -aient. EN: plural, -aient.')),
    grp('c’était', [it('fr.sons.elision.035'), it(E(470)), it(E(1460))],
      chk('« ... un petit village. » EN: It was a small village.', ['C’était', 'Ce était', 'C’étais'], 0, 'ce devient c’ devant é, et ce prend -ait. EN: c’ before é, and -ait.')),
  ],
  audio: AUDIO,
  say: 'ét-, puis la fin de la personne.',
  terms: ['etre'],
};

/** CHOOSE. Awa's school in Dakar, then and now. */
const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'L’école d’Awa',
  frSub: 'Avant, maintenant',
  lines: [
    { fr: 'Mon école, à Dakar, était tout près de la mer.', en: 'My school in Dakar was right by the sea.' },
    { fr: "C'était une vieille école, avec des murs jaunes.", en: 'It was an old school with yellow walls.' },
    { fr: 'Nous étions quarante dans la classe.', en: 'There were forty of us in the class.' },
    { fr: 'Le maître était jeune et il riait beaucoup.', en: 'The teacher was young and laughed a lot.' },
    { fr: 'Mes amies Fatou et Khady étaient toujours à côté de moi.', en: 'My friends Fatou and Khady were always next to me.' },
    { fr: 'Et vous, à Rosemont, vous étiez combien ?', en: 'And you, in Rosemont, how many of you were there?' },
    { fr: "Aujourd'hui, l'école est fermée.", en: 'Today the school is closed.' },
    { fr: 'Mais la mer est toujours là.', en: 'But the sea is still there.' },
  ],
  questions: [
    { q: 'Ligne 3 : combien d’élèves ? EN: How many pupils?', opts: ['quatorze', 'quarante', 'vingt-huit'], correct: 1, why: 'Nous étions quarante. EN: forty.' },
    { q: 'Ligne 7 : l’école existe encore aujourd’hui ? EN: Does the school still run today?', opts: ['oui', 'non'], correct: 1, why: 'est fermée : présent, aujourd’hui. EN: it is closed now.' },
    { q: 'Ligne 5 : pourquoi étaient ? EN: Why étaient?', opts: ['c’est vous', 'c’est la mer', 'Fatou et Khady, c’est ils'], correct: 2, why: 'Deux personnes, donc -aient. EN: plural subject.' },
    { q: 'Lignes 2 et 8 : laquelle parle d’avant ? EN: Which one is about the past?', opts: ['la 2', 'la 8'], correct: 0, why: 'c’était : imparfait. est : présent. EN: c’était is the imparfait.' },
  ],
  audio: REC('rec-b1-01-ecole-awa'),
  say: 'Écoute Awa. Avant, ou maintenant ?',
  terms: ['etre'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Les erreurs avec être',
  errors: [
    { wrong: 'Je sommais timide.', right: 'J’étais timide.', why: 'Logique : tu as appliqué la recette. Mais être est l’exception : ét-. EN: être is the one exception.' },
    { wrong: 'Je étais petit.', right: 'J’étais petit.', why: 'je devient j’ devant une voyelle. EN: je elides before a vowel.' },
    { wrong: 'Nous étaient contents.', right: 'Nous étions contents.', why: 'nous prend -ions, même avec être. EN: nous always takes -ions.' },
    { wrong: 'Ce était une belle maison.', right: 'C’était une belle maison.', why: 'ce devient c’ devant é. EN: ce elides to c’.' },
    { wrong: 'Il été malade.', right: 'Il était malade.', why: 'été est le participe passé (j’ai été). Sans avoir devant, c’est était. EN: été is the past participle.' },
    { wrong: 'Nous êtions six.', right: 'Nous étions six.', why: 'L’infinitif a un ê, l’imparfait un é. EN: acute é, not ê.' },
  ],
  audio: AUDIO,
  say: 'Six erreurs avec être.',
  terms: ['etre'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('vous', 'être, avec vous : EN: être, with vous:', ['vous étiez', 'vous êtes', 'vous étaient'], 0, 'ét- + iez. vous êtes, c’est le présent. EN: vous êtes is the present.'),
  ctl('la base', 'La base de être à l’imparfait : EN: The imparfait stem of être:', ['somm-', 'ét-', 'êt-'], 1, 'ét-, avec un accent aigu. EN: ét-, acute accent.'),
  ctl('la phrase', '« ... petite, j’habitais à Dakar. » EN: When I was little...', ['Quand je suis', 'Quand je étais', 'Quand j’étais'], 2, 'j’étais : imparfait et élision. EN: imparfait with elision.'),
], ['etre']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Être, la seule exception',
    opener: { line: 'Un seul verbe refuse la recette. Tu apprends ici le seul cas qu’il faut vraiment retenir par cœur. EN: Only one verb refuses the recipe; this act is the single case worth memorising.', imageRef: 'lessons/imparfait/act05.jpg' },
    sections: [],
    milestone: 'Tu connais la seule exception de l’imparfait : ét-. EN: You know the one exception, ét-.',
    estScreens: 29, restPoints: ['a5-construire'],
  },
  sections: [A5_HISTOIRE, A5_ETRE, A5_TABLEAU, A5_CONSTRUIRE, A5_ECOUTE, A5_ERREURS, A5_CHECK],
  imports: ['fr.sons.elision.035', 'fr.a2.corps.017'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — -GER
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Nadia's summers on Lake Geneva: six -ger verbs, with and without e. */
const A6_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Les étés au bord du lac',
  frSub: 'Nadia, Lausanne',
  text: "Chaque été, nous partions chez mes grands-parents, au bord du lac Léman. Mon grand-père voyageait beaucoup pour son travail, mais en juillet, il restait avec nous. Le matin, nous nagions dans le lac. L'eau était froide, alors je nageais vite. À midi, nous mangions sur la terrasse. Ma grand-mère changeait le menu tous les jours, mais le dessert, lui, ne changeait pas : une tarte aux abricots. Mon petit frère bougeait tout le temps et il mangeait debout. Nous partagions une chambre sous le toit, et le soir, nous rangions nos affaires avant de dormir.",
  glossary: [
    { word: 'lac Léman', en: 'Lake Geneva', note: 'Le grand lac entre la Suisse et la France. EN: between Switzerland and France.' },
    { word: 'la terrasse', en: 'the terrace', note: 'Un espace dehors, à côté de la maison. EN: an outdoor space by the house.' },
    { word: 'abricots', en: 'apricots', note: 'Un fruit orange de l’été. EN: an orange summer fruit.' },
    { word: 'debout', en: 'standing up', note: 'Pas assis. EN: not sitting.' },
    { word: 'sous le toit', en: 'under the roof', note: 'En haut de la maison. EN: in the attic room.' },
  ],
  questions: [
    { q: 'Trouve trois verbes en -ger avec un e avant la fin. EN: Find three -ger verbs with an e before the ending.', a: 'voyageait, nageais, changeait, bougeait, mangeait. Tous finissent par -ait ou -ais. EN: all before a.' },
    { q: 'Trouve trois verbes en -ger sans e. EN: Find three -ger verbs without an e.', a: 'nagions, mangions, partagions, rangions. Tous avec nous : -ions. EN: all before i.' },
    { q: 'Qu’est-ce qui ne changeait jamais ? EN: What never changed?', a: 'Le dessert : une tarte aux abricots. EN: the dessert.' },
  ],
  audio: REC('rec-b1-01-nadia'),
  say: 'Lis le souvenir de Nadia. Regarde le e après le g.',
  terms: ['ger'],
};

/** NAME. a2.09's REFRAME quoted verbatim on card 1. */
const A6_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Un e pour garder [ʒ]',
  frSub: 'manger, nager, voyager...',
  sheetId: 'sheet-ortho',
  hint: 'Cinq cartes. Regarde la lettre après le g. EN: Five cards; look at the letter after the g.',
  audio: REC('rec-b1-01-ger'),
  say: 'Devant a, un e. Devant i, rien.',
  terms: ['ger', 'fins'],
  cards: [
    { head: 'la règle', label: Cap(ER_EXC_REF), fr: 'nous mangeons', sub: '[noo mahⁿ-ZHOHⁿ]', body: `${Cap(ER_EXC_REF)} disait : « ${A209_REFRAME} » ga se lit [ɡa]. Pour garder [ʒ] devant a, on ajoute e. EN: an e keeps g soft before a.` },
    { head: 'devant a : e', label: 'je, tu, il, ils', fr: 'je mangeais · il mangeait · ils mangeaient', sub: '[mahⁿ-ZHEH] x 3', body: 'Les fins -ais, -ait, -aient commencent par a. Donc : un e. EN: these endings start with a, so add e.' },
    { head: 'devant i : rien', label: 'nous, vous', fr: 'nous mangions · vous mangiez', sub: '[noo mahⁿ-ZHYOHⁿ] · [voo mahⁿ-ZHYAY]', body: 'gi se lit déjà [ʒi]. Le e ne sert à rien. EN: gi is already soft; no e.' },
    { head: 'le contraire du présent', label: 'où est le e ?', fr: 'nous mangeons · nous mangions', sub: '[noo mahⁿ-ZHOHⁿ] · [noo mahⁿ-ZHYOHⁿ]', body: 'Au présent, seul nous a un e. À l’imparfait, c’est l’inverse : tous sauf nous et vous. EN: the opposite of the present.' },
    { head: 'la famille', label: 'même règle', fr: 'nager · voyager · partager · changer · bouger · ranger', sub: '[nah-ZHAY] · [vwah-yah-ZHAY] · [par-tah-ZHAY]', body: 'Tous les verbes en -ger suivent la même règle. EN: every -ger verb works the same way.' },
  ],
};

/** manger in six persons, with the e column: where the letter is, and is not. */
const A6_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-tableau',
  layer: 'core',
  title: 'manger, où est le e',
  frSub: 'Touche pour écouter',
  cols: ['Qui', 'manger', 'e ?'],
  rows: [
    { cells: ['je', 'je mangeais', 'oui'], say: 'je mangeais', detail: { title: 'je', body: '-ais commence par a : e. EN: e before a.', say: 'Je mangeais à midi.' } },
    { cells: ['tu', 'tu mangeais', 'oui'], say: 'tu mangeais', detail: { title: 'tu', body: 'Même chose qu’avec je. EN: same as je.', say: 'Tu mangeais trop vite.' } },
    { cells: ['il, elle, on', 'il mangeait', 'oui'], say: 'il mangeait', detail: { title: 'il, elle, on', body: '-ait commence par a : e. EN: e before a.', say: 'Mon petit frère mangeait debout.' } },
    { cells: ['nous', 'nous mangions', 'non'], say: 'nous mangions', detail: { title: 'nous', body: '-ions commence par i : rien. EN: nothing before i.', say: 'Nous mangions ici.' } },
    { cells: ['vous', 'vous mangiez', 'non'], say: 'vous mangiez', detail: { title: 'vous', body: '-iez commence par i : rien. EN: nothing before i.', say: 'Vous mangiez ensemble.' } },
    { cells: ['ils, elles', 'ils mangeaient', 'oui'], say: 'ils mangeaient', detail: { title: 'ils, elles', body: '-aient commence par a : e. EN: e before a.', say: 'Ils mangeaient dans la cour.' } },
  ],
  audio: AUDIO,
  say: 'Quatre formes avec e, deux sans. Le son ne change jamais.',
  terms: ['ger'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Avec e, sans e',
  frSub: 'Regarde la fin',
  groups: [
    grp('Devant a : avec e', [
      it(E(1420)), it(E(475)), it(E(476)), it(E(1422)), it(E(1438)), it(E(479)), it(E(480)), it(E(484)), it(E(486)), it(E(487)),
    ], chk('changer, avec il : EN: changer, with il:', ['il changeait', 'il changait', 'il changiait'], 0, '-ait commence par a : e. EN: e before a.')),
    grp('Devant i : sans e', [
      it('fr.a2.verbes.142', 'présent : e'), it(E(1421)), it(E(1443)), it(E(474)), it(E(483)), it('fr.a2.verbes.146', 'présent : e'), it(E(477)), it('fr.a2.verbes.161', 'présent : e'), it(E(478)), it(E(485)), it('fr.a2.verbes.166', 'présent : e'), it(E(482)), it(E(481)),
    ], chk('partager, avec nous : EN: partager, with nous:', ['nous partagions', 'nous partageions', 'nous partageons'], 0, '-ions commence par i : pas de e. La troisième est le présent. EN: no e before i.')),
    ctl('Et vous ?', 'ranger, avec vous : EN: ranger, with vous:', ['vous rangeiez', 'vous rangiez', 'vous rangez'], 1, '-iez commence par i : pas de e. EN: no e before i.'),
  ],
  audio: AUDIO,
  say: 'Regarde la première lettre de la fin.',
  terms: ['ger'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le message de Nadia',
  frSub: 'Avant, maintenant',
  lines: [
    { fr: "Salut Awa, c'est Nadia. Tu te souviens de mes étés à Lausanne ?", en: 'Hi Awa, it’s Nadia. Remember my summers in Lausanne?' },
    { fr: 'Nous nagions dans le lac tous les matins.', en: 'We swam in the lake every morning.' },
    { fr: 'Mon grand-père voyageait beaucoup, mais pas en juillet.', en: 'My grandfather travelled a lot, but not in July.' },
    { fr: "Maintenant, je nage à la piscine, c'est moins beau.", en: 'Now I swim at the pool; it’s less lovely.' },
    { fr: 'Ma grand-mère changeait le menu tous les jours.', en: 'My grandmother changed the menu every day.' },
    { fr: 'Mes cousins et moi, nous partagions une petite chambre.', en: 'My cousins and I shared a little room.' },
    { fr: "Aujourd'hui, mes cousins voyagent partout en Europe.", en: 'Today my cousins travel all over Europe.' },
    { fr: 'Et toi, tu voyageais beaucoup quand tu étais petite ?', en: 'And you, did you travel a lot when you were little?' },
  ],
  questions: [
    { q: 'Ligne 4 : avant ou maintenant ? EN: Line 4: before or now?', opts: ['avant', 'maintenant'], correct: 1, why: 'je nage : présent. EN: present tense.' },
    { q: 'Qui voyageait beaucoup ? EN: Who used to travel a lot?', opts: ['les cousins', 'Nadia', 'le grand-père'], correct: 2, why: 'Mon grand-père voyageait. Les cousins voyagent aujourd’hui. EN: the grandfather, then.' },
    { q: 'Ligne 7 : voyagent, c’est quel temps ? EN: Line 7: which tense?', opts: ['le présent', 'l’imparfait'], correct: 0, why: 'Aujourd’hui, voyagent : présent. EN: present.' },
    { q: 'Dans nagions, tu entends un e après le g ? EN: Do you hear an e after the g?', opts: ['oui', 'non'], correct: 1, why: 'Non. Le e de mangeais ne se dit pas non plus : il sert à l’écrit. EN: the e is silent anyway; it is a spelling device.' },
  ],
  audio: REC('rec-b1-01-nadia-message'),
  say: 'Écoute Nadia.',
  terms: ['ger'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Le piège du e',
  frSub: 'Trop de e, ou pas assez',
  rule: {
    title: 'Devant a : e. Devant i : rien.',
    body: 'Regarde la première lettre de la fin : a, donc e ; i, donc rien. Le son ne change jamais. EN: first letter of the ending: a means e, i means nothing.',
  },
  cards: [
    { promptLabel: 'manger, je', promptSound: 'je mangais', fr: 'je mangeais', ipa: '/ʒə mɑ̃.ʒɛ/', tip: 'Sans e, ga se lit [ɡa]. EN: without e it reads [ɡa].' },
    { promptLabel: 'manger, nous', promptSound: 'nous mangeions', fr: 'nous mangions', ipa: '/nu mɑ̃.ʒjɔ̃/', tip: 'Devant i, g fait déjà [ʒ]. EN: g is already soft before i.' },
    { promptLabel: 'voyager, ils', promptSound: 'ils voyagaient', fr: 'ils voyageaient', ipa: '/il vwa.ja.ʒɛ/', tip: '-aient commence par a : e. EN: -aient starts with a.' },
    { promptLabel: 'partager, vous', promptSound: 'vous partageiez', fr: 'vous partagiez', ipa: '/vu paʁ.ta.ʒje/', tip: '-iez commence par i : pas de e. EN: -iez starts with i.' },
    { promptLabel: 'changer, il', promptSound: 'il changait', fr: 'il changeait', ipa: '/il ʃɑ̃.ʒɛ/', tip: '-ait commence par a : e. EN: e before a.' },
    { promptLabel: 'bouger, elle', promptSound: 'elle bougait', fr: 'elle bougeait', ipa: '/ɛl bu.ʒɛ/', tip: 'Même règle pour tous les -ger. EN: same for every -ger verb.' },
  ],
  drill: [
    { promptSay: 'je nag...ais', opts: ['nageais', 'nagais'], correct: 0 },
    { promptSay: 'nous nag...ions', opts: ['nageions', 'nagions'], correct: 1 },
    { promptSay: 'ils rang...aient', opts: ['rangeaient', 'rangaient'], correct: 0 },
    { promptSay: 'vous mang...iez', opts: ['mangeiez', 'mangiez'], correct: 1 },
    { promptSay: 'tu partag...ais', opts: ['partageais', 'partagais'], correct: 0 },
    { promptSay: 'nous chang...ions', opts: ['changeions', 'changions'], correct: 1 },
    { promptSay: 'il boug...ait', opts: ['bougeait', 'bougait'], correct: 0 },
    { promptSay: 'nous voyag...ions', opts: ['voyageions', 'voyagions'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Devant a, devant i' },
    { label: 'Six formes', kind: 'cards', title: 'Le faux, puis le vrai' },
    { label: 'Écoute', kind: 'audio', title: 'Le son ne change jamais' },
    { label: 'À toi', kind: 'drill', title: 'Huit de suite', gate: true },
  ],
  audio: REC('rec-b1-01-piege-ger'),
  say: 'Devant a, un e. Devant i, rien.',
  terms: ['ger'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('nager', 'nager, avec tu : EN: nager, with tu:', ['tu nageais', 'tu nagais', 'tu nagiais'], 0, '-ais commence par a : e. EN: e before a.'),
  ctl('bouger', 'bouger, avec nous : EN: bouger, with nous:', ['nous bougeions', 'nous bougions', 'nous bougeons'], 1, 'Devant i, pas de e. EN: no e before i.'),
  ctl('combien ?', 'manger à l’imparfait : combien de formes ont un e ? EN: How many forms have an e?', ['deux', 'six', 'quatre'], 2, 'je, tu, il, ils : quatre. nous et vous : sans e. EN: four with e, two without.'),
], ['ger']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: '-ger',
    opener: { line: 'Manger garde un e devant a et le perd devant i : une petite lettre, et beaucoup de fautes évitées. EN: manger keeps an e before a and drops it before i: one small letter, many errors avoided.', imageRef: 'lessons/imparfait/act06.jpg' },
    sections: [],
    milestone: 'mangeais avec e, mangions sans e : tu sais pourquoi. EN: You know why mangeais has an e and mangions does not.',
    estScreens: 31, restPoints: ['a6-regle', 'a6-ecoute'],
  },
  sections: [A6_LECTURE, A6_REGLE, A6_TABLEAU, A6_CONSTRUIRE, A6_ECOUTE, A6_PIEGE, A6_CHECK],
  imports: ['fr.a2.verbes.142', 'fr.a2.verbes.146', 'fr.a2.verbes.161', 'fr.a2.verbes.166', 'fr.a1.cuisine.005'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — -CER
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Koffi tells his son Yao about school in Abidjan. No « ? » in bubbles. */
const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'L’école de Koffi',
  frSub: 'Abidjan, années 1990',
  setting: 'Montréal, un dimanche. Koffi raconte son école d’Abidjan à son fils Yao, dix ans. EN: Koffi tells his son about his school in Abidjan.',
  bubbles: [
    { from: 'user', fr: 'Papa, raconte-moi ton école à Abidjan.', en: 'Dad, tell me about your school in Abidjan.' },
    { from: 'coach', fr: 'La journée commençait à sept heures et demie. Nous commencions toujours par une chanson.', en: 'The day started at half past seven. We always started with a song.' },
    { from: 'user', fr: 'Et ta maîtresse, elle était gentille.', en: 'And your teacher was nice.' },
    { from: 'coach', fr: 'Madame Kouassi. Elle plaçait les élèves par deux, et elle annonçait les notes devant tout le monde.', en: 'Mrs Kouassi. She seated us in pairs and announced the marks in front of everyone.' },
    { from: 'user', fr: 'Tu prononçais bien les mots difficiles, toi.', en: 'You pronounced the hard words well.' },
    { from: 'coach', fr: 'Pas toujours. À la récré, nous lancions la balle contre le mur, et nous avancions comme des footballeurs.', en: 'Not always. At break we threw the ball against the wall and moved forward like footballers.' },
  ],
  closing: { fr: 'commençait, plaçait, annonçait : ç. commencions, lancions : c.', en: 'ç before a; plain c before i.' },
  audio: REC('rec-b1-01-koffi'),
  say: 'Écoute Koffi et Yao. Regarde le c et le ç.',
  terms: ['cer'],
};

const A7_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Une cédille pour garder [s]',
  frSub: 'commencer, lancer, placer...',
  sheetId: 'sheet-ortho',
  hint: 'Cinq cartes. Même logique que -ger. EN: Five cards; same logic as -ger.',
  audio: REC('rec-b1-01-cer'),
  say: 'Devant a, une cédille. Devant i, rien.',
  terms: ['cer', 'ger'],
  cards: [
    { head: 'la règle', label: 'ca = [ka]', fr: 'nous commençons', sub: '[noo koh-mahⁿ-SOHⁿ]', body: `${Cap(ER_EXC_REF)} l’a dit : « ${A209_REFRAME} » ca se lit [ka]. Pour garder [s] devant a, on met ç. EN: ç keeps c soft before a.` },
    { head: 'devant a : ç', label: 'je, tu, il, ils', fr: 'je commençais · il lançait · ils plaçaient', sub: '[koh-mahⁿ-SEH] · [lahⁿ-SEH] · [plah-SEH]', body: '-ais, -ait, -aient commencent par a. Donc ç. EN: these endings start with a, so ç.' },
    { head: 'devant i : c', label: 'nous, vous', fr: 'nous commencions · vous commenciez', sub: '[noo koh-mahⁿ-SYOHⁿ] · [voo koh-mahⁿ-SYAY]', body: 'ci se lit déjà [si]. Pas de cédille. EN: ci is already soft; no cedilla.' },
    { head: 'la famille', label: 'même règle', fr: 'lancer · placer · avancer · prononcer · annoncer', sub: '[lahⁿ-SAY] · [plah-SAY] · [ah-vahⁿ-SAY]', body: 'Tous les verbes en -cer suivent la même règle. EN: every -cer verb works the same way.' },
    { head: 'regarde bien', label: 'à l’écrit', fr: 'commençais', sub: '[koh-mahⁿ-SEH]', body: 'Quand tu tapes, l’appli ne vérifie pas la cédille. Alors regarde-la bien ici et dans la dictée. EN: typed answers ignore the cedilla, so watch it here.' },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Avec ç, sans ç',
  frSub: 'Regarde la fin',
  groups: [
    grp('Devant a : ç', [
      it(E(1423)), it(E(1425)), it(E(489)), it(E(490)), it(E(492)), it(E(493)), it(E(1458)), it(E(1471)), it(E(496)), it(E(498)), it(E(499)),
    ], chk('avancer, avec il : EN: avancer, with il:', ['il avançait', 'il avancait', 'il avanceait'], 0, '-ait commence par a : ç. EN: ç before a.')),
    grp('Devant i : c', [
      it('fr.a2.verbes.144', 'présent : ç'), it(E(1424)), it(E(1444)), it(E(494)), it(E(488)), it(E(497)), it(E(491)), it(E(495)),
    ], chk('annoncer, avec nous : EN: annoncer, with nous:', ['nous annonçions', 'nous annoncions', 'nous annonçons'], 1, '-ions commence par i : c. La troisième est le présent. EN: plain c before i.')),
    ctl('Et vous ?', 'placer, avec vous : EN: placer, with vous:', ['vous plaçiez', 'vous placiez', 'vous placez'], 1, '-iez commence par i : c. EN: plain c before i.'),
  ],
  audio: AUDIO,
  say: 'Regarde la première lettre de la fin.',
  terms: ['cer'],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Koffi se souvient',
  frSub: 'Avant, maintenant',
  lines: [
    { fr: "À l'école, la journée commençait à sept heures et demie.", en: 'At school, the day started at half past seven.' },
    { fr: 'Maintenant, les cours de Yao commencent à huit heures.', en: 'Now Yao’s classes start at eight.' },
    { fr: 'Nous commencions toujours par une chanson.', en: 'We always started with a song.' },
    { fr: 'La maîtresse plaçait les élèves par deux.', en: 'The teacher seated the pupils in pairs.' },
    { fr: 'Moi, je prononçais mal les mots anglais.', en: 'I used to mispronounce English words.' },
    { fr: 'À la récré, nous lancions la balle contre le mur.', en: 'At break, we threw the ball against the wall.' },
    { fr: 'Yao, lui, lance la balle au parc avec son chien.', en: 'Yao throws the ball in the park with his dog.' },
    { fr: 'Et vous, au Québec, vous commenciez tôt ?', en: 'And you, in Quebec, did you start early?' },
  ],
  questions: [
    { q: 'Ligne 2 : avant ou maintenant ? EN: Line 2: before or now?', opts: ['maintenant', 'avant'], correct: 0, why: 'commencent : présent. EN: present.' },
    { q: 'Qui plaçait les élèves ? EN: Who seated the pupils?', opts: ['Koffi', 'Yao', 'la maîtresse'], correct: 2, why: 'La maîtresse plaçait. EN: the teacher.' },
    { q: 'Lignes 6 et 7 : laquelle parle d’avant ? EN: Which is about the past?', opts: ['la 7', 'la 6'], correct: 1, why: 'lancions : [jɔ̃], imparfait. EN: you hear [jɔ̃].' },
    { q: 'Dans commençait, tu entends [s] ou [k] ? EN: Do you hear [s] or [k]?', opts: ['[s]', '[k]'], correct: 0, why: '[s]. La cédille garde ce son devant a. EN: the cedilla keeps [s].' },
  ],
  audio: REC('rec-b1-01-koffi-ecoute'),
  say: 'Écoute Koffi.',
  terms: ['cer'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Le piège de la cédille',
  frSub: 'Oubliée, ou en trop',
  rule: {
    title: 'Devant a : ç. Devant i : c.',
    body: 'Même logique que -ger : la première lettre de la fin décide. Le son [s] ne change jamais. EN: same logic as -ger; the ending’s first letter decides.',
  },
  cards: [
    { promptLabel: 'commencer, je', promptSound: 'je commencais', fr: 'je commençais', ipa: '/ʒə kɔ.mɑ̃.sɛ/', tip: 'Sans cédille, ca se lit [ka]. EN: without ç it reads [ka].' },
    { promptLabel: 'commencer, nous', promptSound: 'nous commençions', fr: 'nous commencions', ipa: '/nu kɔ.mɑ̃.sjɔ̃/', tip: 'Devant i, c fait déjà [s]. EN: c is already soft before i.' },
    { promptLabel: 'lancer, ils', promptSound: 'ils lancaient', fr: 'ils lançaient', ipa: '/il lɑ̃.sɛ/', tip: '-aient commence par a : ç. EN: ç before a.' },
    { promptLabel: 'placer, elle', promptSound: 'elle placait', fr: 'elle plaçait', ipa: '/ɛl pla.sɛ/', tip: '-ait commence par a : ç. EN: ç before a.' },
    { promptLabel: 'prononcer, vous', promptSound: 'vous prononçiez', fr: 'vous prononciez', ipa: '/vu pʁɔ.nɔ̃.sje/', tip: '-iez commence par i : c. EN: plain c before i.' },
    { promptLabel: 'annoncer, il', promptSound: 'il annoncait', fr: 'il annonçait', ipa: '/i.la.nɔ̃.sɛ/', tip: 'Même règle pour tous les -cer. EN: same for every -cer verb.' },
  ],
  drill: [
    { promptSay: 'tu commen...ais', opts: ['commencais', 'commençais'], correct: 1 },
    { promptSay: 'nous commen...ions', opts: ['commencions', 'commençions'], correct: 0 },
    { promptSay: 'ils pla...aient', opts: ['placaient', 'plaçaient'], correct: 1 },
    { promptSay: 'vous lan...iez', opts: ['lanciez', 'lançiez'], correct: 0 },
    { promptSay: 'elle avan...ait', opts: ['avancait', 'avançait'], correct: 1 },
    { promptSay: 'nous pronon...ions', opts: ['prononcions', 'prononçions'], correct: 0 },
    { promptSay: 'je lan...ais', opts: ['lancais', 'lançais'], correct: 1 },
    { promptSay: 'nous annon...ions', opts: ['annoncions', 'annonçions'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Devant a, devant i' },
    { label: 'Six formes', kind: 'cards', title: 'Le faux, puis le vrai' },
    { label: 'Écoute', kind: 'audio', title: 'Toujours [s]' },
    { label: 'À toi', kind: 'drill', title: 'Huit de suite', gate: true },
  ],
  audio: REC('rec-b1-01-piege-cer'),
  say: 'Devant a, une cédille. Devant i, rien.',
  terms: ['cer'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('lancer', 'lancer, avec je : EN: lancer, with je:', ['je lançais', 'je lancais', 'je lanceais'], 0, 'ç devant a. EN: ç before a.'),
  ctl('prononcer', 'prononcer, avec vous : EN: prononcer, with vous:', ['vous prononçiez', 'vous prononciez', 'vous prononcez'], 1, 'c devant i. La troisième est le présent. EN: plain c before i.'),
  ctl('pourquoi ?', 'Sans cédille, « ca » se lit : EN: Without a cedilla, ca reads:', ['[sa]', '[ka]'], 1, '[ka], comme dans café. La cédille donne [sa]. EN: [ka], as in café.'),
], ['cer']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: '-cer',
    opener: { line: 'Même histoire avec commencer : une cédille apparaît, puis disparaît. Tu sauras toujours où la mettre. EN: Same story with commencer: a cedilla appears, then vanishes. You will always know where it goes.', imageRef: 'lessons/imparfait/act07.jpg' },
    sections: [],
    milestone: 'commençais avec ç, commencions sans ç : même logique que -ger. EN: ç before a, plain c before i.',
    estScreens: 28, restPoints: ['a7-regle', 'a7-ecoute'],
  },
  sections: [A7_HISTOIRE, A7_REGLE, A7_CONSTRUIRE, A7_ECOUTE, A7_PIEGE, A7_CHECK],
  imports: ['fr.a2.verbes.144'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LE DOUBLE I
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Émilie (Julien's sister) and her student years in Québec City. */
const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Étudiantes à Québec',
  frSub: 'Émilie raconte',
  text: "Au début des années 2000, ma cousine Sophie et moi, nous étudiions à l'Université Laval, à Québec. Nous habitions un petit appartement près du fleuve. Le soir, nous étudiions dans la cuisine, parce que c'était la seule pièce chaude. Nos amis passaient souvent, et nous riions trop fort. Le voisin du dessous criait : « Vous riiez encore à minuit ! » Le premier du mois, nous payions le loyer à la propriétaire, et nous envoyions des cartes postales à nos parents. Nous oubliions souvent nos clés, alors nous criions sous la fenêtre de la voisine. Depuis le balcon, nous voyions le fleuve Saint-Laurent, et nous croyions à tous nos rêves.",
  glossary: [
    { word: "l'Université Laval", en: 'Laval University', note: 'Une grande université de la ville de Québec. EN: a large university in Quebec City.' },
    { word: 'le voisin du dessous', en: 'the downstairs neighbour', note: 'Il habite à l’étage en dessous. EN: he lives on the floor below.' },
    { word: 'le loyer', en: 'the rent', note: 'L’argent qu’on paie chaque mois pour un logement. EN: monthly rent.' },
    { word: 'la propriétaire', en: 'the landlady', note: 'La personne à qui appartient l’appartement. EN: the owner.' },
    { word: 'le fleuve Saint-Laurent', en: 'the St. Lawrence River', note: 'Le grand fleuve du Québec. EN: Quebec’s great river.' },
  ],
  questions: [
    { q: 'Trouve trois verbes avec deux i. EN: Find three verbs with a double i.', a: 'étudiions, riions, riiez, oubliions, criions. EN: all with nous or vous.' },
    { q: 'Trouve trois verbes avec y puis i. EN: Find three verbs with y then i.', a: 'payions, envoyions, voyions, croyions. EN: y plus -ions.' },
    { q: 'Pourquoi étudiions a deux i ? EN: Why two i’s?', a: 'La base est étudi-, la fin est -ions : les deux se touchent. EN: stem i plus ending i.' },
  ],
  audio: REC('rec-b1-01-emilie'),
  say: 'Lis le souvenir d’Émilie. Compte les i.',
  terms: ['deuxI'],
};

const A8_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Deux i qui se touchent',
  frSub: 'La recette, lettre par lettre',
  sheetId: 'sheet-ortho',
  hint: 'Six cartes. Applique la recette, même quand elle donne une forme bizarre. EN: Six cards; trust the recipe even when the form looks odd.',
  audio: REC('rec-b1-01-ii'),
  say: REFRAME,
  terms: ['deuxI', 'base'],
  cards: [
    { head: 'étudier, nous', label: 'étudi- + ions', fr: 'nous étudions · nous étudiions', sub: '[noo zay-tü-DYOHⁿ] · [noo zay-tü-dee-YOHⁿ]', body: 'La base finit par i, la fin commence par i. Tu écris les deux. Ici, on entend une syllabe de plus. EN: stem i plus ending i; you hear an extra syllable.' },
    { head: 'étudier, vous', label: 'étudi- + iez', fr: 'vous étudiez · vous étudiiez', sub: '[voo zay-tü-DYAY] · [voo zay-tü-dee-YAY]', body: 'Le présent a un i, l’imparfait en a deux. EN: one i in the present, two here.' },
    { head: 'je, tu, il, ils : un seul i', label: 'la fin commence par a', fr: "j'étudiais · ils étudiaient", sub: '[zhay-tü-DYEH] · [eel zay-tü-DYEH]', body: 'Avec -ais, -ait, -aient, pas de deuxième i. Seuls nous et vous doublent. EN: only nous and vous double the i.' },
    { head: 'oublier, crier, rire', label: 'oubli-, cri-, ri-', fr: 'nous oubliions · nous criions · nous riions', sub: '[noo zoo-blee-YOHⁿ] · [noo kree-YOHⁿ] · [noo ree-YOHⁿ]', body: 'Même chose : la base finit par i. EN: same pattern, the stem ends in i.' },
    { head: 'voir, croire', label: 'voy-, croy- + ions', fr: 'nous voyions · nous croyions', sub: '[noo vwah-YOHⁿ] · [noo krwah-YOHⁿ]', body: 'La base finit par y. On ajoute -ions : y puis i. À l’oral, on entend presque nous voyons. EN: y then i; it sounds almost like the present.' },
    { head: 'payer, envoyer', label: 'pay-, envoy- + ions', fr: 'nous payions · nous envoyions', sub: '[noo peh-YOHⁿ] · [noo zahⁿ-vwah-YOHⁿ]', body: 'Encore y puis i. L’oreille ne t’aide pas : écris ce que la recette donne. EN: your ear cannot help; write what the recipe builds.' },
  ],
};

/** Six verbs, present nous against imparfait nous: the doubled i on one screen. */
const A8_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-tableau',
  layer: 'core',
  title: 'Présent, imparfait : compte les i',
  frSub: 'Touche pour comparer',
  cols: ['Verbe', 'présent', 'imparfait'],
  rows: [
    { cells: ['étudier', 'nous étudions', 'nous étudiions'], say: 'nous étudiions', detail: { title: 'étudier', body: 'Une syllabe de plus : on l’entend. EN: an extra syllable, audible.', say: 'Nous étudiions le soir.' } },
    { cells: ['oublier', 'nous oublions', 'nous oubliions'], say: 'nous oubliions', detail: { title: 'oublier', body: 'Presque le même son. EN: nearly the same sound.', say: 'Vous oubliiez toujours vos devoirs.' } },
    { cells: ['rire', 'nous rions', 'nous riions'], say: 'nous riions', detail: { title: 'rire', body: 'ri- + ions. EN: ri- plus -ions.', say: 'Nous riions beaucoup.' } },
    { cells: ['crier', 'nous crions', 'nous criions'], say: 'nous criions', detail: { title: 'crier', body: 'cri- + ions. EN: cri- plus -ions.', say: 'Les enfants criaient dans la cour.' } },
    { cells: ['voir', 'nous voyons', 'nous voyions'], say: 'nous voyions', detail: { title: 'voir', body: 'y puis i : l’oreille n’aide pas. EN: y then i; the ear cannot help.', say: 'Nous voyions la mer.' } },
    { cells: ['payer', 'nous payons', 'nous payions'], say: 'nous payions', detail: { title: 'payer', body: 'Même cas que voir. EN: same as voir.', say: 'Nous payions le pain au kiosque.' } },
  ],
  audio: AUDIO,
  say: 'À gauche le présent, à droite l’imparfait. Compte les i.',
  terms: ['deuxI'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Deux i, ou y puis i',
  frSub: 'nous et vous seulement',
  sheetId: 'sheet-ortho',
  groups: [
    grp('Base en i : étudi-, oubli-, ri-, cri-', [
      it(E(511), 'présent : un i'), it(E(1426)), it(E(1451)), it(E(1427)), it(E(1452)), it(E(512), 'présent'), it(E(501)), it(E(500)), it(E(508)), it(E(1428)), it(E(1453)), it(E(506)), it(E(502)),
    ], chk('crier, avec vous : EN: crier, with vous:', ['vous criez', 'vous crieez', 'vous criiez'], 2, 'cri- + iez : deux i. vous criez est le présent. EN: cri- plus -iez.')),
    grp('Base en y : voy-, croy-, pay-, envoy-', [
      it(E(460), 'présent'), it(E(1411)), it(E(1454)), it(E(505)), it(E(461), 'présent'), it(E(1413)), it(E(1455)), it(E(1429)), it(E(1456)), it(E(504)), it(E(503)), it(E(509)),
    ], chk('envoyer, avec vous : EN: envoyer, with vous:', ['vous envoyez', 'vous envoyiez', 'vous envoiiez'], 1, 'envoy- + iez : y puis i. EN: y then i.')),
    grp('je, tu, il, ils : un seul i', [it(E(507)), it(E(510))],
      chk('étudier, avec ils : EN: étudier, with ils:', ['ils étudiaient', 'ils étudiiaient', 'ils étudaient'], 0, 'étudi- + aient : la fin commence par a, donc un seul i. EN: -aient starts with a.')),
  ],
  audio: AUDIO,
  say: 'Base en i ou en y, fin en i : écris les deux.',
  terms: ['deuxI'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Émilie au téléphone',
  frSub: 'Ce qu’on entend, ce qu’on n’entend pas',
  lines: [
    { fr: "Aujourd'hui, les étudiants étudient à la bibliothèque.", en: 'Today, students study in the library.' },
    { fr: 'Nous, nous étudiions dans la cuisine.', en: 'We used to study in the kitchen.' },
    { fr: 'Nous riions beaucoup, trop fort pour les voisins.', en: 'We laughed a lot, too loud for the neighbours.' },
    { fr: 'Maintenant, nous rions moins, nous avons des enfants !', en: 'Now we laugh less, we have children!' },
    { fr: 'Nous envoyions des cartes postales à nos parents.', en: 'We used to send postcards to our parents.' },
    { fr: "Aujourd'hui, nous envoyons des messages.", en: 'Today we send text messages.' },
    { fr: 'Et vous, à Dakar, vous oubliiez vos clés aussi ?', en: 'And you in Dakar, did you forget your keys too?' },
    { fr: 'Moi, je les oubliais tout le temps.', en: 'I forgot them all the time.' },
  ],
  questions: [
    { q: 'Ligne 2 : tu entends étudions ou étudiions ? EN: Which one do you hear?', opts: ['étudiions', 'étudions'], correct: 0, why: 'Une syllabe de plus : [di.jɔ̃]. EN: an extra syllable.' },
    { q: 'Lignes 5 et 6 : laquelle parle d’avant ? EN: Which one is about the past?', opts: ['la 6', 'la 5'], correct: 1, why: 'La ligne 5 dit avant, la ligne 6 dit aujourd’hui. Le son aide peu : le sens décide. EN: the words around the verb decide.' },
    { q: 'Tu entends bien la différence entre envoyons et envoyions ? EN: Can you clearly hear the difference?', opts: ['presque pas', 'oui, très bien'], correct: 0, why: 'Presque pas. C’est pour ça qu’il faut connaître la règle. EN: barely; that is why you need the rule.' },
    { q: 'Ligne 8 : oubliais s’écrit avec combien de i ? EN: How many i’s in oubliais?', opts: ['deux', 'un'], correct: 1, why: 'Avec je, la fin -ais commence par a : un seul i. EN: je takes one i.' },
  ],
  audio: REC('rec-b1-01-emilie-ecoute'),
  say: 'Écoute Émilie. Avant, ou maintenant ?',
  terms: ['deuxI'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Un i de trop, un i de moins',
  errors: [
    { wrong: 'En 2002, nous étudions à Québec.', right: 'En 2002, nous étudiions à Québec.', why: 'Deux i, ça a l’air faux. Mais c’est la recette : étudi- + ions. EN: two i’s look wrong and are right.' },
    { wrong: 'À l’époque, vous oubliez toujours vos clés.', right: 'À l’époque, vous oubliiez toujours vos clés.', why: 'oubli- + iez. vous oubliez, c’est le présent. EN: oubliez is the present.' },
    { wrong: 'Petits, nous voyons la mer tous les jours.', right: 'Petits, nous voyions la mer tous les jours.', why: 'voy- + ions : y puis i. EN: y then i.' },
    { wrong: 'Avant l’euro, nous payons en francs.', right: 'Avant l’euro, nous payions en francs.', why: 'pay- + ions. À l’oral, presque pareil ; à l’écrit, non. EN: sounds alike, spelled differently.' },
    { wrong: 'J’étudiiais le soir.', right: 'J’étudiais le soir.', why: 'Avec je, la fin commence par a : un seul i. EN: only nous and vous double.' },
    { wrong: 'Nous envoiions des lettres.', right: 'Nous envoyions des lettres.', why: 'La base est envoy-, avec un y, comme nous envoyons. EN: the stem keeps its y.' },
  ],
  audio: AUDIO,
  say: 'Six erreurs avec les i.',
  terms: ['deuxI'],
};

/** THE SPELLING POINT, in letters mode only (corpus `dicteeFor`). */
const A8_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a8-dictee',
  layer: 'core',
  title: 'Dictée : les deux i',
  frSub: 'Écris ce que tu entends',
  itemIds: dicteeFor(8),
  audio: AUDIO,
  say: 'Écoute, puis écris. Pense aux deux i.',
  terms: ['deuxI'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('rire', 'rire, avec nous : EN: rire, with nous:', ['nous rions', 'nous riions', 'nous riyons'], 1, 'ri- + ions. EN: ri- plus -ions.'),
  ctl('croire', 'croire, avec vous : EN: croire, with vous:', ['vous croyez', 'vous croiiez', 'vous croyiez'], 2, 'croy- + iez. EN: croy- plus -iez.'),
  ctl('je', 'oublier, avec je : EN: oublier, with je:', ['j’oubliais', 'j’oubliiais', 'j’oublais'], 0, 'oubli- + ais : un seul i. EN: one i with je.'),
], ['deuxI']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le double i',
    opener: { line: 'Étudiions, voyions, payions : deux i qui se touchent. Ça a l’air faux, et pourtant c’est juste. EN: étudiions, voyions, payions: two i’s meet. It looks wrong, and it is right.', imageRef: 'lessons/imparfait/act08.jpg' },
    sections: [],
    milestone: 'étudiions, voyions, payions : tu écris ce que la recette donne. EN: You write what the recipe builds, double i and all.',
    estScreens: 37, restPoints: ['a8-regle', 'a8-ecoute'],
  },
  sections: [A8_LECTURE, A8_REGLE, A8_TABLEAU, A8_CONSTRUIRE, A8_ECOUTE, A8_ERREURS, A8_DICTEE, A8_CHECK],
  imports: [],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — LES IMPERSONNELS
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Julien's Montréal winters, with Québec vocabulary (tuque, mitaines,
 *  gadoue) glossed. No negation in the imparfait here (act 10). */
const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'L’hiver à Montréal',
  frSub: 'Julien se souvient',
  text: "Quand j'étais enfant, à Montréal, il neigeait de novembre à avril. Il faisait froid, très froid, mais souvent il faisait beau : un ciel bleu, un soleil blanc. Le matin, il fallait mettre des bottes, une tuque et des mitaines. Il y avait de la neige partout, et les rues devenaient blanches. En mars, quand il pleuvait, c'était pire : il y avait de la gadoue sur tous les trottoirs, et il valait mieux rester à la maison. En juillet, au contraire, il faisait chaud et humide, les écoles étaient fermées, et il y avait des festivals dans tout le quartier.",
  glossary: [
    { word: 'une tuque', en: 'a winter hat', note: 'Au Québec, un bonnet d’hiver. EN: Quebec word for a knitted hat.' },
    { word: 'des mitaines', en: 'mittens', note: 'Au Québec, des gants sans doigts séparés. EN: Quebec word for mittens.' },
    { word: 'la gadoue', en: 'slush', note: 'Un mélange de neige, d’eau et de boue. EN: melting snow and mud.' },
    { word: 'humide', en: 'humid', note: 'Avec beaucoup d’eau dans l’air. EN: damp air.' },
    { word: 'il valait mieux', en: 'it was better to', note: 'Un conseil, suivi d’un infinitif. EN: advice, followed by an infinitive.' },
  ],
  questions: [
    { q: 'Trouve quatre verbes avec il qui ne représentent personne. EN: Find four impersonal verbs.', a: 'il neigeait, il faisait froid, il fallait, il y avait, il pleuvait, il valait mieux. EN: il stands for nobody.' },
    { q: 'Qu’est-ce qu’il fallait mettre le matin ? EN: What did you have to put on?', a: 'Des bottes, une tuque et des mitaines. EN: boots, a hat and mittens.' },
    { q: '« il y avait de la gadoue » : il y avait vient de quel verbe ? EN: Which verb is il y avait from?', a: 'De avoir, comme il y a : av- + ait. EN: from avoir.' },
  ],
  audio: REC('rec-b1-01-hiver'),
  say: 'Lis le souvenir de Julien. Cherche les verbes avec il.',
  terms: ['impers'],
};

const A9_FORMES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-formes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Il, mais personne',
  frSub: 'Six formes à apprendre entières',
  sheetId: 'sheet-il-me-ne',
  hint: 'Six cartes. Ici, il ne représente personne. EN: Six cards; here il stands for nobody.',
  audio: REC('rec-b1-01-impers'),
  say: 'Ici, il ne représente personne.',
  terms: ['impers'],
  cards: [
    { head: 'il y avait', label: 'il y a, au passé', fr: 'il y avait', sub: '[eel ee ah-VEH]', body: 'Vient de avoir : av- + ait. Toujours au singulier, même avec des choses au pluriel. EN: always singular, even with plural nouns.' },
    { head: 'il fallait', label: 'falloir + infinitif', fr: 'il fallait', sub: '[eel fah-LEH]', body: 'falloir n’a pas de nous, donc pas de recette. Apprends il fallait tel quel. EN: no nous form; learn it whole.' },
    { head: 'il pleuvait', label: 'pleuvoir', fr: 'il pleuvait', sub: '[eel pleu-VEH]', body: 'Pas de nous non plus. il pleut, il pleuvait. EN: no nous either; learn it whole.' },
    { head: 'il neigeait', label: 'neiger : un verbe en -ger', fr: 'il neigeait', sub: '[eel neh-ZHEH]', body: 'Rappel de l’acte 6 : devant a, un e. il neigeait, jamais il neigait. EN: the -ger rule: e before a.' },
    { head: 'il faisait + adjectif', label: 'faire : [fə]', fr: 'il faisait beau · il faisait froid · il faisait chaud', sub: '[fuh-zeh BOH] · [fuh-zeh FRWAH] · [fuh-zeh SHOH]', body: 'Pour la météo, on utilise faire. On dit [fə], on écrit ai. EN: weather uses faire, said [fə].' },
    { head: 'il valait mieux', label: 'un conseil', fr: 'il valait mieux', sub: '[eel vah-leh MYEU]', body: 'De valoir mieux. Suivi d’un infinitif : il valait mieux partir tôt. EN: followed by an infinitive.' },
  ],
};

const A9_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a9-usages',
  layer: 'core',
  title: 'Quatre façons de décrire un lieu',
  frSub: 'Le temps, le décor, l’obligation, le conseil',
  cases: [
    { situation: 'Dire le temps qu’il faisait. EN: saying what the weather was like.', fr: 'Il faisait froid, mais il faisait beau.', en: 'It was cold, but the weather was nice.' },
    { situation: 'Décrire ce qu’il y avait. EN: describing what there was.', fr: 'Il y avait de la neige partout.', en: 'There was snow everywhere.' },
    { situation: 'Dire ce qui était obligatoire. EN: saying what you had to do.', fr: 'Il fallait mettre des bottes.', en: 'You had to wear boots.' },
    { situation: 'Donner le conseil de l’époque. EN: the advice back then.', fr: 'Il valait mieux partir tôt.', en: 'It was better to leave early.' },
  ],
  audio: AUDIO,
  say: 'Quatre façons de décrire un lieu d’avant.',
  terms: ['impers'],
};

/** The six impersonals, present against imparfait, tap to hear each pair. */
const A9_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-tableau',
  layer: 'core',
  title: 'Maintenant, avant',
  frSub: 'Touche pour écouter',
  sheetId: 'sheet-il-me-ne',
  cols: ['Maintenant', 'Avant'],
  rows: [
    { cells: ['il y a', 'il y avait'], say: 'il y avait', detail: { title: 'il y a', body: 'De avoir. Toujours au singulier. EN: from avoir, always singular.', say: 'Il y avait de la neige partout.' } },
    { cells: ['il faut', 'il fallait'], say: 'il fallait', detail: { title: 'il faut', body: 'Suivi d’un infinitif. EN: followed by an infinitive.', say: 'Il fallait mettre des bottes.' } },
    { cells: ['il pleut', 'il pleuvait'], say: 'il pleuvait', detail: { title: 'il pleut', body: 'Pas de forme nous : apprends-le entier. EN: no nous form.', say: 'Il pleuvait souvent en novembre.' } },
    { cells: ['il neige', 'il neigeait'], say: 'il neigeait', detail: { title: 'il neige', body: 'Verbe en -ger : e devant a. EN: the -ger rule, e before a.', say: 'Il neigeait de novembre à avril.' } },
    { cells: ['il fait froid', 'il faisait froid'], say: 'il faisait froid', detail: { title: 'la météo', body: 'faire + adjectif, avec [fə]. EN: faire plus adjective, said [fə].', say: 'Il faisait froid, mais il faisait beau.' } },
    { cells: ['il vaut mieux', 'il valait mieux'], say: 'il valait mieux', detail: { title: 'le conseil', body: 'Un seul l, puis -ait. EN: one l, then -ait.', say: 'Il valait mieux partir tôt.' } },
  ],
  audio: AUDIO,
  say: 'À gauche aujourd’hui, à droite avant.',
  terms: ['impers'],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis les impersonnels',
  frSub: 'Toujours avec il',
  groups: [
    grp('il y avait, il fallait, il valait mieux', [
      it(E(1432)), it(E(1450)), it(E(1464)), it(E(522)), it('fr.b1.nombres.009'), it(E(1431)), it(E(1449)), it(E(521)), it(E(516)), it(E(520)),
    ], chk('« Il ... mettre des bottes. » (falloir) EN: You had to wear boots.', ['faut', 'fallait', 'fallais'], 1, 'il fallait : il, donc -ait. il faut, c’est le présent. EN: il faut is the present.')),
    grp('La météo', [
      it(E(1430)), it(E(1448)), it(E(513)), it(E(518)), it(E(514)), it(E(515)), it(E(517)), it(E(519)), it(E(1465)),
    ], chk('neiger, à l’imparfait : EN: neiger, in the imparfait:', ['il neigait', 'il neigeaient', 'il neigeait'], 2, 'neig- + e + ait : le e garde [ʒ]. EN: the -ger e.')),
    ctl('Qui est il ?', 'Dans « il faisait beau », il représente qui ? EN: Who is il?', ['personne', 'un homme', 'le soleil'], 0, 'Personne : c’est un il impersonnel. EN: nobody; impersonal il.'),
  ],
  audio: AUDIO,
  say: 'Toujours avec il, toujours -ait.',
  terms: ['impers'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Julien parle de l’hiver',
  frSub: 'Avant, maintenant',
  lines: [
    { fr: "Tu sais, Awa, quand j'étais petit, il neigeait tout l'hiver.", en: 'You know, Awa, when I was little it snowed all winter.' },
    { fr: 'Il faisait moins trente, parfois.', en: 'It was minus thirty, sometimes.' },
    { fr: 'Il fallait mettre deux paires de mitaines.', en: 'You had to wear two pairs of mittens.' },
    { fr: "Aujourd'hui, il neige moins qu'avant.", en: 'Today it snows less than before.' },
    { fr: 'Il y avait des bancs de neige plus hauts que moi.', en: 'There were snowbanks taller than me.' },
    { fr: "Quand il pleuvait en mars, il valait mieux rester à l'intérieur.", en: 'When it rained in March, it was better to stay inside.' },
    { fr: 'Et à Dakar, il faisait chaud toute l’année ?', en: 'And in Dakar, was it hot all year?' },
    { fr: "Ici, il fait froid, mais on s'habitue.", en: 'Here it’s cold, but you get used to it.' },
  ],
  questions: [
    { q: 'Ligne 4 : avant ou maintenant ? EN: Line 4: before or now?', opts: ['maintenant', 'avant'], correct: 0, why: 'il neige : présent. EN: present.' },
    { q: 'Ligne 3 : il fallait veut dire... EN: il fallait means...', opts: ['il tombait', 'c’était obligatoire', 'il faisait froid'], correct: 1, why: 'falloir : une obligation. EN: an obligation.' },
    { q: 'Lignes 7 et 8 : laquelle est au présent ? EN: Which is present?', opts: ['la 7', 'la 8'], correct: 1, why: 'il fait : présent. il faisait : imparfait. EN: fait is present.' },
    { q: 'Ligne 6 : quel était le conseil ? EN: What was the advice?', opts: ['sortir', 'mettre des mitaines', 'rester à l’intérieur'], correct: 2, why: 'il valait mieux rester à l’intérieur. EN: stay inside.' },
  ],
  audio: REC('rec-b1-01-hiver-ecoute'),
  say: 'Écoute Julien parler de l’hiver.',
  terms: ['impers'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Les erreurs avec il',
  errors: [
    { wrong: 'Il y avaient beaucoup de monde.', right: 'Il y avait beaucoup de monde.', why: 'Logique : il y a du monde, donc un pluriel ? Non. il y avait reste au singulier. EN: il y avait never takes a plural.' },
    { wrong: 'Il y étais de la neige.', right: 'Il y avait de la neige.', why: 'il y a vient de avoir, pas de être. EN: from avoir, not être.' },
    { wrong: 'Il fesait froid.', right: 'Il faisait froid.', why: 'On dit [fə], on écrit ai. EN: said [fə], spelled ai.' },
    { wrong: 'Il neigait tout l’hiver.', right: 'Il neigeait tout l’hiver.', why: 'neiger est un verbe en -ger : e devant a. EN: e before a.' },
    { wrong: 'Il fallais partir.', right: 'Il fallait partir.', why: 'il prend toujours -ait. EN: il always takes -ait.' },
    { wrong: 'Il pleuvais souvent.', right: 'Il pleuvait souvent.', why: 'Même chose : il, donc -ait. EN: il, so -ait.' },
  ],
  audio: AUDIO,
  say: 'Six erreurs avec il.',
  terms: ['impers'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('il y avait', 'Quelle phrase est correcte ? EN: Which sentence is correct?', ['Il y avait des arbres.', 'Il y avaient des arbres.', 'Il y étaient des arbres.'], 0, 'il y avait, toujours au singulier. EN: always singular.'),
  ctl('valoir mieux', 'valoir mieux, à l’imparfait : EN: in the imparfait:', ['il vallait mieux', 'il valait mieux', 'il valais mieux'], 1, 'val- + ait, un seul l. EN: one l, -ait.'),
  ctl('faire froid', 'faire froid, à l’imparfait : EN: in the imparfait:', ['il fesait froid', 'il faisais froid', 'il faisait froid'], 2, 'fais- + ait. EN: fais- plus -ait.'),
], ['impers']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Les impersonnels',
    opener: { line: 'Il pleuvait, il faisait froid, il y avait de la neige : les formes qui plantent un lieu et une saison. EN: il pleuvait, il faisait froid, il y avait: the forms that set a place and a season.', imageRef: 'lessons/imparfait/act09.jpg' },
    sections: [],
    milestone: 'Tu décris le temps et le décor d’avant : il y avait, il faisait, il fallait. EN: You can describe the weather and setting of the past.',
    estScreens: 33, restPoints: ['a9-usages', 'a9-ecoute'],
  },
  sections: [A9_LECTURE, A9_FORMES, A9_USAGES, A9_TABLEAU, A9_CONSTRUIRE, A9_ECOUTE, A9_ERREURS, A9_CHECK],
  imports: ['fr.b1.nombres.009'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — PRONOMINAUX ET NÉGATION
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Koffi and Awa compare mornings: pronominal verbs and negation. */
const A10_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a10-histoire',
  layer: 'core',
  title: 'Les matins d’Abidjan',
  frSub: 'Koffi et Awa comparent',
  setting: 'La cantine du bureau. Koffi et Awa parlent de leurs matins d’enfance. EN: Koffi and Awa compare their childhood mornings.',
  bubbles: [
    { from: 'coach', fr: 'À Abidjan, je me levais à six heures. Ma mère se levait avant tout le monde.', en: 'In Abidjan I got up at six. My mother got up before everyone.' },
    { from: 'user', fr: 'Et tu aimais l’école, toi.', en: 'And you liked school.' },
    { from: 'coach', fr: 'Pas vraiment. Je ne mangeais jamais le matin, et je m’ennuyais en classe.', en: 'Not really. I never ate in the morning, and I got bored in class.' },
    { from: 'user', fr: 'Mes cousins et moi, nous ne sortions pas le soir. C’était interdit.', en: 'My cousins and I didn’t go out at night. It wasn’t allowed.' },
    { from: 'coach', fr: 'Nous non plus. Mais le dimanche, on se voyait chez ma tante, et nous nous promenions au bord de la lagune.', en: 'Neither did we. But on Sundays we saw each other at my aunt’s and walked along the lagoon.' },
    { from: 'user', fr: 'Mes parents ne se disputaient jamais devant nous.', en: 'My parents never argued in front of us.' },
    { from: 'coach', fr: 'Les miens, si. Mais il n’y avait personne de plus gentil qu’eux.', en: 'Mine did. But there was nobody kinder than them.' },
  ],
  closing: { fr: 'me, se, ne... pas, ne... jamais : les petits mots ne bougent pas. Seul le verbe change.', en: 'The little words stay put; only the verb changes.' },
  audio: REC('rec-b1-01-matins'),
  say: 'Écoute Koffi et Awa. Regarde les petits mots autour du verbe.',
  terms: ['pron'],
};

const A10_PRONOMS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-pronoms',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Les verbes pronominaux',
  frSub: 'Le pronom reste, le verbe change',
  sheetId: 'sheet-il-me-ne',
  hint: 'Cinq cartes. Le pronom ne bouge pas. EN: Five cards; the pronoun does not move.',
  audio: REC('rec-b1-01-pronominaux'),
  say: 'Le pronom reste à sa place. Seul le verbe change.',
  terms: ['pron'],
  cards: [
    { head: 'même place qu’au présent', label: PRONOMINAUX_REF, fr: 'je me lève · je me levais', sub: '[zhuh muh LEV] · [zhuh muh luh-VEH]', body: `Comme dans ${PRONOMINAUX_REF} : le pronom est devant le verbe. Seule la fin change. EN: pronoun before the verb, as in the present.` },
    { head: 'les six personnes', label: 'se lever', fr: 'je me levais · nous nous levions · ils se levaient', sub: '[muh luh-VEH] · [noo noo luh-VYOHⁿ] · [suh luh-VEH]', body: 'La base vient de nous nous levons : lev-. Donc nous nous levions. EN: the stem comes from nous nous levons.' },
    { head: 'm’, t’, s’', label: 'devant une voyelle', fr: "je m'ennuyais · ils s'amusaient", sub: '[zhuh mahⁿ-nwee-YEH] · [eel sah-mü-ZEH]', body: 'me, te, se deviennent m’, t’, s’ devant une voyelle. EN: me, te, se elide before a vowel.' },
    { head: 'on se...', label: 'on = il', fr: 'on se voyait', sub: '[ohⁿ suh vwah-YEH]', body: 'on prend se et la fin de il : on se voyait. EN: on takes se and the il ending.' },
    { head: 'se promener', label: 'nous nous promenons', fr: 'nous nous promenions', sub: '[noo noo prom-NYOHⁿ]', body: 'Deux fois nous : un sujet, un pronom. Le e de promen- ne se dit presque pas. EN: two nous; the e is nearly silent.' },
  ],
};

const A10_NEGATION: Sec<'examples'> = {
  type: 'examples',
  id: 'a10-negation',
  layer: 'core',
  title: 'La négation autour du verbe',
  frSub: 'ne... pas, ne... jamais, ne... personne',
  sheetId: 'sheet-il-me-ne',
  examples: [
    { fr: 'Je ne savais pas nager.', en: "I couldn't swim.", note: 'ne devant le verbe, pas après. EN: ne before, pas after.' },
    { fr: 'Je ne mangeais jamais le matin.', en: 'I never ate in the morning.', note: 'jamais prend la place de pas. EN: jamais replaces pas.' },
    { fr: "Il n'y avait personne dans la rue.", en: 'There was nobody in the street.', note: 'ne devient n’ devant y. personne remplace pas. EN: personne replaces pas.' },
    { fr: 'Nous ne sortions pas le soir.', en: "We didn't go out at night.", note: 'Même place avec nous. EN: same place with nous.' },
    { fr: 'Mes parents ne se disputaient jamais.', en: 'My parents never argued.', note: 'ne avant le pronom se. EN: ne comes before se.' },
    { fr: 'Je ne m’ennuyais jamais chez elle.', en: 'I was never bored at her place.', note: 'ne, puis m’, puis le verbe. EN: ne, then the pronoun, then the verb.' },
    { fr: 'Je savais pas. (à l’oral)', en: "Dunno. / I didn't know. (spoken)", note: 'À l’oral, on oublie souvent ne. À l’écrit, garde-le. EN: speech drops ne; writing keeps it.' },
  ],
  audio: AUDIO,
  say: 'ne devant le verbe, pas ou jamais après.',
  terms: ['pron'],
};

/** se lever in six persons, with the negative in the detail. */
const A10_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a10-tableau',
  layer: 'core',
  title: 'se lever, les six formes',
  frSub: 'Touche pour la négation',
  sheetId: 'sheet-il-me-ne',
  cols: ['Qui', 'se lever'],
  rows: [
    { cells: ['je', 'je me levais'], say: 'je me levais', detail: { title: 'je', body: 'Négatif : je ne me levais pas. EN: the negative form.', say: 'je ne me levais pas' } },
    { cells: ['tu', 'tu te levais'], say: 'tu te levais', detail: { title: 'tu', body: 'Négatif : tu ne te levais pas. EN: the negative form.', say: 'tu ne te levais pas' } },
    { cells: ['il, elle, on', 'il se levait'], say: 'il se levait', detail: { title: 'il, elle, on', body: 'Négatif : il ne se levait pas. EN: the negative form.', say: 'il ne se levait pas' } },
    { cells: ['nous', 'nous nous levions'], say: 'nous nous levions', detail: { title: 'nous', body: 'Deux fois nous. Négatif : nous ne nous levions pas. EN: nous twice.', say: 'nous ne nous levions pas' } },
    { cells: ['vous', 'vous vous leviez'], say: 'vous vous leviez', detail: { title: 'vous', body: 'Deux fois vous. Négatif : vous ne vous leviez pas. EN: vous twice.', say: 'vous ne vous leviez pas' } },
    { cells: ['ils, elles', 'ils se levaient'], say: 'ils se levaient', detail: { title: 'ils, elles', body: 'Négatif : ils ne se levaient pas. EN: the negative form.', say: 'ils ne se levaient pas' } },
  ],
  audio: AUDIO,
  say: 'Touche une ligne pour entendre la forme négative.',
  terms: ['pron'],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis avec les petits mots',
  frSub: 'Pronom, négation',
  groups: [
    grp('Les pronominaux', [
      it('fr.a2.verbes.735', 'présent'), it(E(523)), it(E(534)), it(E(524)), it(E(525)), it(E(535)), it(E(526)), it(E(538)), it(E(527)), it(E(532)), it(E(533)),
    ], chk('se coucher, avec nous : EN: se coucher, with nous:', ['nous nous couchions', 'nous couchions', 'nous nous couchons'], 0, 'Deux fois nous, et -ions. La troisième est le présent. EN: two nous and -ions.')),
    grp('La négation', [
      it(E(528)), it(E(536)), it(E(529)), it(E(537)), it('fr.a1.heure-et-date.051'), it(E(530)), it(E(531)), it(E(539)), it(E(540)),
    ], chk('« Je ... nager. » (savoir, négation) EN: I couldn’t swim.', ['ne savais pas', 'savais ne pas', 'ne pas savais'], 0, 'ne devant, pas derrière le verbe. EN: ne before, pas after.')),
    ctl('personne', 'Il n’y avait ... dans la rue. EN: There was nobody in the street.', ['pas personne', 'personne', 'jamais personne'], 1, 'personne prend la place de pas. EN: personne replaces pas.'),
  ],
  audio: AUDIO,
  say: 'Les petits mots restent à leur place.',
  terms: ['pron'],
};

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Koffi, avant et maintenant',
  frSub: 'Qu’est-ce qui a changé ?',
  lines: [
    { fr: 'Avant, je me levais à six heures.', en: 'Before, I got up at six.' },
    { fr: 'Maintenant, je me lève à sept heures et demie.', en: 'Now I get up at half past seven.' },
    { fr: 'Le matin, je ne mangeais jamais.', en: 'In the morning, I never ate.' },
    { fr: "Aujourd'hui, je prends toujours un café.", en: 'Today I always have a coffee.' },
    { fr: 'Mes frères et moi, nous nous disputions pour la salle de bain.', en: 'My brothers and I fought over the bathroom.' },
    { fr: "Le dimanche, il n'y avait personne dans les rues.", en: 'On Sundays, there was nobody in the streets.' },
    { fr: "Mes enfants, eux, ne s'ennuient jamais : ils ont des tablettes.", en: 'My kids are never bored: they have tablets.' },
    { fr: 'Et toi, Awa, tu te couchais tôt ?', en: 'And you, Awa, did you go to bed early?' },
  ],
  questions: [
    { q: 'Ligne 2 : avant ou maintenant ? EN: Line 2: before or now?', opts: ['maintenant', 'avant'], correct: 0, why: 'je me lève : présent. EN: present.' },
    { q: 'Ligne 3 : Koffi mangeait le matin ? EN: Did Koffi eat in the morning?', opts: ['oui', 'non, jamais'], correct: 1, why: 'je ne mangeais jamais. EN: never.' },
    { q: 'Ligne 5 : pour quoi se disputaient-ils ? EN: What did they fight over?', opts: ['la télé', 'le petit-déjeuner', 'la salle de bain'], correct: 2, why: 'pour la salle de bain. EN: the bathroom.' },
    { q: 'Ligne 7 : ne s’ennuient, c’est quel temps ? EN: Which tense?', opts: ['le présent', 'l’imparfait'], correct: 0, why: 'Ses enfants, aujourd’hui : présent. EN: present, today.' },
  ],
  audio: REC('rec-b1-01-matins-ecoute'),
  say: 'Écoute Koffi.',
  terms: ['pron'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Les petits mots oubliés',
  frSub: 'Pronom, élision, négation',
  rule: {
    title: 'Les petits mots ne bougent pas',
    body: `Le pronom est devant le verbe, ne aussi, et pas après. Comme au présent dans ${PRONOMINAUX_REF}. EN: same word order as the present.`,
  },
  cards: [
    { promptLabel: 'se lever, je', promptSound: 'je levais tôt', fr: 'je me levais tôt', ipa: '/ʒə mə lə.vɛ to/', tip: 'Garde le pronom : sans me, tu lèves quelque chose. EN: without me, you lift something.' },
    { promptLabel: 's’ennuyer, je', promptSound: 'je me ennuyais', fr: "je m'ennuyais", ipa: '/ʒə mɑ̃.nɥi.jɛ/', tip: 'me devient m’ devant une voyelle. EN: me elides.' },
    { promptLabel: 'se voir, on', promptSound: 'on se voyaient', fr: 'on se voyait', ipa: '/ɔ̃ sə vwa.jɛ/', tip: 'on prend -ait. EN: on takes -ait.' },
    { promptLabel: 'savoir, négation', promptSound: 'je savais ne pas', fr: 'je ne savais pas', ipa: '/ʒə nə sa.vɛ pa/', tip: 'ne devant le verbe, pas après. EN: ne before, pas after.' },
    { promptLabel: 'il y a, négation', promptSound: "il n'y avait pas personne", fr: "il n'y avait personne", ipa: '/il ni.ja.vɛ pɛʁ.sɔn/', tip: 'personne remplace pas. EN: personne replaces pas.' },
    { promptLabel: 'se promener, nous', promptSound: 'nous promenions', fr: 'nous nous promenions', ipa: '/nu nu pʁɔm.njɔ̃/', tip: 'Deux fois nous. EN: nous twice.' },
  ],
  drill: [
    { promptSay: 'je ... levais', opts: ['se', 'me'], correct: 1 },
    { promptSay: 'on se ...', opts: ['voyait', 'voyaient'], correct: 0 },
    { promptSay: 'je ne ... pas', opts: ['savait', 'savais'], correct: 1 },
    { promptSay: "il n'y avait ...", opts: ['personne', 'pas personne'], correct: 0 },
    { promptSay: 'nous ... promenions', opts: ['se', 'nous'], correct: 1 },
    { promptSay: 'ils ... amusaient', opts: ["s'", 'se'], correct: 0 },
    { promptSay: 'je ... ennuyais', opts: ['me', "m'"], correct: 1 },
    { promptSay: 'vous ... disputiez', opts: ['vous', 'se'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Les petits mots ne bougent pas' },
    { label: 'Six pièges', kind: 'cards', title: 'Le faux, puis le vrai' },
    { label: 'Écoute', kind: 'audio', title: 'Les bonnes formes' },
    { label: 'À toi', kind: 'drill', title: 'Huit de suite', gate: true },
  ],
  audio: REC('rec-b1-01-piege-pron'),
  say: 'Les petits mots ne bougent pas.',
  terms: ['pron'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('se promener', 'se promener, avec nous : EN: se promener, with nous:', ['nous nous promenions', 'nous promenions', 'nous nous promenons'], 0, 'Deux fois nous, et -ions. EN: two nous, -ions.'),
  ctl('la négation', 'Quelle phrase est correcte ? EN: Which sentence is correct?', ['Je mangeais ne pas.', 'Je ne mangeais pas.', 'Je ne pas mangeais.'], 1, 'ne devant, pas derrière. EN: ne before, pas after.'),
  ctl('s’amuser', 's’amuser, avec ils : EN: s’amuser, with ils:', ['ils se amusaient', 'ils s’amusait', 'ils s’amusaient'], 2, 's’ devant une voyelle, et -aient. EN: elision and -aient.'),
], ['pron']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Pronominaux et négation',
    opener: { line: 'Je me levais, je ne savais pas : les petits mots autour du verbe restent exactement où ils étaient. EN: je me levais, je ne savais pas: the little words around the verb stay exactly where they were.', imageRef: 'lessons/imparfait/act10.jpg' },
    sections: [],
    milestone: 'je me levais, je ne savais pas : les petits mots restent à leur place. EN: Pronouns and negation stay where they were.',
    estScreens: 35, restPoints: ['a10-negation', 'a10-ecoute'],
  },
  sections: [A10_HISTOIRE, A10_PRONOMS, A10_NEGATION, A10_TABLEAU, A10_CONSTRUIRE, A10_ECOUTE, A10_PIEGE, A10_CHECK],
  imports: ['fr.a2.verbes.735', 'fr.a1.heure-et-date.051'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — L'ORTHOGRAPHE CONTRE LE SON
 *
 *  « j'ai parlé » against « je parlais » is taught as SOUND and SPELLING only:
 *  which form to write, and the audible cue (the auxiliary). When to choose
 *  which tense is b1.03's.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Awa helps her niece with a dictée. No « ? » in bubbles. */
const A11_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a11-histoire',
  layer: 'core',
  title: 'La dictée de Mariama',
  frSub: 'parler, parlé, parlais...',
  setting: 'Samedi, chez Awa. Sa nièce Mariama, douze ans, prépare une dictée. EN: Awa helps her twelve-year-old niece with a dictation.',
  bubbles: [
    { from: 'user', fr: 'Tata, je ne comprends pas. parler, parlé, parlais : c’est pareil.', en: 'Auntie, I don’t get it. parler, parlé, parlais: it’s all the same.' },
    { from: 'coach', fr: 'À l’oreille, presque. Mais à l’écrit, ce sont des formes différentes.', en: 'To the ear, almost. But in writing, they are different forms.' },
    { from: 'user', fr: 'Alors dis-moi comment je choisis.', en: 'So tell me how I choose.' },
    { from: 'coach', fr: 'Remplace par vendre. Tu dis vendre, tu écris parler. Tu dis vendu, tu écris parlé. Tu dis vendais, tu écris parlais.', en: 'Swap in vendre: vendre means parler, vendu means parlé, vendais means parlais.' },
    { from: 'user', fr: 'Et j’ai parlé, je parlais. Je n’entends pas bien la différence.', en: 'And j’ai parlé, je parlais. I can’t really hear the difference.' },
    { from: 'coach', fr: 'Écoute le petit mot devant. Avec j’ai, c’est parlé. Sans j’ai, c’est parlais.', en: 'Listen for the little word before it. With j’ai, it’s parlé. Without it, parlais.' },
  ],
  closing: { fr: 'Même verbe, cinq formes voisines. Deux astuces : vendre, et j’ai.', en: 'One verb, five look-alike forms. Two tricks: vendre, and j’ai.' },
  audio: REC('rec-b1-01-mariama'),
  say: 'Écoute Awa et Mariama.',
  terms: ['homo'],
};

const A11_FORMES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a11-formes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Cinq formes qui se ressemblent',
  frSub: 'Même verbe, autre travail',
  sheetId: 'sheet-ortho',
  hint: 'Six cartes, une forme par carte. EN: Six cards, one form each.',
  audio: REC('rec-b1-01-homo'),
  say: 'Même verbe, cinq formes voisines.',
  terms: ['homo', 'son'],
  cards: [
    { head: 'parler', label: 'l’infinitif', fr: 'Elle aimait danser.', sub: '[eh-leh-meh dahⁿ-SAY]', body: 'Après un autre verbe ou une préposition : -er. aimer danser, pour parler. EN: after another verb or a preposition.' },
    { head: 'parlé', label: 'le participe, avec avoir', fr: "J'ai parlé avec elle.", sub: '[zhay par-lay ah-veh-KEL]', body: `Avec j’ai, tu as, il a... devant : -é. C’est le passé composé de ${PC_REF}. EN: after avoir, the past participle.` },
    { head: 'parlais, parlait', label: 'l’imparfait, singulier', fr: 'Je parlais avec elle.', sub: '[zhuh par-leh ah-veh-KEL]', body: 'Pas d’avoir devant : c’est l’imparfait. Le sujet choisit -ais ou -ait. EN: no auxiliary means imparfait.' },
    { head: 'parlaient', label: 'l’imparfait, pluriel', fr: 'Ils parlaient trop fort.', sub: '[eel par-leh troh FOR]', body: 'ils, elles, mes parents : -aient. Le son reste [ɛ]. EN: plural subject, -aient, same sound.' },
    { head: 'parlez, parliez', label: 'vous', fr: 'vous parlez · vous parliez', sub: '[voo par-LAY] · [voo par-LYAY]', body: 'parlez : présent. parliez : imparfait, on entend le i. EN: the i sound marks the imparfait.' },
    { head: 'et l’oreille ?', label: '[e] ou [ɛ]', fr: 'parlé · parlais', sub: '[par-LAY] · [par-LEH]', body: 'Beaucoup de gens, à Paris comme à Montréal, les disent presque pareil. Fie-toi au petit mot devant : j’ai. EN: many speakers merge them; trust the auxiliary.' },
  ],
};

const A11_ASTUCES: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a11-astuces',
  layer: 'core',
  title: 'Trois astuces pour bien écrire',
  frSub: 'Avant de choisir la fin',
  sheetId: 'sheet-ortho',
  hacks: [
    { hack: 'Remplace par vendre. EN: swap in vendre.', why: 'vendre, vendu, vendais ne se ressemblent pas. Ils te disent quelle forme écrire : parler, parlé, parlais. EN: vendre’s forms sound different, so they reveal the right one.' },
    { hack: 'Cherche avoir devant le verbe. EN: look for avoir before the verb.', why: 'j’ai, tu as, il a, nous avons : alors c’est parlé. Sinon, c’est l’imparfait. EN: avoir before it means the participle.' },
    { hack: 'Regarde le sujet, pas le son. EN: look at the subject, not the sound.', why: 'je et tu : -ais. il, elle, on : -ait. ils, elles : -aient. EN: the subject picks the ending.' },
  ],
  audio: AUDIO,
  say: 'Trois astuces : vendre, avoir, le sujet.',
  terms: ['homo', 'fins'],
};

const A11_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-construire',
  layer: 'core',
  size: 'lg',
  title: 'Choisis la bonne forme',
  frSub: '-er, -é, -ais, -ait, -aient',
  groups: [
    grp('-er ou -é', [
      it('fr.sons.muettes.036', 'l’infinitif'), it('fr.a2.verbes.552', 'avec avoir'), it(E(543), 'avec avoir'), it(E(545), 'avec avoir'), it(E(549), 'après aimer'), it(E(550), 'après aimer'),
    ], chk('« Hier, j’ai ... avec ma tante. » EN: Yesterday I talked with my aunt.', ['parlé', 'parler', 'parlais'], 0, 'j’ai devant : parlé. Test : j’ai vendu. EN: after j’ai, the participle.')),
    grp('-é ou -ais', [
      it(E(544), 'sans avoir'), it(E(546), 'sans avoir'), it(E(547), 'tu : -ais'), it(E(548), 'ils : -aient'), it(E(1401)), it(E(1405)),
    ], chk('« Quand j’étais petite, je ... wolof. » EN: When I was little, I spoke Wolof.', ['parlé', 'parlais', 'parler'], 1, 'Pas d’avoir, et je : parlais. Test : je vendais. EN: no auxiliary, je: -ais.')),
    ctl('Après un verbe', '« Elle aimait ... . » (danser) EN: She loved to dance.', ['dansé', 'dansait', 'danser'], 2, 'Après aimer : l’infinitif. Test : aimer vendre. EN: infinitive after aimer.'),
  ],
  audio: AUDIO,
  say: 'Remplace par vendre, et regarde avant le verbe.',
  terms: ['homo'],
};

/** CHOOSE, by ear: the auxiliary is the reliable cue, not [e] against [ɛ]. */
const A11_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a11-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Écoute le petit mot devant',
  frSub: 'j’ai, ou pas',
  lines: [ln(E(543)), ln(E(544)), ln(E(545)), ln(E(546)), ln(E(547)), ln(E(549)), ln(E(550)), ln(E(548))],
  questions: [
    { q: 'Ligne 1 : quel petit mot entends-tu avant le verbe ? EN: Which little word do you hear before the verb?', opts: ['je', 'j’ai'], correct: 1, why: 'j’ai, donc parlé. EN: j’ai, so parlé.' },
    { q: 'Ligne 4 : mangé ou mangeais ? EN: mangé or mangeais?', opts: ['mangeais', 'mangé'], correct: 0, why: 'Pas de j’ai : je mangeais. EN: no auxiliary.' },
    { q: 'Ligne 6 : danser s’écrit comment ? EN: How is danser spelled here?', opts: ['danser', 'dansé', 'dansait'], correct: 0, why: 'Après aimait : l’infinitif. EN: infinitive after a verb.' },
    { q: 'Ligne 8 : combien de personnes parlaient ? EN: How many people were talking?', opts: ['une', 'plusieurs'], correct: 1, why: 'ils : plusieurs. La fin ne s’entend pas, le sujet oui. EN: the subject tells you.' },
  ],
  audio: REC('rec-b1-01-homo-ecoute'),
  say: 'Écoute bien le petit mot devant le verbe.',
  terms: ['homo'],
};

/** THE DICTÉE ACT'S dictation: act 11's own letter-mode rows plus one form
 *  from each earlier spelling point, all letters mode. */
const A11_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a11-dictee',
  layer: 'core',
  title: 'La grande dictée',
  frSub: 'Tout ce qu’on n’entend pas',
  itemIds: [...dicteeFor(11), E(1405), E(1408), E(404), E(1416), E(1420), E(1425), E(513), E(528)],
  audio: AUDIO,
  say: 'Écoute, puis écris. Pense au sujet, au e, au ç, aux deux i.',
  terms: ['homo', 'son'],
};

const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a11-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Les formes voisines',
  sheetId: 'sheet-ortho',
  errors: [
    { wrong: 'Hier, j’ai parlais avec elle.', right: 'Hier, j’ai parlé avec elle.', why: 'Avec j’ai, c’est le participe : parlé. EN: after j’ai, the participle.' },
    { wrong: 'Quand j’étais petit, je parlé wolof.', right: 'Quand j’étais petit, je parlais wolof.', why: 'Pas d’avoir devant : imparfait. EN: no auxiliary, so imparfait.' },
    { wrong: 'Elle aimait dansait.', right: 'Elle aimait danser.', why: 'Après un verbe conjugué : l’infinitif. EN: infinitive after a conjugated verb.' },
    { wrong: 'Quand vous étiez petits, vous parlez créole.', right: 'Quand vous étiez petits, vous parliez créole.', why: 'Pour avant : parliez, avec le i. EN: the past needs the i.' },
    { wrong: 'Il a parler longtemps.', right: 'Il a parlé longtemps.', why: 'Test : il a vendu, pas il a vendre. EN: vendu, so parlé.' },
    { wrong: 'Nous voulions parlé.', right: 'Nous voulions parler.', why: 'Test : nous voulions vendre. Donc parler. EN: vendre, so parler.' },
  ],
  audio: AUDIO,
  say: 'Six erreurs de formes voisines.',
  terms: ['homo'],
};

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('avec avoir', '« Hier, nous avons ... tard. » (manger) EN: Yesterday we ate late.', ['mangions', 'mangé', 'manger'], 1, 'avons devant : mangé. EN: after avoir, the participle.'),
  ctl('sans avoir', '« Avant, je ... le bus. » (prendre) EN: Before, I used to take the bus.', ['pris', 'prendre', 'prenais'], 2, 'Pas d’avoir, et je : prenais. EN: imparfait with je.'),
  ctl('l’astuce', 'Pour choisir entre parler et parlé, tu remplaces par : EN: To choose, you swap in:', ['vendre', 'être', 'aller'], 0, 'vendre et vendu ne se ressemblent pas. EN: they sound different.'),
], ['homo']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'L’orthographe contre le son',
    opener: { line: 'parler, parlé, parlais : trois formes presque identiques à l’oreille. Deux astuces suffisent pour choisir la bonne. EN: parler, parlé, parlais: three forms that sound almost alike. Two tricks pick the right one.', imageRef: 'lessons/imparfait/act11.jpg' },
    sections: [],
    milestone: 'parler, parlé, parlais : tu sais laquelle écrire, même quand tu ne l’entends pas. EN: You can pick the right look-alike form.',
    estScreens: 36, restPoints: ['a11-astuces', 'a11-dictee'],
  },
  sections: [A11_HISTOIRE, A11_FORMES, A11_ASTUCES, A11_CONSTRUIRE, A11_ECOUTE, A11_DICTEE, A11_ERREURS, A11_CHECK],
  imports: [...IMPORTED.homophones],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TOUT ENSEMBLE  (integration, production, the graded task, exam)
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, long form (B1: 120-200 words). Every sub-topic of the lesson appears:
 *  être, -ger, -cer, the doubled i, impersonals, pronominals, negation. The
 *  one present-tense question is quoted speech. */
const A12_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Lettre pour les quatre-vingts ans de maman',
  frSub: 'Awa se souvient de tout',
  text: "Chère maman, pour tes quatre-vingts ans, voici mes souvenirs de la maison de Mame. Nous y allions chaque été, en juillet. Il faisait chaud, et il fallait arriver avant midi, parce que le car ne roulait pas l'après-midi. Mame nous attendait devant la porte. Elle commençait toujours par la même phrase : « Vous avez faim ? » Bien sûr, nous avions faim. Nous mangions dans la cour, sous le manguier, et nous partagions un grand plat de thiéboudienne. Mes cousins et moi, nous nous levions tôt et nous nous couchions tard. Le matin, nous voyions les pêcheurs rentrer. L'après-midi, nous étudiions un peu, pour te faire plaisir, mais surtout nous riions. Le soir, il n'y avait pas d'électricité : on s'éclairait avec des lampes, et Mame racontait des histoires. Je ne comprenais pas tout le wolof, mais je croyais tout. Tu disais : « Awa, tu ne dors jamais ! » C'était vrai. Je ne voulais rien manquer.",
  glossary: [
    { word: 'le car', en: 'the coach', note: 'Un grand bus entre deux villes. EN: an intercity bus.' },
    { word: 'roulait', en: 'ran', note: 'rouler : nous roulons, donc roul- + ait. EN: from nous roulons.' },
    { word: 'les pêcheurs', en: 'the fishermen', note: 'Les gens qui vont pêcher en mer. EN: people who fish.' },
    { word: "s'éclairait", en: 'lit things up', note: 'on s’éclairait : on faisait de la lumière. EN: they made light.' },
    { word: 'rien manquer', en: 'miss nothing', note: 'Ne rien rater. EN: not miss a thing.' },
  ],
  questions: [
    { q: 'Trouve un verbe en -ger et un verbe en -cer. EN: Find a -ger verb and a -cer verb.', a: 'mangions, partagions (sans e devant i) ; commençait (ç devant a). EN: e and ç only before a.' },
    { q: 'Trouve deux verbes avec deux i ou y + i. EN: Find two verbs with double i or y + i.', a: 'étudiions, riions, voyions. EN: stem i or y plus -ions.' },
    { q: 'Trouve deux verbes pronominaux et deux négations. EN: Find two reflexive verbs and two negatives.', a: 'nous nous levions, nous nous couchions, on s’éclairait ; il n’y avait pas, je ne comprenais pas, je ne voulais rien. EN: pronoun and ne stay in place.' },
    { q: '« Vous avez faim ? » est au présent. Pourquoi ? EN: Why is this in the present?', a: 'Ce sont les mots de Mame, cités tels quels. EN: it quotes what she said.' },
    { q: 'Quels sont les verbes impersonnels ? EN: Which verbs are impersonal?', a: 'il faisait chaud, il fallait, il n’y avait pas. EN: il stands for nobody.' },
  ],
  audio: REC('rec-b1-01-lettre'),
  say: 'Lis la lettre d’Awa. Tout ce que tu as appris est dedans.',
  terms: ['base', 'etre', 'deuxI'],
};

/** The writing checklist, right before production. Four points: the core cap. */
const A12_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a12-focus',
  layer: 'core',
  title: 'Avant d’écrire, vérifie',
  points: [
    'La base : nous au présent, moins -ons. être : ét-. EN: stem from nous; être is ét-.',
    'La fin : le sujet décide, même quand le son est le même. EN: the subject picks the ending.',
    '-ger, -cer : e ou ç devant a, rien devant i. EN: e or ç before a only.',
    'nous, vous : deux i si la base finit par i ou y. EN: double i after a stem in i or y.',
  ],
  audio: AUDIO,
  say: 'Quatre choses à vérifier avant d’écrire.',
  terms: ['base', 'ger', 'deuxI'],
};

/** MEANING IN PRODUCTION. The learner answers about THEIR OWN childhood; two
 *  alts and a userEn on every turn. No passé composé in any learner line. */
const A12_TALK: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-talk',
  layer: 'core',
  title: 'Ton quartier d’avant',
  frSub: 'Julien te pose des questions',
  setting: 'La pause de midi continue. Julien a montré son quartier, Awa sa maison. Maintenant, c’est ton tour. EN: Now it is your turn to talk about your childhood.',
  turns: [
    {
      ai: 'Et toi, quand tu étais petit ou petite, tu habitais où ?', en: 'And you, when you were little, where did you live?',
      user: "Quand j'étais petit, j'habitais dans un petit village.", userEn: 'When I was little, I lived in a small village. (petite if you are a woman)',
      alts: [{ fr: "J'habitais en ville, dans un appartement.", en: 'I lived in town, in an apartment.' }, { fr: "Quand j'étais petite, j'habitais chez mes grands-parents.", en: 'When I was little, I lived with my grandparents.' }],
    },
    {
      ai: 'Et ta maison, elle était comment ?', en: 'And your house, what was it like?',
      user: 'Elle était petite, mais il y avait un jardin.', userEn: 'It was small, but there was a garden.',
      alts: [{ fr: "C'était un grand appartement au troisième étage.", en: 'It was a big apartment on the third floor.' }, { fr: 'Elle était vieille, et il y avait beaucoup de chambres.', en: 'It was old, and there were lots of bedrooms.' }],
    },
    {
      ai: 'Le dimanche, vous mangiez en famille ?', en: 'On Sundays, did you eat as a family?',
      user: 'Oui, nous mangions chez mes grands-parents.', userEn: 'Yes, we ate at my grandparents’ house. (mangions: no e before i)',
      alts: [{ fr: 'Oui, on mangeait tous ensemble.', en: 'Yes, we all ate together.' }, { fr: 'Non, nous mangions souvent devant la télé.', en: 'No, we often ate in front of the TV.' }],
    },
    {
      ai: "Et l'école, elle commençait à quelle heure ?", en: 'And school, what time did it start?',
      user: "L'école commençait à huit heures.", userEn: 'School started at eight. (commençait: ç before a)',
      alts: [{ fr: 'Elle commençait à huit heures et demie.', en: 'It started at half past eight.' }, { fr: 'Les cours commençaient très tôt.', en: 'Classes started very early.' }],
    },
    {
      ai: 'Tu te levais tôt ?', en: 'Did you get up early?',
      user: 'Oui, je me levais à six heures.', userEn: 'Yes, I got up at six.',
      alts: [{ fr: 'Non, je ne me levais jamais avant huit heures.', en: 'No, I never got up before eight.' }, { fr: 'Oui, et je ne mangeais jamais le matin.', en: 'Yes, and I never ate in the morning.' }],
    },
    {
      ai: 'Tu étudiais beaucoup, le soir ?', en: 'Did you study a lot in the evenings?',
      user: 'Oui, nous étudiions le soir avec ma sœur.', userEn: 'Yes, we studied in the evening with my sister. (étudiions: two i)',
      alts: [{ fr: 'Non, je jouais plutôt dehors.', en: 'No, I played outside instead.' }, { fr: "Oui, j'étudiais tous les soirs.", en: 'Yes, I studied every evening.' }],
    },
    {
      ai: "Et l'hiver, il faisait froid chez toi ?", en: 'And in winter, was it cold where you lived?',
      user: 'Oui, il faisait froid et il neigeait souvent.', userEn: 'Yes, it was cold and it often snowed. (neigeait: e before a)',
      alts: [{ fr: "Non, il faisait chaud toute l'année.", en: 'No, it was hot all year round.' }, { fr: 'Il pleuvait beaucoup, alors il fallait rester dedans.', en: 'It rained a lot, so we had to stay in.' }],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['base', 'ger', 'deuxI'],
};

/** THE LESSON OUTCOME, TESTED OPEN. Draft type; rubric on 10 (Paul: fine).
 *  Every watchFor points at the section that teaches the fix. */
const A12_TASK: TaskSection = {
  type: 'task',
  id: 'a12-task',
  title: 'Quand j’étais petit(e)...',
  frSub: 'Écris ton souvenir',
  brief: 'Comme Awa dans sa lettre, raconte un endroit de ton enfance : une maison, un quartier, une école. Qui était là ? Qu’est-ce que tu faisais ? Quel temps faisait-il ?',
  briefEn: 'Like Awa in her letter, describe a place from your childhood: who was there, what you used to do, what the weather was like.',
  produce: 'Écris un texte de 50 à 80 mots qui commence par « Quand j’étais petit » ou « Quand j’étais petite », avec au moins cinq verbes différents à l’imparfait, dont être et un verbe en -ger ou -cer.',
  responseSpec: { kind: 'text', minWords: 50, maxWords: 80 },
  rubric: {
    criteria: [
      {
        key: 'formation', label: 'Les formes de l’imparfait', maxPoints: 4,
        descriptors: [
          '4 : tous les verbes à l’imparfait ont la bonne base (nous moins -ons, ét- pour être) et la bonne fin pour leur sujet.',
          '3 : une ou deux erreurs de base ou de fin, le reste est correct.',
          '2 : plusieurs erreurs, ou des verbes au présent là où il faut l’imparfait.',
          '1 : l’imparfait est rare ou presque toujours mal formé.',
        ],
      },
      {
        key: 'orthographe', label: 'L’orthographe difficile', maxPoints: 3,
        descriptors: [
          '3 : -ger et -cer sont corrects devant a et devant i, les fins qui sonnent pareil (-ais, -ait, -aient) sont bien écrites, et il y a deux i quand il faut.',
          '2 : une erreur dans ces cas-là.',
          '1 : plusieurs erreurs dans ces cas-là.',
        ],
      },
      {
        key: 'variete', label: 'La variété des verbes', maxPoints: 2,
        descriptors: [
          '2 : au moins cinq verbes différents à l’imparfait, dont être et un verbe en -ger ou -cer, avec au moins deux personnes.',
          '1 : moins de cinq verbes différents, ou il manque être, ou il manque le verbe en -ger ou -cer.',
        ],
      },
      {
        key: 'tache', label: 'La tâche', maxPoints: 1,
        descriptors: [
          '1 : le texte commence par « Quand j’étais petit(e) », parle d’un souvenir d’enfance, et fait entre 50 et 80 mots.',
          '0 : le texte ne parle pas de l’enfance, ou il est trop court ou trop long.',
        ],
      },
    ],
  },
  scaffold: ['Quand j’étais petit(e), j’habitais...', 'Il y avait...', 'Le dimanche, nous...', 'Ma mère / mon père...', 'L’hiver, il faisait...', 'Je ne... jamais...', 'C’était...'],
  modelAnswer: "Quand j'étais petite, j'habitais chez ma grand-mère, à Dakar. La maison avait une grande cour avec un manguier. Le matin, ma grand-mère commençait sa journée très tôt. Nous mangions ensemble dans la cour et nous parlions wolof. L'après-midi, je jouais avec mes cousins dans la rue. Quand il pleuvait, nous restions à l'intérieur et mon grand-père nous racontait des histoires. C'était une vie simple.",
  modelAnswerEn: 'When I was little, I lived with my grandmother in Dakar. The house had a big courtyard with a mango tree. In the morning, my grandmother started her day very early. We ate together in the courtyard and spoke Wolof. In the afternoon, I played with my cousins in the street. When it rained, we stayed inside and my grandfather told us stories. It was a simple life.',
  watchFor: [
    { pattern: 'mangeions, partageions, voyageions (e kept before i)', criterion: 'orthographe', feedback: 'Devant i, le g fait déjà [ʒ] : nous mangions, sans e.', ref: 'a6-regle' },
    { pattern: 'mangait, voyagait, neigait (e missing before a)', criterion: 'orthographe', feedback: 'Devant a, le g a besoin du e : mangeait.', ref: 'a6-piege' },
    { pattern: 'commençions, commencait, commencaient (cedilla on the wrong side)', criterion: 'orthographe', feedback: 'Le ç va devant a (commençait), jamais devant i (commencions).', ref: 'a7-regle' },
    { pattern: 'nous étudions / vous oubliez / nous voyons / nous payons used for a past habit', criterion: 'orthographe', feedback: 'Base en i ou y, fin en i : écris les deux. nous étudiions, nous voyions.', ref: 'a8-regle' },
    { pattern: 'plural subject + -ait, or je/tu + -ait, or il + -ais', criterion: 'orthographe', feedback: 'Ces fins sonnent pareil, mais le sujet choisit : je -ais, il -ait, ils -aient.', ref: 'a3-fins' },
    { pattern: 'je parlé / j’ai parlais / aimait dansait (look-alike forms)', criterion: 'orthographe', feedback: 'Remplace par vendre : vendu, vendais ou vendre ?', ref: 'a11-astuces' },
    { pattern: 'je sommais, nous sommions, j’étions, il été', criterion: 'formation', feedback: 'être a sa propre base : ét-. j’étais, nous étions.', ref: 'a5-etre' },
    { pattern: 'je boivais, je prendais, je croiais, je fesais, j’écrisais (stem not from nous)', criterion: 'formation', feedback: 'Pars de nous : nous buvons, buv- ; nous prenons, pren- ; nous faisons, fais-.', ref: 'a4-idee' },
    { pattern: 'je finais, nous choisions (stem from the infinitive)', criterion: 'formation', feedback: 'nous finissons : la base est finiss-.', ref: 'a2-recette' },
    { pattern: 'il y avaient, il fallais, il pleuvais', criterion: 'formation', feedback: 'Les impersonnels restent avec il : il y avait, il fallait.', ref: 'a9-formes' },
    { pattern: 'je levais (pronoun dropped), je mangeais ne pas, il n’y avait pas personne', criterion: 'formation', feedback: 'Le pronom et ne... pas restent à leur place : je me levais, je ne mangeais pas.', ref: 'a10-pronoms' },
    { pattern: 'present tense where the text describes the past (j’habite, il y a, c’est)', criterion: 'formation', feedback: 'Le présent dit que c’est encore vrai. Pour ton enfance, utilise l’imparfait.', ref: 'a1-scene' },
    { pattern: 'fewer than five distinct imparfait verbs, or no être, or no -ger/-cer verb', criterion: 'variete', feedback: 'Il faut au moins cinq verbes différents, avec être et un verbe comme manger ou commencer.', ref: 'a4-flash' },
    { pattern: 'under 50 or over 80 words, or not about childhood', criterion: 'tache', feedback: 'Vérifie la longueur (50 à 80 mots) et le sujet : un souvenir d’enfance.', ref: 'a12-task' },
  ],
  graderNotes: [
    'Formative lesson task, not an exam: judge the criteria and quote the learner’s own forms back. Never report a band.',
    'Do NOT penalise correctly formed passé composé; the usage contrast belongs to lesson 3 in B1 and lesson 4 in B1. Only mark a present tense used for the past.',
    'Count distinct imparfait VERBS, not tokens. il y avait counts as avoir.',
    'on + imparfait (on mangeait) is correct and counts.',
    'Accents: do not deduct for a missing é unless it makes another word. The cedilla on -cer DOES count (orthographe).',
    'petit/petite: accept either, and never comment on the learner’s gender.',
  ],
};

/** skill 'speak' needs voiceflash on every item. */
const SPEAK_IDS = [
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash') && r.kind === 'sentence').map((r) => r.id),
  ...IMPORTED.presentNous, ...IMPORTED.presentIrregular, ...IMPORTED.presentGerCer,
].filter((id) => !NOT_SPEAKABLE.includes(id));

const A12_SPEAK: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-speak',
  layer: 'core',
  title: 'Dis-le à voix haute',
  frSub: 'Les phrases de toute la leçon',
  skill: 'speak',
  itemIds: SPEAK_IDS,
  audio: AUDIO,
  say: 'Dis chaque phrase à voix haute.',
  terms: ['son'],
};

/** The one-screen recap in the flow (rows with tap-to-open detail). The full
 *  paradigms are in the reference sheets. */
const A12_RECAP: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a12-recap',
  layer: 'core',
  title: 'Toute la leçon, en huit lignes',
  sheetId: 'sheet-recette',
  rows: [
    { k: 'La recette', v: 'nous − ons + fin', say: 'nous parlons, parl-, je parlais', detail: { title: 'La recette', body: `${REFRAME} Ça marche pour presque tous les verbes. EN: ${REFRAME_EN}`, say: 'je parlais' } },
    { k: 'Les fins', v: '-ais -ais -ait -ions -iez -aient', say: 'je parlais, nous parlions', detail: { title: 'Six fins, quatre sons pareils', body: '-ais, -ait, -aient se disent [ɛ]. -ions et -iez s’entendent. EN: four endings sound alike.', say: 'ils parlaient' } },
    { k: 'Irréguliers', v: 'fais-, pren-, buv-, voy-...', say: 'je faisais, je buvais', detail: { title: 'Irréguliers au présent', body: 'Ils suivent la recette ici. faisais se dit [fə.zɛ]. EN: regular in the imparfait.', say: 'je faisais' } },
    { k: 'être', v: 'ét-', say: "j'étais, c'était", detail: { title: 'La seule exception', body: 'nous sommes n’a pas de -ons. Base : ét-. EN: the one exception.', say: "c'était" } },
    { k: '-ger, -cer', v: 'mangeais / mangions', say: 'je mangeais, nous mangions', detail: { title: 'Devant a, devant i', body: 'e ou ç devant a. Rien devant i. EN: e or ç before a only.', say: 'je commençais, nous commencions' } },
    { k: 'Deux i', v: 'étudiions, voyions', say: 'nous étudiions, nous voyions', detail: { title: 'Base en i ou y', body: 'nous et vous : deux i, ou y puis i. EN: double i with nous and vous.', say: 'nous payions' } },
    { k: 'Impersonnels', v: 'il y avait, il fallait', say: 'il y avait, il faisait froid', detail: { title: 'il = personne', body: 'Toujours au singulier : il y avait des arbres. EN: always singular.', say: 'il neigeait' } },
    { k: 'Petits mots', v: 'je me levais, je ne savais pas', say: 'je me levais, je ne savais pas', detail: { title: 'Ils ne bougent pas', body: 'Pronom et négation à la même place qu’au présent. EN: same word order as the present.', say: "il n'y avait personne" } },
  ],
  audio: AUDIO,
  say: 'Toute la leçon, en huit lignes.',
  terms: ['base', 'fins', 'etre'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: 'Tu sais fabriquer l’imparfait de presque tous les verbes avec une seule recette, et tu connais la seule exception. Le plus difficile, ce n’est pas la recette : c’est l’orthographe. Quatre formes sonnent pareil, et -ger, -cer, les deux i et les formes voisines ne s’entendent pas. Ces erreurs ne gênent pas à l’oral, donc personne ne te corrigera. Relis ton texte et cherche : le sujet et sa fin, le e ou le ç devant a, les deux i. EN: the recipe is easy; the errors hide in spelling, and nobody will correct them aloud.',
  stats: [
    { k: 'La recette', v: 'nous, moins -ons, plus la fin' },
    { k: 'Une exception', v: 'être : ét-' },
    { k: 'Même son', v: '-ais, -ait, -aient' },
    { k: 'À surveiller', v: '-ger, -cer, deux i, -é/-ais' },
  ],
  audio: AUDIO,
  say: 'Avant l’examen, un point sur ce que tu sais.',
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, 11 rounds of 8, one round per sub-topic (acts 2-11) plus an
 *  integration round. Each round's FIRST target is a distinct errorTrigger,
 *  so a failed round fires that round's own drill.
 *
 *  -cer is tested by mcq and listenChoose ONLY (fold() strips the cedilla,
 *  and an errorSpot would accept the error). -é is tested by mcq (fold turns
 *  parlé into parle). Everything else that differs by letters is typeable. */

type QQ = QuizQuestion;
/** The card each typeIn shows above its input (brief: typeIn needs `prompt`),
 *  keyed by answer: the house « verbe · personne » cue, or the gapped line. */
const TYPEIN_PROMPT: Record<string, string> = {
  'nous cherchions': 'chercher · nous', 'ils finissaient': 'finir · ils', 'je vendais': 'vendre · je', 'tu attendais': 'attendre · tu',
  'ils parlaient': 'parler · ils', 'tu habitais': 'habiter · tu', 'on jouait': 'jouer · on', 'je prenais': 'prendre · je',
  'je buvais': 'boire · je', 'nous faisions': 'faire · nous', 'ils venaient': 'venir · ils', "j'étais": 'être · je',
  'nous étions': 'être · nous', 'ils étaient': 'être · ils', 'je mangeais': 'manger · je', 'nous mangions': 'manger · nous',
  'ils nageaient': 'nager · ils', 'tu voyageais': 'voyager · tu', 'nous étudiions': 'étudier · nous', 'vous oubliiez': 'oublier · vous',
  'nous riions': 'rire · nous', 'nous envoyions': 'envoyer · nous', 'il y avait': 'il y a · imparfait', 'il fallait': 'il faut · imparfait',
  'il neigeait': 'il neige · imparfait', 'il pleuvait': 'il pleut · imparfait', 'je me levais': 'se lever · je',
  'nous nous promenions': 'se promener · nous', 'je ne savais pas': 'savoir · je · négatif',
  parlais: 'Quand j’étais petite, je ... wolof.', danser: 'Elle aimait ... .', 'étais': 'Quand j’... petite, j’habitais à Dakar.',
  'je mettais': 'mettre · je', 'nous dormions': 'dormir · nous',
};
const tI = (q: string, answer: string, why: string, ref: string): QQ => {
  const prompt = TYPEIN_PROMPT[answer];
  if (!prompt) throw new Error(`b1.01: typeIn "${answer}" has no prompt`);
  return { format: 'typeIn', q, prompt, answer, accept: [answer], why, ref };
};
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ => ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (q: string, prompt: string, answer: string, why: string, ref: string): QQ => ({ format: 'errorSpot', q, prompt, answer, accept: [answer], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ => ({ format: 'listenChoose', q, say, opts, correct, why, ref });
const FIX = 'Une forme est fausse. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.';

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a12-quiz',
  layer: 'core',
  title: 'L’examen',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-base', label: 'La base nous', targets: ['nous-stem'],
      questions: [
        tI('chercher. Présent : nous cherchons. Écris avec nous, à l’imparfait. EN: Write the nous imparfait.', 'nous cherchions', 'cherch- + ions. EN: cherch- plus -ions.', 'a2-construire'),
        tI('finir, avec ils, à l’imparfait. EN: finir with ils.', 'ils finissaient', 'nous finissons : finiss- + aient. EN: keep -iss-.', 'a2-recette'),
        tI('vendre, avec je, à l’imparfait. EN: vendre with je.', 'je vendais', 'nous vendons : vend- + ais. EN: vend- plus -ais.', 'a2-bases'),
        mc('nous choisissons. Quelle est la base de l’imparfait ? EN: What is the stem?', ['chois-', 'choisir-', 'choisiss-'], 2, 'Coupe -ons : choisiss-. EN: cut -ons.', 'a2-bases'),
        mc('Pour trouver la base, tu pars de quelle forme ? EN: Which form do you start from?', ['l’infinitif', 'le présent avec je', 'le présent avec nous'], 2, 'Toujours nous au présent. EN: always the present nous form.', 'a2-recette'),
        eS(FIX, 'Le soir, je finais mes devoirs.', 'Le soir, je finissais mes devoirs.', 'nous finissons : finiss-. EN: keep -iss-.', 'a2-pieges'),
        tI('attendre, avec tu, à l’imparfait. EN: attendre with tu.', 'tu attendais', 'attend- + ais. EN: attend- plus -ais.', 'a2-construire'),
        lC('Écoute. Avant ou maintenant ? EN: Listen: before or now?', 'Nous regardions la télé le samedi.', ['avant', 'maintenant'], 0, 'regardions : on entend [jɔ̃]. EN: you hear [jɔ̃].', 'a2-ecoute'),
      ],
    },
    {
      id: 'r2-fins', label: 'Les six fins', targets: ['ending-spelling'],
      questions: [
        tI('parler, avec ils. EN: parler with ils.', 'ils parlaient', 'ils : -aient. On l’entend comme -ais. EN: -aient, sounds like -ais.', 'a3-fins'),
        tI('habiter, avec tu. EN: habiter with tu.', 'tu habitais', 'tu : -ais, comme je. EN: -ais like je.', 'a3-fins'),
        eS(FIX, 'Mes cousins jouait dans la rue.', 'Mes cousins jouaient dans la rue.', 'Sujet pluriel : -aient. EN: plural subject.', 'a3-erreurs'),
        mc('je parlais, tu parlais, il parlait, ils parlaient : combien sonnent pareil ? EN: How many sound the same?', ['deux', 'trois', 'les quatre'], 2, 'Les quatre : [paʁ.lɛ]. EN: all four.', 'a3-son'),
        lC('Écoute. Présent ou imparfait ? EN: Present or imparfait?', 'Nous parlions français.', ['présent', 'imparfait'], 1, 'On entend [jɔ̃]. EN: you hear [jɔ̃].', 'a3-son'),
        lC('Écoute encore. Présent ou imparfait ? EN: Again: present or imparfait?', 'Nous parlons français.', ['présent', 'imparfait'], 0, '[ɔ̃], sans i. EN: no i sound.', 'a3-son'),
        tI('jouer, avec on. EN: jouer with on.', 'on jouait', 'on prend -ait. EN: on takes -ait.', 'a3-construire'),
        mc('Quelle fin pour vous ? EN: Which ending for vous?', ['-ez', '-iez', '-aient'], 1, '-iez. -ez, c’est le présent. EN: -ez is the present.', 'a3-fins'),
      ],
    },
    {
      id: 'r3-irreg', label: 'Les irréguliers', targets: ['irreg-stem'],
      questions: [
        tI('prendre. Présent : nous prenons. Écris avec je. EN: prendre with je.', 'je prenais', 'pren-, un seul n, sans d. EN: one n, no d.', 'a4-idee'),
        tI('boire, avec je. EN: boire with je.', 'je buvais', 'nous buvons : buv-. EN: from buvons.', 'a4-pieges'),
        tI('faire, avec nous. EN: faire with nous.', 'nous faisions', 'fais- + ions. On dit [fə]. EN: said [fə].', 'a4-idee'),
        mc('nous écrivons. Quelle base ? EN: Which stem?', ['écri-', 'écrir-', 'écriv-'], 2, 'écriv-, avec le v de nous. EN: keep the v.', 'a4-exemples'),
        tI('venir, avec ils. EN: venir with ils.', 'ils venaient', 'ven- + aient. EN: ven- plus -aient.', 'a4-construire'),
        eS(FIX, 'Quand j’étais petit, je boivais du lait.', 'Quand j’étais petit, je buvais du lait.', 'Pars de nous buvons. EN: from buvons.', 'a4-pieges'),
        mc('savoir, avec ils. EN: savoir with ils.', ['ils sachaient', 'ils savent', 'ils savaient'], 2, 'nous savons : sav-. ils savent est le présent. EN: sav-.', 'a4-pieges'),
        lC('Écoute. C’est quel verbe ? EN: Which verb is it?', 'Je connaissais tous les voisins.', ['connaître', 'conduire', 'courir'], 0, 'nous connaissons : connaiss-. EN: from connaissons.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r4-etre', label: 'Être', targets: ['etre-stem'],
      questions: [
        tI('être, avec je, à l’imparfait. EN: être with je.', "j'étais", 'ét- + ais, et j’ devant la voyelle. EN: ét- with elision.', 'a5-etre'),
        tI('être, avec nous. EN: être with nous.', 'nous étions', 'ét- + ions. EN: ét- plus -ions.', 'a5-etre'),
        mc('nous sommes ne finit pas par -ons. Quelle est la base ? EN: What is the stem?', ['ét-', 'somm-', 'êt-'], 0, 'ét-, avec é. EN: ét-, acute accent.', 'a5-etre'),
        eS(FIX, 'Ce était une belle maison.', 'C’était une belle maison.', 'ce devient c’ devant é. EN: elision.', 'a5-erreurs'),
        tI('être, avec ils. EN: être with ils.', 'ils étaient', 'ét- + aient. EN: ét- plus -aient.', 'a5-construire'),
        eS(FIX, 'Nous étaient six à la maison.', 'Nous étions six à la maison.', 'nous : -ions. EN: nous takes -ions.', 'a5-erreurs'),
        mc('« Il ... malade. » (être, imparfait) EN: He was ill.', ['été', 'étais', 'était'], 2, 'il : -ait. été est le participe. EN: été is the participle.', 'a5-erreurs'),
        lC('Écoute. Combien de personnes ? EN: How many people?', 'Mes parents étaient contents.', ['une', 'plusieurs'], 1, 'mes parents : plusieurs. EN: plural.', 'a5-ecoute'),
      ],
    },
    {
      id: 'r5-ger', label: '-ger', targets: ['ger'],
      questions: [
        tI('manger, avec je. EN: manger with je.', 'je mangeais', 'Devant a : e. EN: e before a.', 'a6-regle'),
        tI('manger, avec nous. EN: manger with nous.', 'nous mangions', 'Devant i : pas de e. EN: no e before i.', 'a6-regle'),
        tI('nager, avec ils. EN: nager with ils.', 'ils nageaient', '-aient commence par a : e. EN: e before a.', 'a6-construire'),
        eS(FIX, 'Nous mangeions dans la cour.', 'Nous mangions dans la cour.', 'Le e ne sert que devant a et o. EN: e only before a and o.', 'a6-piege'),
        mc('partager, avec vous. EN: partager with vous.', ['vous partageiez', 'vous partagez', 'vous partagiez'], 2, 'Devant i, pas de e. vous partagez est le présent. EN: no e before i.', 'a6-piege'),
        mc('Pourquoi mangeais a un e ? EN: Why the e in mangeais?', ['pour garder le son [ʒ] devant a', 'pour marquer le passé', 'pour le pluriel'], 0, 'C’est une règle de son. EN: a sound rule.', 'a6-regle'),
        tI('voyager, avec tu. EN: voyager with tu.', 'tu voyageais', 'Devant a : e. EN: e before a.', 'a6-construire'),
        eS(FIX, 'Le quartier changait vite.', 'Le quartier changeait vite.', 'Devant a : e. EN: e before a.', 'a6-piege'),
      ],
    },
    {
      id: 'r6-cer', label: '-cer', targets: ['cer'],
      questions: [
        mc('commencer, avec je. Quelle orthographe ? EN: Which spelling?', ['je commencais', 'je commenceais', 'je commençais'], 2, 'Devant a : ç. EN: ç before a.', 'a7-regle'),
        mc('commencer, avec nous. EN: commencer with nous.', ['nous commençions', 'nous commenceions', 'nous commencions'], 2, 'Devant i : c. EN: plain c before i.', 'a7-regle'),
        mc('lancer, avec ils. EN: lancer with ils.', ['ils lançaient', 'ils lancaient', 'ils lanceaient'], 0, '-aient commence par a : ç. EN: ç before a.', 'a7-construire'),
        mc('placer, avec vous. EN: placer with vous.', ['vous plaçiez', 'vous placiez', 'vous placez'], 1, 'Devant i : c. La troisième est le présent. EN: plain c before i.', 'a7-piege'),
        mc('Quelle phrase est bien écrite ? EN: Which sentence is spelled right?', ['La radio annoncait la pluie.', 'La radio annonçait la pluie.', 'La radio annonçaient la pluie.'], 1, 'ç devant a, et -ait pour la radio. EN: ç and -ait.', 'a7-construire'),
        mc('Pourquoi pas de ç dans commencions ? EN: Why no ç in commencions?', ['devant i, c fait déjà [s]', 'parce que c’est nous', 'c’est une exception'], 0, 'ci se lit [si]. EN: ci already reads [si].', 'a7-regle'),
        lC('Écoute. Avant ou maintenant ? EN: Before or now?', 'Nous commencions à huit heures.', ['avant', 'maintenant'], 0, '[jɔ̃] : imparfait. EN: you hear [jɔ̃].', 'a7-ecoute'),
        lC('Écoute encore. Avant ou maintenant ? EN: Again: before or now?', 'Nous commençons à huit heures.', ['avant', 'maintenant'], 1, '[ɔ̃] : présent. EN: present.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r7-deux-i', label: 'Les deux i', targets: ['ii-doubling'],
      questions: [
        tI('étudier, avec nous, à l’imparfait. EN: étudier with nous.', 'nous étudiions', 'étudi- + ions : deux i. EN: double i.', 'a8-regle'),
        tI('oublier, avec vous, à l’imparfait. EN: oublier with vous.', 'vous oubliiez', 'oubli- + iez : deux i. EN: double i.', 'a8-regle'),
        tI('rire, avec nous, à l’imparfait. EN: rire with nous.', 'nous riions', 'ri- + ions. EN: ri- plus -ions.', 'a8-construire'),
        mc('voir, avec nous, à l’imparfait. EN: voir with nous.', ['nous voyons', 'nous voiions', 'nous voyions'], 2, 'voy- + ions. La première est le présent. EN: y then i.', 'a8-regle'),
        eS(FIX, 'En 2002, nous étudions à Québec.', 'En 2002, nous étudiions à Québec.', 'Avant : étudi- + ions. EN: two i’s.', 'a8-erreurs'),
        mc('étudier, avec je. EN: étudier with je.', ['j’étudiiais', 'j’étudiais', 'j’étudais'], 1, 'Avec je : un seul i. EN: one i with je.', 'a8-regle'),
        tI('envoyer, avec nous, à l’imparfait. EN: envoyer with nous.', 'nous envoyions', 'envoy- + ions. EN: y then i.', 'a8-construire'),
        lC('Écoute. Présent ou imparfait ? EN: Present or imparfait?', 'Nous étudiions le soir.', ['présent', 'imparfait'], 1, 'Une syllabe de plus : [di.jɔ̃]. EN: an extra syllable.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r8-impers', label: 'Les impersonnels', targets: ['impersonal'],
      questions: [
        tI('il y a, à l’imparfait. EN: il y a in the imparfait.', 'il y avait', 'De avoir : av- + ait. EN: from avoir.', 'a9-formes'),
        tI('falloir, à l’imparfait. EN: falloir in the imparfait.', 'il fallait', 'À apprendre entier. EN: learn it whole.', 'a9-formes'),
        tI('neiger, à l’imparfait. EN: neiger in the imparfait.', 'il neigeait', '-ger : e devant a. EN: e before a.', 'a9-formes'),
        eS(FIX, 'Il y avaient beaucoup de monde.', 'Il y avait beaucoup de monde.', 'Toujours au singulier. EN: always singular.', 'a9-erreurs'),
        mc('faire beau, à l’imparfait. EN: faire beau in the imparfait.', ['il fesait beau', 'il faisais beau', 'il faisait beau'], 2, 'fais- + ait. EN: fais- plus -ait.', 'a9-formes'),
        mc('« Il ... mieux partir tôt. » EN: It was better to leave early.', ['valais', 'vallait', 'valait'], 2, 'il : -ait, un seul l. EN: one l, -ait.', 'a9-usages'),
        tI('pleuvoir, à l’imparfait. EN: pleuvoir in the imparfait.', 'il pleuvait', 'il pleuvait, à apprendre entier. EN: learn it whole.', 'a9-formes'),
        lC('Écoute. Avant ou maintenant ? EN: Before or now?', 'Il neigeait de novembre à avril.', ['avant', 'maintenant'], 0, 'neigeait : imparfait. EN: imparfait.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r9-petits-mots', label: 'Pronoms et négation', targets: ['pron-neg'],
      questions: [
        tI('se lever, avec je, à l’imparfait. EN: se lever with je.', 'je me levais', 'Le pronom reste devant. EN: pronoun before the verb.', 'a10-pronoms'),
        tI('se promener, avec nous. EN: se promener with nous.', 'nous nous promenions', 'Deux fois nous, et -ions. EN: two nous.', 'a10-pronoms'),
        tI('savoir, avec je, à la forme négative. EN: savoir with je, negative.', 'je ne savais pas', 'ne devant, pas derrière. EN: ne before, pas after.', 'a10-negation'),
        eS(FIX, 'Je me ennuyais en classe.', 'Je m’ennuyais en classe.', 'me devient m’ devant une voyelle. EN: elision.', 'a10-piege'),
        mc('Quelle phrase est correcte ? EN: Which sentence is correct?', ['Il n’y avait pas personne.', 'Il y avait ne personne.', 'Il n’y avait personne.'], 2, 'personne remplace pas. EN: personne replaces pas.', 'a10-negation'),
        mc('se voir, avec on. EN: se voir with on.', ['on se voyaient', 'on se voyions', 'on se voyait'], 2, 'on : -ait. EN: on takes -ait.', 'a10-pronoms'),
        eS(FIX, 'Nous sortions ne pas le soir.', 'Nous ne sortions pas le soir.', 'ne devant le verbe, pas après. EN: word order.', 'a10-piege'),
        lC('Écoute. Koffi mangeait le matin ? EN: Did Koffi eat in the morning?', 'Le matin, je ne mangeais jamais.', ['oui', 'non'], 1, 'ne... jamais : jamais. EN: never.', 'a10-ecoute'),
      ],
    },
    {
      id: 'r10-voisines', label: 'Les formes voisines', targets: ['look-alike'],
      questions: [
        mc('« Hier, j’ai ... avec elle. » EN: Yesterday I talked with her.', ['parler', 'parlé', 'parlais'], 1, 'j’ai devant : parlé. EN: after j’ai, the participle.', 'a11-formes'),
        tI('Complète : « Quand j’étais petite, je ... wolof. » (parler) EN: Fill in the gap.', 'parlais', 'Pas d’avoir, et je : -ais. EN: imparfait with je.', 'a11-construire'),
        tI('Complète : « Elle aimait ... . » (danser) EN: Fill in the gap.', 'danser', 'Après un verbe : l’infinitif. EN: infinitive.', 'a11-astuces'),
        eS(FIX, 'Il a parler longtemps.', 'Il a parlé longtemps.', 'Test : il a vendu. EN: vendu, so parlé.', 'a11-astuces'),
        eS(FIX, 'Quand j’étais petit, je parlé wolof.', 'Quand j’étais petit, je parlais wolof.', 'Test : je vendais. EN: vendais, so parlais.', 'a11-erreurs'),
        lC('Écoute. Tu entends j’ai ? EN: Do you hear j’ai?', "J'ai mangé à midi.", ['oui, donc mangé', 'non, donc mangeais'], 0, 'j’ai : participe. EN: participle.', 'a11-ecoute'),
        lC('Écoute encore. Tu entends j’ai ? EN: Again: do you hear j’ai?', 'Je mangeais à midi.', ['oui, donc mangé', 'non, donc mangeais'], 1, 'Pas de j’ai : imparfait. EN: imparfait.', 'a11-ecoute'),
        mc('Pour choisir entre parler et parlé, tu remplaces par : EN: To choose, you swap in:', ['vendre', 'être', 'aller'], 0, 'vendre, vendu : on entend la différence. EN: you can hear vendre/vendu.', 'a11-astuces'),
      ],
    },
    {
      id: 'r11-tout', label: 'Tout ensemble', targets: ['wrong-tense'],
      questions: [
        mc('Une photo de 1995. « Ma grand-mère ... là. » Elle n’y habite plus. EN: She no longer lives there.', ['habite', 'habitait', 'habitent'], 1, 'La vie d’avant : habitait. EN: past life, imparfait.', 'a1-scene'),
        tI('Complète : « Quand j’... petite, j’habitais à Dakar. » (être) EN: Fill in the gap.', 'étais', 'j’étais : ét- + ais. EN: ét- plus -ais.', 'a5-etre'),
        eS('Awa parle de son enfance. Écris la phrase correcte. EN: Awa is talking about her childhood; correct the sentence.', 'Quand je suis petite, j’habite à Dakar.', 'Quand j’étais petite, j’habitais à Dakar.', 'Le présent dit que c’est encore vrai. EN: the present means still true.', 'a1-scene'),
        tI('mettre, avec je, à l’imparfait. EN: mettre with je.', 'je mettais', 'nous mettons : mett-. EN: from mettons.', 'a4-exemples'),
        mc('Laquelle parle de maintenant ? EN: Which one is about now?', ['Avant, je buvais du café.', 'Maintenant, je bois du thé.', 'Je buvais du lait tous les matins.'], 1, 'je bois : présent. EN: present.', 'a4-ecoute'),
        tI('dormir, avec nous, à l’imparfait. EN: dormir with nous.', 'nous dormions', 'dorm- + ions. EN: dorm- plus -ions.', 'a4-construire'),
        mc('« Avant de dormir, je ... » C’est une habitude d’aujourd’hui. EN: A habit today.', ['lis', 'lisais', 'lisaient'], 0, 'avant ne décide rien : le sens, oui. EN: the meaning decides, not avant.', 'a1-reperer'),
        lC('Écoute. Avant ou maintenant ? EN: Before or now?', "Aujourd'hui, j'habite à Montréal.", ['avant', 'maintenant'], 1, 'j’habite : présent. EN: present.', 'a1-reperer'),
      ],
    },
  ],
  audio: AUDIO,
  say: 'L’examen. Onze parties, une par étape.',
};

const A12_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a12-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'parler · nous', back: 'nous parlions', say: 'nous parlions' },
    { front: 'parler · ils', back: 'ils parlaient', say: 'ils parlaient' },
    { front: 'finir · je', back: 'je finissais', say: 'je finissais' },
    { front: 'faire · je', back: 'je faisais', say: 'je faisais' },
    { front: 'boire · je', back: 'je buvais', say: 'je buvais' },
    { front: 'être · je', back: "j'étais", say: "j'étais" },
    { front: 'manger · nous', back: 'nous mangions', say: 'nous mangions' },
    { front: 'commencer · je', back: 'je commençais', say: 'je commençais' },
    { front: 'étudier · nous', back: 'nous étudiions', say: 'nous étudiions' },
    { front: 'il y a · avant', back: 'il y avait', say: 'il y avait' },
    { front: 'se lever · je', back: 'je me levais', say: 'je me levais' },
    { front: 'savoir · je · négatif', back: 'je ne savais pas', say: 'je ne savais pas' },
  ],
  audio: AUDIO,
  say: 'Une dernière fois, les formes clés.',
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-roundup',
  layer: 'core',
  title: 'Une recette, et l’œil pour l’orthographe',
  body: `${REFRAME} Ça marche pour presque tous les verbes, même les irréguliers du présent. La leçon suivante explique quand utiliser l’imparfait : ici, tu as appris à le fabriquer et à l’écrire. EN: ${REFRAME_EN} Next lesson: when to use it.`,
  points: [
    'être est le seul verbe à part : ét-. EN: être alone is different.',
    'Devant a : mangeais, commençais. Devant i : mangions, commencions. EN: e or ç before a only.',
    'Base en i ou y + -ions, -iez : deux i. EN: double i with nous and vous.',
    'Quatre formes sonnent [ɛ] : le sujet dit qui, l’orthographe suit. EN: the subject decides the spelling.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['etre', 'ger', 'deuxI'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Tout ensemble',
    opener: { line: 'Tu mets tout ensemble : une longue lecture, une conversation, ton propre souvenir d’enfance, puis l’examen. EN: Everything together: a long read, a conversation, your own childhood memory, then the exam.', imageRef: 'lessons/imparfait/act12.jpg' },
    sections: [],
    milestone: 'Tu as raconté ton enfance, passé l’examen, et tu fabriques l’imparfait de n’importe quel verbe. EN: You told your childhood story and passed the exam.',
    estScreens: 150, restPoints: ['a12-lecture', 'a12-talk', 'a12-task', 'a12-recap', 'a12-progress', 'a12-quiz/r4-etre', 'a12-quiz/r8-impers'],
  },
  sections: [A12_LECTURE, A12_FOCUS, A12_TALK, A12_TASK, A12_SPEAK, A12_RECAP, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP],
  imports: [],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Each is the first resolving
 *  target of exactly one quiz round. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-avant', title: 'Maintenant ou avant', format: 'flashcard' as const, coach: 'Lis la phrase. Elle parle d’aujourd’hui ou d’avant ? Dis-la avec la bonne forme. EN: Today or before? Say it with the right form.', items: [E(1461), E(1462), E(1441), E(1440), E(1442), 'fr.a2.verbes.103'], audio: AUDIO },
  { id: 'd-stem', title: 'Retrouve la base', format: 'mcq' as const, coach: 'Dis le verbe avec nous, au présent. Coupe -ons. Ce qui reste, c’est la base. EN: Say nous, cut -ons: that is the stem.', q: 'nous finissons. Avec je : EN: With je:', opts: ['je finais', 'je finissais', 'je finissait'], correct: 1, why: 'finiss- + ais. EN: keep -iss-, and je takes -ais.', items: [E(1406), E(404), E(405), E(407), E(409), 'fr.a2.verbes.184'], audio: AUDIO },
  { id: 'd-endings', title: 'Le sujet choisit la fin', format: 'mcq' as const, coach: 'Tu entends la même chose. Regarde le sujet, et écris sa fin. EN: Same sound; the subject picks the spelling.', q: 'Mes parents ... un dépanneur. EN: My parents had a corner store.', opts: ['avait', 'avais', 'avaient'], correct: 2, why: 'Mes parents = ils : -aient. EN: plural subject.', items: [E(1401), E(414), E(1402), E(1405), E(1459), E(1470)], audio: AUDIO },
  { id: 'd-irreg', title: 'Irrégulier ? Pars de nous', format: 'mcq' as const, coach: 'Oublie je bois, je prends. Dis nous buvons, nous prenons. EN: Forget the je form; say the nous form.', q: 'nous prenons. Avec je : EN: With je:', opts: ['je prenais', 'je prendais', 'je prennais'], correct: 0, why: 'pren- : un n, pas de d. EN: one n, no d.', items: [E(1408), E(440), E(1409), E(430), E(434), E(436)], audio: AUDIO },
  { id: 'd-etre', title: 'ét-', format: 'flashcard' as const, coach: 'être est le seul verbe à part. Dis ét-, puis la fin. EN: être alone uses ét-.', items: [E(1416), E(465), E(466), E(1417), E(467), E(1418)], audio: AUDIO },
  { id: 'd-ger', title: 'Un e, ou rien', format: 'sort' as const, coach: 'Deux piles. Regarde la lettre après le g : a, ou i ? EN: Sort by the letter after g.', buckets: ['devant a : e', 'devant i : rien'], items: [E(1420), E(1421), E(475), E(474), E(1422), E(481)], audio: AUDIO },
  { id: 'd-cer', title: 'Une cédille, ou rien', format: 'sort' as const, coach: 'Deux piles. Regarde la lettre après le c : a, ou i ? EN: Sort by the letter after c.', buckets: ['devant a : ç', 'devant i : c'], items: [E(1423), E(1424), E(489), E(488), E(1425), E(494)], audio: AUDIO },
  { id: 'd-ii', title: 'Deux i', format: 'mcq' as const, coach: 'La base finit par i ou y ? La fin commence par i ? Écris les deux. EN: Stem in i or y plus -ions: write both.', q: 'étudier, avec nous : EN: étudier with nous:', opts: ['nous étudions', 'nous étudiions', 'nous étudiyons'], correct: 1, why: 'étudi- + ions. La première est le présent. EN: the first is the present.', items: [E(1426), E(1427), E(1428), E(1429), E(1411), E(503)], audio: AUDIO },
  { id: 'd-impers', title: 'Avec il', format: 'mcq' as const, coach: 'il ne représente personne. Il prend toujours -ait. EN: impersonal il always takes -ait.', q: '« Il y ... des arbres. » EN: There were trees.', opts: ['avaient', 'avait', 'étaient'], correct: 1, why: 'il y avait, toujours au singulier. EN: always singular.', items: [E(1432), E(1431), E(1430), E(513), E(515), E(516)], audio: AUDIO },
  { id: 'd-pronneg', title: 'Les petits mots', format: 'mcq' as const, coach: 'Le pronom et ne restent devant le verbe. pas va derrière. EN: pronoun and ne before, pas after.', q: 'Quelle phrase est correcte ? EN: Which is correct?', opts: ['Je levais me tôt.', 'Je me ne levais pas tôt.', 'Je ne me levais pas tôt.'], correct: 2, why: 'ne, puis me, puis le verbe, puis pas. EN: ne, pronoun, verb, pas.', items: [E(523), E(526), E(528), E(529), E(531), E(532)], audio: AUDIO },
  { id: 'd-homo', title: 'vendre, vendu, vendais', format: 'mcq' as const, coach: 'Remplace par vendre. Ce que tu entends te dit quoi écrire. EN: Swap in vendre and listen.', q: '« Tu as ... ta tante ? » (appeler) EN: Did you call your aunt?', opts: ['appelé', 'appeler', 'appelais'], correct: 0, why: 'Tu as vendu : appelé. EN: vendu, so the participle.', items: [E(543), E(544), E(545), E(546), E(549), 'fr.a2.verbes.552'], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'wrong-tense', description: 'Produces the present where the imparfait is needed to describe the past (the scene breakdown).', detectOn: ['a1-scene', 'a1-check', 'a12-talk', 'a12-task'], drill: 'd-avant' },
  { id: 'nous-stem', description: 'Builds a regular stem from the infinitive or keeps -ons (finais, choisions, parlonsais).', detectOn: ['a2-construire', 'a2-pieges', 'a2-check'], drill: 'd-stem', retest: 'd-stem' },
  { id: 'ending-spelling', description: 'Writes the wrong one of the homophone endings -ais / -ait / -aient, or on + -ions.', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check', 'a11-dictee'], drill: 'd-endings', retest: 'd-endings' },
  { id: 'irreg-stem', description: 'Builds the stem of a present-irregular verb from je or the infinitive (boivais, prendais, écrisait).', detectOn: ['a4-construire', 'a4-pieges', 'a4-check'], drill: 'd-irreg', retest: 'd-irreg' },
  { id: 'etre-stem', description: 'Applies the recipe to être (sommais), misses elision (je étais) or writes êt-.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check'], drill: 'd-etre' },
  { id: 'ger', description: 'Keeps the e before i (mangeions) or drops it before a (mangait).', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a12-task'], drill: 'd-ger', retest: 'd-ger' },
  { id: 'cer', description: 'Keeps the cedilla before i (commençions) or drops it before a (commencait).', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a12-task'], drill: 'd-cer', retest: 'd-cer' },
  { id: 'ii-doubling', description: 'Writes a single i after a stem in i or y with nous/vous (étudions, voyons), or doubles it with je (étudiiais).', detectOn: ['a8-construire', 'a8-erreurs', 'a8-dictee', 'a8-check'], drill: 'd-ii', retest: 'd-ii' },
  { id: 'impersonal', description: 'Pluralises il y avait, misspells il faisait / il neigeait, or builds impersonal forms with -ais.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check'], drill: 'd-impers', retest: 'd-impers' },
  { id: 'pron-neg', description: 'Drops the reflexive pronoun, misses elision, or misplaces ne... pas in the imparfait.', detectOn: ['a10-construire', 'a10-piege', 'a10-check'], drill: 'd-pronneg', retest: 'd-pronneg' },
  { id: 'look-alike', description: 'Confuses the -er infinitive, the -é participle and the -ais/-ait/-aient imparfait of the same verb.', detectOn: ['a11-construire', 'a11-erreurs', 'a11-dictee', 'a11-check'], drill: 'd-homo', retest: 'd-homo' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here (a `table` at core is
 *  refused by validateDensity). `cheatSheet` is not used in a sheet: inside a
 *  sheet it draws its title and nothing else. The sheet table scrolls
 *  sideways, so five columns are fine.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-recette', 'La recette et les six fins', ['la recette', 'les six fins', 'parler, finir, vendre, être en entier'], [
    teach('sheet-recette-teach', 'Comment ça marche', `${REFRAME} Prends le présent avec nous, enlève -ons, ajoute la fin de la personne. Les fins sont les mêmes pour tous les verbes. Seul être a sa propre base, ét-. À l’oral, -ais, -ait et -aient se disent pareil : [ɛ]. -ions et -iez s’entendent. EN: ${REFRAME_EN} Same endings for every verb; être alone uses ét-.`),
    table('sheet-recette-table', 'Quatre verbes en entier', ['Personne', 'parler', 'finir', 'vendre', 'être'], [
      ['je', 'je parlais', 'je finissais', 'je vendais', "j'étais"],
      ['tu', 'tu parlais', 'tu finissais', 'tu vendais', 'tu étais'],
      ['il, elle, on', 'il parlait', 'il finissait', 'il vendait', 'il était'],
      ['nous', 'nous parlions', 'nous finissions', 'nous vendions', 'nous étions'],
      ['vous', 'vous parliez', 'vous finissiez', 'vous vendiez', 'vous étiez'],
      ['ils, elles', 'ils parlaient', 'ils finissaient', 'ils vendaient', 'ils étaient'],
    ]),
  ]),
  sheet('sheet-irreg', 'Les irréguliers du présent', ['vingt verbes, de nous à l’imparfait'], [
    teach('sheet-irreg-teach', 'Pourquoi ils sont réguliers ici', 'Ces verbes changent beaucoup au présent. Mais leur forme nous existe, et l’imparfait part de là. faisais se dit [fə.zɛ]. EN: irregular in the present, regular here, because the recipe starts from nous.'),
    table('sheet-irreg-table', 'De nous à l’imparfait', ['Infinitif', 'nous (présent)', 'Base', 'je', 'nous'], [
      ['faire', 'nous faisons', 'fais-', 'je faisais', 'nous faisions'],
      ['prendre', 'nous prenons', 'pren-', 'je prenais', 'nous prenions'],
      ['boire', 'nous buvons', 'buv-', 'je buvais', 'nous buvions'],
      ['voir', 'nous voyons', 'voy-', 'je voyais', 'nous voyions'],
      ['croire', 'nous croyons', 'croy-', 'je croyais', 'nous croyions'],
      ['dire', 'nous disons', 'dis-', 'je disais', 'nous disions'],
      ['écrire', 'nous écrivons', 'écriv-', "j'écrivais", 'nous écrivions'],
      ['lire', 'nous lisons', 'lis-', 'je lisais', 'nous lisions'],
      ['venir', 'nous venons', 'ven-', 'je venais', 'nous venions'],
      ['devoir', 'nous devons', 'dev-', 'je devais', 'nous devions'],
      ['pouvoir', 'nous pouvons', 'pouv-', 'je pouvais', 'nous pouvions'],
      ['vouloir', 'nous voulons', 'voul-', 'je voulais', 'nous voulions'],
      ['savoir', 'nous savons', 'sav-', 'je savais', 'nous savions'],
      ['avoir', 'nous avons', 'av-', "j'avais", 'nous avions'],
      ['aller', 'nous allons', 'all-', "j'allais", 'nous allions'],
      ['mettre', 'nous mettons', 'mett-', 'je mettais', 'nous mettions'],
      ['connaître', 'nous connaissons', 'connaiss-', 'je connaissais', 'nous connaissions'],
      ['sortir', 'nous sortons', 'sort-', 'je sortais', 'nous sortions'],
      ['dormir', 'nous dormons', 'dorm-', 'je dormais', 'nous dormions'],
      ['vivre', 'nous vivons', 'viv-', 'je vivais', 'nous vivions'],
      ['être', 'nous sommes', 'ét- (exception)', "j'étais", 'nous étions'],
    ]),
  ]),
  sheet('sheet-ortho', 'L’orthographe à surveiller', ['-ger, -cer', 'le double i', 'les formes voisines'], [
    teach('sheet-ortho-teach', 'Une seule question : quelle lettre suit ?', `Regarde la première lettre de la fin. Si c’est a (-ais, -ait, -aient), -ger prend un e et -cer un ç. Si c’est i (-ions, -iez), rien. Si la base finit par i ou y, -ions et -iez donnent deux i ou y + i. ${Cap(ER_EXC_REF)} : « ${A209_REFRAME} » EN: a after the stem means e or ç; i means nothing, and a stem in i or y doubles the i.`),
    table('sheet-ortho-table', 'Devant a, devant i', ['Cas', 'je, tu, il, ils', 'nous, vous'], [
      ['-ger (manger)', 'je mangeais, ils mangeaient', 'nous mangions, vous mangiez'],
      ['-cer (commencer)', 'je commençais, ils commençaient', 'nous commencions, vous commenciez'],
      ['base en i (étudier)', "j'étudiais, ils étudiaient", 'nous étudiions, vous étudiiez'],
      ['base en y (voir)', 'je voyais, ils voyaient', 'nous voyions, vous voyiez'],
      ['base en y (payer)', 'je payais, ils payaient', 'nous payions, vous payiez'],
    ]),
    table('sheet-homo-table', 'Les formes voisines', ['Forme', 'Quand', 'Exemple'], [
      ['parler', 'après un verbe ou une préposition', 'Elle aimait parler.'],
      ['parlé', 'après avoir (passé composé)', "J'ai parlé avec elle."],
      ['parlais', 'je, tu, à l’imparfait', 'Je parlais avec elle.'],
      ['parlait', 'il, elle, on, à l’imparfait', 'On parlait fort.'],
      ['parlaient', 'ils, elles, à l’imparfait', 'Ils parlaient trop.'],
      ['parlez / parliez', 'vous, présent / imparfait', 'Vous parliez créole.'],
    ]),
  ]),
  sheet('sheet-il-me-ne', 'Impersonnels, pronominaux, négation', ['il y avait et les autres', 'se lever en entier', 'la négation'], [
    table('sheet-impers-table', 'Les impersonnels', ['Présent', 'Imparfait', 'Exemple'], [
      ['il y a', 'il y avait', 'Il y avait de la neige partout.'],
      ['il faut', 'il fallait', 'Il fallait mettre des bottes.'],
      ['il pleut', 'il pleuvait', 'Il pleuvait souvent en novembre.'],
      ['il neige', 'il neigeait', 'Il neigeait de novembre à avril.'],
      ['il fait beau / froid / chaud', 'il faisait beau / froid / chaud', 'Il faisait froid, mais il faisait beau.'],
      ['il vaut mieux', 'il valait mieux', 'Il valait mieux partir tôt.'],
    ]),
    table('sheet-pron-table', 'se lever et la négation', ['Personne', 'se lever', 'ne... pas'], [
      ['je', 'je me levais', 'je ne me levais pas'],
      ['tu', 'tu te levais', 'tu ne te levais pas'],
      ['il, elle, on', 'il se levait', 'il ne se levait pas'],
      ['nous', 'nous nous levions', 'nous ne nous levions pas'],
      ['vous', 'vous vous leviez', 'vous ne vous leviez pas'],
      ['ils, elles', 'ils se levaient', 'ils ne se levaient pas'],
    ]),
    teach('sheet-pron-teach', 'La place des petits mots', `Comme au présent dans ${PRONOMINAUX_REF} : ne, puis le pronom, puis le verbe, puis pas ou jamais. me, te, se deviennent m’, t’, s’ devant une voyelle. À l’oral, on oublie souvent ne ; à l’écrit, garde-le. EN: ne, pronoun, verb, pas; speech often drops ne.`),
  ]),
];

/** The studio's brief for every recordingId the sections name. */
const REC_DESC: Record<string, string> = {
  'rec-b1-01-lecture': 'Awa’s paragraph (act 1), one take, one female voice, light Senegalese French accent if available. Every final -ait/-ais is a clean [ɛ].',
  'rec-b1-01-lea': 'Léa (child) and Julien (Québécois). regardons and regardions must differ only by the [j]; same pace.',
  'rec-b1-01-recette': 'The recipe cards, plain reading: nous parlons, parl-, je parlais, nous parlions. finissons and vendons with their full stems audible.',
  'rec-b1-01-lise': 'Grand-maman Lise, Québécoise, eight lines, ONE TAKE in authored order. Present and imparfait nous lines differ only in [ɔ̃] against [jɔ̃].',
  'rec-b1-01-pieges-base': 'The audio step plays each card’s CORRECT form. Read them plainly.',
  'rec-b1-01-cocody': 'Koffi’s paragraph, Ivorian French welcome. parlait / parlais / parlaient all [paʁ.lɛ], no audible t or -ent.',
  'rec-b1-01-son': 'The four [ɛ] forms MUST be read identically. parlons/parlions and parlez/parliez differ only by [j].',
  'rec-b1-01-julien': 'REQUIRED FOR THE [ɛ] EAR MISSION. Julien, one take, Québécois accent welcome. travaillais / travaillait / travaillaient identical.',
  'rec-b1-01-bernard': 'Bernard, 72, Swiss French (Vaud) accent welcome. faisait with [ə].',
  'rec-b1-01-irreg': 'The irregular-verb cards. faisons and faisais with [ə], never [fɛ].',
  'rec-b1-01-bernard-ecoute': 'Bernard to his granddaughter, one take, eight lines in order.',
  'rec-b1-01-pieges-irreg': 'Correct forms only; plain reading.',
  'rec-b1-01-classe': 'Julien and Awa at the class photo. Liaison z in nous étions, vous étiez, ils étaient.',
  'rec-b1-01-etre': "j'étais, nous étions, ils étaient, c'était. Liaison z carried onto the next syllable.",
  'rec-b1-01-ecole-awa': 'Awa, one take, eight lines in order.',
  'rec-b1-01-nadia': 'Nadia, Swiss French. mangeais and mangions share the same [ʒ].',
  'rec-b1-01-ger': 'The -ger cards: the e changes nothing in the sound.',
  'rec-b1-01-nadia-message': 'Nadia’s voice message, one take.',
  'rec-b1-01-piege-ger': 'Correct forms only. The letters change so the sound does not.',
  'rec-b1-01-koffi': 'Koffi and his son Yao. commençait [s], commencions [s].',
  'rec-b1-01-cer': 'The -cer cards: always [s].',
  'rec-b1-01-koffi-ecoute': 'Koffi, eight lines in order; lancions against lance.',
  'rec-b1-01-piege-cer': 'Correct forms only.',
  'rec-b1-01-emilie': 'Émilie, Québécoise. étudiions has ONE MORE SYLLABLE than étudions; voyions, payions, envoyions read naturally, almost like the present.',
  'rec-b1-01-ii': 'étudions [e.ty.djɔ̃] against étudiions [e.ty.di.jɔ̃]: the extra syllable must be audible. Do not over-articulate the y + i forms.',
  'rec-b1-01-emilie-ecoute': 'Émilie on the phone, one take, eight lines. Lines 5 and 6 read naturally: the question says the difference is barely audible.',
  'rec-b1-01-hiver': 'Julien’s winter paragraph, Québécois. tuque, mitaines, gadoue as said in Montréal.',
  'rec-b1-01-impers': 'il faisait with [ə]; il neigeait with [ʒ].',
  'rec-b1-01-hiver-ecoute': 'Julien, eight lines in order.',
  'rec-b1-01-matins': 'Koffi and Awa at lunch; clear ne in every negation.',
  'rec-b1-01-pronominaux': 'Reflexive cards; elision in m’ennuyais, s’amusaient.',
  'rec-b1-01-matins-ecoute': 'Koffi, eight lines in order.',
  'rec-b1-01-piege-pron': 'Correct forms only.',
  'rec-b1-01-mariama': 'Awa and her niece Mariama (12).',
  'rec-b1-01-homo': 'parlé [e] and parlais [ɛ] read as a native speaker says them, NOT exaggerated: the card says many speakers merge them.',
  'rec-b1-01-homo-ecoute': 'Eight lines. j’ai must be clearly audible where present; do not stress the vowel contrast.',
  'rec-b1-01-lettre': 'Awa’s letter, one take, warm register.',
};



/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

type ActDef = { act: LessonAct; sections: DraftSection[]; imports: string[] };

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11, ACT12];

export const SECTIONS: DraftSection[] = ACTS.flatMap((a) => a.sections);

/** Every id the lesson can put in front of a learner. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, and only ids with a flashcard drill. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const DRILLS: LessonDrill[] = DRILL_LIST;
const ERROR_TRIGGERS: ErrorTrigger[] = TRIGGER_LIST;
const SHEETS: ReferenceSheet[] = SHEET_LIST;

/** Every recordingId the sections name, each with its studio brief. */
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-01-[a-z0-9-]+/g) ?? [])];

export const LESSON: Omit<Lesson, 'sections'> & { sections: DraftSection[] } = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 01',
  intro: 'You already know the present and the passé composé. The imparfait is the past for how things were: a house, a street, a habit. You can build it for almost any verb from a form you already know, the present with nous. This lesson builds it, verb family by verb family, and trains the spellings your ear cannot hear.',
  skill: 'PE',
  grammarAssumed: [
    PRESENT_ER_UNIT, PRESENT_IR_UNIT, PRESENT_RE_UNIT, ER_EXC_UNIT, FAIRE_UNIT, PRENDRE_UNIT,
    ALLER_UNIT, MODAUX_UNIT, SAVOIR_UNIT, PRONOMINAUX_UNIT, PC_UNIT,
  ],
  grammarIntroduced: [
    'Formation of the imparfait: the present-tense nous form minus -ons as the stem, for every verb except être',
    'The six imparfait endings -ais, -ais, -ait, -ions, -iez, -aient, identical across all conjugation groups',
    'That four of the six imparfait forms are homophones [ɛ], so person is carried by the subject and the ending is spelling-only',
    'That verbs irregular in the present (faire, prendre, boire, voir, venir, vouloir, savoir, mettre, connaître, vivre and others) are regular in the imparfait via their nous stem, with faisais pronounced [fə]',
    'être as the single irregular imparfait stem ét-',
    'Orthographic adjustment of -ger and -cer stems before a (mangeais, commençais) and its absence before i (mangions, commencions)',
    'The doubled i in -ions/-iez after stems ending in i or y (étudiions, oubliiez, riions, voyions, payions, envoyions), largely inaudible',
    'The impersonal imparfaits il y avait, il fallait, il pleuvait, il neigeait, il faisait + adjective, il valait mieux',
    'Pronominal and negative imparfait forms, with pronoun and negation placement unchanged from the present',
    'Spelling discrimination between -er, -é, -ais, -ait and -aient, and the auxiliary as the audible cue for the passé composé',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Tu connais déjà le présent et le passé composé. L’imparfait, c’est le passé qui dit comment les choses étaient : une maison, une rue, une habitude. Tu peux le fabriquer pour presque tous les verbes à partir d’une forme que tu connais, le présent avec nous.',
    minutes: 120,
    difficulty: 3,
    glyph: 'ais',
    screens: ACTS.reduce((n, a) => n + a.act.estScreens, 0),
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  deckTranche: DECK_TRANCHE,
  sheets: SHEETS,
  terms: IMPARFAIT_FORMATION_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 2,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Paul, 2026-09-22: every `say` is French and spoken by a fr-FR voice.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

/** The lesson as the CURRENT validators accept it: the draft `task` removed
 *  from `sections` and from every act. */
export function lessonWithoutTask(): Lesson {
  const isTask = (s: DraftSection): s is TaskSection => s.type === 'task';
  const taskIds = new Set(LESSON.sections.filter(isTask).map((s) => s.id));
  return {
    ...LESSON,
    sections: LESSON.sections.filter((s): s is LessonSection => !isTask(s)),
    acts: LESSON.acts?.map((a) => ({
      ...a,
      sections: a.sections.filter((id) => !taskIds.has(id)),
      restPoints: a.restPoints?.filter((rp) => !taskIds.has(rp.split('/')[0])),
    })),
  };
}

