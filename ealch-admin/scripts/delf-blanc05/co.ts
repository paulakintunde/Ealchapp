// DELF B2 blanc-05 — Compréhension de l'oral. 20 questions, 25 points, ~30 min.
//
// Three exercises worth 9, 9 and 7. The first two are long documents played
// TWICE; the third is three short documents played once each.
//
// ── What the second listening is for ────────────────────────────────────────
//
// STANDARD-delf-b2 §2.2: the FIRST pass yields the shape of the argument and
// the locate answers; the SECOND yields attribute and weigh, which need a known
// destination before the detail means anything. The two dearest questions in
// each exercise turn on holding a speaker's position apart from what they
// concede, which no keyword match reaches.
//
// ── durationS is MEASURED, and was absent until it could be ─────────────────
//
// The numbers below came off the rendered clips. Until the first render this
// file carried none, for the reason blanc-04 established: an authored estimate
// is indistinguishable from a measurement to every rule that reads the field,
// so writing one turns documentLengthViolations' word check OFF and hands back
// a green paper measured against a guess. The paper's own test fails while the
// field is missing, which is correct — an unmeasured paper is not finished.
//
// It earned its keep here. All EIGHT documents in this paper, listening and
// reading, were authored short and were caught before anything was rendered.
//
// The word bands are STANDARD-delf-b2 §3: 450-530 for exercise 1, 410-490 for
// exercise 2, 160-220 per short document. They are the duration bands divided
// by a 165 wpm reference, and the pack delivers 145 to 204, so they are a
// starting point and the render settles it. Two of these five documents needed
// a second render: exercise 2 at 456 words came back four seconds over its
// ceiling, and document 1 at 214 words came back seven over.
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
// DELF-15 · a citizens' jury given a real budget line.
// Weights: 0.5 · 1 · 1.5 · 1 · 2 · 2.5 · 0.5 = 9
// Families: locate, locate, infer, infer, attribute, weigh, locate.
//
// Neither speaker is against the jury. They disagree about what the jury's
// unanimity proves, which is not a question a candidate can answer by working
// out who is the democrat.

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
  targetItemIds: uniq(ITEMS.gouvernement),
  parts: [
    {
      label: 'Exercice 1 · ce que l’unanimité d’un jury citoyen démontre',
      playCount: 2,
      readWindowS: 60,
      durationS: 166,
      text:
        'UN JOURNALISTE : Quarante habitants tirés au sort ont réparti ' +
        'deux millions d’euros du budget de Sourdac pendant six week-ends. ' +
        'Leurs vingt-deux propositions ont été adoptées à l’unanimité ' +
        'et le conseil les a toutes retenues. Vous avez conçu le dispositif.\n' +
        'UNE POLITISTE : Je l’ai conçu et je commence par le chiffre ' +
        'qui me plaît le moins, parce que tout le monde cite les autres. ' +
        'Sur quarante tirés au sort, trente et un sont venus au premier week-end ' +
        'et vingt-quatre étaient encore là au sixième. ' +
        'Nous avons donc un jury de vingt-quatre ' +
        'présenté comme un jury de quarante.\n' +
        'UN ÉLU : Vingt-quatre personnes qui ont donné six week-ends, ' +
        'c’est déjà plus que ce que ma commission obtient de ses propres membres.\n' +
        'UNE POLITISTE : Je ne le conteste pas, et ce n’est pas mon point. ' +
        'Les seize qui sont partis ne sont pas partis au hasard. ' +
        'Onze travaillaient le samedi. ' +
        'Le tirage au sort a produit un échantillon représentatif ' +
        'et le calendrier l’a défait. ' +
        'Nous avions prévu quarante euros par journée. ' +
        'Quarante euros ne remplacent pas un samedi travaillé, ' +
        'ils remplacent une garde d’enfants.\n' +
        'UN JOURNALISTE : L’unanimité des vingt-deux propositions, alors ?\n' +
        'UNE POLITISTE : C’est le point sur lequel je voudrais qu’on soit prudent. ' +
        'Une unanimité peut signifier deux choses opposées. ' +
        'Qu’un désaccord a été travaillé jusqu’à disparaître, ' +
        'et c’est ce que nous espérions. ' +
        'Ou que les propositions clivantes ont été retirées avant le vote ' +
        'pour ne pas casser l’ambiance. Les deux produisent le même chiffre.\n' +
        'UN ÉLU : Et vous, laquelle croyez-vous ?\n' +
        'UNE POLITISTE : Un peu des deux, et je ne peux pas le prouver, ' +
        'parce que nous n’avons pas enregistré les propositions abandonnées. ' +
        'C’est notre erreur de conception et elle est réparable. ' +
        'Deux jurés m’ont dit avoir renoncé à défendre une idée ' +
        'parce qu’ils sentaient le groupe fatigué. ' +
        'Deux témoignages ne sont pas une donnée.\n' +
        'UN ÉLU : Je vous accorde ce point, et je vais même plus loin : ' +
        'nous devrions publier ce qui a été écarté et par qui. ' +
        'Ce que je n’accepte pas, c’est la conclusion qu’on en tire, ' +
        'selon laquelle le dispositif serait décoratif. ' +
        'Vingt-deux propositions sont entrées dans le budget. ' +
        'Ma commission en produit trois par an.\n' +
        'UNE POLITISTE : Sur ce point vous avez raison contre une partie de mon propre camp. ' +
        'Le taux d’adoption est réel et il est exceptionnel.\n' +
        'UN JOURNALISTE : Vous êtes donc d’accord.\n' +
        'UNE POLITISTE : Sur le résultat, oui. Pas sur ce qu’il autorise à dire. ' +
        'Le conseil a retenu vingt-deux propositions qui ne coûtaient rien ' +
        'à ses propres arbitrages. Aucune ne touchait la voirie, ' +
        'qui est le seul poste où il aurait fallu renoncer à quelque chose. ' +
        'Et je ne dis pas que le jury a évité la voirie par docilité : ' +
        'nous ne lui avons jamais montré ce budget-là. ' +
        'Nous avons ouvert deux millions sur les quarante que gère la commune. ' +
        'Je ne saurai que le jury a du pouvoir ' +
        'que le jour où il proposera quelque chose que le conseil regrette.',
      items: [
        {
          q: 'Combien d’argent le jury a-t-il réparti ?',
          opts: ['Deux millions d’euros', 'Vingt-deux millions', 'Quarante mille euros', 'Six millions'],
          correct: 0,
          why: 'Deux millions d’euros du budget de Sourdac, sur six week-ends.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'Combien de jurés étaient encore présents au sixième week-end ?',
          opts: ['Vingt-quatre', 'Quarante', 'Trente et un', 'Seize'],
          correct: 0,
          why: 'Quarante tirés au sort, trente et un au premier week-end, vingt-quatre au sixième.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Pourquoi la politiste juge-t-elle que les départs ne sont pas dus au hasard ?',
          opts: [
            'Onze des seize partants travaillaient le samedi',
            'Ils habitaient tous le même quartier',
            'Ils avaient été tirés au sort en dernier',
            'Ils s’opposaient aux propositions retenues',
          ],
          correct: 0,
          why: 'Le tirage a produit un échantillon représentatif et le calendrier l’a défait.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Pourquoi l’unanimité est-elle, selon elle, difficile à interpréter ?',
          opts: [
            'Un désaccord résolu et un désaccord évité donnent le même chiffre',
            'Les votes n’ont pas été comptés séparément',
            'Le conseil a voté avant le jury',
            'Les jurés ne connaissaient pas le budget',
          ],
          correct: 0,
          why: 'Travaillé jusqu’à disparaître, ou retiré avant le vote : les deux produisent l’unanimité.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Que concède l’élu à la politiste ?',
          opts: [
            'Qu’il faudrait publier les propositions écartées et par qui',
            'Que le jury n’était pas représentatif',
            'Que sa commission travaille mieux',
            'Que le tirage au sort devrait être abandonné',
          ],
          correct: 0,
          why: 'Il va plus loin qu’elle sur ce point, tout en refusant la conclusion que le dispositif serait décoratif.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'À quelle condition la politiste dira-t-elle que le jury a du pouvoir ?',
          opts: [
            'Quand il proposera quelque chose que le conseil regrette',
            'Quand il comptera de nouveau quarante membres',
            'Quand il siégera en semaine',
            'Quand ses propositions dépasseront deux millions',
          ],
          correct: 0,
          why: 'Les vingt-deux propositions ne coûtaient rien aux arbitrages du conseil et aucune ne touchait la voirie.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Combien de propositions la commission de l’élu produit-elle par an ?',
          opts: ['Trois', 'Vingt-deux', 'Onze', 'Six'],
          correct: 0,
          why: 'Trois par an, qu’il oppose aux vingt-deux du jury.',
          band: 'b2',
          points: 0.5,
        },
      ],
    },
  ],
};

