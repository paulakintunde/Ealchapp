// DELF B2 blanc-01 — Production écrite and Production orale.
//
// PE is one task of 25 points in an hour. PO is one task in two phases: a 5 to
// 7 minute monologue, then a 10 to 13 minute debate — and the debate is the
// larger half, which the candidate-facing instructions of the real paper bury.
//
// ── Draw two, choose one: NOT implemented, deliberately ─────────────────────
//
// The real épreuve gives the candidate two trigger documents at random and lets
// them keep one. Our schema has no representation for that, and half-building
// it would be worse than not building it. So this paper carries ONE trigger
// (DELF-107) and the topic bank's second PO row for this paper (DELF-110, a
// charity refusing a donation) is RESERVED rather than spent: it must not be
// drawn by paper 2 either, or the eventual pair will be split across papers.
//
// See DESIGN-delf-debate.md §9.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_OPEN, taskId } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  examinerNotes: NOTES_OPEN,
};

/* ═══ Production écrite — 1 task, 60 min, 25 points ═══════════════════════ */
//
// The prompt supplies the four things the grid's "Respect de la consigne"
// criterion needs, and a prompt missing any of them cannot be marked:
// a SITUATION, a ROLE to write from, an ADDRESSEE with a register attached,
// and a communicative PURPOSE.

