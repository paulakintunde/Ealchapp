// b1.12.l1 « Dont et où » — the lesson.
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
//   Rhythm per act: meet (scene / story / reading), name (cardDeck, examples,
//   tapTable), build (groupDrill, gated), choose (a drill where the MEANING
//   picks the word), trap (trapDrill stepped or commonErrors), check (gated
//   control pages before the checkpoint).
//
//    1  La phrase qui reste en l'air   7   the three doors, seen once
//    2  dont : les verbes en « de »    7   parler de, besoin de, envie de
//    3  dont : les adjectifs en « de » 7   fier de, content de, sûr de
//    4  dont : le possesseur           8   dont le fils, never dont son fils
//    5  où : le lieu                   7   la ville où, la rue où
//    6  où : le moment                 8   le jour où, against English when
//    7  À qui, avec qui, chez qui      7   people keep the preposition whole
//    8  Jamais à la fin                8   the stranded preposition
//    9  Trois portes, une clé          7   the one-second choice
//   10  Des phrases plus longues       7   two clauses, and the main verb
//   11  Décrire un lieu et une personne 11  model, plan, role play, TASK, quiz
//
//   TOTAL 84 missions, 11 acts (7,7,7,8,7,8,7,8,7,7,11). Corpus: 182
//   authored rows in one block (.1200-.1399) plus 35 reused seed rows, 200
//   ids released act by act through `deckTranche`. Chapter artwork:
//   `dont-ou-image-prompts.md`, 11 prompts, one per act.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « La préposition ouvre la relative. Elle ne finit jamais la phrase. »
//   EN: The preposition opens the clause. It never ends the sentence.
//
//   ONE METAPHOR, LA PORTE D'ENTRÉE: whatever little word the second sentence
//   needed, it stands at the FRONT of the clause. de arrives fused as dont,
//   a place or a moment arrives fused as où, and every other preposition
//   arrives written out in full in front of qui. It is NOT a whose rule and
//   it is NOT a where rule, which are the two reframes the corpus rejects by
//   name (§D). The wording says « la préposition » rather than « dont ou
//   où », because the same move produces all three doors.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    dont in all three of its families (a verb's de, an adjective's
//           de, possession), the le/la/les rule that forbids « dont son
//           fils », où for a place AND for a moment, the prepositional
//           relatives for people (à qui, avec qui, chez qui, pour qui, sans
//           qui), and the rule that a French preposition never stands at the
//           end of a clause.
//   QUOTES  b1.11's reframe (imported as B111_REFRAME / B111_REFRAME_EN and
//           its test as B111_TEST, never retyped): acts 1, 7 and 9 sit on the
//           qui/que choice that b1.11 finished, and b1.11 declares those
//           three STABLE EXPORTS for exactly this.
//   LEAVES  to b1.13: lequel, laquelle, auquel and duquel, and ce qui / ce
//           que / ce dont. The word lequel is NAMED EXACTLY ONCE on a
//           learner surface, in act 11's roundup, which says the next lesson
//           owns it; acts 7 and 10 point at the gap by lesson number only.
//           The interrogative lequel (« dites-moi lequel ») is deliberately
//           avoided too, so the string cannot be met before it is taught.
//           The subjunctive belongs to b1.14 and is used nowhere here.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED (Paul, 2026-09-22)
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the situation
//   needs (monsieur Lachance at the housing office says « vous »). Every
//   learner surface that explains something carries English (`en`, or a final
//   « EN: »). Every `say` is French, spoken fr-FR. Theme
//   `pronoms-essentiels`. A2 citations use the English trail label; b1.* ones
//   are French from the plan.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. POSTGRES HOLDS ~115 published `fr.b1.pronoms-essentiels.*` rows the
//      seed does not carry, and some are certainly on this topic. `src()`
//      resolves against seed.json, so no section here can name one and this
//      corpus may hold twins. Dedupe at import, or keep both. Confirm.
//   2. THE PREPOSITIONAL RELATIVES (à qui, avec qui, chez qui) arrive here,
//      in act 7, exactly as b1.11's open question 4 proposed. They are taught
//      for PEOPLE only; the same job for a thing needs lequel, which b1.13
//      owns, so a learner leaving this lesson can say « la personne à qui je
//      pense » and not « le projet auquel je pense ». Is that the right seam?
//   3. THREE tapTables (acts 4, 6 and 9), one per act. The pilot brief allowed
//      one per LESSON; b1.02 to b1.11 shipped 2 and 3. Confirm the looser rule.
//   4. LEQUEL IS NAMED EXACTLY ONCE on a learner surface, in act 11's
//      roundup. Acts 7 and 10 name the gap without naming the word, and the
//      interrogative lequel is avoided throughout so the string is never met
//      before b1.13 teaches it. b1.11's scene DOES use the interrogative
//      (« Dites-moi lequel »). Is one naming right, or none?
//   5. B1 CITATIONS are French from the plan (« la leçon 11 du B1 ») because
//      b1.* units are not in the seed. Switch to the English trail label once
//      they are?
//   6. Titles, labels, card heads and stat keys carry no « EN: » tail, as in
//      b1.01 to b1.11. Tail them too?
//   7. 'coach-fr-FR' is still a proposed voice id (b1.01's question 5).
//   8. The task is WRITTEN (110-150 words, `skill: 'PE'`). The unit outcome is
//      written and spoken both. Should b1.12 also carry a spoken task?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet, SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import type { DraftSection, TaskSection } from './_task-section.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, THE_TEST, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  READING_BUREAU, READING_FIERTE, READING_VOISINAGE, READING_LETTRE, READING_CHOIX, READING_ANNONCE_MODELE,
  B111_REFRAME, B111_REFRAME_EN, B111_TEST,
  QUI_QUE_UNIT, PC_UNIT, COD_UNIT, PREP_LIEU_UNIT, PREP_TEMPS_UNIT, POSSESSIFS_UNIT,
  QUI_QUE_REF, PREP_LIEU_REF, PREP_TEMPS_REF, POSSESSIFS_REF, LEQUEL_REF,
} from './dont-ou-corpus.ts';
import { DONT_OU_TERMS } from './dont-ou-terms.ts';

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
  if (!r) throw new Error(`b1.12: no item ${id}`);
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
 *  ACT 1 — LA PHRASE QUI RESTE EN L'AIR
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Nothing Nadia says is ungrammatical. Three true sentences simply
 *  cannot pick one flat out of thirty, and her first attempt at joining them
 *  reaches for que, which carries no « de ».
 *  NO « ? » OR « ! » IN ANY BUBBLE (house rule 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Au bureau du logement',
  frSub: 'Trente appartements libres',
  setting: { place: 'Bureau du logement étudiant, rue Galt', city: 'Sherbrooke', time: '9 h 30', ambience: 'un comptoir, un tableau plein de fiches, la pluie sur la vitre' },
  beats: [
    {
      kind: 'narration',
      text: "Le bureau du logement étudiant, rue Galt, à Sherbrooke. Lundi matin. Tu arrives avec deux valises et une adresse. Monsieur Lachance ouvre un classeur.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Monsieur Lachance',
      fr: "Bonjour. Dites-moi quel appartement vous cherchez.",
      en: 'Good morning. Tell me which flat you are looking for.',
      respell: '[bohⁿ-ZHOOR | deet MWAH kel ah-par-tuh-MAHⁿ voo shehr-SHAY]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "Je cherche un appartement. J'ai besoin d'un appartement calme. Le quartier me plaît beaucoup.",
      en: 'I am looking for a flat. I need a quiet flat. I like the neighbourhood a lot.',
      respell: '[zhuh SHEHRSH uhⁿ-nah-par-tuh-MAHⁿ | zhay buh-ZWEHⁿ duhⁿ-nah-par-tuh-MAHⁿ KALM]',
      stage: "Trois phrases vraies. Aucune ne dit de quel appartement il s'agit.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Derrière lui, le tableau porte trente fiches. Trente appartements libres, et vingt-deux sont calmes. Tes trois phrases sont vraies, et elles n'en montrent aucun.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Monsieur Lachance',
      fr: "J'en ai trente de libres. Décrivez-moi le vôtre en une seule phrase.",
      en: 'I have thirty free. Describe yours to me in a single sentence.',
      respell: '[zhahⁿ nay TRAHⁿT duh LEEBR | day-kree-vay MWAH luh VOHTR ahⁿ ün suhl FRAHZ]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Choisis la phrase qui tient debout.',
      size: 'lg',
      options: [
        { fr: "L'appartement que j'ai besoin est calme et près du campus.", respell: "[lah-par-tuh-MAHⁿ kuh zhay buh-ZWEHⁿ | eh KALM ay preh dü kahⁿ-PÜSS]", en: 'The flat I need is quiet and near the campus.', outcome: 'breaks', audio: AUDIO },
        { fr: "L'appartement dont j'ai besoin est calme et près du campus.", respell: "[lah-par-tuh-MAHⁿ dohⁿ zhay buh-ZWEHⁿ | eh KALM ay preh dü kahⁿ-PÜSS]", en: 'The flat I need is quiet and near the campus.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Il sort trois fiches sur trente. Un mot de quatre lettres a fait le tri.",
        breaks: "Il s'arrête au milieu de ta phrase. Il entend « besoin », il attend « de », et « que » ne lui en donne pas.",
      },
    },
    {
      kind: 'break',
      heading: 'besoin arrive avec de',
      body: "On a besoin DE quelque chose. Ce de ne disparaît pas quand tu colles les deux phrases : il passe devant, et il s'écrit dont. EN: the de does not vanish; it moves to the front as dont.",
      wrong: {
        fr: "L'appartement que j'ai besoin est calme.",
        ipa: '/la.paʁ.tə.mɑ̃ kə ʒe bə.zwɛ̃ ɛ kalm/',
        respell: '[lah-par-tuh-MAHⁿ kuh zhay buh-ZWEHⁿ eh KALM]',
        en: 'The flat I need is quiet.',
      },
      right: {
        fr: "L'appartement dont j'ai besoin est calme.",
        ipa: '/la.paʁ.tə.mɑ̃ dɔ̃ ʒe bə.zwɛ̃ ɛ kalm/',
        respell: '[lah-par-tuh-MAHⁿ dohⁿ zhay buh-ZWEHⁿ eh KALM]',
        en: 'The flat I need is quiet.',
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Il reste deux portes à ouvrir : celle des lieux et des moments, et celle des personnes. Elles marchent toutes les deux de la même façon.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['petitmot', 'devant'],
};

const A1_BUTS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-buts',
  layer: 'core',
  title: 'Ce que tu sauras faire',
  frSub: 'Quatre choses, onze actes',
  goals: [
    { t: 'Écrire dont quand le verbe ou l\'adjectif réclame de', s: 'Actes 2 et 3' },
    { t: 'Dire à qui est la chose, sans son ni sa', s: 'Acte 4' },
    { t: 'Utiliser où pour un lieu et pour un moment', s: 'Actes 5 et 6' },
    { t: 'Garder la préposition devant, jamais à la fin', s: 'Actes 7 et 8' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['devant', 'petitmot'],
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le premier matin à Sherbrooke',
  frSub: 'Lis, et regarde le premier mot de chaque relative',
  text: READING_BUREAU,
  glossary: [
    { word: 'logement étudiant', en: 'student housing', note: "Le service qui loge les étudiants. EN: the service that houses students." },
    { word: 'rez-de-chaussée', en: 'ground floor', note: "L'étage au niveau de la rue. EN: the floor at street level." },
    { word: 'le concierge', en: 'the caretaker', note: "La personne qui s'occupe de l'immeuble." },
    { word: 'prévenu', en: 'told in advance', note: 'On lui dit avant, pas après.' },
  ],
  questions: [
    { q: 'Pourquoi les quatre premières phrases de Nadia ne servent-elles à rien ?', a: "Elles sont vraies, et trente appartements y répondent en même temps. Aucune ne désigne un appartement plutôt qu'un autre." },
    { q: 'Quels trois petits mots ouvrent les relatives du texte ?', a: 'dont, où et à qui. Le premier remplace de, le deuxième un lieu ou un moment, le troisième garde sa préposition écrite en entier.' },
    { q: "Pourquoi « dont » et non « que » après « j'ai besoin » ?", a: "Parce qu'on a besoin DE quelque chose. Le de ne disparaît pas : il passe devant et s'écrit dont." },
    { q: 'Que remarque Nadia à la fin ?', a: "Aucune phrase ne finit par une préposition. En français, le petit mot ouvre la relative au lieu de rester suspendu à la fin." },
  ],
  audio: REC('rec-b1-12-bureau'),
  say: REFRAME,
  terms: ['devant', 'petitmot'],
};

/** NAME. The three doors, once, before any of them is taught. */
const A1_PORTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-portes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-choix',
  title: 'Trois portes, une seule question',
  frSub: 'Quel petit mot va avec le verbe',
  hint: 'Quatre cartes. Regarde le premier mot de chaque relative.',
  audio: REC('rec-b1-12-portes'),
  say: REFRAME,
  terms: ['petitmot', 'devant'],
  cards: [
    {
      head: 'Le verbe réclame de', label: 'dont',
      fr: "L'appartement dont j'ai besoin est calme.",
      sub: '[lah-par-tuh-MAHⁿ dohⁿ zhay buh-ZWEHⁿ eh KALM]',
      body: "avoir besoin de, parler de, se souvenir de. Le de ne s'écrit pas deux fois : il devient dont. EN: the de is not written twice; it becomes dont.",
    },
    {
      head: 'Un lieu ou un moment', label: 'où',
      fr: "Le quartier où je veux habiter est près du fleuve.",
      sub: '[luh kar-TYAY oo zhuh vuh ah-bee-TAY · eh preh dü FLUHV]',
      body: "Une ville, une rue, un jour, une année : un seul mot pour les deux. EN: a city, a street, a day, a year: one word for both.",
    },
    {
      head: 'Une personne, une autre préposition', label: 'à qui, avec qui',
      fr: "La personne à qui j'ai écrit travaille ici.",
      sub: '[lah pehr-SONN ah kee zhay ay-KREE · trah-VAHY ee-SEE]',
      body: "à, avec, chez, pour, sans ne fusionnent avec rien. Tu les écris en entier, puis qui. EN: these prepositions fuse with nothing and stay written in full.",
    },
    {
      head: `Ce que ${QUI_QUE_REF} t'a déjà donné`, label: Cap(QUI_QUE_REF),
      fr: "le sac qui est là · le sac que je cherche",
      sub: '[luh sak kee eh LAH] · [luh sak kuh zhuh SHEHRSH]',
      body: `« ${B111_REFRAME} » Sans petit mot, rien ne change : qui et que restent. EN: ${B111_REFRAME_EN}`,
    },
  ],
};

/** BUILD. Sort by the door each sentence walked through. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Repère la porte',
  frSub: 'Trois familles, un seul geste',
  groups: [
    grp('Le verbe réclamait de', [
      it(E(1202), 'avoir besoin de'),
      it(E(1211), 'parler de'),
      it(E(1207), 'avoir besoin de, en vous'),
      it('fr.b1.litterature.003', 'parler de, au passé'),
    ], chk("Ces quatre phrases : quel mot manquerait si dont n'existait pas ?",
      ['à', 'avec', 'de'], 2,
      "Chaque verbe ici arrive avec de, et dont le porte. EN: each verb here comes with de, and dont carries it.")),
    grp('Un lieu ou un moment', [
      it(E(1204), 'un quartier'),
      it(E(1208), 'un immeuble'),
      it(E(1210), 'un jour'),
      it('fr.b1.sports-et-loisirs.092', 'un club'),
    ], chk('Un jour et une ville prennent-ils le même mot ?',
      ['Oui, les deux prennent où', "Non, le jour prend quand"], 0,
      "L'anglais a where et when ; le français n'a que où. EN: English has two words, French has one.")),
    ctl('La personne', "« La personne ... j'ai écrit ne m'a pas répondu. » Quel groupe ouvre la relative ?",
      ['que', 'à qui', 'dont'], 1,
      "On écrit À une personne, donc à qui. EN: you write TO someone, so à qui."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['petitmot', 'motou'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Quatre fois où le mauvais mot coûte quelque chose',
  frSub: 'Le guichet ne devine pas',
  cases: [
    { situation: 'Tu demandes un logement', fr: "L'appartement dont j'ai besoin est calme et près du campus.", en: 'The flat I need is quiet and near the campus.' },
    { situation: 'Tu dis dans quel quartier', fr: 'Le quartier où je veux habiter est près du fleuve.', en: 'The neighbourhood I want to live in is near the river.' },
    { situation: 'Tu dis qui tu as déjà contacté', fr: "La personne à qui j'ai écrit hier ne m'a pas répondu.", en: 'The person I wrote to yesterday has not answered me.' },
    { situation: 'Tu fixes une date', fr: "Le jour où tu déménages, le concierge doit être prévenu.", en: 'On the day you move in, the caretaker has to be told.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['devant', 'personne'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La question', 'Avant de choisir le mot, tu te demandes...',
    ['si le nom est une personne', 'si la phrase est au passé', 'quel petit mot va avec le verbe'], 2,
    "Le nom de devant ne décide rien ici non plus. EN: the noun in front decides nothing here either."),
  ctl('La place', "En français, la préposition d'une relative se met...",
    ['au début', 'à la fin', 'des deux côtés'], 0,
    `${REFRAME} EN: ${REFRAME_EN}`),
  ctl('Les trois portes', 'de donne dont. Un lieu ou un moment donne...',
    ['quand', 'où', 'que'], 1,
    "Un seul mot pour le lieu et pour le moment. EN: one word for both place and time."),
], ['petitmot', 'devant']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: "La phrase qui reste en l'air",
    opener: {
      line: "Trois phrases vraies, et le guichet ne sait toujours pas de quel appartement tu parles : ici tu apprends à coller ce qui manque. EN: Three true sentences, and the desk still does not know which flat you mean: here you learn to join what is missing.",
      imageRef: 'lessons/dont-ou/act01.jpg',
    },
    sections: [],
    milestone: "Tu reconnais les trois portes et tu sais où se met le petit mot. EN: You can tell the three doors apart and you know where the little word goes.",
    estScreens: 30,
    restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_BUTS, A1_LECTURE, A1_PORTES, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — DONT : LES VERBES EN « DE »
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Karim reads his own note back and hears where it stops.
 *  NO « ? » OR « ! » IN ANY BUBBLE (house rule 6.4). */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Le livre que personne ne trouve',
  frSub: 'Karim écrit à la bibliothèque',
  setting: "Karim a écrit à la bibliothèque pour réserver un livre. Trois jours plus tard, personne ne l'a trouvé.",
  bubbles: [
    { from: 'narrator', fr: "Karim relit le message qu'il a envoyé.", en: 'Karim rereads the message he sent.' },
    { from: 'user', fr: "J'ai écrit : « Je voudrais le livre que j'ai besoin pour mon cours. »", en: 'I wrote: I would like the book I need for my course.', warn: 'Le mot que ne porte aucun de' },
    { from: 'coach', fr: 'Redis la deuxième phrase toute seule.', en: 'Say the second sentence on its own.' },
    { from: 'user', fr: "J'ai besoin d'un livre pour mon cours.", en: 'I need a book for my course.' },
    { from: 'coach', fr: "Tu entends le de. Il ne disparaît pas : il passe devant et devient dont.", en: 'You can hear the de. It does not vanish: it moves to the front and becomes dont.' },
    { from: 'user', fr: "Le livre dont j'ai besoin pour mon cours.", en: 'The book I need for my course.', warn: 'Un seul mot, et le de est dedans' },
    { from: 'narrator', fr: 'Le livre est arrivé le lendemain.', en: 'The book arrived the next day.' },
  ],
  closing: { fr: 'Le de du verbe ne se perd pas. Il change de forme et de place.', en: "The verb's de is not lost. It changes shape and position." },
  audio: REC('rec-b1-12-karim'),
  say: REFRAME,
  terms: ['motdont', 'petitmot'],
};

/** NAME. Four cards, four families of de. */
const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-dont',
  title: "dont, c'est de",
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Cherche le de dans la phrase de départ.',
  audio: REC('rec-b1-12-dont'),
  say: REFRAME,
  terms: ['motdont', 'petitmot'],
  cards: [
    {
      head: 'Le de est déjà là', label: 'la phrase de départ',
      fr: "Je t'ai parlé d'un livre.",
      sub: '[zhuh tay par-LAY duhⁿ LEEVR]',
      body: "parler arrive toujours avec de. Le de se voit dans la phrase courte, avant toute relative. EN: parler always comes with de, and you can see it before any clause.",
    },
    {
      head: 'Il passe devant', label: 'dont',
      fr: "Le livre dont je t'ai parlé est à la bibliothèque.",
      sub: '[luh LEEVR dohⁿ zhuh tay par-LAY · eh ah lah bee-blee-oh-TEK]',
      body: "dont ouvre la relative et porte le de à lui tout seul. EN: dont opens the clause and carries the de by itself.",
    },
    {
      head: "On ne l'écrit pas deux fois", label: 'jamais de derrière',
      fr: 'Le formulaire dont tu as besoin est en ligne.',
      sub: '[luh for-mü-LEHR dohⁿ tü a buh-ZWEHⁿ · eh tahⁿ LEENY]',
      body: "Pas de « dont ... de ». Le mot contient déjà la préposition. EN: no second de: the word already contains the preposition.",
    },
    {
      head: 'Six verbes à retenir', label: 'la liste',
      fr: 'parler de · avoir besoin de · se souvenir de',
      sub: '[par-LAY duh] · [ah-vwar buh-ZWEHⁿ duh] · [suh soo-vuh-NEER duh]',
      body: "Et trois autres : avoir envie de, s'occuper de, rêver de. Tous donnent dont. EN: and three more, all of which give dont.",
    },
  ],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  sheetId: 'sheet-dont',
  title: 'Six verbes au travail',
  frSub: 'Le même geste six fois',
  examples: [
    ex(E(1221), 'parler de : le de est dans dont'),
    ex(E(1223), 'avoir besoin de : rien ne se réécrit derrière'),
    ex(E(1225), 'se souvenir de : le verbe est pronominal, le geste ne change pas'),
    ex(E(1227), 'avoir envie de : une envie, pas un objet direct'),
    ex(E(1229), "s'occuper de : le pluriel ne change rien"),
    ex(E(1231), 'rêver de : la phrase de départ disait « nous rêvons d’un appartement »'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motdont'],
};

/** BUILD. Three groups, each ending in a gate. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis la relative en de',
  frSub: 'Deux phrases, puis une',
  groups: [
    grp('Les phrases de départ', [
      it(E(1220), 'parler de'),
      it(E(1222), 'avoir besoin de'),
      it(E(1226), 'avoir envie de'),
      it(E(1230), 'rêver de'),
    ], chk('Quel point commun ont ces quatre phrases ?',
      ['elles sont au passé', 'elles parlent de livres', 'un de suit le verbe'], 2,
      "Chaque verbe traîne son de derrière lui. EN: each verb drags its de behind it.")),
    grp('Les mêmes verbes, ailleurs', [
      it('fr.a2.pronoms-essentiels.291', 'parler de'),
      it('fr.a2.metiers.036', 'parler de, à l’impératif'),
      it('fr.a1.marche.173', 'avoir besoin de'),
      it('fr.b1.cuisine.003', 'avoir besoin de, au pluriel'),
      it('fr.b1.droit.006', "s'occuper de"),
      it('fr.b1.metiers.006', 'rêver de'),
    ], chk("Aucune de ces six phrases n'est une relative. Que faudrait-il pour en faire une ?",
      ['un nom devant et dont à la place du de', 'un verbe au passé', 'une virgule'], 0,
      "Un nom à reprendre, et le de devient dont. EN: a noun to pick up, and the de becomes dont.")),
    grp('Les phrases collées', [
      it(E(1221), 'le de est devenu dont'),
      it(E(1223), 'et rien ne se répète'),
      it(E(1227), 'le nom de devant est un congé'),
      it(E(1231), "et ici c'est un appartement"),
    ], chk("Combien de fois le mot de apparaît-il dans « Le formulaire dont tu as besoin » ?",
      ['une fois, écrit', 'zéro fois, il est dans dont', 'deux fois'], 1,
      "dont le contient. L'écrire en plus serait le dire deux fois. EN: dont contains it already.")),
    ctl('Le contrôle', "« La ville ... elle parle souvent est Abidjan. » Quel mot ?",
      ['où', 'que', 'dont'], 2,
      "Une ville, et pourtant dont : parler réclame de. EN: a city, and still dont, because parler asks for de."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motdont', 'petitmot'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Entends le de avant de le voir',
  frSub: 'Huit phrases, sans le texte',
  lines: [
    ln(E(1221)), ln(E(1234)), ln(E(1223)), ln('fr.b1.cinema.001'),
    ln(E(1225)), ln('fr.b1.voisinage.004'), ln(E(1233)), ln(E(1232)),
  ],
  questions: [
    { q: 'Première phrase : de quel verbe vient le de ?', opts: ['parler', 'avoir besoin', 'rêver'], correct: 0,
      why: "« je t'ai parlé de ce livre » : c'est parler. EN: it is parler." },
    { q: 'Troisième phrase : le formulaire est...', opts: ['perdu', 'en ligne'], correct: 1,
      why: "« est en ligne ». Le verbe principal arrive après la relative. EN: the main verb arrives after the clause." },
    { q: 'Quatrième phrase : de qui tout le monde parle-t-il ?',
      opts: ["d'un réalisateur", "d'un écrivain"], correct: 0,
      why: "« le réalisateur dont tout le monde parle ». EN: a film director." },
    { q: 'Sixième phrase : quand la personne en a-t-elle parlé ?',
      opts: ['la semaine dernière', 'hier', 'demain'], correct: 1,
      why: "« dont je t'ai parlé hier ». Le mot hier ferme la relative. EN: hier closes the clause." },
    { q: 'Septième phrase : le dictionnaire sert...', opts: ['une fois par mois', 'jamais', 'tous les jours'], correct: 2,
      why: "« dont je me sers tous les jours ». EN: every day." },
  ],
  audio: REC('rec-b1-12-dont-ecoute'),
  say: REFRAME,
  terms: ['motdont'],
};

/** TRAP. The single commonest error in the lesson: que for dont. */
const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-piege',
  layer: 'core',
  swipe: true,
  title: 'Le piège du que',
  frSub: 'Quatre étapes',
  rule: {
    title: 'que ne porte aucun de',
    body: "que reprend un complément direct, et un complément direct arrive sans préposition. Dès que le verbe réclame de, que ne peut plus faire le travail. EN: as soon as the verb asks for de, que cannot do the job.",
  },
  cards: [
    { promptLabel: 'avoir besoin', promptSound: "L'appartement que j'ai besoin est calme.",
      fr: "L'appartement dont j'ai besoin est calme.",
      ipa: '/la.paʁ.tə.mɑ̃ dɔ̃ ʒe bə.zwɛ̃ ɛ kalm/',
      tip: "besoin appelle de, et de s'écrit dont. EN: besoin calls for de, and de is written dont." },
    { promptLabel: 'parler', promptSound: "Le livre que je t'ai parlé est là.",
      fr: "Le livre dont je t'ai parlé est à la bibliothèque.",
      ipa: '/lə livʁ dɔ̃ ʒə te paʁ.le ɛ a la bi.bli.jɔ.tɛk/',
      tip: "On parle DE quelque chose, jamais quelque chose. EN: you talk ABOUT something." },
    { promptLabel: 'se souvenir', promptSound: 'La soirée que je me souviens était la première.',
      fr: "La soirée dont je me souviens le mieux, c'est la première.",
      ipa: '/la swa.ʁe dɔ̃ ʒə mə su.vjɛ̃ lə mjø sɛ la pʁə.mjɛʁ/',
      tip: 'se souvenir DE. Le pronominal ne change rien. EN: the reflexive changes nothing.' },
    { promptLabel: 'avoir envie', promptSound: "Le congé qu'elle a envie dure trois semaines.",
      fr: "Le congé dont elle a envie dure trois semaines.",
      ipa: '/lə kɔ̃.ʒe dɔ̃ ɛl a ɑ̃.vi dyʁ tʁwa sə.mɛn/',
      tip: "avoir envie DE. L'apostrophe ne sauve rien. EN: the apostrophe rescues nothing." },
    { promptLabel: 'le de écrit deux fois', promptSound: "Le formulaire dont tu as besoin de est en ligne.",
      fr: 'Le formulaire dont tu as besoin est en ligne.',
      ipa: '/lə fɔʁ.my.lɛʁ dɔ̃ ty a bə.zwɛ̃ ɛ.t ɑ̃ liɲ/',
      tip: 'dont contient déjà le de. EN: dont already contains the de.' },
    { promptLabel: 'de qui pour un objet', promptSound: "Le film de qui tout le monde parle sort vendredi.",
      fr: 'Le film dont tout le monde parle sort vendredi.',
      ipa: '/lə film dɔ̃ tu lə mɔ̃d paʁl sɔʁ vɑ̃.dʁə.di/',
      tip: "de ne reste pas écrit : il fusionne en dont. EN: de does not stay written; it fuses into dont." },
  ],
  drill: [
    { promptSay: "Le livre ... j'ai besoin est épuisé.", opts: ['que', 'dont'], correct: 1 },
    { promptSay: "Le livre ... j'ai lu hier est épuisé.", opts: ['que', 'dont'], correct: 0 },
    { promptSay: "La soirée ... nous parlons a eu lieu en mai.", opts: ['que', 'dont'], correct: 1 },
    { promptSay: "La soirée ... nous avons organisée a eu lieu en mai.", opts: ['que', 'dont'], correct: 0 },
    { promptSay: "Le stage ... elle rêvait commence lundi.", opts: ['que', 'dont'], correct: 1 },
    { promptSay: "Le dictionnaire ... je me sers est très vieux.", opts: ['dont', 'que'], correct: 0 },
    { promptSay: "Le dossier ... tu as besoin est sur le comptoir.", opts: ['que', 'dont'], correct: 1 },
    { promptSay: "Le dossier ... tu as ouvert est sur le comptoir.", opts: ['que', 'dont'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'que ne porte aucun de' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-12-piege-dont'),
  say: REFRAME,
  terms: ['motdont', 'petitmot'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le test', 'Pour savoir si une relative prend dont, tu...',
    ['redis la deuxième phrase toute seule', 'regardes si le nom est une chose', 'comptes les mots'], 0,
    `${THE_TEST} EN: say the second sentence on its own.`),
  ctl('Le de en trop', "« Le dossier dont j'ai besoin de » : que faut-il enlever ?",
    ['dont', 'le second de', 'rien'], 1,
    "dont porte déjà la préposition. EN: dont already carries the preposition."),
  ctl('La frontière', 'que sert quand le verbe...',
    ['ne réclame aucune préposition', 'réclame de', 'est au passé'], 0,
    "Sans préposition, on reste chez qui et que. EN: with no preposition, you stay with qui and que."),
], ['motdont', 'petitmot']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'dont : les verbes en « de »',
    opener: {
      line: "Certains verbes arrivent avec un de collé au dos : ici tu apprends où ce de va se poser. EN: Some verbs arrive with a de stuck to their back: here you learn where that de lands.",
      imageRef: 'lessons/dont-ou/act02.jpg',
    },
    sections: [],
    milestone: "Tu écris dont dès que le verbe réclame de, et tu ne le réécris pas derrière. EN: You write dont whenever the verb asks for de, and you do not write de again behind it.",
    estScreens: 34,
    restPoints: ['a2-construire'],
  },
  sections: [A2_HISTOIRE, A2_CARTES, A2_EXEMPLES, A2_CONSTRUIRE, A2_ECOUTE, A2_PIEGE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — DONT : LES ADJECTIFS EN « DE »
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-lecture',
  layer: 'core',
  questionsInModal: true,
  title: "L'atelier de la rue Wellington",
  frSub: 'Six relatives, quatre adjectifs',
  text: READING_FIERTE,
  glossary: [
    { word: 'un atelier', en: 'a workshop', note: "Un lieu où on répare ou on fabrique. EN: a place where things are repaired or made." },
    { word: 'une chambre à air', en: 'an inner tube', note: "Le tube en caoutchouc à l'intérieur du pneu." },
    { word: 'commandes', en: 'orders', note: "Ce qu'on demande à un fournisseur." },
    { word: 'la facture', en: 'the invoice', note: 'Le papier qui dit combien il faut payer.' },
  ],
  questions: [
    { q: 'Combien de relatives en dont le texte contient-il, et après quoi arrivent-elles ?', a: "Six. Deux après un verbe (s'occuper de, se souvenir de) et quatre après un adjectif (fier de, contents de, sûr de, responsable de)." },
    { q: "Pourquoi « la seule chose dont je ne suis pas sûr » et non « que je ne suis pas sûr » ?", a: "On est sûr DE quelque chose. L'adjectif réclame de, et la négation ne change rien à ça." },
    { q: 'Quelle phrase de départ se cache derrière « les pièces dont elle est responsable » ?', a: "« Elle est responsable de ces pièces. » Le de de l'adjectif passe devant et devient dont." },
    { q: 'Que conclut la dernière ligne du texte ?', a: "Qu'un adjectif réclame de aussi souvent qu'un verbe, et que le mot devant la relative est le même dans les deux cas." },
  ],
  audio: REC('rec-b1-12-atelier'),
  say: REFRAME,
  terms: ['motdont', 'petitmot'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-dont',
  title: "L'adjectif aussi réclame de",
  frSub: 'Quatre cartes',
  hint: "Quatre cartes. Cherche le de derrière l'adjectif.",
  audio: REC('rec-b1-12-adjectifs'),
  say: REFRAME,
  terms: ['motdont', 'petitmot'],
  cards: [
    {
      head: "On est fier DE quelque chose", label: 'la phrase de départ',
      fr: 'Je suis fier de ce travail.',
      sub: '[zhuh süee FYEHR duh suh trah-VAHY]',
      body: "L'adjectif seul ne suffit pas : fier appelle de, comme besoin. EN: the adjective alone is not enough; fier calls for de, just as besoin does.",
    },
    {
      head: 'Le même geste', label: 'dont',
      fr: 'Le travail dont je suis fier a pris six mois.',
      sub: '[luh trah-VAHY dohⁿ zhuh süee FYEHR · a pree see MWAH]',
      body: "Rien de nouveau à apprendre : le de passe devant et devient dont. EN: nothing new to learn; the de moves to the front and becomes dont.",
    },
    {
      head: 'La négation ne change rien', label: 'ne ... pas sûr de',
      fr: "Le seul point dont je ne suis pas sûr, c'est l'heure.",
      sub: '[luh suhl PWEHⁿ dohⁿ zhuh nuh süee pa SÜR · seh LUHR]',
      body: "sûr de reste sûr de, même à la forme négative. EN: sûr de stays sûr de, even in the negative.",
    },
    {
      head: 'Six adjectifs à retenir', label: 'la liste',
      fr: 'fier de · content de · responsable de',
      sub: '[fyehr DUH] · [kohⁿ-tahⁿ DUH] · [res-pohⁿ-sabl DUH]',
      body: "Et trois autres : sûr de, capable de, ravi de. Tous donnent dont. EN: and three more, all of which give dont.",
    },
  ],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  sheetId: 'sheet-dont',
  title: 'Six adjectifs au travail',
  frSub: 'La phrase courte est toujours derrière',
  examples: [
    ex(E(1245), 'fier de : « je suis fier de ce travail »'),
    ex(E(1247), 'content de : « elle est contente de ce bureau »'),
    ex(E(1249), 'sûr de : « tu es sûr de cette date »'),
    ex(E(1251), "responsable de : « elle est responsable de l'accueil »"),
    ex(E(1253), 'ravi de : « nous sommes ravis de cette nouvelle »'),
    ex(E(1255), "capable de : « il est capable d'un effort énorme »"),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motdont'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: "Construis la relative après l'adjectif",
  frSub: 'La courte, puis la longue',
  groups: [
    grp('Les phrases de départ', [
      it('fr.a2.metiers.030', 'responsable de'),
      it('fr.a2.metiers.068', 'responsable du, donc de + le'),
      it('fr.a1.salutations.198', 'contente de'),
      it(E(1254), 'capable de'),
    ], chk('Que réclament ces quatre adjectifs ?',
      ['que', 'rien du tout', 'de'], 2,
      "responsable de, contente de, capable de. EN: all three take de.")),
    grp('Les phrases collées', [
      it(E(1245), "l'adjectif est fier"),
      it(E(1251), "l'adjectif est responsable"),
      it(E(1255), "l'adjectif est capable"),
      it(E(1257), 'et il porte un adverbe devant lui'),
    ], chk("Dans « le quartier dont elle est très fière », où est passé le de ?",
      ['il est dans dont', 'il a disparu', 'il est à la fin'], 0,
      "dont le contient. Il ne se réécrit nulle part. EN: dont contains it and it is written nowhere else.")),
    ctl('Le contrôle', 'de + le donne du. Une relative sur « responsable du planning » commence par...',
      ['du que', 'dont', 'de qui'], 1,
      "du, de la, des : tous fondus dans dont. EN: du, de la and des all fuse into dont."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motdont', 'petitmot'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: "Quatre erreurs d'adjectif",
  frSub: 'Chacune est un réflexe anglais',
  errors: [
    { wrong: 'Le projet que je suis fier a pris six mois.',
      right: 'Le projet dont je suis fier a pris six mois.',
      why: "Normal : en anglais, the project I am proud of n'a rien devant. Ici fier réclame de. EN: English puts nothing in front, French puts dont." },
    { wrong: 'La date dont tu es sûr de ne figure nulle part.',
      right: 'La date dont tu es sûr ne figure nulle part.',
      why: "Le de est déjà dans dont. L'écrire en plus, c'est le dire deux fois. EN: the de is already inside dont." },
    { wrong: 'Le travail de qui je suis fier a pris six mois.',
      right: 'Le travail dont je suis fier a pris six mois.',
      why: "de qui existe, mais seulement pour une personne et dans un style très écrit. Ici, dont. EN: de qui exists, but only for people and in a formal register." },
    { wrong: "L'accueil qu'elle est responsable ferme à midi.",
      right: "L'accueil dont elle est responsable ferme à midi.",
      why: "L'apostrophe ne change rien : que élidé reste que, et que ne porte pas de. EN: an elided que is still que, and que carries no de." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motdont', 'petitmot'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a3-dictee',
  layer: 'core',
  title: 'Écris les phrases que tu entends',
  frSub: 'Le mot dont, cinq fois',
  itemIds: dicteeFor(3),
  audio: AUDIO,
  say: REFRAME,
  terms: ['motdont'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La source du de', 'Le de qui devient dont peut venir...',
    ["d'un verbe seulement", "d'un nom seulement", "d'un verbe ou d'un adjectif"], 2,
    "besoin de et fier de font exactement le même travail. EN: a verb and an adjective behave identically."),
  ctl('du et des', "« responsable du planning » donne une relative en...",
    ['dont', 'du dont', 'que du'], 0,
    "du et des sont déjà de + article : tout fond dans dont. EN: du and des are de plus an article, and all of it fuses."),
  ctl('La négation', "« Je ne suis pas sûr de cette date » donne...",
    ['la date que je ne suis pas sûr', 'la date dont je ne suis pas sûr'], 1,
    "La négation n'enlève pas le de de l'adjectif. EN: the negative does not remove the adjective's de."),
], ['motdont', 'petitmot']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'dont : les adjectifs en « de »',
    opener: {
      line: "Être fier, être sûr, être responsable : ces mots-là aussi traînent un de derrière eux. EN: Being proud, being sure, being in charge: these words drag a de behind them too.",
      imageRef: 'lessons/dont-ou/act03.jpg',
    },
    sections: [],
    milestone: "Tu écris dont après un adjectif comme après un verbe, et tu ne redoubles jamais le de. EN: You write dont after an adjective just as after a verb, and you never double the de.",
    estScreens: 28,
    restPoints: ['a3-construire'],
  },
  sections: [A3_LECTURE, A3_CARTES, A3_EXEMPLES, A3_CONSTRUIRE, A3_ERREURS, A3_DICTEE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — DONT, LE POSSESSEUR
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (house rule 6.4). */
const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'La femme dont le fils est médecin',
  frSub: 'Nadia décrit ses voisins',
  setting: "Nadia raconte à Karim qui habite dans son immeuble. Elle essaie de dire de qui elle parle.",
  bubbles: [
    { from: 'user', fr: 'La femme dont son fils est médecin habite en face.', en: 'The woman whose son is a doctor lives across the road.', warn: 'dont son : deux fois le propriétaire' },
    { from: 'coach', fr: 'Enlève le mot son et relis.', en: 'Take the word son out and read it again.' },
    { from: 'user', fr: 'La femme dont le fils est médecin habite en face.', en: 'The woman whose son is a doctor lives across the road.' },
    { from: 'coach', fr: "C'est ça. dont dit déjà à qui est le fils. Le mot son le redirait une deuxième fois.", en: 'That is it. dont already says whose son it is; son would say it a second time.' },
    { from: 'user', fr: "Et la maison dont la porte est bleue, alors.", en: 'And the house with the blue door, then.' },
    { from: 'coach', fr: 'Pareil. le, la, les après dont, toujours.', en: 'Same thing. le, la, les after dont, always.' },
  ],
  closing: { fr: "dont porte le propriétaire. La chose possédée prend son article et rien d'autre.", en: 'dont carries the owner. The thing owned takes its article and nothing else.' },
  audio: REC('rec-b1-12-voisins'),
  say: REFRAME,
  terms: ['possesseur', 'motdont'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-dont',
  title: 'dont dit à qui est la chose',
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Regarde le mot juste après dont.',
  audio: REC('rec-b1-12-possession'),
  say: REFRAME,
  terms: ['possesseur', 'motdont'],
  cards: [
    {
      head: 'La chose possédée fait le verbe', label: 'dont + le + verbe',
      fr: 'La femme dont le fils est médecin habite en face.',
      sub: '[lah FAMM dohⁿ luh FEESS eh mayd-SEHⁿ · ah-beet ahⁿ FASS]',
      body: "Le fils est le sujet de est. La femme, elle, attend son propre verbe : habite. EN: the son is the subject of est, and the woman still waits for her own verb.",
    },
    {
      head: 'La chose possédée est subie', label: 'dont + sujet + verbe + le',
      fr: "La voisine dont je connais le frère travaille à l'hôpital.",
      sub: '[lah vwah-ZEEN dohⁿ zhuh koh-neh luh FREHR · trah-vahy ah loh-pee-TAL]',
      body: "Ici c'est je qui connaît, et le frère arrive après le verbe. L'ordre suit la phrase courte. EN: here je does the knowing, and the brother comes after the verb.",
    },
    {
      head: 'Jamais son, sa ni ses', label: 'la faute à éviter',
      fr: 'La maison dont la porte est bleue est à vendre.',
      sub: '[lah meh-ZOHⁿ dohⁿ lah PORT eh BLUH · eh tah VAHⁿDR]',
      body: "dont dit déjà à qui est la porte. « dont sa porte » le dirait deux fois. EN: dont already says whose door it is.",
    },
    {
      head: 'Le pluriel ne change rien', label: 'dont + les',
      fr: "L'appartement dont les fenêtres donnent sur la cour est plus calme.",
      sub: '[lah-par-tuh-MAHⁿ dohⁿ lay fuh-NETR donn sür lah KOOR]',
      body: "dont ne bouge ni au féminin ni au pluriel. Seul l'article change. EN: dont never changes; only the article does.",
    },
  ],
};

const A4_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a4-table',
  layer: 'core',
  sheetId: 'sheet-dont',
  title: 'Six possessions, six relatives',
  frSub: 'Touche une ligne',
  cols: ['La phrase courte', 'La relative', 'La faute'],
  rows: [
    { cells: ['Son fils est médecin.', 'dont le fils est médecin', 'dont son fils'],
      say: 'La femme dont le fils est médecin habite en face.',
      detail: { title: 'Le fils fait le verbe', body: "Le fils est sujet de est. La femme garde son propre verbe pour plus tard. EN: the son is the subject, and the woman keeps her own verb for later.", say: 'La femme dont le fils est médecin habite en face.' } },
    { cells: ['Sa porte est bleue.', 'dont la porte est bleue', 'dont sa porte'],
      say: 'La maison dont la porte est bleue est à vendre.',
      detail: { title: 'Une chose peut posséder', body: "Une maison possède une porte. dont ne sert pas qu'aux personnes. EN: a house owns a door; dont is not only for people.", say: 'La maison dont la porte est bleue est à vendre.' } },
    { cells: ['Ses fenêtres donnent sur la cour.', 'dont les fenêtres donnent', 'dont ses fenêtres'],
      say: "L'appartement dont les fenêtres donnent sur la cour est plus calme.",
      detail: { title: 'Le pluriel', body: "les remplace ses. dont ne change pas de forme. EN: les replaces ses, and dont keeps its shape.", say: "L'appartement dont les fenêtres donnent sur la cour est plus calme." } },
    { cells: ['Je connais son frère.', 'dont je connais le frère', 'dont je connais son frère'],
      say: "La voisine dont je connais le frère travaille à l'hôpital.",
      detail: { title: 'La chose possédée arrive après', body: "Le sujet de la relative est je, donc le frère se place derrière le verbe. EN: the subject is je, so the brother lands behind the verb.", say: "La voisine dont je connais le frère travaille à l'hôpital." } },
    { cells: ["J'ai oublié son nom.", "dont j'ai oublié le nom", "dont j'ai oublié son nom"],
      say: "L'étudiante dont j'ai oublié le nom revient demain.",
      detail: { title: 'Au passé composé', body: "Le temps ne change rien à l'article. EN: the tense changes nothing about the article.", say: "L'étudiante dont j'ai oublié le nom revient demain." } },
    { cells: ['Sa voiture est en panne.', 'dont la voiture est en panne', 'dont sa voiture'],
      say: 'Le collègue dont la voiture est en panne prend le bus.',
      detail: { title: 'Et le verbe principal arrive', body: "Après la relative, la phrase repart : prend le bus. EN: after the clause the sentence restarts on its own verb.", say: 'Le collègue dont la voiture est en panne prend le bus.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['possesseur', 'motdont'],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis la possession',
  frSub: 'Le possessif tombe, l’article reste',
  groups: [
    grp('Les phrases de départ', [
      it(E(1264), 'son fils'),
      it(E(1266), 'sa porte'),
      it(E(1268), 'son frère'),
      it(E(1270), 'ses fenêtres'),
    ], chk('Quel mot va disparaître quand tu colleras ces phrases ?',
      ['le verbe', 'le possessif', 'le nom'], 1,
      "dont dira le propriétaire à sa place. EN: dont will say the owner instead.")),
    grp('La chose possédée fait le verbe', [
      it(E(1265), 'le fils est médecin'),
      it(E(1267), 'la porte est bleue'),
      it(E(1272), 'la voiture est en panne'),
      it('fr.b1.sports-et-loisirs.080', 'les membres sont motivés'),
    ], chk('Dans « la maison dont la porte est bleue », qui est à vendre ?',
      ['la maison', 'la porte'], 0,
      "La relative décrit la maison. Le verbe principal arrive après. EN: the clause describes the house; the main verb comes after.")),
    grp('La chose possédée arrive après le verbe', [
      it(E(1269), 'je connais le frère'),
      it(E(1273), "j'ai oublié le nom"),
      it(E(1276), 'nous lisons le livre'),
      it(E(1283), "j'ai gardé les clés"),
    ], chk("Pourquoi « le frère » vient-il après « je connais » ?",
      ["parce qu'il est le sujet", "parce qu'il subit l'action de connaître"], 1,
      "La phrase courte disait « je connais son frère ». L'ordre ne bouge pas. EN: the short sentence already had that order.")),
    ctl('Le contrôle', "« Le club dont ... membres sont motivés. » Quel mot ?",
      ['ses', 'des', 'les'], 2,
      "les. Après dont, jamais un possessif. EN: les. After dont, never a possessive."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['possesseur', 'motdont'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  title: 'Quand la chose possédée est une personne',
  frSub: 'Et quand elle ne l’est pas',
  examples: [
    ex(E(1274), 'un restaurant possède un chef'),
    ex(E(1277), 'un immeuble possède un concierge'),
    ex(E(1275), 'une rue possède ses arbres'),
    ex(E(1279), 'un dossier possède ses pages'),
    ex(E(1278), 'et une amie possède une sœur'),
    ex('fr.b2.traditions.006', "une fête possède une origine, entre deux virgules"),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['possesseur'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Le piège du possessif',
  frSub: 'Quatre étapes',
  rule: {
    title: 'dont son ne se dit pas',
    body: "En anglais, whose son ne dit le propriétaire qu'une fois. En français, dont le dit déjà : ajouter son le dirait deux fois. EN: whose says the owner once; in French dont already does, so a possessive says it twice.",
  },
  cards: [
    { promptLabel: 'dont son', promptSound: 'La femme dont son fils est médecin habite en face.',
      fr: 'La femme dont le fils est médecin habite en face.',
      ipa: '/la fam dɔ̃ lə fis ɛ med.sɛ̃ a.bit ɑ̃ fas/',
      tip: "dont dit déjà de qui est le fils. EN: dont already says whose son it is." },
    { promptLabel: 'dont sa', promptSound: 'La maison dont sa porte est bleue est à vendre.',
      fr: 'La maison dont la porte est bleue est à vendre.',
      ipa: '/la mɛ.zɔ̃ dɔ̃ la pɔʁt ɛ blø ɛ.t a vɑ̃dʁ/',
      tip: 'la, pas sa. Le féminin ne change pas la règle. EN: la, not sa.' },
    { promptLabel: 'dont ses', promptSound: "L'appartement dont ses fenêtres donnent sur la cour est plus calme.",
      fr: "L'appartement dont les fenêtres donnent sur la cour est plus calme.",
      ipa: '/la.paʁ.tə.mɑ̃ dɔ̃ le fə.nɛtʁ dɔn syʁ la kuʁ ɛ ply kalm/',
      tip: 'les, pas ses. Le pluriel non plus. EN: les, not ses.' },
    { promptLabel: 'le possessif au milieu', promptSound: 'La voisine dont je connais son frère travaille ici.',
      fr: "La voisine dont je connais le frère travaille à l'hôpital.",
      ipa: '/la vwa.zin dɔ̃ ʒə kɔ.nɛ lə fʁɛʁ tʁa.vaj a lɔ.pi.tal/',
      tip: "Même caché derrière le verbe, le possessif est de trop. EN: even hidden behind the verb, the possessive is one too many." },
    { promptLabel: 'que pour une possession', promptSound: 'Le collègue que la voiture est en panne prend le bus.',
      fr: 'Le collègue dont la voiture est en panne prend le bus.',
      ipa: '/lə kɔ.lɛɡ dɔ̃ la vwa.tyʁ ɛ.t ɑ̃ pan pʁɑ̃ lə bys/',
      tip: "La phrase courte disait « SA voiture », donc de : dont. EN: the short sentence said SA, which means de, which means dont." },
    { promptLabel: 'le verbe principal oublié', promptSound: "L'étudiante dont j'ai oublié le nom.",
      fr: "L'étudiante dont j'ai oublié le nom revient demain.",
      ipa: '/le.ty.djɑ̃t dɔ̃ ʒe u.bli.je lə nɔ̃ ʁə.vjɛ̃ də.mɛ̃/',
      tip: "Après la relative, la phrase doit repartir. EN: after the clause, the sentence has to restart." },
  ],
  drill: [
    { promptSay: 'La femme dont ... fils est médecin habite en face.', opts: ['le', 'son'], correct: 0 },
    { promptSay: 'La maison dont ... porte est bleue est à vendre.', opts: ['sa', 'la'], correct: 1 },
    { promptSay: "L'appartement dont ... fenêtres donnent sur la cour.", opts: ['les', 'ses'], correct: 0 },
    { promptSay: 'La voisine dont je connais ... frère travaille ici.', opts: ['son', 'le'], correct: 1 },
    { promptSay: 'Le collègue ... la voiture est en panne prend le bus.', opts: ['dont', 'que'], correct: 0 },
    { promptSay: "L'étudiante dont j'ai oublié ... nom revient demain.", opts: ['son', 'le'], correct: 1 },
    { promptSay: 'Le restaurant dont ... chef vient de Lyon ouvre à six heures.', opts: ['le', 'son'], correct: 0 },
    { promptSay: 'La rue dont ... arbres ont été coupés est méconnaissable.', opts: ['ses', 'les'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'dont son ne se dit pas' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-12-piege-possession'),
  say: REFRAME,
  terms: ['possesseur', 'motdont'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui possède quoi',
  frSub: 'Huit phrases, sans le texte',
  lines: [
    ln(E(1265)), ln(E(1269)), ln(E(1272)), ln(E(1274)),
    ln(E(1278)), ln(E(1283)), ln(E(1279)), ln(E(1271)),
  ],
  questions: [
    { q: 'Première phrase : qui habite en face ?', opts: ['la femme', 'le fils'], correct: 0,
      why: "Le fils est médecin ; c'est la femme qui habite. EN: the son is a doctor, the woman lives there." },
    { q: 'Deuxième phrase : qui travaille à l’hôpital ?', opts: ['le frère', 'la voisine'], correct: 1,
      why: "La relative décrit la voisine, et le verbe principal la reprend. EN: the clause describes the neighbour." },
    { q: 'Quatrième phrase : le chef vient de...', opts: ['Lyon', 'Genève', 'Bruxelles'], correct: 0,
      why: "« dont le chef vient de Lyon ». EN: from Lyon." },
    { q: 'Sixième phrase : qui a gardé les clés ?', opts: ['la personne qui parle', 'le voisin'], correct: 0,
      why: "« dont j'ai gardé les clés » : le sujet de la relative est je. EN: the subject of the clause is je." },
    { q: 'Septième phrase : que manque-t-il au dossier ?', opts: ['la première page', 'la signature', 'la date'], correct: 0,
      why: "« dont la première page manque ». EN: the first page." },
  ],
  audio: REC('rec-b1-12-possession-ecoute'),
  say: REFRAME,
  terms: ['possesseur'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La chose possédée', 'Après dont, la chose possédée prend...',
    ['son, sa, ses', 'le, la, les', 'rien'], 1,
    "L'article, toujours. EN: the article, always."),
  ctl("L'ordre", "La phrase courte disait « je connais son frère ». La relative dit...",
    ['dont le frère je connais', 'dont je connais le frère'], 1,
    "L'ordre de la phrase courte est gardé. EN: the short sentence's order is kept."),
  ctl('Les choses aussi', 'Une maison peut-elle être le propriétaire dans une relative en dont ?',
    ['Oui, une porte appartient à une maison', 'Non, seulement les personnes'], 0,
    "dont ne trie pas entre personnes et choses. EN: dont does not sort people from things."),
], ['possesseur', 'motdont']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'dont, le possesseur',
    opener: {
      line: "Une femme, un fils, et un seul mot pour dire que le fils est le sien : ici tu apprends à ne pas le dire deux fois. EN: A woman, a son, and one word to say the son is hers: here you learn not to say it twice.",
      imageRef: 'lessons/dont-ou/act04.jpg',
    },
    sections: [],
    milestone: "Tu dis à qui est la chose avec dont, et la chose possédée prend son article. EN: You can say whose something is with dont, and the thing owned takes its article.",
    estScreens: 38,
    restPoints: ['a4-construire', 'a4-piege'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_TABLE, A4_CONSTRUIRE, A4_EXEMPLES, A4_PIEGE, A4_ECOUTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — OÙ : LE LIEU
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Six rues et un seul mot',
  frSub: 'Le quartier de Nadia',
  text: READING_VOISINAGE,
  glossary: [
    { word: 'une épicerie', en: 'a grocery shop', note: "Un petit magasin d'alimentation." },
    { word: 'le plancher', en: 'the floor', note: 'Le sol en bois d’une pièce.' },
    { word: 'craque', en: 'creaks', note: 'Il fait du bruit quand on marche dessus.' },
    { word: 'le centre commercial', en: 'the shopping centre', note: 'Un grand bâtiment plein de magasins.' },
  ],
  questions: [
    { q: 'Combien de lieux différents le texte décrit-il avec où ?', a: "Six : la rue, l'épicerie, l'immeuble, la pièce, le parc et la bibliothèque. Tous prennent le même mot." },
    { q: 'Quelle préposition la phrase courte aurait-elle utilisée pour « la rue où j’habite » ?', a: "« J'habite dans cette rue. » La préposition dans est entrée dans où et ne se réécrit pas." },
    { q: 'Que dit le texte de la différence entre where et in which ?', a: "Qu'elle n'existe pas en français : un seul mot, où, couvre les deux." },
    { q: 'Quel est le seul endroit où Nadia ne va jamais, et pourquoi ?', a: "Le centre commercial, parce qu'il est loin et laid." },
  ],
  audio: REC('rec-b1-12-quartier'),
  say: REFRAME,
  terms: ['motou', 'lieu'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ou',
  title: 'où avale la préposition',
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Cherche la préposition qui a disparu.',
  audio: REC('rec-b1-12-lieux'),
  say: REFRAME,
  terms: ['motou', 'lieu'],
  cards: [
    {
      head: 'dans devient où', label: 'la phrase de départ',
      fr: 'Je suis né dans cette ville.',
      sub: '[zhuh süee NAY dahⁿ set VEEL]',
      body: "La phrase courte dit dans. La relative ne le garde pas : elle dit où. EN: the short sentence says dans; the clause says où instead.",
    },
    {
      head: 'Un seul mot pour la place entière', label: 'où',
      fr: 'La ville où je suis né compte dix mille habitants.',
      sub: '[lah VEEL oo zhuh süee NAY · kohⁿt dee meel ah-bee-TAHⁿ]',
      body: "où porte la préposition et le nom repris, comme dont porte de. EN: où carries the preposition and the noun, just as dont carries de.",
    },
    {
      head: 'à, sur, chez aussi', label: 'toutes les prépositions de lieu',
      fr: 'La gare où tu descends est la troisième.',
      sub: '[lah GAR oo tü day-SAHⁿ · eh lah trwah-ZYEM]',
      body: "On descend À une gare, et la relative dit quand même où. EN: you get off AT a station, and the clause still says où.",
    },
    {
      head: 'Jamais de préposition devant', label: 'la faute à éviter',
      fr: "La rue où j'habite descend vers le fleuve.",
      sub: '[lah RÜ oo zhah-BEET · day-sahⁿ vehr luh FLUHV]',
      body: "Pas de « dans où », pas de « à où ». Le mot la contient déjà. EN: no dans où and no à où; the word already contains it.",
    },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis la relative de lieu',
  frSub: 'La préposition entre dans le mot',
  groups: [
    grp('Les phrases de départ', [
      it(E(1288), 'naître dans une ville'),
      it(E(1290), 'habiter dans une rue'),
      it('fr.a2.sports-et-loisirs.044', 'jouer dans un club'),
      it('fr.b1.cafe.007', 'lire dans un café'),
    ], chk('Quelle préposition ces phrases emploient-elles pour dire le lieu ?',
      ['toujours dans', 'aucune', 'dans, à, au : ça change'], 2,
      "Et pourtant la relative dira où dans les quatre cas. EN: and the clause says où in all four.")),
    grp('Les phrases collées', [
      it(E(1289), 'une ville'),
      it(E(1291), 'une rue'),
      it(E(1293), 'une bibliothèque'),
      it(E(1296), 'un pays'),
    ], chk('Combien de mots différents ces quatre relatives emploient-elles ?',
      ['un seul', 'deux', 'quatre'], 0,
      "où, quatre fois. L'anglais en aurait deux ou trois. EN: où, four times.")),
    grp('Des lieux plus larges', [
      it('fr.b2.communaute.006', 'une plateforme en ligne compte comme un endroit'),
      it(E(1295), 'une pièce'),
      it(E(1297), 'un café'),
      it(E(1299), 'une gare'),
    ], chk("« une plateforme en ligne où les citoyens peuvent proposer des idées » : pourquoi où ?",
      ['parce que le verbe réclame de', "parce qu'on la traite comme un endroit"], 1,
      "Un espace, même sans murs, reste un lieu. EN: a space, even without walls, is still a place.")),
    ctl('Le contrôle', "« La rue ... j'habite descend vers le fleuve. » Quel mot ?",
      ['dans où', 'où', 'que'], 1,
      "où seul. Rien devant. EN: où on its own, nothing in front."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motou', 'lieu'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  sheetId: 'sheet-ou',
  title: 'Six sortes de lieux',
  frSub: 'Du pays à la pièce',
  examples: [
    ex(E(1296), 'un pays'),
    ex(E(1289), 'une ville'),
    ex(E(1291), 'une rue'),
    ex(E(1300), 'un immeuble'),
    ex(E(1295), 'une pièce'),
    ex(E(1292), 'un commerce'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lieu'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de lieu',
  frSub: 'Trois viennent de l’anglais, une du français',
  errors: [
    { wrong: 'La ville que je suis né compte dix mille habitants.',
      right: 'La ville où je suis né compte dix mille habitants.',
      why: "Normal : en anglais the city I was born in n'a rien devant. Ici, la place du lieu est prise par où. EN: English puts nothing in front." },
    { wrong: "La rue dans où j'habite descend vers le fleuve.",
      right: "La rue où j'habite descend vers le fleuve.",
      why: "L'instinct est bon : tu cherches la préposition. Elle est déjà dans où. EN: the instinct is right; the preposition is already inside où." },
    { wrong: "La rue où j'habite dedans descend vers le fleuve.",
      right: "La rue où j'habite descend vers le fleuve.",
      why: "dedans à la fin est le même réflexe anglais, déplacé. EN: dedans at the end is the same English reflex, moved." },
    { wrong: 'Le pays où elle parle souvent est le Sénégal.',
      right: 'Le pays dont elle parle souvent est le Sénégal.',
      why: "Un pays est un lieu, et pourtant parler réclame de. Le verbe décide, pas le nom. EN: the verb decides, not the noun." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lieu', 'petitmot'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Quel endroit',
  frSub: 'Huit phrases, sans le texte',
  lines: [
    ln(E(1289)), ln('fr.b1.cafe.061'), ln(E(1291)), ln('fr.b1.maison.064'),
    ln(E(1293)), ln('fr.a2.sports-et-loisirs.035'), ln(E(1296)), ln('fr.b1.cafe.002'),
  ],
  questions: [
    { q: 'Première phrase : combien la ville compte-t-elle d’habitants ?',
      opts: ['cent mille', 'mille', 'dix mille'], correct: 2,
      why: "« compte dix mille habitants ». EN: ten thousand." },
    { q: 'Deuxième phrase : que s’est-il passé dans ce café ?',
      opts: ['une rencontre', 'un départ'], correct: 0,
      why: "« le café où nous nous sommes rencontrés ». EN: a meeting." },
    { q: 'Quatrième phrase : que cherchent ces personnes ?',
      opts: ['une maison', 'un appartement'], correct: 1,
      why: "« un appartement où les charges sont incluses ». EN: a flat." },
    { q: 'Sixième phrase : quel jour s’entraînent-ils ?',
      opts: ['le mardi', 'le jeudi', 'le samedi'], correct: 0,
      why: "« où ils s'entraînent le mardi ». EN: Tuesdays." },
    { q: 'Huitième phrase : ce café est le seul du quartier à permettre quoi ?',
      opts: ['de fumer en terrasse', 'de payer plus tard'], correct: 0,
      why: "« où l'on peut encore fumer en terrasse ». EN: smoking on the terrace." },
  ],
  audio: REC('rec-b1-12-lieux-ecoute'),
  say: REFRAME,
  terms: ['motou', 'lieu'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La préposition', "La phrase courte disait « dans cette rue ». La relative dit...",
    ['dans où', 'où', 'à où'], 1,
    "où seul : la préposition est dedans. EN: où on its own; the preposition is inside it."),
  ctl('Le mot à la fin', "« La rue où j'habite dedans » : que faut-il enlever ?",
    ['où', 'rien', 'dedans'], 2,
    `${REFRAME} EN: ${REFRAME_EN}`),
  ctl('Le nom ne décide pas', 'Un pays peut-il prendre dont ?',
    ['Non, un pays est un lieu', "Oui, si le verbe réclame de"], 1,
    "« le pays dont elle parle ». Le verbe décide. EN: the verb decides."),
], ['motou', 'lieu']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'où : le lieu',
    opener: {
      line: "Une rue, une pièce, un pays : l'anglais hésite entre deux mots, toi tu n'en as qu'un. EN: A street, a room, a country: English hesitates between two words, you only have one.",
      imageRef: 'lessons/dont-ou/act05.jpg',
    },
    sections: [],
    milestone: "Tu dis un lieu avec où, sans préposition devant ni derrière. EN: You can name a place with où, with no preposition in front of it or after it.",
    estScreens: 28,
    restPoints: ['a5-construire'],
  },
  sections: [A5_LECTURE, A5_CARTES, A5_CONSTRUIRE, A5_EXEMPLES, A5_ERREURS, A5_ECOUTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — OÙ : LE MOMENT
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The one an anglophone never produces, because English says when.
 *  NO « ? » OR « ! » IN ANY BUBBLE (house rule 6.4). */
const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Le jour où',
  frSub: 'Karim raconte sa première semaine',
  setting: "Karim raconte le jour de son arrivée. Il cherche le mot, et il prend celui de l'anglais.",
  bubbles: [
    { from: 'user', fr: "Le jour quand je suis arrivé, il neigeait.", en: 'The day I arrived, it was snowing.', warn: 'quand ne reprend pas un nom' },
    { from: 'coach', fr: 'Enlève le mot jour et relis ta phrase.', en: 'Take the word jour out and read your sentence again.' },
    { from: 'user', fr: "Quand je suis arrivé, il neigeait.", en: 'When I arrived, it was snowing.' },
    { from: 'coach', fr: "Parfait, et il n'y a plus de nom devant. quand ouvre une phrase entière, il ne reprend jamais un nom écrit juste avant.", en: 'Perfect, and there is no noun in front any more. quand opens a whole clause; it never picks up a noun written just before it.' },
    { from: 'user', fr: 'Alors, le jour où je suis arrivé.', en: 'So, the day I arrived.' },
    { from: 'coach', fr: "Oui. Un moment se traite comme un endroit : les deux prennent où.", en: 'Yes. A moment is treated like a place: both take où.' },
  ],
  closing: { fr: "L'anglais a where et when. Le français n'a que où, et il sert aux deux.", en: 'English has where and when. French only has où, and it serves both.' },
  audio: REC('rec-b1-12-jour'),
  say: REFRAME,
  terms: ['moment', 'motou'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ou',
  title: 'où pour un moment',
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Le mot est le même que pour les lieux.',
  audio: REC('rec-b1-12-moments'),
  say: REFRAME,
  terms: ['moment', 'motou'],
  cards: [
    {
      head: 'Le groupe de temps entier disparaît', label: 'la phrase de départ',
      fr: "Je l'ai rencontrée ce jour-là.",
      sub: '[zhuh lay rahⁿ-kohⁿ-TRAY suh zhoor LAH]',
      body: "« ce jour-là » nomme le moment. La relative le reprend d'un seul mot. EN: the whole time group is picked up by one word.",
    },
    {
      head: 'Et où le remplace', label: 'où',
      fr: "Le jour où je l'ai rencontrée, il neigeait.",
      sub: '[luh ZHOOR oo zhuh lay rahⁿ-kohⁿ-TRAY · eel neh-ZHEH]',
      body: "Même mot que pour une rue ou une ville. Un moment est traité comme un endroit. EN: same word as for a street or a city.",
    },
    {
      head: 'Six noms de temps', label: 'la liste',
      fr: "le jour · l'année · le moment",
      sub: '[luh ZHOOR] · [lah-NAY] · [luh moh-MAHⁿ]',
      body: "Et trois autres : la semaine, l'heure, l'époque. Tous prennent où. EN: and three more, all taking où.",
    },
    {
      head: 'quand fait un autre travail', label: 'la faute à éviter',
      fr: "Quand je suis arrivé, il neigeait.",
      sub: '[kahⁿ zhuh süee zah-ree-VAY · eel neh-ZHEH]',
      body: "quand ouvre une phrase entière et ne veut aucun nom devant lui. EN: quand opens a whole clause and wants no noun in front of it.",
    },
  ],
};

const A6_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-table',
  layer: 'core',
  sheetId: 'sheet-ou',
  title: 'Six noms de temps',
  frSub: 'Touche une ligne',
  cols: ['Le nom', 'La relative', 'La faute'],
  rows: [
    { cells: ['le jour', "le jour où je l'ai rencontrée", 'le jour quand'],
      say: "Le jour où je l'ai rencontrée, il neigeait.",
      detail: { title: 'le jour où', body: "Le plus fréquent des six, et celui que l'anglais traduit toujours par when. EN: the commonest of the six, and the one English always renders as when.", say: "Le jour où j'ai signé le bail était un vendredi." } },
    { cells: ["l'année", "l'année où nous avons déménagé", "l'année quand"],
      say: "L'année où nous avons déménagé, tout a changé.",
      detail: { title: "l'année où", body: 'Une année entière reste un point sur la ligne du temps. EN: a whole year is still one point on the timeline.', say: "L'année où elle a commencé ses études a été la plus dure." } },
    { cells: ['le moment', 'le moment où il a appelé', 'le moment quand'],
      say: 'Le moment où il a appelé était très mal choisi.',
      detail: { title: 'au moment où', body: "La locution « au moment où » veut dire juste quand ça arrive. EN: au moment où means just as it happens.", say: 'Au moment où tu arrives, le magasin ferme.' } },
    { cells: ['la semaine', 'la semaine où elle est partie', 'la semaine quand'],
      say: 'La semaine où elle est partie, le bureau était vide.',
      detail: { title: 'la semaine où', body: 'Le jour, la semaine, le mois, la saison : tous pareils. EN: day, week, month, season: all the same.', say: 'Le printemps où le fleuve est monté, la rue était fermée.' } },
    { cells: ["l'heure", "l'heure où le train arrive", "l'heure quand"],
      say: "L'heure où le train arrive dépend du trafic.",
      detail: { title: "l'heure où", body: 'Même une heure précise prend où. EN: even an exact time takes où.', say: "L'heure où le train arrive dépend du trafic." } },
    { cells: ["l'époque", "l'époque où on roulait sans casque", "l'époque quand"],
      say: "L'époque où on roulait sans casque est finie.",
      detail: { title: "l'époque où", body: "Une période longue et floue prend où elle aussi. EN: a long, vague period takes où too.", say: "La fois où j'ai oublié mes clés reste mémorable." } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['moment', 'motou'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis la relative de temps',
  frSub: 'Le groupe de temps devient un mot',
  groups: [
    grp('Les phrases de départ', [
      it(E(1306), 'ce jour-là'),
      it(E(1308), 'cette année-là'),
      it('fr.a2.heure-et-date.143', "l'année dernière"),
      it('fr.a1.jours-et-mois.115', "le jour de son anniversaire"),
    ], chk('Que nomment ces quatre groupes de mots ?',
      ['un moment', 'un lieu', 'une personne'], 0,
      "Et un moment se traite comme un lieu. EN: and a moment is treated like a place.")),
    grp('Les phrases collées', [
      it(E(1307), 'un jour'),
      it(E(1309), 'une année'),
      it(E(1312), 'une semaine'),
      it(E(1315), 'un soir'),
    ], chk("Ces quatre relatives commencent toutes par...",
      ['quand', 'où', 'que'], 1,
      "Le même mot que pour un lieu. EN: the same word as for a place.")),
    grp('Des périodes plus longues', [
      it(E(1314), 'une époque'),
      it(E(1318), 'un printemps'),
      it('fr.b1.heure-et-date.039', "à la même époque, sans relative"),
      it(E(1317), 'une fois'),
    ], chk("« L'époque où on roulait sans casque » : pourquoi pas quand ?",
      ["parce qu'il y a un nom devant", 'parce que la phrase est au passé'], 0,
      "quand ne veut aucun nom devant lui. EN: quand wants no noun in front of it.")),
    ctl('Le contrôle', "« Le jour ... je suis arrivé, il neigeait. » Quel mot ?",
      ['quand', 'que', 'où'], 2,
      "Un nom de temps devant, donc où. EN: a time noun in front, so où."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['moment', 'motou'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Le piège du quand',
  frSub: 'Quatre étapes',
  rule: {
    title: 'où a besoin d’un nom, quand n’en veut pas',
    body: "Regarde ce qui est écrit juste avant le trou. Un nom de temps : où. Rien du tout : quand. C'est le seul test. EN: a time noun gives où, nothing at all gives quand.",
  },
  cards: [
    { promptLabel: 'le jour quand', promptSound: "Le jour quand je l'ai rencontrée, il neigeait.",
      fr: "Le jour où je l'ai rencontrée, il neigeait.",
      ipa: '/lə ʒuʁ u ʒə le ʁɑ̃.kɔ̃.tʁe il nɛ.ʒɛ/',
      tip: 'Un nom devant, donc où. EN: a noun in front, so où.' },
    { promptLabel: "l'année quand", promptSound: "L'année quand nous avons déménagé, tout a changé.",
      fr: "L'année où nous avons déménagé, tout a changé.",
      ipa: '/la.ne u nu.za.vɔ̃ de.me.na.ʒe tu.t a ʃɑ̃.ʒe/',
      tip: "L'anglais dit when, et c'est exactement le piège. EN: English says when, and that is the trap." },
    { promptLabel: 'que pour un moment', promptSound: "Le moment que il a appelé était mal choisi.",
      fr: 'Le moment où il a appelé était très mal choisi.',
      ipa: '/lə mɔ.mɑ̃ u il a a.pə.le e.tɛ tʁɛ mal ʃwa.zi/',
      tip: "que servirait si le moment subissait l'action. Ici il situe. EN: que would serve if the moment were acted on." },
    { promptLabel: 'la préposition gardée', promptSound: "Le soir dans où nous avons visité, il pleuvait.",
      fr: "Le soir où nous avons visité l'appartement, il pleuvait.",
      ipa: '/lə swaʁ u nu.za.vɔ̃ vi.zi.te la.paʁ.tə.mɑ̃ il plø.vɛ/',
      tip: "où contient déjà le groupe de temps entier. EN: où already contains the whole time group." },
    { promptLabel: 'quand sans nom, correct', promptSound: "Où je suis arrivé, il neigeait.",
      fr: "Quand je suis arrivé, il neigeait.",
      ipa: '/kɑ̃ ʒə sɥi.z a.ʁi.ve il nɛ.ʒɛ/',
      tip: "Sans nom devant, c'est quand qu'il faut. La faute existe dans les deux sens. EN: with no noun in front, quand is what is needed." },
    { promptLabel: 'la fois quand', promptSound: "La fois quand j'ai oublié mes clés reste mémorable.",
      fr: "La fois où j'ai oublié mes clés reste mémorable.",
      ipa: '/la fwa u ʒe u.bli.je me kle ʁɛst me.mɔ.ʁabl/',
      tip: 'une fois est un nom de temps comme les autres. EN: une fois is a time noun like the rest.' },
  ],
  drill: [
    { promptSay: "Le jour ... je l'ai rencontrée, il neigeait.", opts: ['quand', 'où'], correct: 1 },
    { promptSay: '... je suis arrivé, il neigeait.', opts: ['Quand', 'Où'], correct: 0 },
    { promptSay: "L'année ... nous avons déménagé, tout a changé.", opts: ['quand', 'où'], correct: 1 },
    { promptSay: 'Le moment ... il a appelé était mal choisi.', opts: ['où', 'quand'], correct: 0 },
    { promptSay: '... tu arriveras, appelle-moi.', opts: ['Où', 'Quand'], correct: 1 },
    { promptSay: "L'heure ... le train arrive dépend du trafic.", opts: ['où', 'quand'], correct: 0 },
    { promptSay: "La fois ... j'ai oublié mes clés reste mémorable.", opts: ['quand', 'où'], correct: 1 },
    { promptSay: "Le printemps ... le fleuve est monté, la rue était fermée.", opts: ['où', 'quand'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Regarde ce qui est écrit devant' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-12-piege-moment'),
  say: REFRAME,
  terms: ['moment', 'motou'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Quel moment',
  frSub: 'Huit phrases, sans le texte',
  lines: [
    ln(E(1307)), ln(E(1311)), ln(E(1312)), ln(E(1315)),
    ln(E(1317)), ln(E(1320)), ln(E(1313)), ln(E(1319)),
  ],
  questions: [
    { q: 'Première phrase : quel temps faisait-il ?', opts: ['il pleuvait', 'il neigeait'], correct: 1,
      why: "« il neigeait ». La relative de temps ouvre la phrase. EN: it was snowing." },
    { q: 'Troisième phrase : comment était le bureau ?', opts: ['vide', 'plein'], correct: 0,
      why: "« le bureau était vide ». EN: empty." },
    { q: 'Cinquième phrase : quel objet a été oublié ?', opts: ['des clés', 'un dossier', 'un manteau'], correct: 0,
      why: "« la fois où j'ai oublié mes clés ». EN: keys." },
    { q: 'Sixième phrase : que fait le magasin ?', opts: ['il ouvre', 'il ferme'], correct: 1,
      why: "« au moment où tu arrives, le magasin ferme ». EN: it closes." },
    { q: 'Huitième phrase : combien de personnes sont venues ?', opts: ['personne', 'beaucoup de monde'], correct: 0,
      why: "« personne n'est venu ». EN: nobody." },
  ],
  audio: REC('rec-b1-12-moments-ecoute'),
  say: REFRAME,
  terms: ['moment'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  title: 'Le lieu et le moment, côte à côte',
  frSub: 'Le même mot, deux fois trois',
  examples: [
    ex(E(1291), 'un lieu : une rue'),
    ex(E(1307), 'un moment : un jour'),
    ex(E(1293), 'un lieu : une bibliothèque'),
    ex(E(1309), 'un moment : une année'),
    ex(E(1299), 'un lieu : une gare'),
    ex(E(1313), 'un moment : une heure'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lieu', 'moment', 'motou'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le test', 'Pour choisir entre où et quand, tu regardes...',
    ['le temps du verbe', 'ce qui est écrit juste devant', 'la longueur de la phrase'], 1,
    "Un nom de temps devant : où. Rien : quand. EN: a time noun gives où, nothing gives quand."),
  ctl("L'anglais", "L'anglais a where et when. Le français a...",
    ['deux mots aussi', 'un seul mot pour les deux'], 1,
    "où sert aux lieux et aux moments. EN: où serves places and moments alike."),
  ctl('quand reste utile', 'quand sert encore à...',
    ['poser une question ou ouvrir une phrase', 'reprendre un nom'], 0,
    "« Quand pars-tu » reste parfait. EN: quand is still perfect as a question word."),
], ['moment', 'motou']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'où : le moment',
    opener: {
      line: "Le jour où, l'année où, le moment où : ici tu apprends le mot que l'anglais ne te souffle jamais. EN: The day, the year, the moment: here you learn the word English never prompts you with.",
      imageRef: 'lessons/dont-ou/act06.jpg',
    },
    sections: [],
    milestone: "Tu dis un moment avec où, et tu gardes quand pour les questions. EN: You can name a moment with où, and you keep quand for questions.",
    estScreens: 38,
    restPoints: ['a6-construire', 'a6-piege'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_TABLE, A6_CONSTRUIRE, A6_PIEGE, A6_ECOUTE, A6_EXEMPLES, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — À QUI, AVEC QUI, CHEZ QUI
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La lettre de la coopérative',
  frSub: 'Cinq prépositions, cinq personnes',
  text: READING_LETTRE,
  glossary: [
    { word: 'coopérative', en: 'housing co-op', note: "Un immeuble géré par ses habitants. EN: a building run by the people who live in it." },
    { word: 'loyer', en: 'rent', note: 'Ce que tu paies chaque mois pour habiter.' },
    { word: 'le chauffage', en: 'the heating', note: 'Ce qui chauffe le logement en hiver.' },
    { word: 'le stationnement', en: 'the parking space', note: "L'endroit où on gare la voiture, au Québec." },
  ],
  questions: [
    { q: 'Quelles cinq prépositions la lettre emploie-t-elle devant qui ?', a: "à, avec, chez, pour et sans. Toutes les cinq sont écrites en entier, juste devant qui." },
    { q: 'Où se trouve la préposition dans chacune de ces phrases ?', a: "Au début de la relative, jamais à la fin. C'est ce que la dernière ligne du texte souligne." },
    { q: "Pourquoi « les voisins chez qui vous pouvez laisser un colis » et non « où » ?", a: "Parce que le nom de devant est une personne, pas un endroit. chez qui désigne les voisins, chez eux désignerait leur logement." },
    { q: "Que dit le texte de l'anglais ?", a: "Que quatre de ces cinq phrases finiraient par leur préposition en anglais, et qu'aucune ne le peut en français." },
  ],
  audio: REC('rec-b1-12-cooperative'),
  say: REFRAME,
  terms: ['personne', 'devant'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-personnes',
  title: 'La préposition reste écrite',
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Regarde les deux mots qui ouvrent la relative.',
  audio: REC('rec-b1-12-personnes'),
  say: REFRAME,
  terms: ['personne', 'devant'],
  cards: [
    {
      head: 'Le verbe réclame à', label: 'à qui',
      fr: "La personne à qui j'ai écrit travaille au bureau du logement.",
      sub: '[lah pehr-SONN ah kee zhay ay-KREE · trah-vahy oh bü-roh dü lozh-MAHⁿ]',
      body: "On écrit À quelqu'un. Le à ne fusionne pas : il s'écrit, puis qui. EN: the à does not fuse; it is written, then qui.",
    },
    {
      head: 'Avec une personne', label: 'avec qui',
      fr: 'Le collègue avec qui je pars connaît bien la route.',
      sub: '[luh koh-LEG ah-vek kee zhuh PAR · koh-neh byehⁿ lah ROOT]',
      body: "avec, pour et sans marchent exactement pareil. EN: avec, pour and sans all work in exactly the same way.",
    },
    {
      head: 'Chez quelqu’un', label: 'chez qui',
      fr: "Les amis chez qui j'ai dormi habitent près du parc.",
      sub: '[lay zah-MEE shay kee zhay dor-MEE · ah-beet preh dü PARK]',
      body: "chez désigne la personne, pas le logement : donc qui, et non où. EN: chez points at the person, not the home, so qui and not où.",
    },
    {
      head: 'Seulement pour les personnes', label: 'la limite',
      fr: "La personne à qui je pense n'est pas dans la salle.",
      sub: '[lah pehr-SONN ah kee zhuh PAHⁿSS · neh pa dahⁿ lah SAL]',
      body: `Pour une chose, il faudrait un autre mot, et ${LEQUEL_REF} s'en occupe. EN: a thing would need another word, and the next lesson owns it.`,
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis la relative avec préposition',
  frSub: 'Deux mots pour ouvrir',
  groups: [
    grp('Les phrases de départ', [
      it(E(1328), 'écrire à'),
      it(E(1330), 'partir avec'),
      it(E(1332), 'dormir chez'),
      it('fr.b1.famille.018', 'se retrouver chez'),
    ], chk("Ces quatre prépositions vont-elles fusionner comme de et dans ?",
      ['Oui, elles disparaissent', 'Non, elles restent écrites'], 1,
      "Seuls de et les prépositions de lieu fusionnent. EN: only de and the place prepositions fuse.")),
    grp('Les phrases collées', [
      it(E(1329), 'à qui'),
      it(E(1331), 'avec qui'),
      it(E(1333), 'chez qui'),
      it(E(1334), 'pour qui'),
    ], chk("Quel pronom suit la préposition dans les quatre cas ?",
      ['que', 'où', 'qui'], 2,
      "qui, même quand la personne subit l'action. EN: qui, even when the person is acted on.")),
    grp('Les questions le font déjà', [
      it('fr.a1.questions.378', 'avec qui, dans une question'),
      it('fr.a1.questions.016', 'avec qui, encore'),
      it('fr.a2.prepositions-essentielles.151', 'chez toi, sans relative'),
      it(E(1337), 'et la même chose dans une relative'),
    ], chk("« Avec qui est-ce que tu pars » et « le collègue avec qui je pars » : le groupe avec qui est...",
      ['le même', 'différent'], 0,
      "Tu connais déjà la forme : elle change seulement de place. EN: you already know the shape; only its position changes.")),
    ctl('Le contrôle', "« Les amis ... j'ai dormi habitent près du parc. » Quel groupe ?",
      ['chez qui', 'où', 'que'], 0,
      "Les amis sont des personnes, et dormir chez eux réclame chez. EN: they are people, and dormir needs chez."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['personne', 'petitmot'],
};

const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-exemples',
  layer: 'core',
  sheetId: 'sheet-personnes',
  title: 'Cinq prépositions au travail',
  frSub: 'Toujours devant qui',
  examples: [
    ex(E(1336), 'à qui : remettre à'),
    ex(E(1337), 'avec qui : partager avec'),
    ex(E(1338), 'chez qui : loger chez'),
    ex(E(1334), 'pour qui : garder pour'),
    ex(E(1335), 'sans qui : ne pas marcher sans'),
    ex(E(1339), 'à qui : penser à'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['personne'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de personne',
  frSub: 'Trois viennent de l’anglais',
  errors: [
    { wrong: "La personne que j'ai parlé hier m'a tout expliqué.",
      right: "La personne à qui j'ai parlé hier m'a tout expliqué.",
      why: "Normal : en anglais the person I spoke to n'a rien devant. Parler réclame à. EN: parler needs à, and English puts nothing in front." },
    { wrong: 'Le collègue que je pars avec connaît bien la route.',
      right: 'Le collègue avec qui je pars connaît bien la route.',
      why: "La préposition est là, mais restée à l'anglaise, tout au bout. EN: the preposition is there, but left at the end, English style." },
    { wrong: "La personne à que j'ai écrit travaille ici.",
      right: "La personne à qui j'ai écrit travaille au bureau du logement.",
      why: "Après une préposition, c'est qui, jamais que, même pour un complément. EN: after a preposition it is always qui, never que." },
    { wrong: "Les amis où j'ai dormi habitent près du parc.",
      right: "Les amis chez qui j'ai dormi habitent près du parc.",
      why: "où marche pour un lieu. Des amis sont des personnes, même quand on dort chez eux. EN: friends are people, even when you sleep at their place." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['personne', 'devant'],
};

const A7_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a7-dictee',
  layer: 'core',
  title: 'Écris les phrases que tu entends',
  frSub: 'La préposition et qui, collés',
  itemIds: dicteeFor(7),
  audio: AUDIO,
  say: REFRAME,
  terms: ['personne'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le pronom', 'Après une préposition, on écrit...',
    ['que', 'qui', 'où'], 1,
    "qui, toujours, même si la personne subit l'action. EN: qui, always."),
  ctl('La fusion', 'Quelles prépositions fusionnent dans un seul mot ?',
    ['toutes', 'aucune', 'de et les prépositions de lieu'], 2,
    "de donne dont, un lieu donne où. Les autres restent écrites. EN: only de and place prepositions fuse."),
  ctl('chez ou où', "« Les amis ... j'ai dormi » : chez qui ou où ?",
    ['où, parce que je dors quelque part', 'chez qui, parce que ce sont des personnes'], 1,
    "Le nom de devant est une personne. EN: the noun in front is a person."),
], ['personne', 'petitmot']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'à qui, avec qui, chez qui',
    opener: {
      line: "Devant une personne, la préposition ne se cache pas : elle s'écrit en entier, et qui la suit. EN: In front of a person the preposition does not hide: it is written in full, and qui follows it.",
      imageRef: 'lessons/dont-ou/act07.jpg',
    },
    sections: [],
    milestone: "Tu écris à qui, avec qui, chez qui, pour qui et sans qui, avec la préposition devant. EN: You can write à qui, avec qui, chez qui, pour qui and sans qui, with the preposition in front.",
    estScreens: 30,
    restPoints: ['a7-construire'],
  },
  sections: [A7_LECTURE, A7_CARTES, A7_CONSTRUIRE, A7_EXEMPLES, A7_ERREURS, A7_DICTEE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — JAMAIS À LA FIN
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (house rule 6.4). */
const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'La préposition qui traîne',
  frSub: 'Nadia relit son courriel',
  setting: "Nadia écrit à la coopérative. Elle construit ses phrases comme en anglais, et chacune finit par un petit mot suspendu.",
  bubbles: [
    { from: 'user', fr: 'La personne que je travaille avec vient aussi.', en: 'The person I work with is coming too.', warn: 'avec reste suspendu à la fin' },
    { from: 'coach', fr: 'Prends le mot avec et mets-le devant qui.', en: 'Take the word avec and put it in front of qui.' },
    { from: 'user', fr: "La personne avec qui je travaille s'appelle Awa.", en: 'The person I work with is called Awa.' },
    { from: 'coach', fr: "Voilà. Et maintenant celle-ci : l'ami que j'attends pour.", en: 'There. And now this one: the friend I am waiting for.' },
    { from: 'user', fr: "L'ami pour qui j'attends.", en: 'The friend for whom I am waiting.', warn: 'Ici il ne fallait aucune préposition' },
    { from: 'coach', fr: "Non. attendre est direct en français : l'ami que j'attends. L'anglais ajoute un for que le français ne demande pas.", en: 'No. attendre is direct in French. English adds a for that French does not ask for.' },
  ],
  closing: { fr: 'Deux pièges opposés : la préposition qui reste à la fin, et celle qui ne devrait pas être là du tout.', en: 'Two opposite traps: the preposition left at the end, and the one that should not be there at all.' },
  audio: REC('rec-b1-12-courriel'),
  say: REFRAME,
  terms: ['devant', 'petitmot'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-choix',
  title: 'Devant, dedans, ou nulle part',
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Cherche où la préposition a fini.',
  audio: REC('rec-b1-12-fin'),
  say: REFRAME,
  terms: ['devant', 'petitmot'],
  cards: [
    {
      head: 'Devant, écrite en entier', label: 'une personne',
      fr: "La personne avec qui je travaille s'appelle Awa.",
      sub: '[lah pehr-SONN ah-vek kee zhuh trah-VAHY · sah-pel ah-WAH]',
      body: "L'anglais finit par with. Le français commence par avec. EN: English ends with it, French starts with it.",
    },
    {
      head: 'Dedans, fondue dans le mot', label: 'de et les lieux',
      fr: 'Le village dont je viens compte trois cents habitants.',
      sub: '[luh vee-LAZH dohⁿ zhuh VYEHⁿ · kohⁿt trwah sahⁿ ah-bee-TAHⁿ]',
      body: "venir de donne dont ; travailler dans donne où. La préposition est dans le mot. EN: the preposition is inside the word.",
    },
    {
      head: 'Nulle part, parce que le verbe est direct', label: 'attendre, chercher',
      fr: "L'ami que j'attends arrive à midi.",
      sub: '[lah-MEE kuh zhah-TAHⁿ · ah-reev ah mee-DEE]',
      body: "attendre quelqu'un, sans for. Ici l'anglais en met une de trop. EN: here it is English that adds one too many.",
    },
    {
      head: 'Les quatre verbes à surveiller', label: 'la liste',
      fr: 'attendre · chercher · écouter',
      sub: '[ah-TAHⁿDR] · [shehr-SHAY] · [ay-koo-TAY]',
      body: "Et regarder. Tous directs en français, tous indirects en anglais. EN: and regarder: all direct in French, all indirect in English.",
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Range la préposition',
  frSub: 'Devant, dedans ou nulle part',
  groups: [
    grp('Elle est écrite devant', [
      it(E(1350), 'travailler avec'),
      it(E(1356), 'répondre à'),
      it(E(1359), 'aller dîner chez'),
      it(E(1362), 'voyager avec'),
    ], chk('Où se trouve la préposition dans ces quatre phrases ?',
      ['juste avant qui', 'à la fin', 'nulle part'], 0,
      "Elle ouvre la relative, comme toujours. EN: it opens the clause, as always.")),
    grp('Elle est dedans', [
      it(E(1348), 'venir de'),
      it(E(1349), 'travailler dans'),
      it(E(1357), 'avoir peur de'),
      it(E(1358), "s'occuper de"),
    ], chk("Dans « le bureau où je travaille », où est passé le mot dans ?",
      ['à la fin', 'dans le mot où', 'il a disparu du sens'], 1,
      "où le contient. Le sens ne perd rien. EN: où contains it, and nothing is lost.")),
    grp("Elle n'existe pas", [
      it(E(1352), 'attendre'),
      it(E(1353), 'chercher'),
      it(E(1354), 'écouter'),
      it(E(1355), 'regarder'),
    ], chk("« The friend I am waiting for » : combien de prépositions en français ?",
      ['aucune', 'une'], 0,
      "attendre est direct : « l'ami que j'attends ». EN: attendre is direct.")),
    ctl('Le contrôle', "« Je m'occupe de ce colis. » La relative commence par...",
      ['que', 'de qui', 'dont'], 2,
      "s'occuper de, donc dont. EN: s'occuper takes de, so dont."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['devant', 'petitmot'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  title: "Là où l'anglais met un mot en trop",
  frSub: 'Quatre verbes directs',
  examples: [
    ex(E(1352), "attendre : I am waiting FOR, et rien en français"),
    ex(E(1353), 'chercher : I am looking FOR'),
    ex(E(1354), 'écouter : I listen TO'),
    ex(E(1355), 'regarder : we are looking AT'),
    ex('fr.a2.metiers.066', "s'occuper de, lui, garde bien son de"),
    ex('fr.a2.metiers.071', 'et le garde au singulier aussi'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['petitmot'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Le piège de la fin de phrase',
  frSub: 'Quatre étapes',
  rule: {
    title: 'Rien ne reste suspendu',
    body: "En anglais la préposition peut attendre la fin de la phrase. En français elle ouvre la relative, ou bien elle est déjà dans dont et où. EN: in French it opens the clause, or it is already inside dont and où.",
  },
  cards: [
    { promptLabel: 'avec à la fin', promptSound: 'La personne que je travaille avec vient aussi.',
      fr: "La personne avec qui je travaille s'appelle Awa.",
      ipa: '/la pɛʁ.sɔn a.vɛk ki ʒə tʁa.vaj sa.pɛl a.wa/',
      tip: 'avec passe devant qui. EN: avec moves in front of qui.' },
    { promptLabel: 'de à la fin', promptSound: 'Le village que je viens de compte trois cents habitants.',
      fr: 'Le village dont je viens compte trois cents habitants.',
      ipa: '/lə vi.laʒ dɔ̃ ʒə vjɛ̃ kɔ̃t tʁwa sɑ̃ a.bi.tɑ̃/',
      tip: 'de ne se déplace pas : il devient dont. EN: de does not move, it becomes dont.' },
    { promptLabel: 'dans à la fin', promptSound: 'Le bureau que je travaille dans est au troisième étage.',
      fr: 'Le bureau où je travaille est au troisième étage.',
      ipa: '/lə by.ʁo u ʒə tʁa.vaj ɛ.t o tʁwa.zjɛm e.taʒ/',
      tip: 'dans devient où. EN: dans becomes où.' },
    { promptLabel: 'une préposition en trop', promptSound: "L'ami pour qui j'attends arrive à midi.",
      fr: "L'ami que j'attends arrive à midi.",
      ipa: '/la.mi kə ʒa.tɑ̃ a.ʁiv a mi.di/',
      tip: "attendre est direct. Le for anglais n'a pas d'équivalent. EN: attendre is direct." },
    { promptLabel: 'chercher avec pour', promptSound: 'La personne pour qui je cherche est déjà partie.',
      fr: 'La personne que je cherche est déjà partie.',
      ipa: '/la pɛʁ.sɔn kə ʒə ʃɛʁʃ ɛ de.ʒa paʁ.ti/',
      tip: 'chercher quelqu’un, sans rien devant. EN: chercher takes no preposition.' },
    { promptLabel: 'écouter avec à', promptSound: "La musique que j'écoute à le matin est calme.",
      fr: "La musique que j'écoute le matin est très calme.",
      ipa: '/la my.zik kə ʒe.kut lə ma.tɛ̃ ɛ tʁɛ kalm/',
      tip: "écouter est direct : que suffit. EN: écouter is direct, so que is enough." },
  ],
  drill: [
    { promptSay: 'La personne ... je travaille arrive à neuf heures.', opts: ['que', 'avec qui'], correct: 1 },
    { promptSay: "L'ami ... j'attends arrive à midi.", opts: ['que', 'pour qui'], correct: 0 },
    { promptSay: 'Le village ... je viens compte trois cents habitants.', opts: ['que', 'dont'], correct: 1 },
    { promptSay: 'Le bureau ... je travaille est au troisième étage.', opts: ['où', 'que'], correct: 0 },
    { promptSay: 'La musique ... j’écoute le matin est calme.', opts: ['à qui', 'que'], correct: 1 },
    { promptSay: 'Le voisin ... j’ai répondu n’a rien dit.', opts: ['à qui', 'que'], correct: 0 },
    { promptSay: 'Le colis ... je m’occupe arrive demain.', opts: ['que', 'dont'], correct: 1 },
    { promptSay: 'Le film ... nous regardons dure trois heures.', opts: ['que', 'dont'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Rien ne reste suspendu' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme anglaise raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-12-piege-fin'),
  say: REFRAME,
  terms: ['devant', 'petitmot'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Combien de prépositions',
  frSub: 'Huit phrases, sans le texte',
  lines: [
    ln(E(1350)), ln(E(1352)), ln(E(1348)), ln(E(1354)),
    ln(E(1356)), ln(E(1355)), ln(E(1359)), ln(E(1360)),
  ],
  questions: [
    { q: 'Première phrase : comment s’appelle la personne ?', opts: ['Nadia', 'Awa'], correct: 1,
      why: "« s'appelle Awa ». Le verbe principal arrive après la relative. EN: Awa." },
    { q: 'Deuxième phrase : y a-t-il une préposition dans la relative ?',
      opts: ['non, aucune', 'oui, pour'], correct: 0,
      why: "« que j'attends » : attendre est direct. EN: attendre is direct." },
    { q: 'Troisième phrase : combien d’habitants ?', opts: ['trois mille', 'trois cents'], correct: 1,
      why: "« trois cents habitants ». EN: three hundred." },
    { q: 'Cinquième phrase : le voisin a-t-il parlé ?', opts: ["non, il n'a rien dit", "oui, il a tout dit"], correct: 0,
      why: "« n'a rien dit ». EN: he said nothing." },
    { q: 'Huitième phrase : le dossier dont tu as besoin est...',
      opts: ['un autre', 'celui que tu regardes', 'introuvable'], correct: 0,
      why: "« n'est pas celui que tu regardes ». EN: it is another one." },
  ],
  audio: REC('rec-b1-12-fin-ecoute'),
  say: REFRAME,
  terms: ['devant'],
};

const A8_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a8-focus',
  layer: 'core',
  sheetId: 'sheet-choix',
  title: "Ce qu'il faut vérifier avant d'envoyer",
  frSub: 'Quatre points',
  points: [
    "Aucune relative ne finit par un petit mot suspendu. EN: no clause ends on a dangling little word.",
    "Le de d'un verbe ou d'un adjectif est devenu dont, une seule fois. EN: a verb's or an adjective's de has become dont, once.",
    "Un lieu et un moment prennent où, sans rien devant. EN: a place and a moment take où, with nothing in front.",
    "attendre, chercher, écouter et regarder n'ont pas de préposition. EN: these four verbs have no preposition.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['devant', 'petitmot'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La fin', 'Une relative française peut-elle finir par une préposition ?',
    ['oui, comme en anglais', 'jamais'], 1,
    `${REFRAME} EN: ${REFRAME_EN}`),
  ctl('Le mot en trop', "« L'ami pour qui j'attends » : que faut-il enlever ?",
    ['qui', 'pour qui, remplacé par que', "l'ami"], 1,
    "attendre est direct : « l'ami que j'attends ». EN: attendre is direct."),
  ctl('Les trois sorties', 'Une préposition finit toujours...',
    ['à la fin', 'au milieu', 'devant, dedans ou nulle part'], 2,
    "Devant qui, dans dont ou où, ou pas du tout. EN: in front, inside, or not at all."),
], ['devant', 'petitmot']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Jamais à la fin',
    opener: {
      line: "L'anglais laisse traîner ses petits mots au bout de la phrase : ici tu apprends les trois endroits où le français les range. EN: English leaves its little words at the end: here you learn the three places French puts them.",
      imageRef: 'lessons/dont-ou/act08.jpg',
    },
    sections: [],
    milestone: "Aucune de tes relatives ne finit par une préposition, et tu n'en ajoutes plus là où le français n'en veut pas. EN: None of your clauses ends on a preposition, and you no longer add one where French wants none.",
    estScreens: 38,
    restPoints: ['a8-construire', 'a8-piege'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_CONSTRUIRE, A8_EXEMPLES, A8_PIEGE, A8_ECOUTE, A8_FOCUS, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — TROIS PORTES, UNE CLÉ
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La même ville, trois mots',
  frSub: 'Ce qui bouge, ce qui ne bouge pas',
  text: READING_CHOIX,
  glossary: [
    { word: 'au bord', en: 'on the edge of', note: 'Juste à côté, sur la rive.' },
    { word: 'réclame', en: 'calls for', note: "Le verbe demande ce petit mot pour être complet. EN: the verb needs that little word to be complete." },
    { word: 'bougé', en: 'moved', note: 'Changé de place ou de forme.' },
    { word: 'préparer', en: 'to prepare', note: "Faire à l'avance ce qu'il faut." },
  ],
  questions: [
    { q: 'Quels trois mots la même ville prend-elle, et pourquoi ?', a: "où pour habiter dans, dont pour parler de, que pour préférer. Le verbe change à chaque fois, et le mot suit le verbe." },
    { q: "Pourquoi « la ville dont je parle » et non « la ville où je parle » ?", a: "Parce que parler réclame de. Le nom est un lieu, mais ce n'est pas le nom qui décide." },
    { q: 'Quelles trois formes la collègue prend-elle ?', a: "avec qui pour préparer avec, dont pour parler de, que pour attendre, qui ne réclame rien." },
    { q: 'Quelle est la seule question à se poser, selon le texte ?', a: "Ce que le verbe réclame : de, une autre préposition, un lieu ou un moment, ou rien du tout." },
  ],
  audio: REC('rec-b1-12-choix'),
  say: REFRAME,
  terms: ['petitmot', 'devant'],
};

const A9_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-table',
  layer: 'core',
  sheetId: 'sheet-choix',
  title: 'Six verbes, six portes',
  frSub: 'Touche une ligne',
  cols: ['Le verbe', 'Ce qu’il réclame', 'La relative'],
  rows: [
    { cells: ['habiter', 'dans un lieu', 'où'],
      say: "La ville où j'habite est au bord d'un fleuve.",
      detail: { title: 'habiter dans', body: "Un lieu, donc où, et la préposition disparaît dedans. EN: a place, so où, and the preposition disappears inside it.", say: "La rue où j'habite descend vers le fleuve." } },
    { cells: ['parler', 'de', 'dont'],
      say: "La ville dont je parle le plus à mes parents, c'est Sherbrooke.",
      detail: { title: 'parler de', body: "Même si le nom est un lieu, le verbe l'emporte. EN: even when the noun is a place, the verb wins.", say: 'Le quartier dont tout le monde parle est près du fleuve.' } },
    { cells: ['préférer', 'rien', 'que'],
      say: 'La ville que je préfère au Québec reste Québec.',
      detail: { title: 'préférer quelque chose', body: "Aucune préposition : tu retombes sur que. EN: no preposition, so you land back on que.", say: "Le jour que j'ai choisi est un mardi." } },
    { cells: ['préparer', 'avec une personne', 'avec qui'],
      say: 'La collègue avec qui je prépare le dossier arrive à huit heures.',
      detail: { title: 'préparer avec', body: "avec reste écrit, puis qui. EN: avec stays written, then qui.", say: 'La personne avec qui tu voyages doit signer ici.' } },
    { cells: ['se souvenir', 'de', 'dont'],
      say: 'Le jour dont je me souviens le mieux est un dimanche.',
      detail: { title: 'se souvenir de', body: "Un jour, et pourtant dont : le verbe réclame de. EN: a day, and still dont.", say: 'La soirée dont je me souviens le mieux est la première.' } },
    { cells: ['signer', 'rien, et un moment devant', 'où'],
      say: 'Le jour où nous avons signé, il faisait beau.',
      detail: { title: 'un moment sans préposition', body: "Ici le jour situe l'action au lieu de la subir, donc où. EN: here the day places the action rather than undergoing it.", say: "Le jour où j'ai signé le bail était un vendredi." } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['petitmot', 'motou'],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le même nom, trois fois',
  frSub: 'Seul le verbe a changé',
  groups: [
    grp('La ville', [
      it(E(1368), 'habiter dans'),
      it(E(1369), 'parler de'),
      it(E(1370), 'préférer, sans préposition'),
      it('fr.a1.nombres.117', 'habiter dans, sans relative'),
    ], chk('Ces trois relatives portent sur le même nom. Qui change le mot ?',
      ['le verbe', 'le nom', 'la longueur'], 0,
      "Le nom est identique dans les trois. EN: the noun is identical in all three.")),
    grp('La collègue', [
      it(E(1371), 'préparer avec'),
      it(E(1372), 'parler de'),
      it(E(1373), 'attendre, sans préposition'),
      it('fr.a2.metiers.028', "s'occuper de, sans relative"),
    ], chk("Une personne peut-elle prendre dont ?",
      ['Oui, si le verbe réclame de', 'Non, dont est pour les choses'], 0,
      "« la collègue dont je t'ai parlé ». EN: the verb decides, not the noun.")),
    grp('Le jour', [
      it(E(1374), 'signer : le jour situe'),
      it(E(1375), 'se souvenir de'),
      it(E(1376), 'choisir, sans préposition'),
      it(E(1377), 'refaire le toit : une possession'),
    ], chk("« Le jour dont je me souviens » : pourquoi pas où ?",
      ["parce qu'un jour n'est pas un moment", 'parce que se souvenir réclame de'], 1,
      "Un jour est bien un moment, et le verbe passe devant. EN: a day is indeed a moment, and the verb still wins.")),
    ctl('Le contrôle', "Avant d'écrire le mot, tu te demandes...",
      ['si le nom est une personne', 'ce que le verbe réclame', "si la phrase est longue"], 1,
      `${THE_TEST} EN: say the second sentence on its own.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['petitmot', 'devant'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Le piège du nom qui décide',
  frSub: 'Quatre étapes',
  rule: {
    title: 'Un lieu ne prend pas toujours où',
    body: "Le nom de devant ne choisit rien. Un lieu peut prendre dont, une personne peut prendre dont, un jour peut prendre que. EN: the noun in front chooses nothing: a place can take dont, a person can take dont, a day can take que.",
  },
  cards: [
    { promptLabel: 'un lieu avec parler', promptSound: 'Le quartier où tout le monde parle est près du fleuve.',
      fr: 'Le quartier dont tout le monde parle est près du fleuve.',
      ipa: '/lə kaʁ.tje dɔ̃ tu lə mɔ̃d paʁl ɛ pʁɛ dy flœv/',
      tip: 'parler de : le verbe gagne contre le nom. EN: parler takes de, and the verb wins.' },
    { promptLabel: 'un lieu avec habiter', promptSound: 'Le quartier dont tout le monde veut habiter est près du fleuve.',
      fr: 'Le quartier où tout le monde veut habiter est près du fleuve.',
      ipa: '/lə kaʁ.tje u tu lə mɔ̃d vø a.bi.te ɛ pʁɛ dy flœv/',
      tip: 'habiter dans : ici le lieu gagne, parce que le verbe le demande. EN: habiter takes dans, so où.' },
    { promptLabel: 'une personne avec parler', promptSound: "La collègue à qui je t'ai parlé change de service.",
      fr: "La collègue dont je t'ai parlé change de service.",
      ipa: '/la kɔ.lɛɡ dɔ̃ ʒə te paʁ.le ʃɑ̃ʒ də sɛʁ.vis/',
      tip: "parler DE quelqu'un, pas à. EN: you speak ABOUT someone here, not to them." },
    { promptLabel: 'un jour avec choisir', promptSound: "Le jour où j'ai choisi est un mardi.",
      fr: "Le jour que j'ai choisi est un mardi.",
      ipa: '/lə ʒuʁ kə ʒe ʃwa.zi ɛ.t œ̃ maʁ.di/',
      tip: "Ici le jour est choisi, il ne situe rien. EN: here the day is chosen rather than placing anything." },
    { promptLabel: 'un jour avec se souvenir', promptSound: 'Le jour où je me souviens le mieux est un dimanche.',
      fr: 'Le jour dont je me souviens le mieux est un dimanche.',
      ipa: '/lə ʒuʁ dɔ̃ ʒə mə su.vjɛ̃ lə mjø ɛ.t œ̃ di.mɑ̃ʃ/',
      tip: 'se souvenir de : encore le verbe. EN: se souvenir takes de, again the verb.' },
    { promptLabel: 'une ville avec préférer', promptSound: 'La ville où je préfère au Québec reste Québec.',
      fr: 'La ville que je préfère au Québec reste Québec.',
      ipa: '/la vil kə ʒə pʁe.fɛʁ o ke.bɛk ʁɛst ke.bɛk/',
      tip: "préférer ne réclame rien : que. EN: préférer asks for nothing, so que." },
  ],
  drill: [
    { promptSay: 'Le quartier ... tout le monde parle est près du fleuve.', opts: ['dont', 'où'], correct: 0 },
    { promptSay: 'Le quartier ... tout le monde veut habiter est près du fleuve.', opts: ['dont', 'où'], correct: 1 },
    { promptSay: "La collègue ... je t'ai parlé change de service.", opts: ['dont', 'à qui'], correct: 0 },
    { promptSay: 'La collègue ... je prépare le dossier arrive à huit heures.', opts: ['dont', 'avec qui'], correct: 1 },
    { promptSay: "Le jour ... j'ai choisi est un mardi.", opts: ['que', 'où'], correct: 0 },
    { promptSay: 'Le jour ... nous avons signé, il faisait beau.', opts: ['que', 'où'], correct: 1 },
    { promptSay: 'La ville ... je préfère reste Québec.', opts: ['que', 'où'], correct: 0 },
    { promptSay: "La ville ... j'habite est au bord d'un fleuve.", opts: ['dont', 'où'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un lieu ne prend pas toujours où' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le nom fait croire' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-12-piege-choix'),
  say: REFRAME,
  terms: ['petitmot', 'motou'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Quelle porte a-t-il prise',
  frSub: 'Huit phrases, sans le texte',
  lines: [
    ln(E(1368)), ln(E(1369)), ln(E(1370)), ln(E(1372)),
    ln(E(1374)), ln(E(1375)), ln(E(1377)), ln(E(1379)),
  ],
  questions: [
    { q: 'Première phrase : quel mot ouvre la relative ?', opts: ['dont', 'où', 'que'], correct: 1,
      why: "« la ville où j'habite » : habiter dans. EN: habiter takes dans, so où." },
    { q: 'Deuxième phrase : de quelle ville parle-t-elle ?', opts: ['Sherbrooke', 'Québec'], correct: 0,
      why: "« c'est Sherbrooke ». EN: Sherbrooke." },
    { q: 'Troisième phrase : quel mot ouvre la relative ?', opts: ['où', 'que'], correct: 1,
      why: "préférer ne réclame rien. EN: préférer asks for nothing." },
    { q: 'Cinquième phrase : quel temps faisait-il ?', opts: ['il faisait beau', 'il pleuvait'], correct: 0,
      why: "« il faisait beau ». EN: the weather was fine." },
    { q: 'Septième phrase : que refait-on ?', opts: ['la porte', 'la cuisine', 'le toit'], correct: 2,
      why: "« dont on refait le toit ». EN: the roof." },
  ],
  audio: REC('rec-b1-12-choix-ecoute'),
  say: REFRAME,
  terms: ['petitmot'],
};

const A9_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a9-hacks',
  layer: 'core',
  sheetId: 'sheet-choix',
  title: 'Trois astuces quand tu hésites',
  frSub: 'Toutes les trois passent par le verbe',
  hacks: [
    { hack: 'Coupe la phrase en deux et redis la seconde moitié toute seule.',
      why: "Le petit mot réapparaît tout de suite : « je parle DE ce quartier ». EN: the little word comes straight back." },
    { hack: 'Si tu entends de, écris dont et arrête-toi : rien ne se réécrit derrière.',
      why: "Le doublon « dont ... de » est la faute la plus fréquente après la bonne. EN: the doubled de is the commonest slip once the word is right." },
    { hack: "Si ta phrase finit par un petit mot suspendu, tu as pensé en anglais.",
      why: `${REFRAME} EN: ${REFRAME_EN}` },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['petitmot', 'devant'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Qui décide', 'Le mot de la relative est choisi par...',
    ['le nom de devant', 'le verbe de la relative'], 1,
    "Le nom peut être un lieu et prendre dont. EN: the noun can be a place and still take dont."),
  ctl('Les quatre sorties', 'Le verbe ne réclame rien. Tu écris...',
    ['qui ou que', 'dont', 'où'], 0,
    "Tu retombes sur la leçon précédente. EN: you land back on the previous lesson."),
  ctl('Le même nom', 'Un même nom peut-il prendre où, dont et que ?',
    ['Oui, selon le verbe', 'Non, jamais'], 0,
    "« la ville où », « la ville dont », « la ville que ». EN: all three, depending on the verb."),
], ['petitmot', 'devant']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Trois portes, une clé',
    opener: {
      line: "La même ville peut prendre trois mots différents : ici tu apprends ce qui décide, et ce n'est pas le nom. EN: The same city can take three different words: here you learn what decides, and it is not the noun.",
      imageRef: 'lessons/dont-ou/act09.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre dont, où et une préposition en une seconde, en regardant le verbe. EN: You can choose between dont, où and a preposition in a second, by looking at the verb.",
    estScreens: 36,
    restPoints: ['a9-construire', 'a9-piege'],
  },
  sections: [A9_LECTURE, A9_TABLE, A9_CONSTRUIRE, A9_PIEGE, A9_ECOUTE, A9_HACKS, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — DES PHRASES PLUS LONGUES
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (house rule 6.4). */
const A10_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a10-histoire',
  layer: 'core',
  title: 'Deux relatives, une phrase',
  frSub: 'Nadia décrit son nouvel appartement',
  setting: "Nadia raconte à Karim où elle va habiter. Sa première phrase s'arrête avant la fin.",
  bubbles: [
    { from: 'user', fr: "L'appartement dont je t'ai parlé, dans la rue où j'ai grandi.", en: 'The flat I told you about, in the street I grew up in.', warn: 'Deux relatives, et aucun verbe principal' },
    { from: 'coach', fr: 'Les deux relatives sont justes. Il manque le verbe de la phrase elle-même.', en: 'Both clauses are right. The sentence itself is missing its verb.' },
    { from: 'user', fr: "L'appartement dont je t'ai parlé est dans la rue où j'ai grandi.", en: 'The flat I told you about is in the street I grew up in.' },
    { from: 'coach', fr: "Voilà. Chaque relative colle à son nom, et la phrase repart quand même sur son verbe.", en: 'There. Each clause sticks to its noun, and the sentence still restarts on its verb.' },
    { from: 'user', fr: "Et je peux en mettre deux sur le même nom.", en: 'And I can put two of them on the same noun.' },
    { from: 'coach', fr: 'Oui, entre deux virgules, comme un aparté.', en: 'Yes, between two commas, like an aside.', warn: 'Deux virgules, ou aucune' },
  ],
  closing: { fr: "Une phrase longue tient si chaque relative a son nom et si le verbe principal arrive.", en: 'A long sentence holds if each clause has its noun and the main verb arrives.' },
  audio: REC('rec-b1-12-longues'),
  say: REFRAME,
  terms: ['chaine', 'relative'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ecrire',
  title: 'Faire tenir une longue phrase',
  frSub: 'Quatre cartes',
  hint: 'Quatre cartes. Cherche le verbe principal à chaque fois.',
  audio: REC('rec-b1-12-chaine'),
  say: REFRAME,
  terms: ['chaine', 'relative'],
  cards: [
    {
      head: 'Deux relatives, deux noms', label: 'la chaîne simple',
      fr: "L'appartement dont je t'ai parlé est dans la rue où j'ai grandi.",
      sub: '[lah-par-tuh-MAHⁿ dohⁿ zhuh tay par-LAY · eh dahⁿ lah RÜ oo zhay grahⁿ-DEE]',
      body: "Chacune colle à son propre nom, et le verbe est arrive entre les deux. EN: each sticks to its own noun, and the main verb lands between them.",
    },
    {
      head: 'Deux relatives sur un seul nom', label: 'entre deux virgules',
      fr: 'Le village dont je viens, où mes parents vivent encore, compte trois cents habitants.',
      sub: '[luh vee-LAZH dohⁿ zhuh VYEHⁿ · oo may pah-rahⁿ veev ahⁿ-KOR]',
      body: "La deuxième est un aparté : deux virgules, ou aucune. EN: the second is an aside: two commas, or none at all.",
    },
    {
      head: 'Le verbe principal arrive toujours', label: 'le test à voix haute',
      fr: "Le dossier dont tu as besoin, que j'ai posé sur ton bureau, fait quarante pages.",
      sub: '[luh doh-SYAY dohⁿ tü a buh-ZWEHⁿ · feh kah-rahⁿt PAZH]',
      body: "Enlève les deux apartés : « le dossier fait quarante pages » tient debout seul. EN: remove the asides and the sentence still stands.",
    },
    {
      head: 'Ce que cette leçon ne te donne pas', label: Cap(LEQUEL_REF),
      fr: "le projet ... je pense",
      sub: '[luh proh-ZHEH ... zhuh PAHⁿSS]',
      body: `Pour une chose après une préposition, il te manque encore un mot, et ${LEQUEL_REF} s'en occupe. Contourne pour l'instant. EN: a thing after a preposition needs a word this lesson does not give you.`,
    },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Fais tenir la phrase',
  frSub: 'Deux relatives, un verbe principal',
  groups: [
    grp('Deux noms, deux relatives', [
      it(E(1384), 'dont, puis où'),
      it(E(1385), 'avec qui, puis où'),
      it(E(1389), 'chez qui, puis où'),
      it(E(1391), 'à qui, puis où'),
    ], chk('Dans ces quatre phrases, combien de noms sont décrits ?',
      ['un seul', 'deux'], 1,
      "Chaque relative a son propre nom devant elle. EN: each clause has its own noun in front of it.")),
    grp('Un seul nom, deux relatives', [
      it(E(1387), 'dont, puis où, entre virgules'),
      it(E(1388), 'dont, puis que, entre virgules'),
      it(E(1390), 'où, puis dont, entre virgules'),
      it(E(1386), 'une relative de temps en tête'),
    ], chk("« Le village dont je viens, où mes parents vivent encore, ... » Que manque-t-il ?",
      ['le verbe principal', 'une troisième relative'], 0,
      "« compte trois cents habitants ». EN: the main verb.")),
    grp('Les phrases courtes derrière', [
      it('fr.b1.cafe.080', 'un café, sans relative'),
      it('fr.a2.animaux.003', 'avoir besoin de, sans relative'),
      it(E(1348), "et la même idée, avec dont"),
      it(E(1368), 'et un lieu, avec où'),
    ], chk('Une longue phrase est faite de...',
      ['un seul bloc', 'plusieurs phrases courtes collées'], 1,
      "Écris court, puis colle. EN: write short, then join.")),
    ctl('Le contrôle', 'Une relative au milieu de la phrase se ferme...',
      ['avec une virgule', 'avec deux virgules ou aucune', 'avec un point'], 1,
      "Une seule virgule laisse la phrase ouverte. EN: one comma leaves the sentence open."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chaine', 'relative'],
};

const A10_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a10-exemples',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: 'Six phrases longues qui tiennent',
  frSub: 'Le verbe principal est en gras dans ta tête',
  examples: [
    ex(E(1384), 'le verbe principal est « est »'),
    ex(E(1385), '« habite »'),
    ex(E(1387), '« compte », après deux apartés'),
    ex(E(1388), '« fait », après deux apartés'),
    ex(E(1389), '« travaille »'),
    ex(E(1390), '« ferme »'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chaine'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de phrase longue',
  frSub: 'Le même mot répété, ou le verbe perdu',
  errors: [
    { wrong: "L'appartement dont je t'ai parlé est dans la rue dont j'ai grandi.",
      right: "L'appartement dont je t'ai parlé est dans la rue où j'ai grandi.",
      why: "Le premier dont est juste, et il contamine le second. Grandir DANS une rue : où. EN: the first dont is right and it contaminates the second." },
    { wrong: 'Le village dont je viens, où mes parents vivent encore, trois cents habitants.',
      right: 'Le village dont je viens, où mes parents vivent encore, compte trois cents habitants.',
      why: "Deux apartés de suite font oublier que la phrase attend toujours son verbe. EN: two asides in a row make you forget the sentence still wants its verb." },
    { wrong: "Le dossier dont tu as besoin, que j'ai posé sur ton bureau fait quarante pages.",
      right: "Le dossier dont tu as besoin, que j'ai posé sur ton bureau, fait quarante pages.",
      why: "On encadre des deux côtés, ou pas du tout. EN: you fence it on both sides, or not at all." },
    { wrong: "L'ami chez qui je loge travaille dans l'immeuble chez qui se trouve la bibliothèque.",
      right: "L'ami chez qui je loge travaille dans l'immeuble où se trouve la bibliothèque.",
      why: "chez qui va aux personnes. Un immeuble est un lieu. EN: chez qui is for people; a building is a place." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chaine', 'petitmot'],
};

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Trouve le verbe principal',
  frSub: 'Huit phrases, sans le texte',
  lines: [
    ln(E(1384)), ln(E(1387)), ln(E(1385)), ln(E(1388)),
    ln(E(1389)), ln(E(1390)), ln(E(1386)), ln(E(1391)),
  ],
  questions: [
    { q: 'Première phrase : où se trouve l’appartement ?',
      opts: ['dans la rue où elle a grandi', 'près du campus'], correct: 0,
      why: "« dans la rue où j'ai grandi ». EN: in the street she grew up in." },
    { q: 'Deuxième phrase : combien le village compte-t-il d’habitants ?',
      opts: ['trois mille', 'trois cents'], correct: 1,
      why: "« compte trois cents habitants », après deux apartés. EN: three hundred." },
    { q: 'Quatrième phrase : le dossier fait...',
      opts: ['quatorze pages', 'quatre pages', 'quarante pages'], correct: 2,
      why: "« fait quarante pages ». EN: forty pages." },
    { q: 'Sixième phrase : que sait-on du propriétaire du café ?',
      opts: ["il est italien", 'il est parti'], correct: 0,
      why: "« dont le propriétaire est italien ». EN: he is Italian." },
    { q: 'Septième phrase : la personne était-elle là le jour de la signature ?',
      opts: ['non', 'oui'], correct: 1,
      why: "« était là ». EN: yes, she was there." },
  ],
  audio: REC('rec-b1-12-longues-ecoute'),
  say: REFRAME,
  terms: ['chaine'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le nom', 'Une relative se place...',
    ['juste après son nom', 'à la fin de la phrase'], 0,
    "Même au milieu, elle colle à son nom. EN: even mid-sentence, it sticks to its noun."),
  ctl('Les virgules', 'Un aparté au milieu de la phrase prend...',
    ['deux virgules', 'une virgule', 'un point'], 0,
    "Des deux côtés, ou aucune. EN: on both sides, or none."),
  ctl('Le verbe principal', 'Après deux relatives, la phrase doit...',
    ["s'arrêter", 'arriver à son verbe'], 1,
    "Relis à voix haute : le verbe principal doit arriver. EN: read it aloud; the main verb has to arrive."),
], ['chaine', 'relative']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Des phrases plus longues',
    opener: {
      line: "Deux relatives dans une phrase, et un verbe principal qui attend son tour : ici tu apprends à ne pas le perdre. EN: Two clauses in one sentence and a main verb waiting its turn: here you learn not to lose it.",
      imageRef: 'lessons/dont-ou/act10.jpg',
    },
    sections: [],
    milestone: "Tu mets deux relatives dans une phrase, avec deux virgules ou aucune, et le verbe principal arrive. EN: You can put two clauses in one sentence, with two commas or none, and the main verb still arrives.",
    estScreens: 30,
    restPoints: ['a10-construire'],
  },
  sections: [A10_HISTOIRE, A10_CARTES, A10_CONSTRUIRE, A10_EXEMPLES, A10_ERREURS, A10_ECOUTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — DÉCRIRE UN LIEU ET UNE PERSONNE
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le modèle que tu vas imiter',
  frSub: 'Sept relatives en douze lignes',
  text: READING_ANNONCE_MODELE,
  glossary: [
    { word: 'troisième étage', en: 'third floor', note: 'Trois niveaux au-dessus de la rue.' },
    { word: 'bordée', en: 'lined', note: "Il y a des arbres des deux côtés. EN: there are trees on both sides." },
    { word: "d'érables", en: 'of maple trees', note: "L'arbre emblème du Québec." },
    { word: "j'emménage", en: 'I move in', note: "Le jour où on arrive dans un nouveau logement." },
  ],
  questions: [
    { q: 'Combien de relatives le message contient-il, et lesquelles ?', a: "Sept : deux en dont, trois en où, une en avec qui et une en à qui. Chacune ouvre sa clause par son petit mot." },
    { q: "Pourquoi « le genre de logement dont j'avais besoin » et non « que » ?", a: "Parce qu'on a besoin DE quelque chose. Le de du verbe passe devant et devient dont." },
    { q: 'Que fait la relative en dont dans la phrase sur la colocataire ?', a: "« une étudiante dont le frère travaille à la bibliothèque » relie l'étudiante à son frère : dont dit à qui est le frère, et le frère prend son article." },
    { q: 'Quelle phrase finit le message, et pourquoi ce mot-là ?', a: "« Tu es la première personne à qui j'avais envie d'écrire. » écrire à quelqu'un, donc à qui, avec la préposition écrite en entier devant." },
  ],
  audio: REC('rec-b1-12-modele'),
  say: REFRAME,
  terms: ['chaine', 'petitmot'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: "Cinq étapes avant d'écrire",
  frSub: 'Le plan de la description',
  steps: [
    "Écris tes faits en phrases courtes, sans te relire. EN: write your facts as short sentences, without rereading.",
    "Cherche le nom qui revient d'une phrase à l'autre. EN: find the noun that comes back from one sentence to the next.",
    "Redis la seconde phrase toute seule et écoute le petit mot collé au verbe. EN: say the second sentence on its own and listen for the little word.",
    "Choisis ta porte : de donne dont, un lieu ou un moment donne où, une autre préposition reste devant qui. EN: pick your door.",
    "Relis chaque phrase à voix haute : le verbe principal doit arriver. EN: read each sentence aloud; the main verb still has to arrive.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chaine', 'petitmot'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: 'Quatre descriptions qui doivent tenir',
  frSub: 'Un lieu, une personne, un moment',
  cases: [
    { situation: 'Tu décris le logement', fr: "C'est exactement le genre de logement dont j'avais besoin.", en: 'It is exactly the kind of place I needed.' },
    { situation: 'Tu situes le quartier', fr: 'Le quartier où il se trouve descend vers le fleuve.', en: 'The neighbourhood it is in runs down towards the river.' },
    { situation: 'Tu présentes la personne', fr: "C'est la personne avec qui j'ai visité deux fois.", en: 'She is the person I viewed it with twice.' },
    { situation: 'Tu donnes la date', fr: "Le jour où j'emménage, c'est le premier septembre.", en: 'The day I move in is the first of September.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['petitmot', 'personne'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'De retour au bureau du logement',
  frSub: 'Six tours, à voix haute',
  setting: "Tu retournes voir monsieur Lachance pour signer. Il te pose six questions, et chaque réponse demande une relative.",
  turns: [
    {
      ai: "Bonjour. Dites-moi quel appartement vous avez choisi.", en: 'Good morning. Tell me which flat you chose.',
      user: "C'est l'appartement dont je vous ai parlé la semaine dernière.",
      userEn: 'It is the flat I spoke to you about last week. (dont, because parler takes de.)',
      alts: [
        { fr: "C'est celui dont j'avais besoin : deux pièces et calme.", en: 'It is the one I needed: two rooms and quiet. (dont again, from avoir besoin de.)' },
        { fr: "C'est celui que j'ai visité deux fois.", en: 'It is the one I viewed twice. (que, because visiter takes no preposition.)' },
      ],
    },
    {
      ai: 'Et dans quel quartier se trouve-t-il.', en: 'And which neighbourhood is it in.',
      user: 'Dans le quartier où je voulais habiter depuis le début.',
      userEn: 'In the neighbourhood I wanted to live in from the start. (où, because habiter takes dans.)',
      alts: [
        { fr: 'Dans la rue où mon amie a grandi.', en: 'In the street my friend grew up in.' },
        { fr: "Dans le quartier dont tout le monde parle en ce moment.", en: 'In the neighbourhood everyone is talking about right now. (dont, because parler takes de.)' },
      ],
    },
    {
      ai: 'Avec qui allez-vous partager.', en: 'Who are you going to share with.',
      user: "Avec une étudiante dont le frère travaille à la bibliothèque.",
      userEn: 'With a student whose brother works at the library. (dont, and le frère takes its article.)',
      alts: [
        { fr: "Avec la personne avec qui j'ai visité deux fois.", en: 'With the person I viewed it with twice. (avec qui, written in full.)' },
        { fr: "Avec une amie dont je vous ai déjà parlé.", en: 'With a friend I have already told you about.' },
      ],
    },
    {
      ai: 'À qui devez-vous remettre le dossier.', en: 'Who do you have to hand the file to.',
      user: "À la conseillère à qui j'ai écrit la semaine dernière.",
      userEn: 'To the adviser I wrote to last week. (à qui, because écrire takes à.)',
      alts: [
        { fr: "À la personne dont vous m'avez donné le nom.", en: 'To the person whose name you gave me.' },
        { fr: "À madame Roy, celle avec qui j'ai rendez-vous jeudi.", en: 'To Madame Roy, the one I have an appointment with on Thursday.' },
      ],
    },
    {
      ai: 'Quand comptez-vous emménager.', en: 'When are you planning to move in.',
      user: "Le jour où le bail commence, c'est-à-dire le premier septembre.",
      userEn: 'The day the lease starts, that is the first of September. (où, because le jour is a moment.)',
      alts: [
        { fr: 'La semaine où les cours commencent.', en: 'The week classes start.' },
        { fr: "Le premier septembre, le jour dont nous avions convenu.", en: 'The first of September, the day we had agreed on. (dont, from convenir de.)' },
      ],
    },
    {
      ai: 'Parfait. Une dernière chose à signaler.', en: 'Perfect. One last thing to mention.',
      user: "La seule chose dont je ne suis pas sûr, c'est le stationnement.",
      userEn: 'The only thing I am not sure about is the parking. (dont, because sûr takes de.)',
      alts: [
        { fr: "Les voisins chez qui je peux laisser un colis, je ne les connais pas encore.", en: 'I do not yet know the neighbours I can leave a parcel with.' },
        { fr: "Rien, à part le jour où le chauffage sera allumé.", en: 'Nothing, apart from the day the heating will be switched on.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['petitmot', 'personne', 'chaine'],
};

const A11_TASK: TaskSection = {
  type: 'task',
  id: 'a11-mission',
  title: 'Décris ton nouveau logement',
  frSub: 'Mission écrite',
  brief: "Tu viens de trouver un logement dans une ville francophone : un appartement, une chambre, une colocation, peu importe. Tu écris à un ami qui ne connaît ni le lieu ni les gens. Il doit pouvoir imaginer l'endroit, le quartier, la personne avec qui tu partages, et savoir quand tu emménages.",
  briefEn: 'You have just found somewhere to live in a French-speaking city. Write to a friend who knows neither the place nor the people.',
  produce: "Écris un message de 110 à 150 mots avec au moins cinq relatives : au moins deux avec dont, au moins deux avec où dont une de temps, et au moins une avec une préposition devant qui.",
  responseSpec: { kind: 'text', minWords: 110, maxWords: 150 },
  rubric: {
    criteria: [
      {
        key: 'porte', label: 'La bonne porte à chaque fois', maxPoints: 4,
        descriptors: [
          "4 : Chaque relative porte le mot que son verbe réclame, et le choix suit le verbe, jamais le nom de devant.",
          "3 : Une seule relative se trompe de mot, et le reste est juste.",
          "2 : Plusieurs relatives prennent où pour dont ou le contraire, souvent parce que le nom est un lieu.",
          "1 : Le mot semble choisi au hasard, ou c'est toujours le même.",
        ],
      },
      {
        key: 'place', label: 'La préposition à sa place', maxPoints: 3,
        descriptors: [
          "3 : Aucune relative ne finit par une préposition, et aucune n'en ajoute une là où le français n'en veut pas.",
          "2 : Une phrase laisse un petit mot suspendu à la fin, ou en ajoute un après attendre, chercher, écouter ou regarder.",
          "1 : Plusieurs phrases sont construites à l'anglaise, avec la préposition au bout.",
        ],
      },
      {
        key: 'forme', label: 'Ce qui suit le mot', maxPoints: 3,
        descriptors: [
          "3 : Après dont, la chose possédée prend le, la ou les, et le de ne se réécrit jamais derrière.",
          "2 : Un possessif reste après dont, ou un de apparaît une deuxième fois.",
          "1 : Les deux fautes reviennent plusieurs fois.",
        ],
      },
      {
        key: 'tache', label: 'La mission complète', maxPoints: 2,
        descriptors: [
          "2 : Le message fait 110 à 150 mots, il porte au moins cinq relatives réparties comme demandé, et un lecteur peut imaginer le lieu, la personne et la date.",
          "1 : Il manque une des cinq relatives, ou la longueur est hors des bornes, ou la description conviendrait à n'importe quel logement.",
        ],
      },
    ],
  },
  scaffold: [
    "L'appartement dont je t'ai parlé",
    "le genre de logement dont j'avais besoin",
    'Le quartier où il se trouve',
    'la rue où je vais habiter',
    'une étudiante dont le frère',
    "la personne avec qui j'ai visité",
    "Le jour où j'emménage",
    "la première personne à qui",
  ],
  modelAnswer: "Salut Karim,\n\nÇa y est, j'ai signé. L'appartement dont je t'ai parlé au téléphone est au troisième étage d'un immeuble en brique, rue Galt.\n\nC'est exactement le genre de logement dont j'avais besoin : deux pièces, calme, et à dix minutes du campus. Le quartier où il se trouve descend vers le fleuve, et la rue où je vais habiter est bordée d'érables. Il y a une épicerie où on trouve du pain jusqu'à tard, et une bibliothèque où je pourrai travailler le soir.\n\nJe partage avec une étudiante dont le frère travaille justement à cette bibliothèque. C'est la personne avec qui j'ai visité deux fois, et elle est très facile à vivre.\n\nLe jour où j'emménage, c'est le premier septembre. Viens me voir.\n\nNadia",
  modelAnswerEn: "Hi Karim, that is it, I have signed. The flat I told you about on the phone is on the third floor of a brick building on rue Galt. It is exactly the kind of place I needed: two rooms, quiet, ten minutes from campus. The neighbourhood it is in runs down towards the river, and the street I am going to live in is lined with maples. There is a grocery where you can get bread until late, and a library where I will be able to work in the evening. I am sharing with a student whose brother works at that very library. She is the person I viewed it with twice, and she is very easy to live with. The day I move in is the first of September. Come and see me. Nadia",
  watchFor: [
    { pattern: "que written where the verb brought a de of its own: « l'appartement que j'ai besoin », « le livre que je t'ai parlé ».",
      criterion: 'porte',
      feedback: "Redis la phrase courte : « j'ai besoin DE ». Le de passe devant et devient dont.",
      ref: 'a2-piege' },
    { pattern: "The de of an adjective dropped: « le projet que je suis fier », « la date que tu es sûr ».",
      criterion: 'porte',
      feedback: "fier de, sûr de : l'adjectif réclame de comme un verbe. Écris dont.",
      ref: 'a3-erreurs' },
    { pattern: "A second de written behind dont: « le dossier dont j'ai besoin de », « la chose dont je suis sûr de ».",
      criterion: 'forme',
      feedback: "dont contient déjà le de. L'écrire une deuxième fois, c'est le dire deux fois.",
      ref: 'a2-check' },
    { pattern: "A possessive kept after dont: « dont son fils », « dont sa porte », « dont je connais son frère ».",
      criterion: 'forme',
      feedback: "dont dit déjà à qui est la chose. Écris le, la ou les.",
      ref: 'a4-piege' },
    { pattern: "quand written after a time noun: « le jour quand j'emménage », « l'année quand je suis arrivé ».",
      criterion: 'porte',
      feedback: "Un nom de temps devant, donc où. quand ne reprend jamais un nom.",
      ref: 'a6-piege' },
    { pattern: "que or où used in front of a person where the verb required a preposition: « la personne que j'ai parlé », « les amis où j'ai dormi ».",
      criterion: 'porte',
      feedback: "Écris la préposition en entier, puis qui : à qui, avec qui, chez qui.",
      ref: 'a7-erreurs' },
    { pattern: "A preposition left at the end of the clause: « la personne que je travaille avec », « le bureau que je travaille dans ».",
      criterion: 'place',
      feedback: "Rien ne reste suspendu. Le petit mot ouvre la relative : avec qui, où.",
      ref: 'a8-piege' },
    { pattern: "A preposition added where the French verb is direct: « l'ami pour qui j'attends », « la personne pour qui je cherche ».",
      criterion: 'place',
      feedback: "attendre, chercher, écouter et regarder sont directs en français. que suffit.",
      ref: 'a8-construire' },
    { pattern: "A preposition written in front of où: « dans où j'habite », « à où je travaille ».",
      criterion: 'place',
      feedback: "où contient déjà la préposition. Écris où tout seul.",
      ref: 'a5-erreurs' },
    { pattern: "The relative word chosen from the antecedent rather than the verb: où for every place and qui for every person, whatever the verb asks for.",
      criterion: 'porte',
      feedback: "Le nom de devant ne décide rien. « le quartier dont tout le monde parle » est un lieu et prend dont.",
      ref: 'a9-piege' },
    { pattern: "A sentence that opens one or two clauses and never reaches its main verb.",
      criterion: 'tache',
      feedback: "Relis à voix haute : après la relative, la phrase doit repartir sur son verbe principal.",
      ref: 'a10-construire' },
    { pattern: "Only one comma around an inserted clause: « Le village dont je viens, où mes parents vivent encore compte trois cents habitants. »",
      criterion: 'tache',
      feedback: "On encadre des deux côtés, ou pas du tout. Remets la seconde virgule.",
      ref: 'a10-erreurs' },
  ],
  graderNotes: [
    'Word count EXCLUDES the greeting and the sign-off. Count the body only, with 10% tolerance (99-165) before criterion « tache » loses its point.',
    'DO NOT SCORE lequel, laquelle, auquel, duquel, ce qui, ce que or ce dont. They belong to the next lesson and have not been taught. A learner who uses one correctly is not rewarded and one who uses it wrongly is not penalised.',
    'DO NOT SCORE the subjunctive in either direction: it belongs to the lesson after next.',
    'Judge the relative word by what the learner’s own verb requires in their own sentence, not by what they probably meant. A clause can be right for a different reason than intended and still scores.',
    'de qui and duquel for a person are grammatically possible and belong to a more formal register. Accept them as correct, but do not treat their absence as a gap.',
    'Past-participle agreement after a preceding que belongs to the previous lesson. Mark it only if it is wrong in a way that also breaks this lesson’s point.',
    'Writer gender is unknown: judge adjective agreement for internal consistency only.',
    'Accept any francophone city and any kind of housing. Accept regional vocabulary (colocation, coloc, logement, appart, cégep, stationnement, char).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
};

/** Say the whole lesson out loud. Every AUTHORED row carries `voiceflash`;
 *  the section filters `ALL_ROWS` and adds nothing by hand, so no import can
 *  reach it (corpus §E, NOT_SPEAKABLE). */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes phrases longues à voix haute',
  frSub: 'Sans couper avant le petit mot',
  skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
  audio: AUDIO,
  say: REFRAME,
  terms: ['chaine', 'petitmot'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-choix',
  title: 'Toute la leçon sur un écran',
  frSub: 'Six lignes',
  rows: [
    { k: 'la question', v: 'que réclame le verbe', say: "Redis la deuxième phrase toute seule.",
      detail: { title: 'La question', body: `${THE_TEST} Le nom de devant ne décide rien. EN: the noun in front decides nothing.`, say: 'Le quartier dont tout le monde parle est près du fleuve.' } },
    { k: 'de', v: 'dont, une seule fois', say: "Le livre dont je t'ai parlé est à la bibliothèque.",
      detail: { title: 'dont', body: "Verbe ou adjectif, même geste, et rien ne se réécrit derrière. EN: verb or adjective, same move, and nothing is written again behind it.", say: 'Le travail dont je suis fier a pris six mois.' } },
    { k: 'la possession', v: 'dont + le, la, les', say: 'La femme dont le fils est médecin habite en face.',
      detail: { title: 'La possession', body: "Jamais son, sa ni ses : dont dit déjà le propriétaire. EN: never a possessive; dont already names the owner.", say: 'La maison dont la porte est bleue est à vendre.' } },
    { k: 'un lieu', v: 'où, sans rien devant', say: "La rue où j'habite descend vers le fleuve.",
      detail: { title: 'Un lieu', body: "dans, à, sur, chez : tous fondus dans où. EN: dans, à, sur and chez all fuse into où.", say: 'Le bureau où je travaille est au troisième étage.' } },
    { k: 'un moment', v: 'où aussi, jamais quand', say: "Le jour où j'emménage, c'est le premier septembre.",
      detail: { title: 'Un moment', body: "quand pose une question ; il ne reprend jamais un nom. EN: quand asks a question and never picks up a noun.", say: "L'année où nous avons déménagé, tout a changé." } },
    { k: 'une personne', v: 'préposition + qui', say: "La personne à qui j'ai écrit travaille ici.",
      detail: { title: 'Une personne', body: `${REFRAME} EN: ${REFRAME_EN}`, say: 'Les amis chez qui j’ai dormi habitent près du parc.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motdont', 'motou', 'personne'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu écris dont dès qu'un verbe ou un adjectif réclame de, tu ne gardes plus de possessif derrière, tu dis un lieu et un moment avec où, et tu écris la préposition en entier devant qui. Le piège qui reste est le plus discret : le nom de devant. Un quartier est un lieu, et pourtant « le quartier dont tout le monde parle » prend dont, parce que c'est le verbe qui commande. Avant l'examen, reprends ton message et souligne chaque relative. Pour chacune, écris à côté le verbe de la relative et le petit mot qu'il réclame. Si tu ne peux pas nommer ce petit mot, c'est cette phrase-là qu'il faut réécrire. EN: Underline every clause in your message and name the verb inside it and the little word that verb requires; the one you cannot name is the one to rewrite.",
  stats: [
    { k: 'La question', v: 'ce que le verbe réclame' },
    { k: 'Le piège', v: 'le nom de devant, qui ne décide rien' },
    { k: 'La place', v: 'devant, jamais à la fin' },
    { k: 'La suite', v: 'les choses après une préposition' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), ELEVEN rounds of eight, one per
 *  act from act 1 to act 10 plus an integration round. Each round's target is
 *  a distinct errorTrigger, so a failed round fires that round's own drill.
 *
 *  `fold()` strips accents, apostrophes, commas and spacing, so NO typed
 *  answer here turns on one. In particular « où » and « ou » fold onto the
 *  same string and « à qui » onto « a qui »: a typed question therefore never
 *  contrasts a word with its own unaccented form, and the où/quand,
 *  où/dont and dont/que contrasts, which survive folding, carry the typing. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer], why, ref });
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
      id: 'r1-portes', label: 'Les trois portes', targets: ['porte-au-hasard'],
      questions: [
        mc('Pourquoi trois phrases courtes ne suffisent-elles pas au bureau du logement ?',
          ['elles sont fausses', 'elles sont trop longues', 'trente appartements y répondent en même temps'], 2,
          "Aucune ne désigne un appartement plutôt qu'un autre. EN: none of them points at one flat rather than another.", 'a1-scene'),
        mc('Quel mot remplace un de réclamé par le verbe ?', ['dont', 'que', 'où'], 0,
          'dont contient la préposition de. EN: dont contains the preposition de.', 'a1-portes'),
        mc('Un lieu et un moment prennent...', ['le même mot où', 'deux mots différents'], 0,
          "L'anglais a where et when ; le français n'a que où. EN: French has only one word.", 'a1-portes'),
        mc('Devant une personne, la préposition...', ['va à la fin', 'disparaît', "s'écrit en entier"], 2,
          'à qui, avec qui, chez qui. EN: written in full, then qui.', 'a1-portes'),
        tI('Colle ces deux phrases en une seule.', "J'ai besoin d'un appartement. L'appartement est calme.",
          "L'appartement dont j'ai besoin est calme.",
          'besoin réclame de, donc dont. EN: besoin takes de, so dont.', 'a1-reperer'),
        tI('Colle ces deux phrases en une seule.', 'Je veux habiter dans ce quartier. Le quartier est près du fleuve.',
          'Le quartier où je veux habiter est près du fleuve.',
          'Un lieu, donc où, sans rien devant. EN: a place, so où, with nothing in front.', 'a1-reperer'),
        eS("L'appartement que j'ai besoin est calme et près du campus.",
          "L'appartement dont j'ai besoin est calme et près du campus.",
          "que ne porte aucun de. EN: que carries no de.", 'a1-lecture'),
        lC('Écoute. Quel groupe ouvre la relative ?', "La personne à qui j'ai écrit hier ne m'a pas répondu.",
          ['dont', 'à qui', 'où'], 1,
          "écrire à quelqu'un : le à reste écrit. EN: écrire takes à, and the à stays written.", 'a1-usages'),
      ],
    },
    {
      id: 'r2-dont-verbe', label: 'Les verbes en de', targets: ['que-pour-dont'],
      questions: [
        mc('Complète : « Le formulaire ... tu as besoin est en ligne. »', ['que', 'dont'], 1,
          'avoir besoin DE, donc dont. EN: besoin takes de.', 'a2-cartes'),
        mc("Combien de fois écrit-on de dans « le dossier dont j'ai besoin » ?", ['zéro fois', 'une fois', 'deux fois'], 0,
          'dont le contient déjà. EN: dont already contains it.', 'a2-check'),
        mc('Quel verbe ne réclame pas de ?', ['parler', 'rêver', 'regarder'], 2,
          'regarder quelque chose, sans préposition. EN: regarder takes no preposition.', 'a2-construire'),
        tI('Colle ces deux phrases.', "Je t'ai parlé d'un livre. Le livre est à la bibliothèque.",
          "Le livre dont je t'ai parlé est à la bibliothèque.",
          'parler de, donc dont. EN: parler takes de.', 'a2-exemples'),
        tI('Colle ces deux phrases.', "Elle a envie d'un congé. Le congé dure trois semaines.",
          "Le congé dont elle a envie dure trois semaines.",
          'avoir envie de, donc dont. EN: envie takes de.', 'a2-exemples'),
        tI('Mets le bon mot et écris la phrase.', 'Le film ... tout le monde parle sort vendredi.',
          'Le film dont tout le monde parle sort vendredi.',
          'parler de, encore. EN: parler again.', 'a2-ecoute'),
        eS("Le dossier dont j'ai besoin de est sur le comptoir.",
          "Le dossier dont j'ai besoin est sur le comptoir.",
          "Le de est déjà dans dont. EN: the de is already inside dont.", 'a2-piege'),
        lC('Écoute. Le verbe de cette relative réclame-t-il de ?', "Le livre que j'ai lu hier est épuisé.",
          ['Oui', 'Non'], 1,
          'lire quelque chose, sans préposition. EN: lire takes no preposition.', 'a2-piege'),
      ],
    },
    {
      id: 'r3-dont-adjectif', label: 'Les adjectifs en de', targets: ['de-adjectif-perdu'],
      questions: [
        mc('Un adjectif peut-il réclamer de ?', ['non, seulement les verbes', 'oui, comme fier de'], 1,
          'fier de, sûr de, responsable de. EN: adjectives take de too.', 'a3-cartes'),
        mc('« responsable du planning » donne une relative en...', ['dont', 'du dont', 'que du'], 0,
          'du est de + le, et tout fond dans dont. EN: du is de plus le, and it all fuses.', 'a3-check'),
        mc('Complète : « Le travail ... je suis fier a pris six mois. »', ['que', 'dont'], 1,
          'fier DE, donc dont. EN: fier takes de.', 'a3-lecture'),
        mc('La négation enlève-t-elle le de de sûr ?', ['non', 'oui'], 0,
          "« la chose dont je ne suis pas sûr ». EN: the negative changes nothing.", 'a3-check'),
        tI('Colle ces deux phrases.', 'Elle est contente de ce bureau. Le bureau donne sur la cour.',
          'Le bureau dont elle est contente donne sur la cour.',
          'contente de, donc dont. EN: contente takes de.', 'a3-exemples'),
        tI('Mets le bon mot et écris la phrase.', "L'accueil ... elle est responsable ferme à midi.",
          "L'accueil dont elle est responsable ferme à midi.",
          'responsable de, donc dont. EN: responsable takes de.', 'a3-construire'),
        eS('Le travail de qui je suis fier a pris six mois.',
          'Le travail dont je suis fier a pris six mois.',
          "de qui ne sert qu'aux personnes, et dans un style très écrit. EN: de qui is for people and a formal register only.", 'a3-erreurs'),
        lC('Écoute. Quel adjectif réclame le de de cette phrase ?', "L'effort dont il est capable étonne tout le monde.",
          ['capable', 'énorme', 'étonnant'], 0,
          'être capable DE. EN: capable takes de.', 'a3-dictee'),
      ],
    },
    {
      id: 'r4-possession', label: 'Le possesseur', targets: ['dont-son-fils'],
      questions: [
        mc('Après dont, la chose possédée prend...', ['son, sa, ses', 'le, la, les'], 1,
          "L'article, toujours. EN: the article, always.", 'a4-cartes'),
        mc('Complète : « Le club dont ... membres sont motivés se réunit le jeudi. »', ['les', 'ses', 'des'], 0,
          'les, jamais ses. EN: les, never ses.', 'a4-table'),
        mc('Une chose peut-elle posséder quelque chose avec dont ?',
          ['oui, une maison a une porte', 'non', 'seulement les personnes'], 0,
          "dont ne trie pas entre personnes et choses. EN: dont does not sort people from things.", 'a4-check'),
        tI('Colle ces deux phrases.', 'Son fils est médecin. La femme habite en face.',
          'La femme dont le fils est médecin habite en face.',
          'Le possessif tombe, et le fils prend son article. EN: the possessive goes and the son takes his article.', 'a4-construire'),
        tI('Colle ces deux phrases.', "Je connais son frère. La voisine travaille à l'hôpital.",
          "La voisine dont je connais le frère travaille à l'hôpital.",
          "L'ordre de la phrase courte est gardé. EN: the short sentence's order is kept.", 'a4-construire'),
        tI('Mets le bon mot et écris la phrase.', 'Le collègue ... la voiture est en panne prend le bus.',
          'Le collègue dont la voiture est en panne prend le bus.',
          '« sa voiture » veut dire de, donc dont. EN: sa means de, so dont.', 'a4-exemples'),
        eS("L'étudiante dont j'ai oublié son nom revient demain.",
          "L'étudiante dont j'ai oublié le nom revient demain.",
          "Même derrière le verbe, le possessif est de trop. EN: even behind the verb, the possessive is one too many.", 'a4-piege'),
        lC('Écoute. Qui habite en face ?', 'La femme dont le fils est médecin habite en face.',
          ['le fils', 'la femme', 'le médecin'], 1,
          'Le verbe principal reprend la femme. EN: the main verb picks up la femme.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-lieu', label: 'Le lieu', targets: ['lieu-sans-ou'],
      questions: [
        mc("La phrase courte disait « dans cette rue ». La relative dit...", ['dans où', 'que', 'où'], 2,
          'La préposition est déjà dans où. EN: the preposition is already inside où.', 'a5-cartes'),
        mc('Complète : « La bibliothèque ... je travaille ferme à neuf heures. »', ['dont', 'que', 'où'], 2,
          'travailler dans un lieu, donc où. EN: a place, so où.', 'a5-construire'),
        mc('Un pays peut-il prendre dont ?', ['non, un pays est un lieu', 'oui, si le verbe réclame de'], 1,
          "« le pays dont elle parle ». EN: the verb decides.", 'a5-erreurs'),
        mc('Peut-on écrire une préposition devant où ?', ['non, elle est déjà dedans', 'oui'], 0,
          'Pas de « dans où ». EN: no dans où.', 'a5-check'),
        tI('Colle ces deux phrases.', 'Je suis né dans cette ville. La ville compte dix mille habitants.',
          'La ville où je suis né compte dix mille habitants.',
          'Un lieu, donc où. EN: a place, so où.', 'a5-exemples'),
        tI('Colle ces deux phrases.', 'Le soleil entre dans cette pièce. Cette pièce est la cuisine.',
          'La pièce où le soleil entre est la cuisine.',
          'Une pièce est un endroit. EN: a room is a place.', 'a5-exemples'),
        eS("La rue dans où j'habite descend vers le fleuve.",
          "La rue où j'habite descend vers le fleuve.",
          "où contient déjà dans. EN: où already contains dans.", 'a5-erreurs'),
        lC('Écoute. De quel endroit parle cette phrase ?', "Le club où je m'entraîne organise un tournoi chaque printemps.",
          ["d'un club", "d'un café"], 0,
          "« le club où je m'entraîne ». EN: a club.", 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-moment', label: 'Le moment', targets: ['quand-pour-ou'],
      questions: [
        mc("Complète : « Le jour ... je l'ai rencontrée, il neigeait. »", ['quand', 'où', 'que'], 1,
          'Un nom de temps devant, donc où. EN: a time noun in front, so où.', 'a6-cartes'),
        mc('Complète : « ... je suis arrivé, il neigeait. »', ['Quand', 'Où'], 0,
          "Aucun nom devant : c'est quand. EN: no noun in front, so quand.", 'a6-piege'),
        mc('quand sert à...', ['reprendre un nom', 'fermer une relative', 'poser une question'], 2,
          "« Quand pars-tu » reste parfait. EN: quand is still perfect as a question word.", 'a6-check'),
        tI('Colle ces deux phrases.', 'Nous avons déménagé cette année-là. Tout a changé.',
          "L'année où nous avons déménagé, tout a changé.",
          "« cette année-là » devient où. EN: the time group becomes où.", 'a6-construire'),
        tI('Colle ces deux phrases.', 'Elle est partie cette semaine-là. Le bureau était vide.',
          'La semaine où elle est partie, le bureau était vide.',
          'Une semaine est un moment. EN: a week is a moment.', 'a6-construire'),
        tI('Mets le bon mot et écris la phrase.', "La fois ... j'ai oublié mes clés reste mémorable.",
          "La fois où j'ai oublié mes clés reste mémorable.",
          'une fois est un nom de temps. EN: une fois is a time noun.', 'a6-table'),
        eS("L'année quand elle a commencé ses études a été la plus dure.",
          "L'année où elle a commencé ses études a été la plus dure.",
          "quand ne reprend jamais un nom. EN: quand never picks up a noun.", 'a6-piege'),
        lC('Écoute. Que fait le magasin ?', 'Au moment où tu arrives, le magasin ferme.',
          ['il ouvre', 'il ferme'], 1,
          "« le magasin ferme ». EN: it closes.", 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-personnes', label: 'Les personnes', targets: ['preposition-personne'],
      questions: [
        mc('Après une préposition, on écrit...', ['que', 'où', 'qui'], 2,
          "qui, toujours, même si la personne subit l'action. EN: qui, always.", 'a7-cartes'),
        mc("Complète : « Les amis ... j'ai dormi habitent près du parc. »", ['où', 'chez qui', 'que'], 1,
          'Des amis sont des personnes. EN: friends are people.', 'a7-construire'),
        mc('chez qui désigne...', ['la personne', 'le logement'], 0,
          "Le nom de devant est la personne, pas sa maison. EN: the noun in front is the person.", 'a7-cartes'),
        mc('Quelles prépositions fusionnent en un seul mot ?',
          ['toutes', 'de et les prépositions de lieu', 'aucune'], 1,
          'de donne dont, un lieu donne où. EN: de gives dont, a place gives où.', 'a7-check'),
        tI('Colle ces deux phrases.', "J'ai écrit à cette personne. La personne travaille au bureau du logement.",
          "La personne à qui j'ai écrit travaille au bureau du logement.",
          'écrire à, donc à qui. EN: écrire takes à.', 'a7-exemples'),
        tI('Colle ces deux phrases.', 'Je pars avec ce collègue. Le collègue connaît bien la route.',
          'Le collègue avec qui je pars connaît bien la route.',
          'partir avec, donc avec qui. EN: partir takes avec.', 'a7-exemples'),
        eS("La personne à que j'ai écrit travaille au bureau du logement.",
          "La personne à qui j'ai écrit travaille au bureau du logement.",
          "Après une préposition, que n'existe pas. EN: after a preposition, que does not exist.", 'a7-erreurs'),
        lC('Écoute. Qui rentre dimanche ?', 'La voisine pour qui je garde le chat rentre dimanche.',
          ['le chat', 'la voisine'], 1,
          'Le verbe principal reprend la voisine. EN: the main verb picks up la voisine.', 'a7-dictee'),
      ],
    },
    {
      id: 'r8-fin', label: 'Jamais à la fin', targets: ['preposition-a-la-fin'],
      questions: [
        mc('Une relative française peut-elle finir par une préposition ?', ['jamais', 'oui, comme en anglais'], 0,
          `${REFRAME} EN: ${REFRAME_EN}`, 'a8-check'),
        mc("Complète : « L'ami ... j'attends arrive à midi. »", ['que', 'pour qui', 'à qui'], 0,
          'attendre est direct en français. EN: attendre takes no preposition.', 'a8-cartes'),
        mc('Quel verbe est direct en français ?', ['parler', 'se souvenir', 'chercher'], 2,
          'chercher quelque chose, sans for. EN: chercher takes no preposition.', 'a8-construire'),
        tI('Colle ces deux phrases.', "Je travaille avec cette personne. La personne s'appelle Awa.",
          "La personne avec qui je travaille s'appelle Awa.",
          'avec passe devant qui. EN: avec moves in front of qui.', 'a8-exemples'),
        tI('Colle ces deux phrases.', 'Je viens de ce village. Le village compte trois cents habitants.',
          'Le village dont je viens compte trois cents habitants.',
          'venir de, donc dont. EN: venir takes de.', 'a8-construire'),
        tI('Mets le bon mot et écris la phrase.', 'Le bureau ... je travaille est au troisième étage.',
          'Le bureau où je travaille est au troisième étage.',
          'travailler dans un lieu, donc où. EN: a place, so où.', 'a8-ecoute'),
        eS('Le bureau que je travaille dans est au troisième étage.',
          'Le bureau où je travaille est au troisième étage.',
          'dans ne reste pas à la fin : il devient où. EN: dans does not stay at the end.', 'a8-piege'),
        lC('Écoute. Combien de prépositions dans cette relative ?', "L'ami que j'attends arrive à midi.",
          ['une', 'aucune'], 1,
          "« que j'attends » : attendre est direct. EN: attendre is direct.", 'a8-piege'),
      ],
    },
    {
      id: 'r9-choix', label: 'Le choix', targets: ['nom-qui-decide'],
      questions: [
        mc('Le mot de la relative est choisi par...', ['le nom de devant', 'le verbe de la relative'], 1,
          'Un lieu peut prendre dont. EN: a place can take dont.', 'a9-lecture'),
        mc('Complète : « Le quartier ... tout le monde parle est près du fleuve. »', ['dont', 'où', 'que'], 0,
          'parler de, même pour un lieu. EN: parler takes de, even for a place.', 'a9-table'),
        mc('Complète : « Le quartier ... tout le monde veut habiter est près du fleuve. »', ['dont', 'que', 'où'], 2,
          'habiter dans, donc où. EN: habiter takes dans, so où.', 'a9-table'),
        mc('Le verbe ne réclame rien. Tu écris...', ['qui ou que', 'dont', 'où'], 0,
          'Tu retombes sur la leçon précédente. EN: you land back on the previous lesson.', 'a9-check'),
        tI('Colle ces deux phrases.', 'Je me souviens le mieux de ce jour. Ce jour est un dimanche.',
          'Le jour dont je me souviens le mieux est un dimanche.',
          'se souvenir de, même pour un jour. EN: se souvenir takes de, even for a day.', 'a9-construire'),
        tI('Colle ces deux phrases.', 'Nous avons signé ce jour-là. Il faisait beau.',
          'Le jour où nous avons signé, il faisait beau.',
          'signer ne réclame rien, et le jour situe. EN: signer asks for nothing, and the day places the action.', 'a9-construire'),
        eS("La collègue à qui je t'ai parlé change de service.",
          "La collègue dont je t'ai parlé change de service.",
          "parler DE quelqu'un ici, pas à. EN: you speak ABOUT her here, not to her.", 'a9-piege'),
        lC('Écoute. Quel mot ouvre la relative ?', "La ville où j'habite est au bord d'un fleuve.",
          ['dont', 'que', 'où'], 2,
          'habiter dans, donc où. EN: habiter takes dans, so où.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-chaine', label: 'Les phrases longues', targets: ['verbe-principal-perdu'],
      questions: [
        mc('Une relative se place...', ['à la fin de la phrase', 'juste après son nom'], 1,
          "Même au milieu, elle colle à son nom. EN: even mid-sentence, it sticks to its noun.", 'a10-check'),
        mc('Un aparté au milieu de la phrase prend...', ['deux virgules', 'une virgule', 'un point'], 0,
          'Des deux côtés, ou aucune. EN: on both sides, or none.', 'a10-erreurs'),
        mc("« Le village dont je viens, où mes parents vivent encore, ... » Que manque-t-il ?",
          ['une troisième relative', 'une virgule', 'le verbe principal'], 2,
          "« compte trois cents habitants ». EN: the main verb.", 'a10-construire'),
        tI('Colle ces trois phrases en une seule.', "Je t'ai parlé de cet appartement. Il est dans une rue. J'ai grandi dans cette rue.",
          "L'appartement dont je t'ai parlé est dans la rue où j'ai grandi.",
          'Deux relatives, deux noms, un verbe principal. EN: two clauses, two nouns, one main verb.', 'a10-cartes'),
        tI('Colle ces trois phrases en une seule.', 'Je loge chez cet ami. Il travaille dans un immeuble. La bibliothèque est dans cet immeuble.',
          "L'ami chez qui je loge travaille dans l'immeuble où se trouve la bibliothèque.",
          'chez qui pour la personne, où pour le lieu. EN: chez qui for the person, où for the place.', 'a10-exemples'),
        tI('Mets le bon mot et écris la phrase.', 'La collègue avec qui je travaille habite le quartier ... tu vas déménager.',
          'La collègue avec qui je travaille habite le quartier où tu vas déménager.',
          'Un quartier est un lieu. EN: a neighbourhood is a place.', 'a10-construire'),
        eS("L'appartement dont je t'ai parlé est dans la rue dont j'ai grandi.",
          "L'appartement dont je t'ai parlé est dans la rue où j'ai grandi.",
          'Grandir DANS une rue : où. EN: grandir takes dans, so où.', 'a10-erreurs'),
        lC('Écoute. Quel est le verbe principal de cette phrase ?',
          'Le village dont je viens, où mes parents vivent encore, compte trois cents habitants.',
          ['viens', 'vivent', 'compte'], 2,
          'Les deux autres sont dans les relatives. EN: the other two are inside the clauses.', 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-tout', label: 'Tout ensemble', targets: ['description-cassee'],
      questions: [
        mc("Complète : « La chose ... j'ai peur est très simple. »", ['dont', 'où', 'que'], 0,
          'avoir peur DE, donc dont. EN: peur takes de.', 'a11-lecture'),
        mc("Complète : « Le jour ... j'emménage est le premier septembre. »", ['que', 'où'], 1,
          'Un nom de temps devant, donc où. EN: a time noun in front, so où.', 'a11-scenario'),
        mc("Complète : « Tu es la première personne ... j'avais envie d'écrire. »", ['que', 'dont', 'à qui'], 2,
          "écrire à quelqu'un, et le à reste écrit. EN: écrire takes à.", 'a11-cheat'),
        mc("Avant d'envoyer ton texte, tu vérifies surtout...",
          ['la longueur', 'le nombre de mots', "qu'aucune relative ne finit par une préposition"], 2,
          `${REFRAME} EN: ${REFRAME_EN}`, 'a11-plan'),
        tI('Colle ces deux phrases.', 'Je partage avec une étudiante. Son frère travaille à la bibliothèque.',
          'Je partage avec une étudiante dont le frère travaille à la bibliothèque.',
          'Le possessif tombe et le frère prend son article. EN: the possessive goes and le frère takes its article.', 'a11-lecture'),
        tI('Mets le bon mot et écris la phrase.', "Il y a une épicerie ... on trouve du pain jusqu'à tard.",
          "Il y a une épicerie où on trouve du pain jusqu'à tard.",
          'Une épicerie est un endroit. EN: a grocery is a place.', 'a11-lecture'),
        eS("C'est la personne que j'ai visité avec deux fois.",
          "C'est la personne avec qui j'ai visité deux fois.",
          'avec passe devant qui. EN: avec moves in front of qui.', 'a11-scenario'),
        lC('Écoute. Quel mot ouvre la relative ?', 'Le quartier où il se trouve descend vers le fleuve.',
          ['dont', 'où'], 1,
          'se trouver dans un lieu, donc où. EN: a place, so où.', 'a11-review'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a11-review',
  layer: 'core',
  title: 'Neuf cartes avant de fermer',
  frSub: 'Recto le cas, verso le mot',
  cards: [
    { front: 'Le verbe réclame de', back: 'dont', say: "Le livre dont je t'ai parlé est à la bibliothèque." },
    { front: "L'adjectif réclame de", back: 'dont aussi', say: 'Le travail dont je suis fier a pris six mois.' },
    { front: 'Le nom de devant possède quelque chose', back: 'dont + le, la, les', say: 'La femme dont le fils est médecin habite en face.' },
    { front: 'Un endroit', back: 'où, sans rien devant', say: "La rue où j'habite descend vers le fleuve." },
    { front: 'Un jour, une année, un moment', back: 'où, jamais quand', say: "Le jour où j'emménage, c'est le premier septembre." },
    { front: 'Une personne et une autre préposition', back: 'la préposition, puis qui', say: "La personne à qui j'ai écrit travaille ici." },
    { front: 'Le verbe ne réclame rien', back: 'qui ou que', say: "L'ami que j'attends arrive à midi." },
    { front: 'La préposition en anglais est à la fin', back: 'en français, elle ouvre la relative', say: "La personne avec qui je travaille s'appelle Awa." },
    { front: 'Deux relatives dans une phrase', back: 'chacune son nom, et le verbe principal arrive', say: "L'appartement dont je t'ai parlé est dans la rue où j'ai grandi." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motdont', 'motou', 'personne'],
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Ce que tu emportes',
  frSub: 'Onze actes, quatre idées',
  body: `${REFRAME} Tu es parti de deux phrases courtes qui ne désignaient rien, et tu arrives à une description qu'un inconnu peut suivre. Entre les deux, une seule question, posée quatre-vingts fois : qu'est-ce que le verbe réclame. Le de est devenu dont, le lieu et le moment sont devenus où, et les autres prépositions sont restées écrites devant qui. La leçon suivante ajoute lequel, qui fait ce travail pour une chose après une préposition, et les formes qui servent quand il n'y a aucun nom à reprendre. EN: The preposition opens the clause. It never ends the sentence.`,
  points: [
    "dont pour un de, qu'il vienne d'un verbe, d'un adjectif ou d'une possession. EN: dont for any de.",
    "où pour un lieu et pour un moment, sans rien devant. EN: où for a place and a moment.",
    'La préposition écrite en entier devant qui, pour une personne. EN: the preposition written in full before qui.',
    "Rien à la fin : ni petit mot suspendu, ni de en trop. EN: nothing left at the end.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motdont', 'motou', 'personne'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Décrire un lieu et une personne',
    opener: {
      line: "À toi d'écrire : un message que ton ami lira sans rien connaître, et qui doit lui faire voir l'endroit et la personne. EN: Your turn to write: a message your friend will read knowing nothing, which has to show them the place and the person.",
      imageRef: 'lessons/dont-ou/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ta propre description et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You wrote your own description and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 140,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-parler', 'a11-cheat', 'a11-progress', 'a11-quiz', 'a11-review'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_TASK, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* @@ACTS@@ */

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here (a `table` at layer core
 *  is refused by validateDensity). Every sheet is reachable from a mission
 *  through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-dont', 'Tout ce que dont remplace', ['les verbes en de', 'les adjectifs en de', 'la possession'], [
    teach('sheet-dont-teach', 'Un mot, une préposition',
      "dont est la seule relative qui contient déjà sa préposition. Partout où la phrase de départ disait de, du, de la, des ou d'un, la relative dit dont, une seule fois, au début. Le de ne se réécrit jamais derrière : « le dossier dont j'ai besoin », et non « dont j'ai besoin de ». dont vaut pour les personnes comme pour les choses, et il ne change ni au féminin ni au pluriel. EN: dont is the only relative that already contains its preposition, it is written once, at the front, and it never changes form."),
    table('sheet-dont-verbes', 'Les verbes qui arrivent avec de', ['Le verbe', 'La phrase de départ', 'La relative'], [
      ['parler de', "Je t'ai parlé d'un livre.", "le livre dont je t'ai parlé"],
      ['avoir besoin de', "Tu as besoin d'un formulaire.", "le formulaire dont tu as besoin"],
      ['se souvenir de', 'Je me souviens de cette soirée.', 'la soirée dont je me souviens'],
      ['avoir envie de', "Elle a envie d'un congé.", "le congé dont elle a envie"],
      ["s'occuper de", "Il s'occupe des inscriptions.", "les inscriptions dont il s'occupe"],
      ['rêver de', "Nous rêvons d'un appartement.", 'l’appartement dont nous rêvons'],
      ['se servir de', 'Je me sers de ce dictionnaire.', 'le dictionnaire dont je me sers'],
      ['dépendre de', 'Je dépends de cette bourse.', 'la bourse dont je dépends'],
    ]),
    table('sheet-dont-adj', 'Les adjectifs qui arrivent avec de', ['L’adjectif', 'La phrase de départ', 'La relative'], [
      ['fier de', 'Je suis fier de ce travail.', 'le travail dont je suis fier'],
      ['content de', 'Elle est contente de son choix.', 'le choix dont elle est contente'],
      ['sûr de', 'Tu es sûr de cette date.', 'la date dont tu es sûr'],
      ['responsable de', 'Il est responsable du planning.', 'le planning dont il est responsable'],
      ['capable de', 'Elle est capable de cet effort.', 'l’effort dont elle est capable'],
      ['ravi de', 'Nous sommes ravis de cette nouvelle.', 'la nouvelle dont nous sommes ravis'],
    ]),
    table('sheet-dont-possession', 'La possession', ['La phrase de départ', 'La relative', 'La faute à éviter'], [
      ['Son fils est médecin.', 'la femme dont le fils est médecin', 'dont son fils est médecin'],
      ['Sa porte est bleue.', 'la maison dont la porte est bleue', 'dont sa porte est bleue'],
      ['Ses membres sont motivés.', 'le club dont les membres sont motivés', 'dont ses membres sont motivés'],
      ['Je connais son frère.', 'la voisine dont je connais le frère', 'dont je connais son frère'],
    ]),
  ]),
  sheet('sheet-ou', 'où : le lieu et le moment', ['les prépositions avalées', 'le jour où', 'où contre quand'], [
    teach('sheet-ou-teach', 'Un mot pour deux idées',
      "L'anglais partage le travail entre where et when. Le français n'a que où, et il le fait dans les deux cas. Pour un lieu, où remplace la préposition de la phrase courte, quelle qu'elle soit : dans, à, sur, chez, par. Pour un moment, où remplace le groupe de temps entier : ce jour-là, cette année-là, à ce moment-là. Dans les deux cas, rien ne s'écrit devant où et rien ne reste à la fin. EN: English splits the job between where and when; French has one word for both, and nothing is written in front of it or left at the end."),
    table('sheet-ou-lieu', 'Les lieux', ['La phrase courte', 'La relative'], [
      ['Je suis né dans cette ville.', 'la ville où je suis né'],
      ["J'habite dans cette rue.", "la rue où j'habite"],
      ['Tu descends à cette gare.', 'la gare où tu descends'],
      ['Le soleil entre dans cette pièce.', 'la pièce où le soleil entre'],
      ['Elle a grandi au Sénégal.', 'le pays où elle a grandi'],
      ['On trouve du pain dans cette épicerie.', "l'épicerie où on trouve du pain"],
    ]),
    table('sheet-ou-moment', 'Les moments', ['La phrase courte', 'La relative', 'La faute'],  [
      ["Je l'ai rencontrée ce jour-là.", "le jour où je l'ai rencontrée", "le jour quand je l'ai rencontrée"],
      ['Nous avons déménagé cette année-là.', 'l’année où nous avons déménagé', 'l’année quand nous avons déménagé'],
      ['Il a appelé à ce moment-là.', 'le moment où il a appelé', 'le moment quand il a appelé'],
      ['Elle est partie cette semaine-là.', 'la semaine où elle est partie', 'la semaine quand elle est partie'],
      ['Le train arrive à cette heure-là.', "l'heure où le train arrive", "l'heure quand le train arrive"],
      ['On roulait beaucoup à cette époque.', "l'époque où on roulait beaucoup", "l'époque quand on roulait beaucoup"],
    ]),
    teach('sheet-ou-quand', 'Ce que quand fait vraiment',
      "quand pose une question (« Quand pars-tu ») ou ouvre une phrase entière (« Quand je suis arrivé, il pleuvait »). Il ne reprend jamais un nom écrit juste avant lui. C'est là toute la différence avec où : où a besoin d'un nom devant, quand n'en veut pas. EN: quand asks a question or opens a whole clause; it never picks up a noun written just before it, and that is the whole difference."),
  ]),
  sheet('sheet-personnes', 'Les personnes et leurs prépositions', ['les cinq prépositions', 'qui et jamais que', 'la limite du pronom'], [
    teach('sheet-personnes-teach', 'Écrite en entier, puis qui',
      "Devant une personne, la préposition ne fusionne avec rien. Tu l'écris telle qu'elle est dans la phrase courte, puis tu écris qui. à qui, avec qui, chez qui, pour qui, sans qui, contre qui, grâce à qui. Le pronom est toujours qui, même quand la personne subit l'action : après une préposition, que n'existe pas. Et la préposition ne peut jamais rester à la fin, comme l'anglais le permet. EN: in front of a person the preposition is written in full and followed by qui, always qui, and it can never stay at the end."),
    table('sheet-personnes-table', 'Cinq prépositions', ['La phrase courte', 'La relative', "L'anglais"], [
      ["J'ai écrit à cette personne.", "la personne à qui j'ai écrit", 'the person I wrote to'],
      ['Je pars avec ce collègue.', 'le collègue avec qui je pars', 'the colleague I am travelling with'],
      ["J'ai dormi chez ces amis.", "les amis chez qui j'ai dormi", 'the friends I stayed with'],
      ['Je garde le chat pour la voisine.', 'la voisine pour qui je garde le chat', 'the neighbour I am minding the cat for'],
      ['Rien ne marche sans ce technicien.', 'le technicien sans qui rien ne marche', 'the technician nothing works without'],
      ['Je pense à cette personne.', 'la personne à qui je pense', 'the person I am thinking of'],
    ]),
    teach('sheet-personnes-limite', 'Ce que cette leçon ne couvre pas',
      "Tout ce tableau vaut pour une PERSONNE. Pour une chose, une préposition demande un autre pronom, et ce pronom appartient à la leçon suivante. Si tu dois écrire « le projet à ... je pense », arrête-toi : tu n'as pas encore l'outil. Contourne en reprenant le nom, ou attends la leçon 13. EN: all of this is for people; a thing needs a different pronoun, which the next lesson owns."),
  ]),
  sheet('sheet-ecrire', 'Écrire une description longue', ['le plan en cinq étapes', 'la relecture', 'les virgules'], [
    teach('sheet-ecrire-teach', 'Écris court, puis colle',
      "Une phrase longue ne s'écrit pas d'un bloc. Pose tes faits en phrases courtes, sans te relire. Cherche ensuite le nom qui revient d'une phrase à l'autre : c'est là que la relative va se coller. Redis la seconde phrase toute seule pour entendre le petit mot que le verbe réclame, et choisis ta porte. Relis enfin à voix haute : le verbe principal doit arriver. EN: write short sentences first, find the noun that comes back, listen for the little word, then read it aloud to check the main verb arrives."),
    table('sheet-ecrire-plan', 'Les cinq étapes', ['Étape', 'Ce que tu fais'], [
      ['1', 'Écris tes faits en phrases courtes.'],
      ['2', "Cherche le nom qui revient d'une phrase à l'autre."],
      ['3', 'Redis la seconde phrase toute seule et écoute le petit mot.'],
      ['4', 'Choisis : de donne dont, un lieu ou un moment donne où, une autre préposition reste devant qui.'],
      ['5', 'Relis à voix haute : le verbe principal doit arriver.'],
    ]),
    table('sheet-ecrire-virgules', 'Les virgules', ['La forme', 'Ce que ça dit'], [
      ['le village dont je viens compte trois cents habitants', "La relative trie : ce village-là, pas un autre."],
      ['le village, dont je viens, compte trois cents habitants', "La relative ajoute une information sur le seul village en question."],
      ['une seule virgule', 'Toujours une faute : on encadre des deux côtés, ou pas du tout.'],
    ]),
  ]),
  sheet('sheet-choix', 'Le tableau du choix', ['les trois portes', 'les contre-exemples'], [
    teach('sheet-choix-teach', 'Une seule question',
      "Redis la deuxième phrase toute seule et écoute le petit mot collé au verbe ou à l'adjectif. Si c'est de, écris dont. Si c'est un lieu ou un moment, écris où. Si c'est une autre préposition et que le nom est une personne, écris la préposition en entier, puis qui. Si le verbe ne réclame rien, tu es sur le terrain de qui et que. EN: say the second sentence on its own; the little word it needs picks the door."),
    table('sheet-choix-table', 'Ce que le verbe réclame', ['Le petit mot', 'La relative', 'Exemple'], [
      ['rien', 'qui', 'le voisin qui habite en face'],
      ['un complément direct', 'que', "le livre que j'ai lu"],
      ['de', 'dont', "le livre dont je t'ai parlé"],
      ['un lieu', 'où', 'la ville où je suis né'],
      ['un moment', 'où', "le jour où je l'ai rencontrée"],
      ['à, avec, chez, pour, sans + personne', 'préposition + qui', "la personne à qui j'ai écrit"],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS and ERROR TRIGGERS
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-portes', title: 'Quelle porte', format: 'sort' as const, coach: `${THE_TEST} Trois piles : de, un lieu ou un moment, une personne. EN: three piles, by what the verb asked for.`, buckets: ['dont', 'où', 'à qui'], items: [E(1202), E(1204), E(1206), E(1211), E(1212), E(1217)], audio: AUDIO },
  { id: 'd-description', title: 'Relis ta description', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute et nomme le verbe de la relative, puis le petit mot qu'il réclame. Si tu ne peux pas le nommer, réécris la phrase. EN: read each one aloud and name the verb inside the clause and the little word it requires.", items: [E(1394), E(1395), E(1396), E(1397), E(1398), E(1399)], audio: AUDIO },
  { id: 'd-chaine', title: 'La phrase tient-elle', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute et nomme son verbe principal. Si tu ne peux pas le nommer, la phrase est cassée. EN: read each one aloud and name its main verb.", items: [E(1384), E(1385), E(1387), E(1388), E(1389), E(1390)], audio: AUDIO },
  { id: 'd-choix', title: 'Regarde le verbe', format: 'sort' as const, coach: "Trois piles, et ne regarde surtout pas si le nom est un lieu ou une personne. EN: three piles, and do not look at whether the noun is a place or a person.", buckets: ['dont', 'où', 'que'], items: [E(1368), E(1369), E(1370), E(1374), E(1375), E(1376)], audio: AUDIO },
  { id: 'd-fin', title: 'Devant, dedans ou nulle part', format: 'sort' as const, coach: "Trois piles. Regarde où le petit mot a fini : écrit devant qui, fondu dans dont ou où, ou nulle part. EN: three piles, by where the little word ended up.", buckets: ['devant qui', 'dans dont ou où', 'nulle part'], items: [E(1350), E(1348), E(1352), E(1349), E(1356), E(1354)], audio: AUDIO },
  { id: 'd-personnes', title: 'La préposition en entier', format: 'mcq' as const, coach: "Cherche la préposition dans la phrase courte, écris-la, puis qui. EN: find the preposition in the short sentence, write it, then qui.", q: "La personne ... j'ai parlé hier m'a tout expliqué.", opts: ['à qui', 'que'], correct: 0, why: "parler à quelqu'un : le à reste écrit. EN: parler takes à, and the à stays written.", items: [E(1329), E(1331), E(1333), E(1334), E(1337), E(1340)], audio: AUDIO },
  { id: 'd-moment', title: 'Un nom devant, ou rien', format: 'mcq' as const, coach: "Regarde ce qui est écrit juste avant le trou. Un nom de temps : où. Rien : quand. EN: a time noun gives où, nothing at all gives quand.", q: "Le jour ... je l'ai rencontrée, il neigeait.", opts: ['quand', 'où'], correct: 1, why: "Un nom de temps est écrit devant. EN: a time noun is written in front.", items: [E(1307), E(1309), E(1312), E(1315), E(1317), E(1320)], audio: AUDIO },
  { id: 'd-lieu', title: 'Un endroit, un mot', format: 'sort' as const, coach: "Deux piles. Demande-toi si le nom de devant est un endroit, ou si le verbe réclame de. EN: sort by whether the noun is a place or the verb asks for de.", buckets: ['où', 'dont'], items: [E(1289), E(1291), E(1294), E(1296), E(1221), E(1234)], audio: AUDIO },
  { id: 'd-possession', title: 'Le, la, les', format: 'mcq' as const, coach: "Après dont, le propriétaire est déjà dit. La chose prend son article. EN: after dont the owner is already named, so the thing takes its article.", q: 'La femme dont ... fils est médecin habite en face.', opts: ['le', 'son'], correct: 0, why: "dont le dirait deux fois avec son. EN: with son the owner would be named twice.", items: [E(1265), E(1267), E(1269), E(1272), E(1278), E(1283)], audio: AUDIO },
  { id: 'd-dont-adjectif', title: "L'adjectif réclame de", format: 'sort' as const, coach: "Deux piles. Demande-toi si l'adjectif peut rester seul, ou s'il appelle de. EN: sort by whether the adjective can stand alone.", buckets: ['il appelle de', 'il reste seul'], items: [E(1245), E(1247), E(1249), E(1251), E(1255), E(1257)], audio: AUDIO },
  { id: 'd-dont-verbe', title: 'Le verbe réclame de', format: 'mcq' as const, coach: "Redis la phrase courte. Si tu entends de, le mot est dont. EN: say the short sentence; if you hear de, the word is dont.", q: "Le formulaire ... tu as besoin est en ligne.", opts: ['que', 'dont'], correct: 1, why: "avoir besoin DE, donc dont. EN: besoin takes de, so dont.", items: [E(1221), E(1223), E(1227), E(1231), E(1233), E(1234)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'porte-au-hasard', description: 'Picks the relative word without asking what the verb needs, so dont, où and a prepositional relative are used interchangeably wherever a clause is wanted.', detectOn: ['a1-reperer', 'a1-check', 'a1-scene', 'a11-mission'], drill: 'd-portes', retest: 'd-portes' },
  { id: 'que-pour-dont', description: 'Writes que where the verb brought a de of its own, so the clause loses the preposition the verb requires and stalls on a direct object it never had.', detectOn: ['a2-construire', 'a2-piege', 'a2-check', 'a11-mission'], drill: 'd-dont-verbe', retest: 'd-dont-verbe' },
  { id: 'de-adjectif-perdu', description: "Drops the de an adjective requires, or writes it a second time behind dont, so fier de and sûr de lose the preposition that makes them work.", detectOn: ['a3-construire', 'a3-erreurs', 'a3-check', 'a11-mission'], drill: 'd-dont-adjectif', retest: 'd-dont-adjectif' },
  { id: 'description-cassee', description: 'Builds a long description with several clauses and loses one of the pieces on the way: the right word, the preposition, the article after dont, the second comma or the main verb.', detectOn: ['a11-scenario', 'a11-mission', 'a11-plan', 'a11-lecture'], drill: 'd-description', retest: 'd-description' },
  { id: 'verbe-principal-perdu', description: 'Opens two clauses in one sentence and never reaches the main verb, fences an aside with one comma instead of two, or repeats the first clause word in the second where a different one was needed.', detectOn: ['a10-construire', 'a10-erreurs', 'a10-check', 'a11-mission'], drill: 'd-chaine', retest: 'd-chaine' },
  { id: 'nom-qui-decide', description: 'Picks the relative word from the antecedent instead of the verb, so every place gets où and every person gets qui, and la ville dont je parle comes out wrong.', detectOn: ['a9-construire', 'a9-piege', 'a9-check', 'a11-mission'], drill: 'd-choix', retest: 'd-choix' },
  { id: 'preposition-a-la-fin', description: 'Leaves the preposition at the end of the clause on the English pattern, or adds one where the French verb is direct, so attendre, chercher, écouter and regarder gain a preposition they never had.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-fin', retest: 'd-fin' },
  { id: 'preposition-personne', description: 'Reaches for que or où in front of a human antecedent, so the preposition the verb requires is either lost altogether or replaced by a place word.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a11-mission'], drill: 'd-personnes', retest: 'd-personnes' },
  { id: 'quand-pour-ou', description: 'Writes quand after a time noun, on the English when pattern, so the clause opens with a word that cannot pick up the noun standing in front of it.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a11-mission'], drill: 'd-moment', retest: 'd-moment' },
  { id: 'lieu-sans-ou', description: 'Reaches for que or keeps a preposition around a place, writing la ville que je suis né or la rue dans où j’habite, so the clause either loses its link or states it twice.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a11-mission'], drill: 'd-lieu', retest: 'd-lieu' },
  { id: 'dont-son-fils', description: 'Keeps the possessive after dont, on the English whose pattern, so the owner is named twice and the clause reads as two separate possessions.', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a11-mission'], drill: 'd-possession', retest: 'd-possession' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-12-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-12-bureau': "The housing office text (act 1), one male Québécois voice, one take, read at dictation pace. The four short sentences are read flat and evenly, as a list; from « Alors elle a recommencé » the delivery opens out. NO PAUSE AFTER dont, où OR à qui anywhere in this lesson's recordings: the little word belongs to the clause that follows it, and a pause after it would teach the opposite.",
  'rec-b1-12-portes': "The four door cards (act 1). One coach voice. Card four holds a middot pair and must be read as two separate short phrases with a clear break between them, because they are a contrast and not one sentence.",
  'rec-b1-12-karim': "Karim and the coach (act 2), two voices, one take. Karim's second line is the WRONG form and must be read naturally, as somebody reading their own draft aloud; the coach does not correct it in tone, only in words. His sixth line is the repair and is read slightly slower, once.",
  'rec-b1-12-dont': "The four dont cards (act 2). One coach voice. Card three must be read WITHOUT any pause after dont, because the card's claim is that the preposition belongs to the clause behind it. Card four is a three-item middot list, read evenly, with a clear break between the three.",
  'rec-b1-12-dont-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. No pause before or after dont anywhere. Lines four and six both open with « C’est le », so the difference the learner must catch is the noun and the tail, not the opening.',
  'rec-b1-12-piege-dont': "The audio step plays each card's CORRECT sentence. Six lines, one voice, same pace. The wrong versions in promptSound are NEVER spoken, and card five's doubled de is never heard at all.",
  'rec-b1-12-atelier': 'The bike workshop text (act 3), one male voice for the narration and a second, younger male voice for the quoted passage, one take each. The six dont clauses are read inside their sentence with no pause on either side of dont. « fier », « contents », « sûr » and « responsable » carry no extra stress: the point is that they behave like ordinary verbs.',
  'rec-b1-12-modele': "The model message (act 11), one female voice, one take, read as somebody reading a message aloud rather than performing it. The greeting and the sign-off are set off by a clear break. None of the seven clauses takes a pause before its little word.",
  'rec-b1-12-longues': "Nadia and the coach (act 10), two voices, one take. Nadia's first line is INCOMPLETE and must be read as if it were finished, with a falling intonation at the end: the missing main verb is the whole point and a hesitant delivery would give it away.",
  'rec-b1-12-chaine': "The four long-sentence cards (act 10). One coach voice. Cards two and three each carry two commas, and both pauses must be audible and equal. Card four is deliberately UNFINISHED and is read with a trailing pause where the missing pronoun would be.",
  'rec-b1-12-longues-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Four of the eight carry an aside between two commas; both pauses must be real and equal, and no other clause takes one.',
  'rec-b1-12-choix': "The three-doors text (act 9), one female voice, one take, read at a measured explanatory pace. The three quoted sentences about « la ville » must be read at IDENTICAL speed and pitch, because the whole text claims the only difference between them is one word.",
  'rec-b1-12-choix-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Lines one, two and three open with the same three words, so the relative word is the only cue and must not be stressed to help.',
  'rec-b1-12-piege-choix': "The audio step plays each card's CORRECT sentence. Six lines, one voice, same pace. Cards one and two are the SAME noun with two different words; they are recorded back to back so the learner hears the pair.",
  'rec-b1-12-courriel': "Nadia and the coach (act 8), two voices, one take. Nadia's first and fifth lines are both WRONG and are read naturally, at normal speed, with no hesitation before the dangling word: a careful delivery would tell the learner which one is broken before the coach does.",
  'rec-b1-12-fin': "The four placement cards (act 8). One coach voice. Card four is a three-item middot list, read evenly, with a clear break between the three. Nothing on any card is read with a pause before the relative word.",
  'rec-b1-12-fin-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Line two carries NO preposition and line one carries one; they must be read at the same speed, because the mission is whether the ear notices the absence.',
  'rec-b1-12-piege-fin': "The audio step plays each card's CORRECT sentence. Six lines, one voice, same pace. The wrong versions in promptSound are NEVER spoken, and the dangling prepositions in them are never heard at all.",
  'rec-b1-12-cooperative': "The co-op letter (act 7), one female voice, one take, read as a formal circular. The five prepositional groups (à qui, avec qui, chez qui, pour qui, sans qui) are read as ONE breath group each, with no pause between the preposition and qui, because a pause there is exactly the English shape the act is killing.",
  'rec-b1-12-personnes': "The four person cards (act 7). One coach voice. On every card the preposition and qui are spoken as one unit. Card four names the next lesson and must be read flatly, as a signpost rather than a teaching point.",
  'rec-b1-12-jour': "Karim and the coach (act 6), two voices, one take. Karim's first line is the WRONG form and is read naturally. His third line is the SAME sentence minus the noun, and it is correct: it must be read identically to the first apart from the missing two words, because that identity is the teaching.",
  'rec-b1-12-moments': "The four moment cards (act 6). One coach voice. Card four is the CORRECT use of quand and must be read with the same warmth as the others, not as a warning. Card three is a three-item middot list, read evenly, with a clear break between the three.",
  'rec-b1-12-moments-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Five of the eight open with the relative clause, so the comma after it is a breath and not a stop.',
  'rec-b1-12-piege-moment': "The audio step plays each card's CORRECT sentence. Six lines, one voice, same pace. The wrong versions in promptSound are NEVER spoken. Card five's correct sentence uses quand and is the one line in the set with no noun in front of it.",
  'rec-b1-12-quartier': "The neighbourhood text (act 5), one female voice for the narration and the same voice for the quoted passage, one take. The six où clauses are read with NO pause on either side of où, so the learner hears one continuous noun group rather than a list of places.",
  'rec-b1-12-lieux': "The four place cards (act 5). One coach voice. Card one is the SHORT sentence and card two is the joined one; they must be recorded back to back at the same pace, because the card claims dans has turned into où and nothing else has moved.",
  'rec-b1-12-lieux-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Lines two, six and eight all name a place the learner has to catch AFTER où, so the clause must not be slowed down for help.',
  'rec-b1-12-voisins': "Nadia and the coach (act 4), two voices, one take. Nadia's first line is the WRONG form and is read naturally, as somebody describing their neighbours; the coach does not correct it in tone. Her third line is the repair and is read at the same speed, so the only audible difference is one word.",
  'rec-b1-12-possession': "The four possession cards (act 4). One coach voice. Cards one and two must be read at the same pace and pitch, because the card's claim is that the two word orders are the same operation. No pause after dont on any card.",
  'rec-b1-12-possession-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Each line carries TWO verbs, one inside the clause and one after it, and the second must not be set off by a pause: the whole mission is whether the ear finds the main verb without a cue.',
  'rec-b1-12-piege-possession': "The audio step plays each card's CORRECT sentence. Six lines, one voice, same pace. The wrong versions in promptSound are NEVER spoken. Card six's correct form is the LONGER one, with the main verb restored.",
  'rec-b1-12-adjectifs': "The four adjective cards (act 3). One coach voice. Card three is a NEGATIVE sentence and must be read without emphasising « pas », because the card claims the negative changes nothing. Card four is a three-item middot list, read evenly, with a clear break between the three.",
};

export const LESSON: Omit<Lesson, 'sections'> & { sections: DraftSection[] } = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 12',
  intro: "You can already join two sentences with qui and que. That covers every clause where the verb asks for nothing. This lesson covers the rest: the verbs and adjectives that arrive with de, the places and the moments, and the people you write to, travel with or stay at. All three put their little word at the front of the clause, which is the one thing English lets you leave until the end.",
  skill: 'PE',
  grammarAssumed: [QUI_QUE_UNIT, PC_UNIT, COD_UNIT, PREP_LIEU_UNIT, PREP_TEMPS_UNIT, POSSESSIFS_UNIT],
  grammarIntroduced: [
    'The relative clause that carries a preposition, and the rule that the preposition opens the clause instead of ending it',
    'dont as the relative for a verb that takes de: parler de, avoir besoin de, se souvenir de, avoir envie de, s\'occuper de, rêver de',
    'dont as the relative for an adjective that takes de: fier de, content de, sûr de, responsable de, capable de',
    'dont for possession, with the thing owned taking le, la or les and never a possessive adjective',
    'où as the relative for a place, replacing a preposition of place plus the noun',
    'où as the relative for a moment, against the English reflex of translating when',
    'Prepositional relatives with a human antecedent: à qui, avec qui, chez qui, pour qui, sans qui',
    'The three-way choice between dont, où and preposition plus qui, decided by what the verb or adjective requires',
    'Two relative clauses in one sentence, each attached to its own noun, with the main verb still to come',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu sais déjà coller deux phrases avec qui et que. Ça marche partout où le verbe ne réclame rien. Cette leçon prend le reste : les verbes et les adjectifs qui arrivent avec de, les lieux et les moments, et les gens à qui tu écris, avec qui tu pars, chez qui tu loges. Les trois mettent leur petit mot devant, et c'est justement ce que l'anglais laisse à la fin.",
    minutes: 125,
    difficulty: 3,
    glyph: 'ont',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: DONT_OU_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, READING_BUREAU, READING_FIERTE, READING_VOISINAGE, READING_LETTRE, READING_CHOIX, READING_ANNONCE_MODELE, dicteeFor };
