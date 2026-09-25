// b1.18.l1 « La voix passive » — the authored corpus, the imports and the
// citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top of
// B1-BUILD-PLAYBOOK.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE PASSIVE AS WHAT FRENCH ACTUALLY DOES, NOT AS A TRANSFORMATION DRILL.
//
//     le passif      être + participe passé, the participle agreeing with
//                    the subject: la lettre est écrite, les documents sont
//                    envoyés
//     les temps      être carries the tense: est fermé, a été fermé, était
//                    fermé, sera fermé, serait fermé
//     par + agent    allowed, and usually left out
//     on             the everyday alternative, and the first thing a French
//                    speaker reaches for out loud
//     se faire       se faire + infinitif, for what happens TO you
//     ça se dit      the pronominal passive, for what is generally done
//     la consigne    where the passive really lives: notices, rules,
//                    procedures, news and official language
//     donner à       the trap that defines the lesson for an anglophone:
//                    French has no passive with the person as subject
//
//   Act by act: the notice-board voice (1), the form and its agreement (2),
//   être across five tenses (3), par and why it is usually absent (4), where
//   the passive lives (5), on as the spoken reflex (6), se faire (7), the
//   pronominal passive (8), the English indirect-object trap (9), choosing
//   between the four tools (10), writing a set of procedures (11).
//
//   NOT OWNED: past participle FORMATION, which is a2.20's and is assumed
//   throughout; agreement after être, which is a2.21's and is quoted; the
//   subjunctive, which is b1.14 to b1.16's and is kept out of every authored
//   French string here; reported speech, which is b1.19's.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `faits-et-procedures` (« Les faits et les procédures », domain
//     fondations, levelRange a2-b2) WAS CREATED FOR THIS LESSON ON
//     2026-09-25, because no existing theme fitted: `verbes` is the most
//     crowded in the corpus (870 rows, highest number 833) and
//     `connecteurs-logiques` is the wrong meaning. Its sub-themes are: la
//     voix passive, on et se faire, les avis et les consignes.
//
//     IT EXISTS IN POSTGRES ONLY. It is NOT in `seed.json`'s theme list
//     (verified 2026-09-25: 130 themes, none of them this one) and it arrives
//     there at the next publish. So a readiness run WILL warn that the theme
//     is not in the seed's theme list. THAT WARNING IS EXPECTED AND IS NOT A
//     DEFECT. It also means the theme currently holds ZERO rows, in the seed
//     and in Postgres alike.
//
//  2. ID BLOCK: this lesson owns `.1000`-`.1199` AND NOTHING ELSE. Authored
//     b1 ids start at 1000 in every theme by house rule, even in an empty
//     one, so `.001`-`.999` stays free for a future published import. Used
//     here: `.1000`-`.1192`, in eleven act blocks with a gap between each.
//     173 rows.
//
//  3. THE SEED HOLDS ALMOST NO PASSIVE. Probed 2026-09-25 across all 11,209
//     seed items: two rows carry `par` + an agent-shaped phrase and both are
//     `par la poste` (a means, not an agent), and NOT ONE row carries
//     `se faire` + infinitif. So acts 4 and 7 author their rows outright.
//     This is the log's standing "DB-only rows cannot be reused, so lessons
//     author twins" item: re-probe Postgres at import.
//
//  4. Every reused id in §F was read out of seed.json on 2026-09-25 and its
//     `fr` is copied verbatim wherever a section prints it, through `src()`.
//
//  5. NO RESPELLING HERE IS SPELLED FOR THE CHECKER RATHER THAN THE EAR.
//     Measured 2026-09-25 against `hasPlainNasalFor` (density.logic.ts): zero
//     of the 173 rows are flagged, so a2.34's doubling trick (`PLENN`,
//     `TRAMM`) was not needed once and no row here trades the ear for a
//     validator. That is luck rather than skill: this lesson's vocabulary
//     happens to avoid a single closing N or M after a lone vowel. No U+203F
//     tie anywhere either, in a respelling OR in an IPA field: a liaison
//     consonant simply moves onto the next syllable (« eh-ta-ree-VAY »).
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
  id: 'b1.18',
  seq: 18,
  title: 'The Passive Voice',
  sub: 'La voix passive',
  canDo: 'Can read and write the passive of notices, rules, procedures and news, and can choose between the passive, on, se faire and the pronominal passive when speaking',
  prereqUnitIds: ['b1.05', 'b1.08'],
} as const;

export const LESSON_ID = 'b1.18.l1';
export const THEME = 'faits-et-procedures';
export const LEVEL = 'b1' as const;

/** ONE block, by the house rule for a theme with no published import yet. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A2 citations use the house English trail label (« lesson 17 in A2 »),
 *  resolved through `unitRef` from the shipped `unit.seq`, never typed and
 *  never the raw id. b1.* units are not in the seed yet, so they are labelled
 *  in French from the plan until they are.
 * ══════════════════════════════════════════════════════════════════════════ */

export const PARTICIPLE_UNIT = 'a2.20';
export const PC_AVOIR_UNIT = 'a2.05';
export const PC_ETRE_UNIT = 'a2.21';
export const PRONOMINAL_UNIT = 'a2.22';
export const PRONOMINAL_PC_UNIT = 'a2.23';
export const AGREEMENT_UNIT = 'a2.03';
export const DIRECT_OBJ_UNIT = 'a2.06';
export const IMP_USE_UNIT = 'b1.02';
export const PC_IMPARFAIT_UNIT = 'b1.03';
export const FUTUR_UNIT = 'b1.05';
export const CONDITIONNEL_UNIT = 'b1.08';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13, 'b1.14': 14, 'b1.15': 15, 'b1.16': 16, 'b1.17': 17, 'b1.18': 18,
  'b1.19': 19,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const PARTICIPLE_REF = unitRef(PARTICIPLE_UNIT);
export const PC_AVOIR_REF = unitRef(PC_AVOIR_UNIT);
export const PC_ETRE_REF = unitRef(PC_ETRE_UNIT);
export const PRONOMINAL_PC_REF = unitRef(PRONOMINAL_PC_UNIT);
export const AGREEMENT_REF = unitRef(AGREEMENT_UNIT);
export const FUTUR_REF = refFr(FUTUR_UNIT);
export const CONDITIONNEL_REF = refFr(CONDITIONNEL_UNIT);
export const PC_IMPARFAIT_REF = refFr(PC_IMPARFAIT_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED
 *
 *  The A2 lines are English (A2 is taught in English) and every screen that
 *  shows one follows it with the French rendering below. The b1.05 and b1.08
 *  lines are already French and are quoted as they stand.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as A220_REFRAME } from '../participes-corpus.ts';
export { REFRAME as A221_REFRAME } from '../passe-compose-etre-corpus.ts';
export { REFRAME as A205_REFRAME } from '../passe-compose-corpus.ts';
export { REFRAME as A223_REFRAME } from '../pronominaux-passe-corpus.ts';
export { REFRAME as B105_REFRAME } from './futur-simple-corpus.ts';
export { REFRAME as B108_REFRAME } from './conditionnel-present-corpus.ts';

/** b1.03's rendering, kept byte-identical so two lessons do not gloss one
 *  A2 line two different ways. */
export const A221_REFRAME_FR = 'Après être, le deuxième mot finit comme un adjectif.';
export const A220_REFRAME_FR = 'Ne construis pas ces participes. Cherche le groupe du verbe.';
export const A205_REFRAME_FR = 'Un verbe, deux mots, et les petits mots vont au milieu.';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE NOTICE AND THE MOUTH. A passive sentence is what a sign, a rule, a
 *  procedure or a news bulletin says, because none of them cares who did it.
 *  A speaker cares, so a speaker says « on ». The whole lesson is one
 *  question asked at the moment of speaking: am I a notice, or a mouth?
 *
 *  It is NOT « avoid the passive ». Acts 3 to 5 exist because the passive is
 *  the right and normal form in written French, and a learner who cannot read
 *  « Le magasin sera fermé » cannot read a door.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Le passif est sur l'affiche. Dans ta bouche, c'est on.";
