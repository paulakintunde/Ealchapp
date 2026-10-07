// DALF C1 blanc-04: Compréhension de l’oral. 17 questions, 25 points, ~40 min.
//
// Part 1 (18 points): one long document, an interview, heard TWICE; 10
// questions, 4 MCQ (1.5, 1.5, 1, 2) and 6 short typed answers (2 each).
// Part 2 (7 points): two short radio extracts heard ONCE each, 3 + 4 MCQ at
// 1 point.
//
// ── durationS is ESTIMATED, not measured ────────────────────────────────────
//
// Nothing here has been rendered. Each durationS below is the spoken word count
// (labels stripped, spokenTranscript) at the ~175 wpm C1 rate of
// STANDARD-common §2, rounded up. The render pipeline overwrites it with the
// clip's real length; until then dalf/paper-rules.ts checks the estimate. The
// interview has real hesitations and will likely render a little slower per
// word than the flash (VOICES-dalf-c1 §2); the headroom under the 600 s
// ceiling is given in paper.test.ts.
//
// ── Keys ────────────────────────────────────────────────────────────────────
//
// MCQ are authored key-first (correct: 0) next to their `why`, and paper.ts
// scatters them per part (scatterMcqKeys). Short answers carry `keywords`
// (every group met by one stem) and a `model` that meets them; paper.test.ts
// asserts it, and the scratch probe (scratchpad/dalf-blanc04/probe.ts) ran
// plausible right and wrong answers against every group.
//
// ── Casting ─────────────────────────────────────────────────────────────────
//
// Part 1 is a mixed pair, as VOICES-dalf-c1 §1 asks: a woman host (f-media)
// who ASKS, and a man expert (m-formal) who argues. Part 2 names its genre in
// each part label, which is what examAudio.ts dalfGenreKey reads: the advert
// is cast on warm neutral voices, the flash on the band (media voice first).
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { C1_CO_TARGETS } from '../exam-c1-targets.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  taskType: 'co_mcq' as const,
  skill: 'CO' as const,
  level: 'c1' as const,
  examinerNotes: NOTES_CLOSED,
  targetItemIds: [...C1_CO_TARGETS],
};

/* ═══ PARTIE 1 · 18 points ═══════════════════════════════════════════════ */
//
// DALF-04 · a philosopher on whether we owe anything to people not yet born.
//
// The tension: the expert holds that we owe future people not a way of life
// but open options, and that what makes a duty strong is irreversibility, not
// distance in time. The host puts four positions to him that he does NOT hold
// (people who do not exist cannot be owed anything; we cannot know what they
// will want; the living who suffer come first; « leave no debt to our
// children ») and he grants part of each before refusing its conclusion.
// Questions 1, 6, 7 and 8 turn on keeping his view apart from what he grants.
//
// INVENTED, all of it: the programme « Le Temps long », the philosopher
// Gaspard Lemerre and the université de Varenne, his book « Ceux qui ne sont
// pas encore là », the storage site of Ferlanche in the massif de l’Ostrel
// (designed to stay sealed for a hundred thousand years; the warning problem
// framed at ten thousand), the Institut Calvel poll (seven people in ten say
// they think of their grandchildren when they vote; one in five would pay more
// for a project whose benefits come after 2080), the région d’Aubrève and its
// « conseil des générations futures » of high-school pupils drawn by lot,
// created four years ago. The example of the glass buried in the sand is a
// stock thought experiment, attributed to no one.
//
// Families: locate (1, 4), reformulate (2, 3, 5, 9), attribute (7, 8),
// weigh (6, 10). The first hearing yields 1, 2, 3, 4, 5; the second 6, 7, 8,
// 9, 10, which need the expert's view held apart from what he concedes.

