/* Generates the REUSED / IMPORTED manifests for a1.25 as a RECORDED READ of
 * Postgres, classified against seed.json, so scripts/data/routine-imported.ts is
 * generated rather than retyped. Modelled on scripts/_pays_manifest.ts.
 *
 *   pnpm tsx scripts/_routine_manifest.ts > scripts/data/_routine-manifest.gen.txt
 *
 * A row published in Postgres AND present in the seed is REUSED (nothing for the
 * merge to carry). A row published in Postgres and ABSENT from the seed is
 * IMPORTED: the merge has to write it or it renders as an empty card.
 *
 * ── WHY THIS LESSON EXPECTS EVERY ROW IN "REUSED" ─────────────────────────
 *
 * `routines` IS in SEED_CUT.themes: 338 published in Postgres, 338 in the seed,
 * measured 2026-08-07. That is the OPPOSITE of a1.22's situation with
 * `pays-et-nationalites` (326 published, 0 in the seed) and of a1.13's with
 * `couleurs`. If any row below lands in IMPORTED, the theme has changed shape
 * since this build and the brief's central claim needs re-measuring.
 *
 * The generator prints both lists either way rather than assuming.
 */
import './env';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(join(here, '../../ealch-v2/src/content/seed.json'), 'utf8')) as {
  items: { id: string; fr: string }[];
};
const inSeed = new Map(seed.items.map((i) => [i.id, i.fr] as const));

const R = (n: string) => `fr.a1.routines.${n}`;

/** Every id a1.25 displays that it does not author. Grouped by the job it does,
 *  so a mistake shows up as a missing group rather than a missing line. */
export const WANTED: Record<string, string[]> = {
  'the parts of the day, and the two that take no article at all': [
    R('002'), // le matin
    R('022'), // l'après-midi
    R('023'), // le soir
    R('024'), // la nuit
    R('035'), // midi      NO ARTICLE. The contrast.
    R('036'), // minuit    NO ARTICLE.
  ],
  'the habit words that mark a day as every day': [
    R('025'), // le week-end
    R('026'), // tous les jours
    R('037'), // tôt
    R('038'), // tard
  ],
  'the morning, in the order it happens': [
    R('010'), // se réveiller
    R('001'), // se lever
    R('011'), // se doucher
    R('012'), // s'habiller
    R('019'), // se brosser les dents
    R('013'), // prendre le petit déjeuner
    R('027'), // le petit déjeuner
    R('014'), // aller au travail
  ],
  'the middle of the day': [
    R('015'), // travailler
    R('016'), // déjeuner
    R('056'), // la pause déjeuner
  ],
  'the evening and the night': [
    R('018'), // rentrer
    R('074'), // préparer le dîner
    R('017'), // dîner
    R('034'), // se reposer
    R('020'), // se coucher
    R('041'), // s'endormir
    R('021'), // dormir
  ],
  'three objects the day is built around': [
    R('091'), // le réveil
    R('101'), // la douche
    R('103'), // le café
  ],
  'the three conjugated frames the corpus already publishes': [
    R('005'), // je me réveille    NO respell, NO voiceflash. Repaired by this build.
    R('006'), // il dort           NO respell, NO voiceflash. Repaired by this build.
    R('007'), // nous prenons      NO respell, NO voiceflash. Repaired by this build.
  ],
  'the day in the first person, published sentences': [
    R('003'), // Je me lève à sept heures.
    R('089'), // Je me lève à sept heures tous les jours.
    R('153'), // Je me réveille à sept heures tous les matins.
    R('144'), // Je me douche avant de m'habiller.
    R('131'), // Je déjeune à midi avec mes collègues.       à midi, no article
    R('178'), // Je me repose le week-end.
  ],
  'the day in the third person, and the articled part of the day in the wild': [
    R('090'), // Le matin, je bois un jus d'orange.          le matin fronted
    R('160'), // Il boit un café noir chaque matin.
    R('154'), // Il se lève tout de suite après le réveil.
    R('164'), // Il arrive au bureau à huit heures.
    R('167'), // Elle rentre à la maison vers dix-huit heures.
    R('134'), // Nous dînons ensemble le soir.               le soir
    R('136'), // Il se couche tôt pendant la semaine.
    R('172'), // Il se couche vers vingt-deux heures.
    R('137'), // Elle éteint la lumière avant de s'endormir.
  ],
  'the second and third persons, which are the only ones with evidence': [
    R('125'), // Tu prends ta douche le matin.
    R('157'), // Tu te douches rapidement avant l'école.
    R('181'), // Nous nous levons tard le dimanche.
  ],
};

