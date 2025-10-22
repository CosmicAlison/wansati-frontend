import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const cookie = req.headers.get('cookie') || '';
    const match = cookie.match(/(?:^|; )session=([^;]+)/);
    if (!match) return NextResponse.json({ user: null });

    const payload = decodeURIComponent(match[1]);
    try {
      const session = JSON.parse(payload);
      // Merge token into user for compatibility with previous session.user.token usage
      const user = session.user ? { ...session.user, token: session.token } : null;
      return NextResponse.json({ user });
    } catch (e) {
      return NextResponse.json({ user: null });
    }
  } catch (error) {
    return NextResponse.json({ user: null });
  }
}
