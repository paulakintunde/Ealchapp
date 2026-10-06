// DALF C1 blanc-03: Production écrite and Production orale.
//
// PE: two tasks in 2 h 30 on ONE dossier (DALF-43, citizen science). The
// synthèse reports the dossier in 200-240 words (13 points); the essai argues a
// different question on the same theme, from a stated role to a stated
// addressee (12 points): an opinion column by an amateur participant, for the
// readers of a science magazine, on whether funders should require that
// volunteers' contributions be credited. The genre rotates across the pack
// (blanc-01 a contribution to a consultation, blanc-02 an open letter).
// Decision 36: the essai repeats the dossier in its own parts, same labels,
// same texts, same order, so the grader sees it.
//
// PO: the candidate draws two subjects and keeps one (BLUEPRINT §6). Both are
// authored: DALF-52 (« Le sport professionnel est-il encore du sport ? ») and
// DALF-56 (« Une tradition doit-elle changer pour survivre ? »), different
// themes so the choice is real. Each subject is an exposé (po_monologue, one
// hour of preparation, a two-document dossier, 8-10 min) followed by an
// entretien (po_debate, 15-20 min, a bank that attacks both sides with 12
// non-retreat moves per side).
//
// ── Model answers say only what the dossier says ────────────────────────────
//
// The model synthèse adds nothing, judges nothing and draws no link between
// documents that the documents do not make. The model exposés attribute to a
// document only what that document says; where they add the candidate's own
// experience, it is framed as personal experience and carries no figure and no
// fact about the world.
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
// INVENTED, all of it.
// Dossier PE: the town of Morvaline (110,000 inhabitants, four official
// stations), 1,800 balcony sensors from 2022, readings every five minutes,
// « deux ans plus tard », more data than the stations in twenty years, peaks
// outside schools between 8 h and 8 h 30, streets of three school groups
// closed, one sensor in five unusable at first, a 15 % gap after correction,
// the researcher Inès Carrouge, the Institut Albarède pour la qualité de l’air,
// the monthly « Curieuse Cité »; the historian Romain Lestrade, the université
// and hospital of Sainte-Orvane, registers 1820-1914, more than 300,000 lines,
// 4,000 volunteers in three years against about forty years for a team, two
// transcribers and a third to decide, the spring of 1866, the washerwomen and
// the lavoir, the revue « Archives vivantes »; the sociologist Claire
// Mandelieu, the Observatoire Clairval des métiers de la recherche, « près
// d’un poste de technicien sur quatre » cut in ten years, the daily « Le Pays
// du Soir ». Essai: the magazine « Horizons curieux ».
// Dossier PO 1: the sociologist Odile Brassac, the Institut Delmas-Ravel, the
// magazine « Terrains d’idées », 58 % of first-division club revenue from
// broadcasting rights against a little over 20 % from tickets, 21 h on a
// Sunday, the 5 % levy proposed; the former volleyball player Yannick
// Sauvaget, eleven seasons, two seasons with an injured shoulder, a European
// cup match before 4,000 people, the under-13s of his village club, « Le Petit
// Journal des Vallons ».
// Dossier PO 2: the town of Vérignac, the Grande Lanterne since 1680, the night
// of 14 August, 24 carriers of the confrérie des bateliers, 600 kg, the vote 31
// to 19, 14 candidates last year, a fire in 2023, six carriers who left, a
// carrier of forty years, 3,000 spectators last year and « plus du double »
// expected, the route changed in 1890, the lantern rebuilt in 1951, costumes
// from the 1930s, the curator Lucie Arnaudin, the new carrier Solène (19),
// « L’Écho de Vérignac »; the printer Bérénice Lalande, her workshop opened in
// 1847, fifteen years at its head, half a day per metre, the revue « Ouvrages
// de main ».
import type { ExamDebate, ExamPart, ExamTask, Rubric } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_OPEN, taskId } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  level: 'c1' as const,
};

/* ═══ PE · the dossier (DALF-43), about 1000 words ════════════════════════ */
//
// Three documents, same theme, three angles that cross: what volunteers' data
// can reveal and how its quality is won (doc 1, air sensors), what volunteers
// bring beyond their time and how badly they are credited (doc 2, archive
// transcription), the unequal division of roles and the risk of unpaid
// substitution (doc 3, a sociologist's column). The ties a good plan uses:
// scale and discovery in docs 1 and 2; quality through organisation in docs 1
// and 2; credit and funders who count only publications in docs 2 and 3.

const PE_DOSSIER: ExamPart[] = [
  {
    label: 'Document 1 · Dix-huit cents capteurs sur les balcons',
    items: [],
    text:
      'À Morvaline, dix-huit cents habitants ont installé sur leur balcon ou au bord d’une fenêtre un petit boîtier qui mesure, toutes les cinq minutes, les particules fines présentes dans l’air. L’initiative est venue en 2022 d’une association de parents d’élèves, inquiets de ne disposer que des relevés de quatre stations officielles pour une ville de cent dix mille habitants. Deux ans plus tard, ce réseau citoyen avait déjà produit plus de mesures que ces stations en vingt ans.\n\n' +
      'Ces données ont fait apparaître ce que personne ne voyait. Les cartes officielles décrivaient une pollution moyenne, répartie de façon assez uniforme. Les capteurs des habitants ont révélé des pics très localisés, notamment devant plusieurs écoles, entre huit heures et huit heures et demie, au moment où les parents déposent leurs enfants en voiture. Aucune station n’était placée assez près pour les enregistrer. La municipalité a depuis fermé à la circulation, aux heures d’entrée, les rues de trois groupes scolaires.\n\n' +
      'Le chemin n’a pourtant pas été simple. Les premiers mois, un capteur sur cinq produisait des mesures inutilisables. Ces appareils bon marché dérivent avec le temps et réagissent à l’humidité, et certains avaient été installés au-dessus d’un barbecue ou près d’une hotte de cuisine. « Nous avons d’abord cru que le projet était condamné », reconnaît Inès Carrouge, chercheuse à l’Institut Albarède pour la qualité de l’air, qui a accompagné l’association. Son équipe a organisé des séances d’étalonnage, placé des capteurs citoyens à côté des stations officielles pour comparer leurs relevés, et mis au point un programme qui écarte automatiquement les valeurs aberrantes. Une fois corrigées, les mesures citoyennes ne s’écartent plus des relevés officiels que de quinze pour cent en moyenne.\n\n' +
      '« Ce ne sont pas des données de laboratoire, et elles ne le seront jamais, précise la chercheuse. Mais pour repérer où et quand un problème se produit, leur nombre compense leur imprécision. Une station très exacte placée au mauvais endroit nous en apprend moins que cent capteurs approximatifs placés partout. »\n\n' +
      'D’après le mensuel Curieuse Cité',
  },
  {
    label: 'Document 2 · Les petites mains des archives',
    items: [],
    text:
      'Entretien avec Romain Lestrade, historien à l’université de Sainte-Orvane.\n\n' +
      'Votre projet repose sur des bénévoles. Que font-ils exactement ?\n' +
      'Ils transcrivent. Nous avons numérisé les registres d’admission de l’hôpital de Sainte-Orvane entre 1820 et 1914 : plus de trois cent mille lignes manuscrites, avec le nom, l’âge, le métier, le quartier et le motif d’entrée de chaque malade. En trois ans, quatre mille bénévoles les ont recopiées en ligne. Une équipe de chercheurs y aurait passé une quarantaine d’années.\n\n' +
      'Peut-on se fier à leur travail ?\n' +
      'C’est la première question qu’on me pose, et elle est légitime. Chaque page est transcrite par deux bénévoles qui ne se connaissent pas ; quand leurs versions divergent, un troisième tranche. Nous avons comparé un échantillon avec le travail de spécialistes des écritures anciennes : le taux d’erreur est à peine plus élevé. La qualité ne vient pas de chaque individu, elle vient de l’organisation.\n\n' +
      'Les bénévoles apportent-ils autre chose que du temps ?\n' +
      'Beaucoup plus, et c’est ce qui m’a le plus surpris. Une bénévole a remarqué qu’au printemps 1866, les admissions de blanchisseuses venues d’un même quartier se multipliaient. Personne dans l’équipe n’y avait prêté attention. Elle avait raison : en croisant d’autres sources, nous avons retrouvé la trace d’une épidémie liée à l’eau d’un lavoir, que les archives municipales ne mentionnaient pas. Sur notre forum, des centaines de discussions entre bénévoles ont ainsi fait naître des questions que nous n’aurions jamais posées.\n\n' +
      'Comment reconnaissez-vous leur contribution ?\n' +
      'Mal, je l’avoue. Leurs pseudonymes figurent sur une page de remerciements en ligne, mais pas dans nos articles. Nos revues n’ont pas prévu de place pour quatre mille noms, et les organismes qui financent nos travaux n’évaluent que nos publications. Certains bénévoles nous ont demandé, très poliment, s’ils seraient un jour cités. Je n’ai pas encore de réponse satisfaisante à leur donner.\n\n' +
      'Propos recueillis par la revue Archives vivantes',
  },
  {
    label: 'Document 3 · Bénévoles ou main-d’œuvre gratuite ?',
    items: [],
    text:
      'On célèbre volontiers la science participative comme une démocratisation du savoir. Le mot est flatteur ; la réalité est plus contrastée. Dans la plupart des projets, la répartition des rôles reste la même : les chercheurs définissent les questions, les volontaires collectent ou trient, puis les chercheurs interprètent et publient. Les participants voient rarement les résultats auxquels ils ont contribué, et presque jamais avant leur parution. Le vocabulaire trahit d’ailleurs cette hiérarchie : on parle de « contributeurs », rarement de « chercheurs amateurs », et les comptes rendus distinguent soigneusement ceux qui produisent les données de ceux qui les exploitent.\n\n' +
      'Il y a plus préoccupant. Dans un contexte de budgets contraints, la tentation est forte de confier à des bénévoles des tâches autrefois rémunérées. Le bénévole ne coûte rien, ne réclame ni contrat ni formation longue, et peut cesser du jour au lendemain sans que personne ait à s’en justifier. L’Observatoire Clairval des métiers de la recherche estime que, dans les projets qu’il a étudiés, près d’un poste de technicien sur quatre supprimé depuis dix ans correspondait à des tâches de collecte désormais confiées à des volontaires. Personne ne l’a décidé ouvertement ; chaque projet, pris isolément, paraissait raisonnable.\n\n' +
      'Je ne plaide pas pour la fin de la science participative, qui produit des connaissances qu’aucun laboratoire ne pourrait obtenir seul. Je plaide pour qu’elle tienne ses promesses. Trois principes y suffiraient. Associer les participants dès la définition des questions, et pas seulement à la collecte. Leur garantir l’accès aux données et aux résultats. Enfin, reconnaître leur contribution de façon visible : un nom, une mention dans les publications, une ligne dans les rapports remis aux financeurs. Tant que les organismes qui financent la recherche ne compteront que les articles signés par des chercheurs, le travail des volontaires restera invisible, et donc facile à exploiter.\n\n' +
      'Claire Mandelieu, sociologue des sciences, tribune parue dans le quotidien Le Pays du Soir',
  },
];

