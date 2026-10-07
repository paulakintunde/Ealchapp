// c1.14.l1 « Analyser une œuvre » — the authored corpus, the imports, the
// anchor texts and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (the workshop shape: a TEXT and a MOVE
// per act) on top of B1-BUILD-PLAYBOOK.md, with the C1 rules of
// C1-BUILD-LOG.md (« What is different at C1 », decisions 1-39; the wave 5
// brief sets the home). Structural models: b2.30 (`../b2/lire-litterature-*`)
// and the reviewed C1 workshop c1.13 (`./references-historiques-*`).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (later lessons may import REFRAME from this file and quote
// it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 14 of the C1 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   FROM « J’AI AIMÉ » TO ARGUED ANALYSIS, ACROSS THE ARTS. The learner
//   treats an emotion as a clue, finds in the work the means that produce
//   it (impression, observation, effect, judgement), names those means in
//   the language of film (plan, cadrage, champ / contrechamp, hors-champ,
//   montage, raccord, plan-séquence, bande-son), of painting and
//   photography (composition, premier plan / arrière-plan, point de fuite,
//   clair-obscur, touche, aplat), of music and the stage in outline
//   (crescendo, orchestration, mise en scène, scénographie, jeu), and
//   writes a critique that weighs strengths against weaknesses.
//
//     act 1   the problem: « J’ai adoré » posted as a review; recap of b2.30
//     act 2   the four steps: impression, observation, effect, judgement
//     act 3   the shot and the frame (Akerman, 1975, described)
//     act 4   champ, contrechamp, hors-champ (Sembène, 1966, described)
//     act 5   editing: raccord, faux raccord, plan-séquence (Godard, 1960)
//     act 6   the soundtrack: in / off, voix off, silence, direct sound
//             (Perrault and Brault, 1963)
//     act 7   composition in an image (Seydou Keïta, Bamako, 1948-1962)
//     act 8   light and brushwork (La Tour, Monet 1872-1874, Magritte 1929,
//             Borduas 1948)
//     act 9   music and the stage, in outline (Ravel 1928, Tremblay 1968)
//     act 10  weighing strengths and weaknesses: concession, parti pris
//     act 11  the critique as a genre: hook, situating, analysis, verdict;
//             « divulgâcher » (OQLF)
//     act 12  the task: a 250-400 word critique of an invented film whose
//             press notes are printed in the brief
//
//   NOT OWNED, CITED BY TRAIL POSITION ONLY (act 1 recaps, never re-teaches):
//     - b2.30 « Lire un texte littéraire » (« la leçon 30 du B2 »): narrator,
//       focalisation, analepse, ellipse, tonalités, images with effect,
//       incipit and chute, the formulas and present tense of commentary.
//       Its rows .1407 .1408 .1409 .1434 .1461 .1498 .1535 .1562 .1572 are
//       reused; its reframe is quoted in act 1.
//     - c1.24 « Analyser la presse » (« la leçon 24 du C1 », live): framing
//       in the press (« le cadrage » as a metaphor, « hors champ »). Act 3
//       gives the word back its literal, cinematic sense and cites c1.24;
//       rows .2152 and .2008 are reused.
//     - c1.20 (live) owns irony and présupposé; c1.13 historical references;
//       c1.16 « le beau / le sublime » as headwords: none is taught here.
//     - c1.19 will own stylistic figures as literary effect.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED (Postgres read 2026-10-06 inside BEGIN TRANSACTION READ ONLY
//      … COMMIT, no SET; the local seed is a cut)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `culture-profonde` (« La culture en profondeur », culture,
//     c1-c2). Rows: c1 161 (.001-.161, legacy reaction and critique lines),
//     plus c1.13's block .1000-.1199 (draft, not in Postgres yet). ZERO rows
//     at .1200-.1399 at any level (probe, 2026-10-06).
//
//  2. ID BLOCK: `fr.c1.culture-profonde.1200` to `.1399` AND NOTHING ELSE
//     (wave 5 setup). Rows run act by act; gaps are deliberate.
//
//  3. REUSED ROWS (§F). Twelve are in seedPlusPacks() and printed through
//     `src()`. Seven are LEGACY C1 ROWS, PUBLISHED IN POSTGRES BUT ABSENT
//     FROM THE SEED CUT (fr.c1.culture-profonde .014 .017 .019 .027 .037
//     .062 .118): they ride in `DB_ONLY_ROWS`, fr / en / drills copied
//     verbatim from Postgres on 2026-10-06. Five carry straight apostrophes
//     and none has ipa: they need the decision 13 typography edit at the
//     import, like every Postgres-only reused row. They are never quoted
//     inside a scenario turn.
//
//  4. NO AUTHORED ROW REPEATS A PUBLISHED HEADWORD. Probed and absent from
//     Postgres before authoring: plan-séquence, contrechamp, hors-champ (as a
//     noun), gros plan, plan large, clair-obscur, premier plan, arrière-plan,
//     bande-son. Present and therefore NOT authored again: « le montage »
//     (fr.b1.cinema.023), « la bande originale » (fr.b1.cinema.024), « la
//     mise en scène » (fr.b2.rp-loisirs.003, reused), « la nature morte »
//     (fr.b2.musees.048), « le chef-d’œuvre » (fr.b1.musees.002).
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR: a real
//     /n/ or /m/ after a vowel is doubled: scène SENN, plane PLANN, homme
//     OMM, Keïta keh-ee-TA, Akerman a-kehr-MANN, Sembène sahⁿ-BENN, Bamako
//     ba-ma-KOH, Ravel ra-VEL, Tremblay trahⁿ-BLEH. No U+203F tie anywhere.
//
//  6. EVERY TEXT IN §I IS ORIGINAL, WRITTEN FOR THE LESSON (« texte original
//     écrit pour la leçon »). Films and post-1950 works are DESCRIBED, never
//     quoted. Invented outlets, places, people and works: L’Œil du dimanche
//     (a Montréal cultural magazine), Ciné-club du Plateau, Radio Passerelle,
//     the Centre d’art de Port-Mauve, Le Fil culturel; the people Solange
//     Bérubé, Théo Lavallée, Nora Belkacem, Félix Gauthier-Roy, Mireille
//     Aubry, Yanis Ferrer, Léa Castonguay, Khadija Sarr, Ndèye (a character),
//     Céleste Ouimet; the works « La Saison des verglas », « Ce que la mer
//     rapporte », « Les Routes secondaires », « Marée basse ». No living
//     politician. No living director is named; one living playwright is
//     named as a fact of theatre history (Michel Tremblay, open question 3).
//     No real outlet is quoted.
//
//  7. FACT CHECK LIST, with the source checked for each (2026-10-06).
//     NO QUOTATION OF ANY WORK. The only words cited from real works are
//     TITLES (« Impression, soleil levant », « La Trahison des images »,
//     « Refus global », « La Noire de… », « À bout de souffle », « Pour la
//     suite du monde », « Les Belles-sœurs », « Jeanne Dielman, 23, quai du
//     Commerce, 1080 Bruxelles », « Boléro », « La Madeleine à la
//     veilleuse »). Magritte's painted sentence is described, not quoted.
//
//     FILM
//       F1. Chantal Akerman (Belgian, d. 2015), « Jeanne Dielman, 23, quai du
//           Commerce, 1080 Bruxelles », 1975; Delphine Seyrig; three days of
//           a widowed housewife's routine; fixed frontal camera at eye level,
//           long takes; just under three and a half hours; first in the
//           Sight and Sound critics' poll of 2022, the first film by a woman
//           to top it. BFI:
//           https://www.bfi.org.uk/sight-and-sound/features/greatest-film-all-time-jeanne-dielman-23-quai-du-commerce-1080-bruxelles
//           and La Libre Belgique, 2 Dec 2022:
//           https://www.lalibre.be/culture/cinema/2022/12/02/un-film-belge-designe-meilleur-film-de-tous-les-temps-HPMRBW7XOFBB5JW7DRJOV4KEJE/
//       F2. Ousmane Sembène (Senegalese, d. 2007), « La Noire de… », 1966: a
//           young Senegalese woman follows her French employers to Antibes,
//           where she is reduced to housework; often presented as the first
//           feature film by a sub-Saharan African director; prix Jean-Vigo
//           1966; much of the film takes place inside the Antibes flat
//           (VERIFIED at the pre-review: Diouana is shut in the flat; 65 min;
//           https://ifi.ie/film/la-noire-de/). SenePlus /
//           La Libre (Cinémathèque française tribute,
//           2023): https://www.seneplus.com/node/205248 and
//           https://www.lalibre.be/culture/2023/01/03/la-cinematheque-francaise-salue-sembene-ousmane-pionnier-du-cinema-africain-HE746BPGEFGQRPFU2HEHM3IAZ4/
//       F3. Jean-Luc Godard (Franco-Swiss, d. 13 Sept 2022 at Rolle),
//           « À bout de souffle », 1960, his first feature: jump cuts and
//           deliberate mismatches that make the cut visible; prix Jean-Vigo
//           1960. Berlinale 2025 note and Senses of Cinema:
//           https://berlinale.de/en/2025/topics/a-bout-de-souffle-1960.html
//           https://www.sensesofcinema.com/2002/cteq/breathless/ ; death:
//           https://lepetitjournal.com/expat-mag/culture/mort-de-jean-luc-godard-le-dynamiteur-du-cinema-346080
//       F4. « Pour la suite du monde », 1963, ONF, Pierre Perrault and Michel
//           Brault (with Marcel Carrière, credited as co-director by some
//           sources); shot on the île aux Coudres in 1961-1962 (pre-review
//           correction: the text said « En 1962 », now « Au début des années
//           1960 »), the islanders revive the beluga fishery; a classic of
//           direct cinema; first Canadian film shown IN COMPETITION at
//           Cannes, 1963 (https://en.wikipedia.org/wiki/Pour_la_suite_du_monde).
//           Encyclopédie canadienne:
//           https://thecanadianencyclopedia.ca/en/article/pierre-perrault
//       F5. 28 décembre 1895, the Lumière brothers' first public paying
//           screening, Salon indien du Grand Café, boulevard des Capucines,
//           Paris (ten films; 33 spectators the first evening). Hérodote:
//           https://www.herodote.net/28_decembre_1895-evenement-18951228.php
//           (used in sheet-cinema only).
//       F6. Definitions: plan-séquence, plural « plans-séquences », « plan
//           obtenu en filmant toute une séquence sans arrêter la caméra »
//           (Larousse: https://www.larousse.fr/dictionnaires/francais/plan-s%C3%A9quence/61397);
//           contrechamp (Larousse / Universalis:
//           https://www.universalis.fr/dictionnaire/contrechamp/); hors-champ
//           (glossaire Cinéma parlant:
//           https://www.cinemaparlant.com/fichesactivites/ft_glossaire.pdf).
//
//     PAINTING AND PHOTOGRAPHY
//       P1. Seydou Keïta (Malian, d. 2001), studio in Bamako 1948-1962;
//           patterned fabric backdrops (a fringed bedspread 1948-1954, then
//           fabrics each kept 2 to 4 years, which helps date the prints).
//           Props LENT by the studio (pre-review: the text had the sitters
//           bringing them): watches, pens, a radio set, a telephone, plastic
//           flowers, his own Vespa (https://www.vlisco.com/heritage/seydou-keita).
//           The studio opened in 1948; he took a government post in 1962 and
//           it closed in 1963, so « 1948-1962 » is his working span there.
//           Galerie Nathalie Obadia press text and Magnin-A:
//           https://nathalieobadia.com/fr/exhibitions/303-seydou-keita/press_release_text
//           https://magnin-a.com/en/artists/81-seydou-keita
//       P2. Georges de La Tour (1593-1652), « La Madeleine à la veilleuse »,
//           c. 1638-1640, Louvre; night scenes lit by a candle; a meditative
//           clair-obscur after Caravaggio. La Libre, 10 Sept 2025 (Jacquemart-
//           André exhibition): https://www.lalibre.be/culture/arts/2025/09/10/georges-de-la-tour-lincomparable-maitre-de-lombre-et-la-lumiere-QBSFNZ4HGJBAXDEU7PELTSYSE4/
//       P3. Claude Monet, « Impression, soleil levant », 1872, the port of Le
//           Havre; shown in April 1874 in Paris; Louis Leroy's mocking
//           article in Le Charivari, 25 April 1874, « L’exposition des
//           impressionnistes », gave the movement its name; Musée Marmottan
//           Monet. https://www.marmottan.fr/en/notice/4014/ and
//           https://en.wikipedia.org/wiki/Impression,_Sunrise (VERIFIED at the
//           pre-review: the Marmottan notice gives 1872, Le Havre, April 1874
//           and Leroy's article in Le Charivari of 25 April 1874).
//       P4. René Magritte (Belgian, d. 1967), « La Trahison des images »,
//           1929, LACMA: a painted pipe above a sentence denying it is a
//           pipe. LACMA: https://collections.lacma.org/node/239578
//       P5. « Refus global », launched 9 August 1948 in Montréal by the
//           Automatistes around Paul-Émile Borduas, 16 signatories; Borduas
//           loses his teaching post at the École du meuble. Encyclopédie
//           canadienne: https://encyclopediecanadienne.ca/article/refus-global
//           and Gouvernement du Québec:
//           https://www.quebec.ca/nouvelles/actualites/details/patrimoine-culturel-le-ministre-de-la-culture-et-des-communications-annonce-la-designation-du-lancement-du-manifeste-refus-global-49880
//       P6. clair-obscur, plural « clairs-obscurs » (Larousse:
//           https://www.larousse.fr/dictionnaires/francais/clair-obscur/16352).
//
//     MUSIC AND STAGE
//       M1. Maurice Ravel, « Boléro », 1928, commissioned by and dedicated to
//           Ida Rubinstein; ballet premiere at the Paris Opéra, 22 November
//           1928 (choreography Bronislava Nijinska); about 16 minutes; one
//           theme that never changes while the instruments do, over an
//           ostinato, from very soft to as loud as possible. IRCAM and
//           Britannica: https://resources.ircam.fr/work/bolero and
//           (pre-review: the real order is flute, clarinet, bassoon, E-flat
//           clarinet, oboe d'amore, trumpet with flute, saxophones, ... full
//           orchestra, so « bois, puis cuivres » was wrong; the text now names
//           only flute, clarinet, bassoon, then « d'instrument en instrument »;
//           https://en.wikipedia.org/wiki/Bol%C3%A9ro)
//           https://www.britannica.com/topic/Bolero-by-Ravel . The snare-drum
//           ostinato is standard description (« caisse claire »).
//       M2. Michel Tremblay, « Les Belles-sœurs », premiere 28 August 1968,
//           Théâtre du Rideau Vert, Montréal; often called the first Québec
//           play in joual (popular speech was on stage before it, so the
//           lesson only says it « fait entendre le joual sur une scène
//           professionnelle »). Encyclopédie canadienne:
//           https://prod-front.thecanadianencyclopedia.ca/en/article/les-belles-soeurs
//
//     LANGUAGE
//       L1. « divulgâcher »: OQLF term (fiche 2016), derived from
//           « divulgâcheur », proposed by the OQLF in May 2014 to replace
//           « spoiler »; in Le Petit Larousse from the 2020 edition (May
//           2019 announcement). OQLF:
//           https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26532507/divulgacher
//           and Paris Match Belgique, 8 May 2019:
//           https://www.parismatch.be/actualites/societe/2019/05/08/dagobert-et-sorteurs-font-leur-apparition-dans-le-nouveau-larousse-LPWGQCF2NFFZVLQEZD4ZTZ3OSI/
//
//     LEFT OUT, NOT SURE ENOUGH OR NOT WANTED: the legend of the 1895
//     spectators fleeing the train (contested); any Hitchcock or Welles
//     example (not francophone, and the plan-séquence is taught on an
//     invented film); the Dardenne brothers and every living director; any
//     line of any song, film or play; any box-office figure.
//
//  8. APOSTROPHES: every authored French string uses the typographic ’.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c1.14',
  seq: 14,
  title: 'Analysing a Work',
  sub: 'Analyser une œuvre',
  canDo: 'Can move from a personal reaction to an argued analysis of how a film, a painting, a photograph, a piece of music or a staging produces its effect, naming its means precisely (shot, frame, off-screen space, editing, soundtrack, composition, light, brushwork, orchestration, staging), and can write a critique that weighs strengths against weaknesses before giving a reasoned verdict',
  prereqUnitIds: ['b2.30', 'c1.24'],
} as const;

