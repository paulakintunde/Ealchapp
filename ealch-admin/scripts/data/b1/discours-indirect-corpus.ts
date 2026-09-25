// b1.19.l1 « Le discours indirect » — the authored corpus, the imports and the
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
//   REPORTED SPEECH AS WHAT YOU DO WHEN YOU PASS A MESSAGE ON.
//
//     dire que        reporting in the present: que is never dropped, the
//                     tenses do not move
//     les personnes   je -> il/elle, mon -> son, nous -> ils, and the person
//                     you are now talking to becomes tu
//     si              the reported yes/no question; est-ce que and the
//                     question mark disappear, and si takes the future
//     les mots        où, quand, pourquoi, comment stay; qu'est-ce que ->
//                     ce que, qu'est-ce qui -> ce qui; no pronoun inversion
//     dire de         the reported order: de + infinitif, de ne pas + inf.
//     le décalage     after a PAST reporting verb: présent -> imparfait,
//                     passé composé -> plus-que-parfait, futur ->
//                     conditionnel, va + inf. -> allait + inf.; the
//                     imparfait and the conditionnel do not move
//     les repères     demain -> le lendemain, hier -> la veille, ici -> là,
//                     and ONLY when the day has changed
//     les verbes      expliquer, répondre, annoncer, promettre, affirmer,
//                     avouer, ajouter, préciser
//
//   THE PLUS-QUE-PARFAIT IS BUILT HERE FOR THE FIRST TIME IN B1. b1.10 shows
//   si + plus-que-parfait for RECOGNITION only. This lesson is the first to
//   make the learner PRODUCE it, and only as the reported form of a passé
//   composé: the imparfait of avoir or être (b1.01) plus a participle
//   (a2.20), agreeing after être exactly as a2.21 taught. It is not taught as
//   a narrative tense in its own right; that is a later lesson's job.
//
//   NOT OWNED: the conditionnel passé (« il a dit qu'il serait venu ») is B2
//   and appears nowhere; the subjunctive (b1.14 to b1.16) is kept out of every
//   authored French string, which is why « demander que », « exiger que » and
//   « vouloir que » never appear; the relative ce qui / ce que is b1.13's and
//   is quoted, not re-taught.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `paroles-rapportees` (« Les paroles rapportées », domain
//     fondations, levelRange a2-b2) WAS CREATED FOR THIS LESSON ON
//     2026-09-25, because none of the 130 themes is about speech, quotation
//     or saying. Its sub-themes are: le discours indirect, la concordance des
//     temps, les verbes introducteurs.
//
//     IT EXISTS IN POSTGRES ONLY. It is NOT in `seed.json`'s theme list
//     (verified 2026-09-25: 130 themes, none of them this one) and it arrives
//     there at the next publish. So a readiness run WILL warn that the theme
//     is not in the seed's theme list. THAT WARNING IS EXPECTED AND IS NOT A
//     DEFECT. Probed read-only on 2026-09-25: 0 rows with this theme and 0
//     ids under `fr.b1.paroles-rapportees.`, in Postgres.
//
//  2. ID BLOCK: this lesson owns `.1000`-`.1199` AND NOTHING ELSE. Authored
//     b1 ids start at 1000 in every theme by house rule, even in an empty
//     one, so `.001`-`.999` stays free for a future published import. Used
//     here: eleven act blocks with a gap between each, all inside the block.
//
//  3. THE SEED HOLDS VERY LITTLE REPORTED SPEECH. Probed 2026-09-25 across all
//     11,209 seed items for dit que, demandé si, promis de/que, répondu que,
//     expliqué que, le lendemain, la veille and friends: 23 hits, of which
//     eight are real reported speech. Every one of those eight is used below
//     (§F). Most carry only `dictation` and are named, never released.
//
//     One published row is worth flagging for Paul rather than using:
//     `fr.sons.liaisons.023` « Dis-moi quand est-ce que ça commence. » keeps
//     est-ce que after an indirect question word, which is exactly what act 4
//     teaches a learner NOT to write. It is ordinary spoken French and it is
//     a sons row about liaison, so it is left alone and raised as an open
//     question in the lesson header.
//
//  4. Every reused id in §F was read out of seed.json on 2026-09-25 and its
//     `fr` is copied verbatim wherever a section prints it, through `src()`.
//     Several have no ipa or respell in the seed, so they are only ever used
//     through `it()`, `ln()` and `ex()`, which need neither.
//
//  5. RESPELLINGS SPELLED FOR THE CHECKER RATHER THAN THE EAR, measured
//     2026-09-25 against `hasPlainNasalFor` (density.logic.ts). Two, and
//     both are a real consonant after a single vowel, which the checker
//     cannot tell from a nasal, so the consonant is doubled as a2.34 does:
//       « Karim »  ka-REEMM (the plain ka-REEM fired nasal-convention on
//                  five scene fields); used in every Karim row.
//       « personnes viennent » (.1057)  pehr-SONN VYEHNN (the plain spelling
//                  fires the checker).
//     « téléphone » was tested and does NOT fire, so it keeps tay-lay-FON.
//     No U+203F tie anywhere, in a respelling or an IPA field.
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
  id: 'b1.19',
  seq: 19,
  title: 'Reported Speech',
  sub: 'Le discours indirect',
  canDo: 'Can pass on a phone message or a conversation to someone who was not there, moving the persons, the tenses and the time words to the new point of view, and reporting questions and requests',
  prereqUnitIds: ['b1.02', 'b1.05', 'b1.08'],
} as const;

export const LESSON_ID = 'b1.19.l1';
export const THEME = 'paroles-rapportees';
export const LEVEL = 'b1' as const;

/** ONE block, by the house rule for a theme with no published import yet. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A2 citations use the house English trail label, resolved through
 *  `unitRef` from the shipped `unit.seq`. b1.* units are not in the seed yet,
 *  so they are labelled in French from the plan.
 * ══════════════════════════════════════════════════════════════════════════ */

export const POSSESSIFS_UNIT = 'a1.17';
export const QUESTIONS_UNIT = 'a1.19';
export const INTERROGATIFS_UNIT = 'a1.20';
export const PC_AVOIR_UNIT = 'a2.05';
export const PC_ETRE_UNIT = 'a2.21';
export const PRONOMINAL_PC_UNIT = 'a2.23';
export const PARTICIPLE_UNIT = 'a2.20';
export const DIRECT_OBJ_UNIT = 'a2.06';
export const INDIRECT_OBJ_UNIT = 'a2.24';
export const FUTUR_PROCHE_UNIT = 'a2.19';
export const IMP_FORM_UNIT = 'b1.01';
export const IMP_USE_UNIT = 'b1.02';
export const FUTUR_UNIT = 'b1.05';
export const FUTUR_USAGE_UNIT = 'b1.07';
export const CONDITIONNEL_UNIT = 'b1.08';
export const SI_UNIT = 'b1.10';
export const CE_QUE_UNIT = 'b1.13';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13, 'b1.14': 14, 'b1.15': 15, 'b1.16': 16, 'b1.17': 17, 'b1.18': 18,
  'b1.19': 19, 'b1.20': 20,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const POSSESSIFS_REF = unitRef(POSSESSIFS_UNIT);
export const INTERROGATIFS_REF = unitRef(INTERROGATIFS_UNIT);
export const PC_AVOIR_REF = unitRef(PC_AVOIR_UNIT);
export const PC_ETRE_REF = unitRef(PC_ETRE_UNIT);
export const INDIRECT_OBJ_REF = unitRef(INDIRECT_OBJ_UNIT);
export const IMP_FORM_REF = refFr(IMP_FORM_UNIT);
export const IMP_USE_REF = refFr(IMP_USE_UNIT);
export const FUTUR_USAGE_REF = refFr(FUTUR_USAGE_UNIT);
export const CONDITIONNEL_REF = refFr(CONDITIONNEL_UNIT);
export const SI_REF = refFr(SI_UNIT);
export const CE_QUE_REF = refFr(CE_QUE_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED
 *
 *  The A2 lines are English (A2 is taught in English) and every screen that
 *  shows one follows it with the French rendering below, byte-identical to
 *  the rendering an earlier B1 lesson already ships. The B1 lines are French
 *  and are quoted as they stand.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as A224_REFRAME } from '../pronoms-indirect-corpus.ts';
export { REFRAME as A205_REFRAME } from '../passe-compose-corpus.ts';
export { REFRAME as A221_REFRAME } from '../passe-compose-etre-corpus.ts';
export { REFRAME as B102_REFRAME } from './imparfait-usage-corpus.ts';
export { REFRAME as B107_REFRAME } from './futur-usage-corpus.ts';
export { REFRAME as B108_REFRAME } from './conditionnel-present-corpus.ts';
export { REFRAME as B113_REFRAME } from './lequel-ce-qui-corpus.ts';

/** b1.17's rendering, byte-identical. */
export const A224_REFRAME_FR = "Si la personne est derrière à, le pronom est lui ou leur.";
/** b1.03's renderings, byte-identical. */
export const A205_REFRAME_FR = 'Un verbe, deux mots, et les petits mots vont au milieu.';
export const A221_REFRAME_FR = 'Après être, le deuxième mot finit comme un adjectif.';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE MESSAGE PASSED FROM HAND TO HAND. A note travels from the person who
 *  said it, through you, to someone who was not there. What it SAYS does not
 *  change on the way. Who is holding it does, and so does the day it is read.
 *  Every rule in this lesson is one of those moves: the persons move because
 *  the speaker changed, the tenses move because the saying is now in the
 *  past, the time words move because the day changed, and the question and
 *  the order lose their shape because you are no longer the one asking.
 *
 *  It is NOT « everything goes back one tense ». Acts 1 to 5 report in the
 *  present and nothing moves; act 6 shows that the imparfait stays put; act 9
 *  shows that « demain » stays « demain » when you pass the message on the
 *  same day.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Le message reste, le point de vue change.';
