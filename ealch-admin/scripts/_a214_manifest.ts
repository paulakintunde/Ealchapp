/* Regenerates data/savoir-connaitre-rows.gen.ts, the recorded read behind a2.14.
 *
 * TWELVE ROWS OUT OF SIX THEMES. That is a small manifest for this band, and the
 * reason is measured rather than an economy: the corpus holds 214 published
 * sentences with a connaître form and 16 with savoir plus a verb, and THREE of
 * the whole set carry a respelling. One of those three carries U+203F. A row
 * without a respelling reaches a card the learner cannot say, so the importable
 * pool of sentences is TWO.
 *
 * Two consumers need the whole row and not just the id:
 *
 *   1. author-savoir-connaitre-batch.ts verifies the manifest field by field
 *      before it opens a transaction, so a stale manifest cannot put the lesson
 *      ahead of rows nobody has looked at.
 *   2. merge-savoir-connaitre-into-seed.ts CARRIES them into seed.json. The seed
 *      is a CUT and a lesson whose itemIds resolve to nothing renders empty
 *      cards on a device.
 *
 * ── WHAT THIS GENERATOR REFUSES ───────────────────────────────────────────
 *
 * A row carrying a GENDER, because a gendered single-word noun joins a1.03's
 * measured ending population and moves twenty printed figures in
 * a1-03-genre.test.ts. `Paris` is a name and carries none, which is what makes
 * it usable as the connaître frame at all.
 *
 * A row carrying U+203F UNDERTIE in its respelling, because that glyph renders
 * as a low underscore on a Pixel 6. fr.sons.liaisons.057 is the row this check
 * exists for: it is the best plural evidence in the corpus and it is refused.
 *
 * A row whose respelling is missing, because this lesson imports for the
 * respelling and for nothing else.
 *
 * A row whose `fr` is not the string this file claims it is.
 *
 * A row spelling an -aître word FLAT. Measured 2026-08-12: no published row in
 * the corpus does, and the day one appears this build wants to know.
 *
 *     pnpm tsx scripts/_a214_manifest.ts
 */
import './env';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { itemLiteral, unknownPopulatedColumns } from './manifest-item.ts';
import {
  FAMILY_MEMBER, FLAT_SPELLING_SHAPE, FRAMES, NAMING_FORMS, POUVOIR_ID,
  READ_NOT_IMPORTED, VERB_ORDER,
} from './data/savoir-connaitre-corpus.ts';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, 'data/savoir-connaitre-rows.gen.ts');

/** The two naming forms, in the order the learner meets them. Both live in
 *  `verbes-essentiels`, which is where a2.13's three lived too. */
const VERBS: [string, string][] = VERB_ORDER.map((v) => [v, NAMING_FORMS[v].id]);

/** THE TWO FRAME COMPLEMENTS, and the third leg of the trap.
 *
 *  `nager` was reserved for this lesson by a2.13, which picked `arroser` as its
 *  own unseen verb specifically so that `je sais nager` would still be free.
 *  `Paris` is ungendered, respelled, and already carries a `dictation` drill.
 *  `pouvoir` is a2.13's and is imported for one recap card. */
const FRAME: [string, string][] = [
  [FRAMES.savoir.complement, FRAMES.savoir.id],
  [FRAMES.connaître.complement, FRAMES.connaître.id],
  ['pouvoir', POUVOIR_ID],
];

/** The two other verbs that go behind savoir, so the skill sense is not one
 *  verb repeated. Both imported, both respelled, both ungendered. */
const SKILLS: [string, string][] = [
  ['cuisiner', 'fr.a1.routines.109'],
  // a2.13 repaired this one from kohn-DWEER to kohⁿ-DWEER. The repaired value is
  // what Postgres holds now, and this manifest reads whatever is there.
  ['conduire', 'fr.a1.routines.107'],
];

/** The family member, named ONCE for its endings. a2.15 owns the principle. */
const FAMILY: [string, string][] = [[FAMILY_MEMBER.fr, FAMILY_MEMBER.id]];

/** THE ONLY PUBLISHED EVIDENCE IN THE CORPUS, which is the measurement that
 *  shaped this manifest.
 *
 *  Two hundred and thirty published sentences hold a form of one of these two
 *  verbs. THREE carry a respelling. One of the three is fr.sons.liaisons.057,
 *  refused for U+203F. These two are what is left, and they are worth having:
 *  both are connaître landing on a thing, which is half the reframe demonstrated
 *  in rows this lesson did not write.
 *
 *  The savoir half is the elision pair, which is better than it looks:
 *  `Je ne sais pas si c'est l'heure.` is savoir followed by a whole sentence,
 *  respelled, published, and it is the reframe's other half in one row. */
const EVIDENCE: [string, string][] = [
  ['Tout le monde connaît le nom du champion.', 'fr.sons.nasales.110'],
  ['Il connaît la vraie raison de son retard ce matin.', 'fr.sons.voyelles.309'],
];

