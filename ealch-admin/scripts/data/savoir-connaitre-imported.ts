// The imported half of a2.14, and the one place a repaired respelling is
// applied.
//
// savoir-connaitre-rows.gen.ts is a RECORDED READ of Postgres: it holds what the
// database said on the day the manifest was regenerated, byte for byte, and
// nothing in it is edited by hand. This file is the layer between that record
// and a screen.
//
// ── WHY A LAYER IS NEEDED AT ALL ──────────────────────────────────────────
//
// ONE THING STANDS BETWEEN THE STORED VALUE AND THE DISPLAYED ONE, and it is
// not a nasal repair. This is the first build in the band with none of those:
// all twelve imported rows carry correct nasals already, because eight of them
// come out of `verbes-essentiels` and `muettes`, which a2.01 and the sons band
// went through before this lesson existed.
//
// What it does have is a STEM repair. `connaître` is stored as `koh-NETR` and
// this lesson prints the naming form directly above `koh-NEH`, so the stored
// value shows a vowel changing where the spelling shows nothing changing. The
// repair is `koh-NEHTR`, which is also the corpus majority and matches the
// `reconnaître` row on the same screen. It is NOT a rule violation and the
// corpus header says so in as many words; invariants §9 is being departed from
// deliberately and for a teaching reason, which is a higher bar than tidiness.
//
// `repairedRespell()` is the only function any screen may call for an imported
// respelling. A screen reading `row.respell` straight off the manifest would
// print `koh-NETR` while Postgres held the repaired form, which is precisely the
// drift a2.12 found in its own merge one layer down.
//
// ── THE RULE THIS FILE ENFORCES ───────────────────────────────────────────
//
// EVERY NAMING FORM IN THIS LESSON IS IMPORTED. Not one is authored. Sixth A2
// build in a row, and corrections §2 predicted it.
//
// AND THE REFUSED ROWS HAVE NO ACCESSOR AT ALL. fr.sons.liaisons.057 holds
// `koh-NEHS`, which is the value this build ships for `connaissent`, and it is
// still refused because its respelling carries U+203F. The house form was read
// off it and the row was left where it is. There is no function here that could
// put it on a screen.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import {
  EVIDENCE_ROW_IDS, FAMILY_ROW_IDS, FRAME_ROW_IDS, IMPORTABLE_IDS,
  IMPORTED_EVIDENCE_ROWS, IMPORTED_FAMILY_ROWS, IMPORTED_FRAME_ROWS,
  IMPORTED_SAVOIR_EVIDENCE_ROWS, IMPORTED_SKILL_ROWS, IMPORTED_VERB_ROWS,
  READ_ONLY_ROWS, SKILL_ROW_IDS, SOURCE_THEMES, VERB_ROW_IDS,
  CIRCUMFLEX_MEASURED,
} from './savoir-connaitre-rows.gen.ts';
import { ALL_REPAIRS, type Repair, type Verb } from './savoir-connaitre-corpus.ts';

/** Every imported row, by id. The read-only rows are deliberately NOT in here:
 *  nothing that iterates the imports may reach them. */
export const IMPORTED_BY_ID: Map<string, Item> = new Map(
  [...IMPORTED_VERB_ROWS, ...IMPORTED_FRAME_ROWS, ...IMPORTED_SKILL_ROWS,
    ...IMPORTED_FAMILY_ROWS, ...IMPORTED_EVIDENCE_ROWS, ...IMPORTED_SAVOIR_EVIDENCE_ROWS]
    .map((r) => [r.id, r]),
);

/** Every id this lesson may put in `itemIds`. */
export const IMPORTED_IDS: string[] = [...IMPORTABLE_IDS];

export { SOURCE_THEMES, READ_ONLY_ROWS, CIRCUMFLEX_MEASURED };

const must = (id: string): Item => {
  const r = IMPORTED_BY_ID.get(id);
  if (!r) throw new Error(`${unitRef('a2.14')}: ${id} is not an imported row. Regenerate the manifest, or stop quoting it.`);
  return r;
};

/** The French of an imported row. */
export const importedFr = (id: string): string => must(id).fr;
/** Its English gloss. */
export const importedEn = (id: string): string => must(id).en ?? '';

