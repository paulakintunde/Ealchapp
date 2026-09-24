// b1.07.l1 « Le futur : quand, dès que, et les conditions réelles » — the
// authored corpus, the imports and the citation constants. DRAFT v1, to
// RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
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
//   WHERE THE FUTURE GOES IN A TWO-PART SENTENCE, AND WHERE IT MAY NEVER GO.
//
//     la charnière   quand, lorsque, dès que, aussitôt que, tant que,
//                    pendant que, une fois que
//     si             the real condition, which never takes the future
//
//   Act by act: the booking lost to a present tense (1), the future on both
//   sides of quand (2), the whole family of charnières and what each adds (3),
//   the same words with a present or past main clause (4), si + présent and the
//   one absolute rule (5), the three shapes that follow si (6), quand against
//   si as certainty against possibility (7), the futur proche inside these
//   patterns in speech (8), dans / en / d'ici and saying when (9), two future
//   events put in order (10), writing a plan of your own (11).
//
//   NOT OWNED: the formation of the futur simple, which is b1.05's, and the
//   irregular stems, which are b1.06's. Both are assumed and quoted. The
//   PRESENT-UNREAL condition (si + imparfait > conditionnel) is b1.10's: it is
//   named once, as a boundary, and never taught. The futur antérieur is later
//   still; four seed rows carry it and are named once, in act 10, as something
//   the learner will meet and does not have to build.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `projets-et-futur`. It already exists in the seed's `themes`
//     (domain fondations, levelRange a2-b2) and holds ZERO seed rows, so
//     nothing is created at import.
//  2. ID BLOCK: this lesson owns `.400`-`.599` and stays inside it. b1.05 owns
//     `.001`-`.199`, b1.06 `.200`-`.399`, b1.08 `.600`-`.799`, b1.10
//     `.800`-`.999`. Used here: `.400`-`.577`. 178 rows in eleven act blocks.
//  3. The seed cut holds NO row for « quand j'aurai les clés », « aussitôt
//     que », « lorsque » with a future, « d'ici vendredi », or si + impératif,
//     so all of those are authored here. Re-probe at import.
//  4. Every reused id in §F was read out of seed.json on 2026-09-23 and its
//     `fr` is copied verbatim wherever a section prints it.
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER, not against the ear:
//     `suh-MENN` (semaine), `pro-SHENN` (prochaine), `PANN` (panne) and
//     `pluh-YENN` (pleine, act 9). A single closing M or N after a vowel is
//     read by `hasPlainNasal` as a nasal vowel written the old way; doubling
//     the consonant is a2.34's -YENN precedent and keeps the real consonant
//     audible. Everything else is spelled for the ear.
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
  id: 'b1.07',
  seq: 7,
  title: 'Future Usage and Real Conditions',
  sub: 'Le futur : quand, dès que, et les conditions réelles',
  canDo: 'Can plan and promise in French across two clauses: putting the future after quand and dès que where English keeps the present, and building a real condition with si + présent followed by a future, a present or an instruction',
  prereqUnitIds: ['b1.05', 'b1.06'],
} as const;

export const LESSON_ID = 'b1.07.l1';
export const THEME = 'projets-et-futur';
export const LEVEL = 'b1' as const;

