// DELF B2 blanc-03 — Compréhension de l'oral. 20 questions, 25 points, ~30 min.
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
// ── The lengths are SIZED, not guessed ──────────────────────────────────────
//
// blanc-02 shipped three short documents at 38, 43 and 44 seconds against a
// 60-to-80-second suit, because the estimate assumed ~150 words a minute and
// the render came in far faster. Measuring all ten rendered documents across
// blanc-01 and blanc-02 gives 3240 words over 1127 seconds: 172.5 wpm pooled,
// ranging 143 to 191 by voice and register.
//
// So the targets here were ~485 words for a long document and ~190 for a short
// one, meant to land mid-band at the pooled rate.
//
// ── And the pooled rate was the wrong number to size against ────────────────
//
// The durationS values below are MEASURED off the rendered clips. Exercise 1
// was authored at 481 words, squarely inside the standard's 450-530 band, and
// came back at 197 seconds — two over exercise 1's ceiling, because THIS
// document's voices delivered 142 wpm against a pooled mean of 172.5. Sizing to
// a mean is sizing to a coin flip when the band is 30 seconds wide and the
// rate varies by a quarter.
//
// It was trimmed to 452 words and re-rendered at 184s, mid-band. Two things
// that cost a paid render each to learn:
//
//   - The turn count is a fixed tax. gapsFor inserts 700ms between speakers, so
//     this seventeen-turn document carries 11 seconds of silence no word count
//     predicts. A document with the same words in ten turns runs 5 seconds
//     shorter.
//   - The renders are not identical run to run. The same text came back at
//     141.9 wpm once and 147.4 wpm after a fourteen-word trim removed thirteen
//     seconds — three times what the words alone account for. Aim for the
//     middle of a band, never its edge.
//
// STANDARD-delf-b2 §3 bands exercises 1 and 2 SEPARATELY — 165-195s and
// 150-180s — and documentLengthViolations enforces each against its own,
// having previously used the union of the two, which is looser than either.
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
// DELF-04 · a museum returning objects, and what "provenance" is asked to settle.
// Weights: 0.5 · 1 · 1.5 · 1 · 2 · 2.5 · 0.5 = 9
// Families: locate, locate, infer, infer, attribute, weigh, locate.
//
// The disagreement is about what a word is doing, not about whether returning
// is good — which is what keeps the attribute questions from collapsing into
// "who is in favour".

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
  targetItemIds: uniq(ITEMS.musees),
  parts: [
    {
      label: 'Exercice 1 · ce qu’on demande au mot « provenance »',
      playCount: 2,
      readWindowS: 60,
      durationS: 184,
      text:
        'UNE JOURNALISTE : Le musée de Vaubrun a restitué quatorze objets l’an dernier ' +
        'et en a refusé onze autres. Vous dirigez l’établissement. ' +
        'Sur quoi la différence s’est-elle faite ?\n' +
        'UN DIRECTEUR : Sur la provenance. Pour les quatorze, nous savions comment ils étaient arrivés, ' +
        'et la réponse ne nous convenait pas. Pour les onze, nous ne savons pas encore.\n' +
        'UNE HISTORIENNE : C’est là que je voudrais m’arrêter, parce que ce mot fait ' +
        'beaucoup de travail dans votre phrase. Vous dites « nous ne savons pas encore », ' +
        'ce qui laisse entendre qu’un dossier complet trancherait. ' +
        'Or dans neuf cas sur onze, le dossier ne sera jamais complet. ' +
        'Les registres ont brûlé, ou n’ont jamais existé.\n' +
        'UN DIRECTEUR : Alors que proposez-vous ? Que nous restituions sans savoir ?\n' +
        'UNE HISTORIENNE : Je propose qu’on cesse de présenter une décision politique ' +
        'comme une conclusion documentaire. Vous avez décidé, et c’est votre rôle. ' +
        'Ce qui me gêne, c’est de faire porter la décision par un mot ' +
        'qui a l’air neutre et qui ne l’est pas.\n' +
        'UN DIRECTEUR : La provenance n’est pas un habillage. ' +
        'Nous avons quatre personnes qui travaillent là-dessus à temps plein, ' +
        'dans des inventaires manuscrits. ' +
        'Ce travail ne se réduit pas à un mot.\n' +
        'UNE HISTORIENNE : Je ne le conteste pas. ' +
        'Leur travail est excellent et il ne peut pas répondre à la question qu’on lui pose. ' +
        'Il peut établir qu’un objet est sorti d’un pays en 1911. ' +
        'Il ne peut pas établir si un achat de 1911 était un achat.\n' +
        'UN DIRECTEUR : Nous sommes le seul musée de la région ' +
        'à avoir ouvert ses réserves aux chercheurs étrangers.\n' +
        'UNE HISTORIENNE : C’est vrai, ' +
        'et cela ne change rien à ce que je viens de dire.\n' +
        'UNE JOURNALISTE : Vous demandez donc de restituer les onze.\n' +
        'UNE HISTORIENNE : Non, et je voudrais qu’on cesse de me le faire dire. ' +
        'Je pense que certains doivent partir et que d’autres n’ont aucune raison de partir. ' +
        'Je demande que le musée dise pourquoi, avec ses mots à lui, ' +
        'et pas avec ceux d’un rapport d’archives.\n' +
        'UN DIRECTEUR : Vous nous demandez de renoncer à notre argument le plus solide.\n' +
        'UNE HISTORIENNE : Je vous demande de ne pas construire dessus. ' +
        'Le jour où un chercheur montrera que l’un de vos quatorze avait un dossier régulier, ' +
        'toute votre démarche paraîtra fragile, ' +
        'alors que la raison de restituer, elle, n’aura pas bougé d’un centimètre.\n' +
        'UNE JOURNALISTE : Que faudrait-il faire, concrètement ?\n' +
        'UNE HISTORIENNE : Publier les onze refus avec leurs motifs. ' +
        'Aujourd’hui vous publiez les quatorze départs, ' +
        'et les onze refus n’existent nulle part. ' +
        'Ce sont pourtant eux qui montreraient comment vous décidez.\n' +
        'UN DIRECTEUR : Je n’ai pas de bonne objection. ' +
        'Nous publions ce qui part et nous appelons cela de la transparence. ' +
        'Ce qui reste ne fait l’objet d’aucun texte, et je ne saurais pas dire pourquoi.\n' +
        'UNE HISTORIENNE : Parce qu’un départ est une décision et qu’un refus ' +
        'a l’air d’une absence de décision. Il n’en est pas une.',
      items: [
        {
          q: 'Combien d’objets le musée a-t-il restitués ?',
          opts: ['Quatorze', 'Onze', 'Neuf', 'Quatre'],
          correct: 0,
          why: 'Quatorze restitués, onze refusés.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'Sur quoi le directeur dit-il fonder la différence ?',
          opts: ['Sur la provenance', 'Sur la valeur des objets', 'Sur la demande des pays', 'Sur l’état de conservation'],
          correct: 0,
          why: 'Il l’annonce directement : la provenance, connue pour quatorze et pas encore pour onze.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Pourquoi l’historienne conteste-t-elle la formule « nous ne savons pas encore » ?',
          opts: [
            'Dans neuf cas sur onze, le dossier ne sera jamais complet',
            'Le musée n’a pas assez de personnel',
            'Les pays demandeurs n’ont pas fourni de preuves',
            'Les registres n’ont pas été consultés',
          ],
          correct: 0,
          why: 'Elle précise que les registres ont brûlé ou n’ont jamais existé : « encore » suggère une attente qui n’aboutira pas.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Que dit-elle du travail des quatre chercheurs ?',
          opts: [
            'Il est excellent et ne peut pas répondre à la question posée',
            'Il manque de moyens',
            'Il a été mal utilisé par la direction',
            'Il devrait être confié à un organisme extérieur',
          ],
          correct: 0,
          why: 'Elle ne le conteste pas : il établit qu’un objet est sorti en 1911, pas si l’achat en était un.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Quelle est la position de l’historienne sur les onze objets ?',
          opts: [
            'Certains doivent partir, d’autres non, et le musée doit dire pourquoi',
            'Tous doivent être restitués sans délai',
            'Aucun ne doit partir avant un dossier complet',
            'La décision revient aux pays demandeurs',
          ],
          correct: 0,
          why: 'Elle refuse explicitement qu’on lui fasse demander la restitution des onze.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Pourquoi conseille-t-elle de ne pas s’appuyer sur la provenance ?',
          opts: [
            'Un dossier régulier retrouvé fragiliserait toute la démarche',
            'Les archives sont trop coûteuses à exploiter',
            'Les pays demandeurs la contestent',
            'Elle retarde les restitutions de plusieurs années',
          ],
          correct: 0,
          why: 'Si l’un des quatorze avait un dossier régulier, la démarche paraîtrait fragile alors que la raison de restituer n’aurait pas bougé.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Que propose-t-elle concrètement ?',
          opts: [
            'Publier les onze refus avec leurs motifs',
            'Créer une commission indépendante',
            'Suspendre les restitutions un an',
            'Confier les archives à un autre musée',
          ],
          correct: 0,
          why: 'Le musée publie les départs et non les refus, alors que les refus montreraient comment il décide.',
          band: 'b2',
          points: 0.5,
        },
      ],
    },
  ],
};

