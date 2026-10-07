// DALF C1 blanc-03: Compréhension des écrits. 12 questions, 25 points, 50 min.
//
// One text of ideas, 1500 to 2000 words, and twelve questions in text order
// mixing the three answer modes on the published pattern (BLUEPRINT-dalf-c1 §4):
//
//   MCQ    3   1, 2, 2         =  5
//   short  5   2, 2, 2, 3, 3   = 12
//   tfj    4   2 each          =  8   (two Vrai, two Faux)
//
// ── The text (DALF-34) ──────────────────────────────────────────────────────
//
// Tourism that wears out what it comes to see, and who is responsible. The
// author reports two positions (the traveller's guilt; the destination's
// fault), concedes a merit to each and limits each, then holds her own: the
// question « à qui la faute » is badly put, because the wear is a mechanism,
// not a culprit; the NUMBER of visitors belongs to collective rules made with
// the residents, the MANNER of coming to each traveller. She also distrusts one
// of her own arguments (the « voyageur averti » reproach). That gives the
// attribute, justify and weigh families material.
//
// Families, in text order:
//   1 MCQ 1    locate      the paradox of Valcorbière
//   2 short 2  attribute   the merit she grants the traveller's-guilt camp
//   3 short 2  reformulate why renouncing is unjust AND useless
//   4 MCQ 2    attribute   where she agrees with the destination camp
//   5 tfj 2    justify     the Port-Ambrelle tax lowered visitor numbers    FAUX
//   6 short 2  infer       why « à qui la faute » is badly put
//   7 tfj 2    justify     the traveller can act on the number          FAUX
//   8 short 3  weigh       the point of the day-tripper / week comparison
//   9 tfj 2    attribute   she distrusts the « voyageur averti » reproach VRAI
//  10 MCQ 2    infer       why she cites the residents' measures
//  11 tfj 2    justify     change out of attention, not guilt          VRAI
//  12 short 3  weigh       her final position
//
// INVENTED, all of it: the author Maëlle Duvernois, the revue « Escales
// critiques », the village of Valcorbière (900 inhabitants, two and a half
// million visitors a year, the steps of its watchtower worn by eleven
// centimetres in fifty years, the school closed in 2019, the 2022 measures:
// main street closed to groups from 18 h to 9 h, thirty flats kept for
// year-round tenants, two families back), the port of Port-Ambrelle (a 5 € tax on
// day visitors from 2021, 11 million euros in two years, visitors up 6 %), the
// cabinet Héliade and its survey (stays of three nights or more: 8 % of
// visitors, 41 % of the money spent in the village).
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId, C1_CE_TARGETS } from './common.ts';

