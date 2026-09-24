// b1.09.l1 « Demander poliment » — the authored corpus, the imports and the
// citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top of
// B1-BUILD-PLAYBOOK.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson will import REFRAME and REFRAME_EN from this
// file; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL,
// E, ALL_ROWS, IMPORT_IDS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE LADDER, AND WHAT DECIDES WHICH RUNG. Six rungs from blunt to heavy,
//   and the measurement that picks one:
//
//     donne-moi le dossier                         the bare imperative
//     tu peux me donner le dossier                 present, small favour
//     tu pourrais me donner le dossier             conditional, a real favour
//     est-ce que tu pourrais me donner le dossier  est-ce que, more distance
//     pourrais-tu me donner le dossier             inversion, written or formal
//     auriez-vous la gentillesse de                the top, and rarely right
//
//   The rung tracks TWO things and neither of them is niceness: how much the
//   favour costs the other person, and how far away that person is from you.
//   A friend and a small favour take rung two; a stranger and an hour of
//   their time take rung four. The top rung on a flatmate is not politer, it
//   is cold.
//
//     je voudrais · j'aimerais against je veux     the wish, act 3
//     pouvoir, vouloir, devoir at the conditional  the engine, act 2
//     est-ce que and inversion as distance         act 4
//     peut-être, un peu, juste, si possible        the softeners, act 5
//     par hasard, ça vous dérangerait de           act 5
//     je me permets de                             act 5, written only
//     je voulais vous demander · je venais pour    the imparfait, act 6
//     on pourrait · ça te dirait de · et si on     proposals, act 8
//     tu devrais · il faudrait · à ta place        advice, act 9
//     volontiers · avec plaisir · c'est gentil     accepting, act 10
//     j'aimerais bien, mais · une autre fois       refusing, act 10
//     the shop, the counter, the colleague, the friend   act 11
//
//   THE THREE ANGLOPHONE TRAPS, act 7 and nowhere else: « can I have »
//   translated word for word onto « je peux avoir » at a counter that expects
//   a wish; « please » treated as a word that repairs a bare imperative; and
//   apologising three times for one small request, which reads as alarm.
//
//   NOT OWNED HERE. The FORMATION of the conditional belongs to b1.08 and is
//   assumed, never retaught: this lesson uses the forms as given. The
//   IMPARFAIT belongs to b1.01 (formation) and b1.02 (usage); act 6 uses the
//   politeness imparfait as one more job for a tense already owned. The SI
//   CLAUSE belongs to b1.10: « si tu as le temps » appears twice as a fixed
//   softener and is never drilled as a pattern. THE SUBJUNCTIVE after « il
//   faudrait que » belongs to b1.14 and later, so act 9 keeps « il faudrait »
//   in front of an infinitive only.
//
// QUOTED, NEVER TAUGHT (imported, never retyped):
//
//   b1.08  REFRAME (the conditional: what would be).  Acts 2, 4 and 9.
//   b1.02  REFRAME (the imparfait looks, it does not count).  Act 6.
//
// LEANED ON: b1.08 (the conditional forms), b1.02 (imparfait usage), b1.01
// (imparfait endings), a2.13 (pouvoir, vouloir, devoir), a1 café and marché
// counter language, a2 hébergement counter language.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME: `conseils-et-suggestions` (fondations, a2-b2). It exists in the
//     seed `themes` table, so it is NOT created at import. Ids are
//     `fr.b1.conseils-et-suggestions.NNN`.
//  2. POSTGRES WAS PROBED DIRECTLY, 2026-09-24, because the seed carries none
//     of this theme at all. The live counts are a2 132 rows (001-132), b1 115
//     rows (001-115), b2 48 rows (001-048). NOTHING at or above 1000.
//     **Never author below 1000 in this theme.**
//  3. ID BLOCK: b1.09 owns `.1000`-`.1199` and nothing else. Used here:
//     `.1000`-`.1190`.
//  4. THE 115 PUBLISHED b1 ROWS ARE NOT REUSABLE TODAY. They are real and
//     they are on topic: 001-005 and 019-020 are « il faudrait », 009-011 and
//     023-024 and 052-073 are « à ta place », 026-050 are « et si on » and
//     « on pourrait », 101 and 106 are the chunks « tu devrais peut-être »
//     and « on pourrait ». They are ABSENT FROM seed.json, so `src()` cannot
//     resolve them and no section can name one without throwing at module
//     load. They are listed in §F2 so that the import step can swap the
//     authored twins for the published rows instead of shipping duplicates.
//  5. SEED IS ABOUT A QUARTER OF POSTGRES. Read 2026-09-24. Every reused id
//     in §F was read out of seed.json and carries its French in a trailing
//     comment, so nothing here needs seed.json opened again.
//  6. RESPELLINGS SPELLED FOR THE NASAL CHECKER rather than for the ear:
//     `PLEZZ` for plaise and `DONN` for donne double the consonant so that
//     `nasal-convention` does not read a single vowel plus n or m as an
//     unmarked nasal. Everything else is spelled for the ear.
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
  id: 'b1.09',
  seq: 9,
  title: 'Polite Requests',
  sub: 'Demander poliment',
  canDo: 'Can ask for a service, propose, invite, advise, accept and refuse at the level of politeness the relationship and the size of the favour call for, in speech and in writing',
  prereqUnitIds: ['b1.02', 'b1.08'],
} as const;

export const LESSON_ID = 'b1.09.l1';
export const THEME = 'conseils-et-suggestions';
export const LEVEL = 'b1' as const;

/** The whole block, claimed in B1-BUILD-LOG.md. Nothing is authored outside
 *  it, and nothing is authored below 1000: Postgres holds 001-115 at b1. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A2 citations use the house English trail label, resolved through `unitRef`
 *  from the shipped `unit.seq`, never typed and never the raw id. B1 units are
 *  not in the seed yet, so they are named in French from the build plan.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMP_FORM_UNIT = 'b1.01';
export const IMP_USE_UNIT = 'b1.02';
export const COND_UNIT = 'b1.08';
export const SI_UNIT = 'b1.10';
export const MODAUX_UNIT = 'a2.13';
export const RESTO_UNIT = 'a2.07';
export const HOTEL_UNIT = 'a2.29';

export const MODAUX_REF = unitRef(MODAUX_UNIT);
export const RESTO_REF = unitRef(RESTO_UNIT);
export const HOTEL_REF = unitRef(HOTEL_UNIT);

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5,
  'b1.06': 6, 'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const IMP_FORM_REF = refFr(IMP_FORM_UNIT);
export const IMP_USE_REF = refFr(IMP_USE_UNIT);
export const COND_REF = refFr(COND_UNIT);
export const SI_REF = refFr(SI_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS
 *
 *  Both neighbour reframes are IMPORTED, never retyped, so a reword next door
 *  breaks this file at compile time instead of shipping a misquote. b1.08 and
 *  b1.02 are both on disk, committed and stable, so what is quoted here is
 *  what those lessons actually say.
 *
 *    b1.08  « Le futur dit ce qui sera. Le conditionnel dit ce qui serait. »
 *    b1.02  « À l'imparfait, on regarde le passé. On ne le compte pas. »
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B108_REFRAME, REFRAME_EN as B108_REFRAME_EN } from './conditionnel-present-corpus.ts';
export { REFRAME as B102_REFRAME, REFRAME_EN as B102_REFRAME_EN } from './imparfait-usage-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'La politesse ne mesure pas ta gentillesse. Elle mesure le service que tu demandes, et à qui.';
export const REFRAME_EN = 'Politeness does not measure your niceness. It measures the favour you are asking for, and who you are asking.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Plus la phrase est longue, plus elle est polie.',
    why: "True at the bottom of the ladder and false at the top. « Auriez-vous la gentillesse de me passer le sel » said to a flatmate is longer and worse: it sounds cold or sarcastic. The ladder has two wrong ends, not one, and act 1 is built on that.",
  },
  {
    text: 'Mets le conditionnel et tu seras poli.',
    why: "False for half the lesson. « Passe-moi le sel, s'il te plaît » between friends is perfectly polite with no conditional anywhere, and « je voudrais que vous partiez » is a conditional that throws somebody out. The conditional is act 2's engine, not the rule.",
  },
  {
    text: "S'il vous plaît, c'est le mot magique.",
    why: "The exact trap act 7 exists to break. Attached to a bare imperative addressed to a stranger, « s'il vous plaît » leaves an order an order. A learner who believes this stops looking at the verb.",
  },
  {
    text: 'Sois poli, excuse-toi.',
    why: "Survives only as a trap. Over-apologising is act 7's third card: a message that says sorry four times for a two-minute favour reads as alarm, and the reader starts looking for the real problem.",
  },
  {
    text: 'Vouvoie les inconnus, tutoie tes amis.',
    why: "True, useful, and a different lesson. b1.26 owns tu against vous. Here vous is a setting, not the subject: the whole ladder exists inside vous and again inside tu.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS
 *
 *  Every reused row carries its French in a trailing comment, so nothing here
 *  requires opening seed.json. Seed read 2026-09-24.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a1.verbes-essentiels.033',      // Tu peux ouvrir la fenêtre, s'il te plaît ?
    'fr.a1.questions.328',              // Pourriez-vous répéter la question, s'il vous plaît ?   (no voiceflash)
    'fr.sons.alphabet.221',             // Auriez-vous l'obligeance d'épeler le nom de la rue ?   (named only)
    'fr.a1.cafe.082',                   // Je peux avoir la carte ?
  ],
  act2: [
    'fr.a2.hebergement.075',            // Pourriez-vous m'apporter une serviette, s'il vous plaît ?
    'fr.a2.expressions-frequentes.072', // Pourriez-vous m'aider, s'il vous plaît ?   (no voiceflash)
    'fr.a2.hebergement.130',            // ce serait possible de
  ],
  act3: [
    'fr.a1.cafe.003',                   // Je voudrais…
    'fr.a1.marche.084',                 // Je voudrais ça.
    'fr.a2.verbes.362',                 // Je voudrais payer.
    'fr.a2.verbes.341',                 // Je veux payer.
    'fr.a2.hebergement.079',            // J'aimerais changer de chambre, si c'est possible.
    'fr.a1.verbes-du-quotidien.035',    // Je veux un café, s'il vous plaît.   (no voiceflash)
    'fr.a2.hebergement.091',            // Je voudrais parler au responsable, s'il vous plaît.
  ],
  act4: [
    'fr.a2.hebergement.074',            // Est-ce que je peux avoir une serviette, s'il vous plaît ?
    'fr.a2.hebergement.080',            // Est-ce que je peux avoir un oreiller de plus ?
    'fr.a1.objets.204',                 // Est-ce que je peux emprunter ton stylo?   (no voiceflash)
    'fr.a1.au-restaurant.209',          // Puis-je avoir une serviette, s'il vous plaît ?   (no voiceflash)
    'fr.sons.rythme.111',               // Est-ce que tu peux garder les enfants ce soir ?   (named only)
    'fr.a2.hebergement.078',            // Est-ce que ce serait possible d'avoir une autre chambre ?
  ],
  act5: [
    'fr.a1.marche.098',                 // Un peu plus, s'il vous plaît.
    'fr.a2.hebergement.131',            // désolé de vous déranger
    'fr.a2.hebergement.077',            // Excusez-moi de vous déranger.
    'fr.b1.cafe.073',                   // Nous aimerions nous asseoir en terrasse, si cela ne vous dérange pas.   (named only)
    'fr.a2.au-restaurant.137',          // Vous pouvez me l'écrire, s'il vous plaît ?
  ],
  act6: [
    'fr.a2.hebergement.093',            // Est-ce que je peux parler à quelqu'un d'autre ?
    'fr.a1.salutations.014',            // Excusez-moi
  ],
  act7: [
    'fr.a2.quebec-et-francophonie.198', // Je peux avoir la facture, s'il vous plaît ?
    'fr.a1.cafe.051',                   // Je voudrais un café, s'il vous plaît.   (no voiceflash)
    'fr.a1.salutations.057',            // Je suis désolé   (named only)
    'fr.a1.salutations.267',            // Pardon, je ne veux pas vous déranger.   (named only)
  ],
  act8: [
    'fr.b1.cafe.081',                   // Si tu as le temps, on pourrait prendre un café ensemble.   (no voiceflash)
    'fr.sons.rythme.089',               // Tu peux passer chez moi demain ?   (named only)
  ],
  act9: [
    'fr.b1.soins.006',                  // vous devriez   (no voiceflash)
    'fr.b2.ethique.005',                // on devrait   (no voiceflash)
  ],
  act10: [
    'fr.a1.salutations.053',            // Avec plaisir   (named only)
    'fr.a2.courses.198',                // Je vais réfléchir, merci.
    'fr.a2.courses.196',                // Je regarde seulement, merci.
    'fr.a2.hebergement.117',            // Je suis désolée, c'est complet ce soir.
    'fr.a2.hebergement.119',            // Je vais voir ce que je peux faire.
  ],
  act11: [
    'fr.a2.au-restaurant.133',          // Vous pouvez répéter, s'il vous plaît ?
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Imports with NO flashcard drill: nameable in a section, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.sons.alphabet.221',     // sentence, review
  'fr.sons.rythme.111',       // sentence, review
  'fr.sons.rythme.089',       // sentence, review
  'fr.b1.cafe.073',           // dictation only
  'fr.a1.salutations.057',    // voiceflash, review
  'fr.a1.salutations.267',    // sentence, review
  'fr.a1.salutations.053',    // voiceflash, review
];

/** Imports with NO voiceflash: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.a1.questions.328',
  'fr.a2.expressions-frequentes.072',
  'fr.a1.objets.204',
  'fr.a1.au-restaurant.209',
  'fr.a1.verbes-du-quotidien.035',
  'fr.a1.cafe.051',
  'fr.b1.cafe.081',
  'fr.b1.soins.006',
  'fr.b2.ethique.005',
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F2. THE PUBLISHED ROWS THIS BUILD DELIBERATELY DOES NOT NAME
 *
 *  Probed in Postgres 2026-09-24. They are on topic and they are good, but
 *  they are absent from seed.json, so `src()` cannot resolve them and naming
 *  one would throw at module load. Listed so the import step can reconcile
 *  the authored twins against them rather than publishing duplicates.
 * ══════════════════════════════════════════════════════════════════════════ */