export const LESSON_ID = 'c1.14.l1';
export const THEME = 'culture-profonde';
export const LEVEL = 'c1' as const;

/** ONE block, by the wave 5 setup. */
export const ID_RANGES = [[1200, 1399]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

/** TODO(import): drop once these c1 units are rows in `content_units`. */
const C1_SEQ_FROM_PLAN: Record<string, number> = { 'c1.14': 14, 'c1.15': 15, 'c1.20': 20, 'c1.24': 24 };

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  if (band === 'b1' || band === 'b2') {
    const n = SEQ.get(unitId);
    if (!n) throw new Error(`c1.14: ${unitId} is not in the seed`);
    return `la leçon ${n} du ${band.toUpperCase()}`;
  }
  const planned = C1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du C1` : unitRef(unitId);
}

export const LITTERATURE_UNIT = 'b2.30';
export const PRESSE_UNIT = 'c1.24';
export const NEXT_UNIT = 'c1.15';

export const LITTERATURE_REF = refFr(LITTERATURE_UNIT);
export const PRESSE_REF = refFr(PRESSE_UNIT);
export const NEXT_REF = refFr(NEXT_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B230_REFRAME } from '../b2/lire-litterature-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE BACK OF THE TAPESTRY. From the front, a work gives you an effect: you
 *  are moved, bored, unsettled. Turn it over and you see the threads that
 *  make the picture: a fixed camera, a cut, a candle, a crescendo. The
 *  emotion is not thrown away: it is the clue that tells you which threads
 *  to follow. A critique shows both sides, then weighs them.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Ton émotion est un indice : cherche dans l’œuvre ce qui la produit.';
export const REFRAME_EN = 'Your emotion is a clue: look in the work for what produces it.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: '« J’aime » ne suffit pas.',
    why: 'Says only what is wrong and treats the reaction as an error. The lesson keeps the reaction as its starting point (the legacy reaction rows are reused on purpose).',
  },
  {
    text: 'Analyser, c’est démonter.',
    why: 'Suggests the analysis kills the emotion. Every act starts from what the work does to a viewer and goes back to the means; nothing is taken apart for its own sake.',
  },
  {
    text: 'Qui parle, par quels yeux, avec quels mots.',
    why: 'b2.30’s reframe, quoted in act 1. It is built for a literary page; a painting has no narrator and a bolero has no words.',
  },
  {
    text: 'Une critique pèse le pour et le contre.',
    why: 'True for acts 10 and 11 only. Acts 2 to 9 are about finding the means before any weighing.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *  Read from Postgres 2026-10-06 and, where present, from seedPlusPacks().
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b2.litterature.1407',                    // Qui raconte cette histoire ?
    'fr.b2.litterature.1408',                    // Par les yeux de qui voit-on la scène ?
    'fr.b2.litterature.1409',                    // Avec quels mots le texte produit-il cet effet ?
    'fr.b2.litterature.1572',                    // Ce texte m’a touché, mais je dois montrer pourquoi.
    'fr.b2.litterature.1562',                    // Il ne faut pas raconter l’histoire : il faut l’analyser.
    'fr.b2.litterature.1498',                    // Une tonalité se prouve par ses moyens : les mots, le rythme, les images.  (flashcard only)
  ],
  act2: [
    'fr.c1.culture-profonde.017',                // Certains chapitres traînent, mais la dernière partie rachète tout.  (Postgres only, legacy)
  ],
  act3: [
    'fr.b2.litterature.1434',                    // la focalisation interne
    'fr.c1.strategies-de-comprehension.2152',    // Le cadrage n’est pas un mensonge, c’est un choix.
  ],
  act4: [
    'fr.c1.strategies-de-comprehension.2008',    // Un article est un cadre : regarde aussi ce qu’il laisse hors champ.  (flashcard only)
    'fr.c1.culture-profonde.027',                // La caméra s'attarde sur les visages comme si elle cherchait à les comprendre.  (Postgres only, legacy)
  ],
  act5: [
    'fr.b2.litterature.1461',                    // un retour en arrière, une analepse
    'fr.c1.culture-profonde.014',                // Le montage, d'une précision chirurgicale, donne au récit une tension presque insoutenable.  (Postgres only, legacy)
    'fr.c1.culture-profonde.037',                // Le plan final, tourné en une seule prise, restera dans les mémoires.  (Postgres only, legacy)
  ],
  act6: [
    'fr.c1.culture-profonde.019',                // La bande sonore mérite à elle seule qu'on se déplace en salle.  (Postgres only, legacy)
  ],
  act7: [] as string[],
  act8: [] as string[],
  act9: [
    'fr.b2.rp-loisirs.003',                      // la mise en scène
  ],
  act10: [
    'fr.c1.culture-profonde.062',                // Je ne partage pas l'enthousiasme général, tout en reconnaissant l'ambition du projet.  (Postgres only, legacy)
    'fr.c1.culture-profonde.118',                // Une critique sévère mais argumentée rend plus service à l'auteur qu'un éloge distrait.  (Postgres only, legacy)
  ],
  act11: [
    'fr.b2.litterature.1535',                    // Un incipit informe, intrigue et donne le ton.
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Published in Postgres, absent from the local seed cut: fr / en / drills
 *  copied verbatim on 2026-10-06, so `src()` can print them. */
export const DB_ONLY_ROWS: { id: string; fr: string; en: string; drills: string[] }[] = [
  { id: 'fr.c1.culture-profonde.014', fr: "Le montage, d'une précision chirurgicale, donne au récit une tension presque insoutenable.", en: 'The editing, surgically precise, gives the story an almost unbearable tension.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.culture-profonde.017', fr: 'Certains chapitres traînent, mais la dernière partie rachète tout.', en: 'Some chapters drag, but the final section redeems everything.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.culture-profonde.019', fr: "La bande sonore mérite à elle seule qu'on se déplace en salle.", en: 'The soundtrack alone is worth going to the theatre for.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.culture-profonde.027', fr: "La caméra s'attarde sur les visages comme si elle cherchait à les comprendre.", en: 'The camera lingers on faces as if it were trying to understand them.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.culture-profonde.037', fr: 'Le plan final, tourné en une seule prise, restera dans les mémoires.', en: 'The final shot, filmed in a single take, will be remembered.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.culture-profonde.062', fr: "Je ne partage pas l'enthousiasme général, tout en reconnaissant l'ambition du projet.", en: 'I do not share the general enthusiasm, while acknowledging the ambition of the project.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.culture-profonde.118', fr: "Une critique sévère mais argumentée rend plus service à l'auteur qu'un éloge distrait.", en: 'A harsh but well argued review serves the author better than distracted praise.', drills: ['sentence', 'review'] },
];

/** No `flashcard` drill: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.c1.culture-profonde.014',                  // sentence, review
  'fr.c1.culture-profonde.017',                  // sentence, review
  'fr.c1.culture-profonde.019',                  // sentence, review
  'fr.c1.culture-profonde.027',                  // sentence, review
  'fr.c1.culture-profonde.037',                  // sentence, review
  'fr.c1.culture-profonde.062',                  // sentence, review
  'fr.c1.culture-profonde.118',                  // sentence, review
];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.b2.litterature.1498',                      // flashcard only
  'fr.c1.strategies-de-comprehension.2008',      // flashcard only
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  A WORKSHOP CORPUS HOLDS PHRASES THAT DO A JOB: a term of the art as it
 *  is used in analysis, an observation, the effect it produces, or a line
 *  of the final critique. Each act has one flashcard-only rule card
 *  (`rule()`), whose prompt is a situation and whose `fr` is the act's move.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['analyser-oeuvre'], ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, ...extra,
});

/** A rule card: `prompt` is the situation, `fr` the move. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · « J’AI ADORÉ » NE SUFFIT PAS ───────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1200, 'J’ai adoré ce film, allez le voir.', 'I loved this film, go and see it.', '/ʒe a.dɔ.ʁe sə film a.le lə vwaʁ/', 'zhay a-do-RAY suh FEELM | a-lay luh VWAR', ['reaction']),
  sent(1201, 'Ce film m’a bouleversé, et je veux montrer comment il y parvient.', 'This film overwhelmed me, and I want to show how it manages it.', '/sə film ma bul.vɛʁ.se e ʒə vø mɔ̃.tʁe kɔ.mɑ̃ il i paʁ.vjɛ̃/', 'suh feelm ma bool-vehr-SAY | ay zhuh veu mohⁿ-TRAY ko-MAHⁿ eel ee par-VYEHⁿ', ['reaction', 'analyse']),
  sent(1202, 'Qu’est-ce qui, dans l’œuvre, produit cette émotion ?', 'What, in the work, produces this emotion?', '/kɛs ki dɑ̃ lœvʁ pʁɔ.dɥi sɛt e.mo.sjɔ̃/', 'kess KEE | dahⁿ LUHVR | pro-dwee set ay-mo-SYOHⁿ', ['question', 'moyens']),
  sent(1203, 'Mon émotion est un point de départ, pas une preuve.', 'My emotion is a starting point, not proof.', '/mɔ̃.ne.mo.sjɔ̃ ɛ.tœ̃ pwɛ̃ d(ə) de.paʁ pa.zyn pʁœv/', 'moh-nay-mo-SYOHⁿ eh-tuhⁿ pwehⁿ duh day-PAR | pa-zün PRUHV', ['methode']),
  sent(1204, REFRAME, REFRAME_EN, '/tɔ̃.ne.mo.sjɔ̃ ɛ.tœ̃.nɛ̃.dis ʃɛʁʃ dɑ̃ lœvʁ sə ki la pʁɔ.dɥi/', 'toh-nay-mo-SYOHⁿ eh-tuhⁿ-nehⁿ-DEESS | shehrsh dahⁿ LUHVR suh kee la pro-DWEE', ['regle'], FC,
    rule('Ton amie écrit sous un film : « J’ai adoré, allez-y. » Que lui manque-t-il ?', 'Il lui manque le chemin : partir de ce qu’elle a ressenti et chercher, dans le film, ce qui l’a produit. Son émotion est un indice, pas encore une critique.')),
  sent(1205, 'Le lecteur ne sait toujours pas pourquoi tu as aimé.', 'The reader still does not know why you liked it.', '/lə lɛk.tœʁ nə sɛ tu.ʒuʁ pa puʁ.kwa ty a e.me/', 'luh lek-TUHR nuh seh too-zhoor pa poor-KWA | tü a ay-MAY', ['reaction']),
  phrase(1206, 'une critique argumentée', 'a reasoned review', '/yn kʁi.tik aʁ.ɡy.mɑ̃.te/', 'ün kree-TEEK ar-gü-mahⁿ-TAY', ['critique']),
  sent(1207, 'Je pars de ce que je ressens, puis je remonte aux moyens.', 'I start from what I feel, then I trace it back to the means.', '/ʒə paʁ də sə kə ʒə ʁə.sɑ̃ pɥi ʒə ʁə.mɔ̃t o mwa.jɛ̃/', 'zhuh PAR duh suh kuh zhuh ruh-SAHⁿ | pwee zhuh ruh-MOHⁿT oh mwa-YEHⁿ', ['methode', 'moyens'], FCVDR),
  sent(1208, 'Dire « c’est beau » ne dit rien de l’œuvre.', 'Saying "it is beautiful" says nothing about the work.', '/diʁ sɛ bo nə di ʁjɛ̃ d(ə) lœvʁ/', 'deer seh BOH | nuh dee ryehⁿ duh LUHVR', ['reaction']),
  sent(1209, 'Une analyse montre comment l’œuvre est faite.', 'An analysis shows how the work is made.', '/y.na.na.liz mɔ̃tʁ kɔ.mɑ̃ lœ.vʁɛ fɛt/', 'ü-na-na-LEEZ mohⁿtr ko-mahⁿ luh-vreh FET', ['analyse']),
  sent(1210, 'Une critique pèse les forces et les faiblesses d’une œuvre.', 'A review weighs a work’s strengths and weaknesses.', '/yn kʁi.tik pɛz le fɔʁs e le fɛ.blɛs dy.nœvʁ/', 'ün kree-TEEK PEZ lay FORSS ay lay feh-BLESS dü-NUHVR', ['critique']),
  sent(1211, 'Au cinéma, en peinture ou en musique, les questions restent les mêmes.', 'In film, painting or music, the questions stay the same.', '/o si.ne.ma ɑ̃ pɛ̃.tyʁ u ɑ̃ my.zik le kɛs.tjɔ̃ ʁɛst le mɛm/', 'oh see-nay-MA | ahⁿ pehⁿ-TÜR oo ahⁿ mü-ZEEK | lay kess-TYOHⁿ rest lay MEMM', ['methode']),
];

/* ── ACT 2 · DE L’ÉMOTION AUX MOYENS ────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1215, 'J’ai trouvé la fin magnifique.', 'I found the ending magnificent.', '/ʒe tʁu.ve la fɛ̃ ma.ɲi.fik/', 'zhay troo-VAY la fehⁿ ma-nyee-FEEK', ['impression']),
  sent(1216, 'La dernière scène dure quatre minutes, sans un mot.', 'The last scene lasts four minutes, without a word.', '/la dɛʁ.njɛʁ sɛn dyʁ katʁ mi.nyt sɑ̃.zœ̃ mo/', 'la dehr-nyehr SENN dür katr mee-NÜT | sahⁿ-zuhⁿ MOH', ['observation']),
  sent(1217, 'Ce silence oblige le spectateur à tout imaginer.', 'This silence forces the viewer to imagine everything.', '/sə si.lɑ̃s ɔ.bliʒ lə spɛk.ta.tœʁ a tu.ti.ma.ʒi.ne/', 'suh see-LAHⁿSS o-BLEEZH luh spek-ta-TUHR a too-tee-ma-zhee-NAY', ['effet']),
  sent(1218, 'C’est ce silence qui rend la fin si forte.', 'It is this silence that makes the ending so powerful.', '/sɛ sə si.lɑ̃s ki ʁɑ̃ la fɛ̃ si fɔʁt/', 'seh suh see-LAHⁿSS kee rahⁿ la FEHⁿ see FORT', ['jugement']),
  phrase(1219, 'une observation précise', 'a precise observation', '/y.nɔp.sɛʁ.va.sjɔ̃ pʁe.siz/', 'ü-nop-sehr-va-SYOHⁿ pray-SEEZ', ['observation']),
  sent(1220, 'Une impression se ressent, une observation se vérifie.', 'An impression is felt; an observation can be checked.', '/y.nɛ̃.pʁɛ.sjɔ̃ sə ʁə.sɑ̃ y.nɔp.sɛʁ.va.sjɔ̃ sə ve.ʁi.fi/', 'ü-nehⁿ-preh-SYOHⁿ suh ruh-SAHⁿ | ü-nop-sehr-va-SYOHⁿ suh vay-ree-FEE', ['methode', 'observation'], FCVDR),
  sent(1221, 'Ce plan produit un effet de malaise.', 'This shot produces a feeling of unease.', '/sə plɑ̃ pʁɔ.dɥi œ̃.ne.fɛ d(ə) ma.lɛz/', 'suh PLAHⁿ pro-DWEE uhⁿ-nay-FEH duh ma-LEZ', ['effet']),
  sent(1222, 'Grâce à ce choix, la scène gagne en tension.', 'Thanks to this choice, the scene gains in tension.', '/ɡʁa.sa sə ʃwa la sɛn ɡaɲ ɑ̃ tɑ̃.sjɔ̃/', 'gra-sa suh SHWA | la SENN ganny ahⁿ tahⁿ-SYOHⁿ', ['effet']),
  sent(1223, 'Le rythme, volontairement lent, épouse l’ennui du personnage.', 'The pace, deliberately slow, matches the character’s boredom.', '/lə ʁitm vɔ.lɔ̃.tɛʁ.mɑ̃ lɑ̃ e.puz lɑ̃.nɥi dy pɛʁ.sɔ.naʒ/', 'luh REETM | vo-lohⁿ-tehr-mahⁿ LAHⁿ | ay-pooz lahⁿ-NWEE dü pehr-so-NAZH', ['jugement']),
  sent(1224, 'Ce qui me frappe d’abord, c’est le silence.', 'What strikes me first is the silence.', '/sə ki mə fʁap da.bɔʁ sɛ lə si.lɑ̃s/', 'suh kee muh frap da-BOR | seh luh see-LAHⁿSS', ['impression']),
  sent(1225, 'Impression, observation, effet, jugement.', 'Impression, observation, effect, judgement.', '/ɛ̃.pʁɛ.sjɔ̃ ɔp.sɛʁ.va.sjɔ̃ e.fɛ ʒyʒ.mɑ̃/', 'ehⁿ-preh-SYOHⁿ | op-sehr-va-SYOHⁿ | ay-FEH | zhüzh-MAHⁿ', ['regle'], FC,
    rule('Tu écris : « La fin est magnifique. » Que manque-t-il pour que ce soit une analyse ?', 'Il manque ce que je vois et ce que cela produit. J’avance en quatre temps : l’impression, l’observation précise, l’effet, puis le jugement qui s’appuie sur les trois.')),
  sent(1226, 'L’effet doit renvoyer à un moyen précis de l’œuvre.', 'The effect must point back to a precise means in the work.', '/le.fɛ dwa ʁɑ̃.vwa.je a œ̃ mwa.jɛ̃ pʁe.si d(ə) lœvʁ/', 'lay-FEH dwa rahⁿ-vwa-YAY a uhⁿ mwa-YEHⁿ pray-SEE duh LUHVR', ['moyens', 'methode']),
  phrase(1227, 'un final saisissant', 'a striking finale', '/œ̃ fi.nal se.zi.sɑ̃/', 'uhⁿ fee-NAL say-zee-SAHⁿ', ['jugement']),
  phrase(1228, 'un dénouement convenu', 'a predictable, conventional ending', '/œ̃ de.nu.mɑ̃ kɔ̃v.ny/', 'uhⁿ day-noo-MAHⁿ kohⁿv-NÜ', ['jugement']),
];

/* ── ACT 3 · LE CADRE ET LE PLAN ────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  phrase(1230, 'un plan d’ensemble', 'a wide shot, an establishing shot', '/œ̃ plɑ̃ dɑ̃.sɑ̃bl/', 'uhⁿ plahⁿ dahⁿ-SAHⁿBL', ['plan']),
  phrase(1231, 'un plan moyen', 'a full shot: the whole figure, head to toe', '/œ̃ plɑ̃ mwa.jɛ̃/', 'uhⁿ plahⁿ mwa-YEHⁿ', ['plan']),
  phrase(1232, 'un gros plan', 'a close-up', '/œ̃ ɡʁo plɑ̃/', 'uhⁿ groh PLAHⁿ', ['plan']),
  phrase(1233, 'une plongée', 'a high-angle shot', '/yn plɔ̃.ʒe/', 'ün plohⁿ-ZHAY', ['angle']),
  phrase(1234, 'une contre-plongée', 'a low-angle shot', '/yn kɔ̃.tʁə.plɔ̃.ʒe/', 'ün kohⁿ-truh-plohⁿ-ZHAY', ['angle']),
  phrase(1235, 'un plan fixe', 'a static shot', '/œ̃ plɑ̃ fiks/', 'uhⁿ plahⁿ FEEKS', ['plan']),
  sent(1236, 'Le plan d’ensemble situe le personnage dans un paysage.', 'The wide shot places the character in a landscape.', '/lə plɑ̃ dɑ̃.sɑ̃bl si.ty lə pɛʁ.sɔ.naʒ dɑ̃.zœ̃ pe.i.zaʒ/', 'luh plahⁿ dahⁿ-SAHⁿBL see-TÜ luh pehr-so-NAZH dahⁿ-zuhⁿ pay-ee-ZAZH', ['plan', 'effet']),
  sent(1237, 'Le gros plan isole un visage et nous oblige à le regarder.', 'The close-up isolates a face and forces us to look at it.', '/lə ɡʁo plɑ̃ i.zɔl œ̃ vi.zaʒ e nu.zɔ.bliʒ a lə ʁə.ɡaʁ.de/', 'luh groh PLAHⁿ ee-ZOL uhⁿ vee-ZAZH | ay noo-zo-BLEEZH a luh ruh-gar-DAY', ['plan', 'effet'], FCVDR),
  sent(1238, 'Filmé en plongée, le personnage paraît écrasé.', 'Filmed from above, the character looks crushed.', '/fil.me ɑ̃ plɔ̃.ʒe lə pɛʁ.sɔ.naʒ pa.ʁɛ.te.kʁa.ze/', 'feel-MAY ahⁿ plohⁿ-ZHAY | luh pehr-so-NAZH pa-reh-tay-kra-ZAY', ['angle', 'effet']),
  sent(1239, 'En contre-plongée, il domine la scène.', 'Filmed from below, he dominates the scene.', '/ɑ̃ kɔ̃.tʁə.plɔ̃.ʒe il dɔ.min la sɛn/', 'ahⁿ kohⁿ-truh-plohⁿ-ZHAY | eel do-MEENN la SENN', ['angle', 'effet']),
  sent(1240, 'La caméra reste fixe, de face, à hauteur du regard.', 'The camera stays still, facing the scene, at eye level.', '/la ka.me.ʁa ʁɛst fiks də fas a o.tœʁ dy ʁə.ɡaʁ/', 'la ka-may-RA rest FEEKS | duh FASS | a oh-tuhr dü ruh-GAR', ['plan', 'akerman']),
  sent(1241, 'Le cadre choisit ce qu’on voit ; il choisit aussi ce qu’on ne voit pas.', 'The frame chooses what we see; it also chooses what we do not see.', '/lə kadʁ ʃwa.zi sə kɔ̃ vwa il ʃwa.zi o.si sə kɔ̃ nə vwa pa/', 'luh KADR shwa-ZEE suh kohⁿ VWA | eel shwa-zee oh-SEE suh kohⁿ nuh vwa PA', ['cadre']),
  sent(1242, 'Je nomme le plan et son effet.', 'I name the shot and its effect.', '/ʒə nɔm lə plɑ̃ e sɔ̃.ne.fɛ/', 'zhuh nomm luh PLAHⁿ ay soh-nay-FEH', ['regle'], FC,
    rule('Une critique écrit seulement « de belles images ». Que dis-tu à la place ?', 'Je nomme le plan et l’angle, puis leur effet : un gros plan qui isole un visage, une plongée qui écrase, un plan fixe qui oblige à regarder.')),
  sent(1243, 'Un plan est un fragment de film tourné sans interruption.', 'A shot is a stretch of film recorded without a break.', '/œ̃ plɑ̃ ɛ.tœ̃ fʁaɡ.mɑ̃ d(ə) film tuʁ.ne sɑ̃.zɛ̃.te.ʁyp.sjɔ̃/', 'uhⁿ PLAHⁿ eh-tuhⁿ frag-MAHⁿ duh FEELM toor-NAY sahⁿ-zehⁿ-tay-rüp-SYOHⁿ', ['plan', 'definition']),
  sent(1244, 'Dans un article, le cadrage est une image empruntée au cinéma.', 'In an article, framing is an image borrowed from cinema.', '/dɑ̃.zœ̃.naʁ.tikl lə ka.dʁaʒ ɛ.tyn i.maʒ ɑ̃.pʁœ̃.te o si.ne.ma/', 'dahⁿ-zuhⁿ-nar-TEEKL | luh ka-DRAZH eh-tün ee-MAZH ahⁿ-pruhⁿ-TAY oh see-nay-MA', ['cadre', 'presse']),
];

/* ── ACT 4 · CHAMP, CONTRECHAMP, HORS-CHAMP ─────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  phrase(1245, 'le champ de la caméra', 'the camera’s field of view: what the frame shows', '/lə ʃɑ̃ d(ə) la ka.me.ʁa/', 'luh shahⁿ duh la ka-may-RA', ['champ']),
  phrase(1246, 'le contrechamp', 'the reverse shot', '/lə kɔ̃.tʁə.ʃɑ̃/', 'luh kohⁿ-truh-SHAHⁿ', ['champ']),
  phrase(1247, 'le hors-champ', 'off-screen space', '/lə ɔʁ.ʃɑ̃/', 'luh or-SHAHⁿ', ['horschamp']),
  sent(1248, 'Le champ-contrechamp alterne les deux personnages qui se parlent.', 'Shot-reverse-shot alternates between the two characters who are talking.', '/lə ʃɑ̃ kɔ̃.tʁə.ʃɑ̃ al.tɛʁn le dø pɛʁ.sɔ.naʒ ki sə paʁl/', 'luh shahⁿ-kohⁿ-truh-SHAHⁿ al-TEHRN lay deu pehr-so-NAZH kee suh PARL', ['champ']),
  sent(1249, 'On ne voit jamais celui qui parle, seulement celle qui écoute.', 'We never see the one who speaks, only the one who listens.', '/ɔ̃ nə vwa ʒa.mɛ sə.lɥi ki paʁl sœl.mɑ̃ sɛl ki e.kut/', 'ohⁿ nuh vwa zha-MEH suh-lwee kee PARL | suhl-MAHⁿ sel kee ay-KOOT', ['champ', 'effet']),
  sent(1250, 'Le cri vient du hors-champ ; on ne verra jamais d’où.', 'The scream comes from off screen; we will never see where from.', '/lə kʁi vjɛ̃ dy ɔʁ.ʃɑ̃ ɔ̃ nə vɛ.ʁa ʒa.mɛ du/', 'luh KREE vyehⁿ dü or-SHAHⁿ | ohⁿ nuh veh-RA zha-meh DOO', ['horschamp'], FCVDR),
  sent(1251, 'Le hors-champ fait travailler l’imagination du spectateur.', 'Off-screen space puts the viewer’s imagination to work.', '/lə ɔʁ.ʃɑ̃ fɛ tʁa.va.je li.ma.ʒi.na.sjɔ̃ dy spɛk.ta.tœʁ/', 'luh or-SHAHⁿ feh tra-va-YAY lee-ma-zhee-na-SYOHⁿ dü spek-ta-TUHR', ['horschamp', 'effet']),
  sent(1252, 'Quand le contrechamp ne vient pas, l’absence devient le sujet.', 'When the reverse shot does not come, the absence becomes the subject.', '/kɑ̃ lə kɔ̃.tʁə.ʃɑ̃ nə vjɛ̃ pa lap.sɑ̃s də.vjɛ̃ lə sy.ʒɛ/', 'kahⁿ luh kohⁿ-truh-SHAHⁿ nuh vyehⁿ PA | lap-SAHⁿSS duh-vyehⁿ luh sü-ZHEH', ['champ', 'effet']),
  sent(1253, 'La porte reste fermée, et tout se joue derrière.', 'The door stays shut, and everything happens behind it.', '/la pɔʁt ʁɛst fɛʁ.me e tu sə ʒu dɛ.ʁjɛʁ/', 'la PORT rest fehr-MAY | ay too suh zhoo deh-RYEHR', ['horschamp']),
  sent(1254, 'Je note ce que le cadre laisse dehors.', 'I note what the frame leaves outside.', '/ʒə nɔt sə kə lə kadʁ lɛs də.ɔʁ/', 'zhuh NOT suh kuh luh KADR less duh-OR', ['regle'], FC,
    rule('Dans une scène, on entend la voix du père sans jamais le voir. Que notes-tu ?', 'Je note le hors-champ et son effet : le père pèse sur toute la scène sans y apparaître, et le spectateur l’imagine plus grand qu’il ne le verrait.')),
  sent(1255, 'La jeune femme suit ses employeurs de Dakar à Antibes.', 'The young woman follows her employers from Dakar to Antibes.', '/la ʒœn fam sɥi se.zɑ̃.plwa.jœʁ də da.kaʁ a ɑ̃.tib/', 'la zhuhnn FAMM swee say-zahⁿ-plwa-YUHR duh da-KAR a ahⁿ-TEEB', ['sembene']),
  sent(1256, 'En 1966, Ousmane Sembène réalise La Noire de…', 'In 1966, Ousmane Sembène directs Black Girl (La Noire de…).', '/ɑ̃ mil nœf sɑ̃ swa.sɑ̃t.siz uz.man sɑ̃.bɛn ʁe.a.liz la nwaʁ də/', 'ahⁿ meel nuhf sahⁿ swa-sahⁿt-SEEZ | ooz-MANN sahⁿ-BENN ray-a-LEEZ la NWAR DUH', ['sembene']),
  sent(1257, 'Ce que l’image cache compte autant que ce qu’elle montre.', 'What the image hides counts as much as what it shows.', '/sə kə li.maʒ kaʃ kɔ̃t o.tɑ̃ kə sə kɛl mɔ̃tʁ/', 'suh kuh lee-mazh KASH kohⁿt oh-TAHⁿ kuh suh kel MOHⁿTR', ['horschamp']),
];

/* ── ACT 5 · LE MONTAGE ─────────────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  phrase(1260, 'un raccord', 'a match, a continuity link between two shots', '/œ̃ ʁa.kɔʁ/', 'uhⁿ ra-KOR', ['montage']),
  phrase(1261, 'un faux raccord', 'a continuity error, a mismatched cut', '/œ̃ fo ʁa.kɔʁ/', 'uhⁿ foh ra-KOR', ['montage']),
  phrase(1262, 'un plan-séquence', 'a sequence shot: a whole scene in one take', '/œ̃ plɑ̃ se.kɑ̃s/', 'uhⁿ plahⁿ-say-KAHⁿSS', ['montage', 'planSequence']),
  sent(1263, 'Le montage décide de l’ordre et de la durée des plans.', 'Editing decides the order and the length of the shots.', '/lə mɔ̃.taʒ de.sid də lɔʁdʁ e d(ə) la dy.ʁe de plɑ̃/', 'luh mohⁿ-TAZH day-SEED duh LORDR | ay duh la dü-RAY day PLAHⁿ', ['montage']),
  sent(1264, 'Un montage rapide accélère le rythme ; des plans longs le ralentissent.', 'Fast editing speeds up the pace; long shots slow it down.', '/œ̃ mɔ̃.taʒ ʁa.pid ak.se.lɛʁ lə ʁitm de plɑ̃ lɔ̃ lə ʁa.lɑ̃.tis/', 'uhⁿ mohⁿ-tazh ra-PEED ak-say-LEHR luh REETM | day plahⁿ LOHⁿ luh ra-lahⁿ-TEESS', ['montage', 'rythme'], FCVDR),
  sent(1265, 'Le plan-séquence filme toute une scène sans coupe.', 'The sequence shot films a whole scene without a cut.', '/lə plɑ̃ se.kɑ̃s film tu.tyn sɛn sɑ̃ kup/', 'luh plahⁿ-say-KAHⁿSS FEELM too-tün SENN sahⁿ KOOP', ['planSequence']),
  sent(1266, 'Sans coupe, le spectateur vit la scène en temps réel.', 'With no cut, the viewer lives the scene in real time.', '/sɑ̃ kup lə spɛk.ta.tœʁ vi la sɛn ɑ̃ tɑ̃ ʁe.ɛl/', 'sahⁿ KOOP | luh spek-ta-TUHR vee la SENN ahⁿ tahⁿ ray-EL', ['planSequence', 'effet']),
  sent(1267, 'En 1960, À bout de souffle multiplie les faux raccords.', 'In 1960, Breathless (À bout de souffle) is full of jump cuts.', '/ɑ̃ mil nœf sɑ̃ swa.sɑ̃t a bu d(ə) sufl myl.ti.pli le fo ʁa.kɔʁ/', 'ahⁿ meel nuhf sahⁿ swa-SAHⁿT | a boo duh SOOFL mül-tee-PLEE lay foh ra-KOR', ['godard']),
  sent(1268, 'Le faux raccord fait sentir la coupe au lieu de la cacher.', 'The mismatched cut makes the cut felt instead of hiding it.', '/lə fo ʁa.kɔʁ fɛ sɑ̃.tiʁ la kup o ljø d(ə) la ka.ʃe/', 'luh foh ra-KOR feh sahⁿ-TEER la KOOP | oh lyeu duh la ka-SHAY', ['montage', 'effet']),
  sent(1269, 'Le montage alterné passe d’un lieu à l’autre et crée l’attente.', 'Cross-cutting moves from one place to the other and builds suspense.', '/lə mɔ̃.taʒ al.tɛʁ.ne pas dœ̃ ljø a lotʁ e kʁe la.tɑ̃t/', 'luh mohⁿ-TAZH al-tehr-NAY pass duhⁿ LYEU a LOHTR | ay kray la-TAHⁿT', ['montage', 'effet']),
  sent(1270, 'Je décris le montage et le rythme qu’il donne.', 'I describe the editing and the rhythm it gives.', '/ʒə de.kʁi lə mɔ̃.taʒ e lə ʁitm kil dɔn/', 'zhuh day-KREE luh mohⁿ-TAZH | ay luh REETM keel DONN', ['regle'], FC,
    rule('Une dispute est découpée en trente plans très courts. Que dis-tu ?', 'Je décris le montage et son effet : des plans brefs, un rythme haché, une tension qui monte. Puis je compare avec ce qu’un plan-séquence aurait produit.')),
  sent(1271, 'Ici, la coupe se voit, et c’est voulu.', 'Here the cut is visible, and that is deliberate.', '/i.si la kup sə vwa e sɛ vu.ly/', 'ee-SEE | la KOOP suh VWA | ay seh voo-LÜ', ['montage', 'partiPris']),
  sent(1272, 'Un montage invisible n’est pas le seul montage réussi.', 'Invisible editing is not the only successful editing.', '/œ̃ mɔ̃.taʒ ɛ̃.vi.zibl nɛ pa lə sœl mɔ̃.taʒ ʁe.y.si/', 'uhⁿ mohⁿ-tazh ehⁿ-vee-ZEEBL | neh pa luh suhl mohⁿ-tazh ray-ü-SEE', ['montage', 'jugement']),
];

/* ── ACT 6 · LA BANDE-SON ───────────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  phrase(1275, 'la bande-son', 'the soundtrack: everything you hear', '/la bɑ̃d.sɔ̃/', 'la bahⁿd-SOHⁿ', ['son']),
  phrase(1276, 'une voix off', 'a voice-over', '/yn vwa ɔf/', 'ün vwa OF', ['son']),
  phrase(1277, 'le son direct', 'direct (synchronous) sound', '/lə sɔ̃ di.ʁɛkt/', 'luh sohⁿ dee-REKT', ['son', 'perrault']),
  sent(1278, 'La bande-son réunit les voix, les bruits, la musique et les silences.', 'The soundtrack brings together voices, noises, music and silences.', '/la bɑ̃d.sɔ̃ ʁe.y.ni le vwa le bʁɥi la my.zik e le si.lɑ̃s/', 'la bahⁿd-SOHⁿ ray-ü-NEE lay VWA | lay BRWEE | la mü-ZEEK | ay lay see-LAHⁿSS', ['son']),
  sent(1279, 'La musique vient de la scène : les personnages l’entendent aussi.', 'The music comes from within the scene: the characters hear it too.', '/la my.zik vjɛ̃ d(ə) la sɛn le pɛʁ.sɔ.naʒ lɑ̃.tɑ̃d o.si/', 'la mü-ZEEK vyehⁿ duh la SENN | lay pehr-so-NAZH lahⁿ-tahⁿd oh-SEE', ['son']),
  sent(1280, 'La musique est ajoutée : seuls les spectateurs l’entendent.', 'The music is added: only the audience hears it.', '/la my.zik ɛ.ta.ʒu.te sœl le spɛk.ta.tœʁ lɑ̃.tɑ̃d/', 'la mü-ZEEK eh-ta-zhoo-TAY | suhl lay spek-ta-TUHR lahⁿ-TAHⁿD', ['son']),
  sent(1281, 'La voix off raconte ce que l’image ne montre pas.', 'The voice-over tells what the image does not show.', '/la vwa ɔf ʁa.kɔ̃t sə kə li.maʒ nə mɔ̃tʁ pa/', 'la vwa OF ra-KOHⁿT suh kuh lee-MAZH nuh mohⁿtr PA', ['son']),
  sent(1282, 'Au cinéma, le silence est aussi un son.', 'In film, silence is a sound too.', '/o si.ne.ma lə si.lɑ̃s ɛ.to.si œ̃ sɔ̃/', 'oh see-nay-MA | luh see-LAHⁿSS eh-toh-see uhⁿ SOHⁿ', ['son'], FCVDR),
  sent(1283, 'Une musique trop appuyée dicte au spectateur ce qu’il doit ressentir.', 'Music that is laid on too thick tells the viewer what to feel.', '/yn my.zik tʁo.pa.pɥi.je dik.to spɛk.ta.tœʁ sə kil dwa ʁə.sɑ̃.tiʁ/', 'ün mü-ZEEK troh-pa-pwee-YAY | deek-toh spek-ta-TUHR suh keel dwa ruh-sahⁿ-TEER', ['son', 'jugement']),
  sent(1284, 'Pour la suite du monde est tourné à l’île aux Coudres, en son direct.', 'Pour la suite du monde was shot on the île aux Coudres, with direct sound.', '/puʁ la sɥit dy mɔ̃d ɛ tuʁ.ne a lil o kudʁ ɑ̃ sɔ̃ di.ʁɛkt/', 'poor la sweet dü MOHⁿD eh toor-NAY a leel oh KOODR | ahⁿ sohⁿ dee-REKT', ['perrault']),
  sent(1285, 'On y entend les habitants de l’île parler comme ils parlent.', 'In it you hear the islanders speak the way they speak.', '/ɔ̃.ni.ɑ̃.tɑ̃ le.za.bi.tɑ̃ d(ə) lil paʁ.le kɔ.mil paʁl/', 'oh-nee-ahⁿ-TAHⁿ lay-za-bee-TAHⁿ duh LEEL | par-LAY ko-meel PARL', ['perrault', 'effet']),
  sent(1286, 'Je dis d’où vient le son et ce qu’il fait.', 'I say where the sound comes from and what it does.', '/ʒə di du vjɛ̃ lə sɔ̃ e sə kil fɛ/', 'zhuh dee doo vyehⁿ luh SOHⁿ | ay suh keel FEH', ['regle'], FC,
    rule('Tu écris : « bonne musique ». Que dis-tu à la place ?', 'Je dis d’où vient la musique (de la scène, ou ajoutée), puis ce qu’elle fait : elle souligne l’image, elle la contredit, ou elle se tait et laisse place au silence.')),
  sent(1287, 'La musique contredit l’image, et ce décalage inquiète.', 'The music contradicts the image, and that gap is unsettling.', '/la my.zik kɔ̃.tʁə.di li.maʒ e sə de.ka.laʒ ɛ̃.kjɛt/', 'la mü-ZEEK kohⁿ-truh-DEE lee-MAZH | ay suh day-ka-LAZH ehⁿ-KYET', ['son', 'effet']),
];

/* ── ACT 7 · LA COMPOSITION ─────────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  phrase(1290, 'la composition d’une image', 'the composition of an image', '/la kɔ̃.po.zi.sjɔ̃ dy.ni.maʒ/', 'la kohⁿ-po-zee-SYOHⁿ dü-nee-MAZH', ['composition']),
  phrase(1291, 'le premier plan', 'the foreground', '/lə pʁə.mje plɑ̃/', 'luh pruh-myay PLAHⁿ', ['composition']),
  phrase(1292, 'l’arrière-plan', 'the background', '/la.ʁjɛʁ.plɑ̃/', 'la-ryehr-PLAHⁿ', ['composition']),
  phrase(1293, 'le point de fuite', 'the vanishing point', '/lə pwɛ̃ d(ə) fɥit/', 'luh pwehⁿ duh FWEET', ['composition', 'perspective']),
  phrase(1294, 'une ligne de force', 'a strong line that structures an image', '/yn liɲ də fɔʁs/', 'ün leeny duh FORSS', ['composition']),
  sent(1295, 'Au premier plan, une femme assise ; à l’arrière-plan, la ville.', 'In the foreground, a seated woman; in the background, the city.', '/o pʁə.mje plɑ̃ yn fa.ma.siz a la.ʁjɛʁ.plɑ̃ la vil/', 'oh pruh-myay PLAHⁿ | ün fa-ma-SEEZ | a la-ryehr-PLAHⁿ | la VEEL', ['composition']),
  sent(1296, 'Les lignes convergent vers le point de fuite et guident le regard.', 'The lines converge on the vanishing point and guide the eye.', '/le liɲ kɔ̃.vɛʁʒ vɛʁ lə pwɛ̃ d(ə) fɥit e ɡid lə ʁə.ɡaʁ/', 'lay LEENY kohⁿ-VEHRZH vehr luh pwehⁿ duh FWEET | ay geed luh ruh-GAR', ['perspective', 'effet'], FCVDR),
  sent(1297, 'Le personnage est décentré, et ce vide à droite met mal à l’aise.', 'The figure is off-centre, and the empty space on the right is unsettling.', '/lə pɛʁ.sɔ.naʒ ɛ de.sɑ̃.tʁe e sə vid a dʁwat mɛ ma.la lɛz/', 'luh pehr-so-NAZH eh day-sahⁿ-TRAY | ay suh VEED a DRWAT meh ma-la LEZ', ['composition', 'effet']),
  sent(1298, 'La symétrie donne au portrait sa solennité.', 'Symmetry gives the portrait its solemnity.', '/la si.me.tʁi dɔ.no pɔʁ.tʁɛ sa sɔ.la.ni.te/', 'la see-may-TREE do-noh por-TREH sa so-la-nee-TAY', ['composition', 'effet']),
  sent(1299, 'Le motif du tissu, derrière le modèle, répond à celui de sa robe.', 'The pattern of the fabric behind the sitter echoes that of her dress.', '/lə mɔ.tif dy ti.sy dɛ.ʁjɛʁ lə mɔ.dɛl ʁe.pɔ̃ a sə.lɥi d(ə) sa ʁɔb/', 'luh mo-TEEF dü tee-SÜ | deh-ryehr luh mo-DEL | ray-POHⁿ a suh-lwee duh sa ROB', ['keita']),
  sent(1300, 'Seydou Keïta photographie ses clients à Bamako de 1948 à 1962.', 'Seydou Keïta photographed his clients in Bamako from 1948 to 1962.', '/se.du ke.i.ta fɔ.tɔ.ɡʁa.fi se kli.jɑ̃ a ba.ma.ko də mil nœf sɑ̃ ka.ʁɑ̃t.ɥit a mil nœf sɑ̃ swa.sɑ̃t.duz/', 'say-doo keh-ee-TA fo-to-gra-FEE say klee-YAHⁿ a ba-ma-KOH | duh meel nuhf sahⁿ ka-rahⁿt-WEET a meel nuhf sahⁿ swa-sahⁿt-DOOZ', ['keita']),
  sent(1301, 'Je dis où l’image mène le regard.', 'I say where the image leads the eye.', '/ʒə di u li.maʒ mɛn lə ʁə.ɡaʁ/', 'zhuh dee OO | lee-MAZH menn luh ruh-GAR', ['regle'], FC,
    rule('Tu écris : « une belle photo, bien équilibrée ». Que dis-tu à la place ?', 'Je décris la composition et son effet : où se trouve le sujet, ce qu’il y a au premier plan et à l’arrière-plan, où mènent les lignes, ce que produisent le vide ou le motif.')),
  sent(1302, 'La perspective crée l’illusion de la profondeur sur une surface plane.', 'Perspective creates the illusion of depth on a flat surface.', '/la pɛʁ.spɛk.tiv kʁe li.ly.zjɔ̃ d(ə) la pʁɔ.fɔ̃.dœʁ syʁ yn syʁ.fas plan/', 'la pehr-spek-TEEV kray lee-lü-ZYOHⁿ duh la pro-fohⁿ-DUHR | sür ün sür-fass PLANN', ['perspective']),
  sent(1303, 'Le fond à motifs ferme l’espace et grandit le modèle.', 'The patterned backdrop closes off the space and enlarges the sitter.', '/lə fɔ̃ a mɔ.tif fɛʁm lɛs.pas e ɡʁɑ̃.di lə mɔ.dɛl/', 'luh FOHⁿ a mo-TEEF | fehrm less-PASS ay grahⁿ-dee luh mo-DEL', ['keita', 'effet']),
];

/* ── ACT 8 · LA LUMIÈRE ET LA TOUCHE ────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  phrase(1305, 'le clair-obscur', 'chiaroscuro: strong contrast of light and shadow', '/lə klɛʁ.ɔp.skyʁ/', 'luh klehr-op-SKÜR', ['lumiere']),
  phrase(1306, 'la touche', 'the brushwork, the brushstroke', '/la tuʃ/', 'la TOOSH', ['touche']),
  phrase(1307, 'une source de lumière', 'a light source', '/yn suʁs də ly.mjɛʁ/', 'ün SOORSS duh lü-MYEHR', ['lumiere']),
  sent(1308, 'Une seule bougie éclaire le visage ; le reste se perd dans l’ombre.', 'A single candle lights the face; the rest is lost in shadow.', '/yn sœl bu.ʒi e.klɛʁ lə vi.zaʒ lə ʁɛst sə pɛʁ dɑ̃ lɔ̃bʁ/', 'ün suhl boo-ZHEE ay-KLEHR luh vee-ZAZH | luh REST suh pehr dahⁿ LOHⁿBR', ['lumiere', 'latour'], FCVDR),
  sent(1309, 'Le clair-obscur oppose des zones très claires à des zones très sombres.', 'Chiaroscuro sets very bright areas against very dark ones.', '/lə klɛʁ.ɔp.skyʁ ɔ.poz de zon tʁɛ klɛʁ a de zon tʁɛ sɔ̃bʁ/', 'luh klehr-op-SKÜR o-POHZ day zohnn treh KLEHR | a day zohnn treh SOHⁿBR', ['lumiere']),
  sent(1310, 'Georges de La Tour peint des scènes de nuit éclairées par une flamme.', 'Georges de La Tour paints night scenes lit by a flame.', '/ʒɔʁʒ də la tuʁ pɛ̃ de sɛn də nɥi e.klɛ.ʁe paʁ yn flam/', 'zhorzh duh la TOOR pehⁿ day SENN duh NWEE | ay-kleh-RAY par ün FLAMM', ['latour']),
  sent(1311, 'La touche est rapide, visible, fragmentée.', 'The brushwork is quick, visible, broken up.', '/la tuʃ ɛ ʁa.pid vi.zibl fʁaɡ.mɑ̃.te/', 'la TOOSH eh ra-PEED | vee-ZEEBL | frag-mahⁿ-TAY', ['touche']),
  sent(1312, 'De près, on voit des taches ; de loin, un port dans la brume.', 'Up close you see patches of colour; from a distance, a harbour in the mist.', '/də pʁɛ ɔ̃ vwa de taʃ də lwɛ̃ œ̃ pɔʁ dɑ̃ la bʁym/', 'duh PREH | ohⁿ vwa day TASH | duh LWEHⁿ | uhⁿ POR dahⁿ la BRÜMM', ['touche', 'monet']),
  sent(1313, 'En 1874, un critique se moque de Monet et invente le mot « impressionnistes ».', 'In 1874, a critic mocks Monet and coins the word "Impressionists".', '/ɑ̃ mil ɥit sɑ̃ swa.sɑ̃t.ka.tɔʁz œ̃ kʁi.tik sə mɔk də mɔ.nɛ e ɛ̃.vɑ̃t lə mo ɛ̃.pʁɛ.sjɔ.nist/', 'ahⁿ meel wee sahⁿ swa-sahⁿt-ka-TORZ | uhⁿ kree-TEEK suh MOK duh mo-NEH | ay ehⁿ-VAHⁿT luh moh ehⁿ-preh-syo-NEEST', ['monet']),
  sent(1314, 'La couleur est posée en aplat, sans effet de matière.', 'The colour is laid flat, with no visible texture.', '/la ku.lœʁ ɛ po.ze ɑ̃.na.pla sɑ̃.ze.fɛ d(ə) ma.tjɛʁ/', 'la koo-LUHR eh poh-ZAY ahⁿ-na-PLA | sahⁿ-zay-FEH duh ma-TYEHR', ['touche', 'magritte']),
  sent(1315, 'Une peinture n’est jamais la chose, seulement sa représentation.', 'A painting is never the thing, only its representation.', '/yn pɛ̃.tyʁ nɛ ʒa.mɛ la ʃoz sœl.mɑ̃ sa ʁə.pʁe.zɑ̃.ta.sjɔ̃/', 'ün pehⁿ-TÜR neh zha-meh la SHOHZ | suhl-MAHⁿ sa ruh-pray-zahⁿ-ta-SYOHⁿ', ['magritte']),
  sent(1316, 'Je dis d’où vient la lumière et comment la couleur est posée.', 'I say where the light comes from and how the colour is laid on.', '/ʒə di du vjɛ̃ la ly.mjɛʁ e kɔ.mɑ̃ la ku.lœʁ ɛ po.ze/', 'zhuh dee doo vyehⁿ la lü-MYEHR | ay ko-mahⁿ la koo-LUHR eh poh-ZAY', ['regle'], FC,
    rule('Tu écris : « de belles couleurs, un beau tableau ». Que dis-tu à la place ?', 'Je dis d’où vient la lumière (une source unique, une lumière diffuse), comment la couleur est posée (une touche visible, un aplat lisse) et ce que cela fait au regard.')),
  sent(1317, 'En 1948, le manifeste Refus global coûte son poste à Paul-Émile Borduas.', 'In 1948, the Refus global manifesto costs Paul-Émile Borduas his post.', '/ɑ̃ mil nœf sɑ̃ ka.ʁɑ̃t.ɥit lə ma.ni.fɛst ʁə.fy ɡlɔ.bal kut sɔ̃ pɔst a pɔl.e.mil bɔʁ.dɥa/', 'ahⁿ meel nuhf sahⁿ ka-rahⁿt-WEET | luh ma-nee-FEST ruh-fü glo-BAL koot sohⁿ POST a pol-ay-meel bor-DWA', ['borduas']),
  sent(1318, 'L’ombre, ici, ne dramatise pas : elle recueille.', 'The shadow here does not dramatise: it gathers in.', '/lɔ̃bʁ i.si nə dʁa.ma.tiz pa ɛl ʁə.kœj/', 'LOHⁿBR ee-SEE | nuh dra-ma-teez PA | el ruh-KUHY', ['lumiere', 'latour']),
];

/* ── ACT 9 · LA MUSIQUE ET LA SCÈNE ─────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  phrase(1320, 'un crescendo', 'a crescendo', '/œ̃ kʁe.ʃɛn.do/', 'uhⁿ kray-shenn-DOH', ['musique']),
  phrase(1321, 'l’orchestration', 'orchestration', '/lɔʁ.kɛs.tʁa.sjɔ̃/', 'lor-kess-tra-SYOHⁿ', ['musique']),
  phrase(1322, 'la scénographie d’un spectacle', 'the stage design of a show: set, objects, light', '/la se.nɔ.ɡʁa.fi dœ̃ spɛk.takl/', 'la say-no-gra-FEE duhⁿ spek-TAKL', ['scene']),
  sent(1323, 'La mélodie ne change pas ; ce sont les instruments qui changent.', 'The melody does not change; it is the instruments that change.', '/la me.lɔ.di nə ʃɑ̃ʒ pa sə sɔ̃ le.zɛ̃s.tʁy.mɑ̃ ki ʃɑ̃ʒ/', 'la may-lo-DEE nuh shahⁿzh PA | suh sohⁿ lay-zehⁿs-trü-MAHⁿ kee SHAHⁿZH', ['ravel', 'musique']),
  sent(1324, 'Le morceau commence très doucement et finit aussi fort que possible.', 'The piece starts very softly and ends as loudly as possible.', '/lə mɔʁ.so kɔ.mɑ̃s tʁɛ dus.mɑ̃ e fi.ni o.si fɔʁ kə pɔ.sibl/', 'luh mor-SOH ko-mahⁿss treh dooss-MAHⁿ | ay fee-NEE oh-see FOR kuh po-SEEBL', ['ravel', 'musique']),
  sent(1325, 'Un rythme obsédant revient à chaque mesure.', 'A haunting rhythm comes back in every bar.', '/œ̃ ʁitm ɔp.se.dɑ̃ ʁə.vjɛ̃ a ʃak mə.zyʁ/', 'uhⁿ REETM op-say-DAHⁿ | ruh-vyehⁿ a shak muh-ZÜR', ['musique'], FCVDR),
  sent(1326, 'Le Boléro de Ravel est créé à l’Opéra de Paris en 1928.', 'Ravel’s Boléro was first performed at the Paris Opéra in 1928.', '/lə bɔ.le.ʁo də ʁa.vɛl ɛ kʁe.e a lɔ.pe.ʁa d(ə) pa.ʁi ɑ̃ mil nœf sɑ̃ vɛ̃t.ɥit/', 'luh bo-lay-ROH duh ra-VEL eh kray-AY a lo-pay-RA duh pa-REE | ahⁿ meel nuhf sahⁿ vehⁿt-WEET', ['ravel']),
  sent(1327, 'Toute la pièce se joue dans un seul décor.', 'The whole play takes place on a single set.', '/tut la pjɛs sə ʒu dɑ̃.zœ̃ sœl de.kɔʁ/', 'toot la PYESS suh zhoo dahⁿ-zuhⁿ suhl day-KOR', ['scene']),
  sent(1328, 'En 1968, Les Belles-sœurs fait entendre le joual sur une scène de Montréal.', 'In 1968, Les Belles-sœurs brings joual to a Montréal stage.', '/ɑ̃ mil nœf sɑ̃ swa.sɑ̃t.ɥit le bɛl.sœʁ fɛ ɑ̃.tɑ̃dʁ lə ʒwal syʁ yn sɛn də mɔ̃.ʁe.al/', 'ahⁿ meel nuhf sahⁿ swa-sahⁿt-WEET | lay bel-SUHR feh ahⁿ-TAHⁿDR luh ZHWAL | sür ün SENN duh mohⁿ-ray-AL', ['tremblay', 'scene']),
  sent(1329, 'Le jeu des comédiennes est sobre, presque immobile.', 'The actresses’ performance is restrained, almost motionless.', '/lə ʒø de kɔ.me.djɛn ɛ sɔbʁ pʁɛs.ki.mɔ.bil/', 'luh ZHEU day ko-may-DYENN | eh SOBR | press-kee-mo-BEEL', ['scene']),
  sent(1330, 'La lumière découpe la scène et isole chaque monologue.', 'The lighting carves up the stage and isolates each monologue.', '/la ly.mjɛʁ de.kup la sɛn e i.zɔl ʃak mɔ.nɔ.lɔɡ/', 'la lü-MYEHR day-KOOP la SENN | ay ee-ZOL shak mo-no-LOG', ['scene', 'effet']),
  sent(1331, 'Je nomme un moyen de la musique ou de la scène, puis son effet.', 'I name a means of the music or the staging, then its effect.', '/ʒə nɔm œ̃ mwa.jɛ̃ d(ə) la my.zik u d(ə) la sɛn pɥi sɔ̃.ne.fɛ/', 'zhuh nomm uhⁿ mwa-YEHⁿ duh la mü-ZEEK oo duh la SENN | pwee soh-nay-FEH', ['regle'], FC,
    rule('Tu écris : « super concert, super pièce ». Que dis-tu à la place ?', 'Je nomme un moyen précis (le rythme, l’orchestration, le crescendo ; la mise en scène, le décor, la lumière, le jeu) et je dis ce qu’il produit.')),
  sent(1332, 'Au théâtre, un même texte change selon la mise en scène.', 'In the theatre, the same text changes with the staging.', '/o te.atʁ œ̃ mɛm tɛkst ʃɑ̃ʒ sə.lɔ̃ la mi.zɑ̃ sɛn/', 'oh tay-ATR | uhⁿ mem TEKST shahⁿzh suh-LOHⁿ la mee-zahⁿ SENN', ['scene']),
];

/* ── ACT 10 · PESER LE POUR ET LE CONTRE ────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1335, 'Certes, le thème n’est pas neuf ; mais la première salle est saisissante.', 'Admittedly the theme is not new; but the first room is striking.', '/sɛʁt lə tɛm nɛ pa nœf mɛ la pʁə.mjɛʁ sal ɛ se.zi.sɑ̃t/', 'SEHRT | luh TEMM neh pa NUHF | meh la pruh-myehr SAL eh say-zee-SAHⁿT', ['concession']),
  sent(1336, 'Si le début convainc, la suite, en revanche, déçoit.', 'While the opening convinces, the rest, by contrast, disappoints.', '/si lə de.by kɔ̃.vɛ̃ la sɥit ɑ̃ ʁə.vɑ̃ʃ de.swa/', 'see luh day-BÜ kohⁿ-VEHⁿ | la SWEET | ahⁿ ruh-VAHⁿSH | day-SWA', ['concession'], FCVDR),
  sent(1337, 'Malgré quelques longueurs, l’exposition tient ses promesses.', 'Despite a few overlong stretches, the exhibition keeps its promises.', '/mal.ɡʁe kɛl.kə lɔ̃.ɡœʁ lɛk.spo.zi.sjɔ̃ tjɛ̃ se pʁɔ.mɛs/', 'mal-GRAY kel-kuh lohⁿ-GUHR | lek-spo-zee-SYOHⁿ tyehⁿ say pro-MESS', ['concession']),
  sent(1338, 'On peut regretter une bande sonore trop appuyée.', 'One may regret a soundtrack laid on too thick.', '/ɔ̃ pø ʁə.ɡʁɛ.te yn bɑ̃d sɔ.nɔʁ tʁo.pa.pɥi.je/', 'ohⁿ peu ruh-greh-TAY | ün bahⁿd so-NOR troh-pa-pwee-YAY', ['reserve']),
  sent(1339, 'Ces réserves ne gâchent pas l’ensemble.', 'These reservations do not spoil the whole.', '/se ʁe.zɛʁv nə ɡaʃ pa lɑ̃.sɑ̃bl/', 'say ray-ZEHRV nuh gash pa lahⁿ-SAHⁿBL', ['reserve']),
  phrase(1340, 'une réussite inégale', 'an uneven success', '/yn ʁe.y.si.ti.ne.ɡal/', 'ün ray-ü-see-tee-nay-GAL', ['verdict']),
  phrase(1341, 'des longueurs', 'overlong stretches, slow passages', '/de lɔ̃.ɡœʁ/', 'day lohⁿ-GUHR', ['reserve']),
  sent(1342, 'L’exposition est ambitieuse, sinon toujours lisible.', 'The exhibition is ambitious, if not always easy to follow.', '/lɛk.spo.zi.sjɔ̃ ɛ.tɑ̃.bi.sjøz si.nɔ̃ tu.ʒuʁ li.zibl/', 'lek-spo-zee-SYOHⁿ eh-tahⁿ-bee-SYEUZ | see-nohⁿ too-zhoor lee-ZEEBL', ['concession']),
  sent(1343, 'Le reproche porte sur un choix précis, pas sur l’œuvre entière.', 'The criticism concerns one precise choice, not the whole work.', '/lə ʁə.pʁɔʃ pɔʁt syʁ œ̃ ʃwa pʁe.si pa syʁ lœ.vʁɑ̃.tjɛʁ/', 'luh ruh-PROSH port sür uhⁿ shwa pray-SEE | pa sür luh-vrahⁿ-TYEHR', ['reserve']),
  sent(1344, 'J’accorde, je nuance, puis je tranche.', 'I grant, I qualify, then I decide.', '/ʒa.kɔʁd ʒə nɥɑ̃s pɥi ʒə tʁɑ̃ʃ/', 'zha-KORD | zhuh NWAHⁿSS | pwee zhuh TRAHⁿSH', ['regle'], FC,
    rule('Tu as aimé l’exposition, sauf sa deuxième salle. Comment l’écris-tu ?', 'Je pèse : j’accorde la force réelle, je nomme la faiblesse précise, puis je dis laquelle l’emporte, avec mes raisons.')),
  sent(1345, 'Tout bien pesé, les qualités l’emportent sur les défauts.', 'All things considered, the strengths outweigh the flaws.', '/tu bjɛ̃ pə.ze le ka.li.te lɑ̃.pɔʁt syʁ le de.fo/', 'too byehⁿ puh-ZAY | lay ka-lee-TAY lahⁿ-PORT sür lay day-FOH', ['verdict']),
  phrase(1346, 'un parti pris', 'a deliberate artistic choice', '/œ̃ paʁ.ti pʁi/', 'uhⁿ par-tee PREE', ['partiPris']),
  sent(1347, 'Ce qui passe pour un défaut est peut-être un parti pris.', 'What looks like a flaw may be a deliberate choice.', '/sə ki pas puʁ œ̃ de.fo ɛ pø.tɛ.tʁœ̃ paʁ.ti pʁi/', 'suh kee PASS poor uhⁿ day-FOH | eh peu-teh-truhⁿ par-tee PREE', ['partiPris']),
];

/* ── ACT 11 · LA CRITIQUE COMME GENRE ───────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  phrase(1350, 'une accroche', 'an opening hook', '/y.na.kʁɔʃ/', 'ü-na-KROSH', ['genre']),
  phrase(1351, 'divulgâcher', 'to spoil (reveal the plot)', '/di.vyl.ɡa.ʃe/', 'dee-vül-ga-SHAY', ['genre', 'quebec']),
  sent(1352, 'Une critique s’ouvre sur une accroche, situe l’œuvre, puis l’analyse.', 'A review opens with a hook, places the work, then analyses it.', '/yn kʁi.tik su.vʁə syʁ y.na.kʁɔʃ si.ty lœvʁ pɥi la.na.liz/', 'ün kree-TEEK soo-vruh sür ü-na-KROSH | see-TÜ LUHVR | pwee la-na-LEEZ', ['genre']),
  sent(1353, 'Je résume le début sans divulgâcher la fin.', 'I summarise the beginning without spoiling the ending.', '/ʒə ʁe.zym lə de.by sɑ̃ di.vyl.ɡa.ʃe la fɛ̃/', 'zhuh ray-ZÜMM luh day-BÜ | sahⁿ dee-vül-ga-SHAY la FEHⁿ', ['genre'], FCVDR),
  sent(1354, 'Le verdict arrive à la fin, une fois les raisons données.', 'The verdict comes at the end, once the reasons are given.', '/lə vɛʁ.dikt a.ʁiv a la fɛ̃ yn fwa le ʁɛ.zɔ̃ dɔ.ne/', 'luh vehr-DEEKT a-REEV a la FEHⁿ | ün fwa lay reh-zohⁿ do-NAY', ['genre', 'verdict']),
  sent(1355, 'Le lecteur doit pouvoir décider s’il ira voir l’œuvre.', 'The reader must be able to decide whether to go and see the work.', '/lə lɛk.tœʁ dwa pu.vwaʁ de.si.de si.li.ʁa vwaʁ lœvʁ/', 'luh lek-TUHR dwa poo-VWAR day-see-DAY | see-lee-RA vwar LUHVR', ['genre']),
  sent(1356, 'Au lieu de « nul », je dis ce qui ne fonctionne pas.', 'Instead of "rubbish", I say what does not work.', '/o ljø d(ə) nyl ʒə di sə ki nə fɔ̃k.sjɔn pa/', 'oh lyeu duh NÜL | zhuh dee suh kee nuh fohⁿk-syonn PA', ['registre']),
  phrase(1357, 'une œuvre aboutie', 'an accomplished, fully realised work', '/y.nœ.vʁa.bu.ti/', 'ü-nuh-vra-boo-TEE', ['verdict']),
  phrase(1358, 'une œuvre inaboutie', 'a work that falls short of its aims', '/y.nœ.vʁi.na.bu.ti/', 'ü-nuh-vree-na-boo-TEE', ['verdict']),
  sent(1359, 'Le verbe « divulgâcher » vient du Québec : il remplace « spoiler ».', 'The verb "divulgâcher" comes from Québec: it replaces "spoiler".', '/lə vɛʁb di.vyl.ɡa.ʃe vjɛ̃ dy ke.bɛk il ʁɑ̃.plas spɔj.le/', 'luh VEHRB dee-vül-ga-SHAY vyehⁿ dü kay-BEK | eel rahⁿ-PLASS spoy-LAY', ['quebec']),
  sent(1360, 'J’accroche, je situe, j’analyse, je juge.', 'I hook, I place, I analyse, I judge.', '/ʒa.kʁɔʃ ʒə si.ty ʒa.na.liz ʒə ʒyʒ/', 'zha-KROSH | zhuh see-TÜ | zha-na-LEEZ | zhuh ZHÜZH', ['regle'], FC,
    rule('Ta critique commence par « Ce film est génial ». Que changes-tu ?', 'J’ouvre sur une accroche concrète (une image, un détail), je situe l’œuvre, j’analyse ses moyens, et je garde le jugement pour la fin, quand mes raisons sont posées.')),
  sent(1361, 'Une critique n’est pas un résumé.', 'A review is not a summary.', '/yn kʁi.tik nɛ pa.zœ̃ ʁe.zy.me/', 'ün kree-TEEK neh pa-zuhⁿ ray-zü-MAY', ['genre']),
  sent(1362, 'Le titre de la critique annonce déjà un angle.', 'The headline of the review already announces an angle.', '/lə titʁ də la kʁi.tik a.nɔ̃s de.ʒa œ̃.nɑ̃ɡl/', 'luh TEETR duh la kree-TEEK | a-nohⁿss day-ZHA uhⁿ-NAHⁿGL', ['genre']),
];

/* ── ACT 12 · TA CRITIQUE ───────────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1365, 'Marée basse suit Ndèye, rentrée de Bruxelles pour enterrer son père.', 'Marée basse follows Ndèye, back from Brussels to bury her father.', '/ma.ʁe bas sɥi ən.dɛj ʁɑ̃.tʁe d(ə) bʁy.sɛl puʁ ɑ̃.te.ʁe sɔ̃ pɛʁ/', 'ma-ray BASS swee uhn-DEY | rahⁿ-TRAY duh brü-SEL poor ahⁿ-tay-RAY sohⁿ PEHR', ['critique', 'maree']),
  sent(1366, 'On ne voit jamais le père : on n’entend que sa voix, sur de vieilles cassettes.', 'We never see the father: we only hear his voice, on old cassettes.', '/ɔ̃ nə vwa ʒa.mɛ lə pɛʁ ɔ̃ nɑ̃.tɑ̃ kə sa vwa syʁ də vjɛj ka.sɛt/', 'ohⁿ nuh vwa zha-meh luh PEHR | ohⁿ nahⁿ-tahⁿ kuh sa VWA | sür duh vyey ka-SET', ['critique', 'horschamp']),
  sent(1367, 'Les plans fixes sur la plage laissent le temps au deuil.', 'The static shots of the beach leave time for grief.', '/le plɑ̃ fiks syʁ la plaʒ lɛs lə tɑ̃ o dœj/', 'lay plahⁿ FEEKS sür la PLAZH | less luh TAHⁿ oh DUHY', ['critique', 'plan']),
  sent(1368, 'Le bruit de la mer remplace la musique pendant presque tout le film.', 'The sound of the sea replaces music for almost the whole film.', '/lə bʁɥi d(ə) la mɛʁ ʁɑ̃.plas la my.zik pɑ̃.dɑ̃ pʁɛsk tu lə film/', 'luh BRWEE duh la MEHR rahⁿ-PLASS la mü-ZEEK | pahⁿ-dahⁿ presk too luh FEELM', ['critique', 'son']),
  sent(1369, 'L’histoire du frère reste à peine esquissée.', 'The brother’s story is barely sketched.', '/lis.twaʁ dy fʁɛʁ ʁɛst a pɛ.nɛs.ki.se/', 'lees-TWAR dü FREHR | rest a peh-ness-kee-SAY', ['critique', 'reserve']),
  sent(1370, 'La kora du dernier plan souligne ce que l’image disait déjà.', 'The kora in the last shot underlines what the image was already saying.', '/la kɔ.ʁa dy dɛʁ.nje plɑ̃ su.liɲ sə kə li.maʒ di.zɛ de.ʒa/', 'la ko-RA dü dehr-nyay PLAHⁿ | soo-LEENY suh kuh lee-MAZH dee-zeh day-ZHA', ['critique', 'son', 'reserve']),
  sent(1371, 'Tout bien pesé, Marée basse est une réussite fragile mais réelle.', 'All things considered, Marée basse is a fragile but real success.', '/tu bjɛ̃ pə.ze ma.ʁe bas ɛ.tyn ʁe.y.sit fʁa.ʒil mɛ ʁe.ɛl/', 'too byehⁿ puh-ZAY | ma-ray BASS eh-tün ray-ü-SEET fra-ZHEEL meh ray-EL', ['critique', 'verdict']),
  sent(1372, 'Je situe l’œuvre, j’analyse ses moyens, puis je juge.', 'I place the work, I analyse its means, then I judge.', '/ʒə si.ty lœvʁ ʒa.na.liz se mwa.jɛ̃ pɥi ʒə ʒyʒ/', 'zhuh see-TÜ LUHVR | zha-na-LEEZ say mwa-YEHⁿ | pwee zhuh ZHÜZH', ['critique', 'methode'], FCVDR),
  sent(1373, 'La coupe brutale vers Bruxelles fait sentir l’exil d’un seul coup.', 'The abrupt cut to Brussels makes the exile felt all at once.', '/la kup bʁy.tal vɛʁ bʁy.sɛl fɛ sɑ̃.tiʁ lɛɡ.zil dœ̃ sœl ku/', 'la koop brü-TAL vehr brü-SEL | feh sahⁿ-TEER leg-ZEEL duhⁿ suhl KOO', ['critique', 'montage']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE ANCHOR TEXTS. Every one is « texte original écrit pour la
 *  leçon ». Outlets, people, places and works invented (§A.6); every
 *  real-world fact is in §A.7. No real work is quoted.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: a reader's post, all reaction, no analysis. */
export const ADORE_TEXT =
  'L’Œil du dimanche, espace des lecteurs. « La Saison des verglas » : mon coup de cœur de l’automne, par Théo Lavallée. J’ai adoré ce film. Vraiment adoré. Je suis sorti de la salle sans rien dire, et j’y pense encore trois jours après. Les images sont magnifiques, les acteurs sont géniaux, la musique est superbe. L’histoire, c’est celle d’une famille de la Beauce coincée chez elle pendant une tempête de verglas, mais ce n’est pas vraiment ça, le sujet, enfin je crois. Il y a une scène vers la fin, dans la cuisine, qui m’a donné des frissons : je ne saurais pas dire pourquoi, mais c’était parfait. Certains spectateurs autour de moi trouvaient le temps long. Pas moi. Pour moi, c’est le meilleur film québécois depuis des années, et sa réalisatrice, Nora Belkacem, est déjà une grande. Si vous ne devez voir qu’un film cette saison, c’est celui-là. Allez-y, vous ne le regretterez pas. Cinq étoiles, sans hésiter.';

/** Act 2: the same film, two reviews side by side. */
export const DEUX_AVIS_TEXT =
  'L’Œil du dimanche, deux regards sur un film. Premier avis, laissé par un spectateur à la sortie : « Un film magnifique, lent mais beau, avec une fin bouleversante. À voir. » Second avis, par Mireille Aubry. « La Saison des verglas » s’ouvre sur une image qu’on n’oublie pas : une branche d’érable prise dans la glace, filmée de si près qu’on entend craquer l’écorce. Tout le film tient dans ce premier plan. Pendant une heure et demie, une famille de la Beauce attend que le courant revienne, et la caméra attend avec elle. Les plans sont longs, souvent fixes. Ceux qui y verront de la lenteur n’auront pas tort ; mais ce rythme, volontairement lent, épouse l’ennui et l’angoisse des personnages, si bien que le spectateur finit par compter les heures avec eux. La dernière scène, dans la cuisine, dure quatre minutes, sans un mot : la mère réchauffe les mains de son fils au-dessus d’une casserole. Ce silence oblige le spectateur à imaginer tout ce qui s’est dit, ou tu, pendant la tempête, et c’est lui qui rend la fin si forte. On peut regretter, en revanche, une musique de piano trop présente au milieu du film, qui souligne ce que les visages disaient déjà. Il n’empêche : rarement un premier long métrage aura fait du froid un personnage à part entière. Ce qui frappe, au fond, c’est la confiance que la cinéaste accorde au regard de son public.';

/** Act 3: a ciné-club handout on the shot and the frame. */
export const PLAN_TEXT =
  'Ciné-club du Plateau, fiche de la séance. Regarder un plan. Ce mois-ci, le ciné-club projette « Jeanne Dielman, 23, quai du Commerce, 1080 Bruxelles », réalisé en 1975 par la cinéaste belge Chantal Akerman. Le film dure près de trois heures et demie et suit, pendant trois jours, une veuve qui vit avec son fils adolescent : elle épluche des pommes de terre, prépare le repas, range la cuisine. Rien de spectaculaire, du moins en apparence. Tout tient à la façon de filmer. La caméra reste fixe, de face, à hauteur du regard ; les plans sont longs, et le cadre ne bouge pas quand le personnage en sort. Pas de gros plan pour nous dire quoi ressentir, pas de plongée pour écraser, pas de contre-plongée pour grandir : le spectateur regarde chaque geste à égalité, jusqu’à ce que le moindre écart devienne un événement. En 2022, un vaste sondage de critiques organisé par la revue britannique Sight and Sound l’a placé en tête des meilleurs films de tous les temps ; c’était la première fois qu’un film réalisé par une femme occupait la première place. Pour préparer la discussion, retenez trois questions. Quelle est la valeur du plan : un plan d’ensemble qui situe, un plan moyen qui montre le corps entier, un gros plan qui isole un visage ? D’où regarde la caméra : d’en haut, d’en bas, à hauteur d’homme ? Et que laisse le cadre de côté ? On parle volontiers du « cadrage » d’un article ; le mot vient d’ici. Au cinéma, cadrer, c’est choisir ce qu’on voit, et donc ce qu’on ne voit pas.';

/** Act 4: a radio column on what the frame leaves out. */
export const CHAMP_TEXT =
  'Radio Passerelle, la chronique cinéma de Yanis Ferrer. Ce qu’on ne voit pas. Au cinéma, une conversation se filme presque toujours de la même façon : un plan sur celle qui parle, puis le contrechamp sur celui qui répond, et ainsi de suite. Le champ-contrechamp est si courant qu’on ne le remarque plus, et c’est pourquoi on le remarque tant quand il manque. Dans « La Saison des verglas », la mère téléphone à son mari, bloqué en ville par la tempête. On ne verra jamais le mari : la caméra reste sur le visage de la mère, et la voix de l’homme nous parvient déformée, par bribes. Le contrechamp ne vient pas, et l’absence devient le sujet de la scène. Plus tard, un cri retentit dans la grange, hors champ ; la caméra ne bouge pas. Nous ne saurons jamais exactement ce qui s’est passé, et c’est notre imagination qui travaille. Le hors-champ, c’est tout ce qui existe autour du cadre : on l’entend, on le devine, on ne le voit pas. Le procédé n’a rien de neuf. En 1966, le cinéaste sénégalais Ousmane Sembène réalise « La Noire de… », souvent présenté comme le premier long métrage d’un cinéaste d’Afrique subsaharienne. Une jeune femme y suit ses employeurs français de Dakar à Antibes, où on la réduit aux tâches ménagères. Une grande partie du film se déroule entre les murs d’un appartement, et le monde extérieur reste au bord de l’image. Ce que l’image cache compte alors autant que ce qu’elle montre.';

/** Act 5: a culture-site dossier on editing. */
export const MONTAGE_TEXT =
  'Le Fil culturel, dossier « Les mots du cinéma ». Couper, ou ne pas couper. Un film n’est presque jamais tourné dans l’ordre où on le voit. C’est au montage que tout se décide : l’ordre des plans, leur durée, la manière de passer de l’un à l’autre. Longtemps, la règle a été de cacher la coupe. Un raccord réussi enchaîne deux plans sans que le spectateur s’en aperçoive : un geste commencé dans l’un s’achève dans l’autre, un regard appelle ce qu’il regarde. En 1960, Jean-Luc Godard signe son premier long métrage, « À bout de souffle », et multiplie les faux raccords : la coupe saute aux yeux, le temps semble avoir des trous. Ce qui passait pour une faute devient un style. Le montage peut aussi presque disparaître. Dans un plan-séquence, toute une scène est filmée en une seule prise : le spectateur la vit en temps réel, sans pouvoir s’échapper. C’est le cas de la dernière scène de « La Saison des verglas », quatre minutes dans la cuisine, sans une coupe ni un mot. À l’inverse, une dispute découpée en trente plans très courts donne un rythme haché, nerveux. Le montage alterné, enfin, passe d’un lieu à l’autre, la maison, la route, la maison encore, et crée l’attente : on sait que deux lignes vont se croiser. Aucune de ces façons n’est meilleure en soi. Un montage invisible n’est pas le seul montage réussi ; pour la critique, la question est toujours de savoir ce que le choix produit.';

/** Act 6: a radio column on listening to a film. */
export const SON_TEXT =
  'Radio Passerelle, la chronique de Léa Castonguay. Écouter un film. On dit « voir un film », rarement « l’écouter ». Pourtant, la bande-son réunit tout ce qu’on entend : les voix, les bruits, la musique et les silences. Première question : d’où vient le son ? Quand la musique sort d’une radio posée sur la table, les personnages l’entendent aussi ; quand un orchestre s’élève sans que personne ne joue, seuls les spectateurs l’entendent. La voix off, elle, raconte ce que l’image ne montre pas, ou dit autre chose qu’elle. Deuxième question : que fait ce son ? Une musique trop appuyée dicte au spectateur ce qu’il doit ressentir ; une musique qui contredit l’image, une comptine sur une scène de violence par exemple, crée un décalage qui inquiète. Et au cinéma, le silence est aussi un son : il se prépare, il se mixe, il se remarque. Le Québec occupe une place à part dans cette histoire. Au début des années 1960, une équipe de l’Office national du film s’installe à l’île aux Coudres, dans le Saint-Laurent. Pierre Perrault et Michel Brault, avec Marcel Carrière, y tournent « Pour la suite du monde », sorti en 1963 : pour le film, les habitants relancent une ancienne pêche aux bélugas. Plutôt que de suivre un scénario écrit, l’équipe filme avec une caméra légère et enregistre le son direct. On entend les gens de l’île parler comme ils parlent, et cette langue devient la matière même du film. Ce sera le premier long métrage canadien présenté en compétition au Festival de Cannes, et un classique de ce qu’on appellera le cinéma direct.';

/** Act 7: a gallery wall text on two compositions. */
export const COMPOSITION_TEXT =
  'Centre d’art de Port-Mauve, salle 3, texte de salle. Seydou Keïta, portraits de Bamako. De 1948 à 1962, le photographe Seydou Keïta tient l’un des studios les plus recherchés de Bamako. On y vient seul, en couple ou en famille, endimanché ; au besoin, le studio prête une montre, un poste de radio, et même le scooter du photographe. Regardez d’abord la composition. Le modèle est presque toujours au centre, de face ou de trois quarts, et occupe tout le premier plan ; derrière lui, pas de paysage, pas de point de fuite, aucune perspective : un tissu à motifs, tendu contre le mur, ferme l’arrière-plan. L’image reste plate, et c’est voulu. Le motif du tissu répond à celui des vêtements, si bien que le regard circule d’une fleur imprimée à une autre avant de revenir au visage. De 1948 à 1954, le fond est un couvre-lit à franges ; ensuite, Keïta change de tissu tous les deux à quatre ans, ce qui permet aujourd’hui de dater ses tirages. Comparez avec la toile accrochée en face, un paysage peint pour l’exposition par Félix Gauthier-Roy. Ici, au contraire, les lignes du quai convergent vers un point de fuite et guident le regard vers l’horizon ; au premier plan, une femme assise, décentrée vers la gauche ; à droite, un grand vide de ciel. La perspective crée l’illusion de la profondeur sur une surface plane, et ce vide met mal à l’aise. Deux compositions, deux effets : l’une ferme l’espace et grandit le modèle, l’autre ouvre l’espace et isole la personne. Décrire une composition, c’est toujours dire où elle mène le regard, et ce que cela produit.';

/** Act 8: a museum guide's notebook on three ways of painting light. */
export const LUMIERE_TEXT =
  'Le Fil culturel, carnet d’une guide de musée, par Mireille Aubry. Trois façons de peindre la lumière. Au Louvre, je commence souvent la visite par une petite flamme. Dans « La Madeleine à la veilleuse », peinte par Georges de La Tour vers 1640, une seule bougie éclaire le visage de la jeune femme ; le reste se perd dans l’ombre. Ce clair-obscur, qui oppose des zones très claires à des zones très sombres, vient du Caravage, mais La Tour l’apaise : chez lui, l’ombre ne dramatise pas, elle recueille. Le silence de la scène tient à cette source de lumière unique. Deux siècles plus tard, la lumière change de nature. En 1872, Claude Monet peint le port du Havre dans la brume du matin. De près, on ne voit que des taches ; de loin, des bateaux, un soleil orange, l’eau qui scintille. La touche est rapide, visible, fragmentée : Monet ne peint pas le port, mais l’impression qu’il laisse. Exposée à Paris au printemps 1874, la toile s’intitule « Impression, soleil levant » ; un critique s’en moque dans un journal satirique et parle, pour railler les exposants, d’« impressionnistes ». Le mot est resté. Enfin, en 1929, le Belge René Magritte peint une pipe avec une netteté d’image de catalogue, des couleurs lisses posées en aplat, et il écrit sous l’objet qu’il ne s’agit pas d’une pipe. Le tableau, « La Trahison des images », rappelle qu’une peinture n’est jamais la chose, seulement sa représentation. Devant chacune de ces toiles, la même méthode vaut : d’où vient la lumière, comment la couleur est posée, et ce que cela fait au regard.';

/** Act 9: a radio arts slot on music and the stage. */
export const SCENE_TEXT =
  'Radio Passerelle, « Le quart d’heure des arts », par Yanis Ferrer. Prenez le « Boléro » de Maurice Ravel, créé à l’Opéra de Paris en 1928 pour la danseuse Ida Rubinstein. En un quart d’heure environ, la mélodie ne change pas : ce sont les instruments qui changent. Un même rythme, tenu par la caisse claire, revient sans arrêt ; le thème passe de la flûte à la clarinette, puis au basson, et ainsi d’instrument en instrument jusqu’à l’orchestre entier. L’orchestration fait tout : le morceau commence très doucement et finit aussi fort que possible. Dire « c’est entêtant » ne suffit pas ; on peut dire que ce long crescendo, sur un rythme obsédant, produit une tension qui ne se relâche qu’à la toute fin. Au théâtre, les moyens changent encore. Un même texte n’est jamais joué deux fois de la même façon : il y a la mise en scène, qui organise le jeu et l’espace ; la scénographie, c’est-à-dire le décor, les objets et la lumière ; et le jeu des comédiens. Le 28 août 1968, au Théâtre du Rideau Vert, à Montréal, « Les Belles-sœurs » de Michel Tremblay fait entendre le joual sur une scène professionnelle : des femmes d’un quartier ouvrier, réunies chez l’une d’elles, y parlent la langue de tous les jours. Imaginons, pour l’exercice, une mise en scène récente de la pièce. Toute l’action se joue dans un seul décor, la lumière découpe la scène et isole chaque monologue, et le jeu des comédiennes reste sobre, presque immobile. Une critique devra dire ce que ces choix font au texte : ils le servent, ou ils l’étouffent.';

/** Act 10: a balanced review of an invented exhibition. */
export const PESER_TEXT =
  'L’Œil du dimanche, critique. « Ce que la mer rapporte » : une exposition qui mérite mieux que son accrochage, par Solange Bérubé. Le Centre d’art de Port-Mauve réunit cet automne une centaine d’objets ramassés sur les plages du Saint-Laurent par une quinzaine d’artistes : bouées, cordages, éclats de plastique, bois flotté. L’idée est forte, et l’exposition tient en grande partie ses promesses. Certes, le thème n’est pas neuf ; mais la première salle, où les objets sont rangés par couleur, du blanc au noir, produit un effet saisissant : on croit traverser une marée qui se retire. Si le début convainc, la suite, en revanche, déçoit. Les deuxième et troisième salles juxtaposent les œuvres sans fil directeur, et les cartels, trop longs, expliquent ce que l’œil avait déjà compris. On peut regretter aussi une bande sonore de vagues diffusée en boucle, trop appuyée, qui couvre le silence que réclamaient certaines pièces. Faut-il y voir un défaut ou un parti pris ? Les commissaires revendiquent ce désordre comme l’image d’une plage après la tempête ; l’argument se tient, sans convaincre tout à fait. Ces réserves ne gâchent pas l’ensemble. La dernière salle, une seule installation de cordes suspendues que le visiteur traverse lentement, rachète bien des maladresses. Tout bien pesé, c’est une réussite inégale, mais réelle : une exposition ambitieuse, sinon toujours lisible, qu’on recommandera à ceux qui acceptent de prendre leur temps.';

/** Act 11: a complete album review, the genre at work. */
export const GENRE_TEXT =
  'L’Œil du dimanche, musique. Céleste Ouimet prend les petites routes, par Théo Lavallée. Il y a, au début du troisième album de Céleste Ouimet, quarante secondes de moteur qui tourne au ralenti avant la première note. Tout le disque est déjà là : une musique qui prend son temps, et qui le fait savoir. Après deux albums enregistrés à Montréal avec un groupe complet, la chanteuse de Rimouski a enregistré « Les Routes secondaires » presque seule, dans une ancienne église de Gaspésie, avec une guitare, un violoncelle et quelques claviers. Les onze chansons racontent un voyage en voiture le long du fleuve ; on n’en dira pas davantage, pour ne pas divulgâcher les deux dernières, qui changent le sens de tout ce qui précède. Le dépouillement sert d’abord la voix : enregistrée de très près, elle garde ses souffles et ses hésitations, si bien qu’on croit être assis sur le siège du passager. Le violoncelle, souvent seul sous la voix, tient le rôle que tenait la batterie sur les albums précédents : c’est lui qui donne le rythme, lent et régulier comme une route. On regrettera seulement que trois chansons du milieu se ressemblent au point de se confondre : même tempo, même tonalité, même mélancolie, et l’attention fléchit. Mais l’album retrouve sa force dans sa dernière partie. Au total, « Les Routes secondaires » n’est pas le disque le plus immédiat de Céleste Ouimet ; c’est sans doute le plus abouti. À écouter d’une traite, de préférence la nuit.';

/** Act 12, THE TASK TEXT: the press notes of an invented film. Facts only;
 *  the judgement is the learner's. */
export const MAREE_TEXT =
  'Dossier de presse. « Marée basse », premier long métrage de Khadija Sarr (Sénégal et Belgique, 1 h 48). Synopsis : Ndèye, trente-cinq ans, vit à Bruxelles depuis quinze ans. À la mort de son père, pêcheur à Joal, elle revient pour l’enterrement et passe une semaine dans la maison familiale, avec sa mère et son frère Ousseynou, qui veut vendre la pirogue de leur père pour ouvrir un commerce. Notes de la réalisatrice : « Je voulais filmer le temps du deuil, ce temps où l’on ne fait rien. » Le film se compose presque entièrement de plans fixes, souvent larges, sur la plage et dans la cour de la maison. Le père n’apparaît jamais à l’image : on entend seulement sa voix, sur de vieilles cassettes que Ndèye retrouve dans une malle. Il n’y a pas de musique pendant tout le film, seulement le bruit de la mer et du vent, jusqu’au dernier plan, où un air de kora accompagne la pirogue qui s’éloigne. Une seule coupe brutale, au milieu du film, fait passer sans transition de la cour à une rue de Bruxelles sous la pluie, puis revient à Joal. Le frère, très présent dans la première demi-heure, disparaît presque ensuite ; on ne saura pas s’il vend la pirogue. Réactions recueillies à l’avant-première : un spectateur a trouvé le film « trop lent » ; une spectatrice s’est dite « bouleversée par la scène des cassettes » ; plusieurs ont regretté que l’histoire du frère « reste en suspens ».';

/** What a critique of MAREE_TEXT can hold: the rubric and the graders read
 *  from this. */
export const MAREE_KEY = {
  situate: 'Un premier long métrage de Khadija Sarr, une coproduction entre le Sénégal et la Belgique : le retour de Ndèye à Joal pour l’enterrement de son père.',
  means: 'Les plans fixes et larges (le temps du deuil), le père en hors-champ (sa voix seule, sur les cassettes), l’absence de musique et le bruit de la mer, la coupe brutale vers Bruxelles, la kora du dernier plan.',
  effects: 'La lenteur fait partager l’attente ; l’absence du père à l’image le rend omniprésent ; la coupe fait sentir l’exil d’un seul coup ; le silence musical donne tout son poids au dernier plan, ou le rend trop appuyé.',
  weaknesses: 'L’histoire du frère, à peine esquissée et laissée en suspens ; une lenteur qui peut lasser ; une kora finale qui peut sembler souligner ce que l’image disait déjà.',
  verdict: 'Un jugement pesé, annoncé à la fin, qui dit ce qui l’emporte et pour quel public.',
} as const;
