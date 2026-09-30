// b2.10.l1 « La nominalisation »: the authored corpus, the imports and the
// citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.07
// futur antérieur), under the B2 rules of B2-BUILD-LOG.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 10 of the B2 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   NOMINALISATION, BUILT AND MEASURED, ALWAYS AS A CONTRAST: the verbal
//   sentence beside the nominal phrase, same fact.
//
//     le suffixe        verb to noun: -tion / -sion / -ation / -aison, -ment,
//                       -age, -ure, -ée, -ance / -ence; each verb has its own
//                       (l'augmentation, never l'augmentement)
//     le genre          what each suffix usually gives, and the traps: la
//                       plage, la page, l'image (-age with no verb behind),
//                       le silence, le musée, le lycée
//     le nom court      zero-suffix and irregular nouns: l'achat, le refus,
//                       la vente, la baisse, le départ, le choix, and the
//                       participle nouns la prise, la mise, la venue
//     la qualité        adjective to noun: -ité, -eur (la lenteur; le bonheur
//                       and le malheur masculine), -esse, -ise, -ence / -ance,
//                       and one-offs (la précision, la force, le calme)
//     le groupe         clause to noun phrase: quand il est arrivé > à son
//                       arrivée; avant qu'il parte > avant son départ; après
//                       qu'on a signé > après la signature; parce que > en
//                       raison de; si > en cas de; depuis que > depuis
//     le mot-lien       the preposition carries the relation: en raison de,
//                       à la suite de, lors de, en vue de, malgré, faute de,
//                       dès, en cas de (suite à named as courant)
//     qui fait quoi     de and the possessive for the doer or the patient,
//                       par for the doer beside a de-patient; the ambiguous de
//                       (« la critique du ministre ») and how to lift it
//     le titre          headlines, agenda points, minutes and summaries
//     la chaîne         the limit: de la... de la..., empty verbs (procéder à,
//                       faire l'objet de), and unfolding for speech
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 22 in B2   light nominalisation, « une nominalisation par phrase
//                       suffit souvent » (reframe quoted, rows .1121 .1125
//                       .1126 reused): this lesson builds the machinery it
//                       only showed, and goes past its one-per-sentence rule
//                       to say WHEN to unfold
//     lesson 23 in B2   rewarded a nominalisation in its task; not re-taught
//     lesson 31 in B1   parce que before a clause, à cause de before a noun
//                       (reframe quoted, rule row .1258 reused)
//     lesson 32 in B1   malgré against bien que (reframe quoted)
//     lesson 18 in B1   the passive and par (reframe quoted)
//     lesson 34 in B1   headlines READ (rows .1035 .1036 .1041-.1044 reused);
//                       here they are WRITTEN
//     lesson 6 in B2    avant que + subjonctif, sidestepped by avant + nom
//     lesson 7 in B2    dès que vous aurez signé > dès la signature
//   FORWARD: lesson 11 in B2 (emphatic pronouns), named in the roundup.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked (seedPlusPacks), DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `langue-soignee` (fondations, a2-b2). Sub-theme for this lesson,
//     already set in Postgres by the orchestrator: « la nominalisation ». The
//     seed (read 2026-09-29, 20,683 items with packs) holds 344 `fr.b1` rows
//     here, 1000-1392 (lessons 21 and 25 in B1), and no `fr.b2` row.
//
//  2. ID BLOCK: `fr.b2.langue-soignee.1400`-`.1599`, assigned by the brief.
//     Authored: `.1400`-`.1581`, with four numbers left unused (.1413,
//     .1415, .1419, .1475) because the seed already carries those pairs
//     (see 3). Nothing outside the block.
//
//  3. HEADWORDS. Every planned verb-noun pair was probed in the seed before
//     authoring. Nine already exist and are REUSED BY ID instead of twinned:
//     lancer, le lancement (affaires.1100); livrer, la livraison
//     (affaires.1058); réparer, la réparation (ecologie.1076); fiable, la
//     fiabilité (journalisme.1137); vendre, la vente (affaires.1016);
//     décider, une décision (ecologie.1155); fermer, la fermeture
//     (journalisme.1035); arrêter, l'arrestation (journalisme.1038);
//     augmenter, la hausse (journalisme.1036). The twenty-one pairs authored
//     here (annuler, l'annulation; acheter, l'achat; rapide, la rapidité...)
//     have no row of that headword anywhere in the seed. Every other row is
//     a sentence, a gapfill card or a rule card, which the flashcard hub's
//     headword rule never deals.
//
//  4. REUSED ROWS. B1 (v76) and B2 lessons 1-8 and 22-26 (v77, v78) are live,
//     so `src()` resolves them. French in a trailing comment (§F).
//
//  5. RESPELLINGS. House style. Spelled for the nasal checker rather than the
//     ear: « semaines » suh-MENN, « panne » PANN, « fonctionne » fohⁿk-SYONN,
//     « stationnement » sta-syonn-MAHⁿ. No U+203F anywhere, IPA included.
//
//  6. APOSTROPHES. Corpus rows and texts use the straight ' as the seed
//     mostly does; reused rows keep theirs (journalisme.1043 carries ’). The
//     one `scenario` uses ’ only and embeds no corpus row.
//
//  7. HEAVY ROWS. Four rows are deliberately heavy nominal French (.1558,
//     .1562, .1564, .1567), shown to be unfolded. They carry `review` only:
//     never on a flashcard, never in the speak practice.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item, Register } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b2.10',
  seq: 10,
  title: 'Nominalisation',
  sub: 'La nominalisation',
  canDo: 'Can turn verbs and adjectives into nouns with the right suffix and gender, condense a clause into a noun phrase with the preposition that carries the relation and a clear doer, write headlines, agenda points, minutes and summaries in nominal style, and unfold an over-nominal text for a listener',
  prereqUnitIds: ['b1.18', 'b1.31', 'b1.32', 'b1.34', 'b2.22'],
} as const;

export const LESSON_ID = 'b2.10.l1';
export const THEME = 'langue-soignee';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[1400, 1599]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS (trail position, in French)
 * ══════════════════════════════════════════════════════════════════════════ */