const INTERVIEW =
  'UNE JOURNALISTE : Bonsoir à toutes et à tous, et bienvenue dans « Le Temps long ». ' +
  'Ce soir, une question simple en apparence : devons-nous quelque chose à ceux qui ne sont pas encore nés ? ' +
  'Mon invité est philosophe, il enseigne à l’université de Varenne et il vient de publier « Ceux qui ne sont pas encore là ». ' +
  'Gaspard Lemerre, bonsoir.\n' +
  'UN PHILOSOPHE : Bonsoir.\n' +
  'UNE JOURNALISTE : Commençons par l’objection que tout le monde a en tête. Ces gens n’existent pas. ' +
  'Comment pourrait-on avoir des devoirs envers personne ?\n' +
  'UN PHILOSOPHE : C’est la bonne question pour commencer, et, euh, je ne vais pas la balayer. ' +
  'Juridiquement, vous avez raison : un être qui n’existe pas n’a pas de droits, il ne peut rien réclamer. ' +
  'Mais un devoir, lui, n’a pas besoin que quelqu’un soit là pour le réclamer. ' +
  'Je prends souvent un exemple très simple. Imaginez que je casse une bouteille et que j’enterre les morceaux de verre dans le sable d’une plage. ' +
  'Dans dix ans, un enfant qui n’est pas encore né marche pieds nus à cet endroit et se coupe. ' +
  'Est-ce que j’ai fait du tort à cet enfant ? Tout le monde répond oui. ' +
  'Pourtant, au moment où j’ai agi, il n’existait pas.\n' +
  'UNE JOURNALISTE : Donc le tort peut précéder la victime.\n' +
  'UN PHILOSOPHE : Voilà. Le tort voyage dans le temps, si vous voulez. ' +
  'Ce qui compte, ce n’est pas que la victime existe au moment où j’agis, c’est qu’elle existera au moment où le dommage la frappera. ' +
  'Et pour beaucoup de nos décisions collectives, ça, c’est à peu près certain.\n' +
  'UNE JOURNALISTE : D’accord pour le verre sur la plage. Mais à l’échelle d’une société, on ne sait pas qui seront ces gens, ce qu’ils voudront, ce qu’ils aimeront. ' +
  'Comment décider à leur place ?\n' +
  'UN PHILOSOPHE : Alors là, je vous rejoins en partie. On ne connaît pas leurs goûts, ' +
  'et je me méfie beaucoup de ceux qui prétendent savoir ce que voudront nos arrière-petits-enfants. ' +
  'Mais il y a une différence entre leurs goûts et leurs conditions. ' +
  'Je ne sais pas s’ils aimeront la musique que j’aime. ' +
  'Je sais qu’ils auront besoin d’une eau qu’on peut boire, d’un sol qui ne soit pas empoisonné, d’institutions qui fonctionnent. ' +
  'Et surtout, je sais une chose : ils voudront choisir. ' +
  'C’est pour ça que, dans le livre, je soutiens que ce que nous leur devons, ce n’est pas un mode de vie, c’est… des possibilités. ' +
  'Ne pas fermer les portes à leur place.\n' +
  'UNE JOURNALISTE : Ne pas fermer les portes. Vous avez un exemple concret ?\n' +
  'UN PHILOSOPHE : Le plus parlant, c’est celui des déchets radioactifs. ' +
  // INVENTED: the site, the massif, the hundred thousand and the ten thousand years.
  'Le site de stockage de Ferlanche, dans le massif de l’Ostrel, a été conçu pour rester étanche pendant cent mille ans. ' +
  'Cent mille ans ! Et la question qui a occupé les ingénieurs pendant des années n’était pas technique, elle était… presque philosophique : ' +
  'comment avertir des gens qui vivront dans dix mille ans, et qui ne sauront peut-être plus lire nos panneaux, qu’il ne faut pas creuser ici ?\n' +
  'UNE JOURNALISTE : Et qu’est-ce qu’ils ont trouvé ?\n' +
  'UN PHILOSOPHE : Rien de satisfaisant, et c’est ça qui est instructif. ' +
  'On a imaginé des symboles, des récits transmis de génération en génération. Aucune solution n’est sûre. ' +
  'Mais ce que l’exemple montre surtout, c’est qu’il y a des décisions qu’on ne peut pas reprendre. ' +
  'Une fois le site rempli et refermé, nos descendants n’ont plus le choix : ils héritent du problème, qu’ils l’aient voulu ou non. ' +
  'Et c’est là que je situe le critère. Ce qui crée un devoir fort, ce n’est pas la distance dans le temps, c’est l’irréversibilité.\n' +
  'UNE JOURNALISTE : Alors, objection inverse. Il y a aujourd’hui des gens qui ont faim, qui n’ont pas de logement. ' +
  'Se soucier de gens qui n’existent pas encore pendant que les vivants souffrent, est-ce que ce n’est pas un luxe de pays riche ?\n' +
  'UN PHILOSOPHE : Elle est sérieuse. Je réponds deux choses. ' +
  'D’abord, très souvent, l’opposition est fausse : isoler des logements, par exemple, ça aide les familles modestes tout de suite et ça réduit ce qu’on laisse derrière nous. ' +
  'Ensuite, quand il y a un vrai conflit, je ne dis pas que les générations futures passent en premier. Au contraire. ' +
  'Une souffrance actuelle, certaine, l’emporte en général sur un dommage futur, incertain. ' +
  'Sauf, et c’est toujours le même critère, quand ce dommage futur ne pourra plus être réparé. ' +
  'Une dette, on peut la renégocier. Un sol empoisonné pour des siècles, non.\n' +
  'UNE JOURNALISTE : Vous parlez de dette. C’est justement l’argument favori de ceux qui veulent réduire les dépenses publiques : ' +
  '« ne laissons pas une dette à nos enfants ».\n' +
  'UN PHILOSOPHE : Oui, et je m’en méfie un peu. Une dette, tout dépend de ce qu’elle a financé. ' +
  'Si on emprunte pour construire des écoles ou des hôpitaux qui serviront cinquante ans, on laisse aussi l’école et l’hôpital. ' +
  'Ce qui serait injuste, c’est de laisser la facture sans le bâtiment. ' +
  'Donc, euh, l’argument n’est pas faux, mais il ne regarde qu’une colonne du bilan.\n' +
  'UNE JOURNALISTE : Il y a un paradoxe dans l’opinion, d’ailleurs. ' +
  // INVENTED: the Institut Calvel poll and its two figures.
  'Selon un sondage de l’Institut Calvel, sept personnes sur dix disent penser à leurs petits-enfants quand elles votent, ' +
  'mais une sur cinq seulement accepterait de payer davantage pour un projet dont les bénéfices n’arriveraient qu’après 2080.\n' +
  'UN PHILOSOPHE : Je n’y vois pas d’hypocrisie, plutôt une question de structure. ' +
  'Le sacrifice est immédiat, il est sur ma feuille d’impôt ; le bénéfice est lointain, et je ne le verrai pas. ' +
  'Aucun individu ne peut porter seul ce décalage. C’est précisément le rôle des institutions de le porter à notre place.\n' +
  'UNE JOURNALISTE : Justement, certains territoires essaient. ' +
  // INVENTED: the région d’Aubrève, its council and the four years.
  'La région d’Aubrève a créé il y a quatre ans un « conseil des générations futures », composé de lycéens tirés au sort, qui donne un avis sur les grands projets. ' +
  'Qu’en pensez-vous ?\n' +
  'UN PHILOSOPHE : L’intention est excellente, et ces jeunes font un travail sérieux. ' +
  'Mais il y a une confusion. Un lycéen de seize ans, c’est un vivant. ' +
  'Il parle pour la jeunesse d’aujourd’hui, avec les intérêts de la jeunesse d’aujourd’hui. ' +
  'Il ne parle pas pour quelqu’un qui naîtra dans un siècle. ' +
  'Au sens strict, personne ne peut représenter ces gens-là. ' +
  'Ce qu’on peut faire, en revanche, c’est obliger ceux qui décident à se poser une question : cette décision, est-ce qu’on pourra la défaire ?\n' +
  'UNE JOURNALISTE : C’est votre proposition ?\n' +
  'UN PHILOSOPHE : C’est la plus modeste. Que tout grand projet public soit accompagné d’une sorte d’étude d’irréversibilité : ' +
  'qu’est-ce qu’on ferme, pour combien de temps, et combien coûterait un retour en arrière. ' +
  'Ce n’est pas spectaculaire, mais ça change la manière de discuter.\n' +
  'UNE JOURNALISTE : Un dernier mot. Vous êtes optimiste ?\n' +
  'UN PHILOSOPHE : Euh… je suis frappé par une chose. Pendant des siècles, des gens ont commencé des édifices qu’ils savaient ne jamais voir achevés. ' +
  'Il y avait là un sens du temps long que nous avons en partie perdu, parce que tout, chez nous, se pense à l’échelle d’un mandat ou d’un bilan trimestriel. ' +
  'Ce n’est pas une fatalité. Mais il faut réapprendre à se sentir un maillon de la chaîne, et pas… le dernier.\n' +
  'UNE JOURNALISTE : Gaspard Lemerre, merci.\n' +
  'UN PHILOSOPHE : Merci à vous.';

