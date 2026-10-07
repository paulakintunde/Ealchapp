// c1.23.l1 « Le tact au travail » — the lesson.
// DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (THE WORKSHOP SHAPE) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (decisions 1-40,
// the wave 2 notes, the wave 5 review lessons, the wave 6 brief). Structural
// models: b2.26 « Réunions et négociations » (`../b2/reunions-negociation-*`)
// and the reviewed c1.11 « Rapports et comptes rendus »
// (`./rapports-comptes-rendus-*`). Skill PE; no exam task of its own.
//
// Not imported, not merged into seed.json, not published. `task` is a real
// section type, so `sections` is `LessonSection[]` and the validators run on
// `LESSON` itself (`lessonWithoutTask()` returns it unchanged).
//
// ══════════════════════════════════════════════════════════════════════════
//  THE WORKSHOP SHAPE, AS BUILT HERE
// ══════════════════════════════════════════════════════════════════════════
//
//   Every act from 2 to 11 is built around ONE ANCHOR TEXT (a real genre of
//   working text, original, about 220 to 330 words) and ONE MOVE, in the
//   same beats:
//
//     1. MEET THE TEXT     a `reading`, questions behind `questionsInModal`;
//                          its FIRST question is always « Devine le sens »;
//                          the glossary keeps one entry.
//     2. NOTICE THE MOVE   a `tapTable`, `cardDeck`, `examples` or `focus`.
//     3. PRACTISE          one or two checks on NEW material (groupDrill,
//                          trapDrill, commonErrors, listening).
//     4. USE IT            « Pour ton message », always the same groupDrill
//                          shape: two versions of a line, one with THIS
//                          act's move.
//
//   then the act check (control pages, gated). Act 1 is the problem scene
//   and the ONE recap; act 12 is the production act. The Morencie case of
//   Ardisque runs from act 1 to act 11; the task uses another client (the
//   théâtre des Glaces), so the model cannot be copied.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (text · move · missions)
// ══════════════════════════════════════════════════════════════════════════
//
//    1  Le non qui blesse              6  scene + two drafts to a client ·
//                                         the slap and the fog; ONE recap
//                                         (B1 39, B2 26, C1 6, C1 9)
//    2  Les degrés de l’indirect       6  the company's writing guide · the
//                                         ladder of a written request
//                                         (tapTable, trapDrill)
//    3  Refuser par écrit              6  the refusal sent to the client ·
//                                         early, once, one reason, a next
//                                         step (cardDeck, commonErrors)
//    4  Annoncer une mauvaise nouvelle 6  the delay email · at the top,
//                                         owned, impact, plan; the client's
//                                         voicemail heard once (listening)
//    5  Dire non à sa hiérarchie       6  a team lead's email to the CEO ·
//                                         make the boss arbitrate (focus)
//    6  Relancer, puis faire remonter  6  a thread with a supplier · two
//                                         relances, open escalation
//                                         (cardDeck, trapDrill)
//    7  Quand la politesse pique       6  a thread that sours · the barbs
//                                         and their neutral rewrites
//                                         (tapTable, commonErrors)
//    8  Les mots qui divisent          6  the director's note · contested
//                                         office words with their sources
//                                         (tapTable, trapDrill)
//    9  Un courriel, deux lecteurs     6  the onboarding page · France and
//                                         Québec, sourced, no stereotype
//                                         (cardDeck, commonErrors)
//   10  Des titres qui disent          6  a slide plan with comments ·
//                                         titre-message, signposting
//                                         (examples, trapDrill)
//   11  La question qui fâche          6  the director's coaching note ·
//                                         the hostile, trap, off-topic and
//                                         confidential question; a heated
//                                         exchange heard once (listening)
//   12  Ton message                   11  the model message · plan, role
//                                         play, TASK, quiz, review
//
//   TOTAL 77 missions, 12 acts (6 × 11 + 11). Corpus: 155 authored rows
//   (.1000-.1156, .1064 and .1110 left unused after the twin check) in
//   twelve blocks plus 28 reused rows (19 seed rows of B1 36 and 39, B2 26,
//   C1 6 and C1 9; 9 Postgres-only: eight legacy c1 rows of this theme,
//   named only, and one B1 bank row). 12 readings (one per act) and 2
//   listenings. Quiz: 11 rounds of 8. Eleven error triggers, eleven
//   drills, five reference sheets, thirteen terms, three tapTables.
//   Chapter artwork: `tact-travail-image-prompts.md`, 12 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le tact n’adoucit pas le message : il le livre intact. »
//   EN: Tact does not water the message down: it delivers it intact.
//
//   ONE METAPHOR, THE PARCEL DELIVERED INTACT: the content (the no, the
//   delay, the limit) is never changed; tact is only the packing. Too
//   little and it breaks the relationship (act 1's first draft); too much
//   and the reader unwraps layer after layer and finds nothing (act 1's
//   second draft, acts 2 and 7). Rejected candidates: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    tact in WRITING at work: the degree of indirectness of a
//           written request; the written refusal to a client; bad news;
//           saying no upward (arbitrage); the relance and open escalation;
//           passive-aggressive politeness; contested office words weighed
//           by their sources (revenir vers vous, impacter, initier, booker,
//           un call, acter, escalader); France and Québec conventions in
//           email (tutoiement, salutations, courriel), no stereotype;
//           presenting (titre-message, one idea per slide, signposting at
//           work); the hostile, trap, off-topic and confidential question
//           at work; the refusal / bad-news task.
//   QUOTES  the reframes of lesson 39 in B1, lesson 26 in B2 and lessons 6
//           and 9 in C1, each imported from its corpus, never retyped;
//           their rows reused by id.
//   LEAVES  the email's parts and the B1 refusal and apology shapes to
//           lesson 39 in B1; meetings, negotiation and the meeting calques
//           to lesson 26 in B2; politeness and distance in SPEECH, the dose,
//           the hedged criticism to lesson 6 in C1; the exposé, reformulating
//           a question and buying time to lesson 9 in C1; reports and
//           minutes to lesson 11 in C1; « suite à » to lesson 7 in C1.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use vous with clients and superiors,
//   and tu or vous between colleagues as the scene says. Natural,
//   unsimplified C1 French; English authored on every learner string
//   (`en`, or a final « EN: »), never on an answer. Every `say` is French.
//   Citations by trail position in French, never a raw id. Typographic ’
//   in every authored French string; no seed row with a straight ' inside
//   the scenario. Norms: Académie, OQLF, Larousse and Usito cited side by
//   side, never overridden, and no contested word is taught as an error:
//   each is « déconseillé par… » in a careful written message. Mission
//   answer slots spread by `balanceSlots()` (options and index rotated
//   together, no text changed), the quiz by `spreadSlots()`; no `why`
//   names a position.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. « JE REVIENS VERS VOUS »: lesson 26 in B2 teaches « revenir vers
//      quelqu’un » as « très courant en France au travail » (row
//      fr.b2.affaires.1307, reused here). The Académie calls it « incorrecte
//      […] un anglicisme ». This lesson keeps both: usage stated, verdict
//      quoted, and a careful alternative (« je reprends contact avec
//      vous »). Keep that line, or also retouch b2.26's row note?
//   2. « UN CALL »: no OQLF article, no Larousse entry, no Académie page
//      found. The lesson only says that and offers appel / réunion
//      téléphonique / visioconférence. Accept?
//   3. FRANCE vs QUÉBEC: the only behavioural contrast stated is the OQLF's
//      tutoiement sentence (2015). No source was found for « directness »;
//      the act 9 text says so and refuses the stereotype. Accept?
//   4. « CORDIALEMENT »: the OQLF files it under « formules à caractère plus
//      personnel »; the act 9 text adds, as the invented company's own
//      observation, that colleagues in Nantes use it as a neutral closing.
//      Keep, or drop the observation?
//   5. Two drafted ids are left unused (.1064, .1110) because the twin
//      check found them published as fr.b1.affaires.087 and
//      fr.b1.affaires.1161, now reused instead. Fine to leave the gaps?
//   6. RUBRIC: six criteria, 20 points (decision 14 pattern), model answer
//      about 330 words. Keep?
//   7. « la leçon 11 du C1 » is cited by its planned position (c1.11 is not
//      in the seed yet; it publishes with this lesson in v87).
//   8. `coachVoice: 'coach-fr-FR'` is inert, kept as every lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, DB_ONLY_ROWS,
  BROUILLONS_TEXT, GUIDE_TEXT, REFUS_TEXT, RETARD_TEXT, KARIM_TEXT, ESCALADE_TEXT, PIQUE_TEXT,
  MOTS_TEXT, PAYS_TEXT, DIAPOS_TEXT, QUESTIONS_TEXT, MODELE_TEXT, GLACES_FICHE,
  B139_REFRAME, B226_REFRAME, C106_REFRAME, C109_REFRAME,
  COURRIELS_UNIT, REUNION_UNIT, NUANCER_UNIT, EXPOSE_UNIT,
  COURRIELS_REF, REUNION_REF, NUANCER_REF, EXPOSE_REF, RAPPORTS_REF, REFORMULER_REF,
} from './tact-travail-corpus.ts';
import { TACT_TRAVAIL_TERMS } from './tact-travail-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string; ipa?: string; respell?: string };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const DB_ONLY = new Map<string, SrcItem>(DB_ONLY_ROWS.map((r) => [r.id, r]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));

