// DALF C1 blanc-05: Compréhension de l’oral. 17 questions, 25 points, ~40 min.
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
// word than the flash (VOICES-dalf-c1 §2); paper.test.ts holds the total at
// 570 s or under, which leaves 30 s of headroom below the 600 s ceiling.
//
// ── Keys ────────────────────────────────────────────────────────────────────
//
// MCQ are authored key-first (correct: 0) next to their `why`, and paper.ts
// scatters them per part (scatterMcqKeys). Short answers carry `keywords`
// (every group met by one stem) and a `model` that meets them; paper.test.ts
// asserts it. Decision 40: the AI grader rules on every typed answer and the
// key words are only the offline fallback, but they must still never pass a
// wrong answer: the scratch probe (scratchpad/dalf-blanc05/probe.ts) ran right
// answers, half-truths and reversals against every group through markAnswer.
//
// ── Casting ─────────────────────────────────────────────────────────────────
//
// Part 1 is a mixed pair, as VOICES-dalf-c1 §1 asks: a woman host (f-media)
// who ASKS, and a man expert (m-formal) who argues. Part 2 names its genre in
// each part label (examAudio.ts dalfGenreKey): the chronicle and the flash
// both stay on the c1 band order, media voice first.
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
// DALF-05 · a restorer on repairing a damaged work invisibly or letting the
// damage show.
//
// The tension: the expert refuses both camps. Against « make it as new » he
// holds that the original state is lost anyway and that restoring is not
// rejuvenating; against « show the scar » he holds that a trace is kept only
// when it tells something (a fire bound to the village's memory) and not when
// it is mere neglect (a leaking gutter). His own rules: a retouch readable at
// two distances, reversibility of everything he adds, and a choice made by
// several people, not by the restorer alone. The host puts four positions to
// him (the public wants the artist's intended state; the authenticity of the
// trace; restorers have disfigured works; a digital reconstruction would make
// restoring needless) and he grants part of each before refusing its
// conclusion. Questions 1, 4, 6, 8 and 9 turn on keeping his view apart from
// what he grants.
//
// INVENTED, all of it: the programme « Le Fil des œuvres », the restorer
// Lucien Marsaudon and the atelier régional de conservation de Quérimont that
// he has run for twenty years, the retable of the church of Morvesse (a fire
// mark and damp stains from a gutter), the Institut Quillardet survey (six
// museum visitors in ten prefer a work « remise à neuf », three in four want
// to know what was redone), the painting cut in two and sewn back together.
// The two-distance retouch is a stock practice of the trade, attributed to no
// one and named by no technical term.
//
// Families: attribute (1, 5, 8), reformulate (2, 3, 7, 9), locate (4),
// infer (6), weigh (10). The first hearing yields 1 to 5; the second 6 to 10,
// which need his view held apart from what he concedes.

