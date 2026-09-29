// b2.02.l1 « Le conditionnel passé »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (the grammar shape of b1.08 and b1.10) under
// B2-BUILD-LOG.md « How B2 teaches complex structures »: every act runs
// form → meaning → choice → text, and every act from 3 on ends with the form
// inside a text of 60 to 120 words before its check.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is real (in SECTION_TYPES and the LessonSection union), so `sections` is
// `LessonSection[]` and the validators run on `LESSON` itself.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · the contrast that is the unit)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / listening), name (cardDeck,
//   tapTable, examples), build (groupDrill, gated), choose (a drill where the
//   MEANING picks the form), trap (trapDrill stepped or commonErrors), text
//   (a 60-120 word reading where the form holds a paragraph), check.
//
//    1  Ce qui aurait pu se passer     6   the five jobs in one apology email
//    2  La forme                       7   avoir/être au conditionnel + participe
//    3  Devant ou derrière             7   conditionnel présent vs passé
//    4  Le regret                      8   aimé, voulu, préféré, n'aurais pas dû
//    5  Le reproche                    7   from tu aurais dû to on aurait pu
//    6  Dû, pu, voulu                  8   a dû / aurait dû, a pu / aurait pu
//    7  Aurai ou aurais                8   futur antérieur vs conditionnel passé
//    8  Ce qui aurait pu arriver       8   the unreal result; « si j'aurais »
//    9  La politesse au passé          7   j'aurais voulu vous demander
//   10  Selon nos informations         7   passé composé vs conditionnel, news
//   11  Ta lettre                     11   model, plan, role play, TASK, quiz
//
//   TOTAL 84 missions, 11 acts. Corpus: 151 authored rows (.1200-.1350) plus
//   9 reused seed rows. Quiz: 11 rounds of 8 (round 1 recycles lessons 8, 9,
//   10 and 34 in B1; round 11 is exam-style, TCF gap fills and DELF reading
//   questions on the act 11 letter). Eleven error triggers, eleven drills,
//   five reference sheets, ten terms. Texts: act 1 (147 words), acts 3 to 10
//   (68 to 93 words each), act 11 (156 words). Chapter artwork:
//   `conditionnel-passe-image-prompts.md`, 11 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le conditionnel passé, c’est le même pas en arrière, posé sur un moment
//     déjà passé. »
//   EN: The past conditional is the same step back, taken on a moment that
//   is already over.
//
//   ONE METAPHOR, LE PAS EN ARRIÈRE, inherited from lesson 8 in B1 (« le
//   recul »). The present conditional steps back from the real; this form
//   steps back from a moment that is over. It is NOT « the tense of regret »
//   (acts 8 to 10 regret nothing) and NOT « what did not happen » (act 10's
//   fire may well have caused two injuries).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the conditionnel passé built and used: form and agreement; the
//           contrast with the present conditional; regret; reproach and its
//           diplomatic scale; devoir/pouvoir/vouloir in the passé composé
//           against the conditionnel passé; the j'aurai/j'aurais trap; the
//           unreal past result with sans, avec, à ta place, sinon; the polite
//           past; the journalistic conditional in the past against the
//           passé composé.
//   QUOTES  the reframes of lessons 8, 9, 10 and 34 in B1, re-exported from
//           their corpus files; rows of lessons 8, 9, 10 and 34 in B1 and 25
//           in B2 reused BY ID from the seed.
//   LEAVES  the plus-que-parfait (lesson 1 in B2, named in the act 2 check
//           and act 8); si + plus-que-parfait > conditionnel passé (lesson 3
//           in B2: act 8 shows the pair for RECOGNITION, never drills the si
//           side, and the roundup hands over to it); the futur antérieur
//           (lesson 7 in B2, named as the other half of act 7's trap).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   B2: natural French, not simplified; English still authored on every
//   learner string (an `en` field or a final `EN: `), never on an answer.
//   tu in every instruction; characters use vous where the situation wants
//   it. Every `say` is French. No spaced « ? » or « ! » in any bubble. The
//   scenario uses ’ only. Lessons cited by trail position in words. Mission
//   answer slots are spread by `spreadMissions()`, the quiz by
//   `spreadSlots()` (options rotated with `correct`, no text changes, no
//   `why` names an option position), as b2.22 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. ACT 8 shows « si + plus-que-parfait » beside the form, for
//      recognition, with lesson 10 in B1's own rows, and teaches « si
//      j'aurais » as an error. It never asks the learner to build the si
//      side. Right boundary with lesson 3 in B2, or should act 8 not show
//      the si pair at all?
//   2. ACT 7 names the futur antérieur (lesson 7 in B2, same publish) as the
//      other half of the j'aurai / j'aurais trap, with two rows of it. Fine
//      to show it before lesson 7 teaches it?
//   3. THE RUBRIC has FIVE criteria (tâche 3, cohérence 3, étendue 2,
//      correction 2, registre 2 = 12), as b2.22 mirrors the B2 writing grid.
//      The annotation block sits after the letter inside `modelAnswer`.
//   4. « J'aurais eu besoin d'un renseignement » (act 9) is everyday Belgian
//      and Québec politeness, heard less in France. Keep?
//   5. Version 1 (a new lesson), as b2.22 to b2.26.
//   6. THREE tapTables (acts 3, 5, 6), one per act, as B1 settled.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  TEXT_LUNDI, TEXT_CONCERT, TEXT_BLOGUE, TEXT_AFFICHE, TEXT_PLOMBIER, TEXT_EXCUSES,
  TEXT_AVION, TEXT_SECRETARIAT, TEXT_BREVE, MODELE_TEXT,
  B108_REFRAME, B108_REFRAME_EN, B109_REFRAME, B109_REFRAME_EN,
  B110_REFRAME, B110_REFRAME_EN, B134_REFRAME, B134_REFRAME_EN,
  COND_UNIT, POLI_UNIT, SI_UNIT, MEDIAS_UNIT,
  COND_REF, POLI_REF, SI_REF, MEDIAS_REF, PQP_REF, SI_PASSE_REF, FUT_ANT_REF,
} from './conditionnel-passe-corpus.ts';
import { CONDITIONNEL_PASSE_TERMS } from './conditionnel-passe-terms.ts';

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
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));
const OWN = new Set(ALL_ROWS.map((r) => r.id));

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b2.02: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.02: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.02: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });
/** A trapDrill card built from a corpus row: the WRONG version in promptSound. */
const trap = (id: string, promptLabel: string, promptSound: string, tip: string) =>
  ({ promptLabel, promptSound, fr: fr(id), ipa: ipaOf(id), tip });
const STEPS = (rule: string, cards: string) => [
  { label: 'La règle', kind: 'rule' as const, title: rule },
  { label: 'Six cartes', kind: 'cards' as const, title: cards },
  { label: 'Écoute', kind: 'audio' as const, title: 'Écoute les six phrases correctes' },
  { label: 'À toi', kind: 'drill' as const, title: 'Huit phrases', gate: true },
];

