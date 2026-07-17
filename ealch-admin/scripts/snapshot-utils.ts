// The OTA byte contract, in one place.
//
// publish-content.ts and rollback-content.ts both produce snapshot bytes the
// app verifies with `sha256Hex(stableStringify(parsed))` (content.logic.ts).
// The stringify here must match the app's byte for byte, or every snapshot
// fails its own checksum on device. Two scripts each carrying their own copy
// is how that parity quietly breaks — so they import this one.

import { createHash } from 'node:crypto';

/** Stable JSON. Key order must not depend on row order, or an unchanged corpus
 *  produces a different checksum and a spurious git diff every single publish.
 *  MUST match ealch-v2/src/services/content.logic.ts stableStringify. */
export function stableStringify(v: unknown): string {
  return JSON.stringify(v, (_k, val) => {
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      return Object.fromEntries(Object.entries(val as object).sort(([a], [b]) => a.localeCompare(b)));
    }
    return val;
  });
}

export const sha256 = (s: string) => createHash('sha256').update(s, 'utf8').digest('hex');

export const BUCKET = 'content';

/** Upload a JSON body to the `content` Storage bucket (upsert). */
export async function uploadToStorage(baseUrl: string, key: string, path: string, body: string): Promise<void> {
  // Send the key in BOTH headers. New-style secret keys (sb_secret_…) are NOT
  // JWTs, so Storage's gateway rejects them in `Authorization: Bearer` with
  // "Invalid Compact JWS" — it validates that header as a JWT. The `apikey`
  // header is where the new format authenticates. Legacy service_role JWTs work
  // in either, so setting both is correct for both key formats.
  const res = await fetch(`${baseUrl}/storage/v1/object/${BUCKET}/${path}`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      'Cache-Control': 'max-age=300',
      'x-upsert': 'true',
    },
    body,
  });
  if (!res.ok) {
    throw new Error(`Storage upload failed for ${path}: HTTP ${res.status} ${await res.text()}`);
  }
}

/** Download an object from the `content` bucket as text. */
export async function downloadFromStorage(baseUrl: string, key: string, path: string): Promise<string> {
  const res = await fetch(`${baseUrl}/storage/v1/object/${BUCKET}/${path}`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
  });
  if (!res.ok) {
    throw new Error(`Storage download failed for ${path}: HTTP ${res.status} ${await res.text()}`);
  }
  return res.text();
}
