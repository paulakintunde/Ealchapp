// The one test that stops this phase's highest-risk regression.
//
// The server gate is a hand-duplicated copy of examPaperAllowed (Deno is a
// third deployment boundary this repo does not cross-import). grade-exam's own
// SCORE_BANDS comment admits the equivalent duplication has "no test holding
// the two honest yet". This is that test, for the copy where drift costs
// access: narrowing the server's gate to an entitlement-only check would
// refuse every exam attempt by every user, because examGateOn is false in
// production and nobody holds 'examiner' yet.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

const utilsDir = dirname(fileURLToPath(import.meta.url));
const srcDir = resolve(utilsDir, '..');

const clientGatePath = resolve(utilsDir, 'examGate.logic.ts');
const clientAttemptPath = resolve(utilsDir, 'examAttempt.logic.ts');
const denoPath = resolve(srcDir, '../supabase/functions/start-exam-attempt/index.ts');

/** A function's source text, from its `function <name>(` to its true closing
 *  brace, with comments and all whitespace removed.
 *
 *  NOT a naive "next '\n}' " scan: examPaperAllowed's parameter is a
 *  multi-line destructured type object (`input: { gateOn: boolean; ... }`)
 *  whose own closing brace also sits at column zero (`}): GateDecision {`),
 *  so a naive scan stops there and silently compares two signatures instead
 *  of two function bodies — a reordered `if` inside the body would never be
 *  caught. Instead: find the parameter list's matching close paren (paren-
 *  depth tracked, so it is untouched by the braces inside the param type),
 *  then find the body's opening brace after that, then brace-depth-track to
 *  the function's real closing brace. */
const extract = (src: string, name: string): string => {
  const start = src.indexOf(`function ${name}(`);
  ok(start !== -1, `${name} not found`);

  const parenStart = src.indexOf('(', start);
  ok(parenStart !== -1, `${name} has no parameter list`);
  let parenDepth = 0;
  let parenEnd = -1;
  for (let i = parenStart; i < src.length; i++) {
    if (src[i] === '(') parenDepth++;
    else if (src[i] === ')') {
      parenDepth--;
      if (parenDepth === 0) {
        parenEnd = i;
        break;
      }
    }
  }
  ok(parenEnd !== -1, `${name} parameter list never closes`);

  const bodyOpen = src.indexOf('{', parenEnd);
  ok(bodyOpen !== -1, `${name} has no body`);
  let braceDepth = 0;
  let bodyEnd = -1;
  for (let i = bodyOpen; i < src.length; i++) {
    if (src[i] === '{') braceDepth++;
    else if (src[i] === '}') {
      braceDepth--;
      if (braceDepth === 0) {
        bodyEnd = i;
        break;
      }
    }
  }
  ok(bodyEnd !== -1, `${name} body never closes`);

  return src
    .slice(start, bodyEnd + 1)
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/[^\n]*/g, '')
    .replace(/\s+/g, '');
};

test('the server gate is examPaperAllowed, not a narrower version of it', () => {
  const client = readFileSync(clientGatePath, 'utf8');
  const deno = readFileSync(denoPath, 'utf8');
  strictEqual(
    extract(deno, 'examPaperAllowed'),
    extract(client, 'examPaperAllowed'),
    'the Deno copy has drifted from src/utils/examGate.logic.ts — edit both or neither',
  );
});

test('the server gate reads all four inputs from the server, none from the request', () => {
  const deno = readFileSync(denoPath, 'utf8');
  ok(deno.includes('from("system_config")')); // the rollout flag half.
  ok(deno.includes('from("entitlements")')); // the entitlement half.
  ok(deno.includes('from("content_exam_papers")')); // paperNo and timingS.
  ok(
    !/body\.(paperNo|entitled|timingS)/.test(deno),
    'paperNo/entitled/timingS must never come from the request body',
  );
});

test('the grace window constants match the client logic file', () => {
  const clientAttempt = readFileSync(clientAttemptPath, 'utf8');
  const deno = readFileSync(denoPath, 'utf8');
  strictEqual(
    extract(deno, 'clampTimingS'),
    extract(clientAttempt, 'clampTimingS'),
    'the Deno copy of clampTimingS has drifted from src/utils/examAttempt.logic.ts — edit both or neither',
  );
  ok(deno.includes('ATTEMPT_GRACE_S = 3600'));
  ok(deno.includes('MAX_TIMING_S = 21600'));
  ok(
    !deno.includes('overview.minutes'),
    'the grace window is timingS, not the nonexistent ExamPaper.overview.minutes',
  );
});

test('an unauthenticated caller is refused before any paper lookup', () => {
  const deno = readFileSync(denoPath, 'utf8');
  const uidAt = deno.indexOf('await callerUid(req)');
  const factsAt = deno.indexOf('await paperFacts(');
  ok(uidAt !== -1 && factsAt !== -1);
  ok(uidAt < factsAt, 'the uid check must precede the paper lookup');
  ok(deno.includes('reason: "auth_required"'));
});
