// Link the 17 unreachable reference sheets from the mission each belongs to.
//
// Sections are declared with NAMED CONSTANTS (`const FOURMOVES = 's02-fourmoves'`)
// as often as with literals, so a grep for `id: 's02-fourmoves'` finds nothing
// and the file looks stale when it is not. This resolves the constant first.
//
// Usage: tsx orch-link-sheets.mts [--write]
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const WRITE = process.argv.includes('--write');
const DIR = 'scripts/data';

/** sheet id -> the mission that should open it. Chosen against real titles. */
const LINKS: [string, string][] = [
  ['sheet.a2.03.patterns', 's04-grid'],
  ['sheet.a2.04.lieu', 's03-four'],
  ['sheet.a2.16.forms', 's04-grid'],
  ['sheet.a2.17.adverbes', 's07-chain'],
  ['sheet-a2-22-pronominaux', 's05-persons'],
  ['sheet.a2.30.parcours', 's02-fourmoves'],
  ['sheet-huit', 's04-grid'],
  ['sheet-six', 's09-table'],
  ['sheet.sons.05.pairs', 's08-pairs'],
  ['sheet.sons.05.circonflexe', 's07-circonflexe'],
  ['sheet.sons.05.notation', 's02-goals'],
  ['sheet.sons.06.h', 's05c-ghost'],
  ['sheet.sons.06.why', 's03-anchors'],
  ['sheet.sons.06.notation', 's02-goals'],
  ['sheet-rhythm', 's03-anchors'],
  ['sheet.sons.10.states', 's04-rule'],
  ['sheet.sons.10.sounds', 's08-trap-sound'],
];

const files = readdirSync(DIR).filter((f) => f.endsWith('-lesson.ts'));
let done = 0;
const failed: string[] = [];

for (const [sheet, section] of LINKS) {
  // The file that DEFINES this sheet is the lesson's file.
  const host = files.find((f) => readFileSync(`${DIR}/${f}`, 'utf8').includes(`'${sheet}'`));
  if (!host) { failed.push(`${sheet}: no source file defines it`); continue; }
  const path = `${DIR}/${host}`;
  let src = readFileSync(path, 'utf8');

  if (src.includes(`sheetId: '${sheet}'`)) { done++; continue; }

  // Resolve the section id: a literal, or the constant that holds it.
  const constName = new RegExp(`const\\s+([A-Z0-9_]+)\\s*=\\s*'${section.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`).exec(src)?.[1];
  const token = constName ?? `'${section}'`;

  // Insert beside the id, on the same declaration. Property order is free.
  const re = new RegExp(`(id:\\s*${constName ? constName : `'${section.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}'`}\\s*,)`);
  if (!re.test(src)) { failed.push(`${sheet}: ${host} has no "id: ${token}," to attach to`); continue; }
  src = src.replace(re, `$1 sheetId: '${sheet}',`);
  if (WRITE) writeFileSync(path, src);
  console.log(`  ${host.padEnd(32)} ${sheet.padEnd(28)} -> ${section} (via ${constName ?? 'literal'})`);
  done++;
}

console.log(`\n${WRITE ? 'WROTE' : 'DRY RUN'} | linked ${done} of ${LINKS.length}`);
for (const f of failed) console.log('  FAILED ' + f);
