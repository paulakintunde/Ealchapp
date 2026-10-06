// DALF C1 blanc-01 — Production écrite and Production orale.
//
// PE: two tasks in 2 h 30 on ONE dossier (DALF-41, the connected home). The
// synthèse reports the dossier in 200-240 words (13 points); the essai argues a
// different question on the same theme, from a stated role to a stated
// addressee (12 points). Decision 36: the essai repeats the dossier in its own
// parts, same labels, same texts, same order, so the grader sees it.
//
// PO: the candidate draws two subjects and keeps one (BLUEPRINT §6). Both are
// authored: DALF-50 (« Peut-on encore vivre sans téléphone ? ») and DALF-53
// (« Faut-il juger une œuvre indépendamment de son auteur ? »), different
// themes so the choice is real. Each subject is an exposé (po_monologue, one
// hour of preparation, a two-document dossier, 8-10 min) followed by an
// entretien (po_debate, 15-20 min, a bank that attacks both sides with 12
// non-retreat moves per side).
//
// ── Rubrics ─────────────────────────────────────────────────────────────────
//
// Our own construction (STANDARD-dalf-c1 §7), three descriptors per criterion
// in the order « en dessous du niveau / C1 / C1+ »:
//   synthèse   longueur 1 · objectivite 2 · tache 3 · organisation 2 · lexique 3 · morphosyntaxe 2 = 13
//   essai      tache 3 · coherence 3 · destinataire 2 · lexique 2 · morphosyntaxe 2 = 12
//   exposé     tache 5 · lexique 3 · morphosyntaxe 3 · phonologie 2 = 13
//   entretien  tache 5 · lexique 2 · morphosyntaxe 2 · phonologie 3 = 12
//
// INVENTED, all of it. Dossier PE: the monthly « Toits et Quartiers », the
// Agence Hélianthe pour l’énergie, Judith Amrane, the town of Brévans, the
// company Domeo, the collectif Prise directe, Lucas Mérindol, the laboratoire
// Cyrène, the université de Valmonde, the landlord Habitat Rivelune, the
// résidence des Coteaux; the figures 800 homes, two winters, -12 %, one third,
// a half-hour of set-up help, 60 homes, 18 months, 11 falls, 7 years against 15-20, 40 households, six
// months, nine in ten, 34 households. Dossier PO 1: Clémence Aubertin, the
// Institut Orsenne, « L’Hebdo des Marges », Bastien Lhermite, « Le Courrier du
// Val »; 6 % of adults, 31 % of over-75s, « près d’un sur cinq », 40 km.
// Dossier PO 2 (people: a bookseller, a student, a pupil, all unnamed): the novelist Théophane Carvel, the médiathèque de Pontivers,
// Sylvie Ondrat, the poet Évariste Morand-Lescure, Hélène Daguerre; 900 signatures, 140
// people, loans up 40 %.
import type { ExamDebate, ExamPart, ExamTask, Rubric } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_OPEN, taskId } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  level: 'c1' as const,
};

/* ═══ PE · the dossier (DALF-41), about 1000 words ════════════════════════ */
//
// Three documents, same theme, three angles that cross: convenience and energy
// (doc 1), dependence on the supplier (doc 2), privacy (doc 3). The ties a
// good plan uses: energy savings appear in docs 1 and 3; the occupant who did
// not choose the equipment appears in docs 2 and 3; safeguards in docs 2 and 3.

const PE_DOSSIER: ExamPart[] = [
  {
    label: 'Document 1 · La maison qui pense pour nous',
    items: [],
    text:
      'Il suffit désormais d’un mot pour baisser les volets, d’un geste sur l’écran du téléphone pour relancer le chauffage depuis le bureau. Les fabricants de la maison connectée vendent d’abord du confort : un logement qui apprend nos horaires, anticipe nos retours et règle de lui-même la température de chaque pièce. Mais l’argument qui a fait sortir ces équipements du rayon des gadgets est ailleurs : l’énergie. Selon l’Agence Hélianthe pour l’énergie, qui a suivi pendant deux hivers huit cents logements équipés d’un thermostat connecté, la consommation de chauffage y a baissé de douze pour cent en moyenne.\n\n' +
      'La moyenne masque toutefois de fortes disparités. Les économies se concentrent dans les foyers qui ont pris le temps de programmer leur installation et de consulter régulièrement leurs relevés ; chez le tiers des ménages qui n’ont jamais touché aux réglages d’usine, elles sont à peu près nulles. L’agence observe même chez certains un effet inverse : rassurés par l’idée que la machine optimise pour eux, des occupants relèvent la température d’un ou deux degrés. « L’outil ne fait pas les économies à votre place, résume Judith Amrane, l’ingénieure qui a coordonné l’étude. Il les rend possibles pour ceux qui savent s’en servir. » L’agence recommande donc d’accompagner chaque installation d’une demi-heure de prise en main à domicile ; sans cela, observe-t-elle, l’appareil finit le plus souvent réglé une fois pour toutes, puis oublié.\n\n' +
      'Reste un usage moins visible, et peut-être plus décisif : l’autonomie des personnes âgées ou handicapées. Des capteurs discrets signalent une chute, une porte restée ouverte la nuit, un réfrigérateur qu’on n’ouvre plus. À Brévans, un service d’aide à domicile a équipé soixante logements de personnes vivant seules ; en dix-huit mois, onze chutes ont été détectées dans l’heure, dont plusieurs seraient restées sans secours jusqu’au passage suivant de l’aide-soignante. Pour ces habitants, la maison connectée n’est pas un luxe : c’est la condition pour continuer à vivre chez soi.\n\n' +
      'D’après le mensuel Toits et Quartiers',
  },
  {
    label: 'Document 2 · On croit acheter un objet, on loue un service',
    items: [],
    text:
      'Il y a deux ans, la société Domeo a annoncé qu’elle cesserait de faire fonctionner les serveurs qui pilotaient ses boîtiers domotiques. Du jour au lendemain, des milliers de thermostats, de serrures et de détecteurs, achetés plusieurs centaines d’euros, sont devenus des objets inertes. Rien n’était cassé : ils ne recevaient simplement plus d’instructions. Cet épisode résume ce que les acheteurs découvrent trop tard. Un appareil connecté ne fonctionne que tant que son fabricant le veut bien. Ce qu’on croit acheter, on le loue en réalité, et le bail peut être résilié sans préavis.\n\n' +
      'Notre collectif a relevé pendant combien de temps les principaux fabricants assurent les mises à jour de leurs appareils : sept ans en moyenne, contre quinze à vingt ans de durée de vie pour une chaudière ou une fenêtre. On installe ainsi dans les logements des équipements dont l’intelligence vieillira deux fois plus vite que les murs. Et lorsque l’assistance s’arrête, la réparation est rarement possible : les protocoles sont fermés, les pièces propriétaires, et l’appareil d’une marque refuse souvent de dialoguer avec celui d’une autre. Changer de fournisseur revient alors à tout remplacer. Le coût n’est d’ailleurs pas seulement financier : ces boîtiers abandonnés rejoignent les déchets électroniques bien avant l’usure de leurs composants, alors même que leur fabrication représente la part la plus lourde de leur empreinte.\n\n' +
      'La dépendance devient plus aiguë encore dans le logement locatif. Quand c’est le bailleur qui choisit et installe les équipements, le locataire n’a ni la maîtrise des réglages, ni accès aux contrats passés avec le fabricant, ni la possibilité de refuser. Il hérite d’une technologie qu’il n’a pas choisie et dont il ignore la durée de vie comme les conditions d’usage. Nous demandons deux choses simples : l’obligation de normes ouvertes, qui permettent de changer de fournisseur sans tout jeter, et une durée minimale de mises à jour, affichée au moment de l’achat comme l’est déjà la consommation d’énergie.\n\n' +
      'Lucas Mérindol, technicien, membre du collectif Prise directe',
  },
  {
    label: 'Document 3 · Ce que votre compteur raconte de vous',
    items: [],
    text:
      'Un compteur communicant transmet la consommation d’électricité d’un logement à intervalles réguliers. Relevée une fois par jour, cette donnée sert à facturer au plus juste et à repérer les gaspillages. Relevée toutes les dix minutes, elle dit tout autre chose. L’équipe du laboratoire Cyrène, à l’université de Valmonde, a analysé pendant six mois les courbes de consommation de quarante foyers volontaires. À partir de ces seules courbes, ses algorithmes ont deviné l’heure du lever et du coucher à un quart d’heure près, repéré neuf fois sur dix les absences de plus de deux jours et estimé correctement le nombre d’occupants dans trente-quatre foyers. Dans certains cas, la signature électrique d’un téléviseur suffisait à savoir à quelle heure il était allumé. « Aucun de ces foyers ne pensait livrer autant d’informations en acceptant un compteur », note la responsable de l’étude, qui rappelle que la plupart des contrats ne précisent même pas la fréquence des relevés.\n\n' +
      'Les chercheurs ne contestent pas l’intérêt énergétique de ces relevés fins : c’est précisément leur précision qui permet de conseiller un foyer sur ses usages ou d’ajuster la production d’électricité aux heures de pointe. Mais ils soulignent qu’une même courbe peut servir à des fins très différentes selon qui la consulte : un fournisseur d’énergie, un assureur, un cambrioleur qui y aurait accès, ou un propriétaire curieux des habitudes de ses locataires. Or le consentement de l’occupant reste souvent formel : une case cochée lors de la souscription, rarement relue, et parfois aucune case du tout lorsque l’équipement a été installé par quelqu’un d’autre.\n\n' +
      'L’étude formule trois recommandations : traiter les données dans le logement lui-même plutôt que sur des serveurs distants, laisser à chaque occupant le choix de la fréquence des relevés, et interdire par défaut tout transfert à des tiers sans accord exprès.\n\n' +
      'D’après une étude du laboratoire Cyrène, université de Valmonde',
  },
];

/** The dossier's information units, in the order a good plan uses them
 *  (STANDARD-dalf-c1 §6.1). In examinerNotes so the grader checks coverage. */
