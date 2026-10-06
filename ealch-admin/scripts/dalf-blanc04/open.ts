// DALF C1 blanc-04: Production écrite (25 points, 2 h 30) and Production orale
// (25 points, 1 h of preparation then about 30 min).
//
// ── PE: one dossier, two tasks ──────────────────────────────────────────────
//
// DALF-44 · marks at school. The synthèse REPORTS the dossier in 200 to 240
// words; the essai ARGUES a different question on the same theme, from a
// stated role to a stated addressee, in a real genre (a letter from a parents'
// representative to a collège's governing board on replacing marks with
// skills reports). Decision 36: the essai repeats the synthèse dossier in its
// own parts, same labels and texts, so the grader marking the essai sees the
// documents it draws on.
//
// The three documents cross rather than oppose: a news report (what one
// collège gained and what it lost after three years without marks), a
// researcher's column (marks crowd out the comment; a skills grid can be a
// disguised mark), a parents' bulletin (marks as a code every family reads;
// jargon shuts some parents out). Each brings at least two ideas the others
// lack, and they share three ties a plan can use: anxiety and motivation (1
// and 2), what parents can read (1 and 3), the grid that turns opaque or into
// a disguised mark (2 and 3); comparison between pupils survives the reform
// (1 and 2). The eight information units are listed in the synthèse's
// examinerNotes, in the order the model answer uses them.
//
// ── PO: two subjects drawn, one chosen ──────────────────────────────────────
//
// DALF-54 « La ville doit-elle être pensée pour les enfants ? » (communaute)
// and DALF-57 « Le journalisme peut-il être neutre ? » (journalisme). Each is
// an exposé (po_monologue, one hour of preparation, a two-document dossier of
// different kinds, 8 to 10 min) and an entretien (po_debate, 15 to 20 min).
// The débat banks attack both sides, four axes a side, twelve non-retreat
// moves a side, with a concession probe and a retreat move on each side.
//
// Rubrics: synthèse 13, essai 12, exposé 13, entretien 12, each criterion with
// three descriptors in the order « en dessous du niveau / C1 / C1+ »
// (STANDARD-dalf-c1 §7). Our own wording; the examinerNotes say so.
//
// The model synthèse and the model exposés say only what their dossier says;
// the exposés add the candidate's own examples, announced as such, which is
// what the task asks for.
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

/* ═══ PRODUCTION ÉCRITE · LE DOSSIER (DALF-44) ════════════════════════════ */

// INVENTED: the collège de la Verrière at Morlanges and its 540 pupils, « Le
// Courrier de l’Arnave », three years without marks in sixième and cinquième,
// the four levels and the thirty-odd skills, the internal survey (58 % of
// pupils anxious before a test, then 34 %), the principal Nathalie Brévost,
// the teachers' extra hours, the father Frédéric Langlade.
const DOC_1 =
  'AU COLLÈGE DE LA VERRIÈRE, LES NOTES ONT DISPARU, PAS LES QUESTIONS\n' +
  'Le Courrier de l’Arnave, édition du dimanche\n\n' +
  'Il y a trois ans, le collège de la Verrière, à Morlanges, a supprimé les notes chiffrées en sixième et en cinquième. ' +
  'À la place du traditionnel « 12 sur 20 », les cinq cent quarante élèves de l’établissement, ou du moins les plus jeunes d’entre eux, ' +
  'reçoivent un bilan qui situe chacun, pour une trentaine de compétences, sur quatre niveaux : « non atteint », « en cours », « atteint » et « dépassé ».\n\n' +
  'Le premier effet mesuré concerne le climat de la classe. ' +
  'Selon une enquête interne, la part des élèves qui se disent angoissés avant une évaluation est passée de cinquante-huit à trente-quatre pour cent. ' +
  '« Les élèves en difficulté n’ont plus l’impression d’être réduits à un chiffre, explique la principale, Nathalie Brévost. Ils osent rendre un travail inachevé, poser une question, se tromper. » ' +
  'Plusieurs enseignants confirment que les copies blanches, rendues par peur d’une mauvaise note, sont devenues rares.\n\n' +
  'Le changement a un coût pour les professeurs. ' +
  'Remplir les grilles, rédiger des appréciations précises, recevoir les familles : beaucoup estiment y consacrer plusieurs heures de plus chaque trimestre, ' +
  'et certains reconnaissent cocher les cases un peu vite en fin de période.\n\n' +
  'Chez les parents, l’accueil est partagé. ' +
  'Certains apprécient un document qui détaille ce que leur enfant sait faire. ' +
  'D’autres se disent perdus. « Un 9 sur 20, je savais ce que ça voulait dire, résume Frédéric Langlade, père d’un élève de cinquième. ' +
  'Quatorze cases “en cours”, je ne sais pas si mon fils est en train de décrocher ou s’il progresse normalement. »\n\n' +
  'Quant aux élèves, ils n’ont pas renoncé à se comparer. ' +
  'Dans la cour, les niveaux sont aussitôt traduits en équivalents chiffrés, et chacun sait qui a obtenu le plus de « dépassé ». ' +
  'La hiérarchie n’a pas disparu ; elle a seulement changé de vocabulaire.';

// INVENTED: the researcher Armelle Vasseur, « Les Cahiers de la classe », the
// experiment of her laboratory (some three hundred pupils, three groups: a mark
// alone, a comment alone, both).
const DOC_2 =
  'CE N’EST PAS LE CHIFFRE QUI POSE PROBLÈME, C’EST QU’IL ARRIVE SEUL\n' +
  'Tribune d’Armelle Vasseur, chercheuse en sciences de l’éducation, Les Cahiers de la classe\n\n' +
  'Le débat sur les notes est souvent mal posé. ' +
  'On oppose ceux qui veulent les garder, au nom de l’exigence, à ceux qui veulent les supprimer, au nom du bien-être des élèves. ' +
  'Or la question décisive n’est ni l’exigence ni le confort : c’est ce que l’élève fait de l’information qu’on lui rend.\n\n' +
  'Une expérience menée dans notre laboratoire auprès d’environ trois cents collégiens l’illustre. ' +
  'Après un même devoir, un premier groupe a reçu seulement une note, un deuxième seulement une appréciation détaillée, un troisième les deux. ' +
  'Au devoir suivant, c’est le deuxième groupe qui a le plus progressé. ' +
  'Le troisième, lui, n’a pas fait mieux que le premier. ' +
  'Les entretiens menés ensuite l’expliquent : lorsqu’ils reçoivent à la fois une note et un commentaire, la plupart des élèves regardent la note et ne lisent pas le commentaire. ' +
  'Le chiffre écrase tout ce qui l’accompagne.\n\n' +
  'La note a un second effet, plus insidieux : elle déplace le but du travail. ' +
  'L’élève finit par travailler pour la note plutôt que pour apprendre, choisit les exercices où il est sûr de réussir et évite ceux où il pourrait progresser. ' +
  'Une erreur devient une perte de points au lieu d’être une étape.\n\n' +
  'Faut-il en conclure que supprimer les notes suffit ? Certainement pas. ' +
  'D’abord, les élèves se classent entre eux, avec ou sans chiffres ; aucune réforme n’abolira ce besoin de se situer. ' +
  'Ensuite, une grille de compétences mal conçue n’est qu’une note déguisée : quatre couleurs au lieu de vingt points, ' +
  'c’est la même hiérarchie, en moins précis, et souvent en moins lisible. ' +
  'Enfin, une appréciation vague, du type « peut mieux faire », n’apprend rien de plus qu’un 11 sur 20.\n\n' +
  'Ce qui fait progresser, ce n’est donc pas l’absence de note, c’est une indication précise de ce qui a été réussi et de ce qu’il faut faire ensuite. ' +
  'Ce retour peut accompagner un chiffre, à condition que le chiffre ne vienne qu’après, ou qu’il soit rendu une fois le commentaire lu. ' +
  'Le vrai choix n’est pas entre noter et ne pas noter. Il est entre évaluer pour classer et évaluer pour faire avancer.';

