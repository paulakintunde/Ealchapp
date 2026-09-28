// b2.02.l1 « Le conditionnel passé »: the authored corpus, the imports and the
// citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as
// b1.08 and b1.10 are built) under the B2 rules of B2-BUILD-LOG.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (b2.03 and b2.04 may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// IMPORT_IDS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE CONDITIONNEL PASSÉ, built and used. Nothing in the form is new: the
//   auxiliary is the conditionnel présent of lesson 8 in B1 (aur-, ser-),
//   the participle and the choice of avoir or être are the passé composé's.
//   What the lesson sells is the LOOK BACK, in five jobs:
//
//     j'aurais aimé · j'aurais voulu · je n'aurais pas dû     le regret
//     tu aurais dû · tu aurais pu · il aurait fallu · on aurait pu   le reproche
//     sans ton aide, je n'aurais jamais réussi               le résultat irréel
//     j'aurais voulu vous demander · vous n'auriez pas vu    la politesse
//     l'incendie aurait fait deux blessés                    le on-dit, au passé
//
//   and the contrasts that are the real unit of teaching:
//     conditionnel présent against passé (tu devrais / tu aurais dû)      act 3
//     j'ai dû / j'aurais dû, j'ai pu / j'aurais pu, j'ai voulu / j'aurais voulu  act 6
//     j'aurai (futur antérieur) against j'aurais: « j'aurai dû »           act 7
//     « si j'aurais su »: the conditional never follows si                 act 8
//     passé composé (signed) against conditionnel passé (reported)         act 10
//
//   NOT OWNED, CITED BY TRAIL POSITION (never re-taught):
//     lesson 8 in B1    the conditionnel présent (reframe quoted, rows reused)
//     lesson 9 in B1    the polite imparfait « je voulais » (reframe quoted)
//     lesson 10 in B1   the si pairs; its act 11 rows reused for recognition
//     lesson 34 in B1   the news conditional (reframe quoted, row reused)
//     lesson 1 in B2    the plus-que-parfait (named, built there)
//     lesson 3 in B2    si + plus-que-parfait > conditionnel passé (named;
//                       act 8 and the roundup hand the learner over to it)
//     lesson 7 in B2    the futur antérieur (named in act 7 as the trap's
//                       other half, not taught here)
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB probed 2026-09-27 (read-only)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `conseils-et-suggestions` (fondations, a2-b2). Sub-themes to set
//     in Postgres at import: « conseiller et suggérer », « le regret et le
//     reproche », « ce qu'on aurait pu faire ». Probed live: a2 132 rows (max
//     132), b1 303 rows (max 1190, lesson 9 in B1 owns 1000-1190), b2 48 rows
//     (max 48). NOTHING at 1200-1399 at any level.
//  2. ID BLOCK `.1200`-`.1399`, claimed by the orchestrator's brief. Authored:
//     `.1200`-`.1350`, 151 rows in eleven act blocks, no gaps. Nothing outside
//     the block. The ledger line is the orchestrator's to write.
//  3. HEADWORDS. Every non-sentence row of the theme was listed from Postgres
//     (97 headwords: à ta place, tu devrais, il faudrait, je voulais…). The
//     seven vocab chunks authored here (j'aurais aimé, j'aurais voulu,
//     j'aurais préféré, je n'aurais jamais dû, tu aurais dû, tu aurais pu,
//     vous auriez pu) exist NOWHERE in the seed or the database, at any level
//     or theme. Every other non-sentence row is a conjugation or grammar card,
//     which the flashcard hub does not deal as a vocab pair.
//  4. REUSED ROWS. B1 and B2 wave 1 are in the seed, so `src()` resolves them:
//     lesson 10's recognition rows (si j'avais su…), lesson 34's « L’incendie
//     aurait fait deux blessés », lesson 8's « Selon la police, le suspect
//     serait en fuite », lesson 25 in B2's « Le feu serait parti d'un camion ».
//  5. verbCheck is NOT set on the conjugation cards: the conjugator keys for
//     the conditionnel passé and the futur antérieur have not been used by any
//     published row, so the publish gate is left unasked rather than guessed.
//  6. RESPELLINGS SPELLED FOR THE NASAL CHECKER: « semaine » suh-MENN,
//     « téléphone » tay-lay-FONN, « personne » pehr-SONN. No U+203F anywhere.
//  7. APOSTROPHES. Rows and texts use the straight ' as the seed mostly does;
//     the reused lesson 10 and lesson 34 rows carry ’ and are printed as they
//     are. The one `scenario` uses ’ only and embeds no corpus row.
//  8. FACTS. Every news item (Geneva fire, arrests, the club offer) is
//     invented and presented inside an invented bulletin; no real person or
//     organisation is quoted.
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
  id: 'b2.02',
  seq: 2,
  title: 'The Past Conditional',
  sub: 'Le conditionnel passé',
  canDo: 'Can form the past conditional and use it to express regret, make a reproach diplomatically, state the unreal result of a past situation, soften a request and report a past event without vouching for it, telling it apart from the present conditional, the passé composé and the futur antérieur',
  prereqUnitIds: ['b1.08', 'b1.09', 'b1.10', 'b1.34'],
} as const;

export const LESSON_ID = 'b2.02.l1';
export const THEME = 'conseils-et-suggestions';
export const LEVEL = 'b2' as const;

/** ONE block. Everything below 1200 at b1 is lesson 9 in B1 or published. */
export const ID_RANGES = [[1200, 1399]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS (French, by trail position)
 * ══════════════════════════════════════════════════════════════════════════ */

export const COND_UNIT = 'b1.08';
export const POLI_UNIT = 'b1.09';
export const SI_UNIT = 'b1.10';
export const MEDIAS_UNIT = 'b1.34';
export const PQP_UNIT = 'b2.01';
export const SI_PASSE_UNIT = 'b2.03';
export const FUT_ANT_UNIT = 'b2.07';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const COND_REF = refFr(COND_UNIT);
export const POLI_REF = refFr(POLI_UNIT);
export const SI_REF = refFr(SI_UNIT);
export const MEDIAS_REF = refFr(MEDIAS_UNIT);
export const PQP_REF = refFr(PQP_UNIT);
export const SI_PASSE_REF = refFr(SI_PASSE_UNIT);
export const FUT_ANT_REF = refFr(FUT_ANT_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B108_REFRAME, REFRAME_EN as B108_REFRAME_EN } from '../b1/conditionnel-present-corpus.ts';
export { REFRAME as B109_REFRAME, REFRAME_EN as B109_REFRAME_EN } from '../b1/politesse-corpus.ts';
export { REFRAME as B110_REFRAME, REFRAME_EN as B110_REFRAME_EN } from '../b1/si-clauses-corpus.ts';
export { REFRAME as B134_REFRAME, REFRAME_EN as B134_REFRAME_EN } from '../b1/medias-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE PAS EN ARRIÈRE, continued. Lesson 8 in B1 taught the conditional as
 *  one step back from the real (« le recul »). The conditionnel passé takes
 *  the same step, standing on a moment that is over: a regret, a reproach,
 *  an imagined outcome, a softened request, a reported event all look at a
 *  finished past from one pace away. Visually: the road behind you, and the
 *  branch you did not take.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Le conditionnel passé, c’est le même pas en arrière, posé sur un moment déjà passé.';
export const REFRAME_EN = 'The past conditional is the same step back, taken on a moment that is already over.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Le conditionnel passé, c’est le temps du regret.',
    why: 'False for three of the five jobs: « L’incendie aurait fait deux blessés » regrets nothing, « j’aurais voulu vous demander un renseignement » is a request for NOW, and « sans ton aide, je n’aurais jamais réussi » is gratitude. Regret is act 4, not the lesson.',
  },
  {
    text: 'Ce qui n’est pas arrivé.',
    why: 'False in act 10: the fire reportedly caused two injuries, and it may well have. The journalistic use says « not vouched for », not « did not happen ». Also false for the polite past of act 9.',
  },
  {
    text: 'Avoir ou être au conditionnel, plus le participe.',
    why: 'True of the form and silent about every use. It is act 2, and exactly the right size for act 2.',
  },
  {
    text: 'Le conditionnel passé, c’est le si du passé.',
    why: 'False and expensive: « tu aurais dû me prévenir » has no si, and the si side of the past pair takes the plus-que-parfait, never this form (« si j’aurais su » is act 8’s error). The pair is lesson 3 in B2.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-27, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [] as string[],
  act2: [] as string[],
  act3: [
    'fr.b1.projets-et-futur.713',              // Tu devrais prendre rendez-vous cette semaine.  (lesson 8 in B1)
  ],
  act4: [] as string[],
  act5: [] as string[],
  act6: [] as string[],
  act7: [] as string[],
  act8: [
    'fr.b1.projets-et-futur.1352',             // Si j’avais su, j’aurais pris un autre train.  (lesson 10 in B1, no voiceflash)
    'fr.b1.projets-et-futur.1353',             // Si tu m’avais prévenu, je serais venu t’aider.  (lesson 10 in B1, no voiceflash)
    'fr.b1.projets-et-futur.1357',             // Si j’avais écouté ma sœur, je n’aurais pas signé ce contrat.  (lesson 10, no voiceflash)
    'fr.b1.projets-et-futur.1209',             // Si nous avions su, nous aurions réservé plus tôt.  (lesson 10 in B1)
  ],
  act9: [
    'fr.b1.conseils-et-suggestions.1091',      // je voulais  (lesson 9 in B1)
  ],
  act10: [
    'fr.b1.journalisme.1093',                  // L’incendie aurait fait deux blessés.  (lesson 34 in B1)
    'fr.b2.strategies-de-comprehension.1688',  // Le feu serait parti d'un camion.  (lesson 25 in B2)
    'fr.b1.projets-et-futur.762',              // Selon la police, le suspect serait en fuite.  (lesson 8 in B1)
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. None here. */
export const NOT_DECK_ABLE: string[] = [];

/** Imports with NO voiceflash: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.b1.projets-et-futur.1352',
  'fr.b1.projets-et-futur.1353',
  'fr.b1.projets-et-futur.1357',
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, final stressed syllable in
 *  caps, ü for French u, nasals closed with ⁿ. The auxiliary:
 *    j'aurais zhoh-reh · tu aurais tü oh-reh · il aurait ee-loh-reh
 *    nous aurions noo-zoh-ryohⁿ · vous auriez voo-zoh-ryay
 *    je serais zhuh suh-reh · dû dü · pu pü · voulu voo-lü
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FR = ['flashcard', 'review'] as Item['drills'];

const GP = ['conditionnel-passe'];

const sent = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR, gp: string[] = GP): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['conditionnel-passe', ...tags], drills, version: 1, grammarPoints: gp,
});

/** A fixed opener, dealt by the hub as a vocab pair (headwords checked, §A.3). */
const chunk = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['conditionnel-passe', ...tags], drills, version: 1, grammarPoints: GP,
});

