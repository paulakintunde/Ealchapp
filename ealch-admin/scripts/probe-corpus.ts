// Answer "what does the corpus actually hold?" against POSTGRES and seed.json
// at the same time, so a lesson brief can ship its evidence instead of asking
// the next author to go and find it.
//
//   pnpm corpus:probe --theme meteo
//   pnpm corpus:probe --words "le vent,la pluie,l'orage" --theme meteo
//   pnpm corpus:probe --tokens "il fait,il pleut,en automne"
//   pnpm corpus:probe --unit a1.10 --theme meteo --words "le soleil"
//
// ── Why this exists ────────────────────────────────────────────────────────
//
// Three lesson briefs in a row (a1.08, a1.09, a1.13) told their author that
// vocabulary did not exist when it did, and in every case the cause was the
// same: the claim was measured against seed.json, which is a CUT of Postgres,
// and the brief then reasoned from an absence that was an artefact of the cut.
//
//   a1.08's brief   "not one day exists as a headword"    all seven existed
//   a1.09's brief   "ten of the twelve months are absent"  all twelve existed
//   a1.13's brief   "couleurs does not exist, 0 items"     322 published rows
//
// Following any of the three would have failed the build, because
// flashhub-coverage.test.ts treats two rows with the same `fr` in one theme as
// one card served twice. So this prints BOTH numbers for everything, always,
// and never lets you see one without the other.
//
// ── The two matching traps, both live in this corpus ──────────────────────
//
//   1. JavaScript \b is ASCII-only. /\ben été\b/ matches NOTHING, because the
//      final é is not a word character so the trailing boundary never fires.
//      A regex that returns zero looks exactly like an absence.
//   2. Substring matching without a boundary is confidently wrong in the other
//      direction: `vent` matches ventre, ventilateur and vente.
//
// `hasWord` below walks the string and checks the neighbouring character
// against an accent-aware class. It never builds a regex out of the needle, so
// a search term can never leak into the pattern.
//
// ── The article trap, which is what actually bit the weather brief ────────
//
// The corpus stores gendered nouns WITH their article: `le vent`, not `vent`.
// Searching bare forms returns ABSENT for words that are present. This script
// therefore probes each word with and without every article automatically, and
// reports which form matched. Pass bare words; it will find the articled rows.
import './env';
import { describeTarget } from './env';
// THE REAL CHECKER, not a copy of it. A first draft of this script inlined a
// one-line regex for the nasal rule and immediately reported `jaune` -> ZHOHN as
// a violation. It is not: the n in jaune is a pronounced consonant, and
// hasPlainNasalFor knows that because it looks at the FRENCH spelling as well as
// the respelling (a vowel after the n/m means the consonant is real: aime, dame,
// jaune, scene). A guard that reimplements the thing it guards is free to drift
// from it, which is the same mistake as a test reimplementing app logic.
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const ARTICLES = ['le ', 'la ', "l'", 'les ', 'un ', 'une ', 'des ', 'du ', "de l'"];

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : undefined;
}
const list = (s: string | undefined) => (s ? s.split(',').map((x) => x.trim()).filter(Boolean) : []);

/** Whole-word containment, accent-aware, never regex-from-string. */
function hasWord(haystack: string, needle: string): boolean {
  const h = haystack.toLowerCase().normalize('NFC');
  const n = needle.toLowerCase().normalize('NFC');
  let from = 0;
  for (;;) {
    const i = h.indexOf(n, from);
    if (i < 0) return false;
    const before = i === 0 ? ' ' : h[i - 1];
    const after = h[i + n.length] ?? ' ';
    if (!/[a-zà-ÿœæ]/.test(before) && !/[a-zà-ÿœæ]/.test(after)) return true;
    from = i + 1;
  }
}

/** `drills` is a Postgres ENUM ARRAY and node-postgres has no parser for it, so
 *  it arrives as the raw literal `{flashcard,voiceflash}`. Read as a string,
 *  `.includes('voiceflash')` answers TRUE by substring on rows that do not
 *  carry the tag. Parsed rather than trusted. */