export const REFRAME_EN = 'The message stays the same; the point of view moves.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Au passé, tout recule d’un temps.',
    why: "The textbook rule, and false in half the lesson. After « il dit », nothing moves (acts 1 to 5). After « il a dit », the imparfait and the conditionnel stay where they are (acts 6 and 8), and a general truth can stay in the present. A reframe that has to be followed by « except » three times is a table, not a reframe.",
  },
  {
    text: 'Enlève les guillemets et ajoute que.',
    why: "True for a statement and false for everything acts 3 to 5 teach: a question takes si or its own question word, never que, and an order takes de plus the infinitive. A learner who follows it writes « il demande que tu viens », which is wrong twice.",
  },
  {
    text: 'Rapporter, c’est passer du je au il.',
    why: "Only act 2, and not even all of it. « Je t'appelle ce soir », said to you and passed on to Sophie, becomes « il m'appelle ce soir »: the tu of the original becomes me, and the person you are talking to becomes tu. The shift is to the new point of view, not always to il.",
  },
  {
    text: 'Répète le message comme si tu étais la personne qui l’a dit.',
    why: "It describes exactly the failure the scene opens on: the learner reads the voicemail out in the first person and Sophie hears « je serai en retard » from a colleague who is not late. It is the anti-reframe.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-25 and its French is in the
 *  trailing comment. `named only` rows carry no `flashcard` drill, so no
 *  deckTranche can release them. `NOT_SPEAKABLE` additionally lists rows with
 *  no `voiceflash`, which a `practice` speak section may never name.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a2.internet.201',            // Le message dit que le code a expiré.
  ],
  act2: [] as string[],
  act3: [
    'fr.a1.questions.364',           // Est-ce qu'il est prêt ?
    'fr.a1.salutations.327',         // Il demande si tout va bien à la maison.  (named only)
    'fr.b1.cafe.063',                // Elle se demande si le café est encore ouvert.  (named only)
  ],
  act4: [
    'fr.a1.questions.374',           // Où est-ce que tu pars ?
    'fr.a1.questions.375',           // Quand est-ce que tu pars ?
    'fr.a1.questions.376',           // Pourquoi est-ce que tu pars ?
    'fr.a1.questions.389',           // Qu'est-ce que tu fais ?
  ],
  act5: [] as string[],
  act6: [
    'fr.b1.sports-et-loisirs.082',   // Le coach nous a dit que la discipline compte plus que le talent.
    'fr.a2.marche.130',              // J'ai demandé si les œufs venaient d'une ferme locale.
    'fr.a2.cafe.047',                // Elle a demandé où se trouvaient les toilettes.  (named only)
  ],
  act7: [] as string[],
  act8: [] as string[],
  act9: [
    'fr.sons.jours-et-mois.029',     // le lendemain
    'fr.sons.jours-et-mois.030',     // la veille
    'fr.a1.rp-recits-temps.180',     // Le lendemain matin, elle s'est levée à cinq heures.  (named only)
  ],
  act10: [
    'fr.a2.verbes.596',              // J'ai promis de venir.
    'fr.b1.communaute.002',          // Le maire a promis que la place serait rénovée avant l'été.  (named only)
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.a1.salutations.327',       // dictation
  'fr.b1.cafe.063',              // dictation
  'fr.a2.cafe.047',              // dictation
  'fr.a1.rp-recits-temps.180',   // dictation
  'fr.b1.communaute.002',        // dictation
];

/** No `voiceflash` either: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.b1.sports-et-loisirs.082', // sentence, flashcard, review
  'fr.a2.marche.130',            // sentence, flashcard, review
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the last stressed syllable of
 *  each group in caps, ü for French u, nasals closed with the superscript ⁿ,
 *  and NO U+203F tie: a liaison consonant simply moves onto the next
 *  syllable (« keel-zohⁿ », « eh-tahⁿ »).
 *
 *  Rows are CORRECT French only. The wrong versions the lesson needs (the
 *  voicemail read out in the first person, « il demande que tu viens ») are
 *  typed in the sections that show them as wrong, never as rows.
 *
 *  Each act block pairs a DIRECT line (what was said) with its REPORTED line
 *  where the lesson needs both, and tags them `direct` and `rapporte`.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['discours-indirect'], ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, ...extra,
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });
/** A gapfill card: `prompt` is the front, `fr` the answer (validateItem). */
const gap = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'gapfill', prompt, notes });