/** A conjugation card, front « devoir · conditionnel passé · je ». */
const conj = (n: number, fr: string, en: string, ipa: string, respell: string, inf: string, p: string, tags: string[], tense = 'conditionnel passé', drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['conditionnel-passe', ...tags], drills, version: 1,
  cardType: 'conjugation', prompt: `${inf} · ${tense} · ${p}`,
  grammarPoints: [tense === 'futur antérieur' ? 'futur-anterieur' : 'conditionnel-passe'],
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (n: number, prompt: string, fr: string, en: string, ipa: string, respell: string, tags: string[]): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['conditionnel-passe', 'regle', ...tags], drills: FR, version: 1,
  cardType: 'grammar', prompt, grammarPoints: GP,
});

/* ── ACT 1 · CE QUI AURAIT PU SE PASSER ─────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1200, 'Tu devrais me prévenir.', 'You should let me know.', '/ty də.vʁɛ mə pʁe.və.niʁ/', 'tü duh-vreh muh pray-vuh-NEER', ['present', 'devant']),
  sent(1201, 'Tu aurais pu me prévenir.', 'You could have let me know.', '/ty o.ʁɛ py mə pʁe.və.niʁ/', 'tü oh-reh pü muh pray-vuh-NEER', ['reproche', 'derriere'], FCVDR),
  sent(1202, "J'aurais dû t'écrire vendredi.", 'I should have written to you on Friday.', '/ʒo.ʁɛ dy te.kʁiʁ vɑ̃.dʁə.di/', 'zhoh-reh dü tay-kreer vahⁿ-druh-DEE', ['regret']),
  sent(1203, "J'aurais aimé être à cette réunion.", 'I would have liked to be at that meeting.', '/ʒo.ʁɛ.zɛ.me ɛ.tʁa sɛt ʁe.y.njɔ̃/', 'zhoh-reh-zeh-may eh-trah set ray-ü-NYOHⁿ', ['regret']),
  sent(1204, "Avec un message, je serais arrivé à l'heure.", 'With a message, I would have arrived on time.', '/a.vɛ.kœ̃ me.saʒ ʒə sə.ʁɛ.za.ʁi.ve a lœʁ/', 'ah-veh-kuhⁿ meh-sazh zhuh suh-reh-zah-ree-vay ah LUHR', ['irreel', 'etre']),
  sent(1205, 'Le client aurait signé ce matin.', 'The client would have signed this morning.', '/lə kli.jɑ̃ o.ʁɛ si.ɲe sə ma.tɛ̃/', 'luh klee-yahⁿ oh-reh see-nyay suh mah-TEHⁿ', ['irreel']),
  sent(1206, 'Selon Marc, le client serait parti furieux.', 'According to Marc, the client reportedly left furious.', '/sə.lɔ̃ maʁk lə kli.jɑ̃ sə.ʁɛ paʁ.ti fy.ʁjø/', 'suh-lohⁿ mark luh klee-yahⁿ suh-reh par-tee fü-RYUH', ['ondit', 'etre']),
  sent(1207, "J'aurais voulu vous parler avant la réunion.", 'I would have liked to speak to you before the meeting.', '/ʒo.ʁɛ vu.ly vu paʁ.le a.vɑ̃ la ʁe.y.njɔ̃/', 'zhoh-reh voo-lü voo par-lay ah-vahⁿ lah ray-ü-NYOHⁿ', ['regret', 'politesse']),
  sent(1208, 'Il aurait fallu changer la date plus tôt.', 'The date should have been changed earlier.', '/i.lo.ʁɛ fa.ly ʃɑ̃.ʒe la dat ply to/', 'ee-loh-reh fah-lü shahⁿ-zhay lah dat plü TOH', ['reproche']),
  sent(1209, 'Tu aurais dû me le dire.', 'You should have told me.', '/ty o.ʁɛ dy mə lə diʁ/', 'tü oh-reh dü muh luh DEER', ['reproche'], FCVDR),
  sent(1210, 'Sans ce retard, tout se serait bien passé.', 'Without that delay, everything would have gone well.', '/sɑ̃ sə ʁə.taʁ tu sə sə.ʁɛ bjɛ̃ pa.se/', 'sahⁿ suh ruh-tar too suh suh-reh byehⁿ pah-SAY', ['irreel', 'etre']),
  sent(1211, 'Nous aurions préféré un simple courriel.', 'We would have preferred a simple email.', '/nu.zo.ʁjɔ̃ pʁe.fe.ʁe œ̃ sɛ̃.plə ku.ʁjɛl/', 'noo-zoh-ryohⁿ pray-fay-ray uhⁿ sehⁿ-pluh koo-RYEL', ['regret']),
  sent(1212, "Sans ton appel, j'aurais raté l'avion.", 'Without your call, I would have missed the plane.', '/sɑ̃ tɔ̃.na.pɛl ʒo.ʁɛ ʁa.te la.vjɔ̃/', 'sahⁿ toh-nah-pel zhoh-reh rah-tay lah-VYOHⁿ', ['irreel']),
];

/* ── ACT 2 · LA FORME ───────────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  conj(1213, "j'aurais dû", 'I should have', '/ʒo.ʁɛ dy/', 'zhoh-reh DÜ', 'devoir', 'je', ['avoir'], undefined, FCVDR),
  conj(1214, 'tu aurais pu', 'you could have', '/ty o.ʁɛ py/', 'tü oh-reh PÜ', 'pouvoir', 'tu', ['avoir']),
  conj(1215, 'il aurait voulu', 'he would have liked', '/i.lo.ʁɛ vu.ly/', 'ee-loh-reh voo-LÜ', 'vouloir', 'il', ['avoir']),
  conj(1216, 'nous aurions aimé', 'we would have liked', '/nu.zo.ʁjɔ̃.zɛ.me/', 'noo-zoh-ryohⁿ-zeh-MAY', 'aimer', 'nous', ['avoir']),
  conj(1217, 'vous auriez préféré', 'you would have preferred', '/vu.zo.ʁje pʁe.fe.ʁe/', 'voo-zoh-ryay pray-fay-RAY', 'préférer', 'vous', ['avoir']),
  conj(1218, 'ils auraient fait', 'they would have done', '/il.zo.ʁɛ fɛ/', 'eel-zoh-reh FEH', 'faire', 'ils', ['avoir']),
  conj(1219, 'je serais parti', 'I would have left', '/ʒə sə.ʁɛ paʁ.ti/', 'zhuh suh-reh par-TEE', 'partir', 'je', ['etre'], undefined, FCVDR),
  conj(1220, 'elle serait venue', 'she would have come', '/ɛl sə.ʁɛ və.ny/', 'el suh-reh vuh-NÜ', 'venir', 'elle', ['etre', 'accord']),
  conj(1221, 'nous serions restés', 'we would have stayed', '/nu sə.ʁjɔ̃ ʁɛs.te/', 'noo suh-ryohⁿ res-TAY', 'rester', 'nous', ['etre', 'accord']),
  conj(1222, 'elles seraient arrivées', 'they would have arrived', '/ɛl sə.ʁɛ.ta.ʁi.ve/', 'el suh-reh-tah-ree-VAY', 'arriver', 'elles', ['etre', 'accord']),
  conj(1223, 'je me serais trompé', 'I would have made a mistake', '/ʒə mə sə.ʁɛ tʁɔ̃.pe/', 'zhuh muh suh-reh trohⁿ-PAY', 'se tromper', 'je', ['etre', 'pronominal']),
  conj(1224, 'il aurait fallu', 'it would have been necessary', '/i.lo.ʁɛ fa.ly/', 'ee-loh-reh fah-LÜ', 'falloir', 'il', ['avoir', 'impersonnel']),
  sent(1225, 'Elle serait venue avec plaisir.', 'She would have come gladly.', '/ɛl sə.ʁɛ və.ny a.vɛk plɛ.ziʁ/', 'el suh-reh vuh-nü ah-vek pleh-ZEER', ['etre', 'accord']),
  sent(1226, 'Nous serions restés plus longtemps.', 'We would have stayed longer.', '/nu sə.ʁjɔ̃ ʁɛs.te ply lɔ̃.tɑ̃/', 'noo suh-ryohⁿ res-tay plü lohⁿ-TAHⁿ', ['etre', 'accord']),
  sent(1227, 'Ils se seraient trompés de salle.', 'They would have gone to the wrong room.', '/il sə sə.ʁɛ tʁɔ̃.pe də sal/', 'eel suh suh-reh trohⁿ-pay duh SAL', ['etre', 'pronominal']),
  sent(1228, 'Je ne serais pas venu sans toi.', 'I would not have come without you.', '/ʒə nə sə.ʁɛ pa və.ny sɑ̃ twa/', 'zhuh nuh suh-reh pah vuh-nü sahⁿ TWAH', ['etre', 'negation'], FCVDR),
  sent(1229, 'Vous auriez fait la même chose.', 'You would have done the same thing.', '/vu.zo.ʁje fɛ la mɛm ʃoz/', 'voo-zoh-ryay feh lah mem SHOHZ', ['avoir']),
  sent(1230, 'Elles seraient arrivées avant midi.', 'They would have arrived before noon.', '/ɛl sə.ʁɛ.ta.ʁi.ve a.vɑ̃ mi.di/', 'el suh-reh-tah-ree-vay ah-vahⁿ mee-DEE', ['etre', 'accord'], FCVDR),
  sent(1231, 'Tu aurais pris le train de huit heures.', 'You would have taken the eight o clock train.', '/ty o.ʁɛ pʁi lə tʁɛ̃ də ɥi.tœʁ/', 'tü oh-reh pree luh trehⁿ duh wee-TUHR', ['avoir']),
];

/* ── ACT 3 · DEVANT OU DERRIÈRE ─────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1232, 'Ce soir, je resterais bien à la maison.', 'Tonight I would happily stay at home.', '/sə swaʁ ʒə ʁɛs.tə.ʁɛ bjɛ̃ a la mɛ.zɔ̃/', 'suh swar zhuh res-tuh-reh byehⁿ ah lah meh-ZOHⁿ', ['devant'], FCVR, ['conditionnel-present']),
  sent(1233, 'Hier soir, je serais bien resté à la maison.', 'Last night I would happily have stayed at home.', '/jɛʁ swaʁ ʒə sə.ʁɛ bjɛ̃ ʁɛs.te a la mɛ.zɔ̃/', 'yehr swar zhuh suh-reh byehⁿ res-tay ah lah meh-ZOHⁿ', ['derriere']),
  sent(1234, "J'aimerais voir ce film.", 'I would like to see that film.', '/ʒɛ.mə.ʁɛ vwaʁ sə film/', 'zheh-muh-reh vwar suh FEELM', ['devant'], FCVR, ['conditionnel-present']),
  sent(1235, "J'aurais aimé voir ce film.", 'I would have liked to see that film.', '/ʒo.ʁɛ.zɛ.me vwaʁ sə film/', 'zhoh-reh-zeh-may vwar suh FEELM', ['derriere', 'regret']),
  sent(1236, 'Tu devrais appeler ta sœur.', 'You should call your sister.', '/ty də.vʁɛ a.pə.le ta sœʁ/', 'tü duh-vreh ah-puh-lay tah SUHR', ['devant'], FCVR, ['conditionnel-present']),
  sent(1237, 'Tu aurais dû appeler ta sœur.', 'You should have called your sister.', '/ty o.ʁɛ dy a.pə.le ta sœʁ/', 'tü oh-reh dü ah-puh-lay tah SUHR', ['derriere', 'reproche'], FCVDR),
  sent(1238, 'Ce serait bien de partir tôt.', 'It would be good to leave early.', '/sə sə.ʁɛ bjɛ̃ də paʁ.tiʁ to/', 'suh suh-reh byehⁿ duh par-teer TOH', ['devant'], FCVR, ['conditionnel-present']),
  sent(1239, 'Ça aurait été bien de partir tôt.', 'It would have been good to leave early.', '/sa o.ʁɛ.te.te bjɛ̃ də paʁ.tiʁ to/', 'sah oh-reh-tay-tay byehⁿ duh par-teer TOH', ['derriere'], FCVDR),
  sent(1240, 'On aurait dansé toute la nuit.', 'We would have danced all night.', '/ɔ̃.no.ʁɛ dɑ̃.se tut la nɥi/', 'ohⁿ-noh-reh dahⁿ-say toot lah NWEE', ['derriere', 'irreel']),
  sent(1241, 'Le concert aurait été magnifique.', 'The concert would have been magnificent.', '/lə kɔ̃.sɛʁ o.ʁɛ.te.te ma.ɲi.fik/', 'luh kohⁿ-sehr oh-reh-tay-tay mah-nyee-FEEK', ['derriere', 'irreel']),
  sent(1242, 'À ta place, je partirais maintenant.', 'If I were you, I would leave now.', '/a ta plas ʒə paʁ.ti.ʁɛ mɛ̃t.nɑ̃/', 'ah tah plas zhuh par-tee-reh mehⁿt-NAHⁿ', ['devant'], FCVR, ['conditionnel-present']),
  sent(1243, "À ce moment-là, j'aurais dû appeler.", 'At that moment, I should have called.', '/a sə mɔ.mɑ̃ la ʒo.ʁɛ dy a.pə.le/', 'ah suh moh-mahⁿ lah zhoh-reh dü ah-puh-LAY', ['derriere', 'regret']),
  sent(1244, 'La prochaine fois, tu devrais me prévenir.', 'Next time, you should let me know.', '/la pʁɔ.ʃɛn fwa ty də.vʁɛ mə pʁe.və.niʁ/', 'lah proh-shenn fwah tü duh-vreh muh pray-vuh-NEER', ['devant'], FCVR, ['conditionnel-present']),
];

/* ── ACT 4 · LE REGRET ──────────────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  chunk(1245, "j'aurais aimé", 'I would have liked', '/ʒo.ʁɛ.zɛ.me/', 'zhoh-reh-zeh-MAY', ['regret', 'ouverture']),
  chunk(1246, "j'aurais voulu", 'I would have wanted', '/ʒo.ʁɛ vu.ly/', 'zhoh-reh voo-LÜ', ['regret', 'ouverture']),
  chunk(1247, "j'aurais préféré", 'I would have preferred', '/ʒo.ʁɛ pʁe.fe.ʁe/', 'zhoh-reh pray-fay-RAY', ['regret', 'ouverture']),
  chunk(1248, "je n'aurais jamais dû", 'I should never have', '/ʒə no.ʁɛ ʒa.mɛ dy/', 'zhuh noh-reh zhah-meh DÜ', ['regret', 'ouverture'], FCVDR),
  sent(1249, "J'aurais aimé connaître mon grand-père.", 'I would have liked to know my grandfather.', '/ʒo.ʁɛ.zɛ.me kɔ.nɛtʁ mɔ̃ ɡʁɑ̃.pɛʁ/', 'zhoh-reh-zeh-may koh-netr mohⁿ grahⁿ-PEHR', ['regret']),
  sent(1250, "J'aurais voulu faire des études de musique.", 'I would have wanted to study music.', '/ʒo.ʁɛ vu.ly fɛʁ de.ze.tyd də my.zik/', 'zhoh-reh voo-lü fehr day-zay-tüd duh mü-ZEEK', ['regret']),
  sent(1251, "J'aurais préféré rester à Lyon.", 'I would have preferred to stay in Lyon.', '/ʒo.ʁɛ pʁe.fe.ʁe ʁɛs.te a ljɔ̃/', 'zhoh-reh pray-fay-ray res-tay ah LYOHⁿ', ['regret'], FCVDR),
  sent(1252, "Je n'aurais jamais dû accepter ce poste.", 'I should never have accepted that job.', '/ʒə no.ʁɛ ʒa.mɛ dy ak.sɛp.te sə pɔst/', 'zhuh noh-reh zhah-meh dü ak-sep-tay suh POST', ['regret', 'acte'], FCVDR),
  sent(1253, 'Nous aurions aimé vous revoir avant votre départ.', 'We would have liked to see you again before you left.', '/nu.zo.ʁjɔ̃.zɛ.me vu ʁə.vwaʁ a.vɑ̃ vɔtʁ de.paʁ/', 'noo-zoh-ryohⁿ-zeh-may voo ruh-vwar ah-vahⁿ votr day-PAR', ['regret']),
  sent(1254, 'Elle aurait voulu apprendre le piano plus jeune.', 'She would have liked to learn the piano when she was younger.', '/ɛ.lo.ʁɛ vu.ly a.pʁɑ̃dʁ lə pja.no ply ʒœn/', 'eh-loh-reh voo-lü ah-prahⁿdr luh pyah-noh plü ZHUHN', ['regret']),
  sent(1255, "Avec le recul, j'aurais choisi un autre métier.", 'Looking back, I would have chosen a different job.', '/a.vɛk lə ʁə.kyl ʒo.ʁɛ ʃwa.zi œ̃.no.tʁə me.tje/', 'ah-vek luh ruh-kül zhoh-reh shwah-zee uhⁿ-noh-truh may-TYAY', ['regret']),
  sent(1256, 'Je regrette de ne pas être parti plus tôt.', 'I regret not leaving earlier.', '/ʒə ʁə.ɡʁɛt də nə pa.zɛtʁ paʁ.ti ply to/', 'zhuh ruh-gret duh nuh pah-zetr par-tee plü TOH', ['regret', 'infinitif-passe'], FCVR, ['infinitif-passe']),
  sent(1257, "J'aurais tellement aimé être là.", 'I would so much have liked to be there.', '/ʒo.ʁɛ tɛl.mɑ̃.tɛ.me ɛtʁ la/', 'zhoh-reh tel-mahⁿ-teh-may etr LAH', ['regret']),
  sent(1258, 'Ils auraient préféré une fête plus simple.', 'They would have preferred a simpler party.', '/il.zo.ʁɛ pʁe.fe.ʁe yn fɛt ply sɛ̃pl/', 'eel-zoh-reh pray-fay-ray ün fet plü SEHⁿPL', ['regret']),
  sent(1259, "Je n'aurais pas dû dire ça.", 'I should not have said that.', '/ʒə no.ʁɛ pa dy diʁ sa/', 'zhuh noh-reh pah dü deer SAH', ['regret', 'acte']),
];

/* ── ACT 5 · LE REPROCHE ────────────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  chunk(1260, 'tu aurais dû', 'you should have', '/ty o.ʁɛ dy/', 'tü oh-reh DÜ', ['reproche', 'ouverture']),
  chunk(1261, 'tu aurais pu', 'you could have', '/ty o.ʁɛ py/', 'tü oh-reh PÜ', ['reproche', 'ouverture']),
  chunk(1262, 'vous auriez pu', 'you could have (formal)', '/vu.zo.ʁje py/', 'voo-zoh-ryay PÜ', ['reproche', 'ouverture']),
  sent(1263, 'Tu aurais pu me prévenir avant de partir.', 'You could have warned me before you left.', '/ty o.ʁɛ py mə pʁe.və.niʁ a.vɑ̃ də paʁ.tiʁ/', 'tü oh-reh pü muh pray-vuh-neer ah-vahⁿ duh par-TEER', ['reproche']),
  sent(1264, 'Vous auriez dû nous consulter.', 'You should have consulted us.', '/vu.zo.ʁje dy nu kɔ̃.syl.te/', 'voo-zoh-ryay dü noo kohⁿ-sül-TAY', ['reproche', 'vous'], FCVDR),
  sent(1265, "Il aurait fallu vérifier l'adresse.", 'The address should have been checked.', '/i.lo.ʁɛ fa.ly ve.ʁi.fje la.dʁɛs/', 'ee-loh-reh fah-lü vay-ree-fyay lah-DRESS', ['reproche', 'impersonnel']),
  sent(1266, 'On aurait pu en parler avant.', 'We could have talked about it beforehand.', '/ɔ̃.no.ʁɛ py ɑ̃ paʁ.le a.vɑ̃/', 'ohⁿ-noh-reh pü ahⁿ par-lay ah-VAHⁿ', ['reproche', 'nous'], FCVDR),
  sent(1267, "J'aurais apprécié d'être tenu au courant.", 'I would have appreciated being kept informed.', '/ʒo.ʁɛ.za.pʁe.sje dɛtʁ tə.ny o ku.ʁɑ̃/', 'zhoh-reh-zah-pray-syay detr tuh-nü oh koo-RAHⁿ', ['reproche', 'diplomatie']),
  sent(1268, 'Tu aurais au moins pu répondre à mon message.', 'You could at least have answered my message.', '/ty o.ʁɛ.zo mwɛ̃ py ʁe.pɔ̃dʁ a mɔ̃ me.saʒ/', 'tü oh-reh-zoh mwehⁿ pü ray-pohⁿdr ah mohⁿ meh-SAZH', ['reproche', 'sec']),
  sent(1269, 'Il aurait été utile de nous le dire plus tôt.', 'It would have been useful to tell us earlier.', '/i.lo.ʁɛ.te.te y.til də nu lə diʁ ply to/', 'ee-loh-reh-tay-tay ü-teel duh noo luh deer plü TOH', ['reproche', 'impersonnel']),
  sent(1270, 'Vous auriez pu me le dire en face.', 'You could have told me to my face.', '/vu.zo.ʁje py mə lə diʁ ɑ̃ fas/', 'voo-zoh-ryay pü muh luh deer ahⁿ FASS', ['reproche', 'vous']),
  sent(1271, "Ce n'est pas un reproche, mais j'aurais aimé être consulté.", 'It is not a criticism, but I would have liked to be consulted.', '/sə nɛ pa.zœ̃ ʁə.pʁɔʃ mɛ ʒo.ʁɛ.zɛ.me ɛtʁ kɔ̃.syl.te/', 'suh neh pah-zuhⁿ ruh-prosh meh zhoh-reh-zeh-may etr kohⁿ-sül-TAY', ['reproche', 'diplomatie']),
  sent(1272, 'Nous aurions dû en discuter ensemble.', 'We should have discussed it together.', '/nu.zo.ʁjɔ̃ dy ɑ̃ dis.ky.te ɑ̃.sɑ̃bl/', 'noo-zoh-ryohⁿ dü ahⁿ dees-kü-tay ahⁿ-SAHⁿBL', ['reproche', 'nous']),
  sent(1273, "Tu n'aurais pas dû lire ce courriel.", 'You should not have read that email.', '/ty no.ʁɛ pa dy liʁ sə ku.ʁjɛl/', 'tü noh-reh pah dü leer suh koo-RYEL', ['reproche', 'acte']),
  sent(1274, "Peut-être aurait-il fallu prévenir l'équipe.", 'Perhaps the team should have been told.', '/pø.tɛ.tʁo.ʁɛ.til fa.ly pʁe.və.niʁ le.kip/', 'puh-teh-troh-reh-teel fah-lü pray-vuh-neer lay-KEEP', ['reproche', 'impersonnel', 'soutenu']),
];

/* ── ACT 6 · DEVOIR, POUVOIR, VOULOIR AU PASSÉ ─────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1275, 'Il a dû oublier notre rendez-vous.', 'He must have forgotten our appointment.', '/i.la dy u.bli.je nɔtʁ ʁɑ̃.de.vu/', 'ee-lah dü oo-blee-yay notr rahⁿ-day-VOO', ['modal', 'supposition'], FCVR, ['passe-compose']),
  sent(1276, 'Il aurait dû arriver à midi.', 'He should have arrived at noon.', '/i.lo.ʁɛ dy a.ʁi.ve a mi.di/', 'ee-loh-reh dü ah-ree-vay ah mee-DEE', ['modal', 'attente']),
  sent(1277, "J'ai dû partir avant la fin.", 'I had to leave before the end.', '/ʒe dy paʁ.tiʁ a.vɑ̃ la fɛ̃/', 'zhay dü par-teer ah-vahⁿ lah FEHⁿ', ['modal', 'fait'], FCVR, ['passe-compose']),
  sent(1278, "J'aurais dû partir avant la fin.", 'I should have left before the end.', '/ʒo.ʁɛ dy paʁ.tiʁ a.vɑ̃ la fɛ̃/', 'zhoh-reh dü par-teer ah-vahⁿ lah FEHⁿ', ['modal', 'regret'], FCVDR),
  sent(1279, "J'ai pu finir le rapport à temps.", 'I managed to finish the report on time.', '/ʒe py fi.niʁ lə ʁa.pɔʁ a tɑ̃/', 'zhay pü fee-neer luh rah-por ah TAHⁿ', ['modal', 'fait'], FCVR, ['passe-compose']),
  sent(1280, "J'aurais pu finir le rapport à temps.", 'I could have finished the report on time.', '/ʒo.ʁɛ py fi.niʁ lə ʁa.pɔʁ a tɑ̃/', 'zhoh-reh pü fee-neer luh rah-por ah TAHⁿ', ['modal', 'chance']),
  sent(1281, 'Tu aurais pu te blesser.', 'You could have hurt yourself.', '/ty o.ʁɛ py tə ble.se/', 'tü oh-reh pü tuh bleh-SAY', ['modal', 'danger'], FCVDR),
  sent(1282, "J'ai voulu t'appeler, mais ton téléphone était coupé.", 'I tried to call you, but your phone was off.', '/ʒe vu.ly ta.pə.le mɛ tɔ̃ te.le.fɔn e.tɛ ku.pe/', 'zhay voo-lü tah-puh-lay meh tohⁿ tay-lay-fonn ay-teh koo-PAY', ['modal', 'essai'], FCVR, ['passe-compose']),
  sent(1283, "J'aurais voulu t'appeler, mais je n'avais plus de batterie.", 'I would have liked to call you, but my battery was dead.', '/ʒo.ʁɛ vu.ly ta.pə.le mɛ ʒə na.vɛ ply də ba.tʁi/', 'zhoh-reh voo-lü tah-puh-lay meh zhuh nah-veh plü duh bah-TREE', ['modal', 'regret']),
  sent(1284, 'Le train aurait dû partir il y a vingt minutes.', 'The train should have left twenty minutes ago.', '/lə tʁɛ̃.no.ʁɛ dy paʁ.tiʁ i.lja vɛ̃ mi.nyt/', 'luh trehⁿ-noh-reh dü par-teer eel-yah vehⁿ mee-NÜT', ['modal', 'attente']),
  sent(1285, 'Elle a pu obtenir un rendez-vous rapidement.', 'She managed to get an appointment quickly.', '/ɛ.la py ɔp.tə.niʁ œ̃ ʁɑ̃.de.vu ʁa.pid.mɑ̃/', 'eh-lah pü op-tuh-neer uhⁿ rahⁿ-day-voo rah-peed-MAHⁿ', ['modal', 'fait'], FCVR, ['passe-compose']),
  sent(1286, "Elle aurait pu obtenir un rendez-vous, mais elle n'a pas appelé.", 'She could have got an appointment, but she did not call.', '/ɛ.lo.ʁɛ py ɔp.tə.niʁ œ̃ ʁɑ̃.de.vu mɛ ɛl na pa.za.pə.le/', 'eh-loh-reh pü op-tuh-neer uhⁿ rahⁿ-day-voo meh el nah pah-zah-puh-LAY', ['modal', 'chance']),
  sent(1287, 'Ils auraient dû recevoir le colis hier.', 'They should have received the parcel yesterday.', '/il.zo.ʁɛ dy ʁə.sə.vwaʁ lə kɔ.li jɛʁ/', 'eel-zoh-reh dü ruh-suh-vwar luh koh-lee YEHR', ['modal', 'attente']),
  sent(1288, 'Ça aurait pu être pire.', 'It could have been worse.', '/sa o.ʁɛ py ɛtʁ piʁ/', 'sah oh-reh pü etr PEER', ['modal', 'danger'], FCVDR),
];

/* ── ACT 7 · AURAI OU AURAIS ────────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  conj(1289, "j'aurai fini", 'I will have finished', '/ʒo.ʁe fi.ni/', 'zhoh-ray fee-NEE', 'finir', 'je', ['piege', 'futur-anterieur'], 'futur antérieur'),
  conj(1290, "j'aurais fini", 'I would have finished', '/ʒo.ʁɛ fi.ni/', 'zhoh-reh fee-NEE', 'finir', 'je', ['piege']),
  sent(1291, "Demain à midi, j'aurai fini le rapport.", 'By noon tomorrow, I will have finished the report.', '/də.mɛ̃ a mi.di ʒo.ʁe fi.ni lə ʁa.pɔʁ/', 'duh-mehⁿ ah mee-dee zhoh-ray fee-nee luh rah-POR', ['piege', 'futur-anterieur'], FCVDR, ['futur-anterieur']),
  sent(1292, "Sans cette panne, j'aurais fini le rapport.", 'Without that breakdown, I would have finished the report.', '/sɑ̃ sɛt pan ʒo.ʁɛ fi.ni lə ʁa.pɔʁ/', 'sahⁿ set pann zhoh-reh fee-nee luh rah-POR', ['piege', 'irreel'], FCVDR),
  sent(1293, "Nous aurons terminé avant l'été.", 'We will have finished before the summer.', '/nu.zo.ʁɔ̃ tɛʁ.mi.ne a.vɑ̃ le.te/', 'noo-zoh-rohⁿ tehr-mee-nay ah-vahⁿ lay-TAY', ['piege', 'futur-anterieur', 'audible'], FCVR, ['futur-anterieur']),
  sent(1294, "Nous aurions terminé avant l'été.", 'We would have finished before the summer.', '/nu.zo.ʁjɔ̃ tɛʁ.mi.ne a.vɑ̃ le.te/', 'noo-zoh-ryohⁿ tehr-mee-nay ah-vahⁿ lay-TAY', ['piege', 'audible']),
  sent(1295, 'Quand tu arriveras, je serai déjà parti.', 'When you arrive, I will already have left.', '/kɑ̃ ty a.ʁi.və.ʁa ʒə sə.ʁe de.ʒa paʁ.ti/', 'kahⁿ tü ah-ree-vuh-rah zhuh suh-ray day-zhah par-TEE', ['piege', 'futur-anterieur'], FCVR, ['futur-anterieur']),
  sent(1296, 'Sans ton appel, je serais déjà parti.', 'Without your call, I would already have left.', '/sɑ̃ tɔ̃.na.pɛl ʒə sə.ʁɛ de.ʒa paʁ.ti/', 'sahⁿ toh-nah-pel zhuh suh-reh day-zhah par-TEE', ['piege', 'irreel']),
  sent(1297, "Dès qu'elle aura reçu les clés, elle t'appellera.", 'As soon as she has received the keys, she will call you.', '/dɛ kɛ.lo.ʁa ʁə.sy le kle ɛl ta.pɛl.ʁa/', 'deh keh-loh-rah ruh-sü lay klay el tah-pel-RAH', ['piege', 'futur-anterieur'], FCVR, ['futur-anterieur']),
  sent(1298, "J'aurais dû te le dire plus tôt.", 'I should have told you earlier.', '/ʒo.ʁɛ dy tə lə diʁ ply to/', 'zhoh-reh dü tuh luh deer plü TOH', ['piege', 'regret'], FCVDR),
  sent(1299, 'Vous auriez dû recevoir un courriel.', 'You should have received an email.', '/vu.zo.ʁje dy ʁə.sə.vwaʁ œ̃ ku.ʁjɛl/', 'voo-zoh-ryay dü ruh-suh-vwar uhⁿ koo-RYEL', ['piege', 'attente']),
  rule(1300, "J'aurai dû ou j'aurais dû ?", "Pour un regret ou un reproche, c'est toujours j'aurais dû, avec un s.", "For a regret or a reproach, it is always j'aurais dû, with an s.", '/puʁ œ̃ ʁə.ɡʁɛ u œ̃ ʁə.pʁɔʃ sɛ tu.ʒuʁ ʒo.ʁɛ dy a.vɛ.kœ̃ ɛs/', 'poor uhⁿ ruh-greh oo uhⁿ ruh-prosh seh too-zhoor zhoh-reh dü ah-veh-kuhⁿ ESS', ['piege']),
];

/* ── ACT 8 · CE QUI AURAIT PU ARRIVER ───────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1301, "Sans ton aide, je n'aurais jamais réussi.", 'Without your help, I would never have succeeded.', '/sɑ̃ tɔ̃.nɛd ʒə no.ʁɛ ʒa.mɛ ʁe.y.si/', 'sahⁿ toh-ned zhuh noh-reh zhah-meh ray-ü-SEE', ['irreel', 'sans'], FCVDR),
  sent(1302, 'Avec un peu de chance, nous aurions gagné.', 'With a bit of luck, we would have won.', '/a.vɛ.kœ̃ pø də ʃɑ̃s nu.zo.ʁjɔ̃ ɡa.ɲe/', 'ah-veh-kuhⁿ puh duh shahⁿs noo-zoh-ryohⁿ gah-NYAY', ['irreel', 'avec']),
  sent(1303, "À ta place, j'aurais refusé.", 'If I had been you, I would have refused.', '/a ta plas ʒo.ʁɛ ʁə.fy.ze/', 'ah tah plas zhoh-reh ruh-fü-ZAY', ['irreel', 'place'], FCVDR),
  sent(1304, 'Dans ce cas, je serais resté chez moi.', 'In that case, I would have stayed at home.', '/dɑ̃ sə ka ʒə sə.ʁɛ ʁɛs.te ʃe mwa/', 'dahⁿ suh kah zhuh suh-reh res-tay shay MWAH', ['irreel', 'etre']),
  sent(1305, "Heureusement qu'il a freiné, sinon il y aurait eu un accident.", 'Luckily he braked, otherwise there would have been an accident.', '/œ.ʁøz.mɑ̃ ki.la fʁe.ne si.nɔ̃ i.ljo.ʁɛ.ty œ̃.nak.si.dɑ̃/', 'uh-ruhz-mahⁿ kee-lah fray-nay see-nohⁿ eel-yoh-reh-tü uhⁿ-nak-see-DAHⁿ', ['irreel', 'sinon']),
  sent(1306, 'Une minute plus tard, nous aurions raté le train.', 'One minute later, we would have missed the train.', '/yn mi.nyt ply taʁ nu.zo.ʁjɔ̃ ʁa.te lə tʁɛ̃/', 'ün mee-nüt plü tar noo-zoh-ryohⁿ rah-tay luh TREHⁿ', ['irreel', 'moment']),
  sent(1307, "Moi, je n'aurais pas accepté.", 'Me, I would not have accepted.', '/mwa ʒə no.ʁɛ pa.zak.sɛp.te/', 'mwah zhuh noh-reh pah-zak-sep-TAY', ['irreel', 'moi']),
  sent(1308, 'Sans la pluie, le match aurait eu lieu.', 'Without the rain, the match would have taken place.', '/sɑ̃ la plɥi lə matʃ o.ʁɛ.ty ljø/', 'sahⁿ lah plwee luh match oh-reh-tü LYUH', ['irreel', 'sans']),
  sent(1309, 'En partant plus tôt, tu aurais évité les bouchons.', 'By leaving earlier, you would have avoided the traffic jams.', '/ɑ̃ paʁ.tɑ̃ ply to ty o.ʁɛ.ze.vi.te le bu.ʃɔ̃/', 'ahⁿ par-tahⁿ plü toh tü oh-reh-zay-vee-tay lay boo-SHOHⁿ', ['irreel', 'gerondif']),
  sent(1310, "Il aurait suffi d'un réveil qui sonne.", 'An alarm clock that rang would have been enough.', '/i.lo.ʁɛ sy.fi dœ̃ ʁe.vɛj ki sɔn/', 'ee-loh-reh sü-fee duhⁿ ray-vey kee SONN', ['irreel']),
  sent(1311, 'Nous aurions pu tout perdre.', 'We could have lost everything.', '/nu.zo.ʁjɔ̃ py tu pɛʁdʁ/', 'noo-zoh-ryohⁿ pü too PEHRDR', ['irreel', 'danger']),
  rule(1312, "Si j'aurais su ?", "Jamais de conditionnel après si : si j'avais su, j'aurais pris un autre train.", "Never a conditional after si: si j'avais su, j'aurais pris un autre train.", '/ʒa.mɛ də kɔ̃.di.sjɔ.nɛl a.pʁɛ si si ʒa.vɛ sy ʒo.ʁɛ pʁi œ̃.notʁ tʁɛ̃/', 'zhah-meh duh kohⁿ-dee-syoh-nel ah-preh SEE | see zhah-veh SÜ | zhoh-reh pree uhⁿ-notr TREHⁿ', ['si']),
  sent(1313, 'Sans le raccourci de Kouadio, je serais encore dans les bouchons.', 'Without Kouadio’s shortcut, I would still be stuck in traffic.', '/sɑ̃ lə ʁa.kuʁ.si də kwa.djo ʒə sə.ʁɛ.zɑ̃.kɔʁ dɑ̃ le bu.ʃɔ̃/', 'sahⁿ luh rah-koor-see duh kwah-dyoh zhuh suh-reh-zahⁿ-kor dahⁿ lay boo-SHOHⁿ', ['irreel', 'sans', 'present'], FCVR, ['conditionnel-present']),
];

/* ── ACT 9 · LA POLITESSE AU PASSÉ ──────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1314, "J'aurais voulu vous demander un renseignement.", 'I wanted to ask you for some information.', '/ʒo.ʁɛ vu.ly vu də.mɑ̃.de œ̃ ʁɑ̃.sɛɲ.mɑ̃/', 'zhoh-reh voo-lü voo duh-mahⁿ-day uhⁿ rahⁿ-seny-MAHⁿ', ['politesse'], FCVDR),
  sent(1315, "J'aurais aimé savoir si la salle est libre jeudi.", 'I would like to know whether the room is free on Thursday.', '/ʒo.ʁɛ.zɛ.me sa.vwaʁ si la sal ɛ libʁ ʒø.di/', 'zhoh-reh-zeh-may sah-vwar see lah sal eh leebr zhuh-DEE', ['politesse']),
  sent(1316, "Vous n'auriez pas vu mes clés, par hasard ?", 'You would not have seen my keys, by any chance?', '/vu no.ʁje pa vy me kle paʁ a.zaʁ/', 'voo noh-ryay pah vü may klay par ah-ZAR', ['politesse', 'question']),
  sent(1317, "Tu n'aurais pas vu mon chargeur ?", 'You would not have seen my charger?', '/ty no.ʁɛ pa vy mɔ̃ ʃaʁ.ʒœʁ/', 'tü noh-reh pah vü mohⁿ shar-ZHUHR', ['politesse', 'question']),
  sent(1318, "J'aurais souhaité obtenir quelques précisions.", 'I would have wished to obtain a few details.', '/ʒo.ʁɛ swɛ.te ɔp.tə.niʁ kɛl.kə pʁe.si.zjɔ̃/', 'zhoh-reh sweh-tay op-tuh-neer kel-kuh pray-see-ZYOHⁿ', ['politesse', 'ecrit']),
  sent(1319, 'Nous aurions aimé connaître vos disponibilités.', 'We would like to know when you are available.', '/nu.zo.ʁjɔ̃.zɛ.me kɔ.nɛtʁ vo dis.pɔ.ni.bi.li.te/', 'noo-zoh-ryohⁿ-zeh-may koh-netr voh dees-poh-nee-bee-lee-TAY', ['politesse', 'ecrit']),
  sent(1320, 'Je vous aurais été reconnaissant de me répondre plus tôt.', 'I would have been grateful if you had replied sooner.', '/ʒə vu.zo.ʁɛ.ze.te ʁə.kɔ.nɛ.sɑ̃ də mə ʁe.pɔ̃dʁ ply to/', 'zhuh voo-zoh-reh-zay-tay ruh-koh-neh-sahⁿ duh muh ray-pohⁿdr plü TOH', ['politesse', 'reproche', 'ecrit']),
  sent(1321, "J'aurais eu besoin d'un renseignement.", 'I would need some information.', '/ʒo.ʁɛ.zy bə.zwɛ̃ dœ̃ ʁɑ̃.sɛɲ.mɑ̃/', 'zhoh-reh-zü buh-zwehⁿ duhⁿ rahⁿ-seny-MAHⁿ', ['politesse', 'oral']),
  sent(1322, "Excusez-moi, j'aurais une question.", 'Excuse me, I would have a question.', '/ɛk.sky.ze mwa ʒo.ʁɛ yn kɛs.tjɔ̃/', 'eks-kü-zay mwah zhoh-reh ün kes-TYOHⁿ', ['politesse', 'present'], FCVR, ['conditionnel-present']),
  sent(1323, 'Vous auriez dû recevoir ma photo la semaine dernière.', 'You should have received my photo last week.', '/vu.zo.ʁje dy ʁə.sə.vwaʁ ma fɔ.to la sə.mɛn dɛʁ.njɛʁ/', 'voo-zoh-ryay dü ruh-suh-vwar mah foh-toh lah suh-menn dehr-NYEHR', ['politesse', 'attente']),
];

/* ── ACT 10 · SELON NOS INFORMATIONS ────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1324, 'Le suspect aurait été arrêté hier soir.', 'The suspect was reportedly arrested last night.', '/lə sys.pɛ o.ʁɛ.te.te a.ʁɛ.te jɛʁ swaʁ/', 'luh süs-peh oh-reh-tay-tay ah-reh-tay yehr SWAR', ['ondit'], FCVDR),
  sent(1325, 'Selon la police, le conducteur aurait perdu le contrôle de son véhicule.', 'According to the police, the driver reportedly lost control of his vehicle.', '/sə.lɔ̃ la pɔ.lis lə kɔ̃.dyk.tœʁ o.ʁɛ pɛʁ.dy lə kɔ̃.tʁol də sɔ̃ ve.i.kyl/', 'suh-lohⁿ lah poh-lees luh kohⁿ-dük-tuhr oh-reh pehr-dü luh kohⁿ-trohl duh sohⁿ vay-ee-KÜL', ['ondit', 'source']),
  sent(1326, 'Le ministre aurait menti aux députés.', 'The minister reportedly lied to the members of parliament.', '/lə mi.nistʁ o.ʁɛ mɑ̃.ti o de.py.te/', 'luh mee-neestr oh-reh mahⁿ-tee oh day-pü-TAY', ['ondit']),
  sent(1327, 'Le voleur serait entré par la fenêtre.', 'The burglar reportedly got in through the window.', '/lə vɔ.lœʁ sə.ʁɛ.tɑ̃.tʁe paʁ la fə.nɛtʁ/', 'luh voh-luhr suh-reh-tahⁿ-tray par lah fuh-NETR', ['ondit', 'etre']),
  sent(1328, 'Plusieurs témoins auraient entendu une explosion.', 'Several witnesses reportedly heard an explosion.', '/ply.zjœʁ te.mwɛ̃ o.ʁɛ.tɑ̃.tɑ̃.dy y.nɛks.plo.zjɔ̃/', 'plü-zyuhr tay-mwehⁿ oh-reh-tahⁿ-tahⁿ-dü ü-neks-ploh-ZYOHⁿ', ['ondit']),
  sent(1329, 'La police a arrêté un suspect.', 'The police arrested a suspect.', '/la pɔ.lis a a.ʁɛ.te œ̃ sys.pɛ/', 'lah poh-lees ah ah-reh-tay uhⁿ süs-PEH', ['fait'], FCVR, ['passe-compose']),
  sent(1330, "D'après la mairie, les travaux auraient coûté deux millions.", 'According to the town hall, the works reportedly cost two million.', '/da.pʁɛ la mɛ.ʁi le tʁa.vo o.ʁɛ ku.te dø mi.ljɔ̃/', 'dah-preh lah meh-ree lay trah-voh oh-reh koo-tay duh mee-LYOHⁿ', ['ondit', 'source']),
  sent(1331, 'Le club aurait refusé une offre de dix millions.', 'The club reportedly turned down an offer of ten million.', '/lə klœb o.ʁɛ ʁə.fy.ze y.nɔfʁ də di mi.ljɔ̃/', 'luh kluhb oh-reh ruh-fü-zay ü-nofr duh dee mee-LYOHⁿ', ['ondit']),
  sent(1332, "L'entreprise aurait licencié trente salariés.", 'The company reportedly laid off thirty employees.', '/lɑ̃.tʁə.pʁiz o.ʁɛ li.sɑ̃.sje tʁɑ̃t sa.la.ʁje/', 'lahⁿ-truh-preez oh-reh lee-sahⁿ-syay trahⁿt sah-lah-RYAY', ['ondit']),
  sent(1333, 'Les deux présidents se seraient parlé au téléphone.', 'The two presidents reportedly spoke on the phone.', '/le dø pʁe.zi.dɑ̃ sə sə.ʁɛ paʁ.le o te.le.fɔn/', 'lay duh pray-zee-dahⁿ suh suh-reh par-lay oh tay-lay-FONN', ['ondit', 'pronominal']),
  sent(1334, "Aucune victime n'aurait été signalée.", 'No casualties have reportedly been reported.', '/o.kyn vik.tim no.ʁɛ.te.te si.ɲa.le/', 'oh-kün veek-teem noh-reh-tay-tay see-nyah-LAY', ['ondit', 'negation']),
  sent(1335, "L'accident a fait trois blessés.", 'The accident left three people injured.', '/lak.si.dɑ̃ a fɛ tʁwa ble.se/', 'lak-see-dahⁿ ah feh trwah bleh-SAY', ['fait'], FCVR, ['passe-compose']),
  sent(1336, 'Le chanteur aurait annulé sa tournée.', 'The singer has reportedly cancelled his tour.', '/lə ʃɑ̃.tœʁ o.ʁɛ.ta.ny.le sa tuʁ.ne/', 'luh shahⁿ-tuhr oh-reh-tah-nü-lay sah toor-NAY', ['ondit']),
  sent(1337, 'Le président a démissionné ce matin.', 'The president resigned this morning.', '/lə pʁe.zi.dɑ̃ a de.mi.sjɔ.ne sə ma.tɛ̃/', 'luh pray-zee-dahⁿ ah day-mee-syoh-nay suh mah-TEHⁿ', ['fait'], FCVR, ['passe-compose']),
  sent(1338, 'Les pompiers sont intervenus vers minuit.', 'The firefighters came out around midnight.', '/le pɔ̃.pje sɔ̃.tɛ̃.tɛʁ.və.ny vɛʁ mi.nɥi/', 'lay pohⁿ-pyay sohⁿ-tehⁿ-tehr-vuh-nü vehr mee-NWEE', ['fait'], FCVR, ['passe-compose']),
  sent(1339, 'Selon nos informations, la réunion aurait duré six heures.', 'According to our information, the meeting reportedly lasted six hours.', '/sə.lɔ̃ no.zɛ̃.fɔʁ.ma.sjɔ̃ la ʁe.y.njɔ̃ o.ʁɛ dy.ʁe si.zœʁ/', 'suh-lohⁿ noh-zehⁿ-for-mah-syohⁿ lah ray-ü-nyohⁿ oh-reh dü-ray see-ZUHR', ['ondit', 'source'], FCVDR),
];

/* ── ACT 11 · TA LETTRE ─────────────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1340, 'Je me permets de vous écrire au sujet de la fête de quartier du 14 juin.', 'I am writing to you regarding the neighbourhood party of 14 June.', '/ʒə mə pɛʁ.mɛ də vu.ze.kʁiʁ o sy.ʒɛ də la fɛt də kaʁ.tje dy ka.tɔʁz ʒɥɛ̃/', 'zhuh muh pehr-meh duh voo-zay-kreer oh sü-zheh duh lah fet duh kar-tyay dü kah-torz ZHWEHⁿ', ['lettre'], FCVR, ['present']),
  sent(1341, 'Nous aurions aimé être prévenus plus tôt.', 'We would have liked to be warned earlier.', '/nu.zo.ʁjɔ̃.zɛ.me ɛtʁ pʁe.və.ny ply to/', 'noo-zoh-ryohⁿ-zeh-may etr pray-vuh-nü plü TOH', ['lettre', 'regret', 'reproche'], FCVDR),
  sent(1342, "Il aurait suffi d'un simple appel.", 'A single phone call would have been enough.', '/i.lo.ʁɛ sy.fi dœ̃ sɛ̃.pla.pɛl/', 'ee-loh-reh sü-fee duhⁿ sehⁿ-plah-PEL', ['lettre', 'reproche']),
  sent(1343, 'Nous aurions pu trouver une autre solution ensemble.', 'We could have found another solution together.', '/nu.zo.ʁjɔ̃ py tʁu.ve y.no.tʁə sɔ.ly.sjɔ̃ ɑ̃.sɑ̃bl/', 'noo-zoh-ryohⁿ pü troo-vay ü-noh-truh soh-lü-syohⁿ ahⁿ-SAHⁿBL', ['lettre', 'reproche', 'nous']),
  sent(1344, 'Selon le gardien, la décision aurait été prise en mai.', 'According to the caretaker, the decision was reportedly taken in May.', '/sə.lɔ̃ lə ɡaʁ.djɛ̃ la de.si.zjɔ̃ o.ʁɛ.te.te pʁiz ɑ̃ mɛ/', 'suh-lohⁿ luh gar-dyehⁿ lah day-see-zyohⁿ oh-reh-tay-tay preez ahⁿ MEH', ['lettre', 'ondit'], FCVDR),
  sent(1345, 'Nous comprenons vos contraintes.', 'We understand your constraints.', '/nu kɔ̃.pʁə.nɔ̃ vo kɔ̃.tʁɛ̃t/', 'noo kohⁿ-pruh-nohⁿ voh kohⁿ-TREHⁿT', ['lettre'], FCVR, ['present']),
  sent(1346, "J'aurais voulu vous en parler de vive voix.", 'I would have liked to discuss it with you in person.', '/ʒo.ʁɛ vu.ly vu.zɑ̃ paʁ.le də viv vwa/', 'zhoh-reh voo-lü voo-zahⁿ par-lay duh veev VWAH', ['lettre', 'regret']),
  sent(1347, 'Sans cette annulation, quatre-vingts familles se seraient retrouvées au parc.', 'Without that cancellation, eighty families would have met up in the park.', '/sɑ̃ sɛ.ta.ny.la.sjɔ̃ ka.tʁə.vɛ̃ fa.mij sə sə.ʁɛ ʁə.tʁu.ve o paʁk/', 'sahⁿ seh-tah-nü-lah-syohⁿ kah-truh-vehⁿ fah-meey suh suh-reh ruh-troo-vay oh PARK', ['lettre', 'irreel', 'accord']),
  sent(1348, 'Pourriez-vous nous proposer une nouvelle date ?', 'Could you suggest a new date?', '/pu.ʁje vu nu pʁɔ.po.ze yn nu.vɛl dat/', 'poo-ryay voo noo proh-poh-zay ün noo-vel DAT', ['lettre', 'devant'], FCVR, ['conditionnel-present']),
  sent(1349, 'Je vous remercie par avance de votre réponse.', 'Thank you in advance for your reply.', '/ʒə vu ʁə.mɛʁ.si pa.ʁa.vɑ̃s də vɔtʁ ʁe.pɔ̃s/', 'zhuh voo ruh-mehr-see pah-rah-vahⁿs duh votr ray-POHⁿS', ['lettre'], FCVR, ['present']),
  sent(1350, "J'aurais apprécié un simple courriel.", 'I would have appreciated a simple email.', '/ʒo.ʁɛ.za.pʁe.sje œ̃ sɛ̃.plə ku.ʁjɛl/', 'zhoh-reh-zah-pray-syay uhⁿ sehⁿ-pluh koo-RYEL', ['lettre', 'reproche']),
];

/* ── ALL ─────────────────────────────────────────────────────────────── */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Per act, so each act's dictation names only what that act taught. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE TEXTS
 *
 *  Act 1 is the meeting text (B2 reading length). Acts 3 to 10 each end on
 *  the form inside a text of 60 to 120 words (B2-BUILD-LOG, « In a text »).
 *  Act 11 is the model the learner imitates. Word counts measured.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1. 147 words. Chloé's apology, the five jobs in one message. */