export const CO_PART1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '001'),
  label: 'Compréhension de l’oral · Partie 1',
  prompt:
    'Vous allez entendre deux fois un document.\n' +
    'Vous écoutez une émission de radio consacrée à ce que nous devons aux générations futures.\n' +
    'Vous avez d’abord 3 minutes pour lire les questions. Après la première écoute, ' +
    'vous avez 3 minutes pour commencer à répondre. Après la seconde écoute, ' +
    'vous avez encore 5 minutes pour compléter vos réponses.\n' +
    'Pour les questions à réponse rédigée, répondez avec vos propres mots, en une ou deux phrases.',
  // 180 read + 2 × 396 played + 180 + 300 answering = 1452, rounded up.
  timingS: 1500,
  parts: [
    {
      label: 'Document 1 · entretien',
      playCount: 2,
      readWindowS: 180,
      // ESTIMATED at 175 wpm from the spoken word count; not yet rendered.
      durationS: 396,
      text: INTERVIEW,
      items: [
        // 1 · Attribute · 1.5
        {
          q: 'Que concède le philosophe à ceux qui jugent impossible d’avoir des devoirs envers des personnes qui n’existent pas encore ?',
          opts: [
            'Qu’elles ne possèdent aucun droit au sens juridique',
            'Qu’on ne peut leur causer aucun tort véritable',
            'Qu’on ne doit rien qu’à ses propres descendants',
          ],
          correct: 0,
          why: '« Juridiquement, vous avez raison : un être qui n’existe pas n’a pas de droits. » Il soutient l’inverse de la deuxième option (l’exemple du verre) ; la troisième n’est jamais dite.',
          band: 'c1',
          points: 1.5,
        },
        // 2 · Reformulate · 2
        {
          kind: 'short',
          q: 'Que cherche à démontrer le philosophe avec l’exemple de la bouteille cassée sur la plage ?',
          opts: [],
          correct: -1,
          keywords: [
            // No 'victime': « une victime future a des droits » met both groups (review).
            ['tort', 'dommage', 'nuire', 'nuis', 'blesse', 'prejudic', 'faire du mal', 'causer du mal', 'leser', 'lese'],
            ['futur', 'avenir', 'plus tard', 'naitr', 'naiss', 'a venir', 'ulterieur', 'apres coup', 'dans dix ans', 'existera'],
          ],
          model: 'Qu’on peut faire du tort à une personne future : il suffit que la victime existe au moment où le dommage se produit, même si elle n’existait pas quand on a agi.',
          why: '« Ce qui compte, ce n’est pas que la victime existe au moment où j’agis, c’est qu’elle existera au moment où le dommage la frappera. »',
          band: 'c1',
          points: 2,
        },
        // 3 · Reformulate · 2
        {
          kind: 'short',
          q: 'Quelle distinction le philosophe établit-il pour répondre à l’idée qu’on ignore ce que voudront les générations futures ?',
          opts: [],
          correct: -1,
          keywords: [
            ['gout', 'preferen', 'aimer', 'aimeront', 'envies', 'desir', 'mode de vie'],
            // No bare 'besoin': the reversed « leurs besoins, qu’on ignore, et leurs goûts, qu’on peut
            // deviner » met both groups (review).
            ['condition', 'besoins essentiels', 'besoins vitaux', 'besoins fondamentaux', 'besoins de base', 'besoins elementaires', 'besoins primaires', 'besoin d eau', 'besoin d un sol', 'besoin d institutions', 'potable', 'boire', 'd eau', 'sol sain', 'sol empoison', 'institution', 'vital', 'necessit', 'essentiel', 'fondamenta', 'minimum'],
          ],
          model: 'Il distingue leurs goûts, qu’on ne connaît pas, de leurs conditions de vie, qu’on connaît : ils auront besoin d’eau potable, d’un sol sain et d’institutions qui fonctionnent.',
          why: '« Il y a une différence entre leurs goûts et leurs conditions. »',
          band: 'c1',
          points: 2,
        },
        // 4 · Locate · 1.5
        {
          q: 'D’après le philosophe, que devons-nous avant tout aux générations futures ?',
          opts: [
            'La liberté de faire leurs propres choix',
            'Un mode de vie semblable au nôtre',
            'Des finances publiques débarrassées de toute dette',
          ],
          correct: 0,
          why: '« Ce que nous leur devons, ce n’est pas un mode de vie, c’est… des possibilités. Ne pas fermer les portes à leur place. » La deuxième option est ce qu’il refuse ; la dette est discutée plus loin et relativisée.',
          band: 'c1',
          points: 1.5,
        },
        // 5 · Reformulate · 2
        {
          kind: 'short',
          q: 'Selon le philosophe, qu’est-ce que l’exemple du site de Ferlanche révèle au sujet de certaines décisions ?',
          opts: [],
          correct: -1,
          keywords: [
            // No bare 'definiti', 'pour toujours', 'a jamais': « les ingénieurs ont trouvé une solution
            // définitive » and « impossible d’avertir les générations futures pour toujours » met
            // both groups while missing the point (review).
            ['irreversib', 'decisions definitives', 'decision definitive', 'choix definitif', 'definitivement', 'reprendre', 'defaire', 'revenir en arriere', 'retour en arriere', 'revenir dessus', 'sans retour'],
            ['descendant', 'herit', 'generation', 'enfants', 'avenir', 'futur', 'suivant', 'imposent', 'impose', 'subir', 'subiss'],
          ],
          model: 'Qu’elles sont irréversibles : une fois le site refermé, les descendants héritent du problème sans avoir pu choisir.',
          why: '« Il y a des décisions qu’on ne peut pas reprendre… ils héritent du problème, qu’ils l’aient voulu ou non. »',
          band: 'c1',
          points: 2,
        },
        // 6 · Weigh · 2
        {
          kind: 'short',
          q: 'Comment le philosophe répond-il à l’objection selon laquelle il faudrait d’abord s’occuper des vivants qui ont faim ou n’ont pas de logement ?',
          opts: [],
          correct: -1,
          keywords: [
            ['emporte', 'priorit', 'prime', 'passe avant', 'passent avant', 'plus urgent', 'en premier', 'compte davantage', 'compte plus'],
            ['irreversib', 'irrepar', 'definiti', 'reparer', 'rattrap', 'revenir en arriere', 'pour toujours', 'a jamais'],
            // The restriction is the answer: without it, « les générations futures passent en premier,
            // car les dommages sont irréversibles », the position he refuses, met both groups (review).
            // Exception words only: « en général, il faut agir pour l’avenir en priorité » met an
            // 'en general' variant of this group (review, round 2).
            ['sauf', 'excepte', 'exception', 'a moins', 'hormis', 'uniquement si', 'seulement si', 'seulement quand', 'seulement lorsque'],
          ],
          model: 'Il admet que la souffrance actuelle l’emporte en général sur un dommage futur, sauf si ce dommage est irréparable ; il ajoute que les deux objectifs se rejoignent souvent.',
          why: 'Deux temps : l’opposition est souvent fausse (isoler des logements) ; en cas de vrai conflit, le présent l’emporte, sauf dommage irréparable.',
          band: 'c1',
          points: 2,
        },
        // 7 · Attribute · 1
        {
          q: 'Que pense le philosophe de l’argument « ne laissons pas une dette à nos enfants » ?',
          opts: [
            'Il le juge incomplet, car il oublie ce que l’emprunt a permis de construire',
            'Il l’approuve, car toute dette publique est une injustice envers l’avenir',
            'Il le rejette, car une dette ne peut jamais nuire à une génération future',
          ],
          correct: 0,
          why: '« L’argument n’est pas faux, mais il ne regarde qu’une colonne du bilan » : on laisse aussi l’école et l’hôpital. Il ne l’approuve pas sans réserve et ne dit pas qu’une dette est inoffensive.',
          band: 'c1',
          points: 1,
        },
        // 8 · Attribute · 2
        {
          kind: 'short',
          q: 'Comment le philosophe explique-t-il l’écart révélé par le sondage de l’Institut Calvel ?',
          opts: [],
          correct: -1,
          keywords: [
            // Timing, not payment: « c’est de l’hypocrisie, ils refusent de payer pour un bénéfice
            // lointain » and the reversed « sacrifice lointain, bénéfice immédiat » met the old groups;
            // the third group asks for his structural explanation (review).
            ['immediat', 'tout de suite', 'maintenant', 'aujourd', 'present', 'court terme'],
            ['lointain', 'verra', 'verrai', 'distant', 'eloign', 'long terme', 'plus tard'],
            ['structur', 'institution', 'decalage', 'individu', 'normal', 'logique', 'comprehensible', 'humain', 'naturel', 'mecani'],
          ],
          model: 'Plutôt qu’une hypocrisie, il y voit un problème de structure : le sacrifice est immédiat et personnel, le bénéfice lointain, et aucun individu ne peut porter seul ce décalage ; c’est le rôle des institutions.',
          why: '« Le sacrifice est immédiat… le bénéfice est lointain, et je ne le verrai pas. »',
          band: 'c1',
          points: 2,
        },
        // 9 · Reformulate · 2
        {
          kind: 'short',
          q: 'Quelle limite le philosophe voit-il au conseil créé par la région d’Aubrève ?',
          opts: [],
          correct: -1,
          keywords: [
            ['vivant', 'actuel', 'contemporain', 'deja ne', 'existent', 'jeunesse d', 'jeunes d aujourd'],
            ['represent', 'parle', 'parlent', 'porte-parole', 'au nom', 'interet'],
            // The limit itself: « ils représentent bien les générations futures, mieux que les
            // adultes actuels » met the two groups above (review).
            ['seulement', 'uniquement', 'leurs propres', 'ses propres', 'eux-memes', 'eux memes', 'plutot que', 'au lieu', 'confusion', 'confond'],
          ],
          model: 'Ces lycéens sont des vivants : ils représentent seulement la jeunesse actuelle et ses intérêts, pas des personnes qui naîtront dans un siècle.',
          why: '« Un lycéen de seize ans, c’est un vivant… Il ne parle pas pour quelqu’un qui naîtra dans un siècle. »',
          band: 'c1',
          points: 2,
        },
        // 10 · Weigh · 2
        {
          q: 'Quelle idée résume le mieux la conclusion du philosophe ?',
          opts: [
            'Nous avons perdu le sens du temps long, mais nous pouvons le retrouver',
            'Les bâtisseurs d’autrefois se souciaient bien moins que nous de leurs descendants',
            'Il est désormais trop tard pour agir réellement en faveur des générations futures',
          ],
          correct: 0,
          why: '« Un sens du temps long que nous avons en partie perdu… Ce n’est pas une fatalité. » La deuxième inverse l’exemple des édifices ; la troisième contredit « pas une fatalité ».',
          band: 'c1',
          points: 2,
        },
      ],
    },
  ],
};

