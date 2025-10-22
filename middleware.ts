
import { NextResponse } from 'next/server';

export function middleware(req: Request) {
  const { pathname } = new URL(req.url);

  // Protect dashboard routes
  if (pathname.startsWith('/dashboard')) {
    const cookie = req.headers.get('cookie') || '';
    const hasSession = /(?:^|; )session=([^;]+)/.test(cookie);
    if (!hasSession) {
      const loginUrl = new URL('/auth/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/dashboard'],
  runtime: 'nodejs',
};

