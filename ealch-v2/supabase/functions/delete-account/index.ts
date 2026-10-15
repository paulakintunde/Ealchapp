// delete-account — permanently destroys the calling user's account.
//
// Apple 5.1.1(v) and Google Play both require in-app account deletion for any
// app that lets users create an account. This is the server half; app/delete-account.tsx
// is the client half.
//
// Why an Edge Function and not a client call: deleting an auth user requires the
// service-role key, which must never reach the client bundle. The caller proves
// who they are with their own JWT; the function then escalates, deletes *that*
// user id, and nothing else. A caller can only ever delete themselves.
//
// Cascade: profiles, attempts and sessions all declare
// `references auth.users(id) on delete cascade` (see supabase/schema.sql), so
// removing the auth user removes their rows in the same transaction. Any NEW
// user-owned table MUST carry the same cascade or it will orphan data here.
//
// Phase 10: the optional POST body `{ install_id }` also removes that install's
// guest-era problem_reports (user_id null), which the cascade cannot reach.
//
// Deploy:
//   supabase functions deploy delete-account
// Requires (auto-injected by Supabase, no manual secrets needed):
//   SUPABASE_URL · SUPABASE_ANON_KEY · SUPABASE_SERVICE_ROLE_KEY
import { createClient } from 'jsr:@supabase/supabase-js@2';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'method-not-allowed' }, 405);

  const authHeader = req.headers.get('Authorization');
  if (!authHeader) return json({ error: 'missing-authorization' }, 401);

  const url = Deno.env.get('SUPABASE_URL');
  const anonKey = Deno.env.get('SUPABASE_ANON_KEY');
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!url || !anonKey || !serviceKey) return json({ error: 'server-misconfigured' }, 500);

  // 1. Establish WHO is calling, using their token and the anon key only.
  //    An expired or forged JWT dies here, before any privileged client exists.
  const caller = createClient(url, anonKey, {
    global: { headers: { Authorization: authHeader } },
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: userData, error: userErr } = await caller.auth.getUser();
  const user = userData?.user;
  if (userErr || !user) return json({ error: 'invalid-session' }, 401);

  // 2. Escalate, and delete strictly that id. The user id comes from the
  //    verified token — never from the request body — so this cannot be
  //    steered at another account.
  const admin = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error: deleteErr } = await admin.auth.admin.deleteUser(user.id);
  if (deleteErr) {
    console.error('delete-account failed', { userId: user.id, message: deleteErr.message });
    return json({ error: 'delete-failed' }, 500);
  }

  // 3. Phase 10 (D-20): problem_reports rows of this account went with the cascade above.
  //    Guest-era reports from the same install (user_id null) are removed by install_id.
  //    The id is client-asserted, but only user_id-null rows for that random id can match,
  //    and the caller already holds a valid session. A failure here is logged, not fatal.
  let installId: string | null = null;
  try {
    const body = await req.json();
    if (body && typeof body.install_id === 'string' && /^[A-Za-z0-9_-]{8,64}$/.test(body.install_id)) {
      installId = body.install_id;
    }
  } catch {
    // No body or not JSON: nothing to clean up by install.
  }
  if (installId) {
    const { error: guestErr } = await admin
      .from('problem_reports')
      .delete()
      .eq('install_id', installId)
      .is('user_id', null);
    if (guestErr) console.error('delete-account guest reports failed', { message: guestErr.message });
  }

  return json({ ok: true }, 200);
});
