// DELF B2 blanc-05 — Compréhension des écrits. 20 questions, 25 points, 60 min.
//
// Three exercises worth 9, 9 and 7. Exercises 1 and 2 are single continuous
// texts of 420 to 500 words; exercise 3 is the attribution set, four signed
// opinions totalling 360 to 420 words, six items choosing between the names.
//
// `textLengthViolations` measures all of that, and unlike the listening bands
// it is not fighting a renderer: a reading text is as long as it is written.
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

/* ═══ EXERCICE 1 — 9 points ═══════════════════════════════════════════════ */
//
// DELF-71 · the right to be forgotten, and the archive it argues with.
// Weights: 0.5 · 1 · 1.5 · 1 · 2 · 2.5 · 0.5 = 9
//
// The author holds a position neither camp holds: the right is correct AND the
// mechanism chosen to deliver it is the wrong one, because it deletes the index
// rather than the record and calls that forgetting.

export const CE_EX1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '001'),
  level: 'b2',
  label: 'Compréhension des écrits · Exercice 1',
  prompt:
    'Vous lisez cet article dans un magazine.\n' +
    'Lisez le texte puis répondez aux questions.',
  timingS: 1500,
  targetItemIds: uniq(ITEMS.droit),
  parts: [
    {
      label: 'Exercice 1 · effacer l’index, et appeler cela l’oubli',
      text:
        'ON N’A PAS EFFACÉ L’ARTICLE, ON A EFFACÉ LE CHEMIN\n\n' +
        'Depuis huit ans, une personne peut demander qu’un article la concernant ' +
        'cesse d’apparaître dans les résultats de recherche associés à son nom. ' +
        'Le principe me paraît juste. C’est le mécanisme que je conteste, ' +
        'et la confusion entre les deux nourrit un débat qui tourne à vide.\n\n' +
        'Ce que la procédure obtient, très précisément : un moteur cesse de relier ' +
        'un nom à une page. L’article reste en ligne, à la même adresse, ' +
        'consultable par quiconque le cherche autrement. ' +
        'Le journal qui l’a publié n’a rien retiré ' +
        'et n’a le plus souvent pas été prévenu.\n\n' +
        'On appelle cela un droit à l’oubli. Le mot est faux ' +
        'et il n’est pas faux par hasard. On n’a rien oublié : ' +
        'on a rendu une information plus difficile à retrouver ' +
        'pour ceux qui la cherchent mal, ' +
        'et parfaitement accessible à ceux qui la cherchent bien. ' +
        'Un employeur pressé ne la trouvera pas. ' +
        'Un enquêteur, un journaliste, un voisin méthodique la trouveront.\n\n' +
        'C’est un résultat, et il faut lui reconnaître ce qu’il vaut. ' +
        'La grande majorité des recherches sur un nom sont pressées, ' +
        'et une candidature écartée à cause d’un article de 2009 ' +
        'est un dommage réel qu’une désindexation évite réellement. ' +
        'Je ne prétends pas que la mesure ne fait rien. ' +
        'J’ajoute que le dommage qu’elle évite est le plus fréquent des deux : ' +
        'pour une personne dont le passé intéresse un enquêteur, ' +
        'il y en a mille dont il n’intéresse qu’un recruteur distrait.\n\n' +
        'Je prétends qu’elle fait une chose et qu’on lui en attribue une autre. ' +
        'Le débat public oppose ceux qui défendent la mémoire collective ' +
        'à ceux qui défendent la personne. Aucun des deux camps ' +
        'ne parle du dispositif réel. La mémoire collective n’est pas touchée : ' +
        'l’article est intact, et les historiens de 2070 le liront. ' +
        'La personne n’est pas protégée non plus : ' +
        'quiconque a une raison sérieuse de la chercher aboutira.\n\n' +
        'Une chose est protégée, et c’est le moteur. ' +
        'La procédure lui confie l’arbitrage entre la vie privée d’un inconnu ' +
        'et l’intérêt du public, sans audience, sans motivation publiée, ' +
        'et sans que le journal concerné soit partie. ' +
        'Une entreprise privée tranche donc, à la demande d’une personne, ' +
        'un litige dont la troisième partie ignore l’existence.\n\n' +
        'On m’objecte que cet arbitrage serait ingérable autrement, ' +
        'et le chiffre est en effet imposant : plusieurs centaines de milliers ' +
        'de demandes depuis huit ans. Mais ce chiffre est une conséquence ' +
        'de la gratuité et de l’automaticité de la procédure, ' +
        'pas une donnée sur laquelle raisonner. ' +
        'On ne justifie pas une mauvaise instance par le volume ' +
        'que cette instance a elle-même appelé.\n\n' +
        'Ce que je voudrais est simple à formuler et coûteux à mettre en place. ' +
        'Que la demande soit adressée à un juge, que le journal soit averti ' +
        'et puisse répondre, et que la décision soit motivée et publique. ' +
        'Cela ferait quelques milliers de dossiers par an. ' +
        'C’est ce que coûte une décision qui mérite son nom.',
      items: [
        {
          q: 'Depuis combien de temps la procédure existe-t-elle ?',
          opts: ['Huit ans', 'Deux ans', 'Depuis 2009', 'Depuis 2070'],
          correct: 0,
          why: 'Huit ans. 2009 est la date de l’article donné en exemple, pas celle de la procédure.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'Qu’advient-il de l’article après une désindexation ?',
          opts: [
            'Il reste en ligne à la même adresse',
            'Il est supprimé du site du journal',
            'Il est archivé hors ligne',
            'Il est réécrit sans le nom',
          ],
          correct: 0,
          why: 'Le moteur cesse de relier un nom à une page ; le journal n’a rien retiré et souvent n’a pas été prévenu.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Pourquoi l’auteur juge-t-il le terme « droit à l’oubli » trompeur ?',
          opts: [
            'L’information reste accessible à qui la cherche bien',
            'Le droit ne s’applique qu’aux journaux',
            'L’oubli ne peut jamais être garanti par la loi',
            'Les moteurs refusent la plupart des demandes',
          ],
          correct: 0,
          why: 'Un employeur pressé ne la trouvera pas ; un enquêteur, un journaliste ou un voisin méthodique la trouveront.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Que reproche l’auteur aux deux camps du débat public ?',
          opts: [
            'Aucun ne décrit le dispositif réellement en place',
            'Tous deux exagèrent le nombre de demandes',
            'Tous deux défendent les moteurs de recherche',
            'Aucun ne cite de cas concret',
          ],
          correct: 0,
          why: 'La mémoire collective n’est pas touchée et la personne n’est pas protégée : ni l’un ni l’autre camp ne parle de ce qui se passe.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Que concède l’auteur aux défenseurs de la procédure ?',
          opts: [
            'Une désindexation évite réellement une candidature écartée pour un vieil article',
            'Les moteurs arbitrent avec compétence',
            'Les journaux publient trop de noms',
            'Les historiens n’ont pas besoin de ces archives',
          ],
          correct: 0,
          why: 'Il écrit ne pas prétendre que la mesure ne fait rien : la plupart des recherches sur un nom sont pressées.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Quel est, selon l’auteur, le vrai défaut du dispositif ?',
          opts: [
            'Une entreprise privée tranche un litige dont une des parties ignore l’existence',
            'Les délais de traitement sont trop longs',
            'Les demandes sont trop rarement acceptées',
            'Les articles anciens ne sont pas archivés',
          ],
          correct: 0,
          why: 'Sans audience, sans motivation publiée, et sans que le journal soit partie : c’est le moteur qui est protégé.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Que propose l’auteur à la fin de l’article ?',
          opts: [
            'Un juge, un journal averti, et une décision motivée et publique',
            'La suppression pure et simple des articles concernés',
            'La fin de la procédure de désindexation',
            'Un délai de dix ans avant toute demande',
          ],
          correct: 0,
          why: 'Il chiffre lui-même le coût : quelques milliers de dossiers par an.',
          band: 'b2',
          points: 0.5,
        },
      ],
    },
  ],
};

