// b1.38.l1 « Écouter sans tout comprendre » — the authored corpus, the imports,
// the anchor listenings and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (the workshop shape, strategy variant) on
// top of B1-BUILD-PLAYBOOK.md. The listening twin of b1.37 « Lire sans tout
// comprendre » (strategies-lecture-*), whose structure it mirrors.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (do not rename; a later lesson may quote the reframe):
// REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   LISTENING STRATEGY: GETTING THE MEANING AND THE KEY DETAILS OF SPOKEN
//   FRENCH A LITTLE ABOVE YOUR LEVEL WITHOUT HEARING EVERY WORD.
//
//     la prédiction   what the situation already tells you before the
//                     first word (who speaks, where, why, which words)
//     l'essentiel     two passes: the gist first, the details second, and
//                     the gist alone when there is only one pass
//     le mot-clé      the stressed, content-carrying words, and the small
//                     word that turns everything (pas, sauf, et non plus)
//     les chiffres    numbers, times, dates and spelled names as the ear
//                     meets them (quinze / cinquante, 17 h, phone numbers
//                     digit by digit in Québec, two by two in France)
//     le connecteur   spoken signposts (d'abord, ensuite, par contre, du
//                     coup, bref, en fait) read BY EAR
//     la réduction    everyday spoken forms that block a B1 ear: chuis,
//                     chais pas, t'as, t'es, y a, the dropped ne
//     la béquille     fillers that carry no meaning: ben, euh, genre
//     faire répéter   asking for repetition and checking in a live call:
//                     pardon, vous avez dit X ou Y, si je comprends bien
//     la source       fact, sourced claim, rumour and opinion on the radio
//     l'épreuve       TCF / TEF compréhension orale: the question first,
//                     one listening, never stuck on one word
//     prendre note    the graded task: a written note from a voicemail
//
//   Act by act: the wall of sound (1), before you listen (2), the gist
//   first (3), the words that carry (4), numbers, dates and names (5), the
//   spoken signposts (6), French as it is spoken (7), asking for repetition
//   (8), fact or opinion on the radio (9), the listening paper (10), the
//   voicemail and the note (11).
//
//   NOT OWNED, CITED ONLY:
//     - reading strategy is b1.37's. Its reframe is QUOTED (act 1 and the
//       roundup), and act 9 replays b1.37's own source lines (.1161-.1166)
//       to the ear. Predict, gist first and « the question first » are the
//       same moves as b1.37's acts 3, 4 and 10, and are cited as such.
//     - connectors as GRAMMAR are b1.30 to b1.32's. b1.30's reframe is quoted
//       on act 6's signpost deck; nothing here builds a clause with them.
//     - the dropped « ne » is b1.20's (its `oral` rows are imported in act 7)
//       and the three registers are b1.25's (its reframe is quoted in act 7,
//       its « pantoute » and « t'as » rows are imported).
//     - septante / nonante recognition is a1.27's, big numbers a1.28's, both
//       cited in act 5; b1.37 act 5 read numbers on the page.
//     - asking to repeat at a counter is A2 (a2 au-restaurant rows .133 and
//       .134 are imported): this lesson adds checking by reformulation.
//     - the subjunctive (b1.14 to b1.16) appears in NO authored French string.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `strategies-de-comprehension` (« Les stratégies de
//     compréhension », education, b1-b2) was created in Postgres on
//     2026-09-26 for b1.37 and this lesson. Sub-theme for these rows:
//     « écouter ». v75 (2026-09-27) carried b1.37's 191 rows (.1000-.1199)
//     into seed.json. The theme row itself was not found in the seed's theme
//     list when read on 2026-09-27; a readiness warning about it is expected.
//
//  2. ID BLOCK: this lesson owns `.1200`-`.1399` AND NOTHING ELSE (build log,
//     waves 7 to 9 table). `.1000`-`.1199` is b1.37's, published: never
//     authored here, but REUSED through `src()` because the seed carries it.
//     Used: `.1200`-`.1389`, in eleven act blocks (§H). Six planned rows were
//     DROPPED (.1232, .1286, .1304, .1343, .1369, .1390): those rows
//     were exact twins of published seed rows (two of them B1, which the
//     import blocks), so the published rows are imported instead (§F).
//     Seed read 2026-09-27: nothing at or above `.1200` in the theme.
//
//  3. Every reused id in §F was read out of seed.json on 2026-09-27 and its
//     `fr` is copied verbatim wherever a section prints it, through `src()`.
//     The seed carries NO row with « chuis », « chais pas », « du coup »,
//     « ben », « si je comprends bien » or « c'est bien ça », so acts 6 to 8
//     author theirs.
//
//  4. THE ANCHOR LISTENINGS ARE AUTHORED, NOT QUOTED. They are written to
//     sound like a Montréal métro tannoy, a Geneva airport announcement, a
//     Québec City radio weather bulletin, a Montréal traffic report, a clinic
//     phone confirmation, a Montréal podcast, a Montréal street interview, a
//     customer-service call, a Québec City radio call-in, a lecture and a
//     landlord's voicemail. Every event, figure, company and person is
//     invented. Real places are used only as places (stations, bridges,
//     streets). Phone numbers are in the fictional 555-01xx range.
//
//  5. WRITTEN FOR TTS. Every listening line is spoken by fr-FR TTS, so:
//     phone numbers are written in WORDS as they are said (Québec digit by
//     digit), spelled names as letters separated by commas, clock times as
//     « 14 h 40 » (read « quatorze heures quarante »), and no line leans on
//     punctuation the voice cannot say.
//
//  6. RESPELLINGS. Hyphenated syllables, the last stressed syllable of each
//     group in caps, ü for French u, nasals closed with ⁿ, no U+203F tie.
//     « panne » is `PANN` and « reviennent » `ruh-VYENN`, doubled for the
//     nasal checker (a2.34's trick): both consonants are really pronounced.
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
  id: 'b1.38',
  seq: 38,
  title: 'Listening Strategies',
  sub: 'Écouter sans tout comprendre',
  canDo: 'Can get the main point and the key details (times, numbers, names) of announcements, messages, radio and conversations slightly above their level by predicting, listening for stressed words and signposts, decoding everyday spoken forms, asking for repetition and telling fact from opinion, and can pass the information on in a short written note',
  prereqUnitIds: ['b1.37', 'b1.20', 'b1.25'],
} as const;

export const LESSON_ID = 'b1.38.l1';
export const THEME = 'strategies-de-comprehension';
export const LEVEL = 'b1' as const;

