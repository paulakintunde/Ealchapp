// Coach provider routing — the pure decision layer.
//
// This file answers one question: given the model the OPR console routed, and
// which provider secrets actually exist, which providers do we call and in what
// order? It holds no secrets, opens no sockets, and touches no Deno globals, so
// it runs under `node --test` (see routing.test.ts). index.ts does the Deno
// wiring; every decision worth arguing about lives here.
//
// WHY THE CONSOLE'S MODEL AND NOT THE CLIENT'S.
// The client sends `model: getConfig().models.general` in the coach body
// (src/services/llm.ts:31). Before this file existed, index.ts destructured only
// { messages, lang, promptVersion } and picked a provider by which secret
// happened to be set — so the console could not steer anything, and the `model`
// field was received and dropped. The fix is NOT to start obeying that field: a
// request that can name its own provider can name the most expensive one, and
// this chain can reach Anthropic at multiples of the cheap tier. Cost is a
// server-side decision. index.ts reads the routed model from `system_config`
// (service-role) and passes it here; the client's value is advisory, logged for
// observability, never obeyed.
//
// This file is import-free on purpose, exactly like src/content/schema.ts: it is
// shared by the Deno function and a plain-Node test runner, so it can depend on
// neither world.

/** Providers this function knows how to call. A provider is only ever usable if
 *  its secret is present — see `Env.hasSecret`. */
export type ProviderName = 'ai_api' | 'openrouter' | 'nvidia' | 'anthropic';

/** Relative spend per call. Used for one rule only: never fail over UPWARDS.
 *
 *  These are static tiers, not prices. Commit 2 replaces the comparison with a
 *  real `cost_ceiling_cents` sourced from `ai_models`; until then a conservative
 *  static ordering is honest about what we actually know. `ai_api` is the
 *  operator's generic OpenAI-compatible override, so its true cost is unknown to
 *  us and it is deliberately NOT ranked cheap. */
export type CostTier = 'cheap' | 'standard' | 'premium';

const TIER_ORDER: Record<CostTier, number> = { cheap: 0, standard: 1, premium: 2 };

export const PROVIDER_TIER: Record<ProviderName, CostTier> = {
  nvidia: 'cheap',
  openrouter: 'standard',
  ai_api: 'standard',
  anthropic: 'premium',
};

/** The CF-05 default. Mirrors src/services/config.ts DEFAULTS.models.general and
 *  supabase/schema.sql. If the console has never been synced, or routes a model
 *  we do not recognise, this is what serves. */
export const DEFAULT_MODEL = 'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning';

/** Model id → provider, mirroring `ai_models.provider` in the admin schema.
 *
 *  Exact ids win; the prefix rules below cover new models on a provider we
 *  already implement, so adding one is a console edit rather than a redeploy.
 *  A genuinely new PROVIDER always needs code here (something has to know how to
 *  call it and which secret it uses), which is why this registry exists at all
 *  rather than trusting a provider name from config. */
export const MODEL_PROVIDER: Record<string, ProviderName> = {
  [DEFAULT_MODEL]: 'nvidia',
};

/** Checked in order. First match wins. */
export const PREFIX_RULES: ReadonlyArray<{ prefix: string; provider: ProviderName }> = [
  // NVIDIA namespaces its own catalogue.
  { prefix: 'nvidia/', provider: 'nvidia' },
  // Anthropic's bare ids (`claude-sonnet-5`). Note `anthropic/claude-…` (with a
  // vendor slash) is OpenRouter's spelling and is matched by the slash rule
  // below — same family, different bill.
  { prefix: 'claude-', provider: 'anthropic' },
];

/** OpenRouter addresses everything as `vendor/model`. Anything namespaced that
 *  we have not already claimed is therefore an OpenRouter id. */
function isVendorNamespaced(model: string): boolean {
  return model.includes('/');
}

/** Resolve a routed model id to the provider that serves it.
 *  Returns null when we do not recognise it — callers must not guess. */
export function providerForModel(model: string): ProviderName | null {
  const id = model.trim();
  if (!id) return null;
  const exact = MODEL_PROVIDER[id];
  if (exact) return exact;
  for (const rule of PREFIX_RULES) {
    if (id.startsWith(rule.prefix)) return rule.provider;
  }
  if (isVendorNamespaced(id)) return 'openrouter';
  return null;
}

