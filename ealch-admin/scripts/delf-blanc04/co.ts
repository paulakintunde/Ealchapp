// DELF B2 blanc-04 — Compréhension de l'oral. 20 questions, 25 points, ~30 min.
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
// ── Sized off the pack's own measurements, not a target rate ────────────────
//
// STANDARD-delf-b2 §3 bands the two long exercises SEPARATELY: exercise 1 runs
// 165-195s on 450-530 words, exercise 2 runs 150-180s on 410-490. Those word
// figures assume ~165 wpm, and the pack has never once delivered 165.
//
// What the six long documents already rendered actually did:
//
//   exercise 1   490w → 192s   474w → 176s   452w → 184s   (147-162 wpm)
//   exercise 2   462w → 161s   399w → 160s   459w → 155s   (150-178 wpm)
//
// Two things follow. Exercise 1 sits near the TOP of its band at every word
// count tried, so this one is authored at the low end of the word band rather
// than the middle — blanc-03's 481 words came back at 197s and had to be
// trimmed and re-rendered. Exercise 2 lands 155-161s whatever the words do,
// which is the lower half of its band, so there is room to write long.
//
// Turn count is the other lever and it is invisible in a word count: gapsFor
// inserts 700ms between speakers, so a seventeen-turn document carries eleven
// seconds of silence. Exercise 1 below is written in THIRTEEN turns for that
// reason, which buys back three seconds against blanc-03.
//
// -- durationS is MEASURED, and was absent until it could be ------------------
//
// The numbers below came off the rendered clips. Until the first render this
// file carried NO durationS at all, because an authored estimate is
// indistinguishable from a measurement to every rule that reads the field:
// writing one turns documentLengthViolations' word check OFF and hands back a
// green paper measured against a guess.
//
// That is not a refinement. Every long document here was authored short -- 445
// and 326 words against floors of 450 and 410, and two of the three short
// documents at 144 and 149 against a floor of 160 -- and the estimates the
// first draft carried were all inside their duration bands. A paper that
// estimates its own lengths cannot be told it is wrong about them.
//
// -- What the first render then found anyway ---------------------------------
//
// Three of the five documents came back outside their bands with every word
// count inside its own:
//
//   exercise 1   476w -> 196s   (145.7 wpm)  one second over its ceiling
//   document 1   170w ->  52s   (196.2 wpm)  eight seconds under its floor
//   document 2   205w ->  82s   (150.0 wpm)  two seconds over its ceiling
//
// Look at those three rates. A single-voice short document in this pack has
// rendered anywhere between 141 and 204 wpm, and the 60-80s window needs 204
// words at the top of that range and 187 at the bottom. There is no word count
// that is safe across it -- the intervals do not overlap. A corrective render
// for the short documents is not a mistake to be avoided; it is a step.
//
// The long documents are better behaved. Exercise 1 has now rendered at 153.1,
// 161.6, 147.4 and 145.1 wpm across four papers, which puts its safe window at
// 450-473 words, and the standard's own floor is 450. Author at the BOTTOM of
// the word band for exercise 1, never the middle.
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
// DELF-08 · a river given legal standing, and who is entitled to speak for it.
// Weights: 0.5 · 1 · 1.5 · 1 · 2 · 2.5 · 0.5 = 9
// Families: locate, locate, infer, infer, attribute, weigh, locate.
//
// The disagreement is NOT "is the river worth protecting". Both guests want it
// protected. They disagree about whether a legal person needs a guardian who
// can be wrong, which is a question a candidate cannot answer by working out
// who is the environmentalist.

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
  targetItemIds: uniq(ITEMS.ecologie),
  parts: [
    {
      label: 'Exercice 1 · qui parle au nom d’une rivière',
      playCount: 2,
      readWindowS: 60,
      durationS: 191,
      text:
        'UNE JOURNALISTE : La Vardonne est depuis mars la première rivière du pays ' +
        'à posséder une personnalité juridique. Elle peut être représentée en justice. ' +
        'Vous avez porté ce texte pendant six ans. Qu’est-ce qui change, concrètement ?\n' +
        'UNE JURISTE : Ce qui change tient en une phrase. Avant, pour attaquer un rejet, ' +
        'il fallait démontrer un préjudice subi par quelqu’un. ' +
        'Un agriculteur, une commune, un pêcheur. La rivière elle-même n’existait pas ' +
        'devant un tribunal. Maintenant, le dommage causé à la Vardonne ' +
        'est un dommage dont on peut demander réparation sans passer par une victime humaine.\n' +
        'UN HYDROLOGUE : Et je voudrais poser tout de suite la question qui me préoccupe, ' +
        'parce qu’elle ne porte pas sur le principe. Le texte crée un collège de six gardiens : ' +
        'deux nommés par la région, deux par les communes riveraines, ' +
        'deux par les associations. Ce collège parle au nom de la rivière. ' +
        'Sur quoi s’appuie-t-il pour savoir ce qu’elle veut ?\n' +
        'UNE JURISTE : Sur des données. Le débit, la température, ' +
        'la présence de certaines espèces, la qualité des frayères. ' +
        'Ce sont les indicateurs que la région publie depuis vingt ans, ' +
        'et que personne n’a contestés tant qu’ils ne servaient à rien.\n' +
        'UN HYDROLOGUE : Ce sont mes données, et elles ne disent pas ce que vous leur faites dire. ' +
        'Elles décrivent un état. Elles ne classent pas deux états. ' +
        'Si l’on prélève moins l’été, la truite va mieux et l’écrevisse va moins bien. ' +
        'Aucune mesure ne tranche entre les deux. C’est un arbitrage, ' +
        'et un arbitrage se signe.\n' +
        'UNE JOURNALISTE : Vous dites donc que le collège décide en son nom propre.\n' +
        'UN HYDROLOGUE : Je dis qu’il décidera, et que le texte lui offre de dire ' +
        'que la rivière a décidé. C’est cela qui me gêne, et pas la protection.\n' +
        'UNE JURISTE : Je vous accorde le point sans réserve. ' +
        'La formule « au nom de la rivière » est une fiction, comme toute représentation. ' +
        'Un avocat parle au nom d’un client qui ne l’a pas rédigé. ' +
        'Ce que la fiction produit ici, c’est que quelqu’un doit motiver le choix par écrit ' +
        'et le défendre devant un juge. Avant, personne n’avait à le motiver, ' +
        'parce que personne n’avait qualité pour le contester.\n' +
        'UN HYDROLOGUE : Cela, c’est vrai, et c’est le meilleur argument que vous ayez.\n' +
        'UNE JOURNALISTE : Un désaccord demeure, tout de même.\n' +
        'UN HYDROLOGUE : Sur la composition. Deux gardiens sur six viennent des communes ' +
        'riveraines, qui sont aussi les principaux préleveurs. ' +
        'Je ne dis pas qu’ils voteront mal. Je dis qu’ils voteront, ' +
        'et que la rivière parlera alors avec la voix de ceux qui la prélèvent.\n' +
        'UNE JURISTE : La réponse est le juge. Un gardien qui vote contre l’intérêt ' +
        'qu’il représente peut être révoqué à la demande d’un autre collège.\n' +
        'UN HYDROLOGUE : Une révocation après coup ne remet pas l’eau dans le lit. ' +
        'J’aurais préféré que les préleveurs soient entendus et ne votent pas. ' +
        'Deux lignes du texte, et la seule chose que je lui reproche.',
      items: [
        {
          q: 'Depuis quand la Vardonne possède-t-elle une personnalité juridique ?',
          opts: ['Depuis mars', 'Depuis six ans', 'Depuis janvier', 'Depuis l’été dernier'],
          correct: 0,
          why: 'Depuis mars. Les six ans sont la durée du travail de la juriste, pas celle du texte.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'Comment le collège de gardiens est-il composé ?',
          opts: [
            'Deux par la région, deux par les communes riveraines, deux par les associations',
            'Six membres nommés par la région',
            'Trois juristes et trois hydrologues',
            'Un représentant par commune riveraine',
          ],
          correct: 0,
          why: 'Six membres, en trois paires : région, communes riveraines, associations.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Selon la juriste, quel était l’obstacle principal avant ce texte ?',
          opts: [
            'Il fallait qu’une personne prouve avoir subi un préjudice',
            'Les amendes étaient trop faibles',
            'Les données sur la rivière manquaient',
            'Les communes s’opposaient aux poursuites',
          ],
          correct: 0,
          why: 'La rivière n’existait pas devant un tribunal : il fallait passer par un agriculteur, une commune ou un pêcheur.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Pourquoi l’hydrologue affirme-t-il que les données ne suffisent pas ?',
          opts: [
            'Elles décrivent un état sans permettre de choisir entre deux',
            'Elles sont trop anciennes pour être utilisées',
            'Elles ne couvrent pas toute la rivière',
            'Elles sont contestées par les associations',
          ],
          correct: 0,
          why: 'Prélever moins l’été profite à la truite et nuit à l’écrevisse ; aucune mesure ne tranche entre les deux.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Que concède l’hydrologue à la juriste ?',
          opts: [
            'Que la représentation oblige désormais quelqu’un à motiver son choix par écrit',
            'Que les communes riveraines voteront de bonne foi',
            'Que ses propres données sont incomplètes',
            'Que la personnalité juridique était le seul moyen d’agir',
          ],
          correct: 0,
          why: 'Il appelle cela le meilleur argument de la juriste : avant, personne n’avait à motiver un arbitrage, faute de qualité pour le contester.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Sur quoi porte exactement le désaccord qui subsiste à la fin ?',
          opts: [
            'Sur le droit de vote des communes riveraines au sein du collège',
            'Sur l’existence même d’une personnalité juridique',
            'Sur le rôle du juge en cas de faute d’un gardien',
            'Sur la fiabilité des mesures de débit et de température',
          ],
          correct: 0,
          why: 'Il veut que les préleveurs soient entendus sans voter : deux lignes du texte, et la seule chose qu’il lui reproche.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Que peut-il arriver à un gardien qui vote contre l’intérêt qu’il représente ?',
          opts: [
            'Il peut être révoqué à la demande d’un autre collège',
            'Il perd sa voix pour un an',
            'Il doit rembourser les frais de justice',
            'Il est remplacé par un juge',
          ],
          correct: 0,
          why: 'C’est la réponse de la juriste : la révocation, demandée par un autre collège.',
          band: 'b2',
          points: 0.5,
        },
      ],
    },
  ],
};

