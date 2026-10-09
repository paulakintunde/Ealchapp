// c2.08.l1 « La production orale spontanée » · the lesson. DRAFT, fourth and
// last lesson of C2 wave 2. To RICH-LESSON-STANDARD.md and the C2 rules of
// C2-BUILD-PLAN.md / C2-BUILD-LOG.md ("Wave 2 author briefs"). Structural
// model: c2.01 « Précision, nuance et l'implicite » (precision-nuance-*),
// the wave-1 C2 lesson closest in shape (W, eight acts, one central
// metaphor), copied for its file layout, helpers, act loop and closing act.
//
// Not imported, not merged into seed.json, not published. The `task`
// section is real (in SECTION_TYPES and the LessonSection union), so the
// validators run on `LESSON` itself.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN (count of acts: 8; missions per act: 7,5,5,5,4,2,4,8; total: 40)
// ══════════════════════════════════════════════════════════════════════════
//
//   1  Le direct, sans filet        7  a live call-in show, an unplanned
//                                      objection, a frozen reply against a
//                                      held one; recap of la leçon 9 du C1
//   2  Les mots qui tiennent
//      le temps                     5  deliberate gambits (c'est une bonne
//                                      question, disons que) against empty
//                                      verbal tics and frozen silence
//   3  Le gabarit mental            5  reformuler, prendre position,
//                                      justifier, ouvrir : two worked
//                                      examples of the same four-step cycle
//   4  Se corriger sans
//      perdre le fil                5  self-correction that repairs one
//                                      word in one sentence, against
//                                      restarting from zero or over-apology
//   5  Choisis la meilleure
//      réponse                      4  two full replies to the same
//                                      objection, one that holds together,
//                                      one that drops the thread
//   6  Le vrai rétablissement       2  the trap: a genuine recovery against
//                                      a response that has actually lost
//                                      coherence, same surface fillers
//                                      (stepped trapDrill)
//   7  Sous pression, en scénario   4  a caller tries to change the
//                                      subject; a chain of unplanned turns;
//                                      closing for real instead of trailing
//                                      off
//   8  Ta réponse, à l'instant      8  checklist, THE TASK (a fresh
//                                      unplanned objection, graded on an
//                                      explicit spontaneity rubric), speak
//                                      practice, cheat sheet, progress
//                                      check, quiz, review, roundup
//
//   Corpus: 119 authored rows (fr.c2.discours-dexamen.1800-1918, no gaps;
//   .1919-.1999 left free for the pre-review pass). Quiz: 8 rounds of 6
//   (one round per act). Six error triggers, six drills, three reference
//   sheets, seven terms. Chapter artwork:
//   `c2-production-spontanee-image-prompts.md`, 8 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le direct n'attend pas que tu sois prêt : avance, répare en marchant,
//   et arrive quelque part. »
//   EN: Live does not wait for you to be ready: move forward, repair as you
//   go, and arrive somewhere.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / CITES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    answering an unplanned prompt in real time, with no preparation:
//           a deliberate time-buying gambit against an empty verbal tic or
//           a frozen silence; a four-step mental template for structuring
//           an answer on the fly; self-correction that repairs one word
//           without restarting the whole reply; judging whether a full
//           reply holds together (on topic, one real recovery, a real
//           conclusion) against one that drops the thread or loses
//           coherence entirely; the app's own spontaneous-response task.
//   CITES   « la leçon 9 du C1 » (c1.09), once by name in act 1 and once
//           inside the reading passage: structured, PREPARED oral
//           production from a dossier, before a jury. c2.08 removes the
//           preparation time it assumed.
//   LEAVES  structured debate turn-taking as a skill in itself (c1.21:
//           never cited, never re-taught, per the brief's own instruction);
//           sustained, long-form monologue (c2.09, same wave, which cites
//           THIS lesson once it exists); the whole exam-skill wiring (no
//           `dalf_c2` format exists; the "future PO@c2" note in
//           C2-BUILD-PLAN.md is informational only, nothing built here).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters on air use vous, as the format calls
//   for. No em dash. No U+203F tie. Never "honnête" / "honest" /
//   "honnêtement". Curly apostrophes (’) throughout. No scene bubble ever
//   carries a « ? » or a « ! ». French only on the learner surface; English
//   authored on every `en` field. Theme `discours-dexamen`, block
//   .1800-.1999, used .1800-.1918. Citation by trail position in words.
//   Every person, show and organisation is invented. Version 1 (a new
//   lesson). Tag « C2 · LEÇON 08 », unpadded.
//
// ══════════════════════════════════════════════════════════════════════════
//  SELF-DUPLICATE CHECK (brief requirement, re c2.02's wave-1 dry-run find)
// ══════════════════════════════════════════════════════════════════════════
//
//   Checked by script against this file's own 119 rows: no two rows share
//   an identical `fr` string. See the pre-review validate script this draft
//   leaves for the next session, `scratch/_c208-validate.mts`.
//
// ══════════════════════════════════════════════════════════════════════════

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  REFRAME, REFRAME_EN, C109_REF, CALLER_PRICES_FR, CALLER_PRICES_EN,
} from './production-spontanee-corpus.ts';
import { PRODUCTION_SPONTANEE_TERMS } from './production-spontanee-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };

type SrcItem = { id: string; fr: string; en: string; drills?: string[] };
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));

/** An item's fr/en, from this corpus. Throws on a typo, so no section can
 *  name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id);
  if (!r) throw new Error(`c2.08: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const free = (frText: string, enText: string, note?: string): GItem => ({ fr: frText, en: enText, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
/** A control page: a label and a gating question, no words. */
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

