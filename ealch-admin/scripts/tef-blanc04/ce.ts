// TEF Canada blanc-04 — Compréhension écrite, blocks A to C.
//
//   A  7 · documents de la vie quotidienne · 7 documents, 1 question each
//   B  6 · phrases lacunaires              · 6 single sentences, 1 gap each
//   C  4 · textes lacunaires               · 2 short texts, 2 gaps each
//
// Blocks D+E, F and G are in ce-fg.ts. CE-B and CE-C carry no topic from the
// bank: gap-fill tests grammar, so the sentences are written to the point.
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

/* ═══ Block A — Documents de la vie quotidienne ═══════════════════════════ */
//
// SELF-VERIFY (A1–A7): every distractor is drawn from the document, so none can
// be eliminated without reading. Prices and dates are internally consistent.

export const CE_A: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '001'),
  level: 'a2',
  label: 'Section A',
  prompt: 'Lisez les documents et choisissez la bonne réponse.',
  timingS: 600,
  targetItemIds: uniq(
    ITEMS.courses, ITEMS.ecologie, ITEMS.deplacements, ITEMS.maison,
    ITEMS.bricolage, ITEMS.litterature
  ),
  parts: [
    {
      label: 'Document 1 · la carte de fidélité',
      text:
        'CARTE FIDÉLITÉ · gratuite, sans engagement\n' +
        '1 point par tranche de 10 € d’achat. 100 points = un bon de 8 €.\n' +
        'Les points expirent 18 mois après leur obtention.\n' +
        'Le bon est utilisable en une seule fois, hors carburant et hors presse.\n' +
        'Carte nominative : elle ne peut pas être prêtée.',
      items: [
        {
          q: 'Combien faut-il dépenser pour obtenir un bon de 8 € ?',
          opts: ['1 000 €', '100 €', '800 €', '180 €'],
          correct: 0,
          why: '1 point par 10 € d’achat, et 100 points pour un bon : il faut donc 1 000 € d’achats.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 2 · la déchetterie',
      text:
        'DÉCHETTERIE DE ROQUELAURE · horaires et dépôts\n' +
        'Lundi au vendredi 9 h – 12 h et 14 h – 17 h. Samedi 9 h – 17 h sans interruption. Fermé le dimanche.\n' +
        'Acceptés : gravats, végétaux, bois, métaux, encombrants, appareils électriques.\n' +
        'Refusés : amiante, pneus, bouteilles de gaz, médicaments.\n' +
        'Accès sur présentation du badge d’habitant. Volume limité à 2 m³ par passage.',
      items: [
        {
          q: 'Que peut-on déposer à la déchetterie ?',
          opts: [
            'Des appareils électriques',
            'Des pneus usagés',
            'Des bouteilles de gaz',
            'Des médicaments périmés',
          ],
          correct: 0,
          why: 'Les appareils électriques figurent parmi les dépôts acceptés ; les trois autres sont dans la liste des refus.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 3 · la consigne à bagages',
      text:
        'CONSIGNE À BAGAGES · gare de Bellevance\n' +
        'Petit casier 5 € / 24 h · Grand casier 9 € / 24 h.\n' +
        'Toute journée commencée est due. Ouverture de 6 h à 23 h.\n' +
        'Durée maximale : 72 heures. Au-delà, le bagage est transféré au service des objets trouvés.\n' +
        'Objets interdits : denrées périssables, animaux, matières dangereuses.',
      items: [
        {
          q: 'Combien coûte un grand casier utilisé pendant 30 heures ?',
          opts: ['18 €', '9 €', '10 €', '27 €'],
          correct: 0,
          why: '30 heures entament une deuxième journée, et « toute journée commencée est due » : 9 € × 2 = 18 €.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 4 · le canapé à vendre',
      text:
        'À VENDRE · canapé trois places, tissu gris, très bon état.\n' +
        '150 € à débattre. Acheté 600 € il y a quatre ans.\n' +
        'Dimensions : 210 cm × 90 cm. Ne passe pas dans un ascenseur standard.\n' +
        'À enlever sur place, quartier des Peupliers, en semaine après 18 h.\n' +
        'Prévoir deux personnes.',
      items: [
        {
          q: 'Qu’est-ce que l’annonce demande à l’acheteur de prévoir ?',
          opts: [
            'De venir à deux pour transporter le canapé',
            'De se présenter le week-end en journée',
            'De payer la totalité en espèces sur place',
            'De faire appel à un transporteur professionnel',
          ],
          correct: 0,
          why: '« Prévoir deux personnes », et l’enlèvement se fait en semaine après 18 h, pas le week-end.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 5 · les composteurs',
      text:
        'DISTRIBUTION DE COMPOSTEURS · samedi 11 octobre, 9 h – 13 h, place de Marnac\n' +
        'Composteur de 400 litres remis contre une participation de 20 €.\n' +
        'Un seul composteur par foyer, sur présentation d’un justificatif de domicile.\n' +
        'Inscription préalable obligatoire : les stocks sont limités à 80 unités.\n' +
        'Un guide du compostage et un bio-seau sont remis avec le composteur.',
      items: [
        {
          q: 'Que faut-il faire avant de venir le 11 octobre ?',
          opts: [
            'S’inscrire, les stocks étant limités',
            'Régler les 20 € de participation en ligne',
            'Retirer un bio-seau en mairie',
            'Fournir deux justificatifs de domicile',
          ],
          correct: 0,
          why: '« Inscription préalable obligatoire : les stocks sont limités à 80 unités. » Le bio-seau est remis avec le composteur.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 6 · l’atelier de réparation',
      text:
        'ATELIER VÉLO · tous les mercredis, 17 h – 20 h, local de la rue Haute\n' +
        'Vous réparez vous-même, accompagné par un bénévole. Personne ne répare à votre place.\n' +
        'Outils prêtés sur place. Pièces d’occasion à prix libre ; pièces neuves au prix coûtant.\n' +
        'Adhésion annuelle 15 €, première séance gratuite pour essayer.\n' +
        'Débutants bienvenus : la moitié des participants n’avait jamais démonté une roue.',
      items: [
        {
          q: 'Quel est le principe de l’atelier ?',
          opts: [
            'Le participant répare lui-même, accompagné d’un bénévole',
            'Un bénévole répare le vélo pendant que l’on attend',
            'Les réparations sont faites gratuitement par l’atelier',
            'Seuls les adhérents expérimentés peuvent participer',
          ],
          correct: 0,
          why: '« Vous réparez vous-même, accompagné par un bénévole. Personne ne répare à votre place. »',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 7 · le club de lecture',
      text:
        'CLUB DE LECTURE · un jeudi par mois, 19 h, salle du haut\n' +
        'Un livre par mois, choisi en commun à la séance précédente.\n' +
        'Le livre est emprunté à la bibliothèque : aucun achat n’est demandé.\n' +
        'Venir sans avoir fini le livre est autorisé ; venir sans l’avoir commencé, moins utile.\n' +
        'Groupe limité à quinze personnes. Deux places libres actuellement.',
      items: [
        {
          q: 'Comment le livre du mois est-il choisi ?',
          opts: [
            'Par le groupe, à la séance précédente',
            'Par la bibliothèque, qui prête les exemplaires',
            'Par l’animateur, au début de chaque séance',
            'Par tirage au sort parmi les propositions',
          ],
          correct: 0,
          why: '« Un livre par mois, choisi en commun à la séance précédente. »',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ Block B — Phrases lacunaires ════════════════════════════════════════ */

export const CE_B: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '002'),
  level: 'b1',
  label: 'Section B',
  prompt: 'Choisissez le mot ou l’expression qui complète correctement chaque phrase.',
  timingS: 420,
  targetItemIds: [
    'fr.a2.prepositions-essentielles.003', 'fr.a2.pronoms-essentiels.003',
    'fr.b1.connecteurs-logiques.006', 'fr.a2.negation-et-restriction.003',
    'fr.b1.recits-au-passe.003', 'fr.b1.comparaisons.003',
  ],
  items: [
    {
      q: 'Elle a réussi ___ convaincre le conseil en une seule réunion.',
      opts: ['à', 'de', 'pour', 'en'],
      correct: 0,
      why: 'Réussir se construit avec « à » devant un infinitif : réussir à faire quelque chose.',
      band: 'a2',
    },
    {
      q: 'L’entreprise ___ il travaille vient d’ouvrir une agence ici.',
      opts: ['pour laquelle', 'dont', 'que', 'à laquelle'],
      correct: 0,
      why: 'On travaille POUR une entreprise ; le relatif reprend cette préposition : pour laquelle.',
      band: 'b1',
    },
    {
      q: 'Nous n’avons ___ reçu de réponse à notre courrier.',
      opts: ['toujours pas', 'pas toujours', 'jamais plus', 'plus jamais'],
      correct: 0,
      why: '« Toujours pas » marque une attente qui dure. « Pas toujours » signifierait « parfois non », ce que le sens exclut.',
      band: 'b1',
    },
    {
      q: 'Le dossier a été accepté ___ les réserves émises par le service.',
      opts: ['malgré', 'en raison de', 'grâce à', 'faute de'],
      correct: 0,
      why: 'Les réserves s’opposaient à l’acceptation : c’est une concession, donc « malgré ».',
      band: 'b1',
    },
    {
      q: 'Il pleuvait depuis trois jours quand nous ___ le chantier.',
      opts: ['avons commencé', 'commencions', 'avions commencé', 'commencerons'],
      correct: 0,
      why: 'L’imparfait pose le décor et le passé composé l’événement qui survient dedans : nous avons commencé.',
      band: 'b1',
    },
    {
      q: 'Cette solution coûte ___ cher que la précédente, et elle dure plus longtemps.',
      opts: ['moins', 'aussi peu', 'le moins', 'davantage'],
      correct: 0,
      why: 'Le comparatif d’infériorité devant un adjectif est « moins … que ». « Davantage » ne se combine pas avec « cher » ainsi.',
      band: 'a2',
    },
  ],
};

/* ═══ Block C — Textes lacunaires ═════════════════════════════════════════ */

export const CE_C: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '003'),
  level: 'b1',
  label: 'Section C',
  prompt: 'Lisez les deux textes et choisissez, pour chaque espace, le mot ou l’expression qui convient.',
  timingS: 420,
  targetItemIds: [
    'fr.b1.connecteurs-logiques.007', 'fr.b1.connecteurs-logiques.008',
    'fr.a2.voisinage.001', 'fr.b1.ecologie.001',
  ],
  parts: [
    {
      label: 'Texte 1 · la rue aux enfants',
      text:
        'La commune de Tournoy ferme une rue à la circulation un samedi par mois, pour la rendre aux ' +
        'jeux. L’opération est populaire : deux cents enfants au dernier passage. ___ (1), les ' +
        'commerçants de la rue avaient demandé son arrêt après le premier essai, faute de clients ce ' +
        'jour-là. La mairie a déplacé l’opération d’une rue commerçante vers une rue résidentielle. ' +
        '___ (2), tout le monde y trouve son compte, et l’expérience se poursuit.',
      items: [
        {
          q: 'Espace (1)',
          opts: ['Pourtant', 'Ainsi', 'En effet', 'Par exemple'],
          correct: 0,
          why: 'Le succès annoncé et la demande d’arrêt s’opposent : la relation est concessive.',
          band: 'b1',
        },
        {
          q: 'Espace (2)',
          opts: ['Depuis', 'Au contraire', 'En revanche', 'Autrement dit'],
          correct: 0,
          why: 'La phrase finale décrit ce qui suit le déplacement dans le temps, pas une opposition ni une reformulation.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Texte 2 · les fontaines à eau',
      text:
        'Plusieurs communes installent des fontaines à eau publiques pour réduire les bouteilles en ' +
        'plastique. ___ (3), le nombre de bouteilles vendues n’a pas baissé dans les commerces voisins. ' +
        'Les usagers interrogés expliquent qu’ils remplissent leur gourde en plus de leurs achats, sans ' +
        'les remplacer. ___ (4), la fontaine ajoute un usage au lieu d’en supprimer un, ce qui n’est pas ' +
        'l’effet recherché.',
      items: [
        {
          q: 'Espace (3)',
          opts: ['Pourtant', 'Donc', 'Par ailleurs', 'C’est-à-dire'],
          correct: 0,
          why: 'On attendrait une baisse des ventes ; il n’y en a pas. C’est une opposition.',
          band: 'b1',
        },
        {
          q: 'Espace (4)',
          opts: ['Autrement dit', 'Au contraire', 'Toutefois', 'Par exemple'],
          correct: 0,
          why: 'La dernière phrase reformule ce que les usagers viennent de décrire, en le nommant.',
          band: 'b2',
        },
      ],
    },
  ],
};