/* ── ACT 1 · LE MESSAGE POUR SOPHIE ─────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, 'Je serai en retard demain.', 'I will be late tomorrow.', '/ʒə sə.ʁe ɑ̃ ʁə.taʁ də.mɛ̃/', 'zhuh suh-ray ahⁿ ruh-TAR duh-MEHⁿ', ['scene', 'direct']),
  sent(1001, "Karim dit qu'il sera en retard demain.", 'Karim says he will be late tomorrow.', '/ka.ʁim di kil sə.ʁa ɑ̃ ʁə.taʁ də.mɛ̃/', 'ka-REEMM dee keel suh-ra ahⁿ ruh-TAR duh-MEHⁿ', ['scene', 'rapporte'], FCVDR),
  sent(1002, 'Mon train part à dix heures.', 'My train leaves at ten.', '/mɔ̃ tʁɛ̃ paʁ a di.zœʁ/', 'mohⁿ trehⁿ PAR a dee-ZUHR', ['scene', 'direct']),
  sent(1003, 'Il dit que son train part à dix heures.', 'He says his train leaves at ten.', '/il di kə sɔ̃ tʁɛ̃ paʁ a di.zœʁ/', 'eel dee kuh sohⁿ trehⁿ PAR a dee-ZUHR', ['scene', 'rapporte'], FCVDR),
  sent(1004, REFRAME, REFRAME_EN, '/lə me.saʒ ʁɛst lə pwɛ̃ d vy ʃɑ̃ʒ/', 'luh may-SAZH REHST luh pwehⁿd-vü SHAHⁿZH', ['rule', 'reframe'], ['flashcard'],
    rule("Quand tu passes un message à quelqu'un, qu'est-ce qui reste, et qu'est-ce qui change ?", "Ce qui est dit reste. Qui parle, à qui, et quel jour on est, ça change. Ex : Je serai en retard (Karim). Il dit qu'il sera en retard (toi, à Sophie).")),
  sent(1005, "Elle dit qu'elle arrive dans dix minutes.", 'She says she is arriving in ten minutes.', '/ɛl di kɛ.la.ʁiv dɑ̃ di mi.nyt/', 'ehl dee keh-la-REEV dahⁿ dee mee-NÜT', ['present', 'rapporte']),
  sent(1006, "Ils disent qu'ils ont fini le projet.", 'They say they have finished the project.', '/il diz kil.zɔ̃ fi.ni lə pʁɔ.ʒɛ/', 'eel DEEZ keel-zohⁿ fee-NEE luh pro-ZHEH', ['present', 'rapporte']),
  sent(1007, 'Le client dit que les plans sont parfaits.', 'The client says the plans are perfect.', '/lə kli.jɑ̃ di kə le plɑ̃ sɔ̃ paʁ.fɛ/', 'luh klee-YAHⁿ dee kuh lay PLAHⁿ sohⁿ par-FEH', ['present', 'rapporte'], FCVDR),
  sent(1008, "Sophie dit qu'elle travaille chez elle aujourd'hui.", 'Sophie says she is working from home today.', '/sɔ.fi di kɛl tʁa.vaj ʃe.zɛl o.ʒuʁ.dɥi/', 'so-FEE dee kehl tra-VAHY sheh-ZEHL oh-zhoor-DWEE', ['present', 'rapporte']),
  sent(1009, 'Madame Diallo dit que le chantier avance bien.', 'Mrs Diallo says the building work is going well.', '/ma.dam dja.lo di kə lə ʃɑ̃.tje a.vɑ̃s bjɛ̃/', 'ma-dam dya-LOH dee kuh luh shahⁿ-TYAY a-vahⁿss BYEHⁿ', ['present', 'rapporte', 'dakar'], FCVDR),
  sent(1010, 'Il dit que la réunion est annulée.', 'He says the meeting is cancelled.', '/il di kə la ʁe.y.njɔ̃ ɛ.ta.ny.le/', 'eel dee kuh la ray-ü-NYOHⁿ eh-ta-nü-LAY', ['present', 'rapporte']),
  sent(1011, "Il dit qu'il a oublié son ordinateur.", 'He says he forgot his computer.', '/il di ki.la.u.bli.je sɔ̃.nɔʁ.di.na.tœʁ/', 'eel dee kee-la-oo-blee-YAY sohⁿ-nor-dee-na-TUHR', ['present', 'rapporte']),
  sent(1012, "Elle dit que tu peux l'appeler après midi.", 'She says you can call her after noon.', '/ɛl di kə ty pø la.ple a.pʁɛ mi.di/', 'ehl dee kuh tü peu la-PLAY a-preh mee-DEE', ['present', 'rapporte'], FCVDR),
  phrase(1013, 'dire que', 'to say that', '/diʁ kə/', 'deer KUH', ['present', 'verbe']),
  sent(1014, 'En français, que ne disparaît jamais.', 'In French, que never disappears.', '/ɑ̃ fʁɑ̃.sɛ kə nə dis.pa.ʁɛ ʒa.mɛ/', 'ahⁿ frahⁿ-SEH kuh nuh dees-pa-reh zha-MEH', ['rule', 'que'], ['flashcard'],
    rule('« He says he is tired. » Où est le que dans la phrase française ?', "Juste après dit : il dit qu'il est fatigué. L'anglais peut enlever that, le français garde toujours que.")),
];

/* ── ACT 2 · JE DEVIENT IL ──────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1016, "Je n'ai pas mes clés.", 'I do not have my keys.', '/ʒə ne pa me kle/', 'zhuh nay pa may KLAY', ['pronoms', 'direct']),
  sent(1017, "Elle dit qu'elle n'a pas ses clés.", 'She says she does not have her keys.', '/ɛl di kɛl na pa se kle/', 'ehl dee kehl na pa say KLAY', ['pronoms', 'rapporte', 'possessif'], FCVDR),
  sent(1018, 'Nous aimons notre nouveau bureau.', 'We love our new office.', '/nu.zɛ.mɔ̃ nɔtʁ nu.vo by.ʁo/', 'noo-zeh-MOHⁿ notr noo-voh bü-ROH', ['pronoms', 'direct']),
  sent(1019, "Ils disent qu'ils aiment leur nouveau bureau.", 'They say they love their new office.', '/il diz kil.zɛm lœʁ nu.vo by.ʁo/', 'eel deez keel-ZEHM luhr noo-voh bü-ROH', ['pronoms', 'rapporte', 'possessif'], FCVDR),
  sent(1020, 'Il dit que tu peux le rappeler.', 'He says you can call him back.', '/il di kə ty pø lə ʁa.ple/', 'eel dee kuh tü peu luh ra-PLAY', ['pronoms', 'rapporte'], FCVDR),
  sent(1021, 'Elle dit que sa fille est malade.', 'She says her daughter is ill.', '/ɛl di kə sa fij ɛ ma.lad/', 'ehl dee kuh sa FEEY eh ma-LAD', ['pronoms', 'rapporte', 'possessif']),
  sent(1022, 'Il dit que ses enfants sont à Lyon.', 'He says his children are in Lyon.', '/il di kə se.zɑ̃.fɑ̃ sɔ̃.ta ljɔ̃/', 'eel dee kuh say-zahⁿ-FAHⁿ sohⁿ-ta LYOHⁿ', ['pronoms', 'rapporte', 'possessif']),
  sent(1023, 'Elles disent que leur avion est en retard.', 'They say their plane is late.', '/ɛl diz kə lœ.ʁa.vjɔ̃ ɛ.tɑ̃ ʁə.taʁ/', 'ehl deez kuh luh-ra-VYOHⁿ eh-tahⁿ ruh-TAR', ['pronoms', 'rapporte', 'possessif']),
  sent(1024, "Il dit qu'il t'attend devant l'entrée.", 'He says he is waiting for you at the entrance.', '/il di kil ta.tɑ̃ də.vɑ̃ lɑ̃.tʁe/', 'eel dee keel ta-TAHⁿ duh-vahⁿ lahⁿ-TRAY', ['pronoms', 'rapporte', 'tu'], FCVDR),
  sent(1025, "Elle dit qu'elle me remercie pour mon aide.", 'She says she thanks me for my help.', '/ɛl di kɛl mə ʁə.mɛʁ.si puʁ mɔ̃.nɛd/', 'ehl dee kehl muh ruh-mehr-SEE poor mohⁿ-NEHD', ['pronoms', 'rapporte', 'me']),
  sent(1026, "Karim dit que ton projet l'intéresse.", 'Karim says your project interests him.', '/ka.ʁim di kə tɔ̃ pʁɔ.ʒɛ lɛ̃.te.ʁɛs/', 'ka-REEMM dee kuh tohⁿ pro-ZHEH lehⁿ-tay-REHSS', ['pronoms', 'rapporte', 'tu']),
  sent(1027, 'Demande-toi qui parle maintenant, et à qui.', 'Ask yourself who is speaking now, and to whom.', '/də.mɑ̃d twa ki paʁl mɛ̃t.nɑ̃ e a ki/', 'duh-mahⁿd-TWA kee parl mehⁿt-NAHⁿ ay a KEE', ['rule', 'pronoms'], ['flashcard'],
    rule("Karim te dit « je t'appelle ce soir ». Tu le racontes à Sophie. Qui devient qui ?", "Je devient il, parce que Karim n'est plus celui qui parle. Te devient me, parce que c'est toi. Il dit qu'il m'appelle ce soir.")),
  sent(1028, "Il dit qu'il m'appelle ce soir.", 'He says he will call me tonight.', '/il di kil ma.pɛl sə swaʁ/', 'eel dee keel ma-PEHL suh SWAR', ['pronoms', 'rapporte', 'me'], FCVDR),
  sent(1029, 'Elle dit que son mari arrive demain.', 'She says her husband is arriving tomorrow.', '/ɛl di kə sɔ̃ ma.ʁi a.ʁiv də.mɛ̃/', 'ehl dee kuh sohⁿ ma-REE a-reev duh-MEHⁿ', ['pronoms', 'rapporte', 'possessif']),
  sent(1030, "Ils disent qu'ils nous invitent samedi.", 'They say they are inviting us on Saturday.', '/il diz kil nu.zɛ̃.vit sam.di/', 'eel deez keel noo-zehⁿ-VEET sam-DEE', ['pronoms', 'rapporte', 'nous']),
  sent(1031, "Elle dit que c'est son dernier jour.", 'She says it is her last day.', '/ɛl di kə sɛ sɔ̃ dɛʁ.nje ʒuʁ/', 'ehl dee kuh seh sohⁿ dehr-nyay ZHOOR', ['pronoms', 'rapporte', 'possessif'], FCVDR),
  sent(1032, 'Il dit que sa voiture est au garage.', 'He says his car is at the garage.', '/il di kə sa vwa.tyʁ ɛ.to ɡa.ʁaʒ/', 'eel dee kuh sa vwa-TÜR eh-toh ga-RAZH', ['pronoms', 'rapporte', 'possessif']),
  sent(1033, "Je t'appelle ce soir.", 'I will call you tonight.', '/ʒə ta.pɛl sə swaʁ/', 'zhuh ta-PEHL suh SWAR', ['pronoms', 'direct']),
];

/* ── ACT 3 · ELLE DEMANDE SI ────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1036, 'Est-ce que tu es libre jeudi ?', 'Are you free on Thursday?', '/ɛs.kə ty ɛ libʁ ʒø.di/', 'ehss-kuh tü eh leebr zheu-DEE', ['si', 'direct']),
  sent(1037, 'Il demande si tu es libre jeudi.', 'He is asking whether you are free on Thursday.', '/il də.mɑ̃d si ty ɛ libʁ ʒø.di/', 'eel duh-MAHⁿD see tü eh leebr zheu-DEE', ['si', 'rapporte'], FCVDR),
  sent(1038, 'Elle demande si les plans sont prêts.', 'She is asking whether the plans are ready.', '/ɛl də.mɑ̃d si le plɑ̃ sɔ̃ pʁɛ/', 'ehl duh-MAHⁿD see lay PLAHⁿ sohⁿ PREH', ['si', 'rapporte'], FCVDR),
  sent(1039, "Il veut savoir s'il peut venir plus tôt.", 'He wants to know if he can come earlier.', '/il vø sa.vwaʁ sil pø və.niʁ ply to/', 'eel veu sa-VWAR seel peu vuh-NEER plü TOH', ['si', 'rapporte', 'elision'], FCVDR),
  sent(1040, 'Elle demande si elle doit apporter son passeport.', 'She is asking whether she has to bring her passport.', '/ɛl də.mɑ̃d si ɛl dwa a.pɔʁ.te sɔ̃ pas.pɔʁ/', 'ehl duh-MAHⁿD see ehl dwa a-por-TAY sohⁿ pass-POR', ['si', 'rapporte', 'pas-elision']),
  sent(1041, "Ils demandent s'ils peuvent se garer ici.", 'They are asking whether they can park here.', '/il də.mɑ̃d sil pœv sə ɡa.ʁe i.si/', 'eel duh-MAHⁿD seel PUHV suh ga-RAY ee-SEE', ['si', 'rapporte', 'elision']),
  sent(1042, 'Je me demande si le bureau est ouvert.', 'I wonder whether the office is open.', '/ʒə mə də.mɑ̃d si lə by.ʁo ɛ.tu.vɛʁ/', 'zhuh muh duh-MAHⁿD see luh bü-ROH eh-too-VEHR', ['si', 'se-demander']),
  sent(1043, 'Elle demande si tu viendras à la fête.', 'She is asking whether you will come to the party.', '/ɛl də.mɑ̃d si ty vjɛ̃.dʁa a la fɛt/', 'ehl duh-MAHⁿD see tü vyehⁿ-DRA a la FEHT', ['si', 'rapporte', 'futur'], FCVDR),
  sent(1044, 'Je ne sais pas si elle viendra.', 'I do not know whether she will come.', '/ʒə nə sɛ pa si ɛl vjɛ̃.dʁa/', 'zhuh nuh seh pa see ehl vyehⁿ-DRA', ['si', 'futur'], FCVDR),
  sent(1045, "Le si d'une question accepte le futur.", 'The si of a question takes the future.', '/lə si dyn kɛs.tjɔ̃ ak.sɛpt lə fy.tyʁ/', 'luh see dün kehss-TYOHⁿ ak-sehpt luh fü-TÜR', ['rule', 'si'], ['flashcard'],
    rule('« Je ne sais pas si elle ... (venir). » Le futur est-il permis ?', "Oui. Ici, si veut dire whether, pas if : ce n'est pas une condition. Je ne sais pas si elle viendra.")),
  sent(1046, 'Il demande si la réunion est toujours à dix heures.', 'He is asking whether the meeting is still at ten.', '/il də.mɑ̃d si la ʁe.y.njɔ̃ ɛ tu.ʒuʁ a di.zœʁ/', 'eel duh-MAHⁿD see la ray-ü-NYOHⁿ eh too-zhoor a dee-ZUHR', ['si', 'rapporte']),
  sent(1047, 'Elle demande si elle peut payer par virement.', 'She is asking whether she can pay by transfer.', '/ɛl də.mɑ̃d si ɛl pø pe.je paʁ viʁ.mɑ̃/', 'ehl duh-MAHⁿD see ehl peu pay-YAY par veer-MAHⁿ', ['si', 'rapporte', 'pas-elision']),
  sent(1048, 'Il demande si elle a reçu son message.', 'He is asking whether she got his message.', '/il də.mɑ̃d si ɛ.la ʁə.sy sɔ̃ me.saʒ/', 'eel duh-MAHⁿD see eh-la ruh-SÜ sohⁿ may-SAZH', ['si', 'rapporte', 'pas-elision'], FCVDR),
  sent(1049, "Tu veux savoir s'il pleut à Québec.", 'You want to know if it is raining in Québec.', '/ty vø sa.vwaʁ sil plø a ke.bɛk/', 'tü veu sa-VWAR seel PLEU a kay-BEHK', ['si', 'elision', 'quebec']),
  phrase(1050, 'vouloir savoir si', 'to want to know whether', '/vu.lwaʁ sa.vwaʁ si/', 'voo-lwar sa-vwar SEE', ['si', 'verbe']),
  sent(1051, 'Est-ce que le bureau est ouvert samedi ?', 'Is the office open on Saturday?', '/ɛs.kə lə by.ʁo ɛ.tu.vɛʁ sam.di/', 'ehss-kuh luh bü-ROH eh-too-vehr sam-DEE', ['si', 'direct']),
];

/* ── ACT 4 · OÙ, QUAND, CE QUE ──────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1053, 'Elle demande où tu habites.', 'She is asking where you live.', '/ɛl də.mɑ̃d u ty a.bit/', 'ehl duh-MAHⁿD oo tü a-BEET', ['mots', 'rapporte'], FCVDR),
  sent(1054, 'Il demande quand tu pars.', 'He is asking when you are leaving.', '/il də.mɑ̃d kɑ̃ ty paʁ/', 'eel duh-MAHⁿD kahⁿ tü PAR', ['mots', 'rapporte'], FCVDR),
  sent(1055, 'Il veut savoir pourquoi tu pars.', 'He wants to know why you are leaving.', '/il vø sa.vwaʁ puʁ.kwa ty paʁ/', 'eel veu sa-VWAR poor-kwa tü PAR', ['mots', 'rapporte']),
  sent(1056, 'Elle demande comment tu vas.', 'She is asking how you are.', '/ɛl də.mɑ̃d kɔ.mɑ̃ ty va/', 'ehl duh-MAHⁿD ko-mahⁿ tü VA', ['mots', 'rapporte']),
  sent(1057, 'Il demande combien de personnes viennent.', 'He is asking how many people are coming.', '/il də.mɑ̃d kɔ̃.bjɛ̃ d pɛʁ.sɔn vjɛn/', 'eel duh-MAHⁿD kohⁿ-byehⁿd pehr-SONN VYEHNN', ['mots', 'rapporte']),
  sent(1058, 'Elle demande ce que tu fais ce soir.', 'She is asking what you are doing tonight.', '/ɛl də.mɑ̃d sə kə ty fɛ sə swaʁ/', 'ehl duh-MAHⁿD suh kuh tü feh suh SWAR', ['mots', 'ce-que', 'rapporte'], FCVDR),
  sent(1059, 'Il veut savoir ce que tu penses des plans.', 'He wants to know what you think of the plans.', '/il vø sa.vwaʁ sə kə ty pɑ̃s de plɑ̃/', 'eel veu sa-VWAR suh kuh tü pahⁿss day PLAHⁿ', ['mots', 'ce-que', 'rapporte']),
  sent(1060, 'Elle demande ce qui se passe.', 'She is asking what is going on.', '/ɛl də.mɑ̃d sə ki sə pas/', 'ehl duh-MAHⁿD suh kee suh PASS', ['mots', 'ce-qui', 'rapporte'], FCVDR),
  sent(1061, 'Il demande ce qui ne va pas.', 'He is asking what is wrong.', '/il də.mɑ̃d sə ki nə va pa/', 'eel duh-MAHⁿD suh kee nuh va PA', ['mots', 'ce-qui', 'rapporte']),
  sent(1062, "Qu'est-ce qui se passe ?", 'What is going on?', '/kɛs.ki sə pas/', 'kehss-kee suh PASS', ['mots', 'direct']),
  sent(1063, 'Elle veut savoir qui a appelé.', 'She wants to know who called.', '/ɛl vø sa.vwaʁ ki a a.ple/', 'ehl veu sa-VWAR kee a a-PLAY', ['mots', 'rapporte']),
  sent(1064, 'Il demande à quelle heure tu finis.', 'He is asking what time you finish.', '/il də.mɑ̃d a kɛ.lœʁ ty fi.ni/', 'eel duh-MAHⁿD a keh-LUHR tü fee-NEE', ['mots', 'rapporte']),
  sent(1065, "Je ne sais pas ce qu'il veut.", 'I do not know what he wants.', '/ʒə nə sɛ pa sə kil vø/', 'zhuh nuh seh pa suh keel VEU', ['mots', 'ce-que'], FCVDR),
  sent(1066, "Qu'est-ce que devient ce que, et est-ce que disparaît.", 'Qu’est-ce que becomes ce que, and est-ce que disappears.', '/kɛs.kə də.vjɛ̃ sə kə e ɛs.kə dis.pa.ʁɛ/', 'kehss-kuh duh-VYEHⁿ suh KUH ay ehss-kuh dees-pa-REH', ['rule', 'mots'], ['flashcard'],
    rule('« Où est-ce que tu habites ? » Comment le rapportes-tu ?', "Elle demande où tu habites. Le mot de question reste, est-ce que part, et le sujet revient devant le verbe.")),
  sent(1067, 'Il demande où il peut laisser sa voiture.', 'He is asking where he can leave his car.', '/il də.mɑ̃d u il pø lɛ.se sa vwa.tyʁ/', 'eel duh-MAHⁿD oo eel peu leh-SAY sa vwa-TÜR', ['mots', 'rapporte']),
  sent(1068, 'Elle veut savoir quel train tu prends.', 'She wants to know which train you are taking.', '/ɛl vø sa.vwaʁ kɛl tʁɛ̃ ty pʁɑ̃/', 'ehl veu sa-VWAR kehl trehⁿ tü PRAHⁿ', ['mots', 'rapporte'], FCVDR),
  sent(1069, 'Elle demande où tu pars.', 'She is asking where you are going.', '/ɛl də.mɑ̃d u ty paʁ/', 'ehl duh-MAHⁿD oo tü PAR', ['mots', 'rapporte']),
];

/* ── ACT 5 · DIS-LUI DE RAPPELER ────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1072, 'Rappelle-moi avant midi.', 'Call me back before noon.', '/ʁa.pɛl mwa a.vɑ̃ mi.di/', 'ra-pehl-MWA a-vahⁿ mee-DEE', ['ordre', 'direct']),
  sent(1073, 'Il te demande de le rappeler avant midi.', 'He is asking you to call him back before noon.', '/il tə də.mɑ̃d də lə ʁa.ple a.vɑ̃ mi.di/', 'eel tuh duh-MAHⁿD duh luh ra-PLAY a-vahⁿ mee-DEE', ['ordre', 'rapporte'], FCVDR),
  sent(1074, "Elle te dit d'apporter les plans.", 'She is telling you to bring the plans.', '/ɛl tə di da.pɔʁ.te le plɑ̃/', 'ehl tuh dee da-por-TAY lay PLAHⁿ', ['ordre', 'rapporte'], FCVDR),
  sent(1075, "Le plombier dit de ne pas utiliser l'évier.", 'The plumber says not to use the sink.', '/lə plɔ̃.bje di də nə pa.zy.ti.li.ze le.vje/', 'luh plohⁿ-BYAY dee duh nuh pa-zü-tee-lee-ZAY lay-VYAY', ['ordre', 'rapporte', 'negation'], FCVDR),
  sent(1076, "N'utilisez pas l'évier avant jeudi.", 'Do not use the sink before Thursday.', '/ny.ti.li.ze pa le.vje a.vɑ̃ ʒø.di/', 'nü-tee-lee-zay pa lay-VYAY a-vahⁿ zheu-DEE', ['ordre', 'direct', 'negation']),
  sent(1077, 'Elle nous demande de fermer la porte.', 'She is asking us to close the door.', '/ɛl nu də.mɑ̃d də fɛʁ.me la pɔʁt/', 'ehl noo duh-MAHⁿD duh fehr-MAY la PORT', ['ordre', 'rapporte']),
  sent(1078, 'Le médecin lui conseille de se reposer.', 'The doctor advises him to rest.', '/lə med.sɛ̃ lɥi kɔ̃.sɛj də sə ʁə.po.ze/', 'luh mehd-SEHⁿ lwee kohⁿ-SEHY duh suh ruh-po-ZAY', ['ordre', 'rapporte']),
  sent(1079, "Il me dit de ne pas m'inquiéter.", 'He tells me not to worry.', '/il mə di də nə pa mɛ̃.kje.te/', 'eel muh dee duh nuh pa mehⁿ-kyay-TAY', ['ordre', 'rapporte', 'negation'], FCVDR),
  sent(1080, "Dis à Sophie de m'envoyer le contrat.", 'Tell Sophie to send me the contract.', '/di a sɔ.fi də mɑ̃.vwa.je lə kɔ̃.tʁa/', 'dee a so-FEE duh mahⁿ-vwa-YAY luh kohⁿ-TRA', ['ordre', 'direct']),
  sent(1081, 'Il te demande de lui envoyer le contrat.', 'He is asking you to send him the contract.', '/il tə də.mɑ̃d də lɥi ɑ̃.vwa.je lə kɔ̃.tʁa/', 'eel tuh duh-MAHⁿD duh lwee ahⁿ-vwa-YAY luh kohⁿ-TRA', ['ordre', 'rapporte'], FCVDR),
  sent(1082, "Un ordre rapporté devient de plus l'infinitif.", 'A reported order becomes de plus the infinitive.', '/œ̃.nɔʁdʁ ʁa.pɔʁ.te də.vjɛ̃ də plys lɛ̃.fi.ni.tif/', 'uh-NORDR ra-por-TAY duh-VYEHⁿ duh plüss lehⁿ-fee-nee-TEEF', ['rule', 'ordre'], ['flashcard'],
    rule('« Ferme la porte. » Comment le rapportes-tu ?', "Il me dit de fermer la porte. L'impératif devient de plus l'infinitif, et le pronom passe devant l'infinitif.")),
  sent(1083, "Elle leur demande d'arriver à l'heure.", 'She asks them to arrive on time.', '/ɛl lœʁ də.mɑ̃d da.ʁi.ve a lœʁ/', 'ehl luhr duh-MAHⁿD da-ree-VAY a LUHR', ['ordre', 'rapporte']),
  sent(1084, "Ne t'inquiète pas.", 'Do not worry.', '/nə tɛ̃.kjɛt pa/', 'nuh tehⁿ-KYEHT PA', ['ordre', 'direct', 'negation']),
  phrase(1085, "demander à quelqu'un de", 'to ask someone to', '/də.mɑ̃.de a kɛl.kœ̃ də/', 'duh-mahⁿ-day a kehl-KUHⁿ DUH', ['ordre', 'verbe']),
  phrase(1086, "dire à quelqu'un de", 'to tell someone to', '/diʁ a kɛl.kœ̃ də/', 'deer a kehl-KUHⁿ DUH', ['ordre', 'verbe']),
  sent(1087, "Il dit qu'il vient ce soir.", 'He says he is coming tonight.', '/il di kil vjɛ̃ sə swaʁ/', 'eel dee keel vyehⁿ suh SWAR', ['ordre', 'information', 'rapporte']),
];

/* ── ACT 6 · ELLE A DIT QU'ELLE ÉTAIT ───────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1089, "Karim a dit qu'il était malade.", 'Karim said he was ill.', '/ka.ʁim a di ki.lɛ.tɛ ma.lad/', 'ka-REEMM a dee kee-leh-teh ma-LAD', ['decalage', 'imparfait', 'rapporte'], FCVDR),
  sent(1090, 'Je suis malade.', 'I am ill.', '/ʒə sɥi ma.lad/', 'zhuh swee ma-LAD', ['decalage', 'direct']),
  sent(1091, "Elle a dit qu'elle travaillait chez elle.", 'She said she was working from home.', '/ɛ.la di kɛl tʁa.va.jɛ ʃe.zɛl/', 'eh-la dee kehl tra-va-YEH sheh-ZEHL', ['decalage', 'imparfait', 'rapporte'], FCVDR),
  sent(1092, 'Il a expliqué que le train était en retard.', 'He explained that the train was late.', '/i.la ɛks.pli.ke kə lə tʁɛ̃ e.tɛ.tɑ̃ ʁə.taʁ/', 'ee-la ehks-plee-KAY kuh luh trehⁿ ay-teh-tahⁿ ruh-TAR', ['decalage', 'imparfait', 'rapporte']),
  sent(1093, "Elle m'a dit qu'elle habitait à Genève.", 'She told me she lived in Geneva.', '/ɛl ma di kɛ.la.bi.tɛ a ʒə.nɛv/', 'ehl ma dee keh-la-bee-TEH a zhuh-NEHV', ['decalage', 'imparfait', 'rapporte', 'suisse']),
  sent(1094, "Ils ont dit qu'ils avaient faim.", 'They said they were hungry.', '/il.zɔ̃ di kil.za.vɛ fɛ̃/', 'eel-zohⁿ dee keel-za-veh FEHⁿ', ['decalage', 'imparfait', 'rapporte']),
  sent(1095, "Il a répondu qu'il ne pouvait pas venir.", 'He replied that he could not come.', '/i.la ʁe.pɔ̃.dy kil nə pu.vɛ pa və.niʁ/', 'ee-la ray-pohⁿ-DÜ keel nuh poo-veh pa vuh-NEER', ['decalage', 'imparfait', 'rapporte'], FCVDR),
  sent(1096, 'Elle a demandé si la salle était libre.', 'She asked whether the room was free.', '/ɛ.la də.mɑ̃.de si la sal e.tɛ libʁ/', 'eh-la duh-mahⁿ-DAY see la sal ay-teh LEEBR', ['decalage', 'imparfait', 'si'], FCVDR),
  sent(1097, 'Il a demandé où tu habitais.', 'He asked where you lived.', '/i.la də.mɑ̃.de u ty a.bi.tɛ/', 'ee-la duh-mahⁿ-DAY oo tü a-bee-TEH', ['decalage', 'imparfait', 'mots']),
  sent(1098, 'Il faisait très froid à Québec.', 'It was very cold in Québec.', '/il fə.zɛ tʁɛ fʁwa a ke.bɛk/', 'eel fuh-zeh treh FRWA a kay-BEHK', ['decalage', 'direct', 'quebec']),
  sent(1099, "Elle a dit qu'il faisait très froid à Québec.", 'She said it was very cold in Québec.', '/ɛ.la di kil fə.zɛ tʁɛ fʁwa a ke.bɛk/', 'eh-la dee keel fuh-zeh treh FRWA a kay-BEHK', ['decalage', 'imparfait-reste', 'quebec'], FCVDR),
  sent(1100, "Après un verbe au passé, le présent passe à l'imparfait.", 'After a past-tense verb, the present moves to the imparfait.', '/a.pʁɛ.zœ̃ vɛʁb o pa.se lə pʁe.zɑ̃ pa.sa lɛ̃.paʁ.fɛ/', 'a-preh-zuhⁿ VEHRB oh pa-SAY luh pray-ZAHⁿ pa-sa lehⁿ-par-FEH', ['rule', 'decalage'], ['flashcard'],
    rule("« Je suis fatigué », a dit Karim. Comment le rapportes-tu ?", "Il a dit qu'il était fatigué. Le verbe qui rapporte est au passé, donc le présent passe à l'imparfait.")),
  sent(1101, "Le prof a dit que l'eau bout à cent degrés.", 'The teacher said that water boils at a hundred degrees.', '/lə pʁɔf a di kə lo bu a sɑ̃ də.ɡʁe/', 'luh PROF a dee kuh loh BOO a sahⁿ duh-GRAY', ['decalage', 'verite']),
  sent(1102, "Il m'a dit qu'il aimait beaucoup son travail.", 'He told me he really liked his job.', '/il ma di ki.lɛ.mɛ bo.ku sɔ̃ tʁa.vaj/', 'eel ma dee kee-leh-meh boh-koo sohⁿ tra-VAHY', ['decalage', 'imparfait', 'rapporte']),
  sent(1103, "Elle a dit qu'elle cherchait un appartement.", 'She said she was looking for a flat.', '/ɛ.la di kɛl ʃɛʁ.ʃɛ œ̃.na.paʁ.tə.mɑ̃/', 'eh-la dee kehl shehr-SHEH uhⁿ-na-par-tuh-MAHⁿ', ['decalage', 'imparfait', 'rapporte']),
  sent(1104, 'Ils ont dit que la route était fermée.', 'They said the road was closed.', '/il.zɔ̃ di kə la ʁut e.tɛ fɛʁ.me/', 'eel-zohⁿ dee kuh la ROOT ay-teh fehr-MAY', ['decalage', 'imparfait', 'rapporte'], FCVDR),
  sent(1105, 'Il dit que la route est fermée.', 'He says the road is closed.', '/il di kə la ʁut ɛ fɛʁ.me/', 'eel dee kuh la ROOT eh fehr-MAY', ['decalage', 'present', 'rapporte']),
];

/* ── ACT 7 · IL AVAIT PERDU SON TÉLÉPHONE ───────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1108, "J'ai perdu mon téléphone.", 'I lost my phone.', '/ʒe pɛʁ.dy mɔ̃ te.le.fɔn/', 'zhay pehr-DÜ mohⁿ tay-lay-FON', ['pqp', 'direct']),
  sent(1109, "Il a dit qu'il avait perdu son téléphone.", 'He said he had lost his phone.', '/il a di ki.la.vɛ pɛʁ.dy sɔ̃ te.le.fɔn/', 'eel a dee kee-la-veh pehr-DÜ sohⁿ tay-lay-FON', ['pqp', 'avoir', 'rapporte'], FCVDR),
  sent(1110, "Elle a expliqué qu'elle avait raté son train.", 'She explained she had missed her train.', '/ɛ.la ɛks.pli.ke kɛ.la.vɛ ʁa.te sɔ̃ tʁɛ̃/', 'eh-la ehks-plee-KAY keh-la-veh ra-TAY sohⁿ TREHⁿ', ['pqp', 'avoir', 'rapporte'], FCVDR),
  sent(1111, "Il a dit qu'il était parti à six heures.", 'He said he had left at six.', '/il a di ki.lɛ.tɛ paʁ.ti a si.zœʁ/', 'eel a dee kee-leh-teh par-TEE a see-ZUHR', ['pqp', 'etre', 'rapporte'], FCVDR),
  sent(1112, "Elle a dit qu'elle était arrivée en retard.", 'She said she had arrived late.', '/ɛ.la di kɛ.le.tɛ.ta.ʁi.ve ɑ̃ ʁə.taʁ/', 'eh-la dee keh-lay-teh-ta-ree-VAY ahⁿ ruh-TAR', ['pqp', 'etre', 'accord-f', 'rapporte']),
  sent(1113, "Ils ont dit qu'ils étaient déjà partis.", 'They said they had already left.', '/il.zɔ̃ di kil.ze.tɛ de.ʒa paʁ.ti/', 'eel-zohⁿ dee keel-zay-teh day-zha par-TEE', ['pqp', 'etre', 'accord-mp', 'rapporte']),
  sent(1114, "Elle a dit qu'elle s'était trompée de salle.", 'She said she had gone to the wrong room.', '/ɛ.la di kɛl se.tɛ tʁɔ̃.pe də sal/', 'eh-la dee kehl say-teh trohⁿ-PAY duh SAL', ['pqp', 'pronominal', 'accord-f', 'rapporte']),
  sent(1115, "Il m'a demandé si j'avais reçu son courriel.", 'He asked me whether I had received his email.', '/il ma də.mɑ̃.de si ʒa.vɛ ʁə.sy sɔ̃ ku.ʁjɛl/', 'eel ma duh-mahⁿ-DAY see zha-veh ruh-SÜ sohⁿ koo-RYEHL', ['pqp', 'avoir', 'si', 'quebec'], FCVDR),
  sent(1116, 'Elle a demandé ce que tu avais fait.', 'She asked what you had done.', '/ɛ.la də.mɑ̃.de sə kə ty a.vɛ fɛ/', 'eh-la duh-mahⁿ-DAY suh kuh tü a-veh FEH', ['pqp', 'avoir', 'ce-que']),
  sent(1117, "Le passé composé passe au plus-que-parfait : avait fait, était parti.", 'The passé composé moves to the pluperfect: had done, had left.', '/lə pa.se kɔ̃.po.ze pa.so plys.kə.paʁ.fɛ a.vɛ fɛ e.tɛ paʁ.ti/', 'luh pa-say kohⁿ-po-ZAY pa-soh plüss-kuh-par-FEH a-veh FEH ay-teh par-TEE', ['rule', 'pqp'], ['flashcard'],
    rule("« J'ai fini », a dit Karim. Comment le rapportes-tu ?", "Il a dit qu'il avait fini. L'auxiliaire passe à l'imparfait, et le participe ne bouge pas.")),
  sent(1118, 'Nous avons visité le chantier.', 'We visited the site.', '/nu.za.vɔ̃ vi.zi.te lə ʃɑ̃.tje/', 'noo-za-vohⁿ vee-zee-TAY luh shahⁿ-TYAY', ['pqp', 'direct']),
  sent(1119, "Ils ont dit qu'ils avaient visité le chantier.", 'They said they had visited the site.', '/il.zɔ̃ di kil.za.vɛ vi.zi.te lə ʃɑ̃.tje/', 'eel-zohⁿ dee keel-za-veh vee-zee-TAY luh shahⁿ-TYAY', ['pqp', 'avoir', 'rapporte'], FCVDR),
  sent(1120, "Il a dit qu'il avait oublié la réunion.", 'He said he had forgotten the meeting.', '/il a di ki.la.vɛ.tu.bli.je la ʁe.y.njɔ̃/', 'eel a dee kee-la-veh-too-blee-YAY la ray-ü-NYOHⁿ', ['pqp', 'avoir', 'rapporte']),
  sent(1121, 'Elle a dit que les ouvriers avaient fini le toit.', 'She said the workers had finished the roof.', '/ɛ.la di kə le.zu.vʁi.je a.vɛ fi.ni lə twa/', 'eh-la dee kuh lay-zoo-vree-YAY a-veh fee-nee luh TWA', ['pqp', 'avoir', 'dakar']),
  sent(1122, "Il a dit qu'il n'avait pas compris la question.", 'He said he had not understood the question.', '/il a di kil na.vɛ pa kɔ̃.pʁi la kɛs.tjɔ̃/', 'eel a dee keel na-veh pa kohⁿ-pree la kehss-TYOHⁿ', ['pqp', 'avoir', 'negation']),
  phrase(1123, 'il avait fini', 'he had finished', '/i.la.vɛ fi.ni/', 'ee-la-veh fee-NEE', ['pqp', 'avoir'], FCVR,
    gap('Karim a dit : « J’ai fini. » Il a dit qu’il ___ fini.', 'avait : avoir passe à l’imparfait, et fini reste fini.')),
  phrase(1124, 'elle était partie', 'she had left', '/ɛ.le.tɛ paʁ.ti/', 'eh-lay-teh par-TEE', ['pqp', 'etre', 'accord-f'], FCVR,
    gap('Sophie a dit : « Je suis partie. » Elle a dit qu’elle ___ partie.', 'était : être passe à l’imparfait, et partie garde son e.')),
  sent(1125, "Il était déjà parti quand je suis arrivé.", 'He had already left when I arrived.', '/i.le.tɛ de.ʒa paʁ.ti kɑ̃ ʒə sɥi.za.ʁi.ve/', 'ee-lay-teh day-zha par-TEE kahⁿ zhuh swee-za-ree-VAY', ['pqp', 'etre', 'recit']),
];

/* ── ACT 8 · IL RAPPELLERAIT ────────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1127, 'Je vous rappellerai.', 'I will call you back.', '/ʒə vu ʁa.pɛl.ʁe/', 'zhuh voo ra-pehl-RAY', ['conditionnel', 'direct']),
  sent(1128, "Il a dit qu'il nous rappellerait.", 'He said he would call us back.', '/il a di kil nu ʁa.pɛl.ʁɛ/', 'eel a dee keel noo ra-pehl-REH', ['conditionnel', 'rapporte'], FCVDR),
  sent(1129, "Elle a dit qu'elle enverrait les photos.", 'She said she would send the photos.', '/ɛ.la di kɛ.lɑ̃.vɛ.ʁɛ le fɔ.to/', 'eh-la dee keh-lahⁿ-veh-REH lay fo-TOH', ['conditionnel', 'rapporte', 'dakar'], FCVDR),
  sent(1130, 'Il a dit que le chantier finirait en mai.', 'He said the work would finish in May.', '/il a di kə lə ʃɑ̃.tje fi.ni.ʁɛ ɑ̃ mɛ/', 'eel a dee kuh luh shahⁿ-TYAY fee-nee-REH ahⁿ MEH', ['conditionnel', 'rapporte']),
  sent(1131, 'Elle a demandé si tu viendrais à la fête.', 'She asked whether you would come to the party.', '/ɛ.la də.mɑ̃.de si ty vjɛ̃.dʁɛ a la fɛt/', 'eh-la duh-mahⁿ-DAY see tü vyehⁿ-DREH a la FEHT', ['conditionnel', 'si'], FCVDR),
  sent(1132, "Ils ont dit qu'ils seraient là à huit heures.", 'They said they would be there at eight.', '/il.zɔ̃ di kil sə.ʁɛ la a ɥi.tœʁ/', 'eel-zohⁿ dee keel suh-reh LA a wee-TUHR', ['conditionnel', 'rapporte']),
  sent(1133, "Elle a dit qu'elle allait déménager.", 'She said she was going to move house.', '/ɛ.la di kɛ.la.lɛ de.me.na.ʒe/', 'eh-la dee keh-la-leh day-may-na-ZHAY', ['conditionnel', 'futur-proche', 'rapporte'], FCVDR),
  sent(1134, 'Je vais déménager.', 'I am going to move house.', '/ʒə vɛ de.me.na.ʒe/', 'zhuh veh day-may-na-ZHAY', ['futur-proche', 'direct']),
  sent(1135, "Il a dit qu'il venait de partir.", 'He said he had just left.', '/il a di kil və.nɛ də paʁ.tiʁ/', 'eel a dee keel vuh-neh duh par-TEER', ['conditionnel', 'venir-de', 'rapporte']),
  sent(1136, 'Ce sera prêt vendredi.', 'It will be ready on Friday.', '/sə sə.ʁa pʁɛ vɑ̃.dʁə.di/', 'suh suh-ra preh vahⁿ-druh-DEE', ['conditionnel', 'direct']),
  sent(1137, 'Il a dit que ce serait prêt vendredi.', 'He said it would be ready on Friday.', '/il a di kə sə sə.ʁɛ pʁɛ vɑ̃.dʁə.di/', 'eel a dee kuh suh suh-reh preh vahⁿ-druh-DEE', ['conditionnel', 'rapporte'], FCVDR),
  sent(1138, 'Le futur passe au conditionnel : sera devient serait.', 'The future moves to the conditional: sera becomes serait.', '/lə fy.tyʁ pa.so kɔ̃.di.sjɔ.nɛl sə.ʁa də.vjɛ̃ sə.ʁɛ/', 'luh fü-TÜR pa-soh kohⁿ-dee-syo-NEHL suh-RA duh-vyehⁿ suh-REH', ['rule', 'conditionnel'], ['flashcard'],
    rule('« Je viendrai », a dit Sophie. Comment le rapportes-tu ?', "Elle a dit qu'elle viendrait. Le futur passe au conditionnel, avec le même radical.")),
  sent(1139, "Tu m'as dit que tu m'aiderais.", 'You told me you would help me.', '/ty ma di kə ty mɛ.də.ʁɛ/', 'tü ma dee kuh tü meh-duh-REH', ['conditionnel', 'rapporte']),
  sent(1140, 'Il a dit que ce serait une bonne idée.', 'He said it would be a good idea.', '/il a di kə sə sə.ʁɛ yn bɔ.ni.de/', 'eel a dee kuh suh suh-reh ün bo-nee-DAY', ['conditionnel', 'conditionnel-reste']),
  sent(1141, 'Elle a dit que la réunion aurait lieu à Laval.', 'She said the meeting would take place in Laval.', '/ɛ.la di kə la ʁe.y.njɔ̃ o.ʁɛ ljø a la.val/', 'eh-la dee kuh la ray-ü-NYOHⁿ oh-reh LYEU a la-VAL', ['conditionnel', 'rapporte', 'quebec']),
  sent(1142, "Elle a dit qu'elle viendrait.", 'She said she would come.', '/ɛ.la di kɛl vjɛ̃.dʁɛ/', 'eh-la dee kehl vyehⁿ-DREH', ['conditionnel', 'rapporte'], FCVR,
    gap('Sophie a dit : « Je viendrai. » Elle a dit qu’elle ___.', 'viendrait : le radical du futur, et la fin de l’imparfait.')),
];

/* ── ACT 9 · LE LENDEMAIN, LÀ-BAS ───────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1144, 'Je pars demain.', 'I am leaving tomorrow.', '/ʒə paʁ də.mɛ̃/', 'zhuh par duh-MEHⁿ', ['reperes', 'direct']),
  sent(1145, "Il a dit qu'il partait le lendemain.", 'He said he was leaving the next day.', '/il a di kil paʁ.tɛ lə lɑ̃d.mɛ̃/', 'eel a dee keel par-teh luh lahⁿd-MEHⁿ', ['reperes', 'rapporte'], FCVDR),
  sent(1146, "Elle a dit qu'elle était arrivée la veille.", 'She said she had arrived the day before.', '/ɛ.la di kɛ.le.tɛ.ta.ʁi.ve la vɛj/', 'eh-la dee keh-lay-teh-ta-ree-vay la VEHY', ['reperes', 'pqp', 'rapporte'], FCVDR),
  sent(1147, "Il a dit qu'il était occupé ce jour-là.", 'He said he was busy that day.', '/il a di ki.lɛ.tɛ.tɔ.ky.pe sə ʒuʁ la/', 'eel a dee kee-leh-teh-to-kü-PAY suh zhoor LA', ['reperes', 'rapporte']),
  sent(1148, "Elle a dit qu'elle reviendrait la semaine suivante.", 'She said she would come back the following week.', '/ɛ.la di kɛl ʁə.vjɛ̃.dʁɛ la sə.mɛn sɥi.vɑ̃t/', 'eh-la dee kehl ruh-vyehⁿ-DREH la suh-mehn swee-VAHⁿT', ['reperes', 'conditionnel', 'rapporte'], FCVDR),
  sent(1149, "Il m'a dit de l'attendre là.", 'He told me to wait for him there.', '/il ma di də la.tɑ̃dʁ la/', 'eel ma dee duh la-tahⁿdr LA', ['reperes', 'ordre', 'rapporte']),
  sent(1150, 'Attends-moi ici.', 'Wait for me here.', '/a.tɑ̃ mwa i.si/', 'a-tahⁿ-mwa ee-SEE', ['reperes', 'direct']),
  sent(1151, "Elle a dit que ce matin-là, elle avait vu le directeur.", 'She said that that morning she had seen the director.', '/ɛ.la di kə sə ma.tɛ̃ la ɛ.la.vɛ vy lə di.ʁɛk.tœʁ/', 'eh-la dee kuh suh ma-tehⁿ-LA eh-la-veh vü luh dee-rehk-TUHR', ['reperes', 'pqp', 'rapporte']),
  sent(1152, "Il a dit qu'il avait appelé deux jours plus tôt.", 'He said he had called two days earlier.', '/il a di ki.la.vɛ a.ple dø ʒuʁ ply to/', 'eel a dee kee-la-veh a-PLAY deu zhoor plü TOH', ['reperes', 'pqp', 'rapporte']),
  sent(1153, "Elle a dit qu'à ce moment-là, elle dormait.", 'She said that at that moment she was asleep.', '/ɛ.la di ka sə mɔ.mɑ̃ la ɛl dɔʁ.mɛ/', 'eh-la dee ka suh mo-mahⁿ-LA ehl dor-MEH', ['reperes', 'imparfait', 'rapporte']),
  sent(1154, 'Si le jour a changé, les mots du temps changent aussi.', 'If the day has changed, the time words change too.', '/si lə ʒuʁ a ʃɑ̃.ʒe le mo dy tɑ̃ ʃɑ̃ʒ o.si/', 'see luh ZHOOR a shahⁿ-ZHAY lay moh dü TAHⁿ shahⁿzh oh-SEE', ['rule', 'reperes'], ['flashcard'],
    rule('Karim a dit « je viens demain ». Tu le rapportes le soir même. Demain ou le lendemain ?', "Demain : pour toi, c'est encore demain. Le lendemain sert quand ce demain est déjà passé.")),
  sent(1155, "Il a dit qu'il viendrait demain.", 'He said he would come tomorrow.', '/il a di kil vjɛ̃.dʁɛ də.mɛ̃/', 'eel a dee keel vyehⁿ-dreh duh-MEHⁿ', ['reperes', 'meme-jour', 'rapporte'], FCVDR),
  phrase(1156, 'le surlendemain', 'two days later', '/lə syʁ.lɑ̃d.mɛ̃/', 'luh sür-lahⁿd-MEHⁿ', ['reperes']),
  phrase(1157, 'la semaine précédente', 'the week before', '/la sə.mɛn pʁe.se.dɑ̃t/', 'la suh-mehn pray-say-DAHⁿT', ['reperes']),
  phrase(1158, 'ce jour-là', 'that day', '/sə ʒuʁ la/', 'suh zhoor LA', ['reperes']),
  phrase(1159, 'à ce moment-là', 'at that moment', '/a sə mɔ.mɑ̃ la/', 'a suh mo-mahⁿ-LA', ['reperes']),
];

/* ── ACT 10 · EXPLIQUER, PROMETTRE, AVOUER ──────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1161, 'Elle a expliqué que le bureau fermait à dix-huit heures.', 'She explained that the office closed at six.', '/ɛ.la ɛks.pli.ke kə lə by.ʁo fɛʁ.mɛ a di.zɥi.tœʁ/', 'eh-la ehks-plee-KAY kuh luh bü-ROH fehr-MEH a dee-zwee-TUHR', ['verbes', 'expliquer'], FCVDR),
  sent(1162, "Il a répondu qu'il n'avait pas le temps.", 'He answered that he did not have time.', '/i.la ʁe.pɔ̃.dy kil na.vɛ pa lə tɑ̃/', 'ee-la ray-pohⁿ-DÜ keel na-veh pa luh TAHⁿ', ['verbes', 'repondre']),
  sent(1163, "Le directeur a annoncé que l'agence déménageait en juin.", 'The director announced that the agency was moving in June.', '/lə di.ʁɛk.tœʁ a a.nɔ̃.se kə la.ʒɑ̃s de.me.na.ʒɛ ɑ̃ ʒɥɛ̃/', 'luh dee-rehk-TUHR a a-nohⁿ-SAY kuh la-ZHAHⁿSS day-may-na-ZHEH ahⁿ ZHWEHⁿ', ['verbes', 'annoncer'], FCVDR),
  sent(1164, 'Elle a promis de rappeler avant midi.', 'She promised to call back before noon.', '/ɛ.la pʁɔ.mi də ʁa.ple a.vɑ̃ mi.di/', 'eh-la pro-MEE duh ra-PLAY a-vahⁿ mee-DEE', ['verbes', 'promettre'], FCVDR),
  sent(1165, "Il a promis qu'il ne serait plus en retard.", 'He promised he would not be late any more.', '/i.la pʁɔ.mi kil nə sə.ʁɛ ply.zɑ̃ ʁə.taʁ/', 'ee-la pro-MEE keel nuh suh-reh plü-zahⁿ ruh-TAR', ['verbes', 'promettre', 'conditionnel']),
  sent(1166, "Elle a affirmé qu'elle n'avait rien vu.", 'She stated that she had seen nothing.', '/ɛ.la a.fiʁ.me kɛl na.vɛ ʁjɛ̃ vy/', 'eh-la a-feer-MAY kehl na-veh ryehⁿ VÜ', ['verbes', 'affirmer', 'pqp']),
  sent(1167, "Il a avoué qu'il avait oublié le rendez-vous.", 'He admitted he had forgotten the appointment.', '/i.la a.vwe ki.la.vɛ.tu.bli.je lə ʁɑ̃.de.vu/', 'ee-la a-VWAY kee-la-veh-too-blee-YAY luh rahⁿ-day-VOO', ['verbes', 'avouer', 'pqp'], FCVDR),
  sent(1168, "Elle a ajouté qu'elle serait absente lundi.", 'She added that she would be away on Monday.', '/ɛ.la a.ʒu.te kɛl sə.ʁɛ.tap.sɑ̃t lœ̃.di/', 'eh-la a-zhoo-TAY kehl suh-reh-tap-SAHⁿT luhⁿ-DEE', ['verbes', 'ajouter', 'conditionnel']),
  sent(1169, 'Il a précisé que la visite était gratuite.', 'He specified that the visit was free.', '/i.la pʁe.si.ze kə la vi.zit e.tɛ ɡʁa.tɥit/', 'ee-la pray-see-ZAY kuh la vee-ZEET ay-teh gra-TWEET', ['verbes', 'preciser']),
  sent(1170, "Elle m'a conseillé de prendre le métro.", 'She advised me to take the metro.', '/ɛl ma kɔ̃.se.je də pʁɑ̃dʁ lə me.tʁo/', 'ehl ma kohⁿ-say-YAY duh prahⁿdr luh may-TROH', ['verbes', 'conseiller', 'ordre'], FCVDR),
  sent(1171, "Il a raconté qu'il avait vécu à Dakar.", 'He told us he had lived in Dakar.', '/i.la ʁa.kɔ̃.te ki.la.vɛ ve.ky a da.kaʁ/', 'ee-la ra-kohⁿ-TAY kee-la-veh vay-KÜ a da-KAR', ['verbes', 'raconter', 'pqp', 'dakar']),
  sent(1172, 'Chaque verbe dit comment la phrase a été dite.', 'Each verb says how the sentence was said.', '/ʃak vɛʁb di kɔ.mɑ̃ la fʁaz a e.te dit/', 'shak VEHRB dee ko-mahⁿ la FRAZ a ay-tay DEET', ['rule', 'verbes'], ['flashcard'],
    rule('Dit, avoue, promet, répond : qu’est-ce que ces verbes ajoutent au message ?', "La façon de parler : un aveu, une promesse, une réponse. Dit ne donne rien de plus.")),
  phrase(1173, 'promettre de', 'to promise to', '/pʁɔ.mɛtʁ də/', 'pro-mehtr DUH', ['verbes', 'promettre']),
  phrase(1174, 'avouer que', 'to admit that', '/a.vwe kə/', 'a-vway KUH', ['verbes', 'avouer']),
  sent(1175, "Elle a répété qu'elle n'était pas d'accord.", 'She repeated that she did not agree.', '/ɛ.la ʁe.pe.te kɛl ne.tɛ pa da.kɔʁ/', 'eh-la ray-pay-TAY kehl nay-teh pa da-KOR', ['verbes', 'repeter']),
  sent(1176, "Il a annoncé qu'il allait prendre sa retraite.", 'He announced that he was going to retire.', '/i.la a.nɔ̃.se ki.la.lɛ pʁɑ̃dʁ sa ʁə.tʁɛt/', 'ee-la a-nohⁿ-SAY kee-la-leh prahⁿdr sa ruh-TREHT', ['verbes', 'annoncer', 'futur-proche']),
];

/* ── ACT 11 · TRANSMETTRE UN MESSAGE ────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1178, 'Tu as eu un appel pendant ta pause.', 'You had a call during your break.', '/ty a y œ̃.na.pɛl pɑ̃.dɑ̃ ta poz/', 'tü a ü uhⁿ-na-PEHL pahⁿ-dahⁿ ta POHZ', ['relais']),
  sent(1179, 'Madame Diallo a appelé de Dakar à dix heures.', 'Mrs Diallo called from Dakar at ten.', '/ma.dam dja.lo a a.ple də da.kaʁ a di.zœʁ/', 'ma-dam dya-LOH a a-PLAY duh da-KAR a dee-ZUHR', ['relais', 'dakar'], FCVDR),
  sent(1180, 'Elle voulait savoir si tu avais reçu ses photos.', 'She wanted to know whether you had got her photos.', '/ɛl vu.lɛ sa.vwaʁ si ty a.vɛ ʁə.sy se fɔ.to/', 'ehl voo-leh sa-VWAR see tü a-veh ruh-SÜ say fo-TOH', ['relais', 'si', 'pqp'], FCVDR),
  sent(1181, "Elle m'a demandé de te dire que c'était urgent.", 'She asked me to tell you it was urgent.', '/ɛl ma də.mɑ̃.de də tə diʁ kə se.tɛ.tyʁ.ʒɑ̃/', 'ehl ma duh-mahⁿ-DAY duh tuh DEER kuh say-teh-tür-ZHAHⁿ', ['relais', 'ordre', 'imparfait'], FCVDR),
  sent(1182, "Il a dit qu'il passerait au bureau le lendemain.", 'He said he would drop by the office the next day.', '/il a di kil pas.ʁɛ o by.ʁo lə lɑ̃d.mɛ̃/', 'eel a dee keel pass-REH oh bü-ROH luh lahⁿd-MEHⁿ', ['relais', 'conditionnel', 'reperes']),
  sent(1183, 'Rappelle-la avant dix-sept heures.', 'Call her back before five.', '/ʁa.pɛl la a.vɑ̃ di.sɛ.tœʁ/', 'ra-pehl-LA a-vahⁿ dee-seh-TUHR', ['relais', 'ordre'], FCVDR),
  sent(1184, "Il n'a pas laissé de numéro.", 'He did not leave a number.', '/il na pa lɛ.se də ny.me.ʁo/', 'eel na pa leh-SAY duh nü-may-ROH', ['relais']),
  sent(1185, 'Je lui ai dit que tu étais en réunion.', 'I told her you were in a meeting.', '/ʒə lɥi e di kə ty e.tɛ.zɑ̃ ʁe.y.njɔ̃/', 'zhuh lwee ay DEE kuh tü ay-teh-zahⁿ ray-ü-NYOHⁿ', ['relais', 'imparfait'], FCVDR),
  sent(1186, "Elle a précisé qu'elle serait joignable toute la journée.", 'She said she would be reachable all day.', '/ɛ.la pʁe.si.ze kɛl sə.ʁɛ ʒwa.ɲabl tut la ʒuʁ.ne/', 'eh-la pray-see-ZAY kehl suh-reh zhwa-NYABL toot la zhoor-NAY', ['relais', 'conditionnel']),
  phrase(1187, 'laisser un message', 'to leave a message', '/lɛ.se œ̃ me.saʒ/', 'leh-say uhⁿ may-SAZH', ['relais']),
  phrase(1188, 'transmettre un message', 'to pass on a message', '/tʁɑ̃s.mɛtʁ œ̃ me.saʒ/', 'trahⁿss-mehtr uhⁿ may-SAZH', ['relais']),
  phrase(1189, 'la boîte vocale', 'voicemail', '/la bwat vɔ.kal/', 'la bwat vo-KAL', ['relais', 'quebec']),
  sent(1190, "Pour transmettre, dis qui a appelé, ce qu'il veut, et ce qu'il faut faire.", 'To pass it on, say who called, what they want, and what has to be done.', '/puʁ tʁɑ̃s.mɛtʁ di ki a a.ple sə kil vø e sə kil fo fɛʁ/', 'poor trahⁿss-MEHTR dee kee a a-PLAY suh keel VEU ay suh keel foh FEHR', ['rule', 'relais'], ['flashcard'],
    rule('Un message pour une collègue absente : quelles trois choses dis-tu ?', "Qui a appelé, ce que la personne veut, et ce que ta collègue doit faire. Le reste peut attendre.")),
  sent(1191, "Il a appelé pour dire qu'il était désolé.", 'He called to say he was sorry.', '/i.la a.ple puʁ diʁ ki.lɛ.tɛ de.zɔ.le/', 'ee-la a-PLAY poor DEER kee-leh-teh day-zo-LAY', ['relais', 'imparfait']),
  sent(1192, 'Tu peux lui dire que je la rappelle demain.', 'Can you tell her I will call her back tomorrow.', '/ty pø lɥi diʁ kə ʒə la ʁa.pɛl də.mɛ̃/', 'tü peu lwee DEER kuh zhuh la ra-pehl duh-MEHⁿ', ['relais', 'present']),
  sent(1193, "D'après lui, les travaux ont pris du retard.", 'According to him, the work has fallen behind.', '/da.pʁɛ lɥi le tʁa.vo ɔ̃ pʁi dy ʁə.taʁ/', 'da-preh LWEE lay tra-VOH ohⁿ pree dü ruh-TAR', ['relais']),
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

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS AND THEIR KEYS
 *
 *  The readings live here so the reading, the quiz and the task cannot drift
 *  apart.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: a note on Sophie's desk, reported IN THE PRESENT, the same day.
 *  Nothing moves in time; only the persons do. */
