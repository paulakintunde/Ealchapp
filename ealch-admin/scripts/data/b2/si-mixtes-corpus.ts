// b2.04.l1 « Les si mixtes »: the authored corpus, the imports and the
// citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md under the B2 rules of
// B2-BUILD-LOG.md (« How B2 teaches complex structures »: form, meaning in
// contrast, choice under load, then the structure inside a text).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// IMPORT_IDS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE MIXED SI SENTENCE: each half set on its own moment.
//
//     si + plus-que-parfait  > conditionnel présent   a past cause, a present
//                                                     (or coming) result
//                                                     « si j'avais étudié, je
//                                                     parlerais mieux »
//     si + imparfait         > conditionnel passé     a lasting state, a past
//                                                     result « si j'étais plus
//                                                     prudent, je n'aurais pas
//                                                     perdu mes clés »
//     the timeline           two points, one per half, chosen separately
//     the markers            aujourd'hui, maintenant, encore, cette année
//                            against hier, ce matin, l'an dernier, à l'époque;
//                            the lasting trait (de nature, toujours)
//     the uses               regret, advice that comes too late, reproach,
//                            argument about a past decision
//     the neighbours         au cas où + conditionnel, à condition que +
//                            subjonctif, AT RECOGNITION LEVEL (act 9)
//     the traps              both halves defaulting to the classic past pair,
//                            « si j'aurais », a result clock that contradicts
//                            its marker
//
//   NOT OWNED, CITED BY TRAIL POSITION (never re-taught):
//     la leçon 10 du B1  the three si pairs (reframe quoted, rows reused)
//     la leçon 8 du B1   the conditionnel présent (reframe quoted)
//     la leçon 7 du B1   never a future after si (reframe quoted)
//     la leçon 15 du B1  à condition que + subjonctif (rows reused)
//     la leçon 32 du B1  même si (row reused in the recycling round)
//     la leçon 1 du B2   the plus-que-parfait, built
//     la leçon 2 du B2   the conditionnel passé, built
//     la leçon 3 du B2   the past-unreal pair (si + plus-que-parfait >
//                        conditionnel passé), built. Lessons 1 to 3 are
//                        written for the same publish; nothing is imported
//                        from their files, they are cited by position only.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB probed 2026-09-27
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `projets-et-futur` (fondations, a2-b2). It already exists, so
//     nothing is created at import. Sub-theme to set in Postgres at import:
//     « hypothèses sur le passé et le présent ». Probed live 2026-09-27
//     (read-only): a2 132 rows (max 132), b1 1030 rows (max 1378), b2 48
//     rows (max 048), and NOTHING at or above 1400 at any level but b1's.
//     The seed carries the b1 rows only.
//
//  2. ID BLOCK: `.1600`-`.1799`, claimed by the orchestrator's brief
//     (`.1400`-`.1599` belongs to b2.03, written in parallel: untouched).
//     Authored: `.1600`-`.1764`, 165 rows in eleven act blocks, no gaps.
//
//  3. HEADWORDS. The theme holds DB-only b2 phrase rows (à condition que,
//     le cas échéant, il se pourrait que, d'ici là…) and b1 phrase rows (je
//     parlerais, je ferais…). This corpus authors NO vocab-type non-sentence
//     row at all: every row is a sentence or a grammar card, so the
//     flashcard hub can deal no clash with the seed, with the DB or with
//     lessons 1 to 3 of B2 written in parallel.
//
//  4. REUSED ROWS. B1 is live (v76), so the seed carries lesson 10's pairs
//     (fr.b1.projets-et-futur.12xx and .13xx), lesson 15's « à condition
//     que » rows, lesson 32's « même si » rows and the « au cas où » row of
//     lesson 9. They are reused BY ID through `src()`. No published row is a
//     mixed si sentence (seed and DB both probed): every mixed pair here is
//     authored. The DB holds a few DB-only « au cas où » sentences in other
//     themes; none shares its French with a row here, so there is no twin.
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER rather than for the ear:
//     `ZHEUNN` (jeunes), `tay-lay-FONN` (téléphone), `VYENN` (viennes),
//     where a closing N after a vowel spelling is read by `hasPlainNasal`
//     as a nasal written the old way. Doubling is a2.34's precedent. No
//     U+203F tie anywhere: a liaison consonant moves onto the next syllable.
//
//  6. APOSTROPHES. Corpus rows and texts use the straight ' as the seed
//     does. Every `scenario` in the lesson is written with ’ only and never
//     embeds a corpus row, so no scenario mixes the two (scenario.logic).
//
//  7. FACTS. No real institution, figure or date is quoted. The towns
//     (Montréal, Lausanne, Oran, Dakar, Liège, Sherbrooke) are settings,
//     and the city in the act 8 column is unnamed.
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
  id: 'b2.04',
  seq: 4,
  title: 'Mixed Si Clauses',
  sub: 'Les si mixtes',
  canDo: 'Can link a past cause to a present result and a lasting present state to a past result in one si sentence, choose the moment of each half from the timeline and its time markers, use the mixed pattern to regret, advise and argue, recognise au cas où with the conditional and à condition que with the subjunctive, and avoid both the all-past default and « si j’aurais »',
  prereqUnitIds: ['b1.08', 'b1.10', 'b2.01', 'b2.02', 'b2.03'],
} as const;

export const LESSON_ID = 'b2.04.l1';
export const THEME = 'projets-et-futur';
export const LEVEL = 'b2' as const;

/** ONE block, claimed in the brief. Nothing is authored outside it. */
export const ID_RANGES = [[1600, 1799]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan:
 *  a unit id's number IS its trail position. Only positions that exist in
 *  this publish are cited (B1 1-39, B2 1-8 and 22-26).
 * ══════════════════════════════════════════════════════════════════════════ */

export const FUTUR_USE_UNIT = 'b1.07';
export const COND_UNIT = 'b1.08';
export const SI_UNIT = 'b1.10';
export const SUBJ_DECL_UNIT = 'b1.15';
export const DISCOURS_UNIT = 'b1.19';
export const CONCESSION_UNIT = 'b1.32';
export const PQP_UNIT = 'b2.01';
export const COND_PASSE_UNIT = 'b2.02';
export const SI_PASSE_UNIT = 'b2.03';
export const SUBJ_PASSE_UNIT = 'b2.05';
export const ARGUMENT_UNIT = 'b2.23';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const FUTUR_USE_REF = refFr(FUTUR_USE_UNIT);
export const COND_REF = refFr(COND_UNIT);
export const SI_REF = refFr(SI_UNIT);
export const SUBJ_DECL_REF = refFr(SUBJ_DECL_UNIT);
export const DISCOURS_REF = refFr(DISCOURS_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const PQP_REF = refFr(PQP_UNIT);
export const COND_PASSE_REF = refFr(COND_PASSE_UNIT);
export const SI_PASSE_REF = refFr(SI_PASSE_UNIT);
export const SUBJ_PASSE_REF = refFr(SUBJ_PASSE_UNIT);
export const ARGUMENT_REF = refFr(ARGUMENT_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B107_REFRAME, REFRAME_EN as B107_REFRAME_EN } from '../b1/futur-usage-corpus.ts';
export { REFRAME as B108_REFRAME, REFRAME_EN as B108_REFRAME_EN } from '../b1/conditionnel-present-corpus.ts';
export { REFRAME as B110_REFRAME, REFRAME_EN as B110_REFRAME_EN } from '../b1/si-clauses-corpus.ts';
export { REFRAME as B115_REFRAME, REFRAME_EN as B115_REFRAME_EN } from '../b1/subjonctif-declencheurs-corpus.ts';
export { REFRAME as B132_REFRAME, REFRAME_EN as B132_REFRAME_EN } from '../b1/concession-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LES DEUX HORLOGES. Lesson 10 in B1 said « tu choisis la paire, pas les
 *  temps », and for the three classic pairs that is still true: both halves
 *  stand on the same moment. A mixed sentence splits the pair. The learner
 *  reads two clocks, one per half: when does the condition play out, and
 *  when does the result show? Each answer picks that half's tense, and the
 *  si half only ever has two: the imparfait for now (or always), the
 *  plus-que-parfait for before. The result half has two: the conditionnel
 *  présent for now or later, the conditionnel passé for before.
 *
 *  It is NOT « mix the tenses freely »: act 10 kills « si j'aurais », and
 *  the si half never takes a conditional whatever its clock says.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Deux moitiés, deux horloges : chaque moitié prend le temps de son propre moment.';
export const REFRAME_EN = 'Two halves, two clocks: each half takes the tense of its own moment.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Si + plus-que-parfait, alors conditionnel passé.',
    why: 'The formula of lesson 3 in B2, and exactly the default this lesson exists to break: « Si j\'avais continué mes études, j\'aurais eu un meilleur poste » answers a question about then when the speaker meant now (act 1 scene, act 10 trap).',
  },
  {
    text: 'Le passé appelle le passé.',
    why: 'False in act 3 (a past cause, a present result) and in act 4, where an imparfait that means « now and always » sits in front of a conditionnel passé.',
  },
  {
    text: 'Dans une phrase mixte, tu mélanges les temps comme tu veux.',
    why: 'False where act 10 has to hold: « si j\'aurais su » mixes too. The si half only ever takes the imparfait or the plus-que-parfait; the choice is by moment, not by taste.',
  },
  {
    text: 'Regarde le mot de temps : il décide pour toi.',
    why: 'A good test (act 6) and kept as one, but half the sentences carry no marker at all, and « si j\'étais plus prudent » is set by a lasting trait, not by a word. The clock is the meaning; the marker is only its witness.',
  },
  {
    text: 'Tu choisis la paire, pas les temps.',
    why: 'Lesson 10 in B1\'s own reframe, quoted in act 2 as the base. It holds for the classic pairs, but a mixed sentence is precisely two halves taken from two different pairs.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-27, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

export const PF = (n: number) => `fr.b1.projets-et-futur.${n}`;
export const OA = (n: number) => `fr.b1.opinions-et-avis.${n}`;

export const IMPORTED = {
  act1: [] as string[],
  act2: [
    PF(1201),                                  // Si je partais à sept heures, j'arriverais avant midi.  (lesson 10)
    PF(1352),                                  // Si j’avais su, j’aurais pris un autre train.  (lesson 10, no voiceflash)
    PF(1362),                                  // Si j’avais le choix, je recommencerais tout.  (lesson 10)
    PF(1363),                                  // Si j’avais eu le choix, j’aurais tout recommencé.  (lesson 10, no voiceflash)
    PF(1359),                                  // Trois : présent et futur, imparfait et conditionnel, plus-que-parfait et conditionnel passé.  (rule)
  ],
  act3: [] as string[],
  act4: [] as string[],
  act5: [] as string[],
  act6: [] as string[],
  act7: [
    'fr.b1.conseils-et-suggestions.1154',      // Si j'étais toi, je ne dirais rien pour l'instant.  (lesson 9)
  ],
  act8: [] as string[],
  act9: [
    'fr.b1.conseils-et-suggestions.1122',      // Je vous laisse mon numéro, au cas où.  (lesson 9)
    OA(1336),                                  // à condition que  (lesson 15)
    OA(1341),                                  // Je veux bien t’aider, à condition que tu me préviennes la veille.  (lesson 15)
    OA(1521),                                  // J’accepte, à condition que tu viennes avec moi.  (lesson 16)
  ],
  act10: [
    PF(1236),                                  // Non. Après si, jamais de futur et jamais de conditionnel.  (lesson 10, rule, no voiceflash)
    'fr.b1.connecteurs-logiques.1422',         // Même si j'étais riche, je resterais à Sherbrooke.  (lesson 32)
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. None here:
 *  every reused row carries one. */
export const NOT_DECK_ABLE: string[] = [];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [PF(1352), PF(1363), PF(1359), PF(1236)];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the last stressed syllable of
 *  each group in caps, ü for French u, nasals closed with the superscript ⁿ,
 *  and NO U+203F tie. The two halves are split by « | », so the ear hears
 *  each clock on its own.
 *
 *  A `rule` row is a grammar card: `prompt` is the question on the front,
 *  `fr` the rule on the back. It takes no `voiceflash`.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FCR = ['flashcard', 'review'] as Item['drills'];

const sent = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['si-mixte', ...tags], drills, version: 1, grammarPoints: ['si-mixte'],
});

/** A rule card: `prompt` is the question on the front, `fr` the rule. */
const rule = (n: number, prompt: string, fr: string, en: string, ipa: string, respell: string, tags: string[]): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['si-mixte', 'regle', ...tags], drills: FCR, version: 1,
  cardType: 'grammar', prompt, grammarPoints: ['si-mixte'],
});

