import { NextResponse } from "next/server";

export async function POST() {
  const dummyUser = {
    name: "Alice Johnson",
    role: "Software Engineer • Johannesburg",
    profileUrl: "https://wansati.s3.ap-southeast-2.amazonaws.com/alice_tech.jpg",
    username: "alice_tech",
    id: 1,
    createdAt: "",
    email: "alice.tech@example.com",
  }
  const res = NextResponse.json({ success: true, message: "Dummy login active", data: {user: dummyUser}, timestamp:"" });
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