/* ═══ EXERCICE 2 — 9 points ═══════════════════════════════════════════════ */
//
// DELF-79 · teaching with material the students dispute.
// Weights: 0.5 · 1 · 1 · 1.5 · 2 · 2.5 · 0.5 = 9
//
// The author is a teacher writing about her own reversal, which is what keeps
// the concession question honest: the position she abandoned is stated in full
// before the one she holds.

export const CE_EX2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '002'),
  level: 'b2',
  label: 'Compréhension des écrits · Exercice 2',
  prompt:
    'Vous lisez ce texte dans une revue professionnelle.\n' +
    'Lisez le texte puis répondez aux questions.',
  timingS: 1500,
  targetItemIds: uniq(ITEMS.ethique),
  parts: [
    {
      label: 'Exercice 2 · enseigner un texte que la classe conteste',
      text:
        'J’AI CHANGÉ D’AVIS, ET PAS POUR LA RAISON QU’ON ME PRÊTE\n\n' +
        'Pendant onze ans, j’ai enseigné un discours de 1911 ' +
        'dont les prémisses sont indéfendables, et je l’ai fait ' +
        'en le présentant comme un document et non comme une thèse. ' +
        'Quand des étudiants ont demandé son retrait, il y a trois ans, ' +
        'j’ai refusé, avec les arguments que tout le monde connaît : ' +
        'comprendre n’est pas approuver, une université n’est pas un sanctuaire, ' +
        'et un texte retiré ne cesse pas d’avoir été écrit.\n\n' +
        'Je maintiens ces trois arguments. Je les crois exacts ' +
        'et je les ai vus mal utilisés, y compris par moi.\n\n' +
        'Ce qui m’a fait changer n’est pas une pétition, ' +
        'c’est une copie. Une étudiante a rendu, cette année-là, ' +
        'un devoir excellent sur la structure du discours ' +
        'et a ajouté trois lignes à la fin, hors sujet, ' +
        'où elle expliquait qu’elle avait mis quatre jours ' +
        'à pouvoir le lire jusqu’au bout. ' +
        'Elle ne demandait pas son retrait. Elle décrivait un coût, ' +
        'et je m’étais dispensée pendant onze ans de savoir qu’il existait.\n\n' +
        'Le point n’est pas que ce coût rende l’enseignement illégitime. ' +
        'Beaucoup de choses qui valent la peine coûtent quelque chose, ' +
        'et une formation qui n’exige rien n’exige rien. ' +
        'Le point est que je n’avais jamais mis ce coût en face du bénéfice, ' +
        'parce que je ne le payais pas.\n\n' +
        'C’est une position confortable et elle a un nom en philosophie morale : ' +
        'on appelle cela décider d’un arbitrage dont on ne subit qu’un côté. ' +
        'Mes collègues qui défendent le cours avec le plus de vigueur ' +
        'sont exactement ceux que le texte ne vise pas. ' +
        'Cela ne les rend pas malhonnêtes. ' +
        'Cela rend leur assurance moins informative qu’ils ne le croient, ' +
        'et la mienne l’était tout autant.\n\n' +
        'J’enseigne toujours ce discours. J’ai changé trois choses, ' +
        'et aucune n’est celle qu’on m’attribue.\n\n' +
        'La séance est annoncée deux semaines à l’avance, avec le titre ' +
        'et une phrase sur ce qu’elle contient. Le texte est lu chez soi ' +
        'et non en salle, parce que lire en groupe une chose ' +
        'qui vous vise n’ajoute rien à la compréhension. ' +
        'Et j’ai supprimé la question d’examen qui demandait ' +
        'de reconstruire l’argument à la première personne. ' +
        'Cet exercice était le plus formateur du semestre ' +
        'et c’est celui auquel j’ai renoncé, ' +
        'ce qui devrait suffire à montrer que je n’ai pas cédé sur le facile.\n\n' +
        'Deux collègues m’ont écrit que ces trois changements ' +
        'ouvriraient la porte à tout le reste, et que dans cinq ans ' +
        'le texte aurait disparu du programme. ' +
        'Je ne peux pas leur promettre le contraire. ' +
        'Je peux dire que la pente est une prédiction et non un argument, ' +
        'et qu’elle a été opposée à chaque changement de programme ' +
        'depuis que les programmes existent.\n\n' +
        'On me dit que j’ai reculé. J’ai fait l’inverse : ' +
        'pendant onze ans, je n’avais jamais eu à justifier ce cours, ' +
        'et je le donnais donc sans savoir pourquoi.',
      items: [
        {
          q: 'Pendant combien de temps l’auteure a-t-elle enseigné ce discours sans le remettre en question ?',
          opts: ['Onze ans', 'Trois ans', 'Quatre jours', 'Deux semaines'],
          correct: 0,
          why: 'Onze ans ; les trois ans sont la date de la demande de retrait.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'Que demandait exactement l’étudiante dans les trois lignes ajoutées ?',
          opts: [
            'Rien : elle décrivait le temps qu’il lui avait fallu pour lire le texte',
            'Le retrait du discours du programme',
            'Un sujet de remplacement pour l’examen',
            'Un délai supplémentaire pour rendre son devoir',
          ],
          correct: 0,
          why: 'Elle ne demandait pas le retrait ; elle décrivait un coût que l’enseignante ignorait.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Que dit l’auteure des trois arguments qu’elle avait opposés au retrait ?',
          opts: [
            'Elle les maintient et les a vus mal utilisés, y compris par elle-même',
            'Elle les juge désormais faux',
            'Elle ne s’en souvient plus précisément',
            'Elle les a repris de ses collègues',
          ],
          correct: 0,
          why: 'Elle les croit exacts : ce qu’elle retire est l’usage qu’elle en faisait.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Pourquoi le texte est-il désormais lu chez soi ?',
          opts: [
            'Lire en groupe une chose qui vous vise n’ajoute rien à la compréhension',
            'La séance est trop courte pour une lecture intégrale',
            'Les étudiants le demandaient depuis trois ans',
            'La lecture à voix haute était mal comprise',
          ],
          correct: 0,
          why: 'C’est la raison qu’elle donne, à côté de l’annonce deux semaines à l’avance.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Que concède l’auteure à ceux qui défendent l’exigence intellectuelle ?',
          opts: [
            'Qu’une formation qui n’exige rien n’exige rien, et que le coût ne rend pas l’enseignement illégitime',
            'Que le discours devrait rester à l’examen',
            'Que les étudiants sont trop sensibles',
            'Que la lecture en salle était préférable',
          ],
          correct: 0,
          why: 'Elle refuse explicitement la conclusion : ce qu’elle se reproche est de n’avoir jamais mis le coût en face du bénéfice.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Pourquoi cite-t-elle la suppression de la question d’examen ?',
          opts: [
            'C’était l’exercice le plus formateur, donc la preuve qu’elle n’a pas cédé sur le facile',
            'Parce que les étudiants la réussissaient mal',
            'Parce qu’elle était devenue interdite',
            'Parce qu’elle prenait trop de temps à corriger',
          ],
          correct: 0,
          why: 'Elle l’oppose au reproche d’avoir reculé : c’est ce qu’elle a abandonné de plus précieux.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Combien de temps à l’avance la séance est-elle désormais annoncée ?',
          opts: ['Deux semaines', 'Quatre jours', 'Un semestre', 'Trois ans'],
          correct: 0,
          why: 'Deux semaines, avec le titre et une phrase sur le contenu.',
          band: 'b2',
          points: 0.5,
        },
      ],
    },
  ],
};

