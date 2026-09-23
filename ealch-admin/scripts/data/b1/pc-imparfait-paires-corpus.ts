// b1.04.l1 « Passé composé ou imparfait : les paires » (DRAFT) - the authored
// corpus and the citation constants.
//
// DRAFT. Nothing here is imported, merged into seed.json or published. See
// B1-PILOT-BRIEF.md in this folder.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE SAME VERB SAYS A DIFFERENT THING IN THE TWO TENSES.
//
//     je savais        I knew                  j'ai su          I found out
//     je connaissais   I knew (her)            j'ai connu       I met / went through
//     je pouvais       I was able (open)       j'ai pu          I managed to
//                                              je n'ai pas pu   I failed to
//     je voulais       I wanted (open)         j'ai voulu       I tried / decided
//                                              je n'ai pas voulu I refused
//     je devais        I was supposed to       j'ai dû          I had to, and did
//                                              il a dû oublier  he must have forgotten
//     j'avais peur     I was scared            j'ai eu peur     I got scared
//     il était malade  he was ill              il a été malade  he fell ill / was ill (bounded)
//     il fallait       it was necessary        il a fallu       it was necessary, and done
//     je croyais que   I thought (wrongly, before finding out)
//
//   Plus: the temporal cues revisited at depth (same adverb, both tenses),
//   depuis + imparfait as RECOGNITION ONLY, and the speaker's choice (décor
//   or event, both correct).
//
//   NOBODY ELSE OWNS THIS. `savoir-connaitre-corpus.ts` (a2.14) says the
//   passé composé meaning shift is « a2.05's, at seq 16 », and guards the
//   forms out of a2.14 by name. It is NOT a2.05's: `passe-compose-*.ts` never
//   mentions it (grepped 2026-09-22). So this is the first lesson that
//   teaches it, and the a2.14 comment is wrong. Open question for Paul.
//
// QUOTED, NEVER TAUGHT:
//
//   b1.01  imparfait formation     its reframe, IMPORTED verbatim
//   b1.02  imparfait uses          its reframe, IMPORTED verbatim
//   b1.03  background vs event     its reframe, IMPORTED verbatim; it owns
//                                  the cues, this lesson revisits them
//   a2.14  savoir / connaître      its reframe, IMPORTED verbatim
//   a2.20  irregular participles   su, pu, dû, voulu, connu are its rows
//   a2.13  vouloir/pouvoir/devoir  the verbs, present tense
//
// ══════════════════════════════════════════════════════════════════════════
//  THE ID BLOCK AND THE THEME
// ══════════════════════════════════════════════════════════════════════════
//
//   fr.b1.recits-au-passe.301 - .399 allocated to b1.04 (Paul, 2026-09-22:
//   the old passe-recit NNN moves to recits-au-passe NNN+200; b1.03 takes
//   .201-.281 in the same theme). .301-.334 used.
//
//   THE THEME `recits-au-passe` ALREADY EXISTS in seed.json (« Les récits au
//   passé », levelRange a2-b2) and holds 0 items in the seed cut.
//
//   seed-checked only, DB check pending at import. seed.json holds about a
//   quarter of Postgres, so « absent from the seed » is not « absent ».
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';
import { REFRAME as A214_REFRAME_IMPORTED } from '../savoir-connaitre-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §A. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b1.04',
  seq: 4,
  /** English, because `content_units` matches it against overview.titleEn. */
  title: 'Passé Composé or Imparfait: Meaning Pairs',
  sub: 'Passé composé ou imparfait : les paires',
  canDo: 'Can choose the past tense of savoir, pouvoir, vouloir, devoir and similar verbs for the meaning intended, and use time words as cues rather than rules',
  prereqUnitIds: ['b1.03'],
} as const;

export const LESSON_ID = 'b1.04.l1';
export const LESSON_TITLE = 'Passé composé ou imparfait : les paires';
export const THEME = 'recits-au-passe';