export const DB_ONLY_TWINS: readonly { id: string; fr: string; mine: string }[] = [
  { id: 'fr.b1.conseils-et-suggestions.001', fr: "Tu devrais changer de travail si tu n'es pas heureux.", mine: 'act 9, tu devrais' },
  { id: 'fr.b1.conseils-et-suggestions.002', fr: 'Il faudrait vérifier la pression des pneus avant de partir en voyage.', mine: 'act 9, il faudrait plus infinitive' },
  { id: 'fr.b1.conseils-et-suggestions.009', fr: "À ta place, j'attendrais la fin du mois pour acheter la voiture.", mine: 'act 9, à ta place' },
  { id: 'fr.b1.conseils-et-suggestions.026', fr: 'Et si on partait en week-end à la montagne ?', mine: 'act 8, et si on' },
  { id: 'fr.b1.conseils-et-suggestions.030', fr: 'On pourrait organiser un covoiturage pour aller au travail.', mine: 'act 8, on pourrait' },
  { id: 'fr.b1.conseils-et-suggestions.101', fr: 'tu devrais peut-être', mine: 'act 9, the chunk' },
  { id: 'fr.b1.conseils-et-suggestions.106', fr: 'on pourrait', mine: 'act 8, the chunk' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, final stressed syllable in caps,
 *  ü for French u, nasals closed with the superscript ⁿ.
 *
 *    -ais -ait -aient   [ɛ]     REH      the conditional, everywhere
 *    -iez               [je]    RYAY     pourriez, auriez, voudriez
 *    -ions              [jɔ̃]    RYOHⁿ    aimerions, voudrions
 *    plaît              [plɛ]   PLEH
 *    plaise             [plɛz]  PLEZZ    doubled for the nasal checker
 *
 *  NO U+203F anywhere: liaison consonants go onto the next syllable.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

/** A fixed phrase or opener: the rung itself, with no full sentence around it. */
const chunk = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['politesse', ...tags], drills, version: 1, grammarPoints: ['demande-polie'],
});

const sent = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['politesse', ...tags], drills, version: 1, grammarPoints: ['demande-polie'],
});

/* ── ACT 1 · L'ÉCHELLE ──────────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  chunk(1000, 'Donne-moi le dossier.', 'Give me the file.', '/dɔn.mwa lə dɔ.sje/', 'donn-mwah luh doh-SYAY', ['barreau1', 'imperatif']),
  chunk(1001, 'Tu peux me donner le dossier ?', 'Can you give me the file?', '/ty pø mə dɔ.ne lə dɔ.sje/', 'tü puh muh doh-nay luh doh-SYAY', ['barreau2', 'present']),
  chunk(1002, 'Tu pourrais me donner le dossier ?', 'Could you give me the file?', '/ty pu.ʁɛ mə dɔ.ne lə dɔ.sje/', 'tü poo-reh muh doh-nay luh doh-SYAY', ['barreau3', 'conditionnel'], FCVDR),
  chunk(1003, 'Est-ce que tu pourrais me donner le dossier ?', 'Could you give me the file?', '/ɛs.kə ty pu.ʁɛ mə dɔ.ne lə dɔ.sje/', 'es-kuh tü poo-reh muh doh-nay luh doh-SYAY', ['barreau4', 'estceque']),
  chunk(1004, 'Pourrais-tu me donner le dossier ?', 'Could you give me the file?', '/pu.ʁɛ.ty mə dɔ.ne lə dɔ.sje/', 'poo-reh-TÜ muh doh-nay luh doh-SYAY', ['barreau5', 'inversion']),
  chunk(1005, 'Auriez-vous la gentillesse de me donner le dossier ?', 'Would you be so kind as to give me the file?','/o.ʁje.vu la ʒɑ̃.ti.jɛs də mə dɔ.ne lə dɔ.sje/', 'oh-ryay-VOO lah zhahⁿ-tee-YESS duh muh doh-nay luh doh-SYAY', ['barreau6', 'lourd']),
  sent(1006, 'Tu peux me passer le sel ?', 'Can you pass me the salt?', '/ty pø mə pa.se lə sɛl/', 'tü puh muh pah-say luh SEL', ['petit', 'ami']),
  sent(1007, 'Tu pourrais relire mon rapport avant ce soir ?', 'Could you read over my report before tonight?', '/ty pu.ʁɛ ʁə.liʁ mɔ̃ ʁa.pɔʁ a.vɑ̃ sə swaʁ/', 'tü poo-reh ruh-leer mohⁿ rah-por ah-vahⁿ suh SWAR', ['grand', 'collegue'], FCVDR),
  sent(1008, 'Est-ce que vous pourriez me rappeler demain matin ?', 'Could you call me back tomorrow morning?', '/ɛs.kə vu pu.ʁje mə ʁa.pə.le də.mɛ̃ ma.tɛ̃/', 'es-kuh voo poo-ryay muh rah-puh-lay duh-mehⁿ mah-TEHⁿ', ['grand', 'guichet']),
  sent(1009, 'Pourriez-vous vérifier mon dossier, madame ?', 'Could you check my file, madam?', '/pu.ʁje.vu ve.ʁi.fje mɔ̃ dɔ.sje ma.dam/', 'poo-ryay-voo vay-ree-fyay mohⁿ doh-syay mah-DAM', ['grand', 'guichet']),
  sent(1010, "Passe-moi le pain, s'il te plaît.", 'Pass me the bread, please.', '/pas.mwa lə pɛ̃ sil tə plɛ/', 'pass-mwah luh pehⁿ seel tuh PLEH', ['petit', 'ami', 'imperatif']),
  sent(1011, "Ferme la porte, s'il te plaît.", 'Close the door, please.', '/fɛʁm la pɔʁt sil tə plɛ/', 'ferm lah port seel tuh PLEH', ['petit', 'ami', 'imperatif']),
  sent(1012, 'Vous auriez deux minutes ?', 'Would you have two minutes?', '/vu.zo.ʁje dø mi.nyt/', 'voo-zoh-ryay duh mee-NÜT', ['ouverture']),
  sent(1013, 'Je peux te demander un service ?', 'Can I ask you a favour?', '/ʒə pø tə də.mɑ̃.de œ̃ sɛʁ.vis/', 'zhuh puh tuh duh-mahⁿ-day uhⁿ ser-VEESS', ['ouverture', 'ami']),
  sent(1014, 'Je peux vous demander un service ?', 'Can I ask you a favour?', '/ʒə pø vu də.mɑ̃.de œ̃ sɛʁ.vis/', 'zhuh puh voo duh-mahⁿ-day uhⁿ ser-VEESS', ['ouverture', 'collegue']),
  sent(1015, 'Ce serait un grand service.', 'It would be a big favour.', '/sə sə.ʁɛ œ̃ ɡʁɑ̃ sɛʁ.vis/', 'suh suh-reh uhⁿ grahⁿ ser-VEESS', ['grand']),
  sent(1016, "Ce n'est pas urgent, quand tu auras le temps.", 'It is not urgent, whenever you have time.', '/sə nɛ pa.zyʁ.ʒɑ̃ kɑ̃ ty o.ʁa lə tɑ̃/', 'suh neh pah-zür-zhahⁿ kahⁿ tü oh-rah luh TAHⁿ', ['petit', 'reduire'], FCVDR),
  sent(1017, "Dis-moi si c'est trop, je trouverai quelqu'un d'autre.", 'Tell me if it is too much, I will find somebody else.', '/di.mwa si sɛ tʁo ʒə tʁu.və.ʁe kɛl.kœ̃ dotʁ/', 'dee-mwah see seh troh zhuh troo-vuh-ray kel-kuhⁿ DOHTR', ['sortie', 'ami']),
];

/* ── ACT 2 · LE MOTEUR : POUVOIR, VOULOIR, DEVOIR ──────────────────────── */