/* ═══ EXERCICE 3 — 7 points ═══════════════════════════════════════════════ */
//
// DELF-88 · does social media help or hollow out local news?
//
// NOT an ordinary MCQ. The four names ARE the options and must appear in the
// SAME ORDER on every item. Excluded from scatterKeys for that reason; keys are
// authored across the names directly.
//
// Weights: 1 · 1 · 1.5 · 1.5 · 1 · 1 = 7
// Keys: Yann, Zoé, Xavière, Wassim, Xavière, Zoé — Zoé 2, Xavière 2, the others 1.
//
// Four DISTINCT positions: Wassim reports what replaced the paper and refuses
// to call it worse, Xavière measures what disappeared and it is not the news,
// Yann argues the audience never existed as anyone imagined, and Zoé speaks
// from inside a council chamber about who is no longer in the room.

export const CE_EX3: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '003'),
  level: 'b2',
  label: 'Compréhension des écrits · Exercice 3',
  prompt:
    'Comprendre le point de vue de plusieurs locuteurs francophones.\n' +
    'Quatre personnes réagissent à la même question. ' +
    'Pour chaque affirmation, indiquez de qui il s’agit.',
  timingS: 1200,
  targetItemIds: uniq(ITEMS.reseauxSociaux),
  parts: [
    {
      label: 'Exercice 3 · les réseaux aident-ils ou vident-ils l’information locale ?',
      text:
        'LES RÉSEAUX AIDENT-ILS OU VIDENT-ILS L’INFORMATION LOCALE ?\n\n' +
        'WASSIM — Notre hebdomadaire a fermé et un groupe en ligne l’a remplacé, ' +
        'et je refuse de dire que c’est pire. Il compte quatre mille membres ' +
        'dans une commune de six mille habitants, ' +
        'soit beaucoup plus que les onze cents abonnés du journal. ' +
        'On y apprend une coupure d’eau en dix minutes, ' +
        'ce qui prenait une semaine. ' +
        'Ce n’est pas la même chose et ce n’est pas rien, ' +
        'et les gens qui regrettent le journal ne le lisaient pas. ' +
        'J’ai vérifié auprès de trois d’entre eux, par curiosité : ' +
        'aucun n’était abonné.\n\n' +
        'XAVIÈRE — J’ai compté, sur deux ans, ce qui a disparu, ' +
        'et la réponse m’a surprise. Les nouvelles sont toujours là, ' +
        'plus vite et plus nombreuses. Ce qui a disparu, ' +
        'ce sont les comptes rendus de séance : ' +
        'onze pages par an dans l’ancien journal, zéro aujourd’hui. ' +
        'Personne ne publie l’ennuyeux gratuitement. ' +
        'Le groupe informe très bien sur ce qui vient d’arriver ' +
        'et jamais sur ce qui a été décidé. ' +
        'La différence entre les deux est de six mois, ' +
        'et c’est dans ces six mois que tout se joue.\n\n' +
        'YANN — On raisonne comme si un public existait avant et n’existait plus. ' +
        'Onze cents abonnés sur six mille habitants, ' +
        'cela veut dire que quatre-vingts pour cent de la commune ' +
        'ne lisait déjà rien. Le journal ne parlait pas à la commune, ' +
        'il parlait à ceux qui s’y intéressaient. ' +
        'Ce public-là ne s’est pas dissous : il est passé ailleurs ' +
        'et il se plaint que l’ailleurs ne lui ressemble pas. ' +
        'On peut le regretter. On ne peut pas appeler cela ' +
        'la fin d’une information partagée qui n’a jamais existé.\n\n' +
        'ZOÉ — Je siège au conseil et je vais parler de la salle. ' +
        'Nous avions deux journalistes au fond, chaque mois, pendant quinze ans. ' +
        'Il n’y a plus personne. Ce que cela change ne se voit pas ' +
        'dans ce qui est publié, cela se voit dans ce qui est dit : ' +
        'nous parlons autrement quand quelqu’un écrit. ' +
        'On me répond que les séances sont filmées et en ligne. ' +
        'Elles le sont. Quatre-vingts personnes ont regardé la dernière, ' +
        'et une caméra ne pose pas de question à la fin. ' +
        'Un journaliste, en quinze ans, m’a appris plus sur mes propres dossiers ' +
        'en trois minutes de couloir que trois heures de séance filmée.',
      items: [
        {
          q: 'Qui affirme que le public du journal n’avait jamais été la commune entière ?',
          opts: ['Wassim', 'Xavière', 'Yann', 'Zoé'],
          correct: 2,
          why: 'Yann : onze cents abonnés sur six mille, donc quatre-vingts pour cent ne lisaient déjà rien.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Qui parle de ce qui change dans la façon dont les élus s’expriment ?',
          opts: ['Wassim', 'Xavière', 'Yann', 'Zoé'],
          correct: 3,
          why: 'Zoé : nous parlons autrement quand quelqu’un écrit, et il n’y a plus personne au fond.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Qui a mesuré ce qui a effectivement disparu et n’y a pas trouvé les nouvelles ?',
          opts: ['Wassim', 'Xavière', 'Yann', 'Zoé'],
          correct: 1,
          why: 'Xavière : les nouvelles sont plus nombreuses ; ce sont les onze pages de comptes rendus qui sont tombées à zéro.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Qui reproche à ceux qui regrettent le journal de ne pas l’avoir lu ?',
          opts: ['Wassim', 'Xavière', 'Yann', 'Zoé'],
          correct: 0,
          why: 'Wassim, en conclusion : quatre mille membres contre onze cents abonnés, et une coupure d’eau connue en dix minutes.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Qui explique pourquoi un certain type d’information n’est jamais repris gratuitement ?',
          opts: ['Wassim', 'Xavière', 'Yann', 'Zoé'],
          correct: 1,
          why: 'Xavière : personne ne publie l’ennuyeux gratuitement, et le groupe n’informe jamais sur ce qui a été décidé.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Qui répond à l’argument selon lequel la diffusion en ligne suffirait ?',
          opts: ['Wassim', 'Xavière', 'Yann', 'Zoé'],
          correct: 3,
          why: 'Zoé : les séances sont filmées, quatre-vingts personnes ont regardé, et une caméra ne pose pas de question.',
          band: 'b2',
          points: 1,
        },
      ],
    },
  ],
};
