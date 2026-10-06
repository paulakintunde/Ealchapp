// DALF C1 blanc-02: Production écrite (25 points, 2 h 30) and Production orale
// (25 points, 1 h of preparation then about 30 min).
//
// ── PE: one dossier, two tasks ──────────────────────────────────────────────
//
// DALF-42 · advertising in public space. The synthèse REPORTS the dossier in
// 200 to 240 words; the essai ARGUES a different question on the same theme,
// from a stated role to a stated addressee, in a real genre (an open letter
// from a resident to the mayor on renewing the billboard contract). Decision
// 36: the essai repeats the synthèse dossier in its own parts, same labels and
// texts, so the grader marking the essai sees the documents it draws on.
//
// The three documents cross rather than oppose: a news report (what a town
// gained and paid), an economist's column (the contract is a barter and the
// cost only moves), an essay (the gaze as a commons; local signs against
// distant campaigns). Each brings at least two ideas the others lack, and they
// share three ties a plan can use: the cost of bus shelters (1 and 2), local
// shops and their signs (1 and 3), and a choice that should be made openly
// (2 and 3). The eight information units are listed in the synthèse's
// examinerNotes, in the order the model answer uses them.
//
// ── PO: two subjects drawn, one chosen ──────────────────────────────────────
//
// DALF-51 « L’art doit-il déranger ? » (musees) and DALF-55 « Vivre plus
// longtemps, est-ce vivre mieux ? » (soins). Each is an exposé (po_monologue,
// one hour of preparation, a two-document dossier of different kinds, 8 to 10
// min) and an entretien (po_debate, 15 to 20 min). The débat banks attack both
// sides, four axes a side, at least twelve non-retreat moves a side, with a concession
// probe and a retreat move on each side (paper-rules asks for twelve; subject 1 carries 13 against « pour »).
//
// Rubrics: synthèse 13, essai 12, exposé 13, entretien 12, each criterion with
// three descriptors in the order « en dessous du niveau / C1 / C1+ »
// (STANDARD-dalf-c1 §7). Our own wording; the examinerNotes say so.
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

/* ═══ PRODUCTION ÉCRITE · LE DOSSIER (DALF-42) ════════════════════════════ */

// INVENTED: Sainte-Ondine and its 140,000 inhabitants, the Gazette du
// Val-Brûlon, the billboard company Murial, 1,100 faces removed and 340 kept,
// 180 bus shelters, 900,000 euros a year, the deputy mayor Agnès Rouvière,
// the 71 % satisfaction survey, the shopkeepers' union president Joël Barnier.
const DOC_1 =
  'SANS PANNEAUX DEPUIS TROIS ANS, SAINTE-ONDINE FAIT SES COMPTES\n' +
  'La Gazette du Val-Brûlon, supplément régional\n\n' +
  'Il y a trois ans, Sainte-Ondine, cent quarante mille habitants, a laissé expirer le contrat qui la liait à la société d’affichage Murial. ' +
  'En quelques mois, onze cents faces publicitaires ont disparu des trottoirs, des façades et des abords de la rocade. ' +
  'La ville n’en a conservé que trois cent quarante, réservées à l’information municipale, aux associations et aux spectacles.\n\n' +
  'Le contrat rapportait peu en argent, mais beaucoup en nature : en échange de l’espace publicitaire, Murial installait et entretenait gratuitement les cent quatre-vingts abribus de la ville. ' +
  'Depuis, cet entretien est à la charge de la commune, pour environ neuf cent mille euros par an. ' +
  '« Nous savions que ce ne serait pas gratuit, explique l’adjointe à l’urbanisme, Agnès Rouvière. Nous avons choisi de payer pour ce que les habitants voient tous les jours. »\n\n' +
  'Les habitants, justement, semblent suivre. Selon une enquête commandée par la ville, soixante et onze pour cent d’entre eux se disent satisfaits de la mesure, ' +
  'et beaucoup évoquent spontanément des rues « plus calmes » ou « plus lisibles ». ' +
  'Plusieurs façades anciennes, longtemps masquées par des panneaux de quatre mètres sur trois, ont été redécouvertes, et certaines ont même été restaurées.\n\n' +
  'Le bilan est plus contrasté chez les commerçants. Les grandes enseignes de la périphérie, qui achetaient l’essentiel de l’espace, ont reporté leurs budgets vers la radio et les réseaux sociaux. ' +
  'Mais le président de l’union des commerçants du centre, Joël Barnier, observe un effet inattendu : ' +
  '« Quand il n’y a plus d’affiches géantes, ce sont nos vitrines et nos enseignes qu’on regarde. Pour un petit commerce, c’est une forme de publicité qu’on a récupérée. » ' +
  'D’autres commerçants, installés dans des rues moins passantes, regrettent au contraire de ne plus pouvoir s’offrir un panneau près des grands axes pour signaler leur existence. ' +
  'Pour eux, la disparition de l’affichage n’a pas libéré le regard des passants : elle les a rendus un peu plus invisibles.';

// INVENTED: the economist Marc-Antoine Lebrec, « Les Cahiers de la dépense
// locale », the town of 8,000 in his example, contracts of fifteen to twenty
// years (a general claim of the invented author, no figure attributed).
const DOC_2 =
  'L’ABRIBUS GRATUIT N’A JAMAIS EXISTÉ\n' +
  'Tribune de Marc-Antoine Lebrec, économiste, Les Cahiers de la dépense locale\n\n' +
  'Chaque fois qu’une ville envisage de réduire l’affichage publicitaire, on lui oppose le même argument : elle va perdre une recette. ' +
  'L’argument est exact, mais il est mal formulé, et cette mauvaise formulation fausse tout le débat.\n\n' +
  'La plupart des contrats d’affichage ne prennent pas la forme d’un loyer versé à la commune. Ce sont des échanges : ' +
  'l’afficheur fournit et entretient du mobilier urbain, abribus, plans de quartier, parfois vélos en libre-service, et se rémunère en vendant l’espace publicitaire qu’il y installe. ' +
  'Le citoyen ne voit passer aucune facture ; il en conclut que ces équipements ne coûtent rien. ' +
  'En réalité, il les paie deux fois : de son attention, devant les affiches, et de sa poche, puisque le prix de cette publicité est intégré dans celui des produits qu’elle vante.\n\n' +
  'Supprimer la publicité ne fait donc pas apparaître un coût ; cela le déplace, de la poche du consommateur vers le budget communal. ' +
  'C’est un choix politique parfaitement défendable, à condition d’être présenté comme tel. ' +
  'Il pèse d’ailleurs très différemment selon la taille des communes. Une grande ville peut absorber l’entretien de ses abribus ; ' +
  'une commune de huit mille habitants, dont le contrat finance parfois l’unique panneau d’information municipale, ne le peut pas toujours. ' +
  'Quant aux écrans numériques que les afficheurs proposent désormais, ils rapportent davantage, puisqu’un même emplacement diffuse plusieurs annonces, ' +
  'mais ils consomment de l’électricité jour et nuit, et cette dépense-là ne figure jamais dans le bilan présenté aux élus.\n\n' +
  'Ce qui me frappe, c’est l’opacité dans laquelle ces décisions sont prises. ' +
  'Les contrats courent souvent sur quinze ou vingt ans, ils sont rarement publiés, et peu d’élus savent dire ce que vaut réellement l’espace qu’ils concèdent. ' +
  'Avant de trancher pour ou contre l’affichage, une commune devrait commencer par chiffrer ce qu’elle échange et le rendre public. ' +
  'Le débat changerait de nature : on cesserait d’opposer des goûts pour comparer des coûts.';

// INVENTED: the essayist Solène Quintard and the review « Contrechamp ».
const DOC_3 =
  'LE REGARD, UN BIEN COMMUN\n' +
  'Extrait d’un essai de Solène Quintard, Contrechamp, revue d’urbanisme\n\n' +
  'On parle volontiers de l’espace public comme d’un bien commun : la rue appartient à tous, et nul ne peut se l’approprier à sa guise. ' +
  'On parle moins de ce qui s’y joue d’essentiel, et qui n’est pas l’espace, mais le regard. ' +
  'Car on peut contourner un obstacle sur un trottoir ; on ne peut pas ne pas voir une affiche de douze mètres carrés placée dans l’axe d’une avenue.\n\n' +
  'C’est ce qui distingue la publicité extérieure de toutes les autres. Un journal se referme, un écran s’éteint, une page se tourne. ' +
  'L’affiche, elle, s’impose à quiconque passe, enfants compris, sans qu’on lui ait rien demandé. ' +
  'Elle exploite une ressource que personne ne lui a cédée : l’attention de ceux qui n’ont pas d’autre choix que d’emprunter la rue. ' +
  'Lorsque les écrans numériques animés remplacent le papier, la sollicitation devient plus difficile encore à ignorer, puisque l’œil est fait pour suivre ce qui bouge.\n\n' +
  'Il ne s’agit pas pour autant de rêver d’une rue muette. La ville a toujours été couverte de signes : enseignes de boutiques, affiches de concerts, avis municipaux, inscriptions peintes. ' +
  'Ces signes font partie de sa vie et personne ne songe à les interdire. ' +
  'La frontière pertinente ne passe pas entre une rue avec et une rue sans messages, mais entre les messages qui parlent du lieu, ' +
  'de ce qu’on y trouve et de ce qui s’y passe, et ceux qui, conçus loin d’ici et identiques dans toutes les villes, ne font qu’emprunter la rue pour atteindre un public.\n\n' +
  'Une commune qui reprend la maîtrise de ses murs ne fait donc pas qu’un choix esthétique. ' +
  'Elle décide de ce qui mérite d’occuper le regard commun, et elle rend à ses habitants une part de leur attention.';

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
        'En dessous du niveau : le texte ajoute des idées absentes du dossier, prend parti ou déforme la position d’un document.',
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
        'C1+ : le thème est formulé comme une tension précise (un arbitrage entre le regard commun et le financement) et toutes les informations clés sont hiérarchisées.',
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

