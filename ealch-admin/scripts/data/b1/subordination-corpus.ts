// b1.31.l1 « La subordination : cause, conséquence, but » · the authored
// corpus, the imports and the citation constants. DRAFT, to
// RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   SUBORDINATION AS A SYSTEM, for cause, consequence and purpose, with the
//   indicative: a main clause that stands on its own, a subordinate clause
//   that does not, and the conjunction that names the link AND picks the
//   mood. Act by act:
//
//     1  the main clause and the subordinate clause; « parce que de » is not
//        French (parce que opens a CLAUSE, à cause de takes a NOUN)
//     2  parce que answers pourquoi (a1.20 gave it as the answer word); car
//        contrasted, and cited to b1.30
//     3  puisque (a cause both people already know), comme (the cause at the
//        front); vu que and étant donné que for recognition
//     4  à cause de against grâce à + noun (negative against positive cause);
//        en raison de for recognition
//     5  si bien que and de sorte que + indicative: the result
//     6  si / tellement + adjective + que; tant de / tellement de + noun + que
//     7  c'est pourquoi and par conséquent: adverbs that join two SENTENCES,
//        against the conjunctions that build one
//     8  purpose, RECAP ONLY: pour / afin de + infinitive and pour que / afin
//        que + subjunctive, cited to b1.16 and not re-taught
//     9  time subordinators other than quand: pendant que, depuis que,
//        lorsque, après que + indicative (the spoken subjunctive after après
//        que as a recognition note)
//    10  the conjunction decides the mood; clause order and the comma
//    11  explaining an incident: causes, consequences, one purpose
//
//   NOT OWNED, and the lines were drawn before this file was written:
//   b1.30 owns the coordinators (mais, ou, et, donc, or, ni, car) and the
//   linking adverbs; car and donc appear here only as a CONTRAST, cited. b1.32
//   owns concession (bien que, même si, alors que as contrast, pourtant,
//   quand même, malgré): bien que appears once, as a mood contrast, cited.
//   b1.10 owns si clauses (si here is only the intensifier « si froid que »).
//   b1.05 to b1.07 own quand and dès que with the future; lorsque + futur is
//   cited to b1.07. b1.14 to b1.16 own the subjunctive and its triggers,
//   pour que, avant que, afin que, and b1.16 owns pour + infinitive against
//   pour que. b1.03 owns pendant que as the interruption frame.
//
//   THE SUBJUNCTIVE stays out of every authored French string EXCEPT the
//   rows tagged `contraste` (acts 8 and 10), each of which exists only to be
//   set against an indicative row and is cited to b1.14 to b1.16 or b1.32
//   on the screen that shows it. None of them carries `dictation`.
//
//   NO UNGRAMMATICAL SENTENCE IS EVER A ROW. « parce que de la tempête »,
//   « tellement du monde » and the rest live in commonErrors.wrong,
//   trapDrill.promptSound, the scene break and quiz errorSpot prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, and Postgres probed read-only
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `connecteurs-logiques` exists (fondations, a2-b2, sub-themes la
//     coordination, la subordination, la concession, set 2026-09-26), so
//     nothing is created at import.
//  2. POSTGRES PROBED 2026-09-26 (read-only): a2 132 rows (max .132), b1 115
//     (max .115), b2 48 (max .048). Nothing at or above 1000 at any level.
//  3. ID BLOCK: b1.31 owns `fr.b1.connecteurs-logiques.1200`-`.1399` AND
//     NOTHING ELSE. b1.30 (coordination) holds 1000-1199 and is being written
//     in parallel; b1.32 (concession) takes 1400-1599. Used here: see §H.
//     Compare full ids, never numbers: the level is part of the id.
//  4. THE SEED CARRIES 11 ROWS OF THIS THEME (fr.b1.connecteurs-logiques
//     .001-.011), all parce que / donc / car, all `dictation` only. They are
//     nameable (src() resolves them) but not deck-able. Postgres holds 104
//     more b1 rows the seed omits, and 35 of them are EXACTLY on topic
//     (puisque, comme, grâce à, à cause de, si bien que, de sorte que,
//     c'est pourquoi, par conséquent, tellement). They cannot be named here.
//     This corpus avoids copying them word for word, but twins are
//     unavoidable in a lesson on the same connectors: see DB_ONLY_TWINS.
//  5. Seed rows outside the theme were probed over all 11,209 seed items on
//     2026-09-26 for every connector this lesson teaches; the useful ones are
//     in §F, their `fr` read from seed.json and printed through src().
//     There is NO seed row at a1-b1 with lorsque, après que, vu que, étant
//     donné que, grâce à, de sorte que, c'est pourquoi or par conséquent.
//  6. OWNERSHIP FOUND BY PROBE: a1.20 « Les mots interrogatifs » gives
//     parce que as the answer to pourquoi (its tapTable detail: « the only
//     one of the seven whose answer has a grammar of its own: parce que »).
//     sons.07 owns the elision in puisqu'. No A1 or A2 lesson names comme,
//     puisque, à cause de or any consequence connector in grammarIntroduced.
//  7. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN FOR THE EAR:
//       une      ÜNN     (a real /n/ after a single n; b1.20's spelling)
//       Karim    ka-REEMM (a real /m/ that the checker cannot tell from a nasal)
//       même     MEM     (the seed's spelling)
//       semaine  suh-MENN, prochaine proh-SHENN, fontaine not used
//     Everything else is spelled for the ear. panne, personne, comme,
//     tonne carry a double consonant in the source (PANN, SONN, KOMM).
//     Nasal vowels always close with the superscript: ahⁿ, ohⁿ, uhⁿ, ehⁿ.
//     No U+203F tie anywhere.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b1.31',
  seq: 31,
  title: 'Subordination',
  sub: 'La subordination : cause, conséquence, but',
  canDo: 'Can explain why something happened and what followed, choosing between parce que, puisque, comme, à cause de and grâce à for the cause, si bien que, tellement ... que and par conséquent for the consequence, pour and afin de for the purpose, and pendant que, depuis que, lorsque and après que for time, knowing that the conjunction decides the mood',
  prereqUnitIds: ['a1.20', 'b1.03', 'b1.16'],
} as const;

export const LESSON_ID = 'b1.31.l1';
export const THEME = 'connecteurs-logiques';
export const LEVEL = 'b1' as const;

/** ONE block. DB holds b1 .001-.115 in this theme; b1.31 owns 1200-1399. */
export const ID_RANGES = [[1200, 1399]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A1 and A2 citations use the house English trail label, resolved through
 *  `unitRef` from the shipped `unit.seq`. b1.* units are not in the seed
 *  yet, so they are labelled in French from the plan until they are.
 * ══════════════════════════════════════════════════════════════════════════ */

export const INTERROGATIFS_UNIT = 'a1.20';
export const ELISION_UNIT = 'sons.07';
export const PC_AVOIR_UNIT = 'a2.05';
export const PC_IMPARFAIT_UNIT = 'b1.03';
export const FUTUR_USAGE_UNIT = 'b1.07';
export const SI_UNIT = 'b1.10';
export const SUBJ_FORM_UNIT = 'b1.14';
export const SUBJ_DECL_UNIT = 'b1.15';
export const SUBJ_INF_UNIT = 'b1.16';
export const COORDINATION_UNIT = 'b1.30';
export const CONCESSION_UNIT = 'b1.32';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = Object.fromEntries(
  Array.from({ length: 39 }, (_, i) => [`b1.${String(i + 1).padStart(2, '0')}`, i + 1]),
);
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const INTERROGATIFS_REF = unitRef(INTERROGATIFS_UNIT);
export const ELISION_REF = unitRef(ELISION_UNIT);
export const PC_IMPARFAIT_REF = refFr(PC_IMPARFAIT_UNIT);
export const FUTUR_USAGE_REF = refFr(FUTUR_USAGE_UNIT);
export const SI_REF = refFr(SI_UNIT);
export const SUBJ_DECL_REF = refFr(SUBJ_DECL_UNIT);
export const SUBJ_INF_REF = refFr(SUBJ_INF_UNIT);
export const COORDINATION_REF = refFr(COORDINATION_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED, never retyped. All three are French.
 *  b1.30 (coordination) is being written in parallel and has no REFRAME
 *  export yet, so it is cited by label only.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B103_REFRAME } from './pc-imparfait-corpus.ts';
export { REFRAME as B115_REFRAME } from './subjonctif-declencheurs-corpus.ts';
export { REFRAME as B116_REFRAME } from './subjonctif-infinitif-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE DOMINOES AND THE SLUICE GATE. A main clause is a domino that stands
 *  on its own. A subordinate clause leans on it and cannot stand alone. The
 *  small word at its head is the gate: it says which way the water flows
 *  (cause, result, aim, time) and, because the gate is fixed, it also says
 *  which mood comes through. parce que lets the indicative through; pour
 *  que lets the subjunctive through; the verb has no vote.
 *
 *  It predicts acts 4 and 7 by contrast: à cause de and par conséquent are
 *  not conjunctions, so they open no subordinate clause and choose no mood.
 *  À cause de takes a noun; par conséquent starts a new sentence.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'La conjonction dit le lien. C’est aussi elle qui choisit le mode.';
export const REFRAME_EN = 'The conjunction names the link. It is also the one that picks the mood.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Parce que pour la cause, donc pour la conséquence.',
    why: "A vocabulary pair, not a system, and donc is b1.30's. It says nothing about why « parce que de » fails (act 1), why comme must come first (act 3) or why pour que takes a different mood from si bien que (act 10), which is the lesson's spine.",
  },
  {
    text: 'Après que, toujours l’indicatif.',
    why: 'True, and the note act 9 is built on, but it is one conjunction. As a reframe it would teach a list of exceptions instead of the rule that produces them.',
  },
  {
    text: 'Le sens du verbe choisit le mode.',
    why: "False, and the exact belief act 10 is built to break: « je reste parce que tu es là » and « je reste pour que tu sois moins seul » have the same verb and different moods. b1.15's reframe already says the expression in front of que decides; this lesson's line extends it to cause, result and time.",
  },
  {
    text: 'Une subordonnée ne tient jamais seule.',
    why: "True of the written sentence, and it is act 1's teaching point, but spoken French answers « Pourquoi ? » with « Parce que j'étais malade. » on its own (act 2). A reframe that act 2 has to apologise for is not a reframe.",
  },
  {
    text: 'Cause avant, conséquence après.',
    why: "A word-order rule that fails at once: « Je suis rentré parce qu'il pleuvait » puts the cause second. It also says nothing about mood.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-26 and its French is in the
 *  trailing comment. `named only` rows carry no `flashcard` drill. NO seed
 *  row imported here carries `voiceflash`, so NOT_SPEAKABLE is every import.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.connecteurs-logiques.005', // Il n'a pas pu venir parce que sa voiture est tombée en panne.  (named only)
    'fr.a2.objets.106',               // J'ai perdu mes clés parce que j'étais pressé ce matin.
  ],
  act2: [
    'fr.a1.maison.149',               // Je ferme la fenêtre parce qu'il fait froid.
    'fr.a2.routines.061',             // Je me suis dépêché ce matin parce que j'étais en retard.
    'fr.b1.connecteurs-logiques.010', // Le vol a été annulé car les conditions météo étaient trop mauvaises.  (named only)
  ],
  act3: [
    'fr.a2.sports-et-loisirs.064',    // Puisque j'aime le sport, je me suis inscrit à trois clubs.
    'fr.a2.sports-et-loisirs.061',    // Comme il pleuvait, nous avons annulé la randonnée.
    'fr.b1.routines.092',             // Comme il était en retard, il a sauté le petit déjeuner ce matin.
  ],
  act4: [
    'fr.a2.heure-et-date.123',        // Elle est arrivée en retard à cause de la circulation.
    'fr.a2.marche.148',               // Le marché va fermer plus tôt à cause de la pluie.
    'fr.a1.deplacements.285',         // La route est fermée à cause des travaux.  (named only)
  ],
  act5: [
    'fr.b1.connecteurs-logiques.008', // Le pont était fermé, donc nous avons dû faire un détour.  (named only)
  ],
  act6: [
    'fr.b1.courses.003',              // Les prix ont tellement augmenté que la facture nous a surpris.  (named only)
    'fr.b1.conflits-reconciliation.003', // La mère était tellement déçue qu'elle n'a pas parlé à sa fille de la soirée.  (named only)
  ],
  act7: [] as string[],               // §A.5: no seed row at a1-b1 with c'est pourquoi or par conséquent.
  act8: [] as string[],               // purpose is b1.16's; its rows are not in the seed.
  act9: [
    'fr.b1.cafe.085',                 // Pendant que nous attendions l'addition, nous avons parlé de nos projets.
    'fr.b1.maison.003',               // Depuis qu'ils ont changé les fenêtres, la maison garde mieux la chaleur.
    'fr.b1.routines.083',             // Depuis qu'il travaille à distance, il commence sa journée plus tard.
  ],
  act10: [
    'fr.b1.famille.060',              // Il faut que tu prennes soin de ta grand-mère pendant qu'elle est malade.  (named only)
  ],
  act11: [
    'fr.b1.connecteurs-logiques.001', // Elle a changé de métier parce qu'elle voulait plus de liberté.  (named only)
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.b1.connecteurs-logiques.005',   // dictation
  'fr.b1.connecteurs-logiques.010',   // dictation
  'fr.a1.deplacements.285',           // dictation
  'fr.b1.connecteurs-logiques.008',   // dictation
  'fr.b1.courses.003',                // dictation
  'fr.b1.conflits-reconciliation.003', // dictation
  'fr.b1.famille.060',                // sentence, review (and carries a subjunctive: contrast only)
  'fr.b1.connecteurs-logiques.001',   // dictation
];

