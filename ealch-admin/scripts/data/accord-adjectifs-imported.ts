// The imported half of a2.03, and the only place a repaired or supplied
// respelling is applied.
//
// accord-adjectifs-rows.gen.ts is a RECORDED READ of Postgres: it holds what the
// database said on the day the manifest was regenerated, byte for byte, and
// nothing in it is edited by hand. This file is the layer between that record
// and a screen.
//
// ── WHY A LAYER IS NEEDED AT ALL ──────────────────────────────────────────
//
// SIX OF THE TWENTY-THREE CARRIED ROWS ARE REPAIRED AND TWO MORE GAIN A
// RESPELLING THEY NEVER HAD. `displayRespell()` is the only function any screen
// may call for an imported respelling. A screen reading `row.respell` straight
// off the manifest would print `dahn-zhuh-RUH` while Postgres held
// `dahⁿ-zhuh-RUH`, and would print nothing at all for the two sportif sentences.
//
// The six divide three ways and the split matters, because the guard for each is
// different (corrections §6, and invariants §3):
//
//   VISIBLE     1   `crème` KREHM. The checker FLAGS it and it is a FALSE
//                   POSITIVE: there is no nasal vowel in the word. Invariants §3
//                   gives the fix for the identical `jaune`/`ZHOHN` case and it
//                   is to drop the H, never to add a superscript.
//   INVISIBLE   4   dangereux, nombreux, impulsif, vert foncé. Real plain-n
//                   violations the checker cannot see, because the nasal is
//                   followed by a consonant inside the token.
//   HOUSE       1   `heureuse` eu-REUZ against `heureux` uh-RUH. Not a nasal at
//                   all, and the two sit one above the other on the family
//                   screen where the stem has to be the same two letters.
//
// ── THE THREE ADJECTIVES THAT ARE NOT HERE, THOUGH THEY EXIST ─────────────
//
// `courageux`, `actif` and `turquoise` are all published, respelled, ungendered
// rows. There is no accessor for any of them in this file, because they are the
// three the last mission before the exam hands over cold. An accessor would be
// an accessor for the one thing this lesson must not show, and the batch asserts
// the absence in both directions.
//
// ── AND THE THREE HEADWORDS THAT ARE AUTHORED RATHER THAN IMPORTED ────────
//
// `sportif`, `sportive` and `sérieuse` do not exist at any status in any theme.
// Corrections §2 lists the first two; the third is a2.03's own finding. They are
// in the corpus, not here, and a2.17 imports all three from there.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import {
  CARRIED_IDS, EVIDENCE_ROW_IDS, FAMILY_MEASURED, IMPORTABLE_IDS,
  IMPORTED_EVIDENCE_ROWS, IMPORTED_NAMING_ROWS, NAMING_ROW_IDS,
  READ_ONLY_ROWS, SOURCE_THEMES,
} from './accord-adjectifs-rows.gen.ts';
import { ALL_REPAIRS, RESPELL_ADDITIONS, UNSEEN_MASCULINES, type Repair } from './accord-adjectifs-corpus.ts';

/** Every IMPORTABLE row, by id. The read-only rows are deliberately NOT in here:
 *  nothing that iterates the imports may reach them. */
export const IMPORTED_BY_ID: Map<string, Item> = new Map(
  [...IMPORTED_NAMING_ROWS, ...IMPORTED_EVIDENCE_ROWS].map((r) => [r.id, r]),
);

/** Every id this lesson may put in `itemIds`. */
export const IMPORTED_IDS: string[] = [...IMPORTABLE_IDS];

export { SOURCE_THEMES, CARRIED_IDS, READ_ONLY_ROWS, FAMILY_MEASURED };

const must = (id: string): Item => {
  const r = IMPORTED_BY_ID.get(id);
  if (!r) throw new Error(`a2.03: ${id} is not an importable row. Regenerate the manifest, or stop quoting it.`);
  return r;
};

export const importedFr = (id: string): string => must(id).fr;
export const importedEn = (id: string): string => must(id).en ?? '';

