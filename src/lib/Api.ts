import { auth } from "@/auth";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Helper to get headers with optional auth token
async function getHeaders() {
  const session = await auth();
  const headers: HeadersInit = { "Content-Type": "application/json" };
  if (session?.user?.token) {
    headers["Authorization"] = `Bearer ${session.user.token}`;
  }
  return headers;
}

export async function get<T>(path: string): Promise<T> {
  const headers = await getHeaders();
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "GET",
    headers,
    credentials: "include",
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function post<T>(path: string, body: any): Promise<T> {
  const headers = await getHeaders();
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers,
    credentials: "include",
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function put<T>(path: string, body: any): Promise<T> {
  const headers = await getHeaders();
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "PUT",
    headers,
    credentials: "include",
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function del<T>(path: string): Promise<T> {
  const headers = await getHeaders();
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "DELETE",
    headers,
    credentials: "include",
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