/* ═══ PARTIE 2 · 7 points ════════════════════════════════════════════════ */
//
// Two extracts, two genres, heard once each: 50 s to read, the extract, 50 s
// to answer. Each is self-contained and carries exactly its answerable points.

// ── Document 1 · publicité (DALF-16) · 3 MCQ ───────────────────────────────
//
// INVENTED: the service « Les Binômes du mercredi », the town of Montclaire,
// the two-day training, the yearly ten-euro membership, the pupils aged eleven
// to eighteen, the sessions held at the médiathèque or the pupil's school and
// never at home, the volunteer Bernard (a former carpenter), the pupil Inès.

const ADVERT =
  'UNE ADOLESCENTE : Maman, je n’y arrive pas, les fractions, je n’y comprends rien.\n' +
  'UNE MÈRE : Moi non plus, ma chérie, ça fait trente ans… Et les cours particuliers, à ce prix-là…\n' +
  'UNE VOIX OFF : Et si la réponse habitait à deux rues de chez vous ? ' +
  'Avec Les Binômes du mercredi, à Montclaire, chaque collégien ou lycéen, de onze à dix-huit ans, est accompagné par un retraité bénévole, ' +
  'une heure par semaine, toute l’année. ' +
  'D’anciens professeurs, bien sûr, mais aussi d’anciens comptables, infirmières, ingénieurs ou artisans : ' +
  'des gens qui ont passé leur vie à se servir de ce que votre enfant apprend aujourd’hui. ' +
  'Chaque bénévole suit une formation de deux jours avant de commencer, ' +
  'et les séances ont toujours lieu à la médiathèque ou dans l’établissement de l’élève, jamais au domicile. ' +
  'Pour les familles, l’adhésion est de dix euros par an. Le reste, c’est du temps donné.\n' +
  'UN RETRAITÉ : Moi, j’ai été menuisier pendant quarante ans. ' +
  'Les fractions, je les ai coupées dans le bois avant de les écrire au tableau ! Avec Inès, on a commencé par mesurer une étagère.\n' +
  'UNE ADOLESCENTE : Et maintenant, je comprends pourquoi un tiers, c’est plus petit qu’un demi. ' +
  'Bon, en échange, je lui ai appris à envoyer des photos à ses petits-enfants.\n' +
  'UNE VOIX OFF : Car au fil des mercredis, ce ne sont pas seulement les notes qui changent : ' +
  'ceux qui transmettent disent qu’ils reçoivent autant qu’ils donnent. ' +
  'Vous avez un enfant qui bloque ? Ou du temps et une vie de métier à partager ? ' +
  'Les Binômes du mercredi. Inscriptions à la médiathèque de Montclaire, jusqu’à la fin du mois.';

