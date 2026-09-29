// b2.05.l1 « Le subjonctif passé »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.01), under the B2
// rules of B2-BUILD-LOG.md (form, meaning, choice, text).
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema, so the lesson validates with it in place (as b2.01 and b2.22 do).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act (B2): meet (scene, story, reading or listening), name
//   (cardDeck, tapTable, examples), build (groupDrill, gated), choose (a
//   drill where the MEANING picks the form), trap (trapDrill stepped or
//   commonErrors), then from act 3 on the form INSIDE A TEXT of 60 to 120
//   words (complete or correct), then the gated act check.
//
//    1  Content que tu sois venu     6   the clock: one trigger, two forms;
//                                         reacting to what is already done
//    2  La forme                     8   avoir / être at the present
//                                         subjunctive + participle (builds on
//                                         lesson 14 in B1)
//    3  Les accords                  7   être with the subject, avoir with an
//                                         object placed before, pronominals
//    4  L'horloge                    8   present vs past, set on the MAIN verb
//                                         (j'étais content qu'il soit là)
//    5  Réagir après coup            8   feelings after the fact; savoir and
//                                         être sûr keep the indicative
//    6  Le doute                     7   doubt about a past fact; the bascule
//                                         (je crois / je ne crois pas)
//    7  Avant l'échéance             8   il faut que tu aies fini avant lundi,
//                                         avant que, jusqu'à ce que, attendre que
//    8  Le meilleur que j'aie vu     8   superlatives, le seul, le premier;
//                                         la première fois que stays indicative
//    9  Bien que ce soit fini        7   bien que, quoique on a finished fact;
//                                         même si + indicative (lesson 32 in B1)
//   10  Content d'être venu          7   one subject: the past infinitive
//                                         (lesson 16 in B1)
//   11  Réagir à une nouvelle        11  model, plan, role play, TASK, quiz
//
//   TOTAL 85 missions, 11 acts. Corpus: 172 authored rows (.1200-.1390) in
//   eleven blocks plus 27 reused seed rows, released act by act through
//   `deckTranche`. Quiz: 12 rounds of 8 (one per act 1 to 10, a B1 and B2
//   recycling round, an exam-format round). Chapter artwork:
//   `subjonctif-passe-image-prompts.md`, eleven prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (b2.06 may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Même déclencheur, autre horloge : le subjonctif passé dit que c’est
//   déjà fait. »
//   EN: Same trigger, a different clock: the subjonctif passé says it is
//   already done.
//
//   ONE METAPHOR, L'HORLOGE: the trigger has chosen the mood (lesson 15 in
//   B1); a clock set on the MAIN verb, or on the deadline it names, chooses
//   the form. Never the calendar: « hier, j'avais peur qu'il pleuve » keeps
//   the present, « il faut que tu aies fini avant lundi » looks ahead in the
//   past form. Rejected candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    building the subjonctif passé (both auxiliaries, agreement,
//           pronominals, negation), the present/past choice relative to the
//           main verb, and its use after feelings, doubt, necessity and
//           deadlines, avant que, jusqu'à ce que, attendre que, superlatives
//           and le seul / premier / dernier, bien que and quoique; the past
//           infinitive as the one-subject alternative.
//   QUOTES  the reframes of lessons 14, 15, 16, 32 and 35 in B1 and lesson 1
//           in B2, re-exported from their corpus files; rows of lessons 14,
//           15, 16, 32, 35 and 39 in B1 and lessons 22, 23 and 26 in B2
//           reused BY ID.
//   LEAVES  the full subjunctive/indicative map (search, purpose, the
//           relative after a negative antecedent) to lesson 6 in B2; the
//           futur antérieur to lesson 7 in B2 (« quand tu auras fini » is
//           never used here); time clauses with après que and the literary
//           subjunctive to later B2 lessons (named nowhere by number, because
//           they are not built yet).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   B2: natural French, not simplified; English still authored on every
//   learner string (an `en` field or a final `EN: `), never on an answer.
//   tu in every instruction; characters use what the situation needs.
//   Every `say` is French. No « ? » or « ! » in any scene or story bubble.
//   The scenario uses ’ only and embeds no corpus row. Other lessons cited
//   by trail position in words, never by raw id, and only positions that
//   are occupied (B1 1-39, B2 1-8, B2 22-26). Mission answer slots spread by
//   `spreadMissions()`, the quiz by `spreadSlots()`, as b2.01 does (no text
//   changes, no `why` names a position).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. TWELVE quiz rounds (96 questions), as b2.01: ten act rounds, one
//      recycling round (lessons 14, 15, 16, 32, 35 in B1 and lesson 1 in B2)
//      and one exam-format round.
//   2. SUPERLATIVES. Act 8 teaches the subjunctive after a superlative as the
//      norm of careful WRITING and says plainly that speech often uses the
//      indicative; the quiz marks « le meilleur film que j'ai vu » wrong in
//      written items only, and the grader notes cost it one point once, not
//      per occurrence. « Le seul... qui + indicatif » for a plain verifiable
//      fact is shown once (a reused row of lesson 23 in B2) and never
//      drilled. Keep that line?
//   3. « avant que » is taught with the subjunctive only; the optional
//      expletive « ne » (avant qu'il ne soit parti) is neither taught nor
//      marked. Confirm it stays for a later lesson.
//   4. THE TASK (180 to 250 words, `skill: 'PE'`) uses the five B2 criteria
//      of b2.01 (tâche 3, cohérence 3, étendue 2, correction 2, registre 2 =
//      12), with the annotation block inside `modelAnswer`.
//   5. NO verbCheck on the ten conjugation cards (corpus §A.7).
//   6. `Lesson.version` is 1 (a new lesson). 'coach-fr-FR' kept (inert).

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap, refFr,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  LECTURE_FETE, LECTURE_COURRIER, LECTURE_REGIE, LECTURE_FESTIVAL, LECTURE_MODELE, MESSAGE_VOCAL,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10,
  B114_REFRAME, B114_REFRAME_EN, B115_REFRAME, B115_REFRAME_EN, B116_REFRAME, B116_REFRAME_EN,
  B132_REFRAME, B132_REFRAME_EN, B135_REFRAME, B135_REFRAME_EN, B201_REFRAME, B201_REFRAME_EN,
  SUBJ_FORM_UNIT, DECL_UNIT, INF_UNIT, CONC_UNIT, EMO_UNIT, PQP_UNIT,
  SUBJ_FORM_REF, DECL_REF, INF_REF, CONC_REF, EMO_REF, PQP_REF, MODES_REF, FUT_ANT_REF, SUBJ_B1_RANGE_REF,
} from './subjonctif-passe-corpus.ts';
import { SP_TERMS } from './subjonctif-passe-terms.ts';

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
  if (!r) throw new Error(`b2.05: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.05: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.05: no respell on ${id}`);
  return `[${r.respell}]`;
}

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

/** THE « IN A TEXT » BEAT that closes acts 3 to 10: one paragraph of 60 to
 *  120 words, with the answers behind the modal. Always the same title, so a
 *  learner and a reviewer see the loop. */