export const CE_TEXT =
  'QUI USE LES LIEUX ?\n\n' +
  'Valcorbière compte neuf cents habitants et reçoit chaque année deux millions et demi de visiteurs. Les marches de sa tour de guet, taillées au treizième siècle, se sont creusées de onze centimètres en cinquante ans. Dans la rue principale, la boulangerie est devenue une boutique de souvenirs, puis une autre ; l’école a fermé en 2019, faute d’enfants. Les visiteurs, pourtant, viennent chercher ce qu’ils appellent un village authentique, c’est-à-dire un lieu où l’on vit encore. Ils contribuent ainsi à vider ce qu’ils sont venus admirer. Ce paradoxe n’a rien d’exceptionnel : on le retrouve dans les vieux quartiers des ports, au pied des belvédères célèbres, dans les ruelles de toutes les villes qu’un guide a qualifiées d’incontournables. La question qu’il pose est simple à formuler et difficile à trancher : si les lieux s’usent à force d’être visités, qui en porte la responsabilité, le voyageur ou la destination ?\n\n' +
  'La première réponse, la plus répandue, met en cause le voyageur. Voyagez moins, voyagez hors saison, restez sur les chemins balisés, ne photographiez pas tout : les campagnes de sensibilisation et les chroniques indignées s’adressent à la conscience de chacun. Le touriste, dans ce discours, c’est toujours l’autre, celui qui arrive en foule et repart sans avoir rien vu, tandis que celui qui parle se considère volontiers comme un voyageur. La distinction est ancienne : dès que les voyages se sont démocratisés, ceux qui partaient depuis longtemps ont reproché aux nouveaux venus de ne pas savoir regarder. Elle a toujours servi à tracer une frontière sociale autant qu’à décrire une manière de voyager. Cette position a un mérite que je ne lui conteste pas : elle rappelle à chacun que ses choix ont des conséquences et que partir n’est jamais un geste neutre. Mais elle bute sur une difficulté qu’elle préfère ignorer. Aucun visiteur, pris isolément, n’use la tour de Valcorbière. Les onze centimètres de pierre disparue sont faits de millions de pas, dont chacun est parfaitement innocent. Demander à un individu de renoncer pour un dommage qu’il ne cause pas seul, c’est d’abord injuste ; c’est surtout inefficace, car la place qu’il laisse ne reste pas vide. Le touriste scrupuleux qui renonce à Valcorbière libère simplement sa place pour un autre, moins scrupuleux, qui ne la lui disputait même pas.\n\n' +
  'La seconde réponse renverse l’accusation. Ce ne sont pas les visiteurs qui ont envahi les lieux, ce sont les lieux qui les ont appelés. Les municipalités ont construit des parkings pour les autocars, financé des campagnes publicitaires, transformé leurs monuments en logos ; les propriétaires ont converti leurs appartements en locations de courte durée ; les commerçants ont remplacé les épiceries par des comptoirs à souvenirs. Il serait commode, ensuite, de se plaindre de la foule qu’on a soi-même conviée. La responsabilité, dit cette école, revient à ceux qui ont le pouvoir de régler les flux : quotas, réservations obligatoires, taxes de séjour. Sur un point, je lui donne entièrement raison : un effet qui naît de l’addition de comportements individuels ne peut être corrigé que par des règles collectives. Aucune somme de bonnes intentions ne remplacera jamais une limite décidée et appliquée.\n\n' +
  'Encore faut-il savoir qui décide, et dans quel but. Car « la destination » n’est pas un acteur unique. Elle réunit un maire qui veut être réélu, des commerçants qui vivent des visiteurs, des habitants qui les subissent, une région qui compte ses recettes. Les règles qu’adoptent ces ensembles composites protègent souvent les revenus bien plus que les lieux. Le port de Port-Ambrelle en offre un exemple instructif. En 2021, la ville a instauré une taxe de cinq euros pour les visiteurs à la journée, présentée comme une mesure de protection du vieux port. En deux ans, elle a rapporté onze millions d’euros, et le nombre de visiteurs a augmenté de six pour cent. La taxe n’a pas éloigné les foules : elle les a rendues rentables. On aurait tort d’y voir une hypocrisie ; c’est plutôt le résultat prévisible d’une décision prise par ceux qui profitent de la fréquentation, sans ceux qui en paient le prix.\n\n' +
  'Les quotas, que l’on présente souvent comme le remède radical, n’échappent pas à cette question. Au belvédère de la Dent-Grise, la réservation en ligne est devenue obligatoire en 2020 : trois mille entrées par jour, pas une de plus. La fréquentation a baissé d’un tiers, et les sentiers ont cessé de s’élargir chaque été. Le résultat est réel, et je ne le minimise pas. Mais la règle a été pensée pour les visiteurs, non pour ceux qui vivent dans la vallée. Les habitants des hameaux voisins, qui montaient au belvédère le dimanche depuis des générations, doivent désormais réserver comme tout le monde, souvent plusieurs semaines à l’avance, et beaucoup y ont renoncé. Une limite efficace sur le nombre peut ainsi déposséder ceux qu’elle prétendait protéger. Ce n’est pas un argument contre les quotas ; c’est un argument pour qu’on se demande, chaque fois, au nom de qui on les fixe.\n\n' +
  'Ces deux réponses opposées partagent pourtant un défaut : elles cherchent un coupable. Or l’usure d’un lieu n’est pas une faute, c’est un mécanisme. Elle naît de la rencontre entre un espace limité, qui ne peut ni grandir ni se déplacer, et une demande mobile, qui grossit à mesure que les voyages deviennent plus faciles et moins chers. Il y a cinquante ans, une visite à Valcorbière demandait une journée de route ; elle tient aujourd’hui dans une escale de croisière ou dans un week-end en avion. Demander « à qui la faute ? », c’est chercher un responsable unique là où plusieurs acteurs agissent chacun sur une partie du phénomène. La question utile est différente : qui peut agir, et sur quoi ? Le nombre de visiteurs qu’un lieu peut accueillir relève des règles collectives, parce que lui seul peut être fixé et contrôlé à cette échelle. Le voyageur, lui, ne peut rien sur le nombre ; il peut beaucoup sur la manière. Combien de temps il reste, où il dort, où il dépense, ce qu’il prend la peine de comprendre : tout cela lui appartient.\n\n' +
  'Que la manière compte autant que le nombre, les chiffres le montrent mieux que les sermons. Comparons deux visiteurs de Valcorbière. Le premier arrive en autocar à quatorze heures, gravit la tour, photographie la vue, achète un aimant décoratif fabriqué ailleurs et repart à dix-sept heures. Le second loue pour une semaine un appartement chez un habitant, prend son café chaque matin au même comptoir, achète son pain à la boulangerie qui a survécu et apprend le nom de la rue où il loge. Tous deux usent les marches de la même façon. Mais leur effet sur la vie du village n’a rien de comparable. Selon une enquête du cabinet Héliade, les visiteurs qui restent au moins trois nuits ne représentent que huit pour cent des entrées, mais quarante et un pour cent des dépenses faites dans le village. Le second visiteur ne vide pas le village ; il aide une partie de ses commerces à rester ouverts toute l’année.\n\n' +
  'On objecte souvent à ce raisonnement qu’il flatte un certain type de voyageur, celui qui prend son temps et fuit les foules. Et l’on rappelle, non sans raison, que ce voyageur averti joue souvent le rôle d’éclaireur. C’est lui qui découvre le village encore tranquille, le raconte, le photographie ; les guides le suivent, puis les autocars. Celui qui fuit la foule finit par lui ouvrir la route. Je me méfie pourtant de ce reproche autant que je le comprends. Il est très souvent formulé par ceux qui sont arrivés avant les autres et voudraient garder les lieux pour eux. L’accusation d’ouvrir la voie aux foules est souvent l’argument de ceux qui ont défriché les premiers, et qui découvrent soudain les vertus de la fermeture. Un lieu n’appartient pas davantage au premier visiteur qu’au dernier. Il appartient d’abord à ceux qui y vivent.\n\n' +
  'Ce sont précisément eux que les deux camps oublient. Ni la morale du voyageur ni la régulation des destinations ne leur donnent la parole, alors qu’ils sont les seuls à savoir ce qu’un lieu peut supporter, parce qu’ils le supportent. À Valcorbière, une association d’habitants a obtenu en 2022 deux mesures modestes : la rue principale est fermée aux groupes entre dix-huit heures et neuf heures, et trente appartements sont réservés à des locataires à l’année. Deux familles sont revenues s’installer. C’est peu, mais la direction compte davantage que le chiffre : pour la première fois depuis des décennies, une règle a été décidée avec ceux qui vivent sur place, et non pour ceux qui passent.\n\n' +
  'Où cela nous mène-t-il ? Ni à l’accusation du voyageur, ni à celle des destinations, mais à un partage plus exigeant. Il revient aux collectivités, avec leurs habitants, de décider combien de visiteurs un lieu peut recevoir, et de le décider pour préserver le lieu et la vie qui s’y mène, et non pour maximiser ses recettes. Il revient à chaque voyageur de décider comment il vient : rester plus longtemps, venir moins souvent, préférer la semaine à l’après-midi. Je ne lui demande pas de le faire par remords. Le remords produit des sacrifices spectaculaires et de courte durée ; il ne change pas les habitudes. Ce que j’attends du voyageur, c’est qu’il change sa manière de voyager non par culpabilité, mais par attention. On ne sauvera pas Valcorbière en reprochant à chaque visiteur d’exister, ni en le taxant pour mieux l’accueillir. Un lieu ne s’use pas parce qu’on l’aime trop, mais parce qu’on l’aime en passant.\n\n' +
  'Maëlle Duvernois, revue Escales critiques';

