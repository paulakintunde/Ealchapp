// DALF C1 blanc-05: Production écrite (25 points, 2 h 30) and Production orale
// (25 points, 1 h of preparation then about 30 min).
//
// ── PE: one dossier, two tasks ──────────────────────────────────────────────
//
// DALF-45 · waste in mass catering. The synthèse REPORTS the dossier in 200 to
// 240 words; the essai ARGUES a different question on the same theme, from a
// stated role to a stated addressee, in a real genre (a proposal from a
// student representative to a university catering service: a concrete plan
// and its trade-offs). Decision 36: the essai repeats the synthèse dossier in
// its own parts, same labels and texts, so the grader marking the essai sees
// the documents it draws on.
//
// The three documents cross rather than oppose: a news report (trays weighed
// at one university restaurant; what is left on the plate; a two-size trial),
// a sociologist's column (choice multiplies what is cooked and never served;
// pre-ordering and who it suits; waste made by the organisation more than by
// the eater), a chef's testimony (attendance that swings, the rules that stop
// a displayed dish being served again, an imposed tray, and what his kitchen
// changed). Each brings at least two ideas the others lack, and they share
// three ties a plan can use: the plate against the kitchen (1, 2 and 3), the
// portion that does not fit every appetite (1 and 3), forecasting how many
// will eat what (2 and 3). The information units are listed in the synthèse's
// examinerNotes, in the order the model answer uses them.
//
// ── PO: two subjects drawn, one chosen ──────────────────────────────────────
//
// DALF-58 « Peut-on confier des décisions à des machines ? » (ethique) and
// DALF-60 « La compétition a-t-elle sa place à l’école ? »
// (examens-et-diplomes). Each is an exposé (po_monologue, one hour of
// preparation, a two-document dossier of different kinds, 8 to 10 min) and an
// entretien (po_debate, 15 to 20 min). The débat banks attack both sides, four
// axes a side, twelve non-retreat moves a side, with a concession probe and a
// retreat move on each side.
//
// Rubrics: synthèse 13, essai 12, exposé 13, entretien 12, each criterion with
// three descriptors in the order « en dessous du niveau / C1 / C1+ »
// (STANDARD-dalf-c1 §7). Our own wording; the examinerNotes say so.
//
// The model synthèse and the model exposés say only what their dossier says;
// the exposés add the candidate's own examples, announced as such and without
// figures, which is what the task asks for.
//
// INVENTED, every proper noun and figure below; each is marked where it
// appears. No real person, outlet, institution, brand or town.
import type { ExamDebate, ExamPart, ExamTask, Rubric } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_OPEN, taskId } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  level: 'c1' as const,
};

/* ═══ PRODUCTION ÉCRITE · LE DOSSIER (DALF-45) ════════════════════════════ */

// INVENTED: the restaurant universitaire of the université de Sarnelle, « La
// Gazette de Sarnelle », the student association « Le Plateau propre », the
// two weeks of weighing, the 120 grams left per meal (about a quarter of what
// is served), the « petite faim / grande faim » trial and its month, the main
// dish leftovers down by a third, the student Maëva, the manager Julien Ferrat.
const DOC_1 =
  'AU RESTAURANT UNIVERSITAIRE, ON PÈSE LES PLATEAUX\n' +
  'La Gazette de Sarnelle, page campus\n\n' +
  'Pendant deux semaines, à la sortie du restaurant universitaire de Sarnelle, une balance attendait chaque plateau. ' +
  'Les bénévoles de l’association Le Plateau propre y ont versé les restes de près de dix mille repas, en séparant le pain, les entrées, le plat principal, les accompagnements et les desserts. ' +
  'Résultat : chaque étudiant laisse en moyenne cent vingt grammes de nourriture par repas, soit environ le quart de ce qui lui est servi.\n\n' +
  'Le pain arrive largement en tête, suivi des légumes servis en accompagnement et des desserts. ' +
  '« Le pain est gratuit et posé au début de la file, alors on en prend trois tranches sans y penser, et on en mange une », reconnaît Maëva, étudiante en deuxième année. ' +
  'Pour les desserts, l’explication tient à la formule elle-même : le plateau complet coûte le même prix avec ou sans dessert, et beaucoup le prennent « pour ne pas perdre » ce qu’ils ont payé.\n\n' +
  'Reste la question des portions. ' +
  'Servies à l’identique pour tout le monde, elles sont trop copieuses pour certains et insuffisantes pour d’autres. ' +
  'Le restaurant a donc tenté une expérience pendant un mois : au moment de servir le plat principal, l’agent demandait « petite faim ou grande faim ? », pour un prix inchangé. ' +
  'Les restes du plat principal ont diminué d’un tiers. ' +
  'L’expérience n’a pas convaincu tout le monde : à prix égal, une partie des étudiants choisissait systématiquement la grande portion, qu’ils aient faim ou non.\n\n' +
  'Le gérant du restaurant, Julien Ferrat, se réjouit de ces chiffres, mais invite à ne pas s’arrêter aux plateaux. ' +
  '« Ce que vous voyez sur la balance, c’est ce que les étudiants laissent. ' +
  'Vous ne voyez pas ce qui a été cuisiné et n’a jamais été servi. Et là, la responsabilité est d’abord la nôtre. »\n\n' +
  'L’association, de son côté, souhaite que la pesée devienne régulière et que ses résultats soient affichés à l’entrée du restaurant. ' +
  '« Quand on voit le chiffre, on change un peu son geste. Pas tout le monde, mais assez pour que ça compte », estime l’une de ses responsables.';

// INVENTED: the sociologist Yannick Ferrandou and the review « Tables
// communes ». No figure.
const DOC_2 =
  'LE GASPILLAGE COMMENCE AVANT L’ASSIETTE\n' +
  'Tribune de Yannick Ferrandou, sociologue de l’alimentation, revue Tables communes\n\n' +
  'Lorsqu’on parle de gaspillage dans les cantines, on montre presque toujours une assiette à moitié pleine. ' +
  'L’image est parlante, mais elle est trompeuse : elle fait du mangeur le principal responsable. ' +
  'Or une large part de ce qui est jeté en restauration collective n’a jamais atteint une assiette. ' +
  'Ce sont les plats préparés en trop, les bacs restés en cuisine, les portions cuisinées pour des convives qui ne sont pas venus.\n\n' +
  'Ce gaspillage-là a une cause bien identifiée : le choix. ' +
  'Proposer trois plats principaux plutôt qu’un, c’est devoir cuisiner chacun en quantité suffisante sans savoir lequel sera préféré ce jour-là. ' +
  'Et comme le dernier client de la journée doit lui aussi pouvoir choisir, les cuisines produisent volontairement plus que ce qui sera mangé. ' +
  'Chaque option supplémentaire est une incertitude de plus, et cette incertitude se paie en restes.\n\n' +
  'Faut-il alors réduire le choix ? ' +
  'Ce serait oublier ce qu’il représente, surtout pour de jeunes adultes. ' +
  'Choisir son plat, c’est une petite liberté quotidienne, et une manière d’affirmer ses goûts, ses convictions ou ses habitudes alimentaires. ' +
  'Un restaurant qui l’impose perd une partie de sa clientèle au profit de la restauration rapide, ce qui ne réduit pas le gaspillage : cela le déplace.\n\n' +
  'Une piste plus prometteuse consiste à connaître la demande à l’avance. ' +
  'Lorsque les convives réservent leur repas la veille, les cuisines produisent au plus près. ' +
  'Mais cette solution a ses limites sociales. ' +
  'Elle convient aux étudiants dont l’emploi du temps est régulier, qui savent où ils seront le lendemain midi. ' +
  'Elle pénalise ceux qui travaillent à côté de leurs études, dont les horaires changent d’une semaine à l’autre, et qui découvriraient au dernier moment qu’il ne reste plus rien pour eux.\n\n' +
  'Le gaspillage alimentaire n’est donc pas d’abord une affaire de vertu individuelle. ' +
  'C’est l’organisation tout entière, la carte, les horaires, la manière de prévoir, qui fabrique l’essentiel des restes. ' +
  'Culpabiliser le mangeur est plus facile que de revoir cette organisation. C’est aussi beaucoup moins efficace.';

// INVENTED: the chef Mireille Castanier, the bulletin « Le Fil des cuisines »,
// attendance that varies by as much as 40 % from one day to the next, the
// screen showing the previous day's leftovers, the food-aid association.
const DOC_3 =
  'CE QUE LA CUISINE NE MONTRE PAS\n' +
  'Témoignage de Mireille Castanier, cheffe de cuisine en restauration collective, recueilli par le bulletin Le Fil des cuisines\n\n' +
  'On imagine qu’un cuisinier gaspille par négligence. ' +
  'En réalité, chaque matin, je dois deviner combien de personnes viendront déjeuner, et d’un jour à l’autre, la fréquentation peut varier de quarante pour cent. ' +
  'Un jour de pluie, une semaine d’examens, une grève des transports, et tous mes calculs sont faux. ' +
  'Or je n’ai pas le droit de manquer : un étudiant qui arrive à treize heures trente et qui trouve les bacs vides, il ne revient pas. ' +
  'Alors je prévois large, et je le sais.\n\n' +
  'Ensuite, il y a les règles. ' +
  'Un plat qui a été présenté sur la ligne de service ne peut pas être resservi le lendemain : les normes d’hygiène l’interdisent, et elles ont de bonnes raisons. ' +
  'Il y a aussi la composition du plateau, fixée pour que le repas soit équilibré : entrée, plat, dessert. ' +
  'C’est une bonne intention, mais elle pousse des étudiants à prendre des aliments qu’ils ne mangeront pas.\n\n' +
  'Nous avons quand même changé beaucoup de choses en trois ans. ' +
  'Les légumes d’accompagnement sont désormais en libre-service : chacun se sert la quantité qu’il veut, et peut revenir. ' +
  'Le pain a quitté le début de la file pour la fin, après le plat : on en prend moins quand on sait déjà ce qu’on va manger. ' +
  'Les plats préparés mais jamais sortis de la cuisine sont conservés au froid et donnés le soir même à une association d’aide alimentaire, quand les règles le permettent. ' +
  'Et un écran, à l’entrée, affiche le poids des restes de la veille. ' +
  'Les premiers jours, les étudiants riaient. Aujourd’hui, certains viennent me demander si le chiffre a baissé.\n\n' +
  'Ce qui me manque, c’est de pouvoir prévoir. ' +
  'Si l’on me disait, même approximativement, combien d’étudiants mangeront chez nous et à quelle heure, je pourrais cuisiner au plus juste. ' +
  'Le gaspillage, vu de ma cuisine, c’est d’abord ce que l’on ne sait pas.';

