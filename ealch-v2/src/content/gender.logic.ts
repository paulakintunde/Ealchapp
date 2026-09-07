// How an ending rule about noun gender is MEASURED.
//
// ── Why this is a module and not four lines inside a test ───────────────────
//
// a1.03 "Le genre des noms" states ten rules of the form "nouns ending in -eau
// are masculine, 92% of the time". Every one of those numbers is a claim about
// this repo's corpus, and a claim on a card is validated against nothing: it
// can be typed wrong, it can be right when authored and wrong three batches
// later, and either way the lesson keeps teaching it.
//
// So the measurement lives here, once, and three callers share it:
//
//   ealch-admin/scripts/author-noun-gender-batch.ts   before it writes Postgres
//   ealch-admin/scripts/merge-noun-gender-into-seed.ts  before it writes the seed
//   ealch-v2/src/content/a1-03-genre.test.ts          on every CI run
//
// A test that inlined its own copy would be a second implementation free to
// drift from the one the author checked against, which is exactly how a1.01's
// glossary test came to certify a broken feature. Same reason dictee.logic.ts
// and gloss.logic.ts exist.
//
// ── The population, and why it is narrower than "every gendered item" ───────
//
// An ending rule is a claim about the SHAPE OF A NOUN. Three kinds of corpus row
// carry a `gender` field and cannot support that claim:
//
//   PHRASES.   `une part de gâteau` is feminine because of `part`, not because
//              of `gâteau`. Counted as an -eau row it reads as a counterexample
//              to a rule it never touched. Measured over every gendered item,
//              -eau scores 88%; measured over single-word nouns it scores 92%,
//              and the four "exceptions" the wider count invented were all
//              compounds whose head noun was somewhere else entirely.
//
//   PLURALS.   `les ciseaux` shows `les`, which is the same word for both
//              genders, so the row teaches nothing about the choice and its
//              ending is doing no work.
//
//   NON-NOUNS. Eleven a1 rows carry a `gender` field on a verb or an adjective
//              (`lire`, `écrire`, `marié`, `célibataire`). See the note in
//              a1-03-genre.test.ts: they are reported rather than routed
//              around, and they are excluded here because an infinitive has no
//              gender to be right or wrong about.
//
// The narrowing is deliberately conservative: it drops rows that cannot bear on
// the question, never rows that disagree with the lesson. `l'eau` and `la peau`
// survive it, and they are the two nouns the -eau mission is built on.

/** The article forms a corpus headword may carry in front of the noun. */
const ARTICLE = /^(?:un|une|le|la|les|des|du|de la)\s+|^l['’]/iu;

/** The plural articles. A row showing one of these cannot demonstrate the
 *  masculine/feminine choice, because the learner sees the same word either
 *  way. */
const PLURAL_ARTICLE = /^(?:les|des)\s+/iu;

/** The noun without its article: 'une baguette' -> 'baguette', "l'eau" -> 'eau'.
 *  Lowercased, because a handful of corpus rows are capitalised mid-list
 *  (`Un invité`, `Une voisine`) and an ending is not case-sensitive. */
export function bareNoun(fr: string): string {
  return fr.replace(ARTICLE, '').trim().toLowerCase();
}

/** Does this headword show its article at all?
 *
 *  This is the lesson's reframe expressed as a predicate. 96% of the a1 gendered
 *  corpus already carries one, which is why "learn the article, not the noun" is
 *  a convention being named rather than a convention being proposed. */
export function carriesArticle(fr: string): boolean {
  return ARTICLE.test(fr.trim());
}

/** Is this a plural-only headword, shown with `les` or `des`? */
export function isPluralOnly(fr: string): boolean {
  return PLURAL_ARTICLE.test(fr.trim());
}

/** The minimum a row must be for an ending rule to be measured over it. */
export type GenderRow = {
  id: string;
  kind: string;
  fr: string;
  gender?: 'm' | 'f' | null;
  en?: string;
  tags?: string[];
};

/** Rows that carry a `gender` field they have no business having.
 *
 *  Detected from the gloss and the tags rather than from a hand-typed id list,
 *  so a new one added tomorrow is caught rather than needing this file edited.
 *  An English gloss beginning "to " is an infinitive; the corpus also tags its
 *  own verbs and adjectives, and both signals are used because either alone
 *  misses rows the other catches. */
export function isNotANoun(row: GenderRow): boolean {
  if (/^to\s/i.test(row.en ?? '')) return true;
  return (row.tags ?? []).some((t) => /^(verb|verbs|adjective|adjectives)$/i.test(t));
}

/** The population every ending rule in a1.03 is measured over. See the header. */
export function endingPopulation<T extends GenderRow>(items: readonly T[]): T[] {
  return items.filter(
    (i) =>
      (i.gender === 'm' || i.gender === 'f') &&
      i.kind === 'word' &&
      !isPluralOnly(i.fr) &&
      !isNotANoun(i) &&
      !/\s/.test(bareNoun(i.fr)),
  );
}

export type EndingMeasurement<T> = {
  /** The ending, without its leading hyphen: 'eau'. */
  ending: string;
  /** How many nouns in the population end this way. */
  n: number;
  /** The gender the ending predicts, being whichever is in the majority. */
  predicts: 'm' | 'f';
  /** Percent of the population the prediction gets right, rounded to a whole
   *  number, which is the form the card states. */
  accuracy: number;
  /** The nouns the prediction gets wrong. These are the lesson's counterexamples
   *  and they are not an appendix: a rule taught without one is a rule the
   *  learner will trust in exactly the wrong place. */
  breaks: T[];
};

/**
 * Measure one ending against a corpus.
 *
 * `ending` is matched against the BARE noun, so `-eau` counts `l'eau` and not
 * `une part de gâteau`. Returns null when nothing ends that way, which a caller
 * should treat as a rule with no evidence rather than as a rule at 100%.
 */
export function measureEnding<T extends GenderRow>(
  items: readonly T[],
  ending: string,
): EndingMeasurement<T> | null {
  const pool = endingPopulation(items).filter((i) => bareNoun(i.fr).endsWith(ending));
  if (!pool.length) return null;
  const masc = pool.filter((i) => i.gender === 'm');
  const fem = pool.filter((i) => i.gender === 'f');
  const predicts: 'm' | 'f' = masc.length >= fem.length ? 'm' : 'f';
  const hit = predicts === 'm' ? masc.length : fem.length;
  return {
    ending,
    n: pool.length,
    predicts,
    accuracy: Math.round((hit / pool.length) * 100),
    breaks: pool.filter((i) => i.gender !== predicts),
  };
}
