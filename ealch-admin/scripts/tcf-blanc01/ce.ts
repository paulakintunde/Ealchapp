// TCF Canada blanc-01 — Compréhension écrite, the lower slope (A1, A2, B1).
//
// Same shape as CO: one task per band, so a miss routes to material at the band
// it happened. The upper slope is in ce-hi.ts and MUST follow this file in the
// array — order is the instrument here.
//
// ── Reading is not listening with the sound off ────────────────────────────
//
// A CE document is present the whole time, so nothing can be tested by memory
// and every question has to be answerable from the text as it sits there. That
// removes the commonest listening trap (a fact said once and passed over) and
// puts the weight on where in the document the answer is, and whether a
// plausible sentence nearby says something slightly different.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId, uniq, ITEMS } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  taskType: 'ce_mcq' as const,
  skill: 'CE' as const,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ A1 — positions 1 to 3 ═══════════════════════════════════════════════ */
//
// SELF-VERIFY: each document is a real object a beginner meets — a price label,
// a timetable, a card — and the answer is one retrievable line. No distractor
// appears in the text.

export const CE_A1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '001'),
  level: 'a1',
  label: 'Compréhension écrite · A1',
  prompt: 'Lisez les trois documents et choisissez la bonne réponse.',
  timingS: 275,
  targetItemIds: uniq(ITEMS.marche.a1, ITEMS.transportsQuotidiens.a1, ITEMS.evenementsFamiliaux.a1),
  parts: [
    {
      label: 'Document 1 · une étiquette',
      playCount: 1,
      readWindowS: 0,
      durationS: 0,
      text: 'POMMES GOLDEN\n2,40 € le kilo\nOrigine : région de Vaubourg',
      items: [
        {
          q: 'Combien coûte un kilo de pommes ?',
          opts: ['2,40 €', '2,04 €', '24 €', '4,20 €'],
          correct: 0,
          why: 'L’étiquette indique 2,40 € le kilo.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 2 · un horaire d’autobus',
      playCount: 1,
      readWindowS: 0,
      durationS: 0,
      text: 'LIGNE 7 — arrêt Pralet\nDu lundi au vendredi : 7 h 15, 8 h 15, 9 h 15\nSamedi : 9 h 15 seulement\nDimanche : pas de service',
      items: [
        {
          q: 'Quand y a-t-il un bus le dimanche ?',
          opts: ['Jamais', 'À 7 h 15', 'À 9 h 15', 'Toutes les heures'],
          correct: 0,
          why: 'Le tableau indique « Dimanche : pas de service ».',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 3 · une carte',
      playCount: 1,
      readWindowS: 0,
      durationS: 0,
      text: 'Chère Amina,\nBon anniversaire ! On pense bien à toi.\nÀ bientôt,\nToute l’équipe du deuxième étage',
      items: [
        {
          q: 'Pourquoi envoie-t-on cette carte ?',
          opts: ['Pour un anniversaire', 'Pour un départ', 'Pour une naissance', 'Pour un déménagement'],
          correct: 0,
          why: '« Bon anniversaire ! » est la seule occasion mentionnée.',
          band: 'a1',
        },
      ],
    },
  ],
};

/* ═══ A2 — positions 4 to 9 ═══════════════════════════════════════════════ */
//
// SELF-VERIFY: one competing figure or condition per document, always present
// in the text — the candidate must read past it, not fail to find it.

export const CE_A2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '002'),
  level: 'a2',
  label: 'Compréhension écrite · A2',
  prompt: 'Lisez les six documents et choisissez la bonne réponse.',
  timingS: 555,
  targetItemIds: uniq(
    ITEMS.voisinage.a2,
    ITEMS.objets.a2,
    ITEMS.courses.a2,
    ITEMS.communaute.a2,
    ITEMS.sportsEtLoisirs.a2,
    ITEMS.maison.a2
  ),
  parts: [
    {
      label: 'Document 4 · un mot au voisin',
      playCount: 1,
      readWindowS: 0,
      durationS: 0,
      text:
        'Bonjour Madame Corbeny,\n' +
        'Le facteur a laissé un colis pour vous chez moi ce matin.\n' +
        'Je suis là après 18 h en semaine, et toute la journée samedi.\n' +
        'Appartement 4B.',
      items: [
        {
          q: 'Quand peut-on récupérer le colis en semaine ?',
          opts: ['Après 18 h', 'Le matin', 'Toute la journée', 'Avant 18 h'],
          correct: 0,
          why: '« Toute la journée » vaut pour le samedi. En semaine, c’est après 18 h.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 5 · une petite annonce',
      playCount: 1,
      readWindowS: 0,
      durationS: 0,
      text:
        'Vends vélo de ville, bon état, 120 €.\n' +
        'Freins changés l’an dernier. Panier et antivol fournis.\n' +
        'Pneus à remplacer prochainement.',
      items: [
        {
          q: 'Qu’est-ce qui est à prévoir après l’achat ?',
          opts: ['Changer les pneus', 'Changer les freins', 'Acheter un antivol', 'Acheter un panier'],
          correct: 0,
          why: 'Les freins sont déjà changés, le panier et l’antivol sont fournis. Restent les pneus.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 6 · une liste de courses',
      playCount: 1,
      readWindowS: 0,
      durationS: 0,
      text: 'Budget : 30 €\nPain 3 €\nFromage 9 €\nFruits 7 €\nCafé 8 €',
      items: [
        {
          q: 'Combien reste-t-il après ces achats ?',
          opts: ['3 €', '7 €', '30 €', '27 €'],
          correct: 0,
          why: '3 + 9 + 7 + 8 = 27. Sur 30 €, il reste 3 €.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 7 · une invitation',
      playCount: 1,
      readWindowS: 0,
      durationS: 0,
      text:
        'REPAS DE QUARTIER — samedi 14, à partir de midi, cour de l’immeuble.\n' +
        'Chacun apporte un plat à partager. Les boissons sont offertes par l’association.\n' +
        'En cas de pluie, le repas est reporté au samedi suivant.',
      items: [
        {
          q: 'Que faut-il apporter ?',
          opts: ['Un plat', 'Des boissons', 'Une chaise', 'Rien du tout'],
          correct: 0,
          why: 'Les boissons sont offertes ; chacun apporte un plat à partager.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 8 · les horaires de la piscine',
      playCount: 1,
      readWindowS: 0,
      durationS: 0,
      text:
        'PISCINE MUNICIPALE\n' +
        'Lundi à vendredi : 7 h – 21 h\n' +
        'Samedi et dimanche : 9 h – 18 h\n' +
        'Le bassin est réservé aux clubs le mardi de 18 h à 20 h.',
      items: [
        {
          q: 'Quand le public ne peut-il pas nager, alors que la piscine est ouverte ?',
          opts: ['Mardi de 18 h à 20 h', 'Dimanche après 18 h', 'Lundi avant 7 h', 'Samedi matin'],
          correct: 0,
          why: 'Les autres créneaux sont des fermetures. Le mardi soir, la piscine est ouverte mais réservée aux clubs.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 9 · une consigne de tri',
      playCount: 1,
      readWindowS: 0,
      durationS: 0,
      text:
        'Bac jaune : papier, carton, bouteilles en plastique.\n' +
        'Bac gris : tout le reste.\n' +
        'Le verre se dépose à la colonne, place du Marché. Pas dans le bac jaune.',
      items: [
        {
          q: 'Où faut-il déposer les bouteilles en verre ?',
          opts: ['À la colonne place du Marché', 'Dans le bac jaune', 'Dans le bac gris', 'Chez le gardien'],
          correct: 0,
          why: 'Le texte exclut explicitement le bac jaune pour le verre et renvoie à la colonne.',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ B1 — positions 10 to 19 ═════════════════════════════════════════════ */
//
// Seven documents, ten questions. The three that carry two ask for a fact AND
// for what the document is doing with it, which is the B1 step: holding the
// content and the intention together.

export const CE_B1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '003'),
  level: 'b1',
  label: 'Compréhension écrite · B1',
  prompt: 'Lisez les sept documents et choisissez la bonne réponse.',
  timingS: 925,
  targetItemIds: uniq(
    ITEMS.maison.b1,
    ITEMS.communaute.b1,
    ITEMS.sportsEtLoisirs.b1,
    ITEMS.rechercheEmploi.b1,
    ITEMS.voisinage.b1,
    ITEMS.appareils.b1,
    ITEMS.gouvernement.b1
  ),
  parts: [
    {
      label: 'Document 10 · une lettre au propriétaire',
      playCount: 1,
      readWindowS: 0,
      durationS: 0,
      text:
        'Madame,\n' +
        'Le chauffage de l’appartement ne fonctionne plus depuis le 3 novembre. Je vous l’ai signalé par téléphone le 4, ' +
        'puis par courriel le 8, sans réponse.\n' +
        'Un technicien est passé le 12 et a constaté qu’une pièce doit être commandée. Depuis, je n’ai plus de nouvelles.\n' +
        'Je vous demande de m’indiquer une date d’intervention avant la fin du mois. À défaut, je saisirai la commission ' +
        'départementale de conciliation.\n' +
        'Veuillez agréer, Madame, mes salutations distinguées.',
      items: [
        {
          q: 'Que demande précisément l’auteur de la lettre ?',
          opts: [
            'Une date d’intervention',
            'Le remboursement de son loyer',
            'Le remplacement du technicien',
            'La résiliation du bail',
          ],
          correct: 0,
          why: 'La demande est explicite : indiquer une date d’intervention avant la fin du mois.',
          band: 'b1',
        },
        {
          q: 'À quoi sert la dernière phrase ?',
          opts: [
            'À annoncer un recours si rien ne se passe',
            'À remercier la propriétaire',
            'À proposer un arrangement amiable',
            'À reconnaître une part de responsabilité',
          ],
          correct: 0,
          why: '« À défaut, je saisirai la commission » : c’est une menace de recours, formulée poliment.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 11 · une médiathèque ouvre',
      playCount: 1,
      readWindowS: 0,
      durationS: 0,
      text:
        'La médiathèque du quartier Pralet ouvrira ses portes le 8 mars, dans l’ancienne école fermée en 2019.\n' +
        'Le bâtiment appartenait à la commune, qui hésitait entre le vendre et le réhabiliter. Une consultation menée ' +
        'auprès des habitants a fait pencher la balance : sur 640 réponses, 71 % demandaient un lieu de lecture et de travail.\n' +
        'Le projet a coûté 1,4 million d’euros, dont un tiers de subventions régionales. La commune a renoncé à un parking ' +
        'prévu au même endroit.',
      items: [
        {
          q: 'Qu’est-ce qui a décidé du sort du bâtiment ?',
          opts: [
            'Une consultation des habitants',
            'Une subvention régionale',
            'La fermeture de l’école',
            'Le coût du parking',
          ],
          correct: 0,
          why: '« Une consultation menée auprès des habitants a fait pencher la balance. »',
          band: 'b1',
        },
        {
          q: 'À quoi la commune a-t-elle renoncé ?',
          opts: ['À un parking', 'À vendre le bâtiment à un promoteur', 'À une subvention', 'À rouvrir l’école'],
          correct: 0,
          why: 'La dernière phrase : la commune a renoncé à un parking prévu au même endroit.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 12 · règlement de la piscine',
      playCount: 1,
      readWindowS: 0,
      durationS: 0,
      text:
        'Le bonnet de bain est obligatoire dans tous les bassins.\n' +
        'Les enfants de moins de huit ans doivent être accompagnés dans l’eau par un adulte.\n' +
        'Deux exceptions : lors des cours encadrés par un maître-nageur, l’accompagnement n’est pas exigé ; ' +
        'et le bassin extérieur, ouvert en juillet et août, est dispensé du bonnet.',
      items: [
        {
          q: 'Quand un enfant de six ans peut-il être dans l’eau sans un adulte ?',
          opts: [
            'Pendant un cours encadré',
            'Dans le bassin extérieur',
            'En juillet et août',
            'Jamais',
          ],
          correct: 0,
          why: 'La première exception vise l’accompagnement ; la seconde ne concerne que le bonnet.',
          band: 'b1',
        },
        {
          q: 'Où le bonnet n’est-il pas exigé ?',
          opts: ['Dans le bassin extérieur', 'Pendant les cours encadrés', 'Dans tous les bassins', 'Pour les moins de huit ans'],
          correct: 0,
          why: 'La dispense de bonnet est attachée au bassin extérieur, pas aux cours.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 13 · une offre d’emploi',
      playCount: 1,
      readWindowS: 0,
      durationS: 0,
      text:
        'Recherchons agent d’accueil, 24 h par semaine.\n' +
        'Horaires variables selon un planning communiqué le 20 du mois pour le mois suivant.\n' +
        'Deux samedis par mois travaillés, récupérés le lundi.\n' +
        'Débutants acceptés, formation assurée sur place.',
      items: [
        {
          q: 'Quand le salarié connaît-il ses horaires ?',
          opts: [
            'Le 20 du mois précédent',
            'Une semaine à l’avance',
            'Le lundi de chaque semaine',
            'À la signature du contrat',
          ],
          correct: 0,
          why: 'Le planning est communiqué le 20 du mois pour le mois suivant.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 14 · compte rendu de copropriété',
      playCount: 1,
      readWindowS: 0,
      durationS: 0,
      text:
        'Point 3 — réfection de la cage d’escalier. Devis de 18 000 €. ' +
        'Le vote est reporté au prochain conseil, faute de quorum ce soir.\n' +
        'Point 4 — local à vélos. Accepté à l’unanimité, travaux au printemps.\n' +
        'Point 5 — interphone. Le syndic demandera un second devis avant toute décision.',
      items: [
        {
          q: 'Quelle décision a été prise ce soir-là ?',
          opts: [
            'La création d’un local à vélos',
            'La réfection de la cage d’escalier',
            'Le remplacement de l’interphone',
            'Aucune décision',
          ],
          correct: 0,
          why: 'L’escalier est reporté et l’interphone attend un devis. Seul le local à vélos est voté.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 15 · guide d’utilisation',
      playCount: 1,
      readWindowS: 0,
      durationS: 0,
      text:
        'Programme coton 60° : linge très sale, durée 2 h 10.\n' +
        'Programme rapide 30 min : linge peu sale, 3 kg maximum.\n' +
        'Ne pas utiliser le programme rapide avec de la lessive en poudre : elle se dissout mal sur un cycle court.',
      items: [
        {
          q: 'Que faut-il éviter avec le programme rapide ?',
          opts: [
            'La lessive en poudre',
            'Le linge très sale',
            'Une charge de 3 kg',
            'Une température de 30°',
          ],
          correct: 0,
          why: 'La consigne vise la poudre, qui se dissout mal sur un cycle court.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 16 · aides au permis de conduire',
      playCount: 1,
      readWindowS: 0,
      durationS: 0,
      text:
        'L’aide départementale au permis s’élève à 500 €. Elle s’adresse aux 18-25 ans domiciliés dans le département ' +
        'depuis au moins un an.\n' +
        'Elle est versée directement à l’auto-école, jamais au candidat.\n' +
        'Le dossier se dépose en ligne ou au guichet, avant le début de la formation.',
      items: [
        {
          q: 'À qui l’argent est-il versé ?',
          opts: ['À l’auto-école', 'Au candidat', 'À la famille', 'Au département'],
          correct: 0,
          why: '« Versée directement à l’auto-école, jamais au candidat. »',
          band: 'b1',
        },
      ],
    },
  ],
};