export const NOTE_TEXT =
  "Sophie, pendant ton rendez-vous chez le client, trois personnes ont appelé. D'abord Karim Benali. Il dit qu'il sera en retard demain matin, parce que son train part de Québec à dix heures. Il demande si tu peux déplacer la réunion à quatorze heures. Ensuite, Madame Diallo a écrit de Dakar. Elle dit que le chantier avance bien et que les ouvriers ont fini le deuxième étage. Elle veut savoir quand tu envoies les nouveaux plans. Le client de Laval dit que les plans sont parfaits et qu'il signe le contrat lundi. Enfin, le plombier est passé. Il dit de ne pas utiliser l'évier de la cuisine avant jeudi. Il explique qu'une pièce manque et qu'il la commande aujourd'hui. Moi, je pars à dix-sept heures. Je laisse les dossiers sur ta chaise. Bonne soirée ! Julien";

/** The four shapes the note already uses, in order. */
export const NOTE_SHAPES = [
  "il dit qu'il sera (une information)",
  'il demande si tu peux (une question oui ou non)',
  'elle veut savoir quand tu envoies (une question avec un mot)',
  "il dit de ne pas utiliser (un ordre)",
] as const;

/** Act 9: a message to a friend about a meeting a month ago. Every time word
 *  has moved, because the day has changed. */
