// b2.15.l1 « Cause et conséquence »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.12 gérondif and b2.07
// futur antérieur), under the B2 rules of B2-BUILD-LOG.md (form, meaning,
// choice, text).
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema now, so the lesson validates with it in place (as b2.12 does).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act (B2): meet (scene, story, reading or listening), name
//   (cardDeck, tapTable, examples), build (groupDrill, gated), choose (a
//   drill where what the speaker ASSUMES picks the link), trap (trapDrill
//   stepped or commonErrors), then from act 3 on the relations INSIDE A TEXT
//   of 60 to 120 words (complete, rewrite or judge), then the gated act check.
//
//    1  Au-delà de parce que          6   meet the shades: the scene's bridge
//                                          (serait dû against parce que), a
//                                          news analysis, the reframe
//    2  La cause admise               7   étant donné que, vu que, du fait que
//                                          (+ noun forms) beside parce que,
//                                          car, puisque, comme (lessons 30 and
//                                          31 in B1)
//    3  La raison qui pèse            7   dans la mesure où, d'autant plus
//                                          que, d'autant que, d'autant plus +
//                                          adjectif + que; the false lead
//    4  La cause qu'on conteste       7   sous prétexte que / de; non que and
//                                          ce n'est pas que + subjonctif;
//                                          ce n'est pas parce que... que
//    5  La cause dans un nom          8   à cause de, grâce à, en raison de,
//                                          par + nom, à force de, faute de,
//                                          sous l'effet de; suite à (lesson 10
//                                          in B2's ruling)
//    6  La cause dans le verbe        7   être dû à (accord), s'expliquer par,
//                                          provenir de, tenir à, venir de
//    7  La conséquence, en connecteur 7   en conséquence, de ce fait, d'où +
//                                          nom, aussi + inversion, du coup;
//                                          the register ladder; no donc x 4
//    8  Le résultat ou le but         7   si bien que / de sorte que +
//                                          indicatif against de sorte que /
//                                          de façon que + subjonctif
//    9  L'intensité                   7   tant, tant de, au point que / de, à
//                                          tel point que, tel que, trop /
//                                          assez... pour que + subjonctif
//   10  La conséquence dans le verbe  7   provoquer, entraîner, causer,
//                                          susciter, aboutir à
//   11  Doser la certitude            7   sans doute, il semble que, tout
//                                          porte à croire que, the journalistic
//                                          conditionnel, selon / d'après
//   12  Ton analyse                   11  model, plan, role play, TASK, quiz
//
//   TOTAL 88 missions, 12 acts. Corpus: 189 authored rows (.1800-.1991) in
//   twelve blocks plus 33 reused seed rows, released act by act through
//   `deckTranche`. Quiz: 12 rounds of 8 (one per act 2 to 11, a recycling
//   round citing lessons 8, 15, 21, 30 and 31 in B1 and 6, 10, 12 and 23 in
//   B2, and an exam-format round). Act 1 has no round of its own: its
//   reframe is what the exam round tests. Chapter artwork:
//   `cause-consequence-image-prompts.md`, twelve prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (a later lesson may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Parce que et donc posent le lien ; les autres le nuancent. »
//   EN: Parce que and donc lay the link down; the others shade it.
//
//   ONE METAPHOR, LE NUANCIER: parce que and donc are the plain colour, right
//   everywhere and silent about everything but the link; every other link is
//   a shade that says one thing more (admitted, shared, reinforced, doubted,
//   rejected, a lack, a repetition, a result or an aim, an intensity, a
//   reaction, only probable). It does NOT say « avoid parce que »: act 2
//   keeps parce que as the only answer to pourquoi. Rejected candidates and
//   why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    cause graded by what the speaker assumes (admitted, reinforced,
//           doubted, rejected), cause by preposition and by verb, consequence
//           by connector, by mood (result or purpose), by intensity and by
//           verb, grading the certainty of a causal claim, register, and the
//           paragraph that does not repeat parce que and donc.
//   QUOTES  the reframes of lessons 8, 15, 21, 30 and 31 in B1 and 6, 10, 12
//           and 23 in B2, re-exported from their corpus files; rows of
//           lessons 8, 15, 21, 30, 31 and 37 in B1 and 6, 22 and 23 in B2
//           reused BY ID.
//   LEAVES  purpose on its own (pour, afin de, pour que against the
//           infinitive) to a later lesson, named without a number because
//           its trail position is not occupied in this publish (act 8, sheet,
//           roundup); concession (bien que, même si, malgré) to lesson 16 in
//           B2, same publish; the gérondif of cause to lesson 12 in B2 (one
//           recycling question). Lesson 10 in B2's rows are drafts and are
//           cited in words, not reused by id.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   B2: natural French, not simplified; English still authored on every
//   learner string (an `en` field or a final `EN: `), never on an answer.
//   tu in every instruction; characters use what the situation needs.
//   Every `say` is French. No spaced « ? » or « ! » in any scene or story
//   bubble. The scenario uses ’ only and embeds no corpus row. Other lessons
//   cited by trail position in words, never by raw id. Mission answer slots
//   are spread by `spreadMissions()`, the quiz by `spreadSlots()` (no text
//   changes, no `why` names a position), as b2.12 does. No ungrammatical
//   sentence is ever a corpus row (corpus §A.7). Every case is invented and
//   marked as an example (corpus §A.8). « Suite à » keeps lesson 10 in B2's
//   ruling: widespread, accepted, criticised by usage guides.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. TWELVE acts and TWELVE quiz rounds (96 questions), with no round for
//      act 1 (as lesson 10 in B2). The exam-format round's trigger is act
//      1's « one link everywhere » failure.
//   2. « IL SEMBLE QUE » is taught with the subjunctive (lesson 15 in B1's
//      rule); the indicative after it, which good writers also use for a
//      near-certainty, is never marked wrong and never tested either way
//      (pre-review: quiz round 11's type-in now accepts « sont partis »,
//      round 12's distractor is the infinitive, not « connaît »).
//   3. « SANS DOUTE » in front of a written sentence takes inversion (lesson
//      21 in B1); act 11 marks « Sans doute le retard est dû… » as an error
//      and « Le retard est sans doute dû… » as the fix. Keep?
//   4. REGISTER is taught as fit, not error: « vu que » and « du coup » are
//      never marked wrong in speech; « du coup » in a written analysis costs
//      one registre point in the task.
//   5. THE TASK: an analysis of a social phenomenon, 200 to 250 words, FIVE
//      criteria (tâche 3, cohérence 3, étendue 2, correction 2, registre 2
//      = 12), as lessons 7 and 12 in B2. The learner chooses between two
//      phenomena. Annotation block inside `modelAnswer`.
//   6. `Lesson.version` is 1 (a new lesson). 'coach-fr-FR' is inert; kept.
//   7. « LE RETARD EST À CAUSE DE LA NEIGE » is taught as an error (act 6,
//      quiz rounds 6 and 13), with être dû à / s'expliquer par as the fix.
//      It is common in speech; « c'est à cause de la neige » is never
//      marked. Keep the strict line for written French?
//   8. « AUSSI » + inversion (act 7) and « sans doute » + inversion (act 11)
//      are required only in careful writing; « Sans doute que… » is
//      accepted as an alternative answer, never taught.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  LECTURE_MEDIATHEQUE, LECTURE_RAPPORT, LECTURE_MODELE,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10, TEXTE_A11,
  B108_REFRAME, B108_REFRAME_EN, B115_REFRAME, B115_REFRAME_EN, B121_REFRAME, B121_REFRAME_EN,
  B130_REFRAME, B130_REFRAME_EN, B131_REFRAME, B131_REFRAME_EN, B206_REFRAME, B206_REFRAME_EN,
  B210_REFRAME, B210_REFRAME_EN, B212_REFRAME, B212_REFRAME_EN, B223_REFRAME, B223_REFRAME_EN,
  COND_UNIT, SUBJ_DECL_UNIT, COORD_UNIT, SUBORD_UNIT, MODES_UNIT, NOMIN_UNIT,
  COND_REF, SUBJ_DECL_REF, INVERSION_REF, COORD_REF, SUBORD_REF, MODES_REF, NOMIN_REF,
  GERONDIF_REF, CONCESSION_B2_REF, ARGU_REF, LATER_REF,
} from './cause-consequence-corpus.ts';
import { CAUSE_CONSEQUENCE_TERMS } from './cause-consequence-terms.ts';

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
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));
const OWN = new Set(ALL_ROWS.map((r) => r.id));
const CL = (n: number) => `fr.b1.connecteurs-logiques.${n}`;

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b2.15: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.15: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.15: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
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