const SAVOIR_EVIDENCE: [string, string][] = [
  ['Je ne sais pas si c\'est l\'heure.', 'fr.sons.elision.072'],
  ['je ne sais pas', 'fr.sons.elision.033'],
];

/** Rows READ and refused, recorded with the row in front of the reader. */
const REFUSED: [string, string][] = READ_NOT_IMPORTED.map((r) => [r.fr, r.id]);

const IMPORTED = [...VERBS, ...FRAME, ...SKILLS, ...FAMILY, ...EVIDENCE, ...SAVOIR_EVIDENCE];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  const all = [...IMPORTED, ...REFUSED];
  const ids = all.map(([, id]) => id);
  const dupes = ids.filter((x, i) => ids.indexOf(x) !== i);
  if (dupes.length) { console.error(`!! duplicate ids in the manifest: ${dupes.join(', ')}`); process.exit(1); }

  const r = await c.query<Record<string, unknown>>(
    'select *, drills::text[] drills from content_items where id = any($1)', [ids]);
  const by = new Map(r.rows.map((x) => [String(x.id), x]));

  const missing = ids.filter((id) => !by.has(id));
  if (missing.length) { console.error(`!! not in Postgres: ${missing.join(', ')}`); process.exit(1); }

  const unpublished = ids.filter((id) => by.get(id)!.status !== 'published');
  if (unpublished.length) { console.error(`!! not published: ${unpublished.join(', ')}`); process.exit(1); }

  for (const id of ids) {
    const unknown = unknownPopulatedColumns(by.get(id)!);
    if (unknown.length) { console.error(`!! ${id} has populated columns this generator does not emit: ${unknown.join(', ')}`); process.exit(1); }
  }

  /* EVERY ROW IS THE STRING THIS FILE CLAIMS IT IS. */
  for (const [label, id] of all) {
    const x = by.get(id)!;
    if (x.fr !== label) { console.error(`!! ${id} fr is ${JSON.stringify(x.fr)}, expected ${JSON.stringify(label)}`); process.exit(1); }
  }

  /* NO GENDER ON ANYTHING IMPORTED. */
  for (const [label, id] of IMPORTED) {
    const x = by.get(id)!;
    if (x.gender) { console.error(`!! ${id} ${JSON.stringify(label)} carries gender ${JSON.stringify(x.gender)}. It would join a1.03's ending population.`); process.exit(1); }
  }

  /* NO U+203F. fr.sons.liaisons.057 is why this check exists. */
  for (const [label, id] of IMPORTED) {
    const respell = String(by.get(id)!.respell ?? '');
    if (respell.includes('‿')) {
      console.error(`!! ${id} ${JSON.stringify(label)} respells with U+203F UNDERTIE: ${JSON.stringify(respell)}`);
      console.error('   That glyph renders as a low underscore on a Pixel 6. Put the row in READ_NOT_IMPORTED.');
      process.exit(1);
    }
  }

  /* EVERY IMPORT CARRIES A RESPELLING. That is the whole reason it is imported. */
  for (const [label, id] of IMPORTED) {
    if (!String(by.get(id)!.respell ?? '')) {
      console.error(`!! ${id} ${JSON.stringify(label)} has NO respelling. This lesson imports for the respelling; a row without one is a card the learner cannot say.`);
      process.exit(1);
    }
  }

  /* NOBODY SPELLS AN -aître WORD FLAT. */
  for (const [label, id] of all) {
    const x = by.get(id)!;
    for (const s of [String(x.fr), String(x.en ?? '')]) {
      if (FLAT_SPELLING_SHAPE.test(s)) {
        console.error(`!! ${id} ${JSON.stringify(label)} spells an -aître word without its circumflex: ${JSON.stringify(s)}`);
        process.exit(1);
      }
    }
  }

  /* THE CIRCUMFLEX MEASUREMENT, RE-TAKEN so the corpus header's figure is this
     run's rather than a number carried forward on trust. */
  /* NOTE THE WORD BOUNDARIES. A bare substring match reports `préparait` as a
     flat spelling of `paraît`, which is invariants §0's warning arriving in
     person: this build's first pass measured two flat rows and both were
     `préparait`. The real figure is zero. */
  const cir = await c.query<{ n: string }>(
    `select count(*) n from content_items where status='published'
       and fr ~* '(^|[^a-zà-ÿ])[a-zà-ÿ]*aître([^a-zà-ÿ]|$)'`);
  const flat = await c.query<{ n: string }>(
    `select count(*) n from content_items where status='published'
       and fr ~* '(^|[^a-zà-ÿ])(connaitre|connait|reconnaitre|reconnait|paraitre|parait|naitre|maitre)([^a-zà-ÿ]|$)'`);
  console.log(`  circumflex: ${cir.rows[0].n} published rows hold an -aître word, ${flat.rows[0].n} spell one flat`);
  if (Number(flat.rows[0].n) > 0) {
    console.error('!! somebody has published a flat -aître spelling. The circumflex decision in the corpus header is no longer unanimous; re-read it before regenerating.');
    process.exit(1);
  }

  const stamp = new Date().toISOString().slice(0, 10);
  const themes = new Set(IMPORTED.map(([, id]) => String(by.get(id)!.theme)));

  const body = `// GENERATED by scripts/_a214_manifest.ts on ${stamp}. Do not edit by hand.
//
// A recorded read of the ${IMPORTED.length} rows a2.14 imports rather than authors, out of
// ${themes.size} themes, plus the ${REFUSED.length} it reads and refuses.
//
// NOT ONE INFINITIVE IN THIS LESSON IS AUTHORED. Sixth A2 build in a row.
//
// THE MANIFEST IS SMALL BECAUSE THE CORPUS IS. 230 published sentences hold a
// form of savoir or connaître; THREE carry a respelling and one of those three
// carries U+203F. A row without a respelling is a card the learner cannot say,
// so the importable pool of sentences is TWO, and both of them are here.
//
// Regenerate with: pnpm tsx scripts/_a214_manifest.ts

import type { Item } from '../../ealch-v2/src/content/schema.ts';

/** The ${VERBS.length} naming forms this lesson teaches. Both in verbes-essentiels. */
export const IMPORTED_VERB_ROWS: Item[] = [
${VERBS.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The two frame complements and the third leg of the trap. \`nager\` was
 *  reserved for this lesson by a2.13; \`Paris\` is a name and carries no gender. */
export const IMPORTED_FRAME_ROWS: Item[] = [
${FRAME.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The other two verbs that go behind savoir. */
export const IMPORTED_SKILL_ROWS: Item[] = [
${SKILLS.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** reconnaître, named ONCE for its endings. a2.15 owns the principle. */
export const IMPORTED_FAMILY_ROWS: Item[] = [
${FAMILY.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** THE ONLY RESPELLED connaître SENTENCES IN THE CORPUS that do not carry
 *  U+203F. Both are connaître landing on a thing. */
export const IMPORTED_EVIDENCE_ROWS: Item[] = [
${EVIDENCE.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The savoir half of the evidence. The first is savoir followed by a whole
 *  sentence, published and respelled, which is the reframe's other half in a row
 *  this lesson did not write. */
export const IMPORTED_SAVOIR_EVIDENCE_ROWS: Item[] = [
${SAVOIR_EVIDENCE.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** The ${REFUSED.length} rows read and refused. READ ONLY: never carried, never released,
 *  never in itemIds, and named on no screen. */
export const READ_ONLY_ROWS: Item[] = [
${REFUSED.map(([, id]) => itemLiteral(by.get(id)!)).join('\n')}
];

/** verb -> id, in learner order. The only place this pairing is written down. */
export const VERB_ROW_IDS: [string, string][] = [
${VERBS.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];

/** complement -> id. */
export const FRAME_ROW_IDS: [string, string][] = [
${FRAME.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];

/** skill verb -> id. */
export const SKILL_ROW_IDS: [string, string][] = [
${SKILLS.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];

/** family member -> id. */
export const FAMILY_ROW_IDS: [string, string][] = [
${FAMILY.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];

/** evidence sentence -> id, both verbs. */
export const EVIDENCE_ROW_IDS: [string, string][] = [
${[...EVIDENCE, ...SAVOIR_EVIDENCE].map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];

/** And the refused pairing, kept apart so nothing can iterate both by accident. */
export const READ_ONLY_ROW_IDS: [string, string][] = [
${REFUSED.map(([v, id]) => `  [${JSON.stringify(v)}, ${JSON.stringify(id)}],`).join('\n')}
];

/** Every id this lesson may put in \`itemIds\`. The refused rows are deliberately
 *  absent, and the batch asserts that absence. */
export const IMPORTABLE_IDS: string[] = [
${IMPORTED.map(([, id]) => `  ${JSON.stringify(id)},`).join('\n')}
];

/** The themes these rows came out of. */
export const SOURCE_THEMES: string[] = ${JSON.stringify([...themes].sort())};

/** The circumflex, re-measured on the day this manifest was generated. */
export const CIRCUMFLEX_MEASURED = { withCircumflex: ${cir.rows[0].n}, flat: ${flat.rows[0].n}, date: ${JSON.stringify(stamp)} };
`;
  writeFileSync(OUT, body, 'utf8');
  console.log(`  wrote ${OUT}`);
  console.log(`  ${VERBS.length} naming, ${FRAME.length} frame, ${SKILLS.length} skills, ${FAMILY.length} family, ${EVIDENCE.length + SAVOIR_EVIDENCE.length} evidence, ${REFUSED.length} refused`);
  console.log(`  ${IMPORTED.length} imported out of ${themes.size} themes: ${[...themes].sort().join(', ')}`);
  for (const [label, id] of IMPORTED) {
    const x = by.get(id)!;
    console.log(`    ${String(label).slice(0, 46).padEnd(48)} ${id.padEnd(34)} respell=${(x.respell as string | null) ?? '(none)'}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
