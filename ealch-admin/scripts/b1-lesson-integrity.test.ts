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

/** Lessons whose chapter art has not been drawn yet. A ref with no art makes
 *  RichImage render null and the card draw blank, so this is real debt, not a
 *  false alarm — but it is debt that arrives the moment a lesson is authored
 *  and clears when the art batch runs. Named here so a lesson that LOSES its
 *  art still fails, which a blanket skip would hide.
 *
 *  EMPTY since 2026-09-25: the 110 openers for b1.15 to b1.24 landed and are
 *  registered. Add a lesson here when it is authored ahead of its art, and
 *  delete it when the art lands. */
const ART_PENDING = new Set<string>(['b2.01', 'b2.02', 'b2.03', 'b2.04']);

const LESSONS: [string, string][] = [
  ['b1.01', 'imparfait-formation'], ['b1.02', 'imparfait-usage'],
  ['b1.03', 'pc-imparfait'], ['b1.04', 'pc-imparfait-paires'],
  ['b1.05', 'futur-simple'], ['b1.06', 'futur-irregulier'],
  ['b1.07', 'futur-usage'], ['b1.08', 'conditionnel-present'],
  ['b1.09', 'politesse'], ['b1.10', 'si-clauses'], ['b1.11', 'qui-que'],
  ['b1.12', 'dont-ou'], ['b1.13', 'lequel-ce-qui'], ['b1.14', 'subjonctif-formation'],
  ['b1.15', 'subjonctif-declencheurs'], ['b1.16', 'subjonctif-infinitif'], ['b1.17', 'ordre-pronoms'], ['b1.18', 'voix-passive'],
  ['b1.19', 'discours-indirect'], ['b1.20', 'negation-avancee'], ['b1.21', 'inversion'],
  ['b1.22', 'cest-il-est'], ['b1.23', 'tout'], ['b1.24', 'meme'],
  ['b1.25', 'registres'], ['b1.26', 'tu-ou-vous'], ['b1.27', 'expressions-corps'], ['b1.28', 'expressions-animaux'], ['b1.29', 'expressions-couleurs'],
  ['b1.30', 'coordination'], ['b1.31', 'subordination'], ['b1.32', 'concession'], ['b1.33', 'environnement'], ['b1.37', 'strategies-lecture'],
  ['b1.34', 'medias'], ['b1.35', 'emotions'], ['b1.36', 'affaires'], ['b1.38', 'strategies-ecoute'], ['b1.39', 'courriels-lettres'],
  ['b2.22', 'style-academique'], ['b2.23', 'argumentation'], ['b2.24', 'lecture-critique'], ['b2.25', 'ecoute-vitesse-reelle'], ['b2.26', 'reunions-negociation'],
  ['b2.01', 'plus-que-parfait'], ['b2.02', 'conditionnel-passe'], ['b2.03', 'si-irreel-passe'], ['b2.04', 'si-mixtes'],
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
    const mod: any = await import(`./data/${id.split(".")[0]}/${slug}-lesson.ts`);
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
    const mod: any = await import(`./data/${id.split(".")[0]}/${slug}-lesson.ts`);
    const L = mod.lessonWithoutTask ? mod.lessonWithoutTask() : mod.LESSON;
    const { req } = registries();
    const refs: string[] = (L.acts ?? []).map((a: any) => a.opener?.imageRef).filter(Boolean);
    ok(refs.length === (L.acts ?? []).length, `${id}: ${(L.acts ?? []).length - refs.length} acts have no opener imageRef`);
    const missing = refs.filter((r) => !req.has(r));
    if (ART_PENDING.has(id)) {
      // Commissioned, not drawn. Assert it is ALL missing rather than some, so
      // a half-registered lesson is not quietly tolerated.
      ok(
        missing.length === refs.length,
        `${id} is in ART_PENDING but ${refs.length - missing.length} of ${refs.length} openers ARE registered. ` +
        `Its art has landed: delete it from ART_PENDING.`,
      );
      return;
    }
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

// A spaced "?" or "!" inside a scene or story BUBBLE makes the French line drop
// its last word on a Pixel 6, while the gloss still translates it in full. The
// rule is bubble-shaped for a reason: BubbleBeat hugs its content and is capped
// at 92%. A scene's choice `prompt` is a full-width title, and a choice's
// right/wrong rows go through ReadingRow, which already carries the
// flex-on-a-wrapper fix, so neither of those can clip.
//
// Getting the FIELD wrong makes this check silently pass: a story's bubbles
// live under `bubbles`, not `lines`. Reading `lines` checked 0 strings across
// all fourteen lessons and reported them clean.
test('no scene or story bubble carries a spaced ? or !', async () => {
  let checked = 0;
  const hits: string[] = [];
  for (const [id, slug] of LESSONS) {
    const mod: any = await import(`./data/${id.split(".")[0]}/${slug}-lesson.ts`);
    const L = mod.lessonWithoutTask ? mod.lessonWithoutTask() : mod.LESSON;
    const spaced = / [?!]/;
    for (const s of L.sections) {
      const strs: [string, string][] =
        s.type === 'scene' ? (s.beats ?? []).filter((b: any) => b.kind === 'bubble').map((b: any, i: number) => [`${id} ${s.id} beat ${i}`, b.fr])
        : s.type === 'story' ? (s.bubbles ?? []).map((b: any, i: number) => [`${id} ${s.id} bubble ${i}`, b.fr])
        : [];
      for (const [where, fr] of strs) {
        if (typeof fr !== 'string') continue;
        checked++;
        if (spaced.test(fr)) hits.push(`${where}: ${JSON.stringify(fr).slice(0, 90)}`);
      }
    }
  }
  ok(checked > 300, `only ${checked} bubble strings found, the walker is reading the wrong field`);
  ok(hits.length === 0, ['these bubbles will drop their last word on a device:', ...hits].join('\n  '));
});