/** An item's fr/en, from this corpus, the seed, or the Postgres-only rows.
 *  Throws on a typo, so no section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id) ?? DB_ONLY.get(id);
  if (!r) throw new Error(`c1.23: no item ${id}`);
  return r;
}
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`c1.23: no ipa on ${id}`);
  return r.ipa;
}
/** The corpus row's respelling, BRACKETED for a section. Authored rows only. */
function rsOf(id: string): string {
  const r = ROW.get(id);
  if (!r?.respell) throw new Error(`c1.23: no authored respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
const free = (fr: string, en: string, note?: string): GItem => ({ fr, en, ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
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

/** THE « USE IT » BEAT: the act's one tool for the graded message. */
function pourTonMessage(id: string, frSub: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title: 'Pour ton message', frSub,
    groups, audio: AUDIO, say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE NON QUI BLESSE
 *
 *  The problem: two drafts to a client, one that slaps and one where the no
 *  and the delay disappear. Then ONE recap of the lessons this one builds
 *  on, by trail position, rows reused by id.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene', id: 'a1-scene', render: 'screens', layer: 'core',
  title: 'Avant d’envoyer', frSub: 'La demande de la salle Morencie',
  setting: { place: 'Bureau de la directrice générale, Ardisque', city: 'Québec', time: '16 h 10', ambience: 'deux brouillons imprimés sur le bureau, un écran ouvert sur la boîte de réception' },
  beats: [
    { kind: 'narration', text: 'Québec, chez Ardisque, une entreprise qui conçoit des logiciels de billetterie. Tu es chargé·e de compte. La salle Morencie, à Trois-Rivières, demande un plan de salle sur mesure, gratuit. C’est hors contrat, et la livraison prendra du retard. Ta directrice lit tes brouillons.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Isabelle Thériault', fr: 'Votre premier brouillon dit vrai, mais il claque comme une porte.', en: 'Your first draft is accurate, but it slams like a door.', respell: '[votr pruh-myay broo-YOHⁿ | dee VREH | meh eel KLAK | komm ünn PORT]', stage: 'Elle pose la première feuille.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'you', speaker: 'Toi', fr: 'C’est pour ça que j’ai écrit le second, beaucoup plus doux.', en: 'That is why I wrote the second one, much gentler.', respell: '[seh poor SA | kuh zhay ay-KREE luh suh-GOHⁿ | boh-koo plü DOO]', stage: 'Tu y as passé une heure.', size: 'md', audio: AUDIO },
    { kind: 'bubble', from: 'them', speaker: 'Isabelle Thériault', fr: 'Le second est si doux que monsieur Dion croira que c’est oui, et il ne verra pas le retard.', en: 'The second is so gentle that Mr Dion will think it is a yes, and he will not see the delay.', respell: '[luh suh-GOHⁿ eh see DOO | kuh muh-syeu DYOHⁿ krwa-RA | kuh seh WEE | ay eel nuh veh-RA pa luh ruh-TAR]', stage: 'Elle tapote la deuxième feuille.', size: 'md', audio: AUDIO },
    { kind: 'narration', text: 'Elle te rend les deux feuilles. Tu as une phrase pour ouvrir ta réponse au client.', size: 'md', audio: AUDIO },
    {
      kind: 'choice', prompt: 'Quelle première phrase écris-tu ?', size: 'lg',
      options: [
        { fr: src(E(1000)).fr, respell: rsOf(E(1000)), en: src(E(1000)).en, outcome: 'breaks', audio: AUDIO },
        { fr: src(E(1001)).fr, respell: rsOf(E(1001)), en: src(E(1001)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Isabelle Thériault hoche la tête. Le non est là dès la première ligne, et l’explication suit. « Maintenant, la raison, puis ce que vous lui proposez. »',
        breaks: 'Isabelle Thériault soupire. Le refus est juste, mais monsieur Dion va lire « c’est non » comme une gifle, et répondre à la gifle plutôt qu’au refus.',
      },
    },
    {
      kind: 'break', heading: 'Le message, ou la manière',
      body: `${Cap(COURRIELS_REF)} t’a appris à refuser : remercier, dire non, donner une raison, proposer autre chose. Au travail, tout se joue sur la manière : le non reste entier, seul l’emballage change. EN: The no stays whole; only the packing changes.`,
      wrong: { fr: src(E(1000)).fr, ipa: ipaOf(E(1000)), respell: rsOf(E(1000)), en: src(E(1000)).en },
      right: { fr: src(E(1001)).fr, ipa: ipaOf(E(1001)), respell: rsOf(E(1001)), en: src(E(1001)).en },
      coach: `${REFRAME} EN: ${REFRAME_EN}`, size: 'lg', audio: AUDIO,
    },
    { kind: 'resolve', text: 'Cette leçon t’apprend le tact à l’écrit et devant un public : refuser, annoncer un retard, dire non à ta hiérarchie, faire remonter un problème, présenter, répondre aux questions difficiles. À la fin, tu écriras un refus et une mauvaise nouvelle à une cliente.', size: 'md' },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['tact', 'refus'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals', id: 'a1-goals', layer: 'core', title: 'À la fin de cette leçon',
  goals: [
    { t: 'Doser l’indirect', s: 'Acte 2 : demander par écrit avec la bonne marge, ni ordre ni brouillard' },
    { t: 'Dire non et annoncer', s: 'Actes 3 à 6 : refuser, annoncer un retard, dire non vers le haut, faire remonter' },
    { t: 'Choisir ses mots', s: 'Actes 7 à 9 : les piques polies, les mots contestés, la France et le Québec' },
    { t: 'Tenir une salle', s: 'Actes 10 et 11 : des titres qui disent quelque chose, les questions qui fâchent' },
  ],
  audio: AUDIO, say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a1-lecture', layer: 'core', questionsInModal: true,
  title: 'Tes deux brouillons', frSub: 'Un qui gifle, un qui noie',
  text: BROUILLONS_TEXT,
  glossary: [
    { word: 'compromise', en: 'jeopardised', note: 'Ici, menacée : la date risque de ne pas être tenue.' },
  ],
  questions: [
    { q: 'Devine le sens, sans dictionnaire : « Il ne serait peut-être pas impossible d’envisager éventuellement quelque chose ». Que dit vraiment cette phrase ?', a: 'Presque rien : quatre précautions empilées (conditionnel, peut-être, pas impossible, éventuellement) cachent le refus.' },
    { q: 'Qu’est-ce qui blesse dans le premier brouillon ?', a: '« Donc c’est non », « nous ne travaillons pas gratuitement », et le retard mis en partie sur le dos du client.' },
    { q: 'Le premier brouillon est-il faux ?', a: 'Non : les faits sont justes (hors contrat, six semaines, retard). C’est la manière qui fâche.' },
    { q: 'Que croit le client après le deuxième brouillon ?', a: 'Que sa demande est peut-être acceptée, et qu’il n’y a qu’un petit ajustement de calendrier.' },
    { q: 'Quelle information grave disparaît dans le deuxième brouillon ?', a: 'Le retard : « quelques petits ajustements, rien d’inquiétant », alors que la livraison du 15 novembre est compromise.' },
    { q: 'Que demande Isabelle, au fond ?', a: 'Que le client comprenne exactement les deux nouvelles, sans se sentir agressé.' },
  ],
  audio: REC('rec-c1-23-brouillons'), say: REFRAME, terms: ['tact', 'refus'],
};

/** THE ONE RECAP: one group per lesson it builds on, rows reused by id,
 *  each reframe imported, never retyped. */
const A1_RAPPEL: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a1-rappel', layer: 'core', size: 'lg',
  title: 'Ce que tu sais déjà', frSub: 'Quatre leçons, un rappel',
  groups: [
    grp(Cap(COURRIELS_REF), [
      it('fr.b1.correspondance.1076', 'le refus, au B1'),
      it('fr.b1.correspondance.1140', 'l’excuse, au B1'),
    ], chk('Au B1, un refus écrit...', ['remerciait, disait non, donnait une raison et proposait autre chose', 'évitait de dire non'], 0,
      `« ${B139_REFRAME} » Ici, le même refus, avec un client et des enjeux. EN: the same shape, higher stakes.`)),
    grp(Cap(REUNION_REF), [
      it('fr.b2.affaires.1204', 'négocier'),
      it('fr.b2.affaires.1283', 'nuancer un désaccord'),
    ], chk('Au B2, en réunion, un non sec...', ['fermait la porte ; une condition la gardait ouverte', 'était toujours la meilleure réponse'], 0,
      `« ${B226_REFRAME} » Ici, tu passes de la réunion à l’écrit, qui ne rattrape rien. EN: from the meeting to writing.`)),
    grp(Cap(NUANCER_REF), [
      it('fr.c1.nuances-et-registres.1008', 'à l’oral'),
    ], chk(`${Cap(NUANCER_REF)} t’a appris, à l’oral, à...`, ['doser la nuance sans éteindre le message', 'nuancer chaque mot'], 0,
      `« ${C106_REFRAME} » Cette leçon applique la même dose à l’écrit. EN: the same dose, in writing.`)),
    grp(Cap(EXPOSE_REF), [
      it('fr.c1.discours-dexamen.1291', 'devant un jury'),
    ], chk(`${Cap(EXPOSE_REF)} t’a appris, devant un jury, à...`, ['reformuler, répondre, puis vérifier', 'éviter les questions'], 0,
      `« ${C109_REFRAME} » Ici, la salle n’est plus un jury, mais un client ou un comité. EN: from a jury to a client.`)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['tact'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a1-usages', layer: 'core', title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Un client t’écrit, déjà fâché', fr: src(E(1006)).fr, en: src(E(1006)).en },
    { situation: 'Tu réponds à un message qui t’agace', fr: src(E(1011)).fr, en: src(E(1011)).en },
    { situation: 'Ton courriel part sans toi pour l’expliquer', fr: src(E(1008)).fr, en: src(E(1008)).en },
    { situation: 'Tu relis avant d’envoyer', fr: src(E(1009)).fr, en: src(E(1009)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['tact'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le premier brouillon', 'Que reproche Isabelle au premier brouillon ?', ['Il est juste, mais blessant.', 'Il est faux.', 'Il est trop long.'], 0,
    'Les faits sont exacts ; la manière fâche. EN: accurate, but hurtful.'),
  ctl('Le second', 'Et au second ?', ['Il est si doux que le refus et le retard disparaissent.', 'Il est trop sec.', 'Il contient trop de chiffres.'], 0,
    'Le message ne passe plus. EN: the message is lost.'),
  ctl('La mission', 'À la fin de la leçon, tu vas écrire...', ['un rapport de dix pages', 'un message de refus et de mauvaise nouvelle à un client', 'un discours'], 1,
    'Entre 250 et 400 mots, à partir d’une fiche de faits. EN: 250 to 400 words.'),
], ['tact']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le non qui blesse',
    opener: {
      line: 'Tout est vrai dans ta réponse, et pourtant le client va se fâcher : ici tu découvres ce que le tact change, et ce qu’il ne change pas. EN: Everything in your reply is true, and yet the client will be angry: here you find out what tact changes, and what it does not.',
      imageRef: 'lessons/tact-travail/act01.jpg',
    },
    sections: [],
    milestone: 'Tu sais qu’un message difficile garde tout son contenu et que seul l’emballage se choisit. EN: You know a hard message keeps all its content and only its packing is chosen.',
    estScreens: 32, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_RAPPEL, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LES DEGRÉS DE L’INDIRECT
 *
 *  TEXT: a page of the company's writing guide. MOVE: the degree of
 *  indirectness tells the reader whether he has a choice; dose it to the
 *  stakes (lesson 9 in B1 owns the request ladder in general; lesson 6 in
 *  C1 owns « je vous saurais gré de » in speech: both cited).
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a2-lecture', layer: 'core', questionsInModal: true,
  title: 'Demander par écrit', frSub: 'Une fiche du guide de rédaction',
  text: GUIDE_TEXT,
  glossary: [
    { word: 'facultative', en: 'optional', note: 'Qu’on peut faire ou ne pas faire, au choix.' },
  ],
  questions: [
    { q: 'Devine le sens : « le remerciement d’avance laisse entendre que la chose est acquise ». Que veut dire « acquise » ici ?', a: 'Déjà obtenue, considérée comme certaine.' },
    { q: 'Selon la fiche, quelles deux choses dit une demande écrite ?', a: 'Ce que tu veux, et la marge que tu laisses au lecteur.' },
    { q: 'Pourquoi l’impératif passe-t-il mal adressé à une autre équipe ?', a: 'Il ne laisse aucun choix et sonne comme un ordre à quelqu’un qui ne te doit rien.' },
    { q: 'Que comprend le lecteur devant « Serait-il envisageable de… » ?', a: 'Qu’il peut dire non : on lui demande si la chose est seulement possible.' },
    { q: 'Quelle est la première erreur que la fiche relève ?', a: 'Empiler les précautions pour une chose indispensable : le lecteur la prend pour une faveur facultative.' },
    { q: 'Quelle est la règle de la maison ?', a: 'Si c’est obligatoire, le dire et dire pourquoi ; si c’est une faveur, laisser vraiment le choix.' },
  ],
  audio: REC('rec-c1-23-guide'), say: REFRAME, terms: ['indirect'],
};

const A2_ECHELLE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a2-echelle', layer: 'core', sheetId: 'sheet-indirect',
  title: 'Six degrés pour une même demande', frSub: 'Du plus ferme au plus ouvert',
  cols: ['Forme', 'Ce que le lecteur entend', 'Quand'],
  rows: [
    { cells: ['Envoyez-moi…', 'un ordre', 'entre proches, dans l’urgence'],
      say: src(E(1012)).fr,
      detail: { title: 'L’impératif', body: 'Aucun choix. Entre collègues proches, il passe ; vers une autre équipe ou un client, il sonne comme un ordre. EN: no choice; an order.', say: src(E(1012)).fr } },
    { cells: ['Je compte sur vous pour…', 'une demande ferme', 'une obligation, avec confiance'],
      say: src(E(1013)).fr,
      detail: { title: 'La confiance', body: 'La demande reste ferme, mais elle s’appuie sur la relation. Bien pour une échéance qui ne bouge pas. EN: firm, resting on trust.', say: src(E(1013)).fr } },
    { cells: ['Merci de bien vouloir…', 'une consigne polie', 'courriels administratifs'],
      say: src(E(1014)).fr,
      detail: { title: 'La consigne', body: 'Le merci d’avance présente la chose comme acquise. Courant dans les courriels de service, plus sec qu’il n’en a l’air. EN: a polite instruction.', say: src(E(1014)).fr } },
    { cells: ['Pourriez-vous…', 'une question polie', 'presque partout'],
      say: src('fr.b1.correspondance.1172').fr,
      detail: { title: 'La question polie', body: `Le conditionnel de politesse, que tu connais depuis ${COURRIELS_REF}. Il convient presque partout. EN: the polite conditional.`, say: src('fr.b1.correspondance.1172').fr } },
    { cells: ['Je vous serais reconnaissant·e de…', 'un service demandé', 'une faveur'],
      say: src(E(1015)).fr,
      detail: { title: 'La reconnaissance', body: `On demande un service et l’on reconnaît une dette. Sa cousine soutenue, « je vous saurais gré de », appartient à ${NUANCER_REF}. EN: a favour asked.`, say: src('fr.c1.nuances-et-registres.1073').fr } },
    { cells: ['Serait-il envisageable de…', 'une question ouverte', 'quand le non est permis'],
      say: src(E(1016)).fr,
      detail: { title: 'L’ouverture', body: 'On demande si c’est seulement possible : le lecteur entend qu’il peut refuser. À réserver aux vraies faveurs. EN: the reader hears he may refuse.', say: src(E(1016)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['indirect'],
};

const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a2-trier', layer: 'core', size: 'lg',
  title: 'Obligation ou faveur', frSub: 'De nouvelles demandes',
  groups: [
    grp('Trois demandes fermes et polies', [
      it(E(1013), 'la confiance'),
      it(E(1023), 'une date ferme, et pourquoi'),
      it(E(1017), 'le souhaitable'),
    ], chk('Ces trois phrases conviennent pour...', ['une chose indispensable', 'un service facultatif'], 0,
      'Elles ne laissent pas croire au lecteur qu’il peut refuser. EN: they leave no false choice.')),
    ctl('Le service', 'Tu demandes à une collègue d’un autre service de relire ton texte, pour te rendre service. Tu écris...', ['« Serait-il envisageable que vous jetiez un œil à mon texte cette semaine ? »', '« Relisez mon texte d’ici vendredi. »'], 0,
      'Elle ne te doit rien : laisse-lui vraiment le choix. EN: a favour, a real choice.'),
    ctl('L’indispensable', 'Sans les résultats de Karim, la livraison est bloquée. Tu écris...', ['« La date de vendredi est ferme : sans les résultats, nous ne pourrons pas livrer. »', '« Serait-il éventuellement possible, si cela ne vous dérange pas, d’envisager un envoi ? »'], 0,
      'Ferme et motivé : il sait que ce n’est pas facultatif, et pourquoi. EN: firm and explained.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['indirect'],
};

const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a2-piege', layer: 'core', swipe: true,
  title: 'Six demandes mal dosées',
  rule: {
    title: 'La dose suit l’enjeu',
    body: 'Trop direct envers quelqu’un qui ne te doit rien, et la demande sonne comme un ordre ; trop indirect pour une chose indispensable, et elle sonne comme une faveur. Règle la marge sur ce que tu demandes. EN: Match the dose to the stakes.',
  },
  cards: [
    { promptLabel: 'trop de précautions', promptSound: 'Serait-il éventuellement possible, si cela ne vous dérange pas trop, d’envisager peut-être un envoi ?',
      fr: src(E(1023)).fr, ipa: ipaOf(E(1023)),
      tip: 'C’est indispensable : dis-le, et dis pourquoi. EN: say it is essential.' },
    { promptLabel: 'un ordre à un client', promptSound: 'Envoyez-nous votre logo avant lundi.',
      fr: src(E(1013)).fr, ipa: ipaOf(E(1013)),
      tip: 'Un client n’est pas ton équipe : la confiance plutôt que l’ordre. EN: trust, not an order.' },
    { promptLabel: 'une faveur exigée', promptSound: 'Merci de relire mon texte d’ici demain.',
      fr: src(E(1015)).fr, ipa: ipaOf(E(1015)),
      tip: 'Un service se demande, il ne s’exige pas. EN: a favour is asked.' },
    { promptLabel: 'une faveur mal dite', promptSound: 'Je vous demande un dernier effort, c’est obligatoire.',
      fr: src(E(1021)).fr, ipa: ipaOf(E(1021)),
      tip: '« Je me permets » adoucit sans retirer la demande. EN: softens, keeps the request.' },
    { promptLabel: 'le souhait au mauvais mode', promptSound: 'Il serait souhaitable que les résultats nous parviendront avant vendredi.',
      fr: src(E(1017)).fr, ipa: ipaOf(E(1017)),
      tip: 'Après « il serait souhaitable que », le subjonctif : parviennent. EN: subjunctive.' },
    { promptLabel: 'une règle oubliée', promptSound: 'Je demande toujours de la même façon, à tout le monde.',
      fr: src(E(1020)).fr, ipa: ipaOf(E(1020)),
      tip: 'La forme change avec l’enjeu. EN: the form follows the stakes.' },
  ],
  drill: [
    { promptSay: 'Je compte … vous pour m’envoyer les résultats vendredi.', opts: ['sur', 'à'], correct: 0 },
    { promptSay: 'Il serait souhaitable que les résultats nous … avant vendredi.', opts: ['parviennent', 'parviendront'], correct: 0 },
    { promptSay: 'Je vous serais … de m’envoyer les résultats.', opts: ['reconnaissante', 'reconnaissance'], correct: 0 },
    { promptSay: 'Pour une chose indispensable, une forme …', opts: ['ferme et polie', 'très indirecte'], correct: 0 },
    { promptSay: 'Pour une faveur, je laisse … le choix.', opts: ['vraiment', 'jamais'], correct: 0 },
    { promptSay: 'Merci de bien … m’envoyer les résultats.', opts: ['vouloir', 'pouvoir'], correct: 0 },
    { promptSay: 'Serait-il … de recevoir les résultats d’ici vendredi ?', opts: ['envisageable', 'obligatoire'], correct: 0 },
    { promptSay: 'Je me … de vous demander un dernier effort.', opts: ['permets', 'promets'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'La dose suit l’enjeu' },
    { label: 'Six cartes', kind: 'cards', title: 'Des demandes mal dosées' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six demandes justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-23-piege-indirect'), say: REFRAME, terms: ['indirect'],
};

const A2_VERSION = pourTonMessage('a2-version', 'Ta demande au client', [
  grp('Deux demandes à monsieur Dion', [
    free('Serait-il éventuellement envisageable que vous nous transmettiez peut-être votre plan de salle actuel ?', 'Might it possibly be conceivable for you to perhaps send us your current seating plan?', 'trop ouvert'),
    free('Pourriez-vous nous transmettre votre plan de salle actuel d’ici jeudi ? Sans lui, nous ne pourrons pas configurer la billetterie.', 'Could you send us your current seating plan by Thursday? Without it, we cannot set up the ticketing.', 'polie et motivée'),
  ], chk('Laquelle sert ton message ?', ['la seconde', 'la première'], 0,
    'Le plan est indispensable : une question polie, une date, une raison. EN: polite, dated, explained.')),
  grp('La règle', [
    it(E(1019), 'la règle'),
    it(E(1018), 'ce que lit le lecteur'),
  ], chk('Tu demandes un service que le client peut refuser. Tu choisis...', ['une forme qui lui laisse vraiment le choix', 'l’impératif'], 0,
    'Une faveur reste une faveur. EN: a favour leaves a choice.')),
], ['indirect']);

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La marge', 'Plus une demande est indirecte, plus le lecteur...', ['se croit libre de refuser', 'se sent obligé', 'lit vite'], 0,
    'L’indirect ouvre le choix. EN: indirect opens the choice.'),
  ctl('L’obligation', 'Pour une échéance indispensable, tu écris...', ['« Je compte sur vous pour… »', '« Serait-il éventuellement possible… »'], 0,
    'Ferme et poli. EN: firm and polite.'),
  ctl('Le mode', '« Il serait souhaitable que les résultats nous … »', ['parviennent', 'parviendront', 'parvenir'], 0,
    'Subjonctif après « il serait souhaitable que ». EN: subjunctive.'),
], ['indirect']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Les degrés de l’indirect',
    opener: {
      line: 'Une même demande peut sonner comme un ordre ou comme une simple suggestion : ici tu apprends à régler la marge que tu laisses au lecteur. EN: The same request can sound like an order or a mere suggestion: here you learn to set the room you leave the reader.',
      imageRef: 'lessons/tact-travail/act02.jpg',
    },
    sections: [],
    milestone: 'Tu choisis le degré d’indirect selon l’enjeu : ferme pour l’indispensable, ouvert pour la faveur. EN: You choose the degree of indirectness by the stakes: firm for the essential, open for a favour.',
    estScreens: 34, restPoints: ['a2-echelle'],
  },
  sections: [A2_LECTURE, A2_ECHELLE, A2_TRIER, A2_PIEGE, A2_VERSION, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — REFUSER PAR ÉCRIT
 *
 *  TEXT: the refusal sent to the client. MOVE: the no comes early and once,
 *  with one true reason and a next step; no false hope (past the B1 shape
 *  of lesson 39 in B1, cited in act 1).
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a3-lecture', layer: 'core', questionsInModal: true,
  title: 'Le refus envoyé', frSub: 'Un non, une raison, deux solutions',
  text: REFUS_TEXT,
  glossary: [
    { word: 'avenant', en: 'contract amendment', note: 'Un document qui modifie ou complète un contrat déjà signé.' },
  ],
  questions: [
    { q: 'Devine le sens : « nous mesurons ce qu’elle représente pour votre équipe ». Que veut dire « mesurer » ici ?', a: 'Comprendre l’importance de quelque chose, en apprécier la portée.' },
    { q: 'À quel moment arrive le non ?', a: 'Au troisième paragraphe, après un accueil court ; il n’est dit qu’une fois.' },
    { q: 'Quelle est la raison donnée, et pourquoi est-elle solide ?', a: 'Six semaines de travail que le budget de juin ne couvre pas : un fait, qu’on ne peut pas discuter.' },
    { q: 'Que propose Olivier à la place ?', a: 'Le plan de salle dans la version standard du printemps, sans frais, avec la salle comme site pilote ; ou un développement sur mesure payant, par avenant.' },
    { q: 'Le message laisse-t-il un faux espoir ?', a: 'Non : il ne dit pas « pour l’instant » ; il donne deux voies précises et datées.' },
    { q: 'Comment se termine le message ?', a: 'Par une proposition d’appel à une date choisie par le client, puis une formule de salutation complète.' },
  ],
  audio: REC('rec-c1-23-refus'), say: REFRAME, terms: ['refus'],
};

const A3_GESTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a3-gestes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-messages',
  title: 'Quatre gestes d’un refus écrit', frSub: 'Accueillir, refuser, motiver, proposer',
  hint: 'Quatre cartes. Repère où chaque geste se trouve dans le message d’Olivier.',
  audio: AUDIO, say: REFRAME, terms: ['refus'],
  cards: [
    { head: 'Accueillir', label: 'la demande, pas la personne', fr: src(E(1028)).fr, sub: rsOf(E(1028)),
      body: 'Une phrase qui montre que tu as compris l’enjeu de la demande. Pas trois : sinon le lecteur croit à un oui. EN: one sentence showing you understood.' },
    { head: 'Refuser', label: 'tôt, une fois', fr: src(E(1025)).fr, sub: rsOf(E(1025)),
      body: '« Il ne nous est pas possible de », « nous ne sommes pas en mesure de » : le non est clair et impersonnel, sans « malheureusement » à chaque ligne. EN: a clear, impersonal no.' },
    { head: 'Motiver', label: 'une raison vraie', fr: src(E(1029)).fr, sub: rsOf(E(1029)),
      body: 'Une raison, factuelle. Une liste d’excuses invite à les réfuter une par une. EN: one factual reason.' },
    { head: 'Proposer', label: 'une suite concrète', fr: src(E(1031)).fr, sub: rsOf(E(1031)),
      body: '« En revanche » ouvre ce que tu peux faire : une solution datée, ou deux. EN: what you can do, dated.' },
  ],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a3-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre refus qui ratent',
  errors: [
    { wrong: 'Pour l’instant, ce n’est malheureusement pas possible.', right: src(E(1025)).fr,
      why: '« Pour l’instant » promet un oui plus tard. Le client relancera dans un mois. EN: no false hope.' },
    { wrong: 'Notre équipe est débordée, le budget est serré, et c’est une période chargée.', right: src(E(1029)).fr,
      why: 'Trois excuses, trois portes ouvertes à la discussion. Une seule raison, vraie. EN: one reason, not three excuses.' },
    { wrong: 'Votre idée est excellente, très inspirante, et nous l’avons adorée.', right: src(E(1028)).fr,
      why: 'Trop de compliments annoncent un oui ; le non qui suit paraît hypocrite. EN: praise that promises a yes.' },
    { wrong: 'Nous ne pourrons pas, désolés.', right: `${src(E(1027)).fr} ${src(E(1030)).fr}`,
      why: 'Un non sans suite laisse le client seul avec son problème. EN: always offer a next step.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['refus'],
};

const A3_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a3-trier', layer: 'core', size: 'lg',
  title: 'Le non qui laisse une porte', frSub: 'Un autre cas : une remise refusée',
  groups: [
    grp('Trois phrases d’un même refus', [
      free('Nous avons bien reçu votre demande de remise de vingt pour cent.', 'We have received your request for a twenty per cent discount.', 'accueillir'),
      free('Nous ne sommes pas en mesure de l’accorder, car nos tarifs sont déjà ceux de notre offre aux organismes culturels.', 'We are not able to grant it, as our prices are already those of our offer for cultural organisations.', 'refuser et motiver'),
      free('En revanche, un engagement de trois ans vous donnerait droit à deux mois offerts.', 'On the other hand, a three-year commitment would entitle you to two free months.', 'proposer'),
    ], chk('La troisième phrase sert à...', ['proposer une suite', 'refuser une seconde fois'], 0,
      'Après le non, ce que tu peux faire. EN: the next step.')),
    ctl('Le faux espoir', 'Laquelle laisse croire à un oui plus tard ?', ['« Ce n’est pas possible pour le moment. »', '« Cette fonction ne fait pas partie du contrat. »'], 0,
      '« Pour le moment » appelle une relance. EN: it invites a follow-up.'),
    ctl('Le sien', 'Ton refus est clair, mais le client est un partenaire de longue date. Tu ajoutes...', ['une proposition d’appel pour en parler', 'trois excuses supplémentaires'], 0,
      'La relation passe par la suite, pas par les excuses. EN: the next step keeps the relationship.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['refus'],
};

const A3_VERSION = pourTonMessage('a3-version', 'Ton refus', [
  grp('Deux refus', [
    free('Malheureusement, pour l’instant, ce n’est hélas pas vraiment possible, désolé.', 'Unfortunately, for now, it is sadly not really possible, sorry.', 'un refus noyé'),
    free('Il ne nous est pas possible d’ajouter cette fonction sans frais ; en revanche, elle fera partie de la version standard du printemps.', 'It is not possible for us to add this feature free of charge; on the other hand, it will be part of the standard spring release.', 'un refus et une suite'),
  ], chk('Lequel sert ton message ?', ['le second', 'le premier'], 0,
    'Un non clair, une suite concrète. EN: a clear no, a next step.')),
  grp('La règle', [
    it(E(1034), 'la règle'),
    it(E(1033), 'la personne'),
  ], chk('Ta raison peut être discutée point par point. Tu...', ['en choisis une seule, factuelle', 'en ajoutes deux autres'], 0,
    'Une raison solide vaut mieux que cinq excuses. EN: one solid reason.')),
], ['refus']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le non', 'Dans un refus écrit, le non arrive...', ['tôt, et une seule fois', 'à la fin, après les excuses', 'jamais en toutes lettres'], 0,
    'Le lecteur sait vite à quoi s’en tenir. EN: early and once.'),
  ctl('La raison', 'Combien de raisons donnes-tu ?', ['une, vraie et solide', 'le plus possible'], 0,
    'Chaque excuse se discute. EN: one reason.'),
  ctl('La fin', '« Pour l’instant, ce n’est pas possible » laisse...', ['un faux espoir', 'un refus clair'], 0,
    'Il promet un oui plus tard. EN: false hope.'),
], ['refus']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Refuser par écrit',
    opener: {
      line: 'Un client te demande ce que tu ne peux pas donner : ici tu dis non une fois, tôt, avec une raison vraie et une porte ouverte. EN: A client asks for what you cannot give: here you say no once, early, with a true reason and an open door.',
      imageRef: 'lessons/tact-travail/act03.jpg',
    },
    sections: [],
    milestone: 'Tu écris un refus clair, motivé par une seule raison et suivi d’une solution, sans faux espoir. EN: You write a clear refusal, with one reason and a solution, and no false hope.',
    estScreens: 33, restPoints: ['a3-gestes'],
  },
  sections: [A3_LECTURE, A3_GESTES, A3_ERREURS, A3_TRIER, A3_VERSION, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — ANNONCER UNE MAUVAISE NOUVELLE
 *
 *  TEXT: the delay email. MOVE: the news at the top, owned (nous avons
 *  sous-estimé, not « des retards ont été constatés »), what it changes,
 *  what you do, when you come back. The client's voicemail, heard once.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a4-lecture', layer: 'core', questionsInModal: true,
  title: 'Le report annoncé', frSub: 'La nouvelle en tête',
  text: RETARD_TEXT,
  glossary: [
    { word: 'forfaits', en: 'packages (here, season-ticket bundles)', note: 'Ici, des abonnements à plusieurs spectacles vendus ensemble.' },
  ],
  questions: [
    { q: 'Devine le sens : « Je mesure le désagrément que ce report représente ». Que veut dire « désagrément » ?', a: 'Un ennui, une gêne causée à quelqu’un.' },
    { q: 'Où se trouve la nouvelle ?', a: 'Dès la première phrase, avec les deux dates : du 15 au 29 novembre.' },
    { q: 'Qui porte la responsabilité, selon le message ?', a: 'Ardisque : « La raison tient à nous : nous avons sous-estimé le temps nécessaire aux tests. »' },
    { q: 'Que change le report pour le client, concrètement ?', a: 'L’ancienne billetterie reste en service deux semaines de plus ; les données sont transférées le 28 au soir, hors des heures de vente.' },
    { q: 'Que fait Ardisque pour limiter la gêne ?', a: 'La formation offerte et un point d’étape chaque vendredi, plus un appel à la fin des tests.' },
    { q: 'Combien de fois le message s’excuse-t-il ?', a: 'Aucune fois en cascade : une phrase reconnaît la gêne (« Je mesure le désagrément »), et une autre propose d’en parler.' },
  ],
  audio: REC('rec-c1-23-retard'), say: REFRAME, terms: ['nouvelle'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples', id: 'a4-exemples', layer: 'core', sheetId: 'sheet-messages',
  title: 'Cinq temps d’une mauvaise nouvelle', frSub: 'Dans l’ordre du message',
  examples: [
    ex(E(1037), 'Annoncer qu’une nouvelle arrive, en une ligne.'),
    ex(E(1038), 'La nouvelle elle-même, avec ses chiffres, sans détour.'),
    ex(E(1040), 'Assumer : un sujet, « nous », et un verbe qui dit l’erreur.'),
    ex(E(1042), 'Ce que cela change pour le lecteur.'),
    ex(E(1044), 'Ce que tu fais, et quand tu reviens vers lui avec du neuf.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['nouvelle'],
};

/** THE EAR MISSION: one take, the client's voicemail heard once. */
const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a4-ecoute', layer: 'core', hideLines: true,
  title: 'Le message de Marc-André Dion', frSub: 'Un message vocal, une écoute',
  lines: [ln(E(1046)), ln(E(1047)), ln(E(1048)), ln(E(1049)), ln(E(1050)), ln(E(1051)), ln(E(1052)), ln(E(1053))],
  questions: [
    { q: 'Comment Marc-André Dion juge-t-il la rapidité du message d’Ardisque ?', opts: ['Il remercie d’avoir été prévenu vite.', 'Il se plaint d’avoir été prévenu trop tard.'], correct: 0,
      why: 'L’annonce rapide est saluée, même si la nouvelle déplaît. EN: early news is appreciated.' },
    { q: 'Pourquoi la nouvelle tombe-t-elle mal ?', opts: ['La prévente de la saison commence le 25 novembre.', 'La salle ferme en novembre.', 'Le contrat se termine.'], correct: 0,
      why: 'Avec la nouvelle date, la prévente se fera sur l’ancien système. EN: the presale.' },
    { q: 'Accepte-t-il le report ?', opts: ['Oui, à une condition.', 'Non, il annule le contrat.'], correct: 0,
      why: '« Nous pouvons faire avec, à une condition. » EN: on one condition.' },
    { q: 'Quelle est sa condition ?', opts: ['une date ferme, par écrit, avant vendredi', 'une remise sur le prix', 'une réunion à Trois-Rivières'], correct: 0,
      why: 'Il veut un engagement écrit. EN: a firm date in writing.' },
    { q: 'Que te demande-t-il de faire maintenant ?', opts: ['le rappeler cet après-midi', 'lui écrire lundi'], correct: 0,
      why: 'Il est au bureau tout l’après-midi. EN: call him back.' },
  ],
  audio: REC('rec-c1-23-dion'), say: REFRAME, terms: ['nouvelle'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a4-piege', layer: 'core', swipe: true,
  title: 'Six façons de cacher la nouvelle',
  rule: {
    title: 'La nouvelle en tête, assumée',
    body: 'La nouvelle arrive dans les premières lignes : qui en répond, ce qu’elle change. Un passif sans auteur, une cascade d’excuses ou une nouvelle glissée à la fin abîment la confiance plus que le retard lui-même. EN: News at the top, owned, with its impact.',
  },
  cards: [
    { promptLabel: 'un passif sans auteur', promptSound: 'Des retards ont été constatés.',
      fr: src(E(1040)).fr, ipa: ipaOf(E(1040)),
      tip: 'Qui a constaté, et qui est en cause ? Dis « nous ». EN: own it.' },
    { promptLabel: 'une nouvelle floue', promptSound: 'Quelques petits ajustements de calendrier sont à prévoir.',
      fr: src(E(1038)).fr, ipa: ipaOf(E(1038)),
      tip: 'Deux dates valent mieux qu’un « petit ajustement ». EN: give the dates.' },
    { promptLabel: 'une nouvelle trop tard', promptSound: 'Pour finir, et c’est un détail, la livraison sera décalée.',
      fr: src(E(1037)).fr, ipa: ipaOf(E(1037)),
      tip: 'Une mauvaise nouvelle n’est jamais un « détail » de fin de message. EN: never last.' },
    { promptLabel: 'la faute au client', promptSound: 'Le retard est dû aux changements que vous avez demandés.',
      fr: src(E(1039)).fr, ipa: ipaOf(E(1039)),
      tip: 'Même en partie vrai, ce reproche ouvre une dispute. Dis ce qui ne sera pas prêt. EN: no blame.' },
    { promptLabel: 'sans conséquence dite', promptSound: 'Le module sera prêt plus tard.',
      fr: src(E(1042)).fr, ipa: ipaOf(E(1042)),
      tip: 'Dis ce qui se passe pour lui entre-temps. EN: say what it changes.' },
    { promptLabel: 'sans suite', promptSound: 'Nous vous tiendrons au courant.',
      fr: src(E(1044)).fr, ipa: ipaOf(E(1044)),
      tip: '« Au courant » ne promet rien ; un rendez-vous chaque vendredi, si. EN: a dated update.' },
  ],
  drill: [
    { promptSay: 'La mise en service est … du 15 au 29 novembre.', opts: ['reportée', 'rapportée'], correct: 0 },
    { promptSay: 'Nous avons … le temps nécessaire aux tests.', opts: ['sous-estimé', 'surestimé'], correct: 0 },
    { promptSay: '… à ce que nous vous avions annoncé, le module ne sera pas prêt.', opts: ['Contrairement', 'Conformément'], correct: 0 },
    { promptSay: '…, votre billetterie actuelle restera en service.', opts: ['Concrètement', 'Malheureusement'], correct: 0 },
    { promptSay: 'Afin de … la gêne, nous prendrons en charge la formation.', opts: ['limiter', 'augmenter'], correct: 0 },
    { promptSay: 'Je vous ferai un point d’… chaque vendredi.', opts: ['étape', 'arrivée'], correct: 0 },
    { promptSay: 'Une mauvaise nouvelle s’annonce …', opts: ['tôt', 'à la fin'], correct: 0 },
    { promptSay: 'Je dois vous … d’un changement dans notre calendrier.', opts: ['informer', 'renseigner'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'La nouvelle en tête, assumée' },
    { label: 'Six cartes', kind: 'cards', title: 'La nouvelle cachée' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-23-piege-nouvelle'), say: REFRAME, terms: ['nouvelle'],
};

const A4_VERSION = pourTonMessage('a4-version', 'Ta mauvaise nouvelle', [
  grp('Deux annonces', [
    free('Nous espérons que vous allez bien. Toute l’équipe travaille dur pour vous. À ce propos, quelques retards ont été constatés.', 'We hope you are well. The whole team is working hard for you. In that connection, some delays have been observed.', 'la nouvelle cachée'),
    free('La mise en service est reportée du 15 au 29 novembre : nous avons sous-estimé le temps des tests.', 'Go-live is postponed from 15 to 29 November: we underestimated the testing time.', 'la nouvelle en tête'),
  ], chk('Laquelle ouvre ton message ?', ['la seconde', 'la première'], 0,
    'Les dates, la cause, assumée : dès la première ligne. EN: dates and owned cause, first line.')),
  grp('La règle', [
    it(E(1045), 'la règle'),
  ], chk('Le client a une prévente le 25 novembre. Dans ton message, tu...', ['dis ce que le report change pour cette prévente', 'n’en parles pas, il le verra bien'], 0,
    'Dis ce qui change pour lui. EN: say what it changes for him.')),
], ['nouvelle']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La place', 'La mauvaise nouvelle se place...', ['dans les premières lignes', 'en fin de message', 'en pièce jointe'], 0,
    'Le lecteur la trouve tout de suite. EN: at the top.'),
  ctl('La voix', '« Des retards ont été constatés » est...', ['un passif qui esquive', 'une façon d’assumer'], 0,
    'Personne n’y répond de rien. EN: a dodge.'),
  ctl('La suite', 'Après la nouvelle et ses conséquences, tu donnes...', ['ce que tu fais et quand tu reviens vers le lecteur', 'trois excuses de plus'], 0,
    'Un plan et une date. EN: a plan and a date.'),
], ['nouvelle']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Annoncer une mauvaise nouvelle',
    opener: {
      line: 'La livraison prendra deux semaines de plus, et le client doit le savoir aujourd’hui : ici tu annonces la nouvelle en tête, tu l’assumes et tu dis la suite. EN: Delivery will take two more weeks and the client must know today: here you put the news first, own it and give the next step.',
      imageRef: 'lessons/tact-travail/act04.jpg',
    },
    sections: [],
    milestone: 'Tu annonces une mauvaise nouvelle en tête, assumée, avec ce qu’elle change et ce que tu fais. EN: You announce bad news at the top, owned, with its impact and your plan.',
    estScreens: 36, restPoints: ['a4-ecoute'],
  },
  sections: [A4_LECTURE, A4_EXEMPLES, A4_ECOUTE, A4_PIEGE, A4_VERSION, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — DIRE NON À SA HIÉRARCHIE
 *
 *  TEXT: a team lead's email to the CEO. MOVE: neither a flat no nor an
 *  untenable yes: acknowledge, cost it, offer options, ask for arbitration.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a5-lecture', layer: 'core', questionsInModal: true,
  title: 'La réponse de Karim', frSub: 'Un non qui fait choisir',
  text: KARIM_TEXT,
  glossary: [
    { word: 'mobilisés', en: 'fully taken up, assigned', note: 'Ici, occupés entièrement à une tâche.' },
  ],
  questions: [
    { q: 'Devine le sens : « mon équipe ne peut pas absorber ce projet ». Que veut dire « absorber » ici ?', a: 'Prendre en charge en plus du reste, sans que le reste en souffre.' },
    { q: 'Karim dit-il non ?', a: 'Pas en ces termes : il montre que dire oui coûterait une autre livraison, et il demande à sa directrice de choisir.' },
    { q: 'Comment chiffre-t-il le coût du projet ?', a: 'Deux personnes pendant trois semaines, et une semaine de retard de plus pour la salle Morencie.' },
    { q: 'Quelles sont les deux options ?', a: 'Une démonstration simple, sans risque ; ou une démonstration complète avec un report négocié de la mise à jour de sécurité.' },
    { q: 'Que demande-t-il exactement, et pour quand ?', a: 'Qu’elle arbitre entre les deux priorités, d’ici lundi.' },
    { q: 'Pourquoi écrit-il maintenant ?', a: 'Pour l’alerter avant de manquer les deux dates en décembre.' },
  ],
  audio: REC('rec-c1-23-karim'), say: REFRAME, terms: ['arbitrage'],
};

const A5_FOCUS: Sec<'focus'> = {
  type: 'focus', id: 'a5-focus', layer: 'core', sheetId: 'sheet-messages',
  title: 'Dire non vers le haut',
  points: [
    'Reconnaître l’enjeu : « Je mesure l’importance de ce salon. » Ta directrice voit que tu as compris. EN: acknowledge what is at stake.',
    'Chiffrer le coût : qui, combien de temps, quelle autre date glisse. Sans chiffres, ton non ressemble à un refus de principe. EN: put a cost on it.',
    'Proposer des options, chacune avec ce qu’elle coûte. EN: options, each with its cost.',
    'Demander l’arbitrage, avec une date : « J’ai besoin que vous arbitriez d’ici lundi. » EN: ask for a decision, by a date.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['arbitrage'],
};

const A5_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a5-trier', layer: 'core', size: 'lg',
  title: 'Le coût, puis le choix', frSub: 'De nouvelles phrases',
  groups: [
    grp('Trois phrases d’un même courriel', [
      it(E(1055), 'la limite'),
      it(E(1056), 'le coût'),
      it(E(1058), 'les options'),
    ], chk('Ces trois phrases préparent...', ['une demande d’arbitrage', 'un refus définitif'], 0,
      'Elles donnent à la directrice de quoi choisir. EN: they prepare a decision.')),
    ctl('Le mode', '« J’ai besoin que vous … entre ces deux priorités. »', ['arbitriez', 'arbitrez', 'arbitrerez'], 0,
      '« Avoir besoin que » demande le subjonctif. EN: subjunctive.'),
    ctl('Le moment', 'Tu vois que les deux dates ne tiendront pas. Tu écris...', ['maintenant, pour alerter', 'après la première échéance manquée'], 0,
      'Une alerte précoce laisse le temps de choisir. EN: alert early.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['arbitrage'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a5-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre réponses vers le haut qui ratent',
  errors: [
    { wrong: src(E(1060)).fr, right: src(E(1055)).fr,
      why: 'Un non sec à sa directrice ressemble à un refus de travailler. Dis la limite, puis le coût. EN: state the limit, then the cost.' },
    { wrong: src(E(1061)).fr, right: src(E(1057)).fr,
      why: 'Le oui qu’on ne peut pas tenir est le pire : il coûte deux dates au lieu d’une. Fais arbitrer. EN: an untenable yes costs more.' },
    { wrong: 'Je ne vois vraiment pas comment on pourrait faire ça.', right: src(E(1056)).fr,
      why: 'Une plainte ne permet pas de décider ; un coût chiffré, si. EN: a cost, not a complaint.' },
    { wrong: 'C’est à vous de voir, moi je n’y peux rien.', right: src(E(1059)).fr,
      why: 'Renvoyer la décision sans options laisse ta directrice seule. Propose, puis demande. EN: offer options, then ask.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['arbitrage'],
};

const A5_VERSION = pourTonMessage('a5-version', 'Quand le client vise trop haut', [
  grp('Deux réponses à ta directrice', [
    free('Oui, bien sûr, on fera le plan de salle gratuitement, ne vous inquiétez pas.', 'Yes, of course, we will do the seating plan for free, do not worry.', 'le oui intenable'),
    free('Le plan de salle gratuit coûterait six semaines et une seconde date manquée ; je vous propose deux options, et j’ai besoin de votre arbitrage d’ici jeudi.', 'The free seating plan would cost six weeks and a second missed date; I am proposing two options, and I need your decision by Thursday.', 'faire arbitrer'),
  ], chk('Laquelle envoies-tu ?', ['la seconde', 'la première'], 0,
    'Le coût, les options, une date : elle peut décider. EN: cost, options, a date.')),
  grp('La règle', [
    it(E(1062), 'la règle'),
    it('fr.b1.affaires.087', 'le mot'),
  ], chk('Avant d’accepter un projet de plus, tu montres...', ['ta charge de travail réelle', 'ta bonne volonté seulement'], 0,
    'Une image juste de la charge permet un choix juste. EN: show the real workload.')),
], ['arbitrage']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le principe', 'Dire non à sa hiérarchie, c’est...', ['lui donner de quoi choisir', 'refuser sans explication', 'accepter et espérer'], 0,
    'Le coût et les options. EN: give the means to choose.'),
  ctl('Le danger', 'Le pire, c’est...', ['le oui qu’on ne peut pas tenir', 'le courriel trop court'], 0,
    'Il coûte deux dates. EN: the untenable yes.'),
  ctl('Le verbe', 'Trancher entre deux priorités se dit...', ['arbitrer', 'absorber', 'alerter'], 0,
    'Arbitrer : décider entre deux choses. EN: arbitrer.'),
], ['arbitrage']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Dire non à sa hiérarchie',
    opener: {
      line: 'Ta directrice te confie un projet de plus, et ton équipe est pleine : ici tu dis non sans refuser, en lui donnant de quoi choisir. EN: Your director hands you one more project and your team is full: here you say no without refusing, by giving her what she needs to choose.',
      imageRef: 'lessons/tact-travail/act05.jpg',
    },
    sections: [],
    milestone: 'Tu réponds à ta hiérarchie par un coût chiffré, des options et une demande d’arbitrage datée. EN: You answer your superiors with a costed view, options and a dated request for a decision.',
    estScreens: 30, restPoints: ['a5-focus'],
  },
  sections: [A5_LECTURE, A5_FOCUS, A5_TRIER, A5_ERREURS, A5_VERSION, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — RELANCER, PUIS FAIRE REMONTER
 *
 *  TEXT: a thread with a silent supplier. MOVE: two relances, polite then
 *  firm and dated; then escalation, openly: warn your contact, copy him,
 *  dated facts, one precise request, no culprit.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a6-lecture', layer: 'core', questionsInModal: true,
  title: 'Trois semaines de silence', frSub: 'Deux relances, puis plus haut',
  text: ESCALADE_TEXT,
  glossary: [
    { word: 'prestataire', en: 'service provider', note: 'L’entreprise qui fournit un service à une autre.' },
  ],
  questions: [
    { q: 'Devine le sens : « je devrai faire remonter le dossier ». Que veut dire « faire remonter » ici ?', a: 'Transmettre le problème à un niveau supérieur de la hiérarchie pour qu’il soit traité.' },
    { q: 'Comment la deuxième relance diffère-t-elle de la première ?', a: 'Elle est plus ferme : elle dit ce que le blocage empêche, donne une date limite et annonce la suite.' },
    { q: 'Karim passe-t-il au-dessus de Stéphane Morin sans le dire ?', a: 'Non : il l’avait annoncé dans sa relance, et il le met en copie du message à sa directrice.' },
    { q: 'Quels faits donne-t-il à Julie Lavoie ?', a: 'Des faits datés et comptés : trois demandes, deux relances, aucune réponse, avec les messages joints.' },
    { q: 'Que demande-t-il précisément ?', a: 'Une réponse technique avant le 24 octobre, ou le nom d’une personne à joindre.' },
    { q: 'Quel ton évite-t-il ?', a: 'L’accusation : son objectif n’est pas de trouver un coupable, mais de débloquer la situation.' },
  ],
  audio: REC('rec-c1-23-escalade'), say: REFRAME, terms: ['relance', 'escalade'],
};

const A6_ETAPES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a6-etapes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-messages',
  title: 'Quatre marches', frSub: 'De la relance à l’escalade',
  hint: 'Quatre cartes. Chaque marche est un peu plus ferme que la précédente.',
  audio: AUDIO, say: REFRAME, terms: ['relance', 'escalade'],
  cards: [
    { head: 'La première relance', label: 'courtoise', fr: src(E(1066)).fr, sub: rsOf(E(1066)),
      body: 'Elle rappelle la demande et la redonne, pour que la réponse soit facile. EN: remind and resend.' },
    { head: 'La seconde relance', label: 'ferme et datée', fr: src(E(1067)).fr, sub: rsOf(E(1067)),
      body: 'Elle dit ce que le silence bloque et annonce la suite, sans menace. EN: firm, dated, announces the next step.' },
    { head: 'L’escalade', label: 'au niveau supérieur', fr: src(E(1069)).fr, sub: rsOf(E(1069)),
      body: '« Porter à votre attention » : on présente un problème, pas une plainte. Au Québec, l’Office accepte « escalade » et « faire escalader » en gestion. EN: present a problem, not a complaint.' },
    { head: 'La transparence', label: 'en copie', fr: src(E(1068)).fr, sub: rsOf(E(1068)),
      body: 'Ton interlocuteur est prévenu et en copie : il n’apprend pas par hasard qu’on est passé au-dessus de lui. EN: your contact is warned and copied.' },
  ],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a6-piege', layer: 'core', swipe: true,
  title: 'Six escalades qui tournent mal',
  rule: {
    title: 'Faire remonter, ouvertement',
    body: 'On fait remonter un dossier après deux relances, en prévenant son interlocuteur, avec des faits datés et une demande précise. Une escalade cachée ou accusatrice abîme la relation. EN: Escalate openly, with dated facts and a precise request.',
  },
  cards: [
    { promptLabel: 'une accusation', promptSound: 'Votre équipe ne fait strictement rien depuis trois semaines.',
      fr: src(E(1070)).fr, ipa: ipaOf(E(1070)),
      tip: 'Des faits comptés plutôt qu’un jugement. EN: facts, not a verdict.' },
    { promptLabel: 'une escalade cachée', promptSound: 'J’écris directement à sa directrice, sans le prévenir.',
      fr: src(E(1073)).fr, ipa: ipaOf(E(1073)),
      tip: 'Préviens avant de passer au-dessus de quelqu’un. EN: warn first.' },
    { promptLabel: 'une demande floue', promptSound: 'Merci de faire le nécessaire.',
      fr: src(E(1071)).fr, ipa: ipaOf(E(1071)),
      tip: 'Que veux-tu, et pour quand ? EN: what, by when.' },
    { promptLabel: 'trop tôt', promptSound: 'Pas de réponse depuis hier : je fais remonter le dossier.',
      fr: src(E(1076)).fr, ipa: ipaOf(E(1076)),
      tip: 'Deux relances d’abord. EN: two follow-ups first.' },
    { promptLabel: 'un coupable cherché', promptSound: 'Je veux savoir qui est responsable de ce silence.',
      fr: src(E(1078)).fr, ipa: ipaOf(E(1078)),
      tip: 'Le but est de débloquer, pas de punir. EN: unblock, not punish.' },
    { promptLabel: 'une relance sans date', promptSound: 'Je me permets de vous relancer, quand vous aurez un moment.',
      fr: src(E(1067)).fr, ipa: ipaOf(E(1067)),
      tip: 'La seconde relance donne une date et la suite. EN: a date and a next step.' },
  ],
  drill: [
    { promptSay: 'Je me permets de vous … au sujet de ma demande du 3 octobre.', opts: ['relancer', 'relever'], correct: 0 },
    { promptSay: '… de réponse d’ici jeudi, je devrai faire remonter le dossier.', opts: ['Faute', 'Grâce'], correct: 0 },
    { promptSay: 'Je souhaite porter à votre … un blocage.', opts: ['attention', 'intention'], correct: 0 },
    { promptSay: 'Je mets Stéphane Morin en …, par souci de transparence.', opts: ['copie', 'cause'], correct: 0 },
    { promptSay: 'Je … mon interlocuteur avant de passer au-dessus de lui.', opts: ['préviens', 'remplace'], correct: 0 },
    { promptSay: 'Mon objectif est de … la situation.', opts: ['débloquer', 'dénoncer'], correct: 0 },
    { promptSay: 'On relance deux fois, poliment puis …', opts: ['fermement', 'jamais'], correct: 0 },
    { promptSay: 'Ce que j’attends : une réponse … le 24 octobre.', opts: ['avant', 'depuis'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Faire remonter, ouvertement' },
    { label: 'Six cartes', kind: 'cards', title: 'Des escalades qui tournent mal' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-23-piege-escalade'), say: REFRAME, terms: ['escalade'],
};

const A6_DICTEE: Sec<'dictation'> = {
  type: 'dictation', id: 'a6-dictee', layer: 'core',
  title: 'Écris les phrases de relance que tu entends',
  itemIds: ROWS_BY_ACT[5].filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id),
  audio: AUDIO, say: REFRAME, terms: ['relance'],
};

const A6_VERSION = pourTonMessage('a6-version', 'Si le client ne répond plus', [
  grp('Deux secondes relances', [
    free('Je vous ai déjà écrit deux fois. J’attends toujours.', 'I have already written to you twice. I am still waiting.', 'un reproche'),
    free('Sans réponse de votre part d’ici vendredi, nous ne pourrons pas configurer votre prévente à temps ; je me permets donc de vous relancer.', 'Without a reply from you by Friday, we will not be able to set up your presale in time; I am therefore following up.', 'ferme et motivée'),
  ], chk('Laquelle envoies-tu ?', ['la seconde', 'la première'], 0,
    'Une date, la conséquence, sans reproche. EN: a date and the consequence.')),
  grp('La règle', [
    it(E(1076), 'la règle'),
    it(E(1077), 'la transparence'),
  ], chk('Tu fais remonter le dossier à la directrice de ton interlocuteur. Lui...', ['est prévenu et mis en copie', 'n’en sait rien'], 0,
    'Ouvertement, toujours. EN: openly.')),
], ['relance', 'escalade']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('L’ordre', 'Avant de faire remonter un dossier, tu...', ['relances deux fois', 'attends un jour', 'écris à tout le monde'], 0,
    'Poliment, puis fermement. EN: two follow-ups.'),
  ctl('La forme', 'Dans le message d’escalade, tu donnes...', ['des faits datés et une demande précise', 'ton impression générale'], 0,
    'Ce qui se vérifie, ce que tu attends. EN: dated facts, a precise request.'),
  ctl('Le ton', 'Ton but est de...', ['débloquer la situation', 'trouver un coupable'], 0,
    'Pas d’accusation. EN: unblock.'),
], ['escalade']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Relancer, puis faire remonter',
    opener: {
      line: 'Trois semaines de silence, et ta livraison en dépend : ici tu relances avec fermeté, puis tu fais remonter le problème sans accuser personne. EN: Three weeks of silence and your delivery depends on it: here you follow up firmly, then escalate without blaming anyone.',
      imageRef: 'lessons/tact-travail/act06.jpg',
    },
    sections: [],
    milestone: 'Tu relances deux fois, puis tu fais remonter un dossier ouvertement, avec des faits datés et une demande précise. EN: You follow up twice, then escalate openly with dated facts and a precise request.',
    estScreens: 36, restPoints: ['a6-etapes'],
  },
  sections: [A6_LECTURE, A6_ETAPES, A6_PIEGE, A6_DICTEE, A6_VERSION, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — QUAND LA POLITESSE PIQUE
 *
 *  TEXT: a thread that sours, and the director's note. MOVE: recognise the
 *  barbed formulas (comme indiqué, merci d’avance pour votre réactivité,
 *  pour rappel, the tu-to-vous switch, the copy to management) and rewrite
 *  them neutrally, or change channel.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a7-lecture', layer: 'core', questionsInModal: true,
  title: 'Un fil qui s’envenime', frSub: 'Polis, et pourtant piquants',
  text: PIQUE_TEXT,
  glossary: [
    { word: 'piquez', en: 'needle, sting (each other)', note: 'Se piquer : se lancer de petites remarques blessantes.' },
  ],
  questions: [
    { q: 'Devine le sens : « vous vous piquez à chaque ligne ». Que veut dire « se piquer » ici ?', a: 'Se lancer de petites remarques blessantes, sans le dire ouvertement.' },
    { q: 'À quel moment le ton change-t-il ?', a: 'Le mercredi : Olivier passe du tu au vous et écrit « Merci d’avance pour votre réactivité ».' },
    { q: 'Que veut dire, en réalité, « comme indiqué dans mon précédent courriel » ?', a: '« Vous ne m’avez pas lu » : un reproche poli.' },
    { q: 'Pourquoi la copie à Isabelle aggrave-t-elle les choses ?', a: 'Elle transforme un malentendu en plainte devant la direction.' },
    { q: 'Quel était le vrai problème ?', a: 'Deux dossiers Morencie, l’un à Nantes, l’autre à Québec : chacun regardait le sien.' },
    { q: 'Que propose Isabelle ?', a: 'Un appel de dix minutes lundi, pour revenir au sujet.' },
  ],
  audio: REC('rec-c1-23-pique'), say: REFRAME, terms: ['pique'],
};

const A7_TRADUIRE: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a7-traduire', layer: 'core', sheetId: 'sheet-messages',
  title: 'Six piques, six versions neutres', frSub: 'Ce que le lecteur entend',
  cols: ['La pique', 'Ce qu’elle dit', 'La version neutre'],
  rows: [
    { cells: ['Comme indiqué dans mon précédent courriel…', 'vous ne m’avez pas lu', 'je vous renvoie le fichier'],
      say: src(E(1080)).fr,
      detail: { title: 'Le rappel qui accuse', body: 'Renvoie l’information sans commentaire : si le premier envoi s’est perdu, personne n’a tort. EN: resend without comment.', say: src(E(1080)).fr } },
    { cells: ['Merci d’avance pour votre réactivité.', 'vous êtes lent', 'quand pensez-vous pouvoir…'],
      say: src(E(1082)).fr,
      detail: { title: 'Le merci qui presse', body: 'Pose la vraie question : quand ? EN: ask the real question.', say: src(E(1082)).fr } },
    { cells: ['Pour rappel, la date limite était hier.', 'vous êtes en faute', 'où en êtes-vous ?'],
      say: src(E(1090)).fr,
      detail: { title: 'Le rappel daté', body: 'Le retard est un fait ; demande plutôt ce qui bloque et comment aider. EN: ask what blocks.', say: src(E(1090)).fr } },
    { cells: ['Je ne doute pas que vous trouverez un moment.', 'vous n’en faites pas assez', 'je comprends que…'],
      say: src(E(1089)).fr,
      detail: { title: 'La confiance ironique', body: 'Reconnais la contrainte de l’autre au lieu de la nier. EN: acknowledge the other’s constraint.', say: src(E(1089)).fr } },
    { cells: ['Passer du tu au vous', 'je prends mes distances', 'garder le tu'],
      say: src(E(1086)).fr,
      detail: { title: 'Le vous qui gèle', body: 'Entre collègues qui se tutoient, un vous soudain se lit comme une froideur voulue. EN: a sudden vous reads as coldness.', say: src(E(1086)).fr } },
    { cells: ['Copier la direction', 'je me plains de vous', 'appeler d’abord'],
      say: src(E(1087)).fr,
      detail: { title: 'La copie qui accuse', body: 'Mettre un supérieur en copie au deuxième échange transforme un malentendu en plainte. Au troisième échange tendu, décroche le téléphone. EN: call before copying a boss.', say: src(E(1087)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['pique'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a7-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre phrases polies qui piquent',
  errors: [
    { wrong: src(E(1079)).fr, right: src(E(1080)).fr,
      why: 'Tu veux qu’on voie que tu avais raison ; le lecteur entend surtout le reproche. EN: being right is not the goal.' },
    { wrong: src(E(1081)).fr, right: src(E(1082)).fr,
      why: 'Le merci d’avance pour une réactivité qui n’est pas venue sonne comme une ironie. EN: ironic thanks.' },
    { wrong: src(E(1084)).fr, right: src(E(1090)).fr,
      why: 'Le rappel d’une date dépassée accuse ; l’offre d’aide fait avancer. EN: offer help instead.' },
    { wrong: 'Je me permets de relancer pour la troisième fois. Cdt.', right: src(E(1087)).fr,
      why: 'Compter les relances et abréger la salutation, c’est montrer son agacement. Change de canal. EN: change channel.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['pique'],
};

const A7_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a7-trier', layer: 'core', size: 'lg',
  title: 'Neutre ou piquant', frSub: 'De nouvelles phrases',
  groups: [
    grp('Trois phrases neutres', [
      it(E(1080), 'renvoyer sans commentaire'),
      it(E(1082), 'poser la vraie question'),
      it(E(1090), 'offrir de l’aide'),
    ], chk('Ces trois phrases...', ['font avancer sans reprocher', 'reprochent poliment'], 0,
      'Des faits, une question, une offre. EN: facts, a question, an offer.')),
    ctl('Le ton', '« Je vous remercie de bien vouloir enfin me répondre. » Ce qui pique, c’est...', ['« enfin »', '« je vous remercie »'], 0,
      'Un seul adverbe suffit à faire un reproche. EN: one adverb makes a reproach.'),
    ctl('Le canal', 'Troisième échange tendu avec la même collègue. Tu...', ['l’appelles dix minutes', 'écris un quatrième courriel plus long'], 0,
      'À l’écrit, la tension monte ; au téléphone, elle retombe souvent. EN: pick up the phone.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['pique'],
};

const A7_VERSION = pourTonMessage('a7-version', 'Si le client t’a déjà relancé', [
  grp('Deux débuts de réponse', [
    free('Comme indiqué dans notre contrat, cette fonction n’a jamais été prévue.', 'As stated in our contract, this feature was never planned.', 'la pique'),
    free('Vous avez raison de revenir sur ce point ; voici où nous en sommes.', 'You are right to raise this point again; here is where we stand.', 'la version neutre'),
  ], chk('Lequel ouvre ta réponse ?', ['le second', 'le premier'], 0,
    'Le second accueille la relance ; le premier rappelle au client qu’il a mal lu. EN: welcome the follow-up.')),
  grp('La règle', [
    it(E(1086), 'la règle'),
    it(E(1085), 'le danger'),
  ], chk('Ta formule polie risque de piquer. Tu...', ['reviens aux faits et à la demande', 'ajoutes « cordialement » pour adoucir'], 0,
    'Une formule ne corrige pas un reproche. EN: back to facts.')),
], ['pique']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La formule', '« Comme indiqué dans mon précédent courriel » se lit comme...', ['un reproche', 'un simple rappel neutre'], 0,
    '« Vous ne m’avez pas lu. » EN: a reproach.'),
  ctl('Le passage', 'Entre collègues qui se tutoient, un vous soudain...', ['marque une froideur', 'marque le respect'], 0,
    'Il prend ses distances. EN: coldness.'),
  ctl('La sortie', 'Au troisième échange tendu, tu...', ['décroches le téléphone', 'mets la direction en copie', 'cesses de répondre'], 0,
    'Changer de canal. EN: change channel.'),
], ['pique']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Quand la politesse pique',
    opener: {
      line: 'Chaque formule est polie, et pourtant le fil s’envenime : ici tu reconnais les piques déguisées et tu les remplaces par des faits. EN: Every formula is polite, yet the thread turns sour: here you spot disguised barbs and replace them with facts.',
      imageRef: 'lessons/tact-travail/act07.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais une politesse qui pique et tu la réécris en faits, en question ou en appel. EN: You spot politeness that stings and rewrite it as facts, a question or a call.',
    estScreens: 34, restPoints: ['a7-traduire'],
  },
  sections: [A7_LECTURE, A7_TRADUIRE, A7_ERREURS, A7_TRIER, A7_VERSION, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LES MOTS QUI DIVISENT
 *
 *  TEXT: the director's note. MOVE: weigh a contested office word by its
 *  sources (Académie, OQLF, Larousse, Usito; corpus §A.7) and by the
 *  reader; never call it an error, choose the uncontested word in careful
 *  writing. Lesson 26 in B2 owns the meeting calques: cited.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a8-lecture', layer: 'core', questionsInModal: true,
  title: 'Les mots qui divisent', frSub: 'Une note de la directrice',
  text: MOTS_TEXT,
  glossary: [
    { word: 'condamne', en: 'condemns', note: 'Ici, juge fautif, déconseille fermement.' },
  ],
  questions: [
    { q: 'Devine le sens : « Voici une réponse en trois temps ». Que veut dire « en trois temps » ?', a: 'En trois étapes successives.' },
    { q: 'Que disent les trois sources sur « impacter » ?', a: 'L’Académie le condamne, l’Office le déconseille, le Larousse l’enregistre avec la marque « familier ».' },
    { q: 'Sur « initier » au sens de commencer, les sources sont-elles d’accord ?', a: 'Non : l’Académie et l’Office le déconseillent, le Larousse l’admet.' },
    { q: 'Que dit l’Académie de « je reviens vers vous » ?', a: 'Qu’il est incorrect : un anglicisme, une traduction hasardeuse de « I’ll get back to you ».' },
    { q: 'Sur quel mot l’Académie et l’Office s’opposent-ils nettement ?', a: '« Acter » : l’Académie veut le limiter au droit ; l’Office l’accepte au sens de « prendre acte de ».' },
    { q: 'Quelle est la règle d’Isabelle ?', a: 'À l’oral entre collègues, ne corriger personne ; à l’écrit devant un client, prendre le mot que personne ne conteste.' },
  ],
  audio: REC('rec-c1-23-mots'), say: REFRAME, terms: ['conteste'],
};

const A8_MOTS: Sec<'tapTable'> = {
  type: 'tapTable', id: 'a8-mots', layer: 'core', sheetId: 'sheet-mots',
  title: 'Six mots, qui dit quoi', frSub: 'Le mot sûr pour un client',
  cols: ['Mot entendu', 'Selon les ouvrages', 'Le mot sûr'],
  rows: [
    { cells: ['je reviens vers vous', 'Académie : incorrect', 'je reprends contact avec vous'],
      say: src(E(1091)).fr,
      detail: { title: 'Revenir vers quelqu’un', body: `Très répandu au travail en France (${REUNION_REF} le notait). L’Académie le juge incorrect : « traduction hasardeuse de I’ll get back to you ». À l’écrit soigné : je reprends contact avec vous. EN: common in France; the Académie rejects it.`, say: src(E(1091)).fr } },
    { cells: ['impacter', 'Académie, Office : non ; Larousse : familier', 'avoir une incidence sur'],
      say: src(E(1092)).fr,
      detail: { title: 'Impacter', body: 'L’Académie le condamne, l’Office le déconseille (sauf en médecine), le Larousse le marque « familier ». Écris : toucher, avoir une incidence sur, se répercuter sur. EN: condemned or discouraged; marked familiar.', say: src(E(1093)).fr } },
    { cells: ['initier (= commencer)', 'Académie, Office : non ; Larousse : oui', 'lancer, entamer'],
      say: src(E(1094)).fr,
      detail: { title: 'Initier', body: 'Les deux autorités le déconseillent au sens de « commencer », le Larousse l’admet. Le mot précis vaut mieux : lancer, entamer, prendre l’initiative de. EN: discouraged by both authorities, admitted by Larousse.', say: src(E(1095)).fr } },
    { cells: ['booker', 'Office : déconseillé', 'réserver'],
      say: src(E(1096)).fr,
      detail: { title: 'Booker', body: 'L’Office le déconseille ; on réserve une salle, on prend rendez-vous, on engage un artiste. EN: discouraged; réserver.', say: src(E(1096)).fr } },
    { cells: ['un call', 'absent du Larousse', 'un appel, une réunion téléphonique'],
      say: src(E(1097)).fr,
      detail: { title: 'Un call', body: 'Le Larousse ne l’enregistre pas et l’Office n’en traite pas. Le français a ses mots : un appel, une réunion téléphonique, une visioconférence. EN: not in Larousse; use appel.', say: src(E(1097)).fr } },
    { cells: ['acter', 'Académie : droit seulement ; Office : prendre acte', 'prendre acte de'],
      say: src(E(1098)).fr,
      detail: { title: 'Acter', body: 'Ici, les autorités divergent : l’Académie veut le réserver au droit, l’Office l’accepte au sens de « prendre acte de ». « Prendre acte de » ne fâche personne. EN: the authorities disagree.', say: src(E(1098)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['conteste'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a8-piege', layer: 'core', swipe: true,
  title: 'Six phrases à soigner pour un client',
  rule: {
    title: 'Le mot que personne ne conteste',
    body: 'Ces mots se comprennent et beaucoup les emploient, mais certaines autorités les déconseillent. À l’écrit soigné, le mot sûr ne coûte rien. EN: Not errors of meaning; in careful writing, the safe word costs nothing.',
  },
  cards: [
    { promptLabel: 'impacter', promptSound: 'Ce report impacte votre calendrier.',
      fr: src(E(1092)).fr, ipa: ipaOf(E(1092)),
      tip: 'Avoir une incidence sur, toucher. EN: affect.' },
    { promptLabel: 'initier', promptSound: 'C’est Léa qui a initié ce projet.',
      fr: src(E(1094)).fr, ipa: ipaOf(E(1094)),
      tip: 'Lancer, être à l’origine de. EN: start.' },
    { promptLabel: 'booker', promptSound: 'J’ai booké la grande salle pour jeudi.',
      fr: src(E(1096)).fr, ipa: ipaOf(E(1096)),
      tip: 'Réserver. EN: book.' },
    { promptLabel: 'un call', promptSound: 'On se fait un call de vingt minutes ?',
      fr: src(E(1097)).fr, ipa: ipaOf(E(1097)),
      tip: 'Une réunion téléphonique, un appel. EN: a call.' },
    { promptLabel: 'je reviens vers vous', promptSound: 'Je reviens vers vous jeudi avec une proposition révisée.',
      fr: src(E(1091)).fr, ipa: ipaOf(E(1091)),
      tip: 'Je reprends contact avec vous. EN: get back in touch.' },
    { promptLabel: 'acter', promptSound: 'Nous avons acté votre décision.',
      fr: src(E(1098)).fr, ipa: ipaOf(E(1098)),
      tip: 'Prendre acte de : accepté par tous. EN: take note of.' },
  ],
  drill: [
    { promptSay: 'Ce report a une … sur votre calendrier.', opts: ['incidence', 'impaction'], correct: 0 },
    { promptSay: 'Nous avons … les tests lundi.', opts: ['entamé', 'initialisé'], correct: 0 },
    { promptSay: 'J’ai … la grande salle pour jeudi.', opts: ['réservé', 'loué à vie'], correct: 0 },
    { promptSay: 'Je vous propose une réunion … de vingt minutes.', opts: ['téléphonique', 'téléphonée'], correct: 0 },
    { promptSay: 'Nous avons pris … de votre décision.', opts: ['acte', 'action'], correct: 0 },
    { promptSay: 'Je … contact avec vous jeudi.', opts: ['reprends', 'reviens'], correct: 0 },
    { promptSay: 'C’est elle qui a pris l’… de ce projet.', opts: ['initiative', 'initiation'], correct: 0 },
    { promptSay: 'Au Québec, l’Office accepte « faire … un dossier ».', opts: ['monter', 'grimper'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le mot que personne ne conteste' },
    { label: 'Six cartes', kind: 'cards', title: 'Des mots qui divisent' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases soignées' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-23-piege-mots'), say: REFRAME, terms: ['conteste'],
};

const A8_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a8-trier', layer: 'core', size: 'lg',
  title: 'Qui condamne, qui accepte', frSub: 'Lire les verdicts',
  groups: [
    grp('Trois mots sûrs', [
      it(E(1102), 'pour « impacter »'),
      it(E(1103), 'pour « initier »'),
      it(E(1099), 'pour « escalader »'),
    ], chk('« Faire monter un dossier », selon l’Office québécois de la langue française...', ['est un terme privilégié, comme « faire escalader »', 'est déconseillé'], 0,
      'Le GDT les donne tous deux en gestion. EN: both accepted by the OQLF.')),
    ctl('Les autorités', 'Sur « acter », l’Académie et l’Office...', ['ne disent pas la même chose', 'disent exactement la même chose'], 0,
      'L’une le limite au droit, l’autre l’accepte au sens de « prendre acte de ». EN: they disagree.'),
    ctl('Le statut', '« Impacter » dans un courriel à un collègue, à l’oral...', ['se comprend, mais reste déconseillé à l’écrit soigné', 'est une faute de sens'], 0,
      'Ce n’est pas une faute de sens ; c’est un mot critiqué. EN: contested, not wrong in meaning.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['conteste'],
};

const A8_VERSION = pourTonMessage('a8-version', 'Les mots de ton message', [
  grp('Deux phrases au client', [
    free('Ce retard va impacter votre prévente, je reviens vers vous après le call de jeudi.', 'This delay is going to impact your presale, I will get back to you after Thursday’s call.', 'trois mots contestés'),
    free('Ce report touche votre prévente ; je reprends contact avec vous après la réunion téléphonique de jeudi.', 'This postponement affects your presale; I will get back in touch after Thursday’s phone meeting.', 'les mots sûrs'),
  ], chk('Laquelle envoies-tu au client ?', ['la seconde', 'la première'], 0,
    'Personne ne conteste « toucher », « reprendre contact », « réunion téléphonique ». EN: uncontested words.')),
  grp('La règle', [
    it(E(1100), 'la règle'),
    it(E(1101), 'le choix'),
  ], chk('Ton collègue dit que « tout le monde dit booker ». Tu réponds...', ['que l’usage existe, mais que l’Office le déconseille et qu’on peut écrire « réserver »', 'que c’est une faute grave'], 0,
    'L’usage et le verdict, sans dramatiser. EN: usage and verdict, calmly.')),
], ['conteste']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La méthode', 'Devant un mot contesté, tu regardes...', ['qui le condamne, qui l’accepte, et qui va te lire', 'seulement s’il est fréquent'], 0,
    'Les sources et le lecteur. EN: sources and reader.'),
  ctl('Le statut', '« Je reviens vers vous », selon l’Académie, est...', ['incorrect', 'recommandé'], 0,
    '« Traduction hasardeuse de I’ll get back to you. » EN: incorrect.'),
  ctl('Le mot sûr', 'Pour « booker une salle », tu écris...', ['réserver une salle', 'louer une salle à vie', 'booker une salle'], 0,
    'Réserver. EN: book.'),
], ['conteste']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Les mots qui divisent',
    opener: {
      line: 'Impacter, booker, je reviens vers vous : tout le monde les comprend, et certains lecteurs s’y arrêtent. Ici tu pèses chaque mot avec ses sources. EN: Impacter, booker, je reviens vers vous: everyone understands them, and some readers stop on them. Here you weigh each word against its sources.',
      imageRef: 'lessons/tact-travail/act08.jpg',
    },
    sections: [],
    milestone: 'Tu sais qui condamne et qui accepte les mots contestés du bureau, et tu choisis le mot sûr à l’écrit soigné. EN: You know who condemns and who accepts the contested office words, and you choose the safe word in careful writing.',
    estScreens: 36, restPoints: ['a8-mots'],
  },
  sections: [A8_LECTURE, A8_MOTS, A8_PIEGE, A8_TRIER, A8_VERSION, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — UN COURRIEL, DEUX LECTEURS
 *
 *  TEXT: the company's onboarding page. MOVE: sourced conventions only
 *  (the OQLF's tutoiement sentence, its scale of salutations, courriel),
 *  and an explicit refusal of the « direct / indirect » stereotype.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a9-lecture', layer: 'core', questionsInModal: true,
  title: 'Écrire entre Nantes et Québec', frSub: 'Ce qu’on sait, ce qu’on refuse de croire',
  text: PAYS_TEXT,
  glossary: [
    { word: 'déférence', en: 'deference, respectful regard', note: 'Le respect qu’on montre à quelqu’un, souvent à un supérieur.' },
  ],
  questions: [
    { q: 'Devine le sens : « une familiarité déplacée ». Que veut dire « déplacée » ici ?', a: 'Qui n’est pas à sa place, inconvenante dans la situation.' },
    { q: 'Que dit l’Office québécois de la langue française du tutoiement ?', a: 'Que dire tu dès la première rencontre est beaucoup plus fréquent au Québec qu’ailleurs, où cela peut sembler familier.' },
    { q: 'Que conseille l’Office, dans le doute ?', a: 'De vouvoyer jusqu’à ce que la question soit abordée.' },
    { q: 'Comment l’Office classe-t-il les amorces des formules de salutation ?', a: 'En ordre croissant de déférence : « Recevez », « Veuillez recevoir », « Je vous prie de recevoir ».' },
    { q: 'Que dit la page sur « Cordialement » ?', a: 'Que l’Office le range parmi les formules plus personnelles, alors que beaucoup de collègues de Nantes l’emploient comme formule neutre.' },
    { q: 'Que refuse de croire l’entreprise, et pourquoi ?', a: 'Qu’un pays serait direct et l’autre détourné : aucune source sérieuse ne l’affirme, et les personnes varient davantage.' },
  ],
  audio: REC('rec-c1-23-pays'), say: REFRAME, terms: ['tutoiement', 'salutation'],
};

const A9_FORMULES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a9-formules', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-pays',
  title: 'Quatre repères sourcés', frSub: 'Ce que disent les ouvrages',
  hint: 'Quatre cartes. Chaque repère vient d’un ouvrage, pas d’une impression.',
  audio: AUDIO, say: REFRAME, terms: ['tutoiement', 'salutation'],
  cards: [
    { head: 'Le tutoiement', label: 'selon l’Office', fr: src(E(1105)).fr, sub: rsOf(E(1105)),
      body: 'Un constat d’usage publié par l’Office québécois de la langue française. Il ne dit pas que les Québécois sont « plus directs ». EN: a usage fact, not a character trait.' },
    { head: 'Dans le doute', label: 'le vous', fr: src(E(1106)).fr, sub: rsOf(E(1106)),
      body: 'Le conseil de l’Office : vouvoyer jusqu’à ce que la question soit abordée, et laisser souvent la personne la plus âgée, la plus haut placée ou celle qui reçoit décider. EN: vous until the question is raised.' },
    { head: 'La déférence', label: 'trois degrés', fr: src(E(1108)).fr, sub: rsOf(E(1108)),
      body: '« Recevez », « Veuillez recevoir », « Je vous prie de recevoir » : l’Office les classe du moins au plus déférent. EN: three degrees of deference.' },
    { head: 'Le courriel', label: 'des deux côtés', fr: src(E(1113)).fr, sub: rsOf(E(1113)),
      body: '« Courriel » est recommandé par l’Office au Québec et, en France, par la Commission générale de terminologie depuis 2003. Pour un premier échange officiel, la formule longue reste sûre. EN: courriel, recommended on both sides.' },
  ],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a9-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre idées reçues',
  errors: [
    { wrong: 'Les Québécois sont directs : pas besoin de gants.', right: src(E(1112)).fr,
      why: 'Aucune source ne le montre. Tu vérifies les formules et le tutoiement d’usage, puis tu lis la personne. EN: no source; read the person.' },
    { wrong: 'Il m’a tutoyé dès le premier courriel : c’est un manque de respect.', right: src(E(1105)).fr,
      why: 'Selon l’Office, c’est beaucoup plus fréquent au Québec. Ce n’est pas un manque de respect. EN: a usage, not disrespect.' },
    { wrong: 'Elle me vouvoie depuis six mois : elle ne m’aime pas.', right: src(E(1107)).fr,
      why: 'Le vous peut être une simple habitude. Propose le tu, sans insister. EN: suggest tu, without pressure.' },
    { wrong: 'Une formule longue, c’est démodé partout.', right: src(E(1113)).fr,
      why: 'L’Office la juge tout à fait acceptable dans un premier échange ou une communication officielle. EN: still fine for a first official exchange.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['tutoiement'],
};

const A9_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill', id: 'a9-trier', layer: 'core', size: 'lg',
  title: 'La bonne formule pour ce lecteur', frSub: 'De nouvelles situations',
  groups: [
    grp('Trois façons de fermer', [
      it(E(1109), 'la moins déférente des trois amorces'),
      it('fr.b1.affaires.1161', 'brève'),
      it(E(1111), 'brève et chaleureuse'),
    ], chk('Pour un premier courriel officiel à la directrice d’une salle, tu choisis plutôt...', ['une formule longue, avec « Je vous prie d’agréer »', '« Au plaisir de vous lire »'], 0,
      'Un premier échange officiel appelle la formule longue. EN: the long formula for a first official exchange.')),
    ctl('Le registre', 'Ton correspondant québécois t’écrit « Bonjour, » et signe d’un prénom. Tu...', ['t’alignes sur son registre', 'réponds avec la formule la plus déférente possible'], 0,
      'S’aligner sur le registre choisi par l’autre. EN: match his register.'),
    ctl('L’idée reçue', '« En France, on ne tutoie jamais au travail. » Selon l’Office...', ['le tutoiement spontané est aussi d’usage dans des milieux de travail', 'c’est exact partout'], 0,
      'L’Office le dit en termes généraux. EN: spontaneous tu is used in some workplaces.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['salutation'],
};

const A9_VERSION = pourTonMessage('a9-version', 'Ta formule de fin', [
  grp('Deux fins pour un premier message à une directrice', [
    free('Bonne fin de journée !', 'Have a good end of the day!', 'trop légère ici'),
    free('Je vous prie d’agréer, Madame la Directrice, mes salutations distinguées.', 'Yours faithfully, Madam Director.', 'officielle'),
  ], chk('Laquelle choisis-tu pour ce premier échange officiel ?', ['la seconde', 'la première'], 0,
    'La formule longue est la plus sûre pour un premier échange officiel. EN: the long formula.')),
  grp('La règle', [
    it(E(1115), 'la règle'),
    it(E(1114), 'le registre'),
  ], chk('Ton client écrit de Rimouski ou de Nantes. Ce qui décide de tes formules, c’est...', ['la relation et le registre de l’échange', 'son pays seulement'], 0,
    'La personne, pas le passeport. EN: the person, not the passport.')),
], ['salutation']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le tutoiement', 'Selon l’Office, dire tu dès la première rencontre est...', ['beaucoup plus fréquent au Québec qu’ailleurs', 'interdit au Québec'], 0,
    'Un constat d’usage. EN: more frequent in Québec.'),
  ctl('La déférence', 'La plus déférente des trois amorces est...', ['Je vous prie de recevoir', 'Recevez', 'Veuillez recevoir'], 0,
    'Selon l’Office, en ordre croissant. EN: the most deferential.'),
  ctl('Le cliché', '« Un pays est direct, l’autre détourné »...', ['ne repose sur aucune source sérieuse', 'est prouvé'], 0,
    'Lis la personne. EN: no serious source.'),
], ['tutoiement']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Un courriel, deux lecteurs',
    opener: {
      line: 'Un collègue de Nantes, une cliente de Rimouski, le même message : ici tu vérifies les formules et les usages, et tu laisses les clichés de côté. EN: A colleague in Nantes, a client in Rimouski, the same message: here you check the formulas and usages, and leave the clichés aside.',
      imageRef: 'lessons/tact-travail/act09.jpg',
    },
    sections: [],
    milestone: 'Tu choisis tes formules et le tu ou le vous d’après des usages sourcés, et non d’après un cliché sur un pays. EN: You choose your formulas and tu or vous from sourced usage, not from a cliché about a country.',
    estScreens: 33, restPoints: ['a9-formules'],
  },
  sections: [A9_LECTURE, A9_FORMULES, A9_ERREURS, A9_TRIER, A9_VERSION, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — DES TITRES QUI DISENT QUELQUE CHOSE
 *
 *  TEXT: a slide plan with the director's comments. MOVE: the titre-message,
 *  one idea per slide, signposting at work, the empty bottom band (OQLF).
 *  Lesson 9 in C1 owns signposting an exposé aloud: cited.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a10-lecture', layer: 'core', questionsInModal: true,
  title: 'Le plan de la présentation', frSub: 'Cinq diapositives, cinq commentaires',
  text: DIAPOS_TEXT,
  glossary: [
    { word: 'puces', en: 'bullet points', note: 'Les petits signes qui ouvrent chaque ligne d’une liste.' },
  ],
  questions: [
    { q: 'Devine le sens : « sa saison est-elle menacée ? ». Que veut dire « menacée » ici ?', a: 'En danger, risquant d’être compromise.' },
    { q: 'Que reproche Isabelle au titre « Calendrier » ?', a: 'Il ne dit rien : le comité veut savoir si sa saison est menacée, et le titre doit donner la réponse.' },
    { q: 'Que devient la diapositive 3 ?', a: 'Un titre-message (« Les erreurs de paiement ont baissé de 90 % en trois semaines »), sans puces : Olivier les dira.' },
    { q: 'Comment annonce-t-il la diapositive sur la prévente ?', a: '« J’en viens au point qui vous concerne directement : la prévente. »' },
    { q: 'Pourquoi ne pas lire ses diapositives ?', a: 'Le comité lit plus vite qu’on ne parle, et il cesse d’écouter.' },
    { q: 'Que recommande l’Office pour le bas des diapositives ?', a: 'Le laisser vide, parce que tout le monde ne le voit pas dans une salle.' },
  ],
  audio: REC('rec-c1-23-diapos'), say: REFRAME, terms: ['titremessage'],
};

const A10_TITRES: Sec<'examples'> = {
  type: 'examples', id: 'a10-titres', layer: 'core', sheetId: 'sheet-salle',
  title: 'Des balises pour une présentation au travail', frSub: 'À l’écran et à voix haute',
  examples: [
    ex(E(1118), 'Un titre-message : la conclusion de la diapositive, en une phrase.'),
    ex(E(1121), 'Annoncer le plan et le temps des questions, à voix haute plutôt qu’en diapositive.'),
    ex(E(1120), 'Annoncer le point qui touche ce public-là.'),
    ex(E(1119), 'Dire ce qu’il faut lire dans un graphique.'),
    ex(E(1122), 'Résumer avant les questions.'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['titremessage'],
};

const A10_HACKS: Sec<'hacks'> = {
  type: 'hacks', id: 'a10-hacks', layer: 'core', title: 'Trois astuces de présentateur',
  hacks: [
    { hack: 'Lis seulement les titres de tes diapositives, à la suite : ils doivent raconter toute ta présentation.',
      why: 'Si les titres seuls ne disent rien, le public ne retiendra rien. EN: the titles alone should tell the story.' },
    { hack: 'Pour chaque diapositive, demande-toi : si on ne devait retenir qu’une chose, laquelle ?',
      why: 'C’est ton titre. EN: that is your title.' },
    { hack: `Annonce où tu vas, comme ${EXPOSE_REF} te l’a appris devant un jury : un public au travail ne peut pas revenir en arrière non plus.`,
      why: 'À l’oral, on ne relit pas. EN: an audience cannot reread.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['titremessage'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill', id: 'a10-piege', layer: 'core', swipe: true,
  title: 'Six diapositives à reprendre',
  rule: {
    title: 'Une diapositive, une idée, un titre qui la dit',
    body: 'Le titre donne la conclusion, le contenu la prouve, ta voix relie le tout au public. Une diapositive qui porte un mot-étiquette, huit puces et un texte lu à voix haute fait décrocher la salle. EN: One idea per slide, a title that states it.',
  },
  cards: [
    { promptLabel: 'un titre-étiquette', promptSound: 'Calendrier',
      fr: src(E(1118)).fr, ipa: ipaOf(E(1118)),
      tip: 'Le titre dit ce qu’il faut en retenir. EN: state the point.' },
    { promptLabel: 'huit puces', promptSound: 'Tests, erreurs, taxes, forfaits, corrections, délais, risques, suite.',
      fr: src(E(1116)).fr, ipa: ipaOf(E(1116)),
      tip: 'Une idée par diapositive ; le reste, tu le dis. EN: one idea.' },
    { promptLabel: 'le texte lu', promptSound: 'Je vous lis ce qui est écrit à l’écran.',
      fr: src(E(1123)).fr, ipa: ipaOf(E(1123)),
      tip: 'Le public lit plus vite que toi. EN: comment, do not read.' },
    { promptLabel: 'un graphique muet', promptSound: 'Voici un graphique.',
      fr: src(E(1119)).fr, ipa: ipaOf(E(1119)),
      tip: 'Dis ce qu’il faut y voir. EN: say what to see.' },
    { promptLabel: 'tout à l’écran', promptSound: 'J’ai mis les vingt dates sur la diapositive.',
      fr: src(E(1128)).fr, ipa: ipaOf(E(1128)),
      tip: 'Le détail va dans le document que tu laisses. EN: detail in the handout.' },
    { promptLabel: 'pas de résumé', promptSound: 'Voilà, c’est tout, des questions ?',
      fr: src(E(1122)).fr, ipa: ipaOf(E(1122)),
      tip: 'Résume en une phrase avant les questions. EN: sum up first.' },
  ],
  drill: [
    { promptSay: 'Une diapositive, une …', opts: ['idée', 'liste'], correct: 0 },
    { promptSay: 'Le titre dit ce qu’il faut en …', opts: ['retenir', 'retirer'], correct: 0 },
    { promptSay: 'J’en … au point qui vous concerne directement.', opts: ['viens', 'vais'], correct: 0 },
    { promptSay: 'Je ne lis pas mes diapositives : je les …', opts: ['commente', 'recopie'], correct: 0 },
    { promptSay: 'Avant de passer à vos questions, je … en une phrase.', opts: ['résume', 'recommence'], correct: 0 },
    { promptSay: 'Le … de la diapositive reste vide.', opts: ['bas', 'titre'], correct: 0 },
    { promptSay: 'Le détail … dans le document que je vous laisse.', opts: ['figure', 'figurent'], correct: 0 },
    { promptSay: 'Si vous ne deviez retenir qu’une chose, ce … celle-ci.', opts: ['serait', 'sera'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Une diapositive, une idée' },
    { label: 'Six cartes', kind: 'cards', title: 'Des diapositives à reprendre' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-c1-23-piege-diapos'), say: REFRAME, terms: ['titremessage'],
};

const A10_VERSION = pourTonMessage('a10-version', 'L’objet de ton message', [
  grp('Deux objets de courriel', [
    free('Objet : Suivi', 'Subject: Follow-up', 'une étiquette'),
    free('Objet : report du transfert au 15 mars et réponse sur la billetterie du festival', 'Subject: transfer postponed to 15 March and answer on the festival ticketing', 'un objet-message'),
  ], chk('Lequel choisis-tu ?', ['le second', 'le premier'], 0,
    'Comme un titre-message : le lecteur sait avant d’ouvrir. EN: like a message title.')),
  grp('La règle', [
    it(E(1124), 'la règle'),
    it(E(1117), 'le titre'),
  ], chk('Un objet de courriel, comme un titre de diapositive, devrait...', ['dire l’essentiel', 'rester vague pour intriguer'], 0,
    'Le lecteur trie ses courriels par l’objet. EN: the subject line carries the point.')),
], ['titremessage']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le titre', 'Un bon titre de diapositive...', ['donne la conclusion', 'nomme le thème en un mot'], 0,
    'Un titre-message. EN: the conclusion.'),
  ctl('Le contenu', 'Combien d’idées par diapositive ?', ['une', 'autant que possible', 'huit puces'], 0,
    'Une idée, prouvée. EN: one.'),
  ctl('La voix', 'Devant tes diapositives, tu...', ['les commentes', 'les lis mot à mot'], 0,
    'Le public lit plus vite que toi. EN: comment.'),
], ['titremessage']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Des titres qui disent quelque chose',
    opener: {
      line: 'Un comité de suivi, quinze minutes, cinq diapositives : ici chaque titre dit ce qu’il faut retenir, et ta voix fait le reste. EN: A steering committee, fifteen minutes, five slides: here every title says what to remember and your voice does the rest.',
      imageRef: 'lessons/tact-travail/act10.jpg',
    },
    sections: [],
    milestone: 'Tu titres tes diapositives par leur message, une idée chacune, et tu balises ta présentation à voix haute. EN: You title your slides by their message, one idea each, and signpost your talk aloud.',
    estScreens: 33, restPoints: ['a10-titres'],
  },
  sections: [A10_LECTURE, A10_TITRES, A10_HACKS, A10_PIEGE, A10_VERSION, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — LA QUESTION QUI FÂCHE
 *
 *  TEXT: the director's coaching note. MOVE: the hostile question answered
 *  on substance, not tone; the trap split; the off-topic deferred in
 *  public; the confidential declined. A heated exchange heard once.
 *  Lesson 9 in C1 owns reformulating and buying time before a jury: cited.
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading', id: 'a11-lecture', layer: 'core', questionsInModal: true,
  title: 'Préparer la séance de questions', frSub: 'Une note la veille du comité',
  text: QUESTIONS_TEXT,
  glossary: [
    { word: 'esquive', en: 'dodge, evasion', note: 'Une façon d’éviter une question sans y répondre.' },
  ],
  questions: [
    { q: 'Devine le sens : « elle a le droit de l’être ». À quoi renvoie « l’ » ?', a: 'À « exigeante » : Monique Tardif a le droit d’être exigeante.' },
    { q: 'Comment répondre à la question hostile, selon Isabelle ?', a: 'Au fond, pas au ton : reconnaître le retard, donner la cause en une phrase, puis le plan, et tenir ce qui est juste.' },
    { q: 'Que faire d’une question piège ?', a: 'La séparer en deux et dire par laquelle on commence.' },
    { q: 'Que faire d’une question hors sujet ?', a: 'Proposer de l’examiner après la séance et la noter devant tout le monde.' },
    { q: 'Et d’une question confidentielle ?', a: 'Dire simplement qu’on n’est pas en mesure d’y répondre, sans se justifier.' },
    { q: 'Pourquoi éviter « Bonne question » ?', a: 'Devant une question hostile, cela sonne comme une esquive.' },
  ],
  audio: REC('rec-c1-23-questions'), say: REFRAME, terms: ['hostile'],
};

const A11_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck', id: 'a11-cartes', render: 'deck', layer: 'core', size: 'lg', sheetId: 'sheet-salle',
  title: 'Quatre questions difficiles', frSub: 'Et une réponse pour chacune',
  hint: 'Quatre cartes. Chaque question demande un geste différent.',
  audio: AUDIO, say: REFRAME, terms: ['hostile'],
  cards: [
    { head: 'La question hostile', label: 'répondre au fond', fr: src(E(1134)).fr, sub: rsOf(E(1134)),
      body: 'Reconnais ce qui est juste, donne la cause et le plan, et tiens ce qui est juste aussi, sans élever la voix. EN: acknowledge, explain, hold firm.' },
    { head: 'La question piège', label: 'la découper', fr: src(E(1133)).fr, sub: rsOf(E(1133)),
      body: 'Deux questions en une, ou un faux choix : sépare-les et annonce ton ordre. EN: split it.' },
    { head: 'La question hors sujet', label: 'la reporter, devant tous', fr: src(E(1132)).fr, sub: rsOf(E(1132)),
      body: 'Elle relève d’une autre réunion : propose une suite précise, pour qu’on voie que tu ne l’esquives pas. EN: defer it, visibly.' },
    { head: 'La question confidentielle', label: 'la décliner', fr: src(E(1131)).fr, sub: rsOf(E(1131)),
      body: 'Sur d’autres clients ou sur les marges : dis simplement que tu n’es pas en mesure de répondre. EN: decline, simply.' },
  ],
};

/** THE EAR MISSION: one take, two voices, the heated exchange heard once.
 *  The chair names both speakers in the first line. */
const A11_ECOUTE: Sec<'listening'> = {
  type: 'listening', id: 'a11-ecoute', layer: 'core', hideLines: true,
  title: 'Au comité de suivi', frSub: 'Marc-André Dion donne la parole, Monique Tardif interroge, Olivier Lapointe répond',
  lines: [ln(E(1139)), ln(E(1140)), ln(E(1141)), ln(E(1142)), ln(E(1143)), ln(E(1144)), ln(E(1145)), ln(E(1146))],
  questions: [
    { q: 'Quel ton prend la première question de Monique Tardif ?', opts: ['Hostile : elle attaque plus qu’elle ne demande.', 'Neutre : elle demande une date.'], correct: 0,
      why: '« Est-ce ainsi que vous traitez tous vos clients ? » : une attaque. EN: hostile.' },
    { q: 'Comment Olivier Lapointe commence-t-il sa réponse ?', opts: ['Il accueille la question et promet une réponse directe.', 'Il dit « Bonne question ».', 'Il lui demande de se calmer.'], correct: 0,
      why: 'Il répond au fond, sans relever le ton. EN: he takes it on directly.' },
    { q: 'À qui attribue-t-il le retard ?', opts: ['à son entreprise', 'à la salle', 'au prestataire de paiement'], correct: 0,
      why: '« Le retard vient de nous. » EN: to his own company.' },
    { q: 'Que demande ensuite Monique Tardif ?', opts: ['une garantie sur la nouvelle date', 'une remise', 'le nom du responsable'], correct: 0,
      why: 'Qui garantit que la date sera tenue ? EN: a guarantee.' },
    { q: 'Que propose-t-il à la place d’une promesse ?', opts: ['un point d’étape écrit chaque semaine', 'une pénalité', 'une nouvelle réunion le lendemain'], correct: 0,
      why: 'Il montre au lieu de promettre. EN: a weekly written update.' },
  ],
  audio: REC('rec-c1-23-comite'), say: REFRAME, terms: ['hostile'],
};

const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors', id: 'a11-erreurs', layer: 'core', swipe: true, size: 'lg',
  title: 'Quatre réponses qui aggravent',
  errors: [
    { wrong: 'Excellente question !', right: src(E(1129)).fr,
      why: 'Devant une attaque, le compliment sonne comme une esquive. Accueille-la et réponds. EN: praise sounds evasive.' },
    { wrong: 'Ce n’est pas notre faute, c’est le prestataire.', right: src(E(1142)).fr,
      why: 'Rejeter la faute en public fait perdre la salle. Assume ce qui te revient. EN: own your share.' },
    { wrong: 'Je dirais trois cents, à peu près, je crois.', right: src(E(1138)).fr,
      why: 'Un chiffre inventé en public te suivra. Promets-le par écrit. EN: never invent a figure.' },
    { wrong: 'Vous n’avez visiblement pas lu notre rapport.', right: src(E(1130)).fr,
      why: 'Répondre au ton par le ton, c’est perdre la discussion. EN: do not answer tone with tone.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['hostile'],
};

const A11_VERSION = pourTonMessage('a11-version', 'Si le client attaque par écrit', [
  grp('Deux réponses à un courriel fâché', [
    free('Je trouve votre ton très déplacé, et nous avons fait de notre mieux.', 'I find your tone very inappropriate, and we did our best.', 'répondre au ton'),
    free('Vous avez raison sur le retard, qui vient de nous ; voici ce que nous faisons, et quand vous aurez des nouvelles.', 'You are right about the delay, which is our doing; here is what we are doing, and when you will hear from us.', 'répondre au fond'),
  ], chk('Laquelle envoies-tu ?', ['la seconde', 'la première'], 0,
    'Reconnaître, expliquer, proposer : au fond, jamais au ton. EN: substance, not tone.')),
  grp('La règle', [
    it(E(1137), 'la règle'),
    it(E(1135), 'différer, par écrit'),
  ], chk('Il te manque un chiffre que le client exige tout de suite. Tu...', ['le promets par écrit, avec une heure', 'donnes un chiffre approximatif'], 0,
    'Un chiffre exact demain vaut mieux qu’un chiffre faux maintenant. EN: promise it in writing.')),
], ['hostile']);

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('L’hostile', 'Devant une question hostile, tu réponds...', ['au fond, jamais au ton', 'sur le même ton', 'par un compliment'], 0,
    'Reconnaître, expliquer, tenir. EN: substance, not tone.'),
  ctl('Le hors sujet', 'Une question hors sujet, tu...', ['la reportes, devant tous, avec une suite', 'l’ignores'], 0,
    'On voit que tu ne l’esquives pas. EN: defer visibly.'),
  ctl('Le chiffre', 'Tu n’as pas le chiffre demandé. Tu...', ['le promets par écrit', 'l’estimes à voix haute'], 0,
    'Jamais de chiffre inventé. EN: promise it.'),
], ['hostile']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'La question qui fâche',
    opener: {
      line: 'Une administratrice exigeante, une question qui attaque, tout le comité qui écoute : ici tu réponds au fond, jamais au ton. EN: A demanding board member, a question that attacks, the whole committee listening: here you answer the substance, never the tone.',
      imageRef: 'lessons/tact-travail/act11.jpg',
    },
    sections: [],
    milestone: 'Tu reçois une question hostile, piège, hors sujet ou confidentielle sans perdre ni ton calme ni ton message. EN: You handle a hostile, trap, off-topic or confidential question without losing your calm or your message.',
    estScreens: 34, restPoints: ['a11-ecoute'],
  },
  sections: [A11_LECTURE, A11_CARTES, A11_ECOUTE, A11_ERREURS, A11_VERSION, A11_CHECK],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TON MESSAGE
 *
 *  The production act. A combined refusal and bad-news email to the same
 *  client is the model; the plan, a role play with the director, then the
 *  graded task on another client: the théâtre des Glaces, from a fact
 *  sheet printed in the brief.
 * ══════════════════════════════════════════════════════════════════════════ */

const A12_MODELE: Sec<'reading'> = {
  type: 'reading', id: 'a12-modele', layer: 'core', questionsInModal: true,
  title: 'Deux réponses difficiles, un message', frSub: 'Un modèle complet',
  text: MODELE_TEXT,
  glossary: [
    { word: 'guichetiers', en: 'box-office staff', note: 'Les personnes qui vendent les billets au guichet.' },
  ],
  questions: [
    { q: 'Devine le sens : « que nous pouvons mettre en avant ». Que veut dire « mettre en avant » ici ?', a: 'Présenter de façon visible, souligner.' },
    { q: 'Par quel point Olivier commence-t-il, et pourquoi ?', a: 'Par le report de la formation : c’est le plus urgent.' },
    { q: 'Comment annonce-t-il le report ?', a: 'Dès la première phrase du point, avec les deux dates et une raison assumée.' },
    { q: 'Que dit-il de ce que le report change ?', a: 'Les guichetiers gardent le guide imprimé jusqu’au 10, et l’assistance reste ouverte jusqu’à 22 h les soirs de spectacle.' },
    { q: 'Comment refuse-t-il la borne ?', a: 'Un non clair (« nous ne pourrons pas la fournir sans frais »), une raison, deux possibilités.' },
    { q: 'Comment termine-t-il ?', a: 'Il reconnaît que les réponses déçoivent, propose un appel jeudi et ferme par une formule complète.' },
  ],
  audio: REC('rec-c1-23-modele'), say: REFRAME, terms: ['nouvelle', 'refus'],
};

const A12_PLAN: Sec<'steps'> = {
  type: 'steps', id: 'a12-plan', layer: 'core', sheetId: 'sheet-messages',
  title: 'Cinq étapes pour ton message',
  steps: [
    '1. Lis la fiche et trie : la mauvaise nouvelle, la demande à refuser, ce que tu peux offrir. EN: sort the facts first.',
    '2. Écris un objet qui dit l’essentiel, puis commence par le plus urgent. EN: a clear subject, the most urgent first.',
    '3. La nouvelle en tête, assumée ; ce qu’elle change ; ce que tu fais, et quand. EN: news, impact, plan.',
    '4. Le refus : un non clair, une raison vraie, une ou deux solutions. N’invente aucun fait. EN: a clear no, one reason, solutions.',
    '5. Une suite datée, une formule adaptée, puis relis en cherchant le mot qui pique. EN: a dated next step, then reread.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['nouvelle', 'refus'],
};

const A12_USAGES: Sec<'useCases'> = {
  type: 'useCases', id: 'a12-usages', layer: 'core', title: 'Où tu écriras ce message',
  cases: [
    { situation: 'Un projet glisse et le client doit le savoir', fr: src(E(1147)).fr, en: src(E(1147)).en },
    { situation: 'On te demande ce que le contrat ne prévoit pas', fr: src(E(1148)).fr, en: src(E(1148)).en },
    { situation: 'Ton client a une échéance que le retard touche', fr: src(E(1149)).fr, en: src(E(1149)).en },
    { situation: 'Tu veux garder la relation malgré deux mauvaises nouvelles', fr: src(E(1150)).fr, en: src(E(1150)).en },
  ],
  audio: AUDIO, say: REFRAME, terms: ['tact'],
};

/** USE IT, out loud. Every French string here uses the typographic ’ and
 *  no seed row is quoted (scenario.logic: no mixed apostrophes). */
const A12_SCENARIO: Sec<'scenario'> = {
  type: 'scenario', id: 'a12-scenario', layer: 'core', title: 'Isabelle relit ton plan',
  setting: 'Dans le bureau d’Isabelle Thériault. Tu dois écrire au théâtre des Glaces : le transfert des abonnés est reporté, et la billetterie gratuite du festival est refusée. Elle te demande comment tu comptes t’y prendre.',
  turns: [
    {
      ai: 'Par quoi commencez-vous ?', en: 'What do you start with?',
      user: src(E(1147)).fr, userEn: 'I start with the news, not with the apologies. (The most urgent news, at the top.)',
      alts: [
        { fr: 'Par le report du transfert, avec les deux dates, dès la première phrase.', en: 'With the postponed transfer, with both dates, in the first sentence.' },
        { fr: 'Par le plus urgent : le transfert, qui touche sa campagne.', en: 'With the most urgent: the transfer, which affects her campaign.' },
      ],
    },
    {
      ai: 'Et si l’ancien logiciel est en partie responsable ?', en: 'And if the old software is partly to blame?',
      user: 'Je le dis, mais j’assume notre part : nous aurions dû tester l’export plus tôt.', userEn: 'I say so, but I own our share: we should have tested the export sooner.',
      alts: [
        { fr: 'Je n’accuse personne : nous avons sous-estimé la vérification.', en: 'I blame nobody: we underestimated the checking.' },
        { fr: 'Un fait, puis notre part : l’export est incomplet, et nous l’avons testé trop tard.', en: 'A fact, then our share: the export is incomplete, and we tested it too late.' },
      ],
    },
    {
      ai: 'Qu’est-ce que ça change pour elle ?', en: 'What does it change for her?',
      user: src(E(1153)).fr, userEn: 'The postponement affects your renewal campaign, and I appreciate that. (Name the impact.)',
      alts: [
        { fr: 'Sa campagne du 5 mars devra commencer sur l’ancien système, ou être décalée.', en: 'Her 5 March campaign will have to start on the old system, or be moved.' },
        { fr: 'Je lui donne les deux scénarios pour sa campagne, sans choisir à sa place.', en: 'I give her the two scenarios for her campaign, without choosing for her.' },
      ],
    },
    {
      ai: 'Et le festival ? Elle y tient beaucoup.', en: 'And the festival? It matters a lot to her.',
      user: 'Je refuse une fois, clairement : ce n’est pas au contrat ; puis je propose le module d’avril.', userEn: 'I refuse once, clearly: it is not in the contract; then I offer the April module.',
      alts: [
        { fr: 'Un non clair, une raison, et deux solutions : avril payant, ou septembre gratuit.', en: 'A clear no, one reason, and two solutions: April paid, or September free.' },
        { fr: 'Je ne dis pas « pour l’instant » : je donne les deux vraies possibilités.', en: 'I do not say « for now »: I give the two real options.' },
      ],
    },
    {
      ai: 'Vous pouvez lui promettre que tout sera prêt le 15 ?', en: 'Can you promise her everything will be ready on the 15th?',
      user: 'Je promets ce que nous faisons : une personne la semaine du 8, et un point chaque lundi.', userEn: 'I promise what we are doing: one person the week of the 8th, and an update every Monday.',
      alts: [
        { fr: 'Je n’ajoute aucune promesse qui n’est pas dans la fiche.', en: 'I add no promise that is not in the fact sheet.' },
        { fr: 'Je m’engage sur des gestes datés, pas sur un résultat que je ne maîtrise pas.', en: 'I commit to dated actions, not to an outcome I do not control.' },
      ],
    },
    {
      ai: 'Comment terminez-vous ?', en: 'How do you finish?',
      user: src(E(1155)).fr, userEn: 'I remain reachable all week to talk about it. (A dated next step and a fitting closing formula.)',
      alts: [
        { fr: 'Par une proposition d’appel jeudi ou vendredi, puis une formule complète.', en: 'With a suggested call on Thursday or Friday, then a full closing formula.' },
        { fr: 'Par un appel proposé, et « Je vous prie d’agréer » : nous nous vouvoyons.', en: 'With a suggested call, and « Je vous prie d’agréer »: we use vous.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['nouvelle', 'refus'],
};

/** THE GRADED TASK: a written refusal and bad-news message to a client,
 *  from a fact sheet. */
const A12_MISSION: Sec<'task'> = {
  type: 'task', id: 'a12-mission', title: 'Le message au théâtre des Glaces', frSub: 'Mission écrite',
  brief: `Tu dois écrire à Sylvie Bouchard, directrice générale du théâtre des Glaces, cliente d’Ardisque : une mauvaise nouvelle et un refus, dans un même courriel. Voici la fiche de faits que tu as reçue. ${GLACES_FICHE}`,
  briefEn: 'You must write to Sylvie Bouchard, general director of the théâtre des Glaces, an Ardisque client: bad news and a refusal, in one email. The fact sheet is printed here so you can write with it in front of you; every fact in it is invented for the exercise.',
  produce: 'Écris un courriel de 250 à 400 mots : un objet qui dit l’essentiel ; la mauvaise nouvelle en tête, assumée, avec ce qu’elle change et ce qu’Ardisque propose ; un refus clair, motivé par une seule raison et suivi de solutions ; une suite datée et une formule de salutation adaptée. N’invente aucun fait.',
  responseSpec: { kind: 'text', minWords: 250, maxWords: 400 },
  rubric: {
    criteria: [
      { key: 'nouvelle', label: 'La mauvaise nouvelle, en tête et assumée', maxPoints: 4, descriptors: [
        '4 : Le report et ses deux dates arrivent dès le début ; la cause est dite en une phrase et Ardisque assume sa part, sans accuser personne ; ce que le report change pour la campagne de réabonnement est dit clairement.',
        '3 : La nouvelle est en tête et assumée, mais sa conséquence pour la campagne reste vague.',
        '2 : La nouvelle arrive tard, ou elle est noyée dans un passif sans auteur (« des retards ont été constatés »), ou la faute est rejetée sur l’ancien logiciel seul.',
        '1 : La nouvelle est absente, cachée ou minimisée.',
      ] },
      { key: 'refus', label: 'Un refus clair, motivé, avec des solutions', maxPoints: 4, descriptors: [
        '4 : Le non est dit une fois, clairement ; une seule raison, vraie (ce n’est pas au contrat) ; les solutions de la fiche sont proposées (le module d’avril à 1 200 $, la version de septembre trop tard pour juillet) ; aucun faux espoir.',
        '3 : Refus clair, mais une solution manque ou la raison est délayée en plusieurs excuses.',
        '2 : Un refus flou (« pour l’instant », « peut-être ») ou un refus sec sans solution.',
        '1 : Pas de refus, ou un oui implicite.',
      ] },
      { key: 'suite', label: 'Ce qu’Ardisque fait, et quand', maxPoints: 3, descriptors: [
        '3 : Les gestes de la fiche sont donnés et datés (une personne la semaine du 8 mars, une formation offerte, un point chaque lundi) ; une suite concrète est proposée (un appel, une date).',
        '2 : Les gestes sont là mais sans dates, ou la suite reste vague (« nous restons à votre disposition » seulement).',
        '1 : Aucune suite proposée.',
      ] },
      { key: 'tact', label: 'Le tact : ni sec ni brouillard', maxPoints: 4, descriptors: [
        '4 : Le ton reconnaît la gêne sans cascade d’excuses ; aucune pique (« comme indiqué », « pour rappel ») ; le degré d’indirect est juste : ferme sur les faits, ouvert sur le choix laissé au client.',
        '3 : Ton juste dans l’ensemble, avec une formule trop sèche ou trop d’excuses à un endroit.',
        '2 : Ton sec, ou au contraire tellement enveloppé que les deux nouvelles se perdent.',
        '1 : Ton blessant ou passif-agressif.',
      ] },
      { key: 'forme', label: 'L’objet, l’appel, la salutation', maxPoints: 2, descriptors: [
        '2 : Un objet qui dit l’essentiel ; une formule d’appel et une formule de salutation adaptées à une directrice qu’on vouvoie.',
        '1 : Objet vague (« Suivi »), ou formules inadaptées au destinataire.',
      ] },
      { key: 'langue', label: 'Une langue précise et soignée', maxPoints: 3, descriptors: [
        '3 : Le vocabulaire du message difficile est précis (reporter, assumer, en revanche, il ne nous est pas possible de) ; aucun mot contesté (impacter, booker, je reviens vers vous) ; presque aucune erreur.',
        '2 : Un ou deux mots contestés, ou quelques erreurs qui ne gênent pas.',
        '1 : Des erreurs fréquentes qui gênent la lecture.',
      ] },
    ],
  },
  scaffold: [
    'Objet : …',
    'Madame Bouchard,',
    'Je dois vous informer que…',
    'Nous aurions dû…',
    'Concrètement, …',
    'Afin de limiter la gêne, …',
    'Quant à…, il ne nous est pas possible de…',
    'En revanche, …',
  ],
  modelAnswer: 'Objet : report du transfert de vos abonnés et billetterie du festival. Madame Bouchard, je vous écris au sujet de deux points, en commençant par le plus urgent. Le transfert de votre fichier d’abonnés, prévu le 1er mars, est reporté au 15 mars. L’export fourni par votre ancien logiciel est incomplet : l’historique de 2019 à 2021 manque. Nous aurions dû tester cet export plus tôt, et nous avons sous-estimé le temps de vérification ; ce retard nous revient. Concrètement, votre campagne de réabonnement, prévue le 5 mars, devra soit commencer sur votre système actuel, soit être décalée d’une dizaine de jours. Je sais que cette campagne compte beaucoup pour votre saison, et je mesure la gêne que ce report vous cause. Afin de la limiter, une personne de notre équipe aidera la vôtre à vérifier les fiches la semaine du 8 mars, et nous vous offrons une séance de formation supplémentaire. Je vous enverrai un point d’étape écrit chaque lundi jusqu’au transfert. Quant à la billetterie de votre festival d’été, il ne nous est pas possible de l’ajouter sans frais : cette fonction ne fait pas partie de votre contrat. En revanche, deux solutions s’offrent à vous. Le module « Événements extérieurs », qui gère les places debout et les bracelets, peut être installé dès avril pour 1 200 $ ; il serait prêt bien avant juillet. Il sera aussi inclus sans frais dans notre version standard de septembre, mais trop tard pour cette édition du festival. Je comprends que ces deux réponses ne soient pas celles que vous espériez. Je vous propose un appel jeudi ou vendredi pour choisir ensemble le scénario de votre campagne et, si vous le souhaitez, pour parler du festival. Je reste joignable toute la semaine. Je vous prie d’agréer, Madame Bouchard, mes salutations distinguées. Chargé de compte, Ardisque.',
  modelAnswerEn: 'Subject: postponed transfer of your subscribers and festival ticketing. Dear Ms Bouchard, I am writing about two points, starting with the most urgent. The transfer of your subscriber file, planned for 1 March, is postponed to 15 March. The export provided by your old software is incomplete: the history from 2019 to 2021 is missing. We should have tested this export sooner, and we underestimated the time needed to check it; this delay is our responsibility. In practical terms, your renewal campaign, planned for 5 March, will either have to start on your current system or be moved back by about ten days. I know how much this campaign matters for your season, and I appreciate the inconvenience this postponement causes you. To limit it, a member of our team will help yours check the records in the week of 8 March, and we are offering you an extra training session. I will send you a written progress update every Monday until the transfer. As for the ticketing for your summer festival, it is not possible for us to add it free of charge: this feature is not part of your contract. On the other hand, two solutions are open to you. The « Outdoor events » module, which handles standing places and wristbands, can be installed from April for $1,200; it would be ready well before July. It will also be included free of charge in our standard September release, but too late for this year’s festival. I understand that these two answers are not the ones you were hoping for. I suggest a call on Thursday or Friday to choose the scenario for your campaign together and, if you wish, to talk about the festival. I remain reachable all week. Yours sincerely, Account manager, Ardisque.',
  watchFor: [
    { pattern: 'The delay is placed late in the email, after pleasantries or after the refusal, or presented as a detail.', criterion: 'nouvelle', feedback: 'Mets le report et ses deux dates dans les premières lignes : c’est le plus urgent pour elle.', ref: 'a4-piege' },
    { pattern: 'An agentless passive or a vague phrase hides who is responsible (« des retards ont été constatés », « quelques ajustements »).', criterion: 'nouvelle', feedback: 'Assume : « nous aurions dû tester l’export plus tôt ».', ref: 'a4-exemples' },
    { pattern: 'The blame is put entirely on the theatre’s old software or on the client.', criterion: 'nouvelle', feedback: 'Dis le fait (l’export est incomplet), puis la part d’Ardisque, sans accuser.', ref: 'a4-piege' },
    { pattern: 'The impact on the 5 March renewal campaign is missing.', criterion: 'nouvelle', feedback: 'Dis ce que le report change pour sa campagne : deux scénarios possibles.', ref: 'a4-version' },
    { pattern: 'The refusal is vague (« pour l’instant », « ce sera difficile ») or repeated, or buried in excuses.', criterion: 'refus', feedback: 'Un non clair, une seule fois : « il ne nous est pas possible de l’ajouter sans frais ».', ref: 'a3-erreurs' },
    { pattern: 'Several excuses instead of one reason, or a reason that can be argued.', criterion: 'refus', feedback: 'Une seule raison, vraie : la fonction n’est pas au contrat.', ref: 'a3-gestes' },
    { pattern: 'No solution offered after the refusal, or an invented solution (a discount, a free module in April).', criterion: 'refus', feedback: 'Propose les solutions de la fiche : le module d’avril à 1 200 $, ou la version de septembre.', ref: 'a3-trier' },
    { pattern: 'Promises not in the fact sheet (a guaranteed date, a refund, extra staff) or no dated next step.', criterion: 'suite', feedback: 'Engage-toi sur les gestes de la fiche, datés, et propose un appel.', ref: 'a4-version' },
    { pattern: 'A cascade of apologies, or barbed politeness (« comme indiqué », « pour rappel », « merci de votre compréhension » used to close the debate).', criterion: 'tact', feedback: 'Une phrase reconnaît la gêne ; le reste, ce sont des faits et des solutions.', ref: 'a7-traduire' },
    { pattern: 'Over-indirect wording that blurs the two answers (« il ne serait peut-être pas impossible »).', criterion: 'tact', feedback: 'Ferme sur les faits : le report est décidé, le refus aussi ; ouvert sur ce qu’elle choisit.', ref: 'a2-piege' },
    { pattern: 'A vague subject line, or an informal greeting or closing for a director addressed as vous.', criterion: 'forme', feedback: 'Un objet qui dit l’essentiel ; « Madame Bouchard, » et une formule complète.', ref: 'a9-formules' },
    { pattern: 'Contested office words: impacter, booker, je reviens vers vous, un call, initier (= commencer).', criterion: 'langue', feedback: 'Toucher, réserver, je reprends contact avec vous, un appel, lancer.', ref: 'a8-mots' },
  ],
  graderNotes: [
    'Word count: 250 to 400, with 10% tolerance (225 to 440) before a criterion loses points for length. The subject line, the greeting and the signature do not count.',
    'The learner may order the two points either way if the choice is justified, but the delay is the more urgent for the client (her campaign starts on 5 March); do not penalise a refusal placed first if the delay still appears in the first third.',
    'Fidelity: the facts are the fact sheet’s (3 400 subscribers; transfer 1 March moved to 15 March; incomplete export, 2019-2021 history missing; Ardisque tested late and underestimated the checking; campaign on 5 March; help the week of 8 March, a free extra training session, a written update every Monday; festival in July, standing places and wristbands; module « Événements extérieurs » 1 200 $ from April; free in the September standard release). A proposal may go beyond the sheet (a call on a given day); a new FACT may not (a discount, a guaranteed date, a refund).',
    'Responsibility: the export is incomplete (the old software) AND Ardisque tested it late. Reward a message that states the fact and owns Ardisque’s share; mark down one that blames only the client’s old software, or one that over-apologises.',
    'Norms: impacter, booker, je reviens vers vous, un call and initier (= commencer) are contested words, not grammar errors; count them under « langue » only, one point at most in total. « Prioriser » is accepted by the OQLF: do not mark it. « Cordialement » is acceptable as a brief closing; a long formula is better for a first official message, but do not penalise « Meilleures salutations ».',
    'Accept Québec and European usage alike (« courriel » or « mail », « bonjour » or « Madame » as the greeting, « recevez » / « veuillez agréer » / « je vous prie d’agréer »).',
    'Do not mark persuasion figures (lesson 8 in C1), report architecture (lesson 11 in C1) or hedging dosage in speech (lesson 6 in C1) as such.',
    'Feedback language: natural C1 French, addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['nouvelle', 'refus'],
};

const A12_PARLER: Sec<'practice'> = {
  type: 'practice', id: 'a12-parler', layer: 'core', title: 'Dis les gestes du tact à voix haute', skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO, say: REFRAME, terms: ['tact'],
};

const A12_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet', id: 'a12-cheat', layer: 'core', sheetId: 'sheet-mots',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'demander', v: 'la dose suit l’enjeu', say: src(E(1013)).fr,
      detail: { title: 'Obligation ou faveur', body: 'Ferme et poli pour l’indispensable, vraiment ouvert pour une faveur. EN: firm for the essential, open for a favour.', say: src(E(1016)).fr } },
    { k: 'refuser', v: 'un non tôt, une raison, une suite', say: src(E(1025)).fr,
      detail: { title: 'Le refus écrit', body: 'Il ne nous est pas possible de… ; en revanche… Pas de « pour l’instant ». EN: a clear no and a next step.', say: src(E(1030)).fr } },
    { k: 'annoncer', v: 'en tête, assumé, impact, plan', say: src(E(1038)).fr,
      detail: { title: 'La mauvaise nouvelle', body: 'Nous avons sous-estimé ; concrètement ; afin de limiter la gêne ; un point chaque vendredi. EN: owned, with impact and plan.', say: src(E(1040)).fr } },
    { k: 'vers le haut', v: 'le coût, les options, l’arbitrage', say: src(E(1057)).fr,
      detail: { title: 'Dire non à sa hiérarchie', body: 'Je mesure ; en l’état ; j’ai besoin que vous arbitriez. EN: cost, options, a decision.', say: src(E(1056)).fr } },
    { k: 'faire remonter', v: 'deux relances, puis ouvertement', say: src(E(1069)).fr,
      detail: { title: 'L’escalade', body: 'Prévenir, mettre en copie, des faits datés, une demande précise, pas de coupable. EN: escalate openly.', say: src(E(1078)).fr } },
    { k: 'les mots', v: 'qui condamne, qui accepte, qui lit', say: src(E(1101)).fr,
      detail: { title: 'Mots contestés et salutations', body: 'Impacter, booker, je reviens vers vous : le mot sûr à l’écrit soigné. Recevez < Veuillez recevoir < Je vous prie de recevoir. EN: the safe word; three degrees of deference.', say: src(E(1092)).fr } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['tact', 'conteste'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck', id: 'a12-progress', layer: 'core', title: 'Où tu en es',
  body: 'Tu ne choisis plus entre un message sec et un message flou. Tu demandes avec la marge qui convient, tu refuses une fois et clairement, avec une raison et une suite, tu annonces une mauvaise nouvelle en tête et tu l’assumes. Tu dis non à ta hiérarchie en la faisant arbitrer, tu relances puis tu fais remonter un dossier ouvertement. Tu reconnais les piques polies, tu pèses les mots contestés avec leurs sources, tu écris pour un lecteur en France ou au Québec sans cliché, tu titres tes diapositives par leur message et tu réponds au fond à une question hostile. Le piège qui reste : adoucir le message lui-même. Avant d’envoyer ton prochain message difficile, vérifie que le lecteur peut dire en une phrase ce que tu lui annonces. EN: Before sending your next hard message, check the reader could say in one sentence what you are telling him.',
  stats: [
    { k: 'Écrire', v: 'demander, refuser, annoncer' },
    { k: 'Vers le haut', v: 'arbitrer, relancer, faire remonter' },
    { k: 'Les mots', v: 'piques, mots contestés, formules' },
    { k: 'La salle', v: 'titres-messages, questions dures' },
  ],
  audio: AUDIO, say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 1 to 11, each
 *  targeting a distinct errorTrigger. Typed answers accept the natural
 *  variants (fold() compares the WHOLE answer, so every accepted form is
 *  listed). No errorSpot treats a contested office word as a grammar
 *  error: each is keyed « dans un message soigné à un client », with the
 *  sources of corpus §A.7. The authored slots are then spread by
 *  `spreadSlots()`: no `why` names a position. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Un mot ou une forme ne va pas. Écris la phrase correcte. EN: One word or form is wrong; write the sentence correctly.';
const ES_SOIGNE = 'Dans un message soigné à un client, un mot contesté se remplace. Écris la phrase soignée. EN: In a careful message to a client, replace the contested word and write the sentence.';
const ES_TACT = 'Un mot fait de cette phrase un reproche ou une gifle. Supprime-le ou remplace-le et écris la phrase. EN: One word turns this sentence into a reproach or a slap; remove or replace it.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = [], q: string = ES_Q): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz', id: 'a12-quiz', layer: 'core', title: 'L’examen', passMark: 70, roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-tact', label: 'Le message intact', targets: ['message-abime'],
      questions: [
        mc('Que reproche Isabelle au premier brouillon ?', ['Il est juste, mais blessant.', 'Il est faux.', 'Il est trop poli.'], 0, 'Les faits sont exacts ; la manière gifle. EN: accurate but hurtful.', 'a1-scene'),
        mc('Et au second ?', ['Le refus et le retard y disparaissent.', 'Il est trop sec.', 'Il est trop court.'], 0, 'Trop d’emballage : le message se perd. EN: the message is lost.', 'a1-lecture'),
        mc('Quelle phrase ouvre le mieux la réponse au client ?', [src(E(1001)).fr, src(E(1000)).fr, src(E(1003)).fr], 0, 'Un non clair, et l’annonce d’une explication. EN: a clear no, then the reason.', 'a1-scene'),
        tI('Complète. Un mot.', 'Le tact n’adoucit pas le message : il le livre … .', 'intact', 'Le contenu ne change pas, seul l’emballage se choisit. EN: intact.', 'a1-scene'),
        tI('Complète. Un mot.', 'Un courriel ne transmet ni le ton ni le … .', 'sourire', 'À l’écrit, le lecteur n’a que les mots. EN: smile.', 'a1-usages'),
        tI('Complète. Un mot.', 'Un refus clair n’a pas besoin d’être … .', 'sec', 'Clair et courtois à la fois. EN: curt.', 'a1-check'),
        eS('Je réponds toujours à chaud à un courriel qui m’agace.', 'Je ne réponds jamais à chaud à un courriel qui m’agace.', 'À chaud, on écrit ce qu’on regrette. EN: never in the heat of the moment.', 'a1-usages', ['Je ne réponds jamais à chaud à un courriel qui m’agace']),
        lC('Écoute. Cette phrase garde-t-elle le message entier ?', src(E(1003)).fr, ['Non : le refus disparaît sous les précautions.', 'Oui : le refus est clair.'], 0, 'Quatre précautions, aucun non. EN: the no disappears.', 'a1-lecture'),
      ],
    },
    {
      id: 'r2-indirect', label: 'La bonne dose', targets: ['dose-faussee'],
      questions: [
        mc('Pour une échéance indispensable, quelle forme choisis-tu ?', ['Je compte sur vous pour m’envoyer les résultats vendredi.', 'Serait-il éventuellement envisageable de les recevoir un jour ?', 'Envoyez ça.'], 0, 'Ferme et polie, appuyée sur la confiance. EN: firm and polite.', 'a2-echelle'),
        mc('Que comprend le lecteur devant « Serait-il envisageable de… » ?', ['qu’il peut refuser', 'qu’il n’a aucun choix', 'que c’est urgent'], 0, 'On lui demande si c’est seulement possible. EN: he may refuse.', 'a2-lecture'),
        mc('« Merci de bien vouloir… » est surtout...', ['une consigne polie', 'une question ouverte', 'un ordre sec'], 0, 'Le merci d’avance présente la chose comme acquise. EN: a polite instruction.', 'a2-echelle'),
        tI('Mets le verbe au bon mode. Un mot.', 'Il serait souhaitable que les résultats nous (parvenir) avant vendredi.', 'parviennent', 'Subjonctif après « il serait souhaitable que ». EN: subjunctive.', 'a2-piege'),
        tI('Complète. Un mot.', 'Je compte … vous pour m’envoyer les résultats.', 'sur', 'Compter sur quelqu’un. EN: count on.', 'a2-trier'),
        tI('Complète. Un mot.', 'Plus la phrase est indirecte, plus le lecteur se croit … de refuser.', 'libre', 'L’indirect ouvre le choix. EN: free.', 'a2-lecture'),
        eS('Il serait souhaitable que les résultats nous parviendront avant vendredi.', 'Il serait souhaitable que les résultats nous parviennent avant vendredi.', 'Le souhait appelle le subjonctif. EN: subjunctive.', 'a2-piege'),
        lC('Écoute. Cette demande convient-elle pour une chose indispensable ?', src(E(1022)).fr, ['Non : trop de précautions, elle sonne facultative.', 'Oui : elle est parfaite.'], 0, 'Le lecteur la prendra pour une faveur. EN: it sounds optional.', 'a2-piege'),
      ],
    },
    {
      id: 'r3-refus', label: 'Le non écrit', targets: ['refus-flou'],
      questions: [
        mc('Dans un refus écrit à un client, le non arrive...', ['tôt, une seule fois', 'à la fin, après les excuses', 'nulle part, il se devine'], 0, 'Le client sait vite à quoi s’en tenir. EN: early and once.', 'a3-gestes'),
        mc('Combien de raisons donnes-tu ?', ['une seule, vraie', 'trois ou quatre', 'aucune'], 0, 'Chaque excuse se discute. EN: one true reason.', 'a3-erreurs'),
        mc('« Pour l’instant, ce n’est pas possible » pose problème parce que...', ['cela promet un oui plus tard', 'c’est trop direct', 'c’est incorrect'], 0, 'Un faux espoir appelle une relance. EN: false hope.', 'a3-erreurs'),
        tI('Complète. Un mot.', 'Il ne nous est pas … d’ajouter cette fonction dans le cadre du contrat actuel.', 'possible', 'Le non impersonnel. EN: possible.', 'a3-gestes'),
        tI('Complète. Un mot.', 'Nous ne sommes pas en … de répondre favorablement à votre demande.', 'mesure', 'Être en mesure de : pouvoir. EN: in a position.', 'a3-lecture'),
        tI('Complète. Deux mots.', '… , deux solutions s’offrent à vous.', 'En revanche', 'En revanche ouvre ce que tu peux faire. EN: on the other hand.', 'a3-gestes', ['Par contre']),
        eS('À notre grand regret, nous ne pourrons pas donner suite de cette demande.', 'À notre grand regret, nous ne pourrons pas donner suite à cette demande.', 'Donner suite À quelque chose. EN: donner suite à.', 'a3-lecture'),
        lC('Écoute. Est-ce un refus clair ?', src(E(1035)).fr, ['Non : il laisse un faux espoir.', 'Oui : il est net.'], 0, '« Pour l’instant » promet un plus tard. EN: false hope.', 'a3-erreurs'),
      ],
    },
    {
      id: 'r4-nouvelle', label: 'La nouvelle en tête', targets: ['nouvelle-cachee'],
      questions: [
        mc('Où se place la mauvaise nouvelle dans le message ?', ['dans les premières lignes', 'en fin de message', 'en pièce jointe'], 0, 'Le lecteur la trouve tout de suite. EN: at the top.', 'a4-exemples'),
        mc('« Des retards ont été constatés » est...', ['un passif qui esquive la responsabilité', 'une façon d’assumer', 'une excuse complète'], 0, 'Personne n’en répond. EN: a dodge.', 'a4-piege'),
        mc('Après la nouvelle et ce qu’elle change, tu donnes...', ['ce que tu fais et quand tu reviens', 'trois excuses de plus', 'le nom d’un coupable'], 0, 'Un plan, une date. EN: plan and date.', 'a4-exemples'),
        tI('Complète. Un mot.', 'Nous avons …-estimé le temps nécessaire aux tests.', 'sous', 'Sous-estimer : croire moindre que la réalité. EN: under.', 'a4-lecture'),
        tI('Complète. Un mot.', 'La mise en service est … du 15 au 29 novembre.', 'reportée', 'Reporter : déplacer à plus tard. EN: postponed.', 'a4-piege', ['repoussée', 'décalée']),
        tI('Complète. Un mot.', '… , votre billetterie actuelle restera en service deux semaines de plus.', 'Concrètement', 'Le mot qui annonce l’impact pour le lecteur. EN: in practical terms.', 'a4-exemples'),
        eS('Contrairement de ce que nous vous avions annoncé, le module ne sera pas prêt à temps.', 'Contrairement à ce que nous vous avions annoncé, le module ne sera pas prêt à temps.', 'Contrairement À. EN: contrairement à.', 'a4-piege'),
        lC('Écoute. Que demande Marc-André Dion avant vendredi ?', src(E(1052)).fr, ['une date ferme, par écrit', 'une remise', 'un nouveau contrat'], 0, 'Un engagement écrit. EN: a firm written date.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-arbitrage', label: 'Dire non vers le haut', targets: ['non-sec-hierarchie'],
      questions: [
        mc('Ta directrice te confie un projet en plus ; ton équipe est pleine. Tu réponds...', ['par le coût, des options et une demande d’arbitrage', 'par un oui pour lui faire plaisir', 'par un non sans explication'], 0, 'Tu lui donnes de quoi choisir. EN: cost, options, decision.', 'a5-focus'),
        mc('Pourquoi le oui intenable est-il le pire ?', ['Il coûte deux dates au lieu d’une.', 'Il est impoli.', 'Il est trop long.'], 0, 'Tu manques les deux échéances. EN: it costs two dates.', 'a5-erreurs'),
        mc('« Je mesure l’importance de ce salon » sert à...', ['reconnaître l’enjeu', 'refuser', 'se plaindre'], 0, 'Ta directrice voit que tu as compris. EN: acknowledge.', 'a5-lecture'),
        tI('Mets le verbe au bon mode. Un mot.', 'J’ai besoin que vous (arbitrer) entre ces deux priorités.', 'arbitriez', 'Avoir besoin que + subjonctif. EN: subjunctive.', 'a5-trier'),
        tI('Complète. Un mot.', 'En l’état, mon équipe ne peut pas … ce projet en plus du reste.', 'absorber', 'Absorber : prendre en charge en plus. EN: absorb.', 'a5-lecture'),
        tI('Complète. Un mot.', 'Je préfère vous … maintenant plutôt que de manquer les deux dates.', 'alerter', 'Alerter tôt laisse le temps de choisir. EN: alert.', 'a5-focus', ['prévenir', 'avertir']),
        eS('J’ai besoin que vous arbitrez entre ces deux priorités.', 'J’ai besoin que vous arbitriez entre ces deux priorités.', 'Subjonctif : arbitriez. EN: subjunctive.', 'a5-trier'),
        lC('Écoute. Cette réponse aide-t-elle ta directrice à décider ?', src(E(1056)).fr, ['Oui : elle chiffre le coût.', 'Non : c’est une plainte.'], 0, 'Un coût précis permet de choisir. EN: it costs the choice.', 'a5-trier'),
      ],
    },
    {
      id: 'r6-escalade', label: 'Relancer, faire remonter', targets: ['escalade-brutale'],
      questions: [
        mc('Avant de faire remonter un dossier, tu...', ['relances deux fois', 'attends une journée', 'écris à toute l’entreprise'], 0, 'Poliment, puis fermement. EN: two follow-ups.', 'a6-etapes'),
        mc('Dans le message d’escalade, ton interlocuteur...', ['est prévenu et mis en copie', 'n’en sait rien', 'est accusé'], 0, 'Ouvertement. EN: openly.', 'a6-piege'),
        mc('« Votre équipe ne fait strictement rien » est...', ['une accusation', 'un fait daté', 'une demande précise'], 0, 'Remplace-la par des faits comptés. EN: an accusation.', 'a6-piege'),
        tI('Complète. Un mot.', 'Je me permets de vous … au sujet de ma demande du 3 octobre.', 'relancer', 'Relancer : rappeler une demande restée sans réponse. EN: follow up.', 'a6-etapes'),
        tI('Complète. Un mot.', '… de réponse d’ici jeudi, je devrai faire remonter le dossier.', 'Faute', 'Faute de : en l’absence de. EN: failing.', 'a6-lecture', ['Sans']),
        tI('Complète. Un mot.', 'Je souhaite porter à votre … un blocage qui dure depuis trois semaines.', 'attention', 'Porter à l’attention de quelqu’un. EN: attention.', 'a6-etapes'),
        eS('Je mets Stéphane Morin en copie, par souci de transparence, mais sans le prévenir.', 'Je mets Stéphane Morin en copie, par souci de transparence.', 'La transparence suppose qu’il soit prévenu. EN: no hidden escalation.', 'a6-piege', ['Je mets Stéphane Morin en copie par souci de transparence.'], ES_TACT),
        lC('Écoute. Que fait Karim ici ?', src(E(1069)).fr, ['Il fait remonter le problème à un supérieur.', 'Il relance pour la première fois.', 'Il remercie le prestataire.'], 0, 'Porter à l’attention : l’escalade. EN: escalation.', 'a6-lecture'),
      ],
    },
    {
      id: 'r7-pique', label: 'La politesse qui pique', targets: ['politesse-piquante'],
      questions: [
        mc('« Comme indiqué dans mon précédent courriel » se lit comme...', ['« vous ne m’avez pas lu »', 'un simple rappel neutre', 'un compliment'], 0, 'Un reproche poli. EN: a reproach.', 'a7-traduire'),
        mc('Entre collègues qui se tutoient, un vous soudain...', ['marque une froideur', 'marque le respect', 'ne change rien'], 0, 'Il prend ses distances. EN: coldness.', 'a7-lecture'),
        mc('Au troisième échange tendu, tu...', ['décroches le téléphone', 'mets la direction en copie', 'écris plus long'], 0, 'Changer de canal. EN: call.', 'a7-trier'),
        tI('Complète. Un mot.', 'Je vous renvoie le fichier, au cas où le premier envoi se serait … .', 'perdu', 'La version neutre : personne n’a tort. EN: lost.', 'a7-traduire'),
        tI('Complète. Un mot.', 'Une formule polie peut devenir une … .', 'arme', 'Quand elle sert à reprocher. EN: weapon.', 'a7-erreurs'),
        tI('Complète. Un mot.', 'Que puis-je faire pour vous faciliter la … ?', 'tâche', 'Offrir de l’aide au lieu de rappeler la date. EN: task.', 'a7-traduire'),
        eS('Je vous remercie de bien vouloir enfin me répondre.', 'Je vous remercie de bien vouloir me répondre.', '« Enfin » transforme la demande en reproche. EN: « enfin » stings.', 'a7-trier', [], ES_TACT),
        lC('Écoute. Neutre ou piquant ?', src(E(1081)).fr, ['piquant', 'neutre'], 0, 'Un merci d’avance pour une réactivité absente sonne ironique. EN: barbed.', 'a7-erreurs'),
      ],
    },
    {
      id: 'r8-mots', label: 'Les mots qui divisent', targets: ['mot-conteste'],
      questions: [
        mc('Selon l’Académie française, « je reviens vers vous » est...', ['incorrect, un anglicisme', 'recommandé', 'réservé au droit'], 0, '« Traduction hasardeuse de I’ll get back to you. » EN: rejected by the Académie.', 'a8-mots'),
        mc('Sur « initier » au sens de commencer, le Larousse...', ['l’admet, alors que l’Académie et l’Office le déconseillent', 'le condamne comme l’Académie', 'ne l’enregistre pas'], 0, 'Les sources divergent : choisis le mot précis. EN: Larousse admits it.', 'a8-lecture'),
        mc('Sur « acter », l’Office québécois de la langue française...', ['l’accepte au sens de « prendre acte de »', 'le condamne dans tous les sens', 'n’en dit rien'], 0, 'L’Académie, elle, veut le limiter au droit. EN: accepted by the OQLF in that sense.', 'a8-mots'),
        tI('Complète. Un mot.', 'Ce report a une … sur votre calendrier.', 'incidence', 'Avoir une incidence sur, au lieu d’« impacter ». EN: effect.', 'a8-piege'),
        tI('Complète. Un mot.', 'J’ai … la grande salle pour jeudi.', 'réservé', 'Réserver, au lieu de « booker ». EN: booked.', 'a8-piege', ['retenu']),
        tI('Complète. Un mot.', 'Nous avons pris … de votre décision.', 'acte', 'Prendre acte de : accepté par tous. EN: note.', 'a8-trier'),
        eS('Ce report va impacter votre prévente.', 'Ce report va toucher votre prévente.', 'Selon l’Académie et l’Office, « toucher » ou « avoir une incidence sur ». EN: avoid impacter in careful writing.', 'a8-piege', ['Ce report va avoir une incidence sur votre prévente.', 'Ce report va se répercuter sur votre prévente.', 'Ce report va affecter votre prévente.', 'Ce report touchera votre prévente.'], ES_SOIGNE),
        lC('Écoute. Cette phrase est-elle soignée pour un client ?', src(E(1097)).fr, ['Oui : « réunion téléphonique » ne fâche personne.', 'Non : elle contient un mot contesté.'], 0, 'Le mot sûr. EN: safe wording.', 'a8-mots'),
      ],
    },
    {
      id: 'r9-pays', label: 'Deux lecteurs', targets: ['cliche-pays'],
      questions: [
        mc('Selon l’Office, dire tu dès la première rencontre est...', ['beaucoup plus fréquent au Québec qu’ailleurs', 'interdit au Québec', 'plus fréquent en France'], 0, 'Un constat d’usage publié par l’Office. EN: more frequent in Québec.', 'a9-formules'),
        mc('« Les Québécois sont directs, les Français détournés »...', ['ne repose sur aucune source sérieuse', 'est prouvé par l’Office', 'est une règle de rédaction'], 0, 'Lis la personne, pas le passeport. EN: a stereotype.', 'a9-erreurs'),
        mc('La plus déférente des trois amorces, selon l’Office, est...', ['Je vous prie de recevoir', 'Recevez', 'Veuillez recevoir'], 0, 'En ordre croissant de déférence. EN: most deferential.', 'a9-formules'),
        tI('Complète. Un mot.', 'Dans le doute, je … jusqu’à ce que la question soit abordée.', 'vouvoie', 'Le conseil de l’Office. EN: use vous.', 'a9-formules'),
        tI('Complète. Un mot.', 'La distance se lit dans les formules, pas dans le … .', 'passeport', 'La personne compte plus que le pays. EN: passport.', 'a9-version'),
        tI('Complète. Un mot.', 'Pour un premier échange officiel, je garde la formule … .', 'longue', 'L’Office la juge tout à fait acceptable. EN: long.', 'a9-trier'),
        eS('Je vous prie d’agréer, Madame, mes salutations distinguée.', 'Je vous prie d’agréer, Madame, mes salutations distinguées.', 'Salutations est féminin pluriel : distinguées. EN: agreement.', 'a9-formules'),
        lC('Écoute. De quelle formule s’agit-il ?', src(E(1109)).fr, ['la moins déférente des trois amorces', 'la plus déférente'], 0, '« Recevez » ouvre l’échelle. EN: the least deferential.', 'a9-trier'),
      ],
    },
    {
      id: 'r10-diapos', label: 'Des titres qui disent', targets: ['diapo-etiquette'],
      questions: [
        mc('Quel titre de diapositive est un titre-message ?', ['Le report de deux semaines ne touche pas votre saison', 'Calendrier', 'Point 2'], 0, 'Il donne la conclusion. EN: states the point.', 'a10-titres'),
        mc('Combien d’idées par diapositive ?', ['une', 'huit', 'autant que possible'], 0, 'Une idée, prouvée. EN: one.', 'a10-piege'),
        mc('Pourquoi garder le bas des diapositives vide, selon l’Office ?', ['Tout le monde ne le voit pas dans une salle.', 'C’est plus joli.', 'Pour y mettre le texte lu.'], 0, 'Une section toujours vide, en bas. EN: not everyone sees it.', 'a10-lecture'),
        tI('Complète. Un mot.', 'Le titre d’une diapositive dit ce qu’il faut en … .', 'retenir', 'La conclusion, en titre. EN: remember.', 'a10-titres'),
        tI('Complète. Un mot.', 'Je ne lis pas mes diapositives : je les … .', 'commente', 'Le public lit plus vite que toi. EN: comment.', 'a10-piege'),
        tI('Complète. Un mot.', 'J’en … au point qui vous concerne directement : la prévente.', 'viens', 'En venir à : aborder. EN: come to.', 'a10-titres'),
        eS('Avant de passer à vos questions, je résume en un phrase.', 'Avant de passer à vos questions, je résume en une phrase.', 'Phrase est féminin : une phrase. EN: une.', 'a10-titres'),
        lC('Écoute. Cette phrase sert à...', src(E(1126)).fr, ['donner l’essentiel à retenir', 'ouvrir les questions', 'remercier le public'], 0, 'Une balise de conclusion. EN: the key takeaway.', 'a10-hacks'),
      ],
    },
    {
      id: 'r11-questions', label: 'La question qui fâche', targets: ['reponse-au-ton'],
      questions: [
        mc('Devant une question hostile, tu réponds...', ['au fond, jamais au ton', 'sur le même ton', 'par « excellente question »'], 0, 'Reconnaître, expliquer, tenir. EN: substance.', 'a11-cartes'),
        mc('Une question hors sujet, tu...', ['la reportes, devant tous, avec une suite', 'l’ignores', 'y réponds longuement'], 0, 'On voit que tu ne l’esquives pas. EN: defer visibly.', 'a11-lecture'),
        mc('Tu n’as pas le chiffre demandé. Tu...', ['le promets par écrit, avec une heure', 'en donnes un approximatif', 'changes de sujet'], 0, 'Jamais de chiffre inventé. EN: promise it.', 'a11-erreurs'),
        tI('Complète. Un mot.', 'Votre question en contient deux ; je commence par la … .', 'seconde', 'Découper la question piège. EN: second.', 'a11-cartes', ['deuxième']),
        tI('Complète. Un mot.', 'Je ne suis pas en … de vous répondre sur ce point aujourd’hui.', 'mesure', 'Décliner une question confidentielle. EN: in a position.', 'a11-cartes'),
        tI('Complète. Un mot.', 'Ce point … du contrat ; je vous propose qu’on l’examine après la séance.', 'relève', 'Relever de : appartenir à un domaine. EN: falls under.', 'a11-cartes'),
        eS('Je reconnais notre retard, mais je ne laisserai pas dire que l’équipe n’a rien faite.', 'Je reconnais notre retard, mais je ne laisserai pas dire que l’équipe n’a rien fait.', 'Avec avoir et « rien », pas d’accord : fait. EN: no agreement.', 'a11-cartes'),
        lC('Écoute. Comment Olivier répond-il à l’attaque ?', src(E(1141)).fr, ['Il accueille la question et promet une réponse directe.', 'Il contre-attaque.'], 0, 'Au fond, pas au ton. EN: on substance.', 'a11-ecoute'),
      ],
    },
  ],
  audio: AUDIO, say: REFRAME,
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
spreadSlots(A12_QUIZ);

const A12_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck', id: 'a12-review', layer: 'core', title: 'Une dernière fois',
  cards: [
    { front: 'une demande ferme, appuyée sur la confiance', back: 'je compte sur vous pour', say: src(E(1013)).fr },
    { front: 'un refus impersonnel et net', back: 'il ne nous est pas possible de', say: src(E(1025)).fr },
    { front: 'déplacer une date à plus tard', back: 'reporter', say: src(E(1038)).fr },
    { front: 'demander à un supérieur de trancher', back: 'arbitrer', say: src(E(1057)).fr },
    { front: 'rappeler une demande restée sans réponse', back: 'relancer', say: src(E(1066)).fr },
    { front: 'transmettre un problème au niveau supérieur', back: 'faire remonter un dossier', say: src(E(1067)).fr },
    { front: 'au lieu d’« impacter », à l’écrit soigné', back: 'avoir une incidence sur', say: src(E(1092)).fr },
    { front: 'un titre de diapositive qui donne la conclusion', back: 'un titre-message', say: src(E(1118)).fr },
    { front: 'refuser poliment de répondre en séance', back: 'je ne suis pas en mesure de vous répondre', say: src(E(1131)).fr },
  ],
  audio: AUDIO, say: REFRAME,
};

const A12_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup', id: 'a12-roundup', layer: 'core', title: 'Le tact au travail, en résumé',
  body: `${REFRAME} Tu demandes avec la bonne marge, tu refuses une fois et clairement, tu annonces une mauvaise nouvelle en tête, tu dis non à ta hiérarchie en la faisant arbitrer et tu fais remonter un dossier ouvertement. Tu reconnais les piques polies, tu pèses les mots contestés avec leurs sources, tu écris pour la France comme pour le Québec sans cliché, et tu tiens une salle avec des titres qui disent quelque chose. La suite du parcours C1 passe du bureau à la presse : ${REFORMULER_REF} et ${RAPPORTS_REF} restent tes appuis pour reformuler et rendre compte. EN: Next, the C1 trail moves from the office to the press.`,
  points: [
    'Demander : ferme pour l’indispensable, ouvert pour une faveur.',
    'Refuser, annoncer : le message en tête, une raison, une suite.',
    'Vers le haut : le coût, les options, l’arbitrage ; relancer, puis faire remonter.',
    'Les mots et la salle : le mot sûr, la personne plutôt que le pays, le fond plutôt que le ton.',
  ],
  audio: AUDIO, say: REFRAME, terms: ['tact', 'nouvelle'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Ton message',
    opener: {
      line: 'Une cliente, deux mauvaises nouvelles, un seul courriel : à toi d’écrire le message qu’elle lira jusqu’au bout sans se fâcher. EN: One client, two pieces of bad news, one email: your turn to write the message she will read to the end without getting angry.',
      imageRef: 'lessons/tact-travail/act12.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit un message de refus et de mauvaise nouvelle à une cliente et passé l’examen : quatre-vingt-huit questions, onze rounds. EN: You wrote a refusal and bad-news message to a client and sat the exam: eighty-eight questions, eleven rounds.',
    estScreens: 150,
    restPoints: ['a12-modele', 'a12-scenario', 'a12-mission', 'a12-cheat', 'a12-quiz/r3-refus', 'a12-quiz/r6-escalade', 'a12-quiz/r9-pays'],
  },
  sections: [
    A12_MODELE, A12_PLAN, A12_USAGES, A12_SCENARIO, A12_MISSION, A12_PARLER,
    A12_CHEAT, A12_PROGRESS, A12_QUIZ, A12_REVIEW, A12_ROUNDUP,
  ],
  imports: IMPORTED.act12,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger. Not in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-tact', title: 'Le message entier', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : le contenu reste, la manière se choisit. EN: say each line aloud.', items: [E(1001), E(1004), E(1005), E(1007), E(1009), E(1011)], audio: AUDIO },
  { id: 'd-indirect', title: 'Obligation ou faveur', format: 'sort' as const, coach: 'Deux piles : ce qui est indispensable, ce qui est une faveur. EN: sort by stakes.', buckets: ['une obligation, ferme et polie', 'une faveur, laissée au choix'], items: [E(1013), E(1023), E(1017), E(1015), E(1016), E(1021)], audio: AUDIO },
  { id: 'd-refus', title: 'Le non écrit', format: 'mcq' as const, coach: 'Un non clair, une fois. EN: a clear no.', q: '« Il ne nous est pas … d’ajouter cette fonction. »', opts: ['possible', 'impossible'], correct: 0, why: 'Il ne nous est pas possible de : le non impersonnel. EN: possible.', items: [E(1025), E(1026), E(1027), E(1029), E(1030), E(1036)], audio: AUDIO },
  { id: 'd-nouvelle', title: 'La nouvelle assumée', format: 'mcq' as const, coach: 'Un sujet, « nous », et un verbe qui dit l’erreur. EN: own it.', q: '« Nous avons … le temps nécessaire aux tests. »', opts: ['sous-estimé', 'constaté'], correct: 0, why: 'Assumer, sans passif. EN: underestimated.', items: [E(1037), E(1038), E(1039), E(1040), E(1042), E(1044)], audio: AUDIO },
  { id: 'd-arbitrage', title: 'Faire arbitrer', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute : le coût, les options, la décision. EN: cost, options, decision.', items: [E(1054), E(1055), E(1056), E(1057), E(1058), E(1065)], audio: AUDIO },
  { id: 'd-escalade', title: 'Ouvertement', format: 'mcq' as const, coach: 'On prévient avant de passer au-dessus. EN: warn first.', q: '« Je … mon interlocuteur avant de passer au-dessus de lui. »', opts: ['préviens', 'contourne'], correct: 0, why: 'La transparence. EN: warn.', items: [E(1066), E(1067), E(1069), E(1070), E(1071), E(1078)], audio: AUDIO },
  { id: 'd-pique', title: 'La version neutre', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : des faits, une question, une offre. EN: the neutral rewrites.', items: [E(1080), E(1082), E(1087), E(1089), E(1090), E(1085)], audio: AUDIO },
  { id: 'd-mots', title: 'Le mot sûr', format: 'mcq' as const, coach: 'À l’écrit soigné, le mot que personne ne conteste. EN: the safe word.', q: '« Ce report a une … sur votre calendrier. »', opts: ['incidence', 'impaction'], correct: 0, why: 'Avoir une incidence sur. EN: effect.', items: [E(1091), E(1092), E(1094), E(1096), E(1097), E(1098)], audio: AUDIO },
  { id: 'd-pays', title: 'La personne, pas le pays', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute : des usages sourcés, aucun cliché. EN: sourced usage.', items: [E(1105), E(1106), E(1107), E(1109), E(1113), E(1115)], audio: AUDIO },
  { id: 'd-diapos', title: 'Des titres qui disent', format: 'flashcard' as const, coach: 'Dis chaque phrase à voix haute : une idée, un titre, une voix. EN: one idea, one title.', items: [E(1116), E(1117), E(1118), E(1121), E(1122), E(1123)], audio: AUDIO },
  { id: 'd-questions', title: 'Au fond, pas au ton', format: 'mcq' as const, coach: 'Reconnaître, expliquer, tenir. EN: substance.', q: 'Devant une question hostile, tu réponds...', opts: ['au fond', 'au ton'], correct: 0, why: 'Jamais au ton. EN: substance.', items: [E(1129), E(1130), E(1131), E(1132), E(1133), E(1134)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'message-abime', description: 'Either softens a hard message until the no or the bad news disappears, or delivers it so bluntly that the relationship breaks.', detectOn: ['a1-scene', 'a1-check', 'a2-piege', 'a12-mission'], drill: 'd-tact', retest: 'd-tact' },
  { id: 'dose-faussee', description: 'Asks for something essential with optional-sounding hedges, or orders someone who owes nothing; uses the indicative after il serait souhaitable que.', detectOn: ['a2-trier', 'a2-piege', 'a2-check', 'a12-mission'], drill: 'd-indirect', retest: 'd-indirect' },
  { id: 'refus-flou', description: 'Refuses late or several times, piles up excuses, leaves false hope (pour l’instant) or gives no next step.', detectOn: ['a3-erreurs', 'a3-trier', 'a3-check', 'a12-mission'], drill: 'd-refus', retest: 'd-refus' },
  { id: 'nouvelle-cachee', description: 'Buries bad news late in the message, hides responsibility in an agentless passive, blames the client, or omits the impact and the plan.', detectOn: ['a4-ecoute', 'a4-piege', 'a4-check', 'a12-mission'], drill: 'd-nouvelle', retest: 'd-nouvelle' },
  { id: 'non-sec-hierarchie', description: 'Answers a superior with a flat no or an untenable yes instead of costing the request, offering options and asking for a decision.', detectOn: ['a5-trier', 'a5-erreurs', 'a5-check'], drill: 'd-arbitrage', retest: 'd-arbitrage' },
  { id: 'escalade-brutale', description: 'Escalates too early, behind the contact’s back, with accusations or with no precise request.', detectOn: ['a6-piege', 'a6-version', 'a6-check'], drill: 'd-escalade', retest: 'd-escalade' },
  { id: 'politesse-piquante', description: 'Uses polite formulas as barbs (comme indiqué, merci d’avance pour votre réactivité, pour rappel, a sudden vous, a copy to management).', detectOn: ['a7-erreurs', 'a7-trier', 'a7-check', 'a12-mission'], drill: 'd-pique', retest: 'd-pique' },
  { id: 'mot-conteste', description: 'Writes contested office words (impacter, initier, booker, un call, je reviens vers vous) in a careful message, or treats them as plain errors.', detectOn: ['a8-piege', 'a8-trier', 'a8-check', 'a12-mission'], drill: 'd-mots', retest: 'd-mots' },
  { id: 'cliche-pays', description: 'Applies a national stereotype about directness, misreads tu or vous across France and Québec, or picks a closing formula that does not fit the reader.', detectOn: ['a9-erreurs', 'a9-trier', 'a9-check', 'a12-mission'], drill: 'd-pays', retest: 'd-pays' },
  { id: 'diapo-etiquette', description: 'Titles slides with labels, crowds several ideas on one slide, reads the slides aloud or ends without a summary.', detectOn: ['a10-piege', 'a10-version', 'a10-check'], drill: 'd-diapos', retest: 'd-diapos' },
  { id: 'reponse-au-ton', description: 'Answers a hostile question in kind, blames others in public, invents a figure, or dodges an off-topic or confidential question.', detectOn: ['a11-ecoute', 'a11-erreurs', 'a11-check'], drill: 'd-questions', retest: 'd-questions' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here only; every sheet is reached by
 *  `sheetId` from at least one mission.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-indirect', 'Les degrés de l’indirect', ['l’échelle d’une demande', 'obligation ou faveur', 'les modes'], [
    teach('sheet-indirect-teach', 'La dose suit l’enjeu',
      `Une demande écrite dit ce que tu veux et la marge que tu laisses. Plus elle est indirecte, plus le lecteur se croit libre de refuser. La question polie au conditionnel vient de ${COURRIELS_REF} ; « je vous saurais gré de », à l’oral, de ${NUANCER_REF}. EN: the more indirect, the freer the reader feels to refuse.`),
    table('sheet-indirect-table', 'Une même demande, six degrés', ['Forme', 'Ce que le lecteur entend', 'Pour'], [
      ['Envoyez-moi les résultats vendredi.', 'un ordre', 'des proches, dans l’urgence'],
      ['Je compte sur vous pour…', 'une demande ferme, de confiance', 'une obligation'],
      ['Merci de bien vouloir…', 'une consigne polie', 'les courriels de service'],
      ['Pourriez-vous… ?', 'une question polie', 'presque tout'],
      ['Je vous serais reconnaissant·e de…', 'un service demandé', 'une faveur'],
      ['Serait-il envisageable de… ?', 'une question ouverte', 'une vraie faveur, où le non est permis'],
      ['Il serait souhaitable que + subjonctif', 'un souhait ferme et impersonnel', 'une note de service'],
    ]),
  ]),
  sheet('sheet-messages', 'Les messages difficiles', ['refuser', 'annoncer une mauvaise nouvelle', 'dire non vers le haut', 'relancer et faire remonter', 'les piques polies'], [
    teach('sheet-messages-teach', 'Le message entier, la manière choisie',
      'Dans chaque message difficile, le contenu ne bouge pas : le non, le retard, la limite. Ce qui se travaille, c’est la place (en tête), la voix (assumée), la raison (une seule), la suite (datée) et le ton (sans pique). EN: content fixed; place, voice, reason, next step and tone are chosen.'),
    table('sheet-messages-table', 'Cinq messages, leurs gestes', ['Message', 'Les gestes', 'Tournures', 'Piège'], [
      ['Refuser', 'accueillir, refuser tôt, une raison, proposer', 'il ne nous est pas possible de ; en revanche', '« pour l’instant », cinq excuses'],
      ['Annoncer', 'la nouvelle en tête, assumer, l’impact, le plan', 'nous avons sous-estimé ; concrètement ; afin de limiter la gêne', '« des retards ont été constatés »'],
      ['Dire non vers le haut', 'reconnaître, chiffrer, options, arbitrage', 'je mesure ; en l’état ; j’ai besoin que vous arbitriez', 'le non sec, le oui intenable'],
      ['Relancer', 'rappeler, puis dater et annoncer la suite', 'je me permets de vous relancer ; faute de réponse d’ici…', 'compter les relances'],
      ['Faire remonter', 'prévenir, copier, faits datés, demande précise', 'porter à votre attention ; en toute transparence', 'l’accusation, l’escalade cachée'],
      ['Désamorcer', 'renvoyer, demander, offrir, appeler', 'je vous renvoie le fichier ; que puis-je faire', 'comme indiqué ; merci d’avance pour votre réactivité'],
    ]),
  ]),
  sheet('sheet-mots', 'Les mots qui divisent', ['qui condamne, qui accepte', 'le mot sûr', 'les formules'], [
    teach('sheet-mots-teach', 'Un mot contesté n’est pas une faute de sens',
      `Ces mots se comprennent et beaucoup les emploient ; certaines autorités les déconseillent. À l’écrit soigné, le mot sûr ne coûte rien. Les calques de réunion (prochain item, adresser, céduler) sont dans ${REUNION_REF}. Sources : Académie française, « Dire, ne pas dire » ; Office québécois de la langue française, Banque de dépannage linguistique et Grand dictionnaire terminologique ; Larousse ; Usito (consultés en 2026). EN: contested, not wrong in meaning; sources listed.`),
    table('sheet-mots-table', 'Qui dit quoi', ['Mot', 'Académie', 'Office québécois', 'Larousse', 'Le mot sûr'], [
      ['je reviens vers vous', 'incorrect (anglicisme)', 'pas d’article', 'pas de sens relevé', 'je reprends contact avec vous'],
      ['impacter', 'à tort', 'déconseillé (sauf médecine)', 'familier', 'toucher, avoir une incidence sur'],
      ['initier (= commencer)', 'à éviter', 'déconseillé', 'admis', 'lancer, entamer, prendre l’initiative de'],
      ['booker', 'pas d’article', 'déconseillé', 'absent', 'réserver, retenir, engager'],
      ['un call', 'pas d’article', 'pas d’article', 'absent', 'un appel, une réunion téléphonique'],
      ['acter', 'réservé au droit', 'accepté : prendre acte de', 'non consulté', 'prendre acte de'],
      ['faire escalader', 'pas d’article', 'accepté en gestion', 'sens absent', 'faire monter un dossier'],
      ['prioriser', 'barbarisme', 'accepté', 'non consulté', 'donner la priorité à'],
    ]),
  ]),
  sheet('sheet-pays', 'France et Québec', ['le tutoiement', 'les formules', 'le courriel'], [
    teach('sheet-pays-teach', 'Des usages sourcés, aucun cliché',
      'Selon l’Office québécois de la langue française, dire tu dès la première rencontre est beaucoup plus fréquent au Québec qu’ailleurs ; dans le doute, vouvoie. Aucune source sérieuse ne dit qu’un pays est plus direct que l’autre : lis la personne. EN: tu is more frequent at once in Québec (OQLF); no source for directness.'),
    table('sheet-pays-table', 'Repères', ['Sujet', 'Ce que disent les ouvrages', 'Source'], [
      ['Tutoiement', 'tu dès la première rencontre beaucoup plus fréquent au Québec', 'Office québécois, BDL (2015)'],
      ['Dans le doute', 'vouvoyer jusqu’à ce que la question soit abordée', 'Office québécois, BDL'],
      ['Amorces', 'Recevez < Veuillez recevoir < Je vous prie de recevoir', 'Office québécois, BDL (2022)'],
      ['Cordialement', 'parmi les formules à caractère plus personnel', 'Office québécois, BDL (2022)'],
      ['Formule d’appel', 'Madame, Monsieur, Bonjour : les plus employées', 'Office québécois, BDL'],
      ['Courriel', 'terme recommandé au Québec et en France', 'Office québécois ; Journal officiel, 2003'],
    ]),
  ]),
  sheet('sheet-salle', 'Présenter et répondre', ['le titre-message', 'les balises', 'les questions difficiles'], [
    teach('sheet-salle-teach', 'Le titre conclut, la voix relie',
      `Une diapositive, une idée, un titre qui la dit ; le bas reste vide (Office québécois). Tu commentes, tu ne lis pas. Les gestes de l’exposé devant un jury (reformuler, prendre un instant, vérifier) viennent de ${EXPOSE_REF}. EN: one idea per slide, a title that states it.`),
    table('sheet-salle-table', 'Quatre questions difficiles', ['Question', 'Le geste', 'Tournure'], [
      ['hostile', 'répondre au fond, reconnaître, tenir', 'c’est une question légitime ; je reconnais notre retard, mais…'],
      ['piège', 'découper', 'votre question en contient deux ; je commence par…'],
      ['hors sujet', 'reporter, devant tous', 'ce point relève de… ; examinons-le après la séance'],
      ['confidentielle', 'décliner simplement', 'je ne suis pas en mesure de vous répondre sur ce point'],
      ['sans chiffre', 'promettre par écrit', 'je vous réponds par écrit d’ici demain midi'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11, ACT12];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** MissionRich renders options in authored order, so every closed MISSION
 *  item (checks, trap drills, listening questions, remediation drills) is
 *  rotated here, options and `correct` together, so each option-count class
 *  spreads evenly and no slot repeats more than twice in a row. No text is
 *  changed and no `why` names a position. The quiz is left to spreadSlots. */
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
  for (const s of sections) if (s.type !== 'quiz') visit(s);
  for (const d of drills) visit(d);
}
balanceSlots(SECTIONS, DRILL_LIST);

export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-c1-23-[a-z0-9-]+/g) ?? [])];

const PIEGE_BRIEF = 'The audio step plays each card’s CORRECT sentence. Read the six plainly and identically in pace, one voice; the wrong versions in promptSound are never spoken.';

const REC_DESC: Record<string, string> = {
  'rec-c1-23-brouillons': 'The learner’s two drafts (act 1), ONE VOICE, one take, Québec French, read as a person rereading their own drafts. Draft one flat and clipped; draft two warm and drawn out: the contrast is the point. The director’s closing question slightly slower.',
  'rec-c1-23-guide': 'The writing-guide page (act 2), ONE VOICE, one take, Québec French, clear and neutral. Each quoted request in a slightly different tone from the commentary, never acted.',
  'rec-c1-23-piege-indirect': PIEGE_BRIEF,
  'rec-c1-23-refus': 'The refusal email (act 3), ONE VOICE, one take, a man in his forties, Québec French, courteous and steady. The sentence « Il ne nous est toutefois pas possible… » at the same pace as the rest: the no is not dramatised.',
  'rec-c1-23-retard': 'The delay email (act 4), ONE VOICE, one take, the same voice as act 3. The two dates read in full (le quinze, le vingt-neuf novembre). Calm, no apologetic tone.',
  'rec-c1-23-dion': 'REQUIRED FOR THE EAR MISSION (act 4): eight lines, ONE TAKE, ONE VOICE, in authored order. A man in his fifties leaving a voicemail, Québec French, polite but tight, conversational speed. « à une condition » and « par écrit, avant vendredi » at natural weight. Light phone-line colouring, no music. The learner hears it once: no pause longer than the punctuation gives.',
  'rec-c1-23-piege-nouvelle': PIEGE_BRIEF,
  'rec-c1-23-karim': 'The team lead’s email (act 5), ONE VOICE, one take, a man in his thirties, France French (Nantes), direct and respectful. Figures read in full. « J’ai besoin que vous arbitriez » clearly articulated.',
  'rec-c1-23-escalade': 'The supplier thread (act 6), ONE VOICE, one take, France French, the writer reading his own messages in order. « Pas de réponse » after each message as a short neutral aside. Dates read in full.',
  'rec-c1-23-piege-escalade': PIEGE_BRIEF,
  'rec-c1-23-pique': 'The souring thread (act 7), TWO VOICES alternating, one take each: Olivier (Québec French, man) and Léa (France French, woman); the director’s note in a third, calm female voice, Québec French. The barbs read politely, never sarcastically: the learner must hear them in the words.',
  'rec-c1-23-mots': 'The director’s note on contested words (act 8), ONE VOICE, one take, a woman in her fifties, Québec French, precise and good-humoured. The contested words read as quotations, at ordinary weight, never mocked.',
  'rec-c1-23-piege-mots': PIEGE_BRIEF,
  'rec-c1-23-pays': 'The onboarding page (act 9), ONE VOICE, one take, neutral Québec French. The three salutation openers read as a list with short beats.',
  'rec-c1-23-diapos': 'The slide plan with comments (act 10), ONE VOICE, one take, the director (as act 8). Each slide label read as a heading, each comment as speech.',
  'rec-c1-23-piege-diapos': PIEGE_BRIEF,
  'rec-c1-23-questions': 'The coaching note (act 11), ONE VOICE, one take, the director (as act 8), warm and firm. The hostile question quoted in a slightly harder tone, then back to neutral.',
  'rec-c1-23-comite': 'REQUIRED FOR THE EAR MISSION (act 11): eight lines, ONE TAKE, THREE VOICES, in authored order, as a steering-committee meeting. Line 1: Marc-André Dion (Québec French, man, chairing). Lines 2 and 6: Monique Tardif (Québec French, woman in her sixties, sharp but not shouting). Lines 3-5, 7, 8: Olivier Lapointe (Québec French, man, calm). Room tone, no overlap. The learner hears it once.',
  'rec-c1-23-modele': 'The model email (act 12), ONE VOICE, one take, the same voice as acts 3 and 4. Dates and times in full. « Quant à la borne » with a short beat: the second point.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'C1 · LEÇON 23',
  intro: 'At B1 you learned to refuse in an email; at B2 you ran meetings and negotiated on conditions; earlier in C1 you set the dose of politeness in speech and faced a jury. Here you take tact into writing and into the meeting room. You set the degree of indirectness of a written request, refuse a client once and clearly, announce bad news at the top and own it, say no to a superior by asking them to decide, follow up and escalate openly. You learn to spot politeness that stings, to weigh contested office words (impacter, booker, je reviens vers vous) against the Académie, the OQLF and the dictionaries, to write for a reader in France or in Québec without stereotypes, to title slides by their message and to answer a hostile question on substance. You finish by writing a refusal and bad-news email to a client.',
  skill: 'PE',
  grammarAssumed: [COURRIELS_UNIT, REUNION_UNIT, NUANCER_UNIT, EXPOSE_UNIT],
  grammarIntroduced: [
    'Degrees of indirectness in a written request: je compte sur vous pour, merci de bien vouloir, je vous serais reconnaissant(e) de, serait-il envisageable de, il serait souhaitable que + subjunctive; the dose set by the stakes (obligation vs favour)',
    'The written refusal and the bad-news message: il ne nous est pas possible de, nous ne sommes pas en mesure de, donner suite à, en revanche; the news at the top, owned (nous avons sous-estimé) rather than an agentless passive; impact (concrètement) and plan',
    'Saying no upward and escalating: je mesure, en l’état, absorber, j’ai besoin que vous arbitriez (subjunctive); relancer, faute de réponse, faire remonter un dossier, porter à l’attention de, mettre en copie',
    'Passive-aggressive politeness and its neutral rewrites; contested office words weighed by their sources (Académie, OQLF, Larousse, Usito): je reviens vers vous, impacter, initier, booker, un call, acter, faire escalader',
    'France and Québec conventions in email from sourced usage (tutoiement, the OQLF scale of salutation openers, courriel); presenting with message titles and signposting; answering hostile, trap, off-topic and confidential questions',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Au B1, tu as appris à refuser par courriel ; au B2, à mener une réunion et à négocier ; plus tôt au C1, à doser la politesse à l’oral et à répondre à un jury. Ici, le tact passe à l’écrit et dans la salle de réunion : tu règles le degré d’indirect d’une demande, tu refuses une fois et clairement, tu annonces une mauvaise nouvelle en tête et tu l’assumes, tu dis non à ta hiérarchie en la faisant arbitrer, tu relances puis tu fais remonter un dossier. Tu reconnais les piques polies, tu pèses les mots contestés avec leurs sources, tu écris pour la France comme pour le Québec sans cliché, tu titres tes diapositives par leur message et tu réponds au fond à une question hostile. À la fin, tu écris un message de refus et de mauvaise nouvelle à une cliente.',
    minutes: 175,
    difficulty: 4,
    glyph: 'tact',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: TACT_TRAVAIL_TERMS,
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

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, GLACES_FICHE };
export const lessonWithoutTask = (): Lesson => LESSON;