/* ── ACT 1 · HIER ET AUJOURD'HUI ────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1600, "Si j'avais continué mes études, j'aurais un meilleur poste aujourd'hui.", 'If I had continued my studies, I would have a better job today.', '/si ʒa.vɛ kɔ̃.ti.nɥe me.ze.tyd ʒo.ʁɛ œ̃ mɛ.jœʁ pɔst o.ʒuʁ.dɥi/', 'see zha-veh kohⁿ-tee-nway may-zay-TÜD | zhoh-reh uhⁿ meh-yeur post oh-zhoor-DWEE', ['passe-present'], FCVDR),
  sent(1601, "Si j'avais continué mes études, j'aurais eu un meilleur poste à l'époque.", 'If I had continued my studies, I would have had a better job back then.', '/si ʒa.vɛ kɔ̃.ti.nɥe me.ze.tyd ʒo.ʁɛ.zy œ̃ mɛ.jœʁ pɔst a le.pɔk/', 'see zha-veh kohⁿ-tee-nway may-zay-TÜD | zhoh-reh-zü uhⁿ meh-yeur post a lay-POK', ['classique', 'passe']),
  sent(1602, "Si je parlais mieux anglais, j'aurais obtenu ce poste.", 'If I spoke better English, I would have got that job.', '/si ʒə paʁ.lɛ mjø ɑ̃.ɡlɛ ʒo.ʁɛ.zɔp.tə.ny sə pɔst/', 'see zhuh par-leh myuh ahⁿ-GLEH | zhoh-reh-zop-tuh-nü suh POST', ['present-passe'], FCVDR),
  sent(1603, "Si je parlais mieux anglais, j'obtiendrais ce poste.", 'If I spoke better English, I would get this job.', '/si ʒə paʁ.lɛ mjø ɑ̃.ɡlɛ ʒɔp.tjɛ̃.dʁɛ sə pɔst/', 'see zhuh par-leh myuh ahⁿ-GLEH | zhop-tyehⁿ-dreh suh POST', ['classique', 'present']),
  sent(1604, 'Si vous aviez gardé votre ancien poste, vous seriez directeur maintenant.', 'If you had kept your old job, you would be a director now.', '/si vu.za.vje ɡaʁ.de vɔ.tʁɑ̃.sjɛ̃ pɔst vu sə.ʁje di.ʁɛk.tœʁ mɛ̃t.nɑ̃/', 'see voo-za-vyay gar-day vo-trahⁿ-syehⁿ POST | voo suh-ryay dee-rek-teur mehⁿt-NAHⁿ', ['passe-present']),
  sent(1605, "Si j'étais plus organisé, je n'aurais pas oublié le rendez-vous.", 'If I were more organised, I would not have forgotten the appointment.', '/si ʒe.tɛ ply.zɔʁ.ɡa.ni.ze ʒə no.ʁɛ pa.zu.bli.je lə ʁɑ̃.de.vu/', 'see zhay-teh plü-zor-ga-nee-ZAY | zhuh noh-reh pa-zoo-blee-yay luh rahⁿ-day-VOO', ['present-passe']),
  sent(1606, "Si elle n'avait pas déménagé à Dakar, elle ne parlerait pas wolof.", 'If she had not moved to Dakar, she would not speak Wolof.', '/si ɛl na.vɛ pa de.me.na.ʒe a da.kaʁ ɛl nə paʁ.lə.ʁɛ pa wɔ.lɔf/', 'see el na-veh pa day-may-na-zhay a da-KAR | el nuh par-luh-reh pa wo-LOF', ['passe-present']),
  sent(1607, "Si je n'étais pas allergique, j'aurais goûté le gâteau.", 'If I were not allergic, I would have tasted the cake.', '/si ʒə ne.tɛ pa.za.lɛʁ.ʒik ʒo.ʁɛ ɡu.te lə ɡa.to/', 'see zhuh nay-teh pa-za-lehr-ZHEEK | zhoh-reh goo-tay luh ga-TOH', ['present-passe']),
  sent(1608, 'Si tu avais pris le train de sept heures, tu serais déjà là.', 'If you had taken the seven o\'clock train, you would already be there.', '/si ty a.vɛ pʁi lə tʁɛ̃ də sɛ.tœʁ ty sə.ʁɛ de.ʒa la/', 'see tü a-veh pree luh trehⁿ duh seh-TEUR | tü suh-reh day-zha LA', ['passe-present'], FCVDR),
  sent(1609, "Si je n'avais pas quitté Lyon, je ne te connaîtrais pas.", 'If I had not left Lyon, I would not know you.', '/si ʒə na.vɛ pa ki.te ljɔ̃ ʒə nə tə kɔ.nɛ.tʁɛ pa/', 'see zhuh na-veh pa kee-tay LYOHⁿ | zhuh nuh tuh ko-neh-treh PA', ['passe-present']),
  sent(1610, "Si Hugo n'était pas si timide, il aurait parlé au jury.", 'If Hugo were not so shy, he would have spoken to the panel.', '/si y.ɡo ne.tɛ pa si ti.mid i.lo.ʁɛ paʁ.le o ʒy.ʁi/', 'see ü-goh nay-teh pa see tee-MEED | ee-loh-reh par-lay oh zhü-REE', ['present-passe']),
  sent(1611, "Si j'avais écouté mes parents, je serais avocate aujourd'hui.", 'If I had listened to my parents, I would be a lawyer today.', '/si ʒa.vɛ.ze.ku.te me pa.ʁɑ̃ ʒə sə.ʁɛ.za.vɔ.kat o.ʒuʁ.dɥi/', 'see zha-veh-zay-koo-tay may pa-RAHⁿ | zhuh suh-reh-za-vo-kat oh-zhoor-DWEE', ['passe-present']),
  sent(1612, 'Si nous avions acheté cette maison, nous vivrions à la campagne maintenant.', 'If we had bought that house, we would live in the country now.', '/si nu.za.vjɔ̃.zaʃ.te sɛt mɛ.zɔ̃ nu vi.vʁi.jɔ̃ a la kɑ̃.paɲ mɛ̃t.nɑ̃/', 'see noo-za-vyohⁿ-zash-tay set meh-ZOHⁿ | noo vee-vree-yohⁿ a la kahⁿ-pany mehⁿt-NAHⁿ', ['passe-present']),
  rule(1613, 'Une phrase avec si peut-elle mêler le passé et le présent ?', "Oui. Chaque moitié prend le temps de son moment : la cause peut être passée, l'effet présent.", 'Yes. Each half takes the tense of its moment: the cause can be past and the effect present.', '/wi ʃak mwa.tje pʁɑ̃ lə tɑ̃ də sɔ̃ mɔ.mɑ̃ la koz pø.tɛtʁ pa.se le.fɛ pʁe.zɑ̃/', 'WEE | shak mwa-tyay prahⁿ luh tahⁿ duh sohⁿ mo-MAHⁿ | la kohz puh-tetr pa-SAY | lay-feh pray-ZAHⁿ', ['horloge']),
];

/* ── ACT 2 · LES QUATRE MOITIÉS ─────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1614, "Si j'avais une voiture, je viendrais te chercher.", 'If I had a car, I would come and pick you up.', '/si ʒa.vɛ yn vwa.tyʁ ʒə vjɛ̃.dʁɛ tə ʃɛʁ.ʃe/', 'see zha-veh ün vwa-TÜR | zhuh vyehⁿ-dreh tuh shehr-SHAY', ['classique', 'present', 'quatre']),
  sent(1615, "Si j'avais eu une voiture, je serais venu te chercher.", 'If I had had a car, I would have come to pick you up.', '/si ʒa.vɛ.zy yn vwa.tyʁ ʒə sə.ʁɛ və.ny tə ʃɛʁ.ʃe/', 'see zha-veh-zü ün vwa-TÜR | zhuh suh-reh vuh-nü tuh shehr-SHAY', ['classique', 'passe', 'quatre']),
  sent(1616, "Si j'avais acheté une voiture l'an dernier, je viendrais te chercher.", 'If I had bought a car last year, I would come and pick you up.', '/si ʒa.vɛ.zaʃ.te yn vwa.tyʁ lɑ̃ dɛʁ.nje ʒə vjɛ̃.dʁɛ tə ʃɛʁ.ʃe/', 'see zha-veh-zash-tay ün vwa-tür lahⁿ dehr-NYAY | zhuh vyehⁿ-dreh tuh shehr-SHAY', ['passe-present', 'quatre'], FCVDR),
  sent(1617, "Si j'avais une voiture, je serais venu te chercher hier.", 'If I had a car, I would have come to pick you up yesterday.', '/si ʒa.vɛ yn vwa.tyʁ ʒə sə.ʁɛ və.ny tə ʃɛʁ.ʃe jɛʁ/', 'see zha-veh ün vwa-TÜR | zhuh suh-reh vuh-nü tuh shehr-shay YEHR', ['present-passe', 'quatre'], FCVDR),
  rule(1618, "Quelles sont les deux moitiés si de l'irréel ?", 'Si + imparfait pour aujourd\'hui, si + plus-que-parfait pour hier.', 'Si + imparfait for today, si + pluperfect for yesterday.', '/si plys ɛ̃.paʁ.fɛ puʁ o.ʒuʁ.dɥi si plys plys.kə.paʁ.fɛ puʁ jɛʁ/', 'see plüs ehⁿ-par-feh poor oh-zhoor-DWEE | see plüs plüs-kuh-par-feh poor YEHR', ['moities']),
  rule(1619, 'Et les deux moitiés résultat ?', 'Le conditionnel présent pour aujourd\'hui, le conditionnel passé pour hier.', 'The present conditional for today, the past conditional for yesterday.', '/lə kɔ̃.di.sjɔ.nɛl pʁe.zɑ̃ puʁ o.ʒuʁ.dɥi lə kɔ̃.di.sjɔ.nɛl pa.se puʁ jɛʁ/', 'luh kohⁿ-dee-syo-nel pray-zahⁿ poor oh-zhoor-DWEE | luh kohⁿ-dee-syo-nel pa-say poor YEHR', ['moities']),
  sent(1620, 'Si tu étais là, tout serait plus simple.', 'If you were here, everything would be simpler.', '/si ty e.tɛ la tu sə.ʁɛ ply sɛ̃pl/', 'see tü ay-teh LA | too suh-reh plü SEHⁿPL', ['classique', 'present']),
  sent(1621, 'Si tu avais été là, tout aurait été plus simple.', 'If you had been here, everything would have been simpler.', '/si ty a.vɛ.ze.te la tu.to.ʁɛ.te ply sɛ̃pl/', 'see tü a-veh-zay-tay LA | too-toh-reh-tay plü SEHⁿPL', ['classique', 'passe']),
  sent(1622, "Si tu avais été là hier, tout serait plus simple aujourd'hui.", 'If you had been here yesterday, everything would be simpler today.', '/si ty a.vɛ.ze.te la jɛʁ tu sə.ʁɛ ply sɛ̃pl o.ʒuʁ.dɥi/', 'see tü a-veh-zay-tay la YEHR | too suh-reh plü sehⁿpl oh-zhoor-DWEE', ['passe-present'], FCVDR),
  sent(1623, 'Si elle avait su, elle aurait appelé.', 'If she had known, she would have called.', '/si ɛ.la.vɛ sy ɛ.lo.ʁɛ.ta.ple/', 'see el-a-veh SÜ | el-oh-reh-ta-PLAY', ['classique', 'passe']),
  sent(1624, 'Si elle savait conduire, elle aurait pris la voiture.', 'If she could drive, she would have taken the car.', '/si ɛl sa.vɛ kɔ̃.dɥiʁ ɛ.lo.ʁɛ pʁi la vwa.tyʁ/', 'see el sa-veh kohⁿ-DWEER | el-oh-reh pree la vwa-TÜR', ['present-passe']),
  sent(1625, "Si j'avais appris à nager, je nagerais avec vous.", 'If I had learned to swim, I would swim with you.', '/si ʒa.vɛ.za.pʁi a na.ʒe ʒə na.ʒə.ʁɛ a.vɛk vu/', 'see zha-veh-za-pree a na-ZHAY | zhuh na-zhuh-reh a-vek VOO', ['passe-present']),
  sent(1626, 'Si nous étions partis plus tôt, nous serions arrivés à l\'heure.', 'If we had left earlier, we would have arrived on time.', '/si nu.ze.tjɔ̃ paʁ.ti ply to nu sə.ʁjɔ̃.za.ʁi.ve a lœʁ/', 'see noo-zay-tyohⁿ par-tee plü TOH | noo suh-ryohⁿ-za-ree-vay a LEUR', ['classique', 'passe']),
  rule(1627, "Dans une phrase mixte, d'où viennent les deux moitiés ?", "Chacune vient d'une paire différente : la cause d'une, le résultat de l'autre.", 'Each comes from a different pair: the cause from one, the result from the other.', '/ʃa.kyn vjɛ̃ dyn pɛʁ di.fe.ʁɑ̃t la koz dyn lə ʁe.zyl.ta də lotʁ/', 'sha-kün vyehⁿ dün pehr dee-fay-RAHⁿT | la kohz DÜN | luh ray-zül-ta duh LOHTR', ['moities', 'horloge']),
  sent(1628, "Si j'avais gagné au loto, je ne travaillerais plus.", 'If I had won the lottery, I would not be working any more.', '/si ʒa.vɛ ɡa.ɲe o lo.to ʒə nə tʁa.va.jə.ʁɛ ply/', 'see zha-veh ga-nyay oh loh-TOH | zhuh nuh tra-va-yuh-reh PLÜ', ['passe-present']),
];

/* ── ACT 3 · UNE CAUSE PASSÉE, UN EFFET PRÉSENT ─────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1629, "Si Julien avait fini son droit, il serait avocat aujourd'hui.", 'If Julien had finished his law degree, he would be a lawyer today.', '/si ʒy.ljɛ̃ a.vɛ fi.ni sɔ̃ dʁwa il sə.ʁɛ.ta.vɔ.ka o.ʒuʁ.dɥi/', 'see zhü-lyehⁿ a-veh fee-nee sohⁿ DRWA | eel suh-reh-ta-vo-ka oh-zhoor-DWEE', ['passe-present'], FCVDR),
  sent(1630, "S'il n'avait pas ouvert sa boulangerie, il travaillerait dans un bureau.", 'If he had not opened his bakery, he would be working in an office.', '/sil na.vɛ pa.zu.vɛʁ sa bu.lɑ̃ʒ.ʁi il tʁa.va.jə.ʁɛ dɑ̃.zœ̃ by.ʁo/', 'seel na-veh pa-zoo-vehr sa boo-lahⁿzh-REE | eel tra-va-yuh-reh dahⁿ-zuhⁿ bü-ROH', ['passe-present']),
  sent(1631, "Si j'avais dormi cette nuit, je serais moins fatigué.", 'If I had slept last night, I would be less tired.', '/si ʒa.vɛ dɔʁ.mi sɛt nɥi ʒə sə.ʁɛ mwɛ̃ fa.ti.ɡe/', 'see zha-veh dor-mee set NWEE | zhuh suh-reh mwehⁿ fa-tee-GAY', ['passe-present'], FCVDR),
  sent(1632, 'Si tu avais pris ton parapluie, tu ne serais pas trempé.', 'If you had taken your umbrella, you would not be soaked.', '/si ty a.vɛ pʁi tɔ̃ pa.ʁa.plɥi ty nə sə.ʁɛ pa tʁɑ̃.pe/', 'see tü a-veh pree tohⁿ pa-ra-PLWEE | tü nuh suh-reh pa trahⁿ-PAY', ['passe-present']),
  sent(1633, 'Si nous avions réservé, nous aurions une table maintenant.', 'If we had booked, we would have a table now.', '/si nu.za.vjɔ̃ ʁe.zɛʁ.ve nu.zo.ʁjɔ̃.zyn tabl mɛ̃t.nɑ̃/', 'see noo-za-vyohⁿ ray-zehr-VAY | noo-zoh-ryohⁿ-zün tabl mehⁿt-NAHⁿ', ['passe-present']),
  sent(1634, 'Si elle avait accepté ce poste à Genève, elle vivrait en Suisse.', 'If she had accepted that job in Geneva, she would live in Switzerland.', '/si ɛ.la.vɛ.tak.sɛp.te sə pɔst a ʒə.nɛv ɛl vi.vʁɛ ɑ̃ sɥis/', 'see el-a-veh-tak-sep-tay suh post a zhuh-NEV | el vee-vreh ahⁿ SWEESS', ['passe-present']),
  sent(1635, "Si j'avais appris l'allemand à l'école, je comprendrais mes collègues.", 'If I had learned German at school, I would understand my colleagues.', '/si ʒa.vɛ.za.pʁi lal.mɑ̃ a le.kɔl ʒə kɔ̃.pʁɑ̃.dʁɛ me kɔ.lɛɡ/', 'see zha-veh-za-pree lal-mahⁿ a lay-KOL | zhuh kohⁿ-prahⁿ-dreh may ko-LEG', ['passe-present']),
  sent(1636, "Si le train n'avait pas eu de retard, je serais déjà au bureau.", 'If the train had not been late, I would already be at the office.', '/si lə tʁɛ̃ na.vɛ pa.zy də ʁə.taʁ ʒə sə.ʁɛ de.ʒa o by.ʁo/', 'see luh trehⁿ na-veh pa-zü duh ruh-TAR | zhuh suh-reh day-zha oh bü-ROH', ['passe-present']),
  sent(1637, "Si j'avais économisé, je pourrais partir en vacances.", 'If I had saved, I could go on holiday.', '/si ʒa.vɛ.ze.kɔ.nɔ.mi.ze ʒə pu.ʁɛ paʁ.tiʁ ɑ̃ va.kɑ̃s/', 'see zha-veh-zay-ko-no-mee-ZAY | zhuh poo-reh par-teer ahⁿ va-KAHⁿS', ['passe-present'], FCVDR),
  rule(1638, 'Cause hier, effet aujourd\'hui : quelle paire de temps ?', 'Si + plus-que-parfait, puis conditionnel présent.', 'Si + pluperfect, then present conditional.', '/si plys plys.kə.paʁ.fɛ pɥi kɔ̃.di.sjɔ.nɛl pʁe.zɑ̃/', 'see plüs plüs-kuh-par-FEH | pwee kohⁿ-dee-syo-nel pray-ZAHⁿ', ['passe-present']),
  sent(1639, 'Si Julien était resté à la faculté, il ne se lèverait pas à quatre heures.', 'If Julien had stayed at university, he would not get up at four.', '/si ʒy.ljɛ̃ e.tɛ ʁɛs.te a la fa.kyl.te il nə sə lɛ.və.ʁɛ pa a ka.tʁœʁ/', 'see zhü-lyehⁿ ay-teh res-tay a la fa-kül-TAY | eel nuh suh leh-vuh-reh pa a ka-TREUR', ['passe-present']),
  sent(1640, "S'il était resté à la faculté, il aurait fini son droit.", 'If he had stayed at university, he would have finished his law degree.', '/si.le.tɛ ʁɛs.te a la fa.kyl.te i.lo.ʁɛ fi.ni sɔ̃ dʁwa/', 'see-lay-teh res-tay a la fa-kül-TAY | ee-loh-reh fee-nee sohⁿ DRWA', ['classique', 'passe']),
  sent(1641, 'Si tu étais parti plus tôt, tu serais là maintenant.', 'If you had left earlier, you would be here now.', '/si ty e.tɛ paʁ.ti ply to ty sə.ʁɛ la mɛ̃t.nɑ̃/', 'see tü ay-teh par-tee plü TOH | tü suh-reh la mehⁿt-NAHⁿ', ['passe-present']),
  sent(1642, "Si j'avais noté son numéro, je pourrais l'appeler.", 'If I had written down his number, I could call him.', '/si ʒa.vɛ nɔ.te sɔ̃ ny.me.ʁo ʒə pu.ʁɛ la.ple/', 'see zha-veh no-tay sohⁿ nü-may-ROH | zhuh poo-reh la-PLAY', ['passe-present']),
  sent(1643, "Si elle n'avait pas raté son bus, elle serait avec nous.", 'If she had not missed her bus, she would be with us.', '/si ɛl na.vɛ pa ʁa.te sɔ̃ bys ɛl sə.ʁɛ a.vɛk nu/', 'see el na-veh pa ra-tay sohⁿ BÜSS | el suh-reh a-vek NOO', ['passe-present']),
  sent(1644, "Si nous avions vendu l'appartement, nous aurions de l'argent de côté.", 'If we had sold the flat, we would have money put aside.', '/si nu.za.vjɔ̃ vɑ̃.dy la.paʁ.tə.mɑ̃ nu.zo.ʁjɔ̃ də laʁ.ʒɑ̃ də ko.te/', 'see noo-za-vyohⁿ vahⁿ-dü la-par-tuh-MAHⁿ | noo-zoh-ryohⁿ duh lar-zhahⁿ duh koh-TAY', ['passe-present']),
  sent(1645, "Si j'avais fini mon rapport hier, je serais libre ce matin.", 'If I had finished my report yesterday, I would be free this morning.', '/si ʒa.vɛ fi.ni mɔ̃ ʁa.pɔʁ jɛʁ ʒə sə.ʁɛ libʁ sə ma.tɛ̃/', 'see zha-veh fee-nee mohⁿ ra-por YEHR | zhuh suh-reh leebr suh ma-TEHⁿ', ['passe-present']),
  rule(1646, '« J\'aurais été moins fatigué » ou « je serais moins fatigué » : laquelle parle de maintenant ?', 'Je serais moins fatigué : le conditionnel présent regarde aujourd\'hui.', 'Je serais moins fatigué: the present conditional looks at today.', '/ʒə sə.ʁɛ mwɛ̃ fa.ti.ɡe lə kɔ̃.di.sjɔ.nɛl pʁe.zɑ̃ ʁə.ɡaʁd o.ʒuʁ.dɥi/', 'zhuh suh-reh mwehⁿ fa-tee-GAY | luh kohⁿ-dee-syo-nel pray-zahⁿ ruh-gard oh-zhoor-DWEE', ['passe-present', 'piege']),
];

/* ── ACT 4 · UN ÉTAT PRÉSENT, UN EFFET PASSÉ ────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1647, "Si j'étais plus prudent, je n'aurais pas perdu mes clés.", 'If I were more careful, I would not have lost my keys.', '/si ʒe.tɛ ply pʁy.dɑ̃ ʒə no.ʁɛ pa pɛʁ.dy me kle/', 'see zhay-teh plü prü-DAHⁿ | zhuh noh-reh pa pehr-dü may KLAY', ['present-passe'], FCVDR),
  sent(1648, 'Si tu parlais espagnol, tu aurais compris le guide.', 'If you spoke Spanish, you would have understood the guide.', '/si ty paʁ.lɛ ɛs.pa.ɲɔl ty o.ʁɛ kɔ̃.pʁi lə ɡid/', 'see tü par-leh es-pa-NYOL | tü oh-reh kohⁿ-pree luh GEED', ['present-passe']),
  sent(1649, "Si elle n'avait pas peur de l'avion, elle serait venue à notre mariage.", 'If she were not afraid of flying, she would have come to our wedding.', '/si ɛl na.vɛ pa pœʁ də la.vjɔ̃ ɛl sə.ʁɛ və.ny a nɔtʁ ma.ʁjaʒ/', 'see el na-veh pa peur duh la-VYOHⁿ | el suh-reh vuh-nü a notr ma-RYAZH', ['present-passe'], FCVDR),
  sent(1650, "Si j'étais moins timide, je lui aurais parlé hier soir.", 'If I were less shy, I would have spoken to her last night.', '/si ʒe.tɛ mwɛ̃ ti.mid ʒə lɥi o.ʁɛ paʁ.le jɛʁ swaʁ/', 'see zhay-teh mwehⁿ tee-MEED | zhuh lwee oh-reh par-lay yehr SWAR', ['present-passe']),
  sent(1651, 'Si nous habitions plus près, nous serions passés te voir.', 'If we lived closer, we would have dropped in to see you.', '/si nu.za.bi.tjɔ̃ ply pʁɛ nu sə.ʁjɔ̃ pa.se tə vwaʁ/', 'see noo-za-bee-tyohⁿ plü PREH | noo suh-ryohⁿ pa-say tuh VWAR', ['present-passe']),
  sent(1652, "S'il savait cuisiner, il aurait préparé le repas.", 'If he could cook, he would have made the meal.', '/sil sa.vɛ kɥi.zi.ne i.lo.ʁɛ pʁe.pa.ʁe lə ʁə.pa/', 'seel sa-veh kwee-zee-NAY | ee-loh-reh pray-pa-ray luh ruh-PA', ['present-passe']),
  sent(1653, "Si je n'avais pas de voiture, j'aurais raté la réunion.", 'If I did not have a car, I would have missed the meeting.', '/si ʒə na.vɛ pa də vwa.tyʁ ʒo.ʁɛ ʁa.te la ʁe.y.njɔ̃/', 'see zhuh na-veh pa duh vwa-TÜR | zhoh-reh ra-tay la ray-ü-NYOHⁿ', ['present-passe']),
  sent(1654, 'Si Awa était moins têtue, elle aurait accepté notre aide.', 'If Awa were less stubborn, she would have accepted our help.', '/si a.wa e.tɛ mwɛ̃ tɛ.ty ɛ.lo.ʁɛ.tak.sɛp.te nɔ.tʁɛd/', 'see a-wa ay-teh mwehⁿ teh-TÜ | el-oh-reh-tak-sep-tay no-TRED', ['present-passe']),
  sent(1655, 'Si le musée était ouvert le lundi, nous l\'aurions visité hier.', 'If the museum were open on Mondays, we would have visited it yesterday.', '/si lə my.ze e.tɛ.tu.vɛʁ lə lœ̃.di nu lo.ʁjɔ̃ vi.zi.te jɛʁ/', 'see luh mü-zay ay-teh-too-vehr luh luhⁿ-DEE | noo loh-ryohⁿ vee-zee-tay YEHR', ['present-passe']),
  rule(1656, 'Un trait qui dure, un résultat déjà passé : quelle paire ?', 'Si + imparfait, puis conditionnel passé.', 'Si + imparfait, then past conditional.', '/si plys ɛ̃.paʁ.fɛ pɥi kɔ̃.di.sjɔ.nɛl pa.se/', 'see plüs ehⁿ-par-FEH | pwee kohⁿ-dee-syo-nel pa-SAY', ['present-passe']),
  sent(1657, "Si j'avais été plus prudent, je n'aurais pas perdu mes clés.", 'If I had been more careful, I would not have lost my keys.', '/si ʒa.vɛ.ze.te ply pʁy.dɑ̃ ʒə no.ʁɛ pa pɛʁ.dy me kle/', 'see zha-veh-zay-tay plü prü-DAHⁿ | zhuh noh-reh pa pehr-dü may KLAY', ['classique', 'passe']),
  rule(1658, '« Si j\'étais prudent » ou « si j\'avais été prudent » : laquelle parle de ta nature ?', 'Si j\'étais prudent : un trait de caractère, vrai hier comme aujourd\'hui.', 'Si j\'étais prudent: a character trait, true yesterday as today.', '/si ʒe.tɛ pʁy.dɑ̃ œ̃ tʁɛ də ka.ʁak.tɛʁ vʁɛ jɛʁ kɔm o.ʒuʁ.dɥi/', 'see zhay-teh prü-DAHⁿ | uhⁿ treh duh ka-rak-TEHR | vreh yehr kom oh-zhoor-DWEE', ['present-passe', 'trait']),
  sent(1659, "Si tu n'étais pas si pressé, tu aurais lu le contrat.", 'If you were not always in such a hurry, you would have read the contract.', '/si ty ne.tɛ pa si pʁɛ.se ty o.ʁɛ ly lə kɔ̃.tʁa/', 'see tü nay-teh pa see preh-SAY | tü oh-reh lü luh kohⁿ-TRA', ['present-passe']),
  sent(1660, 'Si je connaissais la ville, je ne me serais pas perdu.', 'If I knew the city, I would not have got lost.', '/si ʒə kɔ.nɛ.sɛ la vil ʒə nə mə sə.ʁɛ pa pɛʁ.dy/', 'see zhuh ko-neh-seh la VEEL | zhuh nuh muh suh-reh pa pehr-DÜ', ['present-passe'], FCVDR),
  sent(1661, "Si elle n'était pas médecin, elle n'aurait pas su quoi faire.", 'If she were not a doctor, she would not have known what to do.', '/si ɛl ne.tɛ pa med.sɛ̃ ɛl no.ʁɛ pa sy kwa fɛʁ/', 'see el nay-teh pa med-SEHⁿ | el noh-reh pa sü kwa FEHR', ['present-passe']),
  sent(1662, 'Si les billets étaient moins chers, nous aurions pris l\'avion.', 'If tickets were cheaper, we would have flown.', '/si le bi.jɛ e.tɛ mwɛ̃ ʃɛʁ nu.zo.ʁjɔ̃ pʁi la.vjɔ̃/', 'see lay bee-yeh ay-teh mwehⁿ SHEHR | noo-zoh-ryohⁿ pree la-VYOHⁿ', ['present-passe']),
  sent(1663, "Si j'aimais le froid, j'aurais accepté le poste à Montréal.", 'If I liked the cold, I would have accepted the job in Montréal.', '/si ʒɛ.mɛ lə fʁwa ʒo.ʁɛ.zak.sɛp.te lə pɔst a mɔ̃.ʁe.al/', 'see zheh-meh luh FRWA | zhoh-reh-zak-sep-tay luh post a mohⁿ-ray-AL', ['present-passe']),
];

/* ── ACT 5 · DEUX HORLOGES SUR UNE LIGNE ────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1664, "Si Karim n'était pas parti au Canada, il habiterait encore à Oran.", 'If Karim had not left for Canada, he would still live in Oran.', '/si ka.ʁim ne.tɛ pa paʁ.ti o ka.na.da il a.bi.tə.ʁɛ ɑ̃.kɔʁ a ɔ.ʁɑ̃/', 'see ka-reem nay-teh pa par-tee oh ka-na-DA | eel a-bee-tuh-reh ahⁿ-kor a o-RAHⁿ', ['passe-present', 'ligne'], FCVDR),
  sent(1665, "S'il n'était pas parti au Canada, il n'aurait pas rencontré Sophie.", 'If he had not left for Canada, he would not have met Sophie.', '/sil ne.tɛ pa paʁ.ti o ka.na.da il no.ʁɛ pa ʁɑ̃.kɔ̃.tʁe so.fi/', 'seel nay-teh pa par-tee oh ka-na-DA | eel noh-reh pa rahⁿ-kohⁿ-tray so-FEE', ['classique', 'passe', 'ligne']),
  sent(1666, "S'il n'aimait pas le froid, il serait déjà rentré.", 'If he did not like the cold, he would already have gone back.', '/sil nɛ.mɛ pa lə fʁwa il sə.ʁɛ de.ʒa ʁɑ̃.tʁe/', 'seel neh-meh pa luh FRWA | eel suh-reh day-zha rahⁿ-TRAY', ['present-passe', 'ligne']),
  sent(1667, "S'il n'aimait pas le froid, il rentrerait à Oran.", 'If he did not like the cold, he would go back to Oran.', '/sil nɛ.mɛ pa lə fʁwa il ʁɑ̃.tʁə.ʁɛ.ta ɔ.ʁɑ̃/', 'seel neh-meh pa luh FRWA | eel rahⁿ-truh-reh-ta o-RAHⁿ', ['classique', 'present', 'ligne']),
  rule(1668, "Avant d'écrire une phrase avec si, que places-tu sur la ligne du temps ?", 'Deux points : le moment de la condition et le moment du résultat.', 'Two points: the moment of the condition and the moment of the result.', '/dø pwɛ̃ lə mɔ.mɑ̃ də la kɔ̃.di.sjɔ̃ e lə mɔ.mɑ̃ dy ʁe.zyl.ta/', 'duh PWEHⁿ | luh mo-mahⁿ duh la kohⁿ-dee-SYOHⁿ | ay luh mo-mahⁿ dü ray-zül-TA', ['ligne', 'horloge']),
  rule(1669, 'La condition se joue hier. Que mets-tu après si ?', 'Le plus-que-parfait, quel que soit le moment du résultat.', 'The pluperfect, whatever the moment of the result.', '/lə plys.kə.paʁ.fɛ kɛl kə swa lə mɔ.mɑ̃ dy ʁe.zyl.ta/', 'luh plüs-kuh-par-FEH | kel kuh swa luh mo-mahⁿ dü ray-zül-TA', ['ligne']),
  rule(1670, "Le résultat se voit aujourd'hui. Quel temps prend-il ?", 'Le conditionnel présent, quel que soit le moment de la cause.', 'The present conditional, whatever the moment of the cause.', '/lə kɔ̃.di.sjɔ.nɛl pʁe.zɑ̃ kɛl kə swa lə mɔ.mɑ̃ də la koz/', 'luh kohⁿ-dee-syo-nel pray-ZAHⁿ | kel kuh swa luh mo-mahⁿ duh la KOHZ', ['ligne']),
  sent(1671, "Si j'avais pris ce vol, je serais à Paris ce soir.", 'If I had taken that flight, I would be in Paris tonight.', '/si ʒa.vɛ pʁi sə vɔl ʒə sə.ʁɛ a pa.ʁi sə swaʁ/', 'see zha-veh pree suh VOL | zhuh suh-reh a pa-ree suh SWAR', ['passe-present', 'ligne']),
  sent(1672, "Si j'avais pris ce vol, j'aurais atterri à midi.", 'If I had taken that flight, I would have landed at noon.', '/si ʒa.vɛ pʁi sə vɔl ʒo.ʁɛ.za.te.ʁi a mi.di/', 'see zha-veh pree suh VOL | zhoh-reh-za-tay-ree a mee-DEE', ['classique', 'passe', 'ligne']),
  sent(1673, 'Si Léa était plus sportive, elle aurait fini la course.', 'If Léa were fitter, she would have finished the race.', '/si le.a e.tɛ ply spɔʁ.tiv ɛ.lo.ʁɛ fi.ni la kuʁs/', 'see lay-a ay-teh plü spor-TEEV | el-oh-reh fee-nee la KOORSS', ['present-passe', 'ligne']),
  sent(1674, "Si Léa s'était entraînée cet hiver, elle serait en forme pour la course de dimanche.", "If Léa had trained this winter, she would be in shape for Sunday's race.", '/si le.a se.tɛ.tɑ̃.tʁɛ.ne sɛ.ti.vɛʁ ɛl sə.ʁɛ.tɑ̃ fɔʁm puʁ la kuʁs də di.mɑ̃ʃ/', 'see lay-a say-teh-tahⁿ-treh-nay seh-tee-VEHR | el suh-reh-tahⁿ form poor la koorss duh dee-MAHⁿSH', ['passe-present', 'ligne']),
  rule(1675, 'Et un résultat qui viendra demain ?', "Il prend aussi le conditionnel présent : aujourd'hui et demain partagent la même horloge.", 'It also takes the present conditional: today and tomorrow share the same clock.', '/il pʁɑ̃ o.si lə kɔ̃.di.sjɔ.nɛl pʁe.zɑ̃ o.ʒuʁ.dɥi e də.mɛ̃ paʁ.taʒ la mɛm ɔʁ.lɔʒ/', 'eel prahⁿ oh-see luh kohⁿ-dee-syo-nel pray-ZAHⁿ | oh-zhoor-dwee ay duh-MEHⁿ | par-tazh la mem or-LOZH', ['ligne', 'horloge']),
  sent(1676, 'Si tu avais envoyé ton dossier, tu commencerais lundi.', 'If you had sent your file, you would start on Monday.', '/si ty a.vɛ.zɑ̃.vwa.je tɔ̃ do.sje ty kɔ.mɑ̃.sə.ʁɛ lœ̃.di/', 'see tü a-veh-zahⁿ-vwa-yay tohⁿ do-SYAY | tü ko-mahⁿ-suh-reh luhⁿ-DEE', ['passe-present', 'ligne'], FCVDR),
  sent(1677, "Si j'étais bilingue, on m'aurait confié ce dossier.", 'If I were bilingual, I would have been given that file.', '/si ʒe.tɛ bi.lɛ̃ɡ ɔ̃ mo.ʁɛ kɔ̃.fje sə do.sje/', 'see zhay-teh bee-LEHⁿG | ohⁿ moh-reh kohⁿ-fyay suh do-SYAY', ['present-passe', 'ligne']),
  sent(1678, "Si je n'avais pas cassé mon téléphone, je t'enverrais la photo.", 'If I had not broken my phone, I would send you the photo.', '/si ʒə na.vɛ pa ka.se mɔ̃ te.le.fɔn ʒə tɑ̃.vɛ.ʁɛ la fɔ.to/', 'see zhuh na-veh pa ka-say mohⁿ tay-lay-FONN | zhuh tahⁿ-veh-reh la fo-TOH', ['passe-present', 'ligne']),
];

/* ── ACT 6 · LES MOTS QUI RÈGLENT L'HORLOGE ─────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1679, "Si j'avais accepté ce poste à l'époque, je vivrais à Bruxelles maintenant.", 'If I had accepted that job at the time, I would be living in Brussels now.', '/si ʒa.vɛ.zak.sɛp.te sə pɔst a le.pɔk ʒə vi.vʁɛ a bʁy.sɛl mɛ̃t.nɑ̃/', 'see zha-veh-zak-sep-tay suh post a lay-POK | zhuh vee-vreh a brü-sel mehⁿt-NAHⁿ', ['marqueur', 'passe-present'], FCVDR),
  sent(1680, "Si tu étais moins distrait, tu n'aurais pas raté ton arrêt ce matin.", 'If you were less absent-minded, you would not have missed your stop this morning.', '/si ty e.tɛ mwɛ̃ dis.tʁɛ ty no.ʁɛ pa ʁa.te tɔ̃.na.ʁɛ sə ma.tɛ̃/', 'see tü ay-teh mwehⁿ dees-TREH | tü noh-reh pa ra-tay tohⁿ-na-reh suh ma-TEHⁿ', ['marqueur', 'present-passe']),
  sent(1681, "S'il avait neigé hier, les routes seraient fermées aujourd'hui.", 'If it had snowed yesterday, the roads would be closed today.', '/si.la.vɛ nɛ.ʒe jɛʁ le ʁut sə.ʁɛ fɛʁ.me o.ʒuʁ.dɥi/', 'see-la-veh neh-zhay YEHR | lay root suh-reh fehr-may oh-zhoor-DWEE', ['marqueur', 'passe-present']),
  sent(1682, "S'il avait neigé hier, les routes auraient été fermées hier soir.", 'If it had snowed yesterday, the roads would have been closed last night.', '/si.la.vɛ nɛ.ʒe jɛʁ le ʁut o.ʁɛ.te.te fɛʁ.me jɛʁ swaʁ/', 'see-la-veh neh-zhay YEHR | lay root oh-reh-tay-tay fehr-may yehr SWAR', ['marqueur', 'classique', 'passe']),
  sent(1683, "Si elle avait travaillé l'an dernier, elle serait en terminale cette année.", 'If she had worked last year, she would be in her final school year this year.', '/si ɛ.la.vɛ tʁa.va.je lɑ̃ dɛʁ.nje ɛl sə.ʁɛ.tɑ̃ tɛʁ.mi.nal sɛ.ta.ne/', 'see el-a-veh tra-va-yay lahⁿ dehr-NYAY | el suh-reh-tahⁿ tehr-mee-nal seh-ta-NAY', ['marqueur', 'passe-present']),
  sent(1684, "Si je n'avais pas vu ce film il y a dix ans, je ne serais pas réalisateur aujourd'hui.", 'If I had not seen that film ten years ago, I would not be a film director today.', '/si ʒə na.vɛ pa vy sə film il ja di zɑ̃ ʒə nə sə.ʁɛ pa ʁe.a.li.za.tœʁ o.ʒuʁ.dɥi/', 'see zhuh na-veh pa vü suh FEELM | eel ya dee ZAHⁿ | zhuh nuh suh-reh pa ray-a-lee-za-teur oh-zhoor-DWEE', ['marqueur', 'passe-present']),
  sent(1685, 'Si Marc était patient de nature, il aurait attendu ta réponse.', 'If Marc were patient by nature, he would have waited for your answer.', '/si maʁk e.tɛ pa.sjɑ̃ də na.tyʁ i.lo.ʁɛ.ta.tɑ̃.dy ta ʁe.pɔ̃s/', 'see mark ay-teh pa-syahⁿ duh na-TÜR | ee-loh-reh-ta-tahⁿ-dü ta ray-POHⁿS', ['marqueur', 'present-passe', 'trait']),
  sent(1686, 'Si on était déjà en vacances, on serait à la plage.', 'If we were already on holiday, we would be at the beach.', '/si ɔ̃.ne.tɛ de.ʒa ɑ̃ va.kɑ̃s ɔ̃ sə.ʁɛ a la plaʒ/', 'see ohⁿ-nay-teh day-zha ahⁿ va-KAHⁿS | ohⁿ suh-reh a la PLAZH', ['marqueur', 'classique', 'present']),
  rule(1687, 'Quels mots demandent le présent dans le résultat ?', "Aujourd'hui, maintenant, en ce moment, encore, cette année.", 'Today, now, at the moment, still, this year.', '/o.ʒuʁ.dɥi mɛ̃t.nɑ̃ ɑ̃ sə mɔ.mɑ̃ ɑ̃.kɔʁ sɛ.ta.ne/', 'oh-zhoor-DWEE | mehⁿt-NAHⁿ | ahⁿ suh mo-MAHⁿ | ahⁿ-KOR | seh-ta-NAY', ['marqueur']),
  rule(1688, 'Quels mots demandent le passé ?', "Hier, ce matin, l'an dernier, à l'époque, il y a dix ans.", 'Yesterday, this morning, last year, at the time, ten years ago.', '/jɛʁ sə ma.tɛ̃ lɑ̃ dɛʁ.nje a le.pɔk il ja di zɑ̃/', 'YEHR | suh ma-TEHⁿ | lahⁿ dehr-NYAY | a lay-POK | eel ya dee ZAHⁿ', ['marqueur']),
  rule(1689, 'Un trait de caractère ou un fait qui dure : quel temps après si ?', "L'imparfait, même si le résultat est passé.", 'The imparfait, even if the result is past.', '/lɛ̃.paʁ.fɛ mɛm si lə ʁe.zyl.ta ɛ pa.se/', 'lehⁿ-par-FEH | mem see luh ray-zül-ta eh pa-SAY', ['marqueur', 'trait']),
  sent(1690, "Si tu avais répondu hier, nous aurions la réponse à l'heure qu'il est.", 'If you had answered yesterday, we would have the answer by now.', '/si ty a.vɛ ʁe.pɔ̃.dy jɛʁ nu.zo.ʁjɔ̃ la ʁe.pɔ̃s a lœʁ ki.lɛ/', 'see tü a-veh ray-pohⁿ-dü YEHR | noo-zoh-ryohⁿ la ray-POHⁿS | a leur kee-LEH', ['marqueur', 'passe-present']),
  sent(1691, 'Si je ne travaillais pas le samedi, je serais venu à ta fête.', 'If I did not work on Saturdays, I would have come to your party.', '/si ʒə nə tʁa.va.jɛ pa lə sam.di ʒə sə.ʁɛ və.ny a ta fɛt/', 'see zhuh nuh tra-va-yeh pa luh sam-DEE | zhuh suh-reh vuh-nü a ta FET', ['marqueur', 'present-passe'], FCVDR),
  sent(1692, "Si la boulangerie avait fermé l'an dernier, le quartier serait bien triste aujourd'hui.", 'If the bakery had closed last year, the neighbourhood would be very sad today.', '/si la bu.lɑ̃ʒ.ʁi a.vɛ fɛʁ.me lɑ̃ dɛʁ.nje lə kaʁ.tje sə.ʁɛ bjɛ̃ tʁist o.ʒuʁ.dɥi/', 'see la boo-lahⁿzh-ree a-veh fehr-may lahⁿ dehr-NYAY | luh kar-tyay suh-reh byehⁿ treest oh-zhoor-DWEE', ['marqueur', 'passe-present']),
  sent(1693, 'Si je savais nager, je t\'aurais suivi dans le lac hier.', 'If I could swim, I would have followed you into the lake yesterday.', '/si ʒə sa.vɛ na.ʒe ʒə to.ʁɛ sɥi.vi dɑ̃ lə lak jɛʁ/', 'see zhuh sa-veh na-ZHAY | zhuh toh-reh swee-vee dahⁿ luh lak YEHR', ['marqueur', 'present-passe']),
];

/* ── ACT 7 · REGRETTER ET CONSEILLER ────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1694, "Si tu m'avais écouté, tu ne serais pas dans cette situation.", 'If you had listened to me, you would not be in this situation.', '/si ty ma.vɛ.ze.ku.te ty nə sə.ʁɛ pa dɑ̃ sɛt si.tɥa.sjɔ̃/', 'see tü ma-veh-zay-koo-TAY | tü nuh suh-reh pa dahⁿ set see-twa-SYOHⁿ', ['reproche', 'passe-present'], FCVDR),
  sent(1695, "Si j'étais toi, j'aurais déjà appelé le propriétaire.", 'If I were you, I would already have called the landlord.', '/si ʒe.tɛ twa ʒo.ʁɛ de.ʒa a.ple lə pʁɔ.pʁi.je.tɛʁ/', 'see zhay-teh TWA | zhoh-reh day-zha a-play luh pro-pree-yay-TEHR', ['conseil', 'present-passe'], FCVDR),
  sent(1696, "Si j'étais toi, j'appellerais le propriétaire.", 'If I were you, I would call the landlord.', '/si ʒe.tɛ twa ʒa.pɛl.ʁɛ lə pʁɔ.pʁi.je.tɛʁ/', 'see zhay-teh TWA | zha-pel-reh luh pro-pree-yay-TEHR', ['conseil', 'classique', 'present']),
  sent(1697, "Si seulement j'avais gardé mes notes, je pourrais t'aider.", 'If only I had kept my notes, I could help you.', '/si sœl.mɑ̃ ʒa.vɛ ɡaʁ.de me nɔt ʒə pu.ʁɛ tɛ.de/', 'see seul-MAHⁿ | zha-veh gar-day may NOT | zhuh poo-reh teh-DAY', ['regret', 'passe-present']),
  sent(1698, "Si tu étais plus attentif, tu aurais vu l'erreur.", 'If you were more attentive, you would have seen the mistake.', '/si ty e.tɛ ply.za.tɑ̃.tif ty o.ʁɛ vy lɛ.ʁœʁ/', 'see tü ay-teh plü-za-tahⁿ-TEEF | tü oh-reh vü leh-REUR', ['reproche', 'present-passe']),
  sent(1699, "Si j'avais écouté le médecin, je n'aurais plus mal au dos.", 'If I had listened to the doctor, my back would not hurt any more.', '/si ʒa.vɛ.ze.ku.te lə med.sɛ̃ ʒə no.ʁɛ ply mal o do/', 'see zha-veh-zay-koo-tay luh med-SEHⁿ | zhuh noh-reh plü mal oh DOH', ['regret', 'passe-present']),
  sent(1700, 'À ta place, je me serais excusé tout de suite.', 'In your place, I would have apologised straight away.', '/a ta plas ʒə mə sə.ʁɛ.zɛks.ky.ze tut sɥit/', 'a ta PLASS | zhuh muh suh-reh-zeks-kü-zay toot SWEET', ['conseil', 'passe']),
  sent(1701, "Si tu n'étais pas si fier, tu lui aurais demandé pardon.", 'If you were not so proud, you would have asked him to forgive you.', '/si ty ne.tɛ pa si fjɛʁ ty lɥi o.ʁɛ də.mɑ̃.de paʁ.dɔ̃/', 'see tü nay-teh pa see FYEHR | tü lwee oh-reh duh-mahⁿ-day par-DOHⁿ', ['reproche', 'present-passe']),
  sent(1702, "Si j'avais osé, je serais musicien aujourd'hui.", 'If I had dared, I would be a musician today.', '/si ʒa.vɛ.zo.ze ʒə sə.ʁɛ my.zi.sjɛ̃ o.ʒuʁ.dɥi/', 'see zha-veh-zoh-ZAY | zhuh suh-reh mü-zee-syehⁿ oh-zhoor-DWEE', ['regret', 'passe-present'], FCVDR),
  sent(1703, "Je ne regrette rien : si j'étais resté, je ne serais pas heureux.", 'I regret nothing: if I had stayed, I would not be happy.', '/ʒə nə ʁə.ɡʁɛt ʁjɛ̃ si ʒe.tɛ ʁɛs.te ʒə nə sə.ʁɛ pa.zœ.ʁø/', 'zhuh nuh ruh-gret RYEHⁿ | see zhay-teh res-TAY | zhuh nuh suh-reh pa-zeu-RUH', ['regret', 'passe-present']),
  rule(1704, 'Pour un conseil qui arrive trop tard, que dis-tu ?', "Si j'étais toi, j'aurais... : le conseil vaut toujours, l'occasion est passée.", 'If I were you, I would have...: the advice still stands, the chance has gone.', '/si ʒe.tɛ twa ʒo.ʁɛ lə kɔ̃.sɛj vo tu.ʒuʁ lɔ.ka.zjɔ̃ ɛ pa.se/', 'see zhay-teh TWA | zhoh-REH | luh kohⁿ-SEY voh too-ZHOOR | lo-ka-zyohⁿ eh pa-SAY', ['conseil']),
  rule(1705, "Un reproche qui vise aujourd'hui : quelle forme ?", 'Si tu m\'avais écouté, tu ne serais pas... : la faute hier, la conséquence maintenant.', 'If you had listened to me, you would not be...: the mistake yesterday, the consequence now.', '/si ty ma.vɛ.ze.ku.te ty nə sə.ʁɛ pa la fot jɛʁ la kɔ̃.se.kɑ̃s mɛ̃t.nɑ̃/', 'see tü ma-veh-zay-koo-TAY | tü nuh suh-reh PA | la foht YEHR | la kohⁿ-say-kahⁿs mehⁿt-NAHⁿ', ['reproche']),
  sent(1706, "Si elle ne s'était pas trompée de date, elle serait parmi nous ce soir.", 'If she had not got the date wrong, she would be with us tonight.', '/si ɛl nə se.tɛ pa tʁɔ̃.pe də dat ɛl sə.ʁɛ paʁ.mi nu sə swaʁ/', 'see el nuh say-teh pa trohⁿ-pay duh DAT | el suh-reh par-mee noo suh SWAR', ['regret', 'passe-present']),
  sent(1707, "Si j'avais été plus courageux, je lui aurais dit la vérité.", 'If I had been braver, I would have told him the truth.', '/si ʒa.vɛ.ze.te ply ku.ʁa.ʒø ʒə lɥi o.ʁɛ di la ve.ʁi.te/', 'see zha-veh-zay-tay plü koo-ra-ZHUH | zhuh lwee oh-reh dee la vay-ree-TAY', ['regret', 'classique', 'passe']),
  sent(1708, 'Si j\'étais plus courageux, je lui aurais dit la vérité depuis longtemps.', 'If I were braver, I would have told him the truth long ago.', '/si ʒe.tɛ ply ku.ʁa.ʒø ʒə lɥi o.ʁɛ di la ve.ʁi.te də.pɥi lɔ̃.tɑ̃/', 'see zhay-teh plü koo-ra-ZHUH | zhuh lwee oh-reh dee la vay-ree-tay duh-pwee lohⁿ-TAHⁿ', ['regret', 'present-passe', 'trait']),
  sent(1709, 'Si tu avais signé ce contrat, tu serais coincé pour trois ans.', 'If you had signed that contract, you would be stuck for three years.', '/si ty a.vɛ si.ɲe sə kɔ̃.tʁa ty sə.ʁɛ kwɛ̃.se puʁ tʁwa.zɑ̃/', 'see tü a-veh see-nyay suh kohⁿ-TRA | tü suh-reh kwehⁿ-say poor trwa-ZAHⁿ', ['conseil', 'passe-present']),
];

/* ── ACT 8 · ARGUMENTER AVEC SI ─────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1710, "Si la ville avait investi dans le tramway il y a dix ans, les bouchons seraient moins graves aujourd'hui.", 'If the city had invested in the tramway ten years ago, the traffic jams would be less serious today.', '/si la vil a.vɛ.tɛ̃.vɛs.ti dɑ̃ lə tʁam.wɛ il ja di zɑ̃ le bu.ʃɔ̃ sə.ʁɛ mwɛ̃ ɡʁav o.ʒuʁ.dɥi/', 'see la veel a-veh-tehⁿ-ves-tee dahⁿ luh tram-WEH | eel ya dee ZAHⁿ | lay boo-shohⁿ suh-reh mwehⁿ grav oh-zhoor-DWEE', ['argument', 'passe-present'], FCVDR),
  sent(1711, 'Si les loyers étaient moins élevés, les jeunes familles ne seraient pas parties en banlieue.', 'If rents were lower, young families would not have left for the suburbs.', '/si le lwa.je e.tɛ mwɛ̃.ze.lə.ve le ʒœn fa.mij nə sə.ʁɛ pa paʁ.ti ɑ̃ bɑ̃.ljø/', 'see lay lwa-yay ay-teh mwehⁿ-zay-luh-VAY | lay zheunn fa-meey nuh suh-reh pa par-tee ahⁿ bahⁿ-LYUH', ['argument', 'present-passe']),
  sent(1712, "Si on avait planté des arbres il y a vingt ans, nos rues seraient plus fraîches aujourd'hui.", 'If trees had been planted twenty years ago, our streets would be cooler today.', '/si ɔ̃.na.vɛ plɑ̃.te de.zaʁbʁ il ja vɛ̃ tɑ̃ no ʁy sə.ʁɛ ply fʁɛʃ o.ʒuʁ.dɥi/', 'see ohⁿ-na-veh plahⁿ-tay day-ZARBR | eel ya vehⁿ TAHⁿ | noh rü suh-reh plü fresh oh-zhoor-DWEE', ['argument', 'passe-present']),
  sent(1713, "Si le centre-ville était plus accessible, ce commerce n'aurait pas fermé.", 'If the town centre were more accessible, this shop would not have closed.', '/si lə sɑ̃.tʁə.vil e.tɛ ply.zak.se.sibl sə kɔ.mɛʁs no.ʁɛ pa fɛʁ.me/', 'see luh sahⁿ-truh-VEEL ay-teh plü-zak-say-SEEBL | suh ko-mehrs noh-reh pa fehr-MAY', ['argument', 'present-passe']),
  sent(1714, 'Si le projet avait été mieux expliqué, les habitants le soutiendraient.', 'If the project had been better explained, the residents would support it.', '/si lə pʁɔ.ʒɛ a.vɛ.te mjø.zɛks.pli.ke le.za.bi.tɑ̃ lə su.tjɛ̃.dʁɛ/', 'see luh pro-zheh a-veh-tay myuh-zeks-plee-KAY | lay-za-bee-tahⁿ luh soo-tyehⁿ-DREH', ['argument', 'passe-present']),
  sent(1715, "Certes, si rien n'avait été fait, la situation serait pire.", 'Admittedly, if nothing had been done, the situation would be worse.', '/sɛʁt si ʁjɛ̃ na.vɛ.te fɛ la si.tɥa.sjɔ̃ sə.ʁɛ piʁ/', 'SEHRT | see ryehⁿ na-veh-tay FEH | la see-twa-syohⁿ suh-reh PEER', ['argument', 'passe-present']),
  sent(1716, "Si les transports publics étaient fiables, on n'aurait pas construit ce parking.", 'If public transport were reliable, this car park would not have been built.', '/si le tʁɑ̃s.pɔʁ py.blik e.tɛ fjabl ɔ̃ no.ʁɛ pa kɔ̃s.tʁɥi sə paʁ.kiŋ/', 'see lay trahⁿs-por pü-bleek ay-teh FYABL | ohⁿ noh-reh pa kohⁿs-trwee suh par-KEENG', ['argument', 'present-passe']),
  rule(1717, 'Dans un argument, à quoi sert une phrase mixte ?', 'À relier une décision passée à une situation actuelle, ou un état actuel à un échec passé.', 'To link a past decision to a current situation, or a current state to a past failure.', '/a ʁə.lje yn de.si.zjɔ̃ pa.se a yn si.tɥa.sjɔ̃ ak.tɥɛl u œ̃.ne.ta ak.tɥɛl a œ̃.ne.ʃɛk pa.se/', 'a ruh-lyay ün day-see-zyohⁿ pa-SAY | a ün see-twa-syohⁿ ak-TWEL | oo uhⁿ-nay-ta ak-TWEL | a uhⁿ-nay-shek pa-SAY', ['argument']),
  rule(1718, "Comment rendre l'argument prudent ?", 'Ajoute sans doute ou probablement : un passé imaginé ne se prouve pas.', 'Add sans doute or probablement: an imagined past cannot be proved.', '/a.ʒut sɑ̃ dut u pʁɔ.ba.blə.mɑ̃ œ̃ pa.se i.ma.ʒi.ne nə sə pʁuv pa/', 'a-zhoot sahⁿ DOOT | oo pro-ba-bluh-MAHⁿ | uhⁿ pa-say ee-ma-zhee-NAY | nuh suh proov PA', ['argument']),
  sent(1719, 'Si la ville avait écouté les commerçants, le quartier serait sans doute plus vivant.', 'If the city had listened to the shopkeepers, the district would probably be livelier.', '/si la vil a.vɛ.te.ku.te le kɔ.mɛʁ.sɑ̃ lə kaʁ.tje sə.ʁɛ sɑ̃ dut ply vi.vɑ̃/', 'see la veel a-veh-tay-koo-tay lay ko-mehr-SAHⁿ | luh kar-tyay suh-reh sahⁿ doot plü vee-VAHⁿ', ['argument', 'passe-present'], FCVDR),
  sent(1720, "Si l'école n'était pas si loin, les enfants y seraient allés à pied.", 'If the school were not so far away, the children would have walked there.', '/si le.kɔl ne.tɛ pa si lwɛ̃ le.zɑ̃.fɑ̃ i sə.ʁɛ.ta.le a pje/', 'see lay-kol nay-teh pa see LWEHⁿ | lay-zahⁿ-fahⁿ ee suh-reh-ta-lay a PYAY', ['argument', 'present-passe']),
  sent(1721, "Si nous avions agi plus tôt, nous n'en serions pas là.", 'If we had acted sooner, we would not be where we are now.', '/si nu.za.vjɔ̃.za.ʒi ply to nu nɑ̃ sə.ʁjɔ̃ pa la/', 'see noo-za-vyohⁿ-za-zhee plü TOH | noo nahⁿ suh-ryohⁿ pa LA', ['argument', 'passe-present']),
  sent(1722, 'On pourrait objecter que, si le tramway avait été construit, les impôts seraient plus élevés.', 'One could object that, if the tramway had been built, taxes would be higher.', '/ɔ̃ pu.ʁɛ ɔb.ʒɛk.te kə si lə tʁam.wɛ a.vɛ.te kɔ̃s.tʁɥi le.zɛ̃.po sə.ʁɛ ply.ze.lə.ve/', 'ohⁿ poo-reh ob-zhek-tay KUH | see luh tram-weh a-veh-tay kohⁿs-TRWEE | lay-zehⁿ-poh suh-reh plü-zay-luh-VAY', ['argument', 'passe-present']),
  sent(1723, "Si la décision avait été prise à temps, nous n'aurions pas perdu deux ans.", 'If the decision had been taken in time, we would not have lost two years.', '/si la de.si.zjɔ̃ a.vɛ.te pʁiz a tɑ̃ nu no.ʁjɔ̃ pa pɛʁ.dy dø.zɑ̃/', 'see la day-see-zyohⁿ a-veh-tay preez a TAHⁿ | noo noh-ryohⁿ pa pehr-dü duh-ZAHⁿ', ['argument', 'classique', 'passe']),
];

/* ── ACT 9 · AU CAS OÙ, À CONDITION QUE (RECONNAISSANCE) ────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1724, 'Prends un parapluie au cas où il pleuvrait.', 'Take an umbrella in case it rains.', '/pʁɑ̃.zœ̃ pa.ʁa.plɥi o ka.zu il plø.vʁɛ/', 'prahⁿ-zuhⁿ pa-ra-PLWEE | oh ka-zoo eel pluh-VREH', ['au-cas-ou'], FCVDR),
  sent(1725, 'Au cas où tu arriverais avant moi, la clé est sous le pot de fleurs.', 'In case you get there before me, the key is under the flowerpot.', '/o ka.zu ty a.ʁi.və.ʁɛ a.vɑ̃ mwa la kle ɛ su lə po də flœʁ/', 'oh ka-zoo tü a-ree-vuh-reh a-vahⁿ MWA | la klay eh soo luh poh duh FLEUR', ['au-cas-ou']),
  sent(1726, "J'ai gardé ton numéro au cas où j'aurais besoin d'aide.", 'I kept your number in case I needed help.', '/ʒe ɡaʁ.de tɔ̃ ny.me.ʁo o ka.zu ʒo.ʁɛ bə.zwɛ̃ dɛd/', 'zhay gar-day tohⁿ nü-may-ROH | oh ka-zoo zhoh-reh buh-zwehⁿ DED', ['au-cas-ou']),
  sent(1727, "Au cas où le vol serait annulé, l'agence vous rembourse.", 'Should the flight be cancelled, the agency refunds you.', '/o ka.zu lə vɔl sə.ʁɛ.ta.ny.le la.ʒɑ̃s vu ʁɑ̃.buʁs/', 'oh ka-zoo luh vol suh-reh-ta-nü-LAY | la-zhahⁿs voo rahⁿ-BOORSS', ['au-cas-ou']),
  sent(1728, "Je t'accompagne, à condition que tu conduises au retour.", 'I will come with you, provided you drive on the way back.', '/ʒə ta.kɔ̃.paɲ a kɔ̃.di.sjɔ̃ kə ty kɔ̃.dɥiz o ʁə.tuʁ/', 'zhuh ta-kohⁿ-PANY | a kohⁿ-dee-syohⁿ kuh tü kohⁿ-dweez oh ruh-TOOR', ['a-condition'], FCVDR),
  sent(1729, 'Le projet sera accepté, à condition que le budget soit respecté.', 'The project will be accepted, provided the budget is kept to.', '/lə pʁɔ.ʒɛ sə.ʁa ak.sɛp.te a kɔ̃.di.sjɔ̃ kə lə byd.ʒɛ swa ʁɛs.pɛk.te/', 'luh pro-zheh suh-ra ak-sep-TAY | a kohⁿ-dee-syohⁿ kuh luh büd-zheh swa res-pek-TAY', ['a-condition']),
  sent(1730, 'Tu peux emprunter ma voiture, à condition de me la rendre ce soir.', 'You can borrow my car, as long as you bring it back tonight.', '/ty pø ɑ̃.pʁœ̃.te ma vwa.tyʁ a kɔ̃.di.sjɔ̃ də mə la ʁɑ̃dʁ sə swaʁ/', 'tü puh ahⁿ-pruhⁿ-tay ma vwa-TÜR | a kohⁿ-dee-syohⁿ duh muh la rahⁿdr suh SWAR', ['a-condition']),
  rule(1731, 'Après au cas où, quel mode ?', 'Le conditionnel : au cas où il pleuvrait.', 'The conditional: au cas où il pleuvrait.', '/lə kɔ̃.di.sjɔ.nɛl o ka.zu il plø.vʁɛ/', 'luh kohⁿ-dee-syo-NEL | oh ka-zoo eel pluh-VREH', ['au-cas-ou']),
  rule(1732, 'Après à condition que, quel mode ?', 'Le subjonctif : à condition que tu viennes.', 'The subjunctive: à condition que tu viennes.', '/lə syb.ʒɔ̃k.tif a kɔ̃.di.sjɔ̃ kə ty vjɛn/', 'luh süb-zhohⁿk-TEEF | a kohⁿ-dee-syohⁿ kuh tü VYENN', ['a-condition']),
  rule(1733, 'Si, au cas où, à condition que : que dit chacun ?', 'Si pose une condition, au cas où prépare un imprévu, à condition que fixe une exigence.', 'Si sets a condition, au cas où prepares for the unexpected, à condition que lays down a requirement.', '/si poz yn kɔ̃.di.sjɔ̃ o ka.zu pʁe.paʁ œ̃.nɛ̃.pʁe.vy a kɔ̃.di.sjɔ̃ kə fiks y.nɛɡ.zi.ʒɑ̃s/', 'see pohz ün kohⁿ-dee-SYOHⁿ | oh ka-zoo pray-par uhⁿ-nehⁿ-pray-VÜ | a kohⁿ-dee-syohⁿ kuh feeks ü-neg-zee-ZHAHⁿS', ['au-cas-ou', 'a-condition']),
  sent(1734, 'Laisse la porte ouverte, au cas où le chat voudrait rentrer.', 'Leave the door open, in case the cat wants to come in.', '/lɛs la pɔʁ.tu.vɛʁt o ka.zu lə ʃa vu.dʁɛ ʁɑ̃.tʁe/', 'less la por-too-VEHRT | oh ka-zoo luh sha voo-dreh rahⁿ-TRAY', ['au-cas-ou']),
  sent(1735, "J'accepte l'offre, à condition que le salaire soit revu en janvier.", 'I accept the offer, provided the salary is reviewed in January.', '/ʒak.sɛpt lɔfʁ a kɔ̃.di.sjɔ̃ kə lə sa.lɛʁ swa ʁə.vy ɑ̃ ʒɑ̃.vje/', 'zhak-sept LOFR | a kohⁿ-dee-syohⁿ kuh luh sa-lehr swa ruh-vü ahⁿ zhahⁿ-VYAY', ['a-condition']),
  sent(1736, "Au cas où vous changeriez d'avis, voici ma carte.", 'In case you change your mind, here is my card.', '/o ka.zu vu ʃɑ̃.ʒə.ʁje da.vi vwa.si ma kaʁt/', 'oh ka-zoo voo shahⁿ-zhuh-ryay da-VEE | vwa-see ma KART', ['au-cas-ou'], FCVDR),
];

/* ── ACT 10 · LES PIÈGES ────────────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1737, 'Si j\'avais su que tu étais malade, je serais venu te voir.', 'If I had known you were ill, I would have come to see you.', '/si ʒa.vɛ sy kə ty e.tɛ ma.lad ʒə sə.ʁɛ və.ny tə vwaʁ/', 'see zha-veh sü kuh tü ay-teh ma-LAD | zhuh suh-reh vuh-nü tuh VWAR', ['piege', 'classique', 'passe']),
  sent(1738, "Si j'avais dormi davantage, je serais moins fatigué ce matin.", 'If I had slept more, I would be less tired this morning.', '/si ʒa.vɛ dɔʁ.mi da.vɑ̃.taʒ ʒə sə.ʁɛ mwɛ̃ fa.ti.ɡe sə ma.tɛ̃/', 'see zha-veh dor-mee da-vahⁿ-TAZH | zhuh suh-reh mwehⁿ fa-tee-gay suh ma-TEHⁿ', ['piege', 'passe-present'], FCVDR),
  sent(1739, "Si tu étais venu hier, tu connaîtrais déjà toute l'équipe.", 'If you had come yesterday, you would already know the whole team.', '/si ty e.tɛ və.ny jɛʁ ty kɔ.nɛ.tʁɛ de.ʒa tut le.kip/', 'see tü ay-teh vuh-nü YEHR | tü ko-neh-treh day-zha toot lay-KEEP', ['piege', 'passe-present']),
  sent(1740, 'Si nous avions un jardin, nous aurions fêté ton anniversaire dehors.', 'If we had a garden, we would have celebrated your birthday outside.', '/si nu.za.vjɔ̃.zœ̃ ʒaʁ.dɛ̃ nu.zo.ʁjɔ̃ fɛ.te tɔ̃.na.ni.vɛʁ.sɛʁ də.ɔʁ/', 'see noo-za-vyohⁿ-zuhⁿ zhar-DEHⁿ | noo-zoh-ryohⁿ feh-tay toh-na-nee-vehr-sehr duh-OR', ['piege', 'present-passe']),
  sent(1741, "Si le patron était moins exigeant, Paul n'aurait pas démissionné.", 'If the boss were less demanding, Paul would not have resigned.', '/si lə pa.tʁɔ̃ e.tɛ mwɛ̃.zɛɡ.zi.ʒɑ̃ pɔl no.ʁɛ pa de.mi.sjɔ.ne/', 'see luh pa-trohⁿ ay-teh mwehⁿ-zeg-zee-ZHAHⁿ | pol noh-reh pa day-mee-syo-NAY', ['piege', 'present-passe'], FCVDR),
  sent(1742, 'Si tu avais lu la consigne, tu saurais quoi faire maintenant.', 'If you had read the instructions, you would know what to do now.', '/si ty a.vɛ ly la kɔ̃.siɲ ty so.ʁɛ kwa fɛʁ mɛ̃t.nɑ̃/', 'see tü a-veh lü la kohⁿ-SEENY | tü soh-reh kwa fehr mehⁿt-NAHⁿ', ['piege', 'passe-present']),
  rule(1743, '« Si j\'aurais su » : juste ou faux ?', 'Faux. Après si, ni conditionnel présent ni conditionnel passé : si j\'avais su.', 'Wrong. After si, neither the present nor the past conditional: si j\'avais su.', '/fo a.pʁɛ si ni kɔ̃.di.sjɔ.nɛl pʁe.zɑ̃ ni kɔ̃.di.sjɔ.nɛl pa.se si ʒa.vɛ sy/', 'FOH | a-preh see nee kohⁿ-dee-syo-nel pray-ZAHⁿ | nee kohⁿ-dee-syo-nel pa-SAY | see zha-veh SÜ', ['piege', 'si-j-aurais']),
  rule(1744, "Ta phrase parle d'aujourd'hui, mais ton résultat est au conditionnel passé. Que fais-tu ?", "Tu passes le résultat au conditionnel présent : l'horloge de ce côté dit maintenant.", 'You move the result to the present conditional: that side\'s clock says now.', '/ty pas lə ʁe.zyl.ta o kɔ̃.di.sjɔ.nɛl pʁe.zɑ̃ lɔʁ.lɔʒ də sə ko.te di mɛ̃t.nɑ̃/', 'tü pass luh ray-zül-TA | oh kohⁿ-dee-syo-nel pray-ZAHⁿ | lor-lozh duh suh koh-TAY | dee mehⁿt-NAHⁿ', ['piege', 'horloge']),
  sent(1745, 'Si elle avait gardé son ancien numéro, je pourrais la joindre.', 'If she had kept her old number, I could reach her.', '/si ɛ.la.vɛ ɡaʁ.de sɔ̃.nɑ̃.sjɛ̃ ny.me.ʁo ʒə pu.ʁɛ la ʒwɛ̃dʁ/', 'see el-a-veh gar-day soh-nahⁿ-syehⁿ nü-may-ROH | zhuh poo-reh la ZHWEHⁿDR', ['piege', 'passe-present']),
  sent(1746, 'Si je savais lire une carte, nous ne nous serions pas perdus.', 'If I could read a map, we would not have got lost.', '/si ʒə sa.vɛ liʁ yn kaʁt nu nə nu sə.ʁjɔ̃ pa pɛʁ.dy/', 'see zhuh sa-veh leer ün KART | noo nuh noo suh-ryohⁿ pa pehr-DÜ', ['piege', 'present-passe']),
  sent(1747, "Si tu n'avais pas oublié les billets, nous serions dans le train.", 'If you had not forgotten the tickets, we would be on the train.', '/si ty na.vɛ pa.zu.bli.je le bi.jɛ nu sə.ʁjɔ̃ dɑ̃ lə tʁɛ̃/', 'see tü na-veh pa-zoo-blee-yay lay bee-YEH | noo suh-ryohⁿ dahⁿ luh TREHⁿ', ['piege', 'passe-present']),
  rule(1748, 'Au cas où avec le subjonctif, à condition que avec l\'indicatif : juste ?', 'Non : au cas où prend le conditionnel, à condition que le subjonctif.', 'No: au cas où takes the conditional, à condition que the subjunctive.', '/nɔ̃ o ka.zu pʁɑ̃ lə kɔ̃.di.sjɔ.nɛl a kɔ̃.di.sjɔ̃ kə lə syb.ʒɔ̃k.tif/', 'NOHⁿ | oh ka-zoo prahⁿ luh kohⁿ-dee-syo-NEL | a kohⁿ-dee-syohⁿ kuh luh süb-zhohⁿk-TEEF', ['piege', 'au-cas-ou', 'a-condition']),
  sent(1749, "Si j'avais été à ta place, j'aurais refusé.", 'If I had been in your place, I would have refused.', '/si ʒa.vɛ.ze.te a ta plas ʒo.ʁɛ ʁə.fy.ze/', 'see zha-veh-zay-tay a ta PLASS | zhoh-reh ruh-fü-ZAY', ['piege', 'classique', 'passe']),
  sent(1750, "Si le chauffage marchait, nous n'aurions pas eu froid cette nuit.", 'If the heating worked, we would not have been cold last night.', '/si lə ʃo.faʒ maʁ.ʃɛ nu no.ʁjɔ̃ pa.zy fʁwa sɛt nɥi/', 'see luh shoh-fazh mar-SHEH | noo noh-ryohⁿ pa-zü frwa set NWEE', ['piege', 'present-passe']),
  sent(1751, 'Si Inès avait passé son permis, elle nous conduirait à l\'aéroport.', 'If Inès had passed her driving test, she would drive us to the airport.', '/si i.nɛs a.vɛ pa.se sɔ̃ pɛʁ.mi ɛl nu kɔ̃.dɥi.ʁɛ a la.e.ʁɔ.pɔʁ/', 'see ee-ness a-veh pa-say sohⁿ pehr-MEE | el noo kohⁿ-dwee-reh a la-ay-ro-POR', ['piege', 'passe-present']),
];

/* ── ACT 11 · TA MISSION ────────────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1752, "Il y a huit ans, j'ai refusé un poste à Lyon pour rester près de ma famille.", 'Eight years ago, I turned down a job in Lyon to stay near my family.', '/il ja ɥi.tɑ̃ ʒe ʁə.fy.ze œ̃ pɔst a ljɔ̃ puʁ ʁɛs.te pʁɛ də ma fa.mij/', 'eel ya wee-TAHⁿ | zhay ruh-fü-zay uhⁿ post a LYOHⁿ | poor res-tay preh duh ma fa-MEEY', ['mission', 'decision']),
  sent(1753, "Si j'avais accepté, je gagnerais sans doute mieux ma vie aujourd'hui.", 'If I had accepted, I would probably earn a better living today.', '/si ʒa.vɛ.zak.sɛp.te ʒə ɡa.ɲə.ʁɛ sɑ̃ dut mjø ma vi o.ʒuʁ.dɥi/', 'see zha-veh-zak-sep-TAY | zhuh ga-nyuh-reh sahⁿ doot myuh ma vee oh-zhoor-DWEE', ['mission', 'passe-present'], FCVDR),
  sent(1754, "En revanche, je n'aurais pas vu grandir mes neveux.", 'On the other hand, I would not have seen my nephews grow up.', '/ɑ̃ ʁə.vɑ̃ʃ ʒə no.ʁɛ pa vy ɡʁɑ̃.diʁ me nə.vø/', 'ahⁿ ruh-VAHⁿSH | zhuh noh-reh pa vü grahⁿ-deer may nuh-VUH', ['mission', 'passe']),
  sent(1755, "Si j'étais plus ambitieux, j'aurais sans doute fait un autre choix.", 'If I were more ambitious, I would probably have made a different choice.', '/si ʒe.tɛ ply.zɑ̃.bi.sjø ʒo.ʁɛ sɑ̃ dut fɛ œ̃.no.tʁə ʃwa/', 'see zhay-teh plü-zahⁿ-bee-SYUH | zhoh-reh sahⁿ doot feh uhⁿ-noh-truh SHWA', ['mission', 'present-passe'], FCVDR),
  sent(1756, "À l'époque, cette décision m'a coûté.", 'At the time, this decision cost me.', '/a le.pɔk sɛt de.si.zjɔ̃ ma ku.te/', 'a lay-POK | set day-see-zyohⁿ ma koo-TAY', ['mission', 'marqueur']),
  sent(1757, 'Avec le recul, je referais le même choix.', 'Looking back, I would make the same choice again.', '/a.vɛk lə ʁə.kyl ʒə ʁə.fə.ʁɛ lə mɛm ʃwa/', 'a-vek luh ruh-KÜL | zhuh ruh-fuh-reh luh mem SHWA', ['mission', 'bilan']),
  sent(1758, "Si c'était à refaire, je resterais.", 'If I had it to do again, I would stay.', '/si se.tɛ a ʁə.fɛʁ ʒə ʁɛs.tə.ʁɛ/', 'see say-teh a ruh-FEHR | zhuh res-tuh-REH', ['mission', 'bilan']),
  sent(1759, "Si je n'étais pas resté, je ne connaîtrais pas mes amis d'aujourd'hui.", 'If I had not stayed, I would not know the friends I have today.', '/si ʒə ne.tɛ pa ʁɛs.te ʒə nə kɔ.nɛ.tʁɛ pa me.za.mi do.ʒuʁ.dɥi/', 'see zhuh nay-teh pa res-TAY | zhuh nuh ko-neh-treh pa may-za-mee doh-zhoor-DWEE', ['mission', 'passe-present'], FCVDR),
  sent(1760, 'Je garde toutefois une porte ouverte, au cas où une occasion se présenterait.', 'I still keep a door open, though, in case an opportunity comes up.', '/ʒə ɡaʁd tut.fwa yn pɔʁ.tu.vɛʁt o ka.zu y.nɔ.ka.zjɔ̃ sə pʁe.zɑ̃t.ʁɛ/', 'zhuh gard toot-FWA | ün por-too-VEHRT | oh ka-zoo ü-no-ka-zyohⁿ suh pray-zahⁿt-REH', ['mission', 'au-cas-ou']),
  rule(1761, 'Un texte de réflexion sur une décision : dans quel ordre ?', "La décision, ses conséquences d'alors, ses conséquences d'aujourd'hui, puis ton bilan.", 'The decision, its consequences then, its consequences now, then your assessment.', '/la de.si.zjɔ̃ se kɔ̃.se.kɑ̃s da.lɔʁ se kɔ̃.se.kɑ̃s do.ʒuʁ.dɥi pɥi tɔ̃ bi.lɑ̃/', 'la day-see-ZYOHⁿ | say kohⁿ-say-kahⁿs da-LOR | say kohⁿ-say-kahⁿs doh-zhoor-DWEE | pwee tohⁿ bee-LAHⁿ', ['mission', 'plan']),
  sent(1762, "Si j'avais fait ce choix, ma vie serait très différente.", 'If I had made that choice, my life would be very different.', '/si ʒa.vɛ fɛ sə ʃwa ma vi sə.ʁɛ tʁɛ di.fe.ʁɑ̃t/', 'see zha-veh feh suh SHWA | ma vee suh-reh treh dee-fay-RAHⁿT', ['mission', 'passe-present']),
  sent(1763, "Si j'avais été moins prudent, j'aurais tout quitté.", 'If I had been less cautious, I would have left everything behind.', '/si ʒa.vɛ.ze.te mwɛ̃ pʁy.dɑ̃ ʒo.ʁɛ tu ki.te/', 'see zha-veh-zay-tay mwehⁿ prü-DAHⁿ | zhoh-reh too kee-TAY', ['mission', 'classique', 'passe']),
  sent(1764, "Si je n'avais pas cette famille, je serais parti sans hésiter.", 'If I did not have this family, I would have left without hesitating.', '/si ʒə na.vɛ pa sɛt fa.mij ʒə sə.ʁɛ paʁ.ti sɑ̃.ze.zi.te/', 'see zhuh na-veh pa set fa-MEEY | zhuh suh-reh par-tee sahⁿ-zay-zee-TAY', ['mission', 'present-passe']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS
 *
 *  Held here so the readings, the quiz and the task cannot drift apart.
 *  Acts 3 to 10 each end on a 60 to 120 word text (B2-BUILD-LOG « In a
 *  text »): the learner completes or rewrites it so that it holds.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1. 147 words. Three kinds of si at work: two mixed, one classic. */
