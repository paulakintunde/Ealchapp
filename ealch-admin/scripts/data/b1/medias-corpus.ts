// b1.34.l1 « Les médias » — the authored corpus, the imports and the citation
// constants. DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md,
// in the VOCAB SHAPE, TOPIC VARIANT, of B1-WORKSHOP-AND-VOCAB-SHAPES.md §2
// and §2.3, built on the model of b1.33 (environnement-*).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (later lessons may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   TOPIC VOCABULARY FOR THE MEDIA, taught as WORD FAMILIES and
//   COLLOCATIONS, never as isolated nouns (shapes doc §2.3), and read the way
//   a B1 learner meets it: a magazine survey, a front page, a radio
//   bulletin, a news brief, a forum thread, a fact-check post.
//
//     act 1   the landscape: informer / s’informer / l’information / un
//             informateur; les nouvelles, les infos; AUX nouvelles (never
//             « sur les nouvelles »); lire le journal, écouter la radio,
//             regarder le journal télévisé, s’informer en ligne
//     act 2   the written press: un quotidien, un hebdomadaire, un mensuel;
//             rédiger / la rédaction / un rédacteur; le rédacteur en chef
//             (NOT l’éditeur); publier un article; la rubrique, l’éditorial,
//             la chronique, le courrier des lecteurs; la publicité
//     act 3   reading a headline: the noun instead of the verb (démissionner
//             → la démission, fermer → la fermeture, augmenter → la hausse,
//             élire → l’élection, arrêter → l’arrestation), the dropped
//             article, the passive cut to its participle (lesson 18 in B1);
//             faire la une, le titre et le chapeau
//     act 4   radio and TV: diffuser / la diffusion; une émission, une
//             chaîne, en direct, le bulletin de nouvelles, faire un
//             reportage, animer / un animateur; auditeur, téléspectateur,
//             lecteur; une entrevue (Québec), un balado (Québec)
//     act 5   who says what: selon, d’après, de source sûre; déclarer / une
//             déclaration; annoncer / une annonce; témoigner / un témoin /
//             un témoignage; citer / une citation; un porte-parole;
//             « a déclaré qu’il ne démissionnerait pas » (lesson 19 in B1)
//     act 6   news not yet confirmed: the conditional of hearsay (lesson 8
//             in B1) « le ministre démissionnerait »; confirmer, démentir,
//             une rumeur court, sous réserve de confirmation, il paraît que
//     act 7   social networks: s’abonner / un abonnement / un abonné;
//             partager / un partage; suivre un compte; relayer une info;
//             commenter / un commentaire; une publication virale, devenir
//             viral, le fil d’actualité
//     act 8   true or false: une fausse nouvelle, une infox, désinformer /
//             la désinformation, circuler, une photo truquée, un canular,
//             manipuler, se méfier de, tomber dans le panneau
//     act 9   checking a source: vérifier / la vérification / vérifiable;
//             fiable / la fiabilité; une source fiable, remonter à la
//             source, croiser les sources, un site douteux, la vérification
//             des faits
//     act 10  judging a story: c’est crédible, ça m’étonnerait, je doute que
//             (+ subjonctif), il me semble que, prendre une info avec des
//             pincettes, avoir l’air vrai; the connectors of lessons 30 to
//             32 in B1
//     act 11  a forum reply that judges whether a story is reliable, and why
//
//   NOT OWNED, CITED BY NUMBER ONLY: the conditional (b1.08) behind the
//   hearsay conditional of act 6 and « ça m’étonnerait »; the passive
//   (b1.18) behind the headline participle of act 3; reported speech
//   (b1.19) behind « a déclaré que » in act 5; the subjunctive (b1.14 to
//   b1.16) used ONLY after « je doute que », « il faut que » and « je
//   propose qu’on » in acts 10 and 11 and nowhere else in authored French;
//   connectors (b1.30 to b1.32) in the forum reply; collocations as a method
//   (b1.33), whose reframe is quoted, never retyped.
//
//   NO UNGRAMMATICAL SENTENCE IS EVER A ROW. Every wrong form lives in a
//   `commonErrors.wrong`, a `trapDrill.promptSound`, a scene `break.wrong`
//   or a quiz `errorSpot.prompt`. The Québec forms (aux nouvelles, le
//   téléjournal, une entrevue, un balado, la mairesse) are rows because they
//   are right, and tagged.
//
//   STORIES ARE INVENTED. No real journalist is named and no real current
//   event is stated as fact. Real outlets appear only as places people read
//   or listen (Le Devoir, Radio-Canada, RFI), never as the source of an
//   invented story. The towns in the fake stories (Saint-Jean, Belle-Rive)
//   and every person are made up.
//
//   APOSTROPHES: every authored French string uses the typographic ’, so a
//   scenario never mixes ’ and ' (the app check). Reused seed rows keep
//   their straight ' and are never quoted inside the scenario.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `journalisme` exists (« Le journalisme », domain technologie,
//     levelRange b1-b2, examFlag true, subThemes [] in the seed). The brief
//     for this lesson names three sub-themes: « la presse et
//     l’information », « les réseaux et la radio-télé », « vrai ou faux :
//     lire les médias ». Setting them is a Postgres edit for the import
//     step, not for this file.
//  2. ID BLOCK: b1.34 owns `fr.b1.journalisme.1000`-`.1199` AND NOTHING
//     ELSE (brief, 2026-09-27: everything below 1000 is published). Used:
//     `.1000`-`.1185`, 186 rows in eleven act blocks. Compare full ids,
//     never numbers: the level is part of the id.
//  3. THE SEED CARRIES 12 journalisme ROWS (6 fr.b1, 6 fr.b2), 12
//     reseaux-sociaux rows and 108 internet rows, read on 2026-09-27. The
//     reused ones are in §F with their French. Postgres was NOT probed for
//     twins by this author: DB_ONLY_TWINS is empty on purpose and the
//     dedupe pass at import must fill it (build log, twins decision).
//  4. Also reused: the hearsay conditional rows of b1.08
//     (projets-et-futur .760-.766), the reported-speech row of b1.19, the
//     passive row of b1.18, the headline rows of b1.37 and the opinion row
//     of b1.33, all published in v75. Seed respellings are NEVER printed in
//     a section (some close a nasal with a plain n: `ray-dahk-SYOHN`), only
//     fr/en.
//  5. NO AUTHORED ROW REPEATS A PUBLISHED B1 HEADWORD (the flashcard-hub
//     duplicate rule): the scratch check compared every `fr` against the
//     whole seed, folded, and found none.
//  6. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR, all a
//     real /n/ or /m/ written double so `hasPlainNasal` cannot fire:
//       chaîne       SHEHNN              semaine      suh-MEHNN
//       personne     pehr-SONN           Lausanne     loh-ZANN
//       nomme        NOMM
//       démissionnerait  day-mee-syonn-REH  (and -nera, -RA)
//       téléphone    tay-lay-FONN        étonnerait   may-tonn-REH
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
  id: 'b1.34',
  seq: 34,
  title: 'The Media',
  sub: 'Les médias',
  canDo: 'Can follow the main points of news briefs, headlines, radio bulletins and forum threads, tell a confirmed fact from an unconfirmed report, and use about fifty media collocations and twenty-five word families to judge in writing whether a story is reliable, and why',
  prereqUnitIds: ['b1.08', 'b1.18'],
} as const;

export const LESSON_ID = 'b1.34.l1';
export const THEME = 'journalisme';
export const LEVEL = 'b1' as const;

/** ONE block. Everything below 1000 is published; b1.34 owns 1000-1199. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 * ══════════════════════════════════════════════════════════════════════════ */

export const CONDITIONNEL_UNIT = 'b1.08';
export const SUBJ_FORM_UNIT = 'b1.14';
export const SUBJ_DECL_UNIT = 'b1.15';
export const SUBJ_INF_UNIT = 'b1.16';
export const PASSIF_UNIT = 'b1.18';
export const DISCOURS_UNIT = 'b1.19';
export const COORDINATION_UNIT = 'b1.30';
export const SUBORDINATION_UNIT = 'b1.31';
export const CONCESSION_UNIT = 'b1.32';
export const ENVIRONNEMENT_UNIT = 'b1.33';
export const EMOTIONS_UNIT = 'b1.35';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13, 'b1.14': 14, 'b1.15': 15, 'b1.16': 16, 'b1.17': 17, 'b1.18': 18,
  'b1.19': 19, 'b1.20': 20, 'b1.21': 21, 'b1.22': 22, 'b1.23': 23, 'b1.24': 24,
  'b1.25': 25, 'b1.26': 26, 'b1.27': 27, 'b1.28': 28, 'b1.29': 29, 'b1.30': 30,
  'b1.31': 31, 'b1.32': 32, 'b1.33': 33, 'b1.34': 34, 'b1.35': 35,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const CONDITIONNEL_REF = refFr(CONDITIONNEL_UNIT);
