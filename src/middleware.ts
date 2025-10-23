import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log("Middleware running for:", pathname);

  // Protect only dashboard routes
  if (pathname.startsWith("/dashboard")) {
    const token = req.cookies.get("token");
    console.log("Token found in cookies:", token);
    if (!token) {
      const loginUrl = new URL("/auth/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [ "/dashboard/:path*"], 
};