export const SALON_TEXT = "Salon de l'emploi, Montréal, un jeudi après-midi. Entre deux rendez-vous, Mme Lavoie, conseillère d'orientation, relit les notes qu'elle a prises depuis le matin.\n\nPremier candidat, un technicien de quarante ans : « Si j'avais continué mes études, j'aurais un meilleur poste aujourd'hui. » Il regrette une décision ancienne, et il en voit les effets chaque jour.\n\nDeuxième candidate, une jeune comptable : « Si je parlais mieux anglais, j'aurais obtenu ce poste. » Son anglais, elle le travaille encore ; le poste, lui, est déjà parti chez quelqu'un d'autre.\n\nTroisième candidat, un étudiant : « Si j'avais plus de temps, je ferais une formation. » Rien de passé ici : il parle de sa vie actuelle, d'un bout à l'autre de la phrase.\n\nMme Lavoie souligne les deux premières phrases au crayon. Dans chacune, une moitié regarde hier et l'autre aujourd'hui. Elle écrit dans la marge : « Deux horloges. » Puis elle referme son carnet et appelle la personne suivante.";

/** Act 3. 90 words. */
export const TEXTE_3 = "Il y a cinq ans, Julien a quitté la faculté de droit pour ouvrir une boulangerie à Lausanne. Sa mère le lui reproche encore : « Si tu avais fini ton droit, tu serais avocat aujourd'hui, et tu ne te lèverais pas à quatre heures. » Julien sourit en pétrissant sa pâte : « C'est vrai. Si j'étais resté à la faculté, je gagnerais peut-être mieux ma vie. Mais je ne connaîtrais pas mes clients par leur prénom. » Chaque dimanche, la discussion recommence. Et chaque dimanche, Julien apporte à sa mère un pain encore chaud.";