export type Env = {
  /** True when the provider's secret is set. A provider without its secret is
   *  skipped, never called and never an error. */
  hasSecret: (p: ProviderName) => boolean;
  /** AI_API_MODEL, when the operator configured the generic override. If the
   *  routed model matches it exactly, the override is what was routed. */
  aiApiModel?: string | null;
};

export type ChainEntry = {
  provider: ProviderName;
  /** The model id to ask this provider for. */
  model: string;
  tier: CostTier;
  role: 'primary' | 'failover';
};

export type Resolution = {
  chain: ChainEntry[];
  /** The model actually routed (after falling back to DEFAULT_MODEL). */
  routedModel: string;
  /** True when the routed id was unrecognised and DEFAULT_MODEL was substituted.
   *  index.ts reports this to PostHog: the console asked for something we cannot
   *  serve, and an operator needs to see that rather than wonder why. */
  unknownModel: boolean;
  /** True when the routed provider had no secret and something cheaper served
   *  instead. Also worth an event: routing says one thing, reality another. */
  routedProviderUnavailable: boolean;
};

const ALL: ProviderName[] = ['nvidia', 'openrouter', 'ai_api', 'anthropic'];

/**
 * Build the provider chain for a routed model.
 *
 * Two rules, both load-bearing:
 *
 *  1. The routed provider is the primary. Not "whichever secret is set first",
 *     which is what this function replaced.
 *  2. Failover never escalates cost. A provider may only serve as a fallback if
 *     it is no more expensive than what was routed, so a missing NVIDIA secret
 *     can never quietly hand the bill to Anthropic. Anthropic is reachable only
 *     by routing to it explicitly — that is the CF-06 margin rule, in code.
 *     De-escalation is fine and deliberate: routing to a premium model and
 *     failing over to a cheap one costs less than failing the request.
 */
export function buildChain(model: string, env: Env): Resolution {
  const requested = (model || '').trim();
  const aiApi = (env.aiApiModel || '').trim();

  // The operator's generic override, when it is what the console routed.
  if (aiApi && requested === aiApi) {
    if (env.hasSecret('ai_api')) {
      return {
        chain: withFailover({ provider: 'ai_api', model: requested, tier: PROVIDER_TIER.ai_api, role: 'primary' }, env),
        routedModel: requested,
        unknownModel: false,
        routedProviderUnavailable: false,
      };
    }
    // Override routed but unconfigured: fall through to normal resolution.
  }

  let routedModel = requested;
  let provider = providerForModel(routedModel);
  let unknownModel = false;

  if (!provider) {
    // Do not guess a provider for an id we do not know. Serve the documented
    // default and let telemetry say so.
    unknownModel = true;
    routedModel = DEFAULT_MODEL;
    provider = providerForModel(DEFAULT_MODEL)!;
  }

  const primary: ChainEntry = {
    provider,
    model: routedModel,
    tier: PROVIDER_TIER[provider],
    role: 'primary',
  };

  if (env.hasSecret(provider)) {
    return { chain: withFailover(primary, env), routedModel, unknownModel, routedProviderUnavailable: false };
  }

  // Routed provider has no secret. Everything at or below its tier may serve;
  // nothing above it may. If that leaves nothing, the chain is empty and the
  // caller answers honestly rather than inventing a reply.
  const chain = failoversFor(primary, env);
  return { chain, routedModel, unknownModel, routedProviderUnavailable: true };
}

function withFailover(primary: ChainEntry, env: Env): ChainEntry[] {
  return [primary, ...failoversFor(primary, env)];
}

/** Configured providers, no more expensive than `primary`, cheapest first. */
function failoversFor(primary: ChainEntry, env: Env): ChainEntry[] {
  const ceiling = TIER_ORDER[primary.tier];
  return ALL.filter((p) => p !== primary.provider)
    .filter((p) => env.hasSecret(p))
    .filter((p) => TIER_ORDER[PROVIDER_TIER[p]] <= ceiling)
    .sort((a, b) => TIER_ORDER[PROVIDER_TIER[a]] - TIER_ORDER[PROVIDER_TIER[b]])
    .map((p) => ({
      provider: p,
      // A fallback provider serves its own default model, not the routed id:
      // asking OpenRouter for `nvidia/nemotron-…` would 404. index.ts supplies
      // the per-provider default from its env.
      model: '',
      tier: PROVIDER_TIER[p],
      role: 'failover' as const,
    }));
}