export const ACT2_ROWS: Row[] = [
  chunk(1018, 'tu pourrais', 'you could', '/ty pu.ʁɛ/', 'tü poo-REH', ['pouvoir', 'moteur']),
  chunk(1019, 'vous pourriez', 'you could', '/vu pu.ʁje/', 'voo poo-RYAY', ['pouvoir', 'moteur']),
  chunk(1020, 'je pourrais', 'I could', '/ʒə pu.ʁɛ/', 'zhuh poo-REH', ['pouvoir', 'moteur']),
  chunk(1021, 'je voudrais', 'I would like', '/ʒə vu.dʁɛ/', 'zhuh voo-DREH', ['vouloir', 'moteur'], FCVDR),
  chunk(1022, 'nous voudrions', 'we would like', '/nu vu.dʁi.jɔ̃/', 'noo voo-dree-YOHⁿ', ['vouloir', 'moteur']),
  chunk(1023, 'tu devrais', 'you should', '/ty də.vʁɛ/', 'tü duh-VREH', ['devoir', 'moteur']),
  chunk(1024, 'il faudrait', 'it would need, we should', '/il fo.dʁɛ/', 'eel foh-DREH', ['falloir', 'moteur']),
  chunk(1025, 'vous auriez', 'you would have', '/vu.zo.ʁje/', 'voo-zoh-RYAY', ['avoir', 'moteur']),
  sent(1026, 'Tu pourrais me prêter ta voiture samedi ?', 'Could you lend me your car on Saturday?', '/ty pu.ʁɛ mə pʁɛ.te ta vwa.tyʁ sam.di/', 'tü poo-reh muh preh-tay tah vwah-tür sam-DEE', ['pouvoir', 'grand']),
  sent(1027, "Vous pourriez m'expliquer le formulaire ?", 'Could you explain the form to me?', '/vu pu.ʁje mɛk.spli.ke lə fɔʁ.my.lɛʁ/', 'voo poo-ryay mek-splee-kay luh for-mü-LEHR', ['pouvoir', 'guichet']),
  sent(1028, 'Je pourrais passer demain, si ça vous arrange.', 'I could come by tomorrow, if that suits you.', '/ʒə pu.ʁɛ pa.se də.mɛ̃ si sa vu.za.ʁɑ̃ʒ/', 'zhuh poo-reh pah-say duh-mehⁿ see sah voo-zah-RAHⁿZH', ['pouvoir', 'offrir'], FCVDR),
  sent(1029, 'Nous voudrions déplacer le rendez-vous.', 'We would like to move the appointment.', '/nu vu.dʁi.jɔ̃ de.pla.se lə ʁɑ̃.de.vu/', 'noo voo-dree-yohⁿ day-plah-say luh rahⁿ-day-VOO', ['vouloir']),
  sent(1030, "Je voudrais un reçu, s'il vous plaît.", 'I would like a receipt, please.', '/ʒə vu.dʁɛ œ̃ ʁə.sy sil vu plɛ/', 'zhuh voo-dreh uhⁿ ruh-sü seel voo PLEH', ['vouloir', 'commerce']),
  sent(1031, 'Tu devrais lui écrire avant vendredi.', 'You should write to him before Friday.', '/ty də.vʁɛ lɥi e.kʁiʁ a.vɑ̃ vɑ̃.dʁə.di/', 'tü duh-vreh lwee ay-kreer ah-vahⁿ vahⁿ-druh-DEE', ['devoir', 'conseil']),
  sent(1032, 'Il faudrait prévenir la gardienne.', 'The caretaker would need to be told.', '/il fo.dʁɛ pʁev.niʁ la ɡaʁ.djɛn/', 'eel foh-dreh prayv-neer lah gar-DYENN', ['falloir', 'conseil']),
  sent(1033, 'Vous auriez un stylo, par hasard ?', 'Would you have a pen, by any chance?', '/vu.zo.ʁje œ̃ sti.lo paʁ a.zaʁ/', 'voo-zoh-ryay uhⁿ stee-loh par ah-ZAR', ['avoir', 'adoucir']),
  sent(1034, 'Ça vous dérangerait de fermer la fenêtre ?', 'Would you mind closing the window?', '/sa vu de.ʁɑ̃ʒ.ʁɛ də fɛʁ.me la fə.nɛtʁ/', 'sah voo day-rahⁿzh-reh duh fer-may lah fuh-NEHTR', ['deranger']),
  sent(1035, 'Est-ce que ce serait possible de payer en deux fois ?', 'Would it be possible to pay in two instalments?', '/ɛs.kə sə sə.ʁɛ pɔ.sibl də pɛ.je ɑ̃ dø fwa/', 'es-kuh suh suh-reh poh-seebl duh peh-yay ahⁿ duh FWAH', ['possible', 'commerce'], FCVDR),
];