/** THE ONLY FUNCTION A SCREEN MAY CALL FOR AN IMPORTED RESPELLING. */
export function repairedRespell(id: string, repairs: readonly Repair[] = ALL_REPAIRS): string {
  let s = must(id).respell ?? '';
  if (!s) return '';
  for (const r of repairs) if (r.id === id) s = s.split(r.from).join(r.to);
  return s;
}

/** An imported row as a groupDrill item, respelling already repaired.
 *
 *  `respell` AND `en` ARE NOT PASSED, and that is not an omission. The `lg`
 *  groupDrill branch in MissionRich.tsx:439 draws `fr`, `ipa` and `note` and
 *  nothing else; schema.ts:899 records that `respell`, `en` and `silent` are the
 *  XL card's lines. Every groupDrill in this lesson is `lg`, so passing them
 *  puts a bare French sentence on the screen with no pronunciation and no
 *  meaning. Found by a2.13's device pass on a Pixel 6, after v1 had shipped.
 *
 *  Both ride in `note`, which the `lg` branch does draw. */
export const importedCard = (id: string) => {
  const r = repairedRespell(id);
  const gloss = importedEn(id);
  return { fr: importedFr(id), itemId: id, note: [r ? `[${r}]` : '', gloss].filter(Boolean).join(' · ') };
};

/* ── The two naming forms ───────────────────────────────────────────────── */

const VERB_ID = new Map(VERB_ROW_IDS);

/** The row id for one of the two verbs. */
export const verbId = (v: Verb | string): string => {
  const id = VERB_ID.get(String(v));
  if (!id) throw new Error(`${unitRef('a2.14')}: ${v} is not one of the two naming forms`);
  return id;
};

/** A naming form as a card. */
export const verbCard = (v: Verb | string) => importedCard(verbId(v));

/* ── The frames, the skills and the family ──────────────────────────────── */

const FRAME_ID = new Map(FRAME_ROW_IDS);
const SKILL_ID = new Map(SKILL_ROW_IDS);
const FAM_ID = new Map(FAMILY_ROW_IDS);

/** The row id for a frame complement (`nager`, `Paris`) or for `pouvoir`. */
export const frameId = (word: string): string => {
  const id = FRAME_ID.get(word);
  if (!id) throw new Error(`${unitRef('a2.14')}: ${JSON.stringify(word)} is not a frame complement`);
  return id;
};
export const frameCard = (word: string) => importedCard(frameId(word));

/** The row id for one of the two other verbs that go behind savoir. THROWS on a
 *  verb this lesson did not import, which is the guard that keeps the corpus
 *  honest: a screen cannot invent a skill verb. */
export const skillId = (verb: string): string => {
  const id = SKILL_ID.get(verb);
  if (!id) throw new Error(`${unitRef('a2.14')}: "${verb}" is not an imported skill verb. Every verb behind savoir here is imported, never authored.`);
  return id;
};
export const skillCard = (verb: string) => importedCard(skillId(verb));

/** Every imported skill verb, in manifest order. */
export const SKILL_VERBS: string[] = SKILL_ROW_IDS.map(([v]) => v);

/** The family member. ONE, and a2.15 owns the principle. */
export const familyId = (word: string): string => {
  const id = FAM_ID.get(word);
  if (!id) throw new Error(`${unitRef('a2.14')}: ${JSON.stringify(word)} is not the family member this lesson names. There is exactly one and ${unitRef('a2.15')} owns the rest.`);
  return id;
};
export const familyCard = (word: string) => importedCard(familyId(word));

/* ── The published evidence ─────────────────────────────────────────────── */

const EV_ID = new Map(EVIDENCE_ROW_IDS);

/** The row id for a published evidence sentence, looked up by its own French so
 *  a caller cannot cite an id that has moved. */
export const evidenceId = (frText: string): string => {
  const id = EV_ID.get(frText);
  if (!id) throw new Error(`${unitRef('a2.14')}: ${JSON.stringify(frText)} is not imported evidence`);
  return id;
};
export const evidenceCard = (frText: string) => importedCard(evidenceId(frText));

/** Every imported evidence sentence, in manifest order: the two connaître rows
 *  first, then the two savoir ones. */
export const EVIDENCE_FR: string[] = EVIDENCE_ROW_IDS.map(([v]) => v);
export const EVIDENCE_IDS: string[] = EVIDENCE_ROW_IDS.map(([, id]) => id);
