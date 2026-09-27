// b1.26.l1 « Tu ou vous » : the authored corpus, the imports and the citation
// constants. DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md,
// in the WORKSHOP shape of B1-WORKSHOP-AND-VOCAB-SHAPES.md §1.
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
//   TU AGAINST VOUS AS A SYSTEM. b1.09 named it as its own boundary (its
//   REFRAME_REJECTED: « b1.26 owns tu against vous. Here vous is a setting »),
//   so this lesson is the single source of:
//
//     1  the problem: a Montréal tu dropped into a Lyon law firm
//     2  the default: vous for strangers, shops, offices, work; tu for
//        friends, family, children, peers of your age
//     3  switching: on peut se tutoyer, on se dit tu, tu peux me tutoyer,
//        accepting, keeping vous kindly
//     4  who offers: the older or senior person; the junior waits
//     5  workplace cultures (start-ups and trades tu, administrations and
//        law firms vous) and families (parents-in-law vouvoyés)
//     6  singular vous grammar: the verb follows vous, the adjective and the
//        participle follow the real person (Vous êtes gentille, Madame)
//     7  the echoes: te/vous, ton ta tes / votre vos, viens / venez,
//        assieds-toi / asseyez-vous, toi / vous after a preposition
//     8  the slip, what it sounds like, and the three-word repair
//     9  emails: Madame, Monsieur / Bonjour Maître / Bonjour Julie / Salut
//    10  francophone variation: Québec, Belgium, Switzerland, West Africa
//    11  two messages, same news, two distances: the graded task
//
//   NOT OWNED, CITED ONLY:
//     a1.05  subject pronouns, and vous as polite singular AND plain plural
//            (its « vous » term: « One word, two jobs »; its rows
//            fr.a1.cafe.176 to .178 are reused here verbatim)
//     b1.09  the politeness ladder inside vous and inside tu (its REFRAME is
//            imported and quoted, never retyped)
//     b1.21  inversion in vous questions (Pourriez-vous) as a register (its
//            REFRAME is imported and quoted)
//     b1.25  REGISTER in general (« Les registres de langue », written in
//            parallel). tu / vous is ONE register marker; everything else
//            about register is pointed at b1.25 and never taught here.
//     a2.22  pronominal verbs: assieds-toi / asseyez-vous are used as forms.
//     THE SUBJUNCTIVE (b1.14 to b1.16) is kept out of every authored French
//     string: no « je préfère qu'on », no « jusqu'à ce que », no « bien que ».
//     « J'attends sa proposition » stands where « j'attends qu'elle me le
//     propose » would have needed it.
//
//   NO UNGRAMMATICAL SENTENCE IS EVER A ROW. A row may be RIGHT IN FRANCE AND
//   WRONG IN THE ROOM (E(1001), the tu at the Lyon reception): that is the
//   lesson's whole subject, and such rows are tagged `contexte`. Every wrong
//   FORM lives in a commonErrors.wrong, a trapDrill.promptSound, a scene
//   break.wrong or a quiz errorSpot.prompt.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `rp-etiquette` exists (« Les bonnes manières », domain relations,
//     levelRange a1-b2). Sub-themes were set in Postgres 2026-09-26 (tu ou
//     vous, la politesse au quotidien, les formules). Postgres only: the
//     seed's copy still shows `subThemes: []`, and import-seed.ts would
//     revert the edit; a publish carries it.
//  2. POSTGRES PROBED 2026-09-26 (read-only, by this author): a1 115 rows
//     (max .115), a2 111 (max .111), b1 91 (max .111), b2 108 (max .111).
//     NOTHING at or above 1000 at any level. AUTHORED IDS START AT 1000.
//  3. ID BLOCK: b1.26 owns `fr.b1.rp-etiquette.1000`-`.1199` AND NOTHING
//     ELSE. Used here: `.1000`-`.1150`, 151 rows, in eleven act blocks.
//     Compare full ids, never numbers: the level is part of the id.
//  4. THE SEED CARRIES 6 ROWS OF THIS THEME (fr.a2.rp-etiquette.001-.006,
//     telephone manners) and NO b1 row, and NO ROW ANYWHERE IN THE SEED
//     contains tutoyer, vouvoyer or their nouns (probed over all seed items,
//     2026-09-26). Postgres does hold them (DB_ONLY_TWINS below), so this
//     corpus twins them. Dedupe at import (build log open item).
//  5. The on-topic rows the SEED does carry, outside this theme, were probed
//     2026-09-26 and are in §F. Every one was read out of seed.json and its
//     `fr` is copied verbatim wherever a section prints it, through `src()`.
//  6. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN FOR THE EAR:
//       jeune   ZHUHNN   the checker reads « UHN » at a token end as a nasal
//                        digraph and flags it before looking at the French,
//                        so the real /n/ of jeune is doubled.
//       même    MEM      the seed's own spelling (build log, wave 6).
//     Everything else is spelled for the ear: Madame is ma-DAM (the checker
//     clears it on « ame »), femme FAM and comme kom (double m), patronne
//     pa-TRONN, sonne SONN, personne pehr-SONN, une ÜNN. Nasal vowels always
//     close with the superscript: ahⁿ, ohⁿ, uhⁿ, ehⁿ. No U+203F tie anywhere,
//     in a respelling or an IPA field.
//  7. NAMES were picked so no respelling of them closes a nasal on a plain n
//     or m: Julie, Théo, Maître Girard, Madame Roux. Names that appear only in
//     readings, listenings and story bubbles carry no respelling at all.
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
  id: 'b1.26',
  seq: 26,
  title: 'Tu or Vous',
  sub: 'Tu ou vous',
  canDo: 'Can choose between tu and vous by situation, workplace, family and francophone region, propose or accept the switch to tu at the right moment, keep every word that follows the choice consistent (agreement, possessives, the imperative, reflexives), repair a slip, and write the same news to a colleague and to a client at two distances',
  prereqUnitIds: ['a1.05', 'b1.09'],
} as const;

export const LESSON_ID = 'b1.26.l1';
export const THEME = 'rp-etiquette';
export const LEVEL = 'b1' as const;

/** ONE block. DB holds up to .115 in this theme; b1.26 owns 1000-1199. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A1 and A2 citations use the house English trail label, resolved through
 *  `unitRef` from the shipped `unit.seq`, never typed. b1.* units are not in
 *  the seed yet, so they are labelled in French from the plan.
 * ══════════════════════════════════════════════════════════════════════════ */

export const PRONOMS_UNIT = 'a1.05';
export const PRONOMINAUX_UNIT = 'a2.22';
export const PC_ETRE_UNIT = 'a2.21';
export const POLITESSE_UNIT = 'b1.09';
export const INVERSION_UNIT = 'b1.21';
export const REGISTRES_UNIT = 'b1.25';
export const COURRIELS_UNIT = 'b1.39';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.09': 9, 'b1.21': 21, 'b1.25': 25, 'b1.26': 26, 'b1.27': 27, 'b1.39': 39,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const PRONOMS_REF = unitRef(PRONOMS_UNIT);
export const PRONOMINAUX_REF = unitRef(PRONOMINAUX_UNIT);
export const PC_ETRE_REF = unitRef(PC_ETRE_UNIT);
export const POLITESSE_REF = refFr(POLITESSE_UNIT);
export const INVERSION_REF = refFr(INVERSION_UNIT);
export const REGISTRES_REF = refFr(REGISTRES_UNIT);
export const COURRIELS_REF = refFr(COURRIELS_UNIT);
export const NEXT_REF = refFr('b1.27');

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED
 *
 *  b1.09 and b1.21 are French and are quoted as they stand. a1.05's reframe
 *  (« Nine pronouns. Six verb forms. ») is about conjugation, not about
 *  distance, so it is NOT quoted; what this lesson cites from a1.05 is the
 *  fact its « vous » term teaches (polite singular and plain plural, the same
 *  out loud), through a1.05's own rows fr.a1.cafe.177 and .178.
 *
 *    b1.09  « La politesse ne mesure pas ta gentillesse. Elle mesure le
 *             service que tu demandes, et à qui. »
 *    b1.21  « L'inversion ne change pas le sens. Elle change la tenue. »
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B109_REFRAME, REFRAME_EN as B109_REFRAME_EN } from './politesse-corpus.ts';
export { REFRAME as B121_REFRAME, REFRAME_EN as B121_REFRAME_EN } from './inversion-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE DISTANCE BETWEEN TWO PEOPLE, drawn as the width of a table. Vous keeps
 *  the table between you; tu is the two of you on the same side. Choosing is
 *  setting that width (acts 1 to 5, 8 to 10). And the grammar acts (6, 7)
 *  are the second sentence: however wide the table, the person across it is
 *  still ONE person, a man or a woman, so the adjective and the participle
 *  follow that person while the verb, the possessives and the imperative
 *  follow the distance.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Tu ou vous règle la distance. La personne, elle, ne change pas.';
