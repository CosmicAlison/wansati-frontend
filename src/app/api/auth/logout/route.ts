import { NextResponse } from 'next/server';

export async function POST() {
	// Clear the session cookie by setting an expired cookie
	const expired = `session=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
	const res = NextResponse.json({ ok: true });
	res.headers.set('Set-Cookie', expired);
	return res;
}