export const PE_T1: ExamTask = {
  ...base,
  id: taskId('pe_short', '001'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'b2',
  label: 'Production écrite',
  prompt:
    'PRODUCTION ÉCRITE · 25 points · 1 heure\n\n' +
    'Vous habitez un immeuble dont les habitants partagent un jardin depuis vingt ans. ' +
    'La municipalité vient d’annoncer que ce jardin sera transformé en parking de vingt places ' +
    'd’ici l’été prochain, afin de compenser des places supprimées ailleurs dans le quartier.\n\n' +
    'En tant que représentant(e) des habitants de l’immeuble, vous écrivez au maire ' +
    'pour contester cette décision. Vous exposez la situation, vous développez une argumentation ' +
    'et vous formulez une demande précise.\n\n' +
    '250 mots minimum.',
  timingS: 3600,
  responseSpec: { kind: 'text', minWords: 250, maxWords: 400 },
  rubric: {
    criteria: [
      {
        key: 'consigne',
        label: 'Respect de la consigne et longueur',
        maxPoints: 5,
        descriptors: [
          'La lettre est écrite depuis le rôle demandé, adressée au maire, et conteste la décision : les trois sont présents.',
          'Une demande précise est formulée, et non seulement un désaccord exprimé.',
          'Longueur : au moins 225 mots pour le point plein ; de 176 à 224 mots, la moitié ; 175 mots ou moins, rien. Ce point vaut 1 des 5.',
        ],
      },
      {
        key: 'registre',
        label: 'Correction sociolinguistique',
        maxPoints: 5,
        descriptors: [
          'Registre formel tenu du début à la fin, envers une autorité municipale.',
          'Ouverture et clôture conformes à l’usage d’une lettre administrative.',
          'La contestation reste courtoise : l’indignation exprimée sans retenue coûte des points ici, quelle que soit la qualité de l’argument.',
        ],
      },
      {
        key: 'argumentation',
        label: 'Capacité à argumenter une prise de position',
        maxPoints: 5,
        descriptors: [
          'Au moins deux arguments distincts, et non le même reformulé.',
          'La raison invoquée par la municipalité — les places supprimées ailleurs — est prise en compte plutôt qu’ignorée.',
          'Une concession bornée vaut mieux qu’un refus global : reconnaître le problème du stationnement sans céder sur le jardin est ce que le niveau attend.',
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 5,
        descriptors: [
          'Le texte progresse : situation, arguments, demande. Les connecteurs marquent cette progression.',
          'Mise en page d’une lettre respectée ; ponctuation globalement exacte.',
        ],
      },
      {
        key: 'langue',
        label: 'Compétence lexicale et grammaticale',
        maxPoints: 5,
        descriptors: [
          'Vocabulaire assez étendu pour éviter les répétitions ; les lacunes sont contournées par périphrase.',
          'Bon contrôle grammatical. Des erreurs non systématiques subsistent sans gêner la lecture.',
          'Le conditionnel et le subjonctif sont employés là où la demande et la concession les appellent.',
        ],
      },
    ],
  },
  modelAnswer:
    'Monsieur le Maire,\n\n' +
    'Je vous écris au nom des trente-deux foyers de l’immeuble du 14, rue des Tilleuls, ' +
    'qui m’ont désignée pour les représenter. Nous avons appris par voie d’affichage ' +
    'que le jardin partagé situé derrière notre bâtiment serait transformé en parking ' +
    'de vingt places avant l’été.\n\n' +
    'Nous comprenons la difficulté à laquelle vous répondez. La suppression de places ' +
    'rue de la Fontaine a créé une tension réelle, et nous ne la contestons pas.\n\n' +
    'Nous contestons le choix de ce terrain, pour deux raisons.\n\n' +
    'La première tient à ce que ce jardin est devenu. Entretenu depuis vingt ans par les habitants, ' +
    'il accueille chaque semaine une quinzaine d’enfants après l’école et sert de lieu de garde ' +
    'informelle à plusieurs familles qui n’ont pas d’autre solution. ' +
    'Vingt places de stationnement se remplacent ; deux décennies de voisinage organisé, non.\n\n' +
    'La seconde est une question d’équilibre. Notre quartier a perdu son square en 2021 ' +
    'et son terrain de boules en 2023. Il ne resterait plus, après ce projet, ' +
    'aucun espace extérieur commun entre l’avenue et le canal.\n\n' +
    'Nous vous demandons de réexaminer l’emplacement retenu. ' +
    'L’ancienne cour de l’entrepôt municipal, à cent cinquante mètres, est inoccupée ' +
    'depuis la fermeture du service technique et offrirait une capacité comparable. ' +
    'Nous sommes prêts à participer à une réunion sur place, avec vos services, ' +
    'et à présenter le relevé d’usage du jardin que nous tenons depuis trois ans.\n\n' +
    'Je vous prie d’agréer, Monsieur le Maire, l’expression de ma considération distinguée.\n\n' +
    'Halima Berthaud, pour les habitants du 14, rue des Tilleuls',
};

/* ═══ Production orale, phase 1 — monologue suivi, 5 à 7 min ══════════════ */

export const PO_T1: ExamTask = {
  ...base,
  id: taskId('po_monologue', '001'),
  taskType: 'po_monologue',
  skill: 'PO',
  level: 'b2',
  label: 'Production orale · Monologue suivi',
  prompt:
    'PRODUCTION ORALE · 25 points · 30 minutes de préparation, 20 minutes de passation\n\n' +
    'Phase 1 · Monologue suivi (5 à 7 minutes)\n\n' +
    'Dégagez le problème soulevé par le document ci-dessous, ' +
    'puis présentez votre opinion sur ce sujet de manière claire et argumentée. ' +
    'Vous défendrez ensuite votre point de vue au cours d’un débat avec l’examinateur.\n\n' +
    'DOCUMENT\n\n' +
    'DEUX ANS SANS VOITURES : CE QUE DISENT LES CAISSES\n\n' +
    'La municipalité de Corbeny a fermé son centre-ville aux voitures en septembre il y a deux ans. ' +
    'L’association des commerçants publie cette semaine ses propres chiffres : ' +
    'sur les quarante-trois boutiques du périmètre, le chiffre d’affaires a reculé ' +
    'de douze pour cent en moyenne, et trois commerces ont fermé.\n\n' +
    'La mairie ne conteste pas ces chiffres et en avance d’autres. ' +
    'La fréquentation piétonne a augmenté de trente et un pour cent. ' +
    'Les relevés de qualité de l’air montrent une baisse nette des particules. ' +
    'Aucun accident impliquant un piéton n’a été enregistré depuis la fermeture, ' +
    'contre onze sur les deux années précédentes.\n\n' +
    '« Plus de monde et moins d’argent, cela veut dire que les gens se promènent ' +
    'au lieu d’acheter », résume la présidente de l’association. ' +
    'L’adjoint à l’urbanisme répond que deux ans est un délai trop court ' +
    'et que les villes comparables ont vu les chiffres remonter la quatrième année.',
  // Thirty minutes with the document, before the first word is spoken. It is a
  // real part of the épreuve and a runner that folds it into the speaking clock
  // gives the better-prepared candidate less time to speak.
  prepS: 1800,
  timingS: 420,
  responseSpec: { kind: 'audio', minDurationS: 300, maxDurationS: 420 },
  rubric: {
    criteria: [
      {
        key: 'probleme',
        label: 'Dégager le problème',
        maxPoints: 5,
        descriptors: [
          'Le problème est identifié comme un CONFLIT entre deux mesures légitimes, non résumé comme « la piétonnisation ».',
          'Le candidat distingue ce que chaque camp mesure : le chiffre d’affaires d’un côté, la fréquentation, l’air et les accidents de l’autre.',
          'Un candidat qui se contente de reformuler le document n’a pas dégagé le problème.',
        ],
      },
      {
        key: 'position',
        label: 'Présenter un point de vue argumenté',
        maxPoints: 5,
        descriptors: [
          'Une position est prise et annoncée, non suggérée.',
          'Au moins deux arguments distincts, avec un exemple ou un élément chiffré à l’appui.',
          'Un exposé équilibré qui ne tranche jamais ne répond pas à la consigne.',
        ],
      },
      {
        key: 'organisation',
        label: 'Marquer les relations entre les idées',
        maxPoints: 5,
        descriptors: [
          'L’exposé a une progression audible : le problème, la position, les arguments, la conclusion.',
          'Les connecteurs marquent l’opposition et la concession plutôt que la simple addition.',
        ],
      },
      {
        key: 'langue',
        label: 'Lexique et morphosyntaxe',
        maxPoints: 5,
        descriptors: [
          'Vocabulaire varié ; les répétitions sont évitées par reformulation.',
          'Bon contrôle grammatical malgré de petites fautes syntaxiques.',
        ],
      },
      {
        key: 'phonologie',
        label: 'Maîtrise du système phonologique',
        maxPoints: 5,
        descriptors: [
          'Prononciation et intonation claires et naturelles ; le débit soutient cinq à sept minutes sans se déliter.',
          'L’accent d’origine ne coûte rien tant qu’il ne gêne pas la compréhension.',
        ],
      },
    ],
  },
  modelAnswer:
    'Le document oppose deux séries de chiffres qui mesurent des choses différentes, ' +
    'et je crois que c’est là qu’est le problème plutôt que dans la piétonnisation elle-même. ' +
    'Les commerçants comptent ce qui passe en caisse. La mairie compte la fréquentation, ' +
    'l’air et les accidents. Aucun des deux ne ment, et les deux séries sont incomparables.\n\n' +
    'Ma position est qu’il faut maintenir la fermeture, pour deux raisons, ' +
    'et je voudrais dire d’abord ce que je concède.\n\n' +
    'Je concède que la baisse de douze pour cent est réelle et qu’elle est supportée ' +
    'par un petit nombre de personnes identifiables, alors que les bénéfices sont diffus. ' +
    'Trois fermetures, ce sont trois familles. Ce déséquilibre est un vrai problème politique ' +
    'et il mérite mieux qu’un haussement d’épaules.\n\n' +
    'Ma première raison est que la comparaison manque. On nous dit que le chiffre d’affaires ' +
    'a baissé de douze pour cent ; on ne nous dit pas de combien il a baissé ' +
    'dans les rues commerçantes restées ouvertes à la circulation. ' +
    'Si la baisse y est de dix pour cent, le débat change entièrement de nature.\n\n' +
    'Ma seconde raison est que onze accidents évités ne se rattrapent pas. ' +
    'On peut compenser une perte de recettes par une aide, un loyer réduit, une exonération. ' +
    'On ne compense pas un piéton renversé.\n\n' +
    'Ce que je propose n’est donc pas de choisir un camp mais de payer la facture ' +
    'du côté où elle tombe : maintenir la fermeture, et financer par la ville ' +
    'ce que la ville a décidé de faire supporter à quarante-trois commerces.',
};

/* ═══ Production orale, phase 2 — le débat, 10 à 13 min ═══════════════════ */
//
// The larger half of the épreuve, and the piece with no precedent in the pack.
//
// The bank attacks BOTH sides because which one the candidate took is unknown
// until they have spoken for five to seven minutes. Four axes each way, three
// depths per axis, plus a retreat move per side: 26 moves against the seven a
// TEF interaction carries. That is the real cost of this format.
//
// Depth means: 1 the objection plainly · 2 the objection sharpened, given their
// answer · 3 the concession probe, their own depth-2 answer turned against them.
// A retreat move is served only when the candidate switches sides, never from
// the ladder.

const M = (
  id: string,
  kind: 'probe' | 'counter' | 'counter-example' | 'consequence' | 'concession' | 'steelman' | 'retreat',
  depth: 1 | 2 | 3,
  text: string,
  covers: string
) => ({ id, kind, depth, text, covers, cues: [] });

export const PO_T2: ExamTask = {
  ...base,
  id: taskId('po_debate', '001'),
  taskType: 'po_debate',
  skill: 'PO',
  level: 'b2',
  label: 'Production orale · Débat',
  prompt:
    'Phase 2 · Débat avec l’examinateur (10 à 13 minutes)\n\n' +
    'L’examinateur va contester la position que vous venez de défendre. ' +
    'Confirmez et nuancez vos idées, apportez des précisions, ' +
    'et réagissez à ses arguments pour défendre votre point de vue.',
  timingS: 780,
  responseSpec: { kind: 'audio', minDurationS: 600, maxDurationS: 780 },
  debate: {
    question: 'Faut-il maintenir la fermeture du centre-ville aux voitures ?',
    opening: {
      id: 'open',
      text: 'Merci. Je vais maintenant contester ce que vous venez de dire, et vous me répondrez.',
      cues: [],
      covers: 'ouverture du débat',
    },
    clarify: {
      id: 'clarify',
      text:
        'Avant d’aller plus loin, je voudrais être sûr de vous avoir compris. ' +
        'Vous défendez le maintien de la fermeture, ou vous plaidez pour rouvrir le centre ?',
      cues: [],
      covers: 'lever l’ambiguïté sur la position défendue',
    },
    sideCues: {
      // "pour" = for keeping the closure.
      pour: [
        'maintenir la fermeture', 'il faut maintenir', 'je suis pour la pietonnisation',
        'garder le centre pietonnier', 'ne pas rouvrir', 'la fermeture doit continuer',
      ],
      contre: [
        'rouvrir le centre', 'il faut rouvrir', 'je suis contre la pietonnisation',
        'revenir en arriere', 'rendre la rue aux voitures', 'suspendre la fermeture',
      ],
    },
    axes: [
      /* ── against POUR: the candidate wants the closure kept ────────────── */
      {
        id: 'chiffres',
        against: 'pour',
        about: 'la perte encaissée par les commerçants',
        moves: [
          M('ch1', 'counter', 1,
            'Douze pour cent, ce n’est pas une abstraction. Ce sont des gens qui ont mis leurs économies dans un commerce. Vous leur demandez de payer pour une politique dont ils ne veulent pas.',
            'la perte est concrète et supportée par des personnes identifiables'),
          M('ch2', 'counter-example', 2,
            'Trois boutiques ont fermé. Que dites-vous précisément à ces trois commerçants ? Que leur fermeture est le prix de l’air pur ?',
            'le contre-exemple des trois fermetures'),
          M('ch3', 'concession', 3,
            'Vous venez d’admettre que la perte est réelle et qu’elle tombe sur peu de gens. Vous admettez donc que votre politique fait des victimes désignées. Comment défendez-vous encore le fait de choisir qui paie ?',
            'la concession sur la perte retournée en question sur le choix des perdants'),
          M('ch-r', 'retreat', 1,
            'Vous semblez maintenant dire l’inverse de ce que vous défendiez. Qu’est-ce qui vous a fait changer d’avis exactement ?',
            'retraite : demander la raison du changement'),
        ],
      },
      {
        id: 'equite',
        against: 'pour',
        about: 'qui bénéficie et qui paie',
        moves: [
          M('eq1', 'counter', 1,
            'Les gagnants de cette mesure habitent le centre. Ce sont déjà les mieux desservis de l’agglomération. Vous améliorez la vie de ceux qui vont le mieux.',
            'les bénéfices vont aux mieux dotés'),
          M('eq2', 'counter-example', 2,
            'Prenez quelqu’un du plateau, à vingt kilomètres, sans ligne de bus après dix-neuf heures. Avant, il venait faire ses courses ici. Maintenant il va à la zone commerciale. Qu’avez-vous gagné ?',
            'le contre-exemple de l’habitant sans alternative'),
          M('eq3', 'concession', 3,
            'Vous reconnaissez que l’accès s’est compliqué pour une partie des gens. Alors ce n’est pas un gain collectif : c’est un transfert d’un groupe vers un autre. Pourquoi ce transfert-là serait-il juste ?',
            'la concession sur l’accès retournée en question de justice distributive'),
        ],
      },
      {
        id: 'preuve',
        against: 'pour',
        about: 'la solidité des chiffres de la mairie',
        moves: [
          M('pr1', 'counter', 1,
            'La mairie annonce trente et un pour cent de fréquentation en plus. Plus de passants et moins de recettes, cela peut simplement vouloir dire que les gens traversent.',
            'la fréquentation n’est pas la dépense'),
          M('pr2', 'probe', 2,
            'Sur quoi vous appuyez-vous, alors, si ce n’est ni les caisses ni le comptage des piétons ? Nommez-moi la mesure qui trancherait.',
            'exiger le critère de preuve'),
          M('pr3', 'concession', 3,
            'Vous venez d’accorder que la fréquentation ne mesure pas le succès commercial. Vous retirez donc à la mairie son argument principal. Que lui reste-t-il ?',
            'la concession sur la fréquentation retournée contre la défense de la mairie'),
        ],
      },
      {
        id: 'alternative',
        against: 'pour',
        about: 'pourquoi une fermeture totale plutôt qu’un aménagement',
        moves: [
          M('al1', 'counter', 1,
            'Il existait une solution intermédiaire : fermer le samedi et aux heures d’école, laisser passer le reste du temps. Pourquoi tout ou rien ?',
            'l’option intermédiaire n’a pas été prise'),
          M('al2', 'consequence', 2,
            'Si un dispositif partiel apporte l’essentiel des bénéfices, votre fermeture totale coûte douze pour cent pour un supplément qu’on ne sait pas chiffrer. Assumez-vous ce calcul ?',
            'la conséquence : un coût élevé pour un bénéfice marginal'),
          M('al3', 'concession', 3,
            'Vous avez concédé qu’une formule partielle aurait déjà réglé une bonne part du problème. Qu’est-ce qui justifie encore d’aller jusqu’au bout ?',
            'la concession sur l’option partielle retournée en demande de justification'),
        ],
      },

      /* ── against CONTRE: the candidate wants the centre reopened ───────── */
      {
        id: 'causalite',
        against: 'contre',
        about: 'ce qui a réellement fait baisser les chiffres',
        moves: [
          M('ca1', 'counter', 1,
            'Vous attribuez la baisse à la fermeture. Le petit commerce recule partout depuis dix ans, dans les rues piétonnes comme dans les autres. Comment séparez-vous les deux ?',
            'la baisse peut avoir une autre cause'),
          M('ca2', 'counter-example', 2,
            'La ville voisine n’a rien fermé du tout et ses commerçants annoncent onze pour cent de baisse. Votre chiffre de douze devient quoi, dans ces conditions ?',
            'le contre-exemple de la ville comparable'),
          M('ca3', 'concession', 3,
            'Vous admettez que la comparaison affaiblit votre chiffre. C’était votre preuve principale. Sur quoi repose votre position maintenant ?',
            'la concession sur la comparaison retournée contre la preuve centrale'),
          M('ca-r', 'retreat', 1,
            'Vous défendiez la réouverture il y a un instant et vous semblez maintenant dire le contraire. Qu’est-ce qui a changé dans votre raisonnement ?',
            'retraite : demander la raison du changement'),
        ],
      },
      {
        id: 'delai',
        against: 'contre',
        about: 'le temps qu’on laisse à la mesure',
        moves: [
          M('de1', 'counter', 1,
            'Deux ans, c’est le creux de ce genre de dispositif. L’adjoint cite des villes où les chiffres remontent la quatrième année. Vous jugez avant la fin.',
            'le délai est trop court pour conclure'),
          M('de2', 'probe', 2,
            'Combien de temps faudrait-il, selon vous, pour que la mesure ait eu sa chance ? Donnez-moi un chiffre.',
            'exiger un horizon d’évaluation'),
          M('de3', 'concession', 3,
            'Vous venez d’accorder qu’il faut plusieurs années. Or vous demandez de rouvrir maintenant, c’est-à-dire avant ce délai. N’est-ce pas exactement l’erreur que vous reprochez à la mairie ?',
            'la concession sur le délai retournée en contradiction'),
        ],
      },
      {
        id: 'externalites',
        against: 'contre',
        about: 'ce que la caisse ne mesure pas',
        moves: [
          M('ex1', 'counter', 1,
            'Onze accidents impliquant des piétons en deux ans, zéro depuis. Ce chiffre-là ne passe dans la caisse de personne, et il ne vous intéresse pas.',
            'les bénéfices non marchands sont écartés'),
          M('ex2', 'consequence', 2,
            'Si l’on décidait tout à la recette commerciale, il faudrait rouvrir les rues d’école et supprimer les passages piétons, qui ralentissent aussi le trafic. Où s’arrête votre critère ?',
            'la conséquence : le critère marchand poussé jusqu’au bout'),
          M('ex3', 'concession', 3,
            'Vous accordez que la sécurité compte aussi. Vous avez donc deux colonnes et vous n’en lisez qu’une. Comment arbitrez-vous entre elles ?',
            'la concession sur la sécurité retournée en problème d’arbitrage'),
        ],
      },
      {
        id: 'reversibilite',
        against: 'contre',
        about: 'ce que coûterait le retour en arrière',
        moves: [
          M('re1', 'counter', 1,
            'Rouvrir n’est pas gratuit. Le mobilier, les terrasses, les plantations ont été payés par la ville. Vous proposez de les défaire.',
            'la réouverture a elle aussi un coût'),
          M('re2', 'counter-example', 2,
            'Une commune de la région a fermé, rouvert, puis refermé en six ans. Plus personne n’y investit dans un local, parce que personne ne sait de quoi la rue sera faite. Est-ce ce que vous voulez ?',
            'le contre-exemple de l’instabilité'),
          M('re3', 'concession', 3,
            'Vous reconnaissez qu’une réouverture aurait aussi ses victimes. Alors votre argument n’est plus « ne faisons pas payer les commerçants » : c’est « faisons payer d’autres ». Lesquels, et pourquoi eux ?',
            'la concession sur le coût du retour retournée en choix de perdants'),
        ],
      },
    ],
    closing: {
      id: 'close',
      text: 'Nous allons nous arrêter là. Je vous remercie.',
      cues: [],
      covers: 'clôture du débat',
    },
  },
  rubric: {
    criteria: [
      {
        key: 'nuance',
        label: 'Confirmer et nuancer ses idées',
        maxPoints: 5,
        descriptors: [
          'Le candidat apporte des précisions quand on les lui demande, plutôt que de répéter sa phrase initiale.',
          'Une concession bornée — accorder un point sans lâcher la position — vaut mieux qu’un refus global.',
          'ATTENTION : nuancer n’est PAS reculer. Le candidat qui qualifie sa position sous une bonne objection fait exactement ce que le niveau demande.',
        ],
      },
      {
        key: 'reaction',
        label: 'Réagir aux arguments d’autrui',
        maxPoints: 5,
        descriptors: [
          'Chaque objection reçoit une réponse qui la vise, et non un retour au discours préparé.',
          'La sonde de concession — « vous admettez X, donc… » — est la question la plus difficile de l’épreuve : y répondre en distinguant ce qui a été accordé de ce qui ne l’a pas été est le sommet du niveau.',
          'Abandonner la position n’est pas en soi une faute. Le faire sans pouvoir dire pourquoi en est une.',
        ],
      },
      {
        key: 'lexique',
        label: 'Lexique',
        maxPoints: 5,
        descriptors: [
          'Vocabulaire suffisamment varié pour reformuler sans se répéter sur douze minutes.',
          'Le lexique de la concession et de l’opposition est disponible : « je vous accorde », « il n’en reste pas moins », « à condition que ».',
        ],
      },
      {
        key: 'morphosyntaxe',
        label: 'Morphosyntaxe',
        maxPoints: 5,
        descriptors: [
          'Bon contrôle grammatical sous la pression de l’échange, malgré de petites fautes syntaxiques.',
          'Le subjonctif et le conditionnel tiennent dans les constructions concessives.',
        ],
      },
      {
        key: 'phonologie',
        label: 'Maîtrise du système phonologique',
        maxPoints: 5,
        descriptors: [
          'La prononciation reste claire quand le débit s’accélère sous la contradiction.',
          'L’intonation distingue la question de l’affirmation et la concession de l’accord.',
        ],
      },
    ],
  },
  modelAnswer:
    'Je vous accorde le premier point sans réserve : douze pour cent, ce sont des gens, ' +
    'et trois fermetures sont trois familles. Je ne vais pas défendre une politique ' +
    'en prétendant qu’elle n’a coûté à personne.\n\n' +
    'Là où je ne vous suis pas, c’est sur ce qu’il faut en conclure. ' +
    'Vous me demandez ce que je dis à ces trois commerçants. ' +
    'Je leur dis que la ville a pris une décision dont elle a tiré un bénéfice collectif ' +
    'et qu’elle leur a fait payer, et que c’est à la ville de compenser. ' +
    'Pas de renoncer à la décision : d’en payer le prix là où il tombe.\n\n' +
    'Sur la fréquentation, vous avez raison et je retire cet argument. ' +
    'Trente et un pour cent de passants ne prouvent rien sur les recettes, ' +
    'et je ne m’en servirai plus. Ce qui reste, et qui ne dépend pas de ce chiffre, ' +
    'ce sont les onze accidents. Ceux-là, aucune aide ne les rattrape après coup.\n\n' +
    'Vous me dites qu’une fermeture partielle aurait suffi. C’est possible, ' +
    'et je ne peux pas le réfuter avec les données du document. ' +
    'Ce que je peux dire, c’est que l’essai partiel a été fait ici pendant trois ans ' +
    'avant la fermeture, et que ni la qualité de l’air ni les accidents n’avaient bougé. ' +
    'Si vous m’apportez une ville où le dispositif partiel a donné les mêmes résultats ' +
    'que la fermeture complète, je change d’avis, et je le dirai.',
};