// ── Document 2 · flash d’information (DALF-17) · 4 MCQ ─────────────────────
//
// INVENTED: the médiathèque de Pontcerny, the eighty instruments, the
// three-week loan, the donations from inhabitants and from a music shop that
// closed last year, the 240 loans in three months, the 40 % of borrowers new
// to the médiathèque, the absence of any deposit, the few damaged instruments,
// the librarian Sophie Garnaud, the soundproofed booth planned for spring.

const FLASH =
  'UN JOURNALISTE : Il est treize heures, voici l’actualité de la région. ' +
  'À Pontcerny, on peut désormais emprunter une guitare comme on emprunte un roman. ' +
  'Depuis trois mois, la médiathèque municipale prête quatre-vingts instruments de musique : ' +
  'guitares, ukulélés, claviers, violons, mais aussi percussions et même un violoncelle. ' +
  'Le prêt dure trois semaines et il est gratuit pour tous les inscrits. ' +
  'Les instruments ont été donnés par des habitants et par un magasin de musique qui a fermé l’an dernier. ' +
  'Le succès a surpris l’équipe : deux cent quarante prêts en trois mois, et une liste d’attente pour les guitares. ' +
  'Surtout, quatre emprunteurs sur dix ne s’étaient jamais inscrits à la médiathèque auparavant. ' +
  'Fallait-il demander une caution, comme pour une location ? L’équipe y a renoncé : ' +
  'elle aurait écarté précisément les familles que le service voulait toucher. ' +
  'Quelques instruments sont bien revenus abîmés, des cordes cassées, un étui fendu, ' +
  'mais rien qui justifie, selon la bibliothécaire responsable du projet, Sophie Garnaud, de changer la règle.\n' +
  'UNE BIBLIOTHÉCAIRE : Une corde, ça coûte quelques euros. ' +
  'Ce que nous prêtons, au fond, ce n’est pas seulement un objet, c’est la permission d’essayer. ' +
  'Beaucoup de gens n’auraient jamais acheté un violon pour savoir s’ils aiment ça. ' +
  'Là, ils essaient trois semaines, et s’ils arrêtent, ce n’est pas un échec.\n' +
  'UN JOURNALISTE : Prochaine étape, au printemps : une petite cabine insonorisée, installée dans la médiathèque, ' +
  'pour que ceux qui vivent en appartement puissent aussi répéter sur place sans déranger leurs voisins.';