/* ═══ EXERCICE 2 — 9 points ═══════════════════════════════════════════════ */
//
// DELF-06 · the last bank branch in a village, and what a cash machine does not
// replace.
// Weights: 1 · 0.5 · 1 · 1.5 · 2 · 2.5 · 0.5 = 9
//
// A different rhetorical shape again: here the two speakers agree on the facts
// and on the outcome, and differ on what the closure was FOR. Neither concedes
// the other's frame, and the concession that does arrive is about method.

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
  targetItemIds: uniq(ITEMS.argentQuotidien),
  parts: [
    {
      label: 'Exercice 2 · ce qu’un distributeur ne remplace pas',
      playCount: 2,
      readWindowS: 60,
      durationS: 155,
      text:
        'UN JOURNALISTE : La dernière agence bancaire de Mortagne-sur-Aube a fermé en mars, ' +
        'remplacée par un distributeur et une permanence mensuelle. ' +
        'Vous avez enquêté sur les six mois qui ont suivi.\n' +
        'UNE ÉCONOMISTE : Oui, et la première chose à dire est que la banque n’a pas menti. ' +
        'Quatre-vingt-onze pour cent des opérations faites au guichet l’année précédente ' +
        'pouvaient être faites au distributeur ou en ligne. Le chiffre est juste.\n' +
        'UN ÉLU LOCAL : Il est juste et il ne dit rien. Neuf pour cent, ' +
        'sur une commune de mille deux cents habitants, ce sont environ soixante personnes ' +
        'qui n’ont plus de solution du tout.\n' +
        'UNE ÉCONOMISTE : Nous sommes d’accord là-dessus, et c’est même ce que je montre. ' +
        'Ce qui m’intéresse est ailleurs : ces soixante personnes n’étaient pas ' +
        'les usagers les plus fréquents. Les plus fréquents sont partis en ligne les premiers.\n' +
        'UN ÉLU LOCAL : Donc la banque a fermé pour ceux qui ne venaient plus.\n' +
        'UNE ÉCONOMISTE : Elle a fermé en comptant des opérations, pas des personnes. ' +
        'Une opération qui migre et une personne qui ne peut pas migrer ' +
        'ne pèsent pas pareil dans une décision, et il n’existe aucun indicateur ' +
        'qui mette les deux sur la même page.\n' +
        'UNE ÉCONOMISTE : J’ajoute que les soixante en question ne forment pas ' +
        'un groupe homogène. Il y a des personnes âgées, ce à quoi tout le monde pense, ' +
        'et il y a des commerçants qui déposent des espèces trois fois par semaine, ' +
        'ce à quoi personne ne pense. Les seconds sont ceux qui coûtent le plus cher ' +
        'à la commune, et ils ne figurent dans aucune des tribunes que j’ai lues.\n' +
        'UN JOURNALISTE : La permanence mensuelle ne suffit-elle pas ?\n' +
        'UN ÉLU LOCAL : Elle dure trois heures et il faut prendre rendez-vous par internet.\n' +
        'UNE ÉCONOMISTE : Cette dernière phrase est la seule chose qui me fasse rire ' +
        'dans tout le dossier, et elle est involontaire.\n' +
        'UN JOURNALISTE : Vous demandez donc de rouvrir les agences.\n' +
        'UNE ÉCONOMISTE : Non, et je serais malhonnête de le prétendre. ' +
        'Une agence à mille deux cents habitants ne se défend pas, et je ne la défendrai pas. ' +
        'Ce que je conteste, c’est qu’on présente une décision de coût ' +
        'comme une réponse à un usage. Les deux existent ; ce n’est pas la même phrase.\n' +
        'UN ÉLU LOCAL : On me répond toujours que le numérique règle la question.\n' +
        'UNE ÉCONOMISTE : Le numérique règle la question de ceux qui l’utilisent déjà. ' +
        'C’est une tautologie, et elle est présentée comme un projet.\n' +
        'UN ÉLU LOCAL : Vous m’enlevez mon meilleur argument.\n' +
        'UNE ÉCONOMISTE : Je vous en donne un autre, plus difficile à contredire. ' +
        'Les dépôts d’espèces des commerces de la commune ont baissé de vingt-deux pour cent, ' +
        'et leur chiffre d’affaires, lui, n’a pas bougé. ' +
        'L’argent ne disparaît pas : il est déposé ailleurs, ' +
        'c’est-à-dire dans la ville où le commerçant fait maintenant ses courses.\n' +
        'UN ÉLU LOCAL : Cela, je ne l’avais pas.\n' +
        'UNE ÉCONOMISTE : Personne ne l’a, parce que personne ne mesure une commune ' +
        'quand on ferme un guichet. On mesure une agence.',
      items: [
        {
          q: 'Par quoi l’agence a-t-elle été remplacée ?',
          opts: [
            'Un distributeur et une permanence mensuelle',
            'Un service téléphonique',
            'Une agence mobile hebdomadaire',
            'Rien du tout',
          ],
          correct: 0,
          why: 'Le journaliste l’annonce en ouverture.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Quelle proportion des opérations pouvait se faire sans guichet ?',
          opts: ['Quatre-vingt-onze pour cent', 'Neuf pour cent', 'Vingt-deux pour cent', 'La moitié'],
          correct: 0,
          why: 'L’économiste le confirme et précise que le chiffre est juste.',
          band: 'b2',
          points: 0.5,
        },
        {
          q: 'Que représentent les neuf pour cent restants, selon l’élu ?',
          opts: [
            'Environ soixante personnes sans solution',
            'Des opérations rares et coûteuses',
            'Les retraits d’espèces uniquement',
            'Les clients d’autres communes',
          ],
          correct: 0,
          why: 'Sur mille deux cents habitants, il convertit le pourcentage en personnes.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Quelle observation l’économiste ajoute-t-elle sur ces soixante personnes ?',
          opts: [
            'Ce n’étaient pas les usagers les plus fréquents',
            'Elles avaient déjà un compte ailleurs',
            'Elles vivaient hors de la commune',
            'Elles n’avaient jamais utilisé le guichet',
          ],
          correct: 0,
          why: 'Les usagers les plus fréquents étaient partis en ligne les premiers.',
          band: 'b2',
          points: 1.5,
        },
        {
          q: 'Que reproche-t-elle exactement à la banque ?',
          opts: [
            'Présenter une décision de coût comme une réponse à un usage',
            'Avoir falsifié ses chiffres',
            'Avoir fermé sans consulter la commune',
            'Avoir supprimé la permanence mensuelle',
          ],
          correct: 0,
          why: 'Elle refuse de demander la réouverture et distingue les deux phrases : le coût et l’usage.',
          band: 'b2',
          points: 2,
        },
        {
          q: 'Quel argument propose-t-elle à l’élu à la place du sien ?',
          opts: [
            'Les dépôts d’espèces des commerces ont baissé sans que leur activité baisse',
            'La permanence est trop courte',
            'Le distributeur tombe souvent en panne',
            'La commune a perdu des habitants',
          ],
          correct: 0,
          why: 'Vingt-deux pour cent de dépôts en moins à chiffre d’affaires constant : l’argent est déposé dans une autre ville.',
          band: 'b2',
          points: 2.5,
        },
        {
          q: 'Pourquoi cet effet n’avait-il pas été relevé ?',
          opts: [
            'On mesure une agence, pas une commune',
            'Les commerçants refusent de communiquer leurs chiffres',
            'La période est trop courte',
            'La banque n’a pas publié ses données',
          ],
          correct: 0,
          why: 'Elle conclut là-dessus : personne ne mesure une commune quand on ferme un guichet.',
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
// DELF-35 traditions · DELF-43 methode-scientifique · DELF-46 reseaux-sociaux.
//
// ~190 words each, from the measured 172.5 wpm. Two answerable points and no
// more: everything else is texture around them, because a third fact in a
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
  targetItemIds: uniq(ITEMS.traditions, ITEMS.methodeScientifique, ITEMS.reseauxSociaux),
  parts: [
    {
      label: 'Document 1 · une rue qui a changé deux fois de nom',
      playCount: 1,
      readWindowS: 15,
      durationS: 72,
      text:
        'UNE JOURNALISTE : Le conseil municipal de Brécy a rebaptisé la rue des Tanneurs ' +
        'au mois de janvier, et l’a débaptisée au mois de juin. ' +
        'Entre les deux, une pétition a recueilli quatre cents signatures ' +
        'dans une commune qui compte huit cents adultes. ' +
        'Ce qui frappe, en lisant les motifs, c’est que presque personne ' +
        'ne défendait l’ancien nom pour lui-même. ' +
        'Les signataires écrivaient qu’ils n’avaient pas été prévenus, ' +
        'que la décision avait été prise en juillet précédent, ' +
        'et qu’une réunion publique avait eu lieu un mardi matin. ' +
        'La maire l’a reconnu sans détour lors du conseil de juin : ' +
        'la consultation avait été régulière et elle avait été inutile. ' +
        'Elle a ajouté une phrase que les opposants n’attendaient pas. ' +
        'Le nouveau nom, a-t-elle dit, sera reproposé dans deux ans, ' +
        'avec la même délibération et une autre méthode, ' +
        'et si le refus revient, il portera cette fois sur le nom. ' +
        'Deux conseillers ont voté contre ce calendrier. ' +
        'Ils estiment qu’un sujet rouvert est un sujet qui ne se referme jamais, ' +
        'et que la commune passera deux ans à en parler au lieu de deux mois. ' +
        'La maire leur a répondu que deux mois avaient déjà été perdus, ' +
        'et que la différence tenait à qui décidait de les perdre.',
      items: [
        {
          q: 'Que reprochaient principalement les signataires de la pétition ?',
          opts: [
            'De ne pas avoir été prévenus à un moment utile',
            'Le nouveau nom choisi par le conseil',
            'Le coût du changement de plaques',
            'La disparition d’un nom ancien',
          ],
          correct: 0,
          why: 'Presque personne ne défendait l’ancien nom : les motifs portent sur la décision de juillet et la réunion un mardi matin.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Qu’annonce la maire pour la suite ?',
          opts: [
            'Le même nom sera reproposé dans deux ans avec une autre méthode',
            'Le nom ancien est rétabli définitivement',
            'La décision sera confiée à un référendum immédiat',
            'Le conseil renonce à tout changement de nom',
          ],
          correct: 0,
          why: 'Elle veut que le refus, s’il revient, porte sur le nom et non sur la procédure.',
          band: 'b2',
          points: 1.5,
        },
      ],
    },
    {
      label: 'Document 2 · un résultat qu’elle n’a pas retrouvé',
      playCount: 1,
      readWindowS: 15,
      durationS: 68,
      text:
        'UNE CHERCHEUSE : Nous avons publié une expérience que nous n’avons pas réussi ' +
        'à reproduire nous-mêmes, et nous l’avons écrit dans le titre. ' +
        'Ce n’était pas du courage, c’était le calcul le plus prudent que nous pouvions faire. ' +
        'Le premier résultat était net, et trois répétitions sur cinq ne l’ont pas retrouvé. ' +
        'Nous avions deux possibilités. ' +
        'Ne rien publier, et laisser une autre équipe passer deux ans sur la même piste. ' +
        'Ou publier avec l’échec dedans, et accepter ce qui est arrivé ensuite. ' +
        'Ce qui est arrivé ensuite, c’est que l’article a été refusé par deux revues ' +
        'avant d’être accepté par la troisième, et que les deux refus disaient la même chose : ' +
        'que le travail était sérieux et que les conclusions étaient trop faibles. ' +
        'Je comprends la position et je la trouve fausse. ' +
        'Un résultat instable est une information sur le monde, ' +
        'et le classer comme une conclusion faible, c’est confondre ' +
        'la force d’une affirmation avec sa valeur. ' +
        'Nous avons été cités onze fois en deux ans, ' +
        'et neuf de ces citations viennent d’équipes qui ont abandonné la piste. ' +
        'Aucune de ces neuf équipes n’aurait su, sans nous, ' +
        'qu’il y avait une raison de s’arrêter. C’est un usage de la publication ' +
        'dont aucun comité ne parle jamais.',
      items: [
        {
          q: 'Pourquoi l’équipe a-t-elle publié malgré l’échec de reproduction ?',
          opts: [
            'Pour éviter qu’une autre équipe perde deux ans sur la même piste',
            'Parce que la revue l’exigeait',
            'Pour obtenir un financement supplémentaire',
            'Parce que le premier résultat restait valable',
          ],
          correct: 0,
          why: 'Elle présente les deux options et retient celle qui évite à d’autres de refaire le chemin.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Que reproche-t-elle aux deux revues qui ont refusé l’article ?',
          opts: [
            'Confondre la force d’une affirmation avec sa valeur',
            'Ne pas avoir lu le travail sérieusement',
            'Exiger un échantillon plus large',
            'Avoir tardé à répondre',
          ],
          correct: 0,
          why: 'Elle comprend la position et la juge fausse : un résultat instable est une information sur le monde.',
          band: 'b2',
          points: 1.5,
        },
      ],
    },
    {
      label: 'Document 3 · les avis qu’il ne lit plus',
      playCount: 1,
      readWindowS: 15,
      durationS: 75,
      text:
        'UN COMMERÇANT : J’ai arrêté de lire les avis en ligne il y a huit mois, ' +
        'et je ne le dis pas comme une victoire. ' +
        'Je les lisais tous les matins avant d’ouvrir, ' +
        'et je passais la journée à repenser à celui qui n’était pas bon. ' +
        'Ce qui m’a décidé, ce n’est pas la méchanceté, il y en a très peu. ' +
        'C’est que je changeais des choses qui marchaient. ' +
        'Un client trouve la salle bruyante, j’enlève deux tables ; ' +
        'un autre trouve qu’on attend, je les remets. ' +
        'En six mois j’avais fait trois fois l’aller-retour, ' +
        'et personne ne m’avait rien demandé.\n' +
        'Ma femme continue de les lire et me signale ce qui revient. ' +
        'C’est la différence : ce qui revient est une information, ' +
        'et ce qui arrive un mardi soir n’en est pas une. ' +
        'Trois personnes ont parlé du bruit en un an, sur quatre cents avis. ' +
        'Quand elle m’a donné ce chiffre, j’ai compris que j’avais réorganisé ' +
        'la salle pour trois personnes dont deux ne reviendront pas. ' +
        'Depuis, je change une chose par saison, et seulement si elle est revenue ' +
        'trois fois. Ce n’est pas de l’indifférence : c’est la seule façon ' +
        'que j’aie trouvée de distinguer un client mécontent d’un problème.',
      items: [
        {
          q: 'Qu’est-ce qui l’a décidé à ne plus les lire ?',
          opts: [
            'Il modifiait sans cesse des choses qui fonctionnaient',
            'Les avis étaient devenus trop agressifs',
            'Ils lui prenaient trop de temps le matin',
            'La plateforme refusait de supprimer les faux avis',
          ],
          correct: 0,
          why: 'Il décrit trois allers-retours en six mois sur les tables, sans que personne ne le demande.',
          band: 'b2',
          points: 1,
        },
        {
          q: 'Quelle distinction sa femme lui a-t-elle permis de faire ?',
          opts: [
            'Entre ce qui revient et ce qui arrive une fois',
            'Entre les clients réguliers et les autres',
            'Entre les avis signés et les avis anonymes',
            'Entre les critiques sur le service et sur la cuisine',
          ],
          correct: 0,
          why: 'Ce qui revient est une information ; trois mentions du bruit sur quatre cents avis n’en sont pas une.',
          band: 'b2',
          points: 1,
        },
      ],
    },
  ],
};
