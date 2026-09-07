// DELF B2 blanc-02 — Compréhension de l'oral. 20 questions, 25 points, ~30 min.
//
// Three exercises worth 9, 9 and 7. The first two are long documents played
// TWICE; the third is three short documents played once each.
//
// ── What the second listening is for ────────────────────────────────────────
//
// STANDARD-delf-b2 §2.2, and the reason question design differs from TCF's:
//
//   the FIRST pass yields the shape of the argument and the locate answers;
//   the SECOND yields attribute and weigh, which need a known destination
//   before the detail means anything.
//
// A question answerable only on the first pass is a memory test; one answerable
// on either is not using the format. Roughly the cheap half falls on the first
// hearing, and the two dearest questions in each exercise turn on distinguishing
// what a speaker REPORTS from what they ENDORSE.
//
// ── durationS is MEASURED, and the estimates were wrong in a useful way ─────
//
// These figures come off the rendered clips. The estimates they replaced were
// computed at ~150 words a minute and every one was too long: the render came
// in 14 to 35 seconds shorter, because the voices at speed 0.9 run nearer 150
// to 210 wpm depending on the register.
//
// That mattered. The three SHORT documents first rendered at 38, 43 and 44
// seconds against a suit that runs 60 to 80, and nothing caught it: the 900s
// audio ceiling and the listening clock are both UPPER bounds, so documents far
// too short satisfy them comfortably. delf/paper-rules.ts gained
// documentLengthViolations for exactly this, and the three scripts below were
// lengthened to roughly 200 words each — with texture, not with new facts,
// because the bank allows a short document exactly two answerable points.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId, uniq, ITEMS } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  taskType: 'co_mcq' as const,
  skill: 'CO' as const,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ EXERCICE 1 — 9 points ═══════════════════════════════════════════════ */
//
// DELF-18 · a newsroom that gives its corrections the prominence of its stories.
// Weights: 0.5 · 1 · 1.5 · 1 · 2 · 2.5 · 0.5 = 9
// Families: locate, locate, infer, infer, attribute, weigh, locate.
//
// The tension is real in both directions and neither speaker is a straw figure:
// the editor has a measured result and the researcher grants it, then shows the
// result cannot bear the weight being put on it. He is not against the practice.
//
// SELF-VERIFY: questions 5 and 6 both require holding one speaker's position
// apart from what they concede, which no keyword match reaches.