// INVENTED: the parents' association bulletin « Entre parents » of the
// collèges of the Arnave valley and its president Odile Lacombe.
const DOC_3 =
  'CE QUE LISENT LES PARENTS\n' +
  'Éditorial d’Odile Lacombe, présidente de l’association des parents d’élèves, bulletin Entre parents\n\n' +
  'On parle beaucoup de ce que l’évaluation apporte aux élèves. On parle moins de ce qu’elle dit aux familles. ' +
  'Pour beaucoup de parents, le bulletin trimestriel est le seul lien régulier avec l’école, et la note en était le code commun. ' +
  'Un parent qui n’a pas fait d’études longues, qui travaille en horaires décalés ou qui n’a jamais osé franchir la porte du collège sait lire un 8 sur 20 : il sait qu’il faut s’inquiéter.\n\n' +
  'Les nouveaux bilans de compétences sont pleins de bonnes intentions. ' +
  'Mais combien de familles savent ce que signifie « mobiliser des stratégies de lecture adaptées à l’objectif visé » ? ' +
  'Ces formules ont été écrites par des spécialistes pour des spécialistes. ' +
  'Les parents qui les comprennent sont souvent ceux qui auraient su aider leur enfant de toute façon. ' +
  'Les autres reçoivent un document qu’ils ne peuvent pas interpréter et n’osent pas demander qu’on le leur explique. ' +
  'Une réforme pensée pour réduire les inégalités risque ainsi de les creuser, en donnant un avantage à ceux qui maîtrisent déjà le vocabulaire de l’école.\n\n' +
  'Il y a aussi la question du calendrier. ' +
  'Supprimer les notes au début du collège ne les supprime pas pour toujours : elles reviennent plus tard, quand se décide la suite des études. ' +
  'Un enfant qui n’a jamais vu de chiffre risque alors de découvrir brutalement où il se situe, au moment où cela compte le plus.\n\n' +
  'Nous ne demandons pas le retour au passé. ' +
  'Nous demandons que chaque bilan s’ouvre sur quelques phrases simples, écrites pour nous : ce que notre enfant maîtrise, ce qu’il doit travailler en priorité, et comment nous pouvons l’aider à la maison. ' +
  'Une évaluation que les parents ne comprennent pas n’est pas une évaluation plus juste. C’est une évaluation à laquelle on les a retirés.';

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
        'En dessous du niveau : le texte ajoute des idées absentes du dossier, prend parti pour ou contre les notes, ou déforme la position d’un document.',
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
        'C1+ : le thème est formulé comme une tension précise (ce que l’évaluation dit à l’élève et ce qu’elle dit à sa famille) et toutes les informations clés sont hiérarchisées.',
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
  'Supprimer les notes chiffrées au collège revient à s’interroger sur ce que l’évaluation transmet, d’une part aux élèves, d’autre part à leurs familles.\n\n' +
  'Du côté des élèves, l’abandon du chiffre a des effets constatés. ' +
  'Dans un établissement qui l’a expérimenté, l’anxiété avant les contrôles a nettement reculé et les élèves fragiles prennent davantage de risques. ' +
  'Une expérience conduite auprès de collégiens éclaire ce constat : accompagnée d’une note, l’appréciation n’est guère lue, ' +
  'si bien qu’un commentaire seul fait davantage progresser ; la note pousse en outre à viser les points plutôt que l’apprentissage.\n\n' +
  'Encore faut-il que l’outil de remplacement soit pertinent. ' +
  'Une grille de compétences mal conçue reproduit le classement sous une forme moins précise, et les élèves continuent d’ailleurs de se comparer en convertissant les niveaux en chiffres. ' +
  'Pour les enseignants, ces bilans représentent en outre une charge supplémentaire.\n\n' +
  'Reste enfin la question de la lisibilité pour les familles. ' +
  'Habitués à un code partagé, certains parents ne savent plus si leur enfant progresse, ' +
  'et le jargon des bilans pénalise surtout ceux qui maîtrisent mal le vocabulaire scolaire, au risque d’aggraver les inégalités. ' +
  'Comme les notes réapparaissent lorsque se joue l’orientation, leur suppression peut aussi ne faire que différer le choc. ' +
  'Deux pistes sont enfin avancées : indiquer précisément ce qui est acquis et ce qu’il reste à faire, et rédiger pour les parents quelques phrases claires.';