// 222 words by the FEI count (paper.test.ts and paper-rules check 200-240).
const SYNTHESE_MODEL =
  'Retirer les panneaux publicitaires des rues n’est pas un simple geste esthétique : c’est un arbitrage entre la qualité du regard commun et le financement des équipements urbains.\n\n' +
  'Les effets visibles plaident d’abord en faveur de cette décision. Là où l’affichage a été réduit des trois quarts, les habitants se disent largement satisfaits, ' +
  'décrivent des rues plus lisibles et redécouvrent des façades longtemps masquées. ' +
  'Ce constat rejoint une analyse de la nature particulière de l’affiche : contrairement à un journal ou à un écran personnel, elle s’impose à tous, enfants compris, ' +
  'et capte une attention que personne ne lui a concédée, plus encore lorsqu’elle devient numérique et animée.\n\n' +
  'Cette reconquête a toutefois un prix, que les contrats d’affichage dissimulent. ' +
  'Fondés sur l’échange de mobilier urbain contre de l’espace publicitaire, ils donnent l’illusion de la gratuité, alors que le consommateur en supporte le coût. ' +
  'Renoncer à la publicité revient donc à transférer cette charge au budget communal, ce qu’une grande ville peut assumer, mais pas toujours une petite commune.\n\n' +
  'Reste à déterminer quels messages conserver. Si certains commerces de proximité gagnent en visibilité lorsque les grandes affiches disparaissent, ' +
  'd’autres, plus excentrés, y perdent. On propose aussi de distinguer les signes liés au lieu des campagnes conçues ailleurs. ' +
  'Enfin, un tel choix suppose que les communes évaluent et rendent public ce qu’elles échangent réellement.';