/* ── ACT 3 · JE VOUDRAIS, PAS JE VEUX ──────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  chunk(1036, "j'aimerais", 'I would like', '/ʒɛ.mə.ʁɛ/', 'zheh-muh-REH', ['souhait']),
  chunk(1037, 'je préférerais', 'I would prefer', '/ʒə pʁe.fe.ʁə.ʁɛ/', 'zhuh pray-fay-ruh-REH', ['souhait']),
  chunk(1038, 'je souhaiterais', 'I would wish', '/ʒə swɛ.tə.ʁɛ/', 'zhuh sweh-tuh-REH', ['souhait', 'ecrit']),
  sent(1039, "J'aimerais réserver une table pour jeudi soir.", 'I would like to book a table for Thursday evening.', '/ʒɛ.mə.ʁɛ ʁe.zɛʁ.ve yn tabl puʁ ʒø.di swaʁ/', 'zheh-muh-reh ray-zer-vay ün tabl poor zhuh-dee SWAR', ['souhait', 'commerce'], FCVDR),
  sent(1040, "Je voudrais un renseignement, s'il vous plaît.", 'I would like some information, please.', '/ʒə vu.dʁɛ œ̃ ʁɑ̃.sɛɲ.mɑ̃ sil vu plɛ/', 'zhuh voo-dreh uhⁿ rahⁿ-señ-mahⁿ seel voo PLEH', ['souhait', 'guichet']),
  sent(1041, 'Je préférerais venir en fin de journée.', 'I would rather come at the end of the day.', '/ʒə pʁe.fe.ʁə.ʁɛ və.niʁ ɑ̃ fɛ̃ də ʒuʁ.ne/', 'zhuh pray-fay-ruh-reh vuh-neer ahⁿ fehⁿ duh zhoor-NAY', ['souhait']),
  sent(1042, "Nous aimerions visiter l'appartement samedi.", 'We would like to view the flat on Saturday.', '/nu.zɛ.mə.ʁi.jɔ̃ vi.zi.te la.paʁ.tə.mɑ̃ sam.di/', 'noo-zeh-muh-ree-yohⁿ vee-zee-tay lah-par-tuh-mahⁿ sam-DEE', ['souhait']),
  sent(1043, 'Je veux ce poste et je le dirai clairement.', 'I want this job and I will say so plainly.', '/ʒə vø sə pɔst e ʒə lə di.ʁe klɛʁ.mɑ̃/', 'zhuh vuh suh post ay zhuh luh dee-ray klehr-MAHⁿ', ['veux', 'juste']),
  sent(1044, 'Je ne veux pas de sucre, merci.', 'I do not want any sugar, thank you.', '/ʒə nə vø pa də sykʁ mɛʁ.si/', 'zhuh nuh vuh pah duh sükr mer-SEE', ['veux', 'juste']),
  sent(1045, 'Je voudrais bien, mais je travaille ce soir.', 'I would like to, but I am working tonight.', '/ʒə vu.dʁɛ bjɛ̃ mɛ ʒə tʁa.vaj sə swaʁ/', 'zhuh voo-dreh byehⁿ meh zhuh trah-vahy suh SWAR', ['souhait', 'refus']),
  sent(1046, 'Je voudrais deux baguettes et un pain complet.', 'I would like two baguettes and a wholemeal loaf.', '/ʒə vu.dʁɛ dø ba.ɡɛt e œ̃ pɛ̃ kɔ̃.plɛ/', 'zhuh voo-dreh duh bah-ghet ay uhⁿ pehⁿ kohⁿ-PLEH', ['souhait', 'commerce']),
  sent(1047, "J'aimerais parler à quelqu'un du service technique.", 'I would like to speak to somebody from technical support.', '/ʒɛ.mə.ʁɛ paʁ.le a kɛl.kœ̃ dy sɛʁ.vis tɛk.nik/', 'zheh-muh-reh par-lay ah kel-kuhⁿ dü ser-veess tek-NEEK', ['souhait', 'guichet']),
  sent(1048, "On voudrait changer de place, si c'est possible.", 'We would like to change seats, if possible.', '/ɔ̃ vu.dʁɛ ʃɑ̃.ʒe də plas si sɛ pɔ.sibl/', 'ohⁿ voo-dreh shahⁿ-zhay duh plass see seh poh-SEEBL', ['souhait', 'adoucir']),
  sent(1049, 'Je souhaiterais recevoir une confirmation écrite.', 'I would wish to receive a written confirmation.', '/ʒə swɛ.tə.ʁɛ ʁə.sə.vwaʁ yn kɔ̃.fiʁ.ma.sjɔ̃ e.kʁit/', 'zhuh sweh-tuh-reh ruh-suh-vwar ün kohⁿ-feer-mah-syohⁿ ay-KREET', ['souhait', 'ecrit'], FCVDR),
  sent(1050, 'Je voudrais savoir combien de temps ça prend.', 'I would like to know how long it takes.', '/ʒə vu.dʁɛ sa.vwaʁ kɔ̃.bjɛ̃ də tɑ̃ sa pʁɑ̃/', 'zhuh voo-dreh sah-vwar kohⁿ-byehⁿ duh tahⁿ sah PRAHⁿ', ['souhait']),
  sent(1051, 'Je veux bien, avec plaisir.', 'I would be glad to, with pleasure.', '/ʒə vø bjɛ̃ a.vɛk plɛ.ziʁ/', 'zhuh vuh byehⁿ ah-vek pleh-ZEER', ['veux', 'accepter']),
  sent(1052, 'Je voudrais réserver pour quatre personnes.', 'I would like to book for four people.', '/ʒə vu.dʁɛ ʁe.zɛʁ.ve puʁ katʁ pɛʁ.sɔn/', 'zhuh voo-dreh ray-zer-vay poor katr per-SONN', ['souhait', 'commerce']),
];

/* ── ACT 4 · LA FORME DE LA QUESTION ───────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  chunk(1053, 'est-ce que tu pourrais', 'could you', '/ɛs.kə ty pu.ʁɛ/', 'es-kuh tü poo-REH', ['estceque']),
  chunk(1054, 'pourrais-tu', 'could you', '/pu.ʁɛ.ty/', 'poo-reh-TÜ', ['inversion']),
  chunk(1055, 'pourriez-vous', 'could you', '/pu.ʁje.vu/', 'poo-ryay-VOO', ['inversion'], FCVDR),
  chunk(1056, 'auriez-vous', 'would you have', '/o.ʁje.vu/', 'oh-ryay-VOO', ['inversion']),
  chunk(1057, 'auriez-vous la gentillesse de', 'would you be so kind as to', '/o.ʁje.vu la ʒɑ̃.ti.jɛs də/', 'oh-ryay-voo lah zhahⁿ-tee-YESS duh', ['inversion', 'lourd']),
  sent(1058, 'Pourriez-vous me confirmer la date ?', 'Could you confirm the date for me?', '/pu.ʁje.vu mə kɔ̃.fiʁ.me la dat/', 'poo-ryay-voo muh kohⁿ-feer-may lah DAT', ['inversion', 'guichet']),
  sent(1059, "Est-ce que vous pourriez m'envoyer le devis ?", 'Could you send me the quote?', '/ɛs.kə vu pu.ʁje mɑ̃.vwa.je lə də.vi/', 'es-kuh voo poo-ryay mahⁿ-vwah-yay luh duh-VEE', ['estceque', 'ecrit']),
  sent(1060, 'Auriez-vous la gentillesse de me rappeler ?', 'Would you be so kind as to call me back?', '/o.ʁje.vu la ʒɑ̃.ti.jɛs də mə ʁa.pə.le/', 'oh-ryay-voo lah zhahⁿ-tee-yess duh muh rah-puh-LAY', ['inversion', 'lourd']),
  sent(1061, 'Pourrais-tu me prévenir avant de partir ?', 'Could you let me know before you leave?', '/pu.ʁɛ.ty mə pʁev.niʁ a.vɑ̃ də paʁ.tiʁ/', 'poo-reh-tü muh prayv-neer ah-vahⁿ duh par-TEER', ['inversion', 'ami']),
  sent(1062, 'Est-ce que tu pourrais garder mon chat cette semaine ?', 'Could you look after my cat this week?', '/ɛs.kə ty pu.ʁɛ ɡaʁ.de mɔ̃ ʃa sɛt sə.mɛn/', 'es-kuh tü poo-reh gar-day mohⁿ shah set suh-MENN', ['estceque', 'grand'], FCVDR),
  sent(1063, 'Voudriez-vous patienter deux minutes ?', 'Would you like to wait two minutes?', '/vu.dʁi.je.vu pa.sjɑ̃.te dø mi.nyt/', 'voo-dree-yay-voo pah-syahⁿ-tay duh mee-NÜT', ['inversion']),
  sent(1064, 'Puis-je vous poser une question ?', 'May I ask you a question?', '/pɥi.ʒə vu po.ze yn kɛs.tjɔ̃/', 'pwee-zhuh voo poh-zay ün kes-TYOHⁿ', ['inversion', 'ecrit']),
  sent(1065, 'Tu peux fermer à clé en partant ?', 'Can you lock up when you leave?', '/ty pø fɛʁ.me a kle ɑ̃ paʁ.tɑ̃/', 'tü puh fer-may ah klay ahⁿ par-TAHⁿ', ['present', 'petit']),
  sent(1066, 'Vous pourriez parler un peu plus fort ?', 'Could you speak a little louder?', '/vu pu.ʁje paʁ.le œ̃ pø ply fɔʁ/', 'voo poo-ryay par-lay uhⁿ puh plü FOR', ['conditionnel', 'adoucir']),
  sent(1067, "Serait-il possible de changer l'heure ?", 'Would it be possible to change the time?', '/sə.ʁɛ.til pɔ.sibl də ʃɑ̃.ʒe lœʁ/', 'suh-reh-teel poh-seebl duh shahⁿ-zhay LUHR', ['inversion', 'ecrit']),
  sent(1068, 'Est-ce que ce serait trop vous demander ?', 'Would that be asking too much of you?', '/ɛs.kə sə sə.ʁɛ tʁo vu də.mɑ̃.de/', 'es-kuh suh suh-reh troh voo duh-mahⁿ-DAY', ['estceque', 'grand']),
  sent(1069, "Pourriez-vous m'indiquer le bon guichet ?", 'Could you point me to the right counter?', '/pu.ʁje.vu mɛ̃.di.ke lə bɔ̃ ɡi.ʃɛ/', 'poo-ryay-voo mehⁿ-dee-kay luh bohⁿ ghee-SHEH', ['inversion', 'guichet']),
  sent(1070, 'Aurais-tu une minute pour moi ?', 'Would you have a minute for me?', '/o.ʁɛ.ty yn mi.nyt puʁ mwa/', 'oh-reh-tü ün mee-nüt poor MWAH', ['inversion', 'ami']),
];

/* ── ACT 5 · LES ADOUCISSEURS ──────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  chunk(1071, 'par hasard', 'by any chance', '/paʁ a.zaʁ/', 'par ah-ZAR', ['adoucir'], FCVDR),
  chunk(1072, 'si possible', 'if possible', '/si pɔ.sibl/', 'see poh-SEEBL', ['adoucir'], FCVDR),
  chunk(1073, 'juste une minute', 'just one minute', '/ʒys.tyn mi.nyt/', 'zhüs-tün mee-NÜT', ['adoucir']),
  chunk(1074, 'un peu', 'a little', '/œ̃ pø/', 'uhⁿ PUH', ['adoucir']),
  chunk(1075, 'peut-être', 'perhaps', '/pø.tɛtʁ/', 'puh-TEHTR', ['adoucir'], FCVDR),
  chunk(1076, 'ça vous dérangerait de', 'would you mind', '/sa vu de.ʁɑ̃ʒ.ʁɛ də/', 'sah voo day-rahⁿzh-REH duh', ['adoucir', 'deranger']),
  chunk(1077, 'je me permets de', 'I am taking the liberty of', '/ʒə mə pɛʁ.mɛ də/', 'zhuh muh per-MEH duh', ['adoucir', 'ecrit']),
  chunk(1078, 'si ça ne te dérange pas', 'if you do not mind', '/si sa nə tə de.ʁɑ̃ʒ pa/', 'see sah nuh tuh day-rahⁿzh PAH', ['adoucir', 'ami']),
  sent(1079, 'Tu aurais un chargeur, par hasard ?', 'Would you have a charger, by any chance?', '/ty o.ʁɛ œ̃ ʃaʁ.ʒœʁ paʁ a.zaʁ/', 'tü oh-reh uhⁿ shar-zhuhr par ah-ZAR', ['adoucir', 'petit']),
  sent(1080, 'Je voudrais juste une signature, si possible.', 'I would just like one signature, if possible.', '/ʒə vu.dʁɛ ʒyst yn si.ɲa.tyʁ si pɔ.sibl/', 'zhuh voo-dreh zhüst ün see-ñah-tür see poh-SEEBL', ['adoucir', 'guichet'], FCVDR),
  sent(1081, 'Tu pourrais peut-être appeler avant midi.', 'You could perhaps call before noon.', '/ty pu.ʁɛ pø.tɛ.tʁa.pə.le a.vɑ̃ mi.di/', 'tü poo-reh puh-teh-trah-puh-lay ah-vahⁿ mee-DEE', ['adoucir', 'conseil']),
  sent(1082, 'Ce serait possible de décaler un peu la réunion ?', 'Would it be possible to push the meeting back a little?', '/sə sə.ʁɛ pɔ.sibl də de.ka.le œ̃ pø la ʁe.y.njɔ̃/', 'suh suh-reh poh-seebl duh day-kah-lay uhⁿ puh lah ray-ü-NYOHⁿ', ['adoucir', 'collegue']),
  sent(1083, 'Ça te dérangerait de me déposer à la gare ?', 'Would you mind dropping me at the station?', '/sa tə de.ʁɑ̃ʒ.ʁɛ də mə de.po.ze a la ɡaʁ/', 'sah tuh day-rahⁿzh-reh duh muh day-poh-zay ah lah GAR', ['deranger', 'ami'], FCVDR),
  sent(1084, 'Je me permets de vous relancer au sujet du devis.', 'I am taking the liberty of following up about the quote.', '/ʒə mə pɛʁ.mɛ də vu ʁə.lɑ̃.se o sy.ʒɛ dy də.vi/', 'zhuh muh per-meh duh voo ruh-lahⁿ-say oh sü-zheh dü duh-VEE', ['adoucir', 'ecrit']),
  sent(1085, "Si ça ne te dérange pas, je passerais vers dix heures.", 'If you do not mind, I would come by around ten.', '/si sa nə tə de.ʁɑ̃ʒ pa ʒə pa.sə.ʁɛ vɛʁ di.zœʁ/', 'see sah nuh tuh day-rahⁿzh pah zhuh pah-suh-reh vehr dee-ZUHR', ['adoucir', 'ami']),
  sent(1086, 'Auriez-vous un moment, si possible avant jeudi ?', 'Would you have a moment, before Thursday if possible?', '/o.ʁje.vu œ̃ mɔ.mɑ̃ si pɔ.si.bla.vɑ̃ ʒø.di/', 'oh-ryay-voo uhⁿ moh-mahⁿ see poh-see-blah-vahⁿ zhuh-DEE', ['adoucir', 'collegue']),
  sent(1087, 'Je voudrais juste vérifier une chose.', 'I would just like to check one thing.', '/ʒə vu.dʁɛ ʒyst ve.ʁi.fje yn ʃoz/', 'zhuh voo-dreh zhüst vay-ree-fyay ün SHOHZ', ['adoucir']),
  sent(1088, 'On pourrait peut-être en parler lundi.', 'We could perhaps talk about it on Monday.', '/ɔ̃ pu.ʁɛ pø.tɛ.tʁɑ̃ paʁ.le lœ̃.di/', 'ohⁿ poo-reh puh-teh-trahⁿ par-lay luhⁿ-DEE', ['adoucir', 'proposer']),
  sent(1089, "Tu n'aurais pas dix minutes, par hasard ?", 'You would not have ten minutes, by any chance?', '/ty no.ʁɛ pa di mi.nyt paʁ a.zaʁ/', 'tü noh-reh pah dee mee-nüt par ah-ZAR', ['adoucir', 'ami']),
  sent(1090, 'Ce serait un peu plus simple pour tout le monde.', 'It would be a little simpler for everybody.', '/sə sə.ʁɛ œ̃ pø ply sɛ̃pl puʁ tu lə mɔ̃d/', 'suh suh-reh uhⁿ puh plü sehⁿpl poor too luh MOHⁿD', ['adoucir']),
];

/* ── ACT 6 · L'IMPARFAIT DE POLITESSE ──────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  chunk(1091, 'je voulais', 'I wanted', '/ʒə vu.lɛ/', 'zhuh voo-LEH', ['imparfait'], FCVDR),
  chunk(1092, 'je venais', 'I was coming', '/ʒə və.nɛ/', 'zhuh vuh-NEH', ['imparfait']),
  chunk(1093, 'je voulais vous demander', 'I wanted to ask you', '/ʒə vu.lɛ vu də.mɑ̃.de/', 'zhuh voo-leh voo duh-mahⁿ-DAY', ['imparfait', 'ouverture']),
  chunk(1094, 'je venais pour', 'I was coming about', '/ʒə və.nɛ puʁ/', 'zhuh vuh-neh POOR', ['imparfait', 'ouverture']),
  sent(1095, 'Je voulais vous demander un renseignement.', 'I wanted to ask you for some information.', '/ʒə vu.lɛ vu də.mɑ̃.de œ̃ ʁɑ̃.sɛɲ.mɑ̃/', 'zhuh voo-leh voo duh-mahⁿ-day uhⁿ rahⁿ-señ-MAHⁿ', ['imparfait', 'guichet'], FCVDR),
  sent(1096, 'Je venais pour le colis de la semaine dernière.', "I was coming about last week's parcel.", '/ʒə və.nɛ puʁ lə kɔ.li də la sə.mɛn dɛʁ.njɛʁ/', 'zhuh vuh-neh poor luh koh-lee duh lah suh-menn der-NYEHR', ['imparfait', 'guichet']),
  sent(1097, 'Je voulais savoir si le cours de mardi est maintenu.', "I wanted to know whether Tuesday's class is still on.", '/ʒə vu.lɛ sa.vwaʁ si lə kuʁ də maʁ.di ɛ mɛ̃t.ny/', 'zhuh voo-leh sah-vwar see luh koor duh mar-dee eh mehⁿt-NÜ', ['imparfait']),
  sent(1098, 'Je passais juste voir si tout allait bien.', 'I was just dropping in to see if all was well.', '/ʒə pa.sɛ ʒyst vwaʁ si tu.ta.lɛ bjɛ̃/', 'zhuh pah-seh zhüst vwar see too-tah-leh BYEHⁿ', ['imparfait', 'ami']),
  sent(1099, 'Je voulais te demander quelque chose.', 'I wanted to ask you something.', '/ʒə vu.lɛ tə də.mɑ̃.de kɛl.kə ʃoz/', 'zhuh voo-leh tuh duh-mahⁿ-day kel-kuh SHOHZ', ['imparfait', 'ami']),
  sent(1100, 'Je venais voir si vous aviez reçu mon dossier.', 'I was coming to see whether you had received my file.', '/ʒə və.nɛ vwaʁ si vu.za.vje ʁə.sy mɔ̃ dɔ.sje/', 'zhuh vuh-neh vwar see voo-zah-vyay ruh-sü mohⁿ doh-SYAY', ['imparfait', 'guichet']),
  sent(1101, 'Je voulais vous remercier pour hier.', 'I wanted to thank you for yesterday.', '/ʒə vu.lɛ vu ʁə.mɛʁ.sje puʁ jɛʁ/', 'zhuh voo-leh voo ruh-mer-syay poor YEHR', ['imparfait', 'collegue']),
  sent(1102, 'Je cherchais le bureau des inscriptions.', 'I was looking for the registration office.', '/ʒə ʃɛʁ.ʃɛ lə by.ʁo dɛ.zɛ̃.skʁip.sjɔ̃/', 'zhuh sher-sheh luh bü-roh deh-zehⁿ-skreep-SYOHⁿ', ['imparfait', 'guichet']),
  sent(1103, "J'appelais au sujet de la facture de mars.", 'I was calling about the March invoice.', '/ʒa.pə.lɛ o sy.ʒɛ də la fak.tyʁ də maʁs/', 'zhah-puh-leh oh sü-zheh duh lah fak-tür duh MARSS', ['imparfait', 'ecrit'], FCVDR),
  sent(1104, 'Je voulais vous prévenir que je serai en retard.', 'I wanted to warn you that I will be late.', '/ʒə vu.lɛ vu pʁev.niʁ kə ʒə sə.ʁe ɑ̃ ʁə.taʁ/', 'zhuh voo-leh voo prayv-neer kuh zhuh suh-ray ahⁿ ruh-TAR', ['imparfait', 'collegue']),
  sent(1105, 'Je me demandais si vous auriez une place.', 'I was wondering whether you would have a seat.', '/ʒə mə də.mɑ̃.dɛ si vu.zo.ʁje yn plas/', 'zhuh muh duh-mahⁿ-deh see voo-zoh-ryay ün PLASS', ['imparfait', 'guichet']),
  sent(1106, 'Je voulais juste un renseignement, ce sera rapide.', 'I just wanted some information, it will be quick.', '/ʒə vu.lɛ ʒyst œ̃ ʁɑ̃.sɛɲ.mɑ̃ sə sə.ʁa ʁa.pid/', 'zhuh voo-leh zhüst uhⁿ rahⁿ-señ-mahⁿ suh suh-rah rah-PEED', ['imparfait', 'adoucir']),
];

/* ── ACT 7 · TROIS PIÈGES ANGLOPHONES ──────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1107, 'Je peux avoir un café ?', 'Can I have a coffee?', '/ʒə pø a.vwaʁ œ̃ ka.fe/', 'zhuh puh ah-vwar uhⁿ kah-FAY', ['piege', 'canihave']),
  sent(1108, 'Un café, je vous prie.', 'A coffee, if you please.', '/œ̃ ka.fe ʒə vu pʁi/', 'uhⁿ kah-fay zhuh voo PREE', ['commerce', 'ecrit']),
  sent(1109, "Je prendrais un café, s'il vous plaît.", 'I would have a coffee, please.', '/ʒə pʁɑ̃.dʁɛ œ̃ ka.fe sil vu plɛ/', 'zhuh prahⁿ-dreh uhⁿ kah-fay seel voo PLEH', ['commerce', 'souhait'], FCVDR),
  sent(1110, 'Pourriez-vous me donner votre numéro ?', 'Could you give me your number?', '/pu.ʁje.vu mə dɔ.ne vɔtʁ ny.me.ʁo/', 'poo-ryay-voo muh doh-nay votr nü-may-ROH', ['piege', 'magique']),
  sent(1111, 'Auriez-vous son numéro, par hasard ?', 'Would you have his number, by any chance?', '/o.ʁje.vu sɔ̃ ny.me.ʁo paʁ a.zaʁ/', 'oh-ryay-voo sohⁿ nü-may-roh par ah-ZAR', ['adoucir']),
  sent(1112, 'Excusez-moi de vous déranger, ce sera court.', 'Sorry to bother you, this will be short.', '/ɛk.sky.ze.mwa də vu de.ʁɑ̃.ʒe sə sə.ʁa kuʁ/', 'ek-skü-zay-mwah duh voo day-rahⁿ-zhay suh suh-rah KOOR', ['excuse', 'une-fois']),
  sent(1113, "Merci d'avance, ce n'est pas urgent.", 'Thanks in advance, it is not urgent.', '/mɛʁ.si da.vɑ̃s sə nɛ pa.zyʁ.ʒɑ̃/', 'mer-see dah-vahⁿss suh neh pah-zür-ZHAHⁿ', ['ecrit', 'reduire']),
  sent(1114, 'Désolé, je ne voulais pas couper.', 'Sorry, I did not mean to interrupt.', '/de.zɔ.le ʒə nə vu.lɛ pa ku.pe/', 'day-zoh-lay zhuh nuh voo-leh pah koo-PAY', ['excuse', 'une-fois']),
  sent(1115, 'Je suis vraiment désolé de vous déranger encore.', 'I am really sorry to bother you again.', '/ʒə sɥi vʁɛ.mɑ̃ de.zɔ.le də vu de.ʁɑ̃.ʒe ɑ̃.kɔʁ/', 'zhuh swee vreh-mahⁿ day-zoh-lay duh voo day-rahⁿ-zhay ahⁿ-KOR', ['excuse', 'trop']),
  sent(1116, "Attendez-moi ici, s'il vous plaît.", 'Wait for me here, please.', '/a.tɑ̃.de.mwa i.si sil vu plɛ/', 'ah-tahⁿ-day-mwah ee-see seel voo PLEH', ['imperatif', 'droit']),
  sent(1117, "Suivez-moi, s'il vous plaît.", 'Follow me, please.', '/sɥi.ve.mwa sil vu plɛ/', 'swee-vay-mwah seel voo PLEH', ['imperatif', 'droit']),
  sent(1118, 'Asseyez-vous, je vous en prie.', 'Do sit down, please.', '/a.sɛ.je.vu ʒə vu.zɑ̃ pʁi/', 'ah-seh-yay-voo zhuh voo-zahⁿ PREE', ['imperatif', 'invitation']),
  sent(1119, 'Je vous en prie, prenez votre temps.', 'Please do, take your time.', '/ʒə vu.zɑ̃ pʁi pʁə.ne vɔtʁ tɑ̃/', 'zhuh voo-zahⁿ pree pruh-nay votr TAHⁿ', ['accepter']),
  sent(1120, 'Ce serait gentil de me le confirmer.', 'It would be kind of you to confirm it for me.', '/sə sə.ʁɛ ʒɑ̃.ti də mə lə kɔ̃.fiʁ.me/', 'suh suh-reh zhahⁿ-tee duh muh luh kohⁿ-feer-MAY', ['adoucir', 'ecrit']),
  sent(1121, 'Merci beaucoup, vous me sauvez la journée.', 'Thank you very much, you are saving my day.', '/mɛʁ.si bo.ku vu mə so.ve la ʒuʁ.ne/', 'mer-see boh-koo voo muh soh-vay lah zhoor-NAY', ['remercier'], FCVDR),
  sent(1122, 'Je vous laisse mon numéro, au cas où.', 'I will leave you my number, just in case.', '/ʒə vu lɛs mɔ̃ ny.me.ʁo o ka u/', 'zhuh voo less mohⁿ nü-may-roh oh kah OO', ['guichet']),
];

/* ── ACT 8 · PROPOSER ET INVITER ───────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  chunk(1123, 'on pourrait', 'we could', '/ɔ̃ pu.ʁɛ/', 'ohⁿ poo-REH', ['proposer'], FCVDR),
  chunk(1124, 'ça te dirait de', 'would you fancy', '/sa tə di.ʁɛ də/', 'sah tuh dee-REH duh', ['proposer', 'ami']),
  chunk(1125, 'et si on', 'what if we', '/e si ɔ̃/', 'ay see OHⁿ', ['proposer']),
  chunk(1126, 'ça vous dirait de', 'would you fancy', '/sa vu di.ʁɛ də/', 'sah voo dee-REH duh', ['proposer', 'collegue']),
  sent(1127, 'On pourrait déjeuner ensemble jeudi.', 'We could have lunch together on Thursday.', '/ɔ̃ pu.ʁɛ de.ʒœ.ne ɑ̃.sɑ̃bl ʒø.di/', 'ohⁿ poo-reh day-zhuh-nay ahⁿ-sahⁿbl zhuh-DEE', ['proposer', 'collegue']),
  sent(1128, 'Ça te dirait de venir avec nous samedi ?', 'Would you fancy coming with us on Saturday?', '/sa tə di.ʁɛ də və.niʁ a.vɛk nu sam.di/', 'sah tuh dee-reh duh vuh-neer ah-vek noo sam-DEE', ['proposer', 'ami'], FCVDR),
  sent(1129, 'Et si on prenait le train de sept heures ?', "What if we took the seven o'clock train?", '/e si ɔ̃ pʁə.nɛ lə tʁɛ̃ də sɛ.tœʁ/', 'ay see ohⁿ pruh-neh luh trehⁿ duh seh-TUHR', ['proposer', 'imparfait']),
  sent(1130, 'Ça vous dirait de passer boire un café après la réunion ?', 'Would you fancy coming for a coffee after the meeting?', '/sa vu di.ʁɛ də pa.se bwaʁ œ̃ ka.fe a.pʁɛ la ʁe.y.njɔ̃/', 'sah voo dee-reh duh pah-say bwar uhⁿ kah-fay ah-preh lah ray-ü-NYOHⁿ', ['proposer', 'collegue']),
  sent(1131, 'On pourrait se retrouver devant le cinéma.', 'We could meet in front of the cinema.', '/ɔ̃ pu.ʁɛ sə ʁə.tʁu.ve də.vɑ̃ lə si.ne.ma/', 'ohⁿ poo-reh suh ruh-troo-vay duh-vahⁿ luh see-nay-MAH', ['proposer', 'ami']),
  sent(1132, "Et si on partageait l'addition ?", 'What if we split the bill?', '/e si ɔ̃ paʁ.ta.ʒɛ la.di.sjɔ̃/', 'ay see ohⁿ par-tah-zheh lah-dee-SYOHⁿ', ['proposer', 'imparfait']),
  sent(1133, 'Je te propose de le faire ensemble lundi.', 'I suggest we do it together on Monday.', '/ʒə tə pʁɔ.poz də lə fɛʁ ɑ̃.sɑ̃bl lœ̃.di/', 'zhuh tuh proh-pohz duh luh fehr ahⁿ-sahⁿbl luhⁿ-DEE', ['proposer', 'collegue']),
  sent(1134, 'Tu veux venir avec nous ?', 'Do you want to come with us?', '/ty vø və.niʁ a.vɛk nu/', 'tü vuh vuh-neer ah-vek NOO', ['proposer', 'ami', 'present']),
  sent(1135, 'Vous seriez libre jeudi vers midi ?', 'Would you be free on Thursday around noon?', '/vu sə.ʁje libʁ ʒø.di vɛʁ mi.di/', 'voo suh-ryay leebr zhuh-dee vehr mee-DEE', ['proposer', 'collegue']),
  sent(1136, 'On se voit vendredi, si ça te va.', 'See you Friday, if that works for you.', '/ɔ̃ sə vwa vɑ̃.dʁə.di si sa tə va/', 'ohⁿ suh vwah vahⁿ-druh-dee see sah tuh VAH', ['proposer', 'ami']),
  sent(1137, "Ça t'irait mardi plutôt que lundi ?", 'Would Tuesday suit you rather than Monday?', '/sa ti.ʁɛ maʁ.di ply.to kə lœ̃.di/', 'sah tee-reh mar-dee plü-toh kuh luhⁿ-DEE', ['proposer', 'ami']),
  sent(1138, 'Et si on essayait une autre boulangerie ?', 'What if we tried another bakery?', '/e si ɔ̃.nɛ.sɛ.jɛ y.no.tʁə bu.lɑ̃ʒ.ʁi/', 'ay see ohⁿ-neh-seh-yeh ü-noh-truh boo-lahⁿzh-REE', ['proposer', 'imparfait'], FCVDR),
  sent(1139, 'On pourrait y aller à pied, il fait beau.', 'We could walk there, the weather is fine.', '/ɔ̃ pu.ʁɛ i a.le a pje il fɛ bo/', 'ohⁿ poo-reh ee ah-lay ah pyay eel feh BOH', ['proposer', 'ami']),
];

/* ── ACT 9 · CONSEILLER SANS COMMANDER ─────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  chunk(1140, 'à ta place', 'in your place', '/a ta plas/', 'ah tah PLASS', ['conseil', 'ami'], FCVDR),
  chunk(1141, 'à votre place', 'in your place', '/a vɔtʁ plas/', 'ah votr PLASS', ['conseil', 'collegue']),
  chunk(1142, 'il vaudrait mieux', 'it would be better', '/il vo.dʁɛ mjø/', 'eel voh-dreh MYUH', ['conseil']),
  chunk(1143, 'tu ferais mieux de', 'you would do better to', '/ty fə.ʁɛ mjø də/', 'tü fuh-reh MYUH duh', ['conseil', 'fort']),
  sent(1144, 'À ta place, je répondrais tout de suite.', 'In your place, I would answer right away.', '/a ta plas ʒə ʁe.pɔ̃.dʁɛ tu də sɥit/', 'ah tah plass zhuh ray-pohⁿ-dreh too duh SWEET', ['conseil', 'ami']),
  sent(1145, 'Tu devrais te reposer ce week-end.', 'You should rest this weekend.', '/ty də.vʁɛ tə ʁə.po.ze sə wi.kɛnd/', 'tü duh-vreh tuh ruh-poh-zay suh wee-KEND', ['conseil', 'ami'], FCVDR),
  sent(1146, 'Il faudrait appeler avant de passer.', 'One would need to call before dropping in.', '/il fo.dʁɛ.ta.pə.le a.vɑ̃ də pa.se/', 'eel foh-dreh-tah-puh-lay ah-vahⁿ duh pah-SAY', ['conseil', 'impersonnel']),
  sent(1147, 'Il vaudrait mieux garder une copie.', 'It would be better to keep a copy.', '/il vo.dʁɛ mjø ɡaʁ.de yn kɔ.pi/', 'eel voh-dreh myuh gar-day ün koh-PEE', ['conseil', 'impersonnel']),
  sent(1148, 'À votre place, je demanderais un devis écrit.', 'In your place, I would ask for a written quote.', '/a vɔtʁ plas ʒə də.mɑ̃d.ʁɛ œ̃ də.vi e.kʁi/', 'ah votr plass zhuh duh-mahⁿd-reh uhⁿ duh-vee ay-KREE', ['conseil', 'guichet']),
  sent(1149, 'Vous devriez arriver un peu en avance.', 'You should arrive a little early.', '/vu də.vʁi.je a.ʁi.ve œ̃ pø ɑ̃.na.vɑ̃s/', 'voo duh-vree-yay ah-ree-vay uhⁿ puh ahⁿ-nah-VAHⁿSS', ['conseil', 'collegue']),
  sent(1150, 'Tu ferais mieux de lui parler directement.', 'You would do better to speak to him directly.', '/ty fə.ʁɛ mjø də lɥi paʁ.le di.ʁɛk.tə.mɑ̃/', 'tü fuh-reh myuh duh lwee par-lay dee-rek-tuh-MAHⁿ', ['conseil', 'fort']),
  sent(1151, 'Il faudrait peut-être changer de forfait.', 'It might be worth changing plan.', '/il fo.dʁɛ pø.tɛtʁ ʃɑ̃.ʒe də fɔʁ.fɛ/', 'eel foh-dreh puh-tehtr shahⁿ-zhay duh for-FEH', ['conseil', 'adoucir']),
  sent(1152, 'Ce serait plus prudent de garder le reçu.', 'It would be safer to keep the receipt.', '/sə sə.ʁɛ ply pʁy.dɑ̃ də ɡaʁ.de lə ʁə.sy/', 'suh suh-reh plü prü-dahⁿ duh gar-day luh ruh-SÜ', ['conseil', 'impersonnel'], FCVDR),
  sent(1153, 'Tu pourrais essayer de lui écrire, simplement.', 'You could just try writing to him.', '/ty pu.ʁɛ e.sɛ.je də lɥi e.kʁiʁ sɛ̃.plə.mɑ̃/', 'tü poo-reh ay-seh-yay duh lwee ay-kreer sehⁿ-pluh-MAHⁿ', ['conseil', 'doux']),
  sent(1154, "Si j'étais toi, je ne dirais rien pour l'instant.", 'If I were you, I would say nothing for now.', '/si ʒe.tɛ twa ʒə nə di.ʁɛ ʁjɛ̃ puʁ lɛ̃s.tɑ̃/', 'see zhay-teh twah zhuh nuh dee-reh ryehⁿ poor lehⁿs-TAHⁿ', ['conseil', 'si-fige']),
  sent(1155, 'Rien ne presse, tu décideras plus tard.', 'There is no rush, you will decide later.', '/ʁjɛ̃ nə pʁɛs ty de.si.də.ʁa ply taʁ/', 'ryehⁿ nuh press tü day-see-duh-rah plü TAR', ['conseil', 'reduire']),
];

/* ── ACT 10 · DIRE OUI, DIRE NON ───────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  chunk(1156, 'volontiers', 'gladly', '/vɔ.lɔ̃.tje/', 'voh-lohⁿ-TYAY', ['accepter'], FCVDR),
  chunk(1157, 'avec plaisir', 'with pleasure', '/a.vɛk plɛ.ziʁ/', 'ah-vek pleh-ZEER', ['accepter']),
  chunk(1158, "c'est gentil", 'that is kind', '/sɛ ʒɑ̃.ti/', 'seh zhahⁿ-TEE', ['accepter']),
  chunk(1159, 'une autre fois', 'another time', '/y.no.tʁə fwa/', 'ü-noh-truh FWAH', ['refus']),
  sent(1160, 'Oui, volontiers, merci beaucoup.', 'Yes, gladly, thank you very much.', '/wi vɔ.lɔ̃.tje mɛʁ.si bo.ku/', 'wee voh-lohⁿ-tyay mer-see boh-KOO', ['accepter']),
  sent(1161, "C'est très gentil, j'accepte avec plaisir.", 'That is very kind, I accept with pleasure.', '/sɛ tʁɛ ʒɑ̃.ti ʒak.sɛp.ta.vɛk plɛ.ziʁ/', 'seh treh zhahⁿ-tee zhak-sep-tah-vek pleh-ZEER', ['accepter'], FCVDR),
  sent(1162, "J'aimerais bien, mais je ne suis pas libre jeudi.", 'I would love to, but I am not free on Thursday.', '/ʒɛ.mə.ʁɛ bjɛ̃ mɛ ʒə nə sɥi pa libʁ ʒø.di/', 'zheh-muh-reh byehⁿ meh zhuh nuh swee pah leebr zhuh-DEE', ['refus', 'doux']),
  sent(1163, 'Merci de me le proposer, malheureusement je ne peux pas.', 'Thank you for offering, unfortunately I cannot.', '/mɛʁ.si də mə lə pʁɔ.po.ze ma.lø.ʁø.zə.mɑ̃ ʒə nə pø pa/', 'mer-see duh muh luh proh-poh-zay mah-luh-ruh-zuh-mahⁿ zhuh nuh puh PAH', ['refus', 'doux']),
  sent(1164, 'Ce sera pour une autre fois, sans faute.', 'It will be for another time, without fail.', '/sə sə.ʁa puʁ y.no.tʁə fwa sɑ̃ fot/', 'suh suh-rah poor ü-noh-truh fwah sahⁿ FOHT', ['refus', 'porte-ouverte']),
  sent(1165, 'Je préférerais éviter, si tu veux bien.', 'I would rather not, if you do not mind.', '/ʒə pʁe.fe.ʁə.ʁɛ e.vi.te si ty vø bjɛ̃/', 'zhuh pray-fay-ruh-reh ay-vee-tay see tü vuh BYEHⁿ', ['refus', 'doux']),
  sent(1166, 'Je ne peux pas cette semaine, mais la semaine prochaine oui.', 'I cannot this week, but next week yes.', '/ʒə nə pø pa sɛt sə.mɛn mɛ la sə.mɛn pʁɔ.ʃɛn wi/', 'zhuh nuh puh pah set suh-menn meh lah suh-menn proh-shenn WEE', ['refus', 'porte-ouverte'], FCVDR),
  sent(1167, 'Désolée, je suis déjà prise ce soir.', 'Sorry, I am already busy tonight.', '/de.zɔ.le ʒə sɥi de.ʒa pʁiz sə swaʁ/', 'day-zoh-lay zhuh swee day-zhah preez suh SWAR', ['refus']),
  sent(1168, "C'est très aimable, mais je vais me débrouiller.", 'That is very kind, but I will manage.', '/sɛ tʁɛ.zɛ.mabl mɛ ʒə vɛ mə de.bʁu.je/', 'seh treh-zeh-mabl meh zhuh veh muh day-broo-YAY', ['refus', 'doux']),
  sent(1169, 'Je vais réfléchir et je te redis demain.', 'I will think about it and get back to you tomorrow.', '/ʒə vɛ ʁe.fle.ʃiʁ e ʒə tə ʁə.di də.mɛ̃/', 'zhuh veh ray-flay-sheer ay zhuh tuh ruh-dee duh-MEHⁿ', ['refus', 'gagner-temps']),
  sent(1170, "Non, merci, c'est gentil quand même.", 'No, thank you, that is kind all the same.', '/nɔ̃ mɛʁ.si sɛ ʒɑ̃.ti kɑ̃ mɛm/', 'nohⁿ mer-see seh zhahⁿ-tee kahⁿ MEM', ['refus']),
  sent(1171, 'Avec plaisir, à quelle heure ?', 'With pleasure, at what time?', '/a.vɛk plɛ.ziʁ a kɛ.lœʁ/', 'ah-vek pleh-zeer ah keh-LUHR', ['accepter']),
  sent(1172, 'Je ne vais pas pouvoir, je suis vraiment désolé.', 'I am not going to be able to, I am really sorry.', '/ʒə nə vɛ pa pu.vwaʁ ʒə sɥi vʁɛ.mɑ̃ de.zɔ.le/', 'zhuh nuh veh pah poo-vwar zhuh swee vreh-mahⁿ day-zoh-LAY', ['refus']),
];

/* ── ACT 11 · QUATRE COMPTOIRS, UN COURRIEL ────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  chunk(1173, 'je vous écris au sujet de', 'I am writing to you about', '/ʒə vu.ze.kʁi o sy.ʒɛ də/', 'zhuh voo-zay-kree oh sü-ZHEH duh', ['ecrit']),
  chunk(1174, "je vous remercie d'avance", 'thank you in advance', '/ʒə vu ʁə.mɛʁ.si da.vɑ̃s/', 'zhuh voo ruh-mer-see dah-VAHⁿSS', ['ecrit'], FCVDR),
  chunk(1175, 'bien cordialement', 'kind regards', '/bjɛ̃ kɔʁ.djal.mɑ̃/', 'byehⁿ kor-dyal-MAHⁿ', ['ecrit']),
  chunk(1176, 'dans la mesure du possible', 'as far as possible', '/dɑ̃ la mə.zyʁ dy pɔ.sibl/', 'dahⁿ lah muh-zür dü poh-SEEBL', ['ecrit', 'adoucir']),
  sent(1177, 'Je vous écris au sujet de ma demande du trois mars.', 'I am writing to you about my request of the third of March.', '/ʒə vu.ze.kʁi o sy.ʒɛ də ma də.mɑ̃d dy tʁwa maʁs/', 'zhuh voo-zay-kree oh sü-zheh duh mah duh-mahⁿd dü trwah MARSS', ['ecrit', 'guichet']),
  sent(1178, "Pourriez-vous me confirmer la date de l'entretien ?", 'Could you confirm the date of the interview for me?', '/pu.ʁje.vu mə kɔ̃.fiʁ.me la dat də lɑ̃.tʁə.tjɛ̃/', 'poo-ryay-voo muh kohⁿ-feer-may lah dat duh lahⁿ-truh-TYEHⁿ', ['ecrit', 'inversion'], FCVDR),
  sent(1179, "Je vous remercie d'avance de votre réponse.", 'Thank you in advance for your reply.', '/ʒə vu ʁə.mɛʁ.si da.vɑ̃s də vɔtʁ ʁe.pɔ̃s/', 'zhuh voo ruh-mer-see dah-vahⁿss duh votr ray-POHⁿSS', ['ecrit']),
  sent(1180, 'Je reste à votre disposition pour tout renseignement.', 'I remain at your disposal for any information.', '/ʒə ʁɛs.ta vɔtʁ dis.po.zi.sjɔ̃ puʁ tu ʁɑ̃.sɛɲ.mɑ̃/', 'zhuh res-tah votr dees-poh-zee-syohⁿ poor too rahⁿ-señ-MAHⁿ', ['ecrit']),
  sent(1181, 'Bonjour, je voudrais un renseignement sur les horaires.', 'Hello, I would like some information about the opening times.', '/bɔ̃.ʒuʁ ʒə vu.dʁɛ œ̃ ʁɑ̃.sɛɲ.mɑ̃ syʁ le.zɔ.ʁɛʁ/', 'bohⁿ-zhoor zhuh voo-dreh uhⁿ rahⁿ-señ-mahⁿ sür lay-zoh-REHR', ['commerce', 'oral']),
  sent(1182, 'Excusez-moi, vous auriez une minute ?', 'Excuse me, would you have a minute?', '/ɛk.sky.ze.mwa vu.zo.ʁje yn mi.nyt/', 'ek-skü-zay-mwah voo-zoh-ryay ün mee-NÜT', ['oral', 'collegue']),
  sent(1183, 'Je me permets de vous relancer au sujet de mon dossier.', 'I am taking the liberty of following up about my file.', '/ʒə mə pɛʁ.mɛ də vu ʁə.lɑ̃.se o sy.ʒɛ də mɔ̃ dɔ.sje/', 'zhuh muh per-meh duh voo ruh-lahⁿ-say oh sü-zheh duh mohⁿ doh-SYAY', ['ecrit', 'guichet']),
  sent(1184, 'Dans la mesure du possible, je préférerais le matin.', 'As far as possible, I would prefer the morning.', '/dɑ̃ la mə.zyʁ dy pɔ.sibl ʒə pʁe.fe.ʁə.ʁɛ lə ma.tɛ̃/', 'dahⁿ lah muh-zür dü poh-seebl zhuh pray-fay-ruh-reh luh mah-TEHⁿ', ['ecrit', 'adoucir']),
  sent(1185, 'Salut, tu pourrais me dire si tu viens samedi ?', 'Hi, could you tell me whether you are coming on Saturday?', '/sa.ly ty pu.ʁɛ mə diʁ si ty vjɛ̃ sam.di/', 'sah-lü tü poo-reh muh deer see tü vyehⁿ sam-DEE', ['ami', 'ecrit']),
  sent(1186, 'Merci de votre retour, bien cordialement.', 'Thank you for getting back to me, kind regards.', '/mɛʁ.si də vɔtʁ ʁə.tuʁ bjɛ̃ kɔʁ.djal.mɑ̃/', 'mer-see duh votr ruh-toor byehⁿ kor-dyal-MAHⁿ', ['ecrit']),
  sent(1187, 'Je vous prie de bien vouloir examiner ma demande.', 'I ask you kindly to consider my request.', '/ʒə vu pʁi də bjɛ̃ vu.lwaʁ ɛɡ.za.mi.ne ma də.mɑ̃d/', 'zhuh voo pree duh byehⁿ voo-lwar eg-zah-mee-nay mah duh-MAHⁿD', ['ecrit', 'lourd']),
  sent(1188, "Ce serait parfait pour moi, si ça vous convient.", 'That would be perfect for me, if it suits you.', '/sə sə.ʁɛ paʁ.fɛ puʁ mwa si sa vu kɔ̃.vjɛ̃/', 'suh suh-reh par-feh poor mwah see sah voo kohⁿ-VYEHⁿ', ['ecrit', 'adoucir'], FCVDR),
  sent(1189, 'Je reste joignable toute la semaine.', 'I am reachable all week.', '/ʒə ʁɛst ʒwa.ɲabl tut la sə.mɛn/', 'zhuh rest zhwah-ñabl toot lah suh-MENN', ['ecrit']),
  sent(1190, 'Bonjour madame, je venais pour le rendez-vous de quinze heures.', "Hello madam, I was coming for the three o'clock appointment.", '/bɔ̃.ʒuʁ ma.dam ʒə və.nɛ puʁ lə ʁɑ̃.de.vu də kɛ̃.zœʁ/', 'bohⁿ-zhoor mah-dam zhuh vuh-neh poor luh rahⁿ-day-voo duh kehⁿ-ZUHR', ['oral', 'guichet']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** The ids of an act's rows that carry a `dictation` drill. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS AND THEIR ANSWER KEYS
 *
 *  They live here so the reading section and the quiz cannot drift apart.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1. 168 words. Four rungs, four settings, in one morning. */