export const ID_RANGES = [[400, 599]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A2 citations use the house English trail label (« lesson 15 in A2 »),
 *  resolved through `unitRef` from the shipped `unit.seq`, never typed and
 *  never the raw id. b1.* units are not in the seed yet, so they are labelled
 *  in French from the plan until they are.
 * ══════════════════════════════════════════════════════════════════════════ */

export const FUT_FORM_UNIT = 'b1.05';
export const FUT_IRREG_UNIT = 'b1.06';
export const COND_UNIT = 'b1.08';
export const SI_UNREAL_UNIT = 'b1.10';
export const PROCHE_UNIT = 'a2.19';
export const TIME_PREP_UNIT = 'a2.18';
export const MODAUX_UNIT = 'a2.13';
export const PC_AVOIR_UNIT = 'a2.05';

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5,
  'b1.06': 6, 'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const FUT_FORM_REF = refFr(FUT_FORM_UNIT);
export const FUT_IRREG_REF = refFr(FUT_IRREG_UNIT);
export const COND_REF = refFr(COND_UNIT);
export const SI_UNREAL_REF = refFr(SI_UNREAL_UNIT);
export const PROCHE_REF = unitRef(PROCHE_UNIT);
export const TIME_PREP_REF = unitRef(TIME_PREP_UNIT);
export const PC_AVOIR_REF = unitRef(PC_AVOIR_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED
 *
 *  b1.05 and b1.06 are written in the same wave as this lesson. Their corpus
 *  files landed while this one was being authored, so the two reframes are
 *  IMPORTED and quoted verbatim, never retyped. Three screens show them: the
 *  act 2 rule deck, the act 5 rule deck and the task's watchFor list.
 *
 *  If either neighbour rewords its reframe before review, nothing here needs
 *  editing: every screen interpolates the constant, never the text.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B105_REFRAME, REFRAME_EN as B105_REFRAME_EN } from './futur-simple-corpus.ts';
export { REFRAME as B106_REFRAME, REFRAME_EN as B106_REFRAME_EN } from './futur-irregulier-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE APPOINTMENT, NOT THE PROMISE: a two-part sentence is two halves that
 *  meet at one moment. With quand the moment is in the diary, so both halves
 *  are written in the future. With si the moment is only proposed, so the
 *  condition stays in the present and never moves. « la charnière » is the
 *  only label used on a learner surface for quand, lorsque, dès que, aussitôt
 *  que, tant que, pendant que and une fois que.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Le futur se dit des deux côtés de quand, et jamais après si.";
export const REFRAME_EN = 'The future is said on both sides of quand, and never after si.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'quand + futur, si + présent.',
    why: 'A formula, not a sentence. It is silent about the MAIN clause, which is exactly where an English speaker drops the future, and it hides act 6, where si + présent is followed by three different things.',
  },
  {
    text: "En anglais on dit le présent, en français le futur.",
    why: 'Makes the rule a translation habit instead of a meaning, and it is false in act 4: « Quand il pleut, je prends le métro » uses the present in both languages.',
  },
  {
    text: "Quand, c'est sûr. Si, c'est possible.",
    why: 'The best TEST in the lesson, and it is kept as one (act 7 and the sheet). As a reframe it says nothing about the tense, which is the whole difficulty.',
  },
  {
    text: 'Les deux moitiés vivent au même moment.',
    why: 'True and elegant, and it would make act 5 unteachable: after si the two halves DO live at the same future moment and the tenses still differ.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-23. `named only` rows carry no
 *  `flashcard` drill, so no deckTranche can release them: they are reachable
 *  by being named in a section or a drill. NONE of the 23 carries `voiceflash`,
 *  so all 23 are in `NOT_SPEAKABLE` and no `practice` speak section names one.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [] as string[],
  act2: [] as string[],
  act3: [
    'fr.b1.heure-et-date.085',        // Nous partirons dès que l'horloge sonnera midi.  (named only)
  ],
  act4: [
    'fr.b1.appareils.002',            // Dès que mon téléphone tombe en panne, je perds toutes mes photos.
    'fr.b1.routines.093',             // Tant que je fais du sport le matin, je me sens plus énergique.
    'fr.b1.cuisine.001',              // Une fois que la pâte a levé, on la met au four.  (named only)
  ],
  act5: [
    'fr.b1.cuisine.073',              // Si tu ajoutes trop de sel, le plat sera trop salé.
    'fr.b1.maison.069',               // Si tu ranges ta chambre, je t'aiderai à peindre le salon.
    'fr.b1.sports-et-loisirs.077',    // Si tu t'entraînes régulièrement, tu progresseras rapidement.
    'fr.b1.universite.004',           // Si je réussis mes partiels, je passerai en troisième année.
    'fr.b1.affaires.004',             // Si j'obtiens ce poste, je serai très motivé.
    'fr.b1.maison.015',               // Il faudra changer la serrure si nous perdons encore les clés.  (named only)
    'fr.a2.sports-et-loisirs.039',    // On ira au stade si on a le temps demain.  (named only)
    'fr.b1.argent-quotidien.005',     // Si tu dépenses moins, tu pourras économiser davantage.  (named only)
  ],
  act6: [
    'fr.b1.cuisine.078',              // Si on respecte la recette, le résultat est souvent meilleur.
    'fr.b1.cuisine.088',              // Si on manque de temps, on peut préparer des plats simples.
    'fr.b1.cuisine.083',              // Si vous êtes végétarien, ce restaurant propose plusieurs options.
  ],
  act7: [] as string[],
  act8: [
    'fr.a2.heure-et-date.099',        // Fais-le tout de suite, sinon tu vas oublier.
    'fr.a2.heure-et-date.161',        // Nous allons partir dans deux jours.  (named only)
    'fr.a2.heure-et-date.176',        // Le film va commencer dans dix minutes.  (named only)
  ],
  act9: [
    'fr.b1.heure-et-date.057',        // Nous nous verrons dans deux semaines, le temps que tu finisses ton rapport.  (named only)
  ],
  act10: [
    'fr.b1.maison.061',               // Quand nous aurons fini les travaux, nous inviterons nos amis.  (named only)
    'fr.b1.dictee.043',               // Quand tu auras terminé tes devoirs, tu pourras regarder un film.  (named only)
    'fr.b1.dictee.039',               // Dès que j'aurai fini ma formation, je chercherai un nouvel emploi.  (named only)
    'fr.b1.metiers.053',              // Elle aimerait travailler à l'étranger quand elle aura terminé ses études.  (named only)
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.b1.heure-et-date.085',   // dictation only
  'fr.b1.cuisine.001',         // dictation only
  'fr.b1.maison.015',          // sentence, dictation
  'fr.a2.sports-et-loisirs.039', // dictation only
  'fr.b1.argent-quotidien.005',  // dictation only
  'fr.a2.heure-et-date.161',   // dictation only
  'fr.a2.heure-et-date.176',   // dictation only
  'fr.b1.heure-et-date.057',   // dictation only
  'fr.b1.maison.061',          // dictation only
  'fr.b1.dictee.043',          // sentence, review
  'fr.b1.dictee.039',          // sentence, review
  'fr.b1.metiers.053',         // sentence, review
];

/** No `voiceflash` either: never in a `practice` speak section. Every reused
 *  row is here, because not one of the 23 carries `voiceflash` in the seed. */
export const NOT_SPEAKABLE = [...IMPORT_IDS];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the last stressed syllable of
 *  each group in caps, ü for French u, nasals closed with ⁿ, and NO U+203F
 *  tie: a liaison consonant moves onto the next syllable (« too-tee-RA »).
 *
 *  THE FUTURE ENDINGS -rai / -ras / -ra / -rons / -rez / -ront carry the
 *  stress of their group, so the caps usually sit on them: `zha-reev-REH`,
 *  `a-reev-RA`, `ko-mahⁿs-ROHⁿ`. That is the one thing the ear must catch,
 *  and it is what separates « j'arrive » from « j'arriverai ».
 *
 *  AGREEMENT: the -é rows with être are masculine unless tagged `agree-f`.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['futur-usage'], ...extra,
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

/* ── ACT 1 · LE RENDEZ-VOUS MANQUÉ ──────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(400, "Quand j'aurai les clés, je vous appellerai.", 'When I get the keys, I will call you.', '/kɑ̃ ʒo.ʁe le kle ʒə vu.za.pɛl.ʁe/', 'kahⁿ zho-REH lay KLAY zhuh voo-za-pehl-REH', ['scene', 'quand', 'futur'], FCVDR,
    gap("Quand j'___ (avoir) les clés, je vous ___ (appeler).", "aurai, appellerai : les deux moitiés sont à venir, donc les deux sont au futur.")),
  sent(401, "Quand j'ai les clés, je vous appelle.", 'Whenever I have the keys, I call you.', '/kɑ̃ ʒe le kle ʒə vu.za.pɛl/', 'kahⁿ ZHAY lay KLAY zhuh voo-za-PEHL', ['scene', 'habitude']),
  sent(402, 'Je déménage le quinze mars.', 'I am moving on the fifteenth of March.', '/ʒə de.me.naʒ lə kɛ̃z maʁs/', 'zhuh day-may-NAZH luh kehⁿz MARSS', ['scene', 'date']),
  sent(403, 'Le camion arrivera à huit heures.', 'The truck will arrive at eight.', '/lə ka.mjɔ̃ a.ʁiv.ʁa a ɥi.tœʁ/', 'luh ka-MYOHⁿ a-reev-RA a wee-TUHR', ['scene', 'futur'], FCVDR),
  sent(404, 'Dès que le propriétaire signera, tout ira vite.', 'As soon as the landlord signs, everything will go quickly.', '/dɛ kə lə pʁɔ.pʁje.tɛʁ si.ɲə.ʁa tu.ti.ʁa vit/', 'deh kuh luh pro-pree-ay-TEHR see-nyuh-RA too-tee-RA VEET', ['scene', 'des-que', 'futur']),
  sent(405, 'Nous commencerons par la cuisine.', 'We will start with the kitchen.', '/nu kɔ.mɑ̃s.ʁɔ̃ paʁ la kɥi.zin/', 'noo ko-mahⁿs-ROHⁿ par la kwee-ZEEN', ['scene', 'futur']),
  sent(406, 'Je ne sais pas encore la date exacte.', 'I do not know the exact date yet.', '/ʒə nə sɛ pa.zɑ̃.kɔʁ la dat ɛɡ.zakt/', 'zhuh nuh seh pa-zahⁿ-KOR la dat eg-ZAKT', ['scene', 'present']),
  sent(407, 'Quand tu arriveras, je serai déjà là.', 'When you arrive, I will already be there.', '/kɑ̃ ty a.ʁiv.ʁa ʒə sə.ʁe de.ʒa la/', 'kahⁿ tü a-reev-RA zhuh suh-reh day-zha LA', ['scene', 'quand', 'futur'], FCVDR),
  sent(408, 'Elle a noté la mauvaise semaine.', 'She wrote down the wrong week.', '/ɛl a nɔ.te la mo.vɛz sə.mɛn/', 'ehl a no-TAY la moh-vehz suh-MENN', ['scene', 'consequence']),
  sent(409, 'Il faudra tout emballer avant vendredi.', 'Everything will have to be packed before Friday.', '/il fo.dʁa tu.tɑ̃.ba.le a.vɑ̃ vɑ̃.dʁə.di/', 'eel foh-DRA too-tahⁿ-ba-LAY a-vahⁿ vahⁿ-druh-DEE', ['scene', 'futur']),
  sent(410, 'Quand je serai installé, je t’inviterai.', 'When I am settled in, I will invite you over.', '/kɑ̃ ʒə sə.ʁe ɛ̃s.ta.le ʒə tɛ̃.vit.ʁe/', 'kahⁿ zhuh suh-REH ehⁿs-ta-LAY zhuh tehⁿ-veet-REH', ['scene', 'quand', 'futur', 'agree-m']),
  sent(411, 'Si tout va bien, je déménagerai samedi.', 'If all goes well, I will move on Saturday.', '/si tu va bjɛ̃ ʒə de.me.naʒ.ʁe sam.di/', 'see too va BYEHⁿ zhuh day-may-nazh-REH sam-DEE', ['scene', 'si', 'futur'], FCVDR),
  sent(412, 'On se verra la semaine prochaine.', 'We will see each other next week.', '/ɔ̃ sə vɛ.ʁa la sə.mɛn pʁɔ.ʃɛn/', 'ohⁿ suh veh-RA la suh-mehn pro-SHENN', ['scene', 'futur']),
  sent(413, 'Le déménagement est parti au mauvais jour.', 'The move was booked for the wrong day.', '/lə de.me.naʒ.mɑ̃ ɛ paʁ.ti o mo.vɛ ʒuʁ/', 'luh day-may-nazh-MAHⁿ eh par-TEE oh moh-veh ZHOOR', ['scene', 'consequence']),
];

/* ── ACT 2 · LE FUTUR DES DEUX CÔTÉS ────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(414, REFRAME, REFRAME_EN, '/lə fy.tyʁ sə di de dø ko.te də kɑ̃ e ʒa.mɛ a.pʁɛ si/', 'luh fü-TÜR suh dee day deu koh-TAY duh KAHⁿ ay zha-meh a-preh SEE', ['rule', 'reframe'], ['flashcard'],
    rule('Où va le futur, et où ne va-t-il jamais ?', 'Ex : Quand j’arriverai, je t’appellerai. Si j’arrive tôt, je t’appellerai.')),
  sent(415, "Quand j'arriverai à Bruxelles, je t'enverrai un message.", 'When I get to Brussels, I will send you a message.', '/kɑ̃ ʒa.ʁiv.ʁe a bʁy.sɛl ʒə tɑ̃.vɛ.ʁe œ̃ me.saʒ/', 'kahⁿ zha-reev-REH a brü-SEHL zhuh tahⁿ-veh-REH uhⁿ may-SAZH', ['quand', 'futur'], FCVDR,
    gap("Quand j'___ (arriver) à Bruxelles, je t'___ (envoyer) un message.", 'arriverai, enverrai : les deux verbes parlent du même moment à venir.')),
  sent(416, 'Quand je commencerai ce travail, je prendrai le train tous les jours.', 'When I start this job, I will take the train every day.', '/kɑ̃ ʒə kɔ.mɑ̃s.ʁe sə tʁa.vaj ʒə pʁɑ̃.dʁe lə tʁɛ̃ tu le ʒuʁ/', 'kahⁿ zhuh ko-mahⁿs-REH suh tra-VAÏ zhuh prahⁿ-DREH luh trehⁿ too lay ZHOOR', ['quand', 'futur']),
  sent(417, 'Quand le contrat sera signé, tu recevras une copie.', 'When the contract is signed, you will receive a copy.', '/kɑ̃ lə kɔ̃.tʁa sə.ʁa si.ɲe ty ʁə.sə.vʁa yn kɔ.pi/', 'kahⁿ luh kohⁿ-TRA suh-ra see-NYAY tü ruh-suh-VRA ün ko-PEE', ['quand', 'futur']),
  sent(418, 'Quand nous serons prêts, nous partirons.', 'When we are ready, we will leave.', '/kɑ̃ nu sə.ʁɔ̃ pʁɛ nu paʁ.ti.ʁɔ̃/', 'kahⁿ noo suh-ROHⁿ PREH noo par-tee-ROHⁿ', ['quand', 'futur'], FCVDR),
  sent(419, 'Quand elle finira ses études, elle cherchera un poste.', 'When she finishes her studies, she will look for a job.', '/kɑ̃.tɛl fi.ni.ʁa se.ze.tyd ɛl ʃɛʁ.ʃə.ʁa œ̃ pɔst/', 'kahⁿ-tehl fee-nee-RA say-zay-TÜD ehl shehr-shuh-RA uhⁿ POST', ['quand', 'futur']),
  sent(420, 'Quand vous aurez le temps, vous me direz.', 'When you have time, you will tell me.', '/kɑ̃ vu.zo.ʁe lə tɑ̃ vu mə di.ʁe/', 'kahⁿ voo-zo-REH luh TAHⁿ voo muh dee-REH', ['quand', 'futur']),
  sent(421, 'Quand il fera beau, nous mangerons dehors.', 'When the weather is nice, we will eat outside.', '/kɑ̃.til fə.ʁa bo nu mɑ̃.ʒə.ʁɔ̃ də.ɔʁ/', 'kahⁿ-teel fuh-RA BOH noo mahⁿ-zhuh-ROHⁿ duh-OR', ['quand', 'futur'], FCVDR),
  sent(422, 'Quand tu verras le directeur, tu comprendras.', 'When you see the director, you will understand.', '/kɑ̃ ty vɛ.ʁa lə di.ʁɛk.tœʁ ty kɔ̃.pʁɑ̃.dʁa/', 'kahⁿ tü veh-RA luh dee-rehk-TUHR tü kohⁿ-prahⁿ-DRA', ['quand', 'futur']),
  sent(423, 'Je te préviendrai quand la salle sera libre.', 'I will let you know when the room is free.', '/ʒə tə pʁe.vjɛ̃.dʁe kɑ̃ la sal sə.ʁa libʁ/', 'zhuh tuh pray-vyehⁿ-DREH kahⁿ la SAL suh-ra LEEBR', ['quand', 'futur', 'ordre']),
  sent(424, 'Nous en reparlerons quand tu rentreras.', 'We will talk about it again when you get back.', '/nu.zɑ̃ ʁə.paʁ.lə.ʁɔ̃ kɑ̃ ty ʁɑ̃.tʁə.ʁa/', 'noo-zahⁿ ruh-par-luh-ROHⁿ kahⁿ tü rahⁿ-truh-RA', ['quand', 'futur', 'ordre']),
  sent(425, 'Elle te répondra quand elle pourra.', 'She will answer you when she can.', '/ɛl tə ʁe.pɔ̃.dʁa kɑ̃.tɛl pu.ʁa/', 'ehl tuh ray-pohⁿ-DRA kahⁿ-tehl poo-RA', ['quand', 'futur', 'ordre'], FCVDR),
  sent(426, 'Ils déménageront quand les enfants seront grands.', 'They will move when the children are older.', '/il de.me.naʒ.ʁɔ̃ kɑ̃ le.zɑ̃.fɑ̃ sə.ʁɔ̃ ɡʁɑ̃/', 'eel day-may-nazh-ROHⁿ kahⁿ lay-zahⁿ-fahⁿ suh-rohⁿ GRAHⁿ', ['quand', 'futur']),
  sent(427, 'Quand le train partira, il sera trop tard.', 'When the train leaves, it will be too late.', '/kɑ̃ lə tʁɛ̃ paʁ.ti.ʁa il sə.ʁa tʁo taʁ/', 'kahⁿ luh trehⁿ par-tee-RA eel suh-ra troh TAR', ['quand', 'futur']),
  sent(428, 'Quand tu seras là, tout sera plus simple.', 'When you are here, everything will be easier.', '/kɑ̃ ty sə.ʁa la tu sə.ʁa ply sɛ̃pl/', 'kahⁿ tü suh-RA LA too suh-ra plü SEHⁿPL', ['quand', 'futur']),
  sent(429, 'En anglais, la première moitié reste au présent.', 'In English the first half stays in the present.', '/ɑ̃.nɑ̃.ɡlɛ la pʁə.mjɛʁ mwa.tje ʁɛs.to pʁe.zɑ̃/', 'ahⁿ-nahⁿ-GLEH la pruh-myehr mwa-TYAY rehs-toh pray-ZAHⁿ', ['rule', 'contraste'], ['flashcard'],
    rule('Pourquoi « quand j’arrive » sonne faux pour un projet ?', 'L’anglais garde le présent ; le français met le futur des deux côtés.')),
  sent(430, 'Après quand, le verbe va au futur comme dans l’autre moitié.', 'After quand the verb goes into the future, just like the other half.', '/a.pʁɛ kɑ̃ lə vɛʁb va o fy.tyʁ kɔm dɑ̃ lotʁ mwa.tje/', 'a-preh KAHⁿ luh VEHRB va oh fü-TÜR kom dahⁿ LOHTR mwa-TYAY', ['rule', 'quand'], ['flashcard'],
    rule('Quel temps après quand, quand on parle d’un projet ?', 'Ex : Quand tu arriveras, je serai déjà là.')),
  sent(431, "Quand j'arrive au bureau, je prends un café.", 'When I get to the office, I have a coffee.', '/kɑ̃ ʒa.ʁiv o by.ʁo ʒə pʁɑ̃.zœ̃ ka.fe/', 'kahⁿ zha-REEV oh bü-ROH zhuh prahⁿ-zuhⁿ ka-FAY', ['habitude', 'present'], FCVDR),
];

/* ── ACT 3 · LA FAMILLE DES CHARNIÈRES ──────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(432, "Dès que le magasin ouvrira, j'irai acheter du pain.", 'As soon as the shop opens, I will go and buy bread.', '/dɛ kə lə ma.ɡa.zɛ̃ u.vʁi.ʁa ʒi.ʁe aʃ.te dy pɛ̃/', 'deh kuh luh ma-ga-ZEHⁿ oo-vree-RA zhee-REH ash-TAY dü PEHⁿ', ['des-que', 'futur'], FCVDR,
    gap('Dès que le magasin ___ (ouvrir), j’___ (aller) acheter du pain.', 'ouvrira, irai : dès que annonce l’instant exact où ça commence.')),
  sent(433, 'Dès que tu seras prêt, on partira.', 'As soon as you are ready, we will go.', '/dɛ kə ty sə.ʁa pʁɛ ɔ̃ paʁ.ti.ʁa/', 'deh kuh tü suh-ra PREH ohⁿ par-tee-RA', ['des-que', 'futur'], FCVDR),
  sent(434, 'Aussitôt que la réunion finira, je t’appellerai.', 'The moment the meeting ends, I will call you.', '/o.si.to kə la ʁe.y.njɔ̃ fi.ni.ʁa ʒə ta.pɛl.ʁe/', 'oh-see-TOH kuh la ray-ü-NYOHⁿ fee-nee-RA zhuh ta-pehl-REH', ['aussitot-que', 'futur']),
  sent(435, 'Aussitôt qu’il arrivera, nous commencerons.', 'The moment he arrives, we will start.', '/o.si.to ki.la.ʁiv.ʁa nu kɔ.mɑ̃s.ʁɔ̃/', 'oh-see-toh kee-la-reev-RA noo ko-mahⁿs-ROHⁿ', ['aussitot-que', 'futur']),
  sent(436, 'Lorsque nous serons à Genève, nous visiterons le lac.', 'When we are in Geneva, we will visit the lake.', '/lɔʁs.kə nu sə.ʁɔ̃.za ʒə.nɛv nu vi.zit.ʁɔ̃ lə lak/', 'LORSS-kuh noo suh-rohⁿ-za zhuh-NEHV noo vee-zeet-ROHⁿ luh LAK', ['lorsque', 'futur'], FCVDR),
  sent(437, 'Lorsque le médecin appellera ton nom, tu entreras.', 'When the doctor calls your name, you will go in.', '/lɔʁs.kə lə med.sɛ̃ a.pɛl.ʁa tɔ̃ nɔ̃ ty ɑ̃.tʁə.ʁa/', 'LORSS-kuh luh mayd-SEHⁿ a-pehl-RA tohⁿ NOHⁿ tü ahⁿ-truh-RA', ['lorsque', 'futur']),
  sent(438, 'Tant que la pluie continuera, nous resterons à l’intérieur.', 'As long as the rain keeps on, we will stay inside.', '/tɑ̃ kə la plɥi kɔ̃.ti.nɥə.ʁa nu ʁɛs.tə.ʁɔ̃.za lɛ̃.te.ʁjœʁ/', 'tahⁿ kuh la PLWEE kohⁿ-tee-nwuh-RA noo rehs-tuh-rohⁿ-za lehⁿ-tay-RYUHR', ['tant-que', 'futur']),
  sent(439, 'Tant que tu n’auras pas fini, tu ne sortiras pas.', 'As long as you have not finished, you will not go out.', '/tɑ̃ kə ty no.ʁa pa fi.ni ty nə sɔʁ.ti.ʁa pa/', 'tahⁿ kuh tü no-ra pa fee-NEE tü nuh sor-tee-ra PA', ['tant-que', 'futur', 'negation']),
  sent(440, 'Pendant que tu feras les courses, je rangerai la cuisine.', 'While you do the shopping, I will tidy the kitchen.', '/pɑ̃.dɑ̃ kə ty fə.ʁa le kuʁs ʒə ʁɑ̃.ʒə.ʁe la kɥi.zin/', 'pahⁿ-dahⁿ kuh tü fuh-RA lay KOORSS zhuh rahⁿ-zhuh-REH la kwee-ZEEN', ['pendant-que', 'futur'], FCVDR),
  sent(441, 'Pendant qu’il conduira, je lirai la carte.', 'While he drives, I will read the map.', '/pɑ̃.dɑ̃ kil kɔ̃.dɥi.ʁa ʒə li.ʁe la kaʁt/', 'pahⁿ-dahⁿ keel kohⁿ-dwee-RA zhuh lee-REH la KART', ['pendant-que', 'futur']),
  sent(442, 'Une fois que le formulaire sera rempli, tu le déposeras au bureau.', 'Once the form is filled in, you will hand it in at the office.', '/yn fwa kə lə fɔʁ.my.lɛʁ sə.ʁa ʁɑ̃.pli ty lə de.poz.ʁa o by.ʁo/', 'ün FWA kuh luh for-mü-LEHR suh-ra rahⁿ-PLEE tü luh day-pohz-RA oh bü-ROH', ['une-fois-que', 'futur']),
  sent(443, 'Une fois que nous aurons un appartement, tout sera plus calme.', 'Once we have a flat, everything will be calmer.', '/yn fwa kə nu.zo.ʁɔ̃.zœ̃.na.paʁ.tə.mɑ̃ tu sə.ʁa ply kalm/', 'ün FWA kuh noo-zo-rohⁿ-zuhⁿ-na-par-tuh-MAHⁿ too suh-ra plü KALM', ['une-fois-que', 'futur']),
  sent(444, 'Dès que j’aurai ton adresse, je t’enverrai le colis.', 'As soon as I have your address, I will send you the parcel.', '/dɛ kə ʒo.ʁe tɔ̃.na.dʁɛs ʒə tɑ̃.vɛ.ʁe lə kɔ.li/', 'deh kuh zho-REH tohⁿ-na-DREHSS zhuh tahⁿ-veh-REH luh ko-LEE', ['des-que', 'futur'], FCVDR),
  sent(445, 'Tant que j’habiterai ici, je prendrai le bus.', 'As long as I live here, I will take the bus.', '/tɑ̃ kə ʒa.bit.ʁe i.si ʒə pʁɑ̃.dʁe lə bys/', 'tahⁿ kuh zha-beet-REH ee-SEE zhuh prahⁿ-DREH luh BÜSS', ['tant-que', 'futur']),
  sent(446, 'Pendant que les enfants dormiront, nous préparerons la fête.', 'While the children sleep, we will get the party ready.', '/pɑ̃.dɑ̃ kə le.zɑ̃.fɑ̃ dɔʁ.mi.ʁɔ̃ nu pʁe.pa.ʁə.ʁɔ̃ la fɛt/', 'pahⁿ-dahⁿ kuh lay-zahⁿ-fahⁿ dor-mee-ROHⁿ noo pray-pa-ruh-ROHⁿ la FEHT', ['pendant-que', 'futur']),
  sent(447, 'Une fois que tu connaîtras le code, tu pourras entrer.', 'Once you know the code, you will be able to get in.', '/yn fwa kə ty kɔ.nɛ.tʁa lə kɔd ty pu.ʁa.zɑ̃.tʁe/', 'ün FWA kuh tü ko-neh-TRA luh KOD tü poo-ra-zahⁿ-TRAY', ['une-fois-que', 'futur'], FCVDR),
  sent(448, 'Dès que et aussitôt que donnent l’instant où ça commence.', 'Dès que and aussitôt que give the instant something starts.', '/dɛ kə e o.si.to kə dɔn lɛ̃s.tɑ̃ u sa kɔ.mɑ̃s/', 'deh kuh ay oh-see-TOH kuh DON lehⁿs-tahⁿ oo sa ko-MAHⁿSS', ['rule', 'charniere'], ['flashcard'],
    rule('Que dit dès que de plus que quand ?', 'Ex : Dès que tu seras prêt, on partira. Pas une minute de plus.')),
  sent(449, 'Tant que dit aussi longtemps que ça durera.', 'Tant que says for as long as it lasts.', '/tɑ̃ kə di o.si lɔ̃.tɑ̃ kə sa dy.ʁə.ʁa/', 'tahⁿ kuh dee oh-see lohⁿ-TAHⁿ kuh sa dü-ruh-RA', ['rule', 'charniere'], ['flashcard'],
    rule('Que dit tant que ?', 'Ex : Tant que la pluie continuera, nous resterons à l’intérieur.')),
  phrase(450, 'aussitôt que possible', 'as soon as possible', '/o.si.to kə pɔ.sibl/', 'oh-see-TOH kuh po-SEEBL', ['charniere', 'expression']),
  sent(451, 'Lorsque est le mot écrit ; quand est le mot parlé.', 'Lorsque is the written word; quand is the spoken one.', '/lɔʁs.kə ɛ lə mo.te.kʁi kɑ̃.tɛ lə mo paʁ.le/', 'LORSS-kuh eh luh moh-tay-KREE kahⁿ-teh luh moh par-LAY', ['rule', 'registre'], ['flashcard'],
    rule('Quelle différence entre quand et lorsque ?', 'Le sens est le même ; lorsque est plus écrit, plus formel.')),
];

/* ── ACT 4 · LA MÊME CHARNIÈRE, UN AUTRE MOMENT ─────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(452, 'Quand je rentre du travail, je prends une douche.', 'When I get home from work, I have a shower.', '/kɑ̃ ʒə ʁɑ̃tʁ dy tʁa.vaj ʒə pʁɑ̃.zyn duʃ/', 'kahⁿ zhuh RAHⁿTR dü tra-VAÏ zhuh prahⁿ-zün DOOSH', ['habitude', 'present'], FCVDR,
    gap('Quand je ___ (rentrer) du travail, je ___ (prendre) une douche.', 'rentre, prends : une habitude, donc le présent des deux côtés.')),
  sent(453, 'Dès que le réveil sonne, je me lève.', 'As soon as the alarm goes off, I get up.', '/dɛ kə lə ʁe.vɛj sɔn ʒə mə lɛv/', 'deh kuh luh ray-VEHÏ SON zhuh muh LEHV', ['habitude', 'present']),
  sent(454, 'Quand il pleut, je prends le métro.', 'When it rains, I take the metro.', '/kɑ̃.til plø ʒə pʁɑ̃ lə me.tʁo/', 'kahⁿ-teel PLEU zhuh prahⁿ luh may-TROH', ['habitude', 'present'], FCVDR),
  sent(455, 'Tant que je dors bien, je travaille mieux.', 'As long as I sleep well, I work better.', '/tɑ̃ kə ʒə dɔʁ bjɛ̃ ʒə tʁa.vaj mjø/', 'tahⁿ kuh zhuh dor BYEHⁿ zhuh tra-VAÏ MYEU', ['habitude', 'present']),
  sent(456, 'Une fois que le café est prêt, je m’assois.', 'Once the coffee is ready, I sit down.', '/yn fwa kə lə ka.fe ɛ pʁɛ ʒə ma.swa/', 'ün FWA kuh luh ka-FAY eh PREH zhuh ma-SWA', ['habitude', 'present']),
  sent(457, 'Pendant que je travaille, j’écoute la radio.', 'While I work, I listen to the radio.', '/pɑ̃.dɑ̃ kə ʒə tʁa.vaj ʒe.kut la ʁa.djo/', 'pahⁿ-dahⁿ kuh zhuh tra-VAÏ zhay-KOOT la ra-DYOH', ['habitude', 'present']),
  sent(458, 'Lorsque le soleil se couche, la place se vide.', 'When the sun goes down, the square empties.', '/lɔʁs.kə lə sɔ.lɛj sə kuʃ la plas sə vid/', 'LORSS-kuh luh so-LEHÏ suh KOOSH la PLASS suh VEED', ['verite', 'present']),
  sent(459, 'Quand j’étais étudiant, je travaillais le samedi.', 'When I was a student, I worked on Saturdays.', '/kɑ̃ ʒe.tɛ.ze.ty.djɑ̃ ʒə tʁa.va.jɛ lə sam.di/', 'kahⁿ zhay-teh-zay-tü-DYAHⁿ zhuh tra-va-yeh luh sam-DEE', ['passe', 'habitude'], FCVDR),
  sent(460, 'Dès que la cloche sonnait, tout le monde sortait.', 'As soon as the bell rang, everybody went out.', '/dɛ kə la klɔʃ sɔ.nɛ tu lə mɔ̃d sɔʁ.tɛ/', 'deh kuh la KLOSH so-neh too luh mohⁿd sor-TEH', ['passe', 'habitude']),
  sent(461, 'Quand le film a commencé, la salle est devenue silencieuse.', 'When the film started, the room went quiet.', '/kɑ̃ lə film a kɔ.mɑ̃.se la sal ɛ dəv.ny si.lɑ̃.sjøz/', 'kahⁿ luh FEELM a ko-mahⁿ-SAY la SAL eh duhv-NÜ see-lahⁿ-SYEUZ', ['passe', 'action']),
  sent(462, 'Quand nous habitions à Bruxelles, nous allions souvent au marché.', 'When we lived in Brussels, we often went to the market.', '/kɑ̃ nu.za.bi.tjɔ̃.za bʁy.sɛl nu.za.ljɔ̃ su.vɑ̃.to maʁ.ʃe/', 'kahⁿ noo-za-bee-tyohⁿ-za brü-SEHL noo-za-lyohⁿ soo-vahⁿ-toh mar-SHAY', ['passe', 'habitude']),
  sent(463, 'Quand je serai à la retraite, je voyagerai.', 'When I retire, I will travel.', '/kɑ̃ ʒə sə.ʁe a la ʁə.tʁɛt ʒə vwa.jaʒ.ʁe/', 'kahⁿ zhuh suh-REH a la ruh-TREHT zhuh vwa-yazh-REH', ['quand', 'futur'], FCVDR),
  sent(464, 'Dès que je finirai, je te le dirai.', 'As soon as I finish, I will tell you.', '/dɛ kə ʒə fi.ni.ʁe ʒə tə lə di.ʁe/', 'deh kuh zhuh fee-nee-REH zhuh tuh luh dee-REH', ['des-que', 'futur']),
  sent(465, 'Quand tu auras faim, tu me le diras.', 'When you get hungry, you will tell me.', '/kɑ̃ ty o.ʁa fɛ̃ ty mə lə di.ʁa/', 'kahⁿ tü o-ra FEHⁿ tü muh luh dee-RA', ['quand', 'futur']),
  sent(466, 'Le temps du verbe suit le moment, pas la conjonction.', 'The tense follows the moment, not the conjunction.', '/lə tɑ̃ dy vɛʁb sɥi lə mɔ.mɑ̃ pa la kɔ̃.ʒɔ̃k.sjɔ̃/', 'luh tahⁿ dü VEHRB swee luh mo-MAHⁿ pa la kohⁿ-zhohⁿk-SYOHⁿ', ['rule', 'charniere'], ['flashcard'],
    rule('Quand décide-t-il du temps du verbe ?', 'Jamais. C’est le moment dont tu parles qui décide.')),
  sent(467, 'Quand je suis à la maison, je cuisine beaucoup.', 'When I am at home, I cook a lot.', '/kɑ̃ ʒə sɥi.za la mɛ.zɔ̃ ʒə kɥi.zin bo.ku/', 'kahⁿ zhuh swee-za la meh-ZOHⁿ zhuh kwee-ZEEN boh-KOO', ['habitude', 'present']),
];

/* ── ACT 5 · SI + PRÉSENT, ET JAMAIS LE FUTUR ───────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(468, 'Si tu viens demain, je préparerai un gâteau.', 'If you come tomorrow, I will make a cake.', '/si ty vjɛ̃ də.mɛ̃ ʒə pʁe.pa.ʁə.ʁe œ̃ ɡɑ.to/', 'see tü vyehⁿ duh-MEHⁿ zhuh pray-pa-ruh-REH uhⁿ ga-TOH', ['si', 'futur'], FCVDR,
    gap('Si tu ___ (venir) demain, je ___ (préparer) un gâteau.', 'viens, préparerai : après si le présent, dans l’autre moitié le futur.')),
  sent(469, "Si j'ai le temps, je passerai te voir.", 'If I have time, I will drop by.', '/si ʒe lə tɑ̃ ʒə pas.ʁe tə vwaʁ/', 'see zhay luh TAHⁿ zhuh pass-REH tuh VWAR', ['si', 'futur'], FCVDR),
  sent(470, "Si le train est à l'heure, nous serons là à midi.", 'If the train is on time, we will be there at noon.', '/si lə tʁɛ̃.ɛ.ta lœʁ nu sə.ʁɔ̃ la a mi.di/', 'see luh trehⁿ-eh-ta LUHR noo suh-rohⁿ LA a mee-DEE', ['si', 'futur']),
  sent(471, 'Si tu m’aides, nous finirons plus vite.', 'If you help me, we will finish faster.', '/si ty mɛd nu fi.ni.ʁɔ̃ ply vit/', 'see tü MEHD noo fee-nee-ROHⁿ plü VEET', ['si', 'futur']),
  sent(472, 'Si vous partez maintenant, vous éviterez les bouchons.', 'If you leave now, you will avoid the traffic.', '/si vu paʁ.te mɛ̃t.nɑ̃ vu.ze.vit.ʁe le bu.ʃɔ̃/', 'see voo par-TAY mehⁿt-NAHⁿ voo-zay-veet-RAY lay boo-SHOHⁿ', ['si', 'futur']),
  sent(473, 'Si elle accepte, nous signerons vendredi.', 'If she says yes, we will sign on Friday.', '/si ɛ.lak.sɛpt nu si.ɲə.ʁɔ̃ vɑ̃.dʁə.di/', 'see eh-lak-SEHPT noo see-nyuh-ROHⁿ vahⁿ-druh-DEE', ['si', 'futur']),
  sent(474, 'Si nous ne trouvons pas de place, nous marcherons.', 'If we do not find a space, we will walk.', '/si nu nə tʁu.vɔ̃ pa də plas nu maʁ.ʃə.ʁɔ̃/', 'see noo nuh troo-vohⁿ pa duh PLASS noo mar-shuh-ROHⁿ', ['si', 'futur', 'negation']),
  sent(475, 'S’il fait beau, nous irons à la plage.', 'If the weather is nice, we will go to the beach.', '/sil fɛ bo nu.zi.ʁɔ̃.za la plaʒ/', 'seel feh BOH noo-zee-rohⁿ-za la PLAZH', ['si', 'futur'], FCVDR),
  sent(476, 'Si tu ne réponds pas, je rappellerai plus tard.', 'If you do not answer, I will call back later.', '/si ty nə ʁe.pɔ̃ pa ʒə ʁa.pɛl.ʁe ply taʁ/', 'see tü nuh ray-pohⁿ PA zhuh ra-pehl-REH plü TAR', ['si', 'futur', 'negation']),
  sent(477, 'Si le colis arrive aujourd’hui, je te préviendrai.', 'If the parcel comes today, I will let you know.', '/si lə kɔ.li a.ʁiv o.ʒuʁ.dɥi ʒə tə pʁe.vjɛ̃.dʁe/', 'see luh ko-LEE a-REEV oh-zhoor-DWEE zhuh tuh pray-vyehⁿ-DREH', ['si', 'futur']),
  sent(478, 'Si je rate le bus, je prendrai un taxi.', 'If I miss the bus, I will take a taxi.', '/si ʒə ʁat lə bys ʒə pʁɑ̃.dʁe œ̃ tak.si/', 'see zhuh RAT luh BÜSS zhuh prahⁿ-DREH uhⁿ tak-SEE', ['si', 'futur'], FCVDR),
  sent(479, 'Si ça ne marche pas, on essaiera autrement.', 'If it does not work, we will try another way.', '/si sa nə maʁʃ pa ɔ̃.ne.sɛ.ʁa o.tʁə.mɑ̃/', 'see sa nuh MARSH pa ohⁿ-nay-seh-RA oh-truh-MAHⁿ', ['si', 'futur', 'negation']),
  sent(480, 'Après si, jamais le futur : le verbe reste au présent.', 'After si, never the future: the verb stays in the present.', '/a.pʁɛ si ʒa.mɛ lə fy.tyʁ lə vɛʁb ʁɛs.to pʁe.zɑ̃/', 'a-preh SEE zha-meh luh fü-TÜR luh VEHRB rehs-toh pray-ZAHⁿ', ['rule', 'si'], ['flashcard'],
    rule('Quel temps après si dans une condition réelle ?', 'Le présent, toujours. Ex : Si tu viens demain, je préparerai un gâteau.')),
  sent(481, 'Si tu veux, je t’expliquerai tout.', 'If you like, I will explain everything to you.', '/si ty vø ʒə tɛks.pli.kə.ʁe tu/', 'see tü VEU zhuh tehks-plee-kuh-REH TOO', ['si', 'futur']),
  sent(482, 'Si mon patron est d’accord, je partirai plus tôt.', 'If my boss agrees, I will leave earlier.', '/si mɔ̃ pa.tʁɔ̃.ɛ da.kɔʁ ʒə paʁ.ti.ʁe ply to/', 'see mohⁿ pa-trohⁿ-eh da-KOR zhuh par-tee-REH plü TOH', ['si', 'futur']),
  sent(483, 'S’il neige, les écoles fermeront.', 'If it snows, the schools will close.', '/sil nɛʒ le.ze.kɔl fɛʁ.mə.ʁɔ̃/', 'seel NEHZH lay-zay-KOL fehr-muh-ROHⁿ', ['si', 'futur'], FCVDR),
  sent(484, 'Si tu prends ce train, tu arriveras avant nous.', 'If you take this train, you will get there before us.', '/si ty pʁɑ̃ sə tʁɛ̃ ty a.ʁiv.ʁa a.vɑ̃ nu/', 'see tü prahⁿ suh TREHⁿ tü a-reev-RA a-vahⁿ NOO', ['si', 'futur']),
  sent(485, 'Si nous réservons ce soir, ce sera moins cher.', 'If we book tonight, it will be cheaper.', '/si nu ʁe.zɛʁ.vɔ̃ sə swaʁ sə sə.ʁa mwɛ̃ ʃɛʁ/', 'see noo ray-zehr-vohⁿ suh SWAR suh suh-ra mwehⁿ SHEHR', ['si', 'futur']),
];

/* ── ACT 6 · TROIS SUITES APRÈS SI ──────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(486, 'Si on chauffe l’eau à cent degrés, elle bout.', 'If you heat water to a hundred degrees, it boils.', '/si ɔ̃ ʃof lo a sɑ̃ də.ɡʁe ɛl bu/', 'see ohⁿ SHOHF loh a sahⁿ duh-GRAY ehl BOO', ['si', 'verite'], FCVDR,
    gap('Si on ___ (chauffer) l’eau à cent degrés, elle ___ (bouillir).', 'chauffe, bout : une vérité générale, donc le présent des deux côtés.')),
  sent(487, 'Si tu mélanges le bleu et le jaune, tu obtiens du vert.', 'If you mix blue and yellow, you get green.', '/si ty me.lɑ̃ʒ lə blø e lə ʒon ty ɔb.tjɛ̃ dy vɛʁ/', 'see tü may-LAHⁿZH luh BLEU ay luh ZHOHN tü ob-tyehⁿ dü VEHR', ['si', 'verite']),
  sent(488, 'Si le voyant rouge s’allume, la machine est en panne.', 'If the red light comes on, the machine is out of order.', '/si lə vwa.jɑ̃ ʁuʒ sa.lym la ma.ʃin ɛ.tɑ̃ pan/', 'see luh vwa-yahⁿ ROOZH sa-LÜM la ma-SHEEN eh-tahⁿ PANN', ['si', 'verite']),
  sent(489, 'Si tu as froid, ferme la fenêtre.', 'If you are cold, close the window.', '/si ty a fʁwa fɛʁm la fə.nɛtʁ/', 'see tü a FRWA FEHRM la fuh-NEHTR', ['si', 'consigne'], FCVDR),
  sent(490, 'Si vous avez une question, levez la main.', 'If you have a question, put your hand up.', '/si vu.za.ve yn kɛs.tjɔ̃ lə.ve la mɛ̃/', 'see voo-za-VAY ün kehs-TYOHⁿ luh-VAY la MEHⁿ', ['si', 'consigne']),
  sent(491, 'Si le bébé pleure, appelle-moi.', 'If the baby cries, call me.', '/si lə be.be plœʁ a.pɛl mwa/', 'see luh bay-BAY PLUHR a-pehl-MWA', ['si', 'consigne'], FCVDR),
  sent(492, 'Si tu passes devant la boulangerie, prends du pain.', 'If you go past the bakery, get some bread.', '/si ty pas də.vɑ̃ la bu.lɑ̃ʒ.ʁi pʁɑ̃ dy pɛ̃/', 'see tü PASS duh-vahⁿ la boo-lahⁿzh-REE prahⁿ dü PEHⁿ', ['si', 'consigne']),
  sent(493, 'Si l’alarme sonne, sortez par la porte de gauche.', 'If the alarm goes off, leave by the left-hand door.', '/si la.laʁm sɔn sɔʁ.te paʁ la pɔʁt də ɡoʃ/', 'see la-LARM SON sor-TAY par la port duh GOHSH', ['si', 'consigne']),
  sent(494, 'Si tu ne comprends pas, demande.', 'If you do not understand, ask.', '/si ty nə kɔ̃.pʁɑ̃ pa də.mɑ̃d/', 'see tü nuh kohⁿ-prahⁿ PA duh-MAHⁿD', ['si', 'consigne', 'negation']),
  sent(495, 'Si on paie en ligne, la livraison est gratuite.', 'If you pay online, delivery is free.', '/si ɔ̃ pɛ ɑ̃ liɲ la li.vʁɛ.zɔ̃.ɛ ɡʁa.tɥit/', 'see ohⁿ peh ahⁿ LEENY la lee-vreh-zohⁿ-eh gra-TWEET', ['si', 'verite']),
  sent(496, 'Si tu bois du café le soir, tu dors mal.', 'If you drink coffee in the evening, you sleep badly.', '/si ty bwa dy ka.fe lə swaʁ ty dɔʁ mal/', 'see tü bwa dü ka-FAY luh SWAR tü dor MAL', ['si', 'verite'], FCVDR),
  sent(497, 'Après si : un futur, un présent ou un impératif.', 'After si: a future, a present or an imperative.', '/a.pʁɛ si œ̃ fy.tyʁ œ̃ pʁe.zɑ̃ u œ̃.nɛ̃.pe.ʁa.tif/', 'a-preh SEE uhⁿ fü-TÜR uhⁿ pray-ZAHⁿ oo uhⁿ-nehⁿ-pay-ra-TEEF', ['rule', 'si'], ['flashcard'],
    rule('Qu’est-ce qui peut suivre si + présent ?', 'Un futur (projet), un présent (vérité), un impératif (consigne).')),
  sent(498, 'Si tu veux un conseil, écoute-le jusqu’au bout.', 'If you want advice, listen to it right to the end.', '/si ty vø œ̃ kɔ̃.sɛj e.kut lə ʒys.ko bu/', 'see tü veu uhⁿ kohⁿ-SEHÏ ay-koot luh zhüs-koh BOO', ['si', 'consigne']),
  sent(499, 'Si la porte est fermée, sonnez deux fois.', 'If the door is shut, ring twice.', '/si la pɔʁt ɛ fɛʁ.me sɔ.ne dø fwa/', 'see la port eh fehr-MAY so-NAY deu FWA', ['si', 'consigne']),
  sent(500, 'Si le métro est bloqué, le bus passe par là.', 'If the metro is blocked, the bus goes that way.', '/si lə me.tʁo ɛ blɔ.ke lə bys pas paʁ la/', 'see luh may-TROH eh blo-KAY luh BÜSS pass par LA', ['si', 'verite']),
  sent(501, 'Si tu arrives avant moi, attends-moi devant l’entrée.', 'If you get there before me, wait for me by the entrance.', '/si ty a.ʁiv a.vɑ̃ mwa a.tɑ̃ mwa də.vɑ̃ lɑ̃.tʁe/', 'see tü a-REEV a-vahⁿ MWA a-tahⁿ-MWA duh-vahⁿ lahⁿ-TRAY', ['si', 'consigne'], FCVDR),
];

/* ── ACT 7 · QUAND OU SI ────────────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(502, 'Quand je partirai à la retraite, je déménagerai.', 'When I retire, I will move house.', '/kɑ̃ ʒə paʁ.ti.ʁe a la ʁə.tʁɛt ʒə de.me.naʒ.ʁe/', 'kahⁿ zhuh par-tee-REH a la ruh-TREHT zhuh day-may-nazh-REH', ['quand', 'certitude'], FCVDR,
    gap('___ je partirai à la retraite, je déménagerai. (quand ou si)', 'quand : la retraite viendra. si dirait que ce n’est pas sûr.')),
  sent(503, 'Si je pars à la retraite plus tôt, je déménagerai.', 'If I retire earlier, I will move house.', '/si ʒə paʁ a la ʁə.tʁɛt ply to ʒə de.me.naʒ.ʁe/', 'see zhuh par a la ruh-TREHT plü TOH zhuh day-may-nazh-REH', ['si', 'possible'], FCVDR),
  sent(504, 'Quand il rentrera, nous mangerons.', 'When he gets home, we will eat.', '/kɑ̃.til ʁɑ̃.tʁə.ʁa nu mɑ̃.ʒə.ʁɔ̃/', 'kahⁿ-teel rahⁿ-truh-RA noo mahⁿ-zhuh-ROHⁿ', ['quand', 'certitude']),
  sent(505, 'S’il rentre à temps, nous mangerons ensemble.', 'If he gets home in time, we will eat together.', '/sil ʁɑ̃.tʁa tɑ̃ nu mɑ̃.ʒə.ʁɔ̃.zɑ̃.sɑ̃bl/', 'seel rahⁿ-tra TAHⁿ noo mahⁿ-zhuh-rohⁿ-zahⁿ-SAHⁿBL', ['si', 'possible']),
  sent(506, 'Quand tu auras ton diplôme, tu chercheras du travail.', 'When you get your diploma, you will look for work.', '/kɑ̃ ty o.ʁa tɔ̃ di.plom ty ʃɛʁ.ʃə.ʁa dy tʁa.vaj/', 'kahⁿ tü o-ra tohⁿ dee-PLOHM tü shehr-shuh-RA dü tra-VAÏ', ['quand', 'certitude']),
  sent(507, 'Si tu as ton diplôme, tu chercheras du travail.', 'If you get your diploma, you will look for work.', '/si ty a tɔ̃ di.plom ty ʃɛʁ.ʃə.ʁa dy tʁa.vaj/', 'see tü a tohⁿ dee-PLOHM tü shehr-shuh-RA dü tra-VAÏ', ['si', 'possible']),
  sent(508, 'Quand l’été arrivera, nous ouvrirons la terrasse.', 'When summer comes, we will open the terrace.', '/kɑ̃ le.te a.ʁiv.ʁa nu.zu.vʁi.ʁɔ̃ la tɛ.ʁas/', 'kahⁿ lay-TAY a-reev-RA noo-zoo-vree-ROHⁿ la teh-RASS', ['quand', 'certitude'], FCVDR),
  sent(509, 'S’il fait assez chaud, nous ouvrirons la terrasse.', 'If it is warm enough, we will open the terrace.', '/sil fɛ.ta.se ʃo nu.zu.vʁi.ʁɔ̃ la tɛ.ʁas/', 'seel feh-ta-say SHOH noo-zoo-vree-ROHⁿ la teh-RASS', ['si', 'possible'], FCVDR),
  sent(510, 'Quand le bébé naîtra, nous changerons d’appartement.', 'When the baby is born, we will change flats.', '/kɑ̃ lə be.be nɛ.tʁa nu ʃɑ̃.ʒə.ʁɔ̃ da.paʁ.tə.mɑ̃/', 'kahⁿ luh bay-BAY neh-TRA noo shahⁿ-zhuh-ROHⁿ da-par-tuh-MAHⁿ', ['quand', 'certitude']),
  sent(511, 'Si le bébé arrive plus tôt, nous changerons nos plans.', 'If the baby comes early, we will change our plans.', '/si lə be.be a.ʁiv ply to nu ʃɑ̃.ʒə.ʁɔ̃ no plɑ̃/', 'see luh bay-BAY a-REEV plü TOH noo shahⁿ-zhuh-rohⁿ noh PLAHⁿ', ['si', 'possible']),
  sent(512, 'Quand dit que le moment viendra ; si dit que ce n’est pas sûr.', 'Quand says the moment will come; si says it is not certain.', '/kɑ̃ di kə lə mɔ.mɑ̃ vjɛ̃.dʁa si di kə sə nɛ pa syʁ/', 'kahⁿ dee kuh luh mo-mahⁿ vyehⁿ-DRA see dee kuh suh neh pa SÜR', ['rule', 'quand-si'], ['flashcard'],
    rule('Quelle est la différence de sens entre quand et si ?', 'Ex : Quand il rentrera (c’est sûr). S’il rentre à temps (ce n’est pas sûr).')),
  sent(513, 'Quand je te verrai, je t’expliquerai.', 'When I see you, I will explain.', '/kɑ̃ ʒə tə vɛ.ʁe ʒə tɛks.pli.kə.ʁe/', 'kahⁿ zhuh tuh veh-REH zhuh tehks-plee-kuh-REH', ['quand', 'certitude'], FCVDR),
  sent(514, 'Si je te vois ce soir, je t’expliquerai.', 'If I see you tonight, I will explain.', '/si ʒə tə vwa sə swaʁ ʒə tɛks.pli.kə.ʁe/', 'see zhuh tuh vwa suh SWAR zhuh tehks-plee-kuh-REH', ['si', 'possible'], FCVDR),
  sent(515, 'Quand nous serons en août, il fera très chaud.', 'When August comes, it will be very hot.', '/kɑ̃ nu sə.ʁɔ̃.zɑ̃.nut il fə.ʁa tʁɛ ʃo/', 'kahⁿ noo suh-rohⁿ-zahⁿ-NOOT eel fuh-ra treh SHOH', ['quand', 'certitude']),
  sent(516, 'Si nous partons en août, il fera très chaud.', 'If we travel in August, it will be very hot.', '/si nu paʁ.tɔ̃.zɑ̃.nut il fə.ʁa tʁɛ ʃo/', 'see noo par-tohⁿ-zahⁿ-NOOT eel fuh-ra treh SHOH', ['si', 'possible']),
  sent(517, 'Ce moment arrivera, tôt ou tard.', 'That moment will come, sooner or later.', '/sə mɔ.mɑ̃.ta.ʁiv.ʁa to u taʁ/', 'suh mo-mahⁿ-ta-reev-RA toh oo TAR', ['certitude', 'futur']),
];

/* ── ACT 8 · LE FUTUR PROCHE, À L'ORAL ──────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(518, 'Quand j’arriverai, je vais t’appeler tout de suite.', 'When I get there, I am going to call you straight away.', '/kɑ̃ ʒa.ʁiv.ʁe ʒə vɛ ta.ple tu də sɥit/', 'kahⁿ zha-reev-REH zhuh veh ta-PLAY too duh SWEET', ['proche', 'quand'], FCVDR,
    gap('Quand j’___ (arriver), je ___ (aller) t’appeler tout de suite.', 'arriverai, vais : la charnière garde le futur simple, l’autre moitié parle.')),
  sent(519, 'Dès qu’il sera là, on va commencer.', 'As soon as he is here, we are going to start.', '/dɛ kil sə.ʁa la ɔ̃ va kɔ.mɑ̃.se/', 'deh keel suh-ra LA ohⁿ va ko-mahⁿ-SAY', ['proche', 'des-que'], FCVDR),
  sent(520, 'Si tu veux, on va regarder ça ensemble.', 'If you like, we are going to look at it together.', '/si ty vø ɔ̃ va ʁə.ɡaʁ.de sa ɑ̃.sɑ̃bl/', 'see tü VEU ohⁿ va ruh-gar-DAY sa ahⁿ-SAHⁿBL', ['proche', 'si']),
  sent(521, 'Quand le film finira, on va rentrer à pied.', 'When the film ends, we are going to walk home.', '/kɑ̃ lə film fi.ni.ʁa ɔ̃ va ʁɑ̃.tʁe a pje/', 'kahⁿ luh feelm fee-nee-RA ohⁿ va rahⁿ-TRAY a PYAY', ['proche', 'quand']),
  sent(522, 'Je vais partir dans dix minutes.', 'I am going to leave in ten minutes.', '/ʒə vɛ paʁ.tiʁ dɑ̃ di mi.nyt/', 'zhuh veh par-TEER dahⁿ dee mee-NÜT', ['proche', 'delai'], FCVDR),
  sent(523, 'On va voir ce que ça donne.', 'We are going to see how it turns out.', '/ɔ̃ va vwaʁ sə kə sa dɔn/', 'ohⁿ va VWAR suh kuh sa DON', ['proche', 'expression']),
  sent(524, 'Si elle appelle, je vais lui expliquer.', 'If she calls, I am going to explain it to her.', '/si ɛ.la.pɛl ʒə vɛ lɥi ɛks.pli.ke/', 'see eh-la-PEHL zhuh veh lwee ehks-plee-KAY', ['proche', 'si']),
  sent(525, 'Tant que ça marche, on va continuer.', 'As long as it works, we are going to carry on.', '/tɑ̃ kə sa maʁʃ ɔ̃ va kɔ̃.ti.nɥe/', 'tahⁿ kuh sa MARSH ohⁿ va kohⁿ-tee-NWAY', ['proche', 'tant-que']),
  sent(526, 'Il va pleuvoir tout à l’heure.', 'It is going to rain shortly.', '/il va plø.vwaʁ tu.ta lœʁ/', 'eel va pleu-VWAR too-ta LUHR', ['proche', 'meteo'], FCVDR),
  sent(527, 'À l’oral, la deuxième moitié prend souvent aller et l’infinitif.', 'In speech the second half often takes aller plus the infinitive.', '/a lɔ.ʁal la dø.zjɛm mwa.tje pʁɑ̃ su.vɑ̃.ta.le e lɛ̃.fi.ni.tif/', 'a lo-RAL la deu-ZYEM mwa-TYAY prahⁿ soo-vahⁿ-ta-LAY ay lehⁿ-fee-nee-TEEF', ['rule', 'proche'], ['flashcard'],
    rule('Où peut-on mettre le futur proche dans ces phrases ?', 'Dans la deuxième moitié seulement. Après quand, le futur simple reste.')),
  sent(528, 'Quand tu seras prêt, tu vas me faire signe.', 'When you are ready, you are going to give me a sign.', '/kɑ̃ ty sə.ʁa pʁɛ ty va mə fɛʁ siɲ/', 'kahⁿ tü suh-ra PREH tü va muh fehr SEENY', ['proche', 'quand']),
  sent(529, 'Dès que j’aurai un moment, je vais te répondre.', 'As soon as I have a moment, I am going to answer you.', '/dɛ kə ʒo.ʁe œ̃ mɔ.mɑ̃ ʒə vɛ tə ʁe.pɔ̃dʁ/', 'deh kuh zho-REH uhⁿ mo-MAHⁿ zhuh veh tuh ray-POHⁿDR', ['proche', 'des-que']),
  sent(530, 'On va se retrouver devant le cinéma.', 'We are going to meet outside the cinema.', '/ɔ̃ va sə ʁə.tʁu.ve də.vɑ̃ lə si.ne.ma/', 'ohⁿ va suh ruh-troo-VAY duh-vahⁿ luh see-nay-MA', ['proche', 'projet']),
  sent(531, 'Après le déjeuner, je vais faire une sieste.', 'After lunch I am going to have a nap.', '/a.pʁɛ lə de.ʒø.ne ʒə vɛ fɛʁ yn sjɛst/', 'a-preh luh day-zheu-NAY zhuh veh fehr ün SYEHST', ['proche', 'projet']),
];

/* ── ACT 9 · DANS, EN, D'ICI ────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(532, 'Je serai de retour dans deux heures.', 'I will be back in two hours.', '/ʒə sə.ʁe də ʁə.tuʁ dɑ̃ dø.zœʁ/', 'zhuh suh-REH duh ruh-TOOR dahⁿ deu-ZUHR', ['delai', 'dans'], FCVDR,
    gap('Je serai de retour ___ deux heures. (dans ou en)', 'dans : à partir de maintenant, deux heures plus tard.')),
  sent(533, 'Le train partira dans dix minutes.', 'The train will leave in ten minutes.', '/lə tʁɛ̃ paʁ.ti.ʁa dɑ̃ di mi.nyt/', 'luh trehⁿ par-tee-RA dahⁿ dee mee-NÜT', ['delai', 'dans'], FCVDR),
  sent(534, 'Nous aurons la réponse dans une semaine.', 'We will have the answer in a week.', '/nu.zo.ʁɔ̃ la ʁe.pɔ̃s dɑ̃.zyn sə.mɛn/', 'noo-zo-ROHⁿ la ray-POHⁿSS dahⁿ-zün suh-MENN', ['delai', 'dans']),
  sent(535, 'Elle a préparé le dossier en trois jours.', 'She put the file together in three days.', '/ɛ.la pʁe.pa.ʁe lə do.sje ɑ̃ tʁwa ʒuʁ/', 'eh-la pray-pa-RAY luh do-SYAY ahⁿ trwa ZHOOR', ['delai', 'en']),
  sent(536, 'Je finirai ce rapport en deux heures.', 'I will finish this report in two hours.', '/ʒə fi.ni.ʁe sə ʁa.pɔʁ ɑ̃ dø.zœʁ/', 'zhuh fee-nee-REH suh ra-POR ahⁿ deu-ZUHR', ['delai', 'en'], FCVDR),
  sent(537, 'D’ici vendredi, tout sera prêt.', 'By Friday everything will be ready.', '/di.si vɑ̃.dʁə.di tu sə.ʁa pʁɛ/', 'dee-SEE vahⁿ-druh-DEE too suh-ra PREH', ['delai', 'dici'], FCVDR),
  sent(538, 'D’ici là, ne dis rien à personne.', 'Until then, do not say anything to anyone.', '/di.si la nə di ʁjɛ̃.a pɛʁ.sɔn/', 'dee-see LA nuh dee ryehⁿ-a pehr-SON', ['delai', 'dici']),
  sent(539, 'Une fois que tu signeras, ce sera fini.', 'Once you sign, it will be over.', '/yn fwa kə ty si.ɲə.ʁa sə sə.ʁa fi.ni/', 'ün FWA kuh tü see-nyuh-RA suh suh-ra fee-NEE', ['une-fois-que', 'futur']),
  sent(540, 'Dans un mois, nous serons installés.', 'In a month we will be settled in.', '/dɑ̃.zœ̃ mwa nu sə.ʁɔ̃.zɛ̃s.ta.le/', 'dahⁿ-zuhⁿ MWA noo suh-rohⁿ-zehⁿs-ta-LAY', ['delai', 'dans']),
  sent(541, 'dans, c’est à partir de maintenant ; en, c’est le temps qu’il faut.', 'Dans is counted from now; en is the time it takes.', '/dɑ̃ sɛ.ta paʁ.tiʁ də mɛ̃t.nɑ̃ ɑ̃ sɛ lə tɑ̃ kil fo/', 'DAHⁿ seh-ta par-teer duh mehⁿt-NAHⁿ AHⁿ seh luh tahⁿ keel FOH', ['rule', 'delai'], ['flashcard'],
    rule('Quelle différence entre dans deux heures et en deux heures ?', 'Ex : Je pars dans deux heures. Je le fais en deux heures.')),
  sent(542, 'Le colis arrivera d’ici mardi.', 'The parcel will arrive by Tuesday.', '/lə kɔ.li a.ʁiv.ʁa di.si maʁ.di/', 'luh ko-LEE a-reev-RA dee-see mar-DEE', ['delai', 'dici']),
  sent(543, 'Le garagiste répare ça en une demi-heure.', 'The mechanic fixes that in half an hour.', '/lə ɡa.ʁa.ʒist ʁe.paʁ sa ɑ̃.nyn də.mi œʁ/', 'luh ga-ra-ZHEEST ray-PAR sa ahⁿ-nün duh-mee UHR', ['delai', 'en']),
  sent(544, 'Dans quelques jours, tu recevras ta carte.', 'In a few days you will get your card.', '/dɑ̃ kɛl.kə ʒuʁ ty ʁə.sə.vʁa ta kaʁt/', 'dahⁿ kehl-kuh ZHOOR tü ruh-suh-VRA ta KART', ['delai', 'dans'], FCVDR),
  sent(545, 'D’ici la fin du mois, je te donnerai une réponse.', 'By the end of the month I will give you an answer.', '/di.si la fɛ̃ dy mwa ʒə tə dɔn.ʁe yn ʁe.pɔ̃s/', 'dee-see la fehⁿ dü MWA zhuh tuh don-REH ün ray-POHⁿSS', ['delai', 'dici']),
  sent(546, 'Nous partirons dans trois quarts d’heure.', 'We will leave in three quarters of an hour.', '/nu paʁ.ti.ʁɔ̃ dɑ̃ tʁwa kaʁ dœʁ/', 'noo par-tee-ROHⁿ dahⁿ trwa kar DUHR', ['delai', 'dans']),
  sent(547, 'Il a tout réglé en une seule journée.', 'He sorted it all out in a single day.', '/i.la tu ʁe.ɡle ɑ̃.nyn sœl ʒuʁ.ne/', 'ee-la too ray-GLAY ahⁿ-nün suhl zhoor-NAY', ['delai', 'en']),
];

/* ── ACT 10 · DEUX CHOSES À VENIR, DANS L'ORDRE ─────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(548, 'D’abord je finirai le rapport, ensuite je partirai.', 'First I will finish the report, then I will leave.', '/da.bɔʁ ʒə fi.ni.ʁe lə ʁa.pɔʁ ɑ̃.sɥit ʒə paʁ.ti.ʁe/', 'da-BOR zhuh fee-nee-REH luh ra-POR ahⁿ-SWEET zhuh par-tee-REH', ['ordre', 'futur'], FCVDR,
    gap('D’abord je ___ (finir) le rapport, ensuite je ___ (partir).', 'finirai, partirai : deux moments à venir, rangés dans l’ordre.')),
  sent(549, 'Quand j’aurai le billet, je réserverai l’hôtel.', 'When I have the ticket, I will book the hotel.', '/kɑ̃ ʒo.ʁe lə bi.jɛ ʒə ʁe.zɛʁ.və.ʁe lo.tɛl/', 'kahⁿ zho-REH luh bee-YEH zhuh ray-zehr-vuh-REH loh-TEHL', ['ordre', 'quand'], FCVDR),
  sent(550, 'Je passerai à la banque, puis j’irai au marché.', 'I will stop at the bank, then I will go to the market.', '/ʒə pas.ʁe a la bɑ̃k pɥi ʒi.ʁe o maʁ.ʃe/', 'zhuh pass-REH a la BAHⁿK pwee zhee-REH oh mar-SHAY', ['ordre', 'futur']),
  sent(551, 'Dès que la réunion finira, nous irons déjeuner.', 'As soon as the meeting ends, we will go for lunch.', '/dɛ kə la ʁe.y.njɔ̃ fi.ni.ʁa nu.zi.ʁɔ̃ de.ʒø.ne/', 'deh kuh la ray-ü-NYOHⁿ fee-nee-RA noo-zee-ROHⁿ day-zheu-NAY', ['ordre', 'des-que']),
  sent(552, 'Ensuite, nous prendrons le train de dix-huit heures.', 'Then we will take the six o’clock train.', '/ɑ̃.sɥit nu pʁɑ̃.dʁɔ̃ lə tʁɛ̃ də di.zɥi.tœʁ/', 'ahⁿ-SWEET noo prahⁿ-DROHⁿ luh trehⁿ duh dee-zwee-TUHR', ['ordre', 'futur']),
  sent(553, 'Une fois que tout sera réglé, je te téléphonerai.', 'Once everything is sorted, I will phone you.', '/yn fwa kə tu sə.ʁa ʁe.ɡle ʒə tə te.le.fɔn.ʁe/', 'ün FWA kuh too suh-ra ray-GLAY zhuh tuh tay-lay-fon-REH', ['ordre', 'une-fois-que'], FCVDR),
  sent(554, 'Après, on se retrouvera devant la gare.', 'Afterwards we will meet outside the station.', '/a.pʁɛ ɔ̃ sə ʁə.tʁuv.ʁa də.vɑ̃ la ɡaʁ/', 'a-PREH ohⁿ suh ruh-troov-RA duh-vahⁿ la GAR', ['ordre', 'futur']),
  sent(555, 'Enfin, nous rentrerons par le dernier bus.', 'Finally we will come home on the last bus.', '/ɑ̃.fɛ̃ nu ʁɑ̃.tʁə.ʁɔ̃ paʁ lə dɛʁ.nje bys/', 'ahⁿ-FEHⁿ noo rahⁿ-truh-ROHⁿ par luh dehr-nyay BÜSS', ['ordre', 'futur']),
  sent(556, 'Avant de partir, je vérifierai les billets.', 'Before leaving, I will check the tickets.', '/a.vɑ̃ də paʁ.tiʁ ʒə ve.ʁi.fje.ʁe le bi.jɛ/', 'a-vahⁿ duh par-TEER zhuh vay-ree-fyay-REH lay bee-YEH', ['ordre', 'futur']),
  sent(557, 'Je t’écrirai dès que je saurai quelque chose.', 'I will write to you as soon as I know something.', '/ʒə te.kʁi.ʁe dɛ kə ʒə so.ʁe kɛl.kə ʃoz/', 'zhuh tay-kree-REH deh kuh zhuh so-REH kehl-kuh SHOHZ', ['ordre', 'des-que'], FCVDR),
  sent(558, 'Range les deux moments dans l’ordre, puis choisis la charnière.', 'Put the two moments in order, then pick the hinge word.', '/ʁɑ̃ʒ le dø mɔ.mɑ̃ dɑ̃ lɔʁdʁ pɥi ʃwa.zi la ʃaʁ.njɛʁ/', 'RAHⁿZH lay deu mo-MAHⁿ dahⁿ LORDR pwee shwa-ZEE la shar-NYEHR', ['rule', 'ordre'], ['flashcard'],
    rule('Comment construire une phrase à deux moments ?', 'Ex : d’abord le billet, ensuite l’hôtel. Quand j’aurai le billet, je réserverai l’hôtel.')),
  sent(559, 'Quand tout sera prêt, nous lancerons le projet.', 'When everything is ready, we will launch the project.', '/kɑ̃ tu sə.ʁa pʁɛ nu lɑ̃s.ʁɔ̃ lə pʁɔ.ʒɛ/', 'kahⁿ too suh-ra PREH noo lahⁿss-ROHⁿ luh pro-ZHEH', ['ordre', 'quand']),
  sent(560, 'Le matin je visiterai le musée, l’après-midi je me reposerai.', 'In the morning I will visit the museum, in the afternoon I will rest.', '/lə ma.tɛ̃ ʒə vi.zit.ʁe lə my.ze la.pʁɛ mi.di ʒə mə ʁə.poz.ʁe/', 'luh ma-TEHⁿ zhuh vee-zeet-REH luh mü-ZAY la-preh-mee-DEE zhuh muh ruh-pohz-REH', ['ordre', 'futur']),
  sent(561, 'Tant que nous n’aurons pas de réponse, nous attendrons.', 'As long as we have no answer, we will wait.', '/tɑ̃ kə nu no.ʁɔ̃ pa də ʁe.pɔ̃s nu.za.tɑ̃.dʁɔ̃/', 'tahⁿ kuh noo no-rohⁿ pa duh ray-POHⁿSS noo-za-tahⁿ-DROHⁿ', ['ordre', 'tant-que', 'negation']),
];

/* ── ACT 11 · ÉCRIRE TON PLAN ───────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(562, 'Voici ce que je ferai la semaine prochaine.', 'Here is what I will do next week.', '/vwa.si sə kə ʒə fə.ʁe la sə.mɛn pʁɔ.ʃɛn/', 'vwa-SEE suh kuh zhuh fuh-REH la suh-mehn pro-SHENN', ['plan', 'ouverture'], FCVDR),
  sent(563, 'Je commencerai par le plus urgent.', 'I will start with the most urgent thing.', '/ʒə kɔ.mɑ̃s.ʁe paʁ lə ply.zyʁ.ʒɑ̃/', 'zhuh ko-mahⁿs-REH par luh plü-zür-ZHAHⁿ', ['plan', 'ordre']),
  sent(564, 'Si tout se passe bien, je finirai avant vendredi.', 'If all goes well, I will finish before Friday.', '/si tu sə pas bjɛ̃ ʒə fi.ni.ʁe a.vɑ̃ vɑ̃.dʁə.di/', 'see too suh pass BYEHⁿ zhuh fee-nee-REH a-vahⁿ vahⁿ-druh-DEE', ['plan', 'si'], FCVDR),
  sent(565, 'Quand j’aurai le résultat, je te le dirai.', 'When I get the result, I will tell you.', '/kɑ̃ ʒo.ʁe lə ʁe.zyl.ta ʒə tə lə di.ʁe/', 'kahⁿ zho-REH luh ray-zül-TA zhuh tuh luh dee-REH', ['plan', 'quand'], FCVDR),
  sent(566, 'Ce sera une semaine chargée.', 'It will be a busy week.', '/sə sə.ʁa yn sə.mɛn ʃaʁ.ʒe/', 'suh suh-RA ün suh-mehn shar-ZHAY', ['plan', 'decor']),
  sent(567, 'Je te raconterai tout à mon retour.', 'I will tell you all about it when I get back.', '/ʒə tə ʁa.kɔ̃t.ʁe tu.ta mɔ̃ ʁə.tuʁ/', 'zhuh tuh ra-kohⁿt-REH too-ta mohⁿ ruh-TOOR', ['plan', 'fin']),
  sent(568, 'Si je change d’avis, je te préviendrai.', 'If I change my mind, I will let you know.', '/si ʒə ʃɑ̃ʒ da.vi ʒə tə pʁe.vjɛ̃.dʁe/', 'see zhuh shahⁿzh da-VEE zhuh tuh pray-vyehⁿ-DREH', ['plan', 'si']),
  sent(569, 'Dès que le projet démarrera, tout ira plus vite.', 'As soon as the project starts, everything will go faster.', '/dɛ kə lə pʁɔ.ʒɛ de.ma.ʁə.ʁa tu.ti.ʁa ply vit/', 'deh kuh luh pro-ZHEH day-ma-ruh-RA too-tee-RA plü VEET', ['plan', 'des-que']),
  sent(570, 'Je ne sais pas encore ce qui se passera.', 'I do not know yet what will happen.', '/ʒə nə sɛ pa.zɑ̃.kɔʁ sə ki sə pas.ʁa/', 'zhuh nuh seh pa-zahⁿ-KOR suh kee suh pass-RA', ['plan', 'incertitude']),
  phrase(571, 'nous verrons bien', 'we shall see', '/nu vɛ.ʁɔ̃ bjɛ̃/', 'noo veh-rohⁿ BYEHⁿ', ['plan', 'expression']),
  sent(572, 'Ce projet me prendra trois mois.', 'This project will take me three months.', '/sə pʁɔ.ʒɛ mə pʁɑ̃.dʁa tʁwa mwa/', 'suh pro-ZHEH muh prahⁿ-DRA trwa MWA', ['plan', 'delai']),
  sent(573, 'En attendant, je continue comme avant.', 'In the meantime I am carrying on as before.', '/ɑ̃.na.tɑ̃.dɑ̃ ʒə kɔ̃.ti.ny kɔ.ma.vɑ̃/', 'ahⁿ-na-tahⁿ-DAHⁿ zhuh kohⁿ-tee-NÜ ko-ma-VAHⁿ', ['plan', 'expression']),
  sent(574, 'Après si, le présent ; après quand, le futur.', 'After si the present; after quand the future.', '/a.pʁɛ si lə pʁe.zɑ̃ a.pʁɛ kɑ̃ lə fy.tyʁ/', 'a-preh SEE luh pray-ZAHⁿ a-preh KAHⁿ luh fü-TÜR', ['rule', 'plan'], ['flashcard'],
    rule('Deux charnières, deux temps : lesquels ?', 'Ex : Si tu viens, je préparerai. Quand tu viendras, je préparerai.')),
  sent(575, 'Je t’enverrai le programme dès que je l’aurai.', 'I will send you the schedule as soon as I have it.', '/ʒə tɑ̃.vɛ.ʁe lə pʁɔ.ɡʁam dɛ kə ʒə lo.ʁe/', 'zhuh tahⁿ-veh-REH luh pro-GRAM deh kuh zhuh lo-REH', ['plan', 'des-que'], FCVDR),
  sent(576, 'Si tu es libre, passe me voir.', 'If you are free, come and see me.', '/si ty ɛ libʁ pas mə vwaʁ/', 'see tü eh LEEBR pass muh VWAR', ['plan', 'consigne']),
  sent(577, 'Tout sera plus clair dans quelques jours.', 'Everything will be clearer in a few days.', '/tu sə.ʁa ply klɛʁ dɑ̃ kɛl.kə ʒuʁ/', 'too suh-ra plü KLEHR dahⁿ kehl-kuh ZHOOR', ['plan', 'fin'], FCVDR),
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
 *  §I. THE LONG READINGS AND THEIR ANSWER KEYS
 *
 *  Counted by density.logic `wordCount` in the scratch check. `reading` is
 *  exempt from the 45-word cap (`PASSAGE_SECTIONS`), and these two live here
 *  so the reading and the quiz cannot drift apart.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 4. Every charnière in it takes a PRESENT or a PAST, and not one takes
 *  a future: the act exists to stop « quand = futur » becoming a reflex. */
export const READING_ROUTINE =
  "Karim travaille dans une boulangerie à Liège. Quand il arrive à cinq heures, la rue est encore noire et le four est déjà chaud. Dès que la première fournée sort, il ouvre la porte et les clients entrent. Pendant qu'il sert au comptoir, sa collègue prépare les sandwichs. Tant que le pain se vend bien, la journée passe vite. Une fois que le dernier client est parti, Karim nettoie tout et compte la caisse. Quand il était étudiant, il détestait se lever tôt ; dès que le réveil sonnait, il éteignait et se rendormait. Aujourd'hui, il aime ce moment où la ville dort encore. La semaine prochaine, il changera d'horaire. Quand il commencera à midi, il ne verra plus le lever du soleil, et ça lui manquera.";

/** The verbs of READING_ROUTINE that sit in a PRESENT (habit or general
 *  truth), used by the annotation drill and the quiz. */
export const ROUTINE_PRESENT = [
  'arrive', 'est', 'est', 'sort', 'ouvre', 'entrent', 'sert', 'prépare',
  'se vend', 'passe', 'est parti', 'nettoie', 'compte', 'aime', 'dort',
] as const;

/** The verbs of READING_ROUTINE that sit in a PAST (a habit that is over). */
export const ROUTINE_PASSE = ['était', 'détestait', 'sonnait', 'éteignait', 'se rendormait'] as const;

/** The verbs of READING_ROUTINE that sit in the FUTURE, all in the last two
 *  sentences, where the moment finally moves ahead. */
export const ROUTINE_FUTUR = ['changera', 'commencera', 'verra', 'manquera'] as const;

/** Act 11. The model plan the learner imitates in the task: 132 words, four
 *  charnières, one real condition, one closing line. */
export const READING_TEXT =
  "Voici ce que je ferai le mois prochain. Je pars à Sherbrooke pour un stage de six semaines. D'abord, je réglerai le logement : dès que l'agence me donnera une réponse, je signerai et j'enverrai le dépôt. Quand j'aurai l'adresse, je commanderai une carte de transport. Si le stage commence le lundi, je prendrai le train du dimanche soir ; si tout va bien, je serai installé avant le premier jour. Une fois que je connaîtrai mes horaires, je m'inscrirai à un cours du soir. Tant que je serai là-bas, j'écrirai chaque semaine à ma famille. D'ici la fin du stage, je saurai si je veux rester. Je vous raconterai tout à mon retour.";

/** The four charnière clauses of READING_TEXT, in order. */
export const MODEL_CHARNIERES = [
  "dès que l'agence me donnera une réponse",
  "quand j'aurai l'adresse",
  'une fois que je connaîtrai mes horaires',
  'tant que je serai là-bas',
] as const;

/** The two si clauses of READING_TEXT, in order. Both hold a PRESENT. */
export const MODEL_SI = ['si le stage commence le lundi', 'si tout va bien'] as const;