const PE_KEY_POINTS = [
  'Points clés du dossier, dans l’ordre d’un plan possible (le candidat peut en suivre un autre) :',
  '1. La maison connectée promet confort et automatisation des réglages (doc. 1).',
  '2. Les économies d’énergie sont réelles en moyenne, mais réservées à ceux qui maîtrisent l’outil, avec un risque d’effet inverse (doc. 1) ; ce sont les relevés fins qui permettent de conseiller les foyers (doc. 3).',
  '3. Des capteurs permettent aux personnes âgées ou handicapées de rester chez elles en sécurité (doc. 1).',
  '4. Le fonctionnement dépend du bon vouloir du fabricant : un service arrêté rend les appareils inertes (doc. 2).',
  '5. Les mises à jour durent bien moins longtemps que le bâti ; protocoles fermés, réparation et changement de marque impossibles (doc. 2).',
  '6. Des relevés fréquents révèlent l’intimité du foyer : horaires, absences, nombre d’occupants (doc. 3).',
  '7. L’occupant, surtout locataire, n’a souvent ni choisi l’équipement ni réellement consenti (doc. 2 et doc. 3).',
  '8. Garde-fous proposés : normes ouvertes et durée de mises à jour affichée (doc. 2) ; traitement local, choix de la fréquence, aucun transfert sans accord (doc. 3).',
];

const SYNTHESE_RUBRIC: Rubric = {
  criteria: [
    {
      key: 'longueur',
      label: 'Longueur',
      maxPoints: 1,
      descriptors: [
        'En dessous du niveau : le texte sort de la fourchette de 200 à 240 mots (un mot = tout ce qui se trouve entre deux espaces) ; le correcteur signale de combien de tranches de 20 mots.',
        'C1 : le texte compte entre 200 et 240 mots selon cette règle.',
        'C1+ : la longueur est respectée sans que le texte paraisse amputé ou délayé pour l’atteindre.',
      ],
    },
    {
      key: 'objectivite',
      label: 'Objectivité',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : le texte ajoute des idées ou des informations absentes du dossier, prend parti ou déforme la position d’un document.',
        'C1 : rien n’est ajouté ni jugé ; les positions des documents sont restituées sans distorsion.',
        'C1+ : la neutralité tient jusque dans le choix des verbes et des connecteurs, sans aucun commentaire implicite.',
      ],
    },
    {
      key: 'tache',
      label: 'Thème commun et informations clés',
      maxPoints: 3,
      descriptors: [
        'En dessous du niveau : le thème commun n’est pas dégagé, ou plusieurs points clés manquent, ou un document est presque ignoré.',
        'C1 : le thème commun est formulé dès l’ouverture et l’essentiel des points clés figure, tiré des trois documents.',
        'C1+ : le thème est formulé avec précision et tous les points clés sont présents, hiérarchisés, sans détail superflu.',
      ],
    },
    {
      key: 'organisation',
      label: 'Plan personnel et cohésion',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : résumés juxtaposés, document par document, ou texte sans progression perceptible.',
        'C1 : un texte unique, organisé selon un plan propre au candidat qui croise les documents ; paragraphes et articulateurs guident la lecture.',
        'C1+ : le plan croise les documents de façon éclairante ; transitions souples et variées, reprises anaphoriques maîtrisées.',
      ],
    },
    {
      key: 'lexique',
      label: 'Reformulation et lexique',
      maxPoints: 3,
      descriptors: [
        'En dessous du niveau : phrases ou passages recopiés, vocabulaire imprécis ou répétitif.',
        'C1 : les idées sont reformulées avec les mots du candidat ; lexique abstrait précis ; seuls des mots-clés sont repris.',
        'C1+ : reformulation constante et économe, lexique riche et nuancé, nominalisations bien choisies.',
      ],
    },
    {
      key: 'morphosyntaxe',
      label: 'Morphosyntaxe',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : erreurs fréquentes qui gênent la lecture ; structures simples ou mal maîtrisées.',
        'C1 : structures complexes bien maîtrisées ; les erreurs restent rares et ponctuelles.',
        'C1+ : grande correction grammaticale, phrases variées et souples, ponctuation au service du sens.',
      ],
    },
  ],
};

export const PE_SYNTHESE: ExamTask = {
  ...base,
  id: taskId('pe_short', '001'),
  taskType: 'pe_short',
  skill: 'PE',
  label: 'Production écrite · Synthèse de documents',
  prompt:
    'PRODUCTION ÉCRITE · Synthèse de documents · 13 points\n\n' +
    'Lisez les trois documents du dossier. Rédigez-en une synthèse de 200 à 240 mots.\n\n' +
    'Dégagez le thème qui réunit les documents, puis regroupez et ordonnez leurs idées et leurs informations essentielles selon un plan qui vous appartient. Votre synthèse doit former un seul texte, et non une suite de résumés. Vous pouvez lui donner un titre.\n\n' +
    'N’ajoutez aucune idée ni aucune information qui ne figure pas dans le dossier, et ne donnez pas votre avis. Vous pouvez reprendre les mots-clés des documents, mais pas des phrases ni des passages entiers.\n\n' +
    'Comptez comme un mot tout ce qui se trouve entre deux espaces : « c’est-à-dire » compte pour un mot, « l’ai » aussi.',
  timingS: 4800,
  responseSpec: { kind: 'text', minWords: 200, maxWords: 240 },
  parts: PE_DOSSIER,
  rubric: SYNTHESE_RUBRIC,
  examinerNotes: [
    ...NOTES_OPEN,
    'Synthèse sur 13 points. Planchers : 99 mots ou moins, 0 sur tous les critères ; 300 mots ou plus, le critère « tache » ne peut atteindre le niveau C1 ; un texte majoritairement recopié obtient 0 en « lexique » et en « morphosyntaxe ».',
    'Un mot est tout ce qui se trouve entre deux espaces ; le correcteur compte ainsi, et non autrement.',
    ...PE_KEY_POINTS,
  ],
  modelAnswer:
    'Le logement connecté : un confort sous conditions\n\n' +
    'Présentée comme un progrès pour le confort et l’énergie, la maison connectée pose, à travers ces trois documents, la question de la maîtrise que ses occupants gardent sur elle.\n\n' +
    'Ses avantages sont réels. L’automatisation des réglages réduit en moyenne la consommation de chauffage, et des capteurs permettent à des personnes âgées ou handicapées de rester chez elles en sécurité. Encore faut-il savoir se servir de l’outil : les économies s’évanouissent chez ceux qui ne le paramètrent pas, voire s’inversent lorsque la confiance accordée à la machine incite à chauffer davantage.\n\n' +
    'Ce confort reste en outre suspendu au bon vouloir des fabricants. Qu’un fournisseur cesse d’assurer son service, et les appareils deviennent inutilisables ; leurs mises à jour durent d’ailleurs bien moins longtemps que le logement qu’ils équipent. Leurs protocoles fermés rendent la réparation rare et obligent, pour changer de marque, à tout remplacer.\n\n' +
    'Enfin, les données qui rendent ces économies possibles exposent l’intimité des foyers : une consommation relevée à intervalles rapprochés trahit horaires, absences et composition du ménage. Le risque s’accroît lorsque l’occupant, souvent locataire, n’a ni choisi l’équipement ni véritablement consenti à l’usage de ses données.\n\n' +
    'D’où les garde-fous proposés : normes ouvertes, durée de mises à jour garantie, traitement des informations dans le logement et aucun transfert sans l’accord des intéressés.',
};

const ESSAI_RUBRIC: Rubric = {
  criteria: [
    {
      key: 'tache',
      label: 'Argumentation',
      maxPoints: 3,
      descriptors: [
        'En dessous du niveau : position floue ou absente ; arguments juxtaposés, peu développés, sans exemple ; le dossier n’est pas exploité.',
        'C1 : position claire et défendue ; arguments développés, appuyés sur des exemples concrets et sur le contenu du dossier ; texte convaincant.',
        'C1+ : argumentation hiérarchisée qui anticipe et réfute les objections ; exemples pertinents et variés ; propositions précises.',
      ],
    },
    {
      key: 'coherence',
      label: 'Cohérence et cohésion',
      maxPoints: 3,
      descriptors: [
        'En dessous du niveau : texte peu structuré, connecteurs pauvres ou mal employés, paragraphes sans logique apparente.',
        'C1 : texte structuré, paragraphes logiques, connecteurs variés qui portent l’argumentation.',
        'C1+ : progression d’une grande clarté ; enchaînements souples ; l’introduction et la conclusion encadrent réellement le propos.',
      ],
    },
    {
      key: 'destinataire',
      label: 'Adéquation au genre et au destinataire',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : le genre de la contribution n’est pas respecté ; registre inadapté à une direction d’entreprise ; le rôle de représentant n’apparaît pas.',
        'C1 : conventions de la contribution respectées ; registre soutenu tenu d’un bout à l’autre ; le texte parle au nom des locataires et s’adresse à son destinataire.',
        'C1+ : ton à la fois ferme et courtois, stratégie d’adresse efficace (concessions, demandes précises, engagement du destinataire).',
      ],
    },
    {
      key: 'lexique',
      label: 'Lexique',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : vocabulaire limité ou imprécis ; répétitions ; orthographe lexicale fautive.',
        'C1 : lexique étendu et précis, concret et abstrait ; orthographe correcte.',
        'C1+ : lexique riche, nuancé et idiomatique, sans impropriété.',
      ],
    },
    {
      key: 'morphosyntaxe',
      label: 'Morphosyntaxe',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : erreurs fréquentes ; structures complexes évitées ou mal construites.',
        'C1 : haut degré de correction grammaticale ; phrases complexes variées.',
        'C1+ : maîtrise constante, y compris des constructions concessives et hypothétiques ; ponctuation expressive.',
      ],
    },
  ],
};