/** No `voiceflash` either: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.a2.objets.106',                 // sentence, flashcard, review
  'fr.a1.maison.149',                 // sentence, flashcard, review
  'fr.a2.routines.061',               // sentence, flashcard, review
  'fr.a2.sports-et-loisirs.064',      // sentence, flashcard, review
  'fr.a2.sports-et-loisirs.061',      // sentence, flashcard, review
  'fr.b1.routines.092',               // sentence, flashcard, review
  'fr.a2.heure-et-date.123',          // flashcard, sentence
  'fr.a2.marche.148',                 // sentence, flashcard, review
  'fr.b1.cafe.085',                   // sentence, flashcard, review
  'fr.b1.maison.003',                 // sentence, flashcard, review
  'fr.b1.routines.083',               // sentence, flashcard, review
];

/** Published rows this corpus twins, found by a read-only Postgres probe on
 *  2026-09-26. Not nameable today (DB-only). Decide at import: dedupe or
 *  keep both (build log open item). */
export const DB_ONLY_TWINS: readonly { dbId: string; fr: string; twin: string }[] = [
  { dbId: 'fr.b1.connecteurs-logiques.051', fr: 'Puisque tu connais bien la ville, tu peux nous guider.', twin: E(1232) },
  { dbId: 'fr.b1.connecteurs-logiques.021', fr: "Le spectacle a été interrompu à cause d'une panne d'électricité.", twin: E(1250) },
  { dbId: 'fr.b1.connecteurs-logiques.057', fr: "Grâce à l'aide de ses collègues, elle a terminé le projet à temps.", twin: E(1251) },
  { dbId: 'fr.b1.connecteurs-logiques.069', fr: 'À cause du brouillard, les avions ne pouvaient pas décoller.', twin: E(1253) },
  { dbId: 'fr.b1.connecteurs-logiques.054', fr: 'Le vol a été annulé, de sorte que nous avons changé nos plans.', twin: E(1268) },
  { dbId: 'fr.b1.connecteurs-logiques.055', fr: 'Les prix ont augmenté, par conséquent les clients achètent moins.', twin: E(1274) },
  { dbId: 'fr.b1.connecteurs-logiques.061', fr: "Le directeur était absent, c'est pourquoi la réunion a été annulée.", twin: E(1304) },
  { dbId: 'fr.b1.connecteurs-logiques.103', fr: 'par conséquent', twin: E(1312) },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the last stressed syllable of
 *  each group in caps, ü for French u, nasals closed with the superscript ⁿ,
 *  and NO U+203F tie. See §A.7 for the respellings spelled for the checker.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
/** Contrast rows (a subjunctive, cited): never dictated, never a model to write. */
const FVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['subordination'], ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, ...extra,
});

/** A gapfill card: `prompt` is the front, `fr` the answer (validateItem). */
const gap = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'gapfill', prompt, notes });
/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE RETARD : LA PRINCIPALE ET LA SUBORDONNÉE ───────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1200, 'Je suis en retard à cause de la tempête.', 'I am late because of the storm.', '/ʒə sɥi.zɑ̃ ʁə.taʁ a koz də la tɑ̃.pɛt/', 'zhuh swee-zahⁿ ruh-TAR | a kohz duh la tahⁿ-PEHT', ['scene', 'cause-nom'], FCVDR),
  sent(1201, 'Je suis en retard parce que le métro était bloqué.', 'I am late because the metro was stuck.', '/ʒə sɥi.zɑ̃ ʁə.taʁ paʁs kə lə me.tʁo e.tɛ blɔ.ke/', 'zhuh swee-zahⁿ ruh-TAR | pars kuh luh may-troh ay-teh blo-KAY', ['scene', 'parce-que'], FCVDR),
  sent(1202, 'Le métro était bloqué.', 'The metro was stuck.', '/lə me.tʁo e.tɛ blɔ.ke/', 'luh may-TROH ay-teh blo-KAY', ['principale']),
  sent(1203, 'La livraison est arrivée en retard parce que le camion est tombé en panne.', 'The delivery arrived late because the lorry broke down.', '/la li.vʁɛ.zɔ̃ ɛ.ta.ʁi.ve ɑ̃ ʁə.taʁ paʁs kə lə ka.mjɔ̃ ɛ tɔ̃.be ɑ̃ pan/', 'la lee-vreh-ZOHⁿ eh-ta-ree-VAY ahⁿ ruh-TAR | pars kuh luh ka-myohⁿ eh tohⁿ-bay ahⁿ PANN', ['rapport', 'parce-que'], FCVDR),
  sent(1204, 'La réunion a été annulée parce que la salle était inondée.', 'The meeting was cancelled because the room was flooded.', '/la ʁe.y.njɔ̃ a e.te a.ny.le paʁs kə la sal e.tɛ.ti.nɔ̃.de/', 'la ray-ü-NYOHⁿ a ay-tay a-nü-LAY | pars kuh la sal ay-teh-tee-nohⁿ-DAY', ['bureau', 'parce-que']),
  sent(1205, 'Comme il neigeait, le bureau a fermé à midi.', 'As it was snowing, the office closed at noon.', '/kɔ.mil nɛ.ʒɛ lə by.ʁo a fɛʁ.me a mi.di/', 'ko-meel neh-ZHEH | luh bü-roh a fehr-may a mee-DEE', ['comme', 'ordre']),
  sent(1206, 'Il a tellement neigé que les écoles ont fermé.', 'It snowed so much that the schools closed.', '/i.la tɛl.mɑ̃ ne.ʒe kə le.ze.kɔl ɔ̃ fɛʁ.me/', 'ee-la tehl-mahⁿ nay-ZHAY | kuh lay-zay-kol ohⁿ fehr-MAY', ['tellement', 'consequence'], FCVDR),
  sent(1207, "J'ai appelé le client pour le prévenir.", 'I called the client to warn him.', '/ʒe a.pə.le lə kli.jɑ̃ puʁ lə pʁe.və.niʁ/', 'zhay a-puh-lay luh klee-YAHⁿ | poor luh pray-vuh-NEER', ['but', 'pour']),
  sent(1208, 'Pendant que je parlais au client, le camion est arrivé.', 'While I was talking to the client, the lorry arrived.', '/pɑ̃.dɑ̃ kə ʒə paʁ.lɛ o kli.jɑ̃ lə ka.mjɔ̃ ɛ.ta.ʁi.ve/', 'pahⁿ-dahⁿ kuh zhuh par-leh oh klee-YAHⁿ | luh ka-myohⁿ eh-ta-ree-VAY', ['temps', 'pendant']),
  sent(1209, 'Une subordonnée ne tient pas debout toute seule.', 'A subordinate clause does not stand up on its own.', '/yn sy.bɔʁ.dɔ.ne nə tjɛ̃ pa də.bu tut sœl/', 'ünn sü-bor-do-NAY | nuh tyehⁿ pa duh-boo toot SUHL', ['rule', 'systeme'], ['flashcard'],
    rule('« Parce que le métro était bloqué. » Est-ce une phrase complète ?', "Pas à l'écrit : il manque la principale, la phrase qui tient seule. Je suis en retard parce que le métro était bloqué.")),
  sent(1210, REFRAME, REFRAME_EN, '/la kɔ̃.ʒɔ̃k.sjɔ̃ di lə ljɛ̃ sɛ.to.si ɛl ki ʃwa.zi lə mɔd/', 'la kohⁿ-zhohⁿk-SYOHⁿ dee luh LYEHⁿ | seh-toh-see ehl kee shwa-zee luh MOD', ['rule', 'reframe'], ['flashcard'],
    rule('Dans « parce que le métro était bloqué », qui décide du lien, et qui décide du mode ?', "Parce que, les deux fois. Il dit que c'est une cause, et il demande l'indicatif.")),
  phrase(1211, 'la principale', 'the main clause', '/la pʁɛ̃.si.pal/', 'la prehⁿ-see-PAL', ['systeme']),
  phrase(1212, 'la subordonnée', 'the subordinate clause', '/la sy.bɔʁ.dɔ.ne/', 'la sü-bor-do-NAY', ['systeme']),
  sent(1213, 'Nous avons perdu une journée parce que les pièces manquaient.', 'We lost a day because the parts were missing.', '/nu.za.vɔ̃ pɛʁ.dy yn ʒuʁ.ne paʁs kə le pjɛs mɑ̃.kɛ/', 'noo-za-vohⁿ pehr-dü ünn zhoor-NAY | pars kuh lay pyehs mahⁿ-KEH', ['rapport', 'parce-que']),
  sent(1214, 'Je vous explique pourquoi nous avons changé de fournisseur.', 'I will explain to you why we changed supplier.', '/ʒə vu.zɛk.splik puʁ.kwa nu.za.vɔ̃ ʃɑ̃.ʒe də fuʁ.ni.sœʁ/', 'zhuh voo-zehk-spleek poor-KWA | noo-za-vohⁿ shahⁿ-zhay duh foor-nee-SUHR', ['rapport', 'pourquoi']),
];