/** The dossier, built fresh for each task so the two never share an object
 *  (decision 36 compares labels and texts, not identity). */
const peDossier = (): ExamPart[] => [
  { label: 'Document 1', text: DOC_1, items: [] },
  { label: 'Document 2', text: DOC_2, items: [] },
  { label: 'Document 3', text: DOC_3, items: [] },
];

/* ═══ PRODUCTION ÉCRITE · 1. SYNTHÈSE · 13 points ═════════════════════════ */

const SYNTHESE_RUBRIC: Rubric = {
  criteria: [
    {
      key: 'longueur',
      label: 'Longueur',
      maxPoints: 1,
      descriptors: [
        'En dessous du niveau : le texte sort de la fourchette de 200 à 240 mots (compter tout ce qui se trouve entre deux espaces). Noter la tranche de 20 mots concernée.',
        'C1 : le texte reste dans la fourchette de 200 à 240 mots.',
        'C1+ : dans la fourchette, et la longueur est mise au service de la densité : aucune phrase de remplissage.',
      ],
    },
    {
      key: 'objectivite',
      label: 'Objectivité',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : le texte ajoute des idées absentes du dossier, accuse les étudiants ou les cuisiniers, ou déforme la position d’un document.',
        'C1 : aucune idée extérieure, aucun jugement personnel ; les positions des auteurs sont rendues fidèlement.',
        'C1+ : la neutralité est tenue jusque dans le lexique (aucun mot évaluatif) et les nuances des documents sont conservées.',
      ],
    },
    {
      key: 'tache',
      label: 'Thème commun et informations clés',
      maxPoints: 3,
      descriptors: [
        'En dessous du niveau : le thème commun est absent ou flou ; des informations essentielles manquent, ou un document est ignoré.',
        'C1 : le thème commun est énoncé d’emblée ; les principales informations des trois documents sont présentes.',
        'C1+ : le thème est formulé comme une tension précise (ce qui reste dans l’assiette et ce qui se perd avant elle) et toutes les informations clés sont hiérarchisées.',
      ],
    },
    {
      key: 'organisation',
      label: 'Plan personnel et cohésion',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : résumés juxtaposés, document après document ; enchaînements absents ou mécaniques.',
        'C1 : un seul texte, organisé selon un plan propre qui croise les documents ; paragraphes et articulateurs guident la lecture.',
        'C1+ : le plan fait apparaître les convergences et les divergences entre documents ; les transitions portent la logique du texte.',
      ],
    },
    {
      key: 'lexique',
      label: 'Reformulation et lexique',
      maxPoints: 3,
      descriptors: [
        'En dessous du niveau : phrases ou passages recopiés ; vocabulaire imprécis ou répétitif.',
        'C1 : les idées sont reformulées avec des mots propres ; seuls des mots clés sont repris ; lexique abstrait précis.',
        'C1+ : reformulation synthétique et élégante (nominalisations, termes génériques justes) ; aucune répétition.',
      ],
    },
    {
      key: 'morphosyntaxe',
      label: 'Morphosyntaxe',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : erreurs fréquentes sur les structures complexes ; certaines phrases gênent la lecture.',
        'C1 : structures complexes maîtrisées ; erreurs rares, sans conséquence sur le sens.',
        'C1+ : syntaxe variée et souple (participiales, concessives, subordonnées enchâssées) ; correction quasi constante.',
      ],
    },
  ],
};

const SYNTHESE_MODEL =
  'Le gaspillage dans la restauration collective se joue à deux niveaux : dans l’assiette du convive et, plus largement, dans l’organisation des cuisines.\n\n' +
  'Les restes laissés sur les plateaux sont importants. ' +
  'Une pesée menée dans un restaurant universitaire révèle qu’un quart de la nourriture servie n’est pas consommé, en particulier le pain, les accompagnements et les desserts, pris par habitude ou parce que la formule les inclut. ' +
  'Des portions identiques pour tous expliquent aussi une partie de ces pertes : proposer deux tailles au même prix a réduit les restes, même si certains prenaient toujours la plus grande.\n\n' +
  'Toutefois, une part considérable des pertes n’atteint jamais l’assiette. ' +
  'La diversité des plats oblige à cuisiner chaque option en quantité suffisante, tandis que la fréquentation, très variable, pousse les cuisiniers à prévoir large pour ne pas manquer. ' +
  'S’y ajoutent des règles d’hygiène qui interdisent de resservir un plat présenté et un plateau imposé qui fait prendre des aliments délaissés ensuite.\n\n' +
  'Plusieurs remèdes sont envisagés. ' +
  'Réduire le choix risquerait de détourner les étudiants vers la restauration rapide ; la réservation préalable faciliterait la prévision, mais désavantagerait ceux dont les horaires sont irréguliers. ' +
  'D’autres mesures sont déjà appliquées : accompagnements en libre-service, pain placé en fin de file, dons des plats non servis et affichage du poids des restes. ' +
  'Le gaspillage apparaît ainsi moins comme une faute individuelle que comme le produit d’une organisation.';

export const PE_SYNTHESE: ExamTask = {
  ...base,
  id: taskId('pe_short', '001'),
  taskType: 'pe_short',
  skill: 'PE',
  label: 'Production écrite · Synthèse de documents',
  prompt:
    'PRODUCTION ÉCRITE · 25 points · 2 h 30 pour les deux exercices\n\n' +
    'Exercice 1 · Synthèse de documents (13 points)\n\n' +
    'Lisez les trois documents ci-dessous, qui portent sur le gaspillage alimentaire dans la restauration collective. ' +
    'Rédigez une synthèse de ces documents en 200 à 240 mots.\n\n' +
    'Votre synthèse est un texte unique, suivi, avec un titre si vous le souhaitez. ' +
    'Elle dégage le thème commun aux documents et regroupe leurs informations selon un plan qui vous est propre, ' +
    'au lieu de les résumer l’un après l’autre.\n' +
    'N’ajoutez aucune idée qui ne figure pas dans les documents et ne donnez pas votre avis.\n' +
    'Vous pouvez reprendre les mots clés des documents, mais pas des phrases ou des passages entiers.\n' +
    'Est considéré comme un mot tout ce qui se trouve entre deux espaces : « c’est-à-dire » compte pour un mot, « l’assiette » aussi.',
  timingS: 4500,
  parts: peDossier(),
  responseSpec: { kind: 'text', minWords: 200, maxWords: 240 },
  modelAnswer: SYNTHESE_MODEL,
  rubric: SYNTHESE_RUBRIC,
  examinerNotes: [
    ...NOTES_OPEN,
    'Points d’information attendus, dans l’ordre du modèle : (1) le gaspillage se joue dans l’assiette et dans l’organisation de la cuisine (doc. 1, 2, 3) ; ' +
      '(2) une pesée : environ un quart de ce qui est servi reste sur le plateau, surtout le pain, les accompagnements et les desserts, pris par habitude ou parce que la formule les inclut (doc. 1) ; ' +
      '(3) des portions identiques pour tous ; deux tailles au même prix réduisent les restes, mais certains prennent toujours la grande (doc. 1) ; ' +
      '(4) une grande part des pertes n’atteint jamais l’assiette (doc. 1, 2) ; ' +
      '(5) le choix oblige à cuisiner chaque plat en quantité suffisante ; la fréquentation varie et l’on prévoit large pour ne pas manquer (doc. 2, 3) ; ' +
      '(6) les règles d’hygiène interdisent de resservir ; le plateau imposé fait prendre ce qu’on ne mange pas (doc. 3) ; ' +
      '(7) réduire le choix déplace la clientèle vers la restauration rapide ; réserver la veille aide à prévoir mais pénalise les horaires irréguliers (doc. 2) ; ' +
      '(8) des mesures appliquées : libre-service, pain en fin de file, dons, affichage des restes (doc. 1, 3) ; ' +
      '(9) le gaspillage relève de l’organisation plus que de la faute individuelle (doc. 2, avec le gérant du doc. 1).',
    'Une bonne copie croise au moins deux de ces liens : l’assiette contre la cuisine (doc. 1, 2 et 3), la portion qui ne convient pas à tous les appétits (doc. 1 et 3), la prévision de la fréquentation (doc. 2 et 3).',
    'Seuils : 99 mots ou moins, 0 à tous les critères ; 300 mots ou plus, le critère « tache » ne peut pas atteindre C1 ; un texte recopié pour plus des trois quarts, 0 en lexique et en morphosyntaxe.',
    'Barème du sujet : 13 points pour la synthèse, 12 pour l’essai. Les grilles publiées totalisent 12,5 chacune ; l’épreuve vaut 25 dans les deux cas.',
  ],
};

/* ═══ PRODUCTION ÉCRITE · 2. ESSAI ARGUMENTÉ · 12 points ══════════════════ */

const ESSAI_RUBRIC: Rubric = {
  criteria: [
    {
      key: 'tache',
      label: 'Argumentation',
      maxPoints: 3,
      descriptors: [
        'En dessous du niveau : proposition absente ou vague ; mesures juxtaposées, non justifiées, sans contrepartie envisagée.',
        'C1 : un plan d’action clair et défendu ; mesures concrètes, justifiées par des exemples ; au moins une contrepartie ou une objection prise en compte.',
        'C1+ : proposition persuasive et réaliste ; contreparties chiffrables ou vérifiables, objection intégrée et retournée ; calendrier ou moyen d’évaluation prévu.',
      ],
    },
    {
      key: 'coherence',
      label: 'Cohérence et cohésion',
      maxPoints: 3,
      descriptors: [
        'En dessous du niveau : progression peu visible ; connecteurs rares, répétitifs ou mal employés.',
        'C1 : texte structuré, paragraphes logiques ; connecteurs variés qui portent l’argumentation.',
        'C1+ : progression maîtrisée du constat à la demande ; articulations fines (concession, hiérarchie des mesures, reprise).',
      ],
    },
    {
      key: 'destinataire',
      label: 'Adéquation au genre et au destinataire',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : conventions de la proposition écrite absentes ; registre inadapté à un service administratif ; le rôle de représentant des étudiants n’apparaît pas.',
        'C1 : formules d’appel et de congé adaptées ; registre soutenu tenu ; le scripteur parle au nom des étudiants et s’adresse au responsable du service.',
        'C1+ : posture de représentant exploitée (relayer les usagers, offrir leur concours) ; ton constructif ; demandes formulées pour être décidées.',
      ],
    },
    {
      key: 'lexique',
      label: 'Lexique',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : vocabulaire limité ou imprécis ; reprises massives des documents ; orthographe fautive.',
        'C1 : lexique étendu, concret et abstrait, précis sur la restauration et l’organisation ; orthographe correcte.',
        'C1+ : lexique riche et idiomatique, nuances justes ; orthographe quasi irréprochable.',
      ],
    },
    {
      key: 'morphosyntaxe',
      label: 'Morphosyntaxe',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : erreurs fréquentes ; structures complexes évitées ou mal maîtrisées.',
        'C1 : bonne correction grammaticale ; phrases complexes variées ; erreurs rares.',
        'C1+ : grande correction ; syntaxe souple et expressive (subjonctif, conditionnel, mises en relief).',
      ],
    },
  ],
};