/** ONE block, by the house rule for a theme with no published import below 1000. */
export const ID_RANGES = [[1200, 1399]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/** b1.37's rows, published and carried by the seed: reused, never authored. */
export const B137 = (n: number) => `fr.b1.${THEME}.${n}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A1 and A2 citations use the house English trail label (« lesson 27 in
 *  A1 »), resolved through `unitRef` from the shipped `unit.seq`. B1
 *  citations on a French surface are French, from the plan, the way every
 *  B1 lesson writes them (« la leçon 37 du B1 »).
 * ══════════════════════════════════════════════════════════════════════════ */

export const NOMBRES21_UNIT = 'a1.27';
export const GRANDS_NOMBRES_UNIT = 'a1.28';
export const NEGATION_UNIT = 'b1.20';
export const REGISTRES_UNIT = 'b1.25';
export const LECTURE_UNIT = 'b1.37';

/** TODO(import): drop once every b1 unit is a row in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.08': 8, 'b1.20': 20, 'b1.25': 25, 'b1.30': 30, 'b1.31': 31, 'b1.32': 32,
  'b1.37': 37, 'b1.38': 38, 'b1.39': 39,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const NOMBRES21_REF = unitRef(NOMBRES21_UNIT);
export const GRANDS_NOMBRES_REF = unitRef(GRANDS_NOMBRES_UNIT);
export const NEGATION_REF = refFr(NEGATION_UNIT);
export const REGISTRES_REF = refFr(REGISTRES_UNIT);
export const LECTURE_REF = refFr(LECTURE_UNIT);
/** b1.30 to b1.32, cited as one span: they own the connectors as grammar. */
export const CONNECTEURS_REF = 'les leçons 30 à 32 du B1';
export const NEXT_REF = refFr('b1.39');

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED, never retyped
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B137_REFRAME, REFRAME_EN as B137_REFRAME_EN } from './strategies-lecture-corpus.ts';
export { REFRAME as B130_REFRAME } from './coordination-corpus.ts';
export { REFRAME as B125_REFRAME } from './registres-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE NET. Speech is a river: it does not stop and it does not come back.
 *  A listener who tries to catch every drop in a cup catches nothing. A net
 *  lets the water through and keeps what carries the meaning: the
 *  situation, the stressed words, the numbers and names, the signposts, the
 *  small word that turns a sentence.
 *
 *  It is NOT « let the hard parts go ». Acts 4, 5 and 8 exist because one
 *  number, one « pas » or one name can BE the meaning, and the lesson teaches
 *  the learner to catch THAT word, or to ask for it again.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Attrape le sens, pas chaque mot.';
export const REFRAME_EN = 'Catch the meaning, not every word.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: "Le sens d'abord, les mots ensuite.",
    why: "b1.37's reframe, and quoted here. As a LISTENING rule it fails on « ensuite »: a page waits for you to come back to a word, a voice does not. There is no « later » for the words of an announcement, so the listening rule has to say what to keep while it passes.",
  },
  {
    text: "Tu n'as pas besoin de tout entendre.",
    why: 'True, and it licenses giving up. False where acts 4, 5 and 8 have to hold: « le pont n\'est PAS fermé », « quinze » heard as « cinquante », a phone number. The lesson is about what to catch, not about how much can be missed.',
  },
  {
    text: 'Écoute les mots-clés.',
    why: 'One technique out of ten (act 4). It says nothing about predicting, the second pass, the spoken forms, asking for repetition or who is speaking.',
  },
  {
    text: 'Fais répéter.',
    why: 'The best line for act 8, and impossible for acts 1 to 7 and 9 to 11: nobody repeats a station tannoy, a radio bulletin or an exam recording on request.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-27 and its French is in the
 *  trailing comment. `named only` rows carry no `flashcard` drill, so no
 *  deckTranche can release them. `NOT_SPEAKABLE` lists the rows with no
 *  `voiceflash`, which a `practice` speak section may never name.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a2.transports-quotidiens.208',     // Prochain arrêt, Châtelet. Correspondance ligne quatre.
  ],
  act2: [
    'fr.a1.deplacements.162',             // l'embarquement
  ],
  act3: [
    'fr.b1.projets-et-futur.772',          // Il pleuvrait toute la semaine, selon la météo.
  ],
  act4: [
    B137(1073),                            // Le train pour Ottawa a un retard de vingt minutes.
  ],
  act5: [
    B137(1086),                            // Septante pour cent des habitants lisent un journal en ligne.
    B137(1087),                            // Le billet coûtera nonante euros.
    'fr.a1.dictee.132',                    // Comment ça s'écrit ?  (named only)
    'fr.a2.systeme-de-sante.005',          // la carte d'assurance maladie
  ],
  act6: [
    'fr.b1.connecteurs-logiques.1542',     // Le quartier est calme. Par contre, il n'y a pas de commerces.
    B137(1132),                            // Pourtant, il faut rester prudent.
    B137(1135),                            // Bref, la semaine de quatre jours peut marcher.
    'fr.a2.transports-quotidiens.006',     // l'autopartage
  ],
  act7: [
    'fr.b1.negation-et-restriction.1167',  // Je sais pas.
    'fr.b1.negation-et-restriction.1171',  // Y a personne.
    'fr.b1.negation-et-restriction.1175',  // On a plus de lait.
    'fr.b1.negation-et-restriction.1177',  // À l'oral, ne tombe souvent. À l'écrit, il reste toujours.
    'fr.b1.langue-soignee.1271',           // T'as vu l'heure ?
    'fr.b1.langue-soignee.1378',           // pantoute
    'fr.a2.prepositions-essentielles.192', // Euh... six mois.
  ],
  act8: [
    'fr.a2.au-restaurant.133',             // Vous pouvez répéter, s'il vous plaît ?
    'fr.a2.au-restaurant.134',             // Plus lentement, s'il vous plaît.
    'fr.a2.au-restaurant.132',             // Pardon ?
  ],
  act9: [
    B137(1161),                            // Selon la Région, les accidents ont baissé de 15 %.
    B137(1162),                            // D'après une association, ce chiffre serait plus faible.
    B137(1163),                            // Je trouve que c'est une bonne chose.
    B137(1164),                            // Il paraît qu'on va bientôt les interdire.
    B137(1165),                            // La Région n'a annoncé aucune interdiction.
    B137(1166),                            // À mon avis, ce serait une erreur.
    B137(1167),                            // Le maire a déclaré que le projet serait prêt en juin.
    B137(1170),                            // Selon la police, le conducteur roulait trop vite.
  ],
  act10: [
    'fr.b1.connecteurs-logiques.1017',     // or
  ],
  act11: [
    'fr.b1.paroles-rapportees.1189',       // la boîte vocale
    'fr.b1.paroles-rapportees.1187',       // laisser un message
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.a1.dictee.132',                      // voiceflash, review
];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  'fr.b1.negation-et-restriction.1177',    // flashcard only (a rule card)
  'fr.a1.deplacements.162',                // flashcard, review
  'fr.a2.systeme-de-sante.005',            // flashcard, review
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  A WORKSHOP CORPUS HOLDS PHRASES THAT DO A JOB. Most rows are a line of an
 *  anchor listening (so `ln()` speaks exactly the corpus French), a question
 *  a listener asks, a spoken form and its written twin, or a line the
 *  learner can reuse in the graded note.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['strategies-ecoute'], ...extra,
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

/* ── ACT 1 · LE MUR DE SON ─────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1200, "Votre attention, s'il vous plaît.", 'Your attention, please.', '/vɔ.tʁa.tɑ̃.sjɔ̃ sil vu plɛ/', 'vo-tra-tahⁿ-SYOHⁿ seel voo PLEH', ['annonce', 'metro']),
  sent(1201, "En raison d'une panne, le service est interrompu sur la ligne orange.", 'Because of a breakdown, service is interrupted on the orange line.', '/ɑ̃ ʁɛ.zɔ̃ dyn pan lə sɛʁ.vis ɛ.tɛ̃.te.ʁɔ̃.py syʁ la liɲ ɔ.ʁɑ̃ʒ/', 'ahⁿ reh-zohⁿ dün PANN | luh sehr-VEESS eh-tehⁿ-tay-rohⁿ-PÜ sür la leeñ o-RAHⁿZH', ['annonce', 'metro', 'quebec']),
  sent(1202, 'Le métro ne circule pas entre Berri-UQAM et Jean-Talon.', 'The metro is not running between Berri-UQAM and Jean-Talon.', '/lə me.tʁo nə siʁ.kyl pa ɑ̃tʁ bɛ.ʁi y.kam e ʒɑ̃ ta.lɔ̃/', 'luh may-TROH nuh seer-kül PA ahⁿtr beh-REE ü-KAM ay zhahⁿ ta-LOHⁿ', ['annonce', 'metro']),
  sent(1203, 'Les stations Sherbrooke, Mont-Royal et Laurier ne sont pas desservies.', 'Sherbrooke, Mont-Royal and Laurier stations are not being served.', '/le sta.sjɔ̃ ʃɛʁ.bʁuk mɔ̃.ʁwa.jal e lo.ʁje nə sɔ̃ pa de.sɛʁ.vi/', 'lay sta-SYOHⁿ shehr-BROOK mohⁿ-rwa-YAL ay lo-RYAY nuh sohⁿ pa day-sehr-VEE', ['annonce', 'metro']),
  sent(1204, "Des navettes d'autobus sont en service à la sortie de la station.", 'Shuttle buses are running from the station exit.', '/de na.vɛt do.to.bys sɔ̃.tɑ̃ sɛʁ.vis a la sɔʁ.ti də la sta.sjɔ̃/', 'day na-VET doh-toh-BÜSS sohⁿ-tahⁿ sehr-VEESS a la sor-TEE duh la sta-SYOHⁿ', ['annonce', 'metro']),
  sent(1205, 'La reprise du service est prévue vers dix-huit heures trente.', 'Service is expected to resume at around 6:30 p.m.', '/la ʁə.pʁiz dy sɛʁ.vis ɛ pʁe.vy vɛʁ di.zɥi.tœʁ tʁɑ̃t/', 'la ruh-PREEZ dü sehr-VEESS eh pray-VÜ vehr dee-zwee-tuhr TRAHⁿT', ['annonce', 'metro', 'chiffre']),
  sent(1206, 'Nous nous excusons des inconvénients.', 'We apologise for the inconvenience.', '/nu nu.zɛks.ky.zɔ̃ de.zɛ̃.kɔ̃.ve.njɑ̃/', 'noo noo-zeks-kü-ZOHⁿ day-zehⁿ-kohⁿ-vay-NYAHⁿ', ['annonce', 'metro']),
  sent(1207, 'Je répète : le service est interrompu entre Berri-UQAM et Jean-Talon.', 'I repeat: service is interrupted between Berri-UQAM and Jean-Talon.', '/ʒə ʁe.pɛt lə sɛʁ.vis ɛ.tɛ̃.te.ʁɔ̃.py ɑ̃tʁ bɛ.ʁi y.kam e ʒɑ̃ ta.lɔ̃/', 'zhuh ray-PET | luh sehr-VEESS eh-tehⁿ-tay-rohⁿ-PÜ ahⁿtr beh-REE ü-KAM ay zhahⁿ ta-LOHⁿ', ['annonce', 'metro', 'repetition']),
  sent(1208, "J'essaie de comprendre chaque mot.", 'I try to understand every word.', '/ʒe.sɛ də kɔ̃.pʁɑ̃dʁ ʃak mo/', 'zhay-SEH duh kohⁿ-PRAHⁿDR shak MOH', ['strategie', 'piege']),
  sent(1209, "J'écoute d'abord ce qui change pour moi.", 'First I listen for what changes for me.', '/ʒe.kut da.bɔʁ sə ki ʃɑ̃ʒ puʁ mwa/', 'zhay-KOOT da-BOR suh kee SHAHⁿZH poor MWA', ['strategie'], FCVDR),
  sent(1210, REFRAME, REFRAME_EN, '/a.tʁap lə sɑ̃s pa ʃak mo/', 'a-TRAP luh SAHⁿS pa shak MOH', ['rule', 'reframe'], ['flashcard'],
    rule('Une annonce passe trop vite pour toi. Que cherches-tu ?', 'Le sens : ce qui se passe, et ce que tu dois faire. Les autres mots peuvent passer.')),
  sent(1211, "Je n'ai pas besoin d'entendre chaque mot.", 'I do not need to hear every word.', '/ʒə ne pa bə.zwɛ̃ dɑ̃.tɑ̃dʁ ʃak mo/', 'zhuh nay pa buh-zwehⁿ dahⁿ-TAHⁿDR shak MOH', ['strategie'], FCVDR),
  sent(1212, 'Quelle ligne, quel problème, quoi faire ?', 'Which line, what problem, what to do?', '/kɛl liɲ kɛl pʁɔ.blɛm kwa fɛʁ/', 'kel LEEÑ | kel pro-BLEM | kwa FEHR', ['question']),
  sent(1213, "À l'oral, les mots ne reviennent pas.", 'In speech, the words do not come back.', '/a lɔ.ʁal le mo nə ʁə.vjɛn pa/', 'a lo-RAL lay MOH nuh ruh-VYENN PA', ['strategie'], FCVDR),
  sent(1214, 'La ligne orange est arrêtée entre Berri-UQAM et Jean-Talon.', 'The orange line is stopped between Berri-UQAM and Jean-Talon.', '/la liɲ ɔ.ʁɑ̃ʒ ɛ.ta.ʁɛ.te ɑ̃tʁ bɛ.ʁi y.kam e ʒɑ̃ ta.lɔ̃/', 'la leeñ o-RAHⁿZH eh-ta-reh-TAY ahⁿtr beh-REE ü-KAM ay zhahⁿ ta-LOHⁿ', ['note', 'essentiel']),
  sent(1215, "Il faut prendre la navette jusqu'à Jean-Talon.", 'You have to take the shuttle to Jean-Talon.', '/il fo pʁɑ̃dʁ la na.vɛt ʒys.ka ʒɑ̃ ta.lɔ̃/', 'eel foh prahⁿdr la na-VET zhüs-ka zhahⁿ ta-LOHⁿ', ['note', 'essentiel'], FCVDR),
  phrase(1216, 'une navette', 'a shuttle', '/yn na.vɛt/', 'ün na-VET', ['metro']),
  phrase(1217, 'le service est interrompu', 'service is interrupted', '/lə sɛʁ.vis ɛ.tɛ̃.te.ʁɔ̃.py/', 'luh sehr-VEESS eh-tehⁿ-tay-rohⁿ-PÜ', ['annonce']),
];

/* ── ACT 2 · AVANT D'ÉCOUTER ─────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1218, 'Information pour les passagers du vol 835 à destination de Montréal.', 'Information for passengers on flight 835 to Montreal.', '/ɛ̃.fɔʁ.ma.sjɔ̃ puʁ le pa.sa.ʒe dy vɔl ɥi.sɑ̃.tʁɑ̃t.sɛ̃k a dɛs.ti.na.sjɔ̃ də mɔ̃.ʁe.al/', 'ehⁿ-for-ma-SYOHⁿ poor lay pa-sa-ZHAY dü vol wee-sahⁿ-trahⁿt-SEHⁿK a dehs-tee-na-SYOHⁿ duh mohⁿ-ray-AL', ['annonce', 'aeroport', 'suisse']),
  sent(1219, "En raison de la météo à l'arrivée, le départ est retardé d'une heure.", 'Because of the weather on arrival, departure is delayed by one hour.', '/ɑ̃ ʁɛ.zɔ̃ də la me.te.o a la.ʁi.ve lə de.paʁ ɛ ʁə.taʁ.de dy.nœʁ/', 'ahⁿ reh-zohⁿ duh la may-tay-OH a la-ree-VAY | luh day-PAR eh ruh-tar-DAY dü-NUHR', ['annonce', 'aeroport']),
  sent(1220, "L'embarquement aura lieu à 14 h 40, porte B 32, et non plus porte A 12.", 'Boarding will be at 2:40 p.m., gate B32, and no longer gate A12.', '/lɑ̃.baʁ.kə.mɑ̃ o.ʁa ljø a ka.tɔʁ.zœʁ ka.ʁɑ̃t pɔʁt be tʁɑ̃t.dø e nɔ̃ ply pɔʁt a duz/', 'lahⁿ-bar-kuh-MAHⁿ oh-ra LYEU a ka-tor-zuhr ka-RAHⁿT | port bay trahⁿt-DEU | ay nohⁿ plü port a DOOZ', ['annonce', 'aeroport', 'chiffre']),
  sent(1221, 'Un bon de repas est offert au comptoir de la compagnie.', 'A meal voucher is offered at the airline desk.', '/œ̃ bɔ̃ də ʁə.pa ɛ.tɔ.fɛʁ o kɔ̃.twaʁ də la kɔ̃.pa.ɲi/', 'uhⁿ bohⁿ duh ruh-PA eh-to-FEHR oh kohⁿ-TWAR duh la kohⁿ-pa-ÑEE', ['annonce', 'aeroport']),
  sent(1222, 'Les passagers en correspondance seront pris en charge à Montréal.', 'Connecting passengers will be looked after in Montreal.', '/le pa.sa.ʒe ɑ̃ kɔ.ʁɛs.pɔ̃.dɑ̃s sə.ʁɔ̃ pʁi ɑ̃ ʃaʁʒ a mɔ̃.ʁe.al/', 'lay pa-sa-ZHAY ahⁿ ko-res-pohⁿ-DAHⁿS | suh-rohⁿ pree ahⁿ SHARZH a mohⁿ-ray-AL', ['annonce', 'aeroport']),
  sent(1223, 'Nous vous remercions de votre patience.', 'Thank you for your patience.', '/nu vu ʁə.mɛʁ.sjɔ̃ də vɔtʁ pa.sjɑ̃s/', 'noo voo ruh-mehr-SYOHⁿ duh votr pa-SYAHⁿS', ['annonce', 'aeroport']),
  sent(1224, 'Je répète : vol 835, embarquement à 14 h 40, porte B 32.', 'I repeat: flight 835, boarding at 2:40 p.m., gate B32.', '/ʒə ʁe.pɛt vɔl ɥi.sɑ̃.tʁɑ̃t.sɛ̃k ɑ̃.baʁ.kə.mɑ̃ a ka.tɔʁ.zœʁ ka.ʁɑ̃t pɔʁt be tʁɑ̃t.dø/', 'zhuh ray-PET | vol wee-sahⁿ-trahⁿt-SEHⁿK | ahⁿ-bar-kuh-MAHⁿ a ka-tor-zuhr ka-RAHⁿT | port bay trahⁿt-DEU', ['annonce', 'aeroport', 'repetition']),
  sent(1225, "Avant d'écouter, je me demande qui parle, où, et pourquoi.", 'Before listening, I ask myself who is speaking, where, and why.', '/a.vɑ̃ de.ku.te ʒə mə də.mɑ̃d ki paʁl u e puʁ.kwa/', 'a-vahⁿ day-koo-TAY zhuh muh duh-MAHⁿD kee PARL | OO | ay poor-KWA', ['prediction', 'strategie'], FCVDR),
  sent(1226, "À l'aéroport, j'attends une porte, une heure, et peut-être un retard.", 'At the airport I expect a gate, a time, and maybe a delay.', '/a la.e.ʁɔ.pɔʁ ʒa.tɑ̃ yn pɔʁt y.nœʁ e pø.tɛ.tʁœ̃ ʁə.taʁ/', 'a la-ay-ro-POR | zha-TAHⁿ ün PORT | ü-NUHR | ay peu-teh-truhⁿ ruh-TAR', ['prediction']),
  sent(1227, "Au téléphone avec la banque, j'attends mon nom, un numéro et une date.", 'On the phone with the bank, I expect my name, a number and a date.', '/o te.le.fɔn a.vɛk la bɑ̃k ʒa.tɑ̃ mɔ̃ nɔ̃ œ̃ ny.me.ʁo e yn dat/', 'oh tay-lay-FON a-vek la BAHⁿK | zha-TAHⁿ mohⁿ NOHⁿ | uhⁿ nü-may-ROH ay ün DAT', ['prediction']),
  sent(1228, "À la radio le matin, j'attends la météo et la circulation.", 'On the radio in the morning, I expect the weather and the traffic.', '/a la ʁa.djo lə ma.tɛ̃ ʒa.tɑ̃ la me.te.o e la siʁ.ky.la.sjɔ̃/', 'a la ra-DYOH luh ma-TEHⁿ | zha-TAHⁿ la may-tay-OH ay la seer-kü-la-SYOHⁿ', ['prediction']),
  sent(1229, "Chez le pharmacien, j'attends combien de fois par jour.", 'At the pharmacy, I expect how many times a day.', '/ʃe lə faʁ.ma.sjɛ̃ ʒa.tɑ̃ kɔ̃.bjɛ̃ də fwa paʁ ʒuʁ/', 'shay luh far-ma-SYEHⁿ | zha-TAHⁿ kohⁿ-byehⁿ duh FWA par ZHOOR', ['prediction']),
  sent(1230, 'La situation te dit déjà la moitié du message.', 'The situation already tells you half the message.', '/la si.tɥa.sjɔ̃ tə di de.ʒa la mwa.tje dy me.saʒ/', 'la see-twa-SYOHⁿ tuh dee day-ZHA la mwa-tyay dü may-SAZH', ['rule', 'prediction'], ['flashcard'],
    rule("Tu vas entendre une annonce à l'aéroport. Que sais-tu déjà ?", "Beaucoup : on va parler de ton vol, d'une porte, d'une heure, peut-être d'un retard.")),
  sent(1231, 'Mon vol part avec une heure de retard, de la porte B 32.', 'My flight leaves an hour late, from gate B32.', '/mɔ̃ vɔl paʁ a.vɛk y.nœʁ də ʁə.taʁ də la pɔʁt be tʁɑ̃t.dø/', 'mohⁿ VOL PAR a-vek ü-nuhr duh ruh-TAR | duh la port bay trahⁿt-DEU', ['note', 'essentiel']),
  phrase(1233, "retardé d'une heure", 'delayed by one hour', '/ʁə.taʁ.de dy.nœʁ/', 'ruh-tar-DAY dü-NUHR', ['aeroport']),
  phrase(1234, 'et non plus', 'and no longer', '/e nɔ̃ ply/', 'ay nohⁿ PLÜ', ['piege', 'mot-cle']),
];

/* ── ACT 3 · L'IDÉE D'ABORD ─────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1235, 'Bonjour à tous, voici la météo pour la région de Québec.', 'Hello everyone, here is the weather for the Québec City region.', '/bɔ̃.ʒu.ʁa tus vwa.si la me.te.o puʁ la ʁe.ʒjɔ̃ də ke.bɛk/', 'bohⁿ-zhoo-ra TOOSS | vwa-SEE la may-tay-OH poor la ray-zhyohⁿ duh kay-BEK', ['radio', 'meteo']),
  sent(1236, 'Ce matin, ciel gris et quelques averses de neige.', 'This morning, grey skies and a few snow showers.', '/sə ma.tɛ̃ sjɛl ɡʁi e kɛl.kə.za.vɛʁs də nɛʒ/', 'suh ma-TEHⁿ | syel GREE ay kel-kuh-za-vehrs duh NEZH', ['radio', 'meteo']),
  sent(1237, 'Cet après-midi, le vent se lève : avec le refroidissement éolien, on ressentira moins vingt-deux.', 'This afternoon the wind picks up: with the wind chill it will feel like minus twenty-two.', '/sɛ.ta.pʁɛ.mi.di lə vɑ̃ sə lɛv a.vɛk lə ʁə.fʁwa.dis.mɑ̃ e.ɔ.ljɛ̃ ɔ̃ ʁə.sɑ̃.ti.ʁa mwɛ̃ vɛ̃t.dø/', 'seh-ta-preh-mee-DEE luh vahⁿ suh LEV | a-vek luh ruh-frwa-dees-mahⁿ ay-o-LYEHⁿ | ohⁿ ruh-sahⁿ-tee-RA mwehⁿ vehⁿt-DEU', ['radio', 'meteo', 'quebec']),
  sent(1238, 'Demain, retour du soleil, mais le froid reste là.', 'Tomorrow the sun comes back, but the cold stays.', '/də.mɛ̃ ʁə.tuʁ dy sɔ.lɛj mɛ lə fʁwa ʁɛst la/', 'duh-MEHⁿ | ruh-toor dü so-LEHY | meh luh FRWA rest LA', ['radio', 'meteo']),
  sent(1239, 'Pour la fin de semaine, on annonce un redoux, avec des maximums autour de zéro.', 'For the weekend a mild spell is forecast, with highs around zero.', '/puʁ la fɛ̃ də sə.mɛn ɔ̃.na.nɔ̃s œ̃ ʁə.du a.vɛk de mak.si.mɔm o.tuʁ də ze.ʁo/', 'poor la fehⁿ duh suh-MENN | ohⁿ-na-NOHⁿS uhⁿ ruh-DOO | a-vek day mak-see-MOMM oh-toor duh zay-ROH', ['radio', 'meteo', 'quebec']),
  sent(1240, 'Bref, sortez les tuques et les mitaines.', 'In short, get out your woolly hats and mittens.', '/bʁɛf sɔʁ.te le tyk e le mi.tɛn/', 'BREF | sor-TAY lay TÜK ay lay mee-TENN', ['radio', 'meteo', 'quebec']),
  sent(1241, 'Bonne journée, et prudence sur les routes.', 'Have a good day, and take care on the roads.', '/bɔn ʒuʁ.ne e pʁy.dɑ̃s syʁ le ʁut/', 'bon zhoor-NAY | ay prü-DAHⁿS sür lay ROOT', ['radio', 'meteo']),
  sent(1242, 'Première écoute : de quoi ça parle, en gros ?', 'First listening: what is it about, roughly?', '/pʁə.mjɛ.ʁe.kut də kwa sa paʁl ɑ̃ ɡʁo/', 'pruh-myeh-ray-KOOT | duh kwa sa PARL | ahⁿ GROH', ['essentiel', 'strategie'], FCVDR),
  sent(1243, "Deuxième écoute : les détails dont j'ai besoin.", 'Second listening: the details I need.', '/dø.zjɛ.me.kut le de.taj dɔ̃ ʒe bə.zwɛ̃/', 'deu-zyeh-may-KOOT | lay day-TAHY dohⁿ zhay buh-ZWEHⁿ', ['essentiel', 'strategie'], FCVDR),
  sent(1244, "L'idée d'abord, les détails à la deuxième écoute.", 'The idea first, the details on the second listening.', '/li.de da.bɔʁ le de.taj a la dø.zjɛ.me.kut/', 'lee-DAY da-BOR | lay day-TAHY a la deu-zyeh-may-KOOT', ['rule', 'essentiel'], ['flashcard'],
    rule('Tu écoutes un message pour la première fois. Tu cherches quoi ?', "L'idée générale : de quoi ça parle, et si c'est une bonne ou une mauvaise nouvelle.")),
  sent(1245, 'En gros, il fait très froid, mais ce sera plus doux la fin de semaine.', 'Basically, it is very cold, but it will be milder at the weekend.', '/ɑ̃ ɡʁo il fɛ tʁɛ fʁwa mɛ sə sə.ʁa ply du la fɛ̃ də sə.mɛn/', 'ahⁿ GROH | eel feh treh FRWA | meh suh suh-RA plü DOO la fehⁿ duh suh-MENN', ['note', 'essentiel'], FCVDR),
  phrase(1246, 'la fin de semaine', 'the weekend (Québec)', '/la fɛ̃ də sə.mɛn/', 'la fehⁿ duh suh-MENN', ['quebec']),
  phrase(1247, 'le refroidissement éolien', 'wind chill (Québec)', '/lə ʁə.fʁwa.dis.mɑ̃ e.ɔ.ljɛ̃/', 'luh ruh-frwa-dees-mahⁿ ay-o-LYEHⁿ', ['quebec', 'meteo']),
  phrase(1248, 'une tuque', 'a woolly hat (Québec)', '/yn tyk/', 'ün TÜK', ['quebec']),
  phrase(1249, 'un redoux', 'a mild spell', '/œ̃ ʁə.du/', 'uhⁿ ruh-DOO', ['meteo']),
  sent(1250, "Si je n'ai qu'une écoute, je garde l'idée.", 'If I only get one listening, I keep the idea.', '/si ʒə ne ky.ne.kut ʒə ɡaʁd li.de/', 'see zhuh nay kü-nay-KOOT | zhuh gard lee-DAY', ['essentiel', 'strategie'], FCVDR),
];

/* ── ACT 4 · LES MOTS QUI PORTENT ───────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1251, "Sur les routes ce matin, ça roule mal à l'entrée de Montréal.", 'On the roads this morning, traffic is bad coming into Montreal.', '/syʁ le ʁut sə ma.tɛ̃ sa ʁul mal a lɑ̃.tʁe də mɔ̃.ʁe.al/', 'sür lay ROOT suh ma-TEHⁿ | sa rool MAL a lahⁿ-tray duh mohⁿ-ray-AL', ['radio', 'circulation']),
  sent(1252, "Le pont Jacques-Cartier est fermé dans les deux directions jusqu'à neuf heures.", 'The Jacques-Cartier Bridge is closed in both directions until nine.', '/lə pɔ̃ ʒak kaʁ.tje ɛ fɛʁ.me dɑ̃ le dø di.ʁɛk.sjɔ̃ ʒys.ka nœ.vœʁ/', 'luh pohⁿ zhak-kar-TYAY eh fehr-MAY | dahⁿ lay deu dee-rek-SYOHⁿ zhüs-ka nuh-VUHR', ['radio', 'circulation']),
  sent(1253, "Sur l'autoroute 40 en direction est, un accident bloque deux voies.", 'On Highway 40 eastbound, an accident is blocking two lanes.', '/syʁ lo.to.ʁut ka.ʁɑ̃t ɑ̃ di.ʁɛk.sjɔ̃ ɛst œ̃.nak.si.dɑ̃ blɔk dø vwa/', 'sür loh-toh-root ka-RAHⁿT ahⁿ dee-rek-syohⁿ EST | uhⁿ-nak-see-DAHⁿ blok deu VWA', ['radio', 'circulation']),
  sent(1254, 'Comptez trente minutes de plus.', 'Allow thirty extra minutes.', '/kɔ̃.te tʁɑ̃t mi.nyt də plys/', 'kohⁿ-TAY trahⁿt mee-NÜT duh PLÜSS', ['radio', 'circulation']),
  sent(1255, "Le pont Champlain, lui, n'est pas touché : ça roule bien.", 'The Champlain Bridge, however, is not affected: traffic is moving well.', '/lə pɔ̃ ʃɑ̃.plɛ̃ lɥi nɛ pa tu.ʃe sa ʁul bjɛ̃/', 'luh pohⁿ shahⁿ-PLEHⁿ | LWEE | neh pa too-SHAY | sa rool BYEHⁿ', ['radio', 'circulation', 'piege']),
  sent(1256, 'Dans le métro, aucun problème à signaler.', 'In the metro, no problems to report.', '/dɑ̃ lə me.tʁo o.kœ̃ pʁɔ.blɛm a si.ɲa.le/', 'dahⁿ luh may-TROH | oh-kuhⁿ pro-BLEM a see-ña-LAY', ['radio', 'circulation']),
  sent(1257, 'Prochain point sur la circulation à huit heures quinze.', 'Next traffic update at 8:15.', '/pʁɔ.ʃɛ̃ pwɛ̃ syʁ la siʁ.ky.la.sjɔ̃ a ɥi.tœʁ kɛ̃z/', 'pro-shehⁿ PWEHⁿ sür la seer-kü-la-SYOHⁿ | a wee-tuhr KEHⁿZ', ['radio', 'circulation']),
  sent(1258, "J'écoute les mots forts : les noms, les verbes, les chiffres.", 'I listen for the strong words: nouns, verbs, numbers.', '/ʒe.kut le mo fɔʁ le nɔ̃ le vɛʁb le ʃifʁ/', 'zhay-koot lay moh FOR | lay NOHⁿ | lay VEHRB | lay SHEEFR', ['mot-cle', 'strategie'], FCVDR),
  sent(1259, 'En français, on appuie sur la fin du groupe de mots.', 'In French, the stress falls on the end of the word group.', '/ɑ̃ fʁɑ̃.sɛ ɔ̃.na.pɥi syʁ la fɛ̃ dy ɡʁup də mo/', 'ahⁿ frahⁿ-SEH | ohⁿ-na-PWEE sür la FEHⁿ dü groop duh MOH', ['mot-cle', 'rythme']),
  sent(1260, 'Les mots qui portent le sens sont souvent les plus forts.', 'The words that carry the meaning are often the strongest.', '/le mo ki pɔʁt lə sɑ̃s sɔ̃ su.vɑ̃ le ply fɔʁ/', 'lay moh kee port luh SAHⁿS | sohⁿ soo-VAHⁿ lay plü FOR', ['rule', 'mot-cle'], ['flashcard'],
    rule("Tu n'entends pas tout. Quels mots gardes-tu ?", 'Les noms, les verbes, les chiffres, et les petits mots qui changent tout : pas, sauf, plus.')),
  sent(1261, "Pont Jacques-Cartier, fermé, jusqu'à neuf heures.", 'Jacques-Cartier Bridge, closed, until nine.', '/pɔ̃ ʒak kaʁ.tje fɛʁ.me ʒys.ka nœ.vœʁ/', 'pohⁿ zhak-kar-TYAY | fehr-MAY | zhüs-ka nuh-VUHR', ['note', 'mot-cle']),
  sent(1262, 'Le petit mot « pas » change tout.', 'The little word pas changes everything.', '/lə pə.ti mo pa ʃɑ̃ʒ tu/', 'luh puh-tee moh PA | shahⁿzh TOO', ['mot-cle', 'piege'], FCVDR),
  sent(1263, "Le pont Champlain n'est pas fermé.", 'The Champlain Bridge is not closed.', '/lə pɔ̃ ʃɑ̃.plɛ̃ nɛ pa fɛʁ.me/', 'luh pohⁿ shahⁿ-PLEHⁿ | neh pa fehr-MAY', ['piege'], FCVDR),
  sent(1264, "La réunion n'a pas lieu jeudi, mais vendredi.", 'The meeting is not on Thursday but on Friday.', '/la ʁe.y.njɔ̃ na pa ljø ʒø.di mɛ vɑ̃.dʁə.di/', 'la ray-ü-NYOHⁿ na pa LYEU zheu-DEE | meh vahⁿ-druh-DEE', ['piege']),
  sent(1265, "Le vol de Paris est annulé, pas celui de Lyon.", 'The Paris flight is cancelled, not the Lyon one.', '/lə vɔl də pa.ʁi ɛ.ta.ny.le pa sə.lɥi də ljɔ̃/', 'luh vol duh pa-REE eh-ta-nü-LAY | pa suh-lwee duh LYOHⁿ', ['piege']),
  sent(1266, 'Le magasin ferme plus tôt, sauf le samedi.', 'The shop closes earlier, except on Saturdays.', '/lə ma.ɡa.zɛ̃ fɛʁm ply to sof lə sam.di/', 'luh ma-ga-ZEHⁿ fehrm plü TOH | sohf luh sam-DEE', ['piege']),
  phrase(1267, 'un mot-clé', 'a key word', '/œ̃ mo.kle/', 'uhⁿ moh-KLAY', ['mot-cle']),
  phrase(1268, 'ça roule mal', 'traffic is bad', '/sa ʁul mal/', 'sa rool MAL', ['circulation']),
];

/* ── ACT 5 · LES CHIFFRES, LES DATES ET LES NOMS ─────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1269, 'Bonjour, ici la clinique médicale du Plateau.', 'Hello, this is the Plateau medical clinic.', '/bɔ̃.ʒuʁ i.si la kli.nik me.di.kal dy pla.to/', 'bohⁿ-ZHOOR | ee-SEE la klee-neek may-dee-KAL dü pla-TOH', ['telephone', 'quebec']),
  sent(1270, 'Ce message confirme votre rendez-vous du mardi 14 mars à 15 h 45.', 'This message confirms your appointment on Tuesday 14 March at 3:45 p.m.', '/sə me.saʒ kɔ̃.fiʁm vɔtʁ ʁɑ̃.de.vu dy maʁ.di ka.tɔʁz maʁs a kɛ̃.zœʁ ka.ʁɑ̃t.sɛ̃k/', 'suh may-sazh kohⁿ-FEERM votr rahⁿ-day-VOO | dü mar-dee ka-torz MARS | a kehⁿ-zuhr ka-rahⁿt-SEHⁿK', ['telephone', 'chiffre', 'date']),
  sent(1271, 'Vous verrez la docteure Nguyen, au troisième étage, bureau 312.', 'You will see Dr Nguyen, on the third floor, office 312.', '/vu ve.ʁe la dɔk.tœʁ ŋu.jɛn o tʁwa.zjɛ.me.taʒ by.ʁo tʁwa sɑ̃ duz/', 'voo veh-RAY la dok-tuhr ngoo-YENN | oh trwa-zyeh-may-TAZH | bü-roh trwa sahⁿ DOOZ', ['telephone', 'chiffre', 'nom', 'quebec']),
  sent(1272, "Présentez-vous quinze minutes avant, avec votre carte d'assurance maladie.", 'Come fifteen minutes early, with your health insurance card.', '/pʁe.zɑ̃.te.vu kɛ̃z mi.nyt a.vɑ̃ a.vɛk vɔtʁ kaʁt da.sy.ʁɑ̃s ma.la.di/', 'pray-zahⁿ-tay-VOO | kehⁿz mee-nüt a-VAHⁿ | a-vek votr kart da-sü-rahⁿs ma-la-DEE', ['telephone', 'chiffre', 'quebec']),
  sent(1273, "Nguyen, ça s'écrit N, G, U, Y, E, N.", 'Nguyen is spelled N, G, U, Y, E, N.', '/ŋu.jɛn sa se.kʁi ɛn ʒe y i.ɡʁɛk ə ɛn/', 'ngoo-YENN | sa say-KREE | enn zhay ü ee-GREK uh ENN', ['telephone', 'nom', 'epeler']),
  sent(1274, 'Pour annuler, rappelez-nous au cinq un quatre, cinq cinq cinq, zéro un quatre deux.', 'To cancel, call us back on 514 555 0142.', '/puʁ a.ny.le ʁa.ple.nu o sɛ̃k œ̃ katʁ sɛ̃k sɛ̃k sɛ̃k ze.ʁo œ̃ katʁ dø/', 'poor a-nü-LAY | ra-play-NOO | oh sehⁿk uhⁿ KATR | sehⁿk sehⁿk SEHⁿK | zay-roh uhⁿ katr DEU', ['telephone', 'chiffre', 'quebec']),
  sent(1275, 'Je répète : mardi 14 mars, 15 h 45, bureau 312.', 'I repeat: Tuesday 14 March, 3:45 p.m., office 312.', '/ʒə ʁe.pɛt maʁ.di ka.tɔʁz maʁs kɛ̃.zœʁ ka.ʁɑ̃t.sɛ̃k by.ʁo tʁwa sɑ̃ duz/', 'zhuh ray-PET | mar-dee ka-torz MARS | kehⁿ-zuhr ka-rahⁿt-SEHⁿK | bü-roh trwa sahⁿ DOOZ', ['telephone', 'chiffre', 'repetition']),
  sent(1276, 'Le rendez-vous est à quinze heures.', 'The appointment is at 3 p.m.', '/lə ʁɑ̃.de.vu ɛ.ta kɛ̃.zœʁ/', 'luh rahⁿ-day-VOO eh-ta kehⁿ-ZUHR', ['chiffre', 'ecoute'], FCVDR),
  sent(1277, 'Il reste cinquante places.', 'There are fifty places left.', '/il ʁɛst sɛ̃.kɑ̃t plas/', 'eel rest sehⁿ-kahⁿt PLASS', ['chiffre', 'ecoute'], FCVDR),
  sent(1278, 'Le bus passe toutes les douze minutes.', 'The bus comes every twelve minutes.', '/lə bys pas tut le duz mi.nyt/', 'luh BÜSS pass toot lay dooz mee-NÜT', ['chiffre', 'ecoute'], FCVDR),
  sent(1279, "Ma chambre, c'est la deux cent six.", 'My room is number two hundred and six.', '/ma ʃɑ̃bʁ sɛ la dø sɑ̃ sis/', 'ma SHAHⁿBR | seh la deu sahⁿ SEESS', ['chiffre', 'ecoute']),
  sent(1280, 'Il est né en mille neuf cent quatre-vingt-seize.', 'He was born in 1996.', '/i.lɛ ne ɑ̃ mil nœf sɑ̃ ka.tʁə.vɛ̃.sɛz/', 'ee-leh NAY | ahⁿ meel nuhf sahⁿ ka-truh-vehⁿ-SEZ', ['chiffre', 'date', 'ecoute']),
  sent(1281, "Dix-sept heures, c'est cinq heures de l'après-midi.", 'Seventeen hundred is five in the afternoon.', '/di.sɛ.tœʁ sɛ sɛ̃.kœʁ də la.pʁɛ.mi.di/', 'dee-seh-TUHR | seh sehⁿ-KUHR duh la-preh-mee-DEE', ['chiffre', 'heure']),
  sent(1282, 'Au Québec, on dit un numéro de téléphone chiffre par chiffre.', 'In Québec, people say a phone number digit by digit.', '/o ke.bɛk ɔ̃ di œ̃ ny.me.ʁo də te.le.fɔn ʃifʁ paʁ ʃifʁ/', 'oh kay-BEK | ohⁿ DEE uhⁿ nü-may-roh duh tay-lay-FON | sheefr par SHEEFR', ['chiffre', 'quebec']),
  sent(1283, 'En France, on le dit deux par deux : zéro six, douze, trente-quatre.', 'In France, people say it two by two: zero six, twelve, thirty-four.', '/ɑ̃ fʁɑ̃s ɔ̃ lə di dø paʁ dø ze.ʁo sis duz tʁɑ̃t.katʁ/', 'ahⁿ FRAHⁿS | ohⁿ luh dee deu par DEU | zay-roh SEESS | DOOZ | trahⁿt-KATR', ['chiffre', 'france']),
  sent(1284, 'Un chiffre ne se devine pas : fais-le répéter, ou note-le.', 'You do not guess a number: have it repeated, or write it down.', '/œ̃ ʃifʁ nə sə də.vin pa fɛ.lə ʁe.pe.te u nɔt.lə/', 'uhⁿ SHEEFR nuh suh duh-veen PA | feh-luh ray-pay-TAY | oo not-LUH', ['rule', 'chiffre'], ['flashcard'],
    rule("Tu n'es pas sûr : quinze ou cinquante. Tu devines ?", "Non. Tu fais répéter, ou tu notes ce que tu as entendu et tu vérifies.")),
  sent(1285, 'Rendez-vous mardi 14 mars à 15 h 45, avec la docteure Nguyen.', 'Appointment on Tuesday 14 March at 3:45 p.m., with Dr Nguyen.', '/ʁɑ̃.de.vu maʁ.di ka.tɔʁz maʁs a kɛ̃.zœʁ ka.ʁɑ̃t.sɛ̃k a.vɛk la dɔk.tœʁ ŋu.jɛn/', 'rahⁿ-day-VOO | mar-dee ka-torz MARS | a kehⁿ-zuhr ka-rahⁿt-SEHⁿK | a-vek la dok-tuhr ngoo-YENN', ['note', 'chiffre']),
  phrase(1287, "ça s'écrit", 'it is spelled', '/sa se.kʁi/', 'sa say-KREE', ['epeler']),
];

/* ── ACT 6 · LES PANNEAUX DE L'ORAL ──────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1288, "Alors, aujourd'hui, on parle de la vie sans voiture à Montréal.", 'So, today we are talking about life without a car in Montreal.', '/a.lɔʁ o.ʒuʁ.dɥi ɔ̃ paʁl də la vi sɑ̃ vwa.tyʁ a mɔ̃.ʁe.al/', 'a-LOR | oh-zhoor-DWEE | ohⁿ parl duh la VEE sahⁿ vwa-TÜR a mohⁿ-ray-AL', ['podcast', 'connecteur']),
  sent(1289, "D'abord, ça coûte beaucoup moins cher : pas d'essence, pas d'assurance.", 'First, it costs a lot less: no petrol, no insurance.', '/da.bɔʁ sa kut bo.ku mwɛ̃ ʃɛʁ pa de.sɑ̃s pa da.sy.ʁɑ̃s/', 'da-BOR | sa koot boh-koo mwehⁿ SHEHR | pa day-SAHⁿS | pa da-sü-RAHⁿS', ['podcast', 'connecteur']),
  sent(1290, "Ensuite, on bouge plus : moi, je fais tout à vélo d'avril à novembre.", 'Then, you move more: I do everything by bike from April to November.', '/ɑ̃.sɥit ɔ̃ buʒ plys mwa ʒə fɛ tu.ta ve.lo da.vʁil a nɔ.vɑ̃bʁ/', 'ahⁿ-SWEET | ohⁿ boozh PLÜSS | MWA | zhuh feh too-ta vay-LOH | da-vreel a no-VAHⁿBR', ['podcast', 'connecteur']),
  sent(1291, "Par contre, l'hiver, c'est une autre histoire.", 'On the other hand, winter is another story.', '/paʁ kɔ̃tʁ li.vɛʁ sɛ.ty.no.tʁis.twaʁ/', 'par KOHⁿTR | lee-VEHR | seh-tü-noh-trees-TWAR', ['podcast', 'connecteur']),
  sent(1292, 'Avec la neige, le vélo devient compliqué, et le bus est souvent en retard.', 'With the snow, cycling gets complicated, and the bus is often late.', '/a.vɛk la nɛʒ lə ve.lo də.vjɛ̃ kɔ̃.pli.ke e lə bys ɛ su.vɑ̃ ɑ̃ ʁə.taʁ/', 'a-vek la NEZH | luh vay-LOH duh-vyehⁿ kohⁿ-plee-KAY | ay luh BÜSS eh soo-vahⁿ ahⁿ ruh-TAR', ['podcast']),
  sent(1293, "Du coup, beaucoup de gens utilisent l'autopartage pour les grosses courses.", 'So a lot of people use car sharing for the big shopping trips.', '/dy ku bo.ku də ʒɑ̃ y.ti.liz lo.to.paʁ.taʒ puʁ le ɡʁos kuʁs/', 'dü KOO | boh-koo duh ZHAHⁿ ü-tee-LEEZ loh-toh-par-TAZH | poor lay gross KOORS', ['podcast', 'connecteur', 'oral']),
  sent(1294, "Bref, sans voiture, c'est possible, mais il faut s'organiser.", 'In short, without a car it is possible, but you have to get organised.', '/bʁɛf sɑ̃ vwa.tyʁ sɛ pɔ.sibl mɛ il fo sɔʁ.ɡa.ni.ze/', 'BREF | sahⁿ vwa-TÜR | seh po-SEEBL | meh eel foh sor-ga-nee-ZAY', ['podcast', 'connecteur']),
  sent(1295, "Après « par contre », j'attends l'autre côté.", 'After par contre, I expect the other side.', '/a.pʁɛ paʁ kɔ̃tʁ ʒa.tɑ̃ lotʁ ko.te/', 'a-PREH par KOHⁿTR | zha-TAHⁿ lohtr ko-TAY', ['connecteur', 'strategie'], FCVDR),
  sent(1296, "Après « du coup », j'attends la conséquence.", 'After du coup, I expect the consequence.', '/a.pʁɛ dy ku ʒa.tɑ̃ la kɔ̃.se.kɑ̃s/', 'a-PREH dü KOO | zha-TAHⁿ la kohⁿ-say-KAHⁿS', ['connecteur', 'strategie'], FCVDR),
  sent(1297, "Après « bref », j'attends l'idée principale.", 'After bref, I expect the main idea.', '/a.pʁɛ bʁɛf ʒa.tɑ̃ li.de pʁɛ̃.si.pal/', 'a-PREH BREF | zha-TAHⁿ lee-DAY prehⁿ-see-PAL', ['connecteur', 'strategie'], FCVDR),
  sent(1298, 'Le connecteur annonce la suite : écoute ce qui vient après.', 'The connector announces what comes next: listen to what follows.', '/lə kɔ.nɛk.tœʁ a.nɔ̃s la sɥit e.kut sə ki vjɛ̃ a.pʁɛ/', 'luh ko-nek-TUHR a-nohⁿs la SWEET | ay-KOOT suh kee vyehⁿ a-PREH', ['rule', 'connecteur'], ['flashcard'],
    rule("Tu entends « par contre ». Qu'est-ce qui arrive ?", "L'autre côté : un problème après un avantage, ou l'inverse.")),
  sent(1299, "Sans voiture, on dépense moins, mais l'hiver complique tout.", 'Without a car you spend less, but winter complicates everything.', '/sɑ̃ vwa.tyʁ ɔ̃ de.pɑ̃s mwɛ̃ mɛ li.vɛʁ kɔ̃.plik tu/', 'sahⁿ vwa-TÜR | ohⁿ day-pahⁿs MWEHⁿ | meh lee-VEHR kohⁿ-pleek TOO', ['note', 'essentiel'], FCVDR),
  sent(1300, 'Le quartier était trop cher. Du coup, on a déménagé.', 'The neighbourhood was too expensive. So we moved.', '/lə kaʁ.tje e.tɛ tʁo ʃɛʁ dy ku ɔ̃.na de.me.na.ʒe/', 'luh kar-TYAY ay-teh troh SHEHR | dü KOO | ohⁿ-na day-may-na-ZHAY', ['connecteur', 'oral']),
  sent(1301, 'Il pleuvait. Par contre, il ne faisait pas froid.', 'It was raining. On the other hand, it was not cold.', '/il plø.vɛ paʁ kɔ̃tʁ il nə fə.zɛ pa fʁwa/', 'eel pleu-VEH | par KOHⁿTR | eel nuh fuh-zeh pa FRWA', ['connecteur']),
  sent(1302, 'En fait, je voulais dire mardi, pas jeudi.', 'Actually, I meant Tuesday, not Thursday.', '/ɑ̃ fɛt ʒə vu.lɛ diʁ maʁ.di pa ʒø.di/', 'ahⁿ FET | zhuh voo-leh DEER mar-DEE | pa zheu-DEE', ['connecteur', 'oral']),
  phrase(1303, 'du coup', 'so, as a result (spoken)', '/dy ku/', 'dü KOO', ['connecteur', 'oral']),
];

/* ── ACT 7 · LE FRANÇAIS QUI SE PARLE ───────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1305, "Bonjour, une petite question : les terrasses ouvertes jusqu'à minuit, vous en pensez quoi ?", 'Hello, a quick question: terraces open until midnight, what do you think?', '/bɔ̃.ʒuʁ yn pə.tit kɛs.tjɔ̃ le te.ʁas u.vɛʁt ʒys.ka mi.nɥi vu.zɑ̃ pɑ̃.se kwa/', 'bohⁿ-ZHOOR | ün puh-teet kes-TYOHⁿ | lay teh-RASS oo-VEHRT zhüs-ka mee-NWEE | voo-zahⁿ pahⁿ-say KWA', ['micro-trottoir']),
  sent(1306, "Ben, moi, chuis pour. L'été, y a rien de mieux.", 'Well, I am for it. In summer, there is nothing better.', '/bɛ̃ mwa ʃɥi puʁ le.te ja ʁjɛ̃ də mjø/', 'behⁿ MWA | shwee POOR | lay-TAY | ya ryehⁿ duh MYEU', ['micro-trottoir', 'oral', 'reduction']),
  sent(1307, "Euh, chais pas trop. J'habite au-dessus d'un bar, du coup je dors pas.", 'Um, I do not really know. I live above a bar, so I do not sleep.', '/ø ʃɛ pa tʁo ʒa.bi.to.də.sy dœ̃ baʁ dy ku ʒə dɔʁ pa/', 'EU | sheh pa TROH | zha-bee-toh-duh-SÜ duhⁿ BAR | dü KOO zhuh dor PA', ['micro-trottoir', 'oral', 'reduction']),
  sent(1308, "T'as vu les prix ? Genre, dix dollars la bière, c'est trop.", 'Have you seen the prices? Like, ten dollars for a beer, it is too much.', '/ta vy le pʁi ʒɑ̃ʁ di dɔ.laʁ la bjɛʁ sɛ tʁo/', 'ta vü lay PREE | ZHAHⁿR | dee do-LAR la BYEHR | seh TROH', ['micro-trottoir', 'oral', 'reduction', 'quebec']),
  sent(1309, "C'est le fun, mais il faut du calme après onze heures.", 'It is fun, but we need quiet after eleven.', '/sɛ lə fœn mɛ il fo dy kalm a.pʁɛ ɔ̃.zœʁ/', 'seh luh FUHNN | meh eel foh dü KALM a-preh ohⁿ-ZUHR', ['micro-trottoir', 'oral', 'quebec']),
  sent(1310, "Moi, j'aime pas pantoute le bruit.", 'Me, I do not like noise at all.', '/mwa ʒɛm pa pɑ̃.tut lə bʁɥi/', 'MWA | zhem pa pahⁿ-TOOT luh BRWEE', ['micro-trottoir', 'oral', 'quebec']),
  sent(1311, 'Ben, pourquoi pas, mais pas tous les soirs.', 'Well, why not, but not every night.', '/bɛ̃ puʁ.kwa pa mɛ pa tu le swaʁ/', 'behⁿ | poor-kwa PA | meh pa too lay SWAR', ['micro-trottoir', 'oral']),
  phrase(1312, 'chuis', 'I am (spoken, for je suis)', '/ʃɥi/', 'SHWEE', ['oral', 'reduction']),
  phrase(1313, 'chais pas', 'dunno (spoken, for je ne sais pas)', '/ʃɛ pa/', 'sheh PA', ['oral', 'reduction']),
  phrase(1314, 'y a', 'there is (spoken, for il y a)', '/ja/', 'YA', ['oral', 'reduction']),
  phrase(1315, "t'as", 'you have (spoken, for tu as)', '/ta/', 'TA', ['oral', 'reduction']),
  phrase(1316, 'ben', 'well (a filler)', '/bɛ̃/', 'BEHⁿ', ['oral', 'bequille']),
  phrase(1317, 'euh', 'um (a filler)', '/ø/', 'EU', ['oral', 'bequille']),
  phrase(1318, 'genre', 'like (a filler)', '/ʒɑ̃ʁ/', 'ZHAHⁿR', ['oral', 'bequille']),
  phrase(1319, "c'est le fun", 'it is fun (Québec)', '/sɛ lə fœn/', 'seh luh FUHNN', ['oral', 'quebec']),
  sent(1320, 'Ben, euh, genre : ces mots ne portent pas de sens.', 'Ben, euh, genre: these words carry no meaning.', '/bɛ̃ ø ʒɑ̃ʁ se mo nə pɔʁt pa də sɑ̃s/', 'BEHⁿ | EU | ZHAHⁿR | say MOH nuh port pa duh SAHⁿS', ['rule', 'bequille'], ['flashcard'],
    rule('Tu entends « ben », « euh », « genre ». Tu les notes ?', 'Non : ce sont des béquilles. Ils donnent du temps à la personne qui parle. Laisse-les passer.')),
  sent(1321, "Je suis pour : l'été, il n'y a rien de mieux.", 'I am for it: in summer, there is nothing better.', '/ʒə sɥi puʁ le.te il nja ʁjɛ̃ də mjø/', 'zhuh swee POOR | lay-TAY | eel nya ryehⁿ duh MYEU', ['ecrit', 'reduction'], FCVDR),
  sent(1322, "Je ne sais pas trop : j'habite au-dessus d'un bar, donc je ne dors pas.", 'I do not really know: I live above a bar, so I do not sleep.', '/ʒə nə sɛ pa tʁo ʒa.bi.to.də.sy dœ̃ baʁ dɔ̃k ʒə nə dɔʁ pa/', 'zhuh nuh seh pa TROH | zha-bee-toh-duh-SÜ duhⁿ BAR | dohⁿk zhuh nuh dor PA', ['ecrit', 'reduction']),
  sent(1323, "Tu as vu les prix ? Dix dollars la bière, c'est trop.", 'Have you seen the prices? Ten dollars for a beer, it is too much.', '/ty a vy le pʁi di dɔ.laʁ la bjɛʁ sɛ tʁo/', 'tü a vü lay PREE | dee do-LAR la BYEHR | seh TROH', ['ecrit', 'reduction']),
  sent(1324, 'Y a plus de pain.', 'There is no bread left. (spoken)', '/ja ply də pɛ̃/', 'ya plü duh PEHⁿ', ['oral', 'piege', 'ne-tombe'], FCVDR),
  sent(1325, 'Chuis fatigué, je rentre.', 'I am tired, I am going home. (spoken)', '/ʃɥi fa.ti.ɡe ʒə ʁɑ̃tʁ/', 'shwee fa-tee-GAY | zhuh RAHⁿTR', ['oral', 'reduction']),
  sent(1326, "T'es où ? Chuis devant la gare.", 'Where are you? I am outside the station. (spoken)', '/tɛ u ʃɥi də.vɑ̃ la ɡaʁ/', 'teh OO | shwee duh-vahⁿ la GAR', ['oral', 'reduction']),
  sent(1327, "Les gens sont partagés : certains aiment les terrasses, d'autres ont peur du bruit.", 'People are divided: some like the terraces, others are worried about the noise.', '/le ʒɑ̃ sɔ̃ paʁ.ta.ʒe sɛʁ.tɛ̃.zɛm le te.ʁas do.tʁə.zɔ̃ pœʁ dy bʁɥi/', 'lay ZHAHⁿ sohⁿ par-ta-ZHAY | sehr-tehⁿ-ZEM lay teh-RASS | doh-truh-zohⁿ puhr dü BRWEE', ['note', 'essentiel']),
];

/* ── ACT 8 · FAIRE RÉPÉTER, VÉRIFIER ─────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1328, "Service à la clientèle, bonjour, Julie à l'appareil.", 'Customer service, hello, Julie speaking.', '/sɛʁ.vis a la kli.jɑ̃.tɛl bɔ̃.ʒuʁ ʒy.li a la.pa.ʁɛj/', 'sehr-VEESS a la klee-yahⁿ-TEL | bohⁿ-ZHOOR | zhü-LEE a la-pa-REHY', ['telephone', 'quebec']),
  sent(1329, 'Alors, le technicien peut passer mercredi le vingt-deux, entre treize et dix-sept heures.', 'So, the technician can come on Wednesday the twenty-second, between 1 and 5 p.m.', '/a.lɔʁ lə tɛk.ni.sjɛ̃ pø pa.se mɛʁ.kʁə.di lə vɛ̃t.dø ɑ̃tʁ tʁɛz e di.sɛ.tœʁ/', 'a-LOR | luh tek-nee-SYEHⁿ peu pa-SAY | mehr-kruh-DEE luh vehⁿt-DEU | ahⁿtr TREZ ay dee-seh-TUHR', ['telephone', 'chiffre']),
  sent(1330, 'Pardon, vous pouvez répéter plus lentement ?', 'Sorry, can you repeat that more slowly?', '/paʁ.dɔ̃ vu pu.ve ʁe.pe.te ply lɑ̃t.mɑ̃/', 'par-DOHⁿ | voo poo-VAY ray-pay-TAY plü lahⁿt-MAHⁿ', ['repeter'], FCVDR),
  sent(1331, "Bien sûr : mercredi vingt-deux, entre une heure et cinq heures de l'après-midi.", 'Of course: Wednesday the twenty-second, between one and five in the afternoon.', '/bjɛ̃ syʁ mɛʁ.kʁə.di vɛ̃t.dø ɑ̃.tʁy.nœʁ e sɛ̃.kœʁ də la.pʁɛ.mi.di/', 'byehⁿ SÜR | mehr-kruh-dee vehⁿt-DEU | ahⁿ-trü-NUHR ay sehⁿ-KUHR duh la-preh-mee-DEE', ['telephone', 'chiffre', 'quebec']),
  sent(1332, 'Vous avez dit le vingt-deux ou le vingt-trois ?', 'Did you say the twenty-second or the twenty-third?', '/vu.za.ve di lə vɛ̃t.dø u lə vɛ̃t.tʁwa/', 'voo-za-vay DEE | luh vehⁿt-DEU | oo luh vehⁿt-TRWA', ['repeter', 'verifier']),
  sent(1333, 'Le vingt-deux. Votre numéro de dossier est le neuf, sept, quatre, zéro, un, deux.', 'The twenty-second. Your file number is 9, 7, 4, 0, 1, 2.', '/lə vɛ̃t.dø vɔtʁ ny.me.ʁo də do.sje ɛ lə nœf sɛt katʁ ze.ʁo œ̃ dø/', 'luh vehⁿt-DEU | votr nü-may-roh duh do-SYAY eh luh NUHF | SET | KATR | zay-ROH | UHⁿ | DEU', ['telephone', 'chiffre']),
  sent(1334, 'Si je comprends bien, le technicien vient mercredi après-midi, et je dois être là.', 'If I understand correctly, the technician is coming on Wednesday afternoon, and I have to be there.', '/si ʒə kɔ̃.pʁɑ̃ bjɛ̃ lə tɛk.ni.sjɛ̃ vjɛ̃ mɛʁ.kʁə.di a.pʁɛ.mi.di e ʒə dwa ɛtʁ la/', 'see zhuh kohⁿ-prahⁿ BYEHⁿ | luh tek-nee-SYEHⁿ vyehⁿ mehr-kruh-dee a-preh-mee-DEE | ay zhuh dwa etr LA', ['reformuler', 'verifier'], FCVDR),
  sent(1335, "C'est ça, exactement. Bonne journée.", 'That is it, exactly. Have a good day.', '/sɛ sa ɛɡ.zak.tə.mɑ̃ bɔn ʒuʁ.ne/', 'seh SA | eg-zak-tuh-MAHⁿ | bon zhoor-NAY', ['telephone']),
  phrase(1336, 'si je comprends bien', 'if I understand correctly', '/si ʒə kɔ̃.pʁɑ̃ bjɛ̃/', 'see zhuh kohⁿ-prahⁿ BYEHⁿ', ['reformuler']),
  sent(1337, 'Vous avez dit quinze ou cinquante ?', 'Did you say fifteen or fifty?', '/vu.za.ve di kɛ̃z u sɛ̃.kɑ̃t/', 'voo-za-vay DEE | KEHⁿZ | oo sehⁿ-KAHⁿT', ['repeter', 'verifier', 'chiffre'], FCVDR),
  sent(1338, "Excusez-moi, je n'ai pas compris le numéro.", 'Excuse me, I did not catch the number.', '/ɛks.ky.ze.mwa ʒə ne pa kɔ̃.pʁi lə ny.me.ʁo/', 'eks-kü-zay-MWA | zhuh nay pa kohⁿ-pree luh nü-may-ROH', ['repeter'], FCVDR),
  sent(1339, "Vous pouvez l'épeler, s'il vous plaît ?", 'Can you spell it, please?', '/vu pu.ve le.ple sil vu plɛ/', 'voo poo-vay lay-PLAY | seel voo PLEH', ['repeter', 'epeler']),
  sent(1340, "Donc c'est mercredi après-midi, c'est bien ça ?", 'So it is Wednesday afternoon, is that right?', '/dɔ̃k sɛ mɛʁ.kʁə.di a.pʁɛ.mi.di sɛ bjɛ̃ sa/', 'dohⁿk seh mehr-kruh-dee a-preh-mee-DEE | seh byehⁿ SA', ['verifier', 'reformuler'], FCVDR),
  sent(1341, "Au téléphone, faire répéter, c'est normal.", 'On the phone, asking someone to repeat is normal.', '/o te.le.fɔn fɛʁ ʁe.pe.te sɛ nɔʁ.mal/', 'oh tay-lay-FON | fehr ray-pay-TAY | seh nor-MAL', ['rule', 'repeter'], ['flashcard'],
    rule("Tu n'as pas compris l'heure au téléphone. Tu fais quoi ?", 'Tu fais répéter, puis tu vérifies : vous avez dit quinze ou cinquante ?')),
  phrase(1342, "c'est bien ça ?", 'is that right?', '/sɛ bjɛ̃ sa/', 'seh byehⁿ SA', ['verifier']),
  sent(1344, 'Technicien mercredi 22, entre 13 h et 17 h, dossier 974012.', 'Technician Wednesday the 22nd, between 1 and 5 p.m., file 974012.', '/tɛk.ni.sjɛ̃ mɛʁ.kʁə.di vɛ̃t.dø ɑ̃tʁ tʁɛ.zœʁ e di.sɛ.tœʁ do.sje nœf sɛt katʁ ze.ʁo œ̃ dø/', 'tek-nee-SYEHⁿ | mehr-kruh-dee vehⁿt-DEU | ahⁿtr treh-ZUHR ay dee-seh-TUHR | do-SYAY nuhf set katr zay-roh uhⁿ DEU', ['note', 'chiffre']),
];

/* ── ACT 9 · UN FAIT OU UNE OPINION ─────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1345, 'Bonsoir, ce soir à la ligne ouverte : le Vieux-Québec sans voitures cet été.', 'Good evening, tonight on the call-in show: Old Québec without cars this summer.', '/bɔ̃.swaʁ sə swaʁ a la liɲ u.vɛʁt lə vjø ke.bɛk sɑ̃ vwa.tyʁ sɛ.te.te/', 'bohⁿ-SWAR | suh SWAR a la leeñ oo-VEHRT | luh vyeu-kay-BEK sahⁿ vwa-TÜR | seh-tay-TAY', ['radio', 'quebec']),
  sent(1346, "Depuis le premier juin, les voitures sont interdites dans quatre rues, de midi à minuit.", 'Since 1 June, cars have been banned from four streets, from noon to midnight.', '/də.pɥi lə pʁə.mje ʒɥɛ̃ le vwa.tyʁ sɔ̃.tɛ̃.tɛʁ.dit dɑ̃ katʁ ʁy də mi.di a mi.nɥi/', 'duh-pwee luh pruh-myay ZHWEHⁿ | lay vwa-TÜR sohⁿ-tehⁿ-tehr-DEET dahⁿ katr RÜ | duh mee-DEE a mee-NWEE', ['radio', 'fait']),
  sent(1347, 'Selon la Ville, le nombre de piétons a augmenté de vingt pour cent.', 'According to the City, the number of pedestrians has gone up by twenty per cent.', '/sə.lɔ̃ la vil lə nɔ̃bʁ də pje.tɔ̃ a oɡ.mɑ̃.te də vɛ̃ puʁ sɑ̃/', 'suh-lohⁿ la VEEL | luh nohⁿbr duh pyay-TOHⁿ a og-mahⁿ-TAY duh vehⁿ poor SAHⁿ', ['radio', 'source']),
  sent(1348, 'Premier appel, Denis, de Limoilou : allez-y.', 'First caller, Denis, from Limoilou: go ahead.', '/pʁə.mje.ʁa.pɛl də.ni də li.mwa.lu a.le.zi/', 'pruh-myay-ra-PEL | duh-NEE duh lee-mwa-LOO | a-lay-ZEE', ['radio', 'quebec']),
  sent(1349, 'Moi, je trouve ça ridicule : les commerçants vont tous fermer.', 'Me, I think it is ridiculous: the shopkeepers are all going to close.', '/mwa ʒə tʁuv sa ʁi.di.kyl le kɔ.mɛʁ.sɑ̃ vɔ̃ tus fɛʁ.me/', 'MWA | zhuh troov sa ree-dee-KÜL | lay ko-mehr-SAHⁿ vohⁿ TOOSS fehr-MAY', ['radio', 'opinion']),
  sent(1350, "Il paraît que la Ville veut fermer tout le quartier l'an prochain.", 'Apparently the City wants to close the whole neighbourhood next year.', '/il pa.ʁɛ kə la vil vø fɛʁ.me tu lə kaʁ.tje lɑ̃ pʁɔ.ʃɛ̃/', 'eel pa-REH kuh la VEEL veu fehr-MAY too luh kar-TYAY | lahⁿ pro-SHEHⁿ', ['radio', 'rumeur']),
  sent(1351, "Merci, Denis. Précisons que la Ville n'a rien annoncé de tel.", 'Thank you, Denis. To be clear, the City has announced nothing of the kind.', '/mɛʁ.si də.ni pʁe.si.zɔ̃ kə la vil na ʁjɛ̃.na.nɔ̃.se də tɛl/', 'mehr-SEE duh-NEE | pray-see-ZOHⁿ kuh la VEEL na ryehⁿ-na-nohⁿ-SAY duh TEL', ['radio', 'fait']),
  sent(1352, "Deuxième appel, Sophie : à mon avis, c'est une excellente idée pour les familles.", 'Second caller, Sophie: in my view, it is an excellent idea for families.', '/dø.zjɛ.ma.pɛl sɔ.fi a mɔ̃.na.vi sɛ.ty.nɛk.sɛ.lɑ̃.ti.de puʁ le fa.mij/', 'deu-zyeh-ma-PEL | so-FEE | a mohⁿ-na-VEE | seh-tü-nek-seh-lahⁿ-tee-DAY poor lay fa-MEEY', ['radio', 'opinion']),
  sent(1353, "À la radio, écoute qui parle avant ce qu'il dit.", 'On the radio, listen to who is speaking before what they say.', '/a la ʁa.djo e.kut ki paʁl a.vɑ̃ sə kil di/', 'a la ra-DYOH | ay-koot kee PARL | a-vahⁿ suh keel DEE', ['rule', 'source'], ['flashcard'],
    rule('Un auditeur dit que les commerçants vont fermer. Est-ce un fait ?', "Non : c'est son opinion. « Je trouve » te le dit, et personne ne l'a vérifié.")),
  sent(1354, "Le chiffre vient de la Ville, pas de l'animateur.", 'The figure comes from the City, not from the host.', '/lə ʃifʁ vjɛ̃ də la vil pa də la.ni.ma.tœʁ/', 'luh SHEEFR vyehⁿ duh la VEEL | pa duh la-nee-ma-TUHR', ['source'], FCVDR),
  sent(1355, "Selon un auditeur, les commerçants vont fermer, mais c'est son avis.", "According to a listener, the shops will close, but that is his opinion.", '/sə.lɔ̃ œ̃.no.di.tœʁ le kɔ.mɛʁ.sɑ̃ vɔ̃ fɛʁ.me mɛ sɛ sɔ̃.na.vi/', 'suh-lohⁿ uhⁿ-noh-dee-TUHR | lay ko-mehr-SAHⁿ vohⁿ fehr-MAY | meh seh sohⁿ-na-VEE', ['note', 'source'], FCVDR),
  phrase(1356, 'un auditeur', 'a listener', '/œ̃.no.di.tœʁ/', 'uhⁿ-noh-dee-TUHR', ['radio']),
  phrase(1357, 'la ligne ouverte', 'the radio call-in show (Québec)', '/la liɲ u.vɛʁt/', 'la leeñ oo-VEHRT', ['radio', 'quebec']),
  phrase(1358, "l'animateur", 'the host (radio)', '/la.ni.ma.tœʁ/', 'la-nee-ma-TUHR', ['radio']),
];

/* ── ACT 10 · À L'ÉPREUVE, LA QUESTION D'ABORD ───────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1359, "Aujourd'hui, nous allons parler du sommeil des adolescents.", "Today we are going to talk about teenagers' sleep.", '/o.ʒuʁ.dɥi nu.za.lɔ̃ paʁ.le dy sɔ.mɛj de.za.dɔ.le.sɑ̃/', 'oh-zhoor-DWEE | noo-za-lohⁿ par-LAY dü so-MEHY day-za-do-lay-SAHⁿ', ['cours']),
  sent(1360, "D'abord, un chiffre : un adolescent a besoin de huit à dix heures de sommeil par nuit.", 'First, a figure: a teenager needs eight to ten hours of sleep a night.', '/da.bɔʁ œ̃ ʃifʁ œ̃.na.dɔ.le.sɑ̃ a bə.zwɛ̃ də ɥi.ta di.zœʁ də sɔ.mɛj paʁ nɥi/', 'da-BOR | uhⁿ SHEEFR | uhⁿ-na-do-lay-SAHⁿ a buh-ZWEHⁿ | duh wee-ta dee-ZUHR duh so-MEHY par NWEE', ['cours', 'chiffre']),
  sent(1361, 'Or, la plupart dorment moins de sept heures.', 'Yet most of them sleep less than seven hours.', '/ɔʁ la ply.paʁ dɔʁm mwɛ̃ də sɛ.tœʁ/', 'OR | la plü-PAR dorm mwehⁿ duh seh-TUHR', ['cours', 'connecteur']),
  sent(1362, "Pourquoi ? D'une part, à la puberté, l'horloge du corps change : on s'endort plus tard.", 'Why? On the one hand, at puberty the body clock changes: you fall asleep later.', '/puʁ.kwa dyn paʁ a la py.bɛʁ.te lɔʁ.lɔʒ dy kɔʁ ʃɑ̃ʒ ɔ̃ sɑ̃.dɔʁ ply taʁ/', 'poor-KWA | dün PAR | a la pü-behr-TAY | lor-lozh dü KOR SHAHⁿZH | ohⁿ sahⁿ-DOR plü TAR', ['cours', 'connecteur']),
  sent(1363, "D'autre part, les écrans retardent encore l'endormissement.", 'On the other hand, screens delay falling asleep even more.', '/do.tʁə paʁ le.ze.kʁɑ̃ ʁə.taʁd ɑ̃.kɔʁ lɑ̃.dɔʁ.mis.mɑ̃/', 'doh-truh PAR | lay-zay-KRAHⁿ ruh-tard ahⁿ-KOR lahⁿ-dor-mees-MAHⁿ', ['cours', 'connecteur']),
  sent(1364, 'Résultat : fatigue, mauvaises notes, et même accidents de la route.', 'The result: tiredness, bad marks, and even road accidents.', '/ʁe.zyl.ta fa.tiɡ mo.vɛz nɔt e mɛm ak.si.dɑ̃ də la ʁut/', 'ray-zül-TA | fa-TEEG | moh-vez NOT | ay mem ak-see-dahⁿ duh la ROOT', ['cours']),
  sent(1365, 'Certaines écoles commencent donc les cours à neuf heures, avec de bons résultats.', 'Some schools therefore start lessons at nine, with good results.', '/sɛʁ.tɛn.ze.kɔl kɔ.mɑ̃s dɔ̃k le kuʁ a nœ.vœʁ a.vɛk də bɔ̃ ʁe.zyl.ta/', 'sehr-ten-zay-KOL ko-MAHⁿS dohⁿk lay KOOR a nuh-VUHR | a-vek duh bohⁿ ray-zül-TA', ['cours', 'connecteur']),
  sent(1366, "Je lis les questions et les réponses avant l'écoute.", 'I read the questions and the answers before listening.', '/ʒə li le kɛs.tjɔ̃ e le ʁe.pɔ̃s a.vɑ̃ le.kut/', 'zhuh lee lay kes-TYOHⁿ ay lay ray-POHⁿS | a-vahⁿ lay-KOOT', ['examen', 'strategie'], FCVDR),
  sent(1367, 'Si je rate un détail, je passe à la question suivante.', 'If I miss a detail, I move on to the next question.', '/si ʒə ʁa.tœ̃ de.taj ʒə pa.sa la kɛs.tjɔ̃ sɥi.vɑ̃t/', 'see zhuh ra-tuhⁿ day-TAHY | zhuh pa-sa la kes-tyohⁿ swee-VAHⁿT', ['examen', 'strategie'], FCVDR),
  sent(1368, "À l'épreuve d'écoute, la question te dit quoi écouter.", 'In the listening paper, the question tells you what to listen for.', '/a le.pʁœv de.kut la kɛs.tjɔ̃ tə di kwa e.ku.te/', 'a lay-PRUHV day-KOOT | la kes-TYOHⁿ tuh dee kwa ay-koo-TAY', ['rule', 'examen'], ['flashcard'],
    rule('Épreuve de compréhension orale : tu fais quoi avant le début ?', "Tu lis la question et les réponses. Tu sais alors quel mot ou quel chiffre attendre.")),
  phrase(1370, "d'une part, d'autre part", 'on the one hand, on the other hand', '/dyn paʁ do.tʁə paʁ/', 'dün PAR | doh-truh PAR', ['connecteur', 'cours']),
  sent(1371, 'Selon le cours, les ados dorment trop peu, à cause de leur horloge et des écrans.', 'According to the lecture, teens sleep too little, because of their body clock and screens.', '/sə.lɔ̃ lə kuʁ le.za.do dɔʁm tʁo pø a koz də lœʁ ɔʁ.lɔʒ e de.ze.kʁɑ̃/', 'suh-lohⁿ luh KOOR | lay-za-DOH dorm troh PEU | a kohz duh luhr or-LOZH ay day-zay-KRAHⁿ', ['note', 'essentiel']),
];

/* ── ACT 11 · LE MESSAGE ET LA NOTE ─────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1372, "Oui, bonjour, c'est Martin Leblanc, le gestionnaire de l'immeuble.", 'Yes, hello, it is Martin Leblanc, the building manager.', '/wi bɔ̃.ʒuʁ sɛ maʁ.tɛ̃ lə.blɑ̃ lə ʒɛs.tjɔ.nɛʁ də li.mœbl/', 'WEE | bohⁿ-ZHOOR | seh mar-tehⁿ luh-BLAHⁿ | luh zhes-tyo-NEHR duh lee-MUHBL', ['message', 'quebec']),
  sent(1373, 'Euh, je vous appelle pour les travaux de plomberie dans votre appartement.', 'Um, I am calling you about the plumbing work in your flat.', '/ø ʒə vu.za.pɛl puʁ le tʁa.vo də plɔ̃.bə.ʁi dɑ̃ vɔ.tʁa.paʁ.tə.mɑ̃/', 'EU | zhuh voo-za-PEL | poor lay tra-VOH duh plohⁿ-buh-REE | dahⁿ vo-tra-par-tuh-MAHⁿ', ['message', 'oral']),
  sent(1374, 'Donc, le plombier va passer jeudi le douze, entre huit heures et midi.', 'So, the plumber will come on Thursday the twelfth, between eight and noon.', '/dɔ̃k lə plɔ̃.bje va pa.se ʒø.di lə duz ɑ̃tʁ ɥi.tœʁ e mi.di/', 'DOHⁿK | luh plohⁿ-BYAY va pa-SAY | zheu-dee luh DOOZ | ahⁿtr wee-TUHR ay mee-DEE', ['message', 'chiffre', 'quebec']),
  sent(1375, "Quelqu'un doit être là pour lui ouvrir, ou alors vous me laissez la clé.", 'Someone has to be there to let him in, or else you leave me the key.', '/kɛl.kœ̃ dwa ɛtʁ la puʁ lɥi u.vʁiʁ u a.lɔʁ vu mə lɛ.se la kle/', 'kel-KUHⁿ dwa etr LA poor lwee oo-VREER | oo a-LOR voo muh leh-say la KLAY', ['message']),
  sent(1376, "Par contre, attention : l'eau va être coupée dans tout l'immeuble de neuf heures à onze heures.", 'On the other hand, careful: the water will be cut off in the whole building from nine to eleven.', '/paʁ kɔ̃tʁ a.tɑ̃.sjɔ̃ lo va ɛtʁ ku.pe dɑ̃ tu li.mœbl də nœ.vœʁ a ɔ̃.zœʁ/', 'par KOHⁿTR | a-tahⁿ-SYOHⁿ | loh va etr koo-PAY dahⁿ too lee-MUHBL | duh nuh-VUHR a ohⁿ-ZUHR', ['message', 'connecteur', 'chiffre']),
  sent(1377, 'Pouvez-vous me rappeler avant mercredi soir pour confirmer ?', 'Can you call me back before Wednesday evening to confirm?', '/pu.ve.vu mə ʁa.ple a.vɑ̃ mɛʁ.kʁə.di swaʁ puʁ kɔ̃.fiʁ.me/', 'poo-vay-VOO muh ra-PLAY | a-vahⁿ mehr-kruh-dee SWAR | poor kohⁿ-feer-MAY', ['message']),
  sent(1378, "Mon numéro, c'est le cinq un quatre, cinq cinq cinq, zéro un huit sept.", 'My number is 514 555 0187.', '/mɔ̃ ny.me.ʁo sɛ lə sɛ̃k œ̃ katʁ sɛ̃k sɛ̃k sɛ̃k ze.ʁo œ̃ ɥit sɛt/', 'mohⁿ nü-may-ROH | seh luh sehⁿk uhⁿ KATR | sehⁿk sehⁿk SEHⁿK | zay-roh uhⁿ weet SET', ['message', 'chiffre', 'quebec']),
  sent(1379, 'Je répète : cinq un quatre, cinq cinq cinq, zéro un huit sept. Merci, bonne journée.', 'I repeat: 514 555 0187. Thank you, have a good day.', '/ʒə ʁe.pɛt sɛ̃k œ̃ katʁ sɛ̃k sɛ̃k sɛ̃k ze.ʁo œ̃ ɥit sɛt mɛʁ.si bɔn ʒuʁ.ne/', 'zhuh ray-PET | sehⁿk uhⁿ KATR | sehⁿk sehⁿk SEHⁿK | zay-roh uhⁿ weet SET | mehr-SEE | bon zhoor-NAY', ['message', 'chiffre', 'repetition']),
  sent(1380, "Qui a appelé, pourquoi, quand, et qu'est-ce qu'on doit faire ?", 'Who called, why, when, and what do we have to do?', '/ki a a.ple puʁ.kwa kɑ̃ e kɛs kɔ̃ dwa fɛʁ/', 'kee a a-PLAY | poor-KWA | KAHⁿ | ay kess kohⁿ dwa FEHR', ['note', 'question']),
  sent(1381, 'Une bonne note garde qui, quoi, quand et quoi faire.', 'A good note keeps who, what, when and what to do.', '/yn bɔn nɔt ɡaʁd ki kwa kɑ̃ e kwa fɛʁ/', 'ün bon NOT gard | KEE | KWA | KAHⁿ | ay kwa FEHR', ['rule', 'note'], ['flashcard'],
    rule('Tu notes un message pour ta colocataire. Tu écris tout ?', "Non : qui a appelé, pourquoi, le jour et l'heure, et ce que vous devez faire. Avec les bons chiffres.")),
  sent(1382, "Le gestionnaire de l'immeuble a appelé pour la plomberie.", 'The building manager called about the plumbing.', '/lə ʒɛs.tjɔ.nɛʁ də li.mœbl a a.ple puʁ la plɔ̃.bə.ʁi/', 'luh zhes-tyo-NEHR duh lee-MUHBL | a a-PLAY poor la plohⁿ-buh-REE', ['note'], FCVDR),
  sent(1383, 'Le plombier passe jeudi, entre huit heures et midi.', 'The plumber is coming on Thursday, between eight and noon.', '/lə plɔ̃.bje pas ʒø.di ɑ̃tʁ ɥi.tœʁ e mi.di/', 'luh plohⁿ-BYAY pass zheu-DEE | ahⁿtr wee-TUHR ay mee-DEE', ['note', 'chiffre'], FCVDR),
  sent(1384, "L'eau sera coupée de neuf heures à onze heures.", 'The water will be cut off from nine to eleven.', '/lo sə.ʁa ku.pe də nœ.vœʁ a ɔ̃.zœʁ/', 'loh suh-ra koo-PAY | duh nuh-VUHR a ohⁿ-ZUHR', ['note', 'chiffre'], FCVDR),
  sent(1385, 'Il faut le rappeler avant mercredi soir.', 'We have to call him back before Wednesday evening.', '/il fo lə ʁa.ple a.vɑ̃ mɛʁ.kʁə.di swaʁ/', 'eel foh luh ra-PLAY | a-vahⁿ mehr-kruh-dee SWAR', ['note'], FCVDR),
  sent(1386, 'On peut aussi lui laisser la clé.', 'We can also leave him the key.', '/ɔ̃ pø o.si lɥi lɛ.se la kle/', 'ohⁿ peu oh-SEE | lwee leh-say la KLAY', ['note']),
  phrase(1387, 'le gestionnaire', 'the building manager', '/lə ʒɛs.tjɔ.nɛʁ/', 'luh zhes-tyo-NEHR', ['message']),
  phrase(1388, 'la plomberie', 'the plumbing', '/la plɔ̃.bə.ʁi/', 'la plohⁿ-buh-REE', ['message']),
  phrase(1389, 'une colocataire', 'a flatmate (woman)', '/yn ko.lo.ka.tɛʁ/', 'ün ko-lo-ka-TEHR', ['message']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 *  185 authored rows in `.1200`-`.1389`; six numbers left empty (§A.2).
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
 *  §I. THE ANCHOR LISTENINGS, AS LINE LISTS
 *
 *  Each act opens on one. The lines ARE corpus rows, so the listening, the
 *  quiz and the note cannot drift apart. Each is written a little ABOVE B1:
 *  the act's strategy gets the meaning anyway, and the questions prove it
 *  before the lines are shown.
 * ══════════════════════════════════════════════════════════════════════════ */

const range = (a: number, b: number) => Array.from({ length: b - a + 1 }, (_, i) => E(a + i));

/** Act 1: the Montréal métro tannoy, eight lines. */
export const METRO_LINES = range(1200, 1207);
/** Act 2: the Geneva gate announcement, seven lines. */
export const AEROPORT_LINES = range(1218, 1224);
/** Act 3: the Québec City weather bulletin, seven lines, heard twice. */
export const METEO_LINES = range(1235, 1241);
/** Act 4: the Montréal traffic report, seven lines. */
export const ROUTES_LINES = range(1251, 1257);
/** Act 5: the clinic's confirmation message, seven lines. */
export const CLINIQUE_LINES = range(1269, 1275);
/** Act 6: the podcast excerpt, seven lines. */
export const PODCAST_LINES = range(1288, 1294);
/** Act 7: the street interview, seven lines. */
export const MICRO_LINES = range(1305, 1311);
/** Act 8: the customer-service call, eight lines. */
export const APPEL_LINES = range(1328, 1335);
/** Act 9: the radio call-in, eight lines. */
export const LIGNE_LINES = range(1345, 1352);
/** Act 10: the lecture fragment, seven lines. */
export const COURS_LINES = range(1359, 1365);
/** Act 11: THE TASK VOICEMAIL, eight lines. */
export const MESSAGE_LINES = range(1372, 1379);

/** The voicemail as one transcript, for the task brief (TaskView has no
 *  source field and no player; see the lesson header, open question 2). */
export const MESSAGE_TRANSCRIPT = ACT11_ROWS.filter((r) => MESSAGE_LINES.includes(r.id)).map((r) => r.fr).join(' ');

/** What a note on the voicemail must keep. The rubric, the model answer and
 *  the grader notes are written against this. */
export const MESSAGE_KEY = {
  qui: "Martin Leblanc, le gestionnaire de l'immeuble",
  pourquoi: 'des travaux de plomberie dans l’appartement',
  quand: 'jeudi 12, entre 8 h et midi',
  eau: "l'eau coupée dans tout l'immeuble de 9 h à 11 h",
  faire: "quelqu'un doit être là, ou lui laisser la clé ; le rappeler avant mercredi soir",
  numero: '514 555-0187',
} as const;
