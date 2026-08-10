// Every corpus id a1.15 DISPLAYS but does not author, grouped by the job it
// does on a screen. Kept in its own file because both the manifest generator
// and the corpus file need it and neither should own it.
//
// ── Read the id convention off the theme, do not carry one in ──────────────
//
// Three themes, three conventions, and a1.15's is a third distinct one:
//
//   couleurs   headwords in fr.sons.couleurs.*, sentences in fr.a1.couleurs.*
//   muettes    headwords bare, no article on the `fr`
//   famille    headwords AND sentences share ONE prefix, fr.a1.famille.*
//
// Verified against Postgres 2026-08-06 (pnpm corpus:probe --theme famille):
// fr.a1.famille.001-.234 contiguous, no gaps, and the block runs headwords
// .001-.082, phrases and sentences .083-.234 with no prefix change at the
// boundary. So this lesson authors into fr.a1.famille.235+ for BOTH kinds and
// does not import couleurs' split.

/** Grouped so a mistake shows up as a missing group rather than a missing line. */
export const WANTED: Record<string, string[]> = {
  // The twelve where the article matches the actual person. Six pairs, and the
  // pairing is the teaching: each row's partner is the same relationship in the
  // other gender, so the two columns of the tapTable ARE the two articles.
  'the six matched pairs': [
    'fr.a1.famille.001', // le père
    'fr.a1.famille.002', // la mère
    'fr.a1.famille.003', // le frère
    'fr.a1.famille.004', // la sœur
    'fr.a1.famille.015', // le fils
    'fr.a1.famille.016', // la fille
    'fr.a1.famille.024', // l'oncle
    'fr.a1.famille.025', // la tante
    'fr.a1.famille.026', // le cousin
    'fr.a1.famille.027', // la cousine
    'fr.a1.famille.028', // le neveu
    'fr.a1.famille.029', // la nièce
  ],

  // The generations either side, and the word for the whole thing.
  'grandparents, parents and the family itself': [
    'fr.a1.famille.013', // la famille
    'fr.a1.famille.014', // les parents        m plural over a mixed group
    'fr.a1.famille.021', // la grand-mère      respell repaired
    'fr.a1.famille.022', // le grand-père      respell repaired
    'fr.a1.famille.023', // les grands-parents respell repaired
    'fr.a1.famille.030', // le petit-fils
    'fr.a1.famille.031', // la petite-fille
  ],

  // Married, and the two rows the double-meaning mission is built on.
  'husband and wife': [
    'fr.a1.famille.017', // le mari
    'fr.a1.famille.018', // la femme           wife AND woman. respell repaired.
  ],

  // Where the matching rule stops. Shipped WITH the rule, never after it.
  'where the rule stops': [
    'fr.a1.famille.019', // le bébé            m whatever the baby is
    'fr.a1.famille.020', // l'enfant           respell repaired
  ],

  // Step and in-law. The half most likely to be trimmed later, so the test
  // asserts each of these by name.
  'the extended set': [
    'fr.a1.famille.032', // le beau-père
    'fr.a1.famille.033', // la belle-mère
    'fr.a1.famille.036', // le demi-frère
    'fr.a1.famille.037', // la demi-sœur
  ],

  // Sentences already published in the theme, doing work no authored row would
  // do better. .006 is the avoir count the brief asks for and it already exists.
  'sentences that already exist': [
    'fr.a1.famille.005', // Ma mère s'appelle Marie.
    'fr.a1.famille.006', // J'ai deux frères et une sœur.
    'fr.a1.famille.010', // Mon frère a dix ans.
    'fr.a1.famille.083', // Mon frère et ma sœur habitent à Lyon.
  ],

  // The one row from outside famille. sons.06 owns it and its note already
  // points at `fils`; the two have never been on one screen.
  'the thread, from sons.06': [
    'fr.sons.muettes.058', // fil
  ],
};

export const WANTED_IDS: string[] = Object.values(WANTED).flat();