/* ── Rows this lesson obviously wants and does NOT name ────────────────────
 *
 *   fr.a1.routines.009  « Le verbe est pronominal, le pronom change avec la
 *                         personne. »
 *
 *     A FRENCH GRAMMAR NOTE STORED AS A LEARNER SENTENCE, in an A1 theme, with
 *     kind 'sentence'. It would be served as a flashcard or a dictée. Reported
 *     by this build and touched by nothing: retiring a published row is a
 *     corpus migration rather than a lesson build. Named in DEFECTS_FOUND.
 *
 *   fr.a1.routines.008  « Je me réveille à huit heures chaque jour. »
 *
 *     Duplicates .153 (« Je me réveille à sept heures tous les matins. ») as a
 *     teaching target while disagreeing with .003 on the hour. One wake-up hour
 *     per lesson; .003 and .089 fix it at seven and .153 agrees.
 *
 *   fr.a1.routines.004  « Elle prend son petit déjeuner le matin. »
 *
 *     Carries a POSSESSIVE (son), which is a1.17's, in a sentence whose job here
 *     would be the articled part of the day. .090 and .160 do that job with no
 *     possessive in them.
 *
 *   fr.a1.routines.028 se laver, .029 se raser, .039 se maquiller, .040 se
 *   peigner, .059 se coiffer, .088 se sécher les cheveux
 *
 *     Six more washing verbs. The morning already has five reflexive verbs and
 *     the brief is explicit that the weight belongs on the article contrast
 *     rather than the word list. They stay published and untaught, which is what
 *     the other 60 rows of this theme also do.
 *
 *   fr.a1.routines.030-033, .045-.055, .060-.087, .092-.100, .104-.120
 *
 *     Chores, bathroom objects, kitchen objects and transport. `la maison` is
 *     a1.26 and `la nourriture` is a1.23; neither is built, and neither is this
 *     lesson's to teach.                                                       */
export const WITHDRAWN_FROM_MANIFEST = [
  'fr.a1.routines.009',
  'fr.a1.routines.008',
  'fr.a1.routines.004',
  'fr.a1.routines.028',
  'fr.a1.routines.029',
];

const esc = (s: string) => JSON.stringify(s);

