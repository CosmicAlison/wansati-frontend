
export async function signIn(data: { email: string; password: string } | FormData) {
  let body: any;
  if (data instanceof FormData) {
    body = Object.fromEntries(data.entries());
  } else {
    body = data;
  }

  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Login failed' }));
    throw new Error(err.error || 'Login failed');
  }

  return res.json();
}

export async function signOut() {
  await fetch('/api/auth/logout', { method: 'POST' });
}

export async function getSession() {
  const res = await fetch('/api/auth/me');
  if (!res.ok) return null;
  const data = await res.json();
  // return the user object (may include token)
  return data.user ? { user: data.user, token: data.user.token ?? null } : null;
}

// Compatibility: export a simple auth() function similar to previous NextAuth handler
// so existing code that calls `await auth()` still works.
export async function auth() {
  const session = await getSession();
  // previous code expected a session object with `user` property
  return session;
}