function dansUnTexte(
  id: string, frSub: string, text: string, questions: { q: string; a: string }[], rec: string, terms: string[],
): Sec<'reading'> {
  return {
    type: 'reading', id, layer: 'core', questionsInModal: true,
    title: 'Dans un texte', frSub, text, questions,
    audio: REC(rec), say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1: CONTENT QUE TU SOIS VENU
 *
 *  Meet the clock. One form (viennes / sois venu) changes whether the visit
 *  is still ahead or already over. NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le lendemain de la fête',
  frSub: 'Un seul verbe change le message',
  setting: { place: 'Un appartement de Rosemont', city: 'Montréal', time: 'dimanche, 10 h', ambience: 'des verres sur la table, la pluie qui cesse, le téléphone qui vibre' },
  beats: [
    {
      kind: 'narration',
      text: "Montréal, un dimanche matin. Hier soir, tu as fêté ton nouvel appartement. Ton ami Malik est venu de Québec, trois heures de route sous la pluie. Il est reparti tôt ce matin.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Malik',
      fr: 'Bien rentré. Merci pour la soirée, elle était géniale.',
      en: 'Home safe. Thanks for the evening, it was great.',
      respell: '[byehⁿ rahⁿ-TRAY | mehr-SEE poor la swa-RAY | el ay-teh zhay-nee-AL]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: 'Tu veux lui répondre par une vraie phrase de remerciement, pas seulement par un cœur. Tu tapes, puis tu hésites sur le verbe.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Quelle phrase remercie Malik pour une visite déjà faite.',
      size: 'lg',
      options: [
        { fr: fr(E(1201)), respell: rsOf(E(1201)), en: en(E(1201)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1200)), respell: rsOf(E(1200)), en: en(E(1200)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Malik répond par un grand sourire : il a compris que tu parlais de la soirée d’hier.',
        breaks: 'Malik ouvre son agenda : pour lui, tu l’invites encore, et il cherche la date.',
      },
    },
    {
      kind: 'break',
      heading: 'Le même sentiment, deux horloges',
      body: "Que tu viennes regarde une visite encore à venir. Que tu sois venu regarde une visite finie au moment où tu parles. Le sentiment ne change pas, l'horloge si. EN: que tu viennes looks ahead; que tu sois venu looks at a visit already over.",
      wrong: { fr: fr(E(1201)), ipa: ipaOf(E(1201)), respell: rsOf(E(1201)), en: en(E(1201)) },
      right: { fr: fr(E(1200)), ipa: ipaOf(E(1200)), respell: rsOf(E(1200)), en: en(E(1200)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Au B1, tu as appris à former le subjonctif et à reconnaître ce qui le déclenche. Ici, tu apprends à réagir après coup, à ce qui est déjà fait.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['accompli', 'horloge'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Construire le subjonctif passé sans hésiter', s: 'Actes 2 et 3 : l’auxiliaire, les accords, les pronominaux' },
    { t: 'Choisir entre présent et passé', s: 'Acte 4 : l’horloge du verbe principal' },
    { t: 'Réagir, douter, fixer une échéance, juger', s: 'Actes 5 à 9 : sentiments, doute, avant lundi, le meilleur, bien que' },
    { t: 'Écrire un message de réaction en 200 mots', s: 'Actes 10 et 11 : l’infinitif passé, puis ta mission' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message d’Inès',
  frSub: 'Lis, et cherche ce qui est déjà fait',
  text: LECTURE_FETE,
  glossary: [
    { word: 'encore un peu fatiguée', en: 'still a little tired', note: 'Inès n’a pas beaucoup dormi après la fête.' },
    { word: 'gênée', en: 'embarrassed', note: 'Un peu honteuse, mal à l’aise.' },
    { word: 'une camionnette', en: 'a van', note: 'Un petit camion, utile pour déménager.' },
  ],
  questions: [
    { q: 'Cite trois réactions d’Inès à des faits déjà passés.', a: "Elle est ravie que ses amis aient pu venir, elle regrette que Samir soit parti avant le gâteau, elle est désolée que la musique ait réveillé les voisins. Chaque fois, le fait est fini quand elle écrit." },
    { q: 'Pourquoi Inès écrit-elle « que plusieurs d’entre vous viennent l’aider » et non « soient venus » ?', a: "Parce que le déménagement est le mois prochain : l'aide est encore à venir. Le subjonctif présent regarde vers ce qui arrive." },
    { q: 'Dans « que quelqu’un ait une camionnette », ait est-il un subjonctif passé ?', a: "Non. Il n'y a pas de participe : c'est le subjonctif présent d'avoir, au sens de posséder." },
    { q: 'Que veut dire « Encore merci d’être venus » ?', a: "Merci pour votre venue, qui est terminée. Merci de + infinitif passé est une formule toute faite ; l'infinitif passé revient à l'acte 10." },
    { q: 'Quel ton domine dans ce message ?', a: "La gratitude, avec un peu d'autodérision : elle s'excuse pour la musique et raconte la scène des croissants avec humour." },
  ],
  audio: REC('rec-b2-05-fete'),
  say: REFRAME,
  terms: ['accompli', 'horloge'],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Déjà fait, ou encore à venir',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Déjà fait quand on parle', [
      it(E(1200), 'la visite est finie'),
      it(E(1203), 'Samir est parti hier soir'),
      it(E(1206), 'la pluie est terminée'),
      it(E(1204), 'la route est faite'),
    ], chk('Dans ces quatre phrases, qu’est-ce qui dit que c’est déjà fait ?',
      ['l’auxiliaire au subjonctif et le participe', 'le sentiment du début', 'un mot comme hier'], 0,
      'Sois venu, soit parti, ait plu, aies fait : deux mots, comme un passé composé. EN: the auxiliary plus the participle.')),
    grp('En même temps ou plus tard', [
      it(E(1201), 'la visite est à venir'),
      it(E(1209), 'Samir s’en va bientôt'),
      it(E(1208), 'il pleut en ce moment'),
      it('fr.b1.opinions-et-avis.1003', 'tu es là, maintenant'),
    ], chk('« Je regrette que Samir parte avant le gâteau. » Samir est-il déjà parti ?',
      ['non, il va partir', 'oui, il est parti hier'], 0,
      'Parte : un seul mot, subjonctif présent. Le départ est encore devant. EN: one word, present subjunctive.')),
    ctl('Le test', 'Pour choisir entre que tu viennes et que tu sois venu, que regardes-tu ?',
      ['si l’action est déjà faite quand tu parles', 'si le sentiment est fort', 'si la phrase contient que'], 0,
      'Le sentiment est le même ; c’est l’horloge qui change. EN: whether it is already done.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accompli', 'horloge'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où la mauvaise forme coûte cher',
  cases: [
    { situation: 'Tu remercies un collègue après une réunion', fr: 'Je suis contente que vous ayez pris le temps de venir.', en: 'I am glad you took the time to come.' },
    { situation: 'Tu t’excuses auprès d’un client', fr: 'Nous sommes désolés que votre colis soit arrivé abîmé.', en: 'We are sorry your parcel arrived damaged.' },
    { situation: 'Tu félicites une amie', fr: 'Je suis tellement fière que tu aies obtenu ton diplôme.', en: 'I am so proud you got your degree.' },
    { situation: 'Tu écris à l’examen une lettre de réaction', fr: 'Je regrette que la mairie ait fermé la bibliothèque du quartier.', en: 'I regret that the council has closed the local library.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accompli', 'declencheur'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le sens', '« Je suis content que tu sois venu. » La visite est-elle finie ?',
    ['oui', 'non', 'on ne peut pas savoir'], 0,
    'Sois venu : c’est fait au moment où tu parles. EN: already over.'),
  ctl('Le déclencheur', 'Qu’est-ce qui appelle le subjonctif dans cette phrase ?',
    ['je suis content que', 'le participe venu'], 0,
    'Le sentiment devant que, comme au B1. EN: the feeling before que.'),
  ctl('La forme', 'Sois venu, c’est…',
    ['être au subjonctif présent, puis le participe', 'être au conditionnel, puis le participe'], 0,
    'Sois est le subjonctif présent d’être. EN: sois is the present subjunctive of être.'),
], ['accompli']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Content que tu sois venu',
    opener: {
      line: "La fête est finie, et tu veux remercier : ici tu découvres la forme qui réagit à ce qui est déjà fait. EN: The party is over and you want to say thank you: here you meet the form that reacts to what is already done.",
      imageRef: 'lessons/subjonctif-passe/act01.jpg',
    },
    sections: [],
    milestone: "Tu entends la différence entre que tu viennes et que tu sois venu, et tu sais laquelle remercie après coup. EN: You can hear the difference between que tu viennes and que tu sois venu.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: LA FORME
 *
 *  Form, briefly, and only what B1 did not build: lesson 14 gave que j'aie
 *  and que je sois; here they carry a participle, at every person.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu sais déjà, et ce qui s’ajoute',
  frSub: 'Deux mots que tu connais',
  hint: 'Quatre cartes. La troisième est la plus rassurante.',
  audio: REC('rec-b2-05-forme'),
  say: REFRAME,
  terms: ['auxiliaire'],
  cards: [
    {
      head: 'Le point de départ', label: Cap(SUBJ_FORM_REF),
      fr: `${fr('fr.b1.opinions-et-avis.1108')} · ${fr('fr.b1.opinions-et-avis.1105')}`,
      sub: '[kuh ZHEH] · [kuh zhuh SWA]',
      body: `« ${B114_REFRAME} » Ici, avoir et être portent un participe. EN: ${B114_REFRAME_EN}`,
    },
    {
      head: 'L’auxiliaire au subjonctif', label: 'avoir',
      fr: 'aie · aies · ait · ayons · ayez · aient',
      sub: '[EH] · [EH] · [EH] · [ay-YOHⁿ] · [ay-YAY] · [EH]',
      body: "Quatre formes se prononcent pareil ; seules ayons et ayez s'entendent. Pour être : sois, sois, soit, soyons, soyez, soient. EN: four forms sound the same.",
    },
    {
      head: 'Avoir ou être', label: 'comme au passé composé',
      fr: fr(E(1230)), sub: rsOf(E(1230)),
      body: "Les verbes qui prennent être au passé composé (venir, partir, arriver, rester, aller, tomber, naître...) et tous les pronominaux gardent être. Les autres prennent avoir. Tu n'as rien de nouveau à choisir. EN: same auxiliary as the passé composé.",
    },
    {
      head: 'Le participe ne bouge pas', label: 'le deuxième mot',
      fr: "j'ai fini > que j'aie fini",
      sub: '[zhay fee-NEE] · [kuh zheh fee-NEE]',
      body: "Seul l'auxiliaire change de mode. Le participe reste celui que tu connais : fini, venu, pris, eu, été. EN: only the auxiliary changes.",
    },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-forme',
  title: 'Six personnes, deux auxiliaires',
  cols: ['Personne', 'avec avoir', 'avec être'],
  rows: [
    { cells: ['je', "que j'aie fini", 'que je sois parti(e)'], say: fr(E(1212)),
      detail: { title: 'je', body: "Que reste entier devant je : que j'aie, que je sois. Seul je s'élide devant aie. EN: que stays whole; je elides before aie.", say: fr(E(1218)) } },
    { cells: ['tu', 'que tu aies fini', 'que tu sois parti(e)'], say: fr(E(1213)),
      detail: { title: 'tu', body: "Aies prend un s, comme tous les tu. Tu ne s'élide jamais. EN: aies takes an s.", say: fr(E(1231)) } },
    { cells: ['il, elle, on', "qu'il ait fini", "qu'elle soit partie"], say: fr(E(1214)),
      detail: { title: 'il, elle, on', body: "Ait prend un t, soit aussi. Avec être, elle ajoute un e au participe. EN: ait and soit end in t.", say: fr(E(1219)) } },
    { cells: ['nous', 'que nous ayons fini', 'que nous soyons parti(e)s'], say: fr(E(1215)),
      detail: { title: 'nous', body: "Pas de i après y : ayons, soyons, jamais ayions. EN: no i after the y.", say: fr(E(1236)) } },
    { cells: ['vous', 'que vous ayez fini', 'que vous soyez parti(e)(s)'], say: fr(E(1216)),
      detail: { title: 'vous', body: "Ayez et soyez, sans i. Vous de politesse : un seul accord, soyez parti. EN: polite vous agrees with one person.", say: fr(E(1229)) } },
    { cells: ['ils, elles', "qu'ils aient fini", "qu'elles soient parties"], say: fr(E(1217)),
      detail: { title: 'ils, elles', body: "Aient et ait se prononcent pareil ; seule la liaison de qu'ils aient s'entend. EN: same sound, different spelling.", say: fr(E(1221)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire', 'accord'],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte les deux mots',
  frSub: 'Trois pages, trois gâchettes',
  groups: [
    grp('Avec avoir', [
      it(E(1212), 'finir : avoir'),
      it(E(1222), 'trouver : avoir'),
      it(E(1226), 'la forme de nous'),
      it(E(1231), 'retrouver : avoir'),
    ], chk('J’ai manqué le début devient, après c’est dommage que…',
      ['que j’aie manqué le début', 'que j’ai manqué le début', 'que j’aurais manqué le début'], 0,
      'Le même auxiliaire, au subjonctif : aie, avec un e. EN: aie, not ai.')),
    grp('Avec être', [
      it(E(1218), 'partir, sans complément'),
      it(E(1224), 'arriver, et le s de l’accord'),
      it(E(1229), 'rester garde être'),
      it(E(1230), 'venir garde être'),
    ], chk('Vous êtes restés devient, après je suis étonné que…',
      ['que vous ayez restés', 'que vous soyez restés'], 1,
      'Rester prend être au passé composé, donc aussi ici. EN: rester keeps être.')),
    ctl('Avoir et être eux-mêmes', 'Elle a été malade devient, après je regrette que…',
      ['qu’elle soit été malade', 'qu’elle ait été malade'], 1,
      'Être se conjugue avec avoir : qu’elle ait été. EN: être itself takes avoir.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Avoir ou être, à l’oreille',
  frSub: 'Dix phrases, un seul temps',
  lines: [
    ln(E(1222)), ln(E(1223)), ln(E(1224)), ln(E(1225)), ln(E(1226)),
    ln(E(1227)), ln(E(1228)), ln(E(1229)), ln(E(1235)), ln(E(1236)),
  ],
  questions: [
    { q: 'Troisième phrase : quel auxiliaire entends-tu ?', opts: ['être', 'avoir'], correct: 0, why: 'Arriver garde être : soient arrivés. EN: arriver keeps être.' },
    { q: 'Quatrième phrase : avant quel jour faut-il rendre le dossier ?', opts: ['lundi', 'vendredi', 'samedi'], correct: 1, why: 'Avant vendredi. EN: by Friday.' },
    { q: 'Sixième phrase : quel verbe prend avoir alors qu’on attendait être ?', opts: ['être', 'rester', 'partir'], correct: 0, why: 'Qu’elle ait été malade : être prend avoir. EN: être takes avoir.' },
    { q: 'Septième phrase : qu’est-ce que la personne a obtenu ?', opts: ['un appartement', 'un poste'], correct: 1, why: 'Que tu aies eu ce poste. EN: a job.' },
    { q: 'Dernière phrase : de quoi le locuteur est-il fier ?', opts: ['d’avoir tenu jusqu’au bout', 'd’être arrivé le premier'], correct: 0, why: 'Que nous ayons tenu jusqu’au bout. EN: holding out to the end.' },
  ],
  audio: REC('rec-b2-05-forme-ecoute'),
  say: REFRAME,
  terms: ['auxiliaire'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de forme',
  errors: [
    {
      wrong: 'Je suis content que tu es venu.',
      right: 'Je suis content que tu sois venu.',
      why: "Normal : à l'oral, tu entends tu es venu partout, et que semble ne rien changer. Après un sentiment, l'auxiliaire passe au subjonctif : sois. EN: after a feeling, the auxiliary goes into the subjunctive.",
    },
    {
      wrong: "C'est dommage que j'ai manqué le début.",
      right: "C'est dommage que j'aie manqué le début.",
      why: "Normal : ai et aie se prononcent pareil, donc l'oreille ne t'aide pas. À l'écrit, le subjonctif prend un e. EN: same sound; the subjunctive is spelled aie.",
    },
    {
      wrong: "Il est possible qu'elle aurait raté son train.",
      right: "Il est possible qu'elle ait raté son train.",
      why: "Aurait semble prudent, comme un doute. Mais c'est un conditionnel : après il est possible que, le subjonctif, ait. EN: aurait is conditional; use ait.",
    },
    {
      wrong: 'Je regrette que nous ayions manqué le train.',
      right: 'Je regrette que nous ayons manqué le train.',
      why: "Normal : parlions, finissions prennent -ions. Avoir et être font exception : ayons, soyons, sans i. EN: no i in ayons and soyons.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Aie, ait ou aient, à toi de voir',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire'],
};

const A2_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a2-flash',
  layer: 'core',
  title: 'Huit formes à avoir en bouche',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'that I (have) finished', back: "que j'aie fini", say: fr(E(1212)) },
    { front: 'that we (have) left', back: 'que nous soyons partis', say: fr(E(1220)) },
    { front: 'that she (has) left', back: "qu'elle soit partie", say: fr(E(1219)) },
    { front: 'that they (have) finished', back: "qu'ils aient fini", say: fr(E(1217)) },
    { front: 'that she was ill', back: "qu'elle ait été malade", say: fr(E(1227)) },
    { front: 'that you got', back: 'que tu aies eu', say: fr(E(1228)) },
    { front: 'that you (have) stayed', back: 'que vous soyez restés', say: fr(E(1229)) },
    { front: 'that we were scared', back: "qu'on ait eu peur", say: fr(E(1235)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La recette', 'Le subjonctif passé, c’est…',
    ['avoir ou être au présent de l’indicatif, puis le participe', 'avoir ou être au subjonctif présent, puis le participe', 'avoir ou être au conditionnel, puis le participe'], 1,
    'Le subjonctif présent de l’auxiliaire, puis le participe. EN: present subjunctive auxiliary plus participle.'),
  ctl('Le choix', 'Pour choisir entre avoir et être, tu regardes…',
    ['le passé composé du même verbe', 'le sentiment du début'], 0,
    'Le même auxiliaire qu’au passé composé. EN: the passé composé decides.'),
  ctl('L’orthographe', 'Laquelle est juste ?',
    ['que nous ayons fini', 'que nous ayions fini'], 0,
    'Ayons, sans i. EN: ayons.'),
], ['auxiliaire']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La forme',
    opener: {
      line: "Deux mots, et tu connais déjà les deux : ici tu montes le subjonctif passé à toutes les personnes. EN: Two words, and you already know both: here you build the past subjunctive for every person.",
      imageRef: 'lessons/subjonctif-passe/act02.jpg',
    },
    sections: [],
    milestone: "Tu construis le subjonctif passé avec avoir ou avec être, à toutes les personnes, sans le confondre avec l'indicatif ou le conditionnel. EN: You can build the past subjunctive with either auxiliary, for every person.",
    estScreens: 38, restPoints: ['a2-table', 'a2-ecoute'],
  },
  sections: [A2_RAPPEL, A2_TABLE, A2_CONSTRUIRE, A2_ECOUTE, A2_ERREURS, A2_DICTEE, A2_FLASH, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: LES ACCORDS ET LES PRONOMINAUX
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'La lettre de Chloé',
  frSub: 'Chloé écrit, sa mère relit',
  setting: 'Liège, le soir du baptême. Chloé écrit une lettre de remerciement à sa tante ; sa mère relit par-dessus son épaule.',
  bubbles: [
    { from: 'narrator', fr: 'Chloé a déjà écrit trois lignes. Sa mère se penche vers la feuille.', en: 'Chloé has already written three lines. Her mother leans over the page.' },
    { from: 'user', fr: 'Je suis heureuse que tu sois venue au baptême.', en: 'I am happy you came to the christening.' },
    { from: 'coach', fr: 'Venue, avec un e : tu écris à ta tante, et être regarde le sujet.', en: 'Venue, with an e: you are writing to your aunt, and être looks at the subject.', warn: 'Être : accord avec le sujet' },
    { from: 'user', fr: 'Les photos, je suis ravie que tu les aies gardées.', en: 'The photos, I am delighted you kept them.' },
    { from: 'coach', fr: 'Gardées, avec es : les reprend les photos, et il est placé avant.', en: 'Gardées, with es: les stands for the photos, and it comes first.', warn: 'Avoir : accord avec les' },
    { from: 'user', fr: 'Et je suis contente que vous vous soyez parlé longtemps.', en: 'And I am glad you talked to each other for a long time.' },
    { from: 'coach', fr: 'Parlé, sans rien : on parle à quelqu’un, donc se ne compte pas.', en: 'Parlé, no ending: you talk TO someone, so se does not count.', warn: 'Pronominal : se indirect, pas d’accord' },
  ],
  closing: { fr: 'Les accords du passé composé, rien de plus : seul l’auxiliaire a changé.', en: 'The passé composé agreements, nothing more: only the auxiliary has changed.' },
  audio: REC('rec-b2-05-bapteme'),
  say: REFRAME,
  terms: ['accord', 'auxiliaire'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-forme',
  title: 'Les accords, en quatre cartes',
  frSub: 'Les règles du passé composé, au subjonctif',
  hint: 'Quatre cartes. L’oreille n’entend presque rien : c’est l’écrit qui compte.',
  audio: REC('rec-b2-05-accords'),
  say: REFRAME,
  terms: ['accord'],
  cards: [
    {
      head: 'Avec être', label: 'le sujet décide',
      fr: fr(E(1241)), sub: rsOf(E(1241)),
      body: "Le participe prend le genre et le nombre du sujet : cousines, donc venues. EN: with être, the participle agrees with the subject.",
    },
    {
      head: 'Avec avoir, rien avant', label: 'pas d’accord',
      fr: fr(E(1244)), sub: rsOf(E(1244)),
      body: "La maison vient après le verbe : vendu reste nu. Le sujet ne compte jamais avec avoir. EN: with avoir and nothing before, no agreement.",
    },
    {
      head: 'Avec avoir, les ou que avant', label: 'accord avec le complément',
      fr: fr(E(1243)), sub: rsOf(E(1243)),
      body: "Que reprend la lettre et arrive avant ait : écrite. C'est le cas des relatives et des pronoms le, la, les. EN: an object placed before makes the participle agree.",
    },
    {
      head: 'Les pronominaux', label: 'toujours être',
      fr: fr(E(1246)), sub: rsOf(E(1246)),
      body: "Se lever, se tromper, se réconcilier : être, et l'accord avec le sujet. Sauf si se veut dire à quelqu'un : qu'elles se soient téléphoné. EN: pronominals take être and usually agree.",
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trouve ce qui commande l’accord',
  frSub: 'Trois groupes, trois gâchettes',
  groups: [
    grp('Être : le sujet', [
      it(E(1240), 'elle, donc arrivée'),
      it(E(1241), 'les cousines, donc venues'),
      it(E(1251), 'ma sœur, donc revenue'),
      it(E(1255), 'nous, donc revus'),
    ], chk('« Je suis touché que mes cousines soient … de si loin. » Quelle forme ?',
      ['venu', 'venues', 'venus'], 1,
      'Cousines : féminin pluriel. EN: feminine plural subject.')),
    grp('Avoir : un complément avant', [
      it(E(1242), 'les = les lunettes'),
      it(E(1243), 'que = la lettre'),
      it(E(1252), 'les = les photos'),
      it(E(1244), 'la maison vient après'),
    ], chk('Dans ces phrases, qui décide de l’accord après avoir ?',
      ['le sujet', 'le complément direct s’il est placé avant', 'le sentiment'], 1,
      'Les, la, que, placés avant l’auxiliaire. EN: the object placed before.')),
    grp('Les pronominaux', [
      it(E(1246), 'se lever : elle, levée'),
      it(E(1247), 'se tromper : ils, trompés'),
      it(E(1248), 'se téléphoner : à l’autre'),
      it(E(1249), 'le poignet vient après'),
    ], chk('« Qu’elles se soient téléphoné. » Pourquoi pas téléphonées ?',
      ['on téléphone à quelqu’un : se est indirect', 'téléphoner ne s’accorde jamais'], 0,
      'Se veut dire l’une à l’autre : pas de complément direct. EN: se is indirect.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Cinq accords au travail',
  frSub: 'Lis, puis dis ce qui commande',
  examples: [
    ex(E(1250), 'pronominal, parents au masculin pluriel : inquiétés'),
    ex(E(1251), 'être et un sujet féminin : revenue'),
    ex('fr.b1.correspondance.1141', 'attendre, avoir, rien avant : attendu'),
    ex(E(1245), 'vous, deux personnes : réconciliés'),
    ex(E(1256), 'tu, au masculin ici : senti perdu'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'L’accord qu’on oublie, l’accord qu’on invente',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Être regarde le sujet, avoir regarde avant',
    body: "Avec être, le participe s'accorde avec le sujet. Avec avoir, seulement avec un complément direct placé avant. Les pronominaux prennent être, sauf l'accord quand se est indirect. EN: être agrees with the subject; avoir only with an object placed before.",
  },
  cards: [
    { promptLabel: 'accord oublié', promptSound: "Je suis heureuse qu'elle soit arrivé sans encombre.", fr: fr(E(1240)), ipa: ipaOf(E(1240)), tip: 'Être : le e du sujet elle. EN: être agrees with elle.' },
    { promptLabel: 'accord inventé', promptSound: 'Je regrette que tu aies vendue la maison.', fr: fr(E(1244)), ipa: ipaOf(E(1244)), tip: 'Avoir, rien avant : pas d’accord. EN: nothing before avoir.' },
    { promptLabel: 'accord oublié', promptSound: 'Je suis content que tu les aies retrouvé.', fr: fr(E(1242)), ipa: ipaOf(E(1242)), tip: 'Les = les lunettes, placé avant. EN: les stands for the glasses.' },
    { promptLabel: 'accord inventé', promptSound: "Je suis contente qu'elles se soient téléphonées.", fr: fr(E(1248)), ipa: ipaOf(E(1248)), tip: 'Se = l’une à l’autre : pas d’accord. EN: se is indirect.' },
    { promptLabel: 'mauvais auxiliaire', promptSound: 'Je suis content que vous vous ayez réconciliés.', fr: fr(E(1245)), ipa: ipaOf(E(1245)), tip: 'Un pronominal prend être. EN: pronominals take être.' },
    { promptLabel: 'accord oublié', promptSound: "Je suis surpris qu'elle se soit levé si tôt.", fr: fr(E(1246)), ipa: ipaOf(E(1246)), tip: 'Se lever : se est direct, accord avec elle. EN: agrees with elle.' },
  ],
  drill: [
    { promptSay: 'Je suis heureuse qu’elle soit … sans encombre.', opts: ['arrivé', 'arrivée'], correct: 1 },
    { promptSay: 'Je regrette que tu aies … la maison.', opts: ['vendu', 'vendue'], correct: 0 },
    { promptSay: 'Tes lunettes ? Je suis content que tu les aies …', opts: ['retrouvé', 'retrouvées'], correct: 1 },
    { promptSay: 'Je suis contente qu’elles se soient …', opts: ['téléphoné', 'téléphonées'], correct: 0 },
    { promptSay: 'Je suis content que vous vous … réconciliés.', opts: ['ayez', 'soyez'], correct: 1 },
    { promptSay: 'Ça m’étonne qu’ils se soient … d’adresse.', opts: ['trompés', 'trompé'], correct: 0 },
    { promptSay: 'Il se peut qu’il se soit … le poignet.', opts: ['cassé', 'cassés'], correct: 0 },
    { promptSay: 'C’est la plus belle lettre qu’on m’ait …', opts: ['écrit', 'écrite'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Être regarde le sujet, avoir regarde avant' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la main écrit toute seule' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-05-piege-accords'),
  say: REFRAME,
  terms: ['accord'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Compléter : la lettre à tante Aïcha', TEXTE_A3, [
  { q: 'Complète les deux premiers verbes : que tu (venir), que mes cousines (faire).', a: "que tu sois venue (être, et tante Aïcha est une femme) ; que mes cousines aient fait (avoir, le voyage vient après : pas d'accord)." },
  { q: 'Complète : les photos, que tu les (garder).', a: "que tu les aies gardées. Les reprend les photos, placé avant avoir." },
  { q: 'Complète : que vous (se revoir), que vous (se reconnaître).', a: "que vous vous soyez revues ; que vous vous soyez reconnues. Deux femmes, et se est direct : accord au féminin pluriel." },
  { q: 'Complète la dernière : que la tempête (retarder) ton train.', a: "que la tempête ait retardé ton train. Avoir, et le train vient après : pas d'accord." },
], 'rec-b2-05-texte-a3', ['accord']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Être', 'Avec être, le participe s’accorde avec…',
    ['le sujet', 'le complément', 'rien'], 0,
    'Le sujet : qu’elle soit arrivée. EN: the subject.'),
  ctl('Avoir', '« Ces photos, je suis ravie que tu les aies … » : gardé ou gardées ?',
    ['gardé', 'gardées'], 1,
    'Les = les photos, placé avant. EN: les placed before.'),
  ctl('Pronominal', '« Que vous vous … réconciliés. »',
    ['soyez', 'ayez'], 0,
    'Un pronominal prend être. EN: être.'),
], ['accord']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Les accords',
    opener: {
      line: "Une tante venue de loin, des photos gardées : ici tu apprends quand le participe prend un e ou un s. EN: An aunt who came a long way, photos kept: here you learn when the participle takes an e or an s.",
      imageRef: 'lessons/subjonctif-passe/act03.jpg',
    },
    sections: [],
    milestone: "Tu accordes le participe du subjonctif passé avec être, avec avoir et avec les pronominaux, comme au passé composé. EN: You can make the participle agree after être, avoir and pronominal verbs.",
    estScreens: 36, restPoints: ['a3-construire', 'a3-piege'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_EXEMPLES, A3_PIEGE, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: L'HORLOGE
 *
 *  The clock is set on the MAIN verb, never on the calendar. The pairs
 *  differ by one form, and act 4's listening asks what is already done.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Déjà fait, ou pas encore',
  frSub: 'Dix phrases, deux horloges',
  lines: [
    ln(E(1258)), ln(E(1259)), ln(E(1260)), ln(E(1261)), ln(E(1262)),
    ln(E(1263)), ln(E(1264)), ln(E(1265)), ln(E(1272)), ln(E(1273)),
  ],
  questions: [
    { q: 'Première phrase : Léo est-il déjà venu ?', opts: ['non, il va venir', 'oui'], correct: 0, why: 'Vienne : la venue est encore devant. EN: still to come.' },
    { q: 'Troisième phrase : quand part-elle ?', opts: ['hier', 'demain'], correct: 1, why: 'Qu’elle parte demain : subjonctif présent. EN: tomorrow.' },
    { q: 'Cinquième et sixième phrases : laquelle dit qu’il était arrivé avant la joie ?', opts: ['la cinquième', 'la sixième'], correct: 1, why: 'Qu’il soit venu : déjà fait. Qu’il soit là : en même temps. EN: the sixth one.' },
    { q: 'Huitième phrase : de quoi doute-t-on ?', opts: ['d’une compréhension déjà passée', 'd’une compréhension à venir'], correct: 0, why: 'Qu’il ait compris : c’est passé. EN: a past understanding.' },
    { q: 'Les deux dernières phrases : dans laquelle les papiers sont-ils peut-être déjà perdus ?', opts: ['l’avant-dernière', 'la dernière'], correct: 0, why: 'Ait perdu : c’est peut-être déjà arrivé. EN: may already have happened.' },
  ],
  audio: REC('rec-b2-05-horloge-ecoute'),
  say: REFRAME,
  terms: ['horloge', 'accompli'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-moment',
  title: 'L’horloge en quatre cartes',
  frSub: 'Le verbe principal donne l’heure',
  hint: 'Quatre cartes. La deuxième surprend presque tout le monde.',
  audio: REC('rec-b2-05-horloge'),
  say: REFRAME,
  terms: ['horloge', 'accompli'],
  cards: [
    {
      head: 'En même temps ou plus tard', label: 'subjonctif présent',
      fr: fr(E(1258)), sub: rsOf(E(1258)),
      body: "Ta joie et la venue de Léo sont au même moment, ou la venue est encore à venir : le présent. EN: simultaneous or later: present subjunctive.",
    },
    {
      head: 'Même au passé', label: 'l’horloge suit le verbe',
      fr: `${fr(E(1262))} · ${fr(E(1263))}`, sub: `${rsOf(E(1262))} · ${rsOf(E(1263))}`,
      body: "J'étais content est au passé, et pourtant qu'il soit là garde le présent : il était là en même temps. Seul qu'il soit venu dit qu'il était arrivé avant. EN: the clock follows the main verb, not the calendar.",
    },
    {
      head: 'Déjà fait', label: 'subjonctif passé',
      fr: fr(E(1259)), sub: rsOf(E(1259)),
      body: "La venue est terminée quand tu réagis : le passé. C'est la seule question à te poser. EN: already done when you react: past subjunctive.",
    },
    {
      head: 'Un cousin du B2', label: Cap(PQP_REF),
      fr: fr(E(1267)), sub: rsOf(E(1267)),
      body: `« ${B201_REFRAME} » Le subjonctif passé se mesure, lui aussi, au moment du verbe principal. EN: ${B201_REFRAME_EN}`,
    },
  ],
};

const A4_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-trier',
  layer: 'core',
  size: 'lg',
  title: 'Règle l’horloge',
  frSub: 'Le sens choisit la forme',
  groups: [
    grp('En même temps ou plus tard', [
      it(E(1260), 'le départ est demain'),
      it(E(1262), 'il était là pendant la fête'),
      it(E(1264), 'il ne comprend pas, maintenant'),
      it(E(1266), 'la pluie était à venir'),
    ], chk('« Hier soir, j’avais peur qu’il pleuve. » Pourquoi le présent, alors que c’est hier ?',
      ['la pluie était à venir au moment de la peur', 'on ne met jamais le passé après avoir peur'], 0,
      'L’horloge se règle sur j’avais peur, pas sur hier. EN: set on the main verb.')),
    grp('Déjà fait', [
      it(E(1261), 'elle est partie hier'),
      it(E(1263), 'il était arrivé avant'),
      it(E(1265), 'la compréhension est passée'),
      it(E(1267), 'elle avait fini avant ma surprise'),
    ], chk('Laquelle dit que le travail était terminé avant ta surprise ?',
      ['J’étais surprise qu’elle finisse.', 'J’étais surprise qu’elle ait déjà fini.'], 1,
      'Ait fini : déjà fait au moment de la surprise. EN: finished before the surprise.')),
    ctl('À toi de choisir', '« Je suis ravi que tu … là ce soir. » Tu es là en ce moment.',
      ['sois', 'aies été'], 0,
      'En même temps que ta joie : le présent. EN: simultaneous, so present.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['horloge'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Le présent qui oublie que c’est fini',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Fini au moment du verbe principal : passé',
    body: "Le piège le plus fréquent : garder le subjonctif présent pour une action terminée. Demande-toi si c'est déjà fait quand tu réagis, doutes ou regrettes. Si oui, auxiliaire et participe. EN: if it is over at the moment of the main verb, use the past.",
  },
  cards: [
    { promptLabel: 'présent pour du fini', promptSound: 'Je suis contente que Léo vienne à la fête hier soir.', fr: fr(E(1259)), ipa: ipaOf(E(1259)), tip: 'Hier soir : la venue est finie. EN: already over.' },
    { promptLabel: 'présent pour du fini', promptSound: "Je regrette qu'elle parte hier.", fr: fr(E(1261)), ipa: ipaOf(E(1261)), tip: 'Hier : soit partie. EN: soit partie.' },
    { promptLabel: 'présent pour du fini', promptSound: "Je doute qu'il comprenne la question hier.", fr: fr(E(1265)), ipa: ipaOf(E(1265)), tip: 'Un doute sur une compréhension passée. EN: a past understanding.' },
    { promptLabel: 'passé pour du simultané', promptSound: "Pendant la soirée, j'étais content qu'il ait été là.", fr: fr(E(1262)), ipa: ipaOf(E(1262)), tip: 'Il était là en même temps que ta joie : présent. EN: simultaneous.' },
    { promptLabel: 'présent pour du fini', promptSound: 'Je suis désolé que tu doives attendre sous la pluie.', fr: fr(E(1269)), ipa: ipaOf(E(1269)), tip: 'L’attente est finie quand tu t’excuses. EN: the wait is over.' },
    { promptLabel: 'présent pour du fini', promptSound: 'Nous sommes heureux que vous choisissiez notre hôtel.', fr: fr(E(1271)), ipa: ipaOf(E(1271)), tip: 'Le choix est fait : tu remercies après. EN: the choice is made.' },
  ],
  drill: [
    { promptSay: 'Je suis contente que Léo … à la fête hier soir.', opts: ['vienne', 'soit venu'], correct: 1 },
    { promptSay: 'Je regrette qu’elle … demain.', opts: ['parte', 'soit partie'], correct: 0 },
    { promptSay: 'Pendant la soirée, j’étais content qu’il … là.', opts: ['ait été', 'soit'], correct: 1 },
    { promptSay: 'Je doute qu’il … la question hier.', opts: ['ait compris', 'comprenne'], correct: 0 },
    { promptSay: 'Elle craint que son fils … ses papiers hier.', opts: ['perde', 'ait perdu'], correct: 1 },
    { promptSay: 'Hier soir, j’avais peur qu’il …', opts: ['pleuve', 'ait plu'], correct: 0 },
    { promptSay: 'Entre, je suis ravi que tu … là ce soir.', opts: ['sois', 'aies été'], correct: 0 },
    { promptSay: 'À la fin du séjour : nous sommes heureux que vous … notre hôtel.', opts: ['choisissiez', 'ayez choisi'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Fini au moment du verbe principal' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le présent fait dire' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-05-piege-horloge'),
  say: REFRAME,
  terms: ['horloge', 'accompli'],
};

const A4_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a4-hacks',
  layer: 'core',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    { hack: 'Remplace par le passé composé : si c’est « tu es venu », le subjonctif est « que tu sois venu ».', why: "La même action, vue comme finie, donne les mêmes deux mots. EN: if the passé composé fits, so does the past subjunctive." },
    { hack: 'Ignore le calendrier : pose-toi la question au moment du verbe principal.', why: "Hier, j'avais peur qu'il pleuve : au moment de la peur, la pluie était à venir. EN: judge from the main verb." },
    { hack: 'Avec un mot comme hier ou la semaine dernière dans la subordonnée, le passé s’impose.', why: "Ces mots disent que l'action est terminée ; le présent les contredit. EN: past time words inside the clause call for the past." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['horloge'],
};

const A4_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a4-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Un mot ou deux après que',
  itemIds: dicteeFor(4),
  audio: AUDIO,
  say: REFRAME,
  terms: ['horloge'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Compléter : l’anniversaire de la grand-mère', TEXTE_A4, [
  { q: 'Complète : que toute la famille (être) là, que mon oncle (venir) de Dakar.', a: "que toute la famille soit là (en même temps que la joie) ; que mon oncle soit venu de Dakar (le voyage est fait avant)." },
  { q: 'Complète : avait peur qu’il (ne pas pouvoir) venir.', a: "qu'il ne puisse pas venir. Au moment de la peur, la venue était encore à venir : subjonctif présent, même dans un récit au passé." },
  { q: 'Complète : que mon cousin (repartir) déjà ce matin, que mon oncle (rester) encore une semaine.', a: "que mon cousin soit reparti (c'est fait) ; que mon oncle reste encore une semaine (c'est à venir)." },
  { q: 'Complète la dernière : je doute que ma grand-mère (dormir) beaucoup.', a: "que ma grand-mère ait beaucoup dormi (ou ait dormi beaucoup). La nuit est passée quand tu doutes." },
], 'rec-b2-05-texte-a4', ['horloge']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('L’horloge', 'L’horloge du subjonctif se règle sur…',
    ['le verbe principal', 'le jour où tu parles', 'la date du calendrier'], 0,
    'Le moment du verbe principal. EN: the main verb.'),
  ctl('Au passé', '« Pendant la soirée, j’étais content qu’il … là. »',
    ['soit', 'ait été'], 0,
    'En même temps : le présent, même au passé. EN: simultaneous.'),
  ctl('Déjà fait', '« Je regrette qu’elle … hier. »',
    ['soit partie', 'parte'], 0,
    'Hier : c’est fait. EN: yesterday, so past.'),
], ['horloge']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'L’horloge',
    opener: {
      line: "Hier, et pourtant le présent : ici tu règles l'horloge du subjonctif sur le verbe principal, pas sur le calendrier. EN: Yesterday, and still the present: here you set the subjunctive's clock on the main verb, not the calendar.",
      imageRef: 'lessons/subjonctif-passe/act04.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre le subjonctif présent et le subjonctif passé selon ce qui est déjà fait au moment du verbe principal. EN: You can choose present or past subjunctive by what is already done at the main verb.",
    estScreens: 36, restPoints: ['a4-trier', 'a4-hacks'],
  },
  sections: [A4_ECOUTE, A4_CARTES, A4_TRIER, A4_PIEGE, A4_HACKS, A4_DICTEE, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: RÉAGIR APRÈS COUP
 *
 *  Feelings about what has already happened (the heart of the theme), and
 *  the line that keeps savoir and être sûr on the indicative side.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le courrier des lecteurs',
  frSub: 'Une lettre, une réponse',
  text: LECTURE_COURRIER,
  glossary: [
    { word: 'trahie', en: 'betrayed', note: 'Blessée par quelqu’un en qui on avait confiance.' },
    { word: 'je suis frappée', en: 'I am struck', note: 'Quelque chose m’étonne et retient mon attention.' },
    { word: 'éloignées', en: 'drifted apart', note: 'S’éloigner : devenir moins proches.' },
  ],
  questions: [
    { q: 'Qu’est-ce qui blesse Sophie, et qu’est-ce qui lui fait le plus mal ?', a: "Elle est blessée que Claire ne lui ait rien dit ; mais ce qui lui fait le plus mal, c'est de ne pas l'avoir remarqué elle-même." },
    { q: 'Pourquoi « je suis déçue de ne pas l’avoir remarqué » et non « que je ne l’aie pas remarqué » ?', a: "Parce que celle qui est déçue et celle qui n'a pas remarqué sont la même personne : un seul sujet, donc l'infinitif passé. C'est l'acte 10." },
    { q: 'Quelles hypothèses Hélène fait-elle sur Claire ?', a: "Il est possible qu'elle n'ait pas osé, qu'elle ait craint sa réaction ; il se peut qu'elle ait attendu d'être sûre. Des doutes sur des faits passés : subjonctif passé." },
    { q: 'Quel conseil Hélène donne-t-elle, et avec quelles deux phrases ?', a: "Écrire à Claire : dire qu'elle est triste que Claire soit partie sans un mot, et heureuse qu'elle ait trouvé ce poste." },
    { q: 'Quelle est la position d’Hélène sur la colère de Sophie ?', a: "Elle la comprend (il est normal que vous vous soyez sentie trahie), mais elle invite Sophie à se mettre à la place de Claire." },
  ],
  audio: REC('rec-b2-05-courrier'),
  say: REFRAME,
  terms: ['declencheur', 'accompli'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Réagir à ce qui est fait',
  frSub: 'Le sentiment, puis le fait',
  hint: 'Quatre cartes. La dernière trace la frontière avec l’indicatif.',
  audio: REC('rec-b2-05-sentiments'),
  say: REFRAME,
  terms: ['declencheur', 'accompli'],
  cards: [
    {
      head: 'Le sentiment ne change pas', label: Cap(EMO_REF),
      fr: fr('fr.b1.emotions.1105'), sub: '[sa may-TONN | keel swa day-zha par-TEE]',
      body: `« ${B135_REFRAME} » Ici, la bonne suite est au passé, parce que le départ a déjà eu lieu. EN: ${B135_REFRAME_EN}`,
    },
    {
      head: 'Avec la négation', label: 'ne… pas autour de l’auxiliaire',
      fr: fr(E(1277)), sub: rsOf(E(1277)),
      body: "Ne avant aies, pas après : que tu n'aies pas appelé. Avec rien : qu'elle ne m'ait rien dit. EN: ne... pas round the auxiliary.",
    },
    {
      head: 'Au passé aussi', label: 'ça m’a fait de la peine',
      fr: fr(E(1278)), sub: rsOf(E(1278)),
      body: "Le sentiment peut être passé lui aussi ; s'il suit un fait déjà accompli, le subjonctif passé reste. EN: a past feeling about an earlier fact keeps the past subjunctive.",
    },
    {
      head: 'Savoir n’est pas sentir', label: 'l’indicatif',
      fr: `${fr(E(1285))} · ${fr(E(1286))}`, sub: `${rsOf(E(1285))} · ${rsOf(E(1286))}`,
      body: "Le même fait, deux regards : le sentiment réagit, le savoir affirme. Savoir, être sûr, constater gardent l'indicatif. EN: knowledge and certainty keep the indicative.",
    },
  ],
};

const A5_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-table',
  layer: 'core',
  sheetId: 'sheet-declencheurs',
  title: 'Six sentiments après coup',
  cols: ['Sentiment', 'Exemple', 'Le fait'],
  rows: [
    { cells: ['la joie', 'je suis ravie que', 'vous avez pu venir'], say: fr(E(1202)),
      detail: { title: 'la joie', body: "Content, heureux, ravi, soulagé : la joie après coup. EN: joy after the event.", say: fr(E(1293)) } },
    { cells: ['le regret', 'je regrette que', 'Samir est parti'], say: fr(E(1203)),
      detail: { title: 'le regret', body: "Je regrette que, c'est dommage que : la déception douce. EN: regret.", say: fr(E(1290)) } },
    { cells: ['la surprise', 'je m’étonne que', 'il n’a pas répondu'], say: fr(E(1283)),
      detail: { title: 'la surprise', body: "Je m'étonne, je suis surpris, c'est incroyable que. EN: surprise.", say: fr(E(1281)) } },
    { cells: ['la peine', 'je suis blessée que', 'elle n’a rien dit'], say: fr(E(1276)),
      detail: { title: 'la peine', body: "Blessé, déçu, triste, ça me fait de la peine que. EN: hurt and disappointment.", say: fr(E(1291)) } },
    { cells: ['la fierté', 'je suis fière que', 'tu as osé'], say: fr(E(1279)),
      detail: { title: 'la fierté', body: "Fier, touché, ça me touche que. EN: pride and being moved.", say: fr(E(1292)) } },
    { cells: ['la colère, la honte', 'je suis furieux que', 'on a annulé'], say: fr(E(1284)),
      detail: { title: 'la colère, la honte', body: "Furieux, en colère, j'ai honte que. EN: anger and shame.", say: fr(E(1280)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['declencheur'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Dis ce que tu ressens',
  frSub: 'Le sentiment, puis le fait',
  groups: [
    grp('Un fait déjà passé', [
      it(E(1279), 'elle a osé'),
      it(E(1281), 'elle a gagné'),
      it(E(1282), 'l’opération s’est bien passée'),
      it(E(1291), 'ils ont vendu la ferme'),
    ], chk('« Je suis fière que tu … parler. » Tu as déjà parlé.',
      ['oses', 'aies osé', 'as osé'], 1,
      'Un sentiment, un fait fini : aies osé. EN: past subjunctive.')),
    grp('Avec la négation', [
      it(E(1276), 'ne… rien'),
      it(E(1277), 'ne… pas'),
      it(E(1283), 'ne… pas'),
      it(E(1289), 'ne… pas, avec être'),
    ], chk('Où va pas ?',
      ['que tu n’aies pas appelé', 'que tu n’aies appelé pas'], 0,
      'Entre l’auxiliaire et le participe. EN: between the two words.')),
    grp('Sentir ou savoir', [
      it(E(1285), 'un sentiment : subjonctif'),
      it(E(1286), 'un savoir : indicatif'),
      it(E(1287), 'une certitude : indicatif'),
      it('fr.b1.emotions.1120', 'un sentiment : subjonctif'),
    ], chk('« Je suis sûr qu’il … » Quelle forme ?',
      ['ait oublié', 'a oublié'], 1,
      'Être sûr affirme : indicatif. EN: certainty takes the indicative.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['declencheur'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de sentiment',
  errors: [
    {
      wrong: 'Je suis content que tu as réussi ton examen.',
      right: 'Je suis content que tu aies réussi ton examen.',
      why: "Normal : le fait est vrai, et l'indicatif semble plus juste pour un fait. Mais c'est le sentiment devant que qui décide. EN: the feeling decides, not the truth of the fact.",
    },
    {
      wrong: "Je suis furieux qu'on a annulé le concert sans prévenir.",
      right: "Je suis furieux qu'on ait annulé le concert sans prévenir.",
      why: "À l'oral, a et ait se confondent presque. À l'écrit, furieux que demande ait. EN: ait after a feeling.",
    },
    {
      wrong: 'Je sais que tu aies réussi ton examen.',
      right: 'Je sais que tu as réussi ton examen.',
      why: "L'erreur inverse : après tant de sentiments, la main met le subjonctif partout. Savoir affirme : indicatif. EN: savoir keeps the indicative.",
    },
    {
      wrong: "Ça m'a fait de la peine qu'il ne vienne pas hier.",
      right: "Ça m'a fait de la peine qu'il ne soit pas venu.",
      why: "Le présent semble suffire après un sentiment au passé. Mais son absence d'hier est finie : subjonctif passé. EN: the absence is over.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['declencheur', 'accompli'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Cinq réactions justes',
  frSub: 'Lis, puis dis le sentiment',
  examples: [
    ex(E(1282), 'le soulagement, un pronominal : se soit bien passée'),
    ex(E(1292), 'l’émotion, un pronominal : te sois souvenu'),
    ex(E(1280), 'la honte, on = nous : disputés'),
    ex('fr.b1.emotions.1120', 'des excuses polies, avec vous'),
    ex(E(1290), 'le regret, avoir : aies raté'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['declencheur'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Compléter : le message à Nadia', TEXTE_A5, [
  { q: 'Complète : que tu ne m’en (parler) pas plus tôt, que nous (ne pas pouvoir) nous dire au revoir.', a: "que tu ne m'en aies pas parlé plus tôt ; que nous n'ayons pas pu nous dire au revoir. Ne et pas autour de l'auxiliaire." },
  { q: 'Complète : je sais que tu (hésiter) longtemps.', a: "je sais que tu as hésité longtemps. Savoir affirme : indicatif, passé composé." },
  { q: 'Complète : je suis fière que tu (oser) partir.', a: "que tu aies osé partir." },
  { q: 'Complète les deux dernières : que l’équipe (perdre), que tu (trouver).', a: "que l'équipe ait perdu sa meilleure analyste ; que tu aies trouvé un poste qui te ressemble. Que l'équipe perde est juste aussi, si l'on voit la perte encore en cours." },
], 'rec-b2-05-texte-a5', ['declencheur']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le sentiment', 'Après je suis déçu que, pour un fait passé…',
    ['le subjonctif passé', 'le passé composé'], 0,
    'Un sentiment, un fait fini : subjonctif passé. EN: past subjunctive.'),
  ctl('Le savoir', 'Après je sais que…',
    ['l’indicatif', 'le subjonctif'], 0,
    'Savoir affirme. EN: knowledge takes the indicative.'),
  ctl('La négation', 'Laquelle est juste ?',
    ['qu’elle ne m’ait rien dit', 'qu’elle m’ait ne rien dit', 'qu’elle ne m’ait dit rien'], 0,
    'Ne avant l’auxiliaire, rien entre les deux mots. EN: ne... rien round the auxiliary.'),
], ['declencheur']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Réagir après coup',
    opener: {
      line: "Une amie est partie sans un mot : ici tu dis ce que tu ressens devant ce qui s'est déjà passé. EN: A friend left without a word: here you say what you feel about what has already happened.",
      imageRef: 'lessons/subjonctif-passe/act05.jpg',
    },
    sections: [],
    milestone: "Tu réagis à un fait passé avec le bon sentiment et le subjonctif passé, et tu gardes l'indicatif après savoir et être sûr. EN: You can react to a past fact, and keep the indicative after savoir.",
    estScreens: 38, restPoints: ['a5-table', 'a5-erreurs'],
  },
  sections: [A5_LECTURE, A5_CARTES, A5_TABLE, A5_CONSTRUIRE, A5_ERREURS, A5_EXEMPLES, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: LE DOUTE SUR CE QUI S'EST PASSÉ
 *
 *  Lesson 15 in B1 built the bascule (je crois que / je ne crois pas que).
 *  Here it is applied to a PAST fact, and the indicative neighbours (il me
 *  semble, il est probable, peut-être que) are kept on their side.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Où est Marc',
  frSub: 'Trois collègues, trois hypothèses',
  setting: 'Genève, neuf heures cinq. La réunion devait commencer à neuf heures. Marc n’est pas là, et son téléphone ne répond pas.',
  bubbles: [
    { from: 'narrator', fr: 'Paul, Anna et la directrice regardent la chaise vide.', en: 'Paul, Anna and the director look at the empty chair.' },
    { from: 'user', fr: 'Il est possible que Marc ait oublié la réunion.', en: 'Marc may have forgotten the meeting.' },
    { from: 'coach', fr: 'Il est possible : un doute sur un fait déjà passé, donc ait oublié.', en: 'Il est possible: a doubt about something already past, so ait oublié.', warn: 'Doute : subjonctif passé' },
    { from: 'user', fr: 'Moi, je crois qu’il a reçu le message, mais qu’il est coincé à Berlin.', en: 'I think he got the message, but he is stuck in Berlin.' },
    { from: 'coach', fr: 'Je crois affirme : a reçu, à l’indicatif. La bascule du B1 marche aussi au passé.', en: 'Je crois asserts: a reçu, in the indicative. The B1 switch works in the past too.', warn: 'Croire : indicatif' },
    { from: 'user', fr: 'Et moi, je ne crois pas qu’il ait reçu le nouvel horaire.', en: 'And I do not think he got the new timetable.' },
    { from: 'coach', fr: 'Je ne crois pas : la négation fait basculer, et le fait est passé. Ait reçu.', en: 'Je ne crois pas: the negation switches the mood, and the fact is past. Ait reçu.', warn: 'Négation : subjonctif passé' },
  ],
  closing: { fr: 'Douter de ce qui s’est passé, c’est le subjonctif passé ; l’affirmer, c’est l’indicatif.', en: 'Doubting what happened takes the past subjunctive; asserting it takes the indicative.' },
  audio: REC('rec-b2-05-bureau'),
  say: REFRAME,
  terms: ['doute', 'accompli'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-declencheurs',
  title: 'Le doute, en quatre cartes',
  frSub: 'Ce qui bascule, ce qui reste',
  hint: 'Quatre cartes. La quatrième protège de l’excès de subjonctif.',
  audio: REC('rec-b2-05-doute'),
  say: REFRAME,
  terms: ['doute'],
  cards: [
    {
      head: 'Le possible', label: 'il est possible, il se peut',
      fr: fr(E(1297)), sub: rsOf(E(1297)),
      body: "Tu ne sais pas ce qui s'est passé : subjonctif, et au passé si le fait est terminé. EN: possibility about a past fact: past subjunctive.",
    },
    {
      head: 'La bascule', label: Cap(DECL_REF),
      fr: `${fr(E(1300))} · ${fr(E(1299))}`, sub: `${rsOf(E(1300))} · ${rsOf(E(1299))}`,
      body: `« ${B115_REFRAME} » Je crois que affirme ; je ne crois pas que doute. Le passé ne change rien à cette règle. EN: ${B115_REFRAME_EN}`,
    },
    {
      head: 'Il semble, il me semble', label: 'une nuance fine',
      fr: `${fr(E(1304))} · ${fr(E(1305))}`, sub: `${rsOf(E(1304))} · ${rsOf(E(1305))}`,
      body: "Il semble que prend le plus souvent le subjonctif ; il me semble que affirme, avec l'indicatif. Un seul mot, me, change le mode. EN: il semble takes the subjunctive; il me semble the indicative.",
    },
    {
      head: 'Ce qui reste à l’indicatif', label: 'probable, peut-être',
      fr: `${fr(E(1303))} · ${fr(E(1310))}`, sub: `${rsOf(E(1303))} · ${rsOf(E(1310))}`,
      body: "Il est probable que, peut-être que, sans doute que : ils penchent vers le oui, donc l'indicatif. Il est peu probable, lui, prend le subjonctif. EN: probable and peut-être keep the indicative.",
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Doute ou certitude',
  frSub: 'Trois pages, trois gâchettes',
  groups: [
    grp('Un doute sur le passé', [
      it(E(1296), 'il est possible que'),
      it(E(1298), 'je doute que'),
      it(E(1302), 'il est peu probable que'),
      it(E(1311), 'il n’est pas impossible que'),
    ], chk('« Je doute qu’il … déjà de Berlin. »',
      ['soit rentré', 'est rentré', 'rentre'], 0,
      'Un doute, un retour déjà fait ou non : soit rentré. EN: past subjunctive.')),
    grp('Une affirmation', [
      it(E(1300), 'je crois que'),
      it(E(1303), 'il est probable que'),
      it(E(1305), 'il me semble que'),
      it(E(1310), 'peut-être que'),
    ], chk('« Il est probable que le colis … arrivé. »',
      ['soit', 'est'], 1,
      'Probable penche vers le oui : indicatif. EN: indicative.')),
    ctl('La bascule', '« Je ne pense pas qu’elle … »',
      ['s’est trompée', 'se soit trompée'], 1,
      'La négation fait basculer : subjonctif passé. EN: negation switches to the subjunctive.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['doute'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Sûr ou pas sûr',
  frSub: 'Neuf phrases, deux attitudes',
  lines: [
    ln(E(1296)), ln(E(1297)), ln(E(1299)), ln(E(1300)), ln(E(1302)),
    ln(E(1303)), ln(E(1306)), ln('fr.b2.universite.1091'), ln(E(1311)),
  ],
  questions: [
    { q: 'Première phrase : est-on certain que Marc a oublié ?', opts: ['non, c’est une possibilité', 'oui'], correct: 0, why: 'Il est possible : un doute. EN: only possible.' },
    { q: 'Troisième et quatrième phrases : laquelle affirme que le message est arrivé ?', opts: ['la troisième', 'la quatrième'], correct: 1, why: 'Je crois qu’il a reçu : une affirmation. EN: the fourth.' },
    { q: 'Cinquième phrase : le colis est-il probablement arrivé avant midi ?', opts: ['non, c’est peu probable', 'oui, sûrement'], correct: 0, why: 'Peu probable : on en doute. EN: unlikely.' },
    { q: 'Septième phrase : de quoi n’est-on pas sûr ?', opts: ['qu’ils aient compris la consigne', 'qu’ils aient reçu la consigne'], correct: 0, why: 'Qu’ils aient compris. EN: that they understood.' },
    { q: 'Huitième phrase : qu’ont peut-être fait les étudiants ?', opts: ['mal estimé leurs heures', 'oublié leurs cours'], correct: 0, why: 'Sous-estimé leurs heures. EN: underestimated their hours.' },
  ],
  audio: REC('rec-b2-05-doute-ecoute'),
  say: REFRAME,
  terms: ['doute'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Trop de subjonctif, ou pas assez',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Douter : subjonctif. Affirmer : indicatif.',
    body: "Je doute, je ne crois pas, il est possible, le plus souvent il semble : subjonctif, au passé si c'est fini. Je crois, il me semble, il est probable, peut-être que : indicatif, même pour un fait incertain. EN: doubt takes the subjunctive; belief and probability keep the indicative.",
  },
  cards: [
    { promptLabel: 'indicatif après un doute', promptSound: "Je doute qu'il est déjà rentré de Berlin.", fr: fr(E(1298)), ipa: ipaOf(E(1298)), tip: 'Douter : subjonctif. EN: doubt, subjunctive.' },
    { promptLabel: 'subjonctif après croire', promptSound: "Je crois qu'il ait reçu le message.", fr: fr(E(1300)), ipa: ipaOf(E(1300)), tip: 'Croire affirme : indicatif. EN: belief, indicative.' },
    { promptLabel: 'subjonctif après il me semble', promptSound: 'Il me semble que la réunion ait été déplacée.', fr: fr(E(1305)), ipa: ipaOf(E(1305)), tip: 'Il me semble : indicatif. EN: indicative.' },
    { promptLabel: 'indicatif après la négation', promptSound: "Je ne crois pas qu'il a reçu le message.", fr: fr(E(1299)), ipa: ipaOf(E(1299)), tip: 'La négation bascule : ait reçu. EN: negation switches.' },
    { promptLabel: 'subjonctif après probable', promptSound: 'Il est probable que le colis soit arrivé ce matin.', fr: fr(E(1303)), ipa: ipaOf(E(1303)), tip: 'Probable : indicatif. EN: indicative.' },
    { promptLabel: 'présent pour du fini', promptSound: "Il est possible que Marc oublie la réunion de ce matin.", fr: fr(E(1296)), ipa: ipaOf(E(1296)), tip: 'La réunion a déjà commencé : ait oublié. EN: already past.' },
  ],
  drill: [
    { promptSay: 'Je doute qu’il … déjà rentré.', opts: ['est', 'soit'], correct: 1 },
    { promptSay: 'Je crois qu’il … le message.', opts: ['a reçu', 'ait reçu'], correct: 0 },
    { promptSay: 'Je ne crois pas qu’il … le message.', opts: ['a reçu', 'ait reçu'], correct: 1 },
    { promptSay: 'Il me semble que la réunion … déplacée.', opts: ['a été', 'ait été'], correct: 0 },
    { promptSay: 'Il est peu probable que le colis … arrivé avant midi.', opts: ['soit', 'est'], correct: 0 },
    { promptSay: 'Il est probable que le colis … arrivé.', opts: ['soit', 'est'], correct: 1 },
    { promptSay: 'Il se peut qu’il … un empêchement.', opts: ['a eu', 'ait eu'], correct: 1 },
    { promptSay: 'Peut-être qu’il … la réunion.', opts: ['a oublié', 'ait oublié'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Douter ou affirmer' },
    { label: 'Six cartes', kind: 'cards', title: 'Les six fautes du bureau' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-05-piege-doute'),
  say: REFRAME,
  terms: ['doute'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Compléter : l’absence de Marc', TEXTE_A6, [
  { q: 'Complète : Paul pense qu’il (oublier) la réunion ; il (oublier) celle de mardi aussi.', a: "Paul pense qu'il a oublié la réunion (penser affirme : indicatif) ; il a oublié celle de mardi aussi (un fait)." },
  { q: 'Complète : Anna n’est pas sûre qu’il (recevoir), la directrice doute qu’il (rentrer).', a: "Anna n'est pas sûre qu'il ait reçu le nouvel horaire ; la directrice doute qu'il soit déjà rentré de Berlin." },
  { q: 'Complète : il est probable que son avion (atterrir), mais il se peut qu’il (avoir) un problème.', a: "Il est probable que son avion a atterri (probable : indicatif) ; il se peut qu'il ait eu un problème de correspondance (subjonctif passé)." },
  { q: 'Complète la dernière : il croyait que la réunion (commencer) à dix heures et demie.', a: "Il croyait que la réunion commençait à dix heures et demie. Croire affirme : indicatif, ici l'imparfait d'un récit." },
], 'rec-b2-05-texte-a6', ['doute']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le doute', 'Tu doutes d’un fait passé. Quelle forme ?',
    ['le subjonctif passé', 'le passé composé', 'le conditionnel passé'], 0,
    'Je doute qu’il ait compris. EN: past subjunctive.'),
  ctl('Croire', '« Je crois qu’il … le message. »',
    ['a reçu', 'ait reçu'], 0,
    'Croire affirme. EN: indicative.'),
  ctl('Probable', 'Il est probable que prend…',
    ['l’indicatif', 'le subjonctif'], 0,
    'Probable penche vers le oui. EN: indicative.'),
], ['doute']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Le doute',
    opener: {
      line: "La chaise de Marc est vide : ici tu fais des hypothèses sur ce qui s'est passé, sans rien affirmer de trop. EN: Marc's chair is empty: here you make guesses about what happened without asserting too much.",
      imageRef: 'lessons/subjonctif-passe/act06.jpg',
    },
    sections: [],
    milestone: "Tu doutes d'un fait passé avec le subjonctif passé, et tu gardes l'indicatif après croire, il me semble, il est probable et peut-être que. EN: You can doubt a past fact, and keep the indicative where French asserts.",
    estScreens: 34, restPoints: ['a6-construire', 'a6-piege'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_CONSTRUIRE, A6_ECOUTE, A6_PIEGE, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: AVANT L'ÉCHÉANCE
 *
 *  The past form looking FORWARD: completion by a deadline, avant que,
 *  jusqu'à ce que, attendre que. Against the present, which names the
 *  action or its start. No futur antérieur anywhere (lesson 7 in B2).
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La lettre de la régie',
  frSub: 'Un départ, cinq échéances',
  text: LECTURE_REGIE,
  glossary: [
    { word: "l'état des lieux", en: 'the move-out inspection', note: 'La visite où l’on vérifie l’appartement avec la régie.' },
    { word: 'résilié', en: 'cancelled', note: 'Résilier un contrat : y mettre fin.' },
    { word: 'La Régie du Lac', en: 'the Lac letting agency', note: 'En Suisse romande, une régie gère des logements à louer.' },
  ],
  questions: [
    { q: 'Que faut-il avoir fait avant le trente juin à midi ?', a: "Avoir libéré l'appartement : il faut que vous ayez libéré. Le résultat doit être acquis à midi." },
    { q: 'Pourquoi les clés doivent-elles avoir été rendues avant quatorze heures ?', a: "Parce que l'état des lieux a lieu à quatorze heures : il est indispensable qu'elles aient été rendues avant." },
    { q: 'Que se passe-t-il si les petites réparations n’ont pas été faites ?', a: "Elles sont facturées au locataire." },
    { q: 'Pourquoi « afin que le prochain locataire puisse s’installer » est-il au présent ?', a: "Parce que l'installation n'est pas un résultat à atteindre avant une date : c'est le but, encore à venir." },
    { q: 'Quel est le ton de cette lettre ?', a: "Administratif et poli : formules toutes faites, vous de politesse, obligations exprimées par il faut que et il est indispensable que." },
  ],
  audio: REC('rec-b2-05-regie'),
  say: REFRAME,
  terms: ['echeance'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Fait avant la date',
  frSub: 'Le passé qui regarde devant',
  hint: 'Quatre cartes. Le subjonctif passé peut parler de demain.',
  audio: REC('rec-b2-05-echeance'),
  say: REFRAME,
  terms: ['echeance', 'horloge'],
  cards: [
    {
      head: 'L’action ou le résultat', label: 'il faut que',
      fr: `${fr(E(1315))} · ${fr(E(1314))}`, sub: `${rsOf(E(1315))} · ${rsOf(E(1314))}`,
      body: "Les deux sont justes. Que tu finisses parle de l'action ; que tu aies fini exige le résultat, lundi. À l'écrit administratif, le passé est plus précis. EN: present names the action; past demands the result by the deadline.",
    },
    {
      head: 'Avant que', label: 'une fin à attendre',
      fr: fr(E(1320)), sub: rsOf(E(1320)),
      body: "Avant que prend toujours le subjonctif. Au passé, il dit que la relecture doit être terminée d'abord. EN: avant que plus the past: the rereading must be done first.",
    },
    {
      head: 'Le début, pas la fin', label: 'le présent',
      fr: fr(E(1323)), sub: rsOf(E(1323)),
      body: "Ici, compte le moment où la nuit commence : le présent. Le passé irait mal, car la nuit n'a pas de fin à attendre. EN: the start of the event: present subjunctive.",
    },
    {
      head: 'Attendre que, jusqu’à ce que', label: 'jusqu’au bout',
      fr: fr(E(1321)), sub: rsOf(E(1321)),
      body: "Tu attends la fin de l'appel : j'aie terminé. Même logique avec attendre que : j'attends que tu aies fini. EN: waiting for something to be finished.",
    },
  ],
};

const A7_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-table',
  layer: 'core',
  sheetId: 'sheet-moment',
  title: 'Six échéances',
  cols: ['Expression', 'Ce qui compte', 'Forme'],
  rows: [
    { cells: ['il faut que… avant lundi', 'le résultat lundi', 'passé'], say: fr(E(1314)),
      detail: { title: 'il faut que', body: "Avec une date limite, le passé exige que ce soit fini. EN: the result by the deadline.", say: fr(E(1325)) } },
    { cells: ['il est important que… avant', 'être prêt à la réunion', 'passé'], say: fr(E(1327)),
      detail: { title: 'il est important que', body: "Le dossier doit être lu quand la réunion commence. EN: read before the meeting.", say: fr(E(1327)) } },
    { cells: ['avant que', 'une fin à venir', 'passé'], say: fr(E(1319)),
      detail: { title: 'avant que', body: "Avant qu'il ait fini : avant la fin du discours. EN: before the end of it.", say: fr(E(1326)) } },
    { cells: ['avant que', 'le début', 'présent'], say: fr(E(1323)),
      detail: { title: 'avant que, au présent', body: "Avant qu'il fasse nuit : avant que la nuit tombe. EN: before it starts.", say: fr('fr.b1.opinions-et-avis.1102') } },
    { cells: ['jusqu’à ce que', 'la fin', 'passé'], say: fr(E(1321)),
      detail: { title: 'jusqu’à ce que', body: "Tu attends jusqu'au bout : jusqu'à ce que j'aie terminé. EN: until it is done.", say: fr(E(1321)) } },
    { cells: ['attendre que', 'la fin', 'passé'], say: fr(E(1322)),
      detail: { title: 'attendre que', body: "J'attends que tu aies fini : ton repas d'abord, le dessert ensuite. EN: waiting for it to be over.", say: fr(E(1322)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echeance'],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Fixe l’échéance',
  frSub: 'Trois pages, trois gâchettes',
  groups: [
    grp('Le résultat à la date', [
      it(E(1314), 'lundi, tout est fini'),
      it(E(1316), 'le trente juin, midi'),
      it(E(1325), 'le quinze mars'),
      it(E(1330), 'ce soir, la décision'),
    ], chk('« Il faut que vous … l’appartement avant le trente juin. »',
      ['ayez libéré', 'avez libéré', 'aurez libéré'], 0,
      'Il faut que + subjonctif ; le résultat à la date : passé. EN: past subjunctive.')),
    grp('Avant que, jusqu’à ce que', [
      it(E(1319), 'avant la fin du discours'),
      it(E(1320), 'avant la relecture'),
      it(E(1321), 'jusqu’à la fin de l’appel'),
      it(E(1329), 'un récit au passé'),
    ], chk('« Ne signe rien avant qu’on … le contrat. »',
      ['a relu', 'ait relu'], 1,
      'Avant que : subjonctif, toujours. EN: always the subjunctive.')),
    ctl('Le début ou la fin', '« Rentre avant qu’il … nuit. »',
      ['fasse', 'ait fait'], 0,
      'La nuit commence : le présent. EN: the start, present.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echeance'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs d’échéance',
  errors: [
    {
      wrong: 'Il faut que tu as fini avant lundi.',
      right: 'Il faut que tu aies fini avant lundi.',
      why: "Normal : as fini est la forme du passé que tu connais le mieux. Mais il faut que appelle le subjonctif, même pour le passé. EN: il faut que calls for the subjunctive.",
    },
    {
      wrong: "Je veux partir avant qu'il a fini son discours.",
      right: "Je veux partir avant qu'il ait fini son discours.",
      why: "Avant ressemble à un simple repère de temps. Mais avant que prend toujours le subjonctif. EN: avant que always takes the subjunctive.",
    },
    {
      wrong: 'Il faut que les candidats auront envoyé leur dossier avant le quinze mars.',
      right: 'Il faut que les candidats aient envoyé leur dossier avant le quinze mars.',
      why: "L'idée de futur pousse vers auront envoyé. Après il faut que, c'est le subjonctif qui porte ce futur. EN: the subjunctive carries the future here.",
    },
    {
      wrong: "Rentre avant qu'il ait fait nuit.",
      right: "Rentre avant qu'il fasse nuit.",
      why: "L'erreur inverse : le passé partout après avant que. Ici compte le début de la nuit, pas une fin : le présent. EN: the start of the night, so present.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echeance'],
};

const A7_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a7-focus',
  layer: 'core',
  sheetId: 'sheet-moment',
  title: 'Ce qu’il faut retenir sur les échéances',
  points: [
    "Il faut que + passé : le résultat doit être acquis à la date. EN: past demands the result by the deadline.",
    "Avant que, jusqu'à ce que, attendre que : toujours le subjonctif. EN: always the subjunctive.",
    "Passé pour une fin à atteindre, présent pour un début ou une action. EN: past for an end, present for a start.",
    "Jamais d'indicatif ni de futur après il faut que. EN: never the indicative or the future after il faut que.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echeance'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Compléter : la visite de la propriétaire', TEXTE_A7, [
  { q: 'Complète : il faut que nous (ranger), il est important que quelqu’un (réparer).', a: "Il faut que nous ayons rangé le salon avant samedi midi ; il est important que quelqu'un ait réparé la poignée d'ici là. Le résultat à la date. Le présent (rangions, répare) est juste aussi ; le passé insiste sur le résultat." },
  { q: 'Complète : je veux que chacun (vider) son étagère avant que la propriétaire (arriver).', a: "que chacun ait vidé son étagère (fini avant ; vide est juste aussi) ; avant que la propriétaire arrive (le moment de l'arrivée : présent)." },
  { q: 'Complète : attends que j’(finir) mon appel.', a: "attends que j'aie fini mon appel. Tu attends la fin. Que je finisse est juste aussi ; le passé insiste sur le résultat." },
  { q: 'Complète la dernière : ne partez pas avant que nous (faire) le tour.', a: "avant que nous ayons fait le tour de l'appartement ensemble. La visite doit être terminée d'abord. Fassions est juste aussi ; le passé insiste sur la fin." },
], 'rec-b2-05-texte-a7', ['echeance']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('L’échéance', '« Il faut que tu … avant lundi. » Lundi, tout doit être prêt.',
    ['aies fini', 'as fini', 'auras fini'], 0,
    'Le résultat à la date : subjonctif passé. EN: past subjunctive.'),
  ctl('Avant que', 'Après avant que, toujours…',
    ['le subjonctif', 'l’indicatif'], 0,
    'Avant que + subjonctif. EN: subjunctive.'),
  ctl('Le début', '« Rentre avant qu’il … nuit. »',
    ['ait fait', 'fasse'], 1,
    'Le début de la nuit : présent. EN: present.'),
], ['echeance']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Avant l’échéance',
    opener: {
      line: "Les clés avant quatorze heures, le dossier avant lundi : ici le subjonctif passé regarde vers une date à venir. EN: Keys by two o'clock, the file by Monday: here the past subjunctive looks ahead to a date.",
      imageRef: 'lessons/subjonctif-passe/act07.jpg',
    },
    sections: [],
    milestone: "Tu exiges un résultat avant une échéance, avec il faut que, avant que et jusqu'à ce que, et tu gardes le présent pour un simple début. EN: You can demand a result by a deadline, and keep the present for a start.",
    estScreens: 36, restPoints: ['a7-table', 'a7-erreurs'],
  },
  sections: [A7_LECTURE, A7_CARTES, A7_TABLE, A7_CONSTRUIRE, A7_ERREURS, A7_FOCUS, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: LE MEILLEUR FILM QUE J'AIE VU
 *
 *  A superlative is a judgment, and careful writing marks it with the
 *  subjunctive. La première fois que is a plain fact, always indicative.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'Un festival à Québec',
  frSub: 'Deux amis, un palmarès',
  setting: 'Québec, en février, à la sortie du festival de cinéma. Camille écrit sa critique pour le blogue du ciné-club ; Luc relit.',
  bubbles: [
    { from: 'narrator', fr: 'Camille tape sa première phrase sur son téléphone, sous la neige.', en: 'Camille types her first sentence on her phone, in the snow.' },
    { from: 'user', fr: 'C’est le meilleur film que j’aie vu depuis des années.', en: 'It is the best film I have seen in years.' },
    { from: 'coach', fr: 'Aie vu, avec un e : le meilleur est un jugement, et l’écrit soigné le marque.', en: 'Aie vu, with an e: le meilleur is a judgment, and careful writing marks it.', warn: 'Superlatif : subjonctif' },
    { from: 'user', fr: 'C’est la première fois que je viens à ce festival.', en: 'It is the first time I have come to this festival.' },
    { from: 'coach', fr: 'Là, viens, à l’indicatif : la première fois que dit un simple fait.', en: 'Here, viens, in the indicative: la première fois que states a plain fact.', warn: 'La première fois que : indicatif' },
    { from: 'user', fr: 'Et c’est la seule actrice qui m’ait vraiment émue.', en: 'And she is the only actress who has really moved me.' },
    { from: 'coach', fr: 'La seule, puis qui : ait émue, et l’accord avec me, parce que tu es une femme.', en: 'La seule, then qui: ait émue, agreeing with me, because you are a woman.', warn: 'Le seul : subjonctif' },
  ],
  closing: { fr: 'Le meilleur, le seul, le premier : un jugement, donc le subjonctif. La première fois : un fait.', en: 'The best, the only, the first: a judgment, so the subjunctive. The first time: a fact.' },
  audio: REC('rec-b2-05-festival-film'),
  say: REFRAME,
  terms: ['superlatif'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-declencheurs',
  title: 'Le superlatif, en quatre cartes',
  frSub: 'Un jugement, puis que ou qui',
  hint: 'Quatre cartes. La dernière dit où s’arrête la règle.',
  audio: REC('rec-b2-05-superlatif'),
  say: REFRAME,
  terms: ['superlatif', 'accompli'],
  cards: [
    {
      head: 'Le plus, le meilleur', label: 'un superlatif',
      fr: fr(E(1333)), sub: rsOf(E(1333)),
      body: "Le meilleur film de ta vie, c'est ton jugement, pas un fait mesuré : l'écrit soigné met le subjonctif, au passé si l'expérience est faite. EN: a superlative is a judgment.",
    },
    {
      head: 'Le seul, le premier, le dernier', label: 'la même famille',
      fr: fr(E(1344)), sub: rsOf(E(1344)),
      body: "Le seul, l'unique, le premier, le dernier se comportent comme un superlatif : qui m'ait aidé. EN: le seul and le premier behave like superlatives.",
    },
    {
      head: 'Au présent aussi', label: Cap(refFr('b2.26')),
      fr: fr('fr.b2.affaires.1350'), sub: '[seh la meh-yuhr vee-TREEN | kuh noo pwee-SYOHⁿ a-VWAR | ahⁿ uh-ROP]',
      body: "Même règle quand l'action n'est pas finie : que nous puissions. Le passé n'apparaît que pour une expérience déjà faite. EN: the same rule in the present.",
    },
    {
      head: 'Où s’arrête la règle', label: 'l’indicatif',
      fr: `${fr(E(1338))} · ${fr(E(1339))}`, sub: `${rsOf(E(1338))} · ${rsOf(E(1339))}`,
      body: "La première fois que dit un fait : indicatif, toujours. Sans superlatif, une relative reste à l'indicatif. À l'oral, on entend aussi que j'ai vu après un superlatif. EN: la première fois que and plain relatives keep the indicative.",
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Jugement ou simple fait',
  frSub: 'Trois pages, trois gâchettes',
  groups: [
    grp('Un superlatif', [
      it(E(1333), 'le meilleur'),
      it(E(1337), 'la plus belle, et l’accord'),
      it(E(1340), 'le plus froid'),
      it(E(1346), 'le plus beau'),
    ], chk('« C’est la plus belle ville que nous ayons … »',
      ['visité', 'visitée', 'visités'], 1,
      'Que = la ville, placé avant avoir : visitée. EN: agreement with que.')),
    grp('Le seul, le premier, le dernier', [
      it(E(1334), 'le seul roman'),
      it(E(1335), 'la première personne'),
      it(E(1336), 'le dernier concert'),
      it(E(1342), 'le seul endroit, où'),
    ], chk('« C’est le seul roman qu’elle … en français. »',
      ['a écrit', 'ait écrit'], 1,
      'Le seul : subjonctif, et l’œuvre est faite : ait écrit. EN: past subjunctive.')),
    grp('Un simple fait', [
      it(E(1338), 'la première fois que'),
      it(E(1347), 'la dernière fois que'),
      it(E(1339), 'pas de superlatif'),
      it(E(1348), 'une relative, sans jugement'),
    ], chk('« C’est la première fois que je … à Québec. »',
      ['viens', 'sois venu'], 0,
      'La première fois que : toujours l’indicatif. EN: indicative.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['superlatif'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le palmarès de Camille',
  frSub: 'Neuf phrases, un jugement ou un fait',
  lines: [
    ln(E(1333)), ln(E(1334)), ln(E(1335)), ln(E(1336)), ln(E(1338)),
    ln(E(1339)), ln(E(1340)), ln(E(1341)), ln('fr.b2.opinions-et-avis.1786'),
  ],
  questions: [
    { q: 'Deuxième phrase : combien de romans l’autrice a-t-elle écrits en français ?', opts: ['un seul', 'plusieurs'], correct: 0, why: 'Le seul roman. EN: only one.' },
    { q: 'Quatrième phrase : le groupe donne-t-il encore des concerts ensemble ?', opts: ['non, c’était le dernier', 'oui'], correct: 0, why: 'Le dernier concert. EN: the last one.' },
    { q: 'Cinquième phrase : le locuteur connaissait-il déjà Québec ?', opts: ['non', 'oui'], correct: 0, why: 'La première fois. EN: first visit.' },
    { q: 'Septième phrase : depuis combien d’années n’a-t-on pas eu si froid ?', opts: ['vingt ans', 'dix ans'], correct: 0, why: 'Depuis vingt ans. EN: twenty years.' },
    { q: 'Dernière phrase : pourquoi le verbe est-il à l’indicatif ?', opts: ['on constate un fait vérifiable', 'le seul ne prend jamais le subjonctif'], correct: 0, why: 'Un fait vérifiable, sans jugement : l’indicatif reste possible. EN: a checkable fact.' },
  ],
  audio: REC('rec-b2-05-superlatif-ecoute'),
  say: REFRAME,
  terms: ['superlatif'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  title: 'Cinq jugements bien écrits',
  frSub: 'Lis, puis dis le superlatif',
  examples: [
    ex(E(1341), 'la meilleure, que = la décision : prise'),
    ex(E(1342), 'le seul endroit où : je me sois senti'),
    ex(E(1346), 'le plus beau, on : qu’on m’ait fait'),
    ex(E(1243), 'la plus belle, que = la lettre : écrite'),
    ex(E(1335), 'la première personne qui : m’ait parlé'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['superlatif', 'accord'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de jugement',
  errors: [
    {
      wrong: "C'est le meilleur film que j'ai vu depuis des années.",
      right: "C'est le meilleur film que j'aie vu depuis des années.",
      why: "Normal : c'est ce que tu entends à l'oral, et ai et aie sonnent pareil. À l'écrit soigné, le superlatif appelle aie. EN: careful writing uses aie after a superlative.",
    },
    {
      wrong: 'C’est la première fois que je sois venu ici.',
      right: 'C’est la première fois que je suis venu ici.',
      why: "L'erreur inverse : première ressemble à le premier qui. Mais la première fois que dit un fait : indicatif. EN: la première fois que keeps the indicative.",
    },
    {
      wrong: "C'est la plus belle ville que nous ayons visité.",
      right: "C'est la plus belle ville que nous ayons visitée.",
      why: "Le subjonctif est juste, l'accord manque : que reprend la ville, placé avant avoir. EN: agreement with que.",
    },
    {
      wrong: "C'est la seule personne qui m'a aidé.",
      right: "C'est la seule personne qui m'ait aidé.",
      why: "À l'oral, qui m'a aidé passe. À l'écrit, la seule est un jugement : ait aidé. EN: la seule calls for the subjunctive in writing.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['superlatif'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Compléter : le séjour à Québec', TEXTE_A8, [
  { q: 'Complète : c’est la première fois que je (venir), le voyage le plus froid que je (faire).', a: "C'est la première fois que je viens au Canada (un fait : indicatif) ; le voyage le plus froid que j'aie fait (un superlatif : subjonctif passé)." },
  { q: 'Complète : la fête la plus joyeuse que j’(voir).', a: "que j'aie vue. Que reprend la fête, placé avant : accord au féminin." },
  { q: 'Complète : la seule personne qui (réussir), le premier ami que je me (faire).', a: "la seule personne qui ait réussi ; le premier ami québécois que je me sois fait (se faire un ami : être)." },
  { q: 'Complète la dernière : c’est le moment que je (préférer).', a: "c'est le moment que j'ai préféré (ou que je préfère). Pas de superlatif : indicatif." },
], 'rec-b2-05-texte-a8', ['superlatif']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le superlatif', '« C’est le meilleur film que j’… » À l’écrit soigné :',
    ['aie vu', 'ai vu'], 0,
    'Un jugement : subjonctif. EN: subjunctive.'),
  ctl('La première fois', '« C’est la première fois que je … ici. »',
    ['viens', 'sois venu'], 0,
    'Un fait : indicatif. EN: indicative.'),
  ctl('L’accord', '« La plus belle ville que nous ayons … »',
    ['visitée', 'visité'], 0,
    'Que = la ville. EN: agreement with que.'),
], ['superlatif']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le meilleur que j’aie vu',
    opener: {
      line: "Le meilleur film, la seule actrice : ici tu juges ce que tu as vécu, et l'écrit soigné le marque. EN: The best film, the only actress: here you judge what you have experienced, and careful writing shows it.",
      imageRef: 'lessons/subjonctif-passe/act08.jpg',
    },
    sections: [],
    milestone: "Tu mets le subjonctif passé après un superlatif, le seul ou le premier, et tu gardes l'indicatif après la première fois que. EN: You can use the past subjunctive after a superlative and keep the indicative after la première fois que.",
    estScreens: 36, restPoints: ['a8-construire', 'a8-exemples'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_CONSTRUIRE, A8_ECOUTE, A8_EXEMPLES, A8_ERREURS, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: BIEN QUE CE SOIT FINI
 *
 *  Lesson 32 in B1 set bien que against même si. Here the fact conceded is
 *  already over, so bien que takes the past; même si keeps the indicative.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le festival sous la pluie',
  frSub: 'Un article de presse régionale',
  text: LECTURE_FESTIVAL,
  glossary: [
    { word: 'les navettes', en: 'the shuttle buses', note: 'Des bus qui font l’aller-retour entre deux points.' },
    { word: 'trempés', en: 'soaked', note: 'Complètement mouillés.' },
    { word: 'les recettes', en: 'the takings', note: 'L’argent gagné par les ventes de billets.' },
  ],
  questions: [
    { q: 'Qu’est-ce qui a failli empêcher le festival ? Cite deux faits.', a: "La pluie toute la journée, la route fermée pendant deux heures, et deux groupes qui avaient annulé." },
    { q: 'Pourquoi « bien qu’il ait plu » et non « bien qu’il pleuve » ?', a: "Bien que prend le subjonctif. La pluie de samedi est présentée comme un fait accompli, vu comme un tout par rapport au bilan du festival : ait plu." },
    { q: 'Pourquoi la phrase avec même si est-elle à l’indicatif ?', a: "Parce que même si garde toujours l'indicatif : même si les bénévoles ont distribué des ponchos." },
    { q: 'Le bilan est-il positif ou négatif ? Justifie.', a: "Positif malgré tout : le festival ne perd pas d'argent, bien que les recettes aient baissé de dix pour cent." },
    { q: 'Quel est l’état d’esprit de la directrice ?', a: "Émue et fière : elle est fière que le public soit resté fidèle, même sous la pluie." },
  ],
  audio: REC('rec-b2-05-namur'),
  say: REFRAME,
  terms: ['concession', 'accompli'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-declencheurs',
  title: 'Bien que, en quatre cartes',
  frSub: 'Ce que tu concèdes est déjà fait',
  hint: 'Quatre cartes. La troisième est la plus traîtresse.',
  audio: REC('rec-b2-05-concession'),
  say: REFRAME,
  terms: ['concession'],
  cards: [
    {
      head: 'La balance du B1', label: Cap(CONC_REF),
      fr: fr('fr.b1.connecteurs-logiques.1435'), sub: '[byehⁿ kuh la sal swa puh-TEET | too luh mohⁿd eh vuh-NÜ]',
      body: `« ${B132_REFRAME} » Bien que pèse avec le subjonctif. La salle est petite maintenant : le présent. EN: ${B132_REFRAME_EN}`,
    },
    {
      head: 'Un fait terminé', label: 'bien que + passé',
      fr: fr(E(1350)), sub: rsOf(E(1350)),
      body: "La pluie de samedi est un fait accompli, vu comme un tout par rapport au bilan : bien qu'il ait plu. Quoique suit la même règle, dans un style plus soutenu. EN: a finished fact: past subjunctive.",
    },
    {
      head: 'Ait, mais pas passé', label: 'un faux ami de forme',
      fr: fr('fr.b1.connecteurs-logiques.1437'), sub: '[byehⁿ keh-leh puh duh TAHⁿ | el ed say vwa-ZEHⁿ]',
      body: "Ait peu de temps : pas de participe, c'est le subjonctif présent d'avoir. Le subjonctif passé a toujours deux mots. EN: ait with no participle is present.",
    },
    {
      head: 'Même si', label: 'l’indicatif',
      fr: fr(E(1352)), sub: rsOf(E(1352)),
      body: "Même si dit la même concession, avec l'indicatif, jamais le subjonctif. EN: même si keeps the indicative.",
    },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Concède ce qui est fait',
  frSub: 'Trois pages, trois gâchettes',
  groups: [
    grp('Bien que, un fait fini', [
      it(E(1351), 'elle a beaucoup travaillé'),
      it(E(1354), 'il a été malade'),
      it(E(1356), 'le spectacle a commencé tard'),
      it(E(1360), 'nous avons tout vérifié'),
    ], chk('« Bien qu’elle … beaucoup, elle n’a pas eu la promotion. » (travailler)',
      ['ait travaillé', 'a travaillé', 'travaillait'], 0,
      'Bien que + subjonctif, le travail est fait : ait travaillé. EN: past subjunctive.')),
    grp('Avec être et les pronominaux', [
      it(E(1353), 'quoiqu’ils se soient préparés'),
      it(E(1355), 'nous soyons arrivés'),
      it(E(1359), 'elle soit partie'),
      it(E(1361), 'on se soit vus'),
    ], chk('« Bien qu’elle … tôt, elle a raté son avion. » (partir)',
      ['ait parti', 'soit partie'], 1,
      'Partir prend être : soit partie. EN: être, feminine.')),
    ctl('Bien que ou même si', '« … il a plu toute la journée, le festival a été un succès. »',
      ['Même s’', 'Bien qu’'], 0,
      'A plu est à l’indicatif : seul même si l’accepte. EN: indicative after même si.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['concession'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Malgré tout',
  frSub: 'Neuf phrases, une concession chacune',
  lines: [
    ln(E(1350)), ln(E(1351)), ln(E(1352)), ln(E(1353)), ln(E(1354)),
    ln(E(1355)), ln(E(1356)), ln(E(1357)), ln(E(1362)),
  ],
  questions: [
    { q: 'Deuxième phrase : a-t-elle eu la promotion ?', opts: ['non', 'oui'], correct: 0, why: 'Elle n’a pas eu la promotion. EN: no.' },
    { q: 'Quatrième phrase : à quel moment ont-ils perdu ?', opts: ['en demi-finale', 'en finale'], correct: 0, why: 'En demi-finale. EN: in the semi-final.' },
    { q: 'Cinquième phrase : était-il en forme pendant la semaine ?', opts: ['non, il était malade', 'oui'], correct: 0, why: 'Il avait été malade toute la semaine. EN: he had been ill.' },
    { q: 'Huitième phrase : les secours sont-ils arrivés trop tard ?', opts: ['non, à temps', 'oui'], correct: 0, why: 'À temps, malgré la route fermée. EN: in time.' },
    { q: 'Dernière phrase : quel mot introduit la concession, et quel mode suit ?', opts: ['même si, avec l’indicatif', 'bien que, avec le subjonctif'], correct: 0, why: 'Même si j’ai tout vérifié. EN: même si plus the indicative.' },
  ],
  audio: REC('rec-b2-05-concession-ecoute'),
  say: REFRAME,
  terms: ['concession'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Bien que et même si, sans les croiser',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Bien que : subjonctif. Même si : indicatif.',
    body: "Bien que et quoique prennent toujours le subjonctif, au passé si le fait est terminé. Même si ne prend jamais le subjonctif. Les deux disent une concession ; seul le mot change le mode. EN: bien que takes the subjunctive, même si the indicative.",
  },
  cards: [
    { promptLabel: 'indicatif après bien que', promptSound: 'Bien que nous avons tout vérifié, il reste une erreur.', fr: fr(E(1360)), ipa: ipaOf(E(1360)), tip: 'Bien que : ayons. EN: ayons.' },
    { promptLabel: 'subjonctif après même si', promptSound: "Même s'il ait plu toute la journée, le festival a été un succès.", fr: fr(E(1352)), ipa: ipaOf(E(1352)), tip: 'Même si : indicatif. EN: indicative.' },
    { promptLabel: 'présent pour du fini', promptSound: 'Bien que le spectacle commence tard, personne n’est parti.', fr: fr(E(1356)), ipa: ipaOf(E(1356)), tip: 'Le début du spectacle est passé. EN: already over.' },
    { promptLabel: 'mauvais auxiliaire', promptSound: "Bien qu'elle ait partie tôt, elle a raté son avion.", fr: fr(E(1359)), ipa: ipaOf(E(1359)), tip: 'Partir prend être. EN: être.' },
    { promptLabel: 'indicatif après quoique', promptSound: 'Quoique la route a été fermée, les secours sont arrivés à temps.', fr: fr(E(1357)), ipa: ipaOf(E(1357)), tip: 'Quoique : ait été. EN: subjunctive.' },
    { promptLabel: 'accord', promptSound: "Bien qu'on se soit vu souvent, je ne la connais pas vraiment.", fr: fr(E(1361)), ipa: ipaOf(E(1361)), tip: 'On = nous : vus est l’usage soigné. EN: careful usage agrees on = nous in the plural.' },
  ],
  drill: [
    { promptSay: 'Bien que nous … tout vérifié, il reste une erreur.', opts: ['avons', 'ayons'], correct: 1 },
    { promptSay: 'Même s’il … toute la journée, le festival a été un succès.', opts: ['a plu', 'ait plu'], correct: 0 },
    { promptSay: 'Bien qu’il … toute la journée, le festival a attiré du monde.', opts: ['a plu', 'ait plu'], correct: 1 },
    { promptSay: 'Quoique la route … fermée, les secours sont arrivés.', opts: ['ait été', 'a été'], correct: 0 },
    { promptSay: 'Bien qu’elle … tôt, elle a raté son avion.', opts: ['ait parti', 'soit partie'], correct: 1 },
    { promptSay: 'Même si j’… tout vérifié, je relis encore une fois.', opts: ['ai', 'aie'], correct: 0 },
    { promptSay: 'Bien que le spectacle … tard, personne n’est parti.', opts: ['commence', 'ait commencé'], correct: 1 },
    { promptSay: 'Quoiqu’ils se … préparés, ils ont perdu.', opts: ['soient', 'sont'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Bien que ou même si' },
    { label: 'Six cartes', kind: 'cards', title: 'Six concessions de travers' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-05-piege-concession'),
  say: REFRAME,
  terms: ['concession'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Compléter : le mot du capitaine', TEXTE_A9, [
  { q: 'Complète : bien que notre équipe (perdre), quoique nous (s’entraîner).', a: "Bien que notre équipe ait perdu la finale ; quoique nous nous soyons entraînés sous la neige. Deux faits terminés, donc le passé." },
  { q: 'Complète : même si l’arbitre (faire) des erreurs.', a: "Même si l'arbitre a fait des erreurs. Même si garde l'indicatif." },
  { q: 'Complète : bien que le club (vendre) moins de billets.', a: "Bien que le club ait vendu moins de billets cette année." },
  { q: 'Complète la dernière : bien que je (ne jamais marquer) de but.', a: "Bien que je n'aie jamais marqué de but. Ne avant l'auxiliaire, jamais entre les deux mots." },
], 'rec-b2-05-texte-a9', ['concession']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Bien que', 'Après bien que, pour un fait fini…',
    ['le subjonctif passé', 'le passé composé'], 0,
    'Bien que + subjonctif, au passé. EN: past subjunctive.'),
  ctl('Même si', 'Après même si…',
    ['l’indicatif', 'le subjonctif'], 0,
    'Toujours l’indicatif. EN: indicative.'),
  ctl('Le faux ami', '« Bien qu’elle ait peu de temps » : ait est…',
    ['un subjonctif présent', 'un subjonctif passé'], 0,
    'Pas de participe. EN: no participle.'),
], ['concession']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Bien que ce soit fini',
    opener: {
      line: "Il a plu toute la journée, et la fête a eu lieu : ici tu concèdes un fait déjà passé sans le laisser tout gâcher. EN: It rained all day and the party went ahead: here you concede a past fact without letting it spoil everything.",
      imageRef: 'lessons/subjonctif-passe/act09.jpg',
    },
    sections: [],
    milestone: "Tu concèdes un fait terminé avec bien que ou quoique et le subjonctif passé, et tu gardes l'indicatif après même si. EN: You can concede a finished fact with bien que, and keep the indicative after même si.",
    estScreens: 34, restPoints: ['a9-construire', 'a9-piege'],
  },
  sections: [A9_LECTURE, A9_CARTES, A9_CONSTRUIRE, A9_ECOUTE, A9_PIEGE, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: CONTENT D'ÊTRE VENU
 *
 *  Lesson 16 in B1 counted the subjects. With one subject, the past
 *  subjunctive gives way to the past infinitive: de + avoir / être +
 *  participle, with ne pas in front of it.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-infinitif',
  title: 'Un sujet ou deux',
  frSub: 'Compte, puis choisis',
  hint: 'Quatre cartes. La troisième règle la place de ne pas.',
  audio: REC('rec-b2-05-infinitif'),
  say: REFRAME,
  terms: ['memesujet'],
  cards: [
    {
      head: 'Le geste du B1', label: Cap(INF_REF),
      fr: `${fr(E(1365))} · ${fr(E(1200))}`, sub: `${rsOf(E(1365))} · ${rsOf(E(1200))}`,
      body: `« ${B116_REFRAME} » Un sujet : d'être venu. Deux sujets : que tu sois venu. EN: ${B116_REFRAME_EN}`,
    },
    {
      head: 'La forme', label: 'l’infinitif passé',
      fr: `${fr(E(1368))} · ${fr(E(1371))}`, sub: `${rsOf(E(1368))} · ${rsOf(E(1371))}`,
      body: "De, puis avoir ou être à l'infinitif, puis le participe. L'auxiliaire est celui du passé composé, et l'accord aussi. EN: de plus avoir or être plus the participle.",
    },
    {
      head: 'Ne pas, devant', label: 'la négation',
      fr: fr(E(1366)), sub: rsOf(E(1366)),
      body: "À l'infinitif, ne pas se place avant avoir ou être : de ne pas avoir appelé. C'est l'inverse de que tu n'aies pas appelé. EN: ne pas goes before the infinitive.",
    },
    {
      head: 'Un faux ami', label: 'avoir, verbe plein',
      fr: fr('fr.b1.opinions-et-avis.1475'), sub: '[zhuh swee kohⁿ-TAHⁿ | da-vwar ün PLASS | preh duh la fuh-NETR]',
      body: "D'avoir une place : ici avoir est le verbe, au présent, pas un auxiliaire. L'infinitif passé a toujours un participe. EN: with no participle, it is a present infinitive.",
    },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Compte les sujets',
  frSub: 'Trois pages, trois gâchettes',
  groups: [
    grp('Un seul sujet', [
      it(E(1365), 'je suis venu, je suis content'),
      it(E(1368), 'elle a couru, elle est fière'),
      it(E(1372), 'j’ai trouvé, je suis soulagée'),
      it(E(1373), 'il s’est trompé, il est furieux'),
    ], chk('« Il est furieux … de train. » (se tromper, lui-même)',
      ['de s’être trompé', 'qu’il se soit trompé', 'de s’avoir trompé'], 0,
      'Un seul sujet, un pronominal : de s’être trompé. EN: past infinitive with être.')),
    grp('Deux sujets', [
      it(E(1367), 'tu n’as pas appelé, je regrette'),
      it(E(1369), 'son fils a couru, elle est fière'),
      it(E(1200), 'tu es venu, je suis content'),
      it('fr.b1.emotions.1120', 'vous avez attendu, nous sommes désolés'),
    ], chk('« Elle est fière … le marathon. » C’est son fils qui a couru.',
      ['d’avoir terminé', 'que son fils ait terminé'], 1,
      'Deux personnes : que + subjonctif passé. EN: two subjects.')),
    ctl('La négation', 'Où va ne pas ?',
      ['de ne pas avoir appelé', 'de n’avoir appelé pas'], 0,
      'Ne pas avant l’infinitif. EN: before avoir.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['memesujet'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs d’infinitif',
  errors: [
    {
      wrong: 'Je suis content que je sois venu.',
      right: "Je suis content d'être venu.",
      why: "Normal : après tant de subjonctifs, que semble obligatoire. Mais c'est toi qui es venu et toi qui es content : un seul sujet. EN: one subject, past infinitive.",
    },
    {
      wrong: "Elle est fière d'avoir terminée le marathon.",
      right: "Elle est fière d'avoir terminé le marathon.",
      why: "Normal : elle est une femme, et la main ajoute un e. Mais avec avoir, le sujet ne compte jamais, même à l'infinitif. EN: avoir never agrees with the subject.",
    },
    {
      wrong: "Nous sommes contents d'avoir venu.",
      right: "Nous sommes contents d'être venus.",
      why: "Avoir semble l'auxiliaire par défaut. Venir garde être, même à l'infinitif, avec l'accord. EN: venir keeps être.",
    },
    {
      wrong: 'Je suis ravi de te avoir revue.',
      right: "Je suis ravi de t'avoir revue.",
      why: "Te s'élide devant avoir, comme partout. Et revue s'accorde : te est placé avant. EN: te elides before avoir.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['memesujet'],
};

const A10_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a10-exemples',
  layer: 'core',
  title: 'Cinq phrases à compter',
  frSub: 'Lis, puis compte les sujets',
  examples: [
    ex(E(1369), 'deux sujets : elle, son fils'),
    ex(E(1370), 'un sujet : nous, et vous avant avoir'),
    ex(E(1378), 'un sujet : je, et ne pas devant'),
    ex('fr.b1.opinions-et-avis.1584', 'merci de, une formule toute faite'),
    ex('fr.b2.conflits-reconciliation.002', 'les deux à la fois : bien qu’elle ait eu, regrette d’avoir haussé'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['memesujet', 'concession'],
};

const A10_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a10-flash',
  layer: 'core',
  title: 'Huit formules après coup',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'I am glad I came', back: "je suis content d'être venu", say: fr(E(1365)) },
    { front: 'I am sorry I did not call', back: 'je regrette de ne pas avoir appelé', say: fr(E(1366)) },
    { front: 'thank you for coming', back: "merci d'être venus", say: fr(E(1371)) },
    { front: 'sorry to have kept you waiting', back: 'désolés de vous avoir fait attendre', say: fr(E(1370)) },
    { front: 'glad to have seen you again', back: "ravi de t'avoir revue", say: fr(E(1374)) },
    { front: 'I blame myself for not listening', back: "je m'en veux de ne pas t'avoir écouté", say: fr(E(1378)) },
    { front: 'it is normal to have been scared', back: "il est normal d'avoir eu peur", say: fr(E(1379)) },
    { front: 'happy I was able to help', back: "heureuse d'avoir pu t'aider", say: fr(E(1380)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['memesujet'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Compléter : le message de Vincent', TEXTE_A10, [
  { q: 'Complète : je suis heureux que vous (venir), je suis heureux (voir).', a: "que vous soyez venus (deux sujets) ; heureux d'avoir enfin vu tous mes amis réunis (un seul sujet, infinitif passé)." },
  { q: 'Complète : je regrette (ne pas prévenir) mon voisin.', a: "je regrette de ne pas avoir prévenu mon voisin. Ne pas devant avoir." },
  { q: 'Complète : ma fille est fière (tout organiser), je suis fier qu’elle (réussir).', a: "fière d'avoir tout organisé (un sujet) ; fier qu'elle ait réussi (deux sujets)." },
  { q: 'Complète la dernière : je m’en veux (s’endormir).', a: "je m'en veux de m'être endormi. Pronominal : être, et le pronom suit le sujet, me." },
], 'rec-b2-05-texte-a10', ['memesujet']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Un sujet', 'Tu es venu et tu es content. Tu dis…',
    ['je suis content d’être venu', 'je suis content que je sois venu'], 0,
    'Un seul sujet : infinitif passé. EN: past infinitive.'),
  ctl('Deux sujets', 'Ton ami est venu et tu es content. Tu dis…',
    ['je suis content qu’il soit venu', 'je suis content d’être venu'], 0,
    'Deux sujets : que + subjonctif. EN: two subjects.'),
  ctl('La négation', 'Laquelle est juste ?',
    ['de ne pas être allé', 'de ne être pas allé', 'd’être pas allé'], 0,
    'Ne pas en bloc devant être. EN: ne pas before être.'),
], ['memesujet']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Content d’être venu',
    opener: {
      line: "Tu es venu, et c'est toi qui es content : ici tu remplaces que par l'infinitif passé quand il n'y a qu'un sujet. EN: You came and you are the one who is glad: here you replace que with the past infinitive when there is one subject.",
      imageRef: 'lessons/subjonctif-passe/act10.jpg',
    },
    sections: [],
    milestone: "Tu comptes les sujets et tu choisis entre que + subjonctif passé et de + infinitif passé, avec ne pas à sa place. EN: You can count the subjects and choose between the past subjunctive and the past infinitive.",
    estScreens: 32, restPoints: ['a10-construire', 'a10-exemples'],
  },
  sections: [A10_CARTES, A10_CONSTRUIRE, A10_ERREURS, A10_EXEMPLES, A10_FLASH, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: RÉAGIR À UNE NOUVELLE
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message que tu vas imiter',
  frSub: 'Maëlle répond à son cousin',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'deux témoins', en: 'two witnesses', note: 'Au mariage civil, les personnes qui signent avec les mariés.' },
    { word: 'un peu vexée', en: 'a bit put out', note: 'Légèrement blessée dans son amour-propre.' },
    { word: 'aucune allusion', en: 'no hint at all', note: 'Pas un mot, même indirect, sur le sujet.' },
  ],
  questions: [
    { q: 'Quels sentiments Maëlle exprime-t-elle ? Cite-en trois, avec leur verbe.', a: "La joie (heureuse que tu aies trouvé, ravie que Clara ait dit oui), la vexation (vexée que tu ne m'aies rien dit), le regret (je regrette de ne pas avoir été là)." },
    { q: 'Pourquoi « je regrette de ne pas avoir été là » et non « que je n’aie pas été là » ?', a: "Un seul sujet : c'est Maëlle qui regrette et Maëlle qui n'était pas là. L'infinitif passé." },
    { q: 'Quelle phrase contient un superlatif, et quelle forme suit ?', a: "C'est la plus belle photo de mariage que j'aie vue : subjonctif passé, accordé avec que, la photo." },
    { q: 'Qu’est-ce que Maëlle demande pour la suite, et avec quelle échéance ?', a: "Il faut que vous ayez choisi une date avant la fin du mois : le choix doit être fait à la fin du mois." },
    { q: 'Comment le message est-il organisé ?', a: "La nouvelle et la joie, un reproche nuancé, un compliment, un regret, une proposition, puis une note sur la famille et la formule de fin." },
  ],
  audio: REC('rec-b2-05-modele'),
  say: REFRAME,
  terms: ['accompli', 'declencheur'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Le plan du message',
  steps: [
    'Réagis d’abord à la nouvelle : une joie, une fierté, avec un subjonctif passé. EN: react first, with a past subjunctive.',
    'Dis ta surprise ou ton léger reproche, avec la négation au bon endroit : que tu ne m’aies rien dit. EN: surprise or a mild reproach.',
    'Ajoute un jugement : le plus beau, le seul, le premier, suivi du subjonctif. EN: a judgment with a superlative.',
    'Exprime un regret à toi, avec l’infinitif passé : je regrette de ne pas avoir été là. EN: your own regret, past infinitive.',
    'Termine par une proposition et une échéance : il faut que tu aies fixé une date. EN: end with a plan and a deadline.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accompli', 'memesujet'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: 'Quatre phrases que tout message contient',
  cases: [
    { situation: 'Tu te réjouis', fr: fr(E(1383)), en: en(E(1383)) },
    { situation: 'Tu fais un léger reproche', fr: fr(E(1384)), en: en(E(1384)) },
    { situation: 'Tu dis ton propre regret', fr: fr(E(1386)), en: en(E(1386)) },
    { situation: 'Tu fixes une échéance', fr: fr(E(1388)), en: en(E(1388)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accompli', 'echeance'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Sarah a une grande nouvelle',
  frSub: 'Six tours, à voix haute',
  setting: 'Ton amie Sarah t’appelle un soir. Elle a passé un concours d’infirmière il y a deux semaines, et les résultats viennent de tomber.',
  turns: [
    {
      ai: 'Tu as vu mon message ? J’ai réussi le concours !', en: 'Did you see my message? I passed the exam!',
      user: 'Oui, je suis tellement content que tu aies réussi.',
      userEn: 'Yes, I am so glad you passed. (The success is already done: past subjunctive.)',
      alts: [
        { fr: 'Bravo, je suis fier que tu aies tenu bon.', en: 'Well done, I am proud you held on.' },
        { fr: 'Quelle nouvelle, je suis ravi que tout se soit bien passé.', en: 'What news, I am delighted it all went well. (A pronominal: se soit passé.)' },
      ],
    },
    {
      ai: 'Et je pars travailler à Genève en septembre.', en: 'And I am leaving to work in Geneva in September.',
      user: 'Je suis un peu triste que tu partes si loin.',
      userEn: 'I am a little sad you are going so far away. (The leaving is still ahead: present subjunctive.)',
      alts: [
        { fr: 'C’est dommage que tu partes si vite.', en: 'It is a pity you are leaving so soon.' },
        { fr: 'Je regrette que tu ne restes pas à Lyon.', en: 'I am sorry you are not staying in Lyon.' },
      ],
    },
    {
      ai: 'Mes parents ne savent encore rien.', en: 'My parents do not know anything yet.',
      user: 'Ça m’étonne que tu ne les aies pas encore appelés.',
      userEn: 'I am surprised you have not called them yet. (Ne... pas round the auxiliary; les placed before, so appelés.)',
      alts: [
        { fr: 'Je suis surpris que tu ne leur aies rien dit.', en: 'I am surprised you have told them nothing.' },
        { fr: 'Il est possible qu’ils l’aient déjà appris par ta sœur.', en: 'They may already have heard from your sister. (A guess about the past.)' },
      ],
    },
    {
      ai: 'J’ai dû envoyer tous les papiers en une semaine.', en: 'I had to send all the papers in one week.',
      user: 'Je suis soulagé que tu aies pu tout envoyer à temps.',
      userEn: 'I am relieved you managed to send everything in time. (Pouvoir takes avoir: aies pu.)',
      alts: [
        { fr: 'Heureusement que tu as eu le temps.', en: 'Luckily you had the time. (Heureusement que keeps the indicative.)' },
        { fr: 'Il fallait que tout soit parti avant la date limite.', en: 'Everything had to be sent off by the deadline. (A deadline: past subjunctive.)' },
      ],
    },
    {
      ai: 'C’est le plus beau jour de mon année, je crois.', en: 'It is the best day of my year, I think.',
      user: 'C’est la meilleure nouvelle qu’on m’ait annoncée depuis longtemps.',
      userEn: 'It is the best news anyone has given me in a long time. (A superlative: subjunctive, agreeing with que.)',
      alts: [
        { fr: 'C’est la plus belle réussite que tu aies connue.', en: 'It is the finest success you have known.' },
        { fr: 'C’est la première fois que je t’entends aussi heureuse.', en: 'It is the first time I have heard you so happy. (La première fois que keeps the indicative.)' },
      ],
    },
    {
      ai: 'Tu viendras à ma fête de départ ?', en: 'Will you come to my leaving party?',
      user: 'Bien sûr, je m’en voudrais de ne pas avoir été là.',
      userEn: 'Of course, I would never forgive myself for not being there. (One subject: past infinitive, ne pas in front.)',
      alts: [
        { fr: 'Évidemment, mais il faut que tu m’aies envoyé l’adresse avant samedi.', en: 'Of course, but you must have sent me the address by Saturday.' },
        { fr: 'Oui, et je suis content d’avoir été invité.', en: 'Yes, and I am glad to have been invited.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accompli', 'horloge', 'memesujet'],
};

const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Réagis à une nouvelle, après coup',
  frSub: 'Mission écrite, format B2',
  brief: "Ton ami Théo t'écrit un long message : en trois mois, il a quitté son poste de comptable à Lyon, il s'est installé à Marseille et il a ouvert un petit café avec sa sœur. Tu n'étais au courant de rien. Réponds-lui par un message personnel : réagis à ce qui s'est passé (ta joie, ta surprise, un regret, une inquiétude) et propose-lui quelque chose pour la suite.",
  briefEn: 'Your friend Théo writes you a long message: in three months he has left his accounting job in Lyon, moved to Marseille and opened a small café with his sister. You knew nothing about it. Reply with a personal message: react to what has happened (your joy, your surprise, a regret, a worry) and suggest something for what comes next.',
  produce: "Écris un message de 180 à 250 mots. Emploie au moins six subjonctifs passés après un sentiment, un doute ou une nécessité (dont un avec être et un pronominal), un superlatif ou le seul suivi du subjonctif, bien que avec un fait déjà fini, et au moins un infinitif passé quand le sujet est le même.",
  responseSpec: { kind: 'text', minWords: 180, maxWords: 275 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          "3 : Tu réagis aux trois nouvelles de Théo, avec une joie, une surprise, un regret et une inquiétude, et tu proposes une suite. Le ton est celui d'un ami. Entre 180 et 250 mots.",
          '2 : Le message répond, mais une nouvelle est oubliée, ou il manque la proposition, ou la longueur sort un peu des limites.',
          '1 : Quelques félicitations sans réaction précise, ou un texte beaucoup trop court.',
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          "3 : Le message avance clairement : la réaction, la surprise, le jugement, le regret, puis la suite. Les liens (mais, pourtant, bien que, d'ailleurs, en tout cas) relient les idées.",
          '2 : Le message se suit, mais les sentiments sont empilés sans lien, ou un passage saute d’une idée à l’autre.',
          '1 : Une liste de phrases sans ordre ni lien.',
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue des structures',
        maxPoints: 2,
        descriptors: [
          "2 : Tu emploies le subjonctif passé avec avoir ET être, un pronominal, une négation, un superlatif ou le seul, bien que sur un fait fini, un doute, et l'infinitif passé avec un seul sujet.",
          '1 : Le subjonctif passé est là, mais toujours après le même sentiment, avec le même auxiliaire, et sans superlatif ni infinitif passé.',
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          "2 : Les auxiliaires, les accords, la place de ne… pas et le choix entre présent et passé sont presque toujours justes ; l'indicatif reste après savoir, croire et même si.",
          "1 : Des erreurs fréquentes (que tu es venu, que j'ai vu après un superlatif, content que je sois venu, bien que tu as) gênent parfois la lecture.",
        ],
      },
      {
        key: 'registre',
        label: 'Registre et ton',
        maxPoints: 2,
        descriptors: [
          "2 : Un message amical et soigné : chaleureux sans langage de SMS, avec une formule d'ouverture et de fin adaptées à un ami.",
          '1 : Le texte sonne comme une lettre administrative, ou comme une conversation transcrite (genre, du coup, trop bien).',
        ],
      },
    ],
  },
  scaffold: [
    'Cher Théo,',
    'Quelle nouvelle :',
    'Je suis tellement heureux que',
    "J'avoue que je suis surpris que",
    "C'est la plus belle",
    'Bien que',
    'Je regrette de ne pas',
    'Il faut que tu',
  ],
  modelAnswer: "Cher Théo, quelle nouvelle ! J'ai relu ton message dans le métro et j'ai failli rater mon arrêt. Je suis vraiment heureux que tu aies osé quitter ce poste de comptable : tu t'y ennuyais depuis des années, et je suis fier que tu aies enfin choisi une vie qui te ressemble. Je suis aussi très content que ta sœur se soit lancée avec toi ; vous vous êtes toujours bien entendus. J'avoue que je suis un peu surpris que tu ne m'en aies pas parlé plus tôt. Nous nous sommes vus en juin, et tu n'as rien dit ! Mais je comprends que tu aies voulu attendre d'être sûr. Bien que tout se soit passé très vite, ton café a l'air superbe sur les photos. C'est la plus jolie terrasse que j'aie vue depuis longtemps. Une seule chose m'inquiète : je doute que vous ayez eu le temps de souffler depuis l'ouverture. Promets-moi de prendre un jour de repos par semaine. Je regrette de ne pas avoir pu venir à l'inauguration, mais je descends à Marseille en octobre. Il faut que tu m'aies gardé une table au soleil avant que j'arrive ! À très vite, et embrasse ta sœur. Karim\n\nLes repères du correcteur (hors décompte) :\n1. Tâche : les trois nouvelles (le départ, Marseille, le café avec la sœur), la joie, la surprise, un regret, une inquiétude et une proposition.\n2. Cohérence : réaction, reproche nuancé (mais je comprends que), jugement, inquiétude, regret, suite ; liens bien que, mais, aussi.\n3. Étendue : subjonctif passé avec avoir (aies osé) et être (se soit lancée, pronominal), négation (ne m'en aies pas parlé), doute (je doute que vous ayez eu), superlatif (la plus jolie terrasse que j'aie vue), bien que sur un fait fini, échéance (il faut que tu m'aies gardé), infinitif passé (de ne pas avoir pu).\n4. Correction : l'indicatif reste après vous vous êtes toujours bien entendus ; avant que j'arrive au présent, car l'arrivée est à venir.\n5. Registre : un message amical et chaleureux, sans familiarité excessive.",
  modelAnswerEn: "Dear Théo, what news! I reread your message on the metro and nearly missed my stop. I am really happy you dared to leave that accounting job: you had been bored there for years, and I am proud you have finally chosen a life that suits you. I am also very glad your sister took the plunge with you; you have always got on well. I admit I am a little surprised you did not tell me sooner. We saw each other in June and you said nothing! But I understand you wanted to wait until you were sure. Although it all happened very fast, your café looks superb in the photos. It is the prettiest terrace I have seen in a long time. Only one thing worries me: I doubt you have had time to catch your breath since the opening. Promise me you will take a day off a week. I am sorry I could not come to the opening, but I am coming down to Marseille in October. You must have kept me a table in the sun before I arrive! See you very soon, and give your sister a hug. Karim. The marker's notes (not counted): 1. Task: all three pieces of news, joy, surprise, a regret, a worry and a suggestion. 2. Coherence: reaction, mild reproach, judgment, worry, regret, next step, with linking words. 3. Range: past subjunctive with avoir and être, a pronominal, a negation, a doubt, a superlative, bien que on a finished fact, a deadline, a past infinitive. 4. Accuracy: the indicative kept where French asserts; avant que j'arrive in the present because the arrival is still ahead. 5. Register: warm and friendly, never sloppy.",
  watchFor: [
    { pattern: 'A present subjunctive for a reaction to something already done: je suis content que tu quittes ton poste, when he has already left.', criterion: 'correction', feedback: "C'est déjà fait quand tu réagis : que tu aies quitté.", ref: 'a1-reperer' },
    { pattern: 'The indicative or the conditional as auxiliary: que tu as osé, que tu es venu, qu’il aurait fini.', criterion: 'correction', feedback: 'Après un sentiment, l’auxiliaire au subjonctif : aies, sois, ait.', ref: 'a2-erreurs' },
    { pattern: 'Agreement missed or invented: qu’elle se soit lancé, que tu les aies gardé, que tu aies vendue la maison.', criterion: 'correction', feedback: 'Être et les pronominaux accordent avec le sujet ; avoir seulement avec un complément placé avant.', ref: 'a3-piege' },
    { pattern: 'The past subjunctive for something simultaneous or still ahead (je suis triste que tu sois parti en septembre prochain), or the present for something finished.', criterion: 'correction', feedback: 'Règle l’horloge sur le verbe principal : déjà fait, passé ; en même temps ou plus tard, présent.', ref: 'a4-piege' },
    { pattern: 'The indicative after a feeling (je suis fier que tu as choisi), or the subjunctive after savoir (je sais que tu aies).', criterion: 'correction', feedback: 'Un sentiment appelle le subjonctif ; savoir et être sûr gardent l’indicatif.', ref: 'a5-erreurs' },
    { pattern: 'The indicative after a doubt (je doute que vous avez eu), or the subjunctive after croire, il me semble, il est probable.', criterion: 'correction', feedback: 'Douter : subjonctif. Croire, il est probable : indicatif.', ref: 'a6-piege' },
    { pattern: 'A deadline written with the indicative or the future: il faut que tu auras gardé, avant que j’arriverai.', criterion: 'correction', feedback: 'Il faut que et avant que appellent le subjonctif : que tu aies gardé, avant que j’arrive.', ref: 'a7-erreurs' },
    { pattern: 'A superlative followed by the indicative in writing (la plus jolie terrasse que j’ai vue), or the subjunctive after la première fois que.', criterion: 'correction', feedback: 'Après un superlatif, à l’écrit : que j’aie vue. La première fois que garde l’indicatif.', ref: 'a8-erreurs' },
    { pattern: 'Bien que with the indicative (bien que tout s’est passé), or même si with the subjunctive.', criterion: 'correction', feedback: 'Bien que : subjonctif, au passé pour un fait fini. Même si : indicatif.', ref: 'a9-piege' },
    { pattern: 'Que + subjunctive with one subject (je regrette que je ne sois pas venu), or ne pas misplaced in the past infinitive.', criterion: 'correction', feedback: 'Un seul sujet : de ne pas être venu.', ref: 'a10-erreurs' },
    { pattern: 'Only congratulations, with no surprise, regret or suggestion; or a body outside 180 to 250 words.', criterion: 'tache', feedback: 'Ajoute une surprise, un regret et une proposition ; compte tes mots sans la formule de fin.', ref: 'a11-plan' },
    { pattern: 'An administrative tone (je vous prie d’agréer) or text-message shorthand in a message to a friend.', criterion: 'registre', feedback: 'Écris à un ami : chaleureux, soigné, avec tu.', ref: 'a1-usages' },
  ],
  graderNotes: [
    'Count the words of the message body only; the greeting and the signature do not count. 180 to 250 with 10% tolerance (162 to 275) before criterion « tache » loses a point. responseSpec allows 275.',
    'Judge present against past subjunctive by completion at the moment of the main verb, never by the calendar. « Je suis triste que tu partes » about a departure still ahead is right; « je suis content que tu quittes ton poste » about a job already left is an error.',
    'After a superlative, le seul, le premier or le dernier, the indicative costs ONE « correction » point in the whole text, not one per occurrence: it is common in speech. La première fois que + subjunctive is an error.',
    'DO NOT SCORE the futur antérieur (lesson 7 in B2) or subjunctive choices in relative clauses after a negative or indefinite antecedent (lesson 6 in B2) either way. A correct one gains nothing; a wrong one loses nothing.',
    'Accept the expletive ne after avant que (avant que je n’arrive) and its absence. Accept « de n’avoir pas » as a literary variant of « de ne pas avoir ».',
    'Accept comprendre que + subjunctive (acceptance) and + indicative (understanding a fact); both are correct depending on meaning.',
    'Writer gender is unknown: judge agreement for internal consistency only. On with a plural or feminine agreement is correct.',
    'Accept regional vocabulary and settings (Québec, Belgium, Switzerland, West Africa).',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 16 du B1 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accompli', 'declencheur', 'memesujet'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes réactions à voix haute',
  frSub: 'Le sentiment, puis ce qui est fait',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accompli', 'horloge'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-forme',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la forme', v: 'aie, sois + participe', say: fr(E(1226)),
      detail: { title: 'La forme', body: "L'auxiliaire du passé composé, au subjonctif présent, puis le participe. EN: passé composé auxiliary, in the present subjunctive.", say: fr(E(1230)) } },
    { k: 'l’horloge', v: 'déjà fait au verbe principal', say: fr(E(1263)),
      detail: { title: 'L’horloge', body: "En même temps ou plus tard : présent. Déjà fait : passé. Le calendrier ne compte pas. EN: set on the main verb.", say: fr(E(1262)) } },
    { k: 'les sentiments', v: 'content que tu aies', say: fr(E(1285)),
      detail: { title: 'Les sentiments', body: "Joie, regret, surprise, peine, fierté : subjonctif. Savoir et être sûr : indicatif. EN: feelings take the subjunctive.", say: fr(E(1286)) } },
    { k: 'le doute, l’échéance', v: 'je doute qu’il ait ; avant lundi', say: fr(E(1314)),
      detail: { title: 'Le doute et l’échéance', body: "Douter d'un fait passé ; exiger un résultat à une date. Croire et probable gardent l'indicatif. EN: doubt and deadlines.", say: fr(E(1299)) } },
    { k: 'le superlatif, bien que', v: 'le meilleur que j’aie vu', say: fr(E(1333)),
      detail: { title: 'Le superlatif et bien que', body: "Un jugement ou une concession sur un fait fini. La première fois que et même si gardent l'indicatif. EN: superlatives and bien que.", say: fr(E(1350)) } },
    { k: 'un seul sujet', v: 'content d’être venu', say: fr(E(1365)),
      detail: { title: 'Un seul sujet', body: "De + avoir ou être + participe, ne pas devant. EN: past infinitive with one subject.", say: fr(E(1366)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['horloge', 'accompli', 'memesujet'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu construis le subjonctif passé avec les deux auxiliaires, tu accordes son participe, tu règles son horloge sur le verbe principal, et tu t'en sers pour réagir, douter, fixer une échéance, juger et concéder. Tu sais aussi quand il laisse la place à l'indicatif ou à l'infinitif passé. Le piège qui reste, c'est l'oreille : ai et aie, a et ait se prononcent pareil, et la main écrit l'indicatif sans y penser. Avant l'examen, relis ton message et souligne chaque que. Pour chacun, nomme le déclencheur, puis demande-toi si l'action est déjà faite. EN: Underline every que in your message, name the trigger, then ask whether the action is already done.",
  stats: [
    { k: 'La forme', v: 'aie ou sois, puis le participe' },
    { k: 'L’horloge', v: 'déjà fait au moment du verbe principal' },
    { k: 'L’indicatif reste', v: 'savoir, croire, probable, même si, la première fois que' },
    { k: 'Un seul sujet', v: 'de + infinitif passé' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 1 to 10, a round that
 *  recycles lessons 14, 15, 16, 32 and 35 in B1 and lesson 1 in B2 (named in
 *  each question), and an exam-format round (TCF, DELF B2 and TEF items).
 *  `fold()` strips accents, commas, apostrophes and hyphens, so every typed
 *  answer turns on the auxiliary, the mood or an agreement LETTER. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer, ...more], why, ref });
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
      id: 'r1-deja', label: 'Déjà fait ou à venir', targets: ['deja-fait-rate'],
      questions: [
        mc('« Je suis content que tu viennes. » Ton ami est-il déjà venu ?', ['non, il va venir', 'oui, la visite est finie'], 0, 'Que tu viennes : la visite est encore à venir. EN: the visit is still ahead.', 'a1-scene'),
        mc('Le lendemain de la fête, tu remercies Malik. Tu écris :', ['Je suis content que tu sois venu.', 'Je suis content que tu viennes.', 'Je suis content que tu es venu.'], 0, 'La venue est finie quand tu réagis : subjonctif passé. EN: the visit is over.', 'a1-scene'),
        tI('Mets le verbe au subjonctif passé : la fête est finie.', 'Je regrette que Samir (partir) avant le gâteau.', fr(E(1203)), 'Le départ est fait quand tu le regrettes. EN: the leaving is over.', 'a1-lecture'),
        tI('Mets au subjonctif passé.', "C'est dommage qu'il (pleuvoir) toute la soirée.", fr(E(1206)), 'Pleuvoir prend avoir : qu’il ait plu. EN: ait plu.', 'a1-lecture'),
        mc('Dans le message d’Inès, « je suis contente que plusieurs d’entre vous viennent l’aider » parle…', ['d’un déménagement à venir', 'de la fête d’hier'], 0, 'Viennent : l’aide est encore à venir. EN: still to come.', 'a1-lecture'),
        eS('Je suis désolée que la musique a réveillé les voisins.', fr(E(1205)), 'Après je suis désolée, le subjonctif : ait réveillé. EN: ait, not a.', 'a1-usages', ['Je suis désolé que la musique ait réveillé les voisins.']),
        lC('Écoute. La venue est-elle déjà faite ?', fr('fr.b1.emotions.1116'), ['oui', 'non'], 0, 'Sois venu : c’est fait. EN: already done.', 'a1-reperer'),
        lC('Écoute. Samir est-il déjà parti ?', fr(E(1209)), ['non, il part bientôt', 'oui'], 0, 'Parte : le départ est à venir. EN: still to come.', 'a1-reperer'),
      ],
    },
    {
      id: 'r2-forme', label: 'La forme', targets: ['forme-indicatif'],
      questions: [
        mc('Venir, avec tu, au subjonctif passé :', ['que tu sois venu', 'que tu aies venu', 'que tu es venu'], 0, 'Venir garde être, au subjonctif : sois. EN: être, in the subjunctive.', 'a2-table'),
        mc('Finir, avec ils :', ['qu’ils aient fini', 'qu’ils ont fini', 'qu’ils soient fini'], 0, 'Avoir au subjonctif : aient. EN: aient.', 'a2-construire'),
        tI('Mets au subjonctif passé.', 'Je doute qu’ils (arriver) à l’heure.', fr(E(1224)), 'Arriver : être, et l’accord avec ils. EN: être, plural agreement.', 'a2-table', ["Je doute qu'elles soient arrivées à l'heure."]),
        tI('Mets au subjonctif passé.', 'C’est dommage que nous (manquer) le début.', fr(E(1226)), 'Que nous ayons manqué, sans i. EN: ayons.', 'a2-construire'),
        tI('Mets au subjonctif passé.', 'Je regrette qu’elle (être) malade pendant son séjour.', fr(E(1227)), 'Être se conjugue avec avoir : ait été. EN: ait été.', 'a2-erreurs'),
        eS('Je suis ravie que vous êtes venus.', fr(E(1230)), 'Après un sentiment : soyez, pas êtes. EN: soyez.', 'a2-erreurs', ['Je suis ravi que vous soyez venus.', 'Je suis ravie que vous soyez venues.']),
        eS('Il est possible qu’elle aurait raté son train.', fr(E(1223)), 'Aurait est un conditionnel : il faut « ait ». EN: ait, not aurait.', 'a2-erreurs'),
        lC('Écoute. Quel auxiliaire entends-tu ?', fr(E(1229)), ['être', 'avoir'], 0, 'Soyez restés : rester prend être. EN: être.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-accords', label: 'Les accords', targets: ['accord-subj'],
      questions: [
        mc('« Je suis touché que mes cousines soient … de si loin. »', ['venues', 'venus', 'venu'], 0, 'Être : accord avec cousines. EN: feminine plural.', 'a3-cartes'),
        mc('« Tes lunettes ? Je suis content que tu les aies … »', ['retrouvées', 'retrouvé'], 0, 'Les = les lunettes, placé avant. EN: les before avoir.', 'a3-construire'),
        mc('« Je regrette que tu aies … la maison. »', ['vendu', 'vendue'], 0, 'La maison vient après : pas d’accord. EN: object after.', 'a3-piege'),
        tI('Mets au subjonctif passé et accorde.', 'Je suis surpris qu’elle (se lever) si tôt.', fr(E(1246)), 'Pronominal : être, et le e de elle. EN: être, feminine.', 'a3-construire'),
        tI('Mets au subjonctif passé et accorde.', 'Je suis heureuse que ma sœur (revenir) à Liège.', fr(E(1251)), 'Soit revenue. EN: feminine agreement.', 'a3-exemples'),
        eS('Je suis contente qu’elles se soient téléphonées.', fr(E(1248)), 'On téléphone à quelqu’un : pas d’accord. EN: se is indirect.', 'a3-piege'),
        eS('Je suis content que vous vous ayez réconciliés.', fr(E(1245)), 'Un pronominal prend être : soyez. EN: être.', 'a3-cartes'),
        lC('Écoute. Pourquoi le participe s’accorde-t-il ?', fr(E(1242)), ['les reprend les lunettes, placé avant', 'le sujet est tu'], 0, 'Avoir : le complément placé avant. EN: the object before.', 'a3-cartes'),
      ],
    },
    {
      id: 'r4-horloge', label: 'Présent ou passé', targets: ['horloge-calendrier'],
      questions: [
        mc('« Pendant la fête, j’étais content qu’il … là. »', ['soit', 'ait été'], 0, 'En même temps que ma joie : présent, même dans un récit au passé. EN: simultaneous.', 'a4-cartes'),
        mc('« J’étais content qu’il … » Il était arrivé avant moi.', ['soit venu', 'vienne'], 0, 'Avant la joie : passé. EN: before the feeling.', 'a4-cartes'),
        mc('Qu’est-ce qui choisit entre que tu viennes et que tu sois venu ?', ['le moment de l’action par rapport au verbe principal', 'la date sur le calendrier', 'le temps du verbe principal'], 0, 'L’horloge se règle sur le verbe principal. EN: relative to the main verb.', 'a4-hacks'),
        tI('Complète : tu es là en ce moment.', 'Je suis ravi que tu (être) là ce soir.', fr(E(1270)), 'Maintenant : subjonctif présent. EN: present.', 'a4-trier'),
        tI('Complète : l’attente est finie.', 'Je suis désolé que tu (devoir) attendre sous la pluie.', fr(E(1269)), 'Que tu aies dû. EN: past subjunctive.', 'a4-trier'),
        eS('Elle craint que son fils perde ses papiers hier.', 'Elle craint que son fils ait perdu ses papiers hier.', 'Hier : la perte est peut-être déjà faite. EN: already happened.', 'a4-piege'),
        eS('Je suis contente que Léo vienne à la fête hier soir.', 'Je suis contente que Léo soit venu à la fête hier soir.', 'Hier soir : c’est fait. EN: already done.', 'a4-piege', ['Je suis content que Léo soit venu à la fête hier soir.']),
        lC('Écoute. Le départ a-t-il déjà eu lieu ?', fr(E(1260)), ['non, c’est demain', 'oui'], 0, 'Qu’elle parte : à venir. EN: tomorrow.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-sentiments', label: 'Les sentiments', targets: ['indicatif-sentiment'],
      questions: [
        mc('Après « je suis déçu que », tu mets…', ['le subjonctif', 'l’indicatif'], 0, 'Un sentiment appelle le subjonctif. EN: a feeling.', 'a5-cartes'),
        mc('Quelle phrase est juste ?', ['Je sais que tu as réussi.', 'Je sais que tu aies réussi.'], 0, 'Savoir affirme : indicatif. EN: knowledge takes the indicative.', 'a5-erreurs'),
        mc('« Je suis blessée qu’elle ne m’ait rien dit. » Elle a…', ['gardé le secret', 'tout raconté'], 0, 'Ne m’ait rien dit : elle s’est tue. EN: she said nothing.', 'a5-lecture'),
        tI('Mets au subjonctif passé, à la forme négative.', 'Je suis déçu que tu (ne pas appeler).', fr(E(1277)), 'Ne… pas autour de aies. EN: ne... pas round aies.', 'a5-construire'),
        tI('Mets au subjonctif passé.', 'Je suis fière que tu (oser) parler.', fr(E(1279)), 'Oser prend avoir. EN: avoir.', 'a5-table'),
        eS('Je suis content que tu as réussi ton examen.', fr(E(1285)), 'Content : subjonctif, aies. EN: aies.', 'a5-erreurs', ['Je suis contente que tu aies réussi ton examen.']),
        eS('Je suis furieux qu’on a annulé le concert sans prévenir.', fr(E(1284)), 'Furieux que : ait annulé. EN: subjunctive.', 'a5-erreurs', ["Je suis furieuse qu'on ait annulé le concert sans prévenir."]),
        lC('Écoute. Le sentiment porte-t-il sur un fait déjà passé ?', fr(E(1282)), ['oui, l’opération est finie', 'non, elle est à venir'], 0, 'Se soit bien passée : c’est fait. EN: over and done.', 'a5-exemples'),
      ],
    },
    {
      id: 'r6-doute', label: 'Le doute', targets: ['bascule-doute'],
      questions: [
        mc('« Je ne crois pas qu’il … le message. »', ['ait reçu', 'a reçu'], 0, 'Je ne crois pas : doute, subjonctif. EN: negated belief.', 'a6-cartes'),
        mc('« Je crois qu’il … le message. »', ['a reçu', 'ait reçu'], 0, 'Je crois : indicatif. EN: belief, indicative.', 'a6-piege'),
        mc('« Il est probable que le colis … arrivé. »', ['est', 'soit'], 0, 'Il est probable que garde l’indicatif. EN: probable keeps the indicative.', 'a6-piege'),
        tI('Mets au subjonctif passé.', 'Il se peut qu’il (avoir) un empêchement.', fr(E(1297)), 'Qu’il ait eu. EN: ait eu.', 'a6-construire'),
        tI('Mets au subjonctif passé.', 'Je ne pense pas qu’elle (se tromper).', fr(E(1301)), 'Pronominal : se soit trompée. EN: être, feminine.', 'a6-construire'),
        eS('Il me semble que la réunion ait été déplacée.', fr(E(1305)), 'Il me semble que : indicatif. EN: indicative.', 'a6-piege'),
        eS('Je doute qu’il est déjà rentré de Berlin.', fr(E(1298)), 'Douter : subjonctif. EN: subjunctive.', 'a6-cartes'),
        lC('Écoute. Est-on sûr que Marc a oublié ?', fr(E(1296)), ['non, c’est une possibilité', 'oui, c’est certain'], 0, 'Il est possible : un doute. EN: only a possibility.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-echeance', label: 'Avant l’échéance', targets: ['echeance-mode'],
      questions: [
        mc('« Il faut que tu … avant lundi. » Lundi, le travail doit être terminé.', ['aies fini', 'as fini', 'auras fini'], 0, 'Le résultat à l’échéance : subjonctif passé. EN: done by the deadline.', 'a7-cartes'),
        mc('« Rentre avant qu’il … nuit. »', ['fasse', 'ait fait'], 0, 'La nuit commence : subjonctif présent. EN: the start of it.', 'a7-table'),
        mc('« Attends jusqu’à ce que j’… mon appel. »', ['aie terminé', 'ai terminé'], 0, 'Jusqu’à ce que + subjonctif. EN: subjunctive.', 'a7-construire'),
        tI('Mets au subjonctif passé.', 'Il faut que vous (libérer) l’appartement avant le trente juin.', fr(E(1316)), 'Libéré à la date : ayez libéré. EN: vacated by then.', 'a7-lecture'),
        tI('Mets au subjonctif passé.', 'Ne signe rien avant qu’on (relire) le contrat ensemble.', fr(E(1320)), 'Avant que + subjonctif : qu’on ait relu. EN: ait relu.', 'a7-construire'),
        eS('Il faut que les candidats ont envoyé leur dossier avant le quinze mars.', fr(E(1325)), 'Il faut que : subjonctif, aient. EN: aient.', 'a7-erreurs'),
        eS('Je veux partir avant qu’il a fini son discours.', fr(E(1319)), 'Avant que + subjonctif. EN: subjunctive after avant que.', 'a7-erreurs'),
        lC('Écoute. Qu’est-ce qui doit avoir été fait ?', fr(E(1317)), ['rendre les clés', 'faire les réparations'], 0, 'Aient été rendues : les clés. EN: the keys returned.', 'a7-lecture'),
      ],
    },
    {
      id: 'r8-superlatif', label: 'Le meilleur que j’aie vu', targets: ['superlatif-indicatif'],
      questions: [
        mc('À l’écrit soigné : « C’est le meilleur film que j’… depuis des années. »', ['aie vu', 'ai vu'], 0, 'Après un superlatif, l’écrit soigné prend le subjonctif. EN: subjunctive.', 'a8-cartes'),
        mc('« C’est la première fois que je … à Québec. »', ['viens', 'sois venu'], 0, 'La première fois que : toujours l’indicatif. EN: indicative.', 'a8-erreurs'),
        mc('« C’est la plus belle ville que nous ayons … »', ['visitée', 'visité'], 0, 'Que = la ville, placé avant avoir. EN: agreement.', 'a8-construire'),
        tI('Mets au subjonctif passé.', 'C’est le seul roman qu’elle (écrire) en français.', fr(E(1334)), 'Le seul : qu’elle ait écrit. EN: after le seul.', 'a8-construire'),
        tI('Mets au subjonctif passé et accorde.', 'C’est la meilleure décision que tu (prendre).', fr(E(1341)), 'Que = la décision : prise. EN: feminine agreement.', 'a8-exemples'),
        eS('C’est le plus long voyage que nous avons fait.', fr(E(1343)), 'Superlatif, à l’écrit : ayons fait. EN: past subjunctive.', 'a8-erreurs'),
        eS('C’est la dernière fois que je sois venu ici.', 'C’est la dernière fois que je suis venu ici.', 'La dernière fois que : indicatif. EN: indicative.', 'a8-erreurs', ['C’est la dernière fois que je suis venue ici.']),
        lC('Écoute. Est-ce un jugement ou un simple fait ?', fr(E(1339)), ['un simple fait, sans superlatif', 'un jugement'], 0, 'Pas de superlatif : indicatif. EN: no superlative.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-concession', label: 'Bien que', targets: ['concession-mode'],
      questions: [
        mc('« Bien qu’il … toute la journée, le festival a attiré du monde. »', ['ait plu', 'a plu', 'pleuvait'], 0, 'Bien que + subjonctif ; la pluie est finie. EN: past subjunctive.', 'a9-cartes'),
        mc('« Même s’il … toute la journée, le festival a été un succès. »', ['a plu', 'ait plu'], 0, 'Même si + indicatif. EN: indicative after même si.', 'a9-piege'),
        mc('« Bien qu’elle ait peu de temps » : ait est…', ['un subjonctif présent de avoir', 'un subjonctif passé'], 0, 'Pas de participe : présent. EN: no participle.', 'a9-cartes'),
        tI('Mets au subjonctif passé.', 'Bien qu’elle (travailler) beaucoup, elle n’a pas eu la promotion.', fr(E(1351)), 'Ait travaillé, et beaucoup entre les deux mots. EN: past subjunctive.', 'a9-construire', ["Bien qu'elle ait travaillé beaucoup, elle n'a pas eu la promotion."]),
        tI('Mets au subjonctif passé.', 'Quoiqu’ils (se préparer) pendant des mois, ils ont perdu en demi-finale.', fr(E(1353)), 'Pronominal : se soient préparés. EN: être.', 'a9-construire'),
        eS('Bien que nous avons tout vérifié, il reste une erreur.', fr(E(1360)), 'Bien que : ayons. EN: ayons.', 'a9-piege'),
        eS('Même s’il ait plu toute la journée, le festival a été un succès.', fr(E(1352)), 'Même si : indicatif. EN: a plu.', 'a9-piege'),
        lC('Écoute. Le spectacle a-t-il commencé à l’heure ?', fr(E(1356)), ['non, tard', 'oui'], 0, 'Ait commencé tard. EN: late.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-meme-sujet', label: 'Un seul sujet', targets: ['meme-sujet'],
      questions: [
        mc('Tu es venu, et tu es content. Tu dis :', ['Je suis content d’être venu.', 'Je suis content que je sois venu.'], 0, 'Un seul sujet : l’infinitif passé. EN: one subject.', 'a10-cartes'),
        mc('Ton ami est venu, et tu es content. Tu dis :', ['Je suis content que tu sois venu.', 'Je suis content d’être venu.'], 0, 'Deux sujets : que + subjonctif. EN: two subjects.', 'a10-cartes'),
        mc('Où va ne pas ?', ['de ne pas avoir appelé', 'de n’avoir appelé pas', 'd’avoir pas appelé'], 0, 'Ne pas avant l’infinitif. EN: ne pas before avoir.', 'a10-erreurs'),
        tI('Un seul sujet : mets à l’infinitif passé.', 'Elle est fière (terminer) le marathon.', fr(E(1368)), 'D’avoir terminé. EN: past infinitive.', 'a10-construire'),
        tI('Un seul sujet : mets à l’infinitif passé.', 'Il est furieux (se tromper) de train.', fr(E(1373)), 'De s’être trompé. EN: pronominal, être.', 'a10-construire'),
        eS('Je suis content que je sois venu.', fr(E(1365)), 'Un seul sujet : d’être venu. EN: past infinitive.', 'a10-erreurs'),
        eS('Nous sommes contents d’avoir venu.', 'Nous sommes contents d’être venus.', 'Venir prend être, même à l’infinitif. EN: être venus.', 'a10-erreurs', ['Nous sommes contentes d’être venues.']),
        lC('Écoute. Combien de sujets ?', fr(E(1369)), ['deux : elle et son fils', 'un seul'], 0, 'Son fils a couru, elle est fière. EN: two subjects.', 'a10-exemples'),
      ],
    },
    {
      id: 'r11-recyclage', label: 'Le B1 et le B2 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(SUBJ_FORM_REF)} : le subjonctif présent d’avoir, avec nous.`, ['que nous ayons', 'que nous avons', 'que nous ayions'], 0, `« ${B114_REFRAME} » EN: ${B114_REFRAME_EN}`, 'a2-rappel'),
        mc(`${Cap(DECL_REF)} : « Je ne pense pas que cette route … plus courte. »`, ['soit', 'est'], 0, `« ${B115_REFRAME} » EN: ${B115_REFRAME_EN}`, 'a6-cartes'),
        mc(`${Cap(INF_REF)} : c’est toi qui pars. « Je veux … »`, ['partir', 'que je parte'], 0, `« ${B116_REFRAME} » EN: ${B116_REFRAME_EN}`, 'a10-cartes'),
        mc(`${Cap(CONC_REF)} : « … la salle soit petite, tout le monde est venu. »`, ['Bien que', 'Même si'], 0, `« ${B132_REFRAME} » EN: ${B132_REFRAME_EN}`, 'a9-cartes'),
        tI(`${Cap(EMO_REF)} : exprime le sentiment sur une venue déjà faite.`, 'Ça me fait plaisir que tu (venir).', fr('fr.b1.emotions.1116'), `« ${B135_REFRAME} » EN: ${B135_REFRAME_EN}`, 'a5-cartes', ['Ça me fait plaisir que tu sois venue.']),
        tI(`${Cap(PQP_REF)} : mets au plus-que-parfait.`, 'Quand je suis arrivé, le film (commencer).', 'Quand je suis arrivé, le film avait commencé.', `« ${B201_REFRAME} » EN: ${B201_REFRAME_EN}`, 'a4-cartes', ['Quand je suis arrivée, le film avait commencé.']),
        eS('Je suis content que tu viennes hier.', 'Je suis content que tu sois venu hier.', `${Cap(SUBJ_FORM_REF)} t’a donné viennes ; ici, hier demande le passé. EN: yesterday calls for the past.`, 'a4-piege', ['Je suis content que tu sois venue hier.', 'Je suis contente que tu sois venu hier.', 'Je suis contente que tu sois venue hier.']),
        lC(`Écoute. ${Cap(DECL_REF)} : quel mode entends-tu après le sentiment ?`, fr('fr.b1.opinions-et-avis.1386'), ['le subjonctif', 'l’indicatif'], 0, `« ${B115_REFRAME} » EN: ${B115_REFRAME_EN}`, 'a5-cartes'),
      ],
    },
    {
      id: 'r12-examen', label: 'Comme à l’examen', targets: ['reaction-examen'],
      questions: [
        mc('Format TCF. Choisis la bonne réponse : « Nous regrettons que la conférence … annulée hier. »', ['ait été', 'a été', 'soit', 'avait été'], 0, 'Regretter que + subjonctif ; hier : passé. EN: past subjunctive.', 'a5-cartes'),
        mc('Format TCF : « Bien qu’il … toute la nuit, il s’est présenté à l’examen en pleine forme. »', ['ait révisé', 'a révisé', 'révisait', 'aurait révisé'], 0, 'Bien que + subjonctif, la nuit est finie. EN: past subjunctive after bien que.', 'a9-cartes'),
        mc('Format DELF B2, compréhension écrite. « La direction se félicite que le projet ait été mené à bien malgré les retards. » Que dit la phrase ?', ['le projet est terminé', 'le projet va commencer', 'le projet a été abandonné'], 0, 'Ait été mené à bien : c’est fait. EN: completed.', 'a5-exemples'),
        mc('Format DELF B2. « Il est indispensable que les formulaires aient été signés avant le premier mai. » Le premier mai, les formulaires doivent…', ['être déjà signés', 'être signés ce jour-là', 'être envoyés ce jour-là'], 0, 'L’échéance : déjà signés. EN: already signed by then.', 'a7-cartes'),
        tI('Format TCF, phrase à compléter.', 'C’est la meilleure conférence à laquelle j’(assister).', "C'est la meilleure conférence à laquelle j'aie assisté.", 'Superlatif : j’aie assisté. EN: past subjunctive.', 'a8-cartes'),
        tI('Format DELF B2, production. Un seul sujet : mets à l’infinitif passé.', 'Nous sommes ravis (participer) à ce projet.', "Nous sommes ravis d'avoir participé à ce projet.", 'D’avoir participé. EN: past infinitive.', 'a10-construire'),
        eS('Je suis surpris que le directeur a accepté si vite.', "Je suis surpris que le directeur ait accepté si vite.", 'Surpris que : ait accepté. EN: subjunctive.', 'a5-erreurs', ["Je suis surprise que le directeur ait accepté si vite."]),
        lC('Format TEF, compréhension orale. Écoute ce message. Qu’est-ce qui est déjà fait ?', MESSAGE_VOCAL, ['la réservation de la salle', 'l’envoi des invitations', 'le choix du menu'], 0, 'La mairie a accepté : la réservation est faite. EN: the room is booked.', 'a11-lecture'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b2.01 does. */
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
    { front: 'la forme', back: 'aie ou sois, puis le participe', say: fr(E(1226)) },
    { front: 'venir, partir, arriver', back: 'que je sois venu, que je sois parti', say: fr(E(1230)) },
    { front: 'l’accord avec avoir', back: 'avec les ou que placés avant', say: fr(E(1242)) },
    { front: 'déjà fait au verbe principal', back: 'le subjonctif passé', say: fr(E(1263)) },
    { front: 'en même temps ou plus tard', back: 'le subjonctif présent', say: fr(E(1262)) },
    { front: 'après savoir, croire, probable', back: 'l’indicatif', say: fr(E(1300)) },
    { front: 'avant une échéance', back: 'il faut que tu aies fini', say: fr(E(1314)) },
    { front: 'après un superlatif, à l’écrit', back: 'que j’aie vu', say: fr(E(1333)) },
    { front: 'un seul sujet', back: 'de + infinitif passé', say: fr(E(1365)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Même déclencheur, autre horloge',
  body: `${REFRAME} Tu as repris ce que ${SUBJ_B1_RANGE_REF} t'avaient donné, la forme, les déclencheurs et le compte des sujets, la concession de ${CONC_REF} et les sentiments de ${EMO_REF}, et tu y as ajouté l'horloge : ce qui est déjà fait passe au subjonctif passé. La suite, c'est ${MODES_REF} : choisir entre subjonctif et indicatif quand le sens, pas l'expression, décide. EN: Next comes lesson 6 in B2: choosing between subjunctive and indicative when the meaning, not the expression, decides.`,
  points: [
    'Aie ou sois, puis le participe, avec les accords du passé composé.',
    'L’horloge se règle sur le verbe principal, jamais sur le calendrier.',
    'Savoir, croire, probable, même si, la première fois que : indicatif.',
    'Un seul sujet : de + infinitif passé.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['horloge', 'accompli', 'memesujet'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Réagir à une nouvelle',
    opener: {
      line: "Un ami t'annonce trois nouvelles d'un coup : ici tu écris ta réaction et tu passes l'examen. EN: A friend tells you three pieces of news at once: here you write your reaction and sit the exam.",
      imageRef: 'lessons/subjonctif-passe/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ton message de réaction et passé l'examen : quatre-vingt-seize questions, douze manches. EN: You wrote your reaction and sat the exam: ninety-six questions, twelve rounds.",
    estScreens: 150,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r4-horloge', 'a11-quiz/r8-superlatif', 'a11-review'],
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
  { id: 'd-deja', title: 'Déjà fait ou à venir', format: 'sort' as const, coach: "Deux piles : l'action est déjà faite quand on parle, ou elle se passe en même temps ou plus tard. EN: sort by already done or not yet.", buckets: ['déjà fait', 'en même temps ou plus tard'], items: [E(1200), E(1203), E(1206), E(1201), E(1209), E(1208)], audio: AUDIO },
  { id: 'd-forme', title: 'Aie ou ai, sois ou es', format: 'mcq' as const, coach: "Garde l'auxiliaire du passé composé et mets-le au subjonctif. EN: the passé composé auxiliary, in the subjunctive.", q: 'Venir, avec vous :', opts: ['que vous soyez venus', 'que vous êtes venus'], correct: 0, why: 'Soyez : être au subjonctif. EN: soyez.', items: [E(1212), E(1218), E(1222), E(1224), E(1227), E(1230)], audio: AUDIO },
  { id: 'd-accord', title: 'Le e et le s', format: 'mcq' as const, coach: "Être et les pronominaux : regarde le sujet. Avoir : regarde s'il y a un complément avant. EN: subject for être, earlier object for avoir.", q: 'Ces photos, je suis ravie que tu les aies …', opts: ['gardées', 'gardé'], correct: 0, why: 'Les = les photos, placé avant. EN: les before.', items: [E(1240), E(1241), E(1242), E(1246), E(1248), E(1252)], audio: AUDIO },
  { id: 'd-horloge', title: 'Règle l’horloge', format: 'sort' as const, coach: "Deux piles, au moment du verbe principal : en même temps ou plus tard, ou déjà fait. EN: sort by the main verb's moment.", buckets: ['en même temps ou plus tard', 'déjà fait'], items: [E(1258), E(1262), E(1264), E(1259), E(1263), E(1265)], audio: AUDIO },
  { id: 'd-sentiment', title: 'Sentir ou savoir', format: 'mcq' as const, coach: "Un sentiment devant que : subjonctif. Un savoir : indicatif. EN: feeling or knowledge.", q: 'Je suis content que tu … ton examen.', opts: ['aies réussi', 'as réussi'], correct: 0, why: 'Un sentiment : aies réussi. EN: subjunctive.', items: [E(1276), E(1277), E(1279), E(1285), E(1289), E(1290)], audio: AUDIO },
  { id: 'd-doute', title: 'Douter ou affirmer', format: 'sort' as const, coach: "Deux piles : un doute sur le passé, ou une affirmation. EN: doubt or assertion.", buckets: ['un doute : subjonctif', 'une affirmation : indicatif'], items: [E(1299), E(1301), E(1296), E(1300), E(1303), E(1305)], audio: AUDIO },
  { id: 'd-echeance', title: 'Fait avant la date', format: 'mcq' as const, coach: "Avec il faut que et avant que, le subjonctif ; au passé pour un résultat à atteindre. EN: the subjunctive, past for a result.", q: 'Il faut que tu … avant lundi.', opts: ['aies fini', 'as fini'], correct: 0, why: 'Il faut que + subjonctif passé. EN: aies fini.', items: [E(1314), E(1316), E(1319), E(1320), E(1325), E(1326)], audio: AUDIO },
  { id: 'd-superlatif', title: 'Le meilleur, le seul', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute et nomme le superlatif qui appelle le subjonctif. EN: name the superlative in each.", items: [E(1333), E(1334), E(1335), E(1337), E(1343), E(1344)], audio: AUDIO },
  { id: 'd-concession', title: 'Bien que ou même si', format: 'mcq' as const, coach: "Bien que : subjonctif, au passé pour un fait fini. Même si : indicatif. EN: bien que or même si.", q: 'Bien qu’il … toute la journée, la fête a eu lieu.', opts: ['ait plu', 'a plu'], correct: 0, why: 'Bien que : ait plu. EN: subjunctive.', items: [E(1350), E(1351), E(1353), E(1356), E(1359), E(1360)], audio: AUDIO },
  { id: 'd-infinitif', title: 'Un sujet ou deux', format: 'sort' as const, coach: "Compte les sujets : un seul, de + infinitif passé ; deux, que + subjonctif passé. EN: count the subjects.", buckets: ['un seul sujet', 'deux sujets'], items: [E(1365), E(1366), E(1368), E(1367), E(1369), E(1200)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1 en renfort', format: 'flashcard' as const, coach: "Six phrases du B1 : dis pour chacune le déclencheur et le moment. EN: name the trigger and the moment.", items: ['fr.b1.opinions-et-avis.1003', 'fr.b1.opinions-et-avis.1202', 'fr.b1.opinions-et-avis.1445', 'fr.b1.connecteurs-logiques.1435', 'fr.b1.emotions.1116', 'fr.b1.opinions-et-avis.1475'], audio: AUDIO },
  { id: 'd-examen', title: 'Le message, phrase par phrase', format: 'flashcard' as const, coach: "Lis le message modèle : la joie, le reproche, le jugement, le regret, l'échéance. EN: read the model aloud.", items: [E(1383), E(1384), E(1385), E(1386), E(1387), E(1388)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'deja-fait-rate', description: 'Reacts to something already done with the present subjunctive, so the event reads as still to come.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-deja', retest: 'd-deja' },
  { id: 'forme-indicatif', description: 'Builds the auxiliary in the indicative or the conditional (que tu es venu, qu’elle aurait fini) or misspells ayons as ayions.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-forme', retest: 'd-forme' },
  { id: 'accord-subj', description: 'Leaves the participle bare after être or an object placed before avoir, agrees it with avoir’s subject, or agrees it where se is indirect.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-accord', retest: 'd-accord' },
  { id: 'horloge-calendrier', description: 'Chooses present or past subjunctive by the calendar rather than by completion at the main verb.', detectOn: ['a4-trier', 'a4-piege', 'a4-check', 'a11-mission'], drill: 'd-horloge', retest: 'd-horloge' },
  { id: 'indicatif-sentiment', description: 'Writes the indicative after a feeling because the fact is true, or the subjunctive after savoir and être sûr.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a11-mission'], drill: 'd-sentiment', retest: 'd-sentiment' },
  { id: 'bascule-doute', description: 'Keeps the indicative after a doubt about a past fact, or puts the subjunctive after croire, il me semble or il est probable.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a11-mission'], drill: 'd-doute', retest: 'd-doute' },
  { id: 'echeance-mode', description: 'Writes a deadline with the indicative or the future after il faut que or avant que, or uses the past for the start of an event.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a11-mission'], drill: 'd-echeance', retest: 'd-echeance' },
  { id: 'superlatif-indicatif', description: 'Keeps the indicative after a superlative or le seul in careful writing, or puts the subjunctive after la première fois que.', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a11-mission'], drill: 'd-superlatif', retest: 'd-superlatif' },
  { id: 'concession-mode', description: 'Writes bien que or quoique with the indicative, or même si with the subjunctive.', detectOn: ['a9-construire', 'a9-piege', 'a9-check', 'a11-mission'], drill: 'd-concession', retest: 'd-concession' },
  { id: 'meme-sujet', description: 'Uses que + subjunctive when the subjects are the same, or misplaces ne pas in the past infinitive.', detectOn: ['a10-construire', 'a10-erreurs', 'a10-check', 'a11-mission'], drill: 'd-infinitif', retest: 'd-infinitif' },
  { id: 'recyclage', description: 'Loses a B1 point the past subjunctive sits on: the forms of avoir and être, the triggers, the count of subjects or bien que against même si.', detectOn: ['a2-rappel', 'a6-cartes', 'a9-cartes', 'a10-cartes'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'reaction-examen', description: 'In an exam-format reaction, reacts to finished events with the indicative or the present, so the reader cannot tell what is done.', detectOn: ['a11-plan', 'a11-scenario', 'a11-mission'], drill: 'd-examen', retest: 'd-examen' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` in this lesson names a position. */
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
  sheet('sheet-forme', 'La forme', ['la recette', 'les six personnes', 'les accords', 'les erreurs de forme'], [
    teach('sheet-forme-teach', 'Deux mots, un seul qui change',
      `${REFRAME} Le subjonctif passé se forme comme le passé composé, avec l'auxiliaire au subjonctif présent : j'ai fini devient que j'aie fini, je suis parti devient que je sois parti. Que j'aie et que je sois viennent de ${SUBJ_FORM_REF} : « ${B114_REFRAME} » EN: ${REFRAME_EN} Build it like the passé composé, with the auxiliary in the present subjunctive.`),
    table('sheet-forme-table', 'Les six personnes', ['Personne', 'Avec avoir', 'Avec être', 'Pronominal'], [
      ['je', "que j'aie fini", 'que je sois parti(e)', 'que je me sois levé(e)'],
      ['tu', 'que tu aies fini', 'que tu sois parti(e)', 'que tu te sois levé(e)'],
      ['il, elle, on', "qu'il ait fini", "qu'elle soit partie", "qu'elle se soit levée"],
      ['nous', 'que nous ayons fini', 'que nous soyons parti(e)s', 'que nous nous soyons levé(e)s'],
      ['vous', 'que vous ayez fini', 'que vous soyez parti(e)(s)', 'que vous vous soyez levé(e)(s)'],
      ['ils, elles', "qu'ils aient fini", "qu'elles soient parties", "qu'ils se soient levés"],
    ]),
    table('sheet-forme-accords', 'Qui commande l’accord', ['Cas', 'Accord avec', 'Exemple'], [
      ['être', 'le sujet', "Je suis heureuse qu'elle soit arrivée sans encombre."],
      ['avoir, rien avant', 'rien', 'Je regrette que tu aies vendu la maison.'],
      ['avoir, les ou que avant', 'le nom repris', 'Tes lunettes ? Je suis content que tu les aies retrouvées.'],
      ['pronominal, se direct', 'le sujet', "Je suis surpris qu'elle se soit levée si tôt."],
      ["pronominal, se = à quelqu'un", 'rien', "Je suis contente qu'elles se soient téléphoné."],
      ['pronominal, complément après', 'rien', "Il se peut qu'il se soit cassé le poignet en tombant."],
    ]),
    table('sheet-forme-erreurs', 'Les erreurs de forme', ['À éviter', 'Correct', 'Pourquoi'], [
      ['que tu es venu', 'que tu sois venu', 'l’auxiliaire passe au subjonctif'],
      ["que j'ai fini", "que j'aie fini", 'aie, avec un e'],
      ["qu'il aurait fini", "qu'il ait fini", 'aurait est un conditionnel'],
      ['que nous ayions', 'que nous ayons', 'pas de i après y'],
      ["qu'elle soit été", "qu'elle ait été", 'être prend avoir'],
      ["que je m'aie trompé", 'que je me sois trompé', 'un pronominal prend être'],
    ]),
  ]),
  sheet('sheet-moment', 'L’horloge et les échéances', ['présent ou passé', 'au passé', 'il faut que', 'avant que, jusqu’à ce que'], [
    teach('sheet-moment-teach', 'L’horloge suit le verbe principal',
      "Le déclencheur a choisi le subjonctif. Pour choisir sa forme, place-toi au moment du verbe principal : si l'action se passe en même temps ou plus tard, le présent ; si elle est déjà faite, le passé. Le calendrier ne compte pas : hier, j'avais peur qu'il pleuve ; il faut que tu aies fini avant lundi. EN: set the clock on the main verb, never on the calendar."),
    table('sheet-moment-table', 'Présent ou passé', ['Situation', 'Forme', 'Exemple'], [
      ['en même temps', 'présent', 'Je suis ravi que tu sois là ce soir.'],
      ['plus tard', 'présent', "Je regrette qu'elle parte demain."],
      ['déjà fait', 'passé', "Je regrette qu'elle soit partie hier."],
      ['au passé, en même temps', 'présent', "J'étais content qu'il soit là."],
      ['au passé, déjà fait avant', 'passé', "J'étais content qu'il soit venu."],
      ['au passé, encore à venir', 'présent', "Hier soir, j'avais peur qu'il pleuve."],
    ]),
    table('sheet-moment-echeances', 'Les échéances', ['Expression', 'Ce qui compte', 'Exemple'], [
      ['il faut que + passé', 'le résultat à la date', 'Il faut que tu aies fini avant lundi.'],
      ['il faut que + présent', "l'action à faire", 'Il faut que tu finisses avant lundi.'],
      ['avant que + passé', 'une fin à attendre', "Ne signe rien avant qu'on ait relu le contrat ensemble."],
      ['avant que + présent', 'un début', "Rentre avant qu'il fasse nuit."],
      ["jusqu'à ce que + passé", 'la fin', "Attends jusqu'à ce que j'aie terminé mon appel."],
      ['attendre que + passé', 'la fin', "J'attends que tu aies fini pour servir le dessert."],
    ]),
  ]),
  sheet('sheet-declencheurs', 'Les déclencheurs', ['les sentiments', 'le doute', 'le superlatif', 'bien que', 'ce qui reste à l’indicatif'], [
    teach('sheet-declencheurs-teach', 'Le même inventaire qu’au B1',
      `Les déclencheurs ne changent pas au passé. ${Cap(DECL_REF)} l'a posé : « ${B115_REFRAME} » Le subjonctif passé s'emploie après les mêmes expressions, quand l'action est déjà faite. S'y ajoutent, à l'écrit soigné, le superlatif, le seul, le premier et le dernier. EN: ${B115_REFRAME_EN}`),
    table('sheet-declencheurs-table', 'Les déclencheurs du subjonctif passé', ['Famille', 'Expressions', 'Exemple'], [
      ['le sentiment', 'content, ravi, déçu, désolé, fier, ça m’étonne, c’est dommage', "C'est dommage qu'il ait plu toute la soirée."],
      ['le doute', 'douter, il est possible, il se peut, ne pas croire, il semble', "Je ne crois pas qu'il ait reçu le message."],
      ['la nécessité', 'il faut, il est important, il est indispensable', 'Il faut que tu aies fini avant lundi.'],
      ['le temps', "avant que, jusqu'à ce que, attendre que", "Je veux partir avant qu'il ait fini son discours."],
      ['la concession', 'bien que, quoique', "Bien qu'il ait plu toute la journée, le festival a attiré dix mille personnes."],
      ['le jugement', 'le meilleur, le plus, le seul, le premier, le dernier', "C'est le meilleur film que j'aie vu depuis des années."],
    ]),
    table('sheet-declencheurs-indicatif', 'Ce qui reste à l’indicatif', ['Expression', 'Pourquoi', 'Exemple'], [
      ['savoir, être sûr', 'on affirme', 'Je sais que tu as réussi ton examen.'],
      ['croire, penser', 'on affirme', "Je crois qu'il a reçu le message."],
      ['il me semble que', 'on affirme', 'Il me semble que la réunion a été déplacée.'],
      ['il est probable, peut-être que', 'on penche vers le oui', 'Il est probable que le colis est arrivé ce matin.'],
      ['même si', 'toujours l’indicatif', "Même s'il a plu toute la journée, le festival a été un succès."],
      ['la première fois que', 'un fait', "C'est la première fois que je viens à Québec."],
    ]),
  ]),
  sheet('sheet-infinitif', 'Un seul sujet', ['un sujet ou deux', "l'infinitif passé", 'la négation'], [
    teach('sheet-infinitif-teach', 'Compte les sujets',
      `${Cap(INF_REF)} l'a posé : « ${B116_REFRAME} » Au passé, c'est la même chose : un seul sujet, de + avoir ou être à l'infinitif + le participe ; deux sujets, que + subjonctif passé. À l'infinitif, ne pas se place devant avoir ou être. EN: ${B116_REFRAME_EN}`),
    table('sheet-infinitif-table', 'Un sujet ou deux', ['Un seul sujet', 'Deux sujets'], [
      ["Je suis content d'être venu.", 'Je suis vraiment content que tu sois venu.'],
      ["Elle est fière d'avoir terminé le marathon.", 'Elle est fière que son fils ait terminé le marathon.'],
      ['Je regrette de ne pas avoir appelé plus tôt.', "Je regrette que tu n'aies pas appelé plus tôt."],
      ["Il est furieux de s'être trompé de train.", "Ça m'étonne qu'ils se soient trompés d'adresse."],
    ]),
    table('sheet-infinitif-negation', 'La négation', ['Forme', 'Place de ne… pas', 'Exemple'], [
      ['subjonctif passé', "autour de l'auxiliaire", "que tu n'aies pas appelé"],
      ['infinitif passé', "devant l'auxiliaire", 'de ne pas avoir appelé'],
      ['avec rien', "autour de l'auxiliaire", "qu'elle ne m'ait rien dit"],
      ['avec jamais', "autour de l'auxiliaire", "bien que je n'aie jamais marqué"],
    ]),
  ]),
  sheet('sheet-ecrire', 'Écrire un message de réaction', ['le plan', 'les formules', 'la liste de contrôle'], [
    teach('sheet-ecrire-teach', 'Réagir, juger, regretter, proposer',
      "Un bon message de réaction commence par la nouvelle et ton sentiment, ose un léger reproche ou une surprise, ajoute un jugement, dit ton propre regret, puis propose une suite. Chaque réaction à un fait déjà accompli prend le subjonctif passé. EN: react, judge, regret, then suggest; every reaction to something done takes the past subjunctive."),
    table('sheet-ecrire-plan', 'Le plan', ['Partie', 'Structure', 'Exemple'], [
      ['la joie', 'sentiment + subjonctif passé', 'Je suis tellement contente que tu aies décroché ce poste à Lyon.'],
      ['le léger reproche', 'négation autour de l’auxiliaire', "Je suis un peu triste que tu ne m'en aies pas parlé avant."],
      ['le jugement', 'superlatif + subjonctif', "C'est la meilleure nouvelle qu'on m'ait annoncée cette année."],
      ['la concession', 'bien que + subjonctif', 'Bien que tu sois parti loin, on reste proches.'],
      ['le regret', 'un seul sujet : infinitif passé', 'Je regrette de ne pas avoir été là pour ta fête de départ.'],
      ['la suite', 'il faut que + passé', "Il faut que tu m'aies envoyé ta nouvelle adresse avant Noël."],
    ]),
    table('sheet-ecrire-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Chaque que a son déclencheur', 'Souligne-le et nomme-le'],
      ["L'action est-elle déjà faite ?", 'Oui : passé ; non : présent'],
      ["L'auxiliaire est le bon", 'Celui du passé composé, au subjonctif'],
      ['Les accords tiennent', 'Être : le sujet ; avoir : le complément avant'],
      ["L'indicatif reste où il faut", 'Savoir, croire, même si, la première fois que'],
      ['Un seul sujet ?', 'De + infinitif passé, ne pas devant'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-05-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural B2 speed.';
const REC_DESC: Record<string, string> = {
  'rec-b2-05-fete': "Inès's message after the party (act 1), one young female Montréal voice, one take, warm and a little tired. The auxiliaries ayez, aies, ait are clear but never stressed; « viennent » and « ait une camionnette » are read like every other verb.",
  'rec-b2-05-forme': 'The four form cards (act 2). One coach voice. Card two reads the six forms of avoir with a small pause between each; aie, aies, ait and aient must sound identical.',
  'rec-b2-05-forme-ecoute': `${ONE_TAKE} Ten lines. Line three (soient arrivés) and line six (ait été) carry the auxiliary contrast the questions ask about: read them exactly like the others.`,
  'rec-b2-05-bapteme': 'Chloé and her mother at the desk (act 3), two female voices, Liège, one take, quiet. The coach lines name spellings the ear cannot hear; do not over-articulate the endings.',
  'rec-b2-05-accords': 'The four agreement cards (act 3). One voice. Card four is the pronominal: read levée exactly like any other participle.',
  'rec-b2-05-piege-accords': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions in promptSound are NEVER spoken. The participle endings are silent in most lines; do not add a sound to help.",
  'rec-b2-05-texte-a3': 'The letter to aunt Aïcha (act 3), one voice, read as written WITH the bracketed infinitives spoken as « venir », « faire »: this is the exercise text, not the answer.',
  'rec-b2-05-horloge-ecoute': `${ONE_TAKE} Ten lines in five pairs that differ by one form (vienne / soit venu, parte / soit partie). Identical rhythm and pitch inside each pair, so the form is the only cue.`,
  'rec-b2-05-horloge': 'The four clock cards (act 4). One voice. Card two holds a pair (soit là, soit venu): same rhythm for both. Card four quotes lesson 1 in B2.',
  'rec-b2-05-piege-horloge': "The audio step plays each card's CORRECT sentence. Six lines, one voice, level. The wrong versions are never spoken.",
  'rec-b2-05-texte-a4': "The grandmother's birthday (act 4), one voice, bracketed infinitives spoken as written.",
  'rec-b2-05-courrier': "The advice column (act 5), two female voices: Sophie (tense, hurt) for the letter, Hélène (calm, warm) for the reply. One take each.",
  'rec-b2-05-sentiments': 'The four feeling cards (act 5). One voice. Card four is a pair (content que tu aies réussi / je sais que tu as réussi): the two must sound almost identical.',
  'rec-b2-05-texte-a5': 'The message to Nadia (act 5), one voice, bracketed infinitives spoken as written.',
  'rec-b2-05-bureau': 'Three colleagues in a Geneva office (act 6), three voices, one take, brisk and professional; the coach lines calm and a little slower.',
  'rec-b2-05-doute': 'The four doubt cards (act 6). One voice. Cards two and three are pairs; read both halves at the same speed so the mood is the only difference.',
  'rec-b2-05-doute-ecoute': `${ONE_TAKE} Nine lines. Lines three and four (je ne crois pas / je crois) must differ only in the negation and the mood.`,
  'rec-b2-05-piege-doute': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions are never spoken.",
  'rec-b2-05-texte-a6': "Marc's absence (act 6), one voice, bracketed infinitives spoken as written.",
  'rec-b2-05-regie': "The letting agency's letter (act 7), one voice with a light Swiss accent welcome but not required, formal and even, one take.",
  'rec-b2-05-echeance': 'The four deadline cards (act 7). One voice. Card one is a pair (finisses / aies fini): identical rhythm.',
  'rec-b2-05-texte-a7': "Camille's message to her flatmates (act 7), one voice, bracketed infinitives spoken as written.",
  'rec-b2-05-festival-film': 'Camille and Luc outside a Québec cinema (act 8), two voices, one take, a Québec accent welcome for Luc.',
  'rec-b2-05-superlatif': 'The four superlative cards (act 8). One voice. Card three quotes lesson 26 in B2; card four is a pair (viens / ai vu), read flatly.',
  'rec-b2-05-superlatif-ecoute': `${ONE_TAKE} Nine lines; the questions ask about content, so no line may be slowed down or dramatised.`,
  'rec-b2-05-texte-a8': 'The stay in Québec (act 8), one voice, bracketed infinitives spoken as written.',
  'rec-b2-05-namur': 'The Namur news item (act 9), one voice, read as a regional radio journalist would; the two quotations from the director in a second, moved voice.',
  'rec-b2-05-concession': 'The four concession cards (act 9). One voice. Card one quotes lesson 32 in B1; card three (ait peu de temps) is read exactly like a past subjunctive would be.',
  'rec-b2-05-concession-ecoute': `${ONE_TAKE} Nine lines. Line three and the last line (même si) are read with the same intonation as the bien que lines.`,
  'rec-b2-05-piege-concession': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions are NEVER spoken.",
  'rec-b2-05-texte-a9': "The captain's word (act 9), one voice, bracketed infinitives spoken as written.",
  'rec-b2-05-infinitif': 'The four one-subject cards (act 10). One voice. Card one quotes lesson 16 in B1 and holds a pair (d’être venu / que tu sois venu).',
  'rec-b2-05-texte-a10': "Vincent's thank-you message (act 10), one voice, bracketed infinitives spoken as written.",
  'rec-b2-05-modele': "Maëlle's message to her cousin (act 11), one female voice, one take, read as a warm letter; the reproach lightly, the regret sincerely.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 5',
  intro: 'In B1 you built the present subjunctive (lesson 14), learnt what triggers it (lesson 15) and when an infinitive replaces it (lesson 16). Here you give it a past: avoir or être in the subjunctive plus the participle, with every agreement. Then you learn the one question that picks it: is the action already done at the moment of the main verb? You use it to react to news after the fact, to doubt what happened, to demand a result by a deadline, after a superlative or le seul, and with bien que. You also learn when French keeps the indicative, and when one subject turns it into a past infinitive (content d’être venu). The task: a 180 to 250 word message reacting to a friend’s news, graded on the B2 writing criteria.',
  skill: 'PE',
  grammarAssumed: [SUBJ_FORM_UNIT, DECL_UNIT, INF_UNIT, CONC_UNIT, EMO_UNIT, PQP_UNIT],
  grammarIntroduced: [
    'The subjonctif passé: the present subjunctive of avoir or être plus the past participle, for every person, with the auxiliary chosen as in the passé composé',
    'Participle agreement in the subjonctif passé: with être on the subject; with avoir on a direct object placed before; pronominal verbs with être, and their two exceptions',
    'Present against past subjunctive chosen by completion at the moment of the main verb, whatever the tense of the main verb (j’étais content qu’il soit là / qu’il soit venu)',
    'The subjonctif passé after feelings reacting to a finished fact, with negation round the auxiliary; savoir and être sûr kept on the indicative',
    'Doubt about a past fact (douter, il est possible, il se peut, ne pas croire, il semble) against croire, il me semble, il est probable and peut-être que',
    'Deadlines and completion ahead: il faut que + subjonctif passé, avant que, jusqu’à ce que and attendre que, against the present for a start or an action',
    'The subjunctive after a superlative, le seul, le premier and le dernier in careful writing, against la première fois que and plain relatives',
    'Bien que and quoique with the subjonctif passé for a finished fact, against même si with the indicative',
    'The past infinitive (de + avoir or être + participle, ne pas before it) when the subjects are the same',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Au B1, tu as construit le subjonctif présent et appris ce qui le déclenche. Ici, tu lui donnes un passé : avoir ou être au subjonctif, puis le participe. Tu apprends surtout à choisir : l'action est-elle déjà faite au moment du verbe principal ? Tu t'en sers pour réagir après coup, douter, fixer une échéance, juger et concéder, et tu sais quand l'indicatif ou l'infinitif passé prennent sa place. À la fin, tu écris en 180 à 250 mots ta réaction à la grande nouvelle d'un ami.",
    minutes: 150,
    difficulty: 4,
    glyph: 'aie',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: SP_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, LECTURE_MODELE, dicteeFor };
void FUT_ANT_REF;