export const REFRAME_EN = 'The passive belongs on the notice. In your mouth, it is on.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: "Être plus le participe passé, et le participe s'accorde avec le sujet.",
    why: "The FORM, not a reframe. Act 1 exists to show a learner who already has the form and still produces notice-board French, so a reframe made of the form cannot fix the thing the lesson is about. It also says nothing about « on », which is half of what this lesson owns.",
  },
  {
    text: 'En français, on évite le passif.',
    why: "False where acts 3, 5 and 11 have to hold: notices, rules, procedures and news use it constantly, and the task is to WRITE a set of procedures. A learner who believes this cannot read a door or a règlement.",
  },
  {
    text: "Le passif, c'est quand le sujet ne fait rien.",
    why: "A definition of itself, and it does not survive act 9. « Je suis donné un livre » also has a subject that does nothing, and it is impossible in French. A reframe that licenses the lesson's central error is worse than none.",
  },
  {
    text: "Qui a fait ça ? Si tu le sais, dis on.",
    why: "The best TEST in the lesson, and it is kept as one (act 6 and sheet-on). As a reframe it is a question plus an instruction, and it is false for « La tour a été construite par mille ouvriers », where the doer is known and named and the passive is right.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-25 and its French is in the
 *  trailing comment, so a reader never has to open seed.json. `namedOnly`
 *  rows carry no `flashcard` drill, so no deckTranche can release them: they
 *  are reachable by being named in a section or a drill. `NOT_SPEAKABLE`
 *  additionally lists the rows with no `voiceflash`, which a `practice` speak
 *  section may never name.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a2.deplacements.002',      // Cette station est fermée pour travaux.  (named only)
    'fr.a2.internet.041',          // Le site internet est fermé pour maintenance.
  ],
  act2: [
    'fr.a2.hebergement.112',       // Le petit déjeuner est servi de sept heures à dix heures.
    'fr.a2.hebergement.113',       // Le petit déjeuner est servi au rez-de-chaussée.
  ],
  act3: [
    'fr.b1.connecteurs-logiques.010', // Le vol a été annulé car les conditions météo étaient trop mauvaises.  (named only)
    'fr.a2.cuisine.049',           // Nous allons manger au restaurant parce que la cuisine est fermée.
  ],
  act4: [] as string[],            // §A.3: the seed carries no par + agent row.
  act5: [
    'fr.b1.droit.002',             // Il est interdit de stationner ici sans autorisation.
    'fr.b1.hebergement.005',       // Si la réception est fermée, il faut appeler ce numéro pour obtenir les clés.
    'fr.a2.au-restaurant.163',     // Le service est compris.
    'fr.a2.hebergement.006',       // Le petit déjeuner est compris dans le prix.
  ],
  act6: [
    'fr.a2.verbes.243',            // On vend des billets ici.
    'fr.a2.au-restaurant.188',     // On ferme la cuisine dans dix minutes.
    'fr.a2.la-ville.003',          // On construit une nouvelle station de métro près d'ici.  (named only)
    'fr.a2.salutations.060',       // On dit toujours bonjour en entrant dans le bureau.  (named only)
  ],
  act7: [
    'fr.a2.corps.006',             // Elle s'est fait mal au genou en courant.
  ],
  act8: [
    'fr.a2.les-fetes.004',         // On se déguise souvent pour le carnaval de février.
    'fr.a2.verbes.723',            // Il se lave.
  ],
  act9: [
    'fr.a2.verbes.122',            // On donne son adresse à l'agent.
  ],
  act10: [
    'fr.b1.maison.064',            // Nous cherchons un appartement où les charges sont incluses.  (named only)
    'fr.a2.verbes.404',            // On peut nager ici.
  ],
  act11: [
    'fr.b1.questions-sociales.003', // On parle souvent des discriminations au travail.  (named only)
    'fr.a2.au-restaurant.003',     // Est-ce que le service est compris dans l'addition ?  (named only)
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.a2.deplacements.002',         // dictation
  'fr.b1.connecteurs-logiques.010', // dictation
  'fr.a2.la-ville.003',             // dictation
  'fr.a2.salutations.060',          // dictation
  'fr.b1.maison.064',               // dictation
  'fr.b1.questions-sociales.003',   // dictation
  'fr.a2.au-restaurant.003',        // dictation
];

