// TEF Canada blanc-03 — Compréhension écrite, blocks D+E, F and G.
//
//   D+E  5 · lecture rapide                            · 2 documents
//   F   10 · documents administratifs et professionnels · 2 documents
//   G    8 · articles de presse                         · 1 article
//
// D and E are one task because the published breakdown treats them as a single
// timed run: the candidate is finding facts fast, not reading closely.
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
//
// Two documents dense with conditions. The skill is locating one condition
// among several that look alike, so every distractor is a real term or figure
// from the same document.

export const CE_DE: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '004'),
  level: 'b1',
  label: 'Sections D et E',
  prompt: 'Lisez les documents et retrouvez les informations demandées.',
  timingS: 480,
  targetItemIds: uniq(ITEMS.auRestaurant, ITEMS.hebergement),
  parts: [
    {
      label: 'Document 1 · le menu et les allergènes',
      text:
        'MENU DU JOUR · 19 € entrée-plat ou plat-dessert · 24 € les trois\n' +
        '\n' +
        'Velouté de potiron (lait) · Terrine de campagne (gluten, moutarde)\n' +
        'Poisson du jour, sauce citron (poisson, lait) · Gratin de légumes (lait, œuf)\n' +
        'Tarte aux noix (gluten, fruits à coque, œuf) · Sorbet (aucun allergène majeur)\n' +
        '\n' +
        'Les plats peuvent être adaptés sur demande, sauf le gratin et la tarte, préparés à l’avance.\n' +
        'Menu servi le midi en semaine uniquement. Service de 12 h à 14 h.',
      items: [
        {
          q: 'Quel dessert convient à une personne allergique au gluten ?',
          opts: ['Le sorbet', 'La tarte aux noix', 'Le velouté de potiron', 'Le gratin de légumes'],
          correct: 0,
          why: 'La tarte contient du gluten ; le velouté et le gratin ne sont pas des desserts. Le sorbet ne porte aucun allergène majeur.',
          band: 'a2',
        },
        {
          q: 'Quels plats ne peuvent pas être adaptés ?',
          opts: [
            'Le gratin de légumes et la tarte aux noix',
            'Le velouté de potiron et la terrine de campagne',
            'Le poisson du jour et le sorbet',
            'Tous les plats du menu peuvent être adaptés',
          ],
          correct: 0,
          why: '« Sauf le gratin et la tarte, préparés à l’avance. »',
          band: 'b1',
        },
        {
          q: 'Combien coûte une entrée, un plat et un dessert ?',
          opts: ['24 €', '19 €', '38 €', '43 €'],
          correct: 0,
          why: '« 24 € les trois » ; 19 € est le prix de deux services seulement.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 2 · la brochure du gîte',
      text:
        'GÎTE DES QUATRE SAISONS · 6 personnes, 3 chambres\n' +
        'Haute saison (juillet-août) : 890 € la semaine · Basse saison : 540 € la semaine\n' +
        'Arrivée le samedi après 16 h, départ le samedi avant 10 h.\n' +
        'Acompte de 30 % à la réservation, solde 15 jours avant l’arrivée.\n' +
        'Annulation : acompte remboursé jusqu’à 30 jours avant, conservé ensuite.\n' +
        'Ménage de fin de séjour : 70 €, ou gratuit si le gîte est rendu propre.\n' +
        'Animaux acceptés, 25 € par séjour. Draps fournis, serviettes non fournies.',
      items: [
        {
          q: 'Combien faut-il verser à la réservation en haute saison ?',
          opts: ['267 €', '890 €', '623 €', '178 €'],
          correct: 0,
          why: '30 % de 890 € font 267 €. Le solde, 623 €, se règle quinze jours avant l’arrivée.',
          band: 'b1',
        },
        {
          q: 'Que perd un client qui annule 20 jours avant son arrivée ?',
          opts: [
            'Son acompte, qui n’est plus remboursé',
            'La totalité du séjour déjà réglé',
            'Rien, l’annulation est sans frais',
            'Les 70 € de ménage de fin de séjour',
          ],
          correct: 0,
          why: '« Acompte remboursé jusqu’à 30 jours avant, conservé ensuite. » Vingt jours avant, l’acompte est conservé.',
          band: 'b1',
        },
      ],
    },
  ],
};

/* ═══ Block F — Documents administratifs et professionnels ════════════════ */
//
// Ten questions on two documents, and the longest reading in the paper: a
// reimbursement procedure and an eligibility rule, both of the kind a candidate
// meets after arriving.
//
// SELF-VERIFY (F1–F10): each key rests on a stated condition, never on an
// inference about intent. Where two conditions interact, the `why` names both.

export const CE_F: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '005'),
  level: 'b2',
  label: 'Section F',
  prompt: 'Lisez les documents et choisissez la bonne réponse.',
  timingS: 900,
  targetItemIds: uniq(ITEMS.systemeDeSante, ITEMS.gouvernement, ITEMS.droit),
  parts: [
    {
      label: 'Document 1 · demande de remboursement de frais de santé',
      text:
        'NOTICE · Remboursement des frais de santé engagés à l’étranger\n' +
        '\n' +
        'Article 1. Sont remboursables les soins imprévus reçus au cours d’un séjour temporaire. Les ' +
        'soins programmés à l’avance relèvent d’une autorisation préalable et ne sont pas couverts par ' +
        'cette procédure.\n' +
        '\n' +
        'Article 2. La demande est déposée dans les deux ans suivant la date des soins. Passé ce délai, ' +
        'elle est irrecevable, sans exception.\n' +
        '\n' +
        'Article 3. Joignez les factures acquittées et leur traduction, sauf si elles sont rédigées en ' +
        'français, en anglais, en espagnol ou en allemand. La traduction n’a pas à être certifiée.\n' +
        '\n' +
        'Article 4. Le remboursement se fait sur la base des tarifs français, et non des sommes ' +
        'réellement payées. Il peut donc être très inférieur aux frais engagés.\n' +
        '\n' +
        'Article 5. Un dossier incomplet est retourné avec la liste des pièces manquantes. Le délai de ' +
        'deux ans n’est pas suspendu par ce retour.',
      items: [
        {
          q: 'Quels soins cette procédure couvre-t-elle ?',
          opts: [
            'Les soins imprévus reçus pendant un séjour temporaire',
            'Les soins programmés à l’avance à l’étranger',
            'Tous les soins reçus hors de France, sans distinction',
            'Les soins reçus pendant une installation durable à l’étranger',
          ],
          correct: 0,
          why: 'L’article 1 couvre les soins imprévus d’un séjour temporaire et renvoie explicitement les soins programmés à une autre procédure.',
          band: 'b2',
        },
        {
          q: 'Quel est le délai pour déposer la demande ?',
          opts: [
            'Deux ans après la date des soins',
            'Deux ans après le retour en France',
            'Six mois après la date des soins',
            'Il n’existe aucun délai précis',
          ],
          correct: 0,
          why: '« La demande est déposée dans les deux ans suivant la date des soins. »',
          band: 'b1',
        },
        {
          q: 'Dans quel cas la traduction des factures est-elle inutile ?',
          opts: [
            'Si elles sont en français, anglais, espagnol ou allemand',
            'Si elles ont été acquittées sur place',
            'Si le montant est inférieur au tarif français',
            'Si une traduction certifiée est fournie',
          ],
          correct: 0,
          why: 'L’article 3 dispense de traduction pour ces quatre langues, et précise par ailleurs qu’une traduction n’a pas à être certifiée.',
          band: 'b2',
        },
        {
          q: 'Sur quelle base le remboursement est-il calculé ?',
          opts: [
            'Sur les tarifs français, pas sur les sommes payées',
            'Sur les sommes réellement payées à l’étranger',
            'Sur la moyenne des deux montants',
            'Sur le tarif du pays où les soins ont été reçus',
          ],
          correct: 0,
          why: '« Sur la base des tarifs français, et non des sommes réellement payées. Il peut donc être très inférieur aux frais engagés. »',
          band: 'b2',
        },
        {
          q: 'Quel effet le retour d’un dossier incomplet a-t-il sur le délai ?',
          opts: [
            'Aucun : le délai de deux ans continue de courir',
            'Le délai est suspendu jusqu’au dépôt des pièces',
            'Le délai est prolongé de six mois supplémentaires',
            'Le délai recommence à la date du retour',
          ],
          correct: 0,
          why: '« Le délai de deux ans n’est pas suspendu par ce retour. »',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 2 · conditions d’accès à une aide au logement',
      text:
        'AIDE AU LOGEMENT · conditions d’attribution\n' +
        '\n' +
        'Article 1. L’aide est ouverte au locataire dont le logement constitue la résidence principale, ' +
        'occupée au moins huit mois par an.\n' +
        '\n' +
        'Article 2. Le logement doit respecter des critères de décence : surface minimale de 9 m² pour ' +
        'une personne, installation sanitaire privative, chauffage et ouverture sur l’extérieur. Un ' +
        'logement non décent ouvre droit à l’aide, mais celle-ci est versée au bailleur et conservée par ' +
        'l’organisme jusqu’à la mise en conformité.\n' +
        '\n' +
        'Article 3. Le montant dépend des ressources des douze derniers mois. Un changement durable de ' +
        'situation, supérieur à trois mois, doit être déclaré dans les trente jours.\n' +
        '\n' +
        'Article 4. L’aide n’est pas rétroactive : elle est due à partir du mois suivant le dépôt de la ' +
        'demande, quelle que soit la date d’entrée dans le logement.\n' +
        '\n' +
        'Article 5. Le versement cesse le mois où le logement n’est plus occupé, même si le bail court ' +
        'encore.',
      items: [
        {
          q: 'Que prévoit le texte pour un logement non décent ?',
          opts: [
            'L’aide est accordée mais conservée jusqu’à la mise en conformité',
            'L’aide est refusée tant que le logement n’est pas conforme',
            'L’aide est versée normalement au locataire',
            'L’aide est réduite de moitié jusqu’aux travaux',
          ],
          correct: 0,
          why: '« Un logement non décent ouvre droit à l’aide, mais celle-ci est versée au bailleur et conservée par l’organisme jusqu’à la mise en conformité. »',
          band: 'b2',
        },
        {
          q: 'À partir de quand l’aide est-elle due ?',
          opts: [
            'À partir du mois suivant le dépôt de la demande',
            'À partir de la date d’entrée dans le logement',
            'À partir du premier jour du mois de la demande',
            'À partir de la signature du bail',
          ],
          correct: 0,
          why: '« L’aide n’est pas rétroactive : elle est due à partir du mois suivant le dépôt de la demande, quelle que soit la date d’entrée. »',
          band: 'b2',
        },
        {
          q: 'Quel changement de situation faut-il déclarer ?',
          opts: [
            'Un changement durable, de plus de trois mois',
            'Tout changement, même d’une seule semaine',
            'Uniquement une baisse des ressources',
            'Uniquement un déménagement dans une autre commune',
          ],
          correct: 0,
          why: '« Un changement durable de situation, supérieur à trois mois, doit être déclaré dans les trente jours. »',
          band: 'b1',
        },
        {
          q: 'Quelle condition d’occupation le texte pose-t-il ?',
          opts: [
            'Le logement doit être occupé au moins huit mois par an',
            'Le logement doit être occupé toute l’année sans interruption',
            'Le locataire doit y être domicilié depuis un an au moins',
            'Le logement peut être une résidence secondaire',
          ],
          correct: 0,
          why: '« Résidence principale, occupée au moins huit mois par an. »',
          band: 'b1',
        },
        {
          q: 'Quand le versement s’arrête-t-il ?',
          opts: [
            'Le mois où le logement cesse d’être occupé',
            'À la fin du bail, même si le logement est vide',
            'Trois mois après le départ du locataire',
            'Le mois suivant la déclaration de départ',
          ],
          correct: 0,
          why: '« Le versement cesse le mois où le logement n’est plus occupé, même si le bail court encore. »',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ Block G — Article de presse ═════════════════════════════════════════ */
//
// Eight questions on one argued article, the top of the reading épreuve. Two of
// the eight turn on positions the article REPORTS without endorsing, because a
// candidate reading only for topic will agree with anything that sounds related.
//
// SELF-VERIFY (G1–G8): figures are invented and attributed to an invented
// observatory. The `why` for questions 6 and 7 names the sentence that separates
// a reported position from the article's own.

export const CE_G: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '006'),
  level: 'b2',
  label: 'Section G',
  prompt: 'Lisez l’article et choisissez la bonne réponse.',
  timingS: 780,
  targetItemIds: uniq(ITEMS.ecologie, ITEMS.communaute, ITEMS.questionsSociales),
  parts: [
    {
      label: 'Article · le parc éolien qui divise un village',
      text:
        'À Mesnil-Doré, quatre cents habitants, le projet de six éoliennes a été refusé par référendum ' +
        'local en juin, à cinquante-quatre pour cent. Un an plus tôt, une enquête de l’observatoire de ' +
        'Valcourt donnait soixante-huit pour cent d’avis favorables dans la même commune. Entre les deux, ' +
        'rien n’a changé dans le projet lui-même.\n' +
        '\n' +
        'Ce qui a changé, c’est ce que les habitants ont appris. En janvier, le promoteur a précisé la ' +
        'hauteur : cent quatre-vingts mètres en bout de pale, contre cent trente dans la présentation ' +
        'initiale. La différence n’était pas cachée, elle figurait dans le dossier technique, mais ' +
        'personne ne l’avait lue.\n' +
        '\n' +
        'Le maire y voit une leçon de méthode plutôt qu’un rejet de l’éolien. « Les gens n’ont pas voté ' +
        'contre les éoliennes, ils ont voté contre le sentiment d’avoir été informés à moitié. Si la ' +
        'hauteur avait été dite en réunion publique, je crois que le projet passait. »\n' +
        '\n' +
        'Les opposants, eux, contestent cette lecture. Pour leur porte-parole, le refus porte bien sur ' +
        'le fond : le village est classé, l’implantation était visible depuis l’église, et aucune ' +
        'présentation n’aurait rendu cela acceptable.\n' +
        '\n' +
        'L’observatoire, qui a suivi vingt-deux projets comparables, note un écart constant entre les ' +
        'sondages menés avant la publication des dimensions et les votes qui suivent : en moyenne dix-huit ' +
        'points. Il se garde d’en conclure que l’information suffit à retourner un vote, et rappelle que ' +
        'dans sept des vingt-deux cas, le projet a été accepté malgré une opposition initiale.',
      items: [
        {
          q: 'Quel a été le résultat du référendum ?',
          opts: [
            'Un refus, à cinquante-quatre pour cent',
            'Une approbation, à soixante-huit pour cent',
            'Un refus, à soixante-huit pour cent',
            'Une approbation, à cinquante-quatre pour cent',
          ],
          correct: 0,
          why: 'Le référendum refuse le projet à 54 %. Les 68 % sont l’avis favorable mesuré un an plus tôt.',
          band: 'b1',
        },
        {
          q: 'Qu’est-ce qui a changé entre l’enquête et le vote ?',
          opts: [
            'Ce que les habitants savaient du projet, pas le projet',
            'La hauteur finalement retenue pour les six éoliennes',
            'Le nombre d’éoliennes finalement prévues sur le site',
            'La composition du conseil municipal',
          ],
          correct: 0,
          why: '« Rien n’a changé dans le projet lui-même… Ce qui a changé, c’est ce que les habitants ont appris. » La hauteur a été précisée, pas modifiée.',
          band: 'b2',
        },
        {
          q: 'Que dit l’article de l’information sur la hauteur ?',
          opts: [
            'Elle figurait au dossier technique mais n’avait pas été lue',
            'Elle avait été délibérément dissimulée par le promoteur',
            'Elle a été révélée par les opposants en janvier',
            'Elle ne figurait dans aucun document public',
          ],
          correct: 0,
          why: '« La différence n’était pas cachée, elle figurait dans le dossier technique, mais personne ne l’avait lue. »',
          band: 'b2',
        },
        {
          q: 'Quelle lecture le maire fait-il du vote ?',
          opts: [
            'Un rejet de la méthode d’information, non de l’éolien',
            'Un rejet définitif de tout projet éolien dans la commune',
            'Une conséquence directe du classement du village',
            'Un désaveu personnel adressé au conseil municipal',
          ],
          correct: 0,
          why: '« Les gens n’ont pas voté contre les éoliennes, ils ont voté contre le sentiment d’avoir été informés à moitié. »',
          band: 'b2',
        },
        {
          q: 'Que soutiennent les opposants ?',
          opts: [
            'Le refus porte sur le fond, quelle qu’ait été la présentation',
            'Le promoteur a délibérément trompé les habitants de la commune',
            'Le référendum aurait dû être organisé plus tôt',
            'La hauteur des éoliennes pourrait encore être réduite',
          ],
          correct: 0,
          why: 'Leur porte-parole invoque le classement du village et la visibilité depuis l’église : « aucune présentation n’aurait rendu cela acceptable ».',
          band: 'b2',
        },
        {
          q: 'Qu’a mesuré l’observatoire sur les vingt-deux projets ?',
          opts: [
            'Un écart moyen de dix-huit points entre sondages et votes',
            'Un taux de refus de cinquante-quatre pour cent en moyenne',
            'Une hausse de dix-huit points des avis favorables',
            'Un délai moyen d’un an entre l’enquête et le vote',
          ],
          correct: 0,
          why: '« Un écart constant entre les sondages menés avant la publication des dimensions et les votes qui suivent : en moyenne dix-huit points. »',
          band: 'b2',
        },
        {
          q: 'Quelle position l’observatoire adopte-t-il ?',
          opts: [
            'Il refuse de conclure que l’information suffit à retourner un vote',
            'Il conclut que mieux informer garantit à coup sûr l’acceptation du projet',
            'Il donne raison aux opposants sur le fond du dossier',
            'Il estime que les référendums locaux devraient être supprimés',
          ],
          correct: 0,
          why: '« Il se garde d’en conclure que l’information suffit à retourner un vote », et cite sept cas acceptés malgré une opposition initiale.',
          band: 'c1',
        },
        {
          q: 'Que montrent les sept cas cités à la fin ?',
          opts: [
            'Une opposition initiale n’empêche pas toujours l’acceptation',
            'La majorité des projets comparables ont été refusés',
            'Les projets acceptés étaient tous de faible hauteur',
            'L’observatoire n’a pas pu suivre ces sept projets',
          ],
          correct: 0,
          why: '« Dans sept des vingt-deux cas, le projet a été accepté malgré une opposition initiale. »',
          band: 'b2',
        },
      ],
    },
  ],
};