/* ── ACT 2 · PARCE QUE ET CAR ───────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1215, 'Parce que mon train part à huit heures.', 'Because my train leaves at eight.', '/paʁs kə mɔ̃ tʁɛ̃ paʁ a ɥi.tœʁ/', 'pars kuh mohⁿ trehⁿ par a wee-TUHR', ['reponse', 'parce-que', 'oral'], FCVDR),
  sent(1216, "Je prends un taxi parce qu'il pleut.", 'I am taking a taxi because it is raining.', '/ʒə pʁɑ̃ œ̃ tak.si paʁs kil plø/', 'zhuh prahⁿ uhⁿ tak-SEE | pars keel PLEU', ['parce-que', 'elision'], FCVDR),
  sent(1217, "Elle ne vient pas parce qu'elle est malade.", 'She is not coming because she is ill.', '/ɛl nə vjɛ̃ pa paʁs kɛ.lɛ ma.lad/', 'ehl nuh vyehⁿ PA | pars keh-leh ma-LAD', ['parce-que', 'elision'], FCVDR),
  sent(1218, 'Nous restons à la maison parce que les routes sont glissantes.', 'We are staying at home because the roads are slippery.', '/nu ʁɛs.tɔ̃ a la mɛ.zɔ̃ paʁs kə le ʁut sɔ̃ ɡli.sɑ̃t/', 'noo rehs-tohⁿ a la meh-ZOHⁿ | pars kuh lay root sohⁿ glee-SAHⁿT', ['parce-que', 'quebec']),
  sent(1219, "Il a changé de travail parce qu'il voulait voyager.", 'He changed jobs because he wanted to travel.', '/i.la ʃɑ̃.ʒe də tʁa.vaj paʁs kil vu.lɛ vwa.ja.ʒe/', 'ee-la shahⁿ-zhay duh tra-VAHY | pars keel voo-leh vwa-ya-ZHAY', ['parce-que']),
  sent(1220, 'Parce que ouvre une subordonnée : un sujet et un verbe suivent.', 'Parce que opens a subordinate clause: a subject and a verb follow.', '/paʁs kə uvʁ yn sy.bɔʁ.dɔ.ne œ̃ sy.ʒɛ e œ̃ vɛʁb sɥiv/', 'pars kuh OOVR ünn sü-bor-do-NAY | uhⁿ sü-zheh ay uhⁿ vehrb SWEEV', ['rule', 'parce-que'], ['flashcard'],
    rule('« Parce que la pluie. » Qu’est-ce qui manque ?', "Un verbe. Parce qu'il pleuvait, ou alors à cause de la pluie.")),
  sent(1221, 'Le vol est annulé, car le pilote est malade.', 'The flight is cancelled, for the pilot is ill.', '/lə vɔl ɛ.ta.ny.le kaʁ lə pi.lɔt ɛ ma.lad/', 'luh vol eh-ta-nü-LAY | kar luh pee-lot eh ma-LAD', ['car', 'ecrit']),
  sent(1222, "Je t'appelle parce que j'ai une question.", 'I am calling you because I have a question.', '/ʒə ta.pɛl paʁs kə ʒe yn kɛs.tjɔ̃/', 'zhuh ta-PEHL | pars kuh zhay ünn kehs-TYOHⁿ', ['parce-que'], FCVDR),
  sent(1223, "J'ai refusé le poste parce que le salaire était trop bas.", 'I turned the job down because the salary was too low.', '/ʒe ʁə.fy.ze lə pɔst paʁs kə lə sa.lɛʁ e.tɛ tʁo ba/', 'zhay ruh-fü-zay luh POST | pars kuh luh sa-lehr ay-teh troh BA', ['parce-que', 'travail']),
  sent(1224, 'Tu dois partir maintenant parce que le dernier bus passe à minuit.', 'You have to leave now because the last bus comes at midnight.', '/ty dwa paʁ.tiʁ mɛ̃t.nɑ̃ paʁs kə lə dɛʁ.nje bys pas a mi.nɥi/', 'tü dwa par-teer mehⁿt-NAHⁿ | pars kuh luh dehr-nyay büs pass a mee-NWEE', ['parce-que']),
  sent(1225, 'Elle a pleuré parce que le film était triste.', 'She cried because the film was sad.', '/ɛ.la plœ.ʁe paʁs kə lə film e.tɛ tʁist/', 'eh-la pluh-RAY | pars kuh luh feelm ay-teh TREEST', ['parce-que']),
  sent(1226, "Il reste chez lui parce qu'il est malade.", 'He is staying at home because he is ill.', '/il ʁɛst ʃe lɥi paʁs ki.lɛ ma.lad/', 'eel rehst shay LWEE | pars kee-leh ma-LAD', ['parce-que', 'elision'], FCVR,
    gap('Il reste chez lui ___ il est malade.', "parce qu' : devant il, parce que perd son e, comme que.")),
  sent(1227, 'Je ne peux pas sortir, car je dois travailler.', 'I cannot go out, for I have to work.', '/ʒə nə pø pa sɔʁ.tiʁ kaʁ ʒə dwa tʁa.va.je/', 'zhuh nuh peu pa sor-TEER | kar zhuh dwa tra-va-YAY', ['car', 'ecrit']),
  sent(1228, "On mange dehors parce qu'il fait beau.", 'We are eating outside because the weather is nice.', '/ɔ̃ mɑ̃ʒ də.ɔʁ paʁs kil fɛ bo/', 'ohⁿ mahⁿzh duh-OR | pars keel feh BOH', ['parce-que'], FCVDR),
  sent(1229, "C'est parce que tu es arrivé tard qu'on a raté le début.", 'It is because you got here late that we missed the start.', '/sɛ paʁs kə ty ɛ.za.ʁi.ve taʁ kɔ̃.na ʁa.te lə de.by/', 'seh pars kuh tü eh-za-ree-vay TAR | kohⁿ-na ra-tay luh day-BÜ', ['parce-que', 'insistance']),
  sent(1230, "Il est parti tôt parce qu'il avait un rendez-vous.", 'He left early because he had an appointment.', '/i.lɛ paʁ.ti to paʁs ki.la.vɛ œ̃ ʁɑ̃.de.vu/', 'ee-leh par-tee TOH | pars kee-la-veh uhⁿ rahⁿ-day-VOO', ['parce-que']),
];

/* ── ACT 3 · PUISQUE ET COMME ───────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1231, 'Puisque tu as une voiture, tu peux nous conduire.', 'Since you have a car, you can drive us.', '/pɥis.kə ty a yn vwa.tyʁ ty pø nu kɔ̃.dɥiʁ/', 'pweess-kuh tü a ünn vwa-TÜR | tü peu noo kohⁿ-DWEER', ['puisque'], FCVDR),
  sent(1232, 'Puisque tu connais Québec, choisis le restaurant.', 'Since you know Québec, you choose the restaurant.', '/pɥis.kə ty kɔ.nɛ ke.bɛk ʃwa.zi lə ʁɛs.to.ʁɑ̃/', 'pweess-kuh tü ko-neh kay-BEHK | shwa-zee luh rehs-to-RAHⁿ', ['puisque', 'quebec']),
  sent(1233, "Puisqu'il pleut, on reste à l'intérieur.", 'Since it is raining, we are staying inside.', '/pɥis.kil plø ɔ̃ ʁɛst a lɛ̃.te.ʁjœʁ/', 'pweess-keel PLEU | ohⁿ rehst a lehⁿ-tay-RYUHR', ['puisque', 'elision'], FCVDR),
  sent(1234, 'Comme il faisait beau, nous avons mangé dehors.', 'As the weather was nice, we ate outside.', '/kɔ.mil fə.zɛ bo nu.za.vɔ̃ mɑ̃.ʒe də.ɔʁ/', 'ko-meel fuh-zeh BOH | noo-za-vohⁿ mahⁿ-zhay duh-OR', ['comme'], FCVDR),
  sent(1235, 'Comme le magasin était fermé, je suis rentré.', 'As the shop was closed, I went home.', '/kɔm lə ma.ɡa.zɛ̃ e.tɛ fɛʁ.me ʒə sɥi ʁɑ̃.tʁe/', 'kom luh ma-ga-zehⁿ ay-teh fehr-MAY | zhuh swee rahⁿ-TRAY', ['comme']),
  sent(1236, 'Comme elle parle espagnol, elle a traduit la lettre.', 'As she speaks Spanish, she translated the letter.', '/kɔ.mɛl paʁl ɛs.pa.ɲɔl ɛ.la tʁa.dɥi la lɛtʁ/', 'ko-mehl parl ehs-pa-NYOL | eh-la tra-dwee la LEHTR', ['comme']),
  sent(1237, 'Puisque dit une cause que les deux personnes connaissent déjà.', 'Puisque gives a cause both people already know.', '/pɥis.kə di yn koz kə le dø pɛʁ.sɔn kɔ.nɛs de.ʒa/', 'pweess-kuh dee ünn KOHZ | kuh lay deu pehr-sonn ko-nehss day-ZHA', ['rule', 'puisque'], ['flashcard'],
    rule('« Puisque tu es là, aide-moi. » L’autre personne sait-elle qu’elle est là ?', "Oui, évidemment. Puisque rappelle une cause connue, souvent pour tirer une conclusion.")),
  sent(1238, 'Comme ouvre la phrase : la cause vient en premier.', 'Comme opens the sentence: the cause comes first.', '/kɔm uvʁ la fʁaz la koz vjɛ̃.tɑ̃ pʁə.mje/', 'kom OOVR la FRAHZ | la kohz vyehⁿ-tahⁿ pruh-MYAY', ['rule', 'comme', 'ordre'], ['flashcard'],
    rule('Peux-tu dire « Je suis rentré comme le magasin était fermé » ?', "Non. Comme, pour une cause, se met au début : Comme le magasin était fermé, je suis rentré.")),
  sent(1239, 'Vu que le train est en retard, on prend un café.', 'Seeing that the train is late, we are having a coffee.', '/vy kə lə tʁɛ̃ ɛ.tɑ̃ ʁə.taʁ ɔ̃ pʁɑ̃ œ̃ ka.fe/', 'vü kuh luh trehⁿ eh-tahⁿ ruh-TAR | ohⁿ prahⁿ uhⁿ ka-FAY', ['vu-que', 'oral']),
  sent(1240, 'Étant donné que les prix augmentent, nous changeons de fournisseur.', 'Given that prices are rising, we are changing supplier.', '/e.tɑ̃ dɔ.ne kə le pʁi oɡ.mɑ̃t nu ʃɑ̃.ʒɔ̃ də fuʁ.ni.sœʁ/', 'ay-tahⁿ do-nay kuh lay pree og-MAHⁿT | noo shahⁿ-zhohⁿ duh foor-nee-SUHR', ['etant-donne', 'ecrit']),
  sent(1241, "Puisque c'est comme ça, je m'en vais.", "Since that's how it is, I'm off.", '/pɥis.kə sɛ kɔm sa ʒə mɑ̃ vɛ/', 'pweess-kuh seh kom SA | zhuh mahⁿ VEH', ['puisque', 'oral']),
  sent(1242, 'Comme nous étions en avance, nous avons visité le musée.', 'As we were early, we visited the museum.', '/kɔm nu.ze.tjɔ̃.zɑ̃.na.vɑ̃s nu.za.vɔ̃ vi.zi.te lə my.ze/', 'kom noo-zay-tyohⁿ-zahⁿ-na-VAHⁿS | noo-za-vohⁿ vee-zee-tay luh mü-ZAY', ['comme'], FCVDR),
  sent(1243, 'Puisque tu insistes, je viens avec toi.', 'Since you insist, I will come with you.', '/pɥis.kə ty ɛ̃.sist ʒə vjɛ̃ a.vɛk twa/', 'pweess-kuh tü ehⁿ-SEEST | zhuh vyehⁿ a-vehk TWA', ['puisque']),
  sent(1244, 'Je rentre à pied, puisque le métro est en grève.', 'I am walking home, since the metro is on strike.', '/ʒə ʁɑ̃tʁ a pje pɥis.kə lə me.tʁo ɛ.tɑ̃ ɡʁɛv/', 'zhuh rahⁿtr a PYAY | pweess-kuh luh may-troh eh-tahⁿ GREHV', ['puisque']),
  phrase(1245, 'puisque', 'since (as we both know)', '/pɥis.kə/', 'pweess-KUH', ['puisque']),
  phrase(1246, 'comme', 'as, since (at the start)', '/kɔm/', 'KOMM', ['comme']),
  sent(1247, 'Comme il était tard, nous avons pris un taxi.', 'As it was late, we took a taxi.', '/kɔ.mi.le.tɛ taʁ nu.za.vɔ̃ pʁi œ̃ tak.si/', 'ko-mee-lay-teh TAR | noo-za-vohⁿ pree uhⁿ tak-SEE', ['comme'], FCVR,
    gap('___ il était tard, nous avons pris un taxi. (as)', "Comme : la cause ouvre la phrase. Parce que, ici, sonnerait moins naturel.")),
  sent(1248, "Vu qu'il fait froid, mets ton manteau.", 'Seeing that it is cold, put your coat on.', '/vy kil fɛ fʁwa mɛ tɔ̃ mɑ̃.to/', 'vü keel feh FRWA | meh tohⁿ mahⁿ-TOH', ['vu-que', 'oral']),
];

/* ── ACT 4 · À CAUSE DE, GRÂCE À ────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1249, 'La route est fermée à cause de la neige.', 'The road is closed because of the snow.', '/la ʁut ɛ fɛʁ.me a koz də la nɛʒ/', 'la root eh fehr-MAY | a kohz duh la NEHZH', ['cause-nom'], FCVDR),
  sent(1250, 'Le spectacle a été annulé à cause de la pluie.', 'The show was cancelled because of the rain.', '/lə spɛk.takl a e.te a.ny.le a koz də la plɥi/', 'luh spehk-TAKL a ay-tay a-nü-LAY | a kohz duh la PLWEE', ['cause-nom']),
  sent(1251, "J'ai réussi grâce à ton aide.", 'I succeeded thanks to your help.', '/ʒe ʁe.y.si ɡʁɑ.sa tɔ̃.nɛd/', 'zhay ray-ü-SEE | gra-sa toh-NEHD', ['grace-a'], FCVDR),
  sent(1252, "Nous sommes arrivés à l'heure grâce au GPS.", 'We arrived on time thanks to the GPS.', '/nu sɔm.za.ʁi.ve a lœʁ ɡʁɑs o ʒe.pe.ɛs/', 'noo som-za-ree-vay a LUHR | grass oh zhay-pay-EHSS', ['grace-a', 'contraction']),
  sent(1253, 'Le vol a été retardé à cause du brouillard.', 'The flight was delayed because of the fog.', '/lə vɔl a e.te ʁə.taʁ.de a koz dy bʁu.jaʁ/', 'luh vol a ay-tay ruh-tar-DAY | a kohz dü broo-YAR', ['cause-nom', 'contraction'], FCVDR),
  sent(1254, 'Elle a trouvé du travail grâce à ses contacts.', 'She found work thanks to her contacts.', '/ɛ.la tʁu.ve dy tʁa.vaj ɡʁɑ.sa se kɔ̃.takt/', 'eh-la troo-vay dü tra-VAHY | gra-sa say kohⁿ-TAKT', ['grace-a', 'travail']),
  sent(1255, 'À cause de la grève, le métro ne marche pas.', 'Because of the strike, the metro is not running.', '/a koz də la ɡʁɛv lə me.tʁo nə maʁʃ pa/', 'a kohz duh la GREHV | luh may-troh nuh marsh PA', ['cause-nom', 'ordre']),
  sent(1256, 'Grâce aux bénévoles, la fête a été un succès.', 'Thanks to the volunteers, the party was a success.', '/ɡʁɑ.so be.ne.vɔl la fɛt a e.te œ̃ syk.sɛ/', 'gra-soh bay-nay-VOL | la feht a ay-tay uhⁿ sük-SEH', ['grace-a', 'contraction'], FCVDR),
  sent(1257, 'À cause de dit une cause négative ; grâce à, une cause positive.', 'À cause de gives a negative cause; grâce à, a positive one.', '/a koz də di yn koz ne.ɡa.tiv ɡʁɑ.sa yn koz pɔ.zi.tiv/', 'a kohz duh dee ünn kohz nay-ga-TEEV | gra-sa ünn kohz po-zee-TEEV', ['rule', 'grace-a'], ['flashcard'],
    rule('« J’ai raté mon train grâce à toi. » Que veut dire la personne ?', "Elle est ironique : grâce à dit merci. Sans ironie, on dit à cause de toi.")),
  sent(1258, 'Parce que devant une phrase, à cause de devant un nom.', 'Parce que before a clause, à cause de before a noun.', '/paʁs kə də.vɑ̃.tyn fʁaz a koz də də.vɑ̃ œ̃ nɔ̃/', 'pars kuh duh-vahⁿ-tünn FRAHZ | a kohz duh duh-vahⁿ uhⁿ NOHⁿ', ['rule', 'cause-nom'], ['flashcard'],
    rule('Because of the snow : parce que ou à cause de ?', "À cause de la neige. Parce que attend un sujet et un verbe : parce qu'il neige. Jamais parce que de.")),
  sent(1259, 'Il est malade à cause du stress.', 'He is ill because of stress.', '/i.lɛ ma.lad a koz dy stʁɛs/', 'ee-leh ma-LAD | a kohz dü STREHSS', ['cause-nom', 'contraction']),
  sent(1260, 'On a fermé la terrasse à cause des moustiques.', 'We closed the terrace because of the mosquitoes.', '/ɔ̃.na fɛʁ.me la te.ʁas a koz de mus.tik/', 'ohⁿ-na fehr-may la teh-RASS | a kohz day moos-TEEK', ['cause-nom', 'contraction']),
  sent(1261, "Grâce à cette formation, j'ai obtenu une promotion.", 'Thanks to that training, I got a promotion.', '/ɡʁɑ.sa sɛt fɔʁ.ma.sjɔ̃ ʒe ɔp.tə.ny yn pʁɔ.mo.sjɔ̃/', 'gra-sa seht for-ma-SYOHⁿ | zhay op-tuh-nü ünn pro-mo-SYOHⁿ', ['grace-a', 'travail'], FCVDR),
  phrase(1262, 'à cause de', 'because of', '/a koz də/', 'a kohz DUH', ['cause-nom']),
  phrase(1263, 'grâce à', 'thanks to', '/ɡʁɑ.sa/', 'gra-SA', ['grace-a']),
  sent(1264, "Je suis en retard parce qu'il neige.", 'I am late because it is snowing.', '/ʒə sɥi.zɑ̃ ʁə.taʁ paʁs kil nɛʒ/', 'zhuh swee-zahⁿ ruh-TAR | pars keel NEHZH', ['parce-que', 'paire']),
  sent(1265, "C'est à cause de moi qu'on a raté le train.", 'It is my fault that we missed the train.', '/sɛ.ta koz də mwa kɔ̃.na ʁa.te lə tʁɛ̃/', 'seh-ta kohz duh MWA | kohⁿ-na ra-tay luh TREHⁿ', ['cause-nom', 'insistance']),
  sent(1266, 'Le musée est fermé en raison des travaux.', 'The museum is closed owing to the building work.', '/lə my.ze ɛ fɛʁ.me ɑ̃ ʁɛ.zɔ̃ de tʁa.vo/', 'luh mü-ZAY eh fehr-MAY | ahⁿ reh-zohⁿ day tra-VOH', ['en-raison', 'ecrit']),
];

/* ── ACT 5 · SI BIEN QUE, DE SORTE QUE ──────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1267, 'Il a plu toute la nuit, si bien que la rivière a débordé.', 'It rained all night, so the river overflowed.', '/i.la ply tut la nɥi si bjɛ̃ kə la ʁi.vjɛʁ a de.bɔʁ.de/', 'ee-la plü toot la NWEE | see byehⁿ kuh la ree-vyehr a day-bor-DAY', ['si-bien-que', 'consequence'], FCVDR),
  sent(1268, 'Le train était complet, si bien que nous avons pris le bus.', 'The train was full, so we took the bus.', '/lə tʁɛ̃ e.tɛ kɔ̃.plɛ si bjɛ̃ kə nu.za.vɔ̃ pʁi lə bys/', 'luh trehⁿ ay-teh kohⁿ-PLEH | see byehⁿ kuh noo-za-vohⁿ pree luh BÜS', ['si-bien-que'], FCVDR),
  sent(1269, "J'ai oublié mon badge, de sorte que je n'ai pas pu entrer.", 'I forgot my pass, so I could not get in.', '/ʒe u.bli.je mɔ̃ badʒ də sɔʁt kə ʒə ne pa py ɑ̃.tʁe/', 'zhay oo-blee-yay mohⁿ BADJ | duh sort kuh zhuh nay pa pü ahⁿ-TRAY', ['de-sorte-que'], FCVDR),
  sent(1270, 'La salle était trop petite, de sorte que certains sont restés debout.', 'The room was too small, so some people stayed standing.', '/la sal e.tɛ tʁo pə.tit də sɔʁt kə sɛʁ.tɛ̃ sɔ̃ ʁɛs.te də.bu/', 'la sal ay-teh troh puh-TEET | duh sort kuh sehr-tehⁿ sohⁿ rehs-tay duh-BOO', ['de-sorte-que']),
  sent(1271, 'Karim a travaillé tout le week-end, si bien que le rapport est prêt.', 'Karim worked all weekend, so the report is ready.', '/ka.ʁim a tʁa.va.je tu lə wi.kɛnd si bjɛ̃ kə lə ʁa.pɔʁ ɛ pʁɛ/', 'ka-reemm a tra-va-yay too luh wee-KEHND | see byehⁿ kuh luh ra-por eh PREH', ['si-bien-que', 'bureau']),
  sent(1272, "Si bien que annonce le résultat : ce qui vient avant est la cause.", 'Si bien que announces the result: what comes before is the cause.', '/si bjɛ̃ kə a.nɔ̃s lə ʁe.zyl.ta sə ki vjɛ̃.ta.vɑ̃ ɛ la koz/', 'see byehⁿ kuh a-NOHⁿS luh ray-zül-TA | suh kee vyehⁿ-ta-vahⁿ eh la KOHZ', ['rule', 'si-bien-que'], ['flashcard'],
    rule('Dans « Il a plu, si bien que la rivière a débordé », quelle est la cause ?', "Il a plu. Si bien que ouvre la conséquence, et la conséquence est un fait : indicatif.")),
  sent(1273, 'Le serveur est tombé en panne, de sorte que le site était inaccessible.', 'The server went down, so the website could not be reached.', '/lə sɛʁ.vœʁ ɛ tɔ̃.be ɑ̃ pan də sɔʁt kə lə sit e.tɛ.ti.nak.se.sibl/', 'luh sehr-vuhr eh tohⁿ-bay ahⁿ PANN | duh sort kuh luh seet ay-teh-tee-nak-say-SEEBL', ['de-sorte-que', 'bureau']),
  sent(1274, 'Les prix ont augmenté, si bien que nous achetons moins.', 'Prices have gone up, so we buy less.', '/le pʁi ɔ̃.toɡ.mɑ̃.te si bjɛ̃ kə nu.zaʃ.tɔ̃ mwɛ̃/', 'lay pree ohⁿ-tog-mahⁿ-TAY | see byehⁿ kuh noo-zash-tohⁿ MWEHⁿ', ['si-bien-que']),
  sent(1275, 'La neige a bloqué la route, de sorte que le camion est arrivé le lendemain.', 'The snow blocked the road, so the lorry arrived the next day.', '/la nɛʒ a blɔ.ke la ʁut də sɔʁt kə lə ka.mjɔ̃ ɛ.ta.ʁi.ve lə lɑ̃d.mɛ̃/', 'la nehzh a blo-kay la ROOT | duh sort kuh luh ka-myohⁿ eh-ta-ree-vay luh lahⁿd-MEHⁿ', ['de-sorte-que', 'rapport'], FCVDR),
  sent(1276, "Il n'a pas entendu son réveil, si bien qu'il a raté l'avion.", 'He did not hear his alarm, so he missed the plane.', '/il na pa.zɑ̃.tɑ̃.dy sɔ̃ ʁe.vɛj si bjɛ̃ ki.la ʁa.te la.vjɔ̃/', 'eel na pa-zahⁿ-tahⁿ-dü sohⁿ ray-VEHY | see byehⁿ kee-la ra-tay la-VYOHⁿ', ['si-bien-que', 'elision']),
  phrase(1277, 'si bien que', 'so, with the result that', '/si bjɛ̃ kə/', 'see byehⁿ KUH', ['si-bien-que']),
  phrase(1278, 'de sorte que', 'so, with the result that (written)', '/də sɔʁt kə/', 'duh sort KUH', ['de-sorte-que']),
  sent(1279, 'Il y avait des travaux, si bien que nous avons fait un détour.', 'There was roadwork, so we made a detour.', '/il.ja.vɛ de tʁa.vo si bjɛ̃ kə nu.za.vɔ̃ fɛ œ̃ de.tuʁ/', 'eel-ya-veh day tra-VOH | see byehⁿ kuh noo-za-vohⁿ feh uhⁿ day-TOOR', ['si-bien-que']),
  sent(1280, "Le client n'a pas payé, de sorte que la livraison est bloquée.", 'The client has not paid, so the delivery is on hold.', '/lə kli.jɑ̃ na pa pe.je də sɔʁt kə la li.vʁɛ.zɔ̃ ɛ blɔ.ke/', 'luh klee-YAHⁿ na pa pay-YAY | duh sort kuh la lee-vreh-zohⁿ eh blo-KAY', ['de-sorte-que', 'bureau']),
  sent(1281, "On a perdu les clés, si bien qu'on a dormi chez Sophie.", 'We lost the keys, so we slept at Sophie’s.', '/ɔ̃.na pɛʁ.dy le kle si bjɛ̃ kɔ̃.na dɔʁ.mi ʃe sɔ.fi/', 'ohⁿ-na pehr-dü lay KLAY | see byehⁿ kohⁿ-na dor-mee shay so-FEE', ['si-bien-que']),
  sent(1282, 'Il a plu, si bien que la rivière a débordé.', 'It rained, so the river overflowed.', '/i.la ply si bjɛ̃ kə la ʁi.vjɛʁ a de.bɔʁ.de/', 'ee-la PLÜ | see byehⁿ kuh la ree-vyehr a day-bor-DAY', ['si-bien-que', 'indicatif'], FCVR,
    gap('Il a plu, si bien que la rivière ___ . (déborder, au passé composé)', "a débordé : la conséquence est un fait, donc à l'indicatif.")),
];

/* ── ACT 6 · TELLEMENT, SI, TANT ────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1283, 'Il faisait tellement froid que le lac a gelé.', 'It was so cold that the lake froze.', '/il fə.zɛ tɛl.mɑ̃ fʁwa kə lə lak a ʒə.le/', 'eel fuh-zeh tehl-mahⁿ FRWA | kuh luh lak a zhuh-LAY', ['tellement', 'adjectif', 'quebec'], FCVDR),
  sent(1284, 'La soupe était si chaude que je me suis brûlé.', 'The soup was so hot that I burnt myself.', '/la sup e.tɛ si ʃod kə ʒə mə sɥi bʁy.le/', 'la soop ay-teh see SHOHD | kuh zhuh muh swee brü-LAY', ['si-que', 'adjectif'], FCVDR),
  sent(1285, 'Il y avait tellement de monde que nous sommes partis.', 'There were so many people that we left.', '/il.ja.vɛ tɛl.mɑ̃ də mɔ̃d kə nu sɔm paʁ.ti/', 'eel-ya-veh tehl-mahⁿ duh MOHⁿD | kuh noo som par-TEE', ['tellement-de', 'nom'], FCVDR),
  sent(1286, "J'ai tant de travail que je ne dors plus.", 'I have so much work that I no longer sleep.', '/ʒe tɑ̃ də tʁa.vaj kə ʒə nə dɔʁ ply/', 'zhay tahⁿ duh tra-VAHY | kuh zhuh nuh dor PLÜ', ['tant-de', 'nom'], FCVDR),
  sent(1287, 'Elle parle si vite que je ne comprends rien.', 'She talks so fast that I do not understand a thing.', '/ɛl paʁl si vit kə ʒə nə kɔ̃.pʁɑ̃ ʁjɛ̃/', 'ehl parl see VEET | kuh zhuh nuh kohⁿ-prahⁿ RYEHⁿ', ['si-que', 'adverbe']),
  sent(1288, 'Il a tellement plu que le match a été annulé.', 'It rained so much that the match was cancelled.', '/i.la tɛl.mɑ̃ ply kə lə matʃ a e.te a.ny.le/', 'ee-la tehl-mahⁿ PLÜ | kuh luh match a ay-tay a-nü-LAY', ['tellement', 'verbe']),
  sent(1289, 'Le film était tellement long que je me suis endormi.', 'The film was so long that I fell asleep.', '/lə film e.tɛ tɛl.mɑ̃ lɔ̃ kə ʒə mə sɥi.zɑ̃.dɔʁ.mi/', 'luh feelm ay-teh tehl-mahⁿ LOHⁿ | kuh zhuh muh swee-zahⁿ-dor-MEE', ['tellement', 'adjectif']),
  sent(1290, 'Nous avons tant marché que nous avions mal aux pieds.', 'We walked so much that our feet hurt.', '/nu.za.vɔ̃ tɑ̃ maʁ.ʃe kə nu.za.vjɔ̃ mal o pje/', 'noo-za-vohⁿ tahⁿ mar-SHAY | kuh noo-za-vyohⁿ mal oh PYAY', ['tant', 'verbe']),
  sent(1291, "Il y a tant de bruit que je n'entends rien.", 'There is so much noise that I cannot hear anything.', '/il.ja tɑ̃ də bʁɥi kə ʒə nɑ̃.tɑ̃ ʁjɛ̃/', 'eel-ya tahⁿ duh BRWEE | kuh zhuh nahⁿ-tahⁿ RYEHⁿ', ['tant-de', 'nom']),
  sent(1292, "Si ou tellement devant l'adjectif, puis que : voilà la conséquence.", 'Si or tellement before the adjective, then que: there is the consequence.', '/si u tɛl.mɑ̃ də.vɑ̃ lad.ʒɛk.tif pɥi kə vwa.la la kɔ̃.se.kɑ̃s/', 'see oo tehl-mahⁿ duh-vahⁿ lad-zhehk-TEEF | pwee KUH | vwa-la la kohⁿ-say-KAHⁿS', ['rule', 'si-que'], ['flashcard'],
    rule('« Il faisait si froid ... le lac a gelé. » Quel mot manque ?', "que : si et tellement annoncent le que de la conséquence. Sans que, la phrase reste en l'air.")),
  sent(1293, 'Tellement de, tant de devant un nom, comme beaucoup de.', 'Tellement de, tant de before a noun, like beaucoup de.', '/tɛl.mɑ̃ də tɑ̃ də də.vɑ̃ œ̃ nɔ̃ kɔm bo.ku də/', 'tehl-mahⁿ DUH | tahⁿ DUH | duh-vahⁿ uhⁿ NOHⁿ | kom boh-koo DUH', ['rule', 'tellement-de'], ['flashcard'],
    rule('« Il y avait tellement ___ monde. »', "de : tellement de monde, tant de travail. Comme après beaucoup, jamais du ni des.")),
  sent(1294, "J'étais si fatigué que je me suis couché à huit heures.", 'I was so tired that I went to bed at eight.', '/ʒe.tɛ si fa.ti.ɡe kə ʒə mə sɥi ku.ʃe a ɥi.tœʁ/', 'zhay-teh see fa-tee-GAY | kuh zhuh muh swee koo-shay a wee-TUHR', ['si-que', 'adjectif']),
  sent(1295, "Elle a tellement ri qu'elle a pleuré.", 'She laughed so much that she cried.', '/ɛ.la tɛl.mɑ̃ ʁi kɛ.la plœ.ʁe/', 'eh-la tehl-mahⁿ REE | keh-la pluh-RAY', ['tellement', 'verbe'], FCVDR),
  sent(1296, "La file était si longue qu'on a abandonné.", 'The queue was so long that we gave up.', '/la fil e.tɛ si lɔ̃ɡ kɔ̃.na a.bɑ̃.dɔ.ne/', 'la feel ay-teh see LOHⁿG | kohⁿ-na a-bahⁿ-do-NAY', ['si-que', 'adjectif']),
  sent(1297, "Il y avait tellement de neige qu'on ne voyait plus la route.", 'There was so much snow that you could not see the road any more.', '/il.ja.vɛ tɛl.mɑ̃ də nɛʒ kɔ̃ nə vwa.jɛ ply la ʁut/', 'eel-ya-veh tehl-mahⁿ duh NEHZH | kohⁿ nuh vwa-yeh plü la ROOT', ['tellement-de', 'quebec']),
  phrase(1298, 'tellement ... que', 'so (much) ... that', '/tɛl.mɑ̃ kə/', 'tehl-mahⁿ ... KUH', ['tellement']),
  phrase(1299, 'si ... que', 'so ... that', '/si kə/', 'see ... KUH', ['si-que']),
  phrase(1300, 'tant de ... que', 'so much, so many ... that', '/tɑ̃ də kə/', 'tahⁿ duh ... KUH', ['tant-de']),
];

/* ── ACT 7 · C'EST POURQUOI, PAR CONSÉQUENT ─────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1301, "Le pont est fermé. C'est pourquoi nous passons par Lévis.", 'The bridge is closed. That is why we are going via Lévis.', '/lə pɔ̃ ɛ fɛʁ.me sɛ puʁ.kwa nu pa.sɔ̃ paʁ le.vis/', 'luh pohⁿ eh fehr-MAY | seh poor-KWA | noo pa-sohⁿ par lay-VEESS', ['cest-pourquoi', 'quebec'], FCVDR),
  sent(1302, 'Les prix ont augmenté ; par conséquent, nous changeons nos tarifs.', 'Prices have risen; consequently, we are changing our rates.', '/le pʁi ɔ̃.toɡ.mɑ̃.te paʁ kɔ̃.se.kɑ̃ nu ʃɑ̃.ʒɔ̃ no ta.ʁif/', 'lay pree ohⁿ-tog-mahⁿ-TAY | par kohⁿ-say-KAHⁿ | noo shahⁿ-zhohⁿ noh ta-REEF', ['par-consequent', 'ecrit'], FCVDR),
  sent(1303, "Il neigeait beaucoup, c'est pourquoi le vol a été annulé.", 'It was snowing hard, which is why the flight was cancelled.', '/il nɛ.ʒɛ bo.ku sɛ puʁ.kwa lə vɔl a e.te a.ny.le/', 'eel neh-zheh boh-KOO | seh poor-KWA | luh vol a ay-tay a-nü-LAY', ['cest-pourquoi']),
  sent(1304, 'Le bureau sera fermé lundi. Par conséquent, la réunion est reportée.', 'The office will be closed on Monday. Consequently, the meeting is postponed.', '/lə by.ʁo sə.ʁa fɛʁ.me lœ̃.di paʁ kɔ̃.se.kɑ̃ la ʁe.y.njɔ̃ ɛ ʁə.pɔʁ.te/', 'luh bü-roh suh-ra fehr-may luhⁿ-DEE | par kohⁿ-say-KAHⁿ | la ray-ü-nyohⁿ eh ruh-por-TAY', ['par-consequent', 'bureau'], FCVDR),
  sent(1305, "C'est pourquoi et par conséquent relient deux phrases : ils n'ouvrent pas de subordonnée.", 'C’est pourquoi and par conséquent join two sentences: they open no subordinate clause.', '/sɛ puʁ.kwa e paʁ kɔ̃.se.kɑ̃ ʁə.li dø fʁaz il nuvʁ pa də sy.bɔʁ.dɔ.ne/', 'seh poor-KWA ay par kohⁿ-say-KAHⁿ | ruh-lee deu FRAHZ | eel noovr pa duh sü-bor-do-NAY', ['rule', 'adverbe'], ['flashcard'],
    rule('Peut-on mettre un point juste avant c’est pourquoi ?', "Oui. Il ouvre souvent une nouvelle phrase. Si bien que, lui, reste dans la même phrase que sa cause.")),
  sent(1306, "Mon téléphone était déchargé. C'est pourquoi je ne t'ai pas répondu.", 'My phone was flat. That is why I did not answer you.', '/mɔ̃ te.le.fɔn e.tɛ de.ʃaʁ.ʒe sɛ puʁ.kwa ʒə nə te pa ʁe.pɔ̃.dy/', 'mohⁿ tay-lay-FONN ay-teh day-shar-ZHAY | seh poor-KWA | zhuh nuh tay pa ray-pohⁿ-DÜ', ['cest-pourquoi']),
  sent(1307, "Il n'y a pas assez d'inscrits. Par conséquent, l'atelier est annulé.", 'There are not enough people signed up. Consequently, the workshop is cancelled.', '/il nja pa.za.se dɛ̃s.kʁi paʁ kɔ̃.se.kɑ̃ la.tə.lje ɛ.ta.ny.le/', 'eel nya pa-za-say dehⁿs-KREE | par kohⁿ-say-KAHⁿ | la-tuh-lyay eh-ta-nü-LAY', ['par-consequent', 'ecrit']),
  sent(1308, "C'est pour ça que, c'est pourquoi, par conséquent : du plus familier au plus soutenu.", 'C’est pour ça que, c’est pourquoi, par conséquent: from most casual to most formal.', '/sɛ puʁ sa kə sɛ puʁ.kwa paʁ kɔ̃.se.kɑ̃ dy ply fa.mi.lje o ply su.tə.ny/', 'seh poor sa KUH | seh poor-KWA | par kohⁿ-say-KAHⁿ | dü plü fa-mee-LYAY | oh plü soo-tuh-NÜ', ['rule', 'registre'], ['flashcard'],
    rule('Dans un courriel à la direction, lequel choisis-tu ?', "Par conséquent : c'est le plus soutenu. Entre amis, c'est pour ça que.")),
  sent(1309, "La route était glacée, c'est pourquoi j'ai pris le train.", 'The road was icy, which is why I took the train.', '/la ʁut e.tɛ ɡla.se sɛ puʁ.kwa ʒe pʁi lə tʁɛ̃/', 'la root ay-teh gla-SAY | seh poor-KWA | zhay pree luh TREHⁿ', ['cest-pourquoi', 'quebec']),
  sent(1310, 'Nous avons reçu beaucoup de plaintes. Par conséquent, nous modifions l’horaire.', 'We have received a lot of complaints. Consequently, we are changing the timetable.', '/nu.za.vɔ̃ ʁə.sy bo.ku də plɛ̃t paʁ kɔ̃.se.kɑ̃ nu mɔ.di.fjɔ̃ lɔ.ʁɛʁ/', 'noo-za-vohⁿ ruh-sü boh-koo duh PLEHⁿT | par kohⁿ-say-KAHⁿ | noo mo-dee-fyohⁿ lo-REHR', ['par-consequent', 'ecrit']),
  phrase(1311, "c'est pourquoi", 'that is why', '/sɛ puʁ.kwa/', 'seh poor-KWA', ['cest-pourquoi']),
  phrase(1312, 'par conséquent', 'consequently, as a result', '/paʁ kɔ̃.se.kɑ̃/', 'par kohⁿ-say-KAHⁿ', ['par-consequent']),
  sent(1313, "Le chauffage est en panne ; c'est pourquoi les cours ont lieu en ligne.", 'The heating has broken down; that is why classes are online.', '/lə ʃo.faʒ ɛ.tɑ̃ pan sɛ puʁ.kwa le kuʁ ɔ̃ ljø ɑ̃ liɲ/', 'luh sho-fazh eh-tahⁿ PANN | seh poor-KWA | lay koor ohⁿ lyeu ahⁿ LEENY', ['cest-pourquoi']),
  sent(1314, "Je n'avais pas de réseau. C'est pour ça que je n'ai pas appelé.", 'I had no signal. That is why I did not call.', '/ʒə na.vɛ pa də ʁe.zo sɛ puʁ sa kə ʒə ne pa.za.pə.le/', 'zhuh na-veh pa duh ray-ZOH | seh poor sa kuh zhuh nay pa-za-puh-LAY', ['cest-pour-ca', 'oral'], FCVDR),
  sent(1315, 'Le fournisseur a augmenté ses prix. Par conséquent, nous en cherchons un autre.', 'The supplier has raised his prices. Consequently, we are looking for another.', '/lə fuʁ.ni.sœʁ a oɡ.mɑ̃.te se pʁi paʁ kɔ̃.se.kɑ̃ nu.zɑ̃ ʃɛʁ.ʃɔ̃ œ̃.notʁ/', 'luh foor-nee-SUHR a og-mahⁿ-tay say PREE | par kohⁿ-say-KAHⁿ | noo-zahⁿ shehr-shohⁿ uhⁿ-NOHTR', ['par-consequent', 'bureau']),
  phrase(1316, "c'est pour ça que", 'that is why (spoken)', '/sɛ puʁ sa kə/', 'seh poor sa KUH', ['cest-pour-ca', 'oral']),
];

/* ── ACT 8 · LE BUT, EN RAPPEL ──────────────────────────────────────────── *
 *  Purpose is b1.16's. The `contraste` rows carry a subjunctive, each cited
 *  to b1.16 on screen, and none is dictated. */