const ESSAI_MODEL =
  'Madame la Directrice,\n\n' +
  'Au nom des représentants étudiants au conseil de la vie universitaire, je vous adresse une proposition pour réduire le gaspillage dans nos restaurants. ' +
  'Beaucoup d’entre nous sont choqués de voir, chaque midi, des plateaux revenir à moitié pleins, et nous souhaitons contribuer à changer la situation plutôt que de nous contenter de la déplorer.\n\n' +
  'Nous proposons d’abord trois mesures simples. ' +
  'Premièrement, servir le plat principal en deux tailles, la petite étant vendue un peu moins cher : sans écart de prix, une partie des étudiants prend toujours la grande portion.' +
  'Deuxièmement, placer le pain en fin de file et proposer les légumes en libre-service, pour que chacun se serve selon son appétit. ' +
  'Troisièmement, rendre le dessert facultatif dans la formule, afin que personne ne le prenne seulement parce qu’il l’a payé.\n\n' +
  'Nous suggérons ensuite une réservation facultative la veille, par l’application de l’université, avec une petite réduction pour ceux qui l’utilisent. ' +
  'Nous sommes conscients qu’elle ne convient pas à tous : de nombreux étudiants travaillent à côté de leurs études et ne connaissent pas leurs horaires à l’avance. ' +
  'C’est pourquoi elle doit rester un avantage, jamais une obligation, et une part des repas doit toujours être prévue pour ceux qui n’ont pas réservé.\n\n' +
  'Ces mesures ont un coût : un écart de prix à financer, du temps de personnel pour réorganiser la ligne de service, une application à adapter. ' +
  'En contrepartie, l’association étudiante s’engage à peser les restes une semaine par mois et à afficher les résultats, afin que les effets soient mesurés et discutés.\n\n' +
  'Nous vous proposons de tester ce dispositif pendant un semestre dans un seul restaurant, puis d’en faire le bilan ensemble avant de l’étendre. ' +
  'Nous restons à votre disposition pour en préciser les modalités lors d’une prochaine rencontre.\n\n' +
  'Je vous prie d’agréer, Madame la Directrice, l’expression de ma considération distinguée.\n\n' +
  'Le représentant des étudiants';

export const PE_ESSAI: ExamTask = {
  ...base,
  id: taskId('pe_essay', '001'),
  taskType: 'pe_essay',
  skill: 'PE',
  label: 'Production écrite · Essai argumenté',
  prompt:
    'Exercice 2 · Essai argumenté (12 points)\n\n' +
    // INVENTED: the université de Fontvérane and its catering service.
    'Le service de restauration de l’université de Fontvérane lance une consultation pour réduire le gaspillage dans ses restaurants, ' +
    'et invite les représentants des usagers à lui soumettre des propositions.\n\n' +
    'Représentant élu des étudiants, vous adressez à la directrice du service une proposition écrite ' +
    'dans laquelle vous présentez un plan d’action concret, en exposant ses avantages et ses contreparties.\n\n' +
    'Vous pouvez vous appuyer sur les documents de l’exercice 1, rappelés ci-dessous, sans les résumer, ' +
    'ainsi que sur vos connaissances et votre expérience.\n' +
    '250 mots minimum.',
  timingS: 4500,
  parts: peDossier(),
  responseSpec: { kind: 'text', minWords: 250 },
  modelAnswer: ESSAI_MODEL,
  rubric: ESSAI_RUBRIC,
  examinerNotes: [
    ...NOTES_OPEN,
    'Genre attendu : une proposition écrite adressée au responsable d’un service, en forme de lettre. Formules d’appel et de congé, registre soutenu, posture de représentant qui parle au nom des étudiants.',
    'Toutes les propositions sont recevables. Ce qui est noté, c’est la précision du plan, sa justification, la prise en compte de ses contreparties et d’au moins une objection.',
    'L’essai ne doit pas résumer le dossier : une copie qui réécrit la synthèse ne réalise pas la tâche.',
    'Seuil : 124 mots ou moins, 0 à tous les critères.',
  ],
};

/* ═══ PRODUCTION ORALE · rubrics shared by both subjects ══════════════════ */
//
// Exposé 13 + entretien 12 = 25 a subject. Lexique, morphosyntaxe and
// phonologie are judged once over both phases on the real grid; we split each
// across the pair (STANDARD-dalf-c1 §7.3), so each still totals 5.

const exposeRubric = (tacheC1: string): Rubric => ({
  criteria: [
    {
      key: 'tache',
      label: 'Réalisation de la tâche : exposé',
      maxPoints: 5,
      descriptors: [
        'En dessous du niveau : les documents sont résumés l’un après l’autre ; pas de problématique ni de plan annoncé ; pas de conclusion ; durée nettement hors de 8 à 10 minutes.',
        `C1 : la question est introduite et problématisée, un plan est annoncé et suivi, la réflexion exploite les documents ET des exemples personnels, la conclusion répond à la question. ${tacheC1}`,
        'C1+ : plan clairement balisé, arguments étayés par le dossier et par l’expérience, transitions explicites, conclusion qui nuance et ouvre.',
      ],
    },
    {
      key: 'lexique',
      label: 'Lexique',
      maxPoints: 3,
      descriptors: [
        'En dessous du niveau : vocabulaire limité au dossier, répétitions, approximations qui obligent à deviner.',
        'C1 : lexique étendu et précis, y compris abstrait ; quelques périphrases quand un mot manque.',
        'C1+ : lexique riche, nuancé, idiomatique ; choix des mots juste et varié.',
      ],
    },
    {
      key: 'morphosyntaxe',
      label: 'Morphosyntaxe',
      maxPoints: 3,
      descriptors: [
        'En dessous du niveau : erreurs fréquentes dès que la phrase se complique ; structures simples dominantes.',
        'C1 : bon contrôle grammatical ; structures complexes variées ; erreurs rares, vite corrigées.',
        'C1+ : grande correction, syntaxe souple, mises en relief et subordonnées maîtrisées.',
      ],
    },
    {
      key: 'phonologie',
      label: 'Phonologie et prosodie',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : prononciation ou débit qui gênent la compréhension ; lecture monotone de notes.',
        'C1 : prononciation claire, intonation qui souligne la structure de l’exposé.',
        'C1+ : intonation, pauses et accentuation au service de l’argumentation ; débit naturel.',
      ],
    },
  ],
});

const entretienRubric = (tacheC1: string): Rubric => ({
  criteria: [
    {
      key: 'tache',
      label: 'Réalisation de la tâche : entretien',
      maxPoints: 5,
      descriptors: [
        'En dessous du niveau : réponses brèves qui ne permettent pas à l’échange de se poursuivre ; position abandonnée sans le dire ou répétée sans répondre à l’objection.',
        `C1 : chaque question reçoit une réponse développée ; la position est défendue, puis précisée et nuancée sous la contradiction. ${tacheC1}`,
        'C1+ : le candidat concède ce qui doit l’être sans perdre sa thèse, élargit ou recentre le débat, relance l’examinateur.',
      ],
    },
    {
      key: 'lexique',
      label: 'Lexique',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : le vocabulaire manque sous la pression ; recours fréquent à des termes vagues.',
        'C1 : lexique de l’argumentation (concession, objection, conséquence) disponible en situation non préparée.',
        'C1+ : lexique précis et nuancé même dans la contradiction rapide.',
      ],
    },
    {
      key: 'morphosyntaxe',
      label: 'Morphosyntaxe',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : les erreurs se multiplient dès que l’échange s’accélère.',
        'C1 : correction maintenue en interaction ; structures complexes encore présentes.',
        'C1+ : syntaxe souple et correcte, y compris dans les reformulations improvisées.',
      ],
    },
    {
      key: 'phonologie',
      label: 'Phonologie et prosodie',
      maxPoints: 3,
      descriptors: [
        'En dessous du niveau : prononciation, rythme ou intonation qui obligent l’examinateur à faire répéter.',
        'C1 : prononciation claire et naturelle ; intonation qui marque la nuance, la concession, la question.',
        'C1+ : rythme, liaisons et intonation pleinement maîtrisés en parole spontanée.',
      ],
    },
  ],
});

const SUBJECTS = '« Peut-on confier des décisions à des machines ? » ou « La compétition a-t-elle sa place à l’école ? »';

const PO_NOTES = [
  ...NOTES_OPEN,
  `Sujet tiré parmi deux : ${SUBJECTS}. Le candidat ne traite que le sujet qu’il a choisi ; l’autre est écarté.`,
  'Exposé 13 points et entretien 12 points, soit 25 par sujet. Lexique, morphosyntaxe et phonologie sont jugés une seule fois sur les deux phases dans la grille publiée ; nous les répartissons entre les deux tâches.',
];

const exposePrompt = (question: string) =>
  'PRODUCTION ORALE · 25 points · 1 heure de préparation, puis environ 30 minutes face au jury\n\n' +
  'Phase 1 · Exposé (8 à 10 minutes)\n\n' +
  `Question : ${question}\n\n` +
  'Préparez, à partir des deux documents ci-dessous, un exposé qui répond à cette question. ' +
  'Construisez une réflexion personnelle et ordonnée : introduisez la question, annoncez votre plan, ' +
  'développez deux ou trois parties, puis concluez. ' +
  'Servez-vous des documents sans les présenter l’un après l’autre, et appuyez-vous aussi sur vos propres exemples.\n' +
  'L’exposé est suivi d’un entretien avec le jury.';

const ENTRETIEN_PROMPT =
  'Phase 2 · Entretien avec le jury (15 à 20 minutes)\n\n' +
  'Le jury va discuter la position que vous venez de défendre. ' +
  'Répondez à ses questions, précisez et nuancez vos idées, défendez votre point de vue ' +
  'et n’hésitez pas à élargir la discussion au-delà des documents.';