/** No `voiceflash` either: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.a2.internet.041',   // sentence, flashcard, review
  'fr.a2.cuisine.049',    // sentence, flashcard, review
  'fr.b1.droit.002',      // sentence, flashcard, review
  'fr.b1.hebergement.005', // sentence, flashcard, review
  'fr.a2.hebergement.006', // flashcard
  'fr.a2.corps.006',      // sentence, flashcard, review
  'fr.a2.les-fetes.004',  // sentence, flashcard, review
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the last stressed syllable of
 *  each group in caps, ü for French u, nasals closed with the superscript ⁿ,
 *  and NO U+203F tie. See §A.5 for the two respellings spelled for the nasal
 *  checker rather than for the ear.
 *
 *  AGREEMENT IS THE POINT OF THIS CORPUS, so the rows carry the four shapes
 *  on purpose: `accord-m`, `accord-f`, `accord-mp`, `accord-fp`. They differ
 *  by LETTERS (envoyé / envoyée / envoyés / envoyées), never by an accent, so
 *  `fold()` can still tell them apart in a typed answer.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['voix-passive'], ...extra,
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

/* ── ACT 1 · L'AFFICHE ET LA BOUCHE ─────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, 'La salle a été réservée par le directeur.', 'The room was booked by the director.', '/la sal a e.te ʁe.zɛʁ.ve paʁ lə di.ʁɛk.tœʁ/', 'la SAL a ay-tay ray-zehr-VAY par luh dee-rehk-TUHR', ['scene', 'passif', 'agent'], FCVDR),
  sent(1001, 'On a réservé la salle.', 'Someone booked the room.', '/ɔ̃.na ʁe.zɛʁ.ve la sal/', 'ohⁿ-na ray-zehr-VAY la SAL', ['scene', 'on'], FCVDR),
  sent(1002, "L'ascenseur a été réparé ce matin.", 'The lift was repaired this morning.', '/la.sɑ̃.sœʁ a e.te ʁe.pa.ʁe sə ma.tɛ̃/', 'la-sahⁿ-SUHR a ay-tay ray-pa-RAY suh ma-TEHⁿ', ['scene', 'passif', 'passe-compose']),
  sent(1003, "On a réparé l'ascenseur ce matin.", 'They repaired the lift this morning.', '/ɔ̃.na ʁe.pa.ʁe la.sɑ̃.sœʁ sə ma.tɛ̃/', 'ohⁿ-na ray-pa-RAY la-sahⁿ-SUHR suh ma-TEHⁿ', ['scene', 'on']),
  sent(1004, 'Le bureau sera fermé lundi.', 'The office will be closed on Monday.', '/lə by.ʁo sə.ʁa fɛʁ.me lœ̃.di/', 'luh bü-ROH suh-ra fehr-MAY luhⁿ-DEE', ['scene', 'passif', 'futur'], FCVDR),
  sent(1005, 'Les documents ont été envoyés hier.', 'The documents were sent yesterday.', '/le dɔ.ky.mɑ̃.zɔ̃.te.te ɑ̃.vwa.je jɛʁ/', 'lay do-kü-mahⁿ-zohⁿ-tay-tay ahⁿ-vwa-YAY YEHR', ['scene', 'passif', 'accord-mp']),
  sent(1006, REFRAME, REFRAME_EN, '/lə pa.sif ɛ syʁ la.fiʃ dɑ̃ ta buʃ sɛ ɔ̃/', 'luh pa-SEEF eh sür la-FEESH dahⁿ ta BOOSH seh OHⁿ', ['rule', 'reframe'], ['flashcard'],
    rule("Le passif ou « on » : lequel va sur une affiche, lequel va dans ta bouche ?", "Ex : Le magasin sera fermé lundi (l'affiche). On ferme lundi (la bouche).")),
  sent(1007, 'Le colis a été livré devant la porte.', 'The parcel was delivered at the door.', '/lə kɔ.li a e.te li.vʁe də.vɑ̃ la pɔʁt/', 'luh ko-LEE a ay-tay lee-VRAY duh-vahⁿ la PORT', ['scene', 'passif']),
  sent(1008, 'On a livré le colis devant la porte.', 'They delivered the parcel at the door.', '/ɔ̃.na li.vʁe lə kɔ.li də.vɑ̃ la pɔʁt/', 'ohⁿ-na lee-VRAY luh ko-LEE duh-vahⁿ la PORT', ['scene', 'on']),
  sent(1009, 'La réunion a été annulée.', 'The meeting was cancelled.', '/la ʁe.y.njɔ̃ a e.te a.ny.le/', 'la ray-ü-NYOHⁿ a ay-tay a-nü-LAY', ['scene', 'passif', 'accord-f'], FCVDR),
  sent(1010, 'On a annulé la réunion.', 'They cancelled the meeting.', '/ɔ̃.na a.ny.le la ʁe.y.njɔ̃/', 'ohⁿ-na a-nü-LAY la ray-ü-NYOHⁿ', ['scene', 'on']),
  sent(1011, 'Le magasin est fermé le dimanche.', 'The shop is closed on Sundays.', '/lə ma.ɡa.zɛ̃ ɛ fɛʁ.me lə di.mɑ̃ʃ/', 'luh ma-ga-ZEHⁿ eh fehr-MAY luh dee-MAHⁿSH', ['affiche', 'passif'], FCVDR),
  sent(1012, 'Cette place est réservée aux personnes âgées.', 'This seat is reserved for elderly passengers.', '/sɛt plas ɛ ʁe.zɛʁ.ve o pɛʁ.sɔn a.ʒe/', 'seht PLASS eh ray-zehr-VAY oh pehr-son a-ZHAY', ['affiche', 'passif', 'accord-f']),
  sent(1013, 'Le formulaire doit être signé avant vendredi.', 'The form must be signed before Friday.', '/lə fɔʁ.my.lɛʁ dwa ɛtʁ si.ɲe a.vɑ̃ vɑ̃.dʁə.di/', 'luh for-mü-LEHR dwa ehtr see-NYAY a-vahⁿ vahⁿ-druh-DEE', ['affiche', 'consigne']),
];

/* ── ACT 2 · ÊTRE + PARTICIPE ACCORDÉ ───────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1015, 'La lettre est écrite en français.', 'The letter is written in French.', '/la lɛtʁ ɛ.te.kʁit ɑ̃ fʁɑ̃.sɛ/', 'la LEHTR eh-tay-KREET ahⁿ frahⁿ-SEH', ['forme', 'accord-f'], FCVDR),
  sent(1016, 'Le rapport est écrit en français.', 'The report is written in French.', '/lə ʁa.pɔʁ ɛ.te.kʁi ɑ̃ fʁɑ̃.sɛ/', 'luh ra-POR eh-tay-KREE ahⁿ frahⁿ-SEH', ['forme', 'accord-m']),
  sent(1017, 'Les lettres sont écrites en français.', 'The letters are written in French.', '/le lɛtʁ sɔ̃.te.kʁit ɑ̃ fʁɑ̃.sɛ/', 'lay LEHTR sohⁿ-tay-KREET ahⁿ frahⁿ-SEH', ['forme', 'accord-fp'], FCVDR),
  sent(1018, 'Les rapports sont écrits en français.', 'The reports are written in French.', '/le ʁa.pɔʁ sɔ̃.te.kʁi ɑ̃ fʁɑ̃.sɛ/', 'lay ra-POR sohⁿ-tay-KREE ahⁿ frahⁿ-SEH', ['forme', 'accord-mp']),
  sent(1019, "Avec le passif, le participe s'accorde avec le sujet.", 'In the passive the participle agrees with the subject.', '/a.vɛk lə pa.sif lə paʁ.ti.sip sa.kɔʁd a.vɛk lə sy.ʒɛ/', 'a-vehk luh pa-SEEF luh par-tee-SEEP sa-KORD a-vehk luh sü-ZHEH', ['rule', 'accord'], ['flashcard'],
    rule("Dans « La lettre est écrit... », qu'est-ce qui décide de la fin du participe ?", 'Le sujet : la lettre est écrite, les rapports sont écrits.')),
  sent(1020, 'Les documents sont envoyés chaque lundi.', 'The documents are sent every Monday.', '/le dɔ.ky.mɑ̃ sɔ̃.tɑ̃.vwa.je ʃak lœ̃.di/', 'lay do-kü-MAHⁿ sohⁿ-tahⁿ-vwa-YAY shak luhⁿ-DEE', ['forme', 'accord-mp'], FCVDR),
  sent(1021, 'La facture est envoyée par courriel.', 'The invoice is sent by email.', '/la fak.tyʁ ɛ.tɑ̃.vwa.je paʁ ku.ʁjɛl/', 'la fak-TÜR eh-tahⁿ-vwa-YAY par koo-RYEHL', ['forme', 'accord-f', 'quebec']),
  sent(1022, 'Le repas est préparé sur place.', 'The meal is prepared on site.', '/lə ʁə.pa ɛ pʁe.pa.ʁe syʁ plas/', 'luh ruh-PA eh pray-pa-RAY sür PLASS', ['forme', 'accord-m']),
  sent(1023, 'Les repas sont préparés sur place.', 'The meals are prepared on site.', '/le ʁə.pa sɔ̃ pʁe.pa.ʁe syʁ plas/', 'lay ruh-PA sohⁿ pray-pa-RAY sür PLASS', ['forme', 'accord-mp']),
  sent(1024, 'La salle est nettoyée tous les soirs.', 'The room is cleaned every evening.', '/la sal ɛ nɛ.twa.je tu le swaʁ/', 'la SAL eh neh-twa-YAY too lay SWAR', ['forme', 'accord-f']),
  sent(1025, 'Les clés sont gardées à la réception.', 'The keys are kept at reception.', '/le kle sɔ̃ ɡaʁ.de a la ʁe.sɛp.sjɔ̃/', 'lay KLAY sohⁿ gar-DAY a la ray-sehp-SYOHⁿ', ['forme', 'accord-fp'], FCVDR),
  sent(1026, 'Le dossier est classé dans le bureau du fond.', 'The file is filed in the back office.', '/lə dɔ.sje ɛ kla.se dɑ̃ lə by.ʁo dy fɔ̃/', 'luh do-SYAY eh kla-SAY dahⁿ luh bü-ROH dü FOHⁿ', ['forme', 'accord-m']),
  sent(1027, 'Les places sont numérotées.', 'The seats are numbered.', '/le plas sɔ̃ ny.me.ʁɔ.te/', 'lay PLASS sohⁿ nü-may-ro-TAY', ['forme', 'accord-fp']),
  sent(1028, 'La porte est fermée à vingt heures.', 'The door is closed at eight in the evening.', '/la pɔʁt ɛ fɛʁ.me a vɛ̃.tœʁ/', 'la PORT eh fehr-MAY a vehⁿ-TUHR', ['forme', 'accord-f'], FCVR,
    gap('La porte ___ (fermer) à vingt heures.', 'est fermée : un sujet féminin singulier, donc un e à la fin.')),
  sent(1029, 'Les portes sont fermées à vingt heures.', 'The doors are closed at eight in the evening.', '/le pɔʁt sɔ̃ fɛʁ.me a vɛ̃.tœʁ/', 'lay PORT sohⁿ fehr-MAY a vehⁿ-TUHR', ['forme', 'accord-fp'], FCVDR),
  sent(1030, 'Ce produit est fabriqué au Québec.', 'This product is made in Québec.', '/sə pʁɔ.dɥi ɛ fa.bʁi.ke o ke.bɛk/', 'suh pro-DWEE eh fa-bree-KAY oh kay-BEHK', ['forme', 'accord-m', 'quebec'], FCVDR),
  sent(1031, 'Ces produits sont fabriqués au Québec.', 'These products are made in Québec.', '/se pʁɔ.dɥi sɔ̃ fa.bʁi.ke o ke.bɛk/', 'say pro-DWEE sohⁿ fa-bree-KAY oh kay-BEHK', ['forme', 'accord-mp', 'quebec']),
  sent(1032, 'Le texte est traduit en trois langues.', 'The text is translated into three languages.', '/lə tɛkst ɛ tʁa.dɥi ɑ̃ tʁwa lɑ̃ɡ/', 'luh TEHKST eh tra-DWEE ahⁿ trwa LAHⁿG', ['forme', 'accord-m', 'irregulier']),
];

/* ── ACT 3 · LE PASSIF DANS TOUS LES TEMPS ──────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1035, 'Le magasin est fermé.', 'The shop is closed.', '/lə ma.ɡa.zɛ̃ ɛ fɛʁ.me/', 'luh ma-ga-ZEHⁿ eh fehr-MAY', ['temps', 'present'], FCVDR),
  sent(1036, 'Le magasin a été fermé pendant deux mois.', 'The shop was closed for two months.', '/lə ma.ɡa.zɛ̃ a e.te fɛʁ.me pɑ̃.dɑ̃ dø mwa/', 'luh ma-ga-ZEHⁿ a ay-tay fehr-MAY pahⁿ-dahⁿ deu MWA', ['temps', 'passe-compose']),
  sent(1037, 'Le magasin était fermé quand je suis passé.', 'The shop was closed when I came by.', '/lə ma.ɡa.zɛ̃ e.tɛ fɛʁ.me kɑ̃ ʒə sɥi pa.se/', 'luh ma-ga-ZEHⁿ ay-teh fehr-MAY kahⁿ zhuh swee pa-SAY', ['temps', 'imparfait']),
  sent(1038, 'Le magasin sera fermé lundi.', 'The shop will be closed on Monday.', '/lə ma.ɡa.zɛ̃ sə.ʁa fɛʁ.me lœ̃.di/', 'luh ma-ga-ZEHⁿ suh-ra fehr-MAY luhⁿ-DEE', ['temps', 'futur']),
  sent(1039, 'Ta demande serait acceptée plus vite en ligne.', 'Your request would be accepted faster online.', '/ta də.mɑ̃d sə.ʁɛ.tak.sɛp.te ply vit ɑ̃ liɲ/', 'ta duh-MAHⁿD suh-reh-tak-sehp-TAY plü VEET ahⁿ LEEÑ', ['temps', 'conditionnel', 'accord-f']),
  sent(1040, 'Le temps est porté par être. Le participe ne bouge pas.', 'The tense is carried by être; the participle does not move.', '/lə tɑ̃.zɛ pɔʁ.te paʁ ɛtʁ lə paʁ.ti.sip nə buʒ pa/', 'luh tahⁿ-zeh por-TAY par EHTR luh par-tee-SEEP nuh boozh PA', ['rule', 'temps'], ['flashcard'],
    rule('Dans « a été fermé » et « sera fermé », quel mot change avec le temps ?', 'être : est, a été, était, sera, serait. fermé ne change que pour le sujet.')),
  sent(1041, 'La route a été fermée à cause de la neige.', 'The road was closed because of the snow.', '/la ʁut a e.te fɛʁ.me a koz də la nɛʒ/', 'la ROOT a ay-tay fehr-MAY a kohz duh la NEHZH', ['temps', 'passe-compose', 'accord-f'], FCVDR),
  sent(1042, 'La route était fermée quand nous sommes arrivés.', 'The road was closed when we arrived.', '/la ʁut e.tɛ fɛʁ.me kɑ̃ nu sɔm.za.ʁi.ve/', 'la ROOT ay-teh fehr-MAY kahⁿ noo som-za-ree-VAY', ['temps', 'imparfait', 'accord-f']),
  sent(1043, "La route sera fermée jusqu'à samedi.", 'The road will be closed until Saturday.', '/la ʁut sə.ʁa fɛʁ.me ʒys.ka sam.di/', 'la ROOT suh-ra fehr-MAY zhüs-ka sam-DEE', ['temps', 'futur', 'accord-f']),
  sent(1044, 'Les résultats ont été publiés ce matin.', 'The results were published this morning.', '/le ʁe.zyl.ta ɔ̃.te.te py.bli.je sə ma.tɛ̃/', 'lay ray-zül-TA ohⁿ-tay-tay pü-blee-YAY suh ma-TEHⁿ', ['temps', 'passe-compose', 'accord-mp'], FCVDR),
  sent(1045, 'Les résultats seront publiés demain.', 'The results will be published tomorrow.', '/le ʁe.zyl.ta sə.ʁɔ̃ py.bli.je də.mɛ̃/', 'lay ray-zül-TA suh-rohⁿ pü-blee-YAY duh-MEHⁿ', ['temps', 'futur', 'accord-mp']),
  sent(1046, 'Les résultats étaient déjà publiés hier soir.', 'The results were already published last night.', '/le ʁe.zyl.ta e.tɛ de.ʒa py.bli.je jɛʁ swaʁ/', 'lay ray-zül-TA ay-teh day-ZHA pü-blee-YAY yehr SWAR', ['temps', 'imparfait', 'accord-mp']),
  sent(1047, 'Le dossier serait refusé sans ces papiers.', 'The application would be refused without these papers.', '/lə dɔ.sje sə.ʁɛ ʁə.fy.ze sɑ̃ se pa.pje/', 'luh do-SYAY suh-reh ruh-fü-ZAY sahⁿ say pa-PYAY', ['temps', 'conditionnel']),
  sent(1048, 'Le contrat a été signé lundi.', 'The contract was signed on Monday.', '/lə kɔ̃.tʁa a e.te si.ɲe lœ̃.di/', 'luh kohⁿ-TRA a ay-tay see-NYAY luhⁿ-DEE', ['temps', 'passe-compose']),
  sent(1049, 'Le contrat sera signé demain.', 'The contract will be signed tomorrow.', '/lə kɔ̃.tʁa sə.ʁa si.ɲe də.mɛ̃/', 'luh kohⁿ-TRA suh-ra see-NYAY duh-MEHⁿ', ['temps', 'futur']),
  sent(1050, 'Les billets ont été vendus en deux heures.', 'The tickets were sold in two hours.', '/le bi.jɛ ɔ̃.te.te vɑ̃.dy ɑ̃ dø.zœʁ/', 'lay bee-YEH ohⁿ-tay-tay vahⁿ-DÜ ahⁿ deu-ZUHR', ['temps', 'passe-compose', 'accord-mp'], FCVR,
    gap('Les billets ___ (vendre, passé composé) en deux heures.', 'ont été vendus : avoir porte le temps de être, et vendu suit le sujet.')),
  sent(1051, 'Les billets seront vendus à partir de midi.', 'The tickets will be sold from noon.', '/le bi.jɛ sə.ʁɔ̃ vɑ̃.dy a paʁ.tiʁ də mi.di/', 'lay bee-YEH suh-rohⁿ vahⁿ-DÜ a par-teer duh mee-DEE', ['temps', 'futur', 'accord-mp']),
  sent(1052, 'Le pont était surveillé jour et nuit.', 'The bridge was watched day and night.', '/lə pɔ̃ e.tɛ syʁ.vɛ.je ʒuʁ e nɥi/', 'luh POHⁿ ay-teh sür-veh-YAY zhoor ay NWEE', ['temps', 'imparfait'], FCVDR),
];

/* ── ACT 4 · PAR QUI ? PRESQUE JAMAIS ───────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1055, 'Ce roman a été écrit par une Québécoise.', 'This novel was written by a Québécoise.', '/sə ʁɔ.mɑ̃ a e.te e.kʁi paʁ yn ke.be.kwaz/', 'suh ro-MAHⁿ a ay-tay ay-KREE par ün kay-bay-KWAZ', ['agent', 'quebec'], FCVDR),
  sent(1056, 'Cette chanson a été écrite par ma sœur.', 'This song was written by my sister.', '/sɛt ʃɑ̃.sɔ̃ a e.te e.kʁit paʁ ma sœʁ/', 'seht shahⁿ-SOHⁿ a ay-tay ay-KREET par ma SUHR', ['agent', 'accord-f']),
  sent(1057, "On met par seulement si l'auteur ajoute une information.", 'You add par only when the doer tells the reader something new.', '/ɔ̃ mɛ paʁ sœl.mɑ̃ si lo.tœʁ a.ʒut y.nɛ̃.fɔʁ.ma.sjɔ̃/', 'ohⁿ meh PAR suhl-mahⁿ see loh-TUHR a-zhoot ü-neh-for-ma-SYOHⁿ', ['rule', 'agent'], ['flashcard'],
    rule('Quand écris-tu « par » dans une phrase au passif ?', 'Seulement si le nom de l’auteur apprend quelque chose : par mille ouvriers, par le maire.')),
  sent(1058, 'La tour a été construite en deux ans.', 'The tower was built in two years.', '/la tuʁ a e.te kɔ̃s.tʁɥit ɑ̃ dø.zɑ̃/', 'la TOOR a ay-tay kohⁿs-TRWEET ahⁿ deu-ZAHⁿ', ['sans-agent', 'accord-f']),
  sent(1059, 'La tour a été construite par mille ouvriers.', 'The tower was built by a thousand workers.', '/la tuʁ a e.te kɔ̃s.tʁɥit paʁ mil u.vʁi.je/', 'la TOOR a ay-tay kohⁿs-TRWEET par meel oo-vree-YAY', ['agent', 'accord-f']),
  sent(1060, 'Le colis a été livré ce matin.', 'The parcel was delivered this morning.', '/lə kɔ.li a e.te li.vʁe sə ma.tɛ̃/', 'luh ko-LEE a ay-tay lee-VRAY suh ma-TEHⁿ', ['sans-agent'], FCVDR),
  sent(1061, 'Les rues ont été nettoyées après la fête.', 'The streets were cleaned after the party.', '/le ʁy ɔ̃.te.te nɛ.twa.je a.pʁɛ la fɛt/', 'lay RÜ ohⁿ-tay-tay neh-twa-YAY a-preh la FEHT', ['sans-agent', 'accord-fp']),
  sent(1062, 'Le prix a été remis par le maire.', 'The prize was presented by the mayor.', '/lə pʁi a e.te ʁə.mi paʁ lə mɛʁ/', 'luh PREE a ay-tay ruh-MEE par luh MEHR', ['agent']),
  sent(1063, 'Mon vélo a été retrouvé près du pont.', 'My bike was found near the bridge.', '/mɔ̃ ve.lo a e.te ʁə.tʁu.ve pʁɛ dy pɔ̃/', 'mohⁿ vay-LOH a ay-tay ruh-troo-VAY preh dü POHⁿ', ['sans-agent'], FCVDR),
  sent(1064, 'Ce plat est préparé par le chef lui-même.', 'This dish is prepared by the chef himself.', '/sə pla ɛ pʁe.pa.ʁe paʁ lə ʃɛf lɥi mɛm/', 'suh PLA eh pray-pa-RAY par luh SHEHF lwee-MEM', ['agent']),
  sent(1065, 'La décision a été prise sans nous.', 'The decision was taken without us.', '/la de.si.zjɔ̃ a e.te pʁiz sɑ̃ nu/', 'la day-see-ZYOHⁿ a ay-tay PREEZ sahⁿ NOO', ['sans-agent', 'accord-f', 'irregulier']),
  sent(1066, 'Le rapport a été relu par la directrice.', 'The report was proofread by the director.', '/lə ʁa.pɔʁ a e.te ʁə.ly paʁ la di.ʁɛk.tʁis/', 'luh ra-POR a ay-tay ruh-LÜ par la dee-rehk-TREESS', ['agent', 'irregulier']),
  phrase(1067, 'par le maire', 'by the mayor', '/paʁ lə mɛʁ/', 'par luh MEHR', ['agent']),
  phrase(1068, 'par un voisin', 'by a neighbour', '/paʁ œ̃ vwa.zɛ̃/', 'par uhⁿ vwa-ZEHⁿ', ['agent']),
  sent(1069, 'Les photos ont été prises par un ami.', 'The photos were taken by a friend.', '/le fɔ.to ɔ̃.te.te pʁiz paʁ œ̃.na.mi/', 'lay fo-TOH ohⁿ-tay-tay PREEZ par uhⁿ-na-MEE', ['agent', 'accord-fp', 'irregulier']),
];

/* ── ACT 5 · OÙ VIT LE PASSIF ───────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1072, 'Il est interdit de fumer dans les chambres.', 'Smoking is not allowed in the rooms.', '/i.lɛ.tɛ̃.tɛʁ.di də fy.me dɑ̃ le ʃɑ̃bʁ/', 'ee-leh-tehⁿ-tehr-DEE duh fü-MAY dahⁿ lay SHAHⁿBR', ['affiche', 'consigne'], FCVDR),
  sent(1073, 'Les animaux ne sont pas admis dans le restaurant.', 'Animals are not allowed in the restaurant.', '/le.za.ni.mo nə sɔ̃ pa.zad.mi dɑ̃ lə ʁɛs.to.ʁɑ̃/', 'lay-za-nee-MOH nuh sohⁿ pa-zad-MEE dahⁿ luh rehs-toh-RAHⁿ', ['affiche', 'accord-mp']),
  sent(1074, 'Le paiement est accepté en espèces et par carte.', 'Payment is accepted in cash and by card.', '/lə pɛ.mɑ̃ ɛ.tak.sɛp.te ɑ̃.nɛs.pɛs e paʁ kaʁt/', 'luh peh-MAHⁿ eh-tak-sehp-TAY ahⁿ-nehs-PEHSS ay par KART', ['affiche', 'procedure']),
  sent(1075, 'Les bagages doivent être enregistrés une heure avant.', 'Bags must be checked in an hour before.', '/le ba.ɡaʒ dwav ɛtʁ ɑ̃.ʁə.ʒis.tʁe y.nœʁ a.vɑ̃/', 'lay ba-GAZH dwav ehtr ahⁿ-ruh-zhees-TRAY ü-NUHR a-VAHⁿ', ['procedure', 'accord-mp']),
  sent(1076, 'Votre demande sera traitée dans les dix jours.', 'Your request will be processed within ten days.', '/vɔtʁ də.mɑ̃d sə.ʁa tʁɛ.te dɑ̃ le di ʒuʁ/', 'votr duh-MAHⁿD suh-ra treh-TAY dahⁿ lay dee ZHOOR', ['procedure', 'accord-f'], FCVDR),
  sent(1077, 'Une réponse vous sera envoyée par courriel.', 'An answer will be sent to you by email.', '/yn ʁe.pɔ̃s vu sə.ʁa ɑ̃.vwa.je paʁ ku.ʁjɛl/', 'ün ray-POHⁿS voo suh-ra ahⁿ-vwa-YAY par koo-RYEHL', ['procedure', 'accord-f', 'quebec']),
  sent(1078, "Le règlement est affiché à l'entrée.", 'The rules are posted at the entrance.', '/lə ʁɛ.ɡlə.mɑ̃ ɛ.ta.fi.ʃe a lɑ̃.tʁe/', 'luh reh-gluh-MAHⁿ eh-ta-fee-SHAY a lahⁿ-TRAY', ['affiche']),
  sent(1079, 'Trois écoles ont été fermées à cause de la tempête.', 'Three schools were closed because of the storm.', '/tʁwa.ze.kɔl ɔ̃.te.te fɛʁ.me a koz də la tɑ̃.pɛt/', 'trwa-zay-KOL ohⁿ-tay-tay fehr-MAY a kohz duh la tahⁿ-PEHT', ['nouvelles', 'accord-fp'], FCVDR),
  sent(1080, 'Un nouveau pont sera construit près du port.', 'A new bridge will be built near the harbour.', '/œ̃ nu.vo pɔ̃ sə.ʁa kɔ̃s.tʁɥi pʁɛ dy pɔʁ/', 'uhⁿ noo-VOH POHⁿ suh-ra kohⁿs-TRWEE preh dü POR', ['nouvelles']),
  sent(1081, 'Le maire a été élu au deuxième tour.', 'The mayor was elected in the second round.', '/lə mɛʁ a e.te e.ly o dø.zjɛm tuʁ/', 'luh MEHR a ay-tay ay-LÜ oh deu-ZYEM TOOR', ['nouvelles']),
  sent(1082, 'Les résultats seront annoncés à midi.', 'The results will be announced at noon.', '/le ʁe.zyl.ta sə.ʁɔ̃.ta.nɔ̃.se a mi.di/', 'lay ray-zül-TA suh-rohⁿ-ta-nohⁿ-SAY a mee-DEE', ['nouvelles', 'accord-mp']),
  sent(1083, "Le passif vit sur les affiches, dans les règlements et dans les nouvelles.", 'The passive lives on notices, in rules and in the news.', '/lə pa.sif vi syʁ le.za.fiʃ dɑ̃ le ʁɛ.ɡlə.mɑ̃ e dɑ̃ le nu.vɛl/', 'luh pa-SEEF VEE sür lay-za-FEESH dahⁿ lay reh-gluh-MAHⁿ ay dahⁿ lay noo-VEHL', ['rule', 'consigne'], ['flashcard'],
    rule('Où lis-tu du passif tous les jours ?', "Sur une porte, dans un règlement, dans un courriel officiel, dans le journal.")),
  sent(1084, 'Les poubelles sont ramassées le mardi matin.', 'The bins are collected on Tuesday mornings.', '/le pu.bɛl sɔ̃ ʁa.ma.se lə maʁ.di ma.tɛ̃/', 'lay poo-BEHL sohⁿ ra-ma-SAY luh mar-dee ma-TEHⁿ', ['affiche', 'accord-fp']),
  sent(1085, 'Un ascenseur sera arrêté toute la journée.', 'One lift will be stopped all day.', '/œ̃.na.sɑ̃.sœʁ sə.ʁa a.ʁɛ.te tut la ʒuʁ.ne/', 'uhⁿ-na-sahⁿ-SUHR suh-ra a-reh-TAY toot la zhoor-NAY', ['affiche']),
  sent(1086, "Les places sont attribuées à l'avance.", 'Seats are allocated in advance.', '/le plas sɔ̃.ta.tʁi.bɥe a la.vɑ̃s/', 'lay PLASS sohⁿ-ta-tree-BWAY a la-VAHⁿS', ['procedure', 'accord-fp']),
];

/* ── ACT 6 · ON, LE VRAI RÉFLEXE ────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1090, 'On a fermé la rue pour le marché.', 'They closed the street for the market.', '/ɔ̃.na fɛʁ.me la ʁy puʁ lə maʁ.ʃe/', 'ohⁿ-na fehr-MAY la RÜ poor luh mar-SHAY', ['on'], FCVDR),
  sent(1091, 'La rue a été fermée pour le marché.', 'The street was closed for the market.', '/la ʁy a e.te fɛʁ.me puʁ lə maʁ.ʃe/', 'la RÜ a ay-tay fehr-MAY poor luh mar-SHAY', ['passif', 'accord-f']),
  sent(1092, "À l'oral, on remplace presque toujours le passif.", 'Out loud, on replaces the passive almost every time.', '/a lɔ.ʁal ɔ̃ ʁɑ̃.plas pʁɛsk tu.ʒuʁ lə pa.sif/', 'a lo-RAL ohⁿ rahⁿ-PLASS prehsk too-zhoor luh pa-SEEF', ['rule', 'on'], ['flashcard'],
    rule('Tu parles, et tu ne sais pas qui a fait la chose. Que dis-tu ?', 'On : on a fermé la rue, on a volé mon vélo, on m’a dit ça.')),
  sent(1093, 'On a volé mon vélo.', 'My bike was stolen.', '/ɔ̃.na vɔ.le mɔ̃ ve.lo/', 'ohⁿ-na vo-LAY mohⁿ vay-LOH', ['on'], FCVDR),
  sent(1094, "On m'a téléphoné trois fois.", 'Somebody called me three times.', '/ɔ̃ ma te.le.fɔ.ne tʁwa fwa/', 'ohⁿ ma tay-lay-fo-NAY trwa FWA', ['on', 'datif']),
  sent(1095, 'On nous a prévenus trop tard.', 'We were told too late.', '/ɔ̃ nu.za pʁev.ny tʁo taʁ/', 'ohⁿ noo-za prayv-NÜ troh TAR', ['on', 'accord-mp']),
  sent(1096, 'On va repeindre la cuisine.', 'The kitchen is going to be repainted.', '/ɔ̃ va ʁə.pɛ̃dʁ la kɥi.zin/', 'ohⁿ va ruh-PEHⁿDR la kwee-ZEEN', ['on', 'futur-proche']),
  sent(1097, 'On construit une piste cyclable ici.', 'A cycle lane is being built here.', '/ɔ̃ kɔ̃s.tʁɥi yn pist si.klabl i.si/', 'ohⁿ kohⁿs-TRWEE ün PEEST see-KLABL ee-SEE', ['on']),
  sent(1098, 'On ne fume pas dans le hall.', 'There is no smoking in the lobby.', '/ɔ̃ nə fym pa dɑ̃ lə ol/', 'ohⁿ nuh FÜM pa dahⁿ luh OL', ['on', 'affiche']),
  sent(1099, 'On parle français et anglais ici.', 'French and English are spoken here.', '/ɔ̃ paʁl fʁɑ̃.sɛ e ɑ̃.ɡlɛ i.si/', 'ohⁿ PARL frahⁿ-SEH ay ahⁿ-GLEH ee-SEE', ['on'], FCVDR),
  sent(1100, 'On a changé les horaires du bus.', 'The bus times have been changed.', '/ɔ̃.na ʃɑ̃.ʒe le.zɔ.ʁɛʁ dy bys/', 'ohⁿ-na shahⁿ-ZHAY lay-zo-REHR dü BÜS', ['on']),
  sent(1101, "On t'attend depuis vingt minutes.", 'You have been waited for twenty minutes.', '/ɔ̃ ta.tɑ̃ də.pɥi vɛ̃ mi.nyt/', 'ohⁿ ta-TAHⁿ duh-pwee vehⁿ mee-NÜT', ['on']),
  sent(1102, "On a perdu ma valise à l'aéroport.", 'My suitcase was lost at the airport.', '/ɔ̃.na pɛʁ.dy ma va.liz a la.e.ʁɔ.pɔʁ/', 'ohⁿ-na pehr-DÜ ma va-LEEZ a la-ay-ro-POR', ['on'], FCVDR),
  sent(1103, "Ma valise a été perdue à l'aéroport.", 'My suitcase was lost at the airport.', '/ma va.liz a e.te pɛʁ.dy a la.e.ʁɔ.pɔʁ/', 'ma va-LEEZ a ay-tay pehr-DÜ a la-ay-ro-POR', ['passif', 'accord-f']),
  sent(1104, 'On a dit que le bureau était fermé.', 'It was said that the office was closed.', '/ɔ̃.na di kə lə by.ʁo e.tɛ fɛʁ.me/', 'ohⁿ-na DEE kuh luh bü-ROH ay-teh fehr-MAY', ['on']),
  sent(1105, "On a annulé le train de huit heures.", "The eight o'clock train was cancelled.", '/ɔ̃.na a.ny.le lə tʁɛ̃ də ɥi.tœʁ/', 'ohⁿ-na a-nü-LAY luh TREHⁿ duh wee-TUHR', ['on'], FCVR,
    gap('___ a annulé le train de huit heures.', 'On : personne n’est nommé, et la phrase reste normale à l’oral.')),
  phrase(1106, 'on dit que', 'they say that', '/ɔ̃ di kə/', 'ohⁿ DEE kuh', ['on']),
  phrase(1107, "on m'a dit", 'I was told', '/ɔ̃ ma di/', 'ohⁿ ma DEE', ['on', 'datif']),
];

/* ── ACT 7 · SE FAIRE + INFINITIF ───────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1110, 'Je me suis fait voler mon vélo.', 'I had my bike stolen.', '/ʒə mə sɥi fɛ vɔ.le mɔ̃ ve.lo/', 'zhuh muh swee feh vo-LAY mohⁿ vay-LOH', ['sefaire'], FCVDR),
  sent(1111, "Elle s'est fait couper les cheveux.", 'She got her hair cut.', '/ɛl sɛ fɛ ku.pe le ʃə.vø/', 'ehl seh feh koo-PAY lay shuh-VEU', ['sefaire'], FCVDR),
  sent(1112, 'Après se faire, le verbe reste à l’infinitif et fait ne change jamais.', 'After se faire the verb stays in the infinitive and fait never changes.', '/a.pʁɛ sə fɛʁ lə vɛʁb ʁɛst a lɛ̃.fi.ni.tif e fɛ nə ʃɑ̃ʒ ʒa.mɛ/', 'a-preh suh FEHR luh VEHRB rehst a lehⁿ-fee-nee-TEEF ay FEH nuh shahⁿzh zha-MEH', ['rule', 'sefaire'], ['flashcard'],
    rule('Dans « elle s’est fait couper les cheveux », pourquoi pas « faite » ?', 'fait est invariable ici, et couper garde sa forme d’infinitif.')),
  sent(1113, "Il s'est fait aider par son frère.", 'He got his brother to help him.', '/il sɛ fɛ ɛ.de paʁ sɔ̃ fʁɛʁ/', 'eel seh feh eh-DAY par sohⁿ FREHR', ['sefaire', 'agent']),
  sent(1114, 'Nous nous sommes fait livrer le repas.', 'We had the meal delivered.', '/nu nu sɔm fɛ li.vʁe lə ʁə.pa/', 'noo noo som feh lee-VRAY luh ruh-PA', ['sefaire']),
  sent(1115, 'Je vais me faire couper les cheveux samedi.', 'I am getting my hair cut on Saturday.', '/ʒə vɛ mə fɛʁ ku.pe le ʃə.vø sam.di/', 'zhuh veh muh fehr koo-PAY lay shuh-VEU sam-DEE', ['sefaire', 'futur-proche']),
  sent(1116, "Ils se sont fait expliquer le règlement.", 'They had the rules explained to them.', '/il sə sɔ̃ fɛ ɛks.pli.ke lə ʁɛ.ɡlə.mɑ̃/', 'eel suh sohⁿ feh ehks-plee-KAY luh reh-gluh-MAHⁿ', ['sefaire']),
  sent(1117, "Elle s'est fait rembourser son billet.", 'She got her ticket refunded.', '/ɛl sɛ fɛ ʁɑ̃.buʁ.se sɔ̃ bi.jɛ/', 'ehl seh feh rahⁿ-boor-SAY sohⁿ bee-YEH', ['sefaire'], FCVDR),
  sent(1118, "Mon frère s'est fait opérer du genou.", 'My brother had an operation on his knee.', '/mɔ̃ fʁɛʁ sɛ fɛ ɔ.pe.ʁe dy ʒə.nu/', 'mohⁿ FREHR seh feh o-pay-RAY dü zhuh-NOO', ['sefaire']),
  sent(1119, "On s'est fait refuser l'entrée.", 'We were refused entry.', '/ɔ̃ sɛ fɛ ʁə.fy.ze lɑ̃.tʁe/', 'ohⁿ seh feh ruh-fü-ZAY lahⁿ-TRAY', ['sefaire', 'on']),
  sent(1120, 'Je me suis fait aider pour remplir le dossier.', 'I got help filling in the form.', '/ʒə mə sɥi fɛ ɛ.de puʁ ʁɑ̃.pliʁ lə dɔ.sje/', 'zhuh muh swee feh eh-DAY poor rahⁿ-PLEER luh do-SYAY', ['sefaire']),
  phrase(1121, 'se faire voler', 'to have something stolen', '/sə fɛʁ vɔ.le/', 'suh fehr vo-LAY', ['sefaire']),
  phrase(1122, 'se faire couper les cheveux', 'to get a haircut', '/sə fɛʁ ku.pe le ʃə.vø/', 'suh fehr koo-PAY lay shuh-VEU', ['sefaire']),
  phrase(1123, 'se faire livrer', 'to have something delivered', '/sə fɛʁ li.vʁe/', 'suh fehr lee-VRAY', ['sefaire']),
  sent(1124, "Elle s'est fait expliquer la procédure deux fois.", 'She had the procedure explained to her twice.', '/ɛl sɛ fɛ ɛks.pli.ke la pʁɔ.se.dyʁ dø fwa/', 'ehl seh feh ehks-plee-KAY la pro-say-DÜR deu FWA', ['sefaire', 'procedure']),
];

/* ── ACT 8 · ÇA SE DIT : LE PASSIF PRONOMINAL ───────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1127, 'Ça se dit.', 'People say that.', '/sa sə di/', 'sa suh DEE', ['pronominal'], FCVDR),
  sent(1128, 'Ça ne se dit pas comme ça.', 'You do not say it like that.', '/sa nə sə di pa kɔm sa/', 'sa nuh suh DEE pa kom SA', ['pronominal']),
  sent(1129, 'Le vin blanc se sert frais.', 'White wine is served chilled.', '/lə vɛ̃ blɑ̃ sə sɛʁ fʁɛ/', 'luh vehⁿ BLAHⁿ suh sehr FREH', ['pronominal'], FCVDR),
  sent(1130, 'Pour une habitude générale, le français dit ça se fait.', 'For a general habit French says ça se fait.', '/puʁ y.na.bi.tyd ʒe.ne.ʁal lə fʁɑ̃.sɛ di sa sə fɛ/', 'poor ü-na-bee-TÜD zhay-nay-RAL luh frahⁿ-SEH dee sa suh FEH', ['rule', 'pronominal'], ['flashcard'],
    rule('Comment dis-tu qu’une chose se fait partout, sans nommer personne ?', 'Le verbe pronominal : ça se fait, ça se dit, le vin se sert frais.')),
  sent(1131, 'Le fromage se mange à la fin du repas.', 'Cheese is eaten at the end of the meal.', '/lə fʁɔ.maʒ sə mɑ̃ʒ a la fɛ̃ dy ʁə.pa/', 'luh fro-MAZH suh MAHⁿZH a la fehⁿ dü ruh-PA', ['pronominal']),
  sent(1132, "Ce mot s'écrit avec un accent.", 'This word is written with an accent.', '/sə mo se.kʁi a.vɛ.kœ̃.nak.sɑ̃/', 'suh MOH say-KREE a-vehk uhⁿ-nak-SAHⁿ', ['pronominal']),
  sent(1133, 'Ça se fait beaucoup au Québec.', 'That is done a lot in Québec.', '/sa sə fɛ bo.ku o ke.bɛk/', 'sa suh feh boh-KOO oh kay-BEHK', ['pronominal', 'quebec'], FCVDR),
  sent(1134, 'Ça ne se fait pas ici.', 'That is not done here.', '/sa nə sə fɛ pa i.si/', 'sa nuh suh feh pa ee-SEE', ['pronominal']),
  sent(1135, 'Ce plat se prépare la veille.', 'This dish is made the day before.', '/sə pla sə pʁe.paʁ la vɛj/', 'suh PLA suh pray-PAR la VEHY', ['pronominal']),
  sent(1136, 'Les billets se vendent en ligne.', 'Tickets are sold online.', '/le bi.jɛ sə vɑ̃d ɑ̃ liɲ/', 'lay bee-YEH suh VAHⁿD ahⁿ LEEÑ', ['pronominal']),
  sent(1137, 'Ce mot se prononce sans le s final.', 'This word is pronounced without the final s.', '/sə mo sə pʁɔ.nɔ̃s sɑ̃ lə ɛs fi.nal/', 'suh MOH suh pro-NOHⁿS sahⁿ luh ess fee-NAL', ['pronominal']),
  sent(1138, 'La porte se ferme toute seule.', 'The door closes by itself.', '/la pɔʁt sə fɛʁm tut sœl/', 'la PORT suh FEHRM toot SUHL', ['pronominal']),
  phrase(1139, 'ça se voit', 'you can tell', '/sa sə vwa/', 'sa suh VWA', ['pronominal']),
  phrase(1140, 'ça se comprend', 'that is understandable', '/sa sə kɔ̃.pʁɑ̃/', 'sa suh kohⁿ-PRAHⁿ', ['pronominal']),
];

/* ── ACT 9 · LE PIÈGE ANGLAIS ───────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1143, "On m'a donné un livre.", 'I was given a book.', '/ɔ̃ ma dɔ.ne œ̃ livʁ/', 'ohⁿ ma do-NAY uhⁿ LEEVR', ['piege', 'datif'], FCVDR),
  sent(1144, "Donner à quelqu'un n'a pas de passif avec la personne comme sujet.", 'Donner à quelqu’un has no passive with the person as subject.', '/dɔ.ne a kɛl.kœ̃ na pa də pa.sif a.vɛk la pɛʁ.sɔn kɔm sy.ʒɛ/', 'do-NAY a kehl-KUHⁿ na pa duh pa-SEEF a-vehk la pehr-son kom sü-ZHEH', ['rule', 'piege'], ['flashcard'],
    rule('« I was given a book » : comment dis-tu ça en français ?', 'On m’a donné un livre. « Je suis donné un livre » est impossible.')),
  sent(1145, 'On lui a offert un vélo.', 'He was given a bike.', '/ɔ̃ lɥi a ɔ.fɛʁ œ̃ ve.lo/', 'ohⁿ lwee a o-FEHR uhⁿ vay-LOH', ['piege', 'datif']),
  sent(1146, 'On nous a demandé nos papiers.', 'We were asked for our papers.', '/ɔ̃ nu.za də.mɑ̃.de no pa.pje/', 'ohⁿ noo-za duh-mahⁿ-DAY noh pa-PYAY', ['piege', 'datif'], FCVDR),
  sent(1147, "On m'a dit de revenir demain.", 'I was told to come back tomorrow.', '/ɔ̃ ma di də ʁəv.niʁ də.mɛ̃/', 'ohⁿ ma DEE duh ruhv-NEER duh-MEHⁿ', ['piege', 'datif']),
  sent(1148, 'On leur a promis une réponse.', 'They were promised an answer.', '/ɔ̃ lœʁ a pʁɔ.mi yn ʁe.pɔ̃s/', 'ohⁿ luhr a pro-MEE ün ray-POHⁿS', ['piege', 'datif']),
  sent(1149, "On m'a permis de rester.", 'I was allowed to stay.', '/ɔ̃ ma pɛʁ.mi də ʁɛs.te/', 'ohⁿ ma pehr-MEE duh rehs-TAY', ['piege', 'datif']),
  sent(1150, "On t'a répondu hier.", 'You were answered yesterday.', '/ɔ̃ ta ʁe.pɔ̃.dy jɛʁ/', 'ohⁿ ta ray-pohⁿ-DÜ YEHR', ['piege', 'datif']),
  sent(1151, "On lui a conseillé d'attendre.", 'She was advised to wait.', '/ɔ̃ lɥi a kɔ̃.sɛ.je da.tɑ̃dʁ/', 'ohⁿ lwee a kohⁿ-seh-YAY da-TAHⁿDR', ['piege', 'datif']),
  sent(1152, 'Le livre a été donné à ma sœur.', 'The book was given to my sister.', '/lə livʁ a e.te dɔ.ne a ma sœʁ/', 'luh LEEVR a ay-tay do-NAY a ma SUHR', ['piege', 'possible'], FCVDR),
  sent(1153, 'Une réponse leur a été envoyée.', 'An answer was sent to them.', '/yn ʁe.pɔ̃s lœʁ a e.te ɑ̃.vwa.je/', 'ün ray-POHⁿS luhr a ay-tay ahⁿ-vwa-YAY', ['piege', 'possible', 'accord-f']),
  sent(1154, "On m'a envoyé une réponse.", 'I was sent an answer.', '/ɔ̃ ma ɑ̃.vwa.je yn ʁe.pɔ̃s/', 'ohⁿ ma ahⁿ-vwa-YAY ün ray-POHⁿS', ['piege', 'datif']),
  sent(1155, "On m'a appris à conduire.", 'I was taught to drive.', '/ɔ̃ ma a.pʁi a kɔ̃.dɥiʁ/', 'ohⁿ ma a-PREE a kohⁿ-DWEER', ['piege', 'datif']),
  sent(1156, 'On lui a refusé le visa.', 'He was refused the visa.', '/ɔ̃ lɥi a ʁə.fy.ze lə vi.za/', 'ohⁿ lwee a ruh-fü-ZAY luh vee-ZA', ['piege', 'datif']),
  sent(1157, "On m'a donné les clés.", 'I was given the keys.', '/ɔ̃ ma dɔ.ne le kle/', 'ohⁿ ma do-NAY lay KLAY', ['piege', 'datif'], FCVR,
    gap('___ m’a donné les clés.  (I was given the keys.)', 'On : la personne ne peut pas être le sujet d’un passif avec donner.')),
  phrase(1158, "on m'a donné", 'I was given', '/ɔ̃ ma dɔ.ne/', 'ohⁿ ma do-NAY', ['piege', 'datif']),
  phrase(1159, 'on lui a dit', 'she was told', '/ɔ̃ lɥi a di/', 'ohⁿ lwee a DEE', ['piege', 'datif']),
];

/* ── ACT 10 · CHOISIR : PASSIF, ON, OU SE FAIRE ─────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1162, "On a repeint la salle pendant l'été.", 'They repainted the room over the summer.', '/ɔ̃.na ʁə.pɛ̃ la sal pɑ̃.dɑ̃ le.te/', 'ohⁿ-na ruh-PEHⁿ la SAL pahⁿ-dahⁿ lay-TAY', ['choix', 'on'], FCVDR),
  sent(1163, "La salle a été repeinte pendant l'été.", 'The room was repainted over the summer.', '/la sal a e.te ʁə.pɛ̃t pɑ̃.dɑ̃ le.te/', 'la SAL a ay-tay ruh-PEHⁿT pahⁿ-dahⁿ lay-TAY', ['choix', 'passif', 'accord-f'], FCVDR),
  sent(1164, 'Je me suis fait réparer la voiture.', 'I had the car repaired.', '/ʒə mə sɥi fɛ ʁe.pa.ʁe la vwa.tyʁ/', 'zhuh muh swee feh ray-pa-RAY la vwa-TÜR', ['choix', 'sefaire'], FCVDR),
  sent(1165, "Trois outils, trois usages : l'affiche, la bouche et ce qui t'arrive.", 'Three tools, three jobs: the notice, the mouth and what happens to you.', '/tʁwa.zu.ti tʁwa.zy.zaʒ la.fiʃ la buʃ e sə ki ta.ʁiv/', 'trwa-zoo-TEE trwa-zü-ZAZH la-FEESH la BOOSH ay suh kee ta-REEV', ['rule', 'choix'], ['flashcard'],
    rule('Passif, on ou se faire : comment choisis-tu ?', "L'affiche prend le passif, la bouche prend on, et ce qui t'arrive prend se faire.")),
  sent(1166, 'Ça se répare en une heure.', 'That can be fixed in an hour.', '/sa sə ʁe.paʁ ɑ̃.ny.nœʁ/', 'sa suh ray-PAR ahⁿ-nü-NUHR', ['choix', 'pronominal']),
  sent(1167, 'On répare ça en une heure.', 'We fix that in an hour.', '/ɔ̃ ʁe.paʁ sa ɑ̃.ny.nœʁ/', 'ohⁿ ray-PAR sa ahⁿ-nü-NUHR', ['choix', 'on']),
  sent(1168, "Le trottoir a été refait l'an dernier.", 'The pavement was redone last year.', '/lə tʁɔ.twaʁ a e.te ʁə.fɛ lɑ̃ dɛʁ.nje/', 'luh tro-TWAR a ay-tay ruh-FEH lahⁿ dehr-NYAY', ['choix', 'passif'], FCVDR),
  sent(1169, "On a refait le trottoir l'an dernier.", 'They redid the pavement last year.', '/ɔ̃.na ʁə.fɛ lə tʁɔ.twaʁ lɑ̃ dɛʁ.nje/', 'ohⁿ-na ruh-FEH luh tro-TWAR lahⁿ dehr-NYAY', ['choix', 'on']),
  sent(1170, "Elle s'est fait voler son téléphone dans le bus.", 'She had her phone stolen on the bus.', '/ɛl sɛ fɛ vɔ.le sɔ̃ te.le.fɔn dɑ̃ lə bys/', 'ehl seh feh vo-LAY sohⁿ tay-lay-FON dahⁿ luh BÜS', ['choix', 'sefaire']),
  sent(1171, 'Son téléphone a été volé dans le bus.', 'Her phone was stolen on the bus.', '/sɔ̃ te.le.fɔn a e.te vɔ.le dɑ̃ lə bys/', 'sohⁿ tay-lay-FON a ay-tay vo-LAY dahⁿ luh BÜS', ['choix', 'passif'], FCVDR),
  sent(1172, 'Ce produit ne se vend plus.', 'This product is no longer sold.', '/sə pʁɔ.dɥi nə sə vɑ̃ ply/', 'suh pro-DWEE nuh suh VAHⁿ PLÜ', ['choix', 'pronominal']),
  sent(1173, 'On ne vend plus ce produit.', 'We do not sell this product any more.', '/ɔ̃ nə vɑ̃ ply sə pʁɔ.dɥi/', 'ohⁿ nuh VAHⁿ plü suh pro-DWEE', ['choix', 'on']),
  sent(1174, 'Les résultats ont été affichés devant la salle.', 'The results were posted outside the room.', '/le ʁe.zyl.ta ɔ̃.te.te a.fi.ʃe də.vɑ̃ la sal/', 'lay ray-zül-TA ohⁿ-tay-tay a-fee-SHAY duh-vahⁿ la SAL', ['choix', 'passif', 'accord-mp'], FCVDR),
];

/* ── ACT 11 · ÉCRIRE UNE CONSIGNE ───────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1177, 'Les portes sont ouvertes à huit heures.', 'The doors are opened at eight.', '/le pɔʁt sɔ̃.tu.vɛʁt a ɥi.tœʁ/', 'lay PORT sohⁿ-too-VEHRT a wee-TUHR', ['consigne', 'accord-fp'], FCVDR),
  sent(1178, 'Le matériel doit être rangé après usage.', 'Equipment must be put away after use.', '/lə ma.te.ʁjɛl dwa ɛtʁ ʁɑ̃.ʒe a.pʁɛ.zy.zaʒ/', 'luh ma-tay-RYEHL dwa ehtr rahⁿ-ZHAY a-preh-zü-ZAZH', ['consigne']),
  sent(1179, 'Les casiers sont fermés à clé chaque soir.', 'The lockers are locked every evening.', '/le ka.zje sɔ̃ fɛʁ.me a kle ʃak swaʁ/', 'lay ka-ZYAY sohⁿ fehr-MAY a KLAY shak SWAR', ['consigne', 'accord-mp']),
  sent(1180, 'Aucun retard ne sera accepté.', 'No lateness will be accepted.', '/o.kœ̃ ʁə.taʁ nə sə.ʁa ak.sɛp.te/', 'oh-KUHⁿ ruh-TAR nuh suh-ra ak-sehp-TAY', ['consigne']),
  sent(1181, 'Les visiteurs sont priés de signer le registre.', 'Visitors are asked to sign the register.', '/le vi.zi.tœʁ sɔ̃ pʁi.je də si.ɲe lə ʁə.ʒistʁ/', 'lay vee-zee-TUHR sohⁿ pree-YAY duh see-NYAY luh ruh-ZHEESTR', ['consigne', 'accord-mp'], FCVDR),
  sent(1182, 'Le règlement peut être modifié sans préavis.', 'The rules may be changed without notice.', '/lə ʁɛ.ɡlə.mɑ̃ pø.tɛtʁ mɔ.di.fje sɑ̃ pʁe.a.vi/', 'luh reh-gluh-MAHⁿ peu-tehtr mo-dee-FYAY sahⁿ pray-a-VEE', ['consigne']),
  sent(1183, 'Toute demande sera étudiée en réunion.', 'Every request will be looked at in the meeting.', '/tut də.mɑ̃d sə.ʁa e.ty.dje ɑ̃ ʁe.y.njɔ̃/', 'toot duh-MAHⁿD suh-ra ay-tü-DYAY ahⁿ ray-ü-NYOHⁿ', ['consigne', 'accord-f']),
  sent(1184, 'Les repas sont servis de midi à quatorze heures.', 'Meals are served from noon to two.', '/le ʁə.pa sɔ̃ sɛʁ.vi də mi.di a ka.tɔʁ.zœʁ/', 'lay ruh-PA sohⁿ sehr-VEE duh mee-DEE a ka-tor-ZUHR', ['consigne', 'accord-mp'], FCVDR),
  sent(1185, 'En cas de problème, on prévient la réception.', 'If there is a problem, you tell reception.', '/ɑ̃ ka də pʁɔ.blɛm ɔ̃ pʁe.vjɛ̃ la ʁe.sɛp.sjɔ̃/', 'ahⁿ ka duh pro-BLEM ohⁿ pray-VYEHⁿ la ray-sehp-SYOHⁿ', ['consigne', 'on']),
  sent(1186, "Le matériel se range dans l'armoire du fond.", 'Equipment goes in the cupboard at the back.', '/lə ma.te.ʁjɛl sə ʁɑ̃ʒ dɑ̃ laʁ.mwaʁ dy fɔ̃/', 'luh ma-tay-RYEHL suh RAHⁿZH dahⁿ lar-MWAR dü FOHⁿ', ['consigne', 'pronominal']),
  phrase(1187, 'il est interdit de', 'it is forbidden to', '/i.lɛ.tɛ̃.tɛʁ.di də/', 'ee-leh-tehⁿ-tehr-DEE duh', ['consigne']),
  phrase(1188, 'les visiteurs sont priés de', 'visitors are asked to', '/le vi.zi.tœʁ sɔ̃ pʁi.je də/', 'lay vee-zee-TUHR sohⁿ pree-YAY duh', ['consigne']),
  phrase(1189, 'sans préavis', 'without notice', '/sɑ̃ pʁe.a.vi/', 'sahⁿ pray-a-VEE', ['consigne']),
  sent(1190, 'Une consigne dit ce qui est fait, jamais qui le fait.', 'A set of rules says what is done, never who does it.', '/yn kɔ̃.siɲ di sə ki ɛ fɛ ʒa.mɛ ki lə fɛ/', 'ün kohⁿ-SEEÑ dee suh kee eh FEH zha-meh kee luh FEH', ['rule', 'consigne'], ['flashcard'],
    rule('Qu’est-ce qu’une consigne ne dit presque jamais ?', 'Qui fait la chose. Le passif laisse l’auteur dehors.')),
  sent(1191, 'Ce document a été mis à jour en janvier.', 'This document was updated in January.', '/sə dɔ.ky.mɑ̃ a e.te mi.za ʒuʁ ɑ̃ ʒɑ̃.vje/', 'suh do-kü-MAHⁿ a ay-tay mee-za ZHOOR ahⁿ zhahⁿ-VYAY', ['consigne', 'irregulier']),
  sent(1192, "Les clés seront remises à l'accueil.", 'The keys will be handed in at the desk.', '/le kle sə.ʁɔ̃ ʁə.miz a la.kœj/', 'lay KLAY suh-rohⁿ ruh-MEEZ a la-KUHY', ['consigne', 'accord-fp', 'irregulier']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
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
 *
 *  Both readings and their answer keys live here so the reading and the quiz
 *  cannot drift apart.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the notice board of a Montréal apartment block. 141 words. */
