// c1.03.l1 « La concordance littéraire »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6 (labels joined plus 2 per separator). Labels run 8 to 13
// characters. The two 13-character labels (« en même temps », « la
// concession », « l’antériorité ») are never shown together with a third chip.
//
// C1 LANGUAGE RULE: the body is natural, unsimplified French, addressed as
// « tu », then ONE English line starting « EN: ».
//
// RECOGNITION ONLY: every example is a literary line to READ or the sentence a
// writer would use today. No body asks for a form.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './concordance-litteraire-corpus.ts';

export const CL_TERMS: Record<string, LessonTerm> = {
  concordance: {
    term: 'concordance',
    title: 'Le subjonctif suit la note',
    body: "Dans un texte classique, le temps du subjonctif dépend de celui du verbe principal : un présent appelle un présent, un passé ou un conditionnel appelle un imparfait du subjonctif, ou un plus-que-parfait pour ce qui était déjà fait. EN: In a classic text the subjunctive’s tense follows the main verb’s.",
    examples: [
      { itemId: E(1800), note: 'souhaitait, puis revînt' },
      { itemId: E(1801), note: 'la même phrase, aujourd’hui' },
      { itemId: E(1812), note: 'la règle du roman classique' },
    ],
  },

  simultane: {
    term: 'en même temps',
    title: 'Le même moment, ou plus tard',
    body: "Sous un verbe principal au passé, le livre met l’imparfait du subjonctif quand l’action se passe au même moment ou plus tard : je doutais qu’il vînt ce soir-là, elle attendait qu’il revînt le lendemain. EN: Same moment or later: the imperfect subjunctive.",
    examples: [
      { itemId: E(1821), note: 'au même moment que le doute' },
      { itemId: E(1825), note: 'plus tard que l’attente' },
      { itemId: E(1837), note: 'une habitude, en même temps' },
    ],
  },

  anteriorite: {
    term: 'l’antériorité',
    title: 'Ce qui était déjà fait',
    body: "Quand l’action du subjonctif a eu lieu avant celle du verbe principal, le livre met le plus-que-parfait du subjonctif : il s’étonna qu’elle fût partie. Aujourd’hui, tu lis le subjonctif passé : qu’elle soit partie. EN: Already done before the main verb: the pluperfect subjunctive.",
    examples: [
      { itemId: E(1823), note: 'venu avant le doute' },
      { itemId: E(1835), note: 'déjà partie quand il s’étonne' },
      { itemId: E(1849), note: 'la pluie finie avant la sortie' },
    ],
  },

  conditionnel: {
    term: 'conditionnel',
    title: 'Un conditionnel principal',
    body: "Je voudrais, il serait bon, il aurait fallu : formé sur les terminaisons de l’imparfait, le conditionnel compte comme un passé pour la concordance classique. Le livre écrit donc qu’il vînt. Aujourd’hui : qu’il vienne. EN: A conditional main verb counts as a past in classical usage.",
    examples: [
      { itemId: E(1853), note: 'voudrais, puis vînt' },
      { itemId: E(1859), note: 'un conditionnel passé principal' },
      { itemId: E(1867), note: 'la phrase d’aujourd’hui' },
    ],
  },

  hypothese: {
    term: 'l’hypothèse',
    title: 'Eût-il su : s’il avait su',
    body: "En tête de phrase, eût-il su, fût-il arrivé, eût-on écouté ouvrent une hypothèse sur le passé : le verbe passe devant le sujet, et si disparaît. La suite en tire la conséquence, qui ne s’est pas réalisée. EN: Inverted eût-il su is a past hypothesis: if he had known.",
    examples: [
      { itemId: E(1871), note: 'eût-il su la vérité' },
      { itemId: E(1872), note: 's’il avait su' },
      { itemId: E(1875), note: 'n’eût été : sans' },
    ],
  },

  concession: {
    term: 'la concession',
    title: 'Fût-il roi : même s’il était roi',
    body: "La même inversion peut dire même si : fût-il roi, il devrait attendre son tour. Ce qui tranche, c’est la suite de la phrase : si elle va contre ce qu’on attendrait, c’est une concession. Dussé-je, si riche fût-il, serait-il ministre en sont d’autres formes. EN: Fût-il roi means even if he were king.",
    examples: [
      { itemId: E(1889), note: 'fût-il roi' },
      { itemId: E(1890), note: 'même s’il était roi' },
      { itemId: E(1896), note: 'dussé-je, à la première personne' },
    ],
  },

  discordance: {
    term: 'discordance',
    title: 'Quand l’auteur quitte la note',
    body: "Un auteur qui connaît la règle peut s’en écarter exprès : un imparfait du subjonctif après un présent pour dire un conditionnel (je ne crois pas qu’il le fît), un présent après un passé pour ce qui reste vrai aujourd’hui (voulut que vous soyez libres). EN: A deliberate break expresses another meaning or another moment.",
    examples: [
      { itemId: E(1907), note: 'fît : qu’il le ferait' },
      { itemId: E(1915), note: 'un présent pour ce qui dure' },
      { itemId: E(1912), note: 'un présent pour demain' },
    ],
  },

  norme: {
    term: 'la norme',
    title: 'Ce que disent les références',
    body: "L’OQLF donne l’imparfait du subjonctif comme règle de principe après un passé, et admet le présent. Grevisse constate que l’imparfait du subjonctif a quitté l’oral et que l’écrit le garde surtout pour être et avoir, et à la troisième personne du singulier. EN: The présent is accepted; the imperfect subjunctive survives mainly in writing.",
    examples: [
      { itemId: E(1931), note: 'l’OQLF' },
      { itemId: E(1930), note: 'qu’il fût, qu’il eût' },
      { itemId: E(1932), note: 'à l’oral' },
    ],
  },

  registre: {
    term: 'le registre',
    title: 'La forme rare dit quelque chose',
    body: "Aujourd’hui, une concordance stricte est une marque de registre : solennité dans un discours ou un article, ironie quand le style est trop grand pour la situation, pastiche quand l’auteur imite un siècle passé. EN: Strict concordance today signals solemnity, irony or pastiche.",
    examples: [
      { itemId: E(1953), note: 'la solennité' },
      { itemId: E(1945), note: 'l’ironie' },
      { itemId: E(1950), note: 'le poids de la forme' },
    ],
  },

  pastiche: {
    term: 'le pastiche',
    title: 'Imiter un style pour en jouer',
    body: "Un pastiche reprend les formes d’une époque, ici la concordance d’un roman du XIXe siècle, pour raconter une histoire d’aujourd’hui. Le décalage entre le style et le sujet fait sourire, sans moquerie forcément méchante. EN: A pastiche imitates a period style; the gap with the subject is the joke.",
    examples: [
      { itemId: E(1951), note: 'imiter la concordance' },
      { itemId: E(1947), note: 'une photocopieuse tragique' },
      { itemId: E(1949), note: 'le style trop grand' },
    ],
  },
};