export const ACT8_ROWS: Row[] = [
  sent(1317, "J'ai appelé Karim pour lui expliquer le problème.", 'I called Karim to explain the problem to him.', '/ʒe a.pə.le ka.ʁim puʁ lɥi ɛk.spli.ke lə pʁɔ.blɛm/', 'zhay a-puh-lay ka-REEMM | poor lwee ehk-splee-kay luh pro-BLEM', ['but', 'pour'], FCVDR),
  sent(1318, 'Nous partons tôt pour éviter les bouchons.', 'We are leaving early to avoid the traffic jams.', '/nu paʁ.tɔ̃ to puʁ e.vi.te le bu.ʃɔ̃/', 'noo par-tohⁿ TOH | poor ay-vee-tay lay boo-SHOHⁿ', ['but', 'pour'], FCVDR),
  sent(1319, "Elle économise afin d'acheter une maison.", 'She is saving in order to buy a house.', '/ɛl e.kɔ.nɔ.miz a.fɛ̃ daʃ.te yn mɛ.zɔ̃/', 'ehl ay-ko-no-MEEZ | a-fehⁿ dash-tay ünn meh-ZOHⁿ', ['but', 'afin-de'], FCVDR),
  sent(1320, 'Je t’envoie le plan afin que tu trouves la salle.', 'I am sending you the map so that you find the room.', '/ʒə tɑ̃.vwa lə plɑ̃ a.fɛ̃ kə ty tʁuv la sal/', 'zhuh tahⁿ-vwa luh PLAHⁿ | a-fehⁿ kuh tü troov la SAL', ['but', 'contraste', 'subjonctif'], FVR),
  sent(1321, 'Je parle lentement pour que tout le monde comprenne.', 'I speak slowly so that everyone understands.', '/ʒə paʁl lɑ̃t.mɑ̃ puʁ kə tu lə mɔ̃d kɔ̃.pʁɛn/', 'zhuh parl lahⁿt-MAHⁿ | poor kuh too luh mohⁿd kohⁿ-PRENN', ['but', 'contraste', 'subjonctif'], FVR),
  sent(1322, 'Un sujet : pour et l’infinitif. Deux sujets : pour que et le subjonctif.', 'One subject: pour and the infinitive. Two subjects: pour que and the subjunctive.', '/œ̃ sy.ʒɛ puʁ e lɛ̃.fi.ni.tif dø sy.ʒɛ puʁ kə e lə syb.ʒɔ̃k.tif/', 'uhⁿ sü-ZHEH | poor ay lehⁿ-fee-nee-TEEF | deu sü-ZHEH | poor kuh ay luh süb-zhohⁿk-TEEF', ['rule', 'but'], ['flashcard'],
    rule('« Je t’écris ___ tu saches la vérité. » pour ou pour que ?', "pour que : deux sujets, je et tu. C'est la règle de la leçon 16 du B1, rappelée ici.")),
  sent(1323, 'Le but regarde devant ; la conséquence est déjà arrivée.', 'The aim looks ahead; the consequence has already happened.', '/lə byt ʁə.ɡaʁd də.vɑ̃ la kɔ̃.se.kɑ̃s ɛ de.ʒa a.ʁi.ve/', 'luh büt ruh-gard duh-VAHⁿ | la kohⁿ-say-kahⁿs eh day-zha a-ree-VAY', ['rule', 'but', 'consequence'], ['flashcard'],
    rule('« Elle a parlé fort, de sorte que tout le monde l’a entendue. » But ou résultat ?', "Résultat : « l'a entendue » est à l'indicatif, c'est arrivé.")),
  sent(1324, "J'ai ouvert la fenêtre pour aérer la pièce.", 'I opened the window to air the room.', '/ʒe u.vɛʁ la fə.nɛtʁ puʁ a.e.ʁe la pjɛs/', 'zhay oo-vehr la fuh-NEHTR | poor a-ay-ray la PYEHSS', ['but', 'pour']),
  sent(1325, 'Il a pris des notes afin de ne rien oublier.', 'He took notes so as not to forget anything.', '/i.la pʁi de nɔt a.fɛ̃ də nə ʁjɛ̃.nu.bli.je/', 'ee-la pree day NOT | a-fehⁿ duh nuh ryehⁿ-noo-blee-YAY', ['but', 'afin-de']),
  sent(1326, 'Je t’ai laissé les clés pour que tu puisses entrer.', 'I left you the keys so that you could get in.', '/ʒə te lɛ.se le kle puʁ kə ty pɥis ɑ̃.tʁe/', 'zhuh tay leh-say lay KLAY | poor kuh tü pweess ahⁿ-TRAY', ['but', 'contraste', 'subjonctif'], FVR),
  sent(1327, "Nous avons installé un chauffage d'appoint pour protéger les tuyaux.", 'We put in an extra heater to protect the pipes.', '/nu.za.vɔ̃.zɛ̃s.ta.le œ̃ ʃo.faʒ da.pwɛ̃ puʁ pʁɔ.te.ʒe le tɥi.jo/', 'noo-za-vohⁿ-zehⁿs-ta-lay uhⁿ sho-fazh da-PWEHⁿ | poor pro-tay-zhay lay twee-YOH', ['but', 'pour', 'quebec']),
  phrase(1328, 'pour + infinitif', 'in order to', '/puʁ/', 'POOR', ['but', 'pour']),
  phrase(1329, 'afin de', 'in order to (written)', '/a.fɛ̃ də/', 'a-fehⁿ DUH', ['but', 'afin-de']),
  sent(1330, 'Parle plus fort, de sorte que tout le monde t’entende.', 'Speak up, so that everyone hears you.', '/paʁl ply fɔʁ də sɔʁt kə tu lə mɔ̃d tɑ̃.tɑ̃d/', 'parl plü FOR | duh sort kuh too luh mohⁿd tahⁿ-TAHⁿD', ['but', 'contraste', 'subjonctif', 'de-sorte-que'], FVR),
  sent(1331, "Elle a parlé fort, de sorte que tout le monde l'a entendue.", 'She spoke loudly, so everyone heard her.', '/ɛ.la paʁ.le fɔʁ də sɔʁt kə tu lə mɔ̃d la ɑ̃.tɑ̃.dy/', 'eh-la par-lay FOR | duh sort kuh too luh mohⁿd la ahⁿ-tahⁿ-DÜ', ['consequence', 'de-sorte-que', 'indicatif'], FCVDR),
  sent(1332, "J'ai réservé une table pour fêter ta promotion.", 'I booked a table to celebrate your promotion.', '/ʒe ʁe.zɛʁ.ve yn tabl puʁ fɛ.te ta pʁɔ.mo.sjɔ̃/', 'zhay ray-zehr-vay ünn TABL | poor feh-tay ta pro-mo-SYOHⁿ', ['but', 'pour'], FCVDR),
];