export const AVIS_TEXT =
  "AVIS AUX RÉSIDENTS. L'ascenseur sera arrêté du lundi 6 au mercredi 8, de huit heures à dix-sept heures. Les travaux sont faits par une entreprise extérieure. Pendant cette période, l'escalier de service est ouvert à tous les étages. Les poubelles sont ramassées le mardi matin, comme d'habitude. Les bacs doivent être sortis la veille au soir et rentrés avant midi. Le local à vélos a été repeint la semaine dernière ; il sera fermé jusqu'à vendredi. Les vélos qui restent dans le hall seront enlevés sans préavis. La réunion des résidents est reportée au jeudi 16, à dix-neuf heures, dans la salle du rez-de-chaussée. Toute question peut être envoyée au syndic par courriel. Une réponse vous sera donnée dans les cinq jours ouvrables. Merci de votre patience.";

/** Every passive verb group in AVIS_TEXT, in order. The annotation drill and
 *  the quiz are checked against this list. */
export const AVIS_PASSIFS = [
  'sera arrêté', 'sont faits', 'est ouvert', 'sont ramassées', 'doivent être sortis',
  'a été repeint', 'sera fermé', 'seront enlevés', 'est reportée', 'peut être envoyée',
  'sera donnée',
] as const;

/** The one place in AVIS_TEXT where the doer is named. */
export const AVIS_AGENT = 'par une entreprise extérieure';

