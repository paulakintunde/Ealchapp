// Mounts Auth.js HTTP endpoints (session, csrf, callbacks, signout).
import { handlers } from '@/auth';

export const runtime = 'nodejs';

export const { GET, POST } = handlers;