export const REFRAME_EN = 'Tu or vous sets the distance. The person stays the same.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Vous pour être poli, tu pour être gentil.',
    why: "False where acts 2, 5 and 10 have to hold: tu with a friend is perfectly polite, a Montréal cashier's tu is warm, and vous to your sister is cold. b1.09 already refuses to measure politeness as niceness; this lesson measures distance.",
  },
  {
    text: 'Vouvoie les inconnus, tutoie tes amis.',
    why: "b1.09 wrote it down and handed it here. It is act 2's default and nothing more: it fails in a start-up (act 5), with parents-in-law (act 5), in Québec (act 10), and says nothing about who may change it (acts 3 and 4).",
  },
  {
    text: 'Vous, c’est le pluriel.',
    why: "The reflex act 6 exists to break. It is what produces « Vous êtes gentils, Madame ». The VERB is plural in form; the person is one.",
  },
  {
    text: 'Dans le doute, demande.',
    why: "False for act 4: a junior who asks a senior to switch has decided the distance in her place. The rule is the reverse: in doubt, keep vous and wait.",
  },
  {
    text: 'Une fois le tu, toujours le tu.',
    why: "Mostly true and a good hack, not a reframe. It fails in act 5's firm, where two colleagues who say tu at the break go back to vous in front of a client.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-26 and its French is in the
 *  trailing comment. `named only` rows carry no `flashcard` drill, so no
 *  deckTranche can release them. `NOT_SPEAKABLE` additionally lists the rows
 *  with no `voiceflash`, which a `practice` speak section may never name.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a1.cafe.176',                 // Tu es prêt ?
  ],
  act2: [
    'fr.a1.salutations.015',          // Comment allez-vous ?
    'fr.a1.salutations.079',          // Comment vas-tu ?   (named only)
    'fr.a1.marche.087',               // Bonjour Madame.
  ],
  act3: [] as string[],
  act4: [] as string[],
  act5: [] as string[],
  act6: [
    'fr.a1.cafe.177',                 // Vous êtes prêt ?
    'fr.a1.cafe.178',                 // Vous êtes prêts ?
    'fr.a2.verbes.686',               // Vous êtes arrivés ensemble ?
    'fr.a1.salutations.068',          // Enchantée   (no voiceflash)
  ],
  act7: [
    'fr.a1.dictee.137',               // Asseyez-vous.   (named only)
    'fr.a2.heure-et-date.097',        // Viens tout de suite, s'il te plaît.   (no voiceflash)
    'fr.a2.hebergement.123',          // Vous pouvez épeler votre nom, madame ?
  ],
  act8: [
    'fr.a1.salutations.014',          // Excusez-moi
  ],
  act9: [
    'fr.a1.salutations.003',          // Salut
    'fr.a1.salutations.118',          // Cordialement   (no voiceflash)
    'fr.a1.salutations.119',          // Bien à vous   (named only)
  ],
  act10: [] as string[],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.a1.salutations.079',            // voiceflash, review
  'fr.a1.dictee.137',                 // voiceflash, review
  'fr.a1.salutations.119',            // voiceflash, review
];

/** No `voiceflash` either: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.a1.salutations.068',            // flashcard, review
  'fr.a2.heure-et-date.097',          // flashcard, sentence, roleplay
  'fr.a1.salutations.118',            // flashcard, review
];

/** Published rows this corpus is known to twin, from the 2026-09-26 Postgres
 *  probe. Not nameable today (DB-only). Decide at import: dedupe or keep both. */
