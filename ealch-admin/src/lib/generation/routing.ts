// Resolves the AI model currently routed to the 'content' capability — the
// same ai_capabilities/ai_models/ai_routing tables the OPR console's AI
// routing UI already manages (Phase 3, CF-05/06). Reusing this instead of a
// hardcoded model means changing which provider/model generates content is
// a console setting, not a code change.
import { eq } from 'drizzle-orm';
import type { DB } from '../../db';
import { aiCapabilities, aiModels, aiRouting } from '../../db/schema';

export interface RoutedModel {
  modelId: string;
  /** Display name, for logs/audit only — NEVER pass this to a provider. */
  name: string;
  provider: string;
  /** The literal string to send as `model` in the provider request — falls
   *  back to `name` when a row has no apiModelId (see the column's own
   *  comment in schema.ts for why that fallback exists). */
  apiModel: string;
}

/** Returns null, never a throw, when the 'content' capability has no active
 *  route — a missing route is an expected, actionable state (nobody has set
 *  one up yet, or a real Supabase project was never seeded with the console's
 *  mock AI-routing rows), not a bug. The caller decides how loudly to react:
 *  the CLI dies with a clear message, the admin action returns a form error. */
export async function resolveContentModel(d: DB): Promise<RoutedModel | null> {
  const rows = await d
    .select({ modelId: aiModels.id, name: aiModels.name, provider: aiModels.provider, apiModelId: aiModels.apiModelId })
    .from(aiRouting)
    .innerJoin(aiCapabilities, eq(aiRouting.capabilityId, aiCapabilities.id))
    .innerJoin(aiModels, eq(aiRouting.activeModelId, aiModels.id))
    .where(eq(aiCapabilities.key, 'content'))
    .limit(1);
  const row = rows[0];
  if (!row) return null;
  return { modelId: row.modelId, name: row.name, provider: row.provider, apiModel: row.apiModelId ?? row.name };
}
