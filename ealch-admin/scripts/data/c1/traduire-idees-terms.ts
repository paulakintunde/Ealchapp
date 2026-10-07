// c1.22.l1 « Traduire des idées » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER
// BUDGET on a Pixel 6 (labels joined, plus 2 per separator). Labels here run
// 8 to 13 characters; the scratch harness asserts every section's row at 37
// or under, so two 13-character labels never share a row with a third.
//
// C1 LANGUAGE RULE: the body is natural, unsimplified French, addressed as
// « tu », then ONE English line starting « EN: ».
//
// A GLOSSARY OF THE TRANSLATOR'S MOVES: the idea (déverbaliser), the force
// (la force, l’atténuation, la retenue), the thread (le paragraphe,
// explicitation, implicitation), the reader's world (l’équivalence, le
// public), the summary (le résumé) and the revision (le contresens).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './traduire-idees-corpus.ts';

export const TRADUIRE_IDEES_TERMS: Record<string, LessonTerm> = {
  /** Act 2. */
  deverbaliser: {
    term: 'déverbaliser',
    title: 'Garder l’idée, lâcher les mots',
    body: 'Tu lis la phrase anglaise jusqu’au bout, tu la comprends, puis tu fermes l’anglais et tu dis l’idée comme un francophone la dirait. La théorie interprétative de la traduction appelle ce moment la déverbalisation. Rien de l’idée ne se perd ; seule la forme change. EN: Understand, let go of the English words, then say the idea in French.',
    examples: [
      { itemId: E(2209), note: 'la méthode' },
      { itemId: E(2211), note: 'cinq noms anglais, une phrase française' },
      { itemId: E(2219), note: 'le contrôle' },
    ],
  },

  /** The reframe's second element, acts 3 and 4. */
  force: {
    term: 'la force',
    title: 'Combien c’est sûr, combien c’est fort',
    body: 'Un texte ne dit pas seulement quelque chose : il le dit avec une certaine certitude, une certaine fermeté, une certaine politesse. Une traduction juste rend ce degré, ni plus ni moins. Une demande polie reste une demande ; une hypothèse reste une hypothèse. EN: Every statement has a degree of certainty and firmness; keep it.',
    examples: [
      { itemId: E(2201), note: 'une demande, dite poliment' },
      { itemId: E(2231), note: 'ni plus ni moins' },
      { itemId: E(2239), note: 'le contexte décide' },
    ],
  },

  /** Act 3. */
  attenuation: {
    term: 'l’atténuation',
    title: 'Les précautions de l’auteur',
    body: 'L’anglais savant multiplie les précautions : arguably, tend to, may suggest, it may be worth. Le français a les siennes : on peut soutenir que, avoir tendance à, semble indiquer, il serait peut-être utile de. Quand l’anglais en empile trois, une seule suffit souvent au même degré de certitude ; c’est un choix de précision, pas une règle. EN: Render each hedge at the same degree of certainty; one French hedge often does the work of three.',
    examples: [
      { itemId: E(2221), note: 'arguably' },
      { itemId: E(2220), note: 'would seem to suggest' },
      { itemId: E(2226), note: 'trois précautions, une seule' },
    ],
  },

  /** Act 4. */
  retenue: {
    term: 'la retenue',
    title: 'Dire moins pour dire autant',
    body: 'L’anglais aime l’understatement : not entirely convinced, a bit of a problem, not unhappy. Si le français a une litote qui produit le même effet, garde-la. Si ton lecteur la prendrait au pied de la lettre, rends la vraie force, poliment. C’est le contexte, souvent la phrase suivante, qui te le dit. EN: Keep the understatement when French reads it the same way; otherwise convey its real strength, politely.',
    examples: [
      { itemId: E(2238), note: 'une litote qui passe telle quelle' },
      { itemId: E(2234), note: 'quand la suite annule deux ateliers' },
      { itemId: E(2233), note: 'quand le problème est vraiment petit' },
    ],
  },

  /** Act 5. */
  paragraphe: {
    term: 'le paragraphe',
    title: 'Le fil, et ses repères',
    body: 'Un paragraphe anglais part souvent de sa phrase principale et aligne ses arguments. Un lecteur français d’essai ou de rapport attend souvent qu’on annonce le chemin et qu’on marque les articulations. Tu gardes l’ordre des idées et la thèse ; tu ajoutes les repères. C’est une tendance, pas une loi. EN: Keep the order of ideas; add the signposts a French reader often expects.',
    examples: [
      { itemId: E(2250), note: 'l’annonce' },
      { itemId: E(2254), note: 'le principe' },
      { itemId: E(2257), note: 'la conséquence, écrite' },
    ],
  },

  /** Act 6. */
  explicitation: {
    term: 'explicitation',
    title: 'Écrire ce que l’anglais laissait deviner',
    body: 'Vinay et Darbelnet appellent explicitation le procédé qui rend explicite dans la traduction ce qui restait implicite dans l’original, parce que le contexte le disait. Un lien entre deux phrases, un sigle connu des seuls lecteurs anglais. Tu n’ajoutes aucune idée ; trop expliquer est aussi une faute. EN: Spell out what the context made clear in English, and nothing more.',
    examples: [
      { itemId: E(2259), note: 'Rents rose. Families left.' },
      { itemId: E(2262), note: 'un sigle expliqué' },
      { itemId: E(2266), note: 'la limite' },
    ],
  },

  /** Act 7. */
  implicitation: {
    term: 'implicitation',
    title: 'Laisser au contexte ce qu’il dit déjà',
    body: 'Le procédé inverse de l’explicitation : ce que l’anglais dit deux fois (each and every, end result, future plans) ou en plusieurs mots (at this point in time, due to the fact that), le français le dit souvent en un seul. Alléger n’est jamais supprimer une idée. EN: What English says twice or at length, French often says once; never drop an idea.',
    examples: [
      { itemId: E(2270), note: 'each and every' },
      { itemId: E(2273), note: 'end result' },
      { itemId: E(2280), note: 'la limite' },
    ],
  },

  /** Act 8. */
  equivalence: {
    term: 'l’équivalence',
    title: 'Une référence, le même effet',
    body: 'Une image, une unité ou une fête que ton lecteur ne connaît pas se traduit par l’effet qu’elle produit. Quatre gestes : garder (si le lecteur la connaît), expliquer, remplacer par une équivalence, généraliser. N’explique que ce qui gêne la compréhension. EN: Keep, explain, replace or generalise a cultural reference, according to what your reader knows.',
    examples: [
      { itemId: E(2282), note: 'a ballpark figure' },
      { itemId: E(2285), note: 'une image que le français partage' },
      { itemId: E(2286), note: 'des milles aux kilomètres' },
    ],
  },

  /** Act 9. */
  resume: {
    term: 'le résumé',
    title: 'Résumer d’une langue à l’autre',
    body: 'Tu repères dans l’anglais la thèse, les arguments et leur ordre, puis tu écris directement en français, plus court. Les exemples et les anecdotes tombent ; chaque idée reste attribuée à son auteur (selon l’auteure, l’auteure soutient que) ; ton avis n’y entre jamais. EN: Thesis and thread kept, details dropped, every idea attributed, no opinion of yours.',
    examples: [
      { itemId: E(2295), note: 'ce qu’on garde' },
      { itemId: E(2294), note: 'attribuer' },
      { itemId: E(2297), note: 'ce qu’on n’ajoute pas' },
    ],
  },

  /** Act 10. */
  public: {
    term: 'le public',
    title: 'Pour qui, et pour quoi faire',
    body: 'La même idée ne se dit pas de la même façon à des spécialistes, au grand public ou à des adolescents. Tu changes le vocabulaire, la longueur et la distance (vous ou tu) ; tu ne changes jamais le fond, et tu ne promets jamais plus que la source. EN: Adapt vocabulary, length and distance to the audience, never the substance.',
    examples: [
      { itemId: E(2309), note: 'pour des urbanistes' },
      { itemId: E(2310), note: 'pour le grand public' },
      { itemId: E(2311), note: 'pour un compte jeunesse' },
    ],
  },

  /** Act 11. */
  contresens: {
    term: 'le contresens',
    title: 'Les fautes de sens, nommées',
    body: 'Le faux sens rend mal le sens précis d’un mot ; le contresens dit le contraire ou autre chose que l’original ; le non-sens ne veut rien dire. S’y ajoutent l’omission (une idée perdue) et l’ajout (une idée inventée). Deux relectures les attrapent : avec l’anglais, puis sans lui. EN: Wrong shade, wrong meaning, no meaning, omission, addition: two readings catch them.',
    examples: [
      { itemId: E(2320), note: 'le plus grave' },
      { itemId: E(2319), note: 'le sens précis manqué' },
      { itemId: E(2326), note: 'deux relectures' },
    ],
  },
};