export const CO_PART2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  label: 'Compréhension de l’oral · Partie 2',
  prompt:
    'Vous allez entendre une seule fois plusieurs documents radiophoniques courts.\n' +
    'Pour chaque document, vous avez 50 secondes pour lire les questions, ' +
    'puis vous entendez le document, puis vous avez 50 secondes pour répondre.\n' +
    'Cochez la bonne réponse.',
  // Per extract: 50 read + 88 or 83 played + 50 answer = 371, rounded up.
  timingS: 400,
  parts: [
    {
      label: 'Document 1 · publicité',
      playCount: 1,
      readWindowS: 50,
      // ESTIMATED at 175 wpm from the spoken word count; not yet rendered.
      durationS: 88,
      text: ADVERT,
      items: [
        {
          q: 'Que propose principalement ce service ?',
          opts: [
            'Un accompagnement scolaire régulier assuré par des retraités bénévoles',
            'Des cours particuliers donnés au domicile par d’anciens professeurs',
            'Des ateliers où les élèves initient les retraités au numérique',
          ],
          correct: 0,
          why: '« Chaque collégien ou lycéen… est accompagné par un retraité bénévole, une heure par semaine. » Jamais au domicile, et pas seulement d’anciens professeurs ; l’initiation au téléphone est une contrepartie anecdotique.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Que dit la publicité des bénévoles ?',
          opts: [
            'Ils viennent de métiers variés et sont formés avant de commencer',
            'Ce sont surtout d’anciens enseignants du collège de la ville',
            'Ils choisissent eux-mêmes le lieu où se tiennent les séances',
          ],
          correct: 0,
          why: '« D’anciens professeurs, bien sûr, mais aussi d’anciens comptables, infirmières, ingénieurs ou artisans » ; « une formation de deux jours ». Le lieu est fixé : médiathèque ou établissement.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Sur quel argument la publicité se termine-t-elle ?',
          opts: [
            'L’échange profite aussi à ceux qui accompagnent les élèves',
            'Les résultats scolaires des élèves inscrits sont garantis',
            'Le service est réservé aux familles aux revenus modestes',
          ],
          correct: 0,
          why: '« Ceux qui transmettent disent qu’ils reçoivent autant qu’ils donnent. » Rien n’est garanti, et l’adhésion de dix euros est ouverte à tous.',
          band: 'c1',
          points: 1,
        },
      ],
    },
    {
      label: 'Document 2 · flash d’information',
      playCount: 1,
      readWindowS: 50,
      // ESTIMATED at 175 wpm from the spoken word count; not yet rendered.
      durationS: 83,
      text: FLASH,
      items: [
        {
          q: 'Quelle nouveauté la médiathèque de Pontcerny propose-t-elle ?',
          opts: [
            'Le prêt gratuit d’instruments pour quelques semaines',
            'La vente à petit prix d’instruments d’occasion',
            'Des cours de musique gratuits pour les inscrits',
          ],
          correct: 0,
          why: '« Le prêt dure trois semaines et il est gratuit pour tous les inscrits. » Les instruments sont donnés à la médiathèque, pas revendus ; aucun cours n’est évoqué.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Que montre le fait que quatre emprunteurs sur dix étaient nouveaux à la médiathèque ?',
          opts: [
            'Le service a attiré un public que la médiathèque ne touchait pas',
            'La plupart des emprunteurs pratiquaient déjà la musique depuis de longues années',
            'Près de la moitié des instruments sont revenus en mauvais état',
          ],
          correct: 0,
          why: '« Quatre emprunteurs sur dix ne s’étaient jamais inscrits à la médiathèque auparavant. » Les dégâts concernent « quelques instruments ».',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Pourquoi l’équipe n’exige-t-elle pas de caution ?',
          opts: [
            'Elle aurait écarté les familles que le projet voulait atteindre',
            'Les instruments, tous neufs, sont couverts par une assurance spéciale',
            'Le magasin donateur s’est engagé à payer les réparations',
          ],
          correct: 0,
          why: '« Elle aurait écarté précisément les familles que le service voulait toucher. » Ni assurance ni engagement du magasin, qui a fermé.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Quel projet la médiathèque prévoit-elle pour le printemps ?',
          opts: [
            'Un espace insonorisé pour jouer sur place',
            'Le prêt de pianos livrés à domicile',
            'Un prêt prolongé pour les familles nombreuses',
          ],
          correct: 0,
          why: '« Une petite cabine insonorisée… pour que ceux qui vivent en appartement puissent aussi répéter sur place. »',
          band: 'c1',
          points: 1,
        },
      ],
    },
  ],
};