export const CO_EX1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '001'),
  level: 'b2',
  label: 'Compréhension de l’oral · Exercice 1',
  prompt:
    'Vous allez écouter 2 fois un document.\n' +
    'Vous écoutez une émission à la radio.\n' +
    'Lisez les questions, écoutez le document puis répondez.',
  timingS: 600,
  targetItemIds: uniq(ITEMS.journalisme),
  parts: [
    {
      label: 'Exercice 1 · un journal qui met ses erreurs en avant',
      playCount: 2,
      readWindowS: 60,
      durationS: 176,
      text:
        'UN JOURNALISTE : Depuis dix-huit mois, le Courrier de Valmont publie ses rectificatifs ' +
        'à la place qu’occupait l’article corrigé, et non plus en bas de page. ' +
        'Vous êtes rédactrice en chef. Qu’est-ce que cela a changé ?\n' +
        'UNE RÉDACTRICE EN CHEF : Nous avons interrogé nos abonnés au bout d’un an. ' +
        'Soixante-huit pour cent déclarent avoir davantage confiance dans le journal qu’avant. ' +
        'Pour une rédaction de notre taille, ce n’est pas un détail.\n' +
        'UN CHERCHEUR : Le chiffre est réel et je ne le conteste pas. ' +
        'Ce que je conteste, c’est ce qu’on lui fait porter. ' +
        'Vous avez interrogé des abonnés, c’est-à-dire des gens qui vous lisaient déjà ' +
        'et qui, pour la plupart, vous lisaient encore un an plus tard. ' +
        'Ceux que la démarche aurait pu faire fuir ne sont plus là pour répondre.\n' +
        'UNE RÉDACTRICE EN CHEF : Notre nombre d’abonnés a augmenté sur la période.\n' +
        'UN CHERCHEUR : De combien ?\n' +
        'UNE RÉDACTRICE EN CHEF : De quatre pour cent.\n' +
        'UN CHERCHEUR : Et la presse régionale dans son ensemble a progressé de trois. ' +
        'Vous avez donc fait un point de mieux que le mouvement général, ' +
        'ce qui est encourageant et ne prouve pas que ce point vient des rectificatifs. ' +
        'Vous avez changé trois choses cette année-là.\n' +
        'UNE RÉDACTRICE EN CHEF : Deux autres, oui. Un site refait et une newsletter.\n' +
        'UN JOURNALISTE : Vous diriez donc que la mesure ne sert à rien.\n' +
        'UN CHERCHEUR : Non, et je voudrais qu’on cesse de me le faire dire. ' +
        'Je pense qu’elle est juste, et je pense qu’on la défend mal. ' +
        'On la présente comme un investissement qui rapporte des lecteurs, ' +
        'et le jour où un journal la met en place sans rien gagner, ' +
        'tout le monde en conclura qu’elle ne marche pas. ' +
        'Alors qu’elle est simplement due au lecteur.\n' +
        'UNE RÉDACTRICE EN CHEF : Vous nous demandez de renoncer à notre meilleur argument.\n' +
        'UN CHERCHEUR : Je vous demande de ne pas construire dessus. ' +
        'Un argument fragile est celui que l’adversaire choisit, ' +
        'et il emporte le reste en tombant. Vous en avez un autre, plus solide : ' +
        'le nombre de vos articles contestés en justice a baissé de moitié. ' +
        'Cela, ça ne dépend pas de qui a répondu au questionnaire.\n' +
        'UNE RÉDACTRICE EN CHEF : C’est un effet auquel nous ne nous attendions pas.\n' +
        'UN CHERCHEUR : C’est souvent le cas des effets réels.\n' +
        'UN JOURNALISTE : Une objection revient : afficher ses erreurs, ' +
        'n’est-ce pas apprendre au lecteur qu’on se trompe souvent ?\n' +
        'UN CHERCHEUR : C’est l’objection sérieuse, et je n’ai pas de réponse complète. ' +
        'Nous savons qu’un lecteur qui voit deux rectificatifs par semaine ' +
        'estime le journal plus fiable qu’un lecteur qui n’en voit aucun. ' +
        'Nous ne savons pas ce qui se passe à dix par semaine, ' +
        'parce qu’aucune rédaction n’en publie autant.\n' +
        'UNE RÉDACTRICE EN CHEF : Nous en sommes à trois.\n' +
        'UN CHERCHEUR : Alors vous êtes précisément à l’endroit où personne ne sait.\n' +
        'UN JOURNALISTE : Que faudrait-il mesurer, selon vous ?\n' +
        'UN CHERCHEUR : Ceux qui se sont désabonnés. Personne ne les interroge jamais. ' +
        'Ce sont eux qui apprendraient quelque chose, ' +
        'et ce sont exactement ceux dont aucun bilan ne parle. ' +
        'On publie ce qu’ont dit les gens restés, on oublie les partis, ' +
        'et on appelle cela un résultat.',
      items: [
        {
          q: 'Où le journal publie-t-il désormais ses rectificatifs ?',
          opts: [
            'À la place qu’occupait l’article corrigé',
            'En bas de la page',
            'Dans une rubrique hebdomadaire',
            'Sur le site uniquement',
          ],
          correct: 0,
          why: 'Le journaliste l’annonce d’emblée : à la place de l’article corrigé, et non plus en bas de page.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'Quelle proportion d’abonnés déclare avoir davantage confiance ?',
          opts: ['Soixante-huit pour cent', 'Quatre pour cent', 'Trois pour cent', 'La moitié'],
          correct: 0,
          why: 'La rédactrice en chef cite soixante-huit pour cent au bout d’un an.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Pourquoi le chercheur juge-t-il l’enquête auprès des abonnés insuffisante ?',
          opts: [
            'Ceux que la démarche aurait fait partir n’y figurent pas',
            'L’échantillon était trop petit',
            'Les questions étaient mal formulées',
            'Elle a été menée trop tôt après le changement',
          ],
          correct: 0,
          why: 'Il dit que les abonnés interrogés lisaient déjà le journal et le lisaient encore : les partis ne répondent pas.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Que reproche le chercheur à la hausse de quatre pour cent ?',
          opts: [
            'Deux autres changements ont eu lieu la même année',
            'Elle est inférieure à celle du secteur',
            'Elle n’a pas été vérifiée',
            'Elle porte sur une période trop courte',
          ],
          correct: 0,
          why: 'Le secteur a progressé de trois, et la rédaction a aussi refait son site et lancé une newsletter.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Quelle est la position du chercheur sur la mesure elle-même ?',
          opts: [
            'Il la trouve juste et estime qu’on la défend mal',
            'Il la juge inutile et coûteuse',
            'Il attend une étude avant de se prononcer',
            'Il la soutient pour ses effets commerciaux',
          ],
          correct: 0,
          why:
            'Il refuse explicitement qu’on lui fasse dire qu’elle ne sert à rien : ' +
            'elle est juste et due au lecteur, et c’est sa défense qu’il critique.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Pourquoi conseille-t-il d’abandonner l’argument de la confiance ?',
          opts: [
            'Un argument fragile entraîne les autres en tombant',
            'Il est difficile à expliquer au public',
            'Il repose sur des données confidentielles',
            'Il a déjà été utilisé par des concurrents',
          ],
          correct: 0,
          why:
            'C’est celui que l’adversaire choisira ; il propose à la place la baisse de moitié ' +
            'des articles contestés en justice, qui ne dépend pas de qui a répondu.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Que faudrait-il mesurer, selon le chercheur ?',
          opts: [
            'Ceux qui se sont désabonnés',
            'Le nombre de rectificatifs par semaine',
            'La confiance des non-lecteurs',
            'Le temps passé sur le site',
          ],
          correct: 0,
          why: 'Il termine là-dessus : personne n’interroge les partis, et ce sont eux qui apprendraient quelque chose.',
          band: 'b2',
          points: 0.5,
        },
      ],
    },
  ],
};

