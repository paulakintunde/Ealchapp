// TCF Canada blanc-01 — Compréhension écrite, the upper slope (B2, C1, C2).
//
// Continues ce.ts and MUST follow it in the CE_TASKS array.
//
// ── What makes a reading item hard at the top ──────────────────────────────
//
// Not vocabulary. The document is in front of the candidate the whole time, so
// a hard word can be re-read. What cannot be re-read into place is a STANCE:
// which claim the author owns, which they report in order to answer, and which
// they concede. Every key above B2 here turns on that distinction, and the
// distractors are sentences that genuinely appear in the text but belong to
// someone the author is disagreeing with.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId, uniq, ITEMS } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  taskType: 'ce_mcq' as const,
  skill: 'CE' as const,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ B2 — positions 20 to 29 ═════════════════════════════════════════════ */

export const CE_B2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '004'),
  level: 'b2',
  label: 'Compréhension écrite · B2',
  prompt: 'Lisez les quatre documents et choisissez la bonne réponse.',
  timingS: 925,
  targetItemIds: uniq(ITEMS.ecologie.b2, ITEMS.collegues.b2, ITEMS.questionsSociales.b2, ITEMS.universite.b2),
  parts: [
    {
      label: 'Document 20 · les zones à circulation restreinte',
      text:
        'On oppose souvent à ces zones un argument de justice : elles écarteraient les ménages modestes, dont les voitures ' +
        'sont les plus anciennes. L’argument mérite mieux qu’une réfutation rapide, car il est en partie juste.\n\n' +
        'Il l’est là où la zone est instaurée sans alternative. À Vaubourg, la restriction est entrée en vigueur avant ' +
        'l’ouverture de la ligne de tramway censée l’accompagner : pendant dix-huit mois, des habitants ont eu le choix ' +
        'entre une amende et un trajet impossible. Le grief est fondé et l’Institut Kernal chiffre à 11 % la part des ' +
        'ménages concernés.\n\n' +
        'Il l’est moins là où la restriction arrive après. À Corbeny, où le réseau a été étendu deux ans avant, ' +
        'la même enquête ne trouve pas d’effet mesurable sur la mobilité des ménages modestes.\n\n' +
        'Ce n’est donc pas la zone qui exclut, c’est l’ordre dans lequel on fait les choses. Discuter du principe ' +
        'occupe les tribunes ; discuter du calendrier changerait quelque chose.',
      items: [
        {
          q: 'Quelle est la thèse de l’auteur ?',
          opts: [
            'L’effet d’exclusion dépend du calendrier, non du principe',
            'Les zones à circulation restreinte doivent être abandonnées',
            'L’argument de justice est sans fondement',
            'Les ménages modestes ne sont jamais concernés',
          ],
          correct: 0,
          why: '« Ce n’est pas la zone qui exclut, c’est l’ordre dans lequel on fait les choses. »',
          band: 'b2',
        },
        {
          q: 'Pourquoi l’auteur cite-t-il Vaubourg ?',
          opts: [
            'Pour accorder ce qu’il y a de juste dans l’objection',
            'Pour montrer que l’objection est fausse',
            'Pour comparer deux réseaux de tramway',
            'Pour critiquer l’Institut Kernal',
          ],
          correct: 0,
          why: 'Vaubourg est le cas où « le grief est fondé » : la concession, avant la distinction.',
          band: 'b2',
        },
        {
          q: 'Que montre la comparaison avec Corbeny ?',
          opts: [
            'Que l’effet disparaît quand l’alternative existe d’abord',
            'Que le tramway coûte trop cher',
            'Que les enquêtes se contredisent',
            'Que la restriction y a été annulée',
          ],
          correct: 0,
          why: 'Réseau étendu deux ans avant, et « pas d’effet mesurable » : c’est l’ordre qui change le résultat.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 21 · rapport interne sur l’absentéisme',
      text:
        'Le taux d’absence de courte durée est passé de 3,1 % à 4,8 % en deux ans. La direction a d’abord retenu ' +
        'l’hypothèse d’un relâchement et demandé un rappel des règles.\n\n' +
        'Les entretiens menés par le service de santé au travail conduisent ailleurs. Les absences se concentrent ' +
        'sur deux services, tous deux passés à un logiciel de planification en janvier. Dans ces services, le délai ' +
        'moyen de prévenance d’un changement d’horaire est tombé de neuf jours à deux.\n\n' +
        'Nous ne concluons pas que le logiciel cause les absences. Nous constatons que les deux services concernés ' +
        'sont ceux où l’on ne peut plus organiser sa semaine, et nous recommandons de rétablir un délai plancher ' +
        'avant d’envisager toute mesure disciplinaire.',
      items: [
        {
          q: 'Quelle était la première hypothèse de la direction ?',
          opts: [
            'Un relâchement des salariés',
            'Un problème de logiciel',
            'Une épidémie saisonnière',
            'Un manque d’effectifs',
          ],
          correct: 0,
          why: 'Elle « a d’abord retenu l’hypothèse d’un relâchement » et demandé un rappel des règles.',
          band: 'b2',
        },
        {
          q: 'Que révèlent les entretiens ?',
          opts: [
            'Une concentration des absences là où la prévenance a chuté',
            'Que le taux d’absence a été mal calculé',
            'Que les salariés ignorent les règles',
            'Que deux services sont en sous-effectif',
          ],
          correct: 0,
          why: 'Les deux services concernés sont ceux où le délai est passé de neuf jours à deux.',
          band: 'b2',
        },
        {
          q: 'Quelle est la prudence explicite du rapport ?',
          opts: [
            'Il refuse d’affirmer un lien de cause à effet',
            'Il doute de la fiabilité des entretiens',
            'Il refuse de nommer les services',
            'Il juge la période trop courte',
          ],
          correct: 0,
          why: '« Nous ne concluons pas que le logiciel cause les absences. Nous constatons… »',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 22 · le financement des bibliothèques',
      text:
        'Défendre les bibliothèques par le nombre de prêts, c’est accepter le terrain de celui qui veut les fermer. ' +
        'Les prêts baissent, c’est vrai, et ils continueront de baisser.\n\n' +
        'Mais la fréquentation, elle, augmente. On y vient pour travailler, pour un rendez-vous administratif, ' +
        'pour être au chaud, pour utiliser une imprimante. Un équipement dont l’usage se transforme n’est pas un ' +
        'équipement qui décline : c’est un équipement dont on mesure la mauvaise chose.',
      items: [
        {
          q: 'Quelle erreur l’auteur reproche-t-il aux défenseurs des bibliothèques ?',
          opts: [
            'Ils défendent l’institution avec l’indicateur de ses adversaires',
            'Ils exagèrent la baisse des prêts',
            'Ils refusent toute évaluation',
            'Ils négligent le coût du personnel',
          ],
          correct: 0,
          why: 'Défendre par les prêts, c’est « accepter le terrain de celui qui veut les fermer ».',
          band: 'b2',
        },
        {
          q: 'Que concède l’auteur ?',
          opts: [
            'Que les prêts baissent et continueront de baisser',
            'Que la fréquentation diminue',
            'Que le budget est trop élevé',
            'Que les bibliothèques sont mal situées',
          ],
          correct: 0,
          why: '« Les prêts baissent, c’est vrai, et ils continueront de baisser. »',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 23 · apprendre une langue à l’âge adulte',
      text:
        'L’idée qu’il existe un âge au-delà duquel une langue ne s’apprend plus est solidement installée et mal fondée. ' +
        'Ce qui décline avec l’âge est étroit : la capacité à acquérir un accent indistinguable de celui d’un natif.\n\n' +
        'Sur le reste, vocabulaire, syntaxe, compréhension, aisance en conversation, les adultes progressent souvent ' +
        'plus vite que les enfants, parce qu’ils savent déjà comment fonctionne une langue et peuvent transposer.\n\n' +
        'Ce qui manque à l’adulte n’est pas la plasticité, c’est le temps et l’absence de honte. Un enfant se trompe ' +
        'quarante fois par jour sans que cela lui coûte quoi que ce soit.',
      items: [
        {
          q: 'Que reconnaît l’auteur comme réellement lié à l’âge ?',
          opts: [
            'L’acquisition d’un accent natif',
            'La mémorisation du vocabulaire',
            'La compréhension de la syntaxe',
            'L’aisance en conversation',
          ],
          correct: 0,
          why: 'Le déclin est « étroit » et porte sur l’accent indistinguable d’un natif.',
          band: 'b2',
        },
        {
          q: 'Selon l’auteur, quel est le vrai obstacle pour un adulte ?',
          opts: [
            'Le temps et la peur de se tromper',
            'Une moindre plasticité du cerveau',
            'L’absence de méthode adaptée',
            'Le manque de motivation',
          ],
          correct: 0,
          why: '« Ce qui manque à l’adulte n’est pas la plasticité, c’est le temps et l’absence de honte. »',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ C1 — positions 30 to 36 ═════════════════════════════════════════════ */

export const CE_C1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '005'),
  level: 'c1',
  label: 'Compréhension écrite · C1',
  prompt: 'Lisez les deux documents et choisissez la bonne réponse.',
  timingS: 645,
  targetItemIds: uniq(ITEMS.ethique.c1, ITEMS.decouvertes.c1),
  parts: [
    {
      label: 'Document 30 · le mérite dans l’accès aux études',
      text:
        'Le mérite a ceci de particulier qu’on ne peut pas être contre. C’est ce qui devrait éveiller la méfiance : ' +
        'les notions que personne ne conteste sont rarement des notions, ce sont des places vides où chacun met ce qu’il veut.\n\n' +
        'Prenons la version la plus défendable. Le mérite y désigne ce qu’un individu ajoute à ce qu’il a reçu. ' +
        'Ainsi entendu, il est mesurable en principe et parfaitement indéfendable en pratique : personne ne sait ' +
        'séparer, dans un résultat, la part de l’effort et celle des circonstances qui ont rendu l’effort possible.\n\n' +
        'On répond souvent qu’une mesure imparfaite vaut mieux que rien. C’est vrai des thermomètres. ' +
        'Ce ne l’est pas d’un instrument qui, en plus de mesurer mal, distribue à ceux qu’il classe le sentiment ' +
        'd’avoir mérité leur rang. L’erreur d’un thermomètre ne persuade personne d’être fiévreux.\n\n' +
        'Je ne conclus pas qu’il faut renoncer à sélectionner. Je conclus qu’il faut cesser de nommer mérite ' +
        'le résultat de la sélection, et assumer que nous choisissons.',
      items: [
        {
          q: 'Pourquoi l’auteur se méfie-t-il d’une notion que personne ne conteste ?',
          opts: [
            'Parce qu’elle est probablement vide et remplie par chacun à sa guise',
            'Parce qu’elle est forcément fausse',
            'Parce qu’elle est trop récente',
            'Parce qu’elle vient du monde de l’entreprise',
          ],
          correct: 0,
          why: '« Des places vides où chacun met ce qu’il veut. »',
          band: 'c1',
        },
        {
          q: 'Quelle définition l’auteur examine-t-il ?',
          opts: [
            'Ce qu’un individu ajoute à ce qu’il a reçu',
            'La somme des résultats obtenus',
            'La conformité aux règles d’un concours',
            'La reconnaissance par les pairs',
          ],
          correct: 0,
          why: 'Il choisit « la version la plus défendable » et la formule ainsi avant de la critiquer.',
          band: 'c1',
        },
        {
          q: 'Que vise la comparaison avec le thermomètre ?',
          opts: [
            'À montrer qu’un instrument peut mal mesurer sans convaincre, et le mérite non',
            'À défendre les mesures imparfaites',
            'À illustrer un progrès technique',
            'À critiquer la médecine',
          ],
          correct: 0,
          why: '« L’erreur d’un thermomètre ne persuade personne d’être fiévreux » : le mérite, lui, persuade.',
          band: 'c1',
        },
        {
          q: 'Que conclut exactement l’auteur ?',
          opts: [
            'Qu’il faut sélectionner sans appeler cela du mérite',
            'Qu’il faut renoncer à toute sélection',
            'Qu’il faut mesurer le mérite autrement',
            'Qu’il faut tirer au sort',
          ],
          correct: 0,
          why: '« Je ne conclus pas qu’il faut renoncer à sélectionner » : il refuse le mot, pas la pratique.',
          band: 'c1',
        },
      ],
    },
    {
      label: 'Document 31 · l’automatisation et les métiers',
      text:
        'La question mal posée est celle des métiers détruits. Elle l’est parce qu’un métier n’est presque jamais ' +
        'détruit en bloc : il est décomposé, et certaines de ses tâches partent.\n\n' +
        'Le radiologue en offre l’exemple le plus commenté. La lecture d’image, qui semblait le cœur du métier, ' +
        'est ce qui s’automatise le mieux. Ce qui résiste est ce dont on parlait le moins : décider quel examen ' +
        'demander, dire à quelqu’un ce que l’examen a montré, arbitrer entre deux interprétations quand la machine ' +
        'donne les deux.\n\n' +
        'D’où une conséquence désagréable pour les prévisions. Un métier peut perdre l’essentiel de son temps de ' +
        'travail et gagner en importance ; un autre peut n’en perdre qu’un quart et disparaître, parce que ce quart ' +
        'était ce qu’on payait. Compter les tâches automatisables ne dit rien tant qu’on n’a pas dit lesquelles ' +
        'tenaient le métier debout.',
      items: [
        {
          q: 'Pourquoi la question des « métiers détruits » est-elle mal posée ?',
          opts: [
            'Parce qu’un métier est décomposé plutôt que supprimé',
            'Parce que l’automatisation crée plus d’emplois qu’elle n’en supprime',
            'Parce que les prévisions sont toujours fausses',
            'Parce que les métiers changent de nom',
          ],
          correct: 0,
          why: '« Il est décomposé, et certaines de ses tâches partent. »',
          band: 'c1',
        },
        {
          q: 'Qu’est-ce qui résiste dans le métier de radiologue ?',
          opts: [
            'Décider, expliquer et arbitrer',
            'La lecture des images',
            'La maintenance des appareils',
            'La formation des internes',
          ],
          correct: 0,
          why: 'La lecture d’image « s’automatise le mieux ». Résiste ce dont on parlait le moins.',
          band: 'c1',
        },
        {
          q: 'Quelle conséquence l’auteur tire-t-il pour les prévisions ?',
          opts: [
            'Le volume de tâches automatisées ne prédit pas le sort du métier',
            'Les prévisions doivent porter sur dix ans au moins',
            'Il faut compter les tâches plus précisément',
            'Les métiers manuels sont les plus exposés',
          ],
          correct: 0,
          why: 'Un métier peut perdre l’essentiel de son temps et gagner en importance, ou l’inverse.',
          band: 'c1',
        },
      ],
    },
  ],
};

/* ═══ C2 — positions 37 to 39 ═════════════════════════════════════════════ */
//
// A narrative extract, and the only document on the paper where the difficulty
// is the VOICE. Free indirect style puts the character's judgement into the
// narrator's sentences, so a candidate who reads every clause as the narrator's
// own gets all three questions wrong while understanding every word.

export const CE_C2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '006'),
  level: 'c2',
  label: 'Compréhension écrite · C2',
  prompt: 'Lisez le document et choisissez la bonne réponse.',
  timingS: 275,
  targetItemIds: uniq(ITEMS.philosophie.c2),
  parts: [
    {
      label: 'Document 37 · extrait de roman',
      text:
        'Elle arriva en avance, comme toujours, et s’en voulut aussitôt. Vingt minutes à attendre dans un couloir, ' +
        'voilà ce que valait sa prudence. Les autres, eux, arrivaient à l’heure sans avoir l’air d’y penser ; ' +
        'c’était sans doute une question d’éducation, ou de confiance, ou de quelque chose qu’on ne lui avait pas donné.\n\n' +
        'La porte s’ouvrit à onze heures moins cinq. Le comité l’attendait depuis un quart d’heure.',
      items: [
        {
          q: 'À qui appartient le jugement « voilà ce que valait sa prudence » ?',
          opts: [
            'Au personnage, rapporté par le narrateur',
            'Au narrateur, qui juge le personnage',
            'Au comité qui l’attend',
            'À un autre personnage présent',
          ],
          correct: 0,
          why: 'Le style indirect libre place la pensée du personnage dans la phrase du narrateur : c’est elle qui s’en veut.',
          band: 'c2',
        },
        {
          q: 'Que produit la dernière phrase ?',
          opts: [
            'Elle contredit ce que le personnage croyait de lui-même',
            'Elle confirme que le personnage est en retard',
            'Elle change de personnage principal',
            'Elle situe la scène dans le passé',
          ],
          correct: 0,
          why: 'Elle croyait perdre vingt minutes ; le comité attendait depuis un quart d’heure. Sa prudence n’était pas excessive.',
          band: 'c2',
        },
        {
          q: 'Que suggère « ou de quelque chose qu’on ne lui avait pas donné » ?',
          opts: [
            'Une amertume ancienne que le personnage n’explicite pas',
            'Une critique du comité par le narrateur',
            'Un manque de formation professionnelle',
            'Une plaisanterie du personnage',
          ],
          correct: 0,
          why: 'La phrase s’interrompt sur une cause vague : c’est le personnage qui recule devant ce qu’il allait nommer.',
          band: 'c2',
        },
      ],
    },
  ],
};
