import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.json({ message: "Dummy login active" });
  res.cookies.set({
    name: "token",
    value: "dummy12345",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });
  return res;
}
