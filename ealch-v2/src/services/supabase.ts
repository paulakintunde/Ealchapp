import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { ENV, hasSupabase } from './env';

let client: SupabaseClient | null = null;

/** Lazily-created Supabase client, or null when not configured (offline mode). */
export function supabase(): SupabaseClient | null {
  if (!hasSupabase()) return null;
  if (!client) {
    // A malformed EXPO_PUBLIC_SUPABASE_URL makes createClient throw synchronously;
    // treat it exactly like "not configured" so the app stays on the offline path.
    try {
      new URL(ENV.supabaseUrl);
      client = createClient(ENV.supabaseUrl, ENV.supabaseAnonKey, {
        auth: {
          storage: AsyncStorage,
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: false,
        },
      });
    } catch {
      return null;
    }
  }
  return client;
}