export const TEXT_LUNDI = "Montréal, lundi soir. Chloé t'envoie un long courriel. « Je te dois des excuses. J'aurais dû t'écrire vendredi, dès que le client a avancé la réunion. Je pensais que Marc l'avait fait, et je n'ai pas vérifié. Tu aurais pu me le reprocher devant toute l'équipe ce matin, et tu ne l'as pas fait : merci. Selon Marc, le client serait parti furieux, mais je n'étais pas là, alors je ne sais pas si c'est vrai. Avec un simple message, tu serais arrivé à l'heure, et il aurait peut-être signé ce matin. Il aurait fallu revoir notre façon de partager l'agenda depuis longtemps. J'aurais voulu t'en parler de vive voix, mais tu étais déjà parti. Demain, je propose qu'on appelle le client ensemble : nous pourrions lui présenter nos excuses et lui proposer une nouvelle date. » Tu relis le courriel deux fois. Tu es encore fâché, mais un peu moins.";

/** Act 3. 83 words. Behind and ahead in one message. */
export const TEXT_CONCERT = "Dakar, dimanche matin. Awa écrit à son frère : « Tu aurais dû venir hier soir. Le concert aurait été parfait pour toi : trois heures de mbalax, et toute la salle debout jusqu'à deux heures. Je sais, tu étais fatigué. Mais ce soir, il y a une deuxième date, au même endroit. Tu devrais venir, vraiment : ce serait l'occasion de rattraper ta soirée. Et la prochaine fois, tu pourrais me dire plus tôt que tu hésites. Hier, je t'aurais gardé une place au premier rang. »";

