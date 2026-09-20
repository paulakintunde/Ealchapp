// grade-exam's gate, asserted on the function's own source text.
//
// There is no integration harness for a deployed Deno function in this repo,
// and the behaviour that matters is structural: does the check exist, does it
// run before the quota bump and before any provider call, and does it bound
// the window by expires_at. The house already tests cross-file contracts this
// way — see src/store/examSection.logic.test.ts's grader assertions.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok } from 'node:assert';
import { test } from 'node:test';

const here = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(resolve(here, './index.ts'), 'utf8');

test('grading requires an authorized, unexpired attempt', () => {
  ok(src.includes('exam_attempts'), 'the gate must read the attempt table');
  ok(src.includes('.gt("expires_at"'), 'the window must be bounded server-side');
  ok(src.includes('attempt_missing_or_expired'), 'the refusal must name its reason');
  ok(/status:\s*403/.test(src), 'an unauthorized attempt is a 403');
});

test('the gate runs before the quota bump and before any provider call', () => {
  // 'attemptAuthorized(uid' alone also matches the function's own
  // declaration ('async function attemptAuthorized(uid: string, ...')
  // above the handler, which always sits before everything else in the
  // file regardless of where the handler actually calls it — making this
  // assertion pass even when the call site is moved. 'await
  // attemptAuthorized(uid' matches only the call site.
  const gateAt = src.indexOf('await attemptAuthorized(uid');
  const quotaAt = src.indexOf('await bumpTurn(');
  const chainAt = src.indexOf('buildChain(');
  ok(gateAt !== -1, 'the gate call must exist');
  ok(quotaAt !== -1, 'the quota bump must exist');
  ok(chainAt !== -1, 'the provider chain build must exist');
  ok(gateAt < quotaAt, 'an unauthorized request must not spend the caller\'s daily quota');
  ok(gateAt < chainAt, 'an unauthorized request must not reach a provider');
});

test('grading trusts the stored authorization and never re-reads the entitlements mirror', () => {
  ok(!src.includes('from("entitlements")'), 'D-05: grading trusts the attempt row, not a live entitlement read');
  ok(src.includes('D-06'), 'the grace-window rationale must stay documented in the file');
});

test('the gate is conditioned on examGateOn so deploying it breaks no shipped client', () => {
  ok(src.includes('if (!routed.examGateOn)'), 'the rollout flag gates the requirement');
  ok(src.includes('grade_attempt_check_skipped'), 'the bypass must be observable in logs');
});

test('every refusal reaches the function log, not only PostHog', () => {
  ok(src.includes('function logEvent'));
  ok(/console\.error\(`\[grade-exam\]/.test(src));
  ok(src.includes('posthog("grade_refused"'), 'refusals go through the double-logging helper');
});

test('the coach exemption comment names the webhook that actually feeds it', () => {
  const coachSrc = readFileSync(resolve(here, '../coach/index.ts'), 'utf8');
  ok(coachSrc.includes('adapty-webhook fn'), 'the vendor swap of 2026-07-22 must be reflected here');
  ok(!coachSrc.includes('fed by the revenuecat-webhook'), 'the stale RevenueCat reference must be gone');
});