const M = (
  id: string,
  kind: 'probe' | 'counter' | 'counter-example' | 'consequence' | 'concession' | 'steelman' | 'retreat',
  depth: 1 | 2 | 3,
  text: string,
  covers: string
) => ({ id, kind, depth, text, covers, cues: [] as string[] });

const OPENING = {
  id: 'open',
  text: 'Merci pour cet exposé. Je vais maintenant discuter certains de vos arguments, et vous me répondrez.',
  cues: [] as string[],
  covers: 'ouverture de l’entretien',
};
const CLOSING = {
  id: 'close',
  text: 'Nous allons nous arrêter là. Merci, l’entretien est terminé.',
  cues: [] as string[],
  covers: 'clôture de l’entretien',
};
const RETREAT_TEXT = 'Vous semblez maintenant défendre presque l’inverse de votre exposé. Qu’est-ce qui vous a fait changer d’avis, exactement ?';

/* ═══ PRODUCTION ORALE · SUJET 1 (DALF-58) · Les machines et la décision ═ */

// INVENTED: the métropole de Saint-Ivrance and its office public du logement,
// its director Hugo Delvaille, « Saint-Ivrance Mag », the points software in
// use for three years, the fourteen thousand households waiting, the
// commission that follows the ranking nine times in ten, the file examined in
// a few days instead of several weeks.
const PO1_DOC_1 =
  '« LE LOGICIEL NE CONNAÎT NI LES AMIS NI LES COUSINS »\n' +
  'Entretien avec Hugo Delvaille, directeur de l’office public du logement de la métropole de Saint-Ivrance, paru dans Saint-Ivrance Mag\n\n' +
  'Depuis trois ans, les logements sociaux de la métropole sont attribués à l’aide d’un logiciel. Pourquoi ce choix ?\n' +
  'Parce que nous avions un problème de confiance. ' +
  'Quatorze mille ménages attendent un logement chez nous, et chaque attribution faisait naître le même soupçon : « il a eu un appartement parce qu’il connaît quelqu’un ». ' +
  'Ce soupçon était parfois injuste, parfois non. ' +
  'Aujourd’hui, chaque demande reçoit des points selon des critères publics : l’ancienneté de la demande, les revenus, la taille du foyer, l’urgence de la situation. ' +
  'Le logiciel classe les dossiers. Il ne connaît ni les amis ni les cousins.\n\n' +
  'C’est donc la machine qui décide ?\n' +
  'Non, et j’y tiens. Le logiciel propose un classement ; c’est une commission, composée d’élus et de représentants des locataires, qui attribue les logements. ' +
  'Elle peut s’écarter du classement si elle le justifie par écrit.\n\n' +
  'Le fait-elle souvent ?\n' +
  'Assez rarement, je le reconnais : elle suit le classement dans neuf cas sur dix. ' +
  'Mais je ne crois pas que ce soit un problème. Si les critères sont bons, il est normal que le résultat soit le plus souvent accepté.\n\n' +
  'Qu’est-ce qui a changé pour les demandeurs ?\n' +
  'D’abord la rapidité : un dossier complet est examiné en quelques jours, contre plusieurs semaines auparavant. ' +
  'Ensuite la transparence : chaque demandeur peut consulter son nombre de points en ligne et savoir ce qui le ferait progresser. ' +
  'Une mère de famille me disait récemment : « Au moins, je sais où j’en suis. Avant, j’avais l’impression d’attendre devant une porte fermée. »\n\n' +
  'Le système a-t-il des limites ?\n' +
  'Bien sûr. Les critères ne prévoient pas tout. ' +
  'Je pense à une femme qui avait quitté son domicile à cause de violences et qui ne pouvait pas encore le prouver par des documents. ' +
  'Pour le logiciel, sa situation n’était pas urgente. ' +
  'Il a fallu qu’une travailleuse sociale alerte la commission pour que son dossier soit examiné autrement. ' +
  'C’est pour cela que la décision finale doit rester humaine. ' +
  'Mais je préfère un outil qui traite tout le monde de la même façon, et des humains qui corrigent ses oublis, à des humains seuls qui traitent chacun à leur manière.\n\n' +
  'Et si l’outil se trompe ?\n' +
  'Alors ce sont ses critères qu’il faut revoir, et ces critères, ce sont des élus qui les ont votés. ' +
  'Le logiciel ne fait qu’appliquer des choix politiques. Il les applique simplement sans fatigue et sans préférence.';

// INVENTED: the jurist Constance Arvelier and the weekly « Le Fil civique ».
// No figure. The autopilot and the loan software are generic examples, with
// no company, airline or bank named.
const PO1_DOC_2 =
  'DÉCIDER N’EST PAS CALCULER\n' +
  'Chronique de Constance Arvelier, juriste, dans l’hebdomadaire Le Fil civique\n\n' +
  'Faut-il laisser des machines décider à notre place ? ' +
  'La question est souvent posée comme si la réponse était encore à venir. Elle est en réalité déjà largement tranchée. ' +
  'Dans un avion de ligne, les instruments pilotent l’essentiel du vol, et les pilotes surveillent ; personne ne réclame qu’on revienne au pilotage manuel de bout en bout. ' +
  'Lorsqu’une tâche est répétitive, que ses règles sont claires et que l’erreur humaine y est fréquente, confier la décision à un système peut sauver des vies.\n\n' +
  'Le débat ne porte donc pas sur le principe, mais sur la nature de ce que l’on confie. ' +
  'Calculer une trajectoire n’est pas la même chose que décider du sort d’une personne. ' +
  'Une décision qui concerne quelqu’un engage une responsabilité : il faut pouvoir lui dire pourquoi, et quelqu’un doit pouvoir en répondre. ' +
  'Or un système de calcul ne répond de rien. ' +
  'Lorsqu’une banque refuse un crédit sur la recommandation de son logiciel, le client entend souvent la même phrase : « c’est le système ». ' +
  'Cette phrase est le contraire d’une justification. Elle signifie que personne n’assume.\n\n' +
  'On objecte que l’humain garde le dernier mot. ' +
  'C’est vrai sur le papier. Dans les faits, celui qui doit valider une recommandation automatique la suit presque toujours, faute de temps, par crainte de se tromper seul contre la machine, ' +
  'ou simplement parce qu’il est plus confortable de s’abriter derrière un résultat qui a l’air objectif. ' +
  'Un contrôle humain qui ne contredit jamais n’est pas un contrôle : c’est une signature.\n\n' +
  'Il faut enfin se méfier de l’apparente neutralité des outils. ' +
  'Un logiciel applique des critères, et ces critères ont été choisis par des personnes, avec leurs priorités et leurs angles morts. ' +
  'Ce qui n’a pas été prévu n’existe pas pour lui. ' +
  'La machine n’a pas de préjugés au sens où nous en avons ; elle a ceux qu’on lui a transmis, appliqués avec une constance parfaite.\n\n' +
  'Je ne plaide pas pour qu’on renonce à ces outils. ' +
  'Je plaide pour deux garanties. ' +
  'La première : que toute personne concernée par une décision obtienne une explication dans des termes qu’elle comprend. ' +
  'La seconde : qu’elle puisse demander que son cas soit réexaminé par quelqu’un qui a réellement le pouvoir, et le temps, de s’écarter de la recommandation. ' +
  'Une machine peut aider à décider. Elle ne doit jamais devenir le moyen de ne plus avoir à répondre de ses décisions.';