export const DB_ONLY_TWINS: readonly { dbId: string; fr: string; twin: string }[] = [
  { dbId: 'fr.a2.rp-etiquette.008', fr: 'tutoyer', twin: E(1012) },
  { dbId: 'fr.a2.rp-etiquette.009', fr: 'vouvoyer', twin: E(1013) },
  { dbId: 'fr.a2.rp-etiquette.010', fr: 'le tutoiement', twin: E(1014) },
  { dbId: 'fr.a2.rp-etiquette.011', fr: 'le vouvoiement', twin: E(1015) },
  { dbId: 'fr.a2.salutations-de-base.018', fr: 'on se tutoie ?', twin: E(1036) },
  { dbId: 'fr.a2.salutations-de-base.076', fr: "Tu peux me tutoyer, on n'est pas au bureau.", twin: E(1038) },
  { dbId: 'fr.b1.rp-etiquette.060', fr: 'Il serait plus poli de vouvoyer votre nouveau collègue au début.', twin: E(1062) },
  { dbId: 'fr.b1.rp-identite.065', fr: 'Entre collègues, on se tutoie et on plaisante facilement.', twin: E(1066) },
  { dbId: 'fr.a2.salutations-de-base.079', fr: 'Le tutoiement est courant entre jeunes.', twin: E(1141) },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the last stressed syllable of
 *  each group in caps, ü for French u, nasals closed with the superscript ⁿ,
 *  and NO U+203F tie. See §A.6 for the respellings spelled for the checker.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['tu-vous'], ...extra,
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

/* ── ACT 1 · LE PREMIER MATIN À LYON ────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, "Bonjour Madame, vous pouvez prévenir Maître Girard, s'il vous plaît ?", 'Good morning, could you let Maître Girard know, please?', '/bɔ̃.ʒuʁ ma.dam vu pu.ve pʁe.və.niʁ mɛtʁ ʒi.ʁaʁ sil vu plɛ/', 'bohⁿ-zhoor ma-DAM | voo poo-vay pray-vuh-neer meh-truh zhee-RAR | seel voo PLEH', ['scene', 'vous', 'accueil']),
  sent(1001, "Tu peux prévenir Maître Girard, s'il te plaît ?", 'Can you let Maître Girard know, please?', '/ty pø pʁe.və.niʁ mɛtʁ ʒi.ʁaʁ sil tə plɛ/', 'tü peu pray-vuh-neer meh-truh zhee-RAR | seel tuh PLEH', ['scene', 'tu', 'contexte']),
  sent(1002, 'Asseyez-vous, je vous prie.', 'Please, have a seat.', '/a.se.je vu ʒə vu pʁi/', 'a-say-yay-VOO | zhuh voo PREE', ['scene', 'vous', 'accueil'], FCVDR),
  sent(1003, REFRAME, REFRAME_EN, '/ty u vu ʁɛɡl la dis.tɑ̃s la pɛʁ.sɔn ɛl nə ʃɑ̃ʒ pa/', 'tü oo voo rehgl la dees-TAHⁿS | la pehr-SONN ehl nuh shahⁿzh PA', ['rule', 'reframe'], ['flashcard'],
    rule('Tu dis vous à une dame, puis tu à ton amie : qu’est-ce qui a changé ?', 'La distance, pas la personne. La dame reste une seule personne, une femme : vous êtes gentille, Madame.')),
  sent(1004, 'Je vous présente Maître Girard.', 'Let me introduce Maître Girard.', '/ʒə vu pʁe.zɑ̃t mɛtʁ ʒi.ʁaʁ/', 'zhuh voo pray-zahⁿt meh-truh zhee-RAR', ['scene', 'vous']),
  sent(1005, 'À Montréal, tout le monde me tutoie au bureau.', 'In Montréal, everyone says tu to me at the office.', '/a mɔ̃.ʁe.al tu lə mɔ̃d mə ty.twa o by.ʁo/', 'a mohⁿ-ray-AL | too luh mohⁿd muh tü-twa oh bü-ROH', ['quebec', 'tu'], FCVDR),
  sent(1006, 'Ici, au cabinet, on se vouvoie.', 'Here, at the law firm, people say vous to each other.', '/i.si o ka.bi.nɛ ɔ̃ sə vu.vwa/', 'ee-SEE | oh ka-bee-NEH | ohⁿ suh voo-VWA', ['travail', 'vous']),
  sent(1007, "Le tu n'est pas impoli : il est proche.", 'Tu is not rude: it is close.', '/lə ty nɛ pa ɛ̃.pɔ.li il ɛ pʁɔʃ/', 'luh TÜ | neh pa ehⁿ-po-LEE | ee-leh PROSH', ['rule', 'distance']),
  sent(1008, "Elle m'a répondu avec vous.", 'She answered me with vous.', '/ɛl ma ʁe.pɔ̃.dy a.vɛk vu/', 'ehl ma ray-pohⁿ-DÜ a-vehk VOO', ['scene']),
  sent(1009, 'Avec une inconnue plus âgée, on dit vous.', 'With an older woman you do not know, you say vous.', '/a.vɛ.kyn ɛ̃.kɔ.ny ply.za.ʒe ɔ̃ di vu/', 'a-veh-KÜNN ehⁿ-ko-NÜ plü-za-ZHAY | ohⁿ dee VOO', ['defaut', 'vous'], FCVDR),
  sent(1010, 'Avec mes amis, je dis tu.', 'With my friends, I say tu.', '/a.vɛk me.za.mi ʒə di ty/', 'a-vehk may-za-MEE | zhuh dee TÜ', ['defaut', 'tu'], FCVDR),
  sent(1011, "Je ne sais jamais s'il faut dire tu ou vous.", 'I never know whether to say tu or vous.', '/ʒə nə sɛ ʒa.mɛ sil fo diʁ ty u vu/', 'zhuh nuh seh zha-MEH | seel foh deer tü oo VOO', ['doute']),
  phrase(1012, 'tutoyer', 'to say tu to someone', '/ty.twa.je/', 'tü-twa-YAY', ['verbe']),
  phrase(1013, 'vouvoyer', 'to say vous to someone', '/vu.vwa.je/', 'voo-vwa-YAY', ['verbe']),
  phrase(1014, 'le tutoiement', 'saying tu', '/lə ty.twa.mɑ̃/', 'luh tü-twa-MAHⁿ', ['nom']),
  phrase(1015, 'le vouvoiement', 'saying vous', '/lə vu.vwa.mɑ̃/', 'luh voo-vwa-MAHⁿ', ['nom']),
];

/* ── ACT 2 · LE RÉGLAGE PAR DÉFAUT ──────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1016, 'Bonjour Madame, vous avez encore des croissants ?', 'Hello, do you still have croissants?', '/bɔ̃.ʒuʁ ma.dam vu.za.ve ɑ̃.kɔʁ de kʁwa.sɑ̃/', 'bohⁿ-zhoor ma-DAM | voo-za-vay ahⁿ-kor day krwa-SAHⁿ', ['defaut', 'commerce'], FCVDR),
  sent(1017, 'Tu as quel âge ?', 'How old are you? (to a child)', '/ty a kɛl ɑʒ/', 'tü a keh-LAHZH', ['defaut', 'enfant']),
  sent(1018, 'Excusez-moi, Monsieur, vous savez où est la poste ?', 'Excuse me, sir, do you know where the post office is?', '/ɛk.sky.ze mwa mə.sjø vu sa.ve u ɛ la pɔst/', 'ehk-skü-zay-MWA muh-SYEU | voo sa-vay oo eh la POST', ['defaut', 'inconnu']),
  sent(1019, 'Maman, tu viens dîner dimanche ?', 'Mum, are you coming to dinner on Sunday?', '/ma.mɑ̃ ty vjɛ̃ di.ne di.mɑ̃ʃ/', 'ma-MAHⁿ | tü vyehⁿ dee-nay dee-MAHⁿSH', ['defaut', 'famille']),
  sent(1020, 'Docteur, je vous appelle pour mes résultats.', 'Doctor, I am calling you about my results.', '/dɔk.tœʁ ʒə vu.za.pɛl puʁ me ʁe.zyl.ta/', 'dok-TUHR | zhuh voo-za-pehl poor may ray-zül-TA', ['defaut', 'service'], FCVDR),
  sent(1021, 'Salut, tu fais quoi ce soir ?', 'Hi, what are you doing tonight?', '/sa.ly ty fɛ kwa sə swaʁ/', 'sa-LÜ | tü feh kwa suh SWAR', ['defaut', 'ami']),
  sent(1022, 'Vous pouvez me montrer votre pièce d’identité ?', 'Could you show me your ID?', '/vu pu.ve mə mɔ̃.tʁe vɔtʁ pjɛs di.dɑ̃.ti.te/', 'voo poo-vay muh mohⁿ-TRAY | votr pyehs dee-dahⁿ-tee-TAY', ['defaut', 'administration']),
  sent(1023, 'Tu es aussi en master de droit ?', 'Are you doing a law master’s too?', '/ty ɛ o.si ɑ̃ mas.tɛʁ də dʁwa/', 'tü eh oh-SEE | ahⁿ mas-tehr duh DRWA', ['defaut', 'pairs']),
  sent(1024, 'Bonjour, je vous écoute.', 'Hello, how can I help? (at a counter)', '/bɔ̃.ʒuʁ ʒə vu.ze.kut/', 'bohⁿ-ZHOOR | zhuh voo-zay-KOOT', ['defaut', 'service']),
  sent(1025, 'Mamie, tu as bien dormi ?', 'Granny, did you sleep well?', '/ma.mi ty a bjɛ̃ dɔʁ.mi/', 'ma-MEE | tü a byehⁿ dor-MEE', ['defaut', 'famille']),
  sent(1026, 'Vous êtes le chef du service ?', 'Are you the head of the department?', '/vu.zɛt lə ʃɛf dy sɛʁ.vis/', 'voo-zeht luh shehf dü sehr-VEESS', ['defaut', 'travail']),
  sent(1027, 'Par défaut : vous pour les inconnus, tu pour les proches.', 'By default: vous for strangers, tu for the people close to you.', '/paʁ de.fo vu puʁ le.zɛ̃.kɔ.ny ty puʁ le pʁɔʃ/', 'par day-FOH | voo poor lay-zehⁿ-ko-NÜ | tü poor lay PROSH', ['rule', 'defaut'], ['flashcard'],
    rule('Tu ne connais pas la personne, et elle a ton âge. Tu ou vous ?', 'Dans un commerce ou un bureau, vous. À une soirée, entre étudiants ou entre jeunes, tu, souvent tout de suite.')),
  sent(1028, 'Avec un enfant, on dit tu.', 'With a child, you say tu.', '/a.vɛ.kœ̃.nɑ̃.fɑ̃ ɔ̃ di ty/', 'a-veh-kuhⁿ-nahⁿ-FAHⁿ | ohⁿ dee TÜ', ['defaut', 'enfant'], FCVDR),
  sent(1029, 'Au magasin, on vouvoie le vendeur.', 'In a shop, you say vous to the sales assistant.', '/o ma.ɡa.zɛ̃ ɔ̃ vu.vwa lə vɑ̃.dœʁ/', 'oh ma-ga-ZEHⁿ | ohⁿ voo-vwa luh vahⁿ-DUHR', ['defaut', 'commerce']),
  sent(1030, 'À une soirée d’étudiants, on se tutoie tout de suite.', 'At a student party, people say tu straight away.', '/a yn swa.ʁe de.ty.djɑ̃ ɔ̃ sə ty.twa tut.swit/', 'a ünn swa-RAY day-tü-DYAHⁿ | ohⁿ suh tü-twa toot-SWEET', ['defaut', 'pairs']),
  sent(1031, 'Je dis vous à mon médecin depuis dix ans.', 'I have said vous to my doctor for ten years.', '/ʒə di vu a mɔ̃ med.sɛ̃ də.pɥi di.zɑ̃/', 'zhuh dee VOO a mohⁿ mehd-SEHⁿ | duh-pwee dee-ZAHⁿ', ['defaut', 'service']),
  sent(1032, 'Un vous à un enfant sonne froid.', 'A vous to a child sounds cold.', '/œ̃ vu a œ̃.nɑ̃.fɑ̃ sɔn fʁwa/', 'uhⁿ VOO a uhⁿ-nahⁿ-FAHⁿ | sonn FRWA', ['defaut', 'enfant']),
  sent(1033, 'Un tu au guichet sonne familier.', 'A tu at the counter sounds overfamiliar.', '/œ̃ ty o ɡi.ʃɛ sɔn fa.mi.lje/', 'uhⁿ TÜ oh ghee-SHEH | sonn fa-mee-LYAY', ['defaut', 'service']),
  sent(1034, 'Mon frère et moi, on se dit tu, évidemment.', 'My brother and I say tu, obviously.', '/mɔ̃ fʁɛʁ e mwa ɔ̃ sə di ty e.vi.da.mɑ̃/', 'mohⁿ FREHR ay MWA | ohⁿ suh dee TÜ | ay-vee-da-MAHⁿ', ['defaut', 'famille']),
  sent(1035, "Vous pouvez m'aider, s'il vous plaît ?", 'Could you help me, please?', '/vu pu.ve me.de sil vu plɛ/', 'voo poo-vay may-DAY | seel voo PLEH', ['defaut', 'service'], FCVDR),
];

/* ── ACT 3 · PASSER AU TU ───────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1036, 'On peut se tutoyer ?', 'Shall we say tu to each other?', '/ɔ̃ pø sə ty.twa.je/', 'ohⁿ peu suh tü-twa-YAY', ['passage', 'proposer'], FCVDR),
  sent(1037, 'On se dit tu ?', 'Shall we go with tu?', '/ɔ̃ sə di ty/', 'ohⁿ suh dee TÜ', ['passage', 'proposer']),
  sent(1038, 'Tu peux me tutoyer, tu sais.', 'You can say tu to me, you know.', '/ty pø mə ty.twa.je ty sɛ/', 'tü peu muh tü-twa-YAY | tü SEH', ['passage', 'offrir'], FCVDR),
  sent(1039, 'Vous pouvez me tutoyer.', 'You can say tu to me.', '/vu pu.ve mə ty.twa.je/', 'voo poo-vay muh tü-twa-YAY', ['passage', 'offrir']),
  sent(1040, 'Avec plaisir, on se tutoie.', 'With pleasure, let’s say tu.', '/a.vɛk plɛ.ziʁ ɔ̃ sə ty.twa/', 'a-vehk pleh-ZEER | ohⁿ suh tü-TWA', ['passage', 'accepter']),
  sent(1041, 'Oui, bien sûr, tutoie-moi.', 'Yes, of course, say tu to me.', '/wi bjɛ̃ syʁ ty.twa mwa/', 'wee byehⁿ SÜR | tü-twa-MWA', ['passage', 'accepter']),
  sent(1042, 'Je peux vous tutoyer ?', 'May I say tu to you?', '/ʒə pø vu ty.twa.je/', 'zhuh peu voo tü-twa-YAY', ['passage', 'proposer'], FCVDR),
  sent(1043, "Je préfère garder le vous pour l'instant.", 'I would rather keep vous for now.', '/ʒə pʁe.fɛʁ ɡaʁ.de lə vu puʁ lɛ̃s.tɑ̃/', 'zhuh pray-fehr gar-day luh VOO | poor lehⁿs-TAHⁿ', ['passage', 'refuser']),
  sent(1044, 'Ça ne me dérange pas du tout.', 'I do not mind at all.', '/sa nə mə de.ʁɑ̃ʒ pa dy tu/', 'sa nuh muh day-rahⁿzh pa dü TOO', ['passage', 'accepter']),
  sent(1045, 'Alors, on se tutoie.', 'So, it is tu from now on.', '/a.lɔʁ ɔ̃ sə ty.twa/', 'a-LOR | ohⁿ suh tü-TWA', ['passage', 'accepter']),
  sent(1046, 'Tu travailles ici depuis longtemps ?', 'Have you been working here long?', '/ty tʁa.vaj i.si də.pɥi lɔ̃.tɑ̃/', 'tü tra-vahy ee-SEE | duh-pwee lohⁿ-TAHⁿ', ['passage', 'apres']),
  sent(1047, 'Vous travaillez ici depuis longtemps ?', 'Have you been working here long?', '/vu tʁa.va.je i.si də.pɥi lɔ̃.tɑ̃/', 'voo tra-va-yay ee-SEE | duh-pwee lohⁿ-TAHⁿ', ['passage', 'avant']),
  sent(1048, 'Après le oui, on passe au tu tout de suite.', 'After the yes, you switch to tu straight away.', '/a.pʁɛ lə wi ɔ̃ pa.so ty tut.swit/', 'a-preh luh WEE | ohⁿ pa-soh TÜ | toot-SWEET', ['rule', 'passage'], ['flashcard'],
    rule('On t’a proposé le tu, et tu as dit oui. Et ensuite ?', 'Tu passes au tu tout de suite, dans la phrase suivante. Revenir au vous, c’est reprendre ce que tu viens d’accepter.')),
  sent(1049, 'On se connaît depuis un an, on peut se tutoyer, non ?', 'We have known each other a year, we can say tu, can’t we?', '/ɔ̃ sə kɔ.nɛ də.pɥi.zœ̃.nɑ̃ ɔ̃ pø sə ty.twa.je nɔ̃/', 'ohⁿ suh ko-NEH duh-pwee-zuhⁿ-NAHⁿ | ohⁿ peu suh tü-twa-YAY | NOHⁿ', ['passage', 'proposer']),
  sent(1050, 'Si vous voulez, on peut se dire tu.', 'If you like, we can say tu.', '/si vu vu.le ɔ̃ pø sə diʁ ty/', 'see voo voo-LAY | ohⁿ peu suh deer TÜ', ['passage', 'proposer']),
  phrase(1051, 'Volontiers.', 'Gladly.', '/vɔ.lɔ̃.tje/', 'vo-lohⁿ-TYAY', ['passage', 'accepter']),
  sent(1052, 'Merci, ça me fait plaisir.', 'Thanks, that makes me happy.', '/mɛʁ.si sa mə fɛ plɛ.ziʁ/', 'mehr-SEE | sa muh feh pleh-ZEER', ['passage', 'accepter']),
  phrase(1053, 'se tutoyer', 'to say tu to each other', '/sə ty.twa.je/', 'suh tü-twa-YAY', ['verbe']),
  phrase(1054, 'passer au tu', 'to switch to tu', '/pa.se o ty/', 'pa-say oh TÜ', ['passage']),
];

/* ── ACT 4 · QUI PROPOSE ────────────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1055, "C'est à la personne la plus âgée de proposer le tu.", 'It is up to the older person to offer tu.', '/sɛ.ta la pɛʁ.sɔn la ply.za.ʒe də pʁɔ.po.ze lə ty/', 'seh-ta la pehr-SONN la plü-za-ZHAY | duh pro-po-zay luh TÜ', ['initiative'], FCVDR),
  sent(1056, "Au travail, c'est le chef qui propose.", 'At work, it is the boss who offers.', '/o tʁa.vaj sɛ lə ʃɛf ki pʁɔ.poz/', 'oh tra-VAHY | seh luh shehf kee pro-POHZ', ['initiative', 'travail']),
  sent(1057, "Entre collègues du même âge, n'importe qui peut proposer.", 'Between colleagues of the same age, anyone can offer.', '/ɑ̃tʁ kɔ.lɛɡ dy mɛm ɑʒ nɛ̃.pɔʁt ki pø pʁɔ.po.ze/', 'ahⁿtr ko-LEHG dü meh-MAHZH | nehⁿ-port kee peu pro-po-ZAY', ['initiative', 'pairs']),
  sent(1058, "J'attends sa proposition.", 'I am waiting for her to offer.', '/ʒa.tɑ̃ sa pʁɔ.po.zi.sjɔ̃/', 'zha-tahⁿ sa pro-po-zee-SYOHⁿ', ['initiative', 'attendre']),
  sent(1059, 'Je ne vais pas tutoyer ma directrice la première.', 'I am not going to be the first to say tu to my director.', '/ʒə nə vɛ pa ty.twa.je ma di.ʁɛk.tʁis la pʁə.mjɛʁ/', 'zhuh nuh veh pa tü-twa-YAY | ma dee-rehk-TREESS la pruh-MYEHR', ['initiative', 'attendre']),
  sent(1060, "Elle m'a proposé le tu au bout d'un mois.", 'She offered me tu after a month.', '/ɛl ma pʁɔ.po.ze lə ty o bu dœ̃ mwa/', 'ehl ma pro-po-ZAY luh TÜ | oh boo duhⁿ MWA', ['initiative', 'travail'], FCVDR),
  sent(1061, 'Le client décide, pas le vendeur.', 'The customer decides, not the salesperson.', '/lə kli.jɑ̃ de.sid pa lə vɑ̃.dœʁ/', 'luh klee-YAHⁿ day-SEED | pa luh vahⁿ-DUHR', ['initiative', 'commerce']),
  sent(1062, 'Dans le doute, garde le vous et attends.', 'When in doubt, keep vous and wait.', '/dɑ̃ lə dut ɡaʁd lə vu e a.tɑ̃/', 'dahⁿ luh DOOT | gard luh VOO | ay a-TAHⁿ', ['initiative', 'attendre'], FCVDR),
  sent(1063, 'Le plus âgé offre le tu. Le plus jeune accepte.', 'The older person offers tu. The younger one accepts.', '/lə ply.za.ʒe ɔfʁ lə ty lə ply ʒœn ak.sɛpt/', 'luh plü-za-ZHAY ofr luh TÜ | luh plü ZHUHNN ak-SEHPT', ['rule', 'initiative'], ['flashcard'],
    rule('Ta directrice a soixante ans, toi trente. Qui propose le tu ?', 'Elle. Si tu le proposes le premier, tu décides à sa place de la distance entre vous deux.')),
  sent(1064, 'Mon chef m’a dit : « Tu peux me tutoyer. »', 'My boss said to me: “You can say tu to me.”', '/mɔ̃ ʃɛf ma di ty pø mə ty.twa.je/', 'mohⁿ SHEHF ma DEE | tü peu muh tü-twa-YAY', ['initiative', 'travail']),
  sent(1065, 'Je la vouvoie, et elle me tutoie.', 'I say vous to her, and she says tu to me.', '/ʒə la vu.vwa e ɛl mə ty.twa/', 'zhuh la voo-VWA | ay ehl muh tü-TWA', ['initiative', 'asymetrie']),
];

/* ── ACT 5 · AU BUREAU, EN FAMILLE ──────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1066, 'Dans notre start-up, tout le monde se tutoie, même la patronne.', 'In our start-up, everyone says tu, even the boss.', '/dɑ̃ nɔtʁ staʁ.tœp tu lə mɔ̃d sə ty.twa mɛm la pa.tʁɔn/', 'dahⁿ notr star-TUHP | too luh mohⁿd suh tü-TWA | mem la pa-TRONN', ['travail', 'startup'], FCVDR),
  sent(1067, 'Sur le chantier, on se tutoie dès le premier jour.', 'On the building site, people say tu from day one.', '/syʁ lə ʃɑ̃.tje ɔ̃ sə ty.twa dɛ lə pʁə.mje ʒuʁ/', 'sür luh shahⁿ-TYAY | ohⁿ suh tü-TWA | deh luh pruh-myay ZHOOR', ['travail', 'metier']),
  sent(1068, 'Au cabinet, on vouvoie les clients et les associés.', 'At the firm, we say vous to clients and partners.', '/o ka.bi.nɛ ɔ̃ vu.vwa le kli.jɑ̃ e le.za.so.sje/', 'oh ka-bee-NEH | ohⁿ voo-vwa lay klee-YAHⁿ | ay lay-za-so-SYAY', ['travail', 'cabinet']),
  sent(1069, 'À la mairie, on vouvoie tous les usagers.', 'At the town hall, staff say vous to every member of the public.', '/a la mɛ.ʁi ɔ̃ vu.vwa tu le.zy.za.ʒe/', 'a la meh-REE | ohⁿ voo-vwa too lay-zü-za-ZHAY', ['travail', 'administration']),
  sent(1070, 'Devant un client, on revient au vous.', 'In front of a client, you go back to vous.', '/də.vɑ̃.tœ̃ kli.jɑ̃ ɔ̃ ʁə.vjɛ̃.to vu/', 'duh-vahⁿ-tuhⁿ klee-YAHⁿ | ohⁿ ruh-vyehⁿ-toh VOO', ['travail', 'cabinet'], FCVDR),
  sent(1071, 'Je vouvoie mes beaux-parents depuis quinze ans.', 'I have said vous to my parents-in-law for fifteen years.', '/ʒə vu.vwa me bo.pa.ʁɑ̃ də.pɥi kɛ̃.zɑ̃/', 'zhuh voo-vwa may boh-pa-RAHⁿ | duh-pwee kehⁿ-ZAHⁿ', ['famille', 'beaux-parents'], FCVDR),
  sent(1072, 'Ma femme tutoie mes parents, et moi, je vouvoie les siens.', 'My wife says tu to my parents, and I say vous to hers.', '/ma fam ty.twa me pa.ʁɑ̃ e mwa ʒə vu.vwa le sjɛ̃/', 'ma FAM tü-twa may pa-RAHⁿ | ay MWA | zhuh voo-vwa lay SYEHⁿ', ['famille', 'beaux-parents']),
  sent(1073, 'Chez eux, les enfants vouvoient même leurs grands-parents.', 'In their family, the children even say vous to their grandparents.', '/ʃe.zø le.zɑ̃.fɑ̃ vu.vwa mɛm lœʁ ɡʁɑ̃.pa.ʁɑ̃/', 'shay-ZEU | lay-zahⁿ-FAHⁿ voo-VWA | mem luhr grahⁿ-pa-RAHⁿ', ['famille']),
  sent(1074, 'Dans un bureau, regarde comment les autres se parlent.', 'In an office, watch how the others talk to each other.', '/dɑ̃.zœ̃ by.ʁo ʁə.ɡaʁd kɔ.mɑ̃ le.zotʁ sə paʁl/', 'dahⁿ-zuhⁿ bü-ROH | ruh-gard ko-mahⁿ lay-ZOHTR suh PARL', ['travail', 'observer']),
  sent(1075, 'On se tutoie à la pause, et on se vouvoie en réunion.', 'We say tu at the break and vous in meetings.', '/ɔ̃ sə ty.twa a la poz e ɔ̃ sə vu.vwa ɑ̃ ʁe.y.njɔ̃/', 'ohⁿ suh tü-twa a la POHZ | ay ohⁿ suh voo-vwa ahⁿ ray-ü-NYOHⁿ', ['travail', 'cabinet']),
  sent(1076, 'Chaque lieu a sa règle : regarde avant de parler.', 'Every place has its rule: look before you speak.', '/ʃak ljø a sa ʁɛɡl ʁə.ɡaʁd a.vɑ̃ də paʁ.le/', 'shak LYEU a sa REHGL | ruh-gard a-vahⁿ duh par-LAY', ['rule', 'travail'], ['flashcard'],
    rule('Tu commences dans une nouvelle entreprise. Comment sais-tu si on s’y tutoie ?', 'Tu regardes et tu écoutes la première semaine. Les start-up et les chantiers tutoient souvent ; les administrations et les cabinets d’avocats vouvoient.')),
  sent(1077, "Mes beaux-parents m'ont proposé le tu au mariage.", 'My parents-in-law offered me tu at the wedding.', '/me bo.pa.ʁɑ̃ mɔ̃ pʁɔ.po.ze lə ty o ma.ʁjaʒ/', 'may boh-pa-RAHⁿ | mohⁿ pro-po-ZAY luh TÜ | oh ma-RYAZH', ['famille', 'beaux-parents']),
  sent(1078, "Bonsoir Madame, merci pour l'invitation.", 'Good evening, thank you for the invitation.', '/bɔ̃.swaʁ ma.dam mɛʁ.si puʁ lɛ̃.vi.ta.sjɔ̃/', 'bohⁿ-swar ma-DAM | mehr-see poor lehⁿ-vee-ta-SYOHⁿ', ['famille', 'beaux-parents']),
];

/* ── ACT 6 · UNE SEULE PERSONNE ─────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1079, 'Vous êtes gentille, Madame.', 'You are kind, madam.', '/vu.zɛt ʒɑ̃.tij ma.dam/', 'voo-zeht zhahⁿ-TEEY | ma-DAM', ['accord', 'feminin'], FCVDR),
  sent(1080, 'Vous êtes arrivé ?', 'Have you arrived? (to a man)', '/vu.zɛ.ta.ʁi.ve/', 'voo-zeh-ta-ree-VAY', ['accord', 'masculin']),
  sent(1081, 'Vous êtes arrivée tôt ce matin, Maître.', 'You arrived early this morning, Maître. (to a woman)', '/vu.zɛ.ta.ʁi.ve to sə ma.tɛ̃ mɛtʁ/', 'voo-zeh-ta-ree-vay TOH | suh ma-TEHⁿ | MEHTR', ['accord', 'feminin'], FCVDR),
  sent(1082, 'Vous êtes sûr, Monsieur ?', 'Are you sure, sir?', '/vu.zɛt syʁ mə.sjø/', 'voo-zeht SÜR | muh-SYEU', ['accord', 'masculin']),
  sent(1083, 'Vous êtes prête, Madame ?', 'Are you ready, madam?', '/vu.zɛt pʁɛt ma.dam/', 'voo-zeht PREHT | ma-DAM', ['accord', 'feminin']),
  sent(1084, 'Vous vous êtes perdue, Madame ?', 'Did you get lost, madam?', '/vu vu.zɛt pɛʁ.dy ma.dam/', 'voo voo-zeht pehr-DÜ | ma-DAM', ['accord', 'feminin']),
  sent(1085, 'Vous êtes contents de votre séjour ?', 'Are you both happy with your stay?', '/vu.zɛt kɔ̃.tɑ̃ də vɔtʁ se.ʒuʁ/', 'voo-zeht kohⁿ-TAHⁿ | duh votr say-ZHOOR', ['accord', 'pluriel']),
  sent(1086, 'Vous êtes content de votre séjour, Monsieur ?', 'Are you happy with your stay, sir?', '/vu.zɛt kɔ̃.tɑ̃ də vɔtʁ se.ʒuʁ mə.sjø/', 'voo-zeht kohⁿ-TAHⁿ | duh votr say-ZHOOR | muh-SYEU', ['accord', 'masculin']),
  sent(1087, "Un vous, une personne : l'adjectif reste au singulier.", 'One vous, one person: the adjective stays singular.', '/œ̃ vu yn pɛʁ.sɔn la.dʒɛk.tif ʁɛst o sɛ̃.ɡy.lje/', 'uhⁿ VOO | ünn pehr-SONN | la-zhehk-TEEF rehst oh sehⁿ-gü-LYAY', ['rule', 'accord'], ['flashcard'],
    rule('« Vous êtes gentil... », dit à une dame seule. Quelle fin ?', 'gentille : une seule personne, une femme. Le verbe prend la forme de vous ; l’adjectif suit la personne.')),
  sent(1088, "Le verbe suit vous, l'adjectif suit la personne.", 'The verb follows vous, the adjective follows the person.', '/lə vɛʁb sɥi vu la.dʒɛk.tif sɥi la pɛʁ.sɔn/', 'luh VEHRB swee VOO | la-zhehk-TEEF swee la pehr-SONN', ['accord']),
  sent(1089, 'Vous êtes allée à Montréal, Madame ?', 'Have you been to Montréal, madam?', '/vu.zɛ.ta.le a mɔ̃.ʁe.al ma.dam/', 'voo-zeh-ta-LAY a mohⁿ-ray-AL | ma-DAM', ['accord', 'feminin']),
  sent(1090, 'Vous êtes bien installé, Monsieur ?', 'Are you comfortable, sir?', '/vu.zɛt bjɛ̃.nɛ̃s.ta.le mə.sjø/', 'voo-zeht byehⁿ-nehⁿs-ta-LAY | muh-SYEU', ['accord', 'masculin']),
  sent(1091, 'Vous-même, vous en pensez quoi ?', 'And you yourself, what do you think?', '/vu.mɛm vu.zɑ̃ pɑ̃.se kwa/', 'voo-MEM | voo-zahⁿ pahⁿ-say KWA', ['accord', 'singulier']),
];

/* ── ACT 7 · LES ÉCHOS ──────────────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1092, 'Viens, assieds-toi.', 'Come, sit down.', '/vjɛ̃ a.sje twa/', 'vyehⁿ | a-syay-TWA', ['echo', 'imperatif', 'tu'], FCVDR),
  sent(1093, 'Venez, asseyez-vous.', 'Come, sit down.', '/və.ne a.se.je vu/', 'vuh-NAY | a-say-yay-VOO', ['echo', 'imperatif', 'vous']),
  sent(1094, "Tu t'assois où tu veux.", 'Sit wherever you like.', '/ty ta.swa u ty vø/', 'tü ta-SWA | oo tü VEU', ['echo', 'pronominal', 'tu']),
  sent(1095, 'Vous vous asseyez où vous voulez.', 'Sit wherever you like.', '/vu vu.za.se.je u vu vu.le/', 'voo voo-za-say-YAY | oo voo voo-LAY', ['echo', 'pronominal', 'vous']),
  sent(1096, 'Tu peux me donner ton numéro ?', 'Can you give me your number?', '/ty pø mə dɔ.ne tɔ̃ ny.me.ʁo/', 'tü peu muh do-nay tohⁿ nü-may-ROH', ['echo', 'possessif', 'tu']),
  sent(1097, 'Vous pouvez me donner votre numéro ?', 'Could you give me your number?', '/vu pu.ve mə dɔ.ne vɔtʁ ny.me.ʁo/', 'voo poo-vay muh do-nay votr nü-may-ROH', ['echo', 'possessif', 'vous'], FCVDR),
  sent(1098, 'Prends tes clés et ton manteau.', 'Take your keys and your coat.', '/pʁɑ̃ te kle e tɔ̃ mɑ̃.to/', 'prahⁿ tay KLAY | ay tohⁿ mahⁿ-TOH', ['echo', 'possessif', 'tu']),
  sent(1099, 'Prenez vos clés et votre manteau.', 'Take your keys and your coat.', '/pʁə.ne vo kle e vɔtʁ mɑ̃.to/', 'pruh-nay voh KLAY | ay votr mahⁿ-TOH', ['echo', 'possessif', 'vous']),
  sent(1100, 'Je te remercie pour ton aide.', 'Thank you for your help.', '/ʒə tə ʁə.mɛʁ.si puʁ tɔ̃.nɛd/', 'zhuh tuh ruh-mehr-SEE | poor tohⁿ-NEHD', ['echo', 'pronom', 'tu']),
  sent(1101, 'Je vous remercie pour votre aide.', 'Thank you for your help.', '/ʒə vu ʁə.mɛʁ.si puʁ vɔ.tʁɛd/', 'zhuh voo ruh-mehr-SEE | poor vo-TREHD', ['echo', 'pronom', 'vous'], FCVDR),
  sent(1102, "Tu t'appelles comment ?", 'What is your name?', '/ty ta.pɛl kɔ.mɑ̃/', 'tü ta-pehl ko-MAHⁿ', ['echo', 'pronominal', 'tu']),
  sent(1103, 'Vous vous appelez comment ?', 'What is your name?', '/vu vu.za.ple kɔ.mɑ̃/', 'voo voo-za-play ko-MAHⁿ', ['echo', 'pronominal', 'vous']),
  sent(1104, "Excuse-moi, je t'ai fait attendre.", 'Sorry, I kept you waiting.', '/ɛk.skyz mwa ʒə te fɛ a.tɑ̃dʁ/', 'ehk-sküz-MWA | zhuh tay feh a-TAHⁿDR', ['echo', 'imperatif', 'tu']),
  sent(1105, 'Excusez-moi, je vous ai fait attendre.', 'Sorry, I kept you waiting.', '/ɛk.sky.ze mwa ʒə vu.ze fɛ a.tɑ̃dʁ/', 'ehk-skü-zay-MWA | zhuh voo-zay feh a-TAHⁿDR', ['echo', 'imperatif', 'vous']),
  sent(1106, 'Une fois le choix fait, tous les petits mots suivent.', 'Once the choice is made, all the small words follow.', '/yn fwa lə ʃwa fɛ tu le pə.ti mo sɥiv/', 'ünn fwa luh shwa FEH | too lay puh-tee moh SWEEV', ['rule', 'echo'], ['flashcard'],
    rule('Tu dis vous à ta voisine. Et son manteau, dans ta phrase ?', 'votre manteau. Avec vous : vous, votre, vos, et l’impératif en -ez. Avec tu : te, ton, ta, tes, et l’impératif de tu : viens, prends.')),
  sent(1107, "Tiens, c'est pour toi.", 'Here, this is for you.', '/tjɛ̃ sɛ puʁ twa/', 'tyehⁿ | seh poor TWA', ['echo', 'toi', 'tu']),
  sent(1108, "Tenez, c'est pour vous.", 'Here, this is for you.', '/tə.ne sɛ puʁ vu/', 'tuh-NAY | seh poor VOO', ['echo', 'toi', 'vous']),
];

/* ── ACT 8 · RATTRAPER LE TU ────────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1109, 'Pardon, je vous ai dit tu.', 'Sorry, I said tu to you.', '/paʁ.dɔ̃ ʒə vu.ze di ty/', 'par-DOHⁿ | zhuh voo-zay dee TÜ', ['fauxpas', 'reparer']),
  sent(1110, 'Oh, pardon : vous, bien sûr.', 'Oh, sorry: vous, of course.', '/o paʁ.dɔ̃ vu bjɛ̃ syʁ/', 'oh par-DOHⁿ | VOO | byehⁿ SÜR', ['fauxpas', 'reparer'], FCVDR),
  sent(1111, "Excusez-moi, le tu m'a échappé.", 'Sorry, the tu slipped out.', '/ɛk.sky.ze mwa lə ty ma e.ʃa.pe/', 'ehk-skü-zay-MWA | luh TÜ | ma ay-sha-PAY', ['fauxpas', 'reparer'], FCVDR),
  sent(1112, "Ce n'est pas grave, on peut se tutoyer.", 'It does not matter, we can say tu.', '/sə nɛ pa ɡʁav ɔ̃ pø sə ty.twa.je/', 'suh neh pa GRAV | ohⁿ peu suh tü-twa-YAY', ['fauxpas', 'recevoir']),
  sent(1113, "Je reprends : vous pouvez m'envoyer le contrat ?", 'Let me start again: could you send me the contract?', '/ʒə ʁə.pʁɑ̃ vu pu.ve mɑ̃.vwa.je lə kɔ̃.tʁa/', 'zhuh ruh-PRAHⁿ | voo poo-vay mahⁿ-vwa-yay luh kohⁿ-TRA', ['fauxpas', 'reparer']),
  sent(1114, "Tu peux m'envoyer le contrat ?", 'Can you send me the contract?', '/ty pø mɑ̃.vwa.je lə kɔ̃.tʁa/', 'tü peu mahⁿ-vwa-yay luh kohⁿ-TRA', ['fauxpas', 'contexte']),
  sent(1115, 'Un faux pas se répare en trois mots.', 'A slip is fixed in three words.', '/œ̃ fo pa sə ʁe.paʁ ɑ̃ tʁwa mo/', 'uhⁿ foh PA | suh ray-par ahⁿ trwa MOH', ['rule', 'fauxpas'], ['flashcard'],
    rule('Tu as dit tu à une cliente. Que fais-tu ?', 'Tu t’excuses d’un mot, tu reprends avec vous, et tu continues. Pas de long discours.')),
  sent(1116, 'Pas de souci, continuons.', 'No problem, let’s carry on.', '/pa də su.si kɔ̃.ti.nɥɔ̃/', 'pa duh soo-SEE | kohⁿ-tee-NWOHⁿ', ['fauxpas', 'recevoir']),
  sent(1117, 'Pardon, à Montréal, on se tutoie tout le temps.', 'Sorry, in Montréal people say tu all the time.', '/paʁ.dɔ̃ a mɔ̃.ʁe.al ɔ̃ sə ty.twa tu lə tɑ̃/', 'par-DOHⁿ | a mohⁿ-ray-AL | ohⁿ suh tü-twa too luh TAHⁿ', ['fauxpas', 'quebec']),
  sent(1118, "Je vous en prie, ce n'est rien.", 'Please, it is nothing.', '/ʒə vu.zɑ̃ pʁi sə nɛ ʁjɛ̃/', 'zhuh voo-zahⁿ PREE | suh neh RYEHⁿ', ['fauxpas', 'recevoir']),
];

/* ── ACT 9 · À L'ÉCRIT ──────────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  phrase(1119, 'Madame, Monsieur,', 'Dear Sir or Madam,', '/ma.dam mə.sjø/', 'ma-DAM | muh-SYEU', ['ecrit', 'ouverture', 'vous']),
  phrase(1120, 'Bonjour Maître Girard,', 'Hello Maître Girard,', '/bɔ̃.ʒuʁ mɛtʁ ʒi.ʁaʁ/', 'bohⁿ-zhoor meh-truh zhee-RAR', ['ecrit', 'ouverture', 'vous']),
  phrase(1121, 'Salut Julie,', 'Hi Julie,', '/sa.ly ʒy.li/', 'sa-LÜ | zhü-LEE', ['ecrit', 'ouverture', 'tu']),
  phrase(1122, 'Bonjour Julie,', 'Hello Julie,', '/bɔ̃.ʒuʁ ʒy.li/', 'bohⁿ-zhoor zhü-LEE', ['ecrit', 'ouverture', 'tu']),
  phrase(1123, "Je vous prie d'agréer l'expression de mes salutations distinguées.", 'Yours faithfully.', '/ʒə vu pʁi da.ɡʁe.e lɛk.spʁɛ.sjɔ̃ də me sa.ly.ta.sjɔ̃ dis.tɛ̃.ɡe/', 'zhuh voo PREE | da-gray-AY | lehk-spreh-SYOHⁿ duh may sa-lü-ta-SYOHⁿ | dees-tehⁿ-GAY', ['ecrit', 'fin', 'vous']),
  phrase(1124, 'Bien cordialement,', 'Kind regards,', '/bjɛ̃ kɔʁ.djal.mɑ̃/', 'byehⁿ kor-dyal-MAHⁿ', ['ecrit', 'fin', 'vous']),
  phrase(1125, 'Bises,', 'Love,', '/biz/', 'BEEZ', ['ecrit', 'fin', 'tu']),
  phrase(1126, 'À plus !', 'See you!', '/a plys/', 'a PLÜSS', ['ecrit', 'fin', 'tu']),
  sent(1127, 'Je vous confirme notre rendez-vous de vendredi.', 'I am confirming our meeting on Friday.', '/ʒə vu kɔ̃.fiʁm nɔtʁ ʁɑ̃.de.vu də vɑ̃.dʁə.di/', 'zhuh voo kohⁿ-FEERM | notr rahⁿ-day-VOO | duh vahⁿ-druh-DEE', ['ecrit', 'vous'], FCVDR),
  sent(1128, 'Petite nouvelle : la réunion passe à vendredi.', 'Quick news: the meeting moves to Friday.', '/pə.tit nu.vɛl la ʁe.y.njɔ̃ pas a vɑ̃.dʁə.di/', 'puh-teet noo-VEHL | la ray-ü-NYOHⁿ | pass a vahⁿ-druh-DEE', ['ecrit', 'tu']),
  sent(1129, "Pourriez-vous m'envoyer le dossier avant jeudi ?", 'Could you send me the file before Thursday?', '/pu.ʁje vu mɑ̃.vwa.je lə do.sje a.vɑ̃ ʒø.di/', 'poo-ryay-VOO | mahⁿ-vwa-yay luh do-SYAY | a-vahⁿ zheu-DEE', ['ecrit', 'vous']),
  sent(1130, "Tu peux m'envoyer le dossier avant jeudi ?", 'Can you send me the file before Thursday?', '/ty pø mɑ̃.vwa.je lə do.sje a.vɑ̃ ʒø.di/', 'tü peu mahⁿ-vwa-yay luh do-SYAY | a-vahⁿ zheu-DEE', ['ecrit', 'tu'], FCVDR),
  sent(1131, "L'en-tête et la formule de fin disent la distance avant la première phrase.", 'The greeting and the sign-off state the distance before the first sentence.', '/lɑ̃.tɛt e la fɔʁ.myl də fɛ̃ diz la dis.tɑ̃s a.vɑ̃ la pʁə.mjɛʁ fʁaz/', 'lahⁿ-TEHT ay la for-mül duh FEHⁿ | deez la dees-TAHⁿS | a-vahⁿ la pruh-myehr FRAHZ', ['rule', 'ecrit'], ['flashcard'],
    rule('Tu écris à une cliente pour la première fois. Tu commences comment ?', 'Bonjour Madame, ou Bonjour Maître pour une avocate. Tu finis par Cordialement ou Bien à vous. Jamais Salut, jamais Bises.')),
  phrase(1132, 'Bonne journée,', 'Have a good day,', '/bɔn ʒuʁ.ne/', 'bonn zhoor-NAY', ['ecrit', 'fin']),
  phrase(1133, "Merci d'avance,", 'Thanks in advance,', '/mɛʁ.si da.vɑ̃s/', 'mehr-see da-VAHⁿS', ['ecrit', 'fin']),
];

/* ── ACT 10 · AILLEURS EN FRANÇAIS ──────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1134, "Au Québec, on se tutoie beaucoup plus qu'en France.", 'In Québec, people say tu a lot more than in France.', '/o ke.bɛk ɔ̃ sə ty.twa bo.ku plys kɑ̃ fʁɑ̃s/', 'oh kay-BEHK | ohⁿ suh tü-twa boh-koo plüs kahⁿ FRAHⁿS', ['variantes', 'quebec'], FCVDR),
  sent(1135, "À Montréal, beaucoup d'élèves tutoient leurs profs.", 'In Montréal, many pupils say tu to their teachers.', '/a mɔ̃.ʁe.al bo.ku de.lɛv ty.twa lœʁ pʁɔf/', 'a mohⁿ-ray-AL | boh-koo day-LEHV | tü-twa luhr PROF', ['variantes', 'quebec']),
  sent(1136, 'Au Québec, le vous marque le respect ou la distance.', 'In Québec, vous signals respect or distance.', '/o ke.bɛk lə vu maʁk lə ʁɛs.pɛ u la dis.tɑ̃s/', 'oh kay-BEHK | luh VOO | mark luh rehs-PEH | oo la dees-TAHⁿS', ['variantes', 'quebec']),
  sent(1137, "Le tu du Québec n'est pas impoli : il est chaleureux.", 'Québec’s tu is not rude: it is warm.', '/lə ty dy ke.bɛk nɛ pa ɛ̃.pɔ.li il ɛ ʃa.lœ.ʁø/', 'luh TÜ dü kay-BEHK | neh pa ehⁿ-po-LEE | ee-leh sha-luh-REU', ['variantes', 'quebec']),
  sent(1138, 'En Belgique et en Suisse, on fait à peu près comme en France.', 'In Belgium and Switzerland, people do roughly as in France.', '/ɑ̃ bɛl.ʒik e ɑ̃ sɥis ɔ̃ fɛ a pø pʁɛ kɔm ɑ̃ fʁɑ̃s/', 'ahⁿ behl-ZHEEK ay ahⁿ SWEESS | ohⁿ feh a peu PREH | kom ahⁿ FRAHⁿS', ['variantes', 'europe']),
  sent(1139, 'À Dakar, on vouvoie les aînés par respect.', 'In Dakar, people say vous to their elders out of respect.', '/a da.kaʁ ɔ̃ vu.vwa le.zɛ.ne paʁ ʁɛs.pɛ/', 'a da-KAR | ohⁿ voo-vwa lay-zeh-NAY | par rehs-PEH', ['variantes', 'afrique'], FCVDR),
  sent(1140, "L'âge et le statut comptent beaucoup dans le choix.", 'Age and status count for a lot in the choice.', '/lɑʒ e lə sta.ty kɔ̃t bo.ku dɑ̃ lə ʃwa/', 'LAHZH ay luh sta-TÜ | kohⁿt boh-koo dahⁿ luh SHWA', ['variantes', 'afrique']),
  sent(1141, 'Entre jeunes du même âge, le tu est normal partout.', 'Among young people of the same age, tu is normal everywhere.', '/ɑ̃tʁ ʒœn dy mɛm ɑʒ lə ty ɛ nɔʁ.mal paʁ.tu/', 'ahⁿtr ZHUHNN dü meh-MAHZH | luh TÜ eh nor-MAL par-TOO', ['variantes', 'pairs']),
  sent(1142, 'Au Québec, la caissière peut te tutoyer.', 'In Québec, the cashier may say tu to you.', '/o ke.bɛk la kɛ.sjɛʁ pø tə ty.twa.je/', 'oh kay-BEHK | la keh-SYEHR | peu tuh tü-twa-YAY', ['variantes', 'quebec']),
  sent(1143, 'Tonton, vous avez bien dormi ?', 'Uncle, did you sleep well?', '/tɔ̃.tɔ̃ vu.za.ve bjɛ̃ dɔʁ.mi/', 'tohⁿ-TOHⁿ | voo-za-vay byehⁿ dor-MEE', ['variantes', 'afrique']),
  sent(1144, "La règle change d'un pays à l'autre, la distance reste.", 'The rule changes from one country to another; the distance stays.', '/la ʁɛɡl ʃɑ̃ʒ dœ̃ pe.i a lotʁ la dis.tɑ̃s ʁɛst/', 'la REHGL shahⁿzh duhⁿ pay-EE a LOHTR | la dees-TAHⁿS REHST', ['rule', 'variantes'], ['flashcard'],
    rule('Une caissière de Montréal te dit tu. Est-ce impoli ?', 'Non. Au Québec, le tu est courant, même avec des inconnus. Le vous y marque le respect et la distance.')),
];

/* ── ACT 11 · DEUX MESSAGES, DEUX DISTANCES ─────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1145, "Tu peux m'envoyer tes plans avant jeudi ?", 'Can you send me your plans before Thursday?', '/ty pø mɑ̃.vwa.je te plɑ̃ a.vɑ̃ ʒø.di/', 'tü peu mahⁿ-vwa-yay tay PLAHⁿ | a-vahⁿ zheu-DEE', ['task', 'tu'], FCVDR),
  sent(1146, "Pourriez-vous m'envoyer votre contrat avant jeudi ?", 'Could you send me your contract before Thursday?', '/pu.ʁje vu mɑ̃.vwa.je vɔtʁ kɔ̃.tʁa a.vɑ̃ ʒø.di/', 'poo-ryay-VOO | mahⁿ-vwa-yay votr kohⁿ-TRA | a-vahⁿ zheu-DEE', ['task', 'vous'], FCVDR),
  sent(1147, 'Je vous remercie, et à vendredi.', 'Thank you, and see you on Friday.', '/ʒə vu ʁə.mɛʁ.si e a vɑ̃.dʁə.di/', 'zhuh voo ruh-mehr-SEE | ay a vahⁿ-druh-DEE', ['task', 'vous']),
  sent(1148, 'Merci, et bonne soirée à Montréal.', 'Thanks, and have a good evening in Montréal.', '/mɛʁ.si e bɔn swa.ʁe a mɔ̃.ʁe.al/', 'mehr-SEE | ay bonn swa-RAY a mohⁿ-ray-AL', ['task', 'tu']),
  sent(1149, 'Théo, on travaille ensemble tous les jours : on se tutoie ?', 'Théo, we work together every day: shall we say tu?', '/te.o ɔ̃ tʁa.vaj ɑ̃.sɑ̃bl tu le ʒuʁ ɔ̃ sə ty.twa/', 'tay-OH | ohⁿ tra-vahy ahⁿ-SAHⁿBL too lay ZHOOR | ohⁿ suh tü-TWA', ['task', 'passage']),
  sent(1150, 'Même nouvelle, deux distances.', 'Same news, two distances.', '/mɛm nu.vɛl dø dis.tɑ̃s/', 'mem noo-VEHL | deu dees-TAHⁿS', ['task', 'distance']),
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
 *  §I. THE LONG TEXTS
 *
 *  Every reading lives here so the reading and the quiz cannot drift apart.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the Lyon firm's welcome note to a new recruit. About 150 words. */
export const GUIDE_TEXT =
  "Bienvenue au cabinet Girard. Voici quelques usages avant votre premier jour. Au cabinet, nous vouvoyons tous les clients, sans exception, même ceux que nous connaissons depuis vingt ans. Entre collègues, le vouvoiement est la règle au début. Si un associé vous propose le tutoiement, acceptez simplement : c'est un signe de confiance. Ne le proposez pas vous-même la première semaine. À l'accueil, Madame Roux connaît tout le monde. Elle vous dira vous, et vous lui direz vous aussi. Devant un client, deux collègues qui se tutoient à la pause reviennent au vous. Dans vos courriels, commencez par « Bonjour Madame » ou « Bonjour Monsieur », jamais par « Salut ». Enfin, si le tu vous échappe, ce n'est pas un drame : excusez-vous d'un mot et continuez. Bonne arrivée à Lyon.";

/** Act 4: an advice column, a letter and its answer. About 150 words. */
export const COURRIER_TEXT =
  "Chère Nadia, je viens de commencer dans une banque, à Genève. Ma directrice a soixante ans et tout le monde la vouvoie. Moi, j'en ai vingt-six. Les collègues de mon âge me tutoient déjà. Est-ce que je peux proposer le tu à ma directrice ? Inès.\n\nChère Inès, non, attends. Le tu se propose presque toujours dans le même sens : de la personne la plus âgée, ou qui a le plus de poids, vers l'autre. Ta directrice décide de la distance. Si tu proposes la première, tu décides à sa place. Entre collègues du même âge, en revanche, n'importe qui peut demander : « On se tutoie ? » Avec un client, c'est lui qui choisit. Et si ta directrice te dit un jour « Tu peux me tutoyer », accepte simplement, sans faire de discours. Nadia.";

/** Act 7: the same note left twice, for a sister and for a stranger. About 150 words. */
export const MOTS_TEXT =
  "Pour Aminata : Coucou ! Merci de garder Minou ce week-end. Tes clés sont sous le pot de fleurs. Donne-lui ses croquettes le matin et le soir, et change son eau. Assieds-toi sur le balcon, il fait beau. Si tu as un souci, appelle-moi. Je te laisse le numéro de l'hôtel sur le frigo. Bisous, Awa.\n\nPour la nouvelle gardienne : Bonjour, et merci de garder Minou ce week-end. Vos clés sont sous le pot de fleurs. Donnez-lui ses croquettes le matin et le soir, et changez son eau. Asseyez-vous sur le balcon, il fait beau. Si vous avez un souci, appelez-moi. Je vous laisse le numéro de l'hôtel sur le frigo. Bonne journée, Awa Diallo.";

/** Act 9: the same news in three emails. About 130 words. */
export const COURRIELS_TEXT =
  "Salut Julie, petite nouvelle de Lyon : la réunion avec le cabinet passe à vendredi. Tu peux m'envoyer le dossier avant jeudi ? Merci, et bonne soirée à Montréal. À plus !\n\nBonjour Maître Girard, je vous confirme notre rendez-vous de vendredi, à dix heures, à votre cabinet. Pourriez-vous m'envoyer le dossier avant jeudi ? Je vous remercie. Bien cordialement,\n\nMadame, Monsieur, je vous écris au sujet de la réunion du 14 mars. Nous voulons la déplacer au vendredi 15. Merci de nous confirmer cette date. Je vous prie d'agréer l'expression de mes salutations distinguées.";

/** Act 10: four francophones on tu and vous. About 140 words. */
export const VOIX_TEXT =
  "Mathieu, Montréal : Ici, on se tutoie vite. Mon patron me tutoie, la caissière du dépanneur aussi, et beaucoup d'élèves tutoient leurs profs. Le vous, je le garde pour les personnes âgées, ou pour montrer du respect.\n\nLucie, Liège : En Belgique, c'est à peu près comme en France. Je vouvoie mes clients et les gens que je ne connais pas, et je tutoie les collègues de mon âge.\n\nNicolas, Genève : En Suisse romande, le vous reste la règle au bureau, surtout avec les plus âgés. Mais au club de foot, tout le monde se tutoie.\n\nAwa, Dakar : Chez nous, l'âge compte beaucoup. Je vouvoie souvent mes aînés, et j'appelle un homme plus âgé « tonton ». Entre jeunes, on se tutoie tout de suite.";

/** Act 11: the model the learner imitates. Sofia, at a Québec design
 *  studio, moves a presentation: one message in tu, one in vous, and a
 *  switch line. About 120 words. */
export const MODELE_TEXT =
  "Salut Mathieu, changement de plan : la présentation au client passe à lundi, quatorze heures. Tu peux imprimer tes maquettes avant vendredi ? Je t'envoie la salle ce soir. Merci, et bonne fin de semaine !\n\nBonjour Madame Lefebvre, je vous confirme que la présentation aura lieu lundi, à quatorze heures, dans nos bureaux. Pourriez-vous nous envoyer votre logo avant vendredi ? Je vous remercie, et je reste à votre disposition. Bien cordialement, Sofia.\n\nEt à Karine, la nouvelle graphiste, qui a son âge : « On travaille dans le même bureau : on se tutoie ? »";