export const ID_FIRST = 301;
export const ID_LAST = 399;
export const ID_USED_LAST = 334;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. THE REFRAME
 *
 *  About the MEANING SHIFT, so it is not a near-duplicate of b1.03's
 *  « L'imparfait pose le décor. Le passé composé fait avancer le film. »
 *  (Paul, 2026-09-22). b1.03 is about the story; this one is about the verb.
 *  The test that picks the meaning is THE_TEST, below.
 *
 *  Rejected: « À l'imparfait, un état. Au passé composé, quelque chose
 *  arrive. » (v1: too close to b1.03's décor / action), « L'imparfait laisse
 *  la porte ouverte... » (only devoir, pouvoir, vouloir).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Un seul verbe, deux temps : deux sens.';
export const REFRAME_EN = 'One verb, two tenses: two meanings.';
/** The question the reframe hands the learner, used as a drill coach line. */
export const THE_TEST = 'Un état, ou quelque chose qui arrive ?';

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. QUOTATIONS
 *
 *  b1.01, b1.02 and b1.03 were written in parallel and all three corpus files
 *  export REFRAME, so all three are IMPORTED: a quotation that cannot drift.
 *  b1.03's labels « le décor » / « l'action » are the only lens labels this
 *  lesson uses on a learner surface.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B101_REFRAME } from './imparfait-formation-corpus.ts';
export { REFRAME as B102_REFRAME } from './imparfait-usage-corpus.ts';
export { REFRAME as B103_REFRAME } from './pc-imparfait-corpus.ts';
/** Sections that print an earlier B1 lesson's reframe. */
export const B1_QUOTE_SITES = ['s11-indices', 's24-fin', 'sheet-lire'] as const;

/** a2.14's reframe, imported so it cannot drift. It is ENGLISH and it picks
 *  the verb; this lesson adds that the tense picks the meaning. */
export const A214_REFRAME = A214_REFRAME_IMPORTED;

/** B1 units have no `seq` in seed.json yet, so `unitRef` would print a raw
 *  id. They are cited by French title instead. Open question for Paul. */
export const B101_REF = 'la leçon « L\'imparfait : la formation »';
export const B102_REF = 'la leçon « L\'imparfait : les emplois »';
export const B103_REF = 'la leçon « Passé composé ou imparfait : les bases »';

/** A2 units DO have a seq. `unitRef` gives « lesson 8 in A2 », which is
 *  English; B1 learner surfaces are French, so it is re-worded here from the
 *  same resolved number rather than typed. An unresolved id comes back raw,
 *  so a typo shows up on a card and fails the guard. */
