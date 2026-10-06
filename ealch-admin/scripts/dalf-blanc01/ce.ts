// DALF C1 blanc-01 — Compréhension des écrits. 12 questions, 25 points, 50 min.
//
// One text of ideas, 1500 to 2000 words, and twelve questions in text order
// mixing the three answer modes on the published pattern (BLUEPRINT-dalf-c1 §4):
//
//   MCQ    3   1, 2, 2         =  5
//   short  5   2, 2, 3, 2, 3   = 12
//   tfj    4   2 each          =  8   (two Vrai, two Faux)
//
// ── The text (DALF-32) ──────────────────────────────────────────────────────
//
// Collective forgetting: what a town gains and loses by ending a commemoration.
// The author holds a position (forgetting can be legitimate if it is chosen by
// those who bore the wound, leaves the archive open and can be undone), reports
// two others (the « mémoire intégrale » camp, the « apaisement » camp),
// concedes a point to the first and limits the second, and distrusts her own
// analogy. That gives the attribute, justify and weigh families material.
//
// Families, in text order:
//   1 MCQ 1    locate      what the council decided
//   2 short 2  reformulate the « inflation commémorative »
//   3 short 2  reformulate the mémoire intégrale argument
//   4 tfj 2    attribute   her concession to that camp            FAUX
//   5 MCQ 2    attribute   her judgement on the Valdorre amnesty
//   6 MCQ 2    infer       which gesture is « effacement »
//   7 tfj 2    justify     interest in the strike since            FAUX
//   8 short 3  weigh       why the private gatherings are decisive
//   9 tfj 2    justify     who may decide to turn the page         VRAI
//  10 short 2  infer       what a forbidden memory becomes
//  11 tfj 2    attribute   the limits of her own analogy           VRAI
//  12 short 3  weigh       her final position
//
// INVENTED, all of it: the author Armelle Quintard, the revue « Lisières », the
// town of Corvenne, its filature, the strike of March 1931 and its seven dead,
// the ceremony since 1946, the vote of 2009 « à une voix près », the province
// of Valdorre and its amnesty of 1874, the town of Saint-Aurèle, the Institut
// Marveil; the figures « quelques dizaines » then « plus de mille deux cents »
// consultations a year, 58 % of under-forties against 23 % in 2008.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId, C1_CE_TARGETS } from './common.ts';