const PO1_EXPOSE_MODEL =
  'Bonjour. Le sujet que j’ai choisi pose la question suivante : peut-on confier des décisions à des machines ? ' +
  'La question peut sembler appartenir à l’avenir, mais elle est déjà très concrète : des logiciels classent des demandes, recommandent des refus, pilotent une partie de nos déplacements. ' +
  'Le verbe « confier » est important. Confier, ce n’est pas seulement utiliser un outil, c’est remettre à quelqu’un, ou à quelque chose, une responsabilité. ' +
  'Le dossier comporte deux documents. Le premier est un entretien avec le directeur d’un office du logement qui attribue les logements sociaux à l’aide d’un logiciel de points. ' +
  'Le second est la chronique d’une juriste, qui ne rejette pas ces outils, mais distingue calculer et décider. ' +
  'Je me demanderai donc jusqu’où l’on peut laisser une machine trancher sans perdre ce qui fait une décision juste. ' +
  'Je montrerai d’abord que les machines décident déjà, et parfois mieux que nous ; ' +
  'ensuite, que certaines décisions ne peuvent pas leur être remises sans danger ; ' +
  'enfin, je proposerai quelques conditions pour qu’elles nous aident à décider sans décider à notre place.\n\n' +
  'Commençons par reconnaître ce que les machines apportent. ' +
  'La juriste elle-même le rappelle : dans un avion de ligne, les instruments pilotent l’essentiel du vol, et personne ne souhaite revenir en arrière. ' +
  'Quand les règles sont claires, la tâche répétitive et l’erreur humaine fréquente, un système automatique peut même sauver des vies.' +
  'L’exemple du logement va plus loin, parce qu’il touche à la justice. ' +
  'Avant le logiciel, chaque attribution faisait naître un soupçon de favoritisme. ' +
  'Désormais, les critères sont publics, chaque demandeur connaît son nombre de points, et un dossier est examiné en quelques jours au lieu de plusieurs semaines. ' +
  'Le demandeur peut même savoir ce qui ferait progresser son dossier, ce qui change complètement sa position : il n’attend plus devant une porte fermée, il comprend les règles du jeu. ' +
  'La phrase de cette mère de famille me paraît très forte : « au moins, je sais où j’en suis ». ' +
  'Il faut ajouter que, dans ce système, la machine ne décide pas seule : elle propose un classement, et une commission d’élus et de représentants des locataires attribue les logements, avec la possibilité de s’en écarter par écrit. ' +
  'Autrement dit, la machine peut rendre une décision plus égale et plus lisible, précisément parce qu’elle ne connaît, comme le dit le titre, ni les amis ni les cousins. ' +
  'Je peux ajouter un exemple personnel. Quand j’ai demandé une place dans une formation, mon dossier a d’abord été classé par une plateforme en ligne, selon des critères annoncés à l’avance. ' +
  'J’étais inquiet, mais j’ai été rassuré de savoir que le même calcul s’appliquait à tout le monde, et que ma réussite ne dépendait pas de l’humeur d’un lecteur fatigué en fin de journée. ' +
  'Dans ce premier sens, confier certaines décisions à une machine, c’est se protéger contre nos propres faiblesses : la fatigue, les préférences, les arrangements.\n\n' +
  'Cependant, et c’est mon deuxième point, cette confiance a des limites sérieuses, que la juriste analyse très bien. ' +
  'La première concerne la responsabilité. ' +
  'Une décision qui concerne une personne doit pouvoir lui être expliquée, et quelqu’un doit pouvoir en répondre. ' +
  'Or une machine ne répond de rien. La formule « c’est le système », que l’on entend après un refus, signifie au fond que personne n’assume. ' +
  'J’en ai fait l’expérience moi-même : un jour, mon dossier a été refusé par le service en ligne d’un organisme, sans aucune explication, et pendant des semaines je n’ai trouvé personne capable de me dire pourquoi. ' +
  'Ce n’est pas le refus qui m’a le plus choqué, c’est l’impossibilité de parler à quelqu’un. ' +
  'La deuxième limite, ce sont les cas imprévus. ' +
  'Le directeur de l’office le reconnaît lui-même : une femme qui fuyait des violences, sans pouvoir encore le prouver, n’était pas une urgence pour le logiciel. ' +
  'Ce qui n’a pas été prévu dans les critères n’existe pas pour la machine. ' +
  'Il a fallu une travailleuse sociale, c’est-à-dire un regard humain, pour corriger cet oubli. ' +
  'La troisième limite est plus subtile. On nous dit que l’humain garde le dernier mot. ' +
  'Mais dans le premier document, la commission suit le classement dans neuf cas sur dix, et la juriste avance, de façon générale, des raisons qui pourraient l’expliquer : le manque de temps, la peur d’avoir tort seul contre la machine, le confort. ' +
  'Un contrôle qui ne contredit jamais, dit-elle, n’est plus un contrôle mais une signature. ' +
  'Enfin, il faut se méfier de la neutralité apparente des outils. ' +
  'Les critères ont été choisis par des personnes ; le directeur lui-même dit que le logiciel ne fait qu’appliquer des choix politiques. ' +
  'La machine n’invente pas d’injustice, mais elle peut reproduire avec une constance parfaite celles qu’on y a mises.\n\n' +
  'Faut-il en conclure qu’on ne peut rien confier aux machines ? Je ne le crois pas, et c’est mon troisième point. ' +
  'Il me semble que les deux documents se rejoignent sur l’essentiel : ni le directeur ni la juriste ne veulent revenir à des décisions purement humaines, et tous deux tiennent à ce qu’un humain reste responsable. ' +
  'La distinction la plus utile, à mon avis, est celle de la juriste entre calculer et décider. ' +
  'On peut confier à une machine le calcul, le classement, la recommandation. ' +
  'On ne devrait pas lui confier la responsabilité. ' +
  'Concrètement, cela suppose les deux garanties qu’elle propose : une explication compréhensible pour toute personne concernée, et le droit de faire réexaminer son cas par quelqu’un qui a vraiment le pouvoir et le temps de s’écarter de la recommandation. ' +
  'J’ajouterais une troisième condition, qui découle des deux documents : que les critères eux-mêmes soient débattus publiquement et révisés quand ils produisent des oublis, comme dans le cas de cette femme. ' +
  'Il faudrait aussi, me semble-t-il, distinguer les domaines. ' +
  'Plus une décision est réversible et technique, plus on peut la confier à une machine ; plus elle touche à la vie d’une personne et repose sur des situations difficiles à mettre en cases, plus l’humain doit s’y engager pleinement. ' +
  'Le pilotage d’un avion et l’attribution d’un logement ne relèvent pas du même degré de confiance, même si les deux peuvent être assistés par un outil. ' +
  'Dans ma propre expérience, ce qui fait accepter une décision, même défavorable, ce n’est pas qu’elle soit prise par un humain ou par une machine, c’est qu’on puisse la comprendre et la contester.\n\n' +
  'Pour conclure, je répondrais oui à la question, mais à condition de bien préciser ce que l’on confie. ' +
  'On peut confier aux machines des calculs, et même des décisions techniques dont les règles sont claires, comme le pilotage d’un avion. ' +
  'Pour les décisions qui touchent la vie d’une personne, la machine peut éclairer, classer, proposer ; elle ne doit pas devenir un moyen de ne plus avoir à répondre. ' +
  'Reste une question que je laisse ouverte : à mesure que ces outils deviendront plus performants, aurons-nous encore le courage de les contredire ? ' +
  'Je vous remercie.';

export const PO1_EXPOSE: ExamTask = {
  ...base,
  id: taskId('po_monologue', '001'),
  taskType: 'po_monologue',
  skill: 'PO',
  label: 'Production orale · Sujet 1 · Exposé',
  prompt: exposePrompt('Peut-on confier des décisions à des machines ?'),
  prepS: 3600,
  timingS: 600,
  parts: [
    { label: 'Document 1', text: PO1_DOC_1, items: [] },
    { label: 'Document 2', text: PO1_DOC_2, items: [] },
  ],
  responseSpec: { kind: 'audio', minDurationS: 480, maxDurationS: 600 },
  modelAnswer: PO1_EXPOSE_MODEL,
  rubric: exposeRubric('Ici : distinguer calculer et décider, ou recommander et répondre d’une décision, et ne pas réduire la question à « pour ou contre la technologie ».'),
  examinerNotes: [
    ...PO_NOTES,
    'Points du dossier exploitables : le soupçon de favoritisme avant le logiciel ; des critères publics et des points consultables ; un dossier examiné en quelques jours ; une commission qui peut s’écarter du classement mais le suit neuf fois sur dix ; la femme victime de violences que les critères ne voyaient pas ; des critères votés par des élus ; le pilotage des avions ; calculer n’est pas décider ; « c’est le système » ; le contrôle humain qui devient une signature ; des critères choisis par des personnes ; deux garanties : explication et réexamen réel.',
    'Les exemples personnels du modèle (une candidature classée par une plateforme, un refus sans explication) sont donnés comme tels : ils montrent l’appui sur l’expérience que la consigne demande, ils ne sont pas tirés du dossier.',
    'Les deux documents se rejoignent plus qu’ils ne s’opposent : ni le directeur ni la juriste ne veulent renoncer aux outils, et tous deux veulent une responsabilité humaine. Une copie qui les présente comme un simple pour et contre passe à côté de leur convergence.',
  ],
};