export const PE_SYNTHESE: ExamTask = {
  ...base,
  id: taskId('pe_short', '001'),
  taskType: 'pe_short',
  skill: 'PE',
  label: 'Production écrite · Synthèse de documents',
  prompt:
    'PRODUCTION ÉCRITE · 25 points · 2 h 30 pour les deux exercices\n\n' +
    'Exercice 1 · Synthèse de documents (13 points)\n\n' +
    'Lisez les trois documents ci-dessous, qui portent sur la publicité dans l’espace public. ' +
    'Rédigez une synthèse de ces documents en 200 à 240 mots.\n\n' +
    'Votre synthèse est un texte unique, suivi, avec un titre si vous le souhaitez. ' +
    'Elle dégage le thème commun aux documents et regroupe leurs informations selon un plan qui vous est propre, ' +
    'au lieu de les résumer l’un après l’autre.\n' +
    'N’ajoutez aucune idée qui ne figure pas dans les documents et ne donnez pas votre avis.\n' +
    'Vous pouvez reprendre les mots clés des documents, mais pas des phrases ou des passages entiers.\n' +
    'Est considéré comme un mot tout ce qui se trouve entre deux espaces : « c’est-à-dire » compte pour un mot, « l’affiche » aussi.',
  timingS: 4500,
  parts: peDossier(),
  responseSpec: { kind: 'text', minWords: 200, maxWords: 240 },
  modelAnswer: SYNTHESE_MODEL,
  rubric: SYNTHESE_RUBRIC,
  examinerNotes: [
    ...NOTES_OPEN,
    'Points d’information attendus, dans l’ordre du modèle : (1) retirer l’affichage est un arbitrage entre le paysage ou l’attention et le financement (doc. 1, 2, 3) ; ' +
      '(2) effets constatés : habitants satisfaits, rues plus lisibles, façades redécouvertes (doc. 1) ; ' +
      '(3) l’affiche s’impose à tous, enfants compris, et capte une attention non concédée, davantage encore sous forme numérique (doc. 3) ; ' +
      '(4) les contrats sont un échange mobilier urbain contre espace : fausse gratuité, coût payé par l’attention et par le consommateur (doc. 2), entretien des abribus désormais payé par la ville (doc. 1) ; ' +
      '(5) le coût est déplacé vers le budget communal, supportable pour une grande ville, pas toujours pour une petite (doc. 2) ; ' +
      '(6) effets contrastés sur les commerces : vitrines plus visibles au centre, commerces excentrés moins visibles (doc. 1) ; ' +
      '(7) distinguer les messages liés au lieu des campagnes conçues ailleurs (doc. 3) ; ' +
      '(8) chiffrer et publier les contrats avant de décider (doc. 2).',
    'Une bonne copie croise au moins deux de ces liens : les abribus (doc. 1 et 2), les commerces et les enseignes (doc. 1 et 3), un choix à assumer publiquement (doc. 2 et 3).',
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
        'C1+ : argumentation persuasive et nuancée ; l’objection est intégrée et retournée ; la proposition est précise et réalisable.',
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
        'En dessous du niveau : conventions de la lettre ouverte absentes ; registre inadapté à une élue ; le destinataire n’est jamais interpellé.',
        'C1 : formules d’appel et de congé adaptées ; registre soutenu tenu ; le texte s’adresse à la maire tout en visant les lecteurs du journal.',
        'C1+ : double destinataire exploité (l’élue et le public) ; ton ferme et courtois ; interpellations efficaces.',
      ],
    },
    {
      key: 'lexique',
      label: 'Lexique',
      maxPoints: 2,
      descriptors: [
        'En dessous du niveau : vocabulaire limité ou imprécis ; reprises massives des documents ; orthographe fautive.',
        'C1 : lexique étendu, concret et abstrait, précis sur les questions de budget et d’espace public ; orthographe correcte.',
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

// 347 words by the FEI count (essai models run 280-350).
const ESSAI_MODEL =
  'Lettre ouverte à Madame la Maire de Brévillon\n\n' +
  'Madame la Maire,\n\n' +
  'Le conseil municipal se prononcera le mois prochain sur le renouvellement du contrat d’affichage qui lie notre ville à la même société depuis dix-huit ans. ' +
  'Habitant du quartier de la gare, je vous demande de ne pas le reconduire en l’état, sans pour autant céder à la tentation d’une rupture brutale.\n\n' +
  'Je ne méconnais pas l’argument financier. Nos abribus, nos plans de quartier et une partie de nos panneaux municipaux sont aujourd’hui entretenus par l’afficheur, ' +
  'et leur prise en charge pèserait sur un budget déjà contraint. ' +
  'Mais cet argument repose sur une illusion : ces équipements ne sont pas gratuits, nous les payons autrement, par l’attention qu’on nous prélève chaque jour sur le chemin de l’école ou du travail. ' +
  'Or c’est une ressource que nul n’a choisi de céder. Mes enfants ne peuvent pas éteindre l’écran animé installé l’an dernier en face de leur collège.\n\n' +
  'Je vous propose donc une voie intermédiaire. ' +
  'D’abord, publier le contrat actuel et chiffrer ce que la ville reçoit réellement en échange de ses murs : sans ce chiffre, notre débat se réduira à une querelle de goûts. ' +
  'Ensuite, conclure un contrat plus court, de cinq ans au plus, limité aux abribus, et en exclure les écrans numériques. ' +
  'Enfin, réserver une partie des emplacements libérés aux commerces du centre, aux associations et aux spectacles, ' +
  'c’est-à-dire aux messages qui parlent de notre ville plutôt qu’à ceux qui ne font que la traverser.\n\n' +
  'Certains y verront le renoncement à une recette commode. ' +
  'J’y vois au contraire l’occasion de décider enfin, en connaissance de cause, de ce que nous voulons voir en sortant de chez nous. ' +
  'Une ville ne se résume pas à ses façades, mais elle se lit à travers elles, et c’est à ses habitants, non à des annonceurs lointains, qu’il revient d’en écrire le texte. ' +
  'D’autres communes ont franchi ce pas sans que leurs rues deviennent tristes : elles sont devenues lisibles.\n\n' +
  'Je vous prie d’agréer, Madame la Maire, l’expression de ma haute considération.\n\n' +
  'Un habitant du quartier de la gare';

export const PE_ESSAI: ExamTask = {
  ...base,
  id: taskId('pe_essay', '001'),
  taskType: 'pe_essay',
  skill: 'PE',
  label: 'Production écrite · Essai argumenté',
  prompt:
    'Exercice 2 · Essai argumenté (12 points)\n\n' +
    // INVENTED: the town of Brévillon and its billboard contract.
    'Le contrat qui lie votre ville, Brévillon, à une société d’affichage publicitaire arrive à échéance à la fin de l’année. ' +
    'Le conseil municipal doit décider le mois prochain s’il le renouvelle, et à quelles conditions.\n\n' +
    'Habitant de Brévillon, vous adressez à la maire une lettre ouverte, publiée dans le journal local, ' +
    'dans laquelle vous prenez position sur le renouvellement de ce contrat et formulez une proposition précise.\n\n' +
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
    'Genre attendu : une lettre ouverte, donc un double destinataire (la maire, interpellée, et les lecteurs du journal, à convaincre). Formules d’appel et de congé, registre soutenu.',
    'Toutes les positions sont recevables : renouveler, ne pas renouveler, renouveler à d’autres conditions. Ce qui est noté, c’est la défense de la position, la prise en compte d’une objection et la précision de la proposition.',
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

const PO_NOTES = (subject: string) => [
  ...NOTES_OPEN,
  `Sujet tiré parmi deux : ${subject}. Le candidat ne traite que le sujet qu’il a choisi ; l’autre est écarté.`,
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

/* ═══ PRODUCTION ORALE · SUJET 1 (DALF-51) · L’art doit-il déranger ? ═════ */

// INVENTED: the curator Inès Vautrin, the exhibition « Bruits de fond », the
// musée des Tanneries de Corbelle, the closed weaving mill of Saint-Loup-
// d’Aveyrac, the 12-minute loop, 18,000 visitors and about forty written
// complaints, the former workers' visit. The weekly « Le Fil des jours » and
// the novelist Bastien Lormeau.
const PO1_DOC_1 =
  '« LE MALAISE FAISAIT PARTIE DE L’ŒUVRE »\n' +
  'Entretien avec Inès Vautrin, commissaire de l’exposition « Bruits de fond » au musée des Tanneries de Corbelle\n\n' +
  'Votre exposition a suscité des plaintes. Que s’est-il passé ?\n' +
  'Une des salles diffusait en boucle, pendant douze minutes, l’enregistrement d’un atelier de tissage, réalisé juste avant la fermeture de la filature de Saint-Loup-d’Aveyrac. ' +
  'Le son était fort, très fort, à peu près celui que les ouvrières supportaient huit heures par jour. ' +
  'Sur dix-huit mille visiteurs, nous avons reçu une quarantaine de plaintes écrites. Des parents sont ressortis avec leurs enfants au bout d’une minute. ' +
  'On nous a reproché de « maltraiter » le public.\n\n' +
  'Avez-vous envisagé de baisser le volume ?\n' +
  'Nous en avons longuement discuté. Nous avons ajouté un avertissement à l’entrée de la salle et des casques antibruit à disposition, mais nous avons refusé de baisser le son. ' +
  'Baisser le son, c’était raconter une autre histoire : celle d’un métier un peu bruyant. ' +
  'Or ce que l’artiste voulait faire entendre, c’est précisément ce qu’on ne peut pas supporter plus de quelques minutes, et que des femmes ont supporté pendant trente ans. ' +
  'Le malaise du visiteur faisait partie de l’œuvre. Sans lui, il ne restait qu’un document sonore.\n\n' +
  'L’art doit donc déranger, selon vous ?\n' +
  'Je ne dirais pas cela comme une règle. Déranger n’est pas un but ; c’est parfois la conséquence inévitable d’une œuvre qui montre ce qu’on préfère ne pas voir. ' +
  'Une œuvre qui chercherait seulement à choquer m’intéresserait peu. ' +
  'Mais une œuvre qui renoncerait à toucher quelque chose de vrai pour ne froisser personne ne m’intéresserait pas davantage.\n\n' +
  'Et les anciennes ouvrières, qu’en ont-elles pensé ?\n' +
  'Une vingtaine d’entre elles sont venues ensemble, un samedi. Certaines sont restées les douze minutes entières, sans casque. ' +
  'L’une m’a dit : « Pour la première fois, des gens savent ce qu’on entendait. » ' +
  'Ce jour-là, j’ai compris que le dérangement ne touchait pas tout le monde de la même façon. ' +
  'Pour les visiteurs, c’était une agression. Pour elles, c’était une reconnaissance.\n\n' +
  'Les plaintes vous ont-elles fait douter ?\n' +
  'Bien sûr. Un musée est un service public, il accueille des enfants, des personnes âgées, des gens fatigués. ' +
  'Nous avons une responsabilité envers eux, et l’avertissement était le minimum. ' +
  'Mais un musée qui ne présenterait que ce qui ne gêne personne deviendrait un lieu de décoration. ' +
  'Ce n’est pas ce que j’attends d’un musée, ni, je crois, ce que ses visiteurs en attendent vraiment.';

const PO1_DOC_2 =
  'CONTRE L’INJONCTION À DÉRANGER\n' +
  'Chronique de Bastien Lormeau, romancier, dans l’hebdomadaire Le Fil des jours\n\n' +
  'Il n’est plus un dossier de presse, plus une présentation de saison, qui ne promette une œuvre « dérangeante », « qui bouscule », « qui interroge nos certitudes ». ' +
  'Le mot est devenu une étiquette, presque une garantie de sérieux. ' +
  'Une exposition qui se contenterait d’être belle passerait pour naïve ; une pièce qui émouvrait sans provoquer, pour complaisante.\n\n' +
  'Je me méfie de cette injonction, pour trois raisons.\n\n' +
  'La première est qu’elle s’use. Le scandale a longtemps été l’arme de ceux qui n’avaient pas d’autre moyen d’être vus. ' +
  'Il est aujourd’hui un outil de communication parmi d’autres : une polémique bien conduite remplit une salle plus sûrement qu’une critique élogieuse. ' +
  'Et un public habitué à être choqué ne l’est plus. À force de vouloir déranger, on fabrique des spectateurs blasés, qui attendent la provocation comme on attend le dessert.\n\n' +
  'La deuxième est qu’elle suppose un public à secouer, forcément endormi, forcément conformiste. ' +
  'Il y a dans cette posture une forme de mépris que l’on ne s’avoue pas : l’artiste éclairé face au bourgeois qu’il faut réveiller. ' +
  'Or le public d’aujourd’hui n’a rien de la caricature qu’on s’en fait. ' +
  'Il a souvent vu davantage d’images violentes en une semaine que les spectateurs d’autrefois en une vie.\n\n' +
  'La troisième, la plus importante, est qu’elle fait oublier tout ce que l’art peut faire d’autre. ' +
  'Il console, il apaise, il fait éprouver la beauté d’une lumière ou d’une phrase. ' +
  'Le tableau accroché dans une chambre d’hôpital ne dérange personne, et il fait pourtant quelque chose d’essentiel à celui qui le regarde chaque matin. ' +
  'Un poème appris par cœur, qui revient dans un moment de deuil, n’a rien bousculé du tout : il a tenu compagnie.\n\n' +
  'On me répondra que la consolation est suspecte, qu’elle endort, qu’elle détourne des combats nécessaires. ' +
  'Je crois l’inverse. Celui qu’une œuvre a aidé à traverser une nuit difficile n’en sort pas plus docile ; il en sort plus capable de regarder le monde en face. ' +
  'Opposer l’art qui réveille à l’art qui apaise, c’est oublier qu’on a souvent besoin du second pour supporter le premier.\n\n' +
  'Je ne plaide pas pour un art inoffensif. ' +
  'Les œuvres qui m’ont le plus troublé ne cherchaient pas à me troubler ; elles me montraient quelque chose avec une telle justesse que je ne pouvais plus le voir comme avant. ' +
  'Ce trouble-là ne s’annonce pas dans un dossier de presse. ' +
  'L’art n’a pas à viser le dérangement. Il doit seulement ne pas en avoir peur.';

const PO1_EXPOSE_MODEL =
  'Bonjour. La question qui m’a été posée est la suivante : l’art doit-il déranger ? ' +
  'Elle paraît presque rhétorique, tant nous avons pris l’habitude d’associer l’art véritable à la provocation. ' +
  'Pourtant, le verbe « devoir » mérite qu’on s’y arrête : il ne demande pas si l’art dérange parfois, ce qui est évident, mais si le dérangement fait partie de sa mission, voire de sa définition. ' +
  'Les deux documents du dossier éclairent cette question sous des angles différents. ' +
  'Le premier est un entretien avec la commissaire d’une exposition qui a suscité des plaintes, parce qu’elle diffusait à plein volume le bruit d’un atelier de tissage. ' +
  'Le second est une chronique d’un romancier qui se méfie de ce qu’il appelle « l’injonction à déranger ». ' +
  'Je me demanderai donc si le dérangement est une fin que l’art doit poursuivre, ou seulement un effet qu’il ne doit pas fuir. ' +
  'Pour cela, je montrerai d’abord que le dérangement a une fonction réelle, ensuite que la provocation recherchée pour elle-même se retourne contre l’art, ' +
  'et enfin qu’il existe une manière de déranger qui ne relève ni du choc ni de la complaisance.\n\n' +
  'Commençons par ce qui plaide pour l’idée que l’art doit déranger. ' +
  'L’exemple du musée des Tanneries est très parlant. Le volume sonore, insupportable au bout de quelques minutes, n’était pas un caprice : ' +
  'c’était le seul moyen de faire comprendre ce que des ouvrières avaient enduré pendant trente ans. ' +
  'La commissaire le dit très bien : baisser le son, c’était raconter une autre histoire. ' +
  'Autrement dit, ici, le malaise n’est pas un supplément ; il est le contenu même de l’œuvre. ' +
  'On peut prolonger cette idée bien au-delà du dossier. ' +
  'Bien des œuvres aujourd’hui admirées ont d’abord été jugées choquantes, parce qu’elles montraient ce que leur époque préférait ignorer : la misère, la guerre, le corps, la violence sociale. ' +
  'Je pense aussi, plus près de moi, à un documentaire que j’ai vu sur les conditions de travail dans les entrepôts de livraison : ' +
  'j’en suis sorti mal à l’aise, et c’est précisément pour cela que je m’en souviens et que je commande autrement. ' +
  'Dans ce premier sens, déranger, c’est rendre visible, et l’art qui renoncerait à cette fonction perdrait une partie de sa raison d’être.\n\n' +
  'Cependant, et c’est mon deuxième point, faire du dérangement une obligation pose de sérieux problèmes. ' +
  'Le chroniqueur du second document en relève plusieurs. ' +
  'D’abord, la provocation s’use : quand chaque exposition se présente comme « dérangeante », le mot ne signifie plus rien, et le scandale devient un simple argument de vente. ' +
  'On l’observe d’ailleurs dans la communication de nombreux festivals, où la polémique est presque programmée. ' +
  'Ensuite, l’injonction à déranger suppose un public endormi qu’il faudrait secouer, ce qui trahit une forme de mépris. ' +
  'Enfin, et c’est à mes yeux l’argument le plus fort, elle fait oublier tout ce que l’art accomplit sans rien bousculer. ' +
  'Le romancier évoque le tableau accroché dans une chambre d’hôpital, ou le poème qui revient dans un moment de deuil. ' +
  'J’ajouterais la musique que l’on écoute pour se donner du courage, ou un paysage peint qui apaise. ' +
  'Ces œuvres ne dérangent personne, et l’on ne voit pas au nom de quoi on leur refuserait le nom d’art. ' +
  'Si l’art devait déranger, il faudrait exclure de son champ une grande partie de ce qui nous aide à vivre, ce qui est absurde. ' +
  'Le chroniqueur va d’ailleurs plus loin : selon lui, opposer l’art qui réveille à l’art qui apaise est une erreur, car on a souvent besoin du second pour supporter le premier. ' +
  'Je trouve cette idée juste. Dans les périodes difficiles de ma vie, ce ne sont pas les œuvres provocantes qui m’ont aidé, ' +
  'ce sont des chansons très simples ou des romans tranquilles, et ils ne m’ont pas rendu indifférent au monde, bien au contraire. ' +
  'Il y a enfin un argument que le chroniqueur effleure sans le développer : la provocation peut aussi blesser. ' +
  'Les plaintes reçues par le musée ne venaient pas toutes de visiteurs frileux ; certaines venaient de parents inquiets pour des enfants qui ne pouvaient pas comprendre la démarche. ' +
  'Faire du dérangement un devoir, ce serait tenir ces réactions pour négligeables, ce qui me paraît difficile à défendre pour un lieu ouvert à tous.\n\n' +
  'Faut-il en conclure que la question est mal posée ? Pas tout à fait, et c’est mon troisième point. ' +
  'Les deux documents, qui semblent s’opposer, se rejoignent en réalité sur l’essentiel. ' +
  'La commissaire affirme que déranger n’est pas un but, mais parfois la conséquence inévitable d’une œuvre qui montre ce qu’on préfère ne pas voir. ' +
  'Le romancier, de son côté, dit que les œuvres qui l’ont le plus troublé ne cherchaient pas à le troubler. ' +
  'Il me semble donc qu’il faut distinguer deux sortes de dérangement. ' +
  'Le premier est le choc, recherché, annoncé, souvent spectaculaire : il agit fort et vite, mais il s’oublie aussi vite. ' +
  'Le second est un déplacement du regard : l’œuvre nous montre quelque chose avec une telle justesse que nous ne pouvons plus le voir comme avant. ' +
  'Ce second dérangement peut naître d’une œuvre très douce. ' +
  'J’ajouterais un élément que souligne l’entretien : le dérangement ne touche pas tout le monde de la même façon. ' +
  'Pour les visiteurs, le bruit de l’atelier était une agression ; pour les anciennes ouvrières, c’était une reconnaissance. ' +
  'Une œuvre ne dérange donc jamais « en soi » ; elle dérange quelqu’un, à un endroit précis, et c’est souvent là qu’elle est la plus juste. ' +
  'Cela pose bien sûr la question de la responsabilité des lieux qui exposent : prévenir le public, protéger les enfants, comme l’a fait le musée avec son avertissement et ses casques, ' +
  'c’est reconnaître qu’on peut déranger sans maltraiter.\n\n' +
  'Pour conclure, je dirais que l’art ne doit pas déranger, au sens où le dérangement serait une obligation ou un critère de valeur. ' +
  'Faire de la provocation une règle, c’est la condamner à l’usure et oublier tout ce que l’art fait d’autre, consoler, apaiser, faire éprouver la beauté. ' +
  'Mais l’art ne doit pas non plus renoncer à déranger quand ce qu’il montre l’exige, comme dans le cas de cette filature. ' +
  'Le dérangement n’est donc ni un devoir ni une faute : c’est un effet légitime, qui se justifie par ce qu’il permet de faire voir, et que les lieux d’exposition doivent accompagner plutôt que fuir. ' +
  'Je reprendrais volontiers la formule du romancier : l’art n’a pas à viser le dérangement, il doit seulement ne pas en avoir peur. ' +
  'Reste une question que je laisse ouverte : dans une société saturée d’images choquantes, n’est-ce pas aujourd’hui l’attention lente, la douceur même, qui est devenue la chose la plus dérangeante ? ' +
  'Je vous remercie.';

export const PO1_EXPOSE: ExamTask = {
  ...base,
  id: taskId('po_monologue', '001'),
  taskType: 'po_monologue',
  skill: 'PO',
  label: 'Production orale · Sujet 1 · Exposé',
  prompt: exposePrompt('L’art doit-il déranger ?'),
  prepS: 3600,
  timingS: 600,
  parts: [
    { label: 'Document 1', text: PO1_DOC_1, items: [] },
    { label: 'Document 2', text: PO1_DOC_2, items: [] },
  ],
  responseSpec: { kind: 'audio', minDurationS: 480, maxDurationS: 600 },
  modelAnswer: PO1_EXPOSE_MODEL,
  rubric: exposeRubric('Ici : distinguer le dérangement comme but et comme effet, et ne pas réduire la question à « pour ou contre la provocation ».'),
  examinerNotes: [
    ...PO_NOTES('« L’art doit-il déranger ? » ou « Vivre plus longtemps, est-ce vivre mieux ? »'),
    'Points du dossier exploitables : le bruit de l’atelier comme contenu de l’œuvre ; avertissement et casques mais refus de baisser le son ; déranger comme conséquence et non comme but ; le dérangement vécu différemment par les visiteurs et par les anciennes ouvrières ; l’injonction à déranger comme étiquette ; la provocation qui s’use et devient un outil de communication ; le mépris implicite du public ; l’art qui console ; le trouble qui ne s’annonce pas.',
    'Les deux documents se rejoignent plus qu’ils ne s’opposent : une copie qui les présente comme un simple pour et contre passe à côté de leur convergence.',
  ],
};

const PO1_DEBATE: ExamDebate = {
  question: 'L’art doit-il déranger ?',
  opening: OPENING,
  clarify: {
    id: 'clarify',
    text: 'Avant d’aller plus loin, je voudrais être sûr de bien vous suivre. Selon vous, une œuvre qui ne dérange personne peut-elle être une grande œuvre, oui ou non ?',
    cues: [],
    covers: 'lever l’ambiguïté sur la position défendue',
  },
  sideCues: {
    // "pour" = the candidate holds that art must disturb.
    pour: [
      'l art doit deranger', 'oui il doit deranger', 'un art qui ne derange pas', 'deranger fait partie de l art',
      'l art doit bousculer', 'sans malaise il n y a pas d art', 'je pense que l art doit choquer',
    ],
    contre: [
      'l art ne doit pas forcement deranger', 'deranger n est pas un but', 'l art peut consoler',
      'l art n a pas a deranger', 'non il ne doit pas', 'la provocation n est pas une obligation', 'l art peut etre simplement beau',
    ],
  },
  axes: [
    /* ── against POUR: the candidate holds that art must disturb ────────── */
    {
      id: 'marche',
      against: 'pour',
      about: 'la provocation récupérée par le marketing',
      moves: [
        M('ma1', 'counter', 1,
          'Vous dites que l’art doit déranger. Mais aujourd’hui, le scandale fait vendre des billets. Une provocation annoncée dans un dossier de presse dérange-t-elle encore quelqu’un ?',
          'la provocation devenue argument de vente'),
        M('ma2', 'probe', 2,
          'Comment distinguez-vous, concrètement, une œuvre qui dérange parce qu’elle montre quelque chose de vrai, d’une œuvre qui dérange parce que cela rapporte ?',
          'le critère qui sépare la sincérité du calcul'),
        M('ma3', 'concession', 3,
          'Vous venez d’admettre que beaucoup de provocations sont calculées. Si le dérangement peut être fabriqué aussi facilement, comment pourrait-il servir de critère pour juger une œuvre ?',
          'la concession sur le calcul retournée contre le critère'),
        M('ma4', 'consequence', 2,
          'Si les artistes savent que déranger est ce qu’on attend d’eux, ne finit-on pas par obtenir une provocation de convention, aussi prévisible que l’académisme qu’elle prétendait combattre ?',
          'la provocation devenue une nouvelle convention'),
        M('ma-r', 'retreat', 1,
          'Vous semblez maintenant défendre presque l’inverse de votre exposé. Qu’est-ce qui vous a fait changer d’avis, exactement ?',
          'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'consolation',
      against: 'pour',
      about: 'tout ce que l’art fait sans déranger',
      moves: [
        M('co1', 'counter-example', 1,
          'Prenons une berceuse, ou un paysage accroché dans une chambre d’hôpital. Cela ne dérange personne. Est-ce que ce n’est pas de l’art ?',
          'l’art qui console ou apaise'),
        M('co2', 'probe', 2,
          'Vous répondez que ces œuvres dérangent « autrement ». Mais si une berceuse dérange, alors tout dérange, et le mot ne veut plus rien dire. Que voulez-vous dire précisément ?',
          'le mot dérangement élargi jusqu’au vide'),
        M('co3', 'steelman', 3,
          'Je vous accorde le meilleur de votre position : un art qui ne heurterait jamais rien serait pauvre. Mais de là à en faire une obligation, n’y a-t-il pas un pas que rien ne justifie ?',
          'de la possibilité à l’obligation'),
      ],
    },
    {
      id: 'public',
      against: 'pour',
      about: 'le public qu’il faudrait secouer',
      moves: [
        M('pu1', 'counter', 1,
          'Vouloir déranger, c’est supposer un public endormi qu’il faut réveiller. N’y a-t-il pas là une forme de mépris envers les visiteurs ?',
          'le mépris implicite du public'),
        M('pu2', 'consequence', 2,
          'Dans le premier document, des parents sont sortis avec leurs enfants au bout d’une minute. Un musée public peut-il se permettre de faire fuir une partie de son public au nom du dérangement ?',
          'le musée comme service public'),
        M('pu3', 'probe', 3,
          'Vous dites que l’avertissement suffisait. Mais un visiteur averti qui choisit d’entrer est-il encore dérangé, ou simplement venu chercher une sensation qu’il a choisie ?',
          'l’avertissement annule-t-il le dérangement'),
      ],
    },
    {
      id: 'usure',
      against: 'pour',
      about: 'un public blasé que plus rien ne choque',
      moves: [
        M('us1', 'counter', 1,
          'Nous voyons chaque jour des images violentes sur nos téléphones. Dans ce monde-là, qu’est-ce qu’une œuvre pourrait encore avoir de dérangeant ?',
          'la saturation des images'),
        M('us2', 'probe', 2,
          'Si le seuil du choc ne cesse de monter, l’art qui veut déranger devra aller toujours plus loin. Jusqu’où, selon vous ?',
          'la surenchère'),
        M('us3', 'consequence', 3,
          'Si plus rien ne choque, alors un art qui doit déranger est condamné à l’échec ou à la surenchère. N’est-ce pas la preuve que votre définition ne tient pas ?',
          'la définition condamnée par l’usure'),
      ],
    },

    /* ── against CONTRE: the candidate holds that art need not disturb ──── */
    {
      id: 'histoire',
      against: 'contre',
      about: 'les œuvres admirées qui ont d’abord choqué',
      moves: [
        M('hi1', 'counter', 1,
          'Beaucoup d’œuvres que nous admirons aujourd’hui ont été rejetées, voire interdites, à leur époque, justement parce qu’elles dérangeaient. Que faites-vous de cette histoire ?',
          'le scandale comme moteur de l’histoire de l’art'),
        M('hi2', 'probe', 2,
          'Vous dites que ce n’était pas leur but. Mais si elles n’avaient choqué personne, s’en souviendrait-on ? Le dérangement n’est-il pas ce qui les a fait exister ?',
          'le dérangement comme condition de la postérité'),
        M('hi3', 'concession', 3,
          'Vous reconnaissez donc que les œuvres qui comptent ont presque toujours dérangé. Si c’est vrai de presque toutes, la différence entre « doit déranger » et « dérange toujours » est-elle si grande ?',
          'la concession historique retournée en règle'),
        M('hi-r', 'retreat', 1,
          'Vous semblez maintenant défendre presque l’inverse de votre exposé. Qu’est-ce qui vous a fait changer d’avis, exactement ?',
          'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'decoration',
      against: 'contre',
      about: 'l’art réduit à la décoration',
      moves: [
        M('de1', 'counter', 1,
          'Si l’art n’a pas à déranger, qu’est-ce qui le distingue d’un joli papier peint ou d’une musique d’ascenseur ?',
          'la frontière avec la décoration'),
        M('de2', 'probe', 2,
          'Vous parlez de beauté et de consolation. Mais une publicité aussi peut être belle et réconfortante. Qu’est-ce que l’art apporte de plus ?',
          'ce que l’art ajoute à l’agréable'),
        M('de3', 'consequence', 3,
          'Un musée qui ne présenterait que ce qui ne gêne personne, la commissaire dit qu’il deviendrait un lieu de décoration. Vous acceptez ce musée-là ?',
          'le musée sans dérangement'),
      ],
    },
    {
      id: 'filature',
      against: 'contre',
      about: 'l’installation sonore de la filature',
      moves: [
        M('fi1', 'counter-example', 1,
          'Prenons l’installation du premier document. Si le musée avait baissé le son, les visiteurs auraient-ils compris ce que vivaient les ouvrières ?',
          'le malaise comme contenu de l’œuvre'),
        M('fi2', 'probe', 2,
          'Les anciennes ouvrières ont dit : « Pour la première fois, des gens savent ce qu’on entendait. » N’est-ce pas une preuve que le dérangement était nécessaire ?',
          'la reconnaissance des ouvrières'),
        M('fi3', 'consequence', 3,
          'Si l’on accepte qu’ici le malaise était indispensable, alors certaines réalités ne peuvent être montrées qu’en dérangeant. L’art qui veut les montrer n’a-t-il pas le devoir de déranger ?',
          'du cas particulier au devoir'),
      ],
    },
    {
      id: 'censure',
      against: 'contre',
      about: 'le risque de l’autocensure',
      moves: [
        M('ce1', 'consequence', 1,
          'Si l’on dit aux artistes que l’art n’a pas à déranger, ne risque-t-on pas de les encourager à éviter tout sujet sensible ?',
          'l’autocensure'),
        M('ce2', 'steelman', 2,
          'Votre argument le plus solide, à mon sens, est que la provocation s’use. Mais l’autocensure, elle, ne s’use pas : elle s’installe. Lequel de ces deux risques vous paraît le plus grave ?',
          'comparer l’usure et l’autocensure'),
        M('ce3', 'concession', 3,
          'Vous admettez que l’art ne doit pas avoir peur de déranger. Mais qui décide du moment où le dérangement est justifié ? Le musée, le public plaignant, l’artiste ?',
          'la concession reprise en question sur la décision'),
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
  // Written from the "contre" side (art need not disturb), answering the
  // filature counter-example: the two things the grid marks are visible, a
  // real concession and a thesis kept after it.
  modelAnswer:
    'Vous avez raison sur un point, et je ne veux pas l’esquiver : dans le cas de la filature, baisser le son aurait trahi l’œuvre. ' +
    'Le malaise n’était pas un effet secondaire, c’était ce que l’artiste voulait transmettre. ' +
    'Je l’accorde volontiers.\n\n' +
    'Mais je ne crois pas que cela transforme le dérangement en devoir. ' +
    'Ce qui était nécessaire ici, ce n’était pas de déranger, c’était de faire entendre une réalité précise, et il se trouve que cette réalité était insupportable. ' +
    'Le dérangement découle du sujet ; il n’est pas une exigence qui pèserait sur toute œuvre. ' +
    'Si demain un artiste veut faire éprouver la paix d’un matin d’hiver, on ne va pas lui reprocher de ne pas être assez dérangeant.\n\n' +
    'Quant à l’histoire de l’art, je vous rejoins en partie : beaucoup d’œuvres ont choqué. ' +
    'Mais elles n’ont pas duré parce qu’elles avaient choqué. Elles ont duré parce qu’elles étaient justes, et le choc s’est dissipé en quelques années. ' +
    'Aujourd’hui, plus personne n’est scandalisé par ces tableaux, et pourtant on continue de les regarder. ' +
    'C’est bien la preuve que leur valeur était ailleurs.\n\n' +
    'Enfin, sur l’autocensure, je comprends l’inquiétude, et c’est peut-être le risque que je prends le plus au sérieux. ' +
    'C’est pour cela que je ne dis pas que l’art doit éviter de déranger. Je dis qu’il n’a pas à le chercher. ' +
    'Un artiste doit pouvoir aborder n’importe quel sujet, y compris les plus pénibles, et un musée doit pouvoir le montrer, avec les précautions qui conviennent. ' +
    'Mais faire du dérangement une règle, c’est, à mon avis, remplacer une contrainte par une autre.',
  debate: PO1_DEBATE,
  rubric: entretienRubric('Ici : tenir la distinction entre devoir et effet face au contre-exemple de la filature ou à l’argument historique.'),
  examinerNotes: [
    ...PO_NOTES('« L’art doit-il déranger ? » ou « Vivre plus longtemps, est-ce vivre mieux ? »'),
    'Le jury conteste la position prise dans l’exposé, quelle qu’elle soit, puis élargit au-delà du dossier (marché de l’art, saturation des images, autocensure).',
  ],
};

/* ═══ PRODUCTION ORALE · SUJET 2 (DALF-55) · Vivre plus longtemps… ════════ */

// INVENTED: the Observatoire Ferrand des âges and every figure in its report
// (four years of life expectancy gained in twenty-five years, one and a half
// of them without disability; eight and eleven years of gap between the
// richest and poorest tenth; one person over eighty in four spending most
// days without a conversation; two in three over-seventies rating their
// health good against one in two twenty years earlier). The magazine « Les
// Âges de la vie », the journalist, and the former teacher Germaine Lacaze.
const PO2_DOC_1 =
  'DES ANNÉES GAGNÉES, MAIS LESQUELLES ?\n' +
  'Synthèse du rapport annuel de l’Observatoire Ferrand des âges\n\n' +
  'En vingt-cinq ans, l’espérance de vie à la naissance a progressé de quatre ans. ' +
  'C’est une réussite collective incontestable, due aux progrès de la médecine, à la prévention et à l’amélioration des conditions de vie. ' +
  'Mais le rapport invite à regarder de plus près la nature de ces années gagnées.\n\n' +
  'Sur ces quatre années, une et demie seulement ont été vécues sans incapacité. ' +
  'Autrement dit, la plus grande partie du temps gagné l’a été avec une limitation : difficulté à marcher, à voir, à accomplir seul les gestes du quotidien. ' +
  'L’espérance de vie en bonne santé progresse donc, mais nettement moins vite que l’espérance de vie tout court.\n\n' +
  'Ces moyennes masquent en outre de fortes inégalités. ' +
  'Entre les dix pour cent les plus aisés et les dix pour cent les plus modestes, l’écart d’espérance de vie atteint huit ans ; ' +
  'il dépasse onze ans pour l’espérance de vie sans incapacité. ' +
  'Les plus modestes vivent donc moins longtemps, et passent une plus grande part de leur vie avec des limitations.\n\n' +
  'Le rapport souligne aussi une difficulté moins visible : l’isolement. ' +
  'Une personne de plus de quatre-vingts ans sur quatre déclare passer la plupart de ses journées sans avoir de conversation avec quiconque. ' +
  'La perte du conjoint, la disparition des amis, l’éloignement des enfants et la difficulté à se déplacer se cumulent. ' +
  'Or l’isolement n’est pas seulement une souffrance morale : les personnes isolées consultent plus tard, suivent moins bien leurs traitements ' +
  'et entrent plus tôt en établissement, ce qui en fait aussi un facteur de perte d’autonomie.\n\n' +
  'Le rapport relève enfin le poids croissant de l’aide apportée par les proches. ' +
  // INVENTED: three million family carers, most of them women over fifty.
  'Près de trois millions de personnes, en majorité des femmes de plus de cinquante ans, ' +
  'accompagnent régulièrement un parent âgé, souvent au détriment de leur propre santé et de leur vie professionnelle. ' +
  'L’allongement de la vie se traduit donc aussi par une charge nouvelle pour la génération qui suit, celle des enfants.\n\n' +
  'Le tableau n’est pas uniformément sombre. ' +
  'Deux personnes de plus de soixante-dix ans sur trois jugent aujourd’hui leur santé bonne ou très bonne, contre une sur deux il y a vingt ans. ' +
  'Les seniors sont plus actifs, voyagent davantage, s’engagent plus souvent dans des associations.\n\n' +
  'L’Observatoire formule trois recommandations : ' +
  'faire de la prévention une priorité tout au long de la vie, et non seulement après soixante ans ; ' +
  'adapter les logements et les villes pour permettre de rester autonome plus longtemps ; ' +
  'enfin, considérer l’isolement des personnes âgées comme un enjeu de santé publique à part entière. ' +
  '« L’enjeu n’est plus seulement d’ajouter des années à la vie, conclut le rapport, mais de la vie aux années. »';

const PO2_DOC_2 =
  '« CE N’EST PAS LA LONGUEUR QUI M’INQUIÈTE, C’EST LA LARGEUR »\n' +
  'Témoignage de Germaine Lacaze, 88 ans, ancienne institutrice, recueilli par le magazine Les Âges de la vie\n\n' +
  'Sans la médecine, je serais morte deux fois. À soixante-dix ans d’un cancer, à quatre-vingt-deux ans du cœur. ' +
  'Alors, quand on me demande si vivre longtemps est une chance, je réponds oui, évidemment. ' +
  'J’ai connu mes arrière-petits-enfants. Ma mère, elle, n’a même pas connu ses petits-enfants.\n\n' +
  'Mais je ne vais pas vous raconter que tout est rose. ' +
  'Mon mari est parti il y a six ans. Mes amies, je les ai presque toutes enterrées. ' +
  'À un moment, on se surprend à compter les enterrements comme on comptait autrefois les mariages. ' +
  'Je marche avec une canne, je ne conduis plus, et mes semaines sont organisées autour des rendez-vous chez le médecin, le kiné, l’ophtalmologue. ' +
  'Il y a des jours où je ne parle à personne avant que l’infirmière ne passe le soir.\n\n' +
  'Ce qui me pèse le plus, ce n’est pas la douleur, on s’y fait. ' +
  'C’est d’avoir l’impression de ne plus servir à rien. ' +
  'Toute ma vie, j’ai été utile : j’ai appris à lire à des centaines d’enfants. ' +
  'Aujourd’hui, on est très gentil avec moi, mais on ne me demande plus rien. ' +
  'Et j’ai peur, je l’avoue, de devenir un poids pour mes enfants, de ne plus pouvoir choisir.\n\n' +
  'Et pourtant, je ne rendrais pas une seule de ces années. ' +
  'Je chante dans une chorale le mardi, je lis plus que jamais, et ma petite-fille m’appelle chaque dimanche pour que je l’aide à corriger les rédactions de son fils. ' +
  'Ces moments-là, je ne les aurais pas eus.\n\n' +
  'Ce qui m’a sauvée, je crois, c’est de déménager. Il y a trois ans, j’ai quitté ma maison, trop grande, avec son escalier, pour un petit appartement près du marché. ' +
  'Mes enfants trouvaient que c’était trop tôt. Aujourd’hui, je descends seule acheter mon pain, je croise des gens, la boulangère connaît mon prénom. ' +
  'Ça paraît peu de chose. C’est la différence entre une journée et une attente.\n\n' +
  'Ce que je voudrais dire aux jeunes qui décident pour nous, c’est que ce n’est pas la longueur de la vie qui m’inquiète. C’est sa largeur. ' +
  'On m’a donné des années ; personne ne s’est demandé quelle place j’y aurais. ' +
  'Une vie longue, ce n’est pas seulement un cœur qui bat plus longtemps. ' +
  'C’est une vie où l’on compte encore pour quelqu’un.';

const PO2_EXPOSE_MODEL =
  'Bonjour. Le sujet que j’ai choisi pose la question suivante : vivre plus longtemps, est-ce vivre mieux ? ' +
  'À première vue, la réponse semble aller de soi : qui refuserait des années supplémentaires ? ' +
  'Et pourtant, la question oppose deux mesures de la vie qui ne coïncident pas forcément, sa durée et sa qualité. ' +
  'Le dossier comporte deux documents de nature très différente. ' +
  'Le premier est la synthèse d’un rapport d’observatoire, qui analyse les années gagnées en chiffres. ' +
  'Le second est le témoignage d’une ancienne institutrice de quatre-vingt-huit ans, qui raconte ce que ces années représentent pour elle. ' +
  'Je me demanderai donc dans quelle mesure l’allongement de la vie constitue un progrès réel pour ceux qui la vivent. ' +
  'Je montrerai d’abord que vivre plus longtemps est un gain indéniable, puis que ce gain est inégal et souvent assombri par l’incapacité et la solitude, ' +
  'et enfin que la vraie question n’est peut-être pas la durée, mais la place que la société fait aux personnes âgées.\n\n' +
  'D’abord, il faut le dire sans détour : vivre plus longtemps est une conquête. ' +
  'Le rapport indique que l’espérance de vie a progressé de quatre ans en vingt-cinq ans, grâce à la médecine, à la prévention et à de meilleures conditions de vie. ' +
  'Et ce n’est pas seulement une question de durée : deux personnes de plus de soixante-dix ans sur trois jugent aujourd’hui leur santé bonne, contre une sur deux il y a vingt ans. ' +
  'Les seniors voyagent, s’engagent dans des associations. ' +
  'Le témoignage de Germaine Lacaze le confirme de façon très concrète. ' +
  'Elle aurait dû mourir deux fois, et grâce à ces années, elle a connu ses arrière-petits-enfants, ce que sa propre mère n’a jamais pu faire. ' +
  'Elle chante dans une chorale, elle lit plus que jamais. ' +
  'Je pense aussi à mon grand-père, qui a commencé à peindre à soixante-quinze ans et qui a exposé ses toiles dans sa commune à quatre-vingts ans. ' +
  'Pour lui, ces années n’étaient pas un sursis, mais une seconde vie. ' +
  'Dans ce sens, vivre plus longtemps, c’est souvent avoir le temps de vivre des choses qu’on n’aurait jamais connues.\n\n' +
  'Cependant, et c’est mon deuxième point, ce progrès moyen cache une réalité plus contrastée. ' +
  'Le rapport montre que, sur les quatre années gagnées, une et demie seulement l’ont été sans incapacité. ' +
  'La plus grande partie du temps supplémentaire est donc vécue avec des limitations : difficulté à marcher, à voir, à se débrouiller seul. ' +
  'De plus, ces gains sont très inégalement répartis : entre les plus aisés et les plus modestes, l’écart d’espérance de vie atteint huit ans, et plus de onze ans pour les années sans incapacité. ' +
  'Autrement dit, les plus pauvres vivent à la fois moins longtemps et moins bien. ' +
  'À cela s’ajoute l’isolement, que le rapport juge sous-estimé : une personne de plus de quatre-vingts ans sur quatre passe la plupart de ses journées sans parler à personne. ' +
  'Le témoignage donne un visage à ce chiffre : Germaine Lacaze a enterré son mari et presque toutes ses amies, ' +
  'ses semaines sont rythmées par les rendez-vous médicaux, et certains jours, elle ne parle à personne avant le passage de l’infirmière. ' +
  'Le rapport souligne d’ailleurs que l’isolement n’est pas seulement une souffrance morale : les personnes isolées consultent plus tard, suivent moins bien leurs traitements ' +
  'et perdent plus vite leur autonomie. ' +
  'Enfin, il ne faut pas oublier ceux qui accompagnent : près de trois millions de proches, en majorité des femmes de plus de cinquante ans, aident régulièrement un parent âgé, ' +
  'parfois au détriment de leur santé et de leur travail. ' +
  'J’ai vu ma propre mère réduire son temps de travail pendant plusieurs années pour s’occuper de sa mère, et je sais ce que cela lui a coûté. ' +
  'L’allongement de la vie a donc un prix, et ce prix n’est pas seulement payé par les personnes âgées elles-mêmes. ' +
  'On ne peut donc pas affirmer qu’une vie plus longue soit automatiquement une vie meilleure.\n\n' +
  'Faut-il en conclure que la question n’a pas de réponse ? Je ne le crois pas, et c’est mon troisième point. ' +
  'Ce qui frappe, dans le témoignage, c’est que ce qui pèse le plus à cette femme n’est ni la douleur ni même la solitude, mais le sentiment de ne plus servir à rien. ' +
  'Elle a été institutrice toute sa vie, et aujourd’hui, dit-elle, on est gentil avec elle, mais on ne lui demande plus rien. ' +
  'Sa formule résume tout le sujet : ce n’est pas la longueur de la vie qui l’inquiète, c’est sa largeur. ' +
  'Or la largeur d’une vie dépend en grande partie de la société. ' +
  'Le rapport le dit à sa manière, avec ses trois recommandations : la prévention tout au long de la vie, des logements et des villes adaptés, ' +
  'et la lutte contre l’isolement considérée comme un enjeu de santé publique. ' +
  'J’y ajouterais une dimension que les chiffres ne mesurent pas : donner aux personnes âgées un rôle, une utilité reconnue. ' +
  'Le moment où la petite-fille de Germaine Lacaze lui demande d’aider son arrière-petit-fils à corriger ses rédactions montre bien ce que cela peut être. ' +
  'Dans certains pays, des programmes associent des retraités au soutien scolaire ou à l’accueil des nouveaux arrivants : ' +
  'ce sont ces liens qui donnent du sens aux années gagnées. ' +
  'Le témoignage montre aussi le rôle du cadre de vie : en quittant une maison trop grande pour un appartement près du marché, Germaine Lacaze a retrouvé des rencontres quotidiennes, ' +
  'et elle résume cette différence d’une formule frappante : c’est la différence entre une journée et une attente. ' +
  'Autrement dit, quelques décisions concrètes, sur le logement ou les transports, peuvent transformer des années d’attente en années vécues.\n\n' +
  'En conclusion, vivre plus longtemps n’est pas, en soi, vivre mieux, mais c’est une condition qui rend une vie meilleure possible. ' +
  'Les années gagnées sont un progrès réel, mais elles sont souvent marquées par l’incapacité, réparties de façon injuste et menacées par la solitude. ' +
  'Elles pèsent aussi sur les proches qui accompagnent, et c’est une dimension que l’on oublie trop souvent lorsqu’on se contente de célébrer les moyennes. ' +
  'Pour qu’elles deviennent des années vécues pleinement, il ne suffit pas d’ajouter des années à la vie ; il faut, comme le dit le rapport, ajouter de la vie aux années. ' +
  'Et cela relève moins de la médecine que de nos choix collectifs : la manière dont nous aménageons nos villes, dont nous luttons contre les inégalités de santé, ' +
  'et la place que nous laissons à ceux qui ont vécu longtemps. ' +
  'On peut d’ailleurs se demander si une société qui vieillit ne gagnerait pas, elle aussi, à apprendre de ses aînés plutôt qu’à seulement les protéger. ' +
  'Je vous remercie.';

export const PO2_EXPOSE: ExamTask = {
  ...base,
  id: taskId('po_monologue', '002'),
  taskType: 'po_monologue',
  skill: 'PO',
  label: 'Production orale · Sujet 2 · Exposé',
  prompt: exposePrompt('Vivre plus longtemps, est-ce vivre mieux ?'),
  prepS: 3600,
  timingS: 600,
  parts: [
    { label: 'Document 1', text: PO2_DOC_1, items: [] },
    { label: 'Document 2', text: PO2_DOC_2, items: [] },
  ],
  responseSpec: { kind: 'audio', minDurationS: 480, maxDurationS: 600 },
  modelAnswer: PO2_EXPOSE_MODEL,
  rubric: exposeRubric('Ici : distinguer la durée de la vie et sa qualité, et exploiter à la fois les chiffres du rapport et l’expérience du témoignage.'),
  examinerNotes: [
    ...PO_NOTES('« L’art doit-il déranger ? » ou « Vivre plus longtemps, est-ce vivre mieux ? »'),
    'Points du dossier exploitables : quatre ans gagnés dont un an et demi sans incapacité ; inégalités de huit et onze ans ; isolement d’une personne de plus de quatre-vingts ans sur quatre ; santé perçue en amélioration ; trois recommandations ; « ajouter de la vie aux années » ; le témoignage : deux survies, les arrière-petits-enfants, le deuil, les rendez-vous médicaux, le sentiment d’inutilité, la peur de la dépendance, la chorale, « la longueur et la largeur ».',
    'Les chiffres du rapport sont inventés pour l’épreuve ; le candidat n’est pas évalué sur sa connaissance de chiffres réels.',
  ],
};

const PO2_DEBATE: ExamDebate = {
  question: 'Vivre plus longtemps, est-ce vivre mieux ?',
  opening: OPENING,
  clarify: {
    id: 'clarify',
    text: 'Avant d’aller plus loin, je voudrais être sûr de bien vous suivre. Pour vous, l’allongement de la vie est-il d’abord un progrès, ou d’abord un problème ?',
    cues: [],
    covers: 'lever l’ambiguïté sur la position défendue',
  },
  sideCues: {
    // "pour" = the candidate holds that living longer is living better.
    pour: [
      'vivre plus longtemps c est vivre mieux', 'c est un progres', 'oui c est une chance',
      'les annees gagnees sont une chance', 'on vit mieux qu avant', 'je suis plutot optimiste',
    ],
    contre: [
      'vivre plus longtemps ce n est pas vivre mieux', 'pas forcement mieux', 'la duree ne suffit pas',
      'ce qui compte c est la qualite', 'non pas forcement', 'on vit plus longtemps mais pas mieux',
    ],
  },
  axes: [
    /* ── against POUR: living longer is living better ───────────────────── */
    {
      id: 'incapacite',
      against: 'pour',
      about: 'les années gagnées vécues avec une incapacité',
      moves: [
        M('in1', 'counter', 1,
          'Selon le rapport, sur quatre années gagnées, une et demie seulement le sont sans incapacité. Vous appelez « vivre mieux » des années passées à ne plus pouvoir marcher seul ?',
          'la part des années avec incapacité'),
        M('in2', 'probe', 2,
          'Où placez-vous la limite ? À partir de quel degré de dépendance une année de plus cesse-t-elle, selon vous, d’être un gain ?',
          'le seuil de la dépendance'),
        M('in3', 'concession', 3,
          'Vous admettez que certaines années gagnées sont très difficiles. Alors votre thèse devient « vivre plus longtemps, c’est parfois vivre mieux ». Ce n’est plus tout à fait la même chose, n’est-ce pas ?',
          'la concession qui transforme la thèse'),
        M('in-r', 'retreat', 1,
          'Vous semblez maintenant défendre presque l’inverse de votre exposé. Qu’est-ce qui vous a fait changer d’avis, exactement ?',
          'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'inegalites',
      against: 'pour',
      about: 'des gains répartis inégalement',
      moves: [
        M('ie1', 'counter', 1,
          'Huit ans d’écart entre les plus aisés et les plus modestes, onze ans pour les années sans incapacité. Quand vous dites « on vit mieux », qui est ce « on » ?',
          'les inégalités d’espérance de vie'),
        M('ie2', 'consequence', 2,
          'Si les plus riches gagnent des années en bonne santé et les plus pauvres surtout des années de maladie, l’allongement de la vie ne creuse-t-il pas les inégalités au lieu de les réduire ?',
          'l’allongement comme facteur d’inégalité'),
        M('ie3', 'probe', 3,
          'Vous répondez que tout le monde progresse. Mais un progrès qui profite deux fois plus aux uns qu’aux autres, peut-on le présenter comme un progrès collectif sans réserve ?',
          'progrès moyen ou progrès partagé'),
      ],
    },
    {
      id: 'solitude',
      against: 'pour',
      about: 'l’isolement des grands âgés',
      moves: [
        M('so1', 'counter-example', 1,
          'Une personne de plus de quatre-vingts ans sur quatre passe la plupart de ses journées sans parler à personne. Est-ce cela, vivre mieux ?',
          'l’isolement massif'),
        M('so2', 'probe', 2,
          'Germaine Lacaze dit compter les enterrements comme on comptait les mariages. Plus on vit longtemps, plus on survit à ceux qu’on aime. Comment intégrez-vous ce deuil dans votre bilan ?',
          'survivre à ses proches'),
        M('so3', 'steelman', 3,
          'Je vous accorde que la solitude n’est pas une fatalité et qu’on peut la combattre. Mais tant qu’on ne le fait pas, peut-on dire que les années gagnées sont des années meilleures ?',
          'la solitude combattable mais non combattue'),
      ],
    },
    {
      id: 'utilite',
      against: 'pour',
      about: 'le sentiment d’inutilité',
      moves: [
        M('ut1', 'counter', 1,
          'Ce qui pèse le plus à cette ancienne institutrice, dit-elle, c’est de ne plus servir à rien. La médecine peut-elle quelque chose contre cela ?',
          'l’inutilité ressentie'),
        M('ut2', 'consequence', 2,
          'Si une société prolonge la vie sans donner de rôle à ceux qui vivent longtemps, ne produit-elle pas surtout des années d’attente ?',
          'des années sans rôle'),
        M('ut3', 'probe', 3,
          'Vous parlez de bénévolat, d’associations. Mais cela concerne surtout les seniors en bonne santé. Que proposez-vous pour ceux qui ne peuvent plus sortir de chez eux ?',
          'les plus dépendants'),
      ],
    },

    /* ── against CONTRE: living longer is not living better ─────────────── */
    {
      id: 'conquete',
      against: 'contre',
      about: 'une conquête que personne ne refuse',
      moves: [
        M('cq1', 'counter', 1,
          'Vous doutez que vivre plus longtemps soit vivre mieux. Mais connaissez-vous beaucoup de gens qui refuseraient cinq années de plus si on les leur offrait ?',
          'personne ne refuse des années'),
        M('cq2', 'probe', 2,
          'Germaine Lacaze dit elle-même qu’elle ne rendrait pas une seule de ces années. Pourquoi votre jugement devrait-il l’emporter sur le sien ?',
          'le jugement de la personne concernée'),
        M('cq3', 'concession', 3,
          'Vous reconnaissez que ces années lui ont apporté des moments précieux. Alors ce que vous contestez, ce n’est pas la longévité, ce sont les conditions dans lesquelles on vieillit. Votre réponse à la question n’est-elle pas finalement « oui, mais » ?',
          'la concession qui déplace la thèse'),
        M('cq-r', 'retreat', 1,
          'Vous semblez maintenant défendre presque l’inverse de votre exposé. Qu’est-ce qui vous a fait changer d’avis, exactement ?',
          'retraite : demander la raison du changement'),
      ],
    },
    {
      id: 'sante',
      against: 'contre',
      about: 'une santé perçue qui s’améliore',
      moves: [
        M('sa1', 'counter', 1,
          'Le rapport indique aussi que deux personnes de plus de soixante-dix ans sur trois jugent leur santé bonne, contre une sur deux il y a vingt ans. Ce chiffre ne contredit-il pas votre pessimisme ?',
          'l’amélioration de la santé perçue'),
        M('sa2', 'probe', 2,
          'Vous insistez sur les années d’incapacité. Mais une incapacité, ce peut être de mal voir ou de marcher avec une canne. Est-ce que cela empêche réellement de bien vivre ?',
          'ce que recouvre le mot incapacité'),
        M('sa3', 'consequence', 3,
          'Si l’on juge qu’une vie avec une limitation n’est pas une vie meilleure, que dit-on aux personnes handicapées de tous âges ?',
          'la conséquence pour la valeur des vies limitées'),
      ],
    },
    {
      id: 'choix',
      against: 'contre',
      about: 'la qualité de vie comme affaire de choix collectifs',
      moves: [
        M('ch1', 'steelman', 1,
          'Votre argument le plus fort est que la durée ne garantit pas la qualité. Mais les problèmes que vous citez, l’isolement, les logements inadaptés, ne viennent pas de la longévité elle-même. Pourquoi lui en faire porter la responsabilité ?',
          'la longévité confondue avec ses conditions'),
        M('ch2', 'probe', 2,
          'Si l’on adaptait les villes et qu’on luttait vraiment contre l’isolement, votre réponse à la question changerait-elle ?',
          'la réponse dépend-elle des politiques publiques'),
        M('ch3', 'consequence', 3,
          'Si la réponse dépend de nos choix, alors dire « vivre plus longtemps, ce n’est pas vivre mieux » revient à constater un échec politique, pas une vérité sur la vieillesse. Vous êtes d’accord ?',
          'constat politique ou vérité générale'),
      ],
    },
    {
      id: 'transmission',
      against: 'contre',
      about: 'ce que les années tardives apportent aux autres',
      moves: [
        M('tr1', 'counter-example', 1,
          'Des grands-parents qui gardent leurs petits-enfants, des retraités bénévoles dans les associations : ces années ne profitent-elles pas aussi à toute la société ?',
          'l’apport des aînés à la société'),
        M('tr2', 'probe', 2,
          'Et dans votre propre famille ? Qu’est-ce que la longévité de vos proches vous a apporté, à vous, personnellement ?',
          'l’expérience personnelle du candidat'),
        M('tr3', 'consequence', 3,
          'Si l’on considère surtout les années tardives comme un problème, ne risque-t-on pas de renforcer le sentiment d’inutilité que décrit justement ce témoignage ?',
          'le discours qui aggrave l’inutilité'),
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
  // Written from the "pour" side (living longer is, on balance, living
  // better), under the incapacity and inequality axes.
  modelAnswer:
    'Je vous accorde volontiers que le chiffre est préoccupant : une année et demie sans incapacité sur quatre gagnées, ce n’est pas ce qu’on imagine spontanément quand on parle de progrès. ' +
    'Et je reconnais que ma thèse, telle que je l’ai formulée, était peut-être trop générale.\n\n' +
    'Mais je maintiens l’essentiel. Une incapacité, au sens du rapport, ce n’est pas forcément la dépendance totale. ' +
    'C’est aussi marcher avec une canne ou mal voir de loin, comme Germaine Lacaze, qui chante pourtant dans une chorale et lit plus que jamais. ' +
    'Ce serait une erreur, à mon avis, de considérer qu’une vie avec une limitation est une vie au rabais. ' +
    'Sinon, il faudrait dire la même chose de toutes les personnes handicapées, et je ne crois pas que quiconque le pense.\n\n' +
    'Sur les inégalités, en revanche, vous touchez un point que je ne peux pas écarter. ' +
    'Huit ans d’écart, c’est considérable, et cela montre que l’allongement de la vie n’est pas réparti de façon juste. ' +
    'Mais justement : ce qui est injuste, c’est que les plus modestes en profitent moins, pas que d’autres en profitent. ' +
    'La réponse n’est pas de relativiser le progrès, c’est de le rendre accessible à tous, par la prévention dès le plus jeune âge, comme le recommande le rapport.\n\n' +
    'Donc, si je devais préciser ma position, je dirais ceci : vivre plus longtemps est une chance réelle, et la plupart de ceux qui la vivent la revendiquent. ' +
    'Ce qui fait qu’elle devient, ou non, une vie meilleure, ce sont nos choix collectifs : la santé publique, les logements, la place qu’on laisse aux personnes âgées. ' +
    'C’est un progrès inachevé, pas un progrès illusoire.',
  debate: PO2_DEBATE,
  rubric: entretienRubric('Ici : tenir la distinction entre durée et qualité face aux chiffres du rapport ou à la parole du témoin.'),
  examinerNotes: [
    ...PO_NOTES('« L’art doit-il déranger ? » ou « Vivre plus longtemps, est-ce vivre mieux ? »'),
    'Le jury conteste la position prise dans l’exposé, quelle qu’elle soit, puis élargit au-delà du dossier (handicap, politiques publiques, expérience familiale du candidat).',
  ],
};
