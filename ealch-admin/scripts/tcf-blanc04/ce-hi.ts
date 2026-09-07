// TCF Canada blanc-04 — Compréhension écrite, the upper slope (B2, C1, C2).
//
// Continues ce.ts and MUST follow it in the CE_TASKS array.
//
// C2 routes to `decouvertes` at C1: there are no published C2 corpus items on
// any theme, and pick-items reports that fallback rather than hiding it.
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
//
// SELF-VERIFY: no answer is a sentence to be found. Each requires holding a
// figure against the claim it is offered to support, or a concession against
// what survives it.

export const CE_B2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '004'),
  level: 'b2',
  label: 'Compréhension écrite · B2',
  prompt: 'Lisez les quatre documents et choisissez la bonne réponse.',
  timingS: 850,
  targetItemIds: uniq(
    ITEMS.musees.b2,
    ITEMS.rechercheEmploi.b2,
    ITEMS.hebergement.b2,
    ITEMS.soins.b2
  ),
  parts: [
    {
      label: 'Document 17 · ce que les archives numériques ne gardent pas',
      text:
        'On répète que le numérique conserve tout et que le problème est désormais de trier. ' +
        'Les archivistes, eux, décrivent l’inverse, et leurs raisons méritent d’être entendues ' +
        'avant d’être écartées comme un réflexe de métier.\n' +
        'Un document papier abandonné reste lisible cent ans plus tard. ' +
        'Un fichier abandonné cesse d’être lisible en quinze ans, non parce qu’il disparaît, ' +
        'mais parce que le logiciel capable de l’ouvrir a cessé d’exister. ' +
        'La perte ne se voit pas : le fichier est toujours là, il pèse le même poids, ' +
        'et personne ne s’aperçoit de rien tant que personne n’essaie de l’ouvrir.\n' +
        'C’est ce silence qui distingue les deux menaces. Un fonds papier qui brûle est un événement. ' +
        'Un fonds numérique qui devient illisible est un non-événement, réparti sur quinze ans, ' +
        'que rien ne signale et dont aucun budget ne discute.\n' +
        'La réponse technique est connue : recopier régulièrement les fichiers dans des formats ouverts. ' +
        'Elle est modeste, ennuyeuse, et elle coûte chaque année une somme qu’il faut défendre ' +
        'sans jamais pouvoir montrer ce que l’on a sauvé.\n' +
        'Le vrai obstacle n’est donc pas la technique. C’est qu’une politique de conservation réussie ' +
        'ne produit aucun résultat visible, et qu’une politique manquée ne produit pas non plus ' +
        'de résultat visible, jusqu’au jour où l’on cherche quelque chose et où il n’y a rien.',
      items: [
        {
          q: 'Qu’est-ce qui rend la perte numérique difficile à repérer ?',
          opts: [
            'Le fichier subsiste sans que rien ne signale qu’il est illisible',
            'Les fichiers disparaissent des serveurs',
            'Les archivistes ne les inventorient pas',
            'Les formats changent de nom',
          ],
          correct: 0,
          why: 'Le fichier est toujours là et pèse le même poids ; seul le logiciel a disparu.',
          band: 'b2',
        },
        {
          q: 'Quelle différence l’auteur établit-il entre les deux menaces ?',
          opts: [
            'L’une est un événement, l’autre ne l’est pas',
            'L’une est réparable, l’autre non',
            'L’une touche les originaux, l’autre les copies',
            'L’une est ancienne, l’autre récente',
          ],
          correct: 0,
          why: 'Un fonds papier qui brûle se remarque ; l’illisibilité s’étale sur quinze ans sans signal.',
          band: 'b2',
        },
        {
          q: 'Pourquoi la solution technique est-elle difficile à financer ?',
          opts: [
            'Sa réussite ne se voit pas plus que son échec',
            'Elle demande des logiciels rares',
            'Elle exige de recruter des archivistes',
            'Elle suppose de trier les fonds',
          ],
          correct: 0,
          why: 'Une conservation réussie ne produit aucun résultat visible, et l’échec non plus, jusqu’au manque.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 18 · trier les candidatures sans les lire',
      text:
        'Un cabinet de recrutement a publié le bilan de trois ans de tri automatisé. ' +
        'Le chiffre mis en avant est spectaculaire : le temps consacré à la première sélection ' +
        'a été divisé par six. Celui qui suit l’est moins et se trouve à la page onze. ' +
        'La proportion de recrutements rompus avant un an n’a pas changé d’un point.\n' +
        'Les auteurs en tirent une conclusion prudente. L’outil trie vite et trie mal, ' +
        'ou plutôt il trie exactement comme on lui a demandé, ' +
        'et ce qu’on lui a demandé était de retrouver les profils des personnes déjà recrutées. ' +
        'Un système entraîné sur les réussites passées reproduit les critères passés, ' +
        'y compris ceux que l’entreprise dit vouloir abandonner.\n' +
        'Une objection revient, et elle porte : un recruteur humain fait la même chose, ' +
        'avec moins de méthode et sans que personne puisse l’auditer. ' +
        'Le rapport l’accorde sans réserve. Il ajoute une nuance qui déplace la question. ' +
        'Un préjugé humain varie d’un recruteur à l’autre, et cette dispersion laisse passer des gens. ' +
        'Un préjugé automatisé s’applique à toutes les candidatures avec la même main, ' +
        'et ne laisse rien passer du tout.\n' +
        'La recommandation finale n’est donc pas d’abandonner l’outil, ' +
        'mais de cesser de l’entraîner sur les recrutements réussis, ' +
        'et de lui demander plutôt d’écarter ce dont on est certain qu’il ne convient pas.',
      items: [
        {
          q: 'Quel chiffre le rapport place-t-il en page onze ?',
          opts: [
            'Les ruptures avant un an, restées identiques',
            'Le temps de sélection divisé par six',
            'Le nombre de candidatures reçues',
            'Le coût annuel de l’outil',
          ],
          correct: 0,
          why: 'Le gain de temps est mis en avant ; la stabilité des ruptures est reléguée.',
          band: 'b2',
        },
        {
          q: 'Que répond le rapport à l’objection sur le recruteur humain ?',
          opts: [
            'Le préjugé humain varie, et cette variation laisse passer des candidats',
            'Le recruteur humain se trompe moins souvent',
            'L’objection est sans fondement',
            'Les deux préjugés sont de même nature',
          ],
          correct: 0,
          why: 'Il accorde l’objection et oppose la dispersion humaine à l’application uniforme de la machine.',
          band: 'b2',
        },
        {
          q: 'Que recommandent finalement les auteurs ?',
          opts: [
            'Entraîner l’outil à écarter, non à retrouver les profils recrutés',
            'Abandonner le tri automatisé',
            'Doubler chaque tri d’une lecture humaine',
            'Publier les critères aux candidats',
          ],
          correct: 0,
          why: 'Cesser de l’entraîner sur les réussites passées et lui demander d’écarter le certain.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 19 · le prix affiché d’une chambre',
      text:
        'Les résidences étudiantes affichent un loyer mensuel, et ce loyer est exact. ' +
        'Il ne dit pourtant presque rien de la dépense réelle, ' +
        'et la comparaison avec une location ordinaire s’en trouve faussée dans les deux sens.\n' +
        'D’un côté, la chambre est meublée, chauffée, connectée, et le loyer inclut ces postes ' +
        'qu’un locataire ordinaire paie séparément. Un écart de cinquante euros au tarif affiché ' +
        'peut donc recouvrir une équivalence complète.\n' +
        'De l’autre, presque toutes les résidences facturent l’année universitaire ' +
        'et non les douze mois. Certaines exigent de libérer la chambre en juillet, ' +
        'ce qui oblige à payer ailleurs deux mois qu’aucune comparaison ne fait apparaître, ' +
        'ou à conserver la chambre en la payant sans l’occuper.\n' +
        'Une enquête menée dans quatre villes a reconstitué la dépense annuelle plutôt que mensuelle. ' +
        'L’écart entre l’affichage et la réalité va de deux pour cent à dix-neuf, ' +
        'et il ne dépend pas du prix : les résidences les plus chères sont parfois les plus fidèles ' +
        'à leur propre annonce.\n' +
        'La recommandation tient en une phrase. Un prix mensuel n’est comparable qu’à un autre prix ' +
        'mensuel portant sur le même nombre de mois, ce qui n’est presque jamais le cas.',
      items: [
        {
          q: 'Pourquoi le loyer affiché fausse-t-il la comparaison dans les deux sens ?',
          opts: [
            'Il inclut des charges et exclut des mois',
            'Il varie selon les villes',
            'Il change en cours d’année',
            'Il ne concerne que les résidences chères',
          ],
          correct: 0,
          why: 'Meublé et chauffé d’un côté, année universitaire au lieu de douze mois de l’autre.',
          band: 'b2',
        },
        {
          q: 'Que montre l’enquête sur l’ampleur de l’écart ?',
          opts: [
            'Il ne dépend pas du prix de la résidence',
            'Il augmente avec le loyer',
            'Il est constant d’une ville à l’autre',
            'Il disparaît sur douze mois',
          ],
          correct: 0,
          why: 'De deux à dix-neuf pour cent, et les plus chères sont parfois les plus exactes.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 20 · prévenir plutôt que soigner',
      text:
        'Personne ne défend publiquement l’idée qu’il vaudrait mieux soigner que prévenir. ' +
        'Les budgets, eux, disent autre chose, et l’écart entre le discours et la dépense ' +
        'est trop constant pour tenir à la mauvaise volonté.\n' +
        'Une campagne de prévention réussie se reconnaît à ce qui n’arrive pas. ' +
        'Elle ne produit ni patient guéri, ni service désengorgé que l’on puisse montrer, ' +
        'ni personne à interroger devant une caméra. ' +
        'Son résultat est une différence entre ce qui s’est passé et ce qui se serait passé, ' +
        'c’est-à-dire une quantité qu’il faut calculer et que l’on peut contester.\n' +
        'Un service d’urgence financé produit au contraire des visages, des durées d’attente ' +
        'et des vies sauvées que l’on peut nommer. Le choix entre les deux ne se joue donc pas ' +
        'sur l’efficacité, sur laquelle l’accord est général, ' +
        'mais sur la nature de la preuve que chacun peut apporter.\n' +
        'Certains pays ont tranché en sanctuarisant une part fixe du budget de santé, ' +
        'soustraite à l’arbitrage annuel. La mesure est brutale et elle est cohérente : ' +
        'elle reconnaît qu’une dépense dont on ne peut jamais montrer le rendement ' +
        'perdra toujours contre une dépense qui se photographie.',
      items: [
        {
          q: 'Pourquoi la prévention perd-elle l’arbitrage budgétaire ?',
          opts: [
            'Son résultat est une comparaison, non un fait à montrer',
            'Son efficacité est contestée',
            'Elle coûte plus cher que les soins',
            'Elle demande trop de personnel',
          ],
          correct: 0,
          why: 'Elle se reconnaît à ce qui n’arrive pas ; l’urgence produit des visages et des durées.',
          band: 'b2',
        },
        {
          q: 'Que reconnaît la mesure adoptée par certains pays ?',
          opts: [
            'Qu’une dépense sans preuve visible perdra toujours l’arbitrage',
            'Que la prévention est plus efficace que les soins',
            'Que les budgets de santé sont insuffisants',
            'Que les campagnes doivent être évaluées chaque année',
          ],
          correct: 0,
          why: 'Sanctuariser une part fixe revient à admettre l’issue de tout arbitrage annuel.',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ C1 — positions 30 to 36 ═════════════════════════════════════════════ */
//
// SELF-VERIFY: each text grants its opponent something substantial and holds
// its position anyway. A candidate who reads the concession as the thesis
// answers wrong, which is the whole point of the band.

export const CE_C1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '005'),
  level: 'c1',
  label: 'Compréhension écrite · C1',
  prompt: 'Lisez les deux documents et choisissez la bonne réponse.',
  timingS: 720,
  targetItemIds: uniq(ITEMS.philosophie.c1, ITEMS.ethique.c1),
  parts: [
    {
      label: 'Document 21 · expliquer n’est pas justifier',
      text:
        'La formule est devenue un réflexe de conversation : expliquer n’est pas justifier. ' +
        'On la produit dès qu’un propos menace de comprendre quelque chose de désagréable, ' +
        'et elle a l’avantage de clore l’échange sans avoir à le mener. ' +
        'Elle est pourtant exacte, et c’est ce qui la rend difficile à examiner.\n' +
        'Exacte, elle l’est au sens strict. Rendre compte des causes d’un acte ne dit rien ' +
        'de sa valeur, et l’on peut décrire avec une précision entière un enchaînement ' +
        'que l’on condamne entièrement. Les deux opérations sont distinctes, ' +
        'elles répondent à des questions différentes, et rien ne fait passer de l’une à l’autre.\n' +
        'La difficulté commence quand on regarde l’usage. Dans la pratique, ' +
        'la formule n’est presque jamais employée pour rappeler cette distinction. ' +
        'Elle est employée pour interrompre une explication en cours, ' +
        'et l’effet obtenu n’est pas de séparer deux ordres de discours : ' +
        'il est d’en supprimer un. Celui qui la reçoit renonce à décrire, ' +
        'parce que décrire est devenu suspect.\n' +
        'Il faut alors accorder quelque chose à ceux qui s’en méfient, ' +
        'et le leur accorder pleinement plutôt que du bout des lèvres. ' +
        'Une explication insistante finit par produire un effet de justification, ' +
        'non par ce qu’elle affirme, mais par le temps qu’elle occupe. ' +
        'Un acte longuement situé dans ses causes paraît moins choisi qu’un acte simplement nommé, ' +
        'et cet effet ne dépend pas des intentions de celui qui explique. ' +
        'La méfiance n’est donc pas absurde : elle repose sur une observation juste ' +
        'que personne n’a réfutée.\n' +
        'Ce qu’il faut refuser n’est pas l’observation, c’est le remède qu’on en tire. ' +
        'Renoncer à expliquer par crainte de paraître excuser ' +
        'revient à préférer l’ignorance à un malentendu, ' +
        'et à traiter toute compréhension comme une faveur que l’on accorderait à celui qui a mal agi. ' +
        'On sacrifie alors une chose qui sert à tout le monde ' +
        'pour éviter une apparence qui ne coûte qu’à celui qui parle.\n' +
        'Le prix en est connu et il se paie ailleurs. ' +
        'On ne prévient que ce que l’on a compris, ' +
        'et l’on ne comprend pas ce que l’on s’interdit de décrire. ' +
        'Les mêmes qui exigent le silence sur les causes ' +
        'réclameront plus tard que l’on empêche le retour des mêmes faits.',
      items: [
        {
          q: 'Que reconnaît l’auteur à la formule elle-même ?',
          opts: [
            'Elle est exacte au sens strict',
            'Elle est employée à bon escient',
            'Elle est récente',
            'Elle est sans effet sur la discussion',
          ],
          correct: 0,
          why: 'Rendre compte des causes ne dit rien de la valeur : les deux opérations sont distinctes.',
          band: 'c1',
        },
        {
          q: 'Que reproche-t-il à son usage courant ?',
          opts: [
            'Elle supprime l’explication au lieu de la distinguer',
            'Elle confond les causes et les excuses',
            'Elle est réservée aux spécialistes',
            'Elle allonge inutilement les débats',
          ],
          correct: 0,
          why: 'Employée pour interrompre, elle fait renoncer à décrire plutôt qu’elle ne sépare.',
          band: 'c1',
        },
        {
          q: 'Que concède-t-il à ceux qui se méfient de l’explication ?',
          opts: [
            'Une explication longue produit un effet de justification',
            'Toute explication est une excuse déguisée',
            'La distinction est impossible à tenir',
            'Les causes sont rarement connues',
          ],
          correct: 0,
          why: 'L’effet vient du temps occupé, non de ce qui est affirmé, et l’observation est juste.',
          band: 'c1',
        },
        {
          q: 'Quel est le prix du remède qu’il refuse ?',
          opts: [
            'On ne prévient que ce que l’on a compris',
            'On perd le sens de la responsabilité',
            'Les débats deviennent interminables',
            'Les causes sont attribuées au hasard',
          ],
          correct: 0,
          why: 'Renoncer à décrire, c’est préférer l’ignorance à un malentendu, et perdre la prévention.',
          band: 'c1',
        },
      ],
    },
    {
      label: 'Document 22 · le refus de soin et ses bords',
      text:
        'Le droit de refuser un soin est acquis et il est peu discuté dans son principe. ' +
        'Un adulte informé peut décliner un traitement, même nécessaire, même vital, ' +
        'et ce refus s’impose à l’équipe qui le reçoit. ' +
        'Les discussions sérieuses ne portent plus là-dessus. Elles portent sur les bords.\n' +
        'Le premier bord est l’information. Un refus ne vaut que s’il est éclairé, ' +
        'et cette condition, si elle est prise au sérieux, ' +
        'donne au médecin le pouvoir de juger que le patient n’a pas compris. ' +
        'Le critère protège et il peut servir à annuler ce qu’il protège. ' +
        'Les équipes le savent, et la plupart des conflits documentés naissent ici.\n' +
        'Le deuxième bord est le temps. Un refus exprimé à froid, plusieurs mois à l’avance, ' +
        'n’engage pas de la même manière qu’un refus prononcé le jour même. ' +
        'On voudrait que le premier prime, parce qu’il est réfléchi ; ' +
        'on constate qu’il est aussi le moins informé des deux, ' +
        'puisqu’il a été formé avant de connaître la situation réelle.\n' +
        'Le troisième bord est celui des proches. Le refus est individuel en droit ' +
        'et il ne l’est jamais dans les faits. ' +
        'Une équipe qui reçoit un refus reçoit avec lui une famille qui s’y oppose, ' +
        'et cette famille restera longtemps après le départ du patient. ' +
        'Le texte ne lui donne aucune voix, ce qui est cohérent, ' +
        'et ne dit rien de ce qu’il faut lui répondre pendant les trois semaines qui suivent.\n' +
        'On aurait tort d’en conclure que le droit est mal fait, ' +
        'et cette conclusion est pourtant celle que l’on entend le plus souvent. ' +
        'Le droit est fait pour trancher, et il tranche sans hésitation : le refus l’emporte. ' +
        'Aucun de ces trois bords ne remet cette règle en cause ; ' +
        'ils décrivent ce qui reste à faire une fois qu’elle a été appliquée. ' +
        'Ce que le droit ne peut pas faire, et ce qu’aucun texte ne fera jamais, ' +
        'c’est rendre la décision légère à celui qui doit s’y tenir, ' +
        'ni dispenser une équipe d’avoir à la porter.',
      items: [
        {
          q: 'Quel danger l’auteur voit-il dans la condition d’information ?',
          opts: [
            'Elle permet de juger que le patient n’a pas compris',
            'Elle allonge la procédure',
            'Elle repose sur les proches',
            'Elle est rarement remplie',
          ],
          correct: 0,
          why: 'Le critère protège le refus et peut servir à l’annuler ; les conflits naissent là.',
          band: 'c1',
        },
        {
          q: 'Quelle tension l’auteur relève-t-il à propos du temps ?',
          opts: [
            'Le refus le plus réfléchi est aussi le moins informé',
            'Un refus ancien est toujours caduc',
            'Le refus du jour même ne compte pas',
            'Le délai est fixé par la loi',
          ],
          correct: 0,
          why: 'Formé avant la situation réelle, le refus anticipé est réfléchi et mal renseigné.',
          band: 'c1',
        },
        {
          q: 'Quelle est sa conclusion sur le droit lui-même ?',
          opts: [
            'Il tranche correctement et ne peut alléger la décision',
            'Il devrait être révisé',
            'Il ignore le rôle des proches',
            'Il donne trop de pouvoir aux familles',
          ],
          correct: 0,
          why: 'Le refus l’emporte ; aucun texte ne rendra la décision légère à qui doit s’y tenir.',
          band: 'c1',
        },
      ],
    },
  ],
};

/* ═══ C2 — positions 37 to 39 ═════════════════════════════════════════════ */
//
// SELF-VERIFY: no answer is stated. Each is the shape of the essay's argument,
// and one distractor in each triple is a proposition the text explicitly
// entertains before setting it aside.

export const CE_C2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '006'),
  level: 'c2',
  label: 'Compréhension écrite · C2',
  prompt: 'Lisez le document et choisissez la bonne réponse.',
  timingS: 580,
  targetItemIds: uniq(ITEMS.decouvertes.c2),
  parts: [
    {
      label: 'Document 23 · l’ambiguïté comme ressource',
      text:
        'On enseigne l’ambiguïté comme un défaut que la littérature aurait le droit de commettre, ' +
        'et cette formulation contient déjà l’erreur qu’il faudrait défaire. ' +
        'Elle suppose une norme, la clarté, dont l’écrivain s’écarterait par licence, ' +
        'alors qu’il s’agit de deux usages distincts d’un même instrument, ' +
        'dont aucun ne dérive de l’autre.\n' +
        'Le premier usage est celui de la prose ordinaire, et il vise à ce que la phrase ' +
        'se dissolve dans ce qu’elle transmet. Une consigne réussie ne se remarque pas ; ' +
        'on l’exécute et on l’oublie. Toute ambiguïté y est un coût, ' +
        'puisqu’elle oblige le lecteur à revenir sur ses pas pour choisir un sens, ' +
        'et ce retour est du temps perdu à l’égard de la fin poursuivie.\n' +
        'Le second usage tient à ce que ce retour est parfois la fin elle-même. ' +
        'Un texte qui installe deux lectures simultanées ne demande pas d’en élire une ; ' +
        'il demande de les tenir ensemble, et cette tenue produit un état ' +
        'qu’aucune des deux lectures ne produirait seule. ' +
        'Ce n’est pas de l’imprécision, qui laisse le sens indéterminé faute de mieux. ' +
        'C’est une détermination double, obtenue avec exactitude, ' +
        'et l’on peut d’ailleurs la manquer : un texte simplement flou se reconnaît ' +
        'à ce qu’aucune de ses lectures ne résiste à l’examen.\n' +
        'Il faut concéder quelque chose à l’objection la plus courante, ' +
        'et la concéder entièrement, faute de quoi elle reviendra sous une autre forme. ' +
        'Cette exigence a servi et sert encore à protéger des textes faibles, ' +
        'puisqu’elle rend impossible de reprocher à un auteur de n’avoir pas été compris : ' +
        'l’incompréhension devient la preuve de la profondeur qu’on lui prête, ' +
        'et le reproche se retourne aussitôt contre celui qui le formule. ' +
        'La concession est donc réelle, et elle ne va pas plus loin qu’elle ne va. ' +
        'Un critère qui peut être invoqué à tort n’est pas pour autant vide, ' +
        'sans quoi il faudrait renoncer à peu près à tous. ' +
        'Il existe d’ailleurs une épreuve simple : demander quelles lectures le texte soutient, ' +
        'et vérifier qu’elles sont plus d’une et qu’elles tiennent chacune ligne à ligne. ' +
        'L’épreuve est fastidieuse, ce qui explique assez bien qu’on la mène si rarement.\n' +
        'Reste une conséquence que l’on tire rarement. Si l’ambiguïté littéraire est une construction ' +
        'et non un relâchement, alors elle s’enseigne, elle se rate, et elle se juge. ' +
        'Ce qui la distingue du flou n’est pas une intention que l’auteur déclarerait, ' +
        'ni une profondeur qu’un lecteur bienveillant supposerait. ' +
        'C’est une propriété du texte, vérifiable par n’importe qui accepte de faire le travail, ' +
        'et c’est précisément parce qu’elle est vérifiable qu’il est si commode ' +
        'de la traiter comme un mystère.',
      items: [
        {
          q: 'Quelle erreur l’auteur reproche-t-il à la formulation courante ?',
          opts: [
            'Elle fait de la clarté la norme dont l’autre usage dériverait',
            'Elle confond les genres littéraires',
            'Elle exagère la difficulté des textes',
            'Elle attribue l’ambiguïté au lecteur',
          ],
          correct: 0,
          why: 'Il décrit deux usages distincts d’un même instrument, dont aucun ne dérive de l’autre.',
          band: 'c2',
        },
        {
          q: 'Comment distingue-t-il l’ambiguïté du flou ?',
          opts: [
            'Chaque lecture doit tenir ligne à ligne',
            'Le flou est involontaire',
            'L’ambiguïté est annoncée par l’auteur',
            'Le flou concerne des textes plus courts',
          ],
          correct: 0,
          why: 'Un texte flou se reconnaît à ce qu’aucune de ses lectures ne résiste à l’examen.',
          band: 'c2',
        },
        {
          q: 'Quelle conséquence tire-t-il de sa propre position ?',
          opts: [
            'L’ambiguïté se juge, et c’est pourquoi on la dit mystérieuse',
            'La critique doit renoncer à juger',
            'L’intention de l’auteur devient décisive',
            'Les textes faibles sont indéfendables',
          ],
          correct: 0,
          why: 'C’est une propriété vérifiable du texte, et sa commodité vient de ce qu’on la voile.',
          band: 'c2',
        },
      ],
    },
  ],
};