type Card = NonNullable<Sec<'cardDeck'>['cards']>[number];
const card = (id: string, head: string, label: string, body: string): Card => ({ head, label, fr: fr(id), body });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** A deterministic hash, so the slot spreading below is stable run to run. */
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 · LE DIRECT, SANS FILET
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Un appel que personne n’avait prévu',
  frSub: 'Radio Verdon, en direct',
  setting: { place: 'Studio B, Radio Verdon', city: 'Montréal', time: 'samedi, 10 h 40', ambience: 'un micro, un casque trop grand, une vitre qui donne sur la régie' },
  beats: [
    {
      kind: 'narration',
      text: 'Radio Verdon, l’émission du samedi matin, en direct. Odile Franchère t’a invité pour parler du compost collectif du quartier Belmont. Un auditeur appelle, et sa question n’était écrite dans aucune note, ni les siennes, ni les tiennes.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Odile Franchère',
      fr: 'Avant la pause, un appel. Mathieu, vous êtes en ligne.',
      en: 'Before the break, a call. Mathieu, you’re on the line.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mathieu Lacasse',
      fr: `${fr(E(1801))} ${fr(E(1802))}`,
      en: `${en(E(1801))} ${en(E(1802))}`,
      stage: 'Il ne cherche pas la dispute. Il attend vraiment une réponse.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu as la parole. Il faut répondre, maintenant.',
      size: 'lg',
      options: [
        { fr: fr(E(1804)), en: en(E(1804)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1803)), en: en(E(1803)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Odile hoche la tête derrière la vitre. Tu as gagné une seconde de vraie réflexion, et tu sais déjà où tu vas.',
        breaks: 'Un silence s’installe. Mathieu relance doucement, pour savoir si tu es toujours en ligne.',
      },
    },
    {
      kind: 'break',
      heading: 'Un gambit, jamais un silence figé',
      body: 'L’un se noie dans des mots qui ne mènent nulle part ; l’autre gagne le même instant, mais annonce déjà une vraie réponse. EN: one drowns in words leading nowhere; the other buys the same instant while announcing a real answer.',
      wrong: { fr: fr(E(1804)), ipa: '/ø nɔ̃ ɑ̃ fɛt ʒə ɑ̃ fɛ̃ sɛ kɔ̃.pli.ke/', en: en(E(1804)) },
      right: { fr: fr(E(1803)), ipa: '/sɛ.tyn bɔn kɛs.tjɔ̃ e ɛl mə pɛʁ.mɛ də pʁe.si.ze œ̃ pwɛ̃ ɛ̃.pɔʁ.tɑ̃/', en: en(E(1803)) },
      coach: REFRAME,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: 'Cette leçon ne t’apprend pas un texte à apprendre par cœur. Elle t’apprend à tenir, en direct, sans filet : gagner du temps à voix haute, te corriger sans tout recommencer, et finir vraiment, pas seulement t’arrêter.',
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['direct', 'gambit'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Gagner une seconde, à voix haute', s: 'Acte 2 : un gambit annoncé, jamais un tic vide ni un silence' },
    { t: 'Structurer la réponse en la disant', s: 'Acte 3 : le gabarit en quatre gestes' },
    { t: 'Te corriger sans tout recommencer', s: 'Acte 4 : une correction qui garde le fil' },
    { t: 'Tenir debout, du début à la fin', s: 'Actes 5 à 7 : choisir, repérer le vrai rétablissement, improviser sous pression' },
    { t: 'Répondre, en direct', s: 'Acte 8 : une réponse à un auditeur, enregistrée sur le moment' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const DIRECT_TEXT =
  `Face à un jury, tu as eu une heure pour préparer ton exposé : c’est ce que ${C109_REF} t’a appris à tenir. Un auditeur en direct, lui, ne te donne jamais cette heure. Il pose sa question, et tu dois y répondre tout de suite, sans script.\n\n` +
  `Cela ne veut pas dire parler au hasard. Trois outils rendent une réponse spontanée tenable : un gambit, dit lentement, pour gagner une seconde de vraie réflexion ; un gabarit mental, en quatre gestes, pour que cette seconde serve à quelque chose ; une façon de se corriger qui répare un mot sans recommencer toute la phrase. Le dernier outil, le plus facile à oublier, est la conclusion : une réponse qui s’arrête net, sans un mot de clôture, laisse l’auditeur en suspens, même si tout le reste était juste.\n\n` +
  `Ce que ${C109_REF} t’a appris reste vrai : une question réelle, un fil tenu jusqu’au bout. Ici, le fil se tisse en même temps qu’on avance, et il n’y a personne pour relire la copie avant.`;

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Ce qui change, en direct',
  frSub: 'Lis ce qui sépare le préparé du spontané',
  text: DIRECT_TEXT,
  glossary: [
    { word: 'gambit', en: 'a gambit, a stock phrase used to buy thinking time', note: 'Dit lentement, il annonce qu’une réponse construite arrive.' },
    { word: 'gabarit', en: 'template', note: 'Une structure en quatre gestes, pas un texte à apprendre.' },
    { word: 'clôture', en: 'closing', note: 'Un mot de clôture ferme une réponse ; son absence la laisse ouverte.' },
  ],
  questions: [
    { q: 'Global : de quoi parle ce texte, en une phrase ?', a: 'De ce qui change quand on doit répondre sans préparation, face à un auditeur en direct.' },
    { q: 'Détail : quels sont les trois outils nommés pour tenir une réponse spontanée ?', a: 'Un gambit, un gabarit mental en quatre gestes, et une façon de se corriger sans recommencer.' },
    { q: 'Inférence : pourquoi le texte dit-il que la conclusion est l’outil le plus facile à oublier ?', a: 'Parce qu’on peut tout faire juste et pourtant s’arrêter net, sans un mot de clôture, ce qui laisse quand même l’auditeur en suspens.' },
    { q: 'Point de vue : lequel des trois outils te paraît le plus difficile, et pourquoi ?', a: 'Réponse libre. Le texte insiste sur le fil : une structure tenue du début à la fin, sans script.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['direct'],
};

const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-rappel',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu sais déjà',
  frSub: 'Une leçon du C1, en un seul rappel',
  groups: [
    grp(`${Cap(C109_REF)} : l’exposé préparé, devant un jury`, [
      it(E(1805), 'un exposé choisit ses mots avant de les dire'),
      it(E(1806), 'ici, le choix se fait en parlant'),
      it(E(1810), 'personne ne donne une heure, en direct'),
    ], chk(
      'Ce que tu sais de cette leçon vaut-il ici, en direct ?',
      ['Oui, mais l’heure de préparation disparaît complètement.', 'Non, rien ne reste valable.'], 0,
      'Le fil et la question restent utiles ; ce qui change, c’est qu’il n’y a plus de temps pour préparer. EN: the thread and the question still matter; what changes is that there is no time to prepare.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['direct'],
};

const A1_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-gambits',
  title: 'Ce qui change, en direct',
  frSub: 'Quatre cartes avant de commencer',
  hint: 'Quatre cartes. Chacune nomme une différence avec l’exposé préparé.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['direct'],
  cards: [
    card(E(1808), 'Le décor', 'le direct',
      'Personne ne mettait l’émission en pause pour que tu réfléchisses. Elle continue, que tu parles ou non.'),
    card(E(1807), 'La compétence', 'spontanée',
      'Choisir le mot exact en parlant, pas avant de parler : c’est tout l’écart avec un exposé préparé.'),
    card(E(1809), 'Le risque accepté', 'un faux départ',
      'Un début raté n’est pas une catastrophe, à condition de savoir le réparer, ce que l’acte 4 t’apprend.'),
    card(E(1806), 'Le changement', 'en train de parler',
      'Une réponse spontanée choisit ses mots en les disant, jamais avant.'),
  ],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où ça arrive, sans prévenir',
  cases: [
    { situation: 'Un auditeur appelle une émission, en direct, sans prévenir', fr: fr(E(1802)), en: en(E(1802)) },
    { situation: 'Tu dois répondre tout de suite, sans script sous les yeux', fr: fr(E(1810)), en: en(E(1810)) },
    { situation: 'Ta première réaction est de te figer', fr: fr(E(1804)), en: en(E(1804)) },
    { situation: 'Tu choisis plutôt de reconnaître la question d’abord', fr: fr(E(1803)), en: en(E(1803)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['direct', 'gambit'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le décor', 'Ce qui sépare le plus un exposé préparé d’une réponse en direct, c’est…',
    ['le temps donné pour préparer', 'la longueur de la réponse attendue'], 0,
    'Un exposé préparé laisse une heure ; un auditeur en direct n’en laisse aucune. EN: a prepared exposé leaves an hour to prepare; a live caller leaves none.'),
  ctl('Le moment du choix', 'Une réponse spontanée choisit ses mots…',
    ['avant de parler', 'en parlant'], 1,
    'C’est tout l’écart avec un texte préparé à l’avance. EN: that is the whole gap with a text prepared in advance.'),
  ctl('Le silence', 'Face à une question qui te prend au dépourvu, te figer complètement…',
    ['est sans conséquence', 'laisse croire que tu n’as rien à dire'], 1,
    'Un silence complet se lit comme une absence de réponse, pas comme une réflexion. EN: complete silence reads as no answer at all, not as reflection.'),
], ['direct', 'gambit']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le direct, sans filet',
    opener: {
      line: 'Un auditeur appelle en direct, sa question n’était écrite nulle part : ici tu découvres ce que ça change de répondre sans préparation. EN: A caller phones in live, his question was written nowhere: here you see what it changes to answer with no preparation.',
      imageRef: 'lessons/c2-08-production-spontanee/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais ce qui change quand personne ne te laisse préparer : le fil reste, le temps disparaît. EN: You know what changes when nobody lets you prepare: the thread stays, the time is gone.',
    estScreens: 34, restPoints: ['a1-lecture', 'a1-cartes'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_CARTES, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 · LES MOTS QUI TIENNENT LE TEMPS
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Sept gambits, dits lentement',
  frSub: 'Écoute ce qui gagne du temps pour de vrai',
  lines: [ln(E(1812)), ln(E(1813)), ln(E(1814)), ln(E(1815)), ln(E(1816)), ln(E(1817)), ln(E(1818))],
  questions: [
    { q: 'Qu’est-ce que ces sept phrases ont en commun ?', opts: ['Elles annoncent qu’une réponse construite arrive', 'Elles répondent déjà à la question', 'Elles sont toutes des excuses'], correct: 0, why: 'Chacune gagne un instant sans encore rien affirmer sur le fond. EN: each buys a moment without yet stating anything on the substance.' },
    { q: '« Disons que… » fait quoi, précisément ?', opts: ['Ouvre une piste, sans encore la formuler entièrement', 'Change complètement de sujet', 'Admet que tu ne sais pas'], correct: 0, why: 'C’est une porte ouverte vers la réponse, pas un aveu. EN: it is a door opened toward the answer, not an admission.' },
    { q: '« Laissez-moi reformuler votre question » fait quoi ?', opts: ['Redonne la question dans tes propres mots', 'Refuse de répondre', 'Répète mot pour mot ce qui a été dit'], correct: 0, why: 'Reformuler prend le contrôle du rythme sans jamais répéter mot pour mot. EN: rephrasing takes control of the pace without ever repeating word for word.' },
    { q: 'Pourquoi dire ces phrases lentement, et non à toute vitesse ?', opts: ['Parce qu’un gambit dit vite sonne comme un tic vide', 'Pour des raisons de respiration uniquement'], correct: 0, why: 'La vitesse est ce qui distingue un vrai gambit d’un tic nerveux. EN: speed is what tells a real gambit apart from a nervous tic.' },
    { q: '« Je dirais même plus » annonce quoi ?', opts: ['Que la réponse va aller plus loin que prévu', 'Que tu changes d’avis complètement'], correct: 0, why: 'Il prépare un renforcement de ce qui vient d’être dit. EN: it sets up a strengthening of what was just said.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['gambit'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-gambits',
  title: 'Quatre fonctions, un seul outil',
  frSub: 'Ce qu’un gambit fait vraiment',
  hint: 'Quatre cartes, quatre gambits.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['gambit'],
  cards: [
    card(E(1812), 'Reconnaître la question', 'la bonne question',
      'Dire que la question est bonne gagne un instant, sans rien promettre de faux sur la réponse à venir.'),
    card(E(1813), 'Ouvrir une piste', 'disons que',
      'Annonce qu’une réponse arrive, avant même qu’elle soit entièrement formulée.'),
    card(E(1814), 'Chercher le mot exact', 'comment dire',
      'Montre que tu réfléchis au mot juste, pas que tu es perdu.'),
    card(E(1818), 'Prendre le rythme', 'reformuler',
      'Redonne la question dans tes propres mots, et donc le contrôle du rythme de ta réponse.'),
  ],
};

const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-trier',
  layer: 'core',
  size: 'lg',
  title: 'Gambit ou tic vide',
  groups: [
    grp('Un gambit, dit lentement', [
      it(E(1812)), it(E(1813)), it(E(1815)), it(E(1816)), it(E(1817)),
    ], chk(
      'Ce que ces cinq phrases ont en commun, c’est…',
      ['elles annoncent qu’une réponse construite arrive', 'elles évitent de répondre pour toujours'], 0,
      'Chacune gagne un instant, puis la réponse suit vraiment. EN: each buys a moment, and the answer genuinely follows.')),
    grp('Un tic verbal, sans contenu derrière', [
      free(fr(E(1819)), en(E(1819)), 'aucune piste ouverte'),
      free(fr(E(1820)), en(E(1820)), 'cinq mots de remplissage, rien de plus'),
      free(fr(E(1821)), en(E(1821)), 'une fin qui abandonne la phrase'),
    ], chk(
      'Ce qui manque à ces trois phrases, par rapport à un vrai gambit, c’est…',
      ['une direction : elles ne promettent aucune réponse à venir', 'la politesse'], 0,
      'Un tic vide se répète sans jamais déboucher sur rien. EN: an empty tic repeats itself without ever leading anywhere.')),
    ctl('Le silence', 'Comparé à un tic verbal répété, un silence complet et prolongé est…',
      ['pire : il ne promet même pas une réponse à venir', 'toujours préférable, car plus discret'], 0,
      'Au moins le tic verbal montre que tu es en train de réfléchir. EN: at least the verbal tic shows you are in the middle of thinking.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['gambit'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Trois gambits ratés',
  errors: [
    {
      wrong: fr(E(1819)),
      right: fr(E(1812)),
      why: 'Trois « euh » de suite ne promettent rien ; dire que la question est bonne, si, et ça gagne le même instant. EN: three "um"s in a row promise nothing; saying the question is a good one does, in the same amount of time.',
    },
    {
      wrong: fr(E(1820)),
      right: fr(E(1813)),
      why: '« Alors, en fait, du coup, bon, voilà » accumule les tics sans jamais ouvrir de piste ; « disons que » en ouvre une, en un seul mouvement. EN: that string of fillers piles up without ever opening a path; "disons que" opens one, in a single move.',
    },
    {
      wrong: fr(E(1821)),
      right: fr(E(1814)),
      why: '« Bon ben, je sais pas, quoi » abandonne la phrase avant même qu’elle commence ; « comment dire » montre une vraie recherche du mot exact. EN: that line gives up on the sentence before it even starts; "comment dire" shows a genuine search for the exact word.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['gambit'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La fonction', 'Un gambit comme « disons que » sert avant tout à…',
    ['annoncer qu’une réponse construite arrive', 'changer de sujet discrètement'], 0,
    'Il ouvre une piste, il ne la ferme jamais. EN: it opens a path, it never closes one.'),
  ctl('Le débit', 'Un gambit dit à toute vitesse risque de sonner comme…',
    ['un tic verbal', 'une insulte'], 0,
    'La vitesse brouille la différence entre les deux. EN: speed blurs the difference between the two.'),
  ctl('Le pire des trois', 'Entre un gambit, un tic verbal répété et un silence complet, le moins utile est…',
    ['le gambit', 'le silence complet'], 1,
    'Le silence ne promet même pas qu’une réponse arrive. EN: silence does not even promise that an answer is coming.'),
], ['gambit']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Les mots qui tiennent le temps',
    opener: {
      line: 'Entre un silence qui s’étire et un gambit dit lentement, un seul des deux annonce qu’une réponse arrive : ici tu apprends à le choisir. EN: Between a silence that stretches on and a gambit said slowly, only one of the two announces that an answer is coming: here you learn to choose it.',
      imageRef: 'lessons/c2-08-production-spontanee/act02.jpg',
    },
    sections: [],
    milestone: 'Tu gagnes une seconde de vraie réflexion avec un gambit, jamais avec un tic vide ou un silence. EN: You buy one second of real thought with a gambit, never with an empty tic or silence.',
    estScreens: 24, restPoints: ['a2-trier'],
  },
  sections: [A2_ECOUTE, A2_CARTES, A2_TRIER, A2_ERREURS, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 · LE GABARIT MENTAL
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-gabarit',
  title: 'Quatre gestes, un gabarit',
  frSub: 'Ce qui structure une réponse qu’on n’a pas préparée',
  hint: 'Quatre cartes, dans l’ordre.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['gabarit'],
  cards: [
    card(E(1830), '1', 'reformuler', 'Redis la question avec tes propres mots, pour montrer que tu l’as bien entendue.'),
    card(E(1832), '2', 'prendre position', 'En une phrase, dis clairement ce que tu penses, sans tourner autour.'),
    card(E(1834), '3', 'justifier', 'Appuie ta position sur un exemple concret, jamais sur une idée générale.'),
    card(E(1836), '4', 'nuancer ou ouvrir', 'Admets une limite, ou ouvre une question, sans tout remettre en cause.'),
  ],
};

const A3_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-table',
  layer: 'core',
  title: 'Le gabarit, en exemple',
  cols: ['Geste', 'Exemple'],
  rows: [
    { cells: ['reformuler', fr(E(1831))], say: fr(E(1831)), detail: { title: 'Pourquoi reformuler', body: 'Ça montre que tu as entendu la vraie question, pas une autre. EN: it shows you heard the real question, not another one.', say: fr(E(1841)) } },
    { cells: ['prendre position', fr(E(1833))], say: fr(E(1833)), detail: { title: 'Une phrase, pas dix', body: 'Une position claire tient en une phrase ; plus long, elle se dilue. EN: a clear position fits in one sentence; longer, it dilutes.', say: fr(E(1842)) } },
    { cells: ['justifier', fr(E(1835))], say: fr(E(1835)), detail: { title: 'Un exemple, pas une généralité', body: 'Un cas précis convainc plus qu’une idée générale non appuyée. EN: a precise case convinces more than an unsupported general idea.', say: fr(E(1843)) } },
    { cells: ['nuancer ou ouvrir', fr(E(1837))], say: fr(E(1837)), detail: { title: 'Sans tout remettre en cause', body: 'Nuancer précise la position ; ça ne l’annule jamais. EN: qualifying refines the position; it never cancels it.', say: fr(E(1844)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['gabarit'],
};

const A3_BUILD: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-build',
  layer: 'core',
  size: 'lg',
  title: 'Même gabarit, deuxième question',
  frSub: 'Les horaires du compost, cette fois',
  groups: [
    grp('Reformuler', [it(E(1831)), it(E(1841))], chk(
      'Les deux phrases font quoi, exactement ?',
      ['Elles redisent la question avec d’autres mots', 'Elles répondent déjà à la question'], 0,
      'Reformuler précède toujours la position, il ne la remplace pas. EN: rephrasing always comes before the position, it never replaces it.')),
    grp('Prendre position', [it(E(1833)), it(E(1842))], chk(
      'Ces deux phrases tiennent en…',
      ['une seule phrase claire', 'plusieurs phrases qui tournent autour'], 0,
      'Une position claire se dit en une phrase, pas en plusieurs détours. EN: a clear position is said in one sentence, not several detours.')),
    grp('Justifier', [it(E(1835)), it(E(1843))], chk(
      'Ce que ces deux exemples ont en commun, c’est…',
      ['un fait concret et nommé, pas une généralité', 'une statistique officielle'], 0,
      'Un exemple concret, même petit, vaut mieux qu’une idée générale. EN: a concrete example, even a small one, beats a general idea.')),
    grp('Nuancer ou ouvrir', [it(E(1837)), it(E(1844))], chk(
      'Cette dernière étape sert à…',
      ['préciser la position sans l’annuler', 'annuler tout ce qui vient d’être dit'], 0,
      'Nuancer n’efface jamais la position prise juste avant. EN: qualifying never erases the position just taken.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['gabarit'],
};

const A3_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-atoi',
  layer: 'core',
  size: 'lg',
  title: 'À toi : repère le geste manquant',
  groups: [
    grp('Une réponse à trois gestes, un geste absent', [
      free(fr(E(1831)), en(E(1831)), 'geste 1 : présent'),
      free(fr(E(1833)), en(E(1833)), 'geste 2 : présent'),
      free(fr(E(1837)), en(E(1837)), 'geste 4 : présent'),
    ], chk(
      'Quel geste du gabarit manque dans cette réponse ?',
      ['Justifier avec un exemple concret', 'Prendre position'], 0,
      'La réponse reformule, prend position puis ouvre, mais ne justifie jamais avec un fait. EN: the reply rephrases, takes a position, then opens up, but never justifies with a fact.')),
    ctl('Le gabarit entier', 'Dans l’ordre, les quatre gestes du gabarit sont…',
      ['reformuler, prendre position, justifier, ouvrir', 'justifier, ouvrir, reformuler, conclure'], 0,
      'C’est l’ordre qui tient debout, geste après geste. EN: that order is the one that holds, move after move.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['gabarit'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('L’ordre', 'Le premier geste du gabarit est toujours…',
    ['reformuler la question', 'justifier avec un exemple'], 0,
    'On reformule avant de prendre position, jamais après. EN: you rephrase before taking a position, never after.'),
  ctl('La justification', 'Un bon geste 3 s’appuie sur…',
    ['un exemple concret et nommé', 'une idée générale, sans exemple'], 0,
    'Un cas précis convainc, une généralité non appuyée non. EN: a precise case convinces; an unsupported generality does not.'),
  ctl('Ce que le gabarit ne fait jamais', 'Le dernier geste, nuancer ou ouvrir, sert à…',
    ['préciser la position, sans l’annuler', 'annuler complètement la position prise'], 0,
    'Nuancer précise ; il ne détruit jamais ce qui vient d’être dit. EN: qualifying refines; it never destroys what was just said.'),
], ['gabarit']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Le gabarit mental',
    opener: {
      line: 'Reformuler, prendre position, justifier, ouvrir : quatre gestes qui tiennent debout, quel que soit le sujet du jour. EN: Rephrase, take a position, justify, open up: four moves that hold, whatever the day’s topic is.',
      imageRef: 'lessons/c2-08-production-spontanee/act03.jpg',
    },
    sections: [],
    milestone: 'Tu structures une réponse improvisée en quatre gestes, dans l’ordre, quel que soit le sujet. EN: You structure an improvised reply in four moves, in order, whatever the topic.',
    estScreens: 26, restPoints: ['a3-build'],
  },
  sections: [A3_CARTES, A3_TABLE, A3_BUILD, A3_ATOI, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 · SE CORRIGER SANS PERDRE LE FIL
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Une phrase qui se répare',
  frSub: 'Écoute où elle trébuche, et où elle se corrige',
  lines: [
    { fr: 'Le compost, enfin, je veux dire, les odeurs, ça a été réglé assez vite.', en: 'The compost, well, I mean, the smells, that got fixed fairly fast.' },
    ln(E(1847)), ln(E(1848)), ln(E(1849)), ln(E(1850)),
  ],
  questions: [
    { q: 'La première phrase trébuche sur quel mot ?', opts: ['le compost', 'les odeurs'], correct: 0, why: 'Elle commence sur « le compost », puis se corrige vers « les odeurs », le vrai sujet. EN: it starts on "le compost", then corrects itself to "les odeurs", the real subject.' },
    { q: '« Ou plutôt, précisons les choses » fait quoi ?', opts: ['Répare un mot, sans arrêter la phrase', 'Annule tout ce qui a été dit avant'], correct: 0, why: 'Elle corrige, elle ne repart jamais de zéro. EN: it corrects, it never starts over from zero.' },
    { q: '« Je précise » annonce quoi ?', opts: ['Qu’un détail va être rendu plus exact', 'Qu’une excuse va suivre'], correct: 0, why: 'Elle prépare une précision, pas des excuses. EN: it sets up a clarification, not an apology.' },
    { q: 'Ce que ces quatre corrections ont en commun, c’est…', opts: ['Chacune répare en une phrase, sans s’arrêter', 'Chacune commence par une excuse'], correct: 0, why: 'Aucune ne s’excuse : chacune répare et continue. EN: none of them apologises: each repairs and keeps going.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fil'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-tenir',
  title: 'Réparer sans repartir de zéro',
  frSub: 'Quatre marqueurs de correction',
  hint: 'Quatre cartes, quatre façons de se corriger.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['fil'],
  cards: [
    card(E(1847), 'Remplacer un mot', 'ou plutôt', 'Remplace le mot qui vient d’être dit par le mot plus exact, sans rien effacer d’autre.'),
    card(E(1848), 'Clarifier l’intention', 'ce que je veux dire', 'Précise ce que la phrase précédente voulait vraiment dire, sans la renier.'),
    card(E(1849), 'Corriger un détail', 'pour être exact', 'Signale qu’un détail va être rendu plus précis, sans dramatiser l’erreur.'),
    card(E(1850), 'Préciser une portée', 'je précise', 'Limite ou élargit ce qui vient d’être dit, d’un seul mouvement.'),
  ],
};

const A4_BUILD: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-build',
  layer: 'core',
  size: 'lg',
  title: 'Une correction qui tient, une qui efface',
  groups: [
    grp('Une correction qui garde le fil', [
      it(E(1857)), it(E(1858)), it(E(1859)),
    ], chk(
      'Ce que ces trois corrections ont en commun, c’est…',
      ['chacune répare un détail, sans arrêter la réponse', 'chacune commence par une excuse'], 0,
      'Aucune ne repart de zéro ; chacune ajuste et continue. EN: none restarts from zero; each adjusts and continues.')),
    grp('Un effacement complet', [
      free(fr(E(1852)), en(E(1852)), 'repart de zéro, deux excuses'),
      free(fr(E(1853)), en(E(1853)), 'perd le fil complètement'),
    ], chk(
      'Ce qui ne va pas avec ces deux réponses, c’est…',
      ['elles effacent tout ce qui tenait déjà debout', 'elles sont trop courtes'], 0,
      'Recommencer depuis le début jette ce qui était déjà construit. EN: starting over from the beginning throws away what was already built.')),
    ctl('Le compte', 'S’excuser trois fois de suite pour une même petite erreur…',
      ['attire plus l’attention que l’erreur elle-même', 'rassure toujours l’auditeur'], 0,
      'La répétition de l’excuse devient le vrai problème. EN: the repeated apology becomes the real problem.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fil'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Deux effacements, deux réparations',
  errors: [
    { wrong: fr(E(1852)), right: fr(E(1847)), why: 'Repartir depuis le début jette tout ce qui tenait déjà ; remplacer un seul mot le garde. EN: starting over throws away everything that was already standing; replacing one word keeps it.' },
    { wrong: fr(E(1853)), right: fr(E(1849)), why: '« Je sais plus où j’en étais » perd le fil pour de vrai ; « pour être exact » répare un détail sans jamais le perdre. EN: "I don’t know where I was" genuinely loses the thread; "to be exact" repairs a detail without ever losing it.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fil'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La cible', 'Une bonne correction vise…',
    ['un mot ou une idée, jamais la phrase entière', 'toujours la phrase entière'], 0,
    'Corriger large efface plus qu’il ne répare. EN: correcting broadly erases more than it repairs.'),
  ctl('Les excuses', 'S’excuser plusieurs fois de suite pour une même erreur…',
    ['attire l’attention sur l’erreur', 'la fait oublier'], 0,
    'La répétition devient visible là où une correction simple ne l’aurait pas été. EN: the repetition becomes noticeable where a simple correction would not have been.'),
  ctl('Le choix', 'Entre « ou plutôt » et « je recommence depuis le début », le premier…',
    ['garde la direction de la phrase', 'l’efface complètement'], 0,
    'Un garde le fil, l’autre le jette. EN: one keeps the thread, the other throws it away.'),
], ['fil']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Se corriger sans perdre le fil',
    opener: {
      line: 'Un mot mal choisi n’est jamais la fin d’une réponse : ici tu apprends à le remplacer sans tout recommencer. EN: A badly chosen word is never the end of a reply: here you learn to replace it without starting over.',
      imageRef: 'lessons/c2-08-production-spontanee/act04.jpg',
    },
    sections: [],
    milestone: 'Tu répares un mot ou une idée en une phrase, sans jamais recommencer depuis le début. EN: You repair one word or one idea in a single sentence, without ever starting over from the beginning.',
    estScreens: 26, restPoints: ['a4-build'],
  },
  sections: [A4_ECOUTE, A4_CARTES, A4_BUILD, A4_ERREURS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 · CHOISIS LA MEILLEURE RÉPONSE
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-tenir',
  title: 'Trois choses qui tiennent une réponse debout',
  frSub: 'Avant de comparer deux réponses',
  hint: 'Trois cartes.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['tenir'],
  cards: [
    card(E(1875), 'Le sujet', 'rester sur le sujet', 'Répondre à la question posée, pas à une autre, plus facile.'),
    card(E(1872), 'La limite admise', 'reconnaître, puis répondre', 'Admettre une limite réelle n’empêche jamais de donner un fait ensuite.'),
    card(E(1866), 'La fin', 'une vraie conclusion', 'Une réponse qui ne conclut jamais laisse l’auditeur sans rien à retenir.'),
  ],
};

const A5_COMPARE1: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-compare1',
  layer: 'core',
  size: 'lg',
  title: 'L’emploi : deux réponses possibles',
  groups: [
    grp(`L’objection : « ${fr(E(1863))} »`, [
      free(fr(E(1864)), en(E(1864)), 'réponse A'),
      it(E(1865), 'réponse B'),
    ], chk(
      'Laquelle tient debout, et pourquoi ?',
      ['La réponse B : elle reconnaît la limite, puis donne un fait précis', 'La réponse A : elle promet de vérifier plus tard'], 0,
      'La réponse A ne conclut jamais ; la B nomme l’objectif réel et chiffre un fait. EN: reply A never concludes; B names the real goal and gives a figure.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tenir'],
};

const A5_COMPARE2: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-compare2',
  layer: 'core',
  size: 'lg',
  title: 'Le coût : deux réponses possibles',
  groups: [
    grp(`L’objection : « ${fr(E(1868))} »`, [
      free(fr(E(1869)), en(E(1869)), 'réponse A'),
      it(E(1870), 'réponse B'),
    ], chk(
      'Laquelle tient debout, et pourquoi ?',
      ['La réponse B : gambit, position, puis nuance chiffrée', 'La réponse A : un aveu d’ignorance, sans rien proposer'], 0,
      'S’arrêter sur un aveu d’ignorance laisse le fil tomber ; la réponse B avance vers une nuance utile. EN: stopping on an admission of ignorance drops the thread; reply B moves toward a useful nuance.')),
    ctl('Le point commun', 'Ce qui distingue une réponse A ratée d’une réponse B réussie, dans les deux cas, c’est…',
      ['une vraie conclusion contre un fil qui tombe', 'la longueur de la phrase'], 0,
      'La longueur ne fait rien ; ce qui compte, c’est d’arriver quelque part. EN: length does nothing; what matters is arriving somewhere.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['tenir'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le critère principal', 'Une réponse qui tient debout doit avant tout…',
    ['rester sur le sujet, se rétablir une fois, et conclure', 'être grammaticalement parfaite'], 0,
    'Une réponse peut être sans fautes et pourtant ne tenir debout nulle part. EN: a reply can be flawless and still not stand up anywhere.'),
  ctl('Le fil qui tombe', 'Une réponse qui s’arrête sur un aveu d’ignorance, sans rien proposer…',
    ['laisse le fil tomber', 'reste toujours la meilleure option'], 0,
    'Reconnaître une limite ne suffit pas sans un fait ou une suite. EN: acknowledging a limit is not enough without a fact or a next step.'),
  ctl('Le fait précis', 'Entre une réponse vague et une réponse qui donne un fait précis après avoir reconnu la limite…',
    ['la seconde tient mieux debout', 'les deux se valent'], 0,
    'Le fait précis donne à l’auditeur quelque chose à retenir. EN: the precise fact gives the listener something to hold on to.'),
], ['tenir']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Choisis la meilleure réponse',
    opener: {
      line: 'Deux réponses à la même objection, et une seule tient debout : ici tu apprends à voir pourquoi. EN: Two replies to the same objection, and only one stands up: here you learn to see why.',
      imageRef: 'lessons/c2-08-production-spontanee/act05.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais une réponse qui tient debout : sur le sujet, un rétablissement, une vraie fin. EN: You can recognise a reply that holds up: on topic, one recovery, a real end.',
    estScreens: 20, restPoints: ['a5-compare1'],
  },
  sections: [A5_CARTES, A5_COMPARE1, A5_COMPARE2, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 · LE VRAI RÉTABLISSEMENT (trapDrill, stepped)
 * ══════════════════════════════════════════════════════════════════════════ */

const TRAP_STEPS = [
  { label: 'La règle', kind: 'rule' as const, title: 'Même surface, deux destinations' },
  { label: 'Cinq paires', kind: 'cards' as const, title: 'Ce que chaque paire raconte' },
  { label: 'Écoute', kind: 'audio' as const, title: 'Écoute les cinq rétablissements réels' },
  { label: 'À toi', kind: 'drill' as const, title: 'Huit cas', gate: true },
];

type TrapCardT = { promptLabel: string; promptSound: string; fr: string; ipa: string; tip: string };
const tcard = (promptLabel: string, promptSoundId: string, correctId: string, ipa: string, tip: string): TrapCardT =>
  ({ promptLabel, promptSound: fr(promptSoundId), fr: fr(correctId), ipa, tip });

const A6_TRAP: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-trap',
  layer: 'core',
  title: 'Le vrai rétablissement',
  frSub: 'Même hésitation, deux fins différentes',
  rule: {
    title: 'Ce qui sépare les deux',
    body: "« Enfin, bon, je sais plus » tourne en rond. « Ou plutôt, disons les choses ainsi » nomme le problème et avance. EN: one circles, the other names the problem and moves on.",
  },
  steps: TRAP_STEPS,
  cards: [
    tcard('Cohérence perdue', E(1877), E(1878), '/ɑ̃.fɛ̃ bɔ̃ ʒə se ply/', "Enfin, bon, je sais plus n’avance vers rien ; ou plutôt nomme le vrai souci et corrige. EN: it moves toward nothing; the other names the real issue and fixes it."),
    tcard('Cohérence perdue', E(1879), E(1880), '/alɔʁ dy ku ɑ̃ fɛt/', "Revenir en arrière sans jamais préciser quoi laisse l’auditeur sans rien ; préciser un point le fixe. EN: backtracking without ever specifying what leaves the listener with nothing; specifying one point fixes it."),
    tcard('Cohérence perdue', E(1881), E(1882), '/nɔ̃ ɑ̃ fɛt lɛse tɔ̃be/', "Laisser tomber referme la réponse sur rien ; préciser l’intention la referme sur un fait. EN: dropping it closes the reply on nothing; clarifying the intent closes it on a fact."),
    tcard('Cohérence perdue', E(1883), E(1884), '/bɔ̃ apʁɛ ʒə se pa tʁo/', "Empiler les avis sans trancher ne mène nulle part ; trancher, même modestement, avance. EN: piling up opinions without deciding goes nowhere; deciding, even modestly, moves forward."),
    tcard('Cohérence perdue', E(1885), E(1886), '/dɔ̃k vwala ɑ̃fɛ̃ sɛ kɔ̃plike/', "Multiplier les peut-être ne conclut rien ; une phrase qui tient en dit plus en moins de mots. EN: stacking up these maybes concludes nothing; one sentence that holds says more in fewer words."),
  ],
  drill: [
    { promptSay: fr(E(1877)), opts: ['cohérence perdue', 'rétablissement réel'], correct: 0 },
    { promptSay: fr(E(1878)), opts: ['cohérence perdue', 'rétablissement réel'], correct: 1 },
    { promptSay: fr(E(1879)), opts: ['cohérence perdue', 'rétablissement réel'], correct: 0 },
    { promptSay: fr(E(1880)), opts: ['cohérence perdue', 'rétablissement réel'], correct: 1 },
    { promptSay: fr(E(1881)), opts: ['cohérence perdue', 'rétablissement réel'], correct: 0 },
    { promptSay: fr(E(1882)), opts: ['cohérence perdue', 'rétablissement réel'], correct: 1 },
    { promptSay: fr(E(1883)), opts: ['cohérence perdue', 'rétablissement réel'], correct: 0 },
    { promptSay: fr(E(1884)), opts: ['cohérence perdue', 'rétablissement réel'], correct: 1 },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['retablissement'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La différence réelle', 'Ce qui distingue un rétablissement réel d’une cohérence perdue n’est jamais…',
    ['le mot d’hésitation employé au début', 'ce qui arrive juste après l’hésitation'], 0,
    'Le mot d’hésitation peut être identique dans les deux cas. EN: the hesitation word can be identical in both cases.'),
  ctl('Le signe qui trahit', 'Une cohérence perdue se reconnaît surtout parce qu’elle…',
    ['tourne en rond sans jamais rien nommer', 'contient trop de mots'], 0,
    'Elle n’avance jamais vers une phrase qui tient. EN: it never moves toward a sentence that holds.'),
  ctl('Le signe qui rassure', 'Un vrai rétablissement se reconnaît parce qu’il…',
    ['nomme le problème et avance', 'évite complètement le problème'], 0,
    'Nommer, puis avancer : c’est tout ce qu’il faut. EN: naming it, then moving forward: that is all it takes.'),
], ['retablissement']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Le vrai rétablissement',
    opener: {
      line: 'Deux hésitations presque identiques, et deux destinations complètement différentes : ici tu apprends à entendre laquelle est laquelle. EN: Two almost identical hesitations, and two completely different destinations: here you learn to hear which is which.',
      imageRef: 'lessons/c2-08-production-spontanee/act06.jpg',
    },
    sections: [],
    milestone: 'Tu distingues un rétablissement réel d’une cohérence perdue, même quand ils commencent pareil. EN: You can tell a genuine recovery from a lost coherence, even when they start the same way.',
    estScreens: 22, restPoints: [],
  },
  sections: [A6_TRAP, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 · SOUS PRESSION, EN SCÉNARIO
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-atoi',
  layer: 'core',
  size: 'lg',
  title: 'Un auditeur change de sujet',
  groups: [
    grp('Un deuxième auditeur préférerait parler du bruit du camion', [
      it(E(1894), 'reconnaît et reporte'),
      it(E(1895), 'nomme la différence, sans fuir'),
    ], chk(
      'Ce que ces deux réponses font, c’est…',
      ['reconnaître la nouvelle question et y revenir après', 'ignorer complètement la nouvelle question'], 0,
      'On ne fuit jamais une nouvelle question ; on la note et on y revient. EN: you never dodge a new question; you note it and come back to it.')),
    ctl('Le danger', 'Changer complètement de sujet au milieu d’une réponse…',
      ['perd l’auditeur, pas seulement le fil', 'clarifie toujours la réponse'], 0,
      'L’auditeur ne sait plus à quelle question la réponse répond. EN: the listener no longer knows which question the reply answers.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['direct'],
};

const A7_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a7-scenario',
  layer: 'core',
  title: 'À toi : la fin de l’émission',
  setting: 'Un deuxième auditeur appelle, puis Odile relance une dernière fois avant la pause publicitaire. Tu es en direct ; réponds sans script.',
  turns: [
    {
      ai: 'Moi, ce qui m’intéresse, c’est plutôt le bruit du camion de collecte, le mardi matin.',
      en: 'What interests me, personally, is more the collection truck’s noise, on Tuesday mornings.',
      user: fr(E(1894)),
      userEn: `${en(E(1894))} (Acknowledge the new question, defer it, keep the thread of the first one.)`,
      alts: [
        { fr: fr(E(1895)), en: en(E(1895)) },
        { fr: 'C’est un vrai sujet, mais un autre que celui d’aujourd’hui ; notons-le pour une prochaine émission.', en: 'That is a real topic, but a different one from today’s; let’s note it for a future show.' },
      ],
    },
    {
      ai: 'Il nous reste trente secondes pour un dernier mot.',
      en: 'We have thirty seconds left for a final word.',
      user: `${fr(E(1900))} ${fr(E(1902))}`,
      userEn: `${en(E(1900))} ${en(E(1902))} (Name a concrete next step, then close for real.)`,
      alts: [
        { fr: 'En trois mots : un vrai geste, des réglages possibles, et une suite publique. Merci d’avoir appelé.', en: 'In three words: a real move, possible adjustments, and a public follow-up. Thanks for calling.' },
      ],
    },
  ],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Deux façons de perdre l’auditeur',
  errors: [
    { wrong: 'Ah oui, le camion, tiens, en fait, parlons plutôt de ça, j’avais pas pensé à ça.', right: fr(E(1894)), why: 'Sauter sur le nouveau sujet abandonne la première réponse en plein milieu ; noter la question et y revenir garde les deux fils. EN: jumping on the new topic abandons the first reply halfway through; noting the question and returning to it keeps both threads.' },
    { wrong: 'Voilà, enfin, bon, c’est tout, je crois.', right: `${fr(E(1900))} ${fr(E(1902))}`, why: 'Une formule vague ne nomme aucune suite ; un bilan en trois points, puis un remerciement, referme la réponse pour de bon. EN: a vague phrase names no next step; a three-point summary closes the reply.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['conclusion'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le nouveau sujet', 'Face à une question qui change complètement de sujet, la bonne réaction est de…',
    ['la reconnaître et y revenir après avoir fini la première', 'y répondre immédiatement, en abandonnant la première'], 0,
    'On ne laisse tomber aucune des deux questions. EN: you never drop either question.'),
  ctl('La fin', 'Une réponse qui s’arrête net, sans un mot de clôture, laisse l’auditeur…',
    ['en suspens', 'parfaitement satisfait'], 0,
    'Même juste sur le fond, une fin absente laisse un vide. EN: even if correct on substance, a missing ending leaves a gap.'),
  ctl('Le bilan', 'Nommer trois points, puis remercier, avant de couper, c’est…',
    ['une vraie conclusion', 'une politesse facultative'], 0,
    'C’est la conclusion qui ferme la réponse pour de bon. EN: it is the conclusion that closes the reply for good.'),
], ['conclusion']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Sous pression, en scénario',
    opener: {
      line: 'Un deuxième auditeur veut parler d’autre chose, puis l’émission se termine dans trente secondes : ici tu tiens les deux sans rien lâcher. EN: A second caller wants to talk about something else, then the show ends in thirty seconds: here you hold both without dropping anything.',
      imageRef: 'lessons/c2-08-production-spontanee/act07.jpg',
    },
    sections: [],
    milestone: 'Tu gères un changement de sujet sans fuir, et tu termines une réponse pour de vrai, pas en t’arrêtant net. EN: You handle a change of topic without dodging, and you actually end a reply instead of just stopping.',
    estScreens: 24, restPoints: ['a7-scenario'],
  },
  sections: [A7_ATOI, A7_SCENARIO, A7_ERREURS, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 · TA RÉPONSE, À L’INSTANT
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_CHECKLIST: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-checklist',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-tenir',
  title: 'Avant de répondre',
  frSub: 'Quatre cartes, un dernier rappel',
  hint: 'Quatre cartes.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['gabarit', 'tenir'],
  cards: [
    card(E(1907), 'Le gabarit', 'reformuler, position, exemple, ouvrir', 'Passe les quatre gestes en revue avant de parler, pas pendant.'),
    card(E(1908), 'Le gambit', 'dit à voix haute', 'Un gambit dit lentement vaut mieux qu’un silence qui s’étire.'),
    card(E(1909), 'La correction', 'un mot, pas tout', 'Une correction qui garde le fil vaut mieux qu’un effacement complet.'),
    card(E(1910), 'La fin', 'une vraie conclusion', 'Une réponse qui conclut vaut mieux qu’une réponse qui s’arrête sans le dire.'),
  ],
};

const TASK_BRIEF_FR =
  `Tu es l’invité du jour sur Radio Verdon, pour présenter le marché de producteurs du quartier Belmont. Un auditeur appelle en direct, sans prévenir : « ${CALLER_PRICES_FR} » Tu as le micro, maintenant.`;

const A8_MISSION: Sec<'task'> = {
  type: 'task', id: 'a8-mission', title: 'Réponds, en direct', frSub: 'Mission orale',
  brief: TASK_BRIEF_FR,
  briefEn: `You are today’s guest on Radio Verdon, presenting the Belmont neighbourhood producers’ market. A caller phones in live, with no warning: "${CALLER_PRICES_EN}" The microphone is yours now.`,
  produce: 'Réponds à voix haute, entre soixante et cent vingt secondes, sans texte préparé : reformule l’objection, prends position, justifie avec un exemple concret, nuance ou ouvre, et termine par une vraie conclusion.',
  responseSpec: { kind: 'audio', minDurationS: 60, maxDurationS: 120 },
  rubric: {
    criteria: [
      { key: 'sujet', label: 'Reste sur la vraie question', maxPoints: 4, descriptors: [
        "4 : La réponse traite réellement l’objection posée (le prix, et qui il exclut), sans se réfugier dans un sujet plus facile ou déjà préparé.",
        "3 : La réponse traite l’objection, mais glisse un moment vers un sujet voisin avant de revenir.",
        '2 : La réponse ne répond qu’à une partie de l’objection (le prix, sans l’exclusion, ou l’inverse).',
        "1 : La réponse change de sujet, ou répond à une question différente de celle posée.",
      ] },
      { key: 'retablissement', label: 'Un rétablissement réel, si besoin', maxPoints: 4, descriptors: [
        "4 : S’il y a un faux départ ou une hésitation, la réponse s’en rétablit réellement : elle nomme ce qu’elle veut dire et avance, sans tourner en rond.",
        "3 : Un rétablissement a lieu, mais prend plus d’un détour pour arriver à une phrase qui tient.",
        '2 : Un faux départ est suivi d’un effacement complet (recommencer depuis le début, s’excuser plusieurs fois).',
        "1 : La réponse tourne en rond après un faux départ, sans jamais rien nommer ni avancer.",
      ] },
      { key: 'conclusion', label: 'Une vraie conclusion', maxPoints: 4, descriptors: [
        "4 : La réponse se termine par un mot de clôture clair : un fait, une suite concrète, ou un rappel de la position, pas seulement un arrêt.",
        "3 : La réponse conclut, mais la fin reste un peu vague (« voilà, c’est à peu près ça »).",
        '2 : La réponse s’arrête net, sans mot de clôture repérable, même si le contenu était bon.',
        "1 : La réponse trahit un silence qui traîne, ou s’interrompt au milieu d’une idée.",
      ] },
      { key: 'gambit', label: 'Un gambit dit à voix haute, jamais un silence figé', maxPoints: 3, descriptors: [
        "3 : La réponse utilise au moins un gambit reconnaissable (disons que, c’est une bonne question, comment dire), dit posément, pour gagner un instant de réflexion réelle.",
        '2 : Un gambit est utilisé, mais répété plusieurs fois comme un tic plutôt que ponctuellement.',
        "1 : Aucun gambit : un silence figé, ou un tic verbal vide (euh euh euh) sans aucune piste ouverte.",
      ] },
      { key: 'gabarit', label: 'Le gabarit tenu', maxPoints: 3, descriptors: [
        "3 : On entend les quatre gestes : une reformulation, une position claire, un exemple concret, puis une nuance ou une ouverture.",
        '2 : Trois des quatre gestes sont là ; un manque (le plus souvent l’exemple concret).',
        "1 : Deux gestes ou moins : la réponse part dans plusieurs directions sans structure repérable.",
      ] },
      { key: 'langue', label: 'Une langue fluide', maxPoints: 2, descriptors: [
        '2 : Peu ou pas d’erreurs qui gênent l’écoute ; un débit régulier.',
        "1 : Des erreurs fréquentes, ou un débit si irrégulier qu’il gêne la compréhension.",
      ] },
    ],
  },
  scaffold: [
    'C’est une bonne question.',
    'Si je comprends bien, vous dites que…',
    'Je dirais que…',
    'Par exemple…',
    'Ce qui ne veut pas dire que…',
    'En résumé,…',
  ],
  modelAnswer: "C’est une bonne question, et elle méritait d’être posée directement. Si je comprends bien, vous dites que nos prix écartent justement les familles qui en auraient le plus besoin. Je dirais que c’est en partie vrai, et que ce n’est pas notre objectif : les prix couvrent le juste prix payé aux producteurs, pas une marge pour le marché. Ce qui ne veut pas dire que l’accès est réglé pour tout le monde, d’ailleurs, enfin, pour être exact, il ne l’est pas encore partout. Le marché propose déjà un panier solidaire à prix réduit, le mercredi, et on travaille à l’étendre à un deuxième jour. En résumé : le prix n’est pas gonflé, l’accès reste un vrai sujet, et une solution existe déjà, même si elle doit grandir. Merci pour votre appel.",
  modelAnswerEn: "That’s a good question, and it deserved to be asked directly. If I understand correctly, you’re saying our prices specifically exclude the families who’d need this most. I’d say that’s partly true, and it isn’t our goal: the prices cover what’s fairly paid to the producers, not a margin for the market. Which doesn’t mean access is solved for everyone, actually, well, to be exact, it isn’t everywhere yet. The market already offers a reduced-price solidarity basket, on Wednesdays, and we’re working to extend it to a second day. In short: the price isn’t inflated, access remains a real issue, and a solution already exists, even if it needs to grow. Thanks for your call.",
  watchFor: [
    { pattern: 'The reply denies the problem outright, or answers a different, easier question than the one asked.', criterion: 'sujet', feedback: 'Reformule d’abord ce que l’auditeur dit vraiment, puis réponds à ça, pas à une version plus facile. EN: rephrase what the caller actually says first, then answer that, not an easier version.', ref: 'a3-cartes' },
    { pattern: 'A false start is followed by a complete restart from zero, or repeated apologies, rather than a one-sentence repair.', criterion: 'retablissement', feedback: 'Répare un mot ou une idée en une phrase ; ne recommence jamais depuis le début. EN: repair one word or idea in a single sentence; never start over from the beginning.', ref: 'a4-cartes' },
    { pattern: 'The reply trails off, stops mid-idea, or ends on a vague filler with no real closing move.', criterion: 'conclusion', feedback: 'Termine par un fait, une suite concrète, ou un rappel clair de ta position. EN: end with a fact, a concrete next step, or a clear restatement of your position.', ref: 'a7-erreurs' },
    { pattern: 'No gambit at all: either frozen silence or a repeated empty tic (euh, euh, euh) with no real content following.', criterion: 'gambit', feedback: 'Dis un vrai gambit, lentement, avant de répondre sur le fond. EN: say a real gambit, slowly, before answering on substance.', ref: 'a2-cartes' },
    { pattern: 'The reply skips the concrete example, staying on general ideas only, or skips taking a clear position.', criterion: 'gabarit', feedback: 'Appuie ta position sur un exemple concret et nommé, pas sur une idée générale. EN: back your position with a named, concrete example, not a general idea.', ref: 'a3-table' },
    { pattern: 'The reply changes subject entirely when challenged, abandoning the original objection.', criterion: 'sujet', feedback: 'Note la nouvelle idée si besoin, mais finis de répondre à la question posée d’abord. EN: note the new idea if needed, but finish answering the question that was actually asked first.', ref: 'a7-atoi' },
    { pattern: 'The reply is grammatically correct throughout but never actually concludes or takes a clear stance.', criterion: 'conclusion', feedback: 'Une réponse peut être sans fautes et ne tenir debout nulle part si elle ne conclut jamais. EN: a reply can be flawless and still not stand up anywhere if it never concludes.', ref: 'a5-cartes' },
  ],
  graderNotes: [
    'Duration: 60 to 120 seconds, with brief tolerance either side before length alone costs points.',
    "This task marks SPONTANEITY: staying on topic, a genuine recovery if a false start happens, and a real conclusion. It is not primarily a grammar check (C2 has no new grammar, per C2-BUILD-PLAN.md); score 'langue' low weight relative to the other five criteria.",
    'Accept any gambit that genuinely buys thinking time (disons que, c’est une bonne question, comment dire, si je puis dire), not only the exact phrases modelled.',
    'A false start is not itself a fault: do not penalise hesitation markers that are followed by a real repair. Penalise only a restart from zero, repeated apology, or a reply that never arrives anywhere after the hesitation.',
    'Accept any concrete example that is specific and plausible, even if it differs from the model (the solidarity basket, a different day, a different concession).',
    'Feedback language: unsimplified C2 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['tenir', 'conclusion'],
};

const A8_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a8-parler', layer: 'core', title: 'Dis chaque outil à voix haute', skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
  audio: AUDIO, say: REFRAME, terms: ['gambit', 'fil'],
};

const A8_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a8-cheat', layer: 'core', sheetId: 'sheet-tenir',
  title: 'Tout l’outillage sur un écran',
  rows: [
    { k: 'le gambit', v: 'c’est une bonne question, disons que, comment dire', say: fr(E(1812)),
      detail: { title: 'Dit lentement, jamais vite', body: 'Un gambit dit vite sonne comme un tic. EN: a gambit said fast sounds like a tic.', say: fr(E(1826)) } },
    { k: 'le gabarit', v: 'reformuler, position, exemple, ouvrir', say: fr(E(1830)),
      detail: { title: 'Quatre gestes, un contenu différent', body: 'Le gabarit structure la démarche, pas le sujet. EN: the template structures the move, not the topic.', say: fr(E(1845)) } },
    { k: 'la correction', v: 'ou plutôt, ce que je veux dire, pour être exact', say: fr(E(1847)),
      detail: { title: 'Un mot, jamais toute la phrase', body: 'Recommencer depuis zéro efface ce qui tenait déjà. EN: starting over from zero erases what was already standing.', say: fr(E(1856)) } },
    { k: 'tenir debout', v: 'sur le sujet, un rétablissement, une conclusion', say: fr(E(1875)),
      detail: { title: 'Pas la grammaire seule', body: 'Une réponse parfaite grammaticalement peut ne tenir debout nulle part. EN: a grammatically perfect reply can still not stand up anywhere.', say: fr(E(1876)) } },
    { k: 'le vrai rétablissement', v: 'nomme le problème, puis avance', say: fr(E(1878)),
      detail: { title: 'Jamais le mot d’hésitation', body: 'La différence est dans ce qui arrive juste après l’hésitation. EN: the difference is in what comes right after the hesitation.', say: fr(E(1889)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['gabarit', 'retablissement'],
};

const A8_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a8-progress', layer: 'core', title: 'Où tu en es',
  body: "Tu réponds maintenant à une question que tu n’as pas préparée, en gagnant une seconde de vraie réflexion avec un gambit dit lentement, jamais avec un tic vide ou un silence figé. Tu structures ta réponse en quatre gestes dits en même temps que tu les penses, tu répares un mot sans jamais recommencer toute la phrase, et tu reconnais la différence entre un vrai rétablissement et une cohérence qui tourne en rond. Le piège qui reste est toujours le même : s’arrêter net, sans un mot de clôture, même quand tout le reste était juste. Avant l’examen, prends une vraie question qu’on t’a posée cette semaine sans prévenir, et réponds-y à voix haute, en te chronométrant. EN: Before any exam, take a real question someone asked you unprepared this week, and answer it aloud, timing yourself.",
  stats: [
    { k: 'Le temps gagné', v: 'un gambit dit lentement, jamais un silence' },
    { k: 'La structure', v: 'reformuler, position, exemple, ouvrir' },
    { k: 'La réparation', v: 'un mot, jamais toute la phrase' },
    { k: 'La fin', v: 'une vraie conclusion, jamais un arrêt net' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ────────────────────────────────────────────────────────────── */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Un mot ou un geste trahit l’improvisation ratée. Écris la version qui tient debout. EN: One word or move betrays the botched improvisation; write the version that holds together.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A8_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a8-quiz', layer: 'core', title: 'Le bilan', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-direct', label: 'Le direct, sans filet', targets: ['silence-plutot-que-gambit'],
      questions: [
        mc('Ce qui sépare le plus un exposé préparé d’une réponse en direct, c’est…', ['le temps donné pour préparer', 'la politesse attendue', 'la longueur de la réponse'], 0, 'Une heure de préparation contre aucune. EN: an hour to prepare versus none.', 'a1-check'),
        mc('Une réponse spontanée choisit ses mots…', ['avant de parler', 'en parlant', 'au hasard, sans y penser'], 1, 'Elle choisit en même temps qu’elle se dit. EN: it chooses as it is being said.', 'a1-check'),
        tI('Complète. Un mot.', 'Un début raté s’appelle un faux … .', 'départ', 'C’est le terme nommé dans la leçon. EN: that is the term named in the lesson.', 'a1-cartes'),
        tI('Complète. Un mot.', 'Ici, personne ne te donne une heure, c’est une émission en … .', 'direct', 'Le mot clé de toute la leçon. EN: the key word of the whole lesson.', 'a1-scene'),
        eS('Face à une question imprévue, le mieux est de se figer complètement en silence.', 'Face à une question imprévue, le mieux est de reconnaître la question d’abord.', 'Un silence complet laisse croire que tu n’as rien à dire. EN: complete silence suggests you have nothing to say.', 'a1-check'),
        lC('Écoute. Cette phrase vient-elle d’une réponse réussie ou ratée.', fr(E(1804)), ['réussie', 'ratée'], 1, 'Elle hésite sans jamais avancer vers une idée. EN: it hesitates without ever moving toward an idea.', 'a1-scene'),
      ],
    },
    {
      id: 'r2-gambit', label: 'Les mots qui tiennent le temps', targets: ['tic-vide-pour-gambit'],
      questions: [
        mc('Un gambit comme « disons que » sert avant tout à…', ['annoncer qu’une réponse construite arrive', 'changer de sujet discrètement', 'mettre fin à la conversation'], 0, 'Il ouvre une piste, il ne la ferme jamais. EN: it opens a path, it never closes one.', 'a2-cartes'),
        mc('Entre un tic verbal répété et un silence complet, le moins utile est…', ['le tic verbal', 'le silence complet', 'aucun des deux, ils valent pareil'], 1, 'Le silence ne promet même pas qu’une réponse arrive. EN: silence does not even promise that an answer is coming.', 'a2-trier'),
        tI('Complète. Un mot.', 'Dit à toute vitesse, un bon gambit risque de sonner comme un simple … verbal.', 'tic', 'La vitesse brouille la différence entre les deux. EN: speed blurs the difference between the two.', 'a2-erreurs'),
        tI('Complète. Un mot.', '« Comment … » montre une vraie recherche du mot exact, pas une perte.', 'dire', 'C’est le gambit qui nomme la recherche du mot. EN: the gambit that names the search for the word.', 'a2-ecoute'),
        eS('Pour gagner du temps à voix haute, répète euh, euh, euh plusieurs fois.', 'Pour gagner du temps à voix haute, dis c’est une bonne question, posément.', 'Un tic répété ne promet rien ; un gambit si. EN: a repeated tic promises nothing; a gambit does.', 'a2-erreurs'),
        lC('Écoute. Ce mot est-il un gambit ou un tic vide.', fr(E(1813)), ['un gambit', 'un tic vide'], 0, 'Il ouvre une piste claire. EN: it opens a clear path.', 'a2-trier'),
      ],
    },
    {
      id: 'r3-gabarit', label: 'Le gabarit mental', targets: ['gabarit-incomplet'],
      questions: [
        mc('Le premier geste du gabarit est toujours…', ['reformuler la question', 'justifier avec un exemple', 'nuancer ou ouvrir'], 0, 'On reformule avant de prendre position, jamais après. EN: you rephrase before taking a position, never after.', 'a3-check'),
        mc('Un bon geste 3 (justifier) s’appuie sur…', ['un exemple concret et nommé', 'une idée générale, sans exemple', 'une statistique officielle obligatoire'], 0, 'Un cas précis convainc plus. EN: a precise case convinces more.', 'a3-table'),
        tI('Complète. Un mot.', 'Le dernier geste du gabarit est nuancer ou … .', 'ouvrir', 'C’est le quatrième geste. EN: that is the fourth move.', 'a3-cartes'),
        tI('Complète. Un mot.', 'Redire la question avec tes propres mots, c’est le geste … .', 'reformuler', 'Le premier geste du gabarit. EN: the template’s first move.', 'a3-cartes'),
        eS('Pour justifier une position, il suffit de répéter une idée générale, sans exemple.', 'Pour justifier une position, il faut un exemple concret et nommé.', 'Une généralité non appuyée ne convainc jamais. EN: an unsupported generality never convinces.', 'a3-table'),
        lC('Écoute. Ce geste nuance-t-il la position, ou l’annule-t-il.', fr(E(1837)), ['il la nuance', 'il l’annule'], 0, 'Nuancer précise, sans jamais détruire. EN: qualifying refines, without ever destroying.', 'a3-atoi'),
      ],
    },
    {
      id: 'r4-correction', label: 'Se corriger sans perdre le fil', targets: ['effacement-au-lieu-de-reparer'],
      questions: [
        mc('Une bonne correction vise…', ['un mot ou une idée, jamais la phrase entière', 'toujours la phrase entière', 'uniquement la grammaire'], 0, 'Corriger large efface plus qu’il ne répare. EN: correcting broadly erases more than it repairs.', 'a4-check'),
        mc('S’excuser plusieurs fois de suite pour une même erreur…', ['attire l’attention sur l’erreur', 'la fait toujours oublier', 'reste sans aucun effet'], 0, 'La répétition devient visible. EN: the repetition becomes noticeable.', 'a4-build'),
        tI('Complète. Un mot.', 'Pour remplacer un mot sans rien effacer d’autre, on dit « ou … » .', 'plutôt', 'Le marqueur qui remplace sans effacer. EN: the marker that replaces without erasing.', 'a4-cartes'),
        tI('Complète. Un mot.', 'Pour corriger un détail sans dramatiser, on dit « pour être … » .', 'exact', 'Le marqueur qui corrige un détail. EN: the marker that corrects a detail.', 'a4-cartes'),
        eS('Après un mot mal choisi, le mieux est de recommencer toute la phrase depuis le début.', 'Après un mot mal choisi, le mieux est de dire ou plutôt, puis de continuer.', 'Recommencer efface ce qui tenait déjà debout. EN: restarting erases what was already standing.', 'a4-erreurs'),
        lC('Écoute. Cette phrase répare-t-elle un mot, ou efface-t-elle tout.', fr(E(1852)), ['elle répare un mot', 'elle efface tout'], 1, 'Elle recommence depuis le début, deux fois de suite. EN: it restarts from the beginning, twice in a row.', 'a4-erreurs'),
      ],
    },
    {
      id: 'r5-tenir', label: 'Choisis la meilleure réponse', targets: ['reponse-sans-conclusion'],
      questions: [
        mc('Une réponse qui tient debout doit avant tout…', ['rester sur le sujet, se rétablir une fois, et conclure', 'être grammaticalement parfaite', 'être la plus longue possible'], 0, 'Une réponse sans fautes peut pourtant ne tenir debout nulle part. EN: a flawless reply can still not stand up anywhere.', 'a5-check'),
        mc('Une réponse qui s’arrête sur un aveu d’ignorance, sans rien proposer…', ['laisse le fil tomber', 'reste toujours la meilleure option', 'impressionne le plus l’auditeur'], 0, 'Reconnaître une limite ne suffit pas sans un fait. EN: acknowledging a limit is not enough without a fact.', 'a5-compare2'),
        tI('Complète. Un mot.', 'Une réponse qui ne conclut jamais laisse le … tomber.', 'fil', 'C’est le mot nommé dans l’acte 5. EN: that is the word named in act 5.', 'a5-cartes'),
        tI('Complète. Un mot.', 'Entre deux réponses, celle qui tient « ensemble » est celle qui … .', 'conclut', 'Conclure est la dernière des trois conditions. EN: concluding is the last of the three conditions.', 'a5-cartes'),
        eS('Pour répondre à l’objection sur l’emploi, il suffit de promettre de vérifier plus tard.', 'Pour répondre à l’objection sur l’emploi, il faut reconnaître la limite, puis donner un fait précis.', 'La réponse A ne conclut jamais. EN: reply A never concludes.', 'a5-compare1'),
        lC('Écoute. Cette réponse conclut-elle, ou s’arrête-t-elle sur un aveu.', fr(E(1869)), ['elle conclut', 'elle s’arrête sur un aveu'], 1, 'Elle s’arrête sur « je les ai pas sous la main ». EN: it stops on "I don’t have them on hand".', 'a5-compare2'),
      ],
    },
    {
      id: 'r6-retablissement', label: 'Le vrai rétablissement', targets: ['coherence-perdue-non-vue'],
      questions: [
        mc('Ce qui distingue un rétablissement réel d’une cohérence perdue n’est jamais…', ['le mot d’hésitation employé au début', 'ce qui arrive juste après', 'la longueur totale de la réponse'], 0, 'Le mot d’hésitation peut être identique dans les deux cas. EN: the hesitation word can be identical in both cases.', 'a6-check'),
        mc('Une cohérence perdue se reconnaît surtout parce qu’elle…', ['tourne en rond sans jamais rien nommer', 'contient trop de mots', 'utilise un vocabulaire trop simple'], 0, 'Elle n’avance jamais vers une phrase qui tient. EN: it never moves toward a sentence that holds.', 'a6-trap'),
        tI('Complète. Un mot.', 'Nommer le problème et avancer, c’est un vrai … .', 'rétablissement', 'Le terme exact de l’acte 6. EN: the exact term from act 6.', 'a6-trap'),
        tI('Complète. Un mot.', 'Tourner en rond sans rien nommer, c’est une cohérence … .', 'perdue', 'Le terme opposé. EN: the opposite term.', 'a6-trap'),
        eS('Pour se rétablir, il suffit de dire ou plutôt, puis de s’arrêter là.', 'Pour se rétablir, il faut dire ou plutôt, puis nommer le vrai point et avancer.', 'S’arrêter juste après le marqueur ne nomme rien. EN: stopping right after the marker names nothing.', 'a6-trap'),
        lC('Écoute. Rétablissement réel, ou cohérence perdue.', fr(E(1883)), ['rétablissement réel', 'cohérence perdue'], 1, 'Elle empile les avis sans jamais trancher. EN: it piles up opinions without ever deciding.', 'a6-trap'),
      ],
    },
    {
      id: 'r7-pression', label: 'Sous pression, en scénario', targets: ['change-de-sujet'],
      questions: [
        mc('Face à une question qui change complètement de sujet, la bonne réaction est de…', ['la reconnaître et y revenir après avoir fini la première', 'y répondre immédiatement, en abandonnant la première', 'l’ignorer complètement'], 0, 'On ne laisse tomber aucune des deux questions. EN: you never drop either question.', 'a7-check'),
        mc('Une réponse qui s’arrête net, sans un mot de clôture, laisse l’auditeur…', ['en suspens', 'parfaitement satisfait', 'convaincu à coup sûr'], 0, 'Même juste sur le fond, une fin absente laisse un vide. EN: even if correct, a missing ending leaves a gap.', 'a7-erreurs'),
        tI('Complète. Un mot.', 'Changer complètement de sujet au milieu d’une réponse perd l’auditeur, pas seulement le … .', 'fil', 'C’est le mot répété dans toute la leçon. EN: the word repeated throughout the lesson.', 'a7-atoi'),
        tI('Complète. Un mot.', 'Nommer trois points puis remercier, avant de couper, c’est une vraie … .', 'conclusion', 'Le terme exact. EN: the exact term.', 'a7-scenario'),
        eS('Face à un deuxième sujet proposé en direct, le mieux est d’y répondre tout de suite, en laissant tomber le premier.', 'Face à un deuxième sujet proposé en direct, le mieux est de le noter, puis d’y revenir après le premier.', 'On garde les deux fils, jamais un seul. EN: you keep both threads, never just one.', 'a7-atoi'),
        lC('Écoute. Cette réponse reconnaît-elle le nouveau sujet, ou l’ignore-t-elle.', fr(E(1894)), ['elle le reconnaît', 'elle l’ignore'], 0, 'Elle note la question du camion avant de continuer. EN: it notes the truck question before continuing.', 'a7-scenario'),
      ],
    },
    {
      id: 'r8-bilan', label: 'Le bilan de la mission', targets: ['reponse-sans-conclusion'],
      questions: [
        mc('La mission orale de cette leçon demande de…', ['lire un texte préparé à l’avance', 'répondre à une objection fraîche, sans texte préparé', 'résumer les actes précédents'], 1, 'C’est tout le sens de la leçon. EN: that is the whole point of the lesson.', 'a8-mission'),
        mc('Pour réussir le critère « gambit » de la mission, il faut…', ['dire au moins un gambit reconnaissable, posément', 'éviter absolument toute hésitation', 'répéter le même mot plusieurs fois'], 0, 'Une hésitation bien tenue n’est jamais le problème. EN: a well-held hesitation is never the problem.', 'a8-mission'),
        mc('Le critère « gabarit » juge surtout si l’on entend…', ['les quatre gestes, dans l’ordre', 'uniquement la position finale', 'uniquement l’exemple concret'], 0, 'Reformuler, position, exemple, ouvrir : les quatre comptent. EN: rephrase, position, example, open: all four count.', 'a8-mission'),
        tI('Complète. Un mot.', 'Avant de parler, passe ton … en revue : reformuler, position, exemple, ouvrir.', 'gabarit', 'C’est l’étape de préparation mentale. EN: that is the mental preparation step.', 'a8-checklist'),
        tI('Complète. Un mot.', 'Le direct n’attend pas que tu sois … .', 'prêt', 'C’est le reframe de la leçon. EN: that is the lesson’s reframe.', 'a8-progress'),
        eS('Une bonne réponse orale peut s’arrêter dès que la position est donnée, sans rien de plus.', 'Une bonne réponse orale continue jusqu’à une vraie conclusion, après la position et l’exemple.', 'S’arrêter trop tôt laisse le fil tomber. EN: stopping too early drops the thread.', 'a8-checklist'),
      ],
    },
  ],
};

/** Rotate each quiz question's options together with its `correct` index so
 *  no slot takes more than its share. Changes no text. */
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
spreadSlots(A8_QUIZ);

const A8_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck', id: 'a8-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'live does not wait for you to be ready', back: 'le direct', say: fr(E(1808)) },
    { front: 'a phrase that buys thinking time', back: 'un gambit', say: fr(E(1812)) },
    { front: 'four moves, any topic', back: 'le gabarit mental', say: fr(E(1829)) },
    { front: 'repairs a word, keeps going', back: 'ou plutôt', say: fr(E(1847)) },
    { front: 'erases everything standing', back: 'un effacement', say: fr(E(1861)) },
    { front: 'on topic, one recovery, a real end', back: 'tenir ensemble', say: fr(E(1873)) },
    { front: 'names the problem, then moves on', back: 'un rétablissement réel', say: fr(E(1878)) },
    { front: 'names a next step, closes the thread', back: 'une vraie conclusion', say: fr(E(1905)) },
  ],
  audio: AUDIO, say: REFRAME,
};

const A8_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a8-roundup', layer: 'core', title: 'La production orale spontanée, en résumé',
  body: `${REFRAME} Tu réponds maintenant à une question que tu n’as pas préparée, en gagnant du temps avec un gambit dit à voix haute, en structurant ta réponse en quatre gestes, en te corrigeant sans jamais tout recommencer, et en terminant par une vraie conclusion, pas par un arrêt net. EN: You can now answer a question you had no time to prepare, buying time aloud with a gambit, structuring the reply in four moves, correcting yourself without ever starting over, and ending with a real conclusion rather than a dead stop.`,
  points: [
    'Un gambit dit lentement vaut mieux qu’un tic vide ou qu’un silence complet.',
    'Le gabarit (reformuler, position, exemple, ouvrir) structure la démarche, pas le sujet.',
    'Une correction répare un mot en une phrase ; recommencer depuis le début efface ce qui tenait déjà debout.',
    'Un rétablissement réel nomme le problème et avance ; une cohérence perdue tourne en rond.',
    'Une réponse tient debout si elle reste sur le sujet, se rétablit une fois, et conclut vraiment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['direct', 'tenir'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-direct', title: 'Gambit ou silence', format: 'mcq' as const, coach: 'Compare un gambit dit lentement à un silence qui s’étire. EN: compare a slowly said gambit to a silence that stretches on.', q: 'Face à une question qui te prend au dépourvu, le mieux est de…', opts: ['te figer complètement', 'dire un gambit, posément'], correct: 1, why: 'Un silence complet laisse croire que tu n’as rien à dire. EN: complete silence suggests you have nothing to say.', items: [E(1803), E(1804), E(1810)], audio: AUDIO },
  { id: 'd-gambit', title: 'Gambit, jamais un tic vide', format: 'sort' as const, coach: 'Classe chaque phrase : un vrai gambit, ou un tic verbal vide. EN: sort each line: a real gambit, or an empty verbal tic.', buckets: ['un gambit', 'un tic vide'], items: [E(1812), E(1813), E(1815), E(1819), E(1820), E(1821)], audio: AUDIO },
  { id: 'd-gabarit', title: 'Les quatre gestes, dans l’ordre', format: 'mcq' as const, coach: 'Remets les gestes du gabarit dans l’ordre, en pensant à chacun. EN: put the template’s moves back in order, thinking through each one.', q: 'Le premier geste du gabarit est toujours…', opts: ['justifier avec un exemple', 'reformuler la question'], correct: 1, why: 'On reformule avant de prendre position. EN: you rephrase before taking a position.', items: [E(1830), E(1832), E(1834), E(1836)], audio: AUDIO },
  { id: 'd-correction', title: 'Réparer, pas effacer', format: 'mcq' as const, coach: 'Compare une correction qui garde le fil à un effacement complet. EN: compare a correction that keeps the thread to a complete wipe.', q: 'Après un mot mal choisi, le mieux est de…', opts: ['recommencer toute la phrase', 'dire ou plutôt, puis continuer'], correct: 1, why: 'Recommencer efface ce qui tenait déjà debout. EN: restarting erases what was already standing.', items: [E(1847), E(1849), E(1852), E(1853)], audio: AUDIO },
  { id: 'd-retablissement', title: 'Même hésitation, deux fins', format: 'flashcard' as const, coach: 'Dis chaque paire à voix haute : laquelle avance, laquelle tourne en rond. EN: say each pair aloud: which one moves forward, which circles.', items: [E(1877), E(1878), E(1879), E(1880)], audio: AUDIO },
  { id: 'd-conclusion', title: 'Conclure pour de vrai', format: 'mcq' as const, coach: 'Compare une fin vague à une vraie conclusion. EN: compare a vague ending to a real conclusion.', q: 'Une réponse qui s’arrête net, sans mot de clôture, laisse l’auditeur…', opts: ['parfaitement satisfait', 'en suspens'], correct: 1, why: 'Même juste sur le fond, une fin absente laisse un vide. EN: even if correct, a missing ending leaves a gap.', items: [E(1900), E(1901), E(1902), E(1903)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'silence-plutot-que-gambit', description: 'Freezes into silence or an unstructured stumble instead of using a deliberate, named gambit to buy a moment of real thought.', detectOn: ['a1-check', 'a1-scene', 'a8-mission'], drill: 'd-direct', retest: 'd-direct' },
  { id: 'tic-vide-pour-gambit', description: 'Uses a repeated empty verbal tic (euh, euh, euh) as if it were a gambit, with no real content or direction following it.', detectOn: ['a2-trier', 'a2-erreurs', 'a2-check', 'a8-mission'], drill: 'd-gambit', retest: 'd-gambit' },
  { id: 'gabarit-incomplet', description: 'Skips a step of the four-move template (most often the concrete example), leaving the reply unstructured or unsupported.', detectOn: ['a3-build', 'a3-atoi', 'a3-check', 'a8-mission'], drill: 'd-gabarit', retest: 'd-gabarit' },
  { id: 'effacement-au-lieu-de-reparer', description: 'Restarts a sentence from zero or over-apologises, instead of repairing one word or idea in a single corrective move.', detectOn: ['a4-build', 'a4-erreurs', 'a4-check', 'a8-mission'], drill: 'd-correction', retest: 'd-correction' },
  { id: 'coherence-perdue-non-vue', description: 'Mistakes a response that has actually lost coherence (circling, never naming the issue) for a genuine recovery, because the surface hesitation looks the same.', detectOn: ['a6-trap', 'a6-check'], drill: 'd-retablissement', retest: 'd-retablissement' },
  { id: 'change-de-sujet', description: 'Abandons the question actually asked to chase an easier or unrelated one raised mid-reply, or ends a reply with no closing move at all.', detectOn: ['a7-atoi', 'a7-erreurs', 'a7-check', 'a8-mission'], drill: 'd-conclusion', retest: 'd-conclusion' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-gambits', 'Les gambits, et ce qui n’en est pas', ['sept gambits', 'trois tics vides'], [
    teach('sheet-gambits-teach', 'Un mot qui annonce, jamais un mot qui remplit',
      "Un gambit dit lentement annonce qu’une réponse construite arrive ; un tic verbal répété ne promet rien, et un silence complet laisse croire qu’il n’y a rien à dire. EN: A slowly said gambit announces that a built answer is coming; a repeated verbal tic promises nothing, and complete silence suggests there is nothing to say."),
    table('sheet-gambits-table', 'Sept gambits utiles', ['Gambit', 'Fonction'], [
      ['c’est une bonne question', 'reconnaît la question, gagne un instant'],
      ['disons que…', 'ouvre une piste, pas encore formulée'],
      ['comment dire…', 'montre une recherche du mot exact'],
      ['ce qui est intéressant, c’est que…', 'annonce un fait à venir'],
      ['si je puis dire…', 'prépare une formule un peu risquée'],
      ['je dirais même plus', 'annonce un renforcement'],
      ['laissez-moi reformuler votre question', 'reprend le contrôle du rythme'],
    ]),
    table('sheet-gambits-vides', 'Trois tics vides, à éviter', ['Tic', 'Ce qui manque'], [
      ['euh, euh, euh…', 'aucune direction annoncée'],
      ['alors, en fait, du coup, bon, voilà', 'cinq mots de remplissage, rien de plus'],
      ['bon ben, je sais pas, quoi', 'abandonne la phrase avant qu’elle commence'],
    ]),
  ]),
  sheet('sheet-gabarit', 'Le gabarit mental', ['quatre gestes', 'deux exemples complets'], [
    teach('sheet-gabarit-teach', 'Une structure pour la démarche, pas pour le sujet',
      "Reformuler, prendre position, justifier avec un exemple concret, puis nuancer ou ouvrir : ces quatre gestes tiennent debout quel que soit le sujet du jour, parce qu’ils structurent la façon de répondre, jamais le contenu lui-même. EN: Rephrase, take a position, justify with a concrete example, then qualify or open up: these four moves hold regardless of the day’s topic, because they structure the way of answering, never the content itself."),
    table('sheet-gabarit-table', 'Le gabarit, deux fois', ['Geste', 'Exemple 1 (l’odeur)', 'Exemple 2 (les horaires)'], [
      ['reformuler', 'si je comprends bien, vous me demandez si l’odeur est un vrai problème', 'si je comprends bien, vous demandez qui décide des horaires'],
      ['prendre position', 'je dirais que l’odeur est un vrai problème, mais corrigeable', 'je dirais que les horaires actuels conviennent à la majorité'],
      ['justifier', 'le compost du jardin Garnier a eu le même problème, réglé', 'un voisin du jardin Garnier a changé d’avis une fois déplacé'],
      ['nuancer ou ouvrir', 'ce qui ne veut pas dire que chaque compost marche du premier coup', 'ce qui laisse justement la question ouverte : où le placer'],
    ]),
  ]),
  sheet('sheet-tenir', 'Tenir une réponse debout', ['trois conditions', 'rétablissement réel contre cohérence perdue'], [
    teach('sheet-tenir-teach', 'Trois conditions, pas la grammaire seule',
      "Une réponse tient debout si elle reste sur le sujet posé, se rétablit une fois en cas de faux départ, et se termine par une vraie conclusion. Une réponse peut être grammaticalement parfaite et pourtant ne tenir debout nulle part, si elle manque une seule de ces trois conditions. EN: A reply holds up if it stays on the topic asked, recovers once from a false start, and ends with a real conclusion; a grammatically perfect reply can still not stand up anywhere if it misses even one of these three."),
    table('sheet-tenir-table', 'Rétablissement réel ou cohérence perdue', ['Trait', 'Rétablissement réel', 'Cohérence perdue'], [
      ['après l’hésitation', 'nomme le problème', 'ne nomme jamais rien'],
      ['la direction', 'avance vers une phrase qui tient', 'tourne en rond'],
      ['la longueur', 'une ou deux phrases suffisent', 's’étire sans jamais conclure'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Ta réponse, à l’instant',
    opener: {
      line: 'Un auditeur conteste les prix du marché de producteurs, en direct, sans prévenir : ici tu réponds toi-même, sans texte préparé. EN: A caller challenges the producers’ market prices, live, with no warning: here you answer yourself, with no prepared text.',
      imageRef: 'lessons/c2-08-production-spontanee/act08.jpg',
    },
    sections: [],
    milestone: 'Tu réponds à une objection fraîche, en direct, avec un gambit, un gabarit tenu, une correction qui garde le fil, et une vraie conclusion. EN: You can answer a fresh objection live, with a gambit, a held template, a correction that keeps the thread, and a real conclusion.',
    estScreens: 42, restPoints: ['a8-mission', 'a8-cheat', 'a8-quiz'],
  },
  sections: [A8_CHECKLIST, A8_MISSION, A8_PARLER, A8_CHEAT, A8_PROGRESS, A8_QUIZ, A8_REVIEW, A8_ROUNDUP],
  imports: IMPORTED.act8,
};

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** MissionRich renders options in authored order, so every closed MISSION
 *  item is rotated here, options and `correct` together, so each
 *  option-count class spreads evenly and no slot repeats more than twice in
 *  a row. No text is changed and no `why` names a position. The quiz keeps
 *  its own spread (6.11), done separately above. */
function balanceSlots(sections: LessonSection[], drills: LessonDrill[]): void {
  const used: Record<number, number[]> = {};
  const recent: number[] = [];
  const visit = (node: unknown): void => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) { node.forEach(visit); return; }
    const o = node as { opts?: unknown; correct?: unknown };
    if (Array.isArray(o.opts) && typeof o.correct === 'number') {
      const opts = o.opts as string[];
      const n = opts.length;
      const u = (used[n] ??= new Array(n).fill(0));
      const order = [...Array(n).keys()].sort((a, b) => u[a] - u[b] || a - b);
      const blocked = recent.length >= 2 && recent[recent.length - 1] === recent[recent.length - 2] ? recent[recent.length - 1] : -1;
      const target = order.find((k) => k !== blocked) ?? order[0];
      const shift = (target - (o.correct as number) + n) % n;
      o.opts = opts.map((_, i) => opts[(i - shift + n) % n]);
      o.correct = target;
      u[target]++;
      recent.push(target);
    }
    for (const v of Object.values(node as Record<string, unknown>)) visit(v);
  };
  for (const s of sections) if (s.type !== 'quiz' && s.type !== 'task' && s.type !== 'trapDrill') visit(s);
  for (const d of drills) visit(d);
}
balanceSlots(SECTIONS, DRILL_LIST);

export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id)),
]);

export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c2-08-[a-z0-9-]+/g) ?? [])];
const REC_DESC: Record<string, string> = {};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C2 · LEÇON 08',
  intro: "La leçon 9 du C1 taught you to hold a prepared, structured floor before a jury, with an hour to plan it. This lesson removes that hour: an unplanned question, objection or change of topic arrives in real time, and you answer on the spot. Eight acts build the toolkit, from a deliberate gambit that buys one real second of thought, through a four-step mental template, a self-correction that keeps the thread, and the difference between a genuine recovery and a response that has actually lost coherence, ending with a fresh unplanned objection you answer yourself.",
  skill: 'PO',
  grammarAssumed: ['c1.09'],
  grammarIntroduced: [
    'Deliberate time-buying gambits (c’est une bonne question, disons que, comment dire) as a named, teachable move, against empty verbal tics and frozen silence',
    'A four-step mental template for structuring an unplanned answer on the fly: reformulate, take a position, justify with a concrete example, qualify or open up',
    'Self-correction that repairs one word or idea in a single move (ou plutôt, ce que je veux dire, c’est que, pour être exact), against restarting from zero or over-apologising, both of which erase what was already standing',
    'Judging a full spontaneous reply by whether it stays on topic, recovers once genuinely, and reaches a real conclusion, rather than by grammatical correctness alone',
    'Distinguishing a genuine recovery from a stumble against a response that has actually lost coherence, when both share the same surface hesitation markers',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "La leçon 9 du C1 t’a appris à tenir une parole préparée, structurée, devant un jury, avec une heure pour t’y préparer. Cette leçon retire cette heure : une question, une objection ou un changement de sujet arrive sans prévenir, et tu réponds sur le moment. Huit actes construisent l’outillage, d’un gambit qui gagne une seconde de vraie réflexion jusqu’à la différence entre un vrai rétablissement et une cohérence perdue, et se terminent par une objection fraîche à laquelle tu réponds toi-même.",
    minutes: 130,
    difficulty: 5,
    glyph: 'micro',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: PRODUCTION_SPONTANEE_TERMS,
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

/** Named so a batch, a merge and a test agree on what is named, not
 *  released: every row whose `drills` carries no `flashcard`. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, dicteeFor };
