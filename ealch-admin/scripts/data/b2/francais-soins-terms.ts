// b2.28.l1 « Le français des soins »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters; most sections carry one or
// two chips, and no section carries three labels of 12 or 13 characters.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './francais-soins-corpus.ts';

export const FRANCAIS_SOINS_TERMS: Record<string, LessonTerm> = {
  precision: {
    term: 'la précision',
    title: 'Être précis, ce n’est pas être savant',
    body: 'Le médecin n’a pas besoin de tes mots techniques : il a besoin de savoir où, depuis quand, comment et combien. Une phrase précise avec des mots simples vaut mieux qu’un mot savant mal placé. EN: Precision means where, since when, how and how much, in plain words.',
    examples: [
      { itemId: E(1000), note: 'le lieu, la durée et ce qui déclenche, en une phrase' },
      { itemId: E(1003), note: 'le motif de consultation' },
      { itemId: E(1006), note: 'noter avant de venir' },
    ],
  },

  duree: {
    term: 'la durée',
    title: 'Le début, la durée, le rythme',
    body: 'Il y a donne le moment où ça a commencé ; depuis et ça fait… que donnent la durée d’une chose qui continue. Par moments, de plus en plus, ça va et ça vient disent le rythme. EN: Il y a gives the start; depuis gives the duration; the rest gives the rhythm.',
    examples: [
      { itemId: E(1013), note: 'il y a : le début' },
      { itemId: E(1023), note: 'ça fait… que : la durée' },
      { itemId: E(1020), note: 'le rythme' },
    ],
  },

  intensite: {
    term: 'l’intensité',
    title: 'La force d’une douleur',
    body: 'Le médecin te demande souvent une note sur une échelle de zéro à dix. Donne un chiffre, puis dis quand il change : le jour, la nuit, à l’effort. Il ne cherche pas le bon chiffre, il cherche ton chiffre. EN: Give a number from zero to ten, then say when it changes.',
    examples: [
      { itemId: E(1035), note: 'une note, avec je dirais' },
      { itemId: E(1036), note: 'quand elle change' },
      { itemId: E(1037), note: 'les deux bouts de l’échelle' },
    ],
  },

  antecedents: {
    term: 'antécédents',
    title: 'Ce qui est venu avant',
    body: 'Tes antécédents, ce sont tes maladies, tes opérations, tes allergies et celles de ta famille. Ils aident le médecin à comprendre tes symptômes d’aujourd’hui. Si tu ne sais pas, dis-le : c’est aussi une information. EN: Your medical history helps the doctor read today’s symptoms.',
    examples: [
      { itemId: E(1047), note: 'personnels et familiaux' },
      { itemId: E(1049), note: 'une opération, avec l’âge' },
      { itemId: E(1053), note: 'une allergie, avec ce qui s’est passé' },
    ],
  },

  posologie: {
    term: 'la posologie',
    title: 'Combien, quand, combien de temps',
    body: 'La posologie dit la dose, le moment de la prise (à jeun, au cours du repas, en cas de besoin) et la durée du traitement. Elle vient de ton médecin ou de ton pharmacien : si un mot n’est pas clair, fais-le préciser. EN: The dosage says how much, when, and for how long; have any unclear word explained.',
    examples: [
      { itemId: E(1080), note: 'au cours du repas' },
      { itemId: E(1083), note: 'en cas de besoin' },
      { itemId: E(1095), note: 'les trois questions' },
    ],
  },

  notice: {
    term: 'la notice',
    title: 'Lire une notice par rubriques',
    body: 'Une notice suit toujours le même plan : à quoi sert le médicament, ce qu’il faut savoir avant, comment le prendre, les effets indésirables, la conservation. Tu vas droit à la rubrique qui répond à ta question. EN: A leaflet always follows the same plan; go straight to the section you need.',
    examples: [
      { itemId: E(1097), note: 'les contre-indications' },
      { itemId: E(1098), note: 'le mot de la notice' },
      { itemId: E(1112), note: 'la stratégie' },
    ],
  },

  parcours: {
    term: 'le parcours',
    title: 'Le parcours de soins',
    body: 'Chaque pays organise les soins à sa façon : médecin traitant, carte Vitale et mutuelle en France ; carte d’assurance maladie, médecin de famille et 811 au Québec ; mutualité en Belgique ; assurance de base en Suisse. Les mots changent, les questions restent. EN: Each country has its own care pathway and its own words.',
    examples: [
      { itemId: E(1115), note: 'France' },
      { itemId: E(1116), note: 'Québec' },
      { itemId: E(1119), note: 'Suisse' },
    ],
  },

  consentir: {
    term: 'consentir',
    title: 'Dire oui après avoir compris',
    body: 'Avant une intervention, tu as le droit de savoir ce qu’elle implique, ses risques et les autres options, de prendre le temps de réfléchir, de demander un deuxième avis et de changer d’avis. Ton accord n’a de valeur que s’il est éclairé. EN: Consent only counts when it is informed.',
    examples: [
      { itemId: E(1131), note: 'la question qui ouvre les autres' },
      { itemId: E(1137), note: 'un délai de réflexion' },
      { itemId: E(1139), note: 'ton droit' },
    ],
  },

  savant: {
    term: 'le mot savant',
    title: 'Le mot du médecin, le mot de tous les jours',
    body: 'Dans un compte rendu, le médecin écrit céphalée, asthénie, dyspnée, tachycardie. Ce n’est pas plus juste que mal de tête ou fatigue : c’est plus précis entre médecins. Toi, tu as le droit de demander le mot courant. EN: The technical word is for doctors; you may always ask for the everyday one.',
    examples: [
      { itemId: E(1148), note: 'céphalée : mal de tête' },
      { itemId: E(1151), note: 'tachycardie : le cœur qui s’emballe' },
      { itemId: E(1156), note: 'pour le demander' },
    ],
  },

  fauxami: {
    term: 'le faux ami',
    title: 'Les faux amis du soin',
    body: 'Une drogue n’est pas un médicament, un physicien n’est pas un médecin, une blessure n’est pas une bénédiction, un préservatif n’est pas un conservateur, et éventuel veut dire possible. Sensible veut dire sensitive ; sensible en anglais, c’est sensé. EN: These French words look like English ones and mean something else.',
    examples: [
      { itemId: E(1159), note: 'une drogue, un médicament' },
      { itemId: E(1160), note: 'un physicien, un médecin' },
      { itemId: E(1103), note: 'éventuel : possible' },
    ],
  },

  prudence: {
    term: 'la prudence',
    title: 'Entendre une nouvelle prudente',
    body: 'Un médecin qui n’est pas encore sûr choisit ses mots : il se peut que, il n’est pas exclu que, à ce stade, ce n’est pas alarmant. Écoute ces mots : ils disent jusqu’où il s’engage. Puis demande ce que ça veut dire concrètement. EN: Cautious words tell you how far the doctor commits; then ask what it means in practice.',
    examples: [
      { itemId: E(1171), note: 'une mauvaise nouvelle, adoucie' },
      { itemId: E(1173), note: 'possible, pas certain' },
      { itemId: E(1175), note: 'rassurer sans promettre' },
    ],
  },

  proche: {
    term: 'le proche',
    title: 'Parler pour un proche',
    body: 'Tu accompagnes un parent, un enfant, un ami : tu dis qui tu es, tu dis qu’il t’a demandé d’être là, tu rapportes ce qu’il ressent (il dit que…) et tu poses les questions qu’il n’ose pas poser. Tu parles pour lui, pas à sa place. EN: You speak for a relative, with their agreement, not instead of them.',
    examples: [
      { itemId: E(1164), note: 'qui tu es' },
      { itemId: E(1165), note: 'son accord' },
      { itemId: E(1168), note: 'rapporter ce qu’il dit' },
    ],
  },
};