export const SUBJ_FORM_REF = refFr(SUBJ_FORM_UNIT);
export const SUBJ_INF_REF = refFr(SUBJ_INF_UNIT);
export const PASSIF_REF = refFr(PASSIF_UNIT);
export const DISCOURS_REF = refFr(DISCOURS_UNIT);
export const COORDINATION_REF = refFr(COORDINATION_UNIT);
export const SUBORDINATION_REF = refFr(SUBORDINATION_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const ENVIRONNEMENT_REF = refFr(ENVIRONNEMENT_UNIT);
export const EMOTIONS_REF = refFr(EMOTIONS_UNIT);

/** Neighbour reframes, re-exported, never retyped. */
export { REFRAME as B108_REFRAME, REFRAME_EN as B108_REFRAME_EN } from './conditionnel-present-corpus.ts';
export { REFRAME as B118_REFRAME, REFRAME_EN as B118_REFRAME_EN } from './voix-passive-corpus.ts';
export { REFRAME as B119_REFRAME, REFRAME_EN as B119_REFRAME_EN } from './discours-indirect-corpus.ts';
export { REFRAME as B133_REFRAME, REFRAME_EN as B133_REFRAME_EN } from './environnement-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  EVERY PIECE OF NEWS HAS A RETURN ADDRESS. Before a learner can judge a
 *  story, they need two things: WHO is saying it (a daily, a radio host, a
 *  witness, the police, an aunt on a family chat, a page created last week)
 *  and HOW it is said (a headline noun, a passive participle, a conditional
 *  that means « not confirmed », a doctored photo, « selon nos sources »
 *  with no source named). Every act answers one of the two questions.
 *
 *  It is NOT « do not trust the media »: act 2 teaches the press as the
 *  place most people get reliable news, and act 9 teaches how to find it.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Devant une info, demande-toi qui la dit, et comment.';
export const REFRAME_EN = 'Faced with a piece of news, ask who is saying it, and how.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Ne crois rien de ce que tu lis.',
    why: 'Cynical and false where the lesson has to hold: acts 2, 4 and 9 teach the daily, the bulletin and the reliable source as the places to check a story against. A learner who believes nothing cannot judge anything.',
  },
  {
    text: 'Le conditionnel, c’est pour les rumeurs.',
    why: 'Too narrow, and misleading: the hearsay conditional is act 6 only, and a conditional in a serious daily (« selon nos informations, l’usine fermerait ») is careful journalism, not gossip.',
  },
  {
    text: 'Apprends les mots des médias par thème.',
    why: 'The isolated-noun list the shapes doc (§2.3) forbids. A learner with « la une, le titre, l’émission » still says « sur les nouvelles » and « l’éditeur du journal ».',
  },
  {
    text: 'Une info vraie a toujours une source.',
    why: 'Half the reframe, and it hides the other half: act 3 (headline grammar), act 6 (the conditional) and act 8 (the doctored photo) are about HOW a thing is said, not who says it.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-27 and its French is in the
 *  trailing comment. `(named only)` rows carry no `flashcard` drill, so no
 *  deckTranche can release them.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a1.metiers.036',                        // un journaliste
    'fr.a1.cafe.073',                           // le journal
    'fr.b1.cafe.005',                           // Elle prend toujours son café en lisant le journal.
    'fr.a2.routines.003',                       // Le soir, ils regardent les informations avant de se coucher.  (named only)
  ],
  act2: [
    'fr.b1.journalisme.001',                    // une rédaction
    'fr.b1.strategies-de-comprehension.1037',   // un article de presse
    'fr.b1.journalisme.004',                    // Ce journaliste a mené une enquête sur la corruption.
  ],
  act3: [
    'fr.b1.journalisme.002',                    // la une
    'fr.b1.strategies-de-comprehension.1048',   // le titre
    'fr.b1.strategies-de-comprehension.1051',   // Le chapeau résume l'article en deux phrases.
    'fr.b1.faits-et-procedures.1044',           // Les résultats ont été publiés ce matin.
  ],
  act4: [
    'fr.a2.objets.021',                         // une radio
    'fr.a1.routines.183',                       // Elle écoute la radio en préparant le repas.
    'fr.a2.internet.185',                       // la baladodiffusion
  ],
  act5: [
    'fr.b1.projets-et-futur.760',               // selon la police
    'fr.b1.projets-et-futur.761',               // d'après le journal
    'fr.b1.paroles-rapportees.1193',            // D'après lui, les travaux ont pris du retard.
    'fr.b1.strategies-de-comprehension.1027',   // Aucun blessé n'est à déplorer, selon les pompiers.
  ],
  act6: [
    'fr.b1.projets-et-futur.762',               // Selon la police, le suspect serait en fuite.
    'fr.b1.projets-et-futur.763',               // D'après le journal, l'usine fermerait en juin.
    'fr.b1.projets-et-futur.766',               // Selon la radio, la grève durerait trois jours.
    'fr.b1.strategies-de-comprehension.1162',   // D'après une association, ce chiffre serait plus faible.
    'fr.b1.opinions-et-avis.1364',              // Il paraît que le loyer va encore augmenter.
  ],
  act7: [
    'fr.b1.reseaux-sociaux.001',                // un abonné
    'fr.b1.reseaux-sociaux.002',                // un réseau social
    'fr.b1.reseaux-sociaux.003',                // partager une publication
    'fr.b1.reseaux-sociaux.005',                // Il s'est abonné au compte de ce journaliste.
  ],
  act8: [
    'fr.b1.journalisme.003',                    // une fausse nouvelle
    'fr.b1.internet.004',                       // Il vaut mieux éviter les liens douteux dans tes messages.
  ],
  act9: [
    'fr.b1.journalisme.005',                    // Avant de partager un article, il faut vérifier ses sources.
    'fr.b1.internet.001',                       // Il vaut mieux vérifier ses sources avant de partager une information.
    'fr.b1.strategies-de-comprehension.1171',   // Un fait se vérifie. Une opinion se discute.
  ],
  act10: [
    'fr.b1.ecologie.1172',                      // à mon avis, selon moi
    'fr.b1.opinions-et-avis.114',               // je doute que
    'fr.b1.opinions-et-avis.107',               // il me semble que
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.a2.routines.003',                       // dictation only
];

/** No `voiceflash` either: never in a `practice` speak section. The lesson
 *  file asserts at load that every import NOT listed here has voiceflash. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.b1.cafe.005',                           // sentence, flashcard, review
  'fr.b1.journalisme.001',                    // flashcard only
  'fr.b1.journalisme.002',                    // flashcard only
  'fr.b1.journalisme.003',                    // flashcard only
  'fr.b1.journalisme.004',                    // flashcard only
  'fr.b1.journalisme.005',                    // flashcard only
  'fr.b1.strategies-de-comprehension.1051',   // flashcard only
  'fr.b1.strategies-de-comprehension.1171',   // flashcard only
  'fr.a1.routines.183',                       // sentence, flashcard, review
  'fr.b1.reseaux-sociaux.001',                // flashcard only
  'fr.b1.reseaux-sociaux.002',                // flashcard only
  'fr.b1.reseaux-sociaux.003',                // flashcard only
  'fr.b1.reseaux-sociaux.005',                // flashcard only
  'fr.b1.internet.004',                       // sentence, flashcard, review
  'fr.b1.internet.001',                       // sentence, flashcard, review
];

/** Published Postgres rows the seed does not carry. NOT PROBED by this
 *  author (§A.3): the import dedupe pass fills this list. */
export const DB_ONLY_TWINS: readonly { dbId: string; fr: string; twin: string }[] = [];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Three kinds of row: a FAMILY row (kind phrase, tag famille: the verb,
 *  the noun, the adjective, the person, in one card), a COLLOCATION row
 *  (kind phrase, tag collocation: the word with its neighbour), and sentence
 *  rows that put them in a real situation. See §A.6 for the respellings.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const GP = ['medias-vocabulaire'];

/** A word family: every member in one card. */
const fam = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes: string): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['famille', ...tags], drills: FCVR, version: 1, register: 'courant', grammarPoints: GP, notes,
});

/** A collocation: the word and its neighbour. */
const col = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes?: string, register: Item['register'] = 'courant'): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['collocation', ...tags], drills: FCVR, version: 1, register, grammarPoints: GP,
  ...(notes ? { notes } : {}),
});

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: 'courant', grammarPoints: GP, ...extra,
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE PAYSAGE DES MÉDIAS ───────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  fam(1000, 'informer, s’informer, l’information, un informateur', 'to inform, to keep up with the news, information, an informant', '/ɛ̃.fɔʁ.me sɛ̃.fɔʁ.me lɛ̃.fɔʁ.ma.sjɔ̃ œ̃.nɛ̃.fɔʁ.ma.tœʁ/', 'ehⁿ-for-MAY, sehⁿ-for-MAY, lehⁿ-for-ma-SYOHⁿ, uh-nehⁿ-for-ma-TUHR', ['information'], 'Famille : le verbe, le verbe pronominal, le nom, la personne. Un informateur donne des infos en secret, à la police ou à un journaliste.'),
  col(1001, 'les nouvelles, les infos', 'the news', '/le nu.vɛl le.zɛ̃.fo/', 'lay noo-VEHL, lay-zehⁿ-FOH', ['information'], 'Toujours au pluriel pour dire the news. Les infos : courant, un peu familier.'),
  col(1002, 'aux nouvelles, aux infos', 'on the news', '/o nu.vɛl o.zɛ̃.fo/', 'oh noo-VEHL, oh-zehⁿ-FOH', ['information', 'quebec', 'variante'], 'Au Québec : aux nouvelles. En France : aux infos, au journal. Jamais sur les nouvelles.'),
  col(1003, 'lire le journal', 'to read the paper', '/liʁ lə ʒuʁ.nal/', 'leer luh zhoor-NAL', ['presse']),
  col(1004, 'écouter la radio', 'to listen to the radio', '/e.ku.te la ʁa.djo/', 'ay-koo-TAY la ra-DYOH', ['radio']),
  col(1005, 'regarder le journal télévisé', 'to watch the TV news', '/ʁə.ɡaʁ.de lə ʒuʁ.nal te.le.vi.ze/', 'ruh-gar-DAY luh zhoor-NAL tay-lay-vee-ZAY', ['tele'], 'En France, on dit aussi le JT. Au Québec et en Suisse, le téléjournal.'),
  col(1006, 's’informer en ligne', 'to get your news online', '/sɛ̃.fɔʁ.me ɑ̃ liɲ/', 'sehⁿ-for-MAY ahⁿ LEENY', ['en-ligne']),
  col(1007, 'être abonné à un journal', 'to subscribe to a newspaper', '/ɛtʁ a.bɔ.ne a œ̃ ʒuʁ.nal/', 'ehtr a-bo-NAY a uhⁿ zhoor-NAL', ['presse']),
  sent(1008, 'Le matin, j’écoute les nouvelles à la radio.', 'In the morning I listen to the news on the radio.', '/lə ma.tɛ̃ ʒe.kut le nu.vɛl a la ʁa.djo/', 'luh ma-TEHⁿ | zhay-KOOT lay noo-VEHL a la ra-DYOH', ['radio'], FCVDR),
  sent(1009, 'Je l’ai vu aux nouvelles hier soir.', 'I saw it on the news last night.', '/ʒə le vy o nu.vɛl jɛʁ swaʁ/', 'zhuh lay VÜ oh noo-VEHL | yehr SWAR', ['information', 'quebec', 'scene'], FCVDR),
  sent(1010, 'Ma grand-mère lit Le Devoir tous les matins.', 'My grandmother reads Le Devoir every morning.', '/ma ɡʁɑ̃.mɛʁ li lə də.vwaʁ tu le ma.tɛ̃/', 'ma grahⁿ-MEHR lee luh duh-VWAR | too lay ma-TEHⁿ', ['presse', 'quebec']),
  sent(1011, 'Mon frère s’informe surtout en ligne, sur son téléphone.', 'My brother gets his news mostly online, on his phone.', '/mɔ̃ fʁɛʁ sɛ̃.fɔʁm syʁ.tu ɑ̃ liɲ syʁ sɔ̃ te.le.fɔn/', 'mohⁿ FREHR sehⁿ-FORM sür-TOO ahⁿ LEENY | sür sohⁿ tay-lay-FONN', ['en-ligne']),
  sent(1012, 'Les journalistes informent le public.', 'Journalists inform the public.', '/le ʒuʁ.na.list ɛ̃.fɔʁm lə py.blik/', 'lay zhoor-na-LEEST ehⁿ-FORM luh pü-BLEEK', ['information']),
  sent(1013, 'On entend une info aux nouvelles, pas sur les nouvelles.', 'You hear something on the news: aux nouvelles, not sur les nouvelles.', '/ɔ̃.nɑ̃.tɑ̃ y.nɛ̃.fo o nu.vɛl pa syʁ le nu.vɛl/', 'ohⁿ-nahⁿ-TAHⁿ ü-nehⁿ-FOH oh noo-VEHL | pa sür lay noo-VEHL', ['rule', 'faux-ami'], ['flashcard'],
    rule('On the news : quelle préposition ?', 'Aux nouvelles, aux infos, au journal. Sur, c’est pour un écran ou un site : sur Internet, sur le site du journal.')),
  sent(1014, REFRAME, REFRAME_EN, '/də.vɑ̃ y.nɛ̃.fo də.mɑ̃d.twa ki la di e kɔ.mɑ̃/', 'duh-VAHⁿ ü-nehⁿ-FOH | duh-mahⁿd-TWA kee la DEE | ay ko-MAHⁿ', ['rule', 'reframe'], ['flashcard'],
    rule('Deux questions devant chaque info : lesquelles ?', 'Qui la dit ? Et comment la dit-il ?')),
  sent(1015, 'Tu t’informes comment, toi ?', 'How do you get your news?', '/ty tɛ̃.fɔʁm kɔ.mɑ̃ twa/', 'tü tehⁿ-FORM ko-MAHⁿ | TWA', ['information']),
  fam(1016, 'un média, les médias, médiatique', 'a media outlet, the media, media (adjective)', '/œ̃ me.dja le me.dja me.dja.tik/', 'uhⁿ may-DYA, lay may-DYA, may-dya-TEEK', ['information'], 'Un média : un journal, une radio, une chaîne, un site. Au pluriel : les médias. Un sujet médiatique : on en parle partout.'),
];