export const CE_TEXT =
  'CE QUE L’OUBLI NOUS DOIT\n\n' +
  'Au printemps 2009, le conseil municipal de Corvenne a voté, à une voix près, la fin de la cérémonie qui, chaque 14 mars depuis 1946, rassemblait la ville devant la stèle des sept ouvriers tués lors de la grève de la filature, en 1931. La stèle est restée où elle était. Seuls ont disparu le discours du maire, la gerbe, la minute de silence et le défilé des écoles. La décision a pourtant déclenché une tempête : on a parlé de trahison, d’amnésie organisée, de seconde mort infligée aux victimes. J’ai d’abord partagé cette indignation. Quinze ans plus tard, je voudrais expliquer pourquoi je ne la partage plus tout à fait, et ce que cette petite affaire municipale dit d’une question qui nous dépasse : une société a-t-elle le droit de laisser s’effacer de ses rituels un épisode douloureux de son histoire ?\n\n' +
  'La conviction dominante, chez nous, tient en une formule que chacun a entendue à l’école : un peuple qui oublie son passé se condamne à le revivre. La mémoire serait un devoir, et tout relâchement de ce devoir une faute morale. Je ne méprise pas cette conviction ; elle a été conquise contre des silences officiels qui n’avaient rien d’innocent. Mais elle a produit, au fil des décennies, un effet que ses défenseurs regardent rarement en face. Notre calendrier est désormais saturé de journées, d’anniversaires, de plaques et de minutes de silence, au point qu’aucune ne se détache plus des autres. Il en va des commémorations comme d’un texte dont on aurait souligné chaque ligne : à force de tout signaler, on ne signale plus rien. Cette inflation commémorative ne renforce pas la mémoire ; elle l’use, en transformant l’hommage en formalité que l’on accomplit parce qu’elle figure à l’agenda. Qui, parmi ceux qui se tiennent chaque année au garde-à-vous devant un monument, saurait dire ce qui s’est passé exactement à l’endroit qu’il honore ? Le rite a survécu au savoir qu’il était censé transmettre, et il lui sert désormais d’alibi : on se dispense de connaître parce qu’on a commémoré.\n\n' +
  'Les partisans de ce que l’on pourrait appeler une mémoire intégrale répondent que l’usure est un moindre mal. Leur argument principal mérite d’être pris au sérieux : l’oubli, disent-ils, profite toujours aux bourreaux. Se taire sur un crime, c’est en prolonger les effets, puisque c’est priver les victimes de la seule réparation qui leur reste, la reconnaissance publique de ce qu’elles ont subi. Chaque cérémonie supprimée serait donc une petite victoire posthume de ceux qui ont tiré, ou fait tirer. Ils ont raison sur un point essentiel, et je ne voudrais pas l’escamoter : historiquement, l’oubli a presque toujours été réclamé par ceux qui avaient quelque chose à se faire pardonner. Quand un pouvoir appelle à « tourner la page », il est prudent de se demander qui a écrit la page en question.\n\n' +
  'À l’opposé, un courant d’historiens et de juristes, que l’on regroupe parfois sous le nom d’école de l’apaisement, soutient que certaines sociétés n’ont pu se reconstruire qu’en acceptant de ne plus parler de ce qui les avait déchirées. L’exemple le plus souvent cité est celui de la province de Valdorre, où, après trois années de guerre civile, la loi d’amnistie de 1874 interdisait d’invoquer en public les crimes commis par l’un ou l’autre camp. Deux générations durant, d’anciens ennemis ont labouré des champs voisins, marié leurs enfants entre eux, siégé dans les mêmes conseils. L’argument est sérieux, mais il prouve moins qu’il ne prétend. À Valdorre, les deux camps avaient du sang sur les mains, et le silence imposé à tous protégeait tout le monde à parts à peu près égales. Rien ne permet de transposer ce pacte à une situation où l’un des camps a frappé et l’autre a été frappé. Là, le silence n’est plus un compromis : c’est une seconde victoire du plus fort.\n\n' +
  'Ces deux positions partagent pourtant un présupposé que je crois faux : elles parlent de l’oubli comme d’une chose unique. Or oublier, pour une société, peut vouloir dire deux choses que notre vocabulaire confond. Il y a l’effacement : détruire les archives, interdire d’évoquer les faits, débaptiser les rues qui portaient le nom des victimes, retirer les manuels où elles figuraient. C’est un acte de pouvoir, et il vise à rendre le souvenir impossible. Il y a ensuite ce que j’appellerais l’apaisement rituel : cesser de rejouer publiquement et à date fixe une douleur, tout en laissant intactes les traces qui permettent à quiconque de s’en souvenir. Le premier supprime la possibilité de se souvenir ; le second renonce seulement à l’obligation de le faire. Confondre les deux, c’est s’interdire de penser la décision de Corvenne autrement que comme une trahison.\n\n' +
  'Car que s’est-il passé à Corvenne depuis 2009 ? La cérémonie a été remplacée par trois mesures que presque personne n’a commentées. Les archives de la filature, jusque-là dormantes dans un grenier de la mairie, ont été classées et ouvertes au public. Un module d’histoire locale, construit avec les enseignants, fait travailler chaque année les élèves de troisième sur les registres de la grève. Enfin, une quarantaine de familles ont confié à la médiathèque les lettres, les photographies et les récits transmis depuis 1931. Les consultations de ces fonds, qui se comptaient en quelques dizaines par an, dépassent aujourd’hui mille deux cents. Selon une enquête de l’Institut Marveil, cinquante-huit pour cent des habitants de moins de quarante ans savent désormais expliquer ce qui s’est passé en mars 1931 ; ils étaient vingt-trois pour cent en 2008. Paradoxalement, la ville parle davantage de sa grève depuis qu’elle a cessé de la commémorer. Tout le monde, bien sûr, n’a pas suivi. L’association des descendants s’est divisée, et une partie de ses membres se réunit encore, chaque 14 mars, devant la stèle, sans élus ni discours. Personne ne les en empêche, et c’est à mes yeux le point décisif.\n\n' +
  'La vraie question n’est donc pas de savoir s’il faut oublier, mais qui a le droit d’en décider. À Corvenne, le vote de 2009 avait été précédé de deux années de consultation, et la proposition venait de l’association des descendants elle-même, lassée de voir la cérémonie devenue une tribune pour les candidats aux élections locales. Ce détail change tout. Ce n’est pas à ceux qui ont infligé la blessure, ni à leurs héritiers, de décréter qu’elle est refermée. La seule instance légitime pour lever le deuil est celle qui en a porté le poids. Une municipalité peut organiser, consulter, proposer ; elle ne peut pas prononcer à la place des intéressés la fin d’une douleur qui n’est pas la sienne.\n\n' +
  'L’histoire offre assez d’exemples de ce qui arrive quand on procède autrement. À Saint-Aurèle, à une trentaine de kilomètres de Corvenne, le préfet fit retirer en 1950 la plaque qui rappelait l’expulsion d’un quartier entier, au motif qu’elle entretenait la discorde. On ne parla plus de l’expulsion sur la place du marché. On en parla dans les cuisines. Un oubli imposé ne fait pas disparaître le souvenir : il le chasse des lieux publics vers les foyers, où il se transmet sans contradiction, se simplifie, se durcit, et revient un jour sous la forme d’un grief que plus personne ne sait discuter. Quand la plaque fut reposée, en 1988, elle ne réconcilia personne ; elle ralluma une querelle que quarante ans de silence avaient conservée intacte, comme dans un bocal. Les familles des expulsés et celles des voisins qui avaient profité de leurs logements se regardaient encore, en 1988, avec les yeux de 1950, faute d’avoir jamais pu confronter leurs récits.\n\n' +
  'On objectera qu’il existe, chez l’individu, un oubli salutaire. Les psychologues décrivent depuis longtemps la souffrance de ceux qui ne parviennent pas à laisser le passé derrière eux, et l’on voudrait volontiers transposer cette sagesse aux peuples : une société, comme une personne, aurait besoin d’oublier pour continuer à vivre. Je me méfie de cette analogie autant que je m’en sers. Une personne qui oublie le fait seule, pour elle-même ; une société n’a pas de conscience unique, et ce qu’elle « oublie », ce sont toujours certains de ses membres qui cessent d’en parler pendant que d’autres continuent de s’en souvenir. L’image est utile pour rappeler qu’une mémoire saturée cesse de fonctionner ; elle devient dangereuse dès qu’elle sert à présenter comme naturel un silence qui a été choisi par quelqu’un.\n\n' +
  'Où cela nous laisse-t-il ? Ni du côté de ceux qui tiennent tout oubli pour une faute, ni du côté de ceux qui voient dans le silence la condition de la paix. Un oubli collectif me paraît défendable à trois conditions, et à trois seulement. Il doit être demandé, ou au moins accepté, par ceux qui ont porté la blessure, et non décidé au-dessus d’eux. Il doit laisser ouvertes les archives, les noms et les lieux, de sorte que quiconque veut se souvenir le puisse. Il doit enfin rester réversible : une génération qui voudrait reprendre le rituel abandonné doit pouvoir le faire sans demander la permission à personne. Un tel oubli ne ferme pas la porte du passé ; il cesse seulement de nous y convoquer tous les ans à heure fixe. Ce que Corvenne a abandonné en 2009, ce n’est pas sa mémoire. C’est la répétition d’un geste qui avait cessé de signifier quelque chose pour ceux-là mêmes à qui il était destiné.\n\n' +
  'Armelle Quintard, revue Lisières';

