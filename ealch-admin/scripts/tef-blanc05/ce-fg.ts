// TEF Canada blanc-05 — Compréhension écrite, blocks D+E, F and G.
//
//   D+E  5 · lecture rapide                            · 2 documents
//   F   10 · documents administratifs et professionnels · 2 documents
//   G    8 · articles de presse                         · 1 article
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, FORMAT_VERSION, VARIANT, NOTES_CLOSED, taskId, ITEMS, uniq } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  taskType: 'ce_mcq' as const,
  skill: 'CE' as const,
  formatVersion: FORMAT_VERSION,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ Blocks D + E — Lecture rapide ═══════════════════════════════════════ */

export const CE_DE: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '004'),
  level: 'b1',
  label: 'Sections D et E',
  prompt: 'Lisez les documents et retrouvez les informations demandées.',
  timingS: 480,
  targetItemIds: uniq(ITEMS.hebergement, ITEMS.argentQuotidien),
  parts: [
    {
      label: 'Document 1 · comparatif d’assurances habitation',
      text:
        'ASSURANCE HABITATION · trois formules, appartement de 60 m²\n' +
        '\n' +
        'ESSENTIELLE · 12 €/mois · franchise 300 € · dégât des eaux et incendie · vol NON couvert\n' +
        'CONFORT · 19 €/mois · franchise 150 € · dégât des eaux, incendie, vol · bris de glace inclus\n' +
        'INTÉGRALE · 27 €/mois · franchise 0 € · toutes garanties · relogement jusqu’à 30 jours\n' +
        '\n' +
        'Toutes formules : résiliation possible à tout moment après un an.\n' +
        'Réduction de 10 % la première année pour une souscription en ligne.',
      items: [
        {
          q: 'Quelle est la formule la moins chère qui couvre le vol ?',
          opts: ['La CONFORT', 'L’ESSENTIELLE', 'L’INTÉGRALE', 'Aucune des trois'],
          correct: 0,
          why: 'ESSENTIELLE exclut le vol ; CONFORT le couvre à 19 €, moins que les 27 € d’INTÉGRALE.',
          band: 'b1',
        },
        {
          q: 'Combien coûte la formule CONFORT la première année, en ligne ?',
          opts: ['205,20 €', '228,00 €', '190,00 €', '171,00 €'],
          correct: 0,
          why: '19 × 12 = 228 €, moins 10 % de réduction, soit 205,20 €.',
          band: 'b2',
        },
        {
          q: 'Quand la résiliation devient-elle possible ?',
          opts: [
            'À tout moment, après la première année',
            'À chaque échéance annuelle uniquement',
            'Seulement pour la formule INTÉGRALE',
            'Dans les trente jours suivant la souscription',
          ],
          correct: 0,
          why: '« Toutes formules : résiliation possible à tout moment après un an. »',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 2 · barème de frais kilométriques',
      text:
        'FRAIS KILOMÉTRIQUES · barème interne\n' +
        '\n' +
        'Voiture : 0,52 € par kilomètre pour les 1 000 premiers km du mois, puis 0,31 € au-delà.\n' +
        'Deux-roues : 0,38 € par kilomètre, sans palier.\n' +
        'Les trajets domicile-travail ne sont jamais remboursés.\n' +
        'Note de frais à déposer avant le 5 du mois suivant ; au-delà, elle bascule sur le mois d’après.',
      items: [
        {
          q: 'Combien perçoit un salarié ayant fait 1 200 km en voiture dans le mois ?',
          opts: ['582 €', '624 €', '520 €', '372 €'],
          correct: 0,
          why: '1 000 × 0,52 = 520 €, puis 200 × 0,31 = 62 €, soit 582 €.',
          band: 'b2',
        },
        {
          q: 'Quels trajets ne sont jamais remboursés ?',
          opts: [
            'Les trajets entre le domicile et le travail',
            'Les trajets effectués en deux-roues',
            'Les trajets au-delà de 1 000 km',
            'Les trajets déclarés après le 5 du mois',
          ],
          correct: 0,
          why: '« Les trajets domicile-travail ne sont jamais remboursés. » Une note tardive bascule au mois suivant, elle n’est pas perdue.',
          band: 'b1',
        },
      ],
    },
  ],
};

/* ═══ Block F — Documents administratifs et professionnels ════════════════ */

export const CE_F: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '005'),
  level: 'b2',
  label: 'Section F',
  prompt: 'Lisez les documents et choisissez la bonne réponse.',
  timingS: 900,
  targetItemIds: uniq(ITEMS.soins, ITEMS.droit),
  parts: [
    {
      label: 'Document 1 · formulaire de consentement',
      text:
        'CONSENTEMENT AUX SOINS · notice d’information\n' +
        '\n' +
        'Article 1. Le consentement est recueilli avant tout acte, après une information sur les ' +
        'bénéfices attendus, les risques fréquents et les alternatives, y compris l’absence de soin.\n' +
        '\n' +
        'Article 2. Le consentement est révocable à tout moment, sans motif et sans conséquence sur la ' +
        'qualité de la prise en charge ultérieure.\n' +
        '\n' +
        'Article 3. La signature du formulaire ne vaut pas décharge de responsabilité : elle atteste que ' +
        'l’information a été donnée, non que le patient accepte un risque de faute.\n' +
        '\n' +
        'Article 4. En cas d’urgence vitale et d’impossibilité de recueillir le consentement, l’acte est ' +
        'pratiqué et l’information est donnée dès que l’état du patient le permet.\n' +
        '\n' +
        'Article 5. Le patient peut demander qu’un proche soit présent lors de l’entretien préalable. ' +
        'Ce proche n’est pas signataire et ne consent pas à sa place.',
      items: [
        {
          q: 'Sur quoi porte l’information préalable ?',
          opts: [
            'Les bénéfices, les risques fréquents et les alternatives, y compris l’absence de soin',
            'Les seuls bénéfices attendus de l’acte proposé',
            'Les risques exceptionnels autant que les risques les plus fréquents de l’acte',
            'Le coût de l’acte et son remboursement',
          ],
          correct: 0,
          why: 'L’article 1 énumère les trois, et inclut explicitement l’absence de soin parmi les alternatives.',
          band: 'b2',
        },
        {
          q: 'Que se passe-t-il si le patient revient sur son consentement ?',
          opts: [
            'Il peut le faire sans motif et sans conséquence sur sa prise en charge',
            'Il doit motiver sa décision par écrit',
            'Il perd définitivement le bénéfice de toute prise en charge ultérieure par le service',
            'Il ne le peut plus une fois le formulaire signé',
          ],
          correct: 0,
          why: '« Révocable à tout moment, sans motif et sans conséquence sur la qualité de la prise en charge ultérieure. »',
          band: 'b2',
        },
        {
          q: 'Que vaut exactement la signature du formulaire ?',
          opts: [
            'Elle atteste que l’information a été donnée',
            'Elle décharge le praticien de sa responsabilité',
            'Elle vaut acceptation d’un éventuel risque de faute',
            'Elle rend le consentement définitif',
          ],
          correct: 0,
          why: '« Elle atteste que l’information a été donnée, non que le patient accepte un risque de faute. »',
          band: 'b2',
        },
        {
          q: 'Comment procède-t-on en cas d’urgence vitale ?',
          opts: [
            'L’acte est pratiqué et l’information donnée ensuite',
            'L’acte est différé jusqu’au recueil du consentement',
            'Un proche signe le formulaire à la place du patient',
            'Le consentement est présumé et n’est jamais évoqué',
          ],
          correct: 0,
          why: '« L’acte est pratiqué et l’information est donnée dès que l’état du patient le permet. » L’article 5 exclut qu’un proche consente à sa place.',
          band: 'b2',
        },
        {
          q: 'Quel est le rôle du proche présent à l’entretien ?',
          opts: [
            'Il assiste, sans signer ni consentir à la place du patient',
            'Il cosigne le formulaire avec le patient',
            'Il consent lorsque le patient hésite',
            'Il reçoit l’information médicale à la place du patient',
          ],
          correct: 0,
          why: '« Ce proche n’est pas signataire et ne consent pas à sa place. »',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 2 · arrêt de travail contesté',
      text:
        'PROCÉDURE · contestation d’un arrêt de travail par l’employeur\n' +
        '\n' +
        'Article 1. L’employeur peut faire procéder à une contre-visite médicale au domicile du salarié, ' +
        'pendant les heures de présence obligatoire indiquées sur l’arrêt.\n' +
        '\n' +
        'Article 2. Le salarié absent lors de cette visite, sans motif légitime, s’expose à la ' +
        'suspension du complément versé par l’employeur. Le versement de la sécurité sociale, lui, ' +
        'n’est pas affecté par cette procédure.\n' +
        '\n' +
        'Article 3. Une sortie autorisée par le médecin ne constitue pas une absence irrégulière, à ' +
        'condition qu’elle soit mentionnée sur l’arrêt.\n' +
        '\n' +
        'Article 4. Les conclusions du médecin contrôleur sont transmises au salarié et à l’employeur. ' +
        'Le salarié dispose de dix jours pour saisir le médecin du travail, qui tranche.\n' +
        '\n' +
        'Article 5. Aucune sanction disciplinaire ne peut être fondée sur le seul résultat de la ' +
        'contre-visite : celle-ci ouvre une discussion, non une procédure.',
      items: [
        {
          q: 'Quand la contre-visite peut-elle avoir lieu ?',
          opts: [
            'Pendant les heures de présence obligatoire portées sur l’arrêt',
            'À tout moment de la journée, sans préavis',
            'Uniquement en dehors des sorties autorisées',
            'Après accord écrit du salarié',
          ],
          correct: 0,
          why: '« Au domicile du salarié, pendant les heures de présence obligatoire indiquées sur l’arrêt. »',
          band: 'b2',
        },
        {
          q: 'Que risque un salarié absent sans motif légitime ?',
          opts: [
            'La suspension du complément versé par l’employeur',
            'La suspension des indemnités de la sécurité sociale',
            'Une sanction disciplinaire immédiate',
            'La requalification de son arrêt de travail',
          ],
          correct: 0,
          why: 'L’article 2 vise le complément employeur et précise que le versement de la sécurité sociale n’est pas affecté.',
          band: 'b2',
        },
        {
          q: 'À quelle condition une sortie n’est-elle pas irrégulière ?',
          opts: [
            'Elle est mentionnée sur l’arrêt par le médecin',
            'Elle a lieu en dehors des heures obligatoires',
            'Elle est signalée à l’employeur à l’avance',
            'Elle ne dépasse pas une heure',
          ],
          correct: 0,
          why: '« À condition qu’elle soit mentionnée sur l’arrêt. »',
          band: 'b1',
        },
        {
          q: 'De combien de temps dispose le salarié pour contester les conclusions ?',
          opts: ['Dix jours', 'Trente jours', 'Quarante-huit heures', 'Aucun délai prévu'],
          correct: 0,
          why: '« Le salarié dispose de dix jours pour saisir le médecin du travail, qui tranche. »',
          band: 'b1',
        },
        {
          q: 'Que dit le texte des suites disciplinaires ?',
          opts: [
            'La contre-visite seule ne peut fonder une sanction',
            'Elle entraîne un avertissement automatique',
            'Elle permet un licenciement pour faute',
            'Elle suspend le contrat de travail',
          ],
          correct: 0,
          why: '« Aucune sanction disciplinaire ne peut être fondée sur le seul résultat de la contre-visite : celle-ci ouvre une discussion, non une procédure. »',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ Block G — Article de presse ═════════════════════════════════════════ */
//
// SELF-VERIFY (G1–G8): figures invented and attributed to an invented
// observatory. Two questions turn on positions the article reports without
// endorsing.

export const CE_G: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '006'),
  level: 'b2',
  label: 'Section G',
  prompt: 'Lisez l’article et choisissez la bonne réponse.',
  timingS: 780,
  targetItemIds: uniq(ITEMS.metiers, ITEMS.questionsSociales),
  parts: [
    {
      label: 'Article · pourquoi les métiers d’art ne trouvent pas d’apprentis',
      text:
        'On répète que les jeunes se détournent des métiers manuels. Les chiffres de l’observatoire de ' +
        'Chastel, qui a suivi cent dix ateliers d’art pendant trois ans, disent autre chose : les ' +
        'candidatures ont augmenté de trente et un pour cent sur la période. Ce sont les places qui ont ' +
        'diminué, de dix-sept pour cent.\n' +
        '\n' +
        'La raison tient à ce que former coûte. Un apprenti mobilise un artisan pendant les six premiers ' +
        'mois presque à plein temps, et un atelier de deux personnes qui en forme un travaille à ' +
        'effectif réduit sans facturer moins.\n' +
        '\n' +
        'Les aides existent : elles couvrent une partie du salaire, jamais le temps du maître ' +
        'd’apprentissage. Une relieuse interrogée le formule sans détour : « On me rembourse ce que je ' +
        'lui verse, pas ce que je ne produis pas. »\n' +
        '\n' +
        'Certaines organisations professionnelles y voient au contraire un problème de vocation, et ' +
        'soutiennent que les candidats abandonnent en cours de formation faute d’y être préparés. ' +
        'L’observatoire mesure ce taux d’abandon à onze pour cent, en baisse, ce qui affaiblit cette ' +
        'lecture sans l’annuler.\n' +
        '\n' +
        'Les ateliers qui forment le plus ne sont d’ailleurs pas les plus grands : ce sont ceux qui se ' +
        'sont groupés à trois ou quatre pour partager un apprenti sur l’année. L’observatoire note que ' +
        'ce montage reste rare, parce qu’il suppose une confiance entre concurrents directs, ce qui ne ' +
        'se décrète pas.',
      items: [
        {
          q: 'Que montrent les chiffres de l’observatoire ?',
          opts: [
            'Les candidatures augmentent et les places diminuent',
            'Les candidatures et les places diminuent ensemble',
            'Les candidatures diminuent de trente et un pour cent',
            'Les places augmentent plus vite que les candidatures',
          ],
          correct: 0,
          why: '« Les candidatures ont augmenté de trente et un pour cent… Ce sont les places qui ont diminué, de dix-sept pour cent. »',
          band: 'b1',
        },
        {
          q: 'Pourquoi former coûte-t-il à un petit atelier ?',
          opts: [
            'L’artisan est mobilisé six mois sans que l’atelier facture moins',
            'L’apprenti doit être payé au tarif d’un salarié qualifié',
            'Le matériel nécessaire à la formation est très coûteux',
            'La formation impose de louer un local supplémentaire',
          ],
          correct: 0,
          why: '« Un apprenti mobilise un artisan pendant les six premiers mois presque à plein temps… sans facturer moins. »',
          band: 'b2',
        },
        {
          q: 'Que ne couvrent pas les aides existantes ?',
          opts: [
            'Le temps du maître d’apprentissage',
            'Une partie du salaire de l’apprenti',
            'Le coût des matières premières',
            'Les frais d’inscription en centre de formation',
          ],
          correct: 0,
          why: '« Elles couvrent une partie du salaire, jamais le temps du maître d’apprentissage. »',
          band: 'b2',
        },
        {
          q: 'Qu’illustre la phrase de la relieuse ?',
          opts: [
            'L’aide compense la dépense, pas la production perdue',
            'Le salaire de l’apprenti est trop élevé pour son atelier',
            'Les démarches pour obtenir l’aide sont trop longues',
            'Les apprentis produisent dès les premiers mois',
          ],
          correct: 0,
          why: '« On me rembourse ce que je lui verse, pas ce que je ne produis pas. »',
          band: 'b2',
        },
        {
          q: 'Quelle lecture certaines organisations professionnelles défendent-elles ?',
          opts: [
            'Les candidats abandonnent faute d’être préparés',
            'Les aides publiques sont suffisantes en l’état',
            'Les ateliers refusent de se grouper par principe',
            'Le nombre de places est en réalité stable',
          ],
          correct: 0,
          why: 'C’est leur position rapportée : « un problème de vocation… les candidats abandonnent en cours de formation faute d’y être préparés ».',
          band: 'b2',
        },
        {
          q: 'Comment l’article traite-t-il cette lecture ?',
          opts: [
            'Il l’affaiblit par le taux d’abandon, sans l’écarter tout à fait',
            'Il la valide au moyen des chiffres de l’observatoire',
            'Il la rejette comme entièrement dépourvue de fondement',
            'Il la présente comme la thèse de l’observatoire',
          ],
          correct: 0,
          why: '« L’observatoire mesure ce taux d’abandon à onze pour cent, en baisse, ce qui affaiblit cette lecture sans l’annuler. »',
          band: 'c1',
        },
        {
          q: 'Quels ateliers forment le plus d’apprentis ?',
          opts: [
            'Ceux qui se groupent à plusieurs pour en partager un',
            'Les plus grands, qui disposent de plus de moyens',
            'Ceux qui bénéficient des aides les plus élevées',
            'Ceux qui recrutent hors des circuits de formation',
          ],
          correct: 0,
          why: '« Ce ne sont pas les plus grands : ce sont ceux qui se sont groupés à trois ou quatre pour partager un apprenti sur l’année. »',
          band: 'b2',
        },
        {
          q: 'Pourquoi ce montage reste-t-il rare ?',
          opts: [
            'Il suppose une confiance entre concurrents directs',
            'Il est interdit par les règles de l’apprentissage',
            'Il revient plus cher qu’une formation isolée',
            'Il ne donne droit à aucune aide publique',
          ],
          correct: 0,
          why: '« Parce qu’il suppose une confiance entre concurrents directs, ce qui ne se décrète pas. »',
          band: 'b2',
        },
      ],
    },
  ],
};