export const READING_MATINEE = "Mardi matin, Salima arrive au bureau à huit heures cinquante. Dans l'ascenseur, elle croise Marc et lui dit : « Tu peux me tenir la porte ? » Marc tient la porte. Ce n'était rien, deux secondes.\n\nÀ neuf heures, elle a besoin d'autre chose. Le rapport fait trente pages et il part ce soir. Elle va voir Marc : « Est-ce que tu pourrais relire mon rapport avant ce soir ? Ce serait un grand service. Dis-moi si c'est trop, je trouverai quelqu'un d'autre. »\n\nÀ midi, au guichet de la banque, elle demande : « Pourriez-vous vérifier mon dossier, madame ? » Elle ne connaît pas l'employée et le dossier va prendre dix minutes.\n\nLe soir, chez elle, elle appelle sa sœur : « Passe-moi le numéro du plombier, s'il te plaît. » Aucune de ces quatre phrases n'est plus polie que les autres. Chacune est à la bonne hauteur.";

export const READING_MATINEE_PETIT = ['Tu peux me tenir la porte', "Passe-moi le numéro du plombier, s'il te plaît"] as const;
export const READING_MATINEE_GRAND = ['Est-ce que tu pourrais relire mon rapport avant ce soir', 'Pourriez-vous vérifier mon dossier, madame'] as const;