export const CE_T1: ExamTask = {
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
      label: 'Texte · ce que l’oubli nous doit',
      text: CE_TEXT,
      items: [
        {
          // Q1 · locate. Key-first; scattered in paper.ts.
          q: 'Qu’a décidé le conseil municipal de Corvenne en 2009 ?',
          opts: [
            'Mettre fin à la cérémonie annuelle en mémoire des ouvriers tués',
            'Déplacer la stèle élevée en mémoire des ouvriers tués',
            'Confier l’organisation de la cérémonie à l’association des descendants',
          ],
          correct: 0,
          why: 'Le vote met fin à la cérémonie ; « la stèle est restée où elle était ». L’association a proposé la mesure, mais on ne lui confie pas la cérémonie.',
          band: 'c1',
          points: 1,
        },
        {
          // Q2 · reformulate. Two ideas: too many; each loses its force.
          kind: 'short',
          q: 'Que reproche l’auteure à ce qu’elle appelle « l’inflation commémorative » ? Répondez avec vos propres mots.',
          opts: [],
          correct: -1,
          keywords: [
            ['trop de comm', 'trop nombr', 'trop de cere', 'trop de date', 'trop de journ', 'trop d hommag', 'multipl', 'nombre excessi', 'satur', 'accumul', 'profusion', 'exces', 'abond', 'tout rappeler', 'tout commemorer', 'prolif', 'surabond', 'surcharg'],
            ['sens', 'force', 'valeur', 'portee', 'dilu', 'banal', 'distingu', 'ressort', 'remarqu', 'signif', 'impact', 'affaibl', 'perd', 'usure', 'formalite', 'routine', 'detach'],
          ],
          model: 'À force de multiplier les commémorations, chacune perd sa force et plus aucune ne se distingue des autres.',
          why: 'Calendrier saturé : aucune commémoration ne se détache, l’hommage devient une formalité.',
          band: 'c1',
          points: 2,
        },
        {
          // Q3 · reformulate. Two ideas: the perpetrators; benefit / prolonging.
          kind: 'short',
          q: 'Quel est l’argument principal des partisans d’une mémoire intégrale ?',
          opts: [],
          correct: -1,
          keywords: [
            ['bourreau', 'coupable', 'criminel', 'responsabl', 'oppresseur', 'tortionnaire', 'assassin', 'agresseur', 'tireur', 'meurtrier'],
            ['profit', 'servi', 'sert', 'avantag', 'arrang', 'benefic', 'protege', 'impun', 'absou', 'prolong', 'victoire'],
          ],
          model: 'L’oubli profite toujours aux bourreaux : se taire prolonge le crime en privant les victimes de toute reconnaissance.',
          why: '« L’oubli profite toujours aux bourreaux » ; se taire prolonge les effets du crime.',
          band: 'c1',
          points: 2,
        },
        {
          // Q4 · attribute. FAUX: she concedes them an essential point.
          kind: 'tfj',
          q: 'L’auteure estime que les défenseurs d’une mémoire intégrale se trompent entièrement.',
          opts: ['Vrai', 'Faux'],
          correct: 1,
          quotes: [
            'Ils ont raison sur un point essentiel, et je ne voudrais pas l’escamoter',
            'historiquement, l’oubli a presque toujours été réclamé par ceux qui avaient quelque chose à se faire pardonner',
          ],
          why: 'Elle leur concède un point essentiel : l’oubli est d’ordinaire réclamé par les coupables.',
          band: 'c1',
          points: 2,
        },
        {
          // Q5 · attribute: a reported view, and her limit on it.
          q: 'Que pense l’auteure de l’exemple de l’amnistie de Valdorre ?',
          opts: [
            'Il ne vaut que pour un conflit où les deux camps avaient des torts comparables.',
            'Il prouve qu’un silence imposé finit toujours par réconcilier une société.',
            'Il repose sur des faits que les historiens ont depuis largement contestés.',
          ],
          correct: 0,
          why: '« Les deux camps avaient du sang sur les mains » : rien ne permet de transposer ce pacte quand l’un a frappé et l’autre a été frappé. La seconde option est la thèse de l’école de l’apaisement, qu’elle limite ; personne ne conteste les faits.',
          band: 'c1',
          points: 2,
        },
        {
          // Q6 · infer.
          q: 'Lequel de ces gestes relève, selon l’auteure, de l’effacement ?',
          opts: [
            'Rebaptiser des rues qui honoraient des victimes',
            'Cesser de célébrer chaque année un anniversaire',
            'Déposer des récits familiaux dans une médiathèque',
          ],
          correct: 0,
          why: 'Débaptiser les rues figure dans la liste de l’effacement. Cesser le rituel est l’apaisement rituel ; le dépôt à la médiathèque est l’une des mesures de Corvenne, qui conservent les traces.',
          band: 'c1',
          points: 2,
        },
        {
          // Q7 · justify. FAUX: interest has grown.
          kind: 'tfj',
          q: 'Depuis la fin de la cérémonie, les habitants de Corvenne s’intéressent moins à l’histoire de la grève.',
          opts: ['Vrai', 'Faux'],
          correct: 1,
          quotes: [
            'la ville parle davantage de sa grève depuis qu’elle a cessé de la commémorer',
            'qui se comptaient en quelques dizaines par an, dépassent aujourd’hui mille deux cents',
            'savent désormais expliquer ce qui s’est passé en mars 1931',
          ],
          why: 'Les consultations ont explosé, la connaissance des moins de quarante ans a plus que doublé.',
          band: 'c1',
          points: 2,
        },
        {
          // Q8 · weigh (3). Two ideas: freedom to remember remains; so it is not erasure / not imposed.
          kind: 'short',
          q: 'Pourquoi l’auteure juge-t-elle décisif que personne n’empêche certaines familles de se réunir chaque 14 mars ?',
          opts: [],
          correct: -1,
          keywords: [
            ['libre', 'liberte', 'possib', 'permis', 'autoris', 'choix', 'choisi', 'facult', 'peuvent', 'quiconque', 'chacun'],
            ['effac', 'interdi', 'impos', 'oblig', 'contrain', 'suppr', 'censur', 'apaisement'],
          ],
          model: 'Parce que cela montre que l’oubli choisi par Corvenne n’est pas un effacement : chacun reste libre de se souvenir, seule l’obligation a disparu.',
          why: 'C’est le critère de sa distinction : l’apaisement rituel supprime l’obligation, non la possibilité de se souvenir.',
          band: 'c1',
          points: 3,
        },
        {
          // Q9 · justify. VRAI.
          kind: 'tfj',
          q: 'Pour l’auteure, la décision de tourner la page appartient d’abord à ceux qui ont subi le tort.',
          opts: ['Vrai', 'Faux'],
          correct: 0,
          quotes: [
            'La seule instance légitime pour lever le deuil est celle qui en a porté le poids',
            'Ce n’est pas à ceux qui ont infligé la blessure, ni à leurs héritiers, de décréter qu’elle est refermée',
            'Il doit être demandé, ou au moins accepté, par ceux qui ont porté la blessure',
          ],
          why: 'Seuls ceux qui ont porté le poids du deuil peuvent le lever ; la municipalité ne peut que proposer.',
          band: 'c1',
          points: 2,
        },
        {
          // Q10 · infer. Two ideas: it goes into private/family space; it hardens and comes back.
          kind: 'short',
          q: 'Selon l’auteure, que devient un souvenir dont on interdit l’évocation publique ?',
          opts: [],
          correct: -1,
          keywords: [
            ['prive', 'famil', 'cuisine', 'foyer', 'intime', 'clandestin', 'souterrain', 'cache', 'maison', 'domestique', 'secret', 'chez soi', 'transmet'],
            ['revien', 'resurg', 'ressurg', 'reapparai', 'grief', 'rancune', 'rancoeur', 'ressentiment', 'durci', 'radical', 'colere', 'explos', 'violen', 'envenim', 'querelle', 'simplifi'],
          ],
          model: 'Il se réfugie dans les familles, où il se transmet sans contradiction, se durcit et finit par revenir sous forme de rancune.',
          why: 'Chassé vers les foyers, il se transmet sans contradiction, se durcit et revient en grief (Saint-Aurèle).',
          band: 'c1',
          points: 2,
        },
        {
          // Q11 · attribute. VRAI: she distrusts her own analogy.
          kind: 'tfj',
          q: 'L’auteure reconnaît les limites de la comparaison entre la mémoire d’une personne et celle d’une société.',
          opts: ['Vrai', 'Faux'],
          correct: 0,
          quotes: [
            'Je me méfie de cette analogie autant que je m’en sers',
            'une société n’a pas de conscience unique',
            'elle devient dangereuse dès qu’elle sert à présenter comme naturel un silence qui a été choisi par quelqu’un',
          ],
          why: 'Elle utilise l’analogie et en dit aussitôt les limites : une société n’a pas de conscience unique.',
          band: 'c1',
          points: 2,
        },
        {
          // Q12 · weigh (3). Three ideas: legitimate under conditions; chosen by the wounded; traces stay open.
          kind: 'short',
          q: 'Quelle position l’auteure défend-elle finalement sur l’oubli collectif ? Répondez avec vos propres mots.',
          opts: [],
          correct: -1,
          keywords: [
            ['condition', 'legitim', 'defendab', 'justifiab', 'admissib', 'acceptable si', 'acceptable a', 'accepte si', 'accepte a', 'accepter si', 'valable si', 'possible si', 'pourvu', 'seulement si', 'sous reserve', 'a trois'],
            ['victim', 'bless', 'descendant', 'souffert', 'subi', 'concern', 'famill', 'lese', 'interess'],
            ['archiv', 'trace', 'document', 'accessib', 'ouvert', 'reversib', 'revenir', 'consult', 'reprendre'],
          ],
          model: 'L’oubli est légitime s’il est choisi par ceux qui ont subi la blessure et s’il laisse les archives ouvertes, pour qu’on puisse toujours y revenir.',
          why: 'Trois conditions : demandé par ceux qui ont porté la blessure, traces laissées ouvertes, réversibilité. Ni faute en soi, ni condition de la paix.',
          band: 'c1',
          points: 3,
        },
      ],
    },
  ],
};
