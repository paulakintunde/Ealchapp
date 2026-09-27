// b1.05.l1 « Le futur simple : la formation » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is the draft type in `_task-section.ts`, not in schema.ts, so `sections` is
// `DraftSection[]` and the validators run on `lessonWithoutTask()`.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading / listening), name (cardDeck,
//   examples, tapTable), build (groupDrill, gated), choose (a drill where the
//   MEANING picks the form), trap (trapDrill stepped or commonErrors), check
//   (gated control pages before the checkpoint).
//
//    1  Le projet flou               6   a written plan that promises nothing
//    2  Un r, puis avoir             9   the stem, the endings, and where they come from
//    3  Les trois groupes            8   -er, -ir, and -re dropping its e
//    4  Proche ou simple             9   aller + infinitif against the one word
//    5  L'infinitif gardé entier     7   étudier, jouer, créer, and the silent e
//    6  Les radicaux qui changent    9   achèterai, appellerai, jetterai, paierai
//    7  La phrase au futur           7   negation, pronouns, questions
//    8  Les mots du futur            7   markers situate, they do not command
//    9  Annoter un projet            7   a 164-word plan, marked verb by verb
//   10  Écrire ses projets          11   model, plan, role play, TASK, quiz, roundup
//
//   TOTAL 80 missions, 10 acts. Corpus: 170 authored rows in ten blocks plus
//   26 reused seed rows, released act by act through `deckTranche`.
//   Chapter artwork: `futur-simple-image-prompts.md`, ten prompts, one per act.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (b1.06, b1.07 and b1.08 import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le futur, c'est l'infinitif jusqu'au r, puis avoir. »
//   EN: The future is the infinitive as far as the r, then avoir.
//
//   ONE METAPHOR, THE JOIN: a stem that keeps its r welded to avoir's present.
//   NOT a timeline. No screen in this lesson says the futur simple is "further
//   away" than the futur proche, because act 4 and act 8 exist to break that.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the regular futur simple stem and the endings; the three groups;
//           the spelling verbs that keep the infinitive whole; the -er verbs
//           whose stem changes; negation, pronouns and questions in the
//           future; the choice between futur proche and futur simple; the
//           time markers, as cues rather than commands.
//   QUOTES  b1.01's reframe (the imparfait's formation, act 2's trap) and
//           b1.03's (act 9's annotation habit), imported; a2.09's and a2.11's,
//           imported, each shown as the English original with a French
//           rendering under it.
//   LEAVES  to b1.06 the irregular stems, named once in act 6 (envoyer) and
//           once in act 10's roundup and nowhere else; to b1.07 quand, dès que
//           and lorsque; to b1.10 si + présent; to b1.08 the conditionnel,
//           which shares this stem and is therefore never contrasted here.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the situation
//   needs (the letting agent and the manager say « vous »). Every learner
//   surface that explains something carries English (`en`, or a final « EN: »).
//   Every `say` is French, spoken fr-FR. Theme `projets-et-futur`. A2 citations
//   use the English trail label; b1.* ones are French until those units exist.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. THE REFRAME SAYS « jusqu'au r ». It is the only version that survives
//      act 3 (prendre gives prendr-), but it is one word longer than the line
//      a learner would invent. Accept it, or accept a shorter line that act 3
//      then has to qualify?
//   2. ACT 4 TEACHES THE CHOICE, not a rule. The house line is « le futur
//      proche garde un fil avec maintenant ». It is the accurate description
//      and it is harder than « proche = bientôt ». Confirm we keep the harder
//      one.
//   3. « paierai » and « payerai » are both correct. The lesson teaches
//      paierai and names payerai once, in the sheet. Enough?
//   4. B1 CITATIONS are French from the plan (« la leçon 6 du B1 ») because
//      b1.* units are not in the seed. Switch to the English trail label once
//      they are?
//   5. THREE tapTables (acts 5, 6 and 8), one per act. The pilot brief allowed
//      one per LESSON; b1.02 to b1.04 shipped 2, 3 and 3. Confirm three.
//   6. Act 10's task is WRITTEN (90-130 words), so `skill` is 'PE'. The unit
//      outcome is a written plan, so this looks right; b1.06 could take the
//      spoken one.
//   7. 'coach-fr-FR' is still a proposed voice id (b1.01's question 5).
//   8. ACT 6 NAMES envoyer once, to hand it to b1.06. Is naming a verb we do
//      not teach the right call, or should the boundary be silent?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet, SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import type { DraftSection, TaskSection } from './_task-section.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  READING_TEXT, MODEL_TEXT,
  B101_REFRAME, B101_REFRAME_EN, B103_REFRAME, B103_REFRAME_EN,
  A209_REFRAME, A209_REFRAME_FR, A211_REFRAME, A211_REFRAME_FR,
  IMP_FORM_UNIT, PC_IMP_UNIT, PC_IMP_PAIRS_UNIT, FUTUR_PROCHE_UNIT, PC_AVOIR_UNIT,
  ER_VERBS_UNIT, ER_EXCEPTIONS_UNIT, IR_VERBS_UNIT, RE_VERBS_UNIT, NEGATION_UNIT, TIME_PREP_UNIT,
  IMP_FORM_REF, PC_IMP_REF, FUTUR_IRREG_REF, FUTUR_QUAND_REF, CONDITIONNEL_REF, SI_REF,
  FUTUR_PROCHE_REF, ER_VERBS_REF, ER_EXCEPTIONS_REF, IR_VERBS_REF, RE_VERBS_REF, NEGATION_REF,
} from './futur-simple-corpus.ts';
import { FUTUR_SIMPLE_TERMS } from './futur-simple-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: DraftSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r]));

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so no
 *  section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.05: no item ${id}`);
  return r;
}

/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A free groupDrill item: a quotation of a passage, with no corpus row. */
const free = (fr: string, en: string, note?: string): GItem => ({ fr, en, ...(note ? { note } : {}) });
/** A listening line copied from its row. */
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
/** An examples row copied from its row. */
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
/** A control page: a label and a gating question, no words. */
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE PROJET FLOU
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NOBODY IS RUDE and nothing is ungrammatical: « je vais déposer » is
 *  perfect French. It simply says less than the learner meant, and the agent
 *  writes down less. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Un dossier pour Lyon',
  frSub: "L'appartement rue de la Charité",
  setting: { place: 'Agence immobilière, rue de la Charité', city: 'Lyon', time: '9 h 20', ambience: 'un bureau clair, une imprimante, des clés numérotées au mur' },
  beats: [
    {
      kind: 'narration',
      text: "Une agence immobilière à Lyon, mardi matin. Tu veux le deux-pièces du troisième étage. L'agente a ton dossier devant elle et elle attend une seule chose : une date.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: "L'agente",
      fr: 'Dites-moi simplement quand vous déposerez les documents.',
      en: 'Just tell me when you will hand in the documents.',
      respell: '[deet-mwa sehⁿ-pluh-MAHⁿ kahⁿ voo day-poh-zuh-RAY lay do-kü-MAHⁿ]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Je vais déposer le dossier vendredi.',
      en: 'I am going to hand in the file on Friday.',
      respell: '[zhuh veh day-po-ZAY luh do-SYAY vahⁿ-druh-DEE]',
      stage: "Deux mots, et un fil avec maintenant : tu dis ton intention d'aujourd'hui.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: "L'agente",
      fr: 'Donc vous avez l’intention de venir. Je note un point d’interrogation.',
      en: 'So you intend to come. I am writing down a question mark.',
      respell: '[dohⁿk voo-za-vay lehⁿ-tahⁿ-SYOHⁿ duh vuh-NEER]',
      stage: 'Elle entend une intention. Elle a besoin, elle, de quelque chose qui tienne.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Ce n'est pas ce que tu voulais dire. Ton billet de train est acheté, ta banque a préparé l'attestation, et elle écrit un point d'interrogation.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences, par écrit cette fois. Quelle phrase engage vraiment ta signature ?',
      size: 'lg',
      options: [
        { fr: 'Je vais déposer le dossier vendredi.', respell: '[zhuh veh day-po-ZAY luh do-SYAY vahⁿ-druh-DEE]', en: 'I am going to hand in the file on Friday.', outcome: 'breaks', audio: AUDIO },
        { fr: 'Je déposerai le dossier vendredi.', respell: '[zhuh day-po-zuh-RAY luh do-SYAY vahⁿ-druh-DEE]', en: 'I will hand in the file on Friday.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Elle efface le point d'interrogation et écrit la date. Le deux-pièces est bloqué pour toi jusqu'à vendredi soir.",
        breaks: "Elle laisse le point d'interrogation. Le deux-pièces reste en ligne, et quelqu'un d'autre peut le prendre jeudi.",
      },
    },
    {
      kind: 'break',
      heading: 'Deux futurs, deux messages',
      body: "Les deux sont correctes. La première dit ce que tu as décidé aujourd'hui ; la seconde pose une date que ton lecteur peut te rappeler. EN: Both are correct; the second puts down a date the reader can hold you to.",
      wrong: {
        fr: 'Je vais déposer le dossier vendredi.',
        ipa: '/ʒə vɛ de.po.ze lə do.sje vɑ̃.dʁə.di/',
        respell: '[zhuh veh day-po-ZAY luh do-SYAY vahⁿ-druh-DEE]',
        en: 'I am going to hand in the file on Friday.',
      },
      right: {
        fr: 'Je déposerai le dossier vendredi.',
        ipa: '/ʒə de.po.zə.ʁe lə do.sje vɑ̃.dʁə.di/',
        respell: '[zhuh day-po-zuh-RAY luh do-SYAY vahⁿ-druh-DEE]',
        en: 'I will hand in the file on Friday.',
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Une lettre du mot déposer, et la date tient. Il te reste à savoir d'où sort cette forme, et quand elle vaut mieux que l'autre. C'est toute la leçon.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['simple', 'proche'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Fabriquer un futur simple sans hésiter', s: 'Actes 2 et 3 : le r, les terminaisons, les trois groupes' },
    { t: 'Choisir entre les deux futurs', s: 'Acte 4 : ce que chacun promet' },
    { t: 'Écrire les verbes qui changent', s: 'Actes 5 et 6 : le e muet et les radicaux' },
    { t: 'Écrire tes projets à quelqu’un', s: 'Actes 9 et 10 : annoter, puis rédiger' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the agency's written reply, where the tense is already
 *  doing its job. Noticing before the rule. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: "La réponse de l'agence",
  frSub: 'Lis, et regarde les verbes',
  text: "Madame, Monsieur, nous avons bien reçu votre dossier. Nous examinerons votre demande cette semaine et nous confirmerons la date par écrit. L'agence ferme à dix-huit heures ; si personne ne répond, une réponse arrivera par courriel. Vous trouverez les clés dans la boîte aux lettres le jour de l'état des lieux. Le chauffage marchera dès le premier octobre, et le magasin du rez-de-chaussée ouvrira à neuf heures tous les matins. Nous vous demandons de signer le bail avant le premier septembre. La réunion des locataires commencera à quatorze heures le samedi suivant. Nous restons à votre disposition.",
  glossary: [
    { word: 'le bail', en: 'the lease', note: 'Le contrat entre toi et le propriétaire.' },
    { word: "l'état des lieux", en: 'the inventory, the check-in report', note: "On note ensemble l'état de l'appartement avant ton arrivée." },
    { word: 'rez-de-chaussée', en: 'ground floor', note: "L'étage qui touche la rue." },
    { word: 'locataires', en: 'tenants', note: 'Les gens qui louent, pas ceux qui achètent.' },
  ],
  questions: [
    { q: 'Combien de verbes annoncent quelque chose qui n’est pas encore arrivé ?', a: 'Neuf : examinerons, confirmerons, arrivera, trouverez, marchera, ouvrira, commencera, plus ferme et demandons qui, eux, sont au présent.' },
    { q: 'Quelle lettre reviennent toujours avant la terminaison ?', a: 'Un r : examinerons, confirmerons, arrivera, trouverez, marchera, ouvrira, commencera.' },
    { q: 'Pourquoi « ferme » et « demandons » ne sont-ils pas au futur ?', a: "Ils disent ce qui est vrai maintenant : l'horaire de l'agence et la demande de la lettre." },
    { q: 'Cette lettre engage-t-elle l’agence ?', a: 'Oui. Chaque verbe au futur est une promesse datée que tu peux lui rappeler.' },
  ],
  audio: REC('rec-b1-05-agence'),
  say: REFRAME,
  terms: ['simple', 'promesse'],
};

/** BUILD, on the text just read: sort the promises from the announcements. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Deux sortes de futur écrit',
  groups: [
    grp('Ce qui est annoncé', [
      it(E(1005), 'un horaire de magasin'),
      it(E(1006), 'une heure de réunion'),
      it(E(1010), "l'heure de fermeture"),
      it('fr.a2.transports-quotidiens.213', 'une annonce de quai'),
    ], chk(
      'Qui décide de ces quatre choses ?',
      ['personne en particulier, c’est prévu comme ça', 'celui qui parle, au moment où il parle'],
      0,
      "Un horaire existe avant la phrase. Le verbe ne fait que l'annoncer. EN: a timetable exists before the sentence; the verb only announces it.",
    )),
    grp('Ce qui est promis', [
      it(E(1002), 'une date que tu tiens'),
      it(E(1003), 'une signature'),
      it(E(1012), 'un engagement du propriétaire'),
      it(E(1013), 'un engagement écrit de l’agence'),
    ], chk(
      'Que peut faire ton lecteur avec ces quatre phrases ?',
      ['rien, ce sont des idées', 'te les rappeler plus tard', 'les traduire'],
      1,
      "Chacune donne une date et un nom. C'est ce qui fait la différence avec une intention. EN: each gives a date and a name, and that is what makes it a promise.",
    )),
    ctl('La forme', 'Toutes ces phrases ont la même forme de verbe. En combien de mots ?',
      ['un seul mot', 'deux mots'], 0,
      "Un seul : déposerai, marchera, ouvrira. L'autre futur en prend deux. EN: one word; the other future takes two."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['simple', 'promesse'],
};

/** WHY IT MATTERS. Four places where the vague version costs something. */
const A1_POURQUOI: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-pourquoi',
  layer: 'core',
  title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Dans un courriel à une agence ou à un employeur', fr: 'Je déposerai le dossier vendredi.', en: 'I will hand in the file on Friday.' },
    { situation: 'Dans une annonce publique, à la gare ou au magasin', fr: 'Le magasin ouvrira à neuf heures.', en: 'The shop will open at nine.' },
    { situation: 'Dans un contrat, pour une date qui engage', fr: 'Le chauffage marchera dès le premier octobre.', en: 'The heating will work from the first of October.' },
    { situation: 'À l’examen, quand on te demande tes projets', fr: 'Nous parlerons de cette question à la prochaine réunion.', en: 'We will talk about that question at the next meeting.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['promesse'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La différence', "« Je vais déposer » et « je déposerai » : l'une des deux est fausse ?",
    ['oui, la première', 'non, les deux sont correctes'], 1,
    "Les deux se disent. Elles ne promettent pas la même chose. EN: both are correct; they promise different things."),
  ctl("L'écrit", 'Dans un courriel officiel, quelle forme attend ton lecteur ?',
    ['le futur simple, en un mot', 'le futur proche, en deux mots', "n'importe laquelle"], 0,
    "Un mot, une date, un engagement. EN: one word, one date, one commitment."),
  ctl('Le signe', 'Dans marchera, ouvrira, confirmerons, quelle lettre revient juste avant la terminaison ?',
    ['un s', 'un r', 'un t'], 1,
    "Le r du futur. C'est lui que tu vas apprendre à poser. EN: the r of the future, which act 2 teaches."),
], ['simple', 'promesse']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le projet flou',
    opener: {
      line: "Tu annonces une date à une agence, et elle écrit un point d'interrogation : ta phrase disait moins que toi. EN: You give an agency a date and it writes a question mark: your sentence said less than you meant.",
      imageRef: 'lessons/futur-simple/act01.jpg',
    },
    sections: [],
    milestone: "Tu vois maintenant la différence entre annoncer une intention et poser une date. EN: You can now see the difference between announcing an intention and putting down a date.",
    estScreens: 24, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_POURQUOI, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — UN R, PUIS AVOIR
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET BY EAR, and this is the mission the whole act turns on: the only
 *  audible difference between « je parlais » and « je parlerai » is the r.
 *  `hideLines` because the question is what the ear caught. */
const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Entends-tu le r ?',
  lines: [
    ln(E(1032)), ln(E(1033)), ln(E(1027)), ln(E(1002)), ln(E(1009)), ln(E(1007)), ln(E(1031)), ln(E(1029)),
  ],
  questions: [
    { q: 'Première phrase : le verbe parle du passé ou de demain ?', opts: ['du passé', 'de demain'], correct: 0,
      why: "« Je parlais » : pas de r avant la terminaison. EN: no r, so it is the imparfait." },
    { q: 'Deuxième phrase : quelle lettre est arrivée en plus ?', opts: ['un s', 'un t', 'un r'], correct: 2,
      why: "« Je parlerai » : le r est la seule différence audible. EN: the r is the only audible difference." },
    { q: 'Troisième phrase : travaillerai ou travaillais ?', opts: ['travaillais', 'travaillerai'], correct: 1,
      why: 'Le r est là, et « demain » confirme. EN: the r is there, and demain confirms it.' },
    { q: 'Combien de phrases sur les huit parlent de demain ?', opts: ['sept', 'six', 'huit'], correct: 0,
      why: "Sept. Seule la première est à l'imparfait. EN: seven; only the first is imparfait." },
    { q: 'Sur quelle syllabe tombe la voix, dans ces verbes ?', opts: ['la dernière', 'la première'], correct: 0,
      why: "Sur le r plus la terminaison : par-luh-RAY. EN: on the r plus the ending." },
  ],
  audio: REC('rec-b1-05-r-ecoute'),
  say: REFRAME,
  terms: ['radical'],
};

/** NAME. Four cards, one idea each: the stem, the r, the endings, avoir. */
const A2_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-futur',
  title: 'La machine du futur',
  frSub: 'Deux morceaux, et rien à retenir',
  hint: 'Quatre cartes. Regarde où commence et où finit chaque morceau.',
  audio: REC('rec-b1-05-machine'),
  say: REFRAME,
  terms: ['radical', 'infinitif'],
  cards: [
    {
      head: "Le radical, c'est l'infinitif", label: 'le radical',
      fr: 'parler · je parlerai',
      sub: '[par-LAY] · [zhuh par-luh-RAY]',
      body: "Tu ne coupes rien. Tu prends le verbe comme dans le dictionnaire et tu écris la terminaison derrière. EN: nothing is cut off: take the dictionary form and write the ending after it.",
    },
    {
      head: 'Le r reste toujours', label: 'le signe',
      fr: 'finir · je finirai',
      sub: '[fee-NEER] · [zhuh fee-nee-RAY]',
      body: "Le r de l'infinitif ne part jamais. C'est le seul son qui sépare je parlais de je parlerai. EN: the infinitive's r never goes, and it is the only sound separating the two forms.",
    },
    {
      head: 'Six terminaisons, deux sons', label: 'les terminaisons',
      fr: '-ai -as -a -ons -ez -ont',
      sub: '[RAY] · [RA] · [RA] · [ROHⁿ] · [RAY] · [ROHⁿ]',
      body: "Écrites, elles sont six. Dites, elles font trois sons, et deux seulement reviennent souvent. EN: six in writing, three in speech.",
    },
    {
      head: "Tu les connais déjà", label: 'avoir au présent',
      fr: "j'ai · tu as · il a · ils ont",
      sub: '[ZHAY] · [tü A] · [ee-LA] · [eel-ZOHⁿ]',
      body: "Ce sont les formes d'avoir. Attention aux deux qui ne suivent pas : nous avons, mais nous parlerons. EN: they are avoir's forms; nous and vous are the two that do not match.",
    },
  ],
};

/** NAME, part two: the hook laid side by side, with its two exceptions. */
const A2_AVOIR: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-avoir',
  layer: 'core',
  title: "Avoir prête ses terminaisons",
  examples: [
    ex(E(1015), "la règle en une phrase"),
    ex(E(1024), "j'ai, tu as, il a : trois formes sur six, telles quelles"),
    ex(E(1025), 'nous avons devient -ons, pas -avons'),
    ex(E(1026), 'vous avez devient -ez, pas -avez'),
    ex(E(1021), 'ils ont revient entier : -ont'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical'],
};

/** BUILD: put the two halves together, group by group, gated. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Assemble les deux morceaux',
  groups: [
    grp('Les verbes en -er', [
      it(E(1016), 'parler + ai'),
      it(E(1019), 'parler + ons'),
      it('fr.b1.gouvernement.006', 'voter + ons'),
      it('fr.b1.affaires.006', 'embaucher + ont'),
    ], chk(
      'Que fait-on de la terminaison -er avant d’ajouter -ai ?',
      ['on l’enlève', 'on la garde entière'],
      1,
      "On garde tout : parler plus ai donne parlerai. EN: keep the whole infinitive.",
    )),
    grp('Les verbes en -ir', [
      it(E(1022), 'finir + ai'),
      it(E(1023), 'finir + ons'),
      it('fr.b1.universite.006', 'réussir + as'),
      it(E(1030), 'remplir + ez'),
    ], chk(
      'Combien de r entend-on dans « nous finirons » ?',
      ['un seul, celui de finir', 'deux', 'aucun'],
      0,
      "Un seul r, et il vient de l'infinitif. EN: one r, and it comes from the infinitive.",
    )),
    ctl('Le piège des deux formes', 'Comment dit-on « we will speak » ?',
      ['nous parlerons', 'nous parleravons'], 0,
      "Avoir prête ses terminaisons, pas ses mots entiers. EN: avoir lends its endings, not whole words."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'infinitif'],
};

/** NAME, the paradigm itself, after the learner has built two of it. */
const A2_PARADIGME: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-paradigme',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-futur',
  title: 'Parler au futur, les six formes',
  frSub: 'Lis-les à voix haute',
  hint: 'Quatre cartes. Deux formes par carte, sauf la dernière.',
  audio: REC('rec-b1-05-machine'),
  say: REFRAME,
  terms: ['simple'],
  cards: [
    { head: 'Moi et toi', label: 'je · tu', fr: 'je parlerai · tu parleras', sub: '[zhuh par-luh-RAY] · [tü par-luh-RA]', body: "Deux sons différents à l'oreille : RAY et RA. EN: two different vowels, RAY and RA." },
    { head: 'Lui, elle, on', label: 'il · elle · on', fr: 'il parlera · on parlera', sub: '[eel par-luh-RA] · [ohⁿ par-luh-RA]', body: 'Même son que tu parleras, sans le s à la fin. EN: same sound as tu parleras, without the written s.' },
    { head: 'Nous et vous', label: 'nous · vous', fr: 'nous parlerons · vous parlerez', sub: '[noo par-luh-ROHⁿ] · [voo par-luh-RAY]', body: "Ici avoir ne prête que la fin : -ons et -ez, pas avons et avez. EN: here avoir lends only the ending." },
    { head: 'Eux', label: 'ils · elles', fr: 'ils parleront', sub: '[eel par-luh-ROHⁿ]', body: 'Même son que nous parlerons. Seul le pronom les sépare à l’oreille. EN: same sound as nous parlerons; only the pronoun separates them.' },
  ],
};

/** CHOOSE: the form is picked by the person, not by a pattern on the page. */
const A2_FORMES: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-formes',
  layer: 'core',
  size: 'lg',
  title: 'Qui fait quoi',
  groups: [
    grp('Une personne à la fois', [
      it(E(1027), 'moi, demain'),
      it(E(1029), 'toi, avant de répondre'),
      it(E(1031), 'eux, avec le temps'),
      it(E(1028), 'nous, un autre jour'),
    ], chk(
      'Dans « les enfants grandiront », pourquoi -ont et non -a ?',
      ['parce que c’est loin', 'parce que le sujet est pluriel'],
      1,
      "La terminaison suit le sujet, comme à tous les temps. EN: the ending follows the subject, as in every tense.",
    )),
    grp("Le même verbe, deux temps", [
      it(E(1032), 'hier, pas de r'),
      it(E(1033), 'demain, avec r'),
      it('fr.a2.heure-et-date.094', 'plus tard, avec r'),
      free('je parlais · je parlerai', 'I was speaking · I will speak', 'une lettre, deux époques'),
    ], chk(
      'Tu écris « je parlerais » au lieu de « je parlerai ». Que se passe-t-il ?',
      ['ce n’est plus le futur simple', 'rien, c’est pareil'],
      0,
      `Cette forme existe et c'est le conditionnel, que ${CONDITIONNEL_REF} t'apprendra. Au futur, pas de s. EN: that form is the conditional, which comes later.`,
    )),
    ctl('Le test rapide', 'Tu hésites entre imparfait et futur. Que cherches-tu ?',
      ['la voyelle', 'le r avant la terminaison', 'la longueur du mot'], 1,
      "Pas de r : imparfait. Un r : futur. EN: no r means imparfait, an r means future."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'simple'],
};

/** TRAP, stepped: the two ways an English speaker loses the r. */
const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-piege',
  layer: 'core',
  swipe: true,
  title: 'Deux pièges autour du r',
  rule: {
    title: 'Le r arrive, le radical ne bouge pas',
    body: `Sans r, tu as écrit l'imparfait : « ${B101_REFRAME} » Avec un radical coupé, tu as écrit un mot qui n'existe pas. EN: no r gives the imparfait, a cut stem gives a word that does not exist.`,
  },
  cards: [
    { promptLabel: 'le r oublié', promptSound: 'Demain, je travaillais à la maison.', fr: 'Demain, je travaillerai à la maison.', ipa: '/də.mɛ̃ ʒə tʁa.va.jə.ʁe a la mɛ.zɔ̃/', tip: 'Sans r, la phrase parle de tous les jours du passé. EN: without the r it is a past habit.' },
    { promptLabel: 'le radical coupé', promptSound: 'Je parlai au directeur demain matin.', fr: 'Je parlerai au directeur demain matin.', ipa: '/ʒə paʁ.lə.ʁe o di.ʁɛk.tœʁ də.mɛ̃ ma.tɛ̃/', tip: "L'infinitif reste entier : parler plus ai. EN: the infinitive stays whole." },
    { promptLabel: 'avoir en entier', promptSound: 'Nous parleravons de cette question.', fr: 'Nous parlerons de cette question à la prochaine réunion.', ipa: '/nu paʁ.lə.ʁɔ̃ də sɛt kɛs.tjɔ̃/', tip: 'Avoir prête -ons, pas avons. EN: avoir lends -ons, not avons.' },
    { promptLabel: 'la terminaison du pluriel', promptSound: 'Les enfants grandira vite.', fr: 'Les enfants grandiront vite.', ipa: '/le.zɑ̃.fɑ̃ ɡʁɑ̃.di.ʁɔ̃ vit/', tip: 'Le sujet est pluriel, la terminaison aussi. EN: plural subject, plural ending.' },
    { promptLabel: 'le s en trop', promptSound: 'Je te raconterais tout ce soir.', fr: 'Je te raconterai tout ce soir.', ipa: '/ʒə tə ʁa.kɔ̃.tə.ʁe tu sə swaʁ/', tip: 'Avec s, ce n’est plus une promesse mais une hypothèse. EN: with the s it stops being a promise.' },
    { promptLabel: 'le verbe en -ir', promptSound: 'Nous choisirerons un autre jour.', fr: 'Nous choisirons un autre jour.', ipa: '/nu ʃwa.zi.ʁɔ̃ œ̃.notʁ ʒuʁ/', tip: "Choisir a déjà son r : on n'en ajoute pas un deuxième. EN: choisir already has its r." },
  ],
  drill: [
    { promptSay: 'Demain, je ... à la maison. (travailler)', opts: ['travaillais', 'travaillerai'], correct: 1 },
    { promptSay: 'Nous ... de cette question. (parler)', opts: ['parlerons', 'parleravons'], correct: 0 },
    { promptSay: 'Les enfants ... vite. (grandir)', opts: ['grandira', 'grandiront'], correct: 1 },
    { promptSay: 'Nous ... un autre jour. (choisir)', opts: ['choisirons', 'choisirerons'], correct: 0 },
    { promptSay: 'Je te ... tout ce soir. (raconter)', opts: ['raconterais', 'raconterai'], correct: 1 },
    { promptSay: 'Tu ... avant de répondre. (réfléchir)', opts: ['réfléchiras', 'réfléchissais'], correct: 0 },
    { promptSay: 'Vous ... ce formulaire à la fin. (remplir)', opts: ['remplissez', 'remplirez'], correct: 1 },
    { promptSay: 'Je ... au directeur demain matin. (parler)', opts: ['parlerai', 'parlai'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le r arrive, le radical ne bouge pas' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-05-piege-r'),
  say: REFRAME,
  terms: ['radical'],
};

/** Eight answers the toggle never hides: English front, French back. */
const A2_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a2-flash',
  layer: 'core',
  title: 'Huit formes à retenir',
  cards: [
    { front: 'I will speak', back: 'je parlerai', say: 'Je parlerai au directeur demain matin.' },
    { front: 'you will speak', back: 'tu parleras', say: 'Tu parleras au directeur demain matin.' },
    { front: 'we will speak', back: 'nous parlerons', say: 'Nous parlerons de cette question à la prochaine réunion.' },
    { front: 'they will speak', back: 'ils parleront', say: 'Ils parleront de cette question à la prochaine réunion.' },
    { front: 'I will finish', back: 'je finirai', say: 'Je finirai ce rapport demain.' },
    { front: 'we will finish', back: 'nous finirons', say: 'Nous finirons le travail avant midi.' },
    { front: 'you will choose', back: 'vous choisirez', say: 'Vous choisirez un autre jour.' },
    { front: 'she will fill in', back: 'elle remplira', say: 'Elle remplira ce formulaire à la fin.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['simple'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le radical', 'Pour faire le futur de chanter, que prends-tu ?',
    ['chant-', 'chante-', 'chanter-'], 2,
    "L'infinitif entier : chanter plus ai donne chanterai. EN: the whole infinitive."),
  ctl('Les terminaisons', "D'où viennent -ai, -as, -a, -ont ?",
    ["du verbe avoir au présent", "du verbe être", "de nulle part, il faut les apprendre"], 0,
    "Ce sont j'ai, tu as, il a, ils ont. EN: they are avoir in the present."),
  ctl('Les deux exceptions', 'Quelles personnes ne reprennent pas le mot entier ?',
    ['je et tu', 'nous et vous', 'il et ils'], 1,
    "nous avons devient -ons, vous avez devient -ez. EN: nous and vous keep only the ending."),
], ['radical', 'infinitif']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Un r, puis avoir',
    opener: {
      line: "Une seule lettre sépare ce que tu faisais de ce que tu feras : ici tu apprends à la poser. EN: One letter separates what you used to do from what you will do, and here you learn to put it there.",
      imageRef: 'lessons/futur-simple/act02.jpg',
    },
    sections: [],
    milestone: "Tu construis le futur de n'importe quel verbe en -er ou en -ir, aux six personnes. EN: You can build the future of any -er or -ir verb, at all six persons.",
    estScreens: 38, restPoints: ['a2-construire', 'a2-piege'],
  },
  sections: [A2_ECOUTE, A2_REGLE, A2_AVOIR, A2_CONSTRUIRE, A2_PARADIGME, A2_FORMES, A2_PIEGE, A2_FLASH, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LES TROIS GROUPES
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the same machine running on all three groups, in one conversation.
 *  Sofia and Malick return in act 9, whose reading is their move. */
const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'Sur le quai, à Bruxelles',
  frSub: 'Trois groupes dans une conversation',
  setting: 'Gare de Bruxelles-Midi, un samedi matin. Sofia et Malick comparent les horaires avant un rendez-vous à Lille.',
  bubbles: [
    { from: 'narrator', fr: 'Sofia et Malick regardent le tableau des départs.', en: 'Sofia and Malick are looking at the departures board.' },
    { from: 'coach', fr: 'Le train partira à huit heures pile. Nous attendrons devant la gare.', en: 'The train will leave at eight on the dot. We will wait in front of the station.', warn: 'partir, attendre : deux groupes, un seul r' },
    { from: 'user', fr: 'Je prendrai le train de sept heures, moi. On descendra à la prochaine station.', en: 'I will take the seven o clock train. We will get off at the next stop.' },
    { from: 'coach', fr: 'Alors tu attendras trente minutes sur le quai. Je te dirai la vérité demain.', en: 'Then you will wait thirty minutes on the platform. I will tell you the truth tomorrow.', warn: 'dire donne dir-, et rien de plus' },
    { from: 'user', fr: 'Vous lirez le contrat avant de signer, quand même.', en: 'You will read the contract before signing, all the same.' },
    { from: 'coach', fr: 'Bien sûr. Et nous vendrons la voiture au printemps.', en: 'Of course. And we will sell the car in the spring.', warn: 'vendre perd son e, garde son r' },
  ],
  closing: { fr: 'Trois groupes, une seule machine.', en: 'Three groups, one machine.' },
  audio: REC('rec-b1-05-quai'),
  say: REFRAME,
  terms: ['radical', 'infinitif'],
};

/** NAME: one card per group, plus the constant. */
const A3_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-groupes',
  title: 'Les trois groupes au futur',
  frSub: 'Une seule coupure dans tout le système',
  hint: 'Quatre cartes. Regarde ce qui reste de l’infinitif.',
  audio: REC('rec-b1-05-groupes'),
  say: REFRAME,
  terms: ['infinitif'],
  cards: [
    {
      head: 'Les verbes en -er', label: Cap(ER_VERBS_REF),
      fr: 'parler · je parlerai',
      sub: '[par-LAY] · [zhuh par-luh-RAY]',
      body: "Rien ne bouge. Tu écris l'infinitif, puis la terminaison. C'est le groupe le plus simple et le plus nombreux. EN: nothing moves: write the infinitive, then the ending.",
    },
    {
      head: 'Les verbes en -ir', label: Cap(IR_VERBS_REF),
      fr: 'finir · je finirai',
      sub: '[fee-NEER] · [zhuh fee-nee-RAY]',
      body: "Pareil. Le r de finir est déjà là, donc tu n'en ajoutes pas un deuxième. EN: the r of finir is already there, so do not add a second one.",
    },
    {
      head: 'Les verbes en -re', label: Cap(RE_VERBS_REF),
      fr: 'prendre · je prendrai',
      sub: '[PRAHⁿDR] · [zhuh prahⁿ-DRAY]',
      body: `Un seul e tombe, et le r reste. « ${A211_REFRAME_FR} » EN: one e drops and the r stays.`,
    },
    {
      head: 'Ce qui ne change jamais', label: 'la constante',
      fr: 'parler- · finir- · prendr-',
      sub: '[par-LEHR] · [fee-NEER] · [PRAHⁿDR]',
      body: "Les trois radicaux finissent par un r. C'est la seule chose à vérifier avant d'écrire la terminaison. EN: all three stems end in an r, and that is the only thing to check.",
    },
  ],
};

/** NAME, part two: the third group in real sentences, from the corpus. */
const A3_RE: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-re',
  layer: 'core',
  title: 'Le e qui tombe, en six phrases',
  examples: [
    ex(E(1042), 'prendre donne prendr-'),
    ex(E(1044), 'répondre donne répondr-'),
    ex(E(1045), 'écrire donne écrir-'),
    ex(E(1048), 'vendre donne vendr-'),
    ex(E(1051), 'dire donne dir-'),
    ex(E(1052), 'suivre donne suivr-'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infinitif'],
};

/** BUILD: the forms first, then the same verbs inside sentences. */
const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Enlève un e, et rien d’autre',
  groups: [
    grp('Les formes nues', [
      it(E(1036), 'prendre moins le e'),
      it(E(1037), 'la même coupure au pluriel'),
      it(E(1038), 'attendre moins le e'),
      it(E(1039), 'répondre moins le e'),
    ], chk(
      'Combien de lettres disparaissent entre prendre et prendrai ?',
      ['deux', 'trois', 'une seule'],
      2,
      "Seulement le e final. Le d et le r restent. EN: only the final e goes.",
    )),
    grp('Dans une phrase', [
      it(E(1043), 'attendre, au pluriel'),
      it(E(1046), 'lire, à vous'),
      it(E(1049), 'descendre, à on'),
      it('fr.a2.transports-quotidiens.216', 'partir, une annonce de gare'),
    ], chk(
      'Dans « vous lirez », où est passé le e de lire ?',
      ["il est devenu un é", 'il est tombé'],
      1,
      "lire donne lir-, puis -ez. EN: lire gives lir-, then the ending.",
    )),
    ctl('Le test', 'Tu veux le futur de descendre. Quelle est ta première action ?',
      ['enlever le e final', 'enlever -re', 'ajouter -er'], 0,
      "Le e seulement : descendr- plus la terminaison. EN: the final e only."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'infinitif'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a3-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Cinq phrases des trois groupes',
  itemIds: dicteeFor(3),
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical'],
};

/** CHOOSE by ear: eight sentences, and the question is which group. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'De quel groupe vient ce verbe',
  lines: [
    ln(E(1042)), ln(E(1044)), ln(E(1047)), ln(E(1050)), ln(E(1052)), ln(E(1046)), ln(E(1049)), ln('fr.a2.heure-et-date.088'),
  ],
  questions: [
    { q: 'Première phrase : prendre ou prêter ?', opts: ['prendre', 'prêter'], correct: 0,
      why: '« Je prendrai » : le d se prononce devant le r. EN: the d is audible before the r.' },
    { q: 'Deuxième phrase : combien de syllabes dans le verbe ?', opts: ['deux', 'trois'], correct: 1,
      why: '« ré-pon-dra » : trois. EN: ré-pon-dra, three syllables.' },
    { q: 'Cinquième phrase : le verbe est-il au futur ?', opts: ['oui', 'non'], correct: 0,
      why: '« elle suivra » : le r est là, entre suiv- et -a. EN: the r is there.' },
    { q: 'Sixième phrase : lirez ou lisez ?', opts: ['lisez', 'lirez'], correct: 1,
      why: 'Avec r, c’est demain. Sans r, c’est maintenant. EN: with the r it is the future.' },
    { q: 'Dernière phrase : parler est de quel groupe ?', opts: ['-re', '-ir', '-er'], correct: 2,
      why: 'parler, premier groupe, et son radical est parler-. EN: parler, first group.' },
  ],
  audio: REC('rec-b1-05-groupes-ecoute'),
  say: REFRAME,
  terms: ['infinitif'],
};

/** TRAP: every way an English speaker mishandles the -re group. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Six pièges du troisième groupe',
  rule: {
    title: 'Un e part, rien ne s’ajoute',
    body: "Les fausses formes viennent toutes du même réflexe : ajouter quelque chose. Le futur n'ajoute qu'une terminaison. EN: every wrong form here comes from adding something, and the future adds only an ending.",
  },
  cards: [
    { promptLabel: 'le e gardé', promptSound: 'Je prendreai le train de sept heures.', fr: 'Je prendrai le train de sept heures.', ipa: '/ʒə pʁɑ̃.dʁe lə tʁɛ̃ də sɛ.tœʁ/', tip: 'Le e de prendre tombe avant la terminaison. EN: the e of prendre drops.' },
    { promptLabel: 'le -er ajouté', promptSound: 'Nous attenderons devant la gare.', fr: 'Nous attendrons devant la gare.', ipa: '/nu.za.tɑ̃.dʁɔ̃ də.vɑ̃ la ɡaʁ/', tip: "attendre n'est pas un verbe en -er. EN: attendre is not an -er verb." },
    { promptLabel: 'le r doublé', promptSound: 'Elle répondrra à ton message ce soir.', fr: 'Elle répondra à ton message ce soir.', ipa: '/ɛl ʁe.pɔ̃.dʁa a tɔ̃ me.saʒ sə swaʁ/', tip: 'Un seul r, celui de l’infinitif. EN: one r, the one from the infinitive.' },
    { promptLabel: 'le radical rallongé', promptSound: "J'écrirerai une lettre au propriétaire.", fr: "J'écrirai une lettre au propriétaire.", ipa: '/ʒe.kʁi.ʁe yn lɛtʁ o pʁɔ.pʁi.e.tɛʁ/', tip: 'écrire a déjà son r : écrir- plus ai. EN: écrire already has its r.' },
    { promptLabel: 'le radical raccourci', promptSound: 'Ils vendont leur voiture au printemps.', fr: 'Ils vendront leur voiture au printemps.', ipa: '/il vɑ̃.dʁɔ̃ lœʁ vwa.tyʁ o pʁɛ̃.tɑ̃/', tip: 'Sans r, il ne reste que le présent de vendre. EN: without the r it is just the present.' },
    { promptLabel: 'la terminaison inventée', promptSound: 'Nous vivrerons près du fleuve.', fr: 'Nous vivrons près du fleuve.', ipa: '/nu vi.vʁɔ̃ pʁɛ dy flœv/', tip: 'vivre donne vivr-, puis -ons. EN: vivre gives vivr-, then -ons.' },
  ],
  drill: [
    { promptSay: 'Je ... le train de sept heures. (prendre)', opts: ['prendrai', 'prendreai'], correct: 0 },
    { promptSay: 'Nous ... devant la gare. (attendre)', opts: ['attenderons', 'attendrons'], correct: 1 },
    { promptSay: 'Elle ... à ton message ce soir. (répondre)', opts: ['répondra', 'répondrra'], correct: 0 },
    { promptSay: "J'... une lettre au propriétaire. (écrire)", opts: ['écrirerai', 'écrirai'], correct: 1 },
    { promptSay: 'Ils ... leur voiture au printemps. (vendre)', opts: ['vendront', 'vendont'], correct: 0 },
    { promptSay: 'Nous ... près du fleuve. (vivre)', opts: ['vivrerons', 'vivrons'], correct: 1 },
    { promptSay: 'Je te ... la vérité demain. (dire)', opts: ['dirai', 'direrai'], correct: 0 },
    { promptSay: 'On ... à la prochaine station. (descendre)', opts: ['descenderá', 'descendra'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un e part, rien ne s’ajoute' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse ajoute' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-05-piege-groupes'),
  say: REFRAME,
  terms: ['infinitif'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le premier groupe', 'Le futur de chanter commence par quel radical ?',
    ['chanter-', 'chant-'], 0,
    "L'infinitif entier. EN: the whole infinitive."),
  ctl('Le troisième groupe', 'Le futur de attendre commence par quel radical ?',
    ['attend-', 'attendr-', 'attendre-'], 1,
    'Le e tombe, le r reste. EN: the e drops, the r stays.'),
  ctl('La constante', 'Par quelle lettre finissent les trois radicaux ?',
    ['un e', 'un r'], 1,
    "Toujours un r, dans les trois groupes. EN: always an r, in all three groups."),
], ['radical', 'infinitif']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Les trois groupes',
    opener: {
      line: 'Prendre, attendre, vendre : ces verbes perdent une lettre au futur, et une seule. EN: Prendre, attendre and vendre lose one letter in the future, and only one.',
      imageRef: 'lessons/futur-simple/act03.jpg',
    },
    sections: [],
    milestone: "Tu mets au futur n'importe quel verbe régulier des trois groupes, sans hésiter sur le e. EN: You can put any regular verb from the three groups into the future.",
    estScreens: 30, restPoints: ['a3-construire'],
  },
  sections: [A3_HISTOIRE, A3_REGLE, A3_RE, A3_CONSTRUIRE, A3_DICTEE, A3_ECOUTE, A3_PIEGE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — PROCHE OU SIMPLE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the same meeting, said out loud and then written down. Nobody is
 *  corrected: the two versions are both right and they do different work. */
const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Le compte rendu de Léa',
  frSub: 'Ce qui se dit, ce qui s’écrit',
  setting: 'Un bureau à Namur, lundi matin. Karim parle, Léa écrit le compte rendu de la réunion.',
  bubbles: [
    { from: 'narrator', fr: 'La réunion est finie. Léa ouvre son ordinateur.', en: 'The meeting is over. Léa opens her laptop.' },
    { from: 'coach', fr: 'On va informer les clients ce matin, et on va changer la date.', en: 'We are going to tell the clients this morning, and we are going to change the date.', warn: 'deux futurs proches, à l’oral' },
    { from: 'user', fr: 'Dans le compte rendu, j’écrirai autre chose.', en: 'In the minutes I will write something else.' },
    { from: 'coach', fr: 'Dis-moi ce que tu écriras.', en: 'Tell me what you will write.' },
    { from: 'user', fr: 'Nous informerons les clients ce matin et nous changerons la date.', en: 'We will inform the clients this morning and we will change the date.', warn: 'deux futurs simples, à l’écrit' },
    { from: 'coach', fr: 'C’est la même décision, et ce n’est pas la même phrase.', en: 'It is the same decision, and it is not the same sentence.' },
  ],
  closing: { fr: 'Deux machines pour un seul demain.', en: 'Two machines for one tomorrow.' },
  audio: REC('rec-b1-05-compte-rendu'),
  say: REFRAME,
  terms: ['proche', 'simple'],
};

/** NAME: what each one actually says. */
const A4_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-proche',
  title: 'Ce que chaque futur promet',
  frSub: 'Deux formes, deux messages',
  hint: 'Quatre cartes. La dernière casse une idée reçue.',
  audio: REC('rec-b1-05-deux-futurs'),
  say: REFRAME,
  terms: ['proche', 'simple'],
  cards: [
    {
      head: 'Le futur proche garde un fil', label: 'aller + infinitif',
      fr: 'Je vais réserver la salle.',
      sub: '[zhuh veh ray-zehr-VAY la SAL]',
      body: "Ça part de maintenant : c'est décidé, c'est lancé, ou tu le vois arriver. EN: it starts from now: decided, under way, or visible.",
    },
    {
      head: 'Le futur simple coupe le fil', label: 'un seul mot',
      fr: 'Je réserverai la salle en janvier.',
      sub: '[zhuh ray-zehr-vuh-RAY la SAL ahⁿ zhahⁿ-VYAY]',
      body: "La phrase pose un fait à venir, sans rien dire de ton humeur d'aujourd'hui. EN: it states a coming fact and says nothing about today.",
    },
    {
      head: 'Ce n’est pas une question de distance', label: 'le piège',
      fr: 'Le train partira à huit heures pile.',
      sub: '[luh TREHⁿ par-tee-RA a wee-tuhr PEEL]',
      body: "Ce train part dans dix minutes, et c'est le futur simple : un horaire s'annonce. EN: that train leaves in ten minutes and still takes the futur simple.",
    },
    {
      head: 'Un jour peut être très loin', label: "l'autre côté du piège",
      fr: 'Un jour, je vais arrêter de fumer.',
      sub: '[uhⁿ ZHOOR zhuh veh a-reh-TAY duh fü-MAY]',
      body: "C'est loin et c'est le futur proche, parce que la décision est déjà prise aujourd'hui. EN: far off, and still futur proche, because the decision is already taken.",
    },
  ],
};

/** NAME, part two: the pairs, side by side, from the corpus. */
const A4_PAIRES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-paires',
  layer: 'core',
  title: 'Six phrases, trois paires',
  examples: [
    ex(E(1054), 'décidé aujourd’hui'),
    ex(E(1055), 'un fait posé, avec une date'),
    ex(E(1061), 'ça commence dans dix secondes'),
    ex(E(1062), "l'horaire officiel du même train"),
    ex(E(1064), 'un projet déjà lancé'),
    ex(E(1063), "l'annonce de l'entreprise"),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proche', 'simple'],
};

/** BUILD: sort by what the sentence is doing, not by when it happens. */
const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le fil, ou pas de fil',
  groups: [
    grp('Ça part de maintenant', [
      it(E(1056), 'tu vois le ciel'),
      it(E(1057), 'tu vois la personne trébucher'),
      it(E(1069), 'tu es sûr, et tu le dis là'),
      it('fr.a2.heure-et-date.131', 'ça commence dans un instant'),
    ], chk(
      'Ces quatre phrases : pourrais-tu les écrire dans un contrat ?',
      ['non, elles parlent du moment présent', 'oui, sans problème'],
      0,
      "Elles décrivent ce que tu vois ou ce que tu viens de décider. EN: they describe what you see or have just decided.",
    )),
    grp('Un fait annoncé', [
      it(E(1058), 'un projet de vie'),
      it(E(1060), 'une prévision'),
      it(E(1070), 'une annonce officielle'),
      it(E(1066), 'la règle elle-même'),
    ], chk(
      'Qu’ont en commun ces quatre phrases ?',
      ['elles sont toutes loin dans le temps', 'elles posent un fait, sans lien avec ton humeur d’aujourd’hui'],
      1,
      "Le futur simple annonce ; il ne raconte pas ta décision d'aujourd'hui. EN: the futur simple announces rather than reporting today's decision.",
    )),
    ctl('Le vrai partage', 'Quelle question te fait choisir ?',
      ['est-ce que c’est loin', 'est-ce que c’est sûr', 'est-ce que ça part de maintenant'], 2,
      "La distance ne décide rien. Le lien avec maintenant, si. EN: distance decides nothing; the thread to now does."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proche', 'simple'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Un mot ou deux',
  lines: [
    ln(E(1054)), ln(E(1055)), ln(E(1061)), ln(E(1062)), ln('fr.a2.heure-et-date.084'), ln(E(1058)), ln('fr.a2.cafe.053'), ln(E(1063)),
  ],
  questions: [
    { q: 'Première phrase : le verbe tient en combien de mots ?', opts: ['deux', 'un'], correct: 0,
      why: '« je vais réserver » : aller, puis l’infinitif. EN: aller plus the infinitive.' },
    { q: 'Deuxième phrase : même verbe, même forme ?', opts: ['oui', 'non, un seul mot cette fois'], correct: 1,
      why: '« je réserverai » : le futur simple tient en un mot. EN: the futur simple is one word.' },
    { q: 'Troisième phrase : le train part quand ?', opts: ['dans un instant', 'à huit heures'], correct: 0,
      why: '« va partir » : ça commence maintenant. EN: it is starting now.' },
    { q: 'Quatrième phrase : quelle heure entends-tu ?', opts: ['dix heures', 'huit heures'], correct: 1,
      why: 'Huit heures pile, dans une annonce. EN: eight on the dot, in an announcement.' },
    { q: 'Sixième phrase : un jour ou une date précise ?', opts: ['un jour, sans date', 'une date précise'], correct: 0,
      why: '« Un jour, nous habiterons » : pas de date, et le futur simple. EN: no date, and still the futur simple.' },
  ],
  audio: REC('rec-b1-05-deux-futurs-ecoute'),
  say: REFRAME,
  terms: ['proche', 'simple'],
};

/** TRAP. Every `why` says why the wrong version was a reasonable thing to say. */
const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre confusions entre les deux futurs',
  errors: [
    {
      wrong: 'Je vais réserverai la salle en janvier.',
      right: 'Je réserverai la salle en janvier.',
      why: "Normal : tu connais les deux machines et tu les mets l'une sur l'autre. Choisis-en une. EN: you know both machines and stacked them; pick one.",
    },
    {
      wrong: 'Regarde le ciel, il pleuvra.',
      right: 'Regarde le ciel, il va pleuvoir.',
      why: "Correct dans un bulletin météo. Ici tu montres le ciel, donc le fil avec maintenant est le sujet. EN: correct in a forecast, wrong when you are pointing at the sky.",
    },
    {
      wrong: 'Attention, tu tomberas.',
      right: 'Attention, tu vas tomber.',
      why: "En anglais, you will fall sert aux deux. En français, un avertissement immédiat prend le futur proche. EN: an immediate warning takes the futur proche.",
    },
    {
      wrong: 'Dans le courriel : je vais confirmer la date.',
      right: 'Dans le courriel : nous confirmerons la date par écrit.',
      why: "Ce n'est pas faux, c'est plus faible. À l'écrit, on attend un engagement, pas une intention. EN: not wrong, weaker: writing expects a commitment.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proche', 'promesse'],
};

/** CHOOSE: the meaning picks the form, and the situation is the clue. */
const A4_SENS: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-sens',
  layer: 'core',
  size: 'lg',
  title: 'Choisis pour la bonne raison',
  groups: [
    grp('Tu parles à quelqu’un, là, maintenant', [
      it('fr.a2.heure-et-date.099', 'un rappel immédiat'),
      it('fr.a2.heure-et-date.133', 'une urgence partagée'),
      it(E(1067), 'ce que tu viens de décider'),
      it(E(1059), 'ce qui est déjà prévu pour ce soir'),
    ], chk(
      'Pourquoi le futur proche ici ?',
      ["parce que c'est bientôt", 'parce que ça part de la situation présente'],
      1,
      "Le rappel, l'urgence, la décision : tout part de maintenant. EN: reminder, urgency, decision: all start from now.",
    )),
    grp('Tu poses un fait pour plus tard', [
      it(E(1068), 'un point reporté à la réunion suivante'),
      it(E(1060), 'une prévision sur dix ans'),
      it(E(1062), 'un horaire'),
      it(E(1070), 'une décision d’entreprise'),
    ], chk(
      'Laquelle de ces quatre phrases se passe le plus tôt ?',
      ["l'horaire du train", 'la prévision sur dix ans'],
      0,
      "Le train part dans dix minutes, et il prend quand même le futur simple. EN: the earliest one still takes the futur simple.",
    )),
    ctl('Le résumé', 'Vrai ou faux : le futur simple est toujours plus loin.',
      ['vrai', 'faux'], 1,
      "Faux, et c'est le piège que cet acte casse. EN: false, and that is the trap this act breaks."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proche', 'simple'],
};

/** NAME, last: the four situations, so the choice becomes a habit. */
const A4_QUAND: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-quand',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-proche',
  title: 'Quand un francophone choisit quoi',
  frSub: 'Quatre situations',
  hint: 'Quatre cartes. Reconnais la situation avant de choisir la forme.',
  audio: REC('rec-b1-05-deux-futurs'),
  say: REFRAME,
  terms: ['proche', 'simple'],
  cards: [
    { head: 'En conversation', label: 'futur proche', fr: 'On va manger chez ma sœur.', sub: '[ohⁿ va mahⁿ-ZHAY shay ma SUHR]', body: "C'est ce qu'on entend le plus, toute la journée. EN: this is what you hear most, all day long." },
    { head: 'Devant un signe visible', label: 'futur proche', fr: 'Attention, tu vas tomber.', sub: '[a-tahⁿ-SYOHⁿ tü va tohⁿ-BAY]', body: "Tu vois la chose arriver, donc tu la relies à maintenant. EN: you can see it coming, so you tie it to now." },
    { head: 'Dans une annonce ou un horaire', label: 'futur simple', fr: 'Le magasin ouvrira à neuf heures.', sub: '[luh ma-ga-ZEHⁿ oo-vree-RA a nuh-VUHR]', body: "Ce qui est prévu par un règlement, pas par toi. EN: what a timetable decides, not you." },
    { head: 'Dans un écrit qui engage', label: 'futur simple', fr: 'Nous confirmerons la date par écrit.', sub: '[noo kohⁿ-feer-muh-ROHⁿ la DAT par ay-KREE]', body: 'Courriel, contrat, examen : le lecteur veut un engagement. EN: email, contract, exam: the reader wants a commitment.' },
  ],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La distance', 'Le futur simple sert-il seulement aux choses lointaines ?',
    ['non', 'oui'], 0,
    "Non : un train qui part dans dix minutes prend le futur simple. EN: no; a train leaving in ten minutes takes it."),
  ctl("À l'écrit", 'Dans un courriel professionnel, quelle forme attend-on ?',
    ['le futur simple', 'le futur proche', 'les deux également'], 0,
    "Le futur simple, parce qu'il engage. EN: the futur simple, because it commits."),
  ctl('Le fil', 'Quelle question décide vraiment ?',
    ['est-ce que c’est loin', 'est-ce que ça part de maintenant'], 1,
    "Le lien avec le moment présent, jamais la distance. EN: the thread to now, never the distance."),
], ['proche', 'simple']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Proche ou simple',
    opener: {
      line: "Un train qui part dans dix minutes prend le futur lointain : ici tu comprends pourquoi. EN: A train leaving in ten minutes takes the far-off future, and here you find out why.",
      imageRef: 'lessons/futur-simple/act04.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre les deux futurs par ce que ta phrase fait, et non par la distance. EN: You choose between the two futures by what your sentence does, not by how far away it is.",
    estScreens: 34, restPoints: ['a4-construire', 'a4-erreurs'],
  },
  sections: [A4_HISTOIRE, A4_REGLE, A4_PAIRES, A4_CONSTRUIRE, A4_ECOUTE, A4_ERREURS, A4_SENS, A4_QUAND, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — L'INFINITIF GARDÉ EN ENTIER
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET BY EAR. These verbs are only a problem in writing: the ear hears
 *  nothing unusual, and that is exactly why the act opens with the ear. */
const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Compte les syllabes',
  lines: [
    ln(E(1077)), ln(E(1078)), ln(E(1079)), ln(E(1080)), ln(E(1081)), ln(E(1082)), ln(E(1084)), ln(E(1086)),
  ],
  questions: [
    { q: 'Première phrase : combien de syllabes dans le verbe ?', opts: ['quatre', 'cinq'], correct: 0,
      why: '« é-tu-di-rai » : quatre. Le e écrit ne compte pas. EN: four; the written e does not count.' },
    { q: 'Deuxième phrase : oublieras ou oubliras ?', opts: ['on entend la différence', 'les deux sonnent pareil'], correct: 1,
      why: "À l'oreille, rien ne les sépare. C'est l'orthographe qui tranche. EN: nothing separates them by ear." },
    { q: 'Troisième phrase : entends-tu un e après jou- ?', opts: ['non', 'oui'], correct: 0,
      why: '« zhoo-ROHⁿ » : le e est écrit, pas prononcé. EN: written, not pronounced.' },
    { q: 'Quatrième phrase : créeront a combien de e écrits ?', opts: ['un', 'deux', 'trois'], correct: 1,
      why: 'créer plus -ont donne créeront : deux e de suite. EN: two e in a row.' },
    { q: 'Ces huit verbes sont-ils irréguliers ?', opts: ['oui', 'non, seulement leur orthographe surprend'], correct: 1,
      why: "Ils suivent la règle à la lettre : infinitif entier plus terminaison. EN: they follow the rule exactly." },
  ],
  audio: REC('rec-b1-05-syllabes'),
  say: REFRAME,
  terms: ['emuet'],
};

/** NAME. Four cards, and none of them asks the learner to remember a list. */
const A5_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-orthographe',
  title: 'Les verbes qui ne perdent rien',
  frSub: "Le e qu'on écrit sans l'entendre",
  hint: 'Quatre cartes. Regarde ce qui reste écrit.',
  audio: REC('rec-b1-05-emuet'),
  say: REFRAME,
  terms: ['emuet', 'infinitif'],
  cards: [
    {
      head: 'Rien à enlever', label: 'les verbes en -ier',
      fr: "étudier · j'étudierai",
      sub: '[ay-tü-DYAY] · [zhay-tü-dee-RAY]',
      body: "La règle ne change pas : infinitif entier, puis terminaison. Le e se retrouve entre le i et le r. EN: the rule is unchanged; the e simply lands between the i and the r.",
    },
    {
      head: "Le e ne s'entend pas", label: 'le e muet',
      fr: 'oublier · tu oublieras',
      sub: '[oo-blee-YAY] · [tü oo-blee-RA]',
      body: "Tu prononces oubliras et tu écris oublieras. C'est la seule difficulté de ces verbes. EN: you say oubliras and write oublieras, and that is the whole difficulty.",
    },
    {
      head: 'Et pourtant il faut l’écrire', label: "l'orthographe",
      fr: 'jouer · nous jouerons',
      sub: '[zhoo-AY] · [noo zhoo-ROHⁿ]',
      body: "Sans ce e, tu as coupé l'infinitif, et ton lecteur voit une faute. EN: without that e you have cut the infinitive and the reader sees a mistake.",
    },
    {
      head: 'Même deux e de suite', label: 'créer',
      fr: 'créer · ils créeront',
      sub: '[kray-AY] · [eel kray-ROHⁿ]',
      body: "créer plus -ont donne créeront. Ça surprend l'œil et ça respecte la règle. EN: it surprises the eye and follows the rule.",
    },
  ],
};

/** The lesson's first tapTable. Six rows, each with its own detail page. */
const A5_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-tableau',
  layer: 'core',
  sheetId: 'sheet-orthographe',
  title: 'Six verbes qui gardent tout',
  cols: ['Infinitif', 'Futur', 'Syllabes entendues'],
  rows: [
    { cells: ['étudier', "j'étudierai", 'quatre'], say: "J'étudierai le français toute l'année.",
      detail: { title: 'étudier', body: "Le e s'écrit entre le i et le r, et personne ne le prononce. EN: the e is written between the i and the r and nobody says it.", say: "J'étudierai le français toute l'année." } },
    { cells: ['oublier', 'tu oublieras', 'trois'], say: 'Tu oublieras vite ce mauvais moment.',
      detail: { title: 'oublier', body: "Tu dis oubliras, tu écris oublieras. EN: you say oubliras and write oublieras.", say: 'Tu oublieras vite ce mauvais moment.' } },
    { cells: ['jouer', 'nous jouerons', 'trois'], say: 'Nous jouerons au foot dimanche matin.',
      detail: { title: 'jouer', body: "Le e de jouer reste, même si le son s'arrête après jou. EN: the e of jouer stays, even though the sound stops after jou.", say: 'Nous jouerons au foot dimanche matin.' } },
    { cells: ['créer', 'ils créeront', 'trois'], say: 'Ils créeront un nouveau service en septembre.',
      detail: { title: 'créer', body: 'Deux e de suite, et les deux sont obligatoires. EN: two e in a row, and both are required.', say: 'Ils créeront un nouveau service en septembre.' } },
    { cells: ['continuer', 'vous continuerez', 'cinq'], say: 'Vous continuerez sans moi.',
      detail: { title: 'continuer', body: "Après le u, le e est muet, exactement comme dans jouerons. EN: after the u the e is silent, just as in jouerons.", say: 'Nous continuerons la réunion après le déjeuner.' } },
    { cells: ['remercier', 'je te remercierai', 'cinq'], say: 'Je te remercierai comme il faut.',
      detail: { title: 'remercier', body: "Même famille que étudier : le i, puis le e muet, puis le r. EN: same family as étudier.", say: 'Je te remercierai comme il faut.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['emuet'],
};

/** BUILD: write the form, not say it. Every check turns on a letter. */
const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Écris ce que tu n’entends pas',
  groups: [
    grp('Les formes nues', [
      it(E(1072), 'étudier, entier'),
      it(E(1073), 'oublier, entier'),
      it(E(1074), 'jouer, entier'),
      it(E(1076), 'continuer, entier'),
    ], chk(
      'Que fais-tu de l’infinitif de jouer avant d’ajouter -ons ?',
      ['tu ne touches à rien', 'tu enlèves le e'],
      0,
      "jouer plus ons donne jouerons. EN: jouer plus ons gives jouerons.",
    )),
    grp('Dans une phrase', [
      it(E(1077), 'toute une année'),
      it(E(1080), 'un service en septembre'),
      it(E(1083), 'un petit cadeau'),
      it('fr.b1.journalisme.006', 'publier, à eux'),
    ], chk(
      'Combien de e écrits dans « ils publieront » ?',
      ['deux', 'aucun', 'un seul, entre i et r'],
      2,
      "publier garde son e : publie-r-ont. EN: publier keeps its e.",
    )),
    ctl('Le réflexe', 'Tu écris le futur de apprécier. Par quoi commences-tu ?',
      ['appréci-', 'apprécier-'], 1,
      "L'infinitif entier, comme partout ailleurs. EN: the whole infinitive, as everywhere else."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['emuet', 'infinitif'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a5-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: "Quatre phrases avec un e qu'on n'entend pas",
  itemIds: dicteeFor(5),
  audio: AUDIO,
  say: REFRAME,
  terms: ['emuet'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre fautes que l’oreille ne signale pas',
  errors: [
    {
      wrong: "J'étudirai le français toute l'année.",
      right: "J'étudierai le français toute l'année.",
      why: "Normal : tu as écrit ce que tu entends. Ici l'oreille ne suffit pas, parce que le e est muet. EN: you wrote what you heard, and here the ear is not enough.",
    },
    {
      wrong: 'Nous jourons au foot dimanche matin.',
      right: 'Nous jouerons au foot dimanche matin.',
      why: "jouer ressemble à un verbe court, et tu as coupé. L'infinitif reste entier. EN: jouer looks short, and you cut it.",
    },
    {
      wrong: 'Ils créront un nouveau service en septembre.',
      right: 'Ils créeront un nouveau service en septembre.',
      why: "Deux e de suite, ça semble une faute de frappe. C'est la forme correcte. EN: two e in a row looks like a typo and is the correct form.",
    },
    {
      wrong: 'Vous continurez sans moi.',
      right: 'Vous continuerez sans moi.',
      why: "Tu prononces trois syllabes et tu en écris trois. Il en faut quatre à l'écrit. EN: you write the three syllables you say, and writing needs four.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['emuet'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La règle', 'étudier au futur, première personne :',
    ["j'étudierai", "j'étudirai"], 0,
    "L'infinitif reste entier. EN: the infinitive stays whole."),
  ctl('Le son', 'Entend-on le e de oublieras ?',
    ['non, presque pas', 'oui, clairement', 'seulement au pluriel'], 0,
    "Presque pas, et il s'écrit quand même. EN: barely, and it is written all the same."),
  ctl('Le danger', 'Pourquoi ces verbes sont-ils difficiles ?',
    ['parce qu’ils sont irréguliers', 'parce que l’oreille ne dit pas comment les écrire'], 1,
    "Ils suivent la règle. Seule l'orthographe surprend. EN: they follow the rule; only the spelling surprises."),
], ['emuet', 'infinitif']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: "L'infinitif gardé entier",
    opener: {
      line: "Tu dis étudirai et tu écris étudierai : ici tu apprends une lettre que ton oreille ne te donnera jamais. EN: You say étudirai and write étudierai: here you learn a letter your ear will never give you.",
      imageRef: 'lessons/futur-simple/act05.jpg',
    },
    sections: [],
    milestone: "Tu écris sans hésiter les verbes en -ier, -uer et -éer, même quand le e ne s'entend pas. EN: You can write the -ier, -uer and -éer verbs without hesitating, even when the e is silent.",
    estScreens: 30, restPoints: ['a5-tableau'],
  },
  sections: [A5_ECOUTE, A5_REGLE, A5_TABLEAU, A5_CONSTRUIRE, A5_DICTEE, A5_ERREURS, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LES RADICAUX QUI CHANGENT
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a building notice, where seven stem-changing verbs do real work.
 *  No conditions after quand or si anywhere in it (b1.07 and b1.10 own those). */
const A6_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-lecture',
  layer: 'core',
  questionsInModal: true,
  title: "La note du syndic",
  frSub: 'Sept verbes qui changent de radical',
  text: "Chers voisins, voici ce qui changera dans l'immeuble au mois de mars. Nous appellerons une entreprise lundi pour le chauffage du deuxième étage. Les techniciens nettoieront les conduits mardi et mercredi, entre huit heures et midi. Vous ne paierez rien de plus ce mois-ci : la copropriété emploiera son budget de réserve. Chacun jettera ses cartons dans le local du fond, et non dans la cour. Le gardien se lèvera plus tôt pendant les travaux et il ouvrira la porte dès sept heures. Nous achèterons aussi deux vélos pour les livraisons du rez-de-chaussée. En cas de bruit, appelez-moi directement. Nous essaierons de finir avant les vacances de printemps.",
  glossary: [
    { word: 'les conduits', en: 'the ducts, the pipes', note: "Les tuyaux qui portent l'air chaud dans l'immeuble." },
    { word: 'la copropriété', en: 'the co-ownership, the block', note: 'Tous les propriétaires de l’immeuble ensemble.' },
    { word: 'le local du fond', en: 'the back storeroom', note: 'La petite pièce au bout de la cour.' },
    { word: 'les livraisons', en: 'the deliveries', note: 'Ce que les coursiers apportent.' },
  ],
  questions: [
    { q: 'Quels verbes ont un accent grave qui n’était pas dans l’infinitif ?', a: 'se lèvera et achèterons. Les infinitifs sont se lever et acheter, sans accent.' },
    { q: 'Quels verbes ont doublé une consonne ?', a: 'appellerons et jettera. Les infinitifs sont appeler et jeter, avec une seule consonne.' },
    { q: 'Quels verbes ont changé un y en i ?', a: 'nettoieront, paierez, emploiera et essaierons. Les infinitifs sont nettoyer, payer, employer et essayer.' },
    { q: 'Le verbe ouvrira a-t-il changé de radical ?', a: 'Non. ouvrir garde son infinitif entier, comme finir. Il est là pour montrer le contraste.' },
    { q: 'Le changement touche-t-il seulement la forme je ?', a: 'Non. nous appellerons, vous paierez, ils nettoieront : le radical change à toutes les personnes.' },
  ],
  audio: REC('rec-b1-05-syndic'),
  say: REFRAME,
  terms: ['radical'],
};

/** NAME: what changes, and the one thing that matters about it. */
const A6_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-orthographe',
  title: 'Quand le radical bouge',
  frSub: 'Un accent, une consonne doublée, un y',
  hint: 'Quatre cartes. La troisième est celle qui compte.',
  audio: REC('rec-b1-05-radicaux'),
  say: REFRAME,
  terms: ['radical', 'yeni'],
  cards: [
    {
      head: "L'accent qui apparaît", label: 'acheter, se lever',
      fr: "acheter · j'achèterai",
      sub: '[a-shuh-TAY] · [zha-sheh-tuh-RAY]',
      body: `Le e devient ouvert devant la syllabe muette, et l'accent l'écrit. « ${A209_REFRAME_FR} » EN: the e opens before the silent syllable, and the accent writes that sound.`,
    },
    {
      head: 'La consonne qui double', label: 'appeler, jeter',
      fr: 'appeler · il appellera',
      sub: '[a-puh-LAY] · [ee-la-pehl-RA]',
      body: "Même son que l'accent grave, écrit autrement : deux l ou deux t au lieu d'un è. EN: the same sound, written with a doubled consonant instead of an accent.",
    },
    {
      head: 'À toutes les personnes', label: 'la vraie difficulté',
      fr: 'nous achèterons · nous appellerons',
      sub: '[noo-za-sheh-tuh-ROHⁿ] · [noo-za-pehl-ROHⁿ]',
      body: "Au présent, nous et vous gardent l'ancienne forme. Au futur, non : le radical change six fois sur six. EN: in the present nous and vous keep the old form; in the future the stem changes at all six.",
    },
    {
      head: 'Le y devient i', label: 'payer, employer',
      fr: 'payer · vous paierez',
      sub: '[peh-YAY] · [voo peh-RAY]',
      body: 'Les verbes en -ayer, -oyer et -uyer échangent leur y contre un i. EN: verbs in -ayer, -oyer and -uyer swap their y for an i.',
    },
  ],
};

const A6_Y: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-y',
  layer: 'core',
  title: 'Le y qui devient i',
  examples: [
    ex(E(1092), 'payer, à vous'),
    ex(E(1093), 'essayer, à eux'),
    ex(E(1101), 'payer, dans une phrase'),
    ex(E(1104), 'employer, à elle'),
    ex(E(1105), 'nettoyer, à nous'),
    ex(E(1103), 'essayer, à je'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['yeni'],
};

const A6_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-tableau',
  layer: 'core',
  sheetId: 'sheet-orthographe',
  title: 'Six radicaux qui changent',
  cols: ['Infinitif', 'Radical au futur', 'Ce qui bouge'],
  rows: [
    { cells: ['acheter', 'achèter-', 'un accent grave'], say: "J'achèterai le billet ce soir.",
      detail: { title: 'acheter', body: "Le e de la deuxième syllabe s'ouvre et prend un accent grave. EN: the e of the second syllable opens and takes a grave accent.", say: 'Nous achèterons une voiture électrique.' } },
    { cells: ['se lever', 'lèver-', 'un accent grave'], say: 'Je me lèverai à six heures demain.',
      detail: { title: 'se lever', body: 'Même changement que acheter, et le pronom reste devant. EN: same change as acheter, and the pronoun stays in front.', say: 'Tu te lèveras plus tôt en hiver.' } },
    { cells: ['appeler', 'appeller-', 'deux l'], say: 'Nous appellerons un taxi à la sortie.',
      detail: { title: 'appeler', body: "Le son est celui de l'accent grave, écrit avec deux l. EN: the sound of the grave accent, written with two l.", say: "Le bureau t'appellera avant midi." } },
    { cells: ['jeter', 'jetter-', 'deux t'], say: 'Elle jettera ces vieux papiers.',
      detail: { title: 'jeter', body: 'Même famille que appeler : la consonne double au lieu de l’accent. EN: same family as appeler.', say: 'Elle jettera ces vieux papiers.' } },
    { cells: ['payer', 'paier-', 'y devient i'], say: 'Je paierai par carte, comme toujours.',
      detail: { title: 'payer', body: "payerai existe aussi et se dit moins. La leçon écrit paierai. EN: payerai also exists and is less common; this lesson writes paierai.", say: 'Nous paierons la facture avant la fin du mois.' } },
    { cells: ['employer', 'emploier-', 'y devient i'], say: 'Elle emploiera un nouveau logiciel.',
      detail: { title: 'employer', body: 'Les verbes en -oyer et -uyer changent toujours, sans exception. EN: -oyer and -uyer verbs always change.', say: 'Nous nettoierons la cuisine samedi.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'yeni'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le radical change, partout',
  groups: [
    grp('Accent ou consonne doublée', [
      it(E(1088), 'acheter avec son accent'),
      it(E(1089), 'se lever, pronom devant'),
      it(E(1090), 'appeler avec ses deux l'),
      it(E(1091), 'jeter avec ses deux t'),
    ], chk(
      'Ces quatre changements : à quelles personnes ?',
      ['seulement à je', 'aux six personnes', 'seulement au singulier'],
      1,
      "Au futur, le radical est le même partout. EN: in the future the stem is the same at every person.",
    )),
    grp('Le y devient i', [
      it(E(1092), 'payer'),
      it(E(1093), 'essayer'),
      it(E(1104), 'employer'),
      it(E(1105), 'nettoyer'),
    ], chk(
      'Quelle lettre remplace le y ?',
      ['un i', 'un e'],
      0,
      'paierez, essaieront, emploiera, nettoierons. EN: an i, in all of them.',
    )),
    ctl('La frontière', 'envoyer suit-il cette règle ?',
      ['oui, il donnera j’envoierai', 'non, son radical est autre chose'], 1,
      `Non : son radical est enverr-, et ${FUTUR_IRREG_REF} s'en occupe. EN: no, its stem is enverr-, and the next lesson handles it.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'yeni'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Entends-tu le changement',
  lines: [
    ln(E(1094)), ln(E(1096)), ln(E(1098)), ln(E(1100)), ln(E(1101)), ln(E(1095)), ln(E(1099)), ln(E(1105)),
  ],
  questions: [
    { q: 'Première phrase : achèterai ou acheterai ?', opts: ['on entend un è ouvert', 'on entend un e muet'], correct: 0,
      why: "L'accent se dit : a-CHÈ-te-rai. EN: the accent is audible." },
    { q: 'Troisième phrase : appellera a quel son au milieu ?', opts: ['a-peu-le-ra', 'a-PÈL-ra'], correct: 1,
      why: "Deux l écrits, un è ouvert entendu. EN: two written l, an open è heard." },
    { q: 'Cinquième phrase : paierai ou payerai ?', opts: ['les deux se disent', 'seul paierai existe'], correct: 0,
      why: 'Les deux existent. La leçon écrit paierai. EN: both exist; this lesson writes paierai.' },
    { q: 'Sixième phrase : le changement touche-t-il aussi nous ?', opts: ['non', 'oui'], correct: 1,
      why: '« nous achèterons » : le même è qu’à je. EN: the same è as at je.' },
    { q: 'Dernière phrase : nettoierons ou nettoyerons ?', opts: ['nettoierons', 'nettoyerons'], correct: 0,
      why: 'Les verbes en -oyer changent toujours leur y. EN: -oyer verbs always change their y.' },
  ],
  audio: REC('rec-b1-05-radicaux-ecoute'),
  say: REFRAME,
  terms: ['radical'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Six pièges du radical',
  rule: {
    title: 'Ce qui change au présent ne change pas de la même façon',
    body: "Au présent, nous achetons garde le e simple. Au futur, il n'y a plus d'exception : le radical est le même aux six personnes. EN: in the present nous achetons keeps the plain e; in the future the stem is identical at all six persons.",
  },
  cards: [
    { promptLabel: "l'accent oublié", promptSound: "J'acheterai le billet ce soir.", fr: "J'achèterai le billet ce soir.", ipa: '/ʒa.ʃɛ.tə.ʁe lə bi.jɛ sə swaʁ/', tip: "Le è s'entend, donc il s'écrit. EN: the è is audible, so it is written." },
    { promptLabel: 'le pluriel épargné', promptSound: 'Nous acheterons une voiture électrique.', fr: 'Nous achèterons une voiture électrique.', ipa: '/nu.za.ʃɛ.tə.ʁɔ̃ yn vwa.tyʁ e.lɛk.tʁik/', tip: 'Au futur, nous change comme je. EN: in the future nous changes just like je.' },
    { promptLabel: 'la consonne simple', promptSound: 'Nous appelerons un taxi à la sortie.', fr: 'Nous appellerons un taxi à la sortie.', ipa: '/nu.za.pɛl.ʁɔ̃ œ̃ tak.si a la sɔʁ.ti/', tip: 'appeler double son l à toutes les personnes. EN: appeler doubles its l everywhere.' },
    { promptLabel: 'le t simple', promptSound: 'Elle jetera ces vieux papiers.', fr: 'Elle jettera ces vieux papiers.', ipa: '/ɛl ʒɛt.ʁa se vjø pa.pje/', tip: 'jeter double son t, comme appeler double son l. EN: jeter doubles its t.' },
    { promptLabel: 'le y gardé', promptSound: 'Nous nettoyerons la cuisine samedi.', fr: 'Nous nettoierons la cuisine samedi.', ipa: '/nu nɛ.twa.ʁɔ̃ la kɥi.zin sam.di/', tip: 'Les verbes en -oyer échangent le y contre un i. EN: -oyer verbs swap the y for an i.' },
    { promptLabel: 'le radical inventé', promptSound: "J'envoierai les documents demain.", fr: "J'essaierai encore une fois demain.", ipa: '/ʒe.sɛ.ʁe ɑ̃.kɔʁ yn fwa də.mɛ̃/', tip: `essayer suit la règle, envoyer non : son radical arrive dans ${FUTUR_IRREG_REF}. EN: essayer follows the rule, envoyer does not.` },
  ],
  drill: [
    { promptSay: "J'... le billet ce soir. (acheter)", opts: ['acheterai', 'achèterai'], correct: 1 },
    { promptSay: 'Nous ... une voiture électrique. (acheter)', opts: ['achèterons', 'acheterons'], correct: 0 },
    { promptSay: 'Nous ... un taxi à la sortie. (appeler)', opts: ['appelerons', 'appellerons'], correct: 1 },
    { promptSay: 'Elle ... ces vieux papiers. (jeter)', opts: ['jettera', 'jetera'], correct: 0 },
    { promptSay: 'Nous ... la cuisine samedi. (nettoyer)', opts: ['nettoyerons', 'nettoierons'], correct: 1 },
    { promptSay: 'Vous ... la facture. (payer)', opts: ['paierez', 'payrez'], correct: 0 },
    { promptSay: 'Je me ... à six heures demain. (se lever)', opts: ['leverai', 'lèverai'], correct: 1 },
    { promptSay: 'Elle ... un nouveau logiciel. (employer)', opts: ['emploiera', 'employera'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le radical change aux six personnes' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse oublie' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-05-piege-radicaux'),
  say: REFRAME,
  terms: ['radical', 'yeni'],
};

const A6_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a6-flash',
  layer: 'core',
  title: 'Huit radicaux à retenir',
  cards: [
    { front: 'I will buy', back: "j'achèterai", say: "J'achèterai le billet ce soir." },
    { front: 'we will buy', back: 'nous achèterons', say: 'Nous achèterons une voiture électrique.' },
    { front: 'I will get up', back: 'je me lèverai', say: 'Je me lèverai à six heures demain.' },
    { front: 'he will call you', back: "il t'appellera", say: "Le bureau t'appellera avant midi." },
    { front: 'we will call', back: 'nous appellerons', say: 'Nous appellerons un taxi à la sortie.' },
    { front: 'she will throw away', back: 'elle jettera', say: 'Elle jettera ces vieux papiers.' },
    { front: 'I will pay', back: 'je paierai', say: 'Je paierai par carte, comme toujours.' },
    { front: 'they will try', back: 'ils essaieront', say: "J'essaierai encore une fois demain." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl("L'étendue", 'Le radical achèter- vaut pour quelles personnes ?',
    ['je seulement', 'tout sauf nous et vous', 'toutes les six'], 2,
    "Toutes les six, contrairement au présent. EN: all six, unlike the present."),
  ctl("L'écriture", 'Comment écrit-on le futur de appeler, à nous ?',
    ['nous appelerons', 'nous appellerons'], 1,
    'Deux l, à toutes les personnes. EN: two l, at every person.'),
  ctl('La frontière', 'Et envoyer ?',
    ["il a un autre radical, et c'est la leçon suivante", "il donne j'envoierai"], 0,
    `Son radical est enverr-, et ${FUTUR_IRREG_REF} le donne. EN: its stem is enverr-, and the next lesson gives it.`),
], ['radical', 'yeni']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Les radicaux qui changent',
    opener: {
      line: "Quelques verbes en -er écrivent leur radical autrement au futur, et cette fois ils le font partout. EN: A few -er verbs spell their stem differently in the future, and this time they do it everywhere.",
      imageRef: 'lessons/futur-simple/act06.jpg',
    },
    sections: [],
    milestone: "Tu écris achèterai, appellerai, jettera et paieront sans te demander à quelle personne tu es. EN: You can write achèterai, appellerai, jettera and paieront without wondering which person you are at.",
    estScreens: 38, restPoints: ['a6-tableau', 'a6-piege'],
  },
  sections: [A6_LECTURE, A6_REGLE, A6_Y, A6_TABLEAU, A6_CONSTRUIRE, A6_ECOUTE, A6_PIEGE, A6_FLASH, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LA PHRASE AU FUTUR
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a customer-service call, where almost every useful sentence is a
 *  refusal, a pronoun or a question. */
const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Le colis qui n’arrive pas',
  frSub: 'Refuser, demander, promettre',
  setting: 'Au téléphone avec le service client, un jeudi soir. Sofia attend un colis depuis huit jours.',
  bubbles: [
    { from: 'narrator', fr: 'Le colis n’est pas arrivé. Sofia appelle le service client.', en: 'The parcel has not arrived. Sofia calls customer services.' },
    { from: 'coach', fr: 'Nous ne changerons rien pour l’instant. Le transporteur repassera demain.', en: 'We will not change anything for now. The courier will come back tomorrow.', warn: 'ne ... rien autour d’un seul mot' },
    { from: 'user', fr: 'Le transporteur ne trouvera personne à cette heure-là.', en: 'The courier will not find anybody at that time.' },
    { from: 'coach', fr: 'À quelle heure est-ce que vous rentrerez, alors.', en: 'What time will you be home, then.' },
    { from: 'user', fr: 'Vers dix-neuf heures. Je ne bougerai pas de la soirée.', en: 'Around seven. I will not move all evening.', warn: 'ne ... pas, et rien d’autre ne bouge' },
    { from: 'coach', fr: 'Très bien. Je le noterai, et je vous le confirmerai par courriel.', en: 'Very well. I will make a note of it and confirm it to you by email.', warn: 'deux pronoms, tous les deux devant' },
  ],
  closing: { fr: 'Un verbe en un seul mot est facile à entourer.', en: 'A verb in one word is easy to wrap.' },
  audio: REC('rec-b1-05-colis'),
  say: REFRAME,
  terms: ['negation'],
};

const A7_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-futur',
  title: 'La phrase autour du verbe',
  frSub: 'Négation, pronoms, questions',
  hint: 'Quatre cartes. Rien de nouveau, et c’est la bonne nouvelle.',
  audio: REC('rec-b1-05-phrase'),
  say: REFRAME,
  terms: ['negation', 'simple'],
  cards: [
    {
      head: 'Un seul mot à entourer', label: 'la négation',
      fr: 'Je ne partirai pas avant la fin du mois.',
      sub: '[zhuh nuh par-tee-RAY pa a-vahⁿ la fehⁿ dü MWA]',
      body: `Au passé composé, il fallait viser l'auxiliaire. Ici le verbe est en un mot, donc ne et pas l'entourent. EN: ${Cap(NEGATION_REF)} taught the pattern, and one word makes it easier.`,
    },
    {
      head: 'Rien, jamais, personne', label: 'les autres négations',
      fr: 'Tu ne le regretteras jamais.',
      sub: '[tü nuh luh ruh-greht-RA zha-MEH]',
      body: "Ces mots prennent la place de pas ; ils ne s'ajoutent pas à lui. EN: these words replace pas rather than joining it.",
    },
    {
      head: 'Les petits mots devant', label: 'les pronoms',
      fr: 'Je te le rendrai demain.',
      sub: '[zhuh tuh luh rahⁿ-DRAY duh-MEHⁿ]',
      body: "Même ordre qu'au présent : te avant le, et les deux devant le verbe. EN: same order as in the present, both before the verb.",
    },
    {
      head: 'Demander quelque chose', label: 'la question',
      fr: 'est-ce que · inversion · intonation',
      sub: '[ehs kuh] · [een-vehr-SYOHⁿ] · [een-toh-na-SYOHⁿ]',
      body: "Les trois façons marchent au futur comme ailleurs. L'inversion est la plus formelle. EN: all three work in the future, and inversion is the most formal.",
    },
  ],
};

const A7_NEGATION: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-negation',
  layer: 'core',
  title: 'Six refus au futur',
  examples: [
    ex(E(1109), 'ne ... pas'),
    ex(E(1110), 'ne ... rien'),
    ex(E(1112), 'ne ... personne'),
    ex(E(1118), 'ne ... plus, avec un pronom'),
    ex(E(1119), 'ne ... pas, verbe en -re'),
    ex(E(1120), 'ne ... pas, deux pronoms'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['negation'],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Entoure, place, demande',
  groups: [
    grp('Les quatre négations', [
      it(E(1109), 'pas'),
      it(E(1110), 'rien'),
      it(E(1111), 'jamais'),
      it(E(1112), 'personne'),
    ], chk(
      'Où se placent ne et le deuxième mot ?',
      ['autour du verbe', 'après le verbe', 'avant le sujet'],
      0,
      "Autour du verbe, qui tient en un mot. EN: around the verb, which is a single word.",
    )),
    grp('Pronoms et questions', [
      it(E(1113), 'deux pronoms, dans l’ordre'),
      it(E(1114), 'un pronom, puis le verbe'),
      it(E(1116), 'est-ce que'),
      it(E(1117), 'inversion'),
    ], chk(
      'Dans « je te le rendrai », où sont te et le ?',
      ['après le verbe', 'devant le verbe'],
      1,
      "Devant, exactement comme au présent. EN: in front, exactly as in the present.",
    )),
    ctl('Le test', 'Comment dit-on « I will not sell the house » ?',
      ['Je ne vendrai pas la maison.', 'Je vendrai ne pas la maison.'], 0,
      "ne avant, pas après. EN: ne before, pas after."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['negation', 'simple'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre fautes de construction',
  errors: [
    {
      wrong: 'Je partirai ne pas avant la fin du mois.',
      right: 'Je ne partirai pas avant la fin du mois.',
      why: "Normal : en anglais, not vient après le verbe. En français, ne passe devant. EN: in English not comes after the verb; in French ne goes in front.",
    },
    {
      wrong: "Nous ne changerons pas rien pour l'instant.",
      right: "Nous ne changerons rien pour l'instant.",
      why: "Tu as traduit not anything par deux mots. rien prend la place de pas. EN: rien replaces pas rather than joining it.",
    },
    {
      wrong: 'Je rendrai te le demain.',
      right: 'Je te le rendrai demain.',
      why: "L'anglais met les pronoms après le verbe, et tu as gardé cet ordre. EN: English puts the pronouns after the verb and you kept that order.",
    },
    {
      wrong: 'Est-ce que resterez-vous pour le dîner ?',
      right: 'Est-ce que vous resterez pour le dîner ?',
      why: "Tu as pris les deux façons de demander en même temps. Choisis-en une. EN: you took both question patterns at once; pick one.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['negation'],
};

const A7_SENS: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-sens',
  layer: 'core',
  size: 'lg',
  title: 'Dis exactement ce que tu refuses',
  groups: [
    grp('Chaque mot enlève autre chose', [
      it(E(1118), 'plus : ça s’arrête maintenant'),
      it(E(1119), 'pas : le fait lui-même'),
      it(E(1120), 'pas, avec deux pronoms'),
      it(E(1121), 'la règle de placement'),
    ], chk(
      '« Je ne vous dérangerai plus » : t’ai-je déjà dérangé ?',
      ['non, jamais', 'oui, et ça s’arrête'],
      1,
      "plus dit que ça existait avant. EN: plus says it was happening before.",
    )),
    grp('Trois façons de demander', [
      it(E(1115), 'mot interrogatif, puis est-ce que'),
      it(E(1113), 'la réponse, avec deux pronoms'),
      it(E(1114), 'un pronom objet devant le verbe'),
      it('fr.sons.liaisons.007', 'une promesse, sans question'),
    ], chk(
      'Laquelle de ces formes est la plus formelle ?',
      ['est-ce que', "l'inversion", "l'intonation"],
      1,
      "L'inversion : Resterez-vous. On l'écrit plus qu'on ne la dit. EN: inversion, written more than spoken.",
    )),
    ctl('Le résumé', 'Le futur change-t-il la place des pronoms ?',
      ['non', 'oui'], 0,
      "Non. Un seul mot, et tout le reste comme au présent. EN: no; one word, and everything else as in the present."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['negation', 'simple'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La négation', 'Où vont ne et pas autour de partirai ?',
    ['partirai ne pas', 'ne pas partirai', 'ne partirai pas'], 2,
    "Autour du verbe, en un seul mot. EN: around the single-word verb."),
  ctl('Les pronoms', 'Comment dit-on « I will give it back to you tomorrow » ?',
    ['Je rendrai te le demain.', 'Je te le rendrai demain.'], 1,
    'Les pronoms restent devant le verbe. EN: the pronouns stay in front.'),
  ctl('La question', 'Peut-on écrire « Est-ce que resterez-vous » ?',
    ['non, une seule façon à la fois', 'oui'], 0,
    "Est-ce que vous resterez, ou Resterez-vous. EN: one pattern at a time."),
], ['negation', 'simple']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'La phrase au futur',
    opener: {
      line: "Refuser, demander, placer un pronom : au futur, rien de tout ça ne change, et tu vas le vérifier. EN: Refusing, asking, placing a pronoun: none of it changes in the future, and here you check that.",
      imageRef: 'lessons/futur-simple/act07.jpg',
    },
    sections: [],
    milestone: 'Tu écris au futur une phrase négative, une phrase avec deux pronoms et une question. EN: You can write a negative sentence, a two-pronoun sentence and a question in the future.',
    estScreens: 28, restPoints: ['a7-construire'],
  },
  sections: [A7_HISTOIRE, A7_REGLE, A7_NEGATION, A7_CONSTRUIRE, A7_ERREURS, A7_SENS, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LES MOTS DU FUTUR
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le même demain, trois fois',
  lines: [
    ln(E(1123)), ln(E(1132)), ln(E(1135)), ln(E(1125)), ln(E(1127)), ln(E(1128)), ln(E(1130)), ln('fr.a2.heure-et-date.137'),
  ],
  questions: [
    { q: 'Première phrase : quel futur entends-tu après demain ?', opts: ['le futur proche', 'le futur simple'], correct: 1,
      why: '« je terminerai » : un seul mot. EN: one word, so the futur simple.' },
    { q: 'Deuxième phrase : le marqueur a-t-il changé ?', opts: ['non, seulement le verbe', 'oui'], correct: 0,
      why: 'Le même demain, et le futur proche cette fois. EN: the same demain, with the futur proche this time.' },
    { q: 'Troisième phrase : quel temps après ce soir ?', opts: ['le futur simple', 'le présent'], correct: 1,
      why: '« on commande » : le présent suffit pour un projet arrêté. EN: the present is enough for a settled plan.' },
    { q: 'Cinquième phrase : un jour, c’est loin ou proche ?', opts: ['loin, sans date', 'demain matin'], correct: 0,
      why: 'Aucune date, et pourtant le futur simple. EN: no date, and still the futur simple.' },
    { q: 'Sur ces huit phrases, le marqueur décide-t-il du temps ?', opts: ['oui, toujours', 'non, jamais'], correct: 1,
      why: 'Il situe le moment. Le reste dépend de ce que fait ta phrase. EN: it places the moment and nothing else.' },
  ],
  audio: REC('rec-b1-05-marqueurs-ecoute'),
  say: REFRAME,
  terms: ['marqueur'],
};

const A8_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-marqueurs',
  title: 'Un mot qui situe, pas qui commande',
  frSub: 'Trois phrases, un seul marqueur',
  hint: 'Quatre cartes. Les trois premières disent la même chose autrement.',
  audio: REC('rec-b1-05-marqueurs'),
  say: REFRAME,
  terms: ['marqueur'],
  cards: [
    { head: 'Demain, avec le futur simple', label: 'un fait annoncé', fr: 'Demain, je terminerai ce rapport.', sub: '[duh-MEHⁿ zhuh tehr-mee-nuh-RAY suh ra-POR]', body: "Tu poses le fait. C'est la forme d'un courriel ou d'un planning. EN: you state the fact, as in an email or a schedule." },
    { head: 'Demain, avec le futur proche', label: 'une décision prise', fr: 'Demain, je vais rester à la maison.', sub: '[duh-MEHⁿ zhuh veh rehs-TAY a la meh-ZOHⁿ]', body: "Même mot, même jour, et cette fois tu racontes ta décision. EN: same word, same day, and now you are reporting your decision." },
    { head: 'Ce soir, au présent', label: 'un projet arrêté', fr: 'Ce soir, on commande une pizza.', sub: '[suh SWAR ohⁿ ko-MAHⁿD ün peed-ZA]', body: "Le présent suffit quand le moment est fixé et proche. EN: the present is enough when the moment is fixed and near." },
    { head: 'Ce qui décide vraiment', label: 'le vrai critère', fr: 'Un marqueur situe, il ne choisit pas.', sub: '[uhⁿ mar-KUHR see-TÜ eel nuh shwa-ZEE PA]', body: "Cherche ce que fait ta phrase, pas le mot de temps devant. EN: look at what your sentence does, not at the time word in front of it." },
  ],
};

const A8_MARQUEURS: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-marqueurs',
  layer: 'core',
  sheetId: 'sheet-marqueurs',
  title: 'Six marqueurs de futur',
  cols: ['Marqueur', 'Ce qu’il situe', 'Exemple'],
  rows: [
    { cells: ['demain', 'le jour suivant', 'Demain, je terminerai ce rapport.'], say: 'Demain, je terminerai ce rapport.',
      detail: { title: 'demain', body: "après-demain s'écrit avec un trait d'union et veut dire le jour d'après. EN: après-demain takes a hyphen and means the day after.", say: 'Après-demain, nous visiterons le nouvel appartement.' } },
    { cells: ['la semaine prochaine', 'la semaine qui vient', 'Elle commencera son stage.'], say: 'La semaine prochaine, elle commencera son stage.',
      detail: { title: 'prochain', body: "prochain se met APRÈS le nom : la semaine prochaine, le mois prochain, l'année prochaine. EN: prochain goes after the noun.", say: "Le mois prochain, nous déménagerons à Bruxelles." } },
    { cells: ['dans deux ans', 'une distance à partir de maintenant', "J'habiterai peut-être au Québec."], say: "Dans deux ans, j'habiterai peut-être au Québec.",
      detail: { title: 'dans', body: "dans compte vers l'avant. Pour compter vers l'arrière, on dit il y a deux ans. EN: dans counts forward; il y a counts back.", say: 'Dans deux ans, je passerai un examen officiel.' } },
    { cells: ['un jour', 'un moment sans date', 'Tu comprendras pourquoi.'], say: 'Un jour, tu comprendras pourquoi.',
      detail: { title: 'un jour', body: "Aucune date, et le futur simple est normal. La distance ne commande rien. EN: no date at all, and the futur simple is normal.", say: 'Un jour, ils raconteront cette aventure à leurs petits-enfants.' } },
    { cells: ['bientôt', 'peu de temps après maintenant', 'Tout le monde travaillera autrement.'], say: 'Bientôt, tout le monde travaillera autrement.',
      detail: { title: 'bientôt', body: "Proche, et pourtant souvent au futur simple : c'est une prévision, pas une décision. EN: near, and still often futur simple, because it is a forecast.", say: 'Bientôt, tout le monde travaillera autrement.' } },
    { cells: ["d'ici là", 'entre maintenant et ce moment', 'Nous préparerons les documents.'], say: "D'ici là, nous préparerons les documents.",
      detail: { title: "d'ici là", body: "Il faut un moment déjà nommé avant, sinon personne ne sait de quel là tu parles. EN: it needs a moment already named before it.", say: "D'ici là, ils vendront la moitié de leurs meubles." } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['marqueur'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Situe, puis choisis',
  groups: [
    grp('Des dates précises', [
      it(E(1124), 'après-demain'),
      it(E(1125), 'la semaine prochaine'),
      it(E(1133), 'le mois prochain'),
      it(E(1134), "l'année prochaine"),
    ], chk(
      'Où se place prochain ?',
      ['après le nom', 'avant le nom'],
      0,
      "la semaine prochaine, le mois prochain. EN: after the noun.",
    )),
    grp('Des moments flous', [
      it(E(1126), 'dans deux ans'),
      it(E(1127), 'un jour'),
      it(E(1128), 'bientôt'),
      it(E(1131), "à l'avenir"),
    ], chk(
      'Ces quatre phrases ont-elles une date ?',
      ['oui, toutes', 'non, aucune'],
      1,
      "Aucune, et toutes prennent le futur simple. EN: none, and all take the futur simple.",
    )),
    ctl('Le contre-exemple', 'Demain impose-t-il le futur simple ?',
      ['non', 'oui'], 0,
      "Non : demain je pars, demain je vais partir, demain je partirai. EN: no, all three work."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['marqueur', 'simple'],
};

const A8_CONTRE: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-contre',
  layer: 'core',
  title: 'Le même marqueur, trois temps',
  examples: [
    ex(E(1123), 'demain, futur simple'),
    ex(E(1132), 'demain, futur proche'),
    ex(E(1135), 'ce soir, présent'),
    ex('fr.a2.metiers.052', 'la semaine prochaine, au présent'),
    ex('fr.a2.heure-et-date.137', 'la semaine prochaine, au présent aussi'),
    ex(E(1122), 'la règle en une phrase'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['marqueur'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Six pièges de marqueurs',
  rule: {
    title: 'Le mot de temps a ses propres règles',
    body: "Un marqueur ne commande pas le temps du verbe, mais il a sa place et sa forme à lui, et c'est là qu'on se trompe. EN: a marker has its own place and form, and that is where mistakes happen.",
  },
  cards: [
    { promptLabel: 'prochain avant le nom', promptSound: 'La prochaine semaine, elle commencera son stage.', fr: 'La semaine prochaine, elle commencera son stage.', ipa: '/la sə.mɛn pʁɔ.ʃɛn ɛl kɔ.mɑ̃s.ʁa sɔ̃ staʒ/', tip: 'prochain suit le nom. EN: prochain follows the noun.' },
    { promptLabel: 'le mois prochain', promptSound: 'Le prochain mois, nous déménagerons à Bruxelles.', fr: 'Le mois prochain, nous déménagerons à Bruxelles.', ipa: '/lə mwa pʁɔ.ʃɛ̃ nu de.me.na.ʒə.ʁɔ̃ a bʁy.sɛl/', tip: 'Même ordre pour le mois et pour l’année. EN: same order for months and years.' },
    { promptLabel: 'dans ou il y a', promptSound: "Il y a deux ans, j'habiterai peut-être au Québec.", fr: "Dans deux ans, j'habiterai peut-être au Québec.", ipa: '/dɑ̃ dø.zɑ̃ ʒa.bi.tə.ʁe pø.tɛtʁ o ke.bɛk/', tip: 'dans compte vers l’avant, il y a vers l’arrière. EN: dans counts forward, il y a counts back.' },
    { promptLabel: 'le trait d’union', promptSound: 'Après demain, nous visiterons le nouvel appartement.', fr: 'Après-demain, nous visiterons le nouvel appartement.', ipa: '/a.pʁɛ də.mɛ̃ nu vi.zi.tə.ʁɔ̃ lə nu.vɛ.la.paʁ.tə.mɑ̃/', tip: "Sans trait d'union, ça veut dire après la journée de demain. EN: without the hyphen it means something else." },
    { promptLabel: 'deux futurs empilés', promptSound: 'Demain, je vais terminerai ce rapport.', fr: 'Demain, je terminerai ce rapport.', ipa: '/də.mɛ̃ ʒə tɛʁ.mi.nə.ʁe sə ʁa.pɔʁ/', tip: 'Une machine à la fois. EN: one machine at a time.' },
    { promptLabel: 'le présent refusé', promptSound: 'Ce soir, on commandera une pizza et tout ira bien.', fr: 'Ce soir, on commande une pizza.', ipa: '/sə swaʁ ɔ̃ kɔ.mɑ̃d yn pid.za/', tip: "Pour un projet arrêté et proche, le présent est la forme normale. EN: for a settled, near plan the present is normal." },
  ],
  drill: [
    { promptSay: '... , elle commencera son stage.', opts: ['La prochaine semaine', 'La semaine prochaine'], correct: 1 },
    { promptSay: '... , nous déménagerons à Bruxelles.', opts: ['Le mois prochain', 'Le prochain mois'], correct: 0 },
    { promptSay: "... , j'habiterai peut-être au Québec.", opts: ['Il y a deux ans', 'Dans deux ans'], correct: 1 },
    { promptSay: '... , nous visiterons le nouvel appartement.', opts: ['Après-demain', 'Après demain'], correct: 0 },
    { promptSay: 'Demain, je ... ce rapport.', opts: ['vais terminerai', 'terminerai'], correct: 1 },
    { promptSay: 'Un jour, tu ... pourquoi.', opts: ['comprendras', 'comprenderas'], correct: 0 },
    { promptSay: '... , nous préparerons les documents.', opts: ['Ici là', "D'ici là"], correct: 1 },
    { promptSay: '... , tout le monde travaillera autrement.', opts: ['Bientôt', 'Bien tôt'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le mot de temps a ses propres règles' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le marqueur fait mal' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-05-piege-marqueurs'),
  say: REFRAME,
  terms: ['marqueur'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La place', 'Comment dit-on « next week » ?',
    ['la prochaine semaine', 'la semaine prochaine'], 1,
    "prochain suit le nom. EN: prochain follows the noun."),
  ctl('Le sens', 'dans deux ans compte dans quel sens ?',
    ["vers l'avenir", 'vers le passé'], 0,
    "dans compte vers l'avant ; il y a compte vers l'arrière. EN: dans counts forward."),
  ctl('Le pouvoir du marqueur', 'Après demain, quels temps sont possibles ?',
    ['le futur simple seulement', 'le présent, le futur proche et le futur simple'], 1,
    "Les trois. Le marqueur situe, il ne choisit pas. EN: all three; the marker places, it does not choose."),
], ['marqueur', 'simple']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Les mots du futur',
    opener: {
      line: "Demain ne t'oblige à rien : ici tu apprends ce que ces mots font vraiment, et ce qu'ils ne font pas. EN: Demain forces nothing on you, and here you learn what these words really do.",
      imageRef: 'lessons/futur-simple/act08.jpg',
    },
    sections: [],
    milestone: "Tu places correctement demain, prochain, dans et d'ici là, et tu ne les laisses plus choisir ton temps. EN: You place these time words correctly and no longer let them pick your tense.",
    estScreens: 28, restPoints: ['a8-marqueurs'],
  },
  sections: [A8_ECOUTE, A8_REGLE, A8_MARQUEURS, A8_CONSTRUIRE, A8_CONTRE, A8_PIEGE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — ANNOTER UN PROJET
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: 164 words of somebody's real plan, with all three forms in it. */
const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le départ de Sofia et Malick',
  frSub: 'Lis, puis marque chaque verbe',
  text: READING_TEXT,
  glossary: [
    { word: 'déménageront', en: 'will move house', note: 'déménager, c’est changer de logement.' },
    { word: 'des candidatures', en: 'job applications', note: 'Les dossiers qu’on envoie pour un poste.' },
    { word: 'la vaisselle', en: 'the crockery', note: 'Les assiettes, les verres, les tasses.' },
    { word: 'le déménagement', en: 'the move', note: 'Le jour et le coût du changement de logement.' },
    { word: 'ils comptent les semaines', en: 'they are counting the weeks', note: 'Ils attendent, et ils savent combien de temps il reste.' },
  ],
  questions: [
    { q: 'Combien de verbes sont au futur simple ?', a: 'Treize : quitteront, déménageront, continuera, cherchera, vendront, garderont, coûtera, paieront, commencera, apprendra, demandera, regretteront et commencera à la fin.' },
    { q: 'Combien de verbes sont au futur proche ?', a: 'Un seul : « ils vont visiter trois quartiers ». La visite est déjà organisée.' },
    { q: 'Quels verbes sont au présent, et pourquoi ?', a: 'travaille, envoie, veulent, remplissent, comptent, disent. Ils décrivent la situation d’aujourd’hui, pas le projet.' },
    { q: 'Quel verbe a un radical qui change ?', a: 'paieront, de payer. Le y devient i, à toutes les personnes.' },
    { q: 'Pourquoi « ils ne regretteront rien » et non « ils ne regretteront pas rien » ?', a: 'rien prend la place de pas. On ne met jamais les deux.' },
  ],
  audio: REC('rec-b1-05-projet'),
  say: REFRAME,
  terms: ['simple', 'proche'],
};

/** BUILD, twice, on purpose: the two piles are the annotation itself, and a
 *  learner who sorts only one of them has not annotated the text. */
const A9_SIMPLE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-simple',
  layer: 'core',
  size: 'lg',
  title: 'Ce que le projet annonce',
  groups: [
    grp('Le déménagement', [
      it(E(1137), 'le départ'),
      it(E(1138), 'la destination et le mois'),
      it(E(1143), 'ce qui se vend avant'),
      it(E(1144), 'ce qui reste'),
    ], chk(
      'Ces quatre verbes : proche ou simple ?',
      ['futur simple', 'futur proche'],
      0,
      "Un seul mot chaque fois, et rien qui parte de maintenant. EN: one word each time.",
    )),
    grp('Le travail et l’argent', [
      it(E(1140), 'le même poste, ailleurs'),
      it(E(1141), 'la recherche de Malick'),
      it(E(1145), 'le coût'),
      it(E(1146), 'le paiement en deux fois'),
    ], chk(
      'Dans « ils paieront », qu’est-ce qui a changé par rapport à payer ?',
      ['rien', 'le y est devenu i'],
      1,
      "payer donne paier-, à toutes les personnes. EN: payer gives paier-, at every person.",
    )),
    ctl('Le compte', 'Combien de verbes au futur simple dans ce texte ?',
      ['treize', 'six', 'vingt'], 0,
      "Treize. C'est un texte de projet, et le projet occupe presque tout. EN: thirteen; it is a plan, and the plan fills it."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['simple', 'radical'],
};

const A9_AUTRES: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-autres',
  layer: 'core',
  size: 'lg',
  title: 'Ce qui est déjà vrai',
  groups: [
    grp('Aujourd’hui, au présent', [
      it(E(1139), 'son emploi actuel'),
      it(E(1151), 'ce qu’ils font ce mois-ci'),
      free('il envoie des candidatures depuis janvier', 'he has been sending applications since January', 'commencé avant, toujours en cours'),
      free('ils comptent les semaines', 'they are counting the weeks', "l'attente d'aujourd'hui"),
    ], chk(
      'Pourquoi ces verbes ne sont-ils pas au futur ?',
      ['parce qu’ils décrivent maintenant', 'par erreur'],
      0,
      "Un texte de projet a besoin d'un présent pour poser la situation. EN: a plan needs a present to set the situation.",
    )),
    grp('Le seul futur proche du texte', [
      it(E(1142), 'la visite des quartiers'),
      free('ils vont visiter trois quartiers avant de choisir', 'they are going to look at three neighbourhoods before choosing', 'la visite est déjà organisée'),
      it(E(1149), 'et le futur simple juste après'),
      it(E(1152), 'la conclusion, au futur simple'),
    ], chk(
      'Pourquoi « vont visiter » et non « visiteront » ?',
      ['parce que c’est bientôt', 'parce que la visite est déjà arrangée aujourd’hui'],
      1,
      "Le fil avec maintenant, encore. EN: the thread back to now, again.",
    )),
    ctl('La méthode', 'Pour annoter un texte, que fais-tu en premier ?',
      ['tu cherches les mots de temps', 'tu soulignes chaque verbe', 'tu comptes les phrases'], 1,
      `Chaque verbe, un par un. C'est l'habitude de ${PC_IMP_REF}, appliquée au futur. EN: every verb, one at a time.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proche', 'simple'],
};

const A9_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a9-hacks',
  layer: 'core',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    { hack: 'Cherche le r. Sans r avant la terminaison, tu as écrit un autre temps.', why: "C'est la seule marque que le futur régulier ne perd jamais. EN: it is the one mark the regular future never loses." },
    { hack: "Écris l'infinitif d'abord, puis la terminaison. Dans cet ordre.", why: "La moitié des fautes viennent d'une coupure faite avant d'avoir écrit le verbe entier. EN: half the errors come from cutting before writing the whole verb." },
    { hack: 'Demande-toi si ta phrase part de maintenant. Si oui, aller plus l’infinitif.', why: "La distance ne décide rien, le lien avec l'instant présent, si. EN: distance decides nothing; the thread to now does." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'proche'],
};

const A9_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a9-dictee',
  layer: 'core',
  title: 'Écris cinq phrases du projet',
  frSub: 'Le texte que tu viens de lire',
  itemIds: dicteeFor(9),
  audio: AUDIO,
  say: REFRAME,
  terms: ['simple'],
};

const A9_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a9-focus',
  layer: 'core',
  sheetId: 'sheet-marqueurs',
  title: 'Ce qu’il faut vérifier avant d’écrire',
  points: [
    "Un r avant chaque terminaison, dans les trois groupes. EN: an r before every ending, in all three groups.",
    "Le radical entier pour étudier, jouer et créer ; le radical changé pour acheter et appeler. EN: the whole stem for one family, the respelled stem for the other.",
    "Un présent au début, pour dire d'où tu pars. EN: a present tense at the start, to say where you begin.",
    "Des marqueurs qui guident le lecteur : d'abord, ensuite, dans deux ans, d'ici là. EN: markers that guide the reader.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'marqueur'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le compte', 'Dans le texte, combien de futurs proches ?',
    ['cinq', 'aucun', 'un seul'], 2,
    "Un seul : ils vont visiter. EN: one, ils vont visiter."),
  ctl('Le présent', 'À quoi sert le présent dans un texte de projet ?',
    ["à dire d'où on part", 'à décorer', 'à éviter le futur'], 0,
    "Il pose la situation d'aujourd'hui. EN: it sets today's situation."),
  ctl('La méthode', 'Comment annote-t-on ce genre de texte ?',
    ['verbe par verbe', 'phrase par phrase'], 0,
    "Verbe par verbe, en marquant sa forme. EN: verb by verb, marking its form."),
], ['simple', 'proche']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Annoter un projet',
    opener: {
      line: "Deux personnes partent vivre à Québec, et tout leur projet tient en cent soixante mots : tu vas les marquer un par un. EN: Two people are moving to Québec City and their whole plan fits in a hundred and sixty words, which you will mark one by one.",
      imageRef: 'lessons/futur-simple/act09.jpg',
    },
    sections: [],
    milestone: "Tu lis un texte de projet et tu sais, pour chaque verbe, pourquoi il est à cette forme. EN: You can read a plan and say, for every verb, why it takes that form.",
    estScreens: 26, restPoints: ['a9-simple'],
  },
  sections: [A9_LECTURE, A9_SIMPLE, A9_AUTRES, A9_HACKS, A9_DICTEE, A9_FOCUS, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — ÉCRIRE SES PROJETS
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET the shape one last time, as the model the learner will imitate in the
 *  task: an opening in the present, a chain of plans, an ending. */
const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Un projet modèle',
  frSub: 'La forme que tu vas écrire',
  text: MODEL_TEXT,
  glossary: [
    { word: 'ma formation', en: 'my training course', note: 'Les cours qu’on suit pour apprendre un métier.' },
    { word: 'mon dossier', en: 'my file, my application pack', note: 'Les papiers qu’on rassemble pour une candidature.' },
    { word: 'les diplômes traduits', en: 'the translated diplomas', note: 'Les diplômes passés dans une autre langue par un traducteur.' },
    { word: 'un examen officiel', en: 'an official exam', note: 'Un examen reconnu par un État ou une université.' },
    { word: 'depuis trop longtemps', en: 'for far too long', note: 'Ça dure, et ça a commencé bien avant aujourd’hui.' },
  ],
  questions: [
    { q: 'Quelle phrase ouvre le texte, et à quel temps ?', a: '« Voici mon projet pour l’année prochaine. » Au présent : elle annonce ce qui va suivre.' },
    { q: 'Quels mots guident le lecteur d’une étape à l’autre ?', a: "D'abord, Ensuite, Au mois de septembre, Dans deux ans, Finalement." },
    { q: 'Quel verbe a un radical qui change ?', a: 'j’achèterai, de acheter. Le e prend un accent grave.' },
    { q: 'Quelle est la seule phrase négative ?', a: '« Je ne changerai pas d’avis. » ne et pas entourent le verbe en un mot.' },
    { q: 'Comment le texte se termine-t-il ?', a: 'Par une raison, pas par une étape : « Ce projet me demandera du travail, mais il en vaut la peine. »' },
  ],
  audio: REC('rec-b1-05-modele'),
  say: REFRAME,
  terms: ['simple', 'promesse'],
};

const A10_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a10-plan',
  layer: 'core',
  title: 'Cinq étapes pour écrire ton projet',
  steps: [
    '1. Commence au présent : dis où tu en es aujourd’hui. EN: start in the present and say where you are now.',
    '2. Annonce la première étape avec un marqueur : en juin, la semaine prochaine. EN: announce the first step with a time marker.',
    '3. Enchaîne trois étapes au futur simple, avec d’abord, ensuite, finalement. EN: chain three steps in the futur simple.',
    '4. Ajoute une phrase négative : ce que tu ne feras pas. EN: add a negative sentence, something you will not do.',
    '5. Termine par une raison, pas par une étape. EN: finish with a reason, not with another step.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['simple', 'marqueur'],
};

const A10_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a10-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    { situation: "Dans une lettre de motivation", fr: 'Je continuerai mes cours de français le soir.', en: 'I will carry on with my French classes in the evening.' },
    { situation: 'Dans un message à ta famille, pour annoncer un départ', fr: 'Au mois de septembre, je déménagerai.', en: 'In September I will move.' },
    { situation: "À l'examen, quand on te demande tes projets", fr: 'Dans deux ans, je passerai un examen officiel.', en: 'In two years I will sit an official exam.' },
    { situation: "Au travail, pour confirmer un engagement", fr: 'Nous confirmerons la date par écrit.', en: 'We will confirm the date in writing.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['promesse'],
};

/** CHOOSE, out loud: six turns with a course adviser. Every `userEn` names the
 *  grammar the answer demonstrates. */
const A10_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a10-scenario',
  layer: 'core',
  title: "Au rendez-vous d'orientation",
  setting: "Un centre de formation à Namur. La conseillère prépare ton dossier et veut des dates, pas des intentions.",
  turns: [
    {
      ai: 'Bonjour. Dites-moi ce que vous comptez faire après cette formation.',
      en: 'Hello. Tell me what you plan to do after this course.',
      user: "Je terminerai ma formation en juin, puis je chercherai un travail à Montréal.",
      userEn: 'I will finish my course in June, then I will look for work in Montréal. (Two futurs simples, chained.)',
      alts: [
        { fr: "D'abord ma formation, ensuite un travail à Montréal.", en: 'First my course, then a job in Montréal.' },
        { fr: 'Je vais terminer en juin et partir à Montréal.', en: 'I am going to finish in June and leave for Montréal. (A decision already taken: also right, and less formal.)' },
      ],
    },
    {
      ai: 'Quand est-ce que vous préparerez votre dossier ?',
      en: 'When will you get your file ready?',
      user: 'Je le préparerai pendant tout le mois de juillet.',
      userEn: 'I will get it ready all through July. (A pronoun in front of a one-word verb.)',
      alts: [
        { fr: 'Je préparerai mon dossier en juillet.', en: 'I will get my file ready in July.' },
        { fr: "D'ici là, je préparerai les documents.", en: 'Between now and then I will get the papers ready.' },
      ],
    },
    {
      ai: 'Vous déménagerez à quel moment.',
      en: 'When will you move.',
      user: 'Au mois de septembre. Je louerai un petit appartement près du métro.',
      userEn: 'In September. I will rent a small flat near the metro. (louer keeps its whole infinitive: louerai.)',
      alts: [
        { fr: 'En septembre, et je louerai près du métro.', en: 'In September, and I will rent near the metro.' },
        { fr: "Je déménagerai début septembre.", en: 'I will move at the beginning of September.' },
      ],
    },
    {
      ai: 'Et le logement, vous comptez acheter un jour.',
      en: 'And housing, do you plan to buy one day.',
      user: "Plus tard, j'achèterai peut-être un logement.",
      userEn: 'Later I will perhaps buy a place. (acheter takes a grave accent in the future: achèterai.)',
      alts: [
        { fr: 'Dans quelques années, oui.', en: 'In a few years, yes.' },
        { fr: 'Un jour, je vais acheter quelque chose. ', en: 'One day I am going to buy something. (The decision is already taken, so the futur proche is also right.)' },
      ],
    },
    {
      ai: "Certains changent d'avis après six mois. Et vous.",
      en: 'Some people change their minds after six months. What about you.',
      user: "Je ne changerai pas d'avis.",
      userEn: 'I will not change my mind. (ne and pas around a one-word verb.)',
      alts: [
        { fr: 'Non, je ne bougerai pas de mon projet.', en: 'No, I will not move away from my plan.' },
        { fr: 'Je ne regretterai rien.', en: 'I will regret nothing. (rien replaces pas.)' },
      ],
    },
    {
      ai: 'Très bien. Je vous rappelle la semaine prochaine.',
      en: 'Very good. I will call you back next week.',
      user: 'Merci. Je vous confirmerai mon adresse par courriel.',
      userEn: 'Thank you. I will confirm my address to you by email. (A written commitment, so the futur simple.)',
      alts: [
        { fr: 'Merci, je vous écrirai avant vendredi.', en: 'Thank you, I will write to you before Friday.' },
        { fr: 'Parfait, on se reparlera très vite.', en: 'Perfect, we will talk again very soon.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['simple', 'promesse'],
};

/** THE GRADED TASK. The unit outcome is tested here: build the futur simple
 *  from the infinitive and use it where it belongs, in a written plan. */
const A10_TASK: TaskSection = {
  type: 'task',
  id: 'a10-mission',
  title: 'Écris ton projet',
  frSub: 'Mission écrite',
  brief: "Ton ancien professeur de français t'écrit et te demande ce que tu feras dans les deux prochaines années. Réponds-lui par un message. Dis d'abord où tu en es aujourd'hui, puis raconte tes étapes dans l'ordre, jusqu'à la fin.",
  briefEn: 'Your old French teacher writes and asks what you will be doing over the next two years. Answer with a message: say where you are now, then give your steps in order, through to the end.',
  produce: "Écris un projet de 90 à 130 mots, avec au moins six verbes au futur simple, au moins un verbe au présent pour dire où tu en es, une phrase négative, trois marqueurs de temps et une fin qui donne ta raison.",
  responseSpec: { kind: 'text', minWords: 90, maxWords: 130 },
  rubric: {
    criteria: [
      {
        key: 'formes',
        label: 'Des futurs bien construits',
        maxPoints: 4,
        descriptors: [
          "4 : Six verbes au futur simple au moins, tous corrects : le radical garde son r, les terminaisons suivent le sujet, et les verbes en -ier, -uer ou à radical changeant sont bien écrits.",
          '3 : Presque tous les futurs sont corrects. Une ou deux fautes de terminaison ou un e muet oublié.',
          "2 : Plusieurs radicaux sont coupés ou rallongés, ou les terminaisons ne suivent pas le sujet. Le lecteur comprend, mais il bute.",
          "1 : Moins de six futurs, ou des formes inventées à presque chaque verbe.",
        ],
      },
      {
        key: 'choix',
        label: 'Le bon futur au bon endroit',
        maxPoints: 3,
        descriptors: [
          "3 : Le futur simple porte les étapes annoncées, le présent dit où tu en es aujourd'hui, et un futur proche, s'il y en a un, parle bien d'une décision déjà prise.",
          '2 : Le partage tient dans l’ensemble, mais une ou deux phrases prennent la mauvaise forme.',
          "1 : Tout est au même temps, ou le futur proche et le futur simple sont mis l'un pour l'autre sans raison.",
        ],
      },
      {
        key: 'phrase',
        label: 'Des phrases complètes',
        maxPoints: 3,
        descriptors: [
          '3 : Au moins une phrase négative correcte, les pronoms devant le verbe, et trois marqueurs de temps bien placés.',
          '2 : La négation ou la place d’un marqueur hésite une fois, sans gêner la lecture.',
          "1 : ne ou pas est mal placé plusieurs fois, ou les marqueurs manquent et le lecteur ne sait plus quand.",
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          '2 : Un projet sur deux ans, entre 90 et 130 mots, dans l’ordre, avec une fin qui donne ta raison.',
          "1 : Il manque un élément : pas d'ordre, pas de fin, ou moins de 90 mots.",
        ],
      },
    ],
  },
  scaffold: ["Pour l'instant,", "D'abord,", 'Ensuite,', 'Au mois de', 'Dans deux ans,', 'Je ne ... pas', 'Finalement,', 'Parce que'],
  modelAnswer: "Bonjour Madame, merci de votre message. Pour l'instant, je travaille dans un magasin et je suis des cours du soir. D'abord, je terminerai ma formation en juin. Ensuite, je chercherai un travail à Montréal, parce que ma cousine y habite déjà. Je préparerai mon dossier pendant tout le mois de juillet : le CV, les lettres, les diplômes traduits. Au mois de septembre, je déménagerai et je louerai un petit appartement près du métro. Je continuerai mes cours de français le soir, deux fois par semaine. Dans deux ans, je passerai un examen officiel. Je ne changerai pas d'avis : ce projet me demandera du travail, mais il en vaut la peine.",
  modelAnswerEn: "Hello Madam, thank you for your message. For now I work in a shop and I take evening classes. First, I will finish my training in June. Then I will look for work in Montréal, because my cousin already lives there. I will get my file ready all through July: the CV, the letters, the translated diplomas. In September I will move and rent a small flat near the metro. I will carry on with my French classes in the evening, twice a week. In two years I will sit an official exam. I will not change my mind: this plan will take work, but it is worth it.",
  watchFor: [
    {
      pattern: "The r of the stem missing, so the future reads as an imparfait (je terminais ma formation en juin, je cherchais un travail).",
      criterion: 'formes',
      feedback: "Il manque le r du futur : je terminerai, je chercherai. Sans lui, ta phrase parle du passé.",
      ref: 'a2-piege',
    },
    {
      pattern: 'The infinitive cut before the ending (je parlai, je terminai, nous choisirerons, je vendai).',
      criterion: 'formes',
      feedback: "Écris l'infinitif en entier, puis la terminaison : terminer plus ai donne terminerai.",
      ref: 'a2-construire',
    },
    {
      pattern: "An -re verb mishandled: the e kept (je prendreai), an -er added (nous attenderons), or the r dropped (ils vendont).",
      criterion: 'formes',
      feedback: "Pour un verbe en -re, enlève seulement le e final : prendre donne prendr-, attendre donne attendr-.",
      ref: 'a3-construire',
    },
    {
      pattern: 'The silent e dropped from an -ier, -uer or -éer verb (j’étudirai, je continurai, je jourai, je lourai).',
      criterion: 'formes',
      feedback: "Ces verbes gardent tout leur infinitif : étudierai, continuerai, jouerai, louerai. Le e s'écrit même si tu ne l'entends pas.",
      ref: 'a5-construire',
    },
    {
      pattern: "A stem-changing -er verb left unchanged, or changed only at je (j'acheterai, nous achetrons, nous appelerons, elle jetera, je payerai written as payrai).",
      criterion: 'formes',
      feedback: "Au futur, ces radicaux changent aux six personnes : j'achèterai et nous achèterons, j'appellerai et nous appellerons.",
      ref: 'a6-tableau',
    },
    {
      pattern: 'An ending that does not follow the subject (les cours commencera, nous terminerai, ils partira).',
      criterion: 'formes',
      feedback: 'La terminaison suit le sujet, comme à tous les temps : ils partiront, nous terminerons.',
      ref: 'a2-formes',
    },
    {
      pattern: 'An irregular stem attempted: serai, aurai, irai, ferai, viendrai, pourrai, verrai, enverrai, or an invented regular version of one (je alerai, je faisera, j’envoierai).',
      criterion: 'formes',
      feedback: `Ces verbes ont un radical à eux, et ${FUTUR_IRREG_REF} te les donne. Ici, choisis des verbes réguliers.`,
      ref: 'a6-construire',
    },
    {
      pattern: 'The whole message in the futur simple, with no present tense saying where the writer stands today.',
      criterion: 'choix',
      feedback: "Commence par une phrase au présent : pour l'instant, je travaille, je suis des cours. Sans elle, on ne sait pas d'où tu pars.",
      ref: 'a9-autres',
    },
    {
      pattern: "Aller plus the infinitive used for every announced step, so a plan reads as a list of intentions (je vais terminer, je vais chercher, je vais déménager).",
      criterion: 'choix',
      feedback: "Dans un message qui annonce un projet, le futur simple engage : je terminerai, je chercherai, je déménagerai.",
      ref: 'a4-quand',
    },
    {
      pattern: 'The two futures stacked in one verb (je vais terminerai, je vais déménagerai).',
      criterion: 'choix',
      feedback: 'Une machine à la fois : soit je vais terminer, soit je terminerai.',
      ref: 'a4-erreurs',
    },
    {
      pattern: 'Negation in English order or doubled (je changerai ne pas, je ne changerai pas rien), or object pronouns behind the verb (je préparerai le en juillet).',
      criterion: 'phrase',
      feedback: 'ne passe devant le verbe et pas le suit. rien prend la place de pas, et les pronoms restent devant.',
      ref: 'a7-construire',
    },
    {
      pattern: 'Time markers missing or misplaced (la prochaine semaine, le prochain mois, il y a deux ans for a future date, après demain without its hyphen).',
      criterion: 'phrase',
      feedback: 'prochain se met après le nom, et dans compte vers l’avenir : la semaine prochaine, dans deux ans.',
      ref: 'a8-marqueurs',
    },
    {
      pattern: 'Under 90 words, no ending, or a text that stops at the last step with no reason given.',
      criterion: 'tache',
      feedback: 'Relis la mission : un projet sur deux ans, de 90 à 130 mots, avec une dernière phrase qui donne ta raison.',
      ref: 'a10-plan',
    },
  ],
  graderNotes: [
    "Count the futur simple verbs by FORM, not by meaning: a stem ending in r plus one of the six endings. An auxiliary plus infinitive (je vais partir) is a futur proche and counts for criterion « choix », never for the six.",
    'Word count EXCLUDES the greeting and the sign-off. Count the body only, with 10% tolerance (81-143) before criterion « tache » loses its point.',
    'Do NOT mark an irregular stem wrong if it is correctly formed: serai, aurai, irai, fera, pourra and the rest are right French and simply belong to the next lesson. Mark them only when the learner has invented a regular version of one.',
    'Both paierai and payerai are correct. Accept either without comment. Accept both essaierai and essayerai, and both nettoierai and nettoyerai only where the -ayer pattern applies; -oyer and -uyer verbs must change.',
    'A present tense with future meaning is correct French for a settled near plan (« en juin je termine ma formation »). Count it under « choix » only if the whole text does it and nothing is ever announced.',
    'Narrator gender is unknown: judge agreement for internal consistency only, and do not require it, since nothing in this task needs a past participle.',
    'Accept any destination and any professional plan, including regional vocabulary (le cégep in Québec, la haute école in Belgium, une formation en alternance in France).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A10_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a10-parler',
  layer: 'core',
  title: 'Dis tes projets à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    'fr.a2.transports-quotidiens.213',
    'fr.a2.transports-quotidiens.201',
    'fr.a2.transports-quotidiens.216',
    'fr.sons.jours-et-mois.039',
    'fr.a2.metiers.052',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['simple', 'promesse'],
};

const A10_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a10-cheat',
  layer: 'core',
  sheetId: 'sheet-futur',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le radical', v: "l'infinitif, gardé jusqu'au r", say: 'Je parlerai au directeur demain matin.',
      detail: { title: 'Le radical', body: 'parler donne parler-, finir donne finir-, prendre donne prendr-. EN: the stem is the infinitive as far as its r.', say: 'Je prendrai le train de sept heures.' } },
    { k: 'les terminaisons', v: '-ai -as -a -ons -ez -ont', say: 'Nous parlerons de cette question à la prochaine réunion.',
      detail: { title: 'Les terminaisons', body: "Ce sont celles d'avoir au présent, sauf nous et vous qui gardent seulement la fin. EN: avoir's present, except at nous and vous.", say: 'Ils parleront de cette question à la prochaine réunion.' } },
    { k: 'le e muet', v: 'étudier donne étudierai', say: "J'étudierai le français toute l'année.",
      detail: { title: 'Le e muet', body: "On ne l'entend pas et on l'écrit toujours : jouerons, créeront, continuerez. EN: never heard, always written.", say: 'Nous jouerons au foot dimanche matin.' } },
    { k: 'le radical changé', v: 'achèter- · appeller- · paier-', say: "J'achèterai le billet ce soir.",
      detail: { title: 'Le radical changé', body: 'Accent grave, consonne doublée ou y devenu i, aux six personnes. EN: accent, doubled consonant or y turned i, at every person.', say: 'Nous appellerons un taxi à la sortie.' } },
    { k: 'la négation', v: 'ne ... pas autour du verbe', say: 'Je ne partirai pas avant la fin du mois.',
      detail: { title: 'La négation', body: 'Le verbe tient en un mot, donc ne et pas l’entourent, et les pronoms restent devant. EN: one word, so ne and pas simply wrap it.', say: 'Je te le rendrai demain.' } },
    { k: 'proche ou simple', v: 'le fil avec maintenant', say: 'Le train partira à huit heures pile.',
      detail: { title: 'Proche ou simple', body: "aller plus l'infinitif garde un fil avec maintenant ; le futur simple annonce. Pas une question de distance. EN: the thread to now, never the distance.", say: 'Regarde le ciel, il va pleuvoir.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'emuet'],
};

const A10_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a10-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu construis le futur de n'importe quel verbe régulier, tu écris les e muets et les radicaux qui changent, tu poses une négation et une question, et tu choisis entre les deux futurs par ce que ta phrase fait. Le piège qui reste, c'est le marqueur pris pour un ordre : demain ne t'oblige à rien. Avant l'examen, relis ta mission écrite, entoure chaque verbe et écris à côté : radical, puis terminaison. Si les deux morceaux se voient à chaque fois, la leçon a marché. EN: Circle every verb in your task and write stem, then ending, beside it; if both parts show every time, the lesson landed.",
  stats: [
    { k: 'Le radical', v: "l'infinitif jusqu'au r" },
    { k: 'Les terminaisons', v: "avoir au présent" },
    { k: 'Le e muet', v: 'écrit, pas entendu' },
    { k: 'Proche ou simple', v: 'le fil avec maintenant' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), TEN rounds of eight, one per act
 *  from act 1 to act 9 plus an integration round. Each round's target is a
 *  distinct errorTrigger, so a failed round fires that round's own drill.
 *
 *  `fold()` strips accents, so NO typeIn or errorSpot answer here differs from
 *  its wrong version by an accent alone: achèterai against acheterai and
 *  lèverai against leverai are tested by `mcq` only, never typed. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A10_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a10-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-projet', label: 'Annoncer un projet', targets: ['intention-floue'],
      questions: [
        mc('Dans un courriel officiel, quelle phrase engage vraiment ta signature ?', ['Je déposerai le dossier vendredi.', 'Je vais déposer le dossier vendredi.'], 0,
          "Une date que ton lecteur peut te rappeler. EN: a date the reader can hold you to.", 'a1-reperer'),
        mc('« Je vais déposer le dossier vendredi » est-il correct ?', ['non, jamais', "oui, mais il dit une intention"], 1,
          "Les deux se disent ; elles ne promettent pas la même chose. EN: both are correct and promise different things.", 'a1-scene'),
        mc('Le futur simple tient en combien de mots ?', ['deux', 'trois', 'un seul'], 2,
          'Un seul : déposerai, ouvrira, confirmerons. EN: one word.', 'a1-check'),
        tI('Mets le verbe au futur simple et écris la phrase.', 'Le magasin (ouvrir) à neuf heures.', 'Le magasin ouvrira à neuf heures.',
          "Une annonce : le futur simple. EN: an announcement takes the futur simple.", 'a1-lecture'),
        tI('Mets le verbe au futur simple et écris la phrase.', "L'agence (fermer) à dix-huit heures.", "L'agence fermera à dix-huit heures.",
          'fermer plus a donne fermera. EN: fermer plus a gives fermera.', 'a1-lecture'),
        tI('Mets les deux verbes au futur simple.', 'Nous (examiner) votre demande et nous (confirmer) la date.', 'Nous examinerons votre demande et nous confirmerons la date.',
          "Deux engagements écrits. EN: two written commitments.", 'a1-lecture'),
        eS('Le chauffage marche dès le premier octobre.', 'Le chauffage marchera dès le premier octobre.',
          "Le contrat promet une date, donc le futur. EN: the contract promises a date.", 'a1-pourquoi'),
        lC('Écoute. Cette phrase pose-t-elle une date que tu pourras rappeler ?', 'Je déposerai le dossier vendredi.', ["non, c'est une intention", "oui, c'est une promesse"], 1,
          'Un seul mot, une date, un engagement. EN: one word, one date, one commitment.', 'a1-reperer'),
      ],
    },
    {
      id: 'r2-machine', label: 'Le r et avoir', targets: ['r-perdu'],
      questions: [
        mc("D'où viennent les terminaisons -ai, -as, -a, -ont ?", ['du verbe être', 'de nulle part', "du verbe avoir au présent"], 2,
          "Ce sont j'ai, tu as, il a, ils ont. EN: they are avoir in the present.", 'a2-avoir'),
        mc('Le radical du futur de chanter est :', ['chanter-', 'chant-', 'chante-'], 0,
          "L'infinitif entier. EN: the whole infinitive.", 'a2-regle'),
        mc('Comment dit-on « we will speak » ?', ['nous parleravons', 'nous parlerons'], 1,
          'Avoir prête ses terminaisons, pas ses mots entiers. EN: avoir lends its endings only.', 'a2-construire'),
        mc("Qu'est-ce qui sépare je parlais de je parlerai ?", ['la voyelle', 'le s', 'le r'], 2,
          'Le r, et rien d’autre. EN: the r, and nothing else.', 'a2-piege'),
        tI('Écris la phrase au futur simple.', 'Demain, je (travailler) à la maison.', 'Demain, je travaillerai à la maison.',
          "travailler plus ai. EN: travailler plus ai.", 'a2-formes'),
        tI('Écris la phrase au futur simple.', 'Les enfants (grandir) vite.', 'Les enfants grandiront vite.',
          'Sujet pluriel, terminaison -ont. EN: plural subject, -ont.', 'a2-construire'),
        eS('Nous choisirerons un autre jour.', 'Nous choisirons un autre jour.',
          'choisir a déjà son r. EN: choisir already has its r.', 'a2-piege'),
        lC('Écoute. Ce verbe est-il au futur ?', 'Je parlais au téléphone quand tu es entré.', ["non, c'est l'imparfait", 'oui'], 0,
          'Pas de r avant la terminaison. EN: no r before the ending.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-groupes', label: 'Les trois groupes', targets: ['groupe-trois'],
      questions: [
        mc('Le radical du futur de attendre est :', ['attend-', 'attendr-', 'attendre-'], 1,
          'Le e tombe, le r reste. EN: the e drops, the r stays.', 'a3-regle'),
        mc('Combien de lettres tombent entre prendre et prendrai ?', ['deux', 'trois', 'une seule'], 2,
          'Seulement le e final. EN: only the final e.', 'a3-construire'),
        mc('Par quelle lettre finissent les trois radicaux ?', ['un r', 'un e', 'un s'], 0,
          'Toujours un r. EN: always an r.', 'a3-check'),
        tI('Écris la phrase au futur simple.', 'Je (prendre) le train de sept heures.', 'Je prendrai le train de sept heures.',
          'prendre donne prendr-. EN: prendre gives prendr-.', 'a3-re'),
        tI('Écris la phrase au futur simple.', 'Vous (lire) le contrat avant de signer.', 'Vous lirez le contrat avant de signer.',
          'lire donne lir-, puis -ez. EN: lire gives lir-, then -ez.', 'a3-construire'),
        tI('Écris la phrase au futur simple.', 'Ils (vendre) leur voiture au printemps.', 'Ils vendront leur voiture au printemps.',
          'vendre donne vendr-, puis -ont. EN: vendre gives vendr-, then -ont.', 'a3-histoire'),
        eS("J'écrirerai une lettre au propriétaire.", "J'écrirai une lettre au propriétaire.",
          'écrire a déjà son r. EN: écrire already has its r.', 'a3-piege'),
        lC('Écoute. Quel est l’infinitif de ce verbe ?', 'Elle répondra à ton message ce soir.', ['répondir', 'répondre'], 1,
          'répondre, troisième groupe. EN: répondre, third group.', 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-deux-futurs', label: 'Proche ou simple', targets: ['futur-distance'],
      questions: [
        mc('Le futur simple sert-il seulement aux choses lointaines ?', ['non', 'oui'], 0,
          'Un train qui part dans dix minutes le prend. EN: a train ten minutes away takes it.', 'a4-check'),
        mc('« Le train partira à huit heures pile » : pourquoi le futur simple ?', ["parce que c'est loin", "parce qu'un horaire s'annonce"], 1,
          "Un horaire existe avant la phrase. EN: a timetable exists before the sentence.", 'a4-regle'),
        mc('« Un jour, je vais arrêter de fumer » : pourquoi le futur proche ?', ["parce que c'est demain", "parce que c'est court", 'parce que la décision est déjà prise'], 2,
          "Le fil avec maintenant, malgré la distance. EN: the thread to now, despite the distance.", 'a4-regle'),
        mc('Dans un courriel professionnel, on attend :', ['le futur simple', 'le futur proche', "n'importe lequel"], 0,
          "Le futur simple, parce qu'il engage. EN: the futur simple, because it commits.", 'a4-quand'),
        tI('Écris la phrase au futur simple.', 'Un jour, nous (habiter) près de la mer.', 'Un jour, nous habiterons près de la mer.',
          'Pas de date, et le futur simple quand même. EN: no date, and still the futur simple.', 'a4-construire'),
        tI('Écris la phrase au futur simple.', 'Les prix (augmenter) au mois de janvier.', 'Les prix augmenteront au mois de janvier.',
          'Une annonce. EN: an announcement.', 'a4-sens'),
        eS('Je vais réserverai la salle en janvier.', 'Je réserverai la salle en janvier.',
          'Une machine à la fois. EN: one machine at a time.', 'a4-erreurs'),
        lC('Écoute. Le verbe tient en un mot ou en deux ?', 'Je vais réserver la salle.', ['un mot', 'deux mots'], 1,
          'aller, puis l’infinitif. EN: aller, then the infinitive.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-emuet', label: 'Le e muet', targets: ['e-avale'],
      questions: [
        mc('étudier au futur, à je :', ["j'étudirai", "j'étudrai", "j'étudierai"], 2,
          "L'infinitif reste entier. EN: the infinitive stays whole.", 'a5-regle'),
        mc('Entend-on le e de oublieras ?', ['non, presque pas', 'oui, clairement'], 0,
          "Presque pas, et il s'écrit quand même. EN: barely, and it is written all the same.", 'a5-ecoute'),
        mc('créer plus -ont donne :', ['créront', 'créeront', 'créerons'], 1,
          'Deux e de suite, et les deux sont obligatoires. EN: two e, both required.', 'a5-tableau'),
        tI('Écris la phrase au futur simple.', 'Nous (jouer) au foot dimanche matin.', 'Nous jouerons au foot dimanche matin.',
          'jouer plus ons donne jouerons. EN: jouer plus ons gives jouerons.', 'a5-construire'),
        tI('Écris la phrase au futur simple.', 'Vous (continuer) sans moi.', 'Vous continuerez sans moi.',
          'Quatre syllabes écrites, trois entendues. EN: four written syllables, three heard.', 'a5-tableau'),
        tI('Écris la phrase au futur simple.', 'Ils (publier) les résultats en mars.', 'Ils publieront les résultats en mars.',
          'publier garde son e. EN: publier keeps its e.', 'a5-construire'),
        eS('On oublira cette histoire dans un mois.', 'On oubliera cette histoire dans un mois.',
          'oublier garde son e. EN: oublier keeps its e.', 'a5-erreurs'),
        lC('Écoute. Combien de syllabes dans le verbe ?', "J'étudierai le français toute l'année.", ['cinq', 'trois', 'quatre'], 2,
          'Quatre : é-tu-di-rai. Le e écrit ne compte pas. EN: four; the written e does not count.', 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-radicaux', label: 'Les radicaux qui changent', targets: ['radical-fige'],
      questions: [
        mc('acheter au futur, à je :', ['acheterai', 'achèterai'], 1,
          "Le è s'entend, donc il s'écrit. EN: the è is audible, so it is written.", 'a6-regle'),
        mc('Le radical achèter- vaut pour quelles personnes ?', ['je seulement', 'tout sauf nous et vous', 'toutes les six'], 2,
          'Toutes, contrairement au présent. EN: all of them, unlike the present.', 'a6-check'),
        mc('appeler au futur, à nous :', ['nous appellerons', 'nous appelerons'], 0,
          'Deux l, à toutes les personnes. EN: two l, at every person.', 'a6-tableau'),
        mc('envoyer suit-il cette règle ?', ["oui, j'envoierai", 'non, son radical est autre chose'], 1,
          `Son radical est enverr-, et ${FUTUR_IRREG_REF} le donne. EN: its stem is enverr-.`, 'a6-construire'),
        tI('Écris la phrase au futur simple.', 'Nous (nettoyer) la cuisine samedi.', 'Nous nettoierons la cuisine samedi.',
          'Les verbes en -oyer changent leur y. EN: -oyer verbs change their y.', 'a6-y'),
        tI('Écris la phrase au futur simple.', 'Elle (jeter) ces vieux papiers.', 'Elle jettera ces vieux papiers.',
          'jeter double son t. EN: jeter doubles its t.', 'a6-tableau'),
        eS('Elle employera un nouveau logiciel.', 'Elle emploiera un nouveau logiciel.',
          'employer donne emploier-. EN: employer gives emploier-.', 'a6-piege'),
        lC('Écoute. Le radical a-t-il changé ?', 'Nous achèterons une voiture électrique.', ['oui, un è ouvert', 'non, rien n’a bougé'], 0,
          'Le même è qu’à je. EN: the same è as at je.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-phrase', label: 'La phrase au futur', targets: ['ordre-anglais'],
      questions: [
        mc('Où vont ne et pas autour de partirai ?', ['ne partirai pas', 'partirai ne pas', 'ne pas partirai'], 0,
          'Autour du verbe, en un seul mot. EN: around the single-word verb.', 'a7-regle'),
        mc('« Nous ne changerons ... pour l’instant. »', ['pas rien', 'rien'], 1,
          'rien prend la place de pas. EN: rien replaces pas.', 'a7-erreurs'),
        mc('Les pronoms objets se placent :', ['après le verbe', 'à la fin de la phrase', 'devant le verbe'], 2,
          "Devant, comme au présent. EN: in front, as in the present.", 'a7-construire'),
        tI('Écris la phrase au futur simple, à la forme négative.', 'Nous (ne pas vendre) la maison.', 'Nous ne vendrons pas la maison.',
          'ne avant, pas après. EN: ne before, pas after.', 'a7-negation'),
        tI('Écris la phrase au futur simple.', 'Je te le (rendre) demain.', 'Je te le rendrai demain.',
          'Deux pronoms, tous les deux devant. EN: two pronouns, both in front.', 'a7-construire'),
        tI('Écris la question au futur simple, avec est-ce que.', '(rester) vous pour le dîner', 'Est-ce que vous resterez pour le dîner',
          'est-ce que, puis sujet et verbe. EN: est-ce que, then subject and verb.', 'a7-sens'),
        eS('Ils ne attendront nous pas.', 'Ils ne nous attendront pas.',
          'Le pronom passe devant le verbe. EN: the pronoun goes in front of the verb.', 'a7-erreurs'),
        lC('Écoute. Combien de pronoms devant le verbe ?', 'Je te le rendrai demain.', ['un', 'deux'], 1,
          'te et le, dans cet ordre. EN: te and le, in that order.', 'a7-sens'),
      ],
    },
    {
      id: 'r8-marqueurs', label: 'Les mots du futur', targets: ['marqueur-roi'],
      questions: [
        mc('Comment dit-on « next week » ?', ['la prochaine semaine', 'la semaine de prochain', 'la semaine prochaine'], 2,
          'prochain suit le nom. EN: prochain follows the noun.', 'a8-marqueurs'),
        mc('dans deux ans compte dans quel sens ?', ["vers l'avenir", 'vers le passé'], 0,
          "dans compte vers l'avant ; il y a vers l'arrière. EN: dans counts forward.", 'a8-piege'),
        mc('Après demain, quels temps sont possibles ?', ['le futur simple seulement', 'le présent, le futur proche et le futur simple'], 1,
          'Les trois. EN: all three.', 'a8-regle'),
        mc('« Ce soir, on commande une pizza. » Est-ce correct ?', ['oui, le projet est arrêté', 'non, il faut le futur'], 0,
          'Le présent suffit pour un projet fixé et proche. EN: the present is enough.', 'a8-contre'),
        tI('Écris la phrase au futur simple.', 'La semaine prochaine, elle (commencer) son stage.', 'La semaine prochaine, elle commencera son stage.',
          'commencer plus a. EN: commencer plus a.', 'a8-construire'),
        tI('Écris la phrase au futur simple.', 'Un jour, tu (comprendre) pourquoi.', 'Un jour, tu comprendras pourquoi.',
          'comprendre donne comprendr-. EN: comprendre gives comprendr-.', 'a8-construire'),
        eS('Le prochain mois, nous déménagerons à Bruxelles.', 'Le mois prochain, nous déménagerons à Bruxelles.',
          'prochain se met après le nom. EN: prochain goes after the noun.', 'a8-piege'),
        lC('Écoute. Quel futur entends-tu après demain ?', 'Demain, je vais rester à la maison.', ['le futur simple', 'aucun des deux', 'le futur proche'], 2,
          'Le même demain, et le futur proche cette fois. EN: the same demain, with the futur proche.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-annoter', label: 'Annoter un projet', targets: ['tout-au-futur'],
      questions: [
        mc('Dans le texte de Sofia et Malick, combien de futurs proches ?', ['un seul', 'cinq', 'aucun'], 0,
          'Un seul : ils vont visiter. EN: one, ils vont visiter.', 'a9-autres'),
        mc('Pourquoi « Sofia travaille déjà » est-il au présent ?', ["c'est une faute", 'pour varier', "ça décrit aujourd'hui"], 2,
          "Un texte de projet a besoin d'un présent pour poser la situation. EN: a plan needs a present.", 'a9-autres'),
        mc('« ils paieront » vient de quel infinitif ?', ['paier', 'payer', 'payier'], 1,
          'payer, avec le y devenu i. EN: payer, with the y turned into an i.', 'a9-simple'),
        tI('Écris la phrase au futur simple.', "L'année prochaine, Sofia et Malick (quitter) Bruxelles.", "L'année prochaine, Sofia et Malick quitteront Bruxelles.",
          'Sujet pluriel, terminaison -ont. EN: plural subject, -ont.', 'a9-lecture'),
        tI('Écris la phrase au futur simple.', "D'ici là, ils (vendre) la moitié de leurs meubles.", "D'ici là, ils vendront la moitié de leurs meubles.",
          'vendre donne vendr-. EN: vendre gives vendr-.', 'a9-simple'),
        tI('Écris la phrase au futur simple.', 'Leur fille (commencer) l’école en septembre.', 'Leur fille commencera l’école en septembre.',
          'commencer plus a. EN: commencer plus a.', 'a9-lecture'),
        eS('Ils ne regretteront pas rien.', 'Ils ne regretteront rien.',
          'rien prend la place de pas. EN: rien replaces pas.', 'a9-lecture'),
        lC('Écoute. Cette phrase parle du projet ou d’aujourd’hui ?', "Pour l'instant, ils remplissent des formulaires.", ["d'aujourd'hui", 'du projet'], 0,
          'Un présent, pour dire où ils en sont. EN: a present, to say where they stand.', 'a9-autres'),
      ],
    },
    {
      id: 'r10-bilan', label: 'Tout ensemble', targets: ['projet-plat'],
      questions: [
        mc('Un radical de futur finit toujours par :', ['un e', 'un r', 'un s'], 1,
          'parler-, finir-, prendr-, achèter-. EN: parler-, finir-, prendr-, achèter-.', 'a10-cheat'),
        mc('Quelle question décide entre les deux futurs ?', ['est-ce que ça part de maintenant', "est-ce que c'est loin"], 0,
          'Le fil avec maintenant, jamais la distance. EN: the thread to now, never the distance.', 'a10-cheat'),
        mc('Quel temps ouvre souvent un texte de projet ?', ['le futur proche', 'le futur simple', 'le présent'], 2,
          "Il dit d'où tu pars. EN: it says where you are starting from.", 'a10-plan'),
        mc('Que manque-t-il à un projet qui s’arrête à la dernière étape ?', ['rien', 'une fin qui donne ta raison'], 1,
          'Une vraie fin ferme le texte. EN: a real ending closes the text.', 'a10-plan'),
        tI('Écris la phrase au futur simple.', "D'abord, je (terminer) ma formation en juin.", "D'abord, je terminerai ma formation en juin.",
          'terminer plus ai. EN: terminer plus ai.', 'a10-lecture'),
        tI('Écris la phrase au futur simple, à la forme négative.', "Je (ne pas changer) d'avis.", "Je ne changerai pas d'avis.",
          'ne avant, pas après. EN: ne before, pas after.', 'a10-scenario'),
        eS('Je continurai mes cours de français le soir.', 'Je continuerai mes cours de français le soir.',
          'continuer garde son e. EN: continuer keeps its e.', 'a10-lecture'),
        lC('Écoute. Futur proche ou futur simple ?', 'On se reparlera très vite.', ['futur proche', 'futur simple'], 1,
          'Un seul mot, avec son r. EN: one word, with its r.', 'a10-review'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A10_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a10-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'le radical du futur', back: "l'infinitif jusqu'au r", say: 'Je parlerai au directeur demain matin.' },
    { front: 'les terminaisons', back: '-ai -as -a -ons -ez -ont', say: 'Nous parlerons de cette question à la prochaine réunion.' },
    { front: "d'où viennent les terminaisons", back: 'avoir au présent', say: "J'ai, tu as, il a : la moitié du futur est déjà là." },
    { front: 'un verbe en -re', back: 'le e tombe, le r reste', say: 'Je prendrai le train de sept heures.' },
    { front: 'étudier au futur', back: "j'étudierai", say: "J'étudierai le français toute l'année." },
    { front: 'acheter au futur', back: "j'achèterai", say: "J'achèterai le billet ce soir." },
    { front: 'payer au futur', back: 'je paierai', say: 'Je paierai par carte, comme toujours.' },
    { front: 'la négation', back: 'ne ... pas autour du verbe', say: 'Je ne partirai pas avant la fin du mois.' },
    { front: 'proche ou simple', back: 'le fil avec maintenant', say: 'Le train partira à huit heures pile.' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A10_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a10-roundup',
  layer: 'core',
  title: 'Le futur, en résumé',
  body: `${REFRAME} Tu fabriques la forme sans y penser, tu écris les e muets et les radicaux qui changent, et tu choisis entre les deux futurs par ce que ta phrase fait. La prochaine leçon garde la même machine et change le premier morceau : une douzaine de verbes très courants ont un radical à eux, comme être, avoir, aller et faire. EN: Next lesson: the dozen very common verbs whose stem is their own.`,
  points: [
    "Le radical : l'infinitif, gardé jusqu'à son r.",
    'Les terminaisons : avoir au présent, sauf nous et vous.',
    'Le e muet de étudier et jouer s’écrit toujours.',
    'Le futur proche garde un fil avec maintenant ; le futur simple annonce.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'proche'],
};

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Écrire ses projets',
    opener: {
      line: "À toi d'écrire : où tu en es, tes étapes dans l'ordre, et une fin qui dit pourquoi. EN: Your turn to write: where you are now, your steps in order, and an ending that says why.",
      imageRef: 'lessons/futur-simple/act10.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ton propre projet et passé l'examen : quatre-vingts questions, dix rounds. EN: You wrote your own plan and sat the exam: eighty questions, ten rounds.",
    estScreens: 110,
    restPoints: ['a10-scenario', 'a10-cheat', 'a10-progress', 'a10-quiz', 'a10-review'],
  },
  sections: [
    A10_LECTURE, A10_PLAN, A10_USAGES, A10_SCENARIO, A10_TASK, A10_PARLER,
    A10_CHEAT, A10_PROGRESS, A10_QUIZ, A10_REVIEW, A10_ROUNDUP,
  ],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-promesse', title: 'Annonce ou intention', format: 'sort' as const, coach: "Deux piles. Demande-toi : est-ce que ton lecteur pourra te le rappeler ? EN: sort by whether the reader can hold you to it.", buckets: ['une promesse datée', 'une intention'], items: [E(1002), E(1003), E(1012), E(1001), E(1059), E(1067)], audio: AUDIO },
  { id: 'd-radical', title: 'Le r avant la terminaison', format: 'mcq' as const, coach: "Cherche le r. Sans r, c'est l'imparfait. EN: look for the r.", q: 'Demain, je ... à la maison. (travailler)', opts: ['travaillais', 'travaillerai'], correct: 1, why: 'Le r porte le futur. EN: the r carries the future.', items: [E(1016), E(1022), E(1027), E(1032), E(1033), E(1034)], audio: AUDIO },
  { id: 'd-groupes', title: 'Un e part, rien ne s’ajoute', format: 'mcq' as const, coach: "Pour un verbe en -re, enlève le e et arrête-toi là. EN: for an -re verb, drop the e and stop.", q: 'Nous ... devant la gare. (attendre)', opts: ['attendrons', 'attenderons'], correct: 0, why: 'attendre donne attendr-, puis -ons. EN: attendre gives attendr-, then -ons.', items: [E(1036), E(1038), E(1042), E(1048), E(1050), E(1051)], audio: AUDIO },
  { id: 'd-fil', title: 'Le fil avec maintenant', format: 'sort' as const, coach: 'Deux piles. Est-ce que la phrase part de maintenant, ou est-ce qu’elle annonce ? EN: does it start from now, or does it announce?', buckets: ['ça part de maintenant', 'un fait annoncé'], items: [E(1054), E(1056), E(1057), E(1055), E(1062), E(1070)], audio: AUDIO },
  { id: 'd-emuet', title: 'Le e qu’on n’entend pas', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute, puis écris-la de mémoire. Le e est toujours là. EN: read each one aloud, then write it from memory.", items: [E(1072), E(1074), E(1075), E(1077), E(1080), E(1084)], audio: AUDIO },
  { id: 'd-orthographe', title: 'Accent, consonne ou i', format: 'mcq' as const, coach: 'Au futur, le radical change aux six personnes, sans exception. EN: in the future the stem changes at all six persons.', q: 'Nous ... un taxi à la sortie. (appeler)', opts: ['appelerons', 'appellerons'], correct: 1, why: 'appeler double son l partout. EN: appeler doubles its l everywhere.', items: [E(1088), E(1090), E(1092), E(1095), E(1099), E(1105)], audio: AUDIO },
  { id: 'd-phrase', title: 'Autour du verbe', format: 'mcq' as const, coach: 'Le verbe tient en un mot. ne passe devant, le deuxième mot suit. EN: the verb is one word; ne goes in front and the second word follows.', q: 'Je ... la maison. (ne ... pas, vendre)', opts: ['ne vendrai pas', 'vendrai ne pas'], correct: 0, why: 'ne avant, pas après. EN: ne before, pas after.', items: [E(1109), E(1111), E(1113), E(1118), E(1120), E(1121)], audio: AUDIO },
  { id: 'd-marqueurs', title: 'Situe, ne commande pas', format: 'sort' as const, coach: "Deux piles. Le marqueur donne-t-il une date, ou seulement une direction ? EN: does the marker give a date or only a direction?", buckets: ['une date', 'un moment flou'], items: [E(1124), E(1125), E(1133), E(1127), E(1128), E(1131)], audio: AUDIO },
  { id: 'd-annoter', title: 'Verbe par verbe', format: 'sort' as const, coach: "Trois piles dans ta tête, deux ici : ce qui est déjà vrai, et ce qui est annoncé. EN: what is already true, and what is announced.", buckets: ['déjà vrai', 'annoncé'], items: [E(1139), E(1151), E(1142), E(1137), E(1145), E(1153)], audio: AUDIO },
  { id: 'd-projet', title: 'Un projet complet', format: 'mcq' as const, coach: 'Un présent pour partir, des étapes dans l’ordre, une fin qui donne ta raison. EN: a present to start from, steps in order, an ending that gives your reason.', q: 'Ton projet se termine par « Dans deux ans, je passerai un examen ». Que manque-t-il ?', opts: ['rien', 'une fin qui donne ta raison'], correct: 1, why: "Une dernière phrase ferme le texte. EN: a last sentence closes the text.", items: [E(1154), E(1155), E(1156), E(1163), E(1164), E(1165)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'intention-floue', description: 'Writes every plan with aller plus the infinitive, so a dated commitment reads as an intention the reader cannot rely on.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check'], drill: 'd-promesse', retest: 'd-promesse' },
  { id: 'r-perdu', description: 'Drops the r of the stem, or cuts the infinitive before adding the ending, so the future comes out as an imparfait or as a word that does not exist.', detectOn: ['a2-construire', 'a2-piege', 'a2-check'], drill: 'd-radical', retest: 'd-radical' },
  { id: 'groupe-trois', description: 'Mishandles an -re verb: keeps the e, adds an -er, doubles the r or shortens the stem, so the third group comes out as an invented form.', detectOn: ['a3-construire', 'a3-piege', 'a3-check'], drill: 'd-groupes', retest: 'd-groupes' },
  { id: 'futur-distance', description: 'Picks between the two futures by how far away the event is, so a timetable ten minutes from now gets aller and a decision taken today gets the futur simple.', detectOn: ['a4-construire', 'a4-sens', 'a4-check'], drill: 'd-fil', retest: 'd-fil' },
  { id: 'e-avale', description: 'Writes these verbs the way they sound, dropping the silent e of the infinitive (étudirai, jourons, créront), so the stem is cut where nothing is heard.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check'], drill: 'd-emuet', retest: 'd-emuet' },
  { id: 'radical-fige', description: 'Leaves the stem of acheter, appeler, jeter or payer unchanged, or changes it only at je, carrying the present tense pattern into the future.', detectOn: ['a6-construire', 'a6-piege', 'a6-check'], drill: 'd-orthographe', retest: 'd-orthographe' },
  { id: 'ordre-anglais', description: 'Keeps English word order round the future verb: puts ne after it, stacks pas with rien, leaves the object pronouns behind the verb, or combines est-ce que with inversion.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check'], drill: 'd-phrase', retest: 'd-phrase' },
  { id: 'marqueur-roi', description: 'Treats a time word as an instruction: forces the futur simple after demain, or refuses the present for a settled near plan, and misplaces prochain or dans.', detectOn: ['a8-construire', 'a8-piege', 'a8-check'], drill: 'd-marqueurs', retest: 'd-marqueurs' },
  { id: 'tout-au-futur', description: 'Writes a whole plan in the futur simple, including the present-tense sentences that say where the writer is starting from, so the reader cannot tell the situation from the project.', detectOn: ['a9-autres', 'a9-check', 'a10-mission'], drill: 'd-annoter', retest: 'd-annoter' },
  { id: 'projet-plat', description: 'Produces a plan with no starting point, no order and no ending: a pile of correct future sentences that never becomes a text somebody can act on.', detectOn: ['a10-mission', 'a10-scenario', 'a10-plan'], drill: 'd-projet', retest: 'd-projet' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here (a `table` at layer core
 *  is refused by validateDensity). Every sheet is reachable from a mission
 *  through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-futur', 'Le futur simple, la formation', ['la règle', 'les six formes', 'les terminaisons'], [
    teach('sheet-futur-teach', 'La règle en trois lignes', `${REFRAME} Le radical est l'infinitif, gardé jusqu'à son r : parler donne parler-, finir donne finir-, prendre donne prendr-. Les terminaisons -ai, -as, -a, -ons, -ez, -ont sont celles d'avoir au présent, sauf pour nous et vous, qui gardent seulement la fin. EN: ${REFRAME_EN} The stem is the infinitive as far as its r, and the endings are avoir's present, except at nous and vous where only the ending is kept.`),
    table('sheet-futur-table', 'Les six formes, trois verbes', ['Personne', 'parler', 'finir'], [
      ['je', 'je parlerai', 'je finirai'],
      ['tu', 'tu parleras', 'tu finiras'],
      ['il, elle, on', 'il parlera', 'il finira'],
      ['nous', 'nous parlerons', 'nous finirons'],
      ['vous', 'vous parlerez', 'vous finirez'],
      ['ils, elles', 'ils parleront', 'ils finiront'],
    ]),
    table('sheet-futur-avoir', 'Les terminaisons et avoir', ['Terminaison', 'avoir au présent', 'Pareil ?'], [
      ['-ai', "j'ai", 'oui'],
      ['-as', 'tu as', 'oui'],
      ['-a', 'il a', 'oui'],
      ['-ons', 'nous avons', 'seulement la fin'],
      ['-ez', 'vous avez', 'seulement la fin'],
      ['-ont', 'ils ont', 'oui'],
    ]),
  ]),
  sheet('sheet-groupes', 'Les trois groupes', ['le radical par groupe', 'les verbes en -re'], [
    teach('sheet-groupes-teach', 'Une seule coupure dans tout le système', "Les verbes en -er et en -ir gardent leur infinitif entier : parler donne parler-, finir donne finir-. Les verbes en -re perdent leur e final et gardent tout le reste : prendre donne prendr-, écrire donne écrir-, vivre donne vivr-. C'est la seule lettre qui tombe dans tout le futur régulier, et les trois radicaux finissent par un r. EN: -er and -ir verbs keep the whole infinitive; -re verbs drop only the final e, and all three stems end in an r."),
    table('sheet-groupes-table', 'Le radical, groupe par groupe', ['Infinitif', 'Radical', 'Exemple'], [
      ['parler', 'parler-', 'je parlerai'],
      ['travailler', 'travailler-', 'je travaillerai'],
      ['finir', 'finir-', 'je finirai'],
      ['choisir', 'choisir-', 'nous choisirons'],
      ['prendre', 'prendr-', 'je prendrai'],
      ['attendre', 'attendr-', 'nous attendrons'],
      ['écrire', 'écrir-', "j'écrirai"],
      ['lire', 'lir-', 'vous lirez'],
      ['dire', 'dir-', 'je dirai'],
      ['vivre', 'vivr-', 'nous vivrons'],
      ['suivre', 'suivr-', 'elle suivra'],
      ['mettre', 'mettr-', 'tu mettras'],
    ]),
  ]),
  sheet('sheet-proche', 'Futur proche ou futur simple', ['ce que chacun dit', 'les quatre situations'], [
    teach('sheet-proche-teach', 'Le fil avec maintenant', "Le futur proche (aller au présent plus l'infinitif) garde un fil avec le moment où tu parles : la décision vient d'être prise, la chose est déjà lancée, ou tu la vois arriver. Le futur simple coupe ce fil et pose un fait à venir. Ce n'est pas une question de distance : un train qui part dans dix minutes prend le futur simple, parce qu'un horaire s'annonce, et « un jour, je vais arrêter de fumer » prend le futur proche, parce que la décision est déjà prise. EN: the futur proche keeps a thread back to now; the futur simple states a coming fact. Distance decides nothing."),
    table('sheet-proche-table', 'Quatre situations', ['Situation', 'Forme', 'Exemple'], [
      ['une conversation ordinaire', 'futur proche', 'On va manger chez ma sœur.'],
      ['un signe que tu vois', 'futur proche', 'Regarde le ciel, il va pleuvoir.'],
      ['un avertissement immédiat', 'futur proche', 'Attention, tu vas tomber.'],
      ['une décision déjà prise', 'futur proche', 'Un jour, je vais arrêter de fumer.'],
      ['un horaire, une annonce', 'futur simple', 'Le train partira à huit heures pile.'],
      ['un écrit qui engage', 'futur simple', 'Nous confirmerons la date par écrit.'],
    ]),
  ]),
  sheet('sheet-orthographe', "L'orthographe du radical", ['le e muet', 'les radicaux qui changent', 'ce que le présent fait autrement'], [
    teach('sheet-orthographe-teach', 'Deux familles, deux difficultés', "Première famille : les verbes en -ier, -uer, -éer et -ouer gardent leur infinitif entier, et le e qui s'y trouve ne se prononce presque pas. Tu dis étudirai et tu écris étudierai. Deuxième famille : quelques verbes en -er écrivent leur radical autrement, avec un accent grave (achèter-, lèver-), une consonne doublée (appeller-, jetter-) ou un i à la place du y (paier-, emploier-). La différence avec le présent est le seul vrai piège : au présent, nous et vous gardent la forme simple ; au futur, le radical change aux six personnes. EN: one family keeps a silent written e, the other respells the stem, and unlike the present the change covers all six persons."),
    table('sheet-orthographe-emuet', 'Le e muet, huit verbes', ['Infinitif', 'Futur', 'Ce qui surprend'], [
      ['étudier', "j'étudierai", 'un e entre le i et le r'],
      ['oublier', 'tu oublieras', 'on dit oubliras'],
      ['remercier', 'je remercierai', 'même famille que étudier'],
      ['apprécier', 'elle appréciera', 'même famille'],
      ['publier', 'ils publieront', 'même famille'],
      ['jouer', 'nous jouerons', 'le e reste après jou'],
      ['continuer', 'vous continuerez', 'le e reste après nu'],
      ['créer', 'ils créeront', 'deux e de suite'],
    ]),
    table('sheet-orthographe-radicaux', 'Les radicaux qui changent', ['Infinitif', 'Radical', 'Présent, pour comparer'], [
      ['acheter', 'achèter-', "nous achetons, sans accent"],
      ['se lever', 'lèver-', 'nous nous levons, sans accent'],
      ['appeler', 'appeller-', 'nous appelons, un seul l'],
      ['jeter', 'jetter-', 'nous jetons, un seul t'],
      ['payer', 'paier- ou payer-', 'nous payons'],
      ['essayer', 'essaier-', 'nous essayons'],
      ['employer', 'emploier-', 'nous employons'],
      ['nettoyer', 'nettoier-', 'nous nettoyons'],
    ]),
    teach('sheet-orthographe-frontiere', 'Ce qui ne relève pas de cette page', "envoyer ressemble à employer et ne se comporte pas comme lui : son radical de futur est enverr-, et il appartient à la liste des radicaux irréguliers, avec être, avoir, aller, faire, venir, voir, pouvoir, devoir, savoir, vouloir et falloir. La leçon suivante les donne tous. EN: envoyer looks like employer and behaves differently; its stem is enverr-, and the next lesson gives the whole irregular list."),
  ]),
  sheet('sheet-marqueurs', 'Les mots du temps futur', ['les marqueurs', 'la place de prochain', 'les trois temps possibles'], [
    teach('sheet-marqueurs-teach', 'Un marqueur situe, il ne commande pas', "demain, la semaine prochaine, dans deux ans, un jour, bientôt, d'ici là : ces mots disent QUAND, et rien de plus. Après n'importe lequel d'entre eux, le présent, le futur proche et le futur simple sont tous possibles, et c'est ce que fait ta phrase qui décide. Ce qui est fixe, ce sont leurs propres règles : prochain se met après le nom, dans compte vers l'avenir quand il y a compte vers le passé, et après-demain prend un trait d'union. EN: these words say when and nothing more; what is fixed is their own placement, not the tense that follows."),
    table('sheet-marqueurs-table', 'Douze marqueurs', ['Marqueur', 'Ce qu’il situe', 'Exemple'], [
      ['demain', 'le jour suivant', 'Demain, je terminerai ce rapport.'],
      ['après-demain', 'le jour d’après', 'Après-demain, nous visiterons le nouvel appartement.'],
      ['la semaine prochaine', 'la semaine qui vient', 'La semaine prochaine, elle commencera son stage.'],
      ['le mois prochain', 'le mois qui vient', 'Le mois prochain, nous déménagerons à Bruxelles.'],
      ["l'année prochaine", "l'année qui vient", "L'année prochaine, ils ouvriront une deuxième boutique."],
      ['dans deux ans', 'une distance vers l’avant', "Dans deux ans, j'habiterai peut-être au Québec."],
      ['un jour', 'un moment sans date', 'Un jour, tu comprendras pourquoi.'],
      ['bientôt', 'peu de temps après maintenant', 'Bientôt, tout le monde travaillera autrement.'],
      ['plus tard', 'après, sans précision', 'Plus tard, on en reparlera calmement.'],
      ["d'ici là", 'entre maintenant et ce moment', "D'ici là, nous préparerons les documents."],
      ["à l'avenir", 'à partir de maintenant, durablement', "À l'avenir, la ville limitera les voitures."],
      ['ce soir', 'la fin de la journée en cours', 'Ce soir, on commande une pizza.'],
    ]),
    table('sheet-marqueurs-trois', 'Le même moment, trois formes', ['Forme', 'Exemple', 'Ce que ça ajoute'], [
      ['le présent', 'Ce soir, on commande une pizza.', 'le projet est arrêté et proche'],
      ['le futur proche', 'Demain, je vais rester à la maison.', 'la décision est déjà prise'],
      ['le futur simple', 'Demain, je terminerai ce rapport.', 'tu poses un fait, tu annonces'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10];

export const SECTIONS: DraftSection[] = ACTS.flatMap((a) => a.sections);

/** Every id the lesson can put in front of a learner. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, and only ids a flashcard drill can reach. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

/** Every recordingId the sections name, each with its studio brief. */
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-05-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-05-agence': "The letting agency's written reply (act 1), one female France-French voice, one take, read at dictation pace, formal but not cold. Every future verb keeps its r clearly audible before the ending; do not swallow « examinerons » into three syllables.",
  'rec-b1-05-r-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Line 1 is the only imparfait and must NOT be marked by pace or emphasis: the whole mission is whether the learner hears the r on its own.',
  'rec-b1-05-machine': 'The two rule decks. Read each form once, plainly, with the voice falling on the r plus the ending. On the endings card, read the six endings as a list with an even beat, never as a chant.',
  'rec-b1-05-piege-r': "The audio step plays each card's CORRECT sentence. Read the six identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-05-quai': 'The platform conversation (act 3), two voices, Belgian French welcome, one take. The -re futures (partira, attendrons, prendrai, descendra, dirai, lirez, vendrons) must each keep the consonant before the r audible: attendrons is a-tan-drons, never a-tan-ons.',
  'rec-b1-05-groupes': 'The three-group deck. Read the infinitive, a beat, then the future form, so the learner hears what was kept and what was dropped. On the third card, prendre and prendrai must be clearly separable.',
  'rec-b1-05-groupes-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, conversational pace. No emphasis on any verb: the mission is whether the learner can place the group from a normal sentence.',
  'rec-b1-05-piege-groupes': "The audio step plays each card's CORRECT sentence, six of them. Same pace throughout; the invented forms in promptSound are never spoken.",
  'rec-b1-05-compte-rendu': 'The minutes conversation (act 4), two voices, one male one female. Karim speaks quickly and casually; Léa reads her written sentence slowly, as someone reading back what they typed. That contrast IS the teaching point, so it must survive the edit.',
  'rec-b1-05-deux-futurs': 'The two contrast decks. Read the futur proche cards lightly and quickly, as speech; the futur simple cards evenly, as an announcement. Never exaggerate: both must sound like ordinary French.',
  'rec-b1-05-deux-futurs-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, conversational speed. Lines 1 and 2 are the same verb in the two forms and must be read at the same pace, or the learner counts performances instead of words.',
  'rec-b1-05-syllabes': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order. Read at ordinary speed and do NOT sound the silent e of étudierai, jouerons or créeront. The mission is that the ear gives no help here, so an over-careful reading destroys it.',
  'rec-b1-05-emuet': 'The silent-e deck. Read the infinitive, a beat, then the future form, at normal speed. The written e is not pronounced in either.',
  'rec-b1-05-syndic': "The managing agent's notice (act 6), one voice, France French, formal and neutral, one take at dictation pace. The open è of appellerons, jettera and se lèvera must be clearly audible, and nettoieront must not be read as nettoyeront.",
  'rec-b1-05-radicaux': 'The stem-change deck. On cards one and two, the contrast between the infinitive (closed e) and the future (open è) is the whole teaching point and must be audible without being exaggerated.',
  'rec-b1-05-radicaux-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, conversational speed. No emphasis on the changed syllable: the learner has to catch the open è on their own.',
  'rec-b1-05-piege-radicaux': "The audio step plays each card's CORRECT sentence, six of them. Card six's correct sentence is about essayer, not about envoyer: read what is written in `fr`, never the promptSound.",
  'rec-b1-05-colis': 'The customer-service call (act 7), two voices: a tired but polite agent and a firm customer, Belgian French welcome. The ne is often dropped in real speech; here it must be pronounced, because the mission is about where it sits.',
  'rec-b1-05-phrase': 'The sentence-frame deck. Read each line at natural speed with no pause between ne and the verb, so the learner hears one block rather than a grammar exercise.',
  'rec-b1-05-marqueurs-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, conversational speed. Lines 1, 2 and 3 all start with a time marker and end in a different tense; read the markers identically, with no extra weight, or the mission answers itself.',
  'rec-b1-05-marqueurs': 'The marker deck. The first three cards are the same situation in three tenses, so they must be read at the same pace and pitch; only the verb differs.',
  'rec-b1-05-piege-marqueurs': "The audio step plays each card's CORRECT sentence. Read après-demain as one word, and la semaine prochaine with no pause before prochaine.",
  'rec-b1-05-projet': 'The plan narrative (act 9), one voice, one take, natural reading pace, Belgian or France French. Even throughout: the futur simple verbs must not be stressed more than the present ones, because the mission is to tell them apart by form.',
  'rec-b1-05-modele': 'The model plan (act 10), one voice, one take, warm and unhurried, as somebody reading back a message they have just written. The four connectors (D’abord, Ensuite, Au mois de septembre, Dans deux ans, Finalement) each take a small pause before them: they are the shape the learner will copy.',
};

export const LESSON: Omit<Lesson, 'sections'> & { sections: DraftSection[] } = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 05',
  intro: 'You already say what you are going to do with aller plus an infinitive. This lesson gives you the other future, the one that fits in a single word. Its stem is the infinitive itself, kept as far as its r, and its endings are the present tense of avoir. Once you can build it, the lesson is about when a French speaker reaches for it rather than for je vais.',
  skill: 'PE',
  grammarAssumed: [
    ER_VERBS_UNIT, ER_EXCEPTIONS_UNIT, IR_VERBS_UNIT, RE_VERBS_UNIT,
    FUTUR_PROCHE_UNIT, NEGATION_UNIT, TIME_PREP_UNIT, PC_AVOIR_UNIT,
    IMP_FORM_UNIT, PC_IMP_UNIT, PC_IMP_PAIRS_UNIT,
  ],
  grammarIntroduced: [
    'The futur simple of regular verbs: the infinitive as the stem, kept as far as its r, plus the endings -ai, -as, -a, -ons, -ez, -ont',
    "The endings as the present tense of avoir, with nous and vous keeping only the ending rather than the whole form",
    'All three regular groups, including -re verbs dropping the final e while keeping the r (prendre gives prendr-)',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu sais déjà dire ce que tu vas faire avec aller plus l'infinitif. Cette leçon te donne l'autre futur, celui qui tient en un seul mot. Son radical, c'est l'infinitif gardé jusqu'à son r, et ses terminaisons sont celles d'avoir au présent. Une fois la forme construite, tout le travail est de savoir quand un francophone choisit l'une plutôt que l'autre.",
    minutes: 120,
    difficulty: 3,
    glyph: 'rai',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: FUTUR_SIMPLE_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 2,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Every `say` is French and spoken by a fr-FR voice.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

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

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, READING_TEXT, MODEL_TEXT, dicteeFor };