/** Act 4. 92 words. Regrets about things not done, and one about a thing done. */
export const TEXT_BLOGUE = "À quarante-cinq ans, Samuel fait le point sur son blogue. « J'aurais voulu faire des études de musique, mais mes parents voulaient un métier sûr. Je ne leur en veux pas. Avec le recul, j'aurais peut-être choisi le conservatoire, et je n'aurais pas connu mes élèves. En revanche, je n'aurais jamais dû abandonner le piano à vingt ans : ça, je le regrette vraiment. J'aurais aimé jouer avec ma fille quand elle était petite. Alors cette année, je reprends des cours, le mardi soir. Un regret, ça peut aussi servir de point de départ. »";

/** Act 5. 93 words. A reproach, dosed. */
export const TEXT_AFFICHE = "Genève, dans l'entrée d'un immeuble, une affichette : « Chers voisins, la cage d'escalier est désormais verte. Je sais que Madame Favre a voulu bien faire, et je la remercie pour son travail. J'aurais toutefois apprécié d'être consulté, comme plusieurs d'entre vous. Il aurait fallu, je crois, en parler à l'assemblée de juin : nous aurions pu choisir la couleur ensemble. Ce n'est pas un reproche, seulement une proposition pour la suite. Pour les prochains travaux, nous pourrions afficher un petit sondage ici même. Je vous remercie de votre compréhension. Bien cordialement, Paul Keller, troisième étage. »";

