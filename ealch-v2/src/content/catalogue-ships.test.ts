// THE CATALOGUE MUST SHIP. Pinned after the 2026-09-06 blank-hubs report.
//
// Five practice screens are a view over `corpus.domains` / `corpus.themes` and
// nothing else:
//
//   flashhub · voicehub · sentencehub · dictationhub    → corpus.domains
//   roleplayhub                                         → corpus.themes, rp-*
//
// and five more browse the same catalogue one level down (flashthemes,
// voicethemes, sentencethemes, dictationthemes, flashtypes). If the arrays are
// empty, every one of them renders an empty grid — not a shorter grid, no grid
// — on a corpus that holds tens of thousands of items.
//
// That is exactly what happened. publish-content.ts regenerated seed.json from
// the database for the first time at v11 (2026-08-01) and never read
// content_domains or content_themes, so 14 domains and 130 themes left the
// binary and the OTA snapshot together. Thirteen further publishes shipped the
// same hole. NOTHING went red:
//
//   · validateCorpus PASSES a corpus with no catalogue. Its checks are
//     referential (does this theme's domain exist, is a slug duplicated), and
//     an absent array dangles nothing. The one check that could have spoken —
//     "theme references unknown domain" — is explicitly guarded by
//     `if (domains.length)` so that "no catalogue" is not reported as "every
//     theme is broken". Correct on its own terms, and silent here.
//   · flashhub-coverage.test.ts asks whether ITEMS carry the right drills. The
//     items were fine throughout. The shelf they sit on was gone.
//
// So this file asserts the one thing neither of those does: that the seed a
// learner installs actually carries the tree those screens walk. It is the
// app-side half of the refusal now standing in publish-content.ts step 1 —
// that one stops a bad snapshot leaving, this one stops a bad seed landing in
// a commit.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import type { Corpus, Domain, Item, Theme } from './schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as Corpus;

const domains: Domain[] = seed.domains ?? [];
const themes: Theme[] = seed.themes ?? [];

/** The four hub grids that map a domain to a drill's card count, exactly as
 *  the screens do: themes of the domain, then items carrying that drill. */
const DRILL_HUBS = ['flashcard', 'voiceflash', 'sentence', 'dictation'] as const;

const themesOfDomain = (slug: string) => themes.filter((t) => t.domain === slug).map((t) => t.slug);

function drillCount(drill: string, slugs: string[]): number {
  const set = new Set(slugs);
  return seed.items.filter((it: Item) => it.drills.includes(drill as Item['drills'][number]) && set.has(it.theme)).length;
}

test('the seed ships a catalogue at all', () => {
  ok(domains.length > 0, 'seed.domains is empty — every practice hub renders a blank grid');
  ok(themes.length > 0, 'seed.themes is empty — Role Play renders a blank grid');
});

test('every theme points at a domain the seed also ships', () => {
  const known = new Set(domains.map((d) => d.slug));
  const orphans = themes.filter((t) => !known.has(t.domain));
  strictEqual(
    orphans.length,
    0,
    `themes whose domain is missing from the seed: ${orphans.map((t) => `${t.slug}→${t.domain}`).slice(0, 5).join(' | ')}`
  );
});

// The join the hubs run in the OTHER direction: an item on a theme the
// catalogue does not list is unreachable from every hub, because a hub can only
// offer what a Theme row points at. It can still be reached through a lesson
// that names its id, which is why these are not broken — only unbrowsable.
//
// Eight such themes exist in the seed, all of them `sons`, holding 842 items
// (8.1% of the cut). They are the pronunciation corpus: the Sons lessons walk
// them by id, and no Theme row lists them. The full snapshot has six more —
// five c1 themes (rhetorique, culture-profonde, discours-dexamen,
// francais-professionnel-avance, nuances-et-registres, 816 items, carrying only
// review+sentence drills) and `plage` (20 a1 items with the full drill set,
// which looks like drift rather than design).
//
// Whether the pronunciation corpus SHOULD be browsable is a curriculum call, not
// a code one — so this pins the list instead of asserting it empty. Adding a
// ninth uncatalogued theme fails here; cataloguing one of these fails here too,
// and the fix is to delete its line.
const UNCATALOGUED_SEED_THEMES = [
  'accents', 'consonnes', 'elision', 'liaisons', 'masterclass', 'muettes', 'nasales', 'rythme',
];

test('no NEW item theme drops out of the catalogue', () => {
  const known = new Set(themes.map((t) => t.slug));
  const missing = [...new Set(seed.items.filter((it) => !known.has(it.theme)).map((it) => it.theme))].sort();
  strictEqual(
    missing.join(','),
    UNCATALOGUED_SEED_THEMES.join(','),
    'the set of hub-unreachable item themes moved.\n' +
      `    was: ${UNCATALOGUED_SEED_THEMES.join(', ')}\n` +
      `    now: ${missing.join(', ') || '(none)'}\n` +
      '    A new entry means items authored onto a theme no hub can offer.'
  );
});

test('each drill hub has domains to draw', () => {
  // Not a count target — the seed cut is deliberately a1/a2/sons, so most
  // domains are thin offline and the hubs drop the empty ones themselves.
  // What must never be true again is ZERO: a hub with nothing to render.
  for (const drill of DRILL_HUBS) {
    const live = domains.filter((d) => drillCount(drill, themesOfDomain(d.slug)) > 0);
    ok(live.length > 0, `the ${drill} hub has no domain with any card — it renders blank`);
  }
});

test('Role Play ships its conversation categories, each with a scene', () => {
  // roleplayhub is the one hub keyed on themes rather than domains: it lists
  // every rp-* slug, and each card advertises its scenario count. A category
  // with no scenario is a door onto an empty room, so both halves are pinned.
  const rp = themes.filter((t) => t.slug.startsWith('rp-'));
  ok(rp.length > 0, 'no rp-* themes in the seed — the Role Play hub renders blank');
  const empty = rp.filter((t) => (seed.scenarios ?? []).every((s) => s.theme !== t.slug));
  strictEqual(empty.length, 0, `rp-* categories with no scenario: ${empty.map((t) => t.slug).join(', ')}`);
});

test('the domains the hubs render all have display metadata', () => {
  // domainMeta() falls back for an unknown slug rather than crashing, which is
  // the right runtime behavior and the wrong thing to discover in a store
  // screenshot: the fallback renders the raw slug as the card title. A domain
  // shipping without art should fail here, not ship looking unfinished.
  //
  // Read as SOURCE, not imported: domainMeta.ts resolves '@/components/Icon',
  // and this file has to stay loadable by bare `node --test` (the project's
  // runner) with no bundler alias.
  //
  // Both declaration forms count. 'argot' is defined as `DOMAIN_META.argot =`
  // AFTER the literal closes, not as a key inside it, so a pattern that only
  // matched literal keys reported the one domain that is in fact fully
  // authored — art, blurb, icon and all.
  const src = readFileSync(resolve(here, 'domainMeta.ts'), 'utf8');
  const declared = (slug: string) =>
    new RegExp(`^\\s+'?${slug}'?:\\s*\\{`, 'm').test(src) ||
    new RegExp(`^DOMAIN_META(\\.${slug}\\b|\\['${slug}'\\])\\s*=`, 'm').test(src);
  const missing = domains.filter((d) => !declared(d.slug));
  strictEqual(missing.length, 0, `domains with no DOMAIN_META entry: ${missing.map((d) => d.slug).join(', ')}`);
});
