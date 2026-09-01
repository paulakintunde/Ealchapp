// PROBE 2: is egress ALREADY compressed for a plain, uncompressed snapshot?
//
// Probe 1 showed Storage does NOT preserve an uploaded `Content-Encoding: gzip`:
// the response came back `content-encoding: br` with raw gzip bytes underneath,
// which do not parse as JSON. The `br` was the CDN's own transport compression,
// layered over the gzip blob we had stored. A device would decompress only the
// br layer and be handed gzip bytes it cannot read.
//
// So the question that actually decides the plan is this one: does the CDN
// already compress a PLAIN snapshot on the way out? If it does, egress is a
// solved problem, pre-compressing the upload buys nothing on the wire, and the
// only remaining cost of a snapshot is storage AT REST.
//
//   pnpm tsx scripts/_gzip_probe2.ts
//
// Writes and deletes probe/plain-probe.json. Touches no snapshot.
//
// RESULT (2026-09-01, 73,915 B plain object, curl --raw so nothing is
// decompressed client-side):
//
//     Accept-Encoding: (none)              73,915 B   content-encoding: none
//     Accept-Encoding: gzip                 1,647 B   content-encoding: gzip
//     Accept-Encoding: br                     890 B   content-encoding: br
//     Accept-Encoding: gzip, deflate, br      900 B   content-encoding: br
//
// The CDN compresses on the fly, and its brotli (890 B) beats our own gzip -9
// (1,639 B in probe 1). Every real client sends an Accept-Encoding header, so
// snapshots have ALWAYS been transferred compressed. Do not pre-gzip uploads.

import './env';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, statSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const BUCKET = 'content';
const KEY_PATH = 'probe/plain-probe.json';

async function main() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');

  const dir = mkdtempSync(join(tmpdir(), 'gzip-probe-'));
  try {
    const payload = JSON.stringify({
      version: 999,
      items: Array.from({ length: 500 }, (_, i) => ({
        id: `fr.a1.probe.${i}`, kind: 'word', level: 'a1', theme: 'probe',
        fr: 'le café', en: 'the coffee', respell: 'luh ka-FAY', drills: ['flashcard'],
      })),
    });
    const body = join(dir, 'plain.json');
    writeFileSync(body, payload, 'utf8');
    console.log(`  payload stored at rest: ${Buffer.byteLength(payload)} B, PLAIN, no Content-Encoding`);

    const up = await fetch(`${url}/storage/v1/object/${BUCKET}/${KEY_PATH}`, {
      method: 'POST',
      headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', 'x-upsert': 'true' },
      body: payload,
    });
    if (!up.ok) throw new Error(`upload failed: HTTP ${up.status} ${await up.text()}`);

    const pub = `${url}/storage/v1/object/public/${BUCKET}/${KEY_PATH}`;
    console.log(`\n  wire size by Accept-Encoding (curl --raw, so no client decompression):`);
    for (const enc of [null, 'gzip', 'br', 'gzip, deflate, br']) {
      const out = join(dir, 'out.bin');
      const hdr = join(dir, 'head.txt');
      // -o /dev/null is unreliable under Git Bash on Windows, hence real files.
      execFileSync('curl', [
        '--raw', '-sS', pub, '-o', out, '-D', hdr,
        '-H', enc === null ? 'Accept-Encoding:' : `Accept-Encoding: ${enc}`,
      ]);
      const ce = readFileSync(hdr, 'utf8').split(/\r?\n/)
        .find((l) => l.toLowerCase().startsWith('content-encoding:'))?.split(':')[1]?.trim() ?? 'none';
      console.log(`    ${String(enc ?? '(none)').padEnd(20)} wire=${String(statSync(out).size).padStart(7)} B   content-encoding=${ce}`);
    }

    const del = await fetch(`${url}/storage/v1/object/${BUCKET}`, {
      method: 'DELETE',
      headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ prefixes: [KEY_PATH] }),
    });
    console.log(`\n  cleanup: HTTP ${del.status}`);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