const PO1_DEBATE: ExamDebate = {
  question: 'Peut-on confier des décisions à des machines ?',
  opening: OPENING,
  clarify: {
    id: 'clarify',
    text: 'Avant d’aller plus loin, je voudrais être sûr de bien vous suivre. Selon vous, une machine peut-elle prendre seule une décision qui concerne une personne, oui ou non ?',
    cues: [],
    covers: 'lever l’ambiguïté sur la position défendue',
  },
  sideCues: {
    // "pour" = the candidate holds that decisions can be entrusted to machines.
    pour: [
      'on peut confier des decisions aux machines', 'oui on peut confier', 'la machine est plus juste', 'la machine est plus fiable',
      'la machine ne connait ni les amis ni les cousins', 'les machines decident deja', 'un logiciel traite tout le monde de la meme facon',
    ],
    contre: [
      'on ne peut pas confier des decisions aux machines', 'non on ne peut pas', 'une machine ne repond de rien',
      'decider n est pas calculer', 'la decision doit rester humaine', 'c est le systeme', 'un humain doit decider',
    ],
  },
  axes: [
    /* ── against POUR: the candidate holds that decisions can be given to machines ── */
    {
      id: 'responsabilite',
      against: 'pour',
      about: 'qui répond de la décision',
      moves: [
        M('re1', 'counter', 1,
          'Vous dites qu’on peut confier ces décisions à une machine. Mais si la décision est mauvaise, qui en répond ? Le logiciel ? Celui qui l’a programmé ? Celui qui l’a acheté ?',
          'la responsabilité'),
        M('re2', 'probe', 2,
          'Dans le second document, on entend « c’est le système ». Avez-vous déjà reçu une réponse de ce genre, et qu’avez-vous ressenti ?',
          'l’expérience du candidat'),
        M('re3', 'concession', 3,
          'Vous admettez qu’une machine ne peut pas expliquer elle-même sa décision. Une décision qu’on ne peut pas justifier à la personne concernée est-elle encore une décision juste ?',
          'la concession sur l’explication retournée contre le principe'),
        M('re-r', 'retreat', 1, RETREAT_TEXT, 'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'imprevu',
      against: 'pour',
      about: 'les cas que les critères ne prévoient pas',
      moves: [
        M('im1', 'counter-example', 1,
          'Prenons la femme qui fuyait des violences sans pouvoir le prouver. Pour le logiciel, elle n’était pas prioritaire. Combien de situations de ce genre passent inaperçues ?',
          'le cas imprévu'),
        M('im2', 'probe', 2,
          'Peut-on, selon vous, écrire des critères qui prévoient tout ? Comment fait-on avec ce que personne n’a imaginé ?',
          'les limites des critères'),
        M('im3', 'consequence', 3,
          'Si l’on ajoute un critère après chaque oubli, ne finit-on pas avec un système si compliqué que plus personne ne le comprend, pas même ceux qui le votent ?',
          'la complexité croissante'),
      ],
    },
    {
      id: 'signature',
      against: 'pour',
      about: 'le contrôle humain réduit à une signature',
      moves: [
        M('si1', 'counter', 1,
          'Vous dites que l’humain garde le dernier mot. Mais la commission suit le classement neuf fois sur dix. Ce dernier mot existe-t-il vraiment ?',
          'le dernier mot humain'),
        M('si2', 'probe', 2,
          'Si vous étiez membre de cette commission, oseriez-vous contredire le logiciel ? Qu’est-ce qui vous en empêcherait ?',
          'la pression de la recommandation'),
        M('si3', 'steelman', 3,
          'Je vous accorde que l’outil est souvent juste. Mais plus il a raison, moins on ose le contredire, et plus ses rares erreurs passent. N’est-ce pas un piège ?',
          'la confiance qui désarme le contrôle'),
      ],
    },
    {
      id: 'neutralite',
      against: 'pour',
      about: 'la fausse neutralité des critères',
      moves: [
        M('ne1', 'counter', 1,
          'Le logiciel applique des critères choisis par des personnes. En quoi est-il plus neutre que ceux qui l’ont conçu ?',
          'des critères humains'),
        M('ne2', 'probe', 2,
          'Qui devrait choisir ces critères, selon vous ? Les techniciens, les élus, les personnes concernées ?',
          'qui fixe les critères'),
        M('ne3', 'consequence', 3,
          'Si un critère est injuste, la machine l’appliquera à des milliers de dossiers sans jamais hésiter. Une erreur humaine reste isolée ; celle d’un logiciel se répète. Qu’en pensez-vous ?',
          'l’erreur multipliée'),
      ],
    },

    /* ── against CONTRE: the candidate holds that decisions must stay human ── */
    {
      id: 'favoritisme',
      against: 'contre',
      about: 'la partialité des décisions humaines',
      moves: [
        M('fa1', 'counter', 1,
          'Avant le logiciel, chaque attribution faisait naître un soupçon de favoritisme. Les décisions purement humaines étaient-elles vraiment plus justes ?',
          'le favoritisme humain'),
        M('fa2', 'probe', 2,
          'Un humain fatigué, pressé, ou qui a une préférence sans même s’en rendre compte : comment le contrôle-t-on, lui ?',
          'les biais humains'),
        M('fa3', 'concession', 3,
          'Vous reconnaissez que les humains ne traitent pas toujours chacun de la même façon. Si une machine traite tout le monde à l’identique, refuser de l’utiliser, n’est-ce pas accepter l’inégalité ?',
          'la concession retournée : l’égalité de traitement'),
        M('fa-r', 'retreat', 1, RETREAT_TEXT, 'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'securite',
      against: 'contre',
      about: 'les machines qui décident déjà, et mieux',
      moves: [
        M('se1', 'counter-example', 1,
          'Dans un avion, les instruments pilotent l’essentiel du vol. Préféreriez-vous un vol entièrement piloté à la main ?',
          'le pilotage automatique'),
        M('se2', 'probe', 2,
          'Où placez-vous la limite ? Pourquoi accepter qu’une machine décide de la trajectoire d’un avion, et pas d’un dossier ?',
          'la frontière entre les décisions'),
        M('se3', 'consequence', 3,
          'Si l’on refuse les machines là où elles se trompent moins que nous, ne fait-on pas payer ce refus à ceux qui subissent nos erreurs ?',
          'le coût du refus'),
      ],
    },
    {
      id: 'rapidite',
      against: 'contre',
      about: 'le temps de ceux qui attendent',
      moves: [
        M('ra1', 'counter', 1,
          'Un dossier est maintenant examiné en quelques jours au lieu de plusieurs semaines. Pour une famille mal logée, ce temps gagné ne compte-t-il pas ?',
          'la rapidité'),
        M('ra2', 'probe', 2,
          'Avez-vous déjà attendu longtemps une réponse administrative ? Qu’auriez-vous préféré : une réponse rapide d’un logiciel ou une réponse tardive d’une personne ?',
          'l’expérience du candidat'),
        M('ra3', 'steelman', 3,
          'Votre meilleur argument est qu’une décision doit être humaine. Mais une décision humaine qui arrive trop tard, est-ce encore une bonne décision ?',
          'la justice qui tarde'),
      ],
    },
    {
      id: 'transparence',
      against: 'contre',
      about: 'savoir où l’on en est',
      moves: [
        M('tr1', 'counter', 1,
          'La mère de famille du premier document dit : « au moins, je sais où j’en suis ». Avec des critères publics, la machine n’est-elle pas plus transparente qu’une commission ?',
          'la transparence des critères'),
        M('tr2', 'probe', 2,
          'Concrètement, comment rendriez-vous une décision humaine aussi lisible qu’un nombre de points consultable en ligne ?',
          'la lisibilité de la décision humaine'),
        M('tr3', 'consequence', 3,
          'Si l’on revient à des décisions humaines, ne revient-on pas aussi à l’opacité, aux décisions qu’on ne peut ni prévoir ni comparer ?',
          'le retour de l’opacité'),
      ],
    },
  ],
  closing: CLOSING,
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
  // Written from the "pour" side (machines may be given decisions, with
  // conditions), answering the signature and unforeseen-case axes: a real
  // concession, then the thesis kept and narrowed.
  modelAnswer:
    'Vous avez raison sur un point, et je ne veux pas l’esquiver : quand la commission suit le classement neuf fois sur dix, on peut se demander si elle décide encore. ' +
    'Moi-même, à sa place, je ne suis pas sûr que j’oserais contredire un outil que tout le monde présente comme objectif.\n\n' +
    'Mais je ne crois pas que la solution soit de renoncer au logiciel. ' +
    'Le problème, ce n’est pas que la machine propose, c’est que l’humain n’ait ni le temps ni les moyens de vérifier. ' +
    'Si chaque membre de la commission avait le temps d’examiner les dossiers à la marge, ceux qui sont juste au-dessus ou juste en dessous du seuil, le dernier mot redeviendrait réel. ' +
    'Je préciserais donc ma position : on peut confier un classement à une machine, à condition de financer aussi le contrôle humain qui va avec.\n\n' +
    'Sur les cas imprévus, je vous rejoins davantage. ' +
    'L’histoire de cette femme montre qu’aucun critère ne prévoit tout. ' +
    'Mais elle montre aussi que le système a fonctionné, grâce à une travailleuse sociale qui a pu alerter la commission. ' +
    'C’est cela qu’il faut garantir : une porte d’entrée humaine pour toutes les situations que les critères ne voient pas.\n\n' +
    'Et je maintiens l’essentiel. ' +
    'Une décision humaine n’est pas juste parce qu’elle est humaine. Avant le logiciel, il y avait des soupçons de favoritisme, et ils n’étaient pas toujours infondés. ' +
    'Ce qui rend une décision acceptable, c’est qu’on puisse la comprendre et la contester. ' +
    'Une machine bien encadrée peut y contribuer ; une machine derrière laquelle on se cache, non.',
  debate: PO1_DEBATE,
  rubric: entretienRubric('Ici : tenir la distinction entre une machine qui recommande et un humain qui répond de la décision, face à l’objection de la signature ou à celle du favoritisme humain.'),
  examinerNotes: [
    ...PO_NOTES,
    'Le jury conteste la position prise dans l’exposé, quelle qu’elle soit, puis élargit au-delà du dossier (expériences administratives du candidat, autres domaines où des outils recommandent ou décident).',
  ],
};

/* ═══ PRODUCTION ORALE · SUJET 2 (DALF-60) · La compétition à l’école ════ */

// INVENTED: the maths teacher Damien Roustan, the collège d’Ostival, the
// review « Craie et Tableau », the inter-class rally of his quatrièmes, the
// mixed teams of four, the one-time individual ranking he dropped, the
// pupil Lina, the weekly personal records in mental arithmetic.
const PO2_DOC_1 =
  'LE RALLYE QUI A RÉVEILLÉ MES QUATRIÈMES\n' +
  'Témoignage de Damien Roustan, professeur de mathématiques au collège d’Ostival, publié dans la revue Craie et Tableau\n\n' +
  'Il y a quatre ans, j’avais une classe de quatrième que rien ne semblait intéresser. ' +
  'J’ai tenté quelque chose que je m’étais toujours interdit : une compétition. ' +
  'Un rallye mathématique entre les quatre classes de quatrième du collège, une fois par trimestre, avec des énigmes à résoudre en équipes de quatre. ' +
  'J’ai composé moi-même les équipes, en mélangeant les élèves à l’aise et ceux qui l’étaient moins.\n\n' +
  'Le premier rallye a été une surprise. ' +
  'Des élèves qui ne levaient jamais la main expliquaient une solution à leurs camarades, parce que l’équipe avait besoin d’eux. ' +
  'Pendant les semaines suivantes, certains venaient me demander des énigmes « pour s’entraîner ». ' +
  'Le défi avait donné un sens à des exercices qui, posés au tableau, n’en avaient pour eux aucun.\n\n' +
  'Encouragé, j’ai voulu aller plus loin et j’ai affiché, une seule fois, un classement individuel des meilleurs résultats de l’année. ' +
  'Ce fut une erreur. ' +
  'Les premiers étaient ravis, mais les derniers ont décroché presque aussitôt. ' +
  'Une élève, Lina, m’a dit en sortant : « De toute façon, je serai toujours en bas, alors à quoi bon. » ' +
  'Je n’ai jamais recommencé. ' +
  'J’ai compris que la compétition entre équipes et le classement des individus ne produisent pas du tout le même effet.\n\n' +
  'Aujourd’hui, je garde le rallye, avec des rôles qui changent à chaque fois : celui qui écrit, celui qui vérifie, celui qui présente. ' +
  'Et j’ai ajouté une autre forme de défi, qui marche très bien : chaque semaine, un exercice de calcul mental chronométré, où chacun essaie de battre son propre record. ' +
  'Personne ne voit le score des autres. ' +
  'Lina, qui s’était sentie humiliée par le classement, progresse aujourd’hui plus vite que la moyenne, et elle le sait.\n\n' +
  'Les parents, eux, ont réagi de façon partagée. ' +
  'Certains se sont réjouis de voir leur enfant parler de mathématiques à table ; d’autres se sont inquiétés de la pression, surtout ceux dont l’enfant avait mal vécu une défaite. ' +
  'J’ai donc pris l’habitude, après chaque rallye, de consacrer une heure à revenir sur les énigmes avec toute la classe : ce qui compte n’est pas le résultat de l’équipe, mais ce que chacun a compris.\n\n' +
  'Certains collègues me reprochent d’introduire à l’école la logique du marché. ' +
  'Je leur réponds que le jeu existait bien avant le marché. ' +
  'Les enfants adorent se mesurer, à la récréation comme dans un match. ' +
  'La question n’est pas de savoir s’il faut de la compétition, mais laquelle, et ce qu’on fait de ceux qui perdent.';

// INVENTED: the Institut Verdelin d’études éducatives, its report and the
// survey of 1,200 collégiens (two pupils in three say a contest motivates
// them when they think they can win; one in four when they expect to lose).
const PO2_DOC_2 =
  'COMPÉTITION À L’ÉCOLE : CE QUE MONTRENT LES ÉTUDES\n' +
  'Synthèse d’un rapport de l’Institut Verdelin d’études éducatives, publiée dans sa lettre d’information\n\n' +
  'La compétition scolaire divise depuis longtemps les enseignants comme les familles. ' +
  'Les uns y voient un ressort de motivation et une préparation à la vie adulte ; les autres, une source d’angoisse et d’inégalités. ' +
  'Le rapport publié cette année par l’Institut Verdelin rassemble les travaux disponibles et propose une lecture plus nuancée.\n\n' +
  'Premier constat : l’effet de la compétition dépend de ce que l’élève pense pouvoir obtenir. ' +
  'Dans une enquête menée auprès de mille deux cents collégiens, deux élèves sur trois déclarent qu’un concours les motive lorsqu’ils pensent avoir une chance de gagner ; ' +
  'ils ne sont plus qu’un sur quatre lorsqu’ils s’attendent à perdre. ' +
  'La compétition stimule donc surtout ceux qui sont déjà en position de réussir, et peut décourager ceux qui en auraient le plus besoin.\n\n' +
  'Deuxième constat : la forme compte autant que le principe. ' +
  'Un classement rendu public, répété et portant sur des individus a les effets les plus défavorables : il fige les positions et pousse les plus faibles à se retirer de l’effort. ' +
  'À l’inverse, les défis collectifs, qui associent la coopération à l’intérieur d’une équipe et la rivalité entre équipes, obtiennent des résultats favorables, y compris chez les élèves en difficulté. ' +
  'Les défis que l’élève se lance à lui-même, en comparant ses résultats à ses performances passées, ont également des effets positifs.\n\n' +
  'Troisième constat : la compétition ne motive pas toujours pour les bonnes raisons. ' +
  'Lorsque gagner devient le but, une partie des élèves choisit les tâches où elle est sûre de réussir, et le plaisir de comprendre peut céder la place au seul désir de l’emporter.\n\n' +
  'Le rapport rappelle enfin un fait souvent oublié dans le débat : l’école est déjà compétitive, quoi qu’on en pense. ' +
  'L’orientation, l’accès à certaines formations, les examens reposent sur des comparaisons entre élèves. ' +
  'Refuser toute compétition dans la classe ne la supprime pas ; cela peut seulement priver les élèves d’une occasion d’apprendre à la vivre, à gagner et à perdre, dans un cadre protégé.\n\n' +
  'Les auteurs ne tranchent pas pour ou contre la compétition. ' +
  'Ils recommandent d’en surveiller la forme : privilégier les équipes et les progrès personnels, éviter les classements publics des individus, et faire en sorte que perdre ne soit jamais définitif.';

const PO2_EXPOSE_MODEL =
  'Bonjour. Le sujet que j’ai choisi pose la question suivante : la compétition a-t-elle sa place à l’école ? ' +
  'Le mot « compétition » fait souvent peur quand on parle d’enfants. On pense aux classements, aux perdants, à la pression. ' +
  'Mais on pense aussi au jeu, au défi, au plaisir de se dépasser. ' +
  'La question n’est donc pas seulement de savoir si l’école doit être compétitive, mais quelle forme de compétition, s’il y en a une, peut aider les élèves à apprendre. ' +
  'Elle touche aussi à une question plus large : à quoi sert l’école, à transmettre des savoirs à tous ou à distinguer les meilleurs ? ' +
  'Le dossier comporte deux documents. Le premier est le témoignage d’un professeur de mathématiques qui a organisé un rallye entre ses classes. ' +
  'Le second est la synthèse d’un rapport qui rassemble des études sur les effets de la compétition scolaire. ' +
  'Je me demanderai donc à quelles conditions la compétition peut servir l’apprentissage plutôt que le trier. ' +
  'Je montrerai d’abord ce que la compétition peut apporter ; ' +
  'ensuite, les risques réels qu’elle fait courir, surtout aux élèves les plus fragiles ; ' +
  'enfin, je proposerai de distinguer plusieurs formes de compétition, qui n’ont pas du tout les mêmes effets.\n\n' +
  'Commençons par ce qui plaide pour la compétition. ' +
  'L’expérience du professeur est frappante : face à une classe que rien n’intéressait, un rallye par équipes a changé l’ambiance. ' +
  'Des élèves qui ne levaient jamais la main se sont mis à expliquer des solutions, parce que leur équipe avait besoin d’eux, et certains ont même demandé des énigmes pour s’entraîner. ' +
  'Le défi a donné du sens à des exercices qui, au tableau, n’en avaient aucun pour eux. ' +
  'Certains parents ont même vu leur enfant parler de mathématiques à table.' +
  'Le rapport confirme d’ailleurs que les défis collectifs ont des effets favorables, y compris chez les élèves en difficulté. ' +
  'Le professeur rappelle aussi que les enfants aiment se mesurer, à la récréation comme dans un match : le jeu existait bien avant le marché. ' +
  'Je peux ajouter un exemple personnel. Au collège, notre professeure de français organisait chaque trimestre un concours de lecture entre les classes. ' +
  'Je n’étais pas un grand lecteur, mais pour ne pas laisser tomber mon équipe, j’ai lu des livres que je n’aurais jamais ouverts autrement, et certains m’ont marqué durablement. ' +
  'Enfin, le rapport souligne un point que l’on oublie souvent : l’école est déjà compétitive, puisque l’orientation et l’accès à certaines formations reposent sur des comparaisons. ' +
  'Refuser toute compétition dans la classe ne la fait pas disparaître ; cela prive seulement les élèves d’une occasion d’apprendre à gagner et à perdre dans un cadre protégé.\n\n' +
  'Cependant, et c’est mon deuxième point, la compétition comporte des risques sérieux, que les deux documents décrivent avec précision. ' +
  'Le premier, c’est qu’elle motive surtout ceux qui pensent pouvoir gagner. ' +
  'Selon l’enquête citée par le rapport, deux collégiens sur trois se disent motivés par un concours quand ils pensent avoir une chance, mais un sur quatre seulement quand ils s’attendent à perdre. ' +
  'Autrement dit, la compétition risque d’aider les élèves qui réussissent déjà et de décourager ceux qui en auraient le plus besoin. ' +
  'Le témoignage du professeur l’illustre de façon très concrète. ' +
  'Lorsqu’il a affiché un classement individuel, les premiers étaient ravis, mais les derniers ont décroché, et une élève lui a dit qu’elle serait de toute façon toujours en bas. ' +
  'Le rapport fait le même constat à partir des études qu’il rassemble :un classement public, répété et individuel fige les positions et pousse les plus faibles à abandonner l’effort. ' +
  'J’ai connu cette situation : dans une de mes classes, les notes de chaque contrôle étaient lues à voix haute, de la meilleure à la plus mauvaise. ' +
  'Je me souviens surtout du silence des derniers, et du fait que certains avaient cessé d’essayer bien avant la fin de l’année. ' +
  'Le second risque est plus discret : quand gagner devient le but, on choisit les tâches où l’on est sûr de réussir, et le plaisir de comprendre peut céder la place au désir de l’emporter. ' +
  'Dans ce cas, la compétition ne fait plus apprendre ; elle fait seulement classer.\n\n' +
  'Faut-il alors bannir la compétition de l’école ? Je ne le crois pas, et c’est mon troisième point. ' +
  'Il me semble que les deux documents se rejoignent sur une idée essentielle : tout dépend de la forme. ' +
  'Le professeur conclut que la question n’est pas de savoir s’il faut de la compétition, mais laquelle, et ce qu’on fait de ceux qui perdent ; ' +
  'le rapport, de son côté, ne tranche ni pour ni contre et recommande d’en surveiller la forme. ' +
  'Je distinguerais donc trois formes. ' +
  'La première, la compétition entre équipes, associe la rivalité à la coopération : chacun y a un rôle, et le professeur du dossier fait même tourner ces rôles à chaque rallye : celui qui écrit, celui qui vérifie, celui qui présente.' +
  'La deuxième, la compétition avec soi-même, consiste à battre son propre record sans voir le score des autres ; et l’élève qui s’était sentie humiliée par le classement progresse aujourd’hui plus vite que la moyenne.' +
  'La troisième, le classement public des individus, est celle qu’il faut éviter, parce qu’elle transforme l’école en tribunal permanent. ' +
  'J’ajouterais une condition qui me paraît décisive : que perdre ne soit jamais définitif. ' +
  'Un rallye que l’on perd ce trimestre peut se gagner au suivant ; une place de dernier affichée au mur, elle, colle à la peau. ' +
  'Il faut aussi que la compétition reste un moyen et non une fin : le professeur du dossier consacre une heure, après chaque rallye, à revenir sur les énigmes avec toute la classe, parce que ce qui compte, dit-il, c’est ce que chacun a compris. ' +
  'Cela suppose enfin que l’enseignant observe ses élèves : la même compétition peut stimuler une classe et en blesser une autre, et il doit savoir y renoncer quand elle produit plus de découragement que d’élan, comme ce professeur l’a fait avec son classement.\n\n' +
  'Pour conclure, je répondrais oui à la question, mais à condition de bien choisir la compétition que l’on fait entrer dans la classe. ' +
  'Une compétition collective, ou contre soi-même, peut donner du sens aux apprentissages et préparer les élèves à une société où l’on est souvent comparé. ' +
  'Une compétition qui classe publiquement les individus risque au contraire d’écarter ceux que l’école devrait aider en priorité. ' +
  'L’école n’a pas à choisir entre la compétition et la bienveillance ; elle doit faire de la compétition un jeu dont on peut sortir perdant sans être exclu. ' +
  'Reste une question que je laisse ouverte : peut-on vraiment protéger les élèves de la compétition dans la classe, quand celle de l’orientation les attend quelques années plus tard ? ' +
  'Je vous remercie.';

export const PO2_EXPOSE: ExamTask = {
  ...base,
  id: taskId('po_monologue', '002'),
  taskType: 'po_monologue',
  skill: 'PO',
  label: 'Production orale · Sujet 2 · Exposé',
  prompt: exposePrompt('La compétition a-t-elle sa place à l’école ?'),
  prepS: 3600,
  timingS: 600,
  parts: [
    { label: 'Document 1', text: PO2_DOC_1, items: [] },
    { label: 'Document 2', text: PO2_DOC_2, items: [] },
  ],
  responseSpec: { kind: 'audio', minDurationS: 480, maxDurationS: 600 },
  modelAnswer: PO2_EXPOSE_MODEL,
  rubric: exposeRubric('Ici : distinguer les formes de compétition (entre équipes, contre soi-même, classement public des individus), et ne pas réduire la question à « pour ou contre les notes ».'),
  examinerNotes: [
    ...PO_NOTES,
    'Points du dossier exploitables : le rallye par équipes mélangées et ses effets sur des élèves effacés ; le classement individuel affiché une fois, puis abandonné ; Lina et le record personnel ; les rôles qui tournent ; la réaction partagée des parents et l’heure de retour sur les énigmes ; le jeu plus ancien que le marché ; deux collégiens sur trois motivés quand ils pensent gagner, un sur quatre quand ils s’attendent à perdre ; le classement public qui fige les positions ; les défis collectifs et les défis contre soi-même ; gagner qui devient le but ; une école déjà compétitive par l’orientation ; perdre ne doit jamais être définitif.',
    'Les exemples personnels du modèle (un concours de lecture entre classes, des notes lues à voix haute) sont donnés comme tels : ils montrent l’appui sur l’expérience que la consigne demande, ils ne sont pas tirés du dossier.',
    'Les deux documents se rejoignent plus qu’ils ne s’opposent : tous deux font dépendre la réponse de la forme de la compétition. Une copie qui les présente comme un simple pour et contre passe à côté de leur convergence.',
  ],
};

const PO2_DEBATE: ExamDebate = {
  question: 'La compétition a-t-elle sa place à l’école ?',
  opening: OPENING,
  clarify: {
    id: 'clarify',
    text: 'Avant d’aller plus loin, je voudrais être sûr de bien vous suivre. Selon vous, faut-il organiser des compétitions dans la classe, oui ou non ?',
    cues: [],
    covers: 'lever l’ambiguïté sur la position défendue',
  },
  sideCues: {
    // "pour" = the candidate holds that competition has a place at school.
    pour: [
      'la competition a sa place a l ecole', 'oui la competition', 'la competition motive', 'les enfants aiment se mesurer',
      'il faut des competitions par equipes', 'apprendre a gagner et a perdre', 'la competition prepare a la vie',
    ],
    contre: [
      'la competition n a pas sa place a l ecole', 'non la competition', 'la competition decourage', 'pas de classement',
      'l ecole doit etre un lieu protege', 'la cooperation plutot que la competition', 'la competition cree des inegalites',
    ],
  },
  axes: [
    /* ── against POUR: the candidate holds that competition has its place ── */
    {
      id: 'perdants',
      against: 'pour',
      about: 'ceux qui s’attendent à perdre',
      moves: [
        M('pe1', 'counter', 1,
          'Vous dites que la compétition motive. Mais selon le rapport, elle ne motive qu’un élève sur quatre parmi ceux qui s’attendent à perdre. Que faites-vous des trois autres ?',
          'les élèves découragés'),
        M('pe2', 'probe', 2,
          'Avez-vous connu, en classe ou ailleurs, quelqu’un qui a renoncé parce qu’il se savait battu d’avance ? Qu’est-ce qui aurait pu l’en empêcher ?',
          'l’expérience du candidat'),
        M('pe3', 'concession', 3,
          'Vous admettez que la compétition stimule surtout ceux qui réussissent déjà. Une école qui aide d’abord les meilleurs remplit-elle encore sa mission ?',
          'la concession retournée contre la mission de l’école'),
        M('pe-r', 'retreat', 1, RETREAT_TEXT, 'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'classement',
      against: 'pour',
      about: 'le classement et l’humiliation',
      moves: [
        M('cl1', 'counter-example', 1,
          'Le professeur a affiché un classement une seule fois, et une élève lui a dit qu’elle serait toujours en bas. Toute compétition ne finit-elle pas par produire un classement de ce genre ?',
          'la pente vers le classement'),
        M('cl2', 'probe', 2,
          'Même dans un rallye par équipes, les élèves savent qui a fait gagner l’équipe et qui l’a ralentie. Comment évite-t-on ce classement implicite ?',
          'le classement caché'),
        M('cl3', 'consequence', 3,
          'Si un enfant se voit dernier dès le collège, quelle image de lui-même emporte-t-il pour la suite de ses études ?',
          'les effets à long terme'),
      ],
    },
    {
      id: 'motivation',
      against: 'pour',
      about: 'apprendre pour gagner',
      moves: [
        M('mo1', 'counter', 1,
          'Le rapport observe que, lorsque gagner devient le but, certains élèves choisissent les tâches où ils sont sûrs de réussir. La compétition ne détourne-t-elle pas de l’envie de comprendre ?',
          'la motivation détournée'),
        M('mo2', 'probe', 2,
          'Concrètement, comment savoir si un élève travaille pour comprendre ou pour battre les autres ? Cela change-t-il quelque chose au résultat ?',
          'distinguer les motivations'),
        M('mo3', 'steelman', 3,
          'Je vous accorde que la compétition peut mettre en mouvement une classe. Mais un élève habitué à travailler pour gagner, que fera-t-il le jour où il n’y aura rien à gagner ?',
          'la dépendance à la récompense'),
      ],
    },
    {
      id: 'inegalites',
      against: 'pour',
      about: 'des points de départ inégaux',
      moves: [
        M('in1', 'counter', 1,
          'Tous les élèves n’arrivent pas avec les mêmes chances : certains sont aidés à la maison, d’autres non. Une compétition entre eux est-elle vraiment loyale ?',
          'l’inégalité des chances'),
        M('in2', 'probe', 2,
          'Comment organiseriez-vous une compétition qui ne récompense pas simplement ceux qui partent avec de l’avance ?',
          'corriger les écarts de départ'),
        M('in3', 'consequence', 3,
          'Si la compétition récompense ceux qui sont déjà favorisés, l’école ne risque-t-elle pas de transformer des inégalités sociales en mérite apparent ?',
          'l’inégalité déguisée en mérite'),
      ],
    },

    /* ── against CONTRE: the candidate holds that competition has no place ── */
    {
      id: 'deja',
      against: 'contre',
      about: 'une école déjà compétitive',
      moves: [
        M('de1', 'counter', 1,
          'Le rapport rappelle que l’orientation et les examens reposent déjà sur des comparaisons. Refuser la compétition en classe, n’est-ce pas simplement la repousser à plus tard ?',
          'l’école déjà compétitive'),
        M('de2', 'probe', 2,
          'Où un élève apprendra-t-il à perdre sans que ce soit grave, si ce n’est à l’école ?',
          'apprendre à perdre'),
        M('de3', 'concession', 3,
          'Vous reconnaissez que la sélection existe de toute façon. Si on ne prépare pas les élèves à la vivre, qui sera le plus désavantagé le jour venu ?',
          'la concession retournée : les moins préparés'),
        M('de-r', 'retreat', 1, RETREAT_TEXT, 'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'equipes',
      against: 'contre',
      about: 'la compétition par équipes',
      moves: [
        M('eq1', 'counter-example', 1,
          'Dans le rallye, des élèves qui ne parlaient jamais ont expliqué des solutions à leurs camarades. N’est-ce pas exactement ce que l’école cherche à obtenir ?',
          'l’effet du rallye'),
        M('eq2', 'probe', 2,
          'La coopération à l’intérieur d’une équipe et la rivalité entre équipes : est-ce vraiment contradictoire, selon vous ?',
          'coopération et rivalité'),
        M('eq3', 'steelman', 3,
          'Votre meilleur argument est que la compétition blesse. Mais le rapport montre que les défis collectifs aident aussi les élèves en difficulté. Votre refus ne prive-t-il pas justement ceux que vous voulez protéger ?',
          'le refus qui prive les plus fragiles'),
      ],
    },
    {
      id: 'jeu',
      against: 'contre',
      about: 'le goût du défi',
      moves: [
        M('je1', 'counter', 1,
          'Les enfants adorent se mesurer, à la récréation comme dans un match. Pourquoi l’école devrait-elle se priver de ce goût du défi ?',
          'le plaisir de se mesurer'),
        M('je2', 'probe', 2,
          'Et vous, enfant, quels jeux ou quels défis vous ont donné envie de progresser ?',
          'l’expérience personnelle du candidat'),
        M('je3', 'consequence', 3,
          'Si l’on accepte la compétition en sport, pourquoi la refuser en mathématiques ? Qu’est-ce qui rend l’une acceptable et l’autre non ?',
          'la cohérence entre les disciplines'),
      ],
    },
    {
      id: 'record',
      against: 'contre',
      about: 'la compétition avec soi-même',
      moves: [
        M('rc1', 'counter', 1,
          'Battre son propre record, sans voir le score des autres : est-ce encore de la compétition, et cette forme-là vous paraît-elle aussi dangereuse ?',
          'le record personnel'),
        M('rc2', 'probe', 2,
          'L’élève qui s’était sentie humiliée progresse aujourd’hui plus vite que la moyenne. Comment expliquez-vous ce changement ?',
          'l’effet du défi personnel'),
        M('rc3', 'consequence', 3,
          'Si l’on supprime toute forme de défi, comment un élève mesure-t-il ses propres progrès ?',
          'mesurer ses progrès'),
      ],
    },
  ],
  closing: CLOSING,
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
  // Written from the "pour" side (competition has a place, under conditions),
  // answering the losers and unequal-start axes: a real concession, then the
  // thesis kept and narrowed.
  modelAnswer:
    'Vous avez raison, et c’est sans doute le point le plus difficile de mon exposé : la compétition motive d’abord ceux qui pensent pouvoir gagner. ' +
    'Un élève qui se sait battu d’avance n’a aucune raison de faire un effort, et je l’ai vu moi-même dans des classes où l’on lisait les notes à voix haute.\n\n' +
    'Mais c’est justement pour cela que je ne défends pas n’importe quelle compétition. ' +
    'Dans un rallye où les équipes sont composées par le professeur, en mélangeant les niveaux, personne ne part battu : l’équipe a besoin de chacun, et la victoire dépend aussi de celui qui avait l’habitude de se taire. ' +
    'Et dans un défi contre soi-même, la seule personne à battre, c’est celle qu’on était la semaine précédente.\n\n' +
    'Sur l’inégalité des points de départ, je vous rejoins davantage. ' +
    'Une compétition individuelle entre des élèves qui ne sont pas aidés de la même manière à la maison n’est pas loyale, et elle risque de faire passer un avantage social pour du mérite. ' +
    'Je préciserais donc ma position : la compétition a sa place à l’école quand elle compare des équipes équilibrées ou des progrès personnels, jamais quand elle classe des individus dont les chances sont inégales.\n\n' +
    'Et je maintiens l’essentiel. ' +
    'Supprimer toute compétition ne protégerait pas les élèves les plus fragiles ; ils la découvriraient plus tard, au moment de l’orientation, sans y avoir été préparés. ' +
    'Mieux vaut qu’ils apprennent à gagner et à perdre dans un cadre où perdre n’est jamais définitif.',
  debate: PO2_DEBATE,
  rubric: entretienRubric('Ici : tenir la distinction entre une compétition qui fait apprendre et une compétition qui classe, face à l’objection des perdants ou à celle d’une école déjà sélective.'),
  examinerNotes: [
    ...PO_NOTES,
    'Le jury conteste la position prise dans l’exposé, quelle qu’elle soit, puis élargit au-delà du dossier (sport scolaire, souvenirs de classe du candidat, sélection après le lycée).',
  ],
};