/* ── ACT 9 · LE TEMPS : PENDANT QUE, DEPUIS QUE, LORSQUE, APRÈS QUE ─────── */

export const ACT9_ROWS: Row[] = [
  sent(1333, 'Pendant que tu cuisines, je mets la table.', 'While you cook, I will lay the table.', '/pɑ̃.dɑ̃ kə ty kɥi.zin ʒə mɛ la tabl/', 'pahⁿ-dahⁿ kuh tü kwee-ZEEN | zhuh meh la TABL', ['pendant', 'simultane'], FCVDR),
  sent(1334, 'Pendant que je dormais, le téléphone a sonné.', 'While I was asleep, the phone rang.', '/pɑ̃.dɑ̃ kə ʒə dɔʁ.mɛ lə te.le.fɔn a sɔ.ne/', 'pahⁿ-dahⁿ kuh zhuh dor-MEH | luh tay-lay-fonn a so-NAY', ['pendant', 'coupure']),
  sent(1335, "Depuis que j'habite à Montréal, je fais du vélo.", 'Since I have lived in Montréal, I have been cycling.', '/də.pɥi kə ʒa.bi.ta mɔ̃.ʁe.al ʒə fɛ dy ve.lo/', 'duh-pwee kuh zha-bee-ta mohⁿ-ray-AL | zhuh feh dü vay-LOH', ['depuis', 'quebec'], FCVDR),
  sent(1336, "Depuis qu'il a changé de travail, il est plus calme.", 'Since he changed jobs, he has been calmer.', '/də.pɥi ki.la ʃɑ̃.ʒe də tʁa.vaj i.lɛ ply kalm/', 'duh-pwee kee-la shahⁿ-zhay duh tra-VAHY | ee-leh plü KALM', ['depuis', 'elision']),
  sent(1337, 'Lorsque le train est arrivé, nous sommes montés.', 'When the train arrived, we got on.', '/lɔʁs.kə lə tʁɛ̃ ɛ.ta.ʁi.ve nu sɔm mɔ̃.te/', 'lors-kuh luh trehⁿ eh-ta-ree-VAY | noo som mohⁿ-TAY', ['lorsque', 'ecrit'], FCVDR),
  sent(1338, 'Lorsque vous recevrez la facture, payez en ligne.', 'When you receive the invoice, pay online.', '/lɔʁs.kə vu ʁə.sə.vʁe la fak.tyʁ pe.je ɑ̃ liɲ/', 'lors-kuh voo ruh-suh-vray la fak-TÜR | pay-yay ahⁿ LEENY', ['lorsque', 'futur', 'ecrit']),
  sent(1339, "Après qu'il est parti, nous avons fermé le bureau.", 'After he left, we closed the office.', '/a.pʁɛ ki.lɛ paʁ.ti nu.za.vɔ̃ fɛʁ.me lə by.ʁo/', 'a-preh kee-leh par-TEE | noo-za-vohⁿ fehr-may luh bü-ROH', ['apres-que', 'indicatif'], FCVDR),
  sent(1340, 'Après que tout le monde est sorti, le concierge a fermé la salle.', 'After everyone had gone out, the caretaker locked the hall.', '/a.pʁɛ kə tu lə mɔ̃d ɛ sɔʁ.ti lə kɔ̃.sjɛʁʒ a fɛʁ.me la sal/', 'a-preh kuh too luh mohⁿd eh sor-TEE | luh kohⁿ-syehrzh a fehr-may la SAL', ['apres-que', 'indicatif']),
  sent(1341, "Lorsque, c'est le quand de l'écrit.", 'Lorsque is the written quand.', '/lɔʁs.kə sɛ lə kɑ̃ də le.kʁi/', 'lors-KUH | seh luh kahⁿ duh lay-KREE', ['rule', 'lorsque'], ['flashcard'],
    rule('Dans un rapport, quand ou lorsque ?', "Les deux sont justes. Lorsque sonne plus écrit, plus soigné. À l'oral, quand.")),
  sent(1342, "Après que prend l'indicatif : ce qui suit est déjà arrivé.", 'Après que takes the indicative: what follows has already happened.', '/a.pʁɛ kə pʁɑ̃ lɛ̃.di.ka.tif sə ki sɥi ɛ de.ʒa a.ʁi.ve/', 'a-preh kuh prahⁿ lehⁿ-dee-ka-TEEF | suh kee swee eh day-zha a-ree-VAY', ['rule', 'apres-que'], ['flashcard'],
    rule('« Après qu’il ... parti » : est ou soit ?', "est, à l'indicatif, selon la règle. À l'oral, beaucoup disent soit, sous l'effet d'avant que : reconnais-le, et écris est.")),
  sent(1343, 'Depuis que dit le début d’une situation qui dure encore.', 'Depuis que gives the start of a situation that is still going on.', '/də.pɥi kə di lə de.by dyn si.tɥa.sjɔ̃ ki dyʁ ɑ̃.kɔʁ/', 'duh-pwee KUH | dee luh day-BÜ | dünn see-twa-syohⁿ kee dür ahⁿ-KOR', ['rule', 'depuis'], ['flashcard'],
    rule('« Depuis qu’il a changé de travail, il est plus calme. » Est-il encore calme aujourd’hui ?', "Oui. Depuis que marque le début, et la situation dure encore : il est, au présent.")),
  sent(1344, "Pendant que les invités mangeaient, l'orchestre jouait.", 'While the guests were eating, the band was playing.', '/pɑ̃.dɑ̃ kə le.zɛ̃.vi.te mɑ̃.ʒɛ lɔʁ.kɛstʁ ʒu.ɛ/', 'pahⁿ-dahⁿ kuh lay-zehⁿ-vee-tay mahⁿ-ZHEH | lor-kehstr zhoo-EH', ['pendant', 'simultane']),
  sent(1345, 'Depuis que le café a ouvert, la rue est plus animée.', 'Since the café opened, the street has been livelier.', '/də.pɥi kə lə ka.fe a u.vɛʁ la ʁy ɛ ply.za.ni.me/', 'duh-pwee kuh luh ka-fay a oo-VEHR | la rü eh plü-za-nee-MAY', ['depuis']),
  sent(1346, "Lorsqu'il fait beau, nous travaillons sur la terrasse.", 'When the weather is nice, we work on the terrace.', '/lɔʁs.kil fɛ bo nu tʁa.va.jɔ̃ syʁ la te.ʁas/', 'lors-keel feh BOH | noo tra-va-yohⁿ sür la teh-RASS', ['lorsque', 'elision']),
  phrase(1347, 'pendant que', 'while', '/pɑ̃.dɑ̃ kə/', 'pahⁿ-dahⁿ KUH', ['pendant']),
  phrase(1348, 'depuis que', 'since (in time)', '/də.pɥi kə/', 'duh-pwee KUH', ['depuis']),
  phrase(1349, 'lorsque', 'when (written)', '/lɔʁs.kə/', 'lors-KUH', ['lorsque']),
  sent(1350, 'Après que le client a signé, nous avons commandé les pièces.', 'After the client signed, we ordered the parts.', '/a.pʁɛ kə lə kli.jɑ̃ a si.ɲe nu.za.vɔ̃ kɔ.mɑ̃.de le pjɛs/', 'a-preh kuh luh klee-YAHⁿ a see-NYAY | noo-za-vohⁿ ko-mahⁿ-day lay PYEHSS', ['apres-que', 'indicatif', 'bureau']),
];