/** Act 3. 142 words. The same counter, twice, with the two verbs. */
export const READING_COMPTOIR = "À la boulangerie de la rue Sainte-Catherine, il y a six personnes dans la file. Le premier client arrive au comptoir et dit : « Je veux deux baguettes. » La vendeuse lui donne deux baguettes. Personne ne se fâche, personne ne sourit non plus.\n\nLe deuxième client dit : « Bonjour, je voudrais deux baguettes et un pain complet. » La vendeuse lève les yeux, sourit et répond : « Il me reste un seul pain complet, il est sorti il y a dix minutes. »\n\nLa différence n'est pas la gentillesse. « Je veux » annonce une décision déjà prise : il n'y a plus rien à discuter. « Je voudrais » ouvre la porte : la vendeuse peut proposer, prévenir, corriger. Elle a d'ailleurs prévenu le deuxième client que le pain venait de sortir du four.";

export const READING_COMPTOIR_VEUX = ['Je veux deux baguettes'] as const;
export const READING_COMPTOIR_VOUDRAIS = ['je voudrais deux baguettes et un pain complet'] as const;

/** Act 6. 151 words. The counter opening in the imparfait. */
export const READING_BUREAU = "Le bureau des inscriptions ferme à seize heures. À quinze heures cinquante, un homme entre et s'adresse à l'employée.\n\n« Bonjour madame, je venais pour le rendez-vous de quinze heures. Je voulais vous demander si mon dossier était complet. »\n\nL'employée cherche le dossier. Pendant qu'elle cherche, l'homme ajoute : « Je me demandais aussi si vous auriez une place pour la session de mai. »\n\nTrois verbes à l'imparfait, et aucun ne parle du passé. Le rendez-vous est maintenant, la question est maintenant, la place est pour mai. L'imparfait sert ici à reculer la demande d'un pas, comme le conditionnel : je voulais vous demander est plus léger que je veux vous demander. C'est le même geste, avec un autre temps. Beaucoup de francophones ouvrent ainsi toutes leurs demandes à un guichet.";