export const PE_ESSAI: ExamTask = {
  ...base,
  id: taskId('pe_essay', '001'),
  taskType: 'pe_essay',
  skill: 'PE',
  label: 'Production écrite · Essai argumenté',
  prompt:
    'PRODUCTION ÉCRITE · Essai argumenté · 12 points\n\n' +
    'La société Habitat Rivelune, propriétaire de l’immeuble où vous habitez, envisage d’équiper tous les logements de compteurs communicants qui relèveraient en continu la consommation d’électricité et de chauffage. Avant de décider, elle ouvre une consultation auprès des locataires.\n\n' +
    'Vous représentez les locataires de l’immeuble. Vous rédigez leur contribution officielle à cette consultation, adressée à la direction de la société. Vous y prenez position sur ce projet et vous défendez cette position par des arguments précis et des exemples, en vous appuyant notamment sur le contenu des documents du dossier.\n\n' +
    '250 mots minimum.',
  timingS: 4200,
  responseSpec: { kind: 'text', minWords: 250 },
  // Decision 36: the same dossier, same labels, texts and order.
  parts: PE_DOSSIER,
  rubric: ESSAI_RUBRIC,
  examinerNotes: [
    ...NOTES_OPEN,
    'Essai sur 12 points. Plancher : 124 mots ou moins, 0 sur tous les critères. Pas de maximum publié ; la réponse modèle compte environ 320 mots.',
    'La position peut être favorable, défavorable ou conditionnelle : seule compte la qualité de sa défense. Le genre attendu est une contribution à une consultation, écrite au nom des locataires et adressée à la direction du bailleur.',
  ],
  modelAnswer:
    'Contribution des locataires de la résidence des Coteaux à la consultation sur les compteurs communicants\n\n' +
    'Madame, Monsieur,\n\n' +
    'Au nom de l’amicale des locataires que j’ai l’honneur de représenter, je vous remercie d’avoir ouvert cette consultation avant toute décision. Notre position tient en une phrase : nous ne refusons pas ces compteurs, mais nous ne pourrons les accepter qu’à des conditions précises, que nous souhaitons voir inscrites dans le projet.\n\n' +
    'Nous reconnaissons d’abord l’intérêt de l’équipement. Une facturation fondée sur la consommation réelle et le repérage rapide des fuites ou des gaspillages servent les locataires autant que votre société. Encore faut-il que chacun sache lire ses relevés : sans accompagnement, les économies promises ne profiteront qu’aux plus à l’aise avec ces outils. Nous demandons donc une réunion d’information et un interlocuteur joignable.\n\n' +
    'Notre principale inquiétude porte sur les données. Une étude récente montre qu’une consommation relevée toutes les dix minutes révèle l’heure du lever, les absences et même le nombre d’occupants d’un logement. Or nous n’aurons pas choisi ces appareils. C’est pourquoi nous demandons que les relevés soient journaliers par défaut, qu’une fréquence plus fine ne soit activée qu’à la demande de l’occupant, que les données restent traitées dans le logement et qu’aucune ne soit transmise à un tiers, ni utilisée à d’autres fins que la facturation, sans notre accord écrit.\n\n' +
    'Nous attirons enfin votre attention sur la durée de vie de ces équipements. Des appareils devenus inutilisables lorsque leur fabricant cessait son service ont déjà dû être remplacés ailleurs. Nous souhaitons que vous reteniez un matériel à normes ouvertes, assorti d’un engagement écrit sur la durée des mises à jour, et qu’aucun coût de remplacement ne soit répercuté sur les loyers.\n\n' +
    'Si ces garanties figurent au cahier des charges, nous soutiendrons le projet et nous vous proposons d’y associer deux représentants des locataires.\n\n' +
    'Je vous prie d’agréer, Madame, Monsieur, l’expression de ma considération distinguée.\n\n' +
    'Nadège Fontanel, pour l’amicale des locataires de la résidence des Coteaux',
};

/* ═══ PO · shared rubric shapes ═══════════════════════════════════════════ */
//
// STANDARD-dalf-c1 §7.3: the real grid judges lexique, morphosyntaxe and
// phonologie once over both phases; we split each across the pair so each
// criterion totals 5 and the pair totals 25. Phonology weighs more in the
// entretien, where speech is unprepared.

const exposeRubric = (subject: string): Rubric => ({
  criteria: [
    {
      key: 'tache',
      label: 'Réalisation de la tâche : exposé (8 à 10 minutes)',
      maxPoints: 5,
      descriptors: [
        `En dessous du niveau : le candidat paraphrase les documents sans problématique ni plan, ou parle nettement moins de huit minutes ; la question « ${subject} » n’est pas réellement traitée.`,
        'C1 : introduction qui pose la question, plan annoncé et suivi, réflexion qui croise les points essentiels des deux documents ET des exemples personnels, conclusion.',
        'C1+ : plan clairement balisé et progressif, arguments étayés par le dossier et par l’expérience, nuances assumées, conclusion qui ouvre la réflexion.',
      ],
    },
    {
      key: 'lexique',
      label: 'Lexique',
      maxPoints: 3,
      descriptors: [
        'En dessous du niveau : vocabulaire limité, répétitif ou imprécis ; lacunes visibles.',
        'C1 : lexique étendu et précis, y compris abstrait ; reformulations aisées des documents.',
        'C1+ : lexique riche et nuancé, expressions idiomatiques justes, aucune impropriété notable.',
      ],
    },
    {
      key: 'morphosyntaxe',
      label: 'Morphosyntaxe',
      maxPoints: 3,
      descriptors: [
        'En dessous du niveau : erreurs fréquentes ; structures simples.',
        'C1 : bon contrôle des structures complexes ; erreurs rares, vite corrigées.',
        'C1+ : grande correction, syntaxe variée et souple sur toute la durée de l’exposé.',
      ],
    },
    {
      key: 'phonologie',
      label: 'Maîtrise du système phonologique',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : prononciation ou intonation qui gêne par moments la compréhension ; débit haché.',
        'C1 : prononciation claire, intonation et accentuation qui soutiennent le sens.',
        'C1+ : débit naturel, intonation expressive qui marque le plan et les nuances ; l’accent d’origine ne gêne en rien.',
      ],
    },
  ],
});

const entretienRubric: Rubric = {
  criteria: [
    {
      key: 'tache',
      label: 'Réalisation de la tâche : entretien (15 à 20 minutes)',
      maxPoints: 5,
      descriptors: [
        'En dessous du niveau : réponses brèves qui ne relancent pas l’échange ; le candidat répète son exposé ou cède sans pouvoir dire pourquoi.',
        'C1 : chaque question reçoit une réponse développée ; le candidat défend sa position, puis la précise et la nuance sous la contradiction ; il distingue ce qu’il concède de ce qu’il maintient.',
        'C1+ : le candidat élargit ou recentre le débat, reprend l’argument du jury pour le retourner ou le limiter, et mobilise avec pertinence le dossier et son expérience.',
      ],
    },
    {
      key: 'lexique',
      label: 'Lexique',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : vocabulaire insuffisant pour reformuler ; répétitions.',
        'C1 : lexique précis de l’argumentation, de la concession et de la nuance.',
        'C1+ : lexique riche et spontané, choisi avec justesse même dans l’improvisation.',
      ],
    },
    {
      key: 'morphosyntaxe',
      label: 'Morphosyntaxe',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : la syntaxe se défait sous la pression de l’échange.',
        'C1 : bon contrôle grammatical dans l’improvisation, y compris des subordonnées concessives et hypothétiques.',
        'C1+ : correction constante et syntaxe souple dans les échanges les plus rapides.',
      ],
    },
    {
      key: 'phonologie',
      label: 'Maîtrise du système phonologique',
      maxPoints: 3,
      descriptors: [
        'En dessous du niveau : la prononciation se dégrade quand le débit s’accélère ; intonation monotone.',
        'C1 : prononciation claire dans l’improvisation ; l’intonation distingue question, objection, concession.',
        'C1+ : rythme, liaisons et intonation naturels et expressifs tout au long de l’échange.',
      ],
    },
  ],
};

const notesExpose = (keyPoints: string[]) => [
  ...NOTES_OPEN,
  'Exposé sur 13 points, entretien sur 12 : la paire vaut 25. Le candidat a tiré deux sujets et en a choisi un ; une heure de préparation, puis l’exposé enchaîné avec l’entretien.',
  'Le candidat présente une réflexion personnelle et ordonnée sur la question posée, à partir des documents : introduction, plan annoncé, conclusion. Paraphraser les documents l’un après l’autre ne répond pas à la consigne.',
  ...keyPoints,
];

const NOTES_ENTRETIEN = [
  ...NOTES_OPEN,
  'Le jury conteste la thèse de l’exposé, quelle qu’elle soit : la banque d’objections attaque les deux positions. Nuancer sous une bonne objection n’est pas reculer ; abandonner sa position n’est pas une faute en soi, le faire sans pouvoir dire pourquoi en est une.',
];

/** One examiner move, as the DELF bank writes them. */
const M = (
  id: string,
  kind: 'probe' | 'counter' | 'counter-example' | 'consequence' | 'concession' | 'steelman' | 'retreat',
  depth: 1 | 2 | 3,
  text: string,
  covers: string
) => ({ id, kind, depth, text, covers, cues: [] });

/* ═══ PO · subject 1 (DALF-50) · Peut-on encore vivre sans téléphone ? ════ */

