
import { get, post } from "@/lib/Api";
import { SafeUser} from "@/types/User";
import { useUserStore } from "@/store/useUserStore";

interface AuthResponse {
  success: boolean;
  message?: string;
  data?: {
    user: SafeUser;
  };
  timestamp: string;
}

export async function signIn(data: { email: string; password: string } | FormData) {
  const body =
    data instanceof FormData ? Object.fromEntries(data.entries()) : data;
  const res = await post<AuthResponse>("/auth/login", body);

  if (!res?.data?.user) {
    return (res?.message || "Login failed");
  }

  // Update user store
  const { setUser } = useUserStore.getState();
  setUser(res.data.user);

  return;
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
    if (res?.data?.user) {
      return { user: res?.data?.user };
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