/** Act 6. 84 words. a dû, aurait dû, a voulu, aurait pu. */
export const TEXT_PLOMBIER = "Liège, samedi, onze heures. Léa écrit au propriétaire : « Bonjour Monsieur Lambert, le plombier devait venir ce matin à neuf heures. Il aurait dû arriver il y a deux heures, et personne n'a appelé. Il a dû oublier, ou il a eu un empêchement. J'ai voulu joindre l'entreprise, mais le numéro ne répond pas. La fuite est petite, heureusement : ça aurait pu être pire. Nous aurions pu fermer l'eau nous-mêmes, mais nous ne trouvons pas le robinet général. Pourriez-vous rappeler le plombier ? Merci d'avance. Léa »";

/** Act 7. 68 words. aurais behind, aurai ahead. */
export const TEXT_EXCUSES = "Chloé réécrit la fin de son courriel. « Encore pardon pour lundi. J'aurais dû t'écrire vendredi, et j'aurais dû vérifier que Marc l'avait fait. Pour la suite, voici ce que je propose : d'ici vendredi, j'aurai mis à jour l'agenda partagé, et chaque changement t'arrivera par message. Quand le client rappellera, nous aurons préparé une nouvelle proposition. Sans ton calme de lundi, la journée aurait été bien pire. Merci encore. »";