export const GARE_TEXT =
  "Tu te souviens de Luc, mon ancien voisin de Genève ? Je l'ai croisé à la gare de Lausanne le mois dernier. Il m'a dit qu'il était arrivé la veille et qu'il repartait le lendemain. Il a expliqué qu'il travaillait maintenant à Lausanne et que, ce jour-là, il allait voir sa mère. Il a dit que Lausanne lui plaisait beaucoup et qu'il se sentait bien là-bas. Il m'a demandé si j'habitais toujours dans le quartier. Je lui ai répondu que oui. Il a ajouté que sa fille s'était mariée la semaine précédente et qu'il avait des photos. Il m'a promis qu'il m'enverrait son adresse la semaine suivante. Trois semaines plus tard, j'attends encore son message. Il m'avait pourtant dit qu'il n'oubliait jamais rien.";

/** The time words of GARE_TEXT, each with the word Luc actually said. */
export const GARE_REPERES = [
  ['la veille', 'hier'],
  ['le lendemain', 'demain'],
  ['ce jour-là', "aujourd'hui"],
  ['la semaine précédente', 'la semaine dernière'],
  ['la semaine suivante', 'la semaine prochaine'],
] as const;

/** Act 11: the model the learner imitates in the task. A relayed voicemail,
 *  written the next day. 121 words. */
