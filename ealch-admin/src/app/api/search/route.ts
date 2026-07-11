// Command-palette search — auth-guarded fuzzy (ilike) lookup across users,
// content units and tracked links, plus static navigation destinations.
import { NextResponse, type NextRequest } from 'next/server';
import { ilike, or } from 'drizzle-orm';
import { auth } from '@/auth';
import { db, schema } from '@/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const NAV = [
  { label: 'Overview', href: '/admin/overview' },
  { label: 'Users', href: '/admin/users' },
  { label: 'Billing & revenue', href: '/admin/billing' },
  { label: 'Push notifications', href: '/admin/notifications' },
  { label: 'Content', href: '/admin/content' },
  { label: 'AI model routing', href: '/admin/ai' },
  { label: 'Performance', href: '/admin/performance' },
  { label: 'Link tracking', href: '/admin/links' },
  { label: 'Releases & flags', href: '/admin/releases' },
];

export interface SearchResults {
  users: { id: string; name: string; email: string }[];
  content: { id: string; title: string; slug: string }[];
  links: { id: string; slug: string }[];
  nav: { label: string; href: string }[];
}

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const q = (req.nextUrl.searchParams.get('q') ?? '').trim();
  const nav = q
    ? NAV.filter((n) => n.label.toLowerCase().includes(q.toLowerCase()))
    : NAV;

  if (!q) {
    return NextResponse.json({
      users: [],
      content: [],
      links: [],
      nav,
    } satisfies SearchResults);
  }

  const like = `%${q}%`;
  const d = await db();
  const [users, content, links] = await Promise.all([
    d
      .select({
        id: schema.users.id,
        name: schema.users.displayName,
        email: schema.users.email,
      })
      .from(schema.users)
      .where(
        or(
          ilike(schema.users.displayName, like),
          ilike(schema.users.email, like),
        ),
      )
      .limit(5),
    d
      .select({
        id: schema.contentUnits.id,
        title: schema.contentUnits.title,
        slug: schema.contentUnits.slug,
      })
      .from(schema.contentUnits)
      .where(
        or(
          ilike(schema.contentUnits.title, like),
          ilike(schema.contentUnits.slug, like),
        ),
      )
      .limit(5),
    d
      .select({ id: schema.trackedLinks.id, slug: schema.trackedLinks.slug })
      .from(schema.trackedLinks)
      .where(ilike(schema.trackedLinks.slug, like))
      .limit(5),
  ]);

  return NextResponse.json({ users, content, links, nav } satisfies SearchResults);
}
