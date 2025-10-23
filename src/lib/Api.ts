import { auth } from "@/auth";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";


export async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "GET",
    credentials: "include", 
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "Request failed");
    throw new Error(text);
  }

  return res.json();
}

export async function post<T>(path: string, body: any): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "Request failed");
    throw new Error(text);
  }

  return res.json();
}

export async function put<T>(path: string, body: any): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "PUT",
    credentials: "include",
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "Request failed");
    throw new Error(text);
  }

  return res.json();
}

export async function del<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "Request failed");
    throw new Error(text);
  }

  return res.json();
}