function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1: CE QUI AURAIT PU SE PASSER
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The present conditional answers the wrong question: it looks ahead
 *  while the grievance is behind. NO « ? » OR « ! » IN ANY BUBBLE. */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'La réunion avancée',
  frSub: 'Neuf heures au lieu de dix',
  setting: { place: 'Une agence de traduction, avenue du Mont-Royal', city: 'Montréal', time: '9 h 40', ambience: 'une salle de réunion vide, deux tasses encore chaudes, une chaise poussée' },
  beats: [
    {
      kind: 'narration',
      text: "Lundi matin, dans une agence de traduction du Plateau, à Montréal. La réunion avec le client a été avancée de dix heures à neuf heures. Tu arrives à 9 h 40. Le client vient de partir, et Chloé range la salle.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Chloé',
      fr: "Je le savais depuis vendredi. Je pensais que Marc te l'avait dit.",
      en: 'I had known since Friday. I thought Marc had told you.',
      respell: '[zhuh luh sah-veh duh-pwee vahⁿ-druh-DEE | zhuh pahⁿ-seh kuh mark tuh lah-veh DEE]',
      stage: "Elle ne cherche pas d'excuse. Elle attend ta réaction.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: fr(E(1200)), en: en(E(1200)), respell: rsOf(E(1200)),
      stage: 'Tu penses à vendredi. Ta phrase, elle, parle de la prochaine fois.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Chloé',
      fr: "D'accord. La prochaine fois, je t'écrirai.",
      en: 'All right. Next time, I will write to you.',
      respell: '[dah-KOR | lah proh-shenn FWAH | zhuh tay-kree-RAY]',
      stage: "Elle a entendu un conseil pour l'avenir. Vendredi est déjà rangé.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Ta phrase était correcte, mais elle regardait devant. Ce qui te fâche est derrière toi : un message qui aurait pu partir vendredi, et qui n'est jamais parti.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase parle de vendredi ?',
      size: 'lg',
      options: [
        { fr: fr(E(1200)), respell: rsOf(E(1200)), en: en(E(1200)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1201)), respell: rsOf(E(1201)), en: en(E(1201)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Chloé baisse les yeux : « Tu as raison, j'aurais dû t'écrire. » Le reproche est arrivé, et il reste poli.",
        breaks: "Chloé répond : « Promis, la prochaine fois. » Elle a reçu un conseil, pas un reproche, et vendredi n'existe plus.",
      },
    },
    {
      kind: 'break',
      heading: 'Le même pas en arrière, posé sur le passé',
      body: "« Tu devrais » regarde devant : c'est un conseil pour la suite. « Tu aurais pu » regarde derrière : vendredi, une chose était possible, et elle n'a pas été faite. EN: devrais looks ahead; aurais pu looks back at something possible that was not done.",
      wrong: { fr: fr(E(1200)), ipa: ipaOf(E(1200)), respell: rsOf(E(1200)), en: en(E(1200)) },
      right: { fr: fr(E(1201)), ipa: ipaOf(E(1201)), respell: rsOf(E(1201)), en: en(E(1201)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Dans cette leçon, tu apprends à regarder derrière toi : regretter, reprocher sans blesser, imaginer ce qui aurait pu se passer, adoucir une demande et rapporter une nouvelle sans la garantir. À la fin, tu écris une lettre de 180 à 250 mots.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['recul', 'reproche'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Former le conditionnel passé et le distinguer du présent', s: 'Actes 2 et 3 : la forme, puis devant ou derrière' },
    { t: 'Regretter et reprocher avec mesure', s: 'Actes 4 à 6 : le regret, le reproche, dû, pu et voulu' },
    { t: 'Éviter les deux pièges du s et du si', s: 'Actes 7 et 8 : aurai ou aurais, et le résultat irréel' },
    { t: 'Adoucir, rapporter, écrire', s: 'Actes 9 à 11 : la politesse, la presse, ta lettre de 180 à 250 mots' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le courriel de Chloé',
  frSub: 'Lis, et repère les formes en aurait et serait',
  text: TEXT_LUNDI,
  glossary: [
    { word: 'a avancé la réunion', en: 'brought the meeting forward', note: "Avancer une réunion : la mettre plus tôt. Le contraire : la repousser." },
    { word: 'de vive voix', en: 'in person, face to face', note: "En parlant, pas par écrit." },
  ],
  questions: [
    { q: 'Global : à quoi sert ce courriel ?', a: "À s'excuser, à expliquer ce qui s'est passé et à proposer une solution pour le lendemain." },
    { q: 'Détail : quelle phrase dit un regret de Chloé sur ce qu’elle a fait ?', a: "« J'aurais dû t'écrire vendredi. » Elle ne l'a pas fait, et elle le regrette." },
    { q: 'Inférence : Chloé est-elle sûre que le client est parti furieux ?', a: "Non. « Selon Marc, le client serait parti furieux » : elle rapporte les mots de Marc, et elle précise qu'elle n'était pas là." },
    { q: "Position : que pense Chloé de la façon de partager l'agenda ?", a: "« Il aurait fallu revoir notre façon de partager l'agenda depuis longtemps » : pour elle, le problème est ancien, et pas seulement le sien." },
  ],
  audio: REC('rec-b2-02-lundi'),
  say: REFRAME,
  terms: ['recul', 'regret'],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Cinq métiers pour une seule forme',
  groups: [
    grp("Regarder ce qui n'a pas été fait", [
      it(E(1202), 'un regret sur soi'),
      it(E(1209), 'un reproche direct'),
      it(E(1203), 'une envie restée sans suite'),
      it(E(1208), 'un reproche qui ne vise personne'),
    ], chk("Dans ces quatre phrases, l'action a-t-elle eu lieu ?",
        ["Non, elle a manqué.", 'Oui, elle est faite.'], 0,
        "Chaque phrase regarde une action qui aurait dû ou pu avoir lieu. EN: each looks back at something that did not happen.")),
    grp('Imaginer, rapporter, adoucir', [
      it(E(1204), 'un résultat imaginé'),
      it(E(1206), "une information que Chloé ne garantit pas"),
      it(E(1207), 'une demande adoucie'),
      it(E(1210), 'un autre résultat imaginé'),
    ], chk('Laquelle rapporte une information sans la garantir ?',
        ['la phrase avec selon', 'la phrase avec sans', 'la phrase avec avant'], 0,
        "Selon nomme la source ; le conditionnel passé garde la distance. EN: selon names the source and the form keeps its distance.")),
    ctl('La même forme', "Qu'est-ce qui revient dans toutes ces phrases ?",
        ['avoir ou être au conditionnel, puis un participe', 'le passé composé', 'le futur'], 0,
        "aurais dû, serait parti, aurait fallu : un auxiliaire au conditionnel et un participe. EN: an auxiliary in the conditional plus a participle."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recul', 'forme'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où le passé compte',
  cases: [
    { situation: "Tu t'excuses auprès d'un collègue", fr: fr(E(1202)), en: en(E(1202)) },
    { situation: 'Tu fais un reproche sans humilier', fr: fr(E(1201)), en: en(E(1201)) },
    { situation: 'Tu racontes un ennui évité de justesse', fr: fr(E(1212)), en: en(E(1212)) },
    { situation: 'Tu résumes une dépêche que tu ne peux pas vérifier', fr: fr('fr.b1.journalisme.1093'), en: en('fr.b1.journalisme.1093') },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret', 'ondit'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le recul', 'Tu devrais et tu aurais pu : quelle différence ?',
      ['le premier regarde devant, le second derrière', 'le second est plus poli', 'aucune'], 0,
      "Devrais pousse vers la suite ; aurais pu regarde vendredi. EN: one looks ahead, the other back."),
  ctl('Les métiers', 'Combien de métiers cette leçon donne-t-elle au conditionnel passé ?',
      ['cinq', 'un seul', 'deux'], 0,
      "Regret, reproche, résultat imaginé, politesse, information rapportée. EN: five jobs, one form."),
  ctl('Le B1', `Qu'apporte ce temps par rapport à ${COND_REF} ?`,
      ['un recul dans le temps', 'des terminaisons nouvelles'], 0,
      "Les terminaisons sont les mêmes : aurais, serait. Le participe ajoute le passé. EN: same endings; the participle adds the past."),
], ['recul', 'forme']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Ce qui aurait pu se passer',
    opener: {
      line: "Tu veux parler de vendredi et ta phrase parle de demain : ici tu apprends à regarder derrière toi. EN: You want to talk about Friday and your sentence talks about tomorrow: here you learn to look back.",
      imageRef: 'lessons/conditionnel-passe/act01.jpg',
    },
    sections: [],
    milestone: "Tu reconnais les cinq métiers du conditionnel passé dans un vrai courriel. EN: You can spot the five jobs of the past conditional in a real email.",
    estScreens: 32, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: LA FORME
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_RECETTE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-recette',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-forme',
  title: 'Deux morceaux que tu as déjà',
  frSub: 'Auxiliaire au conditionnel, puis participe',
  hint: 'Quatre cartes. Rien de neuf, seulement un assemblage.',
  audio: REC('rec-b2-02-forme'),
  say: REFRAME,
  terms: ['forme', 'recul'],
  cards: [
    { head: "L'auxiliaire", label: Cap(COND_REF),
      fr: "j'aurais · je serais",
      sub: '[zhoh-REH] · [zhuh suh-REH]',
      body: `« ${B108_REFRAME} » Ici, c'est avoir ou être qui prend cette forme. EN: ${B108_REFRAME_EN}` },
    { head: 'Le participe', label: 'comme au passé composé',
      fr: 'dû · pu · voulu · aimé',
      sub: '[DÜ] · [PÜ] · [voo-LÜ] · [eh-MAY]',
      body: "Le même participe qu'au passé composé. Tu n'apprends aucune forme nouvelle. EN: the same participle as in the passé composé." },
    { head: 'Les deux ensemble', label: 'le conditionnel passé',
      fr: fr(E(1213)),
      sub: rsOf(E(1213)),
      body: "Auxiliaire au conditionnel présent, puis participe : deux mots, un seul temps. EN: auxiliary in the present conditional, then the participle." },
    { head: 'Le passé composé en miroir', label: 'avoir ou être',
      fr: "j'ai pris · j'aurais pris",
      sub: '[zhay PREE] · [zhoh-reh PREE]',
      body: "Tu gardes l'auxiliaire du passé composé. Seul l'auxiliaire change de temps. EN: keep the passé composé auxiliary; only its tense changes." },
  ],
};

const A2_ETRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-etre',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-forme',
  title: 'Avec être, tout suit le passé composé',
  frSub: "L'accord et la négation",
  hint: "Quatre cartes. Regarde la fin du participe.",
  audio: REC('rec-b2-02-forme'),
  say: REFRAME,
  terms: ['forme'],
  cards: [
    { head: 'Les verbes en être', label: 'être',
      fr: fr(E(1219)), sub: rsOf(E(1219)),
      body: "Aller, venir, partir, arriver, rester, tomber : être, comme au passé composé. EN: these verbs take être, as in the passé composé." },
    { head: "L'accord", label: 'elle, nous, elles',
      fr: fr(E(1220)), sub: rsOf(E(1220)),
      body: "Avec être, le participe s'accorde avec le sujet : venue, restés, arrivées. À l'oral, rien ne s'entend. EN: with être the participle agrees; you cannot hear it." },
    { head: 'Les verbes en se', label: 'pronominaux',
      fr: fr(E(1223)), sub: rsOf(E(1223)),
      body: "Un verbe en se prend être : je me serais trompé, ils se seraient trompés. EN: reflexive verbs take être." },
    { head: 'La négation', label: 'ne... pas',
      fr: fr(E(1228)), sub: rsOf(E(1228)),
      body: "Ne et pas entourent l'auxiliaire, jamais le participe : je n'aurais pas dû. EN: ne and pas wrap the auxiliary." },
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis les deux familles',
  groups: [
    grp('Avec avoir', [
      it(E(1213), 'devoir, dû'),
      it(E(1214), 'pouvoir, pu'),
      it(E(1216), 'aimer, avec la liaison'),
      it(E(1218), 'faire, fait'),
    ], chk("Qu'est-ce qui change entre j'ai dû et j'aurais dû ?",
        ["seulement l'auxiliaire", 'le participe', 'les deux'], 0,
        "Le participe ne bouge pas ; l'auxiliaire passe au conditionnel. EN: only the auxiliary changes.")),
    grp('Avec être', [
      it(E(1219), 'partir'),
      it(E(1220), 'venir, avec un e'),
      it(E(1221), 'rester, au pluriel'),
      it(E(1222), 'arriver, au féminin pluriel'),
    ], chk('Pourquoi venue prend-elle un e ?',
        ['le sujet est féminin, avec être', "c'est une règle du conditionnel", 'venir est irrégulier'], 0,
        "Avec être, le participe prend le genre et le nombre du sujet. EN: with être it agrees with the subject.")),
    ctl('Se tromper', 'Au conditionnel passé, « je me tromperais » devient...',
        ['je me serais trompé', "je m'aurais trompé"], 0,
        "Un verbe en se prend toujours être. EN: se verbs always take être."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['forme'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui, et combien',
  lines: [ln(E(1225)), ln(E(1226)), ln(E(1227)), ln(E(1228)), ln(E(1229)), ln(E(1230)), ln(E(1231)), ln(E(1204))],
  questions: [
    { q: 'Première phrase : qui serait venu ?', opts: ['elle', 'nous'], correct: 0,
      why: "« Elle serait venue » : une femme, un participe accordé que tu n'entends pas. EN: she; the agreement is silent." },
    { q: 'Deuxième phrase : combien de personnes seraient restées ?', opts: ['plusieurs', 'une'], correct: 0,
      why: "« Nous serions restés » : le i de serions s'entend. EN: the i of serions is audible." },
    { q: 'Troisième phrase : quelle erreur ont-ils faite ?', opts: ['une erreur de salle', 'une erreur de date', 'une erreur de train'], correct: 0,
      why: "« Ils se seraient trompés de salle. » EN: the wrong room." },
    { q: 'Quatrième phrase : sans toi, la personne serait-elle venue ?', opts: ['Non', 'Oui'], correct: 0,
      why: "« Je ne serais pas venu sans toi » : c'est toi qui as fait la différence. EN: you made the difference." },
    { q: 'Sixième phrase : quand seraient-elles arrivées ?', opts: ['avant midi', 'après midi'], correct: 0,
      why: "« avant midi ». EN: before noon." },
  ],
  audio: REC('rec-b2-02-forme-ecoute'),
  say: REFRAME,
  terms: ['forme'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: "Et accorde ce que l'oreille ne donne pas",
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: REFRAME,
  terms: ['forme'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de fabrication',
  errors: [
    { wrong: "J'aurais allé au cinéma avec toi.", right: 'Je serais allé au cinéma avec toi.',
      why: "Normal : en anglais, tout passe par have. Mais aller prend être au passé composé, donc ici aussi. EN: aller takes être, here as in the passé composé." },
    { wrong: 'Elle serait venu plus tôt.', right: 'Elle serait venue plus tôt.',
      why: "À l'oral, rien ne s'entend : venu et venue sonnent pareil. À l'écrit, être exige l'accord. EN: silent, but required in writing." },
    { wrong: "Je n'aurais dû pas partir.", right: "Je n'aurais pas dû partir.",
      why: "Tu mets pas après le verbe, comme au présent. Ici, le verbe conjugué est l'auxiliaire : pas le suit tout de suite. EN: pas follows the auxiliary." },
    { wrong: 'Nous aurions restés à la maison.', right: 'Nous serions restés à la maison.',
      why: "Tu as pensé à l'accord, c'est bien. Mais rester prend être, et l'accord va avec être. EN: rester takes être." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['forme'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La recette', 'Le conditionnel passé se forme avec...',
      ['avoir ou être au conditionnel présent, puis le participe', "avoir ou être à l'imparfait, puis le participe", 'le radical du futur, puis le participe'], 0,
      `L'imparfait donnerait le plus-que-parfait, le sujet de ${PQP_REF}. EN: the imparfait would give the pluperfect.`),
  ctl("L'auxiliaire", 'Comment choisis-tu entre avoir et être ?',
      ['comme au passé composé', 'selon le sens de la phrase'], 0,
      "Le verbe qui prend être au passé composé le prend ici. EN: same choice as in the passé composé."),
  ctl("L'accord", 'Avec quel auxiliaire le participe s’accorde-t-il avec le sujet ?',
      ['être', 'avoir'], 0,
      "Elle serait venue, nous serions restés. EN: with être."),
], ['forme']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La forme',
    opener: {
      line: "Deux mots que tu connais déjà, collés dans le bon ordre : ici tu fabriques le temps. EN: Two words you already know, put together in the right order: here you build the tense.",
      imageRef: 'lessons/conditionnel-passe/act02.jpg',
    },
    sections: [],
    milestone: "Tu construis le conditionnel passé avec avoir et avec être, et tu accordes ce que l'oreille ne donne pas. EN: You can build the past conditional with avoir and être, and agree what the ear cannot hear.",
    estScreens: 34, restPoints: ['a2-construire'],
  },
  sections: [A2_RECETTE, A2_ETRE, A2_CONSTRUIRE, A2_ECOUTE, A2_DICTEE, A2_ERREURS, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: DEVANT OU DERRIÈRE
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le message vocal d’Awa',
  frSub: 'Devant ou derrière, à l’oreille',
  lines: [ln(E(1237)), ln(E(1241)), ln(E(1240)), ln(E(1236)), ln(E(1238)), ln(E(1239)), ln(E(1244)), ln(E(1242))],
  questions: [
    { q: 'Première phrase : peut-on encore appeler la sœur à temps ?', opts: ["Non, le moment est passé", 'Oui, ce soir'], correct: 0,
      why: "« Tu aurais dû » : le moment est derrière. EN: the moment is behind." },
    { q: 'Deuxième et troisième phrases : de quelle soirée parlent-elles ?', opts: ['d’une soirée passée', 'de ce soir'], correct: 0,
      why: "« aurait été », « aurait dansé » : le moment est derrière. EN: an evening that is over." },
    { q: 'Quatrième phrase : conseil ou reproche ?', opts: ['un conseil', 'un reproche'], correct: 0,
      why: "« Tu devrais » regarde devant. EN: devrais looks ahead." },
    { q: 'Cinquième et sixième phrases : laquelle parle d’un départ déjà manqué ?', opts: ['la sixième', 'la cinquième'], correct: 0,
      why: "« Ça aurait été bien » : l'occasion est passée. EN: the chance has gone." },
    { q: 'Dernière phrase : à quel moment partirait-on ?', opts: ['maintenant', 'hier'], correct: 0,
      why: "« maintenant » : le moment est encore ouvert. EN: still open." },
  ],
  audio: REC('rec-b2-02-awa-ecoute'),
  say: REFRAME,
  terms: ['repere', 'recul'],
};

const A3_PAIRES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-paires',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-choisir',
  title: 'Quatre paires, deux directions',
  frSub: 'Conditionnel présent ou passé',
  hint: 'Quatre cartes. Demande-toi si le moment est fini.',
  audio: REC('rec-b2-02-paires'),
  say: REFRAME,
  terms: ['repere', 'recul'],
  cards: [
    { head: 'Un conseil, un reproche', label: 'devant · derrière',
      fr: 'tu devrais · tu aurais dû', sub: '[tü duh-VREH] · [tü oh-reh DÜ]',
      body: "« Tu devrais » pousse vers ce qui reste à faire. « Tu aurais dû » montre ce qui n'a pas été fait. EN: advice looks ahead, reproach looks back." },
    { head: 'Une envie, un regret', label: 'devant · derrière',
      fr: "j'aimerais · j'aurais aimé", sub: '[zheh-muh-REH] · [zhoh-reh-zeh-MAY]',
      body: "J'aimerais : c'est encore possible. J'aurais aimé : l'occasion est passée. EN: a wish still open, then a wish that is closed." },
    { head: 'Un résultat, deux moments', label: 'ce ou ça',
      fr: 'ce serait · ça aurait été', sub: '[suh suh-REH] · [sah oh-reh-tay-TAY]',
      body: "« Ce serait » parle d'aujourd'hui ou de demain. « Ça aurait été » parle d'hier. Devant aurait, on dit ça. EN: ce before serait, ça before aurait." },
    { head: 'Le B1 en arrière-plan', label: Cap(COND_REF),
      fr: fr('fr.b1.projets-et-futur.713'), sub: '[tü duh-vreh prahⁿdr rahⁿ-day-voo set suh-MENN]',
      body: "Tout ce que tu as appris au présent a son double au passé : tu aurais dû prendre rendez-vous. EN: every present form has its past twin." },
  ],
};

const A3_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-table',
  layer: 'core',
  sheetId: 'sheet-choisir',
  title: 'Six repères de temps',
  frSub: 'Touche une ligne pour la phrase entière',
  cols: ['Repère', 'Regarde', 'Forme'],
  rows: [
    { cells: ['ce soir, maintenant', 'devant', 'conditionnel présent'], say: fr(E(1232)),
      detail: { title: 'ce soir, maintenant', body: "Le moment n'est pas passé : le choix reste ouvert. EN: the moment is still ahead.", say: fr(E(1242)) } },
    { cells: ['hier, samedi dernier', 'derrière', 'conditionnel passé'], say: fr(E(1233)),
      detail: { title: 'hier, samedi dernier', body: "Le moment est fini : tu ne peux plus que le regarder. EN: the moment is over.", say: "Samedi dernier, j'aurais aimé venir." } },
    { cells: ['la prochaine fois', 'devant', 'conditionnel présent'], say: fr(E(1244)),
      detail: { title: 'la prochaine fois', body: "Un conseil pour ce qui n'est pas encore arrivé. EN: advice for what has not happened yet.", say: 'La prochaine fois, on pourrait partir plus tôt.' } },
    { cells: ['à ce moment-là', 'derrière', 'conditionnel passé'], say: fr(E(1243)),
      detail: { title: 'à ce moment-là', body: "Tu montres un instant précis du passé, et ce qu'il aurait fallu y faire. EN: a precise moment in the past.", say: 'À ce moment-là, il aurait fallu freiner.' } },
    { cells: ['depuis longtemps', 'derrière', 'conditionnel passé'], say: 'Il aurait fallu le faire depuis longtemps.',
      detail: { title: 'depuis longtemps', body: "Le retard s'est accumulé : le reproche porte sur toute la période. EN: the reproach covers the whole period.", say: "On aurait dû changer d'agenda depuis longtemps." } },
    { cells: ['un jour', 'devant', 'conditionnel présent'], say: "Un jour, j'aimerais vivre à Dakar.",
      detail: { title: 'un jour', body: "Un rêve lointain, mais toujours possible. EN: far off, but still possible.", say: "Un jour, j'aimerais apprendre le wolof." } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repere'],
};

const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Ouvert ou fermé',
  groups: [
    grp('Encore possible', [
      it(E(1232), 'ce soir'),
      it(E(1234), 'le film est encore à l’affiche'),
      it(E(1236), 'la sœur attend'),
      it(E(1238), 'le départ est demain'),
    ], chk('Ces quatre phrases parlent-elles d’une occasion passée ?',
        ['Non, le choix reste ouvert.', 'Oui, tout est fini.'], 0,
        "Le conditionnel présent regarde ce qui peut encore arriver. EN: the present conditional looks at what can still happen.")),
    grp('Déjà passé', [
      it(E(1233), 'hier soir'),
      it(E(1235), 'le film a quitté les salles'),
      it(E(1237), "la sœur n'a pas eu d'appel"),
      it(E(1239), 'le départ a eu lieu, trop tard'),
    ], chk('Que peut-on encore changer ?',
        ['rien : le moment est passé', 'tout', 'seulement la date'], 0,
        "Le conditionnel passé regarde un moment fini. EN: the past conditional looks at a finished moment.")),
    ctl('ça ou ce', 'Devant aurait été, que dit-on le plus souvent ?',
        ['ça aurait été', 'ce aurait été'], 0,
        "Ce ne s'appuie pas sur aurait : on dit ça, ou ç'aurait été à l'écrit soigné. EN: ça, or ç' in careful writing."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repere', 'recul'],
};

/** TRAP. The failing instinct: the learner keeps the present conditional,
 *  which he already owns, for a moment that is over. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Le repère décide',
  rule: {
    title: 'Un moment fini, un moment ouvert',
    body: "Hier, samedi dernier, à ce moment-là : le moment est fini, prends le conditionnel passé. Ce soir, la prochaine fois : il reste ouvert, garde le présent. EN: a finished moment takes the past; an open one keeps the present.",
  },
  cards: [
    trap(E(1233), 'hier soir', 'Hier soir, je resterais bien à la maison.', "Hier soir est fini : on le regarde derrière soi. EN: last night is over."),
    trap(E(1244), 'la prochaine fois', 'La prochaine fois, tu aurais dû me prévenir.', "La prochaine fois n'est pas encore arrivée : rien n'a pu manquer. EN: next time has not come yet."),
    trap(E(1243), 'à ce moment-là', 'À ce moment-là, je devrais appeler.', "Tu montres un instant passé : le conseil arrive trop tard, il devient regret. EN: too late for advice."),
    trap(E(1242), 'maintenant', 'À ta place, je serais parti maintenant.', "Maintenant est ouvert : il est encore temps de partir. EN: there is still time."),
    trap(E(1241), 'le concert était hier', 'Le concert serait magnifique.', "Il a eu lieu hier : ce qu'il aurait été, tu l'as manqué. EN: it happened; you missed it."),
    trap(E(1237), 'elle attendait hier', 'Hier, tu devrais appeler ta sœur.', "Hier ferme le moment : devrais ne peut plus rien pousser. EN: yesterday closes it."),
  ],
  drill: [
    { promptSay: 'Hier, tu ... appeler ta sœur.', opts: ['aurais dû', 'devrais'], correct: 0 },
    { promptSay: 'La prochaine fois, tu ... me prévenir.', opts: ['devrais', 'aurais dû'], correct: 0 },
    { promptSay: 'Ce soir, je ... bien au cinéma.', opts: ['irais', 'serais allé'], correct: 0 },
    { promptSay: "Samedi dernier, j'... venir avec vous.", opts: ['aurais aimé', 'aimerais'], correct: 0 },
    { promptSay: "Un jour, j'... vivre à Dakar.", opts: ['aimerais', 'aurais aimé'], correct: 0 },
    { promptSay: 'Hier, à ce moment-là, il ... partir.', opts: ['aurait fallu', 'faudrait'], correct: 0 },
    { promptSay: 'Maintenant, ce ... trop tard.', opts: ['serait', 'aurait été'], correct: 0 },
    { promptSay: "Le concert d'hier ... magnifique.", opts: ['aurait été', 'serait'], correct: 0 },
  ],
  steps: STEPS('Un moment fini, un moment ouvert', 'Ce que le mauvais temps raconte'),
  audio: REC('rec-b2-02-piege-repere'),
  say: REFRAME,
  terms: ['repere'],
};

const A3_TEXTE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-texte',
  layer: 'core',
  questionsInModal: true,
  title: 'Dans un texte : le message d’Awa',
  frSub: 'Trie ce qui regarde derrière et ce qui regarde devant',
  text: TEXT_CONCERT,
  glossary: [
    { word: 'mbalax', en: 'mbalax, Senegalese dance music', note: 'La musique populaire du Sénégal, avec ses tambours sabar.' },
    { word: 'rattraper', en: 'to make up for', note: "Rattraper une soirée : retrouver ce qu'on a manqué." },
  ],
  questions: [
    { q: 'Quelles phrases regardent derrière, vers hier soir ?', a: "« Tu aurais dû venir hier soir », « Le concert aurait été parfait pour toi » et « je t'aurais gardé une place »." },
    { q: 'Quelles phrases regardent devant ?', a: "« Tu devrais venir », « ce serait l'occasion » et « tu pourrais me dire plus tôt »." },
    { q: 'Réécris la dernière phrase pour parler de ce soir.', a: "« Ce soir, je te garderais une place » : au présent, la place est encore possible." },
  ],
  audio: REC('rec-b2-02-concert'),
  say: REFRAME,
  terms: ['repere', 'reproche'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le repère', 'Hier soir, samedi dernier, à ce moment-là : quelle forme ?',
      ['le conditionnel passé', 'le conditionnel présent'], 0,
      "Le moment est fini. EN: the moment is over."),
  ctl('ça ou ce', 'Devant aurait été, on dit le plus souvent...',
      ['ça', 'ce'], 0,
      "Ça aurait été bien. EN: ça aurait été."),
  ctl('Le regret', "« J'aimerais voir ce film » : le film est-il encore à l'affiche ?",
      ['Oui, sans doute', 'Non, il est fini'], 0,
      "Le présent garde l'occasion ouverte. EN: the present keeps the chance open."),
], ['repere']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Devant ou derrière',
    opener: {
      line: "Une même envie peut regarder demain ou hier : ici tu choisis la direction. EN: The same wish can look at tomorrow or at yesterday: here you choose the direction.",
      imageRef: 'lessons/conditionnel-passe/act03.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre conditionnel présent et passé d'après le repère de temps, même dans un message qui mélange les deux. EN: You choose between the present and past conditional from the time marker, even in a message that mixes both.",
    estScreens: 38, restPoints: ['a3-table'],
  },
  sections: [A3_ECOUTE, A3_PAIRES, A3_TABLE, A3_CHOISIR, A3_PIEGE, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: LE REGRET
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Le vieil album',
  frSub: 'Samuel fait le point',
  setting: 'Lyon, un dimanche. Samuel, professeur de français, feuillette un album de photos avec toi.',
  bubbles: [
    { from: 'narrator', fr: 'Une photo : Samuel à vingt ans, derrière un piano.', en: 'A photo: Samuel at twenty, behind a piano.' },
    { from: 'coach', fr: fr(E(1250)), en: en(E(1250)) },
    { from: 'user', fr: 'Pourtant, tu aimes ton travail.', en: 'And yet you love your job.' },
    { from: 'coach', fr: 'Oui. Et pourtant, je me pose la question.', en: 'Yes. And yet I do wonder.' },
    { from: 'coach', fr: fr(E(1255)), en: en(E(1255)), warn: 'une envie qui ne peut plus se réaliser' },
    { from: 'coach', fr: "Mais le piano, je n'aurais jamais dû l'abandonner.", en: 'But the piano, I should never have given it up.', warn: 'un acte fait, désapprouvé' },
    { from: 'narrator', fr: 'Le regret ne change pas le passé. Il le regarde, et il le juge.', en: 'Regret does not change the past. It looks at it, and judges it.' },
  ],
  closing: { fr: 'Le regret regarde une porte fermée, sans chercher à la rouvrir.', en: 'Regret looks at a closed door, without trying to reopen it.' },
  audio: REC('rec-b2-02-album'),
  say: REFRAME,
  terms: ['regret'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-regret',
  title: 'Quatre façons de regretter',
  frSub: 'Du plus doux au plus lourd',
  hint: 'Quatre cartes. Écoute le poids de chaque verbe.',
  audio: REC('rec-b2-02-regret'),
  say: REFRAME,
  terms: ['regret'],
  cards: [
    { head: 'Le regret doux', label: 'aimer', fr: fr(E(1245)), sub: rsOf(E(1245)),
      body: "Une envie qui n'a pas pu se réaliser. C'est le regret le plus courant, et le plus léger. EN: the gentlest regret." },
    { head: 'La volonté déçue', label: 'vouloir', fr: fr(E(1246)), sub: rsOf(E(1246)),
      body: "Plus fort : tu le voulais vraiment, et ta volonté n'a pas suffi. EN: stronger: it was your will." },
    { head: "L'autre chemin", label: 'préférer', fr: fr(E(1247)), sub: rsOf(E(1247)),
      body: "Deux possibilités existaient, et c'est l'autre qui a eu lieu. EN: two options, and the other one happened." },
    { head: "L'acte regretté", label: 'devoir', fr: fr(E(1248)), sub: rsOf(E(1248)),
      body: "Tu as fait quelque chose, et tu le désapprouves aujourd'hui. Jamais le rend plus lourd. EN: regret for something you did." },
  ],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  title: 'Cinq regrets dans la vraie vie',
  frSub: 'Et une autre façon de les dire',
  examples: [
    ex(E(1249), "le grand-père est mort avant ta naissance : l'envie ne peut plus se réaliser"),
    ex(E(1253), 'nous : un regret poli, au moment de dire au revoir'),
    ex(E(1254), 'elle : le regret se raconte aussi à la troisième personne'),
    ex(E(1255), 'avec le recul : le mot qui annonce un bilan'),
    ex(E(1256), "regretter de, puis l'infinitif passé : une autre façon, sans conditionnel"),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret'],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ce qui n’a pas eu lieu, ce qui a eu lieu',
  groups: [
    grp("Ce que je n'ai pas fait", [
      it(E(1249), 'une rencontre impossible'),
      it(E(1250), 'des études jamais commencées'),
      it(E(1251), 'un départ qui a eu lieu'),
      it(E(1257), "une absence, avec tellement"),
    ], chk("Dans ces phrases, l'envie s'est-elle réalisée ?",
        ['Non', 'Oui'], 0,
        "Aimé, voulu, préféré : l'envie est restée une envie. EN: the wish stayed a wish.")),
    grp("Ce que j'ai fait", [
      it(E(1252), 'un poste accepté'),
      it(E(1259), 'une phrase dite'),
      it(E(1248), "l'ouverture du regret sur un acte"),
    ], chk("Ici, l'action a-t-elle eu lieu ?",
        ['Oui, et on la regrette', 'Non, jamais'], 0,
        "Je n'aurais pas dû : l'acte est fait, le jugement arrive après. EN: the act happened; the judgement comes later.")),
    ctl('Aimer ou préférer', 'Tu es resté à Lyon, et tu rêvais de Montréal. Quel regret ?',
        ["J'aurais préféré partir à Montréal.", "J'aurais préféré rester à Lyon."], 0,
        "Préférer nomme l'autre chemin, celui que tu n'as pas pris. EN: préférer names the road not taken."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Huit regrets',
  lines: [ln(E(1249)), ln(E(1250)), ln(E(1251)), ln(E(1252)), ln(E(1253)), ln(E(1254)), ln(E(1255)), ln(E(1258))],
  questions: [
    { q: 'Première phrase : qui la personne aurait-elle aimé connaître ?', opts: ['son grand-père', 'sa grand-mère', 'son père'], correct: 0,
      why: "« mon grand-père ». EN: their grandfather." },
    { q: 'Troisième phrase : où la personne aurait-elle préféré rester ?', opts: ['à Lyon', 'à Montréal'], correct: 0,
      why: "« rester à Lyon » : elle est donc partie. EN: so the speaker left." },
    { q: 'Quatrième phrase : la personne a-t-elle accepté le poste ?', opts: ['Oui, et elle le regrette', 'Non'], correct: 0,
      why: "« Je n'aurais jamais dû accepter » : l'acte est fait. EN: the speaker did accept." },
    { q: "Sixième phrase : de quel instrument s'agit-il ?", opts: ['le piano', 'la guitare', 'le violon'], correct: 0,
      why: "« apprendre le piano ». EN: the piano." },
    { q: 'Dernière phrase : quelle fête auraient-ils préférée ?', opts: ['une fête plus simple', 'une fête plus grande'], correct: 0,
      why: "« une fête plus simple ». EN: a simpler one." },
  ],
  audio: REC('rec-b2-02-regret-ecoute'),
  say: REFRAME,
  terms: ['regret'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre regrets mal tournés',
  errors: [
    { wrong: "J'aurais aimé de connaître mon grand-père.", right: fr(E(1249)),
      why: "L'anglais dit liked to, et le réflexe cherche un de. Après aimer, l'infinitif arrive nu, comme au présent. EN: no de after aimer." },
    { wrong: 'Je regrette de ne pas partir plus tôt.', right: fr(E(1256)),
      why: "Le regret porte sur hier, donc l'infinitif passe au passé : ne pas être parti. EN: a past action takes the past infinitive." },
    { wrong: "J'aimerais connaître mon grand-père, il est mort en 1990.", right: "J'aurais aimé connaître mon grand-père, il est mort en 1990.",
      why: "Le présent dit une envie encore possible. Ici l'occasion est fermée : il faut regarder derrière. EN: the chance is closed." },
    { wrong: "Je n'aurais pas dû de dire ça.", right: fr(E(1259)),
      why: "Après devoir, pas de de : l'infinitif suit directement, comme dans je dois partir. EN: no de after devoir." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret'],
};

const A4_TEXTE: Sec<'reading'> = {
  type: 'reading',
  id: 'a4-texte',
  layer: 'core',
  questionsInModal: true,
  title: 'Dans un texte : le blogue de Samuel',
  frSub: 'Des regrets, et un point de départ',
  text: TEXT_BLOGUE,
  glossary: [
    { word: 'conservatoire', en: 'music academy', note: "L'école où l'on étudie la musique à haut niveau." },
    { word: 'leur en veux', en: 'hold it against them', note: "En vouloir à quelqu'un : lui reprocher quelque chose." },
  ],
  questions: [
    { q: "Quels regrets portent sur une envie qui ne s'est pas réalisée ?", a: "« J'aurais voulu faire des études de musique » et « J'aurais aimé jouer avec ma fille »." },
    { q: 'Quel regret porte sur un acte fait ?', a: "« Je n'aurais jamais dû abandonner le piano » : il a abandonné, et il le désapprouve." },
    { q: "Réécris « J'aurais aimé jouer avec ma fille » pour parler de l'avenir.", a: "« J'aimerais jouer avec ma fille » : l'envie redevient possible, et c'est le sens de la fin du texte." },
  ],
  audio: REC('rec-b2-02-blogue'),
  say: REFRAME,
  terms: ['regret'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Aimé ou voulu', 'Lequel dit le regret le plus fort ?',
      ["j'aurais voulu", "j'aurais aimé"], 0,
      "Vouloir met ta volonté en jeu. EN: vouloir involves your will."),
  ctl("L'acte fait", 'Tu as accepté un poste et tu le regrettes. Tu dis...',
      ["Je n'aurais pas dû accepter ce poste.", "J'aurais aimé accepter ce poste."], 0,
      "Devoir au négatif juge un acte déjà fait. EN: negative devoir judges a past act."),
  ctl('Regretter de', 'Après « je regrette de », pour une action passée, tu mets...',
      ["l'infinitif passé : être parti", "l'infinitif présent : partir"], 0,
      "Je regrette de ne pas être parti. EN: the past infinitive."),
], ['regret']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Le regret',
    opener: {
      line: "Certaines portes se sont fermées avant que tu passes : ici tu apprends à le dire, sans te plaindre. EN: Some doors closed before you went through: here you learn to say so, without complaining.",
      imageRef: 'lessons/conditionnel-passe/act04.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre aimé, voulu, préféré et je n'aurais pas dû selon ce que tu regrettes. EN: You choose between aimé, voulu, préféré and je n'aurais pas dû depending on what you regret.",
    estScreens: 38, restPoints: ['a4-exemples'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_EXEMPLES, A4_CONSTRUIRE, A4_ECOUTE, A4_ERREURS, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: LE REPROCHE
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: "La cage d'escalier verte",
  frSub: 'Deux voisins, deux reproches',
  setting: "Genève, un immeuble de six étages. Madame Favre a repeint la cage d'escalier en vert, sans demander l'avis de personne.",
  bubbles: [
    { from: 'narrator', fr: "Un premier voisin croise Madame Favre dans l'entrée.", en: 'A first neighbour runs into Madame Favre in the hall.' },
    { from: 'user', fr: 'Vous deviez nous demander.', en: 'You were supposed to ask us.', warn: "l'imparfait : un rappel sec" },
    { from: 'coach', fr: "Je croyais bien faire. Tant pis.", en: 'I thought I was doing the right thing. Too bad.' },
    { from: 'narrator', fr: 'Le soir, Monsieur Keller essaie autrement.', en: 'In the evening, Monsieur Keller tries another way.' },
    { from: 'user', fr: fr(E(1266)), en: en(E(1266)), warn: 'on : le reproche est partagé' },
    { from: 'coach', fr: "Vous avez raison. J'aurais dû mettre un mot dans l'entrée.", en: 'You are right. I should have put a note up in the hall.' },
  ],
  closing: { fr: "Un reproche qui laisse l'autre répondre sans perdre la face.", en: 'A reproach that lets the other person answer without losing face.' },
  audio: REC('rec-b2-02-escalier'),
  say: REFRAME,
  terms: ['reproche'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-regret',
  title: 'Du plus direct au plus diplomate',
  frSub: 'Quatre reproches',
  hint: 'Quatre cartes. Regarde qui est visé.',
  audio: REC('rec-b2-02-reproche'),
  say: REFRAME,
  terms: ['reproche'],
  cards: [
    { head: 'Le reproche direct', label: 'tu, vous', fr: fr(E(1260)), sub: rsOf(E(1260)),
      body: "Tu nommes la personne et ce qu'elle devait faire. Clair, mais ça pique. EN: names the person and what they owed." },
    { head: 'La possibilité ratée', label: 'pouvoir', fr: fr(E(1261)), sub: rsOf(E(1261)),
      body: "Plus doux : une possibilité existait, et elle n'a pas servi. Avec au moins, ça redevient sec. EN: softer, unless you add au moins." },
    { head: 'Personne n’est visé', label: 'falloir', fr: fr(E(1224)), sub: rsOf(E(1224)),
      body: "Le travail est nommé, pas la personne. C'est la forme des réunions d'équipe. EN: the task, not the person." },
    { head: 'Le nous qui partage', label: 'on, nous', fr: fr(E(1266)), sub: rsOf(E(1266)),
      body: "Tu te mets dans le reproche avec l'autre. C'est la forme la plus diplomatique. EN: sharing the blame." },
  ],
};

const A5_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-table',
  layer: 'core',
  sheetId: 'sheet-regret',
  title: 'Six reproches, six distances',
  frSub: 'Touche une ligne pour l’entendre',
  cols: ['Forme', 'Qui est visé', 'Effet'],
  rows: [
    { cells: ["tu n'aurais pas dû", 'toi', 'direct, voire dur'], say: fr(E(1273)),
      detail: { title: "tu n'aurais pas dû", body: "Tu juges un acte que l'autre a fait. Entre proches, ça passe ; au bureau, ça blesse. EN: judges what the other did.", say: "Tu n'aurais pas dû partir sans rien dire." } },
    { cells: ['tu aurais au moins pu', 'toi', 'sec, fâché'], say: fr(E(1268)),
      detail: { title: 'au moins', body: "Au moins réduit ce que tu attendais au minimum : la colère s'entend. EN: au moins lets the anger show.", say: "Vous auriez au moins pu répondre." } },
    { cells: ['vous auriez dû', 'vous', 'ferme et poli'], say: fr(E(1264)),
      detail: { title: 'vous auriez dû', body: "Le reproche des lettres officielles : net, mais sans insulte. EN: the formal reproach.", say: 'Vous auriez dû nous informer par écrit.' } },
    { cells: ['il aurait fallu', 'personne', 'neutre'], say: fr(E(1265)),
      detail: { title: 'il aurait fallu', body: "La faute est posée sur le travail. Personne n'a à se défendre. EN: the fault is on the task.", say: fr(E(1274)) } },
    { cells: ["j'aurais apprécié", 'moi', 'diplomatique'], say: fr(E(1267)),
      detail: { title: "j'aurais apprécié", body: "Tu parles de toi, de ce qui t'aurait fait plaisir. L'autre entend le reproche sans être accusé. EN: you speak about yourself.", say: fr(E(1350)) } },
    { cells: ['on aurait pu', 'nous deux', 'partagé'], say: fr(E(1266)),
      detail: { title: 'on aurait pu', body: "Tu prends ta part du problème. C'est souvent ce qui ouvre la discussion. EN: you take your share.", say: fr(E(1272)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reproche'],
};

const A5_DOSER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-doser',
  layer: 'core',
  size: 'lg',
  title: 'Qui vise le reproche',
  groups: [
    grp('La personne en face', [
      it(E(1263), 'tu, et le départ'),
      it(E(1264), 'vous, et la consultation'),
      it(E(1270), 'vous, en face'),
      it(E(1273), 'tu, et un acte fait'),
    ], chk('Ces quatre reproches nomment-ils la personne ?',
        ['Oui, par tu ou vous.', "Non, personne n'est nommé."], 0,
        "Tu et vous désignent la personne : le reproche est direct. EN: tu and vous point at the person.")),
    grp('Le travail, ou nous', [
      it(E(1265), 'le travail'),
      it(E(1266), 'on, nous deux'),
      it(E(1269), "l'impersonnel"),
      it(E(1272), 'nous'),
    ], chk("Quel est l'intérêt de ces formes en réunion ?",
        ['personne ne perd la face', 'elles sont plus courtes', 'elles sont plus fortes'], 0,
        "Le reproche porte sur la situation : on peut en parler sans se défendre. EN: nobody has to defend themselves.")),
    ctl('La diplomatie', 'Ton chef a changé ton planning sans te prévenir. Que dis-tu ?',
        [fr(E(1267)), 'Vous auriez au moins pu me le dire.'], 0,
        "Tu parles de toi : le reproche passe, et la relation tient. EN: you speak about yourself, and the relationship holds."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reproche'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Le reproche qui se trompe de temps',
  rule: {
    title: 'Un acte manqué se regarde derrière',
    body: "Au présent, devrais devient un conseil pour demain. L'imparfait devais sonne comme un rappel sec. Pour l'acte manqué, prends le conditionnel passé. EN: a missed act needs the past conditional.",
  },
  cards: [
    trap(E(1263), 'il est déjà parti', 'Tu pourrais me prévenir avant de partir.', "Le départ a eu lieu : pourrais parle de la prochaine fois. EN: the departure has happened."),
    trap(E(1264), 'la décision est prise', 'Vous deviez nous consulter.', "Deviez rappelle une règle d'un ton sec ; auriez dû garde la politesse. EN: deviez sounds curt."),
    trap(E(1272), 'la réunion est finie', 'Nous devrions en discuter ensemble.', "La décision est prise : devrions arrive trop tard. EN: too late for devrions."),
    trap(E(1273), "il a lu le courriel", 'Tu ne devrais pas lire ce courriel.', "Il l'a déjà lu : ne devrais pas ne peut plus l'arrêter. EN: it cannot stop him now."),
    trap(E(1270), "il l'a déjà dit à d'autres", 'Vous pourriez me le dire en face.', "C'est trop tard : tu parles de ce qui s'est passé. EN: you are talking about what happened."),
    trap(E(1265), 'le colis est revenu', "Il fallait vérifier l'adresse.", "Il fallait est possible, mais sec. Il aurait fallu reste neutre. EN: il fallait is curt."),
  ],
  drill: [
    { promptSay: 'Tu ... me prévenir hier.', opts: ['aurais pu', 'pourrais'], correct: 0 },
    { promptSay: 'Vous ... nous consulter avant de signer le mois dernier.', opts: ['auriez dû', 'devriez'], correct: 0 },
    { promptSay: "Le colis est revenu : il ... vérifier l'adresse.", opts: ['aurait fallu', 'faudrait'], correct: 0 },
    { promptSay: 'La réunion est finie : on ... en parler avant.', opts: ['aurait pu', 'pourrait'], correct: 0 },
    { promptSay: 'Tu as lu mon courriel : tu ... le lire.', opts: ["n'aurais pas dû", 'ne devrais pas'], correct: 0 },
    { promptSay: 'La prochaine fois, vous ... nous consulter.', opts: ['devriez', 'auriez dû'], correct: 0 },
    { promptSay: "Hier, j'... un petit message.", opts: ['aurais apprécié', 'apprécierais'], correct: 0 },
    { promptSay: "Demain, il ... prévenir toute l'équipe.", opts: ['faudrait', 'aurait fallu'], correct: 0 },
  ],
  steps: STEPS('Un acte manqué se regarde derrière', 'Ce que le mauvais temps raconte'),
  audio: REC('rec-b2-02-piege-reproche'),
  say: REFRAME,
  terms: ['reproche', 'repere'],
};

const A5_TEXTE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-texte',
  layer: 'core',
  questionsInModal: true,
  title: "Dans un texte : l'affichette de Monsieur Keller",
  frSub: 'Un reproche dosé',
  text: TEXT_AFFICHE,
  glossary: [
    { word: "cage d'escalier", en: 'stairwell', note: "L'espace de l'immeuble où se trouve l'escalier." },
    { word: 'assemblée', en: "residents' meeting", note: "La réunion annuelle des propriétaires ou des locataires." },
  ],
  questions: [
    { q: 'Quelles phrases font le reproche ?', a: "« J'aurais toutefois apprécié d'être consulté », « Il aurait fallu en parler à l'assemblée » et « nous aurions pu choisir la couleur ensemble »." },
    { q: 'Comment Monsieur Keller adoucit-il son reproche ?', a: "Il remercie d'abord, il passe par j'aurais apprécié, il aurait fallu et nous aurions pu, et il ajoute « ce n'est pas un reproche »." },
    { q: "Réécris « J'aurais apprécié d'être consulté » en reproche direct.", a: "« Vous auriez dû me consulter » : plus court, et plus dur." },
  ],
  audio: REC('rec-b2-02-affiche'),
  say: REFRAME,
  terms: ['reproche'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le plus diplomate', 'Laquelle vise le moins la personne ?',
      ['il aurait fallu', 'tu aurais dû', 'tu aurais au moins pu'], 0,
      "Il aurait fallu nomme le travail, pas la personne. EN: it names the task."),
  ctl('Au moins', "Qu'ajoute au moins à « tu aurais pu » ?",
      ['de la colère', 'de la politesse'], 0,
      "Au moins réduit tes attentes au minimum : c'est sec. EN: it sounds curt."),
  ctl('Le temps', "Tu reproches un oubli d'hier. Quelle forme ?",
      ['tu aurais pu', 'tu pourrais'], 0,
      "L'oubli est fait : on le regarde derrière. EN: the slip is in the past."),
], ['reproche']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Le reproche',
    opener: {
      line: "Un reproche peut fermer une porte ou en ouvrir une : ici tu choisis la distance. EN: A reproach can close a door or open one: here you choose the distance.",
      imageRef: 'lessons/conditionnel-passe/act05.jpg',
    },
    sections: [],
    milestone: "Tu doses ton reproche, de tu aurais dû jusqu'à on aurait pu, selon la personne et l'enjeu. EN: You can pitch a reproach from tu aurais dû to on aurait pu, depending on the person and the stakes.",
    estScreens: 38, restPoints: ['a5-table'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_TABLE, A5_DOSER, A5_PIEGE, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: DÛ, PU, VOULU
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Le plombier qui ne vient pas',
  frSub: 'Deviner, attendre, soupirer',
  setting: 'Liège, un samedi à onze heures. Le plombier devait venir à neuf heures. Tu attends avec Léa, ta colocataire.',
  bubbles: [
    { from: 'narrator', fr: "Onze heures. Toujours personne à la porte.", en: 'Eleven o’clock. Still nobody at the door.' },
    { from: 'user', fr: 'Il aurait dû arriver à neuf heures.', en: 'He should have arrived at nine.', warn: 'une attente déçue' },
    { from: 'coach', fr: fr(E(1275)), en: en(E(1275)), warn: 'une supposition' },
    { from: 'user', fr: 'Ou il a eu un problème. Il aurait pu appeler, quand même.', en: 'Or he had a problem. He could have called, all the same.' },
    { from: 'coach', fr: "J'ai voulu joindre l'entreprise, mais ça ne répond pas.", en: 'I tried to reach the company, but nobody answers.' },
    { from: 'coach', fr: 'La fuite est petite. Ça aurait pu être pire.', en: 'The leak is small. It could have been worse.' },
  ],
  closing: { fr: 'Il a dû oublier : on devine. Il aurait dû venir : on attendait.', en: 'He must have forgotten: a guess. He should have come: an expectation.' },
  audio: REC('rec-b2-02-plombier'),
  say: REFRAME,
  terms: ['modaux'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-modaux',
  title: 'Trois verbes qui changent de sens',
  frSub: 'Passé composé ou conditionnel passé',
  hint: 'Quatre cartes. Demande-toi si c’est arrivé.',
  audio: REC('rec-b2-02-modaux'),
  say: REFRAME,
  terms: ['modaux'],
  cards: [
    { head: 'devoir, la supposition', label: 'passé composé', fr: fr(E(1275)), sub: rsOf(E(1275)),
      body: "On devine ce qui s'est sans doute passé : il a probablement oublié. EN: must have, a guess about the past." },
    { head: "devoir, l'attente déçue", label: 'conditionnel passé', fr: fr(E(1276)), sub: rsOf(E(1276)),
      body: "C'était prévu, et ça n'est pas arrivé. EN: should have, and did not." },
    { head: 'pouvoir, la chance ratée', label: 'conditionnel passé', fr: fr(E(1281)), sub: rsOf(E(1281)),
      body: "Une possibilité existait et n'a pas eu lieu. Pour un danger, c'est le soulagement. EN: could have; with a danger, relief." },
    { head: "vouloir, l'essai", label: 'passé composé', fr: fr(E(1282)), sub: rsOf(E(1282)),
      body: "J'ai voulu : tu as essayé. J'aurais voulu : tu n'as pas essayé, ou tu n'as pas pu. EN: tried, against would have liked." },
  ],
};

const A6_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-table',
  layer: 'core',
  sheetId: 'sheet-modaux',
  title: 'Six formes, six histoires',
  frSub: 'Touche une ligne pour la phrase',
  cols: ['Forme', 'Ce qui s’est passé', 'Temps'],
  rows: [
    { cells: ["j'ai dû", 'une obligation remplie', 'passé composé'], say: fr(E(1277)),
      detail: { title: "j'ai dû", body: "Tu étais obligé, et tu l'as fait. EN: you had to, and you did.", say: "Le taxi était en panne : j'ai dû prendre le métro." } },
    { cells: ["j'aurais dû", 'une obligation manquée', 'conditionnel passé'], say: fr(E(1278)),
      detail: { title: "j'aurais dû", body: "C'était la chose à faire, et tu ne l'as pas faite. EN: the right thing, not done.", say: fr(E(1298)) } },
    { cells: ['il a dû', 'une supposition', 'passé composé'], say: fr(E(1275)),
      detail: { title: 'il a dû', body: "Tu n'étais pas là : tu devines, avec assez de certitude. EN: a confident guess.", say: 'Elle a dû rater son bus.' } },
    { cells: ["j'ai pu", 'une réussite', 'passé composé'], say: fr(E(1279)),
      detail: { title: "j'ai pu", body: "C'était possible, et c'est fait. EN: possible, and done.", say: fr(E(1285)) } },
    { cells: ["j'aurais pu", 'une chance ratée, un danger évité', 'conditionnel passé'], say: fr(E(1280)),
      detail: { title: "j'aurais pu", body: "Une possibilité qui n'a pas eu lieu, heureusement ou malheureusement. EN: a possibility that did not happen.", say: fr(E(1288)) } },
    { cells: ["j'ai voulu", 'un essai', 'passé composé'], say: fr(E(1282)),
      detail: { title: "j'ai voulu", body: "Tu as essayé, et ça n'a pas marché. EN: you tried.", say: "J'ai voulu ouvrir la fenêtre, mais elle était bloquée." } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['modaux'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Est-ce arrivé',
  groups: [
    grp("Ça s'est passé, ou on a essayé", [
      it(E(1277), 'obligé, et fait'),
      it(E(1279), 'réussi'),
      it(E(1282), 'essayé'),
      it(E(1285), 'obtenu'),
    ], chk("Dans ces quatre phrases, l'action a-t-elle eu lieu ou été tentée ?",
        ['Oui', 'Non'], 0,
        "Le passé composé raconte ce qui s'est passé. EN: the passé composé tells what happened.")),
    grp("Ça ne s'est pas passé", [
      it(E(1278), "l'obligation manquée"),
      it(E(1280), 'la chance ratée'),
      it(E(1283), 'le regret'),
      it(E(1286), 'la chance ratée, avec sa raison'),
    ], chk('Et ici ?',
        ["Non, c'est resté possible", 'Oui, c’est fait'], 0,
        "Le conditionnel passé regarde ce qui aurait pu ou dû arriver. EN: the past conditional looks at what could or should have happened.")),
    ctl('La supposition', "Il n'est pas venu. « Il a dû oublier » veut dire...",
        ['il a probablement oublié', "il était obligé d'oublier"], 0,
        "Devoir au passé composé sert aussi à deviner. EN: devoir also makes a guess."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['modaux'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Deviner, attendre, soupirer',
  lines: [ln(E(1275)), ln(E(1276)), ln(E(1284)), ln(E(1287)), ln(E(1281)), ln(E(1288)), ln(E(1280)), ln(E(1279))],
  questions: [
    { q: 'Première phrase : est-on sûr qu’il a oublié ?', opts: ['Non, on le suppose', "Oui, il l'a dit"], correct: 0,
      why: "« Il a dû oublier » : une supposition. EN: a guess." },
    { q: 'Deuxième phrase : est-il arrivé à midi ?', opts: ['Non', 'Oui'], correct: 0,
      why: "« Il aurait dû arriver » : l'attente est déçue. EN: he did not." },
    { q: 'Troisième phrase : le train est-il parti ?', opts: ['Non, il a du retard', "Oui, à l'heure"], correct: 0,
      why: "« aurait dû partir il y a vingt minutes » : il est encore là. EN: it is still there." },
    { q: 'Cinquième phrase : la personne s’est-elle blessée ?', opts: ['Non, mais le risque existait', 'Oui'], correct: 0,
      why: "« Tu aurais pu te blesser » : un danger évité. EN: a danger avoided." },
    { q: 'Les deux dernières phrases : laquelle dit une réussite ?', opts: ['la dernière', "l'avant-dernière"], correct: 0,
      why: "« J'ai pu finir » : c'est fait. « J'aurais pu » : ça ne l'est pas. EN: j'ai pu is a success." },
  ],
  audio: REC('rec-b2-02-modaux-ecoute'),
  say: REFRAME,
  terms: ['modaux'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'A dû ou aurait dû',
  rule: {
    title: "Ce qui a eu lieu, ce qui n'a pas eu lieu",
    body: "J'ai dû, j'ai pu, j'ai voulu : ça a eu lieu, ou on l'a tenté. J'aurais dû, j'aurais pu, j'aurais voulu : ça n'a pas eu lieu. EN: the passé composé happened; the past conditional did not.",
  },
  cards: [
    trap(E(1275), 'on devine', 'Il aurait dû oublier notre rendez-vous.', "Oublier n'était pas une obligation : on suppose, donc a dû. EN: a guess, so a dû."),
    trap(E(1278), 'tu es resté jusqu’au bout', "J'ai dû partir avant la fin.", "Tu es resté : l'obligation n'a pas été remplie. EN: you stayed, so it was not done."),
    trap(E(1280), 'le rapport est en retard', "J'ai pu finir le rapport à temps.", "Il est en retard : la possibilité n'a pas servi. EN: it is late."),
    trap(E(1279), 'le rapport est parti hier', "J'aurais pu finir le rapport à temps.", "Le rapport est parti : c'est une réussite. EN: it went out, a success."),
    trap(E(1287), "le colis n'est pas là", 'Ils ont dû recevoir le colis hier.', "Le colis n'est pas arrivé : ce n'est pas une supposition, c'est une attente déçue. EN: an expectation let down."),
    trap(E(1282), 'tu as composé le numéro', "J'aurais voulu t'appeler, mais ton téléphone était coupé.", "Tu as essayé : j'ai voulu. EN: you tried."),
  ],
  drill: [
    { promptSay: "Il n'est pas venu : il ... oublier.", opts: ['a dû', 'aurait dû'], correct: 0 },
    { promptSay: "Le bus ... passer à huit heures, il n'est toujours pas là.", opts: ['aurait dû', 'a dû'], correct: 0 },
    { promptSay: "Je suis resté jusqu'au bout, mais j'... partir.", opts: ['aurais dû', 'ai dû'], correct: 0 },
    { promptSay: "Le taxi était en panne : j'... prendre le métro.", opts: ['ai dû', 'aurais dû'], correct: 0 },
    { promptSay: 'Tu as couru sur la glace : tu ... te blesser.', opts: ['aurais pu', 'as pu'], correct: 0 },
    { promptSay: "Bonne nouvelle : j'... finir à temps.", opts: ['ai pu', 'aurais pu'], correct: 0 },
    { promptSay: "J'... t'appeler, mais ça sonnait occupé.", opts: ['ai voulu', 'aurais voulu'], correct: 0 },
    { promptSay: "Personne n'est blessé. Ça ... être pire.", opts: ['aurait pu', 'a pu'], correct: 0 },
  ],
  steps: STEPS("Ce qui a eu lieu, ce qui n'a pas eu lieu", 'Ce que le mauvais temps raconte'),
  audio: REC('rec-b2-02-piege-modaux'),
  say: REFRAME,
  terms: ['modaux'],
};

const A6_TEXTE: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-texte',
  layer: 'core',
  questionsInModal: true,
  title: 'Dans un texte : le message de Léa',
  frSub: 'Supposer, attendre, essayer',
  text: TEXT_PLOMBIER,
  glossary: [
    { word: 'un empêchement', en: 'something that came up', note: "Un obstacle de dernière minute qui empêche de venir." },
    { word: 'le robinet général', en: 'the main stopcock', note: "Le robinet qui ferme l'eau de tout l'appartement." },
  ],
  questions: [
    { q: 'Quelle phrase suppose ce qui s’est passé ?', a: "« Il a dû oublier » : Léa devine, avec une certaine assurance." },
    { q: 'Quelle phrase dit une attente déçue ?', a: "« Il aurait dû arriver il y a deux heures »." },
    { q: "Léa a-t-elle essayé d'appeler l'entreprise ?", a: "Oui : « J'ai voulu joindre l'entreprise ». Elle a essayé, sans succès." },
  ],
  audio: REC('rec-b2-02-lea'),
  say: REFRAME,
  terms: ['modaux'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('A dû', "« Il a dû oublier » : sait-on qu'il a oublié ?",
      ['Non, on le suppose', 'Oui'], 0,
      "C'est une supposition solide, pas une certitude. EN: a firm guess."),
  ctl('Aurait dû', "« Il aurait dû arriver à midi » : est-il arrivé à midi ?",
      ['Non', 'Oui'], 0,
      "L'attente est déçue. EN: the expectation was let down."),
  ctl('Aurait pu', "« Tu aurais pu te blesser » : que s'est-il passé ?",
      ['rien : le danger a été évité', 'un accident'], 0,
      "Le risque existait, et il ne s'est pas réalisé. EN: the risk did not come true."),
], ['modaux']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Dû, pu, voulu',
    opener: {
      line: "Il a dû oublier, il aurait dû venir : un mot de plus et l'histoire change. EN: He must have forgotten, he should have come: one more word and the story changes.",
      imageRef: 'lessons/conditionnel-passe/act06.jpg',
    },
    sections: [],
    milestone: "Tu sépares ce qui est arrivé de ce qui aurait dû ou pu arriver, avec devoir, pouvoir et vouloir. EN: You can tell what happened from what should or could have, with devoir, pouvoir and vouloir.",
    estScreens: 40, restPoints: ['a6-table'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_TABLE, A6_CONSTRUIRE, A6_ECOUTE, A6_PIEGE, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: AURAI OU AURAIS
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Il manque un s',
  frSub: 'Chloé relit son second message',
  setting: "Montréal, mardi matin. Chloé t'écrit un second message pour proposer une suite, et elle le relit avant de l'envoyer. Marc passe derrière elle.",
  bubbles: [
    { from: 'user', fr: "J'ai écrit : j'aurai dû t'écrire vendredi.", en: 'I wrote: j’aurai dû t’écrire vendredi.' },
    { from: 'coach', fr: 'Il te manque un s.', en: 'You are missing an s.' },
    { from: 'user', fr: "À l'oral, c'est pareil.", en: 'Out loud, it is the same.' },
    { from: 'coach', fr: "À l'oral, oui. À l'écrit, sans s, ton regret parle de demain.", en: 'Out loud, yes. In writing, without the s, your regret talks about tomorrow.', warn: 'aurai : le futur antérieur' },
    { from: 'user', fr: 'Un regret au futur, ça ne veut rien dire.', en: 'A regret in the future means nothing.' },
    { from: 'coach', fr: "Voilà. Pour un regret, c'est aurais, toujours.", en: 'Exactly. For a regret, it is aurais, always.' },
  ],
  closing: { fr: "Aurai regarde un moment à venir. Aurais regarde ce qui n'a pas eu lieu.", en: 'Aurai looks at a moment to come. Aurais looks at what did not happen.' },
  audio: REC('rec-b2-02-s'),
  say: REFRAME,
  terms: ['piege'],
};

const A7_PAIRES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-paires',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-forme',
  title: 'Deux temps, une lettre',
  frSub: 'Futur antérieur ou conditionnel passé',
  hint: 'Quatre cartes. Cherche le s, puis le sens.',
  audio: REC('rec-b2-02-paires-s'),
  say: REFRAME,
  terms: ['piege'],
  cards: [
    { head: 'Le futur antérieur', label: Cap(FUT_ANT_REF), fr: fr(E(1289)), sub: rsOf(E(1289)),
      body: `Une action finie avant un moment à venir : demain à midi, j'aurai fini. ${Cap(FUT_ANT_REF)} le construit en entier. EN: done before a future moment.` },
    { head: 'Le conditionnel passé', label: 'cette leçon', fr: fr(E(1290)), sub: rsOf(E(1290)),
      body: "Une action qui aurait eu lieu, mais le réel a dit non : sans cette panne, j'aurais fini. EN: would have, but did not." },
    { head: 'La case nous', label: 'audible',
      fr: 'nous aurons · nous aurions', sub: '[noo-zoh-ROHⁿ] · [noo-zoh-RYOHⁿ]',
      body: "Ici, l'oreille entend la différence : aurons contre aurions. EN: the ear catches the i here." },
    { head: 'La case je', label: 'presque muette',
      fr: "j'aurai · j'aurais", sub: '[zhoh-RAY] · [zhoh-REH]',
      body: "Beaucoup de gens prononcent les deux pareil. Le sens décide : demain, ou jamais. EN: the meaning decides." },
  ],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Promesse ou regret',
  lines: [ln(E(1291)), ln(E(1292)), ln(E(1293)), ln(E(1294)), ln(E(1295)), ln(E(1296)), ln(E(1297)), ln(E(1299))],
  questions: [
    { q: 'Première phrase : le rapport sera-t-il fini ?', opts: ['Oui, demain à midi', 'Non, il y a eu une panne'], correct: 0,
      why: "« Demain à midi » : un moment réel à venir. EN: a real future moment." },
    { q: 'Deuxième phrase : le rapport est-il fini ?', opts: ['Non, à cause de la panne', 'Oui'], correct: 0,
      why: "« Sans cette panne » : la panne a tout arrêté. EN: the breakdown stopped it." },
    { q: 'Troisième et quatrième phrases : laquelle est une promesse ?', opts: ['la troisième', 'la quatrième'], correct: 0,
      why: "« aurons », sans i : c'est le futur antérieur. EN: aurons, no i." },
    { q: 'Sixième phrase : la personne est-elle partie ?', opts: ['Non, grâce à un appel', 'Oui'], correct: 0,
      why: "« Sans ton appel, je serais déjà parti » : l'appel l'a retenue. EN: the call kept the speaker there." },
    { q: 'Dernière phrase : le courriel est-il arrivé ?', opts: ['Non, il était attendu', 'Oui'], correct: 0,
      why: "« auriez dû recevoir » : une attente déçue. EN: it did not arrive." },
  ],
  audio: REC('rec-b2-02-s-ecoute'),
  say: REFRAME,
  terms: ['piege'],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Demain, ou jamais',
  groups: [
    grp('Un moment à venir', [
      it(E(1291), 'demain à midi'),
      it(E(1293), "avant l'été"),
      it(E(1295), 'quand tu arriveras'),
      it(E(1297), "dès qu'elle aura"),
    ], chk('Ces phrases parlent-elles de ce qui va arriver ?',
        ['Oui', 'Non'], 0,
        "Aurai, aurons, serai : un futur, sans s. EN: a future, no s.")),
    grp('Un réel qui a dit non', [
      it(E(1292), 'sans cette panne'),
      it(E(1294), "une autre version de l'été"),
      it(E(1296), 'sans ton appel'),
      it(E(1299), 'un courriel attendu'),
    ], chk('Ces actions ont-elles eu lieu ?',
        ['Non', 'Oui'], 0,
        "Aurais, aurions, serais : ce qui aurait eu lieu. EN: what would have happened.")),
    ctl('Le regret', 'Pour un regret, dû va avec...',
        ["j'aurais", "j'aurai"], 0,
        "Un regret regarde derrière : toujours le s. EN: always the s."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['piege'],
};

const A7_INDICES: Sec<'focus'> = {
  type: 'focus',
  id: 'a7-indices',
  layer: 'core',
  sheetId: 'sheet-forme',
  title: 'Quatre façons de trancher',
  frSub: 'Quand tu hésites entre aurai et aurais',
  points: [
    "Un regret ou un reproche : toujours aurais, avec un s. EN: regret or reproach: always aurais.",
    "Un moment futur, demain, dès que, quand tu arriveras : aurai, sans s. EN: a future moment: aurai.",
    "Une condition, sans, avec, à ta place : aurais. EN: a condition: aurais.",
    "Dans le doute, passe à nous : aurons ou aurions, l'oreille tranche. EN: switch to nous.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['piege'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Un s qui change tout',
  rule: {
    title: 'Le s porte le sens',
    body: "À l'oral, j'aurai et j'aurais se confondent. À l'écrit, le s porte le sens : sans lui, ton regret devient une promesse. EN: in writing, the s carries the meaning.",
  },
  cards: [
    trap(E(1298), 'un regret', "J'aurai dû te le dire plus tôt.", "Un regret ne se met pas au futur. EN: a regret is never future."),
    trap(E(1292), 'la panne a eu lieu', "Sans cette panne, j'aurai fini le rapport.", "Sans pose une condition : c'est ce qui aurait eu lieu. EN: sans sets a condition."),
    trap(E(1291), 'un moment réel', "Demain à midi, j'aurais fini le rapport.", "Demain à midi est un moment réel : pas de s. EN: a real moment, no s."),
    trap(E(1296), "l'appel a eu lieu", 'Sans ton appel, je serai déjà parti.', "L'appel l'a retenu : c'est l'irréel, donc serais. EN: the unreal, so serais."),
    trap(E(1295), 'un rendez-vous futur', 'Quand tu arriveras, je serais déjà parti.', "Quand tu arriveras : un futur réel, donc serai. EN: a real future."),
    trap(E(1299), 'un courriel attendu', 'Vous aurez dû recevoir un courriel.', "Le courriel n'est pas venu : c'est un reproche doux, donc auriez. EN: a soft reproach."),
  ],
  drill: [
    { promptSay: "J'... dû te le dire plus tôt.", opts: ['aurais', 'aurai'], correct: 0 },
    { promptSay: 'Demain soir, nous ... fini.', opts: ['aurons', 'aurions'], correct: 0 },
    { promptSay: "Sans ton aide, je n'... jamais réussi.", opts: ['aurais', 'aurai'], correct: 0 },
    { promptSay: 'Dès que tu ... lu le contrat, signe-le.', opts: ['auras', 'aurais'], correct: 0 },
    { promptSay: 'Tu ... pu me prévenir.', opts: ['aurais', 'auras'], correct: 0 },
    { promptSay: 'Quand vous arriverez, elles ... fini.', opts: ['auront', 'auraient'], correct: 0 },
    { promptSay: "À ta place, j'... refusé.", opts: ['aurais', 'aurai'], correct: 0 },
    { promptSay: 'Vous ... dû recevoir un courriel hier.', opts: ['auriez', 'aurez'], correct: 0 },
  ],
  steps: STEPS('Le s porte le sens', 'Ce que la mauvaise lettre raconte'),
  audio: REC('rec-b2-02-piege-s'),
  say: REFRAME,
  terms: ['piege'],
};

const A7_TEXTE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-texte',
  layer: 'core',
  questionsInModal: true,
  title: 'Dans un texte : le second message',
  frSub: 'Derrière avec un s, devant sans',
  text: TEXT_EXCUSES,
  glossary: [
    { word: 'mis à jour', en: 'updated', note: "Mettre à jour : ajouter les dernières informations." },
    { word: 'agenda partagé', en: 'shared calendar', note: "Un agenda en ligne que toute l'équipe peut lire." },
  ],
  questions: [
    { q: 'Quelles formes regardent derrière ?', a: "« j'aurais dû t'écrire », « j'aurais dû vérifier » et « la journée aurait été bien pire »." },
    { q: 'Quelles formes promettent ?', a: "« j'aurai mis à jour » et « nous aurons préparé » : des actions finies avant un moment à venir." },
    { q: 'Pourquoi « d’ici vendredi » va-t-il avec aurai, sans s ?', a: "Vendredi est un moment réel à venir : c'est une promesse, pas un regret." },
  ],
  audio: REC('rec-b2-02-excuses'),
  say: REFRAME,
  terms: ['piege', 'regret'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le s', "« J'aurai dû t'écrire » : que lit ton lecteur ?",
      ['une faute : un regret au futur', 'un regret poli'], 0,
      "Sans s, le regret devient un futur qui ne veut rien dire. EN: a meaningless future."),
  ctl('Le test', 'Quel test est le plus sûr ?',
      ['passer à nous : aurons ou aurions', 'écouter la fin du mot'], 0,
      "À la case nous, le i s'entend. EN: the i is audible with nous."),
  ctl('Le futur antérieur', "« Demain à midi, j'aurai fini » : est-ce une faute ?",
      ["Non, c'est une promesse datée", 'Oui, il manque un s'], 0,
      "Un moment réel à venir : aurai est juste. EN: a real future moment."),
], ['piege']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Aurai ou aurais',
    opener: {
      line: "Une lettre muette sépare une promesse d'un regret : ici tu apprends à la placer. EN: One silent letter separates a promise from a regret: here you learn where to put it.",
      imageRef: 'lessons/conditionnel-passe/act07.jpg',
    },
    sections: [],
    milestone: "Tu n'écris plus « j'aurai dû » : tu choisis aurai ou aurais par le sens, pas par l'oreille. EN: You no longer write « j’aurai dû »: you choose aurai or aurais by meaning, not by ear.",
    estScreens: 38, restPoints: ['a7-construire'],
  },
  sections: [A7_HISTOIRE, A7_PAIRES, A7_ECOUTE, A7_CONSTRUIRE, A7_INDICES, A7_PIEGE, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: CE QUI AURAIT PU ARRIVER
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'Une minute avant la fermeture',
  frSub: "À l'aéroport d'Abidjan",
  setting: "Abidjan, l'aéroport. Tu arrives au comptoir une minute avant la fermeture. Kouadio, ton ami, t'a conduit par les petites rues.",
  bubbles: [
    { from: 'coach', fr: 'Une minute plus tard, le comptoir aurait fermé.', en: 'One minute later, the counter would have closed.' },
    { from: 'user', fr: 'Sans ton raccourci, je serais encore dans les bouchons.', en: 'Without your shortcut, I would still be stuck in traffic.', warn: 'sans : la condition en trois mots' },
    { from: 'coach', fr: fr(E(1309)), en: en(E(1309)) },
    { from: 'user', fr: "À ta place, je n'aurais rien dit.", en: 'In your place, I would not have said anything.' },
    { from: 'coach', fr: "Allez, file. Tu me raconteras.", en: 'Go on, off you go. Tell me all about it.' },
    { from: 'narrator', fr: 'Pas un seul si dans cette conversation, et pourtant tout y est imaginé.', en: 'Not a single si in this conversation, and yet everything in it is imagined.' },
  ],
  closing: { fr: 'La condition tient dans un petit groupe : sans, avec, à ta place, sinon.', en: 'The condition fits in a small phrase: sans, avec, à ta place, sinon.' },
  audio: REC('rec-b2-02-aeroport'),
  say: REFRAME,
  terms: ['irreel'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-emplois',
  title: 'La condition, sans si',
  frSub: 'Quatre petits mots',
  hint: 'Quatre cartes. Trouve la condition avant le verbe.',
  audio: REC('rec-b2-02-irreel'),
  say: REFRAME,
  terms: ['irreel'],
  cards: [
    { head: 'sans', label: 'une chose absente', fr: fr(E(1301)), sub: rsOf(E(1301)),
      body: "Sans ton aide veut dire : si tu ne m'avais pas aidé. Tu as réussi, grâce à l'aide. EN: without, so it did happen thanks to it." },
    { head: 'avec', label: 'une chose en plus', fr: fr(E(1302)), sub: rsOf(E(1302)),
      body: "Avec un peu de chance : la chance a manqué, et vous avez perdu. EN: with more luck; you lost." },
    { head: 'à ta place', label: 'une autre personne', fr: fr(E(1303)), sub: rsOf(E(1303)),
      body: "Tu te mets à la place de l'autre, dans une situation passée. C'est un conseil qui arrive trop tard, ou un jugement. EN: late advice, or a judgement." },
    { head: 'sinon', label: 'le contraire de ce qui a eu lieu', fr: fr(E(1305)), sub: rsOf(E(1305)),
      body: "Sinon renvoie à la phrase d'avant : s'il n'avait pas freiné. EN: otherwise, referring back." },
  ],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  title: 'La condition est parfois ailleurs',
  frSub: 'Un moment, une personne, un geste',
  examples: [
    ex(E(1306), 'un moment sert de condition : une minute plus tard'),
    ex(E(1307), 'moi : la condition, c’est la personne'),
    ex(E(1309), 'en partant : le gérondif porte la condition'),
    ex(E(1310), 'il aurait suffi : ce qui manquait était petit'),
    ex(E(1311), 'nous aurions pu : un danger évité, et un soulagement'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['irreel'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Où est la condition',
  groups: [
    grp('La condition tient dans un groupe', [
      it(E(1301), 'sans'),
      it(E(1302), 'avec'),
      it(E(1303), 'à ta place'),
      it(E(1308), 'sans, encore'),
    ], chk('Où est la condition dans ces phrases ?',
        ['au début : sans, avec, à ta place', 'dans le verbe', "il n'y en a pas"], 0,
        "Un petit groupe au début fait le travail d'une phrase avec si. EN: a short phrase does the job of a si clause.")),
    grp('La condition est ailleurs', [
      it(E(1305), 'sinon'),
      it(E(1306), 'un moment'),
      it(E(1307), 'une personne'),
      it(E(1309), 'un gérondif'),
    ], chk("Dans « Une minute plus tard, nous aurions raté le train », quelle est la condition ?",
        ['arriver une minute plus tard', 'rater le train'], 0,
        "Le moment remplace « si nous étions arrivés une minute plus tard ». EN: the moment stands for the condition.")),
    ctl('Le réel', "« Sans ton aide, je n'aurais jamais réussi. » As-tu réussi ?",
        ["Oui, grâce à l'aide", 'Non'], 0,
        "L'irréel parle du monde sans l'aide ; le réel, c'est la réussite. EN: in reality, you succeeded."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['irreel'],
};

/** RECOGNITION of the si pair, with lesson 10's own rows. Nothing here asks
 *  the learner to build the si side: that is lesson 3 in B2. */
const A8_SI: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-si',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-emplois',
  title: 'Et avec si',
  frSub: 'Reconnaître la paire du passé',
  hint: 'Quatre cartes. Regarde de quel côté est le conditionnel.',
  audio: REC('rec-b2-02-si'),
  say: REFRAME,
  terms: ['irreel'],
  cards: [
    { head: 'La paire du passé', label: Cap(SI_REF), fr: fr('fr.b1.projets-et-futur.1352'), sub: '[see zhah-veh SÜ | zhoh-reh pree uhⁿ-notr TREHⁿ]',
      body: `« ${B110_REFRAME} » Au passé, la paire devient : si et le plus-que-parfait, puis le conditionnel passé. EN: ${B110_REFRAME_EN}` },
    { head: 'Côté si', label: Cap(PQP_REF), fr: 'si j’avais su · si tu m’avais prévenu', sub: '[see zhah-veh SÜ] · [see tü mah-veh pray-vuh-NÜ]',
      body: "Côté si, c'est le plus-que-parfait, jamais le conditionnel. EN: the si side takes the pluperfect, never the conditional." },
    { head: 'Côté résultat', label: 'cette leçon', fr: fr('fr.b1.projets-et-futur.1353'), sub: '[see tü mah-veh pray-vuh-NÜ | zhuh suh-reh vuh-nü tay-DAY]',
      body: "Côté résultat, la forme de cette leçon : je serais venu. EN: the result side is this lesson's form." },
    { head: 'Pour construire la paire', label: Cap(SI_PASSE_REF), fr: fr('fr.b1.projets-et-futur.1209'), sub: '[see noo-zah-vyohⁿ SÜ | noo-zoh-ryohⁿ ray-zehr-vay plü TOH]',
      body: `Tu la construiras en entier à ${SI_PASSE_REF}. Ici, tu la reconnais, et tu sais où ne jamais mettre le conditionnel. EN: you build it later; here you recognise it.` },
  ],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre irréels à reprendre',
  errors: [
    { wrong: 'Si j’aurais su, j’aurais pris un autre train.', right: fr('fr.b1.projets-et-futur.1352'),
      why: "Normal : les deux moitiés parlent de ce qui n'a pas eu lieu, alors on met le conditionnel partout. Mais après si, jamais de conditionnel. EN: never a conditional after si." },
    { wrong: 'Avec un peu de chance, nous gagnerions hier.', right: fr(E(1302)),
      why: "Hier est fini : le résultat imaginé doit regarder derrière. EN: a past result takes the past conditional." },
    { wrong: "Heureusement qu'il a freiné, sinon il y aurait un accident.", right: fr(E(1305)),
      why: "Le conditionnel présent imagine maintenant ; l'accident aurait eu lieu au moment du freinage : il y aurait eu. À l'oral, tu entendras aussi « sinon il y avait un accident » : c'est familier, pas faux, mais à l'écrit, prends le conditionnel passé. EN: a past unreal result takes the past conditional; the spoken imparfait is informal, not wrong." },
    { wrong: 'Si tu m’aurais prévenu, je serais venu t’aider.', right: fr('fr.b1.projets-et-futur.1353'),
      why: `Le si refuse le conditionnel, même quand toute la phrase est imaginée. ${Cap(SI_PASSE_REF)} construit cette paire. EN: si refuses the conditional.` },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['irreel'],
};

const A8_TEXTE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-texte',
  layer: 'core',
  questionsInModal: true,
  title: "Dans un texte : l'avion de justesse",
  frSub: 'Des conditions sans si, et un faux sinon',
  text: TEXT_AVION,
  glossary: [
    { word: 'failli', en: 'nearly (did)', note: "J'ai failli rater : j'ai presque raté, mais non." },
    { word: 'bouchons', en: 'traffic jams', note: 'Les embouteillages.' },
  ],
  questions: [
    { q: 'Trouve trois résultats imaginés, et leur condition.', a: "« Sans le raccourci de Kouadio, je serais encore dans les bouchons », « Une minute plus tard, le comptoir aurait fermé », « en partant plus tôt, j'aurais évité tout ça »." },
    { q: "Dans « Sinon, le vol s'est très bien passé », sinon introduit-il un résultat imaginé ?", a: "Non. Ici, sinon veut dire « à part ça », et le verbe est au passé composé : c'est le réel." },
    { q: 'Réécris « Sans le raccourci de Kouadio » avec si.', a: `« Si Kouadio n'avait pas pris le raccourci » : si et le plus-que-parfait, la paire que ${SI_PASSE_REF} construit.` },
  ],
  audio: REC('rec-b2-02-avion'),
  say: REFRAME,
  terms: ['irreel'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La condition', 'Sans, avec, à ta place, sinon : que remplacent-ils ?',
      ['une condition avec si', 'un temps du verbe'], 0,
      "Ils font le travail d'une phrase avec si. EN: they do the job of a si clause."),
  ctl('Après si', "« Si j'aurais su » : où est la faute ?",
      ['après si, jamais de conditionnel', 'il manque un s'], 0,
      "Si j'avais su : le plus-que-parfait. EN: si j'avais su."),
  ctl('Le réel', "« Une minute plus tard, nous aurions raté le train. » Avez-vous raté le train ?",
      ['Non', 'Oui'], 0,
      "Vous êtes arrivés à temps : le retard est imaginé. EN: you made it."),
], ['irreel']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Ce qui aurait pu arriver',
    opener: {
      line: "Une minute de plus, et tout changeait : ici tu racontes l'histoire qui n'a pas eu lieu. EN: One more minute and everything would have changed: here you tell the story that never happened.",
      imageRef: 'lessons/conditionnel-passe/act08.jpg',
    },
    sections: [],
    milestone: "Tu imagines un résultat passé avec sans, avec, à ta place ou sinon, et tu ne mets jamais le conditionnel après si. EN: You can imagine a past result with sans, avec, à ta place or sinon, and never put the conditional after si.",
    estScreens: 38, restPoints: ['a8-exemples'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_EXEMPLES, A8_CONSTRUIRE, A8_SI, A8_ERREURS, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: LA POLITESSE AU PASSÉ
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Dix minutes avant midi',
  frSub: 'Au secrétariat de la faculté',
  setting: 'Liège, le secrétariat de la faculté, un lundi à 11 h 50. La secrétaire ferme dans dix minutes.',
  bubbles: [
    { from: 'user', fr: fr(E(1314)), en: en(E(1314)) },
    { from: 'coach', fr: 'Je vous écoute.', en: 'I am listening.' },
    { from: 'user', fr: "J'aurais aimé savoir si mon dossier est complet.", en: 'I would like to know whether my file is complete.' },
    { from: 'coach', fr: 'Il manque une photo. Vous en auriez une sur vous, par hasard.', en: 'A photo is missing. You wouldn’t happen to have one on you.' },
    { from: 'narrator', fr: "Le passé ne parle pas d'hier ici. Il ajoute un pas de plus en arrière.", en: 'The past does not talk about yesterday here. It adds one more step back.' },
  ],
  closing: { fr: "J'aurais voulu : la demande la plus prudente, un pas plus loin que je voudrais.", en: 'J’aurais voulu: the most careful request, one step further than je voudrais.' },
  audio: REC('rec-b2-02-secretariat'),
  say: REFRAME,
  terms: ['politesse'],
};

const A9_ECHELLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-echelle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-emplois',
  title: 'Du direct au plus prudent',
  frSub: 'La même demande, de plus en plus prudente',
  hint: 'Quatre cartes. Chaque carte recule un peu plus.',
  audio: REC('rec-b2-02-politesse'),
  say: REFRAME,
  terms: ['politesse', 'recul'],
  cards: [
    { head: 'Je veux', label: 'le présent', fr: 'Je veux un renseignement.', sub: '[zhuh vuh uhⁿ rahⁿ-seny-MAHⁿ]',
      body: "Une décision. Au guichet, ça sonne comme un ordre. EN: a decision; at a counter, an order." },
    { head: 'Je voudrais', label: Cap(COND_REF), fr: 'Je voudrais un renseignement.', sub: '[zhuh voo-dreh uhⁿ rahⁿ-seny-MAHⁿ]',
      body: `« ${B108_REFRAME} » C'est la forme normale d'une demande. EN: one step back, the normal request.` },
    { head: 'Je voulais', label: Cap(POLI_REF), fr: 'Je voulais vous demander un renseignement.', sub: '[zhuh voo-leh voo duh-mahⁿ-day uhⁿ rahⁿ-seny-MAHⁿ]',
      body: `« ${B109_REFRAME} » L'imparfait fait le même pas en arrière, par le passé plutôt que par le conditionnel. EN: politeness matches the favour.` },
    { head: "J'aurais voulu", label: 'le conditionnel passé', fr: fr(E(1314)), sub: rsOf(E(1314)),
      body: "Deux pas en arrière : pour un grand service, ou une personne que tu ne veux pas brusquer. EN: two steps back, for real favours." },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Une demande pour maintenant',
  groups: [
    grp("Une demande d'aujourd'hui", [
      it(E(1314), 'au guichet'),
      it(E(1315), 'une salle pour jeudi'),
      it(E(1319), 'dans un courriel'),
      it(E(1318), 'à l’écrit, très soutenu'),
    ], chk('Ces phrases parlent-elles du passé ?',
        ['Non, la demande est pour maintenant', 'Oui, elles racontent hier'], 0,
        "Le passé ici est une distance, pas un moment. EN: the past here is distance, not time.")),
    grp('Une question qui recule', [
      it(E(1316), 'des clés perdues'),
      it(E(1317), 'entre amis'),
      it(E(1321), 'au comptoir, en Belgique ou au Québec'),
      it('fr.b1.conseils-et-suggestions.1091', `l'imparfait de ${POLI_REF}`),
    ], chk("« Vous n'auriez pas vu mes clés » : que demande-t-on ?",
        ['si la personne a vu les clés', 'si elle les verra'], 0,
        "La question porte sur le passé, mais le conditionnel la rend légère : tu n'accuses personne. EN: a light question that accuses nobody.")),
    ctl('Le bon dosage', "Tu demandes le sel à un ami. « J'aurais voulu te demander le sel » ?",
        ['Non, bien trop lourd', "Oui, c'est parfait"], 0,
        "Entre amis, pour si peu, la forme sonne ironique. EN: between friends, it sounds ironic."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['politesse'],
};

const A9_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a9-flash',
  layer: 'core',
  title: 'Huit formes, de mémoire',
  frSub: 'Anglais devant, français derrière',
  cards: [
    { front: 'I should have', back: "j'aurais dû", say: fr(E(1298)) },
    { front: 'you could have', back: 'tu aurais pu', say: fr(E(1201)) },
    { front: 'I would have liked', back: "j'aurais aimé", say: fr(E(1249)) },
    { front: 'I would have preferred', back: "j'aurais préféré", say: fr(E(1251)) },
    { front: 'we should have', back: 'nous aurions dû', say: fr(E(1272)) },
    { front: 'it would have been necessary', back: 'il aurait fallu', say: fr(E(1265)) },
    { front: 'she would have come', back: 'elle serait venue', say: fr(E(1225)) },
    { front: 'it would have been', back: 'ça aurait été', say: fr(E(1239)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['forme'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre politesses mal dosées',
  errors: [
    { wrong: "J'aurai voulu vous demander un renseignement.", right: fr(E(1314)),
      why: "À l'oral, c'est pareil. À l'écrit, sans s, ta demande devient un futur, qui n'a aucun sens ici. EN: without the s it reads as a future." },
    { wrong: "Salut Tom, j'aurais voulu te demander le sel.", right: 'Tom, tu pourrais me passer le sel ?',
      why: "La forme est juste, mais bien trop lourde : entre amis, pour le sel, elle sonne ironique. EN: correct but far too heavy between friends." },
    { wrong: 'Vous avez pris mes clés ?', right: fr(E(1316)),
      why: "La question directe n'est pas fausse, mais elle accuse. Le conditionnel passé et par hasard n'accusent personne. EN: softer, it accuses nobody." },
    { wrong: "J'aurais aimé de savoir si la salle est libre jeudi.", right: fr(E(1315)),
      why: "Pas de de après aimer, même quand la phrase est longue. EN: no de after aimer." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['politesse'],
};

const A9_TEXTE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-texte',
  layer: 'core',
  questionsInModal: true,
  title: 'Dans un texte : le courriel de Yanis',
  frSub: 'Des demandes polies, et un reproche discret',
  text: TEXT_SECRETARIAT,
  glossary: [
    { word: 'quelques précisions', en: 'a few details', note: "Des informations plus exactes sur un point." },
    { word: "carte d'étudiant", en: 'student card', note: "La carte qui prouve que tu es inscrit à l'université." },
  ],
  questions: [
    { q: 'Quelles phrases demandent poliment ?', a: "« j'aurais souhaité obtenir quelques précisions », « J'aurais aimé savoir » et « Nous aurions aimé connaître »." },
    { q: 'Quelle phrase fait un reproche discret ?', a: "« vous auriez dû la recevoir la semaine dernière » : une attente déçue, sans accuser personne." },
    { q: "Réécris « J'aurais aimé savoir » un pas plus près.", a: "« J'aimerais savoir » ou « Je voudrais savoir » : toujours poli, plus direct." },
  ],
  audio: REC('rec-b2-02-yanis'),
  say: REFRAME,
  terms: ['politesse', 'reproche'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le temps', "« J'aurais voulu vous demander » : la demande est pour quand ?",
      ['maintenant', 'hier'], 0,
      "Le passé ajoute de la distance, pas du temps. EN: distance, not time."),
  ctl('Le poids', "Quand choisir j'aurais voulu plutôt que je voudrais ?",
      ['pour un grand service ou une personne importante', "toujours, c'est plus poli"], 0,
      "Trop de politesse pour une petite chose sonne faux. EN: too much for small things sounds false."),
  ctl('Le s', "« J'aurai voulu vous demander » : que manque-t-il ?",
      ['un s', 'un accent'], 0,
      "Sans s, c'est un futur antérieur. EN: without s, a future."),
], ['politesse']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'La politesse au passé',
    opener: {
      line: "Parfois un pas en arrière ne suffit pas : ici tu en fais deux, pour les demandes qui comptent. EN: Sometimes one step back is not enough: here you take two, for the requests that matter.",
      imageRef: 'lessons/conditionnel-passe/act09.jpg',
    },
    sections: [],
    milestone: "Tu adoucis une demande avec j'aurais voulu ou j'aurais aimé, et tu sais quand c'est trop. EN: You can soften a request with j'aurais voulu or j'aurais aimé, and know when it is too much.",
    estScreens: 34, restPoints: ['a9-flash'],
  },
  sections: [A9_HISTOIRE, A9_ECHELLE, A9_CONSTRUIRE, A9_FLASH, A9_ERREURS, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: SELON NOS INFORMATIONS
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_BULLETIN: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-bulletin',
  layer: 'core',
  hideLines: true,
  title: 'Le journal de treize heures',
  frSub: 'Huit nouvelles : lesquelles sont garanties',
  lines: [
    ln(E(1324)), ln(E(1325)), ln('fr.b1.journalisme.1093'), ln(E(1329)),
    ln(E(1330)), ln('fr.b2.strategies-de-comprehension.1688'), ln(E(1334)), ln(E(1335)),
  ],
  questions: [
    { q: "Première nouvelle : l'arrestation est-elle confirmée ?", opts: ['Non, elle est rapportée', 'Oui'], correct: 0,
      why: "« aurait été arrêté » : la rédaction ne garantit rien. EN: not confirmed." },
    { q: 'Deuxième nouvelle : qui parle du conducteur ?', opts: ['la police', 'la mairie', 'des témoins'], correct: 0,
      why: "« Selon la police » : la source est nommée. EN: the police." },
    { q: 'Troisième nouvelle : les blessés sont-ils confirmés ?', opts: ['Non, le bilan est rapporté', 'Oui'], correct: 0,
      why: "« aurait fait » : le chiffre circule. EN: the figure is only reported." },
    { q: "Quatrième nouvelle : la police a-t-elle arrêté quelqu'un ?", opts: ['Oui, la rédaction le garantit', 'Non, on le dit seulement'], correct: 0,
      why: "« a arrêté » : passé composé, la rédaction signe. EN: signed by the newsroom." },
    { q: 'Cinquième nouvelle : combien les travaux auraient-ils coûté ?', opts: ['deux millions', 'dix millions'], correct: 0,
      why: "« deux millions », d'après la mairie. EN: two million." },
    { q: 'Dernière nouvelle : ce bilan est-il confirmé ?', opts: ['Oui', 'Non'], correct: 0,
      why: "« a fait trois blessés » : passé composé, c'est vérifié. EN: verified." },
  ],
  audio: REC('rec-b2-02-bulletin'),
  say: REFRAME,
  terms: ['ondit'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-emplois',
  title: 'Signé ou rapporté',
  frSub: 'Passé composé ou conditionnel passé',
  hint: 'Quatre cartes. Demande-toi qui garantit.',
  audio: REC('rec-b2-02-presse'),
  say: REFRAME,
  terms: ['ondit'],
  cards: [
    { head: 'Le fait vérifié', label: 'passé composé', fr: fr(E(1329)), sub: rsOf(E(1329)),
      body: "La rédaction a vérifié : elle signe la phrase. EN: verified, so the newsroom signs it." },
    { head: 'Le fait rapporté', label: 'conditionnel passé', fr: fr(E(1324)), sub: rsOf(E(1324)),
      body: "L'événement est passé, mais personne ne l'a encore confirmé. EN: past, but unconfirmed." },
    { head: "Un état d'aujourd'hui", label: Cap(COND_REF), fr: fr('fr.b1.projets-et-futur.762'), sub: '[suh-lohⁿ lah poh-lees luh süs-peh suh-reh ahⁿ FWEET]',
      body: "Le conditionnel présent rapporte un état actuel ; le passé, un fait déjà arrivé : il aurait fui. EN: a present state against a past event." },
    { head: 'La source', label: Cap(MEDIAS_REF), fr: fr(E(1325)), sub: rsOf(E(1325)),
      body: `« ${B134_REFRAME} » Selon, d'après : la source est nommée, et le verbe garde ses distances. EN: ${B134_REFRAME_EN}` },
  ],
};

const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-trier',
  layer: 'core',
  size: 'lg',
  title: 'Qui signe la phrase',
  groups: [
    grp('Signé par la rédaction', [
      it(E(1329), 'une arrestation confirmée'),
      it(E(1335), 'un bilan officiel'),
      it(E(1337), 'une démission annoncée'),
      it(E(1338), 'vu par nos équipes'),
    ], chk('Ces quatre phrases : la rédaction garantit-elle les faits ?',
        ['Oui', 'Non'], 0,
        "Le passé composé engage celui qui écrit. EN: the passé composé commits the writer.")),
    grp('Rapporté, pas vérifié', [
      it(E(1327), 'une hypothèse de la police'),
      it(E(1331), 'une rumeur de mercato'),
      it(E(1336), 'une nouvelle à confirmer'),
      it('fr.b2.strategies-de-comprehension.1688', "l'origine du feu"),
    ], chk('Et celles-ci ?',
        ['Non, elle rapporte sans garantir', 'Oui'], 0,
        "Le conditionnel passé garde la distance. EN: the past conditional keeps the distance.")),
    ctl('Le mélange', 'Dans une dépêche, peut-on mélanger les deux ?',
        ["Oui : ce qui est vérifié, et ce qui ne l'est pas", 'Non, il faut choisir'], 0,
        "Une bonne brève sépare phrase par phrase le vérifié du rapporté. EN: a good brief separates them sentence by sentence."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ondit'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Promettre trop, ou douter de ce qu’on a vu',
  rule: {
    title: 'Qui garantit',
    body: "Au passé composé, le journaliste garantit le fait. Au conditionnel passé, il le rapporte sans le garantir. Se tromper, c'est promettre trop, ou douter de ce qu'on a vu. EN: the passé composé vouches; the conditional does not.",
  },
  cards: [
    trap(E(1329), "la police l'a confirmé", 'La police aurait arrêté un suspect.', "C'est confirmé : le doute n'a plus de raison d'être. EN: confirmed, so no distance."),
    trap(E(1324), 'une rumeur', 'Le suspect a été arrêté hier soir.', "Personne n'a confirmé : tu signerais une rumeur. EN: you would be vouching for a rumour."),
    trap(E(1335), 'le bilan officiel', "L'accident aurait fait trois blessés.", "Le bilan est officiel : la rédaction signe. EN: the figure is official."),
    trap(E(1328), 'des témoins le disent', 'Plusieurs témoins ont entendu une explosion.', "La rédaction ne l'a pas entendue : elle rapporte. EN: the newsroom did not hear it."),
    trap(E(1338), 'tu étais sur place', 'Les pompiers seraient intervenus vers minuit.', "Tu les as vus : tu signes. EN: you saw them."),
    trap(E(1336), 'rien de confirmé', 'Le chanteur a annulé sa tournée.', "Personne ne l'a confirmé : au passé composé, la rédaction signerait une rumeur. EN: unconfirmed, so no guarantee."),
  ],
  drill: [
    { promptSay: 'Pas encore confirmé : le voleur ... entré par la fenêtre.', opts: ['serait', 'est'], correct: 0 },
    { promptSay: 'Confirmé ce matin : le président ... démissionné.', opts: ['a', 'aurait'], correct: 0 },
    { promptSay: "Rumeur non confirmée : le club ... refusé l'offre.", opts: ['aurait', 'a'], correct: 0 },
    { promptSay: "Bilan officiel : l'accident ... fait trois blessés.", opts: ['a', 'aurait'], correct: 0 },
    { promptSay: 'Information non vérifiée : rien ... été signé.', opts: ["n'aurait", "n'a"], correct: 0 },
    { promptSay: 'Nous étions sur place : les pompiers ... intervenus vers minuit.', opts: ['sont', 'seraient'], correct: 0 },
    { promptSay: "Un témoin le dit, rien n'est prouvé : le conducteur ... perdu le contrôle.", opts: ['aurait', 'a'], correct: 0 },
    { promptSay: "L'enquête l'a prouvé : l'entreprise ... licencié trente salariés.", opts: ['a', 'aurait'], correct: 0 },
  ],
  steps: STEPS('Qui garantit', 'Ce que le mauvais temps promet'),
  audio: REC('rec-b2-02-piege-presse'),
  say: REFRAME,
  terms: ['ondit'],
};

const A10_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a10-dictee',
  layer: 'core',
  title: 'Écris la dépêche',
  frSub: 'Au conditionnel passé, avec ses accords',
  itemIds: dicteeFor(10),
  audio: AUDIO,
  say: REFRAME,
  terms: ['ondit'],
};

const A10_TEXTE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-texte',
  layer: 'core',
  questionsInModal: true,
  title: 'Dans un texte : une brève de Genève',
  frSub: 'Le vérifié et le rapporté',
  text: TEXT_BREVE,
  glossary: [
    { word: 'régie', en: 'property management agency', note: "En Suisse romande, l'agence qui gère un immeuble." },
    { word: 'Pâquis', en: 'the Pâquis, a Geneva district', note: "Un quartier de Genève, près du lac." },
  ],
  questions: [
    { q: 'Quels faits la rédaction garantit-elle ?', a: "L'incendie, l'intervention des pompiers, l'évacuation, le silence de la régie et l'ouverture de l'enquête : tout ce qui est au passé composé." },
    { q: 'Quelles informations restent à vérifier ?', a: "L'origine du feu, les deux blessés et l'alarme : trois conditionnels passés. Deux ont une source nommée ; les blessés, eux, attendent la confirmation des hôpitaux." },
    { q: "Réécris « l'alarme n'aurait pas fonctionné » si la police le confirme.", a: "« L'alarme n'a pas fonctionné » : le fait est vérifié, la rédaction le signe." },
  ],
  audio: REC('rec-b2-02-breve'),
  say: REFRAME,
  terms: ['ondit'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Qui signe', 'Au passé composé, qui garantit le fait ?',
      ['la rédaction', 'la source'], 0,
      "Celui qui écrit engage son nom. EN: the writer commits."),
  ctl('Présent ou passé', "« Le suspect serait en fuite » et « le suspect aurait fui » : quelle différence ?",
      ['un état actuel, puis un fait passé', 'aucune'], 0,
      "Le présent décrit maintenant ; le passé raconte ce qui se serait produit. EN: now, against what reportedly happened."),
  ctl('La source', 'Faut-il toujours nommer la source ?',
      ['Non, la forme suffit à marquer la distance', 'Oui, toujours'], 0,
      "« Aucune victime n'aurait été signalée » marque déjà la distance. EN: the form alone marks it."),
], ['ondit']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Selon nos informations',
    opener: {
      line: "Un journaliste ne dit pas « je doute » : il choisit un temps. Ici tu lis, et tu écris, comme lui. EN: A journalist never says « I doubt »: a journalist picks a tense. Here you read and write the same way.",
      imageRef: 'lessons/conditionnel-passe/act10.jpg',
    },
    sections: [],
    milestone: "Tu sépares dans une brève ce que la rédaction garantit de ce qu'elle rapporte, et tu l'écris toi-même. EN: You can separate what a news brief vouches for from what it reports, and write it yourself.",
    estScreens: 36, restPoints: ['a10-trier'],
  },
  sections: [A10_BULLETIN, A10_CARTES, A10_TRIER, A10_PIEGE, A10_DICTEE, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: TA LETTRE
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: "La lettre d'Inès",
  frSub: 'Le modèle que tu vas suivre',
  text: MODELE_TEXT,
  glossary: [
    { word: "retiré l'autorisation", en: 'withdrew the permit', note: "Annuler la permission donnée pour un événement." },
    { word: "je m'en veux", en: 'I blame myself', note: "S'en vouloir : se reprocher quelque chose." },
  ],
  questions: [
    { q: 'Global : pourquoi Inès écrit-elle ?', a: "Pour annoncer l'annulation, dire son regret, reconnaître sa part, faire un reproche mesuré et proposer une suite." },
    { q: "Détail : quel regret porte sur un acte qu'elle n'a pas fait ?", a: "« j'aurais dû appeler la mairie en mai pour vérifier notre dossier »." },
    { q: 'Inférence : Inès est-elle sûre de la date de la décision ?', a: "Non : « selon le gardien du parc, la décision aurait été prise dès le mois de mai ». Elle rapporte." },
    { q: 'Position : comment fait-elle son reproche à la mairie ?', a: "« La mairie aurait pu, elle aussi, nous prévenir » : aussi montre qu'elle a d'abord pris sa part, et le reproche reste mesuré." },
  ],
  audio: REC('rec-b2-02-modele'),
  say: REFRAME,
  terms: ['regret', 'reproche', 'ondit'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-emplois',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Le plan de ta lettre',
  steps: [
    "Dis pourquoi tu écris, au présent : je me permets de vous écrire au sujet de... EN: say why you are writing.",
    "Rapporte ce que tu sais sans le garantir : selon..., la décision aurait été prise... EN: report what you heard, at a distance.",
    "Dis ton regret, et ta part s'il y en a une : j'aurais aimé, j'aurais dû. EN: your regret, and your share.",
    "Fais le reproche en diplomate, et imagine ce qui aurait pu se passer : il aurait suffi, nous aurions pu, sans cette annulation. EN: the reproach, diplomatically, and the unreal result.",
    "Termine en regardant devant, au conditionnel présent : pourriez-vous, nous serions heureux de. EN: end with a request that looks ahead.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reproche', 'recul'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  sheetId: 'sheet-emplois',
  title: 'Quatre phrases pour ta lettre',
  cases: [
    { situation: 'Tu ouvres la lettre', fr: fr(E(1340)), en: en(E(1340)) },
    { situation: 'Tu regrettes, et tu reproches doucement', fr: fr(E(1341)), en: en(E(1341)) },
    { situation: "Tu montres que c'était facile", fr: fr(E(1342)), en: en(E(1342)) },
    { situation: 'Tu rapportes une information', fr: fr(E(1344)), en: en(E(1344)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reproche', 'ondit'],
};

/** Every string in this scenario uses ’ only and embeds no corpus row
 *  (scenario.logic refuses mixed apostrophes). */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Au téléphone avec la mairie',
  frSub: 'Six tours, à voix haute',
  setting: "Tu appelles le service des événements de la mairie du quatrième arrondissement de Lyon, au sujet de la fête annulée. Monsieur Garnier décroche.",
  turns: [
    {
      ai: 'Service des événements, bonjour.', en: 'Events department, good morning.',
      user: 'Bonjour Monsieur, je vous appelle au sujet de la fête de quartier du 14 juin.',
      userEn: 'Hello, I am calling about the neighbourhood party of 14 June. (Why you are calling, in the present.)',
      alts: [
        { fr: 'Bonjour, j’aurais voulu vous parler de la fête de quartier du 14 juin.', en: 'Hello, I wanted to talk to you about the neighbourhood party of 14 June. (Two steps back: the most careful opening.)' },
        { fr: 'Bonjour Monsieur, c’est au sujet de l’autorisation pour le 14 juin.', en: 'Hello, it is about the permit for 14 June.' },
      ],
    },
    {
      ai: 'Ah oui. L’autorisation a été retirée, je suis désolé.', en: 'Ah yes. The permit was withdrawn, I am sorry.',
      user: 'Nous aurions aimé être prévenus plus tôt.',
      userEn: 'We would have liked to be warned earlier. (A regret that is also a gentle reproach.)',
      alts: [
        { fr: 'Il aurait suffi d’un simple appel.', en: 'A simple phone call would have been enough.' },
        { fr: 'J’aurais apprécié un simple courriel.', en: 'I would have appreciated a simple email. (You speak about yourself: the most diplomatic.)' },
      ],
    },
    {
      ai: 'La décision a été prise en mai, je crois.', en: 'The decision was taken in May, I think.',
      user: 'Selon le gardien, elle aurait été prise dès le début du mois.',
      userEn: 'According to the caretaker, it was reportedly taken at the very start of the month. (Reported: you are not vouching for the date.)',
      alts: [
        { fr: 'Donc vous auriez pu nous écrire dès le mois de mai.', en: 'So you could have written to us as early as May. (A reproach built on his own words.)' },
        { fr: 'D’après le gardien, la décision daterait du début du mois.', en: 'According to the caretaker, the decision dates from the start of the month. (Present conditional: also right, as a state.)' },
      ],
    },
    {
      ai: 'Vous avez raison. Il y a eu un problème de transmission.', en: 'You are right. There was a problem passing the message on.',
      user: 'Nous aurions pu trouver une autre solution ensemble.',
      userEn: 'We could have found another solution together. (What could have happened, with nous: shared, diplomatic.)',
      alts: [
        { fr: 'Avec un peu plus de temps, nous aurions déplacé la fête.', en: 'With a little more time, we would have moved the party.' },
        { fr: 'À votre place, j’aurais proposé une autre date tout de suite.', en: 'In your place, I would have suggested another date straight away. (Advice looking back: firmer.)' },
      ],
    },
    {
      ai: 'Que souhaitez-vous maintenant ?', en: 'What would you like now?',
      user: 'Pourriez-vous nous proposer une nouvelle date en septembre ?',
      userEn: 'Could you suggest a new date in September? (Now you look ahead: present conditional.)',
      alts: [
        { fr: 'Nous aimerions organiser la fête en septembre.', en: 'We would like to hold the party in September.' },
        { fr: 'Serait-il possible de réserver le parc le 13 septembre ?', en: 'Would it be possible to book the park on 13 September?' },
      ],
    },
    {
      ai: 'Je vous envoie les dates libres cette semaine.', en: 'I will send you the free dates this week.',
      user: 'Merci beaucoup. J’attends votre courriel.',
      userEn: 'Thank you very much. I will look out for your email. (Thanks and a fact: the present is enough.)',
      alts: [
        { fr: 'Je vous remercie par avance.', en: 'Thank you in advance.' },
        { fr: 'Merci, ce serait parfait.', en: 'Thank you, that would be perfect.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reproche', 'politesse'],
};

const A11_TASK: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  layer: 'core',
  title: 'La lettre à la mairie',
  frSub: 'Mission écrite, comme au B2',
  brief: "La fête de quartier que ton association organisait a été annulée par la mairie deux jours avant, sans que personne ne vous prévienne. Tu écris au service des événements. Tu veux dire ton regret, faire un reproche sans fermer la porte, rapporter ce que tu as entendu sans le garantir, et obtenir une nouvelle date.",
  briefEn: 'The neighbourhood party your association was organising was cancelled by the town hall two days before, with no warning. Write to the events department: express your regret, make a reproach without closing the door, report what you heard without vouching for it, and ask for a new date.',
  produce: "Écris une lettre de 180 à 250 mots avec : la raison de ta lettre au présent, un regret (j'aurais aimé, j'aurais voulu), un reproche diplomatique (il aurait suffi, vous auriez pu, nous aurions pu), un résultat imaginé (sans cette annulation...), une information rapportée au conditionnel passé, et une demande pour la suite.",
  responseSpec: { kind: 'text', minWords: 180, maxWords: 250 },
  rubric: {
    criteria: [
      {
        key: 'tache', label: 'La tâche', maxPoints: 3,
        descriptors: [
          "3 : Les six morceaux sont là : la raison, le regret, le reproche, le résultat imaginé, l'information rapportée et la demande. La lettre fait 180 à 250 mots.",
          "2 : Un des six morceaux manque, ou la longueur sort un peu des bornes.",
          "1 : Plusieurs morceaux manquent : la lettre se plaint, mais ne demande rien, ou l'inverse.",
        ],
      },
      {
        key: 'coherence', label: 'La cohérence et la cohésion', maxPoints: 3,
        descriptors: [
          "3 : Chaque paragraphe a une fonction claire, et les liens (toutefois, or, d'ici là) guident le lecteur du passé vers la suite.",
          "2 : L'ordre se suit, mais une transition manque ou un paragraphe mélange deux fonctions.",
          "1 : Les phrases se suivent sans ordre : on ne sait pas quand on passe du reproche à la demande.",
        ],
      },
      {
        key: 'etendue', label: "L'étendue", maxPoints: 2,
        descriptors: [
          "2 : Au moins quatre conditionnels passés, dans au moins trois emplois différents, avec avoir et avec être.",
          "1 : Le conditionnel passé revient toujours dans la même tournure, ou il n'apparaît que deux fois.",
        ],
      },
      {
        key: 'correction', label: 'La correction', maxPoints: 2,
        descriptors: [
          "2 : Les formes sont justes : le s de aurais, l'auxiliaire, l'accord avec être, rien après si.",
          "1 : Plusieurs erreurs de forme : j'aurai dû, j'aurais allé, un participe sans accord, un conditionnel après si.",
        ],
      },
      {
        key: 'registre', label: 'Le registre et la nuance', maxPoints: 2,
        descriptors: [
          "2 : Le ton est soutenu et mesuré : le reproche passe par la distance, jamais par l'attaque, et l'information non vérifiée garde son conditionnel.",
          "1 : Le ton glisse vers l'accusation ou le familier, ou une rumeur est présentée comme un fait.",
        ],
      },
    ],
  },
  scaffold: [
    'Je me permets de vous écrire au sujet de',
    'Nous aurions aimé',
    'Il aurait suffi de',
    'Selon',
    'Sans cette annulation,',
    'Nous aurions pu',
    'Pourriez-vous',
    'Je vous remercie par avance',
  ],
  modelAnswer: "Madame, Monsieur,\n\nJe me permets de vous écrire au sujet de la fête de quartier de la Croix-Rousse, prévue le 14 juin et annulée par vos services deux jours avant. Nous comprenons vos contraintes, et nous savons que la sécurité passe en premier.\n\nNous aurions toutefois aimé être prévenus plus tôt. Selon le gardien du parc, la décision aurait été prise dès le mois de mai ; or nous ne l'avons apprise que par une affiche. Il aurait suffi d'un simple appel, ou d'un courriel à l'association. Nous aurions pu, ensemble, trouver une autre solution : déplacer la scène, réduire le nombre d'invités ou changer d'horaire.\n\nSans cette annulation, quatre-vingts familles se seraient retrouvées au parc, et les commerçants du quartier auraient participé au repas. Plusieurs bénévoles avaient déjà acheté le matériel et préparé les jeux des enfants. J'aurais voulu vous en parler de vive voix, mais votre service ne répondait pas au téléphone.\n\nPourriez-vous nous proposer une nouvelle date en septembre, et nous indiquer les conditions à remplir ? Nous serions heureux de vous rencontrer pour préparer le dossier.\n\nJe vous remercie par avance de votre réponse et vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.\n\nInès Martin\nPrésidente de l'Association des habitants de la Croix-Rousse\n\nAnnotations\n[tâche] Raison au présent (1er paragraphe), regret (nous aurions aimé), reproche (il aurait suffi), résultat imaginé (sans cette annulation), information rapportée (selon le gardien... aurait été prise), demande (pourriez-vous) : les six morceaux, 192 mots sans l'appel ni la signature.\n[cohérence] Un paragraphe par fonction ; toutefois ouvre le reproche, or oppose les dates, la demande regarde devant.\n[étendue] Sept conditionnels passés, avec avoir (aurions aimé, aurait suffi) et avec être (aurait été prise, se seraient retrouvées).\n[correction] Aucun conditionnel après si ; accords avec être justes.\n[registre] Nous comprenons, nous aurions pu : le reproche passe par nous, jamais par vous.",
  modelAnswerEn: "Dear Sir or Madam, I am writing to you about the Croix-Rousse neighbourhood party, planned for 14 June and cancelled by your department two days before. We understand your constraints, and we know that safety comes first. We would, however, have liked to be warned earlier. According to the park caretaker, the decision was reportedly taken as early as May; yet we only found out from a poster. A simple phone call, or an email to the association, would have been enough. Together, we could have found another solution: moving the stage, reducing the number of guests or changing the time. Without this cancellation, eighty families would have met in the park, and the local shopkeepers would have taken part in the meal. Several volunteers had already bought the equipment and prepared the children's games. I would have liked to discuss it with you in person, but your department was not answering the phone. Could you suggest a new date in September, and tell us the conditions to meet? We would be happy to meet you to prepare the file. Thank you in advance for your reply. Yours faithfully, Inès Martin, Chair of the Croix-Rousse Residents' Association.",
  watchFor: [
    { pattern: "« j'aurai dû », « j'aurai aimé », « j'aurai voulu »: the futur antérieur spelling where a regret or reproach is meant.",
      criterion: 'correction',
      feedback: "Il manque un s : sans lui, ton regret devient un futur. Pour un regret ou un reproche, c'est toujours j'aurais.",
      ref: 'a7-piege' },
    { pattern: "A conditional after si: « si vous m'auriez prévenu », « si j'aurais su ».",
      criterion: 'correction',
      feedback: "Après si, jamais de conditionnel. Écris « si vous m'aviez prévenu », ou passe par sans : « sans un simple appel de votre part, nous aurions... ».",
      ref: 'a8-erreurs' },
    { pattern: "avoir with a verb that takes être, or no agreement with être: « nous aurions restés », « les familles se seraient retrouvé ».",
      criterion: 'correction',
      feedback: "Rester, venir, se retrouver prennent être, et le participe s'accorde avec le sujet.",
      ref: 'a2-erreurs' },
    { pattern: "The present conditional where the moment is over: « vous devriez nous prévenir » about a cancellation that has already happened.",
      criterion: 'correction',
      feedback: "La fête est déjà annulée : ton reproche regarde derrière. « Vous auriez dû nous prévenir ».",
      ref: 'a3-piege' },
    { pattern: "An unverified claim stated as fact: « la décision a été prise en mai » where the writer only heard it from the caretaker.",
      criterion: 'registre',
      feedback: "Tu ne l'as pas vérifié : « selon le gardien, la décision aurait été prise en mai ». Sinon, c'est toi qui signes.",
      ref: 'a10-piege' },
    { pattern: "An accusing reproach: « vous n'avez rien fait », « c'est inadmissible », « vous auriez au moins pu » repeated.",
      criterion: 'registre',
      feedback: "Ton reproche ferme la porte. Passe par il aurait suffi, nous aurions pu, ou j'aurais apprécié.",
      ref: 'a5-table' },
    { pattern: "« de » after aimer, vouloir or devoir: « nous aurions aimé d'être prévenus », « j'aurais voulu de vous parler ».",
      criterion: 'correction',
      feedback: "Après aimer, vouloir et devoir, l'infinitif arrive nu.",
      ref: 'a4-erreurs' },
    { pattern: "j'ai dû or j'ai pu where the action did not happen: « nous avons pu trouver une solution » for a solution never found.",
      criterion: 'correction',
      feedback: "La solution n'a pas été trouvée : « nous aurions pu trouver une solution ».",
      ref: 'a6-piege' },
    { pattern: "The conditionnel passé in one turn only (« nous aurions aimé » three times), or used in fewer than three jobs.",
      criterion: 'etendue',
      feedback: "Varie les emplois : un regret, un reproche, un résultat imaginé, une information rapportée.",
      ref: 'a11-plan' },
    { pattern: "No request for the future, or a letter that ends on the reproach.",
      criterion: 'tache',
      feedback: "Termine en regardant devant : « Pourriez-vous nous proposer une nouvelle date ? »",
      ref: 'a11-plan' },
    { pattern: "Paragraphs that mix the reproach and the request, or no linking word between the past and what comes next.",
      criterion: 'coherence',
      feedback: "Un paragraphe par fonction, et un lien pour passer de l'un à l'autre : toutefois, or, d'ici là.",
      ref: 'a11-lecture' },
    { pattern: "A body outside 180 to 250 words, counted without the greeting and the sign-off.",
      criterion: 'tache',
      feedback: "Compte tes mots sans l'appel et sans la signature. En dessous de 180, il manque sans doute un des six morceaux.",
      ref: 'a11-plan' },
  ],
  graderNotes: [
    'Word count EXCLUDES the greeting, the sign-off and the signature. Count the body only, with 10% tolerance (162-275) before criterion « tache » loses a point.',
    'The modelAnswer carries an annotation block after the signature; it is for the learner, not part of the letter, and is not counted.',
    'DO NOT SCORE the si side of a past si clause beyond the one error this lesson names (a conditional directly after si). « si + plus-que-parfait » is the ground of lesson 3 in B2: a correct one is accepted, a wrong pluperfect is not penalised.',
    "Accept the futur antérieur where it is a real future (« d'ici là, nous aurons préparé le dossier »): that is correct and must not be marked as the j'aurai dû error.",
    "Do not score the subjunctive after « regretter que », « j'aurais aimé que »: it is the ground of lessons 5 and 6 in B2. Accept either mood if the sentence is otherwise sound.",
    "Accept « ç'aurait été » and « ça aurait été » alike.",
    'Accept regional formulas and settings: Swiss « régie », Belgian « bourgmestre », « Veuillez agréer » variants, « Salutations distinguées », « Bien à vous ».',
    'Writer gender is unknown: judge agreement with je for internal consistency only.',
    'The criterion « registre » is about DISTANCE in the reproach and about keeping the conditional on unverified claims, not about vocabulary level alone.',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes regrets et tes reproches à voix haute',
  frSub: 'Le conditionnel passé, sans le lire',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    'fr.b1.journalisme.1093',
    'fr.b1.projets-et-futur.1209',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret', 'reproche'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-emplois',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la forme', v: 'avoir ou être au conditionnel + participe', say: fr(E(1213)),
      detail: { title: 'La forme', body: "L'auxiliaire du passé composé, au conditionnel présent ; accord avec être. EN: the passé composé auxiliary, in the present conditional.", say: fr(E(1225)) } },
    { k: 'le regret', v: "j'aurais aimé, voulu, préféré ; je n'aurais pas dû", say: fr(E(1249)),
      detail: { title: 'Le regret', body: "Une envie restée sans suite, ou un acte désapprouvé. EN: a wish that stayed a wish, or an act you disapprove of.", say: fr(E(1252)) } },
    { k: 'le reproche', v: 'tu aurais dû, il aurait fallu, on aurait pu', say: fr(E(1266)),
      detail: { title: 'Le reproche', body: "Plus tu t'éloignes de la personne, plus le reproche passe. EN: distance makes it easier to take.", say: fr(E(1267)) } },
    { k: "l'irréel", v: 'sans, avec, à ta place, sinon', say: fr(E(1301)),
      detail: { title: "L'irréel", body: "Un résultat imaginé pour une situation passée ; jamais de conditionnel après si. EN: an imagined past result; no conditional after si.", say: fr(E(1305)) } },
    { k: 'la politesse', v: "j'aurais voulu vous demander", say: fr(E(1314)),
      detail: { title: 'La politesse', body: "Deux pas en arrière pour une demande d'aujourd'hui. EN: two steps back for a request made now.", say: fr(E(1316)) } },
    { k: 'le on-dit', v: 'selon, d’après + aurait été', say: fr(E(1324)),
      detail: { title: 'Le on-dit', body: "Passé composé : la rédaction signe. Conditionnel passé : elle rapporte. EN: vouched for, or reported.", say: fr(E(1329)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['forme', 'reproche', 'ondit'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu formes le conditionnel passé avec avoir et avec être, tu le sépares du présent par le repère de temps, et tu lui fais faire cinq métiers : regretter, reprocher, imaginer, adoucir, rapporter. Deux pièges restent : le s de aurais, que l'oreille ne te donne pas, et le si, qui refuse le conditionnel. Avant l'examen, reprends ta lettre et entoure chaque aurai ou aurais : pour chacun, écris à côté « demain » ou « jamais ». Puis cherche chaque si, et vérifie qu'aucun conditionnel ne le suit. EN: Circle every aurai and aurais and label each « tomorrow » or « never »; then check that no conditional follows any si.",
  stats: [
    { k: 'La forme', v: 'aurais ou serais + participe' },
    { k: 'Le choix', v: 'devant ou derrière' },
    { k: 'Les métiers', v: 'regret, reproche, irréel, politesse, on-dit' },
    { k: 'Les pièges', v: "j'aurai dû, si j'aurais" },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight. Round 1 recycles lessons 8, 9, 10 and
 *  34 in B1; rounds 2 to 10 follow acts 2 to 10; round 11 is exam-style
 *  (TCF-style gap fills, DELF-style questions on the act 11 letter). Each
 *  round targets a distinct errorTrigger. fold() strips accents, commas and
 *  apostrophes, so no answer turns on one. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, also: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...also], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, also: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer, ...also], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-b1', label: 'Ce que le B1 t’a donné', targets: ['b1-oublie'],
      questions: [
        mc(`${Cap(COND_REF)} : quel est le radical de devoir au conditionnel ?`, ['devr-', 'doiv-', 'dev-'], 0, "devr-, comme au futur : je devrais, j'aurais dû. EN: devr-.", 'a2-recette'),
        tI(`${Cap(COND_REF)} : mets au conditionnel présent.`, 'Tu (devoir) appeler ta sœur ce soir.', 'Tu devrais appeler ta sœur ce soir.', "Ce soir est ouvert : le présent suffit. EN: tonight is still open.", 'a3-paires'),
        mc(`${Cap(SI_REF)} : complète. « Si j'... le temps, je viendrais. »`, ['avais', 'aurais'], 0, "Après si, l'imparfait, jamais le conditionnel. EN: never a conditional after si.", 'a8-erreurs'),
        eS("Si je serais riche, j'achèterais une maison.", "Si j'étais riche, j'achèterais une maison.", `${Cap(SI_REF)} : jamais de conditionnel après si. Au passé, la règle ne change pas. EN: the rule holds in the past too.`, 'a8-erreurs'),
        mc(`${Cap(POLI_REF)} : laquelle est la demande la plus prudente ?`, ['Je voulais vous demander un renseignement.', 'Je veux un renseignement.'], 0, "L'imparfait de politesse recule d'un pas ; j'aurais voulu en fait deux. EN: the polite imparfait steps back.", 'a9-echelle'),
        mc(`${Cap(MEDIAS_REF)} : « Le ministre démissionnerait. » Est-ce confirmé ?`, ['Non', 'Oui'], 0, "Le conditionnel rapporte sans garantir. Au passé : le ministre aurait démissionné. EN: reported, not confirmed.", 'a10-cartes'),
        tI('Et maintenant au passé : recule dans le temps.', 'Tu devrais appeler ta sœur.', 'Tu aurais dû appeler ta sœur.', "L'occasion est passée : devrais devient aurais dû. EN: the chance has gone.", 'a3-choisir'),
        lC('Écoute. Cette phrase regarde-t-elle devant ou derrière ?', fr(E(1201)), ['derrière', 'devant'], 0, "Aurais pu : une possibilité passée. EN: looking back.", 'a1-scene'),
      ],
    },
    {
      id: 'r2-forme', label: 'La forme', targets: ['auxiliaire-faux'],
      questions: [
        mc('Le conditionnel passé se forme avec...', ['avoir ou être au conditionnel présent, puis le participe', "avoir ou être à l'imparfait, puis le participe", 'le radical du futur, puis le participe'], 0, "L'imparfait donnerait le plus-que-parfait. EN: the imparfait gives the pluperfect.", 'a2-recette'),
        tI('Mets au conditionnel passé.', 'devoir · je', "j'aurais dû", 'aurais + dû. EN: aurais plus dû.', 'a2-construire'),
        tI('Mets au conditionnel passé.', 'partir · elle', 'elle serait partie', "Partir prend être, et le participe s'accorde. EN: être, with agreement.", 'a2-etre'),
        eS("J'aurais allé au cinéma avec toi.", 'Je serais allé au cinéma avec toi.', "Aller prend être, comme au passé composé. EN: aller takes être.", 'a2-erreurs'),
        eS('Elle serait venu plus tôt.', 'Elle serait venue plus tôt.', "Avec être, l'accord avec le sujet : venue. EN: agreement with être.", 'a2-erreurs'),
        mc("Où se place pas dans « je n'aurais pas dû » ?", ["après l'auxiliaire", 'après le participe', 'avant ne'], 0, "Ne et pas entourent l'auxiliaire. EN: around the auxiliary.", 'a2-etre'),
        tI('Mets au conditionnel passé.', 'rester · nous', 'nous serions restés', 'serions + restés, accordé. EN: serions plus restés.', 'a2-construire', ['nous serions restées']),
        lC('Écoute. Combien de personnes seraient restées ?', fr(E(1226)), ['plusieurs', 'une'], 0, "Le i de serions s'entend. EN: the i is audible.", 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-repere', label: 'Devant ou derrière', targets: ['present-pour-passe'],
      questions: [
        mc('« Tu devrais appeler ta sœur » : de quel moment parle-t-on ?', ['de maintenant ou de plus tard', "d'hier"], 0, "Devrais regarde devant. EN: devrais looks ahead.", 'a3-paires'),
        tI('Recule la phrase dans le temps.', "J'aimerais voir ce film.", "J'aurais aimé voir ce film.", "Aimerais devient aurais aimé. EN: aimerais becomes aurais aimé.", 'a3-choisir'),
        mc('Un souhait sur hier, pas un fait : « Hier soir, je ... bien resté à la maison. »', ['serais', 'serai', 'suis'], 0, "Hier est fini, et c'est un souhait : serais resté. EN: serais resté.", 'a3-piege'),
        eS('La prochaine fois, tu aurais dû me prévenir.', 'La prochaine fois, tu devrais me prévenir.', "La prochaine fois n'est pas arrivée : le conseil regarde devant. EN: next time is ahead.", 'a3-piege'),
        mc('Devant aurait été, on dit le plus souvent...', ['ça', 'ce'], 0, "Ça aurait été bien. EN: ça.", 'a3-check'),
        tI('Mets au conditionnel passé.', 'Ce serait bien de partir tôt.', 'Ça aurait été bien de partir tôt.', "Ce serait devient ça aurait été. EN: ce serait becomes ça aurait été.", 'a3-table', ["Ç'aurait été bien de partir tôt."]),
        mc('Laquelle regarde devant ?', ["Un jour, j'aimerais vivre à Dakar.", "À ce moment-là, j'aurais dû appeler."], 0, "Un jour : un moment encore ouvert. EN: still open.", 'a3-table'),
        lC('Écoute. La soirée est-elle passée ?', 'Tu aurais dû venir hier soir.', ['Oui', 'Non'], 0, "Hier soir, et aurais dû : c'est derrière. EN: it is behind.", 'a3-texte'),
      ],
    },
    {
      id: 'r4-regret', label: 'Le regret', targets: ['regret-present'],
      questions: [
        mc('Lequel dit le regret le plus fort ?', ["j'aurais voulu", "j'aurais aimé"], 0, "Vouloir engage ta volonté. EN: vouloir is stronger.", 'a4-cartes'),
        tI('Exprime le regret avec aimer.', "Je n'ai pas connu mon grand-père.", "J'aurais aimé connaître mon grand-père.", "Aurais aimé + infinitif nu. EN: bare infinitive.", 'a4-construire'),
        eS("J'aurais aimé de connaître mon grand-père.", "J'aurais aimé connaître mon grand-père.", "Pas de de après aimer. EN: no de.", 'a4-erreurs'),
        mc('Tu as accepté un poste, et tu le regrettes. Tu dis...', ["Je n'aurais pas dû accepter ce poste.", "J'aurais aimé accepter ce poste."], 0, "Un acte fait se juge avec devoir au négatif. EN: negative devoir.", 'a4-cartes'),
        eS('Je regrette de ne pas partir plus tôt hier.', 'Je regrette de ne pas être parti plus tôt hier.', "Une action passée : l'infinitif passé. EN: the past infinitive.", 'a4-erreurs', ['Je regrette de ne pas être partie plus tôt hier.']),
        tI('Mets au conditionnel passé.', 'Elle (vouloir) apprendre le piano plus jeune.', 'Elle aurait voulu apprendre le piano plus jeune.', 'aurait + voulu. EN: aurait voulu.', 'a4-ecoute'),
        mc("« J'aurais préféré rester à Lyon. » Où est la personne aujourd'hui ?", ['ailleurs qu’à Lyon', 'à Lyon'], 0, "Préférer nomme le chemin qui n'a pas été pris. EN: the road not taken.", 'a4-construire'),
        lC('Écoute. La personne a-t-elle abandonné le piano ?', "Je n'aurais jamais dû abandonner le piano.", ['Oui', 'Non'], 0, "Je n'aurais jamais dû : l'acte est fait. EN: it happened.", 'a4-texte'),
      ],
    },
    {
      id: 'r5-reproche', label: 'Le reproche', targets: ['reproche-brutal'],
      questions: [
        mc('Laquelle vise le moins la personne ?', ['il aurait fallu', 'tu aurais dû', 'tu aurais au moins pu'], 0, "Il aurait fallu nomme le travail. EN: the task, not the person.", 'a5-cartes'),
        tI('Transforme en reproche partagé, avec on.', 'Tu aurais dû en parler avant.', 'On aurait pu en parler avant.', "On partage la faute. EN: shared blame.", 'a5-table', ['On aurait dû en parler avant.']),
        mc("Qu'ajoute au moins dans « tu aurais au moins pu répondre » ?", ['de la colère', 'de la politesse'], 0, "Au moins durcit le reproche. EN: it hardens it.", 'a5-table'),
        eS('Hier, vous devriez nous consulter.', 'Hier, vous auriez dû nous consulter.', "Hier est fini : le reproche regarde derrière. EN: yesterday is over.", 'a5-piege'),
        tI('Mets au conditionnel passé.', "Il (falloir) vérifier l'adresse.", "Il aurait fallu vérifier l'adresse.", 'aurait + fallu. EN: aurait fallu.', 'a5-doser'),
        mc('Ton chef a changé ton planning sans te prévenir. La phrase la plus diplomatique ?', ["J'aurais apprécié d'être tenu au courant.", 'Vous auriez au moins pu me le dire.', 'Vous deviez me prévenir.'], 0, "Tu parles de toi : le reproche passe. EN: you speak about yourself.", 'a5-doser'),
        mc("« Ce n'est pas un reproche, mais... » sert à...", ['adoucir le reproche qui suit', 'annuler le reproche'], 0, "Le reproche arrive quand même, mais plus doux. EN: it still comes, softened.", 'a5-texte'),
        lC('Écoute. Reproche ou conseil ?', fr(E(1264)), ['un reproche', 'un conseil'], 0, "Auriez dû : l'acte manqué est derrière. EN: looking back.", 'a5-histoire'),
      ],
    },
    {
      id: 'r6-modaux', label: 'Dû, pu, voulu', targets: ['modal-confondu'],
      questions: [
        mc('« Il a dû oublier » veut dire...', ['il a sans doute oublié', "il était obligé d'oublier"], 0, "Devoir au passé composé : une supposition. EN: a guess.", 'a6-cartes'),
        mc('« Il aurait dû arriver à midi. » Est-il arrivé à midi ?', ['Non', 'Oui'], 0, "L'attente est déçue. EN: he did not.", 'a6-cartes'),
        tI('Complète.', "Je suis resté, mais j'(devoir) partir avant la fin.", "Je suis resté, mais j'aurais dû partir avant la fin.", "Tu es resté : l'obligation n'a pas été remplie. EN: not done.", 'a6-piege'),
        eS("Le taxi était en panne : j'aurais dû prendre le métro, et je l'ai pris.", "Le taxi était en panne : j'ai dû prendre le métro, et je l'ai pris.", "Tu l'as pris : c'est une obligation remplie. EN: it happened.", 'a6-piege'),
        mc('Tu as couru sur la glace sans tomber. On te dit...', ['Tu aurais pu te blesser.', 'Tu as pu te blesser.'], 0, "Un danger évité : aurais pu. EN: a danger avoided.", 'a6-construire'),
        tI('Complète.', "Bonne nouvelle : j'(pouvoir) finir le rapport à temps.", "Bonne nouvelle : j'ai pu finir le rapport à temps.", "C'est fait : j'ai pu. EN: done.", 'a6-table'),
        mc("« J'ai voulu t'appeler » : as-tu essayé ?", ['Oui', 'Non'], 0, "J'ai voulu : un essai. EN: you tried.", 'a6-table'),
        lC('Écoute. Le danger a-t-il eu lieu ?', fr(E(1288)), ['Non, il a été évité', 'Oui'], 0, "Aurait pu : le pire n'est pas arrivé. EN: the worst did not happen.", 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-s', label: 'Aurai ou aurais', targets: ['aurai-pour-aurais'],
      questions: [
        eS("J'aurai dû te le dire plus tôt.", "J'aurais dû te le dire plus tôt.", "Un regret : toujours aurais, avec un s. EN: always aurais.", 'a7-piege'),
        mc("Demain à midi, j'... fini le rapport.", ['aurai', 'aurais'], 0, "Un moment réel à venir : aurai. EN: a real future moment.", 'a7-paires'),
        tI('Complète.', "Sans ton aide, je n'(avoir) jamais réussi.", "Sans ton aide, je n'aurais jamais réussi.", "Sans pose une condition : aurais. EN: a condition.", 'a7-construire'),
        mc("Quelle paire l'oreille sépare-t-elle facilement ?", ['nous aurons et nous aurions', "j'aurai et j'aurais"], 0, "Le i de aurions s'entend. EN: the i is audible.", 'a7-indices'),
        eS('Vous aurez dû recevoir un courriel hier.', 'Vous auriez dû recevoir un courriel hier.', "Hier, et une attente déçue : auriez. EN: auriez.", 'a7-piege'),
        tI('Complète.', 'Dès que tu (avoir) lu le contrat, signe-le.', 'Dès que tu auras lu le contrat, signe-le.', "Dès que, et un futur réel : auras. EN: a real future.", 'a7-construire'),
        mc("« J'aurai dû t'écrire » : que lit ton lecteur ?", ['une faute : un regret au futur', 'un regret poli'], 0, "Sans s, le regret n'a plus de sens. EN: without s it makes no sense.", 'a7-check'),
        lC('Écoute. Promesse ou regret ?', fr(E(1293)), ['une promesse', 'un regret'], 0, "Aurons, sans i : un futur. EN: aurons, a future.", 'a7-ecoute'),
      ],
    },
    {
      id: 'r8-irreel', label: "L'irréel", targets: ['si-conditionnel'],
      questions: [
        eS("Si j'aurais su, j'aurais pris un autre train.", "Si j'avais su, j'aurais pris un autre train.", "Après si, jamais de conditionnel. EN: never after si.", 'a8-erreurs'),
        mc("Dans « Sans ton aide, je n'aurais jamais réussi », as-tu réussi ?", ['Oui', 'Non'], 0, "L'irréel imagine le monde sans l'aide. EN: in reality, yes.", 'a8-construire'),
        tI('Mets au conditionnel passé.', 'Avec un peu de chance, nous (gagner).', 'Avec un peu de chance, nous aurions gagné.', 'aurions + gagné. EN: aurions gagné.', 'a8-cartes'),
        mc('Quelle forme prend le verbe après si, pour le passé ?', ['le plus-que-parfait', 'le conditionnel passé'], 0, `Si j'avais su : ${PQP_REF} le construit. EN: the pluperfect.`, 'a8-si'),
        eS("Heureusement qu'il a freiné, sinon il y aurait un accident.", "Heureusement qu'il a freiné, sinon il y aurait eu un accident.", "Le résultat imaginé est au passé : il y aurait eu. EN: a past unreal result takes the past conditional.", 'a8-erreurs'),
        tI('Mets au conditionnel passé.', 'À ta place, je (refuser).', "À ta place, j'aurais refusé.", 'aurais + refusé. EN: aurais refusé.', 'a8-cartes'),
        mc("« Sinon, le vol s'est très bien passé. » Ici, sinon veut dire...", ['à part ça', 'dans le cas contraire'], 0, "Suivi du passé composé, sinon parle du réel. EN: here it means apart from that.", 'a8-texte'),
        lC('Écoute. Avez-vous raté le train ?', fr(E(1306)), ['Non', 'Oui'], 0, "Le retard est imaginé. EN: the delay is imagined.", 'a8-construire'),
      ],
    },
    {
      id: 'r9-politesse', label: 'La politesse', targets: ['politesse-mal-dosee'],
      questions: [
        mc('Laquelle est la plus prudente ?', ["J'aurais voulu vous demander un renseignement.", 'Je voudrais un renseignement.', 'Je veux un renseignement.'], 0, "Deux pas en arrière. EN: two steps back.", 'a9-echelle'),
        mc("« J'aurais voulu vous demander un renseignement. » La demande est pour quand ?", ['maintenant', 'hier'], 0, "Le passé ajoute de la distance. EN: distance, not time.", 'a9-histoire'),
        eS("J'aurais aimé de savoir si la salle est libre jeudi.", "J'aurais aimé savoir si la salle est libre jeudi.", "Pas de de après aimer. EN: no de.", 'a9-erreurs'),
        tI("Recule la demande d'un pas de plus.",'Je voudrais vous demander un renseignement.', "J'aurais voulu vous demander un renseignement.", 'voudrais devient aurais voulu. EN: aurais voulu.', 'a9-echelle'),
        mc('Tu demandes le sel à un ami. Quelle forme ?', ['Tu pourrais me passer le sel ?', "J'aurais voulu te demander le sel."], 0, "Entre amis, pour le sel, la forme lourde sonne ironique. EN: keep it light.", 'a9-erreurs'),
        tI('Adoucis la question.', 'Vous avez vu mes clés ?', "Vous n'auriez pas vu mes clés ?", "Le conditionnel passé et la négation n'accusent personne. EN: it accuses nobody.", 'a9-construire', ["Vous n'auriez pas vu mes clés, par hasard ?", 'Auriez-vous vu mes clés ?']),
        mc('Dans le courriel de Yanis, « vous auriez dû la recevoir » est...', ['un reproche discret', 'un conseil'], 0, "Une attente déçue, dite poliment. EN: a polite letdown.", 'a9-texte'),
        lC('Écoute. Qui parle probablement ?', fr(E(1318)), ["quelqu'un qui écrit une lettre formelle", 'un ami au café'], 0, "Souhaité, précisions : le registre soutenu. EN: formal register.", 'a9-construire'),
      ],
    },
    {
      id: 'r10-presse', label: 'Le fait et le on-dit', targets: ['fait-rapporte'],
      questions: [
        mc('« Le suspect aurait été arrêté. » Est-ce confirmé ?', ['Non', 'Oui'], 0, "Conditionnel passé : rapporté. EN: reported.", 'a10-cartes'),
        tI('Rapporte sans garantir.', 'Le voleur est entré par la fenêtre.', 'Le voleur serait entré par la fenêtre.', "Entrer prend être : serait entré. EN: serait entré.", 'a10-trier'),
        mc('Tu étais sur place et tu as vu les pompiers. Tu écris...', ['Les pompiers sont intervenus vers minuit.', 'Les pompiers seraient intervenus vers minuit.'], 0, "Ce que tu as vu, tu le signes. EN: what you saw, you sign.", 'a10-piege'),
        eS("Le suspect a été arrêté hier soir, mais rien n'est confirmé.", "Le suspect aurait été arrêté hier soir, mais rien n'est confirmé.", "Rien n'est confirmé : la rédaction ne signe pas, donc aurait été arrêté. EN: unconfirmed, so the conditional.", 'a10-piege'),
        mc('« Le suspect serait en fuite » et « le suspect aurait fui » : quelle différence ?', ['un état actuel, puis un fait passé', 'aucune'], 0, "Présent : maintenant ; passé : ce qui se serait produit. EN: now, against what happened.", 'a10-cartes'),
        tI('Rapporte sans garantir.', "L'entreprise a licencié trente salariés.", "L'entreprise aurait licencié trente salariés.", 'a devient aurait. EN: a becomes aurait.', 'a10-trier'),
        mc('Dans la brève de Genève, quel fait la rédaction garantit-elle ?', ["l'ouverture d'une enquête", 'les deux blessés', "l'origine du feu"], 0, "Une enquête a été ouverte : passé composé. EN: passé composé.", 'a10-texte'),
        lC('Écoute. Le chiffre est-il confirmé ?', fr('fr.b1.journalisme.1093'), ['Non', 'Oui'], 0, "Aurait fait : le bilan est rapporté. EN: the figure is reported.", 'a10-bulletin'),
      ],
    },
    {
      id: 'r11-examen', label: "Comme à l'examen", targets: ['lettre-incomplete'],
      questions: [
        mc("Style TCF. Choisis la forme correcte : « Sans la grève d'hier, nous ... à l'heure. »", ['serions arrivés', 'aurions arrivé', 'serons arrivés', 'arriverions'], 0, "Arriver prend être, accordé ; sans pose la condition. EN: être, agreed.", 'a2-etre'),
        mc("Style TCF : « L'an dernier, il ... prévenir les habitants plus tôt. »", ['aurait fallu', 'aura fallu', 'faudrait', 'aurait falloir'], 0, "L'an dernier est fini : aurait fallu. EN: aurait fallu.", 'a5-cartes'),
        mc("Style TCF : « Selon le gardien, la décision ... en mai. »", ['aurait été prise', 'aurait été pris', 'serait prendre', 'aura été prise'], 0, "Passif au conditionnel passé, accordé avec décision. EN: agreed with la décision.", 'a10-cartes'),
        mc("Style DELF, la lettre d'Inès : quel est son but principal ?", ["annoncer l'annulation et proposer une suite", 'se plaindre du gardien', 'inviter les voisins à une réunion'], 0, "Elle annonce, regrette, reproche, puis propose. EN: announce and propose.", 'a11-lecture'),
        mc("Style DELF : « La mairie aurait pu, elle aussi, nous prévenir. » Le ton d'Inès est...", ['mesuré', 'furieux', 'indifférent'], 0, "Aussi et aurait pu gardent la distance. EN: measured.", 'a11-lecture'),
        tI('Style TCF, phrase à compléter.', 'Nous (aimer) être prévenus plus tôt.', 'Nous aurions aimé être prévenus plus tôt.', 'aurions + aimé. EN: aurions aimé.', 'a11-plan'),
        eS("Il aurait suffit d'un simple appel.", "Il aurait suffi d'un simple appel.", "Le participe de suffire est suffi, sans t. EN: suffi, no t.", 'a11-usages'),
        lC('Style TCF, compréhension orale. Écoute : que fait la personne ?', fr(E(1346)), ['elle exprime un regret poli', 'elle donne un ordre', 'elle fait une promesse'], 0, "J'aurais voulu : un regret, avec distance. EN: a polite regret.", 'a11-scenario'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b2.22 does. */
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
  type: 'reviewDeck',
  id: 'a11-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'la forme', back: 'aurais ou serais + participe', say: fr(E(1213)) },
    { front: 'devant ou derrière', back: 'tu devrais, tu aurais dû', say: fr(E(1237)) },
    { front: 'le regret', back: "j'aurais aimé, j'aurais voulu", say: fr(E(1249)) },
    { front: "l'acte regretté", back: "je n'aurais pas dû", say: fr(E(1259)) },
    { front: 'le reproche partagé', back: 'on aurait pu, il aurait fallu', say: fr(E(1266)) },
    { front: 'la supposition', back: 'il a dû', say: fr(E(1275)) },
    { front: 'le piège du s', back: "j'aurai (demain), j'aurais (jamais)", say: fr(E(1298)) },
    { front: 'la politesse', back: "j'aurais voulu vous demander", say: fr(E(1314)) },
    { front: 'le on-dit', back: 'selon..., aurait été', say: fr(E(1324)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Le pas en arrière, en résumé',
  body: `${REFRAME} Tu as construit ce temps avec deux morceaux que tu avais déjà, et il te sert maintenant à regretter, à reprocher sans blesser, à imaginer ce qui aurait pu arriver, à adoucir une demande et à rapporter une nouvelle sans la signer. ${Cap(SI_PASSE_REF)} ajoute l'autre moitié : si j'avais su, j'aurais pris un autre train. EN: Next, lesson 3 in B2 builds the full past si pair.`,
  points: [
    "La forme : avoir ou être au conditionnel présent, puis le participe.",
    'Le repère choisit : un moment fini, le passé ; un moment ouvert, le présent.',
    'Cinq métiers : regret, reproche, irréel, politesse, on-dit.',
    "Deux pièges : le s de aurais, et le si qui refuse le conditionnel.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recul', 'piege', 'irreel'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Ta lettre',
    opener: {
      line: "À toi d'écrire : ton regret, ton reproche mesuré, ce qui aurait pu être, et ce que tu demandes maintenant. EN: Your turn to write: your regret, a measured reproach, what could have been, and what you ask for now.",
      imageRef: 'lessons/conditionnel-passe/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ta lettre et passé l'examen : quatre-vingt-huit questions, onze manches. EN: You wrote your letter and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 140,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-mission', 'a11-parler', 'a11-cheat', 'a11-progress', 'a11-quiz'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_TASK, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS and ERROR TRIGGERS
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-b1', title: 'Les formes du B1', format: 'flashcard' as const, coach: "Dis chaque phrase au présent, puis recule-la dans le temps. EN: say each one, then move it back in time.", items: [E(1200), E(1236), E(1234), E(1238), E(1244), E(1242)], audio: AUDIO },
  { id: 'd-forme', title: 'Avoir ou être', format: 'mcq' as const, coach: "Le même choix qu'au passé composé. EN: the same choice as in the passé composé.", q: 'Elle ... partie avant la fin.', opts: ['serait', 'aurait'], correct: 0, why: "Partir prend être. EN: partir takes être.", items: [E(1213), E(1214), E(1219), E(1220), E(1221), E(1223)], audio: AUDIO },
  { id: 'd-repere', title: 'Devant ou derrière', format: 'sort' as const, coach: "Deux piles : ce qui reste possible, et ce qui est passé. EN: still possible, or over.", buckets: ['devant', 'derrière'], items: [E(1232), E(1233), E(1236), E(1237), E(1238), E(1239)], audio: AUDIO },
  { id: 'd-regret', title: 'Quatre regrets', format: 'flashcard' as const, coach: "Pour chaque carte, dis ce que tu regrettes vraiment. EN: say what you really regret.", items: [E(1245), E(1246), E(1247), E(1248), E(1249), E(1252)], audio: AUDIO },
  { id: 'd-reproche', title: 'Direct ou diplomate', format: 'sort' as const, coach: "Deux piles : ce qui vise la personne, et ce qui garde la distance. EN: aimed at the person, or at a distance.", buckets: ['direct', 'diplomatique'], items: [E(1263), E(1273), E(1268), E(1265), E(1266), E(1267)], audio: AUDIO },
  { id: 'd-modaux', title: 'Arrivé ou pas', format: 'mcq' as const, coach: "Demande-toi si l'action a eu lieu. EN: ask whether it happened.", q: "Il n'est pas venu : il ... oublier.", opts: ['a dû', 'aurait dû'], correct: 0, why: "Une supposition : a dû. EN: a guess.", items: [E(1275), E(1276), E(1277), E(1278), E(1279), E(1280)], audio: AUDIO },
  { id: 'd-s', title: 'Avec ou sans s', format: 'mcq' as const, coach: "Demain, ou jamais : le sens écrit la lettre. EN: tomorrow or never.", q: "J'... dû te le dire plus tôt.", opts: ['aurais', 'aurai'], correct: 0, why: "Un regret : aurais. EN: a regret.", items: [E(1289), E(1290), E(1291), E(1292), E(1295), E(1296)], audio: AUDIO },
  { id: 'd-irreel', title: 'La condition sans si', format: 'flashcard' as const, coach: "Pour chaque phrase, redis la condition avec tes propres mots. EN: restate the condition.", items: [E(1301), E(1302), E(1303), E(1304), E(1305), E(1306)], audio: AUDIO },
  { id: 'd-politesse', title: 'Demande ou regret', format: 'sort' as const, coach: "Deux piles : une demande polie pour maintenant, un vrai regret. EN: a polite request, or a real regret.", buckets: ['une demande polie', 'un vrai regret'], items: [E(1314), E(1315), E(1319), E(1249), E(1251), E(1254)], audio: AUDIO },
  { id: 'd-presse', title: 'Vérifié ou rapporté', format: 'sort' as const, coach: "Deux piles : ce que la rédaction signe, ce qu'elle rapporte. EN: signed, or reported.", buckets: ['vérifié', 'rapporté'], items: [E(1329), E(1335), E(1337), E(1324), E(1327), E(1331)], audio: AUDIO },
  { id: 'd-lettre', title: 'La lettre, morceau par morceau', format: 'flashcard' as const, coach: "Lis chaque phrase et dis quel morceau du plan elle occupe. EN: name the part of the plan.", items: [E(1340), E(1341), E(1342), E(1343), E(1344), E(1348)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'b1-oublie', description: 'Loses the B1 ground this form stands on: the conditional stems, the si rule, the polite imparfait, the news conditional, so the past form is built on sand.', detectOn: ['a1-reperer', 'a1-check', 'a3-paires'], drill: 'd-b1', retest: 'd-b1' },
  { id: 'auxiliaire-faux', description: 'Builds the past conditional with the wrong auxiliary, forgets agreement with être, or puts pas after the participle.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-forme', retest: 'd-forme' },
  { id: 'present-pour-passe', description: 'Keeps the present conditional for a moment that is over, so a reproach arrives as advice for next time, or does the opposite for an open moment.', detectOn: ['a3-choisir', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-repere', retest: 'd-repere' },
  { id: 'regret-present', description: 'States a closed regret with the present conditional, adds de after aimer or devoir, or uses the present infinitive after regretter de for a past action.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-regret', retest: 'd-regret' },
  { id: 'reproche-brutal', description: 'Delivers every reproach at the person (tu, vous, au moins) or in the curt imparfait, never reaching for il aurait fallu, on aurait pu or j’aurais apprécié.', detectOn: ['a5-doser', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-reproche', retest: 'd-reproche' },
  { id: 'modal-confondu', description: 'Confuses j’ai dû with j’aurais dû (or pu, voulu), so a supposition becomes an obligation, a success becomes a missed chance, or an attempt disappears.', detectOn: ['a6-construire', 'a6-piege', 'a6-check'], drill: 'd-modaux', retest: 'd-modaux' },
  { id: 'aurai-pour-aurais', description: 'Writes the futur antérieur for a regret or reproach (j’aurai dû), or adds an s to a real future moment, choosing by ear.', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-s', retest: 'd-s' },
  { id: 'si-conditionnel', description: 'Puts the conditional after si (si j’aurais su), or narrates an unreal past result in the present conditional (the spoken imparfait, sinon il y avait, is informal and not counted as an error).', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a11-mission'], drill: 'd-irreel', retest: 'd-irreel' },
  { id: 'politesse-mal-dosee', description: 'Uses the polite past for trivial requests between friends, or reads j’aurais voulu vous demander as a request about yesterday.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check'], drill: 'd-politesse', retest: 'd-politesse' },
  { id: 'fait-rapporte', description: 'Reports an unverified past event in the passé composé, taking on a guarantee, or hedges a fact the writer witnessed.', detectOn: ['a10-trier', 'a10-piege', 'a10-check', 'a11-mission'], drill: 'd-presse', retest: 'd-presse' },
  { id: 'lettre-incomplete', description: 'Writes the letter with correct forms but missing jobs: no regret, no reported information, no request for the future, or a reproach that closes the door.', detectOn: ['a11-plan', 'a11-scenario', 'a11-mission'], drill: 'd-lettre', retest: 'd-lettre' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` in this lesson names an option position. */
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
 *  REFERENCE SHEETS (layer deep: teach and table only)
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-forme', 'La forme et le piège du s', ['la règle', 'avoir et être', 'aurai ou aurais'], [
    teach('sheet-forme-teach', 'Deux morceaux que tu as déjà',
      `${REFRAME} L'auxiliaire est au conditionnel présent, celui de ${COND_REF} : aurais, serais. Le participe et le choix entre avoir et être sont ceux du passé composé ; avec être, le participe s'accorde avec le sujet. EN: ${REFRAME_EN} Auxiliary in the present conditional, participle and auxiliary choice as in the passé composé.`),
    table('sheet-forme-avoir', 'Avec avoir : devoir', ['Personne', 'Conditionnel passé'], [
      ['je', "j'aurais dû"], ['tu', 'tu aurais dû'], ['il, elle, on', 'il aurait dû'],
      ['nous', 'nous aurions dû'], ['vous', 'vous auriez dû'], ['ils, elles', 'ils auraient dû'],
    ]),
    table('sheet-forme-etre', 'Avec être : partir', ['Personne', 'Conditionnel passé'], [
      ['je', 'je serais parti, partie'], ['tu', 'tu serais parti, partie'], ['il, elle', 'il serait parti, elle serait partie'],
      ['nous', 'nous serions partis, parties'], ['vous', 'vous seriez parti, partie, partis, parties'], ['ils, elles', 'ils seraient partis, elles seraient parties'],
    ]),
    table('sheet-forme-s', 'Aurai ou aurais', ['Forme', 'Temps', 'Quand', 'Exemple'], [
      ["j'aurai fini", 'futur antérieur', 'un moment réel à venir', fr(E(1291))],
      ["j'aurais fini", 'conditionnel passé', 'ce qui aurait eu lieu', fr(E(1292))],
      ['nous aurons', 'futur antérieur', 'audible : pas de i', fr(E(1293))],
      ['nous aurions', 'conditionnel passé', 'audible : le i', fr(E(1294))],
      ["j'aurais dû", 'conditionnel passé', 'toujours pour un regret', fr(E(1298))],
    ]),
  ]),
  sheet('sheet-choisir', 'Devant ou derrière', ['les paires', 'les repères de temps'], [
    teach('sheet-choisir-teach', 'Le repère choisit',
      `Chaque forme de ${COND_REF} a son double au passé. Le conditionnel présent regarde un moment encore ouvert ; le conditionnel passé regarde un moment fini. Devant aurait, on dit ça (ou ç' à l'écrit soigné), pas ce. EN: every present-conditional form has a past twin; the time marker decides.`),
    table('sheet-choisir-paires', 'Les paires', ['Devant', 'Derrière'], [
      ['tu devrais', 'tu aurais dû'],
      ["j'aimerais", "j'aurais aimé"],
      ['ce serait bien', 'ça aurait été bien'],
      ['il faudrait', 'il aurait fallu'],
      ['on pourrait', 'on aurait pu'],
      ['je voudrais', "j'aurais voulu"],
    ]),
    table('sheet-choisir-reperes', 'Les repères', ['Repère', 'Direction'], [
      ['ce soir, maintenant, un jour, la prochaine fois', 'devant : conditionnel présent'],
      ['hier, samedi dernier, à ce moment-là, depuis longtemps', 'derrière : conditionnel passé'],
    ]),
  ]),
  sheet('sheet-regret', 'Regretter et reprocher', ['les regrets', "l'échelle du reproche"], [
    teach('sheet-regret-teach', 'Une porte fermée',
      "Le regret regarde une envie restée sans suite (j'aurais aimé, voulu, préféré) ou un acte désapprouvé (je n'aurais pas dû). Le reproche regarde ce que l'autre aurait dû faire : plus la forme s'éloigne de la personne, plus il passe. EN: regret looks at a closed door; a reproach passes better at a distance."),
    table('sheet-regret-regrets', 'Les regrets', ['Forme', 'Ce qu’elle dit', 'Exemple'], [
      ["j'aurais aimé", 'une envie légère', fr(E(1249))],
      ["j'aurais voulu", 'une volonté déçue', fr(E(1250))],
      ["j'aurais préféré", "l'autre chemin", fr(E(1251))],
      ["je n'aurais pas dû", 'un acte regretté', fr(E(1252))],
      ['je regrette de + infinitif passé', 'sans conditionnel', fr(E(1256))],
    ]),
    table('sheet-regret-reproche', "L'échelle du reproche", ['Forme', 'Qui est visé', 'Effet'], [
      ["tu n'aurais pas dû", 'toi', 'direct'],
      ['tu aurais au moins pu', 'toi', 'sec, fâché'],
      ['vous auriez dû', 'vous', 'ferme et poli'],
      ['il aurait fallu', 'personne', 'neutre'],
      ["j'aurais apprécié", 'moi', 'diplomatique'],
      ['on aurait pu, nous aurions dû', 'nous', 'partagé'],
    ]),
  ]),
  sheet('sheet-modaux', 'Devoir, pouvoir, vouloir au passé', ['passé composé ou conditionnel passé'], [
    teach('sheet-modaux-teach', 'Est-ce arrivé',
      "Au passé composé, devoir, pouvoir et vouloir racontent ce qui a eu lieu, ce qu'on a tenté, ou ce qu'on suppose. Au conditionnel passé, ils regardent ce qui aurait dû ou pu avoir lieu. EN: the passé composé happened or was tried; the past conditional did not."),
    table('sheet-modaux-table', 'Sept formes', ['Forme', 'Sens', 'Exemple'], [
      ["j'ai dû", 'obligation remplie', fr(E(1277))],
      ['il a dû', 'supposition', fr(E(1275))],
      ["j'aurais dû", 'obligation manquée, attente déçue', fr(E(1278))],
      ["j'ai pu", 'réussite', fr(E(1279))],
      ["j'aurais pu", 'chance ratée, danger évité', fr(E(1281))],
      ["j'ai voulu", 'essai', fr(E(1282))],
      ["j'aurais voulu", 'regret, ou politesse', fr(E(1283))],
    ]),
  ]),
  sheet('sheet-emplois', 'Les emplois et la lettre', ["l'irréel", 'la politesse', 'la presse', 'le plan de la lettre'], [
    teach('sheet-emplois-teach', 'Cinq métiers, une forme',
      `${REFRAME} La condition d'un irréel tient souvent dans un groupe (sans, avec, à ta place, sinon) ; avec si, c'est le plus-que-parfait, jamais le conditionnel (${SI_PASSE_REF}). La politesse au passé recule de deux pas. En presse, le passé composé signe, le conditionnel passé rapporte. EN: five jobs, one form.`),
    table('sheet-emplois-irreel', "L'irréel, sans si", ['Condition', 'Exemple'], [
      ['sans', fr(E(1301))],
      ['avec', fr(E(1302))],
      ['à ta place', fr(E(1303))],
      ['sinon', fr(E(1305))],
      ['un moment', fr(E(1306))],
      ['si + plus-que-parfait', fr('fr.b1.projets-et-futur.1352')],
    ]),
    table('sheet-emplois-politesse', 'Du plus direct au plus prudent', ['Forme', 'Effet'], [
      ['Je veux un renseignement.', 'une décision'],
      ['Je voudrais un renseignement.', 'la demande normale'],
      ['Je voulais vous demander un renseignement.', "l'imparfait de politesse"],
      ["J'aurais voulu vous demander un renseignement.", 'deux pas en arrière'],
    ]),
    table('sheet-emplois-presse', 'Signé ou rapporté', ['Temps', 'Qui garantit', 'Exemple'], [
      ['passé composé', 'la rédaction', fr(E(1329))],
      ['conditionnel passé', 'personne encore', fr(E(1324))],
      ['conditionnel présent', 'personne : un état actuel', fr('fr.b1.projets-et-futur.762')],
    ]),
    table('sheet-emplois-lettre', 'Le plan de la lettre', ['Morceau', 'Forme', 'Exemple'], [
      ['pourquoi tu écris', 'présent', fr(E(1340))],
      ["ce que tu sais sans l'avoir vérifié", 'conditionnel passé', fr(E(1344))],
      ['ton regret, ta part', "j'aurais aimé, j'aurais dû", fr(E(1346))],
      ['le reproche en diplomate', 'il aurait suffi, nous aurions pu', fr(E(1342))],
      ['ce qui aurait pu être', 'sans cette annulation', fr(E(1347))],
      ['la suite', 'conditionnel présent', fr(E(1348))],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-02-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b2-02-lundi': "Act 1 reading: Chloé's apology email, ONE VOICE, one take, a young Montréal woman reading her own message aloud, sincere and a little embarrassed. The narration frame (first and last sentences) in a neutral second voice. No stress on the conditionals: they are ordinary French.",
  'rec-b2-02-forme': 'The two form decks (act 2). One coach voice. Say the auxiliary and the participle as one breath, never as two items. Read venu and venue, parti and partie identically: the card claims the agreement is silent.',
  'rec-b2-02-forme-ecoute': 'REQUIRED FOR THE EAR MISSION (act 2): eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace. No help on serions or the agreements.',
  'rec-b2-02-awa-ecoute': "REQUIRED FOR THE EAR MISSION (act 3): eight lines read as Awa's voice message, ONE TAKE, ONE VOICE (a Dakar francophone woman), authored order, natural speed. The present and past forms read with the same energy: only the verb separates them.",
  'rec-b2-02-paires': 'The four pair cards (act 3). One voice. Each pair read as two sentences with a clear beat between them.',
  'rec-b2-02-piege-repere': "The audio step plays each card's CORRECT sentence. Six lines, one voice, same pace; the wrong versions in promptSound are never spoken.",
  'rec-b2-02-concert': "Act 3 reading: Awa's message, ONE VOICE (the same Dakar voice), one take, warm and teasing.",
  'rec-b2-02-album': 'Samuel and you over the photo album (act 4), two voices, one take. Samuel (a Lyon man in his forties) is reflective, never self-pitying; the regret about the piano is heavier than the others.',
  'rec-b2-02-regret': "The four regret cards (act 4). One voice. aimé light, voulu firmer, préféré with the stress on the other option, je n'aurais jamais dû slow and heavy. The difference in weight IS the teaching.",
  'rec-b2-02-regret-ecoute': 'REQUIRED FOR THE EAR MISSION (act 4): eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace.',
  'rec-b2-02-blogue': "Act 4 reading: Samuel's blog, ONE VOICE (Samuel), one take, calm, ending on a lighter note.",
  'rec-b2-02-escalier': 'The stairwell exchange (act 5), three voices, one take: the first neighbour curt, Madame Favre defensive then conciliatory, Monsieur Keller calm and friendly. The contrast between the two reproaches is the whole mission.',
  'rec-b2-02-reproche': 'The four reproach cards (act 5). One voice, from firm to warm across the four cards.',
  'rec-b2-02-piege-reproche': "The audio step plays each card's CORRECT sentence. Six lines, one voice, neither angry nor sweet.",
  'rec-b2-02-affiche': "Act 5 reading: Monsieur Keller's notice, ONE VOICE, a Geneva man in his sixties, courteous and measured.",
  'rec-b2-02-plombier': 'The plumber wait (act 6), two voices, one take, you and Léa (a Liège student). Mild irritation, never anger; the last line relieved.',
  'rec-b2-02-modaux': 'The devoir, pouvoir, vouloir deck (act 6). One voice. The supposition card read as a guess (slight shrug), the expectation card as disappointment.',
  'rec-b2-02-modaux-ecoute': 'REQUIRED FOR THE EAR MISSION (act 6): eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace.',
  'rec-b2-02-piege-modaux': "The audio step plays each card's CORRECT sentence. Six lines, one voice, same pace.",
  'rec-b2-02-lea': "Act 6 reading: Léa's message to the landlord, ONE VOICE (Léa), one take, polite and practical.",
  'rec-b2-02-s': 'Chloé and Marc (act 7), two voices, one take. Chloé reads her own draft sentence flat; Marc is matter of fact. j’aurai and j’aurais are NOT artificially separated: the scene says they sound alike.',
  'rec-b2-02-paires-s': 'The aurai / aurais deck (act 7). One voice. The je pair read naturally, with NO exaggerated [e] against [ɛ]; the nous pair read normally, where the i does the work.',
  'rec-b2-02-s-ecoute': 'REQUIRED FOR THE EAR MISSION (act 7): eight lines, ONE TAKE, ONE VOICE, authored order. The je forms carry no extra help; the learner answers from the meaning and from the nous forms.',
  'rec-b2-02-piege-s': "The audio step plays each card's CORRECT sentence. Six lines, one voice, no lean on the final syllable.",
  'rec-b2-02-excuses': "Act 7 reading: Chloé's second message (Tuesday morning), ONE VOICE (Chloé), one take.",
  'rec-b2-02-aeroport': 'Kouadio and you at Abidjan airport (act 8), two voices, one take, breathless and relieved; Kouadio (an Ivorian man) teasing. Quick pace: everything here is imagined and light.',
  'rec-b2-02-irreel': 'The four condition cards (act 8). One voice. A small pause after sans, avec, à ta place and sinon, so the condition is heard as a unit.',
  'rec-b2-02-si': 'The si pair cards (act 8). One voice. Read the si sentences as ordinary sentences, no pause at si: this is recognition, not a drill.',
  'rec-b2-02-avion': 'Act 8 reading: your story to your sister, ONE VOICE, one take, lively. « Sinon, le vol s’est très bien passé » read with a change of tone: it is a new topic, not a condition.',
  'rec-b2-02-secretariat': 'The faculty office (act 9), two voices, one take: you polite and slightly hurried, the secretary (a Liège woman) brisk but kind.',
  'rec-b2-02-politesse': "The politeness ladder (act 9). One voice, stepping down in directness across the four cards: je veux flat, j'aurais voulu soft and slow.",
  'rec-b2-02-yanis': "Act 9 reading: Yanis's email, ONE VOICE, one take, formal and courteous; the quiet reproach NOT stressed.",
  'rec-b2-02-bulletin': 'REQUIRED FOR THE EAR MISSION (act 10): eight news items, ONE TAKE, ONE NEWSREADER VOICE (Swiss Romand or French), real bulletin pace. Every conditional read completely flat: a newsreader signals distance with the verb, never with the voice. The passé composé items read at the same pace.',
  'rec-b2-02-presse': 'The signed or reported deck (act 10). Same flat news delivery as the bulletin.',
  'rec-b2-02-piege-presse': "The audio step plays each card's CORRECT sentence. Six lines, one news voice, flat.",
  'rec-b2-02-breve': 'Act 10 reading: the Geneva brief, ONE NEWS VOICE, one take, bulletin pace, flat on every conditional.',
  'rec-b2-02-modele': "Act 11 reading: Inès's letter, ONE VOICE (a Lyon woman), one take, read as the writer reads it to a neighbour: regret sincere, reproach measured, the ending looking ahead. A pause between paragraphs.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 2',
  intro: 'The past conditional is two pieces you already own: the present conditional of avoir or être (lesson 8 in B1) and the participle of the passé composé. What this lesson builds is the look back. You learn to tell it apart from the present conditional by the time marker, and to make it do five jobs: regret (j’aurais aimé), reproach pitched from direct to diplomatic (tu aurais dû, il aurait fallu, on aurait pu), the unreal result of a past situation without si (sans ton aide, je n’aurais jamais réussi), the polite past (j’aurais voulu vous demander) and the journalistic conditional in the past (l’incendie aurait fait deux blessés) against the passé composé the newsroom signs. Two traps get their own act: j’aurai dû, and si j’aurais. The task is a diplomatic letter of 180 to 250 words.',
  skill: 'PE',
  grammarAssumed: [COND_UNIT, POLI_UNIT, SI_UNIT, MEDIAS_UNIT],
  grammarIntroduced: [
    'Formation of the conditionnel passé: avoir or être in the present conditional plus the past participle, with the passé composé choice of auxiliary, agreement with être and the placement of the negation',
    'The present conditional against the past conditional, chosen by whether the time marker points to an open or a finished moment; ça aurait été against ce serait',
    'Regret: j’aurais aimé, j’aurais voulu, j’aurais préféré, je n’aurais (jamais) dû, and regretter de with the past infinitive',
    'Reproach on a scale of distance: tu aurais dû, tu aurais au moins pu, vous auriez dû, il aurait fallu, j’aurais apprécié, on aurait pu',
    'devoir, pouvoir and vouloir in the passé composé (supposition, fulfilled obligation, success, attempt) against the conditionnel passé (unfulfilled obligation, disappointed expectation, missed chance, danger avoided)',
    'The futur antérieur against the conditionnel passé in writing: j’aurai / j’aurais, and the error j’aurai dû',
    'The unreal past result with the condition in a phrase (sans, avec, à ta place, sinon, a time expression, a gerund), and the rule that the conditional never follows si',
    'The polite past for present requests: j’aurais voulu vous demander, vous n’auriez pas vu',
    'The journalistic conditional in the past (reported, unverified) against the passé composé (vouched for)',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Le conditionnel passé, ce sont deux morceaux que tu as déjà : avoir ou être au conditionnel présent, et le participe. Ce que la leçon t'apprend, c'est à regarder derrière toi : regretter, reprocher sans blesser, imaginer ce qui aurait pu arriver, adoucir une demande et rapporter une nouvelle sans la signer. Deux pièges ont leur propre acte : j'aurai dû, et si j'aurais. À la fin, tu écris une lettre de 180 à 250 mots.",
    minutes: 150,
    difficulty: 4,
    glyph: 'rais',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: CONDITIONNEL_PASSE_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (build log, 2026-09-25). Kept, as every B1 and B2 lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, MODELE_TEXT, dicteeFor };