/* ── ACT 2 · LA PRESSE ÉCRITE ────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  fam(1017, 'un quotidien, un hebdomadaire, un mensuel', 'a daily, a weekly, a monthly', '/œ̃ kɔ.ti.djɛ̃ œ̃.nɛb.dɔ.ma.dɛʁ œ̃ mɑ̃.sɥɛl/', 'uhⁿ ko-tee-DYEHⁿ, uh-nehb-do-ma-DEHR, uhⁿ mahⁿ-SWEHL', ['presse'], 'Le rythme du journal : chaque jour, chaque semaine (on dit aussi un hebdo), chaque mois.'),
  fam(1018, 'rédiger, la rédaction, un rédacteur, une rédactrice', 'to write up, the newsroom, a writer on the staff', '/ʁe.di.ʒe la ʁe.dak.sjɔ̃ œ̃ ʁe.dak.tœʁ yn ʁe.dak.tʁis/', 'ray-dee-ZHAY, la ray-dak-SYOHⁿ, uhⁿ ray-dak-TUHR, ün ray-dak-TREESS', ['presse'], 'La rédaction : l’équipe qui fait le journal, et aussi le texte que tu rédiges.'),
  col(1019, 'le rédacteur en chef', 'the editor-in-chief', '/lə ʁe.dak.tœʁ ɑ̃ ʃɛf/', 'luh ray-dak-TUHR ahⁿ SHEHF', ['presse', 'faux-ami'], 'Pas l’éditeur : l’éditeur publie des livres.'),
  fam(1020, 'publier, une publication, publié', 'to publish, a publication, published', '/py.bli.je yn py.bli.ka.sjɔ̃ py.bli.je/', 'pü-blee-YAY, ün pü-blee-ka-SYOHⁿ, pü-blee-YAY', ['presse'], 'Une publication : un journal, une revue, et sur les réseaux, un message qu’on publie.'),
  col(1021, 'publier un article', 'to publish an article', '/py.bli.je œ̃.naʁ.tikl/', 'pü-blee-YAY uh-nar-TEEKL', ['presse']),
  col(1022, 'une rubrique', 'a section of a paper', '/yn ʁy.bʁik/', 'ün rü-BREEK', ['presse'], 'La rubrique sports, la rubrique culture, la rubrique économie.'),
  col(1023, 'un éditorial, une chronique', 'an editorial, a column', '/œ̃.ne.di.tɔ.ʁjal yn kʁɔ.nik/', 'uh-nay-dee-to-RYAL, ün kro-NEEK', ['presse'], 'L’éditorial donne l’avis du journal. La chronique donne l’avis d’une personne, souvent chaque semaine.'),
  col(1024, 'le courrier des lecteurs', "readers' letters", '/lə ku.ʁje de lɛk.tœʁ/', 'luh koo-RYAY day lehk-TUHR', ['presse']),
  sent(1025, 'Ce quotidien sort tous les matins, sauf le dimanche.', 'This daily comes out every morning except Sunday.', '/sə kɔ.ti.djɛ̃ sɔʁ tu le ma.tɛ̃ sof lə di.mɑ̃ʃ/', 'suh ko-tee-DYEHⁿ SOR too lay ma-TEHⁿ | sohf luh dee-MAHⁿSH', ['presse']),
  sent(1026, 'Je lis un hebdo le week-end, pour prendre le temps.', 'I read a weekly at the weekend, to take my time.', '/ʒə li œ̃.nɛb.do lə wi.kɛnd puʁ pʁɑ̃dʁ lə tɑ̃/', 'zhuh lee uh-nehb-DOH luh wee-KEHND | poor prahⁿdr luh TAHⁿ', ['presse'], FCVDR),
  sent(1027, 'La rédaction a publié un article sur les loyers.', 'The newsroom published an article on rents.', '/la ʁe.dak.sjɔ̃ a py.bli.je œ̃.naʁ.tikl syʁ le lwa.je/', 'la ray-dak-SYOHⁿ a pü-blee-YAY | uh-nar-TEEKL sür lay lwa-YAY', ['presse']),
  sent(1028, 'Elle écrit une chronique chaque semaine dans un hebdo de Lausanne.', 'She writes a column every week in a Lausanne weekly.', '/ɛ.le.kʁi yn kʁɔ.nik ʃak sə.mɛn dɑ̃.zœ̃.nɛb.do də lo.zan/', 'eh-lay-KREE ün kro-NEEK | shak suh-MEHNN | dahⁿ-zuh-nehb-DOH duh loh-ZANN', ['presse', 'suisse']),
  sent(1029, 'Je commence toujours par la rubrique sports.', 'I always start with the sports section.', '/ʒə kɔ.mɑ̃s tu.ʒuʁ paʁ la ʁy.bʁik spɔʁ/', 'zhuh ko-MAHⁿSS too-ZHOOR | par la rü-BREEK SPOR', ['presse']),
  sent(1030, 'Le rédacteur en chef a écrit l’éditorial du jour.', "The editor-in-chief wrote the day's editorial.", '/lə ʁe.dak.tœʁ ɑ̃ ʃɛf a e.kʁi le.di.tɔ.ʁjal dy ʒuʁ/', 'luh ray-dak-TUHR ahⁿ SHEHF | a ay-KREE lay-dee-to-RYAL dü ZHOOR', ['presse', 'faux-ami'], FCVDR),
  sent(1031, 'J’ai envoyé une lettre au courrier des lecteurs.', "I sent a letter to the readers' letters page.", '/ʒe ɑ̃.vwa.je yn lɛtʁ o ku.ʁje de lɛk.tœʁ/', 'zhay ahⁿ-vwa-YAY ün LEHTR | oh koo-RYAY day lehk-TUHR', ['presse'], FCVDR),
  sent(1032, 'L’éditeur publie des livres ; le rédacteur en chef dirige un journal.', 'A publisher publishes books; an editor-in-chief runs a paper.', '/le.di.tœʁ py.bli de livʁ lə ʁe.dak.tœʁ ɑ̃ ʃɛf di.ʁiʒ œ̃ ʒuʁ.nal/', 'lay-dee-TUHR pü-BLEE day LEEVR | luh ray-dak-TUHR ahⁿ SHEHF dee-REEZH uhⁿ zhoor-NAL', ['rule', 'faux-ami'], ['flashcard'],
    rule('The editor of a newspaper, en français ?', 'Le rédacteur en chef. L’éditeur, c’est la maison qui publie des livres.')),
  sent(1033, 'Ce journal est gratuit, mais il vit de la publicité.', 'This paper is free, but it lives off advertising.', '/sə ʒuʁ.nal ɛ ɡʁa.tɥi mɛ il vi də la py.bli.si.te/', 'suh zhoor-NAL eh gra-TWEE | meh eel VEE duh la pü-blee-see-TAY', ['presse', 'faux-ami']),
];

/* ── ACT 3 · LIRE UN TITRE ───────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  fam(1034, 'démissionner, la démission', 'to resign, resignation', '/de.mi.sjɔ.ne la de.mi.sjɔ̃/', 'day-mee-syo-NAY, la day-mee-SYOHⁿ', ['titre'], 'Le titre garde le nom : « Démission du ministre ».'),
  fam(1035, 'fermer, la fermeture', 'to close, closure', '/fɛʁ.me la fɛʁ.mə.tyʁ/', 'fehr-MAY, la fehr-muh-TÜR', ['titre'], 'Le titre garde le nom : « Fermeture de l’usine ».'),
  fam(1036, 'augmenter, la hausse ; baisser, la baisse', 'to rise, a rise; to fall, a fall', '/oɡ.mɑ̃.te la os bɛ.se la bɛs/', 'ohg-mahⁿ-TAY, la OHSS ; beh-SAY, la BEHSS', ['titre'], 'Dans un titre : hausse des loyers, baisse du chômage. On dit la hausse, sans élision.'),
  fam(1037, 'élire, l’élection, élu', 'to elect, the election, elected', '/e.liʁ le.lɛk.sjɔ̃ e.ly/', 'ay-LEER, lay-lehk-SYOHⁿ, ay-LÜ', ['titre'], 'Le titre garde le participe : « Une nouvelle mairesse élue ».'),
  fam(1038, 'arrêter, l’arrestation', 'to arrest, the arrest', '/a.ʁɛ.te la.ʁɛs.ta.sjɔ̃/', 'a-reh-TAY, la-rehs-ta-SYOHⁿ', ['titre'], 'Le titre garde le participe : « Deux suspects arrêtés ».'),
  col(1039, 'faire la une', 'to make the front page', '/fɛʁ la yn/', 'fehr la ÜN', ['titre'], 'La une : la première page. On dit la une, sans élision.'),
  col(1040, 'le titre et le chapeau', 'the headline and the standfirst', '/lə titʁ e lə ʃa.po/', 'luh TEETR ay luh sha-POH', ['titre'], 'Le chapeau : les deux ou trois lignes en gras sous le titre.'),
  sent(1041, 'Démission du ministre des Transports', 'Transport minister resigns', '/de.mi.sjɔ̃ dy mi.nistʁ de tʁɑ̃s.pɔʁ/', 'day-mee-SYOHⁿ dü mee-NEESTR day trahⁿs-POR', ['titre']),
  sent(1042, 'Le ministre des Transports a démissionné.', 'The transport minister has resigned.', '/lə mi.nistʁ de tʁɑ̃s.pɔʁ a de.mi.sjɔ.ne/', 'luh mee-NEESTR day trahⁿs-POR | a day-mee-syo-NAY', ['titre'], FCVDR),
  sent(1043, 'Fermeture de l’usine : deux cents emplois menacés', 'Factory closure: two hundred jobs under threat', '/fɛʁ.mə.tyʁ də ly.zin dø sɑ̃.zɑ̃.plwa mə.na.se/', 'fehr-muh-TÜR duh lü-ZEEN | deu sahⁿ-zahⁿ-PLWA muh-na-SAY', ['titre', 'passif']),
  sent(1044, 'Hausse des loyers à Montréal', 'Rents rise in Montréal', '/os de lwa.je a mɔ̃.ʁe.al/', 'OHSS day lwa-YAY a mohⁿ-ray-AL', ['titre', 'quebec']),
  sent(1045, 'Une nouvelle mairesse élue à Sherbrooke', 'New mayor elected in Sherbrooke', '/yn nu.vɛl mɛ.ʁɛs e.ly a ʃɛʁ.bʁuk/', 'ün noo-VEHL meh-REHSS ay-LÜ a shehr-BROOK', ['titre', 'passif', 'quebec']),
  sent(1046, 'Une nouvelle mairesse a été élue à Sherbrooke.', 'A new mayor has been elected in Sherbrooke.', '/yn nu.vɛl mɛ.ʁɛs a e.te e.ly a ʃɛʁ.bʁuk/', 'ün noo-VEHL meh-REHSS | a ay-TAY ay-LÜ a shehr-BROOK', ['titre', 'passif', 'quebec'], FCVDR),
  sent(1047, 'Deux suspects arrêtés après le vol d’un tableau', 'Two suspects arrested after painting theft', '/dø sys.pɛ a.ʁɛ.te a.pʁɛ lə vɔl dœ̃ ta.blo/', 'deu süs-PEH a-reh-TAY | a-preh luh VOL duhⁿ ta-BLOH', ['titre', 'passif']),
  sent(1048, 'Deux suspects ont été arrêtés après le vol d’un tableau.', 'Two suspects have been arrested after the theft of a painting.', '/dø sys.pɛ ɔ̃.te.te a.ʁɛ.te a.pʁɛ lə vɔl dœ̃ ta.blo/', 'deu süs-PEH ohⁿ-tay-TAY a-reh-TAY | a-preh luh VOL duhⁿ ta-BLOH', ['titre', 'passif']),
  sent(1049, 'Cette histoire a fait la une de tous les journaux.', 'This story made the front page of every paper.', '/sɛ.tis.twaʁ a fɛ la yn də tu le ʒuʁ.no/', 'seh-tees-TWAR a feh la ÜN | duh too lay zhoor-NOH', ['titre'], FCVDR),
  sent(1050, 'Un titre enlève les petits mots et garde le nom.', 'A headline drops the little words and keeps the noun.', '/œ̃ titʁ ɑ̃.lɛv le pə.ti mo e ɡaʁd lə nɔ̃/', 'uhⁿ TEETR ahⁿ-LEHV lay puh-tee MOH | ay gard luh NOHⁿ', ['rule', 'titre'], ['flashcard'],
    rule('« Démission du ministre » : quelle est la phrase complète ?', 'Le ministre a démissionné. Le titre change le verbe en nom et enlève l’article.')),
  sent(1051, 'Sous le titre, le chapeau donne l’essentiel.', 'Under the headline, the standfirst gives the gist.', '/su lə titʁ lə ʃa.po dɔn le.sɑ̃.sjɛl/', 'soo luh TEETR | luh sha-POH donn lay-sahⁿ-SYEHL', ['titre']),
];

/* ── ACT 4 · LA RADIO ET LA TÉLÉ ─────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  fam(1052, 'diffuser, la diffusion', 'to broadcast, broadcasting', '/di.fy.ze la di.fy.zjɔ̃/', 'dee-fü-ZAY, la dee-fü-ZYOHⁿ', ['radio', 'tele'], 'Une émission est diffusée à la radio ou à la télé.'),
  col(1053, 'une émission, une chaîne', 'a programme, a channel', '/y.ne.mi.sjɔ̃ yn ʃɛn/', 'ü-nay-mee-SYOHⁿ, ün SHEHNN', ['tele', 'faux-ami'], 'Une émission passe sur une chaîne de télé ou sur une station de radio.'),
  col(1054, 'en direct, en différé', 'live, pre-recorded', '/ɑ̃ di.ʁɛkt ɑ̃ di.fe.ʁe/', 'ahⁿ dee-REHKT, ahⁿ dee-fay-RAY', ['radio', 'tele']),
  col(1055, 'le bulletin de nouvelles', 'the news bulletin', '/lə byl.tɛ̃ də nu.vɛl/', 'luh bül-TEHⁿ duh noo-VEHL', ['radio', 'quebec', 'variante'], 'Au Québec : le bulletin de nouvelles. En France : le journal, le flash info.'),
  col(1056, 'faire un reportage', 'to do a report', '/fɛʁ œ̃ ʁə.pɔʁ.taʒ/', 'fehr uhⁿ ruh-por-TAZH', ['tele'], 'Un reportage raconte une histoire sur place, avec des images et des témoins.'),
  fam(1057, 'animer, un animateur, une animatrice', 'to host, a host', '/a.ni.me œ̃.na.ni.ma.tœʁ y.na.ni.ma.tʁis/', 'a-nee-MAY, uh-na-nee-ma-TUHR, ü-na-nee-ma-TREESS', ['radio', 'tele'], 'L’animatrice anime l’émission : elle pose les questions et reçoit les invités.'),
  fam(1058, 'un auditeur, un téléspectateur, un lecteur', 'a listener, a viewer, a reader', '/œ̃.no.di.tœʁ œ̃ te.le.spɛk.ta.tœʁ œ̃ lɛk.tœʁ/', 'uh-noh-dee-TUHR, uhⁿ tay-lay-spehk-ta-TUHR, uhⁿ lehk-TUHR', ['radio', 'tele'], 'Chaque média a son public : les auditeurs à la radio, les téléspectateurs à la télé, les lecteurs du journal.'),
  col(1059, 'une entrevue, une interview', 'an interview', '/y.nɑ̃.tʁə.vy y.nɛ̃.tɛʁ.vju/', 'ü-nahⁿ-truh-VÜ, ü-nehⁿ-tehr-VYOO', ['tele', 'quebec', 'variante'], 'Au Québec : une entrevue. En France : une interview.'),
  col(1060, 'un balado, un podcast', 'a podcast', '/œ̃ ba.la.do œ̃ pɔd.kast/', 'uhⁿ ba-la-DOH, uhⁿ pod-KAST', ['radio', 'quebec', 'variante'], 'Au Québec : un balado. En France et en Belgique : un podcast.'),
  sent(1061, 'L’émission est diffusée en direct tous les soirs.', 'The programme is broadcast live every evening.', '/le.mi.sjɔ̃ ɛ di.fy.ze ɑ̃ di.ʁɛkt tu le swaʁ/', 'lay-mee-SYOHⁿ eh dee-fü-ZAY ahⁿ dee-REHKT | too lay SWAR', ['tele'], FCVDR),
  sent(1062, 'Le téléjournal commence à dix-huit heures.', 'The TV news starts at six o’clock.', '/lə te.le.ʒuʁ.nal kɔ.mɑ̃s a di.zɥi.tœʁ/', 'luh tay-lay-zhoor-NAL ko-MAHⁿSS | a dee-zwee-TUHR', ['tele', 'quebec']),
  sent(1063, 'L’animatrice a reçu une ministre dans son émission.', 'The host had a minister on her programme.', '/la.ni.ma.tʁis a ʁə.sy yn mi.nistʁ dɑ̃ sɔ̃.ne.mi.sjɔ̃/', 'la-nee-ma-TREESS a ruh-SÜ ün mee-NEESTR | dahⁿ soh-nay-mee-SYOHⁿ', ['radio']),
  sent(1064, 'Notre envoyée spéciale est à Dakar.', 'Our special correspondent is in Dakar.', '/nɔ.tʁɑ̃.vwa.je spe.sjal ɛ.ta da.kaʁ/', 'no-trahⁿ-vwa-YAY spay-SYAL | eh-ta da-KAR', ['radio', 'senegal']),
  sent(1065, 'Les auditeurs peuvent appeler pendant l’émission.', 'Listeners can call in during the programme.', '/le.zo.di.tœʁ pœv a.pə.le pɑ̃.dɑ̃ le.mi.sjɔ̃/', 'lay-zoh-dee-TUHR puhv a-puh-LAY | pahⁿ-dahⁿ lay-mee-SYOHⁿ', ['radio'], FCVDR),
  sent(1066, 'J’écoute ce balado en marchant.', 'I listen to this podcast while walking.', '/ʒe.kut sə ba.la.do ɑ̃ maʁ.ʃɑ̃/', 'zhay-KOOT suh ba-la-DOH | ahⁿ mar-SHAHⁿ', ['radio', 'quebec'], FCVDR),
  sent(1067, 'À la télé, une émission, c’est ce que l’anglais appelle a programme.', 'On TV, une émission is what English calls a programme.', '/a la te.le y.ne.mi.sjɔ̃ sɛ sə kə lɑ̃.ɡlɛ a.pɛl a pʁo.ɡʁam/', 'a la tay-LAY | ü-nay-mee-SYOHⁿ | seh suh kuh lahⁿ-GLEH a-PEHL a pro-GRAMM', ['rule', 'faux-ami'], ['flashcard'],
    rule('A TV programme, en français ?', 'Une émission. Le programme, c’est la liste des émissions de la soirée.')),
  sent(1068, 'Le reportage a été tourné dans un village du Sénégal.', 'The report was filmed in a village in Senegal.', '/lə ʁə.pɔʁ.taʒ a e.te tuʁ.ne dɑ̃.zœ̃ vi.laʒ dy se.ne.ɡal/', 'luh ruh-por-TAZH a ay-TAY toor-NAY | dahⁿ-zuhⁿ vee-LAZH dü say-nay-GAL', ['tele', 'senegal']),
];

/* ── ACT 5 · QUI DIT QUOI ────────────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  col(1069, 'selon le ministère, d’après les témoins', 'according to the ministry, according to witnesses', '/sə.lɔ̃ lə mi.nis.tɛʁ da.pʁɛ le te.mwɛ̃/', 'suh-lohⁿ luh mee-nees-TEHR, da-preh lay tay-MWEHⁿ', ['source'], 'Selon et d’après + la personne ou l’organisme qui parle.'),
  col(1070, 'de source sûre', 'from a reliable source', '/də suʁs syʁ/', 'duh soorss SÜR', ['source']),
  fam(1071, 'déclarer, une déclaration', 'to state, a statement', '/de.kla.ʁe yn de.kla.ʁa.sjɔ̃/', 'day-kla-RAY, ün day-kla-ra-SYOHⁿ', ['source'], 'On fait une déclaration. Le ministre a déclaré que...'),
  fam(1072, 'annoncer, une annonce', 'to announce, an announcement', '/a.nɔ̃.se y.na.nɔ̃s/', 'a-nohⁿ-SAY, ü-na-NOHⁿSS', ['source'], 'La mairie annonce une décision ; on lit l’annonce.'),
  fam(1073, 'témoigner, un témoin, un témoignage', 'to testify, a witness, an account', '/te.mwa.ɲe œ̃ te.mwɛ̃ œ̃ te.mwa.ɲaʒ/', 'tay-mwa-NYAY, uhⁿ tay-MWEHⁿ, uhⁿ tay-mwa-NYAZH', ['source'], 'Le témoin a vu. Il témoigne. Ce qu’il raconte, c’est son témoignage.'),
  fam(1074, 'citer, une citation', 'to quote, a quotation', '/si.te yn si.ta.sjɔ̃/', 'see-TAY, ün see-ta-SYOHⁿ', ['source'], 'Citer quelqu’un : répéter ses mots exacts, entre guillemets.'),
  col(1075, 'un porte-parole', 'a spokesperson', '/œ̃ pɔʁt.pa.ʁɔl/', 'uhⁿ port-pa-ROL', ['source'], 'Le mot ne change pas : un porte-parole, une porte-parole, des porte-parole.'),
  sent(1076, 'Selon le ministère, les examens auront lieu en juin.', 'According to the ministry, the exams will take place in June.', '/sə.lɔ̃ lə mi.nis.tɛʁ le.zɛɡ.za.mɛ̃ o.ʁɔ̃ ljø ɑ̃ ʒɥɛ̃/', 'suh-lohⁿ luh mee-nees-TEHR | lay-zehg-za-MEHⁿ oh-rohⁿ LYEU ahⁿ ZHWEHⁿ', ['source'], FCVDR),
  sent(1077, 'D’après les témoins, le camion roulait très vite.', 'According to witnesses, the truck was going very fast.', '/da.pʁɛ le te.mwɛ̃ lə ka.mjɔ̃ ʁu.lɛ tʁɛ vit/', 'da-preh lay tay-MWEHⁿ | luh ka-MYOHⁿ roo-LEH treh VEET', ['source']),
  sent(1078, 'La porte-parole de la police a fait une déclaration ce matin.', 'The police spokesperson made a statement this morning.', '/la pɔʁt.pa.ʁɔl də la pɔ.lis a fɛ yn de.kla.ʁa.sjɔ̃ sə ma.tɛ̃/', 'la port-pa-ROL duh la po-LEESS | a feh ün day-kla-ra-SYOHⁿ suh ma-TEHⁿ', ['source'], FCVDR),
  sent(1079, 'La mairie a annoncé la fermeture du pont pour deux semaines.', 'The town hall announced the bridge closure for two weeks.', '/la mɛ.ʁi a a.nɔ̃.se la fɛʁ.mə.tyʁ dy pɔ̃ puʁ dø smɛn/', 'la meh-REE a a-nohⁿ-SAY la fehr-muh-TÜR dü POHⁿ | poor deu SMEHNN', ['source']),
  sent(1080, 'Une voisine a témoigné devant la caméra.', 'A neighbour gave her account on camera.', '/yn vwa.zin a te.mwa.ɲe də.vɑ̃ la ka.me.ʁa/', 'ün vwa-ZEEN a tay-mwa-NYAY | duh-vahⁿ la ka-may-RA', ['source']),
  sent(1081, 'Le journaliste cite ses sources à la fin de l’article.', 'The journalist cites his sources at the end of the article.', '/lə ʒuʁ.na.list sit se suʁs a la fɛ̃ də laʁ.tikl/', 'luh zhoor-na-LEEST SEET say SOORSS | a la FEHⁿ duh lar-TEEKL', ['source'], FCVDR),
  sent(1082, 'Le ministre a déclaré qu’il ne démissionnerait pas.', 'The minister stated that he would not resign.', '/lə mi.nistʁ a de.kla.ʁe kil nə de.mi.sjɔn.ʁɛ pa/', 'luh mee-NEESTR a day-kla-RAY | keel nuh day-mee-syonn-REH PA', ['source', 'discours-indirect']),
  sent(1083, 'Je le sais de source sûre, mais je ne peux pas dire qui.', 'I know it from a reliable source, but I cannot say who.', '/ʒə lə sɛ də suʁs syʁ mɛ ʒə nə pø pa diʁ ki/', 'zhuh luh SEH duh soorss SÜR | meh zhuh nuh peu pa deer KEE', ['source']),
  sent(1084, 'Selon qui ? La réponse dit d’où vient l’info.', 'According to whom? The answer tells you where the news comes from.', '/sə.lɔ̃ ki la ʁe.pɔ̃s di du vjɛ̃ lɛ̃.fo/', 'suh-lohⁿ KEE | la ray-POHⁿSS dee doo vyehⁿ lehⁿ-FOH', ['rule', 'source'], ['flashcard'],
    rule('« Selon la police, trois blessés » : qui dit qu’il y a trois blessés ?', 'La police, pas le journal. Le journal rapporte ce que dit la police.')),
  sent(1085, 'Plusieurs témoignages disent la même chose.', 'Several accounts say the same thing.', '/ply.zjœʁ te.mwa.ɲaʒ diz la mɛm ʃoz/', 'plü-zyuhr tay-mwa-NYAZH | deez la mem SHOHZ', ['source']),
];

/* ── ACT 6 · L’INFO PAS ENCORE CONFIRMÉE ─────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  fam(1086, 'confirmer, la confirmation, confirmé', 'to confirm, confirmation, confirmed', '/kɔ̃.fiʁ.me la kɔ̃.fiʁ.ma.sjɔ̃ kɔ̃.fiʁ.me/', 'kohⁿ-feer-MAY, la kohⁿ-feer-ma-SYOHⁿ, kohⁿ-feer-MAY', ['ondit'], 'Une info confirmée est sûre : une source officielle l’a dite.'),
  fam(1087, 'démentir, un démenti', 'to deny, a denial', '/de.mɑ̃.tiʁ œ̃ de.mɑ̃.ti/', 'day-mahⁿ-TEER, uhⁿ day-mahⁿ-TEE', ['ondit'], 'Démentir, c’est dire publiquement qu’une info est fausse.'),
  col(1088, 'une rumeur court', 'a rumour is going round', '/yn ʁy.mœʁ kuʁ/', 'ün rü-muhr KOOR', ['ondit'], 'Une rumeur court, ou circule. À l’oral : il paraît que...'),
  col(1089, 'sous réserve de confirmation', 'subject to confirmation', '/su ʁe.zɛʁv də kɔ̃.fiʁ.ma.sjɔ̃/', 'soo ray-ZEHRV duh kohⁿ-feer-ma-SYOHⁿ', ['ondit']),
  col(1090, 'une information non confirmée', 'an unconfirmed report', '/y.nɛ̃.fɔʁ.ma.sjɔ̃ nɔ̃ kɔ̃.fiʁ.me/', 'ü-nehⁿ-for-ma-SYOHⁿ nohⁿ kohⁿ-feer-MAY', ['ondit']),
  sent(1091, 'Le ministre démissionnerait dans les prochains jours.', 'The minister is reportedly about to resign in the coming days.', '/lə mi.nistʁ de.mi.sjɔn.ʁɛ dɑ̃ le pʁɔ.ʃɛ̃ ʒuʁ/', 'luh mee-NEESTR day-mee-syonn-REH | dahⁿ lay pro-shehⁿ ZHOOR', ['ondit', 'conditionnel'], FCVDR),
  sent(1092, 'Selon nos informations, l’usine fermerait en décembre.', 'According to our information, the factory is set to close in December.', '/sə.lɔ̃ no.zɛ̃.fɔʁ.ma.sjɔ̃ ly.zin fɛʁ.mə.ʁɛ ɑ̃ de.sɑ̃bʁ/', 'suh-lohⁿ noh-zehⁿ-for-ma-SYOHⁿ | lü-ZEEN fehr-muh-REH ahⁿ day-SAHⁿBR', ['ondit', 'conditionnel']),
  sent(1093, 'L’incendie aurait fait deux blessés.', 'The fire reportedly left two people injured.', '/lɛ̃.sɑ̃.di o.ʁɛ fɛ dø ble.se/', 'lehⁿ-sahⁿ-DEE oh-reh FEH | deu bleh-SAY', ['ondit', 'conditionnel'], FCVDR),
  sent(1094, 'La chanteuse serait malade, mais rien n’est confirmé.', 'The singer is said to be ill, but nothing is confirmed.', '/la ʃɑ̃.tøz sə.ʁɛ ma.lad mɛ ʁjɛ̃ nɛ kɔ̃.fiʁ.me/', 'la shahⁿ-TEUZ suh-reh ma-LAD | meh ryehⁿ neh kohⁿ-feer-MAY', ['ondit', 'conditionnel']),
  sent(1095, 'Le ministère a démenti la rumeur ce matin.', 'The ministry denied the rumour this morning.', '/lə mi.nis.tɛʁ a de.mɑ̃.ti la ʁy.mœʁ sə ma.tɛ̃/', 'luh mee-nees-TEHR a day-mahⁿ-TEE la rü-MUHR | suh ma-TEHⁿ', ['ondit']),
  sent(1096, 'La police a confirmé l’arrestation de deux suspects.', 'The police confirmed the arrest of two suspects.', '/la pɔ.lis a kɔ̃.fiʁ.me la.ʁɛs.ta.sjɔ̃ də dø sys.pɛ/', 'la po-LEESS a kohⁿ-feer-MAY | la-rehs-ta-SYOHⁿ duh deu süs-PEH', ['ondit'], FCVDR),
  sent(1097, 'Le ministre démissionnera : c’est confirmé.', 'The minister will resign: it is confirmed.', '/lə mi.nistʁ de.mi.sjɔn.ʁa sɛ kɔ̃.fiʁ.me/', 'luh mee-NEESTR day-mee-syonn-RA | seh kohⁿ-feer-MAY', ['ondit', 'futur']),
  sent(1098, 'Une rumeur court sur les réseaux : le festival serait annulé.', 'A rumour is going round online: the festival has supposedly been cancelled.', '/yn ʁy.mœʁ kuʁ syʁ le ʁe.zo lə fɛs.ti.val sə.ʁɛ.ta.ny.le/', 'ün rü-muhr KOOR sür lay ray-ZOH | luh fehs-tee-VAL suh-reh-ta-nü-LAY', ['ondit', 'conditionnel']),
  sent(1099, 'Au conditionnel, le journaliste dit : on me l’a dit, je ne l’ai pas encore vérifié.', 'In the conditional, the journalist is saying: I was told, I have not checked yet.', '/o kɔ̃.di.sjɔ.nɛl lə ʒuʁ.na.list di ɔ̃ mə la di ʒə nə le pa.zɑ̃.kɔʁ ve.ʁi.fje/', 'oh kohⁿ-dee-syo-NEHL luh zhoor-na-LEEST DEE | ohⁿ muh la DEE | zhuh nuh lay pa-zahⁿ-kor vay-ree-FYAY', ['rule', 'ondit'], ['flashcard'],
    rule('« Le ministre démissionnerait » : c’est sûr ?', 'Non. Le conditionnel dit que l’info n’est pas encore confirmée.')),
  sent(1100, 'Il paraît que le festival est annulé, mais personne ne l’a confirmé.', 'Apparently the festival is cancelled, but nobody has confirmed it.', '/il pa.ʁɛ kə lə fɛs.ti.val ɛ.ta.ny.le mɛ pɛʁ.sɔn nə la kɔ̃.fiʁ.me/', 'eel pa-REH kuh luh fehs-tee-VAL eh-ta-nü-LAY | meh pehr-SONN nuh la kohⁿ-feer-MAY', ['ondit'], FCVDR),
  sent(1101, 'Attendons la confirmation avant de partager.', "Let's wait for confirmation before sharing.", '/a.tɑ̃.dɔ̃ la kɔ̃.fiʁ.ma.sjɔ̃ a.vɑ̃ də paʁ.ta.ʒe/', 'a-tahⁿ-DOHⁿ la kohⁿ-feer-ma-SYOHⁿ | a-vahⁿ duh par-ta-ZHAY', ['ondit']),
];

/* ── ACT 7 · LES RÉSEAUX SOCIAUX ─────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  fam(1102, 's’abonner, un abonnement, un abonné', 'to subscribe or follow, a subscription, a follower', '/sa.bɔ.ne œ̃.na.bɔn.mɑ̃ œ̃.na.bɔ.ne/', 'sa-bo-NAY, uh-na-bonn-MAHⁿ, uh-na-bo-NAY', ['reseaux'], 'On s’abonne à un journal ou à un compte. Un abonné : celui qui suit le compte.'),
  fam(1103, 'partager, un partage', 'to share, a share', '/paʁ.ta.ʒe œ̃ paʁ.taʒ/', 'par-ta-ZHAY, uhⁿ par-TAZH', ['reseaux'], 'On partage une publication, une vidéo, un article.'),
  col(1104, 'suivre un compte', 'to follow an account', '/sɥivʁ œ̃ kɔ̃t/', 'sweevr uhⁿ KOHⁿT', ['reseaux']),
  col(1105, 'relayer une info', 'to pass a story on', '/ʁə.le.je y.nɛ̃.fo/', 'ruh-lay-YAY ü-nehⁿ-FOH', ['reseaux', 'relais'], 'Relayer : faire passer plus loin, comme dans une course de relais.'),
  fam(1106, 'commenter, un commentaire', 'to comment on, a comment', '/kɔ.mɑ̃.te œ̃ kɔ.mɑ̃.tɛʁ/', 'ko-mahⁿ-TAY, uhⁿ ko-mahⁿ-TEHR', ['reseaux'], 'On commente une publication, sans « sur ».'),
  col(1107, 'une publication virale', 'a viral post', '/yn py.bli.ka.sjɔ̃ vi.ʁal/', 'ün pü-blee-ka-SYOHⁿ vee-RAL', ['reseaux']),
  col(1108, 'devenir viral', 'to go viral', '/də.və.niʁ vi.ʁal/', 'duh-vuh-NEER vee-RAL', ['reseaux'], 'L’adjectif s’accorde : une vidéo devient virale.'),
  col(1109, 'le fil d’actualité', 'the news feed', '/lə fil dak.tɥa.li.te/', 'luh FEEL dak-twa-lee-TAY', ['reseaux', 'faux-ami'], 'L’actualité : ce qui se passe maintenant. Pas actually, qui se dit en fait.'),
  col(1110, 'aimer une publication, liker', 'to like a post', '/e.me yn py.bli.ka.sjɔ̃ laj.ke/', 'ay-MAY ün pü-blee-ka-SYOHⁿ, lahy-KAY', ['reseaux'], 'Liker, un like : familier et très courant. Au Québec, on voit aussi mettre un j’aime.', 'familier'),
  sent(1111, 'Ce compte a dix mille abonnés.', 'This account has ten thousand followers.', '/sə kɔ̃t a di mil a.bɔ.ne/', 'suh KOHⁿT a dee MEEL a-bo-NAY', ['reseaux']),
  sent(1112, 'Ma tante partage tout ce qu’elle lit, sans vérifier.', 'My aunt shares everything she reads, without checking.', '/ma tɑ̃t paʁ.taʒ tu sə kɛl li sɑ̃ ve.ʁi.fje/', 'ma TAHⁿT par-TAZH too suh kehl LEE | sahⁿ vay-ree-FYAY', ['reseaux', 'relais'], FCVDR),
  sent(1113, 'Des milliers de personnes ont relayé la vidéo.', 'Thousands of people passed the video on.', '/de mi.lje də pɛʁ.sɔn ɔ̃ ʁə.le.je la vi.de.o/', 'day mee-LYAY duh pehr-SONN | ohⁿ ruh-lay-YAY la vee-day-OH', ['reseaux', 'relais']),
  sent(1114, 'Sa publication est devenue virale en une nuit.', 'Her post went viral overnight.', '/sa py.bli.ka.sjɔ̃ ɛ də.və.ny vi.ʁal ɑ̃.nyn nɥi/', 'sa pü-blee-ka-SYOHⁿ eh duh-vuh-NÜ vee-RAL | ahⁿ-nün NWEE', ['reseaux'], FCVDR),
  sent(1115, 'Je ne lis jamais les commentaires sous les articles.', 'I never read the comments under articles.', '/ʒə nə li ʒa.mɛ le kɔ.mɑ̃.tɛʁ su le.zaʁ.tikl/', 'zhuh nuh lee zha-MEH lay ko-mahⁿ-TEHR | soo lay-zar-TEEKL', ['reseaux']),
  sent(1116, 'Dans mon fil d’actualité, je vois surtout des vidéos.', 'In my feed I mostly see videos.', '/dɑ̃ mɔ̃ fil dak.tɥa.li.te ʒə vwa syʁ.tu de vi.de.o/', 'dahⁿ mohⁿ FEEL dak-twa-lee-TAY | zhuh vwa sür-TOO day vee-day-OH', ['reseaux'], FCVDR),
  sent(1117, 'Sur les réseaux, on partage une info, et d’autres la relaient plus loin.', 'On social media you share a story, and others pass it further on.', '/syʁ le ʁe.zo ɔ̃ paʁ.taʒ y.nɛ̃.fo e do.tʁə la ʁə.lɛ ply lwɛ̃/', 'sür lay ray-ZOH | ohⁿ par-TAZH ü-nehⁿ-FOH | ay doh-truh la ruh-LEH plü LWEHⁿ', ['rule', 'relais'], ['flashcard'],
    rule('To share a post, en français ?', 'Partager une publication. Relayer une info, c’est la faire circuler plus loin.')),
  sent(1118, 'Une influenceuse a relayé la rumeur à ses abonnés.', 'An influencer passed the rumour on to her followers.', '/y.nɛ̃.fly.ɑ̃.søz a ʁə.le.je la ʁy.mœʁ a se.za.bɔ.ne/', 'ü-nehⁿ-flü-ahⁿ-SEUZ a ruh-lay-YAY la rü-MUHR | a say-za-bo-NAY', ['reseaux', 'relais']),
  sent(1119, 'Je me suis désabonné de ce compte.', 'I unfollowed this account.', '/ʒə mə sɥi de.za.bɔ.ne də sə kɔ̃t/', 'zhuh muh swee day-za-bo-NAY | duh suh KOHⁿT', ['reseaux']),
];

/* ── ACT 8 · VRAI OU FAUX ────────────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  col(1120, 'une fausse nouvelle, une infox', 'a piece of fake news', '/yn fos nu.vɛl y.nɛ̃.fɔks/', 'ün fohss noo-VEHL, ü-nehⁿ-FOX', ['infox', 'variante'], 'Au Québec, on dit surtout fausse nouvelle. En France, infox est le mot officiel. Fake news s’entend partout.'),
  fam(1121, 'désinformer, la désinformation', 'to mislead the public, disinformation', '/de.zɛ̃.fɔʁ.me la de.zɛ̃.fɔʁ.ma.sjɔ̃/', 'day-zehⁿ-for-MAY, la day-zehⁿ-for-ma-SYOHⁿ', ['infox'], 'La même famille qu’informer, avec dé- : le contraire.'),
  col(1122, 'circuler sur les réseaux', 'to go round on social media', '/siʁ.ky.le syʁ le ʁe.zo/', 'seer-kü-LAY sür lay ray-ZOH', ['infox']),
  col(1123, 'une photo truquée', 'a doctored photo', '/yn fɔ.to tʁy.ke/', 'ün fo-TOH trü-KAY', ['infox']),
  col(1124, 'un canular', 'a hoax', '/œ̃ ka.ny.laʁ/', 'uhⁿ ka-nü-LAR', ['infox']),
  fam(1125, 'manipuler, la manipulation', 'to manipulate, manipulation', '/ma.ni.py.le la ma.ni.py.la.sjɔ̃/', 'ma-nee-pü-LAY, la ma-nee-pü-la-SYOHⁿ', ['infox'], 'Manipuler une photo, une info : la changer pour tromper.'),
  col(1126, 'se méfier de', 'to be wary of', '/sə me.fje də/', 'suh may-FYAY duh', ['infox']),
  col(1127, 'tomber dans le panneau', 'to fall for it', '/tɔ̃.be dɑ̃ lə pa.no/', 'tohⁿ-BAY dahⁿ luh pa-NOH', ['infox'], 'Mot à mot : tomber dans le piège. En anglais : to fall for it.', 'familier'),
  sent(1128, 'Cette photo est truquée : le pont n’a jamais été inondé.', 'This photo is doctored: the bridge was never flooded.', '/sɛt fɔ.to ɛ tʁy.ke lə pɔ̃ na ʒa.mɛ e.te i.nɔ̃.de/', 'seht fo-TOH eh trü-KAY | luh POHⁿ na zha-meh ay-TAY ee-nohⁿ-DAY', ['infox'], FCVDR),
  sent(1129, 'Une fausse nouvelle circule sur les réseaux depuis hier.', 'A piece of fake news has been going round online since yesterday.', '/yn fos nu.vɛl siʁ.kyl syʁ le ʁe.zo də.pɥi jɛʁ/', 'ün fohss noo-VEHL seer-KÜL sür lay ray-ZOH | duh-pwee YEHR', ['infox'], FCVDR),
  sent(1130, 'Beaucoup de gens sont tombés dans le panneau.', 'Lots of people fell for it.', '/bo.ku də ʒɑ̃ sɔ̃ tɔ̃.be dɑ̃ lə pa.no/', 'boh-koo duh ZHAHⁿ | sohⁿ tohⁿ-BAY dahⁿ luh pa-NOH', ['infox']),
  sent(1131, 'C’était un canular : l’article venait d’un faux site.', 'It was a hoax: the article came from a fake site.', '/se.tɛ œ̃ ka.ny.laʁ laʁ.tikl və.nɛ dœ̃ fo sit/', 'say-TEH uhⁿ ka-nü-LAR | lar-TEEKL vuh-NEH duhⁿ foh SEET', ['infox'], FCVDR),
  sent(1132, 'Méfie-toi des titres qui font peur.', 'Be wary of headlines that scare you.', '/me.fi.twa de titʁ ki fɔ̃ pœʁ/', 'may-fee-TWA day TEETR | kee fohⁿ PUHR', ['infox']),
  sent(1133, 'Souvent, une infox se partage plus vite qu’une vraie nouvelle.', 'Fake news often spreads faster than real news.', '/su.vɑ̃ y.nɛ̃.fɔks sə paʁ.taʒ ply vit kyn vʁɛ nu.vɛl/', 'soo-VAHⁿ | ü-nehⁿ-FOX suh par-TAZH | plü VEET kün vreh noo-VEHL', ['infox']),
  sent(1134, 'Une nouvelle, au singulier, c’est une seule info, vraie ou fausse.', 'Une nouvelle, in the singular, is a single piece of news, true or false.', '/yn nu.vɛl o sɛ̃.ɡy.lje sɛ.tyn sœl ɛ̃.fo vʁɛ u fos/', 'ün noo-VEHL | oh sehⁿ-gü-LYAY | seh-tün suhl ehⁿ-FOH | vreh oo FOHSS', ['rule', 'infox'], ['flashcard'],
    rule('The news, ou a piece of news : quelle différence ?', 'Les nouvelles, au pluriel : le bulletin. Une nouvelle : une seule info.')),
  sent(1135, 'Le but de la désinformation, c’est de tromper le public.', 'The aim of disinformation is to deceive the public.', '/lə byt də la de.zɛ̃.fɔʁ.ma.sjɔ̃ sɛ də tʁɔ̃.pe lə py.blik/', 'luh BÜT duh la day-zehⁿ-for-ma-SYOHⁿ | seh duh trohⁿ-PAY luh pü-BLEEK', ['infox']),
];

/* ── ACT 9 · VÉRIFIER UNE SOURCE ─────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  fam(1136, 'vérifier, la vérification, vérifiable', 'to check, checking, verifiable', '/ve.ʁi.fje la ve.ʁi.fi.ka.sjɔ̃ ve.ʁi.fjabl/', 'vay-ree-FYAY, la vay-ree-fee-ka-SYOHⁿ, vay-ree-FYABL', ['verifier'], 'Vérifiable : on peut le vérifier. Vérifié : c’est déjà fait.'),
  fam(1137, 'fiable, la fiabilité', 'reliable, reliability', '/fjabl la fja.bi.li.te/', 'FYABL, la fya-bee-lee-TAY', ['verifier'], 'Une source fiable : on peut lui faire confiance. Au Québec, on entend aussi une source crédible.'),
  col(1138, 'une source fiable', 'a reliable source', '/yn suʁs fjabl/', 'ün soorss FYABL', ['verifier']),
  col(1139, 'vérifier une source', 'to check a source', '/ve.ʁi.fje yn suʁs/', 'vay-ree-FYAY ün SOORSS', ['verifier']),
  col(1140, 'remonter à la source', 'to go back to the source', '/ʁə.mɔ̃.te a la suʁs/', 'ruh-mohⁿ-TAY a la SOORSS', ['verifier'], 'Comme une rivière : tu remontes jusqu’à l’endroit où l’info est née.'),
  col(1141, 'croiser les sources', 'to cross-check sources', '/kʁwa.ze le suʁs/', 'krwa-ZAY lay SOORSS', ['verifier'], 'On dit aussi recouper les sources.'),
  col(1142, 'un site douteux', 'a dubious website', '/œ̃ sit du.tø/', 'uhⁿ SEET doo-TEU', ['verifier']),
  col(1143, 'la vérification des faits', 'fact-checking', '/la ve.ʁi.fi.ka.sjɔ̃ de fɛ/', 'la vay-ree-fee-ka-SYOHⁿ day FEH', ['verifier']),
  sent(1144, 'Avant de partager, je vérifie qui a publié l’info.', 'Before sharing, I check who published the story.', '/a.vɑ̃ də paʁ.ta.ʒe ʒə ve.ʁi.fi ki a py.bli.je lɛ̃.fo/', 'a-vahⁿ duh par-ta-ZHAY | zhuh vay-ree-FEE kee a pü-blee-YAY lehⁿ-FOH', ['verifier'], FCVDR),
  sent(1145, 'Cette source est fiable : c’est une agence de presse.', 'This source is reliable: it is a news agency.', '/sɛt suʁs ɛ fjabl sɛ.ty.na.ʒɑ̃s də pʁɛs/', 'seht SOORSS eh FYABL | seh-tü-na-ZHAHⁿSS duh PREHSS', ['verifier']),
  sent(1146, 'J’ai croisé trois sources avant d’y croire.', 'I cross-checked three sources before believing it.', '/ʒe kʁwa.ze tʁwa suʁs a.vɑ̃ di kʁwaʁ/', 'zhay krwa-ZAY trwa SOORSS | a-vahⁿ dee KRWAR', ['verifier'], FCVDR),
  sent(1147, 'Ce site est douteux : il n’y a ni date ni auteur.', 'This site is dubious: there is no date and no author.', '/sə sit ɛ du.tø il nja ni dat ni o.tœʁ/', 'suh SEET eh doo-TEU | eel nya nee DAT nee oh-TUHR', ['verifier'], FCVDR),
  sent(1148, 'Je suis remontée à la source : la citation était fausse.', 'I went back to the source: the quote was false.', '/ʒə sɥi ʁə.mɔ̃.te a la suʁs la si.ta.sjɔ̃ e.tɛ fos/', 'zhuh swee ruh-mohⁿ-TAY a la SOORSS | la see-ta-SYOHⁿ ay-teh FOHSS', ['verifier']),
  sent(1149, 'L’article a trois ans : il ne parle pas d’aujourd’hui.', 'The article is three years old: it is not about today.', '/laʁ.tikl a tʁwa.zɑ̃ il nə paʁl pa do.ʒuʁ.dɥi/', 'lar-TEEKL a trwa-ZAHⁿ | eel nuh parl pa doh-zhoor-DWEE', ['verifier']),
  sent(1150, 'Une image peut être vérifiée avec une recherche inversée.', 'An image can be checked with a reverse search.', '/y.ni.maʒ pø.tɛtʁ ve.ʁi.fje a.vɛk yn ʁə.ʃɛʁʃ ɛ̃.vɛʁ.se/', 'ü-nee-MAZH peu-tehtr vay-ree-FYAY | a-vehk ün ruh-SHEHRSH ehⁿ-vehr-SAY', ['verifier']),
  sent(1151, 'Une source fiable dit qui elle est, quand elle écrit et d’où vient l’info.', 'A reliable source says who it is, when it is writing and where the story comes from.', '/yn suʁs fjabl di ki ɛ.lɛ kɑ̃.tɛ.le.kʁi e du vjɛ̃ lɛ̃.fo/', 'ün soorss FYABL dee kee eh-LEH | kahⁿ-teh-lay-KREE | ay doo vyehⁿ lehⁿ-FOH', ['rule', 'verifier'], ['flashcard'],
    rule('Trois questions pour vérifier une source ?', 'Qui l’a écrit ? Quand ? D’où vient l’info ?')),
  sent(1152, 'Ce site de vérification des faits a démenti la rumeur.', 'This fact-checking site debunked the rumour.', '/sə sit də ve.ʁi.fi.ka.sjɔ̃ de fɛ a de.mɑ̃.ti la ʁy.mœʁ/', 'suh SEET duh vay-ree-fee-ka-SYOHⁿ day FEH | a day-mahⁿ-TEE la rü-MUHR', ['verifier']),
];

/* ── ACT 10 · JUGER UNE INFO ─────────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  col(1153, 'c’est crédible, ce n’est pas crédible', 'it is believable, it is not believable', '/sɛ kʁe.dibl sə nɛ pa kʁe.dibl/', 'seh kray-DEEBL, suh neh pa kray-DEEBL', ['avis']),
  col(1154, 'ça m’étonnerait', 'I would be surprised', '/sa me.tɔn.ʁɛ/', 'sa may-tonn-REH', ['avis', 'conditionnel'], 'Le conditionnel adoucit le doute.'),
  fam(1155, 'douter, le doute, douteux', 'to doubt, doubt, dubious', '/du.te lə dut du.tø/', 'doo-TAY, luh DOOT, doo-TEU', ['avis', 'subjonctif'], 'Je doute que ce soit vrai : après je doute que, le subjonctif. Un site douteux : on doute de lui.'),
  col(1156, 'à première vue', 'at first sight', '/a pʁə.mjɛʁ vy/', 'a pruh-myehr VÜ', ['avis'], 'À première vue, l’info a l’air vraie. Après vérification, on voit si elle l’est.'),
  col(1157, 'prendre une info avec des pincettes', 'to take a story with a pinch of salt', '/pʁɑ̃dʁ y.nɛ̃.fo a.vɛk de pɛ̃.sɛt/', 'prahⁿdr ü-nehⁿ-FOH | a-vehk day pehⁿ-SEHT', ['avis'], 'Mot à mot : avec des petites pinces, sans la toucher. L’anglais dit with a pinch of salt.', 'familier'),
  col(1158, 'avoir l’air vrai', 'to look true', '/a.vwaʁ lɛʁ vʁɛ/', 'a-vwar lehr VREH', ['avis'], 'L’adjectif s’accorde souvent avec le sujet : cette histoire a l’air vraie.'),
  sent(1159, 'À mon avis, cette info n’est pas crédible.', 'In my opinion, this story is not believable.', '/a mɔ̃.na.vi sɛ.tɛ̃.fo nɛ pa kʁe.dibl/', 'a mohⁿ-na-VEE | seh-tehⁿ-FOH neh pa kray-DEEBL', ['avis'], FCVDR),
  sent(1160, 'Je doute que cette photo soit vraie.', 'I doubt this photo is real.', '/ʒə dut kə sɛt fɔ.to swa vʁɛ/', 'zhuh DOOT kuh seht fo-TOH | swa VREH', ['avis', 'subjonctif'], FCVDR),
  sent(1161, 'Ça m’étonnerait : aucun journal n’en parle.', 'I would be surprised: no paper is reporting it.', '/sa me.tɔn.ʁɛ o.kœ̃ ʒuʁ.nal nɑ̃ paʁl/', 'sa may-tonn-REH | oh-kuhⁿ zhoor-NAL nahⁿ PARL', ['avis', 'conditionnel']),
  sent(1162, 'Il me semble que l’article oublie une partie de l’histoire.', 'It seems to me the article leaves out part of the story.', '/il mə sɑ̃bl kə laʁ.tikl u.bli yn paʁ.ti də lis.twaʁ/', 'eel muh SAHⁿBL | kuh lar-TEEKL oo-BLEE ün par-TEE duh lees-TWAR', ['avis']),
  sent(1163, 'D’un côté, la source est connue ; de l’autre, il n’y a aucune preuve.', 'On the one hand the source is known; on the other there is no proof.', '/dœ̃ ko.te la suʁs ɛ kɔ.ny də lotʁ il nja o.kyn pʁœv/', 'duhⁿ ko-TAY | la SOORSS eh ko-NÜ | duh LOHTR | eel nya oh-kün PRUHV', ['avis', 'connecteur']),
  sent(1164, 'Même si l’info vient d’un ami, il faut la vérifier.', 'Even if the story comes from a friend, you have to check it.', '/mɛm si lɛ̃.fo vjɛ̃ dœ̃.na.mi il fo la ve.ʁi.fje/', 'mem see lehⁿ-FOH vyehⁿ duhⁿ-na-MEE | eel foh la vay-ree-FYAY', ['avis', 'connecteur'], FCVDR),
  sent(1165, 'L’article cite deux sources ; pourtant, je reste prudent.', 'The article cites two sources; even so, I remain cautious.', '/laʁ.tikl sit dø suʁs puʁ.tɑ̃ ʒə ʁɛst pʁy.dɑ̃/', 'lar-TEEKL SEET deu SOORSS | poor-TAHⁿ | zhuh rehst prü-DAHⁿ', ['avis', 'connecteur']),
  sent(1166, 'Il n’y a pas de source, donc je ne le partage pas.', 'There is no source, so I am not sharing it.', '/il nja pa də suʁs dɔ̃k ʒə nə lə paʁ.taʒ pa/', 'eel nya pa duh SOORSS | dohⁿk zhuh nuh luh par-TAZH PA', ['avis', 'connecteur'], FCVDR),
  sent(1167, 'Je prends cette info avec des pincettes.', 'I am taking this story with a pinch of salt.', '/ʒə pʁɑ̃ sɛ.tɛ̃.fo a.vɛk de pɛ̃.sɛt/', 'zhuh PRAHⁿ seh-tehⁿ-FOH | a-vehk day pehⁿ-SEHT', ['avis']),
  sent(1168, 'Cette histoire a l’air vraie, mais elle ne cite personne.', 'This story looks true, but it quotes nobody.', '/sɛ.tis.twaʁ a lɛʁ vʁɛ mɛ ɛl nə sit pɛʁ.sɔn/', 'seh-tees-TWAR a lehr VREH | meh ehl nuh seet pehr-SONN', ['avis']),
  sent(1169, 'Un bon avis sur une info dit ce que tu penses, et pourquoi.', 'A good opinion on a story says what you think, and why.', '/œ̃ bɔ̃.na.vi syʁ y.nɛ̃.fo di sə kə ty pɑ̃s e puʁ.kwa/', 'uhⁿ boh-na-VEE sür ü-nehⁿ-FOH | dee suh kuh tü PAHⁿSS | ay poor-KWA', ['rule', 'avis'], ['flashcard'],
    rule('Pour juger une info, qu’est-ce que tu donnes en plus de ton avis ?', 'Une raison : la source, la date, les preuves.')),
  sent(1170, 'C’est pourquoi je ne crois pas à cette histoire.', 'That is why I do not believe this story.', '/sɛ puʁ.kwa ʒə nə kʁwa pa a sɛ.tis.twaʁ/', 'seh poor-KWA | zhuh nuh krwa PA a seh-tees-TWAR', ['avis', 'connecteur']),
];

/* ── ACT 11 · À TOI DE RÉAGIR ────────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1171, 'Moi aussi, j’ai vu cette publication.', 'I saw this post too.', '/mwa o.si ʒe vy sɛt py.bli.ka.sjɔ̃/', 'mwa oh-SEE | zhay vü seht pü-blee-ka-SYOHⁿ', ['reponse']),
  sent(1172, 'À mon avis, cette info n’est pas fiable, pour trois raisons.', 'In my opinion this story is not reliable, for three reasons.', '/a mɔ̃.na.vi sɛ.tɛ̃.fo nɛ pa fjabl puʁ tʁwa ʁɛ.zɔ̃/', 'a mohⁿ-na-VEE | seh-tehⁿ-FOH neh pa FYABL | poor trwa reh-ZOHⁿ', ['reponse'], FCVDR),
  sent(1173, 'D’abord, elle ne cite aucune source.', 'First, it does not cite any source.', '/da.bɔʁ ɛl nə sit o.kyn suʁs/', 'da-BOR | ehl nuh seet oh-kün SOORSS', ['reponse', 'connecteur']),
  sent(1174, 'Ensuite, aucun média sérieux n’en parle.', 'Next, no serious outlet is reporting it.', '/ɑ̃.sɥit o.kœ̃ me.dja se.ʁjø nɑ̃ paʁl/', 'ahⁿ-SWEET | oh-kuhⁿ may-DYA say-RYEU nahⁿ PARL', ['reponse', 'connecteur']),
  sent(1175, 'Pourtant, la photo a l’air vraie.', 'Even so, the photo looks real.', '/puʁ.tɑ̃ la fɔ.to a lɛʁ vʁɛ/', 'poor-TAHⁿ | la fo-TOH a lehr VREH', ['reponse', 'connecteur']),
  sent(1176, 'Il faut attendre une confirmation officielle.', 'We need to wait for official confirmation.', '/il fo a.tɑ̃dʁ yn kɔ̃.fiʁ.ma.sjɔ̃ ɔ.fi.sjɛl/', 'eel foh a-TAHⁿDR | ün kohⁿ-feer-ma-SYOHⁿ o-fee-SYEHL', ['reponse'], FCVDR),
  sent(1177, 'Je propose qu’on attende avant de relayer.', 'I suggest we wait before passing it on.', '/ʒə pʁɔ.pɔz kɔ̃.na.tɑ̃d a.vɑ̃ də ʁə.le.je/', 'zhuh pro-POHZ kohⁿ-na-TAHⁿD | a-vahⁿ duh ruh-lay-YAY', ['reponse', 'subjonctif']),
  sent(1178, 'Tu as raison, je n’avais pas vérifié.', 'You are right, I had not checked.', '/ty a ʁɛ.zɔ̃ ʒə na.vɛ pa ve.ʁi.fje/', 'tü a reh-ZOHⁿ | zhuh na-veh pa vay-ree-FYAY', ['reponse']),
  sent(1179, 'Merci d’avoir vérifié avant de partager.', 'Thanks for checking before sharing.', '/mɛʁ.si da.vwaʁ ve.ʁi.fje a.vɑ̃ də paʁ.ta.ʒe/', 'mehr-SEE da-vwar vay-ree-FYAY | a-vahⁿ duh par-ta-ZHAY', ['reponse']),
  sent(1180, 'Si c’est vrai, les journaux en parleront demain.', 'If it is true, the papers will report it tomorrow.', '/si sɛ vʁɛ le ʒuʁ.no ɑ̃ paʁ.lə.ʁɔ̃ də.mɛ̃/', 'see seh VREH | lay zhoor-NOH ahⁿ par-luh-ROHⁿ duh-MEHⁿ', ['reponse'], FCVDR),
  sent(1181, 'Je vais chercher l’article original.', 'I am going to look for the original article.', '/ʒə vɛ ʃɛʁ.ʃe laʁ.tikl ɔ.ʁi.ʒi.nal/', 'zhuh veh shehr-SHAY | lar-TEEKL o-ree-zhee-NAL', ['reponse']),
  sent(1182, 'Cette nouvelle nous fait plaisir, mais elle n’est pas confirmée.', 'This news makes us happy, but it is not confirmed.', '/sɛt nu.vɛl nu fɛ plɛ.ziʁ mɛ ɛl nɛ pa kɔ̃.fiʁ.me/', 'seht noo-VEHL noo feh pleh-ZEER | meh ehl neh pa kohⁿ-feer-MAY', ['reponse']),
  sent(1183, 'Le texte dit « selon nos sources », mais il n’en nomme aucune.', 'The text says « according to our sources », but it names none.', '/lə tɛkst di sə.lɔ̃ no suʁs mɛ il nɑ̃ nɔm o.kyn/', 'luh TEHKST DEE suh-lohⁿ noh SOORSS | meh eel nahⁿ NOMM oh-KÜN', ['reponse']),
  sent(1184, 'Je ne partage rien sans savoir qui l’a écrit.', 'I share nothing without knowing who wrote it.', '/ʒə nə paʁ.taʒ ʁjɛ̃ sɑ̃ sa.vwaʁ ki la e.kʁi/', 'zhuh nuh par-TAZH RYEHⁿ | sahⁿ sa-VWAR kee la ay-KREE', ['reponse'], FCVDR),
  sent(1185, 'Merci pour ta réponse, je vais attendre.', 'Thanks for your reply, I will wait.', '/mɛʁ.si puʁ ta ʁe.pɔ̃s ʒə vɛ a.tɑ̃dʁ/', 'mehr-SEE poor ta ray-POHⁿSS | zhuh veh a-TAHⁿDR', ['reponse']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. INDEXES
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** The word families (tag famille) and collocations (tag collocation). */
export const FAMILY_IDS = ALL_ROWS.filter((r) => r.tags.includes('famille') && r.kind === 'phrase').map((r) => r.id);
export const COLLOCATION_IDS = ALL_ROWS.filter((r) => r.tags.includes('collocation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS
 *
 *  Every reading lives here so the reading, the quiz and the task agree.
 *  Word counts are measured by the scratch check, not claimed. All the
 *  stories, people and fictional places are invented.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: a magazine survey, four readers, four ways to get the news. */
export const PAYSAGE_TEXT =
  'Comment vous informez-vous ? Notre magazine a posé la question à quatre lecteurs. Louise, 71 ans, Montréal : « Je suis abonnée au Devoir depuis quarante ans. Je lis le journal papier le matin, avec mon café, et je regarde le téléjournal le soir. » Moussa, 34 ans, Dakar : « Moi, j’écoute la radio dans le bus. RFI le matin, puis une radio locale en wolof. Les nouvelles du quartier, c’est là que je les entends. » Chloé, 22 ans, Liège : « Je m’informe en ligne, surtout sur mon téléphone. Je suis quelques médias sur les réseaux, et j’écoute des podcasts. » Marc, 48 ans, Genève : « Je lis un quotidien en ligne, et le week-end, un hebdomadaire. J’aime prendre le temps de lire des articles longs. » Et vous, où entendez-vous les infos : aux nouvelles, à la radio ou sur votre écran ?';

/** Act 3: a small-town front page. Five headlines, then the brief behind
 *  the first one. Headline grammar on purpose: nouns, participles, no
 *  articles. */
export const UNE_TEXT =
  'L’Écho de l’Estrie, mardi. À la une : « Une nouvelle mairesse élue à Sherbrooke ». En page deux : « Hausse des loyers : les étudiants inquiets », « Fermeture de l’usine de meubles : cent emplois menacés », « Deux suspects arrêtés après le vol d’un tableau ». Rubrique sports : « Victoire de l’équipe locale à domicile ». La brève du jour. Dimanche soir, Julie Gagnon a été élue mairesse de Sherbrooke avec cinquante-deux pour cent des voix. Elle remplace le maire sortant, qui ne se présentait pas. Pendant la campagne, elle a promis de construire des logements pour les étudiants et de rénover les pistes cyclables. Lundi matin, elle a remercié les électeurs et a annoncé ses premières décisions. Le nouveau conseil municipal sera présenté jeudi. Selon plusieurs commerçants du centre-ville, la hausse des loyers sera son premier défi.';

/** Act 4: the transcript of a morning bulletin on an invented Dakar radio. */
export const BULLETIN_TEXT =
  'Radio Baobab, il est sept heures. Bonjour à toutes et à tous, voici le journal. D’abord, la météo : forte chaleur attendue aujourd’hui à Dakar, jusqu’à trente-huit degrés. En ville, la circulation est déjà difficile sur la corniche. Ensuite, l’éducation : le ministère a annoncé hier soir la date des examens de fin d’année. Notre envoyée spéciale est à Thiès, où les élèves et les parents attendaient cette nouvelle. Elle a recueilli leurs témoignages pour notre reportage de midi. Au programme de la matinée : à neuf heures, notre émission en direct avec les auditeurs, sur le prix des produits au marché. Vous pouvez appeler le standard ou nous écrire sur nos réseaux. Enfin, le sport : la finale du tournoi des quartiers se joue ce soir, et le match sera diffusé en direct sur notre antenne. Restez avec nous. Prochain bulletin à huit heures.';

/** Act 5: a news brief built on who says what. One conditional at the end,
 *  on purpose: it is the bridge to act 6. */
export const BREVE_TEXT =
  'Accident sur l’autoroute : trois blessés. Un camion et deux voitures sont entrés en collision hier soir, près de Drummondville. Selon la police, trois personnes ont été blessées, dont une gravement. D’après les témoins, le camion roulait très vite sous la pluie. Un automobiliste qui suivait les voitures a témoigné à notre micro : « J’ai vu le camion glisser, puis tout s’est passé en deux secondes. » La porte-parole de la police a fait une déclaration ce matin. Elle a annoncé qu’une enquête était ouverte et a demandé aux témoins de se manifester. L’autoroute a été fermée pendant quatre heures. Le ministère des Transports n’a pas encore réagi. Selon une source à l’hôpital, les blessés seraient hors de danger. Nous mettrons cet article à jour dans la journée.';

/** Act 8: a neighbourhood forum thread about a doctored photo. Invented
 *  town, invented bridge, invented people. */
export const FORUM_TEXT =
  'Forum Vivre à Saint-Jean. Sujet : le pont fermé pendant un an ? Mélanie : Bonjour, une amie a partagé cette publication ce matin. On y voit le pont sous l’eau, et le texte dit qu’il sera fermé pendant un an. Quelqu’un sait si c’est vrai ? Karim : Je l’ai vue aussi, elle circule partout depuis hier. Mais méfie-toi : la photo me semble truquée. Regarde les arbres, ils ont des feuilles, et on est en février. Mélanie : Tu as raison, je n’avais pas remarqué. Julien : C’est un canular. La page qui l’a publiée ne cite aucune source, et le site de la ville ne dit rien. Beaucoup de gens sont tombés dans le panneau. Mélanie : Merci. Je vais dire à mon amie de retirer sa publication avant qu’elle devienne virale.';

/** Act 9: a fact-check post. Invented Belgian commune, invented quote. */
export const VERIF_TEXT =
  'Vérification des faits. L’affirmation : « Le bourgmestre de Belle-Rive veut interdire les chiens dans les parcs. » Notre verdict : faux. Cette phrase circule depuis lundi sur les réseaux, avec une photo du bourgmestre. Elle a été partagée plus de dix mille fois. Nous avons vérifié. D’abord, nous sommes remontés à la source : la publication vient d’une page créée il y a une semaine, sans nom d’auteur. Ensuite, nous avons cherché la citation dans les articles de presse et sur les comptes de la commune : elle n’existe nulle part. Enfin, nous avons appelé la porte-parole de la commune, qui a démenti. En réalité, la commune a seulement proposé de tenir les chiens en laisse près des jeux pour enfants. Notre conseil : avant de relayer une citation, cherche qui l’a dite, quand, et dans quel média.';

/** Act 11: the model forum reply. Inside the task's own bounds (100 to 140
 *  words, greeting and sign-off excluded), with the connectors of lessons
 *  30 to 32 in B1. */
export const REPONSE_TEXT =
  'Bonjour à tous. Moi aussi, j’ai vu cette publication sur le métro gratuit dès lundi, et je l’ai presque partagée. Mais à mon avis, cette info n’est pas fiable, pour trois raisons. D’abord, elle ne cite aucune source : ni la ville, ni la société de transport, ni un journal. Ensuite, je suis remontée à la source : la page qui l’a publiée a été créée la semaine dernière. De plus, aucun média sérieux n’en parle, ni à la radio ni dans les journaux. Pourtant, la photo a l’air vraie, et c’est pourquoi tant de gens tombent dans le panneau. Même si cette nouvelle nous fait plaisir, il faut attendre une confirmation officielle. Je propose qu’on attende avant de relayer. Bonne soirée, Sophie';

/** The blocks REPONSE_TEXT uses, in order: the task checklist and round 11
 *  are built on this list. */
export const REPONSE_BLOCKS = [
  'cette publication', 'pas fiable', 'cite aucune source', 'remontée à la source',
  'aucun média sérieux', 'a l’air vraie', 'tombent dans le panneau', 'une confirmation officielle', 'relayer',
] as const;