const INTERVIEW =
  'UNE JOURNALISTE : Bonsoir et bienvenue dans « Le Fil des œuvres ». ' +
  'Ce soir, nous entrons dans un atelier où l’on soigne des tableaux, des statues, des objets anciens. ' +
  'Avec une question qui divise les spécialistes comme le public : quand une œuvre a été abîmée, faut-il la réparer sans que cela se voie, ou laisser voir la blessure ? ' +
  'Mon invité est restaurateur de peintures et de sculptures en bois ; il dirige depuis vingt ans l’atelier régional de conservation de Quérimont. ' +
  'Lucien Marsaudon, bonsoir.\n' +
  'UN RESTAURATEUR : Bonsoir.\n' +
  'UNE JOURNALISTE : Commençons par ce que veut le public. Quand on va au musée, on a envie de voir l’œuvre telle que l’artiste l’a voulue, non ? ' +
  'Pas une toile pleine de trous.\n' +
  'UN RESTAURATEUR : C’est le désir le plus naturel, et, euh, je le comprends très bien. Mais il repose sur une illusion. ' +
  'L’œuvre telle que l’artiste l’a voulue, plus personne ne la verra. ' +
  'Les couleurs ont bougé, les vernis ont jauni, le bois a travaillé. ' +
  'Même un tableau qui n’a jamais subi le moindre accident n’est plus celui qui est sorti de l’atelier du peintre il y a trois siècles. ' +
  'Donc la question n’est pas de revenir à l’état d’origine, c’est impossible ; la question, c’est de choisir quel état on présente, et pourquoi. ' +
  'Je le dis souvent à mes stagiaires : restaurer, ce n’est pas rajeunir.\n' +
  'UNE JOURNALISTE : Restaurer, ce n’est pas rajeunir. Mais concrètement, devant une lacune, un morceau de peinture qui manque, qu’est-ce que vous faites ?\n' +
  'UN RESTAURATEUR : Ça dépend de la taille et de l’endroit. ' +
  'Si c’est une petite lacune dans un ciel, on la comble, on la retouche : un trou blanc au milieu du bleu attire l’œil et empêche de regarder le reste. ' +
  'En revanche, si c’est le visage d’un personnage qui a disparu, alors là, je refuse de l’inventer. ' +
  'Je n’ai aucun moyen de savoir quelle expression il avait. ' +
  'Repeindre ce visage, ce serait signer à la place du peintre.\n' +
  'UNE JOURNALISTE : Et dans ce cas, vous laissez le trou ?\n' +
  'UN RESTAURATEUR : Pas tout à fait. On pratique une retouche, euh, qu’on pourrait dire « à deux distances ». ' +
  'À trois mètres, le visiteur voit une surface apaisée, d’un ton neutre, qui ne le gêne pas. ' +
  'À cinquante centimètres, il distingue de fines hachures et comprend qu’il y a là une intervention moderne. ' +
  'L’image se lit, mais on ne trompe personne.\n' +
  'UNE JOURNALISTE : C’est un compromis.\n' +
  'UN RESTAURATEUR : C’est un compromis, oui, et j’assume le mot. ' +
  'Il y a deux manières de mentir avec une œuvre abîmée. La refaire comme neuve, et laisser croire qu’il ne s’est rien passé. ' +
  'Ou bien l’exposer en ruine, et laisser croire que la ruine, c’est l’œuvre.\n' +
  'UNE JOURNALISTE : Justement, il y a aujourd’hui une mode inverse : montrer les fissures, les brûlures, les cicatrices. ' +
  'On parle de l’authenticité de la trace. Vous n’y êtes pas sensible ?\n' +
  'UN RESTAURATEUR : Si, beaucoup, mais à une condition : que la trace raconte quelque chose. ' +
  // INVENTED: the retable of Morvesse, its fire mark and its gutter.
  'Il y a quelques années, nous avons restauré le retable de l’église de Morvesse, une grande pièce de bois sculpté et peint. ' +
  'Il portait deux sortes de dégâts. ' +
  'D’un côté, une longue trace noire de brûlure, laissée par un incendie que les habitants associent à un épisode précis de l’histoire du village. ' +
  'De l’autre, des taches d’humidité, dues à une gouttière mal entretenue pendant des décennies. ' +
  'La brûlure, nous l’avons stabilisée, mais conservée : elle fait partie de la vie de l’objet et de la mémoire du lieu. ' +
  'Les taches, nous les avons atténuées. Une gouttière qui fuit, ce n’est pas de l’histoire, c’est de la négligence.\n' +
  'UNE JOURNALISTE : Mais qui décide de ce qui relève de l’histoire et de ce qui relève de la négligence ? C’est vous ?\n' +
  'UN RESTAURATEUR : Surtout pas moi seul ! Et c’est peut-être le point le plus important : ce choix-là n’est pas technique. ' +
  'Pour le retable, nous avons réuni le conservateur, un historien, l’architecte, et nous avons écouté les habitants, qui avaient beaucoup à dire sur cette brûlure. ' +
  'Le restaurateur apporte un diagnostic et des solutions possibles. Il ne doit pas décider seul de ce qu’une communauté garde en mémoire.\n' +
  'UNE JOURNALISTE : Les restaurateurs n’ont pas toujours eu bonne presse, pourtant. On cite souvent des restaurations anciennes qui ont, disons, défiguré des œuvres.\n' +
  'UN RESTAURATEUR : C’est vrai, et nous passons une partie de notre temps à défaire le travail de nos prédécesseurs : ' +
  'des repeints du dix-neuvième siècle qui recouvrent la peinture originale, des colles qui ont durci et qui font éclater le bois… ' +
  'Ce qui me frappe, c’est que ces gens n’étaient pas des incompétents. ' +
  'Ils étaient sûrs d’avoir raison, avec le goût de leur époque. ' +
  'C’est pour ça que notre règle d’or, aujourd’hui, c’est la réversibilité : tout ce que j’ajoute doit pouvoir être retiré demain, sans dommage pour l’original. ' +
  'Je pars du principe que mes successeurs me jugeront aussi sévèrement que je juge les restaurateurs d’il y a cent cinquante ans.\n' +
  'UNE JOURNALISTE : C’est une forme d’humilité.\n' +
  'UN RESTAURATEUR : C’est surtout de la prudence. Le goût change. Ce qui nous paraît discret aujourd’hui paraîtra peut-être criard dans cinquante ans.\n' +
  'UNE JOURNALISTE : Le public, lui, semble avoir un avis assez net. ' +
  // INVENTED: the Institut Quillardet survey and both of its figures.
  'Selon une enquête de l’Institut Quillardet, six visiteurs de musée sur dix préfèrent voir une œuvre « remise à neuf ». ' +
  'Mais trois sur quatre disent aussi vouloir savoir ce qui a été refait. Ce n’est pas contradictoire ?\n' +
  'UN RESTAURATEUR : Pas du tout, ça me paraît même très sain. Les gens veulent une belle image, et ils veulent la vérité. ' +
  'C’est exactement ce que permet la retouche dont je parlais. ' +
  'Ce qui manque, en général, c’est l’explication. ' +
  'Dans beaucoup de musées, le cartel indique le titre, la date, le nom du peintre, mais jamais ce que l’œuvre a traversé. ' +
  'Moi, je rêve de cartels qui diraient : « ce tableau a été coupé en deux au dix-huitième siècle, puis recousu ». Le visiteur regarderait autrement.\n' +
  'UNE JOURNALISTE : Aujourd’hui, on peut aussi reconstituer une œuvre en image numérique, voir sur une tablette à quoi elle ressemblait. ' +
  'Est-ce que ça ne règle pas le problème ? On laisse l’objet tel quel, et on montre la version complète à l’écran.\n' +
  'UN RESTAURATEUR : C’est un outil formidable pour expliquer, je m’en sers moi-même. Mais il ne remplace pas la restauration, pour une raison simple : ' +
  'une image ne protège rien. ' +
  'Une écaille de peinture qui se soulève, il faut la refixer sur le tableau, sinon elle tombe, et l’écran n’y changera rien. ' +
  'Et puis il y a un risque plus subtil : que le visiteur regarde la tablette au lieu de l’objet. On viendrait au musée pour voir… une image.\n' +
  'UNE JOURNALISTE : Pour finir, si vous deviez résumer votre métier en une phrase ?\n' +
  'UN RESTAURATEUR : Euh… je dirais que je ne travaille ni pour l’artiste, ni pour le goût du public d’aujourd’hui, mais pour l’objet. ' +
  'Mon travail, c’est de le rendre un peu plus solide et un peu plus lisible que lorsqu’on me l’a confié. ' +
  'Le faire durer, et le faire comprendre. Le rendre beau, ça vient après, et parfois ça ne vient pas.\n' +
  'UNE JOURNALISTE : Lucien Marsaudon, merci.\n' +
  'UN RESTAURATEUR : Merci à vous.';