export const PASSIF_UNIT = 'b1.18';
export const REGISTRES_UNIT = 'b1.25';
export const SUBORD_UNIT = 'b1.31';
export const CONCESSION_UNIT = 'b1.32';
export const MEDIAS_UNIT = 'b1.34';
export const SUBJ_IND_UNIT = 'b2.06';
export const FUT_ANT_UNIT = 'b2.07';
export const EMPHATIQUE_UNIT = 'b2.11';
export const STYLE_UNIT = 'b2.22';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const PASSIF_REF = refFr(PASSIF_UNIT);
export const REGISTRES_REF = refFr(REGISTRES_UNIT);
export const SUBORD_REF = refFr(SUBORD_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const MEDIAS_REF = refFr(MEDIAS_UNIT);
export const SUBJ_IND_REF = refFr(SUBJ_IND_UNIT);
export const FUT_ANT_REF = refFr(FUT_ANT_UNIT);
export const EMPHATIQUE_REF = refFr(EMPHATIQUE_UNIT);
export const STYLE_REF = refFr(STYLE_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B118_REFRAME, REFRAME_EN as B118_REFRAME_EN } from '../b1/voix-passive-corpus.ts';
export { REFRAME as B131_REFRAME, REFRAME_EN as B131_REFRAME_EN } from '../b1/subordination-corpus.ts';
export { REFRAME as B132_REFRAME, REFRAME_EN as B132_REFRAME_EN } from '../b1/concession-corpus.ts';
export { REFRAME as B134_REFRAME, REFRAME_EN as B134_REFRAME_EN } from '../b1/medias-corpus.ts';
export { REFRAME as B222_REFRAME, REFRAME_EN as B222_REFRAME_EN } from './style-academique-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE PLI. A clause folds into a noun: « quand le camion est arrivé »
 *  folds into « à l'arrivée du camion ». Folding is for the page, where a
 *  reader can take the fold back apart at leisure (a subject line, a
 *  headline, minutes, a summary). Unfolding is for the ear, which cannot
 *  reread. The same fact, two shapes; the reader or the listener decides.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Le verbe raconte, le nom condense : choisis selon qui te lit ou t’écoute.';
export const REFRAME_EN = 'The verb tells, the noun condenses: choose for whoever reads or hears you.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'À l’écrit, un nom ; à l’oral, un verbe.',
    why: 'False where the lesson has to hold: a written email to a friend is verbal, and a spoken news bulletin or a meeting agenda read aloud is full of nouns. The choice is about the reader or listener and the genre, not the channel alone.',
  },
  {
    text: 'Nominaliser, c’est écrire plus soutenu.',
    why: 'Act 10 is built against it: « il est procédé à la vérification » is heavier, not better. A reframe that rewards nouns in themselves drives learners into the chain the lesson corrects.',
  },
  {
    text: 'Un verbe devient un nom avec -tion.',
    why: 'A formula, and false in acts 2 to 5: le lancement, le nettoyage, la fermeture, l’arrivée, le refus, la rapidité. It is also silent on the preposition and on who does what.',
  },
  {
    text: 'Une nominalisation par phrase.',
    why: 'That is lesson 22 in B2’s measure, quoted in act 10. It is a limit, not a teaching line: it says nothing about how to fold a clause, which is most of this lesson.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-29, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [] as string[],
  act2: [
    'fr.b2.universite.1121',                   // la hausse des loyers  (lesson 22 in B2)
    'fr.b1.affaires.1100',                     // lancer, le lancement  (lesson 36 in B1)
    'fr.b1.affaires.1058',                     // livrer, la livraison, un livreur
    'fr.b1.ecologie.1076',                     // réparer, la réparation, réparable
    'fr.b1.journalisme.1035',                  // fermer, la fermeture  (lesson 34 in B1)
    'fr.b1.journalisme.1079',                  // La mairie a annoncé la fermeture du pont pour deux semaines.
  ],
  act3: [] as string[],
  act4: [
    'fr.b1.affaires.1016',                     // vendre, la vente, un vendeur, une vendeuse
    'fr.b1.journalisme.1036',                  // augmenter, la hausse ; baisser, la baisse
  ],
  act5: [
    'fr.b1.journalisme.1137',                  // fiable, la fiabilité
  ],
  act6: [
    'fr.b1.connecteurs-logiques.1258',         // Parce que devant une phrase, à cause de devant un nom.  (lesson 31 in B1, rule card, flashcard only)
    'fr.b1.projets-et-futur.1114',             // Elle nous appellera dès son arrivée.
  ],
  act7: [
    'fr.b1.connecteurs-logiques.1266',         // Le musée est fermé en raison des travaux.  (lesson 31 in B1)
    'fr.b1.connecteurs-logiques.1459',         // Il est venu malgré la neige.  (lesson 32 in B1)
    'fr.b1.strategies-de-comprehension.1219',  // En raison de la météo à l'arrivée, le départ est retardé d'une heure.
  ],
  act8: [
    'fr.b1.faits-et-procedures.1000',          // La salle a été réservée par le directeur.  (lesson 18 in B1)
    'fr.b1.ecologie.1155',                     // décider, une décision, prendre une décision
    'fr.b1.journalisme.1038',                  // arrêter, l’arrestation
  ],
  act9: [
    'fr.b1.journalisme.1041',                  // Démission du ministre des Transports
    'fr.b1.journalisme.1042',                  // Le ministre des Transports a démissionné.
    'fr.b1.journalisme.1043',                  // Fermeture de l’usine : deux cents emplois menacés
    'fr.b1.journalisme.1044',                  // Hausse des loyers à Montréal
  ],
  act10: [
    'fr.b2.universite.1125',                   // La mise en œuvre de l'amélioration de la réduction des retards est nécessaire.  (review only)
    'fr.b2.universite.1126',                   // L'université doit réduire les retards.
  ],
  act11: [
    'fr.b2.projets-et-futur.1808',             // Dès que vous aurez signé, nous lancerons l'impression.  (lesson 7 in B2)
    'fr.b2.opinions-et-avis.1940',             // Finissons avant que le gardien parte.  (lesson 6 in B2)
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [
  'fr.b2.universite.1125',                     // review only (the heavy chain)
];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  'fr.b1.connecteurs-logiques.1258',           // flashcard only (a rule card)
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sent` a sentence; `pair` a verb-noun (or adjective-noun) vocab pair;
 *  `gap` a gapfill card whose front gaps the noun and names the verb or
 *  clause it comes from; `rule` a grammar card. Every row carries fr, en,
 *  ipa and respell. Corpus respellings carry no brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];
const RECO = ['review'] as Item['drills'];

const C: Register = 'courant';
const S: Register = 'soutenu';
const GP = ['nominalisation'];

const sent = (
  n: number, reg: Register, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: reg, grammarPoints: GP, ...extra,
});

const pair = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[]): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['paire', ...tags], drills: FCVR, version: 1, register: C, grammarPoints: GP,
});

const gap = (
  n: number, reg: Register, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR,
): Row => sent(n, reg, fr, en, ipa, respell, tags, drills, { cardType: 'gapfill', prompt, notes });

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, C, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · DEUX VERSIONS, UN SEUL FAIT (.1400-.1411) ────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1400, C, "Le fournisseur a livré en retard, donc on a fermé l'entrepôt pendant deux jours.", 'The supplier delivered late, so we closed the warehouse for two days.',
    '/lə fuʁ.ni.sœʁ a li.vʁe ɑ̃ ʁə.taʁ dɔ̃k ɔ̃.na fɛʁ.me lɑ̃.tʁə.po pɑ̃.dɑ̃ dø ʒuʁ/', 'luh foor-nee-SUHR a lee-VRAY ahⁿ ruh-TAR | dohⁿk ohⁿ-na fehr-MAY lahⁿ-truh-POH | pahⁿ-dahⁿ deu ZHOOR', ['scene', 'verbal']),
  sent(1401, S, "Fermeture de l'entrepôt pendant deux jours en raison d'un retard de livraison", 'Warehouse closed for two days owing to a delivery delay',
    '/fɛʁ.mə.tyʁ də lɑ̃.tʁə.po pɑ̃.dɑ̃ dø ʒuʁ ɑ̃ ʁɛ.zɔ̃ dœ̃ ʁə.taʁ də li.vʁɛ.zɔ̃/', 'fehr-muh-TÜR duh lahⁿ-truh-POH | pahⁿ-dahⁿ deu ZHOOR | ahⁿ reh-zohⁿ duhⁿ ruh-TAR duh lee-vreh-ZOHⁿ', ['scene', 'nominal'], FCVDR),
  sent(1402, C, 'Les prix du carburant ont augmenté, et les livraisons coûtent plus cher.', 'Fuel prices have gone up, and deliveries cost more.',
    '/le pʁi dy kaʁ.by.ʁɑ̃ ɔ̃.tɔɡ.mɑ̃.te e le li.vʁɛ.zɔ̃ kut ply ʃɛʁ/', 'lay pree dü kar-bü-RAHⁿ | ohⁿ-tog-mahⁿ-TAY | ay lay lee-vreh-ZOHⁿ | koot plü SHEHR', ['lecture', 'verbal']),
  sent(1403, S, 'La hausse du carburant a alourdi le coût des livraisons.', 'The rise in fuel prices has pushed up the cost of deliveries.',
    '/la os dy kaʁ.by.ʁɑ̃ a a.luʁ.di lə ku de li.vʁɛ.zɔ̃/', 'la OHS dü kar-bü-RAHⁿ | a a-loor-DEE | luh KOO day lee-vreh-ZOHⁿ', ['lecture', 'nominal'], FCVDR),
  sent(1404, C, 'Quand le camion est arrivé, il manquait trois palettes.', 'When the lorry arrived, three pallets were missing.',
    '/kɑ̃ lə ka.mjɔ̃ ɛ.ta.ʁi.ve il mɑ̃.kɛ tʁwa pa.lɛt/', 'kahⁿ luh ka-MYOHⁿ eh-ta-ree-VAY | eel mahⁿ-KEH trwa pa-LET', ['lecture', 'verbal']),
  sent(1405, S, "À l'arrivée du camion, il manquait trois palettes.", "On the lorry's arrival, three pallets were missing.",
    '/a la.ʁi.ve dy ka.mjɔ̃ il mɑ̃.kɛ tʁwa pa.lɛt/', 'a la-ree-VAY dü ka-MYOHⁿ | eel mahⁿ-KEH trwa pa-LET', ['lecture', 'nominal'], FCVDR),
  sent(1406, C, "Depuis qu'on a signé le nouveau contrat, les délais ont raccourci.", 'Since we signed the new contract, lead times have got shorter.',
    '/də.pɥi kɔ̃.na si.ɲe lə nu.vo kɔ̃.tʁa le de.lɛ ɔ̃ ʁa.kuʁ.si/', 'duh-pwee kohⁿ-na see-NYAY | luh noo-voh kohⁿ-TRA | lay day-LEH ohⁿ ra-koor-SEE', ['lecture', 'verbal']),
  sent(1407, S, 'Depuis la signature du nouveau contrat, les délais ont raccourci.', 'Since the new contract was signed, lead times have got shorter.',
    '/də.pɥi la si.ɲa.tyʁ dy nu.vo kɔ̃.tʁa le de.lɛ ɔ̃ ʁa.kuʁ.si/', 'duh-pwee la see-nya-TÜR | dü noo-voh kohⁿ-TRA | lay day-LEH ohⁿ ra-koor-SEE', ['lecture', 'nominal']),
  sent(1408, C, "Avant que l'équipe parte en congé, il faut vider les quais.", 'Before the team goes on leave, the loading bays must be cleared.',
    '/a.vɑ̃ kə le.kip paʁ.tɑ̃ kɔ̃.ʒe il fo vi.de le kɛ/', 'a-vahⁿ kuh lay-KEEP par-tahⁿ kohⁿ-ZHAY | eel foh vee-day lay KEH', ['lecture', 'verbal']),
  sent(1409, S, "Avant le départ de l'équipe en congé, il faut vider les quais.", "Before the team's departure on leave, the loading bays must be cleared.",
    '/a.vɑ̃ lə de.paʁ də le.kip ɑ̃ kɔ̃.ʒe il fo vi.de le kɛ/', 'a-vahⁿ luh day-PAR | duh lay-KEEP ahⁿ kohⁿ-ZHAY | eel foh vee-day lay KEH', ['lecture', 'nominal'], FCVDR),
  rule(1410, REFRAME, REFRAME_EN,
    '/lə vɛʁb ʁa.kɔ̃t lə nɔ̃ kɔ̃.dɑ̃s ʃwa.zi sə.lɔ̃ ki tə li u te.kut/',
    'luh VEHRB ra-KOHⁿT | luh NOHⁿ kohⁿ-DAHⁿS | shwa-ZEE suh-lohⁿ kee tuh LEE | oo tay-KOOT',
    'Un verbe ou un nom : lequel choisir ?',
    "Le verbe raconte une action ; le nom la condense en un mot. Pense à la personne qui te lit ou qui t'écoute.",
    ['reframe']),
  sent(1411, S, "L'inventaire est reporté sur décision du directeur.", "The stocktake is postponed on the director's decision.",
    '/lɛ̃.vɑ̃.tɛʁ ɛ ʁə.pɔʁ.te syʁ de.si.zjɔ̃ dy di.ʁɛk.tœʁ/', 'lehⁿ-vahⁿ-TEHR | eh ruh-por-TAY | sür day-see-ZYOHⁿ dü dee-rehk-TUHR', ['lecture', 'nominal']),
];

/* ── ACT 2 · DU VERBE AU NOM (.1412-.1433) ────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  pair(1412, "annuler, l'annulation", 'to cancel, cancellation', '/a.ny.le la.ny.la.sjɔ̃/', 'a-nü-LAY, la-nü-la-SYOHⁿ', ['tion']),
  pair(1414, 'nettoyer, le nettoyage', 'to clean, cleaning', '/ne.twa.je lə ne.twa.jaʒ/', 'nay-twa-YAY, luh nay-twa-YAZH', ['age']),
  pair(1416, "entrer, l'entrée", 'to go in, the entrance', '/ɑ̃.tʁe lɑ̃.tʁe/', 'ahⁿ-TRAY, lahⁿ-TRAY', ['ee']),
  pair(1417, 'naître, la naissance', 'to be born, birth', '/nɛtʁ la nɛ.sɑ̃s/', 'NEHTR, la neh-SAHⁿS', ['ance']),
  pair(1418, "augmenter, l'augmentation", 'to increase, an increase', '/ɔɡ.mɑ̃.te lɔɡ.mɑ̃.ta.sjɔ̃/', 'og-mahⁿ-TAY, log-mahⁿ-ta-SYOHⁿ', ['tion']),
  sent(1420, C, "L'annulation du concert a déçu les abonnés.", 'The cancellation of the concert disappointed the subscribers.',
    '/la.ny.la.sjɔ̃ dy kɔ̃.sɛʁ a de.sy le.za.bɔ.ne/', 'la-nü-la-SYOHⁿ dü kohⁿ-SEHR | a day-SÜ lay-za-bo-NAY', ['tion']),
  sent(1421, C, 'Le lancement du site est prévu pour lundi.', 'The launch of the website is planned for Monday.',
    '/lə lɑ̃s.mɑ̃ dy sit ɛ pʁe.vy puʁ lœ̃.di/', 'luh lahⁿs-MAHⁿ dü SEET | eh pray-VÜ poor luhⁿ-DEE', ['ment'], FCVDR),
  sent(1422, C, 'Le nettoyage des vitres a lieu chaque vendredi.', 'The windows are cleaned every Friday.',
    '/lə ne.twa.jaʒ de vitʁ a ljø ʃak vɑ̃.dʁə.di/', 'luh nay-twa-YAZH day VEETR | a LYEU shak vahⁿ-druh-DEE', ['age']),
  sent(1423, C, 'La livraison des meubles prendra trois semaines.', 'Delivery of the furniture will take three weeks.',
    '/la li.vʁɛ.zɔ̃ de mœbl pʁɑ̃.dʁa tʁwa sə.mɛn/', 'la lee-vreh-ZOHⁿ day MUHBL | prahⁿ-DRA trwa suh-MENN', ['aison'], FCVDR),
  sent(1424, C, 'La réparation du toit coûtera cher.', 'Repairing the roof will be expensive.',
    '/la ʁe.pa.ʁa.sjɔ̃ dy twa ku.tʁa ʃɛʁ/', 'la ray-pa-ra-SYOHⁿ dü TWA | koo-TRA SHEHR', ['tion']),
  sent(1425, S, "L'augmentation des salaires entrera en vigueur en janvier.", 'The pay rise will come into force in January.',
    '/lɔɡ.mɑ̃.ta.sjɔ̃ de sa.lɛʁ ɑ̃.tʁə.ʁa ɑ̃ vi.ɡœʁ ɑ̃ ʒɑ̃.vje/', 'log-mahⁿ-ta-SYOHⁿ day sa-LEHR | ahⁿ-truh-RA ahⁿ vee-GUHR | ahⁿ zhahⁿ-VYAY', ['tion'], FCVDR),
  sent(1426, C, 'La naissance de leur fille a tout changé.', 'The birth of their daughter changed everything.',
    '/la nɛ.sɑ̃s də lœʁ fij a tu ʃɑ̃.ʒe/', 'la neh-SAHⁿS duh luhr FEEY | a too shahⁿ-ZHAY', ['ance']),
  sent(1427, C, "Le changement d'horaire a surpris tout le monde.", 'The timetable change took everyone by surprise.',
    '/lə ʃɑ̃ʒ.mɑ̃ dɔ.ʁɛʁ a syʁ.pʁi tu lə mɔ̃d/', 'luh shahⁿzh-MAHⁿ do-REHR | a sür-PREE too luh MOHⁿD', ['ment']),
  sent(1428, C, "L'inscription se fait en ligne avant le quinze mai.", 'Registration is done online before 15 May.',
    '/lɛ̃s.kʁip.sjɔ̃ sə fɛ ɑ̃ liɲ a.vɑ̃ lə kɛ̃z mɛ/', 'lehⁿs-kreep-SYOHⁿ | suh feh ahⁿ LEENY | a-vahⁿ luh kehⁿz MEH', ['tion']),
  gap(1429, C, 'Le nettoyage des bureaux commence à sept heures.', 'The offices are cleaned from seven o’clock.',
    '/lə ne.twa.jaʒ de by.ʁo kɔ.mɑ̃s a sɛ.tœʁ/', 'luh nay-twa-YAZH day bü-ROH | ko-MAHⁿS a seh-TUHR',
    'Le ___ des bureaux commence à sept heures. (nettoyer)',
    "Nettoyer, le nettoyage : -age nomme souvent une opération concrète. EN: -age often names a practical operation.",
    ['age'], FCVDR),
  gap(1430, C, 'La réparation du pont durera six mois.', 'Repairing the bridge will take six months.',
    '/la ʁe.pa.ʁa.sjɔ̃ dy pɔ̃ dy.ʁə.ʁa si mwa/', 'la ray-pa-ra-SYOHⁿ dü POHⁿ | dü-ruh-RA see MWA',
    'La ___ du pont durera six mois. (réparer)',
    'Réparer, la réparation : -ation, féminin. EN: -ation, feminine.',
    ['tion']),
  rule(1431, "Un nom d'action se construit sur le radical du verbe, avec un suffixe.", "An action noun is built on the verb's stem, with a suffix.",
    '/œ̃ nɔ̃ dak.sjɔ̃ sə kɔ̃s.tʁɥi syʁ lə ʁa.di.kal dy vɛʁb a.vɛk œ̃ sy.fiks/', 'uhⁿ NOHⁿ dak-SYOHⁿ | suh kohⁿs-TRWEE | sür luh ra-dee-KAL dü VEHRB | a-vek uhⁿ sü-FEEKS',
    "Comment fabriquer un nom à partir d'un verbe ?",
    "Le radical, puis -tion, -ment, -age, -ure ou -ée : annuler, l'annulation ; lancer, le lancement ; nettoyer, le nettoyage.",
    ['suffixe']),
  rule(1432, "Chaque verbe choisit son suffixe : on dit l'augmentation, jamais l'augmentement.", "Each verb picks its own suffix: you say l'augmentation, never l'augmentement.",
    '/ʃak vɛʁb ʃwa.zi sɔ̃ sy.fiks ɔ̃ di lɔɡ.mɑ̃.ta.sjɔ̃ ʒa.mɛ lɔɡ.mɑ̃t.mɑ̃/', 'shak VEHRB shwa-ZEE sohⁿ sü-FEEKS | ohⁿ dee log-mahⁿ-ta-SYOHⁿ | zha-MEH log-mahⁿt-MAHⁿ',
    "Augmenter donne-t-il l'augmentement ?",
    "Non. Le suffixe ne se devine pas toujours : il s'apprend avec le nom, comme le genre. Au doute, vérifie.",
    ['suffixe']),
  sent(1433, C, 'La construction du tramway a duré quatre ans.', 'Building the tramway took four years.',
    '/la kɔ̃s.tʁyk.sjɔ̃ dy tʁam.wɛ a dy.ʁe ka.tʁɑ̃/', 'la kohⁿs-trük-SYOHⁿ dü tram-WEH | a dü-RAY ka-TRAHⁿ', ['tion']),
];

/* ── ACT 3 · LE GENRE, ÉCRIT DANS LE SUFFIXE (.1434-.1448) ────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1434, C, "L'arrivée des premiers invités est prévue à dix-neuf heures.", 'The first guests are expected at seven p.m.',
    '/la.ʁi.ve de pʁə.mje.zɛ̃.vi.te ɛ pʁe.vy a di.znœ.vœʁ/', 'la-ree-VAY | day pruh-myay-zehⁿ-vee-TAY | eh pray-VÜ | a deez-nuh-VUHR', ['feminin', 'ee'], FCVDR),
  sent(1435, S, 'Le paiement doit être effectué avant la livraison.', 'Payment must be made before delivery.',
    '/lə pɛ.mɑ̃ dwa.tɛtʁ e.fɛk.tɥe a.vɑ̃ la li.vʁɛ.zɔ̃/', 'luh peh-MAHⁿ | dwa-TEHTR ay-fehk-TWAY | a-vahⁿ la lee-vreh-ZOHⁿ', ['masculin', 'ment']),
  sent(1436, C, "La plage a été fermée au public tout l'été.", 'The beach was closed to the public all summer.',
    '/la plaʒ a e.te fɛʁ.me o py.blik tu le.te/', 'la PLAZH | a ay-tay fehr-MAY oh pü-BLEEK | too lay-TAY', ['piege', 'age']),
  sent(1437, C, 'Le silence de la salle était impressionnant.', 'The silence in the hall was striking.',
    '/lə si.lɑ̃s də la sal e.tɛ ɛ̃.pʁɛ.sjɔ.nɑ̃/', 'luh see-LAHⁿS duh la SAL | ay-teh ehⁿ-preh-syo-NAHⁿ', ['piege', 'ence'], FCVDR),
  sent(1438, C, 'Le musée est fermé le mardi.', 'The museum is closed on Tuesdays.',
    '/lə my.ze ɛ fɛʁ.me lə maʁ.di/', 'luh mü-ZAY | eh fehr-MAY luh mar-DEE', ['piege', 'ee']),
  sent(1439, C, "La page d'accueil a été entièrement refaite.", 'The home page has been completely redone.',
    '/la paʒ da.kœj a e.te ɑ̃.tjɛʁ.mɑ̃ ʁə.fɛt/', 'la PAZH da-KUHY | a ay-TAY ahⁿ-tyehr-MAHⁿ ruh-FET', ['piege', 'age']),
  sent(1440, S, "Le stationnement est interdit devant l'école.", 'Parking is forbidden in front of the school.',
    '/lə sta.sjɔn.mɑ̃ ɛ.tɛ̃.tɛʁ.di də.vɑ̃ le.kɔl/', 'luh sta-syonn-MAHⁿ | eh-tehⁿ-tehr-DEE | duh-vahⁿ lay-KOL', ['masculin', 'ment']),
  sent(1441, S, 'La présence des parents est obligatoire.', 'Parents must attend.',
    '/la pʁe.zɑ̃s de pa.ʁɑ̃ ɛ.tɔ.bli.ɡa.twaʁ/', 'la pray-ZAHⁿS day pa-RAHⁿ | eh-to-blee-ga-TWAR', ['feminin', 'ence']),
  sent(1442, S, 'Le passage est réservé aux piétons.', 'The way through is for pedestrians only.',
    '/lə pa.saʒ ɛ ʁe.zɛʁ.ve o pje.tɔ̃/', 'luh pa-SAZH | eh ray-zehr-VAY oh pyay-TOHⁿ', ['masculin', 'age']),
  sent(1443, S, 'La croissance a ralenti au deuxième trimestre.', 'Growth slowed in the second quarter.',
    '/la kʁwa.sɑ̃s a ʁa.lɑ̃.ti o dø.zjɛm tʁi.mɛstʁ/', 'la krwa-SAHⁿS | a ra-lahⁿ-TEE | oh deu-ZYEM tree-MESTR', ['feminin', 'ance']),
  sent(1444, C, 'La durée du contrat est de deux ans.', 'The contract runs for two years.',
    '/la dy.ʁe dy kɔ̃.tʁa ɛ də dø.zɑ̃/', 'la dü-RAY dü kohⁿ-TRA | eh duh deu-ZAHⁿ', ['feminin', 'ee']),
  gap(1445, C, 'Le chargement des camions commence à six heures.', 'Loading the lorries starts at six.',
    '/lə ʃaʁ.ʒə.mɑ̃ de ka.mjɔ̃ kɔ.mɑ̃s a si.zœʁ/', 'luh shar-zhuh-MAHⁿ day ka-MYOHⁿ | ko-MAHⁿS a see-ZUHR',
    '___ chargement des camions commence à six heures. (le ou la ?)',
    '-ment : masculin, comme le lancement et le paiement. EN: -ment nouns are masculine.',
    ['masculin', 'ment']),
  gap(1446, S, "L'ouverture du salon est fixée au trois juin.", 'The opening of the fair is set for 3 June.',
    '/lu.vɛʁ.tyʁ dy sa.lɔ̃ ɛ fik.se o tʁwa ʒɥɛ̃/', 'loo-vehr-TÜR dü sa-LOHⁿ | eh feek-SAY | oh trwa ZHWEHⁿ',
    "L'ouverture du salon est ___ au trois juin. (fixer · accord)",
    "-ure : féminin, donc fixée. L'article l' cache le genre, l'accord le montre. EN: -ure is feminine, so the participle takes an e.",
    ['feminin', 'ure'], FCVDR),
  rule(1447, "-ment et -age donnent des noms masculins ; -tion, -ure, -ée et -ance, des noms féminins.", 'The endings -ment and -age give masculine nouns; -tion, -ure, -ée and -ance give feminine ones.',
    '/mɑ̃ e aʒ dɔn de nɔ̃ mas.ky.lɛ̃ sjɔ̃ yʁ e e ɑ̃s de nɔ̃ fe.mi.nɛ̃/', 'MAHⁿ ay AZH | donn day nohⁿ mas-kü-LEHⁿ | SYOHⁿ, ÜR, AY ay AHⁿS | day nohⁿ fay-mee-NEHⁿ',
    "Le genre d'un nom d'action se voit-il ?",
    "Oui, dans le suffixe : le lancement, le nettoyage ; la livraison, la fermeture, l'arrivée, la croissance.",
    ['genre']),
  rule(1448, "Un nom en -age qui ne vient pas d'un verbe peut être féminin : la plage, la page, l'image.", 'A noun in -age that does not come from a verb can be feminine: la plage, la page, l’image.',
    '/œ̃ nɔ̃ ɑ̃ aʒ ki nə vjɛ̃ pa dœ̃ vɛʁb pø.tɛtʁ fe.mi.nɛ̃ la plaʒ la paʒ li.maʒ/', 'uhⁿ NOHⁿ ahⁿ AZH | kee nuh vyehⁿ pa duhⁿ VEHRB | peu-TEHTR fay-mee-NEHⁿ | la PLAZH, la PAZH, lee-MAZH',
    'Un nom en -age est-il toujours masculin ?',
    "Non. Le -age d'action est masculin : le nettoyage, le passage. La plage, la page, l'image et la cage ne viennent d'aucun verbe. De même, le silence et le musée échappent à leur suffixe.",
    ['genre', 'piege']),
];

/* ── ACT 4 · LES NOMS COURTS (.1449-.1470) ────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  pair(1449, "acheter, l'achat", 'to buy, a purchase', '/aʃ.te la.ʃa/', 'ash-TAY, la-SHA', ['court']),
  pair(1450, 'partir, le départ', 'to leave, the departure', '/paʁ.tiʁ lə de.paʁ/', 'par-TEER, luh day-PAR', ['court']),
  pair(1451, 'choisir, le choix', 'to choose, the choice', '/ʃwa.ziʁ lə ʃwa/', 'shwa-ZEER, luh SHWA', ['court']),
  pair(1452, "envoyer, l'envoi", 'to send, the sending', '/ɑ̃.vwa.je lɑ̃.vwa/', 'ahⁿ-vwa-YAY, lahⁿ-VWA', ['court']),
  pair(1453, 'mettre en ligne, la mise en ligne', 'to put online, the going live', '/mɛ.tʁɑ̃ liɲ la mi.zɑ̃ liɲ/', 'meh-trahⁿ LEENY, la mee-zahⁿ LEENY', ['participe']),
  pair(1454, 'prendre en charge, la prise en charge', 'to cover, the covering (of costs)', '/pʁɑ̃.dʁɑ̃ ʃaʁʒ la pʁi.zɑ̃ ʃaʁʒ/', 'prahⁿ-drahⁿ SHARZH, la pree-zahⁿ SHARZH', ['participe']),
  pair(1455, 'perdre, la perte', 'to lose, the loss', '/pɛʁdʁ la pɛʁt/', 'PEHRDR, la PEHRT', ['court']),
  pair(1456, 'demander, la demande', 'to ask, the request', '/də.mɑ̃.de la də.mɑ̃d/', 'duh-mahⁿ-DAY, la duh-MAHⁿD', ['court']),
  sent(1457, C, "L'achat des billets se fait uniquement en ligne.", 'Tickets can only be bought online.',
    '/la.ʃa de bi.jɛ sə fɛ y.nik.mɑ̃ ɑ̃ liɲ/', 'la-SHA day bee-YEH | suh feh ü-neek-MAHⁿ ahⁿ LEENY', ['court'], FCVDR),
  sent(1458, C, 'Le refus de la banque a retardé le projet.', "The bank's refusal delayed the project.",
    '/lə ʁə.fy də la bɑ̃k a ʁə.taʁ.de lə pʁɔ.ʒɛ/', 'luh ruh-FÜ duh la BAHⁿK | a ruh-tar-DAY luh pro-ZHEH', ['court']),
  sent(1459, C, 'La vente de la maison a pris six mois.', 'Selling the house took six months.',
    '/la vɑ̃t də la mɛ.zɔ̃ a pʁi si mwa/', 'la VAHⁿT duh la meh-ZOHⁿ | a pree see MWA', ['court']),
  sent(1460, C, 'Le départ du train est retardé de vingt minutes.', "The train's departure is delayed by twenty minutes.",
    '/lə de.paʁ dy tʁɛ̃ ɛ ʁə.taʁ.de də vɛ̃ mi.nyt/', 'luh day-PAR dü TREHⁿ | eh ruh-tar-DAY | duh vehⁿ mee-NÜT', ['court'], FCVDR),
  sent(1461, S, 'Le choix du prestataire sera annoncé vendredi.', 'The choice of contractor will be announced on Friday.',
    '/lə ʃwa dy pʁɛs.ta.tɛʁ sə.ʁa a.nɔ̃.se vɑ̃.dʁə.di/', 'luh SHWA dü prehs-ta-TEHR | suh-ra a-nohⁿ-SAY vahⁿ-druh-DEE', ['court']),
  sent(1462, C, "L'envoi des colis est gratuit dès cinquante euros.", 'Shipping is free from fifty euros.',
    '/lɑ̃.vwa de kɔ.li ɛ ɡʁa.tɥi dɛ sɛ̃.kɑ̃.tø.ʁo/', 'lahⁿ-VWA day ko-LEE | eh gra-TWEE | deh sehⁿ-kahⁿ-teu-ROH', ['court']),
  sent(1463, C, 'La mise en ligne du site a eu lieu hier soir.', 'The website went live last night.',
    '/la mi.zɑ̃ liɲ dy sit a y ljø jɛʁ swaʁ/', 'la mee-zahⁿ LEENY dü SEET | a ü LYEU | yehr SWAR', ['participe'], FCVDR),
  sent(1464, S, "La prise en charge des frais est assurée par l'employeur.", 'The costs are covered by the employer.',
    '/la pʁi.zɑ̃ ʃaʁʒ de fʁɛ ɛ.ta.sy.ʁe paʁ lɑ̃.plwa.jœʁ/', 'la pree-zahⁿ SHARZH day FREH | eh-ta-sü-RAY | par lahⁿ-plwa-YUHR', ['participe']),
  sent(1465, C, 'La perte du dossier a causé beaucoup de retard.', 'Losing the file caused a lot of delay.',
    '/la pɛʁt dy do.sje a ko.ze bo.ku də ʁə.taʁ/', 'la PEHRT dü doh-SYAY | a koh-ZAY boh-koo duh ruh-TAR', ['court']),
  sent(1466, S, 'La baisse des ventes inquiète les actionnaires.', 'The fall in sales worries the shareholders.',
    '/la bɛs de vɑ̃t ɛ̃.kjɛt le.zak.sjɔ.nɛʁ/', 'la BEHS day VAHⁿT | ehⁿ-KYET lay-zak-syo-NEHR', ['court']),
  sent(1467, C, 'Le retour des beaux jours attire les touristes.', 'The return of fine weather draws the tourists.',
    '/lə ʁə.tuʁ de bo ʒuʁ a.tiʁ le tu.ʁist/', 'luh ruh-TOOR day boh ZHOOR | a-TEER lay too-REEST', ['court']),
  gap(1468, C, 'Après trois refus, elle a enfin trouvé un stage.', 'After three refusals, she finally found an internship.',
    '/a.pʁɛ tʁwa ʁə.fy ɛ.la ɑ̃.fɛ̃ tʁu.ve œ̃ staʒ/', 'a-preh trwa ruh-FÜ | eh-la ahⁿ-fehⁿ troo-VAY uhⁿ STAZH',
    'Après trois ___, elle a enfin trouvé un stage. (refuser)',
    'Refuser, le refus : le verbe sans sa terminaison. Au pluriel, refus ne change pas. EN: refus is the same in the plural.',
    ['court'], FCVDR),
  rule(1469, "Beaucoup de noms courts sont le verbe sans sa terminaison : le refus, l'achat, l'appel.", 'Many short nouns are the verb without its ending: le refus, l’achat, l’appel.',
    '/bo.ku də nɔ̃ kuʁ sɔ̃ lə vɛʁb sɑ̃ sa tɛʁ.mi.nɛ.zɔ̃ lə ʁə.fy la.ʃa la.pɛl/', 'boh-koo duh nohⁿ KOOR | sohⁿ luh VEHRB | sahⁿ sa tehr-mee-neh-ZOHⁿ | luh ruh-FÜ, la-SHA, la-PEL',
    'Refuser donne-t-il la refusation ?',
    "Non : le refus. Acheter donne l'achat, appeler l'appel, envoyer l'envoi. Ces noms courts sont souvent les plus naturels.",
    ['court']),
  rule(1470, 'Le participe donne souvent le nom : pris, la prise ; mis, la mise ; venu, la venue.', 'The participle often gives the noun: pris, la prise; mis, la mise; venu, la venue.',
    '/lə paʁ.ti.sip dɔn su.vɑ̃ lə nɔ̃ pʁi la pʁiz mi la miz və.ny la və.ny/', 'luh par-tee-SEEP donn soo-vahⁿ luh NOHⁿ | PREE, la PREEZ | MEE, la MEEZ | vuh-NÜ, la vuh-NÜ',
    "D'où vient la mise en ligne ?",
    'Du participe mis, au féminin. Même chose pour la prise (pris), la venue (venu), la vue (vu), la sortie (sorti).',
    ['participe']),
];

/* ── ACT 5 · DE L'ADJECTIF AU NOM (.1471-.1494) ───────────────────────────── */

export const ACT5_ROWS: Row[] = [
  pair(1471, 'rapide, la rapidité', 'fast, speed', '/ʁa.pid la ʁa.pi.di.te/', 'ra-PEED, la ra-pee-dee-TAY', ['qualite', 'ite']),
  pair(1472, 'précis, la précision', 'precise, precision', '/pʁe.si la pʁe.si.zjɔ̃/', 'pray-SEE, la pray-see-ZYOHⁿ', ['qualite', 'ion']),
  pair(1473, 'fort, la force', 'strong, strength', '/fɔʁ la fɔʁs/', 'FOR, la FORS', ['qualite', 'court']),
  pair(1474, 'lent, la lenteur', 'slow, slowness', '/lɑ̃ la lɑ̃.tœʁ/', 'LAHⁿ, la lahⁿ-TUHR', ['qualite', 'eur']),
  pair(1476, 'franc, la franchise', 'frank, frankness', '/fʁɑ̃ la fʁɑ̃.ʃiz/', 'FRAHⁿ, la frahⁿ-SHEEZ', ['qualite', 'ise']),
  pair(1477, 'sage, la sagesse', 'wise, wisdom', '/saʒ la sa.ʒɛs/', 'SAZH, la sa-ZHESS', ['qualite', 'esse']),
  pair(1478, 'prudent, la prudence', 'careful, caution', '/pʁy.dɑ̃ la pʁy.dɑ̃s/', 'prü-DAHⁿ, la prü-DAHⁿS', ['qualite', 'ence']),
  pair(1479, "exact, l'exactitude", 'exact, accuracy', '/ɛɡ.zakt lɛɡ.zak.ti.tyd/', 'eg-ZAKT, leg-zak-tee-TÜD', ['qualite', 'ude']),
  pair(1480, 'clair, la clarté', 'clear, clarity', '/klɛʁ la klaʁ.te/', 'KLEHR, la klar-TAY', ['qualite', 'te']),
  sent(1481, C, 'Les clients saluent la rapidité du service.', 'Customers praise the speed of the service.',
    '/le kli.jɑ̃ sa.ly la ʁa.pi.di.te dy sɛʁ.vis/', 'lay klee-YAHⁿ sa-LÜ | la ra-pee-dee-TAY dü sehr-VEES', ['qualite', 'ite'], FCVDR),
  sent(1482, S, 'La précision des chiffres rassure les investisseurs.', 'The precision of the figures reassures investors.',
    '/la pʁe.si.zjɔ̃ de ʃifʁ ʁa.syʁ le.zɛ̃.vɛs.ti.sœʁ/', 'la pray-see-ZYOHⁿ day SHEEFR | ra-SÜR lay-zehⁿ-vehs-tee-SUHR', ['qualite', 'ion']),
  sent(1483, C, "La force de ce projet, c'est son équipe.", "This project's strength is its team.",
    '/la fɔʁs də sə pʁɔ.ʒɛ sɛ sɔ̃.ne.kip/', 'la FORS duh suh pro-ZHEH | seh soh-nay-KEEP', ['qualite', 'court']),
  sent(1484, S, 'La lenteur des démarches décourage les candidats.', 'The slowness of the procedures puts applicants off.',
    '/la lɑ̃.tœʁ de de.maʁʃ de.ku.ʁaʒ le kɑ̃.di.da/', 'la lahⁿ-TUHR day day-MARSH | day-koo-RAZH lay kahⁿ-dee-DA', ['qualite', 'eur'], FCVDR),
  sent(1485, S, 'La fiabilité du matériel reste à prouver.', 'The reliability of the equipment remains to be proven.',
    '/la fja.bi.li.te dy ma.te.ʁjɛl ʁɛs.ta pʁu.ve/', 'la fya-bee-lee-TAY dü ma-tay-RYEL | res-ta proo-VAY', ['qualite', 'ite']),
  sent(1486, C, 'Sa franchise a surpris le jury.', 'Her frankness surprised the panel.',
    '/sa fʁɑ̃.ʃiz a syʁ.pʁi lə ʒy.ʁi/', 'sa frahⁿ-SHEEZ | a sür-PREE luh zhü-REE', ['qualite', 'ise']),
  sent(1487, S, "La prudence s'impose sur les routes enneigées.", 'Caution is essential on snowy roads.',
    '/la pʁy.dɑ̃s sɛ̃.poz syʁ le ʁu.tɑ̃.ne.ʒe/', 'la prü-DAHⁿS | sehⁿ-POHZ | sür lay roo-tahⁿ-nay-ZHAY', ['qualite', 'ence']),
  sent(1488, C, 'Le bonheur des enfants passe avant tout.', "The children's happiness comes first.",
    '/lə bɔ.nœʁ de.zɑ̃.fɑ̃ pa.sa.vɑ̃ tu/', 'luh bo-NUHR day-zahⁿ-FAHⁿ | pa-sa-vahⁿ TOO', ['qualite', 'eur', 'piege']),
  sent(1489, C, 'La valeur du terrain a doublé en dix ans.', 'The value of the land has doubled in ten years.',
    '/la va.lœʁ dy tɛ.ʁɛ̃ a du.ble ɑ̃ di.zɑ̃/', 'la va-LUHR dü teh-REHⁿ | a doo-BLAY ahⁿ dee-ZAHⁿ', ['qualite', 'eur', 'piege']),
  sent(1490, C, 'La clarté de ta présentation a convaincu la direction.', 'The clarity of your presentation won the management over.',
    '/la klaʁ.te də ta pʁe.zɑ̃.ta.sjɔ̃ a kɔ̃.vɛ̃.ky la di.ʁɛk.sjɔ̃/', 'la klar-TAY duh ta pray-zahⁿ-ta-SYOHⁿ | a kohⁿ-vehⁿ-KÜ | la dee-rehk-SYOHⁿ', ['qualite', 'te'], FCVDR),
  rule(1491, "Un nom en -eur tiré d'un adjectif est féminin : la lenteur, la douceur, sauf le bonheur et le malheur.", 'A noun in -eur made from an adjective is feminine: la lenteur, la douceur, except le bonheur and le malheur.',
    '/œ̃ nɔ̃ ɑ̃ œʁ ti.ʁe dœ̃.na.ʒɛk.tif ɛ fe.mi.nɛ̃ la lɑ̃.tœʁ la du.sœʁ sof lə bɔ.nœʁ e lə ma.lœʁ/', 'uhⁿ NOHⁿ ahⁿ UHR | tee-RAY duh-nazh-ek-TEEF | eh fay-mee-NEHⁿ | la lahⁿ-TUHR, la doo-SUHR | sohf luh bo-NUHR ay luh ma-LUHR',
    'La lenteur ou le lenteur ?',
    'La lenteur, la douceur, la largeur. Le bonheur et le malheur font exception. La valeur, qui vient du verbe valoir, est féminine aussi.',
    ['genre', 'eur']),
  gap(1492, C, 'Tout le monde a remarqué la précision de sa réponse.', 'Everyone noticed how precise her answer was.',
    '/tu lə mɔ̃d a ʁə.maʁ.ke la pʁe.si.zjɔ̃ də sa ʁe.pɔ̃s/', 'too luh MOHⁿD | a ruh-mar-KAY | la pray-see-ZYOHⁿ duh sa ray-POHⁿS',
    'Tout le monde a remarqué la ___ de sa réponse. (précis)',
    'Précis, la précision : -ion, comme décidé, la décision. EN: precision, not précisité.',
    ['qualite', 'ion']),
  gap(1493, C, 'La lenteur du réseau pose problème.', 'The slowness of the network is a problem.',
    '/la lɑ̃.tœʁ dy ʁe.zo poz pʁɔ.blɛm/', 'la lahⁿ-TUHR dü ray-ZOH | pohz pro-BLEM',
    'La ___ du réseau pose problème. (lent)',
    'Lent, la lenteur : -eur, féminin. EN: -eur from an adjective is feminine.',
    ['qualite', 'eur'], FCVDR),
  sent(1494, C, 'La gentillesse du personnel a été très appréciée.', "The staff's kindness was much appreciated.",
    '/la ʒɑ̃.ti.jɛs dy pɛʁ.sɔ.nɛl a e.te tʁɛ.za.pʁe.sje/', 'la zhahⁿ-tee-YESS dü pehr-so-NEL | a ay-TAY treh-za-pray-SYAY', ['qualite', 'esse']),
];

/* ── ACT 6 · UNE PROPOSITION DEVIENT UN GROUPE (.1495-.1512) ──────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1495, C, "Quand il est arrivé, tout le monde s'est levé.", 'When he arrived, everyone stood up.',
    '/kɑ̃.ti.lɛ.ta.ʁi.ve tu lə mɔ̃d sɛ lə.ve/', 'kahⁿ-tee-leh-ta-ree-VAY | too luh MOHⁿD seh luh-VAY', ['groupe', 'verbal']),
  sent(1496, S, "À son arrivée, tout le monde s'est levé.", 'On his arrival, everyone stood up.',
    '/a sɔ̃.na.ʁi.ve tu lə mɔ̃d sɛ lə.ve/', 'a soh-na-ree-VAY | too luh MOHⁿD seh luh-VAY', ['groupe', 'nominal'], FCVDR),
  sent(1497, C, "Avant qu'il parte, nous organiserons un pot.", 'Before he leaves, we will throw a small farewell party.',
    '/a.vɑ̃ kil paʁt nu.zɔʁ.ɡa.ni.zə.ʁɔ̃ œ̃ po/', 'a-vahⁿ keel PART | noo-zor-ga-nee-zuh-ROHⁿ uhⁿ POH', ['groupe', 'verbal']),
  sent(1498, S, 'Avant son départ, nous organiserons un pot.', 'Before his departure, we will throw a small farewell party.',
    '/a.vɑ̃ sɔ̃ de.paʁ nu.zɔʁ.ɡa.ni.zə.ʁɔ̃ œ̃ po/', 'a-vahⁿ sohⁿ day-PAR | noo-zor-ga-nee-zuh-ROHⁿ uhⁿ POH', ['groupe', 'nominal'], FCVDR),
  sent(1499, C, "Après qu'on a signé le contrat, les travaux ont commencé.", 'After the contract was signed, work began.',
    '/a.pʁɛ kɔ̃.na si.ɲe lə kɔ̃.tʁa le tʁa.vo ɔ̃ kɔ.mɑ̃.se/', 'a-preh kohⁿ-na see-NYAY luh kohⁿ-TRA | lay tra-VOH ohⁿ ko-mahⁿ-SAY', ['groupe', 'verbal']),
  sent(1500, S, 'Après la signature du contrat, les travaux ont commencé.', 'After the signing of the contract, work began.',
    '/a.pʁɛ la si.ɲa.tyʁ dy kɔ̃.tʁa le tʁa.vo ɔ̃ kɔ.mɑ̃.se/', 'a-preh la see-nya-TÜR dü kohⁿ-TRA | lay tra-VOH ohⁿ ko-mahⁿ-SAY', ['groupe', 'nominal']),
  sent(1501, C, 'Parce que les prix ont augmenté, les ventes ont baissé.', 'Because prices went up, sales fell.',
    '/paʁs kə le pʁi ɔ̃.tɔɡ.mɑ̃.te le vɑ̃t ɔ̃ bɛ.se/', 'pars kuh lay PREE ohⁿ-tog-mahⁿ-TAY | lay VAHⁿT ohⁿ beh-SAY', ['groupe', 'verbal']),
  sent(1502, S, 'En raison de la hausse des prix, les ventes ont baissé.', 'Owing to the rise in prices, sales fell.',
    '/ɑ̃ ʁɛ.zɔ̃ də la os de pʁi le vɑ̃t ɔ̃ bɛ.se/', 'ahⁿ reh-zohⁿ duh la OHS day PREE | lay VAHⁿT ohⁿ beh-SAY', ['groupe', 'nominal'], FCVDR),
  sent(1503, C, "Dès qu'elle arrivera, préviens-moi.", 'As soon as she arrives, let me know.',
    '/dɛ kɛ.la.ʁiv.ʁa pʁe.vjɛ̃.mwa/', 'deh keh-la-reev-RA | pray-vyehⁿ-MWA', ['groupe', 'verbal']),
  sent(1504, S, 'Dès son arrivée, préviens-moi.', 'The moment she arrives, let me know.',
    '/dɛ sɔ̃.na.ʁi.ve pʁe.vjɛ̃.mwa/', 'deh soh-na-ree-VAY | pray-vyehⁿ-MWA', ['groupe', 'nominal']),
  sent(1505, C, "Pendant qu'on rénove la gare, les trains s'arrêtent à Renens.", 'While the station is being renovated, trains stop at Renens.',
    '/pɑ̃.dɑ̃ kɔ̃ ʁe.nɔv la ɡaʁ le tʁɛ̃ sa.ʁɛt a ʁə.nɑ̃/', 'pahⁿ-dahⁿ kohⁿ ray-NOV la GAR | lay TREHⁿ sa-RET a ruh-NAHⁿ', ['groupe', 'verbal']),
  sent(1506, S, "Pendant la rénovation de la gare, les trains s'arrêtent à Renens.", 'During the renovation of the station, trains stop at Renens.',
    '/pɑ̃.dɑ̃ la ʁe.nɔ.va.sjɔ̃ də la ɡaʁ le tʁɛ̃ sa.ʁɛt a ʁə.nɑ̃/', 'pahⁿ-dahⁿ la ray-no-va-SYOHⁿ duh la GAR | lay TREHⁿ sa-RET a ruh-NAHⁿ', ['groupe', 'nominal'], FCVDR),
  sent(1507, C, 'Si le vol est annulé, vous serez remboursé.', 'If the flight is cancelled, you will be refunded.',
    '/si lə vɔl ɛ.ta.ny.le vu sə.ʁe ʁɑ̃.buʁ.se/', 'see luh VOL eh-ta-nü-LAY | voo suh-ray rahⁿ-boor-SAY', ['groupe', 'verbal']),
  sent(1508, S, "En cas d'annulation du vol, vous serez remboursé.", 'In the event of the flight being cancelled, you will be refunded.',
    '/ɑ̃ ka da.ny.la.sjɔ̃ dy vɔl vu sə.ʁe ʁɑ̃.buʁ.se/', 'ahⁿ ka da-nü-la-SYOHⁿ dü VOL | voo suh-ray rahⁿ-boor-SAY', ['groupe', 'nominal']),
  sent(1509, S, 'Depuis son départ, le service fonctionne mal.', 'Since he left, the department has been working badly.',
    '/də.pɥi sɔ̃ de.paʁ lə sɛʁ.vis fɔ̃k.sjɔn mal/', 'duh-pwee sohⁿ day-PAR | luh sehr-VEES fohⁿk-SYONN MAL', ['groupe', 'nominal']),
  rule(1510, "Quand, avant que, après que : la proposition devient une préposition suivie d'un nom.", 'Quand, avant que, après que: the clause becomes a preposition followed by a noun.',
    '/kɑ̃ a.vɑ̃ kə a.pʁɛ kə la pʁɔ.pɔ.zi.sjɔ̃ də.vjɛ̃ yn pʁe.pɔ.zi.sjɔ̃ sɥi.vi dœ̃ nɔ̃/', 'KAHⁿ, a-vahⁿ KUH, a-preh KUH | la pro-po-zee-SYOHⁿ | duh-vyehⁿ ün pray-po-zee-SYOHⁿ | swee-VEE duhⁿ NOHⁿ',
    'Comment condenser « quand il est arrivé » ?',
    'À son arrivée : la conjonction devient une préposition, le verbe un nom, et le sujet un possessif ou un complément avec de.',
    ['groupe']),
  rule(1511, "Avant son départ dit la même chose qu'avant qu'il parte, sans subjonctif.", "Avant son départ says the same as avant qu'il parte, with no subjunctive.",
    '/a.vɑ̃ sɔ̃ de.paʁ di la mɛm ʃoz ka.vɑ̃ kil paʁt sɑ̃ syb.ʒɔ̃k.tif/', 'a-vahⁿ sohⁿ day-PAR | dee la mem SHOHZ | ka-vahⁿ keel PART | sahⁿ süb-zhohⁿk-TEEF',
    'Pourquoi le groupe nominal est-il pratique après avant ?',
    'Avant que demande le subjonctif. Avant + nom ne demande rien : avant son départ, avant la réunion.',
    ['groupe', 'subjonctif']),
  gap(1512, S, "À l'arrivée de la ministre, les invités ont applaudi.", "On the minister's arrival, the guests applauded.",
    '/a la.ʁi.ve də la mi.nistʁ le.zɛ̃.vi.te ɔ̃.ta.plo.di/', 'a la-ree-VAY duh la mee-NEESTR | lay-zehⁿ-vee-TAY ohⁿ-ta-ploh-DEE',
    '___ de la ministre, les invités ont applaudi. (quand la ministre est arrivée)',
    "Quand + arriver devient à l'arrivée de. EN: on the minister's arrival.",
    ['groupe'], FCVDR),
];

/* ── ACT 7 · LA PRÉPOSITION DIT LE LIEN (.1513-.1528) ─────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1513, S, "En raison d'une grève, aucun train ne circulera demain.", 'Owing to a strike, no trains will run tomorrow.',
    '/ɑ̃ ʁɛ.zɔ̃ dyn ɡʁɛv o.kœ̃ tʁɛ̃ nə siʁ.ky.lə.ʁa də.mɛ̃/', 'ahⁿ reh-zohⁿ dün GREV | oh-kuhⁿ TREHⁿ | nuh seer-kü-luh-RA duh-MEHⁿ', ['lien', 'cause'], FCVDR),
  sent(1514, S, "À la suite d'une panne, le serveur a été redémarré.", 'Following a breakdown, the server was restarted.',
    '/a la sɥit dyn pan lə sɛʁ.vœʁ a e.te ʁə.de.ma.ʁe/', 'a la SWEET dün PANN | luh sehr-VUHR | a ay-tay ruh-day-ma-RAY', ['lien', 'cause']),
  sent(1515, S, 'Lors de la réunion, la directrice a présenté le budget.', 'At the meeting, the director presented the budget.',
    '/lɔʁ də la ʁe.y.njɔ̃ la di.ʁɛk.tʁis a pʁe.zɑ̃.te lə byd.ʒɛ/', 'lor duh la ray-ü-NYOHⁿ | la dee-rehk-TREES | a pray-zahⁿ-TAY luh büd-ZHEH', ['lien', 'moment'], FCVDR),
  sent(1516, S, 'En vue du déménagement, chacun doit trier ses dossiers.', 'Ahead of the move, everyone must sort their files.',
    '/ɑ̃ vy dy de.me.naʒ.mɑ̃ ʃa.kœ̃ dwa tʁi.je se do.sje/', 'ahⁿ VÜ dü day-may-nazh-MAHⁿ | sha-KUHⁿ dwa tree-YAY say doh-SYAY', ['lien', 'but']),
  sent(1517, S, 'Malgré la hausse des prix, les ventes ont progressé.', 'Despite the rise in prices, sales grew.',
    '/mal.ɡʁe la os de pʁi le vɑ̃t ɔ̃ pʁɔ.ɡʁɛ.se/', 'mal-GRAY la OHS day PREE | lay VAHⁿT ohⁿ pro-greh-SAY', ['lien', 'obstacle']),
  sent(1518, S, 'Faute de candidats, le poste reste vacant.', 'For lack of applicants, the post remains vacant.',
    '/fot də kɑ̃.di.da lə pɔst ʁɛst va.kɑ̃/', 'foht duh kahⁿ-dee-DA | luh POST rest va-KAHⁿ', ['lien', 'manque'], FCVDR),
  sent(1519, C, "Dès l'ouverture des portes, la foule s'est précipitée.", 'As soon as the doors opened, the crowd rushed in.',
    '/dɛ lu.vɛʁ.tyʁ de pɔʁt la ful sɛ pʁe.si.pi.te/', 'deh loo-vehr-TÜR day PORT | la FOOL seh pray-see-pee-TAY', ['lien', 'moment']),
  sent(1520, S, "En cas d'incendie, utilisez l'escalier de secours.", 'In case of fire, use the emergency stairs.',
    '/ɑ̃ ka dɛ̃.sɑ̃.di y.ti.li.ze lɛs.ka.lje də sə.kuʁ/', 'ahⁿ ka dehⁿ-sahⁿ-DEE | ü-tee-lee-ZAY | les-ka-LYAY duh suh-KOOR', ['lien', 'condition']),
  sent(1521, C, 'Suite à votre demande, je vous envoie le formulaire.', 'Following your request, I am sending you the form.',
    '/sɥi.ta vɔtʁ də.mɑ̃d ʒə vu.zɑ̃.vwa lə fɔʁ.my.lɛʁ/', 'swee-ta votr duh-MAHⁿD | zhuh voo-zahⁿ-VWA luh for-mü-LEHR', ['lien', 'suite-a']),
  sent(1522, S, 'Dès réception du paiement, la commande sera expédiée.', 'As soon as payment is received, the order will be shipped.',
    '/dɛ ʁe.sɛp.sjɔ̃ dy pɛ.mɑ̃ la kɔ.mɑ̃d sə.ʁa ɛks.pe.dje/', 'deh ray-sep-SYOHⁿ dü peh-MAHⁿ | la ko-MAHⁿD | suh-ra eks-pay-DYAY', ['lien', 'moment'], FCVDR),
  sent(1523, C, 'Malgré son retard, il a été reçu par le jury.', 'Despite being late, he was seen by the panel.',
    '/mal.ɡʁe sɔ̃ ʁə.taʁ i.la e.te ʁə.sy paʁ lə ʒy.ʁi/', 'mal-GRAY sohⁿ ruh-TAR | ee-la ay-tay ruh-SÜ | par luh zhü-REE', ['lien', 'obstacle']),
  rule(1524, "La préposition porte le lien : en raison de pour la cause, en vue de pour le but, malgré pour l'obstacle.", 'The preposition carries the link: en raison de for the cause, en vue de for the purpose, malgré for the obstacle.',
    '/la pʁe.pɔ.zi.sjɔ̃ pɔʁt lə ljɛ̃ ɑ̃ ʁɛ.zɔ̃ də puʁ la koz ɑ̃ vy də puʁ lə by mal.ɡʁe puʁ lɔp.stakl/', 'la pray-po-zee-SYOHⁿ | port luh LYEHⁿ | ahⁿ reh-zohⁿ duh poor la KOHZ | ahⁿ vü duh poor luh BÜ | mal-gray poor lop-STAKL',
    'Dans un groupe nominal, qui dit le lien ?',
    'La préposition, comme la conjonction dans une phrase. Faute de dit le manque, lors de le moment, dès le point de départ.',
    ['lien']),
  rule(1525, 'Malgré se construit avec un nom ; avec une phrase, on écrit bien que.', 'Malgré takes a noun; with a clause, you write bien que.',
    '/mal.ɡʁe sə kɔ̃s.tʁɥi a.vɛk œ̃ nɔ̃ a.vɛk yn fʁaz ɔ̃.ne.kʁi bjɛ̃ kə/', 'mal-GRAY suh kohⁿs-TRWEE | a-vek uhⁿ NOHⁿ | a-vek ün FRAZ | oh-nay-KREE byehⁿ KUH',
    'Malgré que ?',
    "À l'écrit soigné : malgré la pluie, ou bien qu'il pleuve, avec le subjonctif. Malgré que s'entend, mais évite-le dans un rapport.",
    ['lien', 'obstacle']),
  gap(1526, S, "Lors de la réunion, chacun a pu s'exprimer.", 'At the meeting, everyone was able to have their say.',
    '/lɔʁ də la ʁe.y.njɔ̃ ʃa.kœ̃ a py sɛks.pʁi.me/', 'lor duh la ray-ü-NYOHⁿ | sha-KUHⁿ a pü seks-pree-MAY',
    "___ la réunion, chacun a pu s'exprimer. (au moment de)",
    'Lors de : le moment, dans un registre soigné. EN: during, at the time of.',
    ['lien', 'moment']),
  gap(1527, S, "Faute d'argent, ils ont renoncé au voyage.", 'For lack of money, they gave up the trip.',
    '/fot daʁ.ʒɑ̃ il.zɔ̃ ʁə.nɔ̃.se o vwa.jaʒ/', 'foht dar-ZHAHⁿ | eel-zohⁿ ruh-nohⁿ-SAY oh vwa-YAZH',
    "___ argent, ils ont renoncé au voyage. (parce qu'ils n'en avaient pas)",
    "Faute de dit le manque, sans article : faute d'argent, faute de temps. EN: for lack of.",
    ['lien', 'manque'], FCVDR),
  gap(1528, S, "En vue de l'examen, elle révise tous les soirs.", 'With the exam in mind, she revises every evening.',
    '/ɑ̃ vy də lɛɡ.za.mɛ̃ ɛl ʁe.viz tu le swaʁ/', 'ahⁿ vü duh leg-za-MEHⁿ | el ray-VEEZ too lay SWAR',
    "___ l'examen, elle révise tous les soirs. (pour le préparer)",
    'En vue de dit le but, devant un nom. EN: with a view to.',
    ['lien', 'but']),
];

/* ── ACT 8 · QUI FAIT QUOI DANS LE GROUPE (.1529-.1543) ───────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1529, C, 'Le maire a décidé de fermer la piscine.', 'The mayor decided to close the pool.',
    '/lə mɛʁ a de.si.de də fɛʁ.me la pi.sin/', 'luh MEHR a day-see-DAY | duh fehr-MAY la pee-SEEN', ['agent', 'verbal']),
  sent(1530, S, 'La décision du maire de fermer la piscine a surpris.', "The mayor's decision to close the pool came as a surprise.",
    '/la de.si.zjɔ̃ dy mɛʁ də fɛʁ.me la pi.sin a syʁ.pʁi/', 'la day-see-ZYOHⁿ dü MEHR | duh fehr-MAY la pee-SEEN | a sür-PREE', ['agent', 'nominal'], FCVDR),
  sent(1531, C, 'La compagnie a annulé le vol.', 'The airline cancelled the flight.',
    '/la kɔ̃.pa.ɲi a a.ny.le lə vɔl/', 'la kohⁿ-pa-NYEE | a a-nü-LAY luh VOL', ['agent', 'verbal']),
  sent(1532, S, "L'annulation du vol par la compagnie a provoqué la colère des passagers.", "The airline's cancellation of the flight angered the passengers.",
    '/la.ny.la.sjɔ̃ dy vɔl paʁ la kɔ̃.pa.ɲi a pʁɔ.vɔ.ke la kɔ.lɛʁ de pa.sa.ʒe/', 'la-nü-la-SYOHⁿ dü VOL | par la kohⁿ-pa-NYEE | a pro-vo-KAY la ko-LEHR | day pa-sa-ZHAY', ['agent', 'par'], FCVDR),
  sent(1533, C, 'La critique du ministre a fait beaucoup de bruit.', "The minister's criticism caused a stir.",
    '/la kʁi.tik dy mi.nistʁ a fɛ bo.ku də bʁɥi/', 'la kree-TEEK dü mee-NEESTR | a feh boh-koo duh BRWEE', ['agent', 'ambigu']),
  sent(1534, S, 'Les critiques contre le ministre se multiplient.', 'Criticism of the minister is mounting.',
    '/le kʁi.tik kɔ̃.tʁə lə mi.nistʁ sə myl.ti.pli/', 'lay kree-TEEK | kohⁿ-truh luh mee-NEESTR | suh mül-tee-PLEE', ['agent', 'clair']),
  sent(1535, S, 'Les critiques du ministre contre la réforme se multiplient.', "The minister's criticisms of the reform are mounting.",
    '/le kʁi.tik dy mi.nistʁ kɔ̃.tʁə la ʁe.fɔʁm sə myl.ti.pli/', 'lay kree-TEEK dü mee-NEESTR | kohⁿ-truh la ray-FORM | suh mül-tee-PLEE', ['agent', 'clair']),
  sent(1536, S, "L'arrestation du policier a eu lieu hier.", 'The police officer was arrested yesterday.',
    '/la.ʁɛs.ta.sjɔ̃ dy pɔ.li.sje a y ljø jɛʁ/', 'la-rehs-ta-SYOHⁿ dü po-lee-SYAY | a ü LYEU YEHR', ['agent', 'patient']),
  sent(1537, C, 'Sa nomination a été annoncée lundi.', 'Her appointment was announced on Monday.',
    '/sa nɔ.mi.na.sjɔ̃ a e.te a.nɔ̃.se lœ̃.di/', 'sa no-mee-na-SYOHⁿ | a ay-tay a-nohⁿ-SAY luhⁿ-DEE', ['agent', 'patient']),
  sent(1538, S, 'La construction du pont par une entreprise locale a duré deux ans.', 'Building the bridge took a local firm two years.',
    '/la kɔ̃s.tʁyk.sjɔ̃ dy pɔ̃ paʁ y.nɑ̃.tʁə.pʁiz lɔ.kal a dy.ʁe dø.zɑ̃/', 'la kohⁿs-trük-SYOHⁿ dü POHⁿ | par ü-nahⁿ-truh-PREEZ lo-KAL | a dü-RAY deu-ZAHⁿ', ['agent', 'par']),
  sent(1539, S, "Le rachat de l'entreprise par un groupe canadien est confirmé.", 'The takeover of the company by a Canadian group is confirmed.',
    '/lə ʁa.ʃa də lɑ̃.tʁə.pʁiz paʁ œ̃ ɡʁup ka.na.djɛ̃ ɛ kɔ̃.fiʁ.me/', 'luh ra-SHA duh lahⁿ-truh-PREEZ | par uhⁿ groop ka-na-DYEHⁿ | eh kohⁿ-feer-MAY', ['agent', 'par'], FCVDR),
  rule(1540, "Dans le groupe nominal, de introduit souvent ce qui subit l'action, et par celui qui la fait.", 'In a noun phrase, de often introduces what undergoes the action, and par the one who does it.',
    '/dɑ̃ lə ɡʁup nɔ.mi.nal də ɛ̃.tʁɔ.dɥi su.vɑ̃ sə ki sy.bi lak.sjɔ̃ e paʁ sə.lɥi ki la fɛ/', 'dahⁿ luh groop no-mee-NAL | DUH ehⁿ-tro-DWEE soo-VAHⁿ | suh kee sü-bee lak-SYOHⁿ | ay PAR suh-lwee kee la FEH',
    "L'annulation du vol par la compagnie : qui annule ?",
    "La compagnie, introduite par par. Le vol, introduit par de, subit l'annulation. C'est la logique du passif.",
    ['agent', 'par']),
  rule(1541, 'Quand de peut désigner les deux, ajoute par ou contre, ou garde le verbe.', 'When de could mean either, add par or contre, or keep the verb.',
    '/kɑ̃ də pø de.zi.ɲe le dø a.ʒut paʁ u kɔ̃tʁ u ɡaʁd lə vɛʁb/', 'kahⁿ DUH peu day-zee-NYAY lay DEU | a-zhoot PAR oo KOHⁿTR | oo gard luh VEHRB',
    '« La critique du ministre » : qui critique ?',
    'On ne sait pas : le ministre critique, ou on le critique. Écris « les critiques du ministre contre la réforme » ou « les critiques contre le ministre ».',
    ['agent', 'ambigu']),
  gap(1542, S, "L'annulation du concert par l'organisateur a déçu le public.", "The organiser's cancellation of the concert disappointed the audience.",
    '/la.ny.la.sjɔ̃ dy kɔ̃.sɛʁ paʁ lɔʁ.ɡa.ni.za.tœʁ a de.sy lə py.blik/', 'la-nü-la-SYOHⁿ dü kohⁿ-SEHR | par lor-ga-nee-za-TUHR | a day-SÜ luh pü-BLEEK',
    "L'annulation du concert ___ l'organisateur a déçu le public. (qui annule ?)",
    "Par introduit celui qui fait l'action. EN: par for the doer.",
    ['agent', 'par'], FCVDR),
  gap(1543, S, 'La nomination du directeur a été annoncée hier.', "The director's appointment was announced yesterday.",
    '/la nɔ.mi.na.sjɔ̃ dy di.ʁɛk.tœʁ a e.te a.nɔ̃.se jɛʁ/', 'la no-mee-na-SYOHⁿ dü dee-rehk-TUHR | a ay-tay a-nohⁿ-SAY YEHR',
    'La ___ du directeur a été annoncée hier. (on l’a nommé)',
    'Nommer, la nomination. Ici, de introduit celui qui est nommé. EN: de for the one appointed.',
    ['agent', 'patient']),
];

/* ── ACT 9 · TITRES, RAPPORTS, COMPTES RENDUS (.1544-.1557) ───────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1544, S, 'Hausse des loyers à Lyon', 'Rents rise in Lyon',
    '/os de lwa.je a ljɔ̃/', 'OHS day lwa-YAY a LYOHⁿ', ['titre']),
  sent(1545, C, 'Les loyers ont augmenté à Lyon.', 'Rents have gone up in Lyon.',
    '/le lwa.je ɔ̃.tɔɡ.mɑ̃.te a ljɔ̃/', 'lay lwa-YAY | ohⁿ-tog-mahⁿ-TAY a LYOHⁿ', ['titre', 'verbal']),
  sent(1546, S, "Fermeture de la ligne 4 pendant l'été", 'Line 4 closed over the summer',
    '/fɛʁ.mə.tyʁ də la liɲ katʁ pɑ̃.dɑ̃ le.te/', 'fehr-muh-TÜR duh la leeny KATR | pahⁿ-dahⁿ lay-TAY', ['titre']),
  sent(1547, C, "La ligne 4 sera fermée pendant l'été.", 'Line 4 will be closed over the summer.',
    '/la liɲ katʁ sə.ʁa fɛʁ.me pɑ̃.dɑ̃ le.te/', 'la leeny KATR | suh-ra fehr-MAY | pahⁿ-dahⁿ lay-TAY', ['titre', 'verbal']),
  sent(1548, S, 'Report de la réunion au jeudi suivant', 'Meeting postponed to the following Thursday',
    '/ʁə.pɔʁ də la ʁe.y.njɔ̃ o ʒø.di sɥi.vɑ̃/', 'ruh-POR duh la ray-ü-NYOHⁿ | oh zheu-dee swee-VAHⁿ', ['titre', 'ordre-du-jour']),
  sent(1549, S, "Adoption du budget à l'unanimité", 'Budget adopted unanimously',
    '/a.dɔp.sjɔ̃ dy byd.ʒɛ a ly.na.ni.mi.te/', 'a-dop-SYOHⁿ dü büd-ZHEH | a lü-na-nee-mee-TAY', ['titre', 'ordre-du-jour'], FCVDR),
  sent(1550, S, "Ouverture d'une nouvelle crèche dans le quartier", 'New nursery opens in the neighbourhood',
    '/u.vɛʁ.tyʁ dyn nu.vɛl kʁɛʃ dɑ̃ lə kaʁ.tje/', 'oo-vehr-TÜR dün noo-vel KRESH | dahⁿ luh kar-TYAY', ['titre']),
  sent(1551, S, 'Démission de la présidente du club', 'Club president resigns',
    '/de.mi.sjɔ̃ də la pʁe.zi.dɑ̃t dy klœb/', 'day-mee-SYOHⁿ duh la pray-zee-DAHⁿT dü KLUHB', ['titre']),
  sent(1552, S, 'Validation du calendrier par le conseil', 'Schedule approved by the council',
    '/va.li.da.sjɔ̃ dy ka.lɑ̃.dʁi.je paʁ lə kɔ̃.sɛj/', 'va-lee-da-SYOHⁿ dü ka-lahⁿ-dree-YAY | par luh kohⁿ-SEY', ['titre', 'par']),
  sent(1553, S, "Après discussion, le règlement est adopté à l'unanimité.", 'After discussion, the rules are adopted unanimously.',
    '/a.pʁɛ dis.ky.sjɔ̃ lə ʁɛ.ɡlə.mɑ̃ ɛ.ta.dɔp.te a ly.na.ni.mi.te/', 'a-preh dees-kü-SYOHⁿ | luh reh-gluh-MAHⁿ | eh-ta-dop-TAY a lü-na-nee-mee-TAY', ['compte-rendu']),
  rule(1554, "Un titre ou un point de l'ordre du jour : un nom, sans article ni verbe conjugué.", 'A headline or an agenda item: a noun, with no article and no finite verb.',
    '/œ̃ titʁ u œ̃ pwɛ̃ də lɔʁdʁ dy ʒuʁ œ̃ nɔ̃ sɑ̃.zaʁ.tikl ni vɛʁb kɔ̃.ʒy.ɡe/', 'uhⁿ TEETR | oo uhⁿ PWEHⁿ duh LORDR dü ZHOOR | uhⁿ NOHⁿ | sahⁿ-zar-TEEKL | nee VEHRB kohⁿ-zhü-GAY',
    'Comment titrer « la ligne 4 sera fermée » ?',
    "Fermeture de la ligne 4 : le verbe devient un nom, l'article du début tombe, les détails suivent.",
    ['titre']),
  rule(1555, 'Dans un compte rendu, les points sont des noms ; les décisions gardent souvent un verbe.', 'In minutes, the agenda points are nouns; decisions often keep a verb.',
    '/dɑ̃.zœ̃ kɔ̃t ʁɑ̃.dy le pwɛ̃ sɔ̃ de nɔ̃ le de.si.zjɔ̃ ɡaʁd su.vɑ̃.tœ̃ vɛʁb/', 'dahⁿ-zuhⁿ kohⁿt rahⁿ-DÜ | lay PWEHⁿ sohⁿ day NOHⁿ | lay day-see-ZYOHⁿ | gard soo-vahⁿ-tuhⁿ VEHRB',
    'Un compte rendu tout en noms ?',
    "Non. L'ordre du jour se liste en noms (budget, calendrier). Une décision se lit mieux avec un verbe : le règlement est adopté.",
    ['compte-rendu']),
  gap(1556, S, 'Modification des horaires de la piscine à partir de lundi', 'Pool opening hours change from Monday',
    '/mɔ.di.fi.ka.sjɔ̃ de.zɔ.ʁɛʁ də la pi.sin a paʁ.tiʁ də lœ̃.di/', 'mo-dee-fee-ka-SYOHⁿ | day-zo-REHR duh la pee-SEEN | a par-teer duh luhⁿ-DEE',
    '___ des horaires de la piscine à partir de lundi (modifier)',
    'Modifier, la modification : un titre commence par le nom, sans article. EN: a headline starts with the noun.',
    ['titre']),
  gap(1557, S, 'Plantation de trois arbres sur la place Bellecour', 'Three trees to be planted on Place Bellecour',
    '/plɑ̃.ta.sjɔ̃ də tʁwa.zaʁbʁ syʁ la plas bɛl.kuʁ/', 'plahⁿ-ta-SYOHⁿ | duh trwa-ZARBR | sür la plass bel-KOOR',
    '___ de trois arbres sur la place Bellecour (planter)',
    'Planter, la plantation. EN: planting.',
    ['titre'], FCVDR),
];

/* ── ACT 10 · TROP DE NOMS : SAVOIR DÉPLIER (.1558-.1571) ─────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1558, S, "Il est procédé à la vérification de l'installation par le technicien.", 'The installation is checked by the technician (heavy administrative style).',
    '/i.lɛ pʁɔ.se.de a la ve.ʁi.fi.ka.sjɔ̃ də lɛ̃s.ta.la.sjɔ̃ paʁ lə tɛk.ni.sjɛ̃/', 'ee-leh pro-say-DAY | a la vay-ree-fee-ka-SYOHⁿ | duh lehⁿs-ta-la-SYOHⁿ | par luh tek-nee-SYEHⁿ', ['lourd', 'contre-exemple'], RECO),
  sent(1559, C, "Le technicien vérifie l'installation.", 'The technician checks the installation.',
    '/lə tɛk.ni.sjɛ̃ ve.ʁi.fi lɛ̃s.ta.la.sjɔ̃/', 'luh tek-nee-SYEHⁿ | vay-ree-FEE lehⁿs-ta-la-SYOHⁿ', ['deplie'], FCVDR),
  sent(1560, S, "Le projet fait l'objet d'une révision.", 'The project is undergoing a review.',
    '/lə pʁɔ.ʒɛ fɛ lɔb.ʒɛ dyn ʁe.vi.zjɔ̃/', 'luh pro-ZHEH | feh lob-ZHEH dün ray-vee-ZYOHⁿ', ['lourd']),
  sent(1561, C, 'On revoit le projet.', 'We are reworking the project.',
    '/ɔ̃ ʁə.vwa lə pʁɔ.ʒɛ/', 'ohⁿ ruh-VWA luh pro-ZHEH', ['deplie']),
  sent(1562, S, 'En cas de non-présentation du justificatif, le remboursement ne pourra être effectué.', 'If proof is not presented, no refund can be made.',
    '/ɑ̃ ka də nɔ̃.pʁe.zɑ̃.ta.sjɔ̃ dy ʒys.ti.fi.ka.tif lə ʁɑ̃.buʁ.sə.mɑ̃ nə pu.ʁa ɛtʁ e.fɛk.tɥe/', 'ahⁿ ka duh nohⁿ-pray-zahⁿ-ta-SYOHⁿ | dü zhüs-tee-fee-ka-TEEF | luh rahⁿ-boor-suh-MAHⁿ | nuh poo-RA EHTR ay-fek-TWAY', ['lourd', 'contre-exemple'], RECO),
  sent(1563, C, 'Si vous ne montrez pas le justificatif, on ne pourra pas vous rembourser.', 'If you do not show the receipt, we will not be able to refund you.',
    '/si vu nə mɔ̃.tʁe pa lə ʒys.ti.fi.ka.tif ɔ̃ nə pu.ʁa pa vu ʁɑ̃.buʁ.se/', 'see voo nuh mohⁿ-TRAY pa | luh zhüs-tee-fee-ka-TEEF | ohⁿ nuh poo-RA pa | voo rahⁿ-boor-SAY', ['deplie'], FCVDR),
  sent(1564, S, "L'amélioration de la qualité de l'accueil des usagers est notre priorité.", 'Improving the quality of the welcome given to users is our priority.',
    '/la.me.ljɔ.ʁa.sjɔ̃ də la ka.li.te də la.kœj de.zy.za.ʒe ɛ nɔtʁ pʁi.jɔ.ʁi.te/', 'la-may-lyo-ra-SYOHⁿ | duh la ka-lee-TAY | duh la-KUHY day-zü-za-ZHAY | eh notr pree-yo-ree-TAY', ['lourd', 'contre-exemple'], RECO),
  sent(1565, C, 'Nous voulons mieux accueillir les usagers.', 'We want to welcome users better.',
    '/nu vu.lɔ̃ mjø.za.kœ.jiʁ le.zy.za.ʒe/', 'noo voo-LOHⁿ | myeu-za-kuh-YEER lay-zü-za-ZHAY', ['deplie'], FCVDR),
  sent(1566, C, 'La ville va installer des bancs pour que les promeneurs puissent se reposer.', 'The city is going to put in benches so that walkers can rest.',
    '/la vil va ɛ̃s.ta.le de bɑ̃ puʁ kə le pʁɔm.nœʁ pɥis sə ʁə.po.ze/', 'la VEEL va ehⁿs-ta-LAY day BAHⁿ | poor kuh lay prom-NUHR | pweess suh ruh-poh-ZAY', ['deplie']),
  sent(1567, S, "L'installation de bancs en vue du repos des promeneurs est prévue.", 'The installation of benches for the rest of walkers is planned (heavy).',
    '/lɛ̃s.ta.la.sjɔ̃ də bɑ̃ ɑ̃ vy dy ʁə.po de pʁɔm.nœʁ ɛ pʁe.vy/', 'lehⁿs-ta-la-SYOHⁿ duh BAHⁿ | ahⁿ vü dü ruh-POH day prom-NUHR | eh pray-VÜ', ['lourd', 'contre-exemple'], RECO),
  rule(1568, 'Deux ou trois de à la suite : déplie un nom en verbe.', 'Two or three de in a row: unfold one noun into a verb.',
    '/dø u tʁwa də a la sɥit de.pli œ̃ nɔ̃ ɑ̃ vɛʁb/', 'DEU oo TRWA DUH | a la SWEET | day-PLEE uhⁿ NOHⁿ ahⁿ VEHRB',
    'Quand une phrase devient-elle trop lourde ?',
    "Quand les noms s'enchaînent avec de la... de la... Garde un nom, rends les autres au verbe : nous voulons mieux accueillir les usagers.",
    ['chaine']),
  rule(1569, "À l'oral, préfère le verbe : ton auditeur ne peut pas relire.", 'When speaking, prefer the verb: your listener cannot reread.',
    '/a lɔ.ʁal pʁe.fɛʁ lə vɛʁb tɔ̃.no.di.tœʁ nə pø pa ʁə.liʁ/', 'a lo-RAL | pray-FEHR luh VEHRB | toh-noh-dee-TUHR | nuh peu pa ruh-LEER',
    'Un avis écrit, lu à la radio ?',
    "Déplie-le : qui fait quoi, avec des verbes. Procéder à la vérification devient vérifier ; faire l'objet d'une révision devient réviser.",
    ['chaine', 'oral']),
  gap(1570, C, "Le technicien vérifiera l'installation.", 'The technician will check the installation.',
    '/lə tɛk.ni.sjɛ̃ ve.ʁi.fi.ʁa lɛ̃s.ta.la.sjɔ̃/', 'luh tek-nee-SYEHⁿ | vay-ree-fee-RA lehⁿs-ta-la-SYOHⁿ',
    "Il sera procédé à la vérification de l'installation. Déplie : le technicien ___ l'installation. (vérifier, au futur)",
    'Procéder à la vérification, c’est vérifier. Le verbe fort remplace le verbe vide et son nom. EN: a strong verb replaces the empty verb plus noun.',
    ['deplie']),
  sent(1571, C, 'Les travaux vont durer trois semaines, et la rue sera fermée.', 'The work will last three weeks, and the street will be closed.',
    '/le tʁa.vo vɔ̃ dy.ʁe tʁwa sə.mɛn e la ʁy sə.ʁa fɛʁ.me/', 'lay tra-VOH vohⁿ dü-RAY trwa suh-MENN | ay la RÜ suh-ra fehr-MAY', ['deplie', 'oral'], FCVDR),
];

/* ── ACT 11 · TON COMPTE RENDU (.1572-.1581) ──────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1572, S, "Dès l'installation du stand, l'affluence a été forte.", 'As soon as the stand was set up, there were crowds of visitors.',
    '/dɛ lɛ̃s.ta.la.sjɔ̃ dy stɑ̃d la.fly.ɑ̃s a e.te fɔʁt/', 'deh lehⁿs-ta-la-SYOHⁿ dü STAHⁿD | la-flü-AHⁿS a ay-tay FORT', ['tache', 'compte-rendu'], FCVDR),
  sent(1573, S, "Les visiteurs ont salué la rapidité et la simplicité de l'application.", 'Visitors praised how fast and simple the app is.',
    '/le vi.zi.tœʁ ɔ̃ sa.lɥe la ʁa.pi.di.te e la sɛ̃.pli.si.te də la.pli.ka.sjɔ̃/', 'lay vee-zee-TUHR ohⁿ sa-LWAY | la ra-pee-dee-TAY ay la sehⁿ-plee-see-TAY | duh la-plee-ka-SYOHⁿ', ['tache', 'compte-rendu']),
  sent(1574, S, "À la suite d'une panne de courant, la conférence a été annulée.", 'Following a power cut, the talk was cancelled.',
    '/a la sɥit dyn pan də ku.ʁɑ̃ la kɔ̃.fe.ʁɑ̃s a e.te a.ny.le/', 'a la SWEET dün pann duh koo-RAHⁿ | la kohⁿ-fay-RAHⁿS | a ay-tay a-nü-LAY', ['tache', 'compte-rendu']),
  sent(1575, S, "Cette annulation nous a privés d'une partie des contacts prévus.", 'This cancellation cost us some of the contacts we had planned.',
    '/sɛ.ta.ny.la.sjɔ̃ nu.za pʁi.ve dyn paʁ.ti de kɔ̃.takt pʁe.vy/', 'seh-ta-nü-la-SYOHⁿ | noo-za pree-VAY | dün par-TEE day kohⁿ-TAKT pray-VÜ', ['tache', 'compte-rendu'], FCVDR),
  sent(1576, S, 'Point très positif : la signature de deux contrats de distribution.', 'A very positive point: two distribution contracts were signed.',
    '/pwɛ̃ tʁɛ po.zi.tif la si.ɲa.tyʁ də dø kɔ̃.tʁa də dis.tʁi.by.sjɔ̃/', 'pwehⁿ treh po-zee-TEEF | la see-nya-TÜR | duh deu kohⁿ-TRA | duh dees-tree-bü-SYOHⁿ', ['tache', 'compte-rendu']),
  sent(1577, C, "Avant notre départ, la directrice d'un grand magasin est venue au stand.", 'Before we left, the manager of a department store came to the stand.',
    '/a.vɑ̃ nɔtʁ de.paʁ la di.ʁɛk.tʁis dœ̃ ɡʁɑ̃ ma.ɡa.zɛ̃ ɛ və.ny o stɑ̃d/', 'a-vahⁿ notr day-PAR | la dee-rehk-TREES | duhⁿ grahⁿ ma-ga-ZEHⁿ | eh vuh-NÜ oh STAHⁿD', ['tache', 'compte-rendu']),
  sent(1578, S, 'En vue du salon de Toronto, nous proposons une révision de nos tarifs.', 'Ahead of the Toronto fair, we propose a review of our prices.',
    '/ɑ̃ vy dy sa.lɔ̃ də tɔ.ʁɔ̃.to nu pʁɔ.po.zɔ̃ yn ʁe.vi.zjɔ̃ də no ta.ʁif/', 'ahⁿ vü dü sa-LOHⁿ duh to-rohⁿ-TOH | noo pro-po-ZOHⁿ | ün ray-vee-ZYOHⁿ duh noh ta-REEF', ['tache', 'recommandation'], FCVDR),
  sent(1579, C, 'Nous suggérons de rappeler rapidement la directrice du magasin.', 'We suggest calling the store manager back quickly.',
    '/nu syɡ.ʒe.ʁɔ̃ də ʁa.plə.le ʁa.pid.mɑ̃ la di.ʁɛk.tʁis dy ma.ɡa.zɛ̃/', 'noo süg-zhay-ROHⁿ | duh ra-pluh-LAY ra-peed-MAHⁿ | la dee-rehk-TREES dü ma-ga-ZEHⁿ', ['tache', 'recommandation']),
  sent(1580, C, 'Voici le bilan de notre participation au salon.', 'Here is a review of our time at the fair.',
    '/vwa.si lə bi.lɑ̃ də nɔtʁ paʁ.ti.si.pa.sjɔ̃ o sa.lɔ̃/', 'vwa-SEE luh bee-LAHⁿ | duh notr par-tee-see-pa-SYOHⁿ oh sa-LOHⁿ', ['tache', 'ouverture']),
  rule(1581, 'Un bon compte rendu condense les faits en noms et garde des verbes pour les faire avancer.', 'Good minutes condense the facts into nouns and keep verbs to move them along.',
    '/œ̃ bɔ̃ kɔ̃t ʁɑ̃.dy kɔ̃.dɑ̃s le fɛ ɑ̃ nɔ̃ e ɡaʁd de vɛʁb puʁ le fɛʁ a.vɑ̃.se/', 'uhⁿ bohⁿ kohⁿt rahⁿ-DÜ | kohⁿ-DAHⁿS lay FEH ahⁿ NOHⁿ | ay gard day VEHRB | poor lay fehr a-vahⁿ-SAY',
    'Le secret d’un compte rendu lisible ?',
    'Un nom par idée, au moins un verbe par phrase, et jamais trois de à la suite.',
    ['tache', 'compte-rendu']),
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
 *  §I. THE TEXTS
 *
 *  The long readings (B2: 200 to 350 words) and the eight short « dans un
 *  texte » paragraphs (60 to 120 words) that close acts 3 to 10. They live
 *  here so the reading, the quiz and the task cannot drift.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: Julien's voicemail and Claire's internal newsletter, Liège. */
export const LECTURE_DEUX_VERSIONS =
  "Lundi matin, Julien, chef d'équipe dans un entrepôt de Liège, laisse un message vocal à sa directrice. Voici ce qu'il dit : « Bonjour Claire, c'est Julien. Bon, la semaine a été compliquée. Les prix du carburant ont augmenté, et les livraisons coûtent plus cher. Jeudi, quand le camion est arrivé, il manquait trois palettes. Le fournisseur a livré en retard, donc on a fermé l'entrepôt pendant deux jours. Le directeur a décidé de reporter l'inventaire. Par contre, depuis qu'on a signé le nouveau contrat, les délais ont raccourci. Avant que l'équipe parte en congé, il faut vider les quais. Voilà, rappelle-moi. » Le lendemain, Claire résume ce message dans la lettre interne de l'entreprise : « Semaine du 3 mars. La hausse du carburant a alourdi le coût des livraisons. À l'arrivée du camion, jeudi, il manquait trois palettes. Fermeture de l'entrepôt pendant deux jours en raison d'un retard de livraison. L'inventaire est reporté sur décision du directeur. Point positif : depuis la signature du nouveau contrat, les délais ont raccourci. Avant le départ de l'équipe en congé, il faut vider les quais. » Les faits n'ont pas changé. Ce qui a changé, c'est la forme : Julien raconte avec des verbes, Claire condense avec des noms. Et, à part la ligne sur la fermeture, écrite comme un titre, elle garde un verbe dans chaque phrase, pour que sa lettre se lise sans effort.";

/** Act 9: the minutes of a residents' association, Lyon. */
export const LECTURE_COMPTE_RENDU =
  "Association des habitants de la Croix-Rousse, à Lyon. Compte rendu de la réunion du 12 octobre. Présents : quatorze membres. Excusés : trois. Ordre du jour : adoption du compte rendu précédent ; point sur les travaux de la place ; fermeture de la bibliothèque le samedi ; questions diverses. Point 1. Après lecture, le compte rendu du 14 septembre est adopté à l'unanimité. Point 2. La présidente rappelle que les travaux de la place ont pris deux mois de retard, en raison d'un désaccord entre la mairie et l'entreprise. La fin du chantier est désormais annoncée pour décembre. Plusieurs membres regrettent le manque d'information. Décision : envoi d'une lettre à la mairie pour demander un calendrier précis. Point 3. La mairie envisage la fermeture de la bibliothèque le samedi, faute de personnel. Les membres présents s'opposent à cette mesure, qui pénaliserait les familles. Décision : lancement d'une pétition en ligne dès la semaine prochaine. Point 4. Un habitant signale la dangerosité du carrefour de la rue d'Austerlitz, où deux accidents ont eu lieu depuis l'été ; la question sera étudiée lors de la prochaine réunion, en présence d'un représentant de la mairie. Fin de la séance à vingt et une heures. Prochaine réunion : le 9 novembre, à la maison des associations.";

/** Act 11: the model the learner imitates, a newsletter summary, Dakar. */
export const LECTURE_MODELE =
  "Lettre d'information de l'association Lire à Dakar, décembre. Bilan de la collecte de livres de novembre. Le mois dernier, notre association a organisé sa grande collecte annuelle de livres pour les bibliothèques de quartier. Voici l'essentiel. Déroulement. Dès l'ouverture des points de collecte, le 2 novembre, les dons ont afflué : en trois semaines, plus de quatre mille livres ont été déposés dans les écoles et les mairies partenaires. La participation des lycéens a été remarquable ; beaucoup sont venus trier les cartons le samedi. Difficultés. À la suite d'une panne de notre camion, la livraison aux bibliothèques de Pikine a pris une semaine de retard. Faute de place dans notre local, une partie des livres est stockée chez des bénévoles. Résultats. Onze bibliothèques ont reçu des livres, contre sept l'an dernier. La directrice de la bibliothèque de Guédiawaye nous a écrit pour saluer la qualité des ouvrages. Perspectives. En vue de la collecte de l'an prochain, nous cherchons un local plus grand et un second véhicule. Si vous pouvez nous aider, même quelques heures par mois, écrivez-nous : nous répondons à chaque message, et toutes les bonnes volontés sont les bienvenues. Merci à tous les donateurs et à tous les bénévoles : sans vous, rien de tout cela ne serait possible.";

/** The eight « dans un texte » paragraphs (acts 3 to 10). */
export const TEXTE_A3 =
  "Avis aux habitants du quartier Saint-Roch, à Québec. Complète avec le ou la, puis accorde le participe entre parenthèses. « (___) fermeture de la rue Saint-Joseph, (prévu) du 4 au 8 juin, est (reporté) d'une semaine. (___) nettoyage des égouts commencera donc le 11 juin. Pendant (___) durée des travaux, (___) stationnement sera (interdit) des deux côtés de la rue, mais (___) passage des piétons restera (assuré). (___) livraison des commerces se fera le matin, avant sept heures. Merci de votre patience. »";

export const TEXTE_A4 =
  "Note trimestrielle d'une petite entreprise de Liège. Remplace chaque verbe entre parenthèses par son nom, sans suffixe inventé. « Premier trimestre : les faits marquants. (acheter) de deux camions neufs. (vendre) de l'ancien entrepôt de Herstal. (partir) du directeur commercial, remplacé en avril. (choisir) d'un nouveau logiciel de gestion. (mettre en ligne) du catalogue, avec trois semaines de retard. Seule ombre au tableau : (perdre) d'un client important, après (refuser) de notre devis. »";

export const TEXTE_A5 =
  "Réponse d'un hôtel de Genève à un avis en ligne. Remplace chaque adjectif entre parenthèses par le nom qui lui correspond. « Madame, merci pour votre avis. Nous sommes heureux que vous ayez apprécié (gentil) de notre équipe, (rapide) du service en chambre et (calme) du quartier. Nous regrettons en revanche (lent) de l'ascenseur et (bruyant) de la rue le samedi soir. (propre) des chambres reste notre priorité, et votre (franc) nous aide à progresser. Au plaisir de vous accueillir à nouveau. »";

export const TEXTE_A6 =
  "Message laissé par le service client des trains régionaux vaudois. Réécris-le en avis écrit : chaque proposition qui commence par parce que, quand, avant que, si ou après que devient une préposition suivie d'un nom. « Parce qu'on fait des travaux sur la voie, le train de 7 h 12 ne circulera pas. Quand vous arriverez à Morges, prenez le bus. Avant que le bus parte, montrez votre billet au chauffeur. Si votre correspondance est annulée, vous serez remboursé. Après qu'on aura terminé les travaux, l'horaire normal reprendra. »";

export const TEXTE_A7 =
  "Annonce affichée à l'aéroport de Montréal-Trudeau. Complète avec la préposition qui dit le lien indiqué entre parenthèses. « (la cause) du brouillard, plusieurs vols sont retardés ce matin. (ce qui s'est passé avant) d'un incident technique, le vol pour Paris de 9 h 40 est annulé. (le moment) de l'embarquement, présentez votre passeport. (la condition) de retard de plus de trois heures, un repas vous sera offert. (l'obstacle) ces difficultés, notre personnel reste à votre disposition. (le manque) de place, certains passagers seront logés à Laval. »";

export const TEXTE_A8 =
  "Voici les nouvelles de la semaine à Sherbrooke. Réécris chaque phrase en un titre de presse qui garde qui fait quoi : de pour ce qui subit l'action, par pour celui qui la fait. « Hier soir, le conseil municipal a voté le budget. La mairesse a nommé une nouvelle directrice des sports. Le club de natation a critiqué la fermeture de la piscine. Enfin, un promoteur de Laval a racheté l'ancien cinéma Élysée. »";

export const TEXTE_A9 =
  "Voici une dépêche. Écris son titre en un groupe nominal, puis un chapeau de deux phrases qui condense l'essentiel. « La Ville de Sherbrooke a annoncé ce matin qu'elle allait fermer la patinoire du parc Jacques-Cartier pendant trois semaines. Des fissures ont été découvertes dans la dalle de béton, et les réparations commenceront lundi. Les patineurs pourront se rendre à la patinoire du lac des Nations, qui ouvrira plus longtemps. La Ville promet que la patinoire rouvrira avant les vacances de Noël. »";

export const TEXTE_A10 =
  "Communiqué de la préfecture, à lire à la radio ce soir. Déplie-le pour des auditeurs : remplace les noms en chaîne par des verbes, sans perdre un seul fait. « En raison de la réalisation de travaux de renforcement de la digue, la fermeture à la circulation de la route départementale 12 sera effective à compter du lundi 3 mars. La mise en place d'une déviation par Saint-Martin est prévue. La réouverture de la route interviendra à l'issue de l'achèvement des travaux, soit fin avril. »";

/** The task's spoken account, printed in the brief (act 11). */
export const MESSAGE_INES =
  "« Salut, c'est Inès. Bon, le salon de Montréal, c'était intense. On est arrivés mardi, et dès qu'on a monté le stand, les visiteurs sont venus. On a présenté la nouvelle application : les gens l'ont trouvée rapide et simple, mais ils ont trouvé nos prix trop élevés. Mercredi, l'organisateur a annulé la conférence de Karim parce qu'il y avait une panne de courant, du coup on a perdu pas mal de contacts. Par contre, on a signé avec deux distributeurs, un à Québec et un à Ottawa. Jeudi, avant qu'on reparte, la directrice d'un grand magasin est passée, et elle veut qu'on la rappelle. Moi, je pense qu'il faudrait baisser nos prix avant le salon de Toronto. Voilà, à plus. »";
