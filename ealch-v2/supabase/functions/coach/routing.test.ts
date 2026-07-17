// Coach routing guard. Runs on plain Node (types are stripped natively):
//   npm test
// routing.ts imports nothing at all, which is why this runs with no Deno, no
// network and no secrets.
//
// These tests are not ceremony. Each one pins a rule that, if it broke, would
// cost money or lie silently rather than crash:
//   - route-by-model is the whole point of Phase 3; if it regresses to
//     "first configured secret wins", the console steers nothing and nobody
//     finds out, because the coach still replies.
//   - never-escalate is the CF-06 margin rule. If failover can climb to
//     Anthropic, a missing NVIDIA secret silently multiplies the bill per call.
//   - the client cannot pick a provider: buildChain is only ever handed the
//     model index.ts read from system_config, and these tests fix that contract.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  buildChain,
  DEFAULT_MODEL,
  providerForModel,
  PROVIDER_TIER,
  type Env,
  type ProviderName,
} from './routing.ts';

/** An Env where the named providers have secrets and nothing else does. Ceiling
 *  is left at the default ('standard'), which refuses premium. */
const withSecrets = (...set: ProviderName[]): Env => ({
  hasSecret: (p) => set.includes(p),
});

/** The same Env with the cost ceiling deliberately raised to admit premium.
 *  Reaching Anthropic takes BOTH a route and this — that is the CF-06 rule. */
const ceilingRaised = (env: Env): Env => ({ ...env, ceiling: 'premium' });

const names = (r: { chain: { provider: ProviderName }[] }) => r.chain.map((c) => c.provider);

// ── the registry ──────────────────────────────────────────────────────────
test('providerForModel maps the NVIDIA namespace to nvidia', () => {
  strictEqual(providerForModel(DEFAULT_MODEL), 'nvidia');
  strictEqual(providerForModel('nvidia/some-future-model'), 'nvidia');
});

test('providerForModel maps bare claude ids to anthropic, but vendor-namespaced ones to openrouter', () => {
  // Same family, different bill: `claude-sonnet-5` is Anthropic direct,
  // `anthropic/claude-sonnet-5` is OpenRouter reselling it.
  strictEqual(providerForModel('claude-sonnet-5'), 'anthropic');
  strictEqual(providerForModel('anthropic/claude-sonnet-5'), 'openrouter');
});

test('providerForModel treats any other vendor/model id as openrouter', () => {
  strictEqual(providerForModel('meta-llama/llama-3.1-70b-instruct'), 'openrouter');
});

test('providerForModel refuses to guess an unrecognised id', () => {
  strictEqual(providerForModel('totally-unknown'), null);
  strictEqual(providerForModel(''), null);
});

// ── routing: the console steers ───────────────────────────────────────────
test('the routed model chooses the primary, not the first configured secret', () => {
  // Anthropic's secret is set and, under the old resolver order, a request would
  // still have been served by whichever secret came first. Routing to NVIDIA
  // must mean NVIDIA serves.
  const r = buildChain(DEFAULT_MODEL, withSecrets('nvidia', 'anthropic'));
  strictEqual(r.chain[0].provider, 'nvidia');
  strictEqual(r.chain[0].model, DEFAULT_MODEL);
  strictEqual(r.chain[0].role, 'primary');
});

test('routing to a premium model is honoured once the ceiling is also raised', () => {
  const r = buildChain('claude-sonnet-5', ceilingRaised(withSecrets('nvidia', 'anthropic')));
  strictEqual(r.chain[0].provider, 'anthropic');
  strictEqual(r.routedProviderUnavailable, false);
  strictEqual(r.routeAboveCeiling, false);
});

// ── the ceiling (CF-06 hard rule) ─────────────────────────────────────────
test('a premium route is REFUSED while the ceiling is at its default', () => {
  // Routing alone must not be enough to spend premium money. This is the case
  // that makes the ceiling worth having: it survives a misroute.
  const r = buildChain('claude-sonnet-5', withSecrets('nvidia', 'anthropic'));
  strictEqual(r.routeAboveCeiling, true);
  ok(!names(r).includes('anthropic'), 'refused, not silently served');
  strictEqual(r.chain[0].provider, 'nvidia', 'something at or below the ceiling serves instead');
});

test('the ceiling binds the primary, not merely the failover list', () => {
  // Anthropic is the only provider configured and it was routed, but it is over
  // the ceiling: nothing serves, and the caller answers honestly.
  const r = buildChain('claude-sonnet-5', withSecrets('anthropic'));
  strictEqual(r.routeAboveCeiling, true);
  deepStrictEqual(r.chain, []);
});

