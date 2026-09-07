// PROBE: does Supabase Storage preserve Content-Encoding: gzip, and does a
// client transparently decompress it?
//
// Everything about the gzip plan rests on this. If Storage stores the header
// and serves it back, the app's checksum path is unaffected, because it hashes
// sha256Hex(stableStringify(parsed)) — the PARSED corpus, not the wire bytes.
// If Storage drops the header, a client receives gzip bytes and calls them
// JSON, which is a broken snapshot for every learner.
//
//   pnpm tsx scripts/_gzip_probe.ts
//
// Writes and deletes probe/gzip-probe.json. Touches no snapshot.

import './env';
import { gzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';

const BUCKET = 'content';
const KEY_PATH = 'probe/gzip-probe.json';
const sha256 = (s: string) => createHash('sha256').update(s, 'utf8').digest('hex');

async function main() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');

  // Repetitive, like the real corpus, so the ratio is meaningful.
  const payload = JSON.stringify({
    version: 999,
    items: Array.from({ length: 500 }, (_, i) => ({
      id: `fr.a1.probe.${i}`, kind: 'word', level: 'a1', theme: 'probe',
      fr: 'le café', en: 'the coffee', respell: 'luh ka-FAY', drills: ['flashcard'],
    })),
  });
  const want = sha256(payload);
  const gz = gzipSync(Buffer.from(payload, 'utf8'), { level: 9 });
  console.log(`  payload ${payload.length} B -> gzip ${gz.length} B (${(payload.length / gz.length).toFixed(1)}x)`);

  const up = await fetch(`${url}/storage/v1/object/${BUCKET}/${KEY_PATH}`, {
    method: 'POST',
    headers: {
      apikey: key, Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      'Content-Encoding': 'gzip',
      'Cache-Control': 'max-age=300',
      'x-upsert': 'true',
    },
    body: gz,
  });
  if (!up.ok) throw new Error(`upload failed: HTTP ${up.status} ${await up.text()}`);
  console.log(`  uploaded ${KEY_PATH}`);

  for (const [label, target, headers] of [
    ['authenticated', `${url}/storage/v1/object/${BUCKET}/${KEY_PATH}`, { apikey: key, Authorization: `Bearer ${key}` }],
    ['public', `${url}/storage/v1/object/public/${BUCKET}/${KEY_PATH}`, {}],
  ] as const) {
    console.log(`\n  -- ${label} --`);
    try {
      const res = await fetch(target, { headers, cache: 'no-store' as RequestCache });
      console.log(`  HTTP ${res.status}`);
      console.log(`  content-encoding: ${res.headers.get('content-encoding') ?? '(none)'}`);
      console.log(`  content-type:     ${res.headers.get('content-type') ?? '(none)'}`);
      console.log(`  content-length:   ${res.headers.get('content-length') ?? '(none)'}`);
      const buf = Buffer.from(await res.arrayBuffer());
      const isGzipBytes = buf.length > 2 && buf[0] === 0x1f && buf[1] === 0x8b;
      console.log(`  body bytes:       ${buf.length}${isGzipBytes ? '  <-- RAW GZIP, not decompressed' : ''}`);
      const text = buf.toString('utf8');
      console.log(`  parses as JSON:   ${(() => { try { JSON.parse(text); return 'yes'; } catch { return 'NO'; } })()}`);
      console.log(`  sha256 matches:   ${sha256(text) === want ? 'yes' : 'NO'}`);
    } catch (e) {
      console.log(`  FAILED: ${(e as Error).message}`);
    }
  }

  const del = await fetch(`${url}/storage/v1/object/${BUCKET}`, {
    method: 'DELETE',
    headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ prefixes: [KEY_PATH] }),
  });
  console.log(`\n  cleanup: HTTP ${del.status}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
