// b2.04.l1 « Les si mixtes »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md under B2-BUILD-LOG.md (« How B2 teaches
// complex structures »). Grammar shape, Unit 1 of B2, lesson 4 on the trail.
// It builds on lesson 10 in B1 (the three si pairs) and on lessons 1 to 3 in
// B2 (plus-que-parfait, conditionnel passé, past-unreal si), written for the
// same publish.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is real (in SECTION_TYPES and the LessonSection union), so `sections` is
// `LessonSection[]` and the validators run on `LESSON` itself.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOW THE ACTS ARE BUILT (B2-BUILD-LOG: form, meaning, choice, text)
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 3 on runs meet → name (the mixed half beside the classic
//   half it is confused with: CONTRAST IS THE UNIT OF TEACHING) → build →
//   choose under load → trap → the structure inside a 60 to 120 word text
//   (`a<N>-texte`, complete or rewrite) → the gated act check.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Hier et aujourd'hui             6   the problem scene: the all-past
//                                           default; mixed against classic
//    2  Les quatre moitiés              6   recap: the two si halves, the two
//                                           result halves (lesson 10 in B1,
//                                           lessons 1 to 3 in B2)
//    3  Une cause passée                8   si + plus-que-parfait >
//                                           conditionnel présent
//    4  Un état qui dure                8   si + imparfait > conditionnel
//                                           passé; nature against moment
//    5  Deux horloges sur une ligne     8   two points on the timeline, a
//                                           result that is present or to come
//    6  Les mots qui règlent l'horloge  8   aujourd'hui, maintenant, cette
//                                           année against hier, ce matin, à
//                                           l'époque; the lasting trait
//    7  Regretter et conseiller         8   regret, reproach, late advice,
//                                           si seulement, à ta place
//    8  Argumenter avec si              8   a column: past decisions, present
//                                           effects, hedged, with objection
//    9  Au cas où, à condition que      8   RECOGNITION: conditionnel after au
//                                           cas où, subjonctif after à
//                                           condition que
//   10  Les pièges                      8   « si j'aurais », the all-past
//                                           default, the marker contradicted
//   11  Ta mission                     11   model, plan, role play, TASK, quiz
//
//   TOTAL 87 missions, 11 acts. Corpus: 165 authored rows (.1600-.1764)
//   plus 12 reused seed rows. Quiz: 11 rounds of 8 (33 mcq, 21 typeIn, 15
//   errorSpot, 19 listenChoose): one round per act from 2 to 10, an
//   exam-style round (TCF gap fill, DELF CE and PE) and a recycling round
//   citing lessons 7, 8, 10, 15, 19 and 32 in B1. Eleven error triggers,
//   eleven drills, five reference sheets, eleven terms. Three tapTables
//   (acts 2, 5, 6). Chapter artwork: `si-mixtes-image-prompts.md`, 11
//   prompts, one per act.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Deux moitiés, deux horloges : chaque moitié prend le temps de son
//     propre moment. »
//   EN: Two halves, two clocks: each half takes the tense of its own moment.
//
//   ONE METAPHOR, THE TWO CLOCKS. Lesson 10 in B1 chose one pair for the
//   whole sentence; a mixed sentence reads one clock per half. The si half
//   has two settings (imparfait for now or always, plus-que-parfait for
//   before), the result half two (conditionnel présent for now or later,
//   conditionnel passé for before). It is NOT « mix freely »: the si half
//   never takes a conditional (act 10).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the mixed si sentence in both directions, the timeline choice,
//           the time markers and the lasting trait, mixed si for regret,
//           reproach, late advice and argument, the recognition of au cas
//           où + conditionnel and à condition que + subjonctif as related
//           hypotheticals, and the reflective task on a decision.
//   QUOTES  the reframes of lessons 7, 8, 10, 15 and 32 in B1, re-exported
//           from their corpus files; rows of lessons 9, 10, 15, 16 and 32
//           reused BY ID from the seed.
//   LEAVES  the FORMS of the plus-que-parfait and the conditionnel passé to
//           lessons 1 and 2 in B2 (recapped in act 2, never re-built); the
//           classic past-unreal pair to lesson 3 in B2; the subjunctive after
//           à condition que to lesson 15 in B1 (recognised, not drilled);
//           argumentation as a genre to lesson 23 in B2.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   B2: natural French, not simplified; English still authored on every
//   learner string (an `en` field or a final `EN: `), never on an answer.
//   tu in every instruction; Mme Lavoie says vous to the candidate. Every
//   `say` is French. No spaced « ? » or « ! » in any scene or story bubble.
//   Every scenario uses ’ only and embeds no corpus row. Other lessons are
//   cited by trail position in words, never by raw id. Mission answer slots
//   are spread by `spreadMissions()`, the quiz by `spreadSlots()` (no text
//   changes, no `why` names an option position), as b2.22 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. LESSONS 1 TO 3 IN B2 are written in parallel for the same publish,
//      so this lesson cites them by position and recaps their forms in act 2
//      without importing a row or a reframe from them. Once they land, swap
//      the act 2 recap cards to their rows and reframes?
//   2. « Au cas où + conditionnel » and « à condition que + subjonctif » are
//      RECOGNITION here (act 9): cards, sorting, two quiz questions each
//      that ask for the form. Is typing the form (two typeIn) too far for
//      recognition level, or right for B2?
//   3. « Si j'aurais » is common in speech. The lesson marks it wrong
//      everywhere, as the written norm does, and the quiz why says so.
//      Keep it at « wrong », with no « familier » label?
//   4. VERSION is 1 (a new lesson), as b2.22 to b2.26.
//   5. THE RUBRIC has five criteria (tâche 3, cohérence 3, étendue 2,
//      correction 2, registre 2 = 12), as the B2 writing lessons do; the
//      annotated model sits inside `modelAnswer`, after the text.
//   6. Twelve listenChoose-heavy rounds were avoided: the quiz carries 19
//      listenChoose (22 %), above the 12 % working ratio, because the mixed
//      pair is most audible on the auxiliary (serait / aurait été). Trim?
//   7. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, PF, OA, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  SALON_TEXT, TEXTE_3, TEXTE_4, TEXTE_5, TEXTE_6, TEXTE_7, CHRONIQUE_TEXT, TEXTE_8,
  TEXTE_9, COURRIEL_TEXT, TEXTE_10, MODELE_TEXT,
  B107_REFRAME, B107_REFRAME_EN, B108_REFRAME, B108_REFRAME_EN, B110_REFRAME, B110_REFRAME_EN,
  B115_REFRAME, B115_REFRAME_EN, B132_REFRAME, B132_REFRAME_EN,
  COND_UNIT, SI_UNIT, PQP_UNIT, COND_PASSE_UNIT, SI_PASSE_UNIT, FUTUR_USE_UNIT, SUBJ_DECL_UNIT,
  FUTUR_USE_REF, COND_REF, SI_REF, SUBJ_DECL_REF, DISCOURS_REF, CONCESSION_REF,
  PQP_REF, COND_PASSE_REF, SI_PASSE_REF, SUBJ_PASSE_REF, ARGUMENT_REF,
} from './si-mixtes-corpus.ts';
import { SI_MIXTES_TERMS } from './si-mixtes-terms.ts';

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
  if (!r) throw new Error(`b2.04: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.04: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.04: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** THE « IN A TEXT » BEAT (B2-BUILD-LOG, step 4): every act from 3 on ends
 *  on a 60 to 120 word text the learner completes or rewrites. */
function texte(id: string, title: string, frSub: string, text: string, glossary: { word: string; en: string; note: string }[], questions: { q: string; a: string }[], rec: string, terms: string[]): Sec<'reading'> {
  return {
    type: 'reading', id, layer: 'core', questionsInModal: true, title, frSub, text, glossary, questions,
    audio: REC(rec), say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1: HIER ET AUJOURD'HUI
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Nothing the candidate says is ungrammatical: the classic past pair
 *  simply answers a question about THEN. NO « ? » OR « ! » IN ANY BUBBLE. */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le salon de l’emploi',
  frSub: 'Un regret qui pèse encore',
  setting: { place: 'Salon de l’emploi, Palais des congrès', city: 'Montréal', time: '14 h 20', ambience: 'des stands, des badges, un café tiède dans un gobelet' },
  beats: [
    {
      kind: 'narration',
      text: "Au salon de l'emploi de Montréal, Mme Lavoie, conseillère d'orientation, reçoit les candidats un par un. Elle a ton CV sous les yeux : un diplôme commencé il y a dix ans, jamais terminé.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mme Lavoie',
      fr: "Votre parcours m'intéresse. Parlez-moi de ce diplôme que vous n'avez pas terminé.",
      en: 'Your background interests me. Tell me about the degree you did not finish.',
      respell: '[vo-truh par-koor mehⁿ-tay-RESS | par-lay-MWA duh suh dee-PLOHMM | kuh voo na-vay pa tehr-mee-NAY]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "Si j'avais continué mes études, j'aurais eu un meilleur poste.",
      en: 'If I had continued my studies, I would have had a better job.',
      respell: '[see zha-veh kohⁿ-tee-nway may-zay-TÜD | zhoh-reh-zü uhⁿ meh-yeur POST]',
      stage: "Tu penses à ton poste d'aujourd'hui. Mais toute ta phrase regarde en arrière.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mme Lavoie',
      fr: "Je vois. À l'époque, vous auriez eu mieux. Et depuis, vous vous en êtes bien sorti.",
      en: 'I see. Back then you would have had something better. And since then you have done well.',
      respell: '[zhuh VWA | a lay-POK | voo-zoh-ryay-zü MYUH | ay duh-PWEE | voo voo-zahⁿ-net byehⁿ sor-TEE]',
      stage: 'Pour elle, ton regret est une vieille histoire, close depuis longtemps.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Tu voulais dire que tu le regrettes encore, chaque jour, au travail. Elle a entendu une histoire finie. Une seule moitié de ta phrase était réglée sur la mauvaise heure.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: "Tu recommences. Quelle phrase dit que le regret pèse encore aujourd'hui.",
      size: 'lg',
      options: [
        { fr: "Si j'avais continué mes études, j'aurais eu un meilleur poste.", respell: '[see zha-veh kohⁿ-tee-nway may-zay-TÜD | zhoh-reh-zü uhⁿ meh-yeur POST]', en: 'If I had continued my studies, I would have had a better job.', outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1600)), respell: rsOf(E(1600)), en: en(E(1600)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Elle pose son stylo. « Alors parlons d'une reprise d'études, en cours du soir. » Ton regret vient de devenir un projet.",
        breaks: "Elle hoche la tête et tourne la page. Pour elle, le sujet est clos, et ton regret d'aujourd'hui n'a pas été entendu.",
      },
    },
    {
      kind: 'break',
      heading: 'Une moitié hier, une moitié aujourd’hui',
      body: "La cause est passée : tu as arrêté tes études. Le résultat, lui, se voit maintenant : ton poste actuel. Chaque moitié prend donc le temps de son moment. EN: the cause is past and the result is present, so each half takes its own tense.",
      wrong: {
        fr: "Si j'avais continué mes études, j'aurais eu un meilleur poste.",
        ipa: '/si ʒa.vɛ kɔ̃.ti.nɥe me.ze.tyd ʒo.ʁɛ.zy œ̃ mɛ.jœʁ pɔst/',
        respell: '[see zha-veh kohⁿ-tee-nway may-zay-TÜD | zhoh-reh-zü uhⁿ meh-yeur POST]',
        en: 'If I had continued my studies, I would have had a better job.',
      },
      right: { fr: fr(E(1600)), ipa: ipaOf(E(1600)), respell: rsOf(E(1600)), en: en(E(1600)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "La bonne phrase mêle deux temps que tu connais déjà. Cette leçon t'apprend à régler chaque moitié sur son horloge, puis à t'en servir pour regretter, conseiller et argumenter. À la fin, tu écriras sur une décision de ta vie.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['horloge', 'mixte'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Relier une cause passée à un effet présent', s: 'Actes 3 et 4 : les deux sens de la phrase mixte' },
    { t: 'Régler chaque moitié sur son moment', s: 'Actes 5 et 6 : la ligne du temps et ses marqueurs' },
    { t: 'Regretter, conseiller, argumenter', s: 'Actes 7 à 9 : les usages et les voisins, au cas où et à condition que' },
    { t: 'Écrire sur une décision de ta vie', s: 'Actes 10 et 11 : les pièges, puis ta mission' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le carnet de Mme Lavoie',
  frSub: 'Trois candidats, trois phrases avec si',
  text: SALON_TEXT,
  glossary: [
    { word: "conseillère d'orientation", en: 'careers adviser', note: 'Elle aide les gens à choisir une formation ou un métier.' },
    { word: 'souligne', en: 'underlines', note: 'Trace un trait sous les mots pour les mettre en valeur.' },
    { word: 'marge', en: 'margin', note: 'L’espace blanc au bord de la page.' },
    { word: 'carnet', en: 'notebook', note: 'Un petit cahier pour prendre des notes.' },
  ],
  questions: [
    { q: 'Global : de quoi parlent les trois candidats ?', a: "De ce qui serait autrement si une chose avait été, ou était, différente : leur carrière, leur poste, leur formation." },
    { q: 'Détail : que regrette le technicien ?', a: "D'avoir arrêté ses études. Il le dit avec « si j'avais continué », et il en voit l'effet aujourd'hui : « j'aurais un meilleur poste »." },
    { q: 'Inférence : la comptable parle-t-elle bien anglais aujourd’hui ?', a: "Non. « Si je parlais mieux anglais » dit un état actuel ; le poste perdu, lui, est passé." },
    { q: 'Inférence : pourquoi la phrase de l’étudiant n’est-elle pas soulignée ?', a: "Parce que ses deux moitiés regardent le même moment, aujourd'hui. Elle n'a qu'une horloge." },
    { q: 'Position : que veut dire Mme Lavoie par « Deux horloges » ?', a: "Que dans ces phrases, chaque moitié a son propre moment : l'une regarde hier, l'autre aujourd'hui." },
  ],
  audio: REC('rec-b2-04-salon'),
  say: REFRAME,
  terms: ['horloge', 'mixte'],
};

const A1_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-trier',
  layer: 'core',
  size: 'lg',
  title: 'Range chaque phrase selon ses horloges',
  frSub: 'Deux sens, un seul principe',
  groups: [
    grp('La cause hier, l’effet aujourd’hui', [
      it(E(1600), 'les études, puis le poste actuel'),
      it(E(1604), 'un poste quitté, un titre qui manque'),
      it(E(1606), 'un déménagement, une langue parlée'),
      it(E(1611), 'un conseil ignoré, un métier aujourd’hui'),
    ], chk('Dans ces quatre phrases, quelle moitié regarde le présent ?',
      ['la moitié résultat', 'la moitié si', 'aucune'], 0,
      "La cause est ancienne, mais son effet se voit maintenant. EN: the result half looks at now.")),
    grp('Un état qui dure, un effet passé', [
      it(E(1602), 'l’anglais : encore faible'),
      it(E(1605), 'le désordre : toujours là'),
      it(E(1607), 'l’allergie : pour la vie'),
      it(E(1610), 'la timidité : sa nature'),
    ], chk('Que dit l’imparfait après si, dans ces phrases ?',
      ['un état qui dure encore', 'un moment précis du passé'], 0,
      "Si je parlais mieux : aujourd'hui comme hier, ce n'est pas le cas. EN: a state that still holds.")),
    ctl('Et la troisième sorte', '« Si j’avais plus de temps, je ferais une formation. » Combien d’horloges ?',
      ['une seule : tout est au présent', 'deux'], 0,
      "La paire classique de la leçon 10 du B1 : les deux moitiés regardent le même moment. EN: one clock, the classic pair."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['horloge', 'cause', 'trait'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où une seule horloge coûte cher',
  cases: [
    { situation: 'Un entretien : tu expliques un regret qui pèse encore', fr: fr(E(1600)), en: en(E(1600)) },
    { situation: 'Tu excuses un oubli par ton caractère', fr: fr(E(1605)), en: en(E(1605)) },
    { situation: 'Tu reproches à quelqu’un un choix ancien', fr: fr(E(1608)), en: en(E(1608)) },
    { situation: 'Tu expliques ce que ta vie doit à un départ', fr: fr(E(1609)), en: en(E(1609)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['mixte', 'regret'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le malentendu', 'Pourquoi Mme Lavoie a-t-elle tourné la page ?',
    ['parce que ta phrase entière parlait d’hier', 'parce que ta phrase était fausse', 'parce qu’elle était pressée'], 0,
    "La phrase était correcte, mais son résultat regardait le passé. EN: correct, but its result looked at the past."),
  ctl('Le principe', 'Dans une phrase mixte, qui choisit le temps de chaque moitié ?',
    ['le moment de cette moitié', 'le temps de l’autre moitié'], 0,
    "Chaque moitié lit sa propre horloge. EN: each half reads its own clock."),
  ctl('Les deux sens', 'Combien de sortes de phrases mixtes as-tu vues ?',
    ['deux : cause passée, ou état qui dure', 'une seule', 'quatre'], 0,
    "Hier puis aujourd'hui, ou toujours puis hier. EN: two directions."),
], ['horloge', 'mixte']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Hier et aujourd’hui',
    opener: {
      line: "Tu regrettes une chose ancienne, et on croit que c'est fini : ici tu apprends à dire que ça pèse encore. EN: You regret something old and people think it is over: here you learn to say it still weighs on you.",
      imageRef: 'lessons/si-mixtes/act01.jpg',
    },
    sections: [],
    milestone: "Tu reconnais une phrase mixte et tu sais dire de quel moment parle chaque moitié. EN: You can spot a mixed si sentence and say which moment each half refers to.",
    estScreens: 32, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_TRIER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: LES QUATRE MOITIÉS (what B1 and B2 already gave you)
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Une voiture, quatre phrases',
  frSub: 'Ce que tu sais déjà',
  setting: 'Tu n’as pas de voiture. Hier soir, tu n’as pas pu aller chercher ton amie Inès à la gare.',
  bubbles: [
    { from: 'narrator', fr: 'Tu cherches la bonne façon de t’excuser auprès d’Inès.', en: 'You are looking for the right way to apologise to Inès.' },
    { from: 'user', fr: fr(E(1614)), en: en(E(1614)), warn: 'Aujourd’hui des deux côtés' },
    { from: 'coach', fr: 'Juste, mais tu parles de ce soir, pas d’hier.', en: 'Right, but you are talking about tonight, not yesterday.' },
    { from: 'user', fr: fr(E(1615)), en: en(E(1615)), warn: 'Hier des deux côtés' },
    { from: 'coach', fr: 'Juste aussi. Mais ta voiture, tu ne l’as toujours pas.', en: 'Also right. But you still do not have a car.' },
    { from: 'user', fr: fr(E(1617)), en: en(E(1617)), warn: 'Toujours, puis hier' },
    { from: 'narrator', fr: 'Trois phrases correctes, trois messages. La dernière dit exactement ce qui s’est passé.', en: 'Three correct sentences, three messages. The last says exactly what happened.' },
  ],
  closing: { fr: 'Les moitiés, tu les connais. Ce qui change, c’est la façon de les assortir.', en: 'You know the halves. What changes is how you match them.' },
  audio: REC('rec-b2-04-voiture'),
  say: REFRAME,
  terms: ['mixte', 'horloge'],
};

const A2_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-moities',
  title: 'Ce que tu apportes dans cette leçon',
  frSub: 'Quatre leçons, quatre moitiés',
  hint: 'Quatre cartes, une par leçon déjà faite.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['mixte'],
  cards: [
    {
      head: 'La paire, au B1', label: Cap(SI_REF),
      fr: fr(PF(1362)),
      sub: rsOf(PF(1362)),
      body: `« ${B110_REFRAME} » Au B1, les deux moitiés regardaient le même moment. EN: ${B110_REFRAME_EN}`,
    },
    {
      head: 'Le passé d’avant', label: Cap(PQP_REF),
      fr: 'si j’avais su · si tu étais parti',
      sub: '[see zha-veh SÜ] · [see tü ay-teh par-TEE]',
      body: "Avoir ou être à l'imparfait, puis le participe. Derrière si, il dit une condition qui date d'hier. EN: the pluperfect, for a condition that belongs to the past.",
    },
    {
      head: 'Le résultat d’hier', label: Cap(COND_PASSE_REF),
      fr: 'j’aurais pris · je serais venu',
      sub: '[zhoh-reh PREE] · [zhuh suh-reh vuh-NÜ]',
      body: "Avoir ou être au conditionnel, puis le participe : ce qui serait arrivé, et n'est pas arrivé. EN: the past conditional, for a result that never happened.",
    },
    {
      head: 'La paire du passé', label: Cap(SI_PASSE_REF),
      fr: fr(PF(1352)),
      sub: rsOf(PF(1352)),
      body: "Les deux moitiés au passé. Cette leçon garde ses formes, mais sépare ses horloges. EN: both halves in the past; this lesson keeps the forms and splits the clocks.",
    },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-moities',
  title: 'Les quatre moitiés, et ce qu’elles donnent',
  frSub: 'Touche une ligne',
  cols: ['Moitié', 'Moment', 'Temps'],
  rows: [
    {
      cells: ['si', 'aujourd’hui, toujours', 'imparfait'],
      say: fr(E(1614)),
      detail: { title: 'La condition d’aujourd’hui', body: "Ce n'est pas le cas maintenant, ou jamais : si j'avais une voiture. EN: not the case now.", say: fr(E(1620)) },
    },
    {
      cells: ['si', 'hier', 'plus-que-parfait'],
      say: fr(E(1615)),
      detail: { title: 'La condition d’hier', body: "Ce n'était pas le cas à ce moment-là : si j'avais eu une voiture. EN: not the case back then.", say: fr(E(1621)) },
    },
    {
      cells: ['résultat', 'aujourd’hui, demain', 'conditionnel présent'],
      say: fr(E(1620)),
      detail: { title: 'Le résultat d’aujourd’hui', body: `Ce qui serait maintenant, ou plus tard. ${Cap(COND_REF)} : « ${B108_REFRAME} » EN: ${B108_REFRAME_EN}`, say: fr(E(1614)) },
    },
    {
      cells: ['résultat', 'hier', 'conditionnel passé'],
      say: fr(E(1621)),
      detail: { title: 'Le résultat d’hier', body: "Ce qui serait arrivé, et n'est pas arrivé. EN: what would have happened, and did not.", say: fr(E(1615)) },
    },
    {
      cells: ['phrase mixte', 'hier, puis aujourd’hui', 'plus-que-parfait + cond. présent'],
      say: fr(E(1616)),
      detail: { title: 'Une cause passée', body: "La condition d'hier, le résultat d'aujourd'hui : l'acte 3. EN: act 3.", say: fr(E(1622)) },
    },
    {
      cells: ['phrase mixte', 'toujours, puis hier', 'imparfait + cond. passé'],
      say: fr(E(1617)),
      detail: { title: 'Un état qui dure', body: "Un état toujours vrai, un résultat déjà passé : l'acte 4. EN: act 4.", say: fr(E(1624)) },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['mixte', 'horloge'],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Assemble les moitiés',
  frSub: 'Deux situations, quatre phrases chacune',
  groups: [
    grp('Une voiture', [
      it(E(1614), 'aujourd’hui, aujourd’hui'),
      it(E(1615), 'hier, hier'),
      it(E(1616), 'hier, puis aujourd’hui'),
      it(E(1617), 'toujours, puis hier'),
    ], chk("Laquelle dit : tu n'as toujours pas de voiture, et hier tu n'es pas venu ?",
      [fr(E(1617)), fr(E(1616)), fr(E(1615))], 0,
      "L'imparfait garde l'état d'aujourd'hui, le conditionnel passé dit l'occasion manquée. EN: a lasting state, a missed occasion.")),
    grp('Tout serait plus simple', [
      it(E(1620), 'maintenant'),
      it(E(1621), 'hier'),
      it(E(1622), 'hier, puis aujourd’hui'),
      it(E(1628), 'un ticket d’hier, une vie d’aujourd’hui'),
    ], chk('Dans ces phrases, que change « aurait été » par rapport à « serait » ?',
      ['le moment du résultat', 'la politesse', 'rien'], 0,
      "Serait regarde maintenant ; aurait été regarde hier. EN: serait is now, aurait été is then.")),
    ctl('La moitié si', 'Pour l’irréel, combien de temps la moitié si peut-elle prendre ?',
      ['deux : l’imparfait ou le plus-que-parfait', 'quatre', 'un seul'], 0,
      "Jamais de conditionnel derrière si : il en reste deux. EN: only two, never a conditional."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['mixte', 'cause'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de montage',
  errors: [
    {
      wrong: "Si j'aurais eu une voiture, je serais venu te chercher.",
      right: fr(E(1615)),
      why: "Normal : le conditionnel passé est dans l'air, et la main le recopie des deux côtés. Derrière si, il n'a pas sa place. EN: the past conditional feels right on both sides; after si it never is.",
    },
    {
      wrong: 'Si tu étais là hier, tout aurait été plus simple.',
      right: 'Si tu avais été là hier, tout aurait été plus simple.',
      why: "L'imparfait après si dit un état qui dure. Ta présence d'hier est un moment passé : plus-que-parfait. EN: yesterday's presence is a past moment, so the pluperfect.",
    },
    {
      wrong: "Si j'avais appris à nager, je nagerais avec vous hier.",
      right: "Si j'avais appris à nager, j'aurais nagé avec vous hier.",
      why: "Avec hier, le résultat est passé : conditionnel passé. La cause d'hier ne suffit pas à décider. EN: with hier, the result is past.",
    },
    {
      wrong: 'Si elle aurait su, elle aurait appelé.',
      right: fr(E(1623)),
      why: "La faute la plus entendue, même chez des francophones. À l'écrit, elle ne passe jamais. EN: widely heard, never accepted in writing.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['siJaurais', 'mixte'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Les formes', 'Ces formes, où les as-tu construites ?',
    ['dans les leçons 1 à 3 du B2', 'nulle part, elles sont nouvelles'], 0,
    "Cette leçon ne les refait pas : elle les assortit autrement. EN: this lesson matches them differently."),
  ctl('La moitié si', 'Que peut-on écrire juste après si, à l’irréel ?',
    ['un imparfait ou un plus-que-parfait', 'un conditionnel', 'un futur'], 0,
    "Deux temps, jamais un conditionnel. EN: two tenses, never a conditional."),
  ctl('La phrase mixte', 'D’où viennent ses deux moitiés ?',
    ['de deux paires différentes', 'de la même paire'], 0,
    "La cause d'une paire, le résultat d'une autre. EN: two pairs."),
], ['mixte', 'horloge']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Les quatre moitiés',
    opener: {
      line: "Tu as déjà toutes les pièces : ici tu les poses sur la table avant de les assortir autrement. EN: You already have every piece: here you lay them out before matching them in a new way.",
      imageRef: 'lessons/si-mixtes/act02.jpg',
    },
    sections: [],
    milestone: "Tu sais quelle moitié prend quel temps, et d'où vient chacune. EN: You know which half takes which tense, and where each comes from.",
    estScreens: 30, restPoints: ['a2-table'],
  },
  sections: [A2_HISTOIRE, A2_RAPPEL, A2_TABLE, A2_CONSTRUIRE, A2_ERREURS, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: UNE CAUSE PASSÉE, UN EFFET PRÉSENT
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'Le dimanche chez la mère de Julien',
  frSub: 'Le droit ou le pain',
  setting: 'Lausanne. Il y a cinq ans, Julien a quitté la faculté de droit pour ouvrir une boulangerie.',
  bubbles: [
    { from: 'narrator', fr: 'Sa mère ne s’en remet pas tout à fait.', en: 'His mother has not quite got over it.' },
    { from: 'coach', fr: fr(E(1629)), en: en(E(1629)), warn: 'Il y a cinq ans, puis aujourd’hui' },
    { from: 'user', fr: fr(E(1639)), en: en(E(1639)), warn: 'Chaque matin, encore maintenant' },
    { from: 'coach', fr: fr(E(1630)), en: en(E(1630)), warn: 'La même horloge : présent' },
    { from: 'user', fr: 'C’est vrai. Mais j’aime ce que je fais.', en: 'That is true. But I love what I do.' },
    { from: 'narrator', fr: 'Chaque phrase de sa mère part d’un choix ancien et arrive dans leur vie d’aujourd’hui.', en: "Each of his mother's sentences starts from an old choice and lands in their life today." },
  ],
  closing: { fr: 'La cause date d’hier, l’effet se voit encore : deux horloges.', en: 'The cause dates from yesterday, the effect still shows: two clocks.' },
  audio: REC('rec-b2-04-julien'),
  say: REFRAME,
  terms: ['cause', 'resultat'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-moities',
  title: 'Hier la cause, aujourd’hui l’effet',
  frSub: 'Si + plus-que-parfait, puis conditionnel présent',
  hint: 'Quatre cartes, deux paires à comparer.',
  audio: REC('rec-b2-04-cause'),
  say: REFRAME,
  terms: ['cause', 'resultat'],
  cards: [
    {
      head: 'La forme', label: 'cause passée',
      fr: fr(E(1631)),
      sub: rsOf(E(1631)),
      body: "Si + plus-que-parfait, puis conditionnel présent. La nuit est finie ; la fatigue, elle, est là ce matin. EN: pluperfect after si, present conditional in the result.",
    },
    {
      head: 'À côté', label: 'la paire du passé',
      fr: "Si j'avais dormi cette nuit, j'aurais été moins fatigué hier.",
      sub: '[see zha-veh dor-mee set NWEE | zhoh-reh-tay mwehⁿ fa-tee-gay YEHR]',
      body: "Même cause, autre résultat : la fatigue d'hier, déjà finie. C'est la paire de la leçon 3 du B2. EN: same cause, a result that is over.",
    },
    {
      head: 'La forme', label: 'cause passée',
      fr: fr(E(1629)),
      sub: rsOf(E(1629)),
      body: "Un choix d'il y a cinq ans, un métier d'aujourd'hui. Aujourd'hui confirme l'horloge du résultat. EN: an old choice, a job today.",
    },
    {
      head: 'À côté', label: 'la paire du passé',
      fr: fr(E(1640)),
      sub: rsOf(E(1640)),
      body: "Ici, le résultat est un diplôme qui aurait été obtenu à l'époque. Les deux moitiés regardent hier. EN: both halves look at the past.",
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis le résultat d’aujourd’hui',
  frSub: 'Deux groupes, une gâchette chacun',
  groups: [
    grp('Ce qui manque maintenant', [
      it(E(1632), 'la pluie de tout à l’heure, les vêtements mouillés'),
      it(E(1633), 'un oubli, une salle pleine'),
      it(E(1636), 'un retard, un bureau vide'),
      it(E(1643), 'un bus raté, une place vide'),
    ], chk('Quel temps porte le résultat dans ces quatre phrases ?',
      ['le conditionnel présent', 'le conditionnel passé', 'le présent'], 0,
      "Serais, aurions, serait : le résultat regarde maintenant. EN: the present conditional.")),
    grp('Ce qui serait possible', [
      it(E(1637), 'des économies, des vacances'),
      it(E(1642), 'un numéro noté, un appel'),
      it(E(1644), 'une vente, de l’argent de côté'),
      it(E(1635), 'une langue apprise, des collègues compris'),
    ], chk('Et la moitié si, dans ces phrases ?',
      ['le plus-que-parfait', 'l’imparfait', 'le conditionnel passé'], 0,
      "Avais économisé, avais noté : la cause est finie. EN: a finished cause.")),
    ctl('Le test', 'Tu hésites entre « serais » et « aurais été ». Que te demandes-tu ?',
      ['quand le résultat se voit', 'quand la cause a eu lieu'], 0,
      "La cause ne décide pas pour le résultat : chacun son horloge. EN: ask when the result shows."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['resultat', 'cause'],
};

const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Maintenant, ou à l’époque',
  frSub: 'Huit phrases, une question chacune',
  lines: [
    ln(E(1631)), ln(E(1640)), ln(E(1633)), ln(E(1634)),
    ln(E(1636)), ln(E(1645)), ln(E(1641)), ln(E(1644)),
  ],
  questions: [
    { q: 'Phrase 1 : la fatigue, c’est quand ?', opts: ['ce matin, maintenant', 'hier'], correct: 0, why: "Je serais moins fatigué : le résultat regarde maintenant. EN: now." },
    { q: 'Phrase 2 : le résultat regarde quel moment ?', opts: ['l’époque où il était étudiant', 'aujourd’hui'], correct: 0, why: "Il aurait fini : conditionnel passé. EN: back then." },
    { q: 'Phrase 4 : où vit-elle aujourd’hui ?', opts: ['pas en Suisse', 'en Suisse'], correct: 0, why: "Elle vivrait en Suisse : ce n'est pas le cas maintenant. EN: she does not live there." },
    { q: 'Phrase 6 : est-il libre ce matin ?', opts: ['non', 'oui'], correct: 0, why: "Je serais libre : il ne l'est pas. EN: he is not free." },
    { q: 'Phrase 7 : la personne est-elle arrivée ?', opts: ['non, pas encore', 'oui, elle est là'], correct: 0, why: "Tu serais là maintenant : elle n'y est pas. EN: not yet there." },
  ],
  audio: REC('rec-b2-04-cause-ecoute'),
  say: REFRAME,
  terms: ['resultat'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Le résultat qui recule trop',
  frSub: 'Six phrases, un seul réflexe à casser',
  rule: {
    title: 'La cause ne tire pas le résultat en arrière',
    body: "Quand la cause est passée, la main met aussi le résultat au passé. Mais si l'effet se voit aujourd'hui, le résultat prend le conditionnel présent. EN: a past cause does not drag the result into the past.",
  },
  cards: [
    { promptLabel: 'aurait été', promptSound: "Si tu avais pris ton parapluie, tu n'aurais pas été trempé maintenant.", fr: 'Si tu avais pris ton parapluie, tu ne serais pas trempé maintenant.', ipa: '/si ty a.vɛ pʁi tɔ̃ pa.ʁa.plɥi ty nə sə.ʁɛ pa tʁɑ̃.pe mɛ̃t.nɑ̃/', tip: "Maintenant règle l'horloge du résultat. EN: maintenant sets the result's clock." },
    { promptLabel: 'aurait eu', promptSound: 'Si nous avions réservé, nous aurions eu une table maintenant.', fr: fr(E(1633)), ipa: ipaOf(E(1633)), tip: "La table, c'est ce soir. EN: the table is tonight." },
    { promptLabel: 'aurait été', promptSound: "Si Julien avait fini son droit, il aurait été avocat aujourd'hui.", fr: fr(E(1629)), ipa: ipaOf(E(1629)), tip: "Aujourd'hui : il serait avocat. EN: today, so serait." },
    { promptLabel: 'aurait été', promptSound: "Si le train n'avait pas eu de retard, j'aurais déjà été au bureau.", fr: fr(E(1636)), ipa: ipaOf(E(1636)), tip: "Déjà, ici, veut dire à cette heure-ci. EN: déjà means by now." },
    { promptLabel: 'aurait pu', promptSound: "Si j'avais noté son numéro, j'aurais pu l'appeler maintenant.", fr: "Si j'avais noté son numéro, je pourrais l'appeler maintenant.", ipa: '/si ʒa.vɛ nɔ.te sɔ̃ ny.me.ʁo ʒə pu.ʁɛ la.ple mɛ̃t.nɑ̃/', tip: "L'appel serait maintenant. EN: the call would be now." },
    { promptLabel: 'aurait vécu', promptSound: "Si elle avait accepté ce poste à Genève, elle aurait vécu en Suisse aujourd'hui.", fr: "Si elle avait accepté ce poste à Genève, elle vivrait en Suisse aujourd'hui.", ipa: '/si ɛ.la.vɛ.tak.sɛp.te sə pɔst a ʒə.nɛv ɛl vi.vʁɛ ɑ̃ sɥis o.ʒuʁ.dɥi/', tip: "Aujourd'hui, elle vivrait : conditionnel présent. EN: vivrait." },
  ],
  drill: [
    { promptSay: "Si j'avais dormi cette nuit, je ... moins fatigué ce matin.", opts: ['serais', 'aurais été'], correct: 0 },
    { promptSay: "Si tu avais pris le train de sept heures, tu ... déjà là maintenant.", opts: ['aurais été', 'serais'], correct: 1 },
    { promptSay: "Si j'avais économisé, je ... partir en vacances cet été.", opts: ['pourrais', 'aurais pu'], correct: 0 },
    { promptSay: "Si elle n'avait pas raté son bus, elle ... avec nous en ce moment.", opts: ['aurait été', 'serait'], correct: 1 },
    { promptSay: "S'il était resté à la faculté, il ... son droit à l'époque.", opts: ['aurait fini', 'finirait'], correct: 0 },
    { promptSay: "Si nous avions vendu l'appartement, nous ... de l'argent de côté aujourd'hui.", opts: ['aurions eu', 'aurions'], correct: 1 },
    { promptSay: "Si j'avais appris l'allemand, je ... mes collègues maintenant.", opts: ['comprendrais', 'aurais compris'], correct: 0 },
    { promptSay: "Si tu étais parti plus tôt, tu ... à l'heure hier.", opts: ['serais arrivé', 'arriverais'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'La cause ne tire pas le résultat en arrière' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la main écrit toute seule' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-04-piege-recul'),
  say: REFRAME,
  terms: ['resultat', 'horloge'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Cinq effets qui durent encore',
  frSub: 'Des causes d’hier, des vies d’aujourd’hui',
  examples: [
    ex(E(1634), 'un choix de carrière, un pays de vie'),
    ex(E(1635), 'l’école d’hier, le bureau d’aujourd’hui'),
    ex(E(1630), 'une ouverture, un métier'),
    ex(E(1645), 'hier le rapport, ce matin la liberté'),
    ex(E(1641), 'un départ, une présence'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['cause', 'resultat'],
};

const A3_TEXTE = texte('a3-texte', 'Dans un texte : le pain de Julien', 'Complète pour que le texte tienne', TEXTE_3,
  [
    { word: 'pétrissant', en: 'kneading', note: 'Travailler la pâte à la main, pour faire le pain.' },
    { word: 'faculté', en: 'faculty, university school', note: 'L’école de l’université où l’on étudie une discipline : ici, le droit.' },
  ],
  [
    { q: 'Complète : « Si tu avais fini ton droit, tu ... avocat aujourd’hui. »', a: "serais : la cause est passée, l'effet regarde aujourd'hui." },
    { q: 'Complète : « Si j’étais resté à la faculté, je ... peut-être mieux ma vie. »', a: "gagnerais : Julien parle de ses revenus actuels." },
    { q: 'Réécris pour parler de l’époque : « je ne connaîtrais pas mes clients ».', a: "je n'aurais pas connu mes clients : les deux horloges seraient alors sur hier." },
    { q: 'Pourquoi la mère ne dit-elle pas « tu aurais été avocat » ?', a: "Parce qu'elle pense à son fils aujourd'hui, pas à l'époque de ses études." },
  ],
  'rec-b2-04-texte-3', ['cause', 'resultat']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La forme', 'Une cause passée, un effet présent : quelle paire ?',
    ['si + plus-que-parfait, puis conditionnel présent', 'si + imparfait, puis conditionnel passé', 'si + plus-que-parfait, puis conditionnel passé'], 0,
    "Chaque moitié son moment : hier, puis maintenant. EN: yesterday, then now."),
  ctl('Le piège', 'Quel réflexe as-tu cassé dans cet acte ?',
    ['mettre le résultat au passé parce que la cause l’est', 'mettre un futur après si'], 0,
    "La cause ne tire pas le résultat en arrière. EN: the cause does not drag the result back."),
  ctl('Le signal', 'Quel mot t’aide le plus à régler le résultat ?',
    ['aujourd’hui, maintenant, déjà', 'si'], 0,
    "Ce sont les témoins de l'horloge du résultat. EN: they witness the result's clock."),
], ['cause', 'resultat']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Une cause passée',
    opener: {
      line: "Un choix d'il y a cinq ans, une vie d'aujourd'hui : ici tu relies les deux dans une seule phrase. EN: A choice from five years ago, a life today: here you join them in one sentence.",
      imageRef: 'lessons/si-mixtes/act03.jpg',
    },
    sections: [],
    milestone: "Tu relies une cause passée à un effet présent sans laisser le résultat reculer. EN: You can join a past cause to a present effect without letting the result slip back.",
    estScreens: 42, restPoints: ['a3-construire', 'a3-piege'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_ECOUTE, A3_PIEGE, A3_EXEMPLES, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: UN ÉTAT QUI DURE, UN EFFET PASSÉ
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Les clés d’Awa',
  frSub: 'Une nature, un oubli',
  setting: 'Dakar. Awa a encore perdu ses clés. Son colocataire, Moussa, l’a fait entrer.',
  bubbles: [
    { from: 'narrator', fr: 'C’est la troisième fois ce mois-ci.', en: 'It is the third time this month.' },
    { from: 'coach', fr: fr(E(1647)), en: en(E(1647)), warn: 'Ta nature, puis hier' },
    { from: 'user', fr: 'Je suis prudente. C’est juste que ce jour-là, j’étais pressée.', en: 'I am careful. It is just that on that day I was in a hurry.' },
    { from: 'coach', fr: fr(E(1657)), en: en(E(1657)), warn: 'Ce jour-là, puis ce jour-là' },
    { from: 'narrator', fr: 'La première phrase parle de son caractère. La seconde, d’un seul moment.', en: 'The first sentence is about her character. The second, about one moment.' },
    { from: 'user', fr: fr(E(1654)), en: en(E(1654)) },
  ],
  closing: { fr: 'L’imparfait après si garde un état qui dure. Le résultat, lui, est déjà passé.', en: 'The imparfait after si keeps a lasting state. The result is already past.' },
  audio: REC('rec-b2-04-awa'),
  say: REFRAME,
  terms: ['trait', 'mixte'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-moities',
  title: 'Toujours l’état, hier l’effet',
  frSub: 'Si + imparfait, puis conditionnel passé',
  hint: 'Quatre cartes : une nature, un moment.',
  audio: REC('rec-b2-04-etat'),
  say: REFRAME,
  terms: ['trait', 'resultat'],
  cards: [
    {
      head: 'La forme', label: 'état qui dure',
      fr: fr(E(1647)),
      sub: rsOf(E(1647)),
      body: "Si + imparfait, puis conditionnel passé. Tu n'es pas prudent, ni hier ni aujourd'hui ; les clés, elles, sont perdues. EN: imparfait after si, past conditional in the result.",
    },
    {
      head: 'À côté', label: 'un seul moment',
      fr: fr(E(1657)),
      sub: rsOf(E(1657)),
      body: "Avec le plus-que-parfait, tu parles d'un moment : ce jour-là, tu n'as pas fait attention. EN: one moment, not your nature.",
    },
    {
      head: 'Une capacité', label: 'état qui dure',
      fr: fr(E(1648)),
      sub: rsOf(E(1648)),
      body: "Tu ne parles toujours pas espagnol : imparfait. La visite guidée est finie : conditionnel passé. EN: an ability you still lack.",
    },
    {
      head: 'Un fait qui dure', label: 'état qui dure',
      fr: fr(E(1655)),
      sub: rsOf(E(1655)),
      body: "Le musée est fermé chaque lundi, hier comme demain. Seule la visite manquée est passée. EN: a standing fact, a missed visit.",
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis l’état et l’occasion manquée',
  frSub: 'Deux groupes, une gâchette chacun',
  groups: [
    grp('Un trait de caractère', [
      it(E(1650), 'la timidité, puis hier soir'),
      it(E(1654), 'l’entêtement, puis l’aide refusée'),
      it(E(1659), 'la hâte, puis le contrat signé'),
      it(E(1649), 'la peur de l’avion, puis le mariage'),
    ], chk('Dans ces phrases, le trait est-il encore vrai aujourd’hui ?',
      ['oui', 'non'], 0,
      "L'imparfait après si dit un état qui dure. EN: the trait still holds.")),
    grp('Une capacité, un fait', [
      it(E(1652), 'il ne sait toujours pas cuisiner'),
      it(E(1660), 'la ville reste inconnue'),
      it(E(1661), 'elle est médecin, et le reste'),
      it(E(1662), 'les billets restent chers'),
    ], chk('Et le résultat, dans ces phrases ?',
      ['il est passé', 'il est à venir', 'il se voit maintenant'], 0,
      "Aurait préparé, serais perdu, aurait su : tout est déjà joué. EN: already over.")),
    ctl('Le contraste', '« Si j’étais plus prudent » et « si j’avais été plus prudent » : est-ce la même idée ?',
      ['non : une nature, ou un moment', 'oui, c’est pareil'], 0,
      "L'imparfait parle de toi ; le plus-que-parfait, de ce jour-là. EN: your nature, or that day."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['trait', 'resultat'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs d’état',
  errors: [
    {
      wrong: "Si j'avais été plus prudent de nature, je n'aurais pas perdu mes clés.",
      right: "Si j'étais plus prudent de nature, je n'aurais pas perdu mes clés.",
      why: "Normal : le résultat est passé, alors la main recule aussi la cause. Mais « de nature » dit un état qui dure. EN: de nature marks a lasting state, so the imparfait.",
    },
    {
      wrong: 'Si tu parlais espagnol, tu comprendrais le guide hier.',
      right: fr(E(1648)),
      why: "L'état est bien présent, mais la visite est finie. Hier règle l'autre horloge. EN: hier sets the result in the past.",
    },
    {
      wrong: 'Si je connaîtrais la ville, je ne me serais pas perdu.',
      right: fr(E(1660)),
      why: "Même pour un état, jamais de conditionnel après si : l'imparfait. EN: never a conditional after si.",
    },
    {
      wrong: "Si Awa était moins têtue, elle accepterait notre aide la semaine dernière.",
      right: fr(E(1654)),
      why: "La semaine dernière : le refus est passé, donc aurait accepté. EN: a past refusal takes the past conditional.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['trait', 'siJaurais'],
};

const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Une nature, ou un moment',
  frSub: 'Quatre pages, quatre décisions',
  groups: [
    ctl('Moussa parle de ton caractère', 'Tu perds souvent tes affaires. Moussa te dit...',
      ['Si tu étais plus ordonnée, tu ne les aurais pas oubliées.', 'Si tu avais été plus ordonnée, tu ne les aurais pas oubliées.'], 0,
      "Souvent : c'est ta nature, donc l'imparfait. EN: often means your nature."),
    ctl('Un seul matin', 'D’habitude, tu es ordonnée. Mardi, tu as tout laissé au café. Tu dis...',
      ['Si j’étais plus ordonnée, je ne les aurais pas oubliées.', 'Si j’avais été plus attentive mardi, je ne les aurais pas oubliées.'], 1,
      "Un seul jour, un seul moment : le plus-que-parfait. EN: one day, the pluperfect."),
    ctl('Un fait qui ne change pas', 'Le musée ferme tous les lundis. Tu dis...',
      ['S’il était ouvert le lundi, nous l’aurions visité.', 'S’il avait été ouvert le lundi, nous le visiterions.'], 0,
      "Un fait permanent, une visite manquée. EN: a standing fact, a missed visit."),
    ctl('Une compétence', 'Tu ne sais toujours pas nager, et hier tu n’as pas suivi tes amis. Tu dis...',
      ['Si j’avais su nager, je vous suivrais.', 'Si je savais nager, je vous aurais suivis.'], 1,
      "Toujours pas : imparfait. Hier : conditionnel passé. EN: still not, then yesterday."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['trait', 'horloge'],
};

const A4_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a4-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'L’imparfait, puis l’auxiliaire',
  itemIds: dicteeFor(4),
  audio: AUDIO,
  say: REFRAME,
  terms: ['trait'],
};

const A4_TEXTE = texte('a4-texte', 'Dans un texte : les clés d’Awa', 'Complète pour que le texte tienne', TEXTE_4,
  [
    { word: 'serrurier', en: 'locksmith', note: 'L’artisan qui ouvre les portes et change les serrures.' },
    { word: 'palier', en: 'landing', note: 'L’espace devant la porte, en haut de l’escalier.' },
  ],
  [
    { q: 'Complète : « Si tu ... plus ordonnée, tu ne les aurais pas oubliées au café. »', a: "étais : Moussa parle du caractère d'Awa, toujours le même." },
    { q: 'Complète : « Si tu rangeais le salon, j’... le double tout de suite. »', a: "aurais trouvé : la recherche du double a eu lieu mardi." },
    { q: 'Pourquoi Moussa dit-il ensuite « si elle avait été là plus tôt » ?', a: "Parce que la boîte n'existait pas avant ce soir : c'est un moment passé, plus une nature." },
    { q: 'Réécris pour un seul oubli : « Si tu étais plus ordonnée… »', a: "Si tu avais été plus attentive mardi, tu ne les aurais pas oubliées : un moment, donc le plus-que-parfait." },
  ],
  'rec-b2-04-texte-4', ['trait', 'resultat']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La forme', 'Un état qui dure, un effet déjà passé : quelle paire ?',
    ['si + imparfait, puis conditionnel passé', 'si + plus-que-parfait, puis conditionnel présent'], 0,
    "L'état est toujours vrai, l'effet est fini. EN: a lasting state, a finished effect."),
  ctl('Le contraste', '« Si j’avais été prudent » parle...',
    ['d’un moment précis', 'de ta nature'], 0,
    "Le plus-que-parfait met la condition à un moment passé. EN: one past moment."),
  ctl('Les indices', 'Quels mots signalent un état qui dure ?',
    ['toujours, de nature, souvent', 'ce jour-là, mardi'], 0,
    "Ils disent que la condition n'a pas changé. EN: they say it has not changed."),
], ['trait', 'mixte']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Un état qui dure',
    opener: {
      line: "Ton caractère n'a pas changé, mais l'occasion est passée : ici tu dis les deux dans une seule phrase. EN: Your character has not changed but the chance has gone: here you say both in one sentence.",
      imageRef: 'lessons/si-mixtes/act04.jpg',
    },
    sections: [],
    milestone: "Tu distingues une nature d'un moment, et tu règles la moitié si en conséquence. EN: You can tell a lasting nature from a single moment and set the si half to match.",
    estScreens: 40, restPoints: ['a4-construire', 'a4-choisir'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_CONSTRUIRE, A4_ERREURS, A4_CHOISIR, A4_DICTEE, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: DEUX HORLOGES SUR UNE LIGNE
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Et si tu étais resté',
  frSub: 'Karim et sa fille',
  setting: 'Montréal, un soir de neige. Yasmine, douze ans, demande à son père pourquoi il a quitté Oran.',
  bubbles: [
    { from: 'narrator', fr: 'Karim sort un crayon et trace une ligne sur une serviette en papier.', en: 'Karim takes out a pencil and draws a line on a paper napkin.' },
    { from: 'coach', fr: fr(E(1664)), en: en(E(1664)), warn: 'Un point il y a douze ans, un point aujourd’hui' },
    { from: 'coach', fr: fr(E(1665)), en: en(E(1665)), warn: 'Deux points il y a douze ans' },
    { from: 'user', fr: 'Et tu n’as jamais eu envie de rentrer.', en: 'And you never wanted to go back.' },
    { from: 'coach', fr: fr(E(1666)), en: en(E(1666)), warn: 'Un point partout, un point hier' },
    { from: 'narrator', fr: 'Sur la serviette, chaque phrase a deux croix. Parfois au même endroit, parfois non.', en: 'On the napkin, every sentence has two crosses. Sometimes in the same place, sometimes not.' },
  ],
  closing: { fr: 'Avant d’écrire, place deux points sur la ligne : un pour la condition, un pour le résultat.', en: 'Before writing, put two points on the line: one for the condition, one for the result.' },
  audio: REC('rec-b2-04-karim'),
  say: REFRAME,
  terms: ['horloge', 'mixte'],
};

const A5_LIGNE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-ligne',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ligne',
  title: 'Deux points sur la ligne du temps',
  frSub: 'Une horloge par moitié',
  hint: 'Quatre cartes, une question par carte.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['horloge'],
  cards: [
    {
      head: 'Première question', label: 'la condition',
      fr: fr(E(1669)),
      sub: rsOf(E(1669)),
      body: "Quand la condition se joue-t-elle ? Hier : plus-que-parfait. Maintenant, ou toujours : imparfait. EN: when does the condition play out?",
    },
    {
      head: 'Seconde question', label: 'le résultat',
      fr: fr(E(1670)),
      sub: rsOf(E(1670)),
      body: "Quand le résultat se voit-il ? Maintenant ou plus tard : conditionnel présent. Hier : conditionnel passé. EN: when does the result show?",
    },
    {
      head: 'Un résultat à venir', label: 'demain aussi',
      fr: fr(E(1674)),
      sub: rsOf(E(1674)),
      body: "La course est dimanche prochain : le conditionnel présent couvre aussi ce qui vient. EN: the present conditional also covers what is coming.",
    },
    {
      head: 'Deux points au même endroit', label: 'la paire classique',
      fr: fr(E(1672)),
      sub: rsOf(E(1672)),
      body: "Quand les deux croix tombent ensemble, tu retrouves la paire de la leçon 3 du B2. Elle n'est pas fausse : elle dit autre chose. EN: two points together give the classic pair.",
    },
  ],
};

const A5_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-table',
  layer: 'core',
  sheetId: 'sheet-ligne',
  title: 'Une situation, six réglages',
  frSub: 'Karim, Oran et Montréal',
  cols: ['Condition', 'Résultat', 'Exemple'],
  rows: [
    {
      cells: ['hier', 'aujourd’hui', 'il habiterait encore à Oran'],
      say: fr(E(1664)),
      detail: { title: 'Hier, puis aujourd’hui', body: "Le départ date d'il y a douze ans ; sa vie d'aujourd'hui en dépend. EN: past cause, present result.", say: fr(E(1671)) },
    },
    {
      cells: ['hier', 'hier', 'il n’aurait pas rencontré Sophie'],
      say: fr(E(1665)),
      detail: { title: 'Hier, puis hier', body: "La rencontre a eu lieu la première année. Deux points ensemble : la paire classique. EN: both points in the past.", say: fr(E(1672)) },
    },
    {
      cells: ['toujours', 'hier', 'il serait déjà rentré'],
      say: fr(E(1666)),
      detail: { title: 'Toujours, puis hier', body: "Il aime le froid, depuis toujours ; le retour ne s'est pas fait. EN: a lasting state, a past result.", say: fr(E(1673)) },
    },
    {
      cells: ['toujours', 'aujourd’hui', 'il rentrerait à Oran'],
      say: fr(E(1667)),
      detail: { title: 'Toujours, puis aujourd’hui', body: "Deux points au présent : la paire de la leçon 10 du B1. EN: both points now, the B1 pair.", say: fr(E(1614)) },
    },
    {
      cells: ['hier', 'demain', 'tu commencerais lundi'],
      say: fr(E(1676)),
      detail: { title: 'Hier, puis demain', body: "Le dossier non envoyé, le travail qui aurait commencé lundi prochain. EN: past cause, coming result.", say: fr(E(1674)) },
    },
    {
      cells: ['toujours', 'hier', 'on m’aurait confié ce dossier'],
      say: fr(E(1677)),
      detail: { title: 'Une compétence, une occasion', body: "Tu n'es pas bilingue ; le dossier est parti chez un collègue. EN: a skill you lack, a chance you missed.", say: fr(E(1673)) },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['horloge', 'mixte'],
};

const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Place les deux points, puis choisis',
  frSub: 'Quatre situations sous charge',
  groups: [
    ctl('Le vol manqué', 'Tu as raté le vol de ce matin. Ce soir, tu es encore à Montréal. Tu dis...',
      ['Si j’avais pris ce vol, je serais à Paris ce soir.', 'Si j’avais pris ce vol, j’aurais été à Paris ce soir.'], 0,
      "Ce soir est devant toi : conditionnel présent. EN: tonight is still to come."),
    ctl('La course', 'Léa n’est pas sportive. Dimanche dernier, elle a abandonné. Tu dis...',
      ['Si Léa était plus sportive, elle aurait fini la course.', 'Si Léa avait été plus sportive, elle finirait la course.'], 0,
      "Un trait qui dure, une course finie. EN: a lasting trait, a finished race."),
    ctl('Le dossier', 'Tu n’as pas envoyé ton dossier. Le poste commence lundi prochain. Tu dis...',
      ['Si tu avais envoyé ton dossier, tu aurais commencé lundi.', 'Si tu avais envoyé ton dossier, tu commencerais lundi.'], 1,
      "Lundi prochain : un résultat à venir, au conditionnel présent. EN: a coming result."),
    ctl('Le téléphone', 'Tu as cassé ton téléphone hier. Ton ami veut la photo maintenant. Tu dis...',
      ['Si je n’avais pas cassé mon téléphone, je t’enverrais la photo.', 'Si je ne cassais pas mon téléphone, je t’aurais envoyé la photo.'], 0,
      "L'accident est passé, l'envoi serait maintenant. EN: a past accident, a present sending."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['horloge', 'resultat'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Combien d’horloges',
  frSub: 'Dix phrases, un seul geste',
  lines: [
    ln(E(1664)), ln(E(1665)), ln(E(1666)), ln(E(1667)), ln(E(1671)),
    ln(E(1672)), ln(E(1673)), ln(E(1674)), ln(E(1677)), ln(E(1678)),
  ],
  questions: [
    { q: 'Phrase 1 : où vit Karim aujourd’hui ?', opts: ['pas à Oran', 'à Oran'], correct: 0, why: "Il habiterait encore à Oran : ce n'est pas le cas. EN: he does not live there now." },
    { q: 'Phrase 3 : Karim aime-t-il le froid ?', opts: ['oui', 'non'], correct: 0, why: "S'il n'aimait pas le froid : l'imparfait nie un état qui dure. Il l'aime. EN: he likes it." },
    { q: 'Phrase 5 : ce soir, où est la personne ?', opts: ['pas à Paris', 'à Paris'], correct: 0, why: "Je serais à Paris ce soir : elle n'y est pas. EN: not in Paris." },
    { q: 'Phrase 8 : la course a-t-elle déjà eu lieu ?', opts: ['non, elle est dimanche', 'oui'], correct: 0, why: "Elle serait en forme pour la course de dimanche : à venir. EN: still to come." },
    { q: 'Phrase 10 : le téléphone marche-t-il ?', opts: ['non, il est cassé', 'oui'], correct: 0, why: "Si je n'avais pas cassé mon téléphone : il l'est. EN: it is broken." },
  ],
  audio: REC('rec-b2-04-ligne-ecoute'),
  say: REFRAME,
  terms: ['horloge'],
};

const A5_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a5-hacks',
  layer: 'core',
  title: 'Trois gestes avant d’écrire',
  frSub: 'La ligne, puis les temps',
  hacks: [
    {
      hack: 'Dessine une ligne et pose deux croix : une pour la condition, une pour le résultat.',
      why: "Si les croix sont au même endroit, c'est une paire classique ; sinon, une phrase mixte. EN: two crosses in one place, a classic pair; apart, a mixed one.",
    },
    {
      hack: "Ajoute « encore aujourd'hui » à ta moitié si. Si la phrase reste vraie, prends l'imparfait.",
      why: "C'est le test de l'état qui dure. EN: the test for a lasting state.",
    },
    {
      hack: "Demande-toi si le résultat se verrait maintenant, demain ou hier.",
      why: "Maintenant et demain partagent le conditionnel présent ; hier prend le passé. EN: now and tomorrow share one tense.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['horloge', 'trait'],
};

const A5_TEXTE = texte('a5-texte', 'Dans un texte : Karim et la neige', 'Complète pour que le texte tienne', TEXTE_5,
  [
    { word: 'dirige', en: 'manages, leads', note: 'Il est à la tête d’une équipe.' },
    { word: 'supportait', en: 'put up with, tolerated', note: 'Ici : il vivait bien avec le froid, sans en souffrir.' },
  ],
  [
    { q: 'Complète : « S’il n’était pas parti, il ... encore près de la mer. »', a: "habiterait : le départ est passé, sa vie serait autre aujourd'hui." },
    { q: 'Complète : « il n’... pas ... ses hivers à moins trente » (connaître).', a: "n'aurait pas connu : les hivers sont déjà vécus." },
    { q: 'Pourquoi « s’il supportait moins bien le froid » est-il à l’imparfait ?', a: "Parce que Karim supporte le froid depuis toujours : c'est un état qui dure." },
    { q: 'Réécris pour dire qu’il ne serait pas à Montréal aujourd’hui : « S’il n’avait pas rencontré Sophie, il… »', a: "S'il n'avait pas rencontré Sophie, il ne serait sans doute pas à Montréal aujourd'hui." },
  ],
  'rec-b2-04-texte-5', ['horloge', 'mixte']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le geste', 'Avant d’écrire une phrase avec si, tu places...',
    ['deux points sur la ligne du temps', 'un seul point'], 0,
    "Un pour la condition, un pour le résultat. EN: two points."),
  ctl('Demain', 'Un résultat qui viendra demain prend...',
    ['le conditionnel présent', 'le conditionnel passé', 'le futur'], 0,
    "Maintenant et demain partagent la même horloge. EN: now and later share one tense."),
  ctl('La paire classique', 'Si les deux points tombent au même moment passé, la phrase est-elle fausse ?',
    ['non, c’est la paire du passé', 'oui, elle doit être mixte'], 0,
    "Elle dit autre chose, c'est tout. EN: it just means something else."),
], ['horloge', 'resultat']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Deux horloges sur une ligne',
    opener: {
      line: "Une serviette en papier et un crayon suffisent : ici tu poses deux points sur la ligne du temps avant chaque phrase. EN: A paper napkin and a pencil are enough: here you put two points on the timeline before each sentence.",
      imageRef: 'lessons/si-mixtes/act05.jpg',
    },
    sections: [],
    milestone: "Tu places la condition et le résultat sur la ligne du temps, et chaque point choisit son temps. EN: You can place the condition and the result on the timeline and let each point pick its tense.",
    estScreens: 40, restPoints: ['a5-table', 'a5-ecoute'],
  },
  sections: [A5_HISTOIRE, A5_LIGNE, A5_TABLE, A5_CHOISIR, A5_ECOUTE, A5_HACKS, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: LES MOTS QUI RÈGLENT L'HORLOGE
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le message de Nadia',
  frSub: 'Écoute les petits mots de temps',
  lines: [
    ln(E(1679)), ln(E(1680)), ln(E(1681)), ln(E(1682)), ln(E(1683)),
    ln(E(1684)), ln(E(1690)), ln(E(1691)), ln(E(1692)),
  ],
  questions: [
    { q: 'Phrase 1 : quel mot place la cause dans le passé ?', opts: ['à l’époque', 'maintenant'], correct: 0, why: "À l'époque règle la condition ; maintenant, le résultat. EN: à l'époque sets the condition." },
    { q: 'Phrase 3 : les routes sont-elles fermées en ce moment ?', opts: ['non', 'oui'], correct: 0, why: "Elles seraient fermées aujourd'hui : elles ne le sont pas. EN: they are not." },
    { q: 'Phrase 4 : et là, le résultat regarde quand ?', opts: ['hier soir', 'aujourd’hui'], correct: 0, why: "Auraient été fermées hier soir : deux points dans le passé. EN: last night." },
    { q: 'Phrase 6 : quel est le métier de la personne ?', opts: ['réalisateur', 'acteur', 'on ne sait pas'], correct: 0, why: "Je ne serais pas réalisateur aujourd'hui : il l'est. EN: he is a director." },
    { q: 'Phrase 8 : la personne travaille-t-elle le samedi ?', opts: ['oui', 'non'], correct: 0, why: "Si je ne travaillais pas le samedi : elle y travaille, toujours. EN: she does." },
  ],
  audio: REC('rec-b2-04-marqueurs-ecoute'),
  say: REFRAME,
  terms: ['marqueur'],
};

const A6_MARQUEURS: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-marqueurs',
  layer: 'core',
  sheetId: 'sheet-ligne',
  title: 'Six familles de marqueurs',
  frSub: 'Touche une ligne',
  cols: ['Marqueur', 'Il règle', 'Temps'],
  rows: [
    {
      cells: ['aujourd’hui, maintenant', 'le résultat', 'conditionnel présent'],
      say: fr(E(1681)),
      detail: { title: 'Le présent du résultat', body: "Ce qui se verrait maintenant : les routes, le métier, la réponse. EN: a result that shows now.", say: fr(E(1684)) },
    },
    {
      cells: ['cette année, en ce moment', 'le résultat', 'conditionnel présent'],
      say: fr(E(1683)),
      detail: { title: 'Une période en cours', body: "Cette année n'est pas finie : le résultat reste au présent. EN: an unfinished period stays present.", say: fr(E(1690)) },
    },
    {
      cells: ['hier, ce matin', 'l’un ou l’autre', 'plus-que-parfait ou cond. passé'],
      say: fr(E(1680)),
      detail: { title: 'Un moment fini', body: "Ce matin, une fois la matinée finie, est déjà du passé. EN: this morning, once it is over, is past.", say: fr(E(1682)) },
    },
    {
      cells: ['l’an dernier, à l’époque', 'la condition', 'plus-que-parfait'],
      say: fr(E(1679)),
      detail: { title: 'Une époque close', body: "La condition date de loin ; son effet peut durer encore. EN: a distant condition, an effect that may last.", say: fr(E(1692)) },
    },
    {
      cells: ['de nature, toujours', 'la condition', 'imparfait'],
      say: fr(E(1685)),
      detail: { title: 'Un trait qui dure', body: "Ces mots disent que la condition n'a pas changé. EN: the condition has not changed.", say: fr(E(1691)) },
    },
    {
      cells: ['déjà', 'le résultat', 'selon le sens'],
      say: fr(E(1686)),
      detail: { title: 'Un mot à double sens', body: "Déjà suit l'horloge de sa moitié : tu serais déjà là, tu aurais déjà appelé. EN: déjà follows its half's clock.", say: fr(E(1608)) },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['marqueur', 'trait'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Suis le marqueur',
  frSub: 'Deux groupes, deux horloges',
  groups: [
    grp('Le marqueur dit maintenant', [
      it(E(1679), 'à l’époque, puis maintenant'),
      it(E(1681), 'hier, puis aujourd’hui'),
      it(E(1683), 'l’an dernier, puis cette année'),
      it(E(1690), 'hier, puis à l’heure qu’il est'),
    ], chk('Dans ces phrases, le résultat prend...',
      ['le conditionnel présent', 'le conditionnel passé'], 0,
      "Le marqueur du résultat regarde le présent. EN: the result's marker points to now.")),
    grp('Le marqueur dit hier', [
      it(E(1680), 'ce matin, déjà fini'),
      it(E(1682), 'hier soir'),
      it(E(1691), 'ta fête, la semaine passée'),
      it(E(1693), 'hier, au lac'),
    ], chk('Et ici ?',
      ['le conditionnel passé', 'le conditionnel présent'], 0,
      "Le résultat tombe dans le passé. EN: the result falls in the past.")),
    ctl('Sans marqueur', '« Si j’étais moins timide, je lui aurais parlé. » Aucun mot de temps. Comment choisis-tu ?',
      ['par le sens : ma nature, puis une occasion passée', 'au hasard'], 0,
      "Le marqueur confirme ; le sens décide. EN: the meaning decides."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['marqueur', 'horloge'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Le marqueur contredit',
  frSub: 'Six phrases qui se disputent',
  rule: {
    title: 'Le marqueur et le temps doivent dire la même heure',
    body: "Un résultat au conditionnel passé avec aujourd'hui, ou au conditionnel présent avec hier soir : la phrase se contredit. Accorde le temps au moment. EN: the tense and the marker must name the same moment.",
  },
  cards: [
    { promptLabel: 'hier + présent', promptSound: "Si je ne travaillais pas le samedi, je viendrais à ta fête hier.", fr: fr(E(1691)), ipa: ipaOf(E(1691)), tip: "Hier : la fête est passée. EN: the party is over." },
    { promptLabel: 'aujourd’hui + passé', promptSound: "S'il avait neigé hier, les routes auraient été fermées aujourd'hui.", fr: fr(E(1681)), ipa: ipaOf(E(1681)), tip: "Aujourd'hui : seraient fermées. EN: today, seraient." },
    { promptLabel: 'cette année + passé', promptSound: "Si elle avait travaillé l'an dernier, elle aurait été en terminale cette année.", fr: fr(E(1683)), ipa: ipaOf(E(1683)), tip: "Cette année n'est pas finie. EN: this year is not over." },
    { promptLabel: 'ce matin + présent', promptSound: "Si tu étais moins distrait, tu ne raterais pas ton arrêt ce matin.", fr: fr(E(1680)), ipa: ipaOf(E(1680)), tip: "Ce matin est passé : conditionnel passé. EN: this morning is past." },
    { promptLabel: 'maintenant + passé', promptSound: "Si j'avais accepté ce poste à l'époque, j'aurais vécu à Bruxelles maintenant.", fr: fr(E(1679)), ipa: ipaOf(E(1679)), tip: "Maintenant : je vivrais. EN: now, vivrais." },
    { promptLabel: 'hier + présent', promptSound: "Si je savais nager, je te suivrais dans le lac hier.", fr: fr(E(1693)), ipa: ipaOf(E(1693)), tip: "Hier : je t'aurais suivi. EN: yesterday, aurais suivi." },
  ],
  drill: [
    { promptSay: "S'il avait neigé hier, les routes ... fermées aujourd'hui.", opts: ['seraient', 'auraient été'], correct: 0 },
    { promptSay: "Si tu étais moins distrait, tu ... ton arrêt ce matin.", opts: ['ne raterais pas', "n'aurais pas raté"], correct: 1 },
    { promptSay: "Si j'avais accepté ce poste à l'époque, je ... à Bruxelles maintenant.", opts: ['vivrais', 'aurais vécu'], correct: 0 },
    { promptSay: "Si je ne travaillais pas le samedi, je ... à ta fête hier.", opts: ['viendrais', 'serais venu'], correct: 1 },
    { promptSay: "Si tu avais répondu hier, nous ... la réponse à l'heure qu'il est.", opts: ['aurions', 'aurions eu'], correct: 0 },
    { promptSay: "Si Marc était patient de nature, il ... ta réponse.", opts: ['aurait attendu', 'attendrait hier'], correct: 0 },
    { promptSay: "Si la boulangerie avait fermé l'an dernier, le quartier ... bien triste aujourd'hui.", opts: ['aurait été', 'serait'], correct: 1 },
    { promptSay: "Si on était déjà en vacances, on ... à la plage.", opts: ['serait', 'aurait été'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'La même heure des deux côtés du mot' },
    { label: 'Six cartes', kind: 'cards', title: 'Six phrases qui se contredisent' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases corrigées' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-04-piege-marqueur'),
  say: REFRAME,
  terms: ['marqueur'],
};

const A6_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a6-flash',
  layer: 'core',
  title: 'Huit marqueurs à connaître',
  frSub: 'Le mot, puis sa phrase',
  cards: [
    { front: 'today', back: 'aujourd’hui', say: fr(E(1681)) },
    { front: 'now', back: 'maintenant', say: fr(E(1679)) },
    { front: 'this year', back: 'cette année', say: fr(E(1683)) },
    { front: 'by now', back: 'à l’heure qu’il est', say: fr(E(1690)) },
    { front: 'at the time', back: 'à l’époque', say: fr(E(1679)) },
    { front: 'last year', back: 'l’an dernier', say: fr(E(1692)) },
    { front: 'ten years ago', back: 'il y a dix ans', say: fr(E(1684)) },
    { front: 'by nature', back: 'de nature', say: fr(E(1685)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['marqueur'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  title: 'Cinq marqueurs au travail',
  frSub: 'Chacun règle une moitié',
  examples: [
    ex(E(1684), 'il y a dix ans règle la cause, aujourd’hui le résultat'),
    ex(E(1692), 'l’an dernier, puis aujourd’hui'),
    ex(E(1685), 'de nature : un trait, donc l’imparfait'),
    ex(E(1686), 'déjà : deux points au présent'),
    ex(E(1693), 'hier règle le résultat'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['marqueur', 'trait'],
};

const A6_TEXTE = texte('a6-texte', 'Dans un texte : l’entretien de Léo', 'Complète pour que le texte tienne', TEXTE_6,
  [
    { word: 'soupire', en: 'sighs', note: 'Il laisse sortir un long souffle, un peu découragé.' },
    { word: "l'annonce", en: 'the job advert', note: 'Le texte qui présentait le poste.' },
  ],
  [
    { q: 'Complète : « Si tu avais préparé tes affaires hier soir, tu ... à l’heure ce matin. »', a: "serais arrivé : ce matin est passé, l'arrivée aussi." },
    { q: 'Complète : « tu ... déjà dans cette entreprise aujourd’hui » (travailler).', a: "travaillerais : aujourd'hui règle le résultat au présent." },
    { q: 'Pourquoi Léo dit-il « si j’étais moins distrait de nature » ?', a: "Parce que sa distraction dure : de nature appelle l'imparfait." },
    { q: 'La dernière phrase de Nadia est-elle une phrase mixte ?', a: "Non : « Si l'entretien s'est bien passé, on fête ça » est une condition réelle, au passé composé puis au présent." },
  ],
  'rec-b2-04-texte-6', ['marqueur', 'horloge']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le rôle', 'Un marqueur de temps...',
    ['confirme le moment de sa moitié', 'choisit le temps à ta place'], 0,
    "Le sens décide, le marqueur témoigne. EN: the marker witnesses."),
  ctl('Aujourd’hui', 'Avec aujourd’hui dans le résultat, tu écris...',
    ['il serait', 'il aurait été'], 0,
    "Aujourd'hui : conditionnel présent. EN: present conditional."),
  ctl('Cette année', '« Cette année » est-elle finie ?',
    ['non, elle est en cours', 'oui'], 0,
    "Une période en cours reste au présent. EN: an unfinished period stays present."),
], ['marqueur', 'horloge']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Les mots qui règlent l’horloge',
    opener: {
      line: "Aujourd'hui, hier, à l'époque : ici tu écoutes ce que les petits mots de temps disent de chaque moitié. EN: Today, yesterday, at the time: here you listen to what small time words say about each half.",
      imageRef: 'lessons/si-mixtes/act06.jpg',
    },
    sections: [],
    milestone: "Tu accordes chaque moitié à son marqueur, et tu repères une phrase qui se contredit. EN: You can match each half to its time marker and spot a sentence that contradicts itself.",
    estScreens: 42, restPoints: ['a6-marqueurs', 'a6-piege'],
  },
  sections: [A6_ECOUTE, A6_MARQUEURS, A6_CONSTRUIRE, A6_PIEGE, A6_FLASH, A6_EXEMPLES, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: REGRETTER ET CONSEILLER
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'La dispute d’Inès',
  frSub: 'Un conseil qui arrive tard',
  setting: 'Liège. Inès s’est disputée avec son amie Clara il y a une semaine. Elle en parle à Marie.',
  bubbles: [
    { from: 'user', fr: 'Clara ne me parle plus depuis samedi.', en: 'Clara has not spoken to me since Saturday.' },
    { from: 'coach', fr: fr(E(1694)), en: en(E(1694)), warn: 'Un reproche : hier, puis maintenant' },
    { from: 'user', fr: 'Je sais. Qu’est-ce que tu aurais fait, toi.', en: 'I know. What would you have done?' },
    { from: 'coach', fr: fr('fr.b1.conseils-et-suggestions.1154'), en: en('fr.b1.conseils-et-suggestions.1154'), warn: 'Un conseil pour maintenant' },
    { from: 'coach', fr: 'Mais pour samedi, je l’aurais appelée le soir même.', en: 'But on Saturday, I would have called her that same evening.', warn: 'Un conseil qui arrive tard' },
    { from: 'narrator', fr: 'Marie mêle le reproche, le conseil et le regret. Chaque fois, elle règle ses deux horloges.', en: 'Marie mixes reproach, advice and regret. Each time she sets her two clocks.' },
  ],
  closing: { fr: 'La phrase mixte sert à regretter, à reprocher et à conseiller après coup.', en: 'The mixed sentence is for regretting, reproaching and advising after the fact.' },
  audio: REC('rec-b2-04-ines'),
  say: REFRAME,
  terms: ['regret'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-usages',
  title: 'Quatre gestes avec la même forme',
  frSub: 'Regret, reproche, conseil, bilan',
  hint: 'Quatre cartes, quatre intentions.',
  audio: REC('rec-b2-04-usages'),
  say: REFRAME,
  terms: ['regret'],
  cards: [
    {
      head: 'Le regret', label: 'si seulement',
      fr: fr(E(1697)),
      sub: rsOf(E(1697)),
      body: "Si seulement, en tête, dit le regret sans même finir la phrase. EN: si seulement voices a regret.",
    },
    {
      head: 'Le reproche', label: 'hier, puis maintenant',
      fr: fr(E(1694)),
      sub: rsOf(E(1694)),
      body: "La faute date d'hier ; la situation dure. Le ton dépend de ta voix, pas de la grammaire. EN: yesterday's mistake, today's situation.",
    },
    {
      head: 'Le conseil trop tard', label: 'si j’étais toi',
      fr: fr(E(1695)),
      sub: rsOf(E(1695)),
      body: "Si j'étais toi reste à l'imparfait : ta place, tu ne la prendras jamais. Le geste manqué, lui, est passé. EN: the advice holds, the chance has gone.",
    },
    {
      head: 'Le bilan', label: 'aucun regret',
      fr: fr(E(1703)),
      sub: rsOf(E(1703)),
      body: "La même forme peut dire le contraire du regret : tu es content de ton choix. EN: the same form can say you are glad.",
    },
  ],
};

const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-exemples',
  layer: 'core',
  title: 'Cinq façons de revenir sur hier',
  frSub: 'Des regrets et des reproches',
  examples: [
    ex(E(1702), 'un regret de carrière'),
    ex(E(1699), 'un regret de santé : l’effet se sent encore'),
    ex(E(1706), 'une erreur de date, une absence ce soir'),
    ex(E(1709), 'un soulagement : le contrat non signé'),
    ex(E(1700), 'à ta place : un conseil trop tard, sans si'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret', 'mixte'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Choisis le geste, puis la forme',
  frSub: 'Deux groupes et un test',
  groups: [
    grp('Le conseil : maintenant ou trop tard', [
      it(E(1696), 'il est encore temps'),
      it(E(1695), 'il est trop tard'),
      it('fr.b1.conseils-et-suggestions.1154', 'un conseil pour maintenant, de la leçon 9 du B1'),
      it(E(1700), 'à ta place, pour un geste passé'),
    ], chk('Ton ami n’a pas encore appelé le propriétaire. Tu lui dis...',
      [fr(E(1696)), fr(E(1695))], 0,
      "Il est encore temps : le conseil regarde maintenant. EN: there is still time.")),
    grp('Le trait ou la faute', [
      it(E(1698), 'un défaut qui dure'),
      it(E(1701), 'la fierté, toujours là'),
      it(E(1708), 'le courage qui manque encore'),
      it(E(1707), 'un manque de courage, ce jour-là'),
    ], chk('Laquelle parle d’un moment, pas d’un caractère ?',
      [fr(E(1707)), fr(E(1708))], 0,
      "J'avais été : un moment passé. J'étais : une nature. EN: a moment, not a nature.")),
    ctl('Le test du ton', 'La même phrase peut-elle être un reproche ou une consolation ?',
      ['oui, selon la voix et la situation', 'non, jamais'], 0,
      "La grammaire règle les horloges ; le ton règle l'intention. EN: tone sets the intention."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret', 'trait'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de regret',
  errors: [
    {
      wrong: "Si j'aurais été toi, j'aurais déjà appelé le propriétaire.",
      right: fr(E(1695)),
      why: "Normal : le conseil semble tout entier au conditionnel. Mais derrière si, jamais : si j'étais toi. EN: never a conditional after si.",
    },
    {
      wrong: "Si tu m'avais écouté, tu n'aurais pas été dans cette situation maintenant.",
      right: fr(E(1694)),
      why: "Maintenant : la situation dure. Le résultat reste au présent. EN: the situation is ongoing.",
    },
    {
      wrong: "Si seulement j'aurais gardé mes notes, je pourrais t'aider.",
      right: fr(E(1697)),
      why: "Si seulement reste un si : plus-que-parfait. EN: si seulement is still si.",
    },
    {
      wrong: "Si tu n'avais pas été si fier de nature, tu lui aurais demandé pardon.",
      right: 'Si tu n’étais pas si fier de nature, tu lui aurais demandé pardon.',
      why: "De nature : la fierté dure encore, donc l'imparfait. EN: a lasting trait takes the imparfait.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret', 'siJaurais'],
};

const A7_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a7-focus',
  layer: 'core',
  sheetId: 'sheet-usages',
  title: 'Ce qu’il faut retenir pour regretter',
  frSub: 'Quatre lignes',
  points: [
    "Le regret : si seulement + plus-que-parfait, puis ce qui serait aujourd'hui. EN: si seulement plus the pluperfect.",
    "Le reproche : la faute d'hier, la situation de maintenant. EN: yesterday's mistake, today's situation.",
    "Le conseil trop tard : si j'étais toi, j'aurais... EN: si j'étais toi plus the past conditional.",
    "À ta place dit la même chose que si j'étais toi, sans si. EN: à ta place works like si j'étais toi.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret'],
};

const A7_TEXTE = texte('a7-texte', 'Dans un texte : la lettre de Marie', 'Complète pour que le texte tienne', TEXTE_7,
  [
    { word: 'dispute', en: 'quarrel', note: 'Une discussion qui tourne mal, avec des mots durs.' },
    { word: 'réconciliées', en: 'reconciled', note: 'Amies à nouveau, après la dispute.' },
  ],
  [
    { q: 'Complète : « Si tu l’avais fait, vous ... sans doute réconciliées aujourd’hui. »', a: "seriez : l'appel manqué date d'hier, la réconciliation serait maintenant." },
    { q: 'Complète : « si tu étais moins fière, tu lui ... déjà ... » (écrire).', a: "aurais déjà écrit : un trait qui dure, une occasion déjà passée." },
    { q: 'Quelle phrase donne un conseil pour maintenant ?', a: "« Si j'étais toi, je lui écrirais dès ce soir » : deux horloges au présent." },
    { q: 'Quelle phrase donne un conseil qui arrive trop tard ?', a: "« Si j'étais toi, je l'aurais appelée le soir même » : l'occasion est passée." },
  ],
  'rec-b2-04-texte-7', ['regret', 'horloge']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le conseil trop tard', 'Pour un geste que ton ami aurait dû faire hier, tu dis...',
    ['si j’étais toi, j’aurais...', 'si j’étais toi, je ferais...'], 0,
    "L'occasion est passée : conditionnel passé. EN: the chance has gone."),
  ctl('Si seulement', 'Après « si seulement », quel temps pour une chose d’hier ?',
    ['le plus-que-parfait', 'le conditionnel passé'], 0,
    "Si seulement reste un si. EN: still a si."),
  ctl('À ta place', '« À ta place » remplace...',
    ['si j’étais toi', 'si tu étais moi'], 0,
    "Même sens, sans la moitié si. EN: same meaning, no si half."),
], ['regret', 'mixte']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Regretter et conseiller',
    opener: {
      line: "Un reproche, un regret, un conseil qui arrive trop tard : ici la même forme sert trois intentions. EN: A reproach, a regret, advice that comes too late: here one form serves three intentions.",
      imageRef: 'lessons/si-mixtes/act07.jpg',
    },
    sections: [],
    milestone: "Tu regrettes, tu reproches et tu conseilles après coup en réglant bien tes deux horloges. EN: You can regret, reproach and advise after the fact with both clocks set right.",
    estScreens: 38, restPoints: ['a7-exemples', 'a7-erreurs'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_EXEMPLES, A7_CHOISIR, A7_ERREURS, A7_FOCUS, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: ARGUMENTER AVEC SI
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La chronique du tramway',
  frSub: 'Un texte d’opinion, à lire pour sa position',
  text: CHRONIQUE_TEXT,
  glossary: [
    { word: 'conseil municipal', en: 'town council', note: 'L’assemblée élue qui décide pour la ville.' },
    { word: "s'étirent", en: 'stretch out', note: 'Les files de voitures deviennent de plus en plus longues.' },
    { word: 'se nourrissent', en: 'feed on each other', note: 'Chaque erreur rend l’autre plus grave.' },
  ],
  questions: [
    { q: 'Global : quelle est la thèse de la chronique ?', a: "Renoncer au tramway, il y a dix ans, a été une erreur dont la ville paie encore le prix." },
    { q: 'Détail : quelle objection l’auteur envisage-t-il ?', a: "Si le tramway avait été construit, les impôts seraient plus élevés." },
    { q: 'Inférence : pourquoi écrit-il « sans doute » et « ce n’est pas une certitude » ?', a: "Parce qu'un passé imaginé ne se prouve pas : il nuance son argument." },
    { q: 'Position : l’auteur est-il seulement nostalgique ?', a: "Non : il finit sur une proposition pour aujourd'hui, avec une paire classique au présent (si nous agissions maintenant)." },
  ],
  audio: REC('rec-b2-04-chronique'),
  say: REFRAME,
  terms: ['argument'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-usages',
  title: 'Quatre gestes d’argumentation',
  frSub: 'Relier une décision à ses effets',
  hint: 'Quatre cartes, tirées de la chronique.',
  audio: REC('rec-b2-04-argument'),
  say: REFRAME,
  terms: ['argument'],
  cards: [
    {
      head: 'La décision passée', label: 'hier, puis aujourd’hui',
      fr: fr(E(1710)),
      sub: rsOf(E(1710)),
      body: "Le cœur de l'argument : une décision d'il y a dix ans, un problème d'aujourd'hui. EN: a past decision, a present problem.",
    },
    {
      head: 'L’état qui dure', label: 'toujours, puis hier',
      fr: fr(E(1711)),
      sub: rsOf(E(1711)),
      body: "Un problème actuel explique un départ déjà fait. EN: a current state explains a past departure.",
    },
    {
      head: 'La concession', label: 'certes',
      fr: fr(E(1715)),
      sub: rsOf(E(1715)),
      body: `Tu reconnais un point au camp adverse, dans la même forme. ${Cap(CONCESSION_REF)} : « ${B132_REFRAME} » EN: ${B132_REFRAME_EN}`,
    },
    {
      head: 'L’objection', label: 'on pourrait objecter',
      fr: fr(E(1722)),
      sub: rsOf(E(1722)),
      body: "Tu donnes la voix à l'autre camp avant de lui répondre. EN: you voice the other side before answering it.",
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis tes arguments',
  frSub: 'Deux sens, une ville',
  groups: [
    grp('Une décision d’hier, une ville d’aujourd’hui', [
      it(E(1712), 'des arbres plantés, ou non'),
      it(E(1714), 'un projet mal expliqué'),
      it(E(1719), 'des commerçants ignorés'),
      it(E(1721), 'une action trop tardive'),
    ], chk('Dans ces arguments, le résultat regarde...',
      ['la ville d’aujourd’hui', 'la ville d’il y a dix ans'], 0,
      "Seraient, soutiendraient, serait : le présent. EN: the present city.")),
    grp('Un état actuel, un échec passé', [
      it(E(1711), 'les loyers, les familles parties'),
      it(E(1713), 'l’accès, un commerce fermé'),
      it(E(1716), 'les transports, un parking construit'),
      it(E(1720), 'la distance, les trajets en voiture'),
    ], chk('Et la moitié si, ici ?',
      ['l’imparfait : un problème qui dure', 'le plus-que-parfait'], 0,
      "Les loyers sont toujours élevés. EN: the problem still holds.")),
    ctl('La prudence', 'Pourquoi ajouter « sans doute » à un argument mixte ?',
      ['parce qu’un passé imaginé ne se prouve pas', 'pour allonger la phrase'], 0,
      "Tu restes à la mesure de tes preuves. EN: stay within your evidence."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['argument', 'mixte'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le débat à la radio',
  frSub: 'Qui défend quoi',
  lines: [
    ln(E(1710)), ln(E(1722)), ln(E(1715)), ln(E(1719)), ln(E(1711)),
    ln(E(1723)), ln(E(1721)), ln(E(1713)),
  ],
  questions: [
    { q: 'Phrase 1 : l’orateur est-il pour ou contre le tramway ?', opts: ['pour', 'contre'], correct: 0, why: "Il regrette qu'on ne l'ait pas construit. EN: he regrets it was not built." },
    { q: 'Phrase 2 : que fait cette phrase ?', opts: ['elle présente une objection', 'elle conclut le débat'], correct: 0, why: "On pourrait objecter : la voix de l'autre camp. EN: an objection." },
    { q: 'Phrase 3 : l’orateur accorde-t-il quelque chose ?', opts: ['oui, que la situation serait pire sans rien', 'non'], correct: 0, why: "Certes : une concession. EN: a concession." },
    { q: 'Phrase 6 : le résultat regarde quel moment ?', opts: ['le passé : deux ans perdus', 'aujourd’hui'], correct: 0, why: "Nous n'aurions pas perdu : conditionnel passé. EN: the past." },
    { q: 'Phrase 8 : le commerce est-il ouvert ?', opts: ['non, il a fermé', 'oui'], correct: 0, why: "N'aurait pas fermé : il a fermé. EN: it closed." },
  ],
  audio: REC('rec-b2-04-debat'),
  say: REFRAME,
  terms: ['argument'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'L’argument qui recule ou qui affirme trop',
  frSub: 'Six arguments à régler',
  rule: {
    title: 'Un argument règle ses horloges et dose sa certitude',
    body: "Si l'effet se voit aujourd'hui, le résultat reste au présent. Et comme un passé imaginé ne se prouve pas, une nuance vaut mieux qu'une certitude. EN: keep the present result and hedge the claim.",
  },
  cards: [
    { promptLabel: 'recule', promptSound: "Si la ville avait investi dans le tramway, les bouchons auraient été moins graves aujourd'hui.", fr: fr(E(1710)), ipa: ipaOf(E(1710)), tip: "Aujourd'hui : seraient. EN: today, seraient." },
    { promptLabel: 'trop sûr', promptSound: "Si la ville avait écouté les commerçants, le quartier serait forcément plus vivant.", fr: fr(E(1719)), ipa: ipaOf(E(1719)), tip: "Sans doute : un passé imaginé ne se prouve pas. EN: hedge it." },
    { promptLabel: 'recule', promptSound: "Si on avait planté des arbres il y a vingt ans, nos rues auraient été plus fraîches aujourd'hui.", fr: fr(E(1712)), ipa: ipaOf(E(1712)), tip: "Les rues d'aujourd'hui : seraient. EN: today's streets." },
    { promptLabel: 'si + cond.', promptSound: "Si les loyers seraient moins élevés, les jeunes familles ne seraient pas parties.", fr: fr(E(1711)), ipa: ipaOf(E(1711)), tip: "Jamais de conditionnel après si : étaient. EN: étaient." },
    { promptLabel: 'recule', promptSound: "Si le projet avait été mieux expliqué, les habitants l'auraient soutenu aujourd'hui.", fr: fr(E(1714)), ipa: ipaOf(E(1714)), tip: "Leur soutien serait maintenant. EN: the support would be now." },
    { promptLabel: 'avance', promptSound: "Si nous avions agi plus tôt, nous n'aurions pas été là.", fr: fr(E(1721)), ipa: ipaOf(E(1721)), tip: "Là, c'est aujourd'hui : nous n'en serions pas là. EN: where we are today." },
  ],
  drill: [
    { promptSay: "Si la ville avait investi dans le tramway, les bouchons ... moins graves aujourd'hui.", opts: ['seraient', 'auraient été'], correct: 0 },
    { promptSay: "Si les loyers ... moins élevés, les familles ne seraient pas parties.", opts: ['seraient', 'étaient'], correct: 1 },
    { promptSay: "Si le centre-ville ... plus accessible, ce commerce n'aurait pas fermé.", opts: ['était', 'aurait été'], correct: 0 },
    { promptSay: "Si nous avions agi plus tôt, nous n'en ... pas là.", opts: ['serions', 'aurions été'], correct: 0 },
    { promptSay: "Si rien n'avait été fait, la situation ... pire aujourd'hui.", opts: ['aurait été', 'serait'], correct: 1 },
    { promptSay: "Le quartier serait ... plus vivant : on ne peut pas le prouver.", opts: ['forcément', 'sans doute'], correct: 1 },
    { promptSay: "Si la décision avait été prise à temps, nous n'... pas perdu deux ans.", opts: ['aurions', 'aurons'], correct: 0 },
    { promptSay: "Si l'école n'était pas si loin, les enfants y ... à pied.", opts: ['seraient allés', 'étaient allés'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Régler et doser' },
    { label: 'Six cartes', kind: 'cards', title: 'Six arguments bancals' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six arguments corrigés' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-04-piege-argument'),
  say: REFRAME,
  terms: ['argument', 'resultat'],
};

const A8_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a8-dictee',
  layer: 'core',
  title: 'Écris l’argument que tu entends',
  frSub: 'Une décision, un effet',
  itemIds: dicteeFor(8),
  audio: AUDIO,
  say: REFRAME,
  terms: ['argument'],
};

const A8_TEXTE = texte('a8-texte', 'Dans un texte : la piscine fermée', 'Complète pour que l’argument tienne', TEXTE_8,
  [
    { word: 'partenariat', en: 'partnership', note: 'Un accord entre deux institutions pour partager un projet.' },
    { word: 'bassins', en: 'pools', note: 'Les piscines où l’on nage.' },
  ],
  [
    { q: 'Complète : « Si la piscine n’avait pas fermé, les enfants du quartier ... nager aujourd’hui. »', a: "sauraient : la fermeture est passée, le savoir-nager serait maintenant." },
    { q: 'Complète : « si les élus ... plus attentifs aux besoins des familles, ils auraient cherché une autre solution. »', a: "étaient : leur manque d'attention dure encore." },
    { q: 'Où est la concession dans ce texte ?', a: "« Certes, si la ville l'avait gardée, elle aurait dû financer de lourds travaux. »" },
    { q: 'Rends plus prudente la deuxième phrase de l’argument, avec « sans doute ».', a: "Si la piscine n'avait pas fermé, les enfants du quartier sauraient sans doute nager aujourd'hui." },
  ],
  'rec-b2-04-texte-8', ['argument', 'horloge']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le rôle', 'Dans un texte d’opinion, une phrase mixte relie...',
    ['une décision passée et une situation actuelle', 'deux faits sans lien'], 0,
    "C'est son travail dans un argument. EN: that is its job."),
  ctl('La nuance', 'Un passé imaginé peut-il se prouver ?',
    ['non : on nuance avec sans doute', 'oui, toujours'], 0,
    "On reste à la mesure de ses preuves. EN: stay within the evidence."),
  ctl('L’objection', '« On pourrait objecter que, si... » sert à...',
    ['donner la voix à l’autre camp', 'conclure'], 0,
    "Tu l'annonces avant d'y répondre. EN: you raise it, then answer it."),
], ['argument', 'mixte']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Argumenter avec si',
    opener: {
      line: "Une ville a renoncé à un tramway il y a dix ans : ici tu relies cette décision à ses effets d'aujourd'hui, avec prudence. EN: A city gave up a tramway ten years ago: here you link that decision to today's effects, with care.",
      imageRef: 'lessons/si-mixtes/act08.jpg',
    },
    sections: [],
    milestone: "Tu défends une position en reliant une décision passée à ses effets actuels, et tu nuances ce que tu ne peux pas prouver. EN: You can argue by linking a past decision to its present effects, and hedge what you cannot prove.",
    estScreens: 42, restPoints: ['a8-cartes', 'a8-piege'],
  },
  sections: [A8_LECTURE, A8_CARTES, A8_CONSTRUIRE, A8_ECOUTE, A8_PIEGE, A8_DICTEE, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: AU CAS OÙ, À CONDITION QUE (RECOGNITION)
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Les consignes du guide',
  frSub: 'Précautions et exigences',
  setting: 'Sherbrooke. Élise prépare la randonnée de samedi avec le guide, au téléphone.',
  bubbles: [
    { from: 'coach', fr: fr(E(1724)), en: en(E(1724)), warn: 'Une précaution : au cas où + conditionnel' },
    { from: 'user', fr: 'Et mes enfants peuvent venir.', en: 'And my children can come.' },
    { from: 'coach', fr: 'Oui, à condition qu’un adulte les accompagne.', en: 'Yes, provided an adult goes with them.', warn: 'Une exigence : à condition que + subjonctif' },
    { from: 'user', fr: 'Je vous laisse mon numéro, au cas où.', en: 'I will leave you my number, just in case.' },
    { from: 'coach', fr: 'Si le vent est trop fort, nous prendrons le sentier du bas.', en: 'If the wind is too strong, we will take the lower path.', warn: 'Une condition réelle : si + présent' },
    { from: 'narrator', fr: 'Trois façons de parler de l’hypothèse. Chacune a son mode.', en: 'Three ways of talking about a hypothesis. Each has its own mood.' },
  ],
  closing: { fr: 'Au cas où prépare un imprévu ; à condition que pose une exigence.', en: 'Au cas où prepares for the unexpected; à condition que lays down a requirement.' },
  audio: REC('rec-b2-04-guide'),
  say: REFRAME,
  terms: ['aucasou', 'acondition'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-voisins',
  title: 'Les voisins de si',
  frSub: 'À reconnaître et à comprendre',
  hint: 'Quatre cartes. Ici, tu reconnais ; tu n’as pas à tout produire.',
  audio: REC('rec-b2-04-voisins'),
  say: REFRAME,
  terms: ['aucasou', 'acondition'],
  cards: [
    {
      head: 'Au cas où', label: '+ conditionnel',
      fr: fr(E(1724)),
      sub: rsOf(E(1724)),
      body: "Une précaution contre un imprévu. Le verbe prend le conditionnel, même pour demain. EN: a precaution, with the conditional.",
    },
    {
      head: 'Au cas où, tout seul', label: 'en fin de phrase',
      fr: fr('fr.b1.conseils-et-suggestions.1122'),
      sub: rsOf('fr.b1.conseils-et-suggestions.1122'),
      body: "Sans verbe, au cas où veut dire just in case. Tu l'as vu dans la leçon 9 du B1. EN: on its own, just in case.",
    },
    {
      head: 'À condition que', label: '+ subjonctif',
      fr: fr(E(1728)),
      sub: rsOf(E(1728)),
      body: `Une exigence. ${Cap(SUBJ_DECL_REF)} l'a rangé parmi les déclencheurs : « ${B115_REFRAME} » EN: ${B115_REFRAME_EN}`,
    },
    {
      head: 'À condition de', label: 'un seul sujet',
      fr: fr(E(1730)),
      sub: rsOf(E(1730)),
      body: "Quand le sujet est le même, l'infinitif suffit. EN: one subject, the infinitive.",
    },
  ],
};