/** Act 4. 87 words. */
export const TEXTE_4 = "Awa a perdu ses clés trois fois ce mois-ci. Mardi, elle a attendu le serrurier deux heures sur le palier. Son colocataire, Moussa, n'est pas surpris : « Si tu étais plus ordonnée, tu ne les aurais pas oubliées au café. » Awa proteste : « Si tu rangeais le salon, j'aurais trouvé le double tout de suite. » Ils rient tous les deux. Ce soir, Moussa accroche une petite boîte près de la porte. « Si elle avait été là plus tôt, tu n'aurais jamais appelé le serrurier. » Awa y dépose ses clés.";

/** Act 5. 97 words. */
export const TEXTE_5 = "Karim est arrivé à Montréal il y a douze ans, avec deux valises et un diplôme d'ingénieur. Aujourd'hui, il dirige une petite équipe. Il pense parfois à Oran. S'il n'était pas parti, il habiterait encore près de la mer, il verrait sa mère chaque dimanche, et il n'aurait pas connu ses hivers à moins trente. S'il n'avait pas rencontré Sophie la première année, il ne serait sans doute pas resté. Et s'il supportait moins bien le froid, il serait peut-être rentré depuis longtemps. Ce soir, en regardant la neige, il se dit qu'il referait le même voyage.";