export const PE_SYNTHESE: ExamTask = {
  ...base,
  id: taskId('pe_short', '001'),
  taskType: 'pe_short',
  skill: 'PE',
  label: 'Production écrite · Synthèse de documents',
  prompt:
    'PRODUCTION ÉCRITE · 25 points · 2 h 30 pour les deux exercices\n\n' +
    'Exercice 1 · Synthèse de documents (13 points)\n\n' +
    'Lisez les trois documents ci-dessous, qui portent sur l’évaluation des élèves au collège. ' +
    'Rédigez une synthèse de ces documents en 200 à 240 mots.\n\n' +
    'Votre synthèse est un texte unique, suivi, avec un titre si vous le souhaitez. ' +
    'Elle dégage le thème commun aux documents et regroupe leurs informations selon un plan qui vous est propre, ' +
    'au lieu de les résumer l’un après l’autre.\n' +
    'N’ajoutez aucune idée qui ne figure pas dans les documents et ne donnez pas votre avis.\n' +
    'Vous pouvez reprendre les mots clés des documents, mais pas des phrases ou des passages entiers.\n' +
    'Est considéré comme un mot tout ce qui se trouve entre deux espaces : « c’est-à-dire » compte pour un mot, « l’élève » aussi.',
  timingS: 4500,
  parts: peDossier(),
  responseSpec: { kind: 'text', minWords: 200, maxWords: 240 },
  modelAnswer: SYNTHESE_MODEL,
  rubric: SYNTHESE_RUBRIC,
  examinerNotes: [
    ...NOTES_OPEN,
    'Points d’information attendus, dans l’ordre du modèle : (1) supprimer les notes pose la question de ce que l’évaluation transmet aux élèves et aux familles (doc. 1, 2, 3) ; ' +
      '(2) sans notes, moins d’angoisse avant les évaluations et des élèves fragiles qui osent davantage (doc. 1) ; ' +
      '(3) note et commentaire ensemble : le commentaire n’est pas lu ; le commentaire seul fait le plus progresser (doc. 2) ; ' +
      '(4) la note pousse à travailler pour les points et à éviter le risque (doc. 2) ; ' +
      '(5) une grille mal conçue est une note déguisée, moins précise ; les élèves continuent de se comparer et convertissent les niveaux en chiffres (doc. 1 et 2) ; ' +
      '(6) une charge de travail supplémentaire pour les enseignants (doc. 1) ; ' +
      '(7) des parents qui ne comprennent plus les bilans ; un jargon qui avantage les familles déjà familières de l’école et peut creuser les inégalités ; le retour des notes au moment de l’orientation (doc. 1 et 3) ; ' +
      '(8) deux propositions : un retour précis sur ce qui est réussi et ce qu’il faut faire ensuite (doc. 2), quelques phrases simples pour les parents (doc. 3).',
    'Une bonne copie croise au moins deux de ces liens : l’angoisse et la motivation (doc. 1 et 2), ce que les parents peuvent lire (doc. 1 et 3), la grille opaque ou déguisée (doc. 2 et 3), la comparaison qui survit à la réforme (doc. 1 et 2).',
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
        'En dessous du niveau : position absente, hésitante ou contradictoire ; arguments juxtaposés, peu développés, sans exemple.',
        'C1 : position claire et défendue ; arguments développés, illustrés d’exemples concrets ; au moins une objection prise en compte.',
        'C1+ : argumentation persuasive et nuancée ; l’objection est intégrée et retournée ; les conditions ou la proposition sont précises et réalisables.',
      ],
    },
    {
      key: 'coherence',
      label: 'Cohérence et cohésion',
      maxPoints: 3,
      descriptors: [
        'En dessous du niveau : progression peu visible ; connecteurs rares, répétitifs ou mal employés.',
        'C1 : texte structuré, paragraphes logiques ; connecteurs variés qui portent l’argumentation.',
        'C1+ : progression maîtrisée de l’ouverture à la chute ; articulations fines (concession, gradation, reprise).',
      ],
    },
    {
      key: 'destinataire',
      label: 'Adéquation au genre et au destinataire',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : conventions de la lettre absentes ; registre inadapté à une instance officielle ; le rôle de représentant des parents n’apparaît pas.',
        'C1 : formules d’appel et de congé adaptées ; registre soutenu tenu ; le scripteur parle au nom des parents et s’adresse aux membres du conseil.',
        'C1+ : posture de représentant exploitée (relayer des inquiétudes, engager les familles) ; ton ferme et constructif ; demandes formulées pour être votées.',
      ],
    },
    {
      key: 'lexique',
      label: 'Lexique',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : vocabulaire limité ou imprécis ; reprises massives des documents ; orthographe fautive.',
        'C1 : lexique étendu, concret et abstrait, précis sur l’évaluation et la scolarité ; orthographe correcte.',
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
  'Madame la Principale,\n' +
  'Mesdames et Messieurs les membres du conseil d’administration,\n\n' +
  'Vous examinerez lors de votre prochaine séance le projet de remplacer, dès la rentrée, les notes chiffrées par des bilans de compétences en sixième et en cinquième. ' +
  'Au nom des parents d’élèves que je représente, je souhaite vous dire que nous ne nous opposons pas à cette réforme, mais que nous ne pourrons la soutenir qu’à trois conditions.\n\n' +
  'Nous mesurons d’abord ce qu’elle peut apporter. ' +
  'Beaucoup d’entre nous ont vu un enfant se décourager devant une suite de mauvaises notes, ' +
  'jusqu’à ne plus rendre ses devoirs plutôt que de risquer un nouveau zéro. ' +
  'Si un bilan précis peut lui montrer ce qu’il a déjà acquis et ce qu’il lui reste à travailler, nous y sommes favorables.\n\n' +
  'Cependant, une évaluation n’est utile que si elle est comprise. ' +
  'Or, lors de notre réunion du mois dernier, plusieurs familles nous ont confié qu’elles ne savaient pas lire les livrets actuels, ' +
  'remplis de formules techniques. Ce sont souvent les parents les plus éloignés de l’école, ceux qui auraient le plus besoin d’être informés. ' +
  'Une réforme qui les laisserait de côté manquerait son but.\n\n' +
  'Nous vous demandons donc, premièrement, que chaque bilan commence par trois ou quatre phrases rédigées en termes simples, ' +
  'indiquant ce que l’élève maîtrise, ce qu’il doit travailler en priorité et la façon dont les familles peuvent l’aider. ' +
  'Deuxièmement, qu’une réunion d’explication soit proposée à tous les parents avant la fin du premier trimestre, à des horaires compatibles avec le travail. ' +
  'Troisièmement, que l’on prépare dès la quatrième le retour des notes, afin que nos enfants ne les découvrent pas brutalement au moment de leur orientation.\n\n' +
  'Certains objecteront que ces mesures alourdiront la tâche des professeurs. ' +
  'Nous le savons et nous sommes prêts à y contribuer en aidant à organiser les réunions. ' +
  'Mais une réforme qui changerait l’évaluation sans changer la manière de la communiquer ne ferait que déplacer les difficultés.\n\n' +
  'Nous vous prions d’agréer, Madame la Principale, Mesdames et Messieurs, l’expression de notre profond respect.\n\n' +
  'La représentante des parents d’élèves';

export const PE_ESSAI: ExamTask = {
  ...base,
  id: taskId('pe_essay', '001'),
  taskType: 'pe_essay',
  skill: 'PE',
  label: 'Production écrite · Essai argumenté',
  prompt:
    'Exercice 2 · Essai argumenté (12 points)\n\n' +
    // INVENTED: the collège Albert-Fréjus at Lanvières and its board's project.
    'Le conseil d’administration du collège Albert-Fréjus, à Lanvières, doit se prononcer sur un projet : ' +
    'remplacer dès la rentrée prochaine les notes chiffrées par des bilans de compétences en sixième et en cinquième.\n\n' +
    'Représentant élu des parents d’élèves, vous adressez au conseil d’administration une lettre ' +
    'dans laquelle vous prenez position sur ce projet, au nom des familles, et formulez des demandes précises.\n\n' +
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
    'Genre attendu : une lettre formelle à une instance (le conseil d’administration, présidé par le chef d’établissement). Formules d’appel et de congé, registre soutenu, posture de représentant qui parle au nom des familles.',
    'Toutes les positions sont recevables : soutenir le projet, le refuser, le soutenir sous conditions. Ce qui est noté, c’est la défense de la position, la prise en compte d’une objection et la précision des demandes.',
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

const SUBJECTS = '« La ville doit-elle être pensée pour les enfants ? » ou « Le journalisme peut-il être neutre ? »';

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

/* ═══ PRODUCTION ORALE · SUJET 1 (DALF-54) · La ville et les enfants ══════ */

// INVENTED: the town of Castelvert, the deputy mayor Margaux Teyssier, the
// twelve « rues scolaires » closed to cars for half an hour at the start and
// the end of the school day, the share of pupils walking to school alone or
// with friends (18 % four years ago, 31 % now), the delivery firms' and
// shopkeepers' complaints, the fenced play areas.
const PO1_DOC_1 =
  '« UN ENFANT DE HUIT ANS EST UN BON INSTRUMENT DE MESURE »\n' +
  'Entretien avec Margaux Teyssier, adjointe à l’urbanisme de Castelvert, paru dans le magazine municipal\n\n' +
  'Castelvert a fermé une douzaine de rues aux voitures aux heures d’école. Pourquoi ?\n' +
  'Parce que nous avons regardé une chose très simple : combien d’enfants vont seuls à l’école. ' +
  'Il y a quatre ans, à peine dix-huit pour cent des élèves des écoles primaires venaient à pied, seuls ou entre camarades. ' +
  'Leurs parents, eux, y étaient allés seuls à leur âge, presque tous. ' +
  'Ce n’est pas que les enfants aient changé, c’est que la rue a changé : plus de voitures, plus rapides, des trottoirs encombrés, des carrefours que personne n’oserait traverser à huit ans. ' +
  'Nous avons donc créé douze « rues scolaires », fermées à la circulation une demi-heure à l’entrée et à la sortie des classes, élargi des trottoirs et marqué au sol des itinéraires sûrs. ' +
  'Aujourd’hui, trente et un pour cent des élèves viennent seuls ou entre amis.\n\n' +
  'Tout le monde n’est pas convaincu…\n' +
  'Non, et je le comprends. Les livreurs ont dû revoir leurs tournées, certains commerçants ont craint de perdre des clients, ' +
  'et des parents qui déposent leur enfant en voiture avant d’aller travailler nous ont reproché de leur compliquer la vie. ' +
  'Nous avons ajusté les horaires, prévu des places de dépose un peu plus loin. Mais nous n’avons pas renoncé.\n\n' +
  'Pourquoi faire de l’enfant la mesure de la ville ?\n' +
  'Parce que c’est un excellent instrument de mesure. ' +
  'Un trottoir qu’un enfant de huit ans peut parcourir seul, c’est un trottoir où une personne âgée marche sans crainte, où un parent pousse une poussette, où une personne en fauteuil passe sans obstacle. ' +
  'Quand on aménage pour l’enfant, on aménage pour tous ceux que la ville a oubliés en se pensant d’abord pour l’automobiliste pressé. ' +
  'L’enfant n’est pas un usager parmi d’autres ; il révèle ce qui ne va pas.\n\n' +
  'Les enfants ont pourtant déjà leurs espaces : les aires de jeux, les parcs…\n' +
  'C’est justement ce que je conteste. On a construit des aires de jeux clôturées, avec un sol amortissant et un panneau à l’entrée, ' +
  'et l’on a considéré que le reste de la ville n’était pas pour eux. ' +
  'Un enfant ne joue pas seulement dans un enclos. Il joue sur le chemin, sur un muret, au pied de son immeuble. ' +
  'Il apprend la ville en la traversant : à se repérer, à évaluer un danger, à saluer le boulanger. ' +
  'Un enfant qu’on transporte de porte à porte sur la banquette arrière ne découvre rien de tout cela.\n\n' +
  'Et si l’on vous dit que c’est une ville pour les familles, pas pour tout le monde ?\n' +
  'Je réponds que nous avons tous été des enfants, et que nous serons presque tous, un jour, des personnes âgées qui marchent lentement. ' +
  'Une ville pensée pour les enfants n’est pas une ville réservée aux enfants. C’est une ville qui accepte qu’on y circule à la vitesse d’un pas.';

// INVENTED: the sociologist Rémi Castagnet and the weekly « L’Hebdo des
// territoires »; no figure attributed.
const PO1_DOC_2 =
  'UNE VILLE POUR LES ENFANTS, MAIS LESQUELS ?\n' +
  'Chronique de Rémi Castagnet, sociologue, dans L’Hebdo des territoires\n\n' +
  'Il est devenu difficile de critiquer la ville « à hauteur d’enfant ». ' +
  'Qui serait contre des rues apaisées, des trottoirs larges et des écoliers qui marchent seuls ? Pas moi. ' +
  'La domination de l’automobile sur l’espace urbain est un fait, et ceux qui en paient le prix sont d’abord les plus vulnérables. ' +
  'Mais une bonne intention n’est pas une politique, et celle-ci mérite qu’on en examine les angles morts.\n\n' +
  'Le premier tient à l’âge des enfants qu’on a en tête. ' +
  'Quand une municipalité parle des enfants, elle pense presque toujours aux moins de dix ans : ceux qu’on emmène au square et dont on photographie le sourire sur les affiches. ' +
  'Les adolescents, eux, sont rarement les bienvenus. ' +
  'Dans bien des quartiers « pensés pour les enfants », on retire les bancs où les jeunes se retrouvent le soir et l’on installe des caméras près des terrains de sport. ' +
  'Le même groupe de quinze ans qui ferait sourire à huit ans devient, quelques années plus tard, un problème de tranquillité publique.\n\n' +
  'Le deuxième angle mort est social. ' +
  'Un quartier qui devient sûr, calme et verdoyant devient aussi recherché, et donc plus cher. ' +
  'Les familles aisées s’y installent, les loyers montent, et les familles modestes qui y vivaient partent vers des quartiers où les rues n’ont pas été apaisées. ' +
  'La ville pensée pour les enfants risque alors de devenir une ville pensée pour certains enfants, ceux dont les parents peuvent se l’offrir.\n\n' +
  'Le troisième est plus discret. ' +
  'À force de vouloir protéger l’enfant, on finit parfois par le surveiller. ' +
  'Une ville entièrement balisée, où chaque parcours est fléché, chaque espace sécurisé, chaque adulte un éducateur potentiel, ' +
  'ressemble moins à une ville qu’à une garderie à ciel ouvert. ' +
  'Or l’enfant n’a pas seulement besoin de sécurité ; il a besoin d’un peu d’imprévu, de recoins qu’aucun adulte n’a prévus pour lui, d’une liberté qu’on ne lui accorde pas sous condition.\n\n' +
  'La ville, enfin, est faite de cohabitations. ' +
  'Elle doit loger le sommeil de ceux qui travaillent la nuit, le calme que réclament les plus âgés, le bruit des terrasses, les livraisons du matin. ' +
  'La penser pour un seul usager, fût-il le plus sympathique, c’est oublier qu’elle est précisément le lieu où des besoins contraires doivent apprendre à se supporter. ' +
  'Je préférerais qu’on la pense avec les enfants, en leur demandant ce qu’ils veulent, plutôt que pour eux, à leur place.';

const PO1_EXPOSE_MODEL =
  'Bonjour. Le sujet que j’ai choisi pose la question suivante : la ville doit-elle être pensée pour les enfants ? ' +
  'À première vue, la réponse semble aller de soi : qui oserait dire que la ville ne doit pas tenir compte des plus jeunes ? ' +
  'Pourtant, la formulation est exigeante. Elle ne demande pas si la ville doit faire une place aux enfants, mais si elle doit être pensée pour eux, ' +
  'c’est-à-dire si l’enfant doit devenir le critère à partir duquel on conçoit l’espace urbain. ' +
  'Le dossier comporte deux documents. Le premier est un entretien avec l’adjointe à l’urbanisme d’une ville qui a fermé des rues aux voitures aux heures d’école. ' +
  'Le second est la chronique d’un sociologue qui, sans rejeter cette démarche, en signale les angles morts. ' +
  'Je me demanderai donc si faire de l’enfant la mesure de la ville profite à tous, ou si cela risque d’en exclure certains. ' +
  'Je montrerai d’abord que l’enfant est un révélateur utile des défauts de la ville actuelle ; ' +
  'ensuite, que penser la ville pour lui seul comporte des risques réels ; ' +
  'enfin, je proposerai de distinguer une ville pensée pour les enfants d’une ville pensée avec eux.\n\n' +
  'Commençons par ce qui plaide en faveur de la question. ' +
  'L’adjointe part d’un constat frappant : il y a quatre ans, moins d’un écolier sur cinq venait seul à l’école, alors que la plupart de leurs parents l’avaient fait à leur âge. ' +
  'Ce n’est pas l’enfant qui a changé, c’est la rue, envahie par des voitures plus nombreuses et plus rapides. ' +
  'Après la création de rues fermées à la circulation aux heures d’entrée et de sortie, la proportion est passée à près d’un tiers. ' +
  'L’argument le plus intéressant, à mon avis, est celui de l’« instrument de mesure » : un trottoir qu’un enfant de huit ans peut parcourir seul est aussi un trottoir sûr pour une personne âgée, ' +
  'pour un parent avec une poussette ou pour une personne en fauteuil. ' +
  'Autrement dit, l’enfant ne serait pas un usager privilégié, mais un indicateur de ce qui ne va pas. ' +
  'J’ajouterais un exemple personnel. Dans la ville où j’ai grandi, l’école était à dix minutes à pied, mais il fallait traverser une avenue à quatre voies. ' +
  'Mes parents m’y ont accompagné jusqu’à onze ans, non parce que la distance était longue, mais parce que ce carrefour était dangereux. ' +
  'Un simple feu mieux réglé aurait changé mon quotidien, et sans doute celui de beaucoup de personnes âgées du quartier. ' +
  'L’adjointe insiste aussi sur un point qui me paraît essentiel : un enfant apprend la ville en la traversant. ' +
  'Il apprend à se repérer, à évaluer un danger, à saluer les commerçants. ' +
  'Enfermer le jeu dans des aires clôturées, c’est lui signifier que le reste de la ville ne le concerne pas. ' +
  'Les opposants n’ont d’ailleurs pas été ignorés : la ville a ajusté les horaires et prévu des places de dépose un peu plus loin, ce qui montre qu’un tel projet peut se négocier. ' +
  'Dans ce premier sens, penser la ville pour les enfants, c’est simplement corriger une ville qui a été pensée d’abord pour l’automobile.\n\n' +
  'Cependant, et c’est mon deuxième point, faire de l’enfant le critère unique soulève de vraies difficultés, que le sociologue met bien en évidence. ' +
  'Il ne rejette pas les rues apaisées ; il rappelle simplement qu’une bonne intention n’est pas une politique, et qu’il faut en examiner les angles morts. ' +
  'La première concerne l’âge. Quand on parle des enfants, on pense en général aux plus petits, à ceux qu’on emmène au square. ' +
  'Les adolescents, eux, sont souvent indésirables : on retire les bancs où ils se retrouvent, on installe des caméras près des terrains de sport. ' +
  'La ville « à hauteur d’enfant » peut ainsi devenir hostile à ces mêmes enfants quelques années plus tard. ' +
  'La deuxième difficulté est sociale, et c’est peut-être la plus sérieuse. ' +
  'Un quartier rendu calme et sûr devient recherché ; les loyers augmentent, et les familles modestes partent vers des quartiers moins agréables. ' +
  'On risque alors de construire une ville pensée pour certains enfants seulement, ceux dont les parents peuvent payer. ' +
  'Ce risque me paraît réel : dans le quartier où vivent mes grands-parents, depuis la rénovation des rues, je vois davantage de poussettes, mais plusieurs de leurs anciens voisins sont partis faute de pouvoir payer leur loyer. ' +
  'Enfin, le sociologue met en garde contre une ville trop protectrice, une sorte de garderie à ciel ouvert, où tout serait fléché et surveillé. ' +
  'Or l’enfant a aussi besoin d’imprévu et de liberté. ' +
  'Il faut ajouter que la ville doit accueillir des besoins contradictoires : le sommeil de ceux qui travaillent la nuit, le calme des personnes âgées, l’animation des terrasses, les livraisons. ' +
  'La penser pour un seul type d’usager, même le plus sympathique, c’est oublier qu’elle est un lieu de cohabitation.\n\n' +
  'Faut-il en conclure qu’il ne faut pas penser la ville pour les enfants ? Je ne le crois pas, et c’est mon troisième point. ' +
  'Il me semble que les deux documents se rejoignent davantage qu’ils ne s’opposent. ' +
  'L’adjointe affirme qu’une ville pensée pour les enfants n’est pas une ville réservée aux enfants ; ' +
  'le sociologue, de son côté, ne conteste pas les rues apaisées, il conteste la manière de les décider. ' +
  'Sa proposition finale me paraît la plus juste : penser la ville avec les enfants plutôt que pour eux. ' +
  'Cela signifie leur demander ce qu’ils veulent, et pas seulement aux plus petits. ' +
  'Je connais l’exemple d’un conseil municipal de jeunes, dans une commune voisine de la mienne, qui avait demandé non pas une nouvelle aire de jeux, ' +
  'mais un abri couvert près de l’arrêt de bus, pour attendre le soir sans être chassé. ' +
  'Aucun adulte n’y avait pensé. ' +
  'Cela signifie aussi accompagner les aménagements de mesures sociales, par exemple en maintenant des logements accessibles dans les quartiers apaisés, ' +
  'pour que la tranquillité ne devienne pas un privilège. ' +
  'Enfin, cela suppose de garder dans la ville des espaces qui ne soient pas entièrement prévus : des places, des cours, des terrains vagues parfois, où les enfants inventent leurs propres usages.\n\n' +
  'Pour conclure, je répondrais oui à la question, à condition de bien comprendre ce que veut dire « pour les enfants ». ' +
  'Si cela signifie prendre l’enfant comme instrument de mesure, pour corriger une ville conçue d’abord pour l’automobile, alors c’est une exigence légitime, qui profite à tous ceux qui marchent lentement. ' +
  'Si cela signifie organiser toute la ville autour d’une image idéale de l’enfance, sage, petite et protégée, alors on risque d’exclure les adolescents, les familles modestes et tous ceux dont les besoins sont différents. ' +
  'La ville ne doit donc pas être pensée pour un seul usager, mais à partir des plus vulnérables, et avec eux. ' +
  'Reste une question que je laisse ouverte : sommes-nous prêts, nous les adultes, à accepter une ville plus lente, où l’on circule enfin à la vitesse d’un pas ? ' +
  'Je vous remercie.';

export const PO1_EXPOSE: ExamTask = {
  ...base,
  id: taskId('po_monologue', '001'),
  taskType: 'po_monologue',
  skill: 'PO',
  label: 'Production orale · Sujet 1 · Exposé',
  prompt: exposePrompt('La ville doit-elle être pensée pour les enfants ?'),
  prepS: 3600,
  timingS: 600,
  parts: [
    { label: 'Document 1', text: PO1_DOC_1, items: [] },
    { label: 'Document 2', text: PO1_DOC_2, items: [] },
  ],
  responseSpec: { kind: 'audio', minDurationS: 480, maxDurationS: 600 },
  modelAnswer: PO1_EXPOSE_MODEL,
  rubric: exposeRubric('Ici : distinguer l’enfant comme instrument de mesure et l’enfant comme usager unique, et ne pas réduire la question à « pour ou contre les voitures ».'),
  examinerNotes: [
    ...PO_NOTES,
    'Points du dossier exploitables : moins d’un écolier sur cinq venait seul il y a quatre ans, près d’un tiers aujourd’hui ; les rues scolaires et leurs opposants ; l’enfant comme instrument de mesure qui profite aux personnes âgées et aux personnes en fauteuil ; les aires de jeux clôturées et la ville apprise en la traversant ; les adolescents indésirables ; la hausse des loyers dans les quartiers apaisés ; la garderie à ciel ouvert et le besoin d’imprévu ; la ville comme cohabitation ; penser la ville avec les enfants plutôt que pour eux.',
    'Les exemples personnels du modèle (un carrefour d’enfance, un conseil de jeunes) sont donnés comme tels : ils montrent l’appui sur l’expérience que la consigne demande, ils ne sont pas tirés du dossier.',
    'Les deux documents se rejoignent plus qu’ils ne s’opposent : une copie qui les présente comme un simple pour et contre passe à côté de leur convergence.',
  ],
};

const PO1_DEBATE: ExamDebate = {
  question: 'La ville doit-elle être pensée pour les enfants ?',
  opening: OPENING,
  clarify: {
    id: 'clarify',
    text: 'Avant d’aller plus loin, je voudrais être sûr de bien vous suivre. Selon vous, l’enfant doit-il devenir le critère principal de l’aménagement urbain, oui ou non ?',
    cues: [],
    covers: 'lever l’ambiguïté sur la position défendue',
  },
  sideCues: {
    // "pour" = the candidate holds that the city should be designed for children.
    pour: [
      'la ville doit etre pensee pour les enfants', 'oui la ville doit', 'penser la ville pour les enfants',
      'l enfant est un bon instrument de mesure', 'il faut fermer les rues aux voitures', 'une ville pour les enfants est une ville pour tous',
    ],
    contre: [
      'la ville ne doit pas etre pensee pour les enfants', 'pas seulement pour les enfants', 'non la ville doit etre pensee pour tous',
      'la ville est faite de cohabitations', 'pas pour un seul usager', 'avec les enfants plutot que pour eux',
    ],
  },
  axes: [
    /* ── against POUR: the candidate holds that the city should be designed for children ── */
    {
      id: 'adolescents',
      against: 'pour',
      about: 'les adolescents oubliés',
      moves: [
        M('ad1', 'counter', 1,
          'Vous dites que la ville doit être pensée pour les enfants. Mais dans le second document, les adolescents sont chassés des bancs. De quels enfants parlez-vous exactement ?',
          'l’âge des enfants qu’on a en tête'),
        M('ad2', 'probe', 2,
          'Concrètement, qu’est-ce qu’une ville pensée pour un garçon de quinze ans ? Est-ce la même chose qu’une ville pensée pour une fillette de six ans ?',
          'des besoins différents selon l’âge'),
        M('ad3', 'concession', 3,
          'Vous admettez que les adolescents sont souvent les oubliés de ces projets. Si la ville « pour les enfants » exclut une partie des enfants, le mot est-il encore le bon ?',
          'la concession sur les adolescents retournée contre le principe'),
        M('ad-r', 'retreat', 1, RETREAT_TEXT, 'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'loyers',
      against: 'pour',
      about: 'l’embourgeoisement des quartiers apaisés',
      moves: [
        M('lo1', 'consequence', 1,
          'Un quartier calme et sûr attire des familles aisées, et les loyers montent. Votre ville pour les enfants n’est-elle pas, au bout du compte, une ville pour les enfants des familles qui peuvent payer ?',
          'la hausse des loyers'),
        M('lo2', 'probe', 2,
          'Avez-vous observé ce phénomène autour de vous ? Que deviennent les familles qui vivaient là avant les aménagements ?',
          'l’expérience du candidat'),
        M('lo3', 'steelman', 3,
          'Je vous accorde que l’intention est généreuse. Mais une politique se juge à ses effets. Si l’effet est de déplacer les familles modestes, faut-il malgré tout continuer ?',
          'juger une politique à ses effets'),
      ],
    },
    {
      id: 'cohabitation',
      against: 'pour',
      about: 'les besoins contraires des autres habitants',
      moves: [
        M('cb1', 'counter-example', 1,
          'Prenons un livreur, un infirmier qui rentre de garde, un commerçant qui reçoit ses marchandises le matin. Pourquoi leurs besoins compteraient-ils moins que ceux d’un écolier ?',
          'les autres usagers de la rue'),
        M('cb2', 'probe', 2,
          'Quand les intérêts des enfants et ceux des travailleurs s’opposent, au moment de la livraison par exemple, qui doit céder selon vous, et pourquoi ?',
          'l’arbitrage entre usagers'),
        M('cb3', 'consequence', 3,
          'Si la ville se pense à partir d’un seul usager, ne cesse-t-elle pas d’être ce lieu où des besoins contraires apprennent à cohabiter ?',
          'la ville comme cohabitation'),
      ],
    },
    {
      id: 'garderie',
      against: 'pour',
      about: 'la ville surprotégée',
      moves: [
        M('ga1', 'counter', 1,
          'À force de sécuriser chaque parcours, ne risque-t-on pas de transformer la ville en garderie à ciel ouvert, où l’enfant est surveillé en permanence ?',
          'la garderie à ciel ouvert'),
        M('ga2', 'probe', 2,
          'Vous parlez d’itinéraires marqués au sol. Mais un enfant qui suit des flèches apprend-il vraiment à se repérer ? Où est la part d’imprévu ?',
          'le besoin d’imprévu'),
        M('ga3', 'consequence', 3,
          'Si l’on supprime tout risque de la rue, comment l’enfant apprendra-t-il à évaluer un danger, ce que l’adjointe présente pourtant comme essentiel ?',
          'la contradiction entre protéger et apprendre'),
      ],
    },

    /* ── against CONTRE: the candidate holds that the city need not be designed for children ── */
    {
      id: 'mesure',
      against: 'contre',
      about: 'l’enfant comme instrument de mesure',
      moves: [
        M('me1', 'counter', 1,
          'L’adjointe explique qu’un trottoir sûr pour un enfant l’est aussi pour une personne âgée ou une personne en fauteuil. Si c’est vrai, penser pour l’enfant, n’est-ce pas penser pour tous ?',
          'l’enfant comme indicateur'),
        M('me2', 'probe', 2,
          'Vous dites que la ville doit être pensée pour tout le monde. Mais concrètement, quel critère proposez-vous à la place de l’enfant pour décider d’un aménagement ?',
          'le critère de remplacement'),
        M('me3', 'concession', 3,
          'Vous reconnaissez que la ville actuelle a été pensée d’abord pour la voiture. Si l’on ne choisit pas l’enfant comme mesure, ne laisse-t-on pas, en pratique, l’automobile garder cette place ?',
          'la concession retournée : sans critère, la voiture reste la mesure'),
        M('me-r', 'retreat', 1, RETREAT_TEXT, 'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'autonomie',
      against: 'contre',
      about: 'l’autonomie perdue des enfants',
      moves: [
        M('au1', 'counter-example', 1,
          'Il y a quatre ans, moins d’un écolier sur cinq allait seul à l’école à Castelvert, alors que presque tous leurs parents l’avaient fait. Que pensez-vous de cette perte d’autonomie ?',
          'l’autonomie des écoliers'),
        M('au2', 'probe', 2,
          'Et vous, à quel âge êtes-vous allé seul à l’école, et qu’est-ce que cela vous a appris ?',
          'l’expérience personnelle du candidat'),
        M('au3', 'consequence', 3,
          'Si un enfant est transporté de porte à porte jusqu’à douze ans, quelle relation aura-t-il à sa ville une fois adulte ?',
          'les conséquences à long terme'),
      ],
    },
    {
      id: 'voiture',
      against: 'contre',
      about: 'la domination de l’automobile',
      moves: [
        M('vo1', 'counter', 1,
          'Même le sociologue reconnaît que l’automobile domine l’espace urbain et que les plus vulnérables en paient le prix. Refuser de penser la ville pour les enfants, n’est-ce pas défendre le statu quo ?',
          'le statu quo automobile'),
        M('vo2', 'probe', 2,
          'Les livreurs et les commerçants se sont plaints, puis la ville a ajusté les horaires. Ces ajustements ne montrent-ils pas qu’on peut concilier les besoins sans renoncer au projet ?',
          'la conciliation possible'),
        M('vo3', 'steelman', 3,
          'Votre meilleur argument est que la ville doit servir tout le monde. Mais aujourd’hui, elle sert surtout ceux qui conduisent. Corriger ce déséquilibre au profit des enfants, n’est-ce pas justement rétablir une ville pour tous ?',
          'corriger un déséquilibre existant'),
      ],
    },
    {
      id: 'participation',
      against: 'contre',
      about: 'penser avec les enfants',
      moves: [
        M('pa1', 'probe', 1,
          'Le sociologue propose de penser la ville avec les enfants plutôt que pour eux. Comment, concrètement, demande-t-on son avis à un enfant de sept ans sur un plan d’urbanisme ?',
          'la participation des enfants'),
        M('pa2', 'counter', 2,
          'Les enfants ne votent pas. Si personne ne pense la ville pour eux, qui défendra leurs intérêts face aux électeurs adultes ?',
          'les enfants sans voix politique'),
        M('pa3', 'consequence', 3,
          'Penser « avec » les enfants, n’est-ce pas une autre manière de penser « pour » eux, avec un peu plus de concertation ? La différence est-elle si grande ?',
          'la frontière entre avec et pour'),
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
  // Written from the "pour" side (the city should be designed from the child),
  // answering the rent and teenager axes: a real concession, then the thesis
  // kept and narrowed.
  modelAnswer:
    'Vous avez raison de soulever la question des loyers, et je ne veux pas l’esquiver. ' +
    'Si un quartier devient agréable, il devient recherché, et ce sont souvent les familles modestes qui en paient le prix. ' +
    'Ce serait un comble qu’une politique pensée pour les enfants finisse par chasser ceux qui en avaient le plus besoin.\n\n' +
    'Mais je ne crois pas que ce soit une raison de renoncer à apaiser les rues. ' +
    'Le problème, ce n’est pas la sécurité des trottoirs, c’est l’absence de politique du logement qui l’accompagne. ' +
    'On ne va pas laisser des carrefours dangereux devant les écoles des quartiers populaires pour éviter que les loyers montent. ' +
    'Il faut faire les deux en même temps : aménager et protéger les habitants, par exemple en maintenant une part de logements à loyer modéré.\n\n' +
    'Sur les adolescents, je vous rejoins davantage. ' +
    'Quand j’ai parlé des enfants, j’avais surtout en tête les écoliers, et c’est sans doute une limite de mon exposé. ' +
    'Un adolescent n’a pas besoin d’une rue fermée aux voitures à huit heures du matin, il a besoin d’un endroit où se retrouver le soir sans qu’on le considère comme une menace. ' +
    'Donc je préciserais ma position : penser la ville pour les enfants, ce n’est pas installer des toboggans partout, c’est se demander, à chaque âge, ce qu’un jeune peut faire seul dans la ville.\n\n' +
    'Et c’est là que je maintiens l’essentiel. ' +
    'Prendre l’enfant comme mesure, ce n’est pas oublier les autres, c’est choisir le plus vulnérable comme test. ' +
    'Si un enfant de huit ans peut aller seul à la boulangerie, alors une personne âgée le peut aussi. ' +
    'Le contraire n’est pas vrai : une rue pensée pour un conducteur pressé n’a jamais rendu service à un piéton lent.',
  debate: PO1_DEBATE,
  rubric: entretienRubric('Ici : tenir la distinction entre l’enfant comme instrument de mesure et l’enfant comme usager unique face aux objections sociales ou à celle des adolescents.'),
  examinerNotes: [
    ...PO_NOTES,
    'Le jury conteste la position prise dans l’exposé, quelle qu’elle soit, puis élargit au-delà du dossier (logement, participation des jeunes, souvenirs d’enfance du candidat).',
  ],
};

/* ═══ PRODUCTION ORALE · SUJET 2 (DALF-57) · Le journalisme et la neutralité ═ */

// INVENTED: the regional daily « L’Écho des Combes », its editor-in-chief
// Agathe Rouxel, the closure of the papeterie de Valbrune and its 180 jobs,
// the weekly column « Pourquoi ce choix ».
const PO2_DOC_1 =
  '« CHAQUE MOT EST UN CHOIX »\n' +
  'Témoignage d’Agathe Rouxel, rédactrice en chef du quotidien régional L’Écho des Combes\n\n' +
  'L’an dernier, la papeterie de Valbrune a annoncé sa fermeture : cent quatre-vingts emplois, dans une vallée où elle faisait vivre presque une famille sur trois. ' +
  'Pendant des semaines, ce dossier a occupé notre une. ' +
  'Et c’est là, plus que dans n’importe quelle école de journalisme, que j’ai compris qu’un article neutre n’existe pas.\n\n' +
  'Prenez le premier titre. La direction parlait d’un « plan de sauvegarde de l’emploi ». Les salariés parlaient de « licenciements ». ' +
  'Les deux termes désignaient la même réalité, mais aucun n’était innocent : le premier reprenait le langage de l’entreprise, le second celui du syndicat. ' +
  'Nous avons finalement écrit « fermeture de la papeterie : 180 emplois supprimés ». C’était factuel. Ce n’était pas neutre pour autant : ' +
  'nous avions choisi de mettre en avant les emplois plutôt que les difficultés financières de l’entreprise.\n\n' +
  'Il y a eu ensuite la photo. Nous avions le choix entre une machine à l’arrêt dans un hangar vide et le visage d’une ouvrière en larmes devant la grille. ' +
  'La seconde était plus forte, elle aurait été partagée des milliers de fois. Nous avons publié la première, et des lecteurs nous ont accusés de froideur. ' +
  'Le lendemain, un journal concurrent a publié l’ouvrière en larmes, et d’autres lecteurs l’ont accusé de sensationnalisme. ' +
  'Il n’y avait pas de bonne réponse, seulement des choix à assumer.\n\n' +
  'Il y a eu aussi ceux que nous n’avons pas interrogés. Les premiers jours, faute de temps, nous avons surtout donné la parole au maire et à la direction, ' +
  'qui répondaient vite au téléphone. Les ouvrières, elles, ne pouvaient parler qu’après leur service, et nous étions déjà bouclés. ' +
  'Un délégué syndical nous l’a reproché, et il avait raison : sans rien inventer, nous avions laissé parler d’abord ceux qui étaient les plus faciles à joindre.\n\n' +
  'Même l’ordre des informations engage. ' +
  'Commencer par la colère des salariés ou par les pertes de l’entreprise, citer d’abord le maire ou d’abord le délégué syndical, ' +
  'c’est déjà orienter la lecture, même si chaque phrase, prise isolément, est exacte.\n\n' +
  'Faut-il alors renoncer à toute exigence ? Certainement pas. ' +
  'Si la neutralité est hors d’atteinte, l’équité, elle, ne l’est pas. ' +
  'Nous nous imposons quelques règles : vérifier chaque fait auprès de deux sources, donner la parole à toutes les parties, ' +
  'distinguer clairement les articles d’information des éditoriaux, et publier nos erreurs dans un encadré visible, pas en petits caractères. ' +
  'Depuis cette affaire, nous avons aussi créé une rubrique hebdomadaire, « Pourquoi ce choix », où nous expliquons à nos lecteurs une décision difficile de la rédaction. ' +
  'Je ne promets pas à nos lecteurs d’être neutres. Je leur promets d’être loyaux.';

// INVENTED: the Observatoire Merlin des médias, its survey of 3,000 people (68 %
// want journalists to be neutral; 41 % think most journalists manage it), its
// analysis of 1,200 news articles (seven quoted sources in ten institutional).
const PO2_DOC_2 =
  'LA NEUTRALITÉ, UN IDÉAL QUE LE PUBLIC RÉCLAME ET NE CROIT PAS ATTEINT\n' +
  'Synthèse du rapport annuel de l’Observatoire Merlin des médias\n\n' +
  'Le public attend des journalistes qu’ils soient neutres, et il doute qu’ils le soient. ' +
  'Selon l’enquête menée cette année auprès de trois mille personnes, soixante-huit pour cent des personnes interrogées estiment qu’un journaliste ' +
  '« doit rapporter les faits sans jamais laisser paraître son opinion ». ' +
  'Mais quarante et un pour cent seulement pensent que la plupart des journalistes y parviennent.\n\n' +
  'L’analyse de mille deux cents articles d’information, publiés par des titres nationaux et régionaux, éclaire cet écart. ' +
  'Les chercheurs ont d’abord relevé les marques d’opinion explicites : adjectifs évaluatifs, jugements, interpellations du lecteur. ' +
  'Elles sont rares dans les articles d’information, ce qui montre que la règle de séparation entre faits et commentaires est largement respectée. ' +
  'En revanche, d’autres choix, moins visibles, orientent la lecture. ' +
  'Sept sources citées sur dix sont institutionnelles : élus, administrations, entreprises, experts reconnus. ' +
  'Les personnes directement concernées par les faits, usagers, salariés, habitants, sont citées beaucoup moins souvent, et presque toujours après les premières. ' +
  'Cette proportion monte encore dans les articles écrits dans l’urgence, où l’on cite d’abord les interlocuteurs les plus faciles à joindre. ' +
  'Le rapport note aussi que le choix des sujets traités, et de ceux qui ne le sont pas, pèse plus lourd que la formulation des articles eux-mêmes.\n\n' +
  // INVENTED: the companion survey of 400 journalists and its 29 %.
  'Les journalistes eux-mêmes sont plus sceptiques que leurs lecteurs : interrogés à part, quatre cents d’entre eux ne sont que vingt-neuf pour cent à se dire neutres ; ' +
  'la plupart préfèrent parler de rigueur ou d’équité.\n\n' +
  'Faut-il en conclure que la neutralité est une illusion ? ' +
  'Le rapport distingue deux positions présentes dans la profession. ' +
  'Pour les uns, la neutralité doit rester un horizon, même inaccessible : c’est elle qui oblige à vérifier, à écouter la partie adverse, à se méfier de ses propres convictions. ' +
  'Pour les autres, mieux vaudrait y renoncer et revendiquer un journalisme « engagé », qui affiche ses valeurs au lieu de prétendre ne pas en avoir. ' +
  'Le rapport souligne cependant une limite de cette seconde voie : ' +
  'les médias qui affichent ouvertement une orientation inspirent confiance à ceux qui la partagent, mais beaucoup moins aux autres, ' +
  'ce qui risque d’enfermer chaque public dans les informations qui le confortent.\n\n' +
  'Les auteurs recommandent enfin plusieurs pratiques : diversifier les sources citées, ' +
  'indiquer comment une information a été obtenue et vérifiée, et rendre compte aux lecteurs des choix éditoriaux importants. ' +
  'À leurs yeux, le public ne demande pas tant l’absence de point de vue qu’une méthode qu’il puisse comprendre.';

const PO2_EXPOSE_MODEL =
  'Bonjour. La question que j’ai choisi de traiter est la suivante : le journalisme peut-il être neutre ? ' +
  'C’est une question qui touche chacun d’entre nous, puisque nous passons nos journées à recevoir des informations, sur nos téléphones, à la radio, dans la presse. ' +
  'Le mot « neutre » mérite qu’on s’y arrête : il désigne un journaliste qui rapporterait les faits sans rien y mettre de lui-même, comme un simple miroir. ' +
  'Et le verbe « pouvoir » pose une double question : est-ce possible en pratique, et, si ce ne l’est pas, faut-il pour autant renoncer à cet idéal ? ' +
  'Le dossier comprend deux documents. Le premier est le témoignage de la rédactrice en chef d’un quotidien régional, qui a couvert la fermeture d’une usine. ' +
  'Le second est la synthèse du rapport d’un observatoire des médias, qui croise une enquête d’opinion et l’analyse d’un grand nombre d’articles. ' +
  'Je montrerai d’abord que la neutralité parfaite est hors d’atteinte, ensuite qu’elle reste pourtant un idéal utile, ' +
  'et enfin qu’une autre exigence, celle de l’équité et de la transparence sur la méthode, me paraît plus juste.\n\n' +
  'Premièrement, la neutralité absolue semble impossible, et le premier document le montre de manière très concrète. ' +
  'Lors de la fermeture de la papeterie, chaque décision de la rédaction engageait déjà un point de vue. ' +
  'Le choix d’un mot d’abord : parler de « plan de sauvegarde de l’emploi », c’était reprendre le vocabulaire de la direction ; parler de « licenciements », celui des salariés. ' +
  'Même le titre finalement retenu, pourtant factuel, mettait en avant les emplois plutôt que les difficultés de l’entreprise. ' +
  'Le choix d’une image ensuite : une machine à l’arrêt ou une ouvrière en larmes. Dans les deux cas, des lecteurs ont protesté. ' +
  'Le choix de l’ordre, enfin : citer le maire avant le délégué syndical, ou l’inverse, oriente la lecture alors que chaque phrase est exacte. ' +
  'Le rapport de l’observatoire confirme ces observations à grande échelle. ' +
  'Les marques d’opinion visibles sont rares dans les articles d’information, mais sept sources sur dix sont institutionnelles, ' +
  'et les personnes directement concernées sont citées moins souvent et plus tard. ' +
  'Surtout, le choix des sujets traités pèse plus lourd que la formulation. ' +
  'Je trouve cette remarque très juste. Je me souviens, par exemple, d’une grève dans ma ville qui a fait la une pendant une semaine parce qu’elle perturbait les transports, ' +
  'alors que la fermeture d’un service hospitalier, quelques mois plus tôt, était passée presque inaperçue. ' +
  'Aucun article n’était partial, mais l’ensemble racontait une certaine hiérarchie de ce qui compte. ' +
  'La rédactrice reconnaît d’ailleurs que, les premiers jours, son journal a surtout interrogé le maire et la direction, plus faciles à joindre, ' +
  'et le rapport observe le même phénomène dans les articles écrits dans l’urgence. ' +
  'La neutralité ne dépend donc pas seulement de la volonté du journaliste, mais aussi de ses conditions de travail : le temps dont il dispose, les personnes qu’il peut joindre. ' +
  'On peut donc conclure de cette première partie que tout journalisme suppose des choix, et qu’un choix n’est jamais neutre.\n\n' +
  'Faut-il pour autant abandonner l’idéal de neutralité ? C’est mon deuxième point, et je ne le crois pas. ' +
  'Le rapport présente une position que je partage en partie : la neutralité doit rester un horizon, même inaccessible, ' +
  'parce que c’est elle qui oblige le journaliste à vérifier, à écouter la partie adverse, à se méfier de ses propres convictions. ' +
  'Un horizon, par définition, on ne l’atteint jamais, mais il indique une direction. ' +
  'D’ailleurs, le public reste très attaché à cet idéal : plus des deux tiers des personnes interrogées veulent des journalistes qui ne laissent pas paraître leur opinion. ' +
  'Il est d’ailleurs frappant que les journalistes eux-mêmes soient une minorité à se dire neutres : la plupart préfèrent parler de rigueur ou d’équité. ' +
  'Ce sont donc les professionnels qui doutent le plus de cet idéal, alors que le public y reste attaché. ' +
  'À l’inverse, le journalisme « engagé », qui affiche ses valeurs, a l’avantage de la franchise, mais il présente une limite que le rapport souligne : ' +
  'il inspire confiance à ceux qui partagent ses idées et beaucoup moins aux autres. ' +
  'Chacun risque alors de ne lire que ce qui le conforte. ' +
  'J’en vois une illustration dans mon propre entourage : certains amis ne s’informent plus qu’à travers des chaînes ou des comptes qui pensent comme eux, ' +
  'et il devient difficile de discuter, parce que nous ne partons même plus des mêmes faits. ' +
  'Renoncer à l’idéal de neutralité, ce serait donc accepter cette fragmentation. ' +
  'Il me semble que la séparation entre information et commentaire, que le rapport juge largement respectée, est précisément ce qu’il faut préserver.\n\n' +
  'Toutefois, entre une neutralité impossible et un engagement qui divise, il existe une troisième voie, et c’est mon dernier point. ' +
  'Les deux documents, d’ailleurs, se rejoignent sur ce terrain. ' +
  'La rédactrice en chef dit : je ne promets pas d’être neutre, je promets d’être loyale. ' +
  'Concrètement, son journal vérifie chaque fait auprès de deux sources, donne la parole à toutes les parties, sépare les articles d’information des éditoriaux ' +
  'et publie ses erreurs de façon visible. ' +
  'Il a aussi créé une rubrique où il explique aux lecteurs ses choix difficiles. ' +
  'Le rapport recommande des pratiques très proches : diversifier les sources, indiquer comment une information a été obtenue, rendre compte des choix éditoriaux. ' +
  'Sa conclusion me paraît essentielle : le public ne demande pas tant l’absence de point de vue qu’une méthode qu’il puisse comprendre. ' +
  'Autrement dit, la confiance ne naît pas d’une neutralité affichée, mais d’une méthode que le lecteur peut vérifier. ' +
  'Pour ma part, je fais davantage confiance à un journaliste qui me dit d’où il parle et comment il a travaillé qu’à celui qui prétend ne parler de nulle part. ' +
  'J’ajouterais que cette exigence concerne aussi les lecteurs : apprendre à repérer les choix d’un article, ses sources, son angle, devrait faire partie de l’éducation de chacun.\n\n' +
  'Pour conclure, je répondrais que le journalisme ne peut pas être parfaitement neutre, parce qu’informer, c’est choisir : choisir un sujet, un mot, une image, un ordre. ' +
  'Mais cela ne signifie pas que tout se vaut, ni qu’il faille renoncer à toute rigueur. ' +
  'La neutralité reste un horizon utile, qui protège de la partialité, et elle se traduit en pratique par l’équité : vérifier, donner la parole à chacun, distinguer les faits des opinions, ' +
  'et surtout expliquer ses choix. ' +
  'Plutôt que de demander aux journalistes d’être neutres, il vaudrait sans doute mieux leur demander d’être loyaux et transparents sur leur méthode, et leur laisser le temps de l’être. ' +
  'Une question reste ouverte : à l’heure où chacun peut publier une information en quelques secondes, ces exigences ne devraient-elles pas s’appliquer bien au-delà des seuls journalistes ? ' +
  'Je vous remercie.';

export const PO2_EXPOSE: ExamTask = {
  ...base,
  id: taskId('po_monologue', '002'),
  taskType: 'po_monologue',
  skill: 'PO',
  label: 'Production orale · Sujet 2 · Exposé',
  prompt: exposePrompt('Le journalisme peut-il être neutre ?'),
  prepS: 3600,
  timingS: 600,
  parts: [
    { label: 'Document 1', text: PO2_DOC_1, items: [] },
    { label: 'Document 2', text: PO2_DOC_2, items: [] },
  ],
  responseSpec: { kind: 'audio', minDurationS: 480, maxDurationS: 600 },
  modelAnswer: PO2_EXPOSE_MODEL,
  rubric: exposeRubric('Ici : distinguer la neutralité comme résultat, hors d’atteinte, et comme horizon ou méthode, et ne pas réduire la question à « les journalistes mentent-ils ? ».'),
  examinerNotes: [
    ...PO_NOTES,
    'Points du dossier exploitables : le vocabulaire de la direction et celui des salariés ; le titre factuel mais orienté ; le choix de la photo et les reproches des deux côtés ; l’ordre des informations ; l’équité à la place de la neutralité ; les règles de la rédaction et la rubrique « Pourquoi ce choix » ; 68 % des sondés veulent des journalistes neutres, 41 % pensent qu’ils y parviennent ; peu de marques d’opinion mais sept sources sur dix institutionnelles ; le poids du choix des sujets ; la neutralité comme horizon et le journalisme engagé ; la recommandation finale sur la méthode.',
    'Les exemples personnels du modèle (une grève et un service hospitalier, des amis qui ne s’informent plus que chez ceux qui pensent comme eux) sont donnés comme tels : ils ne sont pas tirés du dossier.',
    'Les deux documents se complètent : l’un montre les choix de l’intérieur d’une rédaction, l’autre les mesure à grande échelle ; tous deux aboutissent à l’exigence de méthode.',
  ],
};

const PO2_DEBATE: ExamDebate = {
  question: 'Le journalisme peut-il être neutre ?',
  opening: OPENING,
  clarify: {
    id: 'clarify',
    text: 'Avant d’aller plus loin, je voudrais être sûr de bien vous suivre. Selon vous, un journaliste peut-il, au moins dans ses articles d’information, être véritablement neutre, oui ou non ?',
    cues: [],
    covers: 'lever l’ambiguïté sur la position défendue',
  },
  sideCues: {
    // "pour" = the candidate holds that journalism can be neutral.
    pour: [
      'le journalisme peut etre neutre', 'oui il peut etre neutre', 'un journaliste peut rester neutre',
      'il suffit de rapporter les faits', 'la neutralite est possible', 'separer les faits et les opinions suffit',
    ],
    contre: [
      'le journalisme ne peut pas etre neutre', 'la neutralite est impossible', 'informer c est choisir',
      'un article neutre n existe pas', 'chaque mot est un choix', 'non il ne peut pas etre neutre',
    ],
  },
  axes: [
    /* ── against POUR: the candidate holds that journalism can be neutral ── */
    {
      id: 'mots',
      against: 'pour',
      about: 'le choix des mots',
      moves: [
        M('mo1', 'counter-example', 1,
          'Pour la papeterie, la direction parlait de « plan de sauvegarde de l’emploi » et les salariés de « licenciements ». Quel mot neutre auriez-vous choisi, vous ?',
          'l’impossibilité d’un mot neutre'),
        M('mo2', 'probe', 2,
          'Vous proposez un mot technique. Mais choisir le vocabulaire de l’administration, n’est-ce pas déjà adopter le point de vue de l’institution ?',
          'le langage institutionnel n’est pas neutre'),
        M('mo3', 'concession', 3,
          'Vous admettez qu’aucun mot n’est tout à fait innocent. Si chaque mot engage déjà un point de vue, que reste-t-il de la neutralité que vous défendiez ?',
          'la concession sur les mots retournée contre la thèse'),
        M('mo-r', 'retreat', 1, RETREAT_TEXT, 'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'sujets',
      against: 'pour',
      about: 'le choix des sujets',
      moves: [
        M('su1', 'counter', 1,
          'Le rapport dit que le choix des sujets pèse plus lourd que la formulation. Un journal peut-il être neutre s’il décide seul de ce qui mérite d’être raconté ?',
          'la hiérarchie de l’information'),
        M('su2', 'probe', 2,
          'Qui devrait décider de la une, selon vous ? Les lecteurs, l’audience, la rédaction ? Et lequel de ces critères serait neutre ?',
          'le critère de sélection'),
        M('su3', 'consequence', 3,
          'Si l’on ne peut pas tout traiter, on doit écarter des sujets. Écarter un sujet, n’est-ce pas toujours décider qu’il compte moins ?',
          'le silence comme choix'),
      ],
    },
    {
      id: 'sources',
      against: 'pour',
      about: 'le poids des sources institutionnelles',
      moves: [
        M('so1', 'counter', 1,
          'Sept sources sur dix sont institutionnelles, d’après le rapport. Un article qui ne contient aucune opinion mais ne cite que des élus et des entreprises est-il neutre ?',
          'la neutralité de façade'),
        M('so2', 'probe', 2,
          'Comment expliquez-vous que les personnes concernées soient citées moins souvent et plus tard ? Est-ce un manque de temps, une habitude, un choix ?',
          'l’origine du déséquilibre'),
        M('so3', 'steelman', 3,
          'Je vous accorde que les faits rapportés sont exacts. Mais un ensemble de faits exacts, choisis et ordonnés, peut-il raconter une histoire orientée ? Si oui, l’exactitude suffit-elle ?',
          'exactitude et orientation'),
      ],
    },
    {
      id: 'public',
      against: 'pour',
      about: 'la confiance du public',
      moves: [
        M('pb1', 'counter', 1,
          'Deux tiers du public veulent des journalistes neutres, mais quatre personnes sur dix seulement pensent qu’ils y parviennent. Comment expliquez-vous cet écart ?',
          'l’écart entre attente et confiance'),
        M('pb2', 'probe', 2,
          'Si un journaliste se dit neutre et que le lecteur découvre ensuite ses choix, ne risque-t-il pas de perdre davantage la confiance que s’il les avait expliqués ?',
          'la promesse de neutralité comme risque'),
        M('pb3', 'consequence', 3,
          'Si la neutralité ne peut être qu’affirmée et jamais prouvée, ne vaut-il pas mieux promettre autre chose au lecteur, une méthode par exemple ?',
          'remplacer la promesse par une méthode'),
      ],
    },

    /* ── against CONTRE: the candidate holds that journalism cannot be neutral ── */
    {
      id: 'relativisme',
      against: 'contre',
      about: 'le risque du « tout se vaut »',
      moves: [
        M('re1', 'consequence', 1,
          'Si aucun journalisme n’est neutre, alors tous les médias se valent, un journal sérieux comme un site militant. Vous acceptez cette conséquence ?',
          'le relativisme'),
        M('re2', 'probe', 2,
          'Vous dites que tous ne se valent pas. Alors sur quoi vous fondez-vous pour distinguer un bon journal d’un mauvais, si ce n’est sur sa neutralité ?',
          'le critère de qualité'),
        M('re3', 'concession', 3,
          'Vous admettez qu’il existe des journaux plus rigoureux que d’autres. Mais cette rigueur, vérifier, écouter toutes les parties, n’est-ce pas précisément ce qu’on appelle la neutralité ?',
          'la concession sur la rigueur retournée en neutralité'),
        M('re-r', 'retreat', 1, RETREAT_TEXT, 'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'faits',
      against: 'contre',
      about: 'les faits qui ne dépendent de personne',
      moves: [
        M('fa1', 'counter-example', 1,
          'Quand un journal écrit qu’une usine ferme et que cent quatre-vingts emplois sont supprimés, où est l’opinion ? Un fait n’est-il pas neutre par nature ?',
          'la neutralité du fait'),
        M('fa2', 'probe', 2,
          'Le rapport observe que les marques d’opinion sont rares dans les articles d’information. N’est-ce pas la preuve que la neutralité est largement atteinte ?',
          'la séparation des faits et des commentaires'),
        M('fa3', 'consequence', 3,
          'Si l’on répète au public que la neutralité est impossible, ne lui donne-t-on pas une excuse pour rejeter toute information qui le dérange ?',
          'l’excuse donnée à la défiance'),
      ],
    },
    {
      id: 'engagement',
      against: 'contre',
      about: 'les limites du journalisme engagé',
      moves: [
        M('en1', 'counter', 1,
          'Si la neutralité est impossible, faut-il revendiquer un journalisme engagé ? Le rapport montre pourtant qu’il ne convainc que ceux qui partagent déjà ses idées.',
          'le journalisme engagé'),
        M('en2', 'probe', 2,
          'Dans votre entourage, les gens lisent-ils des médias qui pensent comme eux ? Qu’est-ce que cela change à la manière de discuter ?',
          'l’expérience du candidat'),
        M('en3', 'steelman', 3,
          'Votre position a le mérite de la lucidité. Mais renoncer à l’idéal de neutralité, n’est-ce pas risquer d’enfermer chaque public dans ses certitudes ?',
          'l’enfermement des publics'),
      ],
    },
    {
      id: 'horizon',
      against: 'contre',
      about: 'la neutralité comme horizon',
      moves: [
        M('ho1', 'counter', 1,
          'On ne guérit jamais toutes les maladies, et pourtant la médecine vise la guérison. Pourquoi la neutralité ne pourrait-elle pas être un horizon de ce type ?',
          'l’idéal inaccessible mais utile'),
        M('ho2', 'probe', 2,
          'La rédactrice en chef dit préférer l’équité à la neutralité. Mais concrètement, quelle différence voyez-vous entre un journaliste équitable et un journaliste neutre ?',
          'équité et neutralité'),
        M('ho3', 'consequence', 3,
          'Si les journalistes cessent de viser la neutralité, qu’est-ce qui les retiendra de glisser, article après article, vers leurs propres convictions ?',
          'le garde-fou de l’idéal'),
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
  // Written from the "contre" side (journalism cannot be neutral), under the
  // relativism and horizon axes: a concession, then the thesis kept.
  modelAnswer:
    'Je vous accorde volontiers que tous les médias ne se valent pas, et je ne voudrais surtout pas qu’on comprenne mon exposé comme un « tout se vaut ». ' +
    'Ce serait même l’inverse de ce que je pense. Un journal qui vérifie ses informations auprès de deux sources et publie ses erreurs n’est pas comparable à un site qui invente des faits.\n\n' +
    'Mais justement, ce qui les distingue, à mon avis, ce n’est pas la neutralité, c’est la méthode. ' +
    'Les deux peuvent avoir un point de vue. La différence, c’est que l’un accepte d’être contredit par les faits et que l’autre non. ' +
    'Quand la rédactrice en chef choisit de publier la photo de la machine plutôt que celle de l’ouvrière, elle fait un choix, elle n’est pas neutre. ' +
    'En revanche, elle est loyale : elle peut expliquer ce choix, et elle donne la parole à tout le monde.\n\n' +
    'Sur l’idée d’horizon, je vous rejoins en partie. ' +
    'C’est vrai qu’un idéal inaccessible peut être utile, comme la guérison en médecine. ' +
    'Et je reconnais que si les journalistes cessaient complètement de viser l’objectivité, le risque serait grand de les voir glisser vers le militantisme. ' +
    'Donc je nuancerais ma position : la neutralité n’existe pas comme résultat, mais elle peut garder une valeur comme discipline personnelle.\n\n' +
    'Ce que je maintiens, en revanche, c’est qu’il ne faut pas la promettre au lecteur. ' +
    'Promettre une neutralité qu’on ne peut pas tenir, c’est s’exposer à perdre la confiance dès que le lecteur découvre un choix. ' +
    'Le rapport le montre bien : les gens veulent de la neutralité, mais ils n’y croient pas. ' +
    'Je pense qu’on gagnerait à leur promettre plutôt ce qu’on peut tenir : des faits vérifiés, des voix diverses et des choix expliqués.',
  debate: PO2_DEBATE,
  rubric: entretienRubric('Ici : tenir la distinction entre neutralité impossible et rigueur possible face à l’objection du relativisme ou à celle de l’idéal utile.'),
  examinerNotes: [
    ...PO_NOTES,
    'Le jury conteste la position prise dans l’exposé, quelle qu’elle soit, puis élargit au-delà du dossier (réseaux sociaux, habitudes d’information du candidat, éducation aux médias).',
  ],
};