/* ═══ EXERCICE 2 — 9 points ═══════════════════════════════════════════════ */
//
// DELF-21 · whether university rankings measure teaching or measure wealth.
// Weights: 1 · 0.5 · 1 · 1.5 · 2 · 2.5 · 0.5 = 9
// Families: locate, locate, infer, infer, attribute, weigh, locate.
//
// Deliberately a different rhetorical shape from exercise 1. There the sceptic
// supported the measure and attacked its defence; here the two speakers want
// different things from the same instrument and neither concedes the frame.

export const CO_EX2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  level: 'b2',
  label: 'Compréhension de l’oral · Exercice 2',
  prompt:
    'Vous allez écouter 2 fois un document.\n' +
    'Vous écoutez une table ronde.\n' +
    'Lisez les questions, écoutez le document puis répondez.',
  timingS: 600,
  targetItemIds: uniq(ITEMS.universite),
  parts: [
    {
      label: 'Exercice 2 · ce que mesurent les classements',
      playCount: 2,
      readWindowS: 60,
      durationS: 160,
      text:
        'UNE JOURNALISTE : L’université de Sainte-Ombre a gagné quarante places en trois ans. ' +
        'Sa présidente est avec nous, ainsi qu’une sociologue de l’éducation. ' +
        'Quarante places, c’est considérable.\n' +
        'UNE PRÉSIDENTE : C’est le résultat d’un travail que je peux décrire précisément. ' +
        'Nous avons réduit le nombre d’étudiants par enseignant, ' +
        'ouvert les bibliothèques le dimanche, et créé un tutorat en première année.\n' +
        'UNE SOCIOLOGUE : Ces trois mesures sont excellentes et je les recommanderais partout. ' +
        'Aucune des trois n’est ce qui vous a fait monter.\n' +
        'UNE PRÉSIDENTE : Vous connaissez la pondération mieux que moi, alors.\n' +
        'UNE SOCIOLOGUE : Elle est publique. La réputation auprès des employeurs ' +
        'pèse un tiers de la note. Les citations de vos chercheurs, un cinquième. ' +
        'Le taux d’encadrement que vous venez de citer, quatre pour cent.\n' +
        'UNE PRÉSIDENTE : Et la réputation ne se décrète pas.\n' +
        'UNE SOCIOLOGUE : Non. Elle se recueille par questionnaire, ' +
        'auprès de gens à qui l’on demande de nommer les meilleures universités du pays. ' +
        'La plupart en citent quatre ou cinq. Ce sont chaque année les mêmes.\n' +
        'UNE JOURNALISTE : Vous dites donc que l’université n’y est pour rien.\n' +
        'UNE SOCIOLOGUE : Je dis qu’elle y est pour quelque chose d’autre. ' +
        'Sainte-Ombre a recruté deux équipes de recherche en physique, ' +
        'très citées, avec des financements qui les suivaient. ' +
        'C’est cela qui a bougé, et cela ne dit rien de ce que vit un étudiant de licence.\n' +
        'UNE PRÉSIDENTE : J’accepte la description et je refuse la conclusion. ' +
        'Ces financements ont payé le tutorat. On ne recrute pas des équipes ' +
        'et on ne réforme pas la première année dans deux mondes séparés.\n' +
        'UNE SOCIOLOGUE : C’est un point que je vous accorde volontiers. ' +
        'Ce qui me gêne n’est pas que vous en profitiez, c’est ce que le classement raconte. ' +
        'Il annonce mesurer la qualité et il mesure d’abord la capacité à attirer de l’argent. ' +
        'Une université qui ferait exactement l’inverse de vous, ' +
        'tout mettre sur la licence et rien sur la recherche, descendrait.\n' +
        'UNE PRÉSIDENTE : Elle descendrait, c’est vrai.\n' +
        'UNE JOURNALISTE : Faudrait-il alors les abandonner ?\n' +
        'UNE SOCIOLOGUE : Je ne le crois pas, et c’est là que je surprends parfois. ' +
        'Ils sont la seule chose que lisent les familles qui n’ont personne ' +
        'pour les conseiller. Les supprimer laisserait le terrain ' +
        'à la réputation de bouche à oreille, qui est pire et invisible.\n' +
        'UNE PRÉSIDENTE : Que proposez-vous, alors ?\n' +
        'UNE SOCIOLOGUE : Qu’ils publient deux notes au lieu d’une. ' +
        'Une pour la recherche, une pour ce que reçoit un étudiant. ' +
        'Personne ne veut le faire, parce qu’une seule note fait un classement ' +
        'et deux notes font un tableau, et qu’un tableau ne se met pas en titre.',
      items: [
        {
          q: 'Combien de places l’université a-t-elle gagné en trois ans ?',
          opts: ['Quarante', 'Quatre', 'Vingt', 'Cinq'],
          correct: 0,
          why: 'La journaliste l’annonce en ouverture.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Quelle part de la note vient de la réputation auprès des employeurs ?',
          opts: ['Un tiers', 'Un cinquième', 'Quatre pour cent', 'La moitié'],
          correct: 0,
          why: 'La sociologue détaille la pondération : un tiers pour la réputation, un cinquième pour les citations.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'Que dit la sociologue des trois mesures citées par la présidente ?',
          opts: [
            'Elle les approuve, mais elles n’expliquent pas la montée',
            'Elle les juge insuffisantes',
            'Elle conteste qu’elles aient été mises en place',
            'Elle les trouve trop coûteuses',
          ],
          correct: 0,
          why: 'Elle les recommanderait partout, et dit qu’aucune des trois n’est ce qui a fait monter l’université.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'À quoi la sociologue attribue-t-elle la progression ?',
          opts: [
            'Au recrutement d’équipes de recherche très citées',
            'À l’ouverture des bibliothèques le dimanche',
            'À une hausse du nombre d’étudiants',
            'À un changement de méthode du classement',
          ],
          correct: 0,
          why: 'Deux équipes de physique, très citées, arrivées avec leurs financements.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Que concède la sociologue à la présidente ?',
          opts: [
            'Que les financements de recherche ont payé le tutorat',
            'Que la pondération est mal connue',
            'Que le classement mesure bien la qualité',
            'Que les familles lisent peu les classements',
          ],
          correct: 0,
          why:
            'Elle accorde volontiers qu’on ne recrute pas et qu’on ne réforme pas la licence ' +
            'dans deux mondes séparés ; sa gêne porte sur ce que le classement raconte.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Pourquoi la sociologue refuse-t-elle de supprimer les classements ?',
          opts: [
            'Sans eux, la réputation de bouche à oreille déciderait seule',
            'Ils sont exigés par les financeurs',
            'Ils font progresser les universités qui les prennent au sérieux',
            'Aucun autre indicateur n’existe',
          ],
          correct: 0,
          why:
            'Ils sont la seule chose que lisent les familles sans conseil, ' +
            'et les supprimer laisserait le terrain à une réputation invisible, qu’elle juge pire.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Que propose-t-elle à la place ?',
          opts: [
            'Publier deux notes séparées',
            'Interdire la pondération par réputation',
            'Classer les universités par région',
            'Publier les financements de chaque équipe',
          ],
          correct: 0,
          why: 'Une note pour la recherche, une pour ce que reçoit un étudiant : un tableau plutôt qu’un classement.',
          band: 'b2',
          points: 0.5,
        },
      ],
    },
  ],
};

