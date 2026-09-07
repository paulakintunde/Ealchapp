// TCF Canada blanc-03 — Compréhension écrite, the lower slope (A1, A2, B1).
//
// One task per band. The upper slope is in ce-hi.ts and MUST follow this file
// in the array — order is the instrument here.
//
// ── Reading is not listening with the sound off ────────────────────────────
//
// A CE document is present the whole time, so nothing can be tested by memory
// and every question has to be answerable from the text as it sits there. The
// weight falls on where in the document the answer is, and on whether a
// plausible sentence nearby says something slightly different.
//
// Length is EXACT here, not predicted: STANDARD-tcf §4 gives a word count per
// band and a reading document fails for being too long as well as too short.
// These are written to the middle of each band rather than its floor, because
// three épreuves in a row came in short on the first pass.
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
// SELF-VERIFY: each document is a real object a beginner meets, and the answer
// is one retrievable line. No distractor appears in the text.

export const CE_A1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '001'),
  level: 'a1',
  label: 'Compréhension écrite · A1',
  prompt: 'Lisez les trois documents et choisissez la bonne réponse.',
  timingS: 170,
  targetItemIds: uniq(ITEMS.deplacements.a1, ITEMS.heureEtDate.a1, ITEMS.rpVoyage.a1),
  parts: [
    {
      label: 'Document 1 · un panneau',
      text:
        'ASCENSEUR EN PANNE\n' +
        'Merci de prendre l’escalier.\n' +
        'La réparation est prévue jeudi.\n' +
        'Nous vous prions de nous excuser.',
      items: [
        {
          q: 'Que faut-il faire ?',
          opts: ['Prendre l’escalier', 'Attendre l’ascenseur', 'Appeler le gardien', 'Sortir de l’immeuble'],
          correct: 0,
          why: 'Le panneau demande de prendre l’escalier pendant la panne.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 2 · un mot sur la porte',
      text:
        'Fermé pour la pause.\n' +
        'De retour à quatorze heures.\n' +
        'Pour une urgence, sonnez chez le voisin.\n' +
        'Merci de votre patience.',
      items: [
        {
          q: 'À quelle heure revient-on ?',
          opts: ['À quatorze heures', 'À midi', 'À seize heures', 'À dix heures'],
          correct: 0,
          why: 'Le mot indique un retour à quatorze heures.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 3 · une carte postale',
      text:
        'Cher Malik,\n' +
        'Il fait très beau ici. Nous marchons tous les jours et nous mangeons trop.\n' +
        'Je rentre dimanche prochain.\n' +
        'À très vite,\nSarah',
      items: [
        {
          q: 'Quand Sarah rentre-t-elle ?',
          opts: ['Dimanche prochain', 'Samedi', 'Dans un mois', 'Elle ne le dit pas'],
          correct: 0,
          why: 'La carte annonce un retour dimanche prochain.',
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
  timingS: 430,
  targetItemIds: uniq(
    ITEMS.transportsQuotidiens.a2,
    ITEMS.cuisine.a2,
    ITEMS.bureau.a2,
    ITEMS.musique.a2,
    ITEMS.sportsEtLoisirs.a2,
    ITEMS.deplacements.a2
  ),
  parts: [
    {
      label: 'Document 4 · un panneau de stationnement',
      text:
        'STATIONNEMENT INTERDIT\n' +
        'Le premier et le troisième mardi du mois, de huit heures à midi.\n' +
        'Nettoyage de la voirie.\n' +
        'Les véhicules encore présents seront enlevés aux frais du propriétaire.\n' +
        'Le stationnement est libre le reste du temps, y compris les autres mardis.',
      items: [
        {
          q: 'Quand le stationnement est-il interdit ?',
          opts: [
            'Le premier et le troisième mardi, le matin',
            'Tous les mardis matin',
            'Tous les jours de huit heures à midi',
            'Le premier mardi seulement',
          ],
          correct: 0,
          why: 'Le panneau précise lui-même que les autres mardis sont libres.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 5 · un cours de cuisine',
      text:
        'ATELIER CUISINE DU SAMEDI\n' +
        'Tous les samedis de dix heures à treize heures, à la maison de quartier.\n' +
        'Trente euros la séance, vingt-cinq euros pour les adhérents de l’association.\n' +
        'Le matériel et les ingrédients sont fournis. Apportez un contenant : ' +
        'vous repartez avec ce que vous avez préparé.\n' +
        'Huit places par séance. Inscription obligatoire le jeudi au plus tard.',
      items: [
        {
          q: 'Que faut-il apporter ?',
          opts: ['Un contenant', 'Les ingrédients', 'Un tablier', 'Rien du tout'],
          correct: 0,
          why: 'Matériel et ingrédients sont fournis ; il faut de quoi remporter son plat.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 6 · une consigne de sécurité',
      text:
        'ATELIER · CONSIGNES\n' +
        'Les lunettes de protection sont obligatoires dans tout l’atelier, ' +
        'y compris pour ceux qui ne travaillent pas sur les machines.\n' +
        'Les gants sont obligatoires à la découpe, interdits à la perceuse.\n' +
        'Les cheveux longs sont attachés.\n' +
        'En cas de doute sur une machine, demandez avant, jamais pendant.',
      items: [
        {
          q: 'Quand les gants sont-ils interdits ?',
          opts: ['À la perceuse', 'À la découpe', 'Dans tout l’atelier', 'Jamais'],
          correct: 0,
          why: 'Obligatoires à la découpe, interdits à la perceuse : les deux règles sont dans la même phrase.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 7 · un programme de festival',
      text:
        'FESTIVAL DE CORBENY · samedi\n' +
        'Scène du Parc : concerts de quatorze heures à dix-neuf heures. Entrée libre.\n' +
        'Scène du Marché : concerts de dix-huit heures à minuit. Billet à douze euros.\n' +
        'Scène de la Halle : ateliers et rencontres, toute la journée. Entrée libre.\n' +
        'Le billet de la Scène du Marché donne accès aux trois scènes.',
      items: [
        {
          q: 'Quelle scène est payante ?',
          opts: ['La Scène du Marché', 'La Scène du Parc', 'La Scène de la Halle', 'Les trois'],
          correct: 0,
          why: 'Les deux autres sont en entrée libre ; seul le Marché a un billet.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 8 · une fiche d’inscription',
      text:
        'CLUB DE NATATION · inscription\n' +
        'Cotisation annuelle : cent dix euros, payable en une ou trois fois.\n' +
        'Certificat médical obligatoire, daté de moins de six mois.\n' +
        'Deux séances d’essai gratuites avant de s’engager.\n' +
        'Le bonnet est fourni la première année ; le maillot et les lunettes restent à votre charge.',
      items: [
        {
          q: 'Qu’est-ce qui est fourni par le club ?',
          opts: ['Le bonnet', 'Le maillot', 'Les lunettes', 'Le certificat médical'],
          correct: 0,
          why: 'Le bonnet la première année ; maillot et lunettes restent à la charge de l’adhérent.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 9 · une annonce de covoiturage',
      text:
        'COVOITURAGE · Vaubourg vers Corbeny\n' +
        'Du lundi au vendredi, départ à sept heures dix, retour à dix-huit heures.\n' +
        'Trois euros le trajet, six euros l’aller-retour.\n' +
        'Deux places disponibles. Non-fumeur. Petit bagage accepté, valise non.\n' +
        'Je pars à l’heure : merci d’être là cinq minutes avant.',
      items: [
        {
          q: 'Que peut-on emporter ?',
          opts: ['Un petit bagage', 'Une valise', 'Un animal', 'Rien'],
          correct: 0,
          why: 'Petit bagage accepté, valise refusée : la distinction est explicite.',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ B1 — positions 10 to 19 ═════════════════════════════════════════════ */
//
// Seven documents, ten questions. The three that carry two ask for a fact AND
// for what the document is DOING with it.

export const CE_B1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '003'),
  level: 'b1',
  label: 'Compréhension écrite · B1',
  prompt: 'Lisez les sept documents et choisissez la bonne réponse.',
  timingS: 850,
  targetItemIds: uniq(
    ITEMS.immigrationEtCitoyennete.b1,
    ITEMS.examensEtDiplomes.b1,
    ITEMS.ecologie.b1,
    ITEMS.appareils.b1,
    ITEMS.voisinage.b1,
    ITEMS.cuisine.b1,
    ITEMS.maison.b1
  ),
  parts: [
    {
      label: 'Document 10 · un programme de mentorat',
      text:
        'Depuis deux ans, l’association Passerelle met en relation des personnes récemment arrivées ' +
        'et des habitants installés de longue date. Cent vingt binômes ont été formés.\n\n' +
        'Le programme ne propose ni cours de langue ni aide administrative : ' +
        'd’autres structures le font déjà et le font mieux. ' +
        'Un binôme se voit deux heures par mois, sans programme imposé, ' +
        'et la seule consigne donnée aux mentors est de ne pas transformer la rencontre ' +
        'en rendez-vous d’aide.\n\n' +
        'C’est cette consigne qui surprend le plus les bénévoles, et c’est elle ' +
        'qui explique le taux de poursuite : au bout d’un an, huit binômes sur dix se voient encore. ' +
        'Les programmes construits autour d’un service à rendre s’arrêtent quand le service ' +
        'n’est plus nécessaire.',
      items: [
        {
          q: 'Que ne fait pas ce programme ?',
          opts: [
            'Des cours de langue et de l’aide administrative',
            'Des rencontres régulières',
            'La formation des mentors',
            'Le suivi des binômes',
          ],
          correct: 0,
          why: 'D’autres structures le font déjà et le font mieux, dit le texte.',
          band: 'b1',
        },
        {
          q: 'À quoi le texte attribue-t-il la durée des binômes ?',
          opts: [
            'À l’absence de service à rendre',
            'Au nombre d’heures mensuelles',
            'À la formation des bénévoles',
            'À la taille de l’association',
          ],
          correct: 0,
          why: 'Les programmes construits autour d’un service s’arrêtent quand le service cesse d’être utile.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 11 · un dossier d’inscription',
      text:
        'INSCRIPTION EN PREMIÈRE ANNÉE · pièces à fournir\n\n' +
        'Le dossier se dépose en ligne avant le 15 juin. Aucun envoi papier n’est accepté.\n\n' +
        'Pièces obligatoires : relevé de notes des deux dernières années, ' +
        'pièce d’identité en cours de validité, et attestation de niveau de français ' +
        'pour les candidats dont la scolarité s’est déroulée hors de France.\n\n' +
        'Pièce facultative mais recommandée : une lettre décrivant votre projet. ' +
        'Elle n’est pas notée. Elle est lue lorsque deux dossiers sont équivalents, ' +
        'ce qui arrive chaque année sur une trentaine de places.\n\n' +
        'Un dossier incomplet au 15 juin n’est pas examiné, et aucune relance n’est envoyée : ' +
        'vérifiez l’accusé de réception, qui liste les pièces reçues.',
      items: [
        {
          q: 'Qui doit fournir une attestation de français ?',
          opts: [
            'Les candidats scolarisés hors de France',
            'Tous les candidats',
            'Les candidats étrangers uniquement',
            'Personne, elle est facultative',
          ],
          correct: 0,
          why: 'Le critère est le lieu de scolarité, pas la nationalité.',
          band: 'b1',
        },
        {
          q: 'À quoi sert la lettre de projet ?',
          opts: [
            'À départager deux dossiers équivalents',
            'À obtenir des points supplémentaires',
            'À remplacer le relevé de notes',
            'À demander une bourse',
          ],
          correct: 0,
          why: 'Elle n’est pas notée ; elle est lue quand deux dossiers se valent.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 12 · les jardins partagés et l’eau',
      text:
        'La commune compte neuf jardins partagés, et la question de l’eau revient à chaque été.\n\n' +
        'Trois d’entre eux sont raccordés au réseau et paient une facture collective, ' +
        'répartie entre les parcelles. Les six autres fonctionnent avec des cuves de récupération, ' +
        'qui suffisent jusqu’en juillet et rarement au-delà.\n\n' +
        'Une étude commandée par la mairie recommande de raccorder les six, ' +
        'pour un coût de quarante mille euros. Les jardiniers concernés y sont majoritairement ' +
        'opposés, et pas pour des raisons de dépense : ils estiment que la contrainte de l’eau ' +
        'a produit des choix de culture qu’un raccordement effacerait.\n\n' +
        'La mairie tranchera en novembre. Elle indique déjà qu’un raccordement, ' +
        's’il est voté, restera facultatif parcelle par parcelle.',
      items: [
        {
          q: 'Pourquoi les jardiniers refusent-ils le raccordement ?',
          opts: [
            'La contrainte de l’eau a façonné leurs cultures',
            'Le coût est trop élevé',
            'Les cuves suffisent toute l’année',
            'Ils n’ont pas été consultés',
          ],
          correct: 0,
          why: 'Le texte écarte explicitement les raisons de dépense.',
          band: 'b1',
        },
        {
          q: 'Qu’annonce déjà la mairie ?',
          opts: [
            'Le raccordement resterait facultatif',
            'Le raccordement est abandonné',
            'Les cuves seront supprimées',
            'La décision est reportée à l’an prochain',
          ],
          correct: 0,
          why: 'Facultatif parcelle par parcelle, si le raccordement est voté en novembre.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 13 · un vélo en libre-service',
      text:
        'PREMIÈRE UTILISATION\n\n' +
        'Approchez votre carte du lecteur situé sur la borne, pas sur le vélo. ' +
        'Le vélo se déverrouille après un signal sonore ; tirez-le vers vous sans forcer.\n\n' +
        'La première demi-heure est comprise dans l’abonnement. ' +
        'Chaque demi-heure suivante est facturée un euro, et le compteur s’arrête ' +
        'à l’accroche, pas à l’arrivée : un vélo mal accroché continue de tourner.\n\n' +
        'Si la borne d’arrivée est pleine, appuyez sur le bouton bleu : ' +
        'vous obtenez quinze minutes supplémentaires gratuites pour rejoindre une autre station. ' +
        'Ce bouton ne fonctionne qu’une fois par trajet.\n\n' +
        'Un vélo présentant un défaut se signale sur la borne, avant de le reposer : ' +
        'tournez la selle vers l’arrière pour prévenir l’usager suivant. ' +
        'Un vélo signalé n’est pas facturé, même si le trajet a dépassé la demi-heure incluse, ' +
        'à condition que le signalement soit fait au retour et non le lendemain.',
      items: [
        {
          q: 'Quand le compteur s’arrête-t-il ?',
          opts: [
            'Quand le vélo est correctement accroché',
            'Quand vous arrivez à la station',
            'Après la première demi-heure',
            'Quand vous appuyez sur le bouton bleu',
          ],
          correct: 0,
          why: 'À l’accroche, pas à l’arrivée : un vélo mal accroché continue de tourner.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 14 · le bruit des chantiers',
      text:
        'Les travaux bruyants sont autorisés du lundi au vendredi de huit heures à dix-neuf heures, ' +
        'et le samedi de neuf heures à midi. Ils sont interdits le dimanche et les jours fériés.\n\n' +
        'Ces horaires valent pour les chantiers privés. Les travaux de voirie menés par la commune ' +
        'peuvent s’en écarter, sur autorisation écrite, lorsqu’une intervention de nuit ' +
        'gêne moins la circulation qu’une intervention de jour.\n\n' +
        'C’est cette exception qui produit l’essentiel des plaintes reçues en mairie, ' +
        'alors qu’elle concerne moins de cinq chantiers par an. ' +
        'Les riverains la découvrent la veille, par un avis déposé dans les boîtes aux lettres, ' +
        'ce qui explique l’effet de surprise davantage que le bruit lui-même.',
      items: [
        {
          q: 'D’où vient l’essentiel des plaintes ?',
          opts: [
            'Des chantiers de nuit autorisés par exception',
            'Des chantiers privés du samedi',
            'Des travaux du dimanche',
            'Du bruit des engins de voirie',
          ],
          correct: 0,
          why: 'Moins de cinq chantiers par an, mais découverts la veille : la surprise plus que le bruit.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 15 · les repas de la cantine',
      text:
        'La commune a modifié son marché de restauration scolaire il y a dix-huit mois. ' +
        'Le nouveau prestataire cuisine sur place, dans une cuisine réaménagée, ' +
        'au lieu de livrer des plats préparés à quarante kilomètres.\n\n' +
        'Le coût par repas est passé de trois euros vingt à trois euros quatre-vingts. ' +
        'La part payée par les familles n’a pas bougé : la différence est absorbée par la commune.\n\n' +
        'Le gaspillage, lui, a chuté de près de moitié. Les services y voient la preuve ' +
        'que les enfants mangent ce qu’ils reconnaissent. ' +
        'La diététicienne du secteur est plus prudente : elle note que le changement ' +
        'a coïncidé avec la fin du plateau unique, remplacé par un service à table, ' +
        'et qu’on ne peut pas attribuer le résultat à une seule des deux mesures.',
      items: [
        {
          q: 'Quelle prudence exprime la diététicienne ?',
          opts: [
            'Deux changements ont eu lieu en même temps',
            'Le gaspillage n’a pas vraiment baissé',
            'Le coût est trop élevé',
            'Les enfants mangent moins qu’avant',
          ],
          correct: 0,
          why: 'La cuisine sur place et la fin du plateau unique sont simultanées.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 16 · un règlement de copropriété',
      text:
        'ARTICLE 12 · TRAVAUX DANS LES PARTIES PRIVATIVES\n\n' +
        'Les travaux d’aménagement intérieur sont libres, sauf s’ils touchent un mur porteur, ' +
        'une canalisation commune ou l’aspect extérieur du bâtiment.\n\n' +
        'Dans ces trois cas, une autorisation de l’assemblée générale est nécessaire, ' +
        'et elle doit être demandée avant le début des travaux. ' +
        'Une régularisation après coup est possible mais reste à la discrétion de l’assemblée, ' +
        'qui peut exiger la remise en état aux frais du copropriétaire.\n\n' +
        'Le remplacement des fenêtres relève de l’aspect extérieur, y compris à l’identique : ' +
        'c’est le cas le plus fréquent et celui qui surprend le plus, ' +
        'car les occupants le considèrent naturellement comme un travail intérieur.\n\n' +
        'Le syndic tient à disposition un modèle de demande d’une page. ' +
        'Une demande déposée moins de trois semaines avant une assemblée ' +
        'est reportée à la suivante, ce qui représente en pratique six mois d’attente.',
      items: [
        {
          q: 'Pourquoi le remplacement des fenêtres est-il soumis à autorisation ?',
          opts: [
            'Il touche à l’aspect extérieur du bâtiment',
            'Il concerne un mur porteur',
            'Il modifie une canalisation commune',
            'Il coûte plus de mille euros',
          ],
          correct: 0,
          why: 'Y compris à l’identique, précise l’article, ce qui est la source de la surprise.',
          band: 'b1',
        },
      ],
    },
  ],
};