test('the ceiling also caps failover below the routed tier', () => {
  // Routed standard, ceiling cheap: only cheap may serve, primary included.
  const env: Env = { hasSecret: () => true, ceiling: 'cheap' };
  const r = buildChain('meta-llama/llama-3.1-70b-instruct', env);
  strictEqual(r.routeAboveCeiling, true);
  deepStrictEqual(names(r), ['nvidia']);
});

// ── the cost rule (CF-06) ─────────────────────────────────────────────────
test('failover never escalates cost: anthropic is unreachable unless routed', () => {
  const r = buildChain(DEFAULT_MODEL, withSecrets('nvidia', 'openrouter', 'anthropic'));
  ok(!names(r).includes('anthropic'), 'a cheap route must never fall back onto a premium provider');
});

test('a missing routed secret falls sideways or down, never up', () => {
  // NVIDIA routed but unconfigured, Anthropic sitting right there with a key:
  // the bill must not move to Anthropic just because NVIDIA is absent.
  const r = buildChain(DEFAULT_MODEL, withSecrets('anthropic'));
  strictEqual(r.routedProviderUnavailable, true);
  deepStrictEqual(r.chain, [], 'nothing at or below the cheap tier is configured, so nothing serves');
});

test('routing to premium may de-escalate to cheaper providers', () => {
  // The reverse direction is fine: paying less than routed is never the failure
  // we are guarding against, and it beats failing the request.
  const r = buildChain('claude-sonnet-5', ceilingRaised(withSecrets('nvidia', 'anthropic')));
  strictEqual(r.chain[0].provider, 'anthropic');
  ok(names(r).includes('nvidia'), 'a premium route may fall back to a cheap one');
});

test('failover order is cheapest first', () => {
  const r = buildChain('claude-sonnet-5', ceilingRaised(withSecrets('nvidia', 'openrouter', 'anthropic')));
  deepStrictEqual(names(r), ['anthropic', 'nvidia', 'openrouter']);
});

// ── missing secrets are skipped, not errors ───────────────────────────────
test('a provider with no secret is skipped, not errored', () => {
  const r = buildChain(DEFAULT_MODEL, withSecrets('nvidia'));
  deepStrictEqual(names(r), ['nvidia'], 'unconfigured providers simply do not appear');
});

test('no secrets at all yields an empty chain rather than a thrown error', () => {
  const r = buildChain(DEFAULT_MODEL, withSecrets());
  deepStrictEqual(r.chain, []);
  // The caller answers 503 and the client shows canned coaching honestly.
});

// ── unknown ids ───────────────────────────────────────────────────────────
test('an unrecognised routed model serves the default and says so', () => {
  const r = buildChain('who-knows', withSecrets('nvidia'));
  strictEqual(r.unknownModel, true);
  strictEqual(r.routedModel, DEFAULT_MODEL);
  strictEqual(r.chain[0].provider, 'nvidia');
});

test('a recognised model does not raise the unknown flag', () => {
  const r = buildChain(DEFAULT_MODEL, withSecrets('nvidia'));
  strictEqual(r.unknownModel, false);
});

// ── the generic override ──────────────────────────────────────────────────
test('the AI_API override wins only when it is what was routed', () => {
  const env: Env = { hasSecret: () => true, aiApiModel: 'house-model' };
  strictEqual(buildChain('house-model', env).chain[0].provider, 'ai_api');
  // Routing to something else must not hand the call to the override just
  // because it is configured — that was the old first-secret-wins behaviour.
  strictEqual(buildChain(DEFAULT_MODEL, env).chain[0].provider, 'nvidia');
});

test('the AI_API override routed but unconfigured falls through to normal resolution', () => {
  const env: Env = { hasSecret: (p) => p === 'nvidia', aiApiModel: 'house-model' };
  const r = buildChain('house-model', env);
  strictEqual(r.unknownModel, true, 'house-model is not in the registry once the override is out');
  strictEqual(r.chain[0].provider, 'nvidia');
});

// ── tiers ─────────────────────────────────────────────────────────────────
test('the operator override is not ranked cheap, because its cost is unknown to us', () => {
  strictEqual(PROVIDER_TIER.ai_api, 'standard');
  strictEqual(PROVIDER_TIER.nvidia, 'cheap');
  strictEqual(PROVIDER_TIER.anthropic, 'premium');
});