const PO1_DOSSIER: ExamPart[] = [
  {
    label: 'Document 1 · « Le téléphone est devenu obligatoire sans que personne l’ait décidé »',
    items: [],
    text:
      'Entretien avec Clémence Aubertin, sociologue à l’Institut Orsenne.\n\n' +
      'Peut-on encore vivre sans smartphone aujourd’hui ?\n' +
      'Vivre, oui. Vivre comme tout le monde, de moins en moins. Regardez une journée ordinaire : votre banque vous demande de valider un paiement dans son application, la gare a fermé son guichet, le stationnement se paie par un service en ligne, l’école des enfants communique par une messagerie, et l’agence pour l’emploi vous envoie votre rendez-vous par un lien. Aucune loi n’a rendu le téléphone obligatoire. C’est une accumulation de petites décisions, chacune raisonnable prise isolément, qui finissent par exclure ceux qui n’en ont pas.\n\n' +
      'Qui sont ces personnes ?\n' +
      'D’après notre enquête, six pour cent des adultes n’ont pas de smartphone, mais la proportion atteint trente et un pour cent chez les plus de soixante-quinze ans. Et il faut ajouter tous ceux qui en possèdent un sans savoir s’en servir pour ces démarches : près d’un adulte sur cinq. Pour l’immense majorité d’entre eux, l’absence de téléphone n’est pas un choix. C’est une question d’âge, de revenus, de handicap, parfois simplement de vue.\n\n' +
      'On parle pourtant beaucoup de déconnexion volontaire.\n' +
      'Oui, et c’est un phénomène réel, mais minoritaire et socialement situé. Ceux qui renoncent délibérément au smartphone sont souvent diplômés, entourés, disposent de temps et d’un réseau qui fait pour eux ce qu’ils ne font plus. Pour eux, la déconnexion est devenue un signe de distinction, presque un luxe. Pour une personne âgée seule dont l’agence bancaire a fermé, c’est une relégation. Le même geste, ne pas avoir de téléphone, n’a pas du tout le même sens selon la place qu’on occupe.\n\n' +
      'Le numérique ne facilite-t-il pas aussi la vie de beaucoup de gens fragiles ?\n' +
      'Si, et il faut le dire. Une personne à mobilité réduite qui peut faire ses courses, consulter un médecin ou suivre ses remboursements sans se déplacer y gagne énormément. Des parents séparés coordonnent la garde de leurs enfants par messages, des travailleurs aux horaires décalés accèdent à des services fermés quand ils sont libres. Je ne regrette pas le temps des files d’attente. Ce que je constate, c’est que la simplification des uns se paie par l’exclusion des autres, et que personne ne fait jamais le compte des seconds, parce qu’ils ne répondent pas aux enquêtes en ligne.\n\n' +
      'Que faudrait-il faire ?\n' +
      'Reconnaître un droit à l’alternative. Tout service public, et tout service essentiel comme la banque ou les transports, devrait garantir un accès qui ne passe pas par un téléphone : un guichet, une ligne téléphonique ordinaire, un formulaire papier. Il ne s’agit pas de refuser le numérique, qui simplifie la vie de beaucoup. Il s’agit de ne pas faire d’un objet de consommation la condition d’accès à des droits.\n\n' +
      'Propos recueillis par L’Hebdo des Marges',
  },
  {
    label: 'Document 2 · Un an avec un téléphone à clapet',
    items: [],
    text:
      'Il y a un an, j’ai rangé mon smartphone dans un tiroir et acheté un téléphone à clapet qui ne sait faire que deux choses : appeler et envoyer des SMS. Je voulais savoir si l’on pouvait encore vivre ainsi. Voici ce que j’ai appris.\n\n' +
      'D’abord, les trois premières semaines ont été pénibles. Je tendais la main vers ma poche dix fois par heure, dans le métro, dans les files d’attente, au réveil. Puis le réflexe s’est éteint. J’ai recommencé à lire des livres entiers, je dors mieux, et je découvre que l’on peut attendre un train sans rien faire sans que ce soit une souffrance. Mes amis disent que je suis plus présent quand nous dînons ensemble. Je les crois.\n\n' +
      'Ensuite, et c’est moins agréable, j’ai mesuré combien de choses passaient désormais par l’écran. J’ai manqué deux anniversaires et un déménagement parce que les invitations circulaient dans des groupes de discussion dont je ne faisais plus partie. Pour ma banque, j’ai dû faire quarante kilomètres jusqu’à la seule agence qui accepte encore de valider un virement au guichet. Les billets de train, les places de cinéma, le parking de l’hôpital : chaque fois, il fallait trouver un détour, ou quelqu’un.\n\n' +
      'Au travail, ce fut plus délicat encore. Mon équipe s’organisait par une messagerie de groupe : les changements de planning, les réunions déplacées, les remplacements de dernière minute. J’ai prévenu ma responsable, qui a accepté de m’appeler pour les urgences, mais j’ai vite senti que je devenais celui qu’il fallait penser à prévenir à part, celui qui ralentissait tout. Personne ne me l’a reproché ouvertement. Simplement, au bout de quelques mois, on ne me proposait plus les missions qui se décidaient dans l’heure.\n\n' +
      'Et ce quelqu’un, c’était presque toujours ma compagne. C’est elle qui réservait, qui payait, qui recevait les codes de confirmation sur son téléphone. Au bout de six mois, j’ai dû regarder la vérité en face : je ne vivais pas sans smartphone, je vivais avec celui des autres. Mon expérience de sobriété reposait sur le travail invisible de ceux qui, autour de moi, restaient connectés pour deux.\n\n' +
      'J’ai fini par ressortir mon smartphone du tiroir. Mais ce n’est plus le même objet : plus aucune application de réseau social, des notifications coupées, un écran qui reste dans l’entrée le soir. Ce que cette année m’a appris, c’est que la question n’était pas d’avoir ou non un téléphone. C’était de savoir qui, de l’objet ou de moi, décidait de l’emploi de mon temps.\n\n' +
      'Bastien Lhermite, chronique parue dans Le Courrier du Val',
  },
];

export const PO1_EXPOSE: ExamTask = {
  ...base,
  id: taskId('po_monologue', '001'),
  taskType: 'po_monologue',
  skill: 'PO',
  label: 'Production orale · Sujet 1 · Exposé',
  prompt:
    'PRODUCTION ORALE · Sujet 1 · 25 points · 1 heure de préparation, environ 30 minutes de passation\n\n' +
    'Phase 1 · Exposé (8 à 10 minutes)\n\n' +
    'Thème : Peut-on encore vivre sans téléphone ?\n\n' +
    'À partir des documents proposés, vous préparerez un exposé sur ce thème. Vous présenterez une réflexion ordonnée et personnelle, avec une introduction qui pose la question, un plan annoncé et une conclusion. Les documents sont une source d’idées et d’exemples : ne les résumez pas l’un après l’autre.\n\n' +
    'L’exposé sera suivi d’un entretien avec le jury.',
  prepS: 3600,
  timingS: 600,
  responseSpec: { kind: 'audio', minDurationS: 480, maxDurationS: 600 },
  parts: PO1_DOSSIER,
  rubric: exposeRubric('Peut-on encore vivre sans téléphone ?'),
  examinerNotes: notesExpose([
    'Points d’appui du dossier : l’obligation de fait née de petites décisions (banque, transports, école, emploi) ; les personnes sans smartphone, surtout âgées, et celles qui en ont un sans savoir l’utiliser ; la déconnexion volontaire comme privilège social ; le droit à une alternative non numérique (doc. 1). Les gains de la sobriété (lecture, sommeil, présence) ; les exclusions concrètes (invitations, banque, billets) ; la dépendance au téléphone des proches ; la question de la maîtrise plutôt que de la possession (doc. 2).',
    'Croisement attendu au niveau C1 : le « luxe » de la déconnexion (doc. 1) éclaire le « travail invisible » de la compagne (doc. 2).',
  ]),
  modelAnswer:
    'Il y a encore quinze ans, la question aurait fait sourire : on vivait sans téléphone portable, et même assez bien. Aujourd’hui, elle se pose sérieusement, et les deux documents du dossier montrent pourquoi. Dans un entretien, la sociologue Clémence Aubertin décrit un téléphone devenu obligatoire sans qu’aucune loi l’ait imposé ; dans sa chronique, le journaliste Bastien Lhermite raconte l’année qu’il a passée avec un simple téléphone à clapet. La question « peut-on encore vivre sans téléphone ? » recouvre en fait deux questions : est-ce matériellement possible, et est-ce souhaitable, ou du moins choisi ? Je voudrais montrer que, si l’on peut encore vivre sans smartphone, on ne le peut plus seul, et que c’est précisément ce qui doit nous inquiéter.\n\n' +
    'Je procéderai en trois temps. J’examinerai d’abord la contrainte réelle qui pèse aujourd’hui sur ceux qui n’ont pas de téléphone. Je montrerai ensuite que renoncer au téléphone n’a pas le même sens pour tout le monde. Enfin, je me demanderai ce qu’il faudrait faire pour que vivre sans téléphone reste une possibilité, et non un handicap.\n\n' +
    'Premièrement, la contrainte est bien réelle, et elle est d’autant plus forte qu’elle est diffuse. Le premier document le dit très bien : aucune loi n’a rendu le téléphone obligatoire, mais une accumulation de décisions, chacune raisonnable, a abouti à ce résultat. La banque demande de valider les paiements dans une application, le guichet de la gare ferme, le stationnement se paie en ligne, l’école communique par une messagerie. Le chroniqueur en fait l’expérience concrète : il doit parcourir quarante kilomètres pour valider un virement au guichet, et il manque des anniversaires parce que les invitations circulent dans des groupes de discussion. Je peux ajouter un exemple personnel : l’an dernier, pour accéder à mon propre dossier de santé, il m’a fallu recevoir un code sur mon téléphone. Sans téléphone, je n’aurais tout simplement pas pu consulter des informations qui me concernent. Autrement dit, ce n’est pas la vie au sens biologique qui est menacée, bien sûr, c’est la vie sociale, administrative, économique. On peut vivre sans téléphone, mais on vit alors à côté des autres.\n\n' +
    'Deuxièmement, ce même geste, ne pas avoir de téléphone, n’a pas du tout la même signification selon la situation de chacun. La sociologue distingue deux populations. D’un côté, une minorité, souvent diplômée et entourée, qui renonce volontairement au smartphone ; pour elle, la déconnexion est devenue presque un signe de distinction. De l’autre, une majorité qui n’a pas choisi : près d’un tiers des plus de soixante-quinze ans n’a pas de smartphone, et un adulte sur cinq ne sait pas s’en servir pour ses démarches. Pour ces personnes, l’absence de téléphone n’est pas une sobriété, c’est une relégation. Ce qui me frappe, c’est que la chronique de Bastien Lhermite illustre parfaitement la première catégorie, et il a la lucidité de le reconnaître. Son expérience réussit en partie parce que sa compagne réserve, paie et reçoit les codes à sa place. Il le dit lui-même : il ne vivait pas sans smartphone, il vivait avec celui des autres. Autrement dit, vivre sans téléphone aujourd’hui, c’est souvent déplacer la contrainte sur quelqu’un d’autre, un conjoint, un enfant, un voisin. Je pense aussi aux personnes âgées de mon entourage, qui demandent à leurs petits-enfants de faire leurs démarches à leur place. La question n’est donc pas seulement technique ; elle est aussi une question d’autonomie et d’égalité.\n\n' +
    'Cela ne veut pas dire, pour autant, que l’expérience du chroniqueur soit sans valeur. Elle montre ce que le smartphone nous prend : l’attention, le sommeil, la lecture, la présence aux autres. Et sa conclusion me paraît juste : la vraie question n’est pas d’avoir ou non l’objet, mais de savoir qui décide de l’emploi de notre temps.\n\n' +
    'Il faut d’ailleurs reconnaître, et la sociologue le fait elle-même, que le téléphone n’est pas seulement une contrainte. Pour une personne à mobilité réduite, pour des parents séparés qui organisent la garde de leurs enfants, pour quelqu’un qui travaille de nuit, il simplifie réellement la vie. Je ne voudrais donc pas défendre une forme de nostalgie : personne ne regrette les files d’attente interminables. Le problème n’est pas que le téléphone facilite la vie de beaucoup ; c’est que cette facilité devient la norme et que l’on oublie ceux qui restent de l’autre côté. Comme le dit très justement la sociologue, ces personnes-là ne répondent pas aux enquêtes en ligne, et elles disparaissent donc des statistiques au moment même où l’on décide pour elles.\n\n' +
    'Le monde du travail illustre bien cette exclusion silencieuse. Le chroniqueur raconte que son équipe s’organisait par une messagerie de groupe et qu’au bout de quelques mois, on ne lui proposait plus les missions décidées dans l’heure. Personne ne lui a rien reproché, et c’est précisément ce qui est inquiétant : l’exclusion ne prend pas la forme d’une sanction, mais d’un oubli progressif. Dans mon propre entourage, une amie qui avait choisi de ne pas installer la messagerie de son entreprise a fini par céder, non parce qu’on l’y obligeait, mais parce qu’elle se sentait toujours la dernière informée. On voit ici que la contrainte n’a pas besoin d’être écrite pour être efficace.\n\n' +
    'Troisièmement, que faudrait-il faire pour que vivre sans téléphone reste une possibilité réelle ? La sociologue propose un droit à l’alternative : tout service public et tout service essentiel devrait garantir un accès sans téléphone, par un guichet, une ligne téléphonique ordinaire ou un formulaire papier. Cette proposition me semble la bonne, à deux conditions. D’abord, il faut que cette alternative ne soit pas une solution au rabais, avec des délais plus longs ou des frais supplémentaires, sinon on punit ceux qui n’ont pas de téléphone. Ensuite, il faut accompagner ceux qui en ont un sans le maîtriser, par exemple grâce à des permanences dans les mairies ou les bibliothèques. On peut m’objecter que maintenir des guichets coûte cher. C’est vrai. Mais faire d’un objet de consommation la condition d’accès à des droits a aussi un coût, simplement il est supporté par les plus fragiles. À titre individuel, enfin, chacun peut, comme le chroniqueur, reprendre la main : couper les notifications, laisser le téléphone dans l’entrée. Ce n’est pas vivre sans téléphone, mais c’est cesser de vivre pour lui.\n\n' +
    'Pour conclure, je répondrai à la question posée de façon nuancée. Oui, on peut encore vivre sans téléphone, au sens où rien ne l’interdit. Mais on ne peut plus guère le faire sans dépendre des autres ni sans renoncer à une partie de ses droits, et cette situation pèse surtout sur ceux qui ne l’ont pas choisie. La vraie question, me semble-t-il, n’est donc pas de savoir si chacun doit avoir un téléphone, mais si notre société accepte qu’il devienne la clé obligatoire de la vie commune. Et cette question-là ne se règle pas dans un tiroir, comme l’a fait le chroniqueur : elle se règle collectivement, par des choix publics.',
};