/** Act 11: the model the learner imitates in the task. A set of procedures
 *  for a community kitchen in Lyon. 118 words in the body. */
export const CONSIGNE_TEXT =
  "CUISINE PARTAGÉE : MODE D'EMPLOI. La cuisine est ouverte de sept heures à vingt-deux heures. Les repas sont préparés sur place et ne sont pas livrés. Le matériel doit être lavé et rangé après chaque usage. Les casiers sont fermés à clé chaque soir par la personne de garde. Les produits qui restent dans le frigo le dimanche soir sont jetés. Toute réservation de la grande table se fait à l'avance, sur le tableau de l'entrée. En cas de problème, on prévient la personne de garde : une solution est presque toujours trouvée en dix minutes. Le règlement peut être modifié sans préavis. Il est affiché à l'entrée et il a été mis à jour en janvier.";

/** The four moves the model makes, in order, for the task checklist. */
export const CONSIGNE_MOVES = [
  'une règle au présent passif (est ouverte, sont préparés)',
  'une obligation (doit être lavé, doivent être sortis)',
  'une conséquence au futur ou au présent (sont jetés, seront enlevés)',
  'une phrase avec on ou un pronominal pour ce que la personne fait (on prévient, se fait)',
] as const;

/** The eight verbs whose person cannot become the subject of a French
 *  passive. Act 9 is built on this list and the sheet prints it. */
export const NO_PASSIVE_VERBS = [
  'donner à', 'dire à', 'demander à', 'offrir à', 'promettre à',
  'permettre à', 'répondre à', 'conseiller à',
] as const;