/** Act 8. 88 words. Conditions without si, and one sinon that is not one. */
export const TEXT_AVION = "Le soir, tu racontes ta journée à ta sœur. « Ce matin, j'ai failli rater l'avion. Sans le raccourci de Kouadio, je serais encore dans les bouchons du Plateau. Une minute plus tard, le comptoir aurait fermé et j'aurais perdu mon billet. Kouadio dit qu'en partant plus tôt, j'aurais évité tout ça. Il a raison, mais à sa place, je n'aurais rien dit : j'étais déjà assez stressé. Il aurait suffi d'un réveil qui sonne, au fond. Sinon, le vol s'est très bien passé, et j'ai même dormi un peu. »";

/** Act 9. 83 words. A polite past, and one quiet reproach. */
export const TEXT_SECRETARIAT = "Madame, j'aurais souhaité obtenir quelques précisions sur mon inscription. J'aurais aimé savoir, en particulier, si mon dossier est complet et quand je recevrai ma carte d'étudiant. Nous aurions aimé, mon frère et moi, connaître aussi les horaires de la bibliothèque pendant les vacances. Enfin, je me permets de vous signaler que j'ai envoyé ma photo le 3 septembre : vous auriez dû la recevoir la semaine dernière. Je vous serais reconnaissant de bien vouloir vérifier. Je vous remercie d'avance. Bien à vous, Yanis Haddad";

