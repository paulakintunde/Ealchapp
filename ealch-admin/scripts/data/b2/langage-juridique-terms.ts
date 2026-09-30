// b2.27.l1 « Le langage juridique et administratif »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters; most sections carry one or two
// chips, and no section puts « langage clair » (13) beside two other long
// labels.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './langage-juridique-corpus.ts';

export const LANGAGE_JURIDIQUE_TERMS: Record<string, LessonTerm> = {
  grille: {
    term: 'la grille',
    title: 'Quatre questions pour lire un texte officiel',
    body: "Qui doit agir ? Que doit-il faire ? Avant quand ? Et que se passe-t-il sinon ? Sous les formules, un texte officiel répond toujours à ces quatre questions ; quand tu écris une réclamation, tu y réponds dans le même ordre. EN: Who, what, by when, and what happens otherwise: the four answers under every official text.",
    examples: [
      { itemId: E(1000), note: 'qui et quoi : vous, régler la somme' },
      { itemId: E(1003), note: 'quand : à compter de la réception' },
      { itemId: E(1002), note: 'sinon : une procédure' },
    ],
  },

  demarche: {
    term: 'la démarche',
    title: "Les mots d'une démarche",
    body: "Une démarche, ce sont toutes les étapes pour obtenir quelque chose d'une administration : on remplit un formulaire, on fournit des pièces justificatives, on dépose un dossier, et l'on reçoit un récépissé ou une convocation. EN: A procedure: the form, the supporting documents, the file, the receipt, the notice to attend.",
    examples: [
      { itemId: E(1024), note: 'une pièce manque' },
      { itemId: E(1026), note: 'le récépissé prouve le dépôt' },
      { itemId: E(1028), note: 'une convocation : un jour, une heure' },
    ],
  },

  delai: {
    term: 'le délai',
    title: 'Le temps de l’administration',
    body: "Un délai, c'est le temps qu'on te donne, pas un retard. Cherche toujours son point de départ (à compter de, dès réception) et sa fin (au plus tard le, jusqu'au… inclus). Avec avant le, le jour cité peut déjà être trop tard. EN: A délai is the time you are given; find where it starts and where it ends.",
    examples: [
      { itemId: E(1039), note: 'jusqu’au quinze inclus' },
      { itemId: E(1044), note: 'à compter du premier janvier' },
      { itemId: E(1048), note: 'le cachet de la poste faisant foi' },
    ],
  },

  obligation: {
    term: 'l’obligation',
    title: 'Devoir, pouvoir, avoir droit',
    body: "Être tenu de + infinitif : tu dois le faire. Avoir droit à + nom : une chose te revient. Être en droit de + infinitif : tu peux légitimement le faire. Sous peine de : voici la sanction, sinon. EN: Required to, entitled to (a thing), entitled to (do), or else.",
    examples: [
      { itemId: E(1054), note: 'être tenu de : une obligation' },
      { itemId: E(1055), note: 'avoir droit à : un nom suit' },
      { itemId: E(1058), note: 'sous peine de : la sanction' },
    ],
  },

  location: {
    term: 'la location',
    title: 'Le bail et ses mots',
    body: "Le bail est le contrat de location. En France, il parle du bailleur et du locataire ; au Québec, le Code civil dit le locateur. La location, c'est le fait de louer, ou le logement loué, jamais l'emplacement, et la caution peut être une somme ou une personne. EN: The lease and its words; location means renting, not a place.",
    examples: [
      { itemId: E(1065), note: 'une famille : louer, la location, le loyer' },
      { itemId: E(1074), note: 'le locateur, au Québec' },
      { itemId: E(1077), note: 'la caution, une personne' },
    ],
  },

  clause: {
    term: 'la clause',
    title: 'Lire une clause',
    body: "Une clause se lit en quatre temps : qui s'engage, à quoi, avant quand, et ce qui arrive sinon. Les petits mots t'y aident : sauf disposition contraire, le cas échéant, à défaut de, de plein droit, à la charge de. EN: A clause answers who, what, when and otherwise; the fixed phrases mark each part.",
    examples: [
      { itemId: E(1088), note: 'qui et quoi : s’engager à' },
      { itemId: E(1091), note: 'la condition et la sanction' },
      { itemId: E(1093), note: 'une règle générale, avec son exception' },
    ],
  },

  style: {
    term: 'le style',
    title: 'Le style officiel',
    body: "Le texte officiel efface celui qui agit : il est porté à votre connaissance, la présentation est exigée, toute demande ne pourra être traitée. L'impersonnel, le passif et le nom font la même chose : ils décrivent la règle, pas la personne. EN: Official style removes the person who acts: impersonal, passive, noun.",
    examples: [
      { itemId: E(1098), note: 'l’impersonnel' },
      { itemId: E(1100), note: 'le nom et le passif' },
      { itemId: E(1104), note: 'il vous appartient de' },
    ],
  },

  clair: {
    term: 'langage clair',
    title: 'Le langage clair',
    body: "Le langage clair donne les mêmes informations avec un sujet, un verbe actif et des phrases courtes : vous devez présenter une pièce d'identité. Garde le style officiel pour un avis ou un règlement ; pour une personne, préfère la clarté. EN: Plain language: same content, a subject, an active verb, short sentences.",
    examples: [
      { itemId: E(1101), note: 'vous devez présenter' },
      { itemId: E(1103), note: 'si… nous ne pourrons pas' },
      { itemId: E(1108), note: 'qui fait quoi' },
    ],
  },

  formule: {
    term: 'la formule',
    title: 'Les formules des documents officiels',
    body: "Je soussigné(e)… certifie… ; fait à…, le… ; pour servir et valoir ce que de droit ; lu et approuvé ; par la présente ; ci-joint. Soussigné s'accorde avec la personne qui signe ; ci-joint s'accorde après le nom. EN: The fixed formulas of attestations and letters, and their agreement.",
    examples: [
      { itemId: E(1119), note: 'soussignée : une femme signe' },
      { itemId: E(1121), note: 'la formule de fin' },
      { itemId: E(1123), note: 'ci-jointes : après le nom' },
    ],
  },

  recours: {
    term: 'le recours',
    title: 'Réclamer, contester, faire un recours',
    body: "Une réclamation conteste un service ou une facture auprès de l'organisme. Un recours demande qu'une décision soit revue : gracieux, à son auteur ; contentieux, devant un tribunal. Une mise en demeure fixe un dernier délai. EN: A complaint, an appeal, a formal notice: three steps, three addressees.",
    examples: [
      { itemId: E(1152), note: 'contester un montant' },
      { itemId: E(1157), note: 'le recours gracieux' },
      { itemId: E(1153), note: 'la mise en demeure' },
    ],
  },

  fauxami: {
    term: 'faux ami',
    title: 'Les faux amis du droit',
    body: "Un mot qui ressemble à l'anglais sans dire la même chose : éventuellement (peut-être), actuellement (en ce moment), une location (le fait de louer), la loi (un texte) et le droit (un domaine), le notaire (un juriste), une offense (une insulte). EN: Words that look English and are not: possibly, currently, renting, law.",
    examples: [
      { itemId: E(1176), note: 'éventuellement : peut-être' },
      { itemId: E(1177), note: 'le droit ou la loi' },
      { itemId: E(1166), note: 'la vente passe par le notaire' },
    ],
  },
};