/* ═══ EXERCICE 2 — 9 points ═══════════════════════════════════════════════ */
//
// DELF-02 · night-time noise mediators, and whether mediation displaces
// enforcement or reaches what enforcement never did.
// Weights: 0.5 · 1 · 1 · 1.5 · 2 · 2.5 · 0.5 = 9
// Families: locate, locate, infer, infer, attribute, weigh, locate.
//
// The trap is that the figures LOOK like the argument. Complaints fell by a
// third and the councillor treats that as the result; the mediator says the
// same figure is what she would expect from people who stopped reporting.

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
  targetItemIds: uniq(ITEMS.voisinage),
  parts: [
    {
      label: 'Exercice 2 · ce qu’une baisse des plaintes ne prouve pas',
      playCount: 2,
      readWindowS: 60,
      durationS: 154,
      text:
        'UN JOURNALISTE : Trois quartiers de Lisange emploient depuis deux ans ' +
        'des médiateurs de nuit. Ils circulent de vingt-deux heures à trois heures, ' +
        'et ils n’ont aucun pouvoir de sanction. La ville publie ce mois-ci ' +
        'une baisse des plaintes de trente-quatre pour cent.\n' +
        'UN ÉLU : C’est le chiffre que nous attendions et il est même supérieur à nos prévisions. ' +
        'Trente-quatre pour cent en deux ans, sans une amende de plus, ' +
        'et pour un coût inférieur à ce que nous dépensions en interventions de nuit. ' +
        'Je rappelle d’où nous partons. Avant le dispositif, une plainte de nuit ' +
        'déclenchait un déplacement de police qui arrivait en moyenne cinquante minutes plus tard, ' +
        'c’est-à-dire après. Nous payions donc pour constater.\n' +
        'UNE MÉDIATRICE : Je travaille dans l’un des trois quartiers et je vais être prudente ' +
        'sur ce chiffre, parce que c’est le mien. Une plainte n’est pas une nuisance. ' +
        'C’est une nuisance suivie d’un appel. Nous passons nos nuits à dire aux gens ' +
        'que nous sommes là et qu’ils peuvent nous parler d’abord. ' +
        'Une partie de la baisse, c’est exactement cela qui fonctionne. ' +
        'Une autre partie, c’est que des gens qui appelaient ne le font plus.\n' +
        'UN ÉLU : Et ils ne le font plus parce que le problème a cessé.\n' +
        'UNE MÉDIATRICE : Pour certains, oui. Pour d’autres, parce qu’ils nous parlent à nous, ' +
        'et nous ne comptons nulle part. Nous ne remplissons pas de formulaire. ' +
        'L’an dernier, j’ai été appelée deux cent dix fois par des habitants ' +
        'qui avaient mon numéro. Aucune de ces deux cent dix soirées ' +
        'n’apparaît dans votre trente-quatre pour cent, ' +
        'ni du bon côté ni du mauvais. Elles n’apparaissent nulle part.\n' +
        'UN JOURNALISTE : Vous demandez donc à être comptés.\n' +
        'UNE MÉDIATRICE : Je demande à être comptée séparément. ' +
        'Si l’on additionne nos passages aux plaintes, on obtient une hausse ' +
        'et tout le monde conclura que le dispositif a échoué. ' +
        'Ce sont deux mesures différentes et il faut deux lignes.\n' +
        'UN ÉLU : Sur ce point vous avez raison, et c’est une correction que je porterai. ' +
        'Ce que je maintiens, c’est le sens général. Trois quartiers sur trois baissent. ' +
        'Ce n’est plus un hasard.\n' +
        'UNE MÉDIATRICE : Je ne conteste pas le sens général. Je conteste qu’on s’arrête là. ' +
        'Le quartier des Ormes baisse de cinquante et un pour cent ' +
        'et le quartier de la Fonderie de onze. ' +
        'La moyenne de trente-quatre décrit un quartier qui n’existe pas. ' +
        'Et ce n’est pas une remarque de statisticienne. ' +
        'Un habitant de la Fonderie qui lit trente-quatre pour cent dans le journal ' +
        'apprend que son quartier va bien alors qu’il ne dort pas, ' +
        'et la prochaine fois il n’appellera ni la police ni moi.\n' +
        'UN ÉLU : La Fonderie a deux fois moins de médiateurs par habitant.\n' +
        'UNE MÉDIATRICE : C’est une explication, et c’est celle que je crois. ' +
        'Dites-la. Ne dites pas trente-quatre.',
      items: [
        {
          q: 'À quelles heures les médiateurs circulent-ils ?',
          opts: ['De vingt-deux heures à trois heures', 'De vingt heures à minuit', 'De minuit à cinq heures', 'De dix-huit heures à une heure'],
          correct: 0,
          why: 'De vingt-deux heures à trois heures, sans pouvoir de sanction.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'De combien les plaintes ont-elles baissé selon la ville ?',
          opts: ['De trente-quatre pour cent', 'De cinquante et un pour cent', 'De onze pour cent', 'De deux pour cent'],
          correct: 0,
          why: 'Trente-quatre pour cent est le chiffre publié ; cinquante et un et onze sont deux quartiers pris séparément.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Selon la médiatrice, pourquoi une plainte n’est-elle pas une nuisance ?',
          opts: [
            'Une plainte est une nuisance suivie d’un appel',
            'Une plainte est enregistrée plusieurs fois',
            'Les nuisances sont mesurées par des capteurs',
            'Les plaintes concernent surtout la journée',
          ],
          correct: 0,
          why: 'Elle le dit textuellement : c’est une nuisance suivie d’un appel, et l’appel peut disparaître sans la nuisance.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Que demande précisément la médiatrice au sujet de ses interventions ?',
          opts: [
            'Qu’elles soient comptées sur une ligne distincte des plaintes',
            'Qu’elles soient ajoutées au total des plaintes',
            'Qu’elles donnent lieu à des amendes',
            'Qu’elles soient publiées chaque semaine',
          ],
          correct: 0,
          why: 'Additionner produirait une hausse et ferait conclure à un échec : deux mesures différentes, deux lignes.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Que concède l’élu à la médiatrice ?',
          opts: [
            'Que les passages des médiateurs doivent être comptés séparément',
            'Que le dispositif coûte plus cher que prévu',
            'Que la baisse est due au hasard',
            'Que la Fonderie devrait perdre ses médiateurs',
          ],
          correct: 0,
          why: 'Il annonce porter cette correction, tout en maintenant le sens général de la baisse.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Pourquoi la médiatrice reproche-t-elle à l’élu le chiffre de trente-quatre pour cent ?',
          opts: [
            'Il moyenne deux quartiers très différents et masque l’explication qu’elle croit vraie',
            'Il est calculé sur une seule année',
            'Il exclut le quartier des Ormes',
            'Il a été publié avant la fin de l’expérience',
          ],
          correct: 0,
          why: 'Cinquante et un contre onze : la moyenne décrit un quartier qui n’existe pas, et cache l’écart de médiateurs par habitant.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Quelle différence l’élu relève-t-il entre les Ormes et la Fonderie ?',
          opts: [
            'La Fonderie a deux fois moins de médiateurs par habitant',
            'La Fonderie est deux fois plus peuplée',
            'Les Ormes ont commencé un an plus tôt',
            'Les Ormes reçoivent des amendes en plus',
          ],
          correct: 0,
          why: 'C’est son explication de l’écart, et la médiatrice dit la croire.',
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
// because two questions must be readable, holdable and answerable in it, and a
// seventy-second document is a distractor nobody has time to dismiss.

export const CO_EX3: ExamTask = {
  ...base,
  id: taskId('co_mcq', '003'),
  level: 'b2',
  label: 'Compréhension de l’oral · Exercice 3',
  prompt:
    'Vous allez écouter 1 fois trois documents courts.\n' +
    'Pour chaque document, lisez les questions, écoutez puis répondez.',
  timingS: 600,
  targetItemIds: uniq(ITEMS.decouvertes, ITEMS.rpFamille, ITEMS.collegues),
  parts: [
    {
      label: 'Document 1 · le mot qu’elle a renoncé à traduire',
      playCount: 1,
      readWindowS: 15,
      durationS: 68,
      text:
        'UNE TRADUCTRICE : On me demande souvent quel est le mot le plus difficile, ' +
        'et on attend une curiosité. La vérité est plus ennuyeuse et plus intéressante. ' +
        'Le mot qui m’a coûté six mois, dans le roman que je viens de rendre, ' +
        'désigne la dette qu’on contracte envers quelqu’un qui vous a rendu service ' +
        'sans que vous l’ayez demandé. Le français a des mots pour la dette, ' +
        'et il a des mots pour la reconnaissance, ' +
        'et aucun des deux ne dit qu’on n’a rien demandé. ' +
        'J’ai essayé six formules. Toutes ajoutaient une explication ' +
        'que le personnage ne donne pas, parce que dans sa langue il n’a pas à la donner. ' +
        'J’ai fini par ne pas traduire le mot. Je l’ai laissé, en italique, ' +
        'et j’ai mis une note de trois lignes à la fin du livre. ' +
        'Mon éditeur a détesté. Il dit qu’une note est un aveu d’échec ' +
        'et il a raison, à ceci près qu’une périphrase de douze mots ' +
        'est le même aveu écrit plus discrètement. ' +
        'Je préfère l’aveu qui se voit. ' +
        'Il m’a opposé un meilleur argument que le sien : ' +
        'une note interrompt la lecture, et un roman qui s’interrompt ' +
        'perd ce qu’aucune exactitude ne rembourse. ' +
        'J’ai mis la note à la fin du volume, ' +
        'et le lecteur qui la trouve a déjà terminé le livre sans elle.',
      items: [
        {
          q: 'Que désigne le mot dont parle la traductrice ?',
          opts: [
            'Une dette envers quelqu’un dont on n’a pas demandé le service',
            'Un remerciement adressé à un inconnu',
            'Une dette financière ancienne',
            'Un service qu’on refuse poliment',
          ],
          correct: 0,
          why: 'Le français a la dette et il a la reconnaissance ; aucun des deux ne porte le « sans l’avoir demandé ».',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Comment justifie-t-elle sa solution face à son éditeur ?',
          opts: [
            'Une périphrase serait le même aveu d’échec, mais dissimulé',
            'La note allonge très peu le livre',
            'Les lecteurs préfèrent les mots étrangers',
            'L’auteur du roman le lui a demandé',
          ],
          correct: 0,
          why: 'Elle lui donne raison sur la note, puis retourne l’argument : douze mots de périphrase avouent la même chose plus discrètement.',
          band: 'b2',
          points: 1.5,
        },
      ],
    },
    {
      label: 'Document 2 · le voyage annulé et ce qu’on a proposé à la place',
      playCount: 1,
      readWindowS: 15,
      durationS: 71,
      text:
        'UN PÈRE : Le voyage était prévu depuis septembre et il a été annulé en février, ' +
        'pour une raison que je comprends : le devis avait augmenté de cent quarante euros ' +
        'par élève et huit familles sur trente avaient dit qu’elles ne suivraient pas. ' +
        'L’établissement a proposé une sortie de trois jours à la place, ' +
        'à cinquante kilomètres, pour un tiers du prix. ' +
        'Ce que je reproche n’est pas l’annulation, c’est le moment. ' +
        'Nous avions déjà versé deux acomptes, et surtout, ' +
        'les huit familles ont été identifiées en réunion. ' +
        'Pas nommées, mais comptées devant tout le monde, ' +
        'et dans une classe de trente, huit familles qui se taisent, ' +
        'cela se remarque. Ma fille est rentrée en me demandant ' +
        'si nous étions des huit. Nous ne l’étions pas. ' +
        'La question, elle, restera. ' +
        'On aurait pu recueillir les réponses par écrit en une soirée, ' +
        'et personne n’aurait rien su. ' +
        'La sortie de trois jours, je la trouve très bien, d’ailleurs. ' +
        'Ma fille y va et elle en parle depuis quinze jours. ' +
        'Ce n’est donc pas le remplacement que je critique. ' +
        'C’est la soirée de février.',
      items: [
        {
          q: 'Pourquoi le voyage a-t-il été annulé ?',
          opts: [
            'Huit familles sur trente ne pouvaient pas suivre la hausse du devis',
            'L’établissement a perdu son autorisation',
            'La destination est devenue inaccessible',
            'Les acomptes n’avaient pas été versés',
          ],
          correct: 0,
          why: 'Cent quarante euros de plus par élève, et huit familles sur trente qui disent ne pas suivre.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Que reproche exactement ce père à l’établissement ?',
          opts: [
            'D’avoir recueilli les réponses en réunion plutôt que par écrit',
            'D’avoir choisi une sortie trop courte',
            'De ne pas avoir remboursé les acomptes',
            'D’avoir décidé sans consulter les familles',
          ],
          correct: 0,
          why: 'Il dit accepter l’annulation ; ce qu’il vise est le moment et la méthode, huit familles comptées devant tout le monde.',
          band: 'b2',
          points: 1.5,
        },
      ],
    },
    {
      label: 'Document 3 · le bureau sans horloges',
      playCount: 1,
      readWindowS: 15,
      durationS: 60,
      text:
        'UNE RESPONSABLE : Nous avons retiré les horloges des trois plateaux ' +
        'en janvier dernier, et je dois dire d’emblée que ce n’était pas mon idée. ' +
        'Elle vient d’une équipe qui trouvait que la pendule murale ' +
        'faisait de chaque réunion une course. ' +
        'Six mois plus tard, deux choses se sont produites et une seule était prévue. ' +
        'Les réunions se sont raccourcies, de sept minutes en moyenne, ' +
        'ce qui est exactement ce qu’on espérait. ' +
        'Et les gens sont partis plus tard le soir, de onze minutes en moyenne, ' +
        'ce que personne n’avait envisagé. ' +
        'Chacun a son téléphone, donc l’heure n’a jamais disparu. ' +
        'Ce qui a disparu, c’est l’heure que tout le monde voyait en même temps. ' +
        'Regarder son téléphone en réunion, cela se remarque. ' +
        'Nous avons remis une horloge par plateau, ' +
        'et nous les avons laissées hors des salles de réunion. ' +
        'Ce n’est pas un compromis, c’est ce que l’équipe voulait dire au départ. ' +
        'On m’a demandé si les onze minutes justifiaient d’en rester là. ' +
        'Je réponds que je n’en sais rien, et que c’est le problème : ' +
        'nous avons mesuré une durée de réunion parce qu’elle était facile à mesurer, ' +
        'et personne ne mesurait l’heure de départ avant janvier. ' +
        'Nous comparons donc onze minutes à rien du tout.',
      items: [
        {
          q: 'Quel effet n’avait pas été prévu ?',
          opts: [
            'Les employés sont partis plus tard le soir',
            'Les réunions se sont raccourcies',
            'Les téléphones ont été interdits',
            'Les équipes ont demandé plus de salles',
          ],
          correct: 0,
          why: 'Onze minutes de plus le soir, contre sept minutes de réunion gagnées : une seule des deux était espérée.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Comment explique-t-elle ce qui a réellement changé ?',
          opts: [
            'L’heure partagée a disparu, pas l’heure',
            'Les téléphones ont remplacé les horloges',
            'Les réunions ont été déplacées le matin',
            'Le bâtiment a changé d’horaires',
          ],
          correct: 0,
          why: 'Chacun garde son téléphone ; ce qui manque est l’heure que tout le monde voyait en même temps, et la regarder se remarque.',
          band: 'b2',
          points: 1,
        },
      ],
    },
  ],
};