/** Act 10. 77 words. A news brief: signed facts, reported facts. */
export const TEXT_BREVE = "Genève, lundi. Un incendie s'est déclaré dimanche soir dans un immeuble du quartier des Pâquis. Les pompiers sont intervenus vers minuit et ont évacué une vingtaine d'habitants. Selon les premiers éléments de l'enquête, le feu serait parti d'une cuisine du deuxième étage. L'incendie aurait fait deux blessés légers, mais les hôpitaux n'ont pas encore confirmé ce bilan. D'après plusieurs voisins, l'alarme n'aurait pas fonctionné. La régie de l'immeuble n'a pas souhaité réagir. Une enquête a été ouverte.";

/** Act 11. 156 words. The model: Inès's letter to her neighbours. */
export const MODELE_TEXT = "Chers voisins,\n\nVous l'avez sans doute appris : la fête de quartier du 14 juin n'aura pas lieu. La mairie a retiré l'autorisation mercredi dernier. Selon le gardien du parc, la décision aurait été prise dès le mois de mai, mais personne ne nous a écrit.\n\nJe le regrette profondément. J'aurais aimé vous annoncer cette nouvelle moi-même, et plus tôt. Avec le recul, j'aurais dû appeler la mairie en mai pour vérifier notre dossier : je ne l'ai pas fait, et je m'en veux un peu.\n\nLa mairie aurait pu, elle aussi, nous prévenir. Il aurait suffi d'un simple appel. Sans cette annulation, quatre-vingts familles se seraient retrouvées au parc, et les enfants auraient eu leur spectacle de marionnettes.\n\nJe vais écrire au service des événements pour demander une nouvelle date en septembre. D'ici là, je vous propose un pique-nique libre, dimanche, au même endroit.\n\nMerci de votre patience,\nInès Martin, pour l'Association des habitants de la Croix-Rousse";

