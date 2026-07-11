// Auth.js v5 — email+password credentials with TOTP 2FA.
// The login form posts email, password, and the 6-digit TOTP code together;
// authorize() verifies all three. Sessions are JWT cookies carrying id/role,
// consumed by middleware and every server action for RBAC.
import NextAuth, { type DefaultSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { authenticator } from 'otplib';
import { db, schema } from '@/db';
import type { Role } from '@/lib/rbac';

declare module 'next-auth' {
  interface Session {
    user: { id: string; role: Role; name: string; email: string } & DefaultSession['user'];
  }
  interface User {
    role?: Role;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' },
  providers: [
    Credentials({
      credentials: { email: {}, password: {}, totp: {} },
      authorize: async (creds) => {
        const email = String(creds?.email ?? '').toLowerCase().trim();
        const password = String(creds?.password ?? '');
        const totp = String(creds?.totp ?? '').replace(/\s+/g, '');
        if (!email || !password) return null;

        const d = await db();
        const [admin] = await d
          .select()
          .from(schema.adminUsers)
          .where(eq(schema.adminUsers.email, email))
          .limit(1);
        if (!admin) return null;

        const passOk = await bcrypt.compare(password, admin.passwordHash);
        if (!passOk) return null;

        if (admin.totpSecret) {
          if (!totp || !authenticator.verify({ token: totp, secret: admin.totpSecret })) return null;
        }

        await d
          .update(schema.adminUsers)
          .set({ lastLoginAt: new Date() })
          .where(eq(schema.adminUsers.id, admin.id));

        return { id: admin.id, name: admin.name, email: admin.email, role: admin.role };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session: ({ session, token }) => {
      session.user.id = token.id as string;
      session.user.role = token.role as Role;
      return session;
    },
  },
});
