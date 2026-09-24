// Three ways a B1 lesson can be authored correctly, pass every validator, and
// still show the learner nothing. None of them is caught by validateLesson,
// validateDensity or validateItem, and each has actually shipped.
//
//   1. A REFERENCE SHEET NO MISSION POINTS AT. b1.01 shipped with four sheets
//      and zero `sheetId` links, so a learner could never reach any of them.
//      It was the only lesson of fourteen with none, and it sat in the build
//      log as an open item from the pilot until 2026-09-24.
//
//   2. AN ACT OPENER WHOSE IMAGE IS NOT REGISTERED. `lessonImages.ts` resolves
//      an `imageRef` to a require(); a ref with no entry makes RichImage render
//      null and the chapter card draws blank. All 33 wave 3 openers were in
//      this state until the art landed.
//
//   3. A REGISTERED IMAGE WITH NO ALT TEXT. Two maps live in that file, the
//      require registry and the alt registry. A path in one and not the other
//      is a half-registration, and a screen reader gets nothing.
import { ok } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const IMAGES = resolve(HERE, '../../ealch-v2/src/content/lessonImages.ts');

const LESSONS: [string, string][] = [
  ['b1.01', 'imparfait-formation'], ['b1.02', 'imparfait-usage'],
  ['b1.03', 'pc-imparfait'], ['b1.04', 'pc-imparfait-paires'],
  ['b1.05', 'futur-simple'], ['b1.06', 'futur-irregulier'],
  ['b1.07', 'futur-usage'], ['b1.08', 'conditionnel-present'],
  ['b1.09', 'politesse'], ['b1.10', 'si-clauses'], ['b1.11', 'qui-que'],
  ['b1.12', 'dont-ou'], ['b1.13', 'lequel-ce-qui'], ['b1.14', 'subjonctif-formation'],
];

/** The two maps in lessonImages.ts, read as text so the test needs no bundler. */
function registries(): { req: Set<string>; alt: Set<string> } {
  const req = new Set<string>();
  const alt = new Set<string>();
  for (const raw of readFileSync(IMAGES, 'utf8').split('\n')) {
    const line = raw.trim();
    if (!line.startsWith("'lessons/")) continue;
    const path = line.split("'")[1];
    if (line.includes('require(')) req.add(path);
    else alt.add(path);
  }
  return { req, alt };
}

for (const [id, slug] of LESSONS) {
  test(`${id} ${slug}: every reference sheet is reachable from a mission`, async () => {
    const mod: any = await import(`./data/b1/${slug}-lesson.ts`);
    const L = mod.lessonWithoutTask ? mod.lessonWithoutTask() : mod.LESSON;
    const sheets: string[] = (L.sheets ?? []).map((s: any) => s.id);
    ok(sheets.length >= 4, `${id}: ${sheets.length} sheets, the standard is 4 to 5`);

    const linked = new Set(L.sections.map((s: any) => s.sheetId).filter(Boolean));
    const unreachable = sheets.filter((s) => !linked.has(s));
    ok(
      unreachable.length === 0,
      `${id}: no mission carries a sheetId for ${unreachable.join(', ')}, ` +
      `so a learner can never open ${unreachable.length === 1 ? 'it' : 'them'}.`,
    );

    const dangling = [...linked].filter((s) => !sheets.includes(s as string));
    ok(dangling.length === 0, `${id}: sheetId names no such sheet: ${dangling.join(', ')}`);
  });

  test(`${id} ${slug}: every act opener image is registered`, async () => {
    const mod: any = await import(`./data/b1/${slug}-lesson.ts`);
    const L = mod.lessonWithoutTask ? mod.lessonWithoutTask() : mod.LESSON;
    const { req } = registries();
    const refs: string[] = (L.acts ?? []).map((a: any) => a.opener?.imageRef).filter(Boolean);
    ok(refs.length === (L.acts ?? []).length, `${id}: ${(L.acts ?? []).length - refs.length} acts have no opener imageRef`);
    const missing = refs.filter((r) => !req.has(r));
    ok(missing.length === 0, `${id}: not in lessonImages.ts, so the card draws blank: ${missing.join(', ')}`);
  });
}

test('lessonImages: every registered image has alt text, and vice versa', () => {
  const { req, alt } = registries();
  ok(req.size > 150, `only ${req.size} registrations found, the parser is probably broken`);
  const noAlt = [...req].filter((p) => !alt.has(p));
  const noReq = [...alt].filter((p) => !req.has(p));
  ok(noAlt.length === 0, `registered but no alt text (${noAlt.length}): ${noAlt.slice(0, 8).join(', ')}`);
  ok(noReq.length === 0, `alt text but never registered (${noReq.length}): ${noReq.slice(0, 8).join(', ')}`);
});