export const CE_TASK: ExamTask = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  taskType: 'ce_mcq',
  skill: 'CE',
  level: 'c1',
  examinerNotes: NOTES_CLOSED,
  id: taskId('ce_mcq', '001'),
  label: 'Compréhension des écrits',
  prompt:
    'Lisez le texte, puis répondez aux questions.\n' +
    'Cochez la bonne réponse, écrivez l’information demandée ou, pour les questions vrai/faux, cochez la bonne case et recopiez la phrase ou le passage du texte qui justifie votre réponse.\n' +
    'Pour les vrai/faux, les points ne sont accordés que si le choix ET la justification sont corrects.',
  timingS: 3000,
  targetItemIds: [...C1_CE_TARGETS],
  parts: [
    {
      label: 'Texte · qui use les lieux ?',
      text: CE_TEXT,
      items: [
        {
          // Q1 · locate. Key-first; scattered in paper.ts.
          q: 'Quel paradoxe l’auteure relève-t-elle à Valcorbière ?',
          opts: [
            'Les visiteurs cherchent un village vivant qu’ils contribuent eux-mêmes à vider.',
            'Le village attire les foules alors qu’il n’a rien de vraiment remarquable.',
            'Les habitants vivent du tourisme qu’ils déclarent pourtant vouloir refuser.',
          ],
          correct: 0,
          why: 'Ils viennent chercher « un lieu où l’on vit encore » et contribuent à le vider. L’intérêt du village n’est pas mis en doute ; l’attitude des habitants envers le tourisme n’est pas décrite ainsi.',
          band: 'c1',
          points: 1,
        },
        {
          // Q2 · attribute. Two ideas: each one's choices; they have consequences.
          kind: 'short',
          q: 'Quel mérite l’auteure reconnaît-elle au discours qui met en cause le voyageur ?',
          opts: [],
          correct: -1,
          keywords: [
            ['choix', 'chois', 'decision', 'comportement', 'conduite', 'geste', 'acte', 'agissement', 'depart', 'partir'],
            ['consequen', 'effet', 'impact', 'compt', 'pese', 'incidence', 'repercu'],
          ],
          model: 'Il rappelle à chacun que ses choix de voyage ont des conséquences et que partir est un geste qui compte.',
          why: '« Elle rappelle à chacun que ses choix ont des conséquences et que partir n’est jamais un geste neutre. »',
          band: 'c1',
          points: 2,
        },
        {
          // Q3 · reformulate. Two ideas: no one causes it alone (sum of steps); the place is taken by another.
          kind: 'short',
          q: 'Pourquoi, selon l’auteure, demander à un individu de renoncer au voyage est-il injuste et inefficace ?',
          opts: [],
          correct: -1,
          keywords: [
            ['addition', 'somme', 'cumul', 'accumul', 'million', 'ensemble des', 'innocent', 'minime', 'infime', 'collecti'],
            ['remplac', 'un autre', 'sa place', 'libere', 'substitu', 'quelqu un d autre', 'autres viendront', 'autres viennent', 'reste pas vide', 'prend la place', 'pris par', 'prise par'],
          ],
          model: 'Parce que l’usure résulte de l’addition de millions de visites, chacune innocente ; et celui qui renonce est aussitôt remplacé par un autre visiteur.',
          why: 'Injuste : personne ne cause seul le dommage, fait de millions de pas innocents. Inefficace : la place laissée est prise par un autre.',
          band: 'c1',
          points: 2,
        },
        {
          // Q4 · attribute: a reported view, and the one point she grants it.
          q: 'Sur quel point l’auteure donne-t-elle raison à ceux qui mettent en cause les destinations ?',
          opts: [
            'Un effet né de l’addition de comportements exige des règles collectives.',
            'Les villes ont eu tort de faire la promotion publicitaire de leurs monuments.',
            'Les habitants doivent être les seuls à fixer le nombre de visiteurs admis.',
          ],
          correct: 0,
          why: '« Sur un point, je lui donne entièrement raison » : seules des règles collectives corrigent un effet d’addition. La publicité des villes est l’argument de cette école, qu’elle rapporte sans le reprendre à son compte ; elle veut décider AVEC les habitants, non par eux seuls.',
          band: 'c1',
          points: 2,
        },
        {
          // Q5 · justify. FAUX: visitors rose.
          kind: 'tfj',
          q: 'La taxe instaurée à Port-Ambrelle a fait baisser la fréquentation du vieux port.',
          opts: ['Vrai', 'Faux'],
          correct: 1,
          quotes: [
            'le nombre de visiteurs a augmenté de six pour cent',
            'La taxe n’a pas éloigné les foules : elle les a rendues rentables',
          ],
          why: 'La taxe a rapporté onze millions d’euros et le nombre de visiteurs a augmenté de six pour cent.',
          band: 'c1',
          points: 2,
        },
        {
          // Q6 · infer. Two ideas: it looks for a culprit; there is a mechanism.
          kind: 'short',
          q: 'Pourquoi l’auteure juge-t-elle mal posée la question « à qui la faute ? » ?',
          opts: [],
          correct: -1,
          keywords: [
            ['coupable', 'responsable unique', 'seul responsable', 'accus', 'designer', 'culpab', 'fautif'],
            ['mecanism', 'rencontre', 'systeme', 'processus', 'dynamique', 'plusieurs acteurs', 'engrenage', 'automatique'],
          ],
          model: 'Parce qu’elle cherche un coupable là où il y a un mécanisme : la rencontre d’un espace limité et d’une demande qui se déplace.',
          why: '« Elles cherchent un coupable. Or l’usure d’un lieu n’est pas une faute, c’est un mécanisme », où plusieurs acteurs agissent chacun sur une partie.',
          band: 'c1',
          points: 2,
        },
        {
          // Q7 · justify. FAUX.
          kind: 'tfj',
          q: 'Selon l’auteure, chaque voyageur a les moyens d’agir sur la quantité de visiteurs qu’un lieu reçoit.',
          opts: ['Vrai', 'Faux'],
          correct: 1,
          quotes: [
            'Le voyageur, lui, ne peut rien sur le nombre',
            'Le nombre de visiteurs qu’un lieu peut accueillir relève des règles collectives',
          ],
          why: 'Le nombre relève des règles collectives ; le voyageur n’agit que sur la manière.',
          band: 'c1',
          points: 2,
        },
        {
          // Q8 · weigh (3). Three ideas: the manner of coming; a DIFFERENT effect (same wear, not the same result); village life. The contrast group carries no « même / autant / égal », which reversed answers use too.
          kind: 'short',
          q: 'Que cherche à montrer l’auteure en comparant l’excursionniste d’un après-midi et celui qui loue un appartement pour une semaine ?',
          opts: [],
          correct: -1,
          keywords: [
            ['maniere', 'facon', 'comment', 'duree', 'sejour', 'longtemps', 'temps pass', 'depens', 'consomm', 'comportement'],
            ['differ', 'inegal', 'contraire', 'oppos', 'chang', 'fait vivre', 'faire vivre', 'davantage', 'mieux', 'compte autant', 'autant que le nombre', 'nombre egal', 'a nombre'],
            ['vie locale', 'vie du village', 'village', 'habitant', 'commerce', 'economie locale', 'local', 'boulangerie', 'cafe'],
          ],
          model: 'Qu’à nombre égal, la manière de venir, la durée du séjour et les dépenses sur place changent l’effet du tourisme sur la vie du village.',
          why: 'Les deux usent les marches de la même façon, mais le second fait vivre les commerces : la manière compte autant que le nombre (8 % des entrées, 41 % des dépenses).',
          band: 'c1',
          points: 3,
        },
        {
          // Q9 · attribute. VRAI: she distrusts the objection she reports.
          kind: 'tfj',
          q: 'L’auteure se montre réservée face au reproche adressé au voyageur qui recherche les lieux encore tranquilles.',
          opts: ['Vrai', 'Faux'],
          correct: 0,
          quotes: [
            'Je me méfie pourtant de ce reproche autant que je le comprends',
            'Il est très souvent formulé par ceux qui sont arrivés avant les autres et voudraient garder les lieux pour eux',
          ],
          why: 'Elle comprend le reproche mais s’en méfie : il vient souvent de ceux qui sont arrivés les premiers.',
          band: 'c1',
          points: 2,
        },
        {
          // Q10 · infer.
          q: 'Pourquoi l’auteure évoque-t-elle les mesures obtenues par les habitants de Valcorbière ?',
          opts: [
            'Pour montrer qu’une règle décidée avec les habitants peut infléchir la tendance.',
            'Pour prouver que le village a retrouvé la population qu’il avait autrefois.',
            'Pour illustrer l’échec des règles imposées aux visiteurs par les collectivités.',
          ],
          correct: 0,
          why: '« C’est peu, mais la direction compte » : pour la première fois, une règle est décidée avec ceux qui vivent sur place. Deux familles revenues, ce n’est pas la population d’autrefois ; les mesures ne sont pas présentées comme un échec.',
          band: 'c1',
          points: 2,
        },
        {
          // Q11 · justify. VRAI.
          kind: 'tfj',
          q: 'L’auteure attend du voyageur qu’il change ses habitudes par attention plutôt que par remords.',
          opts: ['Vrai', 'Faux'],
          correct: 0,
          quotes: [
            'non par culpabilité, mais par attention',
            'Je ne lui demande pas de le faire par remords',
          ],
          why: 'Le remords produit des sacrifices de courte durée ; elle attend un changement « non par culpabilité, mais par attention ».',
          band: 'c1',
          points: 2,
        },
        {
          // Q12 · weigh (3). Three ideas: the collectivity / rules; the number; the traveller's manner.
          kind: 'short',
          q: 'Quelle position l’auteure défend-elle finalement ? Répondez avec vos propres mots.',
          opts: [],
          correct: -1,
          keywords: [
            ['collectiv', 'commune', 'municipal', 'autorit', 'regle', 'elus', 'pouvoirs publics', 'destination', 'ville'],
            ['nombre', 'combien', 'quota', 'limit', 'frequentation', 'jauge', 'flux', 'quantite', 'capacite'],
            ['maniere', 'facon', 'comment', 'sejourn', 'duree', 'longtemps', 'moins souvent', 'attention', 'comportement'],
          ],
          model: 'Les règles collectives, décidées avec les habitants, doivent fixer combien de visiteurs un lieu peut recevoir ; chaque voyageur, lui, répond de sa manière de venir : rester plus longtemps, venir moins souvent.',
          why: 'Un partage : aux collectivités, avec les habitants, le nombre (pour préserver le lieu, pas les recettes) ; au voyageur, la manière, par attention.',
          band: 'c1',
          points: 3,
        },
      ],
    },
  ],
};