function refFr(unitId: string): string {
  const m = /^lesson (\d+) in (\w+)$/.exec(unitRef(unitId));
  if (!m) return unitId;
  return `la leçon ${m[1]} de l'${m[2]}`;
}
export const SAVOIR_CONNAITRE_UNIT = 'a2.14';
export const SAVOIR_CONNAITRE_REF = refFr('a2.14');
export const MODAUX_UNIT = 'a2.13';
export const MODAUX_REF = refFr('a2.13');
export const PARTICIPES_UNIT = 'a2.20';
export const PARTICIPES_REF = refFr('a2.20');
export const PC_UNIT = 'a2.05';
export const PC_ETRE_UNIT = 'a2.21';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. IMPORTED ROWS (seed-checked 2026-09-22, DB check pending at import)
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED: Record<string, string[]> = {
  /** a2.20's participle rows. Every one is flashcard + voiceflash + review,
   *  so they can be released AND spoken. Read here for their MEANING.
   *
   *  .604 AND .606 ARE REUSED (Paul, 2026-09-22): they are being reglossed
   *  separately. The old note follows. `fr.a2.verbes.604` « J'ai su la
   *  réponse. » glossed « I knew the answer. », and `fr.a2.verbes.606`
   *  « J'ai voulu partir. » glossed « I wanted to leave. ». Both glosses are
   *  the readings this lesson teaches against (su = found out / came up
   *  with; voulu = tried or decided). Importing them would put a card in
   *  the learner's deck that contradicts the lesson. Proposed reglosses:
   *  « I got the answer. » and « I tried to leave. ». */
  participles: [
    'fr.a2.verbes.604', // J'ai su la réponse.   (su: found / got it; being reglossed)
    'fr.a2.verbes.606', // J'ai voulu partir.    (voulu: tried; being reglossed)
    'fr.a2.verbes.605', // J'ai pu venir.        I was able to come.   (managed)
    'fr.a2.verbes.607', // J'ai dû partir.       I had to leave.       (and did)
    'fr.a2.verbes.608', // J'ai connu son frère. I knew his brother.   (bounded; gloss is borderline)
    'fr.a2.verbes.618', // J'ai été malade.      I was ill.            (bounded)
    'fr.a2.verbes.619', // J'ai eu peur.         I was frightened.     (the moment)
  ],
  /** Published sentences that already make this lesson's points. All are
   *  flashcard-bearing and none carries voiceflash. */
  sentences: [
    'fr.b1.cafe.094',              // Je ne savais pas que ce café fermait si tôt.
    'fr.a2.marche.128',            // J'ai oublié mon sac réutilisable, alors j'ai dû en acheter un.
    'fr.a1.heure-et-date.048',     // Hier, il a plu toute la journée.
    'fr.a2.heure-et-date.103',     // Il a plu pendant trois jours.
    'fr.a2.sports-et-loisirs.061', // Comme il pleuvait, nous avons annulé la randonnée.
    'fr.a2.cafe.060',              // Il a plu, donc nous sommes restés à l'intérieur.
    'fr.a2.heure-et-date.106',     // Je le connais depuis longtemps.
  ],
  /** dictation-only: no deck can serve it, so it is NAMED (term example),
   *  never released. */
  namedOnly: [
    'fr.a2.famille.012',           // Ma tante était malade, mais elle est venue au mariage quand même.
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];
export const NOT_DECK_ABLE = [...IMPORTED.namedOnly];
/** Imports that carry voiceflash, so `practice skill: 'speak'` may name them. */
export const SPEAKABLE_IMPORTS = [...IMPORTED.participles];

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. AUTHORED ROWS .301 - .334
 *
 *  Every row: fr, en, ipa, respell, level b1, theme, drills, cardType.
 *  cardType is 'gapfill' throughout: the front is the sentence with the verb
 *  gapped AND a sense cue in brackets, so the card asks for the form because
 *  of what it means (the brief's « meaning before form »), never cold.
 *
 *  RESPELL reuses seed forms where they exist: ZHAY SÜ / ZHAY DÜ / ZHAY PÜ /
 *  ZHAY koh-NÜ / ZHAY Ü PUHR (a2.20), vuh-NEER, par-TEER, YEHR, duh-PWEE,
 *  oo-blee-AY, üee-TUHR, a-PREH, luh ruh-PAH, trah-vah-YAY, sam-DEE,
 *  ahⁿ-TRAY. The seed's `LUH SHYAN` for le chien closes the nasal with a
 *  plain n; house style is SHYEHⁿ, used here.
 *
 *  NO U+203F anywhere, including IPA: liaisons are written as plain
 *  syllabification.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const row = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  prompt: string, notes: string, tags: string[], drills: Item['drills'],
): Row => ({
  id: E(n), kind: 'sentence', level: 'b1', theme: THEME,
  fr, en, ipa, respell, prompt, notes, tags, drills,
  cardType: 'gapfill', grammarPoints: ['passe-compose-imparfait'], version: 1,
});

/* ── savoir, connaître. .301-.305 ───────────────────────────────────────── */
export const SAVOIR_ROWS: Row[] = [
  row(301, "Je savais qu'elle partait.", 'I knew she was leaving.',
    '/ʒə sa.vɛ kɛl paʁ.tɛ/', 'zhuh sah-VEH kel par-TEH',
    "Je ___ qu'elle partait. (savoir · tu le savais déjà)",
    "Un état : le savoir était là avant. EN: A state; you already knew.",
    ['paire', 'savoir', 'etat'], FCVR),
  row(302, "Hier soir, j'ai su qu'elle partait.", 'Last night I found out she was leaving.',
    '/jɛʁ swaʁ ʒe sy kɛl paʁ.tɛ/', 'YEHR SWAHR · ZHAY SÜ kel par-TEH',
    "Hier soir, j'___ qu'elle partait. (savoir · tu l'as appris hier soir)",
    "Quelque chose arrive : la nouvelle. EN: The news reached you; English says found out.",
    ['paire', 'savoir', 'moment'], FCVR),
  row(303, 'Je connaissais déjà sa sœur.', 'I already knew her sister.',
    '/ʒə kɔ.nɛ.sɛ de.ʒa sa sœʁ/', 'zhuh koh-neh-SEH day-ZHAH sah SUHR',
    'Je ___ déjà sa sœur. (connaître · tu la connaissais avant)',
    "Un état : pas de rencontre dans la phrase. EN: A state; no meeting happens.",
    ['paire', 'connaitre', 'etat'], FCVR),
  row(304, "J'ai connu sa sœur à Dakar.", 'I met her sister in Dakar.',
    '/ʒe kɔ.ny sa sœʁ a da.kaʁ/', 'ZHAY koh-NÜ sah SUHR ah dah-KAR',
    "J'___ sa sœur à Dakar. (connaître · la première rencontre)",
    "Quelque chose arrive : la rencontre. EN: The meeting happens; English says met.",
    ['paire', 'connaitre', 'moment'], FCVR),
  row(305, 'Il a connu des hivers très durs.', 'He went through some very hard winters.',
    '/il a kɔ.ny de.zi.vɛʁ tʁɛ dyʁ/', 'eel ah koh-NÜ day-zee-VEHR treh DÜR',
    'Il ___ des hivers très durs. (connaître · une période finie)',
    "Une période vue en entier, et finie. EN: A whole period, now over: went through.",
    ['paire', 'connaitre', 'periode'], FCVR),
];

/* ── pouvoir, vouloir. .306-.311 ────────────────────────────────────────── */
export const MODAL_ROWS: Row[] = [
  row(306, "Je pouvais venir, mais je n'avais pas envie.", "I was able to come, but I didn't feel like it.",
    '/ʒə pu.vɛ və.niʁ mɛ ʒə na.vɛ pa ɑ̃.vi/', 'zhuh poo-VEH vuh-NEER · meh zhuh nah-VEH pah ahⁿ-VEE',
    "Je ___ venir, mais je n'avais pas envie. (pouvoir · c'était possible)",
    "je pouvais ne dit pas si tu es venu. La suite le dit. EN: The verb leaves the outcome open.",
    ['paire', 'pouvoir', 'etat'], FCVR),
  row(307, "Finalement, j'ai pu venir.", 'In the end I managed to come.',
    '/fi.nal.mɑ̃ ʒe py və.niʁ/', 'fee-nahl-MAHⁿ · ZHAY PÜ vuh-NEER',
    "Finalement, j'___ venir. (pouvoir · tu as réussi)",
    "j'ai pu = j'ai réussi. Tu es venu. EN: I managed to, and I came.",
    ['paire', 'pouvoir', 'moment'], FCVR),
  row(308, "Je n'ai pas pu venir.", "I couldn't come.",
    '/ʒə ne pa py və.niʁ/', 'zhuh nay pah PÜ vuh-NEER',
    "Je n'___ pas ___ venir. (pouvoir · ça n'a pas marché)",
    "Tu voulais ou tu as essayé, et ça n'a pas marché. EN: I failed to come.",
    ['paire', 'pouvoir', 'moment', 'negation'], FCVDR),
  row(309, "Je voulais t'appeler.", 'I wanted to call you.',
    '/ʒə vu.lɛ ta.ple/', 'zhuh voo-LEH tah-PLAY',
    "Je ___ t'appeler. (vouloir · une envie, un projet)",
    "Une envie. Souvent, on ne l'a pas fait. EN: A wish; the verb does not say you called.",
    ['paire', 'vouloir', 'etat'], FCVR),
  row(310, "J'ai voulu t'appeler, mais ton téléphone était éteint.", 'I tried to call you, but your phone was off.',
    '/ʒe vu.ly ta.ple mɛ tɔ̃ te.le.fɔn e.tɛ e.tɛ̃/', 'ZHAY voo-LÜ tah-PLAY · meh tohⁿ tay-lay-FON ay-TEH ay-TEHⁿ',
    "J'___ t'appeler, mais ton téléphone était éteint. (vouloir · tu as essayé)",
    "j'ai voulu = j'ai essayé. Tu as pris le téléphone. EN: I tried to call.",
    ['paire', 'vouloir', 'moment'], FCVR),
  row(311, "Il n'a pas voulu signer.", 'He refused to sign.',
    '/il na pa vu.ly si.ɲe/', 'eel nah pah voo-LÜ see-NYAY',
    "Il n'___ pas ___ signer. (vouloir · il a dit non)",
    "Un refus, pas une absence d'envie. EN: He refused.",
    ['paire', 'vouloir', 'moment', 'negation'], FCVR),
];

/* ── devoir. .312-.314, and the scene's pair .330-.331 ─────────────────── */
export const DEVOIR_ROWS: Row[] = [
  row(312, 'Je devais venir à la réunion.', 'I was supposed to come to the meeting.',
    '/ʒə də.vɛ və.niʁ a la ʁe.y.njɔ̃/', 'zhuh duh-VEH vuh-NEER ah lah ray-ü-NYOHⁿ',
    'Je ___ venir à la réunion. (devoir · le plan, venu ou pas)',
    "Un plan ou une obligation. Venu ? La phrase ne le dit pas. EN: Supposed to; outcome open.",
    ['paire', 'devoir', 'etat'], FCVDR),
  row(313, "J'ai dû partir à huit heures.", 'I had to leave at eight.',
    '/ʒe dy paʁ.tiʁ a ɥi.tœʁ/', 'ZHAY DÜ par-TEER ah üee-TUHR',
    "J'___ partir à huit heures. (devoir · obligé, et tu es parti)",
    "Obligation, et c'est fait. EN: I had to, and I did.",
    ['paire', 'devoir', 'moment'], FCVDR),
  row(314, 'Il a dû oublier.', 'He must have forgotten.',
    '/il a dy u.bli.je/', 'eel ah DÜ oo-blee-AY',
    'Il ___ oublier. (devoir · tu le supposes)',
    "Une supposition : tu ne l'as pas vu, mais c'est presque sûr. EN: Must have.",
    ['paire', 'devoir', 'supposition'], FCVDR),
];

/* ── avoir peur, être malade, falloir, croire, penser. .315-.322 ─────── */
export const ETAT_ROWS: Row[] = [
  row(315, "J'avais peur du chien.", 'I was scared of the dog.',
    '/ʒa.vɛ pœʁ dy ʃjɛ̃/', 'zhah-VEH PUHR dü SHYEHⁿ',
    "J'___ peur du chien. (avoir · un état qui dure)",
    "Un état qui dure. EN: I was scared, over time.",
    ['paire', 'peur', 'etat'], FCVR),
  row(316, "Quand le chien a aboyé, j'ai eu peur.", 'When the dog barked, I got scared.',
    '/kɑ̃ lə ʃjɛ̃ a a.bwa.je ʒe y pœʁ/', 'kahⁿ luh SHYEHⁿ ah ah-bwah-YAY · ZHAY Ü PUHR',
    "Quand le chien a aboyé, j'___ peur. (avoir · la peur commence)",
    "La peur commence à un moment. EN: I got scared.",
    ['paire', 'peur', 'moment'], FCVR),
  row(317, 'Ce jour-là, il était malade.', 'That day he was ill.',
    '/sə ʒuʁ.la il e.tɛ ma.lad/', 'suh zhoor-LAH · eel ay-TEH ma-LAD',
    'Ce jour-là, il ___ malade. (être · le décor du jour)',
    "L'état du jour, sans début ni fin. EN: He was ill that day.",
    ['paire', 'malade', 'etat'], FCVR),
  row(318, 'Il a été malade après le repas.', 'He fell ill after the meal.',
    '/il a e.te ma.lad a.pʁɛ lə ʁə.pa/', 'eel ah ay-TAY ma-LAD a-PREH luh ruh-PAH',
    'Il ___ malade après le repas. (être · ça commence après le repas)',
    "Il est tombé malade, ou il a été malade un temps fini. EN: He fell ill.",
    ['paire', 'malade', 'moment'], FCVR),
  row(319, 'Il fallait partir tôt.', 'We had to leave early.',
    '/il fa.lɛ paʁ.tiʁ to/', 'eel fah-LEH par-TEER TOH',
    'Il ___ partir tôt. (falloir · la règle, faite ou pas)',
    "Le besoin. Est-ce qu'on est parti tôt ? La phrase ne le dit pas. EN: It was necessary; outcome open.",
    ['paire', 'falloir', 'etat'], FCVR),
  row(320, 'Il a fallu partir tôt.', 'We had to leave early, and we did.',
    '/il a fa.ly paʁ.tiʁ to/', 'eel ah fah-LÜ par-TEER TOH',
    'Il ___ partir tôt. (falloir · et on est parti tôt)',
    "Le besoin, et c'est fait. EN: It was necessary, and it was done.",
    ['paire', 'falloir', 'moment'], FCVR),
  row(321, "Je croyais que c'était fermé.", 'I thought it was closed.',
    '/ʒə kʁwa.jɛ kə se.tɛ fɛʁ.me/', 'zhuh krwah-YEH kuh say-TEH fehr-MAY',
    "Je ___ que c'était fermé. (croire · et c'était faux)",
    "Tu le croyais avant, et c'était faux. EN: I thought so, wrongly.",
    ['croire', 'etat'], FCVDR),
  row(322, 'Je pensais que tu étais à Montréal.', 'I thought you were in Montreal.',
    '/ʒə pɑ̃.sɛ kə ty e.tɛ a mɔ̃.ʁe.al/', 'zhuh pahⁿ-SEH kuh tü ay-TEH ah mohⁿ-ray-AL',
    'Je ___ que tu étais à Montréal. (penser · et ce n\'était pas vrai)',
    "Même chose que je croyais : une idée d'avant, fausse. EN: I thought, wrongly.",
    ['penser', 'etat'], FCVR),
];

/* ── the temporal cues, revisited. .323-.327 ─────────────────────────────
 *  Each cue is shown WITH ITS COUNTEREXAMPLE (the brief): hier with both
 *  tenses, pendant + durée with a habit that brings the imparfait back.
 *  .327 is depuis + imparfait, RECOGNITION ONLY: no typeIn, no dictation, no
 *  practice line, and the task does not ask for it. */
export const SIGNAL_ROWS: Row[] = [
  row(323, 'Hier, il pleuvait.', 'Yesterday it was raining.',
    '/jɛʁ il plø.vɛ/', 'YEHR · eel pluh-VEH',
    'Hier, il ___. (pleuvoir · le décor)',
    "hier ne choisit pas le temps. Ici, la pluie est le décor. EN: Background rain.",
    ['signal', 'hier', 'etat'], FCVR),
  row(324, 'Hier, il a plu.', 'Yesterday it rained.',
    '/jɛʁ il a ply/', 'YEHR · eel ah PLÜ',
    'Hier, il ___. (pleuvoir · un fait de la journée)',
    "Même mot, autre temps : la pluie comme un fait. EN: The rain as an event.",
    ['signal', 'hier', 'moment'], FCVDR),
  row(325, 'Tous les soirs, il lisait pendant deux heures.', 'Every evening he read for two hours.',
    '/tu le swaʁ il li.zɛ pɑ̃.dɑ̃ dø.zœʁ/', 'too lay SWAHR · eel lee-ZEH pahⁿ-DAHⁿ duh ZUHR',
    'Tous les soirs, il ___ pendant deux heures. (lire · une habitude)',
    "pendant deux heures, mais une habitude : l'imparfait revient. EN: A habit wins over the cue.",
    ['signal', 'pendant', 'habitude'], FCVR),
  row(326, 'Il a lu pendant deux heures.', 'He read for two hours.',
    '/il a ly pɑ̃.dɑ̃ dø.zœʁ/', 'eel ah LÜ pahⁿ-DAHⁿ duh ZUHR',
    'Il ___ pendant deux heures. (lire · une fois, une durée finie)',
    "Une durée finie, une fois. EN: A closed length of time.",
    ['signal', 'pendant', 'moment'], FCVR),
  row(327, 'Il habitait à Québec depuis deux ans quand il a rencontré Léa.', 'He had been living in Quebec City for two years when he met Léa.',
    '/i.la.bi.tɛ a ke.bɛk də.pɥi dø.zɑ̃ kɑ̃.til a ʁɑ̃.kɔ̃.tʁe le.a/', 'ee-lah-bee-TEH ah kay-BEK duh-PWEE duh-ZAHⁿ · kahⁿ-teel ah rahⁿ-kohⁿ-TRAY lay-AH',
    'Il ___ à Québec depuis deux ans quand il a rencontré Léa. (habiter · à reconnaître)',
    "À reconnaître : un état qui durait jusqu'à un moment du passé. EN: Had been living.",
    ['signal', 'depuis', 'reconnaissance'], ['flashcard', 'review'] as Item['drills']),
];

/* ── the speaker's choice. .328-.329 ───────────────────────────────────── */
export const CHOIX_ROWS: Row[] = [
  row(328, 'Ce soir-là, il neigeait.', 'That evening it was snowing.',
    '/sə swaʁ.la il nɛ.ʒɛ/', 'suh swahr-LAH · eel neh-ZHEH',
    'Ce soir-là, il ___. (neiger · en décor)',
    "Le décor : on attend la suite. Correct. EN: Background; both versions are right.",
    ['choix', 'etat'], FCVR),
  row(329, 'Ce soir-là, il a neigé.', 'That evening it snowed.',
    '/sə swaʁ.la il a ne.ʒe/', 'suh swahr-LAH · eel ah neh-ZHAY',
    'Ce soir-là, il ___. (neiger · en action)',
    "Un fait de la soirée. Correct aussi : c'est ton choix. EN: An event; also right.",
    ['choix', 'moment'], FCVR),
];

/* ── the scene and the error-analysis lines. .330-.334 ─────────────────── */
export const SCENE_ROWS: Row[] = [
  row(330, "Je devais venir, mais j'ai dû partir.", 'I was supposed to come, but I had to leave.',
    '/ʒə də.vɛ və.niʁ mɛ ʒe dy paʁ.tiʁ/', 'zhuh duh-VEH vuh-NEER · meh ZHAY DÜ par-TEER',
    "Je ___ venir, mais j'___ partir. (devoir · le plan, puis ce qui est arrivé)",
    "Le plan à l'imparfait, ce qui est arrivé au passé composé. EN: The plan, then what happened.",
    ['scene', 'devoir'], FCVR),
  row(331, "Elle devait venir, mais elle a dû partir.", 'She was supposed to come, but she had to leave.',
    '/ɛl də.vɛ və.niʁ mɛ ɛl a dy paʁ.tiʁ/', 'el duh-VEH vuh-NEER · meh el ah DÜ par-TEER',
    "Elle ___ venir, mais elle ___ partir. (devoir · elle n'est pas venue)",
    "La phrase de la scène, au rapport. EN: The scene's sentence, reported.",
    ['scene', 'devoir'], FCVR),
  row(332, "Samedi, j'ai dû travailler.", 'On Saturday I had to work.',
    '/sam.di ʒe dy tʁa.va.je/', 'sam-DEE · ZHAY DÜ trah-vah-YAY',
    "Samedi, j'___ travailler. (devoir · et tu as travaillé)",
    "Avec je devais, ton ami peut croire que tu étais libre finalement. EN: dû says you worked.",
    ['erreur-sens', 'devoir'], FCVR),
  row(333, "Quand j'étais petit, j'avais peur des chiens.", 'When I was little, I was scared of dogs.',
    '/kɑ̃ ʒe.tɛ pə.ti ʒa.vɛ pœʁ de ʃjɛ̃/', 'kahⁿ zhay-TEH puh-TEE · zhah-VEH PUHR day SHYEHⁿ',
    "Quand j'étais petit, j'___ peur des chiens. (avoir · toute l'enfance)",
    "Un état de l'enfance, pas un moment. EN: A childhood state, not one fright.",
    ['erreur-sens', 'peur'], FCVR),
  row(334, "J'ai pu entrer.", 'I managed to get in.',
    '/ʒe py ɑ̃.tʁe/', 'ZHAY PÜ ahⁿ-TRAY',
    "J'___ entrer. (pouvoir · tu as réussi)",
    "Tu as réussi à entrer. EN: I managed to.",
    ['paire', 'pouvoir', 'moment'], FCVR),
];

export const ALL_ROWS: Row[] = [
  ...SAVOIR_ROWS, ...MODAL_ROWS, ...DEVOIR_ROWS, ...ETAT_ROWS,
  ...SIGNAL_ROWS, ...CHOIX_ROWS, ...SCENE_ROWS,
];

/** Dictée: short rows only, and never the recognition-only .127. */
export const DICTEE_IDS = ALL_ROWS.filter((r) => r.drills.includes('dictation')).map((r) => r.id);
/** Rows that `practice skill: 'speak'` may name: voiceflash-bearing. */
export const SPEAKABLE_IDS = ALL_ROWS.filter((r) => r.drills.includes('voiceflash')).map((r) => r.id);

/** Words and strings banned from every learner surface (brief house rules). */
export const BANNED_SUBSTRINGS = ['honest', '—', '‿'] as const;