/* ── ACT 10 · LA CONJONCTION CHOISIT LE MODE, ET L'ORDRE ────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1351, 'Je reste parce que tu es là.', 'I am staying because you are here.', '/ʒə ʁɛst paʁs kə ty ɛ la/', 'zhuh REHST | pars kuh tü eh LA', ['mode', 'indicatif'], FCVDR),
  sent(1352, 'Je reste pour que tu sois moins seul.', 'I am staying so that you are less alone.', '/ʒə ʁɛst puʁ kə ty swa mwɛ̃ sœl/', 'zhuh REHST | poor kuh tü swa mwehⁿ SUHL', ['mode', 'contraste', 'subjonctif'], FVR),
  sent(1353, 'Puisque tu pars, je pars aussi.', 'Since you are leaving, I am leaving too.', '/pɥis.kə ty paʁ ʒə paʁ o.si/', 'pweess-kuh tü PAR | zhuh par oh-SEE', ['mode', 'indicatif', 'puisque']),
  sent(1354, "Bien qu'il pleuve, nous sortons.", 'Although it is raining, we are going out.', '/bjɛ̃ kil plœv nu sɔʁ.tɔ̃/', 'byehⁿ keel PLUHV | noo sor-TOHⁿ', ['mode', 'contraste', 'subjonctif', 'concession'], FVR),
  sent(1355, 'Avant que le client arrive, range la salle.', 'Before the client arrives, tidy the room.', '/a.vɑ̃ kə lə kli.jɑ̃ a.ʁiv ʁɑ̃ʒ la sal/', 'a-vahⁿ kuh luh klee-yahⁿ a-REEV | rahⁿzh la SAL', ['mode', 'contraste', 'subjonctif'], FVR),
  sent(1356, 'Pendant que tu es là, aide-moi à porter ça.', 'While you are here, help me carry this.', '/pɑ̃.dɑ̃ kə ty ɛ la ɛd.mwa a pɔʁ.te sa/', 'pahⁿ-dahⁿ kuh tü eh LA | ehd-mwa a por-tay SA', ['mode', 'indicatif', 'pendant']),
  sent(1357, 'Le mode ne dépend pas du verbe : il dépend de la conjonction.', 'The mood does not depend on the verb: it depends on the conjunction.', '/lə mɔd nə de.pɑ̃ pa dy vɛʁb il de.pɑ̃ də la kɔ̃.ʒɔ̃k.sjɔ̃/', 'luh mod nuh day-pahⁿ pa dü VEHRB | eel day-pahⁿ duh la kohⁿ-zhohⁿk-SYOHⁿ', ['rule', 'mode'], ['flashcard'],
    rule('« parce que » et « pour que » : laquelle demande le subjonctif ?', "pour que. Parce que, puisque, si bien que, pendant que : l'indicatif. Le verbe n'a rien à dire.")),
  sent(1358, 'Quand la subordonnée vient en premier, une virgule la sépare.', 'When the subordinate clause comes first, a comma separates it.', '/kɑ̃ la sy.bɔʁ.dɔ.ne vjɛ̃.tɑ̃ pʁə.mje yn viʁ.ɡyl la se.paʁ/', 'kahⁿ la sü-bor-do-nay vyehⁿ-tahⁿ pruh-MYAY | ünn veer-gül la say-PAR', ['rule', 'virgule'], ['flashcard'],
    rule('« Comme il pleuvait nous sommes restés. » Où va la virgule ?', "Après pleuvait : Comme il pleuvait, nous sommes restés.")),
  sent(1359, "Parce qu'il pleuvait, nous sommes restés.", 'Because it was raining, we stayed.', '/paʁs kil plø.vɛ nu sɔm ʁɛs.te/', 'pars keel pleu-VEH | noo som rehs-TAY', ['ordre', 'virgule']),
  sent(1360, "Nous sommes restés parce qu'il pleuvait.", 'We stayed because it was raining.', '/nu sɔm ʁɛs.te paʁs kil plø.vɛ/', 'noo som rehs-TAY | pars keel pleu-VEH', ['ordre'], FCVDR),
  sent(1361, 'La conséquence vient toujours après sa cause.', 'The consequence always comes after its cause.', '/la kɔ̃.se.kɑ̃s vjɛ̃ tu.ʒuʁ a.pʁɛ sa koz/', 'la kohⁿ-say-KAHⁿS | vyehⁿ too-zhoor a-preh sa KOHZ', ['rule', 'ordre'], ['flashcard'],
    rule('Peux-tu dire « Si bien que la rivière a débordé, il a plu » ?', "Non : si bien que, de sorte que et car restent en deuxième, après la cause. Comme, lui, reste en premier.")),
  sent(1362, "Comme le train avait du retard, j'ai pris un taxi.", 'As the train was late, I took a taxi.', '/kɔm lə tʁɛ̃ a.vɛ dy ʁə.taʁ ʒe pʁi œ̃ tak.si/', 'kom luh trehⁿ a-veh dü ruh-TAR | zhay pree uhⁿ tak-SEE', ['ordre', 'comme'], FCVDR),
  sent(1363, "J'ai pris un taxi parce que le train avait du retard.", 'I took a taxi because the train was late.', '/ʒe pʁi œ̃ tak.si paʁs kə lə tʁɛ̃ a.vɛ dy ʁə.taʁ/', 'zhay pree uhⁿ tak-SEE | pars kuh luh trehⁿ a-veh dü ruh-TAR', ['ordre', 'parce-que']),
  sent(1364, "Pendant que tu téléphonais, j'ai écrit le courriel.", 'While you were on the phone, I wrote the email.', '/pɑ̃.dɑ̃ kə ty te.le.fɔ.nɛ ʒe e.kʁi lə ku.ʁjɛl/', 'pahⁿ-dahⁿ kuh tü tay-lay-fo-NEH | zhay ay-kree luh koo-RYEHL', ['ordre', 'pendant', 'quebec']),
  sent(1365, "J'ai écrit le courriel pendant que tu téléphonais.", 'I wrote the email while you were on the phone.', '/ʒe e.kʁi lə ku.ʁjɛl pɑ̃.dɑ̃ kə ty te.le.fɔ.nɛ/', 'zhay ay-kree luh koo-RYEHL | pahⁿ-dahⁿ kuh tü tay-lay-fo-NEH', ['ordre', 'pendant']),
  sent(1366, "Il faut que tu partes, parce qu'il est tard.", 'You have to go, because it is late.', '/il fo kə ty paʁt paʁs ki.lɛ taʁ/', 'eel foh kuh tü PART | pars kee-leh TAR', ['mode', 'contraste', 'subjonctif'], FVR),
  sent(1367, 'Nous fermons plus tôt, puisque personne ne vient le soir.', 'We are closing earlier, since nobody comes in the evening.', '/nu fɛʁ.mɔ̃ ply to pɥis.kə pɛʁ.sɔn nə vjɛ̃ lə swaʁ/', 'noo fehr-mohⁿ plü TOH | pweess-kuh pehr-sonn nuh vyehⁿ luh SWAR', ['ordre', 'puisque']),
  phrase(1368, "l'indicatif", 'the indicative (the mood of facts)', '/lɛ̃.di.ka.tif/', 'lehⁿ-dee-ka-TEEF', ['mode']),
];

/* ── ACT 11 · EXPLIQUER UN INCIDENT ─────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1369, 'Le concert a commencé avec une heure de retard.', 'The concert started an hour late.', '/lə kɔ̃.sɛʁ a kɔ.mɑ̃.se a.vɛ.kyn œʁ də ʁə.taʁ/', 'luh kohⁿ-SEHR | a ko-mahⁿ-say a-veh-künn uhr duh ruh-TAR', ['incident'], FCVDR),
  sent(1370, 'Le retard est dû à une panne de courant.', 'The delay is due to a power cut.', '/lə ʁə.taʁ ɛ dy a yn pan də ku.ʁɑ̃/', 'luh ruh-TAR | eh dü a ünn pann duh koo-RAHⁿ', ['incident', 'cause-nom', 'ecrit'], FCVDR),
  sent(1371, "La panne a eu lieu parce qu'un orage a touché le quartier.", 'The power cut happened because a storm hit the area.', '/la pan a y ljø paʁs kœ̃.nɔ.ʁaʒ a tu.ʃe lə kaʁ.tje/', 'la pann a ü LYEU | pars kuhⁿ-no-razh a too-shay luh kar-TYAY', ['incident', 'parce-que']),
  sent(1372, 'Comme le générateur ne démarrait pas, nous avons appelé un électricien.', 'As the generator would not start, we called an electrician.', '/kɔm lə ʒe.ne.ʁa.tœʁ nə de.ma.ʁɛ pa nu.za.vɔ̃.za.pə.le œ̃.ne.lɛk.tʁi.sjɛ̃/', 'kom luh zhay-nay-ra-tuhr nuh day-ma-reh PA | noo-za-vohⁿ-za-puh-lay uhⁿ-nay-lehk-tree-SYEHⁿ', ['incident', 'comme'], FCVDR),
  sent(1373, 'Nous avons ouvert les portes plus tard, si bien que la file a bloqué la rue.', 'We opened the doors later, so the queue blocked the street.', '/nu.za.vɔ̃.zu.vɛʁ le pɔʁt ply taʁ si bjɛ̃ kə la fil a blɔ.ke la ʁy/', 'noo-za-vohⁿ-zoo-vehr lay port plü TAR | see byehⁿ kuh la feel a blo-kay la RÜ', ['incident', 'si-bien-que']),
  sent(1374, "Il faisait tellement chaud dans la salle que nous avons distribué de l'eau.", 'It was so hot in the hall that we handed out water.', '/il fə.zɛ tɛl.mɑ̃ ʃo dɑ̃ la sal kə nu.za.vɔ̃ dis.tʁi.bɥe də lo/', 'eel fuh-zeh tehl-mahⁿ SHOH dahⁿ la SAL | kuh noo-za-vohⁿ dees-tree-bway duh LOH', ['incident', 'tellement']),
  sent(1375, 'Par conséquent, nous avons remboursé une partie des billets.', 'Consequently, we refunded some of the tickets.', '/paʁ kɔ̃.se.kɑ̃ nu.za.vɔ̃ ʁɑ̃.buʁ.se yn paʁ.ti de bi.jɛ/', 'par kohⁿ-say-KAHⁿ | noo-za-vohⁿ rahⁿ-boor-say ünn par-tee day bee-YEH', ['incident', 'par-consequent'], FCVDR),
  sent(1376, 'Pour éviter un nouveau problème, nous allons louer un deuxième générateur.', 'To avoid another problem, we are going to hire a second generator.', '/puʁ e.vi.te œ̃ nu.vo pʁɔ.blɛm nu.za.lɔ̃ lu.e œ̃ dø.zjɛm ʒe.ne.ʁa.tœʁ/', 'poor ay-vee-tay uhⁿ noo-voh pro-BLEM | noo-za-lohⁿ loo-ay uhⁿ deu-zyem zhay-nay-ra-TUHR', ['incident', 'but'], FCVDR),
  sent(1377, "Grâce aux bénévoles, personne n'a été blessé.", 'Thanks to the volunteers, nobody was hurt.', '/ɡʁɑ.so be.ne.vɔl pɛʁ.sɔn na e.te blɛ.se/', 'gra-soh bay-nay-VOL | pehr-sonn na ay-tay bleh-SAY', ['incident', 'grace-a']),
  sent(1378, "Je vous écris pour vous expliquer ce qui s'est passé.", 'I am writing to explain to you what happened.', '/ʒə vu.ze.kʁi puʁ vu.zɛk.spli.ke sə ki sɛ pa.se/', 'zhuh voo-zay-KREE | poor voo-zehk-splee-kay suh kee seh pa-SAY', ['incident', 'but', 'ecrit'], FCVDR),
  sent(1379, 'Cet incident a deux causes.', 'This incident has two causes.', '/sɛ.tɛ̃.si.dɑ̃ a dø koz/', 'seh-tehⁿ-see-DAHⁿ | a deu KOHZ', ['incident', 'plan']),
  sent(1380, "C'est pourquoi nous avons décidé de changer de fournisseur.", 'That is why we decided to change supplier.', '/sɛ puʁ.kwa nu.za.vɔ̃ de.si.de də ʃɑ̃.ʒe də fuʁ.ni.sœʁ/', 'seh poor-KWA | noo-za-vohⁿ day-see-day duh shahⁿ-zhay duh foor-nee-SUHR', ['incident', 'cest-pourquoi']),
  sent(1381, 'Une bonne explication donne les causes, puis les conséquences, puis le but.', 'A good explanation gives the causes, then the consequences, then the aim.', '/yn bɔ.nɛk.spli.ka.sjɔ̃ dɔn le koz pɥi le kɔ̃.se.kɑ̃s pɥi lə byt/', 'ünn bo-nehk-splee-ka-SYOHⁿ | donn lay KOHZ | pwee lay kohⁿ-say-KAHⁿS | pwee luh BÜT', ['rule', 'plan'], ['flashcard'],
    rule('Dans quel ordre expliques-tu un incident ?', "Ce qui s'est passé, pourquoi, ce qui a suivi, puis ce que tu fais pour la suite.")),
  sent(1382, 'Nous avons pris cette décision parce que la sécurité passe avant tout.', 'We made this decision because safety comes first.', '/nu.za.vɔ̃ pʁi sɛt de.si.zjɔ̃ paʁs kə la se.ky.ʁi.te pas a.vɑ̃ tu/', 'noo-za-vohⁿ pree seht day-see-ZYOHⁿ | pars kuh la say-kü-ree-tay pass a-vahⁿ TOO', ['decision', 'parce-que'], FCVDR),
  sent(1383, 'Afin de rassurer le public, nous avons publié un message.', 'In order to reassure the public, we posted a message.', '/a.fɛ̃ də ʁa.sy.ʁe lə py.blik nu.za.vɔ̃ py.bli.je œ̃ mɛ.saʒ/', 'a-fehⁿ duh ra-sü-ray luh pü-BLEEK | noo-za-vohⁿ pü-blee-yay uhⁿ meh-SAZH', ['incident', 'afin-de', 'ecrit']),
  sent(1384, 'Le technicien est arrivé à neuf heures, de sorte que le concert a pu reprendre.', 'The technician arrived at nine, so the concert was able to start again.', '/lə tɛk.ni.sjɛ̃ ɛ.ta.ʁi.ve a nœ.vœʁ də sɔʁt kə lə kɔ̃.sɛʁ a py ʁə.pʁɑ̃dʁ/', 'luh tehk-nee-syehⁿ eh-ta-ree-vay a nuh-VUHR | duh sort kuh luh kohⁿ-sehr a pü ruh-PRAHⁿDR', ['incident', 'de-sorte-que']),
  sent(1385, 'Nous regrettons ce retard et vous remercions de votre patience.', 'We are sorry for the delay and thank you for your patience.', '/nu ʁə.ɡʁɛ.tɔ̃ sə ʁə.taʁ e vu ʁə.mɛʁ.sjɔ̃ də vɔtʁ pa.sjɑ̃s/', 'noo ruh-greh-tohⁿ suh ruh-TAR | ay voo ruh-mehr-syohⁿ duh votr pa-SYAHⁿS', ['incident', 'formule', 'ecrit']),
  phrase(1386, 'la cause', 'the cause', '/la koz/', 'la KOHZ', ['plan']),
  phrase(1387, 'la conséquence', 'the consequence', '/la kɔ̃.se.kɑ̃s/', 'la kohⁿ-say-KAHⁿS', ['plan']),
  phrase(1388, 'le but', 'the aim, the purpose', '/lə byt/', 'luh BÜT', ['plan']),
  sent(1389, 'Nous avons annulé la sortie à cause du verglas.', 'We cancelled the outing because of the black ice.', '/nu.za.vɔ̃.za.ny.le la sɔʁ.ti a koz dy vɛʁ.ɡla/', 'noo-za-vohⁿ-za-nü-lay la sor-TEE | a kohz dü vehr-GLA', ['decision', 'cause-nom', 'quebec'], FCVDR),
  sent(1390, 'Nous avons choisi cette salle parce qu’elle est près du métro.', 'We chose this hall because it is near the metro.', '/nu.za.vɔ̃ ʃwa.zi sɛt sal paʁs kɛ.lɛ pʁɛ dy me.tʁo/', 'noo-za-vohⁿ shwa-zee seht SAL | pars keh-leh preh dü may-TROH', ['decision', 'parce-que']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 *  .1200-.1390 used (191 rows); .1391-.1399 left free inside the block.
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

export const DICTEE_IDS = ALL_ROWS.filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS AND THEIR KEYS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: Karim's email about a late delivery. About 140 words. */
export const RAPPORT_TEXT =
  "Bonjour Madame Lavoie, voici pourquoi le matériel du congrès est arrivé avec un jour de retard. Le camion a quitté Québec jeudi matin, mais il est tombé en panne près de Drummondville parce que le moteur a trop chauffé. Comme le garage du village était fermé, le chauffeur a attendu la dépanneuse pendant trois heures. Pendant qu'il attendait, il a neigé si fort que l'autoroute a été fermée. À cause de la tempête, il a dormi à l'hôtel, si bien que la livraison n'est arrivée que vendredi midi. Grâce aux bénévoles, nous avons installé la salle en deux heures. C'est pourquoi la conférence a commencé à quatorze heures au lieu de dix heures. Pour éviter ce problème l'an prochain, je propose de livrer le matériel deux jours avant l'événement. Bonne journée, Karim";