const PO1_DEBATE: ExamDebate = {
  question: 'Peut-on encore vivre sans téléphone ?',
  opening: {
    id: 'open',
    text: 'Merci pour cet exposé. Je vais maintenant discuter certains de vos arguments, et vous me répondrez.',
    cues: [],
    covers: 'ouverture de l’entretien',
  },
  clarify: {
    id: 'clarify',
    text:
      'Avant d’aller plus loin, je voudrais être sûr de bien vous suivre. Selon vous, est-il encore possible aujourd’hui de vivre sans téléphone, ou pensez-vous que ce n’est plus possible ?',
    cues: [],
    covers: 'lever l’ambiguïté sur la thèse défendue',
  },
  sideCues: {
    // "pour" = on peut encore vivre sans téléphone.
    pour: [
      'on peut encore vivre sans', 'c est encore possible', 'il est possible de vivre sans',
      'on peut s en passer', 'vivre sans telephone est possible', 'rien n oblige a avoir un telephone',
    ],
    // "contre" = on ne le peut plus.
    contre: [
      'on ne peut plus vivre sans', 'ce n est plus possible', 'impossible de vivre sans',
      'on ne peut pas s en passer', 'le telephone est devenu indispensable', 'le telephone est obligatoire',
    ],
  },
  axes: [
    /* ── against POUR: the candidate says one can still live without ───── */
    {
      id: 'demarches',
      against: 'pour',
      about: 'les démarches devenues impossibles sans téléphone',
      moves: [
        M('dm1', 'counter', 1,
          'Vous dites qu’on peut encore vivre sans téléphone. Mais le chroniqueur a dû faire quarante kilomètres pour un simple virement. Est-ce que vous appelez cela vivre normalement ?',
          'les démarches ordinaires exigent le téléphone'),
        M('dm2', 'counter-example', 2,
          'Prenons quelqu’un qui cherche un emploi : rendez-vous par lien, offres par application, codes de connexion par SMS. Concrètement, comment fait-il sans téléphone, demain matin ?',
          'le contre-exemple du demandeur d’emploi'),
        M('dm3', 'concession', 3,
          'Vous venez de reconnaître que certaines démarches sont devenues presque impossibles sans téléphone. Mais alors, « vivre » sans téléphone, n’est-ce pas simplement survivre en marge ? Que reste-t-il de votre thèse ?',
          'la concession sur les démarches retournée contre la thèse'),
        M('dm-r', 'retreat', 1,
          'Il me semble que vous dites maintenant le contraire de ce que vous souteniez dans votre exposé. Qu’est-ce qui vous a fait changer d’avis, précisément ?',
          'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'autrui',
      against: 'pour',
      about: 'la dépendance au téléphone des proches',
      moves: [
        M('au1', 'counter', 1,
          'Le chroniqueur l’avoue lui-même : il vivait avec le téléphone de sa compagne. Si vivre sans téléphone suppose que quelqu’un d’autre en ait un pour vous, est-ce encore vivre sans ?',
          'vivre sans téléphone, c’est vivre avec celui des autres'),
        M('au2', 'probe', 2,
          'Et pour une personne qui vit seule, sans famille à proximité ? Sur qui s’appuie-t-elle, à votre avis ?',
          'la personne isolée sans relais'),
        M('au3', 'concession', 3,
          'Vous admettez que la déconnexion repose souvent sur le travail invisible de l’entourage. Alors ce n’est pas un choix individuel, c’est une charge reportée sur les autres. Est-ce encore défendable ?',
          'la concession sur l’entourage retournée en question de responsabilité'),
      ],
    },
    {
      id: 'privilege',
      against: 'pour',
      about: 'la déconnexion comme privilège social',
      moves: [
        M('pv1', 'counter', 1,
          'La sociologue explique que ceux qui renoncent au smartphone sont souvent diplômés et bien entourés. Votre thèse ne vaut-elle pas surtout pour une minorité favorisée ?',
          'la possibilité n’existe que pour les privilégiés'),
        M('pv2', 'counter-example', 2,
          'Pensez à une personne âgée dont l’agence bancaire a fermé. Pour elle, ne pas avoir de téléphone n’est pas une liberté, c’est une exclusion. Comment intégrez-vous ce cas dans votre raisonnement ?',
          'le contre-exemple de la personne âgée reléguée'),
        M('pv3', 'concession', 3,
          'Vous accordez que le même geste n’a pas le même sens selon la situation sociale. Dans ce cas, dire « on peut vivre sans téléphone », n’est-ce pas parler depuis une position confortable ?',
          'la concession sur l’inégalité retournée contre le point de vue du candidat'),
      ],
    },
    {
      id: 'urgence',
      against: 'pour',
      about: 'la sécurité et les situations d’urgence',
      moves: [
        M('ur1', 'counter', 1,
          'Les cabines téléphoniques ont disparu. Si vous avez un accident sur une route de campagne, sans téléphone, comment appelez-vous les secours ?',
          'la sécurité exige d’être joignable'),
        M('ur2', 'consequence', 2,
          'Et les parents ? Accepteriez-vous qu’un adolescent rentre seul le soir sans aucun moyen de vous joindre ? Si non, vous admettez que le téléphone est devenu une condition de sécurité.',
          'la conséquence pour les familles'),
        M('ur3', 'concession', 3,
          'Vous reconnaissez qu’il faut au moins un téléphone simple pour les urgences. Votre position devient donc « on peut vivre sans smartphone », ce qui n’est pas la même chose. Assumez-vous ce glissement ?',
          'la concession sur l’urgence retournée en déplacement de la thèse'),
      ],
    },

    /* ── against CONTRE: the candidate says it is no longer possible ───── */
    {
      id: 'faits',
      against: 'contre',
      about: 'ceux qui vivent effectivement sans smartphone',
      moves: [
        M('fa1', 'counter', 1,
          'Près d’un tiers des plus de soixante-quinze ans n’ont pas de smartphone, selon le premier document. Ils vivent pourtant. Comment pouvez-vous dire que c’est impossible ?',
          'des millions de personnes vivent sans'),
        M('fa2', 'counter-example', 2,
          'Le chroniqueur a tenu un an, et il dit lui-même qu’il lisait davantage et dormait mieux. Son expérience ne réfute-t-elle pas votre thèse ?',
          'le contre-exemple de l’année réussie'),
        M('fa3', 'concession', 3,
          'Vous admettez que ces personnes vivent sans smartphone, même difficilement. Alors ce que vous décrivez n’est pas une impossibilité, c’est un inconfort. Pourquoi employer un mot aussi fort ?',
          'la concession sur les faits retournée contre le vocabulaire de l’impossible'),
        M('fa-r', 'retreat', 1,
          'Vous défendiez tout à l’heure qu’on ne pouvait plus vivre sans téléphone, et vous semblez maintenant dire l’inverse. Qu’est-ce qui a changé dans votre raisonnement ?',
          'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'confort',
      against: 'contre',
      about: 'la confusion entre commodité et nécessité',
      moves: [
        M('co1', 'counter', 1,
          'Payer son stationnement par une application, c’est commode, ce n’est pas vital. Ne confondez-vous pas ce qui est pratique avec ce qui est indispensable ?',
          'commodité n’est pas nécessité'),
        M('co2', 'probe', 2,
          'Citez-moi une seule chose réellement vitale qu’on ne peut plus faire sans téléphone. Pas une démarche plus longue : une chose impossible.',
          'exiger l’exemple d’une impossibilité réelle'),
        M('co3', 'concession', 3,
          'Vous venez de reconnaître que la plupart des démarches restent possibles, simplement plus lentes. Votre thèse ne se réduit-elle pas alors à une préférence pour la rapidité ?',
          'la concession sur la lenteur retournée contre la thèse'),
      ],
    },
    {
      id: 'fatalisme',
      against: 'contre',
      about: 'le risque de présenter comme inévitable un choix collectif',
      moves: [
        M('ft1', 'counter', 1,
          'La sociologue rappelle qu’aucune loi n’a rendu le téléphone obligatoire. En affirmant qu’on ne peut plus s’en passer, ne transformez-vous pas un ensemble de choix en fatalité ?',
          'dire « impossible » naturalise un choix'),
        M('ft2', 'consequence', 2,
          'Si l’on admet que c’est impossible, plus rien n’oblige une banque ou une gare à garder un guichet. Votre constat ne risque-t-il pas de justifier les fermetures que vous regrettez peut-être ?',
          'la conséquence politique du constat'),
        M('ft3', 'concession', 3,
          'Vous accordez que cette situation résulte de décisions qu’on pourrait prendre autrement. Dans ce cas, ce n’est pas « impossible », c’est « rendu difficile ». Pourquoi ne pas le dire ainsi ?',
          'la concession sur l’origine retournée contre la fatalité'),
      ],
    },
    {
      id: 'maitrise',
      against: 'contre',
      about: 'la liberté individuelle face à l’objet',
      moves: [
        M('ma1', 'counter', 1,
          'Le chroniqueur conclut que la question est de savoir qui décide de l’emploi de son temps. Dire qu’on ne peut plus vivre sans téléphone, n’est-ce pas renoncer d’avance à cette maîtrise ?',
          'la thèse abdique la liberté individuelle'),
        M('ma2', 'counter-example', 2,
          'Beaucoup de gens gardent un téléphone mais suppriment les réseaux sociaux, coupent les notifications, le laissent dans l’entrée. Cela ne montre-t-il pas qu’on peut au moins vivre sans en dépendre ?',
          'le contre-exemple de l’usage maîtrisé'),
        M('ma3', 'concession', 3,
          'Vous reconnaissez qu’on peut limiter fortement son usage. Alors le problème n’est pas l’objet lui-même, mais notre rapport à lui. N’est-ce pas une tout autre question que celle de l’impossibilité ?',
          'la concession sur l’usage retournée en déplacement du problème'),
      ],
    },
  ],
  closing: {
    id: 'close',
    text: 'Nous allons nous arrêter là. Je vous remercie.',
    cues: [],
    covers: 'clôture de l’entretien',
  },
};

export const PO1_ENTRETIEN: ExamTask = {
  ...base,
  id: taskId('po_debate', '001'),
  taskType: 'po_debate',
  skill: 'PO',
  label: 'Production orale · Sujet 1 · Entretien',
  prompt:
    'Phase 2 · Entretien avec le jury (15 à 20 minutes)\n\n' +
    'Le jury va discuter la position que vous avez défendue dans votre exposé. Répondez à ses questions, défendez votre point de vue, précisez-le et nuancez-le si nécessaire, en vous appuyant sur les documents et sur votre expérience.',
  timingS: 1200,
  responseSpec: { kind: 'audio', minDurationS: 900, maxDurationS: 1200 },
  parts: PO1_DOSSIER,
  debate: PO1_DEBATE,
  rubric: entretienRubric,
  examinerNotes: NOTES_ENTRETIEN,
  modelAnswer:
    'Vous avez raison de rappeler que le chroniqueur a dû faire quarante kilomètres pour un virement, et je ne prétends pas que ce soit une vie normale. Mais c’est justement mon point : on peut encore vivre sans téléphone, au sens où rien ne l’interdit, mais à un prix que notre société fait payer aux mauvaises personnes. Je ne dis pas que c’est facile ; je dis que c’est possible, et que c’est la difficulté qu’il faut combattre, pas la possibilité qu’il faut nier.\n\n' +
    'Sur la dépendance à l’entourage, je vous l’accorde entièrement, et je l’ai d’ailleurs souligné dans mon exposé : le chroniqueur vivait avec le téléphone de sa compagne. En revanche, je ne crois pas que cela invalide ma position. Cela montre que la question n’est pas individuelle. Une personne seule, sans famille, n’a pas ce relais, et c’est pour elle que le droit à une alternative est indispensable. Autrement dit, votre objection renforce ma conclusion plus qu’elle ne la contredit.\n\n' +
    'Quant aux urgences, je reconnais volontiers qu’un téléphone simple reste nécessaire, et je veux bien préciser ma thèse : on peut encore vivre sans smartphone, pas sans aucun moyen d’être joint. Ce n’est pas un glissement, c’est une précision. La question du dossier porte sur l’objet qui sert à tout, la banque, l’école, le travail, et non sur un appareil qui sert à appeler.\n\n' +
    'Enfin, vous me dites que je parle depuis une position confortable. C’est possible, et je préfère le reconnaître. C’est d’ailleurs pour cela que je ne défends pas la déconnexion comme un modèle. Ce que je défends, c’est que ceux qui n’ont pas de téléphone, le plus souvent sans l’avoir choisi, gardent l’accès à leurs droits. Si vous me montriez qu’un guichet ou une ligne téléphonique ordinaire coûte plus cher à la collectivité que l’exclusion de près d’un tiers des plus âgés, je réviserais mon jugement. Pour l’instant, personne ne me l’a montré.',
};

/* ═══ PO · subject 2 (DALF-53) · juger une œuvre indépendamment de son auteur ═══ */

const PO2_DOSSIER: ExamPart[] = [
  {
    label: 'Document 1 · Faut-il retirer les livres de Théophane Carvel ?',
    items: [],
    text:
      'Compte rendu de la soirée-débat organisée par la médiathèque de Pontivers.\n\n' +
      'Depuis la condamnation du romancier Théophane Carvel pour des violences répétées envers son ancienne compagne, une pétition signée par neuf cents personnes demandait à la médiathèque de retirer ses romans des rayons. Plutôt que de trancher seule, la direction a ouvert ses portes à un débat public. Cent quarante personnes y ont assisté jeudi soir.\n\n' +
      'La directrice, Sylvie Ondrat, a d’emblée rappelé la mission de l’établissement : « Notre rôle n’est pas de juger les auteurs, c’est de donner accès aux œuvres. Si nous retirions les livres de tous les écrivains condamnés ou contestés, nos rayons de littérature seraient bien moins remplis. » Une représentante d’une association d’aide aux victimes lui a répondu qu’il ne s’agissait pas de bannir, mais de ne pas honorer : « Laisser ses livres en vitrine, les proposer dans la sélection des lecteurs, c’est continuer à le célébrer. Et chaque emprunt contribue à faire vivre un auteur qui touche encore des droits. »\n\n' +
      'Plusieurs lecteurs ont témoigné d’un malaise plus intime. « J’ai aimé ces romans avant de savoir, a expliqué une habituée. Aujourd’hui, je ne peux plus les relire de la même façon : les scènes de jalousie que je trouvais si justes me semblent maintenant écrites de l’intérieur. » Un professeur de lycée a prolongé la remarque : les romans de Carvel décrivent précisément des relations de domination ; peut-on encore les lire sans y penser, et doit-on même essayer ?\n\n' +
      'Un libraire de la ville a apporté un point de vue plus terre à terre. Depuis la condamnation, il continue de commander les livres de Carvel quand un client les demande, mais il ne les met plus en avant. « Je ne suis pas un tribunal, a-t-il dit, mais je ne suis pas non plus obligé de faire sa promotion. » Une étudiante lui a fait remarquer que cette discrétion revenait à laisser chacun décider seul, sans information. Le libraire a reconnu qu’il n’avait pas de réponse satisfaisante, et que la plupart de ses clients ignoraient tout de l’affaire.\n\n' +
      'À l’issue de la soirée, la médiathèque a annoncé sa décision : les romans restent en rayon et peuvent être empruntés, mais ils sont retirés des tables de présentation et de la sélection du prix des jeunes lecteurs. Une fiche rappelant la condamnation de l’auteur sera disponible à l’accueil pour qui la demande. La directrice a fait remarquer, non sans ironie, que les emprunts de ses livres avaient augmenté de quarante pour cent depuis le début de l’affaire.\n\n' +
      'D’après la lettre d’information de la médiathèque de Pontivers',
  },
  {
    label: 'Document 2 · Pourquoi j’enseigne encore Morand-Lescure',
    items: [],
    text:
      'Chaque année, je fais lire à mes élèves de première les poèmes marins d’Évariste Morand-Lescure. Chaque année, je leur fais lire aussi, quelques semaines plus tard, les pamphlets haineux qu’il a écrits contre les étrangers à la fin de sa vie. Des collègues me demandent pourquoi je ne me contente pas des poèmes, puisque le programme ne mentionne qu’eux. Je voudrais leur répondre.\n\n' +
      'On nous répète qu’il faut séparer l’œuvre de l’auteur. Je ne sais pas le faire, et je doute que quiconque le sache, une fois qu’il sait. Mes élèves non plus : lorsqu’ils découvrent les pamphlets, ils retournent d’eux-mêmes aux poèmes, et ils y trouvent ce qu’ils n’avaient pas vu, la même obsession de la pureté, de l’eau claire que rien ne doit troubler. Le lien ne détruit pas la beauté des vers, mais il en change la lecture. C’est à ce moment-là, pour la première fois de l’année, qu’ils lisent en adultes : ils tiennent ensemble l’admiration et la gêne, sans renoncer ni à l’une ni à l’autre.\n\n' +
      'Tous ne réagissent pas ainsi, et je ne le cache pas. L’an dernier, une élève m’a dit qu’elle ne voulait plus lire une ligne de Morand-Lescure, que ses parents étaient arrivés dans ce pays comme ceux que visaient les pamphlets, et qu’elle ne voyait pas pourquoi elle devrait admirer quoi que ce soit chez lui. Je n’ai pas cherché à la convaincre. Je lui ai proposé d’écrire sur ce refus, et son devoir fut le meilleur de la classe. Son refus aussi était une lecture.\n\n' +
      'Je ne prétends pas pour autant que tout se vaut. Morand-Lescure est mort depuis plus d’un siècle ; le lire ne l’enrichit pas et ne lui donne aucune tribune. Ce n’est pas la même chose de lire un auteur disparu et d’acheter les livres d’un auteur vivant qui en tire profit et notoriété. Je distingue aussi l’œuvre et les honneurs. Quand notre conseil d’établissement a débattu de l’ancien nom du lycée, qui était le sien, j’ai voté pour qu’on le change. Étudier un poète n’oblige pas à l’ériger en modèle à l’entrée d’une école.\n\n' +
      'Ce que je refuse, en revanche, c’est la solution de facilité qui consiste à retirer l’œuvre du programme. Ce serait priver mes élèves d’une beauté réelle, et surtout leur épargner la question la plus formatrice qui soit : comment un esprit capable de cela a-t-il pu écrire aussi ceci ? Juger une œuvre indépendamment de son auteur, non. Juger l’œuvre en connaissant l’auteur, oui, et c’est plus difficile.\n\n' +
      'Hélène Daguerre, professeure de lettres, tribune parue dans une revue pédagogique',
  },
];

export const PO2_EXPOSE: ExamTask = {
  ...base,
  id: taskId('po_monologue', '002'),
  taskType: 'po_monologue',
  skill: 'PO',
  label: 'Production orale · Sujet 2 · Exposé',
  prompt:
    'PRODUCTION ORALE · Sujet 2 · 25 points · 1 heure de préparation, environ 30 minutes de passation\n\n' +
    'Phase 1 · Exposé (8 à 10 minutes)\n\n' +
    'Thème : Faut-il juger une œuvre indépendamment de son auteur ?\n\n' +
    'À partir des documents proposés, vous préparerez un exposé sur ce thème. Vous présenterez une réflexion ordonnée et personnelle, avec une introduction qui pose la question, un plan annoncé et une conclusion. Les documents sont une source d’idées et d’exemples : ne les résumez pas l’un après l’autre.\n\n' +
    'L’exposé sera suivi d’un entretien avec le jury.',
  prepS: 3600,
  timingS: 600,
  responseSpec: { kind: 'audio', minDurationS: 480, maxDurationS: 600 },
  parts: PO2_DOSSIER,
  rubric: exposeRubric('Faut-il juger une œuvre indépendamment de son auteur ?'),
  examinerNotes: notesExpose([
    'Points d’appui du dossier : la mission d’accès de la bibliothèque contre le refus d’honorer ; l’argument économique (un auteur vivant touche des droits) ; la relecture inévitable une fois l’auteur connu ; la décision intermédiaire (en rayon, mais hors vitrine et hors prix) ; l’effet paradoxal de la polémique sur les emprunts (doc. 1). L’impossibilité de séparer une fois qu’on sait ; le lien découvert entre l’œuvre et les idées ; la lecture adulte qui tient admiration et gêne ; les distinctions auteur mort / auteur vivant et œuvre / honneurs (doc. 2).',
    'Croisement attendu au niveau C1 : la distinction « ne pas bannir mais ne pas honorer » (doc. 1) rejoint la distinction œuvre / honneurs (doc. 2) ; l’argument des droits d’auteur (doc. 1) rejoint la distinction auteur vivant / auteur mort (doc. 2).',
  ]),
  modelAnswer:
    'Lorsqu’un écrivain est condamné ou que l’on découvre des écrits odieux d’un artiste admiré, une question revient immanquablement : faut-il continuer à lire, à étudier, à aimer son œuvre comme si de rien n’était ? Le dossier propose deux situations. D’un côté, une médiathèque confrontée à une pétition demandant le retrait des romans d’un auteur condamné pour violences ; de l’autre, une professeure de lettres qui continue d’enseigner un poète, mort depuis plus d’un siècle, auteur de pamphlets haineux. La question posée, « faut-il juger une œuvre indépendamment de son auteur ? », suppose qu’une telle séparation soit possible, puis qu’elle soit souhaitable. Je voudrais montrer que la séparation complète est une illusion, mais que cela ne conduit pas pour autant à condamner l’œuvre : on peut juger une œuvre en connaissant son auteur, à condition de distinguer plusieurs choses que le débat confond souvent.\n\n' +
    'Mon exposé suivra trois étapes. Je montrerai d’abord pourquoi il est si difficile, voire impossible, de lire une œuvre en oubliant son auteur. Je soutiendrai ensuite que cette difficulté ne justifie pas de retirer les œuvres. Enfin, je proposerai quelques distinctions qui permettent, selon moi, de sortir de l’alternative entre tout séparer et tout condamner.\n\n' +
    'Premièrement, une fois que l’on sait, on ne lit plus de la même façon. Le premier document en donne un exemple frappant : une lectrice explique que les scènes de jalousie qu’elle trouvait si justes lui semblent désormais « écrites de l’intérieur ». La professeure du second document va plus loin : elle affirme qu’elle ne sait pas séparer l’œuvre de l’auteur, et elle doute que quiconque le sache. Ses élèves, en découvrant les pamphlets du poète, retournent d’eux-mêmes aux poèmes et y découvrent la même obsession de la pureté. J’ai fait une expérience semblable avec un chanteur que j’écoutais beaucoup adolescent : le jour où j’ai appris ce qu’il pensait de certaines minorités, je n’ai plus pu entendre ses chansons d’amour sans un malaise. La musique n’avait pas changé ; c’est mon écoute qui avait changé. L’idée d’une œuvre autonome, qu’on pourrait juger en faisant abstraction de tout ce qu’on sait de son créateur, me paraît donc relever davantage du principe que de l’expérience réelle de la lecture.\n\n' +
    'Deuxièmement, faut-il en conclure qu’il faut retirer ces œuvres ? Je ne le crois pas, pour au moins trois raisons. D’abord, comme le rappelle la directrice de la médiathèque, si l’on retirait les livres de tous les auteurs condamnés ou contestés, des rayons entiers se videraient, et l’on se demanderait vite où placer la limite. Ensuite, retirer une œuvre, c’est priver les lecteurs de sa valeur réelle : la professeure parle d’une beauté qui existe, même chez un homme aux idées détestables. Enfin, et c’est l’argument qui me convainc le plus, la connaissance de l’auteur peut enrichir la lecture au lieu de l’appauvrir. Les élèves de la professeure apprennent à tenir ensemble l’admiration et la gêne, à se demander comment un même esprit a pu produire le meilleur et le pire. C’est, me semble-t-il, l’une des choses les plus précieuses que la littérature puisse enseigner. On peut ajouter un argument plus pragmatique, que la directrice relève avec ironie : les emprunts des livres de l’auteur ont augmenté de quarante pour cent depuis le début de l’affaire. La polémique n’a rien effacé ; elle a plutôt attisé la curiosité.\n\n' +
    'Il faut cependant prendre au sérieux une limite de ce raisonnement, que le second document évoque avec beaucoup de délicatesse. Une élève de la professeure a refusé de lire le poète, parce que ses propres parents appartenaient au groupe que visaient les pamphlets. Lui demander d’admirer ces vers, c’était lui demander d’oublier ce qu’ils représentaient pour elle. La réponse de la professeure me paraît exemplaire : elle n’a pas forcé l’élève, elle lui a proposé d’écrire sur son refus, et ce refus est devenu à son tour une lecture. Cela montre que la question n’a pas la même réponse pour tout le monde : on ne lit pas une œuvre depuis nulle part, on la lit avec son histoire. Le premier document le confirme d’une autre façon : le libraire qui continue de commander les livres de l’auteur sans les mettre en avant reconnaît que la plupart de ses clients ignorent tout de l’affaire. Autrement dit, la prétendue séparation entre l’œuvre et l’auteur est souvent moins un choix réfléchi qu’une ignorance. Et une étudiante lui fait justement remarquer que cette discrétion laisse chacun décider seul, sans information. C’est pourquoi je pense que la vraie liberté du lecteur ne consiste pas à ignorer l’auteur, mais à savoir, puis à choisir.\n\n' +
    'Troisièmement, refuser le retrait ne signifie pas que tout se vaut. Les deux documents proposent des distinctions qui me paraissent essentielles. La première oppose l’œuvre et les honneurs. La représentante de l’association d’aide aux victimes ne demande pas qu’on brûle les livres ; elle demande qu’on cesse de les mettre en vitrine, de les proposer à un prix. La professeure, de son côté, a voté pour que son lycée ne porte plus le nom du poète. Étudier une œuvre n’oblige pas à ériger son auteur en modèle. La deuxième distinction oppose l’auteur vivant et l’auteur disparu. Lire un poète mort depuis un siècle ne l’enrichit pas et ne lui donne aucune tribune ; acheter les livres d’un auteur vivant, en revanche, contribue à ses revenus et à sa notoriété. C’est d’ailleurs ce que rappelle l’association. Chacun peut donc, en conscience, choisir de ne pas acheter les livres d’un auteur vivant condamné, tout en jugeant que les bibliothèques doivent continuer de les proposer. Enfin, il me semble important de distinguer les faits établis, comme une condamnation, des simples accusations, sans quoi on risque de juger une œuvre sur des rumeurs. La solution choisie par la médiathèque me paraît assez juste de ce point de vue : les livres restent accessibles, mais ne sont plus mis en avant, et une information sur la condamnation est disponible pour qui la demande.\n\n' +
    'En conclusion, je ne crois pas qu’il faille juger une œuvre indépendamment de son auteur, tout simplement parce que c’est impossible une fois qu’on sait. Mais je ne crois pas non plus qu’il faille juger l’œuvre à la place de l’auteur. Il s’agit plutôt, comme le dit très bien la professeure, de juger l’œuvre en connaissant l’auteur, ce qui est plus exigeant. Cela suppose de garder les œuvres accessibles, de renoncer aux honneurs qui transformeraient un auteur en modèle, et de laisser à chaque lecteur la liberté de sa conscience. Reste une question que le dossier laisse ouverte, et que je poserai pour finir : les jeunes lecteurs, qui découvrent une œuvre sans connaître son auteur, doivent-ils être informés d’emblée, ou faut-il leur laisser d’abord la rencontre avec le texte ?',
};

const PO2_DEBATE: ExamDebate = {
  question: 'Faut-il juger une œuvre indépendamment de son auteur ?',
  opening: {
    id: 'open',
    text: 'Merci pour cet exposé. Je vais maintenant discuter certains de vos arguments, et vous me répondrez.',
    cues: [],
    covers: 'ouverture de l’entretien',
  },
  clarify: {
    id: 'clarify',
    text:
      'Avant d’aller plus loin, je voudrais être sûr de bien vous suivre. Selon vous, faut-il juger une œuvre en faisant abstraction de son auteur, ou au contraire tenir compte de ce que l’auteur a fait ou pensé ?',
    cues: [],
    covers: 'lever l’ambiguïté sur la thèse défendue',
  },
  sideCues: {
    // "pour" = il faut séparer l'œuvre de l'auteur.
    pour: [
      'separer l oeuvre de l auteur', 'il faut separer', 'l oeuvre est independante',
      'juger l oeuvre pour elle meme', 'la vie de l auteur ne compte pas', 'l oeuvre doit etre jugee seule',
    ],
    // "contre" = l'auteur compte dans le jugement.
    contre: [
      'on ne peut pas separer', 'impossible de separer', 'l auteur compte',
      'il faut tenir compte de l auteur', 'on ne peut pas ignorer l auteur', 'l oeuvre et l auteur sont lies',
    ],
  },
  axes: [
    /* ── against POUR: the candidate wants the work judged on its own ──── */
    {
      id: 'argent',
      against: 'pour',
      about: 'ce que la diffusion de l’œuvre rapporte à un auteur vivant',
      moves: [
        M('ar1', 'counter', 1,
          'Vous voulez juger l’œuvre seule. Mais quand j’achète le livre d’un auteur vivant condamné, je lui verse de l’argent. Ce n’est pas une abstraction, c’est un geste concret. Qu’en dites-vous ?',
          'l’achat enrichit l’auteur vivant'),
        M('ar2', 'counter-example', 2,
          'Imaginez qu’une victime voie l’auteur qui l’a frappée recevoir un prix littéraire et toucher des droits sur chaque exemplaire vendu. Lui expliqueriez-vous qu’il faut juger l’œuvre indépendamment ?',
          'le contre-exemple de la victime face à la célébration'),
        M('ar3', 'concession', 3,
          'Vous venez d’admettre que la situation d’un auteur vivant n’est pas celle d’un auteur mort. Vous reconnaissez donc que l’auteur compte dans notre jugement. Que reste-t-il de votre séparation ?',
          'la concession sur l’auteur vivant retournée contre la séparation'),
        M('ar-r', 'retreat', 1,
          'Il me semble que vous dites maintenant le contraire de ce que vous souteniez dans votre exposé. Qu’est-ce qui vous a fait changer d’avis, précisément ?',
          'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'contenu',
      against: 'pour',
      about: 'les œuvres qui portent en elles les idées de l’auteur',
      moves: [
        M('ct1', 'counter', 1,
          'Dans le second document, les élèves retrouvent dans les poèmes la même obsession de la pureté que dans les pamphlets. Si l’œuvre contient les idées de l’auteur, comment pourrait-on l’en séparer ?',
          'l’œuvre porte les idées de l’auteur'),
        M('ct2', 'probe', 2,
          'Et les romans de Carvel décrivent justement des relations de domination. Pouvez-vous me dire comment un lecteur informé pourrait les lire « indépendamment » ?',
          'exiger une méthode de lecture séparée'),
        M('ct3', 'concession', 3,
          'Vous accordez qu’on ne lit plus de la même façon une fois qu’on sait. Alors votre séparation n’est pas une réalité, c’est un idéal. Pourquoi défendre un idéal que personne ne peut pratiquer ?',
          'la concession sur la relecture retournée contre la faisabilité'),
      ],
    },
    {
      id: 'honneurs',
      against: 'pour',
      about: 'la différence entre lire une œuvre et honorer un auteur',
      moves: [
        M('ho1', 'counter', 1,
          'Si l’on juge l’œuvre seule, rien n’empêche de donner le nom de l’auteur à une école ou de le mettre en vitrine. Accepteriez-vous un lycée qui porte le nom d’un auteur de pamphlets haineux ?',
          'séparer conduit à continuer d’honorer'),
        M('ho2', 'consequence', 2,
          'Si les honneurs ne posent pas problème, la médiathèque aurait dû garder les romans de Carvel sur ses tables de présentation et dans le prix des jeunes lecteurs. Est-ce votre position ?',
          'la conséquence pour la décision de la médiathèque'),
        M('ho3', 'concession', 3,
          'Vous reconnaissez qu’honorer un auteur et lire son œuvre sont deux choses distinctes. Mais honorer, c’est bien juger l’auteur. Vous admettez donc que la personne de l’auteur entre dans certains de nos jugements ?',
          'la concession sur les honneurs retournée contre la séparation'),
      ],
    },
    {
      id: 'biographie',
      against: 'pour',
      about: 'l’usage sélectif de la biographie',
      moves: [
        M('bi1', 'counter', 1,
          'Quand un auteur a été résistant ou généreux, on s’en sert volontiers pour éclairer son œuvre. Pourquoi la biographie compterait-elle seulement quand elle est flatteuse ?',
          'on n’invoque la biographie que lorsqu’elle avantage'),
        M('bi2', 'counter-example', 2,
          'Les manuels scolaires présentent presque toujours la vie de l’auteur avant ses textes. Faudrait-il, selon vous, supprimer ces pages ?',
          'le contre-exemple de l’enseignement par la biographie'),
        M('bi3', 'concession', 3,
          'Vous admettez que la vie d’un auteur peut éclairer son œuvre. Alors elle peut aussi l’assombrir. Pourquoi accepter l’un et refuser l’autre ?',
          'la concession sur l’éclairage biographique retournée en exigence de cohérence'),
      ],
    },

    /* ── against CONTRE: the candidate wants the author taken into account ── */
    {
      id: 'limite',
      against: 'contre',
      about: 'jusqu’où mènerait la prise en compte de l’auteur',
      moves: [
        M('li1', 'counter', 1,
          'La directrice de la médiathèque le dit : si l’on retirait les livres de tous les auteurs condamnés ou contestés, des rayons entiers se videraient. Où placez-vous la limite ?',
          'la prise en compte de l’auteur n’a pas de limite naturelle'),
        M('li2', 'probe', 2,
          'Donnez-moi un critère précis : une condamnation, des propos, des opinions politiques ? Et qui décide ?',
          'exiger un critère et une autorité'),
        M('li3', 'concession', 3,
          'Vous reconnaissez qu’il est très difficile de fixer ce critère. Mais alors, toute décision deviendra arbitraire. Ne vaut-il pas mieux s’en tenir à l’œuvre ?',
          'la concession sur le critère retournée contre la thèse'),
        M('li-r', 'retreat', 1,
          'Vous défendiez tout à l’heure qu’on ne pouvait pas juger l’œuvre sans l’auteur, et vous semblez maintenant dire l’inverse. Qu’est-ce qui a changé dans votre raisonnement ?',
          'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'beaute',
      against: 'contre',
      about: 'la valeur propre de l’œuvre',
      moves: [
        M('be1', 'counter', 1,
          'La professeure parle d’une beauté réelle dans les poèmes. Une œuvre peut être belle ou forte quel que soit son auteur. En la jugeant à travers lui, ne passez-vous pas à côté de ce qu’elle est ?',
          'l’œuvre a une valeur propre'),
        M('be2', 'counter-example', 2,
          'Nous admirons des cathédrales construites par des sociétés qui pratiquaient l’esclavage ou la torture. Faut-il cesser de les admirer ?',
          'le contre-exemple des chefs-d’œuvre du passé'),
        M('be3', 'concession', 3,
          'Vous admettez qu’une œuvre peut garder sa valeur malgré son auteur. Dans ce cas, juger l’œuvre, c’est bien la juger en elle-même. N’est-ce pas exactement la thèse que vous combattez ?',
          'la concession sur la valeur retournée contre la thèse'),
      ],
    },
    {
      id: 'collectif',
      against: 'contre',
      about: 'les autres personnes engagées dans une œuvre',
      moves: [
        M('cl1', 'counter', 1,
          'Une œuvre n’appartient pas qu’à son auteur. Un roman a un éditeur, un traducteur ; un film a des centaines de techniciens et d’acteurs. Faut-il les punir eux aussi ?',
          'l’œuvre engage d’autres personnes'),
        M('cl2', 'consequence', 2,
          'Si l’on retire un film parce que son réalisateur a commis une faute, l’actrice qui y joue le rôle de sa vie voit son travail disparaître. Est-ce juste ?',
          'la conséquence pour les collaborateurs'),
        M('cl3', 'concession', 3,
          'Vous reconnaissez que ces collaborateurs n’ont rien fait. Votre jugement de l’œuvre à travers l’auteur produit donc des victimes innocentes. Comment le justifiez-vous ?',
          'la concession sur les collaborateurs retournée en question de justice'),
      ],
    },
    {
      id: 'lecteur',
      against: 'contre',
      about: 'la liberté du lecteur et le risque de la rumeur',
      moves: [
        M('le1', 'counter', 1,
          'Les lecteurs sont des adultes. La médiathèque a décidé d’informer sans retirer. Pourquoi ne pas laisser chacun juger en conscience, plutôt que d’imposer un jugement sur l’auteur ?',
          'la liberté du lecteur'),
        M('le2', 'counter-example', 2,
          'Et si l’auteur était seulement accusé, pas condamné ? Une rumeur suffirait-elle, selon vous, à changer notre jugement sur son œuvre ?',
          'le contre-exemple de l’accusation non prouvée'),
        M('le3', 'concession', 3,
          'Vous admettez qu’il faut distinguer accusation et condamnation, et laisser le lecteur libre. Alors ce n’est plus l’œuvre que vous jugez, c’est l’auteur, par la justice. Pourquoi mêler les deux ?',
          'la concession sur la rumeur retournée en distinction des domaines'),
      ],
    },
  ],
  closing: {
    id: 'close',
    text: 'Nous allons nous arrêter là. Je vous remercie.',
    cues: [],
    covers: 'clôture de l’entretien',
  },
};

export const PO2_ENTRETIEN: ExamTask = {
  ...base,
  id: taskId('po_debate', '002'),
  taskType: 'po_debate',
  skill: 'PO',
  label: 'Production orale · Sujet 2 · Entretien',
  prompt:
    'Phase 2 · Entretien avec le jury (15 à 20 minutes)\n\n' +
    'Le jury va discuter la position que vous avez défendue dans votre exposé. Répondez à ses questions, défendez votre point de vue, précisez-le et nuancez-le si nécessaire, en vous appuyant sur les documents et sur votre expérience.',
  timingS: 1200,
  responseSpec: { kind: 'audio', minDurationS: 900, maxDurationS: 1200 },
  parts: PO2_DOSSIER,
  debate: PO2_DEBATE,
  rubric: entretienRubric,
  examinerNotes: NOTES_ENTRETIEN,
  modelAnswer:
    'Vous me demandez où je place la limite, et c’est une objection sérieuse, je ne vais pas l’esquiver. Je ne propose pas de retirer les œuvres : je l’ai dit, je suis d’accord avec la directrice de la médiathèque sur ce point. Ma limite ne porte donc pas sur l’accès aux œuvres, mais sur les honneurs. Une bibliothèque garde les livres ; elle n’est pas obligée de les mettre en vitrine ni de les proposer à un prix destiné aux jeunes lecteurs. Le critère est donc assez simple : tout reste accessible, mais rien n’oblige à célébrer.\n\n' +
    'Quant au critère qui permettrait de prendre en compte l’auteur, je distinguerais une condamnation prononcée par la justice d’une simple accusation. Je vous accorde qu’une rumeur ne devrait pas suffire. C’est d’ailleurs ce qui me fait préférer l’information à l’interdiction : la fiche proposée à l’accueil de la médiathèque rappelle un fait établi, et chacun en fait ce qu’il veut.\n\n' +
    'Vous m’opposez la beauté des œuvres et l’exemple des cathédrales. Je reconnais volontiers qu’une œuvre garde sa valeur malgré son auteur, et je ne prétends pas le contraire. Ce que je dis, c’est qu’on ne peut plus la percevoir de la même manière une fois qu’on sait. Ce n’est pas la même chose que de lui retirer sa valeur. Les élèves de la professeure admirent toujours les poèmes ; simplement, ils les admirent en sachant. Je dirais même que c’est la différence entre un lecteur naïf et un lecteur adulte.\n\n' +
    'Enfin, vous évoquez les collaborateurs, l’actrice, le traducteur. C’est un argument que je n’avais pas envisagé et qui me fait préciser ma position : il est une raison supplémentaire de ne jamais retirer une œuvre, puisque ce retrait toucherait des personnes qui n’ont rien fait. Mais il ne m’oblige pas à juger l’œuvre comme si l’auteur n’existait pas. Si l’on me montrait qu’informer le public nuit davantage à ces collaborateurs que de se taire, je reverrais mon jugement ; je ne crois pas que ce soit le cas.',
};