export const READING_BUREAU_IMPARFAIT = ['je venais pour', 'Je voulais vous demander', 'Je me demandais'] as const;

/** Act 9. 147 words. Four ways to advise the same person. */
export const READING_CONSEIL = "Yann veut quitter son appartement avant la fin du bail. Il demande conseil à quatre personnes le même jour.\n\nSon frère lui dit : « Tu devrais relire ton bail avant d'écrire au propriétaire. »\n\nSa collègue lui dit : « À ta place, je demanderais un devis écrit pour les travaux. »\n\nLe conseiller du syndicat lui dit : « Il faudrait prévenir le propriétaire par lettre recommandée. Il vaudrait mieux garder une copie de tout. »\n\nSon ami Théo lui dit : « Tu ferais mieux de lui parler directement. »\n\nQuatre formes, quatre distances. Tu devrais s'adresse à lui. À ta place met le conseiller dans ses chaussures. Il faudrait ne vise personne : c'est la situation qui parle. Tu ferais mieux de est la plus dure des quatre, et Théo peut se le permettre parce qu'ils se connaissent depuis vingt ans.";

export const READING_CONSEIL_FORMES = ['Tu devrais', 'À ta place', 'Il faudrait', 'Il vaudrait mieux', 'Tu ferais mieux de'] as const;