/** Act 6. 78 words. */
export const TEXTE_6 = "Ce matin, Léo est arrivé en retard à son entretien. Son amie Nadia l'attendait devant l'immeuble. « Si tu avais préparé tes affaires hier soir, tu serais arrivé à l'heure ce matin. Et si tu avais répondu à l'annonce l'an dernier, tu travaillerais déjà dans cette entreprise aujourd'hui. » Léo soupire : « Si j'étais moins distrait de nature, je n'aurais pas oublié ma carte de bus. » Nadia lui tend un café. « Si l'entretien s'est bien passé, on fête ça ce soir. »";

/** Act 7. 95 words. */
export const TEXTE_7 = "Chère Inès,\n\nTu me demandes ce que je pense de ta dispute avec Clara. Si j'étais toi, je l'aurais appelée le soir même : les mots de colère s'effacent mieux quand on n'attend pas. Si tu l'avais fait, vous seriez sans doute réconciliées aujourd'hui. Mais tu es fière, et je te connais : si tu étais moins fière, tu lui aurais déjà écrit. Il n'est pas trop tard. Si j'étais toi, je lui écrirais dès ce soir quelques lignes simples. Et si elle ne répond pas tout de suite, laisse-lui un peu de temps.\n\nJe t'embrasse,\nMarie";