export const CO_PART1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '001'),
  label: 'Compréhension de l’oral · Partie 1',
  prompt:
    'Vous allez entendre deux fois un document.\n' +
    'Vous écoutez une émission de radio consacrée à la restauration des œuvres d’art abîmées.\n' +
    'Vous avez d’abord 3 minutes pour lire les questions. Après la première écoute, ' +
    'vous avez 3 minutes pour commencer à répondre. Après la seconde écoute, ' +
    'vous avez encore 5 minutes pour compléter vos réponses.\n' +
    'Pour les questions à réponse rédigée, répondez avec vos propres mots, en une ou deux phrases.',
  // 180 read + 2 × 394 played + 180 + 300 answering = 1448, rounded up.
  timingS: 1500,
  parts: [
    {
      label: 'Document 1 · entretien',
      playCount: 2,
      readWindowS: 180,
      // ESTIMATED at 175 wpm from the spoken word count; not yet rendered.
      durationS: 394,
      text: INTERVIEW,
      items: [
        // 1 · Attribute · 1.5
        {
          q: 'Que répond le restaurateur à ceux qui veulent voir l’œuvre telle que l’artiste l’a voulue ?',
          opts: [
            'Que cet état premier est perdu, même pour une œuvre jamais accidentée',
            'Que seuls les spécialistes savent encore à quoi ressemblait cet état',
            'Que le public préfère en réalité les œuvres qui gardent leurs blessures',
          ],
          correct: 0,
          why: '« Même un tableau qui n’a jamais subi le moindre accident n’est plus celui qui est sorti de l’atelier » ; « revenir à l’état d’origine, c’est impossible ». Personne, spécialiste compris, ne le verra plus ; l’enquête dit l’inverse de la troisième option.',
          band: 'c1',
          points: 1.5,
        },
        // 2 · Reformulate · 2
        {
          kind: 'short',
          q: 'Pourquoi le restaurateur refuse-t-il de repeindre le visage disparu d’un personnage ?',
          opts: [],
          correct: -1,
          keywords: [
            // No bare 'savoir', 'sait' or 'connai': « il faudrait savoir imiter le style du peintre » met
            // both groups with a reason he never gives. A negated « il ne sait pas » goes to the AI anyway.
            ['invent', 'imagin', 'devin', 'ignor', 'inconnu', 'impossible de savoir', 'impossible de connaitre', 'suppos', 'hypoth', 'aucune trace', 'aucun document', 'aucun moyen', 'aucune idee'],
            ['peintre', 'artiste', 'auteur', 'signer', 'signat', 'a sa place', 'a la place', 'substitu', 'createur', 'falsif', 'trahi', 'tromp', 'mensong', 'faux'],
          ],
          model: 'Parce qu’il ignore quelle expression avait ce visage : le repeindre, ce serait l’inventer et signer à la place du peintre.',
          why: '« Je n’ai aucun moyen de savoir quelle expression il avait. Repeindre ce visage, ce serait signer à la place du peintre. »',
          band: 'c1',
          points: 2,
        },
        // 3 · Reformulate · 2
        {
          kind: 'short',
          q: 'Selon le restaurateur, de quelles deux manières peut-on « mentir » avec une œuvre endommagée ?',
          opts: [],
          correct: -1,
          keywords: [
            // The first lie: the work redone as new, as if nothing had happened.
            ['neuf', 'neuve', 'rien ne s est passe', 'rien passe', 'intact', 'comme avant', 'effac', 'rajeun', 'refai', 'refaire', 'dissimul', 'cach'],
            // The second: the ruin shown as the work. No 'expos' or 'montr' (« en exposant une copie »
            // met it); no bare 'degats', 'cicatric' or 'blessure' (« en la refaisant à neuf pour effacer
            // ses cicatrices » is the FIRST lie twice over and met both groups).
            ['ruine', 'en l etat', 'tel quel', 'telle quelle', 'partie de l oeuvre', 'comme si les degats', 'comme si les blessures', 'comme si les cicatrices', 'comme si c etait l oeuvre', 'etait l oeuvre'],
          ],
          model: 'En la refaisant comme neuve, pour faire croire qu’il ne s’est rien passé, ou en l’exposant en ruine, comme si la ruine était l’œuvre elle-même.',
          why: '« La refaire comme neuve, et laisser croire qu’il ne s’est rien passé. Ou bien l’exposer en ruine, et laisser croire que la ruine, c’est l’œuvre. »',
          band: 'c1',
          points: 2,
        },
        // 4 · Locate · 1.5
        {
          q: 'Pourquoi les deux sortes de dégâts du retable ont-elles été traitées différemment ?',
          opts: [
            'L’une témoignait de l’histoire du lieu, l’autre d’un simple défaut d’entretien',
            'L’une menaçait la solidité du bois, l’autre n’abîmait que son apparence',
            'L’une datait de plusieurs siècles, l’autre était trop récente pour être traitée',
          ],
          correct: 0,
          why: 'La brûlure « fait partie de la vie de l’objet et de la mémoire du lieu » ; la gouttière, « c’est de la négligence ». Ni la solidité ni l’âge des dégâts ne sont invoqués.',
          band: 'c1',
          points: 1.5,
        },
        // 5 · Attribute · 2
        {
          kind: 'short',
          q: 'D’après le restaurateur, à qui revient le choix des traces à garder sur une œuvre, et pour quelle raison ?',
          opts: [],
          correct: -1,
          keywords: [
            // Several people together. No bare 'habitant': « les habitants seuls, c’est leur histoire »
            // is a half-truth (he names a group, not the inhabitants alone).
            ['plusieurs', 'ensemble', 'collecti', 'collegia', 'groupe', 'concert', 'partag', 'commun accord', 'divers', 'differents acteurs', 'pluridisc', 'et les habitants', 'et des habitants', 'avec les habitants', 'avec des habitants', 'et un historien', 'et l historien', 'avec un historien', 'avec l historien', 'avec le conservateur', 'et le conservateur'],
            // No bare 'equipe' above (« le restaurateur et son équipe ») and no bare 'histoire' here
            // (« parce que l’histoire de l’art est complexe » is not his reason).
            ['memoire', 'souvenir', 'histoire du lieu', 'histoire du village', 'histoire locale', 'histoire commune', 'leur histoire', 'communaut', 'identit', 'patrimoine', 'symbol', 'pas technique', 'non technique', 'pas seulement technique', 'depasse la technique', 'pas une question technique'],
          ],
          model: 'Pas au restaurateur seul, mais à plusieurs personnes ensemble (conservateur, historien, architecte, habitants), parce que ce choix touche à la mémoire d’une communauté et qu’il n’est pas technique.',
          why: '« Surtout pas moi seul ! … ce choix-là n’est pas technique » ; « Il ne doit pas décider seul de ce qu’une communauté garde en mémoire. »',
          band: 'c1',
          points: 2,
        },
        // 6 · Infer · 1
        {
          q: 'Comment le restaurateur juge-t-il ceux qui restauraient les œuvres au dix-neuvième siècle ?',
          opts: [
            'Comme des gens compétents, mais trop sûrs du goût de leur temps',
            'Comme des artisans pressés, qui négligeaient les règles du métier',
            'Comme des modèles de prudence dont son métier s’est éloigné',
          ],
          correct: 0,
          why: '« Ces gens n’étaient pas des incompétents. Ils étaient sûrs d’avoir raison, avec le goût de leur époque. » Il ne parle ni de hâte ni de négligence, et c’est lui qui revendique la prudence.',
          band: 'c1',
          points: 1,
        },
        // 7 · Reformulate · 2
        {
          kind: 'short',
          q: 'En quoi consiste la « règle d’or » du restaurateur, et qu’est-ce qui la justifie ?',
          opts: [],
          correct: -1,
          keywords: [
            // The POSSIBILITY of removal, not removal: « tout ce qu’il ajoute doit être définitif, car ses
            // successeurs pourraient l’enlever » and « ses ajouts doivent être retirés » met a bare 'retir'.
            ['pouvoir etre ret', 'pouvoir etre enl', 'pouvoir etre def', 'pouvoir etre supprim', 'peut etre ret', 'peut etre enl', 'puisse etre', 'puissent etre', 'pourra etre', 'pourront etre', 'pouvoir ret', 'pouvoir enl', 'pouvoir def', 'pouvoir annul', 'pouvoir le ret', 'pouvoir les ret', 'pouvoir l enl', 'pouvoir les enl', 'retirable', 'enlevable', 'otable', 'amovible', 'revenir en arriere', 'reversib'],
            // His OWN additions: « il faut enlever les anciennes restaurations, car le goût a changé »
            // met the other two groups and describes something else.
            ['ajout', 'apport', 'ce qu il met', 'ce qu il pose', 'ce qu on met', 'ce qu on pose', 'son intervention', 'ses interventions', 'son propre travail', 'ses propres', 'son travail', 'ses retouches', 'materiaux'],
            ['gout', 'epoque', 'successeur', 'avenir', 'futur', 'plus tard', 'demain', 'jugeront', 'jugera', 'juger', 'erreur', 'tromp', 'evolu', 'mode'],
          ],
          model: 'Tout ce qu’il ajoute doit pouvoir être retiré plus tard sans abîmer l’original, parce que le goût change et que ses successeurs jugeront peut-être son travail comme il juge celui de ses prédécesseurs.',
          why: '« Tout ce que j’ajoute doit pouvoir être retiré demain, sans dommage pour l’original » ; « Le goût change. »',
          band: 'c1',
          points: 2,
        },
        // 8 · Attribute · 2
        {
          kind: 'short',
          q: 'Comment le restaurateur interprète-t-il les deux résultats de l’enquête de l’Institut Quillardet ?',
          opts: [],
          correct: -1,
          keywords: [
            ['belle', 'beau', 'image', 'esthet', 'agreable', 'complet', 'neuf', 'neuve', 'joli'],
            // The truth AS WELL: « le public préfère les belles images à la vérité, ce qui est normal »
            // met a bare 'verite' group. Every form here joins the second wish to the first.
            ['et la verite', 'et veut la verite', 'et veulent la verite', 'aussi la verite', 'aussi savoir', 'aussi connaitre', 'aussi comprendre', 'et savoir', 'veut savoir', 'veulent savoir', 'et la transparen', 'aussi la transparen', 'et une information', 'aussi etre inform', 'et etre inform', 'et l explication', 'aussi une explication', 'et comprendre', 'et ce qui a ete refait', 'aussi ce qui'],
            // His verdict on the pair. No 'a la fois' or 'les deux': « il trouve absurde que le public
            // veuille à la fois une belle image et la vérité » met all three groups. No bare 'concili': « impossible à
            // concilier » met it.
            ['sain', 'compatib', 'conciliabl', 'se concili', 'logique', 'coheren', 'normal', 'legitim', 'comprehensi', 'raisonnab', 'pas contradictoire', 'aucune contradiction', 'nullement contradictoire'],
          ],
          model: 'Il les trouve sains et conciliables : le public veut une belle image et veut aussi la vérité sur ce qui a été refait, ce que permet la retouche visible de près.',
          why: '« Pas du tout, ça me paraît même très sain. Les gens veulent une belle image, et ils veulent la vérité. »',
          band: 'c1',
          points: 2,
        },
        // 9 · Reformulate · 2
        {
          kind: 'short',
          q: 'Pourquoi, selon le restaurateur, une reconstitution numérique ne peut-elle pas remplacer son travail ?',
          opts: [],
          correct: -1,
          keywords: [
            // What the work is for: keeping the object itself from decaying. No 'abim' (« le
            // numérique abîme l’original » met both groups) and no 'proteg' or 'conserv' alone
            // (« le numérique protège mieux l’objet » met both).
            // Reflexive forms only: « le numérique dégrade l’original » and « l’écran fait disparaître
            // l’original » met bare 'degrad' and 'disparai'.
            ['se degrad', 's abim', 'se deterior', 'ecaill', 'souleve', 'refix', 'tomb', 'se perd', 'se fragilis', 'se decoll', 'decolle', 'stabilis', 'consolid'],
            ['objet', 'materi', 'physique', 'original', 'reel', 'peinture', 'tableau', 'oeuvre elle', 'support'],
          ],
          model: 'Parce qu’une image laisse l’objet réel se dégrader : une écaille de peinture qui se soulève doit être refixée sur le tableau lui-même.',
          why: '« Une image ne protège rien. Une écaille de peinture qui se soulève, il faut la refixer sur le tableau, sinon elle tombe. »',
          band: 'c1',
          points: 2,
        },
        // 10 · Weigh · 2
        {
          q: 'Quelle idée résume le mieux la conception que le restaurateur a de son métier ?',
          opts: [
            'Faire durer l’objet et le rendre lisible, la beauté ne venant qu’ensuite',
            'Retrouver le plus fidèlement possible l’intention première de l’artiste',
            'Présenter l’œuvre sous la forme que préfère le public de son temps',
          ],
          correct: 0,
          why: '« Le faire durer, et le faire comprendre. Le rendre beau, ça vient après. » Il travaille « ni pour l’artiste, ni pour le goût du public d’aujourd’hui ».',
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

// ── Document 1 · chronique (DALF-18) · 3 MCQ ───────────────────────────────
//
// INVENTED: the chronicle and its two rules (the reason for the call first;
// thirty seconds at most), the generational contrast. No figure, no outlet, no
// proper noun: the chronicle needs none.

const CHRONICLE =
  'UNE CHRONIQUEUSE : Bonjour à tous. Il y a un geste que nous faisons tous et dont personne ne nous a jamais appris les règles : laisser un message vocal. ' +
  'Et pourtant, des règles, il y en a, et gare à qui les enfreint ! ' +
  'Première règle, la plus sacrée : dire tout de suite pourquoi on appelle. ' +
  'Le message qui se limite à « Bon, euh, c’est moi, rappelle-moi » plonge son destinataire dans l’inquiétude : il imagine aussitôt le pire. ' +
  'Deuxième règle : être bref. Au-delà de trente secondes, on n’écoute plus, on attend la fin. ' +
  'Mais la vraie ligne de partage n’est pas là. Elle passe entre les générations. ' +
  'Pour beaucoup de gens de plus de cinquante ans, le message vocal est une petite lettre : on salue, on donne des nouvelles, on signe, « c’est maman ». ' +
  'Pour beaucoup de jeunes adultes, c’est presque une impolitesse : un appel qu’on n’a pas annoncé, c’est s’imposer dans la journée de l’autre. ' +
  'Eux préfèrent un message écrit, qu’on lit quand on veut. ' +
  'Le paradoxe, c’est que ces mêmes jeunes s’envoient sans arrêt de courtes notes vocales sur leurs messageries. ' +
  'Ce n’est donc pas la voix qui les gêne. ' +
  'C’est l’ordre imposé : un message sur le répondeur, il faut l’écouter jusqu’au bout pour savoir s’il était important, et rappeler au moment choisi par un autre. ' +
  'Alors, si je devais proposer une seule règle à tout le monde, ce serait celle-ci : un message ne doit jamais être plus long que ce qu’il a à dire.';

// ── Document 2 · flash d’information (DALF-19) · 4 MCQ ─────────────────────
//
// INVENTED: the tribunal of Brasquelle, the six-year-old shepherd dog Filou,
// the purchase and vet invoices, the alternate weeks, the ex-partner's month
// to appeal, the association « Foyers à quatre pattes » and its figure (one
// separating household in four owns at least one animal), its advice of a
// signed note when a couple moves in together. The lawyer's two cautions (one
// court's decision does not bind other judges; an appeal is still possible)
// are general statements, consistent with each other and with the flash.

const FLASH =
  'UN JOURNALISTE : Il est dix-huit heures, voici les informations. ' +
  'C’est une décision qui fait parler bien au-delà des salles d’audience. ' +
  'Le tribunal de Brasquelle a décidé hier qu’un chien, après la séparation de ses maîtres, vivrait une semaine chez l’un, une semaine chez l’autre. ' +
  'Une garde alternée, en somme, pour un berger de six ans prénommé Filou. ' +
  'L’ancien compagnon réclamait l’animal pour lui seul, factures d’achat et de vétérinaire à l’appui. ' +
  'Le juge ne s’est pas arrêté à ces papiers. ' +
  'Il a cherché à savoir qui promenait le chien, qui le soignait, qui le gardait pendant les vacances, et il a conclu que l’animal était attaché à ses deux maîtres. ' +
  'L’avocate de l’ancienne compagne salue une décision qui, selon elle, cesse enfin de traiter l’animal comme un objet.\n' +
  'UNE AVOCATE : Pendant longtemps, on se disputait un chien comme on se dispute une voiture : celui qui avait le ticket de caisse gagnait. ' +
  'Ici, le juge a regardé la vie réelle. ' +
  'Mais attention, c’est une décision isolée, celle d’un seul tribunal. Elle ne s’impose pas aux autres juges.\n' +
  'UN JOURNALISTE : Le cas n’a pourtant rien d’exceptionnel. ' +
  // INVENTED: the association and its one-in-four figure.
  'Selon l’association Foyers à quatre pattes, un couple sur quatre qui se sépare possède au moins un animal, ' +
  'et ces conflits arrivent de plus en plus souvent devant les tribunaux. ' +
  'L’association conseille aux couples de régler le sort de l’animal dès qu’ils s’installent ensemble, par un simple écrit signé des deux. ' +
  'L’ancien compagnon dispose d’un mois pour faire appel. Son avocat n’a pas encore fait connaître ses intentions.';

export const CO_PART2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  label: 'Compréhension de l’oral · Partie 2',
  prompt:
    'Vous allez entendre une seule fois plusieurs documents radiophoniques courts.\n' +
    'Pour chaque document, vous avez 50 secondes pour lire les questions, ' +
    'puis vous entendez le document, puis vous avez 50 secondes pour répondre.\n' +
    'Cochez la bonne réponse.',
  // Per extract: 50 read + 88 or 85 played + 50 answer = 373, rounded up.
  timingS: 400,
  parts: [
    {
      label: 'Document 1 · chronique',
      playCount: 1,
      readWindowS: 50,
      // ESTIMATED at 175 wpm from the spoken word count; not yet rendered.
      durationS: 88,
      text: CHRONICLE,
      items: [
        {
          q: 'Pourquoi le message « c’est moi, rappelle-moi » pose-t-il problème, selon la chroniqueuse ?',
          opts: [
            'Il inquiète celui qui l’écoute, faute de dire pourquoi on appelle',
            'Il dépasse la durée qu’un auditeur accepte d’écouter',
            'Il révèle à un éventuel entourage des informations privées',
          ],
          correct: 0,
          why: 'La première règle est de dire « pourquoi on appelle » ; ce message « plonge son destinataire dans l’inquiétude ». Il est très court, et rien n’est dit d’un entourage.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Qu’est-ce qui sépare les générations face au message vocal ?',
          opts: [
            'Les aînés y voient une petite lettre, les plus jeunes une intrusion',
            'Les plus jeunes supportent mal d’entendre une voix enregistrée',
            'Les aînés refusent de communiquer par messages écrits',
          ],
          correct: 0,
          why: '« Le message vocal est une petite lettre » pour les plus de cinquante ans ; pour les jeunes, « c’est s’imposer dans la journée de l’autre ». Le paradoxe montre que la voix ne les gêne pas ; rien n’est dit d’un refus de l’écrit chez les aînés.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Que révèle, selon la chroniqueuse, le goût des jeunes pour les notes vocales ?',
          opts: [
            'Que ce qui les dérange, c’est d’écouter et de rappeler quand un autre l’a décidé',
            'Que leur hostilité au répondeur est une simple mode qui passera',
            'Que leurs messages vocaux sont devenus plus longs que ceux de leurs parents',
          ],
          correct: 0,
          why: '« Ce n’est donc pas la voix qui les gêne. C’est l’ordre imposé » : écouter jusqu’au bout, rappeler « au moment choisi par un autre ». Elles sont « courtes », et aucune mode n’est évoquée.',
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
      durationS: 85,
      text: FLASH,
      items: [
        {
          q: 'Qu’a décidé le tribunal de Brasquelle ?',
          opts: [
            'Que le chien vivra tour à tour chez chacun de ses deux maîtres',
            'Que le chien reviendra à celui qui en avait payé l’achat',
            'Que le chien sera confié à une association le temps du conflit',
          ],
          correct: 0,
          why: '« Une semaine chez l’un, une semaine chez l’autre. » Les factures n’ont pas suffi ; l’association ne garde aucun animal.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Sur quoi le juge s’est-il fondé ?',
          opts: [
            'Sur la part que chacun prenait aux soins et à la vie du chien',
            'Sur les factures d’achat et de vétérinaire présentées au tribunal',
            'Sur la taille et le confort du logement de chacun des deux',
          ],
          correct: 0,
          why: '« Qui promenait le chien, qui le soignait, qui le gardait pendant les vacances. » Il « ne s’est pas arrêté à ces papiers » ; le logement n’est pas évoqué.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Quelle réserve l’avocate exprime-t-elle sur la décision ?',
          opts: [
            'Les autres tribunaux ne sont pas tenus de juger de la même façon',
            'Le juge aurait dû accorder plus de poids aux factures présentées',
            'La garde alternée risque de perturber durablement le chien',
          ],
          correct: 0,
          why: '« C’est une décision isolée… Elle ne s’impose pas aux autres juges. » Elle salue au contraire l’abandon du « ticket de caisse » ; le bien-être du chien en alternance n’est pas discuté.',
          band: 'c1',
          points: 1,
        },
        {
          q: 'Que conseille l’association Foyers à quatre pattes ?',
          opts: [
            'De fixer par écrit le sort de l’animal dès l’installation du couple',
            'De saisir le juge dès les premiers désaccords sur l’animal',
            'De conserver soigneusement toutes les factures liées à l’animal',
          ],
          correct: 0,
          why: '« Régler le sort de l’animal dès qu’ils s’installent ensemble, par un simple écrit signé des deux. » Les deux autres options ne sont pas dites ; les factures sont justement ce que le juge a écarté.',
          band: 'c1',
          points: 1,
        },
      ],
    },
  ],
};