/** Act 11. 163 words. The model the learner imitates in the task. */
export const READING_COURRIEL = "Bonjour Madame Diallo,\n\nJe vous écris au sujet de ma demande de stage du trois mars. Je me permets de vous relancer, car je n'ai pas encore eu de retour et le dossier doit partir avant le trente avril.\n\nPourriez-vous me confirmer la date de l'entretien ? Je voudrais également savoir s'il faut apporter les originaux de mes diplômes. Dans la mesure du possible, je préférerais le matin, mais je m'adapterai à vos disponibilités.\n\nSi cela ne vous dérange pas, je pourrais aussi passer déposer le dossier directement au bureau. Dites-moi ce qui vous arrange le mieux.\n\nJe vous remercie d'avance de votre réponse et je reste joignable toute la semaine.\n\nBien cordialement,\nAmina Cherif";

export const READING_TEXT = READING_COURRIEL;

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. WHAT THE APP CAN AND CANNOT TEST HERE
 *
 *  fold() = NFD, strip combining marks, lowercase, strip . , ! ? ; : « » ( )
 *  [ ] and apostrophes/hyphens, strip whitespace. Measured consequences:
 *
 *    tu peux / tu pourrais          different letters, TYPEABLE and AUDIBLE
 *    pourrais-tu / tu pourrais      SAME LETTERS after fold: the hyphen and
 *                                   the spaces both fold away, so word ORDER
 *                                   is the only difference and typing one for
 *                                   the other is marked WRONG correctly.
 *    je veux / je voudrais          different letters, TYPEABLE
 *    voulais / voudrais             different letters, TYPEABLE
 *    à ta place / a ta place        ONE STRING: the accent folds. Never the point.
 *    s'il vous plaît / sil vous plait  ONE STRING: never the point of a typeIn.
 * ══════════════════════════════════════════════════════════════════════════ */

export const FOLD_COLLISIONS: [string, string][] = [
  ['à ta place', 'a ta place'],
  ["s'il vous plaît", 'sil vous plait'],
  ['Est-ce que', 'est ce que'],
];

export const WANTED_AND_IMPOSSIBLE: readonly { want: string; why: string }[] = [
  { want: "a typeIn resting on the comma before « s'il vous plaît »", why: 'fold() strips commas, so the punctuation cannot be tested. Act 7 tests the VERB instead: whether the sentence is still an imperative.' },
  { want: 'a listenChoose between « pourriez-vous » and « pouvez-vous »', why: 'The contrast is [pu.ʁje] against [pu.ve], which is audible, so this one IS built: act 4 round 4. It is listed here because the neighbouring pair « pourrais-tu » / « pourrait-tu » is not: the second does not exist.' },
  { want: 'a typeIn distinguishing « je voudrais » from « je voudrai »', why: 'It is typeable, but it belongs to b1.08, which owns the ai/ais trap. Repeating it here would mark a b1.08 error inside a b1.09 round.' },
];

/** Error forms the lesson prints on purpose, only where it marks them wrong. */
export const WRONG_FORMS = [
  "Donne-moi le dossier, s'il vous plaît.",
  'Je peux avoir un rendez-vous ?',
  'Je veux un renseignement.',
  'Auriez-vous la gentillesse de me passer le sel ?',
  'Je suis désolé, désolé, vraiment désolé de vous déranger.',
  'Tu dois te reposer ce week-end.',
] as const;