export const RELAIS_TEXT =
  "Salut Sophie, hier après-midi, Madame Diallo a appelé de Dakar pendant ta réunion. Elle a dit que le chantier avançait bien, mais que les ouvriers avaient trouvé un problème au deuxième étage. Elle a précisé qu'ils ne pouvaient pas continuer sans ta réponse. Elle voulait savoir si tu avais reçu ses photos. Elle a expliqué qu'elle les avait envoyées la veille au soir. Elle a demandé ce que tu pensais de la nouvelle fenêtre et quand tu pourrais faire une visite vidéo. Elle a promis qu'elle serait joignable toute la journée d'aujourd'hui. Elle m'a demandé de te dire de la rappeler avant dix-sept heures. Je lui ai répondu que tu étais en réunion et que tu la rappellerais. Bonne journée ! Julien";

/** The voicemail the task hands the learner, in DIRECT speech. The learner
 *  relays it the next day, so « demain matin » is this morning. */
export const TASK_VOICEMAIL =
  "« Bonjour Marc, c'est Isabelle Morin, de la mairie de Laval. Je vous appelle pour le projet de la bibliothèque. Nous avons bien reçu vos plans, merci. Le conseil se réunit jeudi et je vous donnerai sa réponse vendredi. Est-ce que vous pouvez m'envoyer le budget avant mercredi ? Et qu'est-ce que vous pensez d'une visite du terrain la semaine prochaine ? Rappelez-moi demain matin, je suis au bureau jusqu'à midi. Merci. »";
