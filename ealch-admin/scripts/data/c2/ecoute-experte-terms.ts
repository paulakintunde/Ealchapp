// c2.11.l1 « Compréhension orale experte » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 6 to 15 characters.
//
// C2 LANGUAGE RULE: the body is natural, unsimplified French, addressed as
// « tu », then ONE English line starting « EN: ».
//
// A WORKSHOP GLOSSARY NAMES MOVES: what a listener listens FOR (le signal,
// le registre) or sorts (la variante, la panne, le triage).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './ecoute-experte-corpus.ts';

export const ECOUTE_EXPERTE_TERMS: Record<string, LessonTerm> = {
  /** Act 1 and the reframe: the metaphor itself. */
  signal: {
    term: 'le signal',
    title: 'Ce que tu cherches, même déformé',
    body: 'Le signal, c’est la charpente et la ligne de partage que tu savais déjà trouver : le plan, les positions, ce que chacun accorde et refuse. Le bruit ne l’efface jamais, il le déforme. Tu continues de le chercher à travers quatre bruits possibles : le chevauchement, le registre, l’accent, la panne. EN: The signal is the frame and the dividing line you already knew how to find; noise distorts it, never erases it.',
    examples: [
      { itemId: E(2200), note: 'la règle de la leçon' },
      { itemId: E(2201), note: 'un signal, pas des mots' },
      { itemId: E(2209), note: 'un mot perdu n’est pas le signal perdu' },
    ],
  },

  /** Act 1 / Act 8: naming the obstacle before fixing it. */
  triage: {
    term: 'le triage',
    title: 'Nommer le bruit avant de le réparer',
    body: 'Devant plusieurs bruits à la fois, tu nommes chacun avant d’agir : un chevauchement se traite autrement qu’une coupure, un accent autrement qu’un registre. Le triage ne supprime rien, il décide seulement par quoi commencer, et tu commences toujours par la voix la plus claire. EN: Facing several kinds of noise, you name each one before acting; triage does not erase noise, it only decides where to start.',
    examples: [
      { itemId: E(2208), note: 'nommer le bruit avant de le réparer' },
      { itemId: E(2294), note: 'la règle de l’acte 8' },
      { itemId: E(2307), note: 'le triage ne supprime aucun bruit' },
    ],
  },

  /** Act 2: overlapping speakers. */
  chevauchement: {
    term: 'le chevauchement',
    title: 'Deux voix, une seconde, puis une seule',
    body: 'Quand deux personnes parlent en même temps, aucune idée n’est perdue, seulement cachée une seconde. Tu notes les deux positions séparément, tu laisses de côté celle que tu n’as pas suivie, et tu guettes le prénom que l’animateur relance : il te dit qui reprend. EN: When two people talk at once, no idea is lost, only hidden for a second; the host’s cue tells you who resumes.',
    examples: [
      { itemId: E(2211), note: 'le chevauchement, puis une voix seule' },
      { itemId: E(2215), note: 'la reprise après la coupure' },
      { itemId: E(2222), note: 'noter les deux positions séparément' },
    ],
  },

  /** Act 3: register shift as information. */
  registre: {
    term: 'le registre',
    title: 'Un changement de ton, jamais un hasard',
    body: 'Un interlocuteur qui glisse du soutenu vers le familier, ou l’inverse, ne fait pas une faute : il change de posture. Le familier signale souvent une émotion contenue ; le retour au soutenu referme une distance. Tu repères la bascule, puis tu te demandes ce qu’elle signale. EN: A shift between formal and informal register is not an error; it signals a change of stance, an emotion, or a closing distance.',
    examples: [
      { itemId: E(2225), note: 'le vouvoiement, puis le tutoiement' },
      { itemId: E(2228), note: 'le familier signale une colère contenue' },
      { itemId: E(2235), note: 'repérer la bascule, puis se demander pourquoi' },
    ],
  },

  /** Act 4: Québécois French. */
  quebecois: {
    term: 'le français du Québec',
    title: 'Dîner le midi, souper le soir',
    body: 'Faque (fait que), pantoute, là là, dispendieux, achaler : des mots de tous les jours, jamais une faute de français. Dîner et souper surtout : au Québec ils désignent les repas de midi et du soir, pas déjeuner et dîner comme en France, et cette seule différence peut faire perdre toute une phrase si tu ne la connais pas. EN: Everyday Québécois words; dîner (lunch) and souper (dinner) in particular differ from France’s usage and can derail a whole sentence if unknown.',
    examples: [
      { itemId: E(2238), note: 'dîner et souper, au Québec' },
      { itemId: E(2239), note: 'faque, pour donc' },
      { itemId: E(2247), note: 'achaler, pour déranger' },
    ],
  },

  /** Act 5: Belgian and Swiss French. */
  belgeSuisse: {
    term: 'le français de Belgique et de Suisse',
    title: 'Septante, nonante, le natel',
    body: 'Septante (70) et nonante (90) remplacent soixante-dix et quatre-vingt-dix ; huitante (80) existe en Suisse seulement. Une fois, s’il vous plaît pour « tiens », le natel, poutzer, une action, le cheni : reconnais-les, sans jamais les attendre d’un même interlocuteur. EN: Septante (70) and nonante (90) replace the France forms; huitante (80) is Swiss only; a handful of Belgian and Swiss everyday words round out the set.',
    examples: [
      { itemId: E(2252), note: 'les dizaines, autrement' },
      { itemId: E(2257), note: 's’il vous plaît, en tendant quelque chose' },
      { itemId: E(2261), note: 'le natel, pour le portable' },
    ],
  },

  /** Act 6: West African French. */
  afriqueOuest: {
    term: 'le français d’Afrique de l’Ouest',
    title: 'Tout à l’heure, déjà passé',
    body: 'Je vous prie de bien vouloir, véritablement : un registre spontanément plus soutenu, même au téléphone. Le goudron pour la route, ça va aller en rassurance, causer pour parler. Et le piège : tout à l’heure peut désigner un moment déjà passé, pas seulement un moment à venir. EN: A spontaneously more formal register, plus local vocabulary; the real trap is tout à l’heure, which can point to the past, not only the future.',
    examples: [
      { itemId: E(2266), note: 'tout à l’heure, déjà passé' },
      { itemId: E(2269), note: 'le goudron, pour la route' },
      { itemId: E(2271), note: 'ça va aller, en rassurance' },
    ],
  },

  /** Act 7: degraded audio. */
  panne: {
    term: 'la panne de son',
    title: 'Trois pannes, trois réparations',
    body: 'Un mot entier disparu se complète avec la suite. Un mot seulement abîmé se complète souvent avec son début. Une phrase couverte par un bruit de fond attend la reformulation. Dans tous les cas, jamais un mot inventé au hasard : seulement ce que le contexte confirme vraiment. EN: A fully lost word is completed by what follows; a damaged word, by its start; a sentence masked by background noise waits for the rephrasing. Never guess at random.',
    examples: [
      { itemId: E(2281), note: 'un mot entier perdu, la suite confirme' },
      { itemId: E(2282), note: 'un mot abîmé, le début suffit' },
      { itemId: E(2289), note: 'les trois cases d’une panne' },
    ],
  },

  /** Act 9: the exam formats, under these stacked conditions. */
  epreuve: {
    term: 'l’épreuve experte',
    title: 'Le triage, en une seule écoute',
    body: 'Aux formats DALF C2, TCF et TEF, la consigne et les options se lisent avant le premier mot entendu. Un accent inconnu, à l’épreuve, n’est jamais un hasard : il fait partie de ce qu’on évalue. Et une option qui répète exactement un mot entendu est parfois le piège, pas la confirmation. EN: In DALF C2, TCF and TEF formats, read the instructions first; an unfamiliar accent is part of the test, and an option that echoes a heard word is sometimes the trap.',
    examples: [
      { itemId: E(2310), note: 'lire avant d’écouter' },
      { itemId: E(2311), note: 'le piège de l’écho' },
      { itemId: E(2312), note: 'un accent, jamais un hasard, à l’épreuve' },
    ],
  },
};