/** Act 8. 201 words. An opinion column, the anchor text of the act. */
export const CHRONIQUE_TEXT = "Il y a dix ans, le conseil municipal a renoncé au tramway. Le projet coûtait cher, disait-on, et les voitures suffisaient. Dix ans plus tard, chaque matin, les bouchons s'étirent sur trois kilomètres à l'entrée du centre.\n\nSi la ville avait investi dans le tramway à l'époque, les bouchons seraient sans doute moins graves aujourd'hui. Ce n'est pas une certitude : un passé imaginé ne se prouve pas. Mais les villes voisines qui ont fait ce choix respirent mieux.\n\nOn pourrait objecter que, si le tramway avait été construit, les impôts seraient plus élevés. C'est possible. Certes, si rien n'avait été fait, la situation serait pire : les pistes cyclables, ouvertes il y a cinq ans, ont aidé. Mais elles ne suffisent pas.\n\nIl y a un second problème, qui n'est pas d'hier. Si les loyers du centre étaient moins élevés, les jeunes familles ne seraient pas parties en banlieue, et elles n'auraient pas eu besoin de deux voitures. Les deux erreurs se nourrissent l'une l'autre.\n\nNous ne pouvons pas refaire le passé. Nous pouvons en revanche décider aujourd'hui de ce que diront les habitants dans dix ans. Si nous agissions maintenant, ils ne répéteraient pas notre phrase : si seulement on avait su.";