/** node-pg hands text[] back as the raw literal `{a,b}` on this connection. */
function pgArray(v: unknown): string[] {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',')
    .map((s) => s.trim().replace(/^"|"$/g, ''))
    .filter(Boolean);
}

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const all = Object.values(WANTED).flat();

  const dupes = all.filter((id, i) => all.indexOf(id) !== i);
  if (dupes.length) {
    console.error(`ID NAMED TWICE IN WANTED: ${[...new Set(dupes)].join(', ')}`);
    process.exit(1);
  }

  const r = await c.query<{
    id: string; kind: string; level: string; theme: string; fr: string; en: string;
    ipa: string | null; respell: string | null; gender: string | null; notes: string | null;
    tags: string[]; drills: string[]; version: number; card_type: string | null; status: string;
  }>(
    `select id, kind, level, theme, fr, en, ipa, respell, gender, notes, tags, drills, version,
            card_type, status
       from content_items where id = any($1)`,
    [all],
  );
  const byId = new Map(r.rows.map((x) => [x.id, x] as const));

  const missing = all.filter((id) => !byId.has(id));
  if (missing.length) {
    console.error(`MISSING FROM POSTGRES: ${missing.join(', ')}`);
    process.exit(1);
  }
  const unpublished = r.rows.filter((x) => x.status !== 'published');
  if (unpublished.length) {
    console.error(`NOT PUBLISHED: ${unpublished.map((x) => `${x.id} (${x.status})`).join(', ')}`);
    process.exit(1);
  }

  const importedLines: string[] = [];
  const reusedLines: string[] = [];
  const ties: string[] = [];
  const noRespell: string[] = [];
  const noVoiceflash: string[] = [];
  const noDictation: string[] = [];

  for (const [group, ids] of Object.entries(WANTED)) {
    const impInGroup: string[] = [];
    const reuInGroup: string[] = [];
    for (const id of ids) {
      const x = byId.get(id)!;
      const drills = pgArray(x.drills);
      if ((x.ipa ?? '').includes('‿')) ties.push(`${id} "${x.fr}" ${x.ipa}`);
      if (x.kind !== 'sentence' && !x.respell) noRespell.push(`${id} "${x.fr}"`);
      if (x.kind !== 'sentence' && !drills.includes('voiceflash')) noVoiceflash.push(`${id} "${x.fr}"`);
      if (x.kind === 'sentence' && !drills.includes('dictation')) noDictation.push(`${id} "${x.fr}"`);

      const seedFr = inSeed.get(id);
      if (seedFr !== undefined) {
        if (seedFr !== x.fr) {
          console.error(`SEED DRIFT ${id}: seed ${esc(seedFr)} vs db ${esc(x.fr)}`);
          process.exit(1);
        }
        reuInGroup.push(
          `  {\n    id: ${esc(x.id)},\n    fr: ${esc(x.fr)},\n    en: ${esc(x.en)},\n`
          + `    respell: ${x.respell ? esc(x.respell) : 'null'}, drills: ${JSON.stringify(drills)},\n`
          + `    why: 'TODO',\n  },`,
        );
      } else {
        const f: string[] = [
          `id: ${esc(x.id)}`, `kind: ${esc(x.kind)}`, `level: ${esc(x.level)}`, `theme: ${esc(x.theme)}`,
          `fr: ${esc(x.fr)}`, `en: ${esc(x.en)}`,
        ];
        if (x.ipa) f.push(`ipa: ${esc(x.ipa)}`);
        if (x.respell) f.push(`respell: ${esc(x.respell)}`);
        if (x.gender) f.push(`gender: ${esc(x.gender)}`);
        if (x.notes) f.push(`notes: ${esc(x.notes)}`);
        f.push(`tags: ${JSON.stringify(pgArray(x.tags))}`, `drills: ${JSON.stringify(drills)}`, `version: ${x.version}`);
        if (x.card_type) f.push(`cardType: ${esc(x.card_type)}`);
        impInGroup.push(`  {\n    ${f.join(', ')},\n  },`);
      }
    }
    if (impInGroup.length) importedLines.push(`\n  // ── ${group} (${impInGroup.length}) ──`, ...impInGroup);
    if (reuInGroup.length) reusedLines.push(`\n  // ── ${group} (${reuInGroup.length}) ──`, ...reuInGroup);
  }

  console.log('/* GENERATED by scripts/_routine_manifest.ts. Do not hand-edit. */');
  console.log('export const IMPORTED: ImportedRow[] = [');
  console.log(importedLines.join('\n'));
  console.log('];');
  console.log('');
  console.log('export const REUSED: ReusedRow[] = [');
  console.log(reusedLines.join('\n'));
  console.log('];');

  const nImp = importedLines.filter((l) => l.startsWith('  {')).length;
  const nReu = reusedLines.filter((l) => l.startsWith('  {')).length;
  console.error(`\n  ${all.length} wanted: ${nImp} IMPORTED (absent from the seed), ${nReu} REUSED (already in the seed)`);
  console.error(
    nImp === 0
      ? '  EVERY ROW IS ALREADY IN THE SEED, which is what `routines` being inside SEED_CUT.themes predicts.'
      : `  ${nImp} ROWS ARE OUTSIDE THE SEED. The brief said this theme is fully inside the cut. Re-measure before trusting anything else in it.`,
  );
  console.error(ties.length ? `\n  U+203F TIE in ${ties.length} row(s):\n    ${ties.join('\n    ')}` : '\n  no U+203F tie in any named row');
  console.error(noRespell.length ? `\n  NO RESPELLING (${noRespell.length}):\n    ${noRespell.join('\n    ')}` : '\n  every named headword carries a respelling');
  console.error(noVoiceflash.length ? `\n  NO voiceflash (${noVoiceflash.length}), so spoken practice must not name them:\n    ${noVoiceflash.join('\n    ')}` : '\n  every named headword carries voiceflash');
  console.error(noDictation.length ? `\n  SENTENCE WITHOUT dictation (${noDictation.length}):\n    ${noDictation.join('\n    ')}` : '\n  every named sentence carries a dictation drill');

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