function drillsOf(v: unknown): string[] {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
}

async function main() {
  const themes = list(arg('theme'));
  const words = list(arg('words'));
  const toks = list(arg('tokens'));
  const units = list(arg('unit'));
  if (!themes.length && !words.length && !toks.length && !units.length) {
    console.log('usage: pnpm corpus:probe [--theme a,b] [--words "le vent,la pluie"] [--tokens "il fait"] [--unit a1.10]');
    process.exit(1);
  }

  const fs = await import('node:fs');
  const seed = JSON.parse(fs.readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8'));
  const seedIds = new Set<string>(seed.items.map((i: { id: string }) => i.id));
  console.log(`postgres: ${describeTarget()}`);
  console.log(`seed:     version ${seed.version}, ${seed.items.length} items, ${seed.lessons.length} lessons`);
  console.log(`          NOTE: the seed is a CUT of Postgres. Never read one number without the other.\n`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    for (const t of themes) {
      const r = await c.query<{ id: string }>(`select id from content_items where theme=$1 and status='published' order by id`, [t]);
      const inSeed = seed.items.filter((i: { theme: string }) => i.theme === t).length;
      console.log(`=== THEME ${t} ===`);
      console.log(`  published in postgres: ${r.rows.length}      present in seed: ${inSeed}`);
      if (!r.rows.length) { console.log(`  THEME IS EMPTY OR DOES NOT EXIST. Safe to create.\n`); continue; }
      const pfx: Record<string, number[]> = {};
      for (const { id } of r.rows) { const m = id.match(/^(.*)\.(\d+)$/); if (m) (pfx[m[1]] = pfx[m[1]] || []).push(+m[2]); }
      for (const k of Object.keys(pfx).sort()) {
        const ns = pfx[k].sort((a, b) => a - b);
        const gaps: number[] = [];
        for (let i = 1; i <= ns[ns.length - 1]; i++) if (!ns.includes(i)) gaps.push(i);
        console.log(`  ${k}`);
        console.log(`    count=${ns.length}  max=${ns[ns.length - 1]}  NEXT FREE ID = ${k}.${String(ns[ns.length - 1] + 1).padStart(3, '0')}`);
        console.log(`    gaps: ${gaps.length ? gaps.slice(0, 15).join(',') + (gaps.length > 15 ? ` (+${gaps.length - 15})` : '') : 'none'}`);
      }
      console.log('');
    }

    if (words.length) {
      console.log('=== HEADWORDS (kind <> sentence). Each probed bare AND with every article. ===');
      for (const w of words) {
        // STRIP a caller-supplied article before re-articling. The previous line
        // mapped every article onto `w` AS PASSED and its ternary had two
        // identical branches, so `--words "le dépanneur"` probed
        // `le dépanneur`, `le le dépanneur`, `un le dépanneur`... and never
        // `un dépanneur`, which is published at
        // fr.a2.quebec-et-francophonie.031. It reported ABSENT / "safe to
        // author" for a word that exists.
        //
        // The header says "pass bare words", and bare words did work. But
        // a2.26's own pre-flight command (and every brief in the A2 situations
        // band) passes articled forms, because that is how the corpus stores
        // them. Found by a2.26 when a --find sweep turned up the row the
        // --words probe had just called absent.
        const bare = w.replace(/^(?:le |la |les |un |une |des |du |de l'|l')/i, '');
        const forms = [...new Set([w, bare, ...ARTICLES.map((a) => a + bare)])];
        const r = await c.query<{ id: string; fr: string; theme: string; respell: string | null; ipa: string | null; drills: string[]; gender: string | null }>(
          `select id, fr, theme, respell, ipa, drills, gender from content_items
            where kind<>'sentence' and status='published' and lower(fr)=any($1::text[]) order by id`,
          [forms.map((f) => f.toLowerCase())]);
        if (!r.rows.length) { console.log(`  ${w.padEnd(18)} ABSENT in every article form. Safe to author.`); continue; }
        console.log(`  ${w.padEnd(18)} ${r.rows.length} row(s) EXIST. Do not re-author: flashhub keys on fr per theme.`);
        for (const x of r.rows) {
          console.log(`      ${x.id.padEnd(34)} "${x.fr}"  theme=${x.theme}  respell=${x.respell ?? '-'}  gender=${x.gender ?? '-'}  drills=${drillsOf(x.drills).join('/')}  inSeed=${seedIds.has(x.id) ? 'Y' : 'n'}`);
        }
        // Competing respellings for one word are a real defect and the reason
        // a1.08 and a1.09 both shipped repair lists.
        const spellings = [...new Set(r.rows.map((x) => x.respell).filter(Boolean))];
        if (spellings.length > 1) console.log(`      ⚠ ${spellings.length} DIFFERENT respellings for one word: ${spellings.join(' | ')}`);
        // The nasal convention, through the real checker so a brief can state
        // it. Note hasPlainNasalFor CANNOT see a word-internal nasal: it needs
        // the n/m to end a token, so `sep-TAHNBR` and `dee-MAHNSH` pass it while
        // being wrong. A brief that lists nasal-carrying words must name them
        // rather than trusting this line alone.
        const plainNasal = r.rows.filter((x) => x.respell && hasPlainNasalFor(x.fr, x.respell));
        if (plainNasal.length) console.log(`      ⚠ respelling(s) closing a nasal with a plain n/m: ${plainNasal.map((x) => `${x.id} ${x.respell}`).join(', ')}`);
        const internal = r.rows.filter((x) => x.respell && !hasPlainNasalFor(x.fr, x.respell)
          && /(?:AH|OH|EH|UH|EU|AI|OU)[NM][A-Za-zÀ-ÿ]/i.test(x.respell));
        if (internal.length) console.log(`      ⚠ possible WORD-INTERNAL nasal the shared checker cannot see: ${internal.map((x) => `${x.id} ${x.respell}`).join(', ')} (verify by hand)`);
      }
      console.log('');
    }

    if (toks.length) {
      const sents = await c.query<{ id: string; fr: string; theme: string; level: string; drills: string[] }>(
        `select id, fr, theme, level, drills from content_items where kind='sentence' and status='published'`);
      const seedSents = seed.items.filter((i: { kind: string }) => i.kind === 'sentence');
      console.log(`=== SENTENCE EVIDENCE (pg published sentences ${sents.rows.length} / seed ${seedSents.length}) ===`);
      for (const tk of toks) {
        const pg = sents.rows.filter((r) => hasWord(r.fr, tk));
        const sd = seedSents.filter((r: { fr: string }) => hasWord(r.fr, tk));
        console.log(`  "${tk}"`.padEnd(30) + ` pg=${String(pg.length).padEnd(6)} seed=${sd.length}`);
        for (const r of pg.slice(0, 5)) {
          const d = drillsOf(r.drills);
          console.log(`      ${r.id.padEnd(34)} inSeed=${seedIds.has(r.id) ? 'Y' : 'n'} drills=${d.join('/') || 'none'}  ${r.fr}`);
        }
        if (pg.length > 5) console.log(`      … and ${pg.length - 5} more`);
      }
      console.log('');
    }

    for (const u of units) {
      const r = await c.query(
        `select body->>'id' id, body->>'seq' seq, body->>'title' t, body->>'sub' sub, body->>'canDo' cando,
                body->'themes' themes, body->'lessonIds' lessons, body->'prereqUnitIds' prereq
           from content_units where kind='curriculum_unit' and body->>'id'=$1`, [u]);
      console.log(`=== UNIT ${u} ===`);
      console.log(r.rows.length ? '  ' + JSON.stringify(r.rows[0], null, 2).split('\n').join('\n  ') : '  NOT FOUND');
      console.log('');
    }
  } finally { c.release(); await pool.end(); }
}

main().catch((e) => { console.error(e); process.exit(1); });
