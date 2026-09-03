// Signed PUT to Cloudflare R2, S3-compatible, no SDK.
//
// Extracted from render-audio.ts so a second uploader does not carry a second
// copy of SigV4. Duplicating a writer is exactly how `interlocutor` came to be
// missing from a fix that had already been made for `parts`: two copies, one
// fixed. One signer, imported twice.
import { createHash, createHmac } from 'node:crypto';

function hmac(key: Buffer | string, data: string): Buffer {
  return createHmac('sha256', key).update(data, 'utf8').digest();
}

export function sha256Hex(data: Buffer | string): string {
  return createHash('sha256').update(data).digest('hex');
}

/** True when every credential R2 needs is present. Callers report their own
 *  message: a renderer and a plate generator want different wording. */
export function r2Configured(): boolean {
  return Boolean(
    process.env.R2_ACCOUNT_ID &&
      process.env.R2_ACCESS_KEY_ID &&
      process.env.R2_SECRET_ACCESS_KEY &&
      process.env.R2_BUCKET
  );
}

export async function putToR2(path: string, body: Buffer, contentType: string): Promise<void> {
  const accountId = process.env.R2_ACCOUNT_ID!;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID!;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY!;
  const bucket = process.env.R2_BUCKET!;

  const host = `${accountId}.r2.cloudflarestorage.com`;
  const region = 'auto';
  const service = 's3';
  const canonicalUri = `/${bucket}/${path.split('/').map(encodeURIComponent).join('/')}`;

  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, ''); // yyyyMMddTHHmmssZ
  const dateStamp = amzDate.slice(0, 8);
  const payloadHash = sha256Hex(body);

  const canonicalHeaders =
    `content-type:${contentType}\n` + `host:${host}\n` + `x-amz-content-sha256:${payloadHash}\n` + `x-amz-date:${amzDate}\n`;
  const signedHeaders = 'content-type;host;x-amz-content-sha256;x-amz-date';
  const canonicalRequest = ['PUT', canonicalUri, '', canonicalHeaders, signedHeaders, payloadHash].join('\n');

  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const stringToSign = ['AWS4-HMAC-SHA256', amzDate, credentialScope, sha256Hex(canonicalRequest)].join('\n');

  const kDate = hmac(`AWS4${secretAccessKey}`, dateStamp);
  const kRegion = hmac(kDate, region);
  const kService = hmac(kRegion, service);
  const kSigning = hmac(kService, 'aws4_request');
  const signature = hmac(kSigning, stringToSign).toString('hex');

  const authorization =
    `AWS4-HMAC-SHA256 Credential=${accessKeyId}/${credentialScope}, ` +
    `SignedHeaders=${signedHeaders}, Signature=${signature}`;

  const res = await fetch(`https://${host}${canonicalUri}`, {
    method: 'PUT',
    headers: {
      'Content-Type': contentType,
      'x-amz-content-sha256': payloadHash,
      'x-amz-date': amzDate,
      Authorization: authorization,
    },
    // lib.dom's BodyInit doesn't recognize Node's Buffer as an ArrayBufferView
    // even though it structurally is one — a fresh Uint8Array view sidesteps
    // the type mismatch without copying semantics that matter at clip size.
    body: new Uint8Array(body),
  });
  if (!res.ok) {
    throw new Error(`R2 upload failed for ${path}: HTTP ${res.status} ${await res.text().catch(() => '')}`);
  }
}