/* ═══ EXERCICE 2 — 9 points ═══════════════════════════════════════════════ */
//
// DELF-10 · a publisher keeping a difficult book in print.
// Weights: 0.5 · 1 · 1 · 1.5 · 2 · 2.5 · 0.5 = 9
//
// The trap is that this sounds like a debate about money and is not. The
// publisher can afford it; the bookseller's objection is about what the shelf
// space is doing, which is a different argument and the one the dear questions
// test.

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
  targetItemIds: uniq(ITEMS.litterature),
  parts: [
    {
      label: 'Exercice 2 · garder un livre en librairie, et ce que la place fait',
      playCount: 2,
      readWindowS: 60,
      durationS: 180,
      text:
        'UNE JOURNALISTE : Les éditions Vaneau réimpriment chaque année ' +
        'un roman paru en 1978 qui se vend à cent quarante exemplaires. ' +
        'Vous en êtes l’éditeur. Pourquoi ?\n' +
        'UN ÉDITEUR : Parce que je peux. Le catalogue en porte trois cents autres ' +
        'qui se vendent bien, et cent quarante exemplaires coûtent ' +
        'moins cher que la moitié d’une campagne d’affichage. ' +
        'Je ne demande à personne de m’admirer pour cela. ' +
        'J’ajoute ce qu’on oublie : ce roman a été traduit deux fois, ' +
        'et les deux traducteurs sont venus le chercher chez moi.\n' +
        'UNE LIBRAIRE : Et je ne vous admire pas, mais ce n’est pas non plus ' +
        'ce que je vous reproche. Ce livre arrive chez moi ' +
        'et il occupe une place. Je n’ai pas trois cents autres titres ' +
        'qui compensent, j’ai deux mètres de rayon. ' +
        'Ce que vous appelez tenir un catalogue, moi je le paie en surface.\n' +
        'UN ÉDITEUR : Vous n’êtes pas obligée de le prendre.\n' +
        'UNE LIBRAIRE : Si, en pratique. Il arrive dans un office ' +
        'avec onze titres que je veux, et le retour me coûte du temps ' +
        'que je n’ai pas. Vous le savez très bien. ' +
        'J’ai compté l’an dernier : deux cent quarante retours, ' +
        'trois minutes chacun, soit douze heures que personne ne me paie.\n' +
        'UN ÉDITEUR : Là-dessus vous avez raison, et le système d’office ' +
        'est indéfendable tel qu’il fonctionne. ' +
        'Je le dis dans les réunions professionnelles depuis dix ans. ' +
        'Ce n’est pas ce livre-là qui pose ce problème.\n' +
        'UNE JOURNALISTE : Il y a donc deux questions.\n' +
        'UNE LIBRAIRE : Il y en a deux et on les mélange toujours. ' +
        'La première est de savoir si un éditeur doit garder un livre difficile. ' +
        'Ma réponse est oui, sans réserve, et je le dis devant mes clients. ' +
        'La seconde est de savoir qui porte le stock. ' +
        'Aujourd’hui c’est moi, et on me répond avec la première question.\n' +
        'UN ÉDITEUR : Que proposez-vous, concrètement ?\n' +
        'UNE LIBRAIRE : Que ces titres-là soient disponibles à la commande ' +
        'en quarante-huit heures et absents de l’office. ' +
        'Je les vendrai autant, peut-être davantage, ' +
        'parce qu’un client qui commande un livre revient le chercher ' +
        'et repart rarement avec un seul.\n' +
        'UN ÉDITEUR : C’est raisonnable et je vais y réfléchir sérieusement. ' +
        'Ma seule inquiétude est qu’un livre qu’on ne voit pas ' +
        'cesse d’exister, et que quarante-huit heures suffisent ' +
        'à décourager quelqu’un qui hésitait.\n' +
        'UNE LIBRAIRE : Cette inquiétude est fondée et c’est la vôtre à porter, ' +
        'pas la mienne. Vous avez trois cents titres pour l’absorber. ' +
        'J’ai deux mètres. Et voici ce qui m’agace vraiment : ' +
        'quand ce livre reste six mois sur ma table, ' +
        'c’est moi qui ai l’air de mal choisir mes titres, ' +
        'devant des clients qui ignorent comment il est arrivé là. ' +
        'Vous portez le risque financier, qui est faible. ' +
        'Je porte le reste.',
      items: [
        {
          q: 'Combien d’exemplaires du roman se vendent chaque année ?',
          opts: ['Cent quarante', 'Trois cents', 'Onze', 'Quarante-huit'],
          correct: 0,
          why: 'Cent quarante exemplaires par an, pour un roman paru en 1978.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'À quoi l’éditeur compare-t-il le coût de cette réimpression ?',
          opts: [
            'À moins de la moitié d’une campagne d’affichage',
            'Au chiffre d’affaires d’une librairie',
            'Au prix de deux mètres de rayon',
            'À la moitié de son catalogue',
          ],
          correct: 0,
          why: 'Il tire l’argument de son propre catalogue de trois cents titres qui se vendent.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Pourquoi la libraire dit-elle qu’elle ne peut pas refuser le livre ?',
          opts: [
            'Il arrive dans un office avec onze titres qu’elle veut, et le retour lui coûte du temps',
            'Son contrat lui interdit les retours',
            'L’éditeur refuse de reprendre les invendus',
            'Ses clients le réclament chaque semaine',
          ],
          correct: 0,
          why: 'Elle dit « si, en pratique » : l’office et le coût du retour, que l’éditeur reconnaît connaître.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Quelles sont les deux questions que la libraire dit qu’on mélange ?',
          opts: [
            'Faut-il garder un livre difficile, et qui en porte le stock',
            'Faut-il réimprimer, et à quel prix vendre',
            'Faut-il un office, et faut-il des retours',
            'Faut-il un catalogue large, et faut-il de la publicité',
          ],
          correct: 0,
          why: 'Elle répond oui sans réserve à la première, et dit qu’on lui oppose cette réponse quand elle pose la seconde.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Que concède l’éditeur à la libraire ?',
          opts: [
            'Que le système d’office est indéfendable tel qu’il fonctionne',
            'Que le roman devrait cesser d’être réimprimé',
            'Que les libraires devraient être payées à la surface',
            'Que cent quarante exemplaires ne justifient pas le tirage',
          ],
          correct: 0,
          why: 'Il dit le répéter en réunion professionnelle depuis dix ans, tout en refusant que ce livre-là en soit la cause.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Comment la libraire répond-elle à l’inquiétude finale de l’éditeur ?',
          opts: [
            'Elle la juge fondée et estime que c’est à lui de la porter',
            'Elle affirme qu’un livre invisible se vend mieux',
            'Elle propose de réduire le délai à vingt-quatre heures',
            'Elle refuse d’en discuter',
          ],
          correct: 0,
          why: 'Trois cents titres pour absorber l’inquiétude contre deux mètres de rayon : la question est qui peut la porter.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Que propose exactement la libraire ?',
          opts: [
            'Ces titres disponibles à la commande en quarante-huit heures et absents de l’office',
            'Une remise plus forte sur les titres anciens',
            'Un rayon financé par l’éditeur',
            'La fin des réimpressions annuelles',
          ],
          correct: 0,
          why: 'Elle ajoute qu’un client qui commande revient et repart rarement avec un seul livre.',
          band: 'b2',
          points: 0.5,
        },
      ],
    },
  ],
};