/** Act 8. 99 words. */
export const TEXTE_8 = "Ma ville a fermé sa piscine municipale il y a six ans pour faire des économies. Je pense que c'était une erreur. Si la piscine n'avait pas fermé, les enfants du quartier sauraient nager aujourd'hui, et les clubs de natation n'auraient pas disparu. Certes, si la ville l'avait gardée, elle aurait dû financer de lourds travaux. Mais si les élus étaient plus attentifs aux besoins des familles, ils auraient cherché une autre solution, comme un partenariat avec la région. Aujourd'hui, les écoles louent des bassins à vingt kilomètres. Si nous avions protesté à temps, nous n'en serions pas là.";

/** Act 9. 90 words. */
export const TEXTE_9 = "Pour la randonnée de samedi, le guide a envoyé ses consignes. « Prenez un imperméable, au cas où il pleuvrait sur le col. Au cas où vous seriez en retard, appelez-moi au numéro ci-dessous. Les enfants peuvent venir, à condition qu'un adulte les accompagne. Nous partirons à sept heures, à condition que la météo soit correcte. Si le vent est trop fort, nous prendrons le sentier du bas. » Élise relit le message et sourit : si elle avait reçu ces consignes l'an dernier, elle n'aurait pas marché six heures sous la pluie.";

/** Act 10. 156 words. The draft email and the corrections, the anchor text. */
export const COURRIEL_TEXT = "Paul écrit à son ancienne cheffe pour lui demander une lettre de recommandation. Avant l'envoi, il fait relire son brouillon par son amie Chloé.\n\nLe brouillon dit : « Si j'aurais su que vous partiez, je vous aurais remerciée avant votre départ. Si j'avais suivi vos conseils à l'époque, j'aurais eu un meilleur poste aujourd'hui. Si j'étais plus patient, je n'aurais pas quitté l'équipe si vite. »\n\nChloé prend un crayon. « La première phrase : jamais de conditionnel après si. On écrit si j'avais su. La deuxième : tu parles d'aujourd'hui, donc le résultat regarde aujourd'hui. On écrit j'aurais un meilleur poste. »\n\nPaul hésite sur la troisième. Chloé la relit deux fois. « Celle-là est juste. Tu parles de ton caractère, qui n'a pas changé, et d'un départ qui est passé. Deux horloges, deux temps. »\n\nPaul corrige, relit une dernière fois et envoie le message. Le lendemain, la réponse arrive : « Avec plaisir. Si vous étiez resté, je vous aurais proposé une promotion. »";

