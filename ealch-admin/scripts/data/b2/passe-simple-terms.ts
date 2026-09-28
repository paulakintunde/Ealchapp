// b2.08.l1 « Reconnaître le passé simple »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters. The two longest
// (« le narrateur » 12, « premier plan » 12, « le participe » 12,
// « l’irrégulier » 12) are never used three together.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».
//
// RECOGNITION ONLY: every example is either a passé simple line to READ or
// the passé composé a speaker would say. No body asks for a form.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './passe-simple-corpus.ts';

export const PS_TERMS: Record<string, LessonTerm> = {
  ecrit: {
    term: 'l’écrit',
    title: 'Un temps de la page, pas de la bouche',
    body: "Le passé simple vit dans les contes, les romans, les livres d'histoire, les biographies et les grands récits de presse. Dans une conversation, même sur un souvenir très ancien, on dit le passé composé. EN: The passé simple lives in written narrative; in conversation people use the passé composé.",
    examples: [
      { itemId: E(1015), note: 'un manuel d’histoire' },
      { itemId: E(1017), note: 'une rétrospective de presse' },
      { itemId: E(1021), note: 'la même chose à l’oral : le passé composé' },
    ],
  },

  finale: {
    term: 'les finales',
    title: 'Quatre familles de finales',
    body: "Tous les verbes en -er font -a et -èrent. Les verbes en -ir et presque tous les verbes en -re font -it et -irent. Beaucoup de verbes en -oir font -ut et -urent. Venir et tenir font -int et -inrent. EN: Four ending families: -a, -it, -ut, -int, each with its plural.",
    examples: [
      { itemId: E(1030), note: '-a : parler, fermer' },
      { itemId: E(1050), note: '-it : partir' },
      { itemId: E(1072), note: '-ut : devoir' },
    ],
  },

  participe: {
    term: 'le participe',
    title: 'La clé du participe',
    body: "Le passé simple ressemble souvent au participe que tu connais : pris et prit, lu et lut, fini et finit, eu et eut. Entends le participe, et tu retrouves le verbe. Attention aux verbes en -re : répondit, mais répondu. EN: The passé simple often sounds like the participle you already know.",
    examples: [
      { itemId: E(1111), note: 'prit, comme pris' },
      { itemId: E(1076), note: 'lut, comme lu' },
      { itemId: E(1052), note: 'répondit, mais répondu' },
    ],
  },

  infinitif: {
    term: 'l’infinitif',
    title: 'Remonter au verbe',
    body: "Pour comprendre une forme, remonte à son infinitif : enlève la finale, cherche le verbe que tu connais. Frappa donne frapper, partirent donne partir, reçut donne recevoir. Le dictionnaire, lui, ne connaît que l'infinitif. EN: To understand a form, work back to its infinitive.",
    examples: [
      { itemId: E(1000), note: 'frappa : frapper' },
      { itemId: E(1080), note: 'reçut : recevoir' },
      { itemId: E(1096), note: 'devint : devenir' },
    ],
  },

  irregulier: {
    term: 'l’irrégulier',
    title: 'Les douze formes à connaître par cœur',
    body: "Fut, eut, fit, vint, prit, dit, vit, put, dut, mit, naquit, mourut : ces douze formes portent une grande partie des récits. Certaines ressemblent au participe ; naquit et mourut ne ressemblent à rien. EN: Twelve irregular forms carry most narrative text; learn to recognise them on sight.",
    examples: [
      { itemId: E(1105), note: 'fut : être' },
      { itemId: E(1109), note: 'fit : faire' },
      { itemId: E(1117), note: 'naquit : naître' },
    ],
  },

  sosie: {
    term: 'les sosies',
    title: 'Les formes qui en cachent une autre',
    body: "Il finit, il dit, il sourit sont aussi des présents. Il vit peut venir de voir ou de vivre. Vint se prononce comme vingt. Quand une forme a un sosie, c'est le reste de la phrase qui tranche. EN: Some forms double as another tense or verb; the rest of the sentence decides.",
    examples: [
      { itemId: E(1062), note: 'finit, un présent : tous les soirs' },
      { itemId: E(1113), note: 'vit la lumière : voir' },
      { itemId: E(1128), note: 'vit à Dakar : vivre' },
    ],
  },

  personne: {
    term: 'la personne',
    title: 'Il, elle, ils, elles',
    body: "Presque tout le passé simple est à la troisième personne. La finale -rent veut toujours dire ils ou elles. Je et nous apparaissent dans les souvenirs et les récits de voyage ; tu et vous, presque jamais. EN: Mostly third person; -rent is always ils or elles.",
    examples: [
      { itemId: E(1130), note: 'regardèrent : ils' },
      { itemId: E(1040), note: 'arrivâmes : nous, un récit de voyage' },
      { itemId: E(1139), note: 'compris : je, un souvenir' },
    ],
  },

  premier: {
    term: 'premier plan',
    title: 'Ce qui fait avancer l’histoire',
    body: "Le passé simple porte les événements, l'un après l'autre : c'est le premier plan. Il a exactement le rôle du passé composé dans un récit oral. Enlève ces verbes, et l'histoire s'arrête. EN: The passé simple carries the events: the foreground.",
    examples: [
      { itemId: E(1148), note: 'soudain : un événement' },
      { itemId: E(1154), note: 'deux événements qui se suivent' },
      { itemId: E(1156), note: 'long, mais fermé : premier plan aussi' },
    ],
  },

  decor: {
    term: 'le décor',
    title: 'L’imparfait, à l’arrière-plan',
    body: "Autour du passé simple, l'imparfait garde son rôle : le temps qu'il faisait, ce qui se passait déjà, ce qui durait. Quand tu racontes le texte aujourd'hui, ces verbes ne bougent pas. EN: The imparfait keeps the background, and stays as it is when you retell the text.",
    examples: [
      { itemId: E(1147), note: 'la maison dormait : le décor' },
      { itemId: E(1145), note: 'pleuvait reste, arriva change' },
      { itemId: E(1013), note: 'le moulin tournait : ce qui durait' },
    ],
  },

  aujourdhui: {
    term: 'aujourd’hui',
    title: 'Ce que tu dirais à un ami',
    body: "Pour raconter un texte à l'oral, un seul temps change : le passé simple devient passé composé. L'imparfait et le plus-que-parfait restent. Vérifie l'auxiliaire (il naquit, il est né) et la place de rien, tout, enfin. EN: Only the passé simple changes when you retell; check the auxiliary and word order.",
    examples: [
      { itemId: E(1019), note: 'naquit, mourut : est née, est morte' },
      { itemId: E(1071), note: 'ne put rien : n’a rien pu' },
      { itemId: E(1167), note: 'était parti ne bouge pas' },
    ],
  },

  narrateur: {
    term: 'le narrateur',
    title: 'Qui raconte, et d’où',
    body: "Le narrateur n'est pas l'auteur : c'est la voix qui raconte. Il parle à la première personne (je, nous) ou à la troisième (il, elle). Son point de vue et son ton, sérieux ou ironique, disent souvent plus que les faits. EN: The narrator is the voice telling the story; their point of view and tone carry meaning.",
    examples: [
      { itemId: E(1180), note: 'je : un narrateur qui se souvient' },
      { itemId: E(1182), note: 'un ton ironique' },
      { itemId: E(1183), note: 'ce que le texte laisse entendre' },
    ],
  },
};