const A9_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-trier',
  layer: 'core',
  size: 'lg',
  title: 'Précaution ou exigence',
  frSub: 'Reconnais le voisin à son mode',
  groups: [
    grp('Au cas où : une précaution', [
      it(E(1726), 'un numéro gardé'),
      it(E(1727), 'un vol peut-être annulé'),
      it(E(1734), 'une porte laissée ouverte'),
      it(E(1736), 'une carte laissée'),
    ], chk('Quel mode suit au cas où dans ces phrases ?',
      ['le conditionnel', 'le subjonctif', 'l’indicatif présent'], 0,
      "Aurais, serait, voudrait, changeriez. EN: the conditional.")),
    grp('À condition que : une exigence', [
      it(E(1729), 'un budget à respecter'),
      it(E(1735), 'un salaire à revoir'),
      it(OA(1341), 'prévenir la veille, de la leçon 15 du B1'),
      it(OA(1521), 'venir ensemble, de la leçon 16 du B1'),
    ], chk('Et après à condition que ?',
      ['le subjonctif', 'le conditionnel'], 0,
      "Soit, préviennes, viennes. EN: the subjunctive.")),
    ctl('Le sens', '« Au cas où il pleuvrait » : pense-t-on qu’il va pleuvoir ?',
      ['pas forcément : on se prépare', 'oui, c’est sûr'], 0,
      "Au cas où prépare un imprévu possible. EN: just a precaution."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aucasou', 'acondition'],
};

const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-exemples',
  layer: 'core',
  title: 'Cinq hypothèses, trois outils',
  frSub: 'Si, au cas où, à condition que',
  examples: [
    ex(E(1725), 'au cas où : une clé pour un imprévu'),
    ex(E(1735), 'à condition que : l’exigence d’un candidat'),
    ex(OA(1336), 'l’outil tout seul, de la leçon 15 du B1'),
    ex(E(1731), 'la règle du conditionnel'),
    ex(E(1732), 'la règle du subjonctif'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aucasou', 'acondition'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de voisinage',
  errors: [
    {
      wrong: 'Prends un parapluie au cas où il pleuve.',
      right: fr(E(1724)),
      why: "Normal : au cas où ressemble à pour que, qui prend le subjonctif. Mais au cas où prend le conditionnel. EN: au cas où takes the conditional.",
    },
    {
      wrong: "Je t'accompagne, à condition que tu conduis au retour.",
      right: fr(E(1728)),
      why: "À condition que est un déclencheur du subjonctif, comme dans la leçon 15 du B1. EN: à condition que triggers the subjunctive.",
    },
    {
      wrong: 'Si tu arriverais avant moi, la clé est sous le pot de fleurs.',
      right: 'Si tu arrives avant moi, la clé est sous le pot de fleurs.',
      why: "Avec si, jamais de conditionnel. C'est au cas où qui en prend un. EN: si never takes the conditional; au cas où does.",
    },
    {
      wrong: "Tu peux emprunter ma voiture, à condition que tu me la rendes ce soir, à condition de payer l'essence.",
      right: fr(E(1730)),
      why: "Deux exigences empilées alourdissent la phrase. Avec un seul sujet, à condition de suffit. EN: one subject, à condition de.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aucasou', 'acondition'],
};

const A9_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a9-flash',
  layer: 'core',
  title: 'Huit débuts de précaution et d’exigence',
  frSub: 'Le mode avec le mot',
  cards: [
    { front: 'in case it rains', back: 'au cas où il pleuvrait', say: fr(E(1724)) },
    { front: 'in case you get there first', back: 'au cas où tu arriverais', say: fr(E(1725)) },
    { front: 'in case I need help', back: 'au cas où j’aurais besoin d’aide', say: fr(E(1726)) },
    { front: 'in case you change your mind', back: 'au cas où vous changeriez d’avis', say: fr(E(1736)) },
    { front: 'provided you drive', back: 'à condition que tu conduises', say: fr(E(1728)) },
    { front: 'provided the budget is kept to', back: 'à condition que le budget soit respecté', say: fr(E(1729)) },
    { front: 'as long as you bring it back', back: 'à condition de me la rendre', say: fr(E(1730)) },
    { front: 'just in case', back: 'au cas où', say: fr('fr.b1.conseils-et-suggestions.1122') },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aucasou', 'acondition'],
};

const A9_TEXTE = texte('a9-texte', 'Dans un texte : le message du guide', 'Complète pour que le texte tienne', TEXTE_9,
  [
    { word: 'imperméable', en: 'raincoat', note: 'Un manteau qui ne laisse pas passer l’eau.' },
    { word: 'col', en: 'mountain pass', note: 'Le passage entre deux sommets.' },
  ],
  [
    { q: 'Complète : « Prenez un imperméable, au cas où il ... sur le col. »', a: "pleuvrait : au cas où prend le conditionnel." },
    { q: 'Complète : « Les enfants peuvent venir, à condition qu’un adulte les ... »', a: "accompagne : à condition que prend le subjonctif." },
    { q: 'Quelle phrase du guide est une condition réelle ?', a: "« Si le vent est trop fort, nous prendrons le sentier du bas » : si + présent, puis futur." },
    { q: 'La dernière phrase d’Élise est-elle mixte ?', a: "Non : si elle avait reçu, elle n'aurait pas marché. Les deux moitiés regardent l'an dernier." },
  ],
  'rec-b2-04-texte-9', ['aucasou', 'acondition']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Au cas où', 'Après au cas où, le verbe est...',
    ['au conditionnel', 'au subjonctif', 'au présent'], 0,
    "Au cas où il pleuvrait. EN: the conditional."),
  ctl('À condition que', 'Après à condition que, le verbe est...',
    ['au subjonctif', 'au conditionnel'], 0,
    "À condition que tu viennes. EN: the subjunctive."),
  ctl('Le sens', 'Lequel pose une exigence ?',
    ['à condition que', 'au cas où'], 0,
    "Au cas où prépare, à condition que exige. EN: one prepares, one requires."),
], ['aucasou', 'acondition']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Au cas où, à condition que',
    opener: {
      line: "Une précaution et une exigence ressemblent à une condition : ici tu reconnais les voisins de si à leur mode. EN: A precaution and a requirement look like a condition: here you recognise si's neighbours by their mood.",
      imageRef: 'lessons/si-mixtes/act09.jpg',
    },
    sections: [],
    milestone: "Tu reconnais au cas où et à condition que, et tu sais quel mode suit chacun. EN: You can recognise au cas où and à condition que and know which mood follows each.",
    estScreens: 38, restPoints: ['a9-trier', 'a9-erreurs'],
  },
  sections: [A9_HISTOIRE, A9_CARTES, A9_TRIER, A9_EXEMPLES, A9_ERREURS, A9_FLASH, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: LES PIÈGES
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le brouillon de Paul',
  frSub: 'Trois phrases, deux fautes',
  text: COURRIEL_TEXT,
  glossary: [
    { word: 'lettre de recommandation', en: 'reference letter', note: 'Une lettre où un ancien chef dit du bien de toi.' },
    { word: 'brouillon', en: 'draft', note: 'La première version, avant la relecture.' },
    { word: 'promotion', en: 'promotion', note: 'Un poste plus élevé dans la même entreprise.' },
  ],
  questions: [
    { q: 'Global : que demande Paul à son ancienne cheffe ?', a: "Une lettre de recommandation." },
    { q: 'Détail : quelles sont les deux fautes du brouillon ?', a: "« Si j'aurais su » (un conditionnel après si) et « j'aurais eu un meilleur poste aujourd'hui » (un résultat qui recule)." },
    { q: 'Inférence : pourquoi la troisième phrase est-elle juste ?', a: "Parce que le caractère de Paul dure encore et que son départ est passé : deux horloges, deux temps." },
    { q: 'Position : que révèle la réponse de la cheffe ?', a: "Qu'elle appréciait Paul : si vous étiez resté, je vous aurais proposé une promotion." },
  ],
  audio: REC('rec-b2-04-courriel'),
  say: REFRAME,
  terms: ['siJaurais', 'horloge'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Si j’aurais',
  frSub: 'La faute qu’on entend partout',
  rule: {
    title: 'Jamais de conditionnel derrière si',
    body: "Ni présent, ni passé. Si j'aurais su devient si j'avais su ; si j'aurais une voiture devient si j'avais une voiture. Le conditionnel vit dans l'autre moitié. EN: never a conditional after si.",
  },
  cards: [
    { promptLabel: 'si + cond. passé', promptSound: "Si j'aurais su que tu étais malade, je serais venu te voir.", fr: fr(E(1737)), ipa: ipaOf(E(1737)), tip: "Si j'avais su : plus-que-parfait. EN: pluperfect." },
    { promptLabel: 'si + cond. présent', promptSound: "Si j'aurais une voiture, tout aurait été plus simple.", fr: "Si j'avais une voiture, tout aurait été plus simple.", ipa: '/si ʒa.vɛ yn vwa.tyʁ tu.to.ʁɛ.te ply sɛ̃pl/', tip: "Un état qui dure : imparfait. EN: imparfait." },
    { promptLabel: 'si + cond. passé', promptSound: "Si tu aurais lu la consigne, tu saurais quoi faire maintenant.", fr: fr(E(1742)), ipa: ipaOf(E(1742)), tip: "Si tu avais lu. EN: si tu avais lu." },
    { promptLabel: 'si + cond. présent', promptSound: "Si le patron serait moins exigeant, Paul n'aurait pas démissionné.", fr: fr(E(1741)), ipa: ipaOf(E(1741)), tip: "Si le patron était. EN: était." },
    { promptLabel: 'si + cond. passé', promptSound: "Si elle aurait gardé son ancien numéro, je pourrais la joindre.", fr: fr(E(1745)), ipa: ipaOf(E(1745)), tip: "Si elle avait gardé. EN: avait gardé." },
    { promptLabel: 'si + cond. présent', promptSound: "Si je saurais lire une carte, nous ne nous serions pas perdus.", fr: fr(E(1746)), ipa: ipaOf(E(1746)), tip: "Si je savais. EN: savais." },
  ],
  drill: [
    { promptSay: "Si j'... su que tu étais malade, je serais venu te voir.", opts: ['aurais', 'avais'], correct: 1 },
    { promptSay: "Si tu ... lu la consigne, tu saurais quoi faire.", opts: ['avais', 'aurais'], correct: 0 },
    { promptSay: "Si nous ... un jardin, nous aurions fêté ton anniversaire dehors.", opts: ['aurions', 'avions'], correct: 1 },
    { promptSay: "Si le chauffage ..., nous n'aurions pas eu froid cette nuit.", opts: ['marchait', 'marcherait'], correct: 0 },
    { promptSay: "Si tu n'... pas oublié les billets, nous serions dans le train.", opts: ['aurais', 'avais'], correct: 1 },
    { promptSay: "Si Inès ... son permis, elle nous conduirait à l'aéroport.", opts: ['avait passé', 'aurait passé'], correct: 0 },
    { promptSay: "Si j'... été à ta place, j'aurais refusé.", opts: ['avais', 'aurais'], correct: 0 },
    { promptSay: "Si je ... lire une carte, nous ne nous serions pas perdus.", opts: ['saurais', 'savais'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Jamais de conditionnel derrière si' },
    { label: 'Six cartes', kind: 'cards', title: 'Six phrases qu’on entend' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-04-piege-jaurais'),
  say: REFRAME,
  terms: ['siJaurais'],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Relis comme Chloé',
  frSub: 'Deux questions par phrase',
  groups: [
    grp('Question 1 : la moitié si', [
      it(E(1737), 'avais su, jamais aurais su'),
      it(E(1741), 'était, jamais serait'),
      it(E(1750), 'marchait, un état qui dure'),
      it(E(1749), 'avais été, un moment passé'),
    ], chk('Derrière si, dans ces phrases, vois-tu un conditionnel ?',
      ['non, aucun', 'oui, un'], 0,
      "Imparfait ou plus-que-parfait seulement. EN: imparfait or pluperfect only.")),
    grp('Question 2 : l’horloge du résultat', [
      it(E(1738), 'ce matin, encore en cours'),
      it(E(1739), 'déjà, à cette heure'),
      it(E(1747), 'dans le train, maintenant'),
      it(E(1751), 'l’aéroport, demain'),
    ], chk('Le résultat, dans ces phrases, regarde...',
      ['maintenant ou demain', 'hier'], 0,
      "Conditionnel présent : serais, connaîtrais, serions, conduirait. EN: now or later.")),
    grp('Un cousin de la leçon 32 du B1', [
      it('fr.b1.connecteurs-logiques.1422', 'même si : la condition ne changerait rien'),
      it(PF(1236), 'la règle de la leçon 10 du B1'),
      it(E(1743), 'la même règle, au B2'),
      it(E(1744), 'le geste de relecture'),
    ], chk('Après même si, la règle de si s’applique-t-elle ?',
      ['oui : même si j’étais, jamais même si je serais', 'non'], 0,
      "Même si reste un si. EN: même si is still si.")),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['siJaurais', 'horloge'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre fautes par défaut',
  errors: [
    {
      wrong: "Si j'avais dormi davantage, j'aurais été moins fatigué ce matin.",
      right: fr(E(1738)),
      why: "Normal : c'est la paire de la leçon 3 du B2, et elle vient toute seule. Mais ce matin dure encore : je serais. EN: the classic pair comes by default.",
    },
    {
      wrong: "Si tu étais venu hier, tu aurais connu toute l'équipe aujourd'hui.",
      right: "Si tu étais venu hier, tu connaîtrais toute l'équipe aujourd'hui.",
      why: "Aujourd'hui règle le résultat : conditionnel présent. EN: today calls for the present conditional.",
    },
    {
      wrong: "Si nous avions eu un jardin, nous aurions fêté ton anniversaire dehors.",
      right: fr(E(1740)),
      why: "Juste si le jardin a existé puis disparu. Si tu n'en as toujours pas, l'imparfait dit mieux la vérité. EN: right only if the garden is gone.",
    },
    {
      wrong: 'Si Inès avait passé son permis, elle nous aurait conduits à l’aéroport demain.',
      right: fr(E(1751)),
      why: "Demain est devant toi : le conditionnel présent couvre aussi l'avenir. EN: tomorrow takes the present conditional.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['horloge', 'resultat'],
};

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Juste ou à corriger',
  frSub: 'Huit phrases relues à voix haute',
  lines: [
    ln(E(1742)), ln(E(1740)), ln(E(1745)), ln(E(1746)),
    ln(E(1747)), ln(E(1749)), ln(E(1750)), ln(E(1751)),
  ],
  questions: [
    { q: 'Phrase 1 : la personne sait-elle quoi faire ?', opts: ['non', 'oui'], correct: 0, why: "Tu saurais : elle ne sait pas. EN: she does not know." },
    { q: 'Phrase 2 : ont-ils un jardin ?', opts: ['non, et toujours pas', 'oui'], correct: 0, why: "Si nous avions un jardin : un état qui dure. EN: still no garden." },
    { q: 'Phrase 4 : se sont-ils perdus ?', opts: ['oui', 'non'], correct: 0, why: "Nous ne nous serions pas perdus : ils se sont perdus. EN: they got lost." },
    { q: 'Phrase 7 : le chauffage marche-t-il ?', opts: ['non', 'oui'], correct: 0, why: "Si le chauffage marchait : il ne marche pas. EN: it does not work." },
    { q: 'Phrase 8 : Inès a-t-elle son permis ?', opts: ['non', 'oui'], correct: 0, why: "Si Inès avait passé son permis : elle ne l'a pas. EN: she has not." },
  ],
  audio: REC('rec-b2-04-pieges-ecoute'),
  say: REFRAME,
  terms: ['horloge'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-pieges',
  title: 'Les quatre questions de la relecture',
  frSub: 'Avant d’envoyer',
  points: [
    "Derrière chaque si de condition : un imparfait ou un plus-que-parfait, jamais un conditionnel. EN: no conditional after si.",
    "Le résultat regarde-t-il maintenant, demain ou hier ? Accorde son temps. EN: set the result's clock.",
    `Le si qui rapporte une question, dans ${DISCOURS_REF}, n'est pas une condition. EN: reported si is not a condition.`,
    "Au cas où + conditionnel, à condition que + subjonctif. EN: the neighbours keep their moods.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['siJaurais', 'horloge'],
};

const A10_TEXTE = texte('a10-texte', 'Dans un texte : le message de Lucas', 'Réécris les phrases fautives', TEXTE_10,
  [
    { word: 'pardonner', en: 'forgive', note: 'Ici : se faire pardonner, obtenir que l’autre oublie la faute.' },
  ],
  [
    { q: 'Réécris la première phrase avec si.', a: "Si j'avais su que ton train arrivait à midi, je serais venu te chercher." },
    { q: 'Réécris la deuxième phrase : Lucas est encore gêné en écrivant.', a: "Si j'avais noté l'heure hier, je ne serais pas si gêné aujourd'hui, et tu n'aurais pas attendu une heure sous la pluie. La gêne dure : conditionnel présent ; l'attente est finie : conditionnel passé." },
    { q: 'Réécris « Si j’aurais une voiture ».', a: "Si j'avais une voiture, tout aurait été plus simple : un état qui dure, un résultat passé." },
    { q: 'La phrase « Si j’étais moins distrait, je n’aurais pas oublié » est-elle juste ?', a: "Oui : une nature qui dure, un oubli passé." },
  ],
  'rec-b2-04-texte-10', ['siJaurais', 'horloge']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La règle', '« Si j’aurais su » : juste ou faux ?',
    ['faux : si j’avais su', 'juste'], 0,
    "Jamais de conditionnel derrière si. EN: never after si."),
  ctl('Le défaut', 'Quel est le réflexe le plus fréquent devant une cause passée ?',
    ['mettre aussi le résultat au passé', 'mettre un futur'], 0,
    "La paire classique vient toute seule. EN: the classic pair comes by default."),
  ctl('La relecture', 'Combien de questions poses-tu à chaque phrase avec si ?',
    ['deux : la moitié si, puis l’horloge du résultat', 'aucune'], 0,
    "Une par moitié. EN: one per half."),
], ['siJaurais', 'horloge']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Les pièges',
    opener: {
      line: "Un brouillon, un crayon, une amie qui relit : ici tu chasses les deux fautes qui reviennent toujours. EN: A draft, a pencil, a friend who proofreads: here you hunt the two mistakes that always come back.",
      imageRef: 'lessons/si-mixtes/act10.jpg',
    },
    sections: [],
    milestone: "Tu relis une phrase avec si en deux questions et tu corriges « si j'aurais » et le résultat qui recule. EN: You can proofread a si sentence in two questions and fix both classic mistakes.",
    estScreens: 42, restPoints: ['a10-piege', 'a10-ecoute'],
  },
  sections: [A10_LECTURE, A10_PIEGE, A10_CONSTRUIRE, A10_ERREURS, A10_ECOUTE, A10_FOCUS, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: TA MISSION
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le texte de Karim',
  frSub: 'Le modèle de ta mission',
  text: MODELE_TEXT,
  glossary: [
    { word: 'entrepôt', en: 'warehouse', note: 'Un grand bâtiment où l’on stocke des marchandises.' },
    { word: 'têtu', en: 'stubborn', note: 'Qui ne change pas d’avis facilement.' },
    { word: 'recul', en: 'hindsight, distance', note: 'Avec le recul : en regardant les choses de loin, après coup.' },
  ],
  questions: [
    { q: 'Global : comment le texte est-il organisé ?', a: "La décision, ses conséquences d'alors, ses conséquences d'aujourd'hui, puis le bilan." },
    { q: 'Détail : trouve une phrase mixte dans chaque sens.', a: "« Si je n'étais pas parti, je ne dirigerais pas cette équipe » (hier, puis aujourd'hui) ; « Si j'étais moins têtu, je serais sans doute rentré » (toujours, puis hier)." },
    { q: 'Inférence : Karim regrette-t-il son départ ?', a: "Non : avec le recul, il referait le même choix, même s'il reconnaît des erreurs." },
    { q: 'Position : quelle nuance garde-t-il à la fin ?', a: "Il garde une porte ouverte, au cas où sa famille aurait besoin de lui." },
  ],
  audio: REC('rec-b2-04-modele'),
  say: REFRAME,
  terms: ['mixte', 'regret'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-pieges',
  title: 'Six étapes pour ton texte',
  steps: [
    '1. Choisis une décision réelle ou imaginée : un départ, un refus, un changement. EN: pick a decision.',
    "2. Raconte-la au passé, avec son contexte : où, quand, pourquoi. EN: tell it in the past.",
    "3. Ses conséquences d'alors : une paire au passé, ou un état qui dure puis un effet passé. EN: the consequences then.",
    "4. Ses conséquences d'aujourd'hui : si + plus-que-parfait, puis conditionnel présent. EN: the consequences now.",
    '5. Ton bilan, nuancé : avec le recul, certes, mais, sans doute. EN: a balanced assessment.',
    "6. Relis chaque si en deux questions, puis compte : 180 à 250 mots. EN: proofread each si and count.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['horloge', 'regret'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    { situation: "À l'épreuve écrite du DELF B2 : un texte de réflexion", fr: fr(E(1753)), en: en(E(1753)) },
    { situation: "Un entretien d'embauche : expliquer un parcours", fr: fr(E(1604)), en: en(E(1604)) },
    { situation: `${Cap(ARGUMENT_REF)} : un argument sur une décision publique`, fr: fr(E(1710)), en: en(E(1710)) },
    { situation: 'Une lettre à un ami : consoler ou conseiller', fr: fr(E(1695)), en: en(E(1695)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['mixte', 'argument'],
};

/** Say the plan out loud before writing it. ’ only, no corpus row. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'À l’oral, avant d’écrire',
  setting: 'Ton amie Awa veut connaître la décision dont tu vas parler. Réponds comme tu écriras.',
  turns: [
    {
      ai: 'Alors, de quelle décision vas-tu parler ?',
      en: 'So, which decision are you going to talk about?',
      user: 'D’une offre d’emploi à l’étranger que j’ai refusée il y a quelques années.',
      userEn: 'A job offer abroad that I turned down a few years ago. (The decision, set in the past.)',
      alts: [
        { fr: 'De mon départ de la maison familiale, à dix-huit ans.', en: 'Leaving the family home at eighteen.' },
        { fr: 'Du jour où j’ai abandonné mes études de médecine.', en: 'The day I gave up my medical studies.' },
      ],
    },
    {
      ai: 'Et qu’est-ce que ça a changé, à l’époque ?',
      en: 'And what did it change at the time?',
      user: 'Si j’étais plus aventureux, je serais parti sans hésiter, mais je suis resté.',
      userEn: 'If I were more adventurous, I would have left without hesitating, but I stayed. (A lasting trait, a past result.)',
      alts: [
        { fr: 'Si j’avais accepté, j’aurais dû quitter mes amis du jour au lendemain.', en: 'If I had accepted, I would have had to leave my friends overnight. (The classic past pair.)' },
        { fr: 'À l’époque, cette décision m’a coûté une belle occasion.', en: 'At the time, the decision cost me a fine opportunity.' },
      ],
    },
    {
      ai: 'Et aujourd’hui, qu’est-ce qui serait différent ?',
      en: 'And today, what would be different?',
      user: 'Si j’avais accepté, je parlerais sans doute trois langues aujourd’hui.',
      userEn: 'If I had accepted, I would probably speak three languages today. (A past cause, a present result.)',
      alts: [
        { fr: 'Si j’étais parti, je vivrais loin de ma famille maintenant.', en: 'If I had left, I would live far from my family now.' },
        { fr: 'Si j’avais dit oui, je n’aurais pas le poste que j’occupe aujourd’hui.', en: 'If I had said yes, I would not have the job I hold today.' },
      ],
    },
    {
      ai: 'Tu le regrettes ?',
      en: 'Do you regret it?',
      user: 'Parfois, mais avec le recul, je referais sans doute le même choix.',
      userEn: 'Sometimes, but looking back I would probably make the same choice. (A hedged assessment.)',
      alts: [
        { fr: 'Non : si c’était à refaire, je resterais.', en: 'No: if I had it to do again, I would stay.' },
        { fr: 'Un peu : si seulement j’avais osé, je serais peut-être plus heureux.', en: 'A little: if only I had dared, I might be happier. (Si seulement: regret.)' },
      ],
    },
    {
      ai: 'Et pour l’avenir ?',
      en: 'And for the future?',
      user: 'Je garde une porte ouverte, au cas où une autre occasion se présenterait.',
      userEn: 'I keep a door open, in case another opportunity comes up. (Au cas où with the conditional.)',
      alts: [
        { fr: 'Je repartirais, à condition que ma famille puisse me suivre.', en: 'I would leave again, provided my family could follow me. (À condition que with the subjunctive.)' },
        { fr: 'Si une offre arrive, je l’étudierai sérieusement.', en: 'If an offer comes, I will study it seriously. (A real condition.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret', 'mixte'],
};

/** THE GRADED TASK. Announced in act 1; every act added one tool. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Une décision, hier et aujourd’hui',
  frSub: 'Mission écrite, format B2',
  brief: "Une revue en ligne consacrée aux parcours de vie lance un appel à textes : « Une décision qui a compté ». Raconte une décision importante de ta vie, réelle ou imaginée. Montre ses conséquences à l'époque, puis aujourd'hui, et termine par un bilan nuancé.",
  briefEn: 'An online magazine about life paths is calling for texts: « A decision that mattered ». Tell of an important decision in your life, real or imagined. Show its consequences at the time, then today, and end with a balanced assessment.',
  produce: "Écris un texte de réflexion de 180 à 250 mots, en paragraphes : au moins deux phrases mixtes (une cause passée avec un effet présent, et un état qui dure avec un effet passé), au moins une paire classique, un bilan nuancé, et si possible au cas où ou à condition que.",
  responseSpec: { kind: 'text', minWords: 180, maxWords: 275 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          "3 : Une décision claire, ses conséquences à l'époque ET aujourd'hui, un bilan nuancé. Entre 180 et 250 mots.",
          "2 : Les trois temps existent, mais l'un est très court, ou le bilan manque de nuance, ou la longueur sort un peu des limites.",
          "1 : Un récit sans conséquences, ou seulement le passé, ou un texte beaucoup trop court.",
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          "3 : Des paragraphes qui suivent la ligne du temps (la décision, alors, aujourd'hui, le bilan), reliés par des connecteurs justes (à l'époque, aujourd'hui, en revanche, avec le recul, certes... mais).",
          "2 : Le plan se suit, mais un passage saute d'une époque à l'autre sans le dire, ou un connecteur dit le mauvais lien.",
          "1 : Les idées se suivent sans ordre visible ; le lecteur ne sait pas de quel moment tu parles.",
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue des structures',
        maxPoints: 2,
        descriptors: [
          "2 : Les deux sens de la phrase mixte, une paire classique, et au moins un autre outil de l'hypothèse (si seulement, à ta place, au cas où, à condition que).",
          "1 : Une seule sorte de phrase avec si, répétée.",
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          "2 : Chaque moitié prend le temps de son moment ; aucun conditionnel derrière si ; les participes et les auxiliaires sont justes.",
          "1 : Des « si j'aurais », ou des résultats qui reculent alors qu'ils parlent d'aujourd'hui, à plusieurs endroits.",
        ],
      },
      {
        key: 'registre',
        label: 'Registre et nuance',
        maxPoints: 2,
        descriptors: [
          "2 : Un ton personnel mais soigné, et des hypothèses dosées : sans doute, peut-être, avec le recul.",
          "1 : Un ton trop familier, ou des certitudes sur un passé imaginé (forcément, c'est sûr).",
        ],
      },
    ],
  },
  scaffold: [
    'Il y a quelques années,',
    "À l'époque,",
    'Si j’étais plus',
    'Si j’avais accepté,',
    "Aujourd'hui,",
    'En revanche,',
    'Avec le recul,',
    'au cas où',
  ],
  modelAnswer: "Il y a huit ans, j'ai refusé un poste à Lyon pour rester près de ma famille, à Liège. À l'époque, cette décision m'a coûté. Mes collègues partaient les uns après les autres, et je voyais passer des offres que je ne pouvais pas accepter. Si j'étais plus ambitieux, j'aurais sans doute fait un autre choix ; mais je tiens à mes proches, et je n'ai pas hésité longtemps. Ma mère venait de tomber malade, et je voulais être là.\n\nAujourd'hui, les conséquences sont plus nuancées. Si j'avais accepté, je gagnerais sans doute mieux ma vie aujourd'hui, et je parlerais peut-être d'une carrière internationale. En revanche, je n'aurais pas vu grandir mes neveux, et je ne connaîtrais pas mes amis d'aujourd'hui. Si j'étais parti, je n'aurais pas non plus repris l'entreprise de mon père l'an dernier. Cette entreprise fait aujourd'hui vivre huit familles.\n\nAvec le recul, je referais le même choix. Certes, si j'avais été moins prudent, j'aurais tout quitté pour voir autre chose, et je le regrette parfois. Mais si c'était à refaire, je resterais, à condition que ma famille ait encore besoin de moi. Je garde toutefois une porte ouverte, au cas où une occasion se présenterait.\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : la décision, ses conséquences à l'époque, puis aujourd'hui, un bilan nuancé ; 198 mots.\n2. Cohérence : trois paragraphes sur la ligne du temps, reliés par à l'époque, aujourd'hui, en revanche, avec le recul, certes... mais.\n3. Étendue : les deux sens de la phrase mixte (« si j'étais plus ambitieux, j'aurais fait » ; « si j'avais accepté, je gagnerais »), deux paires classiques, à condition que, au cas où.\n4. Correction : aucun conditionnel derrière si ; chaque résultat suit son moment.\n5. Registre : un ton personnel mais soigné, des hypothèses dosées (sans doute, peut-être).",
  modelAnswerEn: "Eight years ago, I turned down a job in Lyon to stay near my family, in Liège. At the time, the decision cost me. My colleagues left one after another, and I watched offers go by that I could not accept. If I were more ambitious, I would probably have made a different choice; but I care about my family, and I did not hesitate for long. My mother had just fallen ill, and I wanted to be there. Today, the consequences are more mixed. If I had accepted, I would probably earn a better living today, and I might talk about an international career. On the other hand, I would not have seen my nephews grow up, and I would not know the friends I have today. If I had left, I would not have taken over my father's business last year either. That business now supports eight families. Looking back, I would make the same choice again. Admittedly, if I had been less cautious, I would have left everything to see something else, and I sometimes regret it. But if I had it to do again, I would stay, provided my family still needed me. I still keep a door open, though, in case an opportunity comes up. The marker's notes (not counted): 1. Task. 2. Coherence. 3. Range: both directions of the mixed sentence. 4. Accuracy: no conditional after si. 5. Register: personal but careful, hedged.",
  watchFor: [
    { pattern: 'A conditional after si (si j’aurais su, si j’aurais eu, si j’aurais une voiture).', criterion: 'correction', feedback: "Derrière si, jamais de conditionnel : si j'avais su, si j'avais une voiture.", ref: 'a10-piege' },
    { pattern: "A result about today put in the past conditional (j'aurais eu un meilleur poste aujourd'hui).", criterion: 'correction', feedback: "Ton résultat regarde aujourd'hui : conditionnel présent (j'aurais un meilleur poste).", ref: 'a3-piege' },
    { pattern: 'A lasting trait or ability put in the pluperfect after si (si j’avais été plus ambitieux de nature).', criterion: 'correction', feedback: "Un trait qui dure se dit à l'imparfait : si j'étais plus ambitieux.", ref: 'a4-choisir' },
    { pattern: 'A time marker contradicting its half (hier with a present conditional, aujourd’hui with a past conditional).', criterion: 'correction', feedback: "Accorde le temps au marqueur : aujourd'hui, je serais ; hier, j'aurais été.", ref: 'a6-piege' },
    { pattern: 'Only classic pairs, or only one direction of the mixed sentence.', criterion: 'etendue', feedback: "Ajoute une cause passée avec un effet présent, et un état qui dure avec un effet passé.", ref: 'a5-table' },
    { pattern: 'The consequences today are missing, or the text stays entirely in the past.', criterion: 'tache', feedback: "Montre aussi ce que la décision change aujourd'hui.", ref: 'a11-plan' },
    { pattern: 'No assessment at the end, or a flat one (c’était bien, c’était nul).', criterion: 'tache', feedback: "Termine par un bilan nuancé : avec le recul, certes... mais.", ref: 'a11-lecture' },
    { pattern: 'Jumps between then and now without a marker, so the reader loses the timeline.', criterion: 'coherence', feedback: "Signale chaque époque : à l'époque, aujourd'hui, avec le recul.", ref: 'a6-marqueurs' },
    { pattern: 'Certainty about an imagined past (forcément, c’est sûr que, sans aucun doute).', criterion: 'registre', feedback: "Un passé imaginé ne se prouve pas : sans doute, peut-être.", ref: 'a8-piege' },
    { pattern: 'Au cas où with the subjunctive, or à condition que with the indicative or conditional.', criterion: 'correction', feedback: "Au cas où + conditionnel ; à condition que + subjonctif.", ref: 'a9-erreurs' },
    { pattern: 'Familiar register (du coup, genre, trop bien, j’ai kiffé).', criterion: 'registre', feedback: "Garde un ton personnel mais soigné : ta revue publie des textes écrits.", ref: 'a11-usages' },
  ],
  graderNotes: [
    'Count the words of the text only; a title and any notes do not count. 180 to 250 with 10% tolerance (162 to 275) before criterion « tache » loses a point. responseSpec allows 275.',
    'The decision may be real or invented. Do not judge the facts, only how the decision, its consequences then and now, and the assessment are told.',
    'MIXED SENTENCES: reward both directions under « etendue ». A classic pair is correct and is NOT an error when both halves genuinely refer to the same moment; judge each half by the moment the context gives it.',
    'A lasting trait in the pluperfect (si j’avais été plus prudent) is correct when the text makes it a single past moment. Mark it only where the text says the trait still holds (de nature, toujours, encore).',
    '« Si j’aurais » is common in speech but is an error in writing: always mark it under « correction ».',
    'Time markers CONFIRM a moment, they do not force it: an event already over earlier today may take the past conditional with aujourd’hui (je serais arrivé à l’heure aujourd’hui). Judge by whether the result still shows at the time of writing.',
    'Au cas où and à condition que are recognition level in this lesson: reward them when correct, never require them, and mark a wrong mood after them lightly (one mention).',
    'Accept Belgian, Swiss and Québec usage (septante, nonante, char, courriel, une job in Québec).',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 3 du B2 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['mixte', 'horloge', 'regret'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes phrases à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['mixte', 'horloge'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-pieges',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'hier, puis aujourd’hui', v: 'si + plus-que-parfait, cond. présent', say: fr(E(1600)),
      detail: { title: 'Une cause passée', body: "La condition date d'hier, le résultat se voit maintenant ou demain. EN: past cause, present result.", say: fr(E(1631)) } },
    { k: 'toujours, puis hier', v: 'si + imparfait, cond. passé', say: fr(E(1647)),
      detail: { title: 'Un état qui dure', body: "La condition n'a pas changé, le résultat est déjà passé. EN: lasting state, past result.", say: fr(E(1648)) } },
    { k: 'la ligne du temps', v: 'deux points, deux horloges', say: fr(E(1668)),
      detail: { title: 'Le geste', body: "Place la condition, puis le résultat ; chaque point choisit son temps. EN: place both points.", say: fr(E(1674)) } },
    { k: 'les marqueurs', v: 'aujourd’hui, hier, à l’époque', say: fr(E(1679)),
      detail: { title: 'Les témoins', body: "Ils confirment le moment de leur moitié. EN: they confirm each half's moment.", say: fr(E(1681)) } },
    { k: 'les voisins', v: 'au cas où + cond. ; à condition que + subj.', say: fr(E(1724)),
      detail: { title: 'Précaution et exigence', body: "Au cas où prépare, à condition que exige. EN: prepare, require.", say: fr(E(1728)) } },
    { k: 'le piège', v: 'jamais si j’aurais', say: fr(E(1737)),
      detail: { title: 'La relecture', body: "Derrière si, un imparfait ou un plus-que-parfait. EN: never a conditional after si.", say: fr(E(1738)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['horloge', 'siJaurais'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu sais relier une cause passée à un effet présent, et un état qui dure à un effet passé, en réglant chaque moitié sur son moment. Tu t'en sers pour regretter, conseiller après coup et argumenter, et tu reconnais au cas où et à condition que. Le piège qui reste est le réflexe de la paire classique : dès que la cause est passée, la main met aussi le résultat au passé. Avant chaque texte, relis tes phrases avec si en deux questions : la moitié si, puis l'horloge du résultat. EN: Before each text, check every si sentence twice: the si half, then the result's clock.",
  stats: [
    { k: 'Cause passée', v: 'si + plus-que-parfait, cond. présent' },
    { k: 'État qui dure', v: 'si + imparfait, cond. passé' },
    { k: 'Les voisins', v: 'au cas où, à condition que' },
    { k: 'Le piège', v: 'jamais si j’aurais' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 2 to 10, an
 *  exam-style round (TCF gap fill, DELF CE and PE formats) and a recycling
 *  round citing lessons 7, 8, 10, 15, 19 and 32 in B1. `fold()` strips
 *  accents, commas, apostrophes and hyphens, so every rewrite turns on
 *  WORDS (serais / aurais été, avais / aurais). */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas dans cette phrase. Écris la phrase juste. EN: One form is wrong; write the correct sentence.', prompt, answer, accept: [answer, ...more], why, ref });
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
      id: 'r1-moities', label: 'Les quatre moitiés', targets: ['moities-confondues'],
      questions: [
        mc('Après si, pour une condition irréelle d’aujourd’hui, tu mets...', ['l’imparfait', 'le plus-que-parfait', 'le conditionnel présent'], 0, "Si j'avais une voiture : aujourd'hui. EN: the imparfait for now.", 'a2-table'),
        mc('Et pour une condition irréelle d’hier ?', ['le plus-que-parfait', 'l’imparfait', 'le conditionnel passé'], 0, "Si j'avais eu une voiture : hier. EN: the pluperfect for then.", 'a2-table'),
        lC('Écoute. Cette phrase parle...', fr(E(1621)), ['d’hier, des deux côtés', 'd’aujourd’hui, des deux côtés'], 0, "Avais été, aurait été : deux moitiés passées. EN: both halves past.", 'a2-construire'),
        lC('Écoute. Où est le passé dans cette phrase ?', fr(E(1616)), ['dans la moitié si seulement', 'dans les deux moitiés'], 0, "Viendrais regarde aujourd'hui. EN: the result is present.", 'a2-construire'),
        tI('Mets le verbe au conditionnel passé.', '« Si j’avais eu une voiture, je (venir) te chercher. »', 'serais venu', "Venir se conjugue avec être. EN: être + venu.", 'a2-rappel', ['je serais venu', 'serais venue', 'je serais venue']),
        tI('Mets le verbe au plus-que-parfait.', '« Si tu (être) là, tout aurait été plus simple. »', 'avais été', "Être au plus-que-parfait : avais été. EN: avais été.", 'a2-rappel', ['tu avais été']),
        eS('Si elle aurait su, elle aurait appelé.', fr(E(1623)), "Jamais de conditionnel après si. EN: si + pluperfect.", 'a2-erreurs'),
        eS('Si tu étais là hier, tout aurait été plus simple.', 'Si tu avais été là hier, tout aurait été plus simple.', "Hier, ta présence est un moment passé : plus-que-parfait. EN: yesterday's presence is past.", 'a2-erreurs'),
      ],
    },
    {
      id: 'r2-cause-passee', label: 'Une cause passée', targets: ['resultat-qui-recule'],
      questions: [
        mc('« Si j’avais dormi cette nuit, je ... moins fatigué. » Tu parles de ce matin.', ['serais', 'aurais été'], 0, "Ce matin dure encore : conditionnel présent. EN: present conditional.", 'a3-cartes'),
        mc('Julien a quitté le droit il y a cinq ans. « S’il avait fini son droit, il ... avocat aujourd’hui. »', ['serait', 'aurait été', 'sera'], 0, "Aujourd'hui règle le résultat. EN: today sets the result.", 'a3-construire'),
        mc('« Si nous avions réservé, nous aurions une table maintenant. » Quand a-t-on oublié de réserver ?', ['avant, dans le passé', 'maintenant'], 0, "Avions réservé : la cause est passée. EN: the cause is past.", 'a3-cartes'),
        lC('Écoute. Le résultat se voit quand ?', fr(E(1636)), ['maintenant', 'hier'], 0, "Je serais déjà au bureau : maintenant. EN: now.", 'a3-ecoute'),
        tI('Mets le verbe au bon temps.', '« Si j’avais économisé, je (pouvoir) partir en vacances cet été. »', 'pourrais', "Cet été est devant toi : conditionnel présent. EN: pourrais.", 'a3-construire', ['je pourrais']),
        tI('Mets le verbe au bon temps.', '« Si tu avais pris ton parapluie, tu ne (être) pas trempé maintenant. »', 'serais', "Maintenant : serais. EN: now, serais.", 'a3-piege', ['tu ne serais pas']),
        eS("Si Julien avait fini son droit, il aurait été avocat aujourd'hui.", fr(E(1629)), "Aujourd'hui : le résultat au conditionnel présent. EN: present conditional.", 'a3-piege'),
        lC('Écoute. Cette phrase est-elle mixte ?', fr(E(1640)), ['Non : les deux moitiés regardent le passé.', 'Oui : le résultat est présent.'], 0, "Il aurait fini son droit : à l'époque. EN: both halves past.", 'a3-ecoute'),
      ],
    },
    {
      id: 'r3-etat', label: 'Un état qui dure', targets: ['etat-mis-au-passe'],
      questions: [
        mc('« Si j’étais plus prudent » parle...', ['de ta nature, hier comme aujourd’hui', 'd’un seul moment passé'], 0, "L'imparfait garde un état qui dure. EN: a lasting state.", 'a4-cartes'),
        mc('« Si tu ... espagnol, tu aurais compris le guide. » Tu ne parles toujours pas espagnol.', ['parlais', 'avais parlé', 'parlerais'], 0, "Toujours pas : imparfait. EN: imparfait.", 'a4-construire'),
        mc('« Si elle n’avait pas peur de l’avion, elle ... à notre mariage. » Le mariage a eu lieu en mai.', ['serait venue', 'viendrait'], 0, "Le mariage est passé : conditionnel passé. EN: past conditional.", 'a4-construire'),
        lC('Écoute. Le trait dont on parle est-il encore vrai ?', fr(E(1654)), ['oui, elle est toujours têtue', 'non, c’était une seule fois'], 0, "Était moins têtue : un état qui dure. EN: still stubborn.", 'a4-choisir'),
        tI('Écris l’auxiliaire au conditionnel.', '« Si je connaissais la ville, je ne me ... pas perdu. »', 'serais', "Se perdre prend être : serais. EN: serais.", 'a4-construire', ['je ne me serais pas']),
        tI('Mets le verbe au bon temps.', '« S’il (savoir) cuisiner, il aurait préparé le repas. »', 'savait', "Une capacité qui manque encore : imparfait. EN: savait.", 'a4-construire', ['il savait']),
        eS("Si j'avais été plus prudent de nature, je n'aurais pas perdu mes clés.", "Si j'étais plus prudent de nature, je n'aurais pas perdu mes clés.", "De nature : un trait qui dure, donc l'imparfait. EN: a lasting trait.", 'a4-erreurs'),
        lC('Écoute. De quoi parle la moitié si ?', fr(E(1657)), ['d’un moment passé', 'de ton caractère'], 0, "Si j'avais été : un moment précis. EN: a single past moment.", 'a4-choisir'),
      ],
    },
    {
      id: 'r4-ligne', label: 'Deux horloges sur une ligne', targets: ['horloge-unique'],
      questions: [
        mc('Avant d’écrire ta phrase avec si, tu places sur la ligne du temps...', ['deux points, un par moitié', 'un seul point pour toute la phrase'], 0, "Un pour la condition, un pour le résultat. EN: two points.", 'a5-ligne'),
        mc('Karim est parti il y a douze ans et vit à Montréal. « S’il n’était pas parti, il ... encore à Oran. »', ['habiterait', 'aurait habité', 'habitera'], 0, "Encore, aujourd'hui : conditionnel présent. EN: habiterait.", 'a5-table'),
        mc('Un résultat qui viendra demain prend...', ['le conditionnel présent', 'le conditionnel passé', 'le futur'], 0, "Maintenant et demain partagent une horloge. EN: present conditional.", 'a5-ligne'),
        lC('Écoute. Combien de moments différents dans cette phrase ?', fr(E(1674)), ['deux : cet hiver, puis dimanche', 'un seul'], 0, "S'était entraînée, puis serait en forme. EN: two moments.", 'a5-ecoute'),
        lC('Écoute. Les deux moitiés sont-elles sur la même horloge ?', fr(E(1672)), ['oui, le passé des deux côtés', 'non'], 0, "Avais pris, aurais atterri : la paire classique. EN: the classic pair.", 'a5-ecoute'),
        tI('Écris le résultat pour ce soir.', '« Si j’avais pris ce vol, je (être) à Paris ce soir. »', 'serais', "Ce soir : conditionnel présent. EN: serais.", 'a5-choisir', ['je serais']),
        tI('Écris la moitié si pour une compétence qui manque encore.', '« Si j’(être) bilingue, on m’aurait confié ce dossier. »', 'étais', "Un état qui dure : imparfait. EN: étais.", 'a5-choisir', ["j'étais"]),
        eS('Si tu avais envoyé ton dossier, tu aurais commencé lundi prochain.', 'Si tu avais envoyé ton dossier, tu commencerais lundi prochain.', "Lundi prochain est devant toi : conditionnel présent. EN: a coming result.", 'a5-hacks'),
      ],
    },
    {
      id: 'r5-marqueurs', label: 'Les marqueurs', targets: ['marqueur-ignore'],
      questions: [
        mc('Lequel de ces mots place le résultat dans le présent ?', ['maintenant', 'hier soir', 'à l’époque'], 0, "Maintenant : conditionnel présent. EN: now.", 'a6-marqueurs'),
        mc('« S’il avait neigé hier, les routes ... fermées aujourd’hui. »', ['seraient', 'auraient été'], 0, "Aujourd'hui règle le résultat. EN: seraient.", 'a6-construire'),
        mc('« S’il avait neigé hier, les routes ... fermées hier soir. »', ['auraient été', 'seraient'], 0, "Hier soir : conditionnel passé. EN: auraient été.", 'a6-construire'),
        lC('Écoute. Quel mot règle l’horloge du résultat ?', fr(E(1684)), ['aujourd’hui', 'il y a dix ans'], 0, "Il y a dix ans règle la cause. EN: today sets the result.", 'a6-ecoute'),
        tI('Mets le verbe au bon temps.', '« Si j’avais accepté ce poste à l’époque, je (vivre) à Bruxelles maintenant. »', 'vivrais', "Maintenant : conditionnel présent. EN: vivrais.", 'a6-construire', ['je vivrais']),
        tI('Mets le verbe au bon temps.', '« Si je ne travaillais pas le samedi, je (venir) à ta fête hier. »', 'serais venu', "Hier : conditionnel passé. EN: serais venu.", 'a6-piege', ['je serais venu', 'serais venue', 'je serais venue']),
        eS('Si tu étais moins distrait, tu ne raterais pas ton arrêt ce matin.', fr(E(1680)), "Ce matin est passé : conditionnel passé. EN: this morning is over.", 'a6-piege'),
        eS("Si elle avait travaillé l'an dernier, elle aurait été en terminale cette année.", fr(E(1683)), "Cette année est en cours : conditionnel présent. EN: this year.", 'a6-piege'),
      ],
    },
    {
      id: 'r6-regret', label: 'Regretter et conseiller', targets: ['regret-mal-regle'],
      questions: [
        mc('Tu donnes un conseil que ton ami aurait dû suivre hier. Tu dis...', ['Si j’étais toi, j’aurais déjà appelé.', 'Si j’étais toi, j’appellerais.'], 0, "L'occasion est passée : conditionnel passé. EN: the chance has gone.", 'a7-cartes'),
        mc('« Si tu m’avais écouté, tu ne ... pas dans cette situation. »', ['serais', 'aurais été'], 0, "La situation dure encore. EN: serais.", 'a7-choisir'),
        mc('« Si seulement j’avais gardé mes notes » exprime...', ['un regret', 'un conseil', 'une condition réelle'], 0, "Si seulement : le regret. EN: a regret.", 'a7-exemples'),
        lC('Écoute. Cette phrase est...', fr(E(1694)), ['un reproche', 'une invitation'], 0, "La faute d'hier, la situation d'aujourd'hui. EN: a reproach.", 'a7-histoire'),
        tI('Complète le regret.', '« Si j’avais osé, je (être) musicien aujourd’hui. »', 'serais', "Aujourd'hui : serais. EN: serais.", 'a7-choisir', ['je serais']),
        tI('Écris la moitié si du conseil.', '« Si j’... toi, je l’aurais appelée le soir même. »', 'étais', "Si j'étais toi : toujours l'imparfait. EN: étais.", 'a7-cartes', ["j'étais"]),
        eS("Si tu n'avais pas été si fier de nature, tu lui aurais demandé pardon.", 'Si tu n’étais pas si fier de nature, tu lui aurais demandé pardon.', "De nature : la fierté dure. EN: a lasting trait.", 'a7-erreurs'),
        lC('Écoute. Le conseil arrive-t-il à temps ?', fr(E(1695)), ['non, l’occasion est passée', 'oui, il est encore temps'], 0, "J'aurais déjà appelé : trop tard. EN: too late.", 'a7-focus'),
      ],
    },
    {
      id: 'r7-argument', label: 'Argumenter', targets: ['argument-mal-regle'],
      questions: [
        mc('Dans la chronique, pourquoi l’auteur écrit-il « sans doute » ?', ['parce qu’un passé imaginé ne se prouve pas', 'parce qu’il n’a pas d’avis'], 0, "Il dose sa certitude. EN: he hedges.", 'a8-lecture'),
        mc('« Si la ville avait investi dans le tramway, les bouchons ... moins graves aujourd’hui. »', ['seraient', 'auraient été', 'sont'], 0, "Aujourd'hui : seraient. EN: seraient.", 'a8-construire'),
        mc('Quelle phrase relie un état actuel à un échec passé ?', [fr(E(1711)), fr(E(1710))], 0, "Les loyers restent élevés ; les familles sont parties. EN: a lasting state, a past failure.", 'a8-cartes'),
        lC('Écoute. Que fait cette phrase dans le débat ?', fr(E(1722)), ['elle présente une objection', 'elle conclut'], 0, "On pourrait objecter : l'autre camp. EN: an objection.", 'a8-ecoute'),
        tI('Nuance l’argument : écris la phrase avec « sans doute ».', '« Si la ville avait écouté les commerçants, le quartier serait plus vivant. »', fr(E(1719)), "Sans doute : un passé imaginé ne se prouve pas. EN: hedge it.", 'a8-piege', ['Si la ville avait écouté les commerçants, le quartier serait probablement plus vivant.', 'Si la ville avait écouté les commerçants, le quartier serait peut-être plus vivant.']),
        tI('Mets le verbe au plus-que-parfait.', '« Si nous (agir) plus tôt, nous n’en serions pas là. »', 'avions agi', "La cause est passée. EN: avions agi.", 'a8-construire', ['nous avions agi']),
        eS("Si la piscine n'avait pas fermé, les enfants auraient su nager aujourd'hui.", "Si la piscine n'avait pas fermé, les enfants sauraient nager aujourd'hui.", "Aujourd'hui : conditionnel présent. EN: sauraient.", 'a8-piege'),
        lC('Écoute. Cette concession...', fr(E(1715)), ['reconnaît un point au camp adverse', 'rejette tout'], 0, "Certes : une concession. EN: a concession.", 'a8-lecture'),
      ],
    },
    {
      id: 'r8-voisins', label: 'Au cas où, à condition que', targets: ['voisin-mal-construit'],
      questions: [
        mc('« Prends un parapluie au cas où il ... . »', ['pleuvrait', 'pleuve', 'pleuvra'], 0, "Au cas où + conditionnel. EN: the conditional.", 'a9-cartes'),
        mc('« Je t’accompagne, à condition que tu ... au retour. »', ['conduises', 'conduis', 'conduirais'], 0, "À condition que + subjonctif. EN: the subjunctive.", 'a9-cartes'),
        mc('« Au cas où » sert à...', ['prévoir un imprévu', 'fixer une exigence', 'exprimer un regret'], 0, "Une précaution. EN: a precaution.", 'a9-trier'),
        lC('Écoute. Que fixe cette phrase ?', fr(E(1735)), ['une exigence', 'une précaution'], 0, "À condition que : une exigence. EN: a requirement.", 'a9-exemples'),
        tI('Mets le verbe au conditionnel.', '« Au cas où vous (changer) d’avis, voici ma carte. »', 'changeriez', "Au cas où + conditionnel. EN: changeriez.", 'a9-cartes', ['vous changeriez']),
        tI('Mets le verbe au subjonctif.', '« Le projet sera accepté, à condition que le budget (être) respecté. »', 'soit', "À condition que + subjonctif. EN: soit.", 'a9-cartes'),
        eS('Laisse la porte ouverte, au cas où le chat veuille rentrer.', fr(E(1734)), "Au cas où + conditionnel : voudrait. EN: the conditional.", 'a9-erreurs'),
        eS("J'accepte l'offre, à condition que le salaire est revu en janvier.", fr(E(1735)), "À condition que + subjonctif : soit. EN: the subjunctive.", 'a9-erreurs'),
      ],
    },
    {
      id: 'r9-pieges', label: 'Les pièges', targets: ['si-j-aurais'],
      questions: [
        mc('« Si j’aurais su » est...', ['faux à l’écrit : si j’avais su', 'la forme soignée'], 0, "On l'entend, mais il ne s'écrit jamais. EN: heard, never written.", 'a10-piege'),
        mc('Paul parle de son poste actuel. Il écrit...', ['j’aurais un meilleur poste aujourd’hui', 'j’aurais eu un meilleur poste aujourd’hui'], 0, "Aujourd'hui : conditionnel présent. EN: present conditional.", 'a10-lecture'),
        mc('Dans le brouillon de Paul, « Si j’étais plus patient, je n’aurais pas quitté l’équipe si vite » est...', ['juste : un trait qui dure, un départ passé', 'faux : il faut si j’avais été'], 0, "Deux horloges, deux temps. EN: two clocks, two tenses.", 'a10-lecture'),
        lC('Écoute. Cette phrase est-elle juste ?', fr(E(1742)), ['oui', 'non, il faut aurais lu'], 0, "Si tu avais lu, puis tu saurais : juste. EN: correct.", 'a10-ecoute'),
        tI('Corrige la moitié si et écris-la.', '« Si j’aurais une voiture, tout aurait été plus simple. »', 'Si j’avais une voiture', "Un état : imparfait. EN: si j'avais.", 'a10-piege', ["si j'avais une voiture", 'avais']),
        tI('Mets le verbe au bon temps.', '« Si tu avais lu la consigne, tu (savoir) quoi faire maintenant. »', 'saurais', "Maintenant : conditionnel présent. EN: saurais.", 'a10-construire', ['tu saurais']),
        eS('Si j’aurais su que tu étais malade, je serais venu te voir.', fr(E(1737)), "Si j'avais su. EN: si j'avais su.", 'a10-piege'),
        eS("Si tu étais venu hier, tu aurais connu toute l'équipe aujourd'hui.", "Si tu étais venu hier, tu connaîtrais toute l'équipe aujourd'hui.", "Aujourd'hui : conditionnel présent. EN: connaîtrais.", 'a10-erreurs', [fr(E(1739))]),
      ],
    },
    {
      id: 'r10-examen', label: 'Comme à l’examen', targets: ['consigne-examen'],
      questions: [
        mc('Type TCF : « Si le gouvernement ... plus tôt, nous ne serions pas dans cette crise. »', ['avait agi', 'aurait agi', 'agirait'], 0, "Une cause passée, un effet présent. EN: avait agi.", 'a8-construire'),
        mc('Type TCF : « Si j’étais plus organisé, je ... ce rendez-vous hier. »', ['n’aurais pas oublié', 'n’oublierais pas', 'n’avais pas oublié'], 0, "Un trait qui dure, un oubli d'hier. EN: past conditional.", 'a4-construire'),
        mc('Type TCF : « Prends ton chargeur, au cas où ta batterie ... . »', ['faiblirait', 'faiblisse', 'faiblira'], 0, "Au cas où + conditionnel. EN: the conditional.", 'a9-cartes'),
        lC('Compréhension, type DELF B2 : quelle est la position de l’auteur de cette phrase ?', fr(E(1719)), ['Il regrette une décision, avec prudence.', 'Il approuve la ville.', 'Il ne prend pas position.'], 0, "Sans doute : un regret nuancé. EN: a hedged regret.", 'a8-lecture'),
        mc('DELF B2, production écrite : on te demande de réfléchir à une décision passée. Tu montres...', ['ses conséquences d’alors et d’aujourd’hui', 'seulement ce qui s’est passé ce jour-là', 'une liste de souvenirs'], 0, "Une réflexion relie les époques. EN: link then and now.", 'a11-plan'),
        tI('Type TCF : mets le verbe au bon temps.', '« Si elle n’avait pas raté son bus, elle (être) avec nous en ce moment. »', 'serait', "En ce moment : conditionnel présent. EN: serait.", 'a3-construire', ['elle serait']),
        eS('Si j’aurais pris ce vol, je serais à Paris ce soir.', fr(E(1671)), "Si j'avais pris. EN: si j'avais pris.", 'a10-piege'),
        lC('Écoute, type DELF B2 : le locuteur regrette-t-il son choix ?', fr(E(1757)), ['Non, il referait le même.', 'Oui, il le regrette.'], 0, "Avec le recul, je referais. EN: he would do it again.", 'a11-lecture'),
      ],
    },
    {
      id: 'r11-b1', label: 'Ce que le B1 t’a donné', targets: ['paires-b1'],
      questions: [
        lC(`Écoute cette phrase de ${SI_REF}. Quelle paire utilise-t-elle ?`, fr(PF(1201)), ['imparfait, puis conditionnel présent', 'présent, puis futur'], 0, "Partais, arriverais : la paire irréelle. EN: the unreal pair.", 'a2-rappel'),
        mc(`${Cap(SI_REF)} disait : « ${B110_REFRAME} » Dans une phrase mixte...`, ['chaque moitié vient d’une paire différente', 'les deux moitiés viennent de la même paire'], 0, "La phrase mixte assortit deux paires. EN: two pairs.", 'a2-rappel'),
        mc(`Comme le disait ${FUTUR_USE_REF}, après un si de condition, jamais de...`, ['futur ni conditionnel', 'présent', 'imparfait'], 0, `« ${B107_REFRAME} » EN: ${B107_REFRAME_EN}`, 'a10-piege'),
        tI(`${Cap(COND_REF)} : mets le verbe au conditionnel présent.`, '« Si j’avais plus de place, j’(inviter) tout le monde. »', 'inviterais', `« ${B108_REFRAME} » EN: inviterais.`, 'a2-table', ["j'inviterais"]),
        mc(`${Cap(SUBJ_DECL_REF)} : « à condition que » est suivi...`, ['du subjonctif', 'de l’indicatif', 'du conditionnel'], 0, "Un déclencheur du subjonctif. EN: the subjunctive.", 'a9-cartes'),
        lC(`Écoute cette phrase de ${CONCESSION_REF}. Que dit « même si » ?`, fr('fr.b1.connecteurs-logiques.1422'), ['la condition ne changerait rien', 'la condition est réelle'], 0, "Même si : le résultat tient malgré la condition. EN: the result holds anyway.", 'a10-construire'),
        eS('Si tu viendras demain, nous irons au marché ensemble.', 'Si tu viens demain, nous irons au marché ensemble.', "Jamais de futur après si. EN: no future after si.", 'a10-piege'),
        tI(`${Cap(DISCOURS_REF)} : rapporte la question « As-tu reçu mon courriel ? »`, '« Il m’a demandé ... »', 'si j’avais reçu son courriel', "Ce si veut dire whether, et le temps recule. EN: reported si.", 'a10-focus', ["si j'avais reçu son courriel", "Il m'a demandé si j'avais reçu son courriel."]),
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
    { front: 'une cause d’hier, un effet d’aujourd’hui', back: 'si + plus-que-parfait, conditionnel présent', say: fr(E(1600)) },
    { front: 'un état qui dure, un effet passé', back: 'si + imparfait, conditionnel passé', say: fr(E(1647)) },
    { front: 'avant d’écrire', back: 'deux points sur la ligne du temps', say: fr(E(1668)) },
    { front: 'un résultat qui viendra demain', back: 'le conditionnel présent', say: fr(E(1674)) },
    { front: 'aujourd’hui, cette année, maintenant', back: 'le résultat au présent', say: fr(E(1681)) },
    { front: 'un conseil qui arrive trop tard', back: 'si j’étais toi, j’aurais...', say: fr(E(1695)) },
    { front: 'une précaution', back: 'au cas où + conditionnel', say: fr(E(1724)) },
    { front: 'une exigence', back: 'à condition que + subjonctif', say: fr(E(1728)) },
    { front: '« si j’aurais su »', back: 'si j’avais su', say: fr(E(1737)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Deux horloges, une phrase',
  body: `${REFRAME} Tu as repris les paires de ${SI_REF} et les formes de ${PQP_REF} à ${SI_PASSE_REF}, et tu as appris à les assortir : une cause d'hier avec un effet d'aujourd'hui, un état qui dure avec un effet passé. La suite, c'est ${SUBJ_PASSE_REF} : le subjonctif passé, pour dire qu'une chose est déjà faite après un déclencheur. EN: Next comes the past subjunctive.`,
  points: [
    'Chaque moitié se règle sur son propre moment.',
    'Une cause passée garde son effet au présent si l’effet se voit encore.',
    'Un état qui dure reste à l’imparfait, même devant un effet passé.',
    'Derrière si, jamais de conditionnel.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['horloge', 'mixte'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Ta mission',
    opener: {
      line: "Une décision de ta vie, ce qu'elle a changé alors et ce qu'elle change encore : ici tu l'écris. EN: A decision in your life, what it changed then and what it still changes: here you write it.",
      imageRef: 'lessons/si-mixtes/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit sur une décision, hier et aujourd'hui, et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You wrote about a decision, then and now, and sat the exam: 88 questions, 11 rounds.",
    estScreens: 150,
    restPoints: ['a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-etat', 'a11-quiz/r6-regret', 'a11-quiz/r9-pieges', 'a11-review'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-moities', title: 'Aujourd’hui ou hier', format: 'sort' as const, coach: "Deux piles : la moitié si parle d'aujourd'hui, ou d'hier. EN: sort by the si half's moment.", buckets: ['aujourd’hui, toujours', 'hier'], items: [E(1614), E(1620), E(1617), E(1615), E(1621), E(1616)], audio: AUDIO },
  { id: 'd-cause', title: 'Le résultat d’aujourd’hui', format: 'mcq' as const, coach: "La cause est passée ; demande-toi quand se voit le résultat. EN: ask when the result shows.", q: "Si j'avais dormi cette nuit, je ... moins fatigué ce matin.", opts: ['serais', 'aurais été'], correct: 0, why: "Ce matin dure encore. EN: serais.", items: [E(1629), E(1631), E(1632), E(1633), E(1636), E(1643)], audio: AUDIO },
  { id: 'd-etat', title: 'Une nature, ou un moment', format: 'sort' as const, coach: "Deux piles : la condition dure encore, ou elle date d'un seul moment. EN: sort by lasting state or single moment.", buckets: ['un état qui dure', 'un seul moment'], items: [E(1647), E(1648), E(1654), E(1657), E(1707), E(1749)], audio: AUDIO },
  { id: 'd-ligne', title: 'Deux points sur la ligne', format: 'flashcard' as const, coach: "Lis chaque phrase et place ses deux points : la condition, puis le résultat. EN: place both points aloud.", items: [E(1664), E(1665), E(1666), E(1671), E(1674), E(1676)], audio: AUDIO },
  { id: 'd-marqueurs', title: 'Le marqueur décide de l’heure', format: 'sort' as const, coach: "Deux piles : le résultat regarde maintenant, ou hier. EN: sort by the result's moment.", buckets: ['maintenant', 'hier'], items: [E(1679), E(1681), E(1683), E(1680), E(1682), E(1691)], audio: AUDIO },
  { id: 'd-regret', title: 'Regretter à voix haute', format: 'flashcard' as const, coach: "Lis chaque regret ou conseil, et dis s'il arrive à temps ou trop tard. EN: say whether each comes in time or too late.", items: [E(1694), E(1695), E(1696), E(1697), E(1702), E(1703)], audio: AUDIO },
  { id: 'd-argument', title: 'Un argument réglé', format: 'mcq' as const, coach: "Garde l'effet d'aujourd'hui au présent et nuance ce que tu ne peux pas prouver. EN: keep today's effect present and hedge.", q: 'Laquelle convient à un texte d’opinion ?', opts: [fr(E(1719)), 'Si la ville avait écouté les commerçants, le quartier aurait forcément été plus vivant aujourd’hui.'], correct: 0, why: "Présent pour aujourd'hui, et une nuance. EN: present and hedged.", items: [E(1710), E(1711), E(1712), E(1714), E(1719), E(1721)], audio: AUDIO },
  { id: 'd-voisins', title: 'Précaution ou exigence', format: 'sort' as const, coach: "Deux piles : au cas où avec le conditionnel, à condition que avec le subjonctif. EN: sort by neighbour.", buckets: ['au cas où', 'à condition que'], items: [E(1724), E(1726), E(1736), E(1728), E(1729), E(1735)], audio: AUDIO },
  { id: 'd-si-jaurais', title: 'Jamais derrière si', format: 'mcq' as const, coach: "Derrière si, un imparfait ou un plus-que-parfait. EN: no conditional after si.", q: "Si j'... su que tu étais malade, je serais venu.", opts: ['aurais', 'avais'], correct: 1, why: "Si j'avais su. EN: avais.", items: [E(1737), E(1741), E(1742), E(1745), E(1746), E(1747)], audio: AUDIO },
  { id: 'd-examen', title: 'Le modèle, à voix haute', format: 'flashcard' as const, coach: "Lis le modèle : la décision, alors, aujourd'hui, le bilan. EN: read the model aloud.", items: [E(1752), E(1753), E(1755), E(1757), E(1759), E(1760)], audio: AUDIO },
  { id: 'd-paires-b1', title: 'Les paires du B1', format: 'flashcard' as const, coach: "Lis chaque phrase et dis si ses deux moitiés regardent le même moment. EN: say whether both halves share a moment.", items: [PF(1201), PF(1362), PF(1352), E(1616), E(1617), 'fr.b1.connecteurs-logiques.1422'], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'moities-confondues', description: 'Uses the imparfait after si for a condition that belongs to one past moment, or a conditional after si, when assembling the four halves.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-moities', retest: 'd-moities' },
  { id: 'resultat-qui-recule', description: 'Puts the result in the past conditional because the cause is past, although the effect shows today.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-cause', retest: 'd-cause' },
  { id: 'etat-mis-au-passe', description: 'Puts a lasting trait, ability or fact in the pluperfect after si, turning a nature into a single moment.', detectOn: ['a4-construire', 'a4-choisir', 'a4-check', 'a11-mission'], drill: 'd-etat', retest: 'd-etat' },
  { id: 'horloge-unique', description: 'Sets both halves on one moment by default instead of placing the condition and the result separately, including a coming result.', detectOn: ['a5-choisir', 'a5-ecoute', 'a5-check', 'a11-mission'], drill: 'd-ligne', retest: 'd-ligne' },
  { id: 'marqueur-ignore', description: 'Writes a result whose tense contradicts its time marker (aujourd’hui with a past conditional, hier with a present one).', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a11-mission'], drill: 'd-marqueurs', retest: 'd-marqueurs' },
  { id: 'regret-mal-regle', description: 'Gives late advice or a reproach with the wrong clock, or builds si seulement and si j’étais toi with a conditional.', detectOn: ['a7-choisir', 'a7-erreurs', 'a7-check', 'a11-mission'], drill: 'd-regret', retest: 'd-regret' },
  { id: 'argument-mal-regle', description: 'Lets the present effect of a past decision slip into the past, or states an imagined past as certain.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-argument', retest: 'd-argument' },
  { id: 'voisin-mal-construit', description: 'Uses the subjunctive after au cas où, or the indicative or conditional after à condition que.', detectOn: ['a9-trier', 'a9-erreurs', 'a9-check', 'a11-mission'], drill: 'd-voisins', retest: 'd-voisins' },
  { id: 'si-j-aurais', description: 'Writes a conditional straight after si (si j’aurais su, si j’aurais une voiture).', detectOn: ['a10-piege', 'a10-construire', 'a10-check', 'a11-mission'], drill: 'd-si-jaurais', retest: 'd-si-jaurais' },
  { id: 'consigne-examen', description: 'Ignores the exam task format: tells the decision without its consequences then and now, or without an assessment.', detectOn: ['a11-plan', 'a11-scenario', 'a11-mission'], drill: 'd-examen', retest: 'd-examen' },
  { id: 'paires-b1', description: 'Loses the B1 base: puts a future or conditional after si, or confuses the classic pairs with the mixed ones.', detectOn: ['a2-rappel', 'a10-construire', 'a11-mission'], drill: 'd-paires-b1', retest: 'd-paires-b1' },
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
  sheet('sheet-moities', 'Les quatre moitiés', ['la moitié si', 'la moitié résultat', 'les quatre phrases', 'le B1 et le B2'], [
    teach('sheet-moities-teach', 'Deux moitiés, deux horloges',
      `${REFRAME} Une phrase avec si à l'irréel a deux moitiés, et chacune a deux réglages possibles. Les paires classiques mettent les deux au même moment ; la phrase mixte les sépare. EN: ${REFRAME_EN}`),
    table('sheet-moities-table', 'Les réglages', ['Moitié', 'Moment', 'Temps', 'Exemple'], [
      ['si', 'aujourd’hui, toujours', 'imparfait', 'si j’avais une voiture'],
      ['si', 'hier', 'plus-que-parfait', 'si j’avais eu une voiture'],
      ['résultat', 'aujourd’hui, demain', 'conditionnel présent', 'je viendrais te chercher'],
      ['résultat', 'hier', 'conditionnel passé', 'je serais venu te chercher'],
    ]),
    table('sheet-moities-quatre', 'Une situation, quatre phrases', ['Condition', 'Résultat', 'Phrase'], [
      ['aujourd’hui', 'aujourd’hui', fr(E(1614))],
      ['hier', 'hier', fr(E(1615))],
      ['hier', 'aujourd’hui', fr(E(1616))],
      ['toujours', 'hier', fr(E(1617))],
    ]),
    teach('sheet-moities-b1', 'Ce que tu apportes',
      `${Cap(SI_REF)} : « ${B110_REFRAME} » Les formes du plus-que-parfait et du conditionnel passé viennent de ${PQP_REF} et de ${COND_PASSE_REF} ; la paire du passé, de ${SI_PASSE_REF}. EN: ${B110_REFRAME_EN}`),
  ]),
  sheet('sheet-ligne', 'La ligne du temps et ses marqueurs', ['deux points', 'le résultat à venir', 'les marqueurs', 'le trait qui dure'], [
    teach('sheet-ligne-teach', 'Deux points, deux temps',
      "Avant d'écrire, place deux points sur la ligne du temps : le moment de la condition, puis celui du résultat. Une condition d'hier prend le plus-que-parfait ; une condition d'aujourd'hui ou de toujours, l'imparfait. Un résultat qui se voit maintenant ou demain prend le conditionnel présent ; un résultat déjà joué, le conditionnel passé, même s'il a eu lieu ce matin ou aujourd'hui. EN: place both points, then let each pick its tense; a result already over takes the past conditional even today."),
    table('sheet-ligne-marqueurs', 'Les marqueurs', ['Marqueur', 'Il règle', 'Temps', 'Exemple'], [
      ['aujourd’hui, maintenant, en ce moment', 'le résultat', 'conditionnel présent', fr(E(1681))],
      ['cette année, à l’heure qu’il est', 'le résultat', 'conditionnel présent', fr(E(1683))],
      ['demain, lundi prochain, dimanche', 'le résultat', 'conditionnel présent', fr(E(1676))],
      ['hier, ce matin, hier soir', 'l’un ou l’autre', 'plus-que-parfait ou conditionnel passé', fr(E(1680))],
      ['l’an dernier, à l’époque, il y a dix ans', 'la condition', 'plus-que-parfait', fr(E(1679))],
      ['de nature, toujours, encore', 'la condition', 'imparfait', fr(E(1685))],
    ]),
    teach('sheet-ligne-trait', 'Une nature ou un moment',
      "Si j'étais prudent parle de ton caractère, vrai hier comme aujourd'hui. Si j'avais été prudent parle d'un moment passé. Les deux sont justes : ils ne disent pas la même chose. Le test : ajoute « encore aujourd'hui » ; si la phrase reste vraie, prends l'imparfait. EN: a nature or a moment; both are correct, they mean different things."),
  ]),
  sheet('sheet-usages', 'Regretter, conseiller, argumenter', ['le regret', 'le reproche', 'le conseil trop tard', 'l’argument'], [
    teach('sheet-usages-teach', 'Une forme, plusieurs intentions',
      "La phrase mixte relie hier et aujourd'hui : c'est l'outil du regret, du reproche, du conseil qui arrive tard et de l'argument sur une décision passée. Dans un texte d'opinion, nuance-la : un passé imaginé ne se prouve pas. EN: one form for regret, reproach, late advice and argument, hedged in writing."),
    table('sheet-usages-table', 'Les gestes', ['Geste', 'Tournure', 'Exemple'], [
      ['regretter', 'si seulement + plus-que-parfait', fr(E(1697))],
      ['reprocher', 'si tu avais..., tu ne serais pas...', fr(E(1694))],
      ['conseiller trop tard', 'si j’étais toi, j’aurais...', fr(E(1695))],
      ['conseiller à temps', 'si j’étais toi, je ferais...', fr(E(1696))],
      ['argumenter', 'si la ville avait..., nous serions sans doute...', fr(E(1719))],
      ['concéder', 'certes, si..., mais', fr(E(1715))],
      ['objecter', 'on pourrait objecter que, si...', fr(E(1722))],
    ]),
  ]),
  sheet('sheet-voisins', 'Au cas où, à condition que', ['au cas où', 'à condition que', 'à condition de', 'si'], [
    teach('sheet-voisins-teach', 'Les voisins de si',
      `Au cas où prépare un imprévu et prend le conditionnel. À condition que fixe une exigence et prend le subjonctif ; avec un seul sujet, à condition de et l'infinitif. Pour le subjonctif, voir ${SUBJ_DECL_REF} : « ${B115_REFRAME} » EN: ${B115_REFRAME_EN}`),
    table('sheet-voisins-table', 'Trois outils', ['Outil', 'Sens', 'Mode', 'Exemple'], [
      ['si', 'une condition', 'indicatif', 'Si le vent est trop fort, nous prendrons le sentier du bas.'],
      ['au cas où', 'une précaution', 'conditionnel', fr(E(1724))],
      ['à condition que', 'une exigence', 'subjonctif', fr(E(1728))],
      ['à condition de', 'une exigence, un seul sujet', 'infinitif', fr(E(1730))],
    ]),
  ]),
  sheet('sheet-pieges', 'Les pièges et la relecture', ['si j’aurais', 'le résultat qui recule', 'la relecture', 'la grille du B2'], [
    teach('sheet-pieges-teach', 'Deux questions par phrase',
      `Relis chaque phrase avec si en deux questions. La moitié si : un imparfait ou un plus-que-parfait, jamais un conditionnel. Le résultat : maintenant ou demain, conditionnel présent ; hier, conditionnel passé. ${Cap(FUTUR_USE_REF)} le disait déjà : « ${B107_REFRAME} » EN: ${B107_REFRAME_EN}`),
    table('sheet-pieges-table', 'Les fautes et leurs remèdes', ['Faute', 'Remède'], [
      ['si j’aurais su', 'si j’avais su'],
      ['si j’aurais une voiture', 'si j’avais une voiture'],
      ['j’aurais eu un meilleur poste aujourd’hui', 'j’aurais un meilleur poste aujourd’hui'],
      ['si j’avais été prudent de nature', 'si j’étais prudent de nature'],
      ['au cas où il pleuve', 'au cas où il pleuvrait'],
      ['à condition que tu viens', 'à condition que tu viennes'],
    ]),
    table('sheet-pieges-grille', 'La grille de ta mission', ['Critère', 'Ce qu’on regarde'], [
      ['la tâche', 'la décision, ses conséquences alors et aujourd’hui, un bilan'],
      ['la cohérence', 'des paragraphes sur la ligne du temps, des connecteurs justes'],
      ['l’étendue', 'les deux sens de la phrase mixte, d’autres outils de l’hypothèse'],
      ['la correction', 'aucun conditionnel derrière si, chaque résultat à son moment'],
      ['le registre', 'personnel mais soigné, des hypothèses dosées'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-04-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b2-04-salon': "Act 1 reading: Mme Lavoie's notes. ONE VOICE for the narration (a Québécoise, calm, mid-forties); the three quoted candidates read in the SAME voice but with a slight quotation lift. A clear pause before « Deux horloges ».",
  'rec-b2-04-voiture': "Act 2 story: the learner's voice (young adult) and a coach voice. Three si sentences, each read evenly; no stress on the tense, so the learner hears the auxiliary (avais eu, serais venu) on its own.",
  'rec-b2-04-julien': "Act 3 story: Julien's mother (a Vaudois voice, sixties, affectionate reproach) and Julien (thirties, amused). The mother's sentences carry a light reproach, never anger.",
  'rec-b2-04-cause': "Act 3 cards: ONE VOICE, neutral, four sentences read in pairs. After each pair a short pause, so the contrast serais / aurais été is heard.",
  'rec-b2-04-cause-ecoute': "REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, ONE VOICE, in authored order, at natural conversational speed. Do not slow down on the auxiliaries; the learner must catch serais against aurait fini unaided.",
  'rec-b2-04-piege-recul': "The audio step plays each card's CORRECT sentence (the present conditional result). Read the six evenly, with the time marker (maintenant, aujourd'hui) clearly audible; the wrong versions in promptSound are never spoken.",
  'rec-b2-04-texte-3': "Act 3 text: ONE VOICE for the narration, a second for the mother, a third for Julien (a Lausanne accent welcome). One take, unhurried.",
  'rec-b2-04-awa': "Act 4 story: Awa and Moussa, two young Dakar voices, friendly teasing. Moussa's two si sentences read at the same pace so the imparfait / plus-que-parfait contrast is audible.",
  'rec-b2-04-etat': "Act 4 cards: ONE VOICE, neutral. The first two cards read back to back (si j'étais / si j'avais été).",
  'rec-b2-04-texte-4': "Act 4 text: ONE VOICE for the narration, Moussa and Awa as two further voices (Dakar). One take.",
  'rec-b2-04-karim': "Act 5 story: Karim (Algerian-born Montréalais, fifties, warm, a light Oran accent welcome) and Yasmine (twelve, Montréal accent). Karim's sentences slow and reflective.",
  'rec-b2-04-ligne-ecoute': "REQUIRED FOR THE EAR MISSION (act 5): ten lines, ONE TAKE, ONE VOICE (Karim), in authored order, natural speed. The time words (encore, ce soir, dimanche) are NOT stressed: the learner must find them.",
  'rec-b2-04-texte-5': "Act 5 text: ONE VOICE, Karim's narrator, one take, reflective pace.",
  'rec-b2-04-marqueurs-ecoute': "REQUIRED FOR THE EAR MISSION (act 6): nine lines as a voice message from Nadia, ONE TAKE, ONE VOICE (young Parisienne), in authored order, natural speed, small hesitations allowed.",
  'rec-b2-04-piege-marqueur': "The audio step plays each card's CORRECT sentence, where marker and tense agree. Read the six evenly; the contradicting versions in promptSound are never spoken.",
  'rec-b2-04-texte-6': "Act 6 text: narration voice, Nadia (young Parisienne) and Léo (young man). One take.",
  'rec-b2-04-ines': "Act 7 story: Inès and Marie, two Liège voices, thirties, intimate tone. Marie's reproach is gentle.",
  'rec-b2-04-usages': "Act 7 cards: ONE VOICE, but four intentions audible in the tone: regret (soft), reproach (firm), late advice (kind), assessment (serene).",
  'rec-b2-04-texte-7': "Act 7 text: a letter read by Marie, ONE VOICE (Liège), warm, one take.",
  'rec-b2-04-chronique': "Act 8 reading: an opinion column, ONE VOICE, one take, a Québécois columnist, measured and slightly ironic. The hedges (sans doute, ce n'est pas une certitude) read plainly, not stressed.",
  'rec-b2-04-argument': "Act 8 cards: ONE VOICE, radio-debate register, four arguments read with a short pause between each.",
  'rec-b2-04-debat': "REQUIRED FOR THE EAR MISSION (act 8): eight lines as a radio debate, TWO VOICES alternating as authored (a pro-tram councillor for lines 1, 3, 4, 6, 7; an opposing resident for lines 2, 5, 8), ONE TAKE, natural speed with slight overlaps allowed.",
  'rec-b2-04-piege-argument': "The audio step plays each card's CORRECT argument. Read the six evenly; the wrong versions in promptSound are never spoken.",
  'rec-b2-04-texte-8': "Act 8 text: ONE VOICE, a resident writing to the local paper, one take.",
  'rec-b2-04-guide': "Act 9 story: the guide (Estrie voice, outdoorsy, confident) and Élise (thirties) on the phone; a slight phone filter welcome.",
  'rec-b2-04-voisins': "Act 9 cards: ONE VOICE, neutral. The verb after au cas où and after à condition que read clearly (pleuvrait, conduises).",
  'rec-b2-04-texte-9': "Act 9 text: the guide's written message read by ONE VOICE (Estrie), then Élise's closing sentence in a second voice.",
  'rec-b2-04-courriel': "Act 10 reading: narration voice, Paul's draft read by Paul (thirties), Chloé's corrections by Chloé (thirties, precise). The draft's two faulty sentences read exactly as written.",
  'rec-b2-04-piege-jaurais': "The audio step plays each card's CORRECT sentence (si + imparfait or plus-que-parfait). Read the six evenly; the si j'aurais versions in promptSound are never spoken.",
  'rec-b2-04-pieges-ecoute': "REQUIRED FOR THE EAR MISSION (act 10): eight lines, ONE TAKE, ONE VOICE, in authored order, natural speed, read as someone proofreading aloud.",
  'rec-b2-04-texte-10': "Act 10 text: Lucas's message read AS WRITTEN, errors included, ONE VOICE (young man), one take: the learner rewrites it.",
  'rec-b2-04-modele': "Act 11 reading: Karim's reflection, ONE VOICE (the same Karim as act 5), one take, reflective. A pause between the paragraphs so the timeline (then, today, assessment) is audible.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 4',
  intro: 'A si sentence does not have to look at one moment. « Si j’avais continué mes études, j’aurais un meilleur poste aujourd’hui » ties a past cause to a present result; « si j’étais plus prudent, je n’aurais pas perdu mes clés » ties a lasting state to a past result. This lesson builds both mixed patterns on top of lesson 10 in B1 and lessons 1 to 3 in B2, teaches you to place each half on the timeline and to read the time markers, uses the pattern to regret, advise and argue, lets you recognise au cas où with the conditional and à condition que with the subjunctive, and kills the two classic traps: the all-past default and « si j’aurais ». The task: a 180 to 250 word reflective text on a decision, its consequences then and now.',
  skill: 'PE',
  grammarAssumed: [FUTUR_USE_UNIT, COND_UNIT, SI_UNIT, SUBJ_DECL_UNIT, PQP_UNIT, COND_PASSE_UNIT, SI_PASSE_UNIT],
  grammarIntroduced: [
    'Mixed si sentences with a past cause and a present or future result: si + plus-que-parfait followed by the conditionnel présent',
    'Mixed si sentences with a lasting present state and a past result: si + imparfait (trait, ability, standing fact) followed by the conditionnel passé, against si + plus-que-parfait for a single past moment',
    'Choosing each half’s tense from its own moment on the timeline, including results that are still to come',
    'Time markers that set each half: aujourd’hui, maintenant, en ce moment, cette année, à l’heure qu’il est against hier, ce matin, l’an dernier, à l’époque, il y a dix ans; de nature, toujours for lasting states',
    'Mixed si for regret (si seulement), reproach, late advice (si j’étais toi, j’aurais…; à ta place) and hedged argument about past decisions',
    'Recognition of related hypotheticals: au cas où + conditionnel, à condition que + subjonctif, à condition de + infinitive',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Une phrase avec si peut regarder deux moments à la fois : une cause d'hier et un effet d'aujourd'hui, ou un état qui dure et un effet déjà passé. Ici, tu règles chaque moitié sur son horloge, tu t'en sers pour regretter, conseiller et argumenter, et tu reconnais au cas où et à condition que. À la fin, tu écris sur une décision de ta vie, hier et aujourd'hui.",
    minutes: 160,
    difficulty: 4,
    glyph: 'si',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: SI_MIXTES_TERMS,
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