/* ═══ EXERCICE 3 — 7 points ═══════════════════════════════════════════════ */
//
// Three short documents, one play each, two questions apiece.
// Weights: 1 + 1.5 · 1 + 1.5 · 1 + 1 = 7
//
// The 15-second read window is the constraint. Options are short phrases,
// because two questions must be readable, holdable and answerable in it.

export const CO_EX3: ExamTask = {
  ...base,
  id: taskId('co_mcq', '003'),
  level: 'b2',
  label: 'Compréhension de l’oral · Exercice 3',
  prompt:
    'Vous allez écouter 1 fois trois documents courts.\n' +
    'Pour chaque document, lisez les questions, écoutez puis répondez.',
  timingS: 600,
  targetItemIds: uniq(ITEMS.economie, ITEMS.rpQuotidien, ITEMS.rechercheEmploi),
  parts: [
    {
      label: 'Document 1 · ce que faisait l’intermédiaire',
      playCount: 1,
      readWindowS: 15,
      durationS: 68,
      text:
        'UN PRODUCTEUR : Je vends en direct depuis quatre ans et je gagne mieux ma vie, ' +
        'donc je ne vais pas dire que c’était une erreur. ' +
        'Je voudrais dire autre chose, que personne ne dit dans les reportages. ' +
        'L’intermédiaire que j’ai supprimé faisait un travail ' +
        'que j’ai découvert en le faisant moi-même. ' +
        'Il absorbait les mauvaises semaines. ' +
        'Quand ma récolte tombait de moitié, il achetait ailleurs ' +
        'et mes clients ne le voyaient pas. ' +
        'Aujourd’hui, une mauvaise semaine est visible par les cent quatre-vingts familles ' +
        'qui attendent leur panier, et j’ai perdu onze abonnements en juin. ' +
        'Il prenait donc quarante pour cent et il portait un risque. ' +
        'Je gagne mieux ma vie parce que je porte ce risque à sa place, ' +
        'et non parce qu’il volait quelqu’un. ' +
        'Les années où je ne le porterai pas bien, ' +
        'la comparaison sera moins favorable, ' +
        'et il faudra le dire aussi. ' +
        'Je ne conseille donc à personne de faire comme moi ' +
        'sans avoir compté combien de semaines sa récolte peut manquer. ' +
        'Chez moi, la marge est de trois semaines.',
      items: [
        {
          q: 'Que faisait l’intermédiaire, selon ce producteur ?',
          opts: [
            'Il absorbait les mauvaises récoltes en achetant ailleurs',
            'Il fixait les prix de vente',
            'Il livrait les paniers aux familles',
            'Il finançait les plantations',
          ],
          correct: 0,
          why: 'Quand la récolte tombait de moitié, il achetait ailleurs et les clients ne le voyaient pas.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Comment explique-t-il son revenu plus élevé ?',
          opts: [
            'Il porte désormais lui-même un risque que l’autre portait',
            'Il vend à un prix plus élevé qu’avant',
            'Il a doublé sa surface cultivée',
            'Il a supprimé les frais de livraison',
          ],
          correct: 0,
          why: 'Les quarante pour cent payaient un risque, et il ajoute que la comparaison sera moins favorable les mauvaises années.',
          band: 'b2',
          points: 1.5,
        },
      ],
    },
    {
      label: 'Document 2 · la piste qui s’arrête où elle servirait',
      playCount: 1,
      readWindowS: 15,
      durationS: 61,
      text:
        'UNE CYCLISTE : La piste fait quatre kilomètres et elle est très bien faite, ' +
        'je le dis d’abord parce qu’on va croire que je me plains de tout. ' +
        'Elle s’arrête cent mètres avant le rond-point de la gare. ' +
        'Ces cent mètres sont exactement l’endroit où j’ai peur, ' +
        'et ils sont exactement l’endroit où il n’y a rien. ' +
        'On m’a expliqué que la parcelle appartient au département ' +
        'et que la piste est communale, ' +
        'ce qui est vrai et ce qui n’est pas une réponse. ' +
        'Ce que je retiens surtout, c’est le compteur. ' +
        'La ville a installé un compteur de vélos au kilomètre deux ' +
        'et il affiche de très bons chiffres, ' +
        'qui servent à justifier la prochaine piste ailleurs. ' +
        'Personne ne compte les gens qui renoncent au rond-point, ' +
        'parce qu’ils ne sont jamais passés devant le compteur. ' +
        'Une piste inachevée mesure donc ceux qu’elle a convaincus ' +
        'et jamais ceux qu’elle a perdus. ' +
        'J’ai proposé en réunion qu’on installe un second compteur ' +
        'de l’autre côté du rond-point, là où la piste devrait reprendre. ' +
        'On m’a répondu qu’il n’y avait pas de piste à cet endroit ' +
        'et donc rien à compter, ce qui est exactement ma phrase ' +
        'prononcée par quelqu’un qui croit me contredire.',
      items: [
        {
          q: 'Où la piste cyclable s’arrête-t-elle ?',
          opts: [
            'Cent mètres avant le rond-point de la gare',
            'Au kilomètre deux',
            'À la limite du département',
            'À l’entrée de la ville',
          ],
          correct: 0,
          why: 'Quatre kilomètres, puis un arrêt cent mètres avant le rond-point.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Quel défaut du compteur relève-t-elle ?',
          opts: [
            'Il ne peut pas compter ceux qui renoncent avant d’y arriver',
            'Il est installé trop près du rond-point',
            'Il compte deux fois les mêmes cyclistes',
            'Il est en panne depuis juin',
          ],
          correct: 0,
          why: 'Il est au kilomètre deux : ceux qui renoncent au rond-point ne sont jamais passés devant lui.',
          band: 'b2',
          points: 1.5,
        },
      ],
    },
    {
      label: 'Document 3 · le diplôme qu’on exige et qu’on ne vérifie pas',
      playCount: 1,
      readWindowS: 15,
      durationS: 71,
      text:
        'UNE FORMATRICE : Nous délivrons une certification que quatre-vingts pour cent ' +
        'des offres du secteur exigent, et j’ai fait un test cette année ' +
        'que je vais raconter parce qu’il me gêne. ' +
        'J’ai appelé trente-deux employeurs qui l’exigent ' +
        'et je leur ai demandé combien de fois ils avaient vérifié ' +
        'qu’un candidat la possédait réellement. ' +
        'Vingt-neuf ne l’avaient jamais vérifiée. ' +
        'Deux l’avaient fait une fois. Un la vérifie systématiquement, ' +
        'et c’est un hôpital, où la loi l’y oblige. ' +
        'Je ne conclus pas que la certification ne sert à rien. ' +
        'Nos diplômés sont mieux payés et je vois ce qu’ils apprennent. ' +
        'Ce que je conclus, c’est que ce n’est pas le diplôme qui est vérifié, ' +
        'c’est la ligne sur le CV. ' +
        'Cela veut dire que nous vendons deux choses en même temps ' +
        'et qu’une seule est un enseignement. ' +
        'Nous devrions au moins savoir laquelle nos candidats viennent acheter. ' +
        'Ce que je crains, si je suis honnête sur mes propres intérêts, ' +
        'c’est la réponse. Si nos candidats viennent acheter la ligne du CV, ' +
        'alors la moitié de notre programme est une exigence que nous nous imposons ' +
        'et que le marché ne nous impose pas. ' +
        'Je continue de croire qu’elle vaut la peine. ' +
        'Je préférerais le croire en le sachant.',
      items: [
        {
          q: 'Combien d’employeurs n’avaient jamais vérifié la certification ?',
          opts: ['Vingt-neuf sur trente-deux', 'Deux sur trente-deux', 'Un sur trente-deux', 'Trente-deux sur trente-deux'],
          correct: 0,
          why: 'Vingt-neuf jamais, deux une fois, et un systématiquement parce que la loi l’y oblige.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Quelle conclusion la formatrice refuse-t-elle de tirer ?',
          opts: [
            'Que la certification ne sert à rien',
            'Que les employeurs mentent dans leurs offres',
            'Que les diplômés sont mal payés',
            'Que la loi devrait être étendue',
          ],
          correct: 0,
          why: 'Elle l’écarte explicitement : ses diplômés sont mieux payés et elle voit ce qu’ils apprennent.',
          band: 'b2',
          points: 1,
        },
      ],
    },
  ],
};