/* ═══ EXERCICE 3 — 7 points ═══════════════════════════════════════════════ */
//
// Three short documents, played ONCE, two questions each.
// Weights: 1 · 1.5 · 1 · 1.5 · 1 · 1 = 7
//
// DELF-29 examens-et-diplomes · DELF-47 entraide · DELF-54 soins.
//
// The constraint that shapes these: each document must carry exactly two
// answerable points and no more. A third fact in a 70-second document is a
// distractor the candidate has no time to dismiss.

export const CO_EX3: ExamTask = {
  ...base,
  id: taskId('co_mcq', '003'),
  level: 'b2',
  label: 'Compréhension de l’oral · Exercice 3',
  prompt:
    'Vous allez écouter 1 fois trois documents courts.\n' +
    'Pour chaque document, lisez les questions, écoutez puis répondez.',
  timingS: 600,
  targetItemIds: uniq(ITEMS.examensEtDiplomes, ITEMS.entraide, ITEMS.soins),
  parts: [
    {
      label: 'Document 1 · un devoir qu’elle n’attribue pas',
      playCount: 1,
      readWindowS: 15,
      durationS: 79,
      text:
        'UNE ENSEIGNANTE : Le devoir est bon, et c’est cela qui m’arrête. ' +
        'Il est mieux construit que tout ce que cet étudiant m’a rendu en deux ans, ' +
        'et il ne contient aucune des maladresses qui font sa manière. ' +
        'Il a une façon de commencer ses phrases par la conclusion, ' +
        'de mettre trois exemples là où un seul suffirait ; rien de tout cela n’y est. ' +
        'Je n’ai pas de preuve, et c’est précisément le problème : ' +
        'je n’ai qu’une impression, et une impression ne se met pas dans un dossier. ' +
        'J’ai passé une semaine à me demander ce que je pouvais écrire, ' +
        'et la réponse était : rien que je puisse défendre devant une commission. ' +
        'Ce que j’ai changé, ce n’est donc pas ma façon de noter, ' +
        'c’est ma façon de faire travailler. ' +
        'Une partie du devoir se fait maintenant devant moi, en trente minutes, sans rien. ' +
        'Pas de téléphone, pas de brouillon apporté, aucun document. ' +
        'Je l’annonce dès la première séance et je l’annonce à tout le monde, ' +
        'parce qu’un dispositif réservé à un seul étudiant est une accusation. ' +
        'Ce n’est pas une surveillance, c’est un point de comparaison. ' +
        'Quand les deux textes ne se ressemblent pas, je ne sanctionne pas : ' +
        'je demande à l’étudiant de m’expliquer le sien, simplement, à voix haute. ' +
        'La conversation règle en dix minutes ce qu’un règlement ne réglerait pas en un an, ' +
        'et elle laisse une porte de sortie qu’une procédure ne laisse jamais.',
      items: [
        {
          q: 'Qu’est-ce qui éveille les soupçons de l’enseignante ?',
          opts: [
            'Le devoir ne présente aucune des maladresses habituelles de l’étudiant',
            'Le devoir a été rendu en retard',
            'Un autre étudiant a rendu le même texte',
            'Le sujet ne correspondait pas au cours',
          ],
          correct: 0,
          why: 'Il est mieux construit que tout le reste et ne porte aucune de ses maladresses.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Qu’a-t-elle modifié dans sa pratique ?',
          opts: [
            'Une partie du devoir se fait devant elle, sans documents',
            'Elle note désormais de façon anonyme',
            'Elle a supprimé les devoirs à la maison',
            'Elle fait relire les copies par un collègue',
          ],
          correct: 0,
          why: 'Trente minutes en classe, sans rien, comme point de comparaison plutôt que comme surveillance.',
          band: 'b2',
          points: 1.5,
        },
      ],
    },
    {
      label: 'Document 2 · une voiture pour tout un village',
      playCount: 1,
      readWindowS: 15,
      durationS: 78,
      text:
        'UN HABITANT : Nous sommes onze foyers et nous avons une voiture. ' +
        'Elle appartient à l’association, elle est garée devant la mairie, ' +
        'et le calendrier est sur un cahier accroché à la portière. ' +
        'On écrit son nom, l’heure de départ, l’heure de retour. C’est tout. ' +
        'Ce qui m’étonne encore, trois ans après, c’est que le cahier suffise. ' +
        'On nous avait annoncé qu’il faudrait une application, un système de réservation, ' +
        'peut-être une caution, et nous avons commencé par le cahier ' +
        'en nous disant que nous verrions bien. Nous voyons toujours. ' +
        'En trois ans, nous avons eu deux conflits : ' +
        'une fois deux familles pour le même samedi, une fois un retour très en retard. ' +
        'Les deux se sont réglés en discutant, dans la rue, en cinq minutes. ' +
        'Le vrai problème n’est pas celui qu’on nous annonçait. ' +
        'Ce n’est pas la répartition, c’est l’entretien. ' +
        'Personne ne se sent responsable d’un bruit qui commence, ' +
        'parce qu’il commence toujours pendant le trajet de quelqu’un d’autre. ' +
        'Nous avons fini par désigner deux personnes, et cela fonctionne, ' +
        'mais il nous a fallu deux ans pour comprendre que c’était là qu’il fallait regarder.',
      items: [
        {
          q: 'Comment les réservations sont-elles organisées ?',
          opts: [
            'Sur un cahier accroché à la voiture',
            'Par une application dédiée',
            'Par la mairie, sur demande',
            'À tour de rôle, une semaine chacun',
          ],
          correct: 0,
          why: 'Un cahier à la portière, et il précise que cela suffit contrairement à ce qu’on leur avait annoncé.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Quel problème s’est révélé le plus difficile ?',
          opts: [
            'L’entretien, dont personne ne se sent responsable',
            'La répartition des créneaux',
            'Le coût de l’assurance',
            'Le nombre de foyers participants',
          ],
          correct: 0,
          why: 'Il oppose le problème annoncé, la répartition, au problème réel : un bruit qui commence chez quelqu’un d’autre.',
          band: 'b2',
          points: 1.5,
        },
      ],
    },
    {
      label: 'Document 3 · quinze minutes, depuis vingt ans',
      playCount: 1,
      readWindowS: 15,
      durationS: 71,
      text:
        'UN MÉDECIN : La consultation dure quinze minutes, et elle durait quinze minutes ' +
        'quand j’ai commencé. Entre-temps, ce qu’il faut y faire a doublé. ' +
        'Il y a vingt ans, je posais des questions et j’examinais. ' +
        'Aujourd’hui je fais tout cela, plus la saisie dans le dossier, ' +
        'plus la vérification des interactions entre traitements, plus le codage de l’acte, ' +
        'plus l’explication d’un traitement que le patient a déjà lu quelque part. ' +
        'Cette dernière partie est la plus utile de toutes, ' +
        'et c’est exactement la première que je coupe quand je suis en retard. ' +
        'Je la coupe en sachant ce que je fais, ce qui ne la rend pas plus facile à couper. ' +
        'Un patient à qui l’on n’explique rien revient, ou bien ne revient pas du tout, ' +
        'et les deux coûtent plus cher que les quatre minutes économisées. ' +
        'On me propose souvent des outils pour aller plus vite. ' +
        'Je les essaie, et ils marchent : la saisie va deux fois plus vite qu’il y a cinq ans. ' +
        'Mais le temps gagné n’est jamais rendu à la conversation. ' +
        'Il est absorbé par la tâche suivante, qui n’existait pas l’année d’avant.',
      items: [
        {
          q: 'Qu’est-ce qui a changé depuis vingt ans ?',
          opts: [
            'Le travail à accomplir a doublé, pas la durée',
            'La durée a été réduite de moitié',
            'Le nombre de patients par jour a baissé',
            'Les consultations se font désormais à distance',
          ],
          correct: 0,
          why: 'Quinze minutes hier comme aujourd’hui, pour un contenu qui a doublé.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Que dit-il des outils censés faire gagner du temps ?',
          opts: [
            'Le temps gagné est absorbé par la tâche suivante',
            'Ils sont trop compliqués à utiliser',
            'Ils allongent en réalité la consultation',
            'Ils ne conviennent pas aux patients âgés',
          ],
          correct: 0,
          why: 'Il précise qu’ils marchent, et que le temps gagné n’est jamais rendu à la conversation.',
          band: 'b2',
          points: 1,
        },
      ],
    },
  ],
};
