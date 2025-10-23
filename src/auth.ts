
import { get, post } from "@/lib/Api";
import { User } from "@/types/User";

interface AuthResponse {
  user: User;
  message?: string;
}

export async function signIn(data: { email: string; password: string } | FormData) {
  const body =
    data instanceof FormData ? Object.fromEntries(data.entries()) : data;

  const res = await post<AuthResponse>("/auth/login", body);

  if (!res?.user) {
    throw new Error(res?.message || "Login failed");
  }

  return res;
}

export async function signOut() {
  try {
    // Backend should clear the cookie
    await post("/auth/logout", {});
  } catch (err) {
    console.error("Logout failed:", err);
  }
}

export async function getSession() {
  try {
    const res = await get<AuthResponse>("/auth/me");
    if (res?.user) {
      return { user: res.user };
    }

    return null;
  } catch (err) {
    console.error("Session fetch failed:", err);
    return null;
  }
}

export async function auth() {
  return await getSession();
}