/** The links in RAPPORT_TEXT, in order. The act 1 drill and quiz use it. */
export const RAPPORT_LIENS = [
  'parce que (cause)', 'comme (cause, en tête)', 'pendant que (temps)', 'si ... que (conséquence)',
  'à cause de (cause, nom)', 'si bien que (conséquence)', 'grâce aux (cause positive, nom)',
  "c'est pourquoi (conséquence, nouvelle phrase)", 'pour (but)',
] as const;

/** Act 4: a radio bulletin in Québec City after an ice storm. About 115 words. */
export const BULLETIN_TEXT =
  "Bulletin de sept heures. La tempête de cette nuit cause encore des problèmes ce matin. À cause du verglas, l'autoroute est fermée entre Québec et Lévis, et les autobus ont une heure de retard. Plusieurs écoles restent fermées en raison des pannes de courant. Dans le quartier Limoilou, quatre cents maisons n'ont plus d'électricité à cause d'un arbre tombé sur une ligne. Heureusement, grâce aux équipes de la ville, le courant est déjà revenu dans le Vieux-Québec. Grâce à la radio du quartier, les familles savent où trouver une salle chauffée. La ville demande aux automobilistes de rester chez eux, parce que les routes sont très glissantes.";

/** Act 7: a notice to tenants in a Lausanne building. About 115 words. */
export const AVIS_TEXT =
  "Avis aux locataires. Des travaux de rénovation commencent dans l'immeuble le lundi 3 mars. Par conséquent, l'ascenseur sera hors service pendant deux semaines. Le chauffage sera coupé le mardi matin ; c'est pourquoi nous vous conseillons de fermer vos fenêtres la veille. Les ouvriers arriveront à sept heures, si bien que le bruit commencera tôt. Comme la cour sera occupée par le matériel, les vélos devront rester à la cave. Nous savons que ces travaux sont gênants. Par conséquent, le loyer de mars sera réduit de dix pour cent. Pour toute question, adressez-vous à la gérance. Merci de votre compréhension.";

/** Act 11: the model the learner imitates. Karim's incident report, about
 *  125 words in the body: two causes, two consequences, one purpose, and
 *  no subjunctive. */
export const INCIDENT_TEXT =
  "Madame Lavoie, je vous écris pour vous expliquer ce qui s'est passé samedi au concert du parc Jarry. Le concert a commencé avec une heure de retard, et cet incident a deux causes. D'abord, un orage a touché le quartier vers dix-huit heures, si bien que le courant a été coupé sur toute la scène. Ensuite, comme le générateur de secours ne démarrait pas, nous avons dû attendre un électricien. Il faisait tellement chaud sous la tente que nous avons distribué de l'eau au public. Grâce aux bénévoles, personne n'a été blessé. Par conséquent, nous avons remboursé la moitié des billets aux personnes qui sont parties. Pour éviter ce problème à l'avenir, nous allons louer un deuxième générateur. Cordialement, Karim";

/** The four moves the model makes, in order, for the task checklist. */
export const INCIDENT_MOVES = [
  'le cadre : quoi, où, quand',
  'les causes, au moins deux : parce que, comme, à cause de',
  'les conséquences, au moins deux : si bien que, tellement ... que, par conséquent',
  'le but : pour ou afin de, avec un infinitif',
] as const;