export const READING_TEXT = MODELE_TEXT;

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. WHAT THE APP CAN AND CANNOT TEST HERE
 *
 *  fold() strips accents, case, apostrophes, hyphens and punctuation.
 *    j'aurai dû / j'aurais dû      different letters, TYPEABLE (the ear cannot)
 *    venu / venue                  different letters, TYPEABLE (the ear cannot)
 *    suffi / suffit                different letters, TYPEABLE
 *    ça / ce                       different letters, TYPEABLE
 *    dû / du                       ONE STRING after fold: never the point
 * ══════════════════════════════════════════════════════════════════════════ */

export const WANTED_AND_IMPOSSIBLE: readonly { want: string; why: string }[] = [
  { want: "a listenChoose between j'aurai and j'aurais", why: 'Many speakers barely separate [e] from [ɛ] word-finally. Act 7 teaches the meaning test and the nous form, where aurons and aurions are audible.' },
  { want: 'a listenChoose between venu and venue', why: 'One sound. Agreement with être is tested in writing (act 2, round 2).' },
  { want: 'a typeIn resting on the circumflex of dû', why: 'fold() strips it, so « du » is marked right. Never the point of a question.' },
];

/** Error forms the lesson prints on purpose, only where it marks them wrong. */
export const WRONG_FORMS = [
  "j'aurai dû", "si j'aurais su", "j'aurais allé", 'elle serait venu', "je n'aurais dû pas",
  "j'aurais aimé de", 'il aurait suffit', 'nous aurions restés',
] as const;