/** THE ONLY FUNCTION A SCREEN MAY CALL FOR AN IMPORTED RESPELLING.
 *
 *  It applies the repairs AND the supplied respellings, so a screen can never
 *  disagree with what the batch has written into Postgres. a2.14 §5 found two
 *  copies of a respelling one file apart with nothing comparing them; here there
 *  is one function and the batch, the merge and the test all read it. */
export function displayRespell(id: string, repairs: readonly Repair[] = ALL_REPAIRS): string {
  let s = must(id).respell ?? '';
  if (!s) {
    const add = RESPELL_ADDITIONS.find((a) => a.id === id);
    if (add) return add.to;
    return '';
  }
  for (const r of repairs) if (r.id === id) s = s.split(r.from).join(r.to);
  return s;
}

/** An imported row as a card. `note` carries the respelling and the gloss.
 *
 *  e584bd8 taught MissionRich to draw `respell` and `en` on an `lg` groupDrill
 *  card as well, with `note` winning when it is present, so passing them is no
 *  longer the trap a2.13 and a2.14 both shipped. What still has to hold is that
 *  a card puts SOMETHING under the French. */
export const importedCard = (id: string) => {
  const r = displayRespell(id);
  const gloss = importedEn(id);
  return { fr: importedFr(id), itemId: id, note: [r ? `[${r}]` : '', gloss].filter(Boolean).join(' · ') };
};

/* ── The naming forms ───────────────────────────────────────────────────── */

const NAMING_ID = new Map(NAMING_ROW_IDS);

/** The row id for one of the twenty-one imported adjectives. THROWS on anything
 *  this lesson did not import, which is the guard that keeps the corpus honest:
 *  a screen cannot invent a headword, and in particular it cannot reach for
 *  `courageux`, `actif` or `turquoise`. */
export const namingId = (word: string): string => {
  const id = NAMING_ID.get(word);
  if (!id) {
    const extra = UNSEEN_MASCULINES.includes(word)
      ? ` "${word}" is one of the three adjectives the exam gives cold and it must appear on no teaching card.`
      : '';
    throw new Error(`a2.03: no imported row for "${word}".${extra}`);
  }
  return id;
};
export const namingCard = (word: string) => importedCard(namingId(word));
export const namingRespell = (word: string) => displayRespell(namingId(word));
export const NAMING_WORDS: string[] = NAMING_ROW_IDS.map(([v]) => v);

/* ── The two sportif sentences ──────────────────────────────────────────── */

const EVIDENCE_ID = new Map(EVIDENCE_ROW_IDS);

export const evidenceId = (frText: string): string => {
  const id = EVIDENCE_ID.get(frText);
  if (!id) throw new Error(`a2.03: no evidence row for ${JSON.stringify(frText)}`);
  return id;
};
export const evidenceCard = (frText: string) => importedCard(evidenceId(frText));
export const EVIDENCE_FR: string[] = EVIDENCE_ROW_IDS.map(([v]) => v);
export const EVIDENCE_IDS: string[] = EVIDENCE_ROW_IDS.map(([, id]) => id);

/* ── The -eux family, in the order the bank shows them ──────────────────── */

/** The eight -eux adjectives this lesson can put on a screen, head first.
 *  `courageux` is NOT here and that is the whole point of it. */
export const EUX_FAMILY: readonly string[] = [
  'sérieux', 'heureux', 'joyeux', 'curieux', 'généreux', 'dangereux', 'nombreux',
];

/** The -if family, which is one imported row wide. Corpus header item 8: the
 *  home theme holds twenty-five -eux headwords and one -if. `sportif` and
 *  `sportive` are authored; `actif` is the cold one. */
export const IF_FAMILY: readonly string[] = ['impulsif', 'naïf'];

/** The invariable colours, split by whether a1.13 released them. */
export const INVARIABLE_KNOWN: readonly string[] = ['marron', 'orange'];
export const INVARIABLE_NEW: readonly string[] = ['kaki', 'crème', 'bleu marine', 'bleu clair'];
/** The regular colour that has to stand beside the invariable one, or the class
 *  reads as the rule failing rather than as a class. */
export const REGULAR_COLOUR: readonly string[] = ['vert', 'verte'];
