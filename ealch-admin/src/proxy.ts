// Guards /admin/** behind an authenticated session (Next 16 `proxy` convention,
// Node runtime). Uses the JWT cookie only — no DB roundtrip on navigation.
import { NextResponse, type NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function proxy(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
    secureCookie: process.env.NODE_ENV === 'production',
  });
  if (!token) {
    const login = new URL('/login', req.url);
    login.searchParams.set('next', req.nextUrl.pathname);
    return NextResponse.redirect(login);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