/** The dossier's information units, in the order a good plan uses them
 *  (STANDARD-dalf-c1 §6.1). In examinerNotes so the grader checks coverage. */
const PE_KEY_POINTS = [
  'Points clés du dossier, dans l’ordre d’un plan possible (le candidat peut en suivre un autre) :',
  '1. Le nombre des participants permet de réunir en peu de temps des données qu’aucune équipe ne rassemblerait seule (doc. 1 et doc. 2).',
  '2. Ces données révèlent ce que les dispositifs officiels ne voyaient pas : des pics de pollution devant les écoles, suivis d’une décision municipale (doc. 1) ; les bénévoles font aussi naître des questions de recherche nouvelles (doc. 2).',
  '3. La fiabilité est mise en doute : capteurs bon marché, mal placés, sensibles à l’humidité, un sur cinq inutilisable au début (doc. 1) ; c’est la première question posée au projet d’archives (doc. 2).',
  '4. La qualité vient de l’organisation : étalonnage, comparaison avec les stations, tri automatique (doc. 1) ; double transcription et arbitrage (doc. 2). Corrigées, les données approchent celles des professionnels.',
  '5. Pour localiser un problème, le nombre compense l’imprécision (doc. 1).',
  '6. Les rôles restent inégaux : les chercheurs posent les questions et publient, les volontaires collectent et voient rarement les résultats (doc. 3).',
  '7. Le travail bénévole peut remplacer des emplois rémunérés (doc. 3).',
  '8. La reconnaissance manque : pseudonymes hors des articles, financeurs qui ne comptent que les publications (doc. 2 et doc. 3) ; propositions : associer les participants en amont, leur ouvrir données et résultats, les mentionner visiblement (doc. 3).',
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
        'C1 : les idées sont reformulées avec les mots du candidat ; lexique abstrait précis ; seuls des mots clés sont repris.',
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
    'N’ajoutez aucune idée ni aucune information qui ne figure pas dans le dossier, et ne donnez pas votre avis. Vous pouvez reprendre les mots clés des documents, mais pas des phrases ni des passages entiers.\n\n' +
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
    'Les bénévoles de la science : une contribution à reconnaître\n\n' +
    'Les trois documents examinent ce que des citoyens bénévoles apportent à la recherche, et ce qu’ils en reçoivent en retour.\n\n' +
    'Leur premier atout est le nombre. Des capteurs posés sur les balcons d’une ville ou des milliers de volontaires recopiant des registres anciens réunissent en quelques années ce qu’une équipe professionnelle mettrait des décennies à rassembler. Cette abondance fait apparaître ce que les dispositifs officiels laissaient dans l’ombre, comme des pics de pollution devant des écoles, et les participants suggèrent même aux chercheurs des pistes inédites.\n\n' +
    'La fiabilité de ces contributions a pourtant été mise en doute. Des appareils bon marché, sensibles à l’humidité ou mal placés, ont d’abord fourni nombre de mesures inutilisables. La qualité tient donc à l’organisation : étalonnage, comparaison avec des relevés de référence, double transcription arbitrée. Ainsi encadrés, les résultats approchent ceux des spécialistes, et leur quantité compense leur imprécision lorsqu’il s’agit de localiser un problème.\n\n' +
    'Reste la place accordée aux volontaires. Cantonnés le plus souvent à la collecte, ils participent rarement à la définition des questions et découvrent tard les résultats. Leur travail risque en outre de se substituer à des emplois rémunérés. Absents des publications, seules prises en compte par les financeurs, ils demeurent invisibles. D’où les propositions avancées : les associer dès la conception des projets, leur ouvrir les données et mentionner leur contribution.',
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
        'En dessous du niveau : les conventions de la tribune ne sont pas respectées (pas de titre, pas de prise de position annoncée) ; registre inadapté aux lecteurs d’un magazine ; le point de vue de participant amateur n’apparaît pas.',
        'C1 : une tribune avec un titre et une thèse nette, écrite à la première personne par un participant et adressée aux lecteurs, dans un registre soutenu mais accessible.',
        'C1+ : le texte interpelle et engage ses lecteurs, fait de l’expérience du participant un argument et formule une demande précise aux financeurs.',
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
    'Le magazine de vulgarisation scientifique Horizons curieux ouvre une rubrique de tribunes à ses lecteurs sur la question suivante : les organismes qui financent la recherche devraient-ils exiger que la contribution des bénévoles soit reconnue dans les travaux qu’ils financent ?\n\n' +
    'Vous participez depuis plusieurs années, en amateur, à un projet de science participative. Vous rédigez une tribune destinée aux lecteurs du magazine, dans laquelle vous prenez position sur cette question et défendez votre point de vue par des arguments précis et des exemples, en vous appuyant notamment sur le contenu des documents du dossier.\n\n' +
    '250 mots minimum.',
  timingS: 4200,
  responseSpec: { kind: 'text', minWords: 250 },
  // Decision 36: the same dossier, same labels, texts and order.
  parts: PE_DOSSIER,
  rubric: ESSAI_RUBRIC,
  examinerNotes: [
    ...NOTES_OPEN,
    'Essai sur 12 points. Plancher : 124 mots ou moins, 0 sur tous les critères. Pas de maximum publié ; la réponse modèle compte environ 320 mots.',
    'La position peut être favorable, défavorable ou nuancée : seule compte la qualité de sa défense. Le genre attendu est une tribune, avec un titre, écrite par un participant amateur et adressée aux lecteurs d’un magazine de vulgarisation.',
  ],
  modelAnswer:
    'Nous ne demandons pas d’être payés, mais d’être nommés\n\n' +
    'Depuis quatre ans, un petit capteur fixé à mon balcon mesure l’air de ma rue. Je ne suis ni chimiste ni chercheur ; je suis l’un de ces amateurs dont la science participative fait grand cas dans ses communiqués. Faut-il que les organismes qui financent la recherche exigent que notre contribution soit reconnue ? Ma réponse est oui, et je voudrais expliquer pourquoi ce n’est pas une affaire de vanité.\n\n' +
    'On objectera que les bénévoles ne cherchent pas la gloire. C’est vrai, et je n’en connais aucun qui attende de voir son nom en couverture d’une revue. Mais reconnaître un travail, ce n’est pas le flatter : c’est le rendre visible. Or ce qui est invisible ne se défend pas. Quand une sociologue constate que des postes de techniciens disparaissent à mesure que des volontaires prennent leur place, elle décrit exactement ce qui arrive à un travail que personne ne compte. Si les rapports remis aux financeurs mentionnaient la part des bénévoles, chacun verrait enfin ce qu’ils remplacent, et ce qu’ils ne doivent pas remplacer.\n\n' +
    'La reconnaissance est aussi une question d’exactitude. Un historien raconte qu’une bénévole, en recopiant des registres d’hôpital, a remarqué une série d’admissions qui a conduit son équipe jusqu’à une épidémie oubliée. Cette personne n’a pas seulement prêté ses yeux : elle a posé une question de recherche. Taire son nom, c’est fausser l’histoire de la découverte.\n\n' +
    'Je ne réclame pas pour autant que quatre mille pseudonymes encombrent chaque article. Une mention collective dans les publications, une liste consultable, un chapitre dans les rapports d’activité suffiraient, à condition que les financeurs en fassent une règle plutôt qu’une politesse.\n\n' +
    'Lecteurs qui hésitez à rejoindre un projet, rejoignez-le. Mais demandez, dès le premier jour, ce qu’on fera de votre travail et sous quel nom. C’est ainsi que la science participative deviendra vraiment ce qu’elle prétend être : une science partagée.\n\n' +
    'Fabrice Olmeda, participant amateur à un réseau de mesure de l’air',
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

const exposePrompt = (n: number, theme: string) =>
  `PRODUCTION ORALE · Sujet ${n} · 25 points · 1 heure de préparation, environ 30 minutes de passation\n\n` +
  'Phase 1 · Exposé (8 à 10 minutes)\n\n' +
  `Thème : ${theme}\n\n` +
  'À partir des documents proposés, vous préparerez un exposé sur ce thème. Vous présenterez une réflexion ordonnée et personnelle, avec une introduction qui pose la question, un plan annoncé et une conclusion. Les documents sont une source d’idées et d’exemples : ne les résumez pas l’un après l’autre.\n\n' +
  'L’exposé sera suivi d’un entretien avec le jury.';

const ENTRETIEN_PROMPT =
  'Phase 2 · Entretien avec le jury (15 à 20 minutes)\n\n' +
  'Le jury va discuter la position que vous avez défendue dans votre exposé. Répondez à ses questions, défendez votre point de vue, précisez-le et nuancez-le si nécessaire, en vous appuyant sur les documents et sur votre expérience.';

/* ═══ PO · subject 1 (DALF-52) · Le sport professionnel est-il encore du sport ? ═══ */
//
// Two documents of different kinds: an interview with a sociologist (the
// economics and the risk to amateur sport) and a former player's chronicle
// (the body, the moments of pure play, the example set to children). The
// cross a C1 candidate should find: the sociologist's « réservoir » amateur
// clubs (doc 1) is the club where the player now coaches (doc 2); the injured
// shoulder (doc 2) embodies the overloaded calendar (doc 1).

const PO1_DOSSIER: ExamPart[] = [
  {
    label: 'Document 1 · « Autour du terrain, presque tout a changé »',
    items: [],
    text:
      'Entretien avec Odile Brassac, sociologue du sport à l’Institut Delmas-Ravel.\n\n' +
      'Le sport professionnel est-il encore du sport ?\n' +
      'Oui, si l’on regarde ce qui se passe sur le terrain. Les règles sont les mêmes que dans un club de village, le résultat reste incertain, et c’est cette incertitude qui fait tout. Un match dont on connaîtrait l’issue à l’avance ne vaudrait plus rien, même pour une chaîne de télévision. Mais autour du terrain, presque tout a changé. Le sport de haut niveau est devenu un spectacle, et ce spectacle est devenu une industrie.\n\n' +
      'Qu’entendez-vous par là ?\n' +
      'Regardez d’où vient l’argent. D’après notre étude, cinquante-huit pour cent des recettes des clubs de première division proviennent aujourd’hui des droits de diffusion, contre un peu plus de vingt pour cent pour la billetterie. Celui qui paie décide. Les horaires des matchs sont fixés pour les écrans, parfois à vingt et une heures un dimanche, tant pis pour les supporters qui viennent de loin ou pour les familles. Le calendrier se remplit de compétitions nouvelles, parce que chaque match supplémentaire se vend, et les blessures liées à la fatigue se multiplient. Les joueurs, eux, sont à la fois des salariés soumis à un employeur et des images de marque qui vendent des chaussures ou des boissons.\n\n' +
      'Le public semble pourtant au rendez-vous.\n' +
      'Il l’est, et je ne méprise pas du tout ce plaisir. Le spectacle sportif crée des émotions collectives rares : des inconnus qui s’embrassent dans un stade, une ville entière qui suit une équipe. Ce n’est pas rien. Mon inquiétude porte ailleurs.\n\n' +
      'Où, précisément ?\n' +
      'Dans l’écart qui se creuse avec le sport amateur. L’argent se concentre au sommet, pendant que les petits clubs manquent de bénévoles, d’éducateurs et de créneaux sur les terrains municipaux. Or le sport professionnel vit de ce réservoir : la plupart des champions ont commencé dans un club de quartier. Un sport professionnel qui assèche sa propre base scie la branche sur laquelle il est assis.\n\n' +
      'Que proposez-vous ?\n' +
      'Que cinq pour cent des droits de diffusion soient reversés obligatoirement au sport amateur, pour financer des éducateurs et entretenir des équipements. Et que les fédérations protègent un calendrier compatible avec la santé des joueurs. Le sport professionnel peut rester du sport, à condition de ne pas oublier d’où il vient et de ne pas user les corps qui le font vivre.\n\n' +
      'Propos recueillis par le magazine Terrains d’idées',
  },
  {
    label: 'Document 2 · Onze saisons, et le samedi matin',
    items: [],
    text:
      'Pendant onze saisons, j’ai été volleyeur professionnel. Aujourd’hui, j’entraîne les moins de treize ans du club de mon village, celui où j’ai commencé. On me demande souvent si le sport de haut niveau, c’est encore du sport. Je réponds que oui, mais que c’est aussi un métier, et qu’un métier a des horaires, des patrons et des risques.\n\n' +
      'À dix-neuf ans, quand j’ai signé mon premier contrat, j’ai cru que je serais payé pour jouer. J’ai découvert que j’étais payé pour gagner. La nuance paraît mince ; elle change tout. On ne vous demande plus de bien jouer, mais de rapporter des victoires, et même des abonnés sur les réseaux sociaux. Mon club comptait mes abonnés comme il comptait mes points marqués, et les deux pesaient dans les discussions sur mon salaire.\n\n' +
      'Des risques, d’abord. J’ai joué deux saisons avec une épaule abîmée, à coups d’infiltrations, parce que mon contrat devait être renouvelé et qu’un joueur blessé ne se vend pas. Personne ne m’y a forcé. Simplement, tout le monde autour de moi trouvait normal de le faire. Aujourd’hui, je ne peux plus lever le bras au-dessus de la tête sans douleur. Il y avait aussi les messages d’insultes après chaque défaite, envoyés par des gens qui ne m’avaient jamais vu jouer autrement qu’à travers un écran.\n\n' +
      'Et pourtant, je ne regrette rien. Je me souviens d’un match de coupe d’Europe, une salle de quatre mille personnes, un cinquième set que nous n’aurions jamais dû gagner. Pendant une heure, il n’y avait plus ni contrat, ni sponsor, ni classement : il y avait le jeu, rien que le jeu, et six joueurs qui se comprenaient sans se parler. Ces moments-là existent au plus haut niveau, et peut-être surtout là, parce que tout le monde y a travaillé des années pour les rendre possibles.\n\n' +
      'Ce qui m’inquiète davantage, je le vois le samedi matin. Mes jeunes joueurs imitent les professionnels qu’ils regardent à la télévision : ils contestent les décisions de l’arbitre, réclament des fautes qu’ils n’ont pas vues, célèbrent leurs points en provoquant l’adversaire. Ils n’ont pas appris cela de moi, mais des écrans. Le sport professionnel n’est pas seulement un spectacle : c’est un modèle, qu’on le veuille ou non.\n\n' +
      'Au club, nous avons deux règles. La première : on serre la main de l’arbitre, quelle que soit sa décision. La seconde : chaque enfant joue, quel que soit le score. Les parents protestent parfois, ils voudraient qu’on gagne. Je leur explique que le résultat compte, bien sûr, mais qu’il ne doit pas compter plus que le jeu. Au fond, c’est peut-être cela, la différence entre un sport et un spectacle : dans un sport, ceux qui jouent passent avant ceux qui regardent.\n\n' +
      'Yannick Sauvaget, ancien joueur professionnel, chronique parue dans Le Petit Journal des Vallons',
  },
];

export const PO1_EXPOSE: ExamTask = {
  ...base,
  id: taskId('po_monologue', '001'),
  taskType: 'po_monologue',
  skill: 'PO',
  label: 'Production orale · Sujet 1 · Exposé',
  prompt: exposePrompt(1, 'Le sport professionnel est-il encore du sport ?'),
  prepS: 3600,
  timingS: 600,
  responseSpec: { kind: 'audio', minDurationS: 480, maxDurationS: 600 },
  parts: PO1_DOSSIER,
  rubric: exposeRubric('Le sport professionnel est-il encore du sport ?'),
  examinerNotes: notesExpose([
    'Points d’appui du dossier : sur le terrain, mêmes règles et même incertitude du résultat ; autour, un spectacle devenu industrie, financé surtout par les droits de diffusion ; horaires fixés pour les écrans, calendrier surchargé et blessures ; joueurs salariés et images de marque ; des émotions collectives réelles ; l’écart avec le sport amateur, réservoir des champions ; la proposition de reverser une part des droits et de protéger le calendrier (doc. 1). Le sport de haut niveau comme métier, avec ses risques ; jouer blessé pour un contrat ; les insultes en ligne ; des moments de jeu pur au plus haut niveau ; le modèle imité par les enfants ; les règles du club ; ceux qui jouent avant ceux qui regardent (doc. 2).',
    'Croisement attendu au niveau C1 : le « réservoir » des clubs amateurs (doc. 1) est le club où l’ancien joueur entraîne aujourd’hui (doc. 2) ; l’épaule abîmée (doc. 2) incarne le calendrier qui use les corps (doc. 1).',
  ]),
  modelAnswer:
    'Quand on regarde un grand match à la télévision, puis qu’on passe devant le terrain d’un petit club un samedi matin, on a parfois l’impression d’assister à deux activités différentes qui portent le même nom. C’est précisément ce que la question nous invite à examiner : le sport professionnel est-il encore du sport ? Le dossier propose deux regards. Dans un entretien, la sociologue Odile Brassac analyse la transformation du sport de haut niveau en spectacle et en industrie. Dans une chronique, Yannick Sauvaget, ancien volleyeur professionnel devenu entraîneur d’enfants, raconte ce qu’il a vécu de l’intérieur. Je voudrais montrer que le sport professionnel reste du sport par son cœur, le jeu et l’incertitude, mais qu’il est aussi devenu un métier et un spectacle, et que le vrai danger tient moins à ce qu’il est qu’à ce qu’il fait au reste du sport.\n\n' +
    'Je procéderai en trois temps. Je montrerai d’abord ce qui, dans le sport professionnel, s’éloigne de l’idée que l’on se fait du sport. J’expliquerai ensuite pourquoi, malgré tout, l’essentiel y demeure. Enfin, je m’arrêterai sur ce qui me paraît le vrai problème : l’influence du sport professionnel sur le sport amateur et sur les enfants.\n\n' +
    'Premièrement, il faut reconnaître que, autour du terrain, beaucoup de choses ont changé. La sociologue le résume en une formule : le sport de haut niveau est devenu un spectacle, et ce spectacle est devenu une industrie. Elle en donne une preuve frappante : selon son étude, plus de la moitié des recettes des clubs de première division vient des droits de diffusion, bien plus que de la billetterie. Et comme elle le dit, celui qui paie décide. Les horaires sont fixés pour les écrans, parfois tard un dimanche soir, au détriment des familles et des supporters qui viennent de loin. Le calendrier se remplit de compétitions, parce que chaque match supplémentaire se vend. Le témoignage de l’ancien joueur montre ce que cela signifie concrètement pour un corps : il a joué deux saisons avec une épaule abîmée, à coups d’infiltrations, parce que son contrat devait être renouvelé et qu’un joueur blessé ne se vend pas. Aujourd’hui, il ne peut plus lever le bras sans douleur. Ce qui me frappe dans son récit, c’est qu’il précise que personne ne l’y a forcé : tout le monde autour de lui trouvait cela normal. La pression ne prend pas la forme d’un ordre, mais d’une évidence partagée. On voit bien ici que le joueur n’est plus seulement un sportif : c’est, pour reprendre ses mots, quelqu’un qui exerce un métier, avec des horaires, des patrons et des risques. À cela s’ajoutent les insultes reçues en ligne après les défaites, qui montrent que le public ne voit plus toujours en lui une personne, mais une marchandise qui doit rapporter des victoires.\n\n' +
    'Deuxièmement, faut-il en conclure que ce n’est plus du sport ? Je ne le crois pas, et les deux documents me semblent s’accorder sur ce point. La sociologue rappelle que, sur le terrain, les règles sont les mêmes que dans un club de village et que le résultat reste incertain. Elle ajoute un argument que je trouve très fort : un match dont on connaîtrait l’issue à l’avance ne vaudrait plus rien, même pour une chaîne de télévision. Autrement dit, l’industrie elle-même a besoin que le sport reste du sport. Sans incertitude, il n’y aurait plus de spectacle à vendre. L’ancien joueur, de son côté, raconte un match de coupe d’Europe, un cinquième set qu’il n’aurait jamais dû gagner, pendant lequel il n’y avait plus ni contrat, ni sponsor, ni classement, mais seulement le jeu. Il ajoute que ces moments existent peut-être surtout au plus haut niveau, parce que chacun y a travaillé des années pour les rendre possibles. Je trouve cette remarque importante, parce qu’elle renverse une idée reçue : on croit souvent que l’argent tue le jeu, alors que l’entraînement et l’exigence du haut niveau peuvent aussi produire les plus beaux moments de jeu. J’en ai fait l’expérience, à une échelle bien plus modeste, en jouant dans une équipe de quartier : c’est quand nous nous entraînions le plus sérieusement que nous prenions le plus de plaisir. La sociologue reconnaît aussi que le spectacle sportif crée des émotions collectives rares, comme ces inconnus qui s’embrassent dans un stade. Ce n’est pas rien, dit-elle, et je suis d’accord.\n\n' +
    'Troisièmement, si le sport professionnel reste du sport, il pose un problème qui dépasse le terrain : celui de son influence sur le reste du sport. La sociologue s’inquiète de l’écart qui se creuse avec le sport amateur. L’argent se concentre au sommet, tandis que les petits clubs manquent de bénévoles, d’éducateurs et de créneaux sur les terrains. Or, rappelle-t-elle, la plupart des champions ont commencé dans un club de quartier. Un sport professionnel qui assèche sa base scie la branche sur laquelle il est assis. Le témoignage de l’ancien joueur illustre parfaitement ce lien, puisqu’il entraîne aujourd’hui les enfants du club où il a commencé. Mais il ajoute une inquiétude d’un autre ordre : ses jeunes joueurs imitent les professionnels qu’ils voient à la télévision. Ils contestent l’arbitre, réclament des fautes qu’ils n’ont pas vues, provoquent l’adversaire. Le sport professionnel, conclut-il, n’est pas seulement un spectacle : c’est un modèle, qu’on le veuille ou non. Cette idée me paraît essentielle, parce qu’elle montre que la question ne concerne pas seulement les professionnels eux-mêmes, mais tous ceux qui les regardent, et d’abord les enfants.\n\n' +
    'Que faire, alors ? Le dossier propose plusieurs pistes. La sociologue suggère de reverser obligatoirement une petite part des droits de diffusion au sport amateur, pour financer des éducateurs et des équipements, et de protéger un calendrier compatible avec la santé des joueurs. Cette proposition me semble juste, car elle reconnaît la dette du sport professionnel envers sa base. On pourrait objecter que cinq pour cent, c’est peu. Mais l’enjeu me paraît moins la somme que le principe : rappeler que le sommet doit quelque chose à ceux qui l’ont formé. L’ancien joueur, lui, propose des règles simples dans son club : serrer la main de l’arbitre, faire jouer chaque enfant quel que soit le score. Ces règles me semblent montrer que la frontière entre sport et spectacle ne passe pas entre amateurs et professionnels, mais à l’intérieur de chaque pratique. Les parents qui veulent à tout prix que leur enfant gagne transforment eux aussi un match de jeunes en spectacle.\n\n' +
    'Pour conclure, je répondrai que oui, le sport professionnel est encore du sport, parce que son cœur, le jeu, les règles et l’incertitude du résultat, demeure intact, et que l’industrie elle-même en a besoin. Mais il est aussi devenu un métier, qui use parfois les corps, et un spectacle, qui sert de modèle. La question n’est donc pas de savoir s’il mérite encore le nom de sport, mais s’il accepte les responsabilités qui vont avec son influence. Je reprendrai pour finir la phrase de l’ancien joueur, qui me paraît résumer le débat : dans un sport, ceux qui jouent passent avant ceux qui regardent. Le sport professionnel reste du sport aussi longtemps qu’il respecte cette règle.',
};

const PO1_DEBATE: ExamDebate = {
  question: 'Le sport professionnel est-il encore du sport ?',
  opening: {
    id: 'open',
    text: 'Merci pour cet exposé. Je vais maintenant discuter certains de vos arguments, et vous me répondrez.',
    cues: [],
    covers: 'ouverture de l’entretien',
  },
  clarify: {
    id: 'clarify',
    text:
      'Avant d’aller plus loin, je voudrais être sûr de bien vous suivre. Selon vous, le sport professionnel est-il encore du sport, ou est-il devenu autre chose ?',
    cues: [],
    covers: 'lever l’ambiguïté sur la thèse défendue',
  },
  sideCues: {
    // "pour" = c'est encore du sport.
    pour: [
      'c est encore du sport', 'ca reste du sport', 'il reste du sport', 'c est toujours du sport',
      'le jeu reste le meme', 'les regles sont les memes',
    ],
    // "contre" = ce n'est plus du sport.
    contre: [
      'ce n est plus du sport', 'c est devenu un spectacle', 'c est une industrie',
      'c est un business', 'l argent a tout change', 'ce n est plus que du spectacle',
    ],
  },
  axes: [
    /* ── against POUR: the candidate says it is still sport ────────────── */
    {
      id: 'argent',
      against: 'pour',
      about: 'l’argent qui décide de tout',
      moves: [
        M('ag1', 'counter', 1,
          'Vous dites que c’est encore du sport. Mais quand plus de la moitié des recettes d’un club vient de la télévision, et que celui qui paie décide, qui commande vraiment : les joueurs ou les diffuseurs ?',
          'l’argent des droits de diffusion commande'),
        M('ag2', 'counter-example', 2,
          'Pensez à un supporter qui ne peut plus aller au stade parce que le match a lieu à vingt et une heures un dimanche, à deux cents kilomètres de chez lui. Pour lui, ce match est-il encore une fête sportive ou un programme de télévision ?',
          'le contre-exemple du supporter évincé par les horaires'),
        M('ag3', 'concession', 3,
          'Vous admettez que les horaires et le calendrier sont dictés par les écrans. Mais si tout ce qui entoure le jeu obéit à l’argent, ne réduisez-vous pas le sport à quelques minutes sur un terrain ?',
          'la concession sur l’argent retournée contre la thèse'),
        M('ag-r', 'retreat', 1,
          'Il me semble que vous dites maintenant le contraire de ce que vous souteniez dans votre exposé. Qu’est-ce qui vous a fait changer d’avis, précisément ?',
          'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'corps',
      against: 'pour',
      about: 'les corps usés par le métier',
      moves: [
        M('cp1', 'counter', 1,
          'L’ancien joueur a joué deux saisons blessé pour garder son contrat. Un sport qui pousse à s’abîmer pour rester employable, est-ce encore un sport, ou un travail dangereux ?',
          'jouer blessé pour un contrat'),
        M('cp2', 'probe', 2,
          'Vous parlez de passion. Mais à partir de quand un athlète joue-t-il par passion, et à partir de quand parce qu’il n’a pas le choix ? Où placez-vous la frontière ?',
          'la frontière entre passion et contrainte'),
        M('cp3', 'concession', 3,
          'Vous reconnaissez que la santé des joueurs passe parfois après les intérêts du club. Or le sport est censé faire du bien au corps. Ce renversement ne suffit-il pas à dire que ce n’est plus du sport ?',
          'la concession sur la santé retournée contre la thèse'),
      ],
    },
    {
      id: 'modele',
      against: 'pour',
      about: 'le mauvais exemple donné aux enfants',
      moves: [
        M('md1', 'counter', 1,
          'Les enfants imitent les professionnels : ils contestent l’arbitre, réclament des fautes qu’ils n’ont pas vues. Si le sport professionnel enseigne cela, enseigne-t-il encore les valeurs du sport ?',
          'le modèle transmis contredit les valeurs du sport'),
        M('md2', 'consequence', 2,
          'Si les professionnels servent de modèle, chaque provocation vue à la télévision se retrouve le samedi matin sur un terrain de jeunes. Qui en porte la responsabilité, selon vous ?',
          'la conséquence sur le sport des enfants'),
        M('md3', 'concession', 3,
          'Vous admettez que ce modèle pose problème. Mais un sport dont l’exemple doit être corrigé par les éducateurs amateurs, est-ce encore le même sport que celui qu’ils enseignent ?',
          'la concession sur l’exemple retournée contre la thèse'),
      ],
    },
    {
      id: 'marque',
      against: 'pour',
      about: 'le sportif devenu produit',
      moves: [
        M('mq1', 'counter', 1,
          'La sociologue dit que les joueurs sont aussi des images de marque qui vendent des chaussures ou des boissons. Quand on regarde un champion, regarde-t-on un sportif ou une publicité ?',
          'le sportif comme support publicitaire'),
        M('mq2', 'counter-example', 2,
          'Prenez un joueur insulté en ligne après chaque défaite par des gens qui ne l’ont vu que sur un écran. N’est-ce pas le signe que le public ne voit plus en lui un sportif, mais un produit qui doit rapporter ?',
          'le contre-exemple des insultes en ligne'),
        M('mq3', 'concession', 3,
          'Vous accordez que le joueur est aussi un salarié et une marque. Dans ce cas, n’est-il pas plus exact de parler d’un métier du spectacle que d’un sport ?',
          'la concession sur le statut retournée en requalification'),
      ],
    },

    /* ── against CONTRE: the candidate says it is no longer sport ──────── */
    {
      id: 'incertitude',
      against: 'contre',
      about: 'l’incertitude du résultat, qui demeure',
      moves: [
        M('in1', 'counter', 1,
          'Sur le terrain, les règles sont les mêmes que dans un club de village et le résultat reste incertain. Qu’est-ce qui manque, alors, pour que ce soit du sport ?',
          'les règles et l’incertitude sont intactes'),
        M('in2', 'counter-example', 2,
          'L’ancien joueur raconte un cinquième set qu’il n’aurait jamais dû gagner, où il n’y avait plus ni contrat ni sponsor. Ce moment-là, ce n’était pas du sport ?',
          'le contre-exemple du match de coupe d’Europe'),
        M('in3', 'concession', 3,
          'Vous admettez que l’issue d’un match reste imprévisible, et que la télévision elle-même en a besoin. Mais alors, l’argent dépend du sport plus que l’inverse. Votre thèse ne s’effondre-t-elle pas ?',
          'la concession sur l’incertitude retournée contre la thèse'),
        M('in-r', 'retreat', 1,
          'Vous défendiez tout à l’heure que ce n’était plus du sport, et vous semblez maintenant dire l’inverse. Qu’est-ce qui a changé dans votre raisonnement ?',
          'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'excellence',
      against: 'contre',
      about: 'l’exigence du haut niveau',
      moves: [
        M('ex1', 'counter', 1,
          'Des années d’entraînement, de discipline, de sacrifices : n’est-ce pas cela, le sport, poussé à son plus haut degré ? Pourquoi le salaire annulerait-il l’effort ?',
          'l’effort et la discipline définissent le sport'),
        M('ex2', 'probe', 2,
          'Selon vous, à partir de quel montant de salaire un athlète cesse-t-il de faire du sport ? Donnez-moi un critère précis.',
          'exiger un critère de basculement'),
        M('ex3', 'concession', 3,
          'Vous reconnaissez que l’argent permet aussi de s’entraîner davantage et de rendre possibles de très beaux moments de jeu. Dans ce cas, n’est-il pas parfois au service du sport ?',
          'la concession sur l’entraînement retournée en défense de l’argent'),
      ],
    },
    {
      id: 'base',
      against: 'contre',
      about: 'ce que le sport professionnel apporte au sport amateur',
      moves: [
        M('ba1', 'counter', 1,
          'Beaucoup d’enfants s’inscrivent dans un club parce qu’ils ont vu un grand match. Si le sport professionnel n’était plus du sport, comment donnerait-il envie d’en faire ?',
          'le sport professionnel inspire la pratique'),
        M('ba2', 'counter-example', 2,
          'L’ancien joueur entraîne aujourd’hui les enfants de son village, avec ce qu’il a appris au plus haut niveau. Son parcours ne relie-t-il pas les deux mondes plutôt que de les opposer ?',
          'le contre-exemple de l’ancien professionnel devenu éducateur'),
        M('ba3', 'concession', 3,
          'Vous accordez que la sociologue propose de reverser une part des droits au sport amateur. Si le sommet peut financer la base, n’est-ce pas la preuve qu’ils appartiennent au même ensemble ?',
          'la concession sur la redistribution retournée contre la séparation'),
      ],
    },
    {
      id: 'nostalgie',
      against: 'contre',
      about: 'le risque d’idéaliser un sport pur',
      moves: [
        M('ns1', 'counter', 1,
          'Vous opposez le sport professionnel à un sport désintéressé. Mais ce sport pur a-t-il jamais existé ? N’idéalisez-vous pas un passé que vous n’avez pas connu ?',
          'l’idéal du sport pur est peut-être un mythe'),
        M('ns2', 'counter-example', 2,
          'L’ancien joueur dit que des parents, dans son club de village, veulent à tout prix que leurs enfants gagnent. Le culte du résultat n’existe-t-il pas aussi chez les amateurs ?',
          'le contre-exemple des parents du club amateur'),
        M('ns3', 'concession', 3,
          'Vous admettez que la pression du résultat traverse tous les niveaux. Alors la frontière entre sport et spectacle ne passe pas entre amateurs et professionnels. Que reste-t-il de votre distinction ?',
          'la concession sur le résultat retournée contre la distinction'),
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
  prompt: ENTRETIEN_PROMPT,
  timingS: 1200,
  responseSpec: { kind: 'audio', minDurationS: 900, maxDurationS: 1200 },
  parts: PO1_DOSSIER,
  debate: PO1_DEBATE,
  rubric: entretienRubric,
  examinerNotes: NOTES_ENTRETIEN,
  modelAnswer:
    'Vous avez raison de rappeler que plus de la moitié des recettes vient des droits de diffusion, et je ne nie pas que celui qui paie fixe les horaires et remplit le calendrier. Mais je maintiens ma distinction : l’argent commande ce qui se passe autour du terrain, pas ce qui se passe dessus. Pendant le match, les diffuseurs ne choisissent pas le vainqueur. Et c’est justement ce qui leur donne quelque chose à vendre.\n\n' +
    'Sur la santé des joueurs, en revanche, je vous accorde beaucoup. L’ancien joueur a joué deux saisons avec une épaule abîmée, et personne ne l’y a forcé, ce qui est peut-être encore plus inquiétant. Je ne dirais pas pour autant que ce n’est plus du sport. Je dirais que c’est un sport pratiqué comme un métier, dans des conditions qui ne protègent pas assez ceux qui l’exercent. C’est pourquoi la proposition de la sociologue, protéger un calendrier compatible avec la santé, me paraît indispensable : le problème se règle par des règles, pas par un changement de nom.\n\n' +
    'Vous me demandez qui est responsable du mauvais exemple donné aux enfants. Je pense que les professionnels en portent une part, mais pas toute. Les parents qui veulent à tout prix la victoire, dans un club de village, transforment eux aussi un match de jeunes en spectacle. Cela me conduit d’ailleurs à préciser ma position : la frontière entre sport et spectacle ne sépare pas les amateurs des professionnels, elle traverse chaque pratique. L’ancien joueur le montre bien avec ses deux règles : serrer la main de l’arbitre, faire jouer tout le monde. Ce sont des règles de sport, et elles pourraient s’appliquer aussi au plus haut niveau.\n\n' +
    'Enfin, vous m’objectez que le joueur est devenu une marque. C’est vrai, et les insultes qu’il reçoit en ligne montrent qu’une partie du public le traite comme un produit. Mais ce comportement est celui des spectateurs, pas du jeu. Si l’on me montrait que l’argent fausse réellement les résultats sur le terrain, je réviserais mon jugement. Tant que l’issue d’un match reste incertaine et que les règles sont les mêmes pour tous, je continuerai de penser que c’est du sport, un sport qui a des devoirs envers ceux qui le regardent et envers ceux qui le pratiquent.',
};

/* ═══ PO · subject 2 (DALF-56) · Une tradition doit-elle changer pour survivre ? ═══ */
//
// Two documents of different kinds: a local press report on a procession that
// voted three changes (women carriers, a Saturday date, electric lights), with
// the elders' objection and a curator's correction; and a craftswoman's
// testimony on what she changed (a harmful dye, online sales, new patterns)
// and what she refuses to change (the hand). The cross a C1 candidate should
// find: the curator's « subis / choisis » (doc 1) and the printer's « le cœur
// et l’habit » (doc 2) are two criteria for telling a change that keeps a
// tradition alive from one that empties it; the elder's « il ne reste qu’un
// spectacle » (doc 1) is the neighbouring workshop doing demonstrations (doc 2).

const PO2_DOSSIER: ExamPart[] = [
  {
    label: 'Document 1 · La Grande Lanterne change ses règles',
    items: [],
    text:
      'Depuis 1680, chaque nuit du 14 août, vingt-quatre porteurs de la confrérie des bateliers de Vérignac portent à travers la vieille ville la Grande Lanterne, une structure de bois de six cents kilos éclairée de torches, jusqu’aux quais de la rivière. Cette année, la fête ne ressemblera pas tout à fait aux précédentes. Au printemps, la confrérie a adopté, par trente et une voix contre dix-neuf, trois changements qui divisent la ville.\n\n' +
      'Le premier ouvre le portage aux femmes, qui en étaient exclues depuis l’origine. La raison est d’abord pratique : l’an dernier, la confrérie n’a trouvé que quatorze candidats pour vingt-quatre places, et la lanterne a dû être posée sur un chariot pendant une partie du trajet. Le deuxième déplace la fête au samedi le plus proche du 14 août, pour permettre aux familles qui travaillent en semaine d’y assister. Le troisième remplace les torches par des lumières électriques, à la demande de l’assureur de la commune, après un début d’incendie en 2023.\n\n' +
      'Pour une partie des anciens, c’en est trop. Six porteurs ont quitté la confrérie. « Ce n’est plus notre fête, regrette l’un d’eux, qui a porté la lanterne pendant quarante ans. Une tradition, c’est justement ce qu’on ne choisit pas. Si on la modifie chaque fois qu’elle dérange, il ne reste qu’un spectacle. » La mairie, elle, se félicite : l’an dernier, trois mille spectateurs avaient assisté au défilé ; la confrérie en attend plus du double cette année, et les cafés du centre ont déjà augmenté leurs commandes. Le comité des fêtes envisage même d’installer un écran géant sur la place du Marché, pour ceux qui ne trouveront pas de place le long du parcours.\n\n' +
      'Conservatrice du musée municipal, Lucie Arnaudin invite à relativiser. « La fête que défendent les anciens n’est pas celle de 1680, rappelle-t-elle. Le parcours a changé en 1890, quand le vieux pont s’est effondré. La lanterne actuelle a été reconstruite en 1951 après un incendie, et sa forme n’a plus grand-chose à voir avec l’ancienne. Quant aux costumes, ils datent des années 1930. La tradition que l’on défend est souvent celle de son enfance. » Elle reconnaît cependant que ces changements passés avaient été subis, alors que ceux de cette année ont été choisis, « ce qui n’est pas du tout la même chose pour ceux qui les vivent ».\n\n' +
      'Parmi les nouvelles porteuses, Solène, dix-neuf ans, attend le mois d’août avec impatience. « Mon grand-père a porté la lanterne toute sa vie. J’ai grandi en le regardant. Aujourd’hui, je ne la porte pas contre lui : je la porte à sa place. »\n\n' +
      'D’après L’Écho de Vérignac',
  },
  {
    label: 'Document 2 · Le cœur et l’habit',
    items: [],
    text:
      'Mon arrière-grand-père a ouvert notre atelier d’impression sur étoffes en 1847. Depuis, on y imprime les tissus à la main, avec des planches de bois gravées que l’on encre puis que l’on frappe sur la toile, motif après motif. Un mètre de tissu demande parfois une demi-journée. Je dirige l’atelier depuis quinze ans, et j’y ai changé beaucoup de choses. Certains clients me le reprochent.\n\n' +
      'Une cliente fidèle m’a écrit l’an dernier qu’elle ne reconnaissait plus « son » atelier depuis que de nouveaux motifs étaient apparus dans la vitrine. Je lui ai répondu que mon arrière-grand-père, lui aussi, dessinait des motifs que ses propres clients trouvaient trop modernes, et que les modèles qu’elle aime aujourd’hui ont été des nouveautés. Elle n’a pas été convaincue, et je le comprends : on s’attache à ce qu’on a connu, pas à ce qui a existé avant soi.\n\n' +
      'J’ai d’abord abandonné une teinture utilisée depuis l’origine, parce qu’elle rendait malades ceux qui la manipulaient. Mon père toussait tous les hivers, et nous savons aujourd’hui pourquoi. Aucune fidélité au passé ne vaut la santé de ceux qui travaillent. J’ai ensuite ouvert une boutique en ligne : nos clients d’autrefois habitaient la région, ceux d’aujourd’hui vivent parfois à l’autre bout du monde. Enfin, je travaille avec de jeunes dessinateurs qui gravent de nouveaux motifs. Les anciens restent au catalogue, mais un atelier qui ne produirait que des copies de 1850 deviendrait un musée.\n\n' +
      'Il y a pourtant une chose que je refuse de changer : la main. On m’a proposé plusieurs fois de faire imprimer certains modèles en usine, par un sous-traitant, pour répondre aux grosses commandes. Ce serait plus rentable, et personne ne verrait la différence au premier coup d’œil. Mais ce qui fait notre tradition, ce n’est pas le motif, c’est le geste : la planche qu’on pose, le coup qu’on frappe, la petite irrégularité qui prouve qu’une personne était là. Si je cède sur ce point, je pourrai garder le nom de l’atelier sur les étiquettes ; il ne restera rien de ce qu’il désigne.\n\n' +
      'J’ai vu ce que devient une tradition qui ne vit plus que pour être regardée. Dans un bourg voisin, un ancien atelier de tissage fait aujourd’hui des démonstrations deux fois par jour devant des visiteurs, et vend dans sa boutique des étoffes fabriquées en usine, loin d’ici. Tout y est en place, les métiers, les costumes, les explications. Il ne manque que l’essentiel : le travail.\n\n' +
      'Alors, une tradition doit-elle changer pour survivre ? Je crois qu’une tradition qui ne change rien meurt, et qu’une tradition qui change tout meurt aussi, simplement elle garde son nom. Tout le travail consiste à savoir ce qui est le cœur et ce qui est l’habit.\n\n' +
      'Bérénice Lalande, imprimeuse sur étoffes, témoignage recueilli par la revue Ouvrages de main',
  },
];

export const PO2_EXPOSE: ExamTask = {
  ...base,
  id: taskId('po_monologue', '002'),
  taskType: 'po_monologue',
  skill: 'PO',
  label: 'Production orale · Sujet 2 · Exposé',
  prompt: exposePrompt(2, 'Une tradition doit-elle changer pour survivre ?'),
  prepS: 3600,
  timingS: 600,
  responseSpec: { kind: 'audio', minDurationS: 480, maxDurationS: 600 },
  parts: PO2_DOSSIER,
  rubric: exposeRubric('Une tradition doit-elle changer pour survivre ?'),
  examinerNotes: notesExpose([
    'Points d’appui du dossier : trois changements votés (portage ouvert aux femmes faute de candidats, fête déplacée au samedi, torches remplacées pour la sécurité) ; l’objection des anciens (une tradition ne se choisit pas, sinon il ne reste qu’un spectacle) ; l’affluence attendue ; la tradition a déjà changé (parcours, lanterne reconstruite, costumes récents), mais ces changements avaient été subis et non choisis ; la jeune porteuse qui prend la place de son grand-père (doc. 1). Les changements faits par l’imprimeuse (teinture nocive abandonnée, vente en ligne, nouveaux motifs) ; le refus de faire imprimer en usine, car la tradition est dans le geste ; l’atelier voisin devenu démonstration ; « le cœur et l’habit » (doc. 2).',
    'Croisement attendu au niveau C1 : la distinction entre changements subis et choisis (doc. 1) et celle entre le cœur et l’habit (doc. 2) sont deux critères complémentaires ; le « spectacle » redouté par l’ancien porteur (doc. 1) correspond à l’atelier de démonstration (doc. 2) ; la santé justifie un changement dans les deux documents (incendie, teinture).',
  ]),
  modelAnswer:
    'On associe volontiers la tradition à ce qui ne bouge pas : ce qu’on a toujours fait, et qu’on continue de faire parce qu’on l’a toujours fait. Pourtant, beaucoup de traditions ne survivent qu’en se transformant, et c’est ce paradoxe que soulève la question : une tradition doit-elle changer pour survivre ? Le dossier en propose deux illustrations. Le premier document, un article de presse locale, raconte comment une confrérie a modifié les règles d’une fête de plus de trois siècles, la procession de la Grande Lanterne, et les réactions que cela a suscitées. Le second est le témoignage de Bérénice Lalande, qui dirige un atelier familial d’impression sur étoffes et explique ce qu’elle a changé et ce qu’elle refuse de changer. Je voudrais montrer qu’une tradition doit changer pour survivre, mais pas n’importe comment : tout dépend de ce que l’on change, et de qui le décide.\n\n' +
    'Mon exposé suivra trois étapes. Je montrerai d’abord que les traditions ont toujours changé, souvent plus qu’on ne le croit. J’examinerai ensuite le risque inverse : celui d’un changement qui garde le nom de la tradition mais en perd le sens. Enfin, je proposerai deux critères pour distinguer un changement qui fait vivre une tradition d’un changement qui la vide.\n\n' +
    'Premièrement, l’idée d’une tradition immobile ne résiste pas à l’examen. La conservatrice du musée, dans le premier document, le rappelle avec précision : le parcours de la procession a changé à la fin du dix-neuvième siècle, quand un pont s’est effondré ; la lanterne a été reconstruite au milieu du vingtième siècle, dans une forme très différente ; et les costumes ne datent que des années 1930. Elle en tire une formule que je trouve très juste : la tradition que l’on défend est souvent celle de son enfance. Autrement dit, ce que les anciens présentent comme immuable est déjà le résultat de transformations successives. Le changement est parfois même une condition de survie au sens le plus concret. L’an dernier, la confrérie n’a trouvé que quatorze candidats pour vingt-quatre places, et la lanterne a dû être posée sur un chariot. Sans l’ouverture aux femmes, la fête risquait tout simplement de disparaître faute de porteurs. Le témoignage de l’imprimeuse va dans le même sens : elle a ouvert une boutique en ligne parce que ses clients ne sont plus seulement ceux de la région, et elle fait graver de nouveaux motifs, car, dit-elle, un atelier qui ne produirait que des copies du passé deviendrait un musée. Il faut ajouter que certains changements ne relèvent pas seulement de la survie, mais de la justice ou de la santé. L’imprimeuse a abandonné une teinture qui rendait malades ceux qui la manipulaient, et elle affirme qu’aucune fidélité au passé ne vaut la santé de ceux qui travaillent. De même, les torches de la procession ont été remplacées après un début d’incendie. Dans ces cas, refuser de changer reviendrait à préférer la forme aux personnes.\n\n' +
    'Deuxièmement, il faut pourtant prendre au sérieux l’objection des anciens. L’un d’eux, qui a porté la lanterne pendant quarante ans, affirme qu’une tradition, c’est justement ce qu’on ne choisit pas, et que si on la modifie chaque fois qu’elle dérange, il ne reste qu’un spectacle. Cette crainte n’est pas absurde. Le second document en donne d’ailleurs une illustration frappante : dans un bourg voisin, un ancien atelier de tissage fait des démonstrations deux fois par jour devant des visiteurs, mais vend des étoffes fabriquées en usine. Tout est en place, les métiers, les costumes, les explications ; il ne manque que l’essentiel, le travail. Voilà exactement ce que redoute l’ancien porteur : une tradition qui ne vit plus que pour être regardée. Et l’on remarque que, dans le premier document, la mairie se félicite surtout de l’affluence attendue et des commandes des cafés. Je comprends cette satisfaction, mais elle montre qu’un changement peut aussi être motivé par des raisons économiques, et c’est là que le risque de transformer une fête en spectacle devient réel. Il me semble d’ailleurs que l’on retrouve ce phénomène dans beaucoup de fêtes locales : quand on organise une fête d’abord pour attirer du monde, on finit par se demander pour qui on la fait.\n\n' +
    'Troisièmement, comment distinguer alors un bon changement d’un mauvais ? Le dossier me semble offrir deux critères complémentaires. Le premier concerne la nature de ce que l’on change. L’imprimeuse le formule très bien : il faut savoir ce qui est le cœur et ce qui est l’habit. Pour elle, le motif peut évoluer, mais pas le geste. Si elle faisait imprimer ses tissus en usine, elle pourrait garder le nom de l’atelier sur les étiquettes, mais il ne resterait rien de ce qu’il désigne. Appliqué à la procession, ce critère invite à se demander ce qui fait le cœur de la fête : est-ce le sexe des porteurs, la date exacte, la flamme des torches ? Ou bien est-ce le fait de porter ensemble, à bras d’homme et de femme, une lanterne jusqu’à la rivière ? La réponse de la jeune porteuse, Solène, me paraît éclairante : elle ne porte pas la lanterne contre son grand-père, mais à sa place. Elle se situe dans une continuité, pas dans une rupture. Le second critère concerne la manière dont le changement est décidé. La conservatrice reconnaît que les changements passés avaient été subis, alors que ceux d’aujourd’hui ont été choisis, et que ce n’est pas la même chose pour ceux qui les vivent. Je pense qu’il faut prendre cette remarque au sérieux : un changement choisi peut être vécu comme une trahison par ceux qui n’en voulaient pas. C’est pourquoi la manière de décider compte autant que la décision. Ici, la confrérie a voté, mais une forte minorité s’est opposée, et six anciens sont partis. Une tradition qui change en perdant une partie de ceux qui la portaient a peut-être gagné des spectateurs, mais elle a aussi perdu des mémoires. Dans ma propre famille, j’ai vu une fête de village se maintenir pendant des années parce que les plus âgés avaient été associés à chaque décision, même quand ils n’étaient pas d’accord.\n\n' +
    'Pour conclure, je répondrai que oui, une tradition doit changer pour survivre, parce qu’elle a toujours changé et que l’immobilité la condamnerait, faute de participants ou au détriment de la santé de ceux qui la font vivre. Mais tous les changements ne se valent pas. Un changement qui touche l’habit, la date, l’éclairage, la composition du groupe, peut faire vivre une tradition ; un changement qui touche le cœur, ce qui lui donne son sens, la transforme en décor. Et pour que le changement ne soit pas vécu comme une dépossession, il doit être décidé avec ceux qui la portent. Comme le dit l’imprimeuse, une tradition qui ne change rien meurt, mais une tradition qui change tout meurt aussi, simplement elle garde son nom.',
};

const PO2_DEBATE: ExamDebate = {
  question: 'Une tradition doit-elle changer pour survivre ?',
  opening: {
    id: 'open',
    text: 'Merci pour cet exposé. Je vais maintenant discuter certains de vos arguments, et vous me répondrez.',
    cues: [],
    covers: 'ouverture de l’entretien',
  },
  clarify: {
    id: 'clarify',
    text:
      'Avant d’aller plus loin, je voudrais être sûr de bien vous suivre. Selon vous, une tradition doit-elle accepter de changer, ou doit-elle rester fidèle à ce qu’elle a toujours été ?',
    cues: [],
    covers: 'lever l’ambiguïté sur la thèse défendue',
  },
  sideCues: {
    // "pour" = une tradition doit changer.
    pour: [
      'elle doit changer', 'une tradition doit evoluer', 'il faut qu elle change',
      'les traditions ont toujours change', 'elle doit s adapter', 'sans changement elle meurt',
    ],
    // "contre" = elle doit rester fidèle.
    contre: [
      'elle ne doit pas changer', 'elle doit rester fidele', 'il faut la preserver telle quelle',
      'une tradition ne se change pas', 'changer c est la trahir', 'il faut la conserver intacte',
    ],
  },
  axes: [
    /* ── against POUR: the candidate says a tradition must change ──────── */
    {
      id: 'identite',
      against: 'pour',
      about: 'ce qui reste d’une tradition qu’on modifie',
      moves: [
        M('id1', 'counter', 1,
          'Vous dites qu’une tradition doit changer. Mais si l’on change les porteurs, la date et les torches, qu’est-ce qui reste de la fête de Vérignac, à part son nom ?',
          'une tradition modifiée perd son identité'),
        M('id2', 'probe', 2,
          'L’imprimeuse parle du cœur et de l’habit. Mais qui décide de ce qui est le cœur ? Pour l’ancien porteur, les torches en faisaient peut-être partie. Comment trancher ?',
          'qui définit le cœur d’une tradition'),
        M('id3', 'concession', 3,
          'Vous admettez qu’il existe un cœur qu’on ne doit pas toucher. Mais alors vous reconnaissez qu’une tradition doit, sur l’essentiel, ne pas changer. N’est-ce pas la thèse inverse de la vôtre ?',
          'la concession sur le cœur retournée contre la thèse'),
        M('id-r', 'retreat', 1,
          'Il me semble que vous dites maintenant le contraire de ce que vous souteniez dans votre exposé. Qu’est-ce qui vous a fait changer d’avis, précisément ?',
          'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'anciens',
      against: 'pour',
      about: 'la dépossession de ceux qui portaient la tradition',
      moves: [
        M('an1', 'counter', 1,
          'Six anciens porteurs ont quitté la confrérie. Une tradition qui survit en perdant ceux qui la portaient depuis quarante ans a-t-elle vraiment survécu ?',
          'le départ des anciens'),
        M('an2', 'counter-example', 2,
          'Imaginez quelqu’un qui a porté la lanterne toute sa vie et qui découvre qu’un vote l’a rendue méconnaissable. Que lui répondez-vous, concrètement ?',
          'le contre-exemple de l’ancien porteur dépossédé'),
        M('an3', 'concession', 3,
          'Vous reconnaissez que ce changement a été vécu comme une trahison par une partie des porteurs. Si la tradition appartient à ceux qui la font vivre, de quel droit une majorité la modifie-t-elle ?',
          'la concession sur la dépossession retournée en question de légitimité'),
      ],
    },
    {
      id: 'spectacle',
      against: 'pour',
      about: 'le changement au service du spectacle et du commerce',
      moves: [
        M('sp1', 'counter', 1,
          'La mairie se réjouit surtout du nombre de spectateurs et des commandes des cafés. Ne changez-vous pas les traditions pour plaire au public plutôt que pour les faire vivre ?',
          'changer pour attirer'),
        M('sp2', 'consequence', 2,
          'L’atelier voisin fait des démonstrations devant des visiteurs et vend des tissus d’usine. Si l’on accepte de changer pour attirer du monde, n’est-ce pas exactement là qu’on finit ?',
          'la conséquence : la tradition devenue décor'),
        M('sp3', 'concession', 3,
          'Vous accordez que certains changements sont motivés par l’argent. Comment, dans ces conditions, garantir qu’on ne glisse pas peu à peu du changement nécessaire au changement rentable ?',
          'la concession sur l’intérêt économique retournée en exigence de garantie'),
      ],
    },
    {
      id: 'pente',
      against: 'pour',
      about: 'l’absence de limite au changement',
      moves: [
        M('pe1', 'counter', 1,
          'Aujourd’hui on déplace la date et on change l’éclairage. Demain, faudra-t-il raccourcir le parcours, ou remplacer la lanterne par une copie plus légère ? Où vous arrêtez-vous ?',
          'la pente des changements successifs'),
        M('pe2', 'probe', 2,
          'Donnez-moi un exemple de changement que vous refuseriez, pour cette fête précisément. Et dites-moi pourquoi celui-là, et pas les autres.',
          'exiger une limite concrète'),
        M('pe3', 'concession', 3,
          'Vous admettez qu’il est difficile de fixer cette limite à l’avance. Mais une tradition qui peut tout changer, à condition qu’un vote le décide, est-elle encore une tradition, ou simplement une habitude révisable ?',
          'la concession sur la limite retournée contre la notion même de tradition'),
      ],
    },

    /* ── against CONTRE: the candidate says it must stay as it is ──────── */
    {
      id: 'histoire',
      against: 'contre',
      about: 'les changements que la tradition a déjà connus',
      moves: [
        M('hi1', 'counter', 1,
          'La conservatrice rappelle que le parcours, la lanterne et les costumes ont déjà changé. Quelle version de la fête voulez-vous préserver, exactement ?',
          'la tradition a déjà changé'),
        M('hi2', 'counter-example', 2,
          'Les costumes que défendent les anciens datent des années 1930. Si on les avait refusés à l’époque au nom de la tradition, les anciens d’aujourd’hui n’auraient pas la fête qu’ils aiment. Qu’en dites-vous ?',
          'le contre-exemple des costumes'),
        M('hi3', 'concession', 3,
          'Vous admettez que la tradition que l’on défend est souvent celle de son enfance. Alors ce que vous appelez fidélité, n’est-ce pas surtout de la nostalgie ?',
          'la concession sur l’histoire retournée en soupçon de nostalgie'),
        M('hi-r', 'retreat', 1,
          'Vous défendiez tout à l’heure qu’une tradition devait rester telle quelle, et vous semblez maintenant dire l’inverse. Qu’est-ce qui a changé dans votre raisonnement ?',
          'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'exclusion',
      against: 'contre',
      about: 'ceux que la tradition excluait',
      moves: [
        M('el1', 'counter', 1,
          'Pendant plus de trois siècles, les femmes n’ont pas eu le droit de porter la lanterne. Préserver la tradition telle quelle, est-ce préserver aussi cette exclusion ?',
          'la fidélité maintient une exclusion'),
        M('el2', 'counter-example', 2,
          'Solène, dix-neuf ans, dit qu’elle porte la lanterne à la place de son grand-père, pas contre lui. Que lui diriez-vous, à elle, si vous refusiez qu’elle la porte ?',
          'le contre-exemple de la nouvelle porteuse'),
        M('el3', 'concession', 3,
          'Vous accordez que cette exclusion n’était pas juste. Mais alors vous admettez qu’une tradition peut avoir tort, et qu’il faut parfois la corriger. Que reste-t-il de votre position ?',
          'la concession sur l’injustice retournée contre la fidélité'),
      ],
    },
    {
      id: 'sante',
      against: 'contre',
      about: 'la sécurité et la santé de ceux qui font vivre la tradition',
      moves: [
        M('sa1', 'counter', 1,
          'L’imprimeuse a abandonné une teinture qui rendait malades ceux qui la manipulaient. Aurait-elle dû la garder par fidélité au passé ?',
          'la santé justifie le changement'),
        M('sa2', 'consequence', 2,
          'Après un début d’incendie, l’assureur a exigé des lumières électriques. Si la confrérie avait refusé, la fête n’aurait peut-être plus été assurée du tout. Quelle tradition aurait-on sauvée ainsi ?',
          'la conséquence du refus de changer'),
        M('sa3', 'concession', 3,
          'Vous admettez que la sécurité peut justifier un changement. Mais une fois ce principe accepté, vous reconnaissez que la tradition n’est pas intouchable. Où passe alors la frontière ?',
          'la concession sur la sécurité retournée contre l’intangibilité'),
      ],
    },
    {
      id: 'survie',
      against: 'contre',
      about: 'la disparition faute de participants',
      moves: [
        M('su1', 'counter', 1,
          'L’an dernier, la confrérie n’a trouvé que quatorze candidats pour vingt-quatre places. Sans changement, qui portera la lanterne dans dix ans ?',
          'faute de porteurs, la fête disparaît'),
        M('su2', 'probe', 2,
          'Vous préférez une fête fidèle mais menacée à une fête modifiée mais vivante. Pouvez-vous m’expliquer ce que l’on gagne à préserver une tradition que plus personne ne peut pratiquer ?',
          'interroger la valeur d’une tradition sans pratiquants'),
        M('su3', 'concession', 3,
          'Vous reconnaissez que la tradition risque de disparaître si elle ne s’adapte pas. Alors, entre la changer et la perdre, que choisissez-vous vraiment ?',
          'la concession sur la survie retournée en choix forcé'),
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
  prompt: ENTRETIEN_PROMPT,
  timingS: 1200,
  responseSpec: { kind: 'audio', minDurationS: 900, maxDurationS: 1200 },
  parts: PO2_DOSSIER,
  debate: PO2_DEBATE,
  rubric: entretienRubric,
  examinerNotes: NOTES_ENTRETIEN,
  modelAnswer:
    'Vous me demandez ce qui reste de la fête si l’on change les porteurs, la date et les torches. Je dirais : l’essentiel. Des habitants portent ensemble une lanterne de six cents kilos à travers la vieille ville jusqu’à la rivière. C’est cela que les gens viennent voir, et c’est cela que Solène veut faire à la place de son grand-père. Le sexe des porteurs ou le jour de la semaine relèvent, pour reprendre l’image de l’imprimeuse, de l’habit, pas du cœur.\n\n' +
    'Vous objectez à juste titre que tout le monde ne place pas le cœur au même endroit, et que pour un ancien, les torches en faisaient peut-être partie. Je vous l’accorde : il n’existe pas de définition objective du cœur d’une tradition. C’est précisément pour cela que la manière de décider compte autant. La conservatrice le dit bien : un changement choisi n’est pas vécu comme un changement subi. Je regrette, pour ma part, que six anciens soient partis. Cela me fait préciser ma position : une tradition doit changer, mais en associant ceux qui la portent depuis longtemps, sans quoi elle gagne des spectateurs et perd des mémoires.\n\n' +
    'Sur le risque du spectacle, je partage votre inquiétude. L’atelier voisin décrit par l’imprimeuse montre très bien ce qu’on obtient quand on change pour plaire aux visiteurs : un décor sans travail. Mais je ne crois pas que ce soit le cas à Vérignac. Les trois changements ont des raisons précises : le manque de porteurs, la sécurité après un début d’incendie, la possibilité pour les familles de venir. Si l’on avait raccourci le parcours pour faire défiler plus de monde devant les cafés, je serais de votre côté.\n\n' +
    'Vous me demandez enfin où je m’arrête. Je refuserais, par exemple, de remplacer la lanterne par une copie légère montée sur roues : ce serait supprimer le portage lui-même, qui est le sens de la fête. Je reconnais qu’il est difficile de fixer cette limite une fois pour toutes. Mais une tradition n’a jamais été un texte de loi ; c’est une pratique que chaque génération reçoit et transmet. Si l’on me montrait que les changements de cette année ont fait fuir les habitants au profit des seuls touristes, je réviserais mon jugement. Pour l’instant, ce que je vois, c’est une fête qui risquait de disparaître et qui a trouvé de nouveaux porteurs.',
};