/** Act 10. 79 words, written WITH three errors: the learner rewrites it. */
export const TEXTE_10 = "Salut Tom,\n\nJe t'écris pour m'excuser. Si j'aurais su que ton train arrivait à midi, je serais venu te chercher. Si j'avais noté l'heure hier, je n'aurais pas été si gêné aujourd'hui, et tu n'aurais pas attendu une heure sous la pluie. Si j'aurais une voiture, tout aurait été plus simple. Si j'étais moins distrait, je n'aurais pas oublié notre rendez-vous. Pour me faire pardonner, je t'invite au restaurant samedi, au cas où tu serais libre.\n\nÀ bientôt,\nLucas";

/** Act 11. 195 words. Karim's reflection: the model the learner imitates. */
export const MODELE_TEXT = "Il y a douze ans, j'ai quitté Oran pour Montréal. J'avais vingt-six ans, un diplôme d'ingénieur et deux valises. Ma mère pleurait à l'aéroport, et moi, je n'étais sûr de rien.\n\nÀ l'époque, cette décision m'a coûté cher. La première année, j'ai travaillé dans un entrepôt, la nuit. Si j'étais resté à Oran, j'aurais trouvé un poste d'ingénieur tout de suite, grâce à mon oncle. Si j'étais moins têtu, je serais sans doute rentré avant le premier hiver.\n\nAujourd'hui, pourtant, les conséquences ont changé de sens. Si je n'étais pas parti, je ne dirigerais pas cette équipe, et je ne parlerais pas trois langues. Surtout, si je n'avais pas pris ce vol, je ne connaîtrais pas Sophie, et nos deux enfants ne seraient pas là.\n\nJe ne veux pas dire que tout a été facile. Certes, si j'avais mieux préparé mon départ, j'aurais évité bien des erreurs. Mais avec le recul, je referais le même choix. Si c'était à refaire, je partirais peut-être un an plus tard, à condition que ma mère soit moins seule.\n\nJe garde toutefois une porte ouverte, au cas où ma famille aurait besoin de moi. Oran n'est jamais très loin.";

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. WHAT THE APP CAN AND CANNOT TEST HERE
 *
 *  fold() = NFD, strip combining marks, lowercase, strip . , ! ? ; : « » ( )
 *  [ ] and apostrophes and hyphens, strip whitespace. Measured consequences:
 *
 *    serais / aurais été        different WORDS: typeable and audible
 *    parlerais / aurais parlé   different WORDS: typeable and audible
 *    j'avais su / j'aurais su   different letters: typeable, audible
 *    pleuvrait / pleuve         different letters: typeable
 *    serais / serait           different letters: typeable, the ear cannot
 *
 *  So no listenChoose turns on the person ending of a conditional; the ear
 *  questions turn on the AUXILIARY PLUS PARTICIPLE (aurait été against
 *  serait), which every speaker separates.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Error forms the lesson prints on purpose, only where it marks them wrong. */
export const WRONG_FORMS = [
  "si j'aurais su", "si j'aurais", "si tu aurais été", 'au cas où il pleuve',
  "à condition que tu viens", "j'aurais eu un meilleur poste aujourd'hui",
] as const;