/** THE « IN A TEXT » BEAT that closes acts 3 to 11: one paragraph of 60 to
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
 *  ACT 1: AU-DELÀ DE PARCE QUE
 *
 *  Meet the shades. The scene's wrong option states an unconfirmed cause as
 *  a fact with parce que; the right one reports it (serait due à). NO « ? »
 *  OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const PONT_PARCE_QUE = {
  fr: 'Le vieux pont est fermé parce que sa structure est dangereuse.',
  ipa: '/lə vjø pɔ̃ ɛ fɛʁ.me paʁs kə sa stʁyk.tyʁ ɛ dɑ̃ʒ.ʁøz/',
  respell: '[luh vyuh POHⁿ eh fehr-MAY | pars kuh sa strük-TÜR | eh dahⁿzh-RUHZ]',
  en: 'The old bridge is closed because its structure is dangerous.',
};

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'La phrase pour le site',
  frSub: 'Un pont fermé, une cause pas encore confirmée',
  setting: { place: 'La rédaction d’un hebdomadaire local', city: 'Sherbrooke', time: 'mardi, 16 h 45', ambience: 'des écrans, un téléphone qui sonne, la pluie sur les vitres' },
  beats: [
    {
      kind: 'narration',
      text: "Sherbrooke, la rédaction d'un hebdomadaire local (un cas inventé). Tu es stagiaire. Le vieux pont du centre-ville vient d'être fermé, et Nathalie, la rédactrice en chef, veut une phrase pour le site avant 17 heures.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Nathalie',
      fr: "La ville parle de fissures, mais les ingénieurs n'ont encore rien confirmé. Écris-moi une phrase prudente.",
      en: 'The city is talking about cracks, but the engineers have not confirmed anything yet. Write me a careful sentence.',
      respell: '[la VEEL parl duh fee-SÜR | meh lay-zehⁿ-zhay-NYUHR | nohⁿ-tahⁿ-kor ryehⁿ kohⁿ-feer-MAY | ay-kree-MWA ün fraz prü-DAHⁿT]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "D'accord. Je l'écris tout de suite.",
      en: 'All right. I will write it straight away.',
      respell: '[da-KOR | zhuh lay-kree toot-SWEET]',
      stage: 'Tu as trois minutes, et deux versions en tête.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: 'Des centaines de personnes vont lire ta phrase ce soir, et certaines vont la partager sans lire la suite.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Quelle phrase donne la cause sans l’affirmer trop tôt.',
      size: 'lg',
      options: [
        { fr: PONT_PARCE_QUE.fr, respell: PONT_PARCE_QUE.respell, en: PONT_PARCE_QUE.en, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1800)), respell: rsOf(E(1800)), en: en(E(1800)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Nathalie publie ta phrase. Le lendemain, les ingénieurs confirment les fissures : ton journal n’avait rien affirmé trop tôt, et il n’a rien à corriger.',
        breaks: 'Nathalie publie. Le lendemain, la ville précise que le pont n’est pas dangereux : on vérifie seulement des fissures. Ton journal doit publier un rectificatif.',
      },
    },
    {
      kind: 'break',
      heading: 'Parce que a tout affirmé',
      body: "Parce que et donc posent le lien ; les autres le nuancent. Ta phrase donnait la cause comme un fait prouvé. « Serait due à » donne la même cause, mais comme une information rapportée. EN: Parce que stated the cause as proven; serait due à reports it.",
      wrong: { fr: PONT_PARCE_QUE.fr, ipa: PONT_PARCE_QUE.ipa, respell: PONT_PARCE_QUE.respell, en: PONT_PARCE_QUE.en },
      right: { fr: fr(E(1800)), ipa: ipaOf(E(1800)), respell: rsOf(E(1800)), en: en(E(1800)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Parce que n'est pas faux : il est seulement muet sur ce que tu sais. Cette leçon t'apprend à dire une cause admise, renforcée, contestée ou probable, et à varier les conséquences, du résultat au but, de l'intensité au verbe.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['lien', 'certitude'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Dire ce que tu sais d’une cause', s: 'Actes 2 à 4 : admise, renforcée, mise en doute, écartée' },
    { t: 'Mettre la cause dans un nom ou un verbe', s: 'Actes 5 et 6 : faute de, à force de, être dû à, provenir de' },
    { t: 'Varier les conséquences', s: 'Actes 7 à 10 : d’où, de sorte que, au point que, entraîner' },
    { t: 'Doser la certitude, puis écrire', s: 'Actes 11 et 12 : sans doute, le conditionnel, ton analyse' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La médiathèque des Tilleuls',
  frSub: 'Une analyse (cas inventé) : cherche comment chaque cause est dite',
  text: LECTURE_MEDIATHEQUE,
  glossary: [
    { word: 'désemplit', en: 'empties', note: 'Ne désemplit plus : il y a toujours du monde.' },
    { word: 'affluence', en: 'crowds', note: 'Le grand nombre de personnes au même endroit.' },
    { word: 'usagers', en: 'users', note: 'Les personnes qui utilisent un service public.' },
  ],
  questions: [
    { q: 'Global : à quoi sert ce texte ?', a: "À expliquer pourquoi une médiathèque attire soudain beaucoup de monde, puis à montrer les conséquences de ce succès." },
    { q: 'Détail : quelles raisons l’auteur donne-t-il comme des faits établis ?', a: "La gratuité et le wifi (étant donné que), l'ouverture le dimanche (s'explique par). Personne ne les discute." },
    { q: 'La mairie et la directrice sont-elles d’accord sur la cause ?', a: "Non. La mairie avance l'horaire, au conditionnel (serait due) ; la directrice écarte la lecture (ce n'est pas que) et donne une autre raison : le calme." },
    { q: 'Inférence : l’auteur croit-il que certains habitués viennent vraiment lire le journal ?', a: "Non : sous prétexte de lire dit que c'est la raison qu'ils donnent, pas la vraie." },
    { q: 'Détail : quelles conséquences l’affluence a-t-elle eues ?', a: "Des lecteurs dans l'escalier (faute de place), une salle de silence (tellement… que), une charte (d'où), et une extension (à force de, si bien que)." },
    { q: 'Position : l’auteur est-il sûr que le lieu a trouvé son public ?', a: "Presque : sans doute veut dire probablement, et la dernière phrase laisse une question ouverte." },
  ],
  audio: REC('rec-b2-15-mediatheque'),
  say: REFRAME,
  terms: ['lien', 'certitude'],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Repère ce que chaque lien ajoute',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('La cause, nuancée', [
      it(E(1801), 'un fait établi'),
      it(E(1802), 'une raison de plus'),
      it(E(1803), 'un manque'),
      it(E(1804), 'un verbe qui explique'),
    ], chk('Ces quatre phrases disent surtout…',
      ['pourquoi quelque chose arrive', 'ce qui arrive ensuite', 'ce qu’on veut obtenir'], 0,
      'Toutes donnent une cause, chacune avec une nuance. EN: all four give a cause.')),
    grp('La conséquence, nuancée', [
      it(E(1805), 'un verbe d’effet'),
      it(E(1806), 'une intensité qui produit un effet'),
      it(E(1810), 'd’où, puis un nom'),
      it(CL(1302), 'par conséquent, de la leçon 31 du B1'),
    ], chk('Dans « d’où la nouvelle charte », que suit d’où ?',
      ['un nom', 'un verbe conjugué'], 0,
      'D’où la charte : un nom, pas de verbe. EN: a noun.')),
    ctl('Le degré', '« Selon la mairie, ce succès serait dû au nouvel horaire. » La cause est…',
      ['annoncée, pas confirmée', 'certaine', 'refusée par l’auteur'], 0,
      'Le conditionnel rapporte une information sans la garantir. EN: reported, not confirmed.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lien', 'consequence'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où le mauvais lien coûte cher',
  cases: [
    { situation: 'Tu annonces une nouvelle non confirmée', fr: fr(E(1800)), en: en(E(1800)) },
    { situation: 'Tu rapportes une excuse sans y croire', fr: fr(E(1809)), en: en(E(1809)) },
    { situation: 'Tu corriges une explication trop rapide', fr: fr(E(1808)), en: en(E(1808)) },
    { situation: 'Tu poses un fait dans un courriel de travail', fr: fr(E(1801)), en: en(E(1801)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lien'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le lien nu', 'Parce que et donc…',
    ['disent le lien, sans nuance', 'sont à éviter à l’écrit', 'ne s’emploient qu’à l’oral'], 0,
    'Ils sont justes partout ; ils ne disent simplement rien de plus. EN: correct, but plain.'),
  ctl('La nuance', '« Il a quitté la réunion sous prétexte qu’il avait un train. » Celui qui parle…',
    ['doute de cette raison', 'confirme cette raison'], 0,
    'Sous prétexte que : la raison donnée, pas forcément la vraie. EN: he doubts it.'),
  ctl('La certitude', '« Le pont serait fermé à cause de fissures. » L’information est…',
    ['rapportée, pas vérifiée', 'certaine'], 0,
    'Le conditionnel des médias. EN: reported.'),
], ['lien']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Au-delà de parce que',
    opener: {
      line: "Un pont fermé, une cause qu'on ne peut pas encore affirmer : ici tu découvres les liens qui disent ce que tu sais vraiment. EN: A closed bridge and a cause you cannot state yet: here you meet the links that say what you really know.",
      imageRef: 'lessons/cause-consequence/act01.jpg',
    },
    sections: [],
    milestone: "Tu repères dans un texte ce que chaque lien ajoute à parce que ou à donc : un fait admis, un doute, un manque, une intensité. EN: You can spot what each link adds to parce que or donc.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: LA CAUSE ADMISE
 *
 *  Recall lessons 30 and 31 in B1 in one card each, then go past them:
 *  étant donné que, vu que, du fait que PRODUCED (B1 only recognised them),
 *  their noun forms, and parce que as the only answer to pourquoi.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu sais déjà, et un pas de plus',
  frSub: 'Du B1 au B2',
  hint: 'Quatre cartes. Les deux premières sont des rappels.',
  audio: REC('rec-b2-15-rappel'),
  say: REFRAME,
  terms: ['lien', 'admise'],
  cards: [
    {
      head: 'Donc, car', label: Cap(COORD_REF),
      fr: fr(CL(1024)), sub: rsOf(CL(1024)),
      body: `« ${B130_REFRAME} » Donc tire la suite, car ajoute une explication après coup, surtout à l'écrit. EN: ${B130_REFRAME_EN}`,
    },
    {
      head: 'Parce que, puisque, comme', label: Cap(SUBORD_REF),
      fr: fr(CL(1231)), sub: rsOf(CL(1231)),
      body: `« ${B131_REFRAME} » Parce que répond à pourquoi, puisque rappelle une cause connue, comme la pose en tête. EN: ${B131_REFRAME_EN}`,
    },
    {
      head: 'Plus loin : la cause admise', label: 'étant donné que',
      fr: fr(E(1812)), sub: rsOf(E(1812)),
      body: "Étant donné que pose un fait que personne ne discute, puis en tire la suite. Au B1, tu l'as reconnu ; ici, tu l'emploies. EN: a cause taken as given, now yours to use.",
    },
    {
      head: 'Trois tenues', label: 'vu que, du fait que',
      fr: 'vu que · étant donné que · du fait que',
      sub: '[vü KUH] · [ay-tahⁿ do-nay KUH] · [dü feh KUH]',
      body: "Même sens, trois registres : vu que se dit surtout à l'oral, étant donné que va partout à l'écrit, du fait que appartient aux rapports. EN: same meaning, three registers.",
    },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-cause',
  title: 'Six liens de cause, six suppositions',
  cols: ['Lien', 'Ce que tu supposes', 'Registre'],
  rows: [
    { cells: ['parce que', 'rien : tu apportes la cause', 'courant'], say: fr(E(1821)),
      detail: { title: 'parce que', body: "La seule réponse à pourquoi. Il apporte une cause que l'autre ne connaît pas forcément. EN: the only answer to pourquoi.", say: fr(E(1852)) } },
    { cells: ['car', 'une explication ajoutée', 'écrit'], say: fr(CL(1221)),
      detail: { title: 'car', body: `Car vient après la phrase principale, jamais en tête ; c'est ${COORD_REF} qui l'enseigne. EN: after the main clause, never first.`, say: fr(CL(1221)) } },
    { cells: ['puisque', 'l’autre connaît déjà la cause', 'courant'], say: fr(E(1827)),
      detail: { title: 'puisque', body: "Tu rappelles une évidence. Devant une question, il sonne comme un reproche. EN: a cause both people know; often a reproach.", say: fr(E(1815)) } },
    { cells: ['comme', 'la cause pose le décor', 'courant'], say: fr(E(1822)),
      detail: { title: 'comme', body: "Comme de cause se met en tête de phrase : la cause d'abord, la suite ensuite. EN: causal comme comes first.", say: fr(CL(1205)) } },
    { cells: ['étant donné que', 'un fait établi', 'soutenu'], say: fr(E(1812)),
      detail: { title: 'étant donné que', body: "Un fait que personne ne discute, suivi de sa conséquence. Devant un nom, sans que : étant donné l'heure. EN: an established fact; no que before a noun.", say: fr(E(1826)) } },
    { cells: ['vu que', 'un fait évident', 'courant, oral'], say: fr(E(1825)),
      detail: { title: 'vu que, du fait que', body: "Vu que : le même sens qu'étant donné que, plus familier. Du fait que : la même chose dans un rapport. EN: same meaning, casual or formal.", say: fr(E(1814)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['admise', 'registre'],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Poser une cause admise',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Un fait que personne ne discute', [
      it(E(1812), 'le budget, un fait établi'),
      it(E(1814), 'le contrat, dans un rapport'),
      it(E(1824), 'trois langues, un fait connu'),
      it(E(1826), 'le nombre de personnes'),
    ], chk('Ces quatre phrases posent une cause…',
      ['admise, avant la suite', 'nouvelle, en réponse à pourquoi'], 0,
      'Un fait établi, puis ce qu’on en tire. EN: a given, then the consequence.')),
    grp('Devant un nom', [
      it(E(1816), 'étant donné + nom'),
      it(E(1817), 'du fait de + nom'),
      it(E(1818), 'vu + nom'),
    ], chk('« … l’heure, nous allons nous arrêter là. »',
      ['Étant donné', 'Étant donné que'], 0,
      'Devant un nom, pas de que. EN: no que before a noun.')),
    ctl('Répondre à pourquoi', '« Pourquoi pars-tu si tôt ? » Quelle réponse va ?',
      ['Parce que j’ai un train.', 'Puisque j’ai un train.', 'Étant donné que j’ai un train.'], 0,
      'Seul parce que répond à pourquoi : puisque et étant donné que supposent une cause déjà connue. EN: only parce que answers pourquoi.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['admise'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La cause admise à l’oreille',
  frSub: 'Huit phrases, huit causes connues',
  lines: [
    ln(E(1812)), ln(E(1813)), ln(E(1814)), ln(E(1815)),
    ln(E(1822)), ln(E(1824)), ln(E(1825)), ln(E(1826)),
  ],
  questions: [
    { q: 'Première phrase : que fait-on des ordinateurs ?', opts: ['on reporte leur achat', 'on les achète tout de suite'], correct: 0, why: 'Le budget est serré : l’achat attend. EN: the purchase is postponed.' },
    { q: 'Troisième phrase : pourquoi la commande est-elle suspendue ?', opts: ['le contrat n’a pas été signé', 'le client a annulé'], correct: 0, why: 'Du fait que le contrat n’a pas été signé. EN: the unsigned contract.' },
    { q: 'Quatrième phrase : la personne fait-elle un reproche ?', opts: ['oui : tu savais, et tu n’as rien dit', 'non, elle remercie'], correct: 0, why: 'Puisque, puis une question : un reproche. EN: yes, a reproach.' },
    { q: 'Sixième phrase : pourquoi a-t-il été choisi ?', opts: ['il parle trois langues', 'il connaît le directeur'], correct: 0, why: 'Du fait qu’il parle trois langues. EN: his languages.' },
    { q: 'Dernière phrase : combien de salles y aura-t-il ?', opts: ['deux', 'une', 'trois'], correct: 0, why: 'Une deuxième salle s’ajoute à la première. EN: two.' },
  ],
  audio: REC('rec-b2-15-admise-ecoute'),
  say: REFRAME,
  terms: ['admise'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de cause admise',
  errors: [
    {
      wrong: 'Pourquoi es-tu en retard ? Puisque mon bus est tombé en panne.',
      right: fr(E(1821)),
      why: "Normal : puisque dit aussi la cause. Mais il suppose que l'autre la connaît déjà, donc il ne répond pas à pourquoi. EN: puisque cannot answer pourquoi.",
    },
    {
      wrong: "Étant donné que l'heure, nous allons nous arrêter là.",
      right: fr(E(1816)),
      why: "Normal : étant donné que existe bien. Mais devant un nom, on enlève que : étant donné l'heure. EN: no que before a noun.",
    },
    {
      wrong: 'Du fait que la grève, les cours sont suspendus.',
      right: fr(E(1817)),
      why: "Normal : du fait que ouvre une phrase. Devant un nom, c'est du fait de : du fait de la grève. EN: du fait de before a noun.",
    },
    {
      wrong: 'Nous nous sommes installés au café, comme la salle était réservée.',
      right: fr(E(1822)),
      why: "Normal : parce que peut suivre la principale. Comme de cause, lui, se met en tête ; après, on le lirait comme une comparaison. EN: causal comme goes first.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['admise'],
};

const A2_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a2-flash',
  layer: 'core',
  title: 'Huit liens à avoir en bouche',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'given that (formal)', back: 'étant donné que', say: fr(E(1812)) },
    { front: 'seeing as (everyday)', back: 'vu que', say: fr(E(1813)) },
    { front: 'due to the fact that', back: 'du fait que', say: fr(E(1824)) },
    { front: 'since (you know it)', back: 'puisque', say: fr(E(1827)) },
    { front: 'given the time', back: 'étant donné l’heure', say: fr(E(1816)) },
    { front: 'because of the strike (formal)', back: 'du fait de la grève', say: fr(E(1817)) },
    { front: 'given the weather', back: 'vu la météo', say: fr(E(1818)) },
    { front: 'as (at the start)', back: 'comme', say: fr(E(1822)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['admise', 'registre'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Pourquoi', 'Quel lien peut répondre à la question pourquoi ?',
    ['parce que', 'puisque', 'étant donné que'], 0,
    'Parce que seul : les autres supposent une cause déjà connue. EN: parce que.'),
  ctl('Le nom', '« … la météo, on reste à l’intérieur. »',
    ['Vu', 'Vu que'], 0,
    'Devant un nom, vu sans que. EN: vu before a noun.'),
  ctl('Le registre', 'Dans un rapport, pour un fait établi, tu écris plutôt…',
    ['du fait que', 'vu que'], 0,
    'Du fait que, soutenu ; vu que, plus oral. EN: du fait que in a report.'),
], ['admise']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La cause admise',
    opener: {
      line: "Un budget serré, un contrat pas signé : ici tu poses une cause que personne ne discute, avant d'en tirer la suite. EN: A tight budget, an unsigned contract: here you lay down a cause nobody disputes before drawing the consequence.",
      imageRef: 'lessons/cause-consequence/act02.jpg',
    },
    sections: [],
    milestone: "Tu emploies étant donné que, vu que et du fait que selon le registre, devant une phrase ou un nom, et tu gardes parce que pour répondre à pourquoi. EN: You can state an admitted cause in the right register.",
    estScreens: 38, restPoints: ['a2-table', 'a2-ecoute'],
  },
  sections: [A2_RAPPEL, A2_TABLE, A2_CONSTRUIRE, A2_ECOUTE, A2_ERREURS, A2_FLASH, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: LA RAISON QUI PÈSE
 *
 *  dans la mesure où (a cause within a limit), d'autant plus que / d'autant
 *  que (a reason that adds weight), d'autant plus + adjectif + que; the
 *  false lead dans la mesure du possible.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'Les notes d’Aline',
  frSub: 'Une intervention à préparer',
  setting: 'Lausanne. Aline, déléguée du personnel, prépare son intervention contre le nouveau plan d’horaires de son entreprise. Son collègue Marc relit ses notes avec elle.',
  bubbles: [
    { from: 'narrator', fr: 'Aline lit ses notes à voix haute ; Marc écoute surtout les liens.', en: 'Aline reads her notes aloud; Marc listens mostly to the links.' },
    { from: 'user', fr: fr(E(1835)), en: en(E(1835)) },
    { from: 'coach', fr: 'Dans la mesure où : la cause justifie le refus, et dans cette limite seulement.', en: 'Dans la mesure où: the cause justifies the refusal, and only within that limit.', warn: 'Une cause, dans une limite' },
    { from: 'user', fr: "Le plan nous inquiète, d'autant plus que personne ne nous a consultés.", en: 'The plan worries us, all the more so since nobody consulted us.' },
    { from: 'coach', fr: "D'autant plus que ajoute une raison, et elle pèse plus lourd que la première.", en: "D'autant plus que adds a reason, and it weighs more than the first.", warn: 'Une raison de plus' },
    { from: 'user', fr: fr(E(1832)), en: en(E(1832)) },
    { from: 'coach', fr: "D'autant plus, l'adjectif, puis que : la raison renforce le mot surprenante.", en: "D'autant plus, the adjective, then que: the reason strengthens the word surprising.", warn: 'Autour d’un adjectif' },
    { from: 'user', fr: 'Nous demandons, dans la mesure du possible, une réponse avant vendredi.', en: 'We ask, as far as possible, for an answer before Friday.' },
    { from: 'coach', fr: 'Attention : dans la mesure du possible ne dit aucune cause. Il veut dire autant que possible.', en: 'Careful: dans la mesure du possible states no cause. It means as far as possible.', warn: 'Le faux ami' },
  ],
  closing: { fr: 'Une cause dans une limite, une raison de plus, et un faux ami à laisser de côté.', en: 'A cause within a limit, one more reason, and a false friend to leave aside.' },
  audio: REC('rec-b2-15-aline'),
  say: REFRAME,
  terms: ['renfort'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-cause',
  title: 'Une limite, un poids de plus',
  frSub: 'Dans la mesure où, d’autant plus que',
  hint: 'Quatre cartes. La dernière est un faux ami.',
  audio: REC('rec-b2-15-renfort'),
  say: REFRAME,
  terms: ['renfort'],
  cards: [
    {
      head: 'Une cause, jusqu’à un point', label: 'dans la mesure où',
      fr: fr(E(1830)), sub: rsOf(E(1830)),
      body: "La cause justifie la suite, mais dans une limite : tant que le budget reste bas. Registre soutenu, fréquent dans les rapports et les débats. EN: a cause that holds up to a point.",
    },
    {
      head: 'Une raison de plus', label: 'd’autant plus que',
      fr: fr(E(1831)), sub: rsOf(E(1831)),
      body: "La première partie suffisait déjà ; d'autant plus que ajoute une raison plus forte. Il suit toujours ce qu'il renforce, jamais en tête de phrase. EN: an extra, stronger reason, never first.",
    },
    {
      head: 'Autour d’un adjectif', label: 'd’autant plus… que',
      fr: fr(E(1832)), sub: rsOf(E(1832)),
      body: "D'autant plus + adjectif + que : la raison renforce l'adjectif. Pas de parce que ensuite : que suffit. D'autant que, seul, est une variante soutenue. EN: the reason strengthens the adjective.",
    },
    {
      head: 'Le faux ami', label: 'dans la mesure du possible',
      fr: fr(E(1836)), sub: rsOf(E(1836)),
      body: "Devant un nom, dans la mesure de ne dit plus la cause : dans la mesure du possible veut dire autant que possible. EN: as far as possible, not a cause.",
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Peser la raison',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Une cause dans une limite', [
      it(E(1830), 'le budget : une limite'),
      it(E(1834), 'le cours déjà suivi'),
      it(E(1835), 'aucun emploi garanti'),
      it(E(1843), 'une formule de séance'),
    ], chk('« Dans la mesure où tu as déjà suivi ce cours, tu peux passer au niveau deux. » Même sens :',
      ['Puisque tu as déjà suivi ce cours…', 'Bien que tu aies déjà suivi ce cours…', 'Pour que tu suives ce cours…'], 0,
      'Une cause qui justifie la suite. EN: since, to that extent.')),
    grp('Une raison de plus', [
      it(E(1831), 'le projet, puis les emplois'),
      it(E(1837), 'partir tôt, puis la neige'),
      it(E(1841), 'réserver, puis les places'),
      it(E(1844), 'la sortie, puis la pluie qui s’arrête'),
    ], chk('« Il faut partir tôt, d’autant plus qu’on annonce de la neige. » La neige est…',
      ['une raison de plus de partir tôt', 'la seule raison de partir', 'une conséquence du départ'], 0,
      'Il fallait déjà partir tôt ; la neige ajoute une raison. EN: an extra reason.')),
    ctl('Autour de l’adjectif', '« C’est d’autant plus dommage … le spectacle était gratuit. »',
      ['que', 'parce que', 'car'], 0,
      'D’autant plus + adjectif + que, sans autre mot. EN: que alone.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['renfort'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Les tournures que la main abîme',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Où, que, et rien de plus',
    body: "Dans la mesure où, avec où. D'autant plus que en un bloc, sans parce que. Devant un nom, dans la mesure du possible ne dit plus la cause. EN: où, not que; d'autant plus que in one block.",
  },
  cards: [
    trap(E(1830), 'dans la mesure où', 'Dans la mesure que le budget a baissé, certains projets attendront.', 'Dans la mesure où, avec où. EN: où, not que.'),
    trap(E(1831), 'd’autant plus que', 'Le projet me plaît, d’autant plus parce qu’il crée des emplois ici.', 'D’autant plus que, en un bloc. EN: no parce que.'),
    trap(E(1832), 'l’adjectif', 'Cette décision est d’autant plus surprenante parce que personne n’avait été consulté.', 'D’autant plus + adjectif + que. EN: que, not parce que.'),
    trap(E(1837), 'le d’', 'Il faut partir tôt, autant plus qu’on annonce de la neige.', 'D’autant, avec d’. EN: d’autant.'),
    trap(E(1836), 'le faux ami', 'Dans la mesure où possible, réponds avant vendredi.', 'Devant un nom : dans la mesure du possible. EN: du possible.'),
    trap(E(1838), 'car', 'C’est d’autant plus dommage car le spectacle était gratuit.', 'D’autant plus… que, jamais car. EN: que, not car.'),
  ],
  drill: [
    { promptSay: 'Le projet me plaît, d’autant … qu’il crée des emplois.', opts: ['plus', 'autant'], correct: 0 },
    { promptSay: 'Dans la mesure … le budget a baissé, certains projets attendront.', opts: ['où', 'que'], correct: 0 },
    { promptSay: 'C’est d’autant plus dommage … le spectacle était gratuit.', opts: ['que', 'parce que'], correct: 0 },
    { promptSay: 'Dans la mesure … possible, réponds avant vendredi.', opts: ['du', 'où'], correct: 0 },
    { promptSay: 'Il faut réserver, … les places sont limitées.', opts: ['d’autant plus que', 'dans la mesure du possible'], correct: 0 },
    { promptSay: 'Je te crois, d’autant … tu n’as aucun intérêt à mentir.', opts: ['que', 'où'], correct: 0 },
    { promptSay: 'Nous refusons cette offre … elle ne garantit aucun emploi.', opts: ['dans la mesure où', 'dans la mesure du possible'], correct: 0 },
    { promptSay: 'Le retard est d’autant plus … que le client attendait depuis un mois.', opts: ['gênant', 'gêne'], correct: 0 },
  ],
  steps: STEPS('Où, que, et rien de plus', 'Ce que la main écrit trop vite'),
  audio: REC('rec-b2-15-piege-renfort'),
  say: REFRAME,
  terms: ['renfort'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Cinq phrases à imiter',
  frSub: 'Le poids en plus, dans le bon registre',
  examples: [
    ex(E(1842), 'd’autant plus + adjectif : gênant'),
    ex(E(1838), 'dommage, renforcé par la gratuité'),
    ex(E(1833), 'd’autant que : la variante soutenue'),
    ex(E(1843), 'une formule de séance, très soutenue'),
    ex(E(1836), 'le faux ami : autant que possible'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['renfort', 'registre'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Compléter : le message aux parents', TEXTE_A3, [
  { q: 'Blanc 1 : quel lien ouvre la phrase sur le budget ?', a: "Dans la mesure où : la baisse du budget justifie l'annulation. Étant donné que irait aussi ; d'autant plus que ne peut pas ouvrir une phrase." },
  { q: 'Blanc 2 : quel lien ajoute la vente de gâteaux ?', a: "D'autant plus (qu'ils avaient vendu…) : une raison de plus d'être déçus." },
  { q: 'Blanc 3 : complète « Elle est … difficile à accepter que… ».', a: "D'autant plus difficile à accepter que : d'autant plus + adjectif + que." },
  { q: 'Blanc 4 : que veut dire « dans la mesure où les finances le permettront » ?', a: "Si et autant que les finances le permettent : la sortie dépend du budget. Dans la mesure du possible dirait autre chose." },
], 'rec-b2-15-texte-a3', ['renfort']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La limite', 'Dans la mesure où dit…',
    ['une cause qui vaut jusqu’à un point', 'le but d’une action', 'une opposition'], 0,
    'Une cause, dans une limite. EN: a cause, up to a point.'),
  ctl('La raison de plus', '« Le projet me plaît, … il crée des emplois ici. »',
    ['d’autant plus qu’', 'dans la mesure du possible qu’'], 0,
    'Une raison qui renforce. EN: all the more so as.'),
  ctl('Le faux ami', 'Dans la mesure du possible veut dire…',
    ['autant que possible', 'parce que c’est possible'], 0,
    'Ce n’est pas une cause. EN: as far as possible.'),
], ['renfort']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'La raison qui pèse',
    opener: {
      line: "Une raison suffit, une deuxième emporte la décision : ici tu ajoutes du poids à une cause, ou tu la poses dans une limite. EN: One reason is enough, a second one settles it: here you add weight to a cause, or set it within a limit.",
      imageRef: 'lessons/cause-consequence/act03.jpg',
    },
    sections: [],
    milestone: "Tu emploies dans la mesure où pour une cause dans une limite, d'autant plus que pour une raison de plus, et tu ne confonds plus avec dans la mesure du possible. EN: You can weigh a cause and add a stronger reason.",
    estScreens: 36, restPoints: ['a3-construire', 'a3-piege'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_PIEGE, A3_EXEMPLES, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: LA CAUSE QU'ON CONTESTE
 *
 *  sous prétexte que + indicatif (a cause the speaker doubts), sous prétexte
 *  de + infinitive; non que / non pas que / ce n'est pas que + subjonctif,
 *  then the real cause in the indicative; ce n'est pas parce que... que (a
 *  rejected inference, indicative).
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Les raisons des locataires',
  frSub: 'Celles qu’on croit, celles qu’on écarte',
  setting: 'Liège. Fatou gère une résidence de quarante logements. En fin de journée, elle passe en revue les messages avec son assistant, Ibou, et dit ce qu’elle pense de chaque raison.',
  bubbles: [
    { from: 'narrator', fr: 'Trois messages, trois raisons : Fatou dit lesquelles elle croit.', en: 'Three messages, three reasons: Fatou says which ones she believes.' },
    { from: 'user', fr: fr(E(1858)), en: en(E(1858)) },
    { from: 'coach', fr: 'Sous prétexte que : c’est sa raison, mais je n’y crois pas. Le chauffage a été réparé lundi.', en: 'Sous prétexte que: that is his reason, but I do not believe it. The heating was repaired on Monday.', warn: 'Une cause mise en doute' },
    { from: 'user', fr: "Mme Roy a déménagé, non qu'elle soit mal logée, mais elle voulait un jardin.", en: 'Mrs Roy moved out, not that she was badly housed, but she wanted a garden.' },
    { from: 'coach', fr: 'Non que, au subjonctif : la mauvaise piste est écartée. Mais amène la vraie raison.', en: 'Non que, in the subjunctive: the wrong lead is set aside. Mais brings in the real reason.', warn: 'Non que + subjonctif' },
    { from: 'user', fr: 'Le nouveau technicien est jeune, alors certains pensent qu’il se trompe.', en: 'The new technician is young, so some people think he is wrong.' },
    { from: 'coach', fr: fr(E(1861)), en: en(E(1861)), warn: 'Un raisonnement refusé' },
    { from: 'user', fr: fr(E(1848)), en: en(E(1848)) },
    { from: 'coach', fr: 'Tu écartes une cause au subjonctif, puis tu donnes la vraie à l’indicatif. Très bien.', en: 'You set a cause aside in the subjunctive, then give the real one in the indicative. Very good.', warn: 'Écarter, puis corriger' },
  ],
  closing: { fr: 'Une raison dont on doute, une raison qu’on écarte, et la vraie qui suit.', en: 'A reason you doubt, a reason you set aside, and the real one that follows.' },
  audio: REC('rec-b2-15-fatou'),
  say: REFRAME,
  terms: ['contestee'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-cause',
  title: 'Douter, écarter, refuser',
  frSub: 'Quatre façons de contester une cause',
  hint: 'Quatre cartes. Regarde le mode après chaque lien.',
  audio: REC('rec-b2-15-contestee'),
  say: REFRAME,
  terms: ['contestee'],
  cards: [
    {
      head: 'La raison donnée', label: 'sous prétexte que',
      fr: fr(E(1846)), sub: rsOf(E(1846)),
      body: "Il a donné cette raison ; toi, tu n'y crois pas vraiment. L'indicatif suit, comme après parce que : tu rapportes la raison, même fausse. EN: the reason given, which you doubt.",
    },
    {
      head: 'Devant un infinitif', label: 'sous prétexte de',
      fr: fr(E(1853)), sub: rsOf(E(1853)),
      body: "Même sujet dans les deux parties : sous prétexte de + infinitif. C'est lui qui prépare, c'est lui qui part. EN: same subject, so the infinitive.",
    },
    {
      head: 'La cause écartée', label: 'ce n’est pas que',
      fr: fr(E(1848)), sub: rsOf(E(1848)),
      body: `Tu écartes une cause : le subjonctif, puisqu'elle n'est pas affirmée. « ${B206_REFRAME} » La vraie cause suit, à l'indicatif. EN: ${B206_REFRAME_EN}`,
    },
    {
      head: 'Le raisonnement refusé', label: 'ce n’est pas parce que… que',
      fr: fr(E(1861)), sub: rsOf(E(1861)),
      body: "Ici, tu refuses une conclusion : être jeune ne veut pas dire avoir tort. Ce n'est pas parce que garde l'indicatif. EN: you reject the inference; the indicative stays.",
    },
  ],
};

const A4_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-trier',
  layer: 'core',
  size: 'lg',
  title: 'Qui croit à la cause ?',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('La raison, mise en doute', [
      it(E(1846), 'trop de travail, dit-il'),
      it(E(1851), 'la pluie, disent-ils'),
      it(E(1853), 'la réunion à préparer, dit-il'),
      it(E(1858), 'le chauffage, dit le locataire'),
    ], chk('Dans ces phrases, celui qui parle…',
      ['doute de la raison donnée', 'confirme la raison donnée'], 0,
      'Sous prétexte : la raison donnée, pas forcément la vraie. EN: the speaker doubts it.')),
    grp('La cause écartée', [
      it(E(1847), 'pas mal logé : un jardin'),
      it(E(1849), 'pas timide : il ne connaît personne'),
      it(E(1850), 'pas mauvais : trop long'),
      it(E(1859), 'pas contre : besoin de réfléchir'),
    ], chk('Après non que et ce n’est pas que, le verbe est…',
      ['au subjonctif', 'à l’indicatif', 'au conditionnel'], 0,
      'La cause est écartée, pas affirmée : le subjonctif. EN: the subjunctive.')),
    ctl('Neutre ou pas', '« Ils ont annulé la sortie parce qu’il pleuvait. » Celui qui parle…',
      ['ne juge pas la raison', 'met la raison en doute'], 0,
      'Parce que rapporte la cause sans avis. EN: parce que takes no stance.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['contestee', 'lien'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Crue, écartée ou mise en doute',
  frSub: 'Neuf phrases, trois attitudes',
  lines: [
    ln(E(1846)), ln(E(1847)), ln(E(1848)), ln(E(1849)), ln(E(1851)),
    ln(E(1852)), ln(E(1857)), ln(E(1859)), ln(E(1861)),
  ],
  questions: [
    { q: 'Première phrase : quelle raison a-t-il donnée ?', opts: ['trop de travail', 'une maladie'], correct: 0, why: 'Trop de travail, avec sous prétexte que : on en doute. EN: too much work.' },
    { q: 'Deuxième phrase : pourquoi a-t-il vraiment déménagé ?', opts: ['pour avoir un jardin', 'parce qu’il était mal logé'], correct: 0, why: 'Non qu’il soit mal logé : cette cause est écartée. EN: for a garden.' },
    { q: 'Cinquième et sixième phrases : laquelle doute de la pluie ?', opts: ['la cinquième', 'la sixième'], correct: 0, why: 'Sous prétexte que met la raison en doute ; parce que ne juge pas. EN: sous prétexte que.' },
    { q: 'Septième phrase : pourquoi est-il rentré ?', opts: ['il s’ennuyait', 'il avait froid'], correct: 0, why: 'Non parce qu’il avait froid, mais parce qu’il s’ennuyait. EN: he was bored.' },
    { q: 'Dernière phrase : son âge prouve-t-il qu’il a tort ?', opts: ['non', 'oui'], correct: 0, why: 'Ce n’est pas parce que… que : la conclusion est refusée. EN: no.' },
  ],
  audio: REC('rec-b2-15-contestee-ecoute'),
  say: REFRAME,
  terms: ['contestee'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Le mode de la cause contestée',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Écartée : subjonctif. Rapportée : indicatif',
    body: "Non que et ce n'est pas que écartent une cause : subjonctif. La vraie cause, après c'est que ou mais : indicatif. Sous prétexte que et ce n'est pas parce que gardent l'indicatif. EN: a rejected cause takes the subjunctive; the rest stay indicative.",
  },
  cards: [
    trap(E(1849), 'ce n’est pas que', 'Ce n’est pas qu’il est timide, c’est qu’il ne connaît personne.', 'La cause est écartée : soit, au subjonctif. EN: soit.'),
    trap(E(1859), 'c’est que', 'Ce n’est pas que je sois contre, c’est que j’aie besoin de réfléchir.', 'La vraie cause est affirmée : j’ai, à l’indicatif. EN: j’ai.'),
    trap(E(1847), 'non que', 'Il a changé d’appartement, non qu’il est mal logé, mais il voulait un jardin.', 'Non que + subjonctif : soit. EN: soit.'),
    trap(E(1846), 'sous prétexte que', 'Il a refusé de venir sous prétexte qu’il ait trop de travail.', 'Sous prétexte que + indicatif : avait. EN: avait.'),
    trap(E(1853), 'sous prétexte de', 'Il est parti tôt sous prétexte préparer sa réunion.', 'Devant un infinitif : sous prétexte de. EN: de.'),
    trap(E(1861), 'le raisonnement', 'Ce n’est pas parce qu’il soit jeune qu’il a tort.', 'Ce n’est pas parce que… que garde l’indicatif : est. EN: est.'),
  ],
  drill: [
    { promptSay: 'Ce n’est pas qu’il … timide, c’est qu’il ne connaît personne.', opts: ['soit', 'est'], correct: 0 },
    { promptSay: 'Ce n’est pas que je sois contre, c’est que j’… besoin de réfléchir.', opts: ['ai', 'aie'], correct: 0 },
    { promptSay: 'Il a refusé de venir sous prétexte qu’il … trop de travail.', opts: ['avait', 'ait'], correct: 0 },
    { promptSay: 'Non pas que le film … mauvais, mais il est trop long.', opts: ['soit', 'est'], correct: 0 },
    { promptSay: 'Il est parti tôt sous prétexte … préparer sa réunion.', opts: ['de', 'que'], correct: 0 },
    { promptSay: 'Ce n’est pas parce qu’il … jeune qu’il a tort.', opts: ['est', 'soit'], correct: 0 },
    { promptSay: 'Elle a refusé le poste, non qu’il … mal payé, mais il est trop loin.', opts: ['soit', 'est'], correct: 0 },
    { promptSay: 'Ce n’est pas que le prix … trop élevé, c’est que la qualité ne suit pas.', opts: ['soit', 'est'], correct: 0 },
  ],
  steps: STEPS('Écartée : subjonctif. Rapportée : indicatif', 'Le mode que la main oublie'),
  audio: REC('rec-b2-15-piege-contestee'),
  say: REFRAME,
  terms: ['contestee'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Juger : la lettre des locataires', TEXTE_A4, [
  { q: 'Quelles raisons du propriétaire l’association met-elle en doute ?', a: "Les pièces introuvables et les travaux : sous prétexte que et sous prétexte de disent qu'elle n'y croit pas." },
  { q: 'Quelles causes l’association écarte-t-elle, et comment le voit-on ?', a: "L'impatience des locataires (ce n'est pas que nous soyons) et la maladie de M. Diallo (non qu'il soit malade) : le subjonctif le montre." },
  { q: 'Quelle est la vraie raison pour M. Diallo ?', a: "Il ne peut pas monter quatre étages : mais amène la vraie cause, à l'indicatif." },
  { q: 'Position : quel ton prend l’association ?', a: "Ferme mais polie : elle conteste les raisons du propriétaire sans l'accuser directement, et fixe un délai." },
], 'rec-b2-15-texte-a4', ['contestee']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le doute', 'Sous prétexte que dit que celui qui parle…',
    ['ne croit pas vraiment la raison', 'est sûr de la raison', 'ne connaît pas la raison'], 0,
    'La raison donnée, mise en doute. EN: he doubts it.'),
  ctl('Le mode', '« Ce n’est pas que je ne … pas t’aider… »',
    ['veuille', 'veux'], 0,
    'Une cause écartée : le subjonctif. EN: veuille.'),
  ctl('La vraie cause', 'Après « c’est que », pour la vraie raison…',
    ['l’indicatif', 'le subjonctif'], 0,
    'La vraie cause est affirmée. EN: the indicative.'),
], ['contestee']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'La cause qu’on conteste',
    opener: {
      line: "Une excuse qui ne convainc personne, une fausse piste à écarter : ici tu dis une cause sans y croire, ou tu la rejettes pour donner la vraie. EN: An excuse that convinces nobody, a false lead to set aside: here you report a cause you doubt, or reject it for the real one.",
      imageRef: 'lessons/cause-consequence/act04.jpg',
    },
    sections: [],
    milestone: "Tu mets une raison en doute avec sous prétexte que, tu en écartes une avec non que ou ce n'est pas que et le subjonctif, puis tu donnes la vraie. EN: You can doubt a cause, reject it and give the real one.",
    estScreens: 38, restPoints: ['a4-trier', 'a4-piege'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_TRIER, A4_ECOUTE, A4_PIEGE, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: LA CAUSE DANS UN NOM
 *
 *  à cause de / grâce à (recalled from lesson 31 in B1), en raison de and du
 *  fait de, par + bare noun, à force de, faute de, sous l'effet de; suite
 *  à with lesson 10 in B2's ruling.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Le bilan de l’association',
  frSub: 'Des causes qui tiennent dans un nom',
  setting: 'Montréal. Samir, bénévole dans une association de quartier, rédige le bilan de l’année. Claire, la présidente, relit par-dessus son épaule et corrige les petits mots devant les noms.',
  bubbles: [
    { from: 'narrator', fr: 'Samir écrit vite ; Claire regarde surtout ce qui vient avant chaque nom.', en: 'Samir writes fast; Claire looks mostly at what comes before each noun.' },
    { from: 'user', fr: fr(E(1879)), en: en(E(1879)) },
    { from: 'coach', fr: 'Par, sans article : un motif. Tu pourrais aussi écrire faute de moyens.', en: 'Par, with no article: a motive. You could also write faute de moyens.', warn: 'Par + nom' },
    { from: 'user', fr: 'Grâce à la nouvelle salle, les ateliers ont doublé.', en: 'Thanks to the new room, the workshops have doubled.' },
    { from: 'coach', fr: 'Grâce à : une cause qui a produit un bon résultat. Pour un mauvais, à cause de.', en: 'Grâce à: a cause that produced a good result. For a bad one, à cause de.', warn: 'Grâce à' },
    { from: 'user', fr: 'À force de demander, nous avons obtenu une subvention de la ville.', en: 'By asking again and again, we got a grant from the city.' },
    { from: 'coach', fr: 'À force de : c’est la répétition qui a payé.', en: 'À force de: it was the repetition that paid off.', warn: 'À force de' },
    { from: 'user', fr: 'Suite à la réunion de mars, le budget a été revu.', en: 'Following the March meeting, the budget was revised.' },
    { from: 'coach', fr: 'Suite à se dit partout, mais les guides de style le critiquent. Dans un bilan soigné, écris à la suite de.', en: 'Suite à is heard everywhere, but style guides criticise it. In a careful report, write à la suite de.', warn: 'Suite à' },
  ],
  closing: { fr: 'Un motif avec par, un bon résultat avec grâce à, un effort avec à force de, et à la suite de dans un texte soigné.', en: 'A motive with par, a good outcome with grâce à, an effort with à force de, and à la suite de in careful writing.' },
  audio: REC('rec-b2-15-samir'),
  say: REFRAME,
  terms: ['nom'],
};

const A5_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-table',
  layer: 'core',
  sheetId: 'sheet-noms',
  title: 'Six prépositions, six causes',
  cols: ['Préposition', 'La cause est…', 'Registre'],
  rows: [
    { cells: ['à cause de', 'neutre ou négative', 'courant'], say: fr(E(1863)),
      detail: { title: 'à cause de', body: "Pour une cause neutre ou un effet négatif. Pour un bon résultat, grâce à. EN: neutral or negative.", say: fr(CL(1249)) } },
    { cells: ['grâce à', 'à l’origine d’un bon résultat', 'courant'], say: fr(E(1862)),
      detail: { title: 'grâce à', body: "Une cause qui a permis quelque chose de positif. Pour un effet négatif, il ne sert qu'à l'ironie. EN: a good outcome.", say: fr(CL(1251)) } },
    { cells: ['en raison de', 'officielle, neutre', 'soutenu'], say: fr(E(1873)),
      detail: { title: 'en raison de, du fait de', body: `Fréquent dans les annonces. ${Cap(NOMIN_REF)} l'a employé dans le groupe nominal ; du fait de dit la même chose. EN: formal and neutral.`, say: fr(CL(1266)) } },
    { cells: ['par', 'un motif intérieur', 'courant'], say: fr(E(1864)),
      detail: { title: 'par + nom', body: "Sans article : par peur, par curiosité, par erreur, par manque de. EN: an inner motive, no article.", say: fr(E(1865)) } },
    { cells: ['à force de', 'la répétition, l’effort', 'courant'], say: fr(E(1867)),
      detail: { title: 'à force de', body: "Avec un infinitif ou un nom sans article : à force de répéter, à force de patience. EN: through repeated effort.", say: fr(E(1868)) } },
    { cells: ['faute de', 'un manque', 'soutenu'], say: fr(E(1869)),
      detail: { title: 'faute de', body: "Sans article devant le nom, ou avec un infinitif : faute d'avoir réservé. EN: for lack of.", say: fr(E(1870)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nom'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'La cause devant un nom',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Un motif, un effort', [
      it(E(1864), 'par peur'),
      it(E(1865), 'par curiosité'),
      it(E(1867), 'à force de + infinitif'),
      it(E(1868), 'à force de + nom'),
    ], chk('« Il a menti … peur de décevoir ses parents. »',
      ['par', 'par la', 'avec'], 0,
      'Par, sans article, pour un motif. EN: par, no article.')),
    grp('Un manque, une pression', [
      it(E(1869), 'faute de temps'),
      it(E(1870), 'faute de + infinitif passé'),
      it(E(1871), 'sous l’effet de la fatigue'),
      it(E(1878), 'faute de preuves'),
    ], chk('« … temps, nous n’avons pas visité le musée. »',
      ['Faute de', 'Faute du', 'À force de'], 0,
      'Le manque, sans article. EN: for lack of.')),
    ctl('Bon ou mauvais', '« … la grève, le métro ne marche pas. »',
      ['À cause de', 'Grâce à'], 0,
      'Un effet négatif : à cause de. EN: à cause de for a bad outcome.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nom'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Suite à, et ses voisines',
  frSub: `La règle de ${NOMIN_REF}, gardée`,
  examples: [
    ex(E(1874), 'suite à : très répandu, accepté, mais critiqué par les guides de style'),
    ex(E(1875), 'à la suite de : la forme soignée, à préférer dans un rapport'),
    ex(E(1873), 'en raison de : l’annonce officielle'),
    ex(E(1872), 'sous l’effet de : une pression, souvent physique'),
    ex('fr.b2.universite.1018', 'faute de, dans un texte universitaire'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nom', 'registre'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs devant le nom',
  errors: [
    {
      wrong: 'Il a menti par la peur de décevoir ses parents.',
      right: fr(E(1864)),
      why: "Normal : devant un nom, on attend souvent un article. Mais par, pour un motif, se construit sans article : par peur. EN: no article after par.",
    },
    {
      wrong: 'Grâce à la grève, le métro ne marche pas.',
      right: fr(CL(1255)),
      why: "Normal : grâce à dit aussi la cause. Mais il annonce un bon résultat ; pour un effet négatif, à cause de. EN: grâce à only for good outcomes.",
    },
    {
      wrong: "Faute du temps, nous n'avons pas visité le musée.",
      right: fr(E(1869)),
      why: "Normal : devant temps, l'article semble naturel. Faute de se construit sans article : faute de temps. EN: no article after faute de.",
    },
    {
      wrong: 'Suite de votre appel, nous avons modifié votre adresse.',
      right: fr(E(1875)),
      why: "Normal : on entend suite à partout. Mais suite de n'existe pas ; la forme soignée est à la suite de. EN: à la suite de, or the criticised suite à.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nom'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a5-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Par, à force de, faute de : sans article',
  itemIds: dicteeFor(5),
  audio: AUDIO,
  say: REFRAME,
  terms: ['nom'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Compléter : la brève du jardin', TEXTE_A5, [
  { q: 'Blanc 1 : qu’est-ce qui a fendu la terre ?', a: "Sous l'effet de la chaleur : une pression physique. À cause de irait aussi, en plus neutre." },
  { q: 'Blancs 2 et 3 : les bénévoles, puis l’aide des voisins.', a: "Faute de bénévoles, le manque ; grâce à l'aide des voisins, un bon résultat." },
  { q: 'Blanc 4 : réclamer un point d’eau.', a: "À force de réclamer : c'est la répétition qui a payé." },
  { q: 'Blancs 5 et 6 : solidarité, simple curiosité.', a: "Par solidarité, par simple curiosité : par + nom, sans article ; l'adjectif simple n'y change rien." },
], 'rec-b2-15-texte-a5', ['nom']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le motif', '« Elle a ouvert la lettre … curiosité. »',
    ['par', 'par la', 'avec la'], 0,
    'Un motif intérieur : par, sans article. EN: out of curiosity.'),
  ctl('La répétition', 'À force de dit que la cause est…',
    ['un effort répété', 'un manque', 'un hasard'], 0,
    'À force de répéter, de patience. EN: repeated effort.'),
  ctl('Suite à', 'Dans un rapport soigné, tu préfères…',
    ['à la suite de', 'suite à'], 0,
    'Suite à est accepté, mais critiqué ; à la suite de ne l’est pas. EN: à la suite de.'),
], ['nom']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'La cause dans un nom',
    opener: {
      line: "Par peur, faute de temps, à force de patience : ici la cause tient en quelques mots, devant un nom. EN: Out of fear, for lack of time, through patience: here the cause fits in a few words, before a noun.",
      imageRef: 'lessons/cause-consequence/act05.jpg',
    },
    sections: [],
    milestone: "Tu dis une cause devant un nom avec la bonne préposition : grâce à ou à cause de, par sans article, à force de, faute de, sous l'effet de, et à la suite de à l'écrit soigné. EN: You can put a cause into a noun phrase.",
    estScreens: 40, restPoints: ['a5-table', 'a5-exemples'],
  },
  sections: [A5_HISTOIRE, A5_TABLE, A5_CONSTRUIRE, A5_EXEMPLES, A5_ERREURS, A5_DICTEE, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: LA CAUSE DANS LE VERBE
 *
 *  être dû à (agreement), s'expliquer par, provenir de, venir de, tenir à:
 *  the fact first, the cause after the verb. « Le retard est à cause de »
 *  as the trap.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La coupure de chauffage',
  frSub: 'Un rapport d’incident (cas inventé)',
  text: LECTURE_RAPPORT,
  glossary: [
    { word: "hors d'usage", en: 'out of order', note: 'Qui ne peut plus servir.' },
    { word: 'usure', en: 'wear', note: 'La dégradation lente d’un objet qui sert beaucoup.' },
    { word: 'gérance', en: 'property management', note: 'Le service qui gère un immeuble pour le propriétaire.' },
  ],
  questions: [
    { q: 'Global : à quoi sert ce rapport ?', a: "À expliquer une panne de chauffage, ses causes et ses suites, puis à dire ce qui sera fait pour qu'elle ne se reproduise pas." },
    { q: 'Détail : quelle est la cause directe de la panne ?', a: "Une pompe hors d'usage : la panne était due à cette pompe." },
    { q: 'Et la cause de cette usure ?', a: "L'âge de l'installation, jamais révisée depuis sept ans : l'usure s'explique par l'âge." },
    { q: 'Détail : pourquoi la réparation a-t-elle pris du temps ?', a: "Elle tient à deux causes : la pièce manquait, et le technicien était seul pour tout le secteur." },
    { q: 'Inférence : la gérance reconnaît-elle une part de responsabilité ?', a: "Oui, à demi-mot : elle admet le manque d'information et promet des messages plus rapides." },
    { q: 'Position : quel ton le rapport prend-il ?', a: "Neutre et factuel : des verbes de cause, peu d'adjectifs, aucune émotion." },
  ],
  audio: REC('rec-b2-15-rapport'),
  say: REFRAME,
  terms: ['verbe'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-noms',
  title: 'Le fait d’abord, la cause ensuite',
  frSub: 'Quatre verbes de cause',
  hint: 'Quatre cartes. La première cache un accord.',
  audio: REC('rec-b2-15-verbe'),
  say: REFRAME,
  terms: ['verbe'],
  cards: [
    {
      head: 'Être dû à', label: 'l’accord',
      fr: fr(E(1883)), sub: rsOf(E(1883)),
      body: "Le fait en tête, la cause après à. Dû s'accorde : due, dus, dues ; seul dû garde l'accent. À l'écrit, pas « est à cause de », qu'on entend surtout à l'oral. EN: the fact first, the cause after; dû agrees.",
    },
    {
      head: 'S’expliquer par', label: 'l’analyse',
      fr: fr(E(1886)), sub: rsOf(E(1886)),
      body: "Plus analytique : la cause éclaire le fait. En partie, surtout, d'abord se glissent après le verbe. EN: the cause explains the fact.",
    },
    {
      head: 'Provenir de, venir de', label: 'l’origine',
      fr: fr(E(1888)), sub: rsOf(E(1888)),
      body: "Provenir de dit d'où vient une chose, un bruit ou une erreur ; venir de dit la même chose, en plus courant. EN: comes from, formal and everyday.",
    },
    {
      head: 'Tenir à', label: 'ce dont tout dépend',
      fr: fr(E(1889)), sub: rsOf(E(1889)),
      body: "Le succès tient à la qualité : c'est d'elle qu'il dépend. Ne confonds pas avec tenir à quelqu'un, y être attaché. EN: comes down to, not to be fond of.",
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Mettre la cause après le verbe',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('L’accord de dû', [
      it(E(1882), 'le retard : dû'),
      it(E(1883), 'la panne : due'),
      it(E(1884), 'ces erreurs : dues'),
      it(E(1885), 'les retards : dus'),
    ], chk('« Ces erreurs sont … à un manque de relecture. »',
      ['dues', 'dû', 'dus'], 0,
      'Féminin pluriel : dues. EN: dues.')),
    grp('Expliquer, provenir, tenir', [
      it(E(1886), 's’expliquer par'),
      it(E(1887), 'provenir de'),
      it(E(1889), 'tenir à'),
      it(E(1894), 'venir de'),
    ], chk('« Cette hausse s’explique … le coût de l’énergie. »',
      ['par', 'de', 'à'], 0,
      'S’expliquer par. EN: par.')),
    ctl('La place', '« Le bruit provient du chantier voisin. » La cause est…',
      ['après le verbe', 'avant le verbe'], 0,
      'Le fait d’abord, la cause ensuite. EN: after the verb.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbe'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'D’où vient le problème',
  frSub: 'Neuf phrases, neuf origines',
  lines: [
    ln(E(1882)), ln(E(1883)), ln(E(1884)), ln(E(1886)), ln(E(1887)),
    ln(E(1888)), ln(E(1889)), ln(E(1890)), ln(E(1895)),
  ],
  questions: [
    { q: 'Première phrase : d’où vient le retard ?', opts: ['la signalisation', 'la météo'], correct: 0, why: 'Un problème de signalisation. EN: signalling.' },
    { q: 'Deuxième phrase : qu’est-ce qui était endommagé ?', opts: ['un câble', 'une pompe'], correct: 0, why: 'Un câble endommagé. EN: a cable.' },
    { q: 'Cinquième phrase : d’où vient le bruit ?', opts: ['du chantier voisin', 'de la rue'], correct: 0, why: 'Il provient du chantier voisin. EN: the building site.' },
    { q: 'Septième phrase : de quoi dépend le succès ?', opts: ['du scénario', 'des acteurs'], correct: 0, why: 'Il tient à la qualité du scénario. EN: the script.' },
    { q: 'Dernière phrase : pourquoi le magasin ferme-t-il ?', opts: ['les ventes ont baissé', 'le loyer a augmenté'], correct: 0, why: 'Elle est due à la baisse des ventes. EN: falling sales.' },
  ],
  audio: REC('rec-b2-15-verbe-ecoute'),
  say: REFRAME,
  terms: ['verbe'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de verbe',
  errors: [
    {
      wrong: "Le retard du train est à cause d'un problème de signalisation.",
      right: fr(E(1882)),
      why: "Normal : à cause de dit bien la cause, et on entend souvent « est à cause de » à l'oral. À l'écrit, après être, prends un verbe de cause : est dû à. EN: in writing, être dû à, not être à cause de.",
    },
    {
      wrong: 'La panne était dû à un câble endommagé.',
      right: fr(E(1883)),
      why: "Normal : on entend [dy] dans les deux cas. À l'écrit, dû s'accorde avec la panne : due. EN: due agrees.",
    },
    {
      wrong: "Cette hausse des prix s'explique avec le coût de l'énergie.",
      right: fr(E(1886)),
      why: "Normal : explained with semble possible en anglais. En français, on dit s'expliquer par. EN: par.",
    },
    {
      wrong: 'Le bruit provient le chantier voisin.',
      right: fr(E(1887)),
      why: "Normal : come from se traduit parfois par un verbe seul. Provenir veut toujours de : du chantier. EN: provenir de.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbe'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Réécrire : le compte rendu du syndic', TEXTE_A6, [
  { q: 'Réécris la première phrase avec être dû à.', a: "La coupure d'eau de mardi est due au gel d'une canalisation. Due : l'accord avec la coupure." },
  { q: 'La deuxième, avec provenir de.', a: "L'odeur dans le hall provient du local à poubelles, qui n'est plus aéré." },
  { q: 'La troisième, avec tenir à.', a: "La lenteur des réparations tient au manque de technicien." },
  { q: 'La dernière, avec s’expliquer par.', a: "Le nombre de plaintes s'explique par la mauvaise circulation de l'information." },
], 'rec-b2-15-texte-a6', ['verbe']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('L’accord', '« Les retards sont … aux intempéries. »',
    ['dus', 'dû', 'dues'], 0,
    'Masculin pluriel : dus. EN: dus.'),
  ctl('Le piège', 'À l’écrit : « Le retard est … la neige. »',
    ['dû à', 'à cause de'], 0,
    'À l’écrit, après être : dû à. EN: dû à.'),
  ctl('Tenir à', '« Son succès tient à sa simplicité » veut dire…',
    ['son succès vient de sa simplicité', 'il aime beaucoup sa simplicité'], 0,
    'Tenir à : dépendre de, venir de. EN: comes down to.'),
], ['verbe']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'La cause dans le verbe',
    opener: {
      line: "Le chauffage s'arrête, et il faut écrire pourquoi : ici un verbe porte la cause, et le fait passe en tête de phrase. EN: The heating stops and someone has to write why: here a verb carries the cause, and the fact moves to the front.",
      imageRef: 'lessons/cause-consequence/act06.jpg',
    },
    sections: [],
    milestone: "Tu mets la cause après un verbe (être dû à, s'expliquer par, provenir de, tenir à), avec le bon accord de dû, et tu n'écris plus « est à cause de ». EN: You can carry a cause in a verb.",
    estScreens: 38, restPoints: ['a6-lecture', 'a6-ecoute'],
  },
  sections: [A6_LECTURE, A6_CARTES, A6_CONSTRUIRE, A6_ECOUTE, A6_ERREURS, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: LA CONSÉQUENCE, EN CONNECTEUR
 *
 *  par conséquent and c'est pourquoi recalled, then en conséquence, de ce
 *  fait, d'où + noun, aussi + inversion (lesson 21 in B1), du coup; the
 *  register ladder; a paragraph with four donc to repair.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Le compte rendu de Julien',
  frSub: 'Quatre donc de suite',
  setting: 'Bruxelles. Julien, stagiaire dans une petite entreprise de meubles, relit son compte rendu avec sa tutrice, Sophie. Quatre phrases de suite s’appuient sur donc.',
  bubbles: [
    { from: 'narrator', fr: 'Sophie lit le compte rendu de Julien et compte les donc.', en: 'Sophie reads Julien’s report and counts the donc.' },
    { from: 'user', fr: "Le fournisseur a livré en retard, donc la production s'est arrêtée.", en: 'The supplier delivered late, so production stopped.' },
    { from: 'coach', fr: 'C’est juste, mais c’est le premier de quatre donc. Essaie d’où, avec un nom.', en: 'That is correct, but it is the first of four donc. Try d’où, with a noun.', warn: 'Un donc de trop' },
    { from: 'user', fr: "Le fournisseur a livré en retard, d'où l'arrêt de la production.", en: 'The supplier delivered late, hence the halt in production.' },
    { from: 'coach', fr: 'D’où, puis un nom : l’arrêt. La phrase devient plus compacte.', en: 'D’où, then a noun: the halt. The sentence gets more compact.', warn: 'D’où + nom' },
    { from: 'user', fr: fr(E(1910)), en: en(E(1910)) },
    { from: 'coach', fr: 'Aussi en tête, au sens de donc : l’inversion suit, comme dans une lettre officielle.', en: 'Aussi at the front, meaning donc: inversion follows, as in an official letter.', warn: 'Aussi + inversion' },
    { from: 'user', fr: 'Du coup, on a appelé le client.', en: 'So we called the client.' },
    { from: 'coach', fr: 'À l’oral, du coup passe très bien. Dans un compte rendu, écris par conséquent ou c’est pourquoi.', en: 'In speech, du coup is fine. In a report, write par conséquent or c’est pourquoi.', warn: 'Le registre' },
  ],
  closing: { fr: 'Quatre conséquences, quatre liens : le texte respire.', en: 'Four consequences, four links: the text can breathe.' },
  audio: REC('rec-b2-15-julien'),
  say: REFRAME,
  terms: ['consequence', 'registre'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-consequence',
  title: 'Au-delà de donc',
  frSub: 'Quatre façons d’annoncer la suite',
  hint: 'Quatre cartes. La dernière reprend une échelle du B1.',
  audio: REC('rec-b2-15-consequence'),
  say: REFRAME,
  terms: ['consequence'],
  cards: [
    {
      head: 'La suite en un nom', label: 'd’où',
      fr: fr(E(1899)), sub: rsOf(E(1899)),
      body: "D'où, puis un nom : la conséquence tient en un groupe, sans verbe conjugué. Avec un verbe, reviens à c'est pourquoi. EN: d'où takes a noun, not a clause.",
    },
    {
      head: 'Une suite adaptée', label: 'en conséquence',
      fr: fr(E(1898)), sub: rsOf(E(1898)),
      body: "Comme par conséquent, en conséquence annonce la suite ; il veut aussi dire de façon adaptée : agis en conséquence. EN: consequently, and accordingly.",
    },
    {
      head: 'Aussi, avec inversion', label: Cap(INVERSION_REF),
      fr: fr(E(1902)), sub: rsOf(E(1902)),
      body: `« ${B121_REFRAME} » Aussi en tête veut dire donc, et il fait inverser : aussi a-t-il été renvoyé. EN: ${B121_REFRAME_EN}`,
    },
    {
      head: 'L’échelle, prolongée', label: Cap(SUBORD_REF),
      fr: fr(CL(1308)), sub: rsOf(CL(1308)),
      body: "Ajoute du coup en bas de l'échelle, très familier, et de ce fait en haut, soutenu. Donc, lui, va partout. EN: du coup at the bottom, de ce fait at the top.",
    },
  ],
};

const A7_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-trier',
  layer: 'core',
  size: 'lg',
  title: 'Un nom ou une phrase, l’oral ou l’écrit',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Un nom après d’où', [
      it(E(1899), 'd’où la création'),
      it(E(1900), 'd’où son retard'),
      it(E(1908), 'd’où la colère'),
      it(E(1810), 'd’où la nouvelle charte'),
    ], chk('« Les inscriptions ont explosé, … un deuxième groupe a été créé. »',
      ['si bien qu’', 'd’où'], 0,
      'Un verbe conjugué suit : si bien que. D’où veut un nom. EN: a clause, so si bien que.')),
    grp('Du plus oral au plus soigné', [
      it(E(1904), 'du coup : entre amis'),
      it(E(1909), 'donc : partout'),
      it(E(1913), 'par conséquent : à l’écrit'),
      it(E(1912), 'de ce fait : soutenu'),
    ], chk('Lequel est familier ?',
      ['du coup', 'par conséquent', 'de ce fait'], 0,
      'Du coup, à l’oral surtout. EN: du coup.')),
    ctl('Aussi', 'Dans un rapport : « Le dossier était incomplet. Aussi … renvoyé à son auteur. »',
      ['a-t-il été', 'il a été'], 0,
      'Aussi en tête, au sens de donc : l’inversion, à l’écrit soigné. EN: inversion.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['consequence', 'registre'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Les conséquences mal bâties',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'D’où + nom, aussi + inversion',
    body: "D'où se construit avec un nom, jamais avec que ni un verbe conjugué. Aussi en tête, au sens de donc, fait inverser. Par conséquent et en conséquence existent ; par conséquence et en conséquent, non. EN: d'où takes a noun; aussi inverts.",
  },
  cards: [
    trap(E(1899), 'd’où + verbe', 'Les inscriptions ont explosé, d’où ils ont créé un deuxième groupe.', 'D’où + nom : d’où la création. EN: a noun.'),
    trap(E(1908), 'd’où que', 'Le vol a été annulé, d’où que les passagers sont en colère.', 'Pas de que : d’où la colère. EN: no que.'),
    trap(E(1910), 'aussi', 'Aussi nous avons décidé de reporter l’assemblée.', 'Aussi en tête : avons-nous. EN: inversion.'),
    trap(E(1913), 'par conséquent', 'Le train était complet ; par conséquence, nous avons loué une voiture.', 'Par conséquent, avec -ent ; en conséquence, avec -ence. EN: par conséquent.'),
    trap(E(1903), 'agir en conséquence', 'Tu connais les risques : agis en conséquent.', 'Agir en conséquence : conséquent est un adjectif. EN: act accordingly.'),
    trap(E(1901), 'de ce fait', 'La route était inondée ; de ce fait que les bus ont été déviés.', 'De ce fait, sans que : il relie deux phrases. EN: no que.'),
  ],
  drill: [
    { promptSay: 'Il avait oublié son badge, … son retard.', opts: ['d’où', 'c’est pourquoi'], correct: 0 },
    { promptSay: 'Il avait oublié son badge, … il est arrivé en retard.', opts: ['c’est pourquoi', 'd’où'], correct: 0 },
    { promptSay: '… avons-nous décidé de reporter l’assemblée.', opts: ['Aussi', 'Donc'], correct: 0 },
    { promptSay: 'Tu connais les risques : agis en … .', opts: ['conséquence', 'conséquent'], correct: 0 },
    { promptSay: 'Le train était complet ; par …, nous avons loué une voiture.', opts: ['conséquent', 'conséquence'], correct: 0 },
    { promptSay: 'La demande a été mal remplie ; de ce …, elle n’a pas pu être traitée.', opts: ['fait', 'coup'], correct: 0 },
    { promptSay: 'Entre amis : on a raté le métro, du … on est rentrés à pied.', opts: ['coup', 'fait'], correct: 0 },
    { promptSay: 'Le vol a été annulé, d’où … colère des passagers.', opts: ['la', 'que la'], correct: 0 },
  ],
  steps: STEPS('D’où + nom, aussi + inversion', 'Ce que la phrase ne supporte pas'),
  audio: REC('rec-b2-15-piege-consequence'),
  say: REFRAME,
  terms: ['consequence'],
};

const A7_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a7-hacks',
  layer: 'core',
  title: 'Trois astuces contre le donc répété',
  hacks: [
    { hack: 'Compte tes donc : plus de deux par paragraphe, varie.', why: "Donc n'est jamais faux, mais répété il aplatit le texte. EN: count them; vary past two." },
    { hack: 'Si la conséquence tient en un nom, prends d’où.', why: "D'où la colère, d'où son retard : plus court qu'une phrase entière. EN: a noun? use d'où." },
    { hack: 'Mets parfois la conséquence dans le verbe.', why: "Cela a entraîné, provoqué, suscité : l'acte 10 t'en donne cinq. EN: a verb can carry the consequence." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['consequence', 'lien'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Réécrire : le compte rendu de Julien', TEXTE_A7, [
  { q: 'Réécris les deux premières phrases sans donc.', a: "Le fournisseur a livré en retard, d'où l'arrêt de la production pendant deux jours. Par conséquent, les commandes ont pris du retard." },
  { q: 'Et la troisième ?', a: "Les clients ont protesté ; c'est pourquoi nous avons offert une remise. Ou, plus soutenu : aussi avons-nous offert une remise." },
  { q: 'Et la dernière ?', a: "Cette remise coûte cher ; de ce fait, le budget du trimestre sera revu." },
  { q: 'Pourquoi ne pas tout remplacer par « par conséquent » ?', a: "On répéterait un autre mot : le but est de varier les liens, pas de changer de répétition." },
], 'rec-b2-15-texte-a7', ['consequence']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('D’où', 'Après d’où, tu mets…',
    ['un nom', 'que + une phrase', 'un verbe conjugué'], 0,
    'D’où la colère. EN: a noun.'),
  ctl('Aussi', '« Aussi … décidé de partir. » À l’écrit soigné :',
    ['avons-nous', 'nous avons'], 0,
    'Aussi en tête, au sens de donc : inversion. EN: inversion.'),
  ctl('Le registre', 'Dans un rapport, plutôt que du coup, tu écris…',
    ['par conséquent', 'du coup aussi'], 0,
    'Du coup est familier. EN: par conséquent.'),
], ['consequence']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'La conséquence, en connecteur',
    opener: {
      line: "Quatre fois donc dans un compte rendu : ici tu varies la façon d'annoncer la suite, du plus oral au plus soigné. EN: Four donc in one report: here you vary the way you announce what follows, from casual to formal.",
      imageRef: 'lessons/cause-consequence/act07.jpg',
    },
    sections: [],
    milestone: "Tu annonces une conséquence avec d'où + nom, en conséquence, de ce fait ou aussi et l'inversion, et tu choisis selon le registre. EN: You can vary consequence links by structure and register.",
    estScreens: 38, restPoints: ['a7-trier', 'a7-piege'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_TRIER, A7_PIEGE, A7_HACKS, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: LE RÉSULTAT OU LE BUT
 *
 *  si bien que and de sorte que + indicatif (a result, it happened) against
 *  de sorte que / de façon que + subjonctif (an aim). Purpose on its own is
 *  a later lesson, named without a number.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'Les consignes de Léa',
  frSub: 'Ce qui est arrivé, ce qu’on vise',
  setting: 'Bruxelles. Léa guide des groupes scolaires dans un musée. Elle prépare sa prochaine visite avec son responsable, Hugo, qui relit ses consignes.',
  bubbles: [
    { from: 'narrator', fr: 'Hugo relit les consignes de Léa, surtout le verbe après de sorte que.', en: 'Hugo rereads Léa’s instructions, especially the verb after de sorte que.' },
    { from: 'user', fr: fr(E(1917)), en: en(E(1917)) },
    { from: 'coach', fr: 'Comprenne : c’est ce que tu vises. Le subjonctif dit un but.', en: 'Comprenne: that is what you are aiming for. The subjunctive states an aim.', warn: 'Un but' },
    { from: 'user', fr: fr(E(1918)), en: en(E(1918)) },
    { from: 'coach', fr: 'A compris : c’est arrivé. L’indicatif dit un résultat.', en: 'A compris: it happened. The indicative states a result.', warn: 'Un résultat' },
    { from: 'user', fr: 'La visite a duré deux heures, si bien que les enfants étaient fatigués.', en: 'The visit lasted two hours, so the children were tired.' },
    { from: 'coach', fr: 'Si bien que : toujours un résultat, jamais de subjonctif.', en: 'Si bien que: always a result, never the subjunctive.', warn: 'Si bien que' },
    { from: 'user', fr: fr(E(1926)), en: en(E(1926)) },
    { from: 'coach', fr: 'Voie, avec un e : le subjonctif de voir. Encore un but.', en: 'Voie, with an e: the subjunctive of voir. Another aim.', warn: 'Voie, pas voit' },
  ],
  closing: { fr: 'Après de sorte que, le mode dit si c’est déjà arrivé, ou si tu le vises.', en: 'After de sorte que, the mood tells whether it has happened or whether you are aiming for it.' },
  audio: REC('rec-b2-15-lea'),
  say: REFRAME,
  terms: ['resultat'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-consequence',
  title: 'Le mode décide',
  frSub: 'Résultat ou but',
  hint: 'Quatre cartes. Les deux premières ne diffèrent que par le mode.',
  audio: REC('rec-b2-15-resultat'),
  say: REFRAME,
  terms: ['resultat'],
  cards: [
    {
      head: 'C’est arrivé', label: 'de sorte que + indicatif',
      fr: fr(E(1918)), sub: rsOf(E(1918)),
      body: "Le groupe a compris : un résultat, à l'indicatif. De sorte que dit ici la même chose que si bien que. EN: a result, in the indicative.",
    },
    {
      head: 'On le vise', label: 'de sorte que + subjonctif',
      fr: fr(E(1917)), sub: rsOf(E(1917)),
      body: `Le groupe comprenne : un but, au subjonctif. Le but seul, avec pour, afin de et pour que, est pour ${LATER_REF}. EN: an aim, in the subjunctive.`,
    },
    {
      head: 'Toujours un résultat', label: Cap(SUBORD_REF),
      fr: fr(CL(1267)), sub: rsOf(CL(1267)),
      body: "Si bien que, vu au B1 : il dit ce qui est arrivé, à l'indicatif, et ne sert jamais pour un but. EN: always a result.",
    },
    {
      head: 'Même double sens', label: 'de façon que',
      fr: fr(E(1919)), sub: rsOf(E(1919)),
      body: "De façon que et de manière que suivent de sorte que : l'indicatif pour un résultat, le subjonctif pour un but. EN: the same pattern.",
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Arrivé ou visé',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('C’est arrivé', [
      it(E(1914), 'toute la salle l’a entendu'),
      it(E(1916), 'on les a retrouvés'),
      it(E(1918), 'le groupe a compris'),
      it(E(1925), 'la file a diminué'),
    ], chk('« Nous avons ouvert plus tôt, de sorte que la file a vite diminué. » La file…',
      ['a vraiment diminué', 'devait diminuer, peut-être'], 0,
      'L’indicatif : c’est arrivé. EN: it really went down.')),
    grp('On le vise', [
      it(E(1915), 'qu’on puisse les retrouver'),
      it(E(1917), 'que le groupe comprenne'),
      it(E(1919), 'que chacun puisse te relire'),
      it(E(1926), 'que chacun voie l’écran'),
    ], chk('« Range tes dossiers de sorte qu’on … les retrouver. »',
      ['puisse', 'peut'], 0,
      'Un but, après un impératif : le subjonctif. EN: puisse.')),
    ctl('Si bien que', '« La réunion a débordé, si bien que j’… raté mon train. »',
      ['ai', 'aie'], 0,
      'Si bien que : un résultat, l’indicatif. EN: ai.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['resultat'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le mode à l’oreille',
  frSub: 'Neuf phrases : résultat ou but',
  lines: [
    ln(E(1914)), ln(E(1915)), ln(E(1916)), ln(E(1917)), ln(E(1918)),
    ln(E(1919)), ln(E(1920)), ln(E(1926)), ln(E(1927)),
  ],
  questions: [
    { q: 'Première phrase : la salle a-t-elle entendu ?', opts: ['oui', 'on ne sait pas'], correct: 0, why: 'Si bien que : un résultat, c’est arrivé. EN: yes.' },
    { q: 'Quatrième et cinquième phrases : laquelle dit que le groupe a compris ?', opts: ['la cinquième', 'la quatrième'], correct: 0, why: 'A compris, à l’indicatif : un résultat. Comprenne dit un but. EN: the fifth.' },
    { q: 'Septième phrase : qu’est-il arrivé au train ?', opts: ['la personne l’a raté', 'il est parti en retard'], correct: 0, why: 'La réunion a débordé, et le train est parti sans elle. EN: she missed it.' },
    { q: 'Huitième phrase : un résultat ou un but ?', opts: ['un but', 'un résultat'], correct: 0, why: 'Voie, au subjonctif : on vise que chacun voie l’écran. EN: an aim.' },
    { q: 'Dernière phrase : voit-on encore les fissures ?', opts: ['non', 'oui'], correct: 0, why: 'Le mur a été repeint : on ne les voit plus. EN: no.' },
  ],
  audio: REC('rec-b2-15-resultat-ecoute'),
  say: REFRAME,
  terms: ['resultat'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Le mauvais mode',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Arrivé : indicatif. Visé : subjonctif',
    body: "Après de sorte que et de façon que, l'indicatif dit ce qui est arrivé, le subjonctif ce qu'on vise. Si bien que ne dit jamais un but. EN: happened: indicative; aimed at: subjunctive.",
  },
  cards: [
    trap(E(1920), 'si bien que', 'La réunion a débordé, si bien que j’aie raté mon train.', 'Un résultat : ai. EN: ai.'),
    trap(E(1915), 'le but', 'Range tes dossiers de sorte qu’on peut les retrouver.', 'Un but : puisse. EN: puisse.'),
    trap(E(1926), 'voie', 'Organise la salle de sorte que chacun voit l’écran.', 'Un but : voie, au subjonctif. EN: voie.'),
    trap(E(1923), 'pas un but', 'Parle plus lentement, si bien que tout le monde te suive.', 'Si bien que ne dit jamais un but : de sorte que. EN: de sorte que.'),
    trap(E(1919), 'de façon que', 'Écris lisiblement, de façon que chacun peut te relire.', 'Un but : puisse. EN: puisse.'),
    trap(E(1927), 'le résultat', 'Le mur a été repeint, si bien qu’on ne voie plus les fissures.', 'Un résultat : voit. EN: voit.'),
  ],
  drill: [
    { promptSay: 'La réunion a débordé, si bien que j’… raté mon train.', opts: ['ai', 'aie'], correct: 0 },
    { promptSay: 'Range tes dossiers de sorte qu’on … les retrouver.', opts: ['puisse', 'peut'], correct: 0 },
    { promptSay: 'Organise la salle de sorte que chacun … l’écran.', opts: ['voie', 'voit'], correct: 0 },
    { promptSay: 'Parle plus lentement, … tout le monde te suive.', opts: ['de sorte que', 'si bien que'], correct: 0 },
    { promptSay: 'Le mur a été repeint, si bien qu’on ne … plus les fissures.', opts: ['voit', 'voie'], correct: 0 },
    { promptSay: 'Écris lisiblement, de façon que chacun … te relire.', opts: ['puisse', 'peut'], correct: 0 },
    { promptSay: 'Nous avons ouvert plus tôt, de sorte que la file … vite diminué.', opts: ['a', 'ait'], correct: 0 },
    { promptSay: 'Il a parlé fort, … toute la salle l’a entendu.', opts: ['si bien que', 'pour que'], correct: 0 },
  ],
  steps: STEPS('Arrivé : indicatif. Visé : subjonctif', 'Le mode qui change tout'),
  audio: REC('rec-b2-15-piege-resultat'),
  say: REFRAME,
  terms: ['resultat'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Choisir : la note du festival', TEXTE_A8, [
  { q: 'Première phrase : résultat ou but ? Mets le verbe.', a: "Un résultat, déjà arrivé l'an dernier : de sorte que la file a bloqué la rue (ou bloquait), à l'indicatif." },
  { q: 'Deuxième : ouvrez à dix-sept heures, de sorte que le public (pouvoir)…', a: "Un but : de sorte que le public puisse entrer sans attendre." },
  { q: 'Troisième : placez un bénévole à chaque entrée…', a: "Un but : de sorte que personne ne se perde." },
  { q: 'Dernière : si bien que…', a: "Un résultat, toujours : si bien que beaucoup de gens n'ont pas trouvé les toilettes (ou ne trouvaient pas), à l'indicatif." },
], 'rec-b2-15-texte-a8', ['resultat']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le résultat', '« Il a parlé lentement, de sorte que tout le monde l’… suivi. »',
    ['a', 'ait'], 0,
    'C’est arrivé : l’indicatif. EN: a.'),
  ctl('Le but', '« Parle plus lentement, de sorte que tout le monde te … . »',
    ['suive', 'suit'], 0,
    'Un but : le subjonctif. EN: suive.'),
  ctl('Si bien que', 'Si bien que peut-il dire un but ?',
    ['non, jamais', 'oui, avec le subjonctif'], 0,
    'Toujours un résultat. EN: never.'),
], ['resultat']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le résultat ou le but',
    opener: {
      line: "Le groupe a compris, ou tu veux qu'il comprenne : ici un seul mode sépare ce qui est arrivé de ce que tu vises. EN: The group understood, or you want it to: here one mood separates what happened from what you aim for.",
      imageRef: 'lessons/cause-consequence/act08.jpg',
    },
    sections: [],
    milestone: "Tu mets l'indicatif après de sorte que pour un résultat, le subjonctif pour un but, et tu gardes si bien que pour ce qui est arrivé. EN: You can tell result from aim by the mood.",
    estScreens: 38, restPoints: ['a8-construire', 'a8-piege'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_CONSTRUIRE, A8_ECOUTE, A8_PIEGE, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: L'INTENSITÉ QUI PRODUIT L'EFFET
 *
 *  si / tellement ... que recalled (lesson 31 in B1), then tant, tant de,
 *  au point que / au point de, à tel point que, tel que, trop / assez ...
 *  pour que + subjonctif, trop ... pour + infinitive.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Tellement que, au point que',
  frSub: 'Neuf phrases, neuf effets',
  lines: [
    ln(E(1928)), ln(E(1929)), ln(E(1930)), ln(E(1931)), ln(E(1932)),
    ln(E(1934)), ln(E(1937)), ln(E(1942)), ln(E(1943)),
  ],
  questions: [
    { q: 'Première phrase : qu’est-il arrivé à la rivière ?', opts: ['elle est sortie de son lit', 'elle a gelé'], correct: 0, why: 'Il a tant plu que la rivière a débordé. EN: it burst its banks.' },
    { q: 'Deuxième phrase : pourquoi le jury a-t-il prolongé les entretiens ?', opts: ['il y avait beaucoup de candidats', 'un candidat était en retard'], correct: 0, why: 'Tant de candidats. EN: so many candidates.' },
    { q: 'Cinquième phrase : qu’est-il arrivé à la réunion ?', opts: ['elle a été suspendue', 'elle a continué dans le calme'], correct: 0, why: 'Au point que la réunion a été suspendue. EN: it was suspended.' },
    { q: 'Sixième phrase : tout le monde peut-il entrer ?', opts: ['non, la salle est trop petite', 'oui, sans problème'], correct: 0, why: 'Trop petite pour que tout le monde puisse entrer. EN: no.' },
    { q: 'Dernière phrase : pourquoi des commerçants ont-ils fermé ?', opts: ['la hausse était trop forte', 'ils partaient à la retraite'], correct: 0, why: 'La hausse est telle que… EN: the rise was too steep.' },
  ],
  audio: REC('rec-b2-15-intensite-ecoute'),
  say: REFRAME,
  terms: ['intensite'],
};

const A9_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-table',
  layer: 'core',
  sheetId: 'sheet-consequence',
  title: 'Six tournures d’intensité',
  cols: ['Tournure', 'Devant', 'Mode après'],
  rows: [
    { cells: ['si, tellement… que', 'un adjectif, un adverbe', 'indicatif'], say: fr(E(1931)),
      detail: { title: 'si, tellement… que', body: "L'intensité, puis que, puis l'effet : vu au B1. Tellement est plus courant, si plus écrit. EN: degree, que, then the effect.", say: fr(CL(1283)) } },
    { cells: ['tant, tellement… que', 'un verbe', 'indicatif'], say: fr(E(1928)),
      detail: { title: 'tant + verbe', body: "Après un verbe : il a tant plu, le film m'a tellement plu. EN: after a verb.", say: fr(E(1941)) } },
    { cells: ['tant de… que', 'un nom', 'indicatif'], say: fr(E(1929)),
      detail: { title: 'tant de, tellement de', body: "Devant un nom, avec de, et jamais avec beaucoup : tant de candidats. EN: before a noun, never with beaucoup.", say: fr(CL(1286)) } },
    { cells: ['au point que', 'une phrase', 'indicatif'], say: fr(E(1932)),
      detail: { title: 'au point que, au point de', body: "L'effet est extrême. Au point de + infinitif garde le même sujet : au point de ne plus pouvoir parler. EN: to the point that, or of.", say: fr(E(1944)) } },
    { cells: ['tel que', 'un nom, avec accord', 'indicatif'], say: fr(E(1943)),
      detail: { title: 'tel que, à tel point que', body: "Tel s'accorde avec le nom : une hausse telle que. À tel point que dit la même chose, en soutenu. EN: such that; tel agrees.", say: fr(E(1937)) } },
    { cells: ['trop, assez… pour que', 'un adjectif', 'subjonctif'], say: fr(E(1934)),
      detail: { title: 'trop… pour que', body: "L'effet n'a pas lieu, ou reste une idée : le subjonctif. Même sujet : trop tard pour appeler. EN: the effect stays an idea.", say: fr('fr.b2.opinions-et-avis.1911') } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['intensite'],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Un degré, puis l’effet',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('L’effet a eu lieu', [
      it(E(1928), 'tant + verbe'),
      it(E(1929), 'tant de + nom'),
      it(E(1930), 'tellement + verbe'),
      it(E(1932), 'au point que'),
    ], chk('« Il y avait … candidats que le jury a prolongé les entretiens. »',
      ['tant de', 'tant', 'si'], 0,
      'Devant un nom : tant de. EN: tant de.')),
    grp('L’effet reste une idée', [
      it(E(1934), 'trop petite pour que'),
      it(E(1935), 'trop tard pour + infinitif'),
      it(E(1936), 'assez clair pour que'),
      it(E(1942), 'trop vite pour que'),
    ], chk('« La salle est trop petite pour que tout le monde … entrer. »',
      ['puisse', 'peut'], 0,
      'Trop… pour que : le subjonctif. EN: puisse.')),
    ctl('Que ou de', '« Il était épuisé au point … s’endormir en réunion. »',
      ['de', 'que'], 0,
      'Un infinitif, le même sujet : au point de. EN: au point de.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['intensite'],
};

const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-exemples',
  layer: 'core',
  title: 'Cinq intensités à imiter',
  frSub: 'Du courant au soutenu',
  examples: [
    ex(E(1937), 'à tel point que : soutenu'),
    ex(E(1943), 'tel que : telle, avec la hausse'),
    ex(E(1944), 'au point de : même sujet, infinitif'),
    ex(E(1935), 'trop… pour + infinitif : un seul sujet'),
    ex('fr.b2.opinions-et-avis.1911', 'trop… pour que + subjonctif, déjà vu dans la leçon 6 du B2'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['intensite'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs d’intensité',
  errors: [
    {
      wrong: 'La salle est trop petite pour que tout le monde peut entrer.',
      right: fr(E(1934)),
      why: "Normal : après que, l'indicatif est fréquent. Mais avec trop… pour que, l'effet n'a pas lieu : le subjonctif, puisse. EN: the subjunctive.",
    },
    {
      wrong: 'Il y avait tant beaucoup de candidats que le jury a prolongé les entretiens.',
      right: fr(E(1929)),
      why: "Normal : so many se dit en deux mots en anglais. En français, tant de suffit, sans beaucoup. EN: tant de, no beaucoup.",
    },
    {
      wrong: "Il était épuisé au point que s'endormir en réunion.",
      right: fr(E(1933)),
      why: "Normal : au point que existe. Mais devant un infinitif, c'est au point de. EN: au point de before an infinitive.",
    },
    {
      wrong: 'La hausse est tel que certains commerçants ont fermé.',
      right: fr(E(1943)),
      why: "Normal : tel ressemble à un mot invariable. Il s'accorde pourtant avec hausse : telle. EN: telle agrees.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['intensite'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Relier : la fête de quartier', TEXTE_A9, [
  { q: 'Paire 1 : beaucoup de monde, les rues bloquées.', a: "Il est venu tant de monde (ou tellement de monde) que les rues étaient bloquées." },
  { q: 'Paire 2 : la musique, les voisins.', a: "La musique était si forte (ou tellement forte) que les voisins ont appelé la mairie." },
  { q: 'Paire 3 : la fatigue, les deux bénévoles.', a: "La fatigue est montée au point que deux bénévoles ont quitté leur poste avant la fin." },
  { q: 'Paire 4 : les bénévoles, le nettoyage.', a: "Les bénévoles étaient trop peu nombreux pour qu'on puisse tout nettoyer le soir même : pour que, puis le subjonctif." },
], 'rec-b2-15-texte-a9', ['intensite']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Devant un nom', '« Il a … dossiers qu’il refuse les nouveaux clients. »',
    ['tant de', 'si'], 0,
    'Devant un nom : tant de. EN: tant de.'),
  ctl('Le mode', 'Après trop… pour que, le verbe est…',
    ['au subjonctif', 'à l’indicatif'], 0,
    'L’effet n’a pas lieu. EN: the subjunctive.'),
  ctl('L’accord', '« Une hausse … que certains ont fermé. »',
    ['telle', 'tel'], 0,
    'Tel s’accorde avec hausse. EN: telle.'),
], ['intensite']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'L’intensité',
    opener: {
      line: "Il a tant plu que la rivière a débordé : ici la conséquence naît d'un degré, jusqu'au point où quelque chose cède. EN: It rained so much that the river overflowed: here the consequence comes from a degree, up to the point where something gives way.",
      imageRef: 'lessons/cause-consequence/act09.jpg',
    },
    sections: [],
    milestone: "Tu dis une conséquence d'intensité avec tant, tant de, au point que, tel que, et le subjonctif après trop ou assez… pour que. EN: You can express a consequence of degree.",
    estScreens: 38, restPoints: ['a9-table', 'a9-exemples'],
  },
  sections: [A9_ECOUTE, A9_TABLE, A9_CONSTRUIRE, A9_EXEMPLES, A9_ERREURS, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: LA CONSÉQUENCE DANS LE VERBE
 *
 *  provoquer, causer, entraîner, susciter, aboutir à: each with the nouns
 *  it goes with. Questions are built so only one verb fits (a preposition,
 *  a collocation that excludes the others), or accept all that fit.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a10-histoire',
  layer: 'core',
  title: 'Le communiqué d’Émilie',
  frSub: 'Cinq verbes, cinq partenaires',
  setting: 'Genève. Émilie travaille au service de communication de sa commune. Elle écrit le bilan de la semaine ; son collègue Karim relit les verbes de conséquence.',
  bubbles: [
    { from: 'narrator', fr: 'Karim relit le bilan et s’arrête sur chaque verbe de conséquence.', en: 'Karim rereads the summary and stops at every verb of consequence.' },
    { from: 'user', fr: fr(E(1946)), en: en(E(1946)) },
    { from: 'coach', fr: 'Susciter : une réaction, un sentiment. On ne suscite pas un accident.', en: 'Susciter: a reaction, a feeling. You do not susciter an accident.', warn: 'Susciter' },
    { from: 'user', fr: fr(E(1948)), en: en(E(1948)) },
    { from: 'coach', fr: 'Entraîner : une suite presque automatique. La grève, puis les annulations.', en: 'Entraîner: an almost automatic sequel. The strike, then the cancellations.', warn: 'Entraîner' },
    { from: 'user', fr: fr(E(1950)), en: en(E(1950)) },
    { from: 'coach', fr: 'Aboutir à : la fin d’un long processus. N’oublie jamais le à.', en: 'Aboutir à: the end of a long process. Never forget the à.', warn: 'Aboutir à' },
    { from: 'user', fr: fr(E(1947)), en: en(E(1947)) },
    { from: 'coach', fr: 'Provoquer, ou causer : un effet soudain, souvent négatif.', en: 'Provoquer, or causer: a sudden effect, often a negative one.', warn: 'Provoquer, causer' },
  ],
  closing: { fr: 'Cinq verbes, et chacun a ses noms préférés.', en: 'Five verbs, and each has its favourite nouns.' },
  audio: REC('rec-b2-15-emilie'),
  say: REFRAME,
  terms: ['effet'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-consequence',
  title: 'Le verbe porte la suite',
  frSub: 'Cinq verbes de conséquence',
  hint: 'Quatre cartes. Regarde le nom qui suit chaque verbe.',
  audio: REC('rec-b2-15-effet'),
  say: REFRAME,
  terms: ['effet'],
  cards: [
    {
      head: 'Un effet soudain', label: 'provoquer, causer',
      fr: fr(E(1949)), sub: rsOf(E(1949)),
      body: "Provoquer et causer : un accident, des dégâts, un fou rire, la colère. Causer est surtout négatif. EN: a sudden, often negative effect.",
    },
    {
      head: 'Une suite logique', label: 'entraîner',
      fr: fr(E(1953)), sub: rsOf(E(1953)),
      body: "Entraîner : la conséquence suit presque mécaniquement, souvent un coût, un retard, une baisse. Sans préposition : entraîner des frais. EN: leads to, almost automatically.",
    },
    {
      head: 'Une réaction', label: 'susciter',
      fr: fr(E(1952)), sub: rsOf(E(1952)),
      body: "Susciter : faire naître une réaction ou un sentiment, l'intérêt, un débat, des questions, la méfiance. EN: to arouse a reaction.",
    },
    {
      head: 'La fin d’un processus', label: 'aboutir à',
      fr: fr(E(1954)), sub: rsOf(E(1954)),
      body: "Aboutir à : où mène une longue démarche, un accord ou rien du tout. Sans complément, aboutir veut dire réussir. EN: to end in; alone, to succeed.",
    },
  ],
};

const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-trier',
  layer: 'core',
  size: 'lg',
  title: 'Le bon verbe pour le bon nom',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Une réaction, un sentiment', [
      it('fr.b2.universite.002', 'un vif débat'),
      it(E(1946), 'de vives réactions'),
      it(E(1952), 'l’intérêt'),
      it(E(1960), 'de nombreuses questions'),
    ], chk('« Ce projet … l’intérêt des jeunes. »',
      ['suscite', 'aboutit à'], 0,
      'Une réaction : susciter. EN: suscite.')),
    grp('Un effet, une fin', [
      it(E(1947), 'des accidents'),
      it(E(1948), 'l’annulation des vols'),
      it(E(1949), 'des dégâts'),
      it(E(1950), 'un accord'),
    ], chk('« Les négociations ont … un accord. »',
      ['abouti à', 'suscité', 'causé'], 0,
      'La fin d’un processus : aboutir à. EN: abouti à.')),
    ctl('Le piège', 'Suscite-t-on un accident ?',
      ['non : on le provoque ou on le cause', 'oui, c’est le verbe habituel'], 0,
      'Un accident se provoque ; on suscite une réaction. EN: no.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['effet'],
};

const A10_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a10-flash',
  layer: 'core',
  title: 'Huit associations à retenir',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'to spark strong reactions', back: 'susciter de vives réactions', say: fr(E(1946)) },
    { front: 'to cause several accidents', back: 'provoquer plusieurs accidents', say: fr(E(1947)) },
    { front: 'to lead to cancellations', back: 'entraîner l’annulation', say: fr(E(1948)) },
    { front: 'to cause major damage', back: 'causer d’importants dégâts', say: fr(E(1949)) },
    { front: 'to result in an agreement', back: 'aboutir à un accord', say: fr(E(1950)) },
    { front: 'to arouse interest', back: 'susciter l’intérêt', say: fr(E(1952)) },
    { front: 'to come to nothing', back: 'n’aboutir à rien', say: fr(E(1954)) },
    { front: 'to raise questions', back: 'susciter des questions', say: fr(E(1960)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['effet'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Le verbe qui ne va pas avec le nom',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Chaque verbe a ses noms',
    body: "On provoque ou on cause un accident, on suscite une réaction, on entraîne une suite, on aboutit à un résultat. Seul aboutir prend à. EN: each verb has its nouns; only aboutir takes à.",
  },
  cards: [
    trap(E(1950), 'aboutir à', 'Les négociations ont abouti un accord.', 'Aboutir à : n’oublie pas à. EN: à.'),
    trap(E(1947), 'provoquer', 'Le verglas a suscité plusieurs accidents ce matin.', 'Un accident se provoque ; on suscite une réaction. EN: provoquer.'),
    trap(E(1946), 'susciter', 'Cette réforme a abouti de vives réactions.', 'Des réactions se suscitent. EN: susciter.'),
    trap(E(1948), 'entraîner', 'La grève a entraîné à l’annulation de nombreux vols.', 'Entraîner, sans à. EN: no à.'),
    trap(E(1949), 'causer', 'L’orage a causé à d’importants dégâts dans le quartier.', 'Causer, sans à. EN: no à.'),
    trap(E(1954), 'aboutir à rien', 'Les discussions n’ont abouti rien.', 'N’aboutir à rien : avec à. EN: à.'),
  ],
  drill: [
    { promptSay: 'Les négociations ont abouti … un accord.', opts: ['à', 'de'], correct: 0 },
    { promptSay: 'Cette réforme a … de vives réactions.', opts: ['suscité', 'abouti'], correct: 0 },
    { promptSay: 'Le verglas a … plusieurs accidents.', opts: ['provoqué', 'suscité'], correct: 0 },
    { promptSay: 'Un retard de livraison … souvent des frais supplémentaires.', opts: ['entraîne', 'aboutit'], correct: 0 },
    { promptSay: 'Le projet a enfin … après trois ans d’efforts.', opts: ['abouti', 'suscité'], correct: 0 },
    { promptSay: 'Le reportage a suscité de nombreuses … .', opts: ['questions', 'dégâts'], correct: 0 },
    { promptSay: 'L’orage a causé d’importants … .', opts: ['dégâts', 'intérêts'], correct: 0 },
    { promptSay: 'Les discussions n’ont abouti … rien.', opts: ['à', 'de'], correct: 0 },
  ],
  steps: STEPS('Chaque verbe a ses noms', 'Les associations qui sonnent faux'),
  audio: REC('rec-b2-15-piege-effet'),
  say: REFRAME,
  terms: ['effet'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Compléter : la brève du quartier', TEXTE_A10, [
  { q: 'Blanc 1 : la fermeture et la colère.', a: "A provoqué ou a suscité la colère : les deux vont avec un sentiment." },
  { q: 'Blanc 2 : des retards quotidiens.', a: "Elle entraîne (ou provoque, ou cause) des retards : une suite presque automatique." },
  { q: 'Blancs 3 et 4 : les dégâts, puis le compromis.', a: "Les pluies ont causé (ou provoqué) des dégâts ; la réunion a abouti à un compromis, au bout d'une démarche." },
  { q: 'Blanc 5 : les critiques.', a: "Cette solution suscite déjà de nombreuses critiques : une réaction du public." },
], 'rec-b2-15-texte-a10', ['effet']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La préposition', 'Lequel de ces verbes prend à ?',
    ['aboutir', 'entraîner', 'provoquer'], 0,
    'Aboutir à un accord. EN: aboutir.'),
  ctl('La réaction', '« Le reportage a … de nombreuses questions. »',
    ['suscité', 'abouti'], 0,
    'Une réaction : susciter. EN: suscité.'),
  ctl('Seul', '« Le projet a enfin abouti. » Aboutir veut dire ici…',
    ['réussir', 'échouer'], 0,
    'Sans complément : réussir. EN: to succeed.'),
], ['effet']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'La conséquence dans le verbe',
    opener: {
      line: "Une grève, des vols annulés, une colère, un accord : ici un verbe porte la conséquence, et chaque verbe choisit ses noms. EN: A strike, cancelled flights, anger, an agreement: here a verb carries the consequence, and each verb picks its nouns.",
      imageRef: 'lessons/cause-consequence/act10.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre provoquer, causer, entraîner, susciter et aboutir à selon le nom qui suit, et tu n'oublies plus le à d'aboutir. EN: You can carry a consequence in the right verb.",
    estScreens: 36, restPoints: ['a10-trier', 'a10-piege'],
  },
  sections: [A10_HISTOIRE, A10_CARTES, A10_TRIER, A10_FLASH, A10_PIEGE, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: DOSER LA CERTITUDE
 *
 *  certain, probable (sans doute, probablement, vraisemblablement, tout
 *  porte à croire que + indicatif), an impression (il semble que +
 *  subjonctif, lesson 15 in B1), reported (selon, d'après, the journalistic
 *  conditionnel, lesson 8 in B1), unknown (on ignore encore si).
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a11-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le flash info',
  frSub: 'Neuf phrases : sûr, probable ou rapporté',
  lines: [
    ln(E(1961)), ln(E(1962)), ln(E(1963)), ln(E(1964)), ln(E(1965)),
    ln(E(1967)), ln(E(1968)), ln(E(1972)), ln(E(1975)),
  ],
  questions: [
    { q: 'Première phrase : la cause de l’incendie est-elle confirmée ?', opts: ['non, elle est rapportée', 'oui'], correct: 0, why: 'Serait dû : le conditionnel des médias. EN: reported.' },
    { q: 'Troisième et quatrième phrases : laquelle est certaine ?', opts: ['la quatrième', 'la troisième'], correct: 0, why: 'Sans aucun doute : certain. Sans doute : probable. EN: the fourth.' },
    { q: 'Sixième phrase : d’où viendrait la fuite ?', opts: ['du toit', 'de la cave'], correct: 0, why: 'Tout porte à croire qu’elle provient du toit. EN: the roof.' },
    { q: 'Huitième phrase : selon qui le verglas a-t-il causé l’accident ?', opts: ['la police', 'un témoin'], correct: 0, why: 'D’après la police, au conditionnel passé. EN: the police.' },
    { q: 'Dernière phrase : sait-on si les deux faits sont liés ?', opts: ['non, pas encore', 'oui'], correct: 0, why: 'On ignore encore si… EN: not yet.' },
  ],
  audio: REC('rec-b2-15-certitude-ecoute'),
  say: REFRAME,
  terms: ['certitude'],
};

const A11_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a11-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-certitude',
  title: 'Sûr, probable, rapporté',
  frSub: 'Quatre degrés de certitude',
  hint: 'Quatre cartes. La troisième reprend le conditionnel du B1.',
  audio: REC('rec-b2-15-certitude'),
  say: REFRAME,
  terms: ['certitude'],
  cards: [
    {
      head: 'Probable', label: 'sans doute',
      fr: fr(E(1963)), sub: rsOf(E(1963)),
      body: "Sans doute veut dire probablement, pas sans aucun doute. Pour la certitude : sans aucun doute, il est certain que. EN: sans doute means probably.",
    },
    {
      head: 'Une impression', label: Cap(SUBJ_DECL_REF),
      fr: fr(E(1965)), sub: rsOf(E(1965)),
      body: `Il semble que + subjonctif ; il semblerait que, plus prudent encore. « ${B115_REFRAME} » EN: ${B115_REFRAME_EN}`,
    },
    {
      head: 'Une information rapportée', label: Cap(COND_REF),
      fr: fr(E(1961)), sub: rsOf(E(1961)),
      body: `« ${B108_REFRAME} » Dans la presse, il dit aussi : on l'annonce, sans le garantir. Au passé : aurait causé. EN: ${B108_REFRAME_EN}`,
    },
    {
      head: 'Des indices', label: 'tout porte à croire que',
      fr: fr(E(1967)), sub: rsOf(E(1967)),
      body: "Tout porte à croire que, puis l'indicatif : les indices vont tous dans le même sens. Probablement et vraisemblablement disent la même prudence. EN: all the evidence points that way.",
    },
  ],
};

const A11_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-trier',
  layer: 'core',
  size: 'lg',
  title: 'Probable ou rapporté',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Probable', [
      it(E(1963), 'sans doute'),
      it(E(1968), 'probablement'),
      it(E(1969), 'vraisemblablement'),
      it(E(1977), 'sans doute, pour plusieurs facteurs'),
    ], chk('« Le retard est sans doute dû à la neige. » Celui qui parle est…',
      ['presque sûr', 'absolument sûr', 'sûr du contraire'], 0,
      'Sans doute : probablement. EN: almost sure.')),
    grp('Rapporté, pas vérifié', [
      it(E(1961), 'serait dû'),
      it(E(1962), 'aurait perdu'),
      it(E(1972), 'aurait été causé'),
      it('fr.b1.strategies-de-comprehension.1162', 'serait plus faible, de la leçon 37 du B1'),
    ], chk('« L’incendie serait dû à un court-circuit. » Le journaliste…',
      ['rapporte sans garantir', 'affirme un fait prouvé'], 0,
      'Le conditionnel des médias. EN: reports without vouching.')),
    ctl('Le mode', '« Il semble que la panne … du réseau. »',
      ['vienne', 'venir'], 0,
      'Il semble que + subjonctif. EN: vienne.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['certitude'],
};

const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a11-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de certitude',
  errors: [
    {
      wrong: "Les pompiers l'ont confirmé : l'incendie est sans doute dû à un court-circuit.",
      right: "Les pompiers l'ont confirmé : l'incendie est dû à un court-circuit.",
      why: "Normal : without doubt ressemble à sans doute. Mais sans doute veut dire probablement ; un fait confirmé n'a pas besoin de nuance. EN: sans doute is probably.",
    },
    {
      wrong: "D'après la police, l'accident aurait causé par le verglas.",
      right: fr(E(1972)),
      why: "Normal : on pense à aurait causé. Mais l'accident a été causé : au conditionnel passé du passif, aurait été causé. EN: aurait été causé.",
    },
    {
      wrong: 'Sans doute le retard est dû à la neige.',
      right: fr(E(1963)),
      why: `Normal : à l'oral, sans doute ouvre souvent la phrase. À l'écrit, en tête, il fait inverser, comme dans ${INVERSION_REF} ; plus simple, mets-le après le verbe. EN: invert, or move it.`,
    },
    {
      wrong: 'Tout porte à croire que la fuite provienne du toit.',
      right: fr(E(1967)),
      why: "Normal : croire fait penser au doute. Mais tout porte à croire que affirme presque : l'indicatif, provient. EN: the indicative.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['certitude'],
};

const A11_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a11-focus',
  layer: 'core',
  sheetId: 'sheet-certitude',
  title: 'Cinq degrés, quatre repères',
  points: [
    "Certain : il est certain que, sans aucun doute, ou le verbe seul. EN: certain.",
    "Probable : sans doute, probablement, vraisemblablement, tout porte à croire que. EN: probable.",
    "Une impression : il semble que, il semblerait que, avec le subjonctif. EN: an impression.",
    "Rapporté ou inconnu : selon, d'après, le conditionnel ; on ignore encore si. EN: reported or unknown.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['certitude'],
};

const A11_TEXTE = dansUnTexte('a11-texte', 'Réécrire : la brève de l’entrepôt', TEXTE_A11, [
  { q: 'Réécris la phrase sur la cause du feu.', a: "Le feu serait dû à un court-circuit dans le local électrique ; ou : selon les premiers éléments, un court-circuit aurait provoqué l'incendie." },
  { q: 'Et la phrase sur les dégâts ?', a: "Les dégâts s'élèveraient à plusieurs millions d'euros : le conditionnel, puisque rien n'est encore chiffré avec certitude." },
  { q: 'Quelles phrases peux-tu garder à l’indicatif ?', a: "Le gardien a donné l'alerte, personne n'a été blessé, le propriétaire a l'intention de reconstruire : ce sont des faits établis ou des déclarations." },
  { q: 'Où placer sans doute, si tu l’emploies ?', a: "Après le verbe : le feu est sans doute parti du local électrique. En tête de phrase, il faudrait l'inversion." },
], 'rec-b2-15-texte-a11', ['certitude']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Sans doute', 'Sans doute veut dire…',
    ['probablement', 'certainement', 'peut-être pas'], 0,
    'Probablement. EN: probably.'),
  ctl('Le conditionnel', '« Le suspect serait en fuite. » Le journaliste…',
    ['rapporte une information', 'exprime un souhait'], 0,
    'Une information rapportée. EN: reported.'),
  ctl('Le mode', '« Tout porte à croire que la fuite … du toit. »',
    ['provient', 'provienne'], 0,
    'Tout porte à croire que + indicatif. EN: provient.'),
], ['certitude']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Doser la certitude',
    opener: {
      line: "Un incendie cette nuit, et une cause que personne n'a encore prouvée : ici tu dis à quel point tu es sûr, sans en dire trop ni trop peu. EN: A fire last night and a cause nobody has proved yet: here you say how sure you are, neither too much nor too little.",
      imageRef: 'lessons/cause-consequence/act11.jpg',
    },
    sections: [],
    milestone: "Tu dis une cause certaine, probable, rapportée ou inconnue : sans doute, il semble que, le conditionnel des médias, on ignore encore si. EN: You can grade how sure you are of a cause.",
    estScreens: 36, restPoints: ['a11-trier', 'a11-focus'],
  },
  sections: [A11_ECOUTE, A11_CARTES, A11_TRIER, A11_ERREURS, A11_FOCUS, A11_TEXTE, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12: TON ANALYSE
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'L’analyse que tu vas imiter',
  frSub: 'Pourquoi tant de jeunes citadins renoncent à la voiture',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'desservi', en: 'served (by transport)', note: 'Un quartier bien desservi a beaucoup de transports.' },
    { word: 'auto-écoles', en: 'driving schools', note: 'Les écoles où on apprend à conduire.' },
    { word: 'report', en: 'postponement', note: 'Le fait de remettre à plus tard.' },
  ],
  questions: [
    { q: 'Global : quel est le plan de ce texte ?', a: "Le phénomène, puis ses causes, puis ses conséquences, puis ses limites, et une question ouverte pour finir." },
    { q: 'Détail : quelle cause est présentée comme un fait établi ?', a: "Le coût : étant donné que le prix des leçons, de l'assurance et du stationnement augmente." },
    { q: 'Quelle cause l’auteur écarte-t-il, et laquelle garde-t-il ?', a: "Il écarte l'idée que tous les jeunes soient militants (ce n'est pas que… soient) et garde la pollution comme sujet quotidien (c'est que…)." },
    { q: 'Détail : quelles conséquences sont données, et avec quels liens ?', a: "La fermeture d'auto-écoles (faute de clients) et les terrasses (d'où une nouvelle vie dans certaines rues)." },
    { q: 'Inférence : pourquoi parler de « report » plutôt que de « renoncement » ?', a: "Parce qu'il semble que beaucoup reviennent à la voiture plus tard : le choix serait retardé, pas abandonné." },
    { q: 'Position : l’auteur est-il catégorique ?', a: "Non : il semble que, serait, sans doute, reste à savoir. Il dose sa certitude du début à la fin." },
  ],
  audio: REC('rec-b2-15-modele'),
  say: REFRAME,
  terms: ['certitude', 'lien'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a12-plan',
  layer: 'core',
  sheetId: 'sheet-analyse',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Des causes graduées, des conséquences variées',
  steps: [
    'Présente le phénomène en une ou deux phrases, sans chiffres inventés. EN: introduce the phenomenon.',
    'Donne deux ou trois causes, chacune avec son degré : admise, probable, écartée. EN: two or three graded causes.',
    'Montre deux ou trois conséquences, positives et négatives, avec des liens variés. EN: two or three consequences.',
    'Nuance ce qui n’est pas prouvé : il semble que, sans doute, le conditionnel. EN: grade your certainty.',
    'Conclus par une question ouverte, puis relis : pas plus de deux parce que, ni plus de deux donc. EN: conclude, then check.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lien', 'certitude'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a12-usages',
  layer: 'core',
  sheetId: 'sheet-analyse',
  title: 'Quatre phrases que toute analyse contient',
  cases: [
    { situation: 'Tu présentes le phénomène', fr: fr(E(1978)), en: en(E(1978)) },
    { situation: 'Tu poses une cause admise', fr: fr(E(1981)), en: en(E(1981)) },
    { situation: 'Tu écartes une fausse explication', fr: fr(E(1982)), en: en(E(1982)) },
    { situation: 'Tu doses une cause probable', fr: fr(E(1980)), en: en(E(1980)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['admise', 'certitude'],
};

const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-scenario',
  layer: 'core',
  title: 'L’interview à la radio',
  frSub: 'Six tours, à voix haute',
  setting: 'Une radio locale prépare une émission sur le départ des citadins vers la campagne. La journaliste t’interroge : tu as quitté la ville l’an dernier (une situation inventée).',
  turns: [
    {
      ai: 'Pourquoi avez-vous quitté la ville ?', en: 'Why did you leave the city?',
      user: 'Étant donné que je travaille surtout à distance, rien ne me retenait en ville.',
      userEn: 'Given that I mostly work remotely, nothing was keeping me in the city. (An admitted cause: étant donné que.)',
      alts: [
        { fr: 'Vu que je télétravaille presque tous les jours, je n’avais plus besoin d’habiter près du bureau.', en: 'Seeing as I work from home almost every day, I no longer needed to live near the office. (The same, more casual.)' },
        { fr: 'Je suis parti parce que les loyers devenaient impossibles.', en: 'I left because rents were becoming impossible. (Parce que: the plain link, also right.)' },
      ],
    },
    {
      ai: 'C’était donc une question d’argent ?', en: 'So it was a question of money?',
      user: 'Ce n’est pas que je sois mal payé, c’est que les loyers ont beaucoup augmenté dans mon quartier.',
      userEn: 'It is not that I am badly paid, it is that rents went up a lot in my neighbourhood. (A rejected cause, then the real one.)',
      alts: [
        { fr: 'En partie : les loyers avaient tellement augmenté que je ne pouvais plus rien mettre de côté.', en: 'Partly: rents had gone up so much that I could not save anything. (An intensity.)' },
        { fr: 'Non pas que la ville me déplaise, mais j’avais besoin d’espace.', en: 'Not that I dislike the city, but I needed space. (Non pas que + subjunctive.)' },
      ],
    },
    {
      ai: 'Et votre nouveau village, comment a-t-il réagi ?', en: 'And your new village, how did it react?',
      user: 'Notre arrivée a suscité de la curiosité, et parfois un peu de méfiance.',
      userEn: 'Our arrival aroused curiosity, and sometimes a little suspicion. (Susciter: a reaction.)',
      alts: [
        { fr: 'L’arrivée de nouvelles familles a entraîné la réouverture de la classe du village.', en: 'The arrival of new families led to the village class reopening. (Entraîner.)' },
        { fr: 'Certains habitants se plaignent, sous prétexte que nous faisons monter les prix.', en: 'Some residents complain, on the grounds that we are pushing prices up. (Sous prétexte que: you doubt it.)' },
      ],
    },
    {
      ai: 'On dit que ces départs font flamber les prix à la campagne.', en: 'People say these departures are sending prices soaring in the countryside.',
      user: 'Ce serait vrai dans certains villages, mais on manque encore de données.',
      userEn: 'That may be true in some villages, but there is still a lack of data. (The conditional: reported, not proven.)',
      alts: [
        { fr: 'Il semble que les prix aient augmenté, mais pas partout.', en: 'It seems that prices have risen, but not everywhere. (Il semble que + subjunctive.)' },
        { fr: 'C’est sans doute vrai près des grandes villes.', en: 'It is probably true near the big cities. (Sans doute: probably.)' },
      ],
    },
    {
      ai: 'Qu’est-ce qui vous manque le plus ?', en: 'What do you miss most?',
      user: 'Faute de bus, je prends la voiture pour tout, d’où des frais que je n’avais pas prévus.',
      userEn: 'With no buses, I take the car for everything, hence costs I had not planned for. (Faute de, then d’où + noun.)',
      alts: [
        { fr: 'Le cinéma : il y en a si peu que je fais quarante minutes de route pour un film.', en: 'The cinema: there are so few that I drive forty minutes for a film. (An intensity.)' },
        { fr: 'Mes amis : à force de reporter les visites, on se voit moins.', en: 'My friends: by putting off visits again and again, we see each other less. (À force de.)' },
      ],
    },
    {
      ai: 'Referiez-vous le même choix ?', en: 'Would you make the same choice again?',
      user: 'Oui, d’autant plus que mes enfants adorent l’école du village.',
      userEn: 'Yes, all the more so as my children love the village school. (D’autant plus que: one more reason.)',
      alts: [
        { fr: 'Sans aucun doute : je vis mieux, même si tout est plus loin.', en: 'Without any doubt: I live better, even if everything is further away. (Certainty.)' },
        { fr: 'Oui, dans la mesure où mon travail reste à distance.', en: 'Yes, insofar as my job stays remote. (Dans la mesure où: a cause within a limit.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['admise', 'contestee', 'certitude'],
};

const A12_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a12-mission',
  title: 'Ton analyse d’un phénomène de société',
  frSub: 'Mission écrite, format DELF B2',
  brief: "Un magazine en ligne ouvre une rubrique « Comprendre notre époque » et publie les analyses de ses lecteurs. Choisis un phénomène : le départ de nombreux citadins vers les petites villes et la campagne, ou le succès du télétravail. Explique-le : ses causes, ses conséquences, et ce qui reste incertain.",
  briefEn: 'An online magazine is opening a section called "Understanding our times" and publishes its readers’ analyses. Choose a phenomenon: many city dwellers moving to small towns and the countryside, or the success of remote working. Explain it: its causes, its consequences, and what remains uncertain.',
  produce: "Écris une analyse de 200 à 250 mots : au moins trois causes et deux conséquences, avec au moins six liens différents (une cause admise, une cause écartée ou mise en doute, une cause dans un nom ou un verbe, une conséquence autre que donc, une intensité ou un verbe d'effet) et au moins une nuance de certitude. Pas plus de deux parce que, ni plus de deux donc.",
  responseSpec: { kind: 'text', minWords: 200, maxWords: 275 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          "3 : Une vraie analyse pour un magazine : le phénomène présenté, au moins trois causes et deux conséquences, ce qui reste incertain, et une conclusion. Entre 200 et 250 mots.",
          '2 : L’analyse existe, mais il manque une cause ou une conséquence, ou la conclusion, ou la longueur sort un peu des limites.',
          '1 : Un témoignage ou une opinion sans analyse, ou un texte beaucoup trop court.',
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          "3 : Un plan clair (le phénomène, les causes, les conséquences, les limites), des paragraphes, et des liens qui disent exactement ce que tu sais : rien de présenté comme prouvé qui ne l'est pas.",
          '2 : Le texte se suit, mais un lien dit autre chose que ce que tu veux dire, ou une cause douteuse est donnée comme certaine.',
          '1 : On ne distingue pas les causes des conséquences, ou tout est affirmé avec la même certitude.',
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue des structures',
        maxPoints: 2,
        descriptors: [
          "2 : Au moins six liens différents : une cause admise, une cause écartée ou mise en doute, une préposition ou un verbe de cause, une conséquence autre que donc, une intensité ou un verbe d'effet, et une nuance de certitude.",
          '1 : Les liens restent les mêmes : parce que, donc, et un ou deux autres, répétés.',
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          "2 : Les constructions sont justes : le subjonctif après non que, ce n'est pas que et trop… pour que ; d'où avec un nom ; dû accordé ; aboutir à ; pas de que devant un nom.",
          "1 : Des erreurs fréquentes (est à cause de, d'où + verbe, ce n'est pas qu'il est, trop… pour que + indicatif) gênent parfois la lecture.",
        ],
      },
      {
        key: 'registre',
        label: 'Registre et ton',
        maxPoints: 2,
        descriptors: [
          "2 : Le ton d'un article de magazine : neutre, précis, soutenu sans raideur, sans du coup ni langage de conversation.",
          '1 : Le texte sonne comme une conversation (du coup, vu que partout, genre) ou comme un rapport administratif figé.',
        ],
      },
    ],
  },
  scaffold: [
    'Depuis quelques années,',
    'Ce phénomène s’explique d’abord par',
    'Étant donné que',
    'Ce n’est pas que',
    'D’où',
    'Il semble que',
    'Reste à savoir si',
  ],
  modelAnswer: "Pourquoi tant de citadins partent-ils vivre à la campagne ?\n\nDepuis quelques années, de nombreuses familles quittent les grandes villes pour s'installer dans des villages ou de petites villes. Ce phénomène a plusieurs causes, et ses conséquences sont contrastées.\n\nIl s'explique d'abord par la hausse des loyers : dans certains quartiers, les prix ont tellement augmenté que les familles ne peuvent plus s'y loger. Ensuite, étant donné que beaucoup de salariés travaillent désormais à distance, vivre loin du bureau n'est plus un obstacle. Le télétravail a sans doute accéléré le mouvement. Ce n'est pas que la ville ait perdu son charme, c'est qu'elle est devenue trop chère et trop bruyante pour élever des enfants. Le besoin d'espace et de nature compte aussi.\n\nCes départs profitent aux villages : certains renaissent, d'où la réouverture d'écoles et de commerces. Mais ce mouvement entraîne aussi une hausse des prix, si bien que des jeunes nés sur place ne trouvent plus à se loger. Faute de transports en commun, les nouveaux habitants dépendent de la voiture. Cette situation suscite parfois des tensions : certains habitants de longue date reprochent aux nouveaux venus de faire monter les prix.\n\nEnfin, il faut rester prudent. Selon certains agents immobiliers, le mouvement ralentirait depuis un an, et on ignore encore combien de familles reviendront en ville. Le phénomène est réel, mais sa durée reste incertaine : reste à savoir s'il transformera durablement nos campagnes.\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : le phénomène présenté, trois causes (les loyers, le télétravail, le besoin d'espace), trois conséquences (les villages qui renaissent, la hausse des prix, la voiture), ce qui reste incertain et une conclusion ouverte.\n2. Cohérence : un paragraphe par étape (le phénomène, les causes, les conséquences, les limites) ; la cause probable est dite avec sans doute, l'information non vérifiée au conditionnel.\n3. Étendue : s'explique par, étant donné que, ce n'est pas que… c'est que, d'où, entraîne, si bien que, faute de, suscite, tellement… que, sans doute, selon et le conditionnel ; aucun parce que, aucun donc.\n4. Correction : ait perdu au subjonctif après ce n'est pas que ; d'où + nom ; faute de sans article.\n5. Registre : un article de magazine, neutre et soutenu, sans langage de conversation.",
  modelAnswerEn: "Why are so many city dwellers moving to the countryside? For some years now, many families have been leaving the big cities to settle in villages or small towns. This phenomenon has several causes, and its consequences are mixed. It is explained first of all by rising rents: in some neighbourhoods, prices have gone up so much that families can no longer find housing there. Next, given that many employees now work remotely, living far from the office is no longer an obstacle. Remote working has probably sped up the trend. It is not that the city has lost its charm, it is that it has become too expensive and too noisy to raise children. The need for space and nature also counts. These departures benefit the villages: some are coming back to life, hence schools and shops reopening. But the trend also pushes prices up, so young people born locally can no longer find housing. For lack of public transport, the newcomers depend on the car. This situation sometimes creates tension: some long-standing residents blame the newcomers for pushing prices up. Finally, we must stay cautious. According to some estate agents, the trend has reportedly been slowing for a year, and it is not yet known how many families will return to the city. The phenomenon is real, but how long it will last is uncertain: it remains to be seen whether it will change our countryside for good. The marker's notes (not counted): 1. Task: the phenomenon introduced, three causes, three consequences, what remains uncertain and an open conclusion. 2. Coherence: one paragraph per stage; the probable cause is hedged with sans doute, the unverified information is in the conditional. 3. Range: a wide set of links, no parce que, no donc. 4. Accuracy: subjunctive after ce n'est pas que; d'où + noun; faute de with no article. 5. Register: a neutral, formal magazine article.",
  watchFor: [
    { pattern: 'The same two links everywhere: more than two parce que or more than two donc, with nothing else to carry cause or consequence.', criterion: 'etendue', feedback: 'Varie : étant donné que, faute de, s’explique par, d’où, entraîne. Parce que et donc ne sont pas faux, mais seuls ils aplatissent le texte.', ref: 'a7-hacks' },
    { pattern: 'Puisque used to answer pourquoi or for a new cause; étant donné que or du fait que with que before a noun.', criterion: 'correction', feedback: 'Puisque suppose une cause connue ; devant un nom, étant donné, vu, du fait de, sans que.', ref: 'a2-erreurs' },
    { pattern: "Dans la mesure du possible used as a cause, or d'autant plus parce que.", criterion: 'correction', feedback: "Dans la mesure où pour la cause ; d'autant plus que, en un bloc.", ref: 'a3-piege' },
    { pattern: "The indicative after non que or ce n'est pas que, or the subjunctive after c'est que or sous prétexte que.", criterion: 'correction', feedback: "La cause écartée au subjonctif, la vraie à l'indicatif : ce n'est pas qu'elle soit…, c'est qu'elle est…", ref: 'a4-piege' },
    { pattern: 'An article after par or faute de (par la peur, faute du temps), or grâce à for a negative effect.', criterion: 'correction', feedback: 'Par peur, faute de temps : sans article. Grâce à, seulement pour un bon résultat.', ref: 'a5-erreurs' },
    { pattern: '« Est à cause de » instead of a verb of cause, or dû not agreed with its subject.', criterion: 'correction', feedback: 'Le retard est dû à…, la hausse est due à…, ou s’explique par.', ref: 'a6-erreurs' },
    { pattern: "D'où followed by a clause or by que, or aussi at the head of a written sentence without inversion.", criterion: 'correction', feedback: "D'où + un nom : d'où la hausse. Aussi en tête : aussi a-t-on vu…", ref: 'a7-piege' },
    { pattern: 'The wrong mood after de sorte que, si bien que + subjunctive, or trop… pour que + indicative.', criterion: 'correction', feedback: 'Un résultat à l’indicatif, un but au subjonctif ; trop… pour que + subjonctif.', ref: 'a8-piege' },
    { pattern: 'A verb of effect with the wrong noun or construction (susciter un accident, aboutir un accord).', criterion: 'etendue', feedback: 'On provoque un accident, on suscite une réaction, on aboutit à un accord.', ref: 'a10-piege' },
    { pattern: 'An unproven cause stated as certain, invented statistics given as fact, or sans doute used to mean certainly.', criterion: 'coherence', feedback: 'Dis ce que tu sais : sans doute pour le probable, le conditionnel ou selon pour ce qui est rapporté.', ref: 'a11-erreurs' },
    { pattern: 'Conversational links in the written analysis (du coup, vu que repeated, c’est pour ça que).', criterion: 'registre', feedback: 'Dans un article : par conséquent, étant donné que, c’est pourquoi.', ref: 'a7-cartes' },
    { pattern: 'Fewer than three causes or two consequences, no conclusion, or a body outside 200 to 250 words.', criterion: 'tache', feedback: 'Reprends le plan : le phénomène, trois causes, deux conséquences, les limites, une conclusion.', ref: 'a12-plan' },
  ],
  graderNotes: [
    'Count the words of the body only; the title does not count. 200 to 250 with 10% tolerance (180 to 275) before criterion « tache » loses a point. responseSpec allows 275.',
    'Judge each link by WHAT IT CLAIMS, not only by its form: a cause the learner cannot know presented as a fact costs « coherence » once, not per occurrence.',
    'Parce que and donc are never errors. Only their repetition (more than two of either) costs a point, under « etendue ».',
    '« Suite à » is accepted (widespread, criticised by usage guides): never mark it wrong; « à la suite de » earns no extra credit. « Il semble que » + indicative is not marked wrong.',
    'Invented examples are welcome; precise figures presented as real facts without a source cost one « coherence » point. Do not ask for real statistics.',
    'Purpose (pour, afin de, pour que) belongs to a later lesson: accept it when correct, give it no range credit. Concession (bien que, même si) is lesson 16 in B2: accept it, give it no range credit.',
    'Register: « vu que » once is acceptable in a magazine; « du coup » costs one « registre » point.',
    'Accept regional vocabulary and settings (Québec, Belgium, Switzerland, West Africa), and either topic of the brief.',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 31 du B1 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lien', 'certitude'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A12_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-parler',
  layer: 'core',
  title: 'Dis tes causes et tes conséquences à voix haute',
  frSub: 'Le lien, puis la nuance',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lien', 'registre'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a12-cheat',
  layer: 'core',
  sheetId: 'sheet-cause',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la cause admise', v: 'étant donné que, vu que, du fait que', say: fr(E(1812)),
      detail: { title: 'La cause admise', body: "Un fait que personne ne discute ; devant un nom, sans que. Parce que reste la réponse à pourquoi. EN: a given cause.", say: fr(E(1816)) } },
    { k: 'la raison de plus', v: 'd’autant plus que, dans la mesure où', say: fr(E(1831)),
      detail: { title: 'Le renfort', body: "Une raison qui pèse plus lourd, ou une cause dans une limite. EN: an extra reason, or a limit.", say: fr(E(1830)) } },
    { k: 'la cause contestée', v: 'sous prétexte que, non que', say: fr(E(1846)),
      detail: { title: 'Douter, écarter', body: "Sous prétexte que + indicatif ; non que, ce n'est pas que + subjonctif, puis la vraie cause. EN: doubt it or reject it.", say: fr(E(1848)) } },
    { k: 'nom et verbe', v: 'faute de, à force de, être dû à', say: fr(E(1869)),
      detail: { title: 'La cause en un mot', body: "Par peur, faute de temps, à force de patience ; être dû à, s'expliquer par, provenir de. EN: in a noun or a verb.", say: fr(E(1882)) } },
    { k: 'la conséquence', v: 'd’où + nom, de sorte que, au point que', say: fr(E(1899)),
      detail: { title: 'La suite', body: "D'où + nom ; de sorte que + indicatif ou subjonctif ; au point que ; entraîner, susciter, aboutir à. EN: vary the consequence.", say: fr(E(1932)) } },
    { k: 'la certitude', v: 'sans doute, il semble que, serait dû', say: fr(E(1963)),
      detail: { title: 'Doser', body: "Probable, impression, rapporté : sans doute, il semble que + subjonctif, le conditionnel des médias. EN: grade your certainty.", say: fr(E(1961)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['admise', 'consequence', 'certitude'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu ne dis plus seulement parce que et donc. Tu poses une cause admise, tu en ajoutes une qui pèse, tu en mets une en doute ou tu l'écartes avec le subjonctif ; tu la glisses dans un nom ou un verbe ; tu varies la conséquence, du résultat au but, de l'intensité au verbe ; et tu doses ta certitude. Le piège qui reste, c'est de dire plus que tu ne sais. Avant l'examen, reprends ton analyse et, pour chaque lien, demande-toi : est-ce que je le sais, ou est-ce que je le suppose ? EN: For every link, ask whether you know it or assume it.",
  stats: [
    { k: 'La cause', v: 'admise, renforcée, contestée' },
    { k: 'En un mot', v: 'faute de, à force de, être dû à' },
    { k: 'La suite', v: 'd’où, de sorte que, au point que' },
    { k: 'La certitude', v: 'sans doute, il semble que, serait' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 2 to 11, a round that
 *  recycles lessons 8, 15, 21, 30 and 31 in B1 and 6, 10 and 12 in B2 (named
 *  in each question), and an exam-format round (TCF, DELF B2 and TEF items).
 *  Many cause links are interchangeable, so every closed question is built
 *  so only one option fits (a preposition, a mood, a noun after d'où), and
 *  every typed answer accepts each variant that is also right. `fold()`
 *  strips accents, commas, apostrophes and hyphens, so no answer turns on
 *  them. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = [], q: string = ES_Q): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const MESSAGE_TEF = "Bonjour, ici l'accueil de la piscine municipale. Étant donné qu'une fuite a été découverte dans le grand bassin, la piscine sera fermée jusqu'à lundi. Ce n'est pas que les travaux soient longs, c'est que la pièce doit être commandée. Les abonnements seront prolongés en conséquence. Merci de votre compréhension.";

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a12-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r2-admise', label: 'La cause admise', targets: ['cause-admise-mal'],
      questions: [
        mc('« Pourquoi es-tu en retard ? » Quelle réponse va ?', ['Parce que mon bus est tombé en panne.', 'Puisque mon bus est tombé en panne.', 'Étant donné que mon bus est tombé en panne.'], 0, 'Seul parce que répond à pourquoi. EN: parce que.', 'a2-construire'),
        mc('Dans un rapport, pour poser un fait établi, tu écris plutôt…', ['du fait que', 'vu que', 'du coup'], 0, 'Du fait que, soutenu ; vu que, plus oral ; du coup dit une conséquence. EN: du fait que.', 'a2-table'),
        mc('« Puisque tu savais que la réunion était annulée, pourquoi ne m’as-tu rien dit ? » Le ton est…', ['un reproche', 'un compliment', 'une question neutre'], 0, 'Puisque rappelle ce que l’autre savait. EN: a reproach.', 'a2-ecoute'),
        tI('Complète avec étant donné ou vu, devant un nom.', "(…) l'heure, nous allons nous arrêter là.", fr(E(1816)), 'Devant un nom, sans que. EN: étant donné.', 'a2-construire', ["Vu l'heure, nous allons nous arrêter là."]),
        tI('Réécris la phrase en commençant par du fait de.', 'Les cours sont suspendus à cause de la grève.', fr(E(1817)), 'Du fait de + nom, en tête. EN: du fait de.', 'a2-erreurs'),
        eS("Étant donné que l'heure, nous allons nous arrêter là.", fr(E(1816)), 'Devant un nom, pas de que. EN: étant donné.', 'a2-erreurs', ["Vu l'heure, nous allons nous arrêter là.", "Étant donné qu'il est tard, nous allons nous arrêter là."]),
        eS('Nous nous sommes installés au café, comme la salle était réservée.', fr(E(1822)), 'Comme de cause se met en tête. EN: comme first.', 'a2-erreurs', ['Nous nous sommes installés au café, parce que la salle était réservée.', 'Nous nous sommes installés au café, puisque la salle était réservée.', 'Nous nous sommes installés au café, car la salle était réservée.', 'Étant donné que la salle était réservée, nous nous sommes installés au café.', 'Vu que la salle était réservée, nous nous sommes installés au café.']),
        lC('Écoute. Ce lien est-il plutôt oral ou soutenu ?', fr(E(1825)), ['plutôt oral', 'très soutenu'], 0, 'Vu que : courant, surtout oral. EN: casual.', 'a2-table'),
      ],
    },
    {
      id: 'r3-renfort', label: 'La raison qui pèse', targets: ['renfort-rate'],
      questions: [
        mc('« Le projet me plaît, d’autant plus qu’il crée des emplois. » La deuxième partie…', ['ajoute une raison plus forte', 'donne la seule raison', 'annonce une conséquence'], 0, 'Une raison de plus. EN: an extra reason.', 'a3-cartes'),
        mc('Dans la mesure du possible veut dire…', ['autant que possible', 'parce que c’est possible', 'bien que ce soit possible'], 0, 'Le faux ami : pas une cause. EN: as far as possible.', 'a3-cartes'),
        mc('« Dans la mesure où le budget a baissé, certains projets attendront. » Même sens, ou presque :', ['Puisque le budget a baissé…', 'Bien que le budget ait baissé…', 'Pour que le budget baisse…'], 0, 'Une cause qui justifie la suite. EN: since.', 'a3-construire'),
        tI('Complète avec le mot qui manque.', "C'est d'autant plus dommage (…) le spectacle était gratuit.", fr(E(1838)), "D'autant plus + adjectif + que. EN: que.", 'a3-piege'),
        tI('Relie les deux phrases avec d’autant plus que.', 'Il faut partir tôt. On annonce de la neige.', fr(E(1837)), "D'autant plus que ajoute la raison. EN: all the more so as.", 'a3-construire', ["Il faut partir tôt, d'autant plus que l'on annonce de la neige."]),
        eS('Dans la mesure que le budget a baissé, certains projets attendront.', fr(E(1830)), 'Dans la mesure où. EN: où.', 'a3-piege', ['Étant donné que le budget a baissé, certains projets attendront.', 'Puisque le budget a baissé, certains projets attendront.', 'Comme le budget a baissé, certains projets attendront.', 'Vu que le budget a baissé, certains projets attendront.', 'Du fait que le budget a baissé, certains projets attendront.', 'Parce que le budget a baissé, certains projets attendront.']),
        eS("Cette décision est d'autant plus surprenante parce que personne n'avait été consulté.", fr(E(1832)), "D'autant plus + adjectif + que. EN: que.", 'a3-piege', ["Cette décision est surprenante, d'autant plus que personne n'avait été consulté.", "Cette décision est d'autant plus surprenante qu'on n'avait consulté personne."]),
        lC('Écoute. Cette phrase dit-elle une cause ?', fr(E(1836)), ['non : autant que possible', 'oui, comme parce que'], 0, 'Dans la mesure du possible : le faux ami. EN: no.', 'a3-exemples'),
      ],
    },
    {
      id: 'r4-contestee', label: 'La cause qu’on conteste', targets: ['cause-contestee-mode'],
      questions: [
        mc('« Il a refusé de venir sous prétexte qu’il avait trop de travail. » Celui qui parle…', ['doute de cette raison', 'confirme cette raison'], 0, 'Sous prétexte que : la raison donnée. EN: he doubts it.', 'a4-cartes'),
        mc('« Ce n’est pas qu’il … timide, c’est qu’il ne connaît personne. »', ['soit', 'est', 'sera'], 0, 'Une cause écartée : subjonctif. EN: soit.', 'a4-piege'),
        mc('« Ce n’est pas parce qu’il est jeune qu’il a tort. » On refuse…', ['un raisonnement', 'une excuse', 'un but'], 0, 'Être jeune ne veut pas dire avoir tort. EN: an inference.', 'a4-cartes'),
        tI('Mets le verbe au bon mode.', "Ce n'est pas que le prix (être) trop élevé, c'est que la qualité ne suit pas.", fr(E(1856)), 'Soit : la cause est écartée. EN: soit.', 'a4-piege'),
        tI('Mets le verbe au bon mode.', "Elle a refusé le poste, non qu'il (être) mal payé, mais il est trop loin.", fr(E(1860)), 'Non que + subjonctif. EN: soit.', 'a4-piege', ["Elle a refusé le poste, non qu'il soit mal payé, mais parce qu'il est trop loin."]),
        eS("Ce n'est pas que je sois contre, c'est que j'aie besoin de réfléchir.", fr(E(1859)), "La vraie cause, après c'est que : l'indicatif. EN: j'ai.", 'a4-piege'),
        eS("Il a refusé de venir sous prétexte qu'il ait trop de travail.", fr(E(1846)), 'Sous prétexte que + indicatif. EN: avait.', 'a4-piege', ["Il a refusé de venir sous prétexte qu'il a trop de travail."]),
        lC('Écoute. Pourquoi a-t-il vraiment déménagé ?', fr(E(1847)), ['il voulait un jardin', 'il était mal logé'], 0, 'Non qu’il soit mal logé : cette cause est écartée. EN: for a garden.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-nom', label: 'La cause dans un nom', targets: ['cause-nom-bancale'],
      questions: [
        mc('« Il a menti … peur de décevoir ses parents. »', ['par', 'par la', 'pour'], 0, 'Par, sans article, pour un motif. EN: par.', 'a5-table'),
        mc('« … la grève, le métro ne marche pas. »', ['À cause de', 'Grâce à'], 0, 'Un effet négatif : à cause de. EN: à cause de.', 'a5-construire'),
        mc('Dans un rapport soigné, plutôt que « suite à votre appel », tu écris…', ['à la suite de votre appel', 'suite de votre appel', 'par suite votre appel'], 0, 'Suite à est accepté mais critiqué ; à la suite de est sûr. EN: à la suite de.', 'a5-exemples'),
        tI('Complète : le manque.', "(…) temps, nous n'avons pas visité le musée.", fr(E(1869)), 'Faute de, sans article. EN: faute de.', 'a5-table', ["Par manque de temps, nous n'avons pas visité le musée."]),
        tI('Complète : la répétition a produit le résultat.', '(…) répéter, il a fini par retenir son texte.', fr(E(1867)), 'À force de + infinitif. EN: à force de.', 'a5-table'),
        eS("Faute du temps, nous n'avons pas visité le musée.", fr(E(1869)), 'Faute de, sans article. EN: faute de temps.', 'a5-erreurs', ["Par manque de temps, nous n'avons pas visité le musée."]),
        eS('Grâce à la grève, le métro ne marche pas.', fr(CL(1255)), 'Grâce à, pour un bon résultat seulement. EN: à cause de.', 'a5-erreurs', ['En raison de la grève, le métro ne marche pas.', 'Du fait de la grève, le métro ne marche pas.', 'Le métro ne marche pas à cause de la grève.', 'Le métro ne marche pas en raison de la grève.']),
        lC('Écoute. Qu’est-ce qui a déformé les rails ?', fr(E(1872)), ['la chaleur', 'le froid'], 0, 'Sous l’effet de la chaleur. EN: the heat.', 'a5-exemples'),
      ],
    },
    {
      id: 'r6-verbe', label: 'La cause dans le verbe', targets: ['verbe-cause-faux'],
      questions: [
        mc('« La panne était … à un câble endommagé. »', ['due', 'dû', 'dus'], 0, 'Dû s’accorde avec la panne. EN: due.', 'a6-cartes'),
        mc('À l’écrit : « Le retard est … la neige. »', ['dû à', 'à cause de', 'provenu de'], 0, 'À l’écrit, après être : dû à. EN: dû à.', 'a6-erreurs'),
        mc('« Son succès tient à sa simplicité » veut dire…', ['son succès vient de sa simplicité', 'il est très attaché à sa simplicité'], 0, 'Tenir à : dépendre de. EN: comes down to.', 'a6-cartes'),
        tI('Réécris avec la fermeture… est due à.', 'Le magasin ferme parce que les ventes ont baissé.', fr(E(1895)), 'Le fait en tête, la cause après due à. EN: is due to.', 'a6-construire', ['La fermeture du magasin est due à la baisse de ses ventes.']),
        tI('Mets le verbe au présent.', "L'odeur (provenir) de la cuisine du restaurant.", fr(E(1896)), 'Provenir : provient. EN: provient.', 'a6-cartes'),
        eS("Le retard du train est à cause d'un problème de signalisation.", fr(E(1882)), 'Être dû à, pas être à cause de. EN: est dû à.', 'a6-erreurs', ["Le retard du train vient d'un problème de signalisation.", "Le retard du train s'explique par un problème de signalisation.", "Le retard du train provient d'un problème de signalisation.", "Le train est en retard à cause d'un problème de signalisation.", "Le retard du train est lié à un problème de signalisation."]),
        eS("Cette hausse des prix s'explique avec le coût de l'énergie.", fr(E(1886)), "S'expliquer par. EN: par.", 'a6-erreurs', ["Cette hausse des prix est due au coût de l'énergie.", "Cette hausse des prix vient du coût de l'énergie.", "Cette hausse des prix provient du coût de l'énergie.", "Cette hausse des prix tient au coût de l'énergie."]),
        lC('Écoute. D’où vient l’erreur ?', fr(E(1888)), ['d’un mauvais calcul', 'd’une mauvaise traduction'], 0, 'Elle provient d’un mauvais calcul. EN: a miscalculation.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-connecteur', label: 'La conséquence, en connecteur', targets: ['dou-verbe'],
      questions: [
        mc('« Les inscriptions ont explosé, … la création d’un deuxième groupe. »', ['d’où', 'c’est pourquoi', 'si bien que'], 0, 'Un nom suit : d’où. EN: d’où.', 'a7-cartes'),
        mc('Dans un rapport : « Le dossier était incomplet. Aussi … renvoyé à son auteur. »', ['a-t-il été', 'il a été'], 0, 'Aussi en tête, au sens de donc : inversion. EN: inversion.', 'a7-trier'),
        mc('Lequel est familier ?', ['du coup', 'de ce fait', 'par conséquent'], 0, 'Du coup, à l’oral. EN: du coup.', 'a7-trier'),
        tI('Réécris avec d’où + un nom.', 'Le vol a été annulé, donc les passagers sont en colère.', fr(E(1908)), "D'où la colère. EN: hence.", 'a7-trier', ["Le vol a été annulé, d'où la colère des voyageurs."]),
        tI('Complète : « agis de façon adaptée ».', 'Tu connais les risques : agis (…).', fr(E(1903)), 'Agir en conséquence. EN: act accordingly.', 'a7-cartes'),
        eS("Les inscriptions ont explosé, d'où ils ont créé un deuxième groupe.", fr(E(1899)), "D'où + nom. EN: d'où la création.", 'a7-piege', ["Les inscriptions ont explosé, c'est pourquoi ils ont créé un deuxième groupe.", "Les inscriptions ont explosé, si bien qu'ils ont créé un deuxième groupe.", "Les inscriptions ont explosé, c'est pourquoi on a créé un deuxième groupe.", "Les inscriptions ont explosé ; par conséquent, ils ont créé un deuxième groupe.", "Les inscriptions ont explosé, donc ils ont créé un deuxième groupe."]),
        eS("Aussi nous avons décidé de reporter l'assemblée.", fr(E(1910)), 'Aussi en tête : inversion. EN: avons-nous.', 'a7-piege', ["Nous avons donc décidé de reporter l'assemblée.", "Par conséquent, nous avons décidé de reporter l'assemblée.", "C'est pourquoi nous avons décidé de reporter l'assemblée."]),
        lC('Écoute. Dans quel registre est cette phrase ?', fr(E(1904)), ['familier', 'soutenu'], 0, 'Du coup : familier. EN: casual.', 'a7-trier'),
      ],
    },
    {
      id: 'r8-resultat', label: 'Le résultat ou le but', targets: ['mode-sorte-que'],
      questions: [
        mc('« Le guide parle lentement de sorte que tout le groupe comprenne. » C’est…', ['un but', 'un résultat'], 0, 'Comprenne, au subjonctif : un but. EN: an aim.', 'a8-cartes'),
        mc('« La réunion a débordé, si bien que j’… raté mon train. »', ['ai', 'aie'], 0, 'Si bien que : l’indicatif. EN: ai.', 'a8-construire'),
        mc('Lequel ne peut jamais dire un but ?', ['si bien que', 'de sorte que', 'de façon que'], 0, 'Si bien que dit toujours un résultat. EN: si bien que.', 'a8-cartes'),
        tI('Mets le verbe au bon mode : c’est un but.', "Organise la salle de sorte que chacun (voir) l'écran.", fr(E(1926)), 'Voie, subjonctif de voir. EN: voie.', 'a8-piege'),
        tI('Mets le verbe au bon mode : c’est un but.', 'Parle plus lentement, de sorte que tout le monde te (suivre).', fr(E(1923)), 'Suive, au subjonctif. EN: suive.', 'a8-cartes'),
        eS("Range tes dossiers de sorte qu'on peut les retrouver.", fr(E(1915)), 'Un but : puisse. EN: puisse.', 'a8-piege', ["Range tes dossiers pour qu'on puisse les retrouver.", "Range tes dossiers de façon qu'on puisse les retrouver.", "Range tes dossiers de manière qu'on puisse les retrouver.", "Range tes dossiers afin qu'on puisse les retrouver."]),
        eS("Le mur a été repeint, si bien qu'on ne voie plus les fissures.", fr(E(1927)), 'Un résultat : voit. EN: voit.', 'a8-piege', ["Le mur a été repeint, de sorte qu'on ne voit plus les fissures."]),
        lC('Écoute. Le groupe a-t-il compris ?', fr(E(1918)), ['oui', 'on ne sait pas encore'], 0, 'A compris : un résultat. EN: yes.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-intensite', label: 'L’intensité', targets: ['intensite-mode'],
      questions: [
        mc('« Il y avait … candidats que le jury a prolongé les entretiens. »', ['tant de', 'tant', 'si'], 0, 'Devant un nom : tant de. EN: tant de.', 'a9-table'),
        mc('« La salle est trop petite pour que tout le monde … entrer. »', ['puisse', 'peut', 'pourra'], 0, 'Trop… pour que + subjonctif. EN: puisse.', 'a9-construire'),
        mc('« Il était épuisé au point … s’endormir en réunion. »', ['de', 'que', 'où'], 0, 'Devant un infinitif : au point de. EN: de.', 'a9-construire'),
        tI('Relie avec au point que.', 'La tension est montée. La réunion a été suspendue.', fr(E(1932)), 'Au point que + une phrase. EN: to the point that.', 'a9-table'),
        tI('Mets le verbe au bon mode.', 'La valise est trop lourde pour que je (pouvoir) la porter seule.', fr(E(1945)), 'Puisse : trop… pour que. EN: puisse.', 'a9-construire'),
        eS('La salle est trop petite pour que tout le monde peut entrer.', fr(E(1934)), 'Le subjonctif : puisse. EN: puisse.', 'a9-erreurs', ['La salle est trop petite pour que tout le monde y entre.', 'La salle est trop petite pour que tout le monde entre.']),
        eS('La hausse est tel que certains commerçants ont fermé.', fr(E(1943)), 'Tel s’accorde : telle. EN: telle.', 'a9-erreurs', ['La hausse est si forte que certains commerçants ont fermé.', 'La hausse est tellement forte que certains commerçants ont fermé.']),
        lC('Écoute. Qu’a fait la rivière ?', fr(E(1928)), ['elle est sortie de son lit', 'elle a gelé'], 0, 'Il a tant plu que… EN: it overflowed.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-effet', label: 'La conséquence dans le verbe', targets: ['verbe-effet-faux'],
      questions: [
        mc('« Les négociations ont … un accord. »', ['abouti à', 'suscité', 'causé'], 0, 'Aboutir à : la fin d’un processus. EN: abouti à.', 'a10-cartes'),
        mc('« Ce projet … l’intérêt des jeunes. »', ['suscite', 'aboutit à', 'cause'], 0, 'Une réaction : susciter. EN: suscite.', 'a10-trier'),
        mc('Suscite-t-on un accident ?', ['non : on le provoque ou on le cause', 'oui, c’est le verbe habituel'], 0, 'Un accident se provoque. EN: no.', 'a10-trier'),
        tI('Complète avec aboutir, au passé composé.', "Les discussions n'ont (aboutir) rien.", fr(E(1954)), 'Aboutir à rien. EN: came to nothing.', 'a10-piege'),
        tI('Mets le verbe au passé composé.', "La grève (entraîner) l'annulation de nombreux vols.", fr(E(1948)), 'A entraîné, sans à. EN: led to.', 'a10-cartes'),
        eS('Les négociations ont abouti un accord.', fr(E(1950)), 'Aboutir à. EN: à.', 'a10-piege'),
        eS('Le verglas a suscité plusieurs accidents ce matin.', fr(E(1947)), 'Un accident se provoque. EN: provoqué.', 'a10-piege', ['Le verglas a causé plusieurs accidents ce matin.', 'Le verglas a entraîné plusieurs accidents ce matin.']),
        lC('Écoute. À quoi les négociations ont-elles abouti ?', fr(E(1950)), ['à un accord', 'à rien'], 0, 'Elles ont abouti à un accord. EN: an agreement.', 'a10-trier'),
      ],
    },
    {
      id: 'r11-certitude', label: 'Doser la certitude', targets: ['certitude-mal-dosee'],
      questions: [
        mc('« Le retard est sans doute dû à la neige. » Celui qui parle est…', ['presque sûr', 'absolument sûr'], 0, 'Sans doute : probablement. EN: almost sure.', 'a11-cartes'),
        mc('« L’incendie serait dû à un court-circuit. » L’information est…', ['rapportée, pas vérifiée', 'confirmée'], 0, 'Le conditionnel des médias. EN: reported.', 'a11-trier'),
        mc('« Il semble que la panne … du réseau. »', ['vienne', 'venir', 'venant'], 0, 'Il semble que + subjonctif. EN: vienne.', 'a11-trier'),
        tI('Complète au conditionnel passé : l’information n’est pas confirmée.', "D'après la police, l'accident (être) causé par le verglas.", fr(E(1972)), 'Aurait été causé. EN: was reportedly caused.', 'a11-cartes'),
        tI('Mets le verbe au bon mode.', "Il semble que les habitants (être) partis avant l'orage.", fr(E(1976)), 'Soient partis, au subjonctif : la règle de l’écrit. L’indicatif (sont partis) se lit aussi chez de bons auteurs et n’est pas compté faux. EN: soient.', 'a11-trier', ["Il semble que les habitants sont partis avant l'orage."]),
        eS('Sans doute le retard est dû à la neige.', fr(E(1963)), 'Après le verbe, ou avec inversion. EN: move it or invert.', 'a11-erreurs', ['Sans doute le retard est-il dû à la neige.', 'Le retard est probablement dû à la neige.', 'Le retard est vraisemblablement dû à la neige.', 'Sans doute que le retard est dû à la neige.']),
        eS('Tout porte à croire que la fuite provienne du toit.', fr(E(1967)), 'Tout porte à croire que + indicatif. EN: provient.', 'a11-erreurs', ['Tout porte à croire que la fuite vient du toit.']),
        lC('Écoute. Sait-on si les deux faits sont liés ?', fr(E(1975)), ['non, pas encore', 'oui'], 0, 'On ignore encore si… EN: not yet.', 'a11-ecoute'),
      ],
    },
    {
      id: 'r12-recyclage', label: 'Le B1 et le B2 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(COORD_REF)} : « Le vol est annulé, … le pilote est malade. »`, ['car', 'pourtant'], 0, `« ${B130_REFRAME} » EN: ${B130_REFRAME_EN}`, 'a2-rappel'),
        mc(`${Cap(SUBORD_REF)} : « … tu as une voiture, tu peux nous conduire. »`, ['Puisque', 'Pour que'], 0, `« ${B131_REFRAME} » EN: ${B131_REFRAME_EN}`, 'a2-rappel'),
        mc(`${Cap(SUBJ_DECL_REF)} : « Il semble que personne ne … cette rue. »`, ['connaisse', 'connaître'], 0, `« ${B115_REFRAME} » EN: ${B115_REFRAME_EN}`, 'a11-cartes'),
        mc(`${Cap(INVERSION_REF)} : à l’écrit soigné, « Sans doute … raison. »`, ['a-t-elle', 'elle a'], 0, `« ${B121_REFRAME} » EN: ${B121_REFRAME_EN}`, 'a11-erreurs'),
        mc(`${Cap(MODES_REF)} : « Ce n’est pas que je sois contre. » Pourquoi le subjonctif ?`, ['la cause est écartée, pas affirmée', 'parce que le sujet est je'], 0, `« ${B206_REFRAME} » EN: ${B206_REFRAME_EN}`, 'a4-cartes'),
        mc(`${Cap(NOMIN_REF)} : « … votre demande, je vous envoie le formulaire. » Dans une lettre très soignée :`, ['À la suite de', 'Suite de'], 0, `« ${B210_REFRAME} » EN: ${B210_REFRAME_EN}`, 'a5-exemples'),
        tI(`${Cap(GERONDIF_REF)} : remplace parce que par un gérondif.`, "Il a tout cassé parce qu'il voulait aider.", 'En voulant aider, il a tout cassé.', `« ${B212_REFRAME} » EN: ${B212_REFRAME_EN}`, 'a1-reperer', ['Il a tout cassé en voulant aider.']),
        lC(`Écoute. ${Cap(COND_REF)} : cette information est-elle confirmée ?`, fr('fr.b1.projets-et-futur.762'), ['non, elle est rapportée', 'oui, c’est prouvé'], 0, `« ${B108_REFRAME} » EN: ${B108_REFRAME_EN}`, 'a11-cartes'),
      ],
    },
    {
      id: 'r13-examen', label: 'Comme à l’examen', targets: ['lien-repete'],
      questions: [
        mc('Format TCF. Choisissez la bonne réponse : « … la hausse des loyers, de nombreuses familles quittent le centre-ville. »', ['En raison de', 'Parce que', 'Puisque', 'Si bien que'], 0, 'Devant un nom, une préposition : en raison de. EN: owing to.', 'a5-table'),
        mc('Format TCF : « La réunion a été reportée, … l’absence de la directrice. »', ['du fait de', 'd’où', 'si bien que', 'c’est pourquoi'], 0, 'L’absence est la cause : du fait de. D’où ferait d’elle une conséquence. EN: du fait de.', 'a5-table'),
        mc('Format DELF B2, compréhension écrite. « Le maire a fermé la piscine sous prétexte que les travaux coûteraient trop cher. » Le journaliste…', ['doute de la raison du maire', 'approuve la décision', 'rapporte la raison sans avis'], 0, 'Sous prétexte que : la raison donnée, mise en doute. EN: he doubts it.', 'a4-cartes'),
        mc('Format DELF B2, compréhension écrite. « Selon plusieurs témoins, le conducteur aurait grillé un feu rouge. » Cette phrase…', ['rapporte un fait non vérifié', 'affirme un fait prouvé', 'exprime un souhait'], 0, 'Selon + conditionnel : rapporté. EN: reported.', 'a11-cartes'),
        tI('Format DELF B2, production. Reformulez sans parce que, avec étant donné que en tête.', "Nous reportons l'achat des ordinateurs parce que le budget est serré.", fr(E(1812)), 'Une cause admise, posée en tête. EN: given that.', 'a2-construire'),
        tI('Format DELF B2, production. Reformulez sans donc, avec d’où + un nom.', 'Il avait oublié son badge, donc il est arrivé en retard.', fr(E(1900)), "D'où son retard. EN: hence his lateness.", 'a7-trier', ["Il avait oublié son badge, d'où son arrivée en retard."]),
        eS('Le retard du chantier est à cause des intempéries.', 'Le retard du chantier est dû aux intempéries.', 'Être dû à, pas être à cause de. EN: est dû aux.', 'a6-erreurs',
          ["Le retard du chantier s'explique par les intempéries.", 'Le retard du chantier vient des intempéries.', 'Le chantier est en retard à cause des intempéries.', 'Le retard du chantier est lié aux intempéries.', 'Le retard du chantier provient des intempéries.'],
          'Format DELF B2, correction. Une forme ne va pas : écris la phrase correcte. EN: One form is wrong; write the sentence correctly.'),
        lC('Format TEF, compréhension orale. Écoute ce message. Pourquoi la piscine ferme-t-elle ?', MESSAGE_TEF, ['à cause d’une fuite dans le grand bassin', 'faute de personnel', 'en raison d’une grève'], 0, 'Étant donné qu’une fuite a été découverte. EN: a leak.', 'a6-ecoute'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b2.12 does. */
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
  type: 'reviewDeck',
  id: 'a12-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'la réponse à pourquoi', back: 'parce que, et lui seul', say: fr(E(1821)) },
    { front: 'une cause admise', back: 'étant donné que, du fait que, vu que', say: fr(E(1812)) },
    { front: 'une raison de plus', back: 'd’autant plus que', say: fr(E(1831)) },
    { front: 'une cause écartée', back: 'non que, ce n’est pas que + subjonctif', say: fr(E(1848)) },
    { front: 'for lack of time', back: 'faute de temps', say: fr(E(1869)) },
    { front: 'the delay is due to', back: 'le retard est dû à', say: fr(E(1882)) },
    { front: 'hence his lateness', back: 'd’où son retard', say: fr(E(1900)) },
    { front: 'so that (an aim)', back: 'de sorte que + subjonctif', say: fr(E(1917)) },
    { front: 'probably', back: 'sans doute, pas sans aucun doute', say: fr(E(1963)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-roundup',
  layer: 'core',
  title: 'Le lien, et ce que tu en sais',
  body: `${REFRAME} Tu as repris les connecteurs de ${COORD_REF} et de ${SUBORD_REF}, la nominalisation de ${NOMIN_REF} et le conditionnel de ${COND_REF}, pour dire une cause admise, renforcée, contestée ou probable, et une conséquence qui est un résultat, un but, une intensité ou un effet. La suite, c'est ${CONCESSION_B2_REF} : la concession, quand deux faits pèsent l'un contre l'autre. EN: Next comes lesson 16 in B2: concession, when two facts weigh against each other.`,
  points: [
    'Parce que répond à pourquoi ; étant donné que pose une cause admise.',
    'Sous prétexte que doute ; non que écarte, avec le subjonctif.',
    'D’où + nom ; de sorte que + indicatif ou subjonctif selon le sens.',
    'Sans doute veut dire probablement ; le conditionnel rapporte.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['lien', 'certitude'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ton analyse',
    opener: {
      line: "Des familles quittent les villes, et tout le monde a une explication : ici tu écris la tienne, graduée et nuancée, puis tu passes l'examen. EN: Families are leaving the cities and everyone has an explanation: here you write yours, graded and nuanced, then sit the exam.",
      imageRef: 'lessons/cause-consequence/act12.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ton analyse et passé l'examen : quatre-vingt-seize questions, douze manches. EN: You wrote your analysis and sat the exam: ninety-six questions, twelve rounds.",
    estScreens: 150,
    restPoints: ['a12-plan', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r5-nom', 'a12-quiz/r9-intensite', 'a12-review'],
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
  { id: 'd-admise', title: 'La cause admise', format: 'mcq' as const, coach: "Parce que répond à pourquoi ; étant donné que, vu que et du fait que posent une cause que personne ne discute. EN: answer, or a given.", q: '« Pourquoi pars-tu ? » Quelle réponse va ?', opts: ['Parce que j’ai un train.', 'Puisque j’ai un train.'], correct: 0, why: 'Seul parce que répond à pourquoi. EN: parce que.', items: [E(1812), E(1813), E(1814), E(1816), E(1817), E(1821)], audio: AUDIO },
  { id: 'd-renfort', title: 'Une raison de plus', format: 'flashcard' as const, coach: "Lis chaque phrase, puis ajoute toi-même une raison de plus avec d'autant plus que. EN: add one more reason.", items: [E(1830), E(1831), E(1832), E(1837), E(1841), E(1842)], audio: AUDIO },
  { id: 'd-contestee', title: 'Douter ou écarter', format: 'sort' as const, coach: "Deux piles : la raison dont on doute (sous prétexte que), la cause qu'on écarte (non que, ce n'est pas que). EN: doubted or rejected.", buckets: ['mise en doute', 'écartée'], items: [E(1846), E(1851), E(1853), E(1847), E(1849), E(1859)], audio: AUDIO },
  { id: 'd-nom', title: 'Motif ou manque', format: 'sort' as const, coach: "Deux piles : un motif ou un effort (par, à force de), ou un manque (faute de). EN: motive or lack.", buckets: ['un motif, un effort', 'un manque'], items: [E(1864), E(1865), E(1867), E(1869), E(1870), E(1878)], audio: AUDIO },
  { id: 'd-verbe', title: 'Dû, due, dus, dues', format: 'mcq' as const, coach: "Le fait en tête, la cause après le verbe ; dû s'accorde avec le sujet. EN: the fact first; dû agrees.", q: '« Ces erreurs sont … à un manque de relecture. »', opts: ['dues', 'dû'], correct: 0, why: 'Féminin pluriel : dues. EN: dues.', items: [E(1882), E(1883), E(1884), E(1885), E(1886), E(1887)], audio: AUDIO },
  { id: 'd-connecteur', title: 'Un nom ou une phrase', format: 'sort' as const, coach: "Deux piles : d'où suivi d'un nom, ou un lien suivi d'une phrase entière. EN: a noun after d'où, or a whole clause.", buckets: ['d’où + un nom', 'une phrase entière'], items: [E(1899), E(1900), E(1908), E(1901), E(1913), E(1898)], audio: AUDIO },
  { id: 'd-mode', title: 'Arrivé ou visé', format: 'sort' as const, coach: "Deux piles : ce qui est arrivé (indicatif), ce qu'on vise (subjonctif). EN: result or aim.", buckets: ['un résultat', 'un but'], items: [E(1914), E(1916), E(1918), E(1915), E(1917), E(1926)], audio: AUDIO },
  { id: 'd-intensite', title: 'Un degré, puis l’effet', format: 'flashcard' as const, coach: "Lis chaque phrase, puis dis-en une sur le même modèle avec ta propre situation. EN: say one of your own.", items: [E(1928), E(1929), E(1932), E(1934), E(1937), E(1943)], audio: AUDIO },
  { id: 'd-effet', title: 'Le bon verbe', format: 'mcq' as const, coach: "Provoquer un accident, susciter une réaction, entraîner une suite, aboutir à un résultat. EN: each verb, its nouns.", q: '« Les négociations ont … un accord. »', opts: ['abouti à', 'suscité'], correct: 0, why: 'La fin d’un processus : aboutir à. EN: abouti à.', items: [E(1946), E(1947), E(1948), E(1949), E(1950), E(1952)], audio: AUDIO },
  { id: 'd-certitude', title: 'Probable ou rapporté', format: 'sort' as const, coach: "Deux piles : ce que tu crois probable (sans doute), ce qu'on rapporte sans le garantir (le conditionnel). EN: probable or reported.", buckets: ['probable', 'rapporté'], items: [E(1963), E(1968), E(1969), E(1961), E(1962), E(1972)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1 et le B2 en renfort', format: 'flashcard' as const, coach: "Six phrases des leçons précédentes : pour chacune, dis quel lien plus nuancé pourrait remplacer le sien. EN: which shade could replace each link?", items: [CL(1024), CL(1231), CL(1240), CL(1302), 'fr.b1.opinions-et-avis.1287', 'fr.b1.projets-et-futur.762'], audio: AUDIO },
  { id: 'd-analyse', title: 'Ton analyse, à voix haute', format: 'flashcard' as const, coach: "Lis chaque phrase, puis dis la même idée avec un autre lien. EN: say each idea with another link.", items: [E(1978), E(1979), E(1981), E(1982), E(1984), E(1987)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'cause-admise-mal', description: 'Answers pourquoi with puisque or étant donné que, keeps que before a noun (étant donné que l’heure), or puts causal comme after the main clause.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a12-mission'], drill: 'd-admise', retest: 'd-admise' },
  { id: 'renfort-rate', description: "Writes dans la mesure que, d'autant plus parce que, or reads dans la mesure du possible as a cause.", detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a12-mission'], drill: 'd-renfort', retest: 'd-renfort' },
  { id: 'cause-contestee-mode', description: "Uses the indicative after non que or ce n'est pas que, the subjunctive for the real cause or after sous prétexte que, or cannot tell a doubted cause from a neutral one.", detectOn: ['a4-trier', 'a4-piege', 'a4-check', 'a12-mission'], drill: 'd-contestee', retest: 'd-contestee' },
  { id: 'cause-nom-bancale', description: 'Adds an article after par or faute de, uses grâce à for a bad outcome, or writes suite de.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a12-mission'], drill: 'd-nom', retest: 'd-nom' },
  { id: 'verbe-cause-faux', description: 'Writes « est à cause de » instead of a verb of cause, leaves dû unagreed, or drops the preposition after s’expliquer or provenir.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a12-mission'], drill: 'd-verbe', retest: 'd-verbe' },
  { id: 'dou-verbe', description: "Puts a clause or que after d'où, leaves aussi at the head of a written sentence without inversion, or uses du coup in writing.", detectOn: ['a7-trier', 'a7-piege', 'a7-check', 'a12-mission'], drill: 'd-connecteur', retest: 'd-connecteur' },
  { id: 'mode-sorte-que', description: 'Picks the wrong mood after de sorte que or de façon que, or uses si bien que with the subjunctive or for an aim.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a12-mission'], drill: 'd-mode', retest: 'd-mode' },
  { id: 'intensite-mode', description: 'Uses the indicative after trop or assez… pour que, writes tant beaucoup de, au point que + infinitive, or leaves tel unagreed.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check', 'a12-mission'], drill: 'd-intensite', retest: 'd-intensite' },
  { id: 'verbe-effet-faux', description: 'Pairs a verb of consequence with the wrong noun (susciter un accident) or construction (aboutir un accord, entraîner à).', detectOn: ['a10-trier', 'a10-piege', 'a10-check', 'a12-mission'], drill: 'd-effet', retest: 'd-effet' },
  { id: 'certitude-mal-dosee', description: 'States an unconfirmed cause as fact, reads sans doute as certainty, drops été from the passive conditionnel passé, or uses the subjunctive after tout porte à croire que.', detectOn: ['a11-trier', 'a11-erreurs', 'a11-check', 'a12-mission'], drill: 'd-certitude', retest: 'd-certitude' },
  { id: 'recyclage', description: 'Loses a contrast this lesson sits on: car and donc, puisque, il semble que + subjunctive, inversion after sans doute, the subjunctive of a rejected cause, suite à, the gérondif of cause, the reporting conditional.', detectOn: ['a2-rappel', 'a5-exemples', 'a11-cartes'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'lien-repete', description: 'In an exam-format text, carries every cause with parce que and every consequence with donc, so the range criterion is not met and nothing says how sure the writer is.', detectOn: ['a1-scene', 'a1-reperer', 'a12-plan', 'a12-mission'], drill: 'd-analyse', retest: 'd-analyse' },
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
  sheet('sheet-cause', 'Graduer la cause', ['ce que tu supposes', 'le mode', 'le registre', 'les constructions devant un nom'], [
    teach('sheet-cause-teach', 'Le lien, et ce que tu en sais',
      `${REFRAME} Parce que apporte une cause et répond à pourquoi. Les autres liens disent en plus ce que tu supposes : une cause connue, admise, renforcée, mise en doute ou écartée. Le mode suit : l'indicatif pour une cause affirmée ou rapportée, le subjonctif pour une cause écartée. EN: ${REFRAME_EN} The link also says what you assume.`),
    table('sheet-cause-table', 'Douze liens de cause', ['Lien', 'Ce que tu supposes', 'Mode', 'Registre'], [
      ['parce que', 'rien : tu apportes la cause', 'indicatif', 'courant'],
      ['car', 'une explication ajoutée, après', 'indicatif', 'écrit'],
      ['puisque', 'l’autre connaît déjà la cause', 'indicatif', 'courant'],
      ['comme (en tête)', 'la cause pose le décor', 'indicatif', 'courant'],
      ['étant donné que', 'un fait établi', 'indicatif', 'soutenu'],
      ['vu que', 'un fait évident', 'indicatif', 'courant, oral'],
      ['du fait que', 'un fait établi', 'indicatif', 'soutenu, écrit'],
      ['dans la mesure où', 'une cause dans une limite', 'indicatif', 'soutenu'],
      ["d'autant plus que", 'une raison de plus, plus forte', 'indicatif', 'courant'],
      ['sous prétexte que', 'une raison dont tu doutes', 'indicatif', 'courant'],
      ["non que, ce n'est pas que", 'une cause écartée', 'subjonctif', 'soutenu, courant'],
      ["ce n'est pas parce que… que", 'un raisonnement refusé', 'indicatif', 'courant'],
    ]),
    table('sheet-cause-nom', 'Devant un nom, sans que', ['Devant une phrase', 'Devant un nom', 'Exemple'], [
      ['étant donné que', 'étant donné', "Étant donné l'heure, nous allons nous arrêter là."],
      ['vu que', 'vu', "Vu la météo, on reste à l'intérieur."],
      ['du fait que', 'du fait de', 'Du fait de la grève, les cours sont suspendus.'],
      ['sous prétexte que', 'sous prétexte de + infinitif', 'Il est parti tôt sous prétexte de préparer sa réunion.'],
    ]),
  ]),
  sheet('sheet-noms', 'La cause dans un nom ou un verbe', ['les prépositions', 'suite à', 'les verbes de cause', 'l’accord de dû'], [
    teach('sheet-noms-teach', 'Une préposition ou un verbe porte la cause',
      `Devant un nom, la préposition dit quelle cause : un bon résultat, un motif, un effort, un manque, une pression. Suite à est très répandu et accepté, mais critiqué par les guides de style, comme l'a dit ${NOMIN_REF} : dans un texte soigné, écris à la suite de. Avec un verbe de cause, le fait vient en tête et la cause après le verbe. EN: a preposition or a verb carries the cause.`),
    table('sheet-noms-prep', 'Les prépositions de cause', ['Préposition', 'La cause', 'Exemple'], [
      ['à cause de', 'neutre ou négative', "À cause des travaux, la rue sera fermée tout l'été."],
      ['grâce à', 'un bon résultat', "Grâce à ses conseils, j'ai évité une grosse erreur."],
      ['en raison de, du fait de', 'officielle, neutre', 'En raison des travaux, la bibliothèque ouvrira à dix heures.'],
      ['par (sans article)', 'un motif intérieur', 'Il a menti par peur de décevoir ses parents.'],
      ['à force de', 'la répétition, l’effort', 'À force de répéter, il a fini par retenir son texte.'],
      ['faute de', 'un manque', "Faute de temps, nous n'avons pas visité le musée."],
      ["sous l'effet de", 'une pression, souvent physique', "Sous l'effet de la fatigue, il a fait une erreur de calcul."],
      ['à la suite de (suite à)', 'un événement antérieur', 'À la suite de votre appel, nous avons modifié votre adresse.'],
    ]),
    table('sheet-noms-verbes', 'Les verbes de cause', ['Verbe', 'Construction', 'Exemple'], [
      ['être dû à', 'dû, due, dus, dues + à', 'La panne était due à un câble endommagé.'],
      ["s'expliquer par", 'par', "Cette hausse des prix s'explique par le coût de l'énergie."],
      ['provenir de', 'de, soutenu', "L'erreur provient d'un mauvais calcul."],
      ['venir de', 'de, courant', 'Le problème vient de la batterie.'],
      ['tenir à', 'à, dépendre de', 'Le succès du film tient à la qualité du scénario.'],
      ['à éviter à l’écrit', 'être à cause de', 'Le retard est dû à la neige, pas « est à cause de ».'],
    ]),
  ]),
  sheet('sheet-consequence', 'La conséquence', ['les connecteurs et le registre', 'résultat ou but', "l'intensité", 'les verbes d’effet'], [
    teach('sheet-consequence-teach', 'Varier la suite',
      `Donc va partout, mais répété, il aplatit un texte. D'où se construit avec un nom ; aussi en tête fait inverser. Après de sorte que, le mode dit si c'est un résultat ou un but ; le but seul est pour ${LATER_REF}. L'intensité produit un effet : au point que, trop… pour que + subjonctif. Un verbe peut aussi porter la conséquence. EN: vary the consequence link.`),
    table('sheet-consequence-conn', 'Du plus familier au plus soutenu', ['Lien', 'Construction', 'Registre'], [
      ['du coup', '+ phrase', 'familier'],
      ["c'est pour ça que", '+ phrase', 'familier, courant'],
      ['donc', '+ phrase, ou au milieu', 'partout'],
      ["c'est pourquoi", '+ phrase', 'courant, écrit'],
      ['par conséquent, en conséquence', '+ phrase', 'soutenu'],
      ['de ce fait', '+ phrase', 'soutenu'],
      ["d'où", '+ nom, sans verbe', 'courant, écrit'],
      ['aussi (en tête)', '+ inversion', 'très soutenu'],
    ]),
    table('sheet-consequence-mode', 'Résultat ou but', ['Lien', 'Résultat (indicatif)', 'But (subjonctif)'], [
      ['si bien que', 'La réunion a débordé, si bien que j’ai raté mon train.', 'jamais'],
      ['de sorte que', 'Le guide a parlé lentement, de sorte que tout le groupe a compris.', 'Le guide parle lentement de sorte que tout le groupe comprenne.'],
      ['de façon que', 'même double sens', 'Écris lisiblement, de façon que chacun puisse te relire.'],
    ]),
    table('sheet-consequence-intensite', "L'intensité", ['Tournure', 'Devant', 'Exemple'], [
      ['si, tellement… que', 'adjectif, adverbe', "Le bruit était si fort qu'on ne s'entendait plus."],
      ['tant, tellement… que', 'verbe', 'Il a tant plu que la rivière est sortie de son lit.'],
      ['tant de, tellement de… que', 'nom', 'Il y avait tant de candidats que le jury a prolongé les entretiens.'],
      ['au point que, à tel point que', 'phrase', 'La tension est montée au point que la réunion a été suspendue.'],
      ['au point de', 'infinitif, même sujet', 'Elle était émue au point de ne plus pouvoir parler.'],
      ['tel que', 'nom, avec accord', 'La hausse est telle que certains commerçants ont fermé.'],
      ['trop, assez… pour que', 'adjectif, + subjonctif', 'La salle est trop petite pour que tout le monde puisse entrer.'],
    ]),
    table('sheet-consequence-verbes', 'Les verbes d’effet', ['Verbe', 'Avec', 'Exemple'], [
      ['provoquer', 'un accident, la colère, un fou rire', 'Le verglas a provoqué plusieurs accidents ce matin.'],
      ['causer', 'des dégâts, des problèmes', "L'orage a causé d'importants dégâts dans le quartier."],
      ['entraîner', 'un coût, un retard, une baisse', 'Un retard de livraison entraîne souvent des frais supplémentaires.'],
      ['susciter', "l'intérêt, un débat, des questions", 'Cette réforme a suscité de vives réactions.'],
      ['aboutir à', 'un accord, rien', 'Les négociations ont abouti à un accord.'],
    ]),
  ]),
  sheet('sheet-certitude', 'Doser la certitude', ['l’échelle', 'le conditionnel des médias', 'les pièges'], [
    teach('sheet-certitude-teach', 'Ne dis pas plus que tu ne sais',
      `Une cause peut être certaine, probable, une impression, rapportée ou inconnue. Chaque degré a ses mots. Le conditionnel des médias, que ${COND_REF} a introduit, rapporte une information sans la garantir. EN: every degree of certainty has its words.`),
    table('sheet-certitude-echelle', "L'échelle", ['Degré', 'Mots', 'Exemple'], [
      ['certain', 'il est certain que, sans aucun doute', 'Le retard est sans aucun doute dû à la neige.'],
      ['probable', 'sans doute, probablement, vraisemblablement', 'Le retard est sans doute dû à la neige.'],
      ['des indices', 'tout porte à croire que + indicatif', 'Tout porte à croire que la fuite provient du toit.'],
      ['une impression', 'il semble que, il semblerait que + subjonctif', 'Il semble que la panne vienne du réseau.'],
      ['rapporté', 'selon, d’après, le conditionnel', "L'incendie serait dû à un court-circuit."],
      ['inconnu', 'on ignore encore si, reste inconnu', 'On ignore encore si ces deux faits sont liés.'],
    ]),
    table('sheet-certitude-cond', 'Le conditionnel des médias', ['Temps', 'Forme', 'Exemple'], [
      ['présent', 'serait, pourrait', "L'incendie serait dû à un court-circuit."],
      ['passé', 'aurait + participe', 'Le conducteur aurait perdu le contrôle de sa voiture.'],
      ['passé, passif', 'aurait été + participe', "L'accident aurait été causé par le verglas."],
    ]),
    table('sheet-certitude-pieges', 'Trois pièges', ['À éviter', 'Correct', 'Pourquoi'], [
      ['sans doute pour un fait confirmé', 'le verbe seul, ou sans aucun doute', 'sans doute veut dire probablement'],
      ['Sans doute le retard est dû…', 'Le retard est sans doute dû…', 'en tête, à l’écrit, il fait inverser'],
      ['tout porte à croire qu’elle provienne', 'tout porte à croire qu’elle provient', 'une quasi-certitude : l’indicatif'],
    ]),
  ]),
  sheet('sheet-analyse', 'Écrire une analyse', ['le plan', 'varier les liens', 'la liste de contrôle'], [
    teach('sheet-analyse-teach', 'Un phénomène, ses causes, ses suites',
      `Une analyse présente un phénomène, en donne les causes graduées et les conséquences variées, dit ce qui reste incertain, puis conclut sur une question ouverte. « ${B223_REFRAME} » disait ${ARGU_REF} : ici, tu expliques plus que tu ne défends. EN: ${B223_REFRAME_EN} Here you explain more than you argue.`),
    table('sheet-analyse-plan', 'Le plan', ['Partie', 'Liens utiles', 'Exemple'], [
      ['le phénomène', 'de plus en plus, depuis', 'De plus en plus de familles quittent les grandes villes pour la campagne.'],
      ['une cause admise', 'étant donné que, s’explique par', "Ce départ s'explique d'abord par la hausse des loyers."],
      ['une cause écartée', "ce n'est pas que… c'est que", "Ce n'est pas que la ville ait perdu son charme, c'est qu'elle est devenue trop chère."],
      ['une conséquence', "d'où, entraîne, si bien que", "Certains villages renaissent, d'où la réouverture d'écoles et de commerces."],
      ['une nuance', 'sans doute, il semble que', 'Le télétravail a sans doute accéléré le mouvement.'],
      ['la conclusion', 'reste à savoir si', 'Reste à savoir si ce mouvement durera.'],
    ]),
    table('sheet-analyse-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Pas plus de deux parce que, ni plus de deux donc', 'compte-les, puis varie'],
      ['Chaque cause dit ce que tu sais', 'admise, probable, rapportée ?'],
      ['Le subjonctif après une cause écartée', "ce n'est pas qu'elle soit…"],
      ["D'où + un nom", "d'où la hausse, pas d'où ils…"],
      ['Dû accordé', 'la hausse est due à…'],
      ['Aucun chiffre inventé présenté comme vrai', 'dis « un exemple » ou « selon »'],
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-15-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural B2 speed.';
const EXERCISE = 'One voice, read as written, WITH the gaps read as a short pause (or the bracketed verbs read as infinitives): this is the exercise text, not the answer.';
const TRAP = "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions in promptSound are NEVER spoken.";
const REC_DESC: Record<string, string> = {
  'rec-b2-15-mediatheque': 'The news analysis of the Namur media library (act 1), one female voice with a Belgian accent, one take, the measured pace of a regional radio feature. The directrice’s quoted line is read in a second, warmer voice.',
  'rec-b2-15-rappel': 'The four recall cards (act 2). One coach voice. Cards one and two quote lessons 30 and 31 in B1; read them at the same pace as the new material.',
  'rec-b2-15-admise-ecoute': `${ONE_TAKE} Eight lines. Line four (puisque tu savais…) is read with a light reproach; the rest neutral.`,
  'rec-b2-15-aline': 'Aline and Marc (act 3), Lausanne, two voices, one take, a quiet office. Aline rehearses her speech half aloud, a little formal; a Swiss accent is welcome.',
  'rec-b2-15-renfort': 'The four cards of act 3. One voice. « D’autant plus que » is read as one group [dotɑ̃plykə], never stressed.',
  'rec-b2-15-piege-renfort': TRAP,
  'rec-b2-15-texte-a3': `The school director’s message (act 3). ${EXERCISE}`,
  'rec-b2-15-fatou': 'Fatou and Ibou (act 4), Liège, two voices, one take, end of the working day. Fatou is calm and a little ironic when she doubts a reason.',
  'rec-b2-15-contestee': 'The four cards of act 4. One voice. The subjunctive forms (veuille, soit) are read naturally, not stressed.',
  'rec-b2-15-contestee-ecoute': `${ONE_TAKE} Nine lines, neutral. Lines five and six (sous prétexte qu’il pleuvait / parce qu’il pleuvait) must be read with the same melody, so only the link differs.`,
  'rec-b2-15-piege-contestee': TRAP,
  'rec-b2-15-texte-a4': "The tenants’ association letter (act 4), one voice, firm and polite, read as written.",
  'rec-b2-15-samir': 'Samir and Claire (act 5), Montréal, two voices, one take, an association office. Québec accents welcome; Claire corrects gently.',
  'rec-b2-15-texte-a5': `The community garden brief (act 5). ${EXERCISE}`,
  'rec-b2-15-rapport': 'The incident report of the résidence Les Érables (act 6), one voice with a Québec accent, one take, the flat neutral tone of an official report.',
  'rec-b2-15-verbe': 'The four verb cards (act 6). One voice. Card one reads « due » exactly like « dû »: the agreement is visible, not audible, and the card says so.',
  'rec-b2-15-verbe-ecoute': `${ONE_TAKE} Nine lines, neutral.`,
  'rec-b2-15-texte-a6': "The building manager’s minutes (act 6), one voice, read as written with every parce que: the rewrite is the exercise.",
  'rec-b2-15-julien': 'Julien and Sophie (act 7), Brussels, two voices, one take, a small office. Sophie counts the donc with light humour.',
  'rec-b2-15-consequence': 'The four consequence cards (act 7). One voice. Card three reads « aussi a-t-il été renvoyé » with the liaison [atil], naturally.',
  'rec-b2-15-piege-consequence': TRAP,
  'rec-b2-15-texte-a7': "Julien’s report (act 7), one voice, read as written with its four donc: the rewrite is the exercise.",
  'rec-b2-15-lea': 'Léa and Hugo (act 8), Brussels, two voices, one take, a museum office. Léa reads her instructions clearly; Hugo stresses nothing.',
  'rec-b2-15-resultat': 'The four result-or-aim cards (act 8). One voice. Cards one and two differ only by the mood: read them with the same rhythm.',
  'rec-b2-15-resultat-ecoute': `${ONE_TAKE} Nine lines. Lines four and five (comprenne / a compris) must be read with identical rhythm; the mood alone must carry the difference.`,
  'rec-b2-15-piege-resultat': TRAP,
  'rec-b2-15-texte-a8': `The festival note to volunteers (act 8). ${EXERCISE}`,
  'rec-b2-15-intensite-ecoute': `${ONE_TAKE} Nine lines. No dramatic emphasis on tant, tellement or au point: the structure carries the intensity.`,
  'rec-b2-15-texte-a9': 'The neighbourhood party summary (act 9), one voice, read as written, pairs of short sentences with a pause between pairs.',
  'rec-b2-15-emilie': 'Émilie and Karim (act 10), Geneva, two voices, one take, a municipal communication office; a Swiss accent is welcome.',
  'rec-b2-15-effet': 'The four verb-of-effect cards (act 10). One voice, neutral.',
  'rec-b2-15-piege-effet': TRAP,
  'rec-b2-15-texte-a10': `The local paper’s brief (act 10). ${EXERCISE}`,
  'rec-b2-15-certitude-ecoute': `${ONE_TAKE} Nine lines, read as a radio news flash by one newsreader. Lines three and four (sans doute / sans aucun doute) with identical rhythm.`,
  'rec-b2-15-certitude': 'The four certainty cards (act 11). One voice. Card three quotes lesson 8 in B1; read it at the same pace as the others.',
  'rec-b2-15-texte-a11': 'The warehouse fire brief (act 11), one newsreader voice, read as written, every fact asserted: the hedged rewrite is the exercise.',
  'rec-b2-15-modele': "The magazine analysis on young city dwellers and the car (act 12), one voice, one take, the calm pace of a radio column.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 15',
  intro: 'At B1 you learned parce que, puisque, comme, donc and a first set of consequence links (lessons 30 and 31 in B1). This lesson goes past them. Parce que and donc state a link and nothing more; the other links also say what you assume or know. You learn to state an admitted cause (étant donné que, vu que, du fait que), add a stronger reason (d’autant plus que, dans la mesure où), doubt or reject a cause (sous prétexte que, non que and ce n’est pas que with the subjunctive), and carry a cause in a noun or a verb (faute de, à force de, être dû à, s’expliquer par). Then you vary consequences: d’où with a noun, de sorte que with the indicative for a result or the subjunctive for an aim, intensity with au point que and trop… pour que, and verbs such as entraîner, susciter and aboutir à. Finally you grade certainty: sans doute, il semble que, and the journalistic conditional. The task: a 200 to 250-word analysis of a social phenomenon, graded on the B2 writing criteria.',
  skill: 'PE',
  grammarAssumed: [COND_UNIT, SUBJ_DECL_UNIT, COORD_UNIT, SUBORD_UNIT, MODES_UNIT, NOMIN_UNIT],
  grammarIntroduced: [
    'Causal conjunctions graded by what the speaker assumes: étant donné que, vu que and du fait que for an admitted cause, with their noun forms (étant donné, vu, du fait de), against parce que as the only answer to pourquoi and puisque for a shared cause',
    "Dans la mesure où for a cause within a limit, d'autant plus que and d'autant que for a reinforcing reason, d'autant plus + adjective + que, and the false lead dans la mesure du possible",
    "Contested causes: sous prétexte que + indicative and sous prétexte de + infinitive for a doubted reason; non que, non pas que and ce n'est pas que + subjunctive for a rejected cause followed by the real one in the indicative; ce n'est pas parce que... que for a rejected inference",
    "Cause by preposition: à cause de against grâce à, en raison de and du fait de, par + bare noun, à force de, faute de, sous l'effet de; suite à as widespread but criticised, à la suite de in careful writing",
    "Cause by verb: être dû à with agreement of dû, s'expliquer par, provenir de, venir de, tenir à; the fact first, the cause after the verb",
    "Consequence connectors beyond donc: en conséquence, de ce fait, d'où + noun, aussi + inversion, du coup as familiar, and the register ladder",
    'Result against purpose: si bien que and de sorte que + indicative, de sorte que and de façon que + subjunctive',
    'Consequence of intensity: tant, tant de, au point que, au point de, à tel point que, tel que, trop and assez... pour que + subjunctive, trop... pour + infinitive',
    'Consequence by verb: provoquer, causer, entraîner, susciter, aboutir à, with their typical nouns',
    "Grading certainty in a causal claim: sans doute (probably) against sans aucun doute, il semble que + subjunctive, tout porte à croire que + indicative, probablement, vraisemblablement, the journalistic conditional (serait dû, aurait été causé), selon and d'après",
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu connais parce que, puisque et donc. Ici, tu apprends les liens qui disent aussi ce que tu sais : une cause admise, renforcée, mise en doute ou écartée, une cause dans un nom ou un verbe, une conséquence qui est un résultat, un but, une intensité ou un effet, et une certitude dosée. À la fin, tu écris en 200 à 250 mots l'analyse d'un phénomène de société.",
    minutes: 160,
    difficulty: 4,
    glyph: 'd’où',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: CAUSE_CONSEQUENCE_TERMS,
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
