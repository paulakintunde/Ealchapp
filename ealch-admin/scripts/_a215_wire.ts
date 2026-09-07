/* What is actually being SERVED, read off the wire rather than off a publish log.
 *
 * Ledger §a2.14-13: a log says what was uploaded. It does not say what is being
 * served, at what rollout, or what a lesson body inside it contains.
 *
 *   pnpm tsx scripts/_a215_wire.ts
 */
import './env';

const BASE = `${process.env.SUPABASE_URL}/storage/v1/object/public/content`;

async function main() {
  const mRes = await fetch(`${BASE}/manifest.json`, { cache: 'no-store' as RequestCache });
  if (!mRes.ok) { console.error(`manifest ${mRes.status}`); process.exit(1); }
  const m = await mRes.json() as Record<string, unknown>;
  console.log(`\n  manifest    v${m.version}, rollout ${m.rollout}%, ${m.path ?? m.url ?? '(no path field)'}`);
  console.log(`              published ${m.publishedAt ?? m.updatedAt ?? '(no timestamp)'}`);
  console.log(`              checksum ${String(m.checksum ?? '').slice(0, 16)}…`);

  const path = String(m.path ?? `snapshots/v${m.version}.json`);
  const sRes = await fetch(`${BASE}/${path}`, { cache: 'no-store' as RequestCache });
  if (!sRes.ok) { console.error(`snapshot ${sRes.status}`); process.exit(1); }
  const snap = await sRes.json() as {
    version: number;
    lessons: { id: string; version: number; sections: unknown[]; itemIds: string[] }[];
    items: { id: string; fr: string; respell?: string }[];
  };
  console.log(`  snapshot    v${snap.version}, ${snap.lessons.length} lessons, ${snap.items.length} items`);

  const L = snap.lessons.find((l) => l.id === 'a2.15.l1');
  console.log(`  a2.15.l1    ${L ? `body v${L.version} — ${L.sections.length} sections, ${L.itemIds.length} items` : 'ABSENT'}`);
  const a214 = snap.lessons.find((l) => l.id === 'a2.14.l1');
  console.log(`  a2.14.l1    ${a214 ? `body v${a214.version}` : 'ABSENT'}`);

  /* The five repairs, on the served bytes. Three are invisible to the shared
     nasal checker in both states, so this is the only place they can be read. */
  console.log('\n  the five repaired respellings, as served:');
  for (const id of ['fr.sons.verbes-essentiels.012', 'fr.a2.disciplines.051',
    'fr.sons.verbes-essentiels.030', 'fr.sons.verbes-essentiels.225',
    'fr.a1.transports-quotidiens.041']) {
    const r = snap.items.find((x) => x.id === id);
    console.log(`    ${id.padEnd(34)} ${r ? JSON.stringify(r.respell) : 'not in the snapshot'}`);
  }

  /* And the two the exam gives cold must be in no served row. */
  const leaked = snap.items.filter((x) => /(^|[^a-zà-ÿ])(reprendre|admettre)(?![a-zà-ÿ])/i.test(x.fr)
    && x.id >= 'fr.a2.verbes.421' && x.id <= 'fr.a2.verbes.454');
  console.log(`\n  unseen compounds in this lesson's served rows: ${leaked.length}`);
}
main().catch((e) => { console.error(e); process.exit(1); });
