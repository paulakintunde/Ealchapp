// c2.09.l1 « Soutenir un discours long » · the lesson. DRAFT, ninth lesson
// of the C2 band (wave 3). To RICH-LESSON-STANDARD.md and the C2 rules of
// C2-BUILD-PLAN.md / C2-RESEARCH-PLAN.md (line 179, "c2.09"). Structural
// model: c2.08 « La production orale spontanée » (production-spontanee-*),
// the most recently shipped, most similar-shape (W) C2 lesson, which already
// passed the full house test suite clean, and is this lesson's own wave-mate
// per the brief. Copied for its file layout, helpers, act loop and closing
// act, exactly as instructed.
//
// Not imported, not merged into seed.json, not published. The `task`
// section is real (in SECTION_TYPES and the LessonSection union), so the
// validators run on `LESSON` itself.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN (count of acts: 8; missions per act: 7,5,5,5,4,2,4,8; total: 40)
// ══════════════════════════════════════════════════════════════════════════
//
//   1  Le problème : tenir seul   7  nobody relances, nobody corrects a
//                                    word either; the plan itself must
//                                    hold; recap of la leçon 9 du C1 AND
//                                    la leçon 8 du C2, split stated
//   2  Les balises qui tiennent
//      le chemin                  5  deliberate transitions (venons-en à,
//                                    cela m’amène à) against strings of
//                                    fillers that announce no passage
//   3  La charpente annoncée      5  annoncer, tenir, signaler, rappeler :
//                                    two worked examples of the same
//                                    four-move macro-architecture
//   4  La reprise, jamais un
//      redémarrage                5  returning to the plan by name after
//                                    an aside, against restarting the
//                                    whole turn from zero
//   5  Tenir la distance          4  two full long excerpts to the same
//                                    situation, one that holds its
//                                    architecture, one that drops it
//   6  La vraie reprise, pas
//      la dérive                  2  the trap: a genuine return against a
//                                    drift that never names the plan,
//                                    same surface fillers (stepped
//                                    trapDrill)
//   7  Sous la durée, en
//      scénario                   4  a single logistical pause mid walk,
//                                    absorbed in one sentence; closing a
//                                    long turn for real, looped onto the
//                                    plan
//   8  Ton discours, du début
//      à la fin                   8  checklist, THE TASK (a fresh guided
//                                    walk, three to five minutes, graded
//                                    on an explicit sustained-length
//                                    rubric), speak practice, cheat sheet,
//                                    progress check, quiz, review, roundup
//
//   Corpus: 119 authored rows (fr.c2.discours-dexamen.2000-2118, no gaps;
//   .2119-.2199 left free for the pre-review pass). Quiz: 8 rounds of 6
//   (one round per act). Six error triggers, six drills, three reference
//   sheets, seven terms. Chapter artwork:
//   `c2-discours-long-image-prompts.md`, 8 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le sentier ne raccourcit pas parce que tu fatigues : chaque balise
//   tient tout le chemin, de la première minute à la dernière. »
//   EN: The trail does not get shorter because you are tiring: each marker
//   holds the whole path, from the first minute to the last.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / CITES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    sustaining one uninterrupted spoken turn, alone, for several
//           minutes: announcing a whole plan up front; signposting every
//           passage from one part to the next with a real balise; a
//           reprise that returns to the plan by name after an aside,
//           without restarting the whole turn; judging whether a full
//           long excerpt holds its architecture across its whole length;
//           telling a genuine return to the plan apart from a drift that
//           only sounds like one; closing a long turn by looping back onto
//           the plan named at the start; the app's own sustained-discourse
//           task.
//   CITES   « la leçon 9 du C1 » (c1.09), once by name in act 1 and once
//           inside the reading passage: a turn-based exposé before a jury,
//           carried by its own relances. « la leçon 8 du C2 » (c2.08, same
//           wave, built just before this one), once by name in act 1 and
//           once inside the reading passage: answering an unplanned
//           question in a few sentences, with no preparation time. This
//           lesson removes what each assumed: the turns c1.09 had, and the
//           short length c2.08 had.
//   LEAVES  the four-step micro-template (reformuler, prendre position,
//           justifier, ouvrir) and single-word self-correction (ou
//           plutôt, ce que je veux dire) as skills in themselves (both
//           c2.08's, never re-taught, never re-used by example); debate
//           turn-taking (c1.21: never cited); the whole exam-skill wiring
//           (no `dalf_c2` format exists; the "future PO@c2" note in
//           C2-RESEARCH-PLAN.md is informational only, nothing built here).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; no character addresses the learner with vous or tu
//   in this lesson's scene (a guide speaks TO a group, never back at the
//   learner directly). No em dash. No U+203F tie. Never "honnête" /
//   "honest" / "honnêtement". Curly apostrophes (’) throughout. No scene
//   bubble ever carries a « ? » or a « ! ». French only on the learner
//   surface; English authored on every `en` field. Theme
//   `discours-dexamen`, block .2000-.2199, used .2000-.2118. Citation by
//   trail position in words. Every person, show and organisation is
//   invented. Version 1 (a new lesson). Tag « C2 · LEÇON 09 », unpadded.
//
// ══════════════════════════════════════════════════════════════════════════
//  SELF-DUPLICATE CHECK (brief requirement, re c2.02's wave-1 dry-run find)
// ══════════════════════════════════════════════════════════════════════════
//
//   Checked by script against this file's own 119 rows: no two rows share
//   an identical `fr` string. See the pre-review validate script this draft
//   leaves for the next session, `scratch/_c209-validate.mts`.
//
// ══════════════════════════════════════════════════════════════════════════

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  REFRAME, REFRAME_EN, C109_REF, C208_REF, HIKER_QUESTION_FR, HIKER_QUESTION_EN,
} from './discours-long-corpus.ts';
import { DISCOURS_LONG_TERMS } from './discours-long-terms.ts';

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
  if (!r) throw new Error(`c2.09: no item ${id}`);
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
void hash;

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 · LE PROBLÈME : TENIR SEUL
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Quarante-cinq minutes, seul sur le sentier',
  frSub: 'La Réserve de Brandes, un samedi matin',
  setting: { place: 'Départ du sentier, Réserve naturelle de Brandes', city: 'Jura', time: 'samedi, 9 h', ambience: 'un groupe de douze personnes, des bottes, une légère brume sur la tourbière' },
  beats: [
    {
      kind: 'narration',
      text: 'La Réserve naturelle de Brandes, dans le Jura. Fabienne Delorme t’a confié, ce samedi, ta première grande visite guidée en solo : quarante-cinq minutes, un groupe de douze personnes, et personne d’autre que toi pour tenir le fil du début à la fin.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Fabienne Delorme',
      fr: `Face à un jury, ${C109_REF} t’a appris à tenir un échange, avec des relances toutes les deux minutes.`,
      en: `Facing a jury, ${C109_REF} taught you to hold an exchange, with a follow-up every two minutes.`,
      stage: 'Elle règle son sac à dos, sans te quitter des yeux.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Fabienne Delorme',
      fr: `Et la semaine dernière, en direct à la radio, ${C208_REF} t’a appris à répondre en quelques phrases, chaque fois qu’une question arrivait.`,
      en: `And last week, live on the radio, ${C208_REF} taught you to answer in a few sentences, each time a question came in.`,
      stage: 'Elle montre le sentier du menton.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Fabienne Delorme',
      fr: 'Ici, personne ne relance, personne n’interrompt, et ça dure quarante-cinq minutes, d’un seul tenant.',
      en: 'Here, nobody follows up, nobody interrupts, and it lasts forty-five minutes, in one unbroken stretch.',
      stage: 'Le groupe commence déjà à se rassembler derrière toi.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Le groupe attend, au départ du sentier.',
      size: 'lg',
      options: [
        { fr: fr(E(2004)), en: en(E(2004)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(2005)), en: en(E(2005)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Fabienne hoche la tête, un peu en retrait. Tu sais déjà où tu vas, et le groupe aussi.',
        breaks: 'Le groupe échange un regard. Personne ne sait encore où cette visite va les mener.',
      },
    },
    {
      kind: 'break',
      heading: 'Un plan annoncé, jamais improvisé balise par balise',
      body: 'L’un ne nomme rien et part au hasard ; l’autre annonce la charpente entière, en une phrase, avant le premier pas. EN: one names nothing and sets off at random; the other announces the whole architecture, in one sentence, before the first step.',
      wrong: { fr: fr(E(2004)), ipa: '/alɔʁ ɑ̃fɛ̃ ɔ̃ va ʒə kʁwa paʁ la/', en: en(E(2004)) },
      right: { fr: fr(E(2005)), ipa: '/nu vɛʁɔ̃ tʁwa ʃoz oʒuʁdɥi la tuʁbjɛʁ la ɛtʁɛ pɥi lə bɛlvedɛʁ/', en: en(E(2005)) },
      coach: REFRAME,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: `Cette leçon ne t’apprend pas à répondre vite, comme ${C208_REF}, ni à tenir un échange devant un jury, comme ${C109_REF}. Elle t’apprend à porter, seul, un plan annoncé, sur toute la durée d’un discours long.`,
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['sentier'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Signaler chaque passage, à voix haute', s: 'Acte 2 : une vraie balise, jamais une suite de mots de remplissage' },
    { t: 'Porter un plan sur toute sa durée', s: 'Acte 3 : la charpente en quatre gestes' },
    { t: 'Revenir au plan sans tout recommencer', s: 'Acte 4 : une reprise qui garde la direction' },
    { t: 'Tenir debout sur toute la longueur', s: 'Actes 5 à 7 : choisir, repérer la vraie reprise, improviser sous la durée' },
    { t: 'Soutenir un discours, du début à la fin', s: 'Acte 8 : une visite guidée, enregistrée en une fois' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const DISCOURS_TEXT =
  `Face à un jury, ${C109_REF} t’a appris à tenir un exposé structuré, porté par les relances d’un échange : dix minutes, mais jamais seul. ${C208_REF} t’a appris à répondre sur l’instant, sans préparation, mais toujours en quelques phrases, à une question posée par quelqu’un d’autre. Une visite guidée ne ressemble à aucun des deux : personne ne relance, personne n’interrompt, et le guide porte seul un discours qui dure parfois quarante-cinq minutes.\n\n` +
  `Tenir cette durée suppose une charpente en quatre gestes : annoncer, en une phrase, le plan entier avant de partir ; tenir l’ordre annoncé, sans en inventer un autre en marchant ; signaler, par une vraie balise, chaque passage d’une partie à l’autre ; et rappeler le plan entier à la fin de chaque grande partie. Si un aparté s’ajoute en chemin, une reprise y revient par son nom exact, sans jamais redémarrer de zéro. Le geste le plus facile à négliger reste la clôture : une visite qui s’arrête net, sans reboucler sur la charpente annoncée au départ, laisse croire qu’elle s’est arrêtée au hasard, même si chaque partie, prise isolément, était réussie.\n\n` +
  `Ce que ${C109_REF} et ${C208_REF} t’ont appris reste vrai ici : un vrai plan, tenu jusqu’au bout. Mais ici, ce plan doit tenir sur la durée entière, sans personne pour le relancer à ta place.`;

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Ce qui change, sur la durée',
  frSub: 'Lis ce qui sépare le court du long',
  text: DISCOURS_TEXT,
  glossary: [
    { word: 'charpente', en: 'the architecture, the overall macro-structure', note: 'Annoncée en une phrase, elle tient tout le discours, pas une seule partie.' },
    { word: 'reprise', en: 'a return to the plan, by name, after an aside', note: 'Vise le plan entier, jamais un seul mot isolé.' },
    { word: 'clôture', en: 'closing', note: 'Reboucle sur la charpente annoncée au départ ; son absence laisse croire à un hasard.' },
  ],
  questions: [
    { q: 'Global : de quoi parle ce texte, en une phrase ?', a: 'De ce qu’il faut tenir, seul, pour porter un discours qui dure plusieurs minutes, sans jamais être relancé.' },
    { q: 'Détail : quels sont les quatre gestes de la charpente, nommés dans le texte ?', a: 'Annoncer le plan, tenir l’ordre annoncé, signaler chaque passage, et rappeler le plan à la fin de chaque grande partie.' },
    { q: 'Inférence : pourquoi le texte dit-il que la clôture est le geste le plus facile à négliger ?', a: 'Parce qu’une visite peut réussir chaque partie et pourtant s’arrêter net, sans jamais reboucler sur le plan annoncé au départ, ce qui laisse croire à un hasard.' },
    { q: 'Point de vue : lequel des gestes te paraît le plus difficile à tenir sur quarante-cinq minutes, et pourquoi ?', a: 'Réponse libre. Le texte insiste sur la durée entière : un plan tenu du début à la fin, sans personne pour le relancer à ta place.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sentier'],
};

const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-rappel',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu sais déjà',
  frSub: 'Deux leçons, deux moitiés du problème',
  groups: [
    grp(`${Cap(C109_REF)} : l’exposé devant un jury, porté par ses relances`, [
      it(E(2002)), it(E(2006)),
    ], chk(
      `Ce que ${C109_REF} t’a appris reste-t-il vrai ici ?`,
      ['Oui, mais plus personne ne relance pour toi', 'Non, rien ne reste valable'], 0,
      'Le plan et le fil restent utiles ; ce qui change, c’est qu’il n’y a plus de jury pour le tenir à ta place. EN: the plan and the thread still matter; what changes is that there is no jury left to hold it for you.')),
    grp(`${Cap(C208_REF)} : répondre à l’instant, sans préparation`, [
      it(E(2003)), it(E(2007)),
    ], chk(
      `Ce que ${C208_REF} t’a appris reste-t-il vrai ici ?`,
      ['Oui, mais il faut le tenir sur plusieurs minutes, pas une seule', 'Non, rien ne reste valable'], 0,
      'Les mêmes outils tiennent plus longtemps ; ce qui change, c’est la durée. EN: the same tools hold for longer; what changes is the length.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sentier'],
};

const A1_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-balises',
  title: 'Ce qui change, sur la durée',
  frSub: 'Quatre cartes avant de partir',
  hint: 'Quatre cartes. Chacune nomme une différence avec les deux leçons précédentes.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['sentier'],
  cards: [
    card(E(2009), 'Le décor', 'le sentier balisé',
      'Personne ne relance, personne n’interrompt. La visite continue, balise après balise, pendant quarante-cinq minutes.'),
    card(E(2010), 'La compétence', 'tenir seul',
      'Porter un plan entier sans personne pour le relancer à ta place : c’est tout l’écart avec un exposé ou une réponse en direct.'),
    card(E(2011), 'Le risque accepté', 'un aparté',
      'Un aparté n’est jamais un drame, à condition de savoir y revenir, ce que l’acte 4 t’apprend.'),
    card(E(2008), 'Le but', 'un discours long',
      'Soutenir un discours long veut dire tenir la même charpente du premier mot au dernier.'),
  ],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où ça arrive, sur la durée',
  cases: [
    { situation: 'Un groupe attend, au départ du sentier, prêt à marcher quarante-cinq minutes', fr: fr(E(2005)), en: en(E(2005)) },
    { situation: 'Ta première réaction pourrait être de partir sans annoncer aucun plan', fr: fr(E(2004)), en: en(E(2004)) },
    { situation: 'Un exposé devant un jury, lui, tient grâce à ses relances', fr: fr(E(2006)), en: en(E(2006)) },
    { situation: 'Ici, personne ne corrige un mot isolé ; c’est le plan entier qui doit tenir', fr: fr(E(2011)), en: en(E(2011)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sentier'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le décor', 'Ce qui sépare le plus une visite guidée d’un exposé ou d’une réponse en direct, c’est…',
    ['la durée sans aucune relance', 'le nombre de personnes présentes'], 0,
    'Un exposé et une réponse en direct sont relancés ; ici, personne ne relance jamais. EN: an exposé and a live reply both get a follow-up; here, nobody ever follows up.'),
  ctl('Ce qui doit tenir', 'Ici, ce qui doit tenir du début à la fin, c’est…',
    ['le plan entier', 'une seule phrase bien choisie'], 0,
    'C’est tout l’écart avec une correction au mot près. EN: that is the whole gap with a word-level correction.'),
  ctl('Le risque', 'Un aparté qui survient en cours de route…',
    ['peut toujours être refermé par une reprise', 'fait toujours perdre le plan entier'], 0,
    'Un aparté bien refermé ne coûte rien à la charpente. EN: a well-closed aside costs the architecture nothing.'),
], ['sentier']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le problème : tenir seul',
    opener: {
      line: 'Personne ne relance, personne n’interrompt, et la visite dure quarante-cinq minutes : ici tu découvres ce que ça change de porter un plan seul, sur toute sa durée. EN: Nobody follows up, nobody interrupts, and the walk lasts forty-five minutes: here you see what it changes to carry a plan alone, over its whole length.',
      imageRef: 'lessons/c2-09-discours-long/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais ce qui change quand personne ne relance pour toi : le plan reste, mais tu le portes seul, sur toute sa durée. EN: You know what changes when nobody follows up for you: the plan stays, but you carry it alone, over its whole length.',
    estScreens: 34, restPoints: ['a1-lecture', 'a1-cartes'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_CARTES, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 · LES BALISES QUI TIENNENT LE CHEMIN
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Sept balises, dites posément',
  frSub: 'Écoute ce qui signale un vrai passage',
  lines: [ln(E(2012)), ln(E(2013)), ln(E(2014)), ln(E(2015)), ln(E(2016)), ln(E(2017)), ln(E(2018))],
  questions: [
    { q: 'Qu’est-ce que ces sept phrases ont en commun ?', opts: ['Elles annoncent clairement un passage d’une partie à l’autre', 'Elles répètent ce qui vient d’être dit', 'Elles sont toutes des excuses'], correct: 0, why: 'Chacune signale un vrai passage, sans jamais le laisser deviner. EN: each one signals a real passage, without ever leaving it to be guessed.' },
    { q: 'La cinquième phrase fait quoi, précisément ?', opts: ['Referme un aparté avant de revenir au chemin', 'Change complètement de sujet pour de bon', 'Admet que le guide s’est perdu'], correct: 0, why: 'Elle referme la parenthèse sur les castors et revient au chemin. EN: it closes the aside on the beavers and returns to the path.' },
    { q: 'La première des sept phrases fait quoi ?', opts: ['Ouvre la toute première partie du plan', 'Referme la visite entière', 'Répète la dernière balise entendue'], correct: 0, why: 'Elle ouvre le chemin, sans rien annoncer d’autre encore. EN: it opens the path, without yet announcing anything else.' },
    { q: 'Pourquoi dire ces phrases posément, et non glissées entre deux pas rapides ?', opts: ['Parce qu’une balise dite trop vite se perd dans le bruit des pas', 'Pour des raisons de respiration uniquement'], correct: 0, why: 'La vitesse est ce qui distingue une vraie balise d’un mot perdu en chemin. EN: speed is what tells a real marker apart from a word lost along the way.' },
    { q: 'La quatrième phrase annonce quoi ?', opts: ['Qu’un résumé du point précédent arrive avant de continuer', 'Que le plan entier va changer'], correct: 0, why: 'Elle prépare un résumé, pas un nouveau départ. EN: it sets up a summary, not a fresh start.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['balise'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-balises',
  title: 'Quatre fonctions, un seul outil',
  frSub: 'Ce qu’une balise fait vraiment',
  hint: 'Quatre cartes, quatre balises.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['balise'],
  cards: [
    card(E(2012), 'Ouvrir le chemin', 'pour commencer',
      'Annonce la toute première partie, avant même le premier pas réel sur le sentier.'),
    card(E(2013), 'Signaler un passage', 'venons-en maintenant à',
      'Ferme une partie et ouvre la suivante, dans le même souffle, sans jamais les mélanger.'),
    card(E(2015), 'Résumer avant de continuer', 'avant d’aller plus loin',
      'Redit ce qui vient d’être vu, en une phrase, avant d’ouvrir la partie suivante.'),
    card(E(2016), 'Refermer un aparté', 'je referme ici une parenthèse',
      'Signale qu’une digression se termine et que le chemin principal reprend.'),
  ],
};

const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-trier',
  layer: 'core',
  size: 'lg',
  title: 'Balise ou transition absente',
  groups: [
    grp('Une balise, dite posément', [
      it(E(2013)), it(E(2016)), it(E(2017)), it(E(2027)), it(E(2028)),
    ], chk(
      'Ce que ces cinq phrases ont en commun, c’est…',
      ['elles annoncent clairement un passage d’une partie à l’autre', 'elles évitent de jamais changer de sujet'], 0,
      'Chacune signale un vrai passage, puis le chemin continue vraiment. EN: each one signals a real passage, and the path genuinely continues.')),
    grp('Un enchaînement de mots, sans direction', [
      free(fr(E(2019)), en(E(2019)), 'aucun passage annoncé'),
      free(fr(E(2020)), en(E(2020)), 'cinq mots de remplissage, rien de plus'),
      free(fr(E(2021)), en(E(2021)), 'une fin qui n’annonce rien'),
    ], chk(
      'Ce qui manque à ces trois phrases, par rapport à une vraie balise, c’est…',
      ['une direction : elles n’annoncent aucun passage réel', 'la politesse'], 0,
      'Une transition absente se répète sans jamais signaler où l’on va. EN: a missing transition repeats itself without ever signalling where things are headed.')),
    ctl('Le silence', 'Comparé à un enchaînement de mots répétés, un long silence pendant la marche est…',
      ['pire : il ne promet même pas un passage à venir', 'toujours préférable, car plus discret'], 0,
      'Au moins l’enchaînement de mots montre que le guide continue à parler. EN: at least the string of words shows the guide is still talking.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['balise'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Trois transitions ratées',
  errors: [
    {
      wrong: fr(E(2019)),
      right: fr(E(2012)),
      why: '« Et puis, enfin, voilà, bon » n’annonce aucun passage ; « pour commencer » ouvre clairement le chemin. EN: that filler string announces no passage at all; "pour commencer" clearly opens the path.',
    },
    {
      wrong: fr(E(2020)),
      right: fr(E(2013)),
      why: '« Bon après, enfin, je sais pas » laisse le groupe sans repère ; « venons-en maintenant à » signale le passage en un seul mouvement. EN: that line leaves the group with no bearing; "venons-en maintenant à" signals the passage in a single move.',
    },
    {
      wrong: fr(E(2021)),
      right: fr(E(2014)),
      why: '« Alors du coup, enfin bref » n’ouvre rien de précis ; « cela m’amène justement à » annonce exactement ce qui vient. EN: that line opens nothing precise; "cela m’amène justement à" announces exactly what comes next.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['balise'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La fonction', 'Une balise comme « venons-en maintenant à » sert avant tout à…',
    ['annoncer clairement un passage d’une partie à l’autre', 'changer de sujet sans le dire'], 0,
    'Elle signale le passage, elle ne le cache jamais. EN: it signals the passage, it never hides one.'),
  ctl('Le débit', 'Une balise glissée entre deux pas rapides risque de…',
    ['se perdre dans le bruit des pas', 'devenir plus claire'], 0,
    'La vitesse brouille la différence entre une balise et un mot perdu. EN: speed blurs the difference between a marker and a lost word.'),
  ctl('Le pire des deux', 'Entre un enchaînement de mots de remplissage et un long silence, le moins utile est…',
    ['l’enchaînement de mots', 'le silence complet'], 1,
    'Le silence ne promet même pas qu’un passage arrive. EN: silence does not even promise that a passage is coming.'),
], ['balise']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Les balises qui tiennent le chemin',
    opener: {
      line: 'Entre un enchaînement de mots qui ne mène nulle part et une balise dite posément, un seul des deux annonce un vrai passage : ici tu apprends à le choisir. EN: Between a string of words leading nowhere and a marker said steadily, only one of the two announces a real passage: here you learn to choose it.',
      imageRef: 'lessons/c2-09-discours-long/act02.jpg',
    },
    sections: [],
    milestone: 'Tu signales chaque passage avec une vraie balise, jamais avec un enchaînement de mots sans direction. EN: You signal each passage with a real marker, never with a string of words going nowhere.',
    estScreens: 24, restPoints: ['a2-trier'],
  },
  sections: [A2_ECOUTE, A2_CARTES, A2_TRIER, A2_ERREURS, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 · LA CHARPENTE ANNONCÉE
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-charpente',
  title: 'Quatre gestes, une charpente',
  frSub: 'Ce qui structure un discours qu’on porte seul',
  hint: 'Quatre cartes, dans l’ordre.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['charpente'],
  cards: [
    card(E(2030), '1', 'annoncer', 'Dis, en une phrase, le plan entier avant de faire le premier pas.'),
    card(E(2032), '2', 'tenir', 'Suis l’ordre annoncé, sans sauter une partie ni en inventer une nouvelle.'),
    card(E(2034), '3', 'signaler', 'Marque chaque passage d’une partie à l’autre avec une vraie balise.'),
    card(E(2036), '4', 'rappeler', 'Redis le plan entier à la fin de chaque grande partie, en une phrase.'),
  ],
};

const A3_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-table',
  layer: 'core',
  title: 'La charpente, en exemple',
  cols: ['Geste', 'Exemple'],
  rows: [
    { cells: ['annoncer', fr(E(2031))], say: fr(E(2031)), detail: { title: 'Une carte, pas un résumé', body: 'Annoncer donne au groupe une carte avant de partir, pas un résumé de ce qu’il a déjà vu. EN: announcing hands the group a map before setting off, not a summary of what it has already seen.', say: fr(E(2041)) } },
    { cells: ['tenir', fr(E(2033))], say: fr(E(2033)), detail: { title: 'L’ordre annoncé, jamais un autre', body: 'Changer l’ordre en marchant défait la carte qu’on vient de donner. EN: changing the order while walking undoes the map just handed out.', say: fr(E(2042)) } },
    { cells: ['signaler', fr(E(2035))], say: fr(E(2035)), detail: { title: 'Un passage, pas un glissement', body: 'Une vraie balise rend le passage visible, au lieu de le laisser deviner. EN: a real marker makes the passage visible, instead of leaving it to be guessed.', say: fr(E(2043)) } },
    { cells: ['rappeler', fr(E(2037))], say: fr(E(2037)), detail: { title: 'Le plan, redit en une phrase', body: 'Rappeler ancre le groupe avant d’ouvrir la partie suivante. EN: recalling anchors the group before opening the next part.', say: fr(E(2044)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charpente'],
};

const A3_BUILD: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-build',
  layer: 'core',
  size: 'lg',
  title: 'Même charpente, deuxième situation',
  frSub: 'Le belvédère et l’érosion, cette fois',
  groups: [
    grp('Annoncer', [it(E(2031)), it(E(2041))], chk(
      'Les deux phrases font quoi, exactement ?',
      ['Elles annoncent le plan entier avant de commencer', 'Elles résument ce qui vient d’être vu'], 0,
      'Annoncer précède toujours la marche, il ne la remplace jamais. EN: announcing always comes before the walking, it never replaces it.')),
    grp('Tenir', [it(E(2033)), it(E(2042))], chk(
      'Ces deux phrases justifient quoi ?',
      ['L’ordre annoncé, et pourquoi il commence par cette partie', 'Un changement d’ordre en cours de route'], 0,
      'L’ordre annoncé se justifie, il ne se bouscule jamais. EN: the announced order is justified, it is never shuffled.')),
    grp('Signaler', [it(E(2035)), it(E(2043))], chk(
      'Ce que ces deux exemples ont en commun, c’est…',
      ['un passage nommé, pas seulement supposé', 'une statistique officielle'], 0,
      'Un passage nommé rend le changement visible pour le groupe. EN: a named passage makes the change visible to the group.')),
    grp('Rappeler', [it(E(2037)), it(E(2044))], chk(
      'Cette dernière étape sert à…',
      ['redire le plan entier avant d’ouvrir la partie suivante', 'annuler tout ce qui vient d’être dit'], 0,
      'Rappeler ancre le plan, il ne l’efface jamais. EN: recalling anchors the plan, it never erases it.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charpente'],
};

const A3_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-atoi',
  layer: 'core',
  size: 'lg',
  title: 'À toi : repère le geste manquant',
  groups: [
    grp('Une charpente à trois gestes, un geste absent', [
      free(fr(E(2030)), en(E(2030)), 'geste 1 : présent'),
      free(fr(E(2034)), en(E(2034)), 'geste 3 : présent'),
      free(fr(E(2036)), en(E(2036)), 'geste 4 : présent'),
    ], chk(
      'Quel geste de la charpente manque dans cette présentation ?',
      ['Tenir l’ordre annoncé, sans en inventer un autre', 'Annoncer le plan entier'], 0,
      'La présentation annonce, signale puis rappelle, mais ne dit jamais comment l’ordre sera tenu. EN: the presentation announces, signals, then recalls, but never says how the order will be held.')),
    ctl('La charpente entière', 'Dans l’ordre, les quatre gestes de la charpente sont…',
      ['annoncer, tenir, signaler, rappeler', 'signaler, rappeler, annoncer, tenir'], 0,
      'C’est l’ordre qui tient debout, geste après geste. EN: that order is the one that holds, move after move.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charpente'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('L’ordre', 'Le premier geste de la charpente est toujours…',
    ['annoncer le plan entier', 'rappeler ce qui vient d’être vu'], 0,
    'On annonce avant de marcher, jamais après. EN: you announce before walking, never after.'),
  ctl('Le signal', 'Un bon geste 3 (signaler) rend le passage…',
    ['visible, nommé par une vraie balise', 'deviné, sans jamais être nommé'], 0,
    'Un passage nommé se voit ; un passage deviné se perd. EN: a named passage is seen; a guessed one gets lost.'),
  ctl('Ce que la charpente ne fait jamais', 'Le quatrième geste, rappeler, sert à…',
    ['ancrer le plan, sans jamais l’annuler', 'annuler complètement le plan annoncé'], 0,
    'Rappeler ancre ; il ne détruit jamais ce qui vient d’être annoncé. EN: recalling anchors; it never destroys what was just announced.'),
], ['charpente']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'La charpente annoncée',
    opener: {
      line: 'Annoncer, tenir, signaler, rappeler : quatre gestes qui tiennent debout, quel que soit le sentier du jour. EN: Announce, hold, signal, recall: four moves that hold, whatever today’s trail is.',
      imageRef: 'lessons/c2-09-discours-long/act03.jpg',
    },
    sections: [],
    milestone: 'Tu structures un long discours en quatre gestes, dans l’ordre, quel que soit le sujet de chaque partie. EN: You structure a long discourse in four moves, in order, whatever each part’s subject is.',
    estScreens: 26, restPoints: ['a3-build'],
  },
  sections: [A3_CARTES, A3_TABLE, A3_BUILD, A3_ATOI, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 · LA REPRISE, JAMAIS UN REDÉMARRAGE
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Un plan qui se reprend',
  frSub: 'Écoute où il hésite, et où il revient',
  lines: [
    { fr: 'La tourbière, enfin, je veux dire, les castors, c’est passionnant, mais on y revient.', en: 'The peat bog, well, I mean, the beavers, that’s fascinating, but let’s come back to it.' },
    ln(E(2047)), ln(E(2048)), ln(E(2049)), ln(E(2050)),
  ],
  questions: [
    { q: 'La première phrase hésite sur quel sujet ?', opts: ['les castors', 'la tourbière'], correct: 0, why: 'Elle part sur « la tourbière », glisse vers « les castors », puis revient. EN: it starts on "la tourbière", drifts to "les castors", then comes back.' },
    { q: 'La troisième phrase fait quoi, précisément ?', opts: ['Nomme où le plan en était, sans arrêter la visite', 'Annule tout ce qui a été dit avant'], correct: 0, why: 'Elle revient, elle ne repart jamais de zéro. EN: it returns, it never starts over from zero.' },
    { q: 'La quatrième phrase annonce quoi ?', opts: ['Qu’un point précis du plan va être repris', 'Qu’une excuse va suivre'], correct: 0, why: 'Elle prépare une reprise précise, pas des excuses. EN: it sets up a precise reprise, not an apology.' },
    { q: 'Ce que ces quatre reprises ont en commun, c’est…', opts: ['Chacune nomme un point du plan et y revient', 'Chacune commence par une excuse'], correct: 0, why: 'Aucune ne s’excuse : chacune nomme et continue. EN: none of them apologises: each one names and continues.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reprise'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-tenir',
  title: 'Revenir, sans repartir de zéro',
  frSub: 'Quatre marqueurs de reprise',
  hint: 'Quatre cartes, quatre façons de reprendre le fil.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['reprise'],
  cards: [
    card(E(2047), 'Refermer un aparté', 'je referme cette parenthèse', 'Signale la fin d’une digression et revient au point exact du chemin principal.'),
    card(E(2048), 'Nommer le fil', 'pour revenir à notre fil conducteur', 'Dit où le plan en était, sans effacer ce qui a été vu depuis.'),
    card(E(2049), 'Reprendre un point précis', 'je reprends ici le plan annoncé', 'Nomme exactement la partie qu’il reste à voir, et repart de là.'),
    card(E(2050), 'Reprendre une étape laissée en suspens', 'je reviens à présent à notre deuxième étape', 'Marque le retour à une partie laissée ouverte, sans jamais la refaire depuis le début.'),
  ],
};

const A4_BUILD: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-build',
  layer: 'core',
  size: 'lg',
  title: 'Une reprise qui tient, un redémarrage qui jette',
  groups: [
    grp('Une reprise qui garde le plan', [
      it(E(2057)), it(E(2058)), it(E(2059)),
    ], chk(
      'Ce que ces trois reprises ont en commun, c’est…',
      ['chacune nomme un point précis du plan, sans arrêter la visite', 'chacune commence par une excuse'], 0,
      'Aucune ne repart de zéro ; chacune nomme et continue. EN: none restarts from zero; each one names and continues.')),
    grp('Un redémarrage complet', [
      free(fr(E(2052)), en(E(2052)), 'repart de zéro, aucun point nommé'),
      free(fr(E(2053)), en(E(2053)), 'efface quarante minutes déjà tenues'),
    ], chk(
      'Ce qui ne va pas avec ces deux reprises, c’est…',
      ['elles effacent tout ce qui tenait déjà debout', 'elles sont trop courtes'], 0,
      'Recommencer depuis le début jette ce qui était déjà construit. EN: starting over from the beginning throws away what was already built.')),
    ctl('Le compte', 'S’excuser plusieurs fois de suite pour un même aparté…',
      ['attire plus l’attention que l’aparté lui-même', 'rassure toujours le groupe'], 0,
      'La répétition de l’excuse devient le vrai problème. EN: the repeated apology becomes the real problem.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reprise'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Deux redémarrages, deux reprises',
  errors: [
    { wrong: fr(E(2052)), right: fr(E(2047)), why: 'Repartir sans rien nommer jette tout ce qui tenait déjà ; refermer la parenthèse par son nom le garde. EN: restarting without naming anything throws away everything already standing; closing the aside by name keeps it.' },
    { wrong: fr(E(2053)), right: fr(E(2049)), why: '« Je sais plus où j’en étais » perd le fil ; « je reprends ici le plan » nomme un point précis. EN: "I don’t know where I was" loses the thread; "I’ll pick up the plan here" names a precise point.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reprise'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La cible', 'Une bonne reprise vise…',
    ['le plan entier, jamais un seul mot isolé', 'toujours un seul mot isolé'], 0,
    'Reprendre large garde le plan ; corriger un mot isolé est une autre affaire, déjà apprise ailleurs. EN: a broad reprise keeps the plan; correcting one isolated word is a different matter, already learned elsewhere.'),
  ctl('Les excuses', 'S’excuser plusieurs fois de suite pour un même aparté…',
    ['attire l’attention sur l’aparté', 'le fait oublier'], 0,
    'La répétition devient visible là où une reprise simple ne l’aurait pas été. EN: the repetition becomes noticeable where a simple reprise would not have been.'),
  ctl('Le choix', 'Entre « je referme cette parenthèse » et « on reprend depuis le début de la visite », le premier…',
    ['garde la direction du plan', 'l’efface complètement'], 0,
    'Un garde le fil, l’autre le jette. EN: one keeps the thread, the other throws it away.'),
], ['reprise']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'La reprise, jamais un redémarrage',
    opener: {
      line: 'Un aparté n’est jamais la fin du plan : ici tu apprends à y revenir sans tout recommencer. EN: An aside is never the end of the plan: here you learn to return to it without starting over.',
      imageRef: 'lessons/c2-09-discours-long/act04.jpg',
    },
    sections: [],
    milestone: 'Tu reviens au plan par une reprise nommée, sans jamais recommencer la visite depuis le début. EN: You return to the plan with a named reprise, without ever restarting the walk from the beginning.',
    estScreens: 26, restPoints: ['a4-build'],
  },
  sections: [A4_ECOUTE, A4_CARTES, A4_BUILD, A4_ERREURS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 · TENIR LA DISTANCE
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-tenir',
  title: 'Trois choses qui tiennent un discours debout',
  frSub: 'Avant de comparer deux extraits',
  hint: 'Trois cartes.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['distance'],
  cards: [
    card(E(2076), 'Les trois conditions', 'rester, refermer, avancer', 'Rester dans le plan, refermer chaque aparté, et avancer : les trois tiennent un discours long debout.'),
    card(E(2067), 'Le rappel', 'nommer où l’on en est', 'Un extrait qui tient rappelle toujours l’étape, même en une phrase.'),
    card(E(2071), 'La reprise réelle', 'refermer, puis repartir', 'Refermer un aparté par son nom, puis repartir du bon point du plan.'),
  ],
};

const A5_COMPARE1: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-compare1',
  layer: 'core',
  size: 'lg',
  title: 'La hêtraie : deux extraits possibles',
  groups: [
    grp(`La situation : « ${fr(E(2063))} »`, [
      free(fr(E(2064)), en(E(2064)), 'extrait A'),
      it(E(2065), 'extrait B'),
    ], chk(
      'Lequel tient la distance, et pourquoi ?',
      ['L’extrait B : il rappelle l’étape, relie au point précédent, et annonce la suite', 'L’extrait A : il part dans plusieurs directions à la fois'], 0,
      'L’extrait A perd le plan annoncé dès la première phrase ; le B rappelle, relie et annonce. EN: extract A loses the announced plan from its first sentence; B recalls, links and announces.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['distance'],
};

const A5_COMPARE2: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-compare2',
  layer: 'core',
  size: 'lg',
  title: 'L’aparté animal : deux extraits possibles',
  groups: [
    grp(`La situation : « ${fr(E(2068))} »`, [
      free(fr(E(2069)), en(E(2069)), 'extrait A'),
      it(E(2070), 'extrait B'),
    ], chk(
      'Lequel tient la distance, et pourquoi ?',
      ['L’extrait B : il referme l’aparté, nomme le plan, et repart du bon point', 'L’extrait A : il ne sait plus où reprendre quoi que ce soit'], 0,
      'Ne jamais nommer le point de reprise laisse le fil tomber ; l’extrait B avance vers une reprise utile. EN: never naming the return point drops the thread; extract B moves toward a useful reprise.')),
    ctl('Le point commun', 'Ce qui distingue un extrait A raté d’un extrait B réussi, dans les deux cas, c’est…',
      ['une architecture qui tient contre une architecture qui s’effondre', 'la longueur de l’extrait'], 0,
      'La longueur ne fait rien ; ce qui compte, c’est que le plan tienne. EN: length does nothing; what matters is that the plan holds.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['distance'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le critère principal', 'Un extrait qui tient la distance doit avant tout…',
    ['rester dans le plan, refermer chaque aparté, et avancer', 'être grammaticalement parfait'], 0,
    'Un extrait peut être sans fautes et pourtant perdre son architecture en chemin. EN: an extract can be flawless and still lose its architecture along the way.'),
  ctl('Le fil qui tombe', 'Un extrait qui ne nomme jamais le point de reprise après un aparté…',
    ['laisse le fil tomber', 'reste toujours la meilleure option'], 0,
    'Ne pas nommer le point de reprise ne suffit jamais sans y revenir vraiment. EN: never naming the return point is never enough without actually returning to it.'),
  ctl('Le rappel précis', 'Entre un extrait vague et un extrait qui rappelle l’étape avant de continuer…',
    ['le second tient mieux debout', 'les deux se valent'], 0,
    'Le rappel précis donne au groupe quelque chose à retenir. EN: the precise recall gives the group something to hold on to.'),
], ['distance']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Tenir la distance',
    opener: {
      line: 'Deux extraits sur la même situation, et un seul tient debout sur toute sa longueur : ici tu apprends à voir pourquoi. EN: Two extracts on the same situation, and only one stands up over its whole length: here you learn to see why.',
      imageRef: 'lessons/c2-09-discours-long/act05.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais un extrait qui tient la distance : dans le plan, un aparté refermé, une vraie avancée. EN: You can recognise an extract that holds the distance: in the plan, an aside closed, a real move forward.',
    estScreens: 20, restPoints: ['a5-compare1'],
  },
  sections: [A5_CARTES, A5_COMPARE1, A5_COMPARE2, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 · LA VRAIE REPRISE, PAS LA DÉRIVE (trapDrill, stepped)
 * ══════════════════════════════════════════════════════════════════════════ */

const TRAP_STEPS = [
  { label: 'La règle', kind: 'rule' as const, title: 'Même surface, deux destinations' },
  { label: 'Cinq paires', kind: 'cards' as const, title: 'Ce que chaque paire raconte' },
  { label: 'Écoute', kind: 'audio' as const, title: 'Écoute les cinq reprises réelles' },
  { label: 'À toi', kind: 'drill' as const, title: 'Huit cas', gate: true },
];

type TrapCardT = { promptLabel: string; promptSound: string; fr: string; ipa: string; tip: string };
const tcard = (promptLabel: string, promptSoundId: string, correctId: string, ipa: string, tip: string): TrapCardT =>
  ({ promptLabel, promptSound: fr(promptSoundId), fr: fr(correctId), ipa, tip });

const A6_TRAP: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-trap',
  layer: 'core',
  title: 'La vraie reprise',
  frSub: 'Même hésitation, deux fins différentes',
  rule: {
    title: 'Ce qui sépare les deux',
    body: "« Bon, je referme la parenthèse, enfin, je sais plus trop » tourne en rond. « Je referme la parenthèse sur les castors, et je reviens à la tourbière » nomme le point exact et avance. EN: one circles, the other names the exact point and moves on.",
  },
  steps: TRAP_STEPS,
  cards: [
    tcard('Dérive', E(2077), E(2078), '/bɔ̃ ʒə ʁə.fɛʁm la paʁ.ɑ̃.tez/', "Bon, je referme la parenthèse, enfin, je sais plus trop n’avance vers rien ; l’autre nomme le point exact et corrige. EN: it moves toward nothing; the other names the exact point and fixes it."),
    tcard('Dérive', E(2079), E(2080), '/puʁ ʁə.vniʁ a nɔtʁ syʒe/', "Revenir au sujet sans jamais préciser lequel laisse le groupe sans rien ; préciser un point le fixe. EN: coming back to the topic without ever specifying which one leaves the group with nothing; specifying one point fixes it."),
    tcard('Dérive', E(2081), E(2082), '/ʒə ʁə.pʁɑ̃ lə fil ɑ̃.fɛ̃ œ̃ pø/', "Reprendre le fil sans dire où referme la réponse sur rien ; nommer l’étape exacte la referme sur un fait. EN: picking up the thread without saying where closes the reply on nothing; naming the exact stage closes it on a fact."),
    tcard('Dérive', E(2083), E(2084), '/bɔ̃ apʁɛ ply.zjœʁ ʃoz/', "Empiler les choses à dire sans trancher ne mène nulle part ; nommer exactement ce qui reste avance. EN: piling up things left to say without deciding goes nowhere; naming exactly what is left moves forward."),
    tcard('Dérive', E(2085), E(2086), '/dɔ̃k vwala ɑ̃.fɛ̃ sɛ œ̃ pø kɔ̃.pli.ke/', "Multiplier les peut-être ne conclut rien ; une phrase qui tient en dit plus en moins de mots. EN: stacking up these maybes concludes nothing; one sentence that holds says more in fewer words."),
  ],
  drill: [
    { promptSay: fr(E(2077)), opts: ['dérive', 'reprise réelle'], correct: 0 },
    { promptSay: fr(E(2078)), opts: ['dérive', 'reprise réelle'], correct: 1 },
    { promptSay: fr(E(2079)), opts: ['dérive', 'reprise réelle'], correct: 0 },
    { promptSay: fr(E(2080)), opts: ['dérive', 'reprise réelle'], correct: 1 },
    { promptSay: fr(E(2081)), opts: ['dérive', 'reprise réelle'], correct: 0 },
    { promptSay: fr(E(2082)), opts: ['dérive', 'reprise réelle'], correct: 1 },
    { promptSay: fr(E(2083)), opts: ['dérive', 'reprise réelle'], correct: 0 },
    { promptSay: fr(E(2084)), opts: ['dérive', 'reprise réelle'], correct: 1 },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['retour'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La différence réelle', 'Ce qui distingue une reprise réelle d’une dérive n’est jamais…',
    ['le mot d’hésitation employé au début', 'ce qui arrive juste après l’hésitation'], 0,
    'Le mot d’hésitation peut être identique dans les deux cas. EN: the hesitation word can be identical in both cases.'),
  ctl('Le signe qui trahit', 'Une dérive se reconnaît surtout parce qu’elle…',
    ['tourne en rond sans jamais rien nommer', 'contient trop de mots'], 0,
    'Elle n’avance jamais vers un point nommé du plan. EN: it never moves toward a named point of the plan.'),
  ctl('Le signe qui rassure', 'Une vraie reprise se reconnaît parce qu’elle…',
    ['nomme le point exact du plan et y revient', 'évite complètement le sujet'], 0,
    'Nommer, puis revenir : c’est tout ce qu’il faut. EN: naming it, then returning: that is all it takes.'),
], ['retour']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'La vraie reprise, pas la dérive',
    opener: {
      line: 'Deux hésitations presque identiques, et deux destinations complètement différentes : ici tu apprends à entendre laquelle est laquelle. EN: Two almost identical hesitations, and two completely different destinations: here you learn to hear which is which.',
      imageRef: 'lessons/c2-09-discours-long/act06.jpg',
    },
    sections: [],
    milestone: 'Tu distingues une reprise réelle d’une dérive, même quand elles commencent pareil. EN: You can tell a genuine reprise apart from a drift, even when they start the same way.',
    estScreens: 22, restPoints: [],
  },
  sections: [A6_TRAP, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 · SOUS LA DURÉE, EN SCÉNARIO
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_ATOI: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-atoi',
  layer: 'core',
  size: 'lg',
  title: 'Un randonneur demande l’heure du retour',
  groups: [
    grp('Une question de logistique, en cours de route', [
      it(E(2094), 'répond, puis revient'),
      it(E(2095), 'nomme l’étape, sans fuir'),
    ], chk(
      'Ce que ces deux réponses font, c’est…',
      ['répondre en une phrase, puis revenir exactement où le plan en était', 'reconstruire tout le plan pour répondre'], 0,
      'On ne reconstruit jamais tout le plan pour une question de logistique. EN: you never rebuild the whole plan for a logistical question.')),
    ctl('Le danger', 'Répondre à côté du plan pendant plusieurs minutes…',
      ['perd le groupe, pas seulement le fil d’une phrase', 'clarifie toujours la visite'], 0,
      'Le groupe ne sait plus où la visite en est, pas seulement une phrase. EN: the group no longer knows where the walk stands, not just one sentence.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sentier'],
};

const A7_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a7-scenario',
  layer: 'core',
  title: 'À toi : la fin de la visite',
  setting: 'Un randonneur demande combien de temps il reste, puis Fabienne fait signe qu’il reste cinq minutes avant le parking. Tu portes la visite seul ; réponds sans script.',
  turns: [
    {
      ai: 'Moi, ce qui m’intéresse, c’est de savoir combien de temps il reste avant qu’on soit de retour.',
      en: 'What interests me, personally, is knowing how much time is left before we’re back.',
      user: fr(E(2094)),
      userEn: `${en(E(2094))} (Answer the logistical question in one sentence, then return exactly to where the plan stood.)`,
      alts: [
        { fr: 'Il nous reste encore une vingtaine de minutes avant le retour ; je reprends maintenant notre deuxième étape.', en: 'We still have about twenty minutes before heading back; I’m picking back up now with our second stage.' },
        { fr: 'Il reste à peu près vingt minutes ; je reviens tout de suite à notre deuxième étape.', en: 'About twenty minutes left; I’ll come straight back to our second stage.' },
      ],
    },
    {
      ai: 'Il nous reste cinq minutes avant le parking.',
      en: 'We have five minutes left before the parking lot.',
      user: `${fr(E(2100))} ${fr(E(2102))}`,
      userEn: 'We have seen the peat bog, the beech forest, and this lookout that connects them: thank you for walking to the end. (Loop the plan closed, then end for real.)',
      alts: [
        { fr: 'En trois mots : la tourbière, la hêtraie, et ce belvédère qui les relie. Merci d’avoir marché jusqu’au bout.', en: 'In three words: the peat bog, the beech forest, and this lookout that connects them. Thanks for walking to the end.' },
        { fr: 'Pour reboucler notre plan : l’eau filtrée, les hêtres qui en vivent, et la vue qui les rassemble. À bientôt sur le sentier.', en: 'To loop our plan closed: the filtered water, the beeches that live off it, and the view that gathers them. See you soon on the trail.' },
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
  title: 'Deux façons de perdre le groupe',
  errors: [
    { wrong: 'Ah oui, le retour, tiens, en fait, parlons plutôt de ça, j’avais pas pensé à l’heure.', right: fr(E(2094)), why: 'Sauter sur la question de logistique abandonne le plan en plein milieu ; répondre en une phrase et revenir garde les deux fils. EN: jumping on the logistical question abandons the plan halfway through; answering in one sentence and returning keeps both threads.' },
    { wrong: 'Voilà, enfin, bon, c’est tout, je crois.', right: `${fr(E(2100))} ${fr(E(2102))}`, why: 'Une formule vague ne reboucle sur aucun point du plan ; un bilan en trois points, puis un remerciement, referme la visite pour de bon. EN: a vague phrase loops back onto no point of the plan; a three-point summary closes the walk for good.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['cloture'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La question de logistique', 'Face à une question qui ne concerne pas le contenu du plan, la bonne réaction est de…',
    ['répondre en une phrase, puis revenir exactement où le plan en était', 'reconstruire tout le plan pour y répondre'], 0,
    'On ne laisse tomber aucun des deux fils. EN: you never drop either thread.'),
  ctl('La fin', 'Une visite qui s’arrête net, sans reboucler sur le plan, laisse croire…',
    ['qu’elle s’est arrêtée au hasard', 'qu’elle a parfaitement réussi'], 0,
    'Même juste sur le fond, une fin sans rappel laisse un vide. EN: even if correct on substance, an ending with no recall leaves a gap.'),
  ctl('Le bilan', 'Nommer les trois parties du plan, puis remercier, avant de couper, c’est…',
    ['une vraie clôture', 'une politesse facultative'], 0,
    'C’est la clôture qui referme la visite pour de bon. EN: it is the closing that closes the walk for good.'),
], ['cloture']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Sous la durée, en scénario',
    opener: {
      line: 'Un randonneur demande l’heure du retour, puis la visite se termine dans cinq minutes : ici tu tiens les deux sans rien lâcher. EN: A hiker asks about the time of return, then the walk ends in five minutes: here you hold both without dropping anything.',
      imageRef: 'lessons/c2-09-discours-long/act07.jpg',
    },
    sections: [],
    milestone: 'Tu absorbes une pause de logistique sans fuir le plan, et tu termines une visite pour de vrai, rebouclée sur son plan. EN: You absorb a logistical pause without dodging the plan, and you actually end a walk, looped back onto its plan.',
    estScreens: 24, restPoints: ['a7-scenario'],
  },
  sections: [A7_ATOI, A7_SCENARIO, A7_ERREURS, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 · TON DISCOURS, DU DÉBUT À LA FIN
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_CHECKLIST: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-checklist',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-tenir',
  title: 'Avant de partir',
  frSub: 'Quatre cartes, un dernier rappel',
  hint: 'Quatre cartes.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['charpente', 'distance'],
  cards: [
    card(E(2107), 'La charpente', 'annoncer, tenir, signaler, rappeler', 'Passe les quatre gestes en revue avant de parler, pas pendant.'),
    card(E(2108), 'La balise', 'dite posément', 'Une balise dite posément vaut mieux qu’un enchaînement de mots sans direction.'),
    card(E(2109), 'La reprise', 'un point nommé, pas tout', 'Une reprise qui nomme le plan vaut mieux qu’un redémarrage complet.'),
    card(E(2110), 'La clôture', 'rebouclée sur le plan', 'Une clôture qui reboucle sur le plan vaut mieux qu’un arrêt au hasard.'),
  ],
};

const TASK_BRIEF_FR =
  `Tu es le guide du jour sur le sentier des Trois-Sources, qui ouvre au public pour la première fois ce week-end. Au milieu de la visite, un randonneur te dit : « ${HIKER_QUESTION_FR} » Le groupe t’attend ; à toi de porter toute la visite, seul, du premier mot au dernier.`;

const A8_MISSION: Sec<'task'> = {
  type: 'task', id: 'a8-mission', title: 'Porte la visite, du début à la fin', frSub: 'Mission orale',
  brief: TASK_BRIEF_FR,
  briefEn: `You are today’s guide on the Trois-Sources trail, opening to the public for the first time this weekend. Midway through the walk, a hiker tells you: "${HIKER_QUESTION_EN}" The group is waiting; it is up to you to carry the whole walk, alone, from the first word to the last.`,
  produce: 'Parle à voix haute, entre trois et cinq minutes, sans texte préparé : annonce le plan entier, tiens son ordre, signale chaque passage avec une vraie balise, absorbe la question du randonneur en une phrase avant de reprendre exactement où tu en étais, puis termine par une vraie clôture, rebouclée sur le plan annoncé au départ.',
  responseSpec: { kind: 'audio', minDurationS: 180, maxDurationS: 300 },
  rubric: {
    criteria: [
      { key: 'plan', label: 'Reste dans l’architecture annoncée', maxPoints: 4, descriptors: [
        "4 : Le discours suit réellement le plan annoncé au départ, dans l’ordre annoncé, sans sauter une partie ni en inventer une nouvelle.",
        "3 : Le plan est suivi, mais l’ordre glisse un moment avant de revenir à l’ordre annoncé.",
        '2 : Une partie du plan annoncé est oubliée, ou une partie non annoncée est ajoutée sans le dire.',
        "1 : Le discours part dans plusieurs directions à la fois, sans que le plan annoncé soit reconnaissable.",
      ] },
      { key: 'reprise', label: 'Une reprise réelle, si besoin', maxPoints: 4, descriptors: [
        "4 : Après la question du randonneur ou tout autre aparté, le discours revient réellement au plan : il nomme le point exact et repart de là, sans tourner en rond.",
        "3 : Une reprise a lieu, mais prend plus d’un détour pour nommer le point exact du plan.",
        '2 : Un aparté est suivi d’un redémarrage complet (recommencer depuis le début, s’excuser plusieurs fois).',
        "1 : Le discours tourne en rond après l’aparté, sans jamais nommer où le plan en était.",
      ] },
      { key: 'cloture', label: 'Une vraie clôture', maxPoints: 4, descriptors: [
        "4 : Le discours se termine en rebouclant clairement sur le plan annoncé au départ, point par point, pas seulement par un arrêt.",
        "3 : Le discours conclut, mais la fin ne reboucle qu’en partie sur le plan annoncé.",
        '2 : Le discours s’arrête net, sans reboucler sur le plan, même si le contenu était bon.',
        "1 : Le discours trahit un arrêt au hasard, ou s’interrompt au milieu d’une partie.",
      ] },
      { key: 'balises', label: 'Des balises dites à voix haute, jamais un tic', maxPoints: 3, descriptors: [
        "3 : Le discours utilise plusieurs balises reconnaissables (venons-en à, cela m’amène à, pour résumer avant de poursuivre), dites posément, à chaque vrai passage.",
        '2 : Des balises sont utilisées, mais glissées trop vite ou répétées comme un tic plutôt que posément.',
        "1 : Aucune vraie balise : des passages devinés, ou un enchaînement de mots de remplissage sans direction.",
      ] },
      { key: 'charpente', label: 'La charpente tenue', maxPoints: 3, descriptors: [
        "3 : On entend les quatre gestes : une annonce du plan, un ordre tenu, des passages signalés, et au moins un rappel du plan en cours de route.",
        '2 : Trois des quatre gestes sont là ; un manque (le plus souvent le rappel en cours de route).',
        "1 : Deux gestes ou moins : le discours part sans structure repérable.",
      ] },
      { key: 'langue', label: 'Une langue fluide', maxPoints: 2, descriptors: [
        '2 : Peu ou pas d’erreurs qui gênent l’écoute ; un débit régulier sur toute la durée.',
        "1 : Des erreurs fréquentes, ou un débit si irrégulier qu’il gêne la compréhension.",
      ] },
    ],
  },
  scaffold: [
    'Nous verrons trois choses aujourd’hui…',
    'Venons-en maintenant à…',
    'Pour résumer ce point avant de poursuivre…',
    'Je reviens à présent à…',
    'Pour revenir à notre plan…',
    'Nous avons vu…, et voilà notre sentier, du début à la fin.',
  ],
  modelAnswer: "Nous verrons trois choses aujourd’hui : la source principale, la passerelle, puis le point de vue final. Pour commencer, suivons le chemin de la source. Elle sort de la roche à cet endroit précis depuis que le sentier existe, et c’est elle qui alimente tout le reste du parcours : sans son débit constant, même en plein été, la passerelle plus bas n’aurait jamais été construite, et la forêt qui l’entoure n’aurait pas cette couleur presque noire sur les pierres. Venons-en maintenant à la passerelle, notre deuxième étape. Quelqu’un me demande combien de temps il reste avant le retour, parce qu’il a un rendez-vous cet après-midi : encore environ vingt minutes, et je reviens tout de suite à notre deuxième étape. La passerelle traverse exactement l’endroit où la source rejoint le ruisseau principal, ce qui explique pourquoi elle a été construite ici et pas plus bas, là où la rive aurait été bien plus facile à aménager. Un héron vient justement de traverser le ruisseau, juste sous nos pieds. Je referme cette parenthèse, et je reviens à notre deuxième étape : chaque pierre de cette passerelle a été portée à dos d’homme, il y a plus de quarante ans, avant qu’aucune route ne permette d’y amener un camion. Pour résumer ce point avant de poursuivre, retenons surtout que cette passerelle reste le seul passage sec sur tout le sentier, même après les pluies de printemps. Arrivons-en au dernier volet de notre promenade, le point de vue. D’ici, par temps clair, on distingue les trois sommets qui bordent toute la vallée, et c’est depuis ce même rocher que les premiers randonneurs du siècle dernier ont choisi le tracé que nous venons de suivre. On raconte même qu’un vieux guide venait s’y asseoir chaque soir, uniquement pour vérifier que le sentier tenait encore debout après l’hiver. Le vent y est souvent plus fort qu’ailleurs sur le sentier, ce qui explique pourquoi aucun arbre ne pousse vraiment sur ce dernier mètre de rocher. Pour résumer ce point avant de terminer, ce point de vue rassemble tout ce que nous venons de voir : la source qu’on entend encore d’ici, portée par le vent, et la passerelle qu’on aperçoit tout en bas, minuscule entre les arbres. Nous avons vu la source, la passerelle, et ce point de vue qui les relie : voilà notre sentier des Trois-Sources, du début à la fin. Merci d’avoir marché jusqu’au bout, et à bientôt sur ce même chemin.",
  modelAnswerEn: "We will see three things today: the main spring, the footbridge, then the final viewpoint. To begin, let’s follow the path to the spring. It has come out of the rock at this exact spot for as long as the trail has existed, and it feeds everything else on the walk: without its steady flow, even in the middle of summer, the footbridge further down would never have been built, and the forest around it would not have that almost-black colour on its stones. Let’s move on now to the footbridge, our second stage. Someone asks me how much longer until we’re back at the parking lot, because they have an appointment this afternoon: about twenty more minutes, and I’ll come straight back to our second stage. The footbridge crosses exactly where the spring meets the main stream, which explains why it was built here rather than further down, where the bank would have been much easier to work with. A heron has just crossed the stream, right under our feet. I’ll close this aside, and come back to our second stage: every stone of this footbridge was carried in by hand, more than forty years ago, before any road could bring a truck here. To sum up this point before continuing, let’s mainly remember that this footbridge stays the only dry crossing on the whole trail, even after the spring rains. Let’s come to the last part of our walk, the viewpoint. From here, on a clear day, you can make out the three peaks that line the whole valley, and it was from this very rock that the first hikers of the last century chose the route we have just followed. They say an old guide used to come sit here every evening, just to check that the trail was still standing after winter. The wind here is often stronger than anywhere else on the trail, which explains why no tree really grows on this last stretch of rock. To sum up this point before finishing, this viewpoint gathers everything we’ve just seen: the spring we can still hear from here, carried by the wind, and the footbridge visible far below, tiny between the trees. We have seen the spring, the footbridge, and this viewpoint that connects them: that is our Trois-Sources trail, from beginning to end. Thank you for walking all the way, and see you soon on this same path.",
  watchFor: [
    { pattern: 'The reply never announces a plan at all, or abandons it without anyone noticing partway through.', criterion: 'plan', feedback: 'Annonce le plan entier en une phrase avant le premier pas, et tiens-le dans l’ordre annoncé. EN: announce the whole plan in one sentence before the first step, and hold it in the announced order.', ref: 'a3-cartes' },
    { pattern: 'After the hiker’s question or any aside, the reply restarts the whole walk from zero, or apologises repeatedly, rather than a one-sentence reprise.', criterion: 'reprise', feedback: 'Nomme le point exact du plan et repars de là ; ne recommence jamais depuis le début. EN: name the plan’s exact point and set off again from there; never start over from the beginning.', ref: 'a4-cartes' },
    { pattern: 'The reply trails off, stops mid-part, or ends on a vague filler with no real loop back to the announced plan.', criterion: 'cloture', feedback: 'Termine en rebouclant sur le plan annoncé au départ, point par point. EN: finish by looping back onto the plan announced at the start, point by point.', ref: 'a7-erreurs' },
    { pattern: 'No real transitions at all: passages are only guessed at, or strung together with empty fillers (et puis, enfin, voilà, bon).', criterion: 'balises', feedback: 'Dis une vraie balise, posément, à chaque vrai passage. EN: say a real marker, steadily, at each real passage.', ref: 'a2-cartes' },
    { pattern: 'The reply skips the periodic recall of the plan, leaving the group with no map past the opening sentence.', criterion: 'charpente', feedback: 'Rappelle le plan entier à la fin d’au moins une grande partie, pas seulement au tout début. EN: recall the whole plan at the end of at least one major part, not only at the very start.', ref: 'a3-table' },
    { pattern: 'The reply handles the logistical question by abandoning the plan entirely, chasing it for more than a sentence or two.', criterion: 'plan', feedback: 'Réponds à la question de logistique en une phrase, puis reviens exactement où le plan en était. EN: answer the logistical question in one sentence, then return exactly to where the plan stood.', ref: 'a7-atoi' },
    { pattern: 'The reply is grammatically correct throughout but never actually loops back to the plan or recaps where it has been.', criterion: 'cloture', feedback: 'Un discours peut être sans fautes et pourtant laisser croire qu’il s’est arrêté au hasard, s’il ne reboucle jamais sur son plan. EN: a discourse can be flawless and still suggest it stopped at random, if it never loops back onto its plan.', ref: 'a5-cartes' },
  ],
  graderNotes: [
    'Duration: three to five minutes, with brief tolerance either side before length alone costs points.',
    "This task marks SUSTAINED ARCHITECTURE: holding the announced plan, a genuine reprise if an aside happens, and a real closing loop. It is not primarily a grammar check (C2 has no new grammar, per C2-BUILD-PLAN.md); score 'langue' low weight relative to the other five criteria.",
    'Accept any balise that genuinely signals a real passage (venons-en à, cela m’amène à, pour résumer avant de poursuivre, arrivons-en à), not only the exact phrases modelled.',
    'An aside is not itself a fault: do not penalise a brief digression that is followed by a real, named reprise. Penalise only a restart from zero, repeated apology, or a reply that never names where the plan stands after the aside.',
    'Accept any concrete, specific detail in each part, even if it differs from the model (a different plant, a different distance, a different number of minutes).',
    'Feedback language: unsimplified C2 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['charpente', 'cloture'],
};

const A8_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a8-parler', layer: 'core', title: 'Dis chaque outil à voix haute', skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
  audio: AUDIO, say: REFRAME, terms: ['balise', 'reprise'],
};

const A8_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a8-cheat', layer: 'core', sheetId: 'sheet-tenir',
  title: 'Tout l’outillage sur un écran',
  rows: [
    { k: 'la balise', v: 'venons-en à, cela m’amène à, pour résumer avant de poursuivre', say: fr(E(2013)),
      detail: { title: 'Dite posément, jamais glissée', body: 'Une balise glissée entre deux pas rapides se perd dans le bruit. EN: a marker slipped in between two quick steps gets lost in the noise.', say: fr(E(2026)) } },
    { k: 'la charpente', v: 'annoncer, tenir, signaler, rappeler', say: fr(E(2030)),
      detail: { title: 'Quatre gestes, un contenu différent', body: 'La charpente structure la durée entière, pas une seule partie. EN: the architecture structures the whole length, not one part.', say: fr(E(2045)) } },
    { k: 'la reprise', v: 'je referme cette parenthèse, pour revenir à notre fil, je reprends ici le plan', say: fr(E(2047)),
      detail: { title: 'Le plan entier, jamais un mot isolé', body: 'Recommencer depuis zéro efface des minutes déjà tenues. EN: starting over from zero erases minutes already held.', say: fr(E(2056)) } },
    { k: 'tenir la distance', v: 'rester dans le plan, refermer, avancer', say: fr(E(2076)),
      detail: { title: 'Pas la grammaire seule', body: 'Un discours parfait grammaticalement peut perdre son architecture en chemin. EN: a grammatically perfect discourse can still lose its architecture along the way.', say: fr(E(2075)) } },
    { k: 'la reprise réelle', v: 'nomme le point exact, puis avance', say: fr(E(2078)),
      detail: { title: 'Jamais le mot d’hésitation', body: 'La différence est dans ce qui arrive juste après l’hésitation. EN: the difference is in what comes right after the hesitation.', say: fr(E(2089)) } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['charpente', 'retour'],
};

const A8_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a8-progress', layer: 'core', title: 'Où tu en es',
  body: "Tu portes maintenant un plan entier, seul, sur plusieurs minutes, en l’annonçant dès le départ, en signalant chaque passage avec une vraie balise dite posément, jamais avec un enchaînement de mots sans direction. Tu reviens à ce plan par une reprise nommée après un aparté, sans jamais recommencer depuis le début, et tu reconnais la différence entre une vraie reprise et une dérive qui tourne en rond. Le piège qui reste est toujours le même : s’arrêter net, sans reboucler sur le plan annoncé au départ, même quand tout le reste était juste. Avant l’examen, prends un sujet que tu connais bien, et porte-le à voix haute pendant trois minutes, en te chronométrant, avec au moins un aparté volontaire à refermer. EN: Before any exam, take a topic you know well, and carry it aloud for three minutes, timing yourself, with at least one deliberate aside to close.",
  stats: [
    { k: 'Le plan', v: 'annoncé en une phrase, tenu dans l’ordre' },
    { k: 'La balise', v: 'dite posément, à chaque vrai passage' },
    { k: 'La reprise', v: 'un point nommé, jamais un redémarrage' },
    { k: 'La clôture', v: 'rebouclée sur le plan, jamais un arrêt au hasard' },
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
  ({ format: 'errorSpot', q: 'Un mot ou un geste trahit la dérive. Écris la version qui tient debout. EN: One word or move betrays the drift; write the version that holds together.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A8_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a8-quiz', layer: 'core', title: 'Le bilan', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-sentier', label: 'Le problème : tenir seul', targets: ['sans-plan-annonce'],
      questions: [
        mc('Ce qui sépare le plus une visite guidée d’un exposé ou d’une réponse en direct, c’est…', ['la durée sans aucune relance', 'le nombre de personnes présentes', 'la politesse attendue'], 0, 'Un exposé et une réponse en direct sont relancés ; ici, personne ne relance jamais. EN: an exposé and a live reply both get a follow-up; here, nobody ever follows up.', 'a1-check'),
        mc('Ici, ce qui doit tenir du début à la fin, c’est…', ['le plan entier', 'une seule phrase bien choisie', 'le ton de voix uniquement'], 0, 'C’est tout l’écart avec une correction au mot près. EN: that is the whole gap with a word-level correction.', 'a1-check'),
        tI('Complète. Un mot.', 'Un plan jamais annoncé laisse le groupe sans … .', 'repère', 'C’est le mot nommé dans la leçon. EN: that is the word named in the lesson.', 'a2-trier'),
        tI('Complète. Un mot.', 'Porter un plan seul, sans jury ni auditeur, c’est tenir … .', 'seul', 'Le mot clé de toute la leçon. EN: the key word of the whole lesson.', 'a1-scene'),
        eS('Face à un groupe qui attend, le mieux est de partir sans annoncer aucun plan.', 'Face à un groupe qui attend, le mieux est d’annoncer le plan entier avant de partir.', 'Un plan jamais annoncé laisse le groupe sans repère. EN: a plan never announced leaves the group with no bearing.', 'a1-check'),
        lC('Écoute. Cette phrase vient-elle d’une réponse réussie ou ratée.', fr(E(2004)), ['réussie', 'ratée'], 1, 'Elle part sans jamais annoncer un plan. EN: it sets off without ever announcing a plan.', 'a1-scene'),
      ],
    },
    {
      id: 'r2-balise', label: 'Les balises qui tiennent le chemin', targets: ['mots-sans-direction'],
      questions: [
        mc('Une balise comme « venons-en maintenant à » sert avant tout à…', ['annoncer clairement un passage d’une partie à l’autre', 'changer de sujet sans le dire', 'mettre fin à la visite'], 0, 'Elle signale le passage, elle ne le cache jamais. EN: it signals the passage, it never hides one.', 'a2-cartes'),
        mc('Entre un enchaînement de mots de remplissage et un long silence, le moins utile est…', ['l’enchaînement de mots', 'le silence complet', 'aucun des deux, ils valent pareil'], 1, 'Le silence ne promet même pas qu’un passage arrive. EN: silence does not even promise that a passage is coming.', 'a2-trier'),
        tI('Complète. Un mot.', 'Dite trop vite, une bonne balise risque de se perdre dans le bruit des … .', 'pas', 'La vitesse brouille la différence entre les deux. EN: speed blurs the difference between the two.', 'a2-erreurs'),
        tI('Complète. Un mot.', '« Cela m’amène … à… » annonce exactement ce qui vient ensuite.', 'justement', 'C’est la balise qui annonce le passage précis. EN: the marker that announces the precise passage.', 'a2-ecoute'),
        eS('Pour signaler un passage, enchaîne et puis, enfin, voilà, bon, plusieurs fois.', 'Pour signaler un passage, dis venons-en maintenant à, posément.', 'Un enchaînement de mots n’annonce rien ; une balise si. EN: a string of filler words announces nothing; a marker does.', 'a2-erreurs'),
        lC('Écoute. Ce mot est-il une balise ou une transition absente.', fr(E(2014)), ['une balise', 'une transition absente'], 0, 'Elle ouvre une piste claire vers le sujet suivant. EN: it opens a clear path toward the next topic.', 'a2-trier'),
      ],
    },
    {
      id: 'r3-charpente', label: 'La charpente annoncée', targets: ['charpente-incomplete'],
      questions: [
        mc('Le premier geste de la charpente est toujours…', ['annoncer le plan entier', 'signaler un passage', 'rappeler ce qui vient d’être vu'], 0, 'On annonce avant de marcher, jamais après. EN: you announce before walking, never after.', 'a3-check'),
        mc('Un bon geste 3 (signaler) rend le passage…', ['visible, nommé par une vraie balise', 'deviné, sans jamais être nommé', 'facultatif, selon l’humeur'], 0, 'Un passage nommé se voit plus qu’un passage deviné. EN: a named passage is seen more than a guessed one.', 'a3-table'),
        tI('Complète. Un mot.', 'Le quatrième geste de la charpente est … .', 'rappeler', 'C’est le quatrième geste. EN: that is the fourth move.', 'a3-cartes'),
        tI('Complète. Un mot.', 'Dire le plan entier avant de marcher, c’est le geste … .', 'annoncer', 'Le premier geste de la charpente. EN: the architecture’s first move.', 'a3-cartes'),
        eS('Pour tenir la charpente, il suffit de changer l’ordre en marchant si une partie semble plus intéressante.', 'Pour tenir la charpente, il faut suivre l’ordre annoncé, sans en inventer un autre.', 'Changer l’ordre en marchant défait la carte donnée au départ. EN: changing the order while walking undoes the map handed out at the start.', 'a3-table'),
        lC('Écoute. Ce geste annonce-t-il un passage, ou rappelle-t-il le plan.', fr(E(2037)), ['il rappelle le plan', 'il annonce un passage'], 0, 'Elle redit ce qui a déjà été vu, avant de continuer. EN: it restates what has already been seen, before continuing.', 'a3-atoi'),
      ],
    },
    {
      id: 'r4-reprise', label: 'La reprise, jamais un redémarrage', targets: ['redemarrage-au-lieu-de-reprise'],
      questions: [
        mc('Une bonne reprise vise…', ['le plan entier, jamais un seul mot isolé', 'toujours un seul mot isolé', 'uniquement la grammaire'], 0, 'Reprendre large garde le plan plus qu’un simple mot corrigé. EN: a broad reprise keeps the plan more than a single corrected word.', 'a4-check'),
        mc('S’excuser plusieurs fois de suite pour un même aparté…', ['attire l’attention sur l’aparté', 'le fait toujours oublier', 'reste sans aucun effet'], 0, 'La répétition devient visible. EN: the repetition becomes noticeable.', 'a4-build'),
        tI('Complète. Un mot.', 'Pour refermer un aparté sans rien effacer d’autre, on dit « je … cette parenthèse ».', 'referme', 'Le marqueur qui referme sans effacer. EN: the marker that closes without erasing.', 'a4-cartes'),
        tI('Complète. Un mot.', 'Pour reprendre un point précis, on dit « je reprends … le plan annoncé ».', 'ici', 'Le marqueur qui reprend un point précis. EN: the marker that resumes a precise point.', 'a4-cartes'),
        eS('Après un aparté, le mieux est de recommencer toute la visite depuis le début.', 'Après un aparté, le mieux est de nommer le point exact du plan, puis de continuer.', 'Recommencer efface ce qui tenait déjà debout. EN: restarting erases what was already standing.', 'a4-erreurs'),
        lC('Écoute. Cette phrase reprend-elle un point précis, ou redémarre-t-elle tout.', fr(E(2053)), ['elle reprend un point précis', 'elle redémarre tout'], 1, 'Elle recommence depuis le début de la visite, deux fois de suite. EN: it restarts from the beginning of the walk, twice in a row.', 'a4-erreurs'),
      ],
    },
    {
      id: 'r5-distance', label: 'Tenir la distance', targets: ['extrait-sans-rappel'],
      questions: [
        mc('Un extrait qui tient la distance doit avant tout…', ['rester dans le plan, refermer chaque aparté, et avancer', 'être grammaticalement parfait', 'être le plus long possible'], 0, 'Un extrait sans fautes peut pourtant perdre son architecture en chemin. EN: a flawless extract can still lose its architecture along the way.', 'a5-check'),
        mc('Un extrait qui ne nomme jamais le point de reprise après un aparté…', ['laisse le fil tomber', 'reste toujours la meilleure option', 'impressionne le plus le groupe'], 0, 'Ne pas nommer le point ne suffit jamais sans y revenir. EN: never naming the point is never enough without actually returning to it.', 'a5-compare2'),
        tI('Complète. Un mot.', 'Un extrait qui ne rappelle jamais l’étape laisse le … tomber.', 'fil', 'C’est le mot nommé dans l’acte 5. EN: that is the word named in act 5.', 'a5-cartes'),
        tI('Complète. Un mot.', 'Entre deux extraits, celui qui tient la distance est celui qui … le point de reprise.', 'nomme', 'Nommer le point est la condition qui distingue les deux extraits. EN: naming the point is the condition that sets the two extracts apart.', 'a5-cartes'),
        eS('Pour répondre à l’aparté sur le chevreuil, il suffit de dire que c’était joli et de continuer au hasard.', 'Pour répondre à l’aparté sur le chevreuil, il faut refermer la parenthèse, nommer le plan, et repartir du bon point.', 'L’extrait A ne nomme jamais où reprendre. EN: extract A never names where to resume.', 'a5-compare2'),
        lC('Écoute. Cet extrait tient-il la distance, ou perd-il son architecture.', fr(E(2064)), ['il tient la distance', 'il perd son architecture'], 1, 'Il part dans plusieurs directions sans jamais rappeler l’étape. EN: it heads in several directions without ever recalling the stage.', 'a5-compare1'),
      ],
    },
    {
      id: 'r6-retour', label: 'La vraie reprise, pas la dérive', targets: ['derive-non-vue'],
      questions: [
        mc('Ce qui distingue une reprise réelle d’une dérive n’est jamais…', ['le mot d’hésitation employé au début', 'ce qui arrive juste après', 'la longueur totale de la réponse'], 0, 'Le mot d’hésitation peut être identique dans les deux cas. EN: the hesitation word can be identical in both cases.', 'a6-check'),
        mc('Une dérive se reconnaît surtout parce qu’elle…', ['tourne en rond sans jamais rien nommer', 'contient trop de mots', 'utilise un vocabulaire trop simple'], 0, 'Elle n’avance jamais vers un point nommé du plan. EN: it never moves toward a named point of the plan.', 'a6-trap'),
        tI('Complète. Un mot.', 'Nommer le point exact et avancer, c’est une … réelle.', 'reprise', 'Le terme exact de l’acte 6. EN: the exact term from act 6.', 'a6-trap'),
        tI('Complète. Un mot.', 'Tourner en rond sans rien nommer, c’est une … .', 'dérive', 'Le terme opposé. EN: the opposite term.', 'a6-trap'),
        eS('Pour reprendre, il suffit de dire je referme cette parenthèse, puis de s’arrêter là.', 'Pour reprendre, il faut dire je referme cette parenthèse, puis nommer le point exact et avancer.', 'S’arrêter juste après le marqueur ne nomme rien. EN: stopping right after the marker names nothing.', 'a6-trap'),
        lC('Écoute. Reprise réelle, ou dérive.', fr(E(2083)), ['reprise réelle', 'dérive'], 1, 'Elle empile les choses à dire sans jamais trancher. EN: it piles up things to say without ever deciding.', 'a6-trap'),
      ],
    },
    {
      id: 'r7-duree', label: 'Sous la durée, en scénario', targets: ['pause-sans-reprise'],
      questions: [
        mc('Face à une question de logistique qui ne concerne pas le plan, la bonne réaction est de…', ['répondre en une phrase, puis revenir exactement où le plan en était', 'reconstruire tout le plan pour y répondre', 'l’ignorer complètement'], 0, 'On ne laisse tomber aucun des deux fils. EN: you never drop either thread.', 'a7-check'),
        mc('Une visite qui s’arrête net, sans reboucler sur le plan, laisse croire…', ['qu’elle s’est arrêtée au hasard', 'qu’elle a parfaitement réussi', 'qu’elle a duré trop longtemps'], 0, 'Même juste sur le fond, une fin sans rappel laisse un vide. EN: even if correct, an ending with no recall leaves a gap.', 'a7-erreurs'),
        tI('Complète. Un mot.', 'Répondre à côté du plan pendant plusieurs minutes perd le groupe, pas seulement le … .', 'fil', 'C’est le mot répété dans toute la leçon. EN: the word repeated throughout the lesson.', 'a7-atoi'),
        tI('Complète. Un mot.', 'Nommer les trois parties puis remercier, avant de couper, c’est une vraie … .', 'clôture', 'Le terme exact. EN: the exact term.', 'a7-scenario'),
        eS('Face à la question du randonneur, le mieux est d’y répondre pendant plusieurs minutes, en laissant tomber le plan.', 'Face à la question du randonneur, le mieux est de répondre en une phrase, puis de revenir au plan.', 'On garde les deux fils, jamais un seul. EN: you keep both threads, never just one.', 'a7-atoi'),
        lC('Écoute. Cette réponse revient-elle au plan, ou l’abandonne-t-elle.', fr(E(2094)), ['elle revient au plan', 'elle l’abandonne'], 0, 'Elle répond en une phrase, puis annonce son retour à la hêtraie. EN: it answers in one sentence, then announces its return to the beech forest.', 'a7-scenario'),
      ],
    },
    {
      id: 'r8-bilan', label: 'Le bilan de la mission', targets: ['pause-sans-reprise'],
      questions: [
        mc('La mission orale de cette leçon demande de…', ['lire un texte préparé à l’avance', 'porter une visite entière, seul, sans texte préparé', 'résumer les actes précédents'], 1, 'C’est tout le sens de la leçon. EN: that is the whole point of the lesson.', 'a8-mission'),
        mc('Pour réussir le critère « balises » de la mission, il faut…', ['dire plusieurs balises reconnaissables, posément', 'éviter absolument toute pause', 'répéter le même mot plusieurs fois'], 0, 'Une balise bien tenue n’est jamais le problème. EN: a well-held marker is never the problem.', 'a8-mission'),
        mc('Le critère « charpente » juge surtout si l’on entend…', ['les quatre gestes, à leur place', 'uniquement la dernière partie', 'uniquement l’annonce du départ'], 0, 'Annoncer, tenir, signaler, rappeler : les quatre comptent. EN: announce, hold, signal, recall: all four count.', 'a8-mission'),
        tI('Complète. Un mot.', 'Avant de parler, passe ta … en revue : annoncer, tenir, signaler, rappeler.', 'charpente', 'C’est l’étape de préparation mentale. EN: that is the mental preparation step.', 'a8-checklist'),
        tI('Complète. Un mot.', 'Le sentier ne raccourcit pas parce que tu … .', 'fatigues', 'C’est le reframe de la leçon. EN: that is the lesson’s reframe.', 'a8-progress'),
        eS('Un bon discours long peut s’arrêter dès que la dernière partie est dite, sans rien de plus.', 'Un bon discours long reboucle sur le plan annoncé, après la dernière partie.', 'S’arrêter trop tôt laisse le fil tomber. EN: stopping too early drops the thread.', 'a8-checklist'),
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
    { front: 'the trail never shortens because you are tiring', back: 'le sentier balisé', say: fr(E(2009)) },
    { front: 'a marker that signals a real passage', back: 'une balise', say: fr(E(2013)) },
    { front: 'four moves, any length', back: 'la charpente annoncée', say: fr(E(2029)) },
    { front: 'names the point, keeps going', back: 'je referme cette parenthèse', say: fr(E(2047)) },
    { front: 'erases minutes already held', back: 'un redémarrage complet', say: fr(E(2060)) },
    { front: 'stay in the plan, close, advance', back: 'tenir la distance', say: fr(E(2073)) },
    { front: 'names the exact point, then moves on', back: 'une reprise réelle', say: fr(E(2078)) },
    { front: 'loops back onto the plan, closes the thread', back: 'une clôture bouclée', say: fr(E(2105)) },
  ],
  audio: AUDIO, say: REFRAME,
};

const A8_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a8-roundup', layer: 'core', title: 'Soutenir un discours long, en résumé',
  body: `${REFRAME} Tu portes maintenant un plan entier, seul, sur plusieurs minutes, en l’annonçant dès le départ, en le signalant à chaque passage, en y revenant par une reprise nommée après un aparté, et en terminant par une vraie clôture, rebouclée sur le plan, pas par un arrêt au hasard. EN: You can now carry a whole plan, alone, over several minutes, announcing it from the start, signalling it at every passage, returning to it with a named reprise after any aside, and ending with a real closing loop onto the plan, rather than a stop that lands at random.`,
  points: [
    'Une balise dite posément vaut mieux qu’un enchaînement de mots sans direction.',
    'La charpente (annoncer, tenir, signaler, rappeler) structure la durée entière, pas une seule partie.',
    'Une reprise nomme le point exact du plan ; recommencer depuis le début efface des minutes déjà tenues.',
    'Une reprise réelle nomme le problème et avance ; une dérive tourne en rond.',
    'Un discours tient la distance s’il reste dans le plan, referme chaque aparté, et reboucle à la fin.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['sentier', 'distance'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-sentier', title: 'Un plan annoncé, ou aucun plan', format: 'mcq' as const, coach: 'Compare un plan annoncé en une phrase à un départ sans aucun plan. EN: compare a plan announced in one sentence to a start with no plan at all.', q: 'Face à un groupe qui attend, le mieux est de…', opts: ['partir sans rien annoncer', 'annoncer le plan entier, en une phrase'], correct: 1, why: 'Un plan jamais annoncé laisse le groupe sans repère. EN: a plan never announced leaves the group with no bearing.', items: [E(2005), E(2004), E(2011)], audio: AUDIO },
  { id: 'd-balise', title: 'Balise, jamais un enchaînement de mots', format: 'sort' as const, coach: 'Classe chaque phrase : une vraie balise, ou un enchaînement de mots sans direction. EN: sort each line: a real marker, or a string of words with no direction.', buckets: ['une balise', 'un enchaînement sans direction'], items: [E(2012), E(2013), E(2016), E(2019), E(2020), E(2021)], audio: AUDIO },
  { id: 'd-charpente', title: 'Les quatre gestes, dans l’ordre', format: 'mcq' as const, coach: 'Remets les gestes de la charpente dans l’ordre, en pensant à chacun. EN: put the architecture’s moves back in order, thinking through each one.', q: 'Le premier geste de la charpente est toujours…', opts: ['signaler un passage', 'annoncer le plan entier'], correct: 1, why: 'On annonce avant de marcher. EN: you announce before walking.', items: [E(2030), E(2032), E(2034), E(2036)], audio: AUDIO },
  { id: 'd-reprise', title: 'Reprendre, pas redémarrer', format: 'mcq' as const, coach: 'Compare une reprise qui nomme un point précis à un redémarrage complet. EN: compare a reprise that names a precise point to a full restart.', q: 'Après un aparté, le mieux est de…', opts: ['recommencer toute la visite', 'nommer le point exact, puis continuer'], correct: 1, why: 'Recommencer efface ce qui tenait déjà debout. EN: restarting erases what was already standing.', items: [E(2047), E(2049), E(2052), E(2053)], audio: AUDIO },
  { id: 'd-retour', title: 'Même hésitation, deux fins', format: 'flashcard' as const, coach: 'Dis chaque paire à voix haute : laquelle avance, laquelle tourne en rond. EN: say each pair aloud: which one moves forward, which circles.', items: [E(2077), E(2078), E(2079), E(2080)], audio: AUDIO },
  { id: 'd-cloture', title: 'Reboucler pour de vrai', format: 'mcq' as const, coach: 'Compare une fin vague à une vraie clôture, rebouclée sur le plan. EN: compare a vague ending to a real closing, looped back onto the plan.', q: 'Un discours qui s’arrête net, sans reboucler sur le plan, laisse croire…', opts: ['qu’il a parfaitement réussi', 'qu’il s’est arrêté au hasard'], correct: 1, why: 'Même juste sur le fond, une fin sans rappel laisse un vide. EN: even if correct, an ending with no recall leaves a gap.', items: [E(2100), E(2101), E(2102), E(2103)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'sans-plan-annonce', description: 'Launches into a long turn with no announced plan, or abandons the plan without naming that it has changed.', detectOn: ['a1-check', 'a1-scene', 'a8-mission'], drill: 'd-sentier', retest: 'd-sentier' },
  { id: 'mots-sans-direction', description: 'Strings fillers together as if they were transitions, with no real signposting of a passage from one part to the next.', detectOn: ['a2-trier', 'a2-erreurs', 'a2-check', 'a8-mission'], drill: 'd-balise', retest: 'd-balise' },
  { id: 'charpente-incomplete', description: 'Skips a move of the four-part architecture (most often the periodic recall), leaving the plan to erode silently over the length.', detectOn: ['a3-build', 'a3-atoi', 'a3-check', 'a8-mission'], drill: 'd-charpente', retest: 'd-charpente' },
  { id: 'redemarrage-au-lieu-de-reprise', description: 'Restarts the whole turn from zero after an aside, or over-apologises, instead of a one-sentence reprise naming the plan’s exact point.', detectOn: ['a4-build', 'a4-erreurs', 'a4-check', 'a8-mission'], drill: 'd-reprise', retest: 'd-reprise' },
  { id: 'derive-non-vue', description: 'Mistakes a response that has actually lost its architecture (circling, never naming where the plan stands) for a genuine reprise, because the surface hesitation looks the same.', detectOn: ['a6-trap', 'a6-check'], drill: 'd-retour', retest: 'd-retour' },
  { id: 'pause-sans-reprise', description: 'Abandons the plan entirely to chase a logistical aside raised mid-turn, or ends the whole turn with no closing loop back to the announced architecture.', detectOn: ['a7-atoi', 'a7-erreurs', 'a7-check', 'a8-mission'], drill: 'd-cloture', retest: 'd-cloture' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-balises', 'Les balises, et ce qui n’en est pas', ['sept balises', 'trois transitions absentes'], [
    teach('sheet-balises-teach', 'Un marqueur qui signale, jamais un mot qui remplit',
      "Une balise dite posément signale clairement le passage d’une partie à l’autre ; un enchaînement de mots de remplissage n’annonce rien, et un long silence laisse croire que le guide s’est perdu. EN: A steadily said marker clearly signals the move from one part to the next; a string of filler words announces nothing, and a long silence suggests the guide has got lost."),
    table('sheet-balises-table', 'Sept balises utiles', ['Balise', 'Fonction'], [
      ['pour commencer', 'ouvre la toute première partie'],
      ['venons-en maintenant à…', 'ferme une partie, ouvre la suivante'],
      ['cela m’amène justement à…', 'annonce précisément ce qui vient'],
      ['avant d’aller plus loin…', 'résume avant de continuer'],
      ['je referme ici une parenthèse…', 'signale la fin d’un aparté'],
      ['pour résumer ce point…', 'ancre le point avant de poursuivre'],
      ['arrivons-en au dernier volet…', 'annonce la dernière partie'],
    ]),
    table('sheet-balises-vides', 'Trois enchaînements vides, à éviter', ['Enchaînement', 'Ce qui manque'], [
      ['et puis, enfin, voilà, bon', 'aucun passage annoncé'],
      ['bon après, enfin, je sais pas', 'cinq mots de remplissage, rien de plus'],
      ['alors du coup, enfin bref', 'n’annonce rien de précis'],
    ]),
  ]),
  sheet('sheet-charpente', 'La charpente annoncée', ['quatre gestes', 'deux exemples complets'], [
    teach('sheet-charpente-teach', 'Une structure pour la durée, pas pour le contenu',
      "Annoncer le plan entier, tenir l’ordre annoncé, signaler chaque passage avec une vraie balise, puis rappeler le plan à la fin de chaque grande partie : ces quatre gestes tiennent debout quel que soit le contenu de chaque partie, parce qu’ils structurent la durée entière, jamais le contenu lui-même. EN: Announce the whole plan, hold its order, signal each passage with a real marker, then recall the plan at the end of each major part: these four moves hold regardless of each part’s content, because they structure the whole length, never the content itself."),
    table('sheet-charpente-table', 'La charpente, deux fois', ['Geste', 'Exemple 1 (la hêtraie)', 'Exemple 2 (le belvédère)'], [
      ['annoncer', 'nous verrons trois choses : la tourbière, la hêtraie, le belvédère', 'nous verrons deux choses : l’érosion, puis la vue sur la vallée'],
      ['tenir', 'la tourbière d’abord, puisqu’elle explique tout le reste', 'l’érosion d’abord, puisqu’elle explique le déplacement du sentier'],
      ['signaler', 'venons-en à présent à la hêtraie, notre deuxième étape', 'venons-en à présent à la vue sur la vallée, notre dernier arrêt'],
      ['rappeler', 'nous venons de voir la tourbière ; il nous reste la hêtraie, puis le belvédère', 'nous venons de voir l’érosion ; il nous reste la vue d’ensemble'],
    ]),
  ]),
  sheet('sheet-tenir', 'Tenir la distance', ['trois conditions', 'reprise réelle contre dérive'], [
    teach('sheet-tenir-teach', 'Trois conditions, pas la grammaire seule',
      "Un discours long tient debout s’il reste dans le plan annoncé, referme chaque aparté par une reprise nommée, et se termine par une vraie clôture, rebouclée sur ce plan. Un discours peut être grammaticalement parfait et pourtant perdre son architecture en chemin, s’il manque une seule de ces trois conditions. EN: A long discourse holds up if it stays in the announced plan, closes every aside with a named reprise, and ends with a real closing looped back onto that plan; a grammatically perfect discourse can still lose its architecture if it misses even one of these three."),
    table('sheet-tenir-table', 'Reprise réelle ou dérive', ['Trait', 'Reprise réelle', 'Dérive'], [
      ['après l’aparté', 'nomme le point exact du plan', 'ne nomme jamais rien'],
      ['la direction', 'avance vers une phrase qui tient', 'tourne en rond'],
      ['la durée', 'une ou deux phrases suffisent', 's’étire sans jamais reboucler'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Ton discours, du début à la fin',
    opener: {
      line: 'Un nouveau sentier ouvre au public ce week-end, et c’est toi qui portes la visite : ici tu parles seul, sans texte préparé, du premier mot au dernier. EN: A new trail opens to the public this weekend, and it is you who carries the walk: here you speak alone, with no prepared text, from the first word to the last.',
      imageRef: 'lessons/c2-09-discours-long/act08.jpg',
    },
    sections: [],
    milestone: 'Tu portes un discours long, seul, avec une charpente annoncée, des balises posées, une reprise qui garde le plan, et une vraie clôture. EN: You can carry a long discourse, alone, with an announced architecture, markers placed, a reprise that keeps the plan, and a real closing.',
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c2-09-[a-z0-9-]+/g) ?? [])];
const REC_DESC: Record<string, string> = {};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C2 · LEÇON 09',
  intro: "La leçon 9 du C1 taught you to hold a turn-based exposé before a jury, carried by its own follow-ups. La leçon 8 du C2 taught you to answer an unplanned question in a few sentences, with no preparation time. This lesson removes what each assumed: the turns c1.09 had, and the short length c2.08 had. Eight acts build the toolkit, from a deliberate marker that signals a real passage, through a four-move macro-architecture, a reprise that returns to the plan by name after an aside, and the difference between a genuine return and a drift that never actually names where the plan stands, ending with a fresh guided walk you carry alone, three to five minutes, from the first word to the last.",
  skill: 'PO',
  grammarAssumed: ['c1.09', 'c2.08'],
  grammarIntroduced: [
    'Deliberate signposting markers (venons-en maintenant à, cela m’amène à, pour résumer avant de poursuivre) that signal a real passage from one part to the next, against strings of fillers that announce none',
    'A four-move macro-architecture for a long spoken turn: announce the whole plan, hold its announced order, signal every passage, and recall the plan at the end of each major part',
    'A reprise that returns to the announced plan by name after an aside, in a single move (je referme cette parenthèse, pour revenir à notre fil conducteur, je reprends ici le plan annoncé), against restarting the whole turn from zero or over-apologising, both of which erase minutes already held',
    'Judging a full long excerpt by whether it holds its architecture across its whole length, staying on the announced plan, closing every aside, and reaching a real closing loop, rather than by grammatical correctness alone',
    'Distinguishing a genuine return to the plan from a drift that has actually lost its architecture, when both share the same surface hesitation markers',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "La leçon 9 du C1 t’a appris à tenir un exposé structuré devant un jury, porté par ses propres relances. La leçon 8 du C2 t’a appris à répondre à une question imprévue en quelques phrases, sans préparation. Cette leçon retire ce que chacune supposait : les relances de la leçon 9 du C1, et la courte durée de la leçon 8 du C2. Huit actes construisent l’outillage, d’une balise qui signale un vrai passage jusqu’à la différence entre une vraie reprise et une dérive qui ne nomme jamais où le plan en est, et se terminent par une nouvelle visite guidée que tu portes seul, trois à cinq minutes, du premier mot au dernier.",
    minutes: 140,
    difficulty: 5,
    glyph: 'map',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: DISCOURS_LONG_TERMS,
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
