// TCF Canada blanc-04 — Compréhension orale, the upper slope (B2, C1, C2).
//
// Continues co.ts and MUST follow it in the CO_TASKS array: on this format the
// order of the items IS the instrument, and paper-rules.ts refuses a ramp that
// goes backwards even when every band count is right.
//
// Band characters, from TOPICS-tcf-canada:
//   B2  the answer is distributed, or turns on stance rather than words;
//       hedging appears; documents carry two questions or more
//   C1  the position is argued rather than stated, and a speaker may concede
//       a point without conceding the argument
//   C2  the answer is the movement of the whole exchange; irony and implication
//       carry as much as assertion
//
// C2 routes to `methode-scientifique` at C1: there are no published C2 items on
// any theme, and pick-items reports that fallback rather than hiding it.
//
// Documents are numbered 17 to 24 here, continuing co.ts. Paper 3 numbered its
// upper slope by QUESTION position instead, so its labels jump from 16 to 20;
// both are legible and neither is checked, but a paper should pick one.
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

/* ═══ B2 — positions 20 to 29 ═════════════════════════════════════════════ */
//
// SELF-VERIFY: in each of the four, no single sentence carries the answer. Two
// speakers agree on the facts and disagree about what follows from them, and
// the question asks what follows.

export const CO_B2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '004'),
  level: 'b2',
  label: 'Compréhension orale · B2',
  prompt: 'Vous allez entendre quatre documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 500,
  targetItemIds: uniq(
    ITEMS.droit.b2,
    ITEMS.quebecEtFrancophonie.b2,
    ITEMS.traditions.b2,
    ITEMS.valeurs.b2
  ),
  parts: [
    {
      label: 'Document 17 · l’astreinte et le repos',
      playCount: 1,
      readWindowS: 25,
      durationS: 81,
      text:
        'UNE JOURNALISTE : Une astreinte, c’est du temps où l’on ne travaille pas mais où l’on doit rester joignable. ' +
        'Le tribunal vient de juger que ce temps compte comme du repos tant qu’aucune intervention n’a lieu.\n' +
        'UN AVOCAT : C’est ce qu’il a jugé, et je crois que la question lui avait été mal posée. ' +
        'On lui a demandé si l’astreinte était du travail. Elle ne l’est pas. ' +
        'On aurait dû lui demander si elle était du repos, et la réponse aurait pu être tout autre.\n' +
        'UNE SYNDICALISTE : Nous plaidions exactement cela. Un salarié d’astreinte ne peut ni quitter la ville, ' +
        'ni dormir profondément. Appelez cela comme vous voudrez, ce n’est pas du repos.\n' +
        'UN AVOCAT : Sur les faits, nous ne divergeons pas. ' +
        'Là où je vous quitte, c’est sur le remède. Vous voulez que l’astreinte soit payée comme du travail. ' +
        'Je crois qu’il faut plutôt en limiter la fréquence. ' +
        'Payer davantage un dispositif nuisible revient à l’acheter.\n' +
        'UNE SYNDICALISTE : Sauf que la limitation se négocie entreprise par entreprise, ' +
        'et que la rémunération, elle, s’impose partout le même jour.\n' +
        'UN AVOCAT : Ce que vous appelez un avantage est aussi ce qui rend la mesure fragile. ' +
        'Une règle qui tombe d’un coup se défait de la même façon.\n' +
        'UNE SYNDICALISTE : Nous prendrons ce risque-là plutôt que l’autre.\n' +
        'UN AVOCAT : Voilà notre désaccord véritable. Pas sur ce qu’endure le salarié, ' +
        'sur ce qui finira par le protéger.',
      items: [
        {
          q: 'Que reproche l’avocat à la décision du tribunal ?',
          opts: [
            'La question qui lui était soumise était mal formulée',
            'Le tribunal a mal établi les faits',
            'Le tribunal a suivi les syndicats',
            'La décision arrive trop tard',
          ],
          correct: 0,
          why: 'Il accepte la réponse et conteste la question : on aurait dû demander si l’astreinte était du repos.',
          band: 'b2',
        },
        {
          q: 'Sur quoi l’avocat et la syndicaliste s’accordent-ils ?',
          opts: [
            'Sur ce que vit réellement le salarié d’astreinte',
            'Sur le montant de la rémunération',
            'Sur la portée de la décision',
            'Sur le rôle de la négociation d’entreprise',
          ],
          correct: 0,
          why: 'Il dit ne pas diverger sur les faits, et place le désaccord ailleurs.',
          band: 'b2',
        },
        {
          q: 'Où se situe leur désaccord ?',
          opts: [
            'Sur le moyen de protéger le salarié',
            'Sur la définition juridique du travail',
            'Sur la gravité de la privation de sommeil',
            'Sur l’autorité du tribunal',
          ],
          correct: 0,
          why: 'Elle veut la rémunération, il veut limiter la fréquence : le remède, pas le constat.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 18 · un argument qui dessert',
      playCount: 1,
      readWindowS: 25,
      durationS: 79,
      text:
        'UN ANIMATEUR : Trois écoles de la région enseignent en langue régionale, ' +
        'et leurs élèves obtiennent en français des résultats supérieurs à la moyenne. Voilà un argument.\n' +
        'UNE CHERCHEUSE : C’en est un mauvais, et il dessert ceux qui l’emploient. ' +
        'Ces écoles recrutent des familles qui choisissent, qui s’informent, qui suivent le travail du soir. ' +
        'Mettez les mêmes familles dans une école ordinaire et vous obtiendrez les mêmes résultats.\n' +
        'UN ÉLU : Vous dites donc que l’enseignement bilingue ne sert à rien.\n' +
        'UNE CHERCHEUSE : Je dis qu’il ne faut pas le défendre avec ce chiffre. ' +
        'Il se défend très bien autrement. Une langue qui cesse d’être enseignée disparaît en deux générations, ' +
        'et cette raison suffit. Le jour où une étude montrera que ces écoles font baisser le niveau de français, ' +
        'votre argument se retournera contre vous et il ne vous restera plus rien à dire.\n' +
        'UN ÉLU : Un argument fragile vaut mieux qu’aucun argument. ' +
        'Nous défendons un budget devant des gens pressés, pas devant un jury.\n' +
        'UNE CHERCHEUSE : Pas devant un ministère, et pas devant un tribunal. ' +
        'Un argument fragile est précisément celui que l’adversaire choisira d’attaquer, ' +
        'et il emportera le reste avec lui. ' +
        'Vous croyez ajouter une raison de plus à votre dossier. ' +
        'Vous y placez en réalité la porte par laquelle on entrera. ' +
        'Retirez ce chiffre vous-même, avant qu’on ne vous le retire.',
      items: [
        {
          q: 'Pourquoi la chercheuse écarte-t-elle ce chiffre ?',
          opts: [
            'Ces écoles accueillent des familles déjà très impliquées',
            'Le chiffre est faux',
            'Trois écoles, c’est trop peu',
            'Le français n’y est pas évalué de la même façon',
          ],
          correct: 0,
          why: 'Les mêmes familles obtiendraient les mêmes résultats ailleurs : le chiffre mesure le recrutement.',
          band: 'b2',
        },
        {
          q: 'Quelle est sa position sur l’enseignement bilingue ?',
          opts: [
            'Elle le soutient, mais pour une tout autre raison',
            'Elle s’y oppose',
            'Elle réserve son jugement',
            'Elle le juge sans effet sur la langue',
          ],
          correct: 0,
          why: 'Une langue qui n’est plus enseignée disparaît en deux générations, et cette raison lui suffit.',
          band: 'b2',
        },
        {
          q: 'Que craint-elle si l’on garde cet argument ?',
          opts: [
            'Qu’une étude contraire emporte toute la défense',
            'Que les familles se détournent des écoles',
            'Que le ministère cesse de financer',
            'Que les élèves soient évalués deux fois',
          ],
          correct: 0,
          why: 'L’adversaire attaquera le point fragile, et il emportera le reste avec lui.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 19 · la filature devenue médiathèque',
      playCount: 1,
      readWindowS: 22,
      durationS: 74,
      text:
        'UNE CHRONIQUEUSE : L’ancienne filature est devenue une médiathèque. ' +
        'On a gardé la cheminée, les rails au sol, deux métiers à tisser sous vitrine. ' +
        'On appelle cela conserver la mémoire du lieu.\n' +
        'UN HISTORIEN : On conserve le décor du lieu, et la différence n’est pas mince. ' +
        'La mémoire d’une filature, ce sont les horaires, la poussière, la surdité à cinquante ans. ' +
        'Vous ne mettrez pas cela sous vitrine.\n' +
        'UNE CHRONIQUEUSE : Faut-il alors ne rien garder ?\n' +
        'UN HISTORIEN : Il faut garder, bien sûr, et savoir ce que l’on garde. ' +
        'Une cheminée conservée dit qu’il y avait une usine à cet endroit. ' +
        'Elle ne dit rien de ce que c’était que d’y entrer à six heures du matin, ' +
        'ni de ce qu’il fallait accepter pour y rester vingt ans. ' +
        'Les petits-enfants des ouvrières traversent ce hall sans rien apprendre de leurs grands-mères, ' +
        'et repartent avec le sentiment d’avoir visité leur histoire.\n' +
        'UNE CHRONIQUEUSE : Le sentiment est déjà quelque chose. ' +
        'Il vaut mieux que l’indifférence, et il ramène des gens dans un bâtiment ' +
        'où ils ne seraient jamais entrés.\n' +
        'UN HISTORIEN : Je vous l’accorde entièrement, et c’est là que je m’inquiète. ' +
        'Le sentiment est surtout ce qui dispense d’aller chercher le reste. ' +
        'On repart content, et rien ne pousse à demander la suite.',
      items: [
        {
          q: 'Quelle distinction l’historien tient-il à faire ?',
          opts: [
            'Entre le décor d’un lieu et sa mémoire',
            'Entre une usine et une médiathèque',
            'Entre les objets et les bâtiments',
            'Entre les ouvrières et leurs petits-enfants',
          ],
          correct: 0,
          why: 'La cheminée et les métiers à tisser sont le décor ; les horaires et la surdité sont la mémoire.',
          band: 'b2',
        },
        {
          q: 'Que reproche-t-il à ce sentiment d’avoir visité son histoire ?',
          opts: [
            'Il dispense de chercher plus loin',
            'Il est réservé aux familles d’ouvrières',
            'Il vient trop tard',
            'Il repose sur des objets faux',
          ],
          correct: 0,
          why: 'Il accorde que le sentiment existe, et dit qu’il tient lieu de recherche.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 20 · la publicité et les enfants',
      playCount: 1,
      readWindowS: 22,
      durationS: 68,
      text:
        'UN JOURNALISTE : Faut-il interdire la publicité destinée aux enfants ?\n' +
        'UNE PSYCHOLOGUE : Avant huit ans, un enfant ne reconnaît pas une intention commerciale. ' +
        'Il reçoit une publicité comme il reçoit une information. ' +
        'Sur ce point, la recherche ne varie plus depuis vingt ans.\n' +
        'UN PUBLICITAIRE : Je ne le conteste pas. Je conteste ce que vous en tirez. ' +
        'Un enfant ne décide d’aucun achat, il demande. ' +
        'C’est un adulte qui paie, et cet adulte peut refuser.\n' +
        'UNE PSYCHOLOGUE : Vous décrivez un adulte disponible et reposé, ' +
        'qui dispose du temps d’expliquer pourquoi il refuse. ' +
        'Ce n’est pas celui à qui l’on demande quelque chose à dix-neuf heures dans un magasin, ' +
        'après une journée de travail et devant une file d’attente.\n' +
        'UN PUBLICITAIRE : Alors ce que vous visez n’est pas la publicité, c’est la fatigue des parents. ' +
        'Nous ne sommes pas responsables de leurs horaires.\n' +
        'UNE PSYCHOLOGUE : Je vise ce qui l’exploite, et la nuance compte. ' +
        'Vous n’avez pas créé cette fatigue, je vous l’accorde volontiers. ' +
        'Vous avez seulement appris à choisir l’heure. ' +
        'Vos écrans sont trois fois plus nombreux à dix-neuf heures qu’à dix heures du matin, ' +
        'et cela ne vous est pas arrivé par hasard.',
      items: [
        {
          q: 'Que concède le publicitaire ?',
          opts: [
            'Qu’un jeune enfant ne reconnaît pas une intention commerciale',
            'Que la publicité pousse les parents à acheter',
            'Que les horaires de diffusion sont choisis',
            'Que l’interdiction serait justifiée',
          ],
          correct: 0,
          why: 'Il dit ne pas contester le point, et conteste seulement ce qu’elle en tire.',
          band: 'b2',
        },
        {
          q: 'Quel est le reproche final de la psychologue ?',
          opts: [
            'L’heure de diffusion est choisie pour tirer parti de la fatigue',
            'Les publicitaires rendent les parents fatigués',
            'Les enfants décident seuls des achats',
            'La recherche est ignorée depuis vingt ans',
          ],
          correct: 0,
          why: 'Elle accorde qu’ils n’ont pas créé la fatigue, et leur impute d’avoir choisi l’heure.',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ C1 — positions 30 to 36 ═════════════════════════════════════════════ */
//
// SELF-VERIFY: in each document a speaker grants the other something real and
// keeps the argument. A candidate who hears only the concession answers wrong.

export const CO_C1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '005'),
  level: 'c1',
  label: 'Compréhension orale · C1',
  prompt: 'Vous allez entendre trois documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 470,
  targetItemIds: uniq(ITEMS.ethique.c1, ITEMS.philosophie.c1),
  parts: [
    {
      label: 'Document 21 · la neutralité supposée d’un tri',
      playCount: 1,
      readWindowS: 30,
      durationS: 111,
      text:
        'UNE ANIMATRICE : On répète qu’un algorithme est neutre et que seuls ses usages posent question. ' +
        'Vous refusez cette formule.\n' +
        'UN CHERCHEUR : Je la trouve vraie et inutile, ce qui est la pire combinaison. ' +
        'Vraie, parce qu’un tri n’a évidemment aucune intention. ' +
        'Inutile, parce qu’elle laisse croire qu’il existerait un moment du calcul où personne n’aurait choisi. ' +
        'Or choisir la variable que l’on mesure est déjà une décision, ' +
        'et elle est prise avant la première ligne de code.\n' +
        'UNE JURISTE : Vous décrivez un problème de conception, et je vous suis jusque-là. ' +
        'Le droit, lui, ne saisit qu’un résultat. Il ne sait pas juger une intention de travail.\n' +
        'UN CHERCHEUR : Et c’est là que nous nous séparons. Vous attendez le dommage pour agir. ' +
        'Je soutiens que ce dommage est lisible dans le cahier des charges six mois plus tôt, ' +
        'par n’importe qui sachant lire un tableau de variables, ' +
        'et qu’attendre revient à l’autoriser.\n' +
        'UNE JURISTE : Je vous accorde qu’il est souvent prévisible. ' +
        'Je ne vous accorde pas qu’on puisse interdire sur cette base. ' +
        'Nous n’interdisons pas un couteau parce qu’il coupe.\n' +
        'UN CHERCHEUR : Nous encadrons pourtant sa vente, sa taille et son port, ' +
        'et personne n’en conclut que le couteau serait coupable.\n' +
        'UNE JURISTE : L’analogie vous sert bien, et elle a une limite. ' +
        'Un couteau fait une seule chose, et nous savons laquelle. ' +
        'Un système de tri sert à cent usages qu’on ne peut pas énumérer d’avance, ' +
        'dont la moitié n’existe pas encore le jour où l’on écrit la règle, ' +
        'et une règle taillée pour le premier étouffera le centième.\n' +
        'UN CHERCHEUR : Alors écrivons la règle sur ce qui doit être démontré plutôt que sur ce qui est permis. ' +
        'Que celui qui déploie un tri prouve qu’il en a mesuré les effets, ' +
        'sur qui, pendant combien de temps, et selon quelle définition de l’erreur. ' +
        'Rien ne lui est interdit et rien ne lui est promis. ' +
        'Il n’aura rien à craindre s’il l’a fait, et c’est bien pour cela que l’obligation sera combattue.',
      items: [
        {
          q: 'Pourquoi juge-t-il la formule inutile ?',
          opts: [
            'Elle laisse croire qu’un moment du calcul échappe à toute décision',
            'Elle est fausse sur le fond',
            'Elle sert les juristes contre les chercheurs',
            'Elle ne parle que des usages',
          ],
          correct: 0,
          why: 'Il l’accepte comme vraie et lui reproche de masquer le choix des variables.',
          band: 'c1',
        },
        {
          q: 'Que lui concède la juriste ?',
          opts: [
            'Que le dommage est souvent prévisible',
            'Qu’il faut interdire avant le dommage',
            'Que la conception relève du droit',
            'Que l’analogie du couteau ne vaut rien',
          ],
          correct: 0,
          why: 'Elle accorde la prévisibilité et refuse la conséquence qu’il en tire.',
          band: 'c1',
        },
        {
          q: 'Que propose-t-il pour sortir du désaccord ?',
          opts: [
            'Faire porter la règle sur une obligation de démonstration',
            'Interdire les systèmes de tri les plus risqués',
            'Confier la conception à des juristes',
            'Attendre les premiers dommages constatés',
          ],
          correct: 0,
          why: 'Écrire la règle sur ce qui doit être démontré plutôt que sur ce qui est permis.',
          band: 'c1',
        },
      ],
    },
    {
      label: 'Document 22 · une phrase qui traverse les siècles',
      playCount: 1,
      readWindowS: 28,
      durationS: 108,
      // Written as an exchange rather than as the single chronique it was.
      // A one-voice C1 document went out at 208 wpm against a 175 target and a
      // 207 ceiling, because the slot cast for it reads fast and a monologue
      // has no turn boundaries to slow it. The argument is unchanged; the
      // interviewer only supplies the pauses.
      text:
        'UN ANIMATEUR : Vous vouliez revenir sur une phrase.\n' +
        'UNE CHRONIQUEUSE : Sur une phrase qui traverse les époques sans jamais s’user : ' +
        'autrefois, les gens tenaient parole. On la trouve sous la plume d’auteurs de chaque siècle, ' +
        'et chacun l’écrit en croyant décrire son temps.\n' +
        'UN ANIMATEUR : Et cela vous paraît suspect.\n' +
        'UNE CHRONIQUEUSE : Cette permanence devrait suffire à nous alerter. ' +
        'Si le déclin était réel et continu depuis deux mille ans, il ne resterait plus rien à perdre, ' +
        'et nous vivrions au milieu de gens dépourvus du moindre scrupule. ' +
        'Ce n’est pas ce que l’on observe en sortant de chez soi.\n' +
        'UN ANIMATEUR : Que décrit-elle, alors ?\n' +
        'UNE CHRONIQUEUSE : Pas le monde. Une position. ' +
        'Celui qui la prononce a vieilli, et il compare deux choses qui ne se comparent pas : ' +
        'le passé qu’il a retenu et le présent qu’il subit. ' +
        'D’un côté il garde ce qui a tenu, de l’autre il éprouve ce qui se défait. ' +
        'Le passé lui arrive trié, le présent lui arrive entier.\n' +
        'UN ANIMATEUR : Donc rien ne se dégrade jamais.\n' +
        'UNE CHRONIQUEUSE : Je ne prétends pas cela, et ce serait une sottise. ' +
        'Certaines choses se dégradent, et nous savons parfois lesquelles avec précision, ' +
        'parce que nous les mesurons année après année. Toute la différence tient là. ' +
        'Une dégradation mesurée se discute, se date, s’attribue à quelque chose, ' +
        'et l’on peut se tromper à son sujet, ce qui est déjà la marque d’un énoncé sérieux. ' +
        'Un déclin invoqué ne se discute pas, ne se date pas, ne s’attribue à rien, ' +
        'et c’est bien pourquoi on l’invoque plutôt que de le mesurer.\n' +
        'Il faudrait donc entendre cette phrase pour ce qu’elle est, ' +
        'et non pour ce qu’elle prétend être. ' +
        'Elle ne renseigne pas sur les mœurs de l’époque. ' +
        'Elle renseigne sur celui qui parle, sur son âge, sur ce qu’il a cessé de reconnaître ' +
        'et sur ce qu’il redoute dans ce qui vient. ' +
        'C’est une information véritable, et je la trouve même touchante. ' +
        'Elle a seulement le défaut de se présenter comme une autre.',
      items: [
        {
          q: 'Que montre, selon elle, la permanence de cette phrase ?',
          opts: [
            'Qu’elle ne décrit pas l’état du monde',
            'Que le déclin est ancien et continu',
            'Que chaque siècle se ressemble',
            'Que les auteurs se copient entre eux',
          ],
          correct: 0,
          why: 'Un déclin continu depuis deux mille ans ne laisserait rien, ce qui n’est pas observé.',
          band: 'c1',
        },
        {
          q: 'Quelle distinction établit-elle pour finir ?',
          opts: [
            'Entre une dégradation mesurée et un déclin invoqué',
            'Entre le passé et le présent',
            'Entre les jeunes et les anciens',
            'Entre les mœurs et les lois',
          ],
          correct: 0,
          why: 'L’une se date et s’attribue ; l’autre ne se discute pas, et c’est pourquoi on l’invoque.',
          band: 'c1',
        },
      ],
    },
    {
      label: 'Document 23 · à qui revient de prouver',
      playCount: 1,
      readWindowS: 28,
      durationS: 93,
      text:
        'UN CONFÉRENCIER : Dans un désaccord ordinaire, personne ne s’entend jamais sur un point ' +
        'qui précède tous les autres : qui doit apporter la preuve. ' +
        'On croit discuter du fond, on discute en réalité de cette répartition, ' +
        'et l’on discute d’autant plus longtemps qu’on ne l’a pas nommée.\n' +
        'La règle savante existe pourtant, et elle est simple. ' +
        'Celui qui affirme quelque chose doit l’établir. ' +
        'Le difficile n’est pas la règle, c’est de reconnaître qui affirme. ' +
        'Chacun présente sa position comme un état des choses et celle de l’autre comme une prétention. ' +
        'Ainsi les deux se croient dispensés, et chacun attend de l’autre ce que l’autre attend de lui.\n' +
        'Ajoutez que la charge se déplace en cours de route, ce que l’on oublie toujours. ' +
        'Quand une explication a été fournie et qu’elle tient debout, ' +
        'ce n’est plus à son auteur d’insister ni de la répéter plus fort. ' +
        'C’est à qui la refuse de dire pourquoi il la refuse. ' +
        'Ce déplacement se produit sans que personne l’annonce et sans qu’aucun mot le marque, ' +
        'et la moitié des conversations qui s’enveniment s’enveniment à ce moment précis, ' +
        'chacun reprochant à l’autre de ne pas répondre.\n' +
        'Je vous accorde volontiers qu’une telle règle sert aussi à esquiver. ' +
        'On la brandit pour n’avoir soi-même rien à produire, ' +
        'et c’est une manœuvre si commode qu’elle est devenue courante. ' +
        'Elle reste néanmoins la seule chose qui permette à un désaccord de finir autrement qu’en silence. ' +
        'Une discussion où personne ne porte la charge ne s’arrête pas : elle se fatigue. ' +
        'Et une discussion fatiguée donne raison au dernier qui parle, ' +
        'ce qui n’est le mérite de personne et ne règle rien du tout.',
      items: [
        {
          q: 'Selon lui, sur quoi porte en réalité un désaccord qui s’éternise ?',
          opts: [
            'Sur celui à qui revient d’apporter la preuve',
            'Sur les faits eux-mêmes',
            'Sur le vocabulaire employé',
            'Sur l’autorité des sources citées',
          ],
          correct: 0,
          why: 'On croit discuter du fond, on discute de la répartition de la charge, sans la nommer.',
          band: 'c1',
        },
        {
          q: 'Que concède-t-il à ceux qui se méfient de cette règle ?',
          opts: [
            'Qu’elle sert aussi à ne rien avoir à produire',
            'Qu’elle est trop savante pour servir',
            'Qu’elle change selon les sujets',
            'Qu’elle avantage toujours celui qui parle en premier',
          ],
          correct: 0,
          why: 'Il accorde la manœuvre et maintient que la règle est ce qui permet de conclure.',
          band: 'c1',
        },
      ],
    },
  ],
};

/* ═══ C2 — positions 37 to 39 ═════════════════════════════════════════════ */
//
// SELF-VERIFY: no answer sits in a sentence. Each is the shape of the whole
// exchange, and the trap in every case is a line a speaker says without
// believing it.

export const CO_C2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '006'),
  level: 'c2',
  label: 'Compréhension orale · C2',
  prompt: 'Vous allez entendre un document. Choisissez la bonne réponse.',
  timingS: 220,
  targetItemIds: uniq(ITEMS.methodeScientifique.c2),
  parts: [
    {
      label: 'Document 24 · une discipline ou une méthode',
      playCount: 1,
      readWindowS: 30,
      durationS: 132,
      text:
        'UNE ANIMATRICE : Vous soutenez que la question posée depuis un siècle est mal construite.\n' +
        'UN ÉPISTÉMOLOGUE : Elle l’est, et je la trouve tout de même précieuse, ' +
        'ce qui devrait me dispenser d’avoir à défendre les deux camps. ' +
        'On demande si telle activité est une science. On sous-entend qu’il existerait une frontière, ' +
        'et que d’un côté on trouverait des sciences et de l’autre des occupations respectables. ' +
        'Or ce qui distingue les deux ne se trouve pas dans l’objet.\n' +
        'UNE HISTORIENNE : Où se trouve-t-il, alors ?\n' +
        'UN ÉPISTÉMOLOGUE : Dans ce que l’on accepte de perdre. ' +
        'Une méthode se reconnaît à ce qu’elle prévoit sa propre défaite. ' +
        'Elle dit à l’avance quel résultat obligerait à abandonner la thèse, ' +
        'et elle le dit avant de connaître le résultat, ce qui est toute la difficulté. ' +
        'Après coup, chacun se découvre prêt à changer d’avis sur ce qui vient d’être établi.\n' +
        'UNE HISTORIENNE : Et une discipline qui ne procède pas ainsi ?\n' +
        'UN ÉPISTÉMOLOGUE : Elle peut être savante, utile, exigeante, et elle l’est souvent. ' +
        'Elle n’a simplement rien à perdre, ' +
        'et une pensée qui n’a rien à perdre ne gagne rien non plus. ' +
        'Elle accumule des lectures là où elle croit accumuler des acquis.\n' +
        'UNE HISTORIENNE : Vous venez de disqualifier la moitié de mon métier, ' +
        'et j’ai l’impression que vous alliez me féliciter.\n' +
        'UN ÉPISTÉMOLOGUE : Je disqualifie une manière de le pratiquer, pas le métier. ' +
        'Je connais des historiens qui annoncent, avant d’ouvrir les archives, ' +
        'quel document les ferait changer d’avis, et qui le publient ensuite ' +
        'même lorsque le document est apparu. ' +
        'Ils sont rares, ils sont peu commodes en colloque, ' +
        'et ce sont eux que l’on cite encore trente ans plus tard.\n' +
        'UNE HISTORIENNE : Prenons votre critère au sérieux, dans ce cas. ' +
        'Appliquez-le à votre propre discipline. ' +
        'Quel résultat vous obligerait à renoncer à ce que vous venez de dire ?\n' +
        'UN ÉPISTÉMOLOGUE : Voilà exactement la question que j’attendais et que je redoutais, ' +
        'et vous me permettrez de noter que vous avez attendu la fin pour la poser. ' +
        'Si l’on me montrait un champ dont les travaux ne prévoient jamais leur réfutation, ' +
        'qui ne s’est jamais donné les moyens d’avoir tort, ' +
        'et qui produit néanmoins des prédictions vérifiées pendant un siècle entier, ' +
        'alors mon critère ne distinguerait plus rien et je devrais y renoncer.\n' +
        'UNE HISTORIENNE : Les mathématiques, peut-être.\n' +
        'UN ÉPISTÉMOLOGUE : Peut-être. On m’a déjà proposé cet exemple et je ne l’ai pas réglé. ' +
        'Je n’en dirai donc pas davantage aujourd’hui. ' +
        'Vous remarquerez seulement que je viens de faire ce que je réclame des autres, ' +
        'et que cela m’a coûté davantage que tout le reste de l’entretien.',
      items: [
        {
          q: 'Quel critère l’épistémologue propose-t-il ?',
          opts: [
            'Prévoir à l’avance ce qui obligerait à abandonner la thèse',
            'Étudier un objet mesurable',
            'Produire des résultats utiles',
            'Être reconnu par les autres disciplines',
          ],
          correct: 0,
          why: 'Le critère est ce que l’on accepte de perdre, annoncé avant de connaître le résultat.',
          band: 'c2',
        },
        {
          q: 'Comment répond-il à l’historienne qui se dit disqualifiée ?',
          opts: [
            'Il vise une manière de pratiquer le métier, non le métier',
            'Il maintient que l’histoire n’est pas une science',
            'Il retire ce qu’il vient de dire',
            'Il renvoie la question aux mathématiques',
          ],
          correct: 0,
          why: 'Il cite des historiens qui annoncent ce qui les ferait changer d’avis, et dit qu’on les cite longtemps après.',
          band: 'c2',
        },
        {
          q: 'Que fait l’épistémologue à la fin de l’échange ?',
          opts: [
            'Il applique son propre critère à lui-même',
            'Il évite la question de l’historienne',
            'Il désigne les mathématiques comme contre-exemple',
            'Il conclut que la question était sans intérêt',
          ],
          correct: 0,
          why: 'Il nomme le résultat qui l’obligerait à renoncer, et dit que cela lui a coûté.',
          band: 'c2',
        },
      ],
    },
  ],
};
