// Public tracked-link redirect: /l/<slug> → destination, recording a click.
// Unknown or archived slugs fall through to the marketing site.
import { NextResponse, type NextRequest } from 'next/server';
import { and, eq } from 'drizzle-orm';
import { db, schema } from '@/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const FALLBACK_URL = 'https://ealch.app';

function platformFromUA(ua: string): 'ios' | 'android' | 'other' {
  if (/iphone|ipad|ipod|ios/i.test(ua)) return 'ios';
  if (/android/i.test(ua)) return 'android';
  return 'other';
}

export async function GET(
  req: NextRequest,
  ctx: { params: Promise<{ slug: string }> },
) {
  const { slug } = await ctx.params;
  try {
    const d = await db();
    const [link] = await d
      .select()
      .from(schema.trackedLinks)
      .where(
        and(
          eq(schema.trackedLinks.slug, slug),
          eq(schema.trackedLinks.archived, false),
        ),
      )
      .limit(1);
    if (!link) return NextResponse.redirect(FALLBACK_URL, 302);

    try {
      await d.insert(schema.linkClicks).values({
        linkId: link.id,
        country:
          req.headers.get('x-vercel-ip-country') ??
          req.headers.get('cf-ipcountry') ??
          null,
        platform: platformFromUA(req.headers.get('user-agent') ?? ''),
        referrer: req.headers.get('referer'),
      });
    } catch {
      // Click logging must never block the redirect.
    }

    return NextResponse.redirect(link.destinationUrl, 302);
  } catch {
    return NextResponse.redirect(FALLBACK_URL, 302);
  }
}
